# Copilot Implementation Workflow

Use this workflow when developing `svelderrainruiz/vi-history` with Copilot in
local or web mode. This repository is the public MIT implementation authority,
so Copilot must work from committed public artifacts only.

## Source Files

Read these before changing code:

- `AGENTS.md`
- `README.md`
- `docs/requirements/imports/runtime-contract-host-provider-v1/manifest.json`
- `docs/requirements/imports/runtime-contract-host-provider-v1/syrs.md`
- `docs/requirements/imports/runtime-contract-host-provider-v1/srs.md`
- `docs/requirements/imports/runtime-contract-host-provider-v1/rtm.csv`
- `docs/requirements/imports/runtime-contract-host-provider-v1/test-plan.md`
- `.specify/memory/constitution.md`
- `.specify/specs/runtime-contract-host-provider-v1/spec.md`
- `.specify/specs/runtime-contract-host-provider-v1/plan.md`
- `.specify/specs/runtime-contract-host-provider-v1/tasks.md`
- `docs/requirements/admissions/runtime-contract-host-provider-v1.json`
- `docs/requirements/admissions/runtime-contract-host-provider-v1/IAU-runtime-contract-proof-intake-v1.json`
- `docs/requirements/admissions/runtime-contract-host-provider-v1/IAU-runtime-contract-proof-intake-v1-preflight-v1.json`
- `docs/requirements/imports/installed-user-observation-public-surface-v1/manifest.json`
- `docs/requirements/imports/installed-user-observation-public-surface-v1/syrs.md`
- `docs/requirements/imports/installed-user-observation-public-surface-v1/srs.md`
- `docs/requirements/imports/installed-user-observation-public-surface-v1/rtm.csv`
- `docs/requirements/imports/installed-user-observation-public-surface-v1/test-plan.md`
- `.specify/specs/installed-user-observation-public-surface-v1/spec.md`
- `.specify/specs/installed-user-observation-public-surface-v1/plan.md`
- `.specify/specs/installed-user-observation-public-surface-v1/tasks.md`
- `docs/requirements/admissions/installed-user-observation-public-surface-v1.json`
- `docs/requirements/admissions/installed-user-observation-public-surface-v1/IAU-installed-user-observation-model-v1.json`
- `docs/requirements/admissions/installed-user-observation-public-surface-v1/IAU-installed-user-observation-model-v1-preflight-v1.json`
- `docs/requirements/imports/command-activation-surface-v1/manifest.json`
- `docs/requirements/imports/command-activation-surface-v1/syrs.md`
- `docs/requirements/imports/command-activation-surface-v1/srs.md`
- `docs/requirements/imports/command-activation-surface-v1/rtm.csv`
- `docs/requirements/imports/command-activation-surface-v1/test-plan.md`
- `.specify/specs/command-activation-surface-v1/spec.md`
- `.specify/specs/command-activation-surface-v1/plan.md`
- `.specify/specs/command-activation-surface-v1/tasks.md`
- `docs/requirements/admissions/command-activation-surface-v1.json`
- `docs/requirements/admissions/command-activation-surface-v1/IAU-command-activation-manifest-contract-v1.json`
- `docs/requirements/admissions/command-activation-surface-v1/IAU-command-activation-manifest-contract-v1-preflight-v1.json`
- `docs/requirements/imports/command-handler-entrypoint-shell-v1/manifest.json`
- `docs/requirements/imports/command-handler-entrypoint-shell-v1/syrs.md`
- `docs/requirements/imports/command-handler-entrypoint-shell-v1/srs.md`
- `docs/requirements/imports/command-handler-entrypoint-shell-v1/rtm.csv`
- `docs/requirements/imports/command-handler-entrypoint-shell-v1/test-plan.md`
- `.specify/specs/command-handler-entrypoint-shell-v1/spec.md`
- `.specify/specs/command-handler-entrypoint-shell-v1/plan.md`
- `.specify/specs/command-handler-entrypoint-shell-v1/tasks.md`
- `docs/requirements/admissions/command-handler-entrypoint-shell-v1.json`
- `docs/requirements/admissions/command-handler-entrypoint-shell-v1/IAU-command-handler-entrypoint-shell-v1.json`
- `docs/requirements/admissions/command-handler-entrypoint-shell-v1/IAU-command-handler-entrypoint-shell-v1-preflight-v1.json`
- `docs/requirements/imports/runtime-settings-cli-bootstrap-v1/manifest.json`
- `docs/requirements/imports/runtime-settings-cli-bootstrap-v1/syrs.md`
- `docs/requirements/imports/runtime-settings-cli-bootstrap-v1/srs.md`
- `docs/requirements/imports/runtime-settings-cli-bootstrap-v1/rtm.csv`
- `docs/requirements/imports/runtime-settings-cli-bootstrap-v1/test-plan.md`
- `.specify/specs/runtime-settings-cli-bootstrap-v1/spec.md`
- `.specify/specs/runtime-settings-cli-bootstrap-v1/plan.md`
- `.specify/specs/runtime-settings-cli-bootstrap-v1/tasks.md`
- `docs/requirements/admissions/runtime-settings-cli-bootstrap-v1.json`
- `docs/requirements/admissions/runtime-settings-cli-bootstrap-v1/IAU-runtime-settings-cli-prepare-command-shell-v1.json`
- `docs/requirements/admissions/runtime-settings-cli-bootstrap-v1/IAU-runtime-settings-cli-prepare-command-shell-v1-preflight-v1.json`
- `docs/requirements/imports/runtime-settings-cli-settings-write-v1/manifest.json`
- `docs/requirements/imports/runtime-settings-cli-settings-write-v1/syrs.md`
- `docs/requirements/imports/runtime-settings-cli-settings-write-v1/srs.md`
- `docs/requirements/imports/runtime-settings-cli-settings-write-v1/rtm.csv`
- `docs/requirements/imports/runtime-settings-cli-settings-write-v1/test-plan.md`
- `.specify/specs/runtime-settings-cli-settings-write-v1/spec.md`
- `.specify/specs/runtime-settings-cli-settings-write-v1/plan.md`
- `.specify/specs/runtime-settings-cli-settings-write-v1/tasks.md`
- `docs/requirements/admissions/runtime-settings-cli-settings-write-v1.json`
- `docs/requirements/admissions/runtime-settings-cli-settings-write-v1/IAU-runtime-settings-cli-settings-write-contract-v1.json`
- `docs/requirements/admissions/runtime-settings-cli-settings-write-v1/IAU-runtime-settings-cli-settings-write-contract-v1-preflight-v1.json`
- `docs/requirements/imports/runtime-settings-cli-validation-readback-v1/manifest.json`
- `docs/requirements/imports/runtime-settings-cli-validation-readback-v1/syrs.md`
- `docs/requirements/imports/runtime-settings-cli-validation-readback-v1/srs.md`
- `docs/requirements/imports/runtime-settings-cli-validation-readback-v1/rtm.csv`
- `docs/requirements/imports/runtime-settings-cli-validation-readback-v1/test-plan.md`
- `.specify/specs/runtime-settings-cli-validation-readback-v1/spec.md`
- `.specify/specs/runtime-settings-cli-validation-readback-v1/plan.md`
- `.specify/specs/runtime-settings-cli-validation-readback-v1/tasks.md`
- `docs/requirements/admissions/runtime-settings-cli-validation-readback-v1.json`
- `docs/requirements/admissions/runtime-settings-cli-validation-readback-v1/IAU-runtime-settings-cli-validation-readback-contract-v1.json`
- `docs/requirements/admissions/runtime-settings-cli-validation-readback-v1/IAU-runtime-settings-cli-validation-readback-contract-v1-preflight-v1.json`
- `docs/requirements/imports/runtime-settings-cli-validation-proof-v1/manifest.json`
- `docs/requirements/imports/runtime-settings-cli-validation-proof-v1/syrs.md`
- `docs/requirements/imports/runtime-settings-cli-validation-proof-v1/srs.md`
- `docs/requirements/imports/runtime-settings-cli-validation-proof-v1/rtm.csv`
- `docs/requirements/imports/runtime-settings-cli-validation-proof-v1/test-plan.md`
- `.specify/specs/runtime-settings-cli-validation-proof-v1/spec.md`
- `.specify/specs/runtime-settings-cli-validation-proof-v1/plan.md`
- `.specify/specs/runtime-settings-cli-validation-proof-v1/tasks.md`
- `docs/requirements/admissions/runtime-settings-cli-validation-proof-v1.json`
- `docs/requirements/admissions/runtime-settings-cli-validation-proof-v1/IAU-runtime-settings-cli-validation-proof-artifact-v1.json`
- `docs/requirements/admissions/runtime-settings-cli-validation-proof-v1/IAU-runtime-settings-cli-validation-proof-artifact-v1-preflight-v1.json`
- `docs/requirements/imports/runtime-settings-cli-interactive-selection-v1/manifest.json`
- `docs/requirements/imports/runtime-settings-cli-interactive-selection-v1/syrs.md`
- `docs/requirements/imports/runtime-settings-cli-interactive-selection-v1/srs.md`
- `docs/requirements/imports/runtime-settings-cli-interactive-selection-v1/rtm.csv`
- `docs/requirements/imports/runtime-settings-cli-interactive-selection-v1/test-plan.md`
- `.specify/specs/runtime-settings-cli-interactive-selection-v1/spec.md`
- `.specify/specs/runtime-settings-cli-interactive-selection-v1/plan.md`
- `.specify/specs/runtime-settings-cli-interactive-selection-v1/tasks.md`
- `docs/requirements/admissions/runtime-settings-cli-interactive-selection-v1.json`
- `docs/requirements/admissions/runtime-settings-cli-interactive-selection-v1/IAU-runtime-settings-cli-interactive-selection-contract-v1.json`
- `docs/requirements/admissions/runtime-settings-cli-interactive-selection-v1/IAU-runtime-settings-cli-interactive-selection-contract-v1-preflight-v1.json`
- `docs/requirements/imports/runtime-settings-cli-terminal-entrypoint-v1/manifest.json`
- `docs/requirements/imports/runtime-settings-cli-terminal-entrypoint-v1/syrs.md`
- `docs/requirements/imports/runtime-settings-cli-terminal-entrypoint-v1/srs.md`
- `docs/requirements/imports/runtime-settings-cli-terminal-entrypoint-v1/rtm.csv`
- `docs/requirements/imports/runtime-settings-cli-terminal-entrypoint-v1/test-plan.md`
- `.specify/specs/runtime-settings-cli-terminal-entrypoint-v1/spec.md`
- `.specify/specs/runtime-settings-cli-terminal-entrypoint-v1/plan.md`
- `.specify/specs/runtime-settings-cli-terminal-entrypoint-v1/tasks.md`
- `docs/requirements/admissions/runtime-settings-cli-terminal-entrypoint-v1.json`
- `docs/requirements/admissions/runtime-settings-cli-terminal-entrypoint-v1/IAU-runtime-settings-cli-terminal-entrypoint-materialization-v1.json`
- `docs/requirements/admissions/runtime-settings-cli-terminal-entrypoint-v1/IAU-runtime-settings-cli-terminal-entrypoint-materialization-v1-preflight-v1.json`
- `docs/requirements/imports/runtime-settings-cli-terminal-prompt-loop-v1/manifest.json`
- `docs/requirements/imports/runtime-settings-cli-terminal-prompt-loop-v1/syrs.md`
- `docs/requirements/imports/runtime-settings-cli-terminal-prompt-loop-v1/srs.md`
- `docs/requirements/imports/runtime-settings-cli-terminal-prompt-loop-v1/rtm.csv`
- `docs/requirements/imports/runtime-settings-cli-terminal-prompt-loop-v1/test-plan.md`
- `.specify/specs/runtime-settings-cli-terminal-prompt-loop-v1/spec.md`
- `.specify/specs/runtime-settings-cli-terminal-prompt-loop-v1/plan.md`
- `.specify/specs/runtime-settings-cli-terminal-prompt-loop-v1/tasks.md`
- `docs/requirements/admissions/runtime-settings-cli-terminal-prompt-loop-v1.json`
- `docs/requirements/admissions/runtime-settings-cli-terminal-prompt-loop-v1/IAU-runtime-settings-cli-terminal-prompt-loop-v1.json`
- `docs/requirements/admissions/runtime-settings-cli-terminal-prompt-loop-v1/IAU-runtime-settings-cli-terminal-prompt-loop-v1-preflight-v1.json`
- `docs/requirements/imports/runtime-settings-cli-terminal-io-adapter-v1/manifest.json`
- `docs/requirements/imports/runtime-settings-cli-terminal-io-adapter-v1/syrs.md`
- `docs/requirements/imports/runtime-settings-cli-terminal-io-adapter-v1/srs.md`
- `docs/requirements/imports/runtime-settings-cli-terminal-io-adapter-v1/rtm.csv`
- `docs/requirements/imports/runtime-settings-cli-terminal-io-adapter-v1/test-plan.md`
- `.specify/specs/runtime-settings-cli-terminal-io-adapter-v1/spec.md`
- `.specify/specs/runtime-settings-cli-terminal-io-adapter-v1/plan.md`
- `.specify/specs/runtime-settings-cli-terminal-io-adapter-v1/tasks.md`
- `docs/requirements/admissions/runtime-settings-cli-terminal-io-adapter-v1.json`
- `docs/requirements/admissions/runtime-settings-cli-terminal-io-adapter-v1/IAU-runtime-settings-cli-terminal-io-adapter-v1.json`
- `docs/requirements/admissions/runtime-settings-cli-terminal-io-adapter-v1/IAU-runtime-settings-cli-terminal-io-adapter-v1-preflight-v1.json`
- `docs/requirements/imports/runtime-settings-cli-validation-proof-out-v1/manifest.json`
- `docs/requirements/imports/runtime-settings-cli-validation-proof-out-v1/syrs.md`
- `docs/requirements/imports/runtime-settings-cli-validation-proof-out-v1/srs.md`
- `docs/requirements/imports/runtime-settings-cli-validation-proof-out-v1/rtm.csv`
- `docs/requirements/imports/runtime-settings-cli-validation-proof-out-v1/test-plan.md`
- `.specify/specs/runtime-settings-cli-validation-proof-out-v1/spec.md`
- `.specify/specs/runtime-settings-cli-validation-proof-out-v1/plan.md`
- `.specify/specs/runtime-settings-cli-validation-proof-out-v1/tasks.md`
- `docs/requirements/admissions/runtime-settings-cli-validation-proof-out-v1.json`
- `docs/requirements/admissions/runtime-settings-cli-validation-proof-out-v1/IAU-runtime-settings-cli-validation-proof-out-v1.json`
- `docs/requirements/admissions/runtime-settings-cli-validation-proof-out-v1/IAU-runtime-settings-cli-validation-proof-out-v1-preflight-v1.json`
- `docs/requirements/imports/runtime-settings-cli-validation-proof-out-file-emission-v1/manifest.json`
- `docs/requirements/imports/runtime-settings-cli-validation-proof-out-file-emission-v1/syrs.md`
- `docs/requirements/imports/runtime-settings-cli-validation-proof-out-file-emission-v1/srs.md`
- `docs/requirements/imports/runtime-settings-cli-validation-proof-out-file-emission-v1/rtm.csv`
- `docs/requirements/imports/runtime-settings-cli-validation-proof-out-file-emission-v1/test-plan.md`
- `.specify/specs/runtime-settings-cli-validation-proof-out-file-emission-v1/spec.md`
- `.specify/specs/runtime-settings-cli-validation-proof-out-file-emission-v1/plan.md`
- `.specify/specs/runtime-settings-cli-validation-proof-out-file-emission-v1/tasks.md`
- `docs/requirements/admissions/runtime-settings-cli-validation-proof-out-file-emission-v1.json`
- `docs/requirements/admissions/runtime-settings-cli-validation-proof-out-file-emission-v1/IAU-runtime-settings-cli-validation-proof-out-file-emission-v1.json`
- `docs/requirements/admissions/runtime-settings-cli-validation-proof-out-file-emission-v1/IAU-runtime-settings-cli-validation-proof-out-file-emission-v1-preflight-v1.json`
- `docs/requirements/imports/runtime-settings-cli-validation-runtime-outcome-v1/manifest.json`
- `docs/requirements/imports/runtime-settings-cli-validation-runtime-outcome-v1/syrs.md`
- `docs/requirements/imports/runtime-settings-cli-validation-runtime-outcome-v1/srs.md`
- `docs/requirements/imports/runtime-settings-cli-validation-runtime-outcome-v1/rtm.csv`
- `docs/requirements/imports/runtime-settings-cli-validation-runtime-outcome-v1/test-plan.md`
- `.specify/specs/runtime-settings-cli-validation-runtime-outcome-v1/spec.md`
- `.specify/specs/runtime-settings-cli-validation-runtime-outcome-v1/plan.md`
- `.specify/specs/runtime-settings-cli-validation-runtime-outcome-v1/tasks.md`
- `docs/requirements/admissions/runtime-settings-cli-validation-runtime-outcome-v1.json`
- `docs/requirements/admissions/runtime-settings-cli-validation-runtime-outcome-v1/IAU-runtime-settings-cli-validation-runtime-outcome-v1.json`
- `docs/requirements/admissions/runtime-settings-cli-validation-runtime-outcome-v1/IAU-runtime-settings-cli-validation-runtime-outcome-v1-preflight-v1.json`
- `docs/requirements/imports/runtime-settings-cli-validation-command-contract-v1/manifest.json`
- `docs/requirements/imports/runtime-settings-cli-validation-command-contract-v1/syrs.md`
- `docs/requirements/imports/runtime-settings-cli-validation-command-contract-v1/srs.md`
- `docs/requirements/imports/runtime-settings-cli-validation-command-contract-v1/rtm.csv`
- `docs/requirements/imports/runtime-settings-cli-validation-command-contract-v1/test-plan.md`
- `.specify/specs/runtime-settings-cli-validation-command-contract-v1/spec.md`
- `.specify/specs/runtime-settings-cli-validation-command-contract-v1/plan.md`
- `.specify/specs/runtime-settings-cli-validation-command-contract-v1/tasks.md`
- `docs/requirements/admissions/runtime-settings-cli-validation-command-contract-v1.json`
- `docs/requirements/admissions/runtime-settings-cli-validation-command-contract-v1/IAU-runtime-settings-cli-validation-command-contract-v1.json`
- `docs/requirements/admissions/runtime-settings-cli-validation-command-contract-v1/IAU-runtime-settings-cli-validation-command-contract-v1-preflight-v1.json`
- `docs/requirements/imports/runtime-settings-cli-validation-plan-only-v1/manifest.json`
- `docs/requirements/imports/runtime-settings-cli-validation-plan-only-v1/syrs.md`
- `docs/requirements/imports/runtime-settings-cli-validation-plan-only-v1/srs.md`
- `docs/requirements/imports/runtime-settings-cli-validation-plan-only-v1/rtm.csv`
- `docs/requirements/imports/runtime-settings-cli-validation-plan-only-v1/test-plan.md`
- `.specify/specs/runtime-settings-cli-validation-plan-only-v1/spec.md`
- `.specify/specs/runtime-settings-cli-validation-plan-only-v1/plan.md`
- `.specify/specs/runtime-settings-cli-validation-plan-only-v1/tasks.md`
- `docs/requirements/admissions/runtime-settings-cli-validation-plan-only-v1.json`
- `docs/requirements/admissions/runtime-settings-cli-validation-plan-only-v1/IAU-runtime-settings-cli-validation-plan-only-v1.json`
- `docs/requirements/admissions/runtime-settings-cli-validation-plan-only-v1/IAU-runtime-settings-cli-validation-plan-only-v1-preflight-v1.json`
- `docs/requirements/imports/runtime-settings-cli-validation-host-runtime-preflight-v1/manifest.json`
- `docs/requirements/imports/runtime-settings-cli-validation-host-runtime-preflight-v1/syrs.md`
- `docs/requirements/imports/runtime-settings-cli-validation-host-runtime-preflight-v1/srs.md`
- `docs/requirements/imports/runtime-settings-cli-validation-host-runtime-preflight-v1/rtm.csv`
- `docs/requirements/imports/runtime-settings-cli-validation-host-runtime-preflight-v1/test-plan.md`
- `.specify/specs/runtime-settings-cli-validation-host-runtime-preflight-v1/spec.md`
- `.specify/specs/runtime-settings-cli-validation-host-runtime-preflight-v1/plan.md`
- `.specify/specs/runtime-settings-cli-validation-host-runtime-preflight-v1/tasks.md`
- `docs/requirements/admissions/runtime-settings-cli-validation-host-runtime-preflight-v1.json`
- `docs/requirements/admissions/runtime-settings-cli-validation-host-runtime-preflight-v1/IAU-runtime-settings-cli-validation-host-runtime-preflight-v1.json`
- `docs/requirements/admissions/runtime-settings-cli-validation-host-runtime-preflight-v1/IAU-runtime-settings-cli-validation-host-runtime-preflight-v1-preflight-v1.json`

