const PRODUCTS = [
  {
    id: "sentio-singles-tee",
    name: "SENTIO Singles Tee",
    category: "T-shirts",
    categoryKey: "tshirts",
    collection: "SENTIO",
    price: 48,
    images: ["sentio1.png", "sentio2.png"],
    badge: "New drop",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    color: "Black",
    featured: true,
    description: "A heavyweight black tee with a quiet SENTIO chest hit and the album's fractured plus-and-cross artwork across the back.",
    details: ["240gsm heavyweight cotton", "Relaxed unisex fit", "Screen print on front and back", "Made in Portugal"]
  },
  {
    id: "sentio-singles-hoodie",
    name: "SENTIO Singles Hoodie",
    category: "Hoodies",
    categoryKey: "hoodies",
    collection: "SENTIO",
    price: 92,
    images: ["sentio4.png", "sentio3.png"],
    badge: "Bestseller",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    color: "Black",
    featured: true,
    description: "The essential SENTIO hoodie: minimal at the front, full album artwork at the back, cut in dense brushed cotton.",
    details: ["420gsm brushed cotton", "Relaxed unisex fit", "Double-layer hood", "Made in Portugal"]
  },
  {
    id: "plus-cross-tee",
    name: "Plus × Cross Tour Tee",
    category: "T-shirts",
    categoryKey: "tshirts",
    collection: "SIGNATURE",
    price: 39,
    compareAt: 52,
    images: ["sentio5.png", "sentio6.png"],
    badge: "Sale",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    color: "Black",
    featured: true,
    description: "A tour-ready black tee with Martin's plus-and-cross mark and a collage built from moments on the road.",
    details: ["220gsm organic cotton", "Regular unisex fit", "Water-based print", "Made in Portugal"]
  },
  {
    id: "plus-cross-hoodie",
    name: "Plus × Cross Tour Hoodie",
    category: "Hoodies",
    categoryKey: "hoodies",
    collection: "SIGNATURE",
    price: 96,
    images: ["sentio7.png", "sentio8.png"],
    badge: "Limited",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    color: "Black",
    featured: true,
    description: "An oversized tour hoodie with signature chest embroidery and a full-colour show collage on the back.",
    details: ["440gsm brushed cotton", "Oversized unisex fit", "Embroidered chest mark", "Made in Portugal"]
  },
  {
    id: "plus-cross-cap",
    name: "Plus × Cross Cap",
    category: "Accessories",
    categoryKey: "accessories",
    collection: "SIGNATURE",
    price: 24,
    compareAt: 34,
    images: ["assets/cap.svg"],
    badge: "Sale",
    sizes: [],
    color: "Black",
    description: "A low-profile six-panel cap finished with the plus-and-cross mark in white embroidery.",
    details: ["Heavy cotton twill", "Adjustable metal closure", "Embroidered front mark", "One size fits most"]
  },
  {
    id: "sentio-canvas-tote",
    name: "SENTIO Canvas Tote",
    category: "Accessories",
    categoryKey: "accessories",
    collection: "SENTIO",
    price: 38,
    images: ["assets/tote.svg"],
    badge: "New drop",
    sizes: [],
    color: "Black",
    description: "An everyday heavyweight canvas tote carrying the geometric SENTIO artwork in a crisp monochrome print.",
    details: ["16oz cotton canvas", "Internal pocket", "Reinforced handles", "45 × 38 cm"]
  },
  {
    id: "studio-bottle",
    name: "Studio Bottle",
    category: "Accessories",
    categoryKey: "accessories",
    collection: "STMPD RCRDS",
    price: 29,
    images: ["assets/bottle.svg"],
    badge: "Studio essential",
    sizes: [],
    color: "Matte black",
    description: "A double-wall steel bottle made for long studio sessions, finished with the Martin Garrix wordmark.",
    details: ["Stainless steel", "500ml capacity", "BPA-free screw cap", "Hand wash only"]
  },
  {
    id: "sentio-double-vinyl",
    name: "SENTIO Double Vinyl",
    category: "Collectibles",
    categoryKey: "collectibles",
    collection: "SENTIO",
    price: 42,
    images: ["assets/vinyl.svg"],
    badge: "Collector's edition",
    sizes: [],
    color: "Black",
    description: "SENTIO pressed across two heavyweight black records in a gatefold sleeve with expanded album artwork.",
    details: ["2 × 180g black vinyl", "Gatefold sleeve", "Printed inner sleeves", "Digital download included"]
  }
];

const CART_KEY = "mg-store-cart-v2";
const SHIPPING_THRESHOLD = 120;
const SHIPPING_PRICE = 12;

