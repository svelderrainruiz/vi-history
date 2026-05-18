# Installed-User Observation Public Surface Admission

## State

`installed-user-observation-public-surface-v1` is `implemented` for the first
named observation-model IAU.

Issue #25 imported `VHS-REQ-595` and locked the public Spec Kit feature. Issue
#27 is the public handoff for `IAU-installed-user-observation-model-v1` and
closes after the implementation PR merges.

## Admission Basis

- The public import packet is present.
- The Spec Kit feature has `spec.md`, `plan.md`, and `tasks.md`.
- The import preserves `VHS-REQ-595` without redefining its semantics.
- Public feedback is treated as observation input, not release proof by itself.
- Implementation sharing remains `none`.
- Marketplace publication remains disabled.

## Completed IAU

`IAU-installed-user-observation-model-v1` completed `T009` through `T013`:

- `T009`: define an observation-cycle data contract.
- `T010`: define an observation-fact classification contract.
- `T011`: define routing-decision and SemVer recommendation contracts.
- `T012`: add tests for `observed`, `deferred`, and `blocked` fact buckets.
- `T013`: add tests that public feedback is input, not release proof.

The preflight record has `status: pass`, and the implementation closeout keeps
reporting, execution, proof, and Marketplace scope blocked.

## Completed Spec Scope

- `T001` through `T008`: public import, Spec Kit artifacts, admission records,
  active feature pin, and validation coverage.

## Completed Implementation Scope

- `T009` through `T013`: observation-cycle, observation-fact, routing-decision,
  SemVer recommendation, fact bucket, and public-feedback-as-input contracts.

## Blocked Work

Observation report rendering (`T014` through `T016`), LabVIEWCLI execution,
Docker command execution or orchestration, Windows Docker Desktop proof claims,
Marketplace publication, and source copying remain blocked until separately
admitted.

## Future Gate

Future implementation work may start only after a new named IAU has a public
preflight record with `status: pass`.
