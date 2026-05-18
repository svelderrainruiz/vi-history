# Command Handler Entrypoint Shell Admission

## State

`command-handler-entrypoint-shell-v1` is `implemented`. The named entrypoint-shell
IAU (`IAU-command-handler-entrypoint-shell-v1`) is closed. No current IAU is
active for this slice.

Issue #36 implemented `IAU-command-handler-entrypoint-shell-v1` and is closed.
It must not be reused for new implementation. Future work requires a new named
IAU with a public preflight record.

## Admission Basis

- The public import packet is present.
- The Spec Kit feature has `spec.md`, `plan.md`, and `tasks.md`.
- The import preserves `VHS-REQ-082`, `VHS-REQ-083`, and `VHS-REQ-594`
  without redefining their semantics.
- The governed bridge-readiness record split T013 from documentation and
  runtime-settings work.
- Implementation sharing remains `none`.
- Marketplace publication remains disabled.

## Completed Spec Scope

- `T001` through `T008`: public import, Spec Kit artifacts, admission records,
  active feature pin, and validation coverage.

## Completed IAU

`IAU-command-handler-entrypoint-shell-v1` implemented and closed:

- `T009`: add tests proving extension activation registers the admitted
  command entrypoint shell. ✓
- `T010`: add tests proving handler registration does not initialize Git,
  LabVIEWCLI, Docker, packaging, or Marketplace behavior. ✓
- `T011`: implement the minimum public MIT entrypoint shell after preflight. ✓

The preflight record had `status: pass`. The closeout is recorded in
`IAU-command-handler-entrypoint-shell-v1.json`.

## Blocked Work

Documentation panel rendering, runtime settings CLI materialization, compare
execution, Docker command execution or orchestration, VSIX packaging,
Marketplace publication, and source copying remain blocked until separately
admitted.

## Future Gate

Future implementation outside `IAU-command-handler-entrypoint-shell-v1` may
start only after a new named IAU has a public preflight record with
`status: pass`.

