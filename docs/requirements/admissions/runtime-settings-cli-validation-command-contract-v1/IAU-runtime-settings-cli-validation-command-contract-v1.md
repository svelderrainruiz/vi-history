# Implementation Admission Unit: Runtime Settings CLI Validation Command Contract

`IAU-runtime-settings-cli-validation-command-contract-v1` is admitted for
`runtime-settings-cli-validation-command-contract-v1`.

Parent slice: `runtime-settings-cli-validation-command-contract-v1`

Preflight:
`IAU-runtime-settings-cli-validation-command-contract-v1-preflight-v1.json`

## Admitted Tasks

- T009: ready `vihs --validate` command composition tests.
- T010: missing or invalid persisted settings fail-closed tests.
- T011: missing runtime selection facts fail-before-ready tests.
- T012: unknown runtime blocked-reason fallback tests.
- T013: proof-out target composition tests through exactly
  `vihs-validation-proof.json` and `vihs-validation-issue.md`.
- T014: no proof-out target means no file writes tests.
- T015: unsupported proof-out target and I/O failure tests.
- T016: deterministic copyable non-interactive guidance tests.
- T017: blocked side-effect tests.
- T018: minimum pure validation command-result contract implementation.

## Blocked Tasks

- T019: OS inspection, runtime locator invocation, or private path discovery.
- T020: runtime validation execution.
- T021: compare execution.
- T022: LabVIEWCLI execution.
- T023: Docker command execution or Docker orchestration.
- T024: raw terminal process wiring or live terminal proof.
- T025: package/bin publication, VSIX packaging, Marketplace publication,
  release automation, or launcher/profile mutation.
- T026: source copying from another VI History product line.
- T027: `validate-plan-only` without a separate public IAU.

Issue #93 is the admission issue and must not be reused for implementation.
Create a separate implementation handoff issue after the admission PR merges.
