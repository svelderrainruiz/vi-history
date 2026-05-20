# Admission: Runtime Settings CLI Validation Host Runtime Observation Source Adapter

Slice:
`runtime-settings-cli-validation-host-runtime-observation-source-adapter-v1`

State: admitted

Admission issue: Issue #142

Sequencing marker: Issue #135

Implementation handoff issue: create after admission PR merges

## Scope

This admission allows a narrow source adapter that turns bounded public-safe
source facts into observation dependency facts for
`createRuntimeSettingsValidationHostRuntimeObservation(input = {})`.

## Admitted IAU

`IAU-runtime-settings-cli-validation-host-runtime-observation-source-adapter-v1`
admits T009-T016:

- source-adapter tests for selected host facts
- Windows registry-view source fact sanitization
- Linux documented-root source fact sanitization
- Windows LabVIEW 2026 x64 plus canonical installed x86 LabVIEWCLI mixed
  bitness facts
- fail-closed malformed, unsupported, ambiguous, incompatible, contaminated,
  raw-registry, and private-path source facts
- composition into observation, discovery, preflight, and validation command
  contracts
- blocked side-effect facts
- the minimum public MIT source adapter contract

Issue #142 must not be reused for implementation. A separate implementation
handoff issue must be created after the admission PR merges.

## Blocked Scope

Raw private path disclosure, raw registry output retention, arbitrary
filesystem walking, PATH probing, environment probing, existing compare runtime
locator reuse, runtime validation execution, compare execution, LabVIEWCLI
execution, Docker command execution or orchestration, raw terminal process
wiring, live proof, proof-out expansion, file writes from a source or
observation adapter, package/bin publication, VSIX packaging changes,
Marketplace publication, release automation, launcher/profile mutation, and
source copying remain outside this IAU.
