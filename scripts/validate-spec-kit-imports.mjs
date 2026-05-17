import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const sliceId = "runtime-contract-host-provider-v1";
const featureDir = ".specify/specs/runtime-contract-host-provider-v1";
const importDir = `docs/requirements/imports/${sliceId}`;
const admissionPath = `docs/requirements/admissions/${sliceId}.json`;
const explicitCompareIauPath = `docs/requirements/admissions/${sliceId}/IAU-runtime-contract-explicit-compare-v1.json`;
const explicitComparePreflightPath = `docs/requirements/admissions/${sliceId}/IAU-runtime-contract-explicit-compare-v1-preflight-v1.json`;
const runtimeFactsIauPath = `docs/requirements/admissions/${sliceId}/IAU-runtime-contract-runtime-facts-v1.json`;
const runtimeFactsPreflightPath = `docs/requirements/admissions/${sliceId}/IAU-runtime-contract-runtime-facts-v1-preflight-v1.json`;
const providerPolicyIauPath = `docs/requirements/admissions/${sliceId}/IAU-runtime-contract-provider-policy-v1.json`;
const providerPolicyPreflightPath = `docs/requirements/admissions/${sliceId}/IAU-runtime-contract-provider-policy-v1-preflight-v1.json`;
const proofIntakeIauPath = `docs/requirements/admissions/${sliceId}/IAU-runtime-contract-proof-intake-v1.json`;
const proofIntakePreflightPath = `docs/requirements/admissions/${sliceId}/IAU-runtime-contract-proof-intake-v1-preflight-v1.json`;
const expectedIds = [
  "VHS-SYS-REQ-004",
  "VHS-SYS-REQ-005",
  "VHS-SYS-REQ-006",
  "VHS-SYS-REQ-007",
  "VHS-SYS-REQ-008",
  "VHS-REQ-094",
  "VHS-REQ-095",
  "VHS-REQ-138",
  "VHS-REQ-141",
  "VHS-REQ-144",
  "VHS-REQ-146",
  "VHS-REQ-148",
  "VHS-REQ-194",
  "VHS-REQ-588",
  "VHS-REQ-589",
  "VHS-REQ-590"
];

const failures = [];

function readJson(relativePath) {
  const fullPath = path.join(repoRoot, relativePath);
  try {
    return JSON.parse(fs.readFileSync(fullPath, "utf8"));
  } catch (error) {
    failures.push(`${relativePath}: ${error.message}`);
    return {};
  }
}

function requireFile(relativePath) {
  if (!fs.existsSync(path.join(repoRoot, relativePath))) {
    failures.push(`${relativePath}: missing`);
  }
}

