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
Issue #71 imports `runtime-settings-cli-terminal-prompt-loop-v1` and admits
`IAU-runtime-settings-cli-terminal-prompt-loop-v1` for T009-T013 only.
Issue #73 implements and closes it for T009-T013 only. Issue #77 imports
`runtime-settings-cli-terminal-io-adapter-v1` and admits
`IAU-runtime-settings-cli-terminal-io-adapter-v1` for T009-T014 only.
Issue #79 implements and closes it for T009-T014 only.
Issue #81 imports `runtime-settings-cli-validation-proof-out-v1` and admits
`IAU-runtime-settings-cli-validation-proof-out-v1` for T009-T014 only.
Issue #83 implements and closes it for T009-T014 only.
Issue #85 imports
`runtime-settings-cli-validation-proof-out-file-emission-v1` and admits
`IAU-runtime-settings-cli-validation-proof-out-file-emission-v1` for
T009-T016 only.
Issue #87 implements and closes it for T009-T016 only.
Issue #89 imports `runtime-settings-cli-validation-runtime-outcome-v1` and
admits `IAU-runtime-settings-cli-validation-runtime-outcome-v1` for
T009-T016 only.
Issue #91 implements and closes it for T009-T016 only.
Issue #93 imports `runtime-settings-cli-validation-command-contract-v1` and
admits `IAU-runtime-settings-cli-validation-command-contract-v1` for
T009-T018 only. Issue #93 is an admission issue and must not be reused for
implementation.
Issue #95 implements and closes it through PR #96 for T009-T018 only.
Issue #99 imports `runtime-settings-cli-validation-plan-only-v1` and admits
`IAU-runtime-settings-cli-validation-plan-only-v1` for T009-T016 only.
Issue #99 is an admission issue and must not be reused for implementation.
Issue #101 implements and closes it for T009-T016 only; Issue #102 and PR #103
repair and close the final plan-only command-contract behavior.
Issue #106 imports
`runtime-settings-cli-validation-host-runtime-preflight-v1` and admits
`IAU-runtime-settings-cli-validation-host-runtime-preflight-v1` for
T009-T016 only. Issue #106 is an admission issue and must not be reused for
implementation. Issue #108 implements and closes it through PR #109 for
T009-T016 only.
Issue #112 imports
`runtime-settings-cli-validation-host-preflight-command-composition-v1` and
admits
`IAU-runtime-settings-cli-validation-host-preflight-command-composition-v1` for
T009-T016 only. Issue #112 is an admission issue and must not be reused for
implementation.

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
- Issue #71 imports `runtime-settings-cli-terminal-prompt-loop-v1` and admits
  `IAU-runtime-settings-cli-terminal-prompt-loop-v1` for T009-T013 only.
  Issue #71 is an admission issue and must not be reused for implementation.
- Issue #73 implements and closes
  `IAU-runtime-settings-cli-terminal-prompt-loop-v1` for T009-T013 only.
- Issue #77 imports `runtime-settings-cli-terminal-io-adapter-v1` and admits
  `IAU-runtime-settings-cli-terminal-io-adapter-v1` for T009-T014 only.
  Issue #77 is an admission issue and must not be reused for implementation.
- Issue #79 implements and closes
  `IAU-runtime-settings-cli-terminal-io-adapter-v1` for T009-T014 only.
- Issue #81 imports `runtime-settings-cli-validation-proof-out-v1` and admits
  `IAU-runtime-settings-cli-validation-proof-out-v1` for T009-T014 only.
  Issue #81 is an admission issue and must not be reused for implementation.
- Issue #83 implements and closes
  `IAU-runtime-settings-cli-validation-proof-out-v1` for T009-T014 only.
- Issue #85 imports
  `runtime-settings-cli-validation-proof-out-file-emission-v1` and admits
  `IAU-runtime-settings-cli-validation-proof-out-file-emission-v1` for
  T009-T016 only. Issue #85 is an admission issue and must not be reused for
  implementation.
