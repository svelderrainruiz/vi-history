# Implementation Plan: Installed-User Documentation Command

**Branch**: `codex/installed-user-documentation-command-admission` | **Date**: 2026-05-18 | **Spec**: `spec.md`

**Input**: Feature specification from `.specify/specs/installed-user-documentation-command-v1/spec.md`

## Summary

Import and lock the installed-user documentation command for the MIT
clean-room Spec Kit authority. The feature defines the next narrow
implementation admission unit after command-handler entrypoint shell:
`IAU-documentation-command-panel-shell-v1`.

This plan admits requirements, Spec Kit artifacts, admission records, preflight
records, validation script coverage, and Issue #39 as the public admission
surface. It does not implement documentation command behavior in this PR.

## Technical Context

**Language/Version**: Node.js 22 for current repository gates. Future
implementation may use JavaScript modules and node:test after the IAU handoff.

**Primary Dependencies**: None for import/spec/admission. Future implementation
should use test doubles for command registration and documentation opening
unless a later plan admits extension-host tests.

**Storage**: Public requirements files, Spec Kit artifacts, public admission
records, and future public bundled documentation payloads.

**Testing**: `npm test` validates import packet shape, Spec Kit artifact
presence, package identity, admission state, redaction, traceability, and the
clean-room boundary.

**Target Platform**: Public MIT repository workflow. No Windows desktop,
LabVIEWCLI, Docker, VSIX packaging, or Marketplace environment is required for
this admission.

**Project Type**: Spec Kit-first public requirements authority with clean-room
implementation gated by IAUs.

**Constraints**: No implementation source is copied from other product lines.
Marketplace publication remains disabled. Documentation command admission does
not imply runtime settings CLI materialization, compare execution, packaging,
or publishing admission.

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
.specify/specs/installed-user-documentation-command-v1/
├── spec.md
├── plan.md
└── tasks.md

docs/requirements/imports/installed-user-documentation-command-v1/
├── manifest.json
├── syrs.md
├── srs.md
├── rtm.csv
└── test-plan.md

docs/requirements/admissions/
├── installed-user-documentation-command-v1.json
└── installed-user-documentation-command-v1.md
```

### Source Code

No product source is changed by this admission branch.

## Phase 0: Research

The governed bridge-readiness record split documentation command behavior from
runtime settings, compare execution, packaging, and Marketplace behavior
because documentation payloads have separate public-safety and user-information
requirements.

## Phase 1: Design And Contracts

Contracts to preserve for the admitted IAU:

- `labviewViHistory.openDocumentation` remains explicit command activation.
- Bundled documentation has a public-safe manifest/page contract.
- The documentation command opens or reports local bundled documentation
  without repository access.
- No Git, LabVIEWCLI, Docker, compare execution, packaging, or Marketplace
  behavior starts from the documentation command.

## Validation Gates

- `npm test`
- `npm run check`
- `git diff --check`
- Public redaction scan over this feature's import, Spec Kit, admission, and
  guidance artifacts
- Bridge artifact validation for `installed-user-documentation-command-v1`

## Implementation Admission

`IAU-documentation-command-panel-shell-v1` is admitted for T009-T011 only after
this admission PR merges with its preflight record at `status: "pass"`.

Implementation must not start T012-T015. Future implementation outside this
IAU requires a separate named IAU, public admission records, and a preflight
record with `status: "pass"`.
