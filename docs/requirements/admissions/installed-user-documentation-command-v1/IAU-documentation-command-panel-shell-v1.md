# IAU: Documentation Command Panel Shell

State: `implementation-admitted`

This IAU admits the first installed-user documentation command implementation
step for `installed-user-documentation-command-v1`.

## Admitted Tasks

- `T009`: add tests proving `labviewViHistory.openDocumentation` registers as a
  separate handler from `labviewViHistory.open`.
- `T010`: add tests proving a public-safe bundled documentation manifest/page
  contract exists.
- `T011`: implement the minimum public MIT documentation command panel shell
  after preflight.

## Blocked Tasks

- `T012`: runtime settings CLI materialization.
- `T013`: compare execution.
- `T014`: LabVIEWCLI or Docker execution.
- `T015`: packaging or Marketplace publication behavior.

## Admission Result

Preflight passes for T009-T011 only. Implementation must not start until this
admission PR merges to `develop` and a separate implementation handoff issue is
opened.

Runtime settings CLI materialization, compare execution, LabVIEWCLI execution,
Docker orchestration, packaging, Marketplace publication, and source copying
remain blocked.
