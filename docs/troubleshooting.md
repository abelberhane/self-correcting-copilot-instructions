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
- **Required check is not listed:** Let **Evaluate instruction candidate** run once, then return to **Settings** > **Branches** and add it to the default branch protection rule.
- **Organization policy locks a setting:** Ask a repository or organization administrator to enable it. You can still run the local deterministic simulation without these settings.
