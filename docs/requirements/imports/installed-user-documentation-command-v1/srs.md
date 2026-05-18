# Imported Software Requirements Slice: Installed-User Documentation Command

## Document Control

- Slice ID: `installed-user-documentation-command-v1`
- Source baseline: `v1.3.16`
- Target feature: `installed-user-documentation-command-v1`
- Import status: public-safe requirements core

## Software Requirements

| ID | Requirement | Rationale | Fit Criterion | Verification |
| --- | --- | --- | --- | --- |
| VHS-REQ-368 | The repository shall retain a generated bundled documentation manifest and extension-user page set. | The documentation command needs a local public-safe payload before implementation can open it. | The MIT authority has a bundled docs manifest contract and at least one extension-user page contract. | Unit test and static inspection |
| VHS-REQ-369 | The extension shall expose `labviewViHistory.openDocumentation` as a first-class command that opens or reports local bundled documentation without repository access. | The installed-user help path should be available from the command palette and independent of private authority surfaces. | The Open Documentation command has a registered handler and does not require Git, LabVIEWCLI, Docker, package, or Marketplace behavior. | Unit test |
| VHS-REQ-489 | Bundled installed-user documentation shall be public-safe: no private authority links, private evidence, local filesystem paths, or standards-only control-plane pages. | The MIT repository is public and clean-room, so bundled docs must stay public-safe. | Public redaction and bundled-doc contract tests reject private or authority-only content. | Unit test and redaction scan |
| VHS-REQ-594 | The extension manifest shall retain `onCommand:labviewViHistory.openDocumentation` and a contributed command titled `Open Documentation`. | The command must stay explicit and startup-free. | `package.json` keeps the explicit activation event and command contribution. | Static inspection |

## Public Command Contract

| Entrypoint | Public-safe contract |
| --- | --- |
| Documentation command | `labviewViHistory.openDocumentation` opens or reports a local public-safe bundled documentation surface after an IAU admits implementation. |
| Primary command | `labviewViHistory.open` remains separate from documentation behavior. |
| Runtime settings command | `labviewViHistory.prepareLocalRuntimeSettingsCli` remains blocked until a separate runtime-settings IAU admits it. |

## Import Notes

This slice deliberately narrows the next implementation unit to the
installed-user documentation command and bundled documentation contract. It
does not admit runtime settings CLI materialization, compare execution, VSIX
packaging, Marketplace publication, or source copying.
