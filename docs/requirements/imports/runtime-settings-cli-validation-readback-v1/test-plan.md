# Imported Test Plan: Runtime Settings CLI Validation Readback

## Scope

This test plan covers the public MIT import for
`runtime-settings-cli-validation-readback-v1`.

## Verification Items

| Test ID | Requirement IDs | Verification |
| --- | --- | --- |
| TEST-UNIT-RSVALIDATE-001 | VHS-REQ-543 | Prove validation readback reports the explicit effective settings target and does not mutate settings content. |
| TEST-UNIT-RSVALIDATE-002 | VHS-REQ-546 | Prove validation readback reports persisted provider/version/bitness plus runtime outcome facts without path-picking, image-family selection, panel-side provider picking, LabVIEWCLI execution, Docker execution, compare execution, or proof-out file writing. |
| TEST-UNIT-RSVALIDATE-003 | VHS-REQ-546 | Prove missing or unsupported persisted settings fail closed with stable validation result fields. |

## Blocked Scope

This test plan does not admit no-argument interactive selection, `--proof-out`
file generation, compare execution, LabVIEWCLI execution, Docker execution,
live already-running session uptake proof, VSIX packaging, Marketplace
publication, or source copying.
