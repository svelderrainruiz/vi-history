# IAU: Extension VSIX Packaging Artifact

IAU ID: `IAU-extension-vsix-packaging-artifact-v1`

Parent slice: `extension-vsix-packaging-artifact-v1`

State: implemented

Admission issue: Issue #137

Implementation handoff issue: Issue #136

Implementation PR: PR #138

## Admitted Tasks

T009-T014 are implemented. The implementation is limited to local VSIX package
artifact creation, package inspection, package boundaries, and governance
updates.

## Blocked Tasks

T015-T016 remain blocked. This IAU does not admit Marketplace publication,
release tokens, `vsce publish`, Open VSX publication, Marketplace workflows,
package registry publication, release automation, runtime validation execution,
compare execution, LabVIEWCLI execution, Docker execution, launcher/profile
mutation, or source copying.

## Gates

- Import packet: present
- Spec Kit feature: present
- Redaction scan: pass
- Bridge artifact validation: pass
- Preflight: pass
- Implementation sharing: none
- VSIX packaging: local artifact only
- Marketplace publication: out of scope
