# Tasks: Runtime Settings CLI Terminal Entrypoint

**Input**: Design documents from
`.specify/specs/runtime-settings-cli-terminal-entrypoint-v1/`

**Prerequisites**: `plan.md`, `spec.md`, imported requirements packet

**Tests**: This feature validates requirements, Spec Kit artifacts, admission
records, and the next admitted runtime-settings CLI terminal-entrypoint
implementation unit.

**Organization**: Tasks are grouped into public import/spec/admission closeout,
the admitted materialized-entrypoint IAU, and blocked future terminal/runtime/
release work.

## Phase 1: Public Import And Spec Lock

**Purpose**: Establish the public MIT requirements and Spec Kit baseline for
the runtime settings CLI terminal-entrypoint contract.

- [x] T001 Create public import manifest for
  `runtime-settings-cli-terminal-entrypoint-v1`.
- [x] T002 Import public-safe SyRS, SRS, RTM, and test-plan files for
  `VHS-REQ-537`, `VHS-REQ-544`, `VHS-REQ-545`, `VHS-REQ-546`, and supporting
  test IDs.
- [x] T003 Create `spec.md` for materialized `vihs` terminal entrypoint
  behavior and blocked terminal/runtime/release scope.
- [x] T004 Create `plan.md` confirming import/spec/admission-only scope and no
  implementation in this PR.
- [x] T005 Create `tasks.md` with future implementation bounded by the named
  IAU.
- [x] T006 Add public admission ledger records for
  `IAU-runtime-settings-cli-terminal-entrypoint-materialization-v1`.
- [x] T007 Pin the active Spec Kit feature to
  `runtime-settings-cli-terminal-entrypoint-v1`.
- [x] T008 Extend repository validation to cover the new import/spec/admission
  artifacts.

---

## Phase 2: Admitted IAU - Runtime Settings CLI Terminal Entrypoint Materialization

**Purpose**: Implement the smallest terminal-entrypoint step: tests and a pure
command-surface contract that models materialized `vihs` entrypoint facts,
user-scope terminal admission, runtime lookup/recovery facts, stale launcher
failure guidance, and no-argument discoverability facts without prompt loops or
runtime execution.

**Admitted IAU**:
`IAU-runtime-settings-cli-terminal-entrypoint-materialization-v1`

**Public admission issue**: Issue #65

**Implementation handoff issue**: Issue #67

- [x] T009 Add tests proving a materialized `vihs` terminal entrypoint is
  represented without hidden path reconstruction, profile editing, admin
  elevation, machine-wide install doctrine, or a prebuilt external CLI payload.
- [x] T010 Add tests proving supported terminal-session admission records stay
  user-scoped and expose the intended entrypoint state.
- [x] T011 Add tests proving runtime lookup and recovery facts prefer the
  standard VS Code runtime on Windows before global Node fallback or explicit
  override.
- [x] T012 Add tests proving stale or missing launchers fail closed with one
  stable actionable recovery instruction.
- [x] T013 Implement the minimum public MIT materialized-entrypoint contract as
  pure command-surface facts and command plans.

---

## Phase 3: Blocked Future Terminal, Runtime, And Release Work

**Purpose**: Keep prompt loops, execution, proof expansion, and publication
behavior visibly outside this IAU.

- [ ] T014 [BLOCKED] Add raw terminal prompt loops, stdin/TTY handling, or
  process-level no-argument prompt behavior.
- [ ] T015 [BLOCKED] Add compare execution.
- [ ] T016 [BLOCKED] Add LabVIEWCLI execution, Docker execution, or Docker
  orchestration.
- [ ] T017 [BLOCKED] Add proof-out file writing beyond already admitted proof
  artifact contracts.
- [ ] T018 [BLOCKED] Add live already-running VS Code session uptake proof or
  Windows PowerShell Marketplace install/bootstrap behavior.
- [ ] T019 [BLOCKED] Add packaging, Marketplace publication, or source copying
  from another VI History product line.

---

## Final Phase: Cross-Cutting Gates

**Purpose**: Validate traceability, clean-room boundaries, and public safety.

- [x] T020 Run `npm test`.
- [x] T021 Run `npm run check`.
- [x] T022 Run `git diff --check`.
- [x] T023 Run public redaction scan over this feature's public artifacts.
- [x] T024 Run bridge artifact validation for
  `runtime-settings-cli-terminal-entrypoint-v1`.

## Dependencies & Execution Order

- Phase 1 must merge before
  `IAU-runtime-settings-cli-terminal-entrypoint-materialization-v1`
  implementation starts.
- Phase 2 used separate implementation handoff Issue #67 after the admission
  PR merged.
- Phase 3 remains blocked until separate public requirements and preflight
  records admit prompt loops, compare execution, runtime execution, proof-out
  expansion, live-session proof, Windows PowerShell Marketplace bootstrap, or
  release behavior.
- Future Copilot implementation work must start from a new public bridge
  admission and implementation handoff issue. Issue #65 is an admission issue
  and must not be reused for implementation.

## Implementation Strategy

1. Merge import/spec/admission artifacts to `develop`.
2. Implement and close
   `IAU-runtime-settings-cli-terminal-entrypoint-materialization-v1` through
   Issue #67.
3. Keep raw prompt loops, compare execution, LabVIEWCLI, Docker, proof
   expansion, live-session proof, Marketplace publication, packaging, and
   source copying blocked.
