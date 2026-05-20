# Requirements Admission: Runtime Execution Contracts

Slice: `runtime-execution-contracts-v1`

State: admitted

Admission issue: Issue #160 (pending creation)

Sequencing marker: Issue #159 (pending creation)

## Scope

This admission imports and admits the LabVIEWCLI execution contracts for VI
comparison operations. The contracts enable invoking LabVIEWCLI
CreateComparisonReport on both host-native Windows installations and Docker
containers.

## Admitted IAU

`IAU-runtime-execution-labviewcli-create-comparison-report-v1` implements:

- `createComparisonReportCommand(input = {})` pure facts contract
- Host-native execution plan assembly from discovered runtime facts
- Docker execution plan assembly with hardcoded `nationalinstruments/labview:latest-linux`
- stdout/stderr/exit-code capture as diagnostic and outcome facts
- fail-closed for missing runtime, invalid paths, execution errors
- composition with existing validation command chain

## Implementation Handoff

Implementation of host-native and Docker execution adapters is handled by
separate feature slices:

- `runtime-execution-host-native-labviewcli-v1` — Windows LabVIEWCLI.exe
- `runtime-execution-docker-labviewcli-v1` — Docker container execution

## Blocked Scope

Multi-family Docker image selection, LabVIEW license management, Docker image
building, Marketplace publication, package registry publication, and release
automation remain outside this admission.
