# IAU: Runtime Settings CLI Settings-Write Contract

State: `implemented`

This IAU implements the first runtime settings CLI settings-write step for
`runtime-settings-cli-settings-write-v1` through Issue #49.

## Admitted Tasks

- `T009`: add tests proving only `viHistorySuite.runtimeProvider`,
  `viHistorySuite.labviewVersion`, and `viHistorySuite.labviewBitness` are
  updated.
- `T010`: add tests proving unrelated settings content is preserved and the
  effective settings target is explicit.
- `T011`: add tests proving comments/trailing commas are handled when admitted
  by the public spec and unsupported target shapes fail closed.
- `T012`: implement the minimum public MIT settings-write contract.

## Blocked Tasks

- `T013`: add `vihs --validate` or runtime validation output.
- `T014`: add no-argument interactive selection or auto-validation.
- `T015`: add compare execution, LabVIEWCLI execution, Docker execution, or
  Docker orchestration.
- `T016`: add live already-running VS Code session uptake proof.
- `T017`: add packaging or Marketplace publication behavior.

## Admission Result

Preflight passed for T009-T012 only. Implementation may start only after this
admission PR merges to `develop` and a separate implementation handoff issue is
created.

## Implementation Result

Issue #49 completed T009-T012 only. No validation, interactive selection,
compare execution, LabVIEWCLI execution, Docker orchestration, live-session
proof, packaging, Marketplace publication, or source-copying behavior was
implemented.

Validation, interactive selection, compare execution, LabVIEWCLI execution,
Docker orchestration, live-session proof, packaging, Marketplace publication,
and source copying remain blocked.
