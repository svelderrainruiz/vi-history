# Test Plan Import: Native Host Source Surface Probe

Slice:
`runtime-settings-cli-validation-host-runtime-observation-native-source-probe-v1`

## Public Test Signals

- `TEST-UNIT-RSHOSTNATIVEPROBE-001`: selected host facts drive bounded native
  source surface probing without arbitrary filesystem walking.
- `TEST-UNIT-RSHOSTNATIVEPROBE-002`: Windows registry-view source surface
  probing produces public-safe native acquisition observations without raw
  registry output or private paths.
- `TEST-UNIT-RSHOSTNATIVEPROBE-003`: Linux documented-root source surface
  probing produces public-safe native acquisition observations without arbitrary
  filesystem walking.
- `TEST-UNIT-RSHOSTNATIVEPROBE-004`: native source probe output composes into
  `createRuntimeSettingsValidationHostRuntimeObservationNativeSourceAcquisition`
  and the existing validation command chain without output-shape redesign.
- `TEST-UNIT-RSHOSTNATIVEPROBE-005`: malformed, missing, unsupported,
  unavailable, ambiguous, contaminated, probe-error, raw registry, and private-
  path disclosure inputs fail closed.
- `TEST-UNIT-RSHOSTNATIVEPROBE-006`: deterministic blocked side-effect facts
  keep runtime validation execution, compare execution, LabVIEWCLI execution,
  Docker execution, file writes, VSIX packaging changes, Marketplace
  publication, release automation, launcher/profile mutation, Docker source
  discovery, and source copying blocked.

