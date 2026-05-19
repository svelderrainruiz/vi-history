# Imported SRS: Runtime Settings CLI Terminal Entrypoint

## Functional Requirements

| ID | Requirement | Fit Criterion |
| --- | --- | --- |
| VHS-REQ-537 | The installed-user runtime settings surface must expose `vihs` as a bare terminal command in supported user-scope terminal sessions without hidden path reconstruction, manual profile editing, admin elevation, machine-wide installation doctrine, or a prebuilt external CLI payload. | The public MIT feature defines materialized terminal-entrypoint facts and user-scope admission state without copying implementation source or invoking a runtime process. |
| VHS-REQ-544 | The bare `vihs` terminal entrypoint must make runtime dependency and recovery explicit, including standard VS Code runtime lookup on Windows before global Node fallback or explicit override, and one actionable stale-or-missing launcher recovery instruction. | The public MIT feature defines runtime lookup order, override facts, and stable fail-closed recovery guidance as pure command-surface facts. |
| VHS-REQ-545 | Bare `vihs` must remain discoverable when invoked without arguments, including current runtime bundle reporting and exact copyable next-command guidance. | The public MIT feature allows no-argument discoverability fields but keeps raw stdin/TTY prompt-loop behavior deferred to a later IAU. |
| VHS-REQ-546 | The terminal entrypoint may hand off to the existing public `vihs --validate` contract after a later confirmation flow persists settings. | The public MIT feature records validation handoff semantics while keeping validation execution, prompt-loop confirmation, and proof-out expansion outside the first IAU. |

## Supporting Verification Signal

`TEST-UNIT-345` verifies terminal-facing settings entrypoint preparation and
launcher materialization facts.

`TEST-UNIT-352` verifies the bare terminal entrypoint runtime dependency and
fail-closed recovery guidance.

`TEST-UNIT-353` verifies no-argument discoverability, default settings, current
bundle reporting, copyable next commands, and later interactive selection
semantics.

`TEST-UNIT-354` verifies that validation handoff uses the bounded
`vihs --validate` contract.

`TEST-INTEG-009`, `TEST-INTEG-010`, and `TEST-INTEG-011` remain integration
signals for later proof lanes; they do not admit runtime process execution in
the first MIT IAU.

## Blocked Scope

The first IAU does not admit raw terminal prompt loops, stdin/TTY handling,
compare execution, LabVIEWCLI command execution, Docker command execution or
orchestration, proof-out expansion beyond already admitted contracts,
live-session proof, Windows PowerShell Marketplace install/bootstrap behavior,
VSIX packaging, Marketplace publication, or source copying.
