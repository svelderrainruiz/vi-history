# Test Plan Import: Extension VSIX Packaging Artifact

Slice: `extension-vsix-packaging-artifact-v1`

## Test Signals

- `TEST-UNIT-VSIX-001`: Verify `package.json` exposes local VSIX packaging
  fields and contains no publish, Marketplace, Open VSX, registry, or release
  script.
- `TEST-UNIT-VSIX-002`: Verify command activation and contribution metadata
  remain stable for packaging.
- `TEST-UNIT-VSIX-003`: Verify `.vscodeignore` and the generated VSIX artifact
  exclude governance, Spec Kit, requirements, tests, scripts, caches, generated
  artifacts, git metadata, and lockfile content.
- `TEST-UNIT-VSIX-004`: Verify the admission records authorize only local VSIX
  artifact creation and keep publication and runtime side effects out of scope.

## Commands

```bash
npm test
npm run check
npm run package:vsix
npm run inspect:vsix
git diff --check
```
