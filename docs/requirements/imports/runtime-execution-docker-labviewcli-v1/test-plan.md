# Test Plan: Docker LabVIEWCLI Execution

Slice: `runtime-execution-docker-labviewcli-v1`

## Scope

This test plan covers the Docker LabVIEWCLI execution adapter using the
`nationalinstruments/labview:latest-linux` container image.

## Unit Tests

Unit tests verify the execution adapter logic using mocked Docker processes.
They run on standard CI infrastructure (`ubuntu-latest`).

### TEST-UNIT-DOCKEREXEC-001: Hardcoded Docker image

**Description:** Verify execution uses nationalinstruments/labview:latest-linux.

**Expected:** Docker run command includes exact image reference.

### TEST-UNIT-DOCKEREXEC-002: Docker run --rm command

**Description:** Verify Docker command includes run --rm flags.

**Expected:** Command starts with "docker run --rm".

### TEST-UNIT-DOCKEREXEC-003: Volume mount to /workspace

**Description:** Verify workspace is mounted to /workspace.

**Inputs:** Host workspace path "/home/user/project".

**Expected:** -v /home/user/project:/workspace in command.

### TEST-UNIT-DOCKEREXEC-004: VI paths mapped to container

**Description:** Verify host VI paths are mapped to container paths.

**Inputs:** Host paths outside mounted workspace.

**Expected:** Paths mapped relative to /workspace.

### TEST-UNIT-DOCKEREXEC-005: Headless flag included

**Description:** Verify -Headless flag in LabVIEWCLI command.

**Expected:** Command includes -Headless.

### TEST-UNIT-DOCKEREXEC-006: Execution captures stdout

**Description:** Verify stdout is captured from Docker process.

**Inputs:** Mock Docker process emitting stdout.

**Expected:** Outcome contains captured stdout.

### TEST-UNIT-DOCKEREXEC-007: Execution captures stderr

**Description:** Verify stderr is captured from Docker process.

**Inputs:** Mock Docker process emitting stderr.

**Expected:** Outcome contains captured stderr.

### TEST-UNIT-DOCKEREXEC-008: Execution captures exit code

**Description:** Verify Docker process exit code is captured.

**Inputs:** Mock Docker process exits with code 42.

**Expected:** Outcome contains exitCode: 42.

### TEST-UNIT-DOCKEREXEC-009: Exit code 0 maps to success

**Description:** Verify exit code 0 produces success status.

**Expected:** Outcome status is "success", success is true.

### TEST-UNIT-DOCKEREXEC-010: Non-zero exit code maps to failure

**Description:** Verify non-zero exit produces failure status.

**Expected:** Outcome status is "failure", success is false.

### TEST-UNIT-DOCKEREXEC-011: Default timeout is 600000ms

**Description:** Verify default timeout value for Docker.

**Expected:** Execution uses 600000ms timeout if not specified.

### TEST-UNIT-DOCKEREXEC-012: Custom timeout is respected

**Description:** Verify custom timeout value is used.

**Inputs:** Custom timeoutMs: 120000.

**Expected:** Execution uses specified timeout.

### TEST-UNIT-DOCKEREXEC-013: Timeout triggers container termination

**Description:** Verify container is terminated on timeout.

**Inputs:** Mock Docker process that does not exit.

**Expected:** docker kill called or process terminated.

## Integration Tests

Integration tests verify actual Docker execution. They require Docker
installed on the runner.

### TEST-INT-DOCKEREXEC-001: End-to-end Docker execution

**Description:** Execute CreateComparisonReport via Docker container.

**Prerequisites:**
- Docker available on runner
- `nationalinstruments/labview:latest-linux` image available
- Sample VI files in test fixtures

**Expected:** HTML diff report created at output path.

### TEST-INT-DOCKEREXEC-002: Exit code verification

**Description:** Verify real Docker execution returns exit code 0.

**Expected:** Outcome exitCode equals 0, success is true.

## Test Infrastructure

### Fixtures

- `tests/fixtures/sample-base.vi` — base VI for comparison
- `tests/fixtures/sample-changed.vi` — modified VI for comparison

### Runner Requirements

| Test Category | Runner | Gate |
|---------------|--------|------|
| Unit tests | ubuntu-latest | All PRs |
| Integration tests | runner with Docker | main branch |
