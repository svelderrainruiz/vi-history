# Feature Specification: Runtime Settings CLI Validation Host Runtime Observation Native Source Probe

**Feature Branch**:
`codex/runtime-settings-validation-host-runtime-observation-native-source-probe-admission`

**Created**: 2026-05-20

**Status**: Admission

**Input**: Public sequencing marker and admission issue for
`runtime-settings-cli-validation-host-runtime-observation-native-source-probe-v1`

This is a clean-room public MIT feature specification. It imports requirements
only; it does not import implementation source, private evidence, local
control-plane scripts, or credential handling.

## User Scenarios & Testing

1. Given selected Windows host-native LabVIEW 2026 facts, when native source
   surface probe is requested, then the system probes only bounded Windows
   registry-view source surfaces and emits public-safe native acquisition
   observations consumable by the existing native source acquisition contract.
2. Given selected Linux host-native LabVIEW 2026 facts, when native source
   surface probe is requested, then the system probes only bounded
   documented-root source surfaces without arbitrary filesystem walking.
3. Given selected Windows `host` / `2026` / `x64` facts, when the bounded
   registry-view probe reports canonical installed x86 LabVIEWCLI, then the
   public observations preserve LabVIEW 2026 x64 plus canonical x86 LabVIEWCLI.
4. Given unsupported provider, platform, version, missing source surface,
   ambiguous source surface, malformed source surface, raw registry output,
   private path disclosure, probe errors, contaminated source surfaces, or
   probe unavailability, when native source probe is requested, then it fails
   closed with deterministic blocked side-effect facts.

## Requirements

- **REQ-001**: The feature MUST import only public-safe governed requirements
  for bounded native host source-surface probing. Imported IDs: `VHS-REQ-095`,
  `VHS-REQ-096`, `VHS-REQ-532`, `VHS-REQ-546`, `VHS-REQ-550`, `VHS-REQ-551`.
- **REQ-002**: The contract MUST be named
  `createRuntimeSettingsValidationHostRuntimeObservationNativeSourceProbe`.
- **REQ-003**: The contract MUST start from selected host facts for provider,
  platform, LabVIEW year, and bitness.
- **REQ-004**: The contract MUST probe only explicitly governed native LabVIEW
  2026 source surfaces and return public-safe observations consumable by
  `createRuntimeSettingsValidationHostRuntimeObservationNativeSourceAcquisition(input =
  {})`.
- **REQ-005**: The contract MUST not retain raw registry output, raw private
  installed paths, broad environment values, or arbitrary filesystem walk
  details.
- **REQ-006**: The contract MUST preserve deterministic fail-closed reasons and
  blocked side-effect facts.
- **REQ-007**: The contract MUST compose into the existing validation command
  chain without changing runtime outcome, readback, proof artifact, proof-out,
  file-emission, validation command, `validate-plan-only`, host preflight,
  discovery, observation, source adapter, source-acquisition, or native source
  acquisition output shapes.
- **REQ-008**: The contract MUST keep runtime validation execution, compare
  execution, LabVIEWCLI execution, Docker execution, terminal process wiring,
  live proof, file writes, release automation, Marketplace publication, VSIX
  packaging changes, launcher/profile mutation, Docker source discovery, and
  source copying blocked.

## Current Implementation Admission Unit

Current Implementation Admission Unit is
`IAU-runtime-settings-cli-validation-host-runtime-observation-native-source-probe-v1`.

Implementation completed in PR #160 commit 261c990. T009-T016 implemented:
- `createRuntimeSettingsValidationHostRuntimeObservationNativeSourceProbe` contract
- Windows registry-view source surface probing
- Linux documented-root source surface probing
- Mixed-bitness LabVIEWCLI fact shape preservation
- Fail-closed behavior for all error conditions
- Composition into native source acquisition and validation command chain

## Out Of Scope

Runtime validation execution, compare execution, LabVIEWCLI execution, Docker
execution or orchestration, Docker image inspection, container source
discovery, broad PATH or environment probing, arbitrary filesystem walking, raw
terminal process wiring, live proof, proof-out expansion, file writes, package
publication, release automation, Marketplace publication, VSIX packaging
changes, launcher/profile mutation, and source copying remain out of scope.
