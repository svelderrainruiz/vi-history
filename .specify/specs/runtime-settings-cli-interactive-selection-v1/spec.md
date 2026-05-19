# Feature Specification: Runtime Settings CLI Interactive Selection

**Feature Branch**:
`codex/runtime-settings-cli-interactive-selection-admission`

**Created**: 2026-05-18

**Status**: Implementation admitted for
`IAU-runtime-settings-cli-interactive-selection-contract-v1`

**Input**: Imported requirements slice
`runtime-settings-cli-interactive-selection-v1`

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Discover Current Runtime Selection (Priority: P1)

An installed user can run bare `vihs` and receive deterministic selection
facts for the current provider, platform, LabVIEW version, and LabVIEW bitness
without starting runtime execution.

**Why this priority**: The MIT authority can now prepare, write, validate, and
retain proof facts for runtime settings. The next small user-facing step is a
discoverable no-argument selection contract.

**Independent Test**: A test can pass empty or partial settings facts into the
selection contract and prove the output seeds missing settings to
`host/windows/2026/x86`, reports the effective bundle, and emits copyable
next-command guidance.

**Acceptance Scenarios**:

1. **Given** missing settings, **When** bare `vihs` selection facts are
   produced, **Then** the effective bundle is `host/windows/2026/x86`.
2. **Given** persisted settings, **When** selection facts are produced,
   **Then** provider, platform, LabVIEW version, and LabVIEW bitness are
   reported exactly.
3. **Given** selection facts are produced, **When** this IAU is in scope,
   **Then** no terminal stdin loop, LabVIEWCLI execution, Docker execution,
   compare execution, or proof-out file writing starts.

---

### User Story 2 - Confirm Or Guide A Supported Selection (Priority: P1)

An installed user can confirm the current governed selection or choose a
supported host or Docker selection through public data-contract facts.

**Why this priority**: Interactive selection needs a public contract before
terminal process behavior is wired. Supported choices and fail-closed reasons
must be stable first.

**Independent Test**: Contract tests can verify Enter-through confirmation,
guided host choices, latest supported NI LabVIEW Docker image selection, and
unsupported selection failures without invoking a terminal prompt loop.

**Acceptance Scenarios**:

1. **Given** a current governed selection, **When** the user confirms it,
   **Then** the contract preserves that selection and requests validation
   through the existing validation readback contract.
2. **Given** supported local host choices for LabVIEW 2025, LabVIEW 2026, or
   newer supported host versions with the selected bitness present, **When**
   guided selection is modeled, **Then** the selected bundle is accepted.
3. **Given** Docker is selected, **When** the request is outside the latest
   supported NI LabVIEW Docker image family or tries to choose Docker bitness,
   **Then** the selection fails closed with stable guidance.

### Edge Cases

- Settings are missing, partial, or malformed.
- Selected host installation is missing the requested bitness.
- Requested host year is unsupported.
- Docker is requested outside the latest supported NI LabVIEW image family, or
  Docker bitness is treated as user-selectable.
- Confirmation attempts to run validation directly instead of producing a
  validation-handoff fact.
- The implementation attempts to add terminal process prompt loops, runtime
  execution, proof-out writing, packaging, Marketplace, or source copying.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The selection contract MUST seed missing settings to
  `host/windows/2026/x86`. Imported ID: `VHS-REQ-545`.
- **FR-002**: The selection contract MUST report provider, platform, LabVIEW
  version, and LabVIEW bitness as the effective bundle. Imported ID:
  `VHS-REQ-545`.
- **FR-003**: The selection contract MUST emit copyable next-command guidance
  for non-interactive operation. Imported ID: `VHS-REQ-545`.
- **FR-004**: The selection contract MUST accept supported host selections for
  LabVIEW 2025, LabVIEW 2026, and newer local supported host versions when the
  selected installation and bitness are present. Imported ID: `VHS-REQ-545`.
- **FR-005**: The selection contract MUST constrain Docker provider selection
  to the latest supported NI LabVIEW Docker image family. The current governed
  Linux default maps to the LabVIEW 2026 image family, and Docker exposes no
  separate bitness choice because the image/platform is 64-bit-only. Imported
  ID: `VHS-REQ-545`.
- **FR-006**: The confirmation contract MUST preserve the current governed
  selection and request validation through the existing validation readback
  contract without adding execution behavior. Imported ID: `VHS-REQ-546`.
- **FR-007**: Unsupported years, host/platform mismatches, missing selected
  host bitness, unsupported Docker image-family requests, attempted Docker
  bitness choices, and not-yet-implemented paths MUST fail closed with stable
  reasons. Imported IDs: `VHS-REQ-545`, `VHS-REQ-546`.
- **FR-008**: The implementation MUST remain clean-room: no implementation
  source is copied from another product line.

### Key Entities

- **Selection Facts**: Public provider, platform, LabVIEW version, and LabVIEW
  bitness facts produced for bare `vihs`.
- **Selection Option**: A public supported host or Docker choice with
  availability and fail-closed reason facts.
- **Confirmation Result**: A public data contract preserving the selected
  bundle and naming whether validation should be requested next.
- **Copyable Guidance**: Deterministic commands or next-action text for
  non-interactive operation.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: The public import manifest lists `VHS-REQ-545`,
  `VHS-REQ-546`, `TEST-UNIT-353`, and `TEST-UNIT-354`.
- **SC-002**: `spec.md`, `plan.md`, and `tasks.md` define
  `IAU-runtime-settings-cli-interactive-selection-contract-v1` and keep
  terminal prompt loops, compare execution, runtime execution, proof-out file
  writing, live-session proof, packaging, and Marketplace blocked.
- **SC-003**: Public validation rejects private paths, private tooling names,
  credentials, private evidence, and copied implementation-source
  instructions.
- **SC-004**: The admission record states that
  `IAU-runtime-settings-cli-interactive-selection-contract-v1` is admitted for
  T009-T013 only after preflight passes.
- **SC-005**: Marketplace publication remains disabled.

## Assumptions

- The imported requirement IDs and semantics are immutable baseline
  references.
- This IAU models interactive selection as pure selection state and output
  facts; terminal process prompt wiring requires a later IAU.
- Confirmation may request validation through the already admitted validation
  readback contract; it does not run validation or produce proof-out files in
  this IAU.
