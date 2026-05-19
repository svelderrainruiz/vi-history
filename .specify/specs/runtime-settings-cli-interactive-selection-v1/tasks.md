# Tasks: Runtime Settings CLI Interactive Selection

**Input**: Design documents from
`.specify/specs/runtime-settings-cli-interactive-selection-v1/`

**Prerequisites**: `plan.md`, `spec.md`, imported requirements packet

**Tests**: This feature validates requirements, Spec Kit artifacts, admission
records, and the next admitted runtime-settings CLI interactive-selection
implementation unit.

**Organization**: Tasks are grouped into public import/spec/admission closeout,
the admitted interactive-selection IAU, and blocked future terminal/runtime/
release work.

## Phase 1: Public Import And Spec Lock

**Purpose**: Establish the public MIT requirements and Spec Kit baseline for
the runtime settings CLI interactive-selection contract.

- [x] T001 Create public import manifest for
  `runtime-settings-cli-interactive-selection-v1`.
- [x] T002 Import public-safe SyRS, SRS, RTM, and test-plan files for
  `VHS-REQ-545`, `VHS-REQ-546`, `TEST-UNIT-353`, and `TEST-UNIT-354`.
- [x] T003 Create `spec.md` for no-argument `vihs` selection behavior and
  blocked terminal/runtime/release scope.
- [x] T004 Create `plan.md` confirming import/spec/admission-only scope and no
  implementation in this PR.
- [x] T005 Create `tasks.md` with future implementation bounded by the named
  IAU.
- [x] T006 Add public admission ledger records for
  `IAU-runtime-settings-cli-interactive-selection-contract-v1`.
- [x] T007 Pin the active Spec Kit feature to
  `runtime-settings-cli-interactive-selection-v1`.
- [x] T008 Extend repository validation to cover the new import/spec/admission
  artifacts.

---

## Phase 2: Admitted IAU - Runtime Settings CLI Interactive Selection Contract

**Purpose**: Implement the smallest no-argument `vihs` step: tests and a pure
selection-state contract that models default seeding, current bundle reporting,
guided selection, Docker constraints, and validation handoff facts without
terminal process loops or runtime execution.

**Admitted IAU**:
`IAU-runtime-settings-cli-interactive-selection-contract-v1`

**Public admission issue**: Issue #60

**Implementation handoff issue**: Issue #62.

- [x] T009 Add tests proving bare `vihs` seeds missing settings to
  `host/windows/2026/x86` and reports the current provider/platform/version/
  bitness bundle.
- [x] T010 Add tests proving Enter-through confirmation preserves the current
  governed selection and requests validation through the existing validation
  readback contract.
- [x] T011 Add tests proving guided host selection accepts supported LabVIEW
  2025, LabVIEW 2026, and newer local host choices while failing closed for
  unsupported years or missing selected bitness.
- [x] T012 Add tests proving Docker selection uses the latest supported NI
  LabVIEW Docker image family, exposes no Docker bitness choice, and fails
  closed for unsupported Docker image-family or bitness-choice requests.
- [x] T013 Implement the minimum public MIT interactive-selection contract as
  pure selection state and output facts.

---

## Phase 3: Blocked Future Terminal, Runtime, And Release Work

**Purpose**: Keep terminal process wiring, execution, and publication behavior
visibly outside this IAU.

- [ ] T014 [BLOCKED] Add terminal process prompt loops, raw stdin handling, or
  terminal UI wiring.
- [ ] T015 [BLOCKED] Add compare execution.
- [ ] T016 [BLOCKED] Add LabVIEWCLI execution, Docker execution, or Docker
  orchestration.
- [ ] T017 [BLOCKED] Add proof-out file writing beyond the existing pure proof
  artifact contract.
- [ ] T018 [BLOCKED] Add live already-running VS Code session uptake proof.
- [ ] T019 [BLOCKED] Add packaging, Marketplace publication, or source copying
  from another VI History product line.

---

## Final Phase: Cross-Cutting Gates

**Purpose**: Validate traceability, clean-room boundaries, and public safety.

- [x] T020 Run `npm test`.
- [x] T021 Run `npm run check`.
- [x] T022 Run `git diff --check`.
- [x] T023 Run public redaction scan over this feature's public artifacts.
- [x] T024 Run bridge artifact validation for
  `runtime-settings-cli-interactive-selection-v1`.

## Dependencies & Execution Order

- Phase 1 must merge before
  `IAU-runtime-settings-cli-interactive-selection-contract-v1` implementation
  starts.
- Phase 2 is complete through Issue #62 for T009-T013 only.
- Phase 3 remains blocked until separate public requirements and preflight
  records admit terminal prompt loops, compare execution, runtime execution,
  proof-out expansion, live-session proof, or release behavior.
- Future Copilot implementation work must start from a new public bridge
  admission and implementation handoff issue. Issue #60 is an admission issue
  and must not be reused for implementation.

## Implementation Strategy

1. Merge import/spec/admission artifacts to `develop`.
2. Issue #62 implements
   `IAU-runtime-settings-cli-interactive-selection-contract-v1`.
3. Keep terminal process prompt loops, compare execution, LabVIEWCLI, Docker,
   proof-out expansion, live-session proof, Marketplace publication,
   packaging, and source copying blocked.
