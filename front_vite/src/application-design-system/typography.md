# Typography

> Dependencies: `colors.md`

## Core Rules

- **Font family:** Inter, ui-sans-serif, system-ui, sans-serif — loaded globally, applied to `html/body`.
- **Antialiasing:** `-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale` on `html/body`.
- **Headings:** `font-weight: 700`, color `var(--color-primary)`, negative `letter-spacing`.
- **Body copy:** color `var(--color-on-surface)`, never brand color for paragraphs.
- **Labels / metadata:** `text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600; color: var(--color-on-surface-var)` — the **signature label pattern** for all field names and section subheaders.
- **Monospace:** `font-family: monospace` for codes, IDs, numbers that must align.
- **Semantic HTML:** `h1`→`h6` in order, never skip levels.

## Size Scale

Base: 16px = 1rem.

| Name | rem | px | Usage |
|---|---|---|---|
| 2xs | 0.5625rem | 9 | Micro labels (axis ticks, sub-captions) |
| xs | 0.625rem | 10 | Delta badge text, compact metadata |
| sm | 0.6875rem | 11 | Field labels (uppercase), nav secondary |
| base-sm | 0.75rem | 12 | Helper text, captions, tooltip content |
| base | 0.8125rem | 13 | Secondary body, list items, card descriptions |
| md | 0.875rem | 14 | Primary body text, button labels, tab labels |
| lg | 1rem | 16 | Card section titles |
| xl | 1.125rem | 18 | Data values, metric numbers |
| 2xl | 1.375rem | 22 | Prominent metrics in accordions |
| 3xl | 1.5rem | 24 | Large metric display |
| hero | 2.5rem | 40 | Page hero heading |

## Heading Styles

### Page Hero (h1)
```css
font-size: 2.5rem;
font-weight: 700;
color: var(--color-primary);
letter-spacing: -0.02em;
line-height: 1.15;
```

### Section / Card Title (h2)
```css
font-size: 1rem;
font-weight: 600;
color: var(--color-primary);
letter-spacing: -0.01em;
```
Always preceded by the **SectionTitle marker** (see below).

### Sub-heading (h3 level)
```css
font-size: 0.875rem;
font-weight: 600;
color: var(--color-on-surface);
```

### Metric display (large number)
```css
font-size: 1.375rem; /* or 1.5rem */
font-weight: 700;
color: var(--color-primary); /* or semantic color */
line-height: 1;
font-variant-numeric: tabular-nums;
```
Unit suffix: `font-size: 0.8125rem; font-weight: 500; color: var(--color-on-surface-var); margin-left: 4px`

## Body Text

| Context | Size | Weight | Color |
|---|---|---|---|
| Primary content | 0.875rem | 400 | `var(--color-on-surface)` |
| Secondary / supporting | 0.8125rem | 400 | `var(--color-on-surface-var)` |
| Small helper | 0.75rem | 400 | `var(--color-on-surface-var)` |
| Italic context note | 0.8125rem | 400 italic | `var(--color-on-surface-var)` |

Line height for body: `1.625`.

## Label Patterns

### Metadata label (field name above a value) — signature pattern
```css
font-size: 0.6875rem;
color: var(--color-on-surface-var);
text-transform: uppercase;
letter-spacing: 0.1em;
margin-bottom: 2px;
```
Use this for every data field label, section subheader, and form label.

### Section header label (recessed strip inside card)
```css
font-size: 0.6875rem;
font-weight: 600;
color: var(--color-on-surface-var);
text-transform: uppercase;
letter-spacing: 0.1em;
```

### SectionTitle pattern (h2 with cyan accent bar)
```css
/* Wrapper */
display: flex;
align-items: center;
gap: 12px;
margin-bottom: 20px;
padding-left: 4px;

/* Accent bar (vertical line) */
width: 4px;
height: 20px;
border-radius: 9999px;
background: var(--color-tertiary);  /* #0097d6 */
flex-shrink: 0;

/* Heading */
font-size: 1rem;
font-weight: 600;
color: var(--color-primary);
letter-spacing: -0.01em;
```
The cyan vertical bar is the canonical section title marker.

## Code / Monospace
```css
font-family: monospace;
font-size: 0.6875rem;
letter-spacing: 0.04em;
color: var(--color-on-surface-var);
```

## Links

- Inline: `color: var(--color-primary)`, `text-decoration: underline` on hover.
- External: same + 12×12px external-link SVG icon.
- Never use accent purple for links — always primary navy.

## Emphasis in Body

- `<strong>`: `font-weight: 600; color: var(--color-on-surface)` within `var(--color-on-surface-var)` paragraphs.
- `text-transform: uppercase` only for metadata labels — never for body emphasis.
