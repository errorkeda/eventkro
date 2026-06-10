'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaStar } from 'react-icons/fa';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Script from 'next/script';
import FaqAccordion from '../../../components/FaqAccordion';

const venues = [
  {
    name: 'Shikohabad Palace & Banquet Garden',
    description: 'Lush green outdoor lawn combined with premium indoor banquet hall, perfect for grand weddings and reception events.',
    capacity: '200-1000 guests',
    features: ['Spacious outdoor lawn', 'Bridal dressing rooms', 'In-house catering', 'Glass-art decor custom setups'],
    rating: 4.8,
    image: '/images/venue-heritage.jpeg'
  },
  {
    name: 'Balaji Marriage Home & Party Lawn',
    description: 'Spiritual and traditional event venue near the main temples, ideal for family rituals and cultural events.',
    capacity: '100-500 guests',
    features: ['Near Balaji temple', 'Spiritual ambiance', 'Valet parking', 'Fully custom decorations'],
    rating: 4.7,
    image: '/images/venue-krishna-hall.jpeg'
  },
  {
    name: 'Royal Glass & Event Hall',
    description: 'Modern, fully air-conditioned event hall designed for premium corporate events, conferences, and luxury weddings.',
    capacity: '150-700 guests',
    features: ['Air-conditioned main hall', 'Advanced acoustics & lighting', 'Corporate seminar setup', 'Elite catering counters'],
    rating: 4.6,
    image: '/images/venue-convention.jpg'
  }
];

const events = [
  {
    title: 'Royal Glass Heritage Wedding',
    description: 'Celebrate your dream wedding in Shikohabad with customized theme decoration, incorporating regional glass artistry, premium floral setups, and professional event coordination.',
    image: '/images/haldi.jpg',
  },
  {
    title: 'Corporate Seminars & Meets',
    description: 'Host professional business meets and corporate conferences in Shikohabad with premium seating, state-of-the-art AV equipment, and expert catering options.',
    image: '/images/corporate.jpg',
  },
  {
    title: 'Theme Birthday Parties & Balloon Decor',
    description: 'Delight your guests with colorful balloon arches, custom backdrop walls, and creative birthday themes designed by our expert decorators in Shikohabad.',
    image: '/images/birthday.jpg',
  }
];

const faqItems = [
  {
    key: 1,
    question: 'What types of event services does Eventkro offer in Shikohabad?',
    answer: 'Eventkro provides end-to-end event management and decoration services in Shikohabad. This includes wedding planning, pre-wedding celebrations (like Roka, Sagai, Haldi, and Mehendi), themed birthday party decorations, custom balloon arches and backdrops, professional catering, photography coordination, and corporate event setups.'
  },
  {
    key: 2,
    question: 'Can I request a custom decoration theme for my event?',
    answer: 'Yes, customized themes are our specialty. We can create traditional setups, modern fusion concepts, and unique glass-themed decorations inspired by the regional craftsmanship. Our design team works closely with you to personalize colors, layouts, and materials to match your vision.'
  },
  {
    key: 3,
    question: 'Do you offer catering services for events in Shikohabad?',
    answer: 'Absolutely. We coordinate with top-rated local and regional caterers to offer fully customizable vegetarian and non-vegetarian menus. From traditional Awadhi and Mughlai dishes to popular desserts and live food counters, we ensure high hygiene standards and excellent taste.'
  },
  {
    key: 4,
    question: 'How far in advance should I book Eventkro for my event?',
    answer: 'For large events like weddings, engagements, or corporate seminars, we recommend booking 3 to 6 months in advance. For smaller events like birthday balloon decorations or baby showers, booking 1 to 2 weeks ahead is usually sufficient to secure your preferred date and design.'
  },
  {
    key: 5,
    question: 'Do you serve locations surrounding Shikohabad?',
    answer: 'Yes, we cover Shikohabad and the wider Agra Mandal region. We routinely manage events in Agra, Mathura, Firozabad, Mainpuri, and nearby towns. You can easily view our services for other cities on our dedicated pages like Event Planners in Agra, Mathura, and Firozabad.'
  }
];

