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

`command-handler-entrypoint-shell-v1` implemented
`IAU-command-handler-entrypoint-shell-v1` for Issue #36 and T009-T011 only:
entrypoint shell tests and the minimum public MIT entrypoint shell.
`IAU-command-handler-entrypoint-shell-v1` is closed. Issue #36 must not be
reused for new implementation. No current IAU is active.

`installed-user-documentation-command-v1` implemented
`IAU-documentation-command-panel-shell-v1` for Issue #41 and T009-T011 only:
Open Documentation handler tests, public-safe bundled documentation contract
tests, and the minimum documentation command panel shell. Issue #41 must not be
reused for new implementation.

`runtime-settings-cli-bootstrap-v1` admits
`IAU-runtime-settings-cli-prepare-command-shell-v1` for Issue #43 and T009-T011
only after its admission PR merges: prepare-command handler tests, launcher
materialization/recovery fact tests, and the minimum prepare-command shell.
Issue #43 is an admission issue and must not be reused for implementation.

Provider/version/bitness settings mutation, JSONC settings rewrite,
`vihs --validate`, runtime validation, compare execution, LabVIEWCLI execution,
Docker execution, packaging, and Marketplace publication remain blocked.

Current Implementation Admission Unit:
`IAU-runtime-settings-cli-prepare-command-shell-v1`.

For Copilot local or web implementation work, read
`docs/development/copilot-workflow.md` before changing code. It explains that
future work must start from a new public bridge admission record.

When running generated Spec Kit helpers from a governed `codex/...` branch, set
both environment variables so branch validation resolves the pinned feature:

```bash
SPECIFY_FEATURE=006-runtime-settings-cli-bootstrap-v1 \
SPECIFY_FEATURE_DIRECTORY=.specify/specs/runtime-settings-cli-bootstrap-v1 \
.specify/scripts/bash/check-prerequisites.sh --json --paths-only
```
