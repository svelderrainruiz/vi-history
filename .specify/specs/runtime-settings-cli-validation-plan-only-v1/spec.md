# Feature Specification: Runtime Settings CLI Validation Plan-Only

**Feature Branch**:
`codex/runtime-settings-cli-validation-plan-only-admission`

**Created**: 2026-05-19

**Status**: Admitted for
`IAU-runtime-settings-cli-validation-plan-only-v1`

**Input**: Imported requirements slice
`runtime-settings-cli-validation-plan-only-v1`

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Plan Proof-Out Without Writing Files (Priority: P1)

An installed user or maintainer can ask the public MIT validation command
contract for `validate-plan-only` facts and receive the intended proof-out
target and artifact facts without mutating the filesystem.

**Why this priority**: The command contract already supports validation and
proof-out emission through an admitted writer. The next smallest useful step is
the non-writing plan mode that lets callers preview the proof-out target and
artifact names before any file-emission behavior is used.

**Independent Test**: A unit test can provide ready validation facts and a
supported proof-out target, then verify
`createRuntimeSettingsValidationCommandResult(input = {})` returns
`validate-plan-only` facts with no writer calls.

**Acceptance Scenarios**:

1. **Given** ready validation facts and a supported proof-out target,
   **When** a plan-only command result is created, **Then** the result reports
   planned proof-out target and artifact facts without writing files.
2. **Given** ready validation facts and no proof-out target, **When** a
   plan-only command result is created, **Then** the result fails closed before
   reporting ready proof-out plan facts.
3. **Given** ready validation facts and an unsupported proof-out target,
   **When** a plan-only command result is created, **Then** the result is
   blocked without hidden partial success.

### User Story 2 - Reuse Existing Validation And Proof Contracts (Priority: P1)

The plan-only mode composes with the existing validation readback, runtime
outcome, proof artifact, and proof-out adapter contracts without redesigning
their output shapes or calling the file-emission writer.

**Why this priority**: This preserves the clean ladder: read and shape facts,
plan proof artifacts, and only later use a separate admitted lane for writing
files.

**Independent Test**: A unit test can provide proof artifact and proof-out
adapter facts and assert the command result includes planned
`vihs-validation-proof.json` and `vihs-validation-issue.md` facts while the
file-emission writer is not invoked.

### User Story 3 - Preserve The Clean-Room Execution Boundary (Priority: P1)

The plan-only mode reports deterministic non-interactive guidance and blocked
side-effect facts without opening runtime discovery, execution, terminal/bin,
publication, or source-sharing behavior.

**Why this priority**: Planning must stay non-mutating and public-safe. It
must not become a back door to runtime locators, validation execution, file
emission, packaging, release, Marketplace, or source copying.

**Independent Test**: A unit test can inspect the result and side-effect facts
to confirm no filesystem write, OS probing, runtime locator, LabVIEWCLI,
Docker, compare, terminal process wiring, publication, release, Marketplace,
or source copying occurred.

### Edge Cases

- `validate-plan-only` is requested without a proof-out target.
- The proof-out target is unsupported or malformed.
- Required validation facts are missing or blocked.
- Existing proof artifact or proof-out adapter facts are not ready.
- A caller supplies a filesystem adapter or writer and expects it to be called.
- A caller attempts to use plan-only for OS inspection, runtime locators,
  runtime validation execution, compare, LabVIEWCLI, Docker, terminal process
  wiring, live proof, publication, release, Marketplace, or source copying.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The command contract MUST accept `validate-plan-only` as a
  bounded request mode over
  `createRuntimeSettingsValidationCommandResult(input = {})`. Imported ID:
  `VHS-REQ-546`.
- **FR-002**: The plan-only mode MUST require ready validation facts and a
  supported proof-out target before reporting planned proof-out facts.
  Imported ID: `VHS-REQ-546`.
- **FR-003**: The plan-only mode MUST compose through the existing validation
  readback, runtime outcome, proof artifact, and proof-out adapter contracts
  without changing their output shapes. Imported ID: `VHS-REQ-546`.
- **FR-004**: The plan-only mode MUST report exactly the planned artifact names
  `vihs-validation-proof.json` and `vihs-validation-issue.md` when the request
  is ready. Imported ID: `VHS-REQ-546`.
- **FR-005**: The plan-only mode MUST NOT call the proof-out file-emission
  writer and MUST NOT write proof files.
- **FR-006**: The plan-only mode MUST fail closed for missing validation
  facts, missing or unsupported proof-out targets, malformed inputs, or any
  attempt to trigger hidden side effects.
- **FR-007**: The plan-only mode MUST keep runtime locator invocation, OS
  inspection, private path discovery, runtime validation execution, compare
  execution, LabVIEWCLI execution, Docker command execution/orchestration, raw
  terminal process wiring, live proof, package/bin publication,
  launcher/profile mutation, VSIX packaging, Marketplace work, release
  automation, file writes for plan-only, and source copying blocked.
- **FR-008**: The contract MUST preserve the corrected Docker wording: Docker
  provider selection means the latest supported NI LabVIEW image family,
  64-bit-only by image/platform, with no user-facing Docker bitness choice.
- **FR-009**: The implementation MUST remain clean-room: no implementation
  source is copied from another VI History product line.

### Key Entities

- **Validation Plan-Only Request**: Public-safe facts for `vihs --validate`,
  request mode `validate-plan-only`, and a proof-out target.
- **Proof-Out Plan Facts**: Planned target and artifact facts for proof JSON
  and issue Markdown that are not written to disk.
- **Validation Command Result**: The command identity, validation status,
  composed plan facts, guidance, and blocked side-effect facts returned by the
  pure command contract.
- **Blocked Side-Effect Facts**: Facts showing file emission, execution,
  terminal wiring, publication, release, Marketplace, mutation, and source
  copying did not occur.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: The public import manifest lists `VHS-REQ-546`, prerequisite IDs
  `VHS-REQ-537`, `VHS-REQ-543`, `VHS-REQ-544`, `VHS-REQ-545`, and supporting
  signal `TEST-UNIT-392`.
- **SC-002**: `spec.md`, `plan.md`, and `tasks.md` define
  `IAU-runtime-settings-cli-validation-plan-only-v1` and keep runtime
  execution, terminal process wiring, file emission for plan-only,
  publication, mutation, release, Marketplace, and source copying blocked.
- **SC-003**: The admission record states that T009-T016 are admitted for the
  plan-only IAU and the Current Implementation Admission Unit is
  `IAU-runtime-settings-cli-validation-plan-only-v1`.
- **SC-004**: Public validation rejects private paths, credentials, private
  evidence, private control-plane terms, and copied implementation-source
  instructions.
- **SC-005**: Marketplace publication remains disabled.

## Assumptions

- Ready validation facts are supplied to the command contract; the contract
  does not discover them from the host OS or a runtime locator.
- Existing validation readback, runtime outcome, proof artifact, proof-out
  adapter, command-result, and file-emission contracts keep their output
  shapes.
- Docker provider selection remains a latest supported NI LabVIEW image-family
  concern and exposes no user-facing Docker bitness choice.
- Future runtime execution, terminal/bin wiring, compare, live proof,
  package/bin publication, launcher/profile mutation, release, Marketplace,
  file emission for plan-only, and source-copying behavior require separate
  IAUs.
