# Tasks: Runtime Settings CLI Terminal I/O Adapter

**Input**: Design documents from
`.specify/specs/runtime-settings-cli-terminal-io-adapter-v1/`

**Prerequisites**: `plan.md`, `spec.md`, imported requirements packet

**Tests**: This feature validates requirements, Spec Kit artifacts, admission
records, and the next admitted runtime-settings CLI terminal I/O adapter
implementation unit.

**Organization**: Tasks are grouped into public import/spec/admission closeout,
the admitted terminal I/O adapter IAU, and blocked future runtime/release work.

## Phase 1: Public Import And Spec Lock

**Purpose**: Establish the public MIT requirements and Spec Kit baseline for
the runtime settings CLI terminal I/O adapter contract.

- [x] T001 Create public import manifest for
  `runtime-settings-cli-terminal-io-adapter-v1`.
- [x] T002 Import public-safe SyRS, SRS, RTM, and test-plan files for
  `VHS-REQ-545`, `VHS-REQ-546`, prerequisite references to `VHS-REQ-537` and
  `VHS-REQ-544`, supporting test IDs, and Docker image-family facts.
- [x] T003 Create `spec.md` for no-argument `vihs` terminal session adapter
  behavior and blocked runtime/release scope.
- [x] T004 Create `plan.md` confirming import/spec/admission-only scope and no
  implementation in this PR.
- [x] T005 Create `tasks.md` with future implementation bounded by the named
  IAU.
- [x] T006 Add public admission ledger records for
  `IAU-runtime-settings-cli-terminal-io-adapter-v1`.
- [x] T007 Pin the active Spec Kit feature to
  `runtime-settings-cli-terminal-io-adapter-v1`.
- [x] T008 Extend repository validation to cover the new import/spec/admission
  artifacts.

---

## Phase 2: Admitted IAU - Runtime Settings CLI Terminal I/O Adapter

**Purpose**: Implement the smallest terminal I/O adapter step: tests and a pure
terminal session/input contract that wraps the already implemented
materialized-entrypoint and prompt-loop contracts for no-argument `vihs`
confirmation, guided selection, non-interactive guidance, fail-closed input
handling, and validation handoff without runtime execution.

**Admitted IAU**:
`IAU-runtime-settings-cli-terminal-io-adapter-v1`

**Public admission issue**: Issue #77

**Implementation handoff issue**: not created yet.

- [ ] T009 Add tests proving Enter confirmation adapts terminal input facts
  into the existing prompt-loop validation handoff.
- [ ] T010 Add tests proving guided host terminal selection feeds the already
  admitted supported host selection contract.
- [ ] T011 Add tests proving Docker terminal selection uses the latest
  supported NI LabVIEW Docker image family without exposing a Docker bitness
  prompt.
- [ ] T012 Add tests proving non-TTY sessions return copyable guidance instead
  of prompting.
- [ ] T013 Add tests proving unsupported input, EOF, cancel, and blocked side
  effects fail closed without runtime execution.
- [ ] T014 Implement the minimum public MIT terminal I/O adapter contract as
  pure terminal session/input and output facts.

---

## Phase 3: Blocked Future Runtime And Release Work

**Purpose**: Keep execution, proof expansion, publication, mutation, and source
sharing visibly outside this IAU.

- [ ] T015 [BLOCKED] Add compare execution.
- [ ] T016 [BLOCKED] Add LabVIEWCLI execution.
- [ ] T017 [BLOCKED] Add Docker command execution or Docker orchestration.
- [ ] T018 [BLOCKED] Add proof-out file writing beyond already admitted proof
  artifact contracts.
- [ ] T019 [BLOCKED] Add live already-running VS Code session uptake proof or
  live terminal proof.
- [ ] T020 [BLOCKED] Add package/bin publication, VSIX packaging, Marketplace
  publication, or release automation.
- [ ] T021 [BLOCKED] Add launcher/profile mutation.
- [ ] T022 [BLOCKED] Add source copying from another VI History product line.
- [ ] T023 [BLOCKED] Add implementation beyond pure terminal session/input
  facts without a separate public IAU.

---

## Final Phase: Cross-Cutting Gates

**Purpose**: Validate traceability, clean-room boundaries, and public safety.

- [x] T024 Run `npm test`.
- [x] T025 Run `npm run check`.
- [x] T026 Run `git diff --check`.
- [x] T027 Run public redaction scan over this feature's public artifacts.
- [x] T028 Run bridge artifact validation for
  `runtime-settings-cli-terminal-io-adapter-v1`.
- [x] T029 Run Spec Kit CLI version/features check.

## Dependencies & Execution Order

- `runtime-settings-cli-terminal-entrypoint-v1` and
  `runtime-settings-cli-terminal-prompt-loop-v1` must be implemented and closed
  before `IAU-runtime-settings-cli-terminal-io-adapter-v1` implementation
  starts.
- Phase 1 must merge before
  `IAU-runtime-settings-cli-terminal-io-adapter-v1` implementation starts.
- Phase 2 must use a separate implementation handoff issue after this
  admission PR merges.
- Phase 3 remains blocked until separate public requirements and preflight
  records admit compare execution, LabVIEWCLI execution, Docker execution,
  proof-out expansion, live-session proof, package/bin publication,
  launcher/profile mutation, Marketplace publication, or source copying.
- Future Copilot implementation work must start from a new public bridge
  admission and implementation handoff issue. Issue #77 is an admission issue
  and must not be reused for implementation.

## Implementation Strategy

1. Merge import/spec/admission artifacts to `develop`.
2. Create a separate handoff issue for
   `IAU-runtime-settings-cli-terminal-io-adapter-v1`.
3. Keep compare execution, LabVIEWCLI execution, Docker execution, proof
   expansion, live-session proof, package/bin publication, launcher/profile
   mutation, Marketplace publication, and source copying blocked.
