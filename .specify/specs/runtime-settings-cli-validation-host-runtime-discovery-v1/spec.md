# Feature Specification: Runtime Settings CLI Validation Host Runtime Discovery

**Feature Branch**:
`codex/runtime-settings-validation-host-runtime-discovery-admission`

**Created**: 2026-05-19

**Status**: Admission planning

**Input**: Governed bridge-readiness packet for
`runtime-settings-cli-validation-host-runtime-discovery-v1`

**Supporting Signals**: `TEST-UNIT-063`, `TEST-UNIT-064`,
`TEST-UNIT-342`, `TEST-UNIT-354`, `TEST-UNIT-355`, `TEST-UNIT-392`

## User Scenarios & Testing

### Primary User Story

As a public MIT command contract maintainer, I need
`createRuntimeSettingsValidationHostRuntimeDiscovery(input = {})` to derive
public-safe host candidate facts for `vihs --validate` so the existing host
runtime preflight and validation command chain can consume discovered facts
instead of hand-written candidate objects.

### Acceptance Scenarios

1. Given selected Windows host facts and bounded public-safe discovery
   observations, when host discovery is requested, then public-safe host
   candidate facts are returned without raw registry output or private path
   disclosure.
2. Given selected Linux host facts and bounded documented-root observations,
   when host discovery is requested, then deterministic public-safe host
   candidate facts are returned for supported LabVIEW surfaces.
3. Given selected macOS host facts, when host discovery is requested, then the
   result fails closed with deterministic unavailable facts.
4. Given discovered Windows LabVIEW 2026 x64 and canonical installed x86
   LabVIEWCLI facts, when discovery output feeds host preflight, then the
   governed mixed-bitness rule can become ready.
5. Given malformed, missing, ambiguous, incompatible, unsupported, or
   contaminated discovery inputs, when discovery is requested, then it fails
   closed with no hidden partial success and no side effects.

## Requirements

- **REQ-001**: The feature MUST admit
  `IAU-runtime-settings-cli-validation-host-runtime-discovery-v1` for bounded
  host runtime discovery facts. Imported IDs: `VHS-REQ-095`, `VHS-REQ-096`,
  `VHS-REQ-532`.
- **REQ-002**: The discovery contract MUST be named
  `createRuntimeSettingsValidationHostRuntimeDiscovery(input = {})`.
- **REQ-003**: The discovery contract MUST accept selected host facts for
  provider, platform, LabVIEW version, and LabVIEW bitness. Imported IDs:
  `VHS-REQ-532`, `VHS-REQ-546`.
- **REQ-004**: The discovery contract MUST normalize bounded Windows
  registry-view and documented-root observations into public-safe candidate
  facts without retaining raw registry output or exact private installed paths.
  Imported ID: `VHS-REQ-095`.
- **REQ-005**: The discovery contract MUST support deterministic Linux
  documented-root discovery and macOS unavailable constraints. Imported ID:
  `VHS-REQ-096`.
- **REQ-006**: Discovery output MUST compose into
  `createRuntimeSettingsValidationHostRuntimePreflight(input = {})` and the
  existing validation command chain without output-shape redesign. Imported
  IDs: `VHS-REQ-532`, `VHS-REQ-546`.
- **REQ-007**: The discovery contract MUST preserve the governed Windows
  mixed-bitness rule for LabVIEW 2026 x64 plus the canonical installed x86
  LabVIEWCLI surface. Imported ID: `VHS-REQ-550`.
- **REQ-008**: The discovery contract MUST fail closed for missing selection,
  unsupported provider, unsupported platform, unsupported version, missing
  discovery dependency, malformed observations, missing candidates, ambiguous
  candidates, incompatible candidates, contaminated host surface, and
  private-path disclosure attempts.
- **REQ-009**: The feature MUST NOT invoke the existing compare runtime
  locator as an implementation shortcut, run runtime validation, execute
  compare, call LabVIEWCLI, call Docker, orchestrate containers, wire raw
  terminal processes, produce live terminal proof, write files, publish
  packages, mutate launcher/profile state, perform Marketplace work, run
  release automation, or copy source.
- **REQ-010**: Docker wording MUST remain corrected: Docker provider selection
  means the latest supported NI LabVIEW image family, 64-bit-only by
  image/platform, with no user-facing Docker bitness choice.
- **REQ-011**: The implementation MUST remain clean-room with implementation
  sharing set to `none`.

## Key Entities

- **Host Runtime Discovery Request**: Public-safe selected provider, platform,
  LabVIEW version, and LabVIEW bitness facts plus bounded discovery
  observations or injected discovery dependencies.
- **Discovery Observation Facts**: Bounded facts about documented roots,
  Windows registry views, source class, availability, candidate count,
  LabVIEW executable role, LabVIEW version, LabVIEW bitness, canonical
  LabVIEWCLI role, and CLI bitness.
- **Host Candidate Facts**: Public-safe facts consumable by the admitted host
  runtime preflight contract; they do not expose raw private installed paths.
- **Blocked Side-Effect Facts**: Deterministic proof that execution,
  publication, release, mutation, and source-copying behavior did not occur.

## Current Implementation Admission Unit

Current Implementation Admission Unit is
`IAU-runtime-settings-cli-validation-host-runtime-discovery-v1`.

Implementation may begin only after the admission PR merges and a separate
implementation handoff issue is created.

## Out Of Scope

Raw private path disclosure, arbitrary filesystem walking, PATH probing,
environment probing, invocation of the existing compare runtime locator as an
implementation shortcut, runtime validation execution, compare execution,
LabVIEWCLI execution, Docker execution or orchestration, raw terminal process
wiring, live terminal proof, file writes, package/bin publication,
launcher/profile mutation, VSIX packaging, Marketplace publication, release
automation, and source copying remain blocked.
