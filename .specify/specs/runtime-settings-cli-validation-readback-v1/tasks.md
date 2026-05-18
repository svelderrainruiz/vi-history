# Tasks: Runtime Settings CLI Validation Readback

**Input**: Design documents from
`.specify/specs/runtime-settings-cli-validation-readback-v1/`

**Prerequisites**: `plan.md`, `spec.md`, imported requirements packet

**Tests**: This feature validates requirements, Spec Kit artifacts, admission
records, and the next admitted runtime-settings CLI validation readback
implementation unit.

**Organization**: Tasks are grouped into public import/spec/admission closeout,
the admitted validation readback IAU, and blocked future interactive/runtime/
release work.

## Phase 1: Public Import And Spec Lock

**Purpose**: Establish the public MIT requirements and Spec Kit baseline for
the runtime settings CLI validation readback contract.

- [x] T001 Create public import manifest for
  `runtime-settings-cli-validation-readback-v1`.
- [x] T002 Import public-safe SyRS, SRS, RTM, and test-plan files for
  `VHS-REQ-543` and `VHS-REQ-546`.
- [x] T003 Create `spec.md` for validation readback behavior and blocked
  interactive/runtime/release scope.
- [x] T004 Create `plan.md` confirming import/spec/admission-only scope and no
  implementation in this PR.
- [x] T005 Create `tasks.md` with future implementation bounded by the named
  IAU.
- [x] T006 Add public admission ledger records for
  `IAU-runtime-settings-cli-validation-readback-contract-v1`.
- [x] T007 Pin the active Spec Kit feature to
  `runtime-settings-cli-validation-readback-v1`.
- [x] T008 Extend repository validation to cover the new import/spec/admission
  artifacts.

---

## Phase 2: Admitted IAU - Runtime Settings CLI Validation Readback Contract

**Purpose**: Implement the smallest validation step: tests and a pure
validation readback/result contract that reports persisted settings and runtime
outcome facts without execution or proof-out file writing.

**Admitted IAU**:
`IAU-runtime-settings-cli-validation-readback-contract-v1`

**Public admission issue**: Issue #51

**Implementation handoff issue**: to be created after this admission PR merges.

- [ ] T009 Add tests proving validation readback reports persisted provider,
  LabVIEW version, LabVIEW bitness, and effective settings target facts without
  mutating settings content.
- [ ] T010 Add tests proving validation readback reports runtime outcome facts
  without LabVIEWCLI, Docker, compare, proof-out, or picker behavior.
- [ ] T011 Add tests proving missing or unsupported persisted settings fail
  closed with stable result fields.
- [ ] T012 Implement the minimum public MIT validation readback contract.

---

## Phase 3: Blocked Future Interactive, Runtime, And Release Work

**Purpose**: Keep interactive selection, artifact generation, execution, and
publication behavior visibly outside this IAU.

- [ ] T013 [BLOCKED] Add no-argument interactive `vihs` selection or
  confirmation.
- [ ] T014 [BLOCKED] Add `--proof-out` file generation.
- [ ] T015 [BLOCKED] Add compare execution, LabVIEWCLI execution, Docker
  execution, or Docker orchestration.
- [ ] T016 [BLOCKED] Add live already-running VS Code session uptake proof.
- [ ] T017 [BLOCKED] Add packaging or Marketplace publication behavior.
- [ ] T018 [BLOCKED] Add source copying from another VI History product line.

---

## Final Phase: Cross-Cutting Gates

**Purpose**: Validate traceability, clean-room boundaries, and public safety.

- [x] T019 Run `npm test`.
- [x] T020 Run `npm run check`.
- [x] T021 Run `git diff --check`.
- [x] T022 Run public redaction scan over this feature's public artifacts.
- [x] T023 Run bridge artifact validation for
  `runtime-settings-cli-validation-readback-v1`.

## Dependencies & Execution Order

- Phase 1 must merge before
  `IAU-runtime-settings-cli-validation-readback-contract-v1` implementation
  starts.
- Phase 2 may start only from the implementation handoff issue created after
  this admission PR merges.
- Phase 3 remains blocked until separate public requirements and preflight
  records admit interactive selection, proof-out file generation, runtime
  execution, live-session proof, or release behavior.
- Future Copilot implementation work must start from a new bridge admission and
  implementation handoff issue. Issue #51 is an admission issue and must not be
  reused for implementation.

## Implementation Strategy

1. Merge import/spec/admission artifacts to `develop`.
2. Create a separate implementation handoff issue for
   `IAU-runtime-settings-cli-validation-readback-contract-v1`.
3. Keep interactive selection, proof-out file generation, compare execution,
   LabVIEWCLI, Docker, live-session proof, Marketplace publication, packaging,
   and source copying blocked.
