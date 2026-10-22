# Tooltips & Chart Popovers

> Dependencies: `colors.md`, `radius.md`, `shadows.md`

Tooltips in this design system are primarily **chart custom tooltips** (Recharts `content` prop). Browser-native tooltips are used sparingly for icon-only elements.

## Chart Custom Tooltip

Standard tooltip panel for data charts:

```css
/* Container */
background: #ffffff;
border: 1px solid #e0e2eb;
border-radius: 10px;
padding: 8px 12px;
box-shadow: 0 4px 16px rgba(0,0,0,0.08);
min-width: 170px;

/* Label (chart x-axis value) */
font-size: 0.75rem;
font-weight: 700;
color: #181c22;
margin-bottom: 6px;

/* Series row */
font-size: 0.75rem;
color: <seriesColor>;
margin-bottom: 2px;

/* Separator before total */
border-top: 1px solid #e8eaf3;    /* surface-high */
margin-top: 4px;
padding-top: 4px;

/* Total row */
font-size: 0.6875rem;
font-weight: 600;
color: #181c22;

/* Reference row */
font-size: 0.6875rem;
color: #94a3b8;
```

## Simple Text Tooltip (native title)

For icon-only buttons where a text label is needed:
```jsx
<button title="Description of action">
  <IconComponent />
</button>
```

Use `title` attribute only — no custom tooltip component for simple cases.

## Popover (inline expand)

No dedicated popover component. Use the **accordion pattern** from `accordion.md` for inline expandable content instead.

## Rules

- **Radius:** `10px` for chart tooltips — never `12px` (control radius) or `9999px` (pill).
- **White background only** for tooltips — never dark or brand-colored.
- **No arrows** on chart tooltips.
- **`minWidth`** should be set to prevent narrow layout: minimum 150–180px for multi-series tooltips.
- Keep tooltip content compact: label + 2–4 series rows + optional total. No prose text inside tooltips.
