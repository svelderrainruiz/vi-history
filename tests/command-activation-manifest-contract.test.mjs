import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

function readJson(path) {
  return JSON.parse(fs.readFileSync(path, "utf8"));
}

test("T009 retains explicit command activation events and avoids startup activation", () => {
  const packageJson = readJson("package.json");
  const activationEvents = packageJson.activationEvents ?? [];

  assert.ok(activationEvents.includes("onCommand:labviewViHistory.open"));
  assert.ok(activationEvents.includes("onCommand:labviewViHistory.openDocumentation"));
  assert.ok(activationEvents.includes("onCommand:labviewViHistory.prepareLocalRuntimeSettingsCli"));
  assert.ok(!activationEvents.includes("*"), "startup activation must remain out of scope");
});

test("T010 retains contributed command IDs and titles", () => {
  const packageJson = readJson("package.json");
  const commands = packageJson.contributes?.commands ?? [];
  const commandById = new Map(commands.map((entry) => [entry.command, entry]));

  assert.equal(commandById.get("labviewViHistory.open")?.title, "VI History");
  assert.equal(commandById.get("labviewViHistory.openDocumentation")?.title, "Open Documentation");
  assert.equal(
    commandById.get("labviewViHistory.prepareLocalRuntimeSettingsCli")?.title,
    "Prepare Local Runtime Settings CLI"
  );
});

test("T011 retains package identity and Marketplace-disabled contract posture", () => {
  const packageJson = readJson("package.json");
  assert.equal(packageJson.name, "vi-history");
  assert.equal(packageJson.displayName, "VI History");
  assert.equal(packageJson.publisher, "svelderrainruiz");

  const commandManifest = readJson("docs/requirements/imports/command-activation-surface-v1/manifest.json");
  const commandIau = readJson(
    "docs/requirements/admissions/command-activation-surface-v1/IAU-command-activation-manifest-contract-v1.json"
  );
  const commandPreflight = readJson(
    "docs/requirements/admissions/command-activation-surface-v1/IAU-command-activation-manifest-contract-v1-preflight-v1.json"
  );

  assert.equal(commandManifest.marketplacePublication, "disabled-until-later-adr");
  assert.equal(commandIau.marketplacePublication, "disabled");
  assert.equal(commandPreflight.marketplacePublication, "disabled");
});
