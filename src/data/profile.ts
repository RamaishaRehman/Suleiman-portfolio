/**
 * Personal details for the portfolio.
 * TODO: replace the placeholder values below with details from Suleiman's CV.
 */
export const profile = {
  name: "Suleiman",
  firstName: "Suleiman",
  role: "WordPress & WooCommerce Developer",
  tagline:
    "I build fast, conversion-focused WordPress stores and business websites that look sharp and are easy to manage.",
  location: "Pakistan", // TODO: confirm from CV
  availability: "Available for freelance and contract work",
  email: "hello@example.com", // TODO: replace with real email
  whatsapp: "", // TODO: optional, digits only e.g. "923001234567"
  socials: {
    linkedin: "", // TODO
    github: "", // TODO
    upwork: "", // TODO
    fiverr: "", // TODO
  },
  stats: [
    { label: "Projects delivered", value: 10, suffix: "+" }, // TODO: update from CV
    { label: "Years of experience", value: 3, suffix: "+" }, // TODO: update from CV
    { label: "Happy clients", value: 8, suffix: "+" }, // TODO: update from CV
  ],
  about: [
    "I am a WordPress developer who specialises in e-commerce storefronts and business websites. I take a brief, a brand and a product catalogue and turn it into a finished site that loads fast, converts visitors and is simple for the owner to update.",
    "My recent work spans fashion and fragrance stores, a movie studio site, corporate and agency websites and a service business with a before/after gallery and quote forms. Every build is responsive, accessible and ready for search engines.",
  ],
  // TODO: replace with the real skill list from the CV
  skills: [
    "WordPress",
    "WooCommerce",
    "Elementor",
    "Shopify",
    "PHP",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Tailwind CSS",
    "Figma to WordPress",
    "SEO",
    "Page Speed",
    "Payment Gateways",
    "WhatsApp Integration",
    "Multi-currency",
    "Live Chat",
  ],
  services: [
    {
      title: "WooCommerce Stores",
      description:
        "Complete online stores with product catalogues, variants, wishlists, carts, payment gateways and multi-currency support.",
      icon: "ShoppingBag",
    },
    {
      title: "Business & Corporate Sites",
      description:
        "Clean, trustworthy websites for agencies, institutions and service businesses, with structured service pages and lead forms.",
      icon: "Building2",
    },
    {
      title: "Custom Theme Development",
      description:
        "Pixel-accurate builds from Figma or reference designs, including custom headers, sliders, galleries and landing pages.",
      icon: "Paintbrush",
    },
    {
      title: "Shopify Storefronts",
      description:
        "Shopify theme setup and customisation with collections, announcement bars, bulk order forms and store locators.",
      icon: "Store",
    },
    {
      title: "Speed & SEO",
      description:
        "Image optimisation, caching, Core Web Vitals fixes and on-page SEO so the site ranks and loads quickly on mobile.",
      icon: "Gauge",
    },
    {
      title: "Integrations & Support",
      description:
        "WhatsApp ordering, live chat, multilingual setup, analytics and ongoing maintenance after launch.",
      icon: "Plug",
    },
  ],
};

export type Service = (typeof profile.services)[number];
