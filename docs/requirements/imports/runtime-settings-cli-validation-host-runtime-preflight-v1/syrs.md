# SyRS: Runtime Settings CLI Validation Host Runtime Preflight

This public MIT slice defines the bounded host runtime preflight facts adapter
for the installed-user `vihs --validate` surface.

## Imported Scope

| ID | Public-safe system need | Public validation route |
| --- | --- | --- |
| VHS-REQ-532 | The validation surface needs deterministic host preflight facts proving that a requested host LabVIEW version and bitness resolve to exactly one compatible LabVIEW plus LabVIEWCLI candidate before validation reports `ready`. | Unit tests provide supplied public-safe host candidate facts and verify ready, missing, ambiguous, and incompatible outcomes without OS scanning or command execution. |
| VHS-REQ-546 | The `vihs --validate` command needs generated runtime selection facts that can feed the existing runtime outcome, readback, proof artifact, proof-out adapter, file-emission, and plan-only chain. | Unit tests compose host preflight output into the existing validation command contracts without redesigning their output shapes. |
| VHS-REQ-550 | The Windows x64 host-validation route needs to accept the governed mixed-bitness bundle: LabVIEW 2026 x64 with the canonical installed x86 LabVIEWCLI surface. | Unit tests prove that the supplied Windows 2026 x64 LabVIEW candidate plus canonical x86 LabVIEWCLI candidate is ready instead of failing closed on CLI bitness alone. |

## Boundary

This slice imports host runtime preflight facts only. It accepts supplied
public-safe candidate facts; it does not inspect the OS, walk filesystems,
probe the registry, probe PATH, read environment state, discover private paths,
invoke runtime locators, run runtime validation, execute compare, call
LabVIEWCLI, call Docker, orchestrate containers, wire raw terminal processes,
write files from the preflight adapter, publish packages, mutate launchers or
profiles, perform Marketplace work, run release automation, or copy source.

Docker provider selection remains out of scope for this host lane. Docker
wording stays corrected: Docker uses the latest supported NI LabVIEW image
family and is 64-bit-only by image/platform; there is no user-facing Docker
bitness choice.
