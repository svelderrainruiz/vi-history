# Implementation Plan: Runtime Settings CLI Validation Host Runtime Preflight

**Branch**:
`codex/runtime-settings-validation-host-runtime-preflight-admission`

**Date**: 2026-05-19

**Spec**:
`.specify/specs/runtime-settings-cli-validation-host-runtime-preflight-v1/spec.md`

## Summary

Close out governed slice
`runtime-settings-cli-validation-host-runtime-preflight-v1` and mark
`IAU-runtime-settings-cli-validation-host-runtime-preflight-v1` implemented
after clean-room implementation handoff Issue #108 and PR #109.

The admission PR locked the public MIT import, Spec Kit feature, admission
ledger, IAU record, preflight record, validation coverage, and guidance for
the bounded unit:
`createRuntimeSettingsValidationHostRuntimePreflight(input = {})`.

## Technical Context

- Public authority: `svelderrainruiz/vi-history`
- Target branch: `develop`
- Package: `vi-history`
- Runtime: Node.js and TypeScript
- Source baseline: `v1.3.16`
- Source commit evaluated:
  `331b6eab04068299b85405d36bf0ba033dbd9b26`
- Governed bridge admission commit:
  `b5ed9e5a77a096c342fc74c42e3e901d6bad041f`
- Public admission issue: Issue #106
- Implementation handoff issue: Issue #108
- Implementation PR: PR #109
- Candidate IAU:
  `IAU-runtime-settings-cli-validation-host-runtime-preflight-v1`
- Public contract:
  `createRuntimeSettingsValidationHostRuntimePreflight(input = {})`
- Preflight boundary: supplied public-safe host candidate facts only
- Marketplace publication: disabled
- Implementation sharing: none

## Constitution Check

- Clean-room authority: pass. The slice imports public-safe requirements and
  does not copy implementation source.
- Spec Kit before implementation: pass. The admission PR created import, spec,
  plan, tasks, admission, and preflight records before implementation started.
- Immutable imported IDs: pass. The import preserves `VHS-REQ-532`,
  `VHS-REQ-546`, and `VHS-REQ-550`, and treats `VHS-REQ-537`,
  `VHS-REQ-543`, `VHS-REQ-544`, and `VHS-REQ-545` as prerequisites.
- Public evidence without private leakage: pass. Public redaction validation
  is required before merge.
- Marketplace disabled: pass. No publication, package/bin, VSIX, or
  Marketplace work is admitted.

## Implementation Admission Unit

Implemented through implementation handoff Issue #108 and PR #109:

`IAU-runtime-settings-cli-validation-host-runtime-preflight-v1`

Implemented tasks: T009-T016.

The IAU may add tests and the minimum pure host runtime preflight facts adapter
needed to normalize supplied public-safe host candidate facts and compose them
into the existing validation command chain.

## Explicitly Blocked

- OS scanning, filesystem walking, registry probing, PATH probing, environment
  probing, or private path discovery
- Runtime locator invocation
- Runtime validation execution
- Compare execution
- LabVIEWCLI execution
- Docker command execution or orchestration
- Raw terminal process wiring or live terminal proof
- File writes from the host preflight adapter
- Package/bin publication, VSIX packaging, Marketplace publication, release
  automation, or launcher/profile mutation
- Source copying from another VI History product line

## Validation

- `npm test`
- `npm run check`
- `git diff --check`
- public redaction scan over touched public artifacts
- bridge artifact validation for
  `runtime-settings-cli-validation-host-runtime-preflight-v1`
- Spec Kit CLI version/features check
