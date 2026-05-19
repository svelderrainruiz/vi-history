# Tasks: Runtime Settings CLI Validation Host Preflight Command Composition

**Input**: Design documents from
`.specify/specs/runtime-settings-cli-validation-host-preflight-command-composition-v1/`

**Prerequisites**: `plan.md`, `spec.md`, imported requirements packet

**Tests**: This feature validates requirements, Spec Kit artifacts, admission
records, and the next admitted runtime-settings CLI validation host preflight
command-composition implementation unit.

**Organization**: Tasks are grouped into public import/spec/admission closeout,
the admitted command-composition IAU, blocked future runtime/release/locator
work, and cross-cutting gates.

## Phase 1: Public Import And Spec Lock

**Purpose**: Establish the public MIT requirements and Spec Kit baseline for
host preflight command composition.

- [x] T001 Create public import manifest for
  `runtime-settings-cli-validation-host-preflight-command-composition-v1`.
- [x] T002 Import public-safe SyRS, SRS, RTM, and test-plan files for
  `VHS-REQ-546`, prerequisite references to `VHS-REQ-532`, `VHS-REQ-537`,
  `VHS-REQ-543`, `VHS-REQ-544`, `VHS-REQ-545`, and `VHS-REQ-550`, and
  supporting test signals `TEST-UNIT-342`, `TEST-UNIT-354`, `TEST-UNIT-355`,
  and `TEST-UNIT-392`.
- [x] T003 Create `spec.md` for command-level host preflight composition and
  blocked runtime locator/execution/release scope.
- [x] T004 Create `plan.md` confirming import/spec/admission-only scope and no
  implementation in this PR.
- [x] T005 Create `tasks.md` with future implementation bounded by the named
  IAU.
- [x] T006 Add public admission ledger records for
  `IAU-runtime-settings-cli-validation-host-preflight-command-composition-v1`.
- [x] T007 Pin the active Spec Kit feature to
  `runtime-settings-cli-validation-host-preflight-command-composition-v1`.
- [x] T008 Extend repository validation to cover the new import/spec/admission
  artifacts.

---

## Phase 2: Admitted IAU - Host Preflight Command Composition

**Purpose**: Implement the smallest command-chain step after host preflight:
tests and a pure composition branch that lets the validation command consume
ready host preflight facts or supplied public-safe host selection/candidate
facts without runtime discovery or execution.

**Admitted IAU**:
`IAU-runtime-settings-cli-validation-host-preflight-command-composition-v1`

**Public admission issue**: Issue #112

**Implementation handoff issue**: To be created after this admission PR merges.

- [ ] T009 Add tests proving accepted ready host preflight facts are consumed
  by `createRuntimeSettingsValidationCommandResult(input = {})` when
  `runtimeSelection` is not supplied separately.
- [ ] T010 Add tests proving supplied public-safe host selection and candidate
  facts compose through
  `createRuntimeSettingsValidationHostRuntimePreflight(input = {})`.
- [ ] T011 Add tests proving blocked host preflight facts fail closed through
  command validation with stable runtime outcome and validation facts.
- [ ] T012 Add tests proving validate-only, validate-with-proof-out-ready, and
  validate-plan-only preserve existing output shapes.
- [ ] T013 Add tests proving proof-out file writes occur only through the
  already admitted command/file-emission path and never from host preflight.
- [ ] T014 Add tests proving missing, unsupported, ambiguous, incompatible,
  contaminated, and malformed host preflight inputs fail closed without hidden
  partial success.
- [ ] T015 Add tests proving deterministic blocked side-effect facts and no OS
  scanning, locators, private path discovery, runtime execution, compare,
  LabVIEWCLI, Docker, terminal process wiring, publication, Marketplace,
  release automation, launcher/profile mutation, or source copying.
- [ ] T016 Implement the minimum public MIT command-composition branch.

---

## Phase 3: Blocked Future Runtime, Locator, Release, And Source Work

**Purpose**: Keep discovery, execution, publication, mutation, release, and
source sharing visibly outside this IAU.

- [ ] T017 [BLOCKED] Add OS scanning, filesystem walking, registry probing,
  PATH probing, environment probing, or private path discovery.
- [ ] T018 [BLOCKED] Add runtime locator invocation.
- [ ] T019 [BLOCKED] Add runtime validation execution.
- [ ] T020 [BLOCKED] Add compare execution.
- [ ] T021 [BLOCKED] Add LabVIEWCLI execution.
- [ ] T022 [BLOCKED] Add Docker command execution or Docker orchestration.
- [ ] T023 [BLOCKED] Add raw terminal process wiring or live terminal proof.
- [ ] T024 [BLOCKED] Write files from the host preflight adapter.
- [ ] T025 [BLOCKED] Add package/bin publication, VSIX packaging, Marketplace
  publication, release automation, or launcher/profile mutation.
- [ ] T026 [BLOCKED] Add source copying from another VI History product line
  or implementation beyond host preflight command composition without a
  separate public IAU.

---

## Final Phase: Cross-Cutting Gates

**Purpose**: Validate traceability, clean-room boundaries, and public safety.

- [ ] T027 Run `npm test`.
- [ ] T028 Run `npm run check`.
- [ ] T029 Run `git diff --check`.
- [ ] T030 Run public redaction scan over this feature's public artifacts.
- [ ] T031 Run bridge artifact validation for
  `runtime-settings-cli-validation-host-preflight-command-composition-v1`.
- [ ] T032 Run Spec Kit CLI version/features check.

## Dependencies & Execution Order

- `runtime-settings-cli-validation-host-runtime-preflight-v1` was implemented
  and closed before
  `IAU-runtime-settings-cli-validation-host-preflight-command-composition-v1`
  admission started.
- Phase 1 must merge before
  `IAU-runtime-settings-cli-validation-host-preflight-command-composition-v1`
  implementation starts.
- Phase 2 must use a separate implementation handoff issue after the admission
  PR merges.
- Phase 3 remains blocked until separate public requirements and preflight
  records admit OS scanning, runtime locator invocation, private path
  discovery, runtime validation execution, compare execution, LabVIEWCLI
  execution, Docker execution, terminal process wiring, live proof, file writes
  from the host preflight adapter, package/bin publication, launcher/profile
  mutation, release automation, Marketplace publication, or source copying.
- Issue #112 is an admission issue and must not be reused for implementation.

## Implementation Strategy

1. Merge import/spec/admission artifacts to `develop`.
2. Create a separate implementation handoff issue for
   `IAU-runtime-settings-cli-validation-host-preflight-command-composition-v1`.
3. Implement only T009-T016 through that handoff issue.
4. Keep OS scanning, runtime locator invocation, private path discovery,
   runtime validation execution, compare execution, LabVIEWCLI execution,
   Docker execution, terminal process wiring, live proof, file writes from the
   host preflight adapter, package/bin publication, launcher/profile mutation,
   release automation, Marketplace publication, and source copying blocked.
