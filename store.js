const PRODUCTS = Array.isArray(window.GARRIX_PRODUCTS) ? window.GARRIX_PRODUCTS : [];

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

const socialIcons = {
  instagram: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle class="social-icon__dot" cx="17.4" cy="6.7" r="1"></circle></svg>',
  youtube: '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="5.5" width="19" height="13" rx="4"></rect><path class="social-icon__fill" d="m10 9 6 3-6 3Z"></path></svg>',
  spotify: '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"></circle><path d="M7.5 9.2c3.7-1 7.6-.6 10.7 1M8.3 12.2c3.2-.7 6.3-.3 9 1M9 15.1c2.4-.5 4.8-.2 7 .8"></path></svg>',
  facebook: '<svg viewBox="0 0 24 24" aria-hidden="true"><path class="social-icon__fill" d="M14.2 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.6-1.6h1.7V3.8c-.8-.1-1.6-.2-2.4-.2-2.4 0-4.1 1.5-4.1 4.2V10H8.3v3H11v8Z"></path></svg>',
  tiktok: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14.5 3v11.1a4.4 4.4 0 1 1-3.8-4.4v3.2a1.5 1.5 0 1 0 .8 1.3V3h3Zm0 0c.5 2.3 1.9 3.7 4.2 4.1v3.1a7.5 7.5 0 0 1-4.2-1.5"></path></svg>',
  x: '<svg viewBox="0 0 32 26" aria-hidden="true"><path class="social-icon__fill" d="M32 3.078c-1.19.522-2.458.868-3.78 1.036A6.59 6.59 0 0 0 31.106.488a13.12 13.12 0 0 1-4.16 1.588A6.55 6.55 0 0 0 15.75 8.058 18.6 18.6 0 0 1 2.228 1.196a6.56 6.56 0 0 0 2.016 8.768 6.5 6.5 0 0 1-2.964-.808v.072a6.56 6.56 0 0 0 5.256 6.446 6.7 6.7 0 0 1-2.962.104 6.57 6.57 0 0 0 6.13 4.57A13.15 13.15 0 0 1 0 23.056 18.5 18.5 0 0 0 10.064 26c12.072 0 18.672-10 18.672-18.668 0-.29-.01-.57-.024-.848A13.3 13.3 0 0 0 32 3.078Z"></path></svg>',
  snapchat: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3.3c-2.8 0-4.6 2.2-4.6 5.2 0 1 .2 1.9-.1 2.6-.4.8-1.2 1.1-2.3 1.5-.6.2-.5 1 .1 1.3.8.4 1.5.5 2 .6.3 1 1 1.7 2.1 2.1.8.3 1.1 1.2 1.4 1.9.4-.1.9-.2 1.4-.2s1 .1 1.4.2c.3-.7.6-1.6 1.4-1.9 1.1-.4 1.8-1.1 2.1-2.1.5-.1 1.2-.2 2-.6.6-.3.7-1.1.1-1.3-1.1-.4-1.9-.7-2.3-1.5-.3-.7-.1-1.6-.1-2.6 0-3-1.8-5.2-4.6-5.2Z"></path></svg>',
  music: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 17.2a3 3 0 1 1-2-2.8V6l11-2v11.2a3 3 0 1 1-2-2.8V8.2L9 9.5Z"></path></svg>'
};

function money(value) {
  return new Intl.NumberFormat("en-NL", { style: "currency", currency: "EUR", minimumFractionDigits: value % 1 ? 2 : 0, maximumFractionDigits: 2 }).format(value);
}

