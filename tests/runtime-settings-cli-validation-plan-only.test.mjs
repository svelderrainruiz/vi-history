import assert from "node:assert/strict";
import { createRuntimeSettingsValidationCommandResult } from "../src/runtime-settings-cli.mjs";
import test from "node:test";

test("T009 validate-plan-only returns deterministic proof-out plan facts", async () => {
  const result = await createRuntimeSettingsValidationCommandResult({
    requestMode: "validate-plan-only",
    settings: { runtimeProvider: "host-native", labviewVersion: "2026", labviewBitness: "64-bit" },
    runtimeSelection: { provider: "host-native", engine: "labview-cli" }
  });

  assert.equal(result.status, "ready");
  assert.equal(result.requestMode, "validate-plan-only");
  assert.equal(result.artifactWrites, false);
  assert.equal(result.partialWrite, false);
  assert.deepEqual(result.copyableGuidance, ["vihs --validate"]);
});

test("T010 validate-plan-only fails closed for missing inputs", async () => {
  const result = await createRuntimeSettingsValidationCommandResult({
    requestMode: "validate-plan-only",
    settings: null,
    runtimeSelection: null
  });

  assert.equal(result.status, "blocked");
  assert.equal(result.blockedReason, "missing-validation-facts");
});