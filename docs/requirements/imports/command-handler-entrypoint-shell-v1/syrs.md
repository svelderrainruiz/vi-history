# Imported System Requirements Slice: Command Handler Entrypoint Shell

## Document Control

- Slice ID: `command-handler-entrypoint-shell-v1`
- Source baseline: `v1.3.16`
- Target feature: `command-handler-entrypoint-shell-v1`
- Import status: public-safe requirements core

## System Requirements

| ID | Requirement | Rationale | Fit Criterion | Verification |
| --- | --- | --- | --- | --- |
| VHS-REQ-083 | The extension manifest shall avoid startup activation. | First-time installed-user selection, docs, and CLI preparation should not trigger GitHub authorization, Git indexing, LabVIEW, or `LabVIEWCLI`. | The manifest excludes `onStartupFinished` and manifest-level Git activation. | Static inspection and entrypoint shell tests |
| VHS-REQ-594 | The extension manifest shall retain explicit command activation events for `VI History`, `Open Documentation`, and `Prepare Local Runtime Settings CLI`. | Installed users still need command-driven activation for the real product surface, documentation route, and runtime-settings CLI preparation after startup activation is removed. | The manifest retains the three explicit `onCommand:` activation events. | Static inspection and entrypoint shell tests |

## System Boundary

This slice admits only the public command entrypoint shell. It does not admit
documentation panel rendering, runtime settings CLI materialization, compare
execution, Docker orchestration, package publication, or Marketplace release
behavior.

