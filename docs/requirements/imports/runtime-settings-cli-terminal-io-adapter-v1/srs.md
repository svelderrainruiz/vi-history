# Imported SRS: Runtime Settings CLI Terminal I/O Adapter

## Functional Requirements

| ID | Requirement | Fit Criterion |
| --- | --- | --- |
| VHS-REQ-545 | Bare `vihs` must remain discoverable in a terminal session when invoked without arguments, including interactive Enter confirmation, guided supported host provider/platform/version/bitness selection, Docker provider selection through the latest supported NI LabVIEW Docker image family, non-interactive copyable guidance, and fail-closed unsupported input behavior. | The public MIT feature defines deterministic terminal session adapter facts around the already implemented prompt-loop contract without adding runtime execution, Docker orchestration, package/bin publication, launcher/profile mutation, or Marketplace behavior. |
| VHS-REQ-546 | The terminal confirmation flow may hand off to the existing bounded `vihs --validate` contract after settings are confirmed. | The public MIT feature defines validation handoff facts while keeping runtime validation execution and proof-out expansion outside this IAU. |

## Prerequisite Requirements

`VHS-REQ-537` and `VHS-REQ-544` are prerequisites satisfied by earlier admitted
runtime settings CLI entrypoint, settings, and prompt-loop work. This slice may
reference the already implemented materialized `vihs` entrypoint, explicit
runtime recovery facts, and pure prompt-loop contract, but it does not
re-import or reimplement those units.

## Docker Provider Image Facts

Docker provider selection resolves through the latest supported NI LabVIEW
Docker image family. The current governed Linux default maps to the LabVIEW
2026 image family. NI LabVIEW Docker images are 64-bit-only by image/platform,
so unsupported bitness means there is no Docker bitness choice, not that users
choose `x64`.

## Supporting Verification Signal

`TEST-UNIT-353` verifies no-argument discoverability, default settings, current
bundle reporting, copyable next commands, Enter-through confirmation, guided
selection, latest supported NI LabVIEW Docker image selection without a Docker
bitness choice, and fail-closed unsupported-path guidance.

`TEST-UNIT-354` verifies that validation handoff uses the bounded
`vihs --validate` contract after confirmation without reopening path-picking or
a panel-side provider picker.

## Blocked Scope

This IAU does not admit compare execution, LabVIEWCLI command execution,
Docker command execution or orchestration, proof-out expansion beyond already
admitted contracts, live-session proof, package/bin publication,
launcher/profile mutation, Marketplace publication, or source copying.
