# SRS Import: Runtime Settings CLI Validation Plan-Only

Slice: `runtime-settings-cli-validation-plan-only-v1`

Imported requirement: `VHS-REQ-546`

Supporting signal: `TEST-UNIT-392`

## Functional Requirements

- **FR-001**: The public MIT authority MUST admit `validate-plan-only` as a
  bounded request mode over
  `createRuntimeSettingsValidationCommandResult(input = {})`. Imported ID:
  `VHS-REQ-546`.
- **FR-002**: The plan-only mode MUST require ready validation facts and a
  supported proof-out target before reporting planned proof-out facts. Imported
  ID: `VHS-REQ-546`.
- **FR-003**: The plan-only mode MUST compose through the already admitted
  validation readback, runtime outcome, validation proof-artifact, and
  proof-out adapter contracts without changing their output shapes. Imported
  ID: `VHS-REQ-546`.
- **FR-004**: The plan-only mode MUST report deterministic proof-out target
  facts, artifact file facts, proof JSON facts, issue Markdown facts,
  non-interactive guidance, blocked reason, blocked side-effect facts, and
  requirement IDs. Imported ID: `VHS-REQ-546`.
- **FR-005**: The plan-only mode MUST report exactly the planned artifact names
  `vihs-validation-proof.json` and `vihs-validation-issue.md` when the request
  is ready. Imported ID: `VHS-REQ-546`.
- **FR-006**: The plan-only mode MUST NOT call the proof-out file-emission
  writer and MUST NOT write proof files.
- **FR-007**: The plan-only mode MUST fail closed when required validation
  facts are missing, the proof-out target is missing or unsupported, inputs are
  malformed, or a caller attempts hidden side effects.
- **FR-008**: The plan-only mode MUST keep OS inspection, runtime locator
  invocation, private path discovery, runtime validation execution, compare
  execution, LabVIEWCLI execution, Docker command execution/orchestration, raw
  terminal process wiring, live proof, package/bin publication,
  launcher/profile mutation, VSIX packaging, Marketplace work, release
  automation, and source copying blocked.
- **FR-009**: Docker provider selection wording MUST remain corrected: Docker
  uses the latest supported NI LabVIEW image family and is 64-bit-only by
  image/platform; there is no user-facing Docker bitness choice.
- **FR-010**: The implementation MUST remain clean-room: no implementation
  source is copied from another VI History product line.

## Key Entities

- **Validation Plan-Only Request**: Public-safe request facts for
  `vihs --validate` with request mode `validate-plan-only` and a proof-out
  target.
- **Proof-Out Plan Facts**: Deterministic target and artifact facts that name
  what would be emitted without writing files.
- **Validation Command Result**: The existing command result shape returned by
  `createRuntimeSettingsValidationCommandResult(input = {})`.
- **Blocked Side-Effect Facts**: Facts proving that file emission, execution,
  publication, mutation, release, Marketplace, and source-copying behavior did
  not occur.

## Non-Functional Requirements

- The plan-only result must be deterministic for the same public-safe inputs.
- The plan-only result must be testable without a live terminal, filesystem
  writes, LabVIEWCLI, Docker, compare execution, runtime locator, or package
  publication.
- Public artifacts must avoid private paths, credential details, private
  evidence, and source-copying instructions.
