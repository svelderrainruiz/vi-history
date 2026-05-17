import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

import {
  allRuntimeContractRequirementIds,
  createCommitPairSelection,
  createCompareActionState,
  createComparePreExecutionFacts,
  createComparisonCommandPlan,
  createComparisonCommandPlanFromCompareAction,
  createProofPacket,
  requestExplicitCompareAction,
  createRuntimeSelection,
  selectProviderPolicy
} from "../src/runtime-contracts.mjs";

const sliceId = "runtime-contract-host-provider-v1";

function readJson(path) {
  return JSON.parse(fs.readFileSync(path, "utf8"));
}

function idsFromText(path) {
  return [...fs.readFileSync(path, "utf8").matchAll(/\bVHS-(?:SYS-)?REQ-\d+\b/g)].map((match) => match[0]);
}

test("T007 defines runtime selection facts and fail-closed blocked reason", () => {
  const ready = createRuntimeSelection({
    provider: "host-native",
    engine: "LabVIEWCLI",
    version: "2026",
    bitness: "x64",
    selectedPaths: {
      labviewCli: "LabVIEWCLI",
      labview: "LabVIEW"
    },
    readiness: "ready",
    notes: ["host default"]
  });

  assert.equal(ready.provider, "host-native");
  assert.equal(ready.engine, "LabVIEWCLI");
  assert.equal(ready.version, "2026");
  assert.equal(ready.bitness, "x64");
  assert.equal(ready.readiness, "ready");
  assert.equal(ready.blockedReason, null);
  assert.deepEqual(ready.requirementIds, [
    "VHS-SYS-REQ-006",
    "VHS-SYS-REQ-007",
    "VHS-REQ-095",
    "VHS-REQ-141"
  ]);

  assert.throws(
    () => createRuntimeSelection({
      provider: "host-native",
      version: "2024",
      bitness: "x64",
      readiness: "blocked"
    }),
    /blockedReason is required/
  );
});

test("T008 defines a LabVIEWCLI CreateComparisonReport command plan", () => {
  const runtimeSelection = createRuntimeSelection({
    provider: "host-native",
    engine: "LabVIEWCLI",
    version: "2026",
    bitness: "x64",
    selectedPaths: { labviewCli: "LabVIEWCLI", labview: "LabVIEW" },
    readiness: "ready"
  });

  const plan = createComparisonCommandPlan({
    runtimeSelection,
    selectedViPath: "selected.vi",
    baseViPath: "base.vi",
    outputPath: "report.html"
  });

  assert.equal(plan.operation, "CreateComparisonReport");
  assert.equal(plan.executable, "LabVIEWCLI");
  assert.deepEqual(plan.stagedViPaths, { base: "base.vi", selected: "selected.vi" });
  assert.equal(plan.selectedLabView.provider, "host-native");
  assert.equal(plan.selectedLabView.version, "2026");
  assert.equal(plan.selectedLabView.bitness, "x64");
  assert.ok(plan.arguments.includes("CreateComparisonReport"));
});

test("T009 defines proof packets with runtime, report, execution, and issue facts", () => {
  const runtimeSelection = createRuntimeSelection({
    provider: "host-native",
    engine: "LabVIEWCLI",
    version: "2026",
    bitness: "x64",
    readiness: "ready"
  });
  const commandPlan = createComparisonCommandPlan({
    runtimeSelection,
    selectedViPath: "selected.vi",
    baseViPath: "base.vi",
    outputPath: "report.html"
  });

  const packet = createProofPacket({
    environmentClass: "linux-host-labview-2026",
    runtimeSelection,
    commandPlan,
    generatedReportFacts: { path: "report.html", exists: true },
    stdout: "ok",
    stderr: "",
    exitCode: 0,
    durationMs: 42,
    issueBody: "proof summary"
  });

  assert.equal(packet.environmentClass, "linux-host-labview-2026");
  assert.equal(packet.runtimeFacts.provider, "host-native");
  assert.equal(packet.generatedReportFacts.exists, true);
  assert.deepEqual(packet.execution, { stdout: "ok", stderr: "", exitCode: 0, durationMs: 42 });
  assert.equal(packet.issueBody, "proof summary");
});