const icons = {
  search: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="6.5"></circle><path d="m16 16 4 4"></path></svg>',
  bag: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 8.5h14l-1 12H6l-1-12Z"></path><path d="M9 9V6.5a3 3 0 0 1 6 0V9"></path></svg>',
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15M14 6l6 6-6 6"></path></svg>',
  close: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 5 14 14M19 5 5 19"></path></svg>',
  chevron: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m7 10 5 5 5-5"></path></svg>',
  minus: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14"></path></svg>',
  plus: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M12 5v14"></path></svg>'
};

function money(value) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[character]);
}

function productById(id) {
  return PRODUCTS.find((product) => product.id === id);
}

function productUrl(product) {
  return `product.html?id=${encodeURIComponent(product.id)}`;
}

function currentPage() {
  return document.body.dataset.page || "";
}

function isActive(page) {
  return currentPage() === page ? ' aria-current="page" class="is-active"' : "";
}

function renderShell() {
  const headerRoot = document.querySelector("[data-site-header]");
  const footerRoot = document.querySelector("[data-site-footer]");

  if (headerRoot) {
    headerRoot.innerHTML = `
      <a class="skip-link" href="#main-content">Skip to content</a>
      <div class="announcement">
        <span>Official Martin Garrix merchandise</span>
        <span class="announcement__center">Free shipping from ${money(SHIPPING_THRESHOLD)}</span>
        <span>Worldwide delivery</span>
      </div>
      <header class="site-header">
        <a class="brand" href="index.html" aria-label="Martin Garrix Store home">
          <span class="brand__symbol" aria-hidden="true"><b>+</b><b>×</b></span>
          <span class="brand__name">MARTIN GARRIX</span>
          <span class="brand__store">STORE</span>
        </a>
        <nav class="desktop-nav" aria-label="Primary navigation">
          <a href="collections.html"${isActive("shop")}>Shop all</a>
          <a href="collections.html?category=hoodies">Hoodies</a>
          <a href="acc.html"${isActive("accessories")}>Accessories</a>
          <a href="sale.html"${isActive("sale")}>Sale</a>
          <a href="contact.html"${isActive("contact")}>Contact</a>
        </nav>
        <div class="header-actions">
          <button class="icon-button header-search" type="button" data-search-open aria-label="Search the store">${icons.search}<span>Search</span></button>
          <button class="icon-button bag-button" type="button" data-cart-open aria-label="Open shopping bag">${icons.bag}<span>Bag</span><span class="bag-count" data-cart-count>0</span></button>
          <button class="menu-button" type="button" data-menu-toggle aria-expanded="false" aria-controls="mobile-menu"><span>Menu</span><i></i><i></i></button>
        </div>
      </header>
      <nav class="mobile-menu" id="mobile-menu" data-mobile-menu aria-label="Mobile navigation" aria-hidden="true" inert>
        <div class="mobile-menu__main">
          <a href="index.html">Home <span>01</span></a>
          <a href="collections.html">Shop all <span>02</span></a>
          <a href="acc.html">Accessories <span>03</span></a>
          <a href="sale.html">Sale <span>04</span></a>
          <a href="contact.html">Contact <span>05</span></a>
          <button type="button" data-search-open>Search store <span>06</span></button>
        </div>
        <div class="mobile-menu__meta"><span>Official store</span><span>Worldwide shipping</span></div>
      </nav>`;
  }

  if (footerRoot) {
    footerRoot.innerHTML = `
      <footer class="site-footer">
        <div class="footer-newsletter">
          <p class="eyebrow">Stay in the loop</p>
          <h2>FIRST ACCESS.<br>NO NOISE.</h2>
          <p>New drops, limited restocks and studio stories—sent occasionally.</p>
          <form class="newsletter-form" data-newsletter-form novalidate>
            <label class="sr-only" for="newsletter-email">Email address</label>
            <input id="newsletter-email" name="email" type="email" autocomplete="email" placeholder="YOUR EMAIL ADDRESS" required>
            <button type="submit" aria-label="Subscribe">${icons.arrow}</button>
          </form>
        </div>
        <div class="footer-links">
          <div><p>Shop</p><a href="collections.html">All products</a><a href="collections.html?category=hoodies">Hoodies</a><a href="acc.html">Accessories</a><a href="sale.html">Sale</a></div>
          <div><p>Help</p><a href="contact.html">Contact</a><a href="contact.html#shipping">Shipping & returns</a><a href="contact.html#faq">FAQ</a><a href="checkout.html">Your bag</a></div>
          <div><p>Follow</p><a href="https://www.instagram.com/martingarrix/" target="_blank" rel="noreferrer">Instagram ↗</a><a href="https://www.youtube.com/martingarrix" target="_blank" rel="noreferrer">YouTube ↗</a><a href="https://open.spotify.com/artist/60d24wfXkVzDSfLS6hyCjZ" target="_blank" rel="noreferrer">Spotify ↗</a></div>
        </div>
        <div class="footer-wordmark" aria-hidden="true">MARTIN GARRIX</div>
        <div class="footer-bottom"><span>© <span data-year></span> Martin Garrix Store Concept</span><span>Designed for the front row</span><a href="#top">Back to top ↑</a></div>
      </footer>`;
  }

  document.body.insertAdjacentHTML("beforeend", `
    <div class="cart-scrim" data-cart-scrim hidden></div>
    <aside class="cart-drawer" data-cart-drawer role="dialog" aria-modal="true" aria-hidden="true" aria-label="Shopping bag" inert>
      <div class="cart-drawer__head"><div><p class="eyebrow">Your selection</p><h2>SHOPPING BAG <span data-cart-count>0</span></h2></div><button class="icon-button" type="button" data-cart-close aria-label="Close shopping bag">${icons.close}</button></div>
      <div class="shipping-meter" data-shipping-meter></div>
      <p class="sr-only" data-cart-status aria-live="polite"></p>
      <div class="cart-lines" data-cart-lines></div>
      <div class="cart-drawer__footer" data-cart-footer></div>
    </aside>
    <dialog class="search-dialog" data-search-dialog aria-labelledby="search-dialog-title">
      <div class="search-dialog__head"><p class="eyebrow" id="search-dialog-title">Find your piece</p><button class="icon-button" type="button" data-search-close aria-label="Close search">${icons.close}</button></div>
      <label class="search-input"><span class="sr-only">Search products</span>${icons.search}<input type="search" data-search-input autocomplete="off" placeholder="SEARCH THE STORE"></label>
      <div class="search-results" data-search-results></div>
    </dialog>
    <div class="toast" data-toast role="status" aria-live="polite"></div>`);

  document.querySelectorAll("[data-year]").forEach((node) => { node.textContent = new Date().getFullYear(); });
}

