# ♻️ Step 7: Supersede or revoke a rule

> **Lesson 1 · Governed corrections** · Step 7 of 10

## Theory 🧠

Lifecycle states preserve history. Supersession replaces a rule; revocation disables it without deletion.

## Activity ⌨️

1. Submit `/copilot-learn` with `action: supersede` or `action: revoke` and an active `target_id`. Review the lifecycle diff.
2. Run `npm run check-step -- 7` and the relevant tests.
3. Commit and push the change.

## Actions trigger 🚦

Post a lifecycle correction or push its fixture.

## Grading check ✅

The grader verifies only active targets can transition and history remains present.

## Targeted feedback 💬

A failed **Step 7** run updates the exercise issue with the missing control and the relevant file.

## Recovery 🛟

Copy the exact stable ID and ensure the target is currently active.
