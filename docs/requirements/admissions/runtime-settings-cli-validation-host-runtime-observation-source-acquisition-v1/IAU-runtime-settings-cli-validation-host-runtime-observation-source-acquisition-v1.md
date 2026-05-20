# IAU: Runtime Settings CLI Validation Host Runtime Observation Source Acquisition

IAU:
`IAU-runtime-settings-cli-validation-host-runtime-observation-source-acquisition-v1`

Parent slice:
`runtime-settings-cli-validation-host-runtime-observation-source-acquisition-v1`

State: admitted

Admission issue: Issue #148

Implementation handoff issue: Created after admission PR merge

## Admitted Tasks

T009-T016 are admitted:

- tests for selected host facts and bounded source acquisition
- tests for Windows registry-view acquisition dependency sanitization
- tests for Linux documented-root acquisition dependency sanitization
- tests for Windows 2026 x64 mixed-bitness source facts
- tests for fail-closed malformed, unsupported, ambiguous, incompatible,
  contaminated, dependency-error, raw-registry, and private-path acquisition
  facts
- tests for composition into source adapter, observation, discovery, preflight,
  and validation command contracts
- tests for deterministic blocked side effects
- minimum source acquisition implementation

## Blocked Tasks

T017-T030 remain blocked. They include raw path retention, raw registry output
retention, arbitrary filesystem walking, broad PATH or environment probing,
compare runtime locator reuse, runtime validation execution, compare execution,
LabVIEWCLI execution, Docker execution or orchestration, terminal process
wiring, live proof, proof-out expansion, file writes, package/bin publication,
VSIX packaging changes, Marketplace publication, release automation,
launcher/profile mutation, Docker image inspection or container source
discovery, and source copying.

## Entry Gate

Implementation may start only after the admission PR merges and a separate
implementation handoff issue is created. Issue #148 must not be reused for
implementation.
