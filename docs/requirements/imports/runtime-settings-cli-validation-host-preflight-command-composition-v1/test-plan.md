# Test Plan: Runtime Settings CLI Validation Host Preflight Command Composition

Slice:
`runtime-settings-cli-validation-host-preflight-command-composition-v1`

Candidate IAU:
`IAU-runtime-settings-cli-validation-host-preflight-command-composition-v1`

## Focus

Verify that `createRuntimeSettingsValidationCommandResult(input = {})` can
consume ready host preflight facts or supplied public-safe host candidate facts
and compose them through the already admitted validation chain without opening
runtime discovery or execution.

## Unit Tests

- **TEST-UNIT-RSHOSTCMD-001**: Passing a ready host preflight result without a
  separate `runtimeSelection` returns ready command validation facts.
- **TEST-UNIT-RSHOSTCMD-002**: Passing supplied public-safe host selection and
  one compatible host candidate composes through
  `createRuntimeSettingsValidationHostRuntimePreflight(input = {})`.
- **TEST-UNIT-RSHOSTCMD-003**: Blocked host preflight facts fail closed through
  command validation with deterministic runtime outcome and validation facts.
- **TEST-UNIT-RSHOSTCMD-004**: Validate-only, validate-with-proof-out-ready, and
  validate-plan-only preserve existing output shapes.
- **TEST-UNIT-RSHOSTCMD-005**: Proof-out file writes occur only through the
  already admitted command/file-emission path and never from host preflight.
- **TEST-UNIT-RSHOSTCMD-006**: Missing, unsupported, ambiguous, incompatible,
  contaminated, and malformed host preflight inputs fail closed without hidden
  partial success.
- **TEST-UNIT-RSHOSTCMD-007**: Blocked side-effect facts prove no OS scan,
  runtime locator invocation, private path discovery, runtime execution,
  compare execution, LabVIEWCLI execution, Docker execution, raw terminal
  process wiring, package/bin publication, Marketplace work, release
  automation, launcher/profile mutation, or source copying occurred.

## Required Gates

- `npm test`
- `npm run check`
- `git diff --check`
- public redaction scan over touched public artifacts
- bridge artifact validation for
  `runtime-settings-cli-validation-host-preflight-command-composition-v1`
- Spec Kit CLI version/features check
