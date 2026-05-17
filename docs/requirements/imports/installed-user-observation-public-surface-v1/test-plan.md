# Test Plan: Installed-User Observation Public Surface

## Scope

This test plan validates the public requirements import and Spec Kit feature
for `installed-user-observation-public-surface-v1`.

No runnable implementation is admitted by this slice.

## Verification Items

| ID | Requirement | Verification |
| --- | --- | --- |
| TEST-SPEC-OBS-001 | `VHS-REQ-595` is imported without redefining its semantics. | Review `manifest.json`, `srs.md`, `rtm.csv`, `spec.md`, and `tasks.md`. |
| TEST-SPEC-OBS-002 | Public observation facts use `observed`, `deferred`, and `blocked` buckets. | Review `srs.md`, `spec.md`, and `tasks.md`. |
| TEST-SPEC-OBS-003 | Public feedback is input, not release proof by itself. | Review `syrs.md`, `spec.md`, `plan.md`, and admission records. |
| TEST-SPEC-OBS-004 | Windows Docker Desktop proof, LabVIEWCLI execution, Docker orchestration, and Marketplace publication remain blocked. | Review `syrs.md`, `spec.md`, `plan.md`, `tasks.md`, and admission records. |

## Required Gates

- `npm test`
- `npm run check`
- `git diff --check`
- Public redaction scan over the import, Spec Kit feature, admission records,
  README, AGENTS guidance, and package metadata
- Bridge artifact validation for
  `installed-user-observation-public-surface-v1`

## Future Implementation Gate

If later work proposes runnable code for this feature, it must create a named
Implementation Admission Unit and a public preflight record with
`status: "pass"` before implementation starts.
