# Command Activation Surface Admission

## State

`command-activation-surface-v1` is `spec-locked`.

Issue #30 imports `VHS-REQ-594` and locks the public Spec Kit feature. This
does not admit implementation.

## Admission Basis

- The public import packet is present.
- The Spec Kit feature has `spec.md`, `plan.md`, and `tasks.md`.
- The import preserves `VHS-REQ-594` without redefining its semantics.
- Command activation stays separate from command handlers and runtime
  execution.
- Implementation sharing remains `none`.
- Marketplace publication remains disabled.

## Completed Spec Scope

- `T001` through `T008`: public import, Spec Kit artifacts, admission records,
  active feature pin, and validation coverage.

## Completed Implementation Scope

None.

## Blocked Work

Manifest implementation (`T009` through `T012`), command handlers,
documentation panel rendering, runtime settings CLI materialization, compare
execution, Docker command execution or orchestration, VSIX packaging,
Marketplace publication, and source copying remain blocked until separately
admitted.

## Future Gate

Future implementation work may start only after a new named IAU has a public
preflight record with `status: pass`.