function requireEqual(actual, expected, label) {
  if (actual !== expected) {
    failures.push(`${label}: expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
  }
}

function requireArrayEqual(actual, expected, label) {
  if (!Array.isArray(actual) || actual.length !== expected.length || actual.some((value, index) => value !== expected[index])) {
    failures.push(`${label}: expected ${JSON.stringify(expected)}, got ${JSON.stringify(actual)}`);
  }
}

function requireTextIncludes(relativePath, snippets) {
  const fullPath = path.join(repoRoot, relativePath);
  if (!fs.existsSync(fullPath)) {
    failures.push(`${relativePath}: missing`);
    return;
  }

  const text = fs.readFileSync(fullPath, "utf8");
  for (const snippet of snippets) {
    if (!text.includes(snippet)) {
      failures.push(`${relativePath}: missing ${JSON.stringify(snippet)}`);
    }
  }
}

const packageJson = readJson("package.json");
requireEqual(packageJson.name, "vi-history", "package name");
requireEqual(packageJson.displayName, "VI History", "displayName");
requireEqual(packageJson.publisher, "svelderrainruiz", "publisher");
requireEqual(packageJson.version, "0.1.0", "version");
requireEqual(packageJson.license, "MIT", "license");
requireEqual(packageJson.private, false, "private");

const integration = readJson(".specify/integration.json");
requireEqual(integration.integration, "codex", "Spec Kit integration");

const featureJson = readJson(".specify/feature.json");
requireEqual(featureJson.feature_directory, featureDir, "pinned Spec Kit feature directory");

const admission = readJson(admissionPath);
requireEqual(admission.schema, "vi-history/requirements-admission@v1", "admission schema");
requireEqual(admission.sliceId, sliceId, "admission sliceId");
requireEqual(admission.state, "implemented", "admission state");
requireEqual(admission.targetProduct, "vi-history", "admission targetProduct");
requireEqual(admission.targetFeature, sliceId, "admission targetFeature");
requireEqual(admission.sourceBaselineTag, "v1.3.16", "admission sourceBaselineTag");
requireEqual(admission.sourceCommit, "31add781bd04cc832d9fb55aa821a69305a91a37", "admission sourceCommit");
requireEqual(admission.implementationSharing, "none", "admission implementationSharing");
requireEqual(admission.currentImplementationAdmissionUnit, null, "currentImplementationAdmissionUnit");
requireArrayEqual(admission.completedImplementationScope, ["T007", "T008", "T009", "T010", "T011", "T012", "T013", "T014", "T015", "T016", "T017", "T018", "T019", "T020", "T021", "T022", "T023", "T024", "T025", "T026", "T027", "T028", "T029", "T030"], "completedImplementationScope");
requireArrayEqual(admission.admittedImplementationScope, [], "admittedImplementationScope");
requireEqual(admission.preImplementationPreflight?.iauId, "IAU-runtime-contract-proof-intake-v1", "admission preImplementationPreflight iauId");
requireEqual(admission.preImplementationPreflight?.status, "pass", "admission preImplementationPreflight status");
requireEqual(admission.preImplementationPreflight?.implementationStartAllowed, true, "admission preImplementationPreflight implementationStartAllowed");
requireEqual(admission.preImplementationPreflight?.record, proofIntakePreflightPath, "admission preImplementationPreflight record");
requireFile(`docs/requirements/admissions/${sliceId}.md`);

const explicitCompareAdmissionUnit = (admission.implementationAdmissionUnits ?? [])
  .find((unit) => unit?.iauId === "IAU-runtime-contract-explicit-compare-v1");
requireEqual(explicitCompareAdmissionUnit?.state, "implemented", "explicit compare admission unit state");
requireEqual(explicitCompareAdmissionUnit?.preflightRecord, explicitComparePreflightPath, "explicit compare admission unit preflightRecord");

const runtimeFactsAdmissionUnit = (admission.implementationAdmissionUnits ?? [])
  .find((unit) => unit?.iauId === "IAU-runtime-contract-runtime-facts-v1");
requireEqual(runtimeFactsAdmissionUnit?.state, "implemented", "runtime facts admission unit state");
requireEqual(runtimeFactsAdmissionUnit?.preflightRecord, runtimeFactsPreflightPath, "runtime facts admission unit preflightRecord");

const providerPolicyAdmissionUnit = (admission.implementationAdmissionUnits ?? [])
  .find((unit) => unit?.iauId === "IAU-runtime-contract-provider-policy-v1");
requireEqual(providerPolicyAdmissionUnit?.state, "implemented", "provider policy admission unit state");
requireEqual(providerPolicyAdmissionUnit?.preflightRecord, providerPolicyPreflightPath, "provider policy admission unit preflightRecord");

const proofIntakeAdmissionUnit = (admission.implementationAdmissionUnits ?? [])
  .find((unit) => unit?.iauId === "IAU-runtime-contract-proof-intake-v1");
requireEqual(proofIntakeAdmissionUnit?.state, "implemented", "proof intake admission unit state");
requireEqual(proofIntakeAdmissionUnit?.preflightRecord, proofIntakePreflightPath, "proof intake admission unit preflightRecord");

const explicitCompareIau = readJson(explicitCompareIauPath);
requireEqual(explicitCompareIau.schema, "vi-history/implementation-admission-unit@v1", "explicit compare IAU schema");
requireEqual(explicitCompareIau.iauId, "IAU-runtime-contract-explicit-compare-v1", "explicit compare IAU id");
requireEqual(explicitCompareIau.state, "implemented", "explicit compare IAU state");
requireEqual(explicitCompareIau.parentSliceId, sliceId, "explicit compare IAU parentSliceId");
requireArrayEqual(explicitCompareIau.admittedTasks, ["T012", "T013", "T014", "T015"], "explicit compare IAU admittedTasks");
requireEqual(explicitCompareIau.implementationSharing, "none", "explicit compare IAU implementationSharing");
requireEqual(explicitCompareIau.preImplementationPreflight?.status, "pass", "explicit compare IAU preImplementationPreflight status");
requireEqual(explicitCompareIau.preImplementationPreflight?.record, "IAU-runtime-contract-explicit-compare-v1-preflight-v1.json", "explicit compare IAU preImplementationPreflight record");
requireEqual(explicitCompareIau.preImplementationPreflight?.implementationStartAllowed, true, "explicit compare IAU preImplementationPreflight implementationStartAllowed");
requireFile(`docs/requirements/admissions/${sliceId}/IAU-runtime-contract-explicit-compare-v1.md`);

const explicitComparePreflight = readJson(explicitComparePreflightPath);
requireEqual(explicitComparePreflight.schema, "vi-history/implementation-admission-unit-preflight@v1", "explicit compare preflight schema");
requireEqual(explicitComparePreflight.iauId, "IAU-runtime-contract-explicit-compare-v1", "explicit compare preflight iauId");
requireEqual(explicitComparePreflight.status, "pass", "explicit compare preflight status");
requireEqual(explicitComparePreflight.implementationStartAllowed, true, "explicit compare preflight implementationStartAllowed");
requireEqual(explicitComparePreflight.parentSliceId, sliceId, "explicit compare preflight parentSliceId");
requireEqual(explicitComparePreflight.implementationSharing, "none", "explicit compare preflight implementationSharing");
requireArrayEqual(explicitComparePreflight.implementationStartScope, ["T012", "T013", "T014", "T015"], "explicit compare preflight implementationStartScope");
if (!Array.isArray(explicitComparePreflight.checkResults) || explicitComparePreflight.checkResults.length !== explicitComparePreflight.requiredChecks.length) {
  failures.push("explicit compare preflight checkResults: must match requiredChecks length");
} else {
  for (const result of explicitComparePreflight.checkResults) {
    requireEqual(result.status, "pass", `explicit compare preflight check result ${result.check}`);
  }
}
requireFile(`docs/requirements/admissions/${sliceId}/IAU-runtime-contract-explicit-compare-v1-preflight-v1.md`);

const runtimeFactsIau = readJson(runtimeFactsIauPath);
requireEqual(runtimeFactsIau.schema, "vi-history/implementation-admission-unit@v1", "runtime facts IAU schema");
requireEqual(runtimeFactsIau.iauId, "IAU-runtime-contract-runtime-facts-v1", "runtime facts IAU id");
requireEqual(runtimeFactsIau.state, "implemented", "runtime facts IAU state");
requireEqual(runtimeFactsIau.parentSliceId, sliceId, "runtime facts IAU parentSliceId");
requireArrayEqual(runtimeFactsIau.admittedTasks, ["T016", "T017", "T018", "T019", "T020", "T021"], "runtime facts IAU admittedTasks");
requireEqual(runtimeFactsIau.implementationSharing, "none", "runtime facts IAU implementationSharing");
requireEqual(runtimeFactsIau.preImplementationPreflight?.status, "pass", "runtime facts IAU preImplementationPreflight status");
requireEqual(runtimeFactsIau.preImplementationPreflight?.record, "IAU-runtime-contract-runtime-facts-v1-preflight-v1.json", "runtime facts IAU preImplementationPreflight record");
requireEqual(runtimeFactsIau.preImplementationPreflight?.implementationStartAllowed, true, "runtime facts IAU preImplementationPreflight implementationStartAllowed");
requireFile(`docs/requirements/admissions/${sliceId}/IAU-runtime-contract-runtime-facts-v1.md`);

const runtimeFactsPreflight = readJson(runtimeFactsPreflightPath);
requireEqual(runtimeFactsPreflight.schema, "vi-history/implementation-admission-unit-preflight@v1", "runtime facts preflight schema");
requireEqual(runtimeFactsPreflight.iauId, "IAU-runtime-contract-runtime-facts-v1", "runtime facts preflight iauId");
requireEqual(runtimeFactsPreflight.status, "pass", "runtime facts preflight status");
requireEqual(runtimeFactsPreflight.implementationStartAllowed, true, "runtime facts preflight implementationStartAllowed");
requireEqual(runtimeFactsPreflight.parentSliceId, sliceId, "runtime facts preflight parentSliceId");
requireEqual(runtimeFactsPreflight.implementationSharing, "none", "runtime facts preflight implementationSharing");
requireArrayEqual(runtimeFactsPreflight.implementationStartScope, ["T016", "T017", "T018", "T019", "T020", "T021"], "runtime facts preflight implementationStartScope");
if (!Array.isArray(runtimeFactsPreflight.checkResults) || runtimeFactsPreflight.checkResults.length !== runtimeFactsPreflight.requiredChecks.length) {
  failures.push("runtime facts preflight checkResults: must match requiredChecks length");
} else {
  for (const result of runtimeFactsPreflight.checkResults) {
    requireEqual(result.status, "pass", `runtime facts preflight check result ${result.check}`);
  }
}
requireFile(`docs/requirements/admissions/${sliceId}/IAU-runtime-contract-runtime-facts-v1-preflight-v1.md`);

const providerPolicyIau = readJson(providerPolicyIauPath);
requireEqual(providerPolicyIau.schema, "vi-history/implementation-admission-unit@v1", "provider policy IAU schema");
requireEqual(providerPolicyIau.iauId, "IAU-runtime-contract-provider-policy-v1", "provider policy IAU id");
requireEqual(providerPolicyIau.state, "implemented", "provider policy IAU state");
requireEqual(providerPolicyIau.parentSliceId, sliceId, "provider policy IAU parentSliceId");
requireArrayEqual(providerPolicyIau.admittedTasks, ["T022", "T023", "T024", "T025"], "provider policy IAU admittedTasks");
requireEqual(providerPolicyIau.implementationSharing, "none", "provider policy IAU implementationSharing");
requireEqual(providerPolicyIau.preImplementationPreflight?.status, "pass", "provider policy IAU preImplementationPreflight status");
requireEqual(providerPolicyIau.preImplementationPreflight?.record, "IAU-runtime-contract-provider-policy-v1-preflight-v1.json", "provider policy IAU preImplementationPreflight record");
requireEqual(providerPolicyIau.preImplementationPreflight?.implementationStartAllowed, true, "provider policy IAU preImplementationPreflight implementationStartAllowed");
requireFile(`docs/requirements/admissions/${sliceId}/IAU-runtime-contract-provider-policy-v1.md`);

const providerPolicyPreflight = readJson(providerPolicyPreflightPath);
requireEqual(providerPolicyPreflight.schema, "vi-history/implementation-admission-unit-preflight@v1", "provider policy preflight schema");
requireEqual(providerPolicyPreflight.iauId, "IAU-runtime-contract-provider-policy-v1", "provider policy preflight iauId");
requireEqual(providerPolicyPreflight.status, "pass", "provider policy preflight status");
requireEqual(providerPolicyPreflight.implementationStartAllowed, true, "provider policy preflight implementationStartAllowed");
requireEqual(providerPolicyPreflight.parentSliceId, sliceId, "provider policy preflight parentSliceId");
requireEqual(providerPolicyPreflight.implementationSharing, "none", "provider policy preflight implementationSharing");
requireArrayEqual(providerPolicyPreflight.implementationStartScope, ["T022", "T023", "T024", "T025"], "provider policy preflight implementationStartScope");
if (!Array.isArray(providerPolicyPreflight.checkResults) || providerPolicyPreflight.checkResults.length !== providerPolicyPreflight.requiredChecks.length) {
  failures.push("provider policy preflight checkResults: must match requiredChecks length");
} else {
  for (const result of providerPolicyPreflight.checkResults) {
    requireEqual(result.status, "pass", `provider policy preflight check result ${result.check}`);
  }
}
requireFile(`docs/requirements/admissions/${sliceId}/IAU-runtime-contract-provider-policy-v1-preflight-v1.md`);

const proofIntakeIau = readJson(proofIntakeIauPath);
requireEqual(proofIntakeIau.schema, "vi-history/implementation-admission-unit@v1", "proof intake IAU schema");
requireEqual(proofIntakeIau.iauId, "IAU-runtime-contract-proof-intake-v1", "proof intake IAU id");
requireEqual(proofIntakeIau.state, "implemented", "proof intake IAU state");
requireEqual(proofIntakeIau.parentSliceId, sliceId, "proof intake IAU parentSliceId");
requireArrayEqual(proofIntakeIau.admittedTasks, ["T026", "T027", "T028", "T029", "T030"], "proof intake IAU admittedTasks");
requireEqual(proofIntakeIau.implementationSharing, "none", "proof intake IAU implementationSharing");
requireEqual(proofIntakeIau.preImplementationPreflight?.status, "pass", "proof intake IAU preImplementationPreflight status");
requireEqual(proofIntakeIau.preImplementationPreflight?.record, "IAU-runtime-contract-proof-intake-v1-preflight-v1.json", "proof intake IAU preImplementationPreflight record");
requireEqual(proofIntakeIau.preImplementationPreflight?.implementationStartAllowed, true, "proof intake IAU preImplementationPreflight implementationStartAllowed");
requireFile(`docs/requirements/admissions/${sliceId}/IAU-runtime-contract-proof-intake-v1.md`);

const proofIntakePreflight = readJson(proofIntakePreflightPath);
requireEqual(proofIntakePreflight.schema, "vi-history/implementation-admission-unit-preflight@v1", "proof intake preflight schema");
requireEqual(proofIntakePreflight.iauId, "IAU-runtime-contract-proof-intake-v1", "proof intake preflight iauId");
requireEqual(proofIntakePreflight.status, "pass", "proof intake preflight status");
requireEqual(proofIntakePreflight.implementationStartAllowed, true, "proof intake preflight implementationStartAllowed");
requireEqual(proofIntakePreflight.parentSliceId, sliceId, "proof intake preflight parentSliceId");
requireEqual(proofIntakePreflight.implementationSharing, "none", "proof intake preflight implementationSharing");
requireArrayEqual(proofIntakePreflight.implementationStartScope, ["T026", "T027", "T028", "T029", "T030"], "proof intake preflight implementationStartScope");
if (!Array.isArray(proofIntakePreflight.checkResults) || proofIntakePreflight.checkResults.length !== proofIntakePreflight.requiredChecks.length) {
  failures.push("proof intake preflight checkResults: must match requiredChecks length");
} else {
  for (const result of proofIntakePreflight.checkResults) {
    requireEqual(result.status, "pass", `proof intake preflight check result ${result.check}`);
  }
}
requireFile(`docs/requirements/admissions/${sliceId}/IAU-runtime-contract-proof-intake-v1-preflight-v1.md`);

const manifest = readJson(`${importDir}/manifest.json`);
requireEqual(manifest.schema, "vi-history/requirements-import@v1", "manifest schema");
requireEqual(manifest.sliceId, sliceId, "sliceId");
requireEqual(manifest.sourceBaselineTag, "v1.3.16", "sourceBaselineTag");
requireEqual(manifest.sourceCommit, "31add781bd04cc832d9fb55aa821a69305a91a37", "sourceCommit");
requireEqual(manifest.targetProduct, "vi-history", "targetProduct");
requireEqual(manifest.targetFeature, sliceId, "targetFeature");
requireEqual(manifest.redactionStatus, "pass", "redactionStatus");
requireEqual(manifest.implementationSharing, "none", "implementationSharing");
requireEqual(manifest.marketplacePublication, "disabled-until-later-adr", "marketplacePublication");
requireArrayEqual(manifest.importedRequirementIds, expectedIds, "importedRequirementIds");
requireArrayEqual(manifest.files, ["syrs.md", "srs.md", "rtm.csv", "test-plan.md"], "manifest files");

for (const file of manifest.files ?? []) {
  requireFile(`${importDir}/${file}`);
}

for (const file of ["spec.md", "plan.md", "tasks.md"]) {
  requireFile(`${featureDir}/${file}`);
}

requireTextIncludes(`${featureDir}/spec.md`, [
  "Runtime Contract Host Provider",
  "VHS-SYS-REQ-004",
  "VHS-REQ-590",
  "clean-room"
]);
requireTextIncludes(`${featureDir}/plan.md`, [
  "Spec Kit",
  "MIT",
  "no implementation source"
]);
requireTextIncludes(`${featureDir}/tasks.md`, [
  "Issue #4",
  "blocked until",
  "T007",
  "T011",
  "IAU-runtime-contract-explicit-compare-v1",
  "IAU-runtime-contract-runtime-facts-v1",
  "IAU-runtime-contract-provider-policy-v1",
  "IAU-runtime-contract-proof-intake-v1",
  "runtime-contract closeout PR",
  "- [x] T012",
  "- [x] T013",
  "- [x] T014",
  "- [x] T015",
  "- [x] T016",
  "- [x] T017",
  "- [x] T018",
  "- [x] T019",
  "- [x] T020",
  "- [x] T021",
  "- [x] T022",
  "- [x] T023",
  "- [x] T024",
  "- [x] T025",
  "- [x] T026",
  "- [x] T027",
  "- [x] T028",
  "- [x] T029",
  "- [x] T030",
  "T026",
  "T030"
]);
requireTextIncludes("docs/development/copilot-workflow.md", [
  "IAU-runtime-contract-proof-intake-v1",
  "`T026`",
  "`T030`",
  "Docker command execution or container orchestration",
  "plan first",
  "GitHub Issue #4",
  "npm test",
  "npm run check",
  "git diff --check"
]);
requireTextIncludes(`${importDir}/rtm.csv`, expectedIds);

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("Spec Kit import validation passed.");
