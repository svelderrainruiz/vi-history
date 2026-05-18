# Imported Test Plan: Runtime Settings CLI Settings Write

## Scope

This test plan covers the public MIT import for
`runtime-settings-cli-settings-write-v1`.

## Verification Items

| Test ID | Requirement IDs | Verification |
| --- | --- | --- |
| TEST-UNIT-RSWRITE-001 | VHS-REQ-537 | Prove the settings-write contract updates provider, LabVIEW version, and LabVIEW bitness facts and reports the effective settings target. |
| TEST-UNIT-RSWRITE-002 | VHS-REQ-537, VHS-REQ-543 | Prove only `viHistorySuite.runtimeProvider`, `viHistorySuite.labviewVersion`, and `viHistorySuite.labviewBitness` are updated while unrelated settings content remains preserved. |
| TEST-UNIT-RSWRITE-003 | VHS-REQ-543 | Prove comments or trailing commas are handled if admitted by the public spec, and unsupported or non-object target shapes fail closed. |

## Blocked Scope

This test plan does not admit `vihs --validate`, runtime validation,
no-argument interactive selection, compare execution, LabVIEWCLI execution,
Docker execution, live already-running session uptake proof, VSIX packaging,
Marketplace publication, or source copying.
