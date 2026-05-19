# Feature Specification: Runtime Settings CLI Terminal I/O Adapter

**Feature Branch**:
`codex/runtime-settings-cli-terminal-io-adapter-admission`

**Created**: 2026-05-19

**Status**: Implementation admitted for
`IAU-runtime-settings-cli-terminal-io-adapter-v1`

**Input**: Imported requirements slice
`runtime-settings-cli-terminal-io-adapter-v1`

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Confirm Through A Terminal Session (Priority: P1)

An installed user runs bare `vihs` in an interactive terminal and can confirm
the current governed runtime bundle with Enter. The adapter converts supplied
terminal input facts into the already implemented prompt-loop confirmation and
validation handoff facts.

**Why this priority**: The public MIT authority already has the materialized
entrypoint and pure prompt-loop contract. The next unit is the testable
terminal adapter around that contract.

**Independent Test**: A test can pass terminal session facts and an Enter input
fact into the adapter and prove the preserved bundle, transcript output, and
validation handoff without spawning an OS terminal process.

**Acceptance Scenarios**:

1. **Given** a supported materialized `vihs` entrypoint and prompt-loop state,
   **When** an interactive terminal session submits Enter, **Then** the adapter
   preserves the current governed bundle and requests `vihs --validate`
   handoff.
2. **Given** this IAU is in scope, **When** confirmation is modeled, **Then**
   no compare execution, LabVIEWCLI execution, Docker execution, proof writing,
   launcher/profile mutation, packaging, or Marketplace behavior starts.

---

### User Story 2 - Adapt Guided Selection Inputs (Priority: P1)

An installed user can choose a supported host or Docker runtime provider
through terminal input facts while unsupported choices fail closed with stable
public reasons.

**Why this priority**: Users need the terminal path to reuse the already
admitted selection and prompt-loop contracts without widening into a general
runtime picker or execution surface.

**Independent Test**: Contract tests can model host and Docker terminal choices
and verify selected bundle facts, latest supported NI LabVIEW Docker image
selection, and fail-closed reasons without invoking LabVIEWCLI, Docker, or any
spawned process.

**Acceptance Scenarios**:

1. **Given** guided host selection input, **When** a supported local host
   version and bitness are selected, **Then** the adapter records the selected
   host bundle and validation handoff.
2. **Given** Docker provider input, **When** Docker is selected, **Then** the
   adapter resolves to the latest supported NI LabVIEW Docker image family and
   does not ask for or accept a Docker bitness choice.
3. **Given** unsupported terminal input, **When** an unsupported year, platform,
   Docker bitness choice, EOF, or cancel is supplied, **Then** the adapter fails
   closed without side effects.

---

### User Story 3 - Guide Non-Interactive Sessions (Priority: P2)

An installed user or automation invokes bare `vihs` without an interactive TTY
and receives copyable guidance instead of a hanging prompt.

**Why this priority**: The terminal adapter must be safe in CI, scripts, and
non-interactive shells before any raw terminal driver work is considered.

**Independent Test**: A test can pass non-TTY terminal session facts and prove
the adapter returns copyable guidance, no prompt wait, and no settings or
runtime side effects.

**Acceptance Scenarios**:

1. **Given** a non-TTY session, **When** bare `vihs` is adapted, **Then** the
   adapter returns exact copyable commands and does not wait for input.
2. **Given** non-interactive guidance, **When** the adapter exits, **Then** it
   leaves compare execution, runtime execution, proof-out expansion, package/bin
   publication, and Marketplace behavior blocked.

### Edge Cases

- Materialized entrypoint facts are missing, stale, unsupported, or not
  user-scope admitted.
- Prompt-loop facts are missing or inconsistent with the current governed
  settings bundle.
- The terminal surface is non-interactive and needs exact copyable next-command
  guidance instead of prompts.
- The user selects an unsupported LabVIEW year, an unsupported Docker image
  family, a user-facing Docker bitness choice, a host/container platform
  mismatch, missing selected Windows host bitness, unsupported Linux host path,
  EOF, cancel, or unrecognized input.
- An implementation attempts to add compare execution, LabVIEWCLI execution,
  Docker orchestration, proof-out expansion, launcher/profile mutation,
  packaging, Marketplace behavior, or copied source.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The terminal I/O adapter MUST model no-argument `vihs` as a
  deterministic terminal-session adaptation around the already implemented
  prompt-loop contract. Imported ID: `VHS-REQ-545`.
