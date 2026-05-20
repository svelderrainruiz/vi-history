# Self-Hosted Runner Setup: Windows with LabVIEW

This guide documents the provisioning requirements for a self-hosted GitHub
Actions runner with LabVIEW installed. The runner enables integration tests
that require LabVIEWCLI execution.

## Runner Label

```
self-hosted-windows-labview
```

All workflows that require LabVIEW execution must specify this label in their
`runs-on` configuration.

## System Requirements

### Hardware

- Windows 10/11 or Windows Server 2019/2022
- 8 GB RAM minimum (16 GB recommended)
- 4 CPU cores minimum
- 50 GB available disk space

### Software Prerequisites

1. **LabVIEW 2026** — with LabVIEWCLI component installed
2. **GitHub Actions Runner** — latest version
3. **Node.js 22.x** — for test execution
4. **Git** — for repository checkout

## LabVIEW Installation

The runner requires LabVIEW 2026 with the LabVIEWCLI component. During
installation:

1. Select LabVIEW 2026
2. Ensure "LabVIEW CLI" is included in the installation
3. Note the installation path (typically `C:\Program Files\National Instruments\LabVIEW 2026`)

### Verify LabVIEWCLI

After installation, verify LabVIEWCLI is available:

```powershell
# Expected path on Windows x64
"C:\Program Files\National Instruments\LabVIEW 2026\LabVIEWCLI.exe" -Help
```

## Runner Registration

Register the runner with the repository:

1. Navigate to repository Settings → Actions → Runners
2. Click "New self-hosted runner"
3. Select Windows as the operating system
4. Follow the download and configuration instructions
5. Add the label `self-hosted-windows-labview` during configuration

### Configuration Command

```powershell
.\config.cmd --url https://github.com/svelderrainruiz/vi-history `
  --token <TOKEN> `
  --labels self-hosted-windows-labview `
  --name "windows-labview-runner-01"
```

## Runner Service Installation

Install the runner as a Windows service for persistent operation:

```powershell
.\svc.cmd install
.\svc.cmd start
```

## Security Considerations

- The runner has access to LabVIEW installation directories
- The runner executes arbitrary code from pull requests
- Repository settings should restrict runner access to trusted workflows only
- Consider using runner groups for additional isolation

## Blocked Scope

The following remain outside this configuration:

- Actual runner registration (requires repository admin access)
- LabVIEW license management
- Runtime execution code (separate feature slices)
- Docker execution (separate feature slice)

## Related Workflows

- `.github/workflows/integration-tests.yml` — LabVIEW-dependent tests
- `.github/workflows/spec-gates.yml` — standard CI (runs on ubuntu-latest)

## References

- [GitHub Actions Self-Hosted Runners](https://docs.github.com/en/actions/hosting-your-own-runners)
- [NI LabVIEW Docker Containers](https://github.com/ni/labview-for-containers)