function imageAtWidth(url, width) {
  if (!url || !url.includes("cdn.shopify.com")) return url;
  return `${url}${url.includes("?") ? "&" : "?"}width=${width}`;
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

function availableSizes(product) {
  const selectableNames = ["size", "maat", "variation"];
  const sizeIndex = product.options?.findIndex(({ name }) => selectableNames.includes(name.toLowerCase())) ?? -1;
  if (sizeIndex < 0) return product.sizes;
  return [...new Set(product.variants.filter(({ available }) => available).map(({ options }) => options[sizeIndex]).filter(Boolean))];
}

function variantForSelection(product, selection = "") {
  const selectableNames = ["size", "maat", "variation"];
  const optionIndex = product.options?.findIndex(({ name }) => selectableNames.includes(name.toLowerCase())) ?? -1;
  if (optionIndex >= 0 && selection && selection !== "One size") {
    return product.variants.find((variant) => variant.options[optionIndex] === selection && variant.available)
      || product.variants.find((variant) => variant.options[optionIndex] === selection)
      || null;
  }
  return product.variants.find(({ available }) => available) || product.variants[0] || null;
}

function itemPrice(product, selection = "") {
  return variantForSelection(product, selection)?.price ?? product.price;
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
      <header class="site-header">
        <a class="brand" href="index.html" aria-label="Martin Garrix merchandise home">
          <span class="brand__symbol" aria-hidden="true">
            <svg viewBox="0 0 48 48"><path d="M30 4H18V18H4V30H18V44H30V30H44V18H30V4Z"/></svg>
            <svg viewBox="0 0 48 48"><path d="M42.3848 14.1005L33.8995 5.61519L24 15.5147L14.1005 5.61519L5.61523 14.1005L15.5147 24L5.61522 33.8995L14.1005 42.3847L24 32.4853L33.8995 42.3847L42.3848 33.8995L32.4853 24L42.3848 14.1005Z"/></svg>
          </span>
        </a>
        <div class="header-actions">
          <button class="menu-button" type="button" data-menu-toggle aria-label="Open menu" aria-expanded="false" aria-controls="mobile-menu"><span class="menu-button__bars" aria-hidden="true"><i></i><i></i></span><span class="menu-button__label">Menu</span></button>
        </div>
      </header>
      <nav class="mobile-menu" id="mobile-menu" data-mobile-menu aria-label="Site navigation" aria-hidden="true" inert>
        <p class="mobile-menu__vertical" aria-hidden="true">MENU</p>
        <div class="mobile-menu__layout">
          <div class="mobile-menu__visual" aria-hidden="true">
            <img data-menu-visual src="https://images.prismic.io/garrix/c121a812-4475-4ed9-86e6-626570ececc6_home.jpg?auto=compress,format&amp;rect=0,0,1040,1040&amp;w=1040&amp;h=1040" alt="" width="1040" height="1040" loading="eager">
            <span><b>+ ×</b> Amsterdam / NL</span>
          </div>
          <div class="mobile-menu__main">
            <a href="index.html" data-menu-image="https://images.prismic.io/garrix/c121a812-4475-4ed9-86e6-626570ececc6_home.jpg?auto=compress,format&amp;rect=0,0,1040,1040&amp;w=1040&amp;h=1040"${isActive("home")}><span>I</span><strong>Home</strong><small>Latest drop</small></a>
            <a href="collections.html" data-menu-image="https://images.prismic.io/garrix/3b5e5adf-7307-423e-ac83-ef7cd0cfe511_nav-shop.jpg?auto=compress,format&amp;rect=0,0,1040,1040&amp;w=1040&amp;h=1040"${isActive("shop")}><span>II</span><strong>Collections</strong><small>All products</small></a>
            <a href="collections.html?category=hoodies" data-menu-image="https://shop.martingarrix.com/cdn/shop/files/198A6508.jpg?v=1784213402&amp;width=1000"><span>III</span><strong>Apparel</strong><small>Tees / Hoodies</small></a>
            <a href="acc.html" data-menu-image="https://cdn.shopify.com/s/files/1/1656/2489/files/KeychainBundle.png?v=1761642033&amp;width=1000"${isActive("accessories")}><span>IV</span><strong>Accessories</strong><small>Flags / Objects</small></a>
            <a href="contact.html" data-menu-image="https://images.prismic.io/garrix/f9b48f37-5eb1-4bd2-986e-74e53d277437_nav-contact.jpg?auto=compress,format&amp;rect=0,0,1040,1040&amp;w=1040&amp;h=1040"${isActive("contact")}><span>V</span><strong>Contact</strong><small>Store support</small></a>
          </div>
        </div>
        <div class="mobile-menu__meta"><a href="https://martingarrix.com/" target="_blank" rel="noreferrer">Martin Garrix ↗</a><a href="https://stmpdrcrds.com/" target="_blank" rel="noreferrer">STMPD RCRDS ↗</a><button type="button" data-search-open>Search</button><button type="button" data-cart-open>Bag (<span data-cart-count>0</span>)</button><a href="sale.html">Sale</a></div>
      </nav>`;
  }

  if (footerRoot) {
    footerRoot.innerHTML = `
      <footer class="artist-footer" id="footer">
        <div class="artist-footer__social-shell">
          <section class="artist-footer__signup" aria-labelledby="footer-newsletter-title">
            <div>
              <p>Newsletter / New releases</p>
              <h2 id="footer-newsletter-title">DON'T MISS THE NEXT DROP.</h2>
            </div>
            <form class="artist-footer__newsletter" action="#" data-newsletter-form novalidate>
              <label class="sr-only" for="newsletter-email">Email address</label>
              <input id="newsletter-email" type="email" autocomplete="email" placeholder="YOUR EMAIL ADDRESS" required>
              <button type="submit" aria-label="Preview newsletter signup">${icons.arrow}</button>
            </form>
          </section>

          <section class="artist-footer__social" aria-labelledby="footer-social-title">
            <h2 id="footer-social-title">Follow Me</h2>
            <ul>
              <li><a href="https://www.instagram.com/martingarrix/" target="_blank" rel="noreferrer" aria-label="Martin Garrix on Instagram">${socialIcons.instagram}<span>instagram</span></a></li>
              <li><a href="https://www.youtube.com/martingarrix" target="_blank" rel="noreferrer" aria-label="Martin Garrix on YouTube">${socialIcons.youtube}<span>youtube</span></a></li>
              <li><a href="https://open.spotify.com/artist/60d24wfXkVzDSfLS6hyCjZ" target="_blank" rel="noreferrer" aria-label="Martin Garrix on Spotify">${socialIcons.spotify}<span>spotify</span></a></li>
              <li><a href="https://www.facebook.com/martin.garrix/" target="_blank" rel="noreferrer" aria-label="Martin Garrix on Facebook">${socialIcons.facebook}<span>facebook</span></a></li>
              <li><a href="https://www.tiktok.com/@martingarrix" target="_blank" rel="noreferrer" aria-label="Martin Garrix on TikTok">${socialIcons.tiktok}<span>tiktok</span></a></li>
              <li><a href="https://twitter.com/martingarrix" target="_blank" rel="noreferrer" aria-label="Martin Garrix on X">${socialIcons.x}<span>twitter</span></a></li>
              <li><a href="https://www.snapchat.com/add/martingarrix" target="_blank" rel="noreferrer" aria-label="Martin Garrix on Snapchat">${socialIcons.snapchat}<span>snapchat</span></a></li>
              <li><a href="https://music.apple.com/artist/martin-garrix/430932944" target="_blank" rel="noreferrer" aria-label="Martin Garrix on Apple Music">${socialIcons.music}<span>music</span></a></li>
            </ul>
          </section>
        </div>

        <div class="artist-footer__gutter">
          <div class="artist-footer__panel">
            <nav class="artist-footer__nav" aria-label="Footer navigation">
              <div><h2>Shop</h2><ul><li><a href="collections.html">All products</a></li><li><a href="collections.html?category=tshirts">T-shirts</a></li><li><a href="collections.html?category=hoodies">Hoodies</a></li><li><a href="acc.html">Accessories</a></li><li><a href="sale.html">Sale</a></li></ul></div>
              <div><h2>Collections</h2><ul><li><a href="collections.html?collection=marty-season">Marty Season</a></li><li><a href="collections.html?collection=stmpd">STMPD RCRDS</a></li><li><a href="collections.html?collection=replay">Replay for Garrix</a></li><li><a href="collections.html?collection=kids">Kids</a></li></ul></div>
              <div><h2>Help</h2><ul><li><a href="contact.html">Contact us</a></li><li><a href="contact.html#shipping">Shipping &amp; returns</a></li><li><a href="contact.html#faq">Frequently asked</a></li><li><a href="checkout.html">Your bag</a></li></ul></div>
              <div><h2>Official</h2><ul><li><a href="https://martingarrix.com/" target="_blank" rel="noreferrer">Artist website</a></li><li><a href="https://shop.martingarrix.com/" target="_blank" rel="noreferrer">Official shop</a></li><li><a href="https://stmpdrcrds.com/" target="_blank" rel="noreferrer">STMPD RCRDS</a></li><li><a href="https://www.stmpdstudios.com/" target="_blank" rel="noreferrer">STMPD Studios</a></li></ul></div>
            </nav>

            <div class="artist-footer__promos">
              <a href="https://stmpdrcrds.com/" target="_blank" rel="noreferrer"><strong>STMPD<br>RCRDS</strong><span>Got any tunes?</span></a>
              <a href="https://www.stmpdstudios.com/" target="_blank" rel="noreferrer"><strong>STMPD<br>STUDIOS</strong><span>Rent the studio</span></a>
            </div>

            <div class="artist-footer__meta">
              <div class="artist-footer__brandline">
                <a href="index.html" aria-label="Back to home"><span aria-hidden="true"><svg viewBox="0 0 48 48"><path d="M30 4H18V18H4V30H18V44H30V30H44V18H30V4Z"/></svg><svg viewBox="0 0 48 48"><path d="M42.3848 14.1005L33.8995 5.61519L24 15.5147L14.1005 5.61519L5.61523 14.1005L15.5147 24L5.61522 33.8995L14.1005 42.3847L24 32.4853L33.8995 42.3847L42.3848 33.8995L32.4853 24L42.3848 14.1005Z"/></svg></span></a>
                <p>© <span data-year></span> Martin Garrix</p>
              </div>
              <ul><li><a href="https://martingarrix.com/terms/" target="_blank" rel="noreferrer">Terms &amp; Conditions</a></li><li><a href="https://martingarrix.com/privacy/" target="_blank" rel="noreferrer">Privacy Policy</a></li><li><a href="https://martingarrix.com/cookies/" target="_blank" rel="noreferrer">Cookies Policy</a></li><li><a href="#top">Back to top</a></li></ul>
            </div>
          </div>
        </div>
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
      <div class="search-results" data-search-results aria-live="polite" aria-atomic="false"></div>
    </dialog>
    <div class="toast" data-toast role="status" aria-live="polite"></div>`);

  document.querySelectorAll("[data-year]").forEach((node) => { node.textContent = new Date().getFullYear(); });
}

function cardTemplate(product) {
  const alternateImage = product.images[1];
  const needsOptions = product.variants?.length > 1 || product.sizes.length > 0;
  const action = !product.available
    ? `<button class="product-card__action" type="button" disabled>Sold out</button>`
    : needsOptions
      ? `<a class="product-card__action" href="${productUrl(product)}">Choose options ${icons.arrow}</a>`
      : `<button class="product-card__action" type="button" data-direct-add="${product.id}">Add to bag ${icons.arrow}</button>`;
  const salePrice = product.compareAt ? `<span class="price-old">${money(product.compareAt)}</span>` : "";

  return `
    <article class="product-card reveal" data-product-card data-category="${product.categoryKey}">
      <a class="product-card__visual${alternateImage ? " has-alternate" : ""}" href="${productUrl(product)}" aria-label="View ${product.name}">
        ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}
        <img class="product-card__primary" src="${imageAtWidth(product.images[0], 800)}" alt="${product.name}, product view" loading="lazy" width="800" height="800">
        ${alternateImage ? `<img class="product-card__secondary" src="${imageAtWidth(alternateImage, 800)}" alt="${product.name}, alternate product view" loading="lazy" width="800" height="800">` : ""}
      </a>
      <div class="product-card__info">
        <div><p class="product-card__category">${product.collection} / ${product.category}</p><h3><a href="${productUrl(product)}">${product.name}</a></h3></div>
        <p class="product-card__price">${salePrice}${product.priceMax > product.price ? `From ${money(product.price)}` : money(product.price)}</p>
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
  const collectionViews = {
    "marty-season": { key: "marty season", label: "Marty Season", title: "MARTY<br>SEASON." },
    stmpd: { key: "stmpd", label: "STMPD RCRDS", title: "STMPD<br>RCRDS." },
    replay: { key: "replay for garrix", label: "Replay for Garrix", title: "REPLAY<br>FOR GARRIX." },
    kids: { key: "kids", label: "Kids", title: "KIDS<br>COLLECTION." }
  };
  const collectionView = collectionViews[(params.get("collection") || "").toLowerCase()] || null;
  const requestedCollection = collectionView?.key || "";
  if (collectionView) {
    const kicker = document.querySelector("[data-catalog-hero-kicker]");
    const title = document.querySelector("[data-catalog-hero-title]");
    const context = document.querySelector("[data-catalog-hero-context]");
    if (kicker) kicker.textContent = "Selected collection / Official product feed";
    if (title) title.innerHTML = collectionView.title;
    if (context) context.innerHTML = `${collectionView.label} / <a href="collections.html">Clear filter</a>`;
  }
  let category = params.get("category") || defaultCategory;
  const filterGroup = controls?.querySelector(".filter-chips");
  const filterButtons = [...(controls?.querySelectorAll("[data-category]") || [])];
  const allowedCategories = filterButtons.map((button) => button.dataset.category);
  if (!allowedCategories.includes(category)) category = defaultCategory;
  let term = (params.get("q") || "").trim();
  if (search && term) search.value = term;
  const requestedSort = params.get("sort");
  if (sort && [...sort.options].some((option) => option.value === requestedSort)) sort.value = requestedSort;

  const categoryMatches = (product, key) => key === "all" || product.categoryKey === key || (key === "accessories" && product.categoryKey === "collectibles");
  const baseProducts = PRODUCTS.filter((product) => {
    const inCollection = !requestedCollection || product.collection.toLowerCase() === requestedCollection;
    const inSale = grid.dataset.saleOnly !== "true" || product.compareAt;
    return inCollection && inSale;
  });
  const availableCategoryKeys = new Set(baseProducts.map((product) => product.categoryKey));
  if (availableCategoryKeys.has("collectibles")) availableCategoryKeys.add("accessories");
  if (category !== "all" && !availableCategoryKeys.has(category)) category = allowedCategories.includes(defaultCategory) ? defaultCategory : "all";

  filterButtons.forEach((button) => {
    button.hidden = button.dataset.category !== "all" && !availableCategoryKeys.has(button.dataset.category);
  });
  const meaningfulFilters = filterButtons.filter((button) => !button.hidden && button.dataset.category !== "all");
  if (filterGroup) filterGroup.hidden = meaningfulFilters.length <= 1;

  function syncCatalogUrl() {
    if (!window.history?.replaceState) return;
    const nextParams = new URLSearchParams(window.location.search);
    if (category === defaultCategory || category === "all") nextParams.delete("category");
    else nextParams.set("category", category);
    if (term) nextParams.set("q", term);
    else nextParams.delete("q");
    if (sort?.value && sort.value !== "featured") nextParams.set("sort", sort.value);
    else nextParams.delete("sort");
    const query = nextParams.toString();
    window.history.replaceState(null, "", `${window.location.pathname}${query ? `?${query}` : ""}${window.location.hash}`);
  }

  let hasPainted = false;
  function paint({ syncUrl = false } = {}) {
    let products = baseProducts.filter((product) => {
      const inCategory = categoryMatches(product, category);
      const haystack = `${product.name} ${product.category} ${product.collection} ${(product.tags || []).join(" ")}`.toLowerCase();
      return inCategory && haystack.includes(term.toLowerCase());
    });

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
    if (syncUrl) syncCatalogUrl();
    if (hasPainted) grid.querySelectorAll(".reveal").forEach((node) => node.classList.add("is-revealed"));
    else initReveal();
    hasPainted = true;
  }

  controls?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    category = button.dataset.category;
    paint({ syncUrl: true });
  });
  let searchTimer = null;
  search?.addEventListener("input", () => {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      term = search.value.trim();
      paint({ syncUrl: true });
    }, 160);
  });
  sort?.addEventListener("change", () => paint({ syncUrl: true }));
  grid.addEventListener("click", (event) => {
    if (!event.target.closest("[data-clear-filters]")) return;
    category = defaultCategory;
    term = "";
    if (search) search.value = "";
    if (sort) sort.value = "featured";
    paint({ syncUrl: true });
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
      if (!product || !product.available || !Number.isFinite(qty)) return [];
      const inStockSizes = availableSizes(product);
      if (product.sizes.length && !inStockSizes.includes(item?.size)) return [];
      const size = product.sizes.length ? item.size : "One size";
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
  return cart.reduce((sum, item) => {
    const product = productById(item.id);
    return sum + itemPrice(product, item.size) * item.qty;
  }, 0);
}

function addToCart(id, size = "") {
  const product = productById(id);
  if (!product) return;
  if (!product.available) {
    showToast(`${product.name} is currently sold out`);
    return;
  }
  const inStockSizes = availableSizes(product);
  const selectedSize = product.sizes.length ? (inStockSizes.includes(size) ? size : inStockSizes[0]) : "One size";
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
      <a class="cart-line__image" href="${productUrl(product)}" aria-label="View ${product.name}"><img src="${imageAtWidth(product.images[0], 260)}" alt="" width="260" height="260"></a>
      <div class="cart-line__detail"><div><p class="eyebrow">${product.collection}</p><h3><a href="${productUrl(product)}">${product.name}</a></h3><p>${item.size}${product.color ? ` · ${product.color}` : ""}</p></div>
      <div class="cart-line__bottom"><div class="quantity-control" aria-label="${product.name} quantity"><button type="button" data-cart-action="decrease" data-index="${index}" aria-label="Decrease ${product.name} quantity, currently ${item.qty}">${icons.minus}</button><span aria-label="Quantity ${item.qty}">${item.qty}</span><button type="button" data-cart-action="increase" data-index="${index}" aria-label="Increase ${product.name} quantity, currently ${item.qty}">${icons.plus}</button></div><strong>${money(itemPrice(product, item.size) * item.qty)}</strong></div>
      <button class="cart-line__remove" type="button" data-cart-action="remove" data-index="${index}" aria-label="Remove ${product.name}">Remove</button></div>
    </article>`;
  }).join("");
  footer.innerHTML = `<div class="cart-total"><span>Subtotal</span><strong>${money(subtotal)}</strong></div><p>Shipping is confirmed at checkout. Tax is not calculated in this demo.</p><a class="button button--dark button--full" href="checkout.html">Continue to checkout ${icons.arrow}</a>`;
}

let lastFocused = null;
let lastSearchFocused = null;
let cartScrimTimer = null;

function safeOverlayOpener(element) {
  if (!(element instanceof HTMLElement)) return document.querySelector("[data-menu-toggle]");
  return element.closest("[data-mobile-menu]") ? document.querySelector("[data-menu-toggle]") : element;
}

function restoreOverlayFocus(element) {
  if (!(element instanceof HTMLElement) || !element.isConnected || element.closest("[inert]")) return;
  element.focus();
}

function syncShellInert() {
  const cartOpen = Boolean(document.querySelector("[data-cart-drawer].is-open, [data-cart-drawer].is-closing"));
  const menuOpen = Boolean(document.querySelector("[data-mobile-menu].is-open, [data-mobile-menu].is-closing"));
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
  lastFocused = safeOverlayOpener(document.activeElement);
  scrim.hidden = false;
  drawer.classList.remove("is-closing");
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
  drawer.classList.add("is-closing");
  scrim.classList.remove("is-open");
  drawer.setAttribute("aria-hidden", "true");
  drawer.inert = true;
  clearTimeout(cartScrimTimer);
  syncShellInert();
  cartScrimTimer = setTimeout(() => {
    scrim.hidden = true;
    drawer.classList.remove("is-closing");
    document.body.classList.remove("overlay-open");
    syncShellInert();
    restoreOverlayFocus(lastFocused);
  }, 520);
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
  const inStockSizes = availableSizes(product);
  let selectedSize = inStockSizes.includes("M") ? "M" : (inStockSizes[0] || product.sizes[0] || "One size");
  let selectedVariant = variantForSelection(product, selectedSize);
  const selectableOption = product.options?.find(({ name }) => ["size", "maat", "variation"].includes(name.toLowerCase()));
  const selectionLabel = selectableOption?.name.toLowerCase() === "variation" ? "Choose a variation" : "Choose your size";
  const productDetails = product.details || [
    `Official product type: ${product.category}`,
    product.color ? `Colour: ${product.color}` : `${product.variants.length} product ${product.variants.length === 1 ? "option" : "options"}`,
    product.available ? `${product.availableVariants} variant${product.availableVariants === 1 ? "" : "s"} available at catalog capture` : "Sold out at catalog capture",
    "Live stock and purchasing are confirmed on the official shop"
  ];
  document.title = `${product.name} — Martin Garrix Store`;

  root.innerHTML = `
    <section class="product-gallery" aria-label="Product images">
      <div class="product-gallery__main"><span class="product-badge">${product.badge || product.collection}</span><img data-product-main-image src="${imageAtWidth(product.images[0], 1200)}" alt="${product.name}, product view" width="1200" height="1200"></div>
      <div class="product-thumbs">
        ${product.images.map((image, index) => `<button type="button" data-product-thumb="${index}" class="${index === 0 ? "is-active" : ""}" aria-label="Show product image ${index + 1} of ${product.images.length}" aria-pressed="${index === 0}"><img src="${imageAtWidth(image, 220)}" alt="" width="220" height="220"></button>`).join("")}
      </div>
    </section>
    <section class="product-copy">
      <p class="eyebrow">${product.collection} / ${product.category}</p>
      <h1>${product.name}</h1>
      <p class="product-copy__price" data-selected-price>${selectedVariant?.compareAt > selectedVariant?.price ? `<span class="price-old">${money(selectedVariant.compareAt)}</span>` : ""}${money(selectedVariant?.price ?? product.price)}</p>
      <p class="product-copy__intro">${product.description}</p>
      ${product.color ? `<div class="product-option"><div><span>Colour</span><strong>${product.color}</strong></div></div>` : ""}
      ${product.sizes.length ? `<fieldset class="size-picker"><legend><span>${selectionLabel}</span>${selectableOption?.name.toLowerCase() === "variation" ? "" : `<a href="#size-guide">Size guide</a>`}</legend><div>${product.sizes.map((size) => `<button type="button" data-size="${size}" class="${size === selectedSize ? "is-active" : ""}" aria-pressed="${size === selectedSize}" ${inStockSizes.includes(size) ? "" : "disabled"}>${size}</button>`).join("")}</div></fieldset>` : ""}
      <button class="button button--dark button--full add-product" type="button" data-add-product="${product.id}" ${selectedVariant?.available ? "" : "disabled"}><span>${selectedVariant?.available ? "Add to demo bag" : "Sold out"}</span><span data-add-price>${money(selectedVariant?.price ?? product.price)} ${selectedVariant?.available ? icons.arrow : ""}</span></button>
      <a class="button button--official button--full" href="${product.sourceUrl}" target="_blank" rel="noreferrer">View on official shop <span aria-hidden="true">↗</span></a>
      <div class="product-notes"><span>Official catalog snapshot</span><span>Live stock may change</span><span>Local demo bag only</span></div>
      <div class="product-accordions">
        <details open><summary>Details ${icons.chevron}</summary><ul>${productDetails.map((detail) => `<li>${detail}</li>`).join("")}</ul></details>
        <details id="size-guide"><summary>Size & fit ${icons.chevron}</summary><p>${product.sizes.length ? "Fits true to size with a relaxed unisex cut. Size down for a closer fit or up for an oversized silhouette." : "This piece is sold in one universal size. Exact measurements are listed in the details above."}</p></details>
        <details><summary>Delivery & returns ${icons.chevron}</summary><p>Orders are usually packed within 1–2 working days. Unworn items can be returned within 30 days of delivery.</p></details>
      </div>
    </section>`;

  root.addEventListener("click", (event) => {
    const sizeGuideLink = event.target.closest('a[href="#size-guide"]');
    if (sizeGuideLink) {
      event.preventDefault();
      const sizeGuide = root.querySelector("#size-guide");
      if (sizeGuide) {
        sizeGuide.open = true;
        sizeGuide.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "center" });
        sizeGuide.querySelector("summary")?.focus({ preventScroll: true });
      }
      return;
    }
    const thumb = event.target.closest("[data-product-thumb]");
    if (thumb) {
      const index = Number(thumb.dataset.productThumb);
      root.querySelector("[data-product-main-image]").src = imageAtWidth(product.images[index], 1200);
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
      selectedVariant = variantForSelection(product, selectedSize);
      root.querySelectorAll("[data-size]").forEach((button) => {
        const active = button === sizeButton;
        button.classList.toggle("is-active", active);
        button.setAttribute("aria-pressed", String(active));
      });
      const price = root.querySelector("[data-selected-price]");
      if (price) price.innerHTML = `${selectedVariant?.compareAt > selectedVariant?.price ? `<span class="price-old">${money(selectedVariant.compareAt)}</span>` : ""}${money(selectedVariant?.price ?? product.price)}`;
      const addButton = root.querySelector("[data-add-product]");
      if (addButton) {
        addButton.disabled = !selectedVariant?.available;
        addButton.querySelector("span:first-child").textContent = selectedVariant?.available ? "Add to demo bag" : "Sold out";
        const addPrice = addButton.querySelector("[data-add-price]");
        if (addPrice) addPrice.innerHTML = `${money(selectedVariant?.price ?? product.price)} ${selectedVariant?.available ? icons.arrow : ""}`;
      }
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
  const matches = PRODUCTS.filter((product) => `${product.name} ${product.category} ${product.collection} ${(product.tags || []).join(" ")}`.toLowerCase().includes(normalized));
  const products = matches.slice(0, 6);
  const safeTerm = escapeHtml(term.trim());
  const resultCount = normalized ? matches.length : products.length;
  const viewAll = normalized && matches.length > products.length
    ? `<a class="search-all" href="collections.html?q=${encodeURIComponent(term.trim())}">View all ${matches.length} results ${icons.arrow}</a>`
    : !normalized
      ? `<a class="search-all" href="collections.html">Shop all ${PRODUCTS.length} products ${icons.arrow}</a>`
      : "";
  root.innerHTML = `<div class="search-results__label"><span>${normalized ? `Results for “${safeTerm}”` : "Popular now"}</span><span>${resultCount} ${resultCount === 1 ? "item" : "items"}</span></div>${products.length ? `<div>${products.map((product) => `<a class="search-result" href="${productUrl(product)}"><img src="${imageAtWidth(product.images[0], 200)}" alt="" width="200" height="200"><span><small>${product.collection} / ${product.category}</small><strong>${product.name}</strong><em>${money(product.price)}</em></span>${icons.arrow}</a>`).join("")}${viewAll}</div>` : `<div class="search-no-results"><h2>NO SIGNAL.</h2><p>Try “Marty Season”, “hoodie”, “STMPD” or “accessories”.</p></div>`}`;
}

function openSearch() {
  const dialog = document.querySelector("[data-search-dialog]");
  if (!dialog) return;
  if (dialog.open) return;
  lastSearchFocused = safeOverlayOpener(document.activeElement);
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
  restoreOverlayFocus(lastSearchFocused);
}

let menuMotionCleanup = null;

function afterMenuMotion(menu, callback) {
  menuMotionCleanup?.();
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    clearTimeout(fallbackTimer);
    menu.removeEventListener("transitionend", onTransitionEnd);
    menuMotionCleanup = null;
    callback();
  };
  const onTransitionEnd = (event) => {
    if (event.target === menu && event.propertyName === "transform") finish();
  };
  const fallbackTimer = setTimeout(finish, reducedMotion ? 0 : 700);
  menu.addEventListener("transitionend", onTransitionEnd);
  menuMotionCleanup = () => {
    finished = true;
    clearTimeout(fallbackTimer);
    menu.removeEventListener("transitionend", onTransitionEnd);
    menuMotionCleanup = null;
  };
}

function toggleMobileMenu(forceState) {
  const button = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-mobile-menu]");
  if (!button || !menu) return;
  const currentlyOpen = menu.classList.contains("is-open");
  const opening = typeof forceState === "boolean" ? forceState : !currentlyOpen;
  if (opening === currentlyOpen || (!opening && menu.classList.contains("is-closing"))) return;
  button.setAttribute("aria-expanded", String(opening));
  button.setAttribute("aria-label", opening ? "Close menu" : "Open menu");
  menu.setAttribute("aria-hidden", String(!opening));
  menu.inert = !opening;
  if (opening) {
    menu.classList.remove("is-closing");
    menu.scrollTop = 0;
    button.classList.add("is-open");
    menu.classList.add("is-open");
    document.body.classList.add("menu-open");
    syncShellInert();
    afterMenuMotion(menu, () => {
      if (menu.classList.contains("is-open") && document.activeElement === button) menu.querySelector("a")?.focus();
    });
    return;
  }

  const shouldRestoreFocus = menu.contains(document.activeElement) || document.activeElement === button;
  menu.classList.remove("is-open");
  menu.classList.add("is-closing");
  syncShellInert();
  afterMenuMotion(menu, () => {
    menu.classList.remove("is-closing");
    menu.scrollTop = 0;
    button.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    syncShellInert();
    const cartOpen = document.querySelector("[data-cart-drawer].is-open");
    const searchOpen = document.querySelector("[data-search-dialog]")?.open;
    if (shouldRestoreFocus && !cartOpen && !searchOpen && button.offsetParent !== null) button.focus();
  });
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
    return `<div class="checkout-line"><div><img src="${imageAtWidth(product.images[0], 180)}" alt="" width="180" height="180"><span>${item.qty}</span></div><p><strong>${product.name}</strong><small>${item.size}${product.color ? ` · ${product.color}` : ""}</small></p><strong>${money(itemPrice(product, item.size) * item.qty)}</strong></div>`;
  }).join("")}</div><dl class="checkout-totals"><div><dt>Subtotal</dt><dd>${money(subtotal)}</dd></div><div><dt>Shipping</dt><dd>${shipping ? money(shipping) : "Free"}</dd></div><div><dt>Total</dt><dd>${money(total)} <small>EUR</small></dd></div></dl>`;
}

function initForms() {
  document.querySelectorAll("[data-newsletter-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (!input.checkValidity()) { input.reportValidity(); return; }
      form.reset();
      showToast("Newsletter form preview");
    });
  });

  const contactForm = document.querySelector("[data-contact-form]");
  contactForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.checkValidity()) { contactForm.reportValidity(); return; }
    contactForm.reset();
    const status = document.querySelector("[data-contact-status]");
    if (status) status.innerHTML = `<strong>DEMO MESSAGE READY.</strong><span>Nothing was sent. Connect this form to a support service before launch.</span>`;
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

