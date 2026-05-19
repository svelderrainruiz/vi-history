# SRS: Runtime Settings CLI Validation Runtime Outcome Facts

## Requirements

| ID | Requirement | Verification |
| --- | --- | --- |
| VHS-REQ-546 | The installed-user `vihs --validate` proof chain must be able to derive a normalized runtime outcome object from already-supplied public-safe runtime selection facts. The object must use `runtimeValidationOutcome`, `runtimeProvider`, `runtimeEngine`, `runtimeBlockedReason`, `runtimeErrorCode`, `runtimeProofStatus`, and `runtimeImplementationStatus`. | `TEST-UNIT-392` is narrowed here to pure runtime outcome fact mapping and composition into the existing readback/proof/proof-out/file-emission chain. |

## Constraints

- Ready provider facts with no blocked reason map to `VIHS_OK`, `ready`,
  `ready`, and `implemented`.
- Blocked provider facts map to stable public error and status facts.
- Unknown blocked reasons map to `VIHS_E_RUNTIME_VALIDATION_BLOCKED` and
  `blocked-or-missing-prerequisite`.
- Not-yet-implemented provider/version/platform cases map to
  `runtimeImplementationStatus: "not-implemented"`.
- This slice must not inspect the OS, read private paths, invoke runtime
  locators, start LabVIEWCLI, call Docker, run compare, write proof files, or
  expose package/bin publication behavior.
