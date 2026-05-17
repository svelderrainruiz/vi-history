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

## Current Work Packet

GitHub Issue #4 is the public implementation issue. The current admitted unit is
`IAU-runtime-contract-proof-intake-v1`.

Allowed tasks:

- `T026`: add tests for Linux host LabVIEW proof classification.
- `T027`: add tests rejecting Linux Docker, WSL, host-provider proof, or reports without proof packets as Windows Docker Desktop proof.
- `T028`: add tests for `vihs validate-fixture` proof JSON and issue-body generation.
- `T029`: implement proof packet writer and issue-body generation.
- `T030`: implement Windows Docker Desktop proof intake validation.

Expected write area:

- `src/`
- `tests/`
- public docs only when the implementation proof summary needs an update

## Blocked Work

Do not implement these in the current PR:

- LabVIEWCLI command execution
- Docker command execution or container orchestration
- Marketplace publication or packaging
- source copying from another VI History product line

If a blocked task appears necessary, stop and update Issue #4 with the blocker
instead of expanding the implementation scope.

## Local Copilot Flow

1. Start from `develop`.
2. Create a feature branch for the current IAU.
3. Ask Copilot to plan first, without changing code. The plan must name files
   expected to change, tests to add or update, how execution and Marketplace
   work remain blocked, and validation commands.
4. After the plan, ask Copilot to implement only `T026` through `T030` from the
   files listed in this workflow.
5. Keep implementation behavior clean-room and traceable to imported
   requirement IDs.
6. Run validation before opening a PR.

Use these checks:

```bash
npm test
npm run check
git diff --check
```

## Web Copilot Flow

Use Issue #4 as the web-mode work packet. The PR must target `develop` and
state that it implements only `IAU-runtime-contract-proof-intake-v1`.

The PR summary should include:

- the implementation plan used before code changes
- completed tasks from `T026` through `T030`
- tests added or updated
- confirmation that execution and Marketplace work remain blocked
- validation command results

## Clarification Rule

When behavior is ambiguous, do not infer from private repositories. Record the
question on Issue #4 and wait for the public Spec Kit or admission artifacts to
be updated.
