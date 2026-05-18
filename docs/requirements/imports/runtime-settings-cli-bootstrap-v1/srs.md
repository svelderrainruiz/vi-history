# Imported SRS: Runtime Settings CLI Bootstrap

## Functional Requirements

| ID | Requirement | Fit Criterion |
| --- | --- | --- |
| VHS-REQ-537 | The installed-user runtime settings surface must expose a terminal-facing `vihs` bootstrap path without hidden launcher reconstruction, profile editing, admin elevation, machine-wide installation doctrine, or prebuilt external CLI payloads. | The public MIT feature defines a prepare-command shell that reports the intended terminal entrypoint and recovery facts while keeping settings mutation blocked. |
| VHS-REQ-544 | The runtime settings CLI entrypoint must make runtime dependency and recovery behavior explicit. | The prepare-command shell reports whether the launcher surface is prepared, which recovery action applies when stale or missing, and does not depend on silent runtime assumptions. |
| VHS-REQ-594 | The manifest must retain the `onCommand:labviewViHistory.prepareLocalRuntimeSettingsCli` activation event and contributed command metadata. | The command remains explicitly activated and is implemented only after an admitted IAU preflight passes. |

## Blocked Scope

The first IAU does not admit provider/version/bitness settings mutation,
JSONC settings rewrite, `vihs --validate`, runtime validation, compare
execution, LabVIEWCLI command execution, Docker command execution or
orchestration, packaging, Marketplace publication, or source copying.
