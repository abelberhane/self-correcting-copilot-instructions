## Step 8: Configure deterministic low-risk policy

> **Lesson 2 of 2 · Guarded automation** · Step 8 of 10

_Nice work finishing Lesson 1! :tada: You can now turn a trusted correction into a reviewed instruction pull request. Lesson 2 automates only the cases you can prove are safe._

### 📖 Theory: Automation needs a narrow, boring definition of safe

Auto-merge is only responsible if "low risk" is defined **deterministically**. No judgment calls, no model opinion: the same candidate must always receive the same classification.

This policy narrows automation to the least consequential changes. Governance-adjacent categories such as `ARCH`, `PROCESS`, and `SECURITY` are blocked outright. Long rules, repository-wide absolutes, and lifecycle changes are treated as at least medium risk, which routes them to a human.

| Risk | Example | Outcome |
| --- | --- | --- |
| Low | A short, scoped `TEST` or `STYLE` rule touching only instruction files | Eligible for auto-merge |
| Medium | A long rule, a repository-wide absolute, or a lifecycle change | Human review |
| High | Anything in a blocked category or touching a protected path | Blocked |

> [!NOTE]
> Anything ambiguous should be classified upward, not downward. Human review is the safe default, and automation is the exception.

### ⌨️ Activity: Define what qualifies for automation

1. Open `.github/auto-merge-policy.yml`.

1. Confirm `allowed_risk` is `low` and `blocked_categories` includes `ARCH`, `PROCESS`, and `SECURITY`.

1. Review `allowed_paths`, `required_labels`, and `required_checks`.

1. Confirm `max_rule_length` keeps sweeping rules out of automation.

1. Set `enabled: true`, verify locally, then commit and push.

   ```bash
   npm run check-step -- 8
   git commit --allow-empty -am "Configure deterministic low-risk policy"
   git push
   ```

1. Mona will check your work and share the next step.

<details>
<summary><b>Having trouble? 🤷</b></summary><br/>

- A policy that allows medium or high risk will fail the grader.
- Keep `allowed_paths` limited to instructions and candidate data.
- Broad repository-wide rules are intentionally not low risk.

</details>
