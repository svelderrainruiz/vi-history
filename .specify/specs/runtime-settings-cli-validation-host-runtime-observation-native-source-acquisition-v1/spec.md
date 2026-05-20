# Feature Specification: Runtime Settings CLI Validation Host Runtime Observation Native Source Acquisition

**Feature Branch**:
`codex/runtime-settings-validation-host-runtime-observation-native-source-acquisition-admission`

**Created**: 2026-05-20

**Status**: Implemented

**Input**: Public sequencing marker #153 and admission issue #154 for
`runtime-settings-cli-validation-host-runtime-observation-native-source-acquisition-v1`

This is a clean-room public MIT feature specification. It imports requirements
only; it does not import implementation source, private evidence, local
control-plane scripts, or credential handling.

## User Scenarios & Testing

1. Given selected Windows host-native LabVIEW 2026 facts and bounded
   registry-view acquisition observations, when native source acquisition is
   requested, then the system emits public-safe acquisition dependency facts
   consumable by the existing source-acquisition contract.
2. Given selected Linux host-native LabVIEW 2026 facts and bounded
   documented-root acquisition observations, when native source acquisition is
   requested, then the system emits public-safe acquisition dependency facts
   without arbitrary filesystem walking.
3. Given selected Windows `host` / `2026` / `x64` facts, when the bounded
   native observation reports canonical installed x86 LabVIEWCLI, then the
   public facts preserve LabVIEW 2026 x64 plus canonical x86 LabVIEWCLI.
4. Given unsupported provider, platform, version, missing dependency surface,
   malformed dependency surface, raw registry output, private path disclosure,
   ambiguous or contaminated facts, or dependency errors, when native source
   acquisition is requested, then it fails closed with deterministic blocked
   side-effect facts.

## Requirements

- **REQ-001**: The feature MUST import only public-safe governed requirements
  for bounded native host source-acquisition dependency adaptation. Imported
  IDs: `VHS-REQ-095`, `VHS-REQ-096`, `VHS-REQ-532`, `VHS-REQ-546`,
  `VHS-REQ-550`.
- **REQ-002**: The contract MUST be named
  `createRuntimeSettingsValidationHostRuntimeObservationNativeSourceAcquisition`.
- **REQ-003**: The contract MUST start from selected host facts for provider,
  platform, LabVIEW year, and bitness.
- **REQ-004**: The contract MUST collect only admitted bounded native
  acquisition dependency observations and return public-safe dependency facts
  consumable by
  `createRuntimeSettingsValidationHostRuntimeObservationSourceAcquisition(input =
  {})`.
- **REQ-005**: The contract MUST not retain raw registry output, raw private
  installed paths, broad environment values, or arbitrary filesystem walk
  details.
- **REQ-006**: The contract MUST preserve deterministic fail-closed reasons and
  blocked side-effect facts.
- **REQ-007**: The contract MUST compose into the existing validation command
  chain without changing runtime outcome, readback, proof artifact, proof-out,
  file-emission, validation command, `validate-plan-only`, host preflight,
  discovery, observation, source adapter, or source-acquisition output shapes.
- **REQ-008**: The contract MUST keep runtime validation execution, compare
  execution, LabVIEWCLI execution, Docker execution, terminal process wiring,
  live proof, file writes, release automation, Marketplace publication, VSIX
  packaging changes, launcher/profile mutation, Docker source discovery, and
  source copying blocked.

## Current Implementation Admission Unit

Current Implementation Admission Unit is
`none`.

`IAU-runtime-settings-cli-validation-host-runtime-observation-native-source-acquisition-v1`
completed through Issue #156 and PR #157 for T009-T016 only. Issue #154 must
not be reused for implementation.

## Out Of Scope

Runtime validation execution, compare execution, LabVIEWCLI execution, Docker
execution or orchestration, Docker image inspection, container source
discovery, broad PATH or environment probing, arbitrary filesystem walking, raw
terminal process wiring, live proof, proof-out expansion, file writes, package
publication, release automation, Marketplace publication, VSIX packaging
changes, launcher/profile mutation, and source copying remain out of scope.
