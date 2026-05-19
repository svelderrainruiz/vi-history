# Implementation Plan: Runtime Settings CLI Terminal Entrypoint

**Branch**: `codex/runtime-settings-cli-terminal-entrypoint-admission` |
**Date**: 2026-05-18 | **Spec**: `spec.md`

**Input**: Feature specification from
`.specify/specs/runtime-settings-cli-terminal-entrypoint-v1/spec.md`

## Summary

Import and lock the runtime settings CLI terminal-entrypoint contract for the
MIT clean-room Spec Kit authority. The feature defines the next narrow
implementation admission unit after pure interactive selection:
`IAU-runtime-settings-cli-terminal-entrypoint-materialization-v1`.

This plan admits requirements, Spec Kit artifacts, admission records, preflight
records, validation script coverage, and Issue #65 as the public admission
surface. A separate implementation handoff issue must be created after this
admission PR merges.

## Technical Context

**Language/Version**: Node.js 22 for current repository gates. Future
implementation may use JavaScript modules and node:test after the IAU handoff.

**Primary Dependencies**: None for import/spec/admission. Future
implementation should use pure data contracts and existing public MIT runtime
settings helpers where available.

**Storage**: Public requirements files, Spec Kit artifacts, public admission
records, and future public terminal-entrypoint materialization contracts.

**Testing**: `npm test` validates import packet shape, Spec Kit artifact
presence, package identity, admission state, redaction, traceability, and the
clean-room boundary.

**Target Platform**: Public MIT repository workflow. No Windows desktop,
LabVIEWCLI, Docker, VSIX packaging, Marketplace, compare execution, proof-out
expansion, or terminal prompt environment is required for this admission.

**Project Type**: Spec Kit-first public requirements authority with clean-room
implementation gated by IAUs.

**Constraints**: No implementation source is copied from other product lines.
Marketplace publication remains disabled. Terminal-entrypoint materialization
does not imply raw prompt loops, compare execution, runtime execution,
proof-out expansion, live-session proof, packaging, or publishing admission.

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
.specify/specs/runtime-settings-cli-terminal-entrypoint-v1/
├── spec.md
├── plan.md
└── tasks.md

docs/requirements/imports/runtime-settings-cli-terminal-entrypoint-v1/
├── manifest.json
├── syrs.md
├── srs.md
├── rtm.csv
└── test-plan.md

docs/requirements/admissions/
├── runtime-settings-cli-terminal-entrypoint-v1.json
└── runtime-settings-cli-terminal-entrypoint-v1.md
```

### Source Code

No product source is changed by this admission branch.

## Phase 0: Research

The governed bridge-readiness record split terminal-entrypoint materialization
from raw terminal prompt loops, compare execution, LabVIEWCLI execution, Docker
execution, proof-out expansion, live-session proof, Windows PowerShell
Marketplace bootstrap, packaging, and Marketplace behavior. The first IAU
should establish command-surface and recovery facts before process-level
prompt behavior is implemented.

## Phase 1: Design And Contracts

Contracts to preserve for the admitted IAU:

- `vihs` is represented as a materialized bare terminal command.
- Supported terminal-session admission remains user-scoped.
- No hidden path reconstruction, shell-profile editing, admin elevation,
  machine-wide install doctrine, or prebuilt external CLI payload is required.
- Runtime lookup facts prefer the standard VS Code runtime on Windows before
  global Node fallback or explicit override.
- Missing or stale launchers fail closed with stable recovery guidance.
- No-argument discoverability may expose current bundle and copyable
  next-command facts.
- No raw prompt loop, runtime execution, compare execution, proof expansion,
  package, or Marketplace behavior is started.

## Validation Gates

- `npm test`
- `npm run check`
- `git diff --check`
- Public redaction scan over this feature's import, Spec Kit, admission, and
  guidance artifacts
- Bridge artifact validation for
  `runtime-settings-cli-terminal-entrypoint-v1`

## Implementation Admission

`IAU-runtime-settings-cli-terminal-entrypoint-materialization-v1` is admitted
for T009-T013 only after its preflight record passes and this admission PR
merges.

Implementation must not start before a separate handoff issue is created.
Future implementation outside this IAU requires a separate named IAU, public
admission records, and a preflight record with `status: "pass"`.
