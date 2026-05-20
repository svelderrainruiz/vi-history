# Tasks: Runtime Settings CLI Validation Host Runtime Observation Source Adapter

**Input**: Design documents from
`.specify/specs/runtime-settings-cli-validation-host-runtime-observation-source-adapter-v1/`

**Prerequisites**: `plan.md`, `spec.md`, imported requirements packet

**Tests**: This feature validates requirements, Spec Kit artifacts, admission
records, and the next admitted runtime-settings CLI validation host runtime
observation source adapter implementation unit.

**Organization**: Tasks are grouped into public import/spec/admission closeout,
the admitted host runtime observation source adapter IAU, blocked future
runtime/release/locator work, and cross-cutting gates.

## Phase 1: Public Import And Spec Lock

**Purpose**: Establish the public MIT requirements and Spec Kit baseline for
host runtime observation source adapter facts.

- [x] T001 Create public import manifest for
  `runtime-settings-cli-validation-host-runtime-observation-source-adapter-v1`.
- [x] T002 Import public-safe SyRS, SRS, RTM, and test-plan files for
  `VHS-REQ-095`, `VHS-REQ-096`, `VHS-REQ-532`, `VHS-REQ-546`,
  `VHS-REQ-550`, prerequisite references to `VHS-REQ-537`,
  `VHS-REQ-543`, `VHS-REQ-544`, and `VHS-REQ-545`, and supporting test
  signals `TEST-UNIT-063`, `TEST-UNIT-064`, `TEST-UNIT-342`,
  `TEST-UNIT-354`, `TEST-UNIT-355`, `TEST-UNIT-392`, and
  `TEST-UNIT-RSHOSTSOURCE-001` through `TEST-UNIT-RSHOSTSOURCE-005`.
- [x] T003 Create `spec.md` for bounded host runtime observation source facts
  and blocked runtime execution/release scope.
- [x] T004 Create `plan.md` confirming import/spec/admission-only scope and no
  implementation in the admission PR.
- [x] T005 Create `tasks.md` with future implementation bounded by the named
  IAU.
- [x] T006 Add public admission ledger records for
  `IAU-runtime-settings-cli-validation-host-runtime-observation-source-adapter-v1`.
- [x] T007 Pin the active Spec Kit feature to
  `runtime-settings-cli-validation-host-runtime-observation-source-adapter-v1`.
- [x] T008 Extend repository validation to cover the new import/spec/admission
  artifacts.

---

## Phase 2: Admitted IAU - Host Runtime Observation Source Adapter

**Purpose**: Implement the smallest source-adapter step before host runtime
observation: tests and a bounded source-adapter contract that emits public-safe
observation dependency facts without execution.

**Admitted IAU**:
`IAU-runtime-settings-cli-validation-host-runtime-observation-source-adapter-v1`

**Public admission issue**: Issue #142

**Implementation handoff issue**: created after the admission PR merges.

- [ ] T009 Add tests proving selected host facts drive public-safe source
  adaptation without arbitrary filesystem walking.
- [ ] T010 Add tests proving registry-view source facts reduce to source-class
  and candidate facts without retaining raw registry output or private paths.
- [ ] T011 Add tests proving documented-root source facts reduce to public-safe
  availability, executable-role, version, and bitness facts.
- [ ] T012 Add tests proving Windows `host` / `2026` / `x64` source facts can
  produce LabVIEW 2026 x64 plus canonical installed x86 LabVIEWCLI observation
  dependencies.
- [ ] T013 Add tests proving missing selection, unsupported provider/platform
  or version, missing source facts, malformed source facts, unsupported source
  class, unavailable source, ambiguous source facts, incompatible source facts,
  contaminated host surface, raw registry output, and private-path disclosure
  attempts fail closed.
- [ ] T014 Add tests proving source adapter output composes into
  `createRuntimeSettingsValidationHostRuntimeObservation(input = {})`,
  `createRuntimeSettingsValidationHostRuntimeDiscovery(input = {})`, and the
  existing validation command chain without output-shape redesign.
- [ ] T015 Add tests proving deterministic blocked side-effect facts and no
  runtime validation execution, compare, LabVIEWCLI, Docker, terminal process
  wiring, proof-out expansion, file writes, VSIX packaging changes,
  publication, Marketplace, release automation, launcher/profile mutation, or
  source copying.
- [ ] T016 Implement the minimum public MIT host runtime observation source
  adapter contract.

---

## Phase 3: Blocked Future Runtime, Locator, Release, And Source Work

**Purpose**: Keep execution, publication, mutation, release, live proof, file
writes, and source sharing visibly outside this IAU.

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
- [ ] T026 [BLOCKED] Expand proof-out behavior beyond existing contracts or
  write files from the source or observation adapter.
- [ ] T027 [BLOCKED] Add package/bin publication, VSIX packaging changes,
  Marketplace publication, release automation, or launcher/profile mutation.
- [ ] T028 [BLOCKED] Add source copying from another VI History product line
  or implementation beyond host runtime observation source adaptation without a
  separate public IAU.

---

## Final Phase: Cross-Cutting Gates

**Purpose**: Validate traceability, clean-room boundaries, and public safety.

- [ ] T029 Run `npm test`.
- [ ] T030 Run `npm run check`.
- [ ] T031 Run `git diff --check`.
- [ ] T032 Run public redaction scan over this feature's public artifacts.
- [ ] T033 Run bridge artifact validation for
  `runtime-settings-cli-validation-host-runtime-observation-source-adapter-v1`.
- [ ] T034 Run Spec Kit CLI version/features check.

## Dependencies & Execution Order

- `runtime-settings-cli-validation-host-runtime-observation-adapter-v1` was
  implemented and closed before source-adapter admission started.
- `extension-vsix-packaging-artifact-v1` was implemented and promoted before
  source-adapter admission started.
- Phase 1 must merge before
  `IAU-runtime-settings-cli-validation-host-runtime-observation-source-adapter-v1`
  implementation starts.
- Phase 2 requires a separate implementation handoff issue after the admission
  PR merges.
- Phase 3 remains blocked until separate public requirements and preflight
  records admit raw private path disclosure, raw registry output retention,
  arbitrary filesystem walking, PATH or environment probing, existing compare
  runtime locator reuse, runtime validation execution, compare execution,
  LabVIEWCLI execution, Docker execution, terminal process wiring, live proof,
  proof-out expansion, file writes, package/bin publication, launcher/profile
  mutation, release automation, Marketplace publication, VSIX packaging
  changes, or source copying.
- Issue #142 is the admission issue and must not be reused for implementation.

## Implementation Strategy

1. Merge import/spec/admission artifacts to `develop`.
2. Create a separate implementation handoff issue for
   `IAU-runtime-settings-cli-validation-host-runtime-observation-source-adapter-v1`.
3. Implement only T009-T016 through that handoff issue.
4. Keep runtime validation execution, compare execution, LabVIEWCLI execution,
   Docker execution, terminal process wiring, live proof, proof-out expansion,
   file writes, package/bin publication, launcher/profile mutation, release
   automation, Marketplace publication, VSIX packaging changes, and source
   copying blocked.
