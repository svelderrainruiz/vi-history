# Tasks: Command Activation Surface

**Input**: Design documents from `.specify/specs/command-activation-surface-v1/`

**Prerequisites**: `plan.md`, `spec.md`, imported requirements packet

**Tests**: This feature validates requirements, Spec Kit artifacts, and the
first admitted manifest-contract IAU. Runtime implementation tasks require a
separate IAU preflight.

**Organization**: Tasks are grouped into public import/spec closeout and
blocked future implementation candidates.

## Phase 1: Public Import And Spec Lock

**Purpose**: Establish the public MIT requirements and Spec Kit baseline for
command activation.

- [x] T001 Create public import manifest for `command-activation-surface-v1`.
- [x] T002 Import public-safe SyRS, SRS, RTM, and test-plan files for
  `VHS-REQ-594`.
- [x] T003 Create `spec.md` for explicit command activation, command IDs,
  command titles, and blocked runtime/release scope.
- [x] T004 Create `plan.md` confirming import/spec-only scope and no
  implementation admission.
- [x] T005 Create `tasks.md` with future implementation blocked behind IAU
  preflight.
- [x] T006 Add public admission ledger records showing state `spec-locked`.
- [x] T007 Pin the active Spec Kit feature to `command-activation-surface-v1`.
- [x] T008 Extend repository validation to cover the new import and Spec Kit
  feature.

**Checkpoint**: Issue #30 can close after this PR merges and validation passes.

---

## Phase 2: Admitted IAU - Manifest Contract

**Purpose**: Admit the smallest command activation implementation step:
manifest contract tests and minimal manifest metadata only.

**Admitted IAU**: `IAU-command-activation-manifest-contract-v1`

**Implementation may start after**:
`docs/requirements/admissions/command-activation-surface-v1/IAU-command-activation-manifest-contract-v1-preflight-v1.json`
records `status: "pass"` on `develop`.

- [ ] T009 Add manifest activation-event contract tests.
- [ ] T010 Add contributed command ID and title contract tests.
- [ ] T011 Add package identity and Marketplace-disabled contract tests.
- [ ] T012 Minimally update manifest metadata only after preflight.

---

## Phase 3: Blocked Future Runtime Work

**Purpose**: Keep runtime and publication work visibly outside this import.

- [ ] T013 [BLOCKED] Implement command handlers.
- [ ] T014 [BLOCKED] Implement documentation panel rendering.
- [ ] T015 [BLOCKED] Implement runtime settings CLI materialization.
- [ ] T016 [BLOCKED] Implement compare execution.
- [ ] T017 [BLOCKED] Add packaging or Marketplace publication behavior.

---

## Final Phase: Cross-Cutting Gates

**Purpose**: Validate traceability, clean-room boundaries, and public safety.

- [x] T018 Run `npm test`.
- [x] T019 Run `npm run check`.
- [x] T020 Run `git diff --check`.
- [x] T021 Run public redaction scan over this feature's public artifacts.
- [x] T022 Run bridge artifact validation for `command-activation-surface-v1`.

## Dependencies & Execution Order

- Phase 1 must merge before any future command activation implementation IAU
  can be considered.
- Phase 2 is admitted by `IAU-command-activation-manifest-contract-v1`.
- Phase 3 remains blocked until separate public requirements and preflight
  records admit the runtime or release behavior.
- Current IAU: `IAU-command-activation-manifest-contract-v1`.
- Future Copilot implementation work may start only from Issue #32 after the
  admission/preflight records are merged to `develop`.

## Implementation Strategy

1. Merge import/spec artifacts to `develop`.
2. Close Issue #30 after validation passes.
3. Admit `IAU-command-activation-manifest-contract-v1` through Issue #32.
4. Keep command handlers, documentation rendering, runtime settings CLI
   materialization, compare execution, Docker orchestration, Marketplace
   publication, packaging, and source copying blocked.
