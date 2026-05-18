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

export const RUNTIME_SETTINGS_KEYS = Object.freeze({
  runtimeProvider: "viHistorySuite.runtimeProvider",
  labviewVersion: "viHistorySuite.labviewVersion",
  labviewBitness: "viHistorySuite.labviewBitness"
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

const RUNTIME_SETTINGS_VALIDATION_PROOF_SCHEMA = "vi-history/runtime-settings-validation-proof@v1";
const RUNTIME_SETTINGS_VALIDATION_PROOF_COMMAND = "vihs --validate --proof-out";
const MIT_PUBLIC_AUTHORITY = "svelderrainruiz/vi-history";

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
