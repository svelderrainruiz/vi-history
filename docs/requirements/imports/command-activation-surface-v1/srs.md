# Imported Software Requirements Slice: Command Activation Surface

## Document Control

- Slice ID: `command-activation-surface-v1`
- Source baseline: `v1.3.16`
- Target feature: `command-activation-surface-v1`
- Import status: public-safe requirements core

## Software Requirements

| ID | Requirement | Rationale | Fit Criterion | Verification |
| --- | --- | --- | --- | --- |
| VHS-REQ-594 | The extension manifest shall retain explicit command activation events for `VI History`, `Open Documentation`, and `Prepare Local Runtime Settings CLI`. | Installed users still need command-driven activation for the real product surface, documentation route, and runtime-settings CLI preparation after startup activation is removed. | The manifest retains `onCommand:labviewViHistory.open`, `onCommand:labviewViHistory.openDocumentation`, and `onCommand:labviewViHistory.prepareLocalRuntimeSettingsCli`. | Spec review, task review, public redaction scan, and future manifest contract tests if an IAU is admitted |

## Public Command Surface

| Surface | Public-safe contract |
| --- | --- |
| Primary command | `labviewViHistory.open` with title `VI History` |
| Documentation command | `labviewViHistory.openDocumentation` with title `Open Documentation` |
| Runtime settings command | `labviewViHistory.prepareLocalRuntimeSettingsCli` with title `Prepare Local Runtime Settings CLI` |

## Import Notes

This slice imports the command activation requirement only. It does not admit
runnable command handlers, packaged documentation rendering, runtime settings
CLI creation, compare execution, VSIX release automation, or Marketplace
publication.
