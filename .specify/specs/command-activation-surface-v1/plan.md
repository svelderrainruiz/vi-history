# Implementation Plan: Command Activation Surface

**Branch**: `codex/command-activation-import` | **Date**: 2026-05-18 | **Spec**: `spec.md`

**Input**: Feature specification from `.specify/specs/command-activation-surface-v1/spec.md`

## Summary

Import and lock the command activation surface requirements slice for the MIT
clean-room Spec Kit authority. The feature defines explicit command activation
events, public command IDs and titles, and blocked runtime/release scope.

This plan admits requirements, Spec Kit artifacts, admission records,
validation script coverage, and
`IAU-command-activation-manifest-contract-v1` for T009-T012 only. It does not
admit command handlers, runtime settings CLI materialization, compare
execution, packaging, or Marketplace publication.

## Technical Context

**Language/Version**: Node.js 22 for current repository gates. Future
implementation may use JavaScript or TypeScript after a separate IAU preflight.

**Primary Dependencies**: None for the import/spec baseline. Future manifest
contract implementation should stay static and deterministic unless a later IAU
admits extension-host behavior.

**Storage**: Public requirements files, Spec Kit artifacts, and public
admission records.

**Testing**: `npm test` validates import packet shape, Spec Kit artifact
presence, package identity, admission state, redaction, traceability, and the
clean-room boundary.

**Target Platform**: Public MIT repository workflow. No Windows desktop,
LabVIEWCLI, Docker, VSIX packaging, or Marketplace environment is required for
this baseline.

**Project Type**: Spec Kit-first public requirements authority with clean-room
implementation gated by IAUs.

**Performance Goals**: Not applicable for import/spec baseline. Future
manifest checks should be static and fast.

**Constraints**: No implementation source is copied from other product lines.
Marketplace publication remains disabled. Command activation must not imply
command handler, execution, packaging, or publishing admission.

**Scale/Scope**: One imported requirement ID, one import/spec-lock issue, and
one manifest-contract IAU.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Clean-room requirements authority: PASS. The plan imports requirements and
  writes public Spec Kit artifacts only.
- Spec Kit before implementation: PASS. No runnable source is added.
- Immutable imported requirement IDs: PASS. `VHS-REQ-594` is preserved without
  redefining source semantics.
- Public evidence without private leakage: PASS. Redaction and clean-room scans
  are repository gates.
- Marketplace disabled until governed: PASS. This feature records no
  publication workflow.

## Project Structure

### Documentation (this feature)

```text
.specify/specs/command-activation-surface-v1/
├── spec.md
├── plan.md
└── tasks.md

docs/requirements/imports/command-activation-surface-v1/
├── manifest.json
├── syrs.md
├── srs.md
├── rtm.csv
└── test-plan.md

docs/requirements/admissions/
├── command-activation-surface-v1.json
└── command-activation-surface-v1.md
```

### Source Code (repository root)

```text
scripts/
└── validate-spec-kit-imports.mjs
```

**Structure Decision**: This branch adds import/spec/admission artifacts and
extends validation coverage. It does not add product implementation source.

## Phase 0: Research

No additional research is required for import/spec. The governed bridge
readiness packet identifies the public-safe export shape, blocked scope, and
target feature path.

## Phase 1: Design And Contracts

Contracts to preserve for a future IAU:

- Command activation contract: explicit `onCommand:` activation events for the
  three public commands.
- Command contribution contract: stable command IDs, titles, and category.
- Blocked runtime contract: no command handlers, execution, packaging, or
  Marketplace publication from this feature alone.

## Validation Gates

- `npm test`
- `npm run check`
- `git diff --check`
- Public redaction scan over this feature's import, Spec Kit, admission, and
  guidance artifacts
- Bridge artifact validation for `command-activation-surface-v1`

## Complexity Tracking

No constitution violations are admitted.

## Implementation Admission

`IAU-command-activation-manifest-contract-v1` is admitted by this plan.

Implementation may complete only T009-T012. Future implementation work outside
that scope requires:

1. a named IAU,
2. public admission records,
3. a preflight record with `status: "pass"`,
4. passing redaction and bridge artifact validation, and
5. a bounded implementation issue or PR scoped only to admitted tasks.
