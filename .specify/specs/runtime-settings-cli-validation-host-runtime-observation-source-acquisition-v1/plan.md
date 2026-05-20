# Implementation Plan: Runtime Settings CLI Validation Host Runtime Observation Source Acquisition

Feature:
`runtime-settings-cli-validation-host-runtime-observation-source-acquisition-v1`

IAU:
`IAU-runtime-settings-cli-validation-host-runtime-observation-source-acquisition-v1`

## Summary

Admit a narrow, public-safe host runtime observation source-acquisition adapter
that turns bounded native host acquisition dependency facts into source facts
for the already admitted source adapter. This admission records import/spec/task
and IAU artifacts only. Runtime implementation requires a separate handoff
issue after the admission PR merges.

## Technical Context

- Runtime: Node.js with ES modules.
- Existing contracts:
  - `createRuntimeSettingsValidationHostRuntimeObservationSourceAdapter(input =
    {})`
  - `createRuntimeSettingsValidationHostRuntimeObservation(input = {})`
  - `createRuntimeSettingsValidationHostRuntimeDiscovery(input = {})`
  - `createRuntimeSettingsValidationHostRuntimePreflight(input = {})`
  - `createRuntimeSettingsValidationCommandResult(input = {})`
- New contract:
  `createRuntimeSettingsValidationHostRuntimeObservationSourceAcquisition(input =
  {})`
- Source acquisition boundary:
  `bounded-native-host-source-acquisition-dependencies-only`.
- Implementation sharing: none.
- Marketplace publication: out of scope.
- VSIX packaging behavior: out of scope for this feature.

## Constitution Check

- Clean-room requirements authority: pass.
- Spec Kit before implementation: pass.
- Immutable imported requirement IDs: pass.
- Public evidence without private leakage: pass.
- VSIX package artifact only, Marketplace out of scope: pass.

## Structure

```text
docs/requirements/imports/runtime-settings-cli-validation-host-runtime-observation-source-acquisition-v1/
.specify/specs/runtime-settings-cli-validation-host-runtime-observation-source-acquisition-v1/
docs/requirements/admissions/runtime-settings-cli-validation-host-runtime-observation-source-acquisition-v1.json
docs/requirements/admissions/runtime-settings-cli-validation-host-runtime-observation-source-acquisition-v1/
src/runtime-settings-cli.mjs
tests/runtime-settings-cli-validation-host-runtime-observation-source-acquisition.test.mjs
scripts/validate-spec-kit-imports.mjs
```

## Implementation Boundaries

Admitted implementation may:

- accept selected host facts for provider, platform, LabVIEW year, and bitness
- accept bounded acquisition dependency facts for Windows registry-view and
  documented-root source classes
- emit public-safe source facts
- compose those facts into the existing source adapter, observation, discovery,
  preflight, and validation command chain
- report deterministic blocked side-effect facts

Admitted implementation may not:

- retain raw private paths or raw registry output
- walk arbitrary filesystems
- probe broad PATH values or environment variables
- invoke runtime locators or compare locators
- execute runtime validation, compare, LabVIEWCLI, Docker, or terminal
  processes
- expand proof-out or write files
- change VSIX packaging behavior
- publish packages or Marketplace artifacts
- mutate launcher/profile state
- copy source from another VI History product line

## Validation

Admission PR:

```bash
npm test
npm run check
git diff --check
node scripts/validate-spec-kit-imports.mjs
node scripts/check-clean-room-boundary.mjs
```

Implementation PR adds:

```bash
SPECIFY_FEATURE=024-runtime-settings-cli-validation-host-runtime-observation-source-acquisition-v1 \
SPECIFY_FEATURE_DIRECTORY=.specify/specs/runtime-settings-cli-validation-host-runtime-observation-source-acquisition-v1 \
.specify/scripts/bash/check-prerequisites.sh --json --paths-only
```

plus public redaction and bridge/import validation for this slice.
