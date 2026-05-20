/**
 * Docker LabVIEWCLI Execution Adapter
 *
 * This module provides the execution adapter for spawning Docker containers
 * with LabVIEWCLI using the nationalinstruments/labview:latest-linux image.
 *
 * Slice: runtime-execution-docker-labviewcli-v1
 */

import { spawn } from "node:child_process";

// Requirement mappings
export const DOCKER_EXECUTION_REQUIREMENTS = Object.freeze({
  containerSpawn: Object.freeze(["VHS-REQ-630"]),
  volumeMount: Object.freeze(["VHS-REQ-631"]),
  headlessFlag: Object.freeze(["VHS-REQ-632"]),
  streamCapture: Object.freeze(["VHS-REQ-633"]),
  exitCode: Object.freeze(["VHS-REQ-634"]),
  timeout: Object.freeze(["VHS-REQ-635"])
});

export const DOCKER_EXECUTION_BLOCKED_SIDE_EFFECTS = Object.freeze([
  "docker-image-building",
  "multi-family-image-selection",
  "docker-availability-checking",
  "container-orchestration",
  "marketplace-publication"
]);

const DOCKER_IMAGE = "nationalinstruments/labview:latest-linux";
const DEFAULT_TIMEOUT_MS = 600000; // 10 minutes
const MAX_TIMEOUT_MS = 3600000;    // 1 hour
const GRACEFUL_TERM_MS = 5000;     // 5 seconds for graceful termination

/**
 * Returns all requirement IDs for Docker execution.
 */
export function allDockerExecutionRequirementIds() {
  const ids = new Set();
  for (const reqArray of Object.values(DOCKER_EXECUTION_REQUIREMENTS)) {
    for (const id of reqArray) {
      ids.add(id);
    }
  }
  return [...ids].sort();
}

/**
 * Executes LabVIEWCLI CreateComparisonReport inside a Docker container.
 *
 * This function spawns a Docker container with the hardcoded
 * nationalinstruments/labview:latest-linux image and captures stdout,
 * stderr, and exit code.
 *
 * @param {Object} input - Execution input
 * @param {Object} input.commandFacts - Command facts from createDockerComparisonReportCommand
 * @param {number} [input.timeoutMs] - Execution timeout in milliseconds (default: 600000)
 * @returns {Promise<Object>} Execution outcome facts
 */
export async function executeDockerComparisonReport(input = {}) {
  const commandFacts = requireCommandFacts(input.commandFacts);
  const timeoutMs = normalizeTimeout(input.timeoutMs);

  const startTime = Date.now();

  return new Promise((resolve) => {
    let stdout = "";
    let stderr = "";
    let timedOut = false;

    const childProcess = spawn(
      commandFacts.executable,  // "docker"
      commandFacts.arguments,
      {
        shell: false
      }
    );

    // Timeout handling
    const timeoutHandle = setTimeout(() => {
      timedOut = true;

      // Try graceful termination first (docker stop)
      try {
        childProcess.kill("SIGTERM");
      } catch {
        // Process may already be dead
      }

      // Force kill after grace period
      setTimeout(() => {
        try {
          if (!childProcess.killed) {
            childProcess.kill("SIGKILL");
          }
        } catch {
          // Process may already be dead
        }
      }, GRACEFUL_TERM_MS);
    }, timeoutMs);

    // Stream capture
    childProcess.stdout.on("data", (data) => {
      stdout += data.toString();
    });

    childProcess.stderr.on("data", (data) => {
      stderr += data.toString();
    });

    // Error handling
    childProcess.on("error", (error) => {
      clearTimeout(timeoutHandle);
      const durationMs = Date.now() - startTime;

      resolve(createFailedOutcome({
        commandFacts,
        status: "failure",
        exitCode: -1,
        stdout: redactPrivatePaths(stdout),
        stderr: redactPrivatePaths(`Docker spawn error: ${error.message}\n${stderr}`),
        durationMs,
        timedOut: false,
        failureReason: "docker-spawn-error"
      }));
    });

    // Completion handling
    childProcess.on("close", (exitCode, signal) => {
      clearTimeout(timeoutHandle);
      const durationMs = Date.now() - startTime;

      if (timedOut) {
        resolve(createTimeoutOutcome({
          commandFacts,
          stdout: redactPrivatePaths(stdout),
          stderr: redactPrivatePaths(stderr),
          durationMs,
          timeoutMs
        }));
        return;
      }

      const actualExitCode = exitCode ?? (signal ? -1 : 0);
      const success = actualExitCode === 0;

      resolve(createSuccessOutcome({
        commandFacts,
        status: success ? "success" : "failure",
        exitCode: actualExitCode,
        stdout: redactPrivatePaths(stdout),
        stderr: redactPrivatePaths(stderr),
        durationMs,
        success
      }));
    });
  });
}

/**
 * Creates a mock Docker execution for testing purposes.
 *
 * This returns outcome facts without actually spawning a Docker container.
 * Useful for unit testing the outcome structure.
 *
 * @param {Object} input - Mock execution input
 * @returns {Object} Mock execution outcome facts
 */
