# Tasks: Installed-User Documentation Command

**Input**: Design documents from `.specify/specs/installed-user-documentation-command-v1/`

**Prerequisites**: `plan.md`, `spec.md`, imported requirements packet

**Tests**: This feature validates requirements, Spec Kit artifacts, admission
records, and the next admitted documentation-command implementation unit.

**Organization**: Tasks are grouped into public import/spec/admission closeout,
the admitted documentation-command IAU, and blocked future runtime/release
work.

## Phase 1: Public Import And Spec Lock

**Purpose**: Establish the public MIT requirements and Spec Kit baseline for
the installed-user documentation command.

- [x] T001 Create public import manifest for
  `installed-user-documentation-command-v1`.
- [x] T002 Import public-safe SyRS, SRS, RTM, and test-plan files for
  `VHS-REQ-368`, `VHS-REQ-369`, `VHS-REQ-489`, and `VHS-REQ-594`.
- [x] T003 Create `spec.md` for documentation command behavior and blocked
  runtime/release scope.
- [x] T004 Create `plan.md` confirming import/spec/admission-only scope and no
  implementation in this PR.
- [x] T005 Create `tasks.md` with future implementation bounded by the named
  IAU.
- [x] T006 Add public admission ledger records for
  `IAU-documentation-command-panel-shell-v1`.
- [x] T007 Pin the active Spec Kit feature to
  `installed-user-documentation-command-v1`.
- [x] T008 Extend repository validation to cover the new import/spec/admission
  artifacts.

---

## Phase 2: Admitted IAU - Documentation Command Panel Shell

**Purpose**: Implement the smallest documentation command step: tests,
public-safe bundled docs contract, and minimal command panel shell only.

**Implemented IAU**: `IAU-documentation-command-panel-shell-v1`

**Public admission issue**: Issue #39

**Implementation handoff issue**: Issue #41

- [x] T009 Add tests proving `labviewViHistory.openDocumentation` registers as
  a separate handler from `labviewViHistory.open`.
- [x] T010 Add tests proving a public-safe bundled documentation manifest/page
  contract exists.
- [x] T011 Implement the minimum public MIT documentation command panel shell.

---

## Phase 3: Blocked Future Runtime Work

**Purpose**: Keep runtime and publication behavior visibly outside this IAU.

- [ ] T012 [BLOCKED] Implement runtime settings CLI materialization.
- [ ] T013 [BLOCKED] Implement compare execution.
- [ ] T014 [BLOCKED] Add LabVIEWCLI or Docker execution.
- [ ] T015 [BLOCKED] Add packaging or Marketplace publication behavior.

---

## Final Phase: Cross-Cutting Gates

**Purpose**: Validate traceability, clean-room boundaries, and public safety.

- [x] T016 Run `npm test`.
- [x] T017 Run `npm run check`.
- [x] T018 Run `git diff --check`.
- [x] T019 Run public redaction scan over this feature's public artifacts.
- [x] T020 Run bridge artifact validation for
  `installed-user-documentation-command-v1`.

## Dependencies & Execution Order

- Phase 1 must merge before `IAU-documentation-command-panel-shell-v1`
  implementation starts.
- Phase 2 is implemented and closed for
  `IAU-documentation-command-panel-shell-v1`.
- Phase 3 remains blocked until separate public requirements and preflight
  records admit runtime or release behavior.
- Future Copilot implementation work must start from a new bridge admission and
  implementation handoff issue. Issue #41 must not be reused.

## Implementation Strategy

1. Merge import/spec/admission artifacts to `develop`.
2. Complete Issue #41 for `IAU-documentation-command-panel-shell-v1`.
3. Keep runtime settings CLI materialization, compare execution, LabVIEWCLI,
   Docker, Marketplace publication, packaging, and source copying blocked.
