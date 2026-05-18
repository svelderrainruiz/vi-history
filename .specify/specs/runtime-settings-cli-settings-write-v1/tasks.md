# Tasks: Runtime Settings CLI Settings Write

**Input**: Design documents from `.specify/specs/runtime-settings-cli-settings-write-v1/`

**Prerequisites**: `plan.md`, `spec.md`, imported requirements packet

**Tests**: This feature validates requirements, Spec Kit artifacts, admission
records, and the next admitted runtime-settings CLI implementation unit.

**Organization**: Tasks are grouped into public import/spec/admission closeout,
the admitted settings-write IAU, and blocked future validation/runtime/release
work.

## Phase 1: Public Import And Spec Lock

**Purpose**: Establish the public MIT requirements and Spec Kit baseline for
the runtime settings CLI settings-write contract.

- [x] T001 Create public import manifest for
  `runtime-settings-cli-settings-write-v1`.
- [x] T002 Import public-safe SyRS, SRS, RTM, and test-plan files for
  `VHS-REQ-537` and `VHS-REQ-543`.
- [x] T003 Create `spec.md` for settings-write behavior and blocked
  validation/runtime/release scope.
- [x] T004 Create `plan.md` confirming import/spec/admission-only scope and no
  implementation in this PR.
- [x] T005 Create `tasks.md` with future implementation bounded by the named
  IAU.
- [x] T006 Add public admission ledger records for
  `IAU-runtime-settings-cli-settings-write-contract-v1`.
- [x] T007 Pin the active Spec Kit feature to
  `runtime-settings-cli-settings-write-v1`.
- [x] T008 Extend repository validation to cover the new import/spec/admission
  artifacts.

---

## Phase 2: Admitted IAU - Runtime Settings CLI Settings-Write Contract

**Purpose**: Implement the smallest settings-write step: tests and a pure
settings-write contract that updates only provider, LabVIEW version, and
LabVIEW bitness facts.

**Admitted IAU**: `IAU-runtime-settings-cli-settings-write-contract-v1`

**Public admission issue**: Issue #47

**Implementation handoff issue**: to be created after this admission PR merges.

- [ ] T009 Add tests proving only `viHistorySuite.runtimeProvider`,
  `viHistorySuite.labviewVersion`, and `viHistorySuite.labviewBitness` are
  updated.
- [ ] T010 Add tests proving unrelated settings content is preserved and the
  effective settings target is explicit.
- [ ] T011 Add tests proving comments/trailing commas are handled when admitted
  by the public spec and unsupported target shapes fail closed.
- [ ] T012 Implement the minimum public MIT settings-write contract.

---

## Phase 3: Blocked Future Validation, Runtime, And Release Work

**Purpose**: Keep validation, execution, and publication behavior visibly
outside this IAU.

- [ ] T013 [BLOCKED] Add `vihs --validate` or runtime validation output.
- [ ] T014 [BLOCKED] Add no-argument interactive selection or auto-validation.
- [ ] T015 [BLOCKED] Add compare execution, LabVIEWCLI execution, Docker
  execution, or Docker orchestration.
- [ ] T016 [BLOCKED] Add live already-running VS Code session uptake proof.
- [ ] T017 [BLOCKED] Add packaging or Marketplace publication behavior.

---

## Final Phase: Cross-Cutting Gates

**Purpose**: Validate traceability, clean-room boundaries, and public safety.

- [x] T018 Run `npm test`.
- [x] T019 Run `npm run check`.
- [x] T020 Run `git diff --check`.
- [x] T021 Run public redaction scan over this feature's public artifacts.
- [x] T022 Run bridge artifact validation for
  `runtime-settings-cli-settings-write-v1`.

## Dependencies & Execution Order

- Phase 1 must merge before
  `IAU-runtime-settings-cli-settings-write-contract-v1` implementation starts.
- Phase 2 may start only from the implementation handoff issue created after
  this admission PR merges.
- Phase 3 remains blocked until separate public requirements and preflight
  records admit validation, interactive selection, runtime execution,
  live-session proof, or release behavior.
- Future Copilot implementation work must start from a new bridge admission and
  implementation handoff issue. Issue #47 is an admission issue and must not be
  reused for implementation.

## Implementation Strategy

1. Merge import/spec/admission artifacts to `develop`.
2. Create a separate implementation handoff issue for
   `IAU-runtime-settings-cli-settings-write-contract-v1`.
3. Keep validation, interactive selection, compare execution, LabVIEWCLI,
   Docker, live-session proof, Marketplace publication, packaging, and source
   copying blocked.
