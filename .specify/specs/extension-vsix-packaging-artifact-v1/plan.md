# Implementation Plan: Extension VSIX Packaging Artifact

Feature: `extension-vsix-packaging-artifact-v1`

IAU: `IAU-extension-vsix-packaging-artifact-v1`

## Summary

Implement local VSIX packaging as a deterministic local artifact only lane. The
implementation adds package metadata, package scripts, `.vscodeignore`, a VSIX
inspection gate, tests, and governance documentation that separates VSIX
artifact creation from Marketplace publication.

## Technical Context

- Runtime: Node.js with ES modules.
- Packaging tool: `@vscode/vsce` as a dev dependency.
- Artifact: `dist/vi-history-0.1.0.vsix`.
- Publication: out of scope.
- Implementation sharing: `none`.

## Constitution Check

- Public artifacts only: pass.
- Spec Kit before implementation: pass.
- Immutable requirement IDs: pass.
- Public evidence without private leakage: pass.
- VSIX package artifact only, Marketplace out of scope: pass.

## Structure

```text
docs/requirements/imports/extension-vsix-packaging-artifact-v1/
.specify/specs/extension-vsix-packaging-artifact-v1/
docs/requirements/admissions/extension-vsix-packaging-artifact-v1.json
docs/requirements/admissions/extension-vsix-packaging-artifact-v1/
package.json
.vscodeignore
scripts/package-vsix.mjs
scripts/inspect-vsix-package.mjs
tests/extension-vsix-packaging-artifact.test.mjs
```

## Validation

Run:

```bash
npm test
npm run check
npm run package:vsix
npm run inspect:vsix
git diff --check
```
