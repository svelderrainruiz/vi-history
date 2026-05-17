# Feature Specification: Runtime Contract Host Provider

**Feature Branch**: `codex/bootstrap-mit-spec-kit-authority`

**Created**: 2026-05-17

**Status**: Locked for bootstrap import

**Input**: Imported requirements slice `runtime-contract-host-provider-v1`

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Installed User Chooses Compare Explicitly (Priority: P1)

An installed Windows user selects a base commit and selected commit, reviews the
runtime facts, and starts comparison through an explicit compare action.

**Why this priority**: This is the primary product workflow and protects users
from hidden runtime preflight behavior.

**Independent Test**: A clean-room implementation can be tested by selecting a
commit pair and confirming that compare execution does not start until the user
chooses the explicit compare action.

**Acceptance Scenarios**:

1. **Given** a selected commit pair, **When** the comparison view is shown,
   **Then** it displays selected commit, base commit, provider, LabVIEW version,
   and bitness facts before execution.
2. **Given** the comparison view is shown, **When** the user has not chosen the
   compare action, **Then** no report generation is attempted.

---

### User Story 2 - Runtime Provider Facts Are Retained (Priority: P1)

A user or maintainer can see which runtime provider, LabVIEW version, and
bitness were selected before and after an attempted comparison.

**Why this priority**: Runtime attribution is the core safety boundary across
host-native and bounded expert-provider paths.

**Independent Test**: A test harness can request a runtime selection and verify
that provider, version, bitness, selected tool paths, blocked reason, and
retained notes are visible in the generated proof or report surface.

**Acceptance Scenarios**:

1. **Given** a ready host-native LabVIEWCLI runtime, **When** command planning
   runs, **Then** the command plan retains provider, version, bitness, staged VI
   paths, output path, and selected LabVIEW fields.
2. **Given** a runtime bundle is unavailable or unsupported, **When** compare is
   attempted, **Then** the result fails closed with corrective guidance and
   retained runtime facts.

---

### User Story 3 - Expert Docker Provider Is Bounded (Priority: P2)

An expert user can select the Docker provider explicitly while installed users
remain on the host-native default path.

**Why this priority**: Docker proof remains valuable, but it must not become an
implicit installed-user default.

**Independent Test**: A settings or validation flow can verify that Docker is
available only through explicit expert selection and that unsupported Docker
states fail closed.

**Acceptance Scenarios**:

1. **Given** default installed-user settings, **When** runtime selection occurs,
   **Then** host-native LabVIEWCLI is the default provider on Windows.
2. **Given** an expert selects Docker explicitly, **When** runtime selection
   occurs, **Then** Docker facts are retained and no silent fallback is allowed.

---

### User Story 4 - Proof Intake Preserves Evidence Class (Priority: P3)

A maintainer can distinguish Linux host LabVIEW proof, Windows installed-user
proof, and Windows Docker Desktop Windows-container proof.

**Why this priority**: Evidence class confusion can make one environment appear
to prove a different environment.

**Independent Test**: Proof intake can reject reports that omit proof packets or
claim Windows Docker Desktop proof from Linux Docker, WSL, or host-provider
evidence.

**Acceptance Scenarios**:

1. **Given** Linux host LabVIEW proof, **When** proof is recorded, **Then** it is
   labeled as Linux host proof and not Windows proof.
2. **Given** a Windows Docker Desktop proof claim, **When** the packet lacks
   Docker Desktop OSType `windows`, runtime provider, runtime engine, execution
   state, or generated-report facts, **Then** the claim is rejected.

### Edge Cases

- Explicit LabVIEW or LabVIEWCLI proof override paths are missing.
- LabVIEW 2024-or-older is requested.
- A selected provider is unavailable after commit selection.
- A report exists without the required proof packet.
- Docker is available but has not been explicitly selected.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST default Windows installed-user compare workflows
  to host-native LabVIEWCLI. Imported ID: `VHS-SYS-REQ-004`.
