# VI History

`svelderrainruiz/vi-history` is the MIT-licensed Spec Kit implementation
authority for VI History.

This repository starts from requirements and Spec Kit artifacts, not from copied
extension source. The initial baseline imported the
`runtime-contract-host-provider-v1` requirements slice and completed admitted
runtime-contract IAUs through proof intake. The public Spec Kit baseline also
imports `installed-user-observation-public-surface-v1`, with
`IAU-installed-user-observation-model-v1` implemented for T009-T013 only, and
`command-activation-surface-v1` with
`IAU-command-activation-manifest-contract-v1` implemented for T009-T012 only.
`IAU-command-handler-entrypoint-shell-v1` is implemented and closed for T009-T011
of `command-handler-entrypoint-shell-v1`. Issue #41 implements and closes
`IAU-documentation-command-panel-shell-v1` for T009-T011 of
`installed-user-documentation-command-v1`. Issue #43 imports
`runtime-settings-cli-bootstrap-v1` and admits
`IAU-runtime-settings-cli-prepare-command-shell-v1`. Issue #45 implements and
closes it for T009-T011. Issue #47 imports
`runtime-settings-cli-settings-write-v1` and admits
`IAU-runtime-settings-cli-settings-write-contract-v1`; Issue #49 implements and
closes it for T009-T012. Issue #51 imports
`runtime-settings-cli-validation-readback-v1` and admits
`IAU-runtime-settings-cli-validation-readback-contract-v1`; Issue #53
implements and closes it for T009-T012. Issue #55 imports
`runtime-settings-cli-validation-proof-v1` and admits
`IAU-runtime-settings-cli-validation-proof-artifact-v1`; Issue #57 implements
and closes it for T009-T012 only.
Issue #60 imports `runtime-settings-cli-interactive-selection-v1` and admits
`IAU-runtime-settings-cli-interactive-selection-contract-v1` for T009-T013
only. Issue #62 implements and closes it for T009-T013 only.
Issue #65 imports `runtime-settings-cli-terminal-entrypoint-v1` and admits
`IAU-runtime-settings-cli-terminal-entrypoint-materialization-v1` for
T009-T013 only. Issue #67 implements and closes it for T009-T013 only.

## Authority

- Package name: `vi-history`
- Display name: `VI History`
- Publisher: `svelderrainruiz`
- Extension ID: `svelderrainruiz.vi-history`
- License: MIT
- Version: `0.1.0`
- Marketplace publication: disabled; future enablement requires a later ADR

## Branch Flow

- `develop` is the integration branch for bootstrap and feature work.
- `main` is the public baseline branch.
- Feature branches target `develop` first, then `develop` promotes to `main`
  after validation is green.

## Current Status

- #1 bootstrapped the MIT Spec Kit authority.
- #2 imported `runtime-contract-host-provider-v1`.
- #3 locked the Spec Kit feature spec, plan, and tasks.
- #4 completed admitted runtime-contract IAUs through proof intake.
- #5 keeps Marketplace publication disabled until a later ADR admits it.
- #25 imported `installed-user-observation-public-surface-v1` as a public
  requirements/spec baseline.
- #27 implements and closes
  `IAU-installed-user-observation-model-v1`.
- Issue #30 imports `command-activation-surface-v1` as a public
  requirements/spec baseline.
- Issue #32 implements `IAU-command-activation-manifest-contract-v1` for
  T009-T012.
- Issue #36 implements and closes `IAU-command-handler-entrypoint-shell-v1` for
  T009-T011 of `command-handler-entrypoint-shell-v1`. Issue #36 must not be
  reused for new implementation.
- Issue #39 imports `installed-user-documentation-command-v1` and admits
  `IAU-documentation-command-panel-shell-v1`.
- Issue #41 implements and closes `IAU-documentation-command-panel-shell-v1`
  for T009-T011 only.
- Issue #43 imports `runtime-settings-cli-bootstrap-v1` and admits
  `IAU-runtime-settings-cli-prepare-command-shell-v1` for T009-T011 only.
- Issue #45 implements and closes
  `IAU-runtime-settings-cli-prepare-command-shell-v1` for T009-T011 only.
- Issue #47 imports `runtime-settings-cli-settings-write-v1` and admits
  `IAU-runtime-settings-cli-settings-write-contract-v1` for T009-T012 only.
  Issue #47 is an admission issue and must not be reused for implementation.
- Issue #49 implements and closes
  `IAU-runtime-settings-cli-settings-write-contract-v1` for T009-T012 only.
- Issue #51 imports `runtime-settings-cli-validation-readback-v1` and admits
  `IAU-runtime-settings-cli-validation-readback-contract-v1` for T009-T012
  only. Issue #51 is an admission issue and must not be reused for
  implementation.
- Issue #53 implements and closes
  `IAU-runtime-settings-cli-validation-readback-contract-v1` for T009-T012
  only.
- Issue #55 imports `runtime-settings-cli-validation-proof-v1` and admits
  `IAU-runtime-settings-cli-validation-proof-artifact-v1` for T009-T012 only.
  Issue #55 is an admission issue and must not be reused for implementation.
