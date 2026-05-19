# Imported SyRS: Runtime Settings CLI Terminal I/O Adapter

## System Context

This public MIT slice defines the terminal session adapter for no-argument
`vihs` after the materialized terminal entrypoint and pure prompt-loop
contracts have been implemented.

The candidate implementation unit is limited to deterministic terminal
session/input facts around the existing prompt-loop contract. It may adapt
supplied terminal facts into Enter-through confirmation, guided provider
selection, Docker provider selection, non-interactive copyable guidance,
EOF/cancel handling, fail-closed unsupported input, and validation handoff
facts.

## System Need

Installed users need bare `vihs` to behave predictably in terminal sessions
without waiting for compare execution, runtime execution, Docker orchestration,
or release work. Maintainers need the adapter specified as a clean-room public
contract before implementation starts.

## Docker Provider Image Boundary

Docker provider selection uses the latest supported NI LabVIEW Docker image
family. The governed current Linux default maps to the LabVIEW 2026 image
family. NI LabVIEW Docker images are 64-bit-only by image/platform, so the
adapter must not expose a user-facing Docker bitness prompt or command choice.

## Public Boundary

This import carries requirements only. It does not carry implementation source,
private evidence, release credentials, private issue templates, private
control-plane instructions, raw OS-specific stdin/TTY driver internals, or
publication automation.

Compare execution, LabVIEWCLI execution, Docker command execution or
orchestration, proof-out expansion, live-session proof, package/bin
publication, launcher/profile mutation, Marketplace publication, and source
copying remain outside this slice.
