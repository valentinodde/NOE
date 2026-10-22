# Content & Grid System

> Dependencies: `layout.md`, `typography.md`

## Main Container

```css
flex: 1;
max-width: 1024px;
margin: 0 auto;
width: 100%;
padding: 40px 24px;
display: flex;
flex-direction: column;
gap: 32px;    /* or 40px for major sections */
```

## Breakpoints

| Name | Min-width |
|---|---|
| Small | 640px |
| Medium | 768px |
| Large | 1024px |
| Extra large | 1280px |

## Grid Layouts

### Two-column (equal)
```css
display: grid;
grid-template-columns: 1fr;
gap: 16px;

/* at ≥768px */
grid-template-columns: 1fr 1fr;
```
Card gap: `16px`. Standard for data card pairs.

### Three-column (risk cards, feature grid)
```css
display: grid;
grid-template-columns: 1fr;
gap: 16px;

/* at ≥768px */
grid-template-columns: 1fr 1fr 1fr;
```

### Four-column (metric strip)
```css
display: grid;
grid-template-columns: 1fr 1fr;
gap: 12px;

/* at ≥768px */
grid-template-columns: 1fr 1fr 1fr 1fr;
```
`gap: 12px` for compact metric tiles.

### Five-column (map + panel)
```css
display: grid;
grid-template-columns: 1fr;
gap: 16px;

/* at ≥768px */
grid-template-columns: 3fr 2fr;

/* Main area spans 3; sidebar spans 2 */
```

### Info grid (key-value pairs)
```css
display: grid;
grid-template-columns: 1fr 1fr;
column-gap: 24px;
row-gap: 16px;
```

## Responsiveness Rules

- **Mobile-first**: always start with `grid-template-columns: 1fr`, add multi-column at ≥768px.
- **No horizontal scroll** on the page — wrap everything in `overflow: hidden` or use responsive columns.
- Navbar right content: hidden on mobile, visible at ≥640px.
- Cards: full-width on mobile, grid on medium breakpoint.

## Vertical Rhythm

- Between major page sections: `gap: 32px` or `gap: 40px` (`flex-direction: column`)
- Between items within a section: `gap: 16px` to `gap: 24px`
- Between metadata fields: `row-gap: 16px` in grid, `gap: 8px` in flex column
- Section card internal: starts with `SectionTitle` (~20px margin below from `margin-bottom: 20px` on title wrapper)

## Reading Width

For text-heavy sections, constrain prose:
```css
max-width: 672px;    /* ~75 characters */
font-size: 0.8125rem;
color: var(--color-on-surface-var);
line-height: 1.625;
```