function cardTemplate(product) {
  const alternateImage = product.images[1];
  const action = product.sizes.length
    ? `<a class="product-card__action" href="${productUrl(product)}">Choose options ${icons.arrow}</a>`
    : `<button class="product-card__action" type="button" data-direct-add="${product.id}">Add to bag ${icons.arrow}</button>`;
  const salePrice = product.compareAt ? `<span class="price-old">${money(product.compareAt)}</span>` : "";

  return `
    <article class="product-card reveal" data-product-card data-category="${product.categoryKey}">
      <a class="product-card__visual${alternateImage ? " has-alternate" : ""}" href="${productUrl(product)}" aria-label="View ${product.name}">
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
        <img class="product-card__primary" src="${product.images[0]}" alt="${product.name}, front view" loading="lazy" width="500" height="500">
        ${alternateImage ? `<img class="product-card__secondary" src="${alternateImage}" alt="${product.name}, alternate view" loading="lazy" width="500" height="500">` : ""}
      </a>
      <div class="product-card__info">
        <div><p class="product-card__category">${product.collection} / ${product.category}</p><h3><a href="${productUrl(product)}">${product.name}</a></h3></div>
        <p class="product-card__price">${salePrice}${money(product.price)}</p>
      </div>
      ${action}
    </article>`;
}

function renderStaticGrids() {
  document.querySelectorAll("[data-product-grid]:not([data-catalog-grid])").forEach((grid) => {
    let products = PRODUCTS;
    const mode = grid.dataset.products || "all";
    if (mode === "featured") products = PRODUCTS.filter((product) => product.featured);
    else if (mode === "sale") products = PRODUCTS.filter((product) => product.compareAt);
    else if (mode === "accessories") products = PRODUCTS.filter((product) => product.categoryKey === "accessories" || product.categoryKey === "collectibles");
    else if (mode.includes(",")) products = mode.split(",").map(productById).filter(Boolean);
    else if (productById(mode)) products = [productById(mode)];
    const limit = Number(grid.dataset.limit || products.length);
    grid.innerHTML = products.slice(0, limit).map(cardTemplate).join("");
  });
}

