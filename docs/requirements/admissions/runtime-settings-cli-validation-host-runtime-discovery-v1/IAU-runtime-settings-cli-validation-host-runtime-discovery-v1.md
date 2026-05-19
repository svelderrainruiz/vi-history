# IAU: Runtime Settings CLI Validation Host Runtime Discovery

IAU ID:
`IAU-runtime-settings-cli-validation-host-runtime-discovery-v1`

Parent slice:
`runtime-settings-cli-validation-host-runtime-discovery-v1`

State: admitted

Admission issue: Issue #118

## Admitted Tasks

T009-T016 are admitted after this admission PR merges and a separate
implementation handoff issue is created.

The admitted implementation is limited to tests and the minimum
`createRuntimeSettingsValidationHostRuntimeDiscovery(input = {})` contract for
bounded public-safe host runtime discovery facts.

## Blocked Tasks

T017-T028 remain blocked. This IAU does not admit raw private path disclosure,
arbitrary filesystem walking, PATH probing, environment probing, existing
compare runtime locator reuse, runtime validation execution, compare execution,
LabVIEWCLI execution, Docker execution, raw terminal process wiring, live
terminal proof, file writes, package/bin publication, launcher/profile
mutation, VSIX packaging, Marketplace work, release automation, or source
copying.

## Gates

- Import packet: present
- Spec Kit feature: present
- Redaction scan: pass
- Bridge artifact validation: pass
- Preflight: pass
- Implementation sharing: none
- Marketplace publication: disabled
