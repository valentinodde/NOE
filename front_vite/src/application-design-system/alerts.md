# Alerts & Info Panels

> Dependencies: `colors.md`, `radius.md`

Alerts are **tinted inline panels** — not modal overlays. They appear inside cards to provide contextual commentary, warnings, or key insights. They always contain an icon and body text.

## Core Layout

```css
border-radius: 12px;
padding: 12px;                 /* or 16px for larger alerts */
display: flex;
align-items: flex-start;
gap: 10px;
border-width: 1px;
border-style: solid;

/* Icon */
font-size: 0.875rem;
flex-shrink: 0;
margin-top: 2px;               /* optical alignment with first text line */

/* Body text */
font-size: 0.75rem;            /* or 0.8125rem for important callouts */
color: var(--color-on-surface-var);
line-height: 1.625;
```

## Variants

### Informational (navy tint — default)
```css
background: rgba(5,27,113,0.05);
border-color: rgba(5,27,113,0.10);
```
Icon: 💡 or ℹ️

### Warning (amber tint)
```css
background: rgba(251,146,60,0.07);
border-color: rgba(251,146,60,0.20);
```
Icon: ⚠️ or ☀️

### Danger / High risk (red tint)
```css
background: rgba(239,68,68,0.06);
border-color: rgba(239,68,68,0.20);
```
Icon: ⚖️

### Success / Low risk (green tint)
```css
background: rgba(34,197,94,0.07);
border-color: rgba(34,197,94,0.22);
```
Icon: ✅

### Data / water (cyan tint)
```css
background: rgba(0,151,214,0.07);
border-color: rgba(0,151,214,0.20);
```
Icon: 💧

## Emphasis in Alert Body

Use `<strong>` with `font-weight: 600; color: var(--color-on-surface)` within `var(--color-on-surface-var)` body text. Creates contrast without changing the panel color.

## Rules

- **No heading element** — alerts use `<p>`. Bold lead sentence serves as the heading.
- **Always include an icon** — serves as alignment anchor and semantic signal.
- **No full-width blocking banners** — danger alerts are subtle tinted panels.
- **No left color bar** on alerts — that pattern is reserved for risk cards. Alerts use a full-perimeter border + background tint.
