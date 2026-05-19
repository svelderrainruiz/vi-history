# Implementation Plan: Runtime Settings CLI Validation Plan-Only

**Branch**:
`codex/runtime-settings-cli-validation-plan-only-admission`

**Date**: 2026-05-19

**Spec**: `.specify/specs/runtime-settings-cli-validation-plan-only-v1/spec.md`

## Summary

Import governed slice `runtime-settings-cli-validation-plan-only-v1` and admit
`IAU-runtime-settings-cli-validation-plan-only-v1` for a later clean-room
implementation handoff.

This admission PR does not implement code. It locks the public MIT import,
Spec Kit feature, admission ledger, IAU record, preflight record, validation
coverage, and guidance for the next bounded unit: `validate-plan-only` facts
over the already implemented validation command contract.

## Technical Context

- Public authority: `svelderrainruiz/vi-history`
- Target branch: `develop`
- Package: `vi-history`
- Runtime: Node.js and TypeScript
- Source baseline: `v1.3.16`
- Source commit evaluated:
  `93177a013b5294c0e05745f5af67b866e9b15568`
- Governed bridge admission commit:
  `331b6eab04068299b85405d36bf0ba033dbd9b26`
- Public admission issue: Issue #99
- Candidate IAU:
  `IAU-runtime-settings-cli-validation-plan-only-v1`
- Public contract:
  `createRuntimeSettingsValidationCommandResult(input = {})`
- Request mode: `validate-plan-only`
- Marketplace publication: disabled
- Implementation sharing: none

## Constitution Check

- Clean-room authority: pass. The slice imports public-safe requirements and
  does not copy implementation source.
- Spec Kit before implementation: pass. This PR creates import, spec, plan,
  tasks, admission, and preflight records before implementation starts.
- Immutable imported IDs: pass. The import preserves `VHS-REQ-546` and treats
  `VHS-REQ-537`, `VHS-REQ-543`, `VHS-REQ-544`, and `VHS-REQ-545` as
  prerequisites.
- Public evidence without private leakage: pass. Public redaction validation
  is required before merge.
- Marketplace disabled: pass. No publication, package/bin, VSIX, or
  Marketplace work is admitted.

## Implementation Admission Unit

Admitted after this PR merges and a separate implementation handoff issue is
created:

`IAU-runtime-settings-cli-validation-plan-only-v1`

Admitted tasks: T009-T016.

The IAU may add tests and the minimum pure command-result branch needed for
`validate-plan-only`.

## Explicitly Blocked

- Calling the proof-out file-emission writer for plan-only
- File writes for plan-only
- Runtime locator invocation
- OS inspection or private path discovery
- Runtime validation execution
- Compare execution
- LabVIEWCLI execution
- Docker command execution or orchestration
- Raw terminal process wiring or live terminal proof
- Package/bin publication, VSIX packaging, Marketplace publication, release
  automation, or launcher/profile mutation
- Source copying from another VI History product line

## Validation

- `npm test`
- `npm run check`
- `git diff --check`
- public redaction scan over touched public artifacts
- bridge artifact validation for
  `runtime-settings-cli-validation-plan-only-v1`
- Spec Kit CLI version/features check
