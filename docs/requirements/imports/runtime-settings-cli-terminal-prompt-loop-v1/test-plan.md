# Imported Test Plan: Runtime Settings CLI Terminal Prompt Loop

## Scope

This test plan covers the public MIT import for
`runtime-settings-cli-terminal-prompt-loop-v1`.

## Verification Items

| Test ID | Requirement IDs | Verification |
| --- | --- | --- |
| TEST-UNIT-RSTPROMPT-001 | VHS-REQ-545 | Prove no-argument `vihs` produces a deterministic prompt transcript from already materialized entrypoint facts. |
| TEST-UNIT-RSTPROMPT-002 | VHS-REQ-545 | Prove Enter-through confirmation preserves the current governed provider/platform/version/bitness bundle and requests validation handoff. |
| TEST-UNIT-RSTPROMPT-003 | VHS-REQ-545 | Prove guided host selection accepts supported local host choices and fails closed for unsupported years, host/platform mismatches, or missing selected bitness. |
| TEST-UNIT-RSTPROMPT-004 | VHS-REQ-545 | Prove Docker selection remains bounded to `2026` / `x64` and fails closed for unsupported Docker years or bitness values. |
| TEST-UNIT-RSTPROMPT-005 | VHS-REQ-546 | Prove validation handoff remains a prompt-loop output fact through the public `vihs --validate` contract without runtime execution or proof-out expansion. |

## Blocked Scope

This test plan does not admit OS-specific raw stdin/TTY process drivers,
spawned terminal I/O handling, compare execution, LabVIEWCLI execution, Docker
execution or orchestration, proof-out expansion, live-session proof, Windows
PowerShell Marketplace install/bootstrap, VSIX packaging, Marketplace
publication, or source copying.
