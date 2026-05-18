# IAU: Runtime Settings CLI Interactive Selection Contract

`IAU-runtime-settings-cli-interactive-selection-contract-v1` is
`implementation-admitted` for the MIT authority.

Parent slice: `runtime-settings-cli-interactive-selection-v1`

Preflight record:
`IAU-runtime-settings-cli-interactive-selection-contract-v1-preflight-v1.json`

## Admitted Tasks

- T009: tests for default seeding and current bundle reporting
- T010: tests for Enter-through confirmation and validation readback handoff
- T011: tests for guided host selection and fail-closed unsupported host paths
- T012: tests for Docker 2026 x64 selection bounds
- T013: minimum pure interactive-selection contract

## Required Handoff

Implementation must wait until this admission PR merges and a separate
implementation handoff issue is created. Issue #60 is an admission issue and
must not be reused for implementation.

## Blocked Tasks

T014-T019 remain blocked: terminal process prompt loops, compare execution,
LabVIEWCLI execution, Docker execution or orchestration, proof-out expansion,
live-session proof, packaging, Marketplace publication, and source copying.
