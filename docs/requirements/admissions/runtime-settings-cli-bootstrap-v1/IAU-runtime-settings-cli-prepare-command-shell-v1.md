# IAU: Runtime Settings CLI Prepare Command Shell

State: `implemented`

This IAU implements the first runtime settings CLI bootstrap step for
`runtime-settings-cli-bootstrap-v1`.

## Completed Tasks

- `T009`: add tests proving
  `labviewViHistory.prepareLocalRuntimeSettingsCli` registers as a separate
  handler from `labviewViHistory.open` and
  `labviewViHistory.openDocumentation`.
- `T010`: add tests proving the prepare-command shell reports launcher
  materialization and recovery facts without mutating settings.
- `T011`: implement the minimum public MIT prepare-command shell.

## Blocked Tasks

- `T012`: mutate provider, version, bitness, or JSONC settings.
- `T013`: add `vihs --validate` or runtime validation output.
- `T014`: add compare execution, LabVIEWCLI execution, Docker execution, or
  Docker orchestration.
- `T015`: add packaging or Marketplace publication behavior.

## Admission Result

Preflight passed for T009-T011 only. Issue #45 completed the implementation
without expanding into blocked scope.

Settings mutation, runtime validation, compare execution, LabVIEWCLI execution,
Docker orchestration, packaging, Marketplace publication, and source copying
remain blocked.