function initCatalog() {
  const grid = document.querySelector("[data-catalog-grid]");
  if (!grid) return;

  const controls = document.querySelector("[data-catalog-controls]");
  const search = document.querySelector("[data-catalog-search]");
  const sort = document.querySelector("[data-catalog-sort]");
  const count = document.querySelector("[data-product-count]");
  const params = new URLSearchParams(window.location.search);
  const defaultCategory = grid.dataset.initialCategory || "all";
  let category = params.get("category") || defaultCategory;
  let term = "";

  function paint() {
    let products = PRODUCTS.filter((product) => {
      const inCategory = category === "all" || product.categoryKey === category || (category === "accessories" && product.categoryKey === "collectibles");
      const haystack = `${product.name} ${product.category} ${product.collection}`.toLowerCase();
      return inCategory && haystack.includes(term.toLowerCase());
    });
    if (grid.dataset.saleOnly === "true") products = products.filter((product) => product.compareAt);

    const sortValue = sort?.value || "featured";
    if (sortValue === "price-low") products.sort((a, b) => a.price - b.price);
    if (sortValue === "price-high") products.sort((a, b) => b.price - a.price);
    if (sortValue === "name") products.sort((a, b) => a.name.localeCompare(b.name));

    grid.innerHTML = products.length ? products.map(cardTemplate).join("") : `<div class="catalog-empty"><p class="eyebrow">No matches</p><h2>TRY A DIFFERENT FILTER.</h2><button class="text-link" type="button" data-clear-filters>Clear all filters ${icons.arrow}</button></div>`;
    if (count) count.textContent = `${products.length} ${products.length === 1 ? "item" : "items"}`;
    controls?.querySelectorAll("[data-category]").forEach((button) => {
      const active = button.dataset.category === category;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    initReveal();
  }

  controls?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    category = button.dataset.category;
    paint();
  });
  search?.addEventListener("input", () => { term = search.value.trim(); paint(); });
  sort?.addEventListener("change", paint);
  grid.addEventListener("click", (event) => {
    if (!event.target.closest("[data-clear-filters]")) return;
    category = defaultCategory;
    term = "";
    if (search) search.value = "";
    if (sort) sort.value = "featured";
    paint();
  });
  paint();
}

function getCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(CART_KEY));
    if (!Array.isArray(saved)) return [];
    return saved.flatMap((item) => {
      const product = productById(item?.id);
      const qty = Math.min(99, Math.max(1, Math.floor(Number(item?.qty))));
      if (!product || !Number.isFinite(qty)) return [];
      const size = product.sizes.length && product.sizes.includes(item?.size) ? item.size : (product.sizes[0] || "One size");
      return [{ id: product.id, size, qty }];
    });
  } catch {
    return [];
  }
}

let cart = getCart();

function saveCart() {
  try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch { /* Storage may be unavailable in private contexts. */ }
  renderCart();
  renderCheckoutSummary();
}

function cartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function cartSubtotal() {
  return cart.reduce((sum, item) => sum + productById(item.id).price * item.qty, 0);
}

function addToCart(id, size = "") {
  const product = productById(id);
  if (!product) return;
  const selectedSize = product.sizes.length ? (product.sizes.includes(size) ? size : product.sizes[0]) : "One size";
  const existing = cart.find((item) => item.id === id && item.size === selectedSize);
  if (existing?.qty >= 99) {
    showToast(`Maximum quantity reached for ${product.name}`);
    openCart();
    return;
  }
  if (existing) existing.qty += 1;
  else cart.push({ id, size: selectedSize, qty: 1 });
  saveCart();
  showToast(`${product.name} added to your bag`);
  openCart();
}

