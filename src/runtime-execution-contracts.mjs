/**
 * Runtime Execution Contracts
 *
 * This module provides pure facts contracts for LabVIEWCLI CreateComparisonReport
 * execution on both host-native Windows installations and Docker containers.
 *
 * Slice: runtime-execution-contracts-v1
 */

// Requirement mappings
export const RUNTIME_EXECUTION_CONTRACTS_REQUIREMENTS = Object.freeze({
  createComparisonReport: Object.freeze(["VHS-REQ-600"]),
  hostNativeExecution: Object.freeze(["VHS-REQ-601"]),
  dockerExecution: Object.freeze(["VHS-REQ-602"]),
  commandArguments: Object.freeze(["VHS-REQ-603", "VHS-REQ-604"]),
  headlessFlag: Object.freeze(["VHS-REQ-605"]),
  executionPlan: Object.freeze(["VHS-REQ-606"]),
  volumeMounts: Object.freeze(["VHS-REQ-607"]),
  dockerImage: Object.freeze(["VHS-REQ-608"]),
  labviewCliPath: Object.freeze(["VHS-REQ-609"]),
  outputCapture: Object.freeze(["VHS-REQ-610"]),
  exitCode: Object.freeze(["VHS-REQ-611"])
});

export const RUNTIME_EXECUTION_BLOCKED_SIDE_EFFECTS = Object.freeze([
  "actual-labviewcli-execution",
  "actual-docker-execution",
  "file-system-writes",
  "process-spawn",
  "network-requests"
]);

const DOCKER_IMAGE_LATEST_LINUX = "nationalinstruments/labview:latest-linux";

/**
 * Returns all requirement IDs for runtime execution contracts.
 */
export function allRuntimeExecutionContractsRequirementIds() {
  const ids = new Set();
  for (const reqArray of Object.values(RUNTIME_EXECUTION_CONTRACTS_REQUIREMENTS)) {
    for (const id of reqArray) {
      ids.add(id);
    }
  }
  return [...ids].sort();
}

/**
 * Creates comparison report command facts for LabVIEWCLI CreateComparisonReport.
 *
 * This is a pure facts contract that returns command plan facts without
 * performing actual execution.
 *
 * @param {Object} input - Input configuration
 * @param {string} input.viPath1 - Path to first/base VI file
 * @param {string} input.viPath2 - Path to second/comparison VI file
 * @param {string} input.outputPath - Path for HTML output report
 * @param {'host-native' | 'docker'} input.executionContext - Execution environment
 * @param {Object} [input.runtimeDiscoveryFacts] - Host runtime discovery facts (for host-native)
 * @param {string} [input.workspacePath] - Host workspace path (for docker volume mounts)
 * @returns {Object} Comparison report command facts
 */
export function createComparisonReportCommand(input = {}) {
  const viPath1 = requireString(input.viPath1, "viPath1");
  const viPath2 = requireString(input.viPath2, "viPath2");
  const outputPath = requireString(input.outputPath, "outputPath");
  const executionContext = requireExecutionContext(input.executionContext);

  if (executionContext === "host-native") {
    return createHostNativeComparisonReportCommand({
      viPath1,
      viPath2,
      outputPath,
      runtimeDiscoveryFacts: input.runtimeDiscoveryFacts
    });
  }

  return createDockerComparisonReportCommand({
    viPath1,
    viPath2,
    outputPath,
    workspacePath: input.workspacePath
  });
}

/**
 * Creates host-native LabVIEWCLI CreateComparisonReport command facts.
 *
 * @param {Object} input - Input configuration
 * @param {string} input.viPath1 - Path to first/base VI file
 * @param {string} input.viPath2 - Path to second/comparison VI file
 * @param {string} input.outputPath - Path for HTML output report
 * @param {Object} [input.runtimeDiscoveryFacts] - Host runtime discovery facts
 * @returns {Object} Host-native command facts
 */