let revealObserver = null;

function initReveal() {
  const nodes = document.querySelectorAll(".reveal:not(.is-revealed)");
  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    nodes.forEach((node) => node.classList.add("is-revealed"));
    return;
  }
  if (!revealObserver) {
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -5%", threshold: 0.08 });
  }
  nodes.forEach((node) => revealObserver.observe(node));
}

function initHomeHeader() {
  if (currentPage() !== "home") return;
  let framePending = false;
  const sync = () => {
    document.body.classList.toggle("has-scrolled", window.scrollY > 24);
    framePending = false;
  };
  sync();
  window.addEventListener("scroll", () => {
    if (framePending) return;
    framePending = true;
    requestAnimationFrame(sync);
  }, { passive: true });
}

function initSiteLoader() {
  const loader = document.querySelector("[data-site-loader]");
  if (!loader) return;
  const startedAt = Date.now();
  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    const remaining = Math.max(0, 550 - (Date.now() - startedAt));
    setTimeout(() => {
      loader.classList.add("is-finished");
      setTimeout(() => loader.remove(), 650);
    }, remaining);
  };
  if (document.readyState === "complete") finish();
  else window.addEventListener("load", finish, { once: true });
  setTimeout(finish, 2200);
}

function initDropHero() {
  const root = document.querySelector("[data-drop-hero]");
  if (!root) return;
  const slides = [...root.querySelectorAll("[data-drop-slide]")];
  const dots = [...root.querySelectorAll("[data-drop-dot]")];
  const pauseButton = root.querySelector("[data-drop-pause]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let current = Math.max(0, slides.findIndex((slide) => slide.classList.contains("is-active")));
  let paused = reducedMotion;
  let interactionPaused = false;
  let timer = null;

  function show(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === current;
      slide.classList.toggle("is-active", active);
      slide.setAttribute("aria-hidden", String(!active));
      slide.inert = !active;
    });
    dots.forEach((dot, dotIndex) => {
      const active = dotIndex === current;
      dot.classList.toggle("is-active", active);
      dot.setAttribute("aria-pressed", String(active));
    });
  }

  function schedule() {
    clearTimeout(timer);
    if (paused || interactionPaused || document.hidden) return;
    timer = setTimeout(() => {
      show(current + 1);
      schedule();
    }, 6500);
  }

  dots.forEach((dot) => dot.addEventListener("click", () => {
    show(Number(dot.dataset.dropDot));
    schedule();
  }));

  pauseButton?.addEventListener("click", () => {
    paused = !paused;
    pauseButton.textContent = paused ? "Play" : "Pause";
    pauseButton.setAttribute("aria-label", `${paused ? "Play" : "Pause"} carousel`);
    schedule();
  });

  root.addEventListener("keydown", (event) => {
    const focusedDot = event.target.closest("[data-drop-dot]");
    if (!focusedDot) return;
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    const focusedIndex = Number(focusedDot.dataset.dropDot);
    show(focusedIndex + (event.key === "ArrowLeft" ? -1 : 1));
    dots[current]?.focus();
    schedule();
  });
  root.addEventListener("pointerenter", () => { interactionPaused = true; schedule(); });
  root.addEventListener("pointerleave", () => { interactionPaused = false; schedule(); });
  root.addEventListener("focusin", () => { interactionPaused = true; schedule(); });
  root.addEventListener("focusout", () => {
    queueMicrotask(() => {
      interactionPaused = root.contains(document.activeElement);
      schedule();
    });
  });
  document.addEventListener("visibilitychange", schedule);
  if (reducedMotion && pauseButton) {
    pauseButton.textContent = "Play";
    pauseButton.setAttribute("aria-label", "Play carousel");
  }
  show(current);
  schedule();
}

