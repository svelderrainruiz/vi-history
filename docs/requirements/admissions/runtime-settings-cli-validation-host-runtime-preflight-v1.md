# Requirements Admission: Runtime Settings CLI Validation Host Runtime Preflight

`runtime-settings-cli-validation-host-runtime-preflight-v1` is implemented for
public MIT implementation planning and clean-room implementation handoff Issue
#108.

- Admission issue: #106
- Implementation handoff issue: #108
- Implementation PR: #109
- Candidate IAU:
  `IAU-runtime-settings-cli-validation-host-runtime-preflight-v1`
- Current Implementation Admission Unit: `none`
- Completed import/spec scope: T001-T008 in
  `.specify/specs/runtime-settings-cli-validation-host-runtime-preflight-v1/tasks.md`
- Completed implementation scope: T009-T016 in
  `.specify/specs/runtime-settings-cli-validation-host-runtime-preflight-v1/tasks.md`
- Blocked scope: T017-T026 in
  `.specify/specs/runtime-settings-cli-validation-host-runtime-preflight-v1/tasks.md`

The IAU admits only a pure supplied-facts host runtime preflight adapter:
`createRuntimeSettingsValidationHostRuntimePreflight(input = {})`.

Issue #108 implements and closes T009-T016 through PR #109. Issue #106 is an
admission issue and must not be reused for implementation.

OS scanning, filesystem walking, registry probing, PATH probing, environment
probing, private path discovery, runtime locator invocation, runtime validation
execution, compare execution, LabVIEWCLI execution, Docker command execution
or orchestration, raw terminal process wiring, live terminal proof, file writes
from the host preflight adapter, package/bin publication, launcher/profile
mutation, release automation, Marketplace work, and source copying remain
blocked.
