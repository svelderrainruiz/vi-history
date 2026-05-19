# SRS Import: Runtime Settings CLI Validation Host Runtime Observation Adapter

Slice: `runtime-settings-cli-validation-host-runtime-observation-adapter-v1`

Imported requirements: `VHS-REQ-095`, `VHS-REQ-096`, `VHS-REQ-532`,
`VHS-REQ-546`, `VHS-REQ-550`

Supporting signals: `TEST-UNIT-063`, `TEST-UNIT-064`, `TEST-UNIT-342`,
`TEST-UNIT-354`, `TEST-UNIT-355`, `TEST-UNIT-392`

## Functional Requirements

- **FR-001**: The public MIT authority MUST admit a bounded host runtime
  observation facts contract named
  `createRuntimeSettingsValidationHostRuntimeObservation(input = {})`.
  Imported IDs: `VHS-REQ-095`, `VHS-REQ-096`, `VHS-REQ-532`.
- **FR-002**: The contract MUST accept public-safe selected host facts for
  provider, platform, LabVIEW version, and LabVIEW bitness. Imported IDs:
  `VHS-REQ-532`, `VHS-REQ-546`.
- **FR-003**: The contract MUST accept only admitted bounded observation
  dependencies for this lane. It MUST NOT perform arbitrary filesystem walking,
  PATH probing, environment probing, runtime locator invocation, registry
  probing, or command execution by itself.
- **FR-004**: The contract MAY normalize supplied Windows registry-view
  observations into public source class identifiers, availability booleans,
  candidate count facts, executable role/version/bitness facts, and canonical
  LabVIEWCLI role/bitness facts, but MUST NOT retain raw registry output or
  exact private installed paths. Imported ID: `VHS-REQ-095`.
- **FR-005**: The contract MAY normalize supplied documented-root observations
  into public-safe availability, executable-role, version, and bitness facts
  and MUST return deterministic unavailable facts when a selected platform is
  unsupported by this lane. Imported ID: `VHS-REQ-096`.
- **FR-006**: Ready observation output MUST be consumable by
  `createRuntimeSettingsValidationHostRuntimeDiscovery(input = {})` without
  changing the discovery contract's output shape. Imported IDs:
  `VHS-REQ-532`, `VHS-REQ-546`.
- **FR-007**: The contract MUST fail closed for missing selection,
  unsupported provider, unsupported platform, unsupported version, missing
  observation dependency, malformed registry observation, malformed
  documented-root observation, missing candidate, ambiguous candidate, missing
  LabVIEW executable, missing canonical LabVIEWCLI, incompatible bitness,
  contaminated host surface, and private-path disclosure attempts.
- **FR-008**: The contract MUST preserve the governed Windows mixed-bitness
  host rule: requested `host` / `windows` / `2026` / `x64` may be ready after
  discovery and preflight when observation facts show LabVIEW 2026 x64 and the
  canonical installed x86 LabVIEWCLI surface. Imported ID: `VHS-REQ-550`.
- **FR-009**: The contract MUST NOT invoke the existing compare runtime
  locator as an implementation shortcut, run runtime validation, execute
  compare, call LabVIEWCLI, call Docker, orchestrate containers, wire raw
  terminal processes, expand proof-out behavior, write files, publish
  packages, mutate launcher/profile state, perform Marketplace work, run
  release automation, or copy source.
- **FR-010**: Docker provider wording MUST remain corrected: Docker provider
  selection means the latest supported NI LabVIEW image family, 64-bit-only by
  image/platform, with no user-facing Docker bitness choice.
- **FR-011**: The implementation MUST remain clean-room: no implementation
  source is copied from another VI History product line.

## Key Entities

- **Host Runtime Observation Request**: Public-safe selected provider,
  platform, LabVIEW version, and LabVIEW bitness facts plus injected bounded
  observation dependencies.
- **Observation Dependency Facts**: Public-safe input facts about an admitted
  observation source class, availability, candidate count, LabVIEW executable
  role, LabVIEW version, LabVIEW bitness, canonical LabVIEWCLI role, and CLI
  bitness.
- **Discovery Observation Facts**: Public-safe facts consumable by the already
  admitted host runtime discovery contract; they do not expose raw registry
  output or exact private installed paths.
- **Blocked Side-Effect Facts**: Facts proving runtime validation, compare,
  LabVIEWCLI, Docker, raw terminal wiring, proof-out expansion, file writes,
  publication, Marketplace, release, mutation, and source copying did not
  occur.

## Non-Functional Requirements

- Observation output must be deterministic for the same public-safe inputs.
- Observation shaping must be testable without a live terminal, LabVIEWCLI,
  Docker, compare execution, package publication, Marketplace state, private
  host paths, or Windows boot.
- Public artifacts must avoid private paths, credential details, private
  evidence, private control-plane terms, and source-copying instructions.