function initMenuVisual() {
  const frame = document.querySelector(".mobile-menu__visual");
  const image = frame?.querySelector("[data-menu-visual]");
  if (!frame || !image) return;
  image.dataset.currentSource = image.getAttribute("src");
  let requestToken = 0;

  document.querySelectorAll("[data-menu-image]").forEach((link) => {
    const changeImage = () => {
      const nextSource = link.dataset.menuImage;
      const token = ++requestToken;
      if (!nextSource) return;
      if (image.dataset.currentSource === nextSource) {
        frame.classList.remove("is-changing");
        return;
      }
      frame.classList.add("is-changing");
      const preload = new Image();
      preload.decoding = "async";
      preload.onload = async () => {
        try { await preload.decode(); } catch { /* Decoding can resolve through onload alone. */ }
        if (token !== requestToken) return;
        image.src = nextSource;
        image.dataset.currentSource = nextSource;
        requestAnimationFrame(() => frame.classList.remove("is-changing"));
      };
      preload.onerror = () => {
        if (token === requestToken) frame.classList.remove("is-changing");
      };
      preload.src = nextSource;
    };
    link.addEventListener("pointerenter", changeImage);
    link.addEventListener("focus", changeImage);
  });
}

function bindGlobalEvents() {
  document.addEventListener("click", (event) => {
    if (event.target.closest("[data-cart-open]")) {
      if (document.querySelector("[data-mobile-menu]")?.classList.contains("is-open")) toggleMobileMenu(false);
      openCart();
    }
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
    const openMenu = document.querySelector("[data-mobile-menu].is-open");
    if (event.key === "Tab" && openDrawer) {
      const focusable = [...openDrawer.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])')];
      if (focusable.length) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    }
    if (event.key === "Tab" && !openDrawer && openMenu) {
      const menuToggle = document.querySelector("[data-menu-toggle]");
      const focusable = [menuToggle, ...openMenu.querySelectorAll('a[href], button:not([disabled])')].filter(Boolean);
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

}

renderShell();
initSiteLoader();
initHomeHeader();
initMenuVisual();
initDropHero();
initProductDetail();
renderStaticGrids();
initCatalog();
renderCart();
renderCheckoutSummary();
initForms();
bindGlobalEvents();
initReveal();
