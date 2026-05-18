# Command Activation Surface Admission

## State

`command-activation-surface-v1` is `implementation-admitted` for the first
named manifest-contract IAU.

Issue #30 imports `VHS-REQ-594` and locks the public Spec Kit feature. This
record admits only `IAU-command-activation-manifest-contract-v1` through Issue
#32.

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

## Admitted IAU

`IAU-command-activation-manifest-contract-v1` admits `T009` through `T012`:

- `T009`: add manifest activation-event contract tests.
- `T010`: add contributed command ID and title contract tests.
- `T011`: add package identity and Marketplace-disabled contract tests.
- `T012`: minimally update manifest metadata only after preflight.

The preflight record has `status: pass`, and the implementation start scope is
limited to the manifest contract.

## Completed Implementation Scope

None.

## Blocked Work

Command handlers, documentation panel rendering, runtime settings CLI
materialization, compare execution, Docker command execution or orchestration,
VSIX packaging, Marketplace publication, and source copying remain blocked
until separately admitted.

## Future Gate

Future implementation outside `IAU-command-activation-manifest-contract-v1` may
start only after a new named IAU has a public preflight record with
`status: pass`.
