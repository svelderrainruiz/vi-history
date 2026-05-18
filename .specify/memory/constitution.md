<!--
Sync Impact Report
Version change: template -> 0.1.0
Modified principles: imported slice registry adds command activation surface
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

### V. Marketplace Disabled Until Governed

The extension identity MAY be modeled for future compatibility, but package
publishing and Marketplace release work MUST remain disabled. Issue #5 records
the current posture: this repository stays MIT, public, and
Marketplace-disabled. A later ADR is required before enabling that channel.

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

**Version**: 0.1.1 | **Ratified**: 2026-05-17 | **Last Amended**: 2026-05-18
