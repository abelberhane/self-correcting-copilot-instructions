# 🤖 Step 9: Enable guarded PR auto-merge

> **Lesson 2 · Guarded automation** · Step 9 of 10

## Theory 🧠

Native auto-merge queues a PR and still honors branch protections, reviews, and checks. It is not a direct merge.

## Activity ⌨️

1. Complete `evaluate-instruction.yml` so it revalidates, labels, and calls `gh pr merge --auto --squash` only for policy-qualified PRs.
2. Run `npm run check-step -- 9` and the relevant tests.
3. Commit and push the change.

## Actions trigger 🚦

Update a candidate PR or push evaluator changes.

## Grading check ✅

The grader confirms no direct push, no admin bypass, least privilege, and required-check gating.

## Targeted feedback 💬

A failed **Step 9** run updates the exercise issue with the missing control and the relevant file.

## Recovery 🛟

Enable repository auto-merge in settings; never add `--admin` or a direct default-branch push.
