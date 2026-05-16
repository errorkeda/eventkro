// app/data/servicesData.ts
export type ServiceCategory = 'ceremony' | 'balloon';

export type Service = {
  id: string;
  category: ServiceCategory;
  /** Display name without city — city pages use "name in Agra" etc. */
  name: string;
  title: string;
  description: string;
  features: string[];
  cities: string[];
  image: string;
  rating: number;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
};

export const serviceCategories: {
  id: ServiceCategory;
  title: string;
  subtitle: string;
}[] = [
  {
    id: 'balloon',
    title: 'Balloon Decoration Services in Agra',
    subtitle:
      'Premium balloon decor for birthdays, weddings, baby showers, corporate events, arches, backdrops, and bouquets.',
  },
  {
    id: 'ceremony',
    title: 'Wedding & Ceremony Planning',
    subtitle:
      'Traditional and modern ceremony planning across the Agra Mandal region.',
  },
];

export const services: Service[] = [
  {
    id: 'balloon-decoration',
    category: 'balloon',
    name: 'Balloon Decoration Services',
    title: 'Balloon Decoration Services in Agra',
    description:
      'Complete balloon decoration services in Agra for every occasion — themed setups, premium balloons, on-time installation, and stress-free event styling by Eventkro.',
    features: [
      'Custom balloon themes for any event',
      'Premium quality latex & foil balloons',
      'On-site setup and removal',
      'Indoor & outdoor decoration',
      'Same-week booking available',
      'Packages for all budgets',
    ],
    cities: ['Agra', 'Mathura', 'Firozabad', 'Mainpuri'],
    image: '/images/birthday.jpg',
    rating: 5,
    seo: {
      title: 'Balloon Decoration Services in Agra | Eventkro',
      description:
        'Best balloon decoration services in Agra for birthdays, weddings, and parties. Arches, backdrops, bouquets & full event styling. Free quote.',
      keywords: [
        'balloon decoration agra',
        'balloon decorators in agra',
        'event decoration agra',
        'party decoration agra',
      ],
    },
  },
  {
    id: 'birthday-balloon-decoration',
    category: 'balloon',
    name: 'Birthday Party Decoration',
    title: 'Birthday Party Decoration in Agra',
    description:
      'Creative birthday party decoration in Agra with colorful balloon themes, cake table styling, and photo-ready setups for kids and adults.',
    features: [
      'Theme-based balloon decor (cartoon, elegant, neon)',
      'Cake table & backdrop styling',
      'Number foil balloons & age displays',
      'Ceiling & wall balloon garlands',
      'Party poppers & add-ons',
      'Setup before guests arrive',
    ],
    cities: ['Agra', 'Mathura', 'Firozabad'],
    image: '/images/birthday.jpg',
    rating: 5,
    seo: {
      title: 'Birthday Party Balloon Decoration in Agra | Eventkro',
      description:
        'Book birthday party decoration in Agra — balloon themes, cake table decor, foil numbers & full party styling. Affordable packages.',
      keywords: [
        'birthday party decoration agra',
        'birthday balloon decoration agra',
        'kids party decoration agra',
      ],
    },
  },
  {
    id: 'balloon-arch',
    category: 'balloon',
    name: 'Balloon Arch Decoration',
    title: 'Balloon Arch Decoration in Agra',
    description:
      'Stunning balloon arch decoration in Agra for entrances, stages, and photo zones — perfect for weddings, birthdays, and shop openings.',
    features: [
      'Organic balloon arches',
      'Classic spiral & garland arches',
      'Foil & latex balloon combinations',
      'Custom color matching to your theme',
      'Entrance & stage installations',
      'Indoor and outdoor setups',
    ],
    cities: ['Agra', 'Mathura', 'Firozabad', 'Mainpuri'],
    image: '/images/birthday.jpg',
    rating: 5,
    seo: {
      title: 'Balloon Arch Decoration in Agra | Eventkro',
      description:
        'Professional balloon arch decoration in Agra for weddings, birthdays & corporate events. Custom colors & premium finishes.',
      keywords: ['balloon arch agra', 'balloon arch decoration agra', 'entrance balloon arch'],
    },
  },
  {
    id: 'balloon-backdrop-wall',
    category: 'balloon',
    name: 'Balloon Backdrop / Wall',
    title: 'Balloon Backdrop / Wall in Agra',
    description:
      'Eye-catching balloon backdrop and balloon wall decoration in Agra for photo booths, stages, and reception areas.',
    features: [
      'Instagram-ready balloon walls',
      'Photo booth backdrops',
      'Stage & reception backdrops',
      'Mixed texture balloon panels',
      'Neon sign pairing available',
      'Custom name & message displays',
    ],
    cities: ['Agra', 'Mathura', 'Firozabad'],
    image: '/images/birthday.jpg',
    rating: 5,
    seo: {
      title: 'Balloon Backdrop & Wall Decoration in Agra | Eventkro',
      description:
        'Balloon backdrop and wall decoration in Agra for weddings and parties. Photo-ready designs with custom themes.',
      keywords: [
        'balloon backdrop agra',
        'balloon wall decoration agra',
        'photo booth balloon wall',
      ],
    },
  },
  {
    id: 'wedding-balloon-decoration',
    category: 'balloon',
    name: 'Wedding Balloon Decoration',
    title: 'Wedding Balloon Decoration in Agra',
    description:
      'Elegant wedding decoration in Agra with premium balloon styling for mandap, stage, entrance, and reception — coordinated with your wedding theme.',
    features: [
      'Mandap & stage balloon decor',
      'Entrance arches & walkways',
      'Reception & sangeet styling',
      'Floral-balloon fusion designs',
      'White, gold & pastel wedding themes',
      'Full wedding decor coordination',
    ],
    cities: ['Agra', 'Mathura', 'Firozabad'],
    image: '/images/haldi.jpg',
    rating: 4,
    seo: {
      title: 'Wedding Balloon Decoration in Agra | Eventkro',
      description:
        'Wedding decoration in Agra with balloon arches, stage decor & reception styling. Premium wedding balloon decor by Eventkro.',
      keywords: [
        'wedding decoration agra',
        'wedding balloon decoration agra',
        'mandap balloon decoration',
      ],
    },
  },
  {
    id: 'baby-shower-balloon-decoration',
    category: 'balloon',
    name: 'Baby Shower Decoration',
    title: 'Baby Shower Decoration in Agra',
    description:
      'Beautiful baby shower decoration in Agra with soft balloon themes, backdrop walls, and gender-reveal styling.',
    features: [
      'Gender-reveal balloon setups',
      'Pastel & themed baby shower decor',
      'Balloon backdrop for photos',
      'Welcome board & signage',
      'Table & cake area styling',
      'Custom color palettes',
    ],
    cities: ['Agra', 'Mathura', 'Firozabad', 'Mainpuri'],
    image: '/images/babyshower.jpeg',
    rating: 4,
    seo: {
      title: 'Baby Shower Balloon Decoration in Agra | Eventkro',
      description:
        'Baby shower decoration in Agra — balloon backdrops, gender-reveal setups & themed party styling. Book Eventkro today.',
      keywords: [
        'baby shower decoration agra',
        'baby shower balloon decoration',
        'gender reveal decoration agra',
      ],
    },
  },
  {
    id: 'balloon-bouquet',
    category: 'balloon',
    name: 'Balloon Bouquet',
    title: 'Balloon Bouquet in Agra',
    description:
      'Custom balloon bouquets in Agra for surprises, proposals, room decor, and gift deliveries — foil letters, hearts, and themed bundles.',
    features: [
      'Foil letter & number bouquets',
      'Heart & theme balloon bundles',
      'Room surprise decorations',
      'Proposal & anniversary setups',
      'Same-day delivery in Agra',
      'Gift-ready packaging',
    ],
    cities: ['Agra', 'Mathura', 'Firozabad'],
    image: '/images/birthday.jpg',
    rating: 4,
    seo: {
      title: 'Balloon Bouquet Delivery in Agra | Eventkro',
      description:
        'Order balloon bouquets in Agra for birthdays, anniversaries & surprises. Custom foil letters, hearts & themed bundles.',
      keywords: ['balloon bouquet agra', 'balloon gift agra', 'surprise balloon decoration'],
    },
  },
  {
    id: 'corporate-balloon-decoration',
    category: 'balloon',
    name: 'Corporate Event Balloon Decoration',
    title: 'Corporate Event Balloon Decoration in Agra',
    description:
      'Professional corporate event decoration in Agra with branded balloon styling for launches, conferences, office parties, and exhibitions.',
    features: [
      'Brand-color balloon decor',
      'Stage & podium styling',
      'Office party decorations',
      'Product launch setups',
      'Conference & seminar decor',
      'Professional, clean finishes',
    ],
    cities: ['Agra', 'Mathura', 'Firozabad', 'Mainpuri'],
    image: '/images/corporate.jpg',
    rating: 4,
    seo: {
      title: 'Corporate Event Balloon Decoration in Agra | Eventkro',
      description:
        'Corporate event decoration in Agra with balloon styling for offices, launches & conferences. Professional setups by Eventkro.',
      keywords: [
        'corporate event decoration agra',
        'office party decoration agra',
        'balloon decoration corporate',
      ],
    },
  },
  {
    id: "roka",
    category: 'ceremony',
    name: "Roka / Engagement Ceremony",
    title: "Roka / Engagement Ceremony in Agra",
    description:
      "Plan a beautiful and memorable start to your wedding journey in Agra with our professional Roka & Engagement services.",
    features: [
      "Venue selection & decoration",
      "Traditional rituals setup",
      "Photography & videography",
      "Guest management",
      "Catering arrangements",
      "Music & entertainment",
      "Custom event themes",
    ],
    cities: ["Agra", "Mathura", "Firozabad", "Mainpuri"],
    image: "/images/engegment.jpg",
    rating: 5,
    seo: {
      title: "Roka & Engagement Ceremony Services in Agra | Eventkro",
      description:
        "Book Roka & Engagement ceremony services in Agra — decorations, catering, photography and full event management by Eventkro.",
      keywords: ["Roka ceremony Agra", "Engagement planner Agra", "Event planners Agra"],
    },
  },

  {
    id: "tilak",
    category: 'ceremony',
    name: "Tilak / Sagai Ceremony",
    title: "Tilak / Sagai Planners in Agra",
    description:
      "Celebrate the Tilak / Sagai ceremony in Agra with elegant décor, catering, and traditional arrangements.",
    features: [
      "Ring ceremony setup",
      "Floral & theme-based decorations",
      "Catering & refreshments",
      "Invitation design",
      "Photography",
      "Traditional gifts coordination",
      "Guest hospitality",
    ],
    cities: ["Agra", "Mathura", "Firozabad"],
    image: "/images/tilak.jpeg",
    rating: 5,
    seo: {
      title: "Tilak & Sagai Ceremony Services in Agra | Eventkro",
      description:
        "Professional Tilak / Sagai ceremony planners in Agra. Decoration, catering, guest management and more.",
      keywords: ["Tilak in Agra", "Sagai planner Agra", "Tilak decorators Agra"],
    },
  },

  {
    id: "haldi",
    category: 'ceremony',
    name: "Haldi Ceremony",
    title: "Haldi Ceremony in Agra",
    description:
      "Vibrant Haldi ceremonies in Agra — colorful décor, music and joyful arrangements for a memorable celebration.",
    features: [
      "Traditional Haldi décor",
      "Flower arrangements",
      "Music & dhol",
      "Photography & video",
      "Guest seating & comfort",
      "Custom themes",
      "Catering services",
    ],
    cities: ["Agra", "Mathura"],
    image: "/images/haldi.jpg",
    rating: 5,
    seo: {
      title: "Haldi Ceremony Services in Agra | Eventkro",
      description:
        "Book Haldi ceremony services in Agra — décor, catering, music and full event arrangements by Eventkro.",
      keywords: ["Haldi ceremony Agra", "Haldi decorators Agra", "Wedding events Agra"],
    },
  },

  {
    id: "mehendi",
    category: 'ceremony',
    name: "Mehendi Ceremony",
    title: "Mehendi Ceremony in Agra",
    description:
      "Traditional Mehendi events in Agra with professional artists, decor, music and refreshments.",
    features: [
      "Mehendi artist arrangements",
      "Stage & decoration",
      "Music & entertainment",
      "Guest hospitality",
      "Custom themes",
      "Photography & videography",
      "Snacks & catering",
    ],
    cities: ["Agra", "Mathura", "Firozabad"],
    image: "/images/mehendi.jpeg",
    rating: 5,
    seo: {
      title: "Mehendi Ceremony Services in Agra | Eventkro",
      description:
        "Plan your Mehendi ceremony in Agra with Eventkro — mehendi artists, décor, catering and full event support.",
      keywords: ["Mehendi event Agra", "Mehendi planner Agra", "Wedding services Agra"],
    },
  },

  {
    id: "photoshoot",
    category: 'ceremony',
    name: "Pre-Wedding Photoshoot",
    title: "Pre-Wedding Photoshoot in Agra",
    description:
      "Capture magical moments near the Taj Mahal and across Agra with our professional pre-wedding photoshoot packages.",
    features: [
      "Location scouting in Agra",
      "Professional photography & videography",
      "Creative direction",
      "Makeup & styling coordination",
      "Drone shoots available",
      "Album & video editing",
      "Theme-based shoots",
    ],
    cities: ["Agra", "Mathura"],
    image: "/images/photoshoot.jpg",
    rating: 5,
    seo: {
      title: "Pre-Wedding Photoshoot Services in Agra | Eventkro",
      description:
        "Book pre-wedding photoshoots in Agra — Taj Mahal shoots, professional photographers, styling and editing packages.",
      keywords: ["Pre-wedding photoshoot Agra", "Taj Mahal shoot", "Wedding photography Agra"],
    },
  },
];

export function getServicesByCategory(category: ServiceCategory): Service[] {
  return services.filter((s) => s.category === category);
}
