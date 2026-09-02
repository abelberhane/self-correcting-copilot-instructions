# 🧾 Step 2: Complete the candidate schema

> **Lesson 1 · Governed corrections** · Step 2 of 10

## Theory 🧠

A closed schema makes correction data reviewable and prevents hidden fields.

## Activity ⌨️

1. Complete `schemas/candidate.schema.json` with stable IDs, categories, lifecycle states, provenance, fingerprints, and conditional `target_id`.
2. Run `npm run check-step -- 2` and the relevant tests.
3. Commit and push the change.

## Actions trigger 🚦

Push a schema change.

## Grading check ✅

The grader checks required fields, enums, patterns, and `additionalProperties: false`.

## Targeted feedback 💬

A failed **Step 2** run updates the exercise issue with the missing control and the relevant file.

## Recovery 🛟

Compare the schema with the sample fixture and run `npm test`.
