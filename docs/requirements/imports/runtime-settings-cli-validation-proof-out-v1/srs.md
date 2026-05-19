# Software Requirements Import: Runtime Settings CLI Validation Proof-Out Adapter

| Requirement ID | Imported requirement | Public MIT interpretation |
| --- | --- | --- |
| VHS-REQ-546 | The installed-user `vihs` surface exposes one governed validation action through `vihs --validate`, reporting persisted provider/version/bitness truth plus runtime-validation outcome without reopening path-picking, image-family selection, or a general panel-side provider picker. | The public MIT feature admits only a deterministic `vihs --validate --proof-out <dir>` adapter that writes or returns `vihs-validation-proof.json` and `vihs-validation-issue.md` from already supplied validation readback and validation proof-artifact facts. |

Supporting governed test signal `TEST-UNIT-392` verifies that
`vihs --validate --proof-out` writes a runtime proof packet and GitHub-ready
issue body while retaining stable `runtimeErrorCode`, `runtimeProofStatus`, and
`runtimeImplementationStatus` values.

Prerequisite IDs `VHS-REQ-537`, `VHS-REQ-544`, and `VHS-REQ-545` are referenced
only for the already implemented terminal entrypoint, runtime lookup, and
no-argument terminal selection contracts. This slice does not redefine those
requirements.

The first IAU does not admit runtime validation execution, compare execution,
LabVIEWCLI execution, Docker command execution or orchestration, live terminal
proof, package/bin publication, launcher/profile mutation, Marketplace work, or
source copying.
