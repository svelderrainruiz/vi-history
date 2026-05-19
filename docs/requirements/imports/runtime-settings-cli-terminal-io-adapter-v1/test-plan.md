# Imported Test Plan: Runtime Settings CLI Terminal I/O Adapter

## Scope

This test plan covers the public MIT import for
`runtime-settings-cli-terminal-io-adapter-v1`.

## Verification Items

| Test ID | Requirement IDs | Verification |
| --- | --- | --- |
| TEST-UNIT-RSTIO-001 | VHS-REQ-545 | Prove terminal Enter confirmation adapts supplied input facts into the existing prompt-loop validation handoff. |
| TEST-UNIT-RSTIO-002 | VHS-REQ-545 | Prove guided host terminal selection feeds the already admitted supported host selection contract. |
| TEST-UNIT-RSTIO-003 | VHS-REQ-545 | Prove Docker terminal selection uses the latest supported NI LabVIEW Docker image family without exposing a Docker bitness prompt. |
| TEST-UNIT-RSTIO-004 | VHS-REQ-545 | Prove non-TTY sessions return copyable guidance instead of prompting. |
| TEST-UNIT-RSTIO-005 | VHS-REQ-545 | Prove unsupported input, EOF, cancel, and blocked side-effect paths fail closed without runtime execution. |
| TEST-UNIT-RSTIO-006 | VHS-REQ-546 | Prove validation handoff remains a terminal adapter output fact through the public `vihs --validate` contract without proof-out expansion. |

## Blocked Scope

This test plan does not admit compare execution, LabVIEWCLI execution, Docker
execution or orchestration, proof-out expansion, live-session proof, package/bin
publication, launcher/profile mutation, Marketplace publication, or source
copying.
