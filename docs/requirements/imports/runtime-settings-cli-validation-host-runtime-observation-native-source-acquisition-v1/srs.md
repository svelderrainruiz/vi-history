# SRS Import: Native Host Source Acquisition Dependency Adapter

Slice:
`runtime-settings-cli-validation-host-runtime-observation-native-source-acquisition-v1`

## Functional Requirements

- `VHS-REQ-095`: The adapter MUST support bounded Windows registry-view
  acquisition dependency facts for selected `host-native` Windows LabVIEW 2026
  facts without retaining raw registry output or private paths.
- `VHS-REQ-096`: The adapter MUST support bounded documented-root acquisition
  dependency facts for selected `host-native` Linux LabVIEW 2026 facts without
  arbitrary filesystem walking.
- `VHS-REQ-532`: The adapter MUST produce facts consumable by
  `createRuntimeSettingsValidationHostRuntimeObservationSourceAcquisition(input =
  {})` and the existing validation command chain without output-shape redesign.
- `VHS-REQ-546`: The adapter MUST produce deterministic public-safe failure and
  blocked side-effect facts for proof and proof-out composition.
- `VHS-REQ-550`: The adapter MUST preserve the Windows LabVIEW 2026 x64 plus
  canonical installed x86 LabVIEWCLI public fact shape already admitted by the
  source-acquisition lane. Verification signal: `TEST-UNIT-RSHOSTNATIVEACQ-006`.

## Fail-Closed Requirements

The adapter MUST fail closed for missing selection facts, unsupported provider,
unsupported platform, unsupported LabVIEW version, missing dependency surface,
ambiguous dependency surface, malformed dependency surface, dependency errors,
contaminated source surfaces, raw registry output, and private path disclosure
attempts.

## Out Of Scope

Runtime validation execution, compare execution, LabVIEWCLI command execution,
Docker command execution or orchestration, Docker image inspection, container
source discovery, broad PATH or environment probing, arbitrary filesystem
walking, source copying, launcher/profile mutation, release automation, package
publication, and Marketplace publication remain out of scope.
