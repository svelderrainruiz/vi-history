# Admission: Runtime Settings CLI Validation Host Runtime Observation Source Acquisition

Slice:
`runtime-settings-cli-validation-host-runtime-observation-source-acquisition-v1`

State: admitted

Admission issue: Issue #148

Sequencing marker: Issue #147

Implementation handoff issue: Created after admission PR merge

## Scope

This admission creates a narrow source-acquisition lane that turns bounded
native host acquisition dependency facts into source facts for
`createRuntimeSettingsValidationHostRuntimeObservationSourceAdapter(input = {})`.

## Admitted IAU

`IAU-runtime-settings-cli-validation-host-runtime-observation-source-acquisition-v1`
admits T009-T016:

- source-acquisition tests for selected host facts
- Windows registry-view acquisition dependency sanitization
- Linux documented-root acquisition dependency sanitization
- Windows LabVIEW 2026 x64 plus canonical installed x86 LabVIEWCLI mixed
  bitness source facts
- fail-closed malformed, unsupported, ambiguous, incompatible, contaminated,
  dependency-error, raw-registry, and private-path acquisition facts
- composition into source adapter, observation, discovery, preflight, and
  validation command contracts
- blocked side-effect facts
- the minimum public MIT source acquisition contract

Issue #148 must not be reused for implementation. A separate implementation
handoff issue must be created after the admission PR merges.

## Blocked Scope

Raw private path disclosure, raw registry output retention, arbitrary
filesystem walking, broad PATH probing, environment probing, existing compare
runtime locator reuse, runtime validation execution, compare execution,
LabVIEWCLI execution, Docker command execution or orchestration, raw terminal
process wiring, live proof, proof-out expansion, file writes from source,
observation, discovery, or preflight adapters, package/bin publication, VSIX
packaging changes, Marketplace publication, release automation,
launcher/profile mutation, Docker image inspection or container source
discovery, and source copying remain outside this IAU.
