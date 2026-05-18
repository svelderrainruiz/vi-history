# Feature Specification: Runtime Settings CLI Settings Write

**Feature Branch**: `codex/runtime-settings-cli-settings-write-admission`

**Created**: 2026-05-18

**Status**: Locked for public import and IAU admission; implementation not in this PR

**Input**: Imported requirements slice `runtime-settings-cli-settings-write-v1`

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Persist Runtime Selection Facts (Priority: P1)

An installed user can use the terminal-facing runtime settings surface to persist
the selected provider, LabVIEW version, and LabVIEW bitness facts that later
surfaces can read.

**Why this priority**: The MIT authority now has a prepare-command shell. The
next small unit is the settings-write contract itself, without validation,
compare execution, or runtime execution.

**Independent Test**: A test can pass initial settings content plus a requested
provider/version/bitness bundle to the settings-write contract and prove the
result updates only the governed VI History keys.

**Acceptance Scenarios**:

1. **Given** existing settings content, **When** the settings-write contract is
   invoked with provider, LabVIEW version, and LabVIEW bitness facts, **Then**
   the result contains `viHistorySuite.runtimeProvider`,
   `viHistorySuite.labviewVersion`, and `viHistorySuite.labviewBitness`.
2. **Given** unrelated settings exist, **When** governed runtime facts are
   written, **Then** unrelated settings remain unchanged.
3. **Given** a settings target is updated, **When** the result is returned,
   **Then** the effective settings target is explicit.

---

### User Story 2 - Fail Closed On Unsupported Settings Targets (Priority: P1)

A maintainer can implement settings writes without widening into arbitrary
settings editing or hiding unsafe target behavior.

**Why this priority**: Settings mutation has more risk than a command shell.
The public MIT authority needs a narrow, inspectable contract before validation
or execution can depend on persisted settings.

**Independent Test**: Contract tests can verify comments or trailing commas are
handled according to the public spec and that unsupported target shapes fail
closed without partial writes.

**Acceptance Scenarios**:

1. **Given** settings content with comments or trailing commas, **When** the
   settings-write contract is invoked, **Then** the admitted parser path updates
   governed keys while preserving unrelated content semantics.
2. **Given** a non-object or unsupported target shape, **When** the
   settings-write contract is invoked, **Then** the result fails closed and
   reports a stable blocked reason.
3. **Given** runtime validation is requested, **When** this IAU is in scope,
   **Then** validation remains blocked.

### Edge Cases

- The settings-write contract updates keys outside the governed VI History
  provider/version/bitness set.
- The target shape cannot be treated as one mutable settings object.
- Comments or trailing commas cause an unsafe partial write.
- The implementation starts `vihs --validate`, compare execution, LabVIEWCLI,
  Docker, packaging, Marketplace publication, or live-session proof.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The settings-write contract MUST update
  `viHistorySuite.runtimeProvider`, `viHistorySuite.labviewVersion`, and
  `viHistorySuite.labviewBitness` from explicit input facts. Imported ID:
  `VHS-REQ-537`.
- **FR-002**: The settings-write contract MUST report the effective settings
  target for every successful or failed update. Imported ID: `VHS-REQ-543`.
- **FR-003**: The settings-write contract MUST preserve unrelated settings
  content and MUST NOT update keys outside the governed VI History settings
  facts. Imported ID: `VHS-REQ-543`.
- **FR-004**: The settings-write contract MUST handle settings content with
  comments or trailing commas according to the public spec, or fail closed
  without partial writes when the target cannot be normalized safely. Imported
  ID: `VHS-REQ-543`.
- **FR-005**: The settings-write contract MUST NOT run `vihs --validate`,
  runtime validation, compare execution, LabVIEWCLI, Docker, live-session proof,
  packaging, or Marketplace publication.
- **FR-006**: The implementation MUST remain clean-room: no implementation
  source is copied from another product line.

### Key Entities

- **Runtime Settings Facts**: Provider, LabVIEW version, and LabVIEW bitness.
- **Effective Settings Target**: The user-scope or explicitly supplied settings
  target the write contract reports.
- **Settings Write Result**: The updated settings content or fail-closed result
  with stable blocked reason.
- **Blocked Validation And Execution Surface**: Runtime validation, compare
  execution, LabVIEWCLI, Docker, packaging, Marketplace, and live-session proof.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: The public import manifest lists `VHS-REQ-537` and
  `VHS-REQ-543`.
- **SC-002**: `spec.md`, `plan.md`, and `tasks.md` define
  `IAU-runtime-settings-cli-settings-write-contract-v1` and keep validation,
  compare, execution, live-session proof, packaging, and Marketplace blocked.
- **SC-003**: Public validation rejects private paths, private tooling names,
  credentials, private evidence, and copied implementation-source instructions.
- **SC-004**: The admission record states that
  `IAU-runtime-settings-cli-settings-write-contract-v1` is the current admitted
  IAU after this PR merges and admits only T009-T012.
- **SC-005**: Marketplace publication remains disabled.

## Assumptions

- The imported requirement IDs and semantics are immutable baseline references.
- This feature admits the smallest settings-write contract only.
- Future validation, no-argument interactive selection, compare execution,
  live-session proof, package, and Marketplace behavior require separate IAUs.
