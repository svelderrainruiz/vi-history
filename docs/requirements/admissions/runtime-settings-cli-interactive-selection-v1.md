# Runtime Settings CLI Interactive Selection Admission

Issue #60 imports `runtime-settings-cli-interactive-selection-v1`, locks the
public Spec Kit feature, and admits
`IAU-runtime-settings-cli-interactive-selection-contract-v1` for T009-T013
only.

Machine-readable record:
[runtime-settings-cli-interactive-selection-v1.json](./runtime-settings-cli-interactive-selection-v1.json)

## State

- Slice state: `implementation-admitted`
- Current IAU:
  `IAU-runtime-settings-cli-interactive-selection-contract-v1`
- Admission issue: #60
- Implementation handoff issue: to be created after this admission PR merges
- Marketplace publication: disabled
- Implementation sharing: none

## Admitted Work

`IAU-runtime-settings-cli-interactive-selection-contract-v1` admits only:

- tests for bare `vihs` default seeding and current bundle reporting
- tests for Enter-through confirmation and validation readback handoff facts
- tests for guided host selection and fail-closed unsupported host paths
- tests for Docker 2026 x64 selection bounds
- the minimum pure interactive-selection contract as selection state and output
  facts

## Blocked Work

The following remain blocked until separately admitted:

- terminal process prompt loops, raw stdin handling, or terminal UI wiring
- proof-out file writing beyond the existing pure proof artifact contract
- compare execution
- LabVIEWCLI command execution
- Docker command execution or orchestration
- live already-running VS Code session uptake proof
- packaging or Marketplace publication
- source copying from another VI History product line
