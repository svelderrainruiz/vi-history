# SRS Import: Runtime Settings CLI Validation Host Runtime Discovery

Slice: `runtime-settings-cli-validation-host-runtime-discovery-v1`

Imported requirements: `VHS-REQ-095`, `VHS-REQ-096`, `VHS-REQ-532`,
`VHS-REQ-546`, `VHS-REQ-550`

Supporting signals: `TEST-UNIT-063`, `TEST-UNIT-064`, `TEST-UNIT-342`,
`TEST-UNIT-354`, `TEST-UNIT-355`, `TEST-UNIT-392`

## Functional Requirements

- **FR-001**: The public MIT authority MUST admit a bounded host runtime
  discovery facts contract named
  `createRuntimeSettingsValidationHostRuntimeDiscovery(input = {})`.
  Imported IDs: `VHS-REQ-095`, `VHS-REQ-096`, `VHS-REQ-532`.
- **FR-002**: The contract MUST accept public-safe selected host facts for
  provider, platform, LabVIEW version, and LabVIEW bitness. Imported IDs:
  `VHS-REQ-532`, `VHS-REQ-546`.
- **FR-003**: The contract MUST admit only host-provider discovery in this
  lane. Docker and non-host provider requests MUST fail closed without opening
  image selection, Docker bitness selection, or Docker orchestration. Imported
  IDs: `VHS-REQ-532`, `VHS-REQ-546`.
- **FR-004**: The contract MAY normalize bounded Windows registry-view
  observations and documented-root observations into public-safe host candidate
  facts, but MUST NOT retain raw registry output or exact private installed
  paths in public output. Imported ID: `VHS-REQ-095`.
- **FR-005**: The contract MAY normalize Linux documented-root observations
  into public-safe host candidate facts and MUST return deterministic macOS
  unavailable facts when the selected platform is unsupported by this lane.
  Imported ID: `VHS-REQ-096`.
- **FR-006**: Ready discovery MUST produce host candidate facts consumable by
  `createRuntimeSettingsValidationHostRuntimePreflight(input = {})` without
  changing that contract's output shape. Imported IDs: `VHS-REQ-532`,
  `VHS-REQ-546`.
- **FR-007**: The contract MUST fail closed for missing selection,
  unsupported provider, unsupported platform, unsupported version, missing
  discovery dependency, malformed registry observation, missing candidate,
  ambiguous candidate, missing LabVIEW executable, missing canonical
  LabVIEWCLI, incompatible bitness, contaminated host surface, and
  private-path disclosure attempts.
- **FR-008**: The contract MUST preserve the governed Windows mixed-bitness
  host rule: requested `host` / `windows` / `2026` / `x64` may be ready after
  preflight when discovery facts show LabVIEW 2026 x64 and the canonical
  installed x86 LabVIEWCLI surface. Imported ID: `VHS-REQ-550`.
- **FR-009**: The contract MUST NOT invoke the existing compare runtime
  locator as an implementation shortcut, run runtime validation, execute
  compare, call LabVIEWCLI, call Docker, orchestrate containers, wire raw
  terminal processes, write files, publish packages, mutate launcher/profile
  state, perform Marketplace work, run release automation, or copy source.
- **FR-010**: Docker provider wording MUST remain corrected: Docker provider
  selection means the latest supported NI LabVIEW image family, 64-bit-only by
  image/platform, with no user-facing Docker bitness choice.
- **FR-011**: The implementation MUST remain clean-room: no implementation
  source is copied from another VI History product line.

## Key Entities

- **Host Runtime Discovery Request**: Public-safe selected provider, platform,
  LabVIEW version, and LabVIEW bitness facts plus bounded discovery
  observations or injected discovery dependencies.
- **Discovery Observation Facts**: Public-safe facts about documented-root or
  Windows registry-view observations, candidate source class, candidate count,
  availability, LabVIEW executable role, LabVIEW version, LabVIEW bitness,
  canonical LabVIEWCLI role, and CLI bitness.
- **Host Candidate Facts**: Public-safe facts consumable by the admitted host
  runtime preflight contract; they do not expose raw private installed paths.
- **Blocked Side-Effect Facts**: Facts proving runtime validation, compare,
  LabVIEWCLI, Docker, raw terminal wiring, file writes, publication,
  Marketplace, release, mutation, and source copying did not occur.

## Non-Functional Requirements

- Discovery output must be deterministic for the same public-safe inputs.
- Discovery must be testable without a live terminal, LabVIEWCLI, Docker,
  compare execution, package publication, Marketplace state, or Windows boot.
- Public artifacts must avoid private paths, credential details, private
  evidence, private control-plane terms, and source-copying instructions.
