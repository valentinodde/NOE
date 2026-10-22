# Button Group (Mode Switcher)

> Dependencies: `buttons.md`, `colors.md`, `radius.md`

The button group in this design system is a **segmented mode switcher** — typically 2–3 options, used to switch chart views or display modes inside cards. It is NOT pill-shaped.

## Wrapper

```css
display: flex;
border-radius: 12px;
overflow: hidden;
flex-shrink: 0;
border: 1px solid #e0e2eb;    /* surface-highest */
```

No shadow on the wrapper.

## Segment Button

```css
padding: 6px 12px;
font-size: 0.6875rem;
font-weight: 500;
transition: background-color 150ms, color 150ms;
cursor: pointer;
border: none;

/* Active */
background: #000a43;
color: #ffffff;

/* Inactive */
background: #ffffff;
color: #44474f;

/* Separator (between adjacent segments, except last) */
border-right: 1px solid #e0e2eb;
```

## Anatomy

- **Wrapper:** `border-radius: 12px; overflow: hidden` + `border: 1px solid #e0e2eb`. No shadow.
- **Active segment:** `background: #000a43`, `color: #ffffff`.
- **Inactive segment:** `background: #ffffff`, `color: #44474f`.
- **Separator:** `border-right: 1px solid #e0e2eb` on all segments except the last.
- **Font:** `0.6875rem`, `font-weight: 500` — compact labels.

## Typical Usage

- Chart mode selector (e.g. "Vision croisée | Eau disponible | Prélèvements")
- View toggle (list / grid)
- Data layer switcher

## Rules

- **Radius on wrapper only** (`border-radius: 12px`) — individual segments have `border-radius: 0`.
- **No shadow** — wrapper border handles visual containment.
- **Icon prefix** in label is optional but recommended for visual scanning.
- **Max 3–4 options** — beyond 4, switch to a dropdown or tab set.
- **Always `type="button"`** to avoid form submission conflicts.
