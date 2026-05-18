# Imported System Requirements Slice: Installed-User Observation Public Surface

## Document Control

- Slice ID: `installed-user-observation-public-surface-v1`
- Source baseline: `v1.3.16`
- Target feature: `installed-user-observation-public-surface-v1`
- Import status: public-safe requirements core

## System Context

This slice does not import a separate system-level requirement ID. It brings
one governed software requirement into the MIT authority so public observation
cycles can be specified before any implementation starts.

The intended public system behavior is:

- Public installed-user feedback is treated as observation input, not release
  proof by itself.
- Observation facts are separated into `observed`, `deferred`, and `blocked`
  buckets.
- Repeated confusion is routed to user documentation, bundled documentation,
  video-planning candidates, or future issue work before SemVer decisions.
- Windows Docker Desktop Windows-container proof remains a separate gate.
- Marketplace publication remains disabled for this repository until a later
  decision admits that channel.

## Public Boundaries

| Boundary | Public System Rule | Verification |
| --- | --- | --- |
| Feedback | Public issue input may trigger observation cycles, but it does not prove release readiness by itself. | Spec and test-plan review |
| Proof | Windows Docker Desktop proof stays separate from installed-user observation. | Spec and test-plan review |
| Execution | LabVIEWCLI execution and Docker orchestration are not admitted by this slice. | Spec and task review |
| Release | Marketplace publication is not admitted by this slice. | Spec and admission review |

## Import Notes

Imported requirement IDs are immutable baseline references. Public-local
requirements may be added for divergent behavior, but imported IDs must keep
their source meaning.
