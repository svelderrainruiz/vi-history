# Tasks: Runtime Settings CLI Validation Host Runtime Observation Native Source Acquisition

**Input**: Design documents from
`.specify/specs/runtime-settings-cli-validation-host-runtime-observation-native-source-acquisition-v1/`

**Prerequisites**: `plan.md`, `spec.md`, imported requirements packet

**Tests**: This feature validates requirements, Spec Kit artifacts, admission
records, and the next admitted runtime-settings CLI validation host runtime
observation native source acquisition implementation unit.

**Organization**: Tasks are grouped into public import/spec/admission closeout,
the admitted native source acquisition IAU, blocked future runtime/release/
locator work, and cross-cutting gates.

## Phase 1: Public Import And Spec Lock

**Purpose**: Establish the public MIT requirements and Spec Kit baseline for
bounded native host source-acquisition dependency adaptation.

- [x] T001 Create public import manifest for
  `runtime-settings-cli-validation-host-runtime-observation-native-source-acquisition-v1`.
- [x] T002 Import public-safe SyRS, SRS, RTM, and test-plan files for
  `VHS-REQ-095`, `VHS-REQ-096`, `VHS-REQ-532`, `VHS-REQ-546`, and
  `VHS-REQ-550`.
- [x] T003 Create `spec.md` for bounded native host source-acquisition
  dependency adaptation and blocked runtime execution/release scope.
- [x] T004 Create `plan.md` confirming import/spec/admission-only scope and no
  implementation in the admission PR.
- [x] T005 Create `tasks.md` with future implementation bounded by the named
  IAU.
- [x] T006 Add public admission ledger records for
  `IAU-runtime-settings-cli-validation-host-runtime-observation-native-source-acquisition-v1`.
- [x] T007 Pin the active Spec Kit feature to
  `runtime-settings-cli-validation-host-runtime-observation-native-source-acquisition-v1`.
- [x] T008 Extend repository validation to cover the new import/spec/admission
  artifacts.

---

## Phase 2: Admitted IAU - Native Source Acquisition Dependency Adapter

**Purpose**: Implement the smallest native host dependency adapter before host
runtime observation source acquisition: tests and a bounded native acquisition
contract that emits public-safe acquisition dependency facts without execution.

**Admitted IAU**:
`IAU-runtime-settings-cli-validation-host-runtime-observation-native-source-acquisition-v1`

**Public admission issue**: Issue #154

**Implementation handoff issue**: Issue #156.

- [x] T009 Add tests proving selected host facts drive bounded native
  source-acquisition dependency adaptation without arbitrary filesystem walking.
- [x] T010 Add tests proving Windows registry-view acquisition observations
  reduce to acquisition dependency facts without retaining raw registry output
  or private paths.
- [x] T011 Add tests proving documented-root acquisition observations reduce to
  public-safe availability, executable-role, version, and bitness facts.
- [x] T012 Add tests proving Windows `host` / `2026` / `x64` native acquisition
  facts can produce LabVIEW 2026 x64 plus canonical installed x86 LabVIEWCLI
  acquisition dependency facts.
- [x] T013 Add tests proving missing selection, unsupported provider/platform
  or version, missing dependency surface, malformed dependency surface,
  unavailable dependency, ambiguous dependency facts, incompatible dependency
  facts, contaminated source surface, dependency errors, raw registry output,
  and private-path disclosure attempts fail closed.
- [x] T014 Add tests proving native source acquisition output composes into
  `createRuntimeSettingsValidationHostRuntimeObservationSourceAcquisition(input =
  {})` and the existing validation command chain without output-shape redesign.
- [x] T015 Add tests proving deterministic blocked side-effect facts and no
  runtime validation execution, compare, LabVIEWCLI, Docker, terminal process
  wiring, proof-out expansion, file writes, VSIX packaging changes,
  publication, Marketplace, release automation, launcher/profile mutation,
  Docker source discovery, or source copying.
