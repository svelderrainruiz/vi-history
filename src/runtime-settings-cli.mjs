export const RUNTIME_SETTINGS_CLI_SETTINGS_WRITE_REQUIREMENTS = Object.freeze({
  settingsWrite: Object.freeze(["VHS-REQ-537"]),
  effectiveTarget: Object.freeze(["VHS-REQ-543"]),
  preservation: Object.freeze(["VHS-REQ-543"]),
  failClosed: Object.freeze(["VHS-REQ-543"])
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

export function allRuntimeSettingsCliSettingsWriteRequirementIds() {
  return Object.freeze(
    Object.values(RUNTIME_SETTINGS_CLI_SETTINGS_WRITE_REQUIREMENTS)
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
