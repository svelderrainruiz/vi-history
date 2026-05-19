# Feature Specification: Runtime Settings CLI Terminal Entrypoint

**Feature Branch**:
`codex/runtime-settings-cli-terminal-entrypoint-admission`

**Created**: 2026-05-18

**Status**: Implementation admitted for
`IAU-runtime-settings-cli-terminal-entrypoint-materialization-v1`

**Input**: Imported requirements slice
`runtime-settings-cli-terminal-entrypoint-v1`

## User Scenarios & Testing *(mandatory)*

### User Story 1 - See A Materialized Terminal Entrypoint (Priority: P1)

An installed user has a public `vihs` terminal entrypoint contract that records
what command surface is materialized and whether the current user-scope
terminal session is admitted.

**Why this priority**: The MIT authority already has pure settings, validation,
proof, and selection-state contracts. The next step is the command surface that
will eventually host those behaviors.

**Independent Test**: A test can pass entrypoint preparation facts into the
contract and prove that `vihs` is represented as a user-scope terminal command
without requiring hidden path reconstruction, profile editing, admin elevation,
machine-wide installation doctrine, or a prebuilt external CLI payload.

**Acceptance Scenarios**:

1. **Given** terminal entrypoint facts, **When** materialization is reported,
   **Then** the command is `vihs` and the admission scope is user-scoped.
2. **Given** a supported terminal session, **When** the entrypoint is admitted,
   **Then** the contract exposes the intended entrypoint state.
3. **Given** this IAU is in scope, **When** materialization facts are produced,
   **Then** no raw terminal prompt loop, runtime execution, compare execution,
   proof expansion, packaging, or Marketplace behavior starts.

---

### User Story 2 - Recover From Missing Or Stale Entrypoint Runtime (Priority: P1)

An installed user receives explicit runtime lookup and recovery facts when the
bare `vihs` entrypoint cannot run from the current terminal surface.

**Why this priority**: Terminal entrypoints are brittle when runtime dependency
truth is hidden. The public contract should specify fail-closed recovery before
prompt-loop behavior is added.

**Independent Test**: Contract tests can verify runtime lookup order, override
facts, and stale or missing launcher recovery guidance without invoking Node,
VS Code, LabVIEWCLI, Docker, or any spawned process.

**Acceptance Scenarios**:

1. **Given** a Windows terminal surface, **When** runtime lookup facts are
   produced, **Then** the standard VS Code runtime is preferred before global
   Node fallback or explicit override.
2. **Given** the entrypoint launcher is stale or missing, **When** readiness is
   classified, **Then** the contract fails closed with one stable actionable
   recovery instruction.
3. **Given** no-argument discoverability is requested, **When** this first IAU
   is in scope, **Then** the contract may expose current bundle and copyable
   next-command facts but does not bind raw stdin/TTY prompt behavior.

### Edge Cases

- Entrypoint facts are missing, stale, or partial.
- The current terminal session is unsupported or not user-scope admitted.
- Runtime lookup has no standard VS Code runtime, no global Node fallback, and
  no explicit override.
- An implementation attempts to add raw prompt-loop stdin handling.
- An implementation attempts to invoke LabVIEWCLI, Docker, compare execution,
  proof-out expansion, packaging, Marketplace behavior, or copied source.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The terminal entrypoint contract MUST represent `vihs` as a
  materialized bare terminal command with user-scope admission facts. Imported
  ID: `VHS-REQ-537`.
- **FR-002**: The entrypoint contract MUST NOT require hidden path
  reconstruction, manual shell-profile editing, admin elevation, machine-wide
  installation doctrine, or a prebuilt external CLI payload. Imported ID:
  `VHS-REQ-537`.
- **FR-003**: The entrypoint contract MUST expose runtime lookup order facts,
  including standard VS Code runtime on Windows before global Node fallback or
  explicit override. Imported ID: `VHS-REQ-544`.
- **FR-004**: Missing or stale launcher states MUST fail closed with one stable
  actionable recovery instruction. Imported ID: `VHS-REQ-544`.
- **FR-005**: No-argument discoverability facts MAY report the current
  provider/platform/LabVIEW version/LabVIEW bitness bundle and exact copyable
  next commands, but MUST NOT add raw prompt-loop behavior in this IAU.
  Imported ID: `VHS-REQ-545`.
- **FR-006**: Validation handoff facts MAY reference the existing
  `vihs --validate` contract, but MUST NOT add validation execution or
  proof-out expansion in this IAU. Imported ID: `VHS-REQ-546`.
- **FR-007**: The implementation MUST remain clean-room: no implementation
  source is copied from another product line.

### Key Entities

- **Terminal Entrypoint Facts**: Public facts naming the `vihs` command,
  materialization state, user-scope admission state, and blocked reasons.
- **Runtime Lookup Facts**: Public facts describing runtime lookup order,
  override state, and missing-runtime failure guidance.
- **Recovery Instruction**: A stable user-facing instruction to restore the
  admitted terminal surface when the launcher or runtime dependency is stale or
  missing.
- **Discoverability Facts**: Public no-argument output facts that can name the
  current runtime bundle and exact next commands without starting a prompt loop.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: The public import manifest lists `VHS-REQ-537`,
  `VHS-REQ-544`, `VHS-REQ-545`, `VHS-REQ-546`, and supporting test IDs.
- **SC-002**: `spec.md`, `plan.md`, and `tasks.md` define
  `IAU-runtime-settings-cli-terminal-entrypoint-materialization-v1` and keep
  raw prompt loops, compare execution, runtime execution, proof expansion,
  live-session proof, packaging, and Marketplace behavior blocked.
- **SC-003**: Public validation rejects private paths, private tooling names,
  credentials, private evidence, and copied implementation-source
  instructions.
- **SC-004**: The admission record states that
  `IAU-runtime-settings-cli-terminal-entrypoint-materialization-v1` is admitted
  for T009-T013 only after preflight passes.
- **SC-005**: Marketplace publication remains disabled.

## Assumptions

- The imported requirement IDs and semantics are immutable baseline
  references.
- This IAU models the materialized terminal entrypoint as pure facts and command
  plans; raw terminal prompt loops require a later IAU.
- Validation handoff may reference the already admitted validation readback
  contract; it does not run validation or produce proof-out files in this IAU.
