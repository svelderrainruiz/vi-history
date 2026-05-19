# Tasks: Runtime Settings CLI Terminal Prompt Loop

**Input**: Design documents from
`.specify/specs/runtime-settings-cli-terminal-prompt-loop-v1/`

**Prerequisites**: `plan.md`, `spec.md`, imported requirements packet

**Tests**: This feature validates requirements, Spec Kit artifacts, admission
records, and the next admitted runtime-settings CLI terminal prompt-loop
implementation unit.

**Organization**: Tasks are grouped into public import/spec/admission closeout,
the admitted prompt-loop IAU, and blocked future terminal/runtime/release work.

## Phase 1: Public Import And Spec Lock

**Purpose**: Establish the public MIT requirements and Spec Kit baseline for
the runtime settings CLI terminal prompt-loop contract.

- [x] T001 Create public import manifest for
  `runtime-settings-cli-terminal-prompt-loop-v1`.
- [x] T002 Import public-safe SyRS, SRS, RTM, and test-plan files for
  `VHS-REQ-545`, `VHS-REQ-546`, prerequisite references to `VHS-REQ-537` and
  `VHS-REQ-544`, and supporting test IDs.
- [x] T003 Create `spec.md` for no-argument `vihs` prompt transcript/state
  behavior and blocked terminal/runtime/release scope.
- [x] T004 Create `plan.md` confirming import/spec/admission-only scope and no
  implementation in this PR.
- [x] T005 Create `tasks.md` with future implementation bounded by the named
  IAU.
- [x] T006 Add public admission ledger records for
  `IAU-runtime-settings-cli-terminal-prompt-loop-v1`.
- [x] T007 Pin the active Spec Kit feature to
  `runtime-settings-cli-terminal-prompt-loop-v1`.
- [x] T008 Extend repository validation to cover the new import/spec/admission
  artifacts.

---

## Phase 2: Admitted IAU - Runtime Settings CLI Terminal Prompt Loop

**Purpose**: Implement the smallest terminal prompt-loop step: tests and a pure
prompt transcript/state contract that binds the already implemented
materialized-entrypoint and interactive-selection contracts to no-argument
`vihs` confirmation, guided selection, and validation handoff without OS
terminal I/O drivers or runtime execution.

**Admitted IAU**:
`IAU-runtime-settings-cli-terminal-prompt-loop-v1`

**Public admission issue**: Issue #71

**Implementation handoff issue**: Issue #73

- [x] T009 Add tests proving no-argument `vihs` produces a deterministic
  prompt transcript from the already materialized entrypoint facts.
- [x] T010 Add tests proving Enter-through confirmation preserves the current
  governed provider/platform/version/bitness bundle and requests validation
  handoff.
- [x] T011 Add tests proving guided host selection accepts supported local host
  choices and fails closed for unsupported years, host/platform mismatches, or
  missing selected bitness.
- [x] T012 Add tests proving Docker selection remains bounded to `2026` /
  `x64` and fails closed for unsupported Docker years or bitness values.
- [x] T013 Implement the minimum public MIT terminal prompt-loop contract as
  pure prompt state and output facts.

---

## Phase 3: Blocked Future Terminal, Runtime, And Release Work

**Purpose**: Keep OS terminal drivers, execution, proof expansion, and
publication behavior visibly outside this IAU.

- [ ] T014 [BLOCKED] Add OS-specific raw stdin/TTY process drivers or spawned
  terminal I/O handling.
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
  `runtime-settings-cli-terminal-prompt-loop-v1`.

## Dependencies & Execution Order

- `runtime-settings-cli-terminal-entrypoint-v1` must be implemented and closed
  before `IAU-runtime-settings-cli-terminal-prompt-loop-v1` implementation
  starts.
- Phase 1 must merge before
  `IAU-runtime-settings-cli-terminal-prompt-loop-v1` implementation starts.
- Phase 2 used separate implementation handoff Issue #73 after the admission
  PR merged.
- Phase 3 remains blocked until separate public requirements and preflight
  records admit OS-specific terminal I/O drivers, compare execution, runtime
  execution, proof-out expansion, live-session proof, Windows PowerShell
  Marketplace bootstrap, or release behavior.
- Future Copilot implementation work must start from a new public bridge
  admission and implementation handoff issue. Issue #71 is an admission issue
  and must not be reused for implementation.

## Implementation Strategy

1. Merge import/spec/admission artifacts to `develop`.
2. Implement and close
   `IAU-runtime-settings-cli-terminal-prompt-loop-v1` through Issue #73.
3. Keep OS-specific raw stdin/TTY process drivers, compare execution,
   LabVIEWCLI, Docker, proof expansion, live-session proof, Marketplace
   publication, packaging, and source copying blocked.
