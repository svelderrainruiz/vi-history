# Test Plan Import: Native Host Source Acquisition Dependency Adapter

Slice:
`runtime-settings-cli-validation-host-runtime-observation-native-source-acquisition-v1`

## Public Test Signals

- `TEST-UNIT-RSHOSTNATIVEACQ-001`: selected host facts drive bounded native
  source acquisition dependency adaptation without arbitrary filesystem walking.
- `TEST-UNIT-RSHOSTNATIVEACQ-002`: Windows registry-view acquisition dependency
  observations reduce to public-safe acquisition dependency facts without raw
  registry output or private paths.
- `TEST-UNIT-RSHOSTNATIVEACQ-003`: documented-root acquisition dependency
  observations reduce to public-safe availability, executable-role, version,
  and bitness facts.
- `TEST-UNIT-RSHOSTNATIVEACQ-004`: native source acquisition output composes
  into `createRuntimeSettingsValidationHostRuntimeObservationSourceAcquisition`
  and the existing validation command chain without output-shape redesign.
- `TEST-UNIT-RSHOSTNATIVEACQ-005`: malformed, missing, unsupported,
  unavailable, ambiguous, incompatible, contaminated, dependency-error, raw
  registry, and private-path disclosure inputs fail closed.
- `TEST-UNIT-RSHOSTNATIVEACQ-006`: deterministic blocked side-effect facts keep
  runtime validation execution, compare execution, LabVIEWCLI execution, Docker
  execution, file writes, VSIX packaging changes, Marketplace publication,
  release automation, launcher/profile mutation, Docker source discovery, and
  source copying blocked.

