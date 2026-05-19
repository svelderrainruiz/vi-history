import fs from "node:fs/promises";
import path from "node:path";

export const RUNTIME_SETTINGS_CLI_SETTINGS_WRITE_REQUIREMENTS = Object.freeze({
  settingsWrite: Object.freeze(["VHS-REQ-537"]),
  effectiveTarget: Object.freeze(["VHS-REQ-543"]),
  preservation: Object.freeze(["VHS-REQ-543"]),
  failClosed: Object.freeze(["VHS-REQ-543"])
});

export const RUNTIME_SETTINGS_CLI_VALIDATION_READBACK_REQUIREMENTS = Object.freeze({
  effectiveTarget: Object.freeze(["VHS-REQ-543"]),
  persistedFacts: Object.freeze(["VHS-REQ-546"]),
  runtimeOutcome: Object.freeze(["VHS-REQ-546"]),
  failClosed: Object.freeze(["VHS-REQ-546"])
});

export const RUNTIME_SETTINGS_CLI_VALIDATION_PROOF_REQUIREMENTS = Object.freeze({
  proofArtifact: Object.freeze(["VHS-REQ-546"]),
  redaction: Object.freeze(["VHS-REQ-546"]),
  issueBody: Object.freeze(["VHS-REQ-546"]),
  failClosed: Object.freeze(["VHS-REQ-546"])
});

export const RUNTIME_SETTINGS_CLI_VALIDATION_PROOF_OUT_REQUIREMENTS = Object.freeze({
  request: Object.freeze(["VHS-REQ-546"]),
  target: Object.freeze(["VHS-REQ-546"]),
  artifactFiles: Object.freeze(["VHS-REQ-546"]),
  nonInteractiveGuidance: Object.freeze(["VHS-REQ-546"]),
  failClosed: Object.freeze(["VHS-REQ-546"])
});

export const RUNTIME_SETTINGS_CLI_VALIDATION_PROOF_OUT_FILE_EMISSION_REQUIREMENTS = Object.freeze({
  readyAdapter: Object.freeze(["VHS-REQ-546"]),
  directoryCreation: Object.freeze(["VHS-REQ-546"]),
  fileWrites: Object.freeze(["VHS-REQ-546"]),
  writeResults: Object.freeze(["VHS-REQ-546"]),
  failClosed: Object.freeze(["VHS-REQ-546"]),
  blockedSideEffects: Object.freeze(["VHS-REQ-546"])
});

export const RUNTIME_SETTINGS_CLI_INTERACTIVE_SELECTION_REQUIREMENTS = Object.freeze({
  defaultSelection: Object.freeze(["VHS-REQ-545"]),
  currentBundle: Object.freeze(["VHS-REQ-545"]),
  guidedSelection: Object.freeze(["VHS-REQ-545"]),
  dockerBounds: Object.freeze(["VHS-REQ-545"]),
  validationHandoff: Object.freeze(["VHS-REQ-546"]),
  failClosed: Object.freeze(["VHS-REQ-545", "VHS-REQ-546"])
});

export const RUNTIME_SETTINGS_KEYS = Object.freeze({
  runtimeProvider: "viHistorySuite.runtimeProvider",
  labviewVersion: "viHistorySuite.labviewVersion",
  labviewBitness: "viHistorySuite.labviewBitness"
});

export const RUNTIME_SETTINGS_INTERACTIVE_DEFAULT_SELECTION = Object.freeze({
  runtimeProvider: "host-native",
  platform: "windows",
  labviewVersion: "2026",
  labviewBitness: "x86"
});

export const RUNTIME_SETTINGS_BLOCKED_SIDE_EFFECTS = Object.freeze({
  runtimeValidation: false,
  compareExecution: false,
  labviewCli: false,
  docker: false,
  liveSessionProof: false,
  packaging: false,
  marketplace: false
});

export const RUNTIME_SETTINGS_VALIDATION_BLOCKED_SIDE_EFFECTS = Object.freeze({
  settingsMutation: false,
  interactiveSelection: false,
  proofOut: false,
  picker: false,
  runtimeValidation: false,
  compareExecution: false,
  labviewCli: false,
  docker: false,
  liveSessionProof: false,
  packaging: false,
  marketplace: false
});

export const RUNTIME_SETTINGS_VALIDATION_PROOF_BLOCKED_SIDE_EFFECTS = Object.freeze({
  settingsMutation: false,
  interactiveSelection: false,
  runtimeValidation: false,
  compareExecution: false,
  labviewCli: false,
  docker: false,
  liveSessionProof: false,
  packaging: false,
  marketplace: false
});

export const RUNTIME_SETTINGS_VALIDATION_PROOF_OUT_BLOCKED_SIDE_EFFECTS = Object.freeze({
  settingsMutation: false,
  interactiveSelection: false,
  runtimeValidation: false,
  runtimeExecution: false,
  compareExecution: false,
  labviewCli: false,
  dockerExecution: false,
  dockerOrchestration: false,
  liveTerminalProof: false,
  packageBinPublication: false,
  launcherProfileMutation: false,
  marketplace: false,
  sourceCopying: false,
  fileSystemWrites: false
});

export const RUNTIME_SETTINGS_VALIDATION_PROOF_OUT_FILE_EMISSION_BLOCKED_SIDE_EFFECTS = Object.freeze({
  settingsMutation: false,
  interactiveSelection: false,
  runtimeValidation: false,
  validationFactGeneration: false,
  runtimeExecution: false,
  compareExecution: false,
  labviewCli: false,
  dockerExecution: false,
  dockerOrchestration: false,
  liveTerminalProof: false,
  packageBinPublication: false,
  launcherProfileMutation: false,
  marketplace: false,
  sourceCopying: false,
  extraFileSystemWrites: false
});

export const RUNTIME_SETTINGS_INTERACTIVE_SELECTION_BLOCKED_SIDE_EFFECTS = Object.freeze({
  terminalPromptLoop: false,
  stdinHandling: false,
  settingsMutation: false,
  proofOut: false,
  runtimeValidation: false,
  compareExecution: false,
  labviewCli: false,
  dockerExecution: false,
  liveSessionProof: false,
  packaging: false,
  marketplace: false
});

export const RUNTIME_SETTINGS_CLI_TERMINAL_ENTRYPOINT_REQUIREMENTS = Object.freeze({
  materializationFacts: Object.freeze(["VHS-REQ-537"]),
  admissionScope: Object.freeze(["VHS-REQ-537"]),
  runtimeLookup: Object.freeze(["VHS-REQ-544"]),
  failClosed: Object.freeze(["VHS-REQ-544"]),
  discoverability: Object.freeze(["VHS-REQ-545"]),
  validationHandoff: Object.freeze(["VHS-REQ-546"])
});

export const RUNTIME_SETTINGS_CLI_TERMINAL_PROMPT_LOOP_REQUIREMENTS = Object.freeze({
  promptTranscript: Object.freeze(["VHS-REQ-545"]),
  confirmation: Object.freeze(["VHS-REQ-545", "VHS-REQ-546"]),
  guidedHostSelection: Object.freeze(["VHS-REQ-545"]),
  dockerBounds: Object.freeze(["VHS-REQ-545"]),
  validationHandoff: Object.freeze(["VHS-REQ-546"]),
  failClosed: Object.freeze(["VHS-REQ-545", "VHS-REQ-546"])
});

export const RUNTIME_SETTINGS_CLI_TERMINAL_IO_ADAPTER_REQUIREMENTS = Object.freeze({
  enterConfirmation: Object.freeze(["VHS-REQ-545", "VHS-REQ-546"]),
  guidedHostSelection: Object.freeze(["VHS-REQ-545"]),
  dockerImageFamily: Object.freeze(["VHS-REQ-545"]),
  nonInteractiveGuidance: Object.freeze(["VHS-REQ-545"]),
  failClosed: Object.freeze(["VHS-REQ-545"]),
  validationHandoff: Object.freeze(["VHS-REQ-546"])
});

export const RUNTIME_SETTINGS_TERMINAL_ENTRYPOINT_BLOCKED_SIDE_EFFECTS = Object.freeze({
  terminalPromptLoop: false,
  stdinHandling: false,
  runtimeExecution: false,
  profileEditing: false,
  adminElevation: false,
  machineWideInstall: false,
  settingsMutation: false,
  compareExecution: false,
  labviewCli: false,
  dockerExecution: false,
  liveSessionProof: false,
  packaging: false,
  marketplace: false
});

export const RUNTIME_SETTINGS_TERMINAL_PROMPT_LOOP_BLOCKED_SIDE_EFFECTS = Object.freeze({
  stdinHandling: false,
  rawTerminalIo: false,
  spawnedTerminalIo: false,
  settingsMutation: false,
  runtimeValidation: false,
  runtimeExecution: false,
  compareExecution: false,
  labviewCli: false,
  dockerExecution: false,
  dockerOrchestration: false,
  proofOut: false,
  liveSessionProof: false,
  packaging: false,
  marketplace: false
});

export const RUNTIME_SETTINGS_TERMINAL_IO_ADAPTER_BLOCKED_SIDE_EFFECTS = Object.freeze({
  rawTerminalIo: false,
  spawnedTerminalIo: false,
  settingsMutation: false,
  runtimeValidation: false,
  runtimeExecution: false,
  compareExecution: false,
  labviewCli: false,
  dockerExecution: false,
  dockerOrchestration: false,
  proofOut: false,
  liveSessionProof: false,
  packageBinPublication: false,
  launcherProfileMutation: false,
  marketplace: false,
  sourceCopying: false
});

