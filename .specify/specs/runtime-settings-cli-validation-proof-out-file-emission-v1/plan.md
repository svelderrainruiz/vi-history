# Implementation Plan: Runtime Settings CLI Validation Proof-Out File Emission

**Branch**:
`codex/runtime-settings-cli-validation-proof-out-file-emission`

**Spec**:
`.specify/specs/runtime-settings-cli-validation-proof-out-file-emission-v1/spec.md`

**Admission Issue**: Issue #85

**Implementation Handoff Issue**: Issue #87

## Summary

Implement `IAU-runtime-settings-cli-validation-proof-out-file-emission-v1`
after the governed
`runtime-settings-cli-validation-proof-out-file-emission-v1` admission merged.
This implementation adds focused tests, the minimum bounded file-emission
adapter, and closeout records.

## Technical Context

- Target authority: public MIT `svelderrainruiz/vi-history`.
- Imported requirement: `VHS-REQ-546`.
- Supporting governed test signal: `TEST-UNIT-392`.
- Prerequisites: implemented terminal entrypoint, prompt-loop, terminal I/O
  adapter, validation readback, validation proof-artifact, and validation
  proof-out adapter slices.
- Implementation sharing: none.
- Marketplace publication: disabled.

## Constitution Check

- Clean-room requirements authority: pass; public artifacts import requirement
  IDs and behavior only.
- Spec Kit before implementation: pass; Issue #85 admitted the IAU and Issue
  #87 is the separate implementation handoff.
- Public evidence without private leakage: pass; public redaction and bridge
  artifact validation are required.
- Marketplace disabled until governed: pass.

## Implementation Boundary

This IAU adds tests and the minimum public MIT file-emission adapter around
ready proof-out adapter facts. It may create a supported target directory,
write exactly `vihs-validation-proof.json` and `vihs-validation-issue.md`, and
return deterministic write-result facts.

It must not add runtime validation execution, new validation fact generation,
compare execution, LabVIEWCLI execution, Docker command execution or
orchestration, live terminal proof, package/bin publication,
launcher/profile mutation, Marketplace work, or source copying.

## Validation

- `npm test`
- `npm run check`
- `git diff --check`
- public redaction scan over the new import/spec/admission artifacts
- bridge artifact validation for
  `runtime-settings-cli-validation-proof-out-file-emission-v1`
- Spec Kit CLI version/features check

Marketplace publication remains disabled.
