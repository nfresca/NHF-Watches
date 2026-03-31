# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**NHF Watches** — A static single-page luxury watch retailer website written in Spanish. No build system, no framework, no dependencies (except Google Fonts). Just open `index.html` in a browser or serve with any HTTP server.

## Running Locally

```bash
# Python (any directory)
python -m http.server 8000

# Then open: http://localhost:8000
```

## Architecture

**File load order matters:**
1. `css/reset.css` → `css/variables.css` → `css/style.css`
2. `js/products.js` (defines `products` array + `WHATSAPP_NUMBER`) → `js/main.js` (reads both)

**JavaScript initialization flow (`main.js`):**
```
DOMContentLoaded
├── initNavbar()           — scroll detection, hamburger toggle, active link tracking
├── initSmoothScroll()     — anchor link behavior
├── renderProducts()       — DOM injection from products[] array
├── initFilters()          — category filter buttons (Todos/Clásico/Sport/Luxury)
└── initScrollAnimations() — IntersectionObserver for reveal-on-scroll
```

**CSS design system (`variables.css`):**
- Gold accent: `#b8922a` / `#c9a84c`
- Responsive type via `clamp()`
- Single breakpoint at `768px`
- Transitions via `--transition: 300ms ease`

## Key Configuration

**`js/products.js`** is the only file that needs editing before deployment:
- `WHATSAPP_NUMBER` — currently placeholder `'XXXXXXXXXXX'`, must be set to the actual number
- `products[]` — add/edit/remove watch listings here; each entry needs `id`, `name`, `category`, `price`, `image`, `description`, `specs[]`, and optional `badge`

Product images are loaded from URLs; if they fail to load, a SVG fallback watch illustration renders instead (handled inline in `renderProducts()`).

## Sections (in order in `index.html`)

`#inicio` (hero) → `#coleccion` (product grid) → `#nosotros` (about/values) → `#contacto` (WhatsApp + email) → footer
