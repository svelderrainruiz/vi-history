<!-- SPECKIT START -->
For additional context about technologies to be used, project structure,
shell commands, and other important information, read the current plan
<!-- SPECKIT END -->

# Repository Guidance

This repository is the MIT clean-room Spec Kit implementation authority for
`svelderrainruiz.vi-history`.

Use imported requirements under `docs/requirements/imports/` and Spec Kit
artifacts as the authority for feature work. Do not copy implementation source,
private evidence, local control-plane scripts, or credential handling from any
other VI History product line.

The integration branch is `develop`; feature work targets `develop` before
promotion to `main`.

Marketplace publication is disabled until a later governing decision admits a
release channel.

Implementation for `runtime-contract-host-provider-v1` begins only after a
named Implementation Admission Unit has a preflight record with `status: pass`.
The current unit is `IAU-runtime-contract-explicit-compare-v1`, covering tasks
`T012` through `T015`, and its preflight is `pass`. Tasks `T016` through
`T030` remain blocked until that IAU merges.

For Copilot local or web implementation work, read
`docs/development/copilot-workflow.md` before changing code. It names the
current public source files, admitted task scope, blocked scope, and validation
commands.

When running generated Spec Kit helpers from a governed `codex/...` branch, set
both environment variables so branch validation resolves the pinned feature:

```bash
SPECIFY_FEATURE=001-runtime-contract-host-provider-v1 \
SPECIFY_FEATURE_DIRECTORY=.specify/specs/runtime-contract-host-provider-v1 \
.specify/scripts/bash/check-prerequisites.sh --json --paths-only
```
