# Tasks: Extension VSIX Packaging Artifact

**Input**: Design documents from
`.specify/specs/extension-vsix-packaging-artifact-v1/`

**Prerequisites**: `plan.md`, `spec.md`, imported requirements packet

## Phase 1: Public Import And Admission

- [x] T001 Create public import manifest for
  `extension-vsix-packaging-artifact-v1`.
- [x] T002 Import SyRS, SRS, RTM, and test-plan files for `VHS-REQ-596`
  through `VHS-REQ-600`.
- [x] T003 Create `spec.md` for local VSIX packaging and blocked publication.
- [x] T004 Create `plan.md` confirming local artifact-only scope.
- [x] T005 Create `tasks.md` with the named packaging IAU.
- [x] T006 Add public admission ledger records for
  `IAU-extension-vsix-packaging-artifact-v1`.
- [x] T007 Pin the active Spec Kit feature to
  `extension-vsix-packaging-artifact-v1`.
- [x] T008 Extend repository validation to cover the new artifacts.

## Phase 2: Admitted IAU - VSIX Package Artifact

**Admitted IAU**: `IAU-extension-vsix-packaging-artifact-v1`

**Public admission issue**: Issue #137

**Implementation handoff issue**: Issue #136

- [x] T009 Add VS Code package manifest fields for local VSIX packaging.
- [x] T010 Add local VSIX package and inspection scripts.
- [x] T011 Add `.vscodeignore` package content boundaries.
- [x] T012 Add tests for manifest, command, package script, and ignore rules.
- [x] T013 Add generated VSIX inspection for required and forbidden entries.
- [x] T014 Update governance docs to split VSIX packaging from Marketplace
  publication and record Marketplace as out of scope.

## Phase 3: Blocked Publication And Runtime Work

- [ ] T015 [BLOCKED] Add `vsce publish`, Open VSX publication, Marketplace
  workflow, release upload, release token, or package registry publication.
- [ ] T016 [BLOCKED] Add runtime validation execution, compare execution,
  LabVIEWCLI execution, Docker execution, launcher/profile mutation, source
  copying, or release automation.

## Final Phase: Cross-Cutting Gates

- [x] T017 Run `npm test`.
- [x] T018 Run `npm run check`.
- [x] T019 Run `npm run package:vsix`.
- [x] T020 Run `npm run inspect:vsix`.
- [x] T021 Run `git diff --check`.
- [x] T022 Run public redaction scan.
- [x] T023 Run bridge artifact validation.
- [x] T024 Run Spec Kit feature checks.
