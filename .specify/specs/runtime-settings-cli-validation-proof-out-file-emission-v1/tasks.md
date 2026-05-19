# Tasks: Runtime Settings CLI Validation Proof-Out File Emission

**Input**: Design documents from
`.specify/specs/runtime-settings-cli-validation-proof-out-file-emission-v1/`

**Prerequisites**: `plan.md`, `spec.md`, imported requirements packet

**Tests**: This feature validates requirements, Spec Kit artifacts, admission
records, and the next admitted runtime-settings CLI validation proof-out
file-emission implementation unit.

**Organization**: Tasks are grouped into public import/spec/admission closeout,
the admitted proof-out file-emission IAU, and blocked future runtime/release
work.

## Phase 1: Public Import And Spec Lock

**Purpose**: Establish the public MIT requirements and Spec Kit baseline for
the runtime settings CLI validation proof-out file-emission contract.

- [x] T001 Create public import manifest for
  `runtime-settings-cli-validation-proof-out-file-emission-v1`.
- [x] T002 Import public-safe SyRS, SRS, RTM, and test-plan files for
  `VHS-REQ-546`, prerequisite references to `VHS-REQ-537`, `VHS-REQ-544`, and
  `VHS-REQ-545`, and supporting test signal `TEST-UNIT-392`.
- [x] T003 Create `spec.md` for `vihs --validate --proof-out <dir>` file
  emission from ready proof-out adapter facts and blocked runtime/release
  scope.
- [x] T004 Create `plan.md` confirming import/spec/admission-only scope and no
  implementation in this PR.
- [x] T005 Create `tasks.md` with future implementation bounded by the named
  IAU.
- [x] T006 Add public admission ledger records for
  `IAU-runtime-settings-cli-validation-proof-out-file-emission-v1`.
- [x] T007 Pin the active Spec Kit feature to
  `runtime-settings-cli-validation-proof-out-file-emission-v1`.
- [x] T008 Extend repository validation to cover the new import/spec/admission
  artifacts.

---

## Phase 2: Admitted IAU - Runtime Settings CLI Validation Proof-Out File Emission

**Purpose**: Implement the smallest filesystem step: tests and a bounded file
emission adapter that writes already-created proof-out adapter payload facts as
exactly two public proof files without running validation.

**Admitted IAU**:
`IAU-runtime-settings-cli-validation-proof-out-file-emission-v1`

**Public admission issue**: Issue #85

**Implementation handoff issue**: To be created after the admission PR merges

- [ ] T009 Add tests proving a ready proof-out adapter writes exactly
  `vihs-validation-proof.json` and `vihs-validation-issue.md`.
- [ ] T010 Add tests proving deterministic proof JSON and issue Markdown file
  content matches the already admitted proof-out adapter payload facts.
- [ ] T011 Add tests proving a supported output target directory is created
  when safe.
- [ ] T012 Add tests proving missing or unready proof-out adapter facts fail
  closed before file writes.
- [ ] T013 Add tests proving unsupported output targets fail closed before file
  writes.
- [ ] T014 Add tests proving I/O failures report deterministic failure facts
  without hidden partial success.
- [ ] T015 Add tests proving runtime validation, new validation fact
  generation, compare, LabVIEWCLI, Docker, live proof, publication, mutation,
  Marketplace, and source-copying side effects remain blocked.
- [ ] T016 Implement the minimum public MIT validation proof-out file-emission
  adapter around ready proof-out adapter facts.

---

## Phase 3: Blocked Future Runtime And Release Work

**Purpose**: Keep execution, proof expansion, publication, mutation, and source
sharing visibly outside this IAU.

- [ ] T017 [BLOCKED] Add runtime validation execution.
- [ ] T018 [BLOCKED] Add new validation fact generation in this lane.
- [ ] T019 [BLOCKED] Add compare execution.
- [ ] T020 [BLOCKED] Add LabVIEWCLI execution.
- [ ] T021 [BLOCKED] Add Docker command execution or Docker orchestration.
- [ ] T022 [BLOCKED] Add live already-running VS Code session uptake proof or
  live terminal proof.
- [ ] T023 [BLOCKED] Add package/bin publication, VSIX packaging, Marketplace
  publication, or release automation.
- [ ] T024 [BLOCKED] Add launcher/profile mutation.
- [ ] T025 [BLOCKED] Add source copying from another VI History product line.
- [ ] T026 [BLOCKED] Add implementation beyond proof-out file emission from
  ready adapter facts without a separate public IAU.

---

## Final Phase: Cross-Cutting Gates

**Purpose**: Validate traceability, clean-room boundaries, and public safety.

- [x] T027 Run `npm test`.
- [x] T028 Run `npm run check`.
- [x] T029 Run `git diff --check`.
- [x] T030 Run public redaction scan over this feature's public artifacts.
- [x] T031 Run bridge artifact validation for
  `runtime-settings-cli-validation-proof-out-file-emission-v1`.
- [x] T032 Run Spec Kit CLI version/features check.

## Dependencies & Execution Order

- `runtime-settings-cli-validation-proof-out-v1` must be implemented and closed
  before `IAU-runtime-settings-cli-validation-proof-out-file-emission-v1`
  implementation starts.
- Phase 1 must merge before
  `IAU-runtime-settings-cli-validation-proof-out-file-emission-v1`
  implementation starts.
- Phase 2 must use a separate implementation handoff issue after the admission
  PR merges.
- Phase 3 remains blocked until separate public requirements and preflight
  records admit runtime validation execution, new validation fact generation,
  compare execution, LabVIEWCLI execution, Docker execution, live terminal
  proof, package/bin publication, launcher/profile mutation, Marketplace
  publication, or source copying.
- Future Copilot implementation work must start from a new public bridge
  admission and implementation handoff issue. Issue #85 is an admission issue
  and must not be reused for implementation.

## Implementation Strategy

1. Merge import/spec/admission artifacts to `develop`.
2. Create a separate implementation handoff issue for
   `IAU-runtime-settings-cli-validation-proof-out-file-emission-v1`.
3. Keep runtime validation execution, new validation fact generation, compare
   execution, LabVIEWCLI execution, Docker execution, live terminal proof,
   package/bin publication, launcher/profile mutation, Marketplace
   publication, and source copying blocked.
