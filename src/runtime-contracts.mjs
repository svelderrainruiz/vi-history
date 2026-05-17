export const RUNTIME_CONTRACT_REQUIREMENTS = Object.freeze({
  runtimeSelection: Object.freeze([
    "VHS-SYS-REQ-006",
    "VHS-SYS-REQ-007",
    "VHS-REQ-095",
    "VHS-REQ-141"
  ]),
  comparisonCommandPlan: Object.freeze([
    "VHS-SYS-REQ-004",
    "VHS-SYS-REQ-008",
    "VHS-REQ-094",
    "VHS-REQ-144",
    "VHS-REQ-194"
  ]),
  proofPacket: Object.freeze([
    "VHS-REQ-148",
    "VHS-REQ-588",
    "VHS-REQ-589",
    "VHS-REQ-590"
  ]),
  providerPolicy: Object.freeze([
    "VHS-SYS-REQ-005",
    "VHS-REQ-138",
    "VHS-REQ-146"
  ]),
  explicitCompareAction: Object.freeze([
    "VHS-SYS-REQ-006",
    "VHS-SYS-REQ-008"
  ]),
  runtimeProviderFacts: Object.freeze([
    "VHS-SYS-REQ-006",
    "VHS-SYS-REQ-007",
    "VHS-REQ-094",
    "VHS-REQ-095",
    "VHS-REQ-141",
    "VHS-REQ-144",
    "VHS-REQ-194"
  ])
});

const PROVIDERS = new Set(["host-native", "docker"]);
const ENGINES = new Set(["LabVIEWCLI", "Docker"]);
const BITNESS = new Set(["x64", "x86"]);
const READINESS = new Set(["ready", "blocked", "unavailable"]);

function requireValue(value, label) {
  if (value === undefined || value === null || value === "") {
    throw new Error(`${label} is required`);
  }
  return value;
}

function requireOneOf(value, allowed, label) {
  requireValue(value, label);
  if (!allowed.has(value)) {
    throw new Error(`${label} must be one of ${Array.from(allowed).join(", ")}`);
  }
  return value;
}

function normalizeNotes(notes) {
  if (notes === undefined || notes === null) {
    return Object.freeze([]);
  }
  const values = Array.isArray(notes) ? notes : [notes];
  return Object.freeze(values.map(String).filter((note) => note.length > 0));
}

function freezeRecord(record) {
  for (const [key, value] of Object.entries(record)) {
    if (value && typeof value === "object" && !Object.isFrozen(value)) {
      freezeRecord(value);
    }
  }
  return Object.freeze(record);
}

function cloneRecord(value, label) {
  const required = requireValue(value, label);
  if (typeof required === "string") {
    return Object.freeze({ id: required });
  }
  if (typeof required !== "object") {
    throw new Error(`${label} must be a string or object`);
  }
  return freezeRecord({ ...required });
}

function normalizeVersionNumber(version) {
  const versionText = String(requireValue(version, "version"));
  const match = versionText.match(/\d{4}/);
  if (!match) {
    throw new Error("version must include a four-digit LabVIEW year");
  }
  return Number(match[0]);
}

function selectedRuntimePaths(input = {}) {
  return {
    ...(input.selectedPaths ?? {}),
    ...(input.labviewCliPath ? { labviewCli: String(input.labviewCliPath) } : {}),
    ...(input.labviewPath ? { labview: String(input.labviewPath) } : {})
  };
}

export function createRuntimeSelection(input) {
  const provider = requireOneOf(input?.provider, PROVIDERS, "provider");
  const engine = requireOneOf(input?.engine ?? "LabVIEWCLI", ENGINES, "engine");
  const bitness = requireOneOf(input?.bitness, BITNESS, "bitness");
  const readiness = requireOneOf(input?.readiness ?? "blocked", READINESS, "readiness");
  const blockedReason = input?.blockedReason ?? null;

  if (readiness !== "ready" && !blockedReason) {
    throw new Error("blockedReason is required unless readiness is ready");
  }

  return freezeRecord({
    kind: "runtime-selection",
    provider,
    engine,
    version: String(requireValue(input?.version, "version")),
    bitness,
    selectedPaths: { ...(input?.selectedPaths ?? {}) },
    readiness,
    blockedReason,
    notes: normalizeNotes(input?.notes),
    requirementIds: [...RUNTIME_CONTRACT_REQUIREMENTS.runtimeSelection]
  });
}

export function createCommitPairSelection(input) {
  const selectedCommit = cloneRecord(input?.selectedCommit, "selectedCommit");
  const baseCommit = cloneRecord(input?.baseCommit, "baseCommit");

  return freezeRecord({
    kind: "commit-pair-selection",
    selectedCommit,
    baseCommit,
    requirementIds: [...RUNTIME_CONTRACT_REQUIREMENTS.explicitCompareAction]
  });
}

