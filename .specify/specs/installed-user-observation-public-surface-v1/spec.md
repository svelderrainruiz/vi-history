# Feature Specification: Installed-User Observation Public Surface

**Feature Branch**: `codex/installed-user-observation-import`

**Created**: 2026-05-17

**Status**: Locked for public import; observation-model IAU admitted

**Input**: Imported requirements slice `installed-user-observation-public-surface-v1`

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Maintainer Runs Observation Cycle (Priority: P1)

A maintainer can determine whether an installed-user observation cycle should
run from public feedback, release changes, repeated confusion, video-planning
evidence, SemVer candidate openings, or the no-later-than review date.

**Why this priority**: The feature exists to make installed-user observation
repeatable after a one-time campaign closes.

**Independent Test**: Given public-safe cycle inputs, a future contract can
classify whether an observation cycle is due without reading private release
control material.

**Acceptance Scenarios**:

1. **Given** a new public installed-user report, **When** the observation
   surface evaluates triggers, **Then** it marks the cycle as due.
2. **Given** no public feedback has arrived before the no-later-than review
   date, **When** the observation surface evaluates triggers, **Then** it marks
   the cycle as due.
3. **Given** a Marketplace publication has closed, **When** the observation
   surface evaluates triggers, **Then** it treats the publication as an
   observation trigger but not first-time installed-user acceptance proof.

---

### User Story 2 - Observation Facts Stay Classified (Priority: P1)

A maintainer can retain public-safe facts as `observed`, `deferred`, or
`blocked` without mixing those buckets.

**Why this priority**: Confusing observed facts with deferred or blocked facts
would turn a support signal into an unsupported product claim.

**Independent Test**: A future contract can accept a set of observation facts
and reject unknown buckets or bucket substitutions.

**Acceptance Scenarios**:

1. **Given** retained public feedback, validation receipts, compare receipts,
   or user review notes, **When** facts are classified, **Then** they can be
   retained as `observed`.
2. **Given** a planned observation that has not run yet, **When** facts are
   classified, **Then** it is retained as `deferred`.
3. **Given** an observation depends on a missing host or separate proof gate,
   **When** facts are classified, **Then** it is retained as `blocked`.

---

### User Story 3 - Repeated Confusion Routes To Follow-Up Work (Priority: P2)

A maintainer can route repeated installed-user confusion into user
documentation, bundled documentation, video-planning candidates, or future
issue work before changing SemVer posture.

**Why this priority**: The observation surface should turn feedback into
focused product work without treating every signal as a release defect.

**Independent Test**: A future contract can map confusion categories to routing
decisions and retain a sustainment-default SemVer recommendation.

**Acceptance Scenarios**:

1. **Given** repeated first-run confusion, **When** routing is evaluated,
   **Then** it creates a documentation or video-plan candidate.
2. **Given** a public-facing docs correction is required, **When** routing is
   evaluated, **Then** it may recommend a patch only if a published package or
   public-source update is required.
3. **Given** feedback is informational only, **When** routing is evaluated,
   **Then** it keeps the SemVer recommendation sustainment-only.

---

### User Story 4 - Proof And Release Claims Stay Blocked (Priority: P2)

A maintainer can see that installed-user observation does not admit Windows
Docker Desktop proof, LabVIEWCLI execution, Docker orchestration, or
Marketplace publication.

**Why this priority**: The observation surface must not widen proof or release
claims by implication.

**Independent Test**: A future contract can reject attempts to promote
Marketplace publication, command execution, Docker orchestration, or Windows
Docker Desktop proof from this slice.

**Acceptance Scenarios**:

1. **Given** a Windows Docker Desktop proof claim, **When** it is presented
   through this observation slice, **Then** it remains blocked and must use a
   separate proof gate.
2. **Given** an implementation proposal starts LabVIEWCLI or Docker execution,
   **When** it is compared to this feature, **Then** the proposal is out of
   scope.
3. **Given** a Marketplace publication proposal, **When** it is compared to
   this feature, **Then** the proposal remains blocked by the Marketplace
   posture decision.

### Edge Cases

- A public issue has labels but no actionable comments.
- A public report is useful for docs but not for proof.
- A clean install observation depends on an unavailable host.
- Repeated confusion is easier to show through a video than explain in text.
- A proof report attempts to use installed-user observation as release proof.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The system MUST retain event triggers for recurring
  installed-user observation cycles, including public feedback, repeated
  confusion, video-planning evidence, SemVer-affecting candidate openings, and
  a no-later-than review date. Imported ID: `VHS-REQ-595`.
- **FR-002**: The system MUST classify observation facts into exactly
  `observed`, `deferred`, or `blocked` buckets. Imported ID: `VHS-REQ-595`.
- **FR-003**: Public feedback MUST be retained as observation input and MUST
  NOT be treated as release proof by itself. Imported ID: `VHS-REQ-595`.
- **FR-004**: Repeated confusion MUST route to user documentation, bundled
  documentation, video-planning candidates, or future issue work before SemVer
  posture changes. Imported ID: `VHS-REQ-595`.
- **FR-005**: The default SemVer recommendation MUST remain sustainment-only
  unless an installed-user defect, public-facing documentation correction, or
  proof gap requires a published package or public-source update. Imported ID:
  `VHS-REQ-595`.
- **FR-006**: Windows Docker Desktop Windows-container proof MUST remain a
  separate gate and MUST NOT be admitted by installed-user observation alone.
  Imported ID: `VHS-REQ-595`.
- **FR-007**: LabVIEWCLI execution, Docker execution or orchestration, Windows
  Docker Desktop proof promotion, and Marketplace publication MUST remain
  blocked until separate requirements and IAU preflight records admit them.
- **FR-008**: The implementation MUST remain clean-room: no implementation
  source is copied from another product line.

### Key Entities *(include if feature involves data)*

- **Observation Cycle**: Trigger set, due state, no-later-than date, and public
  feedback correlation.
- **Observation Fact**: Public-safe fact with bucket, source type, summary, and
  follow-up recommendation.
- **Routing Decision**: Documentation, video-planning, issue, proof, or SemVer
  recommendation derived from observation facts.
- **Blocked Claim**: A proof, execution, orchestration, or publication claim
  explicitly outside this slice.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: The public import manifest lists `VHS-REQ-595` and all import
  files are present.
- **SC-002**: `spec.md`, `plan.md`, and `tasks.md` define observation cycles,
  fact buckets, routing decisions, and blocked claims without admitting code.
- **SC-003**: Public validation rejects private paths, private tooling names,
  credentials, private evidence, and copied implementation-source instructions.
- **SC-004**: The admission record states that
  `IAU-installed-user-observation-model-v1` is admitted for `T009` through
  `T013`, and that future code outside that scope requires a separate named
  IAU preflight with `status: pass`.
- **SC-005**: Public artifacts keep Marketplace publication disabled.

## Assumptions

- The imported requirement ID and semantics are immutable baseline references.
- The MIT authority may add local requirements for divergent behavior, but it
  must not redefine imported IDs.
- This feature is a public observation and reporting model first. Runnable
  implementation is admitted only for the observation-model IAU.
- Marketplace publication remains disabled; future enablement requires a later
  decision.
