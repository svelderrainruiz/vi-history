# Preflight: IAU Runtime Settings CLI Prepare Command Shell

Status: `pass`

Implementation start is allowed for tasks `T009` through `T011` only after this
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

- `T009`: prepare-command handler registration tests.
- `T010`: launcher materialization and recovery fact tests.
- `T011`: minimum prepare-command shell.

`T012` through `T015`, settings mutation, `vihs --validate`, runtime
validation, compare execution, LabVIEWCLI execution, Docker orchestration,
packaging, Marketplace publication, and source copying remain blocked.
