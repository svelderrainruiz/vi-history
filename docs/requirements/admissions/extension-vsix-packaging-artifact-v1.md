# Admission: Extension VSIX Packaging Artifact

Slice: `extension-vsix-packaging-artifact-v1`

State: implemented

Admission issue: Issue #137

Implementation handoff issue: Issue #136

Implementation PR: PR #138

## Scope

This admission implements local/CI VSIX package artifact creation only. The
admitted artifact is `dist/vi-history-0.1.0.vsix`.

## Implemented IAU

`IAU-extension-vsix-packaging-artifact-v1` implements T009-T014:

- package manifest fields for VSIX packaging
- local package and inspection scripts
- `.vscodeignore` package boundaries
- package metadata and ignore-rule tests
- generated VSIX inspection
- governance updates splitting VSIX packaging from Marketplace publication

Issue #137 must not be reused for implementation. Issue #136 is the
implementation handoff issue. PR #138 implements the IAU.

## Blocked Scope

Marketplace publication, release tokens, `vsce publish`, Open VSX publication,
Marketplace workflows, package registry publication, release automation,
runtime validation execution, compare execution, LabVIEWCLI execution, Docker
execution, launcher/profile mutation, and source copying remain outside this
IAU.
