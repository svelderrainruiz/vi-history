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

Marketplace publication is disabled. Future enablement requires a later ADR and
must not add release tokens, publishing automation, or Marketplace workflows
before that decision lands.

Implementation for `runtime-contract-host-provider-v1` is complete through
proof intake. No Implementation Admission Unit is currently admitted. Future
implementation begins only after a new named IAU has a public preflight record
with `status: pass`.

For Copilot local or web implementation work, read
`docs/development/copilot-workflow.md` before changing code. It explains that
future work must start from a new public bridge admission record.

When running generated Spec Kit helpers from a governed `codex/...` branch, set
both environment variables so branch validation resolves the pinned feature:

```bash
SPECIFY_FEATURE=001-runtime-contract-host-provider-v1 \
SPECIFY_FEATURE_DIRECTORY=.specify/specs/runtime-contract-host-provider-v1 \
.specify/scripts/bash/check-prerequisites.sh --json --paths-only
```
