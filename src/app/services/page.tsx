import React from 'react';
import Link from 'next/link';
import { 
  FaCalendarCheck, 
  FaGift, 
  FaSun, 
  FaLeaf, 
  FaCamera 
} from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const services = [
  {
    id: 'roka',
    title: 'Roka / Engagement Ceremony',
    icon: <FaCalendarCheck className="text-5xl text-[#ff5722]" />,
    description: 'Plan a beautiful and memorable start to your wedding journey with our Roka and Engagement Ceremony services.',
    features: [
      'Venue selection and decoration',
      'Traditional rituals setup',
      'Photography and videography',
      'Guest management',
      'Catering arrangements',
      'Music and entertainment',
      'Custom event themes'
    ],
    cities: ['Agra', 'Mathura', 'Firozabad', 'Mainpuri']
  },
  {
    id: 'tilak',
    title: 'Tilak / Sagai',
    icon: <FaGift className="text-5xl text-[#ffc107]" />,
    description: 'Celebrate this auspicious pre-wedding ritual with perfect arrangements and elegant setup.',
    features: [
      'Ring ceremony setup',
      'Decor and floral arrangements',
      'Catering and refreshments',
      'Invitation design',
      'Photography coverage',
      'Traditional gifts coordination',
      'Guest hospitality'
    ],
    cities: ['Agra', 'Mathura', 'Firozabad']
  },
  {
    id: 'haldi',
    title: 'Haldi Ceremony',
    icon: <FaSun className="text-5xl text-[#e91e63]" />,
    description: 'Bright and colorful Haldi ceremony setup with traditional vibes and joyful arrangements.',
    features: [
      'Traditional Haldi setup',
      'Colorful decor',
      'Flower arrangements',
      'Music and dhol',
      'Photography and video',
      'Guest seating and comfort',
      'Catering services'
    ],
    cities: ['Agra', 'Mathura']
  },
  {
    id: 'mehendi',
    title: 'Mehendi Ceremony',
    icon: <FaLeaf className="text-5xl text-[#4caf50]" />,
    description: 'Traditional Mehendi event with music, décor, and celebrations tailored to your traditions.',
    features: [
      'Mehendi artist arrangements',
      'Decor and lighting',
      'Music and entertainment',
      'Guest seating and comfort',
      'Custom themes',
      'Photography and video',
      'Snacks and catering'
    ],
    cities: ['Agra', 'Mathura', 'Firozabad']
  },
  {
    id: 'photoshoot',
    title: 'Pre-Wedding Photoshoot',
    icon: <FaCamera className="text-5xl text-[#3f51b5]" />,
    description: 'Capture everlasting memories with our professional pre-wedding photoshoot services.',
    features: [
      'Location scouting',
      'Photography and videography',
      'Creative direction',
      'Traditional and modern themes',
      'Makeup and styling coordination',
      'Drone shoots available',
      'Album and video editing'
    ],
    cities: ['Agra', 'Mathura']
  }
];

export default function Services() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="bg-[#ff5722] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Comprehensive event planning services for all occasions across the Agra Mandal region
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.slice(0, 4).map((service) => (
              <div key={service.id} className="card text-center hover:-translate-y-2">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description.substring(0, 100)}...</p>
                <Link href={`#${service.id}`} className="text-[#ff5722] font-medium">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Detailed Services</h2>
          <p className="section-subtitle">Explore our comprehensive event planning services</p>

          <div className="space-y-16 mt-12">
            {services.map((service) => (
              <div key={service.id} id={service.id} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3 flex flex-col items-center text-center">
                    <div className="mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <div className="mt-4">
                      <h4 className="font-bold text-gray-700 mb-2">Available in:</h4>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {service.cities.map((city) => (
                          <span 
                            key={city} 
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                          >
                            {city}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <h4 className="font-bold text-lg mb-3">What We Offer:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <span className="text-[#ff5722] mr-2">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-8">
                      <Link href="/contact" className="btn-primary">
                        Book This Service
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#ff5722] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Plan Your Event?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Contact us today to discuss your event needs and get a customized quote.
          </p>
          <Link href="/contact" className="bg-white text-[#ff5722] hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md">
            Contact Us Now
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
