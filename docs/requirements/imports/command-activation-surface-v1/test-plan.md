# Imported Test Plan Slice: Command Activation Surface

## Document Control

- Slice ID: `command-activation-surface-v1`
- Source baseline: `v1.3.16`
- Target feature: `command-activation-surface-v1`
- Import status: public-safe requirements core

## Imported Verification Intent

- `TEST-UNIT-025`: validate the extension manifest retains the authoritative
  command activation events.

## MIT Verification Boundary

This import/spec-lock branch validates artifacts only. Future tests for
activation events, contributed command IDs, command titles, package identity,
and Marketplace-disabled posture require a later named IAU preflight with
`status: pass`.

No LabVIEWCLI execution, Docker execution, command handler behavior, packaging,
or Marketplace publishing is admitted by this test-plan slice.
