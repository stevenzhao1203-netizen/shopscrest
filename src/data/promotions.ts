import productsData from "../../data/products.json";

export type ProductReview = {
  id: string;
  category: "electronics" | "apparel" | "skincare" | "home" | "travel";
  title: string;
  tagline: string;
  image: string;
  affiliateLink: string;
  painPoint: string;
  deepReview: string;
  pros: string[];
  cons: string[];
};

export type Category = {
  slug: string;
  name: string;
  eyebrow: string;
  title: string;
  description: string;
};

export type ProductFind = {
  slug: string;
  title: string;
  brand: string;
  category: string;
  categorySlug: string;
  price: string;
  image: string;
  url: string;
  copy: string;
  details: string;
};

export type Article = {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  readTime: string;
  image: string;
  excerpt: string;
  featuredProductSlug?: string;
  sections: Array<{
    heading: string;
    body: string;
  }>;
};

export const products = (productsData as { products: ProductReview[] }).products;

const brandByProductId: Record<string, string> = {
  "sony-wh-1000xm5-headphones": "Sony",
  "anker-737-power-bank": "Anker",
  "apple-airpods-pro": "Apple",
  "logitech-mx-master-3s": "Logitech",
  "nike-tech-fleece-hoodie": "Nike",
  "adidas-ultraboost-shoes": "adidas",
  "uniqlo-airism-t-shirt": "UNIQLO",
  "lululemon-abc-pant": "lululemon",
  "sephora-hydrating-serum": "Sephora",
  "kiehls-ultra-facial-cream": "Kiehl's",
  "the-ordinary-niacinamide-serum": "The Ordinary",
  "cerave-hydrating-cleanser": "CeraVe",
  "ikea-poang-armchair": "IKEA",
  "philips-hue-starter-kit": "Philips Hue",
  "dyson-v8-cordless-vacuum": "Dyson",
  "ninja-air-fryer": "Ninja",
  "away-carry-on": "Away",
  "patagonia-black-hole-duffel": "Patagonia",
  "samsonite-freeform-carry-on": "Samsonite",
  "peak-design-travel-backpack": "Peak Design"
};

function getBrandName(product: ProductReview) {
  return brandByProductId[product.id] || product.title.split(" ")[0];
}

const categoryDetails: Record<ProductReview["category"], Category> = {
  electronics: {
    slug: "electronics",
    name: "Electronics",
    eyebrow: "tech picks",
    title: "Electronics for work, travel, and everyday carry",
    description:
      "Headphones, chargers, earbuds, and desk accessories for workdays, commutes, and travel bags."
  },
  apparel: {
    slug: "apparel",
    name: "Apparel",
    eyebrow: "wardrobe systems",
    title: "Apparel for travel days, errands, and casual workweeks",
    description:
      "Sneakers, hoodies, tees, and pants selected around comfort, fit, and repeat wear."
  },
  skincare: {
    slug: "skincare",
    name: "Skincare",
    eyebrow: "daily care",
    title: "Skincare basics for simple routines",
    description:
      "Cleansers, moisturizers, and serums for straightforward personal care routines."
  },
  home: {
    slug: "home",
    name: "Home",
    eyebrow: "living spaces",
    title: "Home goods for small upgrades around the house",
    description:
      "Seating, lighting, cleaning tools, and kitchen appliances for apartments and busy households."
  },
  travel: {
    slug: "travel",
    name: "Travel",
    eyebrow: "carry systems",
    title: "Travel goods for packing, commuting, and short trips",
    description:
      "Carry-ons, duffels, and backpacks for short trips, airports, and road weekends."
  }
};

const categoryOrder: ProductReview["category"][] = ["electronics", "apparel", "skincare", "home", "travel"];

export const categories = categoryOrder.map((slug) => categoryDetails[slug]);
export const categoryTabs = categories.map((category) => category.name);

export const heroStats = [
  ["20", "product notes"],
  ["5", "shopping departments"],
  ["8", "buying guides"]
];

export const productFinds: ProductFind[] = products.map((product) => ({
  slug: product.id,
  title: product.title,
  brand: getBrandName(product),
  category: categoryDetails[product.category].name,
  categorySlug: product.category,
  price: "Official store",
  image: product.image,
  url: product.affiliateLink,
  copy: product.tagline,
  details: product.deepReview
}));

