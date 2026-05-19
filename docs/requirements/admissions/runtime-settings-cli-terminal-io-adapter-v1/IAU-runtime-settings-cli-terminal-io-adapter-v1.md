# Implementation Admission Unit: Runtime Settings CLI Terminal I/O Adapter

`IAU-runtime-settings-cli-terminal-io-adapter-v1` is admitted for
`runtime-settings-cli-terminal-io-adapter-v1`.

Parent slice: `runtime-settings-cli-terminal-io-adapter-v1`

Pre-implementation preflight:
`IAU-runtime-settings-cli-terminal-io-adapter-v1-preflight-v1.json`

## Admitted Tasks

- T009 terminal Enter confirmation adapter tests
- T010 guided host terminal selection adapter tests
- T011 Docker latest-image provider selection adapter tests with no Docker
  bitness prompt
- T012 non-TTY copyable guidance tests
- T013 unsupported input, EOF, cancel, and blocked side-effect tests
- T014 minimum pure terminal I/O adapter contract

## Blocked Tasks

T015-T023 remain blocked until a separate public admission record exists.
Blocked work includes compare execution, LabVIEWCLI execution, Docker
execution or orchestration, proof-out expansion, live-session proof,
package/bin publication, launcher/profile mutation, Marketplace publication,
and source copying.
