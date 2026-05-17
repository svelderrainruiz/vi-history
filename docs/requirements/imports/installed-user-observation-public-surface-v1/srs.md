# Imported Software Requirements Slice: Installed-User Observation Public Surface

## Document Control

- Slice ID: `installed-user-observation-public-surface-v1`
- Source baseline: `v1.3.16`
- Target feature: `installed-user-observation-public-surface-v1`
- Import status: public-safe requirements core

## Software Requirements

| ID | Requirement | Rationale | Fit Criterion | Verification |
| --- | --- | --- | --- | --- |
| VHS-REQ-595 | The post-publication installed-user acceptance lane shall retain a recurring observation cadence after the one-time campaign closes, including event triggers, a no-later-than review date while public intake remains open, observed/deferred/blocked fact buckets, routing from repeated confusion into user docs or first-time video-plan work, a sustainment-default SemVer recommendation, and a separate boundary for Windows Docker Desktop Windows-container proof. | A one-off campaign is not enough after publication; future sessions need a repeatable way to observe first-time installed-user friction without confusing publication proof, public feedback, video planning, and SemVer release decisions. | Public artifacts retain the recurring cadence, public-intake readback, no-mutation boundary, fact buckets, routing rules, and Windows Docker Desktop gate boundary. | Spec review, task review, public redaction scan, and future contract tests if an IAU is admitted |

## Public Observation Vocabulary

| Term | Meaning |
| --- | --- |
| `observed` | Retained public-safe evidence from feedback, clean install observations, validation receipts, compare receipts, or user review notes. |
| `deferred` | Planned observations that have not run yet and do not block the current public baseline. |
| `blocked` | Observations that cannot proceed until a missing host, missing proof lane, or separate admitted gate is available. |

## Import Notes

This slice imports a public observation requirement only. It does not admit
runnable implementation, command execution, Docker orchestration, proof
promotion, or Marketplace publication.
