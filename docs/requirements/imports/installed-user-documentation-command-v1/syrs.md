# Imported System Requirements Slice: Installed-User Documentation Command

## Document Control

- Slice ID: `installed-user-documentation-command-v1`
- Source baseline: `v1.3.16`
- Target feature: `installed-user-documentation-command-v1`
- Import status: public-safe requirements core

## System Requirements

| ID | Requirement | Rationale | Fit Criterion | Verification |
| --- | --- | --- | --- | --- |
| VHS-REQ-368 | The product shall retain a generated bundled documentation pack derived from the published user documentation set and curated to extension-user pages. | Installed users need local documentation without depending on repository access. | A bundled documentation manifest and page set exist for public extension-user content only. | Unit test and documentation review |
| VHS-REQ-369 | The product shall expose packaged version-matched bundled documentation through a first-class Open Documentation command without requiring repository access or private authority navigation. | Installed users should be able to open product help from the extension command surface. | Invoking `labviewViHistory.openDocumentation` opens or reports the bundled documentation surface without starting runtime behavior. | Unit test |
| VHS-REQ-489 | Bundled installed-user documentation shall exclude private authority preambles, private links, standards-only requirement text, and private evidence while keeping navigation inside the curated extension-user page set. | Public bundled docs must be safe to ship in an MIT authority and useful to installed users. | Bundled documentation validation rejects private links and authority-only content. | Unit test and redaction review |
| VHS-REQ-594 | The extension manifest shall retain explicit command activation for Open Documentation. | The documentation command must remain command-driven rather than startup-driven. | The manifest retains `onCommand:labviewViHistory.openDocumentation` and contributes the `Open Documentation` command. | Static inspection and unit test |

## Public Boundary

This import admits documentation-command requirements only. It does not admit
runtime settings CLI materialization, compare execution, LabVIEWCLI execution,
Docker execution, packaging, Marketplace publication, or source copying.