function renderCart() {
  const count = cartCount();
  document.querySelectorAll("[data-cart-count]").forEach((node) => { node.textContent = count; });
  const lines = document.querySelector("[data-cart-lines]");
  const footer = document.querySelector("[data-cart-footer]");
  const meter = document.querySelector("[data-shipping-meter]");
  if (!lines || !footer || !meter) return;

  const subtotal = cartSubtotal();
  const remaining = Math.max(0, SHIPPING_THRESHOLD - subtotal);
  const progress = Math.min(100, (subtotal / SHIPPING_THRESHOLD) * 100);
  meter.innerHTML = `<p>${remaining > 0 ? `You're ${money(remaining)} away from free shipping` : "You've unlocked free shipping"}</p><div><i style="width:${progress}%"></i></div>`;

  if (!cart.length) {
    lines.innerHTML = `<div class="cart-empty"><div class="brand__symbol" aria-hidden="true"><b>+</b><b>×</b></div><h3>YOUR BAG IS QUIET.</h3><p>The next drop is waiting.</p><a class="button button--dark" href="collections.html">Explore the collection ${icons.arrow}</a></div>`;
    footer.innerHTML = "";
    return;
  }

  lines.innerHTML = cart.map((item, index) => {
    const product = productById(item.id);
    return `<article class="cart-line">
      <a class="cart-line__image" href="${productUrl(product)}" aria-label="View ${product.name}"><img src="${product.images[0]}" alt="" width="130" height="130"></a>
      <div class="cart-line__detail"><div><p class="eyebrow">${product.collection}</p><h3><a href="${productUrl(product)}">${product.name}</a></h3><p>${item.size}${product.color ? ` · ${product.color}` : ""}</p></div>
      <div class="cart-line__bottom"><div class="quantity-control" aria-label="${product.name} quantity"><button type="button" data-cart-action="decrease" data-index="${index}" aria-label="Decrease ${product.name} quantity, currently ${item.qty}">${icons.minus}</button><span aria-label="Quantity ${item.qty}">${item.qty}</span><button type="button" data-cart-action="increase" data-index="${index}" aria-label="Increase ${product.name} quantity, currently ${item.qty}">${icons.plus}</button></div><strong>${money(product.price * item.qty)}</strong></div>
      <button class="cart-line__remove" type="button" data-cart-action="remove" data-index="${index}" aria-label="Remove ${product.name}">Remove</button></div>
    </article>`;
  }).join("");
  footer.innerHTML = `<div class="cart-total"><span>Subtotal</span><strong>${money(subtotal)}</strong></div><p>Shipping is confirmed at checkout. Tax is not calculated in this demo.</p><a class="button button--dark button--full" href="checkout.html">Continue to checkout ${icons.arrow}</a>`;
}

let lastFocused = null;
let cartScrimTimer = null;

function syncShellInert() {
  const cartOpen = Boolean(document.querySelector("[data-cart-drawer].is-open"));
  const menuOpen = Boolean(document.querySelector("[data-mobile-menu].is-open"));
  const header = document.querySelector("[data-site-header]");
  const main = document.querySelector("main");
  const footer = document.querySelector("[data-site-footer]");
  if (header) header.inert = cartOpen;
  if (main) main.inert = cartOpen || menuOpen;
  if (footer) footer.inert = cartOpen || menuOpen;
}

function openCart() {
  const drawer = document.querySelector("[data-cart-drawer]");
  const scrim = document.querySelector("[data-cart-scrim]");
  if (!drawer || !scrim) return;
  if (drawer.classList.contains("is-open")) return;
  clearTimeout(cartScrimTimer);
  lastFocused = document.activeElement;
  scrim.hidden = false;
  drawer.classList.add("is-open");
  requestAnimationFrame(() => scrim.classList.add("is-open"));
  drawer.inert = false;
  drawer.setAttribute("aria-hidden", "false");
  document.body.classList.add("overlay-open");
  syncShellInert();
  drawer.querySelector("[data-cart-close]")?.focus();
}

function closeCart() {
  const drawer = document.querySelector("[data-cart-drawer]");
  const scrim = document.querySelector("[data-cart-scrim]");
  if (!drawer || !scrim) return;
  if (!drawer.classList.contains("is-open")) return;
  drawer.classList.remove("is-open");
  scrim.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
  drawer.inert = true;
  clearTimeout(cartScrimTimer);
  cartScrimTimer = setTimeout(() => { scrim.hidden = true; }, 520);
  document.body.classList.remove("overlay-open");
  syncShellInert();
  if (lastFocused instanceof HTMLElement) lastFocused.focus();
}

function showToast(message) {
  const toast = document.querySelector("[data-toast]");
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("is-visible");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove("is-visible"), 3000);
}

