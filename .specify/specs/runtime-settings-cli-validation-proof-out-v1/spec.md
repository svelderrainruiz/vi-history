# Feature Specification: Runtime Settings CLI Validation Proof-Out Adapter

**Feature Branch**:
`codex/runtime-settings-cli-validation-proof-out-admission`

**Created**: 2026-05-19

**Status**: Admission locked for
`IAU-runtime-settings-cli-validation-proof-out-v1`

**Input**: Imported requirements slice
`runtime-settings-cli-validation-proof-out-v1`

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Emit Validation Proof-Out Artifacts (Priority: P1)

An installed user or maintainer can request `vihs --validate --proof-out <dir>`
and receive deterministic proof artifact facts for
`vihs-validation-proof.json` and `vihs-validation-issue.md` from already
available validation/proof facts.

**Why this priority**: The MIT authority already has pure validation readback
and proof-artifact contracts. The next useful proof step is binding those
facts to the public proof-out artifact names without admitting execution.

**Independent Test**: A unit test can provide validation readback/proof facts
and a public-safe proof-out target, then verify the adapter returns the two
artifact names, content payloads, and blocked side-effect facts.

**Acceptance Scenarios**:

1. **Given** ready validation proof facts and a public-safe output target,
   **When** proof-out adaptation is invoked, **Then** proof JSON and issue
   Markdown artifact facts are produced deterministically.
2. **Given** missing validation or proof facts, **When** proof-out adaptation
   is invoked, **Then** the adapter fails closed without write facts.
3. **Given** the adapter runs, **When** this IAU is in scope, **Then** it does
   not invoke runtime validation, compare, LabVIEWCLI, Docker, live proof,
   packaging, launcher/profile mutation, Marketplace, or source-copying work.

### User Story 2 - Provide Non-Interactive Proof-Out Guidance (Priority: P1)

A non-interactive or blocked terminal session receives copyable proof-out
guidance instead of a hanging prompt or partial artifact write.

**Why this priority**: `--proof-out` is often used for support and automation,
so blocked flows need stable, copyable recovery text without widening the
terminal I/O adapter into raw process control.

**Independent Test**: A unit test can request non-interactive guidance and
verify no prompt wait, no write side effects, and a copyable
`vihs --validate --proof-out <dir>` command.

### Edge Cases

- The proof-out target is missing, blank, absolute/private, or otherwise not a
  public-safe target fact.
- Validation facts omit required persisted settings or runtime outcome fields.
- The proof artifact contract reports blocked validation.
- A caller attempts to use proof-out adaptation as runtime execution, compare,
  LabVIEWCLI, Docker, live proof, packaging, launcher/profile mutation,
  Marketplace, or source-copying work.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The adapter MUST accept an explicit proof-out target fact and
  resolve `vihs-validation-proof.json` and `vihs-validation-issue.md` artifact
  names. Imported ID: `VHS-REQ-546`.
- **FR-002**: The adapter MUST emit proof JSON and issue Markdown from the
  already admitted validation proof-artifact contract. Imported ID:
  `VHS-REQ-546`.
- **FR-003**: The adapter MUST fail closed when required validation/proof facts
  or proof-out target facts are missing or unsupported. Imported ID:
  `VHS-REQ-546`.
- **FR-004**: Non-interactive or blocked flows MUST return copyable proof-out
  guidance without waiting for terminal input. Imported ID: `VHS-REQ-546`.
- **FR-005**: The adapter MUST keep runtime validation execution, compare
  execution, LabVIEWCLI execution, Docker command execution/orchestration, live
  proof, package/bin publication, launcher/profile mutation, Marketplace work,
  and source copying blocked.
- **FR-006**: The implementation MUST remain clean-room: no implementation
  source is copied from another product line.

### Key Entities

- **Proof-Out Request**: Public-safe request facts for
  `vihs --validate --proof-out <dir>`.
- **Proof-Out Target**: A supplied output target identifier represented without
  private host path leakage.
- **Proof-Out Artifact Facts**: Deterministic artifact names and content for
  proof JSON and issue Markdown.
- **Proof-Out Guidance**: Copyable non-interactive command guidance for blocked
  or non-prompting contexts.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: The public import manifest lists `VHS-REQ-546`, prerequisite IDs
  `VHS-REQ-537`, `VHS-REQ-544`, `VHS-REQ-545`, and supporting signal
  `TEST-UNIT-392`.
- **SC-002**: `spec.md`, `plan.md`, and `tasks.md` define
  `IAU-runtime-settings-cli-validation-proof-out-v1` and keep runtime
  execution, compare, LabVIEWCLI, Docker, live proof, publication, mutation,
  Marketplace, and source copying blocked.
- **SC-003**: The admission record states that implementation is admitted only
  for T009-T014 after the admission PR merges and a separate handoff issue is
  created.
- **SC-004**: Public validation rejects private paths, credentials, private
  evidence, private control-plane terms, and copied implementation-source
  instructions.
- **SC-005**: Marketplace publication remains disabled.

## Assumptions

- The proof-out adapter consumes supplied validation/proof facts; it does not
  discover or execute runtime behavior.
- Existing validation readback and proof-artifact contracts remain prerequisites
  rather than duplicated behavior.
- Future runtime execution, compare, live proof, package/bin publication,
  launcher/profile mutation, Marketplace, and source-copying behavior require
  separate IAUs.
