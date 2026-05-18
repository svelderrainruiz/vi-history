import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const sliceId = "runtime-contract-host-provider-v1";
const featureDir = ".specify/specs/runtime-contract-host-provider-v1";
const importDir = `docs/requirements/imports/${sliceId}`;
const admissionPath = `docs/requirements/admissions/${sliceId}.json`;
const observationSliceId = "installed-user-observation-public-surface-v1";
const observationFeatureDir = `.specify/specs/${observationSliceId}`;
const observationImportDir = `docs/requirements/imports/${observationSliceId}`;
const observationAdmissionPath = `docs/requirements/admissions/${observationSliceId}.json`;
const observationModelIauPath = `docs/requirements/admissions/${observationSliceId}/IAU-installed-user-observation-model-v1.json`;
const observationModelPreflightPath = `docs/requirements/admissions/${observationSliceId}/IAU-installed-user-observation-model-v1-preflight-v1.json`;
const commandSliceId = "command-activation-surface-v1";
const commandFeatureDir = `.specify/specs/${commandSliceId}`;
const commandImportDir = `docs/requirements/imports/${commandSliceId}`;
const commandAdmissionPath = `docs/requirements/admissions/${commandSliceId}.json`;
const commandManifestIauPath = `docs/requirements/admissions/${commandSliceId}/IAU-command-activation-manifest-contract-v1.json`;
const commandManifestPreflightPath = `docs/requirements/admissions/${commandSliceId}/IAU-command-activation-manifest-contract-v1-preflight-v1.json`;
const handlerSliceId = "command-handler-entrypoint-shell-v1";
const handlerFeatureDir = `.specify/specs/${handlerSliceId}`;
const handlerImportDir = `docs/requirements/imports/${handlerSliceId}`;
const handlerAdmissionPath = `docs/requirements/admissions/${handlerSliceId}.json`;
const handlerIauPath = `docs/requirements/admissions/${handlerSliceId}/IAU-command-handler-entrypoint-shell-v1.json`;
const handlerPreflightPath = `docs/requirements/admissions/${handlerSliceId}/IAU-command-handler-entrypoint-shell-v1-preflight-v1.json`;
const documentationSliceId = "installed-user-documentation-command-v1";
const documentationFeatureDir = `.specify/specs/${documentationSliceId}`;
const documentationImportDir = `docs/requirements/imports/${documentationSliceId}`;
const documentationAdmissionPath = `docs/requirements/admissions/${documentationSliceId}.json`;
const documentationIauPath = `docs/requirements/admissions/${documentationSliceId}/IAU-documentation-command-panel-shell-v1.json`;
const documentationPreflightPath = `docs/requirements/admissions/${documentationSliceId}/IAU-documentation-command-panel-shell-v1-preflight-v1.json`;
const runtimeSettingsSliceId = "runtime-settings-cli-bootstrap-v1";
const runtimeSettingsFeatureDir = `.specify/specs/${runtimeSettingsSliceId}`;
const runtimeSettingsImportDir = `docs/requirements/imports/${runtimeSettingsSliceId}`;
const runtimeSettingsAdmissionPath = `docs/requirements/admissions/${runtimeSettingsSliceId}.json`;
const runtimeSettingsIauPath = `docs/requirements/admissions/${runtimeSettingsSliceId}/IAU-runtime-settings-cli-prepare-command-shell-v1.json`;
const runtimeSettingsPreflightPath = `docs/requirements/admissions/${runtimeSettingsSliceId}/IAU-runtime-settings-cli-prepare-command-shell-v1-preflight-v1.json`;
const runtimeSettingsWriteSliceId = "runtime-settings-cli-settings-write-v1";
const runtimeSettingsWriteFeatureDir = `.specify/specs/${runtimeSettingsWriteSliceId}`;
const runtimeSettingsWriteImportDir = `docs/requirements/imports/${runtimeSettingsWriteSliceId}`;
const runtimeSettingsWriteAdmissionPath = `docs/requirements/admissions/${runtimeSettingsWriteSliceId}.json`;
const runtimeSettingsWriteIauPath = `docs/requirements/admissions/${runtimeSettingsWriteSliceId}/IAU-runtime-settings-cli-settings-write-contract-v1.json`;
const runtimeSettingsWritePreflightPath = `docs/requirements/admissions/${runtimeSettingsWriteSliceId}/IAU-runtime-settings-cli-settings-write-contract-v1-preflight-v1.json`;
const runtimeSettingsValidateSliceId = "runtime-settings-cli-validation-readback-v1";
const runtimeSettingsValidateFeatureDir = `.specify/specs/${runtimeSettingsValidateSliceId}`;
const runtimeSettingsValidateImportDir = `docs/requirements/imports/${runtimeSettingsValidateSliceId}`;
const runtimeSettingsValidateAdmissionPath = `docs/requirements/admissions/${runtimeSettingsValidateSliceId}.json`;
const runtimeSettingsValidateIauPath = `docs/requirements/admissions/${runtimeSettingsValidateSliceId}/IAU-runtime-settings-cli-validation-readback-contract-v1.json`;
const runtimeSettingsValidatePreflightPath = `docs/requirements/admissions/${runtimeSettingsValidateSliceId}/IAU-runtime-settings-cli-validation-readback-contract-v1-preflight-v1.json`;
const marketplaceAdrPath = "docs/decisions/ADR-001-marketplace-publication-disabled.md";
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
const observationExpectedIds = [
  "VHS-REQ-595"
];
const commandExpectedIds = [
  "VHS-REQ-594"
];
const handlerExpectedIds = [
  "VHS-REQ-082",
  "VHS-REQ-083",
  "VHS-REQ-594"
];
const documentationExpectedIds = [
  "VHS-REQ-368",
  "VHS-REQ-369",
  "VHS-REQ-489",
  "VHS-REQ-594"
];
const runtimeSettingsExpectedIds = [
  "VHS-REQ-537",
  "VHS-REQ-544",
  "VHS-REQ-594"
];
const runtimeSettingsWriteExpectedIds = [
  "VHS-REQ-537",
  "VHS-REQ-543"
];
const runtimeSettingsValidateExpectedIds = [
  "VHS-REQ-543",
  "VHS-REQ-546"
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

function requireMarketplacePosture(record, label) {
  requireEqual(record.marketplacePublication, "disabled", `${label} marketplacePublication`);
  requireEqual(record.marketplacePublicationAdr, marketplaceAdrPath, `${label} marketplacePublicationAdr`);
}

const packageJson = readJson("package.json");
requireEqual(packageJson.name, "vi-history", "package name");
requireEqual(packageJson.displayName, "VI History", "displayName");
requireEqual(packageJson.publisher, "svelderrainruiz", "publisher");
requireEqual(packageJson.version, "0.1.0", "version");
requireEqual(packageJson.license, "MIT", "license");
requireEqual(packageJson.private, false, "private");
requireFile("docs/governance/marketplace-posture.md");
requireFile(marketplaceAdrPath);

const integration = readJson(".specify/integration.json");
requireEqual(integration.integration, "codex", "Spec Kit integration");

requireTextIncludes(".specify/memory/constitution.md", [
  "runtime-contract-host-provider-v1",
  "installed-user-observation-public-surface-v1",
  "command-activation-surface-v1",
  "command-handler-entrypoint-shell-v1",
  "installed-user-documentation-command-v1",
  "runtime-settings-cli-bootstrap-v1",
  "runtime-settings-cli-settings-write-v1",
  "runtime-settings-cli-validation-readback-v1",
  "**Version**: 0.1.6"
]);

const featureJson = readJson(".specify/feature.json");
requireEqual(featureJson.feature_directory, runtimeSettingsValidateFeatureDir, "pinned Spec Kit feature directory");

const admission = readJson(admissionPath);
requireEqual(admission.schema, "vi-history/requirements-admission@v1", "admission schema");
requireEqual(admission.sliceId, sliceId, "admission sliceId");
requireEqual(admission.state, "implemented", "admission state");
requireEqual(admission.targetProduct, "vi-history", "admission targetProduct");
requireEqual(admission.targetFeature, sliceId, "admission targetFeature");
requireEqual(admission.sourceBaselineTag, "v1.3.16", "admission sourceBaselineTag");
requireEqual(admission.sourceCommit, "31add781bd04cc832d9fb55aa821a69305a91a37", "admission sourceCommit");
requireEqual(admission.implementationSharing, "none", "admission implementationSharing");
requireMarketplacePosture(admission, "admission");
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
requireMarketplacePosture(explicitCompareIau, "explicit compare IAU");
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
requireMarketplacePosture(explicitComparePreflight, "explicit compare preflight");
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
requireMarketplacePosture(runtimeFactsIau, "runtime facts IAU");
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
requireMarketplacePosture(runtimeFactsPreflight, "runtime facts preflight");
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
requireMarketplacePosture(providerPolicyIau, "provider policy IAU");
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
requireMarketplacePosture(providerPolicyPreflight, "provider policy preflight");
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
requireMarketplacePosture(proofIntakeIau, "proof intake IAU");
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
requireMarketplacePosture(proofIntakePreflight, "proof intake preflight");
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
requireTextIncludes("README.md", [
  "IAU-installed-user-observation-model-v1",
  "command-activation-surface-v1",
  "docs/decisions/ADR-001-marketplace-publication-disabled.md",
  "docs/governance/marketplace-posture.md"
]);
requireTextIncludes("AGENTS.md", [
  "Marketplace publication is disabled",
  "docs/decisions/ADR-001-marketplace-publication-disabled.md",
  "IAU-installed-user-observation-model-v1",
  "command-activation-surface-v1"
]);
requireTextIncludes(marketplaceAdrPath, [
  "ADR-001: Marketplace Publication Disabled",
  "Marketplace publication remains disabled",
  "Future Marketplace work must"
]);
requireTextIncludes("docs/governance/marketplace-posture.md", [
  "remains Marketplace-disabled",
  "docs/decisions/ADR-001-marketplace-publication-disabled.md",
  "future ADR",
  "No publication workflow is admitted"
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
  "Issue #5 records that Marketplace publication remains disabled",
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
  "Issue #5 closed the Marketplace publication governance decision",
  "docs/decisions/ADR-001-marketplace-publication-disabled.md",
  "IAU-runtime-contract-proof-intake-v1",
  "command-activation-surface-v1",
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

const observationAdmission = readJson(observationAdmissionPath);
requireEqual(observationAdmission.schema, "vi-history/requirements-admission@v1", "observation admission schema");
requireEqual(observationAdmission.sliceId, observationSliceId, "observation admission sliceId");
requireEqual(observationAdmission.state, "implemented", "observation admission state");
requireEqual(observationAdmission.targetProduct, "vi-history", "observation admission targetProduct");
requireEqual(observationAdmission.targetFeature, observationSliceId, "observation admission targetFeature");
requireEqual(observationAdmission.sourceBaselineTag, "v1.3.16", "observation admission sourceBaselineTag");
requireEqual(observationAdmission.sourceCommit, "48232bcc620d4dbe89ff846fda2bfe048b7768fb", "observation admission sourceCommit");
requireEqual(observationAdmission.implementationSharing, "none", "observation admission implementationSharing");
requireMarketplacePosture(observationAdmission, "observation admission");
requireEqual(observationAdmission.currentImplementationAdmissionUnit, null, "observation currentImplementationAdmissionUnit");
requireArrayEqual(observationAdmission.completedImplementationScope, ["T009", "T010", "T011", "T012", "T013"], "observation completedImplementationScope");
requireArrayEqual(observationAdmission.admittedImplementationScope, [], "observation admittedImplementationScope");
requireEqual(observationAdmission.preImplementationPreflight?.iauId, "IAU-installed-user-observation-model-v1", "observation preImplementationPreflight iauId");
requireEqual(observationAdmission.preImplementationPreflight?.status, "pass", "observation preImplementationPreflight status");
requireEqual(observationAdmission.preImplementationPreflight?.implementationStartAllowed, true, "observation preImplementationPreflight implementationStartAllowed");
requireEqual(observationAdmission.preImplementationPreflight?.record, observationModelPreflightPath, "observation preImplementationPreflight record");
requireFile(`docs/requirements/admissions/${observationSliceId}.md`);

const observationModelIau = readJson(observationModelIauPath);
requireEqual(observationModelIau.schema, "vi-history/implementation-admission-unit@v1", "observation model IAU schema");
requireEqual(observationModelIau.iauId, "IAU-installed-user-observation-model-v1", "observation model IAU id");
requireEqual(observationModelIau.state, "implemented", "observation model IAU state");
requireEqual(observationModelIau.parentSliceId, observationSliceId, "observation model IAU parentSliceId");
requireArrayEqual(observationModelIau.admittedTasks, ["T009", "T010", "T011", "T012", "T013"], "observation model IAU admittedTasks");
requireArrayEqual(observationModelIau.blockedTasks, ["T014", "T015", "T016"], "observation model IAU blockedTasks");
requireEqual(observationModelIau.implementationSharing, "none", "observation model IAU implementationSharing");
requireMarketplacePosture(observationModelIau, "observation model IAU");
requireEqual(observationModelIau.preImplementationPreflight?.status, "pass", "observation model IAU preImplementationPreflight status");
requireEqual(observationModelIau.preImplementationPreflight?.record, "IAU-installed-user-observation-model-v1-preflight-v1.json", "observation model IAU preImplementationPreflight record");
requireEqual(observationModelIau.preImplementationPreflight?.implementationStartAllowed, true, "observation model IAU preImplementationPreflight implementationStartAllowed");
requireEqual(observationModelIau.implementationCloseout?.status, "pass", "observation model IAU implementationCloseout status");
requireArrayEqual(observationModelIau.implementationCloseout?.completedTasks, ["T009", "T010", "T011", "T012", "T013"], "observation model IAU implementationCloseout completedTasks");
requireFile(`docs/requirements/admissions/${observationSliceId}/IAU-installed-user-observation-model-v1.md`);

const observationModelPreflight = readJson(observationModelPreflightPath);
requireEqual(observationModelPreflight.schema, "vi-history/implementation-admission-unit-preflight@v1", "observation model preflight schema");
requireEqual(observationModelPreflight.iauId, "IAU-installed-user-observation-model-v1", "observation model preflight iauId");
requireEqual(observationModelPreflight.status, "pass", "observation model preflight status");
requireEqual(observationModelPreflight.implementationStartAllowed, true, "observation model preflight implementationStartAllowed");
requireEqual(observationModelPreflight.parentSliceId, observationSliceId, "observation model preflight parentSliceId");
requireEqual(observationModelPreflight.implementationSharing, "none", "observation model preflight implementationSharing");
requireMarketplacePosture(observationModelPreflight, "observation model preflight");
requireArrayEqual(observationModelPreflight.implementationStartScope, ["T009", "T010", "T011", "T012", "T013"], "observation model preflight implementationStartScope");
if (!Array.isArray(observationModelPreflight.checkResults) || observationModelPreflight.checkResults.length !== observationModelPreflight.requiredChecks.length) {
  failures.push("observation model preflight checkResults: must match requiredChecks length");
} else {
  for (const result of observationModelPreflight.checkResults) {
    requireEqual(result.status, "pass", `observation model preflight check result ${result.check}`);
  }
}
requireFile(`docs/requirements/admissions/${observationSliceId}/IAU-installed-user-observation-model-v1-preflight-v1.md`);

const observationManifest = readJson(`${observationImportDir}/manifest.json`);
requireEqual(observationManifest.schema, "vi-history/requirements-import@v1", "observation manifest schema");
requireEqual(observationManifest.sliceId, observationSliceId, "observation sliceId");
requireEqual(observationManifest.sourceBaselineTag, "v1.3.16", "observation sourceBaselineTag");
requireEqual(observationManifest.sourceCommit, "48232bcc620d4dbe89ff846fda2bfe048b7768fb", "observation sourceCommit");
requireEqual(observationManifest.targetProduct, "vi-history", "observation targetProduct");
requireEqual(observationManifest.targetFeature, observationSliceId, "observation targetFeature");
requireEqual(observationManifest.redactionStatus, "pass", "observation redactionStatus");
requireEqual(observationManifest.implementationSharing, "none", "observation implementationSharing");
requireEqual(observationManifest.marketplacePublication, "disabled-until-later-adr", "observation marketplacePublication");
requireArrayEqual(observationManifest.importedRequirementIds, observationExpectedIds, "observation importedRequirementIds");
requireArrayEqual(observationManifest.files, ["syrs.md", "srs.md", "rtm.csv", "test-plan.md"], "observation manifest files");

for (const file of observationManifest.files ?? []) {
  requireFile(`${observationImportDir}/${file}`);
}

for (const file of ["spec.md", "plan.md", "tasks.md"]) {
  requireFile(`${observationFeatureDir}/${file}`);
}

requireTextIncludes(`${observationFeatureDir}/spec.md`, [
  "Installed-User Observation Public Surface",
  "VHS-REQ-595",
  "observed",
  "deferred",
  "blocked",
  "IAU-installed-user-observation-model-v1"
]);
requireTextIncludes(`${observationFeatureDir}/plan.md`, [
  "import/spec baseline",
  "IAU-installed-user-observation-model-v1",
  "Marketplace publication remains disabled"
]);
requireTextIncludes(`${observationFeatureDir}/tasks.md`, [
  "Issue #25",
  "- [x] T001",
  "- [x] T008",
  "- [x] T009",
  "- [x] T013",
  "IAU-installed-user-observation-model-v1",
  "T009",
  "T013",
  "[BLOCKED]",
  "Issue #27"
]);
requireTextIncludes(`${observationImportDir}/rtm.csv`, observationExpectedIds);
requireTextIncludes("README.md", [
  "installed-user-observation-public-surface-v1",
  "docs/requirements/admissions/installed-user-observation-public-surface-v1.json",
  "IAU-installed-user-observation-model-v1"
]);
requireTextIncludes("AGENTS.md", [
  "installed-user-observation-public-surface-v1",
  "IAU-installed-user-observation-model-v1",
  "008-runtime-settings-cli-validation-readback-v1"
]);

const commandAdmission = readJson(commandAdmissionPath);
requireEqual(commandAdmission.schema, "vi-history/requirements-admission@v1", "command admission schema");
requireEqual(commandAdmission.sliceId, commandSliceId, "command admission sliceId");
requireEqual(commandAdmission.state, "implemented", "command admission state");
requireEqual(commandAdmission.targetProduct, "vi-history", "command admission targetProduct");
requireEqual(commandAdmission.targetFeature, commandSliceId, "command admission targetFeature");
requireEqual(commandAdmission.sourceBaselineTag, "v1.3.16", "command admission sourceBaselineTag");
requireEqual(commandAdmission.sourceCommit, "54a9e713bcd788bd91d6893f3c6550716691b7d4", "command admission sourceCommit");
requireEqual(commandAdmission.governedAdmissionCommit, "01ff907ad878ca335e402b37cdf0929d09c17caf", "command admission governedAdmissionCommit");
requireEqual(commandAdmission.implementationSharing, "none", "command admission implementationSharing");
requireMarketplacePosture(commandAdmission, "command admission");
requireEqual(commandAdmission.currentImplementationAdmissionUnit, null, "command currentImplementationAdmissionUnit");
requireArrayEqual(commandAdmission.completedSpecScope, ["T001", "T002", "T003", "T004", "T005", "T006", "T007", "T008"], "command completedSpecScope");
requireArrayEqual(commandAdmission.completedImplementationScope, ["T009", "T010", "T011", "T012"], "command completedImplementationScope");
requireArrayEqual(commandAdmission.admittedImplementationScope, [], "command admittedImplementationScope");
requireEqual(commandAdmission.preImplementationPreflight?.iauId, "IAU-command-activation-manifest-contract-v1", "command preImplementationPreflight iauId");
requireEqual(commandAdmission.preImplementationPreflight?.status, "pass", "command preImplementationPreflight status");
requireEqual(commandAdmission.preImplementationPreflight?.implementationStartAllowed, true, "command preImplementationPreflight implementationStartAllowed");
requireEqual(commandAdmission.preImplementationPreflight?.record, commandManifestPreflightPath, "command preImplementationPreflight record");
requireFile(`docs/requirements/admissions/${commandSliceId}.md`);

const commandManifestIau = readJson(commandManifestIauPath);
requireEqual(commandManifestIau.schema, "vi-history/implementation-admission-unit@v1", "command manifest IAU schema");
requireEqual(commandManifestIau.iauId, "IAU-command-activation-manifest-contract-v1", "command manifest IAU id");
requireEqual(commandManifestIau.state, "implemented", "command manifest IAU state");
requireEqual(commandManifestIau.parentSliceId, commandSliceId, "command manifest IAU parentSliceId");
requireArrayEqual(commandManifestIau.admittedTasks, ["T009", "T010", "T011", "T012"], "command manifest IAU admittedTasks");
requireArrayEqual(commandManifestIau.blockedTasks, ["T013", "T014", "T015", "T016", "T017"], "command manifest IAU blockedTasks");
requireEqual(commandManifestIau.implementationSharing, "none", "command manifest IAU implementationSharing");
requireMarketplacePosture(commandManifestIau, "command manifest IAU");
requireEqual(commandManifestIau.preImplementationPreflight?.status, "pass", "command manifest IAU preImplementationPreflight status");
requireEqual(commandManifestIau.preImplementationPreflight?.record, "IAU-command-activation-manifest-contract-v1-preflight-v1.json", "command manifest IAU preImplementationPreflight record");
requireEqual(commandManifestIau.preImplementationPreflight?.implementationStartAllowed, true, "command manifest IAU preImplementationPreflight implementationStartAllowed");
requireEqual(commandManifestIau.implementationCloseout?.status, "pass", "command manifest IAU implementationCloseout status");
requireArrayEqual(commandManifestIau.implementationCloseout?.completedTasks, ["T009", "T010", "T011", "T012"], "command manifest IAU implementationCloseout completedTasks");
requireFile(`docs/requirements/admissions/${commandSliceId}/IAU-command-activation-manifest-contract-v1.md`);

const commandManifestPreflight = readJson(commandManifestPreflightPath);
requireEqual(commandManifestPreflight.schema, "vi-history/implementation-admission-unit-preflight@v1", "command manifest preflight schema");
requireEqual(commandManifestPreflight.iauId, "IAU-command-activation-manifest-contract-v1", "command manifest preflight iauId");
requireEqual(commandManifestPreflight.status, "pass", "command manifest preflight status");
requireEqual(commandManifestPreflight.implementationStartAllowed, true, "command manifest preflight implementationStartAllowed");
requireEqual(commandManifestPreflight.parentSliceId, commandSliceId, "command manifest preflight parentSliceId");
requireEqual(commandManifestPreflight.implementationSharing, "none", "command manifest preflight implementationSharing");
requireMarketplacePosture(commandManifestPreflight, "command manifest preflight");
requireArrayEqual(commandManifestPreflight.implementationStartScope, ["T009", "T010", "T011", "T012"], "command manifest preflight implementationStartScope");
if (!Array.isArray(commandManifestPreflight.checkResults) || commandManifestPreflight.checkResults.length !== commandManifestPreflight.requiredChecks.length) {
  failures.push("command manifest preflight checkResults: must match requiredChecks length");
} else {
  for (const result of commandManifestPreflight.checkResults) {
    requireEqual(result.status, "pass", `command manifest preflight check result ${result.check}`);
  }
}
requireFile(`docs/requirements/admissions/${commandSliceId}/IAU-command-activation-manifest-contract-v1-preflight-v1.md`);

const commandManifest = readJson(`${commandImportDir}/manifest.json`);
requireEqual(commandManifest.schema, "vi-history/requirements-import@v1", "command manifest schema");
requireEqual(commandManifest.sliceId, commandSliceId, "command sliceId");
requireEqual(commandManifest.sourceBaselineTag, "v1.3.16", "command sourceBaselineTag");
requireEqual(commandManifest.sourceCommit, "54a9e713bcd788bd91d6893f3c6550716691b7d4", "command sourceCommit");
requireEqual(commandManifest.targetProduct, "vi-history", "command targetProduct");
requireEqual(commandManifest.targetFeature, commandSliceId, "command targetFeature");
requireEqual(commandManifest.redactionStatus, "pass", "command redactionStatus");
requireEqual(commandManifest.implementationSharing, "none", "command implementationSharing");
requireEqual(commandManifest.marketplacePublication, "disabled-until-later-adr", "command marketplacePublication");
requireArrayEqual(commandManifest.importedRequirementIds, commandExpectedIds, "command importedRequirementIds");
requireArrayEqual(commandManifest.files, ["syrs.md", "srs.md", "rtm.csv", "test-plan.md"], "command manifest files");

for (const file of commandManifest.files ?? []) {
  requireFile(`${commandImportDir}/${file}`);
}

for (const file of ["spec.md", "plan.md", "tasks.md"]) {
  requireFile(`${commandFeatureDir}/${file}`);
}

requireTextIncludes(`${commandFeatureDir}/spec.md`, [
  "Command Activation Surface",
  "VHS-REQ-594",
  "labviewViHistory.open",
  "labviewViHistory.openDocumentation",
  "labviewViHistory.prepareLocalRuntimeSettingsCli",
  "manifest-contract IAU implemented"
]);
requireTextIncludes(`${commandFeatureDir}/plan.md`, [
  "import/spec-lock issue",
  "IAU-command-activation-manifest-contract-v1",
  "Marketplace publication remains disabled"
]);
requireTextIncludes(`${commandFeatureDir}/tasks.md`, [
  "Issue #30",
  "Issue #32",
  "- [x] T001",
  "- [x] T008",
  "IAU-command-activation-manifest-contract-v1",
  "[BLOCKED]",
  "T009",
  "T017",
  "No current IAU is admitted"
]);
requireTextIncludes(`${commandImportDir}/rtm.csv`, commandExpectedIds);
requireTextIncludes(`${commandImportDir}/srs.md`, [
  "VHS-REQ-594",
  "onCommand:labviewViHistory.open",
  "onCommand:labviewViHistory.openDocumentation",
  "onCommand:labviewViHistory.prepareLocalRuntimeSettingsCli"
]);
requireTextIncludes("README.md", [
  "command-activation-surface-v1",
  "docs/requirements/admissions/command-activation-surface-v1.json",
  "Issue #30",
  "Issue #32",
  "IAU-command-activation-manifest-contract-v1"
]);
requireTextIncludes("AGENTS.md", [
  "command-activation-surface-v1",
  "command-handler-entrypoint-shell-v1",
  "Current Implementation Admission Unit",
  "IAU-command-handler-entrypoint-shell-v1"
]);

const handlerAdmission = readJson(handlerAdmissionPath);
requireEqual(handlerAdmission.schema, "vi-history/requirements-admission@v1", "handler admission schema");
requireEqual(handlerAdmission.sliceId, handlerSliceId, "handler admission sliceId");
requireEqual(handlerAdmission.state, "implemented", "handler admission state");
requireEqual(handlerAdmission.targetProduct, "vi-history", "handler admission targetProduct");
requireEqual(handlerAdmission.targetFeature, handlerSliceId, "handler admission targetFeature");
requireEqual(handlerAdmission.sourceBaselineTag, "v1.3.16", "handler admission sourceBaselineTag");
requireEqual(handlerAdmission.sourceCommit, "01ff907ad878ca335e402b37cdf0929d09c17caf", "handler admission sourceCommit");
requireEqual(handlerAdmission.governedAdmissionCommit, "47f5b67ae35d5bb8b18c2bd2db12e0e7f835313d", "handler admission governedAdmissionCommit");
requireEqual(handlerAdmission.implementationSharing, "none", "handler admission implementationSharing");
requireMarketplacePosture(handlerAdmission, "handler admission");
requireEqual(handlerAdmission.currentImplementationAdmissionUnit, null, "handler currentImplementationAdmissionUnit");
requireArrayEqual(handlerAdmission.completedSpecScope, ["T001", "T002", "T003", "T004", "T005", "T006", "T007", "T008"], "handler completedSpecScope");
requireArrayEqual(handlerAdmission.completedImplementationScope, ["T009", "T010", "T011"], "handler completedImplementationScope");
requireArrayEqual(handlerAdmission.admittedImplementationScope, [], "handler admittedImplementationScope");
requireArrayEqual(handlerAdmission.blockedImplementationScope, ["T012", "T013", "T014", "T015"], "handler blockedImplementationScope");
requireEqual(handlerAdmission.preImplementationPreflight?.iauId, "IAU-command-handler-entrypoint-shell-v1", "handler preImplementationPreflight iauId");
requireEqual(handlerAdmission.preImplementationPreflight?.status, "pass", "handler preImplementationPreflight status");
requireEqual(handlerAdmission.preImplementationPreflight?.implementationStartAllowed, true, "handler preImplementationPreflight implementationStartAllowed");
requireEqual(handlerAdmission.preImplementationPreflight?.record, handlerPreflightPath, "handler preImplementationPreflight record");
requireFile(`docs/requirements/admissions/${handlerSliceId}.md`);

const handlerIau = readJson(handlerIauPath);
requireEqual(handlerIau.schema, "vi-history/implementation-admission-unit@v1", "handler IAU schema");
requireEqual(handlerIau.iauId, "IAU-command-handler-entrypoint-shell-v1", "handler IAU id");
requireEqual(handlerIau.state, "implemented", "handler IAU state");
requireEqual(handlerIau.parentSliceId, handlerSliceId, "handler IAU parentSliceId");
requireArrayEqual(handlerIau.admittedTasks, ["T009", "T010", "T011"], "handler IAU admittedTasks");
requireArrayEqual(handlerIau.blockedTasks, ["T012", "T013", "T014", "T015"], "handler IAU blockedTasks");
requireEqual(handlerIau.implementationSharing, "none", "handler IAU implementationSharing");
requireMarketplacePosture(handlerIau, "handler IAU");
requireEqual(handlerIau.preImplementationPreflight?.status, "pass", "handler IAU preImplementationPreflight status");
requireEqual(handlerIau.preImplementationPreflight?.record, "IAU-command-handler-entrypoint-shell-v1-preflight-v1.json", "handler IAU preImplementationPreflight record");
requireEqual(handlerIau.preImplementationPreflight?.implementationStartAllowed, true, "handler IAU preImplementationPreflight implementationStartAllowed");
requireEqual(handlerIau.implementationCloseout?.status, "pass", "handler IAU implementationCloseout status");
requireArrayEqual(handlerIau.implementationCloseout?.completedTasks, ["T009", "T010", "T011"], "handler IAU implementationCloseout completedTasks");
requireFile(`docs/requirements/admissions/${handlerSliceId}/IAU-command-handler-entrypoint-shell-v1.md`);

const handlerPreflight = readJson(handlerPreflightPath);
requireEqual(handlerPreflight.schema, "vi-history/implementation-admission-unit-preflight@v1", "handler preflight schema");
requireEqual(handlerPreflight.iauId, "IAU-command-handler-entrypoint-shell-v1", "handler preflight iauId");
requireEqual(handlerPreflight.status, "pass", "handler preflight status");
requireEqual(handlerPreflight.implementationStartAllowed, true, "handler preflight implementationStartAllowed");
requireEqual(handlerPreflight.parentSliceId, handlerSliceId, "handler preflight parentSliceId");
requireEqual(handlerPreflight.implementationSharing, "none", "handler preflight implementationSharing");
requireMarketplacePosture(handlerPreflight, "handler preflight");
requireArrayEqual(handlerPreflight.implementationStartScope, ["T009", "T010", "T011"], "handler preflight implementationStartScope");
if (!Array.isArray(handlerPreflight.checkResults) || handlerPreflight.checkResults.length !== handlerPreflight.requiredChecks.length) {
  failures.push("handler preflight checkResults: must match requiredChecks length");
} else {
  for (const result of handlerPreflight.checkResults) {
    requireEqual(result.status, "pass", `handler preflight check result ${result.check}`);
  }
}
requireFile(`docs/requirements/admissions/${handlerSliceId}/IAU-command-handler-entrypoint-shell-v1-preflight-v1.md`);

const handlerManifest = readJson(`${handlerImportDir}/manifest.json`);
requireEqual(handlerManifest.schema, "vi-history/requirements-import@v1", "handler manifest schema");
requireEqual(handlerManifest.sliceId, handlerSliceId, "handler sliceId");
requireEqual(handlerManifest.sourceBaselineTag, "v1.3.16", "handler sourceBaselineTag");
requireEqual(handlerManifest.sourceCommit, "01ff907ad878ca335e402b37cdf0929d09c17caf", "handler sourceCommit");
requireEqual(handlerManifest.governedAdmissionCommit, "47f5b67ae35d5bb8b18c2bd2db12e0e7f835313d", "handler governedAdmissionCommit");
requireEqual(handlerManifest.targetProduct, "vi-history", "handler targetProduct");
requireEqual(handlerManifest.targetFeature, handlerSliceId, "handler targetFeature");
requireEqual(handlerManifest.redactionStatus, "pass", "handler redactionStatus");
requireEqual(handlerManifest.implementationSharing, "none", "handler implementationSharing");
requireEqual(handlerManifest.marketplacePublication, "disabled-until-later-adr", "handler marketplacePublication");
requireArrayEqual(handlerManifest.importedRequirementIds, handlerExpectedIds, "handler importedRequirementIds");
requireArrayEqual(handlerManifest.files, ["syrs.md", "srs.md", "rtm.csv", "test-plan.md"], "handler manifest files");

for (const file of handlerManifest.files ?? []) {
  requireFile(`${handlerImportDir}/${file}`);
}

for (const file of ["spec.md", "plan.md", "tasks.md"]) {
  requireFile(`${handlerFeatureDir}/${file}`);
}

requireTextIncludes(`${handlerFeatureDir}/spec.md`, [
  "Command Handler Entrypoint Shell",
  "VHS-REQ-082",
  "VHS-REQ-083",
  "VHS-REQ-594",
  "IAU-command-handler-entrypoint-shell-v1"
]);
requireTextIncludes(`${handlerFeatureDir}/plan.md`, [
  "IAU-command-handler-entrypoint-shell-v1",
  "Issue #36",
  "Marketplace publication remains disabled"
]);
requireTextIncludes(`${handlerFeatureDir}/tasks.md`, [
  "Issue #36",
  "- [x] T001",
  "- [x] T008",
  "- [x] T009",
  "- [x] T010",
  "- [x] T011",
  "IAU-command-handler-entrypoint-shell-v1",
  "[BLOCKED]",
  "T015"
]);
requireTextIncludes(`${handlerImportDir}/rtm.csv`, handlerExpectedIds);
requireTextIncludes(`${handlerImportDir}/srs.md`, [
  "VHS-REQ-082",
  "VHS-REQ-083",
  "VHS-REQ-594",
  "labviewViHistory.open"
]);
requireTextIncludes("README.md", [
  "command-handler-entrypoint-shell-v1",
  "docs/requirements/admissions/command-handler-entrypoint-shell-v1.json",
  "Issue #36",
  "IAU-command-handler-entrypoint-shell-v1"
]);

const documentationAdmission = readJson(documentationAdmissionPath);
requireEqual(documentationAdmission.schema, "vi-history/requirements-admission@v1", "documentation admission schema");
requireEqual(documentationAdmission.sliceId, documentationSliceId, "documentation admission sliceId");
requireEqual(documentationAdmission.state, "implemented", "documentation admission state");
requireEqual(documentationAdmission.targetProduct, "vi-history", "documentation admission targetProduct");
requireEqual(documentationAdmission.targetFeature, documentationSliceId, "documentation admission targetFeature");
requireEqual(documentationAdmission.sourceBaselineTag, "v1.3.16", "documentation admission sourceBaselineTag");
requireEqual(documentationAdmission.sourceCommit, "47f5b67ae35d5bb8b18c2bd2db12e0e7f835313d", "documentation admission sourceCommit");
requireEqual(documentationAdmission.governedAdmissionCommit, "ff950d6b7401fe31c5a12aea28bcad9099b254f1", "documentation admission governedAdmissionCommit");
requireEqual(documentationAdmission.implementationSharing, "none", "documentation admission implementationSharing");
requireMarketplacePosture(documentationAdmission, "documentation admission");
requireEqual(documentationAdmission.currentImplementationAdmissionUnit, null, "documentation currentImplementationAdmissionUnit");
requireArrayEqual(documentationAdmission.completedSpecScope, ["T001", "T002", "T003", "T004", "T005", "T006", "T007", "T008"], "documentation completedSpecScope");
requireArrayEqual(documentationAdmission.completedImplementationScope, ["T009", "T010", "T011"], "documentation completedImplementationScope");
requireArrayEqual(documentationAdmission.admittedImplementationScope, [], "documentation admittedImplementationScope");
requireArrayEqual(documentationAdmission.blockedImplementationScope, ["T012", "T013", "T014", "T015"], "documentation blockedImplementationScope");
requireEqual(documentationAdmission.preImplementationPreflight?.iauId, "IAU-documentation-command-panel-shell-v1", "documentation preImplementationPreflight iauId");
requireEqual(documentationAdmission.preImplementationPreflight?.status, "pass", "documentation preImplementationPreflight status");
requireEqual(documentationAdmission.preImplementationPreflight?.implementationStartAllowed, true, "documentation preImplementationPreflight implementationStartAllowed");
requireEqual(documentationAdmission.preImplementationPreflight?.record, documentationPreflightPath, "documentation preImplementationPreflight record");
requireFile(`docs/requirements/admissions/${documentationSliceId}.md`);

const documentationIau = readJson(documentationIauPath);
requireEqual(documentationIau.schema, "vi-history/implementation-admission-unit@v1", "documentation IAU schema");
requireEqual(documentationIau.iauId, "IAU-documentation-command-panel-shell-v1", "documentation IAU id");
requireEqual(documentationIau.state, "implemented", "documentation IAU state");
requireEqual(documentationIau.parentSliceId, documentationSliceId, "documentation IAU parentSliceId");
requireArrayEqual(documentationIau.admittedTasks, ["T009", "T010", "T011"], "documentation IAU admittedTasks");
requireArrayEqual(documentationIau.blockedTasks, ["T012", "T013", "T014", "T015"], "documentation IAU blockedTasks");
requireEqual(documentationIau.implementationSharing, "none", "documentation IAU implementationSharing");
requireMarketplacePosture(documentationIau, "documentation IAU");
requireEqual(documentationIau.preImplementationPreflight?.status, "pass", "documentation IAU preImplementationPreflight status");
requireEqual(documentationIau.preImplementationPreflight?.record, "IAU-documentation-command-panel-shell-v1-preflight-v1.json", "documentation IAU preImplementationPreflight record");
requireEqual(documentationIau.preImplementationPreflight?.implementationStartAllowed, true, "documentation IAU preImplementationPreflight implementationStartAllowed");
requireFile(`docs/requirements/admissions/${documentationSliceId}/IAU-documentation-command-panel-shell-v1.md`);

const documentationPreflight = readJson(documentationPreflightPath);
requireEqual(documentationPreflight.schema, "vi-history/implementation-admission-unit-preflight@v1", "documentation preflight schema");
requireEqual(documentationPreflight.iauId, "IAU-documentation-command-panel-shell-v1", "documentation preflight iauId");
requireEqual(documentationPreflight.status, "pass", "documentation preflight status");
requireEqual(documentationPreflight.implementationStartAllowed, true, "documentation preflight implementationStartAllowed");
requireEqual(documentationPreflight.parentSliceId, documentationSliceId, "documentation preflight parentSliceId");
requireEqual(documentationPreflight.implementationSharing, "none", "documentation preflight implementationSharing");
requireMarketplacePosture(documentationPreflight, "documentation preflight");
requireArrayEqual(documentationPreflight.implementationStartScope, ["T009", "T010", "T011"], "documentation preflight implementationStartScope");
if (!Array.isArray(documentationPreflight.checkResults) || documentationPreflight.checkResults.length !== documentationPreflight.requiredChecks.length) {
  failures.push("documentation preflight checkResults: must match requiredChecks length");
} else {
  for (const result of documentationPreflight.checkResults) {
    requireEqual(result.status, "pass", `documentation preflight check result ${result.check}`);
  }
}
requireFile(`docs/requirements/admissions/${documentationSliceId}/IAU-documentation-command-panel-shell-v1-preflight-v1.md`);

const documentationManifest = readJson(`${documentationImportDir}/manifest.json`);
requireEqual(documentationManifest.schema, "vi-history/requirements-import@v1", "documentation manifest schema");
requireEqual(documentationManifest.sliceId, documentationSliceId, "documentation sliceId");
requireEqual(documentationManifest.sourceBaselineTag, "v1.3.16", "documentation sourceBaselineTag");
requireEqual(documentationManifest.sourceCommit, "47f5b67ae35d5bb8b18c2bd2db12e0e7f835313d", "documentation sourceCommit");
requireEqual(documentationManifest.governedAdmissionCommit, "ff950d6b7401fe31c5a12aea28bcad9099b254f1", "documentation governedAdmissionCommit");
requireEqual(documentationManifest.targetProduct, "vi-history", "documentation targetProduct");
requireEqual(documentationManifest.targetFeature, documentationSliceId, "documentation targetFeature");
requireEqual(documentationManifest.redactionStatus, "pass", "documentation redactionStatus");
requireEqual(documentationManifest.implementationSharing, "none", "documentation implementationSharing");
requireEqual(documentationManifest.marketplacePublication, "disabled-until-later-adr", "documentation marketplacePublication");
requireArrayEqual(documentationManifest.importedRequirementIds, documentationExpectedIds, "documentation importedRequirementIds");
requireArrayEqual(documentationManifest.files, ["syrs.md", "srs.md", "rtm.csv", "test-plan.md"], "documentation manifest files");

for (const file of documentationManifest.files ?? []) {
  requireFile(`${documentationImportDir}/${file}`);
}

for (const file of ["spec.md", "plan.md", "tasks.md"]) {
  requireFile(`${documentationFeatureDir}/${file}`);
}

requireTextIncludes(`${documentationFeatureDir}/spec.md`, [
  "Installed-User Documentation Command",
  "VHS-REQ-368",
  "VHS-REQ-369",
  "VHS-REQ-489",
  "VHS-REQ-594",
  "IAU-documentation-command-panel-shell-v1"
]);
requireTextIncludes(`${documentationFeatureDir}/plan.md`, [
  "IAU-documentation-command-panel-shell-v1",
  "Issue #39",
  "Marketplace publication remains disabled"
]);
requireTextIncludes(`${documentationFeatureDir}/tasks.md`, [
  "Issue #39",
  "- [x] T001",
  "- [x] T008",
  "- [x] T009",
  "- [x] T010",
  "- [x] T011",
  "IAU-documentation-command-panel-shell-v1",
  "Issue #41",
  "[BLOCKED]",
  "T015"
]);
requireTextIncludes(`${documentationImportDir}/rtm.csv`, documentationExpectedIds);
requireTextIncludes(`${documentationImportDir}/srs.md`, [
  "VHS-REQ-368",
  "VHS-REQ-369",
  "VHS-REQ-489",
  "VHS-REQ-594",
  "labviewViHistory.openDocumentation"
]);
requireTextIncludes("README.md", [
  "installed-user-documentation-command-v1",
  "docs/requirements/admissions/installed-user-documentation-command-v1.json",
  "Issue #39",
  "Issue #41",
  "IAU-documentation-command-panel-shell-v1"
]);
requireTextIncludes("AGENTS.md", [
  "installed-user-documentation-command-v1",
  "Current Implementation Admission Unit",
  "IAU-documentation-command-panel-shell-v1"
]);

const runtimeSettingsAdmission = readJson(runtimeSettingsAdmissionPath);
requireEqual(runtimeSettingsAdmission.schema, "vi-history/requirements-admission@v1", "runtime settings admission schema");
requireEqual(runtimeSettingsAdmission.sliceId, runtimeSettingsSliceId, "runtime settings admission sliceId");
requireEqual(runtimeSettingsAdmission.state, "implemented", "runtime settings admission state");
requireEqual(runtimeSettingsAdmission.targetProduct, "vi-history", "runtime settings admission targetProduct");
requireEqual(runtimeSettingsAdmission.targetFeature, runtimeSettingsSliceId, "runtime settings admission targetFeature");
requireEqual(runtimeSettingsAdmission.sourceBaselineTag, "v1.3.16", "runtime settings admission sourceBaselineTag");
requireEqual(runtimeSettingsAdmission.sourceCommit, "ff950d6b7401fe31c5a12aea28bcad9099b254f1", "runtime settings admission sourceCommit");
requireEqual(runtimeSettingsAdmission.governedAdmissionCommit, "110bf8e0a98478d141244ae0c53240e4cf93a790", "runtime settings admission governedAdmissionCommit");
requireEqual(runtimeSettingsAdmission.implementationSharing, "none", "runtime settings admission implementationSharing");
requireMarketplacePosture(runtimeSettingsAdmission, "runtime settings admission");
requireEqual(runtimeSettingsAdmission.currentImplementationAdmissionUnit, null, "runtime settings currentImplementationAdmissionUnit");
requireArrayEqual(runtimeSettingsAdmission.completedSpecScope, ["T001", "T002", "T003", "T004", "T005", "T006", "T007", "T008"], "runtime settings completedSpecScope");
requireArrayEqual(runtimeSettingsAdmission.completedImplementationScope, ["T009", "T010", "T011"], "runtime settings completedImplementationScope");
requireArrayEqual(runtimeSettingsAdmission.admittedImplementationScope, [], "runtime settings admittedImplementationScope");
requireArrayEqual(runtimeSettingsAdmission.blockedImplementationScope, ["T012", "T013", "T014", "T015"], "runtime settings blockedImplementationScope");
requireEqual(runtimeSettingsAdmission.preImplementationPreflight?.iauId, "IAU-runtime-settings-cli-prepare-command-shell-v1", "runtime settings preImplementationPreflight iauId");
requireEqual(runtimeSettingsAdmission.preImplementationPreflight?.status, "pass", "runtime settings preImplementationPreflight status");
requireEqual(runtimeSettingsAdmission.preImplementationPreflight?.implementationStartAllowed, true, "runtime settings preImplementationPreflight implementationStartAllowed");
requireEqual(runtimeSettingsAdmission.preImplementationPreflight?.record, runtimeSettingsPreflightPath, "runtime settings preImplementationPreflight record");
requireFile(`docs/requirements/admissions/${runtimeSettingsSliceId}.md`);

const runtimeSettingsAdmissionUnit = (runtimeSettingsAdmission.implementationAdmissionUnits ?? [])
  .find((unit) => unit?.iauId === "IAU-runtime-settings-cli-prepare-command-shell-v1");
requireEqual(runtimeSettingsAdmissionUnit?.state, "implemented", "runtime settings admission unit state");
requireEqual(runtimeSettingsAdmissionUnit?.preflightRecord, runtimeSettingsPreflightPath, "runtime settings admission unit preflightRecord");

const runtimeSettingsIau = readJson(runtimeSettingsIauPath);
requireEqual(runtimeSettingsIau.schema, "vi-history/implementation-admission-unit@v1", "runtime settings IAU schema");
requireEqual(runtimeSettingsIau.iauId, "IAU-runtime-settings-cli-prepare-command-shell-v1", "runtime settings IAU id");
requireEqual(runtimeSettingsIau.state, "implemented", "runtime settings IAU state");
requireEqual(runtimeSettingsIau.parentSliceId, runtimeSettingsSliceId, "runtime settings IAU parentSliceId");
requireArrayEqual(runtimeSettingsIau.admittedTasks, ["T009", "T010", "T011"], "runtime settings IAU admittedTasks");
requireArrayEqual(runtimeSettingsIau.blockedTasks, ["T012", "T013", "T014", "T015"], "runtime settings IAU blockedTasks");
requireEqual(runtimeSettingsIau.implementationSharing, "none", "runtime settings IAU implementationSharing");
requireMarketplacePosture(runtimeSettingsIau, "runtime settings IAU");
requireEqual(runtimeSettingsIau.preImplementationPreflight?.status, "pass", "runtime settings IAU preImplementationPreflight status");
requireEqual(runtimeSettingsIau.preImplementationPreflight?.record, "IAU-runtime-settings-cli-prepare-command-shell-v1-preflight-v1.json", "runtime settings IAU preImplementationPreflight record");
requireEqual(runtimeSettingsIau.preImplementationPreflight?.implementationStartAllowed, true, "runtime settings IAU preImplementationPreflight implementationStartAllowed");
requireEqual(runtimeSettingsIau.implementationCloseout?.status, "pass", "runtime settings IAU implementationCloseout status");
requireArrayEqual(runtimeSettingsIau.implementationCloseout?.completedTasks, ["T009", "T010", "T011"], "runtime settings IAU implementationCloseout completedTasks");
requireFile(`docs/requirements/admissions/${runtimeSettingsSliceId}/IAU-runtime-settings-cli-prepare-command-shell-v1.md`);

const runtimeSettingsPreflight = readJson(runtimeSettingsPreflightPath);
requireEqual(runtimeSettingsPreflight.schema, "vi-history/implementation-admission-unit-preflight@v1", "runtime settings preflight schema");
requireEqual(runtimeSettingsPreflight.iauId, "IAU-runtime-settings-cli-prepare-command-shell-v1", "runtime settings preflight iauId");
requireEqual(runtimeSettingsPreflight.status, "pass", "runtime settings preflight status");
requireEqual(runtimeSettingsPreflight.implementationStartAllowed, true, "runtime settings preflight implementationStartAllowed");
requireEqual(runtimeSettingsPreflight.parentSliceId, runtimeSettingsSliceId, "runtime settings preflight parentSliceId");
requireEqual(runtimeSettingsPreflight.implementationSharing, "none", "runtime settings preflight implementationSharing");
requireMarketplacePosture(runtimeSettingsPreflight, "runtime settings preflight");
requireArrayEqual(runtimeSettingsPreflight.implementationStartScope, ["T009", "T010", "T011"], "runtime settings preflight implementationStartScope");
if (!Array.isArray(runtimeSettingsPreflight.checkResults) || runtimeSettingsPreflight.checkResults.length !== runtimeSettingsPreflight.requiredChecks.length) {
  failures.push("runtime settings preflight checkResults: must match requiredChecks length");
} else {
  for (const result of runtimeSettingsPreflight.checkResults) {
    requireEqual(result.status, "pass", `runtime settings preflight check result ${result.check}`);
  }
}
requireFile(`docs/requirements/admissions/${runtimeSettingsSliceId}/IAU-runtime-settings-cli-prepare-command-shell-v1-preflight-v1.md`);

const runtimeSettingsManifest = readJson(`${runtimeSettingsImportDir}/manifest.json`);
requireEqual(runtimeSettingsManifest.schema, "vi-history/requirements-import@v1", "runtime settings manifest schema");
requireEqual(runtimeSettingsManifest.sliceId, runtimeSettingsSliceId, "runtime settings sliceId");
requireEqual(runtimeSettingsManifest.sourceBaselineTag, "v1.3.16", "runtime settings sourceBaselineTag");
requireEqual(runtimeSettingsManifest.sourceCommit, "ff950d6b7401fe31c5a12aea28bcad9099b254f1", "runtime settings sourceCommit");
requireEqual(runtimeSettingsManifest.governedAdmissionCommit, "110bf8e0a98478d141244ae0c53240e4cf93a790", "runtime settings governedAdmissionCommit");
requireEqual(runtimeSettingsManifest.targetProduct, "vi-history", "runtime settings targetProduct");
requireEqual(runtimeSettingsManifest.targetFeature, runtimeSettingsSliceId, "runtime settings targetFeature");
requireEqual(runtimeSettingsManifest.redactionStatus, "pass", "runtime settings redactionStatus");
requireEqual(runtimeSettingsManifest.implementationSharing, "none", "runtime settings implementationSharing");
requireEqual(runtimeSettingsManifest.marketplacePublication, "disabled-until-later-adr", "runtime settings marketplacePublication");
requireArrayEqual(runtimeSettingsManifest.importedRequirementIds, runtimeSettingsExpectedIds, "runtime settings importedRequirementIds");
requireArrayEqual(runtimeSettingsManifest.files, ["syrs.md", "srs.md", "rtm.csv", "test-plan.md"], "runtime settings manifest files");

for (const file of runtimeSettingsManifest.files ?? []) {
  requireFile(`${runtimeSettingsImportDir}/${file}`);
}

for (const file of ["spec.md", "plan.md", "tasks.md"]) {
  requireFile(`${runtimeSettingsFeatureDir}/${file}`);
}

requireTextIncludes(`${runtimeSettingsFeatureDir}/spec.md`, [
  "Runtime Settings CLI Bootstrap",
  "VHS-REQ-537",
  "VHS-REQ-544",
  "VHS-REQ-594",
  "IAU-runtime-settings-cli-prepare-command-shell-v1",
  "clean-room"
]);
requireTextIncludes(`${runtimeSettingsFeatureDir}/plan.md`, [
  "IAU-runtime-settings-cli-prepare-command-shell-v1",
  "Issue #43",
  "Marketplace publication remains disabled"
]);
requireTextIncludes(`${runtimeSettingsFeatureDir}/tasks.md`, [
  "Issue #43",
  "- [x] T001",
  "- [x] T008",
  "- [x] T009",
  "- [x] T010",
  "- [x] T011",
  "IAU-runtime-settings-cli-prepare-command-shell-v1",
  "Issue #45",
  "[BLOCKED]",
  "T015"
]);
requireTextIncludes(`${runtimeSettingsImportDir}/rtm.csv`, runtimeSettingsExpectedIds);
requireTextIncludes(`${runtimeSettingsImportDir}/srs.md`, [
  "VHS-REQ-537",
  "VHS-REQ-544",
  "VHS-REQ-594",
  "labviewViHistory.prepareLocalRuntimeSettingsCli"
]);
requireTextIncludes("README.md", [
  "runtime-settings-cli-bootstrap-v1",
  "docs/requirements/admissions/runtime-settings-cli-bootstrap-v1.json",
  "Issue #43",
  "Issue #45",
  "IAU-runtime-settings-cli-prepare-command-shell-v1"
]);
requireTextIncludes("AGENTS.md", [
  "runtime-settings-cli-bootstrap-v1",
  "Current Implementation Admission Unit",
  "IAU-runtime-settings-cli-prepare-command-shell-v1",
  "008-runtime-settings-cli-validation-readback-v1"
]);
requireTextIncludes("docs/development/copilot-workflow.md", [
  "runtime-settings-cli-bootstrap-v1",
  "Issue #43",
  "Issue #45",
  "IAU-runtime-settings-cli-prepare-command-shell-v1",
  "runtime settings mutation beyond the admitted provider/version/bitness"
]);

const runtimeSettingsWriteAdmission = readJson(runtimeSettingsWriteAdmissionPath);
requireEqual(runtimeSettingsWriteAdmission.schema, "vi-history/requirements-admission@v1", "runtime settings write admission schema");
requireEqual(runtimeSettingsWriteAdmission.sliceId, runtimeSettingsWriteSliceId, "runtime settings write admission sliceId");
requireEqual(runtimeSettingsWriteAdmission.state, "implemented", "runtime settings write admission state");
requireEqual(runtimeSettingsWriteAdmission.targetProduct, "vi-history", "runtime settings write admission targetProduct");
requireEqual(runtimeSettingsWriteAdmission.targetFeature, runtimeSettingsWriteSliceId, "runtime settings write admission targetFeature");
requireEqual(runtimeSettingsWriteAdmission.sourceBaselineTag, "v1.3.16", "runtime settings write admission sourceBaselineTag");
requireEqual(runtimeSettingsWriteAdmission.sourceCommit, "110bf8e0a98478d141244ae0c53240e4cf93a790", "runtime settings write admission sourceCommit");
requireEqual(runtimeSettingsWriteAdmission.governedAdmissionCommit, "72c9a700da501eba23e16e3d35b385ec8d8d6808", "runtime settings write admission governedAdmissionCommit");
requireEqual(runtimeSettingsWriteAdmission.implementationSharing, "none", "runtime settings write admission implementationSharing");
requireMarketplacePosture(runtimeSettingsWriteAdmission, "runtime settings write admission");
requireEqual(runtimeSettingsWriteAdmission.currentImplementationAdmissionUnit, null, "runtime settings write currentImplementationAdmissionUnit");
requireArrayEqual(runtimeSettingsWriteAdmission.completedSpecScope, ["T001", "T002", "T003", "T004", "T005", "T006", "T007", "T008"], "runtime settings write completedSpecScope");
requireArrayEqual(runtimeSettingsWriteAdmission.completedImplementationScope, ["T009", "T010", "T011", "T012"], "runtime settings write completedImplementationScope");
requireArrayEqual(runtimeSettingsWriteAdmission.admittedImplementationScope, [], "runtime settings write admittedImplementationScope");
requireArrayEqual(runtimeSettingsWriteAdmission.blockedImplementationScope, ["T013", "T014", "T015", "T016", "T017"], "runtime settings write blockedImplementationScope");
requireEqual(runtimeSettingsWriteAdmission.preImplementationPreflight?.iauId, "IAU-runtime-settings-cli-settings-write-contract-v1", "runtime settings write preImplementationPreflight iauId");
requireEqual(runtimeSettingsWriteAdmission.preImplementationPreflight?.status, "pass", "runtime settings write preImplementationPreflight status");
requireEqual(runtimeSettingsWriteAdmission.preImplementationPreflight?.implementationStartAllowed, true, "runtime settings write preImplementationPreflight implementationStartAllowed");
requireEqual(runtimeSettingsWriteAdmission.preImplementationPreflight?.record, runtimeSettingsWritePreflightPath, "runtime settings write preImplementationPreflight record");
requireEqual(runtimeSettingsWriteAdmission.implementationCloseout?.status, "pass", "runtime settings write implementationCloseout status");
requireArrayEqual(runtimeSettingsWriteAdmission.implementationCloseout?.completedTasks, ["T009", "T010", "T011", "T012"], "runtime settings write implementationCloseout completedTasks");
requireFile(`docs/requirements/admissions/${runtimeSettingsWriteSliceId}.md`);

const runtimeSettingsWriteAdmissionUnit = (runtimeSettingsWriteAdmission.implementationAdmissionUnits ?? [])
  .find((unit) => unit?.iauId === "IAU-runtime-settings-cli-settings-write-contract-v1");
requireEqual(runtimeSettingsWriteAdmissionUnit?.state, "implemented", "runtime settings write admission unit state");
requireEqual(runtimeSettingsWriteAdmissionUnit?.preflightRecord, runtimeSettingsWritePreflightPath, "runtime settings write admission unit preflightRecord");

const runtimeSettingsWriteIau = readJson(runtimeSettingsWriteIauPath);
requireEqual(runtimeSettingsWriteIau.schema, "vi-history/implementation-admission-unit@v1", "runtime settings write IAU schema");
requireEqual(runtimeSettingsWriteIau.iauId, "IAU-runtime-settings-cli-settings-write-contract-v1", "runtime settings write IAU id");
requireEqual(runtimeSettingsWriteIau.state, "implemented", "runtime settings write IAU state");
requireEqual(runtimeSettingsWriteIau.parentSliceId, runtimeSettingsWriteSliceId, "runtime settings write IAU parentSliceId");
requireArrayEqual(runtimeSettingsWriteIau.admittedTasks, ["T009", "T010", "T011", "T012"], "runtime settings write IAU admittedTasks");
requireArrayEqual(runtimeSettingsWriteIau.blockedTasks, ["T013", "T014", "T015", "T016", "T017"], "runtime settings write IAU blockedTasks");
requireEqual(runtimeSettingsWriteIau.implementationSharing, "none", "runtime settings write IAU implementationSharing");
requireMarketplacePosture(runtimeSettingsWriteIau, "runtime settings write IAU");
requireEqual(runtimeSettingsWriteIau.preImplementationPreflight?.status, "pass", "runtime settings write IAU preImplementationPreflight status");
requireEqual(runtimeSettingsWriteIau.preImplementationPreflight?.record, "IAU-runtime-settings-cli-settings-write-contract-v1-preflight-v1.json", "runtime settings write IAU preImplementationPreflight record");
requireEqual(runtimeSettingsWriteIau.preImplementationPreflight?.implementationStartAllowed, true, "runtime settings write IAU preImplementationPreflight implementationStartAllowed");
requireEqual(runtimeSettingsWriteIau.implementationCloseout?.status, "pass", "runtime settings write IAU implementationCloseout status");
requireArrayEqual(runtimeSettingsWriteIau.implementationCloseout?.completedTasks, ["T009", "T010", "T011", "T012"], "runtime settings write IAU implementationCloseout completedTasks");
requireFile(`docs/requirements/admissions/${runtimeSettingsWriteSliceId}/IAU-runtime-settings-cli-settings-write-contract-v1.md`);

const runtimeSettingsWritePreflight = readJson(runtimeSettingsWritePreflightPath);
requireEqual(runtimeSettingsWritePreflight.schema, "vi-history/implementation-admission-unit-preflight@v1", "runtime settings write preflight schema");
requireEqual(runtimeSettingsWritePreflight.iauId, "IAU-runtime-settings-cli-settings-write-contract-v1", "runtime settings write preflight iauId");
requireEqual(runtimeSettingsWritePreflight.status, "pass", "runtime settings write preflight status");
requireEqual(runtimeSettingsWritePreflight.implementationStartAllowed, true, "runtime settings write preflight implementationStartAllowed");
requireEqual(runtimeSettingsWritePreflight.parentSliceId, runtimeSettingsWriteSliceId, "runtime settings write preflight parentSliceId");
requireEqual(runtimeSettingsWritePreflight.implementationSharing, "none", "runtime settings write preflight implementationSharing");
requireMarketplacePosture(runtimeSettingsWritePreflight, "runtime settings write preflight");
requireArrayEqual(runtimeSettingsWritePreflight.implementationStartScope, ["T009", "T010", "T011", "T012"], "runtime settings write preflight implementationStartScope");
if (!Array.isArray(runtimeSettingsWritePreflight.checkResults) || runtimeSettingsWritePreflight.checkResults.length !== runtimeSettingsWritePreflight.requiredChecks.length) {
  failures.push("runtime settings write preflight checkResults: must match requiredChecks length");
} else {
  for (const result of runtimeSettingsWritePreflight.checkResults) {
    requireEqual(result.status, "pass", `runtime settings write preflight check result ${result.check}`);
  }
}
requireFile(`docs/requirements/admissions/${runtimeSettingsWriteSliceId}/IAU-runtime-settings-cli-settings-write-contract-v1-preflight-v1.md`);

const runtimeSettingsWriteManifest = readJson(`${runtimeSettingsWriteImportDir}/manifest.json`);
requireEqual(runtimeSettingsWriteManifest.schema, "vi-history/requirements-import@v1", "runtime settings write manifest schema");
requireEqual(runtimeSettingsWriteManifest.sliceId, runtimeSettingsWriteSliceId, "runtime settings write sliceId");
requireEqual(runtimeSettingsWriteManifest.sourceBaselineTag, "v1.3.16", "runtime settings write sourceBaselineTag");
requireEqual(runtimeSettingsWriteManifest.sourceCommit, "110bf8e0a98478d141244ae0c53240e4cf93a790", "runtime settings write sourceCommit");
requireEqual(runtimeSettingsWriteManifest.governedAdmissionCommit, "72c9a700da501eba23e16e3d35b385ec8d8d6808", "runtime settings write governedAdmissionCommit");
requireEqual(runtimeSettingsWriteManifest.targetProduct, "vi-history", "runtime settings write targetProduct");
requireEqual(runtimeSettingsWriteManifest.targetFeature, runtimeSettingsWriteSliceId, "runtime settings write targetFeature");
requireEqual(runtimeSettingsWriteManifest.redactionStatus, "pass", "runtime settings write redactionStatus");
requireEqual(runtimeSettingsWriteManifest.implementationSharing, "none", "runtime settings write implementationSharing");
requireEqual(runtimeSettingsWriteManifest.marketplacePublication, "disabled-until-later-adr", "runtime settings write marketplacePublication");
requireArrayEqual(runtimeSettingsWriteManifest.importedRequirementIds, runtimeSettingsWriteExpectedIds, "runtime settings write importedRequirementIds");
requireArrayEqual(runtimeSettingsWriteManifest.files, ["syrs.md", "srs.md", "rtm.csv", "test-plan.md"], "runtime settings write manifest files");

for (const file of runtimeSettingsWriteManifest.files ?? []) {
  requireFile(`${runtimeSettingsWriteImportDir}/${file}`);
}

for (const file of ["spec.md", "plan.md", "tasks.md"]) {
  requireFile(`${runtimeSettingsWriteFeatureDir}/${file}`);
}

requireTextIncludes(`${runtimeSettingsWriteFeatureDir}/spec.md`, [
  "Runtime Settings CLI Settings Write",
  "VHS-REQ-537",
  "VHS-REQ-543",
  "IAU-runtime-settings-cli-settings-write-contract-v1",
  "clean-room"
]);
requireTextIncludes(`${runtimeSettingsWriteFeatureDir}/plan.md`, [
  "IAU-runtime-settings-cli-settings-write-contract-v1",
  "Issue #47",
  "Marketplace publication remains disabled"
]);
requireTextIncludes(`${runtimeSettingsWriteFeatureDir}/tasks.md`, [
  "Issue #47",
  "- [x] T001",
  "- [x] T008",
  "- [x] T009",
  "- [x] T012",
  "IAU-runtime-settings-cli-settings-write-contract-v1",
  "Issue #49",
  "[BLOCKED]",
  "T017"
]);
requireTextIncludes(`${runtimeSettingsWriteImportDir}/rtm.csv`, runtimeSettingsWriteExpectedIds);
requireTextIncludes(`${runtimeSettingsWriteImportDir}/srs.md`, [
  "VHS-REQ-537",
  "VHS-REQ-543",
  "runtimeProvider",
  "labviewVersion",
  "labviewBitness"
]);
requireTextIncludes("README.md", [
  "runtime-settings-cli-settings-write-v1",
  "docs/requirements/admissions/runtime-settings-cli-settings-write-v1.json",
  "Issue #47",
  "IAU-runtime-settings-cli-settings-write-contract-v1"
]);
requireTextIncludes("AGENTS.md", [
  "runtime-settings-cli-settings-write-v1",
  "Current Implementation Admission Unit",
  "IAU-runtime-settings-cli-settings-write-contract-v1",
  "008-runtime-settings-cli-validation-readback-v1"
]);
requireTextIncludes("docs/development/copilot-workflow.md", [
  "runtime-settings-cli-settings-write-v1",
  "Issue #47",
  "Issue #49",
  "IAU-runtime-settings-cli-settings-write-contract-v1",
  "runtime settings mutation beyond the admitted provider/version/bitness"
]);

const runtimeSettingsValidateAdmission = readJson(runtimeSettingsValidateAdmissionPath);
requireEqual(runtimeSettingsValidateAdmission.schema, "vi-history/requirements-admission@v1", "runtime settings validate admission schema");
requireEqual(runtimeSettingsValidateAdmission.sliceId, runtimeSettingsValidateSliceId, "runtime settings validate admission sliceId");
requireEqual(runtimeSettingsValidateAdmission.state, "implemented", "runtime settings validate admission state");
requireEqual(runtimeSettingsValidateAdmission.targetProduct, "vi-history", "runtime settings validate admission targetProduct");
requireEqual(runtimeSettingsValidateAdmission.targetFeature, runtimeSettingsValidateSliceId, "runtime settings validate admission targetFeature");
requireEqual(runtimeSettingsValidateAdmission.sourceBaselineTag, "v1.3.16", "runtime settings validate admission sourceBaselineTag");
requireEqual(runtimeSettingsValidateAdmission.sourceCommit, "72c9a700da501eba23e16e3d35b385ec8d8d6808", "runtime settings validate admission sourceCommit");
requireEqual(runtimeSettingsValidateAdmission.governedAdmissionCommit, "f9b2cb76f6de98e97354d1fb8e5c81e3adc8f6e2", "runtime settings validate admission governedAdmissionCommit");
requireEqual(runtimeSettingsValidateAdmission.implementationSharing, "none", "runtime settings validate admission implementationSharing");
requireMarketplacePosture(runtimeSettingsValidateAdmission, "runtime settings validate admission");
requireEqual(runtimeSettingsValidateAdmission.currentImplementationAdmissionUnit, null, "runtime settings validate currentImplementationAdmissionUnit");
requireArrayEqual(runtimeSettingsValidateAdmission.completedSpecScope, ["T001", "T002", "T003", "T004", "T005", "T006", "T007", "T008"], "runtime settings validate completedSpecScope");
requireArrayEqual(runtimeSettingsValidateAdmission.completedImplementationScope, ["T009", "T010", "T011", "T012"], "runtime settings validate completedImplementationScope");
requireArrayEqual(runtimeSettingsValidateAdmission.admittedImplementationScope, [], "runtime settings validate admittedImplementationScope");
requireArrayEqual(runtimeSettingsValidateAdmission.blockedImplementationScope, ["T013", "T014", "T015", "T016", "T017", "T018"], "runtime settings validate blockedImplementationScope");
requireEqual(runtimeSettingsValidateAdmission.preImplementationPreflight?.iauId, "IAU-runtime-settings-cli-validation-readback-contract-v1", "runtime settings validate preImplementationPreflight iauId");
requireEqual(runtimeSettingsValidateAdmission.preImplementationPreflight?.status, "pass", "runtime settings validate preImplementationPreflight status");
requireEqual(runtimeSettingsValidateAdmission.preImplementationPreflight?.implementationStartAllowed, true, "runtime settings validate preImplementationPreflight implementationStartAllowed");
requireEqual(runtimeSettingsValidateAdmission.preImplementationPreflight?.record, runtimeSettingsValidatePreflightPath, "runtime settings validate preImplementationPreflight record");
requireEqual(runtimeSettingsValidateAdmission.implementationCloseout?.status, "pass", "runtime settings validate implementationCloseout status");
requireArrayEqual(runtimeSettingsValidateAdmission.implementationCloseout?.completedTasks, ["T009", "T010", "T011", "T012"], "runtime settings validate implementationCloseout completedTasks");
requireFile(`docs/requirements/admissions/${runtimeSettingsValidateSliceId}.md`);

const runtimeSettingsValidateAdmissionUnit = (runtimeSettingsValidateAdmission.implementationAdmissionUnits ?? [])
  .find((unit) => unit?.iauId === "IAU-runtime-settings-cli-validation-readback-contract-v1");
requireEqual(runtimeSettingsValidateAdmissionUnit?.state, "implemented", "runtime settings validate admission unit state");
requireEqual(runtimeSettingsValidateAdmissionUnit?.preflightRecord, runtimeSettingsValidatePreflightPath, "runtime settings validate admission unit preflightRecord");

const runtimeSettingsValidateIau = readJson(runtimeSettingsValidateIauPath);
requireEqual(runtimeSettingsValidateIau.schema, "vi-history/implementation-admission-unit@v1", "runtime settings validate IAU schema");
requireEqual(runtimeSettingsValidateIau.iauId, "IAU-runtime-settings-cli-validation-readback-contract-v1", "runtime settings validate IAU id");
requireEqual(runtimeSettingsValidateIau.state, "implemented", "runtime settings validate IAU state");
requireEqual(runtimeSettingsValidateIau.parentSliceId, runtimeSettingsValidateSliceId, "runtime settings validate IAU parentSliceId");
requireArrayEqual(runtimeSettingsValidateIau.admittedTasks, ["T009", "T010", "T011", "T012"], "runtime settings validate IAU admittedTasks");
requireArrayEqual(runtimeSettingsValidateIau.blockedTasks, ["T013", "T014", "T015", "T016", "T017", "T018"], "runtime settings validate IAU blockedTasks");
requireEqual(runtimeSettingsValidateIau.implementationSharing, "none", "runtime settings validate IAU implementationSharing");
requireMarketplacePosture(runtimeSettingsValidateIau, "runtime settings validate IAU");
requireEqual(runtimeSettingsValidateIau.preImplementationPreflight?.status, "pass", "runtime settings validate IAU preImplementationPreflight status");
requireEqual(runtimeSettingsValidateIau.preImplementationPreflight?.record, "IAU-runtime-settings-cli-validation-readback-contract-v1-preflight-v1.json", "runtime settings validate IAU preImplementationPreflight record");
requireEqual(runtimeSettingsValidateIau.preImplementationPreflight?.implementationStartAllowed, true, "runtime settings validate IAU preImplementationPreflight implementationStartAllowed");
requireEqual(runtimeSettingsValidateIau.implementationCloseout?.status, "pass", "runtime settings validate IAU implementationCloseout status");
requireArrayEqual(runtimeSettingsValidateIau.implementationCloseout?.completedTasks, ["T009", "T010", "T011", "T012"], "runtime settings validate IAU implementationCloseout completedTasks");
requireFile(`docs/requirements/admissions/${runtimeSettingsValidateSliceId}/IAU-runtime-settings-cli-validation-readback-contract-v1.md`);

const runtimeSettingsValidatePreflight = readJson(runtimeSettingsValidatePreflightPath);
requireEqual(runtimeSettingsValidatePreflight.schema, "vi-history/implementation-admission-unit-preflight@v1", "runtime settings validate preflight schema");
requireEqual(runtimeSettingsValidatePreflight.iauId, "IAU-runtime-settings-cli-validation-readback-contract-v1", "runtime settings validate preflight iauId");
requireEqual(runtimeSettingsValidatePreflight.status, "pass", "runtime settings validate preflight status");
requireEqual(runtimeSettingsValidatePreflight.implementationStartAllowed, true, "runtime settings validate preflight implementationStartAllowed");
requireEqual(runtimeSettingsValidatePreflight.parentSliceId, runtimeSettingsValidateSliceId, "runtime settings validate preflight parentSliceId");
requireEqual(runtimeSettingsValidatePreflight.implementationSharing, "none", "runtime settings validate preflight implementationSharing");
requireMarketplacePosture(runtimeSettingsValidatePreflight, "runtime settings validate preflight");
requireArrayEqual(runtimeSettingsValidatePreflight.implementationStartScope, ["T009", "T010", "T011", "T012"], "runtime settings validate preflight implementationStartScope");
if (!Array.isArray(runtimeSettingsValidatePreflight.checkResults) || runtimeSettingsValidatePreflight.checkResults.length !== runtimeSettingsValidatePreflight.requiredChecks.length) {
  failures.push("runtime settings validate preflight checkResults: must match requiredChecks length");
} else {
  for (const result of runtimeSettingsValidatePreflight.checkResults) {
    requireEqual(result.status, "pass", `runtime settings validate preflight check result ${result.check}`);
  }
}
requireFile(`docs/requirements/admissions/${runtimeSettingsValidateSliceId}/IAU-runtime-settings-cli-validation-readback-contract-v1-preflight-v1.md`);

const runtimeSettingsValidateManifest = readJson(`${runtimeSettingsValidateImportDir}/manifest.json`);
requireEqual(runtimeSettingsValidateManifest.schema, "vi-history/requirements-import@v1", "runtime settings validate manifest schema");
requireEqual(runtimeSettingsValidateManifest.sliceId, runtimeSettingsValidateSliceId, "runtime settings validate sliceId");
requireEqual(runtimeSettingsValidateManifest.sourceBaselineTag, "v1.3.16", "runtime settings validate sourceBaselineTag");
requireEqual(runtimeSettingsValidateManifest.sourceCommit, "72c9a700da501eba23e16e3d35b385ec8d8d6808", "runtime settings validate sourceCommit");
requireEqual(runtimeSettingsValidateManifest.governedAdmissionCommit, "f9b2cb76f6de98e97354d1fb8e5c81e3adc8f6e2", "runtime settings validate governedAdmissionCommit");
requireEqual(runtimeSettingsValidateManifest.targetProduct, "vi-history", "runtime settings validate targetProduct");
requireEqual(runtimeSettingsValidateManifest.targetFeature, runtimeSettingsValidateSliceId, "runtime settings validate targetFeature");
requireEqual(runtimeSettingsValidateManifest.redactionStatus, "pass", "runtime settings validate redactionStatus");
requireEqual(runtimeSettingsValidateManifest.implementationSharing, "none", "runtime settings validate implementationSharing");
requireEqual(runtimeSettingsValidateManifest.marketplacePublication, "disabled-until-later-adr", "runtime settings validate marketplacePublication");
requireArrayEqual(runtimeSettingsValidateManifest.importedRequirementIds, runtimeSettingsValidateExpectedIds, "runtime settings validate importedRequirementIds");
requireArrayEqual(runtimeSettingsValidateManifest.files, ["syrs.md", "srs.md", "rtm.csv", "test-plan.md"], "runtime settings validate manifest files");

for (const file of runtimeSettingsValidateManifest.files ?? []) {
  requireFile(`${runtimeSettingsValidateImportDir}/${file}`);
}

for (const file of ["spec.md", "plan.md", "tasks.md"]) {
  requireFile(`${runtimeSettingsValidateFeatureDir}/${file}`);
}

requireTextIncludes(`${runtimeSettingsValidateFeatureDir}/spec.md`, [
  "Runtime Settings CLI Validation Readback",
  "VHS-REQ-543",
  "VHS-REQ-546",
  "IAU-runtime-settings-cli-validation-readback-contract-v1",
  "clean-room"
]);
requireTextIncludes(`${runtimeSettingsValidateFeatureDir}/plan.md`, [
  "IAU-runtime-settings-cli-validation-readback-contract-v1",
  "Issue #51",
  "Marketplace publication remains disabled"
]);
requireTextIncludes(`${runtimeSettingsValidateFeatureDir}/tasks.md`, [
  "Issue #51",
  "- [x] T001",
  "- [x] T008",
  "- [x] T009",
  "- [x] T012",
  "IAU-runtime-settings-cli-validation-readback-contract-v1",
  "Issue #53",
  "[BLOCKED]",
  "T018"
]);
requireTextIncludes(`${runtimeSettingsValidateImportDir}/rtm.csv`, runtimeSettingsValidateExpectedIds);
requireTextIncludes(`${runtimeSettingsValidateImportDir}/srs.md`, [
  "VHS-REQ-543",
  "VHS-REQ-546",
  "vihs --validate",
  "runtime-validation outcome"
]);
requireTextIncludes("README.md", [
  "runtime-settings-cli-validation-readback-v1",
  "docs/requirements/admissions/runtime-settings-cli-validation-readback-v1.json",
  "Issue #51",
  "IAU-runtime-settings-cli-validation-readback-contract-v1"
]);
requireTextIncludes("AGENTS.md", [
  "runtime-settings-cli-validation-readback-v1",
  "Current Implementation Admission Unit",
  "none",
  "IAU-runtime-settings-cli-validation-readback-contract-v1",
  "008-runtime-settings-cli-validation-readback-v1"
]);
requireTextIncludes("docs/development/copilot-workflow.md", [
  "runtime-settings-cli-validation-readback-v1",
  "Issue #51",
  "Issue #53",
  "IAU-runtime-settings-cli-validation-readback-contract-v1",
  "validation behavior beyond the admitted pure `vihs --validate` readback"
]);

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("Spec Kit import validation passed.");
