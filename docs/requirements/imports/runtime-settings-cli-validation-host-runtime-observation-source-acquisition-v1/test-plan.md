# Test Plan: Runtime Settings CLI Validation Host Runtime Observation Source Acquisition

| Test ID | Requirement IDs | Public Test Intent |
| --- | --- | --- |
| TEST-UNIT-RSHOSTACQ-001 | VHS-REQ-095; VHS-REQ-532 | Prove selected host facts drive bounded native source acquisition without arbitrary filesystem walking or execution. |
| TEST-UNIT-RSHOSTACQ-002 | VHS-REQ-095; VHS-REQ-550 | Prove bounded Windows registry-view acquisition dependency facts reduce to sanitized source facts for LabVIEW 2026 x64 plus canonical installed x86 LabVIEWCLI without raw registry output or private path disclosure. |
| TEST-UNIT-RSHOSTACQ-003 | VHS-REQ-096 | Prove bounded Linux documented-root acquisition dependency facts reduce to sanitized documented-root source facts and macOS source acquisition remains deterministically unavailable. |
| TEST-UNIT-RSHOSTACQ-004 | VHS-REQ-532; VHS-REQ-546; VHS-REQ-550 | Prove source acquisition output composes into source adapter, observation, discovery, preflight, runtime outcome, readback, proof artifact, proof-out adapter, validation command, and `validate-plan-only` contracts without output-shape redesign. |
| TEST-UNIT-RSHOSTACQ-005 | VHS-REQ-095; VHS-REQ-546 | Prove missing, unsupported, malformed, ambiguous, incompatible, contaminated, raw registry, private path, dependency error, execution, Docker, file-write, publication, release, Marketplace, and source-copying behavior fail closed or remain blocked. |
| TEST-UNIT-RSHOSTACQ-006 | VHS-REQ-550 | Prove Windows host 2026 x64 acquisition facts preserve the governed mixed-bitness source fact path into the existing preflight chain. |

## Blocked Test Classes

This plan does not admit runtime validation execution, compare execution,
LabVIEWCLI execution, Docker command execution or orchestration, raw terminal
process wiring, live proof, proof-out expansion, file writes from source,
observation, discovery, or preflight adapters, VSIX packaging changes,
Marketplace publication, release automation, launcher/profile mutation, or
source copying.