export function createCompareActionState(input) {
  const commitPair = requireValue(input?.commitPair, "commitPair");
  const runtimeSelection = requireValue(input?.runtimeSelection, "runtimeSelection");
  if (commitPair.kind !== "commit-pair-selection") {
    throw new Error("commitPair must come from createCommitPairSelection");
  }
  if (runtimeSelection.kind !== "runtime-selection") {
    throw new Error("runtimeSelection must come from createRuntimeSelection");
  }

  return freezeRecord({
    kind: "compare-action-state",
    phase: "review",
    compareRequested: false,
    commitPair,
    runtimeSelection,
    requirementIds: [...RUNTIME_CONTRACT_REQUIREMENTS.explicitCompareAction]
  });
}

export function requestExplicitCompareAction(compareActionState) {
  const state = requireValue(compareActionState, "compareActionState");
  if (state.kind !== "compare-action-state") {
    throw new Error("compareActionState must come from createCompareActionState");
  }

  return freezeRecord({
    ...state,
    phase: "execution-requested",
    compareRequested: true
  });
}

export function createComparePreExecutionFacts(compareActionState) {
  const state = requireValue(compareActionState, "compareActionState");
  if (state.kind !== "compare-action-state") {
    throw new Error("compareActionState must come from createCompareActionState");
  }

  return freezeRecord({
    kind: "compare-pre-execution-facts",
    selectedCommit: state.commitPair.selectedCommit,
    baseCommit: state.commitPair.baseCommit,
    provider: state.runtimeSelection.provider,
    version: state.runtimeSelection.version,
    bitness: state.runtimeSelection.bitness,
    requirementIds: [...RUNTIME_CONTRACT_REQUIREMENTS.explicitCompareAction]
  });
}

export function createComparisonCommandPlan(input) {
  const runtimeSelection = requireValue(input?.runtimeSelection, "runtimeSelection");
  if (runtimeSelection.kind !== "runtime-selection") {
    throw new Error("runtimeSelection must come from createRuntimeSelection");
  }
  if (runtimeSelection.readiness !== "ready") {
    throw new Error(`runtimeSelection is not ready: ${runtimeSelection.blockedReason ?? "unknown"}`);
  }

  const selectedViPath = String(requireValue(input?.selectedViPath, "selectedViPath"));
  const baseViPath = String(requireValue(input?.baseViPath, "baseViPath"));
  const outputPath = String(requireValue(input?.outputPath, "outputPath"));
  const labviewCliPath = input?.labviewCliPath ?? runtimeSelection.selectedPaths.labviewCli ?? "LabVIEWCLI";

  return freezeRecord({
    kind: "comparison-command-plan",
    operation: "CreateComparisonReport",
    executable: String(labviewCliPath),
    arguments: [
      "CreateComparisonReport",
      "--base-vi",
      baseViPath,
      "--selected-vi",
      selectedViPath,
      "--output",
      outputPath
    ],
    stagedViPaths: {
      base: baseViPath,
      selected: selectedViPath
    },
    outputPath,
    selectedLabView: {
      provider: runtimeSelection.provider,
      engine: runtimeSelection.engine,
      version: runtimeSelection.version,
      bitness: runtimeSelection.bitness,
      labviewPath: runtimeSelection.selectedPaths.labview ?? null,
      labviewCliPath: String(labviewCliPath)
    },
    runtimeSelection,
    requirementIds: [...RUNTIME_CONTRACT_REQUIREMENTS.comparisonCommandPlan]
  });
}

export function createComparisonCommandPlanFromCompareAction(input) {
  const compareActionState = requireValue(input?.compareActionState, "compareActionState");
  if (compareActionState.kind !== "compare-action-state") {
    throw new Error("compareActionState must come from createCompareActionState");
  }
  if (compareActionState.compareRequested !== true || compareActionState.phase !== "execution-requested") {
    throw new Error("compare does not start before explicit user action");
  }

  return createComparisonCommandPlan({
    runtimeSelection: compareActionState.runtimeSelection,
    selectedViPath: input?.selectedViPath,
    baseViPath: input?.baseViPath,
    outputPath: input?.outputPath,
    labviewCliPath: input?.labviewCliPath
  });
}

export function discoverHostNativeLabViewRuntime(input = {}) {
  const version = String(requireValue(input.version, "version"));
  const bitness = requireOneOf(input.bitness, BITNESS, "bitness");
  const paths = selectedRuntimePaths(input);
  const versionYear = normalizeVersionNumber(version);
  const proofOverrideRequired = input.proofOverrideRequired === true;

  if (proofOverrideRequired && (!paths.labviewCli || !paths.labview)) {
    return createRuntimeSelection({
      provider: "host-native",
      engine: "LabVIEWCLI",
      version,
      bitness,
      selectedPaths: paths,
      readiness: "blocked",
      blockedReason: "explicit-proof-override-paths-missing",
      notes: ["explicit LabVIEWCLI and LabVIEW paths are required for proof override mode"]
    });
  }

  if (versionYear <= 2024) {
    return createRuntimeSelection({
      provider: "host-native",
      engine: "LabVIEWCLI",
      version,
      bitness,
      selectedPaths: paths,
      readiness: "blocked",
      blockedReason: "labview-version-unsupported",
      notes: ["LabVIEW 2025 or newer is required"]
    });
  }

  if (input.runtimeAvailable === false) {
    return createRuntimeSelection({
      provider: "host-native",
      engine: "LabVIEWCLI",
      version,
      bitness,
      selectedPaths: paths,
      readiness: "unavailable",
      blockedReason: "runtime-bundle-unavailable",
      notes: normalizeNotes(input.notes)
    });
  }

  return createRuntimeSelection({
    provider: "host-native",
    engine: "LabVIEWCLI",
    version,
    bitness,
    selectedPaths: paths,
    readiness: "ready",
    notes: normalizeNotes(input.notes)
  });
}

