# Feature Specification: Command Handler Entrypoint Shell

**Feature Branch**: `codex/command-handler-entrypoint-admission`

**Created**: 2026-05-18

**Status**: Locked for public import; implementation admitted for entrypoint shell only

**Input**: Imported requirements slice `command-handler-entrypoint-shell-v1`

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Primary Command Has A Runnable Entrypoint (Priority: P1)

An installed user can invoke `VI History` from the explicit command activation
surface, and the extension activates through a registered command handler
without relying on startup activation.

**Why this priority**: The MIT authority already has manifest command metadata.
The next useful product step is a clean-room command entrypoint shell that can
activate intentionally while keeping runtime behavior blocked.

**Independent Test**: A test can activate the extension with a VS Code command
API double and prove `labviewViHistory.open` is registered without starting
Git, LabVIEWCLI, Docker, packaging, or Marketplace behavior.

**Acceptance Scenarios**:

1. **Given** the extension activation function, **When** it is called with a
   command API double, **Then** it registers `labviewViHistory.open`.
2. **Given** startup activation is blocked, **When** the extension activates,
   **Then** no startup activation event is required or added.
3. **Given** runtime behavior is not admitted, **When** the entrypoint shell is
   registered, **Then** it does not start compare execution, LabVIEWCLI,
   Docker, packaging, or Marketplace behavior.

---

### User Story 2 - Non-Admitted Command Behavior Stays Blocked (Priority: P1)

A maintainer can admit a command entrypoint shell without accidentally
implementing documentation rendering or runtime-settings CLI materialization.

**Why this priority**: Command registration is a smaller unit than command
behavior. Keeping these apart prevents a broad Copilot handoff from silently
turning into docs, runtime, or release work.

**Independent Test**: Public admission validation can prove only the named IAU
is current, and entrypoint-shell tests can prove blocked behaviors are not
called.

**Acceptance Scenarios**:

1. **Given** this feature, **When** documentation rendering is proposed, **Then**
   it remains blocked until a documentation IAU admits it.
2. **Given** this feature, **When** runtime settings CLI materialization is
   proposed, **Then** it remains blocked until a runtime-settings IAU admits it.
3. **Given** this feature, **When** compare execution, Docker orchestration, or
   publication work is proposed, **Then** it is rejected as out of scope.

### Edge Cases

- A handler is registered from startup activation instead of explicit command
  activation.
- A handler registration path initializes Git, LabVIEWCLI, Docker, package
  publication, or Marketplace behavior.
- Documentation or runtime settings behavior is added under the entrypoint
  shell task.
- A public handoff asks Copilot to implement T014-T017 from this IAU.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The extension MUST register a command handler for
  `labviewViHistory.open` when `IAU-command-handler-entrypoint-shell-v1` is
  implemented. Imported ID: `VHS-REQ-082`.
- **FR-002**: The extension manifest MUST continue to avoid
  `onStartupFinished` and manifest-level Git activation. Imported ID:
  `VHS-REQ-083`.
- **FR-003**: The extension manifest MUST retain explicit command activation
  events for `labviewViHistory.open`,
  `labviewViHistory.openDocumentation`, and
  `labviewViHistory.prepareLocalRuntimeSettingsCli`. Imported ID:
  `VHS-REQ-594`.
- **FR-004**: The implementation MUST NOT start Git indexing, LabVIEWCLI,
  Docker, compare execution, packaging, or Marketplace behavior from the
  entrypoint shell.
- **FR-005**: Documentation rendering and runtime settings CLI materialization
  MUST remain blocked until separately admitted.
- **FR-006**: The implementation MUST remain clean-room: no implementation
  source is copied from another product line.

### Key Entities

- **Command Entrypoint Shell**: Minimal extension activation surface that
  registers the admitted command handler without implementing blocked product
  behavior.
- **Blocked Behavior Surface**: Documentation rendering, runtime settings CLI
  materialization, compare execution, Docker orchestration, packaging, and
  Marketplace publication.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: The public import manifest lists `VHS-REQ-082`,
  `VHS-REQ-083`, and `VHS-REQ-594`.
- **SC-002**: `spec.md`, `plan.md`, and `tasks.md` define an entrypoint-shell
  IAU and keep T014-T017 blocked.
- **SC-003**: Public validation rejects private paths, private tooling names,
  credentials, private evidence, and copied implementation-source
  instructions.
- **SC-004**: The admission record states that
  `IAU-command-handler-entrypoint-shell-v1` is current and admits T009-T011
  only for this feature.
- **SC-005**: Marketplace publication remains disabled.

## Assumptions

- The imported requirement IDs and semantics are immutable baseline references.
- This feature admits the smallest command-handler shell only.
- Future documentation, runtime settings, compare execution, package, and
  Marketplace behavior require separate IAUs.

