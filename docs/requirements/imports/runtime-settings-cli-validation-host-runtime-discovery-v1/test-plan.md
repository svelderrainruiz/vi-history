# Test Plan Import: Runtime Settings CLI Validation Host Runtime Discovery

Slice: `runtime-settings-cli-validation-host-runtime-discovery-v1`

Supporting governed signals: `TEST-UNIT-063`, `TEST-UNIT-064`,
`TEST-UNIT-342`, `TEST-UNIT-354`, `TEST-UNIT-355`, `TEST-UNIT-392`

## Public MIT Unit Tests

- `TEST-UNIT-RSHOSTDISCOVERY-001`: verify selected host facts drive bounded
  documented-root discovery without arbitrary filesystem walking.
- `TEST-UNIT-RSHOSTDISCOVERY-002`: verify Windows registry-view observations
  normalize into public-safe candidate facts without retaining raw registry
  output or private installed paths.
- `TEST-UNIT-RSHOSTDISCOVERY-003`: verify Linux documented-root discovery and
  macOS unavailable constraints are deterministic.
- `TEST-UNIT-RSHOSTDISCOVERY-004`: verify requested
  `host` / `windows` / `2026` / `x64` can discover LabVIEW 2026 x64 plus the
  canonical installed x86 LabVIEWCLI surface as candidate facts.
- `TEST-UNIT-RSHOSTDISCOVERY-005`: verify missing selection, unsupported
  provider or platform, unsupported version, missing discovery dependency,
  malformed observation, missing candidate, ambiguous candidate, incompatible
  candidate, and contaminated host surface fail closed.
- `TEST-UNIT-RSHOSTDISCOVERY-006`: verify discovered host candidate facts
  compose into
  `createRuntimeSettingsValidationHostRuntimePreflight(input = {})`.
- `TEST-UNIT-RSHOSTDISCOVERY-007`: verify discovered host candidate facts
  compose into the existing `vihs --validate`, proof-out, file-emission, and
  validate-plan-only command chain without output-shape redesign.
- `TEST-UNIT-RSHOSTDISCOVERY-008`: verify blocked side-effect facts prove no
  runtime validation execution, compare execution, LabVIEWCLI execution,
  Docker execution, raw terminal process wiring, file writes, package/bin
  publication, Marketplace work, release automation, launcher or profile
  mutation, or source copying.

## Required Checks

- `npm test`
- `npm run check`
- `git diff --check`
- public redaction scan over the imported requirements, Spec Kit feature,
  admission records, README, AGENTS, and Copilot guidance
- bridge artifact validation for
  `runtime-settings-cli-validation-host-runtime-discovery-v1`
- Spec Kit CLI version/features check
