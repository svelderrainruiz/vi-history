# IAU: Runtime Settings CLI Terminal Prompt Loop

`IAU-runtime-settings-cli-terminal-prompt-loop-v1` is implemented for
`runtime-settings-cli-terminal-prompt-loop-v1`.

Parent slice: `runtime-settings-cli-terminal-prompt-loop-v1`

Preflight:
`IAU-runtime-settings-cli-terminal-prompt-loop-v1-preflight-v1.json`

## Admitted Tasks

- T009: tests for deterministic no-argument `vihs` prompt transcript/state
  behavior.
- T010: tests for Enter-through confirmation and validation handoff.
- T011: tests for guided host selection and fail-closed unsupported host
  paths.
- T012: tests for latest supported NI LabVIEW Docker image selection with no
  Docker bitness choice exposed.
- T013: minimum public MIT terminal prompt-loop contract as pure prompt state
  and output facts.

## Blocked Tasks

- T014: OS-specific raw stdin/TTY process drivers or spawned terminal I/O
  handling.
- T015: compare execution.
- T016: LabVIEWCLI execution, Docker execution, or Docker orchestration.
- T017: proof-out file writing beyond already admitted proof artifact
  contracts.
- T018: live already-running VS Code session uptake proof or Windows
  PowerShell Marketplace install/bootstrap behavior.
- T019: packaging, Marketplace publication, or source copying from another VI
  History product line.

Implementation uses separate handoff Issue #73 and is closed for T009-T013
only.
