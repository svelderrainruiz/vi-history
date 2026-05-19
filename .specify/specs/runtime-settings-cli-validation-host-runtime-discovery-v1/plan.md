# Implementation Plan: Runtime Settings CLI Validation Host Runtime Discovery

**Branch**:
`codex/runtime-settings-validation-host-runtime-discovery-admission`

**Feature**:
`runtime-settings-cli-validation-host-runtime-discovery-v1`

**Admitted IAU**:
`IAU-runtime-settings-cli-validation-host-runtime-discovery-v1`

**Admission Issue**: Issue #118

## Summary

Admit a narrow host runtime discovery facts unit so
`createRuntimeSettingsValidationHostRuntimeDiscovery(input = {})` can derive
public-safe candidate facts that feed
`createRuntimeSettingsValidationHostRuntimePreflight(input = {})` and the
existing `vihs --validate` command chain.

This admission PR is import/spec/admission only. Implementation starts in a
separate handoff issue after this PR merges.

## Technical Context

- Runtime: Node.js ESM.
- Target branch: `develop`.
- Source baseline tag: `v1.3.16`.
- Governed source commit evaluated:
  `e411ef2bfa74cedf6f9b53d764810f9f4c93a8b0`.
- Governed bridge merge commit:
  `4f4211edc824c92f3d9aa4c39cafa928d59c5ce3`.
- Public import requirements: `VHS-REQ-095`, `VHS-REQ-096`,
  `VHS-REQ-532`, `VHS-REQ-546`, `VHS-REQ-550`.
- Prerequisites only: `VHS-REQ-537`, `VHS-REQ-543`, `VHS-REQ-544`,
  `VHS-REQ-545`.
- Supporting signals: `TEST-UNIT-063`, `TEST-UNIT-064`, `TEST-UNIT-342`,
  `TEST-UNIT-354`, `TEST-UNIT-355`, `TEST-UNIT-392`.
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
- Blocked scope: PASS. Runtime validation, compare, LabVIEWCLI, Docker,
  publication, Marketplace, release automation, mutation, and source copying
  remain blocked.

## Project Structure

```text
docs/requirements/imports/runtime-settings-cli-validation-host-runtime-discovery-v1/
  manifest.json
  syrs.md
  srs.md
  rtm.csv
  test-plan.md
.specify/specs/runtime-settings-cli-validation-host-runtime-discovery-v1/
  spec.md
  plan.md
  tasks.md
docs/requirements/admissions/runtime-settings-cli-validation-host-runtime-discovery-v1.json
docs/requirements/admissions/runtime-settings-cli-validation-host-runtime-discovery-v1/
  IAU-runtime-settings-cli-validation-host-runtime-discovery-v1.json
  IAU-runtime-settings-cli-validation-host-runtime-discovery-v1-preflight-v1.json
```

## Implementation Strategy

1. Merge this admission PR after redaction, Spec Kit, and validation checks
   pass.
2. Create a separate implementation handoff issue for
   `IAU-runtime-settings-cli-validation-host-runtime-discovery-v1`.
3. Implement only T009-T016 in a separate PR.
4. Keep raw private path disclosure, arbitrary filesystem walking, PATH and
   environment probing, runtime validation, compare, LabVIEWCLI, Docker,
   terminal process wiring, file writes, package/bin publication,
   launcher/profile mutation, release automation, Marketplace publication, and
   source copying blocked.

## Complexity Tracking

No complexity exceptions are introduced. The lane is a bounded discovery-facts
step over public-safe selected host facts and discovery observations.