- [x] T016 Implement the minimum public MIT native source acquisition
  dependency adapter contract.

---

## Phase 3: Blocked Future Runtime, Locator, Release, And Source Work

**Purpose**: Keep execution, publication, mutation, release, live proof, file
writes, and source sharing visibly outside this IAU.

- [ ] T017 [BLOCKED] Retain raw private installed paths or raw registry output
  in public facts.
- [ ] T018 [BLOCKED] Add arbitrary filesystem walking.
- [ ] T019 [BLOCKED] Add broad PATH probing or environment probing.
- [ ] T020 [BLOCKED] Invoke the existing compare runtime locator as an
  implementation shortcut.
- [ ] T021 [BLOCKED] Add runtime validation execution.
- [ ] T022 [BLOCKED] Add compare execution.
- [ ] T023 [BLOCKED] Add LabVIEWCLI execution.
- [ ] T024 [BLOCKED] Add Docker command execution or Docker orchestration.
- [ ] T025 [BLOCKED] Add Docker image inspection or container source discovery.
- [ ] T026 [BLOCKED] Add raw terminal process wiring or live terminal proof.
- [ ] T027 [BLOCKED] Expand proof-out behavior beyond existing contracts or
  write files from source, observation, discovery, preflight, source-acquisition,
  or native source adapters.
- [ ] T028 [BLOCKED] Add package/bin publication, VSIX packaging changes,
  Marketplace publication, release automation, or launcher/profile mutation.
- [ ] T029 [BLOCKED] Add source copying from another VI History product line
  or implementation beyond native source acquisition without a separate public
  IAU.
- [ ] T030 [BLOCKED] Add direct native registry, filesystem, PATH, environment,
  or runtime locator probes outside an admitted bounded dependency surface.

---

## Final Phase: Cross-Cutting Gates

**Purpose**: Validate traceability, clean-room boundaries, and public safety.

- [x] T031 Run `npm test`.
- [x] T032 Run `npm run check`.
- [x] T033 Run `git diff --check`.
- [x] T034 Run public redaction scan over this feature's public artifacts.
- [x] T035 Run bridge artifact validation for
  `runtime-settings-cli-validation-host-runtime-observation-native-source-acquisition-v1`.
- [x] T036 Run Spec Kit CLI version/features check.

## Dependencies & Execution Order

- `runtime-settings-cli-validation-host-runtime-observation-source-acquisition-v1`
  was implemented and promoted before native source-acquisition admission
  started.
- Phase 1 must merge before
  `IAU-runtime-settings-cli-validation-host-runtime-observation-native-source-acquisition-v1`
  implementation starts.
- Phase 2 requires a separate implementation handoff issue after the admission
  PR merges.
- Phase 3 remains blocked until separate public requirements and preflight
  records admit raw private path disclosure, raw registry output retention,
  arbitrary filesystem walking, broad PATH or environment probing, existing
  compare runtime locator reuse, runtime validation execution, compare
  execution, LabVIEWCLI execution, Docker execution, terminal process wiring,
  live proof, proof-out expansion, file writes, package/bin publication,
  launcher/profile mutation, release automation, Marketplace publication, VSIX
  packaging changes, Docker image inspection, container source discovery, or
  source copying.
- Issue #154 is the admission issue and must not be reused for implementation.

## Implementation Strategy

1. Merge import/spec/admission artifacts to `develop`.
2. Create a separate implementation handoff issue for
   `IAU-runtime-settings-cli-validation-host-runtime-observation-native-source-acquisition-v1`.
3. Implement only T009-T016 through Issue #156.
4. Keep runtime validation execution, compare execution, LabVIEWCLI execution,
   Docker execution, terminal process wiring, live proof, proof-out expansion,
   file writes, package/bin publication, launcher/profile mutation, release
   automation, Marketplace publication, VSIX packaging changes, Docker source
   discovery, and source copying blocked.
