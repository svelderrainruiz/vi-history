# Implementation Plan: Runtime Contract Host Provider

**Branch**: `codex/bootstrap-mit-spec-kit-authority` | **Date**: 2026-05-17 | **Spec**: `spec.md`

**Input**: Feature specification from `.specify/specs/runtime-contract-host-provider-v1/spec.md`

## Summary

Import and lock the runtime-contract requirements slice for the MIT clean-room
Spec Kit authority. The feature preserves host-native LabVIEWCLI as the
installed-user default, keeps Docker as an explicit expert provider, retains
runtime facts before execution, fails closed for unsupported bundles, and keeps
proof evidence classes distinct.

This bootstrap plan admits requirements, public validation gates, and Spec Kit
artifacts only. Issue #4 will add runnable implementation after this plan and
`tasks.md` are accepted.

## Technical Context

**Language/Version**: TypeScript 5.x on Node.js 22 for future extension work; Node.js 22 for current repository gates.

**Primary Dependencies**: VS Code extension API for future implementation; no runtime implementation dependencies admitted in this bootstrap.

**Storage**: Filesystem proof packets and generated report artifacts for future implementation; no storage layer in bootstrap.

**Testing**: `npm test` currently runs repository boundary gates. Future implementation tests should include unit tests for runtime selection, command planning, proof packet generation, and proof intake.

**Target Platform**: VS Code extension runtime, Windows installed-user LabVIEWCLI path, Linux host proof lane, and bounded Windows Docker Desktop expert lane.

**Project Type**: VS Code extension product, currently requirements-only and Spec Kit-first.

**Performance Goals**: Runtime selection and proof packet generation should be deterministic and bounded by local discovery and command execution time.

**Constraints**: No implementation source is copied from other product lines. Marketplace publication remains disabled. Runtime failures must fail closed and retain selected facts.

**Scale/Scope**: One runtime-contract slice with 16 imported requirement IDs and four independently testable user stories.

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Clean-room requirements authority: PASS. The plan imports requirements and
  writes new Spec Kit artifacts only; no implementation source is admitted.
- Spec Kit before implementation: PASS. No runnable extension source is added
  during bootstrap.
- Immutable imported requirement IDs: PASS. Imported IDs are preserved and
  referenced without redefining their semantics.
- Public evidence without private leakage: PASS. Redaction and clean-room scans
  are repository gates.
- Marketplace disabled until ADR: PASS. Package metadata records identity but no
  publication workflow is admitted.

## Project Structure

### Documentation (this feature)

```text
.specify/specs/runtime-contract-host-provider-v1/
├── spec.md
├── plan.md
└── tasks.md

docs/requirements/imports/runtime-contract-host-provider-v1/
├── manifest.json
├── syrs.md
├── srs.md
├── rtm.csv
└── test-plan.md
```

### Source Code (repository root)

```text
scripts/
├── check-clean-room-boundary.mjs
└── validate-spec-kit-imports.mjs

src/
└── not admitted during bootstrap

tests/
└── not admitted during bootstrap
```

**Structure Decision**: Bootstrap uses documentation, Spec Kit artifacts, and
repository validation scripts only. Issue #4 may add `src/` and `tests/` after
the spec/plan/tasks lock is accepted.

## Phase 0: Research

No additional research is required for bootstrap. The imported slice already
defines the behavioral boundary, proof classes, and imported IDs. Future Issue
#4 implementation may add research records for VS Code extension packaging,
runtime discovery strategy, and test harness selection.

## Phase 1: Design And Contracts

Design contracts to preserve for Issue #4:

- Runtime selection contract: provider, engine, version, bitness, selected paths,
  readiness state, blocked reason, and retained notes.
- Command plan contract: LabVIEWCLI `CreateComparisonReport` intent, staged VI
  paths, output path, selected LabVIEW fields, and report metadata.
- Proof packet contract: environment class, provider, engine, execution state,
  generated-report facts, stdout, stderr, exit code, duration, and issue body.
- Provider policy contract: host-native Windows default, bounded Docker expert
  selection, fail-closed unsupported bundles, and no silent fallback.

## Validation Gates

- `npm test`
- `npm run check`
- `git diff --check`
- Redaction scan through `scripts/check-clean-room-boundary.mjs`
- Spec Kit import validation through `scripts/validate-spec-kit-imports.mjs`

## Complexity Tracking

No constitution violations are admitted.
