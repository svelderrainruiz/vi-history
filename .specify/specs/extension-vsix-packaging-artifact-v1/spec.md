# Feature Specification: Extension VSIX Packaging Artifact

**Feature Branch**: `codex/extension-vsix-packaging-artifact`

**Created**: 2026-05-19

**Status**: Implemented

**Input**: Public authorization for local/CI VSIX package artifact generation.

## User Scenarios & Testing

### Primary User Story

As a maintainer of the public MIT extension authority, I need a deterministic
local VSIX package artifact so the repository can validate installable extension
contents without publishing to a Marketplace or adding release automation.

### Acceptance Scenarios

1. Given the public package manifest, when packaging is requested, then
   `dist/vi-history-0.1.0.vsix` is produced locally.
2. Given the generated VSIX, when inspection runs, then runtime files,
   README, license, and bundled installed-user documentation are present.
3. Given the generated VSIX, when inspection runs, then Spec Kit artifacts,
   requirements/admissions, governance docs, tests, scripts, caches, git
   metadata, lockfiles, and generated artifacts are absent.
4. Given repository scripts, when validation scans them, then no Marketplace,
   Open VSX, registry publication, token, release upload, or publish command is
   present.

## Requirements

- **REQ-001**: The feature MUST admit
  `IAU-extension-vsix-packaging-artifact-v1` for T009-T014 only.
- **REQ-002**: The package manifest MUST define `main`, `engines.vscode`,
  local `package:vsix`, and local `inspect:vsix` scripts.
- **REQ-003**: The package manifest MUST NOT define publish, Open VSX,
  Marketplace, registry, or release-upload scripts.
- **REQ-004**: The VSIX MUST include `package.json`, `src/extension.mjs`,
  `README.md`, `LICENSE`, and `docs/installed-user/**`.
- **REQ-005**: The VSIX MUST exclude `.specify/**`, `docs/requirements/**`,
  `docs/decisions/**`, `docs/governance/**`, tests, scripts, caches, generated
  artifacts, git metadata, and lockfiles.
- **REQ-006**: Marketplace publication, release tokens, `vsce publish`, Open
  VSX publication, and Marketplace workflows are out of scope for this repo.
- **REQ-007**: Runtime validation execution, compare execution, LabVIEWCLI
  execution, Docker execution, launcher/profile mutation, source copying,
  package registry publication, release automation, and Marketplace behavior
  remain blocked.

## Current Implementation Admission Unit

Current Implementation Admission Unit is `none`.

`IAU-extension-vsix-packaging-artifact-v1` is implemented for T009-T014.
