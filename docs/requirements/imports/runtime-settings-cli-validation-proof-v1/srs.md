# Imported SRS: Runtime Settings CLI Validation Proof

## Functional Requirements

| ID | Requirement | Fit Criterion |
| --- | --- | --- |
| VHS-REQ-546 | The installed-user `vihs` validation surface must support public-safe proof artifact generation for `vihs --validate --proof-out`, retaining persisted provider/version/bitness truth, runtime outcome facts, stable error/proof/implementation status fields, and public-safe host/environment context. | The public MIT feature defines a pure proof-artifact contract that accepts validation readback facts, writes or returns deterministic proof JSON plus issue-body content, redacts secret-like environment values, and keeps execution behavior blocked. |

## Supporting Verification Signal

`TEST-UNIT-392` verifies that `vihs --validate --proof-out` writes a runtime
proof packet and GitHub-ready issue body while reporting stable
`runtimeErrorCode`, `runtimeProofStatus`, and `runtimeImplementationStatus`
values for success, failure, and not-yet-implemented paths.

## Blocked Scope

The first IAU does not admit no-argument interactive selection, compare
execution, LabVIEWCLI command execution, Docker command execution or
orchestration, live already-running VS Code session uptake proof, packaging,
Marketplace publication, or source copying.
