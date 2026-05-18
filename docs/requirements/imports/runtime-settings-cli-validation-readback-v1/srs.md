# Imported SRS: Runtime Settings CLI Validation Readback

## Functional Requirements

| ID | Requirement | Fit Criterion |
| --- | --- | --- |
| VHS-REQ-543 | The validation readback contract must make the effective settings target explicit while preserving the settings-write slice boundary. | Tests prove validation output names the effective settings target without mutating settings content. |
| VHS-REQ-546 | The installed-user `vihs` surface must expose one governed validation action through `vihs --validate`, reporting persisted provider, LabVIEW version, LabVIEW bitness, and runtime-validation outcome without reopening path-picking, image-family selection, or a panel-side provider picker. | The public MIT feature defines a pure validation readback contract that accepts persisted settings facts and runtime outcome facts, returns a deterministic validation result, and keeps execution and proof-out generation blocked. |

## Blocked Scope

The first IAU does not admit no-argument interactive selection, `--proof-out`
file generation, compare execution, LabVIEWCLI command execution, Docker
command execution or orchestration, live already-running VS Code session uptake
proof, packaging, Marketplace publication, or source copying.
