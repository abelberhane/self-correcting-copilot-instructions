## Step 1: See how instructions work today

> **Lesson 1 of 2 · Teach the repository something** · Step 1 of 8

### 📖 Theory: Instructions are Copilot's memory of your preferences

Before Copilot answers anything in this repository, it reads `.github/copilot-instructions.md`. Whatever is written there quietly steers every suggestion it makes — which libraries to reach for, how to name things, whether to write tests.

That file is the difference between correcting Copilot *once* and correcting it *every time*.

This repository keeps the file in two sections, and the difference between them is the whole exercise:

| Section | Who writes it | How it changes |
| --- | --- | --- |
| **Maintainer-controlled** | You, by hand | You edit the file directly |
| **Learned rules** | Automation | Only through a reviewed pull request |

Right now you only have the first one. You open the file, you type, you commit. That works, and it is exactly what most teams do.

The catch is that it relies on somebody remembering. A reviewer notices a problem, explains it in a comment, and that knowledge lives only in the comment. By the next pull request it is gone.

### ⌨️ Activity: Let automation open pull requests

Every proposal in this exercise arrives as a pull request opened by automation. New repositories forbid that by default, so you grant it once, deliberately.

1. Go to **Settings → Actions → General**.

1. Under **Workflow permissions**, select **Allow GitHub Actions to create and approve pull requests**.

1. Check that **Read repository contents and packages permissions** is also selected. If it is not, select it now — then select **Save**.

Notice what you did *not* grant. Workflows still get read-only access by default; each one asks for exactly the permissions it needs. You allowed automation to *propose*, not to *write*.

> [!NOTE]
> If the checkbox is greyed out, the restriction is set at the organization level, not on your repository. Open the same **Settings → Actions → General** page for the organization, enable it there, then come back and refresh this page.

### ⌨️ Activity: Add a rule by hand

Start with the manual approach, so you can feel what the automation replaces.

> [!NOTE]
> You can finish this entire exercise in your browser. Nothing here requires cloning the repository.

1. Open `.github/copilot-instructions.md` in your repository and select the pencil icon (**Edit this file**).

1. Read the **Maintainer-controlled rules** section. Notice that it says automation must not modify it.

1. Add one rule of your own to that section, as a new bullet. For example:

   ```md
   - Prefer the built-in `node:test` runner over external test frameworks.
   ```

1. Leave the **Learned rules** section completely alone. The `<!-- learned-rules:start -->` and `<!-- learned-rules:end -->` markers are a boundary the automation relies on.

1. Select **Commit changes…**. Choose **Create a new branch for this commit**, name the branch `teach-the-repo`, and commit.

   You will keep using `teach-the-repo` for the rest of the exercise. Checks run on pushes to a branch, never to `main`.

1. Mona will check your work and share the next step.

<details>
<summary><b>Prefer the command line? 💻</b></summary><br/>

The web editor is the supported path, but the same change works locally:

```bash
git switch -c teach-the-repo
# edit .github/copilot-instructions.md
git commit -am "Add a maintainer rule"
git push -u origin teach-the-repo
```

</details>

<details>
<summary><b>Having trouble? 🤷</b></summary><br/>

- Add your rule **above** the `<!-- learned-rules:start -->` marker, under the maintainer heading.
- Keep the existing maintainer rules. The check looks for your rule *in addition to* the ones already there.
- Write it as a markdown bullet starting with `- `.
- If the check says your rule landed in the wrong section, move it above the `learned-rules:start` marker and push again.
- Checks run on pushes to a branch, never to `main`. If nothing happened, confirm you committed to `teach-the-repo`.
- **"GitHub Actions is not permitted to create or approve pull requests"** means the setting above is still off. Turn it on, then re-run the failed job from the **Actions** tab.
- **Setting greyed out?** Your organization disallows it. Enable it in the organization's **Settings → Actions → General** first.

</details>
