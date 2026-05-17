# VI History

`svelderrainruiz/vi-history` is the MIT-licensed Spec Kit implementation
authority for VI History.

This repository starts from requirements and Spec Kit artifacts, not from copied
extension source. The initial baseline imports the
`runtime-contract-host-provider-v1` requirements slice, locks the feature spec,
plan, and tasks, then records a public admission before implementation begins.

## Authority

- Package name: `vi-history`
- Display name: `VI History`
- Publisher: `svelderrainruiz`
- Extension ID: `svelderrainruiz.vi-history`
- License: MIT
- Version: `0.1.0`
- Marketplace publication: disabled until a later governing decision

## Branch Flow

- `develop` is the integration branch for bootstrap and feature work.
- `main` is the public baseline branch.
- Feature branches target `develop` first, then `develop` promotes to `main`
  after validation is green.

## Current Work

- #1 bootstraps the MIT Spec Kit authority.
- #2 imports `runtime-contract-host-provider-v1`.
- #3 locks the Spec Kit feature spec, plan, and tasks.
- #4 implements admitted runtime-contract IAUs. Foundational contracts `T007`
  through `T011` and explicit-compare tasks `T012` through `T015` are complete;
  the current admitted scope is `T016` through `T021`.
- #5 decides any future Marketplace publication posture.

The current admission ledger is
`docs/requirements/admissions/runtime-contract-host-provider-v1.json`. The
current implementation unit is `IAU-runtime-contract-runtime-facts-v1`; its
preflight is `pass`, so code work for `T016` through `T021` may start.
Use `docs/development/copilot-workflow.md` as the public handoff when working
with Copilot locally or in web mode.

## Validation

Run:

```bash
npm test
```

The current gates validate import packet shape, Spec Kit artifact presence,
package identity, admission state, redaction, traceability, and the clean-room
boundary.
