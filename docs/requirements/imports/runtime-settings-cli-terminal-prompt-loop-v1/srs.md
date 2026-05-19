# Imported SRS: Runtime Settings CLI Terminal Prompt Loop

## Functional Requirements

| ID | Requirement | Fit Criterion |
| --- | --- | --- |
| VHS-REQ-545 | Bare `vihs` must remain discoverable when invoked without arguments, including governed default settings, current host runtime bundle reporting, exact copyable next-command guidance, Enter-through confirmation, guided supported host provider/platform/version/bitness selection, and Docker provider selection through the latest supported NI LabVIEW Docker image family without exposing a Docker bitness choice. | The public MIT feature defines deterministic prompt transcript and state facts for no-argument `vihs` without adding OS-specific terminal I/O drivers or runtime execution. |
| VHS-REQ-546 | The no-argument confirmation flow may hand off to the existing bounded `vihs --validate` contract after settings are confirmed. | The public MIT feature defines validation handoff as a prompt-loop output fact while keeping runtime validation execution and proof-out expansion outside this IAU. |

## Prerequisite Requirements

`VHS-REQ-537` and `VHS-REQ-544` are prerequisites satisfied by
`runtime-settings-cli-terminal-entrypoint-v1`. This slice may reference the
materialized `vihs` entrypoint and explicit runtime recovery facts, but it does
not re-import or reimplement that materialization work.

## Supporting Verification Signal

`TEST-UNIT-353` verifies no-argument discoverability, default settings, current
bundle reporting, copyable next commands, Enter-through confirmation, guided
selection, latest supported NI LabVIEW Docker image selection without a Docker
bitness choice, and fail-closed unsupported-path guidance.

`TEST-UNIT-354` verifies that validation handoff uses the bounded
`vihs --validate` contract after confirmation without reopening path-picking or
a panel-side provider picker.

## Blocked Scope

This IAU does not admit OS-specific raw stdin/TTY process drivers, spawned
terminal I/O handling, compare execution, LabVIEWCLI command execution, Docker
command execution or orchestration, proof-out expansion beyond already admitted
contracts, live-session proof, Windows PowerShell Marketplace install/bootstrap
behavior, VSIX packaging, Marketplace publication, or source copying.
