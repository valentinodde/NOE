# Cards

> Dependencies: `colors.md`, `radius.md`, `shadows.md`, `typography.md`

Three card tiers, distinguished by background tint and shadow intensity.

## Tier 1 — Section Card (primary container)

Groups a major page section.

```css
background: #ffffff;        /* surface-lowest */
border-radius: 16px;
padding: 28px;
box-shadow: 0 0 40px rgba(0,10,67,0.06);
/* no border */
```

Always open with a SectionTitle (see `typography.md`).

## Tier 2 — Content Card (form, search, page header)

Top-level card used for search forms, auth screens, or the page entity header.

```css
/* Form / search card */
background: #f1f3fc;        /* surface-low */
border-radius: 16px;
padding: 32px;
box-shadow: 0 0 48px rgba(0,10,67,0.04);

/* Page header card (white, prominent) */
background: #ffffff;
border-radius: 16px;
overflow: hidden;
box-shadow: 0 0 48px rgba(0,10,67,0.06);
```

## Tier 3 — Data Sub-Card (inner card)

Nested inside section cards or panel tab content areas.

```css
/* Standard */
background: #ffffff;
border-radius: 12px;
padding: 20px;
box-shadow: 0 1px 4px rgba(0,0,20,0.05);

/* Mini (metric tile, indicator) */
background: #ffffff;
border-radius: 12px;
padding: 12px;
box-shadow: 0 1px 3px rgba(0,0,20,0.06);
display: flex;
flex-direction: column;
gap: 8px;
```

## Accent Panel (callout within a card)

Tinted informational block — not a card tier, but a highlighted section.

```css
/* Navy tint (default informational) */
background: rgba(5,27,113,0.05);
border: 1px solid rgba(5,27,113,0.10);
border-radius: 12px;
padding: 16px;
display: flex;
align-items: flex-start;
gap: 10px;

/* Stronger tint (metric block header) */
background: rgba(5,27,113,0.06);
border: 1px solid rgba(5,27,113,0.12);
border-radius: 12px;
padding: 12px;

/* Status-tinted variant (color matched to context) */
background: rgba(251,146,60,0.07);    /* e.g. warning */
border: 1px solid rgba(251,146,60,0.20);
border-radius: 12px;
padding: 12px;
```

## Color-Coded Card (risk level / category)

Left border conveys semantic level:

```css
background: #f1f3fc;        /* surface-low */
border-radius: 12px;
overflow: hidden;
box-shadow: 0 0 24px rgba(0,10,67,0.04);
border-left: 4px solid <semantic-color>;
```

## Interactive Card (clickable link)

```css
/* Default */
background: #f1f3fc;
border-radius: 12px;
padding: 16px;
box-shadow: 0 0 16px rgba(0,10,67,0.03);
display: flex;
align-items: flex-start;
gap: 16px;
cursor: pointer;
transition: background-color 150ms;
text-decoration: none;

/* Hover */
background: #e8eaf3;    /* surface-high */
```

No shadow change, no border change on hover — tonal background shift only.

## Card Header Strip (recessed label area)

Used at the top of panel tab wrappers:

```css
background: #e8eaf3;    /* surface-high */
padding: 16px 20px 8px 20px;

/* Label inside */
font-size: 0.6875rem;
font-weight: 600;
color: var(--color-on-surface-var);
text-transform: uppercase;
letter-spacing: 0.1em;
```

## Rules

- **No explicit borders** on tier 1/2 cards — tonal background + shadow provides depth.
- **Never place a white card on a white background** — always ensure a surface contrast step.
- Non-interactive tier 1 cards: no hover styles.
- Tier 3 sub-cards: white background, minimal shadow.
- Never mix `overflow: hidden` on tier 1 cards unless the card contains tab bars that need edge clipping.
