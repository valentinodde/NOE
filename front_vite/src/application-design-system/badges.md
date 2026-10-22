# Badges & Pills

> Dependencies: `colors.md`, `radius.md`

All badges use `border-radius: 9999px` (pill shape). This is the **only** context where full-radius pills are used — not for buttons or inputs.

## Status Badge (risk level pill)

Tinted background + matching text color + small color dot.

```css
/* Wrapper */
display: inline-flex;
align-items: center;
gap: 6px;
padding: 2px 10px;
border-radius: 9999px;
background: <bgColor>;      /* color at ~10% opacity */
color: <textColor>;         /* semantic color */
font-size: 0.8125rem;
font-weight: 600;

/* Dot */
width: 6px;
height: 6px;
border-radius: 9999px;
background: <textColor>;
flex-shrink: 0;
```

Where `bgColor` = semantic color at ~10% opacity and `textColor` = semantic color at full opacity.

### Risk level colors (see colors.md)
| Level | `textColor` | `bgColor` |
|---|---|---|
| Critical | `#ef4444` | `rgba(239,68,68,0.10)` |
| High | `#f97316` | `rgba(249,115,22,0.10)` |
| Moderate | `#f59e0b` | `rgba(245,158,11,0.10)` |
| Low | `#22c55e` | `rgba(34,197,94,0.10)` |
| N/A | `#94a3b8` | `rgba(148,163,184,0.10)` |

## Solid White-Text Badge (dark bg)

For important labels on dark backgrounds (e.g. "★ Headquarters"):

```css
display: inline-flex;
align-items: center;
gap: 6px;
padding: 4px 12px;
border-radius: 9999px;
background: linear-gradient(135deg, #000a43 0%, #051b71 100%);
color: #ffffff;
font-size: 0.75rem;
font-weight: 600;
```

## Count / Action Count Chip

Inside collapsible headers, action plans:

```css
font-size: 0.6875rem;
font-weight: 700;
padding: 2px 10px;
border-radius: 9999px;
background: rgba(<accentRGB>, 0.094);   /* accentColor at ~9% */
color: <accentColor>;
```

## Delta Badge (data comparison)

For showing relative change vs. a reference period:

```css
font-size: 0.625rem;
font-weight: 700;
padding: 2px 6px;
border-radius: 9999px;
flex-shrink: 0;

/* Negative */
background: rgba(239,68,68,0.10);
color: #ef4444;

/* Positive */
background: rgba(34,197,94,0.10);
color: #22c55e;
```

## Horizon Pill (time selector)

For Actuel / 2030 / 2050 selectors:

```css
/* Active */
padding: 4px 12px;
border-radius: 9999px;
font-size: 0.6875rem;
font-weight: 600;
background: rgba(<colorRGB>, 0.094);
color: <color>;
border: 1px solid rgba(<colorRGB>, 0.31);
transition: background-color 150ms, color 150ms, border-color 150ms;

/* Inactive */
background: transparent;
color: #44474f;
border: 1px solid #e0e2eb;
```

## Accent Decorative Pill (navbar)

Gradient background with a gradient dot and colored text — for product identity only:

```css
/* Wrapper */
display: flex;
align-items: center;
gap: 6px;
padding: 6px 12px;
border-radius: 9999px;
background: linear-gradient(90deg, #f3eeff 0%, #e8f7ff 100%);
border: 1px solid #ddd6f8;

/* Dot */
width: 6px;
height: 6px;
border-radius: 9999px;
background: linear-gradient(135deg, #863bff, #47bfff);
flex-shrink: 0;

/* Text */
font-size: 0.6875rem;
color: #7e14ff;
font-weight: 500;
letter-spacing: 0.04em;
```

## Sizes

| Size | Font size | Padding |
|---|---|---|
| XS | 0.625rem | 2px 6px |
| SM | 0.6875rem | 2px 10px |
| MD | 0.8125rem | 2px 10px |
| LG | 0.75rem | 4px 12px |

## Rules

- **Always `border-radius: 9999px`** for badges — no other radius.
- **Always `font-weight: 600` or `700`** for badge text.
- **Color dot** (6×6px circle) before label text in status badges.
- **No border** on solid-color badges. Border only on tinted/transparent badges.
- Tinted badges with border: use `rgba(<color>, 0.31)` when active, `#e0e2eb` when inactive.
