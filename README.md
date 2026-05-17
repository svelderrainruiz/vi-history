# VI History

`svelderrainruiz/vi-history` is the MIT-licensed Spec Kit implementation
authority for VI History.

This repository starts from requirements and Spec Kit artifacts, not from copied
extension source. The initial baseline imports the
`runtime-contract-host-provider-v1` requirements slice and keeps implementation
blocked until the feature spec, plan, and tasks are locked.

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
- #4 implements the runtime contract only after #3 is locked.
- #5 decides any future Marketplace publication posture.

## Validation

Run:

```bash
npm test
```

The current gates validate import packet shape, Spec Kit artifact presence,
package identity, redaction, and the clean-room boundary.
