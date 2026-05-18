# Imported SyRS: Runtime Settings CLI Bootstrap

## Scope

This public MIT slice defines the installed-user command surface for preparing a
terminal-usable runtime settings CLI bootstrap contract.

The first admitted unit is limited to a clean-room prepare-command shell. It may
report launcher materialization and recovery facts. It must not mutate settings,
run validation, start compare execution, invoke LabVIEWCLI, invoke Docker,
package a VSIX, publish to Marketplace, or copy implementation source from
another VI History authority.

## System-Level Requirements

| ID | Requirement |
| --- | --- |
| VHS-REQ-537 | The installed-user settings surface exposes `vihs` as the terminal-facing settings entrypoint without forcing hidden-path reconstruction, profile editing, admin elevation, machine-wide install doctrine, or a prebuilt external CLI payload. |
| VHS-REQ-544 | The bare `vihs` terminal entrypoint makes runtime dependency and recovery explicit, including stale or missing launcher recovery guidance. |
| VHS-REQ-594 | The extension manifest retains explicit activation for `labviewViHistory.prepareLocalRuntimeSettingsCli`. |
