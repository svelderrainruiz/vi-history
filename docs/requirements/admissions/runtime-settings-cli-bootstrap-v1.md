# Runtime Settings CLI Bootstrap Admission

State: `implementation-admitted`

Issue #43 imports `runtime-settings-cli-bootstrap-v1`, locks the public Spec
Kit feature, and admits
`IAU-runtime-settings-cli-prepare-command-shell-v1` for T009-T011 only.

Machine-readable ledger:
[runtime-settings-cli-bootstrap-v1.json](./runtime-settings-cli-bootstrap-v1.json)

## Imported Requirements

- `VHS-REQ-537`: terminal-facing `vihs` settings bootstrap without hidden path
  reconstruction, profile editing, admin elevation, machine-wide install
  doctrine, or a prebuilt external CLI payload.
- `VHS-REQ-544`: bare `vihs` entrypoint makes runtime dependency and recovery
  explicit.
- `VHS-REQ-594`: explicit
  `labviewViHistory.prepareLocalRuntimeSettingsCli` activation metadata.

## Admitted IAU

`IAU-runtime-settings-cli-prepare-command-shell-v1` is admitted for:

- `T009`: add tests proving
  `labviewViHistory.prepareLocalRuntimeSettingsCli` registers as a separate
  handler from `labviewViHistory.open` and
  `labviewViHistory.openDocumentation`.
- `T010`: add tests proving the prepare-command shell reports launcher
  materialization and recovery facts without mutating settings.
- `T011`: implement the minimum public MIT prepare-command shell.

Implementation starts only after this admission PR merges and a separate
implementation handoff issue is created.

## Blocked Scope

Provider/version/bitness settings mutation, JSONC settings rewrite,
`vihs --validate`, runtime validation, compare execution, LabVIEWCLI execution,
Docker execution or orchestration, VSIX packaging, Marketplace publication, and
source copying remain blocked until separately admitted.
