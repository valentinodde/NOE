# Avatars & Initials

> Dependencies: `colors.md`, `radius.md`

This design system does not feature prominent user avatar components. The closest equivalent is the **icon container** pattern (see `icon-shapes.md`). Use these patterns when an entity or user identity mark is needed.

## Logo Avatar (brand image)

For logos or photos displayed as an identity mark in the navbar:

```css
height: 36px;    /* h-9 */
width: auto;
transition: opacity 200ms;

/* hover */
opacity: 0.8;
```

## Emoji Category Avatar

Used to represent a sector, category, or entity type:

```css
width: 56px;
height: 56px;
border-radius: 12px;
background: #e0e2eb;          /* surface-highest */
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
flex-shrink: 0;
```

Sizes: see `icon-shapes.md` for the full size scale.

## Initials Avatar (text-based)

When no image or emoji is available — initials on a tinted background:

```css
width: 40px;
height: 40px;
border-radius: 12px;          /* NOT 9999px — circular avatars are not used here */
display: flex;
align-items: center;
justify-content: center;
font-size: 0.875rem;
font-weight: 700;
flex-shrink: 0;
background: rgba(5,27,113,0.08);
color: #051b71;
```

## Rules

- **No circular avatars** (`border-radius: 9999px`) for entity/category icons — use `border-radius: 12px` instead.
- **`flex-shrink: 0` always** — avatars must never compress in flex layouts.
- Image avatars: always provide `alt` text.
- Emoji avatars: decorative — wrap in `aria-hidden="true"` if needed.
