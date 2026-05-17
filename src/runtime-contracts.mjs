export const RUNTIME_CONTRACT_REQUIREMENTS = Object.freeze({
  runtimeSelection: Object.freeze([
    "VHS-SYS-REQ-006",
    "VHS-SYS-REQ-007",
    "VHS-REQ-095",
    "VHS-REQ-141"
  ]),
  compareActionState: Object.freeze([
    "VHS-SYS-REQ-006",
    "VHS-SYS-REQ-008"
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

function normalizeCommitFact(value, label) {
  if (value === undefined || value === null) {
    return null;
  }

  if (typeof value === "string") {
    const id = value.trim();
    if (!id) {
      throw new Error(`${label} id is required`);
    }
    return Object.freeze({ id, label: null });
  }

  const id = String(requireValue(value.id ?? value.sha, `${label} id`)).trim();
  const commitLabel = value.label === undefined || value.label === null ? null : String(value.label);
  return Object.freeze({ id, label: commitLabel });
}

function freezeRecord(record) {
  for (const [key, value] of Object.entries(record)) {
    if (value && typeof value === "object" && !Object.isFrozen(value)) {
      freezeRecord(value);
    }
  }
  return Object.freeze(record);
}

export function createCompareActionState(input = {}) {
  const runtimeSelection = requireValue(input.runtimeSelection, "runtimeSelection");
  if (runtimeSelection.kind !== "runtime-selection") {
    throw new Error("runtimeSelection must come from createRuntimeSelection");
  }

  const selectedCommit = normalizeCommitFact(input.selectedCommit, "selectedCommit");
  const baseCommit = normalizeCommitFact(input.baseCommit, "baseCommit");
  const compareRequested = input.compareRequested === true;
  const compareStarted = compareRequested && selectedCommit !== null && baseCommit !== null;

  return freezeRecord({
    kind: "compare-action-state",
    selectedCommit,
    baseCommit,
    compareRequested,
    compareStarted,
    runtimeSelection,
    requirementIds: [...RUNTIME_CONTRACT_REQUIREMENTS.compareActionState]
  });
}

export function selectCompareCommitPair(compareActionState, input = {}) {
  const current = requireValue(compareActionState, "compareActionState");
  if (current.kind !== "compare-action-state") {
    throw new Error("compareActionState must come from createCompareActionState");
  }

  return createCompareActionState({
    runtimeSelection: current.runtimeSelection,
    selectedCommit: requireValue(input.selectedCommit, "selectedCommit"),
    baseCommit: requireValue(input.baseCommit, "baseCommit"),
    compareRequested: false
  });
}

export function requestCompareAction(compareActionState) {
  const current = requireValue(compareActionState, "compareActionState");
  if (current.kind !== "compare-action-state") {
    throw new Error("compareActionState must come from createCompareActionState");
  }

  return createCompareActionState({
    runtimeSelection: current.runtimeSelection,
    selectedCommit: current.selectedCommit,
    baseCommit: current.baseCommit,
    compareRequested: true
  });
}

export function renderCompareActionFacts(compareActionState) {
  const current = requireValue(compareActionState, "compareActionState");
  if (current.kind !== "compare-action-state") {
    throw new Error("compareActionState must come from createCompareActionState");
  }

  return freezeRecord({
    selectedCommit: current.selectedCommit,
    baseCommit: current.baseCommit,
    provider: current.runtimeSelection.provider,
    version: current.runtimeSelection.version,
    bitness: current.runtimeSelection.bitness,
    compareRequested: current.compareRequested,
    compareStarted: current.compareStarted,
    requirementIds: [...RUNTIME_CONTRACT_REQUIREMENTS.compareActionState]
  });
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
  if (selectedProvider === "docker" && input.expertMode !== true) {
    readiness = "blocked";
    blockedReason = "docker-provider-requires-explicit-expert-selection";
  } else if (input.bundleSupported === false) {
    readiness = "blocked";
    blockedReason = "runtime-bundle-unsupported";
  } else if (input.runtimeAvailable === false) {
    readiness = "unavailable";
    blockedReason = "runtime-bundle-unavailable";
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
