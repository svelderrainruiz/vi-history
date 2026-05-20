# Test Plan: Runtime Settings CLI Validation Host Runtime Observation Source Adapter

| Test ID | Requirement IDs | Purpose |
| --- | --- | --- |
| TEST-UNIT-RSHOSTSOURCE-001 | VHS-REQ-095; VHS-REQ-096 | Prove selected host facts drive bounded public-safe source adaptation for Windows registry-view and Linux documented-root facts without arbitrary filesystem walking. |
| TEST-UNIT-RSHOSTSOURCE-002 | VHS-REQ-095; VHS-REQ-550 | Prove Windows registry-view source facts for LabVIEW 2026 x64 plus canonical installed x86 LabVIEWCLI become sanitized observation dependency facts without raw registry output or private path disclosure. |
| TEST-UNIT-RSHOSTSOURCE-003 | VHS-REQ-096 | Prove Linux documented-root source facts normalize deterministically and macOS source adaptation remains unavailable. |
| TEST-UNIT-RSHOSTSOURCE-004 | VHS-REQ-532; VHS-REQ-546; VHS-REQ-550 | Prove source adapter output composes into observation, discovery, preflight, runtime outcome, readback, proof artifact, proof-out adapter, validation command, and `validate-plan-only` contracts without output-shape redesign. |
| TEST-UNIT-RSHOSTSOURCE-005 | VHS-REQ-095; VHS-REQ-546 | Prove missing, unsupported, malformed, ambiguous, incompatible, contaminated, raw registry, private path, execution, Docker, file-write, publication, release, Marketplace, and source-copying behavior fail closed or remain blocked. |

Run:

```bash
npm test
npm run check
git diff --check
node scripts/validate-spec-kit-imports.mjs
node scripts/check-clean-room-boundary.mjs
public redaction scan over this slice's public artifacts
bridge artifact validation for runtime-settings-cli-validation-host-runtime-observation-source-adapter-v1
```

This plan does not admit runtime validation execution, compare execution,
LabVIEWCLI execution, Docker command execution or orchestration, raw terminal
process wiring, live proof, proof-out expansion, file writes, VSIX packaging
changes, package/bin publication, launcher/profile mutation, Marketplace work,
release automation, or source copying.
