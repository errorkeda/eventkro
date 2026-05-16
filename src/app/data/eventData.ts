export type EventEntry = {
  title: string;
  image: string;
  description: string;
  features: string[];
  testimonial: {
    quote: string;
    client: string;
  };
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
};

export const eventSlugs = [
  'agra-wedding-events',
  'agra-engagement-ceremony',
  'agra-birthday-party',
  'agra-anniversary-event',
  'agra-corporate-events',
  'agra-housewarming-ceremony',
  'agra-baby-shower',
  'agra-rituals-events',
] as const;

export type EventSlug = (typeof eventSlugs)[number];

export const eventData: Record<EventSlug, EventEntry> = {
  'agra-wedding-events': {
    title: 'Wedding Events in Agra',
    image: '/images/haldi.jpg',
    description:
      'Best Wedding Event Planners in Agra. We handle everything from decor to catering, making your special day stress-free.',
    features: [
      'Custom wedding themes and decor',
      'Professional photography and videography',
      'Expert catering with personalized menus',
      'Complete event management from start to finish',
    ],
    testimonial: {
      quote:
        '"EventKro made our wedding an unforgettable experience! Every detail was handled perfectly."',
      client: 'Priya & Rohit, Agra',
    },
    seo: {
      title: 'Wedding Event Planners in Agra | Eventkro',
      description:
        'Book the best wedding event planners in Agra. Decor, catering, photography and full wedding management by Eventkro.',
      keywords: [
        'wedding planners in agra',
        'wedding event planners agra',
        'Eventkro',
      ],
    },
  },
  'agra-engagement-ceremony': {
    title: 'Engagement Ceremony in Agra',
    image: '/images/engegment.jpg',
    description:
      'Professional Engagement Ceremony Planners in Agra. We make your engagement a memorable celebration with personalized touches.',
    features: [
      'Elegant decorations for engagement parties',
      'Customized entertainment options',
      'Photography to capture every moment',
      'Complete coordination and planning',
    ],
    testimonial: {
      quote:
        '"Our engagement party was flawless thanks to EventKro. Highly recommended!"',
      client: 'Anita & Karan, Tundla',
    },
    seo: {
      title: 'Engagement Ceremony Planners in Agra | Eventkro',
      description:
        'Professional engagement ceremony planners in Agra. Decoration, catering, photography and complete event coordination.',
      keywords: ['engagement planners agra', 'ring ceremony agra', 'Eventkro'],
    },
  },
  'agra-birthday-party': {
    title: 'Birthday Parties in Agra',
    image: '/images/birthday.jpg',
    description:
      'Creative Birthday Party Planners in Agra for memorable events, tailored to your theme and style.',
    features: [
      'Theme-based party decor',
      'Games and activities for guests',
      'Catering with delicious treats',
      'Personalized birthday surprises',
    ],
    testimonial: {
      quote: '"My son loved his birthday party! EventKro did an amazing job."',
      client: 'Rhea & Anil, shikohabad',
    },
    seo: {
      title: 'Birthday Party Planners in Agra | Eventkro',
      description:
        'Creative birthday party planners in Agra. Theme decor, games, catering and stress-free birthday event management.',
      keywords: ['birthday party planners agra', 'birthday decorators agra'],
    },
  },
  'agra-anniversary-event': {
    title: 'Anniversary Events in Agra',
    image: '/images/anniversary.jpg',
    description:
      'Celebrate love with our Anniversary Event Planners in Agra. Custom decorations, catering, and surprises for a perfect anniversary.',
    features: [
      'Romantic theme setups',
      'Catering with personalized menus',
      'Photography & videography',
      'Entertainment and surprises',
    ],
    testimonial: {
      quote:
        '"Our 10th anniversary was perfect thanks to EventKro. Truly memorable!"',
      client: 'Simran & Raj, Firozabad',
    },
    seo: {
      title: 'Anniversary Event Planners in Agra | Eventkro',
      description:
        'Anniversary event planners in Agra. Romantic themes, catering, photography and surprise arrangements by Eventkro.',
      keywords: ['anniversary planners agra', 'anniversary party agra'],
    },
  },
  'agra-corporate-events': {
    title: 'Corporate Events in Agra',
    image: '/images/corporate.jpg',
    description:
      'Best Corporate Event Planners in Agra for meetings, conferences, and company celebrations.',
    features: [
      'Conference and meeting management',
      'Professional decor and setup',
      'Audio/video arrangements',
      'Team-building and entertainment activities',
    ],
    testimonial: {
      quote:
        '"EventKro organized our corporate retreat flawlessly. Highly professional!"',
      client: 'Rahul & Team, Sirsaganj',
    },
    seo: {
      title: 'Corporate Event Planners in Agra | Eventkro',
      description:
        'Best corporate event planners in Agra for conferences, meetings and company celebrations. Professional AV, decor and management.',
      keywords: [
        'corporate event planners agra',
        'conference organizers agra',
      ],
    },
  },
  'agra-housewarming-ceremony': {
    title: 'House Warming Ceremony in Agra',
    image: '/images/housewarming.jpeg',
    description:
      'Celebrate your new home with our expert Housewarming Event Planners in Agra.',
    features: [
      'Custom home decor and setup',
      'Catering and refreshments',
      'Photography to capture the moments',
      'Complete planning and coordination',
    ],
    testimonial: {
      quote:
        '"Our housewarming was stress-free and beautiful. EventKro did an amazing job!"',
      client: 'Sneha & Aman, Mainpuri',
    },
    seo: {
      title: 'Housewarming Event Planners in Agra | Eventkro',
      description:
        'Housewarming ceremony planners in Agra. Home decor, catering, photography and full event coordination by Eventkro.',
      keywords: ['housewarming planners agra', 'griha pravesh agra'],
    },
  },
  'agra-baby-shower': {
    title: 'Baby Shower Events in Agra',
    image: '/images/babyshower.jpeg',
    description:
      'Creative Baby Shower Event Planners in Agra to make your special day memorable.',
    features: [
      'Themed decorations and party favors',
      'Fun games and activities for guests',
      'Customized catering',
      'Photography & videography services',
    ],
    testimonial: {
      quote:
        '"Our baby shower was so beautiful and well organized. Loved every moment!"',
      client: 'Megha & Saurabh, Sirsaganj',
    },
    seo: {
      title: 'Baby Shower Event Planners in Agra | Eventkro',
      description:
        'Baby shower event planners in Agra. Themed decor, games, catering and photography for a memorable celebration.',
      keywords: ['baby shower planners agra', 'baby shower decorators agra'],
    },
  },
  'agra-rituals-events': {
    title: 'Ritual Events in Agra',
    image: '/images/rituals.jpeg',
    description:
      'Best Ritual Event Planners in Agra for traditional functions and ceremonies.',
    features: [
      'Traditional decoration and setup',
      'Priest arrangements if needed',
      'Catering and refreshments',
      'Complete coordination for smooth rituals',
    ],
    testimonial: {
      quote:
        '"Our puja ceremony was seamless and memorable thanks to EventKro."',
      client: 'Neha & Vinod, Agra',
    },
    seo: {
      title: 'Traditional Ritual Event Planners in Agra | Eventkro',
      description:
        'Traditional ritual and puja event planners in Agra. Decor, catering and full ceremony coordination by Eventkro.',
      keywords: [
        'ritual event planners agra',
        'puja ceremony planners agra',
        'cultural events agra',
      ],
    },
  },
};
