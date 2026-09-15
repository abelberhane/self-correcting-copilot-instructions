## Step 9: Enable guarded PR auto-merge

> **Lesson 2 of 2 · Guarded automation** · Step 9 of 10

### 📖 Theory: Auto-merge queues, it does not override

Native auto-merge is often misunderstood. It does not merge immediately and it does not skip anything. It **queues** a pull request and waits for every required review and status check to pass.

That is why this is safe: branch protection remains the final gate. The evaluator revalidates the candidate on every update, confirms only allowed paths changed, applies the correct decision labels, and enables auto-merge only when the policy fully qualifies the change. Using `--admin`, or pushing to the default branch, would defeat the entire design.

> [!NOTE]
> The evaluator runs on every pull request and passes instantly when there is no candidate, so requiring it never blocks ordinary work.

### ⌨️ Activity: Require the evaluator check

Protecting the branch is what makes auto-merge safe, and it is also what unlocks the auto-merge setting.

GitHub offers two ways to protect a branch. Use whichever your repository shows.

<details>
<summary><b>Rulesets</b> (Settings > Rules > Rulesets — newer experience)</summary><br/>

1. Select **New ruleset** > **New branch ruleset**, or edit an existing one.
1. Enter a **Ruleset Name**, such as `Instruction candidates`.
1. Set **Enforcement status** to **Active**. A ruleset left as **Disabled** is never applied.
1. Under **Target branches**, select **Add target** > **Include default branch**.
1. Leave **Bypass list** empty so no actor can skip these rules.
1. Select **Require status checks to pass**.
1. Select **Add checks**, then type `Evaluate instruction candidate` exactly and select it.
1. Select **Create** or **Save changes**.

</details>

<details>
<summary><b>Classic branch protection</b> (Settings > Branches)</summary><br/>

1. Select **Add branch protection rule**, or edit the rule for your default branch.
1. Select **Require status checks to pass before merging**.
1. Search for or type **Evaluate instruction candidate**, then add it.
1. Select **Create** or **Save changes**.

</details>

> [!TIP]
> **Search shows no results?** The picker only suggests checks it has seen run recently, and a squash merge can leave the default branch with no check history. Type the name exactly instead of relying on search, or open any small pull request so **Evaluate instruction candidate** reports once, then retry.

### ⌨️ Activity: Turn on auto-merge

1. Select **Settings** > **General**.

1. Under **Pull Requests**, select **Allow auto-merge**.

> [!IMPORTANT]
> **Is Allow auto-merge greyed out?** Auto-merge is not available for **private repositories on GitHub Free**. Make the repository **public**, upgrade the plan, or use the fallback below. Organization policy can also disable it.

> [!TIP]
> **No auto-merge? You can still finish this exercise.** Steps 8–10 are graded on your policy, evaluator, and tests — not on an actual merge. The evaluator labels a qualifying candidate `copilot-auto-merge-approved`, explains that auto-merge is unavailable, and you merge manually once required checks pass.

### ⌨️ Activity: Gate auto-merge behind the policy

1. Open `.github/workflows/evaluate-instruction.yml`.

1. Confirm it revalidates the candidate and checks changed paths on every update.

1. Confirm stale decision labels are replaced before new ones are applied.

1. Confirm `gh pr merge --auto` runs only when the policy qualifies the candidate, with no `--admin` flag.

1. Verify your work locally, then commit and push.

   ```bash
   npm run check-step -- 9
   git commit --allow-empty -am "Enable guarded pull request auto-merge"
   git push
   ```

1. Mona will check your work and share the next step.

<details>
<summary><b>Having trouble? 🤷</b></summary><br/>

- If **Evaluate instruction candidate** is missing from **Add checks**, type the name exactly or open any pull request so it reports once.
- If **Allow auto-merge** is greyed out, the repository is likely private on GitHub Free. Make it public or merge manually.
- This step grades your evaluator logic, so you can pass it even when auto-merge is unavailable.
- Auto-merge never bypasses your ruleset. It waits for every required review and check.

</details>
