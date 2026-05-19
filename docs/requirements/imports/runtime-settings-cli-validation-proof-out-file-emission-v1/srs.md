# Software Requirements Import: Runtime Settings CLI Validation Proof-Out File Emission

| Requirement ID | Imported requirement | Public MIT interpretation |
| --- | --- | --- |
| VHS-REQ-546 | The installed-user `vihs` surface exposes one governed validation action through `vihs --validate`, reporting persisted provider/version/bitness truth plus runtime-validation outcome without reopening path-picking, image-family selection, or a general panel-side provider picker. | The public MIT feature admits only deterministic file emission for `vihs --validate --proof-out <dir>` from a ready `runtime-settings-cli-validation-proof-out-adapter-contract`: create a supported output directory when safe, write exactly `vihs-validation-proof.json` and `vihs-validation-issue.md`, and report deterministic write-result facts. |

Supporting governed test signal `TEST-UNIT-392` verifies that
`vihs --validate --proof-out` writes a runtime proof packet and GitHub-ready
issue body while retaining stable `runtimeErrorCode`, `runtimeProofStatus`, and
`runtimeImplementationStatus` values. This slice imports only the file-emission
portion from already supplied proof-out adapter payload facts.

Prerequisite IDs `VHS-REQ-537`, `VHS-REQ-544`, and `VHS-REQ-545` are referenced
only for the already implemented terminal entrypoint, runtime lookup,
no-argument terminal selection, and validation handoff contracts. The completed
public MIT validation proof-out adapter is also a prerequisite. This slice does
not redefine those requirements or generate new validation facts.

The first IAU does not admit runtime validation execution, new validation fact
generation, compare execution, LabVIEWCLI execution, Docker command execution
or orchestration, live terminal proof, package/bin publication,
launcher/profile mutation, Marketplace work, or source copying.
