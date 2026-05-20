# IAU: Runtime Settings CLI Validation Host Runtime Observation Source Adapter

IAU:
`IAU-runtime-settings-cli-validation-host-runtime-observation-source-adapter-v1`

Parent slice:
`runtime-settings-cli-validation-host-runtime-observation-source-adapter-v1`

State: admitted

Admission issue: Issue #142

Implementation handoff issue: create after admission PR merges

## Admitted Tasks

T009-T016 are admitted:

- tests for selected host facts and bounded source adaptation
- tests for Windows registry-view source fact sanitization
- tests for Linux documented-root source fact sanitization
- tests for Windows 2026 x64 mixed-bitness source facts
- tests for fail-closed malformed, unsupported, ambiguous, incompatible,
  contaminated, raw-registry, and private-path source facts
- tests for composition into observation, discovery, preflight, and validation
  command contracts
- tests for deterministic blocked side effects
- minimum source adapter implementation

## Blocked Tasks

T017-T028 remain blocked. They include raw path retention, raw registry output
retention, arbitrary filesystem walking, PATH or environment probing, compare
runtime locator reuse, runtime validation execution, compare execution,
LabVIEWCLI execution, Docker execution or orchestration, terminal process
wiring, live proof, proof-out expansion, file writes, package/bin publication,
VSIX packaging changes, Marketplace publication, release automation,
launcher/profile mutation, and source copying.

## Entry Gate

Implementation may start only after the admission PR merges and a separate
implementation handoff issue is created.
