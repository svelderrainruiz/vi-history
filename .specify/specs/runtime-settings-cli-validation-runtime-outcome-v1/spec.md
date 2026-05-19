# Feature Specification: Runtime Settings CLI Validation Runtime Outcome Facts

**Feature Branch**:
`codex/runtime-settings-cli-validation-runtime-outcome`

**Created**: 2026-05-19

**Status**: Implemented for
`IAU-runtime-settings-cli-validation-runtime-outcome-v1`

**Input**: Imported requirements slice
`runtime-settings-cli-validation-runtime-outcome-v1`

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Create Runtime Outcome Facts From Supplied Selection Facts (Priority: P1)

An installed user or maintainer can rely on the public MIT `vihs --validate`
proof chain to consume normalized runtime outcome facts without hand-writing a
`runtimeOutcome` object for each test.

**Why this priority**: The MIT authority already has validation readback,
proof artifact, proof-out adapter, and file-emission contracts. The next
smallest useful step is a pure adapter that derives the same runtime outcome
fields from supplied public-safe runtime selection facts without executing a
runtime.

**Independent Test**: A unit test can provide public-safe selection facts with
provider, engine, and blocked-reason values, then verify the adapter returns a
deterministic `runtimeOutcome` object.

**Acceptance Scenarios**:

1. **Given** an available provider with no blocked reason, **When** runtime
   outcome facts are created, **Then** the result maps to `VIHS_OK`, `ready`,
   `ready`, and `implemented`.
2. **Given** a blocked runtime selection, **When** runtime outcome facts are
   created, **Then** the result includes a stable public error code, proof
   status, and implementation status.
3. **Given** a not-yet-implemented provider/version/platform case, **When**
   runtime outcome facts are created, **Then** implementation status is
   `not-implemented`.

### User Story 2 - Compose With The Existing Proof Chain (Priority: P1)

Generated runtime outcome facts can be passed into the existing validation
readback, proof artifact, proof-out adapter, and file-emission contracts
without changing their output shapes.

**Why this priority**: This lane should connect existing contracts, not
redesign proof JSON, issue Markdown, proof-out target handling, or file writes.

**Independent Test**: A unit test can create runtime outcome facts, pass them
through the existing readback and proof-out chain, and verify the proof content
retains the generated fields.

**Acceptance Scenarios**:

1. **Given** generated runtime outcome facts and persisted settings, **When**
   validation readback is invoked, **Then** the readback result reports the
   generated runtime outcome object.
2. **Given** readback output from generated facts, **When** proof and proof-out
   contracts are invoked, **Then** proof JSON and issue Markdown include the
   same stable runtime status fields.
3. **Given** generated facts are missing or unsupported, **When** composition
   is attempted, **Then** the chain fails closed before reporting ready status.

### Edge Cases

- Provider facts are missing, blank, or unsupported.
- Blocked reason is missing for an unavailable provider.
- Blocked reason is known and maps to a specific public error code.
- Blocked reason is unknown and must map to
  `VIHS_E_RUNTIME_VALIDATION_BLOCKED`.
- A caller attempts to use the adapter for OS inspection, runtime locators,
  runtime validation execution, compare, LabVIEWCLI, Docker, live proof,
  publication, launcher/profile mutation, release, Marketplace, or source
  copying.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The runtime outcome adapter MUST export
  `createRuntimeSettingsValidationRuntimeOutcome(input = {})`. Imported ID:
  `VHS-REQ-546`.
- **FR-002**: The adapter MUST return
  `type: "runtime-settings-cli-validation-runtime-outcome-contract"` and a
  normalized `runtimeOutcome` object containing
  `runtimeValidationOutcome`, `runtimeProvider`, `runtimeEngine`,
  `runtimeBlockedReason`, `runtimeErrorCode`, `runtimeProofStatus`, and
  `runtimeImplementationStatus`. Imported ID: `VHS-REQ-546`.
- **FR-003**: The adapter MUST map available provider facts without a blocked
  reason to `VIHS_OK`, `ready`, `ready`, and `implemented`. Imported ID:
  `VHS-REQ-546`.
- **FR-004**: The adapter MUST map blocked facts to deterministic public
  runtime error, proof status, and implementation status fields. Imported ID:
  `VHS-REQ-546`.
- **FR-005**: The adapter MUST map unknown blocked reasons to
  `VIHS_E_RUNTIME_VALIDATION_BLOCKED` and
  `blocked-or-missing-prerequisite`. Imported ID: `VHS-REQ-546`.
- **FR-006**: The adapter MUST compose with existing validation readback,
  proof artifact, proof-out adapter, and file-emission contracts without
  changing their output shapes.
- **FR-007**: The adapter MUST keep OS inspection, runtime locators, runtime
  validation execution, compare execution, LabVIEWCLI execution, Docker
  command execution/orchestration, live proof, package/bin publication,
  launcher/profile mutation, release automation, Marketplace work, and source
  copying blocked.
- **FR-008**: The implementation MUST remain clean-room: no implementation
  source is copied from another product line.

### Key Entities

- **Runtime Selection Facts**: Public-safe facts supplied by a caller, such as
  provider, engine, and blocked reason.
- **Runtime Outcome Facts**: The normalized `runtimeOutcome` object consumed by
  the existing validation readback contract.
- **Runtime Outcome Result**: The adapter result containing status, type,
  runtime outcome facts, blocked side-effect facts, and imported requirement
  IDs.
- **Blocked Side-Effect Facts**: Facts showing OS probing, runtime execution,
  publication, mutation, release, Marketplace, and source-copying behavior did
  not occur.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: The public import manifest lists `VHS-REQ-546`, prerequisite IDs
  `VHS-REQ-537`, `VHS-REQ-543`, `VHS-REQ-544`, `VHS-REQ-545`, and supporting
  signal `TEST-UNIT-392`.
- **SC-002**: `spec.md`, `plan.md`, and `tasks.md` define
  `IAU-runtime-settings-cli-validation-runtime-outcome-v1` and keep execution,
  publication, mutation, release, Marketplace, and source copying blocked.
- **SC-003**: The admission record states that T009-T016 are implemented and
  Issue #91 is the implementation handoff. Current Implementation Admission Unit
  is `none`.
- **SC-004**: Public validation rejects private paths, credentials, private
  evidence, private control-plane terms, and copied implementation-source
  instructions.
- **SC-005**: Marketplace publication remains disabled.

## Assumptions

- Runtime selection facts are supplied to this adapter; the adapter does not
  discover them from the host OS or a runtime locator.
- Existing validation readback, proof artifact, proof-out adapter, and
  file-emission contracts keep their output shapes.
- Docker provider selection remains a latest supported NI LabVIEW image-family
  concern and exposes no user-facing Docker bitness choice.
- Future runtime execution, compare, live proof, package/bin publication,
  launcher/profile mutation, release, Marketplace, and source-copying behavior
  require separate IAUs.