## Current Status

GitHub Issue #5 closed the Marketplace publication governance decision. The
decision is recorded in
`docs/decisions/ADR-001-marketplace-publication-disabled.md`. Marketplace
publication remains disabled and no packaging or release work is admitted.

GitHub Issue #4 completed the runtime-contract implementation loop through
`IAU-runtime-contract-proof-intake-v1`. No new Copilot implementation should
start from Issue #4.

Completed units:

- `IAU-runtime-contract-explicit-compare-v1`
- `IAU-runtime-contract-runtime-facts-v1`
- `IAU-runtime-contract-provider-policy-v1`
- `IAU-runtime-contract-proof-intake-v1`

Completed installed-user observation unit:

- `IAU-installed-user-observation-model-v1`

Completed command activation unit:

- `IAU-command-activation-manifest-contract-v1`

Completed command handler unit:

- `IAU-command-handler-entrypoint-shell-v1`

Completed runtime-contract tasks:

- `T007` through `T011`: foundational runtime contracts.
- `T012` through `T015`: explicit compare action flow.
- `T016` through `T021`: runtime facts and command planning.
- `T022` through `T025`: provider policy.
- `T026`: add tests for Linux host LabVIEW proof classification.
- `T027`: add tests rejecting Linux Docker, WSL, host-provider proof, or reports without proof packets as Windows Docker Desktop proof.
- `T028`: add tests for `vihs validate-fixture` proof JSON and issue-body generation.
- `T029`: implement proof packet writer and issue-body generation.
- `T030`: implement Windows Docker Desktop proof intake validation.

