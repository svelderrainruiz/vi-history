# Feature Specification: Runtime Settings CLI Validation Readback

**Feature Branch**: `codex/runtime-settings-cli-validation-readback-admission`

**Created**: 2026-05-18

**Status**: Locked for public import and IAU admission; implementation not in
this PR

**Input**: Imported requirements slice
`runtime-settings-cli-validation-readback-v1`

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Report Persisted Runtime Settings (Priority: P1)

An installed user can run the validation readback surface and see the persisted
provider, LabVIEW version, LabVIEW bitness, and effective settings target facts.

**Why this priority**: The MIT authority can now write governed settings facts.
The next small unit is reading those facts back through the validation surface
without interactive selection, proof-out files, compare execution, or runtime
execution.

**Independent Test**: A test can pass persisted settings facts and an effective
target to the validation readback contract and prove the result reports them
without mutating settings content.

**Acceptance Scenarios**:

1. **Given** persisted provider/version/bitness facts, **When** validation
   readback is invoked, **Then** the result reports those exact facts.
2. **Given** an explicit settings target, **When** validation readback is
   invoked, **Then** the result reports that effective target.
3. **Given** settings content, **When** validation readback is invoked, **Then**
   the settings are not modified.

---

### User Story 2 - Report Bounded Runtime Outcome Facts (Priority: P1)

A maintainer can implement `vihs --validate` result shaping without starting
runtime execution or proof artifact generation.

**Why this priority**: Validation is an important user-facing boundary, but it
must stay smaller than compare execution, LabVIEWCLI execution, Docker
orchestration, and proof-out file generation.

**Independent Test**: Contract tests can verify a validation result includes
runtime outcome, provider, engine, blocked reason, error code, proof status, and
implementation status fields supplied by a pure classifier.

**Acceptance Scenarios**:

1. **Given** a ready persisted host bundle and runtime outcome facts, **When**
   validation readback is invoked, **Then** the result reports a ready outcome
   without invoking LabVIEWCLI or Docker.
2. **Given** an unsupported persisted bundle, **When** validation readback is
   invoked, **Then** the result fails closed with stable runtime outcome fields.
3. **Given** proof-out file generation is requested, **When** this IAU is in
   scope, **Then** proof-out remains blocked.

### Edge Cases

- Persisted settings are missing one or more required runtime facts.
- Runtime outcome facts are unavailable or inconsistent.
- Validation readback attempts to reopen path-picking, image-family selection,
  or a panel-side provider picker.
- The implementation starts no-argument interactive selection, proof-out file
  generation, compare execution, LabVIEWCLI, Docker, packaging, Marketplace
  publication, or live-session proof.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The validation readback contract MUST report the effective
  settings target without mutating settings content. Imported ID:
  `VHS-REQ-543`.
- **FR-002**: The validation readback contract MUST report persisted
  `viHistorySuite.runtimeProvider`, `viHistorySuite.labviewVersion`, and
  `viHistorySuite.labviewBitness` facts. Imported ID: `VHS-REQ-546`.
- **FR-003**: The validation readback contract MUST report runtime outcome
  fields: outcome, provider, engine, blocked reason, error code, proof status,
  and implementation status. Imported ID: `VHS-REQ-546`.
- **FR-004**: The validation readback contract MUST fail closed with stable
  result fields when persisted settings or runtime outcome facts are missing or
  unsupported. Imported ID: `VHS-REQ-546`.
- **FR-005**: The validation readback contract MUST NOT run no-argument
  interactive selection, proof-out file generation, compare execution,
  LabVIEWCLI, Docker, live-session proof, packaging, or Marketplace
  publication.
- **FR-006**: The implementation MUST remain clean-room: no implementation
  source is copied from another product line.

### Key Entities

- **Persisted Runtime Settings Facts**: Provider, LabVIEW version, and LabVIEW
  bitness.
- **Effective Settings Target**: The governed settings target reported by the
  validation readback.
- **Runtime Outcome Facts**: Outcome, provider, engine, blocked reason, error
  code, proof status, and implementation status.
- **Validation Readback Result**: Deterministic result object returned by the
  pure validation contract.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: The public import manifest lists `VHS-REQ-543` and
  `VHS-REQ-546`.
- **SC-002**: `spec.md`, `plan.md`, and `tasks.md` define
  `IAU-runtime-settings-cli-validation-readback-contract-v1` and keep
  interactive selection, proof-out files, compare execution, runtime execution,
  live-session proof, packaging, and Marketplace blocked.
- **SC-003**: Public validation rejects private paths, private tooling names,
  credentials, private evidence, and copied implementation-source instructions.
- **SC-004**: The admission record states that
  `IAU-runtime-settings-cli-validation-readback-contract-v1` is the current
  admitted IAU after this PR merges and admits only T009-T012.
- **SC-005**: Marketplace publication remains disabled.

## Assumptions

- The imported requirement IDs and semantics are immutable baseline references.
- This feature admits validation readback/result shaping only.
- Future no-argument interactive selection, proof-out file generation, compare
  execution, live-session proof, package, and Marketplace behavior require
  separate IAUs.
