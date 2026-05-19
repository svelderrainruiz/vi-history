# SRS Import: Runtime Settings CLI Validation Host Runtime Preflight

Slice: `runtime-settings-cli-validation-host-runtime-preflight-v1`

Imported requirements: `VHS-REQ-532`, `VHS-REQ-546`, `VHS-REQ-550`

Supporting signals: `TEST-UNIT-342`, `TEST-UNIT-354`, `TEST-UNIT-355`,
`TEST-UNIT-392`

## Functional Requirements

- **FR-001**: The public MIT authority MUST admit a pure host runtime preflight
  contract named
  `createRuntimeSettingsValidationHostRuntimePreflight(input = {})`. Imported
  IDs: `VHS-REQ-532`, `VHS-REQ-546`.
- **FR-002**: The contract MUST accept already-produced public-safe persisted
  selection facts for provider, platform, LabVIEW version, and LabVIEW bitness,
  plus supplied public-safe host candidate facts. Imported IDs: `VHS-REQ-532`,
  `VHS-REQ-546`.
- **FR-003**: The contract MUST admit only host-native provider preflight in
  this lane. Non-host provider requests, including Docker, MUST fail closed
  without opening Docker image selection or Docker bitness selection. Imported
  IDs: `VHS-REQ-532`, `VHS-REQ-546`.
- **FR-004**: The contract MUST require exactly one compatible supplied host
  candidate before returning ready runtime selection facts. Missing,
  ambiguous, unavailable, incompatible, or contaminated host candidate facts
  MUST fail closed. Imported ID: `VHS-REQ-532`.
- **FR-005**: The contract MUST require the supplied LabVIEW executable facts
  to match the requested LabVIEW version and LabVIEW bitness before returning
  ready. Imported ID: `VHS-REQ-532`.
- **FR-006**: The contract MUST require a supplied canonical installed
  LabVIEWCLI surface for host readiness and MUST fail closed when that surface
  is missing or not canonical. Imported IDs: `VHS-REQ-532`, `VHS-REQ-550`.
- **FR-007**: The contract MUST accept the governed Windows mixed-bitness host
  rule: requested `host` / `windows` / `2026` / `x64` may be ready when the
  supplied candidate contains LabVIEW 2026 x64 and the canonical installed x86
  LabVIEWCLI surface. This canonical installed x86 LabVIEWCLI acceptance MUST
  not be treated as a bitness mismatch by itself. Imported ID: `VHS-REQ-550`.
- **FR-008**: Ready preflight MUST return runtime selection facts consumable by
  `createRuntimeSettingsValidationRuntimeOutcome(input = {})` without changing
  that contract's output shape. Imported ID: `VHS-REQ-546`.
- **FR-009**: The contract MUST compose into existing validation readback,
  proof artifact, proof-out adapter, file-emission, validation command, and
  validate-plan-only contracts without redesigning their output shapes.
  Imported ID: `VHS-REQ-546`.
- **FR-010**: The contract MUST return deterministic public blocked reasons
  for missing selection, unsupported provider, missing host candidate,
  ambiguous host candidate, version mismatch, bitness mismatch, missing
  LabVIEW executable, missing canonical LabVIEWCLI, contaminated host surface,
  and malformed input.
- **FR-011**: The contract MUST NOT inspect the OS, walk filesystems, probe the
  registry, probe PATH, read environment state, discover private paths, invoke
  runtime locators, run runtime validation, execute compare, call LabVIEWCLI,
  call Docker, orchestrate containers, wire raw terminal processes, write
  files from the preflight adapter, publish packages, mutate launcher/profile
  state, perform Marketplace work, run release automation, or copy source.
- **FR-012**: Docker provider wording MUST remain corrected: Docker provider
  selection means the latest supported NI LabVIEW image family, 64-bit-only by
  image/platform, with no user-facing Docker bitness choice.
- **FR-013**: The implementation MUST remain clean-room: no implementation
  source is copied from another VI History product line.

## Key Entities

- **Host Runtime Preflight Request**: Public-safe selection facts and supplied
  host candidate facts for the requested host provider, platform, LabVIEW
  version, and LabVIEW bitness.
- **Host Candidate Facts**: Public-safe facts describing candidate count,
  LabVIEW executable availability, LabVIEW version, LabVIEW bitness,
  LabVIEWCLI availability, LabVIEWCLI bitness, and canonical CLI role without
  private paths.
- **Runtime Selection Facts**: Ready or blocked facts that can feed
  `createRuntimeSettingsValidationRuntimeOutcome(input = {})`.
- **Blocked Side-Effect Facts**: Facts proving OS scanning, runtime locators,
  runtime execution, compare, LabVIEWCLI, Docker, file writes, terminal wiring,
  publication, Marketplace, release, mutation, and source copying did not
  occur.

## Non-Functional Requirements

- Host preflight output must be deterministic for the same public-safe inputs.
- Host preflight must be testable without a live terminal, filesystem access,
  OS registry access, PATH access, LabVIEWCLI, Docker, compare execution,
  runtime locator invocation, package publication, or Marketplace state.
- Public artifacts must avoid private paths, credential details, private
  evidence, private control-plane terms, and source-copying instructions.