Completed installed-user observation tasks:

- `T009`: define an observation-cycle data contract.
- `T010`: define an observation-fact classification contract.
- `T011`: define routing-decision and SemVer recommendation contracts.
- `T012`: add tests for `observed`, `deferred`, and `blocked` fact buckets.
- `T013`: add tests that public feedback is input, not release proof.

## Future Work Packet

Issue #27 completed `IAU-installed-user-observation-model-v1`. No new Copilot
implementation should start from Issue #27.

Issue #32 completes
`IAU-command-activation-manifest-contract-v1`. No new Copilot implementation
should start from Issue #32 after that PR merges. It implements only T009-T012:
manifest activation-event contract tests, contributed command ID/title contract
tests, package identity and Marketplace-disabled contract tests, and minimal
manifest metadata.

Issue #36 completed `IAU-command-handler-entrypoint-shell-v1`. No new Copilot
implementation should start from Issue #36. It implemented only T009-T011:
entrypoint shell tests and the minimum public MIT entrypoint shell.

Issue #39 admitted `IAU-documentation-command-panel-shell-v1` for
`installed-user-documentation-command-v1`. Issue #41 completed that IAU for
T009-T011 only: documentation command handler tests, public-safe bundled
documentation contract tests, and the minimum documentation command panel shell.
No new Copilot implementation should start from Issue #41.

