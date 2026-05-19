# Feature Specification: Runtime Settings CLI Validation Host Runtime Preflight

**Feature Branch**:
`codex/runtime-settings-validation-host-runtime-preflight-admission`

**Created**: 2026-05-19

**Status**: Implemented for
`IAU-runtime-settings-cli-validation-host-runtime-preflight-v1`

**Input**: Imported requirements slice
`runtime-settings-cli-validation-host-runtime-preflight-v1`

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Preflight Supplied Host Facts (Priority: P1)

An installed user or maintainer can provide public-safe host selection and
candidate facts to the validation chain and receive ready or blocked runtime
selection facts without relying on hand-written runtime outcomes.

**Why this priority**: The existing validation command chain can consume
runtime selection facts, but no public MIT contract yet normalizes host
preflight facts for the governed Windows host route.

**Independent Test**: A unit test can call
`createRuntimeSettingsValidationHostRuntimePreflight(input = {})` with host
selection facts and one compatible supplied candidate, then verify the result
is ready and consumable by
`createRuntimeSettingsValidationRuntimeOutcome(input = {})`.

**Acceptance Scenarios**:

1. **Given** host selection facts and exactly one compatible supplied host
   candidate, **When** host runtime preflight is created, **Then** ready runtime
   selection facts are returned.
2. **Given** missing host selection facts, **When** host runtime preflight is
   created, **Then** the result fails closed.
3. **Given** more than one compatible supplied host candidate, **When** host
   runtime preflight is created, **Then** the result fails closed as ambiguous.

### User Story 2 - Accept The Governed Windows Mixed-Bitness Bundle (Priority: P1)

The host validation lane accepts the public-safe model of LabVIEW 2026 x64
paired with the canonical installed x86 LabVIEWCLI surface for Windows
host validation.

**Why this priority**: The governed requirement explicitly prevents the
validation surface from failing solely because the canonical LabVIEWCLI surface
is x86 while the requested LabVIEW executable is x64.

**Independent Test**: A unit test can provide requested
`host` / `windows` / `2026` / `x64` facts with a supplied LabVIEW 2026 x64
candidate and canonical x86 LabVIEWCLI candidate, then verify preflight is
ready.

### User Story 3 - Preserve The Clean-Room Execution Boundary (Priority: P1)

The host preflight adapter reports deterministic blocked reasons and blocked
side-effect facts without becoming an OS scanner, runtime locator, validation
executor, compare executor, terminal driver, file writer, package publisher,
or source-sharing route.

**Why this priority**: This lane should make the next validation facts
available while keeping runtime locator invocation and real execution for
later governed bridge admissions.

**Independent Test**: A unit test can inspect the result and side-effect facts
to confirm no OS probing, runtime locator, private path discovery, LabVIEWCLI,
Docker, compare, filesystem write, terminal process wiring, package/bin
publication, release, Marketplace, launcher/profile mutation, or source
copying occurred.

### Edge Cases

- Selection facts are missing or malformed.
- Provider is Docker or another non-host value.
- No supplied host candidate is compatible.
- More than one supplied host candidate is compatible.
- Candidate LabVIEW version does not match the requested version.
- Candidate LabVIEW bitness does not match the requested bitness.
- Candidate lacks LabVIEW executable facts.
- Candidate lacks canonical LabVIEWCLI facts.
- Candidate is marked contaminated or unavailable.
- A caller supplies filesystem, locator, command runner, Docker, or terminal
  adapters and expects them to be called.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The public MIT authority MUST provide
  `createRuntimeSettingsValidationHostRuntimePreflight(input = {})` as a pure
  host runtime preflight facts contract. Imported IDs: `VHS-REQ-532`,
  `VHS-REQ-546`.
- **FR-002**: The contract MUST accept public-safe selection facts for host
  provider, platform, LabVIEW version, and LabVIEW bitness plus supplied
  public-safe host candidate facts. Imported ID: `VHS-REQ-532`.
- **FR-003**: The contract MUST fail closed for non-host providers in this
  lane and MUST NOT expose Docker image-family or Docker bitness selection.
  Imported IDs: `VHS-REQ-532`, `VHS-REQ-546`.
- **FR-004**: The contract MUST return ready only when exactly one compatible
  supplied host candidate is available. Imported ID: `VHS-REQ-532`.
- **FR-005**: The contract MUST require matching LabVIEW version and LabVIEW
  bitness facts before returning ready. Imported ID: `VHS-REQ-532`.
