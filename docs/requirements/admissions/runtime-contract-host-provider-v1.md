# Runtime Contract Host Provider Admission

## State

`runtime-contract-host-provider-v1` has implemented foundation,
explicit-compare, runtime-facts, provider-policy, and proof-intake IAUs. Issue
#4 is complete after the closeout PR reconciles this public admission surface
with the final implementation proof summary.

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

`IAU-runtime-contract-runtime-facts-v1` completed tasks `T016` through `T021`:

- supported host-native LabVIEWCLI runtime selection tests
- unsupported LabVIEW 2024-or-older rejection tests
- missing explicit proof override path fail-closed tests
- runtime discovery and readiness classification
- LabVIEWCLI command-plan creation without command execution
- retained runtime facts in report/proof surfaces

`IAU-runtime-contract-provider-policy-v1` completed tasks `T022` through
`T025`:

- host-native default provider selection tests
- explicit Docker expert-provider selection tests
- tests proving Docker is never selected implicitly
- provider policy selection and failure guidance

`IAU-runtime-contract-proof-intake-v1` completed tasks `T026` through `T030`:

- Linux host LabVIEW proof classification tests
- rejection tests for Linux Docker, WSL, host-provider proof, or reports
  without proof packets as Windows Docker Desktop proof
- `vihs validate-fixture` proof JSON and issue-body generation tests
- proof packet writer and issue-body generation
- Windows Docker Desktop proof intake validation

## Blocked Work

No current IAU is admitted for new implementation. LabVIEWCLI command execution,
Docker command execution or container orchestration, Marketplace publication,
and source copying remain blocked until separately admitted.
