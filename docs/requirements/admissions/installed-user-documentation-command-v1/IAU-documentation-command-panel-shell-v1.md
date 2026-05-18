# IAU: Documentation Command Panel Shell

State: `implemented`

This IAU implements the first installed-user documentation command step for
`installed-user-documentation-command-v1`.

## Completed Tasks

- `T009`: add tests proving `labviewViHistory.openDocumentation` registers as a
  separate handler from `labviewViHistory.open`.
- `T010`: add tests proving a public-safe bundled documentation manifest/page
  contract exists.
- `T011`: implement the minimum public MIT documentation command panel shell.

## Blocked Tasks

- `T012`: runtime settings CLI materialization.
- `T013`: compare execution.
- `T014`: LabVIEWCLI or Docker execution.
- `T015`: packaging or Marketplace publication behavior.

## Admission Result

Preflight passed for T009-T011 only. Issue #41 completed the implementation
without expanding into blocked scope.

Runtime settings CLI materialization, compare execution, LabVIEWCLI execution,
Docker orchestration, packaging, Marketplace publication, and source copying
remain blocked.