function initProductDetail() {
  const root = document.querySelector("[data-product-detail]");
  if (!root) return;
  const id = new URLSearchParams(window.location.search).get("id");
  const product = id ? productById(id) : PRODUCTS[0];
  if (!product) {
    document.title = "Product not found — Martin Garrix Store";
    root.innerHTML = `<section class="product-not-found"><p class="eyebrow">404 / Off the setlist</p><h1>PRODUCT<br>NOT FOUND.</h1><p>This piece may have moved, sold through, or never made the drop.</p><a class="button button--dark" href="collections.html">Return to the collection ${icons.arrow}</a></section>`;
    const relatedSection = document.querySelector(".related-section");
    if (relatedSection) relatedSection.hidden = true;
    return;
  }
  let selectedSize = product.sizes.includes("M") ? "M" : (product.sizes[0] || "One size");
  document.title = `${product.name} — Martin Garrix Store`;

  root.innerHTML = `
    <section class="product-gallery" aria-label="Product images">
      <div class="product-gallery__main"><span class="product-badge">${product.badge || product.collection}</span><img data-product-main-image src="${product.images[0]}" alt="${product.name}, front view" width="800" height="800"></div>
      <div class="product-thumbs">
        ${product.images.map((image, index) => `<button type="button" data-product-thumb="${index}" class="${index === 0 ? "is-active" : ""}" aria-label="Show ${index ? "alternate" : "front"} view" aria-pressed="${index === 0}"><img src="${image}" alt="" width="120" height="120"></button>`).join("")}
      </div>
    </section>
    <section class="product-copy">
      <p class="eyebrow">${product.collection} / ${product.category}</p>
      <h1>${product.name}</h1>
      <p class="product-copy__price">${product.compareAt ? `<span class="price-old">${money(product.compareAt)}</span>` : ""}${money(product.price)}</p>
      <p class="product-copy__intro">${product.description}</p>
      <div class="product-option"><div><span>Colour</span><strong>${product.color}</strong></div><button class="colour-swatch is-active" type="button" aria-label="${product.color}, selected"><i></i></button></div>
      ${product.sizes.length ? `<fieldset class="size-picker"><legend><span>Choose your size</span><a href="#size-guide">Size guide</a></legend><div>${product.sizes.map((size) => `<button type="button" data-size="${size}" class="${size === selectedSize ? "is-active" : ""}" aria-pressed="${size === selectedSize}">${size}</button>`).join("")}</div></fieldset>` : ""}
      <button class="button button--dark button--full add-product" type="button" data-add-product="${product.id}"><span>Add to bag</span><span>${money(product.price)} ${icons.arrow}</span></button>
      <div class="product-notes"><span>Free shipping from ${money(SHIPPING_THRESHOLD)}</span><span>30-day returns</span><span>Secure demo checkout</span></div>
      <div class="product-accordions">
        <details open><summary>Details ${icons.chevron}</summary><ul>${product.details.map((detail) => `<li>${detail}</li>`).join("")}</ul></details>
        <details id="size-guide"><summary>Size & fit ${icons.chevron}</summary><p>${product.sizes.length ? "Fits true to size with a relaxed unisex cut. Size down for a closer fit or up for an oversized silhouette." : "This piece is sold in one universal size. Exact measurements are listed in the details above."}</p></details>
        <details><summary>Delivery & returns ${icons.chevron}</summary><p>Orders are usually packed within 1–2 working days. Unworn items can be returned within 30 days of delivery.</p></details>
      </div>
    </section>`;

  root.addEventListener("click", (event) => {
    const thumb = event.target.closest("[data-product-thumb]");
    if (thumb) {
      const index = Number(thumb.dataset.productThumb);
      root.querySelector("[data-product-main-image]").src = product.images[index];
      root.querySelector("[data-product-main-image]").alt = `${product.name}, ${index ? "alternate" : "front"} view`;
      root.querySelectorAll("[data-product-thumb]").forEach((button) => {
        const active = button === thumb;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", String(active));
      });
    }
    const sizeButton = event.target.closest("[data-size]");
    if (sizeButton) {
      selectedSize = sizeButton.dataset.size;
      root.querySelectorAll("[data-size]").forEach((button) => {
        const active = button === sizeButton;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", String(active));
      });
    }
    if (event.target.closest("[data-add-product]")) addToCart(product.id, selectedSize);
  });

  const related = document.querySelector("[data-related-grid]");
  if (related) {
    const relatedProducts = PRODUCTS.filter((item) => item.id !== product.id && (item.collection === product.collection || item.categoryKey === product.categoryKey)).slice(0, 4);
    related.innerHTML = relatedProducts.map(cardTemplate).join("");
  }
}

function searchResults(term = "") {
  const root = document.querySelector("[data-search-results]");
  if (!root) return;
  const normalized = term.trim().toLowerCase();
  const products = PRODUCTS.filter((product) => `${product.name} ${product.category} ${product.collection}`.toLowerCase().includes(normalized)).slice(0, 6);
  const safeTerm = escapeHtml(term.trim());
  root.innerHTML = `<div class="search-results__label"><span>${normalized ? `Results for “${safeTerm}”` : "Popular now"}</span><span>${products.length} items</span></div>${products.length ? `<div>${products.map((product) => `<a class="search-result" href="${productUrl(product)}"><img src="${product.images[0]}" alt="" width="100" height="100"><span><small>${product.collection} / ${product.category}</small><strong>${product.name}</strong><em>${money(product.price)}</em></span>${icons.arrow}</a>`).join("")}</div>` : `<div class="search-no-results"><h2>NO SIGNAL.</h2><p>Try “hoodie”, “SENTIO” or “accessories”.</p></div>`}`;
}