export function createHostNativeComparisonReportCommand(input = {}) {
  const viPath1 = requireString(input.viPath1, "viPath1");
  const viPath2 = requireString(input.viPath2, "viPath2");
  const outputPath = requireString(input.outputPath, "outputPath");

  const labviewCliPath = deriveLabViewCliPath(input.runtimeDiscoveryFacts);

  const args = [
    "-OperationName", "CreateComparisonReport",
    "-VIPath1", viPath1,
    "-VIPath2", viPath2,
    "-OutputPath", outputPath,
    "-ReportType", "html"
  ];

  return freezeRecord({
    kind: "comparison-report-command",
    status: "ready",
    executionContext: "host-native",
    executable: labviewCliPath,
    arguments: args,
    workingDirectory: null,
    operationName: "CreateComparisonReport",
    inputs: {
      viPath1,
      viPath2,
      outputPath,
      reportType: "html"
    },
    commandLine: buildCommandLine(labviewCliPath, args),
    blockedSideEffects: RUNTIME_EXECUTION_BLOCKED_SIDE_EFFECTS,
    requirementIds: [
      ...RUNTIME_EXECUTION_CONTRACTS_REQUIREMENTS.createComparisonReport,
      ...RUNTIME_EXECUTION_CONTRACTS_REQUIREMENTS.hostNativeExecution,
      ...RUNTIME_EXECUTION_CONTRACTS_REQUIREMENTS.commandArguments,
      ...RUNTIME_EXECUTION_CONTRACTS_REQUIREMENTS.executionPlan,
      ...RUNTIME_EXECUTION_CONTRACTS_REQUIREMENTS.labviewCliPath
    ]
  });
}

/**
 * Creates Docker LabVIEWCLI CreateComparisonReport command facts.
 *
 * Uses the hardcoded nationalinstruments/labview:latest-linux image.
 *
 * @param {Object} input - Input configuration
 * @param {string} input.viPath1 - Path to first/base VI file (container path)
 * @param {string} input.viPath2 - Path to second/comparison VI file (container path)
 * @param {string} input.outputPath - Path for HTML output report (container path)
 * @param {string} [input.workspacePath] - Host workspace path for volume mount
 * @returns {Object} Docker command facts
 */
export function createDockerComparisonReportCommand(input = {}) {
  const viPath1 = requireString(input.viPath1, "viPath1");
  const viPath2 = requireString(input.viPath2, "viPath2");
  const outputPath = requireString(input.outputPath, "outputPath");
  const workspacePath = input.workspacePath ?? null;

  // Container paths for mounted workspace
  const containerViPath1 = mapToContainerPath(viPath1, workspacePath);
  const containerViPath2 = mapToContainerPath(viPath2, workspacePath);
  const containerOutputPath = mapToContainerPath(outputPath, workspacePath);

  const volumeMounts = workspacePath
    ? [{ host: workspacePath, container: "/workspace" }]
    : [];

  const labviewCliArgs = [
    "-OperationName", "CreateComparisonReport",
    "-VIPath1", containerViPath1,
    "-VIPath2", containerViPath2,
    "-OutputPath", containerOutputPath,
    "-ReportType", "html",
    "-Headless"
  ];

  const dockerArgs = [
    "run", "--rm",
    ...volumeMounts.flatMap(mount => ["-v", `${mount.host}:${mount.container}`]),
    DOCKER_IMAGE_LATEST_LINUX,
    "LabVIEWCLI",
    ...labviewCliArgs
  ];

  return freezeRecord({
    kind: "comparison-report-command",
    status: "ready",
    executionContext: "docker",
    executable: "docker",
    arguments: dockerArgs,
    workingDirectory: null,
    dockerImage: DOCKER_IMAGE_LATEST_LINUX,
    volumeMounts,
    operationName: "CreateComparisonReport",
    headless: true,
    inputs: {
      viPath1: containerViPath1,
      viPath2: containerViPath2,
      outputPath: containerOutputPath,
      reportType: "html"
    },
    hostInputs: {
      viPath1,
      viPath2,
      outputPath,
      workspacePath
    },
    commandLine: buildCommandLine("docker", dockerArgs),
    blockedSideEffects: RUNTIME_EXECUTION_BLOCKED_SIDE_EFFECTS,
    requirementIds: [
      ...RUNTIME_EXECUTION_CONTRACTS_REQUIREMENTS.createComparisonReport,
      ...RUNTIME_EXECUTION_CONTRACTS_REQUIREMENTS.dockerExecution,
      ...RUNTIME_EXECUTION_CONTRACTS_REQUIREMENTS.commandArguments,
      ...RUNTIME_EXECUTION_CONTRACTS_REQUIREMENTS.headlessFlag,
      ...RUNTIME_EXECUTION_CONTRACTS_REQUIREMENTS.executionPlan,
      ...RUNTIME_EXECUTION_CONTRACTS_REQUIREMENTS.volumeMounts,
      ...RUNTIME_EXECUTION_CONTRACTS_REQUIREMENTS.dockerImage
    ]
  });
}

