## Step 1: Configure trusted actors and explicit signals

_Welcome to "Self-correcting Copilot instructions"! :wave:_

> **Lesson 1 of 2 · Governed corrections** · Step 1 of 10

### 📖 Theory: Identity is the first control

Automation that edits its own instructions must know **who** is allowed to teach it. Anyone can add a label or copy a phrase, so labels and wording alone are not proof of identity. GitHub reports an immutable **author association** on every comment, such as `OWNER` or `MEMBER`, and that is what you trust.

The second control is an **explicit signal**. Instead of guessing intent from ordinary review conversation, this exercise only reacts to a deliberate `/copilot-learn` command. Explicit beats inferred: a maintainer must clearly opt in before anything is proposed.

Here is the correction format you will build toward:

```md
/copilot-learn
category: TEST
rule: Always add or update unit tests when parser behavior changes.
rationale: The original implementation omitted tests.
scope: repository
```

> [!NOTE]
> A correction is only accepted on a pull request labeled `copilot-authored`. That keeps the pipeline scoped to Copilot-associated work instead of every comment in the repository.

### ⌨️ Activity: Configure who can teach the repository

1. Open this repository in a second browser tab so you can work while you read these instructions.

1. Create a working branch, because every step is graded from a branch other than `main`.

   ```bash
   git checkout -b build-the-pipeline
   ```

1. Open `.github/learning-config.yml` and confirm `command` is exactly `/copilot-learn`.

1. Confirm `trusted_associations` includes `OWNER` and `MEMBER`.

1. Review `allowed_fields` so only documented fields are ever parsed.

1. Verify your work locally, then commit and push.

   ```bash
   npm ci
   npm run check-step -- 1
   git commit --allow-empty -am "Configure trusted actors and explicit signals"
   git push -u origin build-the-pipeline
   ```

1. Mona will check your work and share the next step. Give it about 20 seconds, then refresh this page.

<details>
<summary><b>Having trouble? 🤷</b></summary><br/>

- Confirm the comment author is `OWNER` or `MEMBER`, or is listed in `trusted_logins`.
- Remember that a label never establishes identity, so removing the association check will fail the grader.
- The command must match exactly, including the leading slash.
- Nothing happened after you pushed? Open the **Actions** tab and confirm the **Step 1** workflow ran.

</details>
