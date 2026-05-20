# SyRS: Runtime Settings CLI Validation Host Runtime Observation Source Acquisition

This public MIT slice defines the bounded source-acquisition step that can
produce public-safe host runtime observation source facts for the already
implemented host runtime observation source adapter. It does not admit runtime
execution, command execution, registry raw output retention, arbitrary
filesystem walking, or private path disclosure.

| Requirement ID | Need | Public MIT System Response | Verification |
| --- | --- | --- | --- |
| VHS-REQ-095 | The validation surface needs bounded Windows source facts from admitted native host surfaces so host runtime observation can reason about installed LabVIEW 2025-or-newer surfaces without raw registry output or private path disclosure. | A source-acquisition adapter accepts public-safe bounded Windows acquisition dependency facts and emits sanitized registry-view source facts for the source-adapter chain. | Unit tests provide bounded Windows acquisition dependency facts and verify sanitized source facts, malformed dependency failure, private-path rejection, and no LabVIEWCLI execution. |
| VHS-REQ-096 | Linux documented-root host observation needs deterministic public-safe source facts without arbitrary filesystem walking or raw installed path disclosure. | The source-acquisition adapter accepts public-safe documented-root acquisition dependency facts and emits deterministic documented-root source facts for supported Linux host selections. | Unit tests prove Linux documented-root acquisition dependency facts become sanitized source facts and macOS remains unavailable. |
| VHS-REQ-532 | Source acquisition must feed the existing source adapter, observation, discovery, and preflight chain for exactly one compatible host LabVIEW plus LabVIEWCLI surface or deterministic fail-closed outcomes. | Source acquisition output composes into `createRuntimeSettingsValidationHostRuntimeObservationSourceAdapter(input = {})` and the existing validation command chain without output-shape redesign. | Unit tests compose acquisition output into source adapter, observation, discovery, preflight, runtime outcome, readback, proof, proof-out, validation command, and `validate-plan-only` contracts. |
| VHS-REQ-546 | Validation command composition must remain pure unless separately admitted; source acquisition must not run validation or mutate proof-out behavior. | Source acquisition returns deterministic facts and blocked side-effect facts. Runtime validation execution, compare, LabVIEWCLI, Docker, terminal process wiring, proof expansion, file writes, release, publication, and source-copying behavior remain blocked. | Unit tests verify blocked side effects and unchanged command-result behavior. |
| VHS-REQ-550 | The Windows x64 host-validation route needs to preserve the governed mixed-bitness bundle when acquired facts show LabVIEW 2026 x64 plus the canonical installed x86 LabVIEWCLI surface. | Bounded Windows acquisition dependency facts may produce a single compatible LabVIEW 2026 x64 plus canonical installed x86 LabVIEWCLI source fact for the existing preflight chain. | Unit tests prove sanitized Windows 2026 x64 acquisition facts can become ready through source adapter, observation, discovery, and preflight. |

Docker provider selection remains the latest supported NI LabVIEW image family,
64-bit-only by image/platform, with no user-facing Docker bitness choice and no
Docker command execution or orchestration in this slice.
