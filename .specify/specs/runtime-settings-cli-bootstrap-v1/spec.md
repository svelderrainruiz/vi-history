# Feature Specification: Runtime Settings CLI Bootstrap

**Feature Branch**: `codex/runtime-settings-cli-bootstrap-admission`

**Created**: 2026-05-18

**Status**: Locked for public import and IAU admission; implementation not in this PR

**Input**: Imported requirements slice `runtime-settings-cli-bootstrap-v1`

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Prepare A Terminal Settings Entrypoint (Priority: P1)

An installed user can invoke `Prepare Local Runtime Settings CLI` and receive a
terminal-facing `vihs` bootstrap surface without reconstructing hidden paths,
editing shell profiles, using admin elevation, depending on machine-wide
installation doctrine, or bundling a prebuilt external CLI payload.

**Why this priority**: The command activation surface already exposes
`labviewViHistory.prepareLocalRuntimeSettingsCli`. The next clean-room step is a
small command shell that tells the user how the terminal entrypoint is prepared
and how to recover stale or missing launcher state before any settings mutation
or runtime validation is admitted.

**Independent Test**: A test can activate the extension with a command API
double, invoke `labviewViHistory.prepareLocalRuntimeSettingsCli`, and prove the
handler reports launcher materialization and recovery facts without mutating
settings, starting validation, running compare, invoking LabVIEWCLI, invoking
Docker, packaging, or publishing.

**Acceptance Scenarios**:

1. **Given** the extension activation function, **When** it is called with a
   command API double, **Then** it registers
   `labviewViHistory.prepareLocalRuntimeSettingsCli` separately from
   `labviewViHistory.open` and `labviewViHistory.openDocumentation`.
2. **Given** launcher state is current, **When** the prepare command runs,
   **Then** it reports the terminal-facing `vihs` entrypoint as prepared and
   records stable materialization facts.
3. **Given** launcher state is stale or missing, **When** the prepare command
   runs, **Then** it reports recovery guidance without silently assuming a
   runtime, editing settings, or rewriting profile files.
4. **Given** runtime validation or compare behavior is requested, **When** the
   prepare command runs, **Then** it refuses to cross into blocked scope.

---

### User Story 2 - Keep Settings Mutation And Execution Blocked (Priority: P1)

A maintainer can implement the prepare-command shell without accidentally
admitting runtime settings writes, validation, compare execution, LabVIEWCLI,
Docker, packaging, or Marketplace behavior.

**Why this priority**: The MIT authority must grow by named Implementation
Admission Units. The bootstrap command is useful only if it does not become a
back door into runtime execution or release behavior.

**Independent Test**: Contract tests can inspect the handler result and command
registration and prove no settings mutation, execution, packaging, Marketplace,
or copied-source behavior is present.

**Acceptance Scenarios**:

1. **Given** the first runtime-settings CLI IAU, **When** implementation starts,
   **Then** it is limited to T009-T011.
2. **Given** settings mutation, `vihs --validate`, compare execution,
   LabVIEWCLI execution, Docker execution, packaging, or Marketplace behavior
   is needed, **When** that work is proposed, **Then** a new bridge admission is
   required first.
3. **Given** public artifacts are validated, **When** redaction checks run,
   **Then** no private paths, private evidence, credentials, or source-copying
   instructions are present.

### Edge Cases

- The prepare command is wired to the primary command or documentation command
  handler instead of its own handler.
- The prepare command mutates provider/version/bitness settings before a
  settings-mutation IAU exists.
- The prepare command silently treats stale or missing launcher state as ready.
- The prepare command starts `vihs --validate`, compare execution, LabVIEWCLI,
  Docker, packaging, or Marketplace publication.
- The feature imports implementation behavior from another VI History product
  line instead of using public requirements and MIT-authored design.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The extension MUST expose
  `labviewViHistory.prepareLocalRuntimeSettingsCli` as the command entrypoint
  for preparing a terminal-facing `vihs` settings bootstrap. Imported IDs:
  `VHS-REQ-537`, `VHS-REQ-594`.
- **FR-002**: The prepare-command shell MUST report launcher materialization
  facts, including whether the `vihs` entrypoint is prepared, stale, or
  missing. Imported IDs: `VHS-REQ-537`, `VHS-REQ-544`.
- **FR-003**: The prepare-command shell MUST report recovery facts for stale or
  missing launcher state without forcing hidden-path reconstruction, shell
  profile editing, admin elevation, or machine-wide install doctrine. Imported
  IDs: `VHS-REQ-537`, `VHS-REQ-544`.
- **FR-004**: The prepare-command shell MUST NOT mutate provider, version,
  bitness, or JSONC settings in the first IAU.
- **FR-005**: The prepare-command shell MUST NOT run `vihs --validate`, compare
  execution, LabVIEWCLI, Docker, packaging, or Marketplace publication.
- **FR-006**: The implementation MUST remain clean-room: no implementation
  source is copied from another product line.

### Key Entities

- **Runtime Settings CLI Bootstrap**: The public MIT behavior surface that
  prepares or reports a terminal-facing `vihs` settings entrypoint.
- **Launcher Materialization Facts**: Stable facts returned by the prepare
  command about whether the terminal launcher is prepared, stale, or missing.
- **Recovery Facts**: User-facing facts that explain how stale or missing
  launcher state is recovered without hidden path reconstruction or profile
  edits.
- **Prepare-Command Shell**: The minimal command handler admitted by
  `IAU-runtime-settings-cli-prepare-command-shell-v1`.
- **Blocked Settings And Execution Surface**: Settings mutation, runtime
  validation, compare execution, LabVIEWCLI, Docker, packaging, Marketplace,
  and copied-source behavior.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: The public import manifest lists `VHS-REQ-537`, `VHS-REQ-544`,
  and `VHS-REQ-594`.
- **SC-002**: `spec.md`, `plan.md`, and `tasks.md` define
  `IAU-runtime-settings-cli-prepare-command-shell-v1` and keep settings
  mutation, validation, compare, execution, packaging, and Marketplace work
  blocked.
- **SC-003**: Public validation rejects private paths, private tooling names,
  credentials, private evidence, and copied implementation-source instructions.
- **SC-004**: The admission record states that
  `IAU-runtime-settings-cli-prepare-command-shell-v1` is the current admitted
  IAU after this PR merges and admits only T009-T011.
- **SC-005**: Marketplace publication remains disabled.

## Assumptions

- The imported requirement IDs and semantics are immutable baseline references.
- This feature admits the smallest prepare-command shell only.
- Future settings mutation, validation, compare execution, package, and
  Marketplace behavior require separate IAUs.
