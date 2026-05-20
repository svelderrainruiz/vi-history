# IAU: Native Host Source Surface Probe

IAU:
`IAU-runtime-settings-cli-validation-host-runtime-observation-native-source-probe-v1`

Parent slice:
`runtime-settings-cli-validation-host-runtime-observation-native-source-probe-v1`

State: admitted

Admission issue: (to be assigned)

Implementation handoff issue: (to be created after admission PR merges)

## Admitted Tasks

T009-T016 are admitted:

- tests for selected host facts and bounded native source surface probing
- tests for Windows registry-view source surface probing observation
  sanitization
- tests for Linux documented-root source surface probing observation
  sanitization
- tests for Windows LabVIEW 2026 x64 plus canonical installed x86 LabVIEWCLI
  public observations
- tests for fail-closed behavior
- tests for native-source-acquisition and validation-command composition
- tests for deterministic blocked side effects
- implementation of the minimum public MIT native source probe contract

## Blocked Tasks

T017-T030 remain blocked, including runtime validation execution, compare
execution, LabVIEWCLI execution, Docker execution or orchestration, Docker
image inspection, container source discovery, terminal process wiring, live
proof, proof-out expansion, file writes, package/bin publication,
launcher/profile mutation, release automation, Marketplace publication, VSIX
packaging changes, Docker source discovery, and source copying.

## Entry Gate

Implementation may start only after this admission PR merges and a separate
implementation handoff issue is created. T017-T030 remain blocked until a
separate public admission.
