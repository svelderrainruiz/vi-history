# SyRS Import: Docker LabVIEWCLI Execution

Slice: `runtime-execution-docker-labviewcli-v1`

This public MIT import admits the Docker LabVIEWCLI execution adapter.
It enables invoking LabVIEWCLI inside a Docker container for
CreateComparisonReport operations using the official NI LabVIEW image.

## Imported System Requirements

### Docker Container Execution

- `VHS-REQ-630`: Extension SHALL spawn Docker containers using
  `nationalinstruments/labview:latest-linux` image for LabVIEWCLI operations.
  The image is hardcoded for single-family support.

- `VHS-REQ-631`: Extension SHALL mount workspace directories as container
  volumes. Host paths SHALL be mapped to `/workspace` inside the container.

- `VHS-REQ-632`: Extension SHALL use `-Headless` flag for all LabVIEWCLI
  operations inside Docker containers. Headless mode is required for
  non-GUI container execution.

- `VHS-REQ-633`: Extension SHALL capture Docker container stdout and stderr
  as diagnostic output. Stream capture SHALL include LabVIEWCLI output.

- `VHS-REQ-634`: Extension SHALL capture Docker container exit code as
  execution outcome. Exit code 0 indicates success; non-zero indicates failure.

- `VHS-REQ-635`: Extension SHALL support configurable execution timeout for
  Docker operations. Default timeout SHALL be 600 seconds (10 minutes) to
  account for container startup overhead.

## System Boundary

The Docker execution adapter may:
- Spawn Docker containers with the hardcoded NI LabVIEW image
- Mount workspace volumes
- Execute LabVIEWCLI with -Headless flag
- Capture stdout, stderr, and exit code
- Terminate container on timeout

The Docker execution adapter must not:
- Build or modify Docker images
- Use images other than `nationalinstruments/labview:latest-linux`
- Execute arbitrary commands beyond LabVIEWCLI operations
- Store raw private paths in outcome facts

## Docker Availability

The execution adapter assumes Docker is installed and available on the host.
Docker availability checking is out of scope for this slice.
