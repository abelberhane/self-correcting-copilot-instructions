# 🔍 Step 3: Parse a strict command

> **Lesson 1 · Governed corrections** · Step 3 of 10

### 📖 Theory: Treat every comment as untrusted input

A comment is attacker-controlled text. It must **never** reach a shell, a template evaluator, or dynamic code execution. This parser reads the comment as data and nothing else.

Strictness is a feature. The command must be the first line, each field must match a documented `key: value` pattern, duplicates are rejected, and unknown fields fail loudly. A precise error is safer and more teachable than a permissive parser that quietly guesses what someone meant.

> [!NOTE]
> Rejecting an unknown field like `shell:` is what stops a crafted comment from smuggling extra instructions into the pipeline.

### ⌨️ Activity: Harden the correction parser

1. Open `scripts/lib.js` and find `parseCorrection`.
2. Confirm the first line must be exactly `/copilot-learn`.
3. Confirm only fields in `ALLOWED_FIELDS` are accepted.
4. Confirm malformed lines and duplicate fields raise a clear error.
5. Run `npm run check-step -- 3` locally.
6. Commit and push your change.

### ✅ How this step is graded

| | |
|---|---|
| 🚦 **Trigger** | Push a change to `scripts/lib.js` or the test fixtures. |
| 🔍 **Check** | The grader parses the valid correction successfully and confirms an unknown field is rejected. |
| 💬 **Feedback** | A failed run updates the exercise issue with the specific missing control and the file to fix. |

<details>
<summary><b>Having trouble? 🤷</b></summary><br/>

- Use `.github/learning-config.yml` as the source of truth for allowed fields.
- Run `npm test` to see which parsing case fails.
- Do not add a catch-all branch; the grader expects unknown input to fail.

</details>
