export type ProjectCategory =
  | "E-commerce"
  | "Corporate"
  | "Agency"
  | "Entertainment"
  | "Services";

export type Project = {
  slug: string;
  name: string;
  category: ProjectCategory;
  platform: string;
  description: string;
  image: string;
  video?: string;
  tags: string[];
  featured?: boolean;
  url?: string; // TODO: add live URLs when available
};

export const categories: Array<"All" | ProjectCategory> = [
  "All",
  "E-commerce",
  "Services",
  "Corporate",
  "Agency",
  "Entertainment",
];

export const projects: Project[] = [
  {
    slug: "vector-tracing-pro",
    name: "Vector Tracing Pro",
    category: "Services",
    platform: "WordPress",
    description:
      "Service website for a manual vector tracing studio. Before/after gallery, pricing, video testimonials, quote forms, live chat and a multilingual switcher.",
    image: "/projects/vector-tracing-pro.png",
    video: "/projects/vector-tracing-pro-demo.mp4",
    tags: ["WordPress", "Lead forms", "Before/After gallery", "Live chat", "Multilingual"],
    featured: true,
  },
  {
    slug: "kodawari",
    name: "Kodawari",
    category: "E-commerce",
    platform: "WordPress + WooCommerce",
    description:
      "Streetwear brand store with bold character artwork, a dark custom theme, multi-currency storefront and collections for tees and trucker hats.",
    image: "/projects/kodawari.png",
    video: "/projects/kodawari-demo.mp4",
    tags: ["WooCommerce", "Custom theme", "Multi-currency", "Dark UI"],
    featured: true,
  },
  {
    slug: "muskoo",
    name: "Muskoo",
    category: "E-commerce",
    platform: "WordPress + WooCommerce",
    description:
      "Fragrance store with a full-width product slider, wishlist, cart, account area, WhatsApp ordering and a mobile bottom navigation bar.",
    image: "/projects/muskoo.png",
    tags: ["WooCommerce", "Hero slider", "Wishlist", "Mobile nav"],
  },
  {
    slug: "miyaar-studio",
    name: "Miyaar Studio",
    category: "E-commerce",
    platform: "WordPress + WooCommerce",
    description:
      "Menswear unstitched fashion store with campaign banners, announcement bar, mega menu, cart and account pages built for seasonal sales.",
    image: "/projects/miyaar-studio.png",
    tags: ["WooCommerce", "Campaign banners", "Announcement bar"],
  },
  {
    slug: "vogacci",
    name: "Vogacci",
    category: "E-commerce",
    platform: "WordPress + WooCommerce",
    description:
      "Fashion and streetwear store with a cinematic full-bleed hero, wishlist, product catalogue and a sticky mobile shopping bar.",
    image: "/projects/vogacci.png",
    tags: ["WooCommerce", "Full-bleed hero", "Wishlist"],
  },
  {
    slug: "cinebuzz-studios",
    name: "CineBuzz Studios",
    category: "Entertainment",
    platform: "WordPress",
    description:
      "Movie studio website with now-showing and coming-soon listings, trailer and showtime calls to action and a site-wide search.",
    image: "/projects/cinebuzz.png",
    tags: ["WordPress", "Media site", "Search", "Dark UI"],
  },
  {
    slug: "accreditation-authority",
    name: "International Accreditation Authority",
    category: "Corporate",
    platform: "WordPress",
    description:
      "Corporate website for an international accreditation body with a hero slider, public-sector messaging and structured information pages.",
    image: "/projects/accreditation-authority.png",
    tags: ["WordPress", "Corporate", "Hero slider"],
  },
  {
    slug: "branding-agency",
    name: "PR & Personal Branding Agency",
    category: "Agency",
    platform: "WordPress",
    description:
      "Editorial-style agency website presenting media features, personal branding and LinkedIn management services with a numbered services layout.",
    image: "/projects/branding-agency.png",
    tags: ["WordPress", "Agency", "Editorial layout"],
  },
  {
    slug: "digital-agency",
    name: "Digital Solutions Agency",
    category: "Agency",
    platform: "WordPress",
    description:
      "Agency landing page with an illustrated hero, dark mode toggle, live chat widget and a clear call to action for new leads.",
    image: "/projects/digital-agency.png",
    tags: ["WordPress", "Landing page", "Live chat", "Dark mode"],
  },
];