Issue #43 admits `IAU-runtime-settings-cli-prepare-command-shell-v1` for
`runtime-settings-cli-bootstrap-v1`. Issue #45 implements and closes it for
T009-T011 only: prepare-command handler tests, launcher materialization and
recovery fact tests, and the minimum prepare-command shell. No new Copilot
implementation should start from Issue #45.

Issue #47 admits `IAU-runtime-settings-cli-settings-write-contract-v1` for
`runtime-settings-cli-settings-write-v1` and T009-T012 only. Issue #47 is an
admission issue. Copilot implementation must wait for the separate handoff issue
created after the admission PR merges.

Issue #49 implements and closes
`IAU-runtime-settings-cli-settings-write-contract-v1` for T009-T012 only. No
new Copilot implementation should start from Issue #49.

Issue #51 admits `IAU-runtime-settings-cli-validation-readback-contract-v1` for
`runtime-settings-cli-validation-readback-v1` and T009-T012 only. Issue #51 is
an admission issue. Copilot implementation must wait for the separate handoff
issue created after the admission PR merges.

Issue #53 implements and closes
`IAU-runtime-settings-cli-validation-readback-contract-v1` for T009-T012 only.
No new Copilot implementation should start from Issue #53.

Issue #55 admits `IAU-runtime-settings-cli-validation-proof-artifact-v1` for
`runtime-settings-cli-validation-proof-v1` and T009-T012 only. Issue #55 is an
admission issue. Copilot implementation must wait for the separate handoff issue
created after the admission PR merges.

