# Feature Specification: Runtime Settings CLI Validation Proof-Out File Emission

**Feature Branch**:
`codex/runtime-settings-cli-validation-proof-out-file-emission`

**Created**: 2026-05-19

**Status**: Implemented for
`IAU-runtime-settings-cli-validation-proof-out-file-emission-v1`

**Input**: Imported requirements slice
`runtime-settings-cli-validation-proof-out-file-emission-v1`

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Write Proof-Out Files From Ready Adapter Facts (Priority: P1)

An installed user or maintainer can request `vihs --validate --proof-out <dir>`
after proof-out adapter facts are ready and receive exactly two files in the
supported target directory: `vihs-validation-proof.json` and
`vihs-validation-issue.md`.

**Why this priority**: The MIT authority already has pure validation readback,
proof-artifact, and proof-out adapter contracts. The next useful proof step is
bounded file emission from those ready payload facts without admitting runtime
validation execution.

**Independent Test**: A unit test can provide a ready
`runtime-settings-cli-validation-proof-out-adapter-contract` and a public-safe
proof-out target, then verify the target directory is created and only the two
expected files are written with deterministic content.

**Acceptance Scenarios**:

1. **Given** ready proof-out adapter facts and a supported output target,
   **When** file emission is invoked, **Then** exactly
   `vihs-validation-proof.json` and `vihs-validation-issue.md` are written.
2. **Given** ready artifact payloads, **When** files are emitted, **Then** file
   content matches the proof-out adapter payload facts exactly.
3. **Given** a supported target directory does not exist, **When** emission is
   invoked, **Then** the directory is created before the two file writes.

### User Story 2 - Fail Closed Without Hidden Partial Success (Priority: P1)

A blocked or unsupported proof-out file-emission request returns deterministic
failure facts instead of reporting success or silently hiding a partial write.

**Why this priority**: File emission touches the filesystem. The public MIT
contract must make failure states explicit without widening the lane into
runtime execution, source copying, release work, or OS-specific terminal
drivers.

**Independent Test**: Unit tests can supply missing/unready adapter facts,
unsupported targets, and injected I/O failures, then verify fail-closed result
facts and no hidden ready status.

**Acceptance Scenarios**:

1. **Given** missing or unready proof-out adapter facts, **When** emission is
   invoked, **Then** no file writes are attempted.
2. **Given** an unsupported output target, **When** emission is invoked,
   **Then** no file writes are attempted.
3. **Given** an I/O failure occurs, **When** emission returns, **Then** the
   result records the failed write and does not report hidden partial success.

### Edge Cases

- The proof-out adapter is missing, blocked, or not a
  `runtime-settings-cli-validation-proof-out-adapter-contract`.
- The proof-out target is missing, blank, absolute/private, or otherwise not a
  public-safe relative target fact.
- Required artifact payloads are unavailable or not strings.
- Directory creation fails.
- The first file write succeeds and the second file write fails.
- A caller attempts to use file emission as runtime validation, compare,
  LabVIEWCLI, Docker, live proof, packaging, launcher/profile mutation,
  Marketplace, or source-copying work.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The file-emission adapter MUST require a ready
  `runtime-settings-cli-validation-proof-out-adapter-contract`. Imported ID:
  `VHS-REQ-546`.
- **FR-002**: The adapter MUST create the supported public-safe output target
  directory when safe. Imported ID: `VHS-REQ-546`.
- **FR-003**: The adapter MUST write exactly `vihs-validation-proof.json` and
  `vihs-validation-issue.md` from the ready proof-out adapter payload facts.
  Imported ID: `VHS-REQ-546`.
- **FR-004**: The adapter MUST return deterministic write-result facts for the
  emitted files, including failure facts when writes cannot complete. Imported
  ID: `VHS-REQ-546`.
- **FR-005**: The adapter MUST fail closed when adapter facts, artifact
  payloads, or output targets are missing, unready, or unsupported. Imported
  ID: `VHS-REQ-546`.
- **FR-006**: The adapter MUST make partial I/O failure explicit and MUST NOT
  report hidden partial success.
- **FR-007**: The adapter MUST keep runtime validation execution, new
  validation fact generation, compare execution, LabVIEWCLI execution, Docker
  command execution/orchestration, live proof, package/bin publication,
  launcher/profile mutation, Marketplace work, and source copying blocked.
- **FR-008**: The implementation MUST remain clean-room: no implementation
  source is copied from another product line.

### Key Entities

- **Ready Proof-Out Adapter Facts**: A completed
  `runtime-settings-cli-validation-proof-out-adapter-contract` containing the
  target facts and deterministic proof JSON / issue Markdown payloads.
- **Proof-Out File Emission Request**: A bounded request to emit the ready
  proof-out adapter payloads for `vihs --validate --proof-out <dir>`.
- **Proof-Out File Emission Result**: Deterministic write-result facts naming
  the target directory, the two artifact files, write status, and any explicit
  failure reason.
- **Blocked Side-Effect Facts**: Facts showing runtime execution, publication,
  mutation, Marketplace, and source-copying behavior did not occur.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: The public import manifest lists `VHS-REQ-546`, prerequisite IDs
  `VHS-REQ-537`, `VHS-REQ-544`, `VHS-REQ-545`, and supporting signal
  `TEST-UNIT-392`.
- **SC-002**: `spec.md`, `plan.md`, and `tasks.md` define
  `IAU-runtime-settings-cli-validation-proof-out-file-emission-v1` and keep
  runtime validation, new validation fact generation, compare, LabVIEWCLI,
  Docker, live proof, publication, mutation, Marketplace, and source copying
  blocked.
- **SC-003**: The admission record states that implementation is complete only
  for T009-T016 and that the current Implementation Admission Unit is `none`.
- **SC-004**: Public validation rejects private paths, credentials, private
  evidence, private control-plane terms, and copied implementation-source
  instructions.
- **SC-005**: Marketplace publication remains disabled.

## Assumptions

- Proof content generation remains delegated to the already implemented
  validation proof-artifact and proof-out adapter contracts.
- This lane writes existing proof-out payload facts; it does not run validation
  or create new validation facts.
- Public MIT tests use public-safe relative targets or temporary test
  directories without committing private paths.
- Future runtime execution, compare, live proof, package/bin publication,
  launcher/profile mutation, Marketplace, and source-copying behavior require
  separate IAUs.
