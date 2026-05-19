# Test Plan Import: Runtime Settings CLI Validation Proof-Out File Emission

| Test ID | Requirement | Imported expectation |
| --- | --- | --- |
| TEST-UNIT-RSPROOFOUTEMIT-001 | VHS-REQ-546 | Prove a ready proof-out adapter writes exactly `vihs-validation-proof.json` and `vihs-validation-issue.md`. |
| TEST-UNIT-RSPROOFOUTEMIT-002 | VHS-REQ-546 | Prove deterministic proof JSON and issue Markdown file content matches the already admitted proof-out adapter payload facts. |
| TEST-UNIT-RSPROOFOUTEMIT-003 | VHS-REQ-546 | Prove the supported output target directory is created only when safe. |
| TEST-UNIT-RSPROOFOUTEMIT-004 | VHS-REQ-546 | Prove missing or unready adapter facts fail closed before writing files. |
| TEST-UNIT-RSPROOFOUTEMIT-005 | VHS-REQ-546 | Prove unsupported output targets fail closed before writing files. |
| TEST-UNIT-RSPROOFOUTEMIT-006 | VHS-REQ-546 | Prove I/O failures return deterministic failure facts without hidden partial success. |
| TEST-UNIT-RSPROOFOUTEMIT-007 | VHS-REQ-546 | Prove runtime validation execution, new validation fact generation, compare execution, LabVIEWCLI execution, Docker command execution/orchestration, live proof, package/bin publication, launcher/profile mutation, Marketplace work, and source copying remain blocked. |

Governed supporting signal `TEST-UNIT-392` is retained as the source test
expectation for `vihs --validate --proof-out` proof packet and issue-body
behavior.

All runtime execution, publication, mutation, and source-copying side effects
remain blocked.
