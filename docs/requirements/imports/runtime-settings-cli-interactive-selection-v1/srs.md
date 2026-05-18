# Imported SRS: Runtime Settings CLI Interactive Selection

## Functional Requirements

| ID | Requirement | Fit Criterion |
| --- | --- | --- |
| VHS-REQ-545 | Bare `vihs` must present a no-argument installed-user selection surface that seeds missing settings to the governed default `host/windows/2026/x86`, reports the current provider/platform/version/bitness bundle, offers supported host and Docker choices, and emits copyable next-command guidance. | The public MIT feature defines a pure interactive-selection contract that produces deterministic selection state and guidance without terminal process prompt loops or runtime execution. |
| VHS-REQ-546 | The no-argument selection surface may reuse the public validation readback contract after confirmation, while keeping runtime validation facts explicit and fail-closed. | The public MIT feature defines confirmation and validation-handoff facts that reference the already admitted validation readback behavior without adding LabVIEWCLI, Docker, compare execution, or proof-out behavior. |

## Supporting Verification Signal

`TEST-UNIT-353` verifies default no-argument behavior, current bundle
reporting, supported host choices, Docker constraints, and fail-closed
unsupported selection guidance.

`TEST-UNIT-354` verifies that no-argument confirmation can hand off to the
same bounded validation contract as `vihs --validate` after settings are
persisted.

## Blocked Scope

The first IAU does not admit terminal process prompt loops, raw stdin handling,
proof-out file writing beyond the existing pure proof artifact contract,
compare execution, LabVIEWCLI command execution, Docker command execution or
orchestration, live already-running VS Code session uptake proof, packaging,
Marketplace publication, or source copying.
