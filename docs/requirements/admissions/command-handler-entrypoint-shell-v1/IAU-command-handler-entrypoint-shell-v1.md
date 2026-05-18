# IAU: Command Handler Entrypoint Shell

## State

`IAU-command-handler-entrypoint-shell-v1` is `implementation-admitted`.

## Parent Slice

`command-handler-entrypoint-shell-v1`

## Admitted Tasks

- `T009`: add tests proving extension activation registers the admitted
  command entrypoint shell.
- `T010`: add tests proving handler registration does not initialize Git,
  LabVIEWCLI, Docker, packaging, or Marketplace behavior.
- `T011`: implement the minimum public MIT entrypoint shell after preflight.

## Blocked Tasks

- `T012`: documentation panel rendering.
- `T013`: runtime settings CLI materialization.
- `T014`: compare execution.
- `T015`: packaging or Marketplace publication behavior.

## Entry Gate

Implementation may start only after the preflight record has `status: pass` on
`develop`.

## Exit Gate

Closeout requires admitted tasks complete, repository validation green, public
redaction scan green, bridge artifact validation green, and no expansion into
blocked scope.

