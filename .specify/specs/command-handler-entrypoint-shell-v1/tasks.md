# Tasks: Command Handler Entrypoint Shell

**Input**: Design documents from `.specify/specs/command-handler-entrypoint-shell-v1/`

**Prerequisites**: `plan.md`, `spec.md`, imported requirements packet

**Tests**: This feature validates requirements, Spec Kit artifacts, admission
records, and the completed entrypoint-shell implementation unit.

**Organization**: Tasks are grouped into public import/spec/admission closeout,
the completed entrypoint-shell IAU, and blocked future runtime/release work.

## Phase 1: Public Import And Spec Lock

**Purpose**: Establish the public MIT requirements and Spec Kit baseline for
the command handler entrypoint shell.

- [x] T001 Create public import manifest for `command-handler-entrypoint-shell-v1`.
- [x] T002 Import public-safe SyRS, SRS, RTM, and test-plan files for
  `VHS-REQ-082`, `VHS-REQ-083`, and `VHS-REQ-594`.
- [x] T003 Create `spec.md` for command entrypoint shell behavior and blocked
  runtime/release scope.
- [x] T004 Create `plan.md` confirming import/spec/admission-only scope and no
  implementation in this PR.
- [x] T005 Create `tasks.md` with future implementation bounded by the named
  IAU.
- [x] T006 Add public admission ledger records for
  `IAU-command-handler-entrypoint-shell-v1`.
- [x] T007 Pin the active Spec Kit feature to
  `command-handler-entrypoint-shell-v1`.
- [x] T008 Extend repository validation to cover the new import/spec/admission
  artifacts.

---

## Phase 2: Completed IAU - Entrypoint Shell

**Purpose**: Close the smallest command-handler implementation step: tests and
minimal entrypoint shell only.

**Completed IAU**: `IAU-command-handler-entrypoint-shell-v1`

**Current IAU**: none. Issue #36 is closed and must not be reused for new
implementation. Future implementation requires a new bridge admission and
preflight pass first.

- [x] T009 Add tests proving extension activation registers the admitted
  command entrypoint shell.
- [x] T010 Add tests proving handler registration does not initialize Git,
  LabVIEWCLI, Docker, packaging, or Marketplace behavior.
- [x] T011 Implement the minimum public MIT entrypoint shell after preflight.

---

## Phase 3: Blocked Future Runtime Work

**Purpose**: Keep behavior and publication work visibly outside this IAU.

- [ ] T012 [BLOCKED] Implement documentation panel rendering.
- [ ] T013 [BLOCKED] Implement runtime settings CLI materialization.
- [ ] T014 [BLOCKED] Implement compare execution.
- [ ] T015 [BLOCKED] Add packaging or Marketplace publication behavior.

---

## Final Phase: Cross-Cutting Gates

**Purpose**: Validate traceability, clean-room boundaries, and public safety.

- [x] T016 Run `npm test`.
- [x] T017 Run `npm run check`.
- [x] T018 Run `git diff --check`.
- [x] T019 Run public redaction scan over this feature's public artifacts.
- [x] T020 Run bridge artifact validation for
  `command-handler-entrypoint-shell-v1`.

## Dependencies & Execution Order

- Phase 1 established the public import, Spec Kit feature, and admission
  baseline before `IAU-command-handler-entrypoint-shell-v1` implementation
  started.
- Phase 2 is implemented and closed. No current IAU is active.
- Phase 3 remains blocked until separate public requirements and preflight
  records admit the runtime or release behavior.
- Future Copilot implementation work must start from a new bridge admission,
  not Issue #36.

## Implementation Strategy

1. Keep `IAU-command-handler-entrypoint-shell-v1` closed.
2. Start future work only from a new bridge-admitted IAU.
3. Keep documentation rendering, runtime settings CLI materialization, compare
   execution, Docker orchestration, Marketplace publication, packaging, and
   source copying blocked.
