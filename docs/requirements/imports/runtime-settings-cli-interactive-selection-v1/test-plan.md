# Imported Test Plan: Runtime Settings CLI Interactive Selection

## Scope

This test plan covers the public MIT import for
`runtime-settings-cli-interactive-selection-v1`.

## Verification Items

| Test ID | Requirement IDs | Verification |
| --- | --- | --- |
| TEST-UNIT-RSSELECT-001 | VHS-REQ-545 | Prove bare `vihs` selection facts seed missing settings to `host/windows/2026/x86` and report provider/platform/LabVIEW version/LabVIEW bitness. |
| TEST-UNIT-RSSELECT-002 | VHS-REQ-545 | Prove guided host selection accepts supported LabVIEW 2025, LabVIEW 2026, and newer local supported host choices when the selected installation and bitness are present, and fails closed otherwise. |
| TEST-UNIT-RSSELECT-003 | VHS-REQ-545 | Prove Docker selection uses the latest supported NI LabVIEW Docker image family, exposes no Docker bitness choice, and fails closed for unsupported Docker image-family or bitness-choice requests. |
| TEST-UNIT-RSSELECT-004 | VHS-REQ-546 | Prove confirmation preserves the current governed selection and requests validation through the existing validation readback contract without adding runtime execution or proof-out behavior. |

## Blocked Scope

This test plan does not admit terminal process prompt loops, compare execution,
LabVIEWCLI execution, Docker execution or orchestration, proof-out file
writing beyond the existing pure proof artifact contract, live already-running
session uptake proof, VSIX packaging, Marketplace publication, or source
copying.
