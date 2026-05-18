# Imported SyRS: Runtime Settings CLI Settings Write

## Scope

This public MIT slice defines the installed-user settings-write contract for
provider, LabVIEW version, and LabVIEW bitness facts.

The first admitted unit is limited to a clean-room settings-write contract. It
may update only the governed VI History settings facts, preserve unrelated
settings content, and report the effective settings target. It must not run
validation, start compare execution, invoke LabVIEWCLI, invoke Docker, prove
live already-running session uptake, package a VSIX, publish to Marketplace, or
copy implementation source from another VI History authority.

## System-Level Requirements

| ID | Requirement |
| --- | --- |
| VHS-REQ-537 | The installed-user settings contract exposes `vihs` as the terminal-facing settings surface that writes provider, LabVIEW version, and LabVIEW bitness facts without hidden-path reconstruction, admin elevation, machine-wide install doctrine, or a prebuilt external CLI payload. |
| VHS-REQ-543 | The installed-user settings contract supports governed settings targets that may contain comments or trailing commas, makes the effective target explicit, preserves unrelated settings content, and updates only the governed provider/version/bitness facts. |
