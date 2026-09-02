# 🔐 Step 1: Configure trusted actors and explicit signals

> **Lesson 1 · Governed corrections** · Step 1 of 10

## Theory 🧠

Define exactly who can submit corrections and require `/copilot-learn` on a Copilot-associated PR.

## Activity ⌨️

1. Edit `.github/learning-config.yml`. Keep OWNER and MEMBER trust, the exact command, allowed fields, and the automation-loop guard.
2. Run `npm run check-step -- 1` and the relevant tests.
3. Commit and push the change.

## Actions trigger 🚦

Comment `/copilot-learn` on a PR labeled `copilot-authored`, or push the configuration change.

## Grading check ✅

The grader verifies actor-association trust and the exact command.

## Targeted feedback 💬

A failed **Step 1** run updates the exercise issue with the missing control and the relevant file.

## Recovery 🛟

If rejected, confirm the actor association and PR context; labels never establish identity.