export default function ShikohabadPage() {
  const [activeTab, setActiveTab] = useState('overview');

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Eventkro Shikohabad',
    image: 'https://www.eventkro.in/favicon-512x512.png',
    '@id': 'https://www.eventkro.in/cities/shikohabad#localbusiness',
    url: 'https://www.eventkro.in/cities/shikohabad',
    telephone: '+91 7017520811',
    email: 'vipabhi12345@gmail.com',
    priceRange: '₹₹',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 27.1065,
      longitude: 78.5835
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Shikohabad Region',
      addressLocality: 'Shikohabad',
      addressRegion: 'Uttar Pradesh',
      postalCode: '283135',
      addressCountry: 'IN'
    },
    areaServed: 'Shikohabad',
    description: 'Professional event planning, wedding management, balloon decoration, and catering services in Shikohabad and surrounding areas by Eventkro.'
  };

  return (
    <main>
      <Script id="shikohabad-localbusiness-schema" type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </Script>
      
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-1.jpeg')" }}
        ></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-20">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Events in Shikohabad</h1>
            <p className="text-xl mb-6">
              Host your dream wedding, corporate conference, or private celebration in Shikohabad with premium planning and styling
            </p>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-[#ff5722] mr-2" />
              <span>Shikohabad, Uttar Pradesh, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto">
            <button 
              className={`px-6 py-4 font-medium whitespace-nowrap ${activeTab === 'overview' ? 'text-[#ff5722] border-b-2 border-[#ff5722]' : 'text-gray-600'}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`px-6 py-4 font-medium whitespace-nowrap ${activeTab === 'venues' ? 'text-[#ff5722] border-b-2 border-[#ff5722]' : 'text-gray-600'}`}
              onClick={() => setActiveTab('venues')}
            >
              Venues
            </button>
            <button 
              className={`px-6 py-4 font-medium whitespace-nowrap ${activeTab === 'events' ? 'text-[#ff5722] border-b-2 border-[#ff5722]' : 'text-gray-600'}`}
              onClick={() => setActiveTab('events')}
            >
              Event Types
            </button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div>
              <h2 className="text-3xl font-bold mb-6">About Shikohabad</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Welcome to Shikohabad, a dynamic and historically rich city located in the Firozabad district of Uttar Pradesh. Situated strategically along National Highway 19, Shikohabad is rapidly emerging as a central hub for commercial, educational, and cultural events in the Agra Mandal region. Famed for its close proximity to the glass manufacturing heartland, the city brings a unique industrious spirit and artistic flare to every occasion.
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Over recent years, the culture of hosting celebrations in Shikohabad has transitioned from modest home-based get-togethers to grand, highly personalized events. Families and local businesses are searching for elegant setups that combine traditional Indian customs with modern design aesthetics. This is where Eventkro comes in. As the leading event management company in the region, we provide end-to-end event planning, stunning decorations, and delicious catering services, making your events stress-free and unforgettable.
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Whether you are planning an elite wedding with custom glass decor, a colorful birthday party with premium balloon installations, a traditional ceremony like Roka or Haldi, or a structured corporate meet, Eventkro brings professional expertise and a dedicated network of vendors to Shikohabad. Our goal is to handle all the logistics, vendor management, styling, and coordination so that you can relax and create lifelong memories with your guests.
                  </p>

                  <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Eventkro for Your Shikohabad Events</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Planning a high-quality event requires flawless execution, transparent pricing, and creative design. Eventkro offers a range of services that ensure your celebration stands out:
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <span className="text-[#ff5722] mr-3 mt-1 font-bold">✓</span>
                      <span className="text-gray-700"><strong>Innovative Theme Decorations:</strong> We create tailored visual experiences, from flower-balloon fusion walls to bespoke crystal and glass lighting setups inspired by Firozabad craftsmanship.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#ff5722] mr-3 mt-1 font-bold">✓</span>
                      <span className="text-gray-700"><strong>Premium Catering Services:</strong> Our culinary partners design custom multi-cuisine menus featuring traditional Awadhi flavors, regional sweets, and interactive live food counters.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#ff5722] mr-3 mt-1 font-bold">✓</span>
                      <span className="text-gray-700"><strong>Comprehensive Wedding Planning:</strong> We manage everything from venue layout design, Roka / Sagai ceremony setup, pre-wedding photoshoots, guest hospitality, and stage sound systems.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#ff5722] mr-3 mt-1 font-bold">✓</span>
                      <span className="text-gray-700"><strong>Local Vendor Network:</strong> By leveraging our strong regional relationships, we secure the best resources in Shikohabad without travel premiums or logistical delays.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#ff5722] mr-3 mt-1 font-bold">✓</span>
                      <span className="text-gray-700"><strong>Professional On-Site Execution:</strong> Our coordinator stays on-site during the entire event, resolving any issues and maintaining schedules so your event runs smoothly.</span>
                    </li>
                  </ul>

                  <h3 className="text-2xl font-bold mt-8 mb-4">Exquisite Weddings with Regional Glass Art Integrations</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Every wedding is a once-in-a-lifetime journey. In Shikohabad, we strive to build a wedding design that reflects your personal story while honoring the local heritage. Drawing inspiration from Firozabad’s world-renowned glass artistry, we incorporate custom-made crystal chandeliers, glowing glass centerpieces, LED lighting strings, and mixed floral hangings into our mandap and stage setups. This fusion creates a glowing, royal atmosphere that makes for perfect photography backdrops.
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Our team handles all pre-wedding events as well. We coordinate matching themes for vibrant Haldi celebrations with traditional yellow marigold curtains and dhol music, organize Mehendi stages with comfortable seating layouts, and coordinate ring exchanges for your Sagai. When the main wedding day arrives, our end-to-end coordination ensures everything from guest welcoming to the final bidai proceeds flawlessly. Explore our full range of setups on our <Link href="/services" className="text-[#ff5722] font-semibold hover:underline">Event Services</Link> page.
                  </p>

                  <h3 className="text-2xl font-bold mt-8 mb-4">Corporate Seminar Management & Meetings</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    Shikohabad’s growing commercial presence makes it an excellent choice for regional business meets, product launches, dealer meets, and corporate retreats. Eventkro provides the same professional-grade coordination expected in major cities. We set up executive stages, arrange clear sound systems, coordinate audio-visual layouts, design professional floral entryways, and manage corporate lunches. Our proximity to corporate hubs in Agra and Firozabad allows us to offer smooth travel and local logistics management.
                  </p>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    If you are looking to book a professional venue or need styling for your office inauguration, please <Link href="/contact" className="text-[#ff5722] font-semibold hover:underline">Contact Us</Link> today. We offer customized packages designed specifically for business budgets, complete with detailed itineraries and quick turnarounds.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl h-fit">
                  <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-700">Best Season for Events</h4>
                      <p className="text-gray-600">October to April (pleasant winter weather), and local festival periods.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700">Popular Event Types</h4>
                      <p className="text-gray-600">Grand Weddings, Tilak / Roka Ceremonies, Themed Birthday Parties, Corporate Conferences.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700">Specialties</h4>
                      <p className="text-gray-600">Glass-themed visual decoration, premium balloon arches, traditional Braj-UP catering.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700">Local Attractions</h4>
                      <p className="text-gray-600">Balaji Temple, nearby Firozabad Glass Bazaars, local historical steps and gardens.</p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link href="/contact" className="btn-primary w-full text-center block">
                      Plan Your Shikohabad Event
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Venues Tab */}
          {activeTab === 'venues' && (
            <div>
              <h2 className="text-3xl font-bold mb-6">Top Venues in Shikohabad</h2>
              <div className="space-y-12">
                {venues.map((venue, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      <div className="md:col-span-1 h-64 md:h-auto relative">
                        <div 
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(${venue.image})` }}
                        ></div>
                      </div>
                      <div className="md:col-span-2 p-6">
                        <div className="flex justify-between items-start">
                          <h3 className="text-2xl font-bold text-gray-900">{venue.name}</h3>
                          <div className="flex items-center bg-[#ff5722]/10 px-3 py-1 rounded-full">
                            <FaStar className="text-[#ff5722] mr-1" />
                            <span className="font-semibold text-gray-800">{venue.rating}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mt-2 mb-4">{venue.description}</p>
                        
                        <div className="flex items-center text-gray-700 mb-4">
                          <FaCalendarAlt className="mr-2 text-[#ff5722]" />
                          <span>Capacity: {venue.capacity}</span>
                        </div>
                        
                        <h4 className="font-bold mb-2 text-gray-900">Features:</h4>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {venue.features.map((feature, i) => (
                            <span 
                              key={i} 
                              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                        
                        <Link href="/contact" className="btn-primary inline-block">
                          Inquire
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>  
          )}

          {/* Events Tab */}
          {activeTab === 'events' && (
            <div>
              <h2 className="text-3xl font-bold mb-6">Popular Event Types in Shikohabad</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {events.map((event, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                    <div className="h-48 relative">
                      <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${event.image})` }}
                      ></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{event.title}</h3>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-gray-600 mb-6">
                  Looking for a custom celebration experience in Shikohabad? Our team can create a tailored package just for you.
                </p>
                <Link href="/contact" className="btn-primary">
                  Request Custom Event
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-center mb-8">
            Find answers to common questions about booking event planning and balloon decoration services in Shikohabad.
          </p>
          <FaqAccordion items={faqItems} defaultOpenIndex={0} />
        </div>
      </section>

      {/* Explore Neighboring Cities Section */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-xl font-bold mb-6 text-gray-800">Explore Event Planning in Neighboring Cities</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/cities/agra" className="px-5 py-2 border rounded-full text-gray-700 hover:border-[#ff5722] hover:text-[#ff5722] transition">
              Agra
            </Link>
            <Link href="/cities/mathura" className="px-5 py-2 border rounded-full text-gray-700 hover:border-[#ff5722] hover:text-[#ff5722] transition">
              Mathura
            </Link>
            <Link href="/cities/firozabad" className="px-5 py-2 border rounded-full text-gray-700 hover:border-[#ff5722] hover:text-[#ff5722] transition">
              Firozabad
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#ff5722] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Plan Your Shikohabad Event?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8 text-white/90">
            Contact us today to start planning your perfect wedding, birthday, or corporate gathering.
          </p>
          <Link href="/contact" className="bg-white text-[#ff5722] hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md">
            Book Your Shikohabad Event
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
