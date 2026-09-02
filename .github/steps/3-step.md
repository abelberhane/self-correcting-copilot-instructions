# 🔍 Step 3: Parse a strict command

> **Lesson 1 · Governed corrections** · Step 3 of 10

## Theory 🧠

Treat comments as untrusted data. Never pass comment content to a shell, template evaluator, or dynamic code loader.

## Activity ⌨️

1. Implement or inspect `parseCorrection` in `scripts/lib.js`. Accept only the first-line command and documented `key: value` fields.
2. Run `npm run check-step -- 3` and the relevant tests.
3. Commit and push the change.

## Actions trigger 🚦

Push parser or fixture changes.

## Grading check ✅

Valid syntax passes; malformed lines, duplicates, and unknown fields fail with a precise message.

## Targeted feedback 💬

A failed **Step 3** run updates the exercise issue with the missing control and the relevant file.

## Recovery 🛟

Use `.github/learning-config.yml` as the allowlist and run the parser tests.
