<!--
Sync Impact Report
Version change: 0.1.20 -> 0.1.21
Modified principles: imported slice registry adds host runtime observation source acquisition
Added sections: Authority Boundaries, Development Workflow, Governance
Removed sections: unresolved template placeholders
Templates requiring updates: pending after first implementation planning pass
Deferred items: none
-->

# VI History MIT Spec Kit Constitution

## Core Principles

### I. Clean-Room Requirements Authority

All product behavior MUST originate from imported requirements, public Spec Kit
artifacts, or new MIT-authored design work. Implementation source, private
evidence, release credentials, and local control-plane tooling from other
product lines MUST NOT enter this repository.

### II. Spec Kit Before Implementation

Every feature MUST have a locked `spec.md`, `plan.md`, and `tasks.md` before
runnable extension implementation begins. Clarification and analysis findings
MUST be resolved or explicitly recorded before implementation tasks are started.

### III. Immutable Imported Requirement IDs

Imported requirement IDs MUST preserve their source semantics. If this
authority needs divergent behavior, it MUST add local MIT requirements instead
of redefining imported IDs.

### IV. Public Evidence Without Private Leakage

Repository artifacts MUST be public-safe. Import packets, specs, plans, tasks,
issues, and validation scripts MUST exclude private filesystem paths, local
skill names, credential locations, private evidence, and release-control
instructions.

### V. VSIX Package Artifact Only

The extension identity MAY be modeled for compatibility, and local/CI VSIX
artifact packaging MAY be admitted by a named IAU. Marketplace publication,
release tokens, `vsce publish`, Open VSX publication, Marketplace workflows,
release uploads, and package registry publication are out of scope for this
repository unless a future authority explicitly moves that work outside this
repo's current scope.

## Authority Boundaries

This repository is the MIT implementation authority for package `vi-history`,
display name `VI History`, publisher `svelderrainruiz`, extension ID
`svelderrainruiz.vi-history`, and version `0.1.0`.

The imported slices are:

- `runtime-contract-host-provider-v1`, with its import packet under
  `docs/requirements/imports/runtime-contract-host-provider-v1/` and Spec Kit
  feature under `.specify/specs/runtime-contract-host-provider-v1/`.
- `installed-user-observation-public-surface-v1`, with its import packet under
  `docs/requirements/imports/installed-user-observation-public-surface-v1/`
  and Spec Kit feature under
  `.specify/specs/installed-user-observation-public-surface-v1/`.
- `command-activation-surface-v1`, with its import packet under
  `docs/requirements/imports/command-activation-surface-v1/` and Spec Kit
  feature under `.specify/specs/command-activation-surface-v1/`.
- `command-handler-entrypoint-shell-v1`, with its import packet under
  `docs/requirements/imports/command-handler-entrypoint-shell-v1/` and Spec Kit
  feature under `.specify/specs/command-handler-entrypoint-shell-v1/`.
- `installed-user-documentation-command-v1`, with its import packet under
  `docs/requirements/imports/installed-user-documentation-command-v1/` and
  Spec Kit feature under
  `.specify/specs/installed-user-documentation-command-v1/`.
- `runtime-settings-cli-bootstrap-v1`, with its import packet under
  `docs/requirements/imports/runtime-settings-cli-bootstrap-v1/` and Spec Kit
  feature under `.specify/specs/runtime-settings-cli-bootstrap-v1/`.
- `runtime-settings-cli-settings-write-v1`, with its import packet under
  `docs/requirements/imports/runtime-settings-cli-settings-write-v1/` and Spec
  Kit feature under `.specify/specs/runtime-settings-cli-settings-write-v1/`.
- `runtime-settings-cli-validation-readback-v1`, with its import packet under
  `docs/requirements/imports/runtime-settings-cli-validation-readback-v1/` and
  Spec Kit feature under
  `.specify/specs/runtime-settings-cli-validation-readback-v1/`.
- `runtime-settings-cli-validation-proof-v1`, with its import packet under
  `docs/requirements/imports/runtime-settings-cli-validation-proof-v1/` and
  Spec Kit feature under
  `.specify/specs/runtime-settings-cli-validation-proof-v1/`.
- `runtime-settings-cli-interactive-selection-v1`, with its import packet
  under
  `docs/requirements/imports/runtime-settings-cli-interactive-selection-v1/`
  and Spec Kit feature under
  `.specify/specs/runtime-settings-cli-interactive-selection-v1/`.
- `runtime-settings-cli-terminal-entrypoint-v1`, with its import packet under
  `docs/requirements/imports/runtime-settings-cli-terminal-entrypoint-v1/`
  and Spec Kit feature under
  `.specify/specs/runtime-settings-cli-terminal-entrypoint-v1/`.
- `runtime-settings-cli-terminal-prompt-loop-v1`, with its import packet
  under
  `docs/requirements/imports/runtime-settings-cli-terminal-prompt-loop-v1/`
  and Spec Kit feature under
  `.specify/specs/runtime-settings-cli-terminal-prompt-loop-v1/`.
