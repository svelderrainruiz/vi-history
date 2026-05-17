# Tasks: Installed-User Observation Public Surface

**Input**: Design documents from `.specify/specs/installed-user-observation-public-surface-v1/`

**Prerequisites**: `plan.md`, `spec.md`, imported requirements packet

**Tests**: This branch validates requirements and Spec Kit artifacts only.
Future implementation tasks require a separate IAU preflight.

**Organization**: Tasks are grouped into public import/spec closeout and
blocked future implementation candidates.

## Phase 1: Public Import And Spec Lock

**Purpose**: Establish the public MIT requirements and Spec Kit baseline for
installed-user observation.

- [x] T001 Create public import manifest for `installed-user-observation-public-surface-v1`.
- [x] T002 Import public-safe SyRS, SRS, RTM, and test-plan files for `VHS-REQ-595`.
- [x] T003 Create `spec.md` for observation triggers, fact buckets, routing, and blocked claims.
- [x] T004 Create `plan.md` confirming import/spec-only scope and no implementation admission.
- [x] T005 Create `tasks.md` with future implementation blocked behind IAU preflight.
- [x] T006 Add public admission ledger records showing state `spec-locked`.
- [x] T007 Pin the active Spec Kit feature to `installed-user-observation-public-surface-v1`.
- [x] T008 Extend repository validation to cover the new import and Spec Kit feature.

**Checkpoint**: Issue #25 can close after this PR merges and validation passes.

---

## Phase 2: Blocked Future IAU Candidate - Observation Model

**Purpose**: Current admitted implementation unit for the observation model.

**Current IAU**: `IAU-installed-user-observation-model-v1`

**Implementation is admitted after**:
`docs/requirements/admissions/installed-user-observation-public-surface-v1/IAU-installed-user-observation-model-v1-preflight-v1.json`
records `status: "pass"`.

- [ ] T009 Define an observation-cycle data contract.
- [ ] T010 Define an observation-fact classification contract.
- [ ] T011 Define routing-decision and SemVer recommendation contracts.
- [ ] T012 Add tests for `observed`, `deferred`, and `blocked` fact buckets.
- [ ] T013 Add tests that public feedback is input, not release proof.

---

## Phase 3: Blocked Future IAU Candidate - Reporting Surface

**Purpose**: Reserved for a later IAU only if the observation model is admitted.

**Implementation is blocked until**: The observation model IAU is implemented
and a successor IAU is admitted.

- [ ] T014 [BLOCKED] Define public-safe observation report rendering.
- [ ] T015 [BLOCKED] Add tests for blocked proof/release claim rendering.
- [ ] T016 [BLOCKED] Add tests that Marketplace publication stays disabled.

---

## Final Phase: Cross-Cutting Gates

**Purpose**: Validate traceability, clean-room boundaries, and public safety.

- [x] T017 Run `npm test`.
- [x] T018 Run `npm run check`.
- [x] T019 Run `git diff --check`.
- [x] T020 Run public redaction scan over this feature's public artifacts.
- [x] T021 Run bridge artifact validation for `installed-user-observation-public-surface-v1`.

## Dependencies & Execution Order

- Phase 1 must merge before any future IAU can be considered.
- Phase 2 is admitted by `IAU-installed-user-observation-model-v1`.
- Phase 3 remains blocked until a separate public preflight passes.
- The current IAU is `IAU-installed-user-observation-model-v1`.
- Copilot implementation work starts only from Issue #27 after this admission
  PR merges.

## Implementation Strategy

1. Merge import/spec artifacts to `develop`.
2. Close Issue #25 after validation passes.
3. Decide separately whether an observation model IAU is useful.
4. Keep LabVIEWCLI execution, Docker orchestration, Windows Docker Desktop proof
   claims, Marketplace publication, and source copying blocked.
