# IAU: Runtime Settings CLI Terminal Entrypoint Materialization

`IAU-runtime-settings-cli-terminal-entrypoint-materialization-v1` is
`implementation-admitted` for `runtime-settings-cli-terminal-entrypoint-v1`.

Parent slice: `runtime-settings-cli-terminal-entrypoint-v1`

Preflight:
`IAU-runtime-settings-cli-terminal-entrypoint-materialization-v1-preflight-v1.json`

## Admitted Tasks

- T009: tests for materialized `vihs` terminal entrypoint facts.
- T010: tests for user-scoped terminal-session admission records.
- T011: tests for runtime lookup order and override facts.
- T012: tests for stale or missing launcher fail-closed recovery guidance.
- T013: minimum public MIT materialized-entrypoint contract as pure
  command-surface facts and command plans.

## Blocked Tasks

- T014: raw terminal prompt loops, stdin/TTY handling, or process-level
  no-argument prompt behavior.
- T015: compare execution.
- T016: LabVIEWCLI execution, Docker execution, or Docker orchestration.
- T017: proof-out file writing beyond already admitted proof artifact
  contracts.
- T018: live already-running VS Code session uptake proof or Windows
  PowerShell Marketplace install/bootstrap behavior.
- T019: packaging, Marketplace publication, or source copying from another VI
  History product line.

Implementation must wait until the admission PR merges and a separate handoff
issue is created.
