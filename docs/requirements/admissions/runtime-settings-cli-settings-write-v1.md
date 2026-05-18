# Runtime Settings CLI Settings-Write Admission

State: `implementation-admitted`

Issue #47 imports `runtime-settings-cli-settings-write-v1`, locks the public
Spec Kit feature, and admits
`IAU-runtime-settings-cli-settings-write-contract-v1` for T009-T012 only.

Machine-readable ledger:
[runtime-settings-cli-settings-write-v1.json](./runtime-settings-cli-settings-write-v1.json)

## Imported Requirements

- `VHS-REQ-537`: terminal-facing `vihs` settings surface writes provider,
  LabVIEW version, and LabVIEW bitness facts.
- `VHS-REQ-543`: effective settings target is explicit, unrelated settings
  content is preserved, and only governed provider/version/bitness facts are
  updated.

## Admitted IAU

`IAU-runtime-settings-cli-settings-write-contract-v1` is admitted for:

- `T009`: add tests proving only `viHistorySuite.runtimeProvider`,
  `viHistorySuite.labviewVersion`, and `viHistorySuite.labviewBitness` are
  updated.
- `T010`: add tests proving unrelated settings content is preserved and the
  effective settings target is explicit.
- `T011`: add tests proving comments/trailing commas are handled when admitted
  by the public spec and unsupported target shapes fail closed.
- `T012`: implement the minimum public MIT settings-write contract.

Implementation starts only after this admission PR merges and a separate
implementation handoff issue is created.

## Blocked Scope

`vihs --validate`, runtime validation, no-argument interactive selection,
compare execution, LabVIEWCLI execution, Docker execution or orchestration,
live already-running VS Code session uptake proof, VSIX packaging, Marketplace
publication, and source copying remain blocked until separately admitted.
