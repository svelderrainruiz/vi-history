# Preflight: IAU Runtime Settings CLI Validation Readback Contract

Status: `pass`

Implementation start is allowed for tasks `T009` through `T012` only after this
admission PR merges to `develop` and a separate implementation handoff issue is
created.

## Required Checks

- Constitution current: pass.
- Public requirements import present: pass.
- Spec present: pass.
- Plan present: pass.
- Tasks present: pass.
- Blocked scope explicit: pass.
- Bridge artifact validation: pass.
- Public redaction: pass.
- Clean-room boundary: pass.
- Marketplace disabled: pass.

## Scope

Admitted implementation scope:

- `T009`: persisted settings and effective target readback tests.
- `T010`: runtime outcome fact tests with execution/proof-out blocked.
- `T011`: fail-closed missing or unsupported settings tests.
- `T012`: minimum validation readback contract.

`T013` through `T018`, no-argument interactive selection, proof-out file
generation, compare execution, LabVIEWCLI execution, Docker orchestration,
live-session proof, packaging, Marketplace publication, and source copying
remain blocked.
