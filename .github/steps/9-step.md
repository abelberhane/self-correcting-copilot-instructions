# 🤖 Step 9: Enable guarded PR auto-merge

> **Lesson 2 · Guarded automation** · Step 9 of 10

### 📖 Theory: Auto-merge queues, it does not override

Native auto-merge is often misunderstood. It does not merge immediately and it does not skip anything. It **queues** a pull request and waits for every required review and status check to pass.

That is why this is safe: branch protection remains the final gate. The evaluator revalidates the candidate on every update, confirms only allowed paths changed, applies the correct decision labels, and enables auto-merge only when the policy fully qualifies the change. Using `--admin`, or pushing to the default branch, would defeat the entire design.

> [!NOTE]
> The evaluator runs on every pull request and passes instantly when there is no candidate, so requiring it never blocks ordinary work.

### ⌨️ Activity: Enable auto-merge behind the policy

1. Open `.github/workflows/evaluate-instruction.yml`.
2. Confirm it revalidates the candidate and checks changed paths on every update.
3. Confirm stale decision labels are replaced before new ones are applied.
4. Confirm `gh pr merge --auto` runs only when the policy qualifies the candidate, with no `--admin` flag.
5. Run `npm run check-step -- 9` locally.
6. Commit and push your change.

### ✅ How this step is graded

| | |
|---|---|
| 🚦 **Trigger** | Push evaluator changes, or update a candidate pull request. |
| 🔍 **Check** | The grader confirms auto-merge is policy-gated with no admin bypass and no direct default-branch push. |
| 💬 **Feedback** | A failed run updates the exercise issue with the specific missing control and the file to fix. |

<details>
<summary><b>Having trouble? 🤷</b></summary><br/>

- If **Evaluate instruction candidate** is missing from **Add checks**, type the name exactly or open any pull request so it reports once.
- If **Allow auto-merge** is greyed out, the repository is likely private on GitHub Free. Make it public or merge manually.
- This step grades your evaluator logic, so you can pass it even when auto-merge is unavailable.

</details>
