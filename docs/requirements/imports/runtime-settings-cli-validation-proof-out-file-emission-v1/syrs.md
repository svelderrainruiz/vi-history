# System Requirements Import: Runtime Settings CLI Validation Proof-Out File Emission

This public MIT import records the governed installed-user proof-output
file-emission slice for `vihs --validate --proof-out <dir>`.

The slice uses the already implemented public terminal entrypoint, prompt-loop,
terminal I/O adapter, validation readback, validation proof-artifact, and
validation proof-out adapter contracts as prerequisites. It admits only the
bounded filesystem emission step from ready proof-out adapter facts: create the
supported target directory when safe, write exactly
`vihs-validation-proof.json` and `vihs-validation-issue.md`, and return
deterministic write-result facts.

The slice does not admit runtime validation execution, new validation fact
generation, compare execution, LabVIEWCLI execution, Docker command execution
or orchestration, live terminal proof, package/bin publication,
launcher/profile mutation, Marketplace work, or source copying.
