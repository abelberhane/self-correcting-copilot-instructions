# 🛡️ Step 5: Block unsafe candidates

> **Lesson 1 · Governed corrections** · Step 5 of 10

## Theory 🧠

Deterministic validation must reject duplicates, contradictions, overfitting, injection, secrets, missing provenance, and governance changes.

## Activity ⌨️

1. Run every unsafe fixture, then improve `validateCandidate` until each fails for the intended reason.
2. Run `npm run check-step -- 5` and the relevant tests.
3. Commit and push the change.

## Actions trigger 🚦

Push validator or fixture changes, or update a candidate PR.

## Grading check ✅

The grader expects all unsafe fixtures to fail while the valid fixture passes.

## Targeted feedback 💬

A failed **Step 5** run updates the exercise issue with the missing control and the relevant file.

## Recovery 🛟

Read `docs/threat-model.md`; fix the narrow validator instead of broad catch-all behavior.