const RUNTIME_SETTINGS_VALIDATION_PROOF_SCHEMA = "vi-history/runtime-settings-validation-proof@v1";
const RUNTIME_SETTINGS_VALIDATION_PROOF_COMMAND = "vihs --validate --proof-out";
const RUNTIME_SETTINGS_VALIDATION_PROOF_OUT_COMMAND = "vihs --validate --proof-out";
const RUNTIME_SETTINGS_VALIDATION_PROOF_OUT_PROOF_FILE = "vihs-validation-proof.json";
const RUNTIME_SETTINGS_VALIDATION_PROOF_OUT_ISSUE_FILE = "vihs-validation-issue.md";
const RUNTIME_SETTINGS_INTERACTIVE_SELECTION_COMMAND = "vihs";
const RUNTIME_SETTINGS_VALIDATION_COMMAND = "vihs --validate";
const MIT_PUBLIC_AUTHORITY = "svelderrainruiz/vi-history";
const TERMINAL_ENTRYPOINT_COMMAND = "vihs";
const TERMINAL_ENTRYPOINT_ADMISSION_SCOPE = "user";
const TERMINAL_ENTRYPOINT_RECOVERY_COMMAND = "labviewViHistory.prepareLocalRuntimeSettingsCli";
const TERMINAL_ENTRYPOINT_RECOVERY_INSTRUCTION =
  `Run the VS Code command ${TERMINAL_ENTRYPOINT_RECOVERY_COMMAND} to restore the local runtime settings CLI launcher.`;
const TERMINAL_ENTRYPOINT_RUNTIME_LOOKUP_ORDER_WINDOWS = Object.freeze(["vscode-runtime", "global-node", "explicit-override"]);
const TERMINAL_ENTRYPOINT_RUNTIME_LOOKUP_ORDER_OTHER = Object.freeze(["global-node", "explicit-override"]);

export function allRuntimeSettingsCliSettingsWriteRequirementIds() {
  return Object.freeze(
    Object.values(RUNTIME_SETTINGS_CLI_SETTINGS_WRITE_REQUIREMENTS)
      .flat()
      .filter((value, index, values) => values.indexOf(value) === index)
      .sort()
  );
}

export function allRuntimeSettingsCliValidationReadbackRequirementIds() {
  return Object.freeze(
    Object.values(RUNTIME_SETTINGS_CLI_VALIDATION_READBACK_REQUIREMENTS)
      .flat()
      .filter((value, index, values) => values.indexOf(value) === index)
      .sort()
  );
}

export function allRuntimeSettingsCliValidationProofRequirementIds() {
  return Object.freeze(
    Object.values(RUNTIME_SETTINGS_CLI_VALIDATION_PROOF_REQUIREMENTS)
      .flat()
      .filter((value, index, values) => values.indexOf(value) === index)
      .sort()
  );
}

export function allRuntimeSettingsCliValidationProofOutRequirementIds() {
  return Object.freeze(
    Object.values(RUNTIME_SETTINGS_CLI_VALIDATION_PROOF_OUT_REQUIREMENTS)
      .flat()
      .filter((value, index, values) => values.indexOf(value) === index)
      .sort()
  );
}

export function allRuntimeSettingsCliValidationProofOutFileEmissionRequirementIds() {
  return Object.freeze(
    Object.values(RUNTIME_SETTINGS_CLI_VALIDATION_PROOF_OUT_FILE_EMISSION_REQUIREMENTS)
      .flat()
      .filter((value, index, values) => values.indexOf(value) === index)
      .sort()
  );
}

export function allRuntimeSettingsCliInteractiveSelectionRequirementIds() {
  return Object.freeze(
    Object.values(RUNTIME_SETTINGS_CLI_INTERACTIVE_SELECTION_REQUIREMENTS)
      .flat()
      .filter((value, index, values) => values.indexOf(value) === index)
      .sort()
  );
}

export function allRuntimeSettingsCliTerminalEntrypointRequirementIds() {
  return Object.freeze(
    Object.values(RUNTIME_SETTINGS_CLI_TERMINAL_ENTRYPOINT_REQUIREMENTS)
      .flat()
      .filter((value, index, values) => values.indexOf(value) === index)
      .sort()
  );
}

export function allRuntimeSettingsCliTerminalPromptLoopRequirementIds() {
  return Object.freeze(
    Object.values(RUNTIME_SETTINGS_CLI_TERMINAL_PROMPT_LOOP_REQUIREMENTS)
      .flat()
      .filter((value, index, values) => values.indexOf(value) === index)
      .sort()
  );
}

export function allRuntimeSettingsCliTerminalIoAdapterRequirementIds() {
  return Object.freeze(
    Object.values(RUNTIME_SETTINGS_CLI_TERMINAL_IO_ADAPTER_REQUIREMENTS)
      .flat()
      .filter((value, index, values) => values.indexOf(value) === index)
      .sort()
  );
}

export function createRuntimeSettingsTerminalEntrypoint(input = {}) {
  const terminalSession = normalizeTerminalSession(input.terminalSession);
  if (!terminalSession.admitted) {
    return terminalEntrypointBlockedResult({
      blockedReason: "unsupported-terminal-session",
      terminalSession
    });
  }

  const launcherState = normalizeLauncherState(input.launcher?.launcherState ?? input.launcherState);

  if (launcherState === "missing" || launcherState === "stale") {
    return terminalEntrypointBlockedResult({
      blockedReason: launcherState === "missing" ? "launcher-missing" : "launcher-stale",
      terminalSession
    });
  }

  const platform = normalizePlatform(input.platform ?? "windows");
  const runtimeLookupFacts = resolveRuntimeLookupFacts(input.runtimeLookup ?? {}, platform);
  const discoverability = createDiscoverabilityFacts(input.currentBundle ?? input.bundle ?? null, platform);

  return freezeRecord({
    status: "ready",
    type: "runtime-settings-cli-terminal-entrypoint-contract",
    command: TERMINAL_ENTRYPOINT_COMMAND,
    admissionScope: TERMINAL_ENTRYPOINT_ADMISSION_SCOPE,
    materializationState: "materialized",
    terminalSession,
    runtimeLookup: runtimeLookupFacts,
    recoveryInstruction: null,
    discoverability,
    validationHandoff: createTerminalValidationHandoff(),
    blockedSideEffects: RUNTIME_SETTINGS_TERMINAL_ENTRYPOINT_BLOCKED_SIDE_EFFECTS,
    requirementIds: allRuntimeSettingsCliTerminalEntrypointRequirementIds()
  });
}

export function createRuntimeSettingsTerminalPromptLoop(input = {}) {
  const entrypoint = input.entrypoint ?? input.terminalEntrypoint ?? createRuntimeSettingsTerminalEntrypoint(input);
  if (!entrypoint || entrypoint.status !== "ready") {
    return terminalPromptLoopBlockedResult({
      blockedReason: entrypoint?.blockedReason ?? "terminal-entrypoint-not-ready",
      entrypoint: entrypoint ?? null
    });
  }

  const currentSelection = normalizePromptLoopCurrentSelection(
    input.currentSelection ?? input.currentBundle ?? entrypoint.discoverability?.currentBundle,
    entrypoint.runtimeLookup?.platform ?? input.platform ?? "windows"
  );
  const selectionContract = createRuntimeSettingsInteractiveSelection({
    settings: input.settings ?? settingsFromSelection(currentSelection) ?? {},
    platform: input.platform ?? currentSelection?.platform ?? entrypoint.runtimeLookup?.platform,
    requestedSelection: input.requestedSelection ?? input.selection,
    availableHostInstallations: input.availableHostInstallations ?? input.hostInstallations ?? [],
    confirmation: input.confirmation ?? input.confirm
  });

  if (selectionContract.status !== "ready") {
    return terminalPromptLoopBlockedResult({
      blockedReason: selectionContract.blockedReason,
      entrypoint,
      currentSelection,
      selectionContract
    });
  }

  const selectedBundle = selectionContract.selection;
  const promptMode = input.interactive === false ? "non-interactive" : "interactive";
  const validationHandoff = createPromptLoopValidationHandoff(selectionContract.validationHandoff);

  return freezeRecord({
    status: "ready",
    type: "runtime-settings-cli-terminal-prompt-loop-contract",
    command: RUNTIME_SETTINGS_INTERACTIVE_SELECTION_COMMAND,
    promptMode,
    entrypoint,
    currentSelection: currentSelection ?? selectedBundle,
    selectedBundle,
    confirmation: {
      accepted: validationHandoff.requested,
      mode: validationHandoff.requested ? "enter-through" : "pending"
    },
    options: selectionContract.options,
    guidance: selectionContract.guidance,
    transcript: createPromptLoopTranscript({
      currentSelection: currentSelection ?? selectedBundle,
      promptMode
    }),
    validationHandoff,
    blockedSideEffects: RUNTIME_SETTINGS_TERMINAL_PROMPT_LOOP_BLOCKED_SIDE_EFFECTS,
    requirementIds: allRuntimeSettingsCliTerminalPromptLoopRequirementIds()
  });
}

