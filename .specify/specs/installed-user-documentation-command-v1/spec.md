# Feature Specification: Installed-User Documentation Command

**Feature Branch**: `codex/installed-user-documentation-command-admission`

**Created**: 2026-05-18

**Status**: Locked for public import and IAU admission; implementation not in this PR

**Input**: Imported requirements slice `installed-user-documentation-command-v1`

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Open Local Documentation From The Command Palette (Priority: P1)

An installed user can invoke `Open Documentation` and reach a local
public-safe documentation surface without repository access.

**Why this priority**: The command activation metadata already exists. The next
small user-facing step is a documentation command that helps users orient
without starting runtime or compare behavior.

**Independent Test**: A test can activate the extension with a command API
double, invoke the documentation handler, and prove it opens or reports the
bundled documentation surface without Git, LabVIEWCLI, Docker, packaging, or
Marketplace behavior.

**Acceptance Scenarios**:

1. **Given** the extension activation function, **When** it is called with a
   command API double, **Then** it registers `labviewViHistory.openDocumentation`
   separately from `labviewViHistory.open`.
2. **Given** a public bundled documentation manifest, **When** the documentation
   command runs, **Then** it opens or reports the local bundled documentation
   surface.
3. **Given** runtime behavior is not admitted, **When** the documentation
   command runs, **Then** it does not start Git, LabVIEWCLI, Docker, compare
   execution, packaging, or Marketplace behavior.

---

### User Story 2 - Bundled Docs Stay Public-Safe (Priority: P1)

A maintainer can add bundled installed-user documentation without leaking
private authority links, local paths, private evidence, or standards-only
control-plane content.

**Why this priority**: The MIT authority is public and clean-room. Documentation
payloads are product behavior and must be safe before implementation opens
them.

**Independent Test**: Public validation can inspect the bundled documentation
manifest and page payloads and reject private or authority-only content.

**Acceptance Scenarios**:

1. **Given** bundled documentation pages, **When** validation runs, **Then** no
   private authority links, private evidence, local filesystem paths, or
   standards-only control-plane pages are present.
2. **Given** the bundled documentation manifest, **When** validation runs,
   **Then** every listed page resolves inside the public bundled docs surface.
3. **Given** a request for runtime settings or compare behavior, **When** it is
   proposed under this feature, **Then** it remains blocked.

### Edge Cases

- The documentation command is accidentally wired to the primary VI History
  command handler.
- The documentation command triggers Git, LabVIEWCLI, Docker, compare
  execution, packaging, or Marketplace behavior.
- Bundled documentation includes private links, private evidence, local paths,
  or authority-only control-plane text.
- Runtime settings CLI materialization is added under the documentation IAU.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The repository MUST retain a bundled documentation manifest and
  at least one extension-user documentation page contract before implementation
  opens the documentation surface. Imported ID: `VHS-REQ-368`.
- **FR-002**: The extension MUST expose
  `labviewViHistory.openDocumentation` as a first-class command that opens or
  reports local bundled documentation without repository access. Imported ID:
  `VHS-REQ-369`.
- **FR-003**: Bundled installed-user documentation MUST exclude private
  authority links, private evidence, local filesystem paths, and standards-only
  control-plane pages. Imported ID: `VHS-REQ-489`.
- **FR-004**: The manifest MUST retain
  `onCommand:labviewViHistory.openDocumentation` and a contributed command
  titled `Open Documentation`. Imported ID: `VHS-REQ-594`.
- **FR-005**: The documentation command MUST NOT start Git indexing,
  LabVIEWCLI, Docker, compare execution, packaging, or Marketplace behavior.
- **FR-006**: The implementation MUST remain clean-room: no implementation
  source is copied from another product line.

### Key Entities

- **Bundled Documentation Manifest**: Public-safe manifest that lists local
  extension-user documentation pages.
- **Bundled Documentation Page**: Public-safe installed-user documentation page
  available without repository access.
- **Documentation Command Panel Shell**: Minimal command handler surface that
  opens or reports bundled documentation without runtime side effects.
- **Blocked Behavior Surface**: Runtime settings CLI materialization, compare
  execution, LabVIEWCLI execution, Docker execution, packaging, and Marketplace
  publication.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: The public import manifest lists `VHS-REQ-368`, `VHS-REQ-369`,
  `VHS-REQ-489`, and `VHS-REQ-594`.
- **SC-002**: `spec.md`, `plan.md`, and `tasks.md` define
  `IAU-documentation-command-panel-shell-v1` and keep runtime settings,
  compare execution, packaging, and Marketplace work blocked.
- **SC-003**: Public validation rejects private paths, private tooling names,
  credentials, private evidence, private authority links, and copied
  implementation-source instructions.
- **SC-004**: The admission record states that
  `IAU-documentation-command-panel-shell-v1` is the current admitted IAU after
  this PR merges and admits only T009-T011.
- **SC-005**: Marketplace publication remains disabled.

## Assumptions

- The imported requirement IDs and semantics are immutable baseline references.
- This feature admits the smallest documentation command panel shell only.
- Future runtime settings, compare execution, package, and Marketplace behavior
  require separate IAUs.
