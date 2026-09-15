## Step 3: Parse a strict command

> **Lesson 1 of 2 · Governed corrections** · Step 3 of 10

### 📖 Theory: Treat every comment as untrusted input

A comment is attacker-controlled text. It must **never** reach a shell, a template evaluator, or dynamic code execution. This parser reads the comment as data and nothing else.

Strictness is a feature. The command must be the first line, each field must match a documented `key: value` pattern, duplicates are rejected, and unknown fields fail loudly. A precise error is safer and more teachable than a permissive parser that quietly guesses what someone meant.

> [!IMPORTANT]
> Never execute comment content. The parser matches documented fields with regular expressions and ignores everything else.

> [!NOTE]
> Rejecting an unknown field like `shell:` is what stops a crafted comment from smuggling extra instructions into the pipeline.

### ⌨️ Activity: Harden the correction parser

1. Open `scripts/lib.js` and find `parseCorrection`.

1. Confirm the first line must be exactly `/copilot-learn`.

1. Confirm only fields in `ALLOWED_FIELDS` are accepted.

1. Confirm malformed lines and duplicate fields raise a clear error.

1. Verify your work locally, then commit and push.

   ```bash
   npm test
   npm run check-step -- 3
   git commit --allow-empty -am "Harden the correction parser"
   git push
   ```

1. Mona will check your work and share the next step.

<details>
<summary><b>Having trouble? 🤷</b></summary><br/>

- Use `.github/learning-config.yml` as the source of truth for allowed fields.
- Run `npm test` to see which parsing case fails.
- Do not add a catch-all branch; the grader expects unknown input to fail.

</details>
