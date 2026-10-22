# Pagination

> Dependencies: `colors.md`, `radius.md`

Pagination is used for long dataset tables. Keep it compact and unobtrusive.

## Container

```css
display: flex;
align-items: center;
gap: 4px;
margin-top: 16px;
```

No border, no wrapper. Just a flex row of buttons.

## Page Button

```css
width: 36px;
height: 36px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 12px;
font-size: 0.875rem;
font-weight: 500;
border: none;
cursor: pointer;
transition: background-color 150ms, color 150ms;

/* Active */
background: rgba(5,27,113,0.08);
color: #051b71;

/* Inactive */
background: transparent;
color: #44474f;

/* Inactive — hover */
background: #f1f3fc;    /* surface-low */
color: #181c22;
```

| State | Background | Color |
|---|---|---|
| Active | `rgba(5,27,113,0.08)` | `#051b71` |
| Inactive | transparent | `#44474f` |
| Hover (inactive) | `#f1f3fc` | `#181c22` |

## Prev / Next Buttons

```css
height: 36px;
padding: 0 12px;
display: flex;
align-items: center;
gap: 4px;
border-radius: 12px;
font-size: 0.875rem;
font-weight: 500;
color: var(--color-on-surface-var);
background: transparent;
border: none;
cursor: pointer;
transition: background-color 150ms, color 150ms;

/* Hover */
background: #f1f3fc;    /* surface-low */
color: var(--color-on-surface);

/* Disabled */
opacity: 0.3;
cursor: not-allowed;
pointer-events: none;
```

Label: `← Prev` / `Next →` — text with arrow character, not icon-only.

## Ellipsis

```css
width: 36px;
height: 36px;
display: flex;
align-items: center;
justify-content: center;
font-size: 0.875rem;
color: var(--color-on-surface-var);
```

## Rules

- **Radius:** `border-radius: 12px` on all pagination elements — never `9999px`.
- Active page: navy tint background, no bold.
- `gap: 4px` between items — tight, clean.
- Prev/next: text with arrow prefix/suffix, not icon-only.
- Always `opacity: 0.3; pointer-events: none` on Prev when on first page, Next when on last page.