/**
 * Creates execution outcome facts from command execution results.
 *
 * This shapes raw execution results into standardized outcome facts.
 *
 * @param {Object} input - Execution results
 * @param {Object} input.commandFacts - Command facts from createComparisonReportCommand
 * @param {number} input.exitCode - Process exit code
 * @param {string} [input.stdout] - Captured stdout
 * @param {string} [input.stderr] - Captured stderr
 * @param {number} [input.durationMs] - Execution duration in milliseconds
 * @returns {Object} Execution outcome facts
 */
export function createComparisonReportExecutionOutcome(input = {}) {
  const commandFacts = requireObject(input.commandFacts, "commandFacts");
  const exitCode = requireNumber(input.exitCode, "exitCode");
  const stdout = input.stdout ?? "";
  const stderr = input.stderr ?? "";
  const durationMs = input.durationMs ?? null;

  const success = exitCode === 0;

  return freezeRecord({
    kind: "comparison-report-execution-outcome",
    status: success ? "success" : "failure",
    executionContext: commandFacts.executionContext,
    operationName: commandFacts.operationName,
    exitCode,
    success,
    diagnostics: {
      stdout: redactPrivatePaths(stdout),
      stderr: redactPrivatePaths(stderr),
      durationMs
    },
    outputPath: commandFacts.inputs.outputPath,
    requirementIds: [
      ...RUNTIME_EXECUTION_CONTRACTS_REQUIREMENTS.outputCapture,
      ...RUNTIME_EXECUTION_CONTRACTS_REQUIREMENTS.exitCode
    ]
  });
}

// Helper functions

function requireString(value, name) {
  if (typeof value !== "string" || value.length === 0) {
    throw new Error(`${name} is required and must be a non-empty string`);
  }
  return value;
}

function requireNumber(value, name) {
  if (typeof value !== "number" || Number.isNaN(value)) {
    throw new Error(`${name} is required and must be a number`);
  }
  return value;
}

function requireObject(value, name) {
  if (value === null || typeof value !== "object") {
    throw new Error(`${name} is required and must be an object`);
  }
  return value;
}

function requireExecutionContext(value) {
  if (value !== "host-native" && value !== "docker") {
    throw new Error(`executionContext must be 'host-native' or 'docker', got: ${value}`);
  }
  return value;
}

function deriveLabViewCliPath(runtimeDiscoveryFacts) {
  if (!runtimeDiscoveryFacts) {
    // Default Windows path when no discovery facts available
    return "C:\\Program Files\\National Instruments\\LabVIEW 2026\\LabVIEWCLI.exe";
  }

  // Extract LabVIEWCLI path from runtime discovery facts
  if (runtimeDiscoveryFacts.labviewCliPath) {
    return runtimeDiscoveryFacts.labviewCliPath;
  }

  if (runtimeDiscoveryFacts.discoveredRuntimes?.labviewCli?.path) {
    return runtimeDiscoveryFacts.discoveredRuntimes.labviewCli.path;
  }

  if (runtimeDiscoveryFacts.nativeAcquisition?.labviewCliPath) {
    return runtimeDiscoveryFacts.nativeAcquisition.labviewCliPath;
  }

  // Fallback to default
  return "C:\\Program Files\\National Instruments\\LabVIEW 2026\\LabVIEWCLI.exe";
}

function mapToContainerPath(hostPath, workspacePath) {
  if (!workspacePath) {
    return hostPath;
  }

  const normalizedWorkspace = workspacePath.replace(/\\/g, "/");
  const normalizedPath = hostPath.replace(/\\/g, "/");

  if (normalizedPath.startsWith(normalizedWorkspace)) {
    const relativePath = normalizedPath.slice(normalizedWorkspace.length);
    return `/workspace${relativePath.startsWith("/") ? "" : "/"}${relativePath}`;
  }

  // Path not under workspace, return as-is (may cause mount issues)
  return hostPath;
}

function buildCommandLine(executable, args) {
  const escapedArgs = args.map(arg => {
    if (arg.includes(" ") || arg.includes('"')) {
      return `"${arg.replace(/"/g, '\\"')}"`;
    }
    return arg;
  });
  return `${executable} ${escapedArgs.join(" ")}`;
}

function redactPrivatePaths(text) {
  // Redact common private path patterns
  return text
    .replace(/C:\\Users\\[^\\]+/gi, "C:\\Users\\[REDACTED]")
    .replace(/\/home\/[^/]+/g, "/home/[REDACTED]")
    .replace(/\/Users\/[^/]+/g, "/Users/[REDACTED]");
}

function freezeRecord(obj) {
  return Object.freeze(obj);
}
