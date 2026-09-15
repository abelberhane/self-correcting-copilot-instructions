# Troubleshooting

- **Command not recognized:** `/copilot-learn` must be the first line. Use only documented `key: value` fields.
- **Actor rejected:** Confirm the comment author is an OWNER, MEMBER, or explicitly configured trusted login. A label alone is insufficient.
- **Candidate blocked:** Read the stable feedback comment; remove secrets, executable text, ambiguity, contradiction, or governance changes.
- **Auto-merge not enabled:** Confirm policy is enabled, only allowed paths changed, all required labels exist, risk is low, and repository auto-merge is enabled.
- **Auto-merge waits:** This is expected while branch protection, required reviews, or checks are pending. Do not bypass them.
- **Fork workflow lacks secrets:** Expected by design. Validation requires no secrets and fork code is not run with privileged tokens.


## Starting the exercise

- **Nothing happened after copying the exercise:** **Step 0** runs automatically on the first push to `main`. Open the **Actions** tab and confirm the **Step 0** run succeeded, then refresh the repository home page.
- **Step 0 fails with "could not add label":** The exercise labels were not created. Confirm **Settings** > **Actions** > **General** uses **Read and write permissions**, then re-run **Step 0** from the **Actions** tab.
- **A step workflow never runs:** Only one step workflow is enabled at a time. Each step disables itself and enables the next one when it passes. Open the **Actions** tab, confirm the expected **Step N** workflow is enabled, and re-run it with **Run workflow** if needed.
- **Pushing does not trigger the current step:** Step workflows ignore `main`. Work on a branch, for example `build-the-pipeline`, and push there.
- **You want to restart:** Close the exercise issue, revert your changes, then enable and run **Step 0** from the **Actions** tab. Audit entries are append-only, so revoke or supersede rules instead of deleting history.

## Repository setup problems

- **Candidate PR is not created:** Open **Settings** > **Actions** > **General**, select **Read and write permissions**, enable **Allow GitHub Actions to create and approve pull requests**, and save.
- **Auto-merge option is unavailable:** Open **Settings** > **General** and enable **Allow auto-merge** under **Pull Requests**.
- **Allow auto-merge is greyed out:** The most common cause is a **private repository on GitHub Free**, where auto-merge is unavailable. Make the repository public, upgrade the plan, or use the manual-merge fallback. Select **Why is this option disabled?** to confirm the reason for your repository.
- **Auto-merge unavailable for any reason:** Continue without it. Steps 8–10 grade your policy, evaluator, and tests. Verify the evaluator labels a safe candidate `copilot-auto-merge-approved` and an unsafe candidate `copilot-needs-human-review`, then merge manually after checks pass.
- **A pull request is blocked by the required check:** **Evaluate instruction candidate** runs on every pull request and passes immediately without the `copilot-instruction-candidate` label. If it never reports, confirm Actions is enabled and the workflow exists on the default branch.
- **"Evaluate instruction candidate" is not found in Add checks:** The picker only suggests checks that ran recently, and it may not list a check that never ran on the default branch. Type the name exactly, `Evaluate instruction candidate`, and select it. If it still will not save, open any small pull request so the check reports once, then retry within a few minutes.
- **Check name mismatch:** The required check name must match the workflow job name exactly, including capitalization. It is defined by `name: Evaluate instruction candidate` in `.github/workflows/evaluate-instruction.yml`.
- **Required check is not listed:** A check is only selectable after it runs once. Complete Lesson 1, then add **Evaluate instruction candidate** in **Settings** > **Rules** > **Rulesets** (**Require status checks to pass**) or **Settings** > **Branches** (**Require status checks to pass before merging**).
- **"This ruleset does not target any resources":** Add a target under **Target branches** with **Add target** > **Include default branch**.
- **Ruleset shows a Disabled badge:** Set **Enforcement status** to **Active**, then save. Disabled rulesets never apply.
- **Auto-merge merges without waiting:** Confirm the ruleset is active, targets the default branch, has an empty bypass list, and lists **Evaluate instruction candidate** as required.
- **Wording does not match the documentation:** Rulesets say **Require status checks to pass**; classic branch protection says **Require status checks to pass before merging**. Either one works.
- **Organization policy locks a setting:** Ask a repository or organization administrator to enable it. You can still run the local deterministic simulation without these settings.
