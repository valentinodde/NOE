# Tabs

> Dependencies: `colors.md`, `radius.md`, `shadows.md`

Two distinct tab patterns are used in this system.

---

## Pattern 1 — Navigation Tabs (underline style)

Used for top-level page sections (main page tab bar). Horizontal list, bottom-border active indicator.

### Wrapper

```css
border-bottom: 1px solid #e8eaf3;    /* surface-high */
```

### Tab button

```css
/* All states */
padding: 12px 20px;
font-size: 0.875rem;
font-weight: 500;
border-top-left-radius: 8px;
border-top-right-radius: 8px;
border-bottom-left-radius: 0;
border-bottom-right-radius: 0;
transition: color 150ms, background-color 150ms;
white-space: nowrap;
cursor: pointer;
background: transparent;
border: none;
border-bottom: 2px solid transparent;

/* Active */
color: #051b71;
border-bottom-color: #051b71;
background: #f1f3fc;    /* surface-low */

/* Inactive */
color: var(--color-on-surface-var);

/* Inactive — hover */
color: var(--color-on-surface);
background: #f1f3fc;    /* surface-low */
```

| State | Color | Bottom border | Background |
|---|---|---|---|
| Active | `#051b71` | `2px solid #051b71` | `#f1f3fc` |
| Inactive | `var(--color-on-surface-var)` | `2px solid transparent` | transparent |
| Hover (inactive) | `var(--color-on-surface)` | `2px solid transparent` | `#f1f3fc` |

---

## Pattern 2 — Panel Tabs (top-border / data tabs)

Used inside section panels to switch between data horizons or value-chain segments. Tab bar is a surface strip; active tab gets a **colored top border** and lifted background.

### Outer wrapper

```css
border-radius: 16px;
overflow: hidden;
box-shadow: 0 0 32px rgba(0,10,67,0.06);
```

### Section label header (above tab bar)

```css
padding: 16px 20px 8px 20px;
background: #e8eaf3;    /* surface-high */

/* Label text */
font-size: 0.6875rem;
font-weight: 600;
color: var(--color-on-surface-var);
text-transform: uppercase;
letter-spacing: 0.1em;
```

### Tab bar

```css
display: flex;
background: #e8eaf3;    /* surface-high */
```

### Tab button

```css
/* All states */
flex: 1;
padding: 12px 16px;
display: flex;
flex-direction: column;
gap: 8px;
text-align: left;
transition: background-color 200ms;
cursor: pointer;
background: transparent;
border: none;
position: relative;
border-top: 3px solid transparent;

/* Active */
background: #f1f3fc;              /* surface-low */
border-top-color: <accentColor>;
margin-bottom: -1px;              /* visually merges with content area */
z-index: 1;

/* Separator (between tabs, except last) */
border-right: 1px solid #e0e2eb;    /* surface-highest */

/* Tab title — active */
font-size: 0.875rem;
font-weight: 700;
color: #181c22;
line-height: 1;

/* Tab title — inactive */
color: #44474f;
```

Surface values:
```
surface-low:     #f1f3fc
surface-high:    #e8eaf3
surface-highest: #e0e2eb
```

| State | Background | Top border | z-index |
|---|---|---|---|
| Active | `#f1f3fc` | `3px solid accentColor` | 1 |
| Inactive | transparent | `3px solid transparent` | 0 |
| Separator | — | — | right: `1px solid #e0e2eb` |

**Accent color** for the top border is semantic — use `getStressColor(ratio)` for hydro stress, `getRiskColors(score).bar` for risk levels, or `accentColor` from the category.

### Content area

```css
padding: 20px;
display: flex;
flex-direction: column;
gap: 20px;
background: #f1f3fc;    /* surface-low */
```

---

## Rules

- **Pattern 1** (nav tabs) for top-level page navigation between content sections.
- **Pattern 2** (panel tabs) for in-card data switching (horizon, chain segment, mode).
- Never use `border-radius: 9999px` for tabs.
- Active panel tab uses `margin-bottom: -1px` to visually merge with the content area below.
- Tab content area always: `background: #f1f3fc`.
