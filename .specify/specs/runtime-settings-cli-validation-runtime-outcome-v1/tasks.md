# Tasks: Runtime Settings CLI Validation Runtime Outcome Facts

**Input**: Design documents from
`.specify/specs/runtime-settings-cli-validation-runtime-outcome-v1/`

**Prerequisites**: `plan.md`, `spec.md`, imported requirements packet

**Tests**: This feature validates requirements, Spec Kit artifacts, admission
records, and the next admitted runtime-settings CLI validation runtime outcome
implementation unit.

**Organization**: Tasks are grouped into public import/spec/admission closeout,
the admitted runtime outcome facts IAU, and blocked future runtime/release
work.

## Phase 1: Public Import And Spec Lock

**Purpose**: Establish the public MIT requirements and Spec Kit baseline for
the runtime settings CLI validation runtime outcome facts contract.

- [x] T001 Create public import manifest for
  `runtime-settings-cli-validation-runtime-outcome-v1`.
- [x] T002 Import public-safe SyRS, SRS, RTM, and test-plan files for
  `VHS-REQ-546`, prerequisite references to `VHS-REQ-537`, `VHS-REQ-543`,
  `VHS-REQ-544`, and `VHS-REQ-545`, and supporting test signal
  `TEST-UNIT-392`.
- [x] T003 Create `spec.md` for runtime outcome fact shaping from supplied
  public-safe selection facts and blocked runtime/release scope.
- [x] T004 Create `plan.md` confirming import/spec/admission-only scope and no
  implementation in this PR.
- [x] T005 Create `tasks.md` with future implementation bounded by the named
  IAU.
- [x] T006 Add public admission ledger records for
  `IAU-runtime-settings-cli-validation-runtime-outcome-v1`.
- [x] T007 Pin the active Spec Kit feature to
  `runtime-settings-cli-validation-runtime-outcome-v1`.
- [x] T008 Extend repository validation to cover the new import/spec/admission
  artifacts.

---

## Phase 2: Admitted IAU - Runtime Settings CLI Validation Runtime Outcome Facts

**Purpose**: Implement the smallest fact-generation step: tests and a pure
runtime outcome adapter that maps supplied public-safe runtime selection facts
to the existing validation readback `runtimeOutcome` shape.

**Admitted IAU**:
`IAU-runtime-settings-cli-validation-runtime-outcome-v1`

**Public admission issue**: Issue #89

**Implementation handoff issue**: To be created after the admission PR merges

- [ ] T009 Add tests proving ready supplied runtime selection facts map to
  `VIHS_OK`, `ready`, `ready`, and `implemented`.
- [ ] T010 Add tests proving invalid or missing provider facts fail closed.
- [ ] T011 Add tests proving Docker not-implemented and provider/platform
  unsupported facts map to `runtimeImplementationStatus: not-implemented`.
- [ ] T012 Add tests proving LabVIEW not-found and unknown blocked reasons
  produce stable public error/status facts.
- [ ] T013 Add tests proving generated `runtimeOutcome` facts compose into the
  existing validation readback and proof-artifact contracts.
- [ ] T014 Add tests proving generated facts compose into the existing
  proof-out adapter and file-emission contracts without changing their output
  shapes.
- [ ] T015 Add tests proving OS probing, locators, runtime execution, compare,
  LabVIEWCLI, Docker, live proof, publication, mutation, release, Marketplace,
  and source-copying side effects remain blocked.
- [ ] T016 Implement the minimum public MIT validation runtime outcome facts
  adapter.

---

## Phase 3: Blocked Future Runtime And Release Work

**Purpose**: Keep execution, publication, mutation, release, and source sharing
visibly outside this IAU.

- [ ] T017 [BLOCKED] Add runtime validation execution or runtime locator
  invocation.
- [ ] T018 [BLOCKED] Add compare execution.
- [ ] T019 [BLOCKED] Add LabVIEWCLI execution.
- [ ] T020 [BLOCKED] Add Docker command execution or Docker orchestration.
- [ ] T021 [BLOCKED] Add live already-running VS Code session uptake proof or
  live terminal proof.
- [ ] T022 [BLOCKED] Add package/bin publication, VSIX packaging, Marketplace
  publication, release automation, or launcher/profile mutation.
- [ ] T023 [BLOCKED] Add source copying from another VI History product line.
- [ ] T024 [BLOCKED] Add validation fact generation beyond supplied runtime
  outcome fact shaping without a separate public IAU.
- [ ] T025 [BLOCKED] Add implementation beyond runtime outcome facts without a
  separate public IAU.

---

## Final Phase: Cross-Cutting Gates

**Purpose**: Validate traceability, clean-room boundaries, and public safety.

- [x] T026 Run `npm test`.
- [x] T027 Run `npm run check`.
- [x] T028 Run `git diff --check`.
- [x] T029 Run public redaction scan over this feature's public artifacts.
- [x] T030 Run bridge artifact validation for
  `runtime-settings-cli-validation-runtime-outcome-v1`.
- [x] T031 Run Spec Kit CLI version/features check.

## Dependencies & Execution Order

- `runtime-settings-cli-validation-proof-out-file-emission-v1` must be
  implemented and closed before
  `IAU-runtime-settings-cli-validation-runtime-outcome-v1` implementation
  starts.
- Phase 1 must merge before
  `IAU-runtime-settings-cli-validation-runtime-outcome-v1` implementation
  starts.
- Phase 2 must use a separate implementation handoff issue after the admission
  PR merges.
- Phase 3 remains blocked until separate public requirements and preflight
  records admit runtime validation execution, compare execution, LabVIEWCLI
  execution, Docker execution, live terminal proof, package/bin publication,
  launcher/profile mutation, release automation, Marketplace publication, or
  source copying.
- Future Copilot implementation work must start from a new public bridge
  admission and implementation handoff issue. Issue #89 is an admission issue
  and must not be reused for implementation.

## Implementation Strategy

1. Merge import/spec/admission artifacts to `develop`.
2. Create a separate implementation handoff issue for
   `IAU-runtime-settings-cli-validation-runtime-outcome-v1`.
3. Keep runtime validation execution, compare execution, LabVIEWCLI execution,
   Docker execution, live terminal proof, package/bin publication,
   launcher/profile mutation, release automation, Marketplace publication, and
   source copying blocked.
