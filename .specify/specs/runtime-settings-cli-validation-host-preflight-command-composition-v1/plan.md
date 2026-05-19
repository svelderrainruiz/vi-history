# Implementation Plan: Runtime Settings CLI Validation Host Preflight Command Composition

**Branch**:
`codex/runtime-settings-validation-host-preflight-command-composition-admission`

**Feature**:
`runtime-settings-cli-validation-host-preflight-command-composition-v1`

**Admitted IAU**:
`IAU-runtime-settings-cli-validation-host-preflight-command-composition-v1`

**Admission Issue**: Issue #112

## Summary

Admit a narrow command-composition unit so
`createRuntimeSettingsValidationCommandResult(input = {})` can consume a ready
host preflight result or supplied public-safe host selection/candidate facts
through `createRuntimeSettingsValidationHostRuntimePreflight(input = {})`.

This admission PR is import/spec/admission only. Implementation starts in a
separate handoff issue after this PR merges.

## Technical Context

- Runtime: Node.js ESM.
- Target branch: `develop`.
- Source baseline tag: `v1.3.16`.
- Governed bridge merge commit:
  `e411ef2bfa74cedf6f9b53d764810f9f4c93a8b0`.
- Public import requirement: `VHS-REQ-546`.
- Prerequisites only: `VHS-REQ-532`, `VHS-REQ-537`, `VHS-REQ-543`,
  `VHS-REQ-544`, `VHS-REQ-545`, `VHS-REQ-550`.
- Supporting signals: `TEST-UNIT-342`, `TEST-UNIT-354`, `TEST-UNIT-355`,
  `TEST-UNIT-392`.
- Implementation sharing: none.
- Marketplace publication: disabled.

## Constitution Check

- Requirements-first: PASS. Public import packet and Spec Kit artifacts are
  created before implementation.
- Clean-room boundary: PASS. No implementation source is copied from another
  VI History authority.
- Public redaction boundary: PASS. Public artifacts avoid private paths,
  private proof packets, credentials, and private control-plane instructions.
- IAU boundary: PASS. Only T009-T016 are admitted for implementation.
- Blocked scope: PASS. Runtime discovery, runtime execution, publication,
  Marketplace, release automation, mutation, and source copying remain blocked.

## Project Structure

```text
docs/requirements/imports/runtime-settings-cli-validation-host-preflight-command-composition-v1/
  manifest.json
  syrs.md
  srs.md
  rtm.csv
  test-plan.md
.specify/specs/runtime-settings-cli-validation-host-preflight-command-composition-v1/
  spec.md
  plan.md
  tasks.md
docs/requirements/admissions/runtime-settings-cli-validation-host-preflight-command-composition-v1.json
docs/requirements/admissions/runtime-settings-cli-validation-host-preflight-command-composition-v1/
  IAU-runtime-settings-cli-validation-host-preflight-command-composition-v1.json
  IAU-runtime-settings-cli-validation-host-preflight-command-composition-v1-preflight-v1.json
```

## Implementation Strategy

1. Merge this admission PR after redaction, Spec Kit, and validation checks
   pass.
2. Create a separate implementation handoff issue for
   `IAU-runtime-settings-cli-validation-host-preflight-command-composition-v1`.
3. Implement only T009-T016 in a separate PR.
4. Keep T017-T026 blocked until another governed bridge/admission opens them.

## Complexity Tracking

No complexity exceptions are introduced. The lane is a pure composition step
over already admitted public-safe facts.
