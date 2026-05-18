# Tasks: Runtime Settings CLI Bootstrap

**Input**: Design documents from `.specify/specs/runtime-settings-cli-bootstrap-v1/`

**Prerequisites**: `plan.md`, `spec.md`, imported requirements packet

**Tests**: This feature validates requirements, Spec Kit artifacts, admission
records, and the next admitted runtime-settings CLI implementation unit.

**Organization**: Tasks are grouped into public import/spec/admission closeout,
the admitted prepare-command IAU, and blocked future settings/runtime/release
work.

## Phase 1: Public Import And Spec Lock

**Purpose**: Establish the public MIT requirements and Spec Kit baseline for
the runtime settings CLI bootstrap.

- [x] T001 Create public import manifest for
  `runtime-settings-cli-bootstrap-v1`.
- [x] T002 Import public-safe SyRS, SRS, RTM, and test-plan files for
  `VHS-REQ-537`, `VHS-REQ-544`, and `VHS-REQ-594`.
- [x] T003 Create `spec.md` for prepare-command shell behavior and blocked
  settings/runtime/release scope.
- [x] T004 Create `plan.md` confirming import/spec/admission-only scope and no
  implementation in this PR.
- [x] T005 Create `tasks.md` with future implementation bounded by the named
  IAU.
- [x] T006 Add public admission ledger records for
  `IAU-runtime-settings-cli-prepare-command-shell-v1`.
- [x] T007 Pin the active Spec Kit feature to
  `runtime-settings-cli-bootstrap-v1`.
- [x] T008 Extend repository validation to cover the new import/spec/admission
  artifacts.

---

## Phase 2: Admitted IAU - Runtime Settings CLI Prepare Command Shell

**Purpose**: Implement the smallest runtime settings CLI step: tests and a
minimum prepare-command shell that reports launcher materialization and
recovery facts only.

**Implemented IAU**: `IAU-runtime-settings-cli-prepare-command-shell-v1`

**Public admission issue**: Issue #43

**Implementation handoff issue**: Issue #45

- [x] T009 Add tests proving
  `labviewViHistory.prepareLocalRuntimeSettingsCli` registers as a separate
  handler from `labviewViHistory.open` and
  `labviewViHistory.openDocumentation`.
- [x] T010 Add tests proving the prepare-command shell reports launcher
  materialization and recovery facts without mutating settings.
- [x] T011 Implement the minimum public MIT prepare-command shell.

---

## Phase 3: Blocked Future Settings, Runtime, And Release Work

**Purpose**: Keep settings mutation, execution, and publication behavior
visibly outside this IAU.

- [ ] T012 [BLOCKED] Mutate provider, version, bitness, or JSONC settings.
- [ ] T013 [BLOCKED] Add `vihs --validate` or runtime validation output.
- [ ] T014 [BLOCKED] Add compare execution, LabVIEWCLI execution, Docker
  execution, or Docker orchestration.
- [ ] T015 [BLOCKED] Add packaging or Marketplace publication behavior.

---

## Final Phase: Cross-Cutting Gates

**Purpose**: Validate traceability, clean-room boundaries, and public safety.

- [x] T016 Run `npm test`.
- [x] T017 Run `npm run check`.
- [x] T018 Run `git diff --check`.
- [x] T019 Run public redaction scan over this feature's public artifacts.
- [x] T020 Run bridge artifact validation for
  `runtime-settings-cli-bootstrap-v1`.

## Dependencies & Execution Order

- Phase 1 merged before
  `IAU-runtime-settings-cli-prepare-command-shell-v1` implementation started.
- Phase 2 is implemented and closed for
  `IAU-runtime-settings-cli-prepare-command-shell-v1`.
- Phase 3 remains blocked until separate public requirements and preflight
  records admit settings mutation, validation, runtime execution, or release
  behavior.
- Future Copilot implementation work must start from a new bridge admission and
  implementation handoff issue. Issue #43 and Issue #45 must not be reused.

## Implementation Strategy

1. Merge import/spec/admission artifacts to `develop`.
2. Complete Issue #45 for
   `IAU-runtime-settings-cli-prepare-command-shell-v1`.
3. Keep settings mutation, runtime validation, compare execution, LabVIEWCLI,
   Docker, Marketplace publication, packaging, and source copying blocked.
