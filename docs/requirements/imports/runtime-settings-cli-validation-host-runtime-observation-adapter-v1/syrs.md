# SyRS: Runtime Settings CLI Validation Host Runtime Observation Adapter

This public MIT slice defines a bounded host runtime observation adapter for
the installed-user `vihs --validate` surface. The adapter produces
public-safe observation facts for the existing host runtime discovery contract.

## Imported Scope

| ID | Public-safe system need | Public validation route |
| --- | --- | --- |
| VHS-REQ-095 | The validation surface needs a governed way to create bounded Windows observation facts from admitted registry-view and documented-root inputs without retaining raw registry output or exact private installed paths. | Unit tests provide sanitized Windows observation inputs and verify source-class, candidate-count, availability, executable-role, version, bitness, and fail-closed facts. |
| VHS-REQ-096 | The validation surface needs deterministic documented-root observation facts for Linux and deterministic unavailable facts for macOS without widening into arbitrary filesystem walking or execution. | Unit tests provide bounded documented-root observation dependencies and verify Linux observation facts plus macOS unavailable facts. |
| VHS-REQ-532 | Observation facts must feed the existing host runtime discovery contract so discovery can continue to produce exactly one compatible host candidate or deterministic fail-closed outcomes. | Unit tests compose observation output into `createRuntimeSettingsValidationHostRuntimeDiscovery(input = {})` and host preflight. |
| VHS-REQ-546 | The `vihs --validate` command needs observation facts that can continue through the existing discovery, preflight, runtime outcome, readback, proof artifact, proof-out, file-emission, command, and plan-only chain. | Unit tests compose generated observation facts through the existing validation command contracts without output-shape redesign. |
| VHS-REQ-550 | The Windows x64 host-validation route needs to preserve the governed mixed-bitness bundle when observation facts show LabVIEW 2026 x64 plus the canonical installed x86 LabVIEWCLI surface. | Unit tests prove that sanitized Windows 2026 x64 observation facts can feed discovery and preflight for the mixed-bitness host rule. |

## Boundary

This slice imports host runtime observation facts only. It admits shaping
supplied bounded observation dependencies into public-safe facts for the
existing host runtime discovery contract. It does not retain raw registry
output, disclose exact private installed paths, walk arbitrary filesystems,
probe PATH, read environment state, invoke the existing compare runtime locator
as an implementation shortcut, run runtime validation, execute compare, call
LabVIEWCLI, call Docker, orchestrate containers, wire raw terminal processes,
expand proof-out behavior, write files, publish packages, mutate launchers or
profiles, perform Marketplace work, run release automation, or copy source.

Docker provider selection remains out of scope for this host lane. Docker
wording stays corrected: Docker uses the latest supported NI LabVIEW image
family and is 64-bit-only by image/platform; there is no user-facing Docker
bitness choice.
