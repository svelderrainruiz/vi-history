# SRS: Runtime Settings CLI Validation Host Runtime Observation Source Adapter

## Functional Requirements

- **FR-001**: The public MIT authority MUST admit
  `IAU-runtime-settings-cli-validation-host-runtime-observation-source-adapter-v1`
  for bounded host runtime observation source facts. Imported IDs:
  `VHS-REQ-095`, `VHS-REQ-096`, and `VHS-REQ-532`.
- **FR-002**: The source adapter contract MUST be named
  `createRuntimeSettingsValidationHostRuntimeObservationSourceAdapter(input =
  {})`.
- **FR-003**: The source adapter MUST accept selected host facts for provider,
  platform, LabVIEW version, and LabVIEW bitness. Imported IDs:
  `VHS-REQ-532` and `VHS-REQ-546`.
- **FR-004**: The source adapter MUST accept only bounded public-safe source
  facts for admitted source classes: Windows registry view and documented root.
  Imported IDs: `VHS-REQ-095` and `VHS-REQ-096`.
- **FR-005**: The source adapter MUST normalize source facts into observation
  dependency facts consumable by
  `createRuntimeSettingsValidationHostRuntimeObservation(input = {})` without
  retaining raw registry output, raw private paths, or exact installed paths.
  Imported ID: `VHS-REQ-095`.
- **FR-006**: The source adapter MUST preserve deterministic unavailable facts
  for macOS host runtime observation. Imported ID: `VHS-REQ-096`.
- **FR-007**: The source adapter MUST preserve the governed Windows
  mixed-bitness rule for LabVIEW 2026 x64 plus canonical installed x86
  LabVIEWCLI. Imported ID: `VHS-REQ-550`.
- **FR-008**: Source adapter output MUST compose into the existing observation,
  discovery, preflight, runtime outcome, readback, proof artifact,
  proof-out-adapter, validation command, and `validate-plan-only` contracts
  without changing their output shapes. Imported IDs: `VHS-REQ-532` and
  `VHS-REQ-546`.
- **FR-009**: The source adapter MUST fail closed for missing selection,
  unsupported provider, unsupported platform, unsupported year, missing source
  facts, malformed source facts, unsupported source class, unavailable source,
  ambiguous source facts, incompatible source facts, contaminated source
  surface, raw registry output, and private-path disclosure attempts.
- **FR-010**: The source adapter MUST NOT perform arbitrary filesystem walking,
  PATH probing, environment probing, runtime locator invocation, compare
  locator reuse, runtime validation execution, compare execution, LabVIEWCLI
  execution, Docker command execution or orchestration, raw terminal process
  wiring, live proof, proof-out expansion, file writes, VSIX packaging changes,
  package/bin publication, launcher/profile mutation, Marketplace work, release
  automation, or source copying.

## Non-Functional Requirements

- The implementation MUST remain deterministic and testable through public-safe
  injected facts.
- All records MUST remain public-safe and pass redaction checks.
- The contract MUST expose blocked side-effect facts proving that host source
  adaptation did not perform execution, probing, mutation, publication, release,
  or source-sharing behavior.

## Traceability

Supporting tests are expected to include `TEST-UNIT-RSHOSTSOURCE-001` through
`TEST-UNIT-RSHOSTSOURCE-005`, plus the existing supporting signals
`TEST-UNIT-063`, `TEST-UNIT-064`, `TEST-UNIT-342`, `TEST-UNIT-354`,
`TEST-UNIT-355`, and `TEST-UNIT-392`.
