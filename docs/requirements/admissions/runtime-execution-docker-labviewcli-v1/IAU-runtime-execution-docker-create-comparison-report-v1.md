# IAU: Docker LabVIEWCLI CreateComparisonReport Execution

IAU ID: `IAU-runtime-execution-docker-create-comparison-report-v1`

Slice: `runtime-execution-docker-labviewcli-v1`

State: admitted

## Scope

This IAU implements the Docker LabVIEWCLI execution adapter. It spawns
Docker containers using the hardcoded `nationalinstruments/labview:latest-linux`
image, captures output streams and exit code, and returns standardized
outcome facts.

## Contract

`executeDockerComparisonReport(input = {})` accepts:

```typescript
interface ExecuteDockerInput {
  commandFacts: ComparisonReportCommandFacts;  // From createDockerComparisonReportCommand
  timeoutMs?: number;                           // Default: 600000 (10 minutes)
}
```

Returns:

```typescript
interface DockerExecutionOutcome {
  kind: "docker-execution-outcome";
  status: "success" | "failure" | "timeout";
  exitCode: number;
  success: boolean;
  dockerImage: "nationalinstruments/labview:latest-linux";
  headless: true;
  diagnostics: {
    stdout: string;
    stderr: string;
    durationMs: number;
  };
  outputPath: string;
  timedOut: boolean;
  requirementIds: string[];
}
```

## Implementation Notes

### Docker Command Construction

```javascript
const args = [
  "run", "--rm",
  "-v", `${workspacePath}:/workspace`,
  "nationalinstruments/labview:latest-linux",
  "LabVIEWCLI",
  "-OperationName", "CreateComparisonReport",
  "-VIPath1", containerViPath1,
  "-VIPath2", containerViPath2,
  "-OutputPath", containerOutputPath,
  "-ReportType", "html",
  "-Headless"
];

const process = spawn("docker", args);
```

### Path Mapping

Host paths are mapped to container `/workspace`:
```
/home/user/project/base.vi -> /workspace/base.vi
```

## Test Scope (T009-T016)

- TEST-UNIT-DOCKEREXEC-001 through TEST-UNIT-DOCKEREXEC-013 per test-plan.md
- Mocked Docker process for unit tests
- Integration tests require Docker available on runner

## Blocked Scope

Docker image building, multi-family image selection, Docker availability
checking, container orchestration, and Marketplace publication remain
outside this IAU.
