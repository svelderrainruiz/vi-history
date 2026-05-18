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
only. Issue #45 implements and closes it: prepare-command handler tests,
launcher materialization/recovery fact tests, and the minimum prepare-command
shell. Issue #43 and Issue #45 must not be reused for new implementation.

`runtime-settings-cli-settings-write-v1` admits
`IAU-runtime-settings-cli-settings-write-contract-v1` for Issue #47 and
T009-T012 only. Issue #47 is an admission issue; implementation must use a
separate handoff issue after the admission PR merges. Issue #49 implements and
closes it for T009-T012 only: tests for governed provider/version/bitness
settings writes, unrelated settings preservation, fail-closed unsupported target
handling, and the minimum public settings-write contract.

`vihs --validate`, runtime validation, no-argument interactive selection,
compare execution, LabVIEWCLI execution, Docker execution, live-session proof,
packaging, and Marketplace publication remain blocked.

`runtime-settings-cli-validation-readback-v1` admits
`IAU-runtime-settings-cli-validation-readback-contract-v1` for Issue #51 and
T009-T012 only. Issue #51 is an admission issue; implementation must use a
separate handoff issue after the admission PR merges. Issue #53 implements and
closes it for T009-T012 only: tests for persisted settings readback, explicit
effective target reporting, runtime outcome fact reporting without execution or
proof-out behavior, fail-closed unsupported settings handling, and the minimum
public validation readback contract.

No-argument interactive selection, proof-out file generation, compare
execution, LabVIEWCLI execution, Docker execution, live-session proof,
packaging, and Marketplace publication remain blocked.

`runtime-settings-cli-validation-proof-v1` admits
`IAU-runtime-settings-cli-validation-proof-artifact-v1` for Issue #55 and
T009-T012 only. Issue #55 is an admission issue; implementation must use a
separate handoff issue after the admission PR merges. Issue #57 implements and
closes it for T009-T012 only: tests for pure validation proof JSON,
secret-like environment redaction, deterministic MIT issue-body content, and
the minimum validation proof artifact contract from supplied validation facts.

No-argument interactive selection, compare execution, LabVIEWCLI execution,
Docker execution, live-session proof, packaging, and Marketplace publication
remain blocked.

`runtime-settings-cli-interactive-selection-v1` admits
`IAU-runtime-settings-cli-interactive-selection-contract-v1` for Issue #60 and
T009-T013 only. Issue #60 is an admission issue and must not be reused for
implementation. Issue #62 implements and closes the pure selection-state
contract: default seeding, current bundle reporting, Enter-through
confirmation, guided host selection, Docker 2026 x64 bounds, and validation
readback handoff facts.

Terminal process prompt loops, compare execution, LabVIEWCLI execution, Docker
execution or orchestration, proof-out expansion, live-session proof, packaging,
and Marketplace publication remain blocked.

Current Implementation Admission Unit: none.

For Copilot local or web implementation work, read
`docs/development/copilot-workflow.md` before changing code. It explains that
future work must start from a new public bridge admission record.

When running generated Spec Kit helpers from a governed `codex/...` branch, set
both environment variables so branch validation resolves the pinned feature:

```bash
SPECIFY_FEATURE=010-runtime-settings-cli-interactive-selection-v1 \
SPECIFY_FEATURE_DIRECTORY=.specify/specs/runtime-settings-cli-interactive-selection-v1 \
.specify/scripts/bash/check-prerequisites.sh --json --paths-only
```
