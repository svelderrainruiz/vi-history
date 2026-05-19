# Test Plan Import: Runtime Settings CLI Validation Command Contract

Slice: `runtime-settings-cli-validation-command-contract-v1`

Supporting governed signal: `TEST-UNIT-392`

## Public MIT Unit Tests

- `TEST-UNIT-RSCOMMAND-001`: verify ready `vihs --validate` command
  composition returns command identity, request mode `validate-only`,
  validation status, persisted settings facts, generated runtime outcome facts,
  non-interactive guidance, requirement IDs, and blocked side-effect facts.
- `TEST-UNIT-RSCOMMAND-002`: verify missing or invalid persisted settings fail
  closed before ready validation status is reported.
- `TEST-UNIT-RSCOMMAND-003`: verify missing runtime selection facts fail
  closed before ready validation status is reported.
- `TEST-UNIT-RSCOMMAND-004`: verify unknown runtime blocked reasons retain the
  stable fallback facts produced by the admitted runtime outcome contract.
- `TEST-UNIT-RSCOMMAND-005`: verify `--proof-out <dir>` composes through the
  admitted proof artifact, proof-out adapter, and proof-out file-emission
  contracts and reports exactly `vihs-validation-proof.json` and
  `vihs-validation-issue.md` when writing succeeds.
- `TEST-UNIT-RSCOMMAND-006`: verify no proof-out target means no file writes
  and no proof-out success is implied.
- `TEST-UNIT-RSCOMMAND-007`: verify unsupported proof-out targets and I/O
  failures return one blocked result without hidden partial success.
- `TEST-UNIT-RSCOMMAND-008`: verify OS probing, runtime locators, runtime
  execution, compare, LabVIEWCLI, Docker, live proof, package/bin publication,
  launcher/profile mutation, Marketplace, release, `validate-plan-only`, and
  source-copying side effects remain blocked.

## Required Checks

- `npm test`
- `npm run check`
- `git diff --check`
- public redaction scan over the imported requirements, Spec Kit feature,
  admission records, README, AGENTS, and Copilot guidance
- bridge artifact validation for
  `runtime-settings-cli-validation-command-contract-v1`
- Spec Kit CLI version/features check
