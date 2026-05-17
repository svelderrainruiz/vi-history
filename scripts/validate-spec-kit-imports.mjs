import fs from "node:fs";
import path from "node:path";

const repoRoot = process.cwd();
const sliceId = "runtime-contract-host-provider-v1";
const featureDir = ".specify/specs/runtime-contract-host-provider-v1";
const importDir = `docs/requirements/imports/${sliceId}`;
const admissionPath = `docs/requirements/admissions/${sliceId}.json`;
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
requireEqual(admission.state, "implementation-admitted", "admission state");
requireEqual(admission.targetProduct, "vi-history", "admission targetProduct");
requireEqual(admission.targetFeature, sliceId, "admission targetFeature");
requireEqual(admission.sourceBaselineTag, "v1.3.16", "admission sourceBaselineTag");
requireEqual(admission.sourceCommit, "31add781bd04cc832d9fb55aa821a69305a91a37", "admission sourceCommit");
requireEqual(admission.implementationSharing, "none", "admission implementationSharing");
requireArrayEqual(admission.admittedImplementationScope, ["T007", "T008", "T009", "T010", "T011"], "admittedImplementationScope");
requireFile(`docs/requirements/admissions/${sliceId}.md`);

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
  "T011"
]);
requireTextIncludes(`${importDir}/rtm.csv`, expectedIds);

if (failures.length > 0) {
  console.error(failures.join("\n"));
  process.exit(1);
}

console.log("Spec Kit import validation passed.");
