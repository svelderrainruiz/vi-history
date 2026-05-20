# Test Plan: Runtime Execution Contracts

Slice: `runtime-execution-contracts-v1`

## Scope

This test plan covers LabVIEWCLI CreateComparisonReport execution for both
host-native Windows and Docker Linux environments.

## Unit Tests

Unit tests verify pure contract behavior without actual LabVIEWCLI execution.
They run on standard CI infrastructure (`ubuntu-latest`).

### TEST-UNIT-EXEC-001: CreateComparisonReport command assembly

**Description:** Verify that `createComparisonReportCommand()` produces valid
LabVIEWCLI invocation facts.

**Inputs:**
- VI path 1: `/path/to/base.vi`
- VI path 2: `/path/to/compare.vi`
- Output path: `/path/to/output.html`

**Expected:** Command facts include OperationName and required arguments.

### TEST-UNIT-EXEC-002: Required arguments presence

**Description:** Verify CreateComparisonReport includes -VIPath1, -VIPath2,
and -OutputPath arguments.

**Expected:** All three path arguments present in command facts.

### TEST-UNIT-EXEC-003: Host-native LabVIEWCLI path derivation

**Description:** Verify host execution derives LabVIEWCLI.exe path from
runtime discovery facts.

**Inputs:** Mock runtime discovery facts with LabVIEW 2026 installation.

**Expected:** LabVIEWCLI.exe path derived from installation directory.

### TEST-UNIT-EXEC-004: Docker image hardcoded

**Description:** Verify Docker execution uses hardcoded
`nationalinstruments/labview:latest-linux` image.

**Expected:** Docker run command includes exact image reference.

### TEST-UNIT-EXEC-005: Argument formatting and escaping

**Description:** Verify paths with spaces and special characters are properly
formatted.

**Inputs:** Paths containing spaces, quotes, and special characters.

**Expected:** Arguments properly quoted/escaped for target platform.

### TEST-UNIT-EXEC-006: ReportType html flag

**Description:** Verify CreateComparisonReport includes -ReportType html.

**Expected:** Flag present in command arguments.

### TEST-UNIT-EXEC-007: Docker Headless flag

**Description:** Verify Docker execution includes -Headless flag.

**Expected:** -Headless flag present for Docker execution context.

### TEST-UNIT-EXEC-008: Execution plan facts structure

**Description:** Verify execution plan includes executable, arguments,
working directory, and context.

**Expected:** All required fact fields populated.

### TEST-UNIT-EXEC-009: Docker volume mount mapping

**Description:** Verify workspace paths are mounted to /workspace.

**Inputs:** Host workspace path `/home/user/project`.

**Expected:** Docker `-v /home/user/project:/workspace` mount present.

### TEST-UNIT-EXEC-010: Docker image family constraint

**Description:** Verify image family is hardcoded to latest-linux.

**Expected:** No image selection logic; hardcoded value only.

### TEST-UNIT-EXEC-011: Host LabVIEWCLI from native acquisition

**Description:** Verify LabVIEWCLI path composed from native source
acquisition facts.

**Inputs:** Native acquisition facts with Windows LabVIEW 2026 x64.

**Expected:** LabVIEWCLI.exe path in `C:\Program Files\National Instruments\LabVIEW 2026`.

### TEST-UNIT-EXEC-012: stdout/stderr capture

**Description:** Verify execution adapter captures output streams.

**Expected:** Diagnostic facts include stdout and stderr content.

### TEST-UNIT-EXEC-013: Exit code capture

**Description:** Verify execution adapter returns exit code fact.

**Expected:** Outcome facts include numeric exit code.

## Integration Tests

Integration tests verify actual LabVIEWCLI execution. They require the
`self-hosted-windows-labview` runner and are gated to `main` branch.

### TEST-INT-EXEC-001: Host CreateComparisonReport end-to-end

**Description:** Execute CreateComparisonReport on actual LabVIEW installation.

**Prerequisites:** 
- `self-hosted-windows-labview` runner
- Sample VI files in test fixtures

**Expected:** HTML diff report created at specified output path.

### TEST-INT-EXEC-002: Docker CreateComparisonReport end-to-end

**Description:** Execute CreateComparisonReport via Docker container.

**Prerequisites:**
- Docker available on runner
- `nationalinstruments/labview:latest-linux` image pulled
- Sample VI files in test fixtures

**Expected:** HTML diff report created at specified output path.

### TEST-INT-EXEC-003: stdout capture verification

**Description:** Verify actual LabVIEWCLI output is captured.

**Expected:** stdout contains LabVIEWCLI operation messages.

### TEST-INT-EXEC-004: Exit code verification

**Description:** Verify exit code 0 on successful comparison.

**Expected:** Exit code fact equals 0.

## Test Infrastructure

### Fixtures

- `tests/fixtures/sample-base.vi` — base VI for comparison
- `tests/fixtures/sample-changed.vi` — modified VI for comparison

### Runner Requirements

| Test Category | Runner | Gate |
|---------------|--------|------|
| Unit tests | ubuntu-latest | All PRs |
| Integration tests | self-hosted-windows-labview | main branch |

## Blocked Scope

- Multi-family Docker image testing
- LabVIEW license validation tests
- Marketplace publication testing