export function createRuntimeSettingsTerminalIoAdapter(input = {}) {
  const terminalSession = normalizeTerminalIoSession(input.terminalSession ?? input.session ?? {});
  if (!terminalSession.admitted) {
    return terminalIoAdapterBlockedResult({
      blockedReason: terminalSession.blockedReason,
      terminalSession
    });
  }

  const terminalInput = terminalSession.interactive === false
    ? {
      ok: true,
      value: freezeRecord({
        kind: "non-interactive-guidance",
        confirmation: false,
        requestedSelection: null
      })
    }
    : normalizeTerminalInput(input.terminalInput ?? input.input ?? input.promptInput);
  if (!terminalInput.ok) {
    return terminalIoAdapterBlockedResult({
      blockedReason: terminalInput.blockedReason,
      terminalSession,
      terminalInput: terminalInput.value
    });
  }

  if (terminalInput.value.kind === "cancel" || terminalInput.value.kind === "eof") {
    return terminalIoAdapterBlockedResult({
      blockedReason: terminalInput.value.kind === "cancel" ? "terminal-input-cancelled" : "terminal-input-eof",
      terminalSession,
      terminalInput: terminalInput.value
    });
  }

  const promptLoop = createRuntimeSettingsTerminalPromptLoop({
    ...input,
    interactive: terminalSession.interactive,
    confirmation: terminalInput.value.confirmation,
    requestedSelection: terminalInput.value.requestedSelection ?? input.requestedSelection ?? input.selection
  });

  if (promptLoop.status !== "ready") {
    return terminalIoAdapterBlockedResult({
      blockedReason: promptLoop.blockedReason,
      terminalSession,
      terminalInput: terminalInput.value,
      promptLoop
    });
  }

  const nonInteractive = terminalSession.interactive === false;
  return freezeRecord({
    status: "ready",
    type: "runtime-settings-cli-terminal-io-adapter-contract",
    command: RUNTIME_SETTINGS_INTERACTIVE_SELECTION_COMMAND,
    mode: nonInteractive ? "non-interactive-guidance" : "interactive",
    terminalSession,
    terminalInput: terminalInput.value,
    promptLoop,
    transcript: promptLoop.transcript,
    transcriptLines: promptLoop.transcript.map((step) => step.text),
    copyableGuidance: promptLoop.guidance?.copyableNextCommands ?? promptLoop.entrypoint?.discoverability?.copyableNextCommands ?? [],
    promptWait: !nonInteractive,
    selectedBundle: promptLoop.selectedBundle,
    validationHandoff: promptLoop.validationHandoff,
    blockedSideEffects: RUNTIME_SETTINGS_TERMINAL_IO_ADAPTER_BLOCKED_SIDE_EFFECTS,
    requirementIds: allRuntimeSettingsCliTerminalIoAdapterRequirementIds()
  });
}

export function writeRuntimeSettingsFacts(input = {}) {
  const effectiveSettingsTarget = normalizeEffectiveSettingsTarget(
    input.effectiveSettingsTarget ?? input.target ?? "user"
  );
  if (!effectiveSettingsTarget) {
    return blockedResult({
      blockedReason: "unsupported-effective-settings-target",
      effectiveSettingsTarget: null
    });
  }

  const settings = parseSettingsContent(input.settingsContent ?? input.settings ?? {});
  if (!settings.ok) {
    return blockedResult({
      blockedReason: settings.blockedReason,
      effectiveSettingsTarget
    });
  }

  const facts = normalizeRuntimeSettingsFacts(input.runtimeFacts ?? input);
  if (!facts.ok) {
    return blockedResult({
      blockedReason: facts.blockedReason,
      effectiveSettingsTarget
    });
  }

  const nextSettings = {
    ...settings.value,
    [RUNTIME_SETTINGS_KEYS.runtimeProvider]: facts.value.runtimeProvider,
    [RUNTIME_SETTINGS_KEYS.labviewVersion]: facts.value.labviewVersion,
    [RUNTIME_SETTINGS_KEYS.labviewBitness]: facts.value.labviewBitness
  };

  return Object.freeze({
    status: "updated",
    type: "runtime-settings-cli-settings-write-contract",
    effectiveSettingsTarget,
    settings: Object.freeze(nextSettings),
    content: `${JSON.stringify(nextSettings, null, 2)}\n`,
    updatedKeys: Object.freeze(Object.values(RUNTIME_SETTINGS_KEYS)),
    blockedSideEffects: RUNTIME_SETTINGS_BLOCKED_SIDE_EFFECTS,
    requirementIds: allRuntimeSettingsCliSettingsWriteRequirementIds()
  });
}

export function readRuntimeSettingsValidation(input = {}) {
  const effectiveSettingsTarget = normalizeEffectiveSettingsTarget(
    input.effectiveSettingsTarget ?? input.target ?? "user"
  );
  if (!effectiveSettingsTarget) {
    return validationBlockedResult({
      blockedReason: "unsupported-effective-settings-target",
      runtimeErrorCode: "VIHS_E_UNSUPPORTED_EFFECTIVE_SETTINGS_TARGET",
      effectiveSettingsTarget: null
    });
  }

  const settings = parseSettingsContent(input.settingsContent ?? input.settings ?? {});
  if (!settings.ok) {
    return validationBlockedResult({
      blockedReason: settings.blockedReason,
      runtimeErrorCode: runtimeErrorCodeForSettingsFailure(settings.blockedReason),
      effectiveSettingsTarget
    });
  }

  const persistedFacts = readPersistedRuntimeSettingsFacts(settings.value);
  if (!persistedFacts.ok) {
    return validationBlockedResult({
      blockedReason: persistedFacts.blockedReason,
      runtimeErrorCode: "VIHS_E_MISSING_PERSISTED_RUNTIME_SETTINGS",
      effectiveSettingsTarget
    });
  }

  const runtimeOutcome = normalizeRuntimeOutcome(input.runtimeOutcome ?? input.runtime);
  if (!runtimeOutcome.ok) {
    return validationBlockedResult({
      blockedReason: runtimeOutcome.blockedReason,
      runtimeErrorCode: "VIHS_E_MISSING_RUNTIME_OUTCOME_FACTS",
      effectiveSettingsTarget,
      persistedSettings: persistedFacts.value
    });
  }

  return Object.freeze({
    status: runtimeOutcome.value.runtimeValidationOutcome,
    type: "runtime-settings-cli-validation-readback-contract",
    effectiveSettingsTarget,
    persistedSettings: persistedFacts.value,
    runtime: runtimeOutcome.value,
    blockedSideEffects: RUNTIME_SETTINGS_VALIDATION_BLOCKED_SIDE_EFFECTS,
    requirementIds: allRuntimeSettingsCliValidationReadbackRequirementIds()
  });
}

export function createRuntimeSettingsValidationProofArtifact(input = {}) {
  const validation = normalizeValidationProofFacts(input.validation ?? input.validationFacts ?? input);
  if (!validation.ok) {
    return validationProofBlockedResult(validation.blockedReason);
  }

  const environmentFacts = redactEnvironmentFacts(input.environment ?? input.environmentFacts ?? {});
  const proofJson = freezeRecord({
    schema: RUNTIME_SETTINGS_VALIDATION_PROOF_SCHEMA,
    targetAuthority: MIT_PUBLIC_AUTHORITY,
    command: RUNTIME_SETTINGS_VALIDATION_PROOF_COMMAND,
    validation: validation.value,
    environmentFacts,
    blockedSideEffects: RUNTIME_SETTINGS_VALIDATION_PROOF_BLOCKED_SIDE_EFFECTS,
    requirementIds: allRuntimeSettingsCliValidationProofRequirementIds()
  });
  const issueBody = createRuntimeSettingsValidationProofIssueBody(proofJson);

  return freezeRecord({
    status: validation.value.status,
    type: "runtime-settings-cli-validation-proof-artifact-contract",
    proofJson,
    issueBody,
    blockedSideEffects: RUNTIME_SETTINGS_VALIDATION_PROOF_BLOCKED_SIDE_EFFECTS,
    requirementIds: allRuntimeSettingsCliValidationProofRequirementIds()
  });
}

export function createRuntimeSettingsValidationProofIssueBody(proofJson = {}) {
  const validation = proofJson.validation ?? {};
  const runtime = validation.runtime ?? {};
  const persistedSettings = validation.persistedSettings ?? {};
  const effectiveTarget = validation.effectiveSettingsTarget ?? {};
  const environmentLines = Object.entries(proofJson.environmentFacts ?? {})
    .sort(([left], [right]) => left.localeCompare(right))
    .map(([key, value]) => `- Environment ${key}: ${value}`);

  return [
    "### Runtime settings CLI validation proof",
    `- Repository: ${proofJson.targetAuthority ?? MIT_PUBLIC_AUTHORITY}`,
    `- Command: ${proofJson.command ?? RUNTIME_SETTINGS_VALIDATION_PROOF_COMMAND}`,
    `- Validation outcome: ${validation.status ?? "blocked"}`,
    `- Runtime provider: ${runtime.runtimeProvider ?? "unavailable"}`,
    `- Runtime engine: ${runtime.runtimeEngine ?? "none"}`,
    `- Runtime blocked reason: ${runtime.runtimeBlockedReason ?? "none"}`,
    `- Runtime error code: ${runtime.runtimeErrorCode ?? "VIHS_E_MISSING_VALIDATION_PROOF_FACTS"}`,
    `- Runtime proof status: ${runtime.runtimeProofStatus ?? "blocked-with-actionable-error"}`,
    `- Runtime implementation status: ${runtime.runtimeImplementationStatus ?? "not-started"}`,
    `- Effective settings scope: ${effectiveTarget.scope ?? "unknown"}`,
    `- Effective settings identifier: ${effectiveTarget.identifier ?? "unknown"}`,
    `- Persisted runtime provider: ${persistedSettings.runtimeProvider ?? "unknown"}`,
    `- Persisted LabVIEW version: ${persistedSettings.labviewVersion ?? "unknown"}`,
    `- Persisted LabVIEW bitness: ${persistedSettings.labviewBitness ?? "unknown"}`,
    ...environmentLines
  ].join("\n");
}

export function createRuntimeSettingsValidationProofOutAdapter(input = {}) {
  const request = normalizeValidationProofOutRequest(input.request ?? input.proofOutRequest ?? input, input);
  if (!request.ok) {
    return validationProofOutBlockedResult({
      blockedReason: request.blockedReason,
      request: request.value ?? null,
      proofOutTarget: request.proofOutTarget ?? null
    });
  }

  const proofArtifact = resolveValidationProofOutArtifact(input);
  if (!proofArtifact.ok) {
    return validationProofOutBlockedResult({
      blockedReason: proofArtifact.blockedReason,
      request: request.value,
      proofOutTarget: request.value.proofOutTarget,
      proofArtifact: proofArtifact.artifact ?? null
    });
  }

  const artifactFiles = createValidationProofOutArtifactFiles(
    request.value.proofOutTarget,
    proofArtifact.value
  );
  const guidance = createValidationProofOutGuidance(request.value.proofOutTarget);

  return freezeRecord({
    status: "ready",
    type: "runtime-settings-cli-validation-proof-out-adapter-contract",
    command: request.value.command,
    request: request.value,
    proofOutTarget: request.value.proofOutTarget,
    proofArtifactStatus: proofArtifact.value.status,
    artifactFiles,
    proofJson: proofArtifact.value.proofJson,
    issueMarkdown: proofArtifact.value.issueBody,
    guidance,
    copyableGuidance: guidance.copyableCommands,
    promptWait: false,
    writeBound: false,
    artifactWrites: false,
    blockedSideEffects: RUNTIME_SETTINGS_VALIDATION_PROOF_OUT_BLOCKED_SIDE_EFFECTS,
    requirementIds: allRuntimeSettingsCliValidationProofOutRequirementIds()
  });
}

