# Icon Shapes (Emoji Containers)

> Dependencies: `colors.md`, `radius.md`

Icon containers primarily hold **emoji** (not SVG icons), displayed at `font-size: 1.125rem` or `1.5rem` on a tinted square background.

## Sizes

| Size | Dimensions | Font size | Radius | Usage |
|---|---|---|---|---|
| XS | 24×24px | 0.75rem | 9999px | Dot / dot indicator |
| SM | 36×36px | 1rem | 8px | Inline indicator (navbar, cards) |
| MD | 40×40px | 1.125rem | 12px | Empty states, info icons |
| LG | 44×44px | 1.5rem | 12px | Sector/category icon |
| XL | 56×56px | 1.5rem | 12px | Large identity icon |

## Layout

```css
display: flex;
align-items: center;
justify-content: center;
flex-shrink: 0;
```

Always include `flex-shrink: 0`.

## Color Variants

### Surface-tinted (default)
Uses surface tokens — neutral, no semantic meaning:
```css
background: #e8eaf3;    /* surface-high */
/* or for hover/active */
background: #e0e2eb;    /* surface-highest */
```

### Semantic tint (status-colored)
Tinted to match the accent color of the section or risk level:
```css
/* SM container example */
width: 36px;
height: 36px;
border-radius: 8px;
background: rgba(<colorRGB>, 0.094);    /* ~9% opacity */
display: flex;
align-items: center;
justify-content: center;
font-size: 1rem;
flex-shrink: 0;
margin-top: 2px;    /* optical vertical alignment */
```

### Category accent
For action plan categories — uses the category's `accentColor` with a subtle border:
```css
width: 36px;
height: 36px;
border-radius: 9999px;
background: #ffffff;
border: 1.5px solid rgba(0,10,67,0.14);
box-shadow: 0 2px 8px rgba(0,10,67,0.08);
display: flex;
align-items: center;
justify-content: center;
flex-shrink: 0;
```

## Ripple Marker (journey/timeline)

Animated icon marker for step-by-step journeys:

```css
/* Outer wrapper */
position: relative;
width: 52px;
height: 52px;
display: flex;
align-items: center;
justify-content: center;
flex-shrink: 0;

/* Expanding ring (×3, staggered) */
position: absolute;
width: 20px;
height: 20px;
top: 50%;
left: 50%;
margin-top: -10px;
margin-left: -10px;
border-radius: 9999px;
border: 1.5px solid <color>;
animation: ripple-expand 3s ease-out infinite;
/* delay: 0s / 0.85s / 1.7s for the three rings */

/* Center node */
position: relative;
z-index: 1;
width: 34px;
height: 34px;
border-radius: 9999px;
background: rgba(<colorRGB>, 0.078);
box-shadow: 0 0 0 3px rgba(<colorRGB>, 0.027);
display: flex;
align-items: center;
justify-content: center;
font-size: 0.95rem;
animation: node-breathe 3.5s ease-in-out infinite;
```

See `layout.md` for the `@keyframes ripple-expand` and `@keyframes node-breathe` definitions.

## Rules

- **Radius:** `border-radius: 12px` for MD/LG/XL containers; `8px` for SM; `9999px` for XS dot and ripple node.
- **Background:** always a tinted surface or `rgba(<color>, 0.08)` — never solid opaque color (too heavy).
- **Always `flex-shrink: 0`** — icon containers must never compress in flex layouts.
- **Emoji-first** — use emoji characters, not SVG icons, for semantic category/sector icons.
