# SyRS Import: Runtime Settings CLI Validation Command Contract

Slice: `runtime-settings-cli-validation-command-contract-v1`

## Purpose

The public MIT `vi-history` authority imports the bounded system behavior for
the installed-user validation command contract. The command contract gives
callers one deterministic `vihs --validate` result from already admitted
public-safe facts before any runtime discovery or execution lane opens.

## Imported Requirement

- `VHS-REQ-546`: The installed-user `vihs` surface exposes one governed
  validation action through `vihs --validate`. The validation action reports
  persisted provider/version/bitness truth plus runtime-validation outcome
  without reopening provider picking, path picking, image-family selection, or
  a general panel-side provider picker.

## Prerequisites

These requirement IDs are referenced as already satisfied prerequisites:

- `VHS-REQ-537`: runtime settings persistence baseline
- `VHS-REQ-543`: validation readback facts
- `VHS-REQ-544`: runtime settings command shell baseline
- `VHS-REQ-545`: interactive selection and terminal handoff baseline

## Public System Boundary

The system may expose a pure command-level result contract named
`createRuntimeSettingsValidationCommandResult(input = {})`. The result may
compose persisted settings facts, supplied runtime selection facts, generated
runtime outcome facts, validation readback facts, and optional proof-out facts.

When a proof-out target is supplied, file writing may occur only through the
already admitted proof-out file-emission contract. The command contract must
not implement runtime discovery, OS inspection, runtime validation execution,
compare execution, LabVIEWCLI execution, Docker execution or orchestration,
terminal process wiring, package/bin publication, launcher/profile mutation,
VSIX packaging, Marketplace work, release automation, or source copying.

`validate-plan-only` remains outside this first imported system slice.
