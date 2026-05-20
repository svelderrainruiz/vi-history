# SyRS: Runtime Settings CLI Validation Host Runtime Observation Source Adapter

This public MIT slice defines the bounded host runtime observation source
adapter that can produce public-safe observation dependency facts for the
already admitted `createRuntimeSettingsValidationHostRuntimeObservation(input =
{})` contract.

| ID | System Requirement | Verification |
| --- | --- | --- |
| VHS-REQ-095 | The validation surface needs bounded Windows source facts from admitted registry-view observations so host runtime observation can reason about installed LabVIEW 2025-or-newer surfaces without raw registry output or raw private path disclosure. | Unit tests provide public-safe Windows source facts and verify sanitized observation dependency facts, malformed source failure, private-path rejection, and no LabVIEWCLI execution. |
| VHS-REQ-096 | The validation surface needs bounded Linux documented-root source facts while macOS remains unavailable for host runtime validation. | Unit tests provide public-safe Linux documented-root source facts, deterministic macOS unavailable facts, and no arbitrary filesystem walking. |
| VHS-REQ-532 | Source adapter output must feed the existing host runtime observation, discovery, and preflight chain for exactly one compatible host LabVIEW plus LabVIEWCLI surface or deterministic fail-closed outcomes. | Unit tests compose source adapter output into observation, discovery, preflight, runtime outcome, readback, and validation command contracts. |
| VHS-REQ-546 | Validation command composition must remain pure unless separately admitted; source adapter facts must not run validation or mutate proof-out behavior. | Unit tests prove runtime validation execution, compare execution, LabVIEWCLI execution, Docker execution, terminal wiring, file writes, release automation, Marketplace work, and source copying remain blocked. |
| VHS-REQ-550 | The Windows x64 host-validation route needs to accept the governed mixed-bitness bundle when source facts show LabVIEW 2026 x64 plus the canonical installed x86 LabVIEWCLI surface. | Unit tests prove that sanitized Windows 2026 x64 source facts can become ready through observation, discovery, and preflight. |

Docker provider selection remains the latest supported NI LabVIEW image family,
64-bit-only by image/platform, with no user-facing Docker bitness choice and no
Docker command execution or orchestration in this slice.

Implementation sharing is `none`. This slice imports requirements only; it does
not copy source from another VI History product line.
