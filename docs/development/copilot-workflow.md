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

The Copilot plan must target `develop`, read this workflow first, and name how
blocked work remains blocked.

## Blocked Work

Do not implement these without a separate bridge admission:

- LabVIEWCLI command execution
- Docker command execution or container orchestration
- documentation navigation or rendering beyond the admitted minimum command shell
- runtime settings CLI terminal entrypoint implementation beyond
  `IAU-runtime-settings-cli-terminal-entrypoint-materialization-v1`
- runtime settings mutation beyond the admitted provider/version/bitness
  settings-write contract
- validation behavior beyond the admitted pure `vihs --validate` readback
  contract
- validation proof artifact behavior beyond the admitted pure proof JSON and
  issue-body contract
- compare execution
- no-argument interactive selection beyond the admitted pure selection-state
  contract
- terminal process prompt loops or raw stdin handling
- proof-out file generation
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
