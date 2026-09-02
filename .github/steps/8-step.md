# ⚖️ Step 8: Configure deterministic low-risk policy

> **Lesson 2 · Guarded automation** · Step 8 of 10

### 📖 Theory: Automation needs a narrow, boring definition of safe

Auto-merge is only responsible if "low risk" is defined **deterministically**. No judgment calls, no model opinion: the same candidate must always receive the same classification.

This policy narrows automation to the least consequential changes. Governance-adjacent categories such as `ARCH`, `PROCESS`, and `SECURITY` are blocked outright. Long rules, repository-wide absolutes, and lifecycle changes are treated as at least medium risk, which routes them to a human.

> [!NOTE]
> Anything ambiguous should be classified upward, not downward. Human review is the safe default, and automation is the exception.

### ⌨️ Activity: Define what qualifies for automation

1. Open `.github/auto-merge-policy.yml`.
2. Confirm `allowed_risk` is `low` and `blocked_categories` includes `ARCH`, `PROCESS`, and `SECURITY`.
3. Review `allowed_paths`, `required_labels`, and `required_checks`.
4. Confirm `max_rule_length` keeps sweeping rules out of automation.
5. Set `enabled: true`, then run `npm run check-step -- 8`.
6. Commit and push your change.

### ✅ How this step is graded

| | |
|---|---|
| 🚦 **Trigger** | Push a change to `.github/auto-merge-policy.yml`. |
| 🔍 **Check** | The grader validates your policy against its schema and confirms risky categories stay in human review. |
| 💬 **Feedback** | A failed run updates the exercise issue with the specific missing control and the file to fix. |

<details>
<summary><b>Having trouble? 🤷</b></summary><br/>

- A policy that allows medium or high risk will fail the grader.
- Keep `allowed_paths` limited to instructions and candidate data.
- Broad repository-wide rules are intentionally not low risk.

</details>
