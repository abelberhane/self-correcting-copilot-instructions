## Step 10: Verify safe and unsafe fixtures

> **Lesson 2 of 2 · Guarded automation** · Step 10 of 10

### 📖 Theory: Prove both paths, not just the happy one

A security control you have never seen fail is a control you cannot trust. The final step verifies the pipeline from both directions: the valid correction still flows through, and every unsafe fixture is still blocked.

Everything runs deterministically. There is no model call, no network dependency, and no secret, so the same inputs always produce the same result. That is what makes this pipeline reviewable and safe to run in CI.

> [!NOTE]
> Keep this suite green as you extend the exercise. New rules and new risks should arrive with new fixtures.

### ⌨️ Activity: Verify the complete pipeline

1. Run the full test suite and confirm every test passes.

   ```bash
   npm test
   ```

1. Check repository structure and workflow safety.

   ```bash
   npm run validate
   ```

1. Inspect the deterministic candidate output.

   ```bash
   npm run simulate
   ```

1. Confirm each fixture in `test/fixtures/unsafe/` is still rejected.

1. Run the final grader, then commit and push.

   ```bash
   npm run check-step -- 10
   git commit --allow-empty -am "Verify safe and unsafe fixtures"
   git push
   ```

1. Mona will check your work and close out the exercise. 🎉

<details>
<summary><b>Having trouble? 🤷</b></summary><br/>

- The failing test name points to the exact safeguard that regressed.
- Run `npm run validate` to catch structural or workflow safety problems.
- No external service, model, or secret is required for any of these commands.

</details>
