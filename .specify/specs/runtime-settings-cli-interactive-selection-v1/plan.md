# Implementation Plan: Runtime Settings CLI Interactive Selection

**Branch**: `codex/runtime-settings-cli-interactive-selection-admission` |
**Date**: 2026-05-18 | **Spec**: `spec.md`

**Input**: Feature specification from
`.specify/specs/runtime-settings-cli-interactive-selection-v1/spec.md`

## Summary

Import and lock the runtime settings CLI interactive-selection contract for
the MIT clean-room Spec Kit authority. The feature defines the next narrow
implementation admission unit after validation proof artifacts:
`IAU-runtime-settings-cli-interactive-selection-contract-v1`.

This plan admits requirements, Spec Kit artifacts, admission records, preflight
records, validation script coverage, and Issue #60 as the public admission
surface. A separate implementation handoff issue must be created after this
admission PR merges.

## Technical Context

**Language/Version**: Node.js 22 for current repository gates. Future
implementation may use JavaScript modules and node:test after the IAU handoff.

**Primary Dependencies**: None for import/spec/admission. Future
implementation should use pure data contracts and existing public MIT runtime
settings helpers where available.

**Storage**: Public requirements files, Spec Kit artifacts, public admission
records, and future public selection-state contracts.

**Testing**: `npm test` validates import packet shape, Spec Kit artifact
presence, package identity, admission state, redaction, traceability, and the
clean-room boundary.

**Target Platform**: Public MIT repository workflow. No Windows desktop,
LabVIEWCLI, Docker, VSIX packaging, Marketplace, compare execution, proof-out
file generation, or terminal prompt environment is required for this
admission.

**Project Type**: Spec Kit-first public requirements authority with clean-room
implementation gated by IAUs.

**Constraints**: No implementation source is copied from other product lines.
Marketplace publication remains disabled. Interactive-selection admission does
not imply terminal process prompt loops, compare execution, runtime execution,
proof-out writing, live-session proof, packaging, or publishing admission.

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
.specify/specs/runtime-settings-cli-interactive-selection-v1/
├── spec.md
├── plan.md
└── tasks.md

docs/requirements/imports/runtime-settings-cli-interactive-selection-v1/
├── manifest.json
├── syrs.md
├── srs.md
├── rtm.csv
└── test-plan.md

docs/requirements/admissions/
├── runtime-settings-cli-interactive-selection-v1.json
└── runtime-settings-cli-interactive-selection-v1.md
```

### Source Code

No product source is changed by this admission branch.

## Phase 0: Research

The governed bridge-readiness record split interactive selection from terminal
process prompt loops, compare execution, LabVIEWCLI execution, Docker
execution, proof-out writing, live-session proof, packaging, and Marketplace
behavior because selection can be tested first as a pure contract over settings
facts and user-choice facts.

## Phase 1: Design And Contracts

Contracts to preserve for the admitted IAU:

- Missing settings seed to `host/windows/2026/x86`.
- Provider, platform, LabVIEW version, and LabVIEW bitness are reported as the
  effective bundle.
- Enter-through confirmation preserves the governed selection and requests
  validation through the existing validation readback contract.
- Guided host selection accepts supported LabVIEW 2025, LabVIEW 2026, and
  newer local supported host choices when the selected installation and bitness
  are present.
- Docker selection resolves to the latest supported NI LabVIEW Docker image
  family; the current governed Linux default maps to LabVIEW 2026 and Docker
  exposes no separate bitness choice.
- Unsupported selections fail closed with stable reasons.
- No terminal prompt loop, runtime execution, proof-out writing, package, or
  Marketplace behavior is started.

## Validation Gates

- `npm test`
- `npm run check`
- `git diff --check`
- Public redaction scan over this feature's import, Spec Kit, admission, and
  guidance artifacts
- Bridge artifact validation for
  `runtime-settings-cli-interactive-selection-v1`

## Implementation Admission

`IAU-runtime-settings-cli-interactive-selection-contract-v1` is admitted for
T009-T013 only after its preflight record passes and this admission PR merges.

Implementation must not start before a separate handoff issue is created.
Future implementation outside this IAU requires a separate named IAU, public
admission records, and a preflight record with `status: "pass"`.
