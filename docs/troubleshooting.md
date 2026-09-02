# Troubleshooting

- **Command not recognized:** `/copilot-learn` must be the first line. Use only documented `key: value` fields.
- **Actor rejected:** Confirm the comment author is an OWNER, MEMBER, or explicitly configured trusted login. A label alone is insufficient.
- **Candidate blocked:** Read the stable feedback comment; remove secrets, executable text, ambiguity, contradiction, or governance changes.
- **Auto-merge not enabled:** Confirm policy is enabled, only allowed paths changed, all required labels exist, risk is low, and repository auto-merge is enabled.
- **Auto-merge waits:** This is expected while branch protection, required reviews, or checks are pending. Do not bypass them.
- **Fork workflow lacks secrets:** Expected by design. Validation requires no secrets and fork code is not run with privileged tokens.