export async function writeRuntimeSettingsValidationProofOutFiles(input = {}) {
  const adapter = input.proofOutAdapter
    ?? input.validationProofOutAdapter
    ?? input.adapter
    ?? (input.type === "runtime-settings-cli-validation-proof-out-adapter-contract" ? input : null);
  const readyAdapter = normalizeReadyValidationProofOutAdapter(adapter);
  if (!readyAdapter.ok) {
    return validationProofOutFileEmissionBlockedResult({
      blockedReason: readyAdapter.blockedReason,
      proofOutAdapter: adapter ?? null,
      proofOutTarget: readyAdapter.proofOutTarget ?? null
    });
  }

  const payloads = resolveValidationProofOutFilePayloads(readyAdapter.value);
  if (!payloads.ok) {
    return validationProofOutFileEmissionBlockedResult({
      blockedReason: payloads.blockedReason,
      proofOutAdapter: readyAdapter.value,
      proofOutTarget: readyAdapter.value.proofOutTarget
    });
  }

  const fileSystem = input.fileSystem ?? input.fs ?? fs;
  const baseDirectory = typeof input.baseDirectory === "string" && input.baseDirectory
    ? input.baseDirectory
    : ".";
  const targetDirectory = path.resolve(baseDirectory, readyAdapter.value.proofOutTarget.identifier);
  const writePlan = createValidationProofOutFileEmissionPlan(readyAdapter.value, targetDirectory, payloads.value);
  const completedFiles = [];

  try {
    await fileSystem.mkdir(targetDirectory, { recursive: true });
    for (const file of writePlan.files) {
      await fileSystem.writeFile(file.absolutePath, file.text, "utf8");
      completedFiles.push(file.result);
    }
  } catch (error) {
    const failedFile = writePlan.files
      .find((file) => !completedFiles.some((completed) => completed.relativePath === file.result.relativePath));

    return validationProofOutFileEmissionBlockedResult({
      blockedReason: "proof-out-file-emission-failed",
      proofOutAdapter: readyAdapter.value,
      proofOutTarget: readyAdapter.value.proofOutTarget,
      attemptedFiles: writePlan.files.map((file) => file.result),
      completedFiles,
      failedFile: failedFile?.result ?? null,
      errorCode: normalizeFact(error?.code) ?? "VIHS_E_PROOF_OUT_FILE_EMISSION_FAILED"
    });
  }

  return freezeRecord({
    status: "ready",
    type: "runtime-settings-cli-validation-proof-out-file-emission-contract",
    command: readyAdapter.value.command,
    proofOutAdapterStatus: readyAdapter.value.status,
    proofOutTarget: readyAdapter.value.proofOutTarget,
    directory: freezeRecord({
      kind: "proof-out-directory",
      identifier: readyAdapter.value.proofOutTarget.identifier,
      publicSafe: true,
      createdWhenMissing: true
    }),
    files: freezeRecord({
      proofJson: completedFiles[0],
      issueMarkdown: completedFiles[1]
    }),
    writeResults: completedFiles,
    artifactWrites: true,
    partialWrite: false,
    blockedSideEffects: RUNTIME_SETTINGS_VALIDATION_PROOF_OUT_FILE_EMISSION_BLOCKED_SIDE_EFFECTS,
    requirementIds: allRuntimeSettingsCliValidationProofOutFileEmissionRequirementIds()
  });
}

export function createRuntimeSettingsInteractiveSelection(input = {}) {
  const selectionResult = resolveInteractiveSelection(input);
  if (!selectionResult.ok) {
    return interactiveSelectionBlockedResult(selectionResult);
  }

  const selection = selectionResult.value;
  const validationRequested = isConfirmationAccepted(input.confirmation ?? input.confirm);

  return freezeRecord({
    status: "ready",
    type: "runtime-settings-cli-interactive-selection-contract",
    command: RUNTIME_SETTINGS_INTERACTIVE_SELECTION_COMMAND,
    defaultSelectionApplied: selectionResult.defaultSelectionApplied,
    selection,
    options: createInteractiveSelectionOptions(input.availableHostInstallations ?? input.hostInstallations ?? []),
    guidance: createInteractiveSelectionGuidance(selection),
    validationHandoff: createValidationHandoff(selection, validationRequested),
    blockedSideEffects: RUNTIME_SETTINGS_INTERACTIVE_SELECTION_BLOCKED_SIDE_EFFECTS,
    requirementIds: allRuntimeSettingsCliInteractiveSelectionRequirementIds()
  });
}

function resolveInteractiveSelection(input) {
  const requestedSelection = input.requestedSelection ?? input.selection;
  if (isPlainObject(requestedSelection)) {
    return validateRequestedInteractiveSelection(
      normalizeRequestedInteractiveSelection(requestedSelection),
      input.availableHostInstallations ?? input.hostInstallations ?? []
    );
  }

  const settings = parseSettingsContent(input.settingsContent ?? input.settings ?? {});
  if (!settings.ok) {
    return {
      ok: false,
      blockedReason: settings.blockedReason,
      selection: null
    };
  }

  const persisted = readPersistedRuntimeSettingsFacts(settings.value);
  if (!persisted.ok) {
    return {
      ok: true,
      value: RUNTIME_SETTINGS_INTERACTIVE_DEFAULT_SELECTION,
      defaultSelectionApplied: true
    };
  }

  return {
    ok: true,
    value: freezeRecord({
      runtimeProvider: normalizeRuntimeProvider(persisted.value.runtimeProvider),
      platform: normalizePlatform(input.platform ?? input.currentPlatform ?? defaultPlatformForProvider(persisted.value.runtimeProvider)),
      labviewVersion: persisted.value.labviewVersion,
      labviewBitness: normalizeLabviewBitness(persisted.value.labviewBitness)
    }),
    defaultSelectionApplied: false
  };
}

function validateRequestedInteractiveSelection(selection, availableHostInstallations) {
  if (!selection) {
    return {
      ok: false,
      blockedReason: "missing-selection-facts",
      selection: null
    };
  }

  if (selection.runtimeProvider === "docker") {
    if (selection.platform !== "docker") {
      return blockedSelection("host-platform-mismatch", selection);
    }
    if (selection.labviewVersion !== "2026") {
      return blockedSelection("unsupported-docker-year", selection);
    }
    if (selection.labviewBitness !== "x64") {
      return blockedSelection("docker-bitness-not-selectable", selection);
    }
    return {
      ok: true,
      value: selection,
      defaultSelectionApplied: false
    };
  }

  if (selection.runtimeProvider !== "host-native") {
    return blockedSelection("unsupported-runtime-provider", selection);
  }
  if (!["windows", "linux"].includes(selection.platform)) {
    return blockedSelection("host-platform-mismatch", selection);
  }
  if (!isSupportedHostYear(selection.labviewVersion)) {
    return blockedSelection("unsupported-host-year", selection);
  }
  if (selection.platform === "linux" && selection.labviewBitness !== "x64") {
    return blockedSelection("missing-selected-bitness", selection);
  }
  if (!hasMatchingHostInstallation(availableHostInstallations, selection)) {
    return blockedSelection("missing-selected-bitness", selection);
  }

  return {
    ok: true,
    value: selection,
    defaultSelectionApplied: false
  };
}

function interactiveSelectionBlockedResult(result) {
  return freezeRecord({
    status: "blocked",
    type: "runtime-settings-cli-interactive-selection-contract",
    command: RUNTIME_SETTINGS_INTERACTIVE_SELECTION_COMMAND,
    blockedReason: result.blockedReason,
    selection: result.selection,
    guidance: createBlockedInteractiveSelectionGuidance(result.blockedReason),
    validationHandoff: createValidationHandoff(result.selection, false),
    blockedSideEffects: RUNTIME_SETTINGS_INTERACTIVE_SELECTION_BLOCKED_SIDE_EFFECTS,
    requirementIds: allRuntimeSettingsCliInteractiveSelectionRequirementIds()
  });
}

function blockedSelection(blockedReason, selection) {
  return {
    ok: false,
    blockedReason,
    selection
  };
}

function normalizeInteractiveSelection(selection) {
  const runtimeProvider = normalizeRuntimeProvider(selection.runtimeProvider ?? selection.provider);
  const platform = normalizePlatform(selection.platform);
  const labviewVersion = normalizeFact(selection.labviewVersion ?? selection.version);
  const labviewBitness = normalizeLabviewBitness(selection.labviewBitness ?? selection.bitness);

  if (!runtimeProvider || !platform || !labviewVersion || !labviewBitness) {
    return null;
  }

  return freezeRecord({
    runtimeProvider,
    platform,
    labviewVersion,
    labviewBitness
  });
}

function normalizeRequestedInteractiveSelection(selection) {
  const runtimeProvider = normalizeRuntimeProvider(selection.runtimeProvider ?? selection.provider);
  const platform = normalizePlatform(selection.platform ?? defaultPlatformForProvider(runtimeProvider));
  const labviewVersion = normalizeFact(selection.labviewVersion ?? selection.version);
  const requestedBitness = selection.labviewBitness ?? selection.bitness;
  const labviewBitness = runtimeProvider === "docker" && requestedBitness == null
    ? "x64"
    : normalizeLabviewBitness(requestedBitness);

  if (!runtimeProvider || !platform || !labviewVersion || !labviewBitness) {
    return null;
  }

  return freezeRecord({
    runtimeProvider,
    platform,
    labviewVersion,
    labviewBitness
  });
}

