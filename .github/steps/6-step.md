## Step 6: Review and merge the candidate

> **Lesson 1 of 2 · Governed corrections** · Step 6 of 10

### 📖 Theory: Human review is the default

Automation proposes; a person decides. Reviewing a candidate is not a formality, because this pull request changes the instructions that guide future work in the repository.

A good review reads four things:

| What to read | What it proves |
| --- | --- |
| The rendered rule | Only the learned-rules section changed |
| Provenance | A real trusted maintainer asked for this, and you can find the comment |
| Fingerprint | The rule text was not altered between proposal and render |
| Audit entry | The change is recorded and can be rolled back |

> [!NOTE]
> The maintainer-controlled section must be identical before and after. If it changed, something rendered outside its boundary.

### ⌨️ Activity: Drive a correction through the pipeline

This is the first step graded on real pipeline output rather than on your local files, so you need to actually run a correction end to end.

1. Open any pull request in your repository, or use an existing one.

1. Add the `copilot-authored` label to it. The pipeline only accepts corrections on Copilot-associated pull requests.

1. Post a correction as a comment. You must be the repository owner for this to be trusted.

   ```md
   /copilot-learn
   category: TEST
   rule: Add unit tests when parser behavior changes.
   rationale: The original implementation omitted parser regression tests.
   scope: path:scripts/
   ```

1. Wait for the **Propose instruction** workflow to open a candidate pull request.

1. Review it: in **Files changed**, confirm only the learned-rules section of `.github/copilot-instructions.md` changed, and that `data/candidates/`, `data/audit/`, and `data/fingerprints/` each gained a file.

1. Merge the candidate pull request once required checks pass.

1. Bring the merged result onto your branch and run the grader.

   ```bash
   git pull --rebase origin main
   npm run check-step -- 6
   git commit --allow-empty -m "Review and merge the candidate"
   git push
   ```

1. Mona will check your work and share the next step.

<details>
<summary><b>Having trouble? 🤷</b></summary><br/>

- **"No candidate files in data/candidates/"** means the pipeline never ran. Check the **Actions** tab for **Propose instruction**, and confirm the pull request carries the `copilot-authored` label.
- **"none render as an active rule"** means the candidate pull request was opened but not merged, or you have not pulled the merge onto your branch. Run `git pull --rebase origin main`.
- If the workflow did not start, recheck the Actions permissions you set in Step 4.
- If checks fail, update the candidate branch instead of editing the instructions by hand.
- Never edit the maintainer-controlled section to make a check pass.

</details>
