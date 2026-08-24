export const categories = [
  {
    slug: "paints",
    name: "Paints",
    icon: "/icons/paint.svg",
    description: "Interior, exterior, primers, enamels and more.",
    subcategories: [
      { slug: "interior-paints", name: "Interior Paints" },
      { slug: "exterior-paints", name: "Exterior Paints" },
      { slug: "primers", name: "Primers" },
      { slug: "enamels", name: "Enamels" },
      { slug: "wood-finishes", name: "Wood Finishes" },
      { slug: "metal-paints", name: "Metal Paints" },
      { slug: "specialty-paints", name: "Specialty Paints" },
    ],
  },
  {
    slug: "hardware",
    name: "Hardware",
    icon: "/icons/hardware-hammer.svg",
    description: "Everyday hardware for home, trade and projects.",
    subcategories: [
      { slug: "fasteners", name: "Fasteners" },
      { slug: "screws-bolts", name: "Screws & Bolts" },
      { slug: "hinges", name: "Hinges" },
      { slug: "locks-latches", name: "Locks & Latches" },
      { slug: "handles", name: "Handles" },
      { slug: "brackets", name: "Brackets" },
      { slug: "general-hardware", name: "General Hardware" },
    ],
  },
  {
    slug: "tools",
    name: "Tools",
    icon: "/icons/tools-wrench.svg",
    description: "Hand tools and useful equipment for the job.",
    subcategories: [
      { slug: "hand-tools", name: "Hand Tools" },
      { slug: "screwdrivers", name: "Screwdrivers" },
      { slug: "pliers-wrenches", name: "Pliers & Wrenches" },
      { slug: "measuring-tools", name: "Measuring Tools" },
      { slug: "cutting-tools", name: "Cutting Tools" },
      { slug: "power-tools", name: "Power Tools" },
    ],
  },
  {
    slug: "waterproofing",
    name: "Waterproofing",
    icon: "/icons/waterproofing.svg",
    description: "Products to help protect walls, roofs and surfaces.",
    subcategories: [
      { slug: "roof-waterproofing", name: "Roof Waterproofing" },
      { slug: "wall-waterproofing", name: "Wall Waterproofing" },
      { slug: "bathroom-waterproofing", name: "Bathroom Waterproofing" },
      { slug: "crack-fillers", name: "Crack Fillers" },
      { slug: "sealants", name: "Sealants" },
      { slug: "waterproofing-accessories", name: "Waterproofing Accessories" },
    ],
  },
  {
    slug: "painting-accessories",
    name: "Painting Accessories",
    icon: "/icons/paint-roller.svg",
    description: "Brushes, rollers, trays and painting essentials.",
    subcategories: [
      { slug: "brushes", name: "Paint Brushes" },
      { slug: "rollers", name: "Paint Rollers" },
      { slug: "trays", name: "Paint Trays" },
      { slug: "scrapers", name: "Scrapers" },
      { slug: "sandpaper", name: "Sandpaper" },
      { slug: "masking", name: "Masking Tape" },
      { slug: "extension-poles", name: "Extension Poles" },
      { slug: "other-accessories", name: "Other Accessories" },
    ],
  },
];

export const products = [
  {
  slug: "opus-one-inspire-clear-coat",
  name: "One Inspire Clear Coat",
  short: "OPUS",

  brand: "Opus",
  range: "One",

  category: "Paints",
  categorySlug: "paints",
  subcategory: "exterior-paints",

  description: "...",
  longDescription: "...",

  image: "https://www.birlaopus.com/ACTUAL-IMAGE-URL.webp",

  manufacturerUrl:
    "https://www.birlaopus.com/paint-products/exterior-wall-paint/one-inspire-clear-coat",

  available: true,
  featured: true,
},
  {
    slug: "opus-interior",
    name: "Opus Interior",
    short: "OPUS",
    brand: "Opus",
    category: "Paints",
    categorySlug: "paints",
    subcategory: "interior-paints",
    tone: "sand",
    description: "Interior paint for smooth, clean-looking walls.",
    longDescription: "A featured Opus primer product. Contact the store for current availability and suitable applications.",
    image: null,
    available: true,
    featured: true,
  },
  {
    slug: "opus-primer",
    name: "Opus Primer",
    short: "PRIMER",
    brand: "Opus",
    category: "Paints",
    categorySlug: "paints",
    subcategory: "primers",
    tone: "slate",
    description: "Primer for preparing surfaces before painting.",
    longDescription: "A featured Opus primer product. Contact the store for current availability and suitable applications.",
    image: null,
    available: true,
    featured: true,
  },
  {
    slug: "opus-waterproofing",
    name: "Opus Waterproofing",
    short: "WATER",
    brand: "Opus",
    category: "Waterproofing",
    categorySlug: "waterproofing",
    subcategory: "wall-waterproofing",
    tone: "blue",
    description: "Waterproofing solutions for walls and surfaces.",
    longDescription: "A featured Opus waterproofing product. Contact the store for current availability and application guidance.",
    image: null,
    available: true,
    featured: true,
  },
  {
    slug: "paint-brush-set",
    name: "Paint Brush Set",
    short: "BRUSH",
    brand: "Various",
    category: "Painting Accessories",
    categorySlug: "painting-accessories",
    subcategory: "brushes",
    tone: "cream",
    description: "Brushes for everyday painting and touch-up work.",
    longDescription: "Painting brushes available in different sizes. Contact the store for current options.",
    image: null,
    available: true,
    featured: true,
  },
  {
    slug: "paint-roller",
    name: "Paint Roller",
    short: "ROLLER",
    brand: "Various",
    category: "Painting Accessories",
    categorySlug: "painting-accessories",
    subcategory: "rollers",
    tone: "green",
    description: "Rollers for efficient wall and surface painting.",
    longDescription: "Paint rollers available in different sizes and finishes. Contact the store for current options.",
    image: null,
    available: true,
    featured: false,
  },
  {
    slug: "hammer",
    name: "General Purpose Hammer",
    short: "HAMMER",
    brand: "Various",
    category: "Hardware",
    categorySlug: "hardware",
    subcategory: "general-hardware",
    tone: "charcoal",
    description: "A practical hand tool for everyday jobs.",
    longDescription: "General purpose hardware tool. Contact the store for available sizes and brands.",
    image: null,
    available: true,
    featured: false,
  },
  {
    slug: "screwdriver-set",
    name: "Screwdriver Set",
    short: "TOOLS",
    brand: "Various",
    category: "Tools",
    categorySlug: "tools",
    subcategory: "screwdrivers",
    tone: "orange",
    description: "Essential screwdrivers for common repair work.",
    longDescription: "Screwdriver sets available in different configurations. Contact the store for current stock.",
    image: null,
    available: true,
    featured: false,
  },
];

export function getCategory(slug) {
  return categories.find((category) => category.slug === slug);
}

export function getSubcategory(categorySlug, subcategorySlug) {
  return getCategory(categorySlug)?.subcategories.find(
    (subcategory) => subcategory.slug === subcategorySlug,
  );
}

export function getAvailableProducts() {
  return products.filter((product) => product.available !== false);
}

export function getBrands(items = getAvailableProducts()) {
  return [...new Set(items.map((product) => product.brand).filter(Boolean))].sort();
}
