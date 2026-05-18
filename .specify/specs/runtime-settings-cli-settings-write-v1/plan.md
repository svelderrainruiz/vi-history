# Implementation Plan: Runtime Settings CLI Settings Write

**Branch**: `codex/runtime-settings-cli-settings-write-admission` | **Date**: 2026-05-18 | **Spec**: `spec.md`

**Input**: Feature specification from `.specify/specs/runtime-settings-cli-settings-write-v1/spec.md`

## Summary

Import and lock the runtime settings CLI settings-write contract for the MIT
clean-room Spec Kit authority. The feature defines the next narrow
implementation admission unit after the prepare-command shell:
`IAU-runtime-settings-cli-settings-write-contract-v1`.

This plan admits requirements, Spec Kit artifacts, admission records, preflight
records, validation script coverage, and Issue #47 as the public admission
surface. It does not implement settings-write behavior in this PR.

## Technical Context

**Language/Version**: Node.js 22 for current repository gates. Future
implementation may use JavaScript modules and node:test after the IAU handoff.

**Primary Dependencies**: None for import/spec/admission. Future implementation
should use pure data contracts for settings parsing and writing unless a later
plan admits extension-host tests.

**Storage**: Public requirements files, Spec Kit artifacts, public admission
records, and future public settings-write result contracts.

**Testing**: `npm test` validates import packet shape, Spec Kit artifact
presence, package identity, admission state, redaction, traceability, and the
clean-room boundary.

**Target Platform**: Public MIT repository workflow. No Windows desktop,
LabVIEWCLI, Docker, VSIX packaging, Marketplace, or live-session proof
environment is required for this admission.

**Project Type**: Spec Kit-first public requirements authority with clean-room
implementation gated by IAUs.

**Constraints**: No implementation source is copied from other product lines.
Marketplace publication remains disabled. Settings-write admission does not
imply runtime validation, compare execution, live-session proof, packaging, or
publishing admission.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Clean-room requirements authority: PASS. The plan imports requirements and
  writes public Spec Kit/admission artifacts only.
- Spec Kit before implementation: PASS. No runnable source is added.
- Immutable imported requirement IDs: PASS. Imported IDs are preserved without
  redefining source semantics.
- Public evidence without private leakage: PASS. Redaction and clean-room scans
  are repository gates.
- Marketplace disabled until governed: PASS. This feature records no
  publication workflow.

## Project Structure

### Documentation

```text
.specify/specs/runtime-settings-cli-settings-write-v1/
├── spec.md
├── plan.md
└── tasks.md

docs/requirements/imports/runtime-settings-cli-settings-write-v1/
├── manifest.json
├── syrs.md
├── srs.md
├── rtm.csv
└── test-plan.md

docs/requirements/admissions/
├── runtime-settings-cli-settings-write-v1.json
└── runtime-settings-cli-settings-write-v1.md
```

### Source Code

No product source is changed by this admission branch.

## Phase 0: Research

The bridge-readiness record split settings-write behavior from runtime
validation, no-argument interactive selection, compare execution, live-session
proof, packaging, and Marketplace behavior because settings mutation has a
separate risk profile and can be tested as a pure contract.

## Phase 1: Design And Contracts

Contracts to preserve for the admitted IAU:

- The settings-write contract updates only provider, LabVIEW version, and
  LabVIEW bitness facts.
- The effective settings target is explicit.
- Unrelated settings content is preserved.
- Unsupported target shapes fail closed with a stable blocked reason.
- No validation, compare execution, LabVIEWCLI, Docker, live-session proof,
  packaging, or Marketplace behavior starts from the settings-write contract.

## Validation Gates

- `npm test`
- `npm run check`
- `git diff --check`
- Public redaction scan over this feature's import, Spec Kit, admission, and
  guidance artifacts
- Bridge artifact validation for `runtime-settings-cli-settings-write-v1`

## Implementation Admission

`IAU-runtime-settings-cli-settings-write-contract-v1` is admitted for T009-T012
only after this admission PR merges with its preflight record at
`status: "pass"`.

Implementation must not start T013-T017. Future implementation outside this
IAU requires a separate named IAU, public admission records, and a preflight
record with `status: "pass"`.
