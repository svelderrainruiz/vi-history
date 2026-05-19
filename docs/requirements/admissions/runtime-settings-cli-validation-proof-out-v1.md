# Requirements Admission: Runtime Settings CLI Validation Proof-Out Adapter

Issue #81 imports `runtime-settings-cli-validation-proof-out-v1`, locks the
public Spec Kit feature, and admits
`IAU-runtime-settings-cli-validation-proof-out-v1` for T009-T014 only. Issue
#83 implements and closes that IAU for T009-T014 only.

Machine-readable ledger:
[runtime-settings-cli-validation-proof-out-v1.json](./runtime-settings-cli-validation-proof-out-v1.json)

## Imported Scope

- Public import:
  `docs/requirements/imports/runtime-settings-cli-validation-proof-out-v1/manifest.json`
- Spec Kit feature:
  `.specify/specs/runtime-settings-cli-validation-proof-out-v1/`
- Imported requirement ID: `VHS-REQ-546`
- Prerequisite requirement IDs: `VHS-REQ-537`, `VHS-REQ-544`,
  `VHS-REQ-545`
- Supporting test signal: `TEST-UNIT-392`

## Admitted IAU

`IAU-runtime-settings-cli-validation-proof-out-v1` is implemented for:

- T009: proof-out request and artifact filename tests.
- T010: deterministic proof JSON and issue Markdown tests.
- T011: missing validation/proof facts fail-closed tests.
- T012: unsupported proof-out target fail-closed tests.
- T013: non-interactive guidance and blocked side-effect tests.
- T014: the minimum pure validation proof-out adapter implementation.

Issue #83 is the completed implementation handoff issue. Issue #81 is an
admission issue and must not be reused for implementation.

## Blocked Scope

Runtime validation execution, compare execution, LabVIEWCLI execution, Docker
command execution or orchestration, live terminal proof, package/bin
publication, launcher/profile mutation, Marketplace publication, and source
copying remain blocked.
