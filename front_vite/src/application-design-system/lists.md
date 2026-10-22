# Lists

> Dependencies: `colors.md`, `typography.md`

## Key–Value Row (metadata pair)

The most common list pattern — displays a label and its value as a stacked pair.

```css
/* Label */
font-size: 0.6875rem;
color: var(--color-on-surface-var);
text-transform: uppercase;
letter-spacing: 0.1em;
margin-bottom: 2px;

/* Value */
font-size: 0.875rem;
font-weight: 600;
color: var(--color-on-surface);
```

Grid layout for multiple pairs:
```css
display: grid;
grid-template-columns: 1fr 1fr;
column-gap: 24px;
row-gap: 16px;
```

## Risk / Score Row (label + value inline)

For data breakdowns within a card:

```css
/* Row wrapper */
display: flex;
align-items: flex-start;
justify-content: space-between;
gap: 8px;

/* Label */
font-size: 0.8125rem;
color: var(--color-on-surface-var);

/* Value */
font-size: 0.8125rem;
font-weight: 600;
color: var(--color-on-surface);
text-align: right;
```

Group multiple rows:
```css
display: flex;
flex-direction: column;
gap: 8px;
```

## Effort Row (label + dot-scale)

For action effort ratings (low / medium / high):

```css
/* Row wrapper */
display: flex;
align-items: center;
justify-content: space-between;
gap: 8px;

/* Label */
font-size: 0.75rem;
color: var(--color-on-surface-var);

/* Dot group */
display: flex;
align-items: center;
gap: 6px;

/* Dot (filled) */
width: 8px;
height: 8px;
border-radius: 9999px;
background: <accentColor>;

/* Dot (empty) */
width: 8px;
height: 8px;
border-radius: 9999px;
background: #e2e8f0;

/* Dot label */
font-size: 0.6875rem;
color: var(--color-on-surface-var);
opacity: 0.7;
width: 56px;
text-align: right;
```

## Link List (resource links)

Clickable cards for external resources — hover shifts background:

```css
/* Card */
display: flex;
align-items: flex-start;
gap: 16px;
background: #f1f3fc;           /* surface-low */
border-radius: 12px;
padding: 16px;
box-shadow: 0 0 16px rgba(0,10,67,0.03);
text-decoration: none;
transition: background-color 150ms;

/* Card — hover */
background: #e8eaf3;           /* surface-high */

/* Icon container */
width: 40px;
height: 40px;
border-radius: 8px;
background: #e8eaf3;
display: flex;
align-items: center;
justify-content: center;
flex-shrink: 0;
font-size: 1.125rem;
transition: background-color 150ms;

/* Icon container — hover */
background: #e0e2eb;           /* surface-highest */

/* Title */
font-size: 0.875rem;
font-weight: 600;
color: var(--color-on-surface);

/* Description */
font-size: 0.8125rem;
color: var(--color-on-surface-var);
line-height: 1.625;
```

Grid of link cards (single col mobile, 2-col at ≥640px):
```css
display: grid;
grid-template-columns: 1fr;
gap: 12px;

/* at ≥640px */
grid-template-columns: 1fr 1fr;
```

## Meta Row (label + value inline, flexible)

```css
display: flex;
align-items: flex-start;
gap: 6px;
flex-wrap: wrap;

/* Label */
font-size: 0.8125rem;
color: var(--color-on-surface-var);
flex-shrink: 0;

/* Value */
font-size: 0.8125rem;
font-weight: 600;
color: var(--color-on-surface);
```

## Rules

- Empty / null values: always display `—` (em dash), never empty string.
- Metadata labels: always uppercase + `letter-spacing: 0.1em` (signature label pattern from `typography.md`).
- `row-gap: 16px` between key-value grid items; `gap: 8px` between score rows.
- Resource link cards: `border-radius: 12px`, tonal hover (no border on hover).