- Issue #87 implements and closes
  `IAU-runtime-settings-cli-validation-proof-out-file-emission-v1` for
  T009-T016 only.
- Issue #89 imports `runtime-settings-cli-validation-runtime-outcome-v1` and
  admits `IAU-runtime-settings-cli-validation-runtime-outcome-v1` for
  T009-T016 only. Issue #89 is an admission issue and must not be reused for
  implementation.
- Issue #91 implements and closes
  `IAU-runtime-settings-cli-validation-runtime-outcome-v1` for T009-T016 only.
- Issue #93 imports `runtime-settings-cli-validation-command-contract-v1` and
  admits `IAU-runtime-settings-cli-validation-command-contract-v1` for
  T009-T018 only. Issue #93 is an admission issue and must not be reused for
  implementation.
- Issue #95 implements and closes
  `IAU-runtime-settings-cli-validation-command-contract-v1` through PR #96 for
  T009-T018 only.
- Issue #99 imports `runtime-settings-cli-validation-plan-only-v1` and admits
  `IAU-runtime-settings-cli-validation-plan-only-v1` for T009-T016 only.
  Issue #99 is an admission issue and must not be reused for implementation.
- Issue #101 implements and closes
  `IAU-runtime-settings-cli-validation-plan-only-v1` for T009-T016 only.
  Issue #102 and PR #103 repair and close the final plan-only
  command-contract behavior.
- Issue #106 imports
  `runtime-settings-cli-validation-host-runtime-preflight-v1` and admits
  `IAU-runtime-settings-cli-validation-host-runtime-preflight-v1` for
  T009-T016 only. Issue #106 is an admission issue and must not be reused for
  implementation.
- Issue #108 implements and closes
  `IAU-runtime-settings-cli-validation-host-runtime-preflight-v1` through PR
  #109 for T009-T016 only.
- Issue #112 imports
  `runtime-settings-cli-validation-host-preflight-command-composition-v1` and
  admits
  `IAU-runtime-settings-cli-validation-host-preflight-command-composition-v1`
  for T009-T016 only. Issue #112 is an admission issue and must not be reused
  for implementation.

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
- `docs/requirements/admissions/runtime-settings-cli-terminal-prompt-loop-v1.json`
- `docs/requirements/admissions/runtime-settings-cli-terminal-io-adapter-v1.json`
- `docs/requirements/admissions/runtime-settings-cli-validation-proof-out-v1.json`
- `docs/requirements/admissions/runtime-settings-cli-validation-proof-out-file-emission-v1.json`
- `docs/requirements/admissions/runtime-settings-cli-validation-runtime-outcome-v1.json`
- `docs/requirements/admissions/runtime-settings-cli-validation-command-contract-v1.json`
- `docs/requirements/admissions/runtime-settings-cli-validation-plan-only-v1.json`
- `docs/requirements/admissions/runtime-settings-cli-validation-host-runtime-preflight-v1.json`
- `docs/requirements/admissions/runtime-settings-cli-validation-host-preflight-command-composition-v1.json`

Current Implementation Admission Unit:
`IAU-runtime-settings-cli-validation-host-preflight-command-composition-v1`.

Issue #112 admission temporarily sets the current IAU to
`IAU-runtime-settings-cli-validation-host-preflight-command-composition-v1`.
Before Issue #112 admission, the host runtime preflight closeout recorded:

Current Implementation Admission Unit:
`none`.

