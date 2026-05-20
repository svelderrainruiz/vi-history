# Test Plan: Host-Native LabVIEWCLI Execution

Slice: `runtime-execution-host-native-labviewcli-v1`

## Scope

This test plan covers the host-native LabVIEWCLI execution adapter for
Windows systems with LabVIEW installed.

## Unit Tests

Unit tests verify the execution adapter logic using mocked child processes.
They run on standard CI infrastructure (`ubuntu-latest`).

### TEST-UNIT-HOSTEXEC-001: Process spawn uses executable from command facts

**Description:** Verify execution uses the executable path from command facts.

**Inputs:** Mock command facts with custom executable path.

**Expected:** spawn() called with specified executable.

### TEST-UNIT-HOSTEXEC-002: Process spawn passes arguments

**Description:** Verify all arguments from command facts are passed to spawn.

**Expected:** spawn() called with arguments array from command facts.

### TEST-UNIT-HOSTEXEC-003: Execution captures stdout

**Description:** Verify stdout stream data is captured.

**Inputs:** Mock process that emits stdout data.

**Expected:** Outcome contains captured stdout.

### TEST-UNIT-HOSTEXEC-004: Execution captures stderr

**Description:** Verify stderr stream data is captured.

**Inputs:** Mock process that emits stderr data.

**Expected:** Outcome contains captured stderr.

### TEST-UNIT-HOSTEXEC-005: Execution captures exit code

**Description:** Verify process exit code is captured.

**Inputs:** Mock process that exits with code 42.

**Expected:** Outcome contains exitCode: 42.

### TEST-UNIT-HOSTEXEC-006: Exit code 0 maps to success

**Description:** Verify exit code 0 produces success status.

**Expected:** Outcome status is "success", success is true.

### TEST-UNIT-HOSTEXEC-007: Non-zero exit code maps to failure

**Description:** Verify non-zero exit produces failure status.

**Expected:** Outcome status is "failure", success is false.

### TEST-UNIT-HOSTEXEC-008: Default timeout is 300000ms

**Description:** Verify default timeout value.

**Expected:** Execution uses 300000ms timeout if not specified.

### TEST-UNIT-HOSTEXEC-009: Custom timeout is respected

**Description:** Verify custom timeout value is used.

**Inputs:** Custom timeoutMs: 60000.

**Expected:** Execution uses specified timeout.

### TEST-UNIT-HOSTEXEC-010: Timeout triggers process termination

**Description:** Verify process is terminated on timeout.

**Inputs:** Mock process that does not exit.

**Expected:** Process receives SIGTERM, then SIGKILL if needed.

### TEST-UNIT-HOSTEXEC-011: Timeout returns partial output

**Description:** Verify timeout outcome includes partial output.

**Inputs:** Mock process emitting data before timeout.

**Expected:** Outcome contains partial stdout/stderr.

### TEST-UNIT-HOSTEXEC-012: Private paths redacted in stdout

**Description:** Verify private user paths are redacted.

**Inputs:** stdout containing "C:\\Users\\johndoe\\file.vi".

**Expected:** Output contains "[REDACTED]" instead of username.

### TEST-UNIT-HOSTEXEC-013: Private paths redacted in stderr

**Description:** Verify private paths redacted in stderr too.

**Inputs:** stderr containing private paths.

**Expected:** Paths redacted in outcome.

## Integration Tests

Integration tests verify actual LabVIEWCLI execution. They require the
`self-hosted-windows-labview` runner.

### TEST-INT-HOSTEXEC-001: End-to-end LabVIEWCLI execution

**Description:** Execute CreateComparisonReport on actual LabVIEW.

**Prerequisites:**
- `self-hosted-windows-labview` runner
- Sample VI files in test fixtures

**Expected:** HTML diff report created at output path.

### TEST-INT-HOSTEXEC-002: Exit code verification

**Description:** Verify real execution returns exit code 0.

**Expected:** Outcome exitCode equals 0, success is true.

## Test Infrastructure

### Fixtures

- `tests/fixtures/sample-base.vi` — base VI for comparison
- `tests/fixtures/sample-changed.vi` — modified VI for comparison

### Runner Requirements

| Test Category | Runner | Gate |
|---------------|--------|------|
| Unit tests | ubuntu-latest | All PRs |
| Integration tests | self-hosted-windows-labview | main branch |
