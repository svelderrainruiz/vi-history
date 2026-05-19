# Tasks: Runtime Settings CLI Validation Plan-Only

**Input**: Design documents from
`.specify/specs/runtime-settings-cli-validation-plan-only-v1/`

**Prerequisites**: `plan.md`, `spec.md`, imported requirements packet

**Tests**: This feature validates requirements, Spec Kit artifacts, admission
records, and the next admitted runtime-settings CLI validation plan-only
implementation unit.

**Organization**: Tasks are grouped into public import/spec/admission closeout,
the admitted validation plan-only IAU, blocked future runtime/release/file
emission work, and cross-cutting gates.

## Phase 1: Public Import And Spec Lock

**Purpose**: Establish the public MIT requirements and Spec Kit baseline for
the runtime settings CLI validation plan-only command mode.

- [x] T001 Create public import manifest for
  `runtime-settings-cli-validation-plan-only-v1`.
- [x] T002 Import public-safe SyRS, SRS, RTM, and test-plan files for
  `VHS-REQ-546`, prerequisite references to `VHS-REQ-537`, `VHS-REQ-543`,
  `VHS-REQ-544`, and `VHS-REQ-545`, and supporting test signal
  `TEST-UNIT-392`.
- [x] T003 Create `spec.md` for deterministic non-writing proof-out planning
  facts and blocked runtime/release/file-emission scope.
- [x] T004 Create `plan.md` confirming import/spec/admission-only scope and no
  implementation in this PR.
- [x] T005 Create `tasks.md` with future implementation bounded by the named
  IAU.
- [x] T006 Add public admission ledger records for
  `IAU-runtime-settings-cli-validation-plan-only-v1`.
- [x] T007 Pin the active Spec Kit feature to
  `runtime-settings-cli-validation-plan-only-v1`.
- [x] T008 Extend repository validation to cover the new import/spec/admission
  artifacts.

---

## Phase 2: Admitted IAU - Runtime Settings CLI Validation Plan-Only

**Purpose**: Implement the smallest remaining command-result refinement:
tests and a pure `validate-plan-only` branch that reports proof-out plan facts
without file writes.

**Admitted IAU**:
`IAU-runtime-settings-cli-validation-plan-only-v1`

**Public admission issue**: Issue #99

**Implementation handoff issue**: to be created after this admission PR merges

- [ ] T009 Add tests proving `validate-plan-only` is accepted only as a bounded
  request mode over `vihs --validate`.
- [ ] T010 Add tests proving plan-only requires ready validation facts and a
  supported proof-out target.
- [ ] T011 Add tests proving plan-only composes through the existing proof
  artifact and proof-out adapter contracts without calling the file-emission
  writer.
- [ ] T012 Add tests proving plan-only returns exactly the planned
  `vihs-validation-proof.json` and `vihs-validation-issue.md` artifact facts.
- [ ] T013 Add tests proving no file writes occur and file-system adapters or
  proof-out writers are not called.
- [ ] T014 Add tests proving missing validation facts, unsupported proof-out
  targets, and malformed inputs fail closed without hidden success.
- [ ] T015 Add tests proving deterministic non-interactive guidance and
  blocked side-effect facts.
- [ ] T016 Implement the minimum public MIT plan-only command-result branch.

---

## Phase 3: Blocked Future Runtime, Release, And File Emission Work

**Purpose**: Keep execution, publication, mutation, release, file emission for
plan-only, and source sharing visibly outside this IAU.

- [ ] T017 [BLOCKED] Call the proof-out file-emission writer or write proof
  files for plan-only.
- [ ] T018 [BLOCKED] Add runtime locator invocation, OS inspection, or private
  path discovery.
- [ ] T019 [BLOCKED] Add runtime validation execution.
- [ ] T020 [BLOCKED] Add compare execution.
- [ ] T021 [BLOCKED] Add LabVIEWCLI execution.
- [ ] T022 [BLOCKED] Add Docker command execution or Docker orchestration.
- [ ] T023 [BLOCKED] Add raw terminal process wiring or live terminal proof.
- [ ] T024 [BLOCKED] Add package/bin publication, VSIX packaging, Marketplace
  publication, release automation, or launcher/profile mutation.
- [ ] T025 [BLOCKED] Add source copying from another VI History product line.
- [ ] T026 [BLOCKED] Add implementation beyond plan-only without a separate
  public IAU.

---

## Final Phase: Cross-Cutting Gates

**Purpose**: Validate traceability, clean-room boundaries, and public safety.

- [x] T027 Run `npm test`.
- [x] T028 Run `npm run check`.
- [x] T029 Run `git diff --check`.
- [x] T030 Run public redaction scan over this feature's public artifacts.
- [x] T031 Run bridge artifact validation for
  `runtime-settings-cli-validation-plan-only-v1`.
- [x] T032 Run Spec Kit CLI version/features check.

## Dependencies & Execution Order

- `runtime-settings-cli-validation-command-contract-v1` was implemented and
  closed before
  `IAU-runtime-settings-cli-validation-plan-only-v1` admission started.
- Phase 1 must merge before
  `IAU-runtime-settings-cli-validation-plan-only-v1` implementation starts.
- Phase 2 must use a separate implementation handoff issue after the admission
  PR merges.
- Phase 3 remains blocked until separate public requirements and preflight
  records admit plan-only file emission, runtime locator invocation, OS
  inspection, runtime validation execution, compare execution, LabVIEWCLI
  execution, Docker execution, terminal process wiring, live proof, package/bin
  publication, launcher/profile mutation, release automation, Marketplace
  publication, or source copying.
- Future Copilot implementation work must start from the separate public
  implementation handoff issue. Issue #99 is an admission issue and must not
  be reused for implementation.

## Implementation Strategy

1. Merge import/spec/admission artifacts to `develop`.
2. Create a separate implementation handoff issue for
   `IAU-runtime-settings-cli-validation-plan-only-v1`.
3. Implement only T009-T016 through that handoff issue.
4. Keep file emission for plan-only, runtime locator invocation, OS
   inspection, runtime validation execution, compare execution, LabVIEWCLI
   execution, Docker execution, terminal process wiring, live proof,
   package/bin publication, launcher/profile mutation, release automation,
   Marketplace publication, and source copying blocked.