export const productCategories = categories.map((category) => {
  const firstProduct = products.find((product) => product.category === category.slug);

  return {
    title: category.title,
    slug: category.slug,
    image: firstProduct?.image || products[0].image,
    label: category.name,
    description: category.description
  };
});

export const promotedBrands = products.map((product) => ({
  name: getBrandName(product),
  category: categoryDetails[product.category].name,
  url: product.affiliateLink,
  summary: product.tagline
}));

export const guideCollections = [
  {
    title: "Work-from-home setup",
    items: "ANC headphones, charging dock, tailored blazer, skincare serum, and organized carry."
  },
  {
    title: "Travel packing setup",
    items: "Weatherproof backpack, wrinkle-free blazer, merino knit, charging station, and compact skincare."
  },
  {
    title: "Apartment refresh",
    items: "Ceramic decor, clean charging, daily audio, skincare essentials, and simple wardrobe basics."
  },
  {
    title: "Shopping shortlist",
    items: "Short product pages, category pages, buying guides, and merchant links."
  }
];

export const articles: Article[] = [
  {
    slug: "how-to-build-a-quieter-work-from-home-setup",
    title: "How to build a quieter work-from-home setup",
    category: "Electronics",
    categorySlug: "electronics",
    readTime: "6 min read",
    image: products.find((product) => product.id === "sony-wh-1000xm5-headphones")?.image || products[0].image,
    excerpt: "Headphones, charging, lighting, and desk choices for calmer workdays.",
    featuredProductSlug: "sony-wh-1000xm5-headphones",
    sections: [
      {
        heading: "Start with the noise problem",
        body:
          "A quiet setup is not only about buying headphones. It starts with identifying the sound that interrupts you most often: nearby conversations, traffic, fans, appliances, or family activity. Once the problem is clear, it becomes easier to choose between over-ear headphones, earbuds, room layout changes, or simple schedule adjustments."
      },
      {
        heading: "Choose fewer products that solve repeat problems",
        body:
          "The best work-from-home upgrades are usually boring in a good way. A dependable headset, a clean charging station, a comfortable chair, and balanced lighting can do more for daily focus than a drawer full of small accessories."
      },
      {
        heading: "Keep your desk easy to reset",
        body:
          "A work area gets messy quickly when every device has its own cable, charger, and case. A small tray, a reliable charging spot, and one place for headphones make it easier to close the laptop at night and start again the next morning."
      },
      {
        heading: "Check the details before buying",
        body:
          "Before visiting a merchant site, look at comfort, battery needs, microphone quality, return policy, and whether the product fits both work and personal use. This keeps the decision grounded in daily use instead of feature lists."
      }
    ]
  },
  {
    slug: "portable-charging-buying-guide-for-daily-carry",
    title: "Portable charging buying guide for daily carry",
    category: "Electronics",
    categorySlug: "electronics",
    readTime: "5 min read",
    image: products.find((product) => product.id === "anker-737-power-bank")?.image || products[0].image,
    excerpt: "How to choose a charger or power bank for phones, tablets, laptops, and travel bags.",
    featuredProductSlug: "anker-737-power-bank",
    sections: [
      {
        heading: "Match capacity to your real day",
        body:
          "A small charger is enough for emergency phone top-ups, but laptop users and travelers may need a larger battery. Think about the devices you actually carry, how often you are away from an outlet, and whether weight matters more than extra capacity."
      },
      {
        heading: "Do not ignore cables and wall adapters",
        body:
          "Charging speed depends on the full setup, not just the power bank. A capable battery paired with the wrong cable or low-power wall adapter may feel slower than expected, so compatibility should be reviewed before buying."
      },
      {
        heading: "Think about where it will live",
        body:
          "A large battery is helpful on a flight but annoying in a small jacket pocket. If it will stay in a backpack, capacity may matter most. If it will move between a desk, car, and gym bag, shape and weight become just as important."
      },
      {
        heading: "Look for simple safety signals",
        body:
          "Reliable charging brands usually explain output ratings, safety features, and device compatibility clearly. That makes it easier to avoid a confusing spec sheet and choose a battery that fits your actual devices."
      }
    ]
  },
  {
    slug: "travel-friendly-clothing-essentials",
    title: "Travel-friendly clothing essentials for a smaller wardrobe",
    category: "Apparel",
    categorySlug: "apparel",
    readTime: "6 min read",
    image: products.find((product) => product.id === "lululemon-abc-pant")?.image || products[0].image,
    excerpt: "A simple framework for choosing layers, pants, and casual pieces that pack well.",
    featuredProductSlug: "lululemon-abc-pant",
    sections: [
      {
        heading: "Build around repeat outfits",
        body:
          "A travel wardrobe works best when pieces can repeat without looking identical every day. Neutral pants, a clean hoodie, a light jacket, and shoes that match multiple outfits keep packing simple."
      },
      {
        heading: "Comfort matters more than novelty",
        body:
          "Clothes that look good but feel restrictive rarely become repeat travel pieces. Prioritize stretch, breathable fabric, easy layering, and colors that do not require special styling."
      },
      {
        heading: "Pack for laundry reality",
        body:
          "A smaller wardrobe only works when pieces can handle repeat wear. Darker colors, quick-drying fabrics, and layers that do not wrinkle easily can save space and reduce the need to overpack."
      },
      {
        heading: "Buy for your actual destinations",
        body:
          "A city weekend, business trip, and outdoor holiday need different clothing choices. Before buying, consider climate, walking time, dress expectations, and how often the item will be worn after the trip."
      }
    ]
  },
  {
    slug: "simple-skincare-routine-buying-guide",
    title: "A simple skincare routine buying guide",
    category: "Skincare",
    categorySlug: "skincare",
    readTime: "5 min read",
    image: products.find((product) => product.id === "kiehls-ultra-facial-cream")?.image || products[0].image,
    excerpt: "How to think about cleanser, hydration, moisturizer, and sunscreen without overbuying.",
    featuredProductSlug: "kiehls-ultra-facial-cream",
    sections: [
      {
        heading: "Keep the routine understandable",
        body:
          "Most people do not need a shelf full of products to start. A basic routine can be built around cleansing, hydration, moisturizing, and daytime sun protection, then adjusted slowly as preferences become clearer."
      },
      {
        heading: "Read claims with caution",
        body:
          "Skincare language can sound dramatic, so it is better to focus on product role, texture, ingredient transparency, and whether the brand clearly explains who the product is for. Avoid treating any single item as a complete solution."
      },
      {
        heading: "Do not change everything at once",
        body:
          "When several new products start at the same time, it is hard to know what helped or what caused irritation. Add one product, use it consistently for a short period, and keep the rest of the routine familiar."
      },
      {
        heading: "Patch testing is still sensible",
        body:
          "Even familiar brands can feel different on different skin types. If your skin is sensitive, introduce new products one at a time and review ingredient lists before buying."
      }
    ]
  },
  {
    slug: "small-apartment-home-upgrades",
    title: "Small apartment home upgrades that make a room feel calmer",
    category: "Home",
    categorySlug: "home",
    readTime: "6 min read",
    image: products.find((product) => product.id === "ikea-poang-armchair")?.image || products[0].image,
    excerpt: "Comfortable seating, better lighting, and simple objects can change a room without renovation.",
    featuredProductSlug: "ikea-poang-armchair",
    sections: [
      {
        heading: "Start with how the room is used",
        body:
          "Before buying decor, decide whether the room needs to support reading, work, family time, storage, or better evening rest. The right product depends on the repeated activity, not only the visual style."
      },
      {
        heading: "Comfort and lighting do most of the work",
        body:
          "A comfortable chair and adjustable lighting can change how often a space gets used. These upgrades are especially useful for renters because they do not require permanent renovation."
      },
      {
        heading: "Measure before you fall in love with a photo",
        body:
          "Home products often look smaller online than they feel in a real room. Check the width, depth, cord length, clearance, and where doors or drawers need to open before ordering anything large."
      },
      {
        heading: "Leave space around each upgrade",
        body:
          "Small rooms feel better when every new item has breathing room. Choose one meaningful chair, lamp, shelf, or storage solution before adding decorative extras."
      }
    ]
  },
  {
    slug: "smart-lighting-guide-for-everyday-homes",
    title: "Smart lighting guide for everyday homes",
    category: "Home",
    categorySlug: "home",
    readTime: "5 min read",
    image: products.find((product) => product.id === "philips-hue-starter-kit")?.image || products[0].image,
    excerpt: "What to know before buying smart bulbs for bedrooms, desks, and living rooms.",
    featuredProductSlug: "philips-hue-starter-kit",
    sections: [
      {
        heading: "Decide whether you need mood, focus, or convenience",
        body:
          "Some people want warm evening light, some want brighter desk lighting, and others mainly want app or voice control. Knowing the main reason helps avoid paying for features that will not be used."
      },
      {
        heading: "Start with one room",
        body:
          "A starter kit makes the most sense when it solves one clear room problem first. Bedrooms, workspaces, and living rooms are easier starting points than trying to automate an entire home at once."
      },
      {
        heading: "Make sure manual control still works",
        body:
          "Smart lighting should not make guests or family members confused. A setup is easier to live with when switches, routines, and app controls all make sense without needing a long explanation."
      },
      {
        heading: "Check ecosystem compatibility",
        body:
          "Smart lighting can depend on phones, speakers, bridges, and home platforms. Before buying, confirm that the product works with the devices already used at home."
      }
    ]
  },
  {
    slug: "carry-on-luggage-buying-guide",
    title: "Carry-on luggage buying guide for short trips",
    category: "Travel",
    categorySlug: "travel",
    readTime: "6 min read",
    image: products.find((product) => product.id === "away-carry-on")?.image || products[0].image,
    excerpt: "How to think about suitcase size, wheels, compartments, and packing style before a trip.",
    featuredProductSlug: "away-carry-on",
    sections: [
      {
        heading: "Start with airline and trip length",
        body:
          "A good carry-on is only useful if it fits the way you travel. Check airline limits, typical trip length, and whether you usually pack shoes, tech, formal clothing, or family items."
      },
      {
        heading: "Wheels and handles matter more than photos",
        body:
          "A suitcase can look clean online but feel awkward in airports. Wheel style, handle height, interior layout, and shell material matter once the bag is packed and moving."
      },
      {
        heading: "Consider how you pack shoes and laundry",
        body:
          "Short trips still need space for worn clothes, toiletries, chargers, and sometimes a second pair of shoes. Interior dividers and compression panels matter most when you like everything separated."
      },
      {
        heading: "Think about storage at home",
        body:
          "Hard-shell luggage is helpful on many trips, but it still needs space between journeys. Apartment dwellers may want to review dimensions and nesting options before buying."
      }
    ]
  },
  {
    slug: "duffel-vs-suitcase-travel-guide",
    title: "Duffel vs suitcase: which travel bag fits your trip?",
    category: "Travel",
    categorySlug: "travel",
    readTime: "5 min read",
    image: products.find((product) => product.id === "patagonia-black-hole-duffel")?.image || products[0].image,
    excerpt: "A practical comparison for road trips, outdoor weekends, airport travel, and daily gear.",
    featuredProductSlug: "patagonia-black-hole-duffel",
    sections: [
      {
        heading: "Choose a suitcase for structure",
        body:
          "Suitcases are better when clothes need to stay folded, airport walking is predictable, and the trip has a more formal schedule. Wheels and compartments can make short city trips easier."
      },
      {
        heading: "Choose a duffel for flexibility",
        body:
          "Duffels are easier for road trips, outdoor gear, gym items, and mixed packing. They can fit into irregular spaces and usually store more easily at home when empty."
      },
      {
        heading: "Think about how far you carry it",
        body:
          "A duffel feels convenient from the car to a hotel room, but it can become tiring across a large airport. Shoulder straps, backpack straps, and packed weight matter more than they appear in product photos."
      },
      {
        heading: "Match the bag to the messy part of travel",
        body:
          "The best choice depends on the most annoying part of the trip. If walking long airport corridors is the issue, wheels matter. If packing odd-shaped gear is the issue, a flexible duffel may be more useful."
      }
    ]
  }
];

export function getCategory(slug: string) {
  return categories.find((category) => category.slug === slug);
}

export function getProductsByCategory(slug: string) {
  return productFinds.filter((product) => product.categorySlug === slug);
}

export function getProduct(slug: string) {
  return productFinds.find((product) => product.slug === slug);
}

export function getProductReview(id: string) {
  return products.find((product) => product.id === id);
}

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
