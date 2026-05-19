# SRS Import: Runtime Settings CLI Validation Command Contract

Slice: `runtime-settings-cli-validation-command-contract-v1`

Imported requirement: `VHS-REQ-546`

Supporting signal: `TEST-UNIT-392`

## Functional Requirements

- **FR-001**: The public MIT authority MUST define a pure contract named
  `createRuntimeSettingsValidationCommandResult(input = {})`. Imported ID:
  `VHS-REQ-546`.
- **FR-002**: The contract MUST return a deterministic result for
  `vihs --validate` containing command identity, request mode, validation
  status, persisted settings facts, runtime outcome facts, proof-out result
  facts when applicable, non-interactive guidance, blocked reason, blocked
  side-effect facts, and requirement IDs. Imported ID: `VHS-REQ-546`.
- **FR-003**: The `validate-only` mode MUST compose supplied settings facts,
  supplied runtime selection facts, generated
  `createRuntimeSettingsValidationRuntimeOutcome(input = {})` facts, and
  existing validation readback facts without writing files. Imported ID:
  `VHS-REQ-546`.
- **FR-004**: The `validate-with-proof-out-ready` mode MUST compose through
  the already admitted proof artifact, proof-out adapter, and proof-out
  file-emission contracts when a supported proof-out target is supplied.
  Imported ID: `VHS-REQ-546`.
- **FR-005**: The contract MUST write proof-out files only through the already
  admitted file-emission contract, producing exactly
  `vihs-validation-proof.json` and `vihs-validation-issue.md` when that writer
  reports success. Imported ID: `VHS-REQ-546`.
- **FR-006**: The contract MUST return one stable `validate-blocked` result
  when persisted settings facts, runtime selection facts, runtime outcome
  mapping, validation readback, proof-out target handling, or file emission
  cannot proceed. Imported ID: `VHS-REQ-546`.
- **FR-007**: The contract MUST keep `validate-plan-only` blocked unless a
  later public admission decision explicitly admits it.
- **FR-008**: The contract MUST report copyable non-interactive guidance
  without mutating launcher, shell, profile, package, Marketplace, release, or
  runtime state.
- **FR-009**: The contract MUST keep OS inspection, runtime locator invocation,
  private path discovery, runtime validation execution, compare execution,
  LabVIEWCLI execution, Docker command execution/orchestration, raw terminal
  process wiring, live proof, package/bin publication, launcher/profile
  mutation, VSIX packaging, Marketplace work, release automation, and source
  copying blocked.
- **FR-010**: Docker provider selection wording MUST remain corrected: Docker
  uses the latest supported NI LabVIEW image family and is 64-bit-only by
  image/platform; there is no user-facing Docker bitness choice.
- **FR-011**: The implementation MUST remain clean-room: no implementation
  source is copied from another VI History product line.

## Key Entities

- **Validation Command Request**: Public-safe request facts for
  `vihs --validate`, optionally including a proof-out target.
- **Validation Command Result**: The deterministic result returned by
  `createRuntimeSettingsValidationCommandResult(input = {})`.
- **Runtime Outcome Facts**: The existing normalized runtime outcome object
  generated from supplied public-safe selection facts.
- **Proof-Out Result Facts**: Existing adapter and file-emission facts for
  proof JSON and issue Markdown handling.
- **Blocked Side-Effect Facts**: Facts proving blocked execution, publication,
  mutation, release, Marketplace, and source-copying behavior did not occur.

## Non-Functional Requirements

- The command result must be deterministic for the same public-safe inputs.
- The command result must be testable without a live terminal, LabVIEWCLI,
  Docker, compare execution, runtime locator, or package publication.
- Public artifacts must avoid private paths, credential details, private
  evidence, and source-copying instructions.
