# 🔀 Step 4: Generate an instruction-update PR

> **Lesson 1 · Governed corrections** · Step 4 of 10

### 📖 Theory: Propose changes, never push them

Automation should never write directly to the default branch. Instead it opens a **candidate pull request** that a human can read, question, and revert.

Two boundaries matter here. The instruction file has a maintainer-controlled section that automation must never touch, and a learned-rules section it may extend. Rendering happens strictly inside those markers. Alongside the instruction change, the workflow writes the candidate, its fingerprint, and an audit entry, so the change carries its own history.

> [!NOTE]
> The workflow also records provenance linking back to the original comment, which is what makes review and rollback possible later.

### ⌨️ Activity: Open a reviewable candidate pull request

1. Open `.github/workflows/propose-instruction.yml`.
2. Confirm it verifies trust, parses the comment, and validates the candidate before writing anything.
3. Confirm it creates a dedicated branch instead of committing to the default branch.
4. Confirm it renders instructions, writes audit and fingerprint data, and opens a pull request.
5. Run `npm run check-step -- 4` locally.
6. Commit and push your change.

### ✅ How this step is graded

| | |
|---|---|
| 🚦 **Trigger** | Push workflow or script changes, or post a valid `/copilot-learn` comment. |
| 🔍 **Check** | The grader confirms the workflow branches, renders, records an audit entry, and creates a pull request. |
| 💬 **Feedback** | A failed run updates the exercise issue with the specific missing control and the file to fix. |

<details>
<summary><b>Having trouble? 🤷</b></summary><br/>

- Run `npm run simulate` to inspect the candidate the pipeline would produce.
- If the pull request is not created, confirm Actions has read and write permissions and may create pull requests.
- Never replace the branch and pull request flow with a direct push.

</details>
