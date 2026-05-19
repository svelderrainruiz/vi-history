# Implementation Plan: Runtime Settings CLI Validation Command Contract

**Branch**:
`codex/runtime-settings-cli-validation-command-contract-admission`

**Spec**:
`.specify/specs/runtime-settings-cli-validation-command-contract-v1/spec.md`

**Admission Issue**: Issue #93

**Implementation Handoff Issue**: Issue #95

**Implementation PR**: PR #96

## Summary

Close `IAU-runtime-settings-cli-validation-command-contract-v1` after the
governed `runtime-settings-cli-validation-command-contract-v1` bridge packet,
public admission, and separate Copilot implementation handoff. The command
contract is implemented; no new IAU is active.

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
- Spec Kit before implementation: pass; Issue #93 admitted the IAU and
  separate handoff Issue #95 implemented it through PR #96.
- Public evidence without private leakage: pass; public redaction and bridge
  artifact validation are required.
- Marketplace disabled until governed: pass.

## Implementation Boundary

The implemented IAU adds tests and a minimum pure adapter named
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
