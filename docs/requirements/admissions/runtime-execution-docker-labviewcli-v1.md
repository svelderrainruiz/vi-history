# Requirements Admission: Docker LabVIEWCLI Execution

Slice: `runtime-execution-docker-labviewcli-v1`

State: admitted

Admission issue: Issue #164 (pending creation)

Sequencing marker: Issue #163 (pending creation)

## Scope

This admission imports and admits the Docker LabVIEWCLI execution adapter.
The adapter spawns Docker containers using the hardcoded
`nationalinstruments/labview:latest-linux` image and captures stdout, stderr,
and exit code as outcome facts.

## Admitted IAU

`IAU-runtime-execution-docker-create-comparison-report-v1` implements:

- `executeDockerComparisonReport(input = {})` container spawning
- Volume mount for workspace directories
- -Headless flag for non-GUI execution
- stdout/stderr stream capture
- exit code capture and success/failure mapping
- configurable timeout with container termination
- composition with runtime execution contracts

## Dependencies

- `runtime-execution-contracts-v1` — provides command facts

## Docker Image

Uses hardcoded `nationalinstruments/labview:latest-linux` (single-family).

## Blocked Scope

Docker image building, multi-family image selection, Docker availability
checking, container orchestration, and Marketplace publication remain
outside this admission.
