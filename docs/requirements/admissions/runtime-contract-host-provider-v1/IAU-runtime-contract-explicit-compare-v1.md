# IAU Runtime Contract Explicit Compare

## State

`IAU-runtime-contract-explicit-compare-v1` is admitted for the MIT authority.
Its preflight records `status: pass`.

## Scope

- `T012`: add tests for commit-pair selection retaining selected/base commit
  facts.
- `T013`: add tests proving compare does not start before explicit user action.
- `T014`: implement clean-room compare-action state flow.
- `T015`: render selected commit, base commit, provider, version, and bitness
  facts before execution.

## Boundary

This IAU uses the public import packet and Spec Kit feature only. It does not
admit runtime-provider implementation, proof intake, Marketplace publication, or
source copying from another product line.

## Preflight

`IAU-runtime-contract-explicit-compare-v1-preflight-v1` records `status:
pass`. Implementation may start for `T012` through `T015` only.

Tasks `T016` through `T030` remain blocked until this IAU merges.
