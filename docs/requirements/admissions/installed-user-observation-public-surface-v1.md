# Installed-User Observation Public Surface Admission

## State

`installed-user-observation-public-surface-v1` is `spec-locked`.

Issue #25 imports `VHS-REQ-595`, locks the public Spec Kit feature, and records
that implementation is not admitted.

## Admission Basis

- The public import packet is present.
- The Spec Kit feature has `spec.md`, `plan.md`, and `tasks.md`.
- The import preserves `VHS-REQ-595` without redefining its semantics.
- Public feedback is treated as observation input, not release proof by itself.
- Implementation sharing remains `none`.
- Marketplace publication remains disabled.

## Completed Spec Scope

- `T001` through `T008`: public import, Spec Kit artifacts, admission records,
  active feature pin, and validation coverage.

## Blocked Work

No current IAU is admitted for implementation. Observation model code,
observation report rendering, LabVIEWCLI execution, Docker command execution or
container orchestration, Windows Docker Desktop proof claims, Marketplace
publication, and source copying remain blocked until separately admitted.

## Future Gate

Future code work requires a named IAU and a public preflight record with
`status: "pass"` before implementation starts.
