# Test Plan Import: Runtime Settings CLI Validation Plan-Only

Slice: `runtime-settings-cli-validation-plan-only-v1`

Supporting governed signal: `TEST-UNIT-392`

## Public MIT Unit Tests

- `TEST-UNIT-RSPLANONLY-001`: verify `validate-plan-only` is accepted only as
  a bounded request mode over `vihs --validate`.
- `TEST-UNIT-RSPLANONLY-002`: verify plan-only requires ready validation facts
  and a supported proof-out target before reporting ready plan facts.
- `TEST-UNIT-RSPLANONLY-003`: verify plan-only composes through the existing
  proof artifact and proof-out adapter contracts without calling the
  file-emission writer.
- `TEST-UNIT-RSPLANONLY-004`: verify plan-only returns exactly the planned
  `vihs-validation-proof.json` and `vihs-validation-issue.md` artifact facts.
- `TEST-UNIT-RSPLANONLY-005`: verify no file writes occur and file-system
  adapters or proof-out writers are not called.
- `TEST-UNIT-RSPLANONLY-006`: verify missing validation facts, unsupported
  proof-out targets, and malformed inputs fail closed without hidden success.
- `TEST-UNIT-RSPLANONLY-007`: verify deterministic non-interactive guidance
  and blocked side-effect facts, including no OS probing, locators, runtime
  execution, compare, LabVIEWCLI, Docker, terminal process wiring,
  publication, release, Marketplace, file emission, or source copying.

## Required Checks

- `npm test`
- `npm run check`
- `git diff --check`
- public redaction scan over the imported requirements, Spec Kit feature,
  admission records, README, AGENTS, and Copilot guidance
- bridge artifact validation for
  `runtime-settings-cli-validation-plan-only-v1`
- Spec Kit CLI version/features check
