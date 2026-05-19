# Tasks: Runtime Settings CLI Validation Host Runtime Discovery

**Input**: Design documents from
`.specify/specs/runtime-settings-cli-validation-host-runtime-discovery-v1/`

**Prerequisites**: `plan.md`, `spec.md`, imported requirements packet

**Tests**: This feature validates requirements, Spec Kit artifacts, admission
records, and the next admitted runtime-settings CLI validation host runtime
discovery implementation unit.

**Organization**: Tasks are grouped into public import/spec/admission closeout,
the admitted host runtime discovery IAU, blocked future runtime/release/locator
work, and cross-cutting gates.

## Phase 1: Public Import And Spec Lock

**Purpose**: Establish the public MIT requirements and Spec Kit baseline for
host runtime discovery facts.

- [x] T001 Create public import manifest for
  `runtime-settings-cli-validation-host-runtime-discovery-v1`.
- [x] T002 Import public-safe SyRS, SRS, RTM, and test-plan files for
  `VHS-REQ-095`, `VHS-REQ-096`, `VHS-REQ-532`, `VHS-REQ-546`,
  `VHS-REQ-550`, prerequisite references to `VHS-REQ-537`,
  `VHS-REQ-543`, `VHS-REQ-544`, and `VHS-REQ-545`, and supporting test
  signals `TEST-UNIT-063`, `TEST-UNIT-064`, `TEST-UNIT-342`,
  `TEST-UNIT-354`, `TEST-UNIT-355`, and `TEST-UNIT-392`.
- [x] T003 Create `spec.md` for bounded host runtime discovery facts and
  blocked runtime execution/release scope.
- [x] T004 Create `plan.md` confirming import/spec/admission-only scope and no
  implementation in this PR.
- [x] T005 Create `tasks.md` with future implementation bounded by the named
  IAU.
- [x] T006 Add public admission ledger records for
  `IAU-runtime-settings-cli-validation-host-runtime-discovery-v1`.
- [x] T007 Pin the active Spec Kit feature to
  `runtime-settings-cli-validation-host-runtime-discovery-v1`.
- [x] T008 Extend repository validation to cover the new import/spec/admission
  artifacts.

---

## Phase 2: Admitted IAU - Host Runtime Discovery Facts

**Purpose**: Implement the smallest discovery step after host preflight command
composition: tests and a bounded discovery-facts contract that emits
public-safe host candidate facts without execution.

**Admitted IAU**:
`IAU-runtime-settings-cli-validation-host-runtime-discovery-v1`

**Public admission issue**: Issue #118

**Implementation handoff issue**: Issue #120

**Implementation PR**: PR #121

- [x] T009 Add tests proving selected host facts drive bounded
  documented-root discovery without arbitrary filesystem walking.
- [x] T010 Add tests proving Windows registry-view observations normalize into
  public-safe candidate facts without retaining raw registry output or private
  installed paths.
- [x] T011 Add tests proving Linux documented-root discovery and macOS
  unavailable constraints are deterministic.
- [x] T012 Add tests proving Windows `host` / `2026` / `x64` can discover
  LabVIEW 2026 x64 plus the canonical installed x86 LabVIEWCLI surface as
  candidate facts.
- [x] T013 Add tests proving missing selection, unsupported provider/platform
  or version, missing discovery dependencies, malformed observations, missing
  candidates, ambiguous candidates, incompatible candidates, and contaminated
  host surface fail closed.
- [x] T014 Add tests proving generated host candidate facts compose into
  `createRuntimeSettingsValidationHostRuntimePreflight(input = {})` and the
  existing validation command chain without output-shape redesign.
- [x] T015 Add tests proving deterministic blocked side-effect facts and no
  runtime validation execution, compare, LabVIEWCLI, Docker, terminal process
  wiring, file writes, publication, Marketplace, release automation,
  launcher/profile mutation, or source copying.
- [x] T016 Implement the minimum public MIT host runtime discovery facts
  contract.

---

## Phase 3: Blocked Future Runtime, Locator, Release, And Source Work

**Purpose**: Keep execution, publication, mutation, release, live proof, and
source sharing visibly outside this IAU.

- [ ] T017 [BLOCKED] Retain raw private installed paths or raw registry output
  in public facts.
- [ ] T018 [BLOCKED] Add arbitrary filesystem walking.
- [ ] T019 [BLOCKED] Add PATH probing or environment probing.
- [ ] T020 [BLOCKED] Invoke the existing compare runtime locator as an
  implementation shortcut.
- [ ] T021 [BLOCKED] Add runtime validation execution.
- [ ] T022 [BLOCKED] Add compare execution.
- [ ] T023 [BLOCKED] Add LabVIEWCLI execution.
- [ ] T024 [BLOCKED] Add Docker command execution or Docker orchestration.
- [ ] T025 [BLOCKED] Add raw terminal process wiring or live terminal proof.
- [ ] T026 [BLOCKED] Write files from the discovery adapter.
- [ ] T027 [BLOCKED] Add package/bin publication, VSIX packaging, Marketplace
  publication, release automation, or launcher/profile mutation.
- [ ] T028 [BLOCKED] Add source copying from another VI History product line
  or implementation beyond host runtime discovery without a separate public
  IAU.

---

## Final Phase: Cross-Cutting Gates

**Purpose**: Validate traceability, clean-room boundaries, and public safety.

- [x] T029 Run `npm test`.
- [x] T030 Run `npm run check`.
- [x] T031 Run `git diff --check`.
- [x] T032 Run public redaction scan over this feature's public artifacts.
- [x] T033 Run bridge artifact validation for
  `runtime-settings-cli-validation-host-runtime-discovery-v1`.
- [x] T034 Run Spec Kit CLI version/features check.

## Dependencies & Execution Order

- `runtime-settings-cli-validation-host-preflight-command-composition-v1` was
  implemented and closed before
  `IAU-runtime-settings-cli-validation-host-runtime-discovery-v1` admission
  started.
- Phase 1 must merge before
  `IAU-runtime-settings-cli-validation-host-runtime-discovery-v1`
  implementation starts.
- Phase 2 used separate implementation handoff Issue #120 after the admission
  PR merged.
- Phase 3 remains blocked until separate public requirements and preflight
  records admit raw private path disclosure, arbitrary filesystem walking,
  PATH or environment probing, existing compare runtime locator reuse, runtime
  validation execution, compare execution, LabVIEWCLI execution, Docker
  execution, terminal process wiring, live proof, file writes, package/bin
  publication, launcher/profile mutation, release automation, Marketplace
  publication, or source copying.
- Issue #120 is the implementation handoff issue. PR #121 implements and
  closes T009-T016. Issue #118 is an admission issue and must not be reused
  for implementation.

## Implementation Strategy

1. Merge import/spec/admission artifacts to `develop`.
2. Create separate implementation handoff Issue #120 for
   `IAU-runtime-settings-cli-validation-host-runtime-discovery-v1`.
3. Implement only T009-T016 through that handoff issue and close through PR
   #121.
4. Keep runtime validation execution, compare execution, LabVIEWCLI execution,
   Docker execution, terminal process wiring, live proof, file writes,
   package/bin publication, launcher/profile mutation, release automation,
   Marketplace publication, and source copying blocked.
