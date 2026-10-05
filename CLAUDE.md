# portfolio, rules for AI assistants

Personal portfolio for mmgonnar.com. Next.js App Router, TypeScript, Tailwind v4,
i18next, Zustand. The API lives in the separate portfolio_backend repo.

## 1. Reuse before you build

Always check for an existing shared component before writing new markup.
Shared UI lives in `features/ui/components/`. Read that folder first.

Current shared components: NeobrutalistButton, NeobrutalistCard, Modal, CloseButton,
Label, ContentSection, TerminalBanner, Input, BriefInput, OptionCard, Skeleton,
FooterDropdrawer, and the dropdrawer primitives.

Before adding any button, input, label, card, modal or section heading, confirm none
of the above already covers it. Copying a class string from another file is a signal
that you are duplicating a component.

## 2. If nothing fits, propose, do not hand-build

Do not silently invent one-off markup. Stop and propose a reusable component:

- name and file path
- props
- which existing places would adopt it
- effort estimate

Then wait for Mariela to approve before creating it. A component used in two places
is a shared component, not a copy.

## 3. Where things live

```
/app                      routes only
/features/<feature>/      components/, types/types.ts, utils/, hooks/, assets/
/features/ui/components/  shared, cross-feature UI
/hooks                    cross-feature hooks
/lib                      helpers, cn lives in lib/utils.ts
/utils                    app helpers, i18n config, translations
/context                  providers
```

`cn` comes from `@/lib/utils`. Use only that one in new code. `utils/functions.ts`
also exports a `cn` and most existing files still import it; that copy is legacy and
gets migrated in plan task 5.3. Do not add new imports of it.

Naming:

- component files kebab-case, for example `file-dropzone.tsx`
- the exported component PascalCase
- type files `types.ts`, plural
- hooks `useThing.ts`

Import shared UI directly from `@/features/ui/components/<name>`. Never re-export a
shared component from another feature's `index.ts`, and never import one through a
feature that does not own it.

## 4. i18n

Every user-facing string goes through `utils/translations.ts`. No hardcoded copy in
components, including placeholders, alt text and aria labels.

Keys must exist at the same path in both EN and ES. If you add `contact.briefCta` to
EN, add `contact.briefCta` to ES in the same change, at the same nesting depth. A key
present in one locale and missing or differently nested in the other renders the raw
key string to the user.

When you add a key, verify both locales before committing.

Shared components receive label strings as props. They do not call `t()` themselves,
so key paths stay with the feature that owns them.

## 5. Git identity

Personal repo. Everything must be authored by mmgonnar.

Before any commit:

```sh
git config user.name     # must be mmgonnar
git config user.email    # must be the personal address
```

Before any push:

```sh
gh auth status           # active account must be mmgonnar
gh api user --jq .login  # confirms it
```

If the active account is the work one, stop and ask Mariela to run
`gh auth switch --user mmgonnar`. Always pass `--user`. A bare `gh auth switch`
toggles to the other account.

Never push, merge or force-push without explicit approval. Commit locally, then ask.
Never rewrite a commit that already carries the wrong identity, report it and wait.

## 6. Style

Never use the em dash, use commas.
