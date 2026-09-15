## Step 6: Review and merge the candidate

> **Lesson 1 of 2 · Governed corrections** · Step 6 of 10

### 📖 Theory: Human review is the default

Automation proposes; a person decides. Reviewing a candidate is not a formality, because this pull request changes the instructions that guide future work in the repository.

A good review reads four things: the rendered rule, the provenance link back to the original comment, the fingerprint that proves the rule text was not altered, and the audit entry. Only then does merging make sense, and only after required checks pass.

> [!NOTE]
> The maintainer-controlled section must be identical before and after. If it changed, something rendered outside its boundary.

### ⌨️ Activity: Review and merge an instruction candidate

1. Open the candidate pull request created by the pipeline.

1. In the **Files changed** tab, confirm only the learned-rules section of `.github/copilot-instructions.md` changed.

1. Follow the provenance link back to the original correction comment.

1. Confirm the candidate and audit files were added under `data/`.

1. Merge the pull request once required checks pass.

1. Confirm the merged result on your branch, then commit and push.

   ```bash
   git pull --rebase origin main
   npm run check-step -- 6
   git commit --allow-empty -m "Review and merge the candidate"
   git push
   ```

1. Mona will check your work and share the next step.

<details>
<summary><b>Having trouble? 🤷</b></summary><br/>

- If checks fail, update the candidate branch instead of editing the instructions by hand.
- Never edit the maintainer-controlled section to make a check pass.
- Confirm the rule sits between the `learned-rules` start and end markers.

</details>
