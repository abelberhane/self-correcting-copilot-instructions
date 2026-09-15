## Step 4: Generate an instruction-update PR

> **Lesson 1 of 2 · Governed corrections** · Step 4 of 10

### 📖 Theory: Propose changes, never push them

Automation should never write directly to the default branch. Instead it opens a **candidate pull request** that a human can read, question, and revert.

Two boundaries matter here. The instruction file has a maintainer-controlled section that automation must never touch, and a learned-rules section it may extend. Rendering happens strictly inside those markers. Alongside the instruction change, the workflow writes the candidate, its fingerprint, and an audit entry, so the change carries its own history.

> [!NOTE]
> The workflow also records provenance linking back to the original comment, which is what makes review and rollback possible later.

### ⌨️ Activity: Allow Actions to open pull requests

The proposal workflow opens a pull request on your behalf, so GitHub Actions needs permission to do that.

1. In your repository, select **Settings** > **Actions** > **General**.

1. Under **Workflow permissions**, select **Read and write permissions**.

1. Select **Allow GitHub Actions to create and approve pull requests**.

1. Select **Save**.

### ⌨️ Activity: Open a reviewable candidate pull request

1. Open `.github/workflows/propose-instruction.yml`.

1. Confirm it verifies trust, parses the comment, and validates the candidate before writing anything.

1. Confirm it creates a dedicated branch instead of committing to the default branch.

1. Confirm it renders instructions, writes audit and fingerprint data, and opens a pull request.

1. Preview the candidate the pipeline would produce, then commit and push.

   ```bash
   npm run simulate
   npm run check-step -- 4
   git commit --allow-empty -am "Generate an instruction-update pull request"
   git push
   ```

1. Mona will check your work and share the next step.

<details>
<summary><b>Having trouble? 🤷</b></summary><br/>

- Run `npm run simulate` to inspect the candidate the pipeline would produce.
- If the pull request is not created, recheck the **Workflow permissions** settings above.
- Never replace the branch and pull request flow with a direct push.

</details>
