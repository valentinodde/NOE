# Tables

> Dependencies: `colors.md`, `radius.md`, `shadows.md`

Tables appear inside section cards, inheriting the surrounding tonal context.

## Wrapper

```css
overflow-x: auto;
border-radius: 12px;
box-shadow: 0 1px 4px rgba(0,0,20,0.05);    /* data shadow */
```

## Table element

```css
width: 100%;
text-align: left;
border-collapse: collapse;
```

## Table Head

```css
/* Header row */
background: #e8eaf3;    /* surface-high */

/* Header cell */
padding: 12px 20px;
font-size: 0.6875rem;
font-weight: 600;
color: var(--color-on-surface-var);
text-transform: uppercase;
letter-spacing: 0.1em;
white-space: nowrap;
border-bottom: 1px solid #e0e2eb;    /* surface-highest */
```

## Table Body

```css
/* Body row */
background: #ffffff;
border-bottom: 1px solid #e8eaf3;    /* surface-high */
transition: background-color 150ms;

/* Body row — hover (when rows are clickable) */
background: #f1f3fc;    /* surface-low */

/* Primary cell */
padding: 16px 20px;
font-size: 0.875rem;
color: var(--color-on-surface);

/* Secondary cell */
padding: 16px 20px;
font-size: 0.8125rem;
color: var(--color-on-surface-var);

/* Numeric cell */
padding: 16px 20px;
text-align: right;
font-variant-numeric: tabular-nums;
font-family: monospace;
```

## Rules

- **Radius:** `border-radius: 12px` on wrapper — not 16px.
- **Always `overflow-x: auto`** — never let a table overflow the page on small screens.
- **Column headers** use the metadata label style (uppercase, `letter-spacing: 0.1em`) — not sentence case.
- **Last row:** omit bottom border (`border-bottom: none`) to avoid a double border with the wrapper.
- **Row hover is optional** — use only when rows are clickable or selectable.
- Numeric cells: `text-align: right; font-variant-numeric: tabular-nums` for alignment.
