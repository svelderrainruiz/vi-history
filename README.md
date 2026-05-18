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
closes it for T009-T011. No current IAU is active.

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

The current admission ledgers are:

- `docs/requirements/admissions/runtime-contract-host-provider-v1.json`
- `docs/requirements/admissions/installed-user-observation-public-surface-v1.json`
- `docs/requirements/admissions/command-activation-surface-v1.json`
- `docs/requirements/admissions/command-handler-entrypoint-shell-v1.json`
- `docs/requirements/admissions/installed-user-documentation-command-v1.json`
- `docs/requirements/admissions/runtime-settings-cli-bootstrap-v1.json`

Current Implementation Admission Unit: none.

The completed observation model scope is T009-T013. The command activation
manifest contract implements only T009-T012. The command handler entrypoint shell
implements T009-T011 in
`.specify/specs/command-handler-entrypoint-shell-v1/tasks.md`. The installed
user documentation command implements only T009-T011 in
`.specify/specs/installed-user-documentation-command-v1/tasks.md`. The runtime
settings CLI bootstrap implements only T009-T011 in
`.specify/specs/runtime-settings-cli-bootstrap-v1/tasks.md`: prepare-command
handler tests, launcher materialization/recovery fact tests, and the minimum
prepare-command shell. Provider/version/bitness settings mutation, JSONC
settings rewrite, `vihs --validate`, runtime validation, compare execution,
execution engines, packaging, and Marketplace work remain blocked.

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
