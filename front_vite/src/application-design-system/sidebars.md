# Navigation Bar (Top Navbar)

> Dependencies: `colors.md`, `typography.md`, `badges.md`

This design system uses a **top navbar**, not a sidebar. The navbar is always visible and contains the brand mark, primary navigation links, and a product identity pill.

## Core Specs

```css
padding: 16px 32px;
display: flex;
align-items: center;
justify-content: space-between;
background: #ffffff;
border-bottom: 1px solid #ede6ff;
box-shadow: 0 1px 24px 0 rgba(134,59,255,0.07);
```

## Left — Brand Mark

```css
/* Button wrapper */
display: flex;
align-items: center;
gap: 14px;
background: none;
border: none;
cursor: pointer;
padding: 0;

/* Logo image */
height: 36px;
width: auto;
transition: opacity 200ms;

/* hover */
opacity: 0.8;

/* Tagline text */
font-size: 0.6875rem;
color: #9b8ab8;
letter-spacing: 0.08em;
text-transform: uppercase;
font-weight: 400;
```

## Right — Navigation Links + Accent Pill

```css
/* Right group (hidden on mobile, visible at ≥640px) */
display: none;    /* mobile */
/* at ≥640px: */
display: flex;
align-items: center;
gap: 16px;
```

### Nav link button

```css
font-size: 0.75rem;
font-weight: 500;
cursor: pointer;
background: none;
border: none;
padding-bottom: 2px;
transition: color 150ms, border-bottom-color 150ms;

/* Active */
color: #000a43;
border-bottom: 1.5px solid #000a43;

/* Inactive */
color: #9b8ab8;
border-bottom: 1.5px solid transparent;
```

### Accent decorative pill (product identity)

```css
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

- Navbar is **sticky at the top** — page layout: `min-height: 100vh; display: flex; flex-direction: column`, navbar first.
- **No sidebar** — all navigation is horizontal in the top bar.
- Right content hidden on mobile, visible at ≥640px.
- Logo always links to the home route.
- Max 3–4 nav links — keep navbar uncluttered.
- The accent pill is for product identity only — not a clickable link.
