# Packaging And Marketplace Posture

## Decision

`svelderrainruiz/vi-history` admits local VSIX artifact packaging only.
Marketplace publication is out of scope for this repository.

Formal ADRs:

- `docs/decisions/ADR-001-marketplace-publication-disabled.md`
- `docs/decisions/ADR-002-vsix-packaging-artifact-only.md`

This MIT authority may keep extension identity metadata for compatibility, but
it must not add Marketplace publication, release tokens, `vsce publish`, Open
VSX publication, Marketplace workflows, release uploads, or package registry
publication.

Local artifact packaging is admitted through
`extension-vsix-packaging-artifact-v1` and creates
`dist/vi-history-0.1.0.vsix`.

## Rationale

- The repository needs installable artifact validation without owning a
  publication channel.
- `svelderrainruiz/vi-history-suite` remains the Marketplace-continuity
  authority for the existing public extension line.
- Keeping this repository MIT, public, and Spec Kit-first is compatible with a
  local VSIX artifact and incompatible with hidden publication credentials.

## Boundaries

- `npm run package:vsix` may create a local `.vsix` artifact.
- `npm run inspect:vsix` must verify package contents.
- Publication commands and credentials remain out of scope.

No Marketplace publication workflow is admitted.
