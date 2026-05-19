# Feature Specification: Runtime Settings CLI Validation Command Contract

**Feature Branch**:
`codex/runtime-settings-cli-validation-command-contract-admission`

**Created**: 2026-05-19

**Status**: Implemented for
`IAU-runtime-settings-cli-validation-command-contract-v1`

**Input**: Imported requirements slice
`runtime-settings-cli-validation-command-contract-v1`

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Return One Validation Command Result (Priority: P1)

An installed user or maintainer can rely on the public MIT `vihs --validate`
contract to return one deterministic command result from public-safe persisted
settings facts and supplied runtime selection facts.

**Why this priority**: The MIT authority already has settings write,
validation readback, validation runtime outcome, proof artifact, proof-out
adapter, and file-emission contracts. The next smallest useful step is the
command-level composition contract that a future real CLI entrypoint can call.

**Independent Test**: A unit test can provide settings facts and runtime
selection facts, then verify `createRuntimeSettingsValidationCommandResult`
returns the same command result shape every time.

**Acceptance Scenarios**:

1. **Given** valid persisted settings facts and ready runtime selection facts,
   **When** validation command result facts are created, **Then** the result
   reports `validate-only`, ready validation status, persisted settings truth,
   generated runtime outcome facts, guidance, and blocked side effects.
2. **Given** missing or invalid persisted settings facts, **When** validation
   command result facts are created, **Then** the result fails closed before
   reporting ready validation status.
3. **Given** missing runtime selection facts, **When** validation command
   result facts are created, **Then** the result fails closed before reporting
   ready validation status.

### User Story 2 - Compose Optional Proof-Out Through Existing Contracts (Priority: P1)

When a caller supplies `--proof-out <dir>`, the command contract composes the
already admitted proof artifact, proof-out adapter, and proof-out file-emission
contracts without changing their output shapes.

**Why this priority**: Proof-out file writing is already admitted and
implemented. This lane must connect command-level validation to that writer
without creating new proof content behavior or runtime validation execution.

**Independent Test**: A unit test can provide a supported proof-out target and
ready proof-out adapter facts, then verify the command result reports the
already admitted two-file emission result.

**Acceptance Scenarios**:

1. **Given** a supported proof-out target, **When** command result facts are
   created, **Then** proof-out composition reports exactly
   `vihs-validation-proof.json` and `vihs-validation-issue.md` through the
   admitted writer.
2. **Given** no proof-out target, **When** command result facts are created,
   **Then** no file writes are attempted and no proof-out success is implied.
3. **Given** an unsupported proof-out target or write failure, **When** command
   result facts are created, **Then** the result is blocked without hidden
   partial success.

### User Story 3 - Preserve The Clean-Room Execution Boundary (Priority: P1)

The command contract reports blocked side-effect facts and copyable guidance
without opening runtime execution, terminal wiring, publication, or
source-sharing scope.

**Why this priority**: This lane intentionally prepares the command truth table
before runtime validation execution or installed terminal/bin wiring is
admitted.

**Independent Test**: A unit test can inspect the result and side-effect facts
to confirm no OS probing, runtime locators, LabVIEWCLI, Docker, compare,
terminal process wiring, publication, release, Marketplace, or source copying
occurred.

### Edge Cases

- Persisted settings facts are missing, malformed, or unsupported.
- Runtime selection facts are missing or unsupported.
- Runtime outcome facts are blocked with a known reason.
- Runtime outcome facts are blocked with an unknown reason and use the runtime
  outcome fallback.
- A proof-out target is omitted.
- A proof-out target is unsupported.
- The admitted file-emission contract reports I/O failure.
- A caller requests `validate-plan-only`.
- A caller attempts to use the command contract for OS inspection, runtime
  locators, runtime validation execution, compare, LabVIEWCLI, Docker,
  terminal process wiring, live proof, publication, release, Marketplace, or
  source copying.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The command contract MUST export
  `createRuntimeSettingsValidationCommandResult(input = {})`. Imported ID:
  `VHS-REQ-546`.
