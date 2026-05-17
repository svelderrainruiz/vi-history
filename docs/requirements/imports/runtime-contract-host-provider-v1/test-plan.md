# Imported Test Plan Slice: Runtime Contract Host Provider

## Scope

This slice verifies runtime-provider selection, explicit runtime facts,
fail-closed behavior, and public proof intake for the MIT Spec Kit authority.

## Imported Test Signals

| ID | Test Intent | Evidence |
| --- | --- | --- |
| TEST-UNIT-347 | Docker preflight derives bounded expert-provider behavior and fails closed for unsupported combinations. | `tests/unit/comparisonRuntimeLocator.test.ts` |
| TEST-UNIT-354 | `vihs --validate` reports persisted provider, LabVIEW version, and bitness facts. | `tests/unit/localRuntimeSettingsCli.test.ts` |
| TEST-UNIT-392 | Validation proof packets retain selected runtime facts and stable error classification. | `tests/unit/publicFixtureValidation.test.ts` |
| TEST-UNIT-396 | Canonical public fixture validation writes proof JSON and issue body. | `tests/unit/publicFixtureValidation.test.ts` |
| TEST-UNIT-397 | Windows Docker Desktop proof intake rejects non-Windows-container substitutes. | `tests/unit/windowsDockerDesktopProofIntake.test.ts` |
| TEST-DOC-148 | Installed-user docs preserve host-default LabVIEWCLI plus bounded expert Docker wording. | `README.md`, `FIRST-RUN.md`, `TROUBLESHOOTING.md` |
| TEST-DOC-149 | Windows Docker Desktop intake docs preserve the exact admissibility boundary. | `.github/ISSUE_TEMPLATE/windows-docker-desktop-validation.yml` |

## Exit Criteria

- Public docs describe host-native LabVIEWCLI as the installed-user default.
- Docker is described as an explicitly selected bounded expert provider.
- Provider, LabVIEW version, and bitness are retained before execution.
- Unsupported or unavailable bundles fail closed with stable guidance.
- Windows Docker Desktop proof is not inferred from Linux Docker, WSL, host
  provider proof, or reports without proof packets.