Issue #106 admission temporarily set the current IAU to
`IAU-runtime-settings-cli-validation-host-runtime-preflight-v1`; Issue #108 and
PR #109 completed it. Before Issue #106 admission, the plan-only closeout also
recorded:

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
selection, latest supported NI LabVIEW Docker image selection with no
user-facing Docker bitness choice, and the minimum pure selection state
contract. The current governed Docker Linux default maps to the LabVIEW 2026
image family and is 64-bit-only by image/platform. Terminal prompt loops,
compare execution, LabVIEWCLI execution, Docker execution, proof-out
expansion, live-session proof, packaging, and Marketplace work remain blocked.
The runtime settings CLI terminal entrypoint IAU implements only T009-T013 in
`.specify/specs/runtime-settings-cli-terminal-entrypoint-v1/tasks.md`: tests
for materialized bare `vihs` entrypoint facts, user-scoped terminal admission,
runtime lookup/recovery facts, stale or missing launcher guidance, and the
minimum pure materialized-entrypoint contract. Raw prompt loops, compare
execution, LabVIEWCLI execution, Docker execution, proof-out expansion,
live-session proof, Windows PowerShell Marketplace bootstrap, packaging, and
Marketplace work remain blocked.
The runtime settings CLI terminal prompt-loop IAU implements only T009-T013 in
`.specify/specs/runtime-settings-cli-terminal-prompt-loop-v1/tasks.md`: tests
for deterministic no-argument `vihs` prompt transcript/state behavior,
Enter-through confirmation, guided host selection, latest supported NI LabVIEW
Docker image selection with no user-facing Docker bitness choice, and the
minimum pure prompt-loop contract. The current governed Docker Linux default
maps to the LabVIEW 2026 image family and is 64-bit-only by image/platform.
OS-specific raw terminal I/O drivers, compare execution, LabVIEWCLI execution,
Docker execution, proof-out expansion, live-session proof, Windows PowerShell
Marketplace bootstrap, packaging, and Marketplace work remain blocked.
The runtime settings CLI terminal I/O adapter IAU implements only T009-T014 in
`.specify/specs/runtime-settings-cli-terminal-io-adapter-v1/tasks.md`: tests
for Enter confirmation adaptation, guided host terminal selection, Docker
latest supported NI LabVIEW image-family selection with no Docker bitness
prompt, non-TTY copyable guidance, unsupported input/EOF/cancel fail-closed
behavior, and the minimum pure terminal session/input adapter contract.
Compare execution, LabVIEWCLI execution, Docker execution or orchestration,
proof-out expansion, live-session proof, package/bin publication,
launcher/profile mutation, Marketplace work, and source copying remain blocked.
The runtime settings CLI validation proof-out adapter IAU implements only
T009-T014 in
`.specify/specs/runtime-settings-cli-validation-proof-out-v1/tasks.md`: tests
for `--proof-out <dir>` request facts, deterministic proof JSON and issue
Markdown from the already admitted proof-artifact contract, missing
validation/proof facts fail-closed behavior, unsupported proof-out target
fail-closed behavior, non-interactive guidance, and the minimum pure proof-out
adapter contract. Issue #83 implements and closes the handoff. Runtime
validation execution, compare execution, LabVIEWCLI execution, Docker
execution, live terminal proof, package/bin publication, launcher/profile
mutation, Marketplace work, and source copying remain blocked.
The runtime settings CLI validation proof-out file-emission IAU implements
only T009-T016 in
`.specify/specs/runtime-settings-cli-validation-proof-out-file-emission-v1/tasks.md`:
tests for successful two-file emission, deterministic file content, created
output directory, missing or unready adapter failure, unsupported target
failure, I/O failure reporting, no hidden partial success, blocked side
effects, and the minimum pure file-emission adapter around ready proof-out
adapter facts. Issue #87 implements and closes the handoff. Runtime validation
execution, new validation fact generation, compare execution, LabVIEWCLI
execution, Docker execution, live terminal proof, package/bin publication,
launcher/profile mutation, Marketplace work, and source copying remain
blocked.
`runtime-settings-cli-validation-runtime-outcome-v1` admits
`IAU-runtime-settings-cli-validation-runtime-outcome-v1` for Issue #89 and
T009-T016 only. Issue #89 is an admission issue and must not be reused for
implementation. Issue #91 implements and closes pure runtime outcome fact
shaping from supplied public-safe runtime selection facts through
`createRuntimeSettingsValidationRuntimeOutcome(input = {})` for T009-T016 only.
Runtime validation execution, runtime locator invocation, compare execution,
LabVIEWCLI execution, Docker execution or orchestration, live terminal proof,
package/bin publication, launcher/profile mutation, release automation,
Marketplace work, and source copying remain blocked.
`runtime-settings-cli-validation-command-contract-v1` admits
`IAU-runtime-settings-cli-validation-command-contract-v1` for Issue #93 and
T009-T018 only. Issue #93 is an admission issue and must not be reused for
implementation. Issue #95 implements and closes it through PR #96 for
T009-T018 only. It implements only the pure
`createRuntimeSettingsValidationCommandResult(input = {})` contract for
`vihs --validate` and optional `--proof-out <dir>` composition through the
already admitted proof-out file-emission contract.
Runtime validation execution, validation fact generation beyond supplied
runtime outcome fact shaping, compare execution, LabVIEWCLI execution, Docker
execution, raw terminal process wiring, and source copying remain blocked.
`validate-plan-only` remained blocked for that IAU and is admitted separately
below.

