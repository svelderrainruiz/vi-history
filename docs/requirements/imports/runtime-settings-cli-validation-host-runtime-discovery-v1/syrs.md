# SyRS: Runtime Settings CLI Validation Host Runtime Discovery

This public MIT slice defines the bounded host runtime discovery facts adapter
for the installed-user `vihs --validate` surface.

## Imported Scope

| ID | Public-safe system need | Public validation route |
| --- | --- | --- |
| VHS-REQ-095 | The validation surface needs bounded Windows discovery facts from registry-view and documented-root observations so host runtime preflight can reason about installed LabVIEW 2025-or-newer surfaces without raw private path disclosure. | Unit tests provide public-safe Windows discovery observations and verify normalized candidate facts, malformed observation failure, unsupported-version failure, and no LabVIEWCLI execution. |
| VHS-REQ-096 | The validation surface needs deterministic Linux documented-root discovery and macOS availability constraints without widening into arbitrary filesystem walking or execution. | Unit tests provide bounded discovery dependencies and verify Linux candidate facts plus macOS unavailable facts. |
| VHS-REQ-532 | Discovered host candidate facts must feed the existing host runtime preflight rule that requires exactly one compatible LabVIEW plus LabVIEWCLI candidate. | Unit tests compose discovery output into the host runtime preflight contract for ready, missing, ambiguous, incompatible, and contaminated outcomes. |
| VHS-REQ-546 | The `vihs --validate` command needs discovered runtime candidate facts that can continue through the existing runtime outcome, readback, proof artifact, proof-out, file-emission, command, and plan-only chain. | Unit tests compose discovered candidates into the existing validation command contracts without output-shape redesign. |
| VHS-REQ-550 | The Windows x64 host-validation route needs to accept the governed mixed-bitness bundle when discovery finds LabVIEW 2026 x64 plus the canonical installed x86 LabVIEWCLI surface. | Unit tests prove that the discovered Windows 2026 x64 LabVIEW candidate plus canonical x86 LabVIEWCLI candidate can become ready through host preflight. |

## Boundary

This slice imports host runtime discovery facts only. It admits bounded
documented-root and Windows registry observation normalization into public-safe
candidate facts. It does not retain raw private installed paths in public
facts, walk arbitrary filesystems, probe PATH, read environment state, invoke
the existing compare runtime locator as an implementation shortcut, run runtime
validation, execute compare, call LabVIEWCLI, call Docker, orchestrate
containers, wire raw terminal processes, write files, publish packages, mutate
launchers or profiles, perform Marketplace work, run release automation, or
copy source.

Docker provider selection remains out of scope for this host lane. Docker
wording stays corrected: Docker uses the latest supported NI LabVIEW image
family and is 64-bit-only by image/platform; there is no user-facing Docker
bitness choice.
