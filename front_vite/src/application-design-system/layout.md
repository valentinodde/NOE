# Layout & Spacing

> Dependencies: `colors.md`

## Spacing Rhythm

Base unit: **4px**. Layout steps: 4 / 8 / 12 / 16 / 20 / 24 / 28 / 32 / 40 / 48px.

| Context | Value |
|---|---|
| Gap between page sections | 32–40px |
| Section card internal padding | 28px |
| Form / content card internal padding | 32px |
| Data sub-card padding | 20px |
| Small card / tile padding | 12px |
| Column gap between sections | 40px |
| Gap between items within a section | 16–24px |
| Grid gap (card grid) | 16px |
| Grid column / row gap (info pairs) | 24px / 16px |
| Horizontal container padding | 24px |
| Vertical page padding | 40px |
| Navbar padding | 16px top/bottom, 32px left/right |

## Main Container

```css
/* Page wrapper */
min-height: 100vh;
background: var(--color-surface);
display: flex;
flex-direction: column;

/* Main content area */
flex: 1;
max-width: 1024px;
margin: 0 auto;
width: 100%;
padding: 40px 24px;
display: flex;
flex-direction: column;
gap: 32px;
```

For narrow single-column flows (search, auth):
```css
/* Content centering wrapper */
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 0 16px;

/* Inner constrained area */
width: 100%;
max-width: 448px;
```

## Page Structure

```
Page wrapper (min-height: 100vh, flex column)
  └── Navbar (top bar)
  └── Main (flex: 1, max-width 1024px, centered)
        └── Page header card
        └── Tab navigation bar (if tabbed)
        └── Tab content area
              └── Section cards (flex column, gap 40px)
```

## Section Card Pattern

```css
/* SectionCard */
background: var(--color-surface-lowest);  /* #ffffff */
border-radius: 16px;
padding: 28px;
box-shadow: 0 0 40px rgba(0,10,67,0.06);
```

Group section cards in a flex column with `gap: 40px`.

## Grid Layouts

### Two-column (equal halves)
```css
display: grid;
grid-template-columns: 1fr 1fr;
gap: 16px;
/* mobile: grid-template-columns: 1fr */
```

### Three-column (risk cards, features)
```css
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 16px;
/* mobile: grid-template-columns: 1fr */
```

### Five-column (3 + 2 split: map + panel)
```css
display: grid;
grid-template-columns: 3fr 2fr;
gap: 16px;
/* mobile: grid-template-columns: 1fr */
```

### Four-column (metric strip)
```css
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 12px;
/* mobile: grid-template-columns: 1fr 1fr */
```

### Info pairs grid (key-value pairs)
```css
display: grid;
grid-template-columns: 1fr 1fr;
column-gap: 24px;
row-gap: 16px;
```

## Depth & Visual Atmosphere

Tonal layering is the primary depth signal — not shadows or borders alone:

| Layer | Background | Reads as |
|---|---|---|
| Page | `#f9f9ff` (surface) | App background |
| Cards | `#ffffff` or `#f1f3fc` | Raised surface |
| Tab bars / headers | `#e8eaf3` (surface-high) | Recessed strip |
| Inner sub-cards | `#ffffff` + minimal shadow | Floating tile |

**Never use a flat white background on a white page.** Always ensure a visible surface contrast step.

## Motion & Animations

```css
@keyframes fade-right {
  from { opacity: 0; transform: translateX(16px); }
  to   { opacity: 1; transform: translateX(0); }
}

@keyframes drop-bounce {
  0%   { transform: translateY(-12px) scale(0.82); opacity: 0; }
  55%  { transform: translateY(4px)   scale(1.10); opacity: 1; }
  75%  { transform: translateY(-3px)  scale(0.97); opacity: 1; }
  100% { transform: translateY(0)     scale(1);    opacity: 1; }
}

@keyframes ripple-expand {
  0%   { transform: scale(1);   opacity: 0.55; }
  100% { transform: scale(3.4); opacity: 0;    }
}

@keyframes node-breathe {
  0%, 100% { transform: scale(1);    }
  50%       { transform: scale(1.07); }
}

@keyframes dash-flow {
  from { background-position: 0 0; }
  to   { background-position: 0 11px; }
}
```

Staggered entry: `animation-delay: calc(index * 70ms)`. Use `animation-fill-mode: both`.

Interactive micro-transitions:
- Color/background changes: `transition: color 150ms, background-color 150ms`
- Opacity hover: `opacity: 0.8` on hover
- Lift on hover: `transform: translateY(-1px)` on hover (for action cards)
- Smooth expand: `grid-template-rows: 0fr → 1fr`, `transition: grid-template-rows 300ms ease` (accordions)

## Loading State

```css
/* Spinner */
width: 40px;
height: 40px;
border-radius: 9999px;
border: 4px solid #051b71;
border-top-color: transparent;
animation: spin 0.7s linear infinite;

/* Centered on page */
display: flex;
align-items: center;
justify-content: center;
min-height: 100vh;
```

## Empty / Error State

```css
/* Card */
background: var(--color-surface-low);
border-radius: 16px;
padding: 40px;
max-width: 448px;
text-align: center;
box-shadow: 0 0 48px rgba(0,10,67,0.04);

/* Icon container */
width: 48px;
height: 48px;
border-radius: 16px;
background: var(--color-surface-high);
display: flex;
align-items: center;
justify-content: center;
margin: 0 auto 20px;
font-size: 1.5rem;

/* Title */
font-size: 1.1rem;
font-weight: 600;
color: var(--color-on-surface);
margin-bottom: 8px;

/* Message */
font-size: 0.875rem;
color: var(--color-on-surface-var);
line-height: 1.625;
margin-bottom: 32px;
```
