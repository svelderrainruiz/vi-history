# Implementation Plan: Runtime Settings CLI Validation Command Contract

**Branch**:
`codex/runtime-settings-cli-validation-command-contract-admission`

**Spec**:
`.specify/specs/runtime-settings-cli-validation-command-contract-v1/spec.md`

**Admission Issue**: Issue #93

**Implementation Handoff Issue**: created separately after this admission PR
merges

## Summary

Admit `IAU-runtime-settings-cli-validation-command-contract-v1` after the
governed `runtime-settings-cli-validation-command-contract-v1` bridge packet.
This admission creates the public import, Spec Kit feature, task list,
admission ledger, and preflight records for a later Copilot implementation
handoff. It does not implement the command contract.

## Technical Context

- Target authority: public MIT `svelderrainruiz/vi-history`.
- Imported requirement: `VHS-REQ-546`.
- Supporting governed test signal: `TEST-UNIT-392`.
- Prerequisites: implemented terminal entrypoint, prompt loop, terminal I/O
  adapter, settings write, validation readback, validation proof-artifact,
  validation proof-out adapter, proof-out file-emission, and validation
  runtime-outcome slices.
- Implementation sharing: none.
- Marketplace publication: disabled.

## Constitution Check

- Clean-room requirements authority: pass; public artifacts import requirement
  IDs and behavior only.
- Spec Kit before implementation: pass; Issue #93 admits the IAU and a
  separate handoff issue is required before implementation work starts.
- Public evidence without private leakage: pass; public redaction and bridge
  artifact validation are required.
- Marketplace disabled until governed: pass.

## Implementation Boundary

The admitted IAU may add tests and a minimum pure adapter named
`createRuntimeSettingsValidationCommandResult(input = {})` that composes
already admitted validation settings, runtime outcome, proof artifact,
proof-out adapter, and proof-out file-emission facts.

It must not inspect the OS, invoke runtime locators, discover private paths,
run validation, execute compare, start LabVIEWCLI, call Docker, orchestrate
containers, wire raw terminal processes, publish package or Marketplace
artifacts, mutate launcher/profile state, perform release automation, implement
`validate-plan-only`, or copy source from another VI History product line.

## Validation

- `npm test`
- `npm run check`
- `git diff --check`
- public redaction scan over the new import/spec/admission artifacts and
  guidance files
- bridge artifact validation for
  `runtime-settings-cli-validation-command-contract-v1`
- Spec Kit CLI version/features check

Marketplace publication remains disabled.
