# Troubleshooting

- **Command not recognized:** `/copilot-learn` must be the first line. Use only documented `key: value` fields.
- **Actor rejected:** Confirm the comment author is an OWNER, MEMBER, or explicitly configured trusted login. A label alone is insufficient.
- **Candidate blocked:** Read the stable feedback comment; remove secrets, executable text, ambiguity, contradiction, or governance changes.
- **Auto-merge not enabled:** Confirm policy is enabled, only allowed paths changed, all required labels exist, risk is low, and repository auto-merge is enabled.
- **Auto-merge waits:** This is expected while branch protection, required reviews, or checks are pending. Do not bypass them.
- **Fork workflow lacks secrets:** Expected by design. Validation requires no secrets and fork code is not run with privileged tokens.


## Repository setup problems

- **Candidate PR is not created:** Open **Settings** > **Actions** > **General**, select **Read and write permissions**, enable **Allow GitHub Actions to create and approve pull requests**, and save.
- **Auto-merge option is unavailable:** Open **Settings** > **General** and enable **Allow auto-merge** under **Pull Requests**.
- **Required check is not listed:** A check is only selectable after it runs once. Complete Lesson 1, then add **Evaluate instruction candidate** in **Settings** > **Rules** > **Rulesets** (**Require status checks to pass**) or **Settings** > **Branches** (**Require status checks to pass before merging**).
- **"This ruleset does not target any resources":** Add a target under **Target branches** with **Add target** > **Include default branch**.
- **Ruleset shows a Disabled badge:** Set **Enforcement status** to **Active**, then save. Disabled rulesets never apply.
- **Auto-merge merges without waiting:** Confirm the ruleset is active, targets the default branch, has an empty bypass list, and lists **Evaluate instruction candidate** as required.
- **Wording does not match the documentation:** Rulesets say **Require status checks to pass**; classic branch protection says **Require status checks to pass before merging**. Either one works.
- **Organization policy locks a setting:** Ask a repository or organization administrator to enable it. You can still run the local deterministic simulation without these settings.
