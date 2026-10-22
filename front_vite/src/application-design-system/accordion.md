# Accordion

> Dependencies: `colors.md`, `radius.md`

Two accordion patterns are used in this system.

## Pattern 1 — Metric Accordion (data-dense)

Used for expanding metric explanations inside data panels. Header shows a key number; panel reveals detailed breakdown.

### Header button (closed state)

```css
width: 100%;
padding: 12px 16px;
display: flex;
align-items: center;
justify-content: space-between;
text-align: left;
cursor: pointer;
background: rgba(5,27,113,0.06);
border: 1px solid rgba(5,27,113,0.12);
border-radius: 12px;
transition: background-color 150ms;

/* Header button — open state (square bottom corners) */
border-bottom-left-radius: 0;
border-bottom-right-radius: 0;
border-bottom: none;
```

#### Left content (stacked)
```css
display: flex;
flex-direction: column;
gap: 6px;

/* Section label */
font-size: 0.625rem;
text-transform: uppercase;
letter-spacing: 0.1em;
color: var(--color-on-surface-var);

/* Primary value */
font-size: 1.375rem;
font-weight: 700;
color: var(--color-on-surface);
line-height: 1;

/* Unit text (after value) */
font-size: 0.8125rem;
font-weight: 500;
color: var(--color-on-surface-var);
margin-left: 4px;
```

#### Chevron
```css
font-size: 0.75rem;
color: var(--color-on-surface-var);
margin-left: 12px;
flex-shrink: 0;
margin-top: 4px;
```
Use `▼` when closed, `▲` when open.

### Panel body

```css
padding: 16px;
display: flex;
flex-direction: column;
gap: 16px;
background: rgba(5,27,113,0.03);
border: 1px solid rgba(5,27,113,0.12);
border-top: none;
border-bottom-left-radius: 12px;
border-bottom-right-radius: 12px;
```

### Smooth expand using CSS grid

```css
/* Outer wrapper */
display: grid;
grid-template-rows: 0fr;      /* closed */
transition: grid-template-rows 300ms ease;

/* Open */
grid-template-rows: 1fr;

/* Inner wrapper (overflow clip) */
overflow: hidden;
```

---

## Pattern 2 — Category Accordion (journey / plan)

Used for collapsible action-plan categories. Full-width card with colored accent, chevron SVG.

### Outer wrapper

```css
border-radius: 16px;
overflow: hidden;
background: rgba(<accentRGB>, 0.02);
border: 1px solid rgba(<accentRGB>, 0.094);
```

### Header button

```css
width: 100%;
text-align: left;
padding: 16px 20px;
display: flex;
align-items: center;
justify-content: space-between;
gap: 12px;
cursor: pointer;
background: transparent;
border: none;
transition: background-color 150ms;

/* hover */
background: rgba(0,0,0,0.02);
```

#### Left content
```css
display: flex;
align-items: center;
gap: 10px;
flex-wrap: wrap;

/* Category title */
font-size: 1rem;
font-weight: 600;
color: var(--color-on-surface);
letter-spacing: -0.01em;

/* Count chip — see badges.md */
font-size: 0.6875rem;
font-weight: 700;
padding: 2px 10px;
border-radius: 9999px;
background: rgba(<accentRGB>, 0.094);
color: <accentColor>;
```

#### Chevron SVG
```css
flex-shrink: 0;
color: var(--color-on-surface-var);
transition: transform 300ms;

/* open */
transform: rotate(180deg);

/* closed */
transform: rotate(0deg);
```
SVG path: `M4 6l4 4 4-4`, `stroke="currentColor"`, `stroke-width="1.6"`, `stroke-linecap="round"`.

---

## "What is X?" Info Accordion (simple)

For educational inline expandables:

```css
/* Wrapper */
background: #f1f3fc;           /* surface-low */
border-radius: 12px;
overflow: hidden;

/* Header button */
width: 100%;
padding: 12px 16px;
display: flex;
align-items: center;
justify-content: space-between;
text-align: left;
cursor: pointer;
background: transparent;
border: none;

/* Header text */
font-size: 0.8125rem;
font-weight: 600;
color: var(--color-on-surface);

/* Chevron */
font-size: 0.875rem;
color: var(--color-on-surface-var);
margin-left: 8px;

/* Panel body */
padding: 0 16px 16px 16px;
font-size: 0.8125rem;
color: var(--color-on-surface-var);
line-height: 1.625;
```

---

## Rules

- **Chevron indicator:** `▲`/`▼` text characters for metric accordions; SVG `rotate` for category accordions.
- **Closed header:** `border-radius: 12px` (all corners).
- **Open header:** squared bottom corners to seamlessly connect with panel body.
- **Panel body:** rounded bottom corners only (`border-bottom-left-radius: 12px; border-bottom-right-radius: 12px`).
- **Transition:** `grid-template-rows` for smooth height animation — never a `display: none` hard-cut.
- **Empty state:** if a category has no actions, show static header (not clickable) with italic "no actions" note.
