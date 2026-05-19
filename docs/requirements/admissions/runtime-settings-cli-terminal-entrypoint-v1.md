# Runtime Settings CLI Terminal Entrypoint Admission

Issue #65 imports `runtime-settings-cli-terminal-entrypoint-v1`, locks the
public Spec Kit feature, and admits
`IAU-runtime-settings-cli-terminal-entrypoint-materialization-v1` for T009-T013
only.

Machine-readable ledger:
[runtime-settings-cli-terminal-entrypoint-v1.json](./runtime-settings-cli-terminal-entrypoint-v1.json)

## Imported Requirements

- `VHS-REQ-537`: bare `vihs` terminal entrypoint and user-scope admission
  without hidden path reconstruction, profile editing, admin elevation,
  machine-wide install doctrine, or a prebuilt external CLI payload.
- `VHS-REQ-544`: runtime dependency lookup and recovery facts for the bare
  terminal entrypoint.
- `VHS-REQ-545`: no-argument discoverability facts, current bundle reporting,
  and copyable next-command guidance.
- `VHS-REQ-546`: validation handoff through the existing public
  `vihs --validate` contract.

## Admission Result

`IAU-runtime-settings-cli-terminal-entrypoint-materialization-v1` is admitted
for:

- `T009`: materialized `vihs` terminal entrypoint facts.
- `T010`: user-scoped terminal-session admission records.
- `T011`: runtime lookup order and override facts.
- `T012`: stale or missing launcher fail-closed recovery guidance.
- `T013`: the minimum public MIT materialized-entrypoint contract as pure
  command-surface facts and command plans.

Implementation must wait until this admission PR merges and a separate
implementation handoff issue is created.

## Blocked Scope

`T014` through `T019`, raw prompt loops, compare execution, LabVIEWCLI
execution, Docker execution or orchestration, proof-out expansion,
live-session proof, Windows PowerShell Marketplace install/bootstrap,
packaging, Marketplace publication, and source copying remain blocked.
