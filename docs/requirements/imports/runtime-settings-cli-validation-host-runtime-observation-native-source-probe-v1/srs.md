# SRS Import: Native Host Source Surface Probe

Slice:
`runtime-settings-cli-validation-host-runtime-observation-native-source-probe-v1`

## Functional Requirements

- `VHS-REQ-095`: The probe MUST support bounded Windows registry-view source
  surface probing for selected `host-native` Windows LabVIEW 2026 facts without
  retaining raw registry output or private paths.
- `VHS-REQ-096`: The probe MUST support bounded documented-root source surface
  probing for selected `host-native` Linux LabVIEW 2026 facts without arbitrary
  filesystem walking.
- `VHS-REQ-532`: The probe MUST produce observations consumable by
  `createRuntimeSettingsValidationHostRuntimeObservationNativeSourceAcquisition(input =
  {})` and the existing validation command chain without output-shape redesign.
- `VHS-REQ-546`: The probe MUST produce deterministic public-safe failure and
  blocked side-effect facts for proof and proof-out composition.
- `VHS-REQ-550`: The probe MUST preserve the Windows LabVIEW 2026 x64 plus
  canonical installed x86 LabVIEWCLI public fact shape already admitted by the
  native source acquisition lane. Verification signal:
  `TEST-UNIT-RSHOSTNATIVEPROBE-006`.
- `VHS-REQ-551`: The probe MUST produce only public-safe native acquisition
  observations without raw registry output, raw private paths, or arbitrary
  environment data.

## Fail-Closed Requirements

The probe MUST fail closed for missing selection facts, unsupported provider,
unsupported platform, unsupported LabVIEW version, missing source surface,
ambiguous source surface, malformed source surface, probe errors, contaminated
source surfaces, raw registry output, private path disclosure attempts, and
probe unavailability.

## Out Of Scope

Runtime validation execution, compare execution, LabVIEWCLI command execution,
Docker command execution or orchestration, Docker image inspection, container
source discovery, broad PATH or environment probing, arbitrary filesystem
walking, source copying, launcher/profile mutation, release automation, package
publication, and Marketplace publication remain out of scope.
