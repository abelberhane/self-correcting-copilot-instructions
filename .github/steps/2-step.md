# 🧾 Step 2: Complete the candidate schema

> **Lesson 1 · Governed corrections** · Step 2 of 10

### 📖 Theory: A closed schema makes review possible

Before automation edits instructions, the proposed change must be **data you can inspect**, not free-form prose. A JSON Schema gives every candidate the same shape: a stable ID, a category, a lifecycle state, provenance, and a fingerprint.

The schema is **closed** (`additionalProperties: false`), so nothing unexpected can ride along inside a candidate. Stable IDs and fingerprints are derived from the rule text, which means the same rule always produces the same identity and duplicates become detectable.

> [!NOTE]
> Provenance answers "who asked for this, and where?" Without it, a rule cannot be audited or rolled back later.

### ⌨️ Activity: Define the candidate contract

1. Open `schemas/candidate.schema.json`.
2. Confirm required fields include `id`, `category`, `rule`, `rationale`, `scope`, `state`, `action`, `provenance`, `fingerprint`, and `created_at`.
3. Confirm `additionalProperties` is `false` so unknown fields are rejected.
4. Review the conditional rule that requires `target_id` for `supersede` and `revoke`.
5. Run `npm run check-step -- 2` locally.
6. Commit and push your change.

### ✅ How this step is graded

| | |
|---|---|
| 🚦 **Trigger** | Push a change to `schemas/candidate.schema.json`. |
| 🔍 **Check** | The grader generates a candidate from the sample correction and validates it against your schema. |
| 💬 **Feedback** | A failed run updates the exercise issue with the specific missing control and the file to fix. |

<details>
<summary><b>Having trouble? 🤷</b></summary><br/>

- Compare your schema with `test/fixtures/valid/correction.json`.
- If validation fails, read the reported field path first; it names the exact property.
- Keep the enums aligned with the categories and states in `.github/learning-config.yml`.

</details>
