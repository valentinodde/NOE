# Dropdown

> Dependencies: `colors.md`, `radius.md`, `shadows.md`

Dropdowns are used sparingly — prefer **button groups** for 2–4 options and **tab panels** for mode switching. Use dropdowns for select-style inputs or long option lists.

## Menu Container

```css
position: absolute;
z-index: 20;
margin-top: 4px;
width: 192px;
border-radius: 12px;
overflow: hidden;
background: #ffffff;
border: 1px solid #e0e2eb;           /* surface-highest */
box-shadow: 0 4px 16px rgba(0,0,0,0.08);    /* tooltip shadow level */
```

## Menu Items

```css
/* Item button */
width: 100%;
display: flex;
align-items: center;
gap: 8px;
padding: 10px 16px;
font-size: 0.875rem;
color: var(--color-on-surface);
text-align: left;
background: transparent;
border: none;
cursor: pointer;
transition: background-color 150ms;

/* Item — hover */
background: #f1f3fc;    /* surface-low */

/* Icon (emoji or SVG) */
font-size: 1rem;
flex-shrink: 0;
```

No individual border-radius on items — hover covers the full row width.

## Divider between groups

```css
height: 1px;
margin: 4px 0;
background: #e8eaf3;    /* surface-high */
```

## Trigger Button

Ghost-style with a chevron:

```css
display: flex;
align-items: center;
gap: 8px;
padding: 10px 16px;
font-size: 0.875rem;
font-weight: 500;
color: var(--color-on-surface);
background: #f1f3fc;    /* surface-low */
border-radius: 12px;
border: none;
cursor: pointer;
transition: background-color 150ms;

/* Trigger — hover */
background: #e8eaf3;    /* surface-high */
```

Chevron SVG: `M3 4.5l3 3 3-3`, `stroke="currentColor"`, `stroke-width="1.5"`, `stroke-linecap="round"`.

## Rules

- **Radius:** `border-radius: 12px` on menu container — never `9999px`.
- **No individual radius** on menu items — hover is flat (full-width).
- **Position:** `position: absolute` relative to a `position: relative` trigger wrapper.
- **Scrollable lists:** `max-height: 192px; overflow-y: auto` when more than ~6 items.
- **Dismiss:** click outside (event listener on `document`) or press Escape.
