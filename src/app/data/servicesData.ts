// app/data/servicesData.ts
export type Service = {
  id: string;
  title: string;
  description: string;
  features: string[];
  cities: string[];
  image: string;
  seo: {
    title: string;
    description: string;
    keywords: string[]; // array for generateMetadata
  };
};

export const services: Service[] = [
  {
    id: "roka",
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
    seo: {
      title: "Roka & Engagement Ceremony Services in Agra | Eventkro",
      description:
        "Book Roka & Engagement ceremony services in Agra — decorations, catering, photography and full event management by Eventkro.",
      keywords: ["Roka ceremony Agra", "Engagement planner Agra", "Event planners Agra"],
    },
  },

  {
    id: "tilak",
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
    seo: {
      title: "Tilak & Sagai Ceremony Services in Agra | Eventkro",
      description:
        "Professional Tilak / Sagai ceremony planners in Agra. Decoration, catering, guest management and more.",
      keywords: ["Tilak in Agra", "Sagai planner Agra", "Tilak decorators Agra"],
    },
  },

  {
    id: "haldi",
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
    seo: {
      title: "Haldi Ceremony Services in Agra | Eventkro",
      description:
        "Book Haldi ceremony services in Agra — décor, catering, music and full event arrangements by Eventkro.",
      keywords: ["Haldi ceremony Agra", "Haldi decorators Agra", "Wedding events Agra"],
    },
  },

  {
    id: "mehendi",
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
    seo: {
      title: "Mehendi Ceremony Services in Agra | Eventkro",
      description:
        "Plan your Mehendi ceremony in Agra with Eventkro — mehendi artists, décor, catering and full event support.",
      keywords: ["Mehendi event Agra", "Mehendi planner Agra", "Wedding services Agra"],
    },
  },

  {
    id: "photoshoot",
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
    seo: {
      title: "Pre-Wedding Photoshoot Services in Agra | Eventkro",
      description:
        "Book pre-wedding photoshoots in Agra — Taj Mahal shoots, professional photographers, styling and editing packages.",
      keywords: ["Pre-wedding photoshoot Agra", "Taj Mahal shoot", "Wedding photography Agra"],
    },
  },
];
