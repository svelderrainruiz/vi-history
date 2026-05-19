# Imported SyRS: Runtime Settings CLI Terminal Prompt Loop

## System Context

This public MIT slice defines the no-argument `vihs` terminal prompt-loop
contract after the materialized terminal entrypoint has been implemented.

The candidate implementation unit is limited to deterministic prompt
transcript/state behavior, Enter-through confirmation, guided provider/runtime
selection, and validation handoff facts. It reuses the already public
materialized-entrypoint and pure interactive-selection contracts.

## System Need

Installed users need bare `vihs` to guide first-use runtime settings selection
without relying on chat memory or a hidden panel-side picker. Maintainers need
that prompt behavior specified as a clean-room public contract before any
real terminal I/O driver or runtime execution is implemented.

## Public Boundary

This import carries requirements only. It does not carry implementation source,
private evidence, release credentials, private issue templates, private
control-plane instructions, terminal-driver internals, or publication
automation.

OS-specific raw stdin/TTY process drivers, compare execution, LabVIEWCLI
execution, Docker command execution or orchestration, proof-out expansion,
live-session proof, packaging, Marketplace publication, and source copying
remain outside this slice.
