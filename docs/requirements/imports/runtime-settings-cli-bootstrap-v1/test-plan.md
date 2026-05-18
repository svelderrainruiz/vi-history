# Imported Test Plan: Runtime Settings CLI Bootstrap

## Scope

This test plan covers the public MIT import for
`runtime-settings-cli-bootstrap-v1`.

## Verification Items

| Test ID | Requirement IDs | Verification |
| --- | --- | --- |
| TEST-UNIT-RSCLI-001 | VHS-REQ-537, VHS-REQ-594 | Prove `labviewViHistory.prepareLocalRuntimeSettingsCli` is explicitly activated, contributed, registered, and handled separately from the primary and documentation commands. |
| TEST-UNIT-RSCLI-002 | VHS-REQ-537, VHS-REQ-544 | Prove the prepare-command shell reports launcher materialization and recovery facts without mutating settings or depending on hidden launcher reconstruction. |
| TEST-UNIT-RSCLI-003 | VHS-REQ-537, VHS-REQ-544 | Prove blocked behavior remains blocked: settings mutation, validation, compare execution, LabVIEWCLI/Docker execution, packaging, Marketplace publication, and source copying. |

## Blocked Scope

This test plan does not admit provider/version/bitness settings writes,
`vihs --validate`, runtime validation, compare execution, LabVIEWCLI execution,
Docker execution, VSIX packaging, Marketplace publication, or source copying.
