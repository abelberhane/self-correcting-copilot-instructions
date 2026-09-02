# Self-correcting Copilot instructions

Build a secure, auditable pipeline that turns explicit maintainer corrections into repository instruction pull requests, then safely enables low-risk auto-merge. This exercise automates **repository instructions**; it does not train Copilot or make Copilot self-learning.

## About this exercise

- **Audience:** Developers and maintainers familiar with GitHub Actions and JavaScript
- **Goal:** Implement candidate validation, lifecycle management, risk policy, and guarded auto-merge
- **Duration:** 45–60 minutes across two lessons
- **Prerequisites:** A GitHub account, Actions enabled, pull request permissions, and Node.js 20 for local validation

The instruction file has a maintainer-controlled section that automation cannot edit and a bounded learned-rules section managed through pull requests. Every rule has a stable ID, category, state, provenance, and fingerprint.

## Start here

[![Start the exercise](https://img.shields.io/badge/Start%20the%20exercise-Run%20Step%200-1f883d?logo=github)](../../actions/workflows/0-step.yml)

1. Create a repository from this template or fork it.
2. Enable repository auto-merge, require the **Evaluate instruction candidate** check on the default branch, and allow GitHub Actions to create pull requests.
3. Select **Start the exercise** above, choose **Run workflow**, and open the issue created by Step 0.
4. Follow the issue instructions. Each completed step posts the next activity and targeted recovery guidance.

## Lessons

| Lesson | Steps | Outcome |
|---|---:|---|
| 1: Governed corrections | 1–7 | Parse, validate, review, merge, supersede, and revoke instruction candidates |
| 2: Guarded automation | 8–10 | Classify deterministic low risk, enable native auto-merge, and prove unsafe inputs stay blocked |

## Local deterministic simulation

```bash
npm ci
npm test
npm run validate
npm run simulate
```

No model API or secret is required. The simulation clock and fingerprints are deterministic.

## Reset or retry

Re-run a failed step workflow after applying its feedback. To restart the exercise, close the exercise issue, revert learner changes, and manually run **Step 0** again. Candidate branches and audit entries are append-only history; revoke or supersede rules instead of deleting that history.

> [!IMPORTANT]
> Auto-merge uses GitHub's native auto-merge capability. It waits for branch protection and required checks and never pushes to the default branch or bypasses protections.
