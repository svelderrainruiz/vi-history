# Runtime Settings CLI Validation Proof Admission

State: `implemented`

Issue #55 imports `runtime-settings-cli-validation-proof-v1`, locks the public
Spec Kit feature, and admits
`IAU-runtime-settings-cli-validation-proof-artifact-v1` for T009-T012 only.
Issue #57 implements and closes the admitted IAU.

Machine-readable ledger:
[runtime-settings-cli-validation-proof-v1.json](./runtime-settings-cli-validation-proof-v1.json)

## Imported Requirements

- `VHS-REQ-546`: `vihs --validate` exposes one bounded validation action that
  reports persisted provider/version/bitness truth plus runtime outcome facts.
  This slice admits the proof-artifact portion of that validation surface.

## Implemented IAU

`IAU-runtime-settings-cli-validation-proof-artifact-v1` is implemented for:

- `T009`: add tests proving validation readback facts can be retained as
  structured proof JSON without LabVIEWCLI, Docker, compare execution, or
  runtime orchestration.
- `T010`: add tests proving secret-like environment values are redacted from
  public proof output.
- `T011`: add tests proving deterministic issue-body content points to the MIT
  public authority.
- `T012`: implement the minimum public MIT validation proof artifact contract.

Implementation is complete through Issue #57 for T009-T012 only. No current
IAU remains active.

## Blocked Scope

No-argument interactive selection, compare execution, LabVIEWCLI execution,
Docker orchestration, live-session proof, packaging, Marketplace publication,
and source copying remain blocked.