export function createLabViewCliCommandPlan(input) {
  const plan = createComparisonCommandPlan(input);
  return freezeRecord({
    ...plan,
    kind: "labviewcli-command-plan",
    executionStarted: false,
    executionPolicy: "plan-only"
  });
}

export function createRuntimeFactsReport(input) {
  const runtimeSelection = requireValue(input?.runtimeSelection, "runtimeSelection");
  if (runtimeSelection.kind !== "runtime-selection") {
    throw new Error("runtimeSelection must come from createRuntimeSelection");
  }

  const commandPlan = input?.commandPlan ?? null;
  return freezeRecord({
    kind: "runtime-facts-report",
    runtime: {
      provider: runtimeSelection.provider,
      engine: runtimeSelection.engine,
      version: runtimeSelection.version,
      bitness: runtimeSelection.bitness,
      selectedPaths: runtimeSelection.selectedPaths,
      readiness: runtimeSelection.readiness,
      blockedReason: runtimeSelection.blockedReason,
      notes: runtimeSelection.notes
    },
    commandPlan: commandPlan
      ? {
          operation: commandPlan.operation,
          executable: commandPlan.executable,
          stagedViPaths: commandPlan.stagedViPaths,
          outputPath: commandPlan.outputPath,
          selectedLabView: commandPlan.selectedLabView,
          executionStarted: commandPlan.executionStarted === true
        }
      : null,
    requirementIds: [...RUNTIME_CONTRACT_REQUIREMENTS.runtimeProviderFacts]
  });
}

export function createProofPacket(input) {
  const runtimeSelection = requireValue(input?.runtimeSelection, "runtimeSelection");
  if (runtimeSelection.kind !== "runtime-selection") {
    throw new Error("runtimeSelection must come from createRuntimeSelection");
  }

  return freezeRecord({
    kind: "proof-packet",
    environmentClass: String(requireValue(input?.environmentClass, "environmentClass")),
    runtimeFacts: runtimeSelection,
    commandPlan: input?.commandPlan ?? null,
    generatedReportFacts: { ...(input?.generatedReportFacts ?? {}) },
    execution: {
      stdout: String(input?.stdout ?? ""),
      stderr: String(input?.stderr ?? ""),
      exitCode: input?.exitCode ?? null,
      durationMs: input?.durationMs ?? null
    },
    issueBody: String(input?.issueBody ?? ""),
    requirementIds: [...RUNTIME_CONTRACT_REQUIREMENTS.proofPacket]
  });
}

export function selectProviderPolicy(input = {}) {
  const requestedProvider = input.requestedProvider ?? null;
  const selectedProvider = requestedProvider ?? "host-native";
  requireOneOf(selectedProvider, PROVIDERS, "selectedProvider");

  let readiness = "ready";
  let blockedReason = null;
  let failureGuidance = [];

  if (selectedProvider === "docker" && input.expertMode !== true) {
    readiness = "blocked";
    blockedReason = "docker-provider-requires-explicit-expert-selection";
    failureGuidance = [
      "Docker is bound to explicit expert selection.",
      "Keep host-native LabVIEWCLI as the installed-user default or set expert mode explicitly."
    ];
  } else if (input.bundleSupported === false) {
    readiness = "blocked";
    blockedReason = "runtime-bundle-unsupported";
    failureGuidance = [
      "The selected provider bundle is unsupported.",
      "Choose a supported runtime bundle before comparison."
    ];
  } else if (input.runtimeAvailable === false) {
    readiness = "unavailable";
    blockedReason = "runtime-bundle-unavailable";
    failureGuidance = [
      "The selected provider bundle is unavailable.",
      "Install or configure the runtime bundle, then retry."
    ];
  }

  return freezeRecord({
    kind: "provider-policy",
    platform: input.platform ?? "win32",
    defaultProvider: "host-native",
    requestedProvider,
    selectedProvider,
    expertMode: input.expertMode === true,
    readiness,
    blockedReason,
    failureGuidance,
    fallbackProvider: null,
    silentFallbackAllowed: false,
    requirementIds: [...RUNTIME_CONTRACT_REQUIREMENTS.providerPolicy]
  });
}

export function allRuntimeContractRequirementIds() {
  return Object.freeze(
    Object.values(RUNTIME_CONTRACT_REQUIREMENTS)
      .flat()
      .filter((value, index, values) => values.indexOf(value) === index)
      .sort()
  );
}
