# 🛡️ Step 5: Block unsafe candidates

> **Lesson 1 · Governed corrections** · Step 5 of 10

### 📖 Theory: Most proposals should be rejected

A safe pipeline is defined by what it refuses. Validation must deterministically reject secrets, prompt injection, duplicates, contradictions, overfit rules, missing provenance, and anything that tries to change governance.

That last category is the most important. A candidate must never be able to modify workflows, validators, `CODEOWNERS`, permissions, or the auto-merge policy. If instructions could rewrite their own guardrails, every other control becomes decorative.

> [!NOTE]
> Each unsafe fixture in `test/fixtures/unsafe/` represents one real attack or mistake. They should all fail, each for its own specific reason.

### ⌨️ Activity: Prove unsafe corrections are refused

1. Review the fixtures in `test/fixtures/unsafe/`.
2. Open `validateCandidate` in `scripts/lib.js`.
3. Confirm secrets, injection, and governance changes are each detected.
4. Confirm duplicates, contradictions, overfit wording, and missing provenance are rejected.
5. Run `npm test`, then `npm run check-step -- 5`.
6. Commit and push your change.

### ✅ How this step is graded

| | |
|---|---|
| 🚦 **Trigger** | Push validator, test, or fixture changes. |
| 🔍 **Check** | The grader runs the full test suite, so the valid fixture must pass while every unsafe fixture fails. |
| 💬 **Feedback** | A failed run updates the exercise issue with the specific missing control and the file to fix. |

<details>
<summary><b>Having trouble? 🤷</b></summary><br/>

- Read `docs/threat-model.md` to see which control each fixture targets.
- Fix the specific validator that missed the case rather than adding a broad catch-all.
- The failing test name tells you exactly which fixture slipped through.

</details>
