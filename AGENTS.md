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

Marketplace publication is disabled. The decision is recorded in
`docs/decisions/ADR-001-marketplace-publication-disabled.md` and summarized in
`docs/governance/marketplace-posture.md`. Future enablement requires a later
ADR and must not add release tokens, publishing automation, or Marketplace
workflows before that decision lands.

Implementation for `runtime-contract-host-provider-v1` is complete through
proof intake. `installed-user-observation-public-surface-v1` is a
requirements/spec baseline with one implemented IAU:
`IAU-installed-user-observation-model-v1`. It completed only T009-T013.
`command-activation-surface-v1` implements
`IAU-command-activation-manifest-contract-v1` for T009-T012 only: manifest
activation-event contract tests, contributed command ID/title contract tests,
package identity and Marketplace-disabled contract tests, and minimal manifest
metadata.

`command-handler-entrypoint-shell-v1` currently admits
`IAU-command-handler-entrypoint-shell-v1` for Issue #36 and T009-T011 only:
entrypoint shell tests and the minimum public MIT entrypoint shell.

Documentation panel rendering, runtime settings CLI materialization, compare
execution, packaging, and Marketplace publication remain blocked.

Current Implementation Admission Unit:
`IAU-command-handler-entrypoint-shell-v1`.

For Copilot local or web implementation work, read
`docs/development/copilot-workflow.md` before changing code. It explains that
future work must start from a new public bridge admission record.

When running generated Spec Kit helpers from a governed `codex/...` branch, set
both environment variables so branch validation resolves the pinned feature:

```bash
SPECIFY_FEATURE=004-command-handler-entrypoint-shell-v1 \
SPECIFY_FEATURE_DIRECTORY=.specify/specs/command-handler-entrypoint-shell-v1 \
.specify/scripts/bash/check-prerequisites.sh --json --paths-only
```
