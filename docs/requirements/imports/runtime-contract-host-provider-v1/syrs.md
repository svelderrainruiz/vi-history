# Imported System Requirements Slice: Runtime Contract Host Provider

## Document Control

- Slice ID: `runtime-contract-host-provider-v1`
- Source baseline: `v1.3.16`
- Target feature: `runtime-contract-host-provider-v1`
- Import status: public-safe requirements core

## System Requirements

| ID | Requirement | Rationale | Fit Criterion | Verification |
| --- | --- | --- | --- | --- |
| VHS-SYS-REQ-004 | The system shall support Windows installed-user compare workflows with host-native LabVIEWCLI as the default runtime provider. | Installed users should rely on local LabVIEW rather than Docker by default. | Product and requirements surfaces state that host-native LabVIEWCLI is the default installed-user compare provider on Windows. | Documentation review and static inspection |
| VHS-SYS-REQ-005 | The system shall support a bounded expert Docker compare provider selected explicitly through the generated settings CLI. | Expert Docker use remains valid, but it is not the default installed-user path. | Product and requirements surfaces state that Docker is expert-selected through the generated CLI instead of implicit default behavior. | Documentation review and static inspection |
| VHS-SYS-REQ-006 | The system shall require compare-runtime requests to retain explicit provider, LabVIEW version, and LabVIEW bitness facts before execution starts. | Deterministic runtime attribution is required across host-native and Docker paths. | Governing product and requirements surfaces state that provider, version, and bitness are explicit runtime facts. | Documentation review |
| VHS-SYS-REQ-007 | The system shall fail closed with retained runtime facts when an explicitly selected runtime bundle is unsupported or unavailable. | Silent fallback would make provider and runtime selection untrustworthy. | Unsupported bundles produce corrective guidance and retained runtime failure evidence instead of silent fallback. | Documentation review and static inspection |
| VHS-SYS-REQ-008 | The system shall provide an explicit compare action after commit selection instead of starting compare automatically or hiding execution behind runtime preflight certainty. | Users need to confirm the chosen commit pair and expose local runtime failures directly. | Compare opens from an explicit action showing selected/base commit, provider, version, and bitness; runtime failure is reported through the compare path. | Documentation review and static inspection |

## Import Notes

These IDs are immutable baseline references. Public-local requirements may be
added for divergent behavior, but imported IDs must keep their source meaning.
