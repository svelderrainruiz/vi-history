# SyRS Import: Host-Native LabVIEWCLI Execution

Slice: `runtime-execution-host-native-labviewcli-v1`

This public MIT import admits the host-native LabVIEWCLI execution adapter.
It enables invoking LabVIEWCLI.exe on Windows for CreateComparisonReport
operations using actual process spawning.

## Imported System Requirements

### Host-Native Execution

- `VHS-REQ-620`: Extension SHALL spawn LabVIEWCLI.exe as a child process on
  Windows host systems. The process spawning SHALL use the discovered runtime
  path from native source acquisition facts.

- `VHS-REQ-621`: Extension SHALL capture LabVIEWCLI process stdout and stderr
  streams as diagnostic output. Stream capture SHALL be real-time during
  execution.

- `VHS-REQ-622`: Extension SHALL capture LabVIEWCLI process exit code as
  execution outcome. Exit code 0 indicates success; non-zero indicates failure.

- `VHS-REQ-623`: Extension SHALL support configurable execution timeout for
  LabVIEWCLI operations. Default timeout SHALL be 300 seconds (5 minutes).

- `VHS-REQ-624`: Extension SHALL terminate LabVIEWCLI process on timeout and
  report timeout as failure outcome with captured partial output.

- `VHS-REQ-625`: Extension SHALL redact private file paths in captured
  diagnostic output before storing in outcome facts.

## System Boundary

The host-native execution adapter may:
- Spawn LabVIEWCLI.exe as a child process
- Capture stdout, stderr, and exit code
- Terminate process on timeout
- Compose with runtime execution contracts

The host-native execution adapter must not:
- Modify LabVIEW installation or configuration
- Execute arbitrary commands beyond LabVIEWCLI
- Store raw private paths in outcome facts

## Runner Requirement

Integration tests for this slice require the `self-hosted-windows-labview`
runner with LabVIEW 2026 installed.
