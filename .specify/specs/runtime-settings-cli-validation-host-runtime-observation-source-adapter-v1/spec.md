# Feature Specification: Runtime Settings CLI Validation Host Runtime Observation Source Adapter

**Feature Branch**:
`codex/runtime-settings-validation-host-runtime-observation-source-adapter-admission`

**Created**: 2026-05-19

**Status**: Admission planning

**Input**: Public sequencing marker #135 and admission issue #142 for
`runtime-settings-cli-validation-host-runtime-observation-source-adapter-v1`

**Supporting Signals**: `TEST-UNIT-063`, `TEST-UNIT-064`,
`TEST-UNIT-342`, `TEST-UNIT-354`, `TEST-UNIT-355`, `TEST-UNIT-392`,
`TEST-UNIT-RSHOSTSOURCE-001` through `TEST-UNIT-RSHOSTSOURCE-005`

## User Scenarios & Testing

### Primary User Story

As a public MIT command contract maintainer, I need
`createRuntimeSettingsValidationHostRuntimeObservationSourceAdapter(input = {})`
to create public-safe observation dependency facts for `vihs --validate` so the
existing host runtime observation, discovery, preflight, and validation command
chain can consume sanitized source facts without exposing private host details.

### Acceptance Scenarios

1. Given selected Windows host facts and bounded public-safe source facts for
   an admitted registry-view source class, when source adaptation is requested,
   then source-class, candidate availability, executable role/version/bitness,
   and canonical LabVIEWCLI facts are returned as observation dependency facts
   without raw registry output or private path disclosure.
2. Given selected Linux host facts and bounded public-safe documented-root
   source facts, when source adaptation is requested, then deterministic
   observation dependency facts are returned for supported LabVIEW surfaces.
3. Given selected macOS host facts, when source adaptation is requested, then
   the result fails closed with deterministic unavailable facts.
4. Given source facts for Windows LabVIEW 2026 x64 and canonical installed x86
   LabVIEWCLI, when source adapter output feeds observation, discovery, and
   preflight, then the governed mixed-bitness rule can become ready.
5. Given malformed, missing, ambiguous, incompatible, unsupported,
   contaminated, raw-registry, or private-path source inputs, when source
   adaptation is requested, then it fails closed with no hidden partial success
   and no side effects.

## Requirements

- **REQ-001**: The feature MUST admit
  `IAU-runtime-settings-cli-validation-host-runtime-observation-source-adapter-v1`
  for bounded host runtime observation source facts. Imported IDs:
  `VHS-REQ-095`, `VHS-REQ-096`, `VHS-REQ-532`.
- **REQ-002**: The source adapter contract MUST be named
  `createRuntimeSettingsValidationHostRuntimeObservationSourceAdapter(input =
  {})`.
- **REQ-003**: The source adapter contract MUST accept selected host facts for
  provider, platform, LabVIEW version, and LabVIEW bitness. Imported IDs:
  `VHS-REQ-532`, `VHS-REQ-546`.
- **REQ-004**: The source adapter contract MUST normalize supplied bounded
  Windows registry-view and Linux documented-root source facts into public-safe
  observation dependency facts without retaining raw registry output or exact
  private installed paths. Imported IDs: `VHS-REQ-095`, `VHS-REQ-096`.
- **REQ-005**: The source adapter contract MUST preserve deterministic Linux
  documented-root adaptation and macOS unavailable constraints. Imported ID:
  `VHS-REQ-096`.
- **REQ-006**: Source adapter output MUST compose into
  `createRuntimeSettingsValidationHostRuntimeObservation(input = {})`,
  `createRuntimeSettingsValidationHostRuntimeDiscovery(input = {})`,
  `createRuntimeSettingsValidationHostRuntimePreflight(input = {})`, and the
  existing validation command chain without output-shape redesign. Imported
  IDs: `VHS-REQ-532`, `VHS-REQ-546`.
- **REQ-007**: The source adapter contract MUST preserve the governed Windows
  mixed-bitness rule for LabVIEW 2026 x64 plus the canonical installed x86
  LabVIEWCLI surface. Imported ID: `VHS-REQ-550`.
- **REQ-008**: The source adapter contract MUST fail closed for missing
  selection, unsupported provider, unsupported platform, unsupported version,
  missing source facts, malformed source facts, unsupported source class,
  unavailable source, ambiguous source facts, incompatible source facts,
  contaminated host surface, raw registry output, and private-path disclosure
  attempts.
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

- **Host Runtime Source Adapter Request**: Public-safe selected provider,
  platform, LabVIEW version, and LabVIEW bitness facts plus supplied bounded
  source facts.
- **Bounded Source Facts**: Public-safe source-class facts about admitted
  Windows registry-view or documented-root surfaces, availability, candidate
  count, LabVIEW executable role, LabVIEW version, LabVIEW bitness, canonical
  LabVIEWCLI role, and CLI bitness.
- **Observation Dependency Facts**: Public-safe facts consumable by the
  admitted host runtime observation contract; they do not expose raw registry
  output or exact private installed paths.
- **Blocked Side-Effect Facts**: Deterministic proof that execution, probing,
  publication, release, mutation, file writes, proof expansion, and
  source-copying behavior did not occur.

## Current Implementation Admission Unit

Current Implementation Admission Unit is
`IAU-runtime-settings-cli-validation-host-runtime-observation-source-adapter-v1`.

Implementation may begin only after this admission PR merges and a separate
implementation handoff issue is created.

## Out Of Scope

Raw private path disclosure, raw registry output retention, arbitrary
filesystem walking, PATH probing, environment probing, invocation of the
existing compare runtime locator as an implementation shortcut, runtime
validation execution, compare execution, LabVIEWCLI execution, Docker execution
or orchestration, raw terminal process wiring, live terminal proof, proof-out
expansion, file writes from the source or observation adapter, package/bin
publication, launcher/profile mutation, VSIX packaging changes, Marketplace
publication, release automation, and source copying remain blocked.