- **FR-002**: The system MUST expose Docker only as a bounded expert provider
  selected explicitly through generated settings or proof flow. Imported IDs:
  `VHS-SYS-REQ-005`, `VHS-REQ-138`, `VHS-REQ-146`.
- **FR-003**: Runtime requests MUST retain provider, LabVIEW version, and
  LabVIEW bitness facts before execution starts. Imported ID:
  `VHS-SYS-REQ-006`.
- **FR-004**: Unsupported or unavailable runtime bundles MUST fail closed with
  retained runtime facts and corrective guidance. Imported ID:
  `VHS-SYS-REQ-007`.
- **FR-005**: Comparison MUST start from an explicit action after commit
  selection, not from automatic preflight certainty. Imported ID:
  `VHS-SYS-REQ-008`.
- **FR-006**: Governed proof inputs MUST allow explicit LabVIEW CLI path,
  LabVIEW executable path, and bitness overrides, while installed-user settings
  MUST NOT expose path-level overrides. Imported ID: `VHS-REQ-094`.
- **FR-007**: Windows discovery MUST locate supported LabVIEW 2025-or-newer
  executables and reject LabVIEW 2024-or-older requests with a stable reason.
  Imported ID: `VHS-REQ-095`.
- **FR-008**: Report HTML MUST render runtime provider, engine, blocked reason,
  selected tool paths, and retained runtime notes. Imported ID: `VHS-REQ-141`.
- **FR-009**: A ready LabVIEWCLI runtime MUST map to a
  `CreateComparisonReport` command plan with staged VI paths, output path, and
  explicit LabVIEW selection fields. Imported IDs: `VHS-REQ-144`,
  `VHS-REQ-194`.
- **FR-010**: Runtime execution MUST retain command, stdout, stderr, exit code,
  duration, and packet metadata. Imported ID: `VHS-REQ-148`.
- **FR-011**: Linux host LabVIEW 2026 Community proof MUST remain distinct from
  Windows proof. Imported ID: `VHS-REQ-588`.
- **FR-012**: `vihs validate-fixture` MUST write structured proof JSON and an
  issue body for the canonical public fixture. Imported ID: `VHS-REQ-589`.
- **FR-013**: Windows Docker Desktop proof intake MUST require a real Windows
  host, Docker Desktop OSType `windows`, canonical fixture command, and retained
  generated-report evidence. Imported ID: `VHS-REQ-590`.
- **FR-014**: The implementation MUST remain clean-room: no implementation
  source is copied from another product line.

### Key Entities *(include if feature involves data)*

- **Runtime Selection**: Provider, engine, version, bitness, selected paths,
  blocked reason, readiness state, and notes.
- **Comparison Command Plan**: LabVIEWCLI command intent, staged input VI paths,
  output path, selected LabVIEW fields, and report metadata.
- **Proof Packet**: Environment class, runtime provider, runtime engine,
  execution state, generated-report facts, stdout, stderr, exit code, duration,
  and issue body content.
- **Provider Policy**: Host-native default behavior, bounded Docker expert
  selection, and unsupported-bundle failure rules.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: All imported requirement IDs in the manifest are referenced by
  this specification or its trace files.
- **SC-002**: A clean-room implementation can test host-native default selection
  independently from Docker expert selection.
- **SC-003**: Runtime failure reports retain provider, version, bitness, blocked
  reason, and corrective guidance for every unsupported or unavailable bundle.
- **SC-004**: Proof intake rejects evidence-class substitutions for Windows
  Docker Desktop proof.
- **SC-005**: Public artifacts contain no private paths, private tooling names,
  credentials, private evidence, or copied implementation source.

## Assumptions

- The imported requirement IDs and semantics are immutable baseline references.
- The MIT authority may add local requirements for divergent behavior, but it
  must not redefine imported IDs.
- The first implementation will target a VS Code extension-style product, but
  runnable implementation is deferred to Issue #4 after this spec, plan, and
  tasks set is accepted.
- Marketplace publication remains disabled; future enablement requires a later
  ADR.
