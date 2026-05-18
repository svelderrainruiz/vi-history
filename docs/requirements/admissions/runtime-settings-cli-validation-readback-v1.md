# Runtime Settings CLI Validation Readback Admission

State: `implementation-admitted`

Issue #51 imports `runtime-settings-cli-validation-readback-v1`, locks the
public Spec Kit feature, and admits
`IAU-runtime-settings-cli-validation-readback-contract-v1` for T009-T012 only.

Machine-readable ledger:
[runtime-settings-cli-validation-readback-v1.json](./runtime-settings-cli-validation-readback-v1.json)

## Imported Requirements

- `VHS-REQ-543`: effective settings target is explicit and settings readback
  does not mutate settings content.
- `VHS-REQ-546`: `vihs --validate` exposes one bounded validation action that
  reports persisted provider/version/bitness truth plus runtime outcome facts
  without reopening picker surfaces.

## Admitted IAU

`IAU-runtime-settings-cli-validation-readback-contract-v1` is admitted for:

- `T009`: add tests proving validation readback reports persisted provider,
  LabVIEW version, LabVIEW bitness, and effective settings target facts without
  mutating settings content.
- `T010`: add tests proving validation readback reports runtime outcome facts
  without LabVIEWCLI, Docker, compare, proof-out, or picker behavior.
- `T011`: add tests proving missing or unsupported persisted settings fail
  closed with stable result fields.
- `T012`: implement the minimum public MIT validation readback contract.

Implementation starts only after this admission PR merges and a separate
implementation handoff issue is created.

## Blocked Scope

No-argument interactive selection, `--proof-out` file generation, compare
execution, LabVIEWCLI execution, Docker execution or orchestration, live
already-running VS Code session uptake proof, VSIX packaging, Marketplace
publication, and source copying remain blocked until separately admitted.
