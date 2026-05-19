# Preflight: Runtime Settings CLI Validation Host Preflight Command Composition IAU

IAU:
`IAU-runtime-settings-cli-validation-host-preflight-command-composition-v1`

Status: pass

Implementation start allowed: true after the admission PR merges and a
separate implementation handoff issue is created.

## Scope

Implementation start scope is T009-T016 only.

The IAU may add tests and the minimum command-composition branch for
`createRuntimeSettingsValidationCommandResult(input = {})` to consume ready
host preflight facts or supplied public-safe host selection/candidate facts.

## Required Checks

- Constitution includes imported slice.
- Requirements import packet exists.
- Spec Kit spec, plan, and tasks exist.
- Admission ledger and IAU record exist.
- Redaction scan passes.
- Bridge artifact validation passes.
- Implementation sharing is none.
- Marketplace publication is disabled.
- Blocked scope remains explicit.
- Command composition remains supplied-facts-only.

## Blocked Scope

T017-T026 remain blocked. OS scanning, runtime locator invocation, private path
discovery, runtime validation execution, compare execution, LabVIEWCLI
execution, Docker execution, raw terminal process wiring, live proof, file
writes from the host preflight adapter, package/bin publication,
launcher/profile mutation, VSIX packaging, release automation, Marketplace,
and source copying remain blocked.