- **FR-002**: The contract MUST return a deterministic command result for
  `vihs --validate` containing command identity, request mode, validation
  status, persisted settings facts, runtime outcome facts, proof-out result
  facts when applicable, non-interactive guidance, blocked reason, blocked
  side-effect facts, and requirement IDs. Imported ID: `VHS-REQ-546`.
- **FR-003**: The contract MUST compose with
  `createRuntimeSettingsValidationRuntimeOutcome(input = {})` and the existing
  validation readback contract without changing either output shape. Imported
  ID: `VHS-REQ-546`.
- **FR-004**: The contract MUST compose optional `--proof-out <dir>` through
  the admitted proof artifact, proof-out adapter, and proof-out file-emission
  contracts only. Imported ID: `VHS-REQ-546`.
- **FR-005**: The contract MUST return one blocked result for missing settings,
  missing runtime selection facts, unsupported proof-out targets, file-emission
  failure, or unsupported command request modes.
- **FR-006**: The contract MUST keep `validate-plan-only` blocked unless a
  later public admission decision explicitly admits it.
- **FR-007**: The contract MUST keep OS inspection, runtime locator invocation,
  private path discovery, runtime validation execution, compare execution,
  LabVIEWCLI execution, Docker command execution/orchestration, raw terminal
  process wiring, live proof, package/bin publication, launcher/profile
  mutation, VSIX packaging, Marketplace work, release automation, and source
  copying blocked.
- **FR-008**: The contract MUST preserve the corrected Docker wording: Docker
  provider selection means the latest supported NI LabVIEW image family,
  64-bit-only by image/platform, with no user-facing Docker bitness choice.
- **FR-009**: The implementation MUST remain clean-room: no implementation
  source is copied from another VI History product line.

### Key Entities

- **Validation Command Request**: Public-safe facts for `vihs --validate`,
  optionally including a proof-out target.
- **Validation Command Result**: The command identity, validation status,
  composed facts, guidance, and blocked side-effect facts returned by the pure
  contract.
- **Proof-Out Composition Result**: Existing proof artifact, proof-out adapter,
  and file-emission facts included when a proof-out target is supplied.
- **Blocked Side-Effect Facts**: Facts showing runtime execution, terminal
  process wiring, publication, release, Marketplace, mutation, and source
  copying did not occur.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: The public import manifest lists `VHS-REQ-546`, prerequisite IDs
  `VHS-REQ-537`, `VHS-REQ-543`, `VHS-REQ-544`, `VHS-REQ-545`, and supporting
  signal `TEST-UNIT-392`.
- **SC-002**: `spec.md`, `plan.md`, and `tasks.md` define
  `IAU-runtime-settings-cli-validation-command-contract-v1` and keep runtime
  execution, terminal process wiring, publication, mutation, release,
  Marketplace, `validate-plan-only`, and source copying blocked.
- **SC-003**: The admission record states that T009-T018 are implemented for
  the command contract and the Current Implementation Admission Unit is
  `none`.
- **SC-004**: Public validation rejects private paths, credentials, private
  evidence, private control-plane terms, and copied implementation-source
  instructions.
- **SC-005**: Marketplace publication remains disabled.

## Assumptions

- Runtime selection facts are supplied to the command contract; the contract
  does not discover them from the host OS or a runtime locator.
- Existing validation readback, runtime outcome, proof artifact, proof-out
  adapter, and file-emission contracts keep their output shapes.
- Docker provider selection remains a latest supported NI LabVIEW image-family
  concern and exposes no user-facing Docker bitness choice.
- Future runtime execution, terminal/bin wiring, compare, live proof,
  package/bin publication, launcher/profile mutation, release, Marketplace,
  `validate-plan-only`, and source-copying behavior require separate IAUs.
