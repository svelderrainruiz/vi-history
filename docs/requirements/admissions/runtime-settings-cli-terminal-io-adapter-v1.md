# Admission: Runtime Settings CLI Terminal I/O Adapter

Issue #77 imports `runtime-settings-cli-terminal-io-adapter-v1`, locks the
public Spec Kit feature, and admits
`IAU-runtime-settings-cli-terminal-io-adapter-v1` for T009-T014 only.

Machine-readable admission record:
[runtime-settings-cli-terminal-io-adapter-v1.json](./runtime-settings-cli-terminal-io-adapter-v1.json)

## Public Import

- Import manifest:
  `docs/requirements/imports/runtime-settings-cli-terminal-io-adapter-v1/manifest.json`
- Spec Kit feature:
  `.specify/specs/runtime-settings-cli-terminal-io-adapter-v1/`
- Imported requirement IDs: `VHS-REQ-545`, `VHS-REQ-546`
- Prerequisite requirement IDs: `VHS-REQ-537`, `VHS-REQ-544`
- Supporting test IDs: `TEST-UNIT-353`, `TEST-UNIT-354`

## Implementation Admission

`IAU-runtime-settings-cli-terminal-io-adapter-v1` is admitted for:

- T009 terminal Enter confirmation adapter tests
- T010 guided host terminal selection adapter tests
- T011 Docker latest-image provider selection adapter tests with no Docker
  bitness prompt
- T012 non-TTY copyable guidance tests
- T013 unsupported input, EOF, cancel, and blocked side-effect tests
- T014 minimum pure terminal I/O adapter contract

Implementation must wait for this admission PR to merge and then use a
separate implementation handoff issue.

## Blocked Scope

This admission does not admit compare execution, LabVIEWCLI execution, Docker
execution or orchestration, proof-out expansion, live-session proof,
package/bin publication, launcher/profile mutation, Marketplace publication, or
source copying.