`runtime-settings-cli-validation-plan-only-v1` admits
`IAU-runtime-settings-cli-validation-plan-only-v1` for Issue #99 and
T009-T016 only. Issue #99 is an admission issue and must not be reused for
implementation. Issue #101 implements and closes it for T009-T016 only. Issue
#102 and PR #103 repair and close the final plan-only command-contract
behavior. The implemented IAU is a pure `validate-plan-only` branch over
`createRuntimeSettingsValidationCommandResult(input = {})` that returns
deterministic proof-out target and artifact planning facts without calling the
proof-out file-emission writer or writing files. The proof-out file-emission
writer and file writes for plan-only, runtime locator invocation, OS
inspection, private path discovery, runtime validation execution, compare
execution, LabVIEWCLI execution, Docker execution or orchestration, raw
terminal process wiring, live terminal proof, package/bin publication,
launcher/profile mutation, release automation, Marketplace work, and source
copying remain blocked.

`runtime-settings-cli-validation-host-runtime-preflight-v1` implements
`IAU-runtime-settings-cli-validation-host-runtime-preflight-v1` for Issue #106
and implementation handoff Issue #108 through PR #109 for T009-T016 only.
Issue #106 is an admission issue and must not be reused for implementation.
The implemented IAU is a pure
`createRuntimeSettingsValidationHostRuntimePreflight(input = {})` adapter over
supplied public-safe host candidate facts. It may produce deterministic
runtime selection facts for the existing validation runtime outcome, readback,
proof artifact, proof-out adapter, file-emission, validation command, and
`validate-plan-only` contracts. OS scanning, filesystem walking, registry
probing, PATH probing, environment probing, private path discovery, runtime
locator invocation, runtime validation execution, compare execution,
LabVIEWCLI execution, Docker execution or orchestration, raw terminal process
wiring, live terminal proof, file writes from the host preflight adapter,
package/bin publication, launcher/profile mutation, release automation,
Marketplace work, and source copying remain blocked.

`runtime-settings-cli-validation-host-preflight-command-composition-v1` admits
`IAU-runtime-settings-cli-validation-host-preflight-command-composition-v1` for
Issue #112 and T009-T016 only. Issue #112 is an admission issue and must not be
reused for implementation. The admitted IAU is a pure command-composition unit
so `createRuntimeSettingsValidationCommandResult(input = {})` can consume ready
host preflight facts or supplied public-safe host selection/candidate facts
through `createRuntimeSettingsValidationHostRuntimePreflight(input = {})`
without redesigning runtime outcome, readback, proof artifact, proof-out,
file-emission, validation command, or `validate-plan-only` output shapes. OS
scanning, filesystem walking, registry probing, PATH probing, environment
probing, private path discovery, runtime locator invocation, runtime validation
execution, compare execution, LabVIEWCLI execution, Docker execution or
orchestration, raw terminal process wiring, live terminal proof, file writes
from the host preflight adapter, package/bin publication, launcher/profile
mutation, release automation, Marketplace work, and source copying remain
blocked.

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
