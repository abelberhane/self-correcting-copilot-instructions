# 🧪 Step 10: Verify safe and unsafe fixtures

> **Lesson 2 · Guarded automation** · Step 10 of 10

## Theory 🧠

A secure workflow proves both success and failure paths deterministically.

## Activity ⌨️

1. Run `npm test`, `npm run validate`, and `npm run simulate`. Confirm the valid fixture passes and every unsafe fixture fails.
2. Run `npm run check-step -- 10` and the relevant tests.
3. Commit and push the change.

## Actions trigger 🚦

Push test or fixture changes.

## Grading check ✅

The final grader executes the complete suite and posts completion feedback.

## Targeted feedback 💬

A failed **Step 10** run updates the exercise issue with the missing control and the relevant file.

## Recovery 🛟

Use the failing fixture name to locate the precise missing safeguard; no external model or secret is needed.
