# Tasks: Runtime Settings CLI Validation Command Contract

**Input**: Design documents from
`.specify/specs/runtime-settings-cli-validation-command-contract-v1/`

**Prerequisites**: `plan.md`, `spec.md`, imported requirements packet

**Tests**: This feature validates requirements, Spec Kit artifacts, admission
records, and the next admitted runtime-settings CLI validation command contract
implementation unit.

**Organization**: Tasks are grouped into public import/spec/admission closeout,
the admitted validation command contract IAU, blocked future runtime/release
work, and cross-cutting gates.

## Phase 1: Public Import And Spec Lock

**Purpose**: Establish the public MIT requirements and Spec Kit baseline for
the runtime settings CLI validation command contract.

- [x] T001 Create public import manifest for
  `runtime-settings-cli-validation-command-contract-v1`.
- [x] T002 Import public-safe SyRS, SRS, RTM, and test-plan files for
  `VHS-REQ-546`, prerequisite references to `VHS-REQ-537`, `VHS-REQ-543`,
  `VHS-REQ-544`, and `VHS-REQ-545`, and supporting test signal
  `TEST-UNIT-392`.
- [x] T003 Create `spec.md` for deterministic `vihs --validate` command
  result composition and blocked runtime/release scope.
- [x] T004 Create `plan.md` confirming import/spec/admission-only scope and no
  implementation in this PR.
- [x] T005 Create `tasks.md` with future implementation bounded by the named
  IAU.
- [x] T006 Add public admission ledger records for
  `IAU-runtime-settings-cli-validation-command-contract-v1`.
- [x] T007 Pin the active Spec Kit feature to
  `runtime-settings-cli-validation-command-contract-v1`.
- [x] T008 Extend repository validation to cover the new import/spec/admission
  artifacts.

---

## Phase 2: Admitted IAU - Runtime Settings CLI Validation Command Contract

**Purpose**: Implement the smallest command-level composition step: tests and a
pure validation command result adapter for `vihs --validate`.

**Admitted IAU**:
`IAU-runtime-settings-cli-validation-command-contract-v1`

**Public admission issue**: Issue #93

**Implementation handoff issue**: Issue #95

**Implementation PR**: PR #96

- [x] T009 Add tests proving ready `vihs --validate` command composition.
- [x] T010 Add tests proving missing or invalid persisted settings fail
  closed.
- [x] T011 Add tests proving missing runtime selection facts fail before ready
  validation status.
- [x] T012 Add tests proving unknown runtime blocked-reason fallback remains
  stable through the command result.
- [x] T013 Add tests proving `--proof-out <dir>` composes through exactly
  `vihs-validation-proof.json` and `vihs-validation-issue.md` using the already
  admitted proof-out file-emission contract.
- [x] T014 Add tests proving no proof-out target means no file writes.
- [x] T015 Add tests proving unsupported proof-out targets and I/O failures do
  not produce hidden partial success.
- [x] T016 Add tests proving non-interactive guidance is copyable and
  deterministic.
- [x] T017 Add tests proving OS probing, locators, runtime execution, compare,
  LabVIEWCLI, Docker, live proof, package/bin publication, launcher/profile
  mutation, Marketplace, release, `validate-plan-only`, and source-copying side
  effects remain blocked.
- [x] T018 Implement the minimum public MIT validation command-result
  contract.

---

## Phase 3: Blocked Future Runtime And Release Work

**Purpose**: Keep execution, publication, mutation, release, terminal wiring,
and source sharing visibly outside this IAU.

- [ ] T019 [BLOCKED] Add OS inspection, runtime locator invocation, or private
  path discovery.
- [ ] T020 [BLOCKED] Add runtime validation execution.
- [ ] T021 [BLOCKED] Add compare execution.
- [ ] T022 [BLOCKED] Add LabVIEWCLI execution.
- [ ] T023 [BLOCKED] Add Docker command execution or Docker orchestration.
- [ ] T024 [BLOCKED] Add raw terminal process wiring or live terminal proof.
- [ ] T025 [BLOCKED] Add package/bin publication, VSIX packaging, Marketplace
  publication, release automation, or launcher/profile mutation.
- [ ] T026 [BLOCKED] Add source copying from another VI History product line.
- [ ] T027 [BLOCKED] Add `validate-plan-only` without a separate public IAU.

---

## Final Phase: Cross-Cutting Gates

**Purpose**: Validate traceability, clean-room boundaries, and public safety.

- [x] T028 Run `npm test`.
- [x] T029 Run `npm run check`.
- [x] T030 Run `git diff --check`.
- [x] T031 Run public redaction scan over this feature's public artifacts.
- [x] T032 Run bridge artifact validation for
  `runtime-settings-cli-validation-command-contract-v1`.
- [x] T033 Run Spec Kit CLI version/features check.

## Dependencies & Execution Order

- `runtime-settings-cli-validation-runtime-outcome-v1` was implemented and
  closed before
  `IAU-runtime-settings-cli-validation-command-contract-v1` implementation
  started.
- Phase 1 merged before
  `IAU-runtime-settings-cli-validation-command-contract-v1` implementation
  started.
- Phase 2 used separate implementation handoff Issue #95 after the admission
  PR merged.
- Phase 3 remains blocked until separate public requirements and preflight
  records admit OS inspection, runtime validation execution, compare
  execution, LabVIEWCLI execution, Docker execution, terminal process wiring,
  live proof, package/bin publication, launcher/profile mutation, release
  automation, Marketplace publication, source copying, or `validate-plan-only`.

## Implementation Strategy

1. Merge import/spec/admission artifacts to `develop`.
2. Create separate implementation handoff Issue #95 for
   `IAU-runtime-settings-cli-validation-command-contract-v1`.
3. Implement only T009-T018 through that handoff issue and PR #96.
4. Keep runtime validation execution, compare execution, LabVIEWCLI execution,
   Docker execution, terminal process wiring, live proof, package/bin
   publication, launcher/profile mutation, release automation, Marketplace
   publication, `validate-plan-only`, and source copying blocked.
