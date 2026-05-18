# Installed-User Documentation Command Admission

State: `implementation-admitted`

Issue #39 imports `installed-user-documentation-command-v1`, locks the public
Spec Kit feature, and admits `IAU-documentation-command-panel-shell-v1` for
T009-T011 only after this admission PR merges.

Machine-readable ledger:
[installed-user-documentation-command-v1.json](./installed-user-documentation-command-v1.json)

## Imported Requirements

- `VHS-REQ-368`: bundled documentation manifest and curated extension-user page
  set.
- `VHS-REQ-369`: first-class Open Documentation command without repository
  access.
- `VHS-REQ-489`: public-safe bundled installed-user documentation.
- `VHS-REQ-594`: explicit Open Documentation activation metadata.

## Current IAU

`IAU-documentation-command-panel-shell-v1` is admitted for:

- `T009`: add tests proving `labviewViHistory.openDocumentation` registers as a
  separate handler from `labviewViHistory.open`.
- `T010`: add tests proving a public-safe bundled documentation manifest/page
  contract exists.
- `T011`: implement the minimum public MIT documentation command panel shell
  after preflight.

Implementation must wait until this admission PR is merged to `develop`.

## Blocked Scope

Runtime settings CLI materialization, compare execution, LabVIEWCLI execution,
Docker execution or orchestration, VSIX packaging, Marketplace publication, and
source copying remain blocked until separately admitted.
