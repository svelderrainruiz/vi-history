# IAU: Command Handler Entrypoint Shell

## State

`IAU-command-handler-entrypoint-shell-v1` is `implemented` and closed.

## Parent Slice

`command-handler-entrypoint-shell-v1`

## Completed Tasks

- `T009`: add tests proving extension activation registers the admitted
  command entrypoint shell. ✓
- `T010`: add tests proving handler registration does not initialize Git,
  LabVIEWCLI, Docker, packaging, or Marketplace behavior. ✓
- `T011`: implement the minimum public MIT entrypoint shell after preflight. ✓

## Blocked Tasks

- `T012`: documentation panel rendering.
- `T013`: runtime settings CLI materialization.
- `T014`: compare execution.
- `T015`: packaging or Marketplace publication behavior.

## Closeout

T009-T011 are complete. Repository validation is green. Public redaction scan
and bridge artifact validation passed. No blocked scope was expanded.

Issue #36 is closed. No new implementation should start from Issue #36. Future
work requires a new named IAU, public admission records, and a preflight record
with `status: pass`.

