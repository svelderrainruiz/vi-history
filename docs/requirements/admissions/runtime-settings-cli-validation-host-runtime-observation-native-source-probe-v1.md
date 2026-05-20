# Requirements Admission: Native Host Source Surface Probe

Slice:
`runtime-settings-cli-validation-host-runtime-observation-native-source-probe-v1`

State: admitted

Admission issue: (to be assigned)

Sequencing marker: Issue #159

Implementation handoff issue: (to be created after admission PR merges)

## Scope

This admission imports and admits the bounded native host source-surface probe.
The probe may produce public-safe native acquisition observations consumable by
`createRuntimeSettingsValidationHostRuntimeObservationNativeSourceAcquisition(input =
{})`.

## Admitted IAU

`IAU-runtime-settings-cli-validation-host-runtime-observation-native-source-probe-v1`
admits T009-T016:

- tests for selected host facts and bounded native source surface probing
- Windows registry-view source surface probing observation sanitization
- Linux documented-root source surface probing observation sanitization
- Windows LabVIEW 2026 x64 plus canonical installed x86 LabVIEWCLI observations
- fail-closed behavior for missing, unsupported, malformed, unavailable,
  ambiguous, contaminated, probe-error, raw registry, and private-path inputs
- composition into native source acquisition and validation command contracts
- blocked side-effect facts
- the minimum public MIT native source probe contract

The admission issue must not be reused for implementation. A separate
implementation handoff issue is required after the admission PR merges.

## Blocked Scope

Runtime validation execution, compare execution, LabVIEWCLI execution, Docker
execution or orchestration, Docker image inspection, container source
discovery, raw terminal process wiring, live proof, proof-out expansion, file
writes, package/bin publication, launcher/profile mutation, VSIX packaging
changes, release automation, Marketplace publication, Docker source discovery,
and source copying remain outside this IAU.