test("T010 defines host-native default, bounded Docker, unsupported bundles, and no silent fallback", () => {
  assert.deepEqual(selectProviderPolicy({ platform: "win32" }), {
    kind: "provider-policy",
    platform: "win32",
    defaultProvider: "host-native",
    requestedProvider: null,
    selectedProvider: "host-native",
    expertMode: false,
    readiness: "ready",
    blockedReason: null,
    fallbackProvider: null,
    silentFallbackAllowed: false,
    requirementIds: ["VHS-SYS-REQ-005", "VHS-REQ-138", "VHS-REQ-146"]
  });

  const dockerBlocked = selectProviderPolicy({ requestedProvider: "docker" });
  assert.equal(dockerBlocked.readiness, "blocked");
  assert.equal(dockerBlocked.blockedReason, "docker-provider-requires-explicit-expert-selection");
  assert.equal(dockerBlocked.fallbackProvider, null);
  assert.equal(dockerBlocked.silentFallbackAllowed, false);

  const dockerAdmitted = selectProviderPolicy({ requestedProvider: "docker", expertMode: true });
  assert.equal(dockerAdmitted.readiness, "ready");
  assert.equal(dockerAdmitted.selectedProvider, "docker");

  const unsupported = selectProviderPolicy({ requestedProvider: "host-native", bundleSupported: false });
  assert.equal(unsupported.readiness, "blocked");
  assert.equal(unsupported.blockedReason, "runtime-bundle-unsupported");
});

test("T011 traces implementation contract IDs to the imported manifest and RTM", () => {
  const manifest = readJson(`docs/requirements/imports/${sliceId}/manifest.json`);
  const rtmIds = new Set(idsFromText(`docs/requirements/imports/${sliceId}/rtm.csv`));
  const implementationIds = allRuntimeContractRequirementIds();

  assert.deepEqual(implementationIds, [...manifest.importedRequirementIds].sort());
  for (const id of implementationIds) {
    assert.ok(rtmIds.has(id), `${id} must appear in imported RTM`);
  }
});

test("T012 retains selected and base commit facts after commit-pair selection", () => {
  const commitPair = createCommitPairSelection({
    selectedCommit: { sha: "abc123", label: "selected" },
    baseCommit: { sha: "def456", label: "base" }
  });

  assert.equal(commitPair.kind, "commit-pair-selection");
  assert.deepEqual(commitPair.selectedCommit, { sha: "abc123", label: "selected" });
  assert.deepEqual(commitPair.baseCommit, { sha: "def456", label: "base" });
});

test("T013 proves compare does not start before explicit user action", () => {
  const commitPair = createCommitPairSelection({
    selectedCommit: { sha: "abc123" },
    baseCommit: { sha: "def456" }
  });
  const runtimeSelection = createRuntimeSelection({
    provider: "host-native",
    engine: "LabVIEWCLI",
    version: "2026",
    bitness: "x64",
    readiness: "ready"
  });
  const reviewState = createCompareActionState({ commitPair, runtimeSelection });

  assert.throws(
    () => createComparisonCommandPlanFromCompareAction({
      compareActionState: reviewState,
      selectedViPath: "selected.vi",
      baseViPath: "base.vi",
      outputPath: "report.html"
    }),
    /does not start before explicit user action/
  );
});

test("T014 implements compare-action state flow from selection to explicit execution trigger", () => {
  const commitPair = createCommitPairSelection({
    selectedCommit: { sha: "abc123" },
    baseCommit: { sha: "def456" }
  });
  const runtimeSelection = createRuntimeSelection({
    provider: "host-native",
    engine: "LabVIEWCLI",
    version: "2026",
    bitness: "x64",
    readiness: "ready"
  });
  const reviewState = createCompareActionState({ commitPair, runtimeSelection });
  assert.equal(reviewState.phase, "review");
  assert.equal(reviewState.compareRequested, false);

  const requestedState = requestExplicitCompareAction(reviewState);
  assert.equal(requestedState.phase, "execution-requested");
  assert.equal(requestedState.compareRequested, true);

  const plan = createComparisonCommandPlanFromCompareAction({
    compareActionState: requestedState,
    selectedViPath: "selected.vi",
    baseViPath: "base.vi",
    outputPath: "report.html"
  });
  assert.equal(plan.operation, "CreateComparisonReport");
});

test("T015 renders selected/base commit and runtime facts before execution", () => {
  const commitPair = createCommitPairSelection({
    selectedCommit: { sha: "abc123", label: "selected" },
    baseCommit: { sha: "def456", label: "base" }
  });
  const runtimeSelection = createRuntimeSelection({
    provider: "host-native",
    engine: "LabVIEWCLI",
    version: "2026",
    bitness: "x64",
    readiness: "ready"
  });
  const reviewState = createCompareActionState({ commitPair, runtimeSelection });
  const facts = createComparePreExecutionFacts(reviewState);

  assert.deepEqual(facts.selectedCommit, { sha: "abc123", label: "selected" });
  assert.deepEqual(facts.baseCommit, { sha: "def456", label: "base" });
  assert.equal(facts.provider, "host-native");
  assert.equal(facts.version, "2026");
  assert.equal(facts.bitness, "x64");
});