Issue #57 implements and closes
`IAU-runtime-settings-cli-validation-proof-artifact-v1` for T009-T012 only. No
new Copilot implementation should start from Issue #57.

Issue #60 admits
`IAU-runtime-settings-cli-interactive-selection-contract-v1` for
`runtime-settings-cli-interactive-selection-v1` and T009-T013 only. Issue #60
is an admission issue. Copilot implementation must wait for the separate
handoff issue created after the admission PR merges.

Issue #62 implements and closes
`IAU-runtime-settings-cli-interactive-selection-contract-v1` for T009-T013
only. No new Copilot implementation should start from Issue #62.

Issue #65 admits
`IAU-runtime-settings-cli-terminal-entrypoint-materialization-v1` for
`runtime-settings-cli-terminal-entrypoint-v1` and T009-T013 only. Issue #65 is
an admission issue and must not be reused for implementation.

Issue #67 implements and closes
`IAU-runtime-settings-cli-terminal-entrypoint-materialization-v1` for T009-T013
only. No new Copilot implementation should start from Issue #67.

Issue #71 admits
`IAU-runtime-settings-cli-terminal-prompt-loop-v1` for
`runtime-settings-cli-terminal-prompt-loop-v1` and T009-T013 only. Issue #71
is an admission issue and must not be reused for implementation.

