# SRS Import: Runtime Settings CLI Validation Host Preflight Command Composition

Slice:
`runtime-settings-cli-validation-host-preflight-command-composition-v1`

Imported requirement: `VHS-REQ-546`

Supporting signals: `TEST-UNIT-342`, `TEST-UNIT-354`, `TEST-UNIT-355`,
`TEST-UNIT-392`

## Functional Requirements

- **FR-001**: The public MIT authority MUST admit a command-composition IAU for
  `createRuntimeSettingsValidationCommandResult(input = {})`. Imported ID:
  `VHS-REQ-546`.
- **FR-002**: The command-result contract MUST accept an already-produced ready
  host preflight result from
  `createRuntimeSettingsValidationHostRuntimePreflight(input = {})` when
  `runtimeSelection` is not supplied separately. Imported ID: `VHS-REQ-546`.
- **FR-003**: The command-result contract MUST compose supplied public-safe
  host selection and host candidate facts through
  `createRuntimeSettingsValidationHostRuntimePreflight(input = {})` before
  creating runtime outcome facts. Imported ID: `VHS-REQ-546`.
- **FR-004**: Ready host preflight runtime selection facts MUST feed the
  existing runtime outcome, validation readback, proof artifact, proof-out
  adapter, file-emission, validation command, and validate-plan-only chain
  without redesigning those output shapes. Imported ID: `VHS-REQ-546`.
- **FR-005**: Blocked host preflight facts MUST fail closed through the command
  result with deterministic runtime outcome and validation facts, including
  public blocked reasons and stable public error/status facts.
- **FR-006**: The command-result contract MUST preserve validate-only,
  validate-with-proof-out-ready, and validate-plan-only behavior while removing
  the need for callers to manually pass `preflight.runtimeSelection`.
- **FR-007**: Proof-out file writes, when requested and supported, MUST still
  occur only through the already admitted command/file-emission path. The host
  preflight adapter itself MUST NOT write files.
- **FR-008**: The composition branch MUST fail closed for missing host
  selection, unsupported provider, missing candidate, ambiguous candidate,
  unavailable candidate, incompatible candidate, contaminated host surface, and
  malformed input.
- **FR-009**: The composition branch MUST NOT inspect the OS, walk filesystems,
  probe the registry, probe PATH, read environment state, discover private
  paths, invoke runtime locators, run runtime validation, execute compare, call
  LabVIEWCLI, call Docker, orchestrate containers, wire raw terminal processes,
  produce live terminal proof, write files from the host preflight adapter,
  publish packages, mutate launcher/profile state, perform Marketplace work,
  run release automation, or copy source.
- **FR-010**: The governed Windows mixed-bitness host prerequisite remains a
  prerequisite only: Windows host LabVIEW 2026 x64 may pair with the canonical
  installed x86 LabVIEWCLI surface when supplied as public-safe facts. This
  lane does not discover those facts.
- **FR-011**: Docker provider wording MUST remain corrected: Docker provider
  selection means the latest supported NI LabVIEW image family, 64-bit-only by
  image/platform, with no user-facing Docker bitness choice.
- **FR-012**: The implementation MUST remain clean-room: no implementation
  source is copied from another VI History product line.

## Key Entities

- **Command Composition Request**: Inputs to
  `createRuntimeSettingsValidationCommandResult(input = {})` that include a
  ready host preflight result or public-safe host selection/candidate facts.
- **Host Preflight Result**: Output of the admitted
  `createRuntimeSettingsValidationHostRuntimePreflight(input = {})` contract,
  including ready or blocked runtime selection facts.
- **Runtime Selection Facts**: Existing public-safe facts consumed by
  `createRuntimeSettingsValidationRuntimeOutcome(input = {})`.
- **Blocked Side-Effect Facts**: Facts proving OS scanning, locators, private
  path discovery, runtime execution, compare, LabVIEWCLI, Docker, terminal
  wiring, publication, Marketplace, release, mutation, and source copying did
  not occur.

## Non-Functional Requirements

- Command composition output must be deterministic for the same public-safe
  inputs.
- Command composition must be testable without a live terminal, filesystem
  access, registry access, PATH access, environment probing, runtime locator
  invocation, LabVIEWCLI, Docker, compare execution, package publication, or
  Marketplace state.
- Public artifacts must avoid private paths, credential details, private
  evidence, private control-plane terms, and source-copying instructions.
