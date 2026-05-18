# IAU Command Activation Manifest Contract

## State

`IAU-command-activation-manifest-contract-v1` is `implemented`.

Issue #32 is the implementation handoff and closes after the implementation PR
merges.

## Admitted Scope

- `T009`: add manifest activation-event contract tests.
- `T010`: add contributed command ID and title contract tests.
- `T011`: add package identity and Marketplace-disabled contract tests.
- `T012`: minimally update manifest metadata only after preflight.

## Entry Gate

The preflight record has `status: pass` and
`implementationStartAllowed: true`.

## Completed Scope

- `T009`: manifest activation-event contract tests.
- `T010`: contributed command ID and title contract tests.
- `T011`: package identity and Marketplace-disabled contract tests.
- `T012`: minimal manifest metadata.

## Blocked Work

Command handlers, documentation panel rendering, runtime settings CLI
materialization, compare execution, Docker command execution or orchestration,
VSIX packaging, Marketplace publication, and source copying remain blocked
until separately admitted.

## Exit Gate

The implementation PR completes only `T009` through `T012`, keeps blocked scope
blocked, and passes repository validation before Issue #32 closes.