function normalizeRuntimeProvider(value) {
  const normalized = normalizeFact(value);
  if (!normalized) {
    return null;
  }
  if (["host", "host-native", "native"].includes(normalized.toLowerCase())) {
    return "host-native";
  }
  if (normalized.toLowerCase() === "docker") {
    return "docker";
  }
  return normalized;
}

function normalizePlatform(value) {
  const normalized = normalizeFact(value);
  if (!normalized) {
    return null;
  }
  const lower = normalized.toLowerCase();
  if (["win32", "win64", "windows"].includes(lower)) {
    return "windows";
  }
  if (lower === "linux") {
    return "linux";
  }
  if (["docker", "container", "windows-container"].includes(lower)) {
    return "docker";
  }
  return lower;
}

function normalizeLabviewBitness(value) {
  const normalized = normalizeFact(value);
  if (!normalized) {
    return null;
  }
  const lower = normalized.toLowerCase();
  if (["x64", "64", "64-bit", "64bit"].includes(lower)) {
    return "x64";
  }
  if (["x86", "32", "32-bit", "32bit"].includes(lower)) {
    return "x86";
  }
  return lower;
}

function defaultPlatformForProvider(runtimeProvider) {
  return normalizeRuntimeProvider(runtimeProvider) === "docker" ? "docker" : "windows";
}

function isSupportedHostYear(labviewVersion) {
  const year = Number.parseInt(labviewVersion, 10);
  return Number.isInteger(year) && year >= 2025;
}

function hasMatchingHostInstallation(availableHostInstallations, selection) {
  if (!Array.isArray(availableHostInstallations)) {
    return false;
  }
  return availableHostInstallations.some((installation) => {
    if (!isPlainObject(installation) || installation.installed === false) {
      return false;
    }
    const candidate = normalizeInteractiveSelection({
      runtimeProvider: "host-native",
      platform: installation.platform,
      labviewVersion: installation.labviewVersion ?? installation.version,
      labviewBitness: installation.labviewBitness ?? installation.bitness
    });
    return candidate
      && candidate.platform === selection.platform
      && candidate.labviewVersion === selection.labviewVersion
      && candidate.labviewBitness === selection.labviewBitness;
  });
}

function createInteractiveSelectionOptions(availableHostInstallations) {
  const host = Array.isArray(availableHostInstallations)
    ? availableHostInstallations
      .map((installation) => normalizeInteractiveSelection({
        runtimeProvider: "host-native",
        platform: installation?.platform,
        labviewVersion: installation?.labviewVersion ?? installation?.version,
        labviewBitness: installation?.labviewBitness ?? installation?.bitness
      }))
      .filter((selection) => selection && isSupportedHostYear(selection.labviewVersion))
    : [];

  return freezeRecord({
    host,
    docker: [
      {
        runtimeProvider: "docker",
        platform: "docker",
        labviewVersion: "2026",
        labviewBitness: "x64"
      }
    ]
  });
}

function createInteractiveSelectionGuidance(selection) {
  return freezeRecord({
    copyableNextCommands: [
      createSetRuntimeCommand(selection),
      RUNTIME_SETTINGS_VALIDATION_COMMAND
    ],
    nonInteractive: true
  });
}

function createBlockedInteractiveSelectionGuidance(blockedReason) {
  return freezeRecord({
    blockedReason,
    copyableNextCommands: [
      "vihs --help",
      "vihs --validate"
    ],
    nonInteractive: true
  });
}

function createSetRuntimeCommand(selection) {
  const command = [
    "vihs",
    "--set-provider",
    selection.runtimeProvider,
    "--set-platform",
    selection.platform,
    "--set-labview-version",
    selection.labviewVersion
  ];
  if (selection.runtimeProvider !== "docker") {
    command.push("--set-labview-bitness", selection.labviewBitness);
  }
  return command.join(" ");
}

function createValidationHandoff(selection, requested) {
  return freezeRecord({
    requested,
    command: RUNTIME_SETTINGS_VALIDATION_COMMAND,
    contract: "runtime-settings-cli-validation-readback-contract",
    selection: selection ?? null
  });
}

function createPromptLoopValidationHandoff(handoff) {
  return freezeRecord({
    requested: handoff?.requested === true,
    command: handoff?.command ?? RUNTIME_SETTINGS_VALIDATION_COMMAND,
    contract: handoff?.contract ?? "runtime-settings-cli-validation-readback-contract",
    selection: handoff?.selection ?? null,
    executionBound: false,
    proofOutBound: false
  });
}

function isConfirmationAccepted(value) {
  if (value === true) {
    return true;
  }
  if (typeof value !== "string") {
    return false;
  }
  return ["accept", "accepted", "confirm", "confirmed", "enter"].includes(value.trim().toLowerCase());
}

function terminalPromptLoopBlockedResult({
  blockedReason,
  entrypoint = null,
  currentSelection = null,
  selectionContract = null
}) {
  const attemptedSelection = selectionContract?.selection ?? null;
  return freezeRecord({
    status: "blocked",
    type: "runtime-settings-cli-terminal-prompt-loop-contract",
    command: RUNTIME_SETTINGS_INTERACTIVE_SELECTION_COMMAND,
    blockedReason,
    entrypoint,
    currentSelection,
    attemptedSelection,
    selectedBundle: null,
    confirmation: {
      accepted: false,
      mode: "blocked"
    },
    transcript: createBlockedPromptLoopTranscript(blockedReason),
    validationHandoff: createPromptLoopValidationHandoff(createValidationHandoff(null, false)),
    blockedSideEffects: RUNTIME_SETTINGS_TERMINAL_PROMPT_LOOP_BLOCKED_SIDE_EFFECTS,
    requirementIds: allRuntimeSettingsCliTerminalPromptLoopRequirementIds()
  });
}

function terminalIoAdapterBlockedResult({
  blockedReason,
  terminalSession = normalizeTerminalIoSession(),
  terminalInput = null,
  promptLoop = null
}) {
  return freezeRecord({
    status: "blocked",
    type: "runtime-settings-cli-terminal-io-adapter-contract",
    command: RUNTIME_SETTINGS_INTERACTIVE_SELECTION_COMMAND,
    blockedReason,
    terminalSession,
    terminalInput,
    promptLoop,
    transcript: promptLoop?.transcript ?? createBlockedPromptLoopTranscript(blockedReason),
    transcriptLines: (promptLoop?.transcript ?? createBlockedPromptLoopTranscript(blockedReason)).map((step) => step.text),
    copyableGuidance: promptLoop?.guidance?.copyableNextCommands ?? [
      "vihs --help",
      RUNTIME_SETTINGS_VALIDATION_COMMAND
    ],
    promptWait: false,
    selectedBundle: null,
    validationHandoff: createPromptLoopValidationHandoff(createValidationHandoff(null, false)),
    blockedSideEffects: RUNTIME_SETTINGS_TERMINAL_IO_ADAPTER_BLOCKED_SIDE_EFFECTS,
    requirementIds: allRuntimeSettingsCliTerminalIoAdapterRequirementIds()
  });
}

function createPromptLoopTranscript({ currentSelection, promptMode }) {
  const currentSelectionText = formatRuntimeSelection(currentSelection);
  const transcript = [
    {
      kind: "heading",
      text: "VI History runtime settings"
    },
    {
      kind: "current-selection",
      text: `Current runtime: ${currentSelectionText}`
    },
    {
      kind: "next-command",
      text: `Next command: ${RUNTIME_SETTINGS_VALIDATION_COMMAND}`
    }
  ];

  if (promptMode === "interactive") {
    transcript.push({
      kind: "confirmation",
      text: "Press Enter to confirm this runtime or choose a supported runtime."
    });
  } else {
    transcript.push({
      kind: "non-interactive-guidance",
      text: "Use the copyable command guidance to update or validate runtime settings."
    });
  }

  return freezeRecord(transcript);
}

function createBlockedPromptLoopTranscript(blockedReason) {
  return freezeRecord([
    {
      kind: "heading",
      text: "VI History runtime settings"
    },
    {
      kind: "blocked",
      text: `Prompt loop blocked: ${blockedReason}`
    },
    {
      kind: "next-command",
      text: `Next command: ${RUNTIME_SETTINGS_VALIDATION_COMMAND}`
    }
  ]);
}

function normalizePromptLoopCurrentSelection(selection, platform) {
  if (!selection) {
    return null;
  }
  return normalizeInteractiveSelection({
    runtimeProvider: selection.runtimeProvider ?? selection.provider,
    platform: selection.platform ?? platform,
    labviewVersion: selection.labviewVersion ?? selection.version,
    labviewBitness: selection.labviewBitness ?? selection.bitness
  });
}

function settingsFromSelection(selection) {
  if (!selection) {
    return null;
  }
  return {
    [RUNTIME_SETTINGS_KEYS.runtimeProvider]: selection.runtimeProvider,
    [RUNTIME_SETTINGS_KEYS.labviewVersion]: selection.labviewVersion,
    [RUNTIME_SETTINGS_KEYS.labviewBitness]: selection.labviewBitness
  };
}

function formatRuntimeSelection(selection) {
  if (!selection) {
    return "not configured";
  }
  return [
    selection.runtimeProvider,
    selection.platform,
    selection.labviewVersion,
    selection.labviewBitness
  ].join("/");
}

