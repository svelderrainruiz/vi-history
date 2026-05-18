# Imported SRS: Runtime Settings CLI Settings Write

## Functional Requirements

| ID | Requirement | Fit Criterion |
| --- | --- | --- |
| VHS-REQ-537 | The installed-user runtime settings surface must write provider, LabVIEW version, and LabVIEW bitness facts through the terminal-facing `vihs` contract without hidden launcher reconstruction, admin elevation, machine-wide installation doctrine, or prebuilt external CLI payloads. | The public MIT feature defines a settings-write contract that accepts provider/version/bitness input and produces updated settings content plus explicit target facts. |
| VHS-REQ-543 | The settings-write contract must make the effective settings target explicit, preserve unrelated settings content, update only `viHistorySuite.runtimeProvider`, `viHistorySuite.labviewVersion`, and `viHistorySuite.labviewBitness`, and fail closed when the target cannot be treated as one mutable settings object. | Tests prove unrelated settings remain unchanged, governed keys are updated exactly, comments or trailing commas are handled when admitted by the public spec, and unsupported target shapes fail closed. |

## Blocked Scope

The first IAU does not admit `vihs --validate`, runtime validation, no-argument
interactive selection, compare execution, LabVIEWCLI command execution, Docker
command execution or orchestration, live already-running VS Code session uptake
proof, packaging, Marketplace publication, or source copying.
