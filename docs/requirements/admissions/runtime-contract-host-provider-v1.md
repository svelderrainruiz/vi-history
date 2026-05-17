# Runtime Contract Host Provider Admission

## State

`runtime-contract-host-provider-v1` has an implemented foundation IAU. The
current explicit-compare IAU is `preflight-required`, so implementation remains
blocked until its preflight records `status: pass`.

## Admission Basis

- The public import packet is present.
- The Spec Kit feature has locked `spec.md`, `plan.md`, and `tasks.md`.
- Redaction and artifact consistency checks pass.
- The governed released extension supports requirement maturity, not source
  reuse.
- Implementation sharing remains `none`.

## Completed IAU

`IAU-runtime-contract-foundation-v1` completed tasks `T007` through `T011`:

- runtime selection data contract
- comparison command-plan contract
- proof packet contract
- provider policy contract
- imported requirement traceability tests

## Current IAU

`IAU-runtime-contract-explicit-compare-v1` is scoped for tasks `T012` through
`T015`, but code work is blocked until
`IAU-runtime-contract-explicit-compare-v1-preflight-v1` records
`status: pass`:

- commit-pair selection retains selected/base commit facts
- compare does not start before explicit user action
- clean-room compare-action state flow
- selected commit, base commit, provider, version, and bitness facts render
  before execution

Tasks `T016` through `T030` remain blocked until this IAU merges.
