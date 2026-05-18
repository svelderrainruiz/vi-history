# Implementation Plan: Command Handler Entrypoint Shell

**Branch**: `codex/command-handler-entrypoint-admission` | **Date**: 2026-05-18 | **Spec**: `spec.md`

**Input**: Feature specification from `.specify/specs/command-handler-entrypoint-shell-v1/spec.md`

## Summary

Import and lock the command handler entrypoint shell for the MIT clean-room
Spec Kit authority. The feature defines the next narrow implementation
admission unit after command activation manifest metadata:
`IAU-command-handler-entrypoint-shell-v1`.

This plan admits requirements, Spec Kit artifacts, admission records,
preflight records, validation script coverage, and Issue #36 as the public
handoff. It does not implement command handlers in this PR.

## Technical Context

**Language/Version**: Node.js 22 for current repository gates. Future
implementation may use JavaScript modules and node:test after the IAU handoff.

**Primary Dependencies**: None for import/spec/admission. Future entrypoint
shell implementation should use test doubles rather than the real VS Code
extension host unless a later plan admits extension-host tests.

**Storage**: Public requirements files, Spec Kit artifacts, and public
admission records.

**Testing**: `npm test` validates import packet shape, Spec Kit artifact
presence, package identity, admission state, redaction, traceability, and the
clean-room boundary.

**Target Platform**: Public MIT repository workflow. No Windows desktop,
LabVIEWCLI, Docker, VSIX packaging, or Marketplace environment is required for
this admission.

**Project Type**: Spec Kit-first public requirements authority with clean-room
implementation gated by IAUs.

**Constraints**: No implementation source is copied from other product lines.
Marketplace publication remains disabled. Handler entrypoint shell admission
does not imply documentation rendering, runtime settings CLI materialization,
compare execution, packaging, or publishing admission.

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
.specify/specs/command-handler-entrypoint-shell-v1/
├── spec.md
├── plan.md
└── tasks.md

docs/requirements/imports/command-handler-entrypoint-shell-v1/
├── manifest.json
├── syrs.md
├── srs.md
├── rtm.csv
└── test-plan.md

docs/requirements/admissions/
├── command-handler-entrypoint-shell-v1.json
└── command-handler-entrypoint-shell-v1.md
```

### Source Code

No product source is changed by this admission branch.

## Phase 0: Research

The governed bridge-readiness record split T013 from T014-T015 because the
manifest requirement was already implemented, while handler registration,
documentation rendering, and runtime settings CLI materialization have
different requirement and risk boundaries.

## Phase 1: Design And Contracts

Contracts to preserve for the admitted IAU:

- Primary command handler registration for `labviewViHistory.open`.
- No startup activation and no manifest-level Git activation.
- No runtime, documentation-rendering, CLI materialization, packaging, or
  publication behavior from the entrypoint shell.

## Validation Gates

- `npm test`
- `npm run check`
- `git diff --check`
- Public redaction scan over this feature's import, Spec Kit, admission, and
  guidance artifacts
- Bridge artifact validation for `command-handler-entrypoint-shell-v1`

## Implementation Admission

`IAU-command-handler-entrypoint-shell-v1` is admitted for T009-T011 only after
its preflight record has `status: "pass"`.

Implementation must not start T014-T017. Future implementation outside this
IAU requires a separate named IAU, public admission records, and a preflight
record with `status: "pass"`.

