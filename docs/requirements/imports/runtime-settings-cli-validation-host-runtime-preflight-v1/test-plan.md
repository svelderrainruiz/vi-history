# Test Plan Import: Runtime Settings CLI Validation Host Runtime Preflight

Slice: `runtime-settings-cli-validation-host-runtime-preflight-v1`

Supporting governed signals: `TEST-UNIT-342`, `TEST-UNIT-354`,
`TEST-UNIT-355`, `TEST-UNIT-392`

## Public MIT Unit Tests

- `TEST-UNIT-RSHOSTPREFLIGHT-001`: verify supplied host persisted selection
  facts and exactly one compatible supplied host candidate return ready host
  runtime selection facts.
- `TEST-UNIT-RSHOSTPREFLIGHT-002`: verify requested
  `host` / `windows` / `2026` / `x64` accepts LabVIEW 2026 x64 plus the
  canonical installed x86 LabVIEWCLI surface.
- `TEST-UNIT-RSHOSTPREFLIGHT-003`: verify missing selection, non-host provider,
  missing host candidate, and malformed inputs fail closed.
- `TEST-UNIT-RSHOSTPREFLIGHT-004`: verify ambiguous candidates, LabVIEW
  version mismatch, LabVIEW bitness mismatch, missing LabVIEW executable,
  missing canonical LabVIEWCLI, and contaminated host surface fail closed.
- `TEST-UNIT-RSHOSTPREFLIGHT-005`: verify ready and blocked preflight results
  are consumable by `createRuntimeSettingsValidationRuntimeOutcome(input = {})`.
- `TEST-UNIT-RSHOSTPREFLIGHT-006`: verify composition into validation readback,
  proof artifact, proof-out adapter, file-emission, validation command, and
  validate-plan-only results without redesigning those output shapes.
- `TEST-UNIT-RSHOSTPREFLIGHT-007`: verify blocked side-effect facts prove no
  OS scan, runtime locator invocation, private path discovery, runtime
  validation execution, compare execution, LabVIEWCLI execution, Docker
  execution, terminal process wiring, file writes from the preflight adapter,
  package/bin publication, Marketplace work, release automation, launcher or
  profile mutation, or source copying.

## Required Checks

- `npm test`
- `npm run check`
- `git diff --check`
- public redaction scan over the imported requirements, Spec Kit feature,
  admission records, README, AGENTS, and Copilot guidance
- bridge artifact validation for
  `runtime-settings-cli-validation-host-runtime-preflight-v1`
- Spec Kit CLI version/features check
