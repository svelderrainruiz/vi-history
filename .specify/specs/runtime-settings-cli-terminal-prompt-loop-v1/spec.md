# Feature Specification: Runtime Settings CLI Terminal Prompt Loop

**Feature Branch**:
`codex/runtime-settings-cli-terminal-prompt-loop-admission`

**Created**: 2026-05-19

**Status**: Implementation admitted for
`IAU-runtime-settings-cli-terminal-prompt-loop-v1`

**Input**: Imported requirements slice
`runtime-settings-cli-terminal-prompt-loop-v1`

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Confirm The Current Runtime Bundle (Priority: P1)

An installed user runs bare `vihs` and receives a deterministic prompt
transcript that shows the current governed provider/platform/version/bitness
bundle and allows Enter-through confirmation.

**Why this priority**: The MIT authority already has a materialized `vihs`
entrypoint and pure selection-state contract. The next step is the bounded
conversation that connects those public facts for first-use terminal
discoverability.

**Independent Test**: A test can pass materialized entrypoint facts and current
selection facts into the prompt-loop contract and prove the transcript,
default action, and confirmation handoff without spawning a terminal process.

**Acceptance Scenarios**:

1. **Given** a supported materialized `vihs` entrypoint and current selection,
   **When** no-argument prompt-loop state is created, **Then** the transcript
   identifies the current bundle and exact copyable next commands.
2. **Given** the current bundle is supported, **When** the user confirms with
   Enter, **Then** the prompt-loop contract preserves the current bundle and
   requests validation handoff.
3. **Given** this IAU is in scope, **When** confirmation is modeled, **Then**
   no OS-specific stdin/TTY driver, runtime execution, compare execution,
   proof writing, packaging, or Marketplace behavior starts.

---

### User Story 2 - Guide Supported Runtime Selection (Priority: P1)

An installed user can choose a supported host or Docker runtime bundle through
the no-argument `vihs` prompt state, while unsupported paths fail closed with
explicit guidance.

**Why this priority**: Users need a self-describing terminal flow for supported
runtime settings without widening validation into a general path picker or
runtime execution surface.

**Independent Test**: Contract tests can model host and Docker choices and
verify accepted selections, bounded Docker rules, and fail-closed reasons
without invoking LabVIEWCLI, Docker, or any spawned process.

**Acceptance Scenarios**:

1. **Given** guided host selection, **When** a supported local host version and
   bitness are selected, **Then** the prompt-loop contract records the selected
   bundle and validation handoff.
2. **Given** guided host selection, **When** an unsupported year, host/platform
   mismatch, or missing selected bitness is selected, **Then** the contract
   fails closed with a stable reason.
3. **Given** Docker selection, **When** a Docker bundle is selected, **Then**
   only `2026` / `x64` is accepted and other Docker years or bitness values
   fail closed.

### Edge Cases

- Materialized entrypoint facts are missing, stale, unsupported, or not
  user-scope admitted.
- Current settings are missing and need the governed default
  `host/windows/2026/x86`.
- The terminal surface is non-interactive and needs exact copyable
  next-command guidance instead of prompts.
- The user selects an unsupported LabVIEW year, unsupported Docker bitness,
  host/container platform mismatch, missing selected Windows host bitness, or
  unsupported Linux host path.
- An implementation attempts to add raw OS-specific stdin/TTY handling,
  runtime execution, compare execution, proof-out expansion, packaging,
  Marketplace behavior, or copied source.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The prompt-loop contract MUST model no-argument `vihs` as a
  deterministic transcript/state flow bound to the already materialized
  terminal entrypoint. Imported ID: `VHS-REQ-545`.
- **FR-002**: The prompt-loop contract MUST report the current
  provider/platform/LabVIEW version/LabVIEW bitness bundle and exact copyable
  next-command guidance. Imported ID: `VHS-REQ-545`.
- **FR-003**: Enter-through confirmation MUST preserve the current governed
  bundle and request validation handoff through the public `vihs --validate`
  contract. Imported IDs: `VHS-REQ-545`, `VHS-REQ-546`.
- **FR-004**: Guided host selection MUST accept supported local LabVIEW 2025,
  LabVIEW 2026, and newer host choices when the selected installation and
  bitness are present, and MUST fail closed for unsupported years,
  host/platform mismatches, or missing selected bitness. Imported ID:
  `VHS-REQ-545`.
- **FR-005**: Docker selection MUST remain bounded to `2026` / `x64` and MUST
  fail closed for unsupported Docker years or bitness values. Imported ID:
  `VHS-REQ-545`.
- **FR-006**: Validation handoff MAY request the existing `vihs --validate`
  readback contract, but MUST NOT add runtime execution or proof-out expansion
  in this IAU. Imported ID: `VHS-REQ-546`.
- **FR-007**: The implementation MUST NOT add OS-specific raw stdin/TTY
  process drivers, spawned terminal I/O handling, compare execution,
  LabVIEWCLI execution, Docker command execution or orchestration, packaging,
  Marketplace behavior, or source copying in this IAU.
- **FR-008**: The implementation MUST remain clean-room: no implementation
  source is copied from another product line.

### Key Entities

- **Prompt Transcript**: Public ordered facts representing what no-argument
  `vihs` would show for confirmation, selection, guidance, and validation
  handoff.
- **Prompt State**: Public state facts for current bundle, selected bundle,
  available actions, confirmation, failure reason, and handoff target.
- **Validation Handoff**: A bounded request to the already public
  `vihs --validate` readback contract.
- **Fail-Closed Reason**: A stable public reason explaining unsupported years,
  bitness, platform mismatch, missing selected host bitness, non-interactive
  guidance, or not-yet-implemented paths.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: The public import manifest lists `VHS-REQ-545`,
  `VHS-REQ-546`, prerequisite IDs `VHS-REQ-537` and `VHS-REQ-544`, and
  supporting test IDs.
- **SC-002**: `spec.md`, `plan.md`, and `tasks.md` define
  `IAU-runtime-settings-cli-terminal-prompt-loop-v1` and keep OS-specific
  terminal drivers, compare execution, runtime execution, proof expansion,
  live-session proof, packaging, and Marketplace behavior blocked.
- **SC-003**: Public validation rejects private paths, private tooling names,
  credentials, private evidence, and copied implementation-source
  instructions.
- **SC-004**: The admission record states that
  `IAU-runtime-settings-cli-terminal-prompt-loop-v1` is admitted for T009-T013
  only after preflight passes.
- **SC-005**: Marketplace publication remains disabled.

## Assumptions

- The imported requirement IDs and semantics are immutable baseline references.
- `runtime-settings-cli-terminal-entrypoint-v1` is implemented and closed
  before this IAU starts.
- This IAU models prompt-loop behavior as pure transcript and state facts.
  OS-specific raw terminal I/O drivers require a later IAU.
- Validation handoff may reference the already admitted validation readback
  contract; it does not run validation or produce proof-out files in this IAU.
