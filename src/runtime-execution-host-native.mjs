/**
 * Host-Native LabVIEWCLI Execution Adapter
 *
 * This module provides the execution adapter for spawning LabVIEWCLI.exe
 * as a child process on Windows host systems.
 *
 * Slice: runtime-execution-host-native-labviewcli-v1
 */

import { spawn } from "node:child_process";
import { access, constants } from "node:fs/promises";

// Requirement mappings
export const HOST_NATIVE_EXECUTION_REQUIREMENTS = Object.freeze({
  processSpawn: Object.freeze(["VHS-REQ-620"]),
  streamCapture: Object.freeze(["VHS-REQ-621"]),
  exitCode: Object.freeze(["VHS-REQ-622"]),
  timeout: Object.freeze(["VHS-REQ-623"]),
  termination: Object.freeze(["VHS-REQ-624"]),
  redaction: Object.freeze(["VHS-REQ-625"])
});

export const HOST_NATIVE_EXECUTION_BLOCKED_SIDE_EFFECTS = Object.freeze([
  "docker-execution",
  "labview-license-validation",
  "interactive-sessions",
  "marketplace-publication"
]);

const DEFAULT_TIMEOUT_MS = 300000; // 5 minutes
const MAX_TIMEOUT_MS = 3600000;    // 1 hour
const GRACEFUL_TERM_MS = 5000;     // 5 seconds for graceful termination

/**
 * Returns all requirement IDs for host-native execution.
 */
export function allHostNativeExecutionRequirementIds() {
  const ids = new Set();
  for (const reqArray of Object.values(HOST_NATIVE_EXECUTION_REQUIREMENTS)) {
    for (const id of reqArray) {
      ids.add(id);
    }
  }
  return [...ids].sort();
}

/**
 * Executes LabVIEWCLI CreateComparisonReport on the host Windows system.
 *
 * This function spawns LabVIEWCLI.exe as a child process and captures
 * stdout, stderr, and exit code.
 *
 * @param {Object} input - Execution input
 * @param {Object} input.commandFacts - Command facts from createHostNativeComparisonReportCommand
 * @param {number} [input.timeoutMs] - Execution timeout in milliseconds (default: 300000)
 * @returns {Promise<Object>} Execution outcome facts
 */
export async function executeHostNativeComparisonReport(input = {}) {
  const commandFacts = requireCommandFacts(input.commandFacts);
  const timeoutMs = normalizeTimeout(input.timeoutMs);

  // Validate executable exists
  const executableCheck = await checkExecutableExists(commandFacts.executable);
  if (!executableCheck.exists) {
    return createFailedOutcome({
      commandFacts,
      status: "failure",
      exitCode: -1,
      stdout: "",
      stderr: `LabVIEWCLI executable not found at: ${redactPath(commandFacts.executable)}`,
      durationMs: 0,
      timedOut: false,
      failureReason: "executable-not-found"
    });
  }

  const startTime = Date.now();

  return new Promise((resolve) => {
    let stdout = "";
    let stderr = "";
    let timedOut = false;
    let terminated = false;

    const childProcess = spawn(
      commandFacts.executable,
      commandFacts.arguments,
      {
        cwd: commandFacts.workingDirectory ?? undefined,
        shell: false,
        windowsHide: true
      }
    );

    // Timeout handling
    const timeoutHandle = setTimeout(() => {
      timedOut = true;
      terminated = true;

      // Try graceful termination first
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
        stderr: redactPrivatePaths(`Process spawn error: ${error.message}\n${stderr}`),
        durationMs,
        timedOut: false,
        failureReason: "spawn-error"
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
 * Creates a mock execution for testing purposes.
 *
 * This returns outcome facts without actually spawning a process.
 * Useful for unit testing the outcome structure.
 *
 * @param {Object} input - Mock execution input
 * @returns {Object} Mock execution outcome facts
 */
export function createMockHostNativeExecution(input = {}) {
  const commandFacts = requireCommandFacts(input.commandFacts);
  const exitCode = input.exitCode ?? 0;
  const stdout = input.stdout ?? "";
  const stderr = input.stderr ?? "";
  const durationMs = input.durationMs ?? 100;
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
    kind: "host-native-execution-outcome",
    status: success ? "success" : "failure",
    executionContext: "host-native",
    operationName: commandFacts.operationName,
    exitCode,
    success,
    timedOut: false,
    diagnostics: {
      stdout: redactPrivatePaths(stdout),
      stderr: redactPrivatePaths(stderr),
      durationMs
    },
    outputPath: commandFacts.inputs.outputPath,
    blockedSideEffects: HOST_NATIVE_EXECUTION_BLOCKED_SIDE_EFFECTS,
    requirementIds: allHostNativeExecutionRequirementIds()
  });
}

// Helper functions

function requireCommandFacts(commandFacts) {
  if (!commandFacts || typeof commandFacts !== "object") {
    throw new Error("commandFacts is required and must be an object");
  }
  if (commandFacts.kind !== "comparison-report-command") {
    throw new Error("commandFacts must come from createHostNativeComparisonReportCommand");
  }
  if (commandFacts.executionContext !== "host-native") {
    throw new Error("commandFacts must be for host-native execution context");
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

async function checkExecutableExists(executablePath) {
  try {
    await access(executablePath, constants.X_OK);
    return { exists: true };
  } catch {
    return { exists: false };
  }
}

function createSuccessOutcome({ commandFacts, status, exitCode, stdout, stderr, durationMs, success }) {
  return freezeRecord({
    kind: "host-native-execution-outcome",
    status,
    executionContext: "host-native",
    operationName: commandFacts.operationName,
    exitCode,
    success,
    timedOut: false,
    diagnostics: {
      stdout,
      stderr,
      durationMs
    },
    outputPath: commandFacts.inputs.outputPath,
    blockedSideEffects: HOST_NATIVE_EXECUTION_BLOCKED_SIDE_EFFECTS,
    requirementIds: allHostNativeExecutionRequirementIds()
  });
}

function createFailedOutcome({ commandFacts, status, exitCode, stdout, stderr, durationMs, timedOut, failureReason }) {
  return freezeRecord({
    kind: "host-native-execution-outcome",
    status,
    executionContext: "host-native",
    operationName: commandFacts.operationName,
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
    blockedSideEffects: HOST_NATIVE_EXECUTION_BLOCKED_SIDE_EFFECTS,
    requirementIds: allHostNativeExecutionRequirementIds()
  });
}

function createTimeoutOutcome({ commandFacts, stdout, stderr, durationMs, timeoutMs }) {
  return freezeRecord({
    kind: "host-native-execution-outcome",
    status: "timeout",
    executionContext: "host-native",
    operationName: commandFacts.operationName,
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
    blockedSideEffects: HOST_NATIVE_EXECUTION_BLOCKED_SIDE_EFFECTS,
    requirementIds: allHostNativeExecutionRequirementIds()
  });
}

function redactPath(path) {
  return redactPrivatePaths(path);
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