Issue #73 implements and closes
`IAU-runtime-settings-cli-terminal-prompt-loop-v1` for T009-T013 only. No new
Copilot implementation should start from Issue #73.

Issue #75 clarifies the prompt/selection Docker wording: Docker provider
selection is the latest supported NI LabVIEW Docker image family, currently the
LabVIEW 2026 Linux image family for the governed Linux default, and must not be
presented as a user-facing Docker bitness choice. Docker remains 64-bit-only by
image/platform; host LabVIEW bitness remains host-provider scope.

Issue #77 admits
`IAU-runtime-settings-cli-terminal-io-adapter-v1` for
`runtime-settings-cli-terminal-io-adapter-v1` and T009-T014 only. Issue #77 is
an admission issue and must not be reused for implementation. Issue #79
implements and closes the pure terminal session/input adapter for T009-T014
only: Enter confirmation, guided host selection, Docker latest supported NI
LabVIEW image-family selection without a Docker bitness prompt, non-TTY
copyable guidance, unsupported input/EOF/cancel fail-closed behavior, and
validation handoff facts. No new Copilot implementation should start from
Issue #79.

Issue #81 admits
`IAU-runtime-settings-cli-validation-proof-out-v1` for
`runtime-settings-cli-validation-proof-out-v1` and T009-T014 only. Issue #81
is an admission issue and must not be reused for implementation. Issue #83
implements and closes only the pure proof-out adapter: `--proof-out <dir>`
request facts, deterministic proof JSON and issue Markdown from the admitted
proof-artifact contract, missing validation/proof facts and unsupported target
fail-closed behavior, non-interactive copyable guidance, and blocked
side-effect facts. The proof-out adapter consumes supplied validation/proof
facts; it does not run validation. Runtime settings CLI validation proof-out
adapter behavior beyond pure proof-out facts remains blocked.

