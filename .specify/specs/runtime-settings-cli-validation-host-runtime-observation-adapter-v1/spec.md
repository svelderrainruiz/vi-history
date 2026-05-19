# Feature Specification: Runtime Settings CLI Validation Host Runtime Observation Adapter

**Feature Branch**:
`codex/runtime-settings-validation-host-runtime-observation-adapter-admission`

**Created**: 2026-05-19

**Status**: Admission planning

**Input**: Governed bridge-readiness packet for
`runtime-settings-cli-validation-host-runtime-observation-adapter-v1`

**Supporting Signals**: `TEST-UNIT-063`, `TEST-UNIT-064`,
`TEST-UNIT-342`, `TEST-UNIT-354`, `TEST-UNIT-355`, `TEST-UNIT-392`

## User Scenarios & Testing

### Primary User Story

As a public MIT command contract maintainer, I need
`createRuntimeSettingsValidationHostRuntimeObservation(input = {})` to create
public-safe observation facts for `vihs --validate` so the existing host
runtime discovery and validation command chain can consume sanitized
observations without exposing private host details.

### Acceptance Scenarios

1. Given selected Windows host facts and bounded public-safe registry-view
   observation dependencies, when host observation is requested, then
   source-class, candidate availability, executable role/version/bitness, and
   canonical LabVIEWCLI facts are returned without raw registry output or
   private path disclosure.
2. Given selected Linux host facts and bounded documented-root observation
   dependencies, when host observation is requested, then deterministic
   public-safe observation facts are returned for supported LabVIEW surfaces.
3. Given selected macOS host facts, when host observation is requested, then
   the result fails closed with deterministic unavailable facts.
4. Given observed Windows LabVIEW 2026 x64 and canonical installed x86
   LabVIEWCLI facts, when observation output feeds host discovery and
   preflight, then the governed mixed-bitness rule can become ready.
5. Given malformed, missing, ambiguous, incompatible, unsupported, or
   contaminated observation inputs, when observation is requested, then it
   fails closed with no hidden partial success and no side effects.

## Requirements

- **REQ-001**: The feature MUST admit
  `IAU-runtime-settings-cli-validation-host-runtime-observation-adapter-v1` for
  bounded host runtime observation facts. Imported IDs: `VHS-REQ-095`,
  `VHS-REQ-096`, `VHS-REQ-532`.
- **REQ-002**: The observation contract MUST be named
  `createRuntimeSettingsValidationHostRuntimeObservation(input = {})`.
- **REQ-003**: The observation contract MUST accept selected host facts for
  provider, platform, LabVIEW version, and LabVIEW bitness. Imported IDs:
  `VHS-REQ-532`, `VHS-REQ-546`.
- **REQ-004**: The observation contract MUST normalize supplied bounded
  Windows registry-view and documented-root observation dependencies into
  public-safe observation facts without retaining raw registry output or exact
  private installed paths. Imported ID: `VHS-REQ-095`.
- **REQ-005**: The observation contract MUST support deterministic Linux
  documented-root observation and macOS unavailable constraints. Imported ID:
  `VHS-REQ-096`.
- **REQ-006**: Observation output MUST compose into
  `createRuntimeSettingsValidationHostRuntimeDiscovery(input = {})`,
  `createRuntimeSettingsValidationHostRuntimePreflight(input = {})`, and the
  existing validation command chain without output-shape redesign. Imported
  IDs: `VHS-REQ-532`, `VHS-REQ-546`.
- **REQ-007**: The observation contract MUST preserve the governed Windows
  mixed-bitness rule for LabVIEW 2026 x64 plus the canonical installed x86
  LabVIEWCLI surface. Imported ID: `VHS-REQ-550`.
- **REQ-008**: The observation contract MUST fail closed for missing
  selection, unsupported provider, unsupported platform, unsupported version,
  missing observation dependency, malformed registry observation, malformed
  documented-root observation, missing candidates, ambiguous candidates,
  incompatible candidates, contaminated host surface, and private-path
  disclosure attempts.
- **REQ-009**: The feature MUST NOT invoke the existing compare runtime
  locator as an implementation shortcut, run runtime validation, execute
  compare, call LabVIEWCLI, call Docker, orchestrate containers, wire raw
  terminal processes, produce live terminal proof, expand proof-out behavior,
  write files, publish packages, mutate launcher/profile state, perform
  Marketplace work, run release automation, or copy source.
- **REQ-010**: Docker wording MUST remain corrected: Docker provider selection
  means the latest supported NI LabVIEW image family, 64-bit-only by
  image/platform, with no user-facing Docker bitness choice.
- **REQ-011**: The implementation MUST remain clean-room with implementation
  sharing set to `none`.

## Key Entities

- **Host Runtime Observation Request**: Public-safe selected provider,
  platform, LabVIEW version, and LabVIEW bitness facts plus supplied bounded
  observation dependencies.
- **Observation Dependency Facts**: Bounded facts about admitted source class,
  availability, candidate count, LabVIEW executable role, LabVIEW version,
  LabVIEW bitness, canonical LabVIEWCLI role, and CLI bitness.
- **Discovery Observation Facts**: Public-safe facts consumable by the
  admitted host runtime discovery contract; they do not expose raw registry
  output or exact private installed paths.
- **Blocked Side-Effect Facts**: Deterministic proof that execution,
  publication, release, mutation, file write, proof expansion, and
  source-copying behavior did not occur.

## Current Implementation Admission Unit

Current Implementation Admission Unit is
`IAU-runtime-settings-cli-validation-host-runtime-observation-adapter-v1`.

Implementation may begin only after this admission PR merges and a separate
implementation handoff issue is created.

## Out Of Scope

Raw private path disclosure, raw registry output retention, arbitrary
filesystem walking beyond the admitted bounded observation policy, PATH
probing, environment probing, invocation of the existing compare runtime
locator as an implementation shortcut, runtime validation execution, compare
execution, LabVIEWCLI execution, Docker execution or orchestration, raw
terminal process wiring, live terminal proof, proof-out expansion, file writes,
package/bin publication, launcher/profile mutation, VSIX packaging,
Marketplace publication, release automation, and source copying remain blocked.
