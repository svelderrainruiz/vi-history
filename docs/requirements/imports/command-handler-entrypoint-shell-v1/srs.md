# Imported Software Requirements Slice: Command Handler Entrypoint Shell

## Document Control

- Slice ID: `command-handler-entrypoint-shell-v1`
- Source baseline: `v1.3.16`
- Target feature: `command-handler-entrypoint-shell-v1`
- Import status: public-safe requirements core

## Software Requirements

| ID | Requirement | Rationale | Fit Criterion | Verification |
| --- | --- | --- | --- | --- |
| VHS-REQ-082 | The extension shall register its primary command under the authoritative command identifier `labviewViHistory.open`. | The product command identity must stay stable for command wiring and activation. | The manifest and activation events declare `labviewViHistory.open` and the extension registers that command at runtime. | Unit test and static inspection |
| VHS-REQ-083 | The extension manifest shall avoid startup activation. | First-time installed-user selection, docs, and CLI preparation should not trigger GitHub authorization, Git indexing, LabVIEW, or `LabVIEWCLI`. | The manifest excludes `onStartupFinished` and manifest-level Git activation. | Unit test and static inspection |
| VHS-REQ-594 | The extension manifest shall retain explicit command activation events for `VI History`, `Open Documentation`, and `Prepare Local Runtime Settings CLI`. | Installed users still need command-driven activation for the real product surface, documentation route, and runtime-settings CLI preparation after startup activation is removed. | The manifest retains `onCommand:labviewViHistory.open`, `onCommand:labviewViHistory.openDocumentation`, and `onCommand:labviewViHistory.prepareLocalRuntimeSettingsCli`. | Unit test and static inspection |

## Public Command Entrypoints

| Entrypoint | Public-safe contract |
| --- | --- |
| Primary command | `labviewViHistory.open` is the first command-handler entrypoint admitted for shell registration. |
| Documentation command | `labviewViHistory.openDocumentation` remains activation/contribution metadata only until a later documentation-rendering IAU. |
| Runtime settings command | `labviewViHistory.prepareLocalRuntimeSettingsCli` remains activation/contribution metadata only until a later runtime-settings CLI IAU. |

## Import Notes

This slice deliberately narrows the next implementation unit to an entrypoint
shell. It does not admit documentation rendering, runtime settings CLI
materialization, compare execution, VSIX packaging, Marketplace publication, or
source copying.

