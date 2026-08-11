# Martin Garrix Store Concept

A finished, responsive front-end ecommerce concept built with plain HTML, CSS, and JavaScript. The experience translates Martin Garrix's immersive black-and-white artist-site language into a complete demo shopping loop.

## Run locally

No build step or package install is required.

Node.js 22 is pinned in `.nvmrc` for Netlify builds and compatible agent runners. If you use `nvm`, run `nvm use` before any Node-based tooling.

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

## What is included

- Full-bleed concert home page and full-screen navigation
- Responsive editorial collection layouts
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
- `assets/` — local SVG artwork, favicon, and concert hero image

## Demo status

This repository is a front-end concept. Checkout does not process payments, reserve inventory, or create orders. Contact and newsletter forms provide local success states and are ready to be connected to a real service.

Martin Garrix, STMPD RCRDS, SENTIO, and related marks and imagery belong to their respective owners. Confirm licensing and brand approval before any commercial deployment.

The monochrome concert hero is an original AI-generated concept asset created for this project; it does not depict or claim to depict a specific real performance.
