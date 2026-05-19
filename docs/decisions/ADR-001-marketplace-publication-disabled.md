# ADR-001: Marketplace Publication Disabled

**Status**: Accepted, superseded in part by ADR-002 for local VSIX artifact
packaging
**Date**: 2026-05-17  
**Issue**: [#5](https://github.com/svelderrainruiz/vi-history/issues/5)

## Context

The `svelderrainruiz.vi-history` extension identity is modeled in this
repository for future compatibility, including publisher metadata, extension ID,
and version. The `runtime-contract-host-provider-v1` slice completed all
admitted tasks from `T007` through `T030`, and the implementation loop closed
under Issue #4.

No Marketplace publication work has been admitted. Release credentials, VSIX
publishing workflows, and Marketplace release gates are outside the public
implementation baseline.

ADR-002 separately admits local/CI VSIX artifact packaging. That artifact lane
does not publish, release, upload, or create a Marketplace channel.

## Decision

Marketplace publication is out of scope for the `svelderrainruiz.vi-history`
extension in this repository.

This repository stays MIT, public, and Spec Kit-first. Any future Marketplace
channel would require separate governance outside the current repo scope before
publication implementation begins.

## Consequences

- Historical admission records may resolve Marketplace posture to disabled.
- New admission records resolve Marketplace posture to out of scope.
- The Marketplace posture summary remains in
  `docs/governance/marketplace-posture.md`.
- LabVIEWCLI command execution, Docker orchestration, Marketplace publication,
  and source copying remain blocked until separately admitted.

## Alternatives Considered

**Enable Marketplace immediately**: Rejected. The repo does not own a
Marketplace publication channel or credential flow.

**Defer without documentation**: Rejected. Issue #5 exists to close the public
Marketplace posture decision.
