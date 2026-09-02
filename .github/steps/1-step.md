# 🔐 Step 1: Configure trusted actors and explicit signals

> **Lesson 1 · Governed corrections** · Step 1 of 10

### 📖 Theory: Identity is the first control

Automation that edits its own instructions must know **who** is allowed to teach it. Anyone can add a label or copy a phrase, so labels and wording alone are not proof of identity. GitHub reports an immutable **author association** on every comment, such as `OWNER` or `MEMBER`, and that is what you trust.

The second control is an **explicit signal**. Instead of guessing intent from ordinary review conversation, this exercise only reacts to a deliberate `/copilot-learn` command. Explicit beats inferred: a maintainer must clearly opt in before anything is proposed.

> [!NOTE]
> A correction is only accepted on a pull request labeled `copilot-authored`. That keeps the pipeline scoped to Copilot-associated work instead of every comment in the repository.

### ⌨️ Activity: Configure who can teach the repository

1. Open `.github/learning-config.yml`.
2. Confirm `command` is exactly `/copilot-learn`.
3. Confirm `trusted_associations` includes `OWNER` and `MEMBER`.
4. Review `allowed_fields` so only documented fields are ever parsed.
5. Run `npm run check-step -- 1` locally.
6. Commit and push your change.

### ✅ How this step is graded

| | |
|---|---|
| 🚦 **Trigger** | Push a change to `.github/learning-config.yml`. |
| 🔍 **Check** | The grader loads your configuration and confirms a trusted maintainer comment is accepted while the exact command is required. |
| 💬 **Feedback** | A failed run updates the exercise issue with the specific missing control and the file to fix. |

<details>
<summary><b>Having trouble? 🤷</b></summary><br/>

- Confirm the comment author is `OWNER` or `MEMBER`, or is listed in `trusted_logins`.
- Remember that a label never establishes identity, so removing the association check will fail the grader.
- The command must match exactly, including the leading slash.

</details>