Issue #85 admits
`IAU-runtime-settings-cli-validation-proof-out-file-emission-v1` for
`runtime-settings-cli-validation-proof-out-file-emission-v1` and T009-T016
only. Issue #85 is an admission issue and must not be reused for
implementation. Issue #87 implements and closes the file-emission contract for
T009-T016 only: file emission from ready proof-out adapter facts, creating the
supported target directory when safe, writing exactly
`vihs-validation-proof.json` and
`vihs-validation-issue.md`, reporting deterministic write-result facts, and fail
closed without hidden partial success. It does not run validation or create new
validation facts. No new Copilot implementation should start from Issue #87.
Issue #89 imports `runtime-settings-cli-validation-runtime-outcome-v1` and
admits `IAU-runtime-settings-cli-validation-runtime-outcome-v1` for T009-T016
only. Issue #89 is an admission issue and must not be reused for
implementation. Issue #91 implements and closes only pure runtime outcome fact
shaping from supplied public-safe runtime selection facts; it must not invoke
runtime locators or execute validation.

Issue #93 imports `runtime-settings-cli-validation-command-contract-v1` and
admits `IAU-runtime-settings-cli-validation-command-contract-v1` for T009-T018
only. Issue #93 is an admission issue and must not be reused for
implementation. Issue #95 implements and closes it through PR #96 for
T009-T018 only. The implemented IAU adds only the pure
`createRuntimeSettingsValidationCommandResult(input = {})` contract for
`vihs --validate` and optional `--proof-out <dir>` composition through the
already admitted proof-out file-emission contract. Future work must not execute
validation, inspect the OS, invoke runtime locators, call LabVIEWCLI, call
Docker, wire raw terminal processes, publish packages, mutate launcher/profile
state, or copy source. `validate-plan-only` remained blocked for that IAU and
is admitted separately by Issue #99.

Issue #99 imports `runtime-settings-cli-validation-plan-only-v1` and admits
`IAU-runtime-settings-cli-validation-plan-only-v1` for T009-T016 only. Issue
#99 is an admission issue and must not be reused for implementation. The
implementation handoff is Issue #101. Issue #102 and PR #103 repair and close
the final plan-only command-contract behavior. The implemented IAU adds only a
pure `validate-plan-only` branch over
`createRuntimeSettingsValidationCommandResult(input = {})` that returns
deterministic proof-out target and artifact planning facts without calling the
proof-out file-emission writer or writing files. Future work must not execute
validation, inspect the OS, invoke runtime locators, call LabVIEWCLI, call
Docker, wire raw terminal processes, publish packages, mutate launcher/profile
state, write files for plan-only, or copy source without a separate public
admission.

