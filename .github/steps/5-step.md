## Step 5: Decide what can merge itself

> **Lesson 2 of 2 · Let it merge itself** · Step 5 of 8

### 📖 Theory: Not every correction deserves the same scrutiny

Lesson 1 worked, but it asked you to review a pull request whose entire content was four lines you wrote yourself. Do that twenty times and you will start rubber-stamping — which is worse than not reviewing at all, because now the ceremony provides false comfort.

The fix is not "review less carefully." It is to decide **in advance, in writing**, which corrections are boring enough to merge themselves.

That decision lives in `.github/auto-merge-policy.yml`, and it is deliberately mechanical. The same correction always gets the same answer, with no model call and nothing to argue about:

| Signal | Why it matters |
| --- | --- |
| **Category** | `SECURITY`, `ARCH`, and `PROCESS` change how the team operates |
| **Scope** | `path:src/` teaches a corner; `repository` rewrites everything |
| **Length** | A rule too long to skim is too long to approve unread |
| **Action** | Adding is reversible; superseding and revoking change existing guidance |

> [!NOTE]
> Everything that is not provably low risk still goes to a human. The policy narrows what automation may do; it never widens it.

### ⌨️ Activity: Turn on the policy and see what it decides

1. Open `.github/auto-merge-policy.yml` and select the pencil icon to edit it.

1. Turn the policy on.

   ```yaml
   enabled: true
   ```

1. Confirm the guardrails below it. `allowed_risk` must stay `low`, and `blocked_categories` must contain `ARCH`, `PROCESS`, and `SECURITY`.

   Read them as a sentence: *only low-risk corrections may merge themselves, and never ones that change architecture, process, or security.*

1. Select **Commit changes…**, commit to the existing `teach-the-repo` branch, then open a pull request from `teach-the-repo` into `main` and merge it.

   Candidate pull requests branch from `main`, so a policy that exists only on your working branch would never apply to them.

1. Mona will check your work and share the next step.

<details>
<summary><b>Want to preview the decisions? 💻</b></summary><br/>

If you are working in a Codespace or a local clone, you can see exactly how the policy classifies each sample correction:

```bash
npm run decide
```

Before you enable the policy every row says disabled. Afterwards you should see the split: narrow rules auto-merge, while repository-wide mandates, security rules, and process changes go to human review. This preview is optional and is not graded.

</details>

<details>
<summary><b>Having trouble? 🤷</b></summary><br/>

- Change only `enabled`. The other values are already calibrated for this exercise.
- If the check still reports the policy as disabled, confirm `enabled: true` is at the top level of the file and that `allowed_risk` is `low`.
- Removing a category from `blocked_categories` makes that category eligible for automation. The check will fail if `ARCH`, `PROCESS`, or `SECURITY` is missing.
- The policy file itself is a protected path, so no correction can ever edit it. That is deliberate.
- Merging to `main` matters here. The next step checks that your policy actually landed there.

</details>
