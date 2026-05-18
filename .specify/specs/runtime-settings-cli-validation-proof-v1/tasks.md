# Tasks: Runtime Settings CLI Validation Proof

**Input**: Design documents from
`.specify/specs/runtime-settings-cli-validation-proof-v1/`

**Prerequisites**: `plan.md`, `spec.md`, imported requirements packet

**Tests**: This feature validates requirements, Spec Kit artifacts, admission
records, and the next admitted runtime-settings CLI validation proof
implementation unit.

**Organization**: Tasks are grouped into public import/spec/admission closeout,
the admitted proof-artifact IAU, and blocked future interactive/runtime/release
work.

## Phase 1: Public Import And Spec Lock

**Purpose**: Establish the public MIT requirements and Spec Kit baseline for
the runtime settings CLI validation proof artifact contract.

- [x] T001 Create public import manifest for
  `runtime-settings-cli-validation-proof-v1`.
- [x] T002 Import public-safe SyRS, SRS, RTM, and test-plan files for
  `VHS-REQ-546` and supporting test signal `TEST-UNIT-392`.
- [x] T003 Create `spec.md` for validation proof artifact behavior and blocked
  interactive/runtime/release scope.
- [x] T004 Create `plan.md` confirming import/spec/admission-only scope and no
  implementation in this PR.
- [x] T005 Create `tasks.md` with future implementation bounded by the named
  IAU.
- [x] T006 Add public admission ledger records for
  `IAU-runtime-settings-cli-validation-proof-artifact-v1`.
- [x] T007 Pin the active Spec Kit feature to
  `runtime-settings-cli-validation-proof-v1`.
- [x] T008 Extend repository validation to cover the new import/spec/admission
  artifacts.

---

## Phase 2: Admitted IAU - Runtime Settings CLI Validation Proof Artifact

**Purpose**: Implement the smallest proof artifact step: tests and a pure proof
JSON/issue-body contract that retains supplied validation facts without runtime
execution.

**Admitted IAU**:
`IAU-runtime-settings-cli-validation-proof-artifact-v1`

**Public admission issue**: Issue #55

**Implementation handoff issue**: Issue #57.

- [x] T009 Add tests proving validation readback facts can be retained as
  structured proof JSON without LabVIEWCLI, Docker, compare execution, or
  runtime orchestration.
- [x] T010 Add tests proving secret-like environment values are redacted from
  public proof output.
- [x] T011 Add tests proving deterministic issue-body content points to the MIT
  public authority.
- [x] T012 Implement the minimum public MIT validation proof artifact contract.

---

## Phase 3: Blocked Future Interactive, Runtime, And Release Work

**Purpose**: Keep interactive selection, execution, and publication behavior
visibly outside this IAU.

- [ ] T013 [BLOCKED] Add no-argument interactive `vihs` selection or
  confirmation.
- [ ] T014 [BLOCKED] Add compare execution.
- [ ] T015 [BLOCKED] Add LabVIEWCLI execution, Docker execution, or Docker
  orchestration.
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
  `runtime-settings-cli-validation-proof-v1`.

## Dependencies & Execution Order

- Phase 1 must merge before
  `IAU-runtime-settings-cli-validation-proof-artifact-v1` implementation
  starts.
- Phase 2 is complete through Issue #57 for T009-T012 only.
- Phase 3 remains blocked until separate public requirements and preflight
  records admit interactive selection, compare execution, runtime execution,
  live-session proof, or release behavior.
- Future Copilot implementation work must start from a new public bridge
  admission and implementation handoff issue. Issue #55 is an admission issue
  and must not be reused for implementation.

## Implementation Strategy

1. Merge import/spec/admission artifacts to `develop`.
2. Issue #57 implements
   `IAU-runtime-settings-cli-validation-proof-artifact-v1`.
3. Keep interactive selection, compare execution, LabVIEWCLI, Docker,
   live-session proof, Marketplace publication, packaging, and source copying
   blocked.
