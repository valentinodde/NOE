# Buttons

> Dependencies: `colors.md`, `radius.md`

## Core Specs

```css
border-radius: 12px;
font-family: Inter, sans-serif;
font-weight: 600;        /* primary */
font-weight: 500;        /* secondary / ghost */
box-shadow: none;        /* no shadow on buttons */
border: none;            /* primary: no border */
cursor: pointer;
```

## Variants

### Primary (navy gradient)

The default action button.

```css
background: linear-gradient(135deg, #000a43 0%, #051b71 100%);
color: #ffffff;
font-size: 0.875rem;
font-weight: 600;
letter-spacing: 0.03em;
padding: 12px 24px;
border-radius: 12px;
border: none;
transition: opacity 150ms;

/* hover */
opacity: 0.8;

/* disabled */
opacity: 0.3;
cursor: not-allowed;
```

Full-width variant (form submit):
```css
width: 100%;
padding: 14px 24px;
```

### Ghost / Text Button

For back navigation, secondary inline actions.

```css
background: none;
border: none;
padding: 0;
font-size: 0.875rem;
font-weight: 500;
color: var(--color-on-surface-var);
cursor: pointer;
transition: color 150ms;

/* hover */
color: var(--color-on-surface);
```

### Nav Link Button

For top navbar navigation items.

```css
background: none;
border: none;
border-bottom: 1.5px solid transparent;
padding-bottom: 2px;
font-size: 0.75rem;
font-weight: 500;
cursor: pointer;
transition: color 150ms, border-bottom-color 150ms;

/* active state */
color: #000a43;
border-bottom-color: #000a43;

/* inactive state */
color: #9b8ab8;
```

## Sizes

| Size | Padding | Font size |
|---|---|---|
| Small | 8px 16px | 0.75rem |
| Default | 12px 24px | 0.875rem |
| Large (form submit) | 14px 24px | 0.875rem |

## Icons in Buttons

```css
display: inline-flex;
align-items: center;
gap: 8px;

/* icon */
width: 16px;
height: 16px;
flex-shrink: 0;
```

## Rules

- **Never `border-radius: 9999px`** on buttons — always `12px`.
- **No border** on primary button — gradient background only.
- **Disabled = opacity 0.3** — never hide or reshape the button.
- `type="submit"` for form submission, `type="button"` for all other buttons.
- Arrow characters (→, ←) in label text for directional CTAs — not separate icon elements.
