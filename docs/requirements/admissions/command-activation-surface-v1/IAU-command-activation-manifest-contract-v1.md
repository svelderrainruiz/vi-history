# IAU Command Activation Manifest Contract

## State

`IAU-command-activation-manifest-contract-v1` is
`implementation-admitted`.

Issue #32 is the implementation handoff. It may start only after this
admission record and its preflight are merged to `develop`.

## Admitted Scope

- `T009`: add manifest activation-event contract tests.
- `T010`: add contributed command ID and title contract tests.
- `T011`: add package identity and Marketplace-disabled contract tests.
- `T012`: minimally update manifest metadata only after preflight.

## Entry Gate

The preflight record has `status: pass` and
`implementationStartAllowed: true`.

## Blocked Work

Command handlers, documentation panel rendering, runtime settings CLI
materialization, compare execution, Docker command execution or orchestration,
VSIX packaging, Marketplace publication, and source copying remain blocked
until separately admitted.

## Exit Gate

The implementation PR must complete only `T009` through `T012`, keep blocked
scope blocked, and pass repository validation before Issue #32 closes.
