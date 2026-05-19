# Admission: Runtime Settings CLI Validation Host Runtime Discovery

Slice:
`runtime-settings-cli-validation-host-runtime-discovery-v1`

Admission issue: Issue #118

State: admitted

Current Implementation Admission Unit:
`IAU-runtime-settings-cli-validation-host-runtime-discovery-v1`

## Scope

This admission imports the governed bridge for bounded host runtime discovery
facts into the public MIT authority.

The admitted IAU covers only T009-T016: tests and the minimum public MIT
discovery-facts contract that can derive public-safe host candidate facts for
`createRuntimeSettingsValidationHostRuntimePreflight(input = {})` and the
existing validation command chain.

## Source

- Governed bridge MR:
  https://gitlab.com/svelderrainruiz/vi-history-suite/-/merge_requests/289
- Governed bridge work item:
  https://gitlab.com/svelderrainruiz/vi-history-suite/-/work_items/59
- Governed merge commit:
  `4f4211edc824c92f3d9aa4c39cafa928d59c5ce3`

## Imported Requirement Slice

- Imported: `VHS-REQ-095`, `VHS-REQ-096`, `VHS-REQ-532`,
  `VHS-REQ-546`, `VHS-REQ-550`
- Prerequisites only: `VHS-REQ-537`, `VHS-REQ-543`, `VHS-REQ-544`,
  `VHS-REQ-545`
- Supporting signals: `TEST-UNIT-063`, `TEST-UNIT-064`,
  `TEST-UNIT-342`, `TEST-UNIT-354`, `TEST-UNIT-355`, `TEST-UNIT-392`

## Gates

- Public import packet: present
- Spec Kit artifacts: present
- Redaction scan: pass
- Bridge artifact validation: pass
- Implementation sharing: none
- Marketplace publication: disabled
- Pre-implementation preflight: pass
- Implementation handoff issue: to be created after this admission PR merges

## Blocked Scope

Raw private path disclosure, arbitrary filesystem walking, PATH probing,
environment probing, invocation of the existing compare runtime locator as an
implementation shortcut, runtime validation execution, compare execution,
LabVIEWCLI execution, Docker command execution or orchestration, raw terminal
process wiring, live terminal proof, file writes, package/bin publication,
launcher/profile mutation, VSIX packaging, Marketplace publication, release
automation, and source copying remain blocked.

Issue #118 is an admission issue and must not be reused for implementation.
