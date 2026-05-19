# Tasks: Runtime Settings CLI Validation Host Runtime Preflight

**Input**: Design documents from
`.specify/specs/runtime-settings-cli-validation-host-runtime-preflight-v1/`

**Prerequisites**: `plan.md`, `spec.md`, imported requirements packet

**Tests**: This feature validates requirements, Spec Kit artifacts, admission
records, and the next admitted runtime-settings CLI validation host runtime
preflight implementation unit.

**Organization**: Tasks are grouped into public import/spec/admission closeout,
the admitted host runtime preflight IAU, blocked future runtime/release/locator
work, and cross-cutting gates.

## Phase 1: Public Import And Spec Lock

**Purpose**: Establish the public MIT requirements and Spec Kit baseline for
host runtime preflight facts.

- [x] T001 Create public import manifest for
  `runtime-settings-cli-validation-host-runtime-preflight-v1`.
- [x] T002 Import public-safe SyRS, SRS, RTM, and test-plan files for
  `VHS-REQ-532`, `VHS-REQ-546`, `VHS-REQ-550`, prerequisite references to
  `VHS-REQ-537`, `VHS-REQ-543`, `VHS-REQ-544`, and `VHS-REQ-545`, and
  supporting test signals `TEST-UNIT-342`, `TEST-UNIT-354`, `TEST-UNIT-355`,
  and `TEST-UNIT-392`.
- [x] T003 Create `spec.md` for supplied-facts-only host runtime preflight and
  blocked runtime locator/execution/release scope.
- [x] T004 Create `plan.md` confirming import/spec/admission-only scope and no
  implementation in this PR.
- [x] T005 Create `tasks.md` with future implementation bounded by the named
  IAU.
- [x] T006 Add public admission ledger records for
  `IAU-runtime-settings-cli-validation-host-runtime-preflight-v1`.
- [x] T007 Pin the active Spec Kit feature to
  `runtime-settings-cli-validation-host-runtime-preflight-v1`.
- [x] T008 Extend repository validation to cover the new import/spec/admission
  artifacts.

---

## Phase 2: Admitted IAU - Host Runtime Preflight Facts

**Purpose**: Implement the smallest host validation fact step: tests and a pure
adapter that transforms supplied public-safe host candidate facts into
deterministic runtime selection facts for the existing validation chain.

**Admitted IAU**:
`IAU-runtime-settings-cli-validation-host-runtime-preflight-v1`

**Public admission issue**: Issue #106

**Implementation handoff issue**: Issue #108

**Implementation PR**: PR #109

- [x] T009 Add tests proving accepted host persisted selection facts and one
  compatible supplied host candidate return ready runtime selection facts.
- [x] T010 Add tests proving Windows `host` / `2026` / `x64` accepts LabVIEW
  2026 x64 plus the canonical installed x86 LabVIEWCLI surface.
- [x] T011 Add tests proving missing selection, non-host provider, missing
  host candidate, and malformed inputs fail closed.
- [x] T012 Add tests proving ambiguous candidates, version mismatch, bitness
  mismatch, missing LabVIEW executable, missing canonical LabVIEWCLI, and
  contaminated host surface fail closed.
- [x] T013 Add tests proving ready and blocked results are consumable by
  `createRuntimeSettingsValidationRuntimeOutcome(input = {})`.
- [x] T014 Add tests proving composition into validation readback, proof
  artifact, proof-out adapter, file-emission, validation command, and
  validate-plan-only results without redesigning those output shapes.
- [x] T015 Add tests proving deterministic blocked side-effect facts and no OS
  scanning, locators, private path discovery, runtime execution, compare,
  LabVIEWCLI, Docker, terminal process wiring, file writes, publication,
  Marketplace, release automation, launcher/profile mutation, or source
  copying.
- [x] T016 Implement the minimum public MIT host runtime preflight facts
  adapter.

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
  or implementation beyond host runtime preflight without a separate public
  IAU.

---

## Final Phase: Cross-Cutting Gates

**Purpose**: Validate traceability, clean-room boundaries, and public safety.

- [x] T027 Run `npm test`.
- [x] T028 Run `npm run check`.
- [x] T029 Run `git diff --check`.
- [x] T030 Run public redaction scan over this feature's public artifacts.
- [x] T031 Run bridge artifact validation for
  `runtime-settings-cli-validation-host-runtime-preflight-v1`.
- [x] T032 Run Spec Kit CLI version/features check.

## Dependencies & Execution Order

- `runtime-settings-cli-validation-plan-only-v1` was implemented and closed
  before
  `IAU-runtime-settings-cli-validation-host-runtime-preflight-v1` admission
  started.
- Phase 1 must merge before
  `IAU-runtime-settings-cli-validation-host-runtime-preflight-v1`
  implementation starts.
- Phase 2 used separate implementation handoff Issue #108 after the admission
  PR merged.
- Phase 3 remains blocked until separate public requirements and preflight
  records admit OS scanning, runtime locator invocation, runtime validation
  execution, compare execution, LabVIEWCLI execution, Docker execution,
  terminal process wiring, live proof, file writes from the host preflight
  adapter, package/bin publication, launcher/profile mutation, release
  automation, Marketplace publication, or source copying.
- Issue #108 is the implementation handoff issue. PR #109 implements and
  closes T009-T016. Issue #106 is an admission issue and must not be reused
  for implementation.

## Implementation Strategy

1. Merge import/spec/admission artifacts to `develop`.
2. Create separate implementation handoff Issue #108 for
   `IAU-runtime-settings-cli-validation-host-runtime-preflight-v1`.
3. Implement only T009-T016 through that handoff issue and close through PR
   #109.
4. Keep OS scanning, runtime locator invocation, private path discovery,
   runtime validation execution, compare execution, LabVIEWCLI execution,
   Docker execution, terminal process wiring, live proof, file writes from the
   host preflight adapter, package/bin publication, launcher/profile mutation,
   release automation, Marketplace publication, and source copying blocked.
