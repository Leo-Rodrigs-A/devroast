# UI Components Agent Rules

## Scope
- This file applies to everything under `src/components/ui`.

## Source of truth
- Mirror the design from Pencil MCP components and variants.
- If a variant does not exist in Pencil for that component, do not invent one by default.

## Coding rules
- Use named exports only.
- Reusable components must extend native HTML props when relevant.
- Prefer `ComponentProps<"tag">` for native prop inheritance in React components.
- Keep component APIs minimal and predictable.
- Use `tailwind-variants` to define variants and `VariantProps` typing.
- Use `tailwind-merge` (via `cn`) for safe class overrides.

## Styling rules
- Use global theme tokens (`var(--...)`) instead of hardcoded values whenever a token exists.
- In Tailwind v4, prefer token utilities using `utility-(--token)` syntax over bracket `var(...)` syntax.
- For ambiguous utilities like `text-*`, use type hints when needed (e.g. `text-(color:--text-primary)`).
- Keep typography consistent with project standard (JetBrains Mono).
- Preserve spacing and sizing from Pencil as closely as possible.

## Validation
- Run `pnpm lint` after edits in this folder.