function terminalEntrypointBlockedResult({ blockedReason, terminalSession = normalizeTerminalSession() }) {
  return freezeRecord({
    status: "blocked",
    type: "runtime-settings-cli-terminal-entrypoint-contract",
    command: TERMINAL_ENTRYPOINT_COMMAND,
    admissionScope: TERMINAL_ENTRYPOINT_ADMISSION_SCOPE,
    materializationState: "blocked",
    blockedReason,
    terminalSession,
    recoveryInstruction: TERMINAL_ENTRYPOINT_RECOVERY_INSTRUCTION,
    recoveryCommand: TERMINAL_ENTRYPOINT_RECOVERY_COMMAND,
    discoverability: null,
    validationHandoff: createTerminalValidationHandoff(),
    blockedSideEffects: RUNTIME_SETTINGS_TERMINAL_ENTRYPOINT_BLOCKED_SIDE_EFFECTS,
    requirementIds: allRuntimeSettingsCliTerminalEntrypointRequirementIds()
  });
}

function normalizeLauncherState(value) {
  const normalized = normalizeFact(value);
  if (!normalized) {
    return "present";
  }
  const lower = normalized.toLowerCase();
  if (lower === "missing") {
    return "missing";
  }
  if (lower === "stale") {
    return "stale";
  }
  return "present";
}

function resolveRuntimeLookupFacts(lookup, platform) {
  const isWindows = platform === "windows";
  const order = isWindows ? TERMINAL_ENTRYPOINT_RUNTIME_LOOKUP_ORDER_WINDOWS : TERMINAL_ENTRYPOINT_RUNTIME_LOOKUP_ORDER_OTHER;
  const vscodeAvailable = lookup.vscodeRuntimeAvailable === true;
  const globalNodeAvailable = lookup.globalNodeAvailable === true;
  const explicitOverride = normalizeFact(lookup.explicitOverride ?? lookup.override);

  let activeRuntime = null;
  if (isWindows && vscodeAvailable) {
    activeRuntime = "vscode-runtime";
  } else if (globalNodeAvailable) {
    activeRuntime = "global-node";
  } else if (explicitOverride) {
    activeRuntime = "explicit-override";
  }

  return freezeRecord({
    platform,
    order,
    activeRuntime,
    vscodeRuntimeAvailable: vscodeAvailable,
    globalNodeAvailable,
    overrideActive: Boolean(explicitOverride),
    explicitOverride: explicitOverride ?? null
  });
}

function normalizeTerminalSession(session) {
  if (!session) {
    return freezeRecord({
      admitted: true,
      scope: "user",
      requestedScope: "user",
      blockedReason: null
    });
  }
  const requestedScope = (normalizeFact(session.scope) ?? "user").toLowerCase();
  const userScoped = requestedScope === "user";
  const admitted = session.admitted !== false && userScoped;
  return freezeRecord({
    admitted,
    scope: "user",
    requestedScope,
    blockedReason: admitted ? null : "unsupported-terminal-session"
  });
}

function normalizeTerminalIoSession(session = {}) {
  const base = normalizeTerminalSession(session);
  const interactive = session.interactive === false || session.isTTY === false || session.tty === false
    ? false
    : true;
  return freezeRecord({
    ...base,
    interactive,
    isTTY: interactive,
    rawDriverBound: false,
    spawnedProcessBound: false
  });
}

function normalizeTerminalInput(input) {
  if (input == null || input === "") {
    return {
      ok: true,
      value: freezeRecord({
        kind: "enter",
        confirmation: "enter",
        requestedSelection: null
      })
    };
  }

  if (typeof input === "string") {
    const normalized = input.trim().toLowerCase();
    if (["enter", "return", "confirm", "confirmed", "accept", "accepted"].includes(normalized)) {
      return {
        ok: true,
        value: freezeRecord({
          kind: "enter",
          confirmation: "enter",
          requestedSelection: null
        })
      };
    }
    if (["cancel", "escape", "esc"].includes(normalized)) {
      return {
        ok: true,
        value: freezeRecord({
          kind: "cancel",
          confirmation: false,
          requestedSelection: null
        })
      };
    }
    if (normalized === "eof") {
      return {
        ok: true,
        value: freezeRecord({
          kind: "eof",
          confirmation: false,
          requestedSelection: null
        })
      };
    }
    return {
      ok: false,
      blockedReason: "unsupported-terminal-input",
      value: freezeRecord({
        kind: "unsupported",
        raw: input
      })
    };
  }

  if (!isPlainObject(input)) {
    return {
      ok: false,
      blockedReason: "unsupported-terminal-input",
      value: null
    };
  }

  const kind = normalizeFact(input.kind ?? input.action ?? input.type)?.toLowerCase();
  if (["cancel", "escape", "esc"].includes(kind)) {
    return {
      ok: true,
      value: freezeRecord({
        kind: "cancel",
        confirmation: false,
        requestedSelection: null
      })
    };
  }
  if (kind === "eof") {
    return {
      ok: true,
      value: freezeRecord({
        kind: "eof",
        confirmation: false,
        requestedSelection: null
      })
    };
  }
  if (kind === "selection" || input.selection || input.requestedSelection) {
    return {
      ok: true,
      value: freezeRecord({
        kind: "selection",
        confirmation: input.confirmation ?? input.confirm ?? "enter",
        requestedSelection: input.selection ?? input.requestedSelection
      })
    };
  }
  if (!kind || ["enter", "return", "confirm", "accepted", "accept"].includes(kind)) {
    return {
      ok: true,
      value: freezeRecord({
        kind: "enter",
        confirmation: input.confirmation ?? input.confirm ?? "enter",
        requestedSelection: null
      })
    };
  }

  return {
    ok: false,
    blockedReason: "unsupported-terminal-input",
    value: freezeRecord({
      kind: "unsupported",
      raw: input
    })
  };
}

function createDiscoverabilityFacts(bundle, platform) {
  if (!bundle) {
    return freezeRecord({
      currentBundle: null,
      copyableNextCommands: [
        RUNTIME_SETTINGS_VALIDATION_COMMAND
      ],
      promptLoopBound: false
    });
  }

  const normalizedBundle = normalizeInteractiveSelection({
    runtimeProvider: bundle.runtimeProvider ?? bundle.provider,
    platform: bundle.platform ?? platform,
    labviewVersion: bundle.labviewVersion ?? bundle.version,
    labviewBitness: bundle.labviewBitness ?? bundle.bitness
  });

  if (!normalizedBundle) {
    return freezeRecord({
      currentBundle: null,
      copyableNextCommands: [
        RUNTIME_SETTINGS_VALIDATION_COMMAND
      ],
      promptLoopBound: false
    });
  }

  return freezeRecord({
    currentBundle: normalizedBundle,
    copyableNextCommands: [
      createSetRuntimeCommand(normalizedBundle),
      RUNTIME_SETTINGS_VALIDATION_COMMAND
    ],
    promptLoopBound: false
  });
}

function createTerminalValidationHandoff() {
  return Object.freeze({
    command: RUNTIME_SETTINGS_VALIDATION_COMMAND,
    contract: "runtime-settings-cli-validation-readback-contract",
    executionBound: false,
    proofOutBound: false
  });
}

function blockedResult({ blockedReason, effectiveSettingsTarget }) {
  return Object.freeze({
    status: "blocked",
    type: "runtime-settings-cli-settings-write-contract",
    blockedReason,
    partialWrite: false,
    effectiveSettingsTarget,
    blockedSideEffects: RUNTIME_SETTINGS_BLOCKED_SIDE_EFFECTS,
    requirementIds: allRuntimeSettingsCliSettingsWriteRequirementIds()
  });
}

function validationProofBlockedResult(blockedReason) {
  const validation = freezeRecord({
    status: "blocked",
    blockedReason,
    effectiveSettingsTarget: null,
    persistedSettings: null,
    runtime: {
      runtimeValidationOutcome: "blocked",
      runtimeProvider: "unavailable",
      runtimeEngine: null,
      runtimeBlockedReason: blockedReason,
      runtimeErrorCode: "VIHS_E_MISSING_VALIDATION_PROOF_FACTS",
      runtimeProofStatus: "blocked-with-actionable-error",
      runtimeImplementationStatus: "not-started"
    }
  });
  const proofJson = freezeRecord({
    schema: RUNTIME_SETTINGS_VALIDATION_PROOF_SCHEMA,
    targetAuthority: MIT_PUBLIC_AUTHORITY,
    command: RUNTIME_SETTINGS_VALIDATION_PROOF_COMMAND,
    validation,
    environmentFacts: Object.freeze({}),
    blockedSideEffects: RUNTIME_SETTINGS_VALIDATION_PROOF_BLOCKED_SIDE_EFFECTS,
    requirementIds: allRuntimeSettingsCliValidationProofRequirementIds()
  });

  return freezeRecord({
    status: "blocked",
    type: "runtime-settings-cli-validation-proof-artifact-contract",
    blockedReason,
    proofJson,
    issueBody: createRuntimeSettingsValidationProofIssueBody(proofJson),
    blockedSideEffects: RUNTIME_SETTINGS_VALIDATION_PROOF_BLOCKED_SIDE_EFFECTS,
    requirementIds: allRuntimeSettingsCliValidationProofRequirementIds()
  });
}

function validationProofOutBlockedResult({
  blockedReason,
  request = null,
  proofOutTarget = null,
  proofArtifact = null
}) {
  const guidance = createValidationProofOutGuidance(proofOutTarget);
  return freezeRecord({
    status: "blocked",
    type: "runtime-settings-cli-validation-proof-out-adapter-contract",
    command: request?.command ?? RUNTIME_SETTINGS_VALIDATION_PROOF_OUT_COMMAND,
    blockedReason,
    request,
    proofOutTarget,
    proofArtifactStatus: proofArtifact?.status ?? null,
    artifactFiles: {},
    proofJson: null,
    issueMarkdown: null,
    guidance,
    copyableGuidance: guidance.copyableCommands,
    promptWait: false,
    writeBound: false,
    artifactWrites: false,
    partialWrite: false,
    blockedSideEffects: RUNTIME_SETTINGS_VALIDATION_PROOF_OUT_BLOCKED_SIDE_EFFECTS,
    requirementIds: allRuntimeSettingsCliValidationProofOutRequirementIds()
  });
}

