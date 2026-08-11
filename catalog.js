/*
 * Official Martin Garrix shop catalog snapshot.
 *
 * Source: https://shop.martingarrix.com/products.json?limit=250
 * Collection source: https://shop.martingarrix.com/collections.json?limit=250
 * Captured: 2026-08-11T16:28:08Z
 *
 * Shopify inventory changes over time. Variant availability below reflects the
 * capture time; sourceUrl remains the canonical page for each product.
 */
(() => {
  "use strict";

  const CURRENCY = "EUR";
  const SHOP_ROOT = "https://shop.martingarrix.com";

  const DESCRIPTION_BY_ID = {
    "replay-for-martin-garrix-2026-lights-smoke": "An oversized 200gsm pure-cotton Replay collaboration tee inspired by show light refracting through smoke.",
    "replay-for-martin-garrix-2026-arrival": "An oversized 200gsm pure-cotton Replay collaboration tee inspired by the composed moment of arriving at a show.",
    "replay-for-martin-garrix-2026-ibiza": "An oversized 200gsm pure-cotton Replay collaboration tee with an Ibiza map and doodled travel routes.",
    "stmpd-rcrds-summer-jacket": "A lined 100% cotton cropped jacket with tone-on-tone STMPD RCRDS embroidery on the chest and back.",
    "mumbai-india-t-shirt": "A loose-fit unisex cotton tee celebrating Martin Garrix's memories of touring and meeting fans in Mumbai.",
    "keychain-bundle-3pcs": "A three-piece bundle of official Martin Garrix and STMPD RCRDS logo keychains.",
    "martin-garrix-logo-keychain": "An official Martin Garrix logo keychain.",
    "stmpd-logo-keychain": "An official STMPD logo keychain.",
    "stmpd-rcrds-full-logo-keychain": "An official full-wordmark STMPD RCRDS keychain.",
    "x-stmpd-flag": "A STMPD +x flag offered in 150 × 100cm flag and 100 × 50cm banner formats.",
    "stmpd-flag-1": "A green STMPD flag offered in 150 × 100cm flag and 100 × 50cm banner formats.",
    "x-flag": "A +x flag offered in 150 × 100cm flag and 100 × 50cm banner formats.",
    "stmpd-x-martin-garrix-xl-sticker-pack-2025": "A pack of 12 large stickers based on recent Martin Garrix and STMPD RCRDS shirt designs.",
    "hometown-hoodie": "A limited-stock, loose-fit unisex hoodie made from 320gsm cotton-blend fabric.",
    "stmpd-liquid-hoodie": "A heavyweight loose-fit hoodie pairing the STMPD logo with an abstract liquid 3D graphic.",
    "stmpd-liquid-tshirt": "A loose-fit 200gsm cotton tee pairing the STMPD logo with an abstract liquid 3D graphic.",
    "stmpd-infinite-grey-hoodie": "A heavyweight stone-grey hoodie featuring the STMPD logo reworked as a white infinity design.",
    "stmpd-infinite-grey-tshirt": "A loose-fit stone-grey cotton tee featuring the STMPD logo reworked as a white infinity design.",
    "stmpd-infinite-black-hoodie": "A heavyweight black hoodie featuring the STMPD logo reworked as a green infinity design.",
    "stmpd-black-hoodie": "A loose-fit black STMPD hoodie with logo embroidery and the signature front patch.",
    "stmpd-blue-hoodie": "A loose-fit blue STMPD hoodie with logo embroidery and the signature front patch.",
    "stmpd-green-hoodie": "A loose-fit green STMPD hoodie with logo embroidery and the signature front patch.",
    "stmpd-black-t-shirt": "A 200gsm black cotton STMPD tee with logo embroidery and the signature front patch.",
    "stmpd-blue-t-shirt": "A 200gsm blue cotton STMPD tee with logo embroidery and the signature front patch.",
    "stmpd-green-t-shirt": "A 200gsm green cotton STMPD tee with logo embroidery and the signature front patch.",
    "x-blue-silver-t-shirt-kids": "A kids-size light-blue cotton tee with the minimal +x silver show-visual design.",
    "black-yellow-ade-t-shirt-kids": "A kids-size black cotton tee with the fan-favorite vibrant yellow taped +x design.",
    "black-silver-t-shirt-kids": "A kids-size black cotton tee with the minimal +x silver show-visual design.",
    "stmpd-flag": "A white STMPD flag measuring 150 × 90cm, available with holes or strings.",
    "stmpd-x-mg-pin-pack": "A two-pin pack featuring the +x and STMPD lion logos.",
    "stmpd-tote-bag-black": "A heavy organic-cotton black tote with large and small white STMPD graphics."
  };

  const RAW_PRODUCTS = [
  {
    "id": "marty-colors-hoodie",
    "shopifyId": "16428911362393",
    "title": "MARTY COLORS – Hoodie",
    "vendor": "Martin Garrix",
    "type": "Hoodies",
    "tags": [
      "2026",
      "Live",
      "Marty Season",
      "€ 30 - € 49"
    ],
    "options": [
      {
        "name": "Size",
        "position": 1,
        "values": [
          "XS",
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      },
      {
        "name": "Color",
        "position": 2,
        "values": [
          "Navy"
        ]
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/1656/2489/files/LettersHoodieBack.png?v=1784213353",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/LettersHoodieFront.png?v=1784213353",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/198A6508.jpg?v=1784213402",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/198A6487_adjusted.jpg?v=1784213402"
    ],
    "variants": [
      {
        "id": "58602888954201",
        "title": "XS / Navy",
        "sku": "MG_MARTY_COLORS_HOODIE_XS",
        "options": [
          "XS",
          "Navy",
          null
        ],
        "price": 75.00,
        "compareAt": null,
        "available": false,
        "image": null
      },
      {
        "id": "58602888986969",
        "title": "S / Navy",
        "sku": "MG_MARTY_COLORS_HOODIE_S",
        "options": [
          "S",
          "Navy",
          null
        ],
        "price": 75.00,
        "compareAt": null,
        "available": true,
        "image": null
      },
      {
        "id": "58602889019737",
        "title": "M / Navy",
        "sku": "MG_MARTY_COLORS_HOODIE_M",
        "options": [
          "M",
          "Navy",
          null
        ],
        "price": 75.00,
        "compareAt": null,
        "available": false,
        "image": null
      },
      {
        "id": "58602889052505",
        "title": "L / Navy",
        "sku": "MG_MARTY_COLORS_HOODIE_L",
        "options": [
          "L",
          "Navy",
          null
        ],
        "price": 75.00,
        "compareAt": null,
        "available": true,
        "image": null
      },
      {
        "id": "58602889085273",
        "title": "XL / Navy",
        "sku": "MG_MARTY_COLORS_HOODIE_XL",
        "options": [
          "XL",
          "Navy",
          null
        ],
        "price": 75.00,
        "compareAt": null,
        "available": true,
        "image": null
      },
      {
        "id": "58602889118041",
        "title": "XXL / Navy",
        "sku": "MG_MARTY_COLORS_HOODIE_XXL",
        "options": [
          "XXL",
          "Navy",
          null
        ],
        "price": 75.00,
        "compareAt": null,
        "available": true,
        "image": null
      }
    ]
  },
  {
    "id": "x-aqua-black-hoodie",
    "shopifyId": "16428934594905",
    "title": "+x AQUA – Black Hoodie",
    "vendor": "Martin Garrix",
    "type": "Hoodies",
    "tags": [
      "2026",
      "Live",
      "Marty Season",
      "€ 30 - € 49"
    ],
    "options": [
      {
        "name": "Size",
        "position": 1,
        "values": [
          "XS",
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      },
      {
        "name": "Color",
        "position": 2,
        "values": [
          "Black"
        ]
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/1656/2489/files/OceanHoodieBack.png?v=1784213692",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/OceanHoodieFront.png?v=1784213693",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/198A6451_adjusted.jpg?v=1784215083",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/198A6474.jpg?v=1784215082"
    ],
    "variants": [
      {
        "id": "58602942497113",
        "title": "XS / Black",
        "sku": "MG_AQUA_BLACK_HOODIE_XS",
        "options": [
          "XS",
          "Black",
          null
        ],
        "price": 75.00,
        "compareAt": null,
        "available": false,
        "image": null
      },
      {
        "id": "58602942529881",
        "title": "S / Black",
        "sku": "MG_AQUA_BLACK_HOODIE_S",
        "options": [
          "S",
          "Black",
          null
        ],
        "price": 75.00,
        "compareAt": null,
        "available": false,
        "image": null
      },
      {
        "id": "58602942562649",
        "title": "M / Black",
        "sku": "MG_AQUA_BLACK_HOODIE_M",
        "options": [
          "M",
          "Black",
          null
        ],
        "price": 75.00,
        "compareAt": null,
        "available": false,
        "image": null
      },
      {
        "id": "58602942595417",
        "title": "L / Black",
        "sku": "MG_AQUA_BLACK_HOODIE_L",
        "options": [
          "L",
          "Black",
          null
        ],
        "price": 75.00,
        "compareAt": null,
        "available": false,
        "image": null
      },
      {
        "id": "58602942628185",
        "title": "XL / Black",
        "sku": "MG_AQUA_BLACK_HOODIE_XL",
        "options": [
          "XL",
          "Black",
          null
        ],
        "price": 75.00,
        "compareAt": null,
        "available": false,
        "image": null
      },
      {
        "id": "58602942660953",
        "title": "XXL / Black",
        "sku": "MG_AQUA_BLACK_HOODIE_XXL",
        "options": [
          "XXL",
          "Black",
          null
        ],
        "price": 75.00,
        "compareAt": null,
        "available": false,
        "image": null
      }
    ]
  },
  {
    "id": "directions-baby-blue-hoodie",
    "shopifyId": "16428945244505",
    "title": "DIRECTIONS - Baby Blue Hoodie",
    "vendor": "Martin Garrix",
    "type": "Hoodies",
    "tags": [
      "2026",
      "Live",
      "Marty Season",
      "€ 30 - € 49"
    ],
    "options": [
      {
        "name": "Size",
        "position": 1,
        "values": [
          "XS",
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      },
      {
        "name": "Color",
        "position": 2,
        "values": [
          "Baby Blue"
        ]
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/1656/2489/files/Signs_Hoodie_Back.png?v=1784214912",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/SignsHoodieFront.png?v=1784213753"
    ],
    "variants": [
      {
        "id": "58603000234329",
        "title": "XS / Baby Blue",
        "sku": "MG_DRCTS_BBYBLUE_HOODIE_XS",
        "options": [
          "XS",
          "Baby Blue",
          null
        ],
        "price": 75.00,
        "compareAt": null,
        "available": false,
        "image": null
      },
      {
        "id": "58603000267097",
        "title": "S / Baby Blue",
        "sku": "MG_DRCTS_BBYBLUE_HOODIE_S",
        "options": [
          "S",
          "Baby Blue",
          null
        ],
        "price": 75.00,
        "compareAt": null,
        "available": false,
        "image": null
      },
      {
        "id": "58603000299865",
        "title": "M / Baby Blue",
        "sku": "MG_DRCTS_BBYBLUE_HOODIE_M",
        "options": [
          "M",
          "Baby Blue",
          null
        ],
        "price": 75.00,
        "compareAt": null,
        "available": false,
        "image": null
      },
      {
        "id": "58603000332633",
        "title": "L / Baby Blue",
        "sku": "MG_DRCTS_BBYBLUE_HOODIE_L",
        "options": [
          "L",
          "Baby Blue",
          null
        ],
        "price": 75.00,
        "compareAt": null,
        "available": false,
        "image": null
      },
      {
        "id": "58603000365401",
        "title": "XL / Baby Blue",
        "sku": "MG_DRCTS_BBYBLUE_HOODIE_XL",
        "options": [
          "XL",
          "Baby Blue",
          null
        ],
        "price": 75.00,
        "compareAt": null,
        "available": false,
        "image": null
      },
      {
        "id": "58603000398169",
        "title": "XXL / Baby Blue",
        "sku": "MG_DRCTS_BBYBLUE_HOODIE_XXL",
        "options": [
          "XXL",
          "Baby Blue",
          null
        ],
        "price": 75.00,
        "compareAt": null,
        "available": false,
        "image": null
      }
    ]
  },
  {
    "id": "mseason-26-black-hoodie",
    "shopifyId": "16428949766489",
    "title": "MSEASON 26 – Black Hoodie",
    "vendor": "Martin Garrix",
    "type": "Hoodies",
    "tags": [
      "2026",
      "Live",
      "Marty Season",
      "€ 30 - € 49"
    ],
    "options": [
      {
        "name": "Size",
        "position": 1,
        "values": [
          "XS",
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      },
      {
        "name": "Color",
        "position": 2,
        "values": [
          "Black"
        ]
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/1656/2489/files/MarinaHoodieBack.png?v=1784213831",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/MarinaHoodieFront.png?v=1784213831",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/198A5990_Adjusted.jpg?v=1784214982",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/198A6010copy.jpg?v=1784214981"
    ],
    "variants": [
      {
        "id": "58603028971865",
        "title": "XS / Black",
        "sku": "MG_MSEASON_26_HOODIE_XS",
        "options": [
          "XS",
          "Black",
          null
        ],
        "price": 75.00,
        "compareAt": null,
        "available": false,
        "image": null
      },
      {
        "id": "58603029004633",
        "title": "S / Black",
        "sku": "MG_MSEASON_26_HOODIE_S",
        "options": [
          "S",
          "Black",
          null
        ],
        "price": 75.00,
        "compareAt": null,
        "available": true,
        "image": null
      },
      {
        "id": "58603029037401",
        "title": "M / Black",
        "sku": "MG_MSEASON_26_HOODIE_M",
        "options": [
          "M",
          "Black",
          null
        ],
        "price": 75.00,
        "compareAt": null,
        "available": true,
        "image": null
      },
      {
        "id": "58603029070169",
        "title": "L / Black",
        "sku": "MG_MSEASON_26_HOODIE_L",
        "options": [
          "L",
          "Black",
          null
        ],
        "price": 75.00,
        "compareAt": null,
        "available": true,
        "image": null
      },
      {
        "id": "58603029102937",
        "title": "XL / Black",
        "sku": "MG_MSEASON_26_HOODIE_XL",
        "options": [
          "XL",
          "Black",
          null
        ],
        "price": 75.00,
        "compareAt": null,
        "available": true,
        "image": null
      },
      {
        "id": "58603029135705",
        "title": "XXL / Black",
        "sku": "MG_MSEASON_26_HOODIE_XXL",
        "options": [
          "XXL",
          "Black",
          null
        ],
        "price": 75.00,
        "compareAt": null,
        "available": true,
        "image": null
      }
    ]
  },
  {
    "id": "martyni-black-shirt",
    "shopifyId": "16428534858073",
    "title": "MARTYNI - Black Shirt",
    "vendor": "Martin Garrix",
    "type": "T-Shirts",
    "tags": [
      "2026",
      "Live",
      "Marty Season",
      "€ 30 - € 49"
    ],
    "options": [
      {
        "name": "Size",
        "position": 1,
        "values": [
          "XS",
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      },
      {
        "name": "Color",
        "position": 2,
        "values": [
          "Black"
        ]
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/1656/2489/files/MartyniBlackTeeBack.png?v=1784211522",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/MartyniBlackTeeFront.png?v=1784211522",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/198A5833.jpg?v=1784210423",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/198A6423_adjusted.jpg?v=1784210423",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/198A6446.jpg?v=1784210423"
    ],
    "variants": [
      {
        "id": "58601954115929",
        "title": "XS / Black",
        "sku": "MG_MARTYNI_BLACK_TEE_XS",
        "options": [
          "XS",
          "Black",
          null
        ],
        "price": 42.50,
        "compareAt": null,
        "available": false,
        "image": null
      },
      {
        "id": "58601954148697",
        "title": "S / Black",
        "sku": "MG_MARTYNI_BLACK_TEE_S",
        "options": [
          "S",
          "Black",
          null
        ],
        "price": 42.50,
        "compareAt": null,
        "available": false,
        "image": null
      },
      {
        "id": "58601954181465",
        "title": "M / Black",
        "sku": "MG_MARTYNI_BLACK_TEE_M",
        "options": [
          "M",
          "Black",
          null
        ],
        "price": 42.50,
        "compareAt": null,
        "available": false,
        "image": null
      },
      {
        "id": "58601954214233",
        "title": "L / Black",
        "sku": "MG_MARTYNI_BLACK_TEE_L",
        "options": [
          "L",
          "Black",
          null
        ],
        "price": 42.50,
        "compareAt": null,
        "available": false,
        "image": null
      },
      {
        "id": "58601954247001",
        "title": "XL / Black",
        "sku": "MG_MARTYNI_BLACK_TEE_XL",
        "options": [
          "XL",
          "Black",
          null
        ],
        "price": 42.50,
        "compareAt": null,
        "available": false,
        "image": null
      },
      {
        "id": "58601954279769",
        "title": "XXL / Black",
        "sku": "MG_MARTYNI_BLACK_TEE_XXL",
        "options": [
          "XXL",
          "Black",
          null
        ],
        "price": 42.50,
        "compareAt": null,
        "available": false,
        "image": null
      }
    ]
  },
  {
    "id": "mseason-26-blue-shirt",
    "shopifyId": "16428452446553",
    "title": "MSEASON 26 - Blue Shirt",
    "vendor": "Martin Garrix",
    "type": "T-Shirts",
    "tags": [
      "2026",
      "Live",
      "Marty Season",
      "€ 30 - € 49"
    ],
    "options": [
      {
        "name": "Size",
        "position": 1,
        "values": [
          "XS",
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      },
      {
        "name": "Color",
        "position": 2,
        "values": [
          "White"
        ]
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/1656/2489/files/Marina_White_Blue_Tee_Back.png?v=1784212916",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/Marina_White_Blue_Tee_Front_f6436f4d-a680-4db0-ba6a-7b2a30979a3f.png?v=1784284152",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/198A5855_adjusted.jpg?v=1784209942",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/198A5911.jpg?v=1784209941"
    ],
    "variants": [
      {
        "id": "58601650684249",
        "title": "XS / White",
        "sku": "MG_MSEASON26_BLUE_TEE_XS",
        "options": [
          "XS",
          "White",
          null
        ],
        "price": 42.50,
        "compareAt": null,
        "available": false,
        "image": null
      },
      {
        "id": "58601650717017",
        "title": "S / White",
        "sku": "MG_MSEASON26_BLUE_TEE_S",
        "options": [
          "S",
          "White",
          null
        ],
        "price": 42.50,
        "compareAt": null,
        "available": true,
        "image": null
      },
      {
        "id": "58601650749785",
        "title": "M / White",
        "sku": "MG_MSEASON26_BLUE_TEE_M",
        "options": [
          "M",
          "White",
          null
        ],
        "price": 42.50,
        "compareAt": null,
        "available": false,
        "image": null
      },
      {
        "id": "58601650782553",
        "title": "L / White",
        "sku": "MG_MSEASON26_BLUE_TEE_L",
        "options": [
          "L",
          "White",
          null
        ],
        "price": 42.50,
        "compareAt": null,
        "available": false,
        "image": null
      },
      {
        "id": "58601650815321",
        "title": "XL / White",
        "sku": "MG_MSEASON26_BLUE_TEE_XL",
        "options": [
          "XL",
          "White",
          null
        ],
        "price": 42.50,
        "compareAt": null,
        "available": false,
        "image": null
      },
      {
        "id": "58601650848089",
        "title": "XXL / White",
        "sku": "MG_MSEASON26_BLUE_TEE_XXL",
        "options": [
          "XXL",
          "White",
          null
        ],
        "price": 42.50,
        "compareAt": null,
        "available": false,
        "image": null
      }
    ]
  },
  {
    "id": "mseason-26-pink-shirt",
    "shopifyId": "16428385304921",
    "title": "MSEASON 26 - Pink Shirt",
    "vendor": "Martin Garrix",
    "type": "T-Shirts",
    "tags": [
      "2026",
      "Live",
      "Marty Season",
      "€ 30 - € 49"
    ],
    "options": [
      {
        "name": "Size",
        "position": 1,
        "values": [
          "XS",
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      },
      {
        "name": "Color",
        "position": 2,
        "values": [
          "White"
        ]
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/1656/2489/files/Marina_White_Pink_Tee_Back.png?v=1784212835",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/Marina_White_Pink_Tee_Front_35847ae9-71da-49d4-b4a7-ae9d5bb6bc03.png?v=1784284176",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/198A6234_adjusted.jpg?v=1784209228",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/198A6255.jpg?v=1784209230"
    ],
    "variants": [
      {
        "id": "58601466528089",
        "title": "XS / White",
        "sku": "MG_MSEASON26_PINK_TEE_XS",
        "options": [
          "XS",
          "White",
          null
        ],
        "price": 42.50,
        "compareAt": null,
        "available": false,
        "image": null
      },
      {
        "id": "58601481601369",
        "title": "S / White",
        "sku": "MG_MSEASON26_PINK_TEE_S",
        "options": [
          "S",
          "White",
          null
        ],
        "price": 42.50,
        "compareAt": null,
        "available": false,
        "image": null
      },
      {
        "id": "58601481634137",
        "title": "M / White",
        "sku": "MG_MSEASON26_PINK_TEE_M",
        "options": [
          "M",
          "White",
          null
        ],
        "price": 42.50,
        "compareAt": null,
        "available": true,
        "image": null
      },
      {
        "id": "58601481666905",
        "title": "L / White",
        "sku": "MG_MSEASON26_PINK_TEE_L",
        "options": [
          "L",
          "White",
          null
        ],
        "price": 42.50,
        "compareAt": null,
        "available": true,
        "image": null
      },
      {
        "id": "58601481699673",
        "title": "XL / White",
        "sku": "MG_MSEASON26_PINK_TEE_XL",
        "options": [
          "XL",
          "White",
          null
        ],
        "price": 42.50,
        "compareAt": null,
        "available": true,
        "image": null
      },
      {
        "id": "58601481732441",
        "title": "XXL / White",
        "sku": "MG_MSEASON26_PINK_TEE_XXL",
        "options": [
          "XXL",
          "White",
          null
        ],
        "price": 42.50,
        "compareAt": null,
        "available": false,
        "image": null
      }
    ]
  },
  {
    "id": "mseason-26-black-shirt",
    "shopifyId": "16428326650201",
    "title": "MSEASON 26 - Black Shirt",
    "vendor": "Martin Garrix",
    "type": "T-Shirts",
    "tags": [
      "2026",
      "Live",
      "Marty Season",
      "€ 30 - € 49"
    ],
    "options": [
      {
        "name": "Size",
        "position": 1,
        "values": [
          "XS",
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      },
      {
        "name": "Color",
        "position": 2,
        "values": [
          "Black"
        ]
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/1656/2489/files/Marina_Black_White_Tee_Back.png?v=1784212964",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/Marina_Black_White_Tee_Front.png?v=1784212964",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/198A6300.jpg?v=1784209078",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/198A6379_adjusted.jpg?v=1784209078",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/198A6404.jpg?v=1784209078",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/198A7019_Adjusted.jpg?v=1784209078",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/198A7046.jpg?v=1784209079"
    ],
    "variants": [
      {
        "id": "58601403547993",
        "title": "XS / Black",
        "sku": "MG_MSEASON26_BLACK_TEE_XS",
        "options": [
          "XS",
          "Black",
          null
        ],
        "price": 42.50,
        "compareAt": null,
        "available": false,
        "image": null
      },
      {
        "id": "58601403580761",
        "title": "S / Black",
        "sku": "MG_MSEASON26_BLACK_TEE_S",
        "options": [
          "S",
          "Black",
          null
        ],
        "price": 42.50,
        "compareAt": null,
        "available": true,
        "image": null
      },
      {
        "id": "58601403613529",
        "title": "M / Black",
        "sku": "MG_MSEASON26_BLACK_TEE_M",
        "options": [
          "M",
          "Black",
          null
        ],
        "price": 42.50,
        "compareAt": null,
        "available": true,
        "image": null
      },
      {
        "id": "58601403646297",
        "title": "L / Black",
        "sku": "MG_MSEASON26_BLACK_TEE_L",
        "options": [
          "L",
          "Black",
          null
        ],
        "price": 42.50,
        "compareAt": null,
        "available": true,
        "image": null
      },
      {
        "id": "58601403679065",
        "title": "XL / Black",
        "sku": "MG_MSEASON26_BLACK_TEE_XL",
        "options": [
          "XL",
          "Black",
          null
        ],
        "price": 42.50,
        "compareAt": null,
        "available": true,
        "image": null
      },
      {
        "id": "58601403711833",
        "title": "XXL / Black",
        "sku": "MG_MSEASON26_BLACK_TEE_XXL",
        "options": [
          "XXL",
          "Black",
          null
        ],
        "price": 42.50,
        "compareAt": null,
        "available": false,
        "image": null
      }
    ]
  },
  {
    "id": "aqua-black-shirt",
    "shopifyId": "16428300108121",
    "title": "AQUA - Black Shirt",
    "vendor": "Martin Garrix",
    "type": "T-Shirts",
    "tags": [
      "2026",
      "Live",
      "Marty Season",
      "€ 30 - € 49"
    ],
    "options": [
      {
        "name": "Size",
        "position": 1,
        "values": [
          "XS",
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      },
      {
        "name": "Color",
        "position": 2,
        "values": [
          "Black"
        ]
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/1656/2489/files/Ocean_Tee_Back.png?v=1784213112",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/Ocean_Tee_Front.png?v=1784213112",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/007A5006.jpg?v=1784208770",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/198A6038_adjusted.jpg?v=1784208770",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/198A6094.jpg?v=1784208770"
    ],
    "variants": [
      {
        "id": "58601360621913",
        "title": "XS / Black",
        "sku": "MG_AQUA_BLACK_TEE_XS",
        "options": [
          "XS",
          "Black",
          null
        ],
        "price": 42.50,
        "compareAt": null,
        "available": false,
        "image": null
      },
      {
        "id": "58601373761881",
        "title": "S / Black",
        "sku": "MG_AQUA_BLACK_TEE_S",
        "options": [
          "S",
          "Black",
          null
        ],
        "price": 42.50,
        "compareAt": null,
        "available": false,
        "image": null
      },
      {
        "id": "58601373794649",
        "title": "M / Black",
        "sku": "MG_AQUA_BLACK_TEE_M",
        "options": [
          "M",
          "Black",
          null
        ],
        "price": 42.50,
        "compareAt": null,
        "available": false,
        "image": null
      },
      {
        "id": "58601373827417",
        "title": "L / Black",
        "sku": "MG_AQUA_BLACK_TEE_L",
        "options": [
          "L",
          "Black",
          null
        ],
        "price": 42.50,
        "compareAt": null,
        "available": false,
        "image": null
      },
      {
        "id": "58601373860185",
        "title": "XL / Black",
        "sku": "MG_AQUA_BLACK_TEE_XL",
        "options": [
          "XL",
          "Black",
          null
        ],
        "price": 42.50,
        "compareAt": null,
        "available": false,
        "image": null
      },
      {
        "id": "58601373892953",
        "title": "XXL / Black",
        "sku": "MG_AQUA_BLACK_TEE_XXL",
        "options": [
          "XXL",
          "Black",
          null
        ],
        "price": 42.50,
        "compareAt": null,
        "available": false,
        "image": null
      }
    ]
  },
  {
    "id": "marty-colors-navy-shirt",
    "shopifyId": "16428275040601",
    "title": "MARTY COLORS - Navy Shirt",
    "vendor": "Martin Garrix",
    "type": "T-Shirts",
    "tags": [
      "2026",
      "Live",
      "Marty Season",
      "€ 30 - € 49"
    ],
    "options": [
      {
        "name": "Size",
        "position": 1,
        "values": [
          "XS",
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      },
      {
        "name": "Color",
        "position": 2,
        "values": [
          "Navy"
        ]
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/1656/2489/files/Letters_Tee_Back.png?v=1784213221",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/198A5944_adjusted.jpg?v=1784207984",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/198A5973.jpg?v=1784207985",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/198A6353_adjusted.jpg?v=1784207984",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/198A6364.jpg?v=1784207984",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/198A6610.jpg?v=1784207985",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/198A7078.jpg?v=1784207985"
    ],
    "variants": [
      {
        "id": "58601310781785",
        "title": "XS / Navy",
        "sku": "MG_MARTYCOLORS_NAVY_TEE_XS",
        "options": [
          "XS",
          "Navy",
          null
        ],
        "price": 42.50,
        "compareAt": null,
        "available": false,
        "image": null
      },
      {
        "id": "58601327526233",
        "title": "S / Navy",
        "sku": "MG_MARTYCOLORS_NAVY_TEE_S",
        "options": [
          "S",
          "Navy",
          null
        ],
        "price": 42.50,
        "compareAt": null,
        "available": false,
        "image": null
      },
      {
        "id": "58601327559001",
        "title": "M / Navy",
        "sku": "MG_MARTYCOLORS_NAVY_TEE_M",
        "options": [
          "M",
          "Navy",
          null
        ],
        "price": 42.50,
        "compareAt": null,
        "available": false,
        "image": null
      },
      {
        "id": "58601327591769",
        "title": "L / Navy",
        "sku": "MG_MARTYCOLORS_NAVY_TEE_L",
        "options": [
          "L",
          "Navy",
          null
        ],
        "price": 42.50,
        "compareAt": null,
        "available": false,
        "image": null
      },
      {
        "id": "58601327624537",
        "title": "XL / Navy",
        "sku": "MG_MARTYCOLORS_NAVY_TEE_XL",
        "options": [
          "XL",
          "Navy",
          null
        ],
        "price": 42.50,
        "compareAt": null,
        "available": false,
        "image": null
      },
      {
        "id": "58601327657305",
        "title": "XXL / Navy",
        "sku": "MG_MARTYCOLORS_NAVY_TEE_XXL",
        "options": [
          "XXL",
          "Navy",
          null
        ],
        "price": 42.50,
        "compareAt": null,
        "available": false,
        "image": null
      }
    ]
  },
  {
    "id": "directions-baby-blue-t-shirt",
    "shopifyId": "16427959288153",
    "title": "DIRECTIONS - Baby Blue T-Shirt",
    "vendor": "Martin Garrix",
    "type": "T-Shirts",
    "tags": [
      "2026",
      "Live",
      "Marty Season",
      "€ 30 - € 49"
    ],
    "options": [
      {
        "name": "Size",
        "position": 1,
        "values": [
          "XS",
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      },
      {
        "name": "Color",
        "position": 2,
        "values": [
          "Baby Blue"
        ]
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/1656/2489/files/SignsTeeBack_45bb098f-2af9-4ee7-92a2-e4d3c0382a77.png?v=1784212185",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/SignsTeeFront_6a1fe8f6-4090-42f6-a469-b3aeff65c537.png?v=1784212185",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/198A5837.jpg?v=1784207225",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/198A6110_adjusted.jpg?v=1784207225",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/198A6136.jpg?v=1784207226"
    ],
    "variants": [
      {
        "id": "58600755036505",
        "title": "XS / Baby Blue",
        "sku": "MG_DIRECTIONS_BBLUE_XS",
        "options": [
          "XS",
          "Baby Blue",
          null
        ],
        "price": 42.50,
        "compareAt": null,
        "available": false,
        "image": null
      },
      {
        "id": "58601290170713",
        "title": "S / Baby Blue",
        "sku": "MG_DIRECTIONS_BBLUE_S",
        "options": [
          "S",
          "Baby Blue",
          null
        ],
        "price": 42.50,
        "compareAt": null,
        "available": false,
        "image": null
      },
      {
        "id": "58601290203481",
        "title": "M / Baby Blue",
        "sku": "MG_DIRECTIONS_BBLUE_M",
        "options": [
          "M",
          "Baby Blue",
          null
        ],
        "price": 42.50,
        "compareAt": null,
        "available": false,
        "image": null
      },
      {
        "id": "58601290236249",
        "title": "L / Baby Blue",
        "sku": "MG_DIRECTIONS_BBLUE_L",
        "options": [
          "L",
          "Baby Blue",
          null
        ],
        "price": 42.50,
        "compareAt": null,
        "available": false,
        "image": null
      },
      {
        "id": "58601290269017",
        "title": "XL / Baby Blue",
        "sku": "MG_DIRECTIONS_BBLUE_XL",
        "options": [
          "XL",
          "Baby Blue",
          null
        ],
        "price": 42.50,
        "compareAt": null,
        "available": false,
        "image": null
      },
      {
        "id": "58601290301785",
        "title": "XXL / Baby Blue",
        "sku": "MG_DIRECTIONS_BBLUE_XXL",
        "options": [
          "XXL",
          "Baby Blue",
          null
        ],
        "price": 42.50,
        "compareAt": null,
        "available": false,
        "image": null
      }
    ]
  },
  {
    "id": "replay-for-martin-garrix-2026-lights-smoke",
    "shopifyId": "16364148556121",
    "title": "REPLAY FOR MARTIN GARRIX 2026 - LIGHTS & SMOKE",
    "vendor": "Replay",
    "type": "T-Shirts",
    "tags": [
      "Replay",
      "€ 50 - € 69"
    ],
    "options": [
      {
        "name": "Maat",
        "position": 1,
        "values": [
          "S",
          "M",
          "L",
          "XL"
        ]
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/1656/2489/files/DSC00017.png?v=1782117676",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/DSC00016-2.png?v=1782117675",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/smoke-back.jpg?v=1782290860",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/smoke-front.jpg?v=1782290860"
    ],
    "variants": [
      {
        "id": "58371522560345",
        "title": "S",
        "sku": "MG-REPLAY-26-LIGHT-SMOKE-BLACK-S",
        "options": [
          "S",
          null,
          null
        ],
        "price": 59.00,
        "compareAt": null,
        "available": true,
        "image": null
      },
      {
        "id": "58371522593113",
        "title": "M",
        "sku": "MG-REPLAY-26-LIGHT-SMOKE-BLACK-M",
        "options": [
          "M",
          null,
          null
        ],
        "price": 59.00,
        "compareAt": null,
        "available": true,
        "image": null
      },
      {
        "id": "58371522625881",
        "title": "L",
        "sku": "MG-REPLAY-26-LIGHT-SMOKE-BLACK-L",
        "options": [
          "L",
          null,
          null
        ],
        "price": 59.00,
        "compareAt": null,
        "available": true,
        "image": null
      },
      {
        "id": "58371522658649",
        "title": "XL",
        "sku": "MG-REPLAY-26-LIGHT-SMOKE-BLACK-XL",
        "options": [
          "XL",
          null,
          null
        ],
        "price": 59.00,
        "compareAt": null,
        "available": true,
        "image": null
      }
    ]
  },
  {
    "id": "replay-for-martin-garrix-2026-arrival",
    "shopifyId": "16364148588889",
    "title": "REPLAY FOR MARTIN GARRIX 2026 - ARRIVAL",
    "vendor": "Replay",
    "type": "T-Shirts",
    "tags": [
      "Replay",
      "€ 50 - € 69"
    ],
    "options": [
      {
        "name": "Maat",
        "position": 1,
        "values": [
          "S",
          "M",
          "L",
          "XL"
        ]
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/1656/2489/files/DSC00015-2.png?v=1782117669",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/DSC00014.png?v=1782117669",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/arrive-back.jpg?v=1782290875",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/arrive-front.jpg?v=1782290875"
    ],
    "variants": [
      {
        "id": "58371522691417",
        "title": "S",
        "sku": "MG-REPLAY-26-ARRIVAL-BLACK-S",
        "options": [
          "S",
          null,
          null
        ],
        "price": 59.00,
        "compareAt": null,
        "available": true,
        "image": null
      },
      {
        "id": "58371522724185",
        "title": "M",
        "sku": "MG-REPLAY-26-ARRIVAL-BLACK-M",
        "options": [
          "M",
          null,
          null
        ],
        "price": 59.00,
        "compareAt": null,
        "available": true,
        "image": null
      },
      {
        "id": "58371522756953",
        "title": "L",
        "sku": "MG-REPLAY-26-ARRIVAL-BLACK-L",
        "options": [
          "L",
          null,
          null
        ],
        "price": 59.00,
        "compareAt": null,
        "available": true,
        "image": null
      },
      {
        "id": "58371522789721",
        "title": "XL",
        "sku": "MG-REPLAY-26-ARRIVAL-BLACK-XL",
        "options": [
          "XL",
          null,
          null
        ],
        "price": 59.00,
        "compareAt": null,
        "available": true,
        "image": null
      }
    ]
  },
  {
    "id": "replay-for-martin-garrix-2026-ibiza",
    "shopifyId": "16364148654425",
    "title": "REPLAY FOR MARTIN GARRIX 2026 - IBIZA",
    "vendor": "Replay",
    "type": "T-Shirts",
    "tags": [
      "Replay",
      "€ 50 - € 69"
    ],
    "options": [
      {
        "name": "Maat",
        "position": 1,
        "values": [
          "S",
          "M",
          "L",
          "XL"
        ]
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/1656/2489/files/DSC00011.png?v=1782117454",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/DSC00013.png?v=1782117455",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/ibiza-back.jpg?v=1782290895",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/ibiza-front.jpg?v=1782290895"
    ],
    "variants": [
      {
        "id": "58371523215705",
        "title": "S",
        "sku": "MG-REPLAY-26-IBIZA-BLACK-S",
        "options": [
          "S",
          null,
          null
        ],
        "price": 59.00,
        "compareAt": null,
        "available": true,
        "image": null
      },
      {
        "id": "58371523248473",
        "title": "M",
        "sku": "MG-REPLAY-26-IBIZA-BLACK-M",
        "options": [
          "M",
          null,
          null
        ],
        "price": 59.00,
        "compareAt": null,
        "available": true,
        "image": null
      },
      {
        "id": "58371523281241",
        "title": "L",
        "sku": "MG-REPLAY-26-IBIZA-BLACK-L",
        "options": [
          "L",
          null,
          null
        ],
        "price": 59.00,
        "compareAt": null,
        "available": true,
        "image": null
      },
      {
        "id": "58371523314009",
        "title": "XL",
        "sku": "MG-REPLAY-26-IBIZA-BLACK-XL",
        "options": [
          "XL",
          null,
          null
        ],
        "price": 59.00,
        "compareAt": null,
        "available": true,
        "image": null
      }
    ]
  },
  {
    "id": "stmpd-rcrds-summer-jacket",
    "shopifyId": "16256678199641",
    "title": "STMPD Summer Jacket",
    "vendor": "STMPD RCRDS",
    "type": "Jackets",
    "tags": [
      "Capsule",
      "Live",
      "Related:Capsule"
    ],
    "options": [
      {
        "name": "Size",
        "position": 1,
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      },
      {
        "name": "Color",
        "position": 2,
        "values": [
          "Beige"
        ]
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/1656/2489/files/STMPDRCRDSSummerJacketBack.png?v=1776692646",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/STMPDRCRDSSummerJacketFront.png?v=1776692646",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/6.jpg?v=1776860157",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/5_61f60cee-8bba-48ad-b013-325773a0c44c.jpg?v=1776860157",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/4_a3bc2f18-b180-4306-9457-e0880bf2abfb.jpg?v=1776860157",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/3_68987933-ea01-47d5-a5fd-c898bce89121.jpg?v=1776860157",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/2.jpg?v=1776860157",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/1.jpg?v=1776860158"
    ],
    "variants": [
      {
        "id": "57868627509593",
        "title": "S / Beige",
        "sku": "MG-STMPD-SUMMER-JACKET-S",
        "options": [
          "S",
          "Beige",
          null
        ],
        "price": 120.00,
        "compareAt": null,
        "available": true,
        "image": null
      },
      {
        "id": "57868627542361",
        "title": "M / Beige",
        "sku": "MG-STMPD-SUMMER-JACKET-M",
        "options": [
          "M",
          "Beige",
          null
        ],
        "price": 120.00,
        "compareAt": null,
        "available": true,
        "image": null
      },
      {
        "id": "57868627575129",
        "title": "L / Beige",
        "sku": "MG-STMPD-SUMMER-JACKET-L",
        "options": [
          "L",
          "Beige",
          null
        ],
        "price": 120.00,
        "compareAt": null,
        "available": true,
        "image": null
      },
      {
        "id": "57868627607897",
        "title": "XL / Beige",
        "sku": "MG-STMPD-SUMMER-JACKET-XL",
        "options": [
          "XL",
          "Beige",
          null
        ],
        "price": 120.00,
        "compareAt": null,
        "available": true,
        "image": null
      },
      {
        "id": "57868627640665",
        "title": "XXL / Beige",
        "sku": "MG-STMPD-SUMMER-JACKET-XXL",
        "options": [
          "XXL",
          "Beige",
          null
        ],
        "price": 120.00,
        "compareAt": null,
        "available": true,
        "image": null
      }
    ]
  },
  {
    "id": "mumbai-india-t-shirt",
    "shopifyId": "16014006354265",
    "title": "Mumbai India T-Shirt",
    "vendor": "Martin Garrix",
    "type": "T-Shirts",
    "tags": [
      "2026",
      "india-tour-tee",
      "€ 30 - € 49"
    ],
    "options": [
      {
        "name": "Size",
        "position": 1,
        "values": [
          "XS",
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      },
      {
        "name": "Color",
        "position": 2,
        "values": [
          "Black"
        ]
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/1656/2489/files/IMG-7149.png?v=1770224148",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/IndiaFront.png?v=1770224148",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/007A1023-Enhanced-NR.jpg?v=1770224148",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/007A0959.jpg?v=1770224148"
    ],
    "variants": [
      {
        "id": "56946972393817",
        "title": "XS / Black",
        "sku": "MG_INDIA_TEE_BLCK_XS",
        "options": [
          "XS",
          "Black",
          null
        ],
        "price": 42.50,
        "compareAt": null,
        "available": false,
        "image": null
      },
      {
        "id": "56946972426585",
        "title": "S / Black",
        "sku": "MG_INDIA_TEE_BLCK_S",
        "options": [
          "S",
          "Black",
          null
        ],
        "price": 42.50,
        "compareAt": null,
        "available": false,
        "image": null
      },
      {
        "id": "56946972459353",
        "title": "M / Black",
        "sku": "MG_INDIA_TEE_BLCK_M",
        "options": [
          "M",
          "Black",
          null
        ],
        "price": 42.50,
        "compareAt": null,
        "available": true,
        "image": null
      },
      {
        "id": "56946972492121",
        "title": "L / Black",
        "sku": "MG_INDIA_TEE_BLCK_L",
        "options": [
          "L",
          "Black",
          null
        ],
        "price": 42.50,
        "compareAt": null,
        "available": false,
        "image": null
      },
      {
        "id": "56946972524889",
        "title": "XL / Black",
        "sku": "MG_INDIA_TEE_BLCK_XL",
        "options": [
          "XL",
          "Black",
          null
        ],
        "price": 42.50,
        "compareAt": null,
        "available": false,
        "image": null
      },
      {
        "id": "56946972557657",
        "title": "XXL / Black",
        "sku": "MG_INDIA_TEE_BLCK_XXL",
        "options": [
          "XXL",
          "Black",
          null
        ],
        "price": 42.50,
        "compareAt": null,
        "available": false,
        "image": null
      }
    ]
  },
  {
    "id": "keychain-bundle-3pcs",
    "shopifyId": "15901087465817",
    "title": "Keychain Bundle (3pcs)",
    "vendor": "The Martin Garrix Shop",
    "type": "Accessories",
    "tags": [
      "2025",
      "Fall",
      "Live"
    ],
    "options": [
      {
        "name": "Title",
        "position": 1,
        "values": [
          "Default Title"
        ]
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/1656/2489/files/KeychainBundle.png?v=1761642033",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/MGLogoKeychain.png?v=1761641155",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/STMPDRCRDSFullLogoKeychain.png?v=1761642243",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/STMPDLogoKeychain.png?v=1761642243"
    ],
    "variants": [
      {
        "id": "56495671345497",
        "title": "Default Title",
        "sku": "MG-STMPD-KEYCHAIN-BUNDLE",
        "options": [
          "Default Title",
          null,
          null
        ],
        "price": 14.85,
        "compareAt": 12.50,
        "available": true,
        "image": null
      }
    ]
  },
  {
    "id": "martin-garrix-logo-keychain",
    "shopifyId": "15901079667033",
    "title": "Martin Garrix Logo Keychain",
    "vendor": "Martin Garrix",
    "type": "Accessories",
    "tags": [
      "2025",
      "Fall",
      "Live"
    ],
    "options": [
      {
        "name": "Title",
        "position": 1,
        "values": [
          "Default Title"
        ]
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/1656/2489/files/MGLogoKeychain.png?v=1761641155"
    ],
    "variants": [
      {
        "id": "56495646507353",
        "title": "Default Title",
        "sku": "MG-LOGO-KEYCHAIN",
        "options": [
          "Default Title",
          null,
          null
        ],
        "price": 4.95,
        "compareAt": null,
        "available": true,
        "image": null
      }
    ]
  },
  {
    "id": "stmpd-logo-keychain",
    "shopifyId": "15901079044441",
    "title": "STMPD Logo Keychain",
    "vendor": "STMPD RCRDS",
    "type": "Accessories",
    "tags": [
      "2025",
      "Fall",
      "Live"
    ],
    "options": [
      {
        "name": "Title",
        "position": 1,
        "values": [
          "Default Title"
        ]
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/1656/2489/files/STMPDLogoKeychain.png?v=1761642243"
    ],
    "variants": [
      {
        "id": "56495642706265",
        "title": "Default Title",
        "sku": "STMPD-LOGO-KEYCHAIN",
        "options": [
          "Default Title",
          null,
          null
        ],
        "price": 4.95,
        "compareAt": null,
        "available": true,
        "image": null
      }
    ]
  },
  {
    "id": "stmpd-rcrds-full-logo-keychain",
    "shopifyId": "15901078913369",
    "title": "STMPD RCRDS Full Logo Keychain",
    "vendor": "STMPD RCRDS",
    "type": "Accessories",
    "tags": [
      "2025",
      "Fall",
      "Live"
    ],
    "options": [
      {
        "name": "Title",
        "position": 1,
        "values": [
          "Default Title"
        ]
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/1656/2489/files/STMPDRCRDSFullLogoKeychain.png?v=1761642243"
    ],
    "variants": [
      {
        "id": "56495641952601",
        "title": "Default Title",
        "sku": "STMPD-FULLLOGO-KEYCHAIN",
        "options": [
          "Default Title",
          null,
          null
        ],
        "price": 4.95,
        "compareAt": null,
        "available": true,
        "image": null
      }
    ]
  },
  {
    "id": "x-stmpd-flag",
    "shopifyId": "15616980123993",
    "title": "Flag - STMPD +x",
    "vendor": "The Martin Garrix Shop",
    "type": "",
    "tags": [
      "Live"
    ],
    "options": [
      {
        "name": "Size",
        "position": 1,
        "values": [
          "Flag (150x100cm)",
          "Banner Flag (100x50cm)"
        ]
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/1656/2489/files/STMPD_AW_vlag_1_150x100cm.png?v=1752849733",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/STMPD_AW_banner_1_100x50cm.png?v=1752849733"
    ],
    "variants": [
      {
        "id": "55738847428953",
        "title": "Flag (150x100cm)",
        "sku": "2025-+x-stmpd-flag-1",
        "options": [
          "Flag (150x100cm)",
          null,
          null
        ],
        "price": 25.00,
        "compareAt": null,
        "available": false,
        "image": "https://cdn.shopify.com/s/files/1/1656/2489/files/STMPD_AW_vlag_1_150x100cm.png?v=1752849733"
      },
      {
        "id": "55738847461721",
        "title": "Banner Flag (100x50cm)",
        "sku": "2025-+x-stmpd-flag-2",
        "options": [
          "Banner Flag (100x50cm)",
          null,
          null
        ],
        "price": 17.50,
        "compareAt": null,
        "available": true,
        "image": "https://cdn.shopify.com/s/files/1/1656/2489/files/STMPD_AW_banner_1_100x50cm.png?v=1752849733"
      }
    ]
  },
  {
    "id": "stmpd-flag-1",
    "shopifyId": "15616980287833",
    "title": "STMPD - Flag GREEN",
    "vendor": "The Martin Garrix Shop",
    "type": "",
    "tags": [
      "Live"
    ],
    "options": [
      {
        "name": "Size",
        "position": 1,
        "values": [
          "Flag (150x100cm)",
          "Banner Flag (100x50cm)"
        ]
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/1656/2489/files/STMPD_AW_vlag_2_150x100cm.png?v=1752849734",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/STMPD_AW_banner_2_100x50cm.png?v=1752849734"
    ],
    "variants": [
      {
        "id": "55738880393561",
        "title": "Flag (150x100cm)",
        "sku": "2025-stmpd-flag-1",
        "options": [
          "Flag (150x100cm)",
          null,
          null
        ],
        "price": 25.00,
        "compareAt": null,
        "available": true,
        "image": "https://cdn.shopify.com/s/files/1/1656/2489/files/STMPD_AW_vlag_2_150x100cm.png?v=1752849734"
      },
      {
        "id": "55738880426329",
        "title": "Banner Flag (100x50cm)",
        "sku": "2025-stmpd-flag-2",
        "options": [
          "Banner Flag (100x50cm)",
          null,
          null
        ],
        "price": 17.50,
        "compareAt": null,
        "available": true,
        "image": "https://cdn.shopify.com/s/files/1/1656/2489/files/STMPD_AW_banner_2_100x50cm.png?v=1752849734"
      }
    ]
  },
  {
    "id": "x-flag",
    "shopifyId": "15616980320601",
    "title": "Flag - +x",
    "vendor": "The Martin Garrix Shop",
    "type": "",
    "tags": [
      "Live"
    ],
    "options": [
      {
        "name": "Size",
        "position": 1,
        "values": [
          "Flag (150x100cm)",
          "Banner Flag (100x50cm)"
        ]
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/1656/2489/files/STMPD_AW_vlag_6_150x100cm.png?v=1752849732",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/STMPD_AW_banner_3_100x50cm.png?v=1752849732"
    ],
    "variants": [
      {
        "id": "55738880459097",
        "title": "Flag (150x100cm)",
        "sku": "2025-+x-flag-1",
        "options": [
          "Flag (150x100cm)",
          null,
          null
        ],
        "price": 25.00,
        "compareAt": null,
        "available": false,
        "image": "https://cdn.shopify.com/s/files/1/1656/2489/files/STMPD_AW_vlag_6_150x100cm.png?v=1752849732"
      },
      {
        "id": "55738880491865",
        "title": "Banner Flag (100x50cm)",
        "sku": "2025-+x-flag-2",
        "options": [
          "Banner Flag (100x50cm)",
          null,
          null
        ],
        "price": 17.50,
        "compareAt": null,
        "available": true,
        "image": "https://cdn.shopify.com/s/files/1/1656/2489/files/STMPD_AW_banner_3_100x50cm.png?v=1752849732"
      }
    ]
  },
  {
    "id": "stmpd-x-martin-garrix-xl-sticker-pack-2025",
    "shopifyId": "15407145124185",
    "title": "STMPD x Martin Garrix XL Sticker Pack 2025",
    "vendor": "Martin Garrix",
    "type": "Accessories",
    "tags": [
      "2025",
      "accessories",
      "black",
      "Live",
      "Summer",
      "€ 10 - € 29"
    ],
    "options": [
      {
        "name": "Title",
        "position": 1,
        "values": [
          "Default Title"
        ]
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/1656/2489/files/DSC07876.png?v=1746703696",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/Group_f958d9ba-24d6-4176-be15-0d9d0a6841b4.png?v=1747295619",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/DSC07880.png?v=1747295619",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/DSC07882.png?v=1747295619",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/DSC07881.png?v=1747295619",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/DSC07888.png?v=1747295619",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/DSC07879.png?v=1747295619",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/DSC07878.png?v=1747295619",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/DSC07887.png?v=1747295619",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/DSC07883.png?v=1747295619",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/DSC07886.png?v=1747295619",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/DSC07885.png?v=1747295619",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/DSC07884.png?v=1747295619",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/DSC07877.png?v=1747295619"
    ],
    "variants": [
      {
        "id": "54566294421849",
        "title": "Default Title",
        "sku": "MG-STMPD-STICKERS-2025",
        "options": [
          "Default Title",
          null,
          null
        ],
        "price": 12.50,
        "compareAt": null,
        "available": true,
        "image": null
      }
    ]
  },
  {
    "id": "hometown-hoodie",
    "shopifyId": "9758576017753",
    "title": "Hometown Hoodie",
    "vendor": "Martin Garrix",
    "type": "Sweaters",
    "tags": [
      "2024",
      "ade24",
      "Autumn",
      "gekko_hoodie",
      "Live"
    ],
    "options": [
      {
        "name": "Size",
        "position": 1,
        "values": [
          "XS",
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      },
      {
        "name": "Color",
        "position": 2,
        "values": [
          "Black"
        ]
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/1656/2489/files/HometownHoodieBack.png?v=1729000899",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/HometownHoodieFront.png?v=1729000899"
    ],
    "variants": [
      {
        "id": "49495467131225",
        "title": "XS / Black",
        "sku": "MG-HOMETOWN-HOODIE-XS",
        "options": [
          "XS",
          "Black",
          null
        ],
        "price": 75.00,
        "compareAt": null,
        "available": true,
        "image": null
      },
      {
        "id": "49495467163993",
        "title": "S / Black",
        "sku": "MG-HOMETOWN-HOODIE-S",
        "options": [
          "S",
          "Black",
          null
        ],
        "price": 75.00,
        "compareAt": null,
        "available": true,
        "image": null
      },
      {
        "id": "49495467196761",
        "title": "M / Black",
        "sku": "MG-HOMETOWN-HOODIE-M",
        "options": [
          "M",
          "Black",
          null
        ],
        "price": 75.00,
        "compareAt": null,
        "available": true,
        "image": null
      },
      {
        "id": "49495467229529",
        "title": "L / Black",
        "sku": "MG-HOMETOWN-HOODIE-L",
        "options": [
          "L",
          "Black",
          null
        ],
        "price": 75.00,
        "compareAt": null,
        "available": true,
        "image": null
      },
      {
        "id": "49495467262297",
        "title": "XL / Black",
        "sku": "MG-HOMETOWN-HOODIE-XL",
        "options": [
          "XL",
          "Black",
          null
        ],
        "price": 75.00,
        "compareAt": null,
        "available": true,
        "image": null
      },
      {
        "id": "49495467295065",
        "title": "XXL / Black",
        "sku": "MG-HOMETOWN-HOODIE-XXL",
        "options": [
          "XXL",
          "Black",
          null
        ],
        "price": 75.00,
        "compareAt": null,
        "available": true,
        "image": null
      }
    ]
  },
  {
    "id": "stmpd-liquid-hoodie",
    "shopifyId": "9004213141849",
    "title": "STMPD LIQUID HOODIE",
    "vendor": "STMPD RCRDS",
    "type": "Sweaters",
    "tags": [
      "2024",
      "gekko_hoodie",
      "Live",
      "Summer"
    ],
    "options": [
      {
        "name": "Size",
        "position": 1,
        "values": [
          "XS",
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      },
      {
        "name": "Color",
        "position": 2,
        "values": [
          "Black"
        ]
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/1656/2489/files/DSC19820.png?v=1719405055",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/DSC19823.png?v=1719405055"
    ],
    "variants": [
      {
        "id": "48593470161241",
        "title": "XS / Black",
        "sku": "",
        "options": [
          "XS",
          "Black",
          null
        ],
        "price": 80.00,
        "compareAt": 80.00,
        "available": false,
        "image": null
      },
      {
        "id": "48593464787289",
        "title": "S / Black",
        "sku": null,
        "options": [
          "S",
          "Black",
          null
        ],
        "price": 80.00,
        "compareAt": 80.00,
        "available": true,
        "image": null
      },
      {
        "id": "48593464820057",
        "title": "M / Black",
        "sku": null,
        "options": [
          "M",
          "Black",
          null
        ],
        "price": 80.00,
        "compareAt": 80.00,
        "available": true,
        "image": null
      },
      {
        "id": "48593464852825",
        "title": "L / Black",
        "sku": null,
        "options": [
          "L",
          "Black",
          null
        ],
        "price": 80.00,
        "compareAt": 80.00,
        "available": false,
        "image": null
      },
      {
        "id": "48593464885593",
        "title": "XL / Black",
        "sku": null,
        "options": [
          "XL",
          "Black",
          null
        ],
        "price": 80.00,
        "compareAt": 80.00,
        "available": false,
        "image": null
      },
      {
        "id": "48593464918361",
        "title": "XXL / Black",
        "sku": null,
        "options": [
          "XXL",
          "Black",
          null
        ],
        "price": 80.00,
        "compareAt": 80.00,
        "available": false,
        "image": null
      }
    ]
  },
  {
    "id": "stmpd-liquid-tshirt",
    "shopifyId": "9004204949849",
    "title": "STMPD LIQUID TSHIRT",
    "vendor": "STMPD RCRDS",
    "type": "T-Shirts",
    "tags": [
      "2024",
      "Live",
      "Summer",
      "€ 30 - € 49"
    ],
    "options": [
      {
        "name": "Size",
        "position": 1,
        "values": [
          "XS",
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      },
      {
        "name": "Color",
        "position": 2,
        "values": [
          "Black"
        ]
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/1656/2489/files/DSC19813.png?v=1719404566",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/DSC19806_515a3347-1366-4121-9043-d80bbcd51386.png?v=1719402571",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/gebruikenliquid.jpg?v=1719410921"
    ],
    "variants": [
      {
        "id": "48593442636121",
        "title": "XS / Black",
        "sku": "",
        "options": [
          "XS",
          "Black",
          null
        ],
        "price": 45.00,
        "compareAt": 45.00,
        "available": false,
        "image": null
      },
      {
        "id": "48593442668889",
        "title": "S / Black",
        "sku": "",
        "options": [
          "S",
          "Black",
          null
        ],
        "price": 45.00,
        "compareAt": 45.00,
        "available": true,
        "image": null
      },
      {
        "id": "48593442701657",
        "title": "M / Black",
        "sku": "",
        "options": [
          "M",
          "Black",
          null
        ],
        "price": 45.00,
        "compareAt": 45.00,
        "available": false,
        "image": null
      },
      {
        "id": "48593442734425",
        "title": "L / Black",
        "sku": "",
        "options": [
          "L",
          "Black",
          null
        ],
        "price": 45.00,
        "compareAt": 45.00,
        "available": false,
        "image": null
      },
      {
        "id": "48593442767193",
        "title": "XL / Black",
        "sku": "",
        "options": [
          "XL",
          "Black",
          null
        ],
        "price": 45.00,
        "compareAt": 45.00,
        "available": false,
        "image": null
      },
      {
        "id": "48593442799961",
        "title": "XXL / Black",
        "sku": "",
        "options": [
          "XXL",
          "Black",
          null
        ],
        "price": 45.00,
        "compareAt": 45.00,
        "available": false,
        "image": null
      }
    ]
  },
  {
    "id": "stmpd-infinite-grey-hoodie",
    "shopifyId": "9004191220057",
    "title": "STMPD INFINITE GREY HOODIE",
    "vendor": "STMPD RCRDS",
    "type": "Sweaters",
    "tags": [
      "2024",
      "gekko_hoodie",
      "Live",
      "Summer"
    ],
    "options": [
      {
        "name": "Size",
        "position": 1,
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      },
      {
        "name": "Color",
        "position": 2,
        "values": [
          "Black"
        ]
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/1656/2489/files/DSC19827.png?v=1719404216",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/DSC19826.png?v=1719404216",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/gebruiken_vliegtuig_grey_hoodie.heic?v=1719407984"
    ],
    "variants": [
      {
        "id": "48593362288985",
        "title": "S / Black",
        "sku": "",
        "options": [
          "S",
          "Black",
          null
        ],
        "price": 75.00,
        "compareAt": 75.00,
        "available": false,
        "image": null
      },
      {
        "id": "48593362321753",
        "title": "M / Black",
        "sku": "",
        "options": [
          "M",
          "Black",
          null
        ],
        "price": 75.00,
        "compareAt": 75.00,
        "available": true,
        "image": null
      },
      {
        "id": "48593362354521",
        "title": "L / Black",
        "sku": "",
        "options": [
          "L",
          "Black",
          null
        ],
        "price": 75.00,
        "compareAt": 75.00,
        "available": true,
        "image": null
      },
      {
        "id": "48593362387289",
        "title": "XL / Black",
        "sku": "",
        "options": [
          "XL",
          "Black",
          null
        ],
        "price": 75.00,
        "compareAt": 75.00,
        "available": false,
        "image": null
      },
      {
        "id": "48593362420057",
        "title": "XXL / Black",
        "sku": "",
        "options": [
          "XXL",
          "Black",
          null
        ],
        "price": 75.00,
        "compareAt": 75.00,
        "available": false,
        "image": null
      }
    ]
  },
  {
    "id": "stmpd-infinite-grey-tshirt",
    "shopifyId": "9004169003353",
    "title": "STMPD INFINITE GREY TSHIRT",
    "vendor": "STMPD RCRDS",
    "type": "T-Shirts",
    "tags": [
      "2024",
      "Live",
      "Summer",
      "€ 30 - € 49"
    ],
    "options": [
      {
        "name": "Size",
        "position": 1,
        "values": [
          "XS",
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      },
      {
        "name": "Color",
        "position": 2,
        "values": [
          "Black"
        ]
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/1656/2489/files/DSC19805.png?v=1719402571",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/DSC19804.png?v=1719404566"
    ],
    "variants": [
      {
        "id": "48593312612697",
        "title": "XS / Black",
        "sku": "",
        "options": [
          "XS",
          "Black",
          null
        ],
        "price": 42.50,
        "compareAt": 42.50,
        "available": false,
        "image": null
      },
      {
        "id": "48593278632281",
        "title": "S / Black",
        "sku": null,
        "options": [
          "S",
          "Black",
          null
        ],
        "price": 42.50,
        "compareAt": 42.50,
        "available": false,
        "image": null
      },
      {
        "id": "48593278665049",
        "title": "M / Black",
        "sku": null,
        "options": [
          "M",
          "Black",
          null
        ],
        "price": 42.50,
        "compareAt": 42.50,
        "available": true,
        "image": null
      },
      {
        "id": "48593278697817",
        "title": "L / Black",
        "sku": null,
        "options": [
          "L",
          "Black",
          null
        ],
        "price": 42.50,
        "compareAt": 42.50,
        "available": false,
        "image": null
      },
      {
        "id": "48593278730585",
        "title": "XL / Black",
        "sku": null,
        "options": [
          "XL",
          "Black",
          null
        ],
        "price": 42.50,
        "compareAt": 42.50,
        "available": false,
        "image": null
      },
      {
        "id": "48593278763353",
        "title": "XXL / Black",
        "sku": null,
        "options": [
          "XXL",
          "Black",
          null
        ],
        "price": 42.50,
        "compareAt": 42.50,
        "available": false,
        "image": null
      }
    ]
  },
  {
    "id": "stmpd-infinite-black-hoodie",
    "shopifyId": "9004152815961",
    "title": "STMPD INFINITE BLACK HOODIE",
    "vendor": "STMPD RCRDS",
    "type": "Sweaters",
    "tags": [
      "2024",
      "gekko_hoodie",
      "Live",
      "Summer"
    ],
    "options": [
      {
        "name": "Size",
        "position": 1,
        "values": [
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      },
      {
        "name": "Color",
        "position": 2,
        "values": [
          "Black"
        ]
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/1656/2489/files/DSC19825.png?v=1719401898",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/DSC19819.png?v=1719401898"
    ],
    "variants": [
      {
        "id": "48593225875801",
        "title": "S / Black",
        "sku": "",
        "options": [
          "S",
          "Black",
          null
        ],
        "price": 75.00,
        "compareAt": 75.00,
        "available": false,
        "image": null
      },
      {
        "id": "48593225908569",
        "title": "M / Black",
        "sku": "",
        "options": [
          "M",
          "Black",
          null
        ],
        "price": 75.00,
        "compareAt": 75.00,
        "available": true,
        "image": null
      },
      {
        "id": "48593225941337",
        "title": "L / Black",
        "sku": "",
        "options": [
          "L",
          "Black",
          null
        ],
        "price": 75.00,
        "compareAt": 75.00,
        "available": true,
        "image": null
      },
      {
        "id": "48593225974105",
        "title": "XL / Black",
        "sku": "",
        "options": [
          "XL",
          "Black",
          null
        ],
        "price": 75.00,
        "compareAt": 75.00,
        "available": false,
        "image": null
      },
      {
        "id": "48593226006873",
        "title": "XXL / Black",
        "sku": "",
        "options": [
          "XXL",
          "Black",
          null
        ],
        "price": 75.00,
        "compareAt": 75.00,
        "available": false,
        "image": null
      }
    ]
  },
  {
    "id": "stmpd-black-hoodie",
    "shopifyId": "8570384449881",
    "title": "STMPD Black Hoodie Embroidered Logo",
    "vendor": "STMPD RCRDS",
    "type": "Sweaters",
    "tags": [
      "gekko_hoodie",
      "Live"
    ],
    "options": [
      {
        "name": "Size",
        "position": 1,
        "values": [
          "XS",
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      },
      {
        "name": "Color",
        "position": 2,
        "values": [
          "Black"
        ]
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/1656/2489/files/STMPDBlackHoodieFront.png?v=1699447093",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/STMPDBlackHoodieBack.png?v=1699447092"
    ],
    "variants": [
      {
        "id": "47342958641497",
        "title": "XS / Black",
        "sku": null,
        "options": [
          "XS",
          "Black",
          null
        ],
        "price": 75.00,
        "compareAt": 75.00,
        "available": false,
        "image": null
      },
      {
        "id": "47342958674265",
        "title": "S / Black",
        "sku": null,
        "options": [
          "S",
          "Black",
          null
        ],
        "price": 75.00,
        "compareAt": 75.00,
        "available": true,
        "image": null
      },
      {
        "id": "47342958707033",
        "title": "M / Black",
        "sku": null,
        "options": [
          "M",
          "Black",
          null
        ],
        "price": 75.00,
        "compareAt": 75.00,
        "available": true,
        "image": null
      },
      {
        "id": "47342958739801",
        "title": "L / Black",
        "sku": null,
        "options": [
          "L",
          "Black",
          null
        ],
        "price": 75.00,
        "compareAt": 75.00,
        "available": true,
        "image": null
      },
      {
        "id": "47342958772569",
        "title": "XL / Black",
        "sku": null,
        "options": [
          "XL",
          "Black",
          null
        ],
        "price": 75.00,
        "compareAt": 75.00,
        "available": true,
        "image": null
      },
      {
        "id": "47342958805337",
        "title": "XXL / Black",
        "sku": null,
        "options": [
          "XXL",
          "Black",
          null
        ],
        "price": 75.00,
        "compareAt": 75.00,
        "available": true,
        "image": null
      }
    ]
  },
  {
    "id": "stmpd-blue-hoodie",
    "shopifyId": "8570383696217",
    "title": "STMPD Blue Hoodie Embroidered Logo",
    "vendor": "STMPD RCRDS",
    "type": "Sweaters",
    "tags": [
      "gekko_hoodie",
      "Live"
    ],
    "options": [
      {
        "name": "Size",
        "position": 1,
        "values": [
          "XS",
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      },
      {
        "name": "Color",
        "position": 2,
        "values": [
          "Blue"
        ]
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/1656/2489/files/STMPDBlueHoodieFront.png?v=1699448135",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/STMPDBlueHoodieBack.png?v=1699448135"
    ],
    "variants": [
      {
        "id": "47342950809945",
        "title": "XS / Blue",
        "sku": null,
        "options": [
          "XS",
          "Blue",
          null
        ],
        "price": 75.00,
        "compareAt": 75.00,
        "available": false,
        "image": null
      },
      {
        "id": "47342950842713",
        "title": "S / Blue",
        "sku": null,
        "options": [
          "S",
          "Blue",
          null
        ],
        "price": 75.00,
        "compareAt": 75.00,
        "available": true,
        "image": null
      },
      {
        "id": "47342950875481",
        "title": "M / Blue",
        "sku": null,
        "options": [
          "M",
          "Blue",
          null
        ],
        "price": 75.00,
        "compareAt": 75.00,
        "available": true,
        "image": null
      },
      {
        "id": "47342950908249",
        "title": "L / Blue",
        "sku": null,
        "options": [
          "L",
          "Blue",
          null
        ],
        "price": 75.00,
        "compareAt": 75.00,
        "available": true,
        "image": null
      },
      {
        "id": "47342950941017",
        "title": "XL / Blue",
        "sku": null,
        "options": [
          "XL",
          "Blue",
          null
        ],
        "price": 75.00,
        "compareAt": 75.00,
        "available": true,
        "image": null
      },
      {
        "id": "47342950973785",
        "title": "XXL / Blue",
        "sku": null,
        "options": [
          "XXL",
          "Blue",
          null
        ],
        "price": 75.00,
        "compareAt": 75.00,
        "available": true,
        "image": null
      }
    ]
  },
  {
    "id": "stmpd-green-hoodie",
    "shopifyId": "8570381631833",
    "title": "STMPD Green Hoodie Embroidered Logo",
    "vendor": "STMPD RCRDS",
    "type": "Sweaters",
    "tags": [
      "gekko_hoodie",
      "Live"
    ],
    "options": [
      {
        "name": "Size",
        "position": 1,
        "values": [
          "XS",
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      },
      {
        "name": "Color",
        "position": 2,
        "values": [
          "Green"
        ]
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/1656/2489/files/STMPDGreenHoodieFront.png?v=1699446863",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/STMPDGreenHoodieBack.png?v=1699446864"
    ],
    "variants": [
      {
        "id": "47342941143385",
        "title": "XS / Green",
        "sku": null,
        "options": [
          "XS",
          "Green",
          null
        ],
        "price": 75.00,
        "compareAt": 75.00,
        "available": false,
        "image": null
      },
      {
        "id": "47342941176153",
        "title": "S / Green",
        "sku": null,
        "options": [
          "S",
          "Green",
          null
        ],
        "price": 75.00,
        "compareAt": 75.00,
        "available": true,
        "image": null
      },
      {
        "id": "47342941208921",
        "title": "M / Green",
        "sku": null,
        "options": [
          "M",
          "Green",
          null
        ],
        "price": 75.00,
        "compareAt": 75.00,
        "available": true,
        "image": null
      },
      {
        "id": "47342941241689",
        "title": "L / Green",
        "sku": null,
        "options": [
          "L",
          "Green",
          null
        ],
        "price": 75.00,
        "compareAt": 75.00,
        "available": true,
        "image": null
      },
      {
        "id": "47342941274457",
        "title": "XL / Green",
        "sku": null,
        "options": [
          "XL",
          "Green",
          null
        ],
        "price": 75.00,
        "compareAt": 75.00,
        "available": true,
        "image": null
      },
      {
        "id": "47342941339993",
        "title": "XXL / Green",
        "sku": null,
        "options": [
          "XXL",
          "Green",
          null
        ],
        "price": 75.00,
        "compareAt": 75.00,
        "available": true,
        "image": null
      }
    ]
  },
  {
    "id": "stmpd-black-t-shirt",
    "shopifyId": "8570338804057",
    "title": "STMPD Black T-Shirt Embroidered Logo",
    "vendor": "STMPD RCRDS",
    "type": "T-Shirts",
    "tags": [
      "Live",
      "€ 30 - € 49"
    ],
    "options": [
      {
        "name": "Size",
        "position": 1,
        "values": [
          "XS",
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      },
      {
        "name": "Color",
        "position": 2,
        "values": [
          "Black"
        ]
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/1656/2489/files/STMPDBlackTeeFront.png?v=1699443689",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/STMPDBlackTeeBack.png?v=1699443689",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/007A8153_a97574c8-2562-484e-a522-b480589bbaac.jpg?v=1699448194"
    ],
    "variants": [
      {
        "id": "47342737555801",
        "title": "XS / Black",
        "sku": null,
        "options": [
          "XS",
          "Black",
          null
        ],
        "price": 42.50,
        "compareAt": 42.50,
        "available": false,
        "image": null
      },
      {
        "id": "47342737588569",
        "title": "S / Black",
        "sku": null,
        "options": [
          "S",
          "Black",
          null
        ],
        "price": 42.50,
        "compareAt": 42.50,
        "available": false,
        "image": null
      },
      {
        "id": "47342737621337",
        "title": "M / Black",
        "sku": null,
        "options": [
          "M",
          "Black",
          null
        ],
        "price": 42.50,
        "compareAt": 42.50,
        "available": false,
        "image": null
      },
      {
        "id": "47342737654105",
        "title": "L / Black",
        "sku": null,
        "options": [
          "L",
          "Black",
          null
        ],
        "price": 42.50,
        "compareAt": 42.50,
        "available": false,
        "image": null
      },
      {
        "id": "47342737686873",
        "title": "XL / Black",
        "sku": null,
        "options": [
          "XL",
          "Black",
          null
        ],
        "price": 42.50,
        "compareAt": 42.50,
        "available": false,
        "image": null
      },
      {
        "id": "47342737719641",
        "title": "XXL / Black",
        "sku": null,
        "options": [
          "XXL",
          "Black",
          null
        ],
        "price": 42.50,
        "compareAt": 42.50,
        "available": false,
        "image": null
      }
    ]
  },
  {
    "id": "stmpd-blue-t-shirt",
    "shopifyId": "8570336182617",
    "title": "STMPD Blue T-Shirt Embroidered Logo",
    "vendor": "STMPD RCRDS",
    "type": "T-Shirts",
    "tags": [
      "Live",
      "€ 30 - € 49"
    ],
    "options": [
      {
        "name": "Size",
        "position": 1,
        "values": [
          "XS",
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      },
      {
        "name": "Color",
        "position": 2,
        "values": [
          "Blue"
        ]
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/1656/2489/files/STMPDBlueTeeFront.png?v=1699443279",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/STMPDBlueTeeBack.png?v=1699443279"
    ],
    "variants": [
      {
        "id": "47342715666777",
        "title": "XS / Blue",
        "sku": null,
        "options": [
          "XS",
          "Blue",
          null
        ],
        "price": 42.50,
        "compareAt": 42.50,
        "available": true,
        "image": null
      },
      {
        "id": "47342715699545",
        "title": "S / Blue",
        "sku": null,
        "options": [
          "S",
          "Blue",
          null
        ],
        "price": 42.50,
        "compareAt": 42.50,
        "available": true,
        "image": null
      },
      {
        "id": "47342715732313",
        "title": "M / Blue",
        "sku": null,
        "options": [
          "M",
          "Blue",
          null
        ],
        "price": 42.50,
        "compareAt": 42.50,
        "available": true,
        "image": null
      },
      {
        "id": "47342715765081",
        "title": "L / Blue",
        "sku": null,
        "options": [
          "L",
          "Blue",
          null
        ],
        "price": 42.50,
        "compareAt": 42.50,
        "available": true,
        "image": null
      },
      {
        "id": "47342715797849",
        "title": "XL / Blue",
        "sku": null,
        "options": [
          "XL",
          "Blue",
          null
        ],
        "price": 42.50,
        "compareAt": 42.50,
        "available": true,
        "image": null
      },
      {
        "id": "47342715830617",
        "title": "XXL / Blue",
        "sku": null,
        "options": [
          "XXL",
          "Blue",
          null
        ],
        "price": 42.50,
        "compareAt": 42.50,
        "available": true,
        "image": null
      }
    ]
  },
  {
    "id": "stmpd-green-t-shirt",
    "shopifyId": "8570335002969",
    "title": "STMPD Green T-Shirt Embroidered Logo",
    "vendor": "STMPD RCRDS",
    "type": "T-Shirts",
    "tags": [
      "Live",
      "€ 30 - € 49"
    ],
    "options": [
      {
        "name": "Size",
        "position": 1,
        "values": [
          "XS",
          "S",
          "M",
          "L",
          "XL",
          "XXL"
        ]
      },
      {
        "name": "Color",
        "position": 2,
        "values": [
          "Green"
        ]
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/1656/2489/files/STMPDGreenTeeFront.png?v=1699443173",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/STMPDGreenTeeBack.png?v=1699443172"
    ],
    "variants": [
      {
        "id": "47342710784345",
        "title": "XS / Green",
        "sku": null,
        "options": [
          "XS",
          "Green",
          null
        ],
        "price": 42.50,
        "compareAt": 42.50,
        "available": true,
        "image": null
      },
      {
        "id": "47342710817113",
        "title": "S / Green",
        "sku": null,
        "options": [
          "S",
          "Green",
          null
        ],
        "price": 42.50,
        "compareAt": 42.50,
        "available": true,
        "image": null
      },
      {
        "id": "47342710849881",
        "title": "M / Green",
        "sku": null,
        "options": [
          "M",
          "Green",
          null
        ],
        "price": 42.50,
        "compareAt": 42.50,
        "available": true,
        "image": null
      },
      {
        "id": "47342710882649",
        "title": "L / Green",
        "sku": null,
        "options": [
          "L",
          "Green",
          null
        ],
        "price": 42.50,
        "compareAt": 42.50,
        "available": true,
        "image": null
      },
      {
        "id": "47342710915417",
        "title": "XL / Green",
        "sku": null,
        "options": [
          "XL",
          "Green",
          null
        ],
        "price": 42.50,
        "compareAt": 42.50,
        "available": true,
        "image": null
      },
      {
        "id": "47342710948185",
        "title": "XXL / Green",
        "sku": null,
        "options": [
          "XXL",
          "Green",
          null
        ],
        "price": 42.50,
        "compareAt": 42.50,
        "available": false,
        "image": null
      }
    ]
  },
  {
    "id": "x-blue-silver-t-shirt-kids",
    "shopifyId": "8570269860185",
    "title": "Blue Silver T-Shirt Kids",
    "vendor": "Martin Garrix",
    "type": "T-Shirts",
    "tags": [
      "kids",
      "Live",
      "€ 10 - € 29"
    ],
    "options": [
      {
        "name": "Size",
        "position": 1,
        "values": [
          "140",
          "152"
        ]
      },
      {
        "name": "Color",
        "position": 2,
        "values": [
          "Light Blue"
        ]
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/1656/2489/files/xBlueSilverTeeBack_f2c2d4d2-cefb-41b2-9108-ad58c5ae3fa8.png?v=1704709502",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/xBlueSilverTeeFront-correct_2243d479-60c4-49d0-af7a-fe66258cee8a.png?v=1754466008",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/Foto17-10-2023215603_18a8c882-7966-4778-9d00-549d003804ba.jpg?v=1754466008"
    ],
    "variants": [
      {
        "id": "47342322286937",
        "title": "140 / Light Blue",
        "sku": null,
        "options": [
          "140",
          "Light Blue",
          null
        ],
        "price": 29.50,
        "compareAt": 29.50,
        "available": true,
        "image": null
      },
      {
        "id": "47342322319705",
        "title": "152 / Light Blue",
        "sku": null,
        "options": [
          "152",
          "Light Blue",
          null
        ],
        "price": 29.50,
        "compareAt": 29.50,
        "available": true,
        "image": null
      }
    ]
  },
  {
    "id": "black-yellow-ade-t-shirt-kids",
    "shopifyId": "8570267599193",
    "title": "Black Yellow T-Shirt Kids",
    "vendor": "Martin Garrix",
    "type": "T-Shirts",
    "tags": [
      "kids",
      "Live",
      "€ 10 - € 29"
    ],
    "options": [
      {
        "name": "Size",
        "position": 1,
        "values": [
          "140",
          "152"
        ]
      },
      {
        "name": "Color",
        "position": 2,
        "values": [
          "Black"
        ]
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/1656/2489/files/xYellowADETeeBack_92133b65-f052-4b2c-97df-599775b8017b.png?v=1699436145",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/xYellowADETeeFront_b3e83f33-f115-42ca-90c7-6747136ead74.png?v=1699436145"
    ],
    "variants": [
      {
        "id": "47342308131161",
        "title": "140 / Black",
        "sku": null,
        "options": [
          "140",
          "Black",
          null
        ],
        "price": 20.00,
        "compareAt": 29.50,
        "available": true,
        "image": null
      },
      {
        "id": "47342308163929",
        "title": "152 / Black",
        "sku": "",
        "options": [
          "152",
          "Black",
          null
        ],
        "price": 20.00,
        "compareAt": 29.50,
        "available": true,
        "image": null
      }
    ]
  },
  {
    "id": "black-silver-t-shirt-kids",
    "shopifyId": "8570254590297",
    "title": "Black Silver T-Shirt Kids",
    "vendor": "Martin Garrix",
    "type": "T-Shirts",
    "tags": [
      "kids",
      "Live",
      "€ 10 - € 29"
    ],
    "options": [
      {
        "name": "Size",
        "position": 1,
        "values": [
          "140",
          "152"
        ]
      },
      {
        "name": "Color",
        "position": 2,
        "values": [
          "Black"
        ]
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/1656/2489/files/xBlackSilverTeeBack_1a854685-2ea9-4360-ae3d-e19259b03406.png?v=1699434463",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/xBlackSilverTeeFront_85bde8fa-a394-4cc9-9fb0-66656a9f3017.png?v=1699445175",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/369251086_672509527807976_5734953372982664244_n_1baa8eba-98a5-46b9-becd-49bff3b77ca1.jpg?v=1699445175",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/368718133_3588469974697712_3706656622053964388_n_166e1be1-9ebc-43ee-8001-25b062990e5f.jpg?v=1699445175"
    ],
    "variants": [
      {
        "id": "47342249247065",
        "title": "140 / Black",
        "sku": null,
        "options": [
          "140",
          "Black",
          null
        ],
        "price": 29.50,
        "compareAt": 29.50,
        "available": true,
        "image": null
      },
      {
        "id": "47342249279833",
        "title": "152 / Black",
        "sku": null,
        "options": [
          "152",
          "Black",
          null
        ],
        "price": 29.50,
        "compareAt": 29.50,
        "available": true,
        "image": null
      }
    ]
  },
  {
    "id": "stmpd-flag",
    "shopifyId": "4255112495186",
    "title": "STMPD - Flag WHITE",
    "vendor": "STMPD RCRDS",
    "type": "Accessories",
    "tags": [
      "ade19",
      "Capsule",
      "Live",
      "Related:Accessories",
      "STMPD"
    ],
    "options": [
      {
        "name": "Variation",
        "position": 1,
        "values": [
          "With holes",
          "With strings"
        ]
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/1656/2489/products/Martin_Garrix_SR_AA_08_01_Black.png?v=1572534156",
      "https://cdn.shopify.com/s/files/1/1656/2489/files/STMPDFlagwithstrings.png?v=1785232826"
    ],
    "variants": [
      {
        "id": "58712296587609",
        "title": "With holes",
        "sku": "SR_AA_08_01_BLACK-HOLES",
        "options": [
          "With holes",
          null,
          null
        ],
        "price": 25.00,
        "compareAt": null,
        "available": true,
        "image": "https://cdn.shopify.com/s/files/1/1656/2489/products/Martin_Garrix_SR_AA_08_01_Black.png?v=1572534156"
      },
      {
        "id": "58712296620377",
        "title": "With strings",
        "sku": "SR_AA_08_01_BLACK-STRINGS",
        "options": [
          "With strings",
          null,
          null
        ],
        "price": 25.00,
        "compareAt": null,
        "available": true,
        "image": "https://cdn.shopify.com/s/files/1/1656/2489/files/STMPDFlagwithstrings.png?v=1785232826"
      }
    ]
  },
  {
    "id": "stmpd-x-mg-pin-pack",
    "shopifyId": "6961678843986",
    "title": "STMPD x Martin Garrix Pin Pack",
    "vendor": "Martin Garrix",
    "type": "Accessories",
    "tags": [
      "accessories",
      "black",
      "Live",
      "€ 10 - € 29"
    ],
    "options": [
      {
        "name": "Title",
        "position": 1,
        "values": [
          "Default Title"
        ]
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/1656/2489/products/MG_STMPD_Pinpack_set.png?v=1662636460",
      "https://cdn.shopify.com/s/files/1/1656/2489/products/STMPD_Pinpack_1.png?v=1662636460",
      "https://cdn.shopify.com/s/files/1/1656/2489/products/MG_STMPD_Pinpack_set_2.png?v=1662636460",
      "https://cdn.shopify.com/s/files/1/1656/2489/products/MG_Pinpack_1.png?v=1662636460"
    ],
    "variants": [
      {
        "id": "40133673746514",
        "title": "Default Title",
        "sku": "",
        "options": [
          "Default Title",
          null,
          null
        ],
        "price": 10.00,
        "compareAt": null,
        "available": false,
        "image": null
      }
    ]
  },
  {
    "id": "stmpd-tote-bag-black",
    "shopifyId": "6961663017042",
    "title": "STMPD Tote Bag Black",
    "vendor": "STMPD RCRDS",
    "type": "Accessories",
    "tags": [
      "accessories",
      "bags",
      "black",
      "Capsule",
      "Live",
      "€ 10 - € 29"
    ],
    "options": [
      {
        "name": "Color",
        "position": 1,
        "values": [
          "Black"
        ]
      }
    ],
    "images": [
      "https://cdn.shopify.com/s/files/1/1656/2489/products/STMPD_TOTEBAG_front.png?v=1662537024",
      "https://cdn.shopify.com/s/files/1/1656/2489/products/STMPD_TOTEBAG_back.png?v=1662537024"
    ],
    "variants": [
      {
        "id": "48433592664409",
        "title": "Black",
        "sku": "",
        "options": [
          "Black",
          null,
          null
        ],
        "price": 15.00,
        "compareAt": null,
        "available": true,
        "image": null
      }
    ]
  }
];

  function optionValues(product, names) {
    const option = product.options.find(({ name }) => names.includes(name.toLowerCase()));
    return option ? [...option.values] : [];
  }

  function collectionFor(product) {
    const normalizedTags = product.tags.map((tag) => tag.toLowerCase());

    if (normalizedTags.includes("marty season")) return "Marty Season";
    if (normalizedTags.includes("replay") || product.vendor === "Replay") return "Replay for Garrix";
    if (normalizedTags.includes("kids")) return "Kids";
    if (product.id === "keychain-bundle-3pcs") return "Accessories";
    if (product.vendor === "STMPD RCRDS" || product.id.includes("flag")) return "STMPD";
    return "Garrix";
  }

  function descriptionFor(product, colors) {
    if (DESCRIPTION_BY_ID[product.id]) return DESCRIPTION_BY_ID[product.id];

    if (product.tags.some((tag) => tag.toLowerCase() === "marty season")) {
      const garment = product.type === "Hoodies" ? "hoodie" : "shirt";
      const color = colors[0] ? `${colors[0].toLowerCase()} ` : "";
      return `A fitted unisex 100% cotton ${color}${garment} from Martin Garrix's 2026 Marty Season collection.`;
    }

    return `Official ${product.title} merchandise.`;
  }

  function categoryKeyFor(product) {
    const normalizedTags = product.tags.map((tag) => tag.toLowerCase());
    const type = product.type.toLowerCase();
    if (normalizedTags.includes("kids")) return "kids";
    if (type === "t-shirts") return "tshirts";
    if (type === "hoodies" || type === "sweaters") return "hoodies";
    if (type === "jackets") return "outerwear";
    if (type === "accessories" || type === "" || product.id.includes("flag")) return "accessories";
    return type.replace(/[^a-z0-9]+/g, "-");
  }

  function priceLabel(minimum, maximum) {
    const formatter = new Intl.NumberFormat("en-IE", {
      style: "currency",
      currency: CURRENCY,
      minimumFractionDigits: 2
    });

    return minimum === maximum
      ? formatter.format(minimum)
      : `${formatter.format(minimum)}–${formatter.format(maximum)}`;
  }

  const products = RAW_PRODUCTS.map((product) => {
    const sizes = optionValues(product, ["size", "maat", "variation"]);
    const colors = optionValues(product, ["color"]);
    const prices = product.variants.map(({ price }) => price);
    const price = Math.min(...prices);
    const priceMax = Math.max(...prices);
    const compareAtValues = product.variants
      .filter(({ compareAt, price }) => compareAt !== null && compareAt > price)
      .map(({ compareAt }) => compareAt);
    const availableVariants = product.variants.filter(({ available }) => available).length;
    const availability = availableVariants === 0
      ? "sold_out"
      : availableVariants === product.variants.length
        ? "in_stock"
        : "partial";

    return {
      ...product,
      name: product.title,
      category: product.type || "Flags",
      categoryKey: categoryKeyFor(product),
      collection: collectionFor(product),
      currency: CURRENCY,
      price,
      priceMax,
      priceLabel: priceLabel(price, priceMax),
      compareAt: compareAtValues.length ? Math.max(...compareAtValues) : null,
      sizes,
      colors,
      color: colors.join(" / "),
      available: availableVariants > 0,
      availability,
      availableVariants,
      badge: availableVariants === 0 ? "Sold out" : compareAtValues.length ? "Sale" : product.tags.includes("2026") ? "New" : "",
      featured: product.tags.includes("Marty Season") && availableVariants > 0,
      description: descriptionFor(product, colors),
      sourceUrl: `${SHOP_ROOT}/products/${product.id}`
    };
  });

  const target = typeof window === "undefined" ? globalThis : window;
  target.GARRIX_PRODUCTS = products;
  target.GARRIX_CATALOG_META = {
    source: `${SHOP_ROOT}/products.json?limit=250`,
    collectionSource: `${SHOP_ROOT}/collections.json?limit=250`,
    capturedAt: "2026-08-11T16:28:08Z",
    currency: CURRENCY,
    count: products.length
  };
})();
