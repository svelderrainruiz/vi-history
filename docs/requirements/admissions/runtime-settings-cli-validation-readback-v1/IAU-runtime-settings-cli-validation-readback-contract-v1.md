# IAU: Runtime Settings CLI Validation Readback Contract

State: `implementation-admitted`

This IAU admits the first runtime settings CLI validation readback step for
`runtime-settings-cli-validation-readback-v1`.

## Admitted Tasks

- `T009`: add tests proving validation readback reports persisted provider,
  LabVIEW version, LabVIEW bitness, and effective settings target facts without
  mutating settings content.
- `T010`: add tests proving validation readback reports runtime outcome facts
  without LabVIEWCLI, Docker, compare, proof-out, or picker behavior.
- `T011`: add tests proving missing or unsupported persisted settings fail
  closed with stable result fields.
- `T012`: implement the minimum public MIT validation readback contract.

## Blocked Tasks

- `T013`: add no-argument interactive `vihs` selection or confirmation.
- `T014`: add `--proof-out` file generation.
- `T015`: add compare execution, LabVIEWCLI execution, Docker execution, or
  Docker orchestration.
- `T016`: add live already-running VS Code session uptake proof.
- `T017`: add packaging or Marketplace publication behavior.
- `T018`: add source copying from another VI History product line.

## Admission Result

Preflight passed for T009-T012 only. Implementation may start only after this
admission PR merges to `develop` and a separate implementation handoff issue is
created.

Interactive selection, proof-out file generation, compare execution, LabVIEWCLI
execution, Docker orchestration, live-session proof, packaging, Marketplace
publication, and source copying remain blocked.
