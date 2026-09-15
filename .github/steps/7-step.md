## Step 7: Supersede or revoke a rule

> **Lesson 1 of 2 · Governed corrections** · Step 7 of 10

### 📖 Theory: Retire rules without erasing history

Rules change. A rule may become obsolete, or turn out to be wrong. Deleting it destroys the reasoning trail, so this pipeline uses **lifecycle states** instead.

`supersede` marks the old rule as superseded and adds its replacement. `revoke` marks a rule revoked and stops applying it. Both keep the original entry, its provenance, and its audit record. Because these operations change existing guidance, they always go to human review.

```md
/copilot-learn
category: TEST
action: revoke
target_id: RULE-TEST-PARSER-001
rule: Retire the parser test rule now that coverage is enforced in CI.
rationale: The rule is redundant with the required test workflow.
scope: repository
```

> [!NOTE]
> A lifecycle action requires a `target_id` that is currently `active`. You cannot supersede something that was already retired.

### ⌨️ Activity: Transition a rule through its lifecycle

1. Choose an active rule ID from `.github/copilot-instructions.md`.

1. On a pull request labeled `copilot-authored`, post a `/copilot-learn` correction using `action: supersede` or `action: revoke` with that `target_id`.

1. Review the resulting diff and confirm the original rule is retained with a new state.

1. Confirm a superseding rule is added as a separate entry rather than replacing the original.

1. Verify your work locally, then commit and push.

   ```bash
   npm run check-step -- 7
   git commit --allow-empty -am "Supersede or revoke a rule"
   git push
   ```

1. Mona will check your work and share the next step.

<details>
<summary><b>Having trouble? 🤷</b></summary><br/>

- Copy the stable ID exactly, including capitalization.
- If the target is not active, the candidate is rejected by design.
- Do not delete the retired rule; changing its state is the expected outcome.

</details>
