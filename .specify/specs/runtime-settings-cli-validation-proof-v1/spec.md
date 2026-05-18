# Feature Specification: Runtime Settings CLI Validation Proof

**Feature Branch**: `codex/runtime-settings-cli-validation-proof-admission`

**Created**: 2026-05-18

**Status**: Locked for public import and IAU admission; implementation not in
this PR

**Input**: Imported requirements slice
`runtime-settings-cli-validation-proof-v1`

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Retain Validation Proof JSON (Priority: P1)

An installed user or maintainer can retain the result of `vihs --validate` as a
structured proof artifact without starting runtime execution in this IAU.

**Why this priority**: The MIT authority can now shape validation readback
facts. The next small proof-integrity unit is retaining those facts as an
artifact while execution and interactive selection stay blocked.

**Independent Test**: A test can pass validation readback facts to the proof
artifact contract and prove the structured JSON includes persisted settings,
runtime outcome, proof status, implementation status, and error-code fields.

**Acceptance Scenarios**:

1. **Given** ready validation facts, **When** proof generation is invoked,
   **Then** the proof JSON reports the ready outcome and supplied settings
   facts.
2. **Given** blocked validation facts, **When** proof generation is invoked,
   **Then** the proof JSON reports the blocked outcome, stable error code,
   proof status, and implementation status.
3. **Given** proof generation runs, **When** this IAU is in scope, **Then** it
   does not invoke LabVIEWCLI, Docker, compare execution, or runtime
   orchestration.

---

### User Story 2 - Produce Public-Safe Issue Body (Priority: P1)

A maintainer can generate deterministic issue-body text from validation proof
facts for the MIT public authority.

**Why this priority**: Proof artifacts are useful only if they can be reported
without leaking private host details, credentials, or authority-internal
control-plane context.

**Independent Test**: Contract tests can verify generated issue text includes
the stable runtime status fields, points to `svelderrainruiz/vi-history`, and
does not include private paths, private tooling names, credentials, or
source-copying instructions.

**Acceptance Scenarios**:

1. **Given** public-safe validation proof facts, **When** the issue body is
   generated, **Then** the text is deterministic.
2. **Given** secret-like environment variables, **When** proof JSON is
   generated, **Then** secret-like values are redacted.
3. **Given** a proof artifact references an issue destination, **When** this
   public MIT IAU is in scope, **Then** the destination is the MIT public
   authority unless a later governing decision redirects proof intake.

### Edge Cases

- Validation facts omit required runtime outcome fields.
- Environment values include secret-like keys.
- Proof generation attempts to include private filesystem paths, private
  control-plane tooling, or source-copying instructions.
- The implementation starts no-argument interactive selection, compare
  execution, LabVIEWCLI, Docker, packaging, Marketplace publication, or
  live-session proof.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The proof artifact contract MUST retain supplied validation
  readback facts as structured proof JSON. Imported ID: `VHS-REQ-546`.
- **FR-002**: The proof artifact contract MUST include stable
  `runtimeErrorCode`, `runtimeProofStatus`, and
  `runtimeImplementationStatus` fields. Imported ID: `VHS-REQ-546`.
- **FR-003**: The proof artifact contract MUST redact secret-like environment
  values from public output. Imported ID: `VHS-REQ-546`.
- **FR-004**: The proof artifact contract MUST produce deterministic
  issue-body content for the MIT public authority. Imported ID:
  `VHS-REQ-546`.
- **FR-005**: The proof artifact contract MUST fail closed when required
  validation facts are missing or unsupported. Imported ID: `VHS-REQ-546`.
- **FR-006**: The proof artifact contract MUST NOT run no-argument interactive
  selection, compare execution, LabVIEWCLI, Docker, live-session proof,
  packaging, or Marketplace publication.
- **FR-007**: The implementation MUST remain clean-room: no implementation
  source is copied from another product line.

### Key Entities

- **Validation Proof Facts**: Persisted settings facts plus runtime outcome,
  provider, engine, blocked reason, error code, proof status, and
  implementation status.
- **Validation Proof Artifact**: Public-safe structured JSON representation of
  validation proof facts.
- **Validation Issue Body**: Deterministic public issue-body text generated
  from proof facts for the MIT public authority.
- **Reportable Environment Facts**: Public-safe host/environment fields with
  secret-like values redacted.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: The public import manifest lists `VHS-REQ-546` and supporting
  test signal `TEST-UNIT-392`.
- **SC-002**: `spec.md`, `plan.md`, and `tasks.md` define
  `IAU-runtime-settings-cli-validation-proof-artifact-v1` and keep interactive
  selection, compare execution, runtime execution, live-session proof,
  packaging, and Marketplace blocked.
- **SC-003**: Public validation rejects private paths, private tooling names,
  credentials, private evidence, and copied implementation-source
  instructions.
- **SC-004**: The admission record states that
  `IAU-runtime-settings-cli-validation-proof-artifact-v1` is the current
  admitted IAU after this PR merges and admits only T009-T012.
- **SC-005**: Marketplace publication remains disabled.

## Assumptions

- The imported requirement ID and semantics are immutable baseline references.
- The proof artifact IAU consumes validation facts; it does not discover or
  execute runtime behavior.
- Future no-argument interactive selection, compare execution, live-session
  proof, package, and Marketplace behavior require separate IAUs.
