# SRS Import: Host-Native LabVIEWCLI Execution

Slice: `runtime-execution-host-native-labviewcli-v1`

## Functional Requirements

### Process Execution

- `VHS-REQ-620`: `executeHostNativeComparisonReport(input = {})` SHALL spawn
  LabVIEWCLI.exe using Node.js `child_process.spawn()`. The executable path
  SHALL be derived from command facts produced by
  `createHostNativeComparisonReportCommand()`.

- `VHS-REQ-621`: The execution adapter SHALL collect stdout and stderr using
  stream event handlers. Collected output SHALL be available in the execution
  outcome regardless of exit status.

- `VHS-REQ-622`: The execution adapter SHALL capture process exit code via
  the `close` event. Exit code SHALL be returned in the outcome facts along
  with success/failure status.

### Timeout Handling

- `VHS-REQ-623`: The execution adapter SHALL accept an optional `timeoutMs`
  parameter. Default value SHALL be 300000 (5 minutes). Maximum allowed
  timeout SHALL be 3600000 (1 hour).

- `VHS-REQ-624`: On timeout, the adapter SHALL send SIGTERM to the child
  process, wait 5 seconds for graceful termination, then send SIGKILL if
  still running. Timeout outcome SHALL include partial captured output.

### Security

- `VHS-REQ-625`: The execution adapter SHALL redact private paths in stdout
  and stderr before returning outcome facts. Redaction SHALL use the same
  patterns as `createComparisonReportExecutionOutcome()`.

## Fail-Closed Requirements

The execution adapter MUST fail closed for:
- Missing or invalid command facts
- Missing LabVIEWCLI.exe at specified path
- Process spawn failure
- Timeout without output
- Internal execution errors

## Out Of Scope

- Docker execution (separate slice)
- Interactive LabVIEW sessions
- LabVIEW license validation
- Multi-process coordination
- Marketplace publication
