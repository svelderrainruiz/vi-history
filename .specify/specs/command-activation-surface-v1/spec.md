# Feature Specification: Command Activation Surface

**Feature Branch**: `codex/command-activation-import`

**Created**: 2026-05-18

**Status**: Locked for public import; no implementation IAU admitted

**Input**: Imported requirements slice `command-activation-surface-v1`

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Product Commands Activate Explicitly (Priority: P1)

An installed user can invoke the VI History product command, documentation
command, or runtime settings preparation command and expect the extension to
activate from those explicit command entries rather than from startup.

**Why this priority**: Command-driven activation is the smallest public product
surface required before the MIT authority can become a real VS Code extension
without starting runtime behavior.

**Independent Test**: A future manifest contract test can inspect the package
manifest and prove the required activation events are present without starting
VS Code, LabVIEWCLI, Docker, or command handlers.

**Acceptance Scenarios**:

1. **Given** the package manifest, **When** activation events are inspected,
   **Then** it includes `onCommand:labviewViHistory.open`.
2. **Given** the package manifest, **When** activation events are inspected,
   **Then** it includes `onCommand:labviewViHistory.openDocumentation`.
3. **Given** the package manifest, **When** activation events are inspected,
   **Then** it includes
   `onCommand:labviewViHistory.prepareLocalRuntimeSettingsCli`.
4. **Given** startup activation is not admitted, **When** activation events are
   inspected, **Then** the command surface does not rely on startup activation
   as the implementation admission path.

---

### User Story 2 - Public Command Names Stay Stable (Priority: P1)

A maintainer can see the command IDs and display titles that future
implementation must preserve when the manifest contract IAU is admitted.

**Why this priority**: Stable command IDs are required for public handoffs,
test contracts, user instructions, and future extension contribution points.

**Independent Test**: A future manifest contract test can inspect contributed
commands and prove the command IDs and titles match this feature.

**Acceptance Scenarios**:

1. **Given** the public command surface, **When** the primary command is
   declared, **Then** it uses `labviewViHistory.open` with title `VI History`.
2. **Given** the public command surface, **When** the documentation command is
   declared, **Then** it uses `labviewViHistory.openDocumentation` with title
   `Open Documentation`.
3. **Given** the public command surface, **When** the runtime settings command
   is declared, **Then** it uses
   `labviewViHistory.prepareLocalRuntimeSettingsCli` with title
   `Prepare Local Runtime Settings CLI`.

---

### User Story 3 - Runtime Behavior Remains Blocked (Priority: P2)

A maintainer can import and lock command activation requirements without
accidentally admitting command handlers, runtime settings materialization,
compare execution, packaging, or Marketplace publication.

**Why this priority**: Command activation is a product-surface contract. It
must not become a back door for runtime implementation or release work.

**Independent Test**: Public artifact validation can prove this feature has no
implementation admission and that future code requires a named IAU preflight.

**Acceptance Scenarios**:

1. **Given** this feature, **When** a proposal adds command handlers, **Then**
   it is out of scope until a later IAU admits it.
2. **Given** this feature, **When** a proposal starts LabVIEWCLI or Docker
   execution, **Then** it is out of scope.
3. **Given** this feature, **When** a proposal adds packaging or Marketplace
   publication, **Then** it remains blocked by the Marketplace posture
   decision.

### Edge Cases

- A package manifest contributes a command but omits the matching activation
  event.
- A package manifest adds startup activation instead of explicit command
  activation.
- A future implementation tries to add command handlers before manifest
  contract tests are admitted.
- A future implementation treats command activation as permission to package or
  publish.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST retain explicit command activation events for
  `VI History`, `Open Documentation`, and `Prepare Local Runtime Settings CLI`.
  Imported ID: `VHS-REQ-594`.
- **FR-002**: The manifest contract MUST include
  `onCommand:labviewViHistory.open`,
  `onCommand:labviewViHistory.openDocumentation`, and
  `onCommand:labviewViHistory.prepareLocalRuntimeSettingsCli` when a future
  IAU admits manifest implementation. Imported ID: `VHS-REQ-594`.
- **FR-003**: Command IDs and titles MUST remain stable for the public command
  surface: `labviewViHistory.open` / `VI History`,
  `labviewViHistory.openDocumentation` / `Open Documentation`, and
  `labviewViHistory.prepareLocalRuntimeSettingsCli` / `Prepare Local Runtime
  Settings CLI`.
- **FR-004**: Command handler implementation, documentation panel rendering,
  runtime settings CLI materialization, compare execution, Docker execution or
  orchestration, packaging, and Marketplace publication MUST remain blocked
  until separately admitted.
- **FR-005**: The implementation MUST remain clean-room: no implementation
  source is copied from another product line.

### Key Entities *(include if feature involves data)*

- **Command Activation Event**: VS Code manifest activation event for one
  public command ID.
- **Command Contribution**: Public command ID, title, and category intended
  for a future manifest contract IAU.
- **Blocked Runtime Surface**: Command handler, execution, packaging, or
  publishing behavior explicitly outside this import/spec baseline.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: The public import manifest lists `VHS-REQ-594` and all import
  files are present.
- **SC-002**: `spec.md`, `plan.md`, and `tasks.md` define command activation
  and blocked runtime/release scope without admitting code.
- **SC-003**: Public validation rejects private paths, private tooling names,
  credentials, private evidence, and copied implementation-source
  instructions.
- **SC-004**: The admission record states that the feature is `spec-locked`
  and has no current implementation admission unit.
- **SC-005**: Public artifacts keep Marketplace publication disabled.

## Assumptions

- The imported requirement ID and semantics are immutable baseline references.
- The MIT authority may add local IDs for divergent behavior, but it must not
  redefine imported IDs.
- This feature locks product-surface requirements only. Runnable command
  behavior requires a later named IAU preflight.
- Marketplace publication remains disabled; future enablement requires a later
  decision.
