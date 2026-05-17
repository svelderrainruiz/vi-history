# Runtime Contract Host Provider Admission

## State

`runtime-contract-host-provider-v1` has implemented foundation and
explicit-compare IAUs. The current runtime-facts IAU has preflight `status:
pass`, so implementation is admitted for `T016` through `T021`.

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

`IAU-runtime-contract-explicit-compare-v1` completed tasks `T012` through
`T015`:

- commit-pair selection retention tests
- explicit user-action gating tests
- clean-room compare-action state flow
- selected/base commit and runtime fact rendering before execution

## Current IAU

`IAU-runtime-contract-runtime-facts-v1` is admitted for tasks `T016` through
`T021`:

- supported host-native LabVIEWCLI runtime selection tests
- unsupported LabVIEW 2024-or-older rejection tests
- missing explicit proof override path fail-closed tests
- runtime discovery and readiness classification
- LabVIEWCLI command-plan creation without command execution
- retained runtime facts in report/proof surfaces

Tasks `T022` through `T030` remain blocked until this IAU merges.
