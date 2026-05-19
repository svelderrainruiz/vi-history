# Runtime Settings CLI Interactive Selection Admission

Issue #60 imports `runtime-settings-cli-interactive-selection-v1`, locks the
public Spec Kit feature, and admits
`IAU-runtime-settings-cli-interactive-selection-contract-v1` for T009-T013
only. Issue #62 implements and closes that IAU.

Machine-readable record:
[runtime-settings-cli-interactive-selection-v1.json](./runtime-settings-cli-interactive-selection-v1.json)

## State

- Slice state: `implemented`
- Current IAU: none
- Admission issue: #60
- Implementation handoff issue: #62
- Marketplace publication: disabled
- Implementation sharing: none

## Implemented Work

`IAU-runtime-settings-cli-interactive-selection-contract-v1` implements only:

- tests for bare `vihs` default seeding and current bundle reporting
- tests for Enter-through confirmation and validation readback handoff facts
- tests for guided host selection and fail-closed unsupported host paths
- tests for latest supported NI LabVIEW Docker image selection with no Docker
  bitness choice exposed
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
