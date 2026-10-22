# Shadows & Elevation

> Dependencies: `colors.md`

All shadows use **deep navy tint** — never pure black. They are large, soft, and diffuse.

## Elevation Scale

Always applied via the CSS `box-shadow` property directly — values are custom and must not be replaced with framework presets.

| Name | CSS value | Usage |
|---|---|---|
| micro | `0 1px 3px rgba(0,0,20,0.06)` | Tiny metric cards, indicator tiles |
| data | `0 1px 4px rgba(0,0,20,0.05)` | Sub-cards with white background inside a section |
| sub | `0 0 24px rgba(0,10,67,0.04)` | Inner section data cards, risk cards |
| card | `0 0 32px rgba(0,10,67,0.06)` | Panel tab wrappers, embedded panels |
| section | `0 0 40px rgba(0,10,67,0.06)` | SectionCard (primary page sections) |
| page | `0 0 48px rgba(0,10,67,0.06)` | Top-level page cards (entity header, form card) |
| page-soft | `0 0 48px rgba(0,10,67,0.04)` | Error / empty state cards |
| navbar | `0 1px 24px 0 rgba(134,59,255,0.07)` | Top navbar (subtle purple tint) |
| tooltip | `0 4px 16px rgba(0,0,0,0.08)` | Tooltips, chart custom tooltips |

## Usage by Component

| Component | Shadow |
|---|---|
| Navbar | navbar |
| Page header card | page |
| Search / form card | page |
| Error / empty card | page-soft |
| SectionCard | section |
| Tab panel wrapper | card |
| White data sub-card | data |
| Risk card / issue card | sub |
| Metric mini-card | micro |
| Tooltip / chart tooltip | tooltip |

## Rules

- **Never** use `rgba(0,0,0,...)` for component shadows — always use navy or purple tints.
- **Diffuse, not directional** — prefer `0 0 Xpx` (spread glow) over `0 4px Xpx` (directional drop).
- **Scale with hierarchy** — deeper nesting = smaller, lighter shadow.
- **No shadow change on hover** — elevation is static. Hover uses a small `transform: translateY(-1px)` instead.
