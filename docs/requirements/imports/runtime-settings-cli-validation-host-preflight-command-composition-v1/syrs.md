# SyRS Import: Runtime Settings CLI Validation Host Preflight Command Composition

Slice:
`runtime-settings-cli-validation-host-preflight-command-composition-v1`

Imported requirement: `VHS-REQ-546`

Prerequisite requirement references: `VHS-REQ-532`, `VHS-REQ-537`,
`VHS-REQ-543`, `VHS-REQ-544`, `VHS-REQ-545`, `VHS-REQ-550`

Supporting signals: `TEST-UNIT-342`, `TEST-UNIT-354`, `TEST-UNIT-355`,
`TEST-UNIT-392`

## System Context

The public MIT authority already implements pure validation readback, runtime
outcome, proof artifact, proof-out adapter, proof-out file-emission,
validation command, validate-plan-only, and host runtime preflight contracts.
The next bounded system behavior is command-level composition: callers of
`createRuntimeSettingsValidationCommandResult(input = {})` should be able to
provide a ready host preflight result or public-safe host selection/candidate
facts instead of manually threading `preflight.runtimeSelection` into
`runtimeSelection`.

## System Requirements

- **SYS-001**: The system MUST admit a public MIT command-composition slice
  that connects already admitted host runtime preflight facts to the existing
  validation command chain. Imported ID: `VHS-REQ-546`.
- **SYS-002**: The system MUST keep host preflight discovery supplied-facts-only.
  Filesystem walking, registry probing, PATH probing, environment probing, OS
  scanning, private path discovery, and runtime locator invocation remain
  outside this slice. Prerequisite IDs: `VHS-REQ-532`, `VHS-REQ-550`.
- **SYS-003**: The system MUST preserve the existing output shapes for runtime
  outcome, validation readback, proof artifact, proof-out adapter,
  file-emission, validation command, and validate-plan-only contracts.
  Imported ID: `VHS-REQ-546`.
- **SYS-004**: The system MUST fail closed for missing, unavailable,
  ambiguous, incompatible, contaminated, or malformed host preflight facts
  without hidden partial success. Imported ID: `VHS-REQ-546`.
- **SYS-005**: The system MUST keep runtime validation execution, compare
  execution, LabVIEWCLI execution, Docker execution/orchestration, terminal
  process wiring, live proof, publication, Marketplace, release automation,
  launcher/profile mutation, and source copying blocked.
- **SYS-006**: The system MUST preserve the corrected Docker wording: Docker
  provider selection means the latest supported NI LabVIEW image family,
  64-bit-only by image/platform, with no user-facing Docker bitness choice.

## Public Boundary

This import may expose requirement IDs, public contract names, public-safe
command terms, public-safe host candidate facts, and blocked-scope wording. It
must not expose private paths, private proof packets, credential details,
private control-plane instructions, raw locator implementation details, or
source-copying instructions from another VI History authority.
