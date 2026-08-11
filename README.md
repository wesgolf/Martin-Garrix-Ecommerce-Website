# Martin Garrix Ecommerce Concept

A responsive front-end storefront that carries the black-and-white, full-screen visual language of `martingarrix.com` into an ecommerce flow. It is built with plain HTML, CSS, and JavaScript and has no build step.

## Run locally

Node.js 22 is pinned in `.nvmrc` for Netlify and agent-runner compatibility, but the site itself is static.

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## Catalog source

`catalog.js` is a normalized snapshot of the public official Shopify feeds captured on August 11, 2026:

- `https://shop.martingarrix.com/products.json?limit=250`
- `https://shop.martingarrix.com/collections.json?limit=250`

It contains all 42 products that were public at capture time, including exact titles, EUR prices, compare-at prices, option values, 180 variants, availability, canonical product links, and official Shopify CDN image galleries. Product photography is loaded from the official CDN; it is not recreated with HTML, CSS, or generated artwork.

Inventory and prices can change. Every local product page therefore includes a link to its canonical official-shop page.

## Included

- Full-viewport campaign carousel using current public shop photography
- Fixed plus/cross navigation and full-screen Roman-numeral menu
- Front/back product-image hover treatment
- Searchable, sortable, filterable 42-product catalog
- Current apparel, accessories, kids, STMPD, Replay, and Marty Season views
- Variant-aware product pages and sold-out states
- Persistent local demo bag, quantity controls, and EUR totals
- Clearly labelled demo checkout and confirmation flow
- Contact, shipping/returns, FAQ, and newsletter demonstrations
- Keyboard navigation, focus states, semantic dialogs, and reduced-motion support

## Main files

- `index.html` — campaign home page and featured official products
- `collections.html` — complete current catalog
- `acc.html` — current accessories
- `sale.html` — genuine live-feed markdowns only
- `product.html` — data-driven product detail (`?id=product-handle`)
- `checkout.html` — local demo checkout
- `contact.html` — local demo support form and help content
- `catalog.js` — normalized official-shop catalog snapshot
- `store.js` — rendering, search, variants, cart, menu, carousel, and forms
- `store.css` — shared visual system and responsive layouts

## Important status and rights note

This is an independent front-end concept, not the official Martin Garrix store. It cannot place orders, reserve stock, process payments, send support messages, or subscribe email addresses.

Martin Garrix, STMPD RCRDS, their marks, product copy, and the referenced photography belong to their respective owners. Public feed access is not a content license. Obtain permission and confirm brand, photography, font, privacy, tax, shipping, and commerce requirements before public or commercial deployment.
