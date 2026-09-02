# 🔀 Step 4: Generate an instruction-update PR

> **Lesson 1 · Governed corrections** · Step 4 of 10

## Theory 🧠

Candidates are proposed through branches and pull requests; automation never pushes directly to the default branch.

## Activity ⌨️

1. Complete `propose-instruction.yml`: verify trust, parse, validate, render within learned-rule boundaries, write audit data, and open a PR.
2. Run `npm run check-step -- 4` and the relevant tests.
3. Commit and push the change.

## Actions trigger 🚦

Post a valid correction comment.

## Grading check ✅

The grader confirms candidate artifacts, immutable maintainer content, provenance, and candidate PR labels.

## Targeted feedback 💬

A failed **Step 4** run updates the exercise issue with the missing control and the relevant file.

## Recovery 🛟

Run `npm run simulate`; ensure the workflow token has pull-request write permission only where needed.
