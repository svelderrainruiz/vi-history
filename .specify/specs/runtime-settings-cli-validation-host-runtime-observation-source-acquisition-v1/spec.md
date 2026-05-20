# Feature Specification: Runtime Settings CLI Validation Host Runtime Observation Source Acquisition

**Feature Branch**:
`codex/runtime-settings-validation-host-runtime-observation-source-acquisition-admission`

**Created**: 2026-05-20

**Status**: Admission planning

**Input**: Public sequencing marker #147 and admission issue #148 for
`runtime-settings-cli-validation-host-runtime-observation-source-acquisition-v1`

**Supporting Signals**: `TEST-UNIT-063`, `TEST-UNIT-064`,
`TEST-UNIT-342`, `TEST-UNIT-354`, `TEST-UNIT-355`, `TEST-UNIT-392`,
`TEST-UNIT-RSHOSTSOURCE-001`, `TEST-UNIT-RSHOSTSOURCE-002`,
`TEST-UNIT-RSHOSTSOURCE-004`, and `TEST-UNIT-RSHOSTACQ-001` through
`TEST-UNIT-RSHOSTACQ-006`

## User Scenarios & Testing

### Primary User Story

As a public MIT command contract maintainer, I need
`createRuntimeSettingsValidationHostRuntimeObservationSourceAcquisition(input =
{})` to create public-safe source facts for `vihs --validate` so the existing
source adapter, host runtime observation, discovery, preflight, and validation
command chain can consume bounded native host source-acquisition facts without
exposing private host details.

### Acceptance Scenarios

1. Given selected Windows host facts and bounded public-safe acquisition
   dependency facts for an admitted registry-view source class, when source
   acquisition is requested, then sanitized source facts are returned without
   raw registry output or private path disclosure.
2. Given selected Linux host facts and bounded public-safe documented-root
   acquisition dependency facts, when source acquisition is requested, then
   deterministic documented-root source facts are returned for supported
   LabVIEW surfaces.
3. Given selected macOS host facts, when source acquisition is requested, then
   the result fails closed with deterministic unavailable facts.
4. Given acquisition dependency facts for Windows LabVIEW 2026 x64 and
   canonical installed x86 LabVIEWCLI, when source acquisition output feeds the
   source adapter, observation, discovery, and preflight chain, then the
   governed mixed-bitness rule can become ready.
5. Given malformed, missing, ambiguous, incompatible, unsupported,
   contaminated, raw-registry, private-path, or dependency-error inputs, when
   source acquisition is requested, then it fails closed with no hidden partial
   success and no side effects.

## Requirements

- **REQ-001**: The feature MUST admit
  `IAU-runtime-settings-cli-validation-host-runtime-observation-source-acquisition-v1`
  for bounded native host source acquisition facts. Imported IDs:
  `VHS-REQ-095`, `VHS-REQ-096`, `VHS-REQ-532`.
- **REQ-002**: The source acquisition contract MUST be named
  `createRuntimeSettingsValidationHostRuntimeObservationSourceAcquisition(input
  = {})`.
- **REQ-003**: The source acquisition contract MUST accept selected host facts
  for provider, platform, LabVIEW version, and LabVIEW bitness. Imported IDs:
  `VHS-REQ-532`, `VHS-REQ-546`.
- **REQ-004**: The source acquisition contract MUST normalize supplied bounded
  Windows registry-view and Linux documented-root acquisition dependency facts
  into public-safe source facts without retaining raw registry output or exact
  private installed paths. Imported IDs: `VHS-REQ-095`, `VHS-REQ-096`.
- **REQ-005**: The source acquisition contract MUST preserve deterministic
  Linux documented-root adaptation and macOS unavailable constraints. Imported
  ID: `VHS-REQ-096`.
- **REQ-006**: Source acquisition output MUST compose into
  `createRuntimeSettingsValidationHostRuntimeObservationSourceAdapter(input =
  {})`, `createRuntimeSettingsValidationHostRuntimeObservation(input = {})`,
  `createRuntimeSettingsValidationHostRuntimeDiscovery(input = {})`,
  `createRuntimeSettingsValidationHostRuntimePreflight(input = {})`, and the
  existing validation command chain without output-shape redesign. Imported
  IDs: `VHS-REQ-532`, `VHS-REQ-546`.
- **REQ-007**: The source acquisition contract MUST preserve the governed
  Windows mixed-bitness rule for LabVIEW 2026 x64 plus the canonical installed
  x86 LabVIEWCLI surface. Imported ID: `VHS-REQ-550`.
- **REQ-008**: The source acquisition contract MUST fail closed for missing
  selection, unsupported provider, unsupported platform, unsupported version,
  missing acquisition dependency facts, malformed dependency facts, unsupported
  source class, unavailable dependency, ambiguous dependency facts,
  incompatible dependency facts, contaminated host surface, raw registry output,
  private-path disclosure attempts, and dependency errors.
- **REQ-009**: The feature MUST NOT invoke the existing compare runtime
  locator as an implementation shortcut, run runtime validation, execute
  compare, call LabVIEWCLI, call Docker, orchestrate containers, wire raw
  terminal processes, produce live terminal proof, expand proof-out behavior,
  write files, change VSIX packaging behavior, publish packages, mutate
  launcher/profile state, perform Marketplace work, run release automation, or
  copy source.
- **REQ-010**: Docker wording MUST remain corrected: Docker provider selection
  means the latest supported NI LabVIEW image family, 64-bit-only by
  image/platform, with no user-facing Docker bitness choice.
- **REQ-011**: The implementation MUST remain clean-room with implementation
  sharing set to `none`.

## Key Entities

- **Host Runtime Source Acquisition Request**: Public-safe selected provider,
  platform, LabVIEW version, and LabVIEW bitness facts plus supplied bounded
  native host acquisition dependency facts.
- **Bounded Acquisition Dependency Facts**: Public-safe facts about admitted
  Windows registry-view or documented-root native host source surfaces,
  availability, candidate count, LabVIEW executable role, LabVIEW version,
  LabVIEW bitness, canonical LabVIEWCLI role, and CLI bitness.
- **Source Facts**: Public-safe facts consumable by the admitted source adapter;
  they do not expose raw registry output or exact private installed paths.
- **Blocked Side-Effect Facts**: Deterministic proof that execution, probing
  outside admitted dependencies, publication, release, mutation, file writes,
  proof expansion, and source-copying behavior did not occur.

## Current Implementation Admission Unit

Current Implementation Admission Unit is
`IAU-runtime-settings-cli-validation-host-runtime-observation-source-acquisition-v1`.

Implementation requires the admission PR to merge and a separate implementation
handoff issue to be created. Issue #148 must not be reused for implementation.

## Out Of Scope

Raw private path disclosure, raw registry output retention, arbitrary
filesystem walking, broad PATH probing, environment probing, invocation of the
existing compare runtime locator as an implementation shortcut, runtime
validation execution, compare execution, LabVIEWCLI execution, Docker execution
or orchestration, raw terminal process wiring, live terminal proof, proof-out
expansion, file writes from source, observation, discovery, or preflight
adapters, package/bin publication, launcher/profile mutation, VSIX packaging
changes, Marketplace publication, release automation, and source copying remain
blocked.
