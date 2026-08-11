# Martin Garrix Store Concept

A finished, responsive front-end ecommerce concept built with plain HTML, CSS, and JavaScript. The experience keeps the original black-and-white `+ ×` art direction while adding a complete demo shopping loop.

## Run locally

No build step or package install is required.

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## What is included

- Responsive editorial home page
- Searchable, sortable, filterable product catalog
- Dedicated accessories and sale views
- Data-driven product pages with image and size selection
- Persistent `localStorage` shopping bag
- Quantity controls, removal, subtotal, and free-shipping progress
- Clearly labelled demo checkout and confirmation flow
- Contact, shipping/returns, FAQ, and newsletter interactions
- Keyboard-friendly navigation, dialogs, focus states, and reduced-motion support
- Local product imagery and vector accessory artwork

## Project structure

- `index.html` — home page
- `collections.html` — complete catalog
- `acc.html` — accessories and collectibles
- `sale.html` — discounted products
- `product.html` — dynamic product detail view (`?id=...`)
- `checkout.html` — demo checkout
- `contact.html` — support form, shipping information, and FAQ
- `store.js` — catalog data, rendering, search, cart, and form behavior
- `store.css` — shared visual system and responsive layout
- `assets/` — local SVG artwork and favicon

## Demo status

This repository is a front-end concept. Checkout does not process payments, reserve inventory, or create orders. Contact and newsletter forms provide local success states and are ready to be connected to a real service.

Martin Garrix, STMPD RCRDS, SENTIO, and related marks and imagery belong to their respective owners. Confirm licensing and brand approval before any commercial deployment.
