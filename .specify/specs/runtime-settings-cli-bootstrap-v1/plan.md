# Implementation Plan: Runtime Settings CLI Bootstrap

**Branch**: `codex/runtime-settings-cli-bootstrap-admission` | **Date**: 2026-05-18 | **Spec**: `spec.md`

**Input**: Feature specification from `.specify/specs/runtime-settings-cli-bootstrap-v1/spec.md`

## Summary

Import and lock the runtime settings CLI bootstrap surface for the MIT
clean-room Spec Kit authority. The feature defines the next narrow
implementation admission unit after the installed-user documentation command:
`IAU-runtime-settings-cli-prepare-command-shell-v1`.

This plan admits requirements, Spec Kit artifacts, admission records, preflight
records, validation script coverage, and Issue #43 as the public admission
surface. It does not implement runtime settings CLI behavior in this PR.

## Technical Context

**Language/Version**: Node.js 22 for current repository gates. Future
implementation may use JavaScript modules and node:test after the IAU handoff.

**Primary Dependencies**: None for import/spec/admission. Future implementation
should use test doubles for command registration and pure data contracts for
launcher materialization and recovery facts unless a later plan admits
extension-host tests.

**Storage**: Public requirements files, Spec Kit artifacts, public admission
records, and future public command-result contracts.

**Testing**: `npm test` validates import packet shape, Spec Kit artifact
presence, package identity, admission state, redaction, traceability, and the
clean-room boundary.

**Target Platform**: Public MIT repository workflow. No Windows desktop,
LabVIEWCLI, Docker, VSIX packaging, or Marketplace environment is required for
this admission.

**Project Type**: Spec Kit-first public requirements authority with clean-room
implementation gated by IAUs.

**Constraints**: No implementation source is copied from other product lines.
Marketplace publication remains disabled. Runtime settings CLI bootstrap
admission does not imply settings mutation, runtime validation, compare
execution, packaging, or publishing admission.

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
.specify/specs/runtime-settings-cli-bootstrap-v1/
├── spec.md
├── plan.md
└── tasks.md

docs/requirements/imports/runtime-settings-cli-bootstrap-v1/
├── manifest.json
├── syrs.md
├── srs.md
├── rtm.csv
└── test-plan.md

docs/requirements/admissions/
├── runtime-settings-cli-bootstrap-v1.json
└── runtime-settings-cli-bootstrap-v1.md
```

### Source Code

No product source is changed by this admission branch.

## Phase 0: Research

The governed bridge-readiness record split runtime settings CLI bootstrap from
settings mutation, runtime validation, compare execution, packaging, and
Marketplace behavior because launcher materialization and recovery facts are a
separate installed-user command contract.

## Phase 1: Design And Contracts

Contracts to preserve for the admitted IAU:

- `labviewViHistory.prepareLocalRuntimeSettingsCli` remains explicit command
  activation.
- The prepare command reports launcher materialization facts for prepared,
  stale, and missing launcher state.
- Recovery facts are explicit and do not rely on hidden path reconstruction,
  profile editing, admin elevation, or machine-wide install doctrine.
- No settings mutation, runtime validation, compare execution, LabVIEWCLI,
  Docker, packaging, or Marketplace behavior starts from the prepare command.

## Validation Gates

- `npm test`
- `npm run check`
- `git diff --check`
- Public redaction scan over this feature's import, Spec Kit, admission, and
  guidance artifacts
- Bridge artifact validation for `runtime-settings-cli-bootstrap-v1`

## Implementation Admission

`IAU-runtime-settings-cli-prepare-command-shell-v1` is admitted for T009-T011
only after this admission PR merges with its preflight record at
`status: "pass"`.

Implementation must not start T012-T015. Future implementation outside this
IAU requires a separate named IAU, public admission records, and a preflight
record with `status: "pass"`.
