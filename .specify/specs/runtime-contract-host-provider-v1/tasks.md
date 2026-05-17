# Tasks: Runtime Contract Host Provider

**Input**: Design documents from `.specify/specs/runtime-contract-host-provider-v1/`

**Prerequisites**: `plan.md`, `spec.md`, imported requirements packet

**Tests**: Future implementation tasks include tests because the imported
requirements require unit, proof, and documentation verification.

**Organization**: Tasks are grouped by bootstrap work and independently
testable user stories for Issue #4.

## Phase 1: Bootstrap Import And Authority Setup

**Purpose**: Establish the clean-room Spec Kit authority and imported runtime
contract slice.

- [x] T001 Create package identity metadata for `svelderrainruiz.vi-history@0.1.0`.
- [x] T002 Initialize Spec Kit with Codex skills and shell scripts.
- [x] T003 Pin the governed feature directory in `.specify/feature.json`.
- [x] T004 Import `runtime-contract-host-provider-v1` under `docs/requirements/imports/`.
- [x] T005 Create `spec.md`, `plan.md`, and `tasks.md` for the imported slice.
- [x] T006 Add repository validation gates for import consistency and clean-room boundaries.

**Checkpoint**: Issues #1, #2, and #3 can close after bootstrap merges and
validation passes.

---

## Phase 2: Foundational Runtime Contracts

**Purpose**: Define clean-room contracts that block all implementation stories.

**Implementation is blocked until**: Issue #4 starts after this bootstrap and
Issue #3 are closed.

- [x] T007 [P] Define runtime selection data contract with provider, engine, version, bitness, selected paths, readiness, blocked reason, and notes.
- [x] T008 [P] Define comparison command-plan contract for LabVIEWCLI `CreateComparisonReport`.
- [x] T009 [P] Define proof packet contract for runtime facts, generated-report facts, stdout, stderr, exit code, duration, and issue body.
- [x] T010 Define provider policy contract for host-native default, bounded Docker expert selection, unsupported bundles, and no silent fallback.
- [x] T011 Add tests that imported IDs are traceable from implementation contracts to `docs/requirements/imports/runtime-contract-host-provider-v1/rtm.csv`.

**Checkpoint**: User story implementation can begin after these contracts and
tests exist.

---

## Phase 3: User Story 1 - Installed User Chooses Compare Explicitly (Priority: P1)

**Goal**: Compare starts only after commit selection and an explicit compare
action.

**Independent Test**: Selecting commits exposes runtime facts and does not run
report generation until the compare action is invoked.

**Current IAU**: `IAU-runtime-contract-explicit-compare-v1` has preflight
`status: pass`, so `T012` through `T015` may start. Later runtime, Docker, and
proof-intake tasks remain blocked.

- [ ] T012 [P] [US1] Add tests for commit-pair selection retaining selected/base commit facts.
- [ ] T013 [P] [US1] Add tests proving compare does not start before explicit user action.
- [ ] T014 [US1] Implement clean-room compare-action state flow.
- [ ] T015 [US1] Render selected commit, base commit, provider, version, and bitness facts before execution.

**Checkpoint**: US1 is independently demonstrable without Docker or proof intake.

---

## Phase 4: User Story 2 - Runtime Provider Facts Are Retained (Priority: P1)

**Goal**: Runtime selection, command planning, and report surfaces retain
provider, engine, version, bitness, paths, and failure facts.

**Independent Test**: A ready runtime produces a command plan with retained
selection fields; an unavailable runtime fails closed with corrective guidance.

- [ ] T016 [P] [US2] Add tests for supported host-native LabVIEWCLI runtime selection.
- [ ] T017 [P] [US2] Add tests for unsupported LabVIEW 2024-or-older rejection.
- [ ] T018 [P] [US2] Add tests for missing explicit proof override paths failing closed.
- [ ] T019 [US2] Implement runtime discovery and readiness classification.
- [ ] T020 [US2] Implement LabVIEWCLI command-plan creation.
- [ ] T021 [US2] Implement report/proof rendering of retained runtime facts.

**Checkpoint**: US2 is independently testable without Docker proof intake.

---

## Phase 5: User Story 3 - Expert Docker Provider Is Bounded (Priority: P2)

**Goal**: Docker remains explicitly selected and cannot silently replace the
installed-user host-native default.

**Independent Test**: Default settings choose host-native LabVIEWCLI; explicit
Docker selection records Docker facts and fails closed if unsupported.

- [ ] T022 [P] [US3] Add tests for host-native default provider selection.
- [ ] T023 [P] [US3] Add tests for explicit Docker expert-provider selection.
- [ ] T024 [P] [US3] Add tests that Docker is never selected implicitly.
- [ ] T025 [US3] Implement provider policy selection and failure guidance.

**Checkpoint**: US3 is independently testable through provider policy fixtures.

---

## Phase 6: User Story 4 - Proof Intake Preserves Evidence Class (Priority: P3)

**Goal**: Linux host proof, Windows installed-user proof, and Windows Docker
Desktop Windows-container proof remain distinct.

**Independent Test**: Proof intake rejects Windows Docker Desktop claims without
real Windows-container facts and does not treat Linux proof as Windows proof.

- [ ] T026 [P] [US4] Add tests for Linux host LabVIEW proof classification.
- [ ] T027 [P] [US4] Add tests rejecting Linux Docker, WSL, host-provider proof, or reports without proof packets as Windows Docker Desktop proof.
- [ ] T028 [P] [US4] Add tests for `vihs validate-fixture` proof JSON and issue-body generation.
- [ ] T029 [US4] Implement proof packet writer and issue-body generation.
- [ ] T030 [US4] Implement Windows Docker Desktop proof intake validation.

**Checkpoint**: US4 is independently testable through proof packet fixtures.

---

## Final Phase: Cross-Cutting Gates

**Purpose**: Validate traceability, clean-room boundaries, and public safety.

- [ ] T031 Run `npm test`.
- [ ] T032 Run `npm run check`.
- [ ] T033 Run `git diff --check`.
- [ ] T034 Confirm no copied implementation source, private paths, private tooling names, credentials, or private evidence entered the repo.
- [ ] T035 Update public issues with the final Issue #4 implementation proof summary.

## Dependencies & Execution Order

- Phase 1 must merge before Issue #4 begins.
- Phase 2 blocks all implementation stories.
- US1 and US2 are P1 and may run in parallel after Phase 2.
- US3 depends on provider policy from Phase 2.
- US4 depends on proof packet contracts from Phase 2.
- Cross-cutting gates run after each implemented story and before merge.

## Implementation Strategy

1. Merge bootstrap to `develop`.
2. Promote `develop` to `main` after green validation.
3. Close Issues #1, #2, and #3.
4. Use Issue #4 for implementation tasks T007-T035.
5. Keep Issue #5 open until a later governing decision admits or rejects
   Marketplace publication.