- **FR-002**: Interactive Enter confirmation MUST preserve the current governed
  provider/platform/LabVIEW version/LabVIEW bitness bundle and request
  validation handoff through the public `vihs --validate` contract. Imported
  IDs: `VHS-REQ-545`, `VHS-REQ-546`.
- **FR-003**: Guided host terminal input MUST accept supported local LabVIEW
  2025, LabVIEW 2026, and newer host choices when the selected installation and
  bitness are present, and MUST fail closed for unsupported years,
  host/platform mismatches, or missing selected bitness. Imported ID:
  `VHS-REQ-545`.
- **FR-004**: Docker provider terminal input MUST resolve to the latest
  supported NI LabVIEW Docker image family, currently the LabVIEW 2026 Linux
  image family for the governed Linux default, and MUST NOT expose or accept a
  separate Docker bitness choice because Docker is 64-bit-only by
  image/platform. Imported ID: `VHS-REQ-545`.
- **FR-005**: Non-interactive terminal sessions MUST return exact copyable
  guidance instead of waiting for prompt input. Imported ID: `VHS-REQ-545`.
- **FR-006**: EOF, cancel, unsupported input, unsupported Docker image-family
  requests, and Docker bitness-choice requests MUST fail closed without
  settings mutation, runtime execution, Docker orchestration, proof writing, or
  publication side effects. Imported ID: `VHS-REQ-545`.
- **FR-007**: Validation handoff MAY request the existing `vihs --validate`
  readback contract, but MUST NOT add runtime execution or proof-out expansion
  in this IAU. Imported ID: `VHS-REQ-546`.
- **FR-008**: The implementation MUST NOT add compare execution, LabVIEWCLI
  execution, Docker command execution or orchestration, proof-out expansion,
  live-session proof, package/bin publication, launcher/profile mutation,
  Marketplace behavior, or source copying in this IAU.
- **FR-009**: The implementation MUST remain clean-room: no implementation
  source is copied from another product line.

### Key Entities

- **Terminal Session Facts**: Public facts for whether the terminal is
  interactive, supplied prompt input, EOF/cancel state, and copyable guidance
  output.
- **Terminal Adapter Result**: Public output facts for transcript lines,
  selected bundle, validation handoff, failure reason, and blocked side
  effects.
- **Docker Image Family Fact**: Public fact that Docker provider selection uses
  the latest supported NI LabVIEW Docker image family and exposes no user-facing
  Docker bitness choice.
- **Validation Handoff**: A bounded request to the already public
  `vihs --validate` readback contract.
- **Fail-Closed Reason**: A stable public reason explaining unsupported input,
  EOF, cancel, unsupported host/Docker choices, or not-yet-implemented paths.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: The public import manifest lists `VHS-REQ-545`,
  `VHS-REQ-546`, prerequisite IDs `VHS-REQ-537` and `VHS-REQ-544`, supporting
  test IDs, and public Docker image-family facts.
- **SC-002**: `spec.md`, `plan.md`, and `tasks.md` define
  `IAU-runtime-settings-cli-terminal-io-adapter-v1` and keep compare execution,
  LabVIEWCLI execution, Docker execution, proof expansion, live-session proof,
  package/bin publication, launcher/profile mutation, Marketplace behavior, and
  source copying blocked.
- **SC-003**: Public validation rejects private paths, private tooling names,
  credentials, private evidence, and copied implementation-source
  instructions.
- **SC-004**: The admission record states that
  `IAU-runtime-settings-cli-terminal-io-adapter-v1` is admitted for T009-T014
  only after preflight passes.
- **SC-005**: Marketplace publication remains disabled.

## Assumptions

- The imported requirement IDs and semantics are immutable baseline references.
- `runtime-settings-cli-terminal-entrypoint-v1` and
  `runtime-settings-cli-terminal-prompt-loop-v1` are implemented and closed
  before this IAU starts.
- This IAU models terminal I/O behavior as pure terminal session/input facts
  around the existing prompt-loop contract.
- Docker image-family facts are governed public facts; Docker bitness is not a
  user-facing choice.
- Validation handoff may reference the already admitted validation readback
  contract; it does not run validation or produce proof-out files in this IAU.