- `runtime-settings-cli-terminal-io-adapter-v1`, with its import packet under
  `docs/requirements/imports/runtime-settings-cli-terminal-io-adapter-v1/` and
  Spec Kit feature under
  `.specify/specs/runtime-settings-cli-terminal-io-adapter-v1/`.
- `runtime-settings-cli-validation-proof-out-v1`, with its import packet under
  `docs/requirements/imports/runtime-settings-cli-validation-proof-out-v1/`
  and Spec Kit feature under
  `.specify/specs/runtime-settings-cli-validation-proof-out-v1/`.
- `runtime-settings-cli-validation-proof-out-file-emission-v1`, with its
  import packet under
  `docs/requirements/imports/runtime-settings-cli-validation-proof-out-file-emission-v1/`
  and Spec Kit feature under
  `.specify/specs/runtime-settings-cli-validation-proof-out-file-emission-v1/`.
- `runtime-settings-cli-validation-runtime-outcome-v1`, with its import packet
  under
  `docs/requirements/imports/runtime-settings-cli-validation-runtime-outcome-v1/`
  and Spec Kit feature under
  `.specify/specs/runtime-settings-cli-validation-runtime-outcome-v1/`.
- `runtime-settings-cli-validation-command-contract-v1`, with its import
  packet under
  `docs/requirements/imports/runtime-settings-cli-validation-command-contract-v1/`
  and Spec Kit feature under
  `.specify/specs/runtime-settings-cli-validation-command-contract-v1/`.
- `runtime-settings-cli-validation-plan-only-v1`, with its import packet under
  `docs/requirements/imports/runtime-settings-cli-validation-plan-only-v1/`
  and Spec Kit feature under
  `.specify/specs/runtime-settings-cli-validation-plan-only-v1/`.
- `runtime-settings-cli-validation-host-runtime-preflight-v1`, with its import
  packet under
  `docs/requirements/imports/runtime-settings-cli-validation-host-runtime-preflight-v1/`
  and Spec Kit feature under
  `.specify/specs/runtime-settings-cli-validation-host-runtime-preflight-v1/`.
- `runtime-settings-cli-validation-host-preflight-command-composition-v1`, with
  its import packet under
  `docs/requirements/imports/runtime-settings-cli-validation-host-preflight-command-composition-v1/`
  and Spec Kit feature under
  `.specify/specs/runtime-settings-cli-validation-host-preflight-command-composition-v1/`.
- `runtime-settings-cli-validation-host-runtime-discovery-v1`, with its import
  packet under
  `docs/requirements/imports/runtime-settings-cli-validation-host-runtime-discovery-v1/`
  and Spec Kit feature under
  `.specify/specs/runtime-settings-cli-validation-host-runtime-discovery-v1/`.
- `runtime-settings-cli-validation-host-runtime-observation-adapter-v1`, with
  its import packet under
  `docs/requirements/imports/runtime-settings-cli-validation-host-runtime-observation-adapter-v1/`
  and Spec Kit feature under
  `.specify/specs/runtime-settings-cli-validation-host-runtime-observation-adapter-v1/`.
- `runtime-settings-cli-validation-host-runtime-observation-source-adapter-v1`,
  with its import packet under
  `docs/requirements/imports/runtime-settings-cli-validation-host-runtime-observation-source-adapter-v1/`
  and Spec Kit feature under
  `.specify/specs/runtime-settings-cli-validation-host-runtime-observation-source-adapter-v1/`.
- `runtime-settings-cli-validation-host-runtime-observation-source-acquisition-v1`,
  with its import packet under
  `docs/requirements/imports/runtime-settings-cli-validation-host-runtime-observation-source-acquisition-v1/`
  and Spec Kit feature under
  `.specify/specs/runtime-settings-cli-validation-host-runtime-observation-source-acquisition-v1/`.
- `runtime-settings-cli-validation-host-runtime-observation-native-source-acquisition-v1`,
  with its import packet under
  `docs/requirements/imports/runtime-settings-cli-validation-host-runtime-observation-native-source-acquisition-v1/`
  and Spec Kit feature under
  `.specify/specs/runtime-settings-cli-validation-host-runtime-observation-native-source-acquisition-v1/`.
- `extension-vsix-packaging-artifact-v1`, with its import packet under
  `docs/requirements/imports/extension-vsix-packaging-artifact-v1/` and Spec
  Kit feature under `.specify/specs/extension-vsix-packaging-artifact-v1/`.

The active pinned Spec Kit feature is recorded in `.specify/feature.json`.

## Development Workflow

Work branches target `develop`. `main` receives promoted baselines after
validation is green. Future feature work SHOULD use generated Spec Kit skills
and scripts for constitution, specification, clarification, planning, tasking,
analysis, and implementation flow.

## Governance

This constitution governs repository-local work. Amendments require a versioned
change, a short rationale, and validation that affected Spec Kit templates and
repository guidance remain consistent.

**Version**: 0.1.22 | **Ratified**: 2026-05-17 | **Last Amended**: 2026-05-20
