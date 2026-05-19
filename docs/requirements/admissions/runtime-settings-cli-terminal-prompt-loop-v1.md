# Runtime Settings CLI Terminal Prompt Loop Admission

Issue #71 imports `runtime-settings-cli-terminal-prompt-loop-v1`, locks the
public Spec Kit feature, and admits
`IAU-runtime-settings-cli-terminal-prompt-loop-v1` for T009-T013 only.

Machine-readable ledger:
[runtime-settings-cli-terminal-prompt-loop-v1.json](./runtime-settings-cli-terminal-prompt-loop-v1.json)

## Imported Requirements

- `VHS-REQ-545`: no-argument `vihs` discoverability, governed defaults,
  current bundle reporting, Enter-through confirmation, guided selection, and
  fail-closed unsupported-path guidance.
- `VHS-REQ-546`: validation handoff through the existing public
  `vihs --validate` contract.

## Prerequisites

`runtime-settings-cli-terminal-entrypoint-v1` is implemented and closed. This
admission may reference `VHS-REQ-537` and `VHS-REQ-544` as satisfied
materialized-entrypoint prerequisites, but it does not re-admit that work.

## Admission Result

`IAU-runtime-settings-cli-terminal-prompt-loop-v1` is admitted for:

- `T009`: deterministic no-argument `vihs` prompt transcript from already
  materialized entrypoint facts.
- `T010`: Enter-through confirmation preserving the current governed bundle
  and requesting validation handoff.
- `T011`: guided host selection with fail-closed unsupported host paths.
- `T012`: bounded Docker `2026` / `x64` selection and fail-closed unsupported
  Docker paths.
- `T013`: the minimum public MIT terminal prompt-loop contract as pure prompt
  state and output facts.

Implementation must wait until this admission PR merges and a separate
implementation handoff issue is created.

## Blocked Scope

`T014` through `T019`, OS-specific raw stdin/TTY process drivers, spawned
terminal I/O handling, compare execution, LabVIEWCLI execution, Docker
execution or orchestration, proof-out expansion, live-session proof, Windows
PowerShell Marketplace install/bootstrap, packaging, Marketplace publication,
and source copying remain blocked.
