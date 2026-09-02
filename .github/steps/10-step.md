# 🧪 Step 10: Verify safe and unsafe fixtures

> **Lesson 2 · Guarded automation** · Step 10 of 10

### 📖 Theory: Prove both paths, not just the happy one

A security control you have never seen fail is a control you cannot trust. The final step verifies the pipeline from both directions: the valid correction still flows through, and every unsafe fixture is still blocked.

Everything runs deterministically. There is no model call, no network dependency, and no secret, so the same inputs always produce the same result. That is what makes this pipeline reviewable and safe to run in CI.

> [!NOTE]
> Keep this suite green as you extend the exercise. New rules and new risks should arrive with new fixtures.

### ⌨️ Activity: Verify the complete pipeline

1. Run `npm test` and confirm every test passes.
2. Run `npm run validate` to check repository structure and workflow safety.
3. Run `npm run simulate` to inspect the deterministic candidate output.
4. Confirm each fixture in `test/fixtures/unsafe/` is still rejected.
5. Run `npm run check-step -- 10` locally.
6. Commit and push your change.

### ✅ How this step is graded

| | |
|---|---|
| 🚦 **Trigger** | Push test, fixture, or script changes. |
| 🔍 **Check** | The final grader runs the full suite and repository validation, then posts your completion summary. |
| 💬 **Feedback** | A failed run updates the exercise issue with the specific missing control and the file to fix. |

<details>
<summary><b>Having trouble? 🤷</b></summary><br/>

- The failing test name points to the exact safeguard that regressed.
- Run `npm run validate` to catch structural or workflow safety problems.
- No external service, model, or secret is required for any of these commands.

</details>
