# Test Plan Import: Runtime Settings CLI Validation Proof-Out Adapter

| Test ID | Requirement | Imported expectation |
| --- | --- | --- |
| TEST-UNIT-RSPROOFOUT-001 | VHS-REQ-546 | Prove `vihs --validate --proof-out <dir>` request facts resolve deterministic artifact names and public-safe output-target facts. |
| TEST-UNIT-RSPROOFOUT-002 | VHS-REQ-546 | Prove proof JSON and issue Markdown content come from the already admitted validation proof-artifact contract without starting runtime execution. |
| TEST-UNIT-RSPROOFOUT-003 | VHS-REQ-546 | Prove missing validation/proof facts and unsupported proof-out targets fail closed without writing partial artifacts. |
| TEST-UNIT-RSPROOFOUT-004 | VHS-REQ-546 | Prove non-interactive or blocked proof-out guidance is copyable and does not wait for terminal input. |
| TEST-UNIT-RSPROOFOUT-005 | VHS-REQ-546 | Prove runtime validation execution, compare execution, LabVIEWCLI execution, Docker command execution/orchestration, live proof, package/bin publication, launcher/profile mutation, Marketplace work, and source copying remain blocked. |

Governed supporting signal `TEST-UNIT-392` is retained as the source test
expectation for `vihs --validate --proof-out` proof packet and issue-body
behavior.

All execution, publication, mutation, and source-copying side effects remain blocked.
