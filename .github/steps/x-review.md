## Review

_Congratulations, you've completed this exercise and built a governed instruction pipeline! :tada:_

<img src="https://octodex.github.com/images/jetpacktocat.png" alt="celebrate" width="200" align="right">

Here's a recap of what you built:

- **Trusted signals**: Accepted corrections only from a verified author association with an explicit `/copilot-learn` command
- **A closed schema**: Gave every candidate a stable ID, category, lifecycle state, provenance, and fingerprint
- **A strict parser**: Treated comment text as untrusted data that never reaches a shell or evaluator
- **Candidate pull requests**: Proposed instruction changes for review instead of pushing to the default branch
- **Deterministic safety checks**: Blocked secrets, prompt injection, duplicates, contradictions, overfitting, and governance changes
- **Rule lifecycle**: Superseded and revoked rules without erasing history
- **Guarded auto-merge**: Queued only provably low-risk candidates behind branch protection, never bypassing required checks

### Key takeaways

- **Automation proposes, humans decide.** Anything ambiguous, medium-risk, or high-risk belongs in human review.
- **Guardrails must be unreachable.** A candidate that can edit workflows, validators, `CODEOWNERS`, permissions, or policy is not a guardrail at all.
- **Determinism is what makes this reviewable.** The same input always produces the same classification, with no model call and no secrets.

> [!NOTE]
> This exercise automated **repository instructions**. It does not train GitHub Copilot or make Copilot self-learning. See [`docs/platform-boundary.md`](../../blob/main/docs/platform-boundary.md) for where that line sits.

### What's next?

- Read [`docs/threat-model.md`](../../blob/main/docs/threat-model.md) and add a fixture for a risk it doesn't yet cover.
- Read [`docs/rollback.md`](../../blob/main/docs/rollback.md) and practice revoking a rule you merged.
- Learn more about [adding repository custom instructions for GitHub Copilot](https://docs.github.com/en/copilot/customizing-copilot/adding-repository-custom-instructions-for-github-copilot).
- Explore [GitHub Actions security hardening](https://docs.github.com/en/actions/security-for-github-actions/security-guides/security-hardening-for-github-actions).
- Check out the other [GitHub Skills exercises](https://learn.github.com/skills).
