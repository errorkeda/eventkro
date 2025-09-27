import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

const eventData = {
  'agra-wedding-events': {
    title: 'Wedding Events in Agra',
    image: '/images/haldi.jpg',
    description: 'Best Wedding Event Planners in Agra. We handle everything from decor to catering, making your special day stress-free.',
    features: [
      'Custom wedding themes and decor',
      'Professional photography and videography',
      'Expert catering with personalized menus',
      'Complete event management from start to finish',
    ],
    testimonial: {
      quote: '"EventKro made our wedding an unforgettable experience! Every detail was handled perfectly."',
      client: 'Priya & Rohit, Agra',
    },
  },
  'agra-engagement-ceremony': {
    title: 'Engagement Ceremony in Agra',
    image: '/images/engegment.jpg',
    description: 'Professional Engagement Ceremony Planners in Agra. We make your engagement a memorable celebration with personalized touches.',
    features: [
      'Elegant decorations for engagement parties',
      'Customized entertainment options',
      'Photography to capture every moment',
      'Complete coordination and planning',
    ],
    testimonial: {
      quote: '"Our engagement party was flawless thanks to EventKro. Highly recommended!"',
      client: 'Anita & Karan, Tundla',
    },
  },
  'agra-birthday-party': {
    title: 'Birthday Parties in Agra',
    image: '/images/birthday.jpg',
    description: 'Creative Birthday Party Planners in Agra for memorable events, tailored to your theme and style.',
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
  },
  'agra-anniversary-event': {
    title: 'Anniversary Events in Agra',
    image: '/images/anniversary.jpg',
    description: 'Celebrate love with our Anniversary Event Planners in Agra. Custom decorations, catering, and surprises for a perfect anniversary.',
    features: [
      'Romantic theme setups',
      'Catering with personalized menus',
      'Photography & videography',
      'Entertainment and surprises',
    ],
    testimonial: {
      quote: '"Our 10th anniversary was perfect thanks to EventKro. Truly memorable!"',
      client: 'Simran & Raj, Firozabad',
    },
  },
  'agra-corporate-events': {
    title: 'Corporate Events in Agra',
    image: '/images/corporate.jpg',
    description: 'Best Corporate Event Planners in Agra for meetings, conferences, and company celebrations.',
    features: [
      'Conference and meeting management',
      'Professional decor and setup',
      'Audio/video arrangements',
      'Team-building and entertainment activities',
    ],
    testimonial: {
      quote: '"EventKro organized our corporate retreat flawlessly. Highly professional!"',
      client: 'Rahul & Team, Sirsaganj',
    },
  },
  'agra-housewarming-ceremony': {
    title: 'House Warming Ceremony in Agra',
    image: '/images/housewarming.jpeg',
    description: 'Celebrate your new home with our expert Housewarming Event Planners in Agra.',
    features: [
      'Custom home decor and setup',
      'Catering and refreshments',
      'Photography to capture the moments',
      'Complete planning and coordination',
    ],
    testimonial: {
      quote: '"Our housewarming was stress-free and beautiful. EventKro did an amazing job!"',
      client: 'Sneha & Aman, Mainpuri',
    },
  },
  'agra-baby-shower': {
    title: 'Baby Shower Events in Agra',
    image: '/images/babyshower.jpeg',
    description: 'Creative Baby Shower Event Planners in Agra to make your special day memorable.',
    features: [
      'Themed decorations and party favors',
      'Fun games and activities for guests',
      'Customized catering',
      'Photography & videography services',
    ],
    testimonial: {
      quote: '"Our baby shower was so beautiful and well organized. Loved every moment!"',
      client: 'Megha & Saurabh, Sirsaganj',
    },
  },
  'agra-rituals-events': {
    title: 'Ritual Events in Agra',
    image: '/images/rituals.jpeg',
    description: 'Best Ritual Event Planners in Agra for traditional functions and ceremonies.',
    features: [
      'Traditional decoration and setup',
      'Priest arrangements if needed',
      'Catering and refreshments',
      'Complete coordination for smooth rituals',
    ],
    testimonial: {
      quote: '"Our puja ceremony was seamless and memorable thanks to EventKro."',
      client: 'Neha & Vinod, Agra',
    },
  },
};


export default function EventPage({ params }) {
  const event = eventData[params.slug];

  if (!event) {
    return <div className="text-center py-16">Event not found</div>;
  }

  return (
    <>
      <Header />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-6">{event.title}</h1>
          <img
            src={event.image}
            alt={event.title}
            className="w-full max-w-3xl mx-auto h-96 object-cover rounded-lg shadow-md mb-6"
          />
          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-8">{event.description}</p>

          {/* Features */}
          <div className="max-w-3xl mx-auto mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-center">Why Choose Our Services</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {event.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-8">
            <Link
              href="/contact"
              className="inline-block bg-pink-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-pink-700 transition"
            >
              Book This Event
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl font-semibold mb-6">What Our Clients Say</h2>
          <p className="text-gray-600 italic">{event.testimonial.quote}</p>
          <p className="mt-2 font-semibold">{event.testimonial.client}</p>
        </div>
      </section>

      <Footer />
    </>
  );
}
