# ⚖️ Step 8: Configure deterministic low-risk policy

> **Lesson 2 · Guarded automation** · Step 8 of 10

## Theory 🧠

Only narrow, unambiguous, non-governance candidates should qualify for automation.

## Activity ⌨️

1. Set `.github/auto-merge-policy.yml` to low risk, allowed paths, blocked categories, max length, required checks, labels, and provenance controls. Then set `enabled: true`.
2. Run `npm run check-step -- 8` and the relevant tests.
3. Commit and push the change.

## Actions trigger 🚦

Push the policy change.

## Grading check ✅

The grader validates the policy schema and confirms medium/high risk remains human-reviewed.

## Targeted feedback 💬

A failed **Step 8** run updates the exercise issue with the missing control and the relevant file.

## Recovery 🛟

Keep ARCH, PROCESS, and SECURITY blocked; broad repository rules are not low risk.
