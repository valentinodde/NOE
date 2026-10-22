# Color Tokens

Single light theme — no dark mode. All values are fixed hex or rgba.

## Surface Hierarchy (background layering = depth)

These are the primary depth mechanism. Never rely on borders alone for separation.

| Token | Hex | Role |
|---|---|---|
| `--color-surface` | `#f9f9ff` | Page / app background |
| `--color-surface-lowest` | `#ffffff` | Top-level cards, modals |
| `--color-surface-low` | `#f1f3fc` | Content areas, form cards |
| `--color-surface-high` | `#e8eaf3` | Tab bars, section headers, input fill |
| `--color-surface-highest` | `#e0e2eb` | Inactive chips, dividers |

**Rule:** Nest surfaces from darker background to lighter card for perceived elevation — `surface` → `surface-low` → `surface-lowest`. Reverse layering (lighter background, darker card) reads as recessed.

## Brand Palette

| Token | Hex | Role |
|---|---|---|
| `--color-primary` | `#000a43` | Headings, active states, brand mark |
| `--color-primary-container` | `#051b71` | Gradient end, focus rings |

**Primary gradient** (buttons, solid badges):
```css
background: linear-gradient(135deg, #000a43 0%, #051b71 100%);
```

**Accent gradient** (navbar dot, decorative rings):
```css
background: linear-gradient(135deg, #863bff, #47bfff);
```

**Light purple tint** (decorative surface panel):
```css
background: linear-gradient(90deg, #f3eeff 0%, #e8f7ff 100%);
```

## Data & Status Colors

### Data Accent (charts, key metrics)
| Role | Hex |
|---|---|
| Data cyan | `#0097d6` |
| Data cyan tint | `rgba(0,151,214,0.10)` |

### Alert / Warning
| Role | Hex |
|---|---|
| Amber | `#964900` |
| Amber light | `#fe851f` |
| Amber tint | `rgba(254,133,31,0.10)` |

### Semantic Status (risk / score levels)

| Level | Color | Background tint |
|---|---|---|
| Critical / Very high | `#ef4444` | `rgba(239,68,68,0.10)` |
| High | `#f97316` | `rgba(249,115,22,0.10)` |
| Medium | `#f59e0b` | `rgba(245,158,11,0.10)` |
| Low | `#22c55e` | `rgba(34,197,94,0.10)` |
| Neutral / N/A | `#94a3b8` | `rgba(148,163,184,0.10)` |

**Tint formula:** append `18` as hex opacity suffix to the 6-digit color for ~10% opacity tint (e.g. `#ef444418`), or `22` for ~13%.

### Delta Values (comparison vs. reference)
| Direction | Text color | Background |
|---|---|---|
| Positive | `#22c55e` | `rgba(34,197,94,0.10)` |
| Negative | `#ef4444` | `rgba(239,68,68,0.10)` |

## Text Colors

| Token | Hex | Role |
|---|---|---|
| `--color-on-surface` | `#181c22` | Primary text, values, labels |
| `--color-on-surface-var` | `#44474f` | Secondary text, metadata, captions |
| White | `#ffffff` | Text on dark/colored backgrounds |
| Muted nav accent | `#9b8ab8` | Navbar secondary text only |

## Accent Tinted Panel (section callout)

For informational callout panels inside cards:
```css
background: rgba(5,27,113,0.05);
border: 1px solid rgba(5,27,113,0.10);
```

Stronger variant (metric blocks, accordion headers):
```css
background: rgba(5,27,113,0.06);
border: 1px solid rgba(5,27,113,0.12);
```

## Chart Colors

| Series | Hex |
|---|---|
| Water / availability | `#0097d6` |
| Precipitation / demand | `#f97316` |
| Evaporation | `#fb923c` |
| Infiltration | `#8b5cf6` |
| Runoff | `#0097d6` |
| Agriculture | `#22c55e` |
| Industry | `#64748b` |
| Reference line (dashed) | `#94a3b8` |

Chart grid lines: `#e8eaf3`. Chart tooltip: white background, `border: 1px solid #e0e2eb`, `border-radius: 10px`.

## Prohibited

- No dark/light mode switching — single theme only.
- No brand color (`#000a43`) as background on large layout surfaces (page, section wrapper).
- No accent colors (`#863bff`, `#47bfff`) for body text or data labels.