export function createMockDockerExecution(input = {}) {
  const commandFacts = requireCommandFacts(input.commandFacts);
  const exitCode = input.exitCode ?? 0;
  const stdout = input.stdout ?? "";
  const stderr = input.stderr ?? "";
  const durationMs = input.durationMs ?? 1000;
  const timedOut = input.timedOut ?? false;

  if (timedOut) {
    return createTimeoutOutcome({
      commandFacts,
      stdout: redactPrivatePaths(stdout),
      stderr: redactPrivatePaths(stderr),
      durationMs,
      timeoutMs: input.timeoutMs ?? DEFAULT_TIMEOUT_MS
    });
  }

  const success = exitCode === 0;

  return freezeRecord({
    kind: "docker-execution-outcome",
    status: success ? "success" : "failure",
    executionContext: "docker",
    operationName: commandFacts.operationName,
    dockerImage: DOCKER_IMAGE,
    headless: true,
    volumeMounts: commandFacts.volumeMounts,
    exitCode,
    success,
    timedOut: false,
    diagnostics: {
      stdout: redactPrivatePaths(stdout),
      stderr: redactPrivatePaths(stderr),
      durationMs
    },
    outputPath: commandFacts.inputs.outputPath,
    blockedSideEffects: DOCKER_EXECUTION_BLOCKED_SIDE_EFFECTS,
    requirementIds: allDockerExecutionRequirementIds()
  });
}

// Helper functions

function requireCommandFacts(commandFacts) {
  if (!commandFacts || typeof commandFacts !== "object") {
    throw new Error("commandFacts is required and must be an object");
  }
  if (commandFacts.kind !== "comparison-report-command") {
    throw new Error("commandFacts must come from createDockerComparisonReportCommand");
  }
  if (commandFacts.executionContext !== "docker") {
    throw new Error("commandFacts must be for docker execution context");
  }
  return commandFacts;
}

function normalizeTimeout(timeoutMs) {
  if (timeoutMs === undefined || timeoutMs === null) {
    return DEFAULT_TIMEOUT_MS;
  }
  const timeout = Number(timeoutMs);
  if (Number.isNaN(timeout) || timeout < 1000) {
    return DEFAULT_TIMEOUT_MS;
  }
  if (timeout > MAX_TIMEOUT_MS) {
    return MAX_TIMEOUT_MS;
  }
  return timeout;
}

function createSuccessOutcome({ commandFacts, status, exitCode, stdout, stderr, durationMs, success }) {
  return freezeRecord({
    kind: "docker-execution-outcome",
    status,
    executionContext: "docker",
    operationName: commandFacts.operationName,
    dockerImage: DOCKER_IMAGE,
    headless: true,
    volumeMounts: commandFacts.volumeMounts,
    exitCode,
    success,
    timedOut: false,
    diagnostics: {
      stdout,
      stderr,
      durationMs
    },
    outputPath: commandFacts.inputs.outputPath,
    blockedSideEffects: DOCKER_EXECUTION_BLOCKED_SIDE_EFFECTS,
    requirementIds: allDockerExecutionRequirementIds()
  });
}

function createFailedOutcome({ commandFacts, status, exitCode, stdout, stderr, durationMs, timedOut, failureReason }) {
  return freezeRecord({
    kind: "docker-execution-outcome",
    status,
    executionContext: "docker",
    operationName: commandFacts.operationName,
    dockerImage: DOCKER_IMAGE,
    headless: true,
    volumeMounts: commandFacts.volumeMounts,
    exitCode,
    success: false,
    timedOut,
    failureReason,
    diagnostics: {
      stdout,
      stderr,
      durationMs
    },
    outputPath: commandFacts.inputs.outputPath,
    blockedSideEffects: DOCKER_EXECUTION_BLOCKED_SIDE_EFFECTS,
    requirementIds: allDockerExecutionRequirementIds()
  });
}

function createTimeoutOutcome({ commandFacts, stdout, stderr, durationMs, timeoutMs }) {
  return freezeRecord({
    kind: "docker-execution-outcome",
    status: "timeout",
    executionContext: "docker",
    operationName: commandFacts.operationName,
    dockerImage: DOCKER_IMAGE,
    headless: true,
    volumeMounts: commandFacts.volumeMounts,
    exitCode: -1,
    success: false,
    timedOut: true,
    timeoutMs,
    diagnostics: {
      stdout,
      stderr,
      durationMs
    },
    outputPath: commandFacts.inputs.outputPath,
    blockedSideEffects: DOCKER_EXECUTION_BLOCKED_SIDE_EFFECTS,
    requirementIds: allDockerExecutionRequirementIds()
  });
}

function redactPrivatePaths(text) {
  if (!text) return "";
  return text
    .replace(/C:\\Users\\[^\\]+/gi, "C:\\Users\\[REDACTED]")
    .replace(/\/home\/[^/]+/g, "/home/[REDACTED]")
    .replace(/\/Users\/[^/]+/g, "/Users/[REDACTED]");
}

function freezeRecord(obj) {
  return Object.freeze(obj);
}
