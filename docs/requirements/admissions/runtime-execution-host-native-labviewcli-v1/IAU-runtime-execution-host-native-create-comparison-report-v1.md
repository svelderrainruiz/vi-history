# IAU: Host-Native LabVIEWCLI CreateComparisonReport Execution

IAU ID: `IAU-runtime-execution-host-native-create-comparison-report-v1`

Slice: `runtime-execution-host-native-labviewcli-v1`

State: admitted

## Scope

This IAU implements the host-native LabVIEWCLI execution adapter. It spawns
LabVIEWCLI.exe as a child process, captures output streams and exit code,
and returns standardized outcome facts.

## Contract

`executeHostNativeComparisonReport(input = {})` accepts:

```typescript
interface ExecuteHostNativeInput {
  commandFacts: ComparisonReportCommandFacts;  // From createHostNativeComparisonReportCommand
  timeoutMs?: number;                           // Default: 300000 (5 minutes)
}
```

Returns:

```typescript
interface HostNativeExecutionOutcome {
  kind: "host-native-execution-outcome";
  status: "success" | "failure" | "timeout";
  exitCode: number;
  success: boolean;
  diagnostics: {
    stdout: string;  // Redacted
    stderr: string;  // Redacted
    durationMs: number;
  };
  outputPath: string;
  timedOut: boolean;
  requirementIds: string[];
}
```

## Implementation Notes

### Process Spawning

```javascript
import { spawn } from "node:child_process";

const process = spawn(commandFacts.executable, commandFacts.arguments, {
  cwd: commandFacts.workingDirectory,
  shell: false
});
```

### Stream Capture

```javascript
let stdout = "";
let stderr = "";

process.stdout.on("data", (data) => { stdout += data.toString(); });
process.stderr.on("data", (data) => { stderr += data.toString(); });
```

### Timeout Handling

```javascript
const timeout = setTimeout(() => {
  process.kill("SIGTERM");
  setTimeout(() => {
    if (!process.killed) process.kill("SIGKILL");
  }, 5000);
}, timeoutMs);
```

## Test Scope (T009-T016)

- TEST-UNIT-HOSTEXEC-001 through TEST-UNIT-HOSTEXEC-013 per test-plan.md
- Mocked child process for unit tests
- Integration tests require `self-hosted-windows-labview` runner

## Blocked Scope

Docker execution, LabVIEW license validation, interactive sessions, and
Marketplace publication remain outside this IAU.
