/**
 * Personal details for the portfolio, taken from Suleiman Rehman's CV.
 */
export const profile = {
  name: "Suleiman Rehman",
  firstName: "Suleiman",
  role: "Digital Marketing Strategist & CMS / E-Commerce Specialist",
  roleShort: "Digital Marketing Strategist & E-Commerce Specialist",
  tagline:
    "I build WordPress and Shopify stores that rank, convert and grow, backed by Google and Semrush certified performance marketing.",
  location: "Karachi, Pakistan",
  availability: "Available for freelance work on Fiverr & Upwork",
  email: "Suleimanrehman55@gmail.com",
  phone: "0318-1177398",
  phoneHref: "tel:+923181177398",
  whatsapp: "923181177398",
  socials: {
    linkedin: "", // add profile URL when available
    fiverr: "", // add profile URL when available
    upwork: "", // add profile URL when available
  },
  stats: [
    { label: "Projects delivered", value: 10, suffix: "+" },
    { label: "Years of experience", value: 3, suffix: "+" },
    { label: "Certifications", value: 9, suffix: "" },
  ],
  about: [
    "I am a results-oriented Digital Marketing Strategist and CMS & E-Commerce Specialist with hands-on experience in performance marketing, SEO, WordPress, Shopify and content-driven growth. I am Google and Semrush certified, and I have built responsive websites, managed e-commerce stores and run data-driven campaigns for local brands, international clients and corporate programs.",
    "What sets my builds apart is that marketing is baked in from day one. Every store and landing page I ship is structured for search visibility, measured with analytics and tuned for conversion, so the site keeps working after launch.",
  ],
  // Flat list used by the skills marquee.
  skills: [
    "WordPress",
    "Elementor",
    "WooCommerce",
    "Shopify",
    "Landing Page Design",
    "Theme Customization",
    "Google Ads",
    "PPC & SEM",
    "Retargeting",
    "CRO",
    "Semrush",
    "Keyword Research",
    "Technical SEO",
    "Meta Optimization",
    "Social Media Strategy",
    "Email Marketing",
    "Mobile Marketing",
    "AI-Powered Marketing",
  ],
  // Grouped list used in the About toolkit card, mirroring the CV.
  skillGroups: [
    {
      title: "CMS & E-Commerce",
      items: ["WordPress", "Elementor", "Shopify", "WooCommerce", "Landing Page Design", "Theme Customization"],
    },
    {
      title: "Digital & Performance Marketing",
      items: ["Google Ads", "AI-Powered Performance Advertising", "PPC", "SEM", "Audience Segmentation", "Retargeting", "CRO"],
    },
    {
      title: "SEO & Content Strategy",
      items: ["Keyword Research", "Semrush", "Keyword Mapping", "On-Page & Technical SEO", "Long-Tail Keywords", "Meta Optimization"],
    },
    {
      title: "Social & Multi-Channel",
      items: ["Social Media Strategy", "Content Planning", "Email Marketing & Automation", "Mobile Marketing", "Brand Positioning"],
    },
  ],
  services: [
    {
      title: "WordPress & Elementor Websites",
      description:
        "Responsive WordPress sites built with Elementor, with a focus on usability, layout architecture, page performance and UX.",
      icon: "Paintbrush",
    },
    {
      title: "Shopify & WooCommerce Stores",
      description:
        "Store setup and management including product listings, collections, payment gateways, checkout funnels and theme customisation.",
      icon: "ShoppingBag",
    },
    {
      title: "SEO & Content Strategy",
      description:
        "SEO audits, keyword mapping and on-page optimisation for WordPress and Shopify, with meta titles, descriptions and content structures tuned for organic visibility.",
      icon: "Search",
    },
    {
      title: "Google Ads & Performance Marketing",
      description:
        "Google Ads, PPC and SEM campaigns with audience segmentation, retargeting and AI-powered performance advertising.",
      icon: "Megaphone",
    },
    {
      title: "Landing Pages & CRO",
      description:
        "Conversion-focused landing pages for direct-response campaigns, applying CRO principles to improve lead generation and click-through rates.",
      icon: "Gauge",
    },
    {
      title: "Social & Email Marketing",
      description:
        "Social media strategy, content planning and scheduling, email marketing automation and online branding to drive engagement.",
      icon: "Share2",
    },
  ],
  experience: [
    {
      company: "Freelance (Fiverr & Upwork)",
      role: "Digital Strategist & CMS Specialist",
      period: "Jan 2023 – Present",
      mode: "Remote",
      points: [
        "Design, develop and customise responsive WordPress websites using Elementor.",
        "Set up and manage Shopify stores: product listings, collections, payment gateways and checkout funnels.",
        "Run SEO audits, keyword mapping and on-page optimisation for WordPress and Shopify sites.",
        "Build conversion-focused landing pages for direct-response campaigns and apply CRO to lift lead generation.",
        "Provide end-to-end digital marketing and web solutions for local and international clients.",
      ],
    },
    {
      company: "Aptech",
      role: "Marketing Strategist",
      period: "Sep 2023 – Present",
      mode: "Karachi",
      points: [
        "Work in the Digital Marketing faculty, building practical skills in online branding, customer engagement and campaign strategy.",
        "Certified trainer for Marketing Principles, Email Marketing and Mobile Marketing.",
      ],
    },
    {
      company: "Webrexo",
      role: "Digital Marketing Manager",
      period: "Jun 2023 – Aug 2023",
      mode: "Hybrid",
      points: [
        "Managed Webrexo's social media platforms, creating and scheduling content to keep a consistent brand presence.",
        "Engaged with the audience and monitored performance to improve reach and interaction.",
      ],
    },
    {
      company: "Dtecherz",
      role: "Digital Marketing Executive",
      period: "Mar 2023 – May 2023",
      mode: "Remote",
      points: [
        "Monitored performance insights and optimised content strategies to improve reach and conversions.",
      ],
    },
  ],
  education: [
    {
      school: "Iqra University, Main Campus",
      degree: "Bachelor of Business Administration (BBA)",
      period: "2023 – 2027",
    },
  ],
  certifications: [
    { title: "AI-Powered Performance Ads Certification", issuer: "Google" },
    { title: "Keyword Research Essentials", issuer: "Semrush Academy" },
    { title: "Get a Job in Digital Marketing", issuer: "Semrush Academy" },
    { title: "Certified Digital Marketing Executive", issuer: "Aptech Computer Education" },
    { title: "Certified Trainer, Marketing Principles (1240)", issuer: "Aptech Computer Education" },
    { title: "Certified Trainer, Email Marketing (1242)", issuer: "Aptech Computer Education" },
    { title: "Certified Trainer, Mobile Marketing (1243)", issuer: "Aptech Computer Education" },
    { title: "Accelerated Learning Program", issuer: "The History Project, Cambridge Social Ventures" },
    { title: "Certificate of Appreciation, Social Media Marketing Workshop", issuer: "Aptech Learning" },
  ],
};

export type Service = (typeof profile.services)[number];
