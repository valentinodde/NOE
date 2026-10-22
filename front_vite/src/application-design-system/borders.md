# Borders

> Dependencies: `colors.md`

Borders are sparse in this design system. Tonal surface layering handles most separation — explicit borders appear only where a clear edge is needed.

## Border Types

### Surface dividers
Between sections within a card:
```css
border-top: 1px solid #e8eaf3; /* surface-high */
```

Between nav items, between tab columns:
```css
border-right: 1px solid #e0e2eb; /* surface-highest */
```

### Accent tinted panels (most common pattern)
For callout/info blocks inside cards:
```css
background: rgba(5,27,113,0.05);
border: 1px solid rgba(5,27,113,0.10);
```
Stronger variant:
```css
background: rgba(5,27,113,0.06);
border: 1px solid rgba(5,27,113,0.12);
```

### Color-coded left border (context bars)
For risk cards, sector info strips, section highlights:
```css
border-left: 4px solid <semantic-color>;
/* e.g. borderLeft: '4px solid #0097d6' */
```
Width: always 4px. Never apply on more than one side at a time.

### Color-coded top border (active tabs)
For active panel tabs:
```css
border-top: 3px solid <semantic-color>;
```

### Input focus bottom bar
For text inputs — no full border, only bottom bar on focus:
```css
border-top: none;
border-left: none;
border-right: none;
border-bottom: 2px solid transparent;
/* On focus: */
border-bottom-color: #000a43;
```

### Dashed border (grouping frame)
For "effective precipitation" grouping within water cycle visuals:
```css
border: 2px dashed rgba(5,27,113,0.22);
border-radius: 12px;
```

### Navbar bottom border
```css
border-bottom: 1px solid #ede6ff;
```

## Rules

- **No borders on cards by default** — tonal surface + shadow provides depth.
- **No border on buttons** — buttons use background color only (no border variant except ghost — never use here).
- Dividers between card sub-sections: always `#e8eaf3` (surface-high — the lightest visible line).
- Color bars (left / top) must use semantic colors from `colors.md`, never arbitrary values.
- Dashed borders: only for explicit data-grouping UI — not for layout separation.
- Never mix border sides arbitrarily — be deliberate: left bar OR top bar, not both.
