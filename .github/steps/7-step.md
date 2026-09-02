# ♻️ Step 7: Supersede or revoke a rule

> **Lesson 1 · Governed corrections** · Step 7 of 10

### 📖 Theory: Retire rules without erasing history

Rules change. A rule may become obsolete, or turn out to be wrong. Deleting it destroys the reasoning trail, so this pipeline uses **lifecycle states** instead.

`supersede` marks the old rule as superseded and adds its replacement. `revoke` marks a rule revoked and stops applying it. Both keep the original entry, its provenance, and its audit record. Because these operations change existing guidance, they always go to human review.

> [!NOTE]
> A lifecycle action requires a `target_id` that is currently `active`. You cannot supersede something that was already retired.

### ⌨️ Activity: Transition a rule through its lifecycle

1. Choose an active rule ID from `.github/copilot-instructions.md`.
2. Post a `/copilot-learn` correction using `action: supersede` or `action: revoke` with that `target_id`.
3. Review the resulting diff and confirm the original rule is retained with a new state.
4. Confirm a superseding rule is added as a separate entry.
5. Run `npm run check-step -- 7` locally.
6. Commit and push any changes.

### ✅ How this step is graded

| | |
|---|---|
| 🚦 **Trigger** | Post a lifecycle correction, or push script and fixture changes. |
| 🔍 **Check** | The grader confirms only an active target can transition and that history is preserved. |
| 💬 **Feedback** | A failed run updates the exercise issue with the specific missing control and the file to fix. |

<details>
<summary><b>Having trouble? 🤷</b></summary><br/>

- Copy the stable ID exactly, including capitalization.
- If the target is not active, the candidate is rejected by design.
- Do not delete the retired rule; changing its state is the expected outcome.

</details>
