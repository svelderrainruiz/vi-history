# SRS Import: Extension VSIX Packaging Artifact

Slice: `extension-vsix-packaging-artifact-v1`

## Software Requirements

- **VHS-REQ-596**: The package manifest must expose VS Code extension package
  metadata required for local VSIX packaging: `main`, `engines.vscode`,
  command activation events, command contributions, and local package scripts.
- **VHS-REQ-597**: The package ignore policy must keep the VSIX contents to
  the public extension runtime files: `package.json`, `src/extension.mjs`,
  `README.md`, `LICENSE`, and `docs/installed-user/**`.
- **VHS-REQ-598**: Package scripts and repository workflows must not publish to
  Visual Studio Marketplace, Open VSX, npm, GitHub Releases, or any package
  registry.
- **VHS-REQ-599**: A deterministic inspection command must validate
  `dist/vi-history-0.1.0.vsix` after packaging and reject forbidden package
  entries.
- **VHS-REQ-600**: Packaging must remain independent from runtime behavior and
  must not execute compare, LabVIEWCLI, Docker, runtime validation, launcher
  mutation, release, or source-copying work.

## Interfaces

- `npm run package:vsix` creates `dist/vi-history-0.1.0.vsix`.
- `npm run inspect:vsix` inspects the generated artifact.
- `.vscodeignore` defines package exclusions.

## Blocked Interfaces

The repository must not add `vsce publish`, `ovsx publish`, Marketplace tokens,
release-upload workflows, package registry publication, or external publication
automation.
