# Implementation Admission Unit: Runtime Settings CLI Validation Plan-Only

`IAU-runtime-settings-cli-validation-plan-only-v1` is admitted for
`runtime-settings-cli-validation-plan-only-v1`.

Parent slice: `runtime-settings-cli-validation-plan-only-v1`

Preflight:
`IAU-runtime-settings-cli-validation-plan-only-v1-preflight-v1.json`

## Admitted Tasks

- T009: accepted `validate-plan-only` request mode tests.
- T010: ready validation facts and supported proof-out target prerequisite
  tests.
- T011: proof artifact and proof-out adapter composition tests without file
  emission.
- T012: planned `vihs-validation-proof.json` and
  `vihs-validation-issue.md` artifact facts tests.
- T013: no file writes, filesystem adapter calls, or proof-out writer calls
  tests.
- T014: missing facts, unsupported target, and malformed input fail-closed
  tests.
- T015: deterministic guidance and blocked side-effect tests.
- T016: minimum pure plan-only command-result branch implementation.

## Blocked Tasks

- T017: call the proof-out file-emission writer or write proof files for
  plan-only.
- T018: runtime locator invocation, OS inspection, or private path discovery.
- T019: runtime validation execution.
- T020: compare execution.
- T021: LabVIEWCLI execution.
- T022: Docker command execution or Docker orchestration.
- T023: raw terminal process wiring or live terminal proof.
- T024: package/bin publication, VSIX packaging, Marketplace publication,
  release automation, or launcher/profile mutation.
- T025: source copying from another VI History product line.
- T026: implementation beyond plan-only without a separate public IAU.

Issue #99 is the admission issue and must not be reused for implementation.
A separate implementation handoff issue must be created after the admission PR
merges.