Issue #106 imports
`runtime-settings-cli-validation-host-runtime-preflight-v1` and admits
`IAU-runtime-settings-cli-validation-host-runtime-preflight-v1` for T009-T016
only. Issue #106 is an admission issue and must not be reused for
implementation. Issue #108 implements and closes it through PR #109 for
T009-T016 only. The implemented IAU adds only a pure
`createRuntimeSettingsValidationHostRuntimePreflight(input = {})` adapter over
supplied public-safe host candidate facts. Future work must not inspect the
OS, invoke runtime locators, discover private paths, execute validation, call
LabVIEWCLI, call Docker, wire raw terminal processes, write files from the host
preflight adapter, publish packages, mutate launcher/profile state, or copy
source without a separate public admission.

Issue #106 admission temporarily set the current IAU to
`IAU-runtime-settings-cli-validation-host-runtime-preflight-v1`; Issue #108 and
PR #109 completed it. Before Issue #106 admission, the previous plan-only
closeout recorded:

Current Implementation Admission Unit:
`none`.

Current Implementation Admission Unit:
`none`.

The Copilot plan must target `develop`, read this workflow first, and name how
blocked work remains blocked.

## Blocked Work

Do not implement these without a separate bridge admission:

- LabVIEWCLI command execution
- Docker command execution or container orchestration
- documentation navigation or rendering beyond the admitted minimum command shell
- runtime settings CLI terminal entrypoint implementation beyond
  `IAU-runtime-settings-cli-terminal-entrypoint-materialization-v1`
- runtime settings CLI terminal prompt-loop implementation beyond
  `IAU-runtime-settings-cli-terminal-prompt-loop-v1`
- runtime settings CLI terminal I/O adapter behavior beyond pure terminal
  session/input facts
- runtime settings CLI validation proof-out adapter behavior beyond pure
  proof-out request, target, artifact, and guidance facts
- runtime settings CLI validation proof-out file-emission behavior beyond
  writing ready adapter payload facts as exactly two files
- runtime settings CLI validation runtime-outcome behavior beyond pure mapping
  from supplied public-safe runtime selection facts
- runtime settings CLI validation command-result behavior beyond the admitted
  pure `vihs --validate` command contract
- runtime settings CLI validation plan-only behavior beyond the admitted
  no-write proof-out planning facts branch
- runtime settings CLI validation host runtime preflight behavior beyond the
  admitted supplied-facts-only host preflight adapter
- OS scanning, filesystem walking, registry probing, PATH probing, environment
  probing, private path discovery, or runtime locator invocation
- file writes from the host preflight adapter
- runtime settings mutation beyond the admitted provider/version/bitness
  settings-write contract
- validation behavior beyond the admitted pure `vihs --validate` readback
  contract
- validation proof artifact behavior beyond the admitted pure proof JSON and
  issue-body contract
- new validation fact generation in the proof-out file-emission lane
- compare execution
- no-argument interactive selection beyond the admitted pure selection-state
  contract
- OS-specific raw stdin/TTY process drivers beyond the admitted pure terminal
  session/input adapter contract
- runtime locator invocation or OS inspection beyond the admitted pure runtime
  outcome fact adapter
- runtime execution or terminal process wiring beyond the admitted validation
  command-result contract
- proof-out file generation beyond the admitted validation proof-out adapter
  and file-emission IAU
- live already-running VS Code session uptake proof
- observation report rendering for T014-T016
- Marketplace publication or packaging
- source copying from another VI History product line

If a blocked task appears necessary, stop and open a new public issue with the
blocker instead of expanding the implementation scope.

## Local Copilot Flow

1. Start from `develop`.
2. Confirm a new bridge-admitted IAU exists with preflight `status: pass`.
3. Create a feature branch for the admitted IAU.
4. Ask Copilot to plan first, without changing code. The plan must name files
   expected to change, tests to add or update, how blocked work remains blocked,
   and validation commands.
5. After the plan, ask Copilot to implement only the admitted tasks from the
   public work packet.
6. Keep implementation behavior clean-room and traceable to imported
   requirement IDs.
7. Run validation before opening a PR.

Use these checks:

```bash
npm test
npm run check
git diff --check
```

## Web Copilot Flow

Do not use Issue #4 or Issue #27 as a new implementation packet after their
PRs merge. Future work must use the issue named by the next public bridge
admission record. The PR must target `develop` and state the exact admitted IAU
it implements.

The PR summary should include:

- the implementation plan used before code changes
- the exact admitted IAU and completed tasks
- tests added or updated
- confirmation that execution and Marketplace work remain blocked
- validation command results

## Clarification Rule

When behavior is ambiguous, do not infer from private repositories. Record the
question in a new public issue and wait for the public Spec Kit or admission
artifacts to be updated.