function openSearch() {
  const dialog = document.querySelector("[data-search-dialog]");
  if (!dialog) return;
  if (dialog.open) return;
  searchResults();
  dialog.showModal();
  document.body.classList.add("overlay-open");
  setTimeout(() => dialog.querySelector("[data-search-input]")?.focus(), 20);
}

function closeSearch() {
  const dialog = document.querySelector("[data-search-dialog]");
  if (!dialog?.open) return;
  dialog.close();
  document.body.classList.remove("overlay-open");
}

function toggleMobileMenu(forceState) {
  const button = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-mobile-menu]");
  if (!button || !menu) return;
  const currentlyOpen = menu.classList.contains("is-open");
  const opening = typeof forceState === "boolean" ? forceState : !currentlyOpen;
  if (opening === currentlyOpen) return;
  button.setAttribute("aria-expanded", String(opening));
  menu.setAttribute("aria-hidden", String(!opening));
  menu.inert = !opening;
  button.classList.toggle("is-open", opening);
  menu.classList.toggle("is-open", opening);
  document.body.classList.toggle("menu-open", opening);
  syncShellInert();
  if (opening) setTimeout(() => menu.querySelector("a")?.focus(), 50);
  else if (button.offsetParent !== null) button.focus();
}

function renderCheckoutSummary() {
  const root = document.querySelector("[data-checkout-summary]");
  if (!root) return;
  const checkoutForm = document.querySelector("[data-checkout-form]");
  const subtotal = cartSubtotal();
  const shipping = cart.length && subtotal < SHIPPING_THRESHOLD ? SHIPPING_PRICE : 0;
  const total = subtotal + shipping;

  if (!cart.length) {
    root.innerHTML = `<div class="checkout-empty"><p class="eyebrow">Nothing here yet</p><h2>YOUR BAG IS EMPTY.</h2><a class="button button--dark" href="collections.html">Shop the collection ${icons.arrow}</a></div>`;
    if (checkoutForm) {
      checkoutForm.hidden = true;
      checkoutForm.inert = true;
      checkoutForm.classList.add("is-disabled");
    }
    return;
  }

  if (checkoutForm) {
    checkoutForm.hidden = false;
    checkoutForm.inert = false;
    checkoutForm.classList.remove("is-disabled");
  }

  root.innerHTML = `<div class="checkout-lines">${cart.map((item) => {
    const product = productById(item.id);
    return `<div class="checkout-line"><div><img src="${product.images[0]}" alt="" width="90" height="90"><span>${item.qty}</span></div><p><strong>${product.name}</strong><small>${item.size} · ${product.color}</small></p><strong>${money(product.price * item.qty)}</strong></div>`;
  }).join("")}</div><dl class="checkout-totals"><div><dt>Subtotal</dt><dd>${money(subtotal)}</dd></div><div><dt>Shipping</dt><dd>${shipping ? money(shipping) : "Free"}</dd></div><div><dt>Total</dt><dd>${money(total)} <small>USD</small></dd></div></dl>`;
}

function initForms() {
  document.querySelectorAll("[data-newsletter-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (!input.checkValidity()) { input.reportValidity(); return; }
      form.reset();
      showToast("You're on the list. Welcome to the front row.");
    });
  });

  const contactForm = document.querySelector("[data-contact-form]");
  contactForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.checkValidity()) { contactForm.reportValidity(); return; }
    contactForm.reset();
    const status = document.querySelector("[data-contact-status]");
    if (status) status.innerHTML = `<strong>MESSAGE RECEIVED.</strong><span>Thanks for reaching out. This concept form is ready to connect to your support inbox.</span>`;
    status?.focus();
  });

  const checkoutForm = document.querySelector("[data-checkout-form]");
  const demoCardInput = checkoutForm?.querySelector("#checkout-card-number");
  const demoExpiryInput = checkoutForm?.querySelector("#checkout-expiry");
  [demoCardInput, demoExpiryInput].filter(Boolean).forEach((input) => {
    input.addEventListener("input", () => input.setCustomValidity(""));
  });
  checkoutForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!cart.length) return;
    if (demoCardInput) {
      const isDemoNumber = demoCardInput.value.replace(/\s+/g, "") === "4242424242424242";
      demoCardInput.setCustomValidity(isDemoNumber ? "" : "Use the demo number 4242 4242 4242 4242.");
    }
    if (demoExpiryInput) {
      const match = demoExpiryInput.value.match(/^\s*(0[1-9]|1[0-2])\s*\/\s*(\d{2})\s*$/);
      const validExpiry = match ? new Date(2000 + Number(match[2]), Number(match[1]), 1) > new Date() : false;
      demoExpiryInput.setCustomValidity(validExpiry ? "" : "Use a current or future demo expiry date in MM / YY format.");
    }
    if (!checkoutForm.checkValidity()) { checkoutForm.reportValidity(); return; }
    const confirmation = document.querySelector("[data-order-confirmation]");
    const checkoutLayout = document.querySelector(".checkout-layout");
    const orderCode = `MG-DEMO-${String(Date.now()).slice(-6)}`;
    cart = [];
    saveCart();
    checkoutForm.hidden = true;
    if (checkoutLayout) checkoutLayout.hidden = true;
    if (confirmation) {
      confirmation.hidden = false;
      confirmation.innerHTML = `<div class="confirmation-mark"><span>+</span><span>×</span></div><p class="eyebrow">Demo order ${orderCode}</p><h1>YOU'RE ON<br>THE LIST.</h1><p>This front-end demo completed the full checkout flow. No payment was processed and no order was sent.</p><a class="button button--dark" href="index.html">Return home ${icons.arrow}</a>`;
      confirmation.focus();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
}

