# Implementation Plan: Runtime Settings CLI Terminal Prompt Loop

**Branch**: `codex/runtime-settings-cli-terminal-prompt-loop-admission` |
**Date**: 2026-05-19 | **Spec**: `spec.md`

**Input**: Feature specification from
`.specify/specs/runtime-settings-cli-terminal-prompt-loop-v1/spec.md`

## Summary

Import and lock the runtime settings CLI terminal prompt-loop contract for the
MIT clean-room Spec Kit authority. The feature defines the next narrow
implementation admission unit after materialized terminal entrypoint closeout:
`IAU-runtime-settings-cli-terminal-prompt-loop-v1`.

This plan admits requirements, Spec Kit artifacts, admission records, preflight
records, validation script coverage, and Issue #71 as the public admission
surface. A separate implementation handoff issue must be created after this
admission PR merges.

## Technical Context

**Language/Version**: Node.js 22 for current repository gates. Future
implementation may use JavaScript modules and node:test after the IAU handoff.

**Primary Dependencies**: None for import/spec/admission. Future
implementation should use pure data contracts and existing public MIT runtime
settings helpers where available.

**Storage**: Public requirements files, Spec Kit artifacts, public admission
records, and future public terminal prompt-loop contracts.

**Testing**: `npm test` validates import packet shape, Spec Kit artifact
presence, package identity, admission state, redaction, traceability, and the
clean-room boundary.

**Target Platform**: Public MIT repository workflow. No Windows desktop,
LabVIEWCLI, Docker, VSIX packaging, Marketplace, compare execution, proof-out
expansion, or real terminal prompt environment is required for this admission.

**Project Type**: Spec Kit-first public requirements authority with clean-room
implementation gated by IAUs.

**Constraints**: No implementation source is copied from other product lines.
Marketplace publication remains disabled. Prompt-loop transcript/state
admission does not imply OS-specific stdin/TTY drivers, compare execution,
runtime execution, proof-out expansion, live-session proof, packaging, or
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
.specify/specs/runtime-settings-cli-terminal-prompt-loop-v1/
├── spec.md
├── plan.md
└── tasks.md

docs/requirements/imports/runtime-settings-cli-terminal-prompt-loop-v1/
├── manifest.json
├── syrs.md
├── srs.md
├── rtm.csv
└── test-plan.md

docs/requirements/admissions/
├── runtime-settings-cli-terminal-prompt-loop-v1.json
└── runtime-settings-cli-terminal-prompt-loop-v1.md
```

### Source Code

No product source is changed by this admission branch.

## Phase 0: Research

The governed bridge-readiness record admits the prompt-loop contract only after
the materialized-entrypoint IAU was implemented and closed. The prompt-loop IAU
may bind already public entrypoint and interactive-selection facts to
no-argument `vihs` prompt transcript/state behavior, Enter-through
confirmation, guided selection, and validation handoff.

The record keeps OS-specific terminal I/O drivers, compare execution,
LabVIEWCLI execution, Docker orchestration, proof expansion, live-session
proof, Windows PowerShell Marketplace bootstrap, packaging, Marketplace
publication, and source copying outside this IAU.

## Phase 1: Design And Contracts

Contracts to preserve for the admitted IAU:

- no-argument `vihs` produces deterministic prompt transcript/state facts
  from already materialized entrypoint facts
- Enter-through confirmation preserves the current governed bundle
- guided host selection accepts supported local host choices and fails closed
  for unsupported or missing host facts
- Docker selection resolves to the latest supported NI LabVIEW Docker image
  family; the current governed Linux default maps to LabVIEW 2026 and Docker
  exposes no separate bitness choice
- validation handoff reuses the public `vihs --validate` readback contract
- non-interactive surfaces receive exact copyable next-command guidance
- no OS-specific terminal driver, runtime execution, compare execution, proof
  expansion, package, or Marketplace behavior is started

## Validation Gates

- `npm test`
- `npm run check`
- `git diff --check`
- Public redaction scan over this feature's import, Spec Kit, admission, and
  guidance artifacts
- Bridge artifact validation for
  `runtime-settings-cli-terminal-prompt-loop-v1`
- Spec Kit CLI version/features check

## Implementation Admission

`IAU-runtime-settings-cli-terminal-prompt-loop-v1` is admitted for T009-T013
only after its preflight record passes and this admission PR merges.

Implementation must not start before a separate handoff issue is created.
Future implementation outside this IAU requires a separate named IAU, public
admission records, and a preflight record with `status: "pass"`.
