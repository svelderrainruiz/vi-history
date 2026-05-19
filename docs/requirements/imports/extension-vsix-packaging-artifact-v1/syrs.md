# SyRS: Extension VSIX Packaging Artifact

Slice: `extension-vsix-packaging-artifact-v1`

Source baseline: `v1.3.16`

## System Requirements

| ID | Requirement | Verification |
| --- | --- | --- |
| VHS-REQ-596 | The public MIT authority must support creating a local VSIX artifact for `svelderrainruiz.vi-history` without publishing it to any external extension marketplace. | `TEST-UNIT-VSIX-001`; packaging gate |
| VHS-REQ-597 | The VSIX artifact must include only the extension runtime manifest, runtime entrypoint, README, license, and bundled installed-user documentation needed by the extension. | `TEST-UNIT-VSIX-002`; VSIX inspection |
| VHS-REQ-598 | Marketplace publication, release tokens, `vsce publish`, Open VSX publication, and Marketplace workflows are outside this repository's scope. | `TEST-UNIT-VSIX-001`; clean-room boundary scan |
| VHS-REQ-599 | Packaging validation must inspect the generated VSIX and fail closed when governance, Spec Kit, requirements, tests, scripts, caches, generated artifacts, or git metadata enter the package. | `TEST-UNIT-VSIX-003`; VSIX inspection |
| VHS-REQ-600 | VSIX packaging must not admit runtime validation execution, compare execution, LabVIEWCLI execution, Docker execution, launcher/profile mutation, source copying, package registry publication, release automation, or Marketplace behavior. | `TEST-UNIT-VSIX-004`; unit tests |

## Boundary

This slice authorizes a local/CI `.vsix` artifact only. Publication and release
channels are not deferred implementation tasks for this repository.
