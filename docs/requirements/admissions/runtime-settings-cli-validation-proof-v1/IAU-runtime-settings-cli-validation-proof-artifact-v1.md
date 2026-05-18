# IAU: Runtime Settings CLI Validation Proof Artifact

State: `implemented`

This IAU implements the first runtime settings CLI validation proof artifact
step for `runtime-settings-cli-validation-proof-v1`.

## Admitted Tasks

- `T009`: add tests proving validation readback facts can be retained as
  structured proof JSON without LabVIEWCLI, Docker, compare execution, or
  runtime orchestration.
- `T010`: add tests proving secret-like environment values are redacted from
  public proof output.
- `T011`: add tests proving deterministic issue-body content points to the MIT
  public authority.
- `T012`: implement the minimum public MIT validation proof artifact contract.

## Blocked Tasks

- `T013`: add no-argument interactive `vihs` selection or confirmation.
- `T014`: add compare execution.
- `T015`: add LabVIEWCLI execution, Docker execution, or Docker orchestration.
- `T016`: add live already-running VS Code session uptake proof.
- `T017`: add packaging or Marketplace publication behavior.
- `T018`: add source copying from another VI History product line.

## Preflight

Preflight passed for T009-T012 only before implementation started from Issue
#57.

Interactive selection, compare execution, LabVIEWCLI execution, Docker
orchestration, live-session proof, packaging, Marketplace publication, and
source copying remain blocked.

## Closeout

Issue #57 completed T009-T012. No current IAU remains active for this slice.
