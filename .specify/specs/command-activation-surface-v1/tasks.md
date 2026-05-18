# Tasks: Command Activation Surface

**Input**: Design documents from `.specify/specs/command-activation-surface-v1/`

**Prerequisites**: `plan.md`, `spec.md`, imported requirements packet

**Tests**: This branch validates requirements and Spec Kit artifacts only.
Future implementation tasks require a separate IAU preflight.

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

## Phase 2: Blocked Future IAU Candidate - Manifest Contract

**Purpose**: Reserved for a later IAU only if command activation manifest
implementation is admitted.

**Implementation is blocked until**: A named IAU, likely
`IAU-command-activation-manifest-contract-v1`, has a public preflight record
with `status: pass`.

- [ ] T009 [BLOCKED] Add manifest activation-event contract tests.
- [ ] T010 [BLOCKED] Add contributed command ID and title contract tests.
- [ ] T011 [BLOCKED] Add package identity and Marketplace-disabled contract
  tests.
- [ ] T012 [BLOCKED] Minimally update manifest metadata only after preflight.

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
- Phase 2 remains blocked until a separate public preflight passes.
- Phase 3 remains blocked until separate public requirements and preflight
  records admit the runtime or release behavior.
- No current IAU is admitted by this import/spec-lock branch.
- Future Copilot implementation work starts only after a new public bridge
  admission record passes preflight.

## Implementation Strategy

1. Merge import/spec artifacts to `develop`.
2. Close Issue #30 after validation passes.
3. Keep command handlers, documentation rendering, runtime settings CLI
   materialization, compare execution, Docker orchestration, Marketplace
   publication, packaging, and source copying blocked.
