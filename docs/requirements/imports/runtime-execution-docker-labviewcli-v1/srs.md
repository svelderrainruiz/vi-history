# SRS Import: Docker LabVIEWCLI Execution

Slice: `runtime-execution-docker-labviewcli-v1`

## Functional Requirements

### Container Execution

- `VHS-REQ-630`: `executeDockerComparisonReport(input = {})` SHALL spawn
  Docker containers using Node.js `child_process.spawn()` with the `docker`
  command. The image SHALL be hardcoded to `nationalinstruments/labview:latest-linux`.

- `VHS-REQ-631`: The execution adapter SHALL construct volume mount arguments
  using `-v <host-path>:/workspace` syntax. All VI paths and output paths
  SHALL be mapped to container paths relative to `/workspace`.

- `VHS-REQ-632`: The execution adapter SHALL include `-Headless` flag in all
  LabVIEWCLI command arguments for container execution.

### Output Capture

- `VHS-REQ-633`: The execution adapter SHALL collect stdout and stderr from
  the Docker process (which includes container output). Collected output
  SHALL be available in the execution outcome.

- `VHS-REQ-634`: The execution adapter SHALL capture process exit code from
  the Docker command. Exit code SHALL be returned in the outcome facts along
  with success/failure status.

### Timeout Handling

- `VHS-REQ-635`: The execution adapter SHALL accept an optional `timeoutMs`
  parameter. Default value SHALL be 600000 (10 minutes) to account for
  container startup. Maximum allowed timeout SHALL be 3600000 (1 hour).

## Docker Command Format

```bash
docker run --rm \
  -v /host/workspace:/workspace \
  nationalinstruments/labview:latest-linux \
  LabVIEWCLI -OperationName CreateComparisonReport \
    -VIPath1 "/workspace/base.vi" \
    -VIPath2 "/workspace/compare.vi" \
    -OutputPath "/workspace/output.html" \
    -ReportType html \
    -Headless
```

## Fail-Closed Requirements

The execution adapter MUST fail closed for:
- Missing or invalid command facts
- Docker not available or command failure
- Image pull failure
- Container startup failure
- Process spawn failure
- Timeout without output
- Internal execution errors

## Out Of Scope

- Docker image building or modification
- Multi-family image selection
- Docker availability checking
- Container orchestration
- Interactive container sessions
- Marketplace publication
