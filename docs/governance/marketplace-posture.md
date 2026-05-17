# Marketplace Publication Posture

## Decision

`svelderrainruiz/vi-history` remains Marketplace-disabled.

This MIT authority may keep extension identity metadata for compatibility, but
it must not add Marketplace publication, packaging automation, release tokens,
or VSIX publishing workflows until a later ADR explicitly admits that channel.

## Rationale

- The repository has proven the runtime-contract foundation from locked public
  requirements, but it is not yet a complete Marketplace product.
- `svelderrainruiz/vi-history-suite` remains the Marketplace-continuity
  authority for the existing public extension line.
- Keeping this repository MIT, public, and Spec Kit-first is more valuable now
  than opening a second Marketplace release channel.

## Future Reconsideration

A future ADR for Marketplace publication must start as governance work, not
implementation. It must name the product surface to publish, update the
constitution and public release docs, define validation gates, and keep
credentials out of the repo.

Until that ADR lands, Marketplace publication remains blocked.

No publication workflow is admitted.
