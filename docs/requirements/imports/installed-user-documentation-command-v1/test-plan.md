# Imported Test Plan: Installed-User Documentation Command

## Scope

This test plan covers the public MIT import for
`installed-user-documentation-command-v1`.

## Verification Items

| Test ID | Requirement IDs | Verification |
| --- | --- | --- |
| TEST-UNIT-DOC-001 | VHS-REQ-368 | Prove a bundled documentation manifest and at least one extension-user page contract exist before implementation opens the surface. |
| TEST-UNIT-DOC-002 | VHS-REQ-369, VHS-REQ-594 | Prove `labviewViHistory.openDocumentation` is explicitly activated, contributed, registered, and handled separately from `labviewViHistory.open`. |
| TEST-UNIT-DOC-003 | VHS-REQ-489 | Prove bundled installed-user documentation excludes private links, private evidence, local filesystem paths, and authority-only control-plane content. |
| TEST-UNIT-DOC-004 | VHS-REQ-369 | Prove invoking the documentation command does not start Git, LabVIEWCLI, Docker, compare execution, packaging, or Marketplace behavior. |

## Blocked Scope

This test plan does not admit runtime settings CLI materialization, compare
execution, LabVIEWCLI execution, Docker execution, VSIX packaging, Marketplace
publication, or source copying.