- Issue #57 implements and closes
  `IAU-runtime-settings-cli-validation-proof-artifact-v1` for T009-T012 only.
- Issue #60 imports `runtime-settings-cli-interactive-selection-v1` and admits
  `IAU-runtime-settings-cli-interactive-selection-contract-v1` for T009-T013
  only. Issue #60 is an admission issue and must not be reused for
  implementation.
- Issue #62 implements and closes
  `IAU-runtime-settings-cli-interactive-selection-contract-v1` for T009-T013
  only.
- Issue #65 imports `runtime-settings-cli-terminal-entrypoint-v1` and admits
  `IAU-runtime-settings-cli-terminal-entrypoint-materialization-v1` for
  T009-T013 only. Issue #65 is an admission issue and must not be reused for
  implementation.
- Issue #67 implements and closes
  `IAU-runtime-settings-cli-terminal-entrypoint-materialization-v1` for
  T009-T013 only.

The current admission ledgers are:

- `docs/requirements/admissions/runtime-contract-host-provider-v1.json`
- `docs/requirements/admissions/installed-user-observation-public-surface-v1.json`
- `docs/requirements/admissions/command-activation-surface-v1.json`
- `docs/requirements/admissions/command-handler-entrypoint-shell-v1.json`
- `docs/requirements/admissions/installed-user-documentation-command-v1.json`
- `docs/requirements/admissions/runtime-settings-cli-bootstrap-v1.json`
- `docs/requirements/admissions/runtime-settings-cli-settings-write-v1.json`
- `docs/requirements/admissions/runtime-settings-cli-validation-readback-v1.json`
- `docs/requirements/admissions/runtime-settings-cli-validation-proof-v1.json`
- `docs/requirements/admissions/runtime-settings-cli-interactive-selection-v1.json`
- `docs/requirements/admissions/runtime-settings-cli-terminal-entrypoint-v1.json`

Current Implementation Admission Unit:
`none`.

The completed observation model scope is T009-T013. The command activation
manifest contract implements only T009-T012. The command handler entrypoint shell
implements T009-T011 in
`.specify/specs/command-handler-entrypoint-shell-v1/tasks.md`. The installed
user documentation command implements only T009-T011 in
`.specify/specs/installed-user-documentation-command-v1/tasks.md`. The runtime
settings CLI bootstrap implements only T009-T011 in
`.specify/specs/runtime-settings-cli-bootstrap-v1/tasks.md`: prepare-command
handler tests, launcher materialization/recovery fact tests, and the minimum
prepare-command shell. The runtime settings CLI settings-write IAU implements only
T009-T012 in
`.specify/specs/runtime-settings-cli-settings-write-v1/tasks.md`: tests for
provider/version/bitness settings mutation, preservation of unrelated settings,
fail-closed unsupported target handling, and the minimum settings-write
contract. `vihs --validate`, runtime validation, no-argument interactive
selection, compare execution, execution engines, live-session proof, packaging,
and Marketplace work remain blocked.
The runtime settings CLI validation readback IAU implements only T009-T012 in
`.specify/specs/runtime-settings-cli-validation-readback-v1/tasks.md`: tests
for persisted settings readback, explicit effective target reporting, runtime
outcome fact reporting without execution/proof-out behavior, fail-closed
unsupported settings handling, and the minimum validation readback contract.
No-argument interactive selection, proof-out file generation, compare
execution, execution engines, live-session proof, packaging, and Marketplace
work remain blocked.
The runtime settings CLI validation proof IAU implements only T009-T012 in
`.specify/specs/runtime-settings-cli-validation-proof-v1/tasks.md`: tests for
structured proof JSON, secret-like environment redaction, deterministic MIT
issue-body content, and the minimum validation proof artifact contract.
No-argument interactive selection, compare execution, execution engines,
live-session proof, packaging, and Marketplace work remain blocked.
The runtime settings CLI interactive selection IAU implements only T009-T013 in
`.specify/specs/runtime-settings-cli-interactive-selection-v1/tasks.md`: tests
for default settings seeding, confirmation validation handoff, guided host
selection, bounded Docker 2026 x64 selection, and the minimum pure selection
state contract. Terminal prompt loops, compare execution, LabVIEWCLI
execution, Docker execution, proof-out expansion, live-session proof,
packaging, and Marketplace work remain blocked.
The runtime settings CLI terminal entrypoint IAU implements only T009-T013 in
`.specify/specs/runtime-settings-cli-terminal-entrypoint-v1/tasks.md`: tests
for materialized bare `vihs` entrypoint facts, user-scoped terminal admission,
runtime lookup/recovery facts, stale or missing launcher guidance, and the
minimum pure materialized-entrypoint contract. Raw prompt loops, compare
execution, LabVIEWCLI execution, Docker execution, proof-out expansion,
live-session proof, Windows PowerShell Marketplace bootstrap, packaging, and
Marketplace work remain blocked.

The Marketplace posture is recorded in
`docs/decisions/ADR-001-marketplace-publication-disabled.md` and summarized in
`docs/governance/marketplace-posture.md`.

## Validation

Run:

```bash
npm test
```

The current gates validate import packet shape, Spec Kit artifact presence,
package identity, admission state, redaction, traceability, and the clean-room
boundary.
