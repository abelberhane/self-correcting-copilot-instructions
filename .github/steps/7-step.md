## Step 7: Supersede or revoke a rule

> **Lesson 1 of 2 · Governed corrections** · Step 7 of 10

### 📖 Theory: Retire rules without erasing history

Rules change. A rule may become obsolete, or turn out to be wrong. Deleting it destroys the reasoning trail, so this pipeline uses **lifecycle states** instead.

| Action | Effect on the target | Effect on history |
| --- | --- | --- |
| `supersede` | Marked `superseded`, replacement added as a new entry | Original text and provenance kept |
| `revoke` | Marked `revoked` and no longer applied | Original text and provenance kept |

Because these operations change existing guidance, they always go to human review. A revoked rule keeps its rule text, its rationale, and its provenance link, so six months from now you can still answer "why did we ever have this rule, and who retired it?"

> [!NOTE]
> A lifecycle action requires a `target_id` that is currently `active`. You cannot supersede something that was already retired.

### ⌨️ Activity: Retire a rule through the pipeline

1. Open `.github/copilot-instructions.md` and copy the ID of a rule whose state is `active`, for example `RULE-TEST-PARSER-001`.

1. On a pull request labeled `copilot-authored`, post a revocation. Replace `target_id` with the ID you copied.

   ```md
   /copilot-learn
   category: TEST
   action: revoke
   target_id: RULE-TEST-PARSER-001
   rule: Retire the parser test rule now that coverage is enforced in CI.
   rationale: The rule is redundant with the required test workflow.
   scope: repository
   ```

1. Review the candidate pull request. Confirm the target rule still has its text, rationale, and provenance, and that only `**State:**` changed.

1. Merge the candidate pull request.

1. Bring the merged result onto your branch and run the grader.

   ```bash
   git pull --rebase origin main
   npm run check-step -- 7
   git commit --allow-empty -m "Supersede or revoke a rule"
   git push
   ```

1. Mona will check your work and share the next step.

<details>
<summary><b>Having trouble? 🤷</b></summary><br/>

- **"No superseded or revoked rule found"** means the lifecycle candidate was not merged, or you have not pulled it onto your branch.
- **"lost its provenance when it was retired"** means the rule was rewritten rather than transitioned. Retiring changes `**State:**` only.
- Copy the stable ID exactly, including capitalization.
- If the target is not active, the candidate is rejected by design. Try `supersede` on a different active rule.
- Do not delete the retired rule; changing its state is the expected outcome.

</details>
