# Imported SyRS: Runtime Settings CLI Validation Readback

## System Context

This public MIT slice defines the bounded installed-user validation readback
contract for `vihs --validate`.

The first admitted unit is limited to a clean-room validation result contract.
It reads persisted provider, LabVIEW version, LabVIEW bitness, and effective
settings target facts and reports bounded runtime outcome facts. It does not
start no-argument interactive selection, proof-out file writing, compare
execution, LabVIEWCLI execution, Docker execution, packaging, Marketplace
publication, or live-session proof.

## System Need

Users need one terminal-facing validation readback that says what was persisted
and whether that bundle is runtime-admissible without reopening path-picking,
image-family selection, or a panel-side provider picker.

## Public Boundary

This import carries requirements only. It does not carry implementation source,
private evidence, release credentials, or private control-plane instructions.