- **FR-006**: The contract MUST require a supplied canonical LabVIEWCLI surface
  before returning ready. Imported IDs: `VHS-REQ-532`, `VHS-REQ-550`.
- **FR-007**: The contract MUST accept the governed Windows mixed-bitness
  bundle: requested `host` / `windows` / `2026` / `x64` with LabVIEW 2026 x64
  and canonical installed x86 LabVIEWCLI. Imported ID: `VHS-REQ-550`.
- **FR-008**: Ready and blocked results MUST be consumable by
  `createRuntimeSettingsValidationRuntimeOutcome(input = {})` without changing
  that contract's output shape. Imported ID: `VHS-REQ-546`.
- **FR-009**: Host preflight facts MUST compose into the existing validation
  readback, proof artifact, proof-out adapter, file-emission, validation
  command, and validate-plan-only contracts without redesigning their output
  shapes. Imported ID: `VHS-REQ-546`.
- **FR-010**: The contract MUST fail closed with deterministic public blocked
  reasons for missing selection, unsupported provider, missing host candidate,
  ambiguous host candidate, version mismatch, bitness mismatch, missing
  LabVIEW executable, missing canonical LabVIEWCLI, contaminated host surface,
  and malformed input.
- **FR-011**: The contract MUST keep OS inspection, filesystem walking,
  registry probing, PATH probing, environment probing, private path discovery,
  runtime locator invocation, runtime validation execution, compare execution,
  LabVIEWCLI execution, Docker command execution or orchestration, raw terminal
  process wiring, file writes, package/bin publication, launcher/profile
  mutation, VSIX packaging, Marketplace work, release automation, and source
  copying blocked.
- **FR-012**: The contract MUST preserve corrected Docker wording: Docker
  provider selection means the latest supported NI LabVIEW image family,
  64-bit-only by image/platform, with no user-facing Docker bitness choice.
- **FR-013**: The implementation MUST remain clean-room: no implementation
  source is copied from another VI History product line.

### Key Entities

- **Host Runtime Preflight Request**: Public-safe host provider/platform/
  LabVIEW version/LabVIEW bitness facts plus supplied host candidate facts.
- **Host Candidate Facts**: Public-safe candidate roles and compatibility facts
  for LabVIEW executable and canonical LabVIEWCLI without private paths.
- **Runtime Selection Facts**: Ready or blocked facts shaped for the existing
  runtime outcome contract.
- **Blocked Side-Effect Facts**: Facts proving scanning, locating, execution,
  terminal wiring, writing, publication, mutation, Marketplace, release, and
  source copying did not occur.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: The public import manifest lists `VHS-REQ-532`, `VHS-REQ-546`,
  `VHS-REQ-550`, prerequisite IDs `VHS-REQ-537`, `VHS-REQ-543`,
  `VHS-REQ-544`, `VHS-REQ-545`, and supporting signals `TEST-UNIT-342`,
  `TEST-UNIT-354`, `TEST-UNIT-355`, and `TEST-UNIT-392`.
- **SC-002**: `spec.md`, `plan.md`, and `tasks.md` define
  `IAU-runtime-settings-cli-validation-host-runtime-preflight-v1` and keep OS
  scanning, locators, runtime execution, compare, LabVIEWCLI, Docker,
  terminal process wiring, file writes, publication, mutation, release,
  Marketplace, and source copying blocked.
- **SC-003**: The admission record states that T009-T016 are implemented and
  that the Current Implementation Admission Unit is `none`.
- **SC-004**: Public validation rejects private paths, credentials, private
  evidence, private control-plane terms, and copied implementation-source
  instructions.
- **SC-005**: Marketplace publication remains disabled.

## Assumptions

- Host candidate facts are supplied by an admitted public-safe caller or later
  lane; this IAU does not discover them from the host OS or a runtime locator.
- Existing validation runtime outcome, readback, proof artifact, proof-out
  adapter, file-emission, command-result, and plan-only contracts keep their
  output shapes.
- Docker provider selection remains a latest supported NI LabVIEW image-family
  concern and exposes no user-facing Docker bitness choice.
- Future OS scanning, runtime locator invocation, runtime execution, compare,
  LabVIEWCLI, Docker, terminal/bin wiring, file writes from the preflight
  adapter, package/bin publication, launcher/profile mutation, release,
  Marketplace, and source-copying behavior require separate IAUs.
