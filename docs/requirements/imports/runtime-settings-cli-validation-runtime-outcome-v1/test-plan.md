# Test Plan: Runtime Settings CLI Validation Runtime Outcome Facts

The public MIT tests for `runtime-settings-cli-validation-runtime-outcome-v1`
must cover:

| Test ID | Requirement | Scenario |
| --- | --- | --- |
| TEST-UNIT-RSRUNTIMEOUTCOME-001 | VHS-REQ-546 | Ready supplied runtime selection facts map to `VIHS_OK`, `ready`, `ready`, and `implemented`. |
| TEST-UNIT-RSRUNTIMEOUTCOME-002 | VHS-REQ-546 | Invalid or missing provider facts fail closed before readback, proof, proof-out, or file-emission composition. |
| TEST-UNIT-RSRUNTIMEOUTCOME-003 | VHS-REQ-546 | Docker not-implemented and provider/platform unsupported facts map to `runtimeImplementationStatus: "not-implemented"`. |
| TEST-UNIT-RSRUNTIMEOUTCOME-004 | VHS-REQ-546 | LabVIEW not-found and unknown blocked reasons map to stable public error/status facts. |
| TEST-UNIT-RSRUNTIMEOUTCOME-005 | VHS-REQ-546 | Generated `runtimeOutcome` facts compose into the existing validation readback, proof artifact, proof-out adapter, and file-emission contracts. |
| TEST-UNIT-RSRUNTIMEOUTCOME-006 | VHS-REQ-546 | OS probing, locators, runtime execution, compare, LabVIEWCLI, Docker, live proof, publication, mutation, release, Marketplace, and source-copying side effects remain blocked. |
