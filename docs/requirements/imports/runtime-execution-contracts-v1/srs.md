# SRS Import: Runtime Execution Contracts

Slice: `runtime-execution-contracts-v1`

## Functional Requirements

### Execution Plan Facts

- `VHS-REQ-606`: `createComparisonReportCommand(input = {})` SHALL return
  execution plan facts including:
  - Command executable path (LabVIEWCLI.exe or container command)
  - Command arguments array
  - Working directory
  - Environment variables (if any)
  - Execution context (host-native or docker)

### Docker Execution

- `VHS-REQ-607`: Docker execution SHALL mount workspace paths as container
  volumes using `-v <host-path>:<container-path>` syntax. The workspace root
  SHALL be mounted to `/workspace` inside the container.

- `VHS-REQ-608`: Docker execution SHALL use the hardcoded image
  `nationalinstruments/labview:latest-linux`. Multi-family image selection is
  out of scope for this slice.

### Host-Native Execution

- `VHS-REQ-609`: Host execution SHALL locate LabVIEWCLI via discovered runtime
  path from `createRuntimeSettingsValidationHostRuntimeObservationNativeSourceAcquisition(input = {})` facts.
  The LabVIEWCLI.exe path is derived from the LabVIEW installation directory.

### Execution Outcome

- `VHS-REQ-610`: Execution adapter SHALL capture stdout/stderr as diagnostic
  facts. The captured output enables debugging and verification of execution
  results.

- `VHS-REQ-611`: Execution adapter SHALL return exit code as outcome fact. Exit
  code 0 indicates success; non-zero indicates failure.

## Fail-Closed Requirements

The execution adapter MUST fail closed for:
- Missing or invalid VI file paths
- Missing LabVIEWCLI executable (host-native)
- Docker not available or image pull failure
- Execution timeout
- Non-zero exit code (with captured stderr for diagnosis)

## Command Format Reference

### Host-Native Windows

```powershell
LabVIEWCLI.exe -OperationName CreateComparisonReport `
  -VIPath1 "C:\base\path\to\file.vi" `
  -VIPath2 "C:\pr\path\to\file.vi" `
  -OutputPath "C:\reports\file.html" `
  -ReportType html
```

### Docker Linux

```bash
docker run --rm \
  -v /workspace:/workspace \
  nationalinstruments/labview:latest-linux \
  LabVIEWCLI -OperationName CreateComparisonReport \
    -VIPath1 "/workspace-base/path/to/file.vi" \
    -VIPath2 "/workspace/path/to/file.vi" \
    -OutputPath "/workspace/vidiff-reports/file.html" \
    -ReportType html \
    -Headless
```

## Out Of Scope

- Multi-family Docker image selection (hardcoded to `latest-linux`)
- LabVIEW license management
- Docker image building or modification
- Marketplace publication
- Package registry publication
- Release automation
