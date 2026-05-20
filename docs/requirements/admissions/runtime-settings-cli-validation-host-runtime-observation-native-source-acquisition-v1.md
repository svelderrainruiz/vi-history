# Requirements Admission: Native Host Source Acquisition Dependency Adapter

Slice:
`runtime-settings-cli-validation-host-runtime-observation-native-source-acquisition-v1`

State: implemented

Admission issue: Issue #154

Sequencing marker: Issue #153

Implementation handoff issue: Issue #156

Implementation PR: PR #157

## Scope

This admission imports and admits the bounded native host source-acquisition
dependency adapter. The adapter may produce public-safe acquisition dependency
facts consumable by
`createRuntimeSettingsValidationHostRuntimeObservationSourceAcquisition(input =
{})`.

## Admitted IAU

`IAU-runtime-settings-cli-validation-host-runtime-observation-native-source-acquisition-v1`
implements T009-T016:

- tests for selected host facts and bounded native source acquisition
- Windows registry-view acquisition observation sanitization
- Linux documented-root acquisition observation sanitization
- Windows LabVIEW 2026 x64 plus canonical installed x86 LabVIEWCLI facts
- fail-closed behavior for missing, unsupported, malformed, unavailable,
  ambiguous, incompatible, contaminated, dependency-error, raw registry, and
  private-path inputs
- composition into source acquisition and validation command contracts
- blocked side-effect facts
- the minimum public MIT native source acquisition dependency adapter contract

Issue #154 must not be reused for implementation. Issue #156 is the
implementation handoff issue. PR #157 implements the IAU.

## Blocked Scope

Runtime validation execution, compare execution, LabVIEWCLI execution, Docker
execution or orchestration, Docker image inspection, container source
discovery, raw terminal process wiring, live proof, proof-out expansion, file
writes, package/bin publication, launcher/profile mutation, VSIX packaging
changes, release automation, Marketplace publication, Docker source discovery,
and source copying remain outside this IAU.
