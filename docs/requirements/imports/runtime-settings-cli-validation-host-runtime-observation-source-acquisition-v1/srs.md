# SRS: Runtime Settings CLI Validation Host Runtime Observation Source Acquisition

## Functional Requirements

- **FR-001**: The public MIT authority MUST admit
  `IAU-runtime-settings-cli-validation-host-runtime-observation-source-acquisition-v1`
  for bounded native host source acquisition facts. Imported IDs:
  `VHS-REQ-095`, `VHS-REQ-096`, and `VHS-REQ-532`.
- **FR-002**: The source acquisition contract MUST be named
  `createRuntimeSettingsValidationHostRuntimeObservationSourceAcquisition(input =
  {})`.
- **FR-003**: The source acquisition contract MUST accept selected host facts
  for provider, platform, LabVIEW version, and LabVIEW bitness. Imported IDs:
  `VHS-REQ-532` and `VHS-REQ-546`.
- **FR-004**: The source acquisition contract MUST accept only bounded
  public-safe acquisition dependency facts for admitted native host source
  classes: Windows registry view and documented root. Imported IDs:
  `VHS-REQ-095` and `VHS-REQ-096`.
- **FR-005**: The source acquisition contract MUST normalize acquisition
  dependency facts into source facts consumable by
  `createRuntimeSettingsValidationHostRuntimeObservationSourceAdapter(input =
  {})` without retaining raw registry output, raw private paths, or exact
  installed paths. Imported ID: `VHS-REQ-095`.
- **FR-006**: The source acquisition contract MUST preserve deterministic
  unavailable facts for macOS host runtime source acquisition. Imported ID:
  `VHS-REQ-096`.
- **FR-007**: The source acquisition contract MUST preserve the governed
  Windows mixed-bitness rule for LabVIEW 2026 x64 plus canonical installed x86
  LabVIEWCLI. Imported ID: `VHS-REQ-550`.
- **FR-008**: Source acquisition output MUST compose into the existing source
  adapter, observation, discovery, preflight, runtime outcome, readback, proof
  artifact, proof-out-adapter, validation command, and `validate-plan-only`
  contracts without changing their output shapes. Imported IDs: `VHS-REQ-532`
  and `VHS-REQ-546`.
- **FR-009**: The source acquisition contract MUST fail closed for missing
  selection, unsupported provider, unsupported platform, unsupported year,
  missing acquisition dependency facts, malformed dependency facts, unsupported
  source class, unavailable dependency, ambiguous dependency facts,
  incompatible dependency facts, contaminated host surface, raw registry output,
  private-path disclosure attempts, and dependency errors.
- **FR-010**: The source acquisition contract MUST NOT perform arbitrary
  filesystem walking, broad PATH probing, environment probing, runtime locator
  invocation, compare locator reuse, runtime validation execution, compare
  execution, LabVIEWCLI execution, Docker command execution or orchestration,
  raw terminal process wiring, live proof, proof-out expansion, file writes,
  VSIX packaging changes, package/bin publication, launcher/profile mutation,
  Marketplace work, release automation, or source copying.

## Non-Functional Requirements

- The implementation MUST remain deterministic and testable through public-safe
  bounded acquisition dependency facts.
- All records MUST remain public-safe and pass redaction checks.
- The contract MUST expose blocked side-effect facts proving that host source
  acquisition did not perform execution, probing beyond admitted dependency
  facts, mutation, publication, release, or source-sharing behavior.

## Traceability

Supporting tests are expected to include `TEST-UNIT-RSHOSTACQ-001` through
`TEST-UNIT-RSHOSTACQ-006`, plus existing source-adapter and validation chain
signals `TEST-UNIT-RSHOSTSOURCE-001`, `TEST-UNIT-RSHOSTSOURCE-002`,
`TEST-UNIT-RSHOSTSOURCE-004`, `TEST-UNIT-063`, `TEST-UNIT-064`,
`TEST-UNIT-342`, `TEST-UNIT-354`, `TEST-UNIT-355`, and `TEST-UNIT-392`.
