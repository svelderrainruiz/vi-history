export const INSTALLED_USER_OBSERVATION_REQUIREMENTS = Object.freeze({
  observationModel: Object.freeze(["VHS-REQ-595"])
});

export const OBSERVATION_TRIGGER_TYPES = Object.freeze([
  "marketplace-publication-closed",
  "public-feedback",
  "repeated-confusion",
  "video-planning-evidence",
  "semver-candidate-opening",
  "no-later-than-review"
]);

export const OBSERVATION_FACT_BUCKETS = Object.freeze([
  "observed",
  "deferred",
  "blocked"
]);

export const OBSERVATION_SOURCE_TYPES = Object.freeze([
  "public-feedback",
  "validation-receipt",
  "compare-receipt",
  "user-review-note",
  "planned-observation",
  "host-dependency",
  "proof-gate",
  "release-change",
  "repeated-confusion",
  "video-planning-evidence",
  "semver-candidate"
]);

export const ROUTING_TARGETS = Object.freeze([
  "user-documentation",
  "bundled-documentation",
  "video-planning-candidate",
  "future-issue",
  "proof-gate",
  "none"
]);

const TRIGGERS = new Set(OBSERVATION_TRIGGER_TYPES);
const FACT_BUCKETS = new Set(OBSERVATION_FACT_BUCKETS);
const SOURCE_TYPES = new Set(OBSERVATION_SOURCE_TYPES);
const ROUTES = new Set(ROUTING_TARGETS);

function requireValue(value, label) {
  if (value === undefined || value === null || value === "") {
    throw new Error(`${label} is required`);
  }
  return value;
}

function requireOneOf(value, allowed, label) {
  requireValue(value, label);
  if (!allowed.has(value)) {
    throw new Error(`${label} must be one of ${Array.from(allowed).join(", ")}`);
  }
  return value;
}

function normalizeArray(value) {
  if (value === undefined || value === null) {
    return [];
  }
  return Array.isArray(value) ? value : [value];
}

function freezeRecord(record) {
  for (const value of Object.values(record)) {
    if (value && typeof value === "object" && !Object.isFrozen(value)) {
      freezeRecord(value);
    }
  }
  return Object.freeze(record);
}

function normalizeDate(value, label) {
  if (value === undefined || value === null || value === "") {
    return null;
  }
  const date = new Date(String(value));
  if (Number.isNaN(date.getTime())) {
    throw new Error(`${label} must be an ISO-compatible date`);
  }
  return date.toISOString().slice(0, 10);
}

function normalizeTrigger(input) {
  const trigger = typeof input === "string" ? { type: input } : { ...requireValue(input, "trigger") };
  const type = requireOneOf(trigger.type, TRIGGERS, "trigger.type");

  return freezeRecord({
    type,
    source: trigger.source ? String(trigger.source) : null,
    summary: trigger.summary ? String(trigger.summary) : "",
    publicFeedbackId: trigger.publicFeedbackId ? String(trigger.publicFeedbackId) : null
  });
}

function isNoLaterThanDue(reviewDate, observedOn) {
  if (!reviewDate) {
    return false;
  }
  return new Date(`${observedOn}T00:00:00.000Z`).getTime() >= new Date(`${reviewDate}T00:00:00.000Z`).getTime();
}

function routeForReason(reason) {
  switch (reason) {
    case "first-run-confusion":
      return ["user-documentation", "video-planning-candidate"];
    case "bundled-docs-confusion":
      return ["bundled-documentation"];
    case "public-docs-correction":
      return ["user-documentation"];
    case "installed-user-defect":
      return ["future-issue"];
    case "proof-gap":
      return ["proof-gate"];
    case "future-issue":
      return ["future-issue"];
    default:
      return ["none"];
  }
}

function requiresPublishedUpdate(input = {}) {
  return input.installedUserDefect === true ||
    input.publicFacingDocsCorrection === true ||
    input.proofGap === true ||
    input.requiresPublishedPackage === true ||
    input.requiresPublicSourceUpdate === true;
}

export function createObservationCycle(input = {}) {
  const observedOn = normalizeDate(requireValue(input.observedOn ?? input.currentDate, "observedOn"), "observedOn");
  const noLaterThanReviewDate = normalizeDate(input.noLaterThanReviewDate, "noLaterThanReviewDate");
  const triggers = normalizeArray(input.triggers).map(normalizeTrigger);
  const publicFeedback = normalizeArray(input.publicFeedback).map((feedback) =>
    freezeRecord({
      id: String(requireValue(feedback?.id ?? feedback, "publicFeedback.id")),
      source: feedback?.source ? String(feedback.source) : "public-feedback",
      summary: feedback?.summary ? String(feedback.summary) : ""
    })
  );
  const dueByDate = isNoLaterThanDue(noLaterThanReviewDate, observedOn);
  const triggerDueReasons = triggers.map((trigger) => trigger.type);
  const publicFeedbackDueReasons = publicFeedback.length > 0 ? ["public-feedback"] : [];
  const dueReasons = [...new Set([
    ...triggerDueReasons,
    ...publicFeedbackDueReasons,
    ...(dueByDate ? ["no-later-than-review"] : [])
  ])];

  return freezeRecord({
    kind: "installed-user-observation-cycle",
    observedOn,
    noLaterThanReviewDate,
    triggers,
    publicFeedback,
    due: dueReasons.length > 0,
    dueReasons,
    releaseProofAccepted: false,
    requirementIds: [...INSTALLED_USER_OBSERVATION_REQUIREMENTS.observationModel]
  });
}

export function createObservationFact(input = {}) {
  const sourceType = requireOneOf(input.sourceType, SOURCE_TYPES, "sourceType");
  const bucket = requireOneOf(input.bucket, FACT_BUCKETS, "bucket");

  if (input.releaseProof === true) {
    throw new Error("installed-user observation input is not release proof");
  }

  return freezeRecord({
    kind: "installed-user-observation-fact",
    bucket,
    sourceType,
    summary: String(requireValue(input.summary, "summary")),
    sourceId: input.sourceId ? String(input.sourceId) : null,
    followUp: input.followUp ? String(input.followUp) : null,
    inputRole: "observation-input",
    releaseProof: false,
    proofStatus: "not-release-proof",
    requirementIds: [...INSTALLED_USER_OBSERVATION_REQUIREMENTS.observationModel]
  });
}

export function createRoutingDecision(input = {}) {
  const reason = String(input.reason ?? "informational");
  const routes = normalizeArray(input.routes ?? routeForReason(reason))
    .map((route) => requireOneOf(route, ROUTES, "route"));
  const semverRecommendation = requiresPublishedUpdate(input) ? "patch-candidate" : "sustainment-only";

  return freezeRecord({
    kind: "installed-user-observation-routing-decision",
    reason,
    routes,
    semverRecommendation,
    releaseProofAccepted: false,
    notes: normalizeArray(input.notes).map(String),
    requirementIds: [...INSTALLED_USER_OBSERVATION_REQUIREMENTS.observationModel]
  });
}

export function allInstalledUserObservationRequirementIds() {
  return Object.freeze(
    Object.values(INSTALLED_USER_OBSERVATION_REQUIREMENTS)
      .flat()
      .filter((value, index, values) => values.indexOf(value) === index)
      .sort()
  );
}
