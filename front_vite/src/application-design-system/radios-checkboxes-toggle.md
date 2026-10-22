# Radios, Checkboxes & Toggles

> Dependencies: `colors.md`, `radius.md`

Selection controls follow the surface-fill style of inputs — navy accent on checked/active states.

## Checkbox

Native browser checkbox — use `accent-color` in CSS for the checked color:

```css
/* Native input */
width: 16px;
height: 16px;
border-radius: 4px;
accent-color: #051b71;
cursor: pointer;

/* Label */
font-size: 0.875rem;
color: var(--color-on-surface);
cursor: pointer;
```

### Custom-styled checkbox (more control)

```css
/* Wrapper */
width: 16px;
height: 16px;
border-radius: 4px;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
transition: background-color 150ms, border-color 150ms;

/* Unchecked */
background: #e8eaf3;    /* surface-high */
border: 1px solid #c4c7d4;

/* Checked */
background: #051b71;
border: none;

/* Checkmark SVG */
/* path: M1 4l3 3 5-6, stroke: white, stroke-width: 1.5, stroke-linecap: round */
```

## Radio

```css
/* Group wrapper */
display: flex;
flex-direction: column;
gap: 8px;

/* Option row */
display: flex;
align-items: center;
gap: 10px;
cursor: pointer;

/* Native input */
width: 16px;
height: 16px;
accent-color: #051b71;
cursor: pointer;

/* Option label */
font-size: 0.875rem;
color: var(--color-on-surface);
```

Always group radio inputs under the same `name` attribute.

## Toggle / Switch

```css
/* Track */
position: relative;
display: flex;
align-items: center;
flex-shrink: 0;
width: 40px;
height: 24px;
border-radius: 9999px;
cursor: pointer;
transition: background-color 200ms;
background: none;
border: none;

/* Track — on */
background: #051b71;

/* Track — off */
background: #e0e2eb;    /* surface-highest */

/* Thumb */
position: absolute;
top: 4px;
left: 4px;
width: 16px;
height: 16px;
border-radius: 9999px;
background: #ffffff;
transition: transform 200ms;

/* Thumb — on */
transform: translateX(16px);

/* Thumb — off */
transform: translateX(0);
```

### With label

```css
display: flex;
align-items: center;
gap: 12px;

/* Label text */
font-size: 0.875rem;
color: var(--color-on-surface);
```

## States

```css
/* Disabled (apply to wrapper) */
opacity: 0.5;
cursor: not-allowed;
pointer-events: none;

/* Focus ring (apply to focusable control) */
outline: none;
box-shadow: 0 0 0 2px rgba(5,27,113,0.25);
```

## Rules

- All controls: `id` on input, `for` on label — always paired.
- **No purple accent** — always use navy (`#051b71`) for checked/active states.
- **Disabled:** `opacity: 0.5; pointer-events: none` on the wrapper.
- **Focus:** `box-shadow: 0 0 0 2px rgba(5,27,113,0.25)` (no `outline`).
