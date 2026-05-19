# Test Plan Import: Runtime Settings CLI Validation Host Runtime Observation Adapter

Slice: `runtime-settings-cli-validation-host-runtime-observation-adapter-v1`

Supporting governed signals: `TEST-UNIT-063`, `TEST-UNIT-064`,
`TEST-UNIT-342`, `TEST-UNIT-354`, `TEST-UNIT-355`, `TEST-UNIT-392`

## Public MIT Unit Tests

- `TEST-UNIT-RSHOSTOBS-001`: verify selected host facts drive public-safe
  observation shaping without arbitrary filesystem walking.
- `TEST-UNIT-RSHOSTOBS-002`: verify registry observations reduce to
  source-class and candidate facts without retaining raw registry output or
  private installed paths.
- `TEST-UNIT-RSHOSTOBS-003`: verify documented-root observations reduce to
  public-safe availability, executable-role, version, and bitness facts.
- `TEST-UNIT-RSHOSTOBS-004`: verify requested
  `host` / `windows` / `2026` / `x64` can observe LabVIEW 2026 x64 plus the
  canonical installed x86 LabVIEWCLI surface as sanitized facts.
- `TEST-UNIT-RSHOSTOBS-005`: verify missing selection, unsupported provider
  or platform, unsupported version, missing observation dependency, malformed
  observation, missing candidate, ambiguous candidate, incompatible candidate,
  contaminated host surface, and private-path disclosure attempts fail closed.
- `TEST-UNIT-RSHOSTOBS-006`: verify generated observation facts compose into
  `createRuntimeSettingsValidationHostRuntimeDiscovery(input = {})`.
- `TEST-UNIT-RSHOSTOBS-007`: verify generated observation facts compose into
  the existing `vihs --validate`, proof-out, file-emission, and
  validate-plan-only command chain without output-shape redesign.
- `TEST-UNIT-RSHOSTOBS-008`: verify blocked side-effect facts prove no
  runtime validation execution, compare execution, LabVIEWCLI execution, Docker
  execution, raw terminal process wiring, proof-out expansion, file writes,
  package/bin publication, Marketplace work, release automation, launcher or
  profile mutation, or source copying.

## Required Checks

- `npm test`
- `npm run check`
- `git diff --check`
- public redaction scan over the imported requirements, Spec Kit feature,
  admission records, README, AGENTS, and Copilot guidance
- bridge artifact validation for
  `runtime-settings-cli-validation-host-runtime-observation-adapter-v1`
- Spec Kit CLI version/features check
