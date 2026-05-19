# Feature Specification: Runtime Settings CLI Validation Host Preflight Command Composition

**Feature Branch**:
`codex/runtime-settings-validation-host-preflight-command-composition-admission`

**Created**: 2026-05-19

**Status**: Admission planning

**Input**: Governed bridge-readiness packet for
`runtime-settings-cli-validation-host-preflight-command-composition-v1`

**Supporting Signals**: `TEST-UNIT-342`, `TEST-UNIT-354`, `TEST-UNIT-355`,
`TEST-UNIT-392`

## User Scenarios & Testing

### Primary User Story

As a public MIT command contract maintainer, I need
`createRuntimeSettingsValidationCommandResult(input = {})` to consume already
admitted host preflight facts directly so validation command callers do not
manually thread `preflight.runtimeSelection` into `runtimeSelection`.

### Acceptance Scenarios

1. Given ready host preflight facts and no separate `runtimeSelection`, when
   command validation is requested, then the command result uses those runtime
   selection facts and returns the existing ready validation command shape.
2. Given public-safe host selection and one compatible supplied host candidate,
   when command validation is requested, then the command result composes
   through `createRuntimeSettingsValidationHostRuntimePreflight(input = {})`
   before creating runtime outcome facts.
3. Given blocked or malformed host preflight facts, when command validation is
   requested, then the command result fails closed with deterministic public
   blocked facts and no hidden partial success.
4. Given `validate-plan-only`, when host preflight facts are supplied, then the
   command result returns proof-out planning facts without file writes.
5. Given `--proof-out <dir>` and ready validation/proof facts, when command
   validation is requested, then file writes remain delegated to the already
   admitted proof-out file-emission path.

## Requirements

- **REQ-001**: The feature MUST admit
  `IAU-runtime-settings-cli-validation-host-preflight-command-composition-v1`
  for command-result host preflight composition. Imported ID: `VHS-REQ-546`.
- **REQ-002**: The command-result contract MUST accept an already-produced
  ready host preflight result from
  `createRuntimeSettingsValidationHostRuntimePreflight(input = {})` when
  `runtimeSelection` is not supplied separately. Imported ID: `VHS-REQ-546`.
- **REQ-003**: The command-result contract MUST compose supplied public-safe
  host selection and host candidate facts through the admitted host runtime
  preflight contract. Imported ID: `VHS-REQ-546`.
- **REQ-004**: The feature MUST preserve existing runtime outcome, validation
  readback, proof artifact, proof-out adapter, file-emission, validation
  command, and validate-plan-only output shapes. Imported ID: `VHS-REQ-546`.
- **REQ-005**: The feature MUST fail closed for missing, unavailable,
  ambiguous, incompatible, contaminated, or malformed host preflight facts.
- **REQ-006**: The feature MUST NOT inspect the OS, walk filesystems, probe the
  registry, probe PATH, read environment state, discover private paths, invoke
  runtime locators, run runtime validation, execute compare, call LabVIEWCLI,
  call Docker, orchestrate containers, wire raw terminal processes, produce
  live terminal proof, write files from the host preflight adapter, publish
  packages, mutate launcher/profile state, perform Marketplace work, run
  release automation, or copy source.
- **REQ-007**: Docker wording MUST remain corrected: Docker provider selection
  means the latest supported NI LabVIEW image family, 64-bit-only by
  image/platform, with no user-facing Docker bitness choice.
- **REQ-008**: The implementation MUST remain clean-room with implementation
  sharing set to `none`.

## Key Entities

- **Command Composition Request**: Public-safe validation command input that
  includes ready host preflight facts or supplied host selection/candidate
  facts.
- **Host Preflight Result**: Output of
  `createRuntimeSettingsValidationHostRuntimePreflight(input = {})`.
- **Runtime Selection Facts**: Existing runtime selection facts consumed by
  `createRuntimeSettingsValidationRuntimeOutcome(input = {})`.
- **Blocked Side-Effect Facts**: Deterministic proof that blocked runtime,
  locator, terminal, publication, release, mutation, and source-copying
  behavior did not occur.

## Current Implementation Admission Unit

Current Implementation Admission Unit is
`IAU-runtime-settings-cli-validation-host-preflight-command-composition-v1`.

Implementation may begin only after the admission PR merges and a separate
implementation handoff issue is created.

## Out Of Scope

OS scanning, filesystem walking, registry probing, PATH probing, environment
probing, private path discovery, runtime locator invocation, runtime validation
execution, compare execution, LabVIEWCLI execution, Docker execution or
orchestration, raw terminal process wiring, live terminal proof, file writes
from the host preflight adapter, package/bin publication, launcher/profile
mutation, VSIX packaging, Marketplace publication, release automation, and
source copying remain blocked.
