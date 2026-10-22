# Inputs

> Dependencies: `colors.md`, `radius.md`

## Core Specs — Outlined with Focus Ring

Clean transparent input: no background fill in the default state. A fine perimeter border defines the field; on focus, a navy outline ring appears.

```css
/* Input — default */
width: 100%;
background: transparent;
border: 1px solid #e0e2eb;
border-radius: 10px;
padding: 12px 16px;
font-size: 1rem;
color: var(--color-on-surface);
outline: none;
transition: border-color 180ms, box-shadow 180ms;

/* Input — focus */
border-color: #000a43;
box-shadow: 0 0 0 3px rgba(0,10,67,0.07);

/* Input — error */
border-color: #f97316;
box-shadow: 0 0 0 3px rgba(249,115,22,0.08);

/* Input — disabled */
opacity: 0.45;
cursor: not-allowed;
```

## Label

Always the **metadata label** style — uppercase, letter-spaced, small:

```css
font-size: 0.6875rem;
font-weight: 600;
color: var(--color-on-surface-var);
text-transform: uppercase;
letter-spacing: 0.1em;
display: block;
margin-bottom: 0;     /* gap handled by form group */
```

## Helper Text

```css
/* Character counter (no error) */
font-size: 0.6875rem;
color: var(--color-on-surface-var);
opacity: 0.5;

/* Error message */
font-size: 0.75rem;
color: #f97316;
```

## Form Group

```css
display: flex;
flex-direction: column;
gap: 8px;     /* between label, input, helper */
```

## States Summary

| State | Background | Border | Shadow |
|---|---|---|---|
| Default | transparent | `1px solid #e0e2eb` | none |
| Focus | transparent | `1px solid #000a43` | `0 0 0 3px rgba(0,10,67,0.07)` |
| Error | transparent | `1px solid #f97316` | `0 0 0 3px rgba(249,115,22,0.08)` |
| Disabled | transparent | `1px solid #e0e2eb` | none + opacity 0.45 |

## Rules

- **Radius:** `10px` — slightly tighter than the 12px control radius, giving inputs a refined feel.
- **No background fill** — the field blends into its card surface; the border alone defines the boundary.
- **No outline** — visual feedback is the border-color change + focus ring only.
- **Full width** — inputs always fill their container.
- **Padding:** `12px 16px` — comfortable touch target without being heavy.
- Label `for` must match input `id`.
