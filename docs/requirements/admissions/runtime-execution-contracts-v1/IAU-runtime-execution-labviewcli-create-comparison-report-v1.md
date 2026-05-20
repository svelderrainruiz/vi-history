# IAU: LabVIEWCLI CreateComparisonReport Execution

IAU ID: `IAU-runtime-execution-labviewcli-create-comparison-report-v1`

Slice: `runtime-execution-contracts-v1`

State: admitted

## Scope

This IAU implements pure execution plan facts for LabVIEWCLI
CreateComparisonReport operations. It produces command facts consumable by
execution adapters without performing actual execution.

## Contract

`createComparisonReportCommand(input = {})` accepts:

```typescript
interface CreateComparisonReportInput {
  viPath1: string;           // Path to base VI file
  viPath2: string;           // Path to comparison VI file  
  outputPath: string;        // Path for HTML output report
  executionContext: 'host-native' | 'docker';
  
  // For host-native context
  runtimeDiscoveryFacts?: HostRuntimeDiscoveryFacts;
  
  // For docker context
  workspacePath?: string;    // Host path to mount as /workspace
}
```

Returns:

```typescript
interface ComparisonReportCommandFacts {
  executable: string;        // LabVIEWCLI.exe or docker
  arguments: string[];       // Command line arguments
  workingDirectory: string;
  executionContext: 'host-native' | 'docker';
  
  // For docker context
  volumeMounts?: Array<{ host: string; container: string }>;
  dockerImage?: string;      // nationalinstruments/labview:latest-linux
}
```

## Test Scope (T009-T016)

- TEST-UNIT-EXEC-001 through TEST-UNIT-EXEC-013 per test-plan.md
- Pure facts contract testing without actual execution
- Blocked side-effect facts for execution adapters

## Implementation Notes

### Host-Native Command Format

```
LabVIEWCLI.exe -OperationName CreateComparisonReport \
  -VIPath1 "<path1>" \
  -VIPath2 "<path2>" \
  -OutputPath "<output>" \
  -ReportType html
```

### Docker Command Format

```
docker run --rm \
  -v <workspace>:/workspace \
  nationalinstruments/labview:latest-linux \
  LabVIEWCLI -OperationName CreateComparisonReport \
    -VIPath1 "<container-path1>" \
    -VIPath2 "<container-path2>" \
    -OutputPath "<container-output>" \
    -ReportType html \
    -Headless
```

## Blocked Scope

Actual execution, stdout/stderr capture, exit code handling, timeout
management, and error recovery are implemented by execution adapter IAUs in
separate slices.
