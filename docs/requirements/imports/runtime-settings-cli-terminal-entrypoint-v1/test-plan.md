# Imported Test Plan: Runtime Settings CLI Terminal Entrypoint

## Scope

This test plan covers the public MIT import for
`runtime-settings-cli-terminal-entrypoint-v1`.

## Verification Items

| Test ID | Requirement IDs | Verification |
| --- | --- | --- |
| TEST-UNIT-RSTERMINAL-001 | VHS-REQ-537 | Prove a materialized bare `vihs` terminal entrypoint is represented without hidden path reconstruction, profile editing, admin elevation, machine-wide install doctrine, or a prebuilt external CLI payload. |
| TEST-UNIT-RSTERMINAL-002 | VHS-REQ-537 | Prove supported terminal-session admission records stay user-scoped and expose the intended entrypoint state. |
| TEST-UNIT-RSTERMINAL-003 | VHS-REQ-544 | Prove runtime lookup and recovery facts prefer the standard VS Code runtime on Windows before global Node fallback or explicit override. |
| TEST-UNIT-RSTERMINAL-004 | VHS-REQ-544 | Prove stale or missing launchers fail closed with one stable actionable recovery instruction. |
| TEST-UNIT-RSTERMINAL-005 | VHS-REQ-545 | Prove no-argument discoverability facts can report the current runtime bundle and exact copyable next commands without raw prompt-loop behavior. |
| TEST-UNIT-RSTERMINAL-006 | VHS-REQ-546 | Prove validation handoff remains a public contract reference and does not add validation execution or proof-out expansion in the first IAU. |

## Blocked Scope

This test plan does not admit raw terminal prompt loops, compare execution,
LabVIEWCLI execution, Docker execution or orchestration, proof-out expansion,
live-session proof, Windows PowerShell Marketplace install/bootstrap, VSIX
packaging, Marketplace publication, or source copying.
