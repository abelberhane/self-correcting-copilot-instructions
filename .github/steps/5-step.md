## Step 5: Block unsafe candidates

> **Lesson 1 of 2 · Governed corrections** · Step 5 of 10

### 📖 Theory: Most proposals should be rejected

A safe pipeline is defined by what it refuses. Validation must deterministically reject secrets, prompt injection, duplicates, contradictions, overfit rules, missing provenance, and anything that tries to change governance.

That last category is the most important. A candidate must never be able to modify workflows, validators, `CODEOWNERS`, permissions, or the auto-merge policy. If instructions could rewrite their own guardrails, every other control becomes decorative.

> [!IMPORTANT]
> A candidate that could edit its own guardrails is the highest-severity failure in this design. `PROTECTED_PATHS` in `scripts/lib.js` is what prevents it.

> [!NOTE]
> Each unsafe fixture in `test/fixtures/unsafe/` represents one real attack or mistake. They should all fail, each for its own specific reason.

### ⌨️ Activity: Prove unsafe corrections are refused

1. Review the fixtures in `test/fixtures/unsafe/`.

1. Open `validateCandidate` in `scripts/lib.js`.

1. Confirm secrets, injection, and governance changes are each detected.

1. Confirm duplicates, contradictions, overfit wording, and missing provenance are rejected.

1. Run the full suite, then commit and push.

   ```bash
   npm test
   npm run check-step -- 5
   git commit --allow-empty -am "Block unsafe candidates"
   git push
   ```

1. Mona will check your work and share the next step.

<details>
<summary><b>Having trouble? 🤷</b></summary><br/>

- Read `docs/threat-model.md` to see which control each fixture targets.
- Fix the specific validator that missed the case rather than adding a broad catch-all.
- The failing test name tells you exactly which fixture slipped through.

</details>
