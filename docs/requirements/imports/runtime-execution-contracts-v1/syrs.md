# SyRS Import: Runtime Execution Contracts

Slice: `runtime-execution-contracts-v1`

This public MIT import admits LabVIEWCLI execution contracts for VI comparison
operations. It enables the extension to invoke LabVIEWCLI CreateComparisonReport
on both host-native Windows installations and Docker containers.

## Imported System Requirements

### LabVIEWCLI Execution

- `VHS-REQ-600`: Extension SHALL invoke LabVIEWCLI CreateComparisonReport
  operation for VI comparison. The operation produces HTML diff reports
  comparing two VI files.

- `VHS-REQ-601`: Extension SHALL support host-native LabVIEW runtime via
  LabVIEWCLI.exe on Windows. The runtime path SHALL be derived from discovered
  host runtime facts.

- `VHS-REQ-602`: Extension SHALL support Docker runtime via
  `nationalinstruments/labview:latest-linux` (hardcoded single-family). The
  Docker image is the official NI LabVIEW container for Linux.

- `VHS-REQ-603`: CreateComparisonReport operation SHALL accept `-VIPath1`,
  `-VIPath2`, and `-OutputPath` arguments. These arguments specify the two VI
  files to compare and the output location for the HTML report.

- `VHS-REQ-604`: CreateComparisonReport operation SHALL produce HTML diff
  report output via `-ReportType html` flag.

- `VHS-REQ-605`: Extension SHALL use `-Headless` flag for all LabVIEWCLI
  operations in Docker containers. Headless mode is required for non-GUI
  container execution.

## System Boundary

The execution contracts may invoke LabVIEWCLI CreateComparisonReport on:
- Host-native Windows installations via discovered runtime paths
- Docker containers via the hardcoded `nationalinstruments/labview:latest-linux`
  image

The execution contracts must capture stdout, stderr, and exit code as
diagnostic and outcome facts. The execution contracts must not modify LabVIEW
installations, Docker images, or system configurations.

## Public-Safe Output

Execution outputs must be deterministic and public-safe. Raw private file
paths in error messages should be redacted where possible. Exit codes and
operation status are public-safe facts.

## References

- [NI LabVIEW Docker Containers](https://github.com/ni/labview-for-containers)
- [CreateComparisonReport Examples](https://github.com/ni/labview-for-containers/tree/main/examples/cicd-examples/helper-scripts/vidiff)
