# Implementation Plan: Installed-User Observation Public Surface

**Branch**: `codex/installed-user-observation-import` | **Date**: 2026-05-17 | **Spec**: `spec.md`

**Input**: Feature specification from `.specify/specs/installed-user-observation-public-surface-v1/spec.md`

## Summary

Import and lock the installed-user observation public-surface requirements
slice for the MIT clean-room Spec Kit authority. The feature defines public
observation triggers, fact buckets, routing decisions, SemVer recommendation
rules, and blocked proof/release scope.

This plan first admitted requirements, Spec Kit artifacts, admission records,
and validation script coverage only. It now records
`IAU-installed-user-observation-model-v1` as implemented for `T009` through
`T013` after the public preflight passed.

## Technical Context

**Language/Version**: Node.js 22 for current repository gates. Future
implementation may use JavaScript or TypeScript after a separate IAU preflight.

**Primary Dependencies**: None for the import/spec baseline. Future
implementation for the admitted observation model should stay file-based and
deterministic.

**Storage**: Public requirements files, Spec Kit artifacts, and public
observation data contracts. Future reporting storage remains blocked until a
separate IAU admits it.

**Testing**: `npm test` validates import packet shape, Spec Kit artifact
presence, package identity, admission state, redaction, traceability, and the
clean-room boundary.

**Target Platform**: Public MIT repository workflow. No Windows desktop,
LabVIEWCLI, Docker, or Marketplace environment is required for this baseline.

**Project Type**: Spec Kit-first public requirements authority with clean-room
implementation gated by IAUs.

**Performance Goals**: Not applicable for import/spec baseline. Future
observation classification should be deterministic and file-based unless a
later IAU admits integration behavior.

**Constraints**: No implementation source is copied from other product lines.
Marketplace publication remains disabled. Observation input must not become
release proof by itself.

**Scale/Scope**: One imported requirement ID, four user stories, and one
implemented observation-model IAU scoped to `T009` through `T013`.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Clean-room requirements authority: PASS. The plan imports requirements and
  writes public Spec Kit artifacts only.
- Spec Kit before implementation: PASS. No runnable source is added.
- Immutable imported requirement IDs: PASS. `VHS-REQ-595` is preserved without
  redefining source semantics.
- Public evidence without private leakage: PASS. Redaction and clean-room scans
  are repository gates.
- Marketplace disabled until governed: PASS. This feature records no
  publication workflow.

## Project Structure

### Documentation (this feature)

```text
.specify/specs/installed-user-observation-public-surface-v1/
├── spec.md
├── plan.md
└── tasks.md

docs/requirements/imports/installed-user-observation-public-surface-v1/
├── manifest.json
├── syrs.md
├── srs.md
├── rtm.csv
└── test-plan.md

docs/requirements/admissions/
├── installed-user-observation-public-surface-v1.json
└── installed-user-observation-public-surface-v1.md
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
readiness packet already identifies the public-safe export shape, blocked
scope, public feedback signal, and target feature path.

## Phase 1: Design And Contracts

Contracts to preserve for a future IAU:

- Observation cycle contract: trigger set, due state, no-later-than review date,
  and public feedback correlation.
- Observation fact contract: bucket, source type, summary, and follow-up
  recommendation.
- Routing contract: documentation, video planning, issue, proof, or SemVer
  recommendation.
- Blocked-claim contract: proof, execution, orchestration, or publication claim
  outside this feature.

## Validation Gates

- `npm test`
- `npm run check`
- `git diff --check`
- Public redaction scan over this feature's import, Spec Kit, admission, and
  guidance artifacts
- Bridge artifact validation for
  `installed-user-observation-public-surface-v1`

## Complexity Tracking

No constitution violations are admitted.

## Implementation Admission

`IAU-installed-user-observation-model-v1` is implemented by this plan.

Implementation completed `T009` through `T013` only. Future code work outside
this IAU requires:

1. a named IAU,
2. public admission records,
3. a preflight record with `status: "pass"`,
4. passing redaction and bridge artifact validation, and
5. a bounded implementation issue or PR scoped only to admitted tasks.
