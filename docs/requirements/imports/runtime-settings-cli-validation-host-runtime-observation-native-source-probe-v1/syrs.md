# SyRS Import: Native Host Source Surface Probe

Slice:
`runtime-settings-cli-validation-host-runtime-observation-native-source-probe-v1`

This public MIT import admits a bounded native host source-surface probe. It
exists after
`runtime-settings-cli-validation-host-runtime-observation-native-source-acquisition-v1`
proved that supplied native acquisition observations can be transformed into
public-safe acquisition dependency facts.

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
- `VHS-REQ-551`: Native host source surface probes must produce only public-safe
  observations consumable by the native source acquisition dependency adapter.

## System Boundary

The native source surface probe may probe only governed source surfaces for
selected host-native LabVIEW 2026 selections. It may produce observations
consumable by
`createRuntimeSettingsValidationHostRuntimeObservationNativeSourceAcquisition(input =
{})`.

The probe must not execute LabVIEWCLI, compare, Docker, runtime validation, or
terminal processes. It must not copy source from any other VI History product
line. It must not introduce Marketplace publication or package registry
behavior.

## Public-Safe Output

Outputs must be deterministic and public-safe. Raw private installed paths, raw
registry output, broad environment data, and arbitrary filesystem details are
outside this import.

