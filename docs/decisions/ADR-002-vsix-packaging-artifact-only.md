# ADR-002: VSIX Packaging Artifact Only

**Status**: Accepted
**Date**: 2026-05-19

## Context

The public MIT authority needs a deterministic local/CI `.vsix` artifact so the
extension contents can be validated as an installable package. The earlier
Marketplace posture grouped package creation and publication together. The
current authorization separates those concerns.

## Decision

This repository admits local VSIX artifact creation only.

The admitted artifact is `dist/vi-history-0.1.0.vsix`, created by
`npm run package:vsix` and inspected by `npm run inspect:vsix`.

Marketplace publication is out of scope for this repository. Release tokens,
`vsce publish`, Open VSX publication, Marketplace workflows, release uploads,
and package registry publication are not admitted.

## Consequences

- `extension-vsix-packaging-artifact-v1` records the requirements and IAU for
  local artifact packaging.
- `.vscodeignore` and the inspection script define package boundaries.
- The VSIX excludes Spec Kit artifacts, requirements/admissions, governance
  docs, tests, scripts, caches, generated artifacts, git metadata, and lockfile
  content.
- Runtime validation execution, compare execution, LabVIEWCLI execution,
  Docker execution, launcher/profile mutation, release automation, and source
  copying remain outside this IAU.

## Alternatives Considered

**Continue blocking all packaging**: Rejected. Local artifact inspection is now
authorized and useful for installability validation.

**Add Marketplace publication**: Rejected. Marketplace publication is outside
this repository's scope.
