# WP Scheduled Data Fetch — Brand & Asset System

Everything in `.wordpress-org/` is generated. `icon.svg` and
`resources/brand/banner.html` are the only files edited by hand — never touch
the PNGs directly, they are overwritten on every render.

## Asset inventory

| File | Dimensions | Purpose |
|---|---|---|
| `icon.svg` | vector | Canonical icon; the directory consumes this directly when present |
| `icon-256x256.png` · `icon-128x128.png` | 256 · 128 | Directory hero and grid |
| `icon-512x512.png` | 512 | Channels outside the directory |
| `banner-1544x500.png` · `banner-772x250.png` | — | Desktop and mobile directory banners |
| `banner-1024x512.png` | 1024×512 | Square-ish crop for other channels |
| `screenshot-*.png` | 1200×900 | Listing screenshots, once there are any |

## Palette

**It lives in `tests/assets/brand.ts`, and only there.** `icon.svg` repeats the
values because SVG cannot import, and its header says so.

| Token | Hex |
|---|---|
| `ink` | `#042f2e` |
| `inkMid` | `#134e4a` |
| `inkLift` | `#115e59` |
| `royal` | `#0d9488` |
| `royalLight` | `#14b8a6` |
| `sky` | `#2dd4bf` |
| `accent` | `#5eead4` |
| `glyphMid` | `#f0fdfa` |
| `glyphBase` | `#99f6e4` |

Tailwind teal. Teal, because this is plumbing rather than a shop feature, and plumbing should not shout.

## The mark

A clock with an arrow coming down out of it. The two facts about the plugin are when it runs and which direction the data moves.

## Regenerating

```bash
yarn install        # once
yarn shots:banners  # icon + banner PNGs; no site needed
```

Screenshots need a running site and a `shots` project; this plugin has the
banner half of the pipeline only, until there are screens worth capturing.