function validationProofOutFileEmissionBlockedResult({
  blockedReason,
  proofOutAdapter = null,
  proofOutTarget = null,
  attemptedFiles = [],
  completedFiles = [],
  failedFile = null,
  errorCode = null
}) {
  return freezeRecord({
    status: "blocked",
    type: "runtime-settings-cli-validation-proof-out-file-emission-contract",
    command: proofOutAdapter?.command ?? RUNTIME_SETTINGS_VALIDATION_PROOF_OUT_COMMAND,
    blockedReason,
    proofOutAdapterStatus: proofOutAdapter?.status ?? null,
    proofOutTarget,
    attemptedFiles,
    completedFiles,
    failedFile,
    errorCode,
    artifactWrites: completedFiles.length > 0,
    partialWrite: completedFiles.length > 0,
    blockedSideEffects: RUNTIME_SETTINGS_VALIDATION_PROOF_OUT_FILE_EMISSION_BLOCKED_SIDE_EFFECTS,
    requirementIds: allRuntimeSettingsCliValidationProofOutFileEmissionRequirementIds()
  });
}

function normalizeReadyValidationProofOutAdapter(adapter) {
  if (!isPlainObject(adapter)) {
    return {
      ok: false,
      blockedReason: "missing-ready-proof-out-adapter"
    };
  }

  if (adapter.type !== "runtime-settings-cli-validation-proof-out-adapter-contract") {
    return {
      ok: false,
      blockedReason: "unsupported-proof-out-adapter",
      proofOutTarget: adapter.proofOutTarget ?? null
    };
  }

  if (adapter.status !== "ready") {
    return {
      ok: false,
      blockedReason: adapter.blockedReason ?? "proof-out-adapter-not-ready",
      proofOutTarget: adapter.proofOutTarget ?? null
    };
  }

  const target = adapter.proofOutTarget;
  if (!isPlainObject(target) || target.publicSafe !== true || !isPublicSafeProofOutTarget(target.identifier)) {
    return {
      ok: false,
      blockedReason: "unsupported-proof-out-target",
      proofOutTarget: target ?? null
    };
  }

  return {
    ok: true,
    value: adapter
  };
}

function resolveValidationProofOutFilePayloads(adapter) {
  const proofJson = adapter.artifactFiles?.proofJson;
  const issueMarkdown = adapter.artifactFiles?.issueMarkdown;
  if (typeof proofJson?.text !== "string" || typeof issueMarkdown?.text !== "string") {
    return {
      ok: false,
      blockedReason: "missing-proof-out-artifact-payload"
    };
  }

  if (
    proofJson.fileName !== RUNTIME_SETTINGS_VALIDATION_PROOF_OUT_PROOF_FILE
    || issueMarkdown.fileName !== RUNTIME_SETTINGS_VALIDATION_PROOF_OUT_ISSUE_FILE
    || proofJson.relativePath !== `${adapter.proofOutTarget.identifier}/${RUNTIME_SETTINGS_VALIDATION_PROOF_OUT_PROOF_FILE}`
    || issueMarkdown.relativePath !== `${adapter.proofOutTarget.identifier}/${RUNTIME_SETTINGS_VALIDATION_PROOF_OUT_ISSUE_FILE}`
  ) {
    return {
      ok: false,
      blockedReason: "unsupported-proof-out-artifact-files"
    };
  }

  return {
    ok: true,
    value: freezeRecord({
      proofJson,
      issueMarkdown
    })
  };
}

function createValidationProofOutFileEmissionPlan(adapter, targetDirectory, payloads) {
  const proofJsonResult = createValidationProofOutFileWriteResult(payloads.proofJson, payloads.proofJson.text);
  const issueMarkdownResult = createValidationProofOutFileWriteResult(payloads.issueMarkdown, payloads.issueMarkdown.text);

  return {
    files: [
      {
        absolutePath: path.join(targetDirectory, RUNTIME_SETTINGS_VALIDATION_PROOF_OUT_PROOF_FILE),
        text: payloads.proofJson.text,
        result: proofJsonResult
      },
      {
        absolutePath: path.join(targetDirectory, RUNTIME_SETTINGS_VALIDATION_PROOF_OUT_ISSUE_FILE),
        text: payloads.issueMarkdown.text,
        result: issueMarkdownResult
      }
    ],
    target: adapter.proofOutTarget
  };
}

function createValidationProofOutFileWriteResult(file, text) {
  return freezeRecord({
    status: "written",
    fileName: file.fileName,
    relativePath: file.relativePath,
    contentType: file.contentType,
    bytes: Buffer.byteLength(text, "utf8")
  });
}

function normalizeValidationProofOutRequest(request = {}, fallbackInput = {}) {
  const target = normalizeValidationProofOutTarget(
    request.proofOutTarget
      ?? request.proofOut
      ?? request.outputTarget
      ?? request.outputDirectory
      ?? request.directory
      ?? request.dir
      ?? request.target
      ?? fallbackInput.proofOutTarget
      ?? fallbackInput.proofOut
      ?? fallbackInput.outputTarget
      ?? fallbackInput.outputDirectory
      ?? fallbackInput.directory
      ?? fallbackInput.dir
      ?? fallbackInput.target
  );

  if (!target.ok) {
    return {
      ok: false,
      blockedReason: target.blockedReason,
      proofOutTarget: target.value ?? null
    };
  }

  return {
    ok: true,
    value: freezeRecord({
      command: `${RUNTIME_SETTINGS_VALIDATION_PROOF_OUT_COMMAND} ${target.value.identifier}`,
      option: "--proof-out",
      proofOut: true,
      proofOutTarget: target.value
    })
  };
}

function normalizeValidationProofOutTarget(target) {
  const identifier = typeof target === "string"
    ? normalizeFact(target)
    : isPlainObject(target)
      ? normalizeFact(target.identifier ?? target.path ?? target.directory ?? target.dir ?? target.value)
      : null;

  if (!identifier) {
    return {
      ok: false,
      blockedReason: "missing-proof-out-target"
    };
  }

  const normalized = identifier.replaceAll("\\", "/").replace(/\/+$/u, "");
  if (!isPublicSafeProofOutTarget(normalized)) {
    return {
      ok: false,
      blockedReason: "unsupported-proof-out-target",
      value: freezeRecord({
        kind: "proof-out-directory",
        identifier: normalized || identifier,
        publicSafe: false
      })
    };
  }

  return {
    ok: true,
    value: freezeRecord({
      kind: "proof-out-directory",
      identifier: normalized,
      publicSafe: true,
      artifactPaths: {
        proofJson: `${normalized}/${RUNTIME_SETTINGS_VALIDATION_PROOF_OUT_PROOF_FILE}`,
        issueMarkdown: `${normalized}/${RUNTIME_SETTINGS_VALIDATION_PROOF_OUT_ISSUE_FILE}`
      }
    })
  };
}

function isPublicSafeProofOutTarget(identifier) {
  if (!identifier || identifier === ".." || identifier.includes("\0")) {
    return false;
  }
  if (identifier.startsWith("/") || identifier.startsWith("~") || identifier.startsWith("\\")) {
    return false;
  }
  if (/^[a-z]:[\\/]/iu.test(identifier) || identifier.includes("://")) {
    return false;
  }
  if (/(^|\/)\.\.(\/|$)/u.test(identifier)) {
    return false;
  }
  return !/(?:\/home\/|\/users\/|\\users\\|secret|password|token|credential|authorization|bearer|private)/iu.test(identifier);
}

function resolveValidationProofOutArtifact(input = {}) {
  const provided = input.validationProofArtifact ?? input.proofArtifact ?? input.artifact;
  if (isPlainObject(provided)) {
    return normalizeProvidedValidationProofOutArtifact(provided);
  }

  const validation = input.validation
    ?? input.validationFacts
    ?? input.validationReadback
    ?? (input.persistedSettings || input.runtime ? input : undefined);
  const artifact = createRuntimeSettingsValidationProofArtifact({
    validation,
    environment: input.environment ?? input.environmentFacts ?? {}
  });

  if (isMissingValidationProofArtifact(artifact)) {
    return {
      ok: false,
      blockedReason: artifact.blockedReason ?? "missing-validation-proof-facts",
      artifact
    };
  }

  return normalizeProvidedValidationProofOutArtifact(artifact);
}

function normalizeProvidedValidationProofOutArtifact(artifact) {
  const issueBody = typeof artifact.issueBody === "string"
    ? artifact.issueBody
    : typeof artifact.issueMarkdown === "string"
      ? artifact.issueMarkdown
      : null;

  if (!isPlainObject(artifact.proofJson) || !issueBody || isMissingValidationProofArtifact(artifact)) {
    return {
      ok: false,
      blockedReason: artifact.blockedReason ?? "missing-validation-proof-facts",
      artifact
    };
  }

  return {
    ok: true,
    value: freezeRecord({
      status: normalizeFact(artifact.status) ?? artifact.proofJson.validation?.status ?? "ready",
      proofJson: artifact.proofJson,
      issueBody,
      requirementIds: artifact.requirementIds ?? allRuntimeSettingsCliValidationProofRequirementIds()
    })
  };
}

function isMissingValidationProofArtifact(artifact) {
  const runtime = artifact?.proofJson?.validation?.runtime ?? {};
  return artifact?.blockedReason === "missing-validation-proof-facts"
    || runtime.runtimeErrorCode === "VIHS_E_MISSING_VALIDATION_PROOF_FACTS";
}

function createValidationProofOutArtifactFiles(target, artifact) {
  return freezeRecord({
    proofJson: {
      fileName: RUNTIME_SETTINGS_VALIDATION_PROOF_OUT_PROOF_FILE,
      relativePath: target.artifactPaths.proofJson,
      contentType: "application/json",
      content: artifact.proofJson,
      text: `${JSON.stringify(artifact.proofJson, null, 2)}\n`,
      writeBound: false
    },
    issueMarkdown: {
      fileName: RUNTIME_SETTINGS_VALIDATION_PROOF_OUT_ISSUE_FILE,
      relativePath: target.artifactPaths.issueMarkdown,
      contentType: "text/markdown",
      content: artifact.issueBody,
      text: artifact.issueBody.endsWith("\n") ? artifact.issueBody : `${artifact.issueBody}\n`,
      writeBound: false
    }
  });
}

