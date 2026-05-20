# SyRS Import: Native Host Source Acquisition Dependency Adapter

Slice:
`runtime-settings-cli-validation-host-runtime-observation-native-source-acquisition-v1`

This public MIT import admits a bounded native host source-acquisition
dependency adapter. It exists after
`runtime-settings-cli-validation-host-runtime-observation-source-acquisition-v1`
proved that supplied native acquisition dependency facts can be transformed
into public-safe source facts.

## Imported System Requirements

- `VHS-REQ-095`: Windows host-native LabVIEW 2026 surfaces must be represented
  with public-safe facts and must not retain raw private paths or raw registry
  output.
- `VHS-REQ-096`: Linux host-native LabVIEW 2026 surfaces must be represented
  with public-safe facts from a documented bounded source surface.
- `VHS-REQ-532`: Runtime-settings validation host facts must compose with the
  existing validation command chain without changing public output shapes.
- `VHS-REQ-546`: Validation proof and proof-out composition must use
  deterministic public-safe facts.
- `VHS-REQ-550`: The Windows LabVIEW 2026 x64 host bundle may report canonical
  installed x86 LabVIEWCLI facts while preserving the selected x64 LabVIEW
  executable facts.

## System Boundary

The native source acquisition adapter may collect only governed dependency
facts for selected host-native LabVIEW 2026 surfaces. It may prepare dependency
facts consumable by
`createRuntimeSettingsValidationHostRuntimeObservationSourceAcquisition(input =
{})`.

The adapter must not execute LabVIEWCLI, compare, Docker, runtime validation,
or terminal processes. It must not copy source from any other VI History product
line. It must not introduce Marketplace publication or package registry
behavior.

## Public-Safe Output

Outputs must be deterministic and public-safe. Raw private installed paths, raw
registry output, broad environment data, and arbitrary filesystem details are
outside this import.

