# UI Components Agent Rules

## Scope
- This file applies to everything under `src/components/ui`.

## Source of truth
- Mirror the design from Pencil MCP components and variants.
- If a variant does not exist in Pencil for that component, do not invent one by default.

## Coding rules
- Use named exports only.
- Reusable components must extend native HTML props when relevant.
- Keep component APIs minimal and predictable.
- Use `tailwind-variants` to define variants and `VariantProps` typing.
- Use `tailwind-merge` (via `cn`) for safe class overrides.

## Styling rules
- Use global theme tokens (`var(--...)`) instead of hardcoded values whenever a token exists.
- Keep typography consistent with project standard (JetBrains Mono).
- Preserve spacing and sizing from Pencil as closely as possible.

## Validation
- Run `pnpm lint` after edits in this folder.