function createValidationProofOutGuidance(target = null) {
  const targetIdentifier = target?.publicSafe === true ? target.identifier : "<dir>";
  return freezeRecord({
    nonInteractive: true,
    promptWait: false,
    copyableCommands: [
      `${RUNTIME_SETTINGS_VALIDATION_PROOF_OUT_COMMAND} ${targetIdentifier}`
    ]
  });
}

function validationBlockedResult({
  blockedReason,
  runtimeErrorCode,
  effectiveSettingsTarget,
  persistedSettings = null
}) {
  return Object.freeze({
    status: "blocked",
    type: "runtime-settings-cli-validation-readback-contract",
    blockedReason,
    partialWrite: false,
    effectiveSettingsTarget,
    persistedSettings,
    runtime: Object.freeze({
      runtimeValidationOutcome: "blocked",
      runtimeProvider: "unavailable",
      runtimeEngine: null,
      runtimeBlockedReason: blockedReason,
      runtimeErrorCode,
      runtimeProofStatus: "blocked-with-actionable-error",
      runtimeImplementationStatus: "not-started"
    }),
    blockedSideEffects: RUNTIME_SETTINGS_VALIDATION_BLOCKED_SIDE_EFFECTS,
    requirementIds: allRuntimeSettingsCliValidationReadbackRequirementIds()
  });
}

function normalizeValidationProofFacts(validation = {}) {
  if (!isPlainObject(validation)) {
    return {
      ok: false,
      blockedReason: "missing-validation-proof-facts"
    };
  }

  const persistedSettings = normalizeRuntimeSettingsFacts(validation.persistedSettings ?? {});
  if (!persistedSettings.ok) {
    return {
      ok: false,
      blockedReason: "missing-validation-proof-facts"
    };
  }

  const runtime = normalizeRuntimeOutcome(validation.runtime ?? {});
  if (!runtime.ok) {
    return {
      ok: false,
      blockedReason: "missing-validation-proof-facts"
    };
  }

  return {
    ok: true,
    value: freezeRecord({
      status: normalizeFact(validation.status) ?? runtime.value.runtimeValidationOutcome,
      effectiveSettingsTarget: normalizeEffectiveSettingsTarget(validation.effectiveSettingsTarget ?? validation.target ?? "user"),
      persistedSettings: persistedSettings.value,
      runtime: runtime.value
    })
  };
}

function readPersistedRuntimeSettingsFacts(settings) {
  const runtimeProvider = normalizeFact(settings[RUNTIME_SETTINGS_KEYS.runtimeProvider]);
  const labviewVersion = normalizeFact(settings[RUNTIME_SETTINGS_KEYS.labviewVersion]);
  const labviewBitness = normalizeFact(settings[RUNTIME_SETTINGS_KEYS.labviewBitness]);

  if (!runtimeProvider || !labviewVersion || !labviewBitness) {
    return {
      ok: false,
      blockedReason: "missing-persisted-runtime-settings"
    };
  }

  return {
    ok: true,
    value: Object.freeze({
      runtimeProvider,
      labviewVersion,
      labviewBitness
    })
  };
}

function normalizeRuntimeOutcome(outcome = {}) {
  const runtimeValidationOutcome = normalizeFact(outcome.runtimeValidationOutcome);
  const runtimeProvider = normalizeFact(outcome.runtimeProvider);
  const runtimeErrorCode = normalizeFact(outcome.runtimeErrorCode);
  const runtimeProofStatus = normalizeFact(outcome.runtimeProofStatus);
  const runtimeImplementationStatus = normalizeFact(outcome.runtimeImplementationStatus);

  if (!runtimeValidationOutcome || !runtimeProvider || !runtimeErrorCode || !runtimeProofStatus || !runtimeImplementationStatus) {
    return {
      ok: false,
      blockedReason: "missing-runtime-outcome-facts"
    };
  }

  return {
    ok: true,
    value: Object.freeze({
      runtimeValidationOutcome,
      runtimeProvider,
      runtimeEngine: normalizeFact(outcome.runtimeEngine),
      runtimeBlockedReason: normalizeFact(outcome.runtimeBlockedReason),
      runtimeErrorCode,
      runtimeProofStatus,
      runtimeImplementationStatus
    })
  };
}

function runtimeErrorCodeForSettingsFailure(blockedReason) {
  if (blockedReason === "unsupported-settings-target-shape") {
    return "VIHS_E_UNSUPPORTED_SETTINGS_TARGET_SHAPE";
  }
  if (blockedReason === "invalid-settings-content") {
    return "VIHS_E_INVALID_SETTINGS_CONTENT";
  }
  return "VIHS_E_RUNTIME_SETTINGS_READBACK_FAILED";
}

function normalizeRuntimeSettingsFacts(facts) {
  const runtimeProvider = normalizeFact(facts.runtimeProvider);
  const labviewVersion = normalizeFact(facts.labviewVersion);
  const labviewBitness = normalizeFact(facts.labviewBitness);

  if (!runtimeProvider || !labviewVersion || !labviewBitness) {
    return {
      ok: false,
      blockedReason: "missing-runtime-settings-fact"
    };
  }

  return {
    ok: true,
    value: Object.freeze({
      runtimeProvider,
      labviewVersion,
      labviewBitness
    })
  };
}

function normalizeFact(value) {
  if (typeof value === "string" && value.trim().length > 0) {
    return value.trim();
  }
  if (typeof value === "number" && Number.isFinite(value)) {
    return String(value);
  }
  return null;
}

function normalizeEffectiveSettingsTarget(target) {
  if (typeof target === "string" && target.trim().length > 0) {
    const identifier = target.trim();
    return Object.freeze({
      scope: identifier,
      identifier
    });
  }

  if (!isPlainObject(target)) {
    return null;
  }

  const scope = normalizeFact(target.scope);
  if (!scope) {
    return null;
  }

  return Object.freeze({
    scope,
    identifier: normalizeFact(target.identifier) ?? normalizeFact(target.path) ?? scope
  });
}

function parseSettingsContent(content) {
  if (typeof content === "string") {
    try {
      return validateSettingsObject(
        JSON.parse(removeTrailingCommas(stripJsonComments(content)))
      );
    } catch {
      return {
        ok: false,
        blockedReason: "invalid-settings-content"
      };
    }
  }

  if (isPlainObject(content)) {
    try {
      return validateSettingsObject(JSON.parse(JSON.stringify(content)));
    } catch {
      return {
        ok: false,
        blockedReason: "invalid-settings-content"
      };
    }
  }

  return {
    ok: false,
    blockedReason: "unsupported-settings-target-shape"
  };
}

function validateSettingsObject(value) {
  if (!isPlainObject(value)) {
    return {
      ok: false,
      blockedReason: "unsupported-settings-target-shape"
    };
  }

  return {
    ok: true,
    value
  };
}

function isPlainObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function freezeRecord(record) {
  for (const value of Object.values(record)) {
    if (value && typeof value === "object" && !Object.isFrozen(value)) {
      freezeRecord(value);
    }
  }
  return Object.freeze(record);
}

function redactEnvironmentFacts(environment) {
  if (!isPlainObject(environment)) {
    return Object.freeze({});
  }

  const redacted = {};
  for (const [key, value] of Object.entries(environment).sort(([left], [right]) => left.localeCompare(right))) {
    const normalizedKey = String(key);
    redacted[normalizedKey] = shouldRedactEnvironmentFact(normalizedKey, value)
      ? "[REDACTED]"
      : String(value);
  }
  return freezeRecord(redacted);
}

function shouldRedactEnvironmentFact(key, value) {
  const haystack = `${key}=${String(value)}`;
  return /secret|password|token|credential|authorization|bearer|private/i.test(haystack)
    || /(?:gho_|ghp_|ghs_|ghr_|github_pat_|\/home\/|\\Users\\)/i.test(haystack);
}

function stripJsonComments(source) {
  let result = "";
  let inString = false;
  let quote = "";
  let escaped = false;
  let inLineComment = false;
  let inBlockComment = false;

  for (let index = 0; index < source.length; index += 1) {
    const char = source[index];
    const next = source[index + 1];

    if (inLineComment) {
      if (char === "\n" || char === "\r") {
        inLineComment = false;
        result += char;
      }
      continue;
    }

    if (inBlockComment) {
      if (char === "*" && next === "/") {
        inBlockComment = false;
        index += 1;
      }
      continue;
    }

    if (inString) {
      result += char;
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === quote) {
        inString = false;
        quote = "";
      }
      continue;
    }

    if (char === "\"" || char === "'") {
      inString = true;
      quote = char;
      result += char;
      continue;
    }

    if (char === "/" && next === "/") {
      inLineComment = true;
      index += 1;
      continue;
    }

    if (char === "/" && next === "*") {
      inBlockComment = true;
      index += 1;
      continue;
    }

    result += char;
  }

  return result;
}

function removeTrailingCommas(source) {
  let result = "";
  let inString = false;
  let quote = "";
  let escaped = false;

  for (let index = 0; index < source.length; index += 1) {
    const char = source[index];

    if (inString) {
      result += char;
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === quote) {
        inString = false;
        quote = "";
      }
      continue;
    }

    if (char === "\"" || char === "'") {
      inString = true;
      quote = char;
      result += char;
      continue;
    }

    if (char === ",") {
      const nextNonWhitespace = source.slice(index + 1).match(/\S/u)?.[0];
      if (nextNonWhitespace === "}" || nextNonWhitespace === "]") {
        continue;
      }
    }

    result += char;
  }

  return result;
}
