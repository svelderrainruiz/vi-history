# IAU: Native Host Source Acquisition Dependency Adapter

IAU:
`IAU-runtime-settings-cli-validation-host-runtime-observation-native-source-acquisition-v1`

Parent slice:
`runtime-settings-cli-validation-host-runtime-observation-native-source-acquisition-v1`

State: implemented

Admission issue: Issue #154

Implementation handoff issue: Issue #156

Implementation PR: PR #157

## Admitted Tasks

T009-T016 are implemented:

- tests for selected host facts and bounded native source acquisition
- tests for Windows registry-view acquisition observation sanitization
- tests for documented-root acquisition observation sanitization
- tests for Windows LabVIEW 2026 x64 plus canonical installed x86 LabVIEWCLI
  public facts
- tests for fail-closed behavior
- tests for source-acquisition and validation-command composition
- tests for deterministic blocked side effects
- implementation of the minimum public MIT native source acquisition
  dependency adapter contract

## Blocked Tasks

T017-T030 remain blocked, including runtime validation execution, compare
execution, LabVIEWCLI execution, Docker execution or orchestration, Docker
image inspection, container source discovery, terminal process wiring, live
proof, proof-out expansion, file writes, package/bin publication,
launcher/profile mutation, release automation, Marketplace publication, VSIX
packaging changes, Docker source discovery, and source copying.

## Entry Gate

Implementation completed through Issue #156 and PR #157. T017-T030 remain
blocked until a separate public admission.
