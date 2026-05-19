# Tasks: Runtime Settings CLI Validation Proof-Out Adapter

**Input**: Design documents from
`.specify/specs/runtime-settings-cli-validation-proof-out-v1/`

**Prerequisites**: `plan.md`, `spec.md`, imported requirements packet

**Tests**: This feature validates requirements, Spec Kit artifacts, admission
records, and the next admitted runtime-settings CLI validation proof-out
adapter implementation unit.

**Organization**: Tasks are grouped into public import/spec/admission closeout,
the admitted proof-out adapter IAU, and blocked future runtime/release work.

## Phase 1: Public Import And Spec Lock

**Purpose**: Establish the public MIT requirements and Spec Kit baseline for
the runtime settings CLI validation proof-out adapter contract.

- [x] T001 Create public import manifest for
  `runtime-settings-cli-validation-proof-out-v1`.
- [x] T002 Import public-safe SyRS, SRS, RTM, and test-plan files for
  `VHS-REQ-546`, prerequisite references to `VHS-REQ-537`, `VHS-REQ-544`, and
  `VHS-REQ-545`, and supporting test signal `TEST-UNIT-392`.
- [x] T003 Create `spec.md` for `vihs --validate --proof-out <dir>` adapter
  behavior and blocked runtime/release scope.
- [x] T004 Create `plan.md` confirming import/spec/admission-only scope and no
  implementation in this PR.
- [x] T005 Create `tasks.md` with future implementation bounded by the named
  IAU.
- [x] T006 Add public admission ledger records for
  `IAU-runtime-settings-cli-validation-proof-out-v1`.
- [x] T007 Pin the active Spec Kit feature to
  `runtime-settings-cli-validation-proof-out-v1`.
- [x] T008 Extend repository validation to cover the new import/spec/admission
  artifacts.

---

## Phase 2: Admitted IAU - Runtime Settings CLI Validation Proof-Out Adapter

**Purpose**: Implement the smallest proof-out adapter step: tests and a pure
adapter that binds supplied validation/proof facts to deterministic proof JSON
and issue Markdown artifact facts without runtime execution.

**Admitted IAU**:
`IAU-runtime-settings-cli-validation-proof-out-v1`

**Public admission issue**: Issue #81

**Implementation handoff issue**: not created until this admission merges.

- [ ] T009 Add tests proving `--proof-out <dir>` request facts resolve to
  `vihs-validation-proof.json` and `vihs-validation-issue.md`.
- [ ] T010 Add tests proving deterministic proof JSON and issue Markdown come
  from the already admitted validation proof-artifact contract.
- [ ] T011 Add tests proving missing validation/proof facts fail closed without
  artifact writes.
- [ ] T012 Add tests proving unsupported proof-out target facts fail closed
  without artifact writes.
- [ ] T013 Add tests proving non-interactive guidance is copyable and runtime
  validation, compare, LabVIEWCLI, Docker, live proof, publication, mutation,
  Marketplace, and source-copying side effects remain blocked.
- [ ] T014 Implement the minimum public MIT validation proof-out adapter as
  pure request/target/artifact facts around supplied validation proof facts.

---

## Phase 3: Blocked Future Runtime And Release Work

**Purpose**: Keep execution, proof expansion, publication, mutation, and source
sharing visibly outside this IAU.

- [ ] T015 [BLOCKED] Add runtime validation execution.
- [ ] T016 [BLOCKED] Add compare execution.
- [ ] T017 [BLOCKED] Add LabVIEWCLI execution.
- [ ] T018 [BLOCKED] Add Docker command execution or Docker orchestration.
- [ ] T019 [BLOCKED] Add live already-running VS Code session uptake proof or
  live terminal proof.
- [ ] T020 [BLOCKED] Add package/bin publication, VSIX packaging, Marketplace
  publication, or release automation.
- [ ] T021 [BLOCKED] Add launcher/profile mutation.
- [ ] T022 [BLOCKED] Add source copying from another VI History product line.
- [ ] T023 [BLOCKED] Add implementation beyond pure proof-out adapter facts
  without a separate public IAU.

---

## Final Phase: Cross-Cutting Gates

**Purpose**: Validate traceability, clean-room boundaries, and public safety.

- [x] T024 Run `npm test`.
- [x] T025 Run `npm run check`.
- [x] T026 Run `git diff --check`.
- [x] T027 Run public redaction scan over this feature's public artifacts.
- [x] T028 Run bridge artifact validation for
  `runtime-settings-cli-validation-proof-out-v1`.
- [x] T029 Run Spec Kit CLI version/features check.

## Dependencies & Execution Order

- `runtime-settings-cli-validation-readback-v1` and
  `runtime-settings-cli-validation-proof-v1` must be implemented and closed
  before `IAU-runtime-settings-cli-validation-proof-out-v1` implementation
  starts.
- Phase 1 must merge before
  `IAU-runtime-settings-cli-validation-proof-out-v1` implementation starts.
- Phase 2 must use a separate implementation handoff issue after the admission
  PR merges.
- Phase 3 remains blocked until separate public requirements and preflight
  records admit runtime validation execution, compare execution, LabVIEWCLI
  execution, Docker execution, live terminal proof, package/bin publication,
  launcher/profile mutation, Marketplace publication, or source copying.
- Future Copilot implementation work must start from a new public bridge
  admission and implementation handoff issue. Issue #81 is an admission issue
  and must not be reused for implementation.

## Implementation Strategy

1. Merge import/spec/admission artifacts to `develop`.
2. Create a separate implementation handoff issue for
   `IAU-runtime-settings-cli-validation-proof-out-v1`.
3. Keep runtime validation execution, compare execution, LabVIEWCLI execution,
   Docker execution, live terminal proof, package/bin publication,
   launcher/profile mutation, Marketplace publication, and source copying
   blocked.