function initReveal() {
  const nodes = document.querySelectorAll(".reveal:not(.is-revealed)");
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    nodes.forEach((node) => node.classList.add("is-revealed"));
    return;
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-revealed");
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -5%", threshold: 0.08 });
  nodes.forEach((node) => observer.observe(node));
}

function bindGlobalEvents() {
  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-cart-open]")) openCart();
    if (event.target.closest("[data-cart-close], [data-cart-scrim]")) closeCart();
    if (event.target.closest("[data-search-open]")) {
      if (document.querySelector("[data-mobile-menu]")?.classList.contains("is-open")) toggleMobileMenu(false);
      openSearch();
    }
    if (event.target.closest("[data-search-close]")) closeSearch();
    if (event.target.closest("[data-menu-toggle]")) toggleMobileMenu();

    const directAdd = event.target.closest("[data-direct-add]");
    if (directAdd) addToCart(directAdd.dataset.directAdd);

    const cartAction = event.target.closest("[data-cart-action]");
    if (cartAction) {
      const index = Number(cartAction.dataset.index);
      if (!cart[index]) return;
      const action = cartAction.dataset.cartAction;
      const productName = productById(cart[index].id).name;
      if (action === "increase") cart[index].qty = Math.min(99, cart[index].qty + 1);
      if (action === "decrease") cart[index].qty -= 1;
      const removed = action === "remove" || cart[index].qty <= 0;
      if (removed) cart.splice(index, 1);
      saveCart();
      const cartStatus = document.querySelector("[data-cart-status]");
      if (cartStatus) cartStatus.textContent = removed ? `${productName} removed from your bag.` : `${productName} quantity ${cart[index].qty}.`;
      queueMicrotask(() => {
        const nextIndex = Math.max(0, Math.min(index, cart.length - 1));
        const nextAction = document.querySelector(`[data-cart-action="${action}"][data-index="${nextIndex}"]`)
          || document.querySelector("[data-cart-action]")
          || document.querySelector("[data-cart-close]");
        nextAction?.focus();
      });
    }
  });

  document.addEventListener("keydown", (event) => {
    const openDrawer = document.querySelector("[data-cart-drawer].is-open");
    if (event.key === "Tab" && openDrawer) {
      const focusable = [...openDrawer.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')];
      if (focusable.length) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    }
    if (event.key !== "Escape") return;
    closeCart();
    closeSearch();
    if (document.querySelector("[data-mobile-menu]")?.classList.contains("is-open")) toggleMobileMenu();
  });

  document.querySelector("[data-search-input]")?.addEventListener("input", (event) => searchResults(event.target.value));
  document.querySelector("[data-search-dialog]")?.addEventListener("click", (event) => {
    if (event.target === event.currentTarget) closeSearch();
  });

  const desktopQuery = window.matchMedia("(min-width: 901px)");
  const resetMobileMenu = (event) => { if (event.matches) toggleMobileMenu(false); };
  if (desktopQuery.addEventListener) desktopQuery.addEventListener("change", resetMobileMenu);
  else desktopQuery.addListener(resetMobileMenu);
}

renderShell();
initProductDetail();
renderStaticGrids();
initCatalog();
renderCart();
renderCheckoutSummary();
initForms();
bindGlobalEvents();
initReveal();
