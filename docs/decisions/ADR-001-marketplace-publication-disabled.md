# ADR-001: Marketplace Publication Disabled

**Status**: Accepted  
**Date**: 2026-05-17  
**Issue**: [#5](https://github.com/svelderrainruiz/vi-history/issues/5)

## Context

The `svelderrainruiz.vi-history` extension identity is modeled in this
repository for future compatibility, including publisher metadata, extension ID,
and version. The `runtime-contract-host-provider-v1` slice completed all
admitted tasks from `T007` through `T030`, and the implementation loop closed
under Issue #4.

No Marketplace publication work has been admitted. Release credentials,
packaging automation, VSIX publishing workflows, and Marketplace release gates
are outside the current public implementation baseline.

## Decision

Marketplace publication remains disabled for the `svelderrainruiz.vi-history`
extension.

This repository stays MIT, public, and Spec Kit-first. A future Marketplace
channel must start as governance work and explicitly supersede this ADR before
any publication or packaging implementation begins.

## Consequences

- Existing admission records resolve Marketplace posture to disabled.
- The Marketplace posture summary remains in
  `docs/governance/marketplace-posture.md`.
- Future Marketplace work must name the product surface to publish, update
  public release docs, define validation gates, and keep credentials out of the
  repo.
- LabVIEWCLI command execution, Docker orchestration, Marketplace publication,
  and source copying remain blocked until separately admitted.

## Alternatives Considered

**Enable Marketplace immediately**: Rejected. The repo does not yet have a
governed release channel, packaging gates, or credential handling.

**Defer without documentation**: Rejected. Issue #5 exists to close the public
Marketplace posture decision.
