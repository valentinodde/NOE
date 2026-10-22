# Brand Identity

## Color Identity

The brand uses two distinct color axes:

| Axis | Primary | Secondary |
|---|---|---|
| **Deep** (data, headings, CTAs) | `#000a43` (navy) → `#051b71` (royal) | Gradient: `linear-gradient(135deg, #000a43 0%, #051b71 100%)` |
| **Spectrum** (accent, decorative) | `#863bff` (purple) → `#47bfff` (sky) | Gradient: `linear-gradient(135deg, #863bff, #47bfff)` |

The **deep axis** is used for all interactive elements (buttons, active tabs, links). The **spectrum axis** is decorative only (navbar pill, gradient dots, animated ripple rings).

## Logo Usage

- **Navbar:** image logo `height: 36px; width: auto` + tagline in `#9b8ab8`, uppercase, `letter-spacing: 0.08em`.
- **Empty states / errors:** icon container (`width: 48px; height: 48px; border-radius: 16px; background: #e8eaf3`) with an emoji — no logo.
- **Loading states:** animated spinner in `#051b71` — no logo.
- Keep clear space: never crop, distort, or place the logo on colored (non-white) backgrounds.
- If no logo image is available, use a plain text mark in `color: #000a43; font-weight: 700`.

## Tagline / Product Label

Short descriptor text next to or below the logo mark:

```css
font-size: 0.6875rem;
color: #9b8ab8;
text-transform: uppercase;
letter-spacing: 0.08em;
font-weight: 400;
```

## Accent Decorative Pill (product identity badge)

Used in the navbar to reinforce the product identity:

```css
/* Wrapper */
display: flex;
align-items: center;
gap: 6px;
padding: 6px 12px;
border-radius: 9999px;
background: linear-gradient(90deg, #f3eeff 0%, #e8f7ff 100%);
border: 1px solid #ddd6f8;

/* Gradient dot */
width: 6px;
height: 6px;
border-radius: 9999px;
background: linear-gradient(135deg, #863bff, #47bfff);
flex-shrink: 0;

/* Label text */
font-size: 0.6875rem;
color: #7e14ff;
font-weight: 500;
letter-spacing: 0.04em;
```

## Rules

- Deep navy gradient for all functional/interactive elements.
- Spectrum purple-to-cyan gradient for decorative/brand identity only — never on body text or data values.
- `#9b8ab8` muted lavender is exclusively for secondary navbar text and tagline.
- Never use `#863bff` or `#47bfff` for headings, body text, or data values.
- Refer to `colors.md`, `typography.md`, `layout.md`, and all component files for visual values.
