# Requirements Admission: Host-Native LabVIEWCLI Execution

Slice: `runtime-execution-host-native-labviewcli-v1`

State: admitted

Admission issue: Issue #162 (pending creation)

Sequencing marker: Issue #161 (pending creation)

## Scope

This admission imports and admits the host-native LabVIEWCLI execution adapter.
The adapter spawns LabVIEWCLI.exe as a child process on Windows systems and
captures stdout, stderr, and exit code as outcome facts.

## Admitted IAU

`IAU-runtime-execution-host-native-create-comparison-report-v1` implements:

- `executeHostNativeComparisonReport(input = {})` process spawning
- stdout/stderr stream capture
- exit code capture and success/failure mapping
- configurable timeout with graceful termination
- private path redaction in diagnostic output
- composition with runtime execution contracts

## Dependencies

- `runtime-execution-contracts-v1` — provides command facts
- `runtime-settings-cli-validation-host-runtime-observation-native-source-acquisition-v1` — provides runtime discovery

## Runner Requirement

Integration tests require `self-hosted-windows-labview` runner.

## Blocked Scope

Docker execution, LabVIEW license validation, interactive sessions, and
Marketplace publication remain outside this admission.
