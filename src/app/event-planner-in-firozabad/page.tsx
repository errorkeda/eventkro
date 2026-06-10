'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaStar, FaChevronDown } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const faqItems = [
  {
    question: 'Why is Eventkro considered the best event planner in Firozabad?',
    answer: 'Eventkro stands out in Firozabad by offering high-quality design integration (featuring custom local glass art decoration), professional catering, and dynamic timeline management. We deliver premium events at competitive rates. Our local knowledge of halls and lawns in Firozabad allows us to coordinate logistics, guest services, and cleanups without delays.'
  },
  {
    question: 'What types of decorations do you offer in Firozabad?',
    answer: 'We specialize in organic balloon decorations (arches, backdrop walls, ceiling styling), fresh floral arrangements for mandap structures, LED and crystal lighting grids, and unique glass-themed decor. Drawing inspiration from Firozabad’s glass-making heritage, we incorporate local glass centerpieces, chandeliers, and custom art to create a glowing environment.'
  },
  {
    question: 'Can you organize corporate exhibitions or product launches in Firozabad?',
    answer: 'Yes, corporate event management is a major division of our service. We set up executive stages, coordinate corporate conferences, design exhibition stalls, arrange store inaugurations, and organize business meets. We provide high-tech sound systems, projectors, LED walls, and corporate catering.'
  },
  {
    question: 'Do you provide catering services in Firozabad?',
    answer: 'Yes, we provide premium catering coordination in Firozabad. We design customizable vegetarian and non-vegetarian menus (North Indian, traditional Mughlai, South Indian, street food snacks, and desserts). We ensure high food safety, fresh ingredients, clean setups, and professional servers.'
  },
  {
    question: 'What nearby cities do you serve in the region?',
    answer: 'Along with serving all areas in Firozabad (such as Suhag Nagar, Kotla Road, Shikohabad Road), we serve neighboring cities in the Agra Mandal including Agra, Mathura, Shikohabad, Mainpuri, Tundla, and surrounding towns. Explore our adjacent city landing pages: Event Planner in Agra, Event Planner in Mathura, and Event Planner in Shikohabad.'
  }
];

const venues = [
  {
    name: 'Glass City Exhibition Hall',
    description: 'A modern indoor convention space equipped with modular stall layouts, high-tech acoustics, and business lobbies, ideal for corporate meets and exhibitions.',
    capacity: '300-1500 guests',
    features: ['Modern AV routing', 'Air-conditioned halls', 'Exhibition layouts', 'Central location'],
    rating: 4.8,
    image: '/images/venue-convention.jpg'
  },
  {
    name: 'Suhag Nagar Celebration Lawn',
    description: 'A spacious green lawn perfect for grand outdoor weddings, receptions, and traditional family gatherings, complete with custom staging spaces.',
    capacity: '200-1000 guests',
    features: ['Spacious green lawn', 'Open catering area', 'Valet parking', 'Bridal suites'],
    rating: 4.7,
    image: '/images/venue-heritage.jpeg'
  },
  {
    name: 'Royal Crystal Banquet',
    description: 'An elegant indoor banquet hall designed with crystal fixtures, LED dance floors, and customizable layouts for weddings and social parties.',
    capacity: '100-500 guests',
    features: ['Crystal lighting design', 'AC banquet hall', 'Gourmet kitchen', 'Guest accommodation rooms'],
    rating: 4.6,
    image: '/images/venue-krishna-hall.jpeg'
  }
];

export default function FirozabadEventPlannerPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="bg-white min-h-screen">
      <Header />

      {/* Hero Banner Section */}
      <section className="relative h-[65vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-slide-3.jpeg')" }}
        ></div>
        <div className="container mx-auto px-4 relative z-20 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">
            Best Event Planner in Firozabad
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200">
            Elite wedding planning, creative glass-themed decorations, corporate exhibition management, and delicious catering across the Glass City.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary text-lg px-8 py-3 rounded-lg shadow-lg">
              Get Free Quote
            </Link>
            <Link href="/services" className="btn-secondary text-lg px-8 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white border-white/30">
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left/Main Content Column (1500+ Words) */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* About Section */}
              <div id="about" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  About Eventkro: Firozabad’s Creative Event Management Team
                </h2>
                <p className="leading-relaxed mb-4">
                  Welcome to Eventkro, your premier choice for planning and executing high-impact celebrations in Firozabad. Known as the leading <strong>event planner in firozabad</strong>, we bring an artistic approach, operational rigor, and local vendor connections to every occasion. Firozabad is celebrated globally as the Glass City, producing exquisite glass ornaments, chandeliers, and bangles. We believe that this rich artistic legacy should be reflected in the aesthetics of your events. Our designers specialize in creating custom decorations that merge local glass craft with modern floral styling, creating glowing and elegant environments.
                </p>
                <p className="leading-relaxed mb-4">
                  Our team manages the entire event workflow, from layout conceptualization to vendor coordination, logistics, catering, and on-site cleanup. We cooperate with the best local catering services, photographers, AV technicians, and decorators in Firozabad. By keeping our processes structured and transparent, we remove the operational challenges commonly faced during planning. Families, business houses, and community organizers trust Eventkro because we deliver visual excellence, budget control, and reliability.
                </p>
                <p className="leading-relaxed">
                  Whether you are planning a traditional wedding reception in Suhag Nagar, a corporate exhibition at Kotla Road, a colorful birthday party with premium balloon arches, or a private family ceremony, Eventkro guarantees an exceptional experience. Experience the difference of a professional approach with Eventkro.
                </p>
              </div>

              {/* Event Planning Services Section */}
              <div id="services" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Event Planning Services Customized for Firozabad
                </h2>
                <p className="leading-relaxed mb-6">
                  At Eventkro, we offer a comprehensive range of planning services designed to handle all aspects of your celebration. We design customized mood boards, secure the best local lawns and banquet halls, coordinate multi-cuisine menus, and provide on-site event coordination to ensure that everything runs smoothly.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Bespoke Glass & Floral Decor</h3>
                    <p className="text-gray-600 text-sm">Theme-based decorations combining local glass ornaments, crystal lighting, fresh flowers, and LED displays for a glowing stage setup.</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Exhibition & Launch Staging</h3>
                    <p className="text-gray-600 text-sm">Managing stages, registration booths, branding banners, and seating setups for corporate events and launches.</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Gourmet Buffet Catering</h3>
                    <p className="text-gray-600 text-sm">Designing customized menus, managing tandoori and sweet counters, providing clean tableware, and professional waitstaff.</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Themed Balloon Installations</h3>
                    <p className="text-gray-600 text-sm">Creating premium balloon arches, backdrop walls, and welcome panels for birthdays and baby showers.</p>
                  </div>
                </div>
              </div>

              {/* Wedding Planning Section */}
              <div id="wedding" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Elegant Wedding Planning & Glass Art Stage Design
                </h2>
                <p className="leading-relaxed mb-4">
                  A wedding is a holy milestone, and celebrating it with beauty, elegance, and traditional honors is our mission. Planning a wedding in Firozabad requires coordinating multiple pre-wedding functions, guest hospitality, decorative setups, and catering menus. As Firozabad’s leading wedding planner, Eventkro designs weddings that blend rich cultural traditions with luxurious designs. We coordinate with the top wedding lawns and banquet halls, creating a beautiful environment for your guests.
                </p>
                <p className="leading-relaxed mb-4">
                  We handle the planning for all wedding rituals:
                </p>
                <ul className="space-y-2 mb-4">
                  <li><strong>Roka & Sagai:</strong> Traditional ring exchange functions featuring elegant drapes, welcome signages, and guest seating layouts.</li>
                  <li><strong>Vibrant Haldi:</strong> Yellow-themed setups decorated with fresh marigolds, traditional swings, and folk music.</li>
                  <li><strong>Mehendi & Sangeet:</strong> Multi-colored canopy decor, stage and sound setups for dance performances, and seating for mehndi artists.</li>
                  <li><strong>Main Wedding Day:</strong> Breathtaking mandap setups (domes styled with fresh flowers, lighting pillars, crystal hangings), welcome gates, and royal entry structures.</li>
                </ul>
                <p className="leading-relaxed">
                  Our coordinators stay on-site during the wedding day, managing the timeline from the welcome ceremony to the Var Mala, dinner service, and final phere. We also coordinate with photographers and videographers to capture every detail.
                </p>
              </div>

              {/* Birthday Planning Section */}
              <div id="birthday" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Creative Birthday Parties & Themed Balloon Decoration
                </h2>
                <p className="leading-relaxed mb-4">
                  Celebrating your child’s birthday is a special family occasion. Eventkro provides creative birthday party planning and balloon decoration services that delight guests of all ages. We help you choose a theme (such as cartoon characters, neon glows, or elegant pastels) and design a matching cake table, photo backdrop, and welcome board.
                </p>
                <p className="leading-relaxed mb-4">
                  Our decorators use premium latex and foil balloons to build organic balloon arches, photo backdrop walls, and customized balloon bouquets. In addition to decorations, we arrange entertainment activities such as magic shows, game coordinators, tattoo artists, and photo booths to keep children entertained.
                </p>
                <p className="leading-relaxed">
                  Whether you are planning a 1st birthday, an anniversary, or a family get-together, Eventkro designs a customized package that suits your budget. We handle the entire venue setup and teardown, ensuring a hassle-free experience.
                </p>
              </div>

              {/* Corporate Events Section */}
              <div id="corporate" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Corporate Exhibitions & Business Meet Management
                </h2>
                <p className="leading-relaxed mb-4">
                  Firozabad’s industrial growth requires professional event managers to execute business conferences, dealer meets, store openings, and corporate celebrations. Eventkro provides reliable corporate event planning services that align with your branding guidelines and schedules. We handle the setup of stages, podiums, registration desks, and backdrop banners.
                </p>
                <p className="leading-relaxed mb-4">
                  We set up clear sound systems, microphones, projectors, and LED displays to support professional presentations. We also coordinate corporate catering, providing customized lunch packets, high-tea packages, and buffet spreads designed to suit professional standards.
                </p>
                <p className="leading-relaxed">
                  Our local network helps you select the best business hotels and convention spaces in Firozabad. Trust Eventkro to manage the scheduling, setup, and logistics of your business meet with absolute precision.
                </p>
              </div>

              {/* Catering Services Section */}
              <div id="catering" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Gourmet Catering Services: Multi-Cuisine Buffets
                </h2>
                <p className="leading-relaxed mb-4">
                  Food is a central part of any Indian celebration. Eventkro partners with the finest caterers in Firozabad to deliver delicious multi-cuisine menus prepared under high hygiene standards. We design custom menus featuring traditional North Indian, Awadhi, Mughlai, and Chinese buffets.
                </p>
                <p className="leading-relaxed mb-4">
                  Our catering service setup includes:
                </p>
                <ul className="space-y-2 mb-4">
                  <li><strong>Live Food Counters:</strong> Interactive stations serving fresh chat, golgappas, tandoori starters, and hot beverages.</li>
                  <li><strong>Mughlai & UP Specialties:</strong> Traditional gravies, paneer tikka, and regional sweets (like rabri and milk desserts).</li>
                  <li><strong>Custom Mocktails & Drinks:</strong> Refreshing welcome drinks, shakes, and mocktails.</li>
                  <li><strong>Hygienic Presentation:</strong> Uniformed waitstaff, clean tables, premium plates, and swift service.</li>
                </ul>
                <p className="leading-relaxed">
                  We work closely with you during menu design to accommodate dietary preferences (such as pure vegetarian or Jain food) and guest counts, ensuring an outstanding dining experience.
                </p>
              </div>

              {/* Decoration Services Section */}
              <div id="decor" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Decoration Services: Glass Art, Florals, & Lighting
                </h2>
                <p className="leading-relaxed mb-4">
                  The visual layout of your venue sets the tone for the entire event. Eventkro provides customized decoration services in Firozabad, designing visual layouts that transform banquet halls and gardens into beautiful settings. We blend fresh flowers, local glass crafts, and lighting grids to match your event theme.
                </p>
                <p className="leading-relaxed mb-4">
                  For weddings and religious events, we use fresh local flowers and crystal hangings to build beautiful entryways, mandap structures, and stage backdrops. For social parties and birthdays, we design custom balloon arches, backdrop walls, and welcome boards.
                </p>
                <p className="leading-relaxed">
                  Our decorators handle the entire installation and teardown, ensuring that the venue is returned in perfect condition. We ensure that our decorations are secure, clean, and photo-ready.
                </p>
              </div>

              {/* Why Choose Eventkro Section */}
              <div id="why-choose" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Why Choose Eventkro as Your Event Planner in Firozabad
                </h2>
                <p className="leading-relaxed mb-4">
                  Choosing Eventkro ensures that your celebration is managed by professionals:
                </p>
                <ul className="space-y-3 mb-6">
                  <li><strong>Creative Glass Decor Integration:</strong> We incorporate local glass crafts to create unique glowing stage designs.</li>
                  <li><strong>Comprehensive Staging Capabilities:</strong> We set up large exhibition pavilions, stages, and registration desks.</li>
                  <li><strong>Customizable Packages:</strong> We offer flexible options (Basic, Premium, Elite) to suit different budgets and layouts.</li>
                  <li><strong>On-Site Coordination:</strong> Our coordinator stays on-site during the entire event, managing timelines and vendors.</li>
                  <li><strong>Reliability & Transparency:</strong> We offer transparent billing and ensure on-time setup and teardown.</li>
                </ul>
              </div>

              {/* Local Venues Section */}
              <div id="venues" className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 pb-2 border-b-2 border-gray-100">
                  Top Event Venues in Firozabad
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We coordinate with top-rated hotels, lawns, and banquet halls in Firozabad to secure the ideal venue for your celebration:
                </p>
                <div className="space-y-6">
                  {venues.map((venue, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 p-6 flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3 h-48 relative rounded-lg overflow-hidden bg-gray-100">
                        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${venue.image})` }}></div>
                      </div>
                      <div className="md:w-2/3 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-2xl font-bold text-gray-900">{venue.name}</h3>
                            <div className="flex items-center bg-[#ff5722]/10 px-3 py-1 rounded-full text-sm font-semibold text-[#ff5722]">
                              <FaStar className="mr-1 text-xs" /> {venue.rating}
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm mb-4 leading-relaxed">{venue.description}</p>
                          <div className="flex items-center text-gray-700 text-sm mb-4">
                            <FaCalendarAlt className="mr-2 text-[#ff5722]" /> Capacity: {venue.capacity}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {venue.features.map((f, idx) => (
                            <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-medium">{f}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ Section */}
              <div id="faq" className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 pb-2 border-b-2 border-gray-100">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {faqItems.map((item, index) => {
                    const isOpen = openFaqIndex === index;
                    return (
                      <div key={index} className="border border-gray-200 rounded-lg overflow-hidden transition-all duration-300">
                        <button
                          type="button"
                          className="w-full flex justify-between items-center px-6 py-4 bg-gray-50 text-left font-bold text-gray-900 hover:text-[#ff5722] transition-colors"
                          onClick={() => toggleFaq(index)}
                        >
                          <span>{item.question}</span>
                          <FaChevronDown className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#ff5722]' : 'text-gray-400'}`} />
                        </button>
                        <div className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100 border-t border-gray-200 p-6' : 'max-h-0 opacity-0'}`}>
                          <p className="text-gray-600 leading-relaxed text-sm">{item.answer}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right/Sidebar Sticky Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Request a Free Quote</h3>
                  <p className="text-gray-600 text-sm mb-6">Fill out our form or call us directly. We respond within 24 hours with a customized estimate.</p>
                  <Link href="/contact" className="btn-primary w-full text-center block py-3 rounded-lg shadow-lg font-semibold mb-4">
                    Book Event Planner
                  </Link>
                  <div className="text-center text-gray-500 text-xs">
                    Or call us: <br/>
                    <strong className="text-gray-800 text-sm font-semibold">+91 7017520811</strong>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Explore Other Cities</h3>
                  <div className="flex flex-col gap-2">
                    <Link href="/event-planner-in-agra" className="text-gray-600 hover:text-[#ff5722] text-sm py-2 border-b border-gray-200 transition-colors">
                      Event Planner in Agra →
                    </Link>
                    <Link href="/event-planner-in-mathura" className="text-gray-600 hover:text-[#ff5722] text-sm py-2 border-b border-gray-200 transition-colors">
                      Event Planner in Mathura →
                    </Link>
                    <Link href="/event-planner-in-shikohabad" className="text-gray-600 hover:text-[#ff5722] text-sm py-2 transition-colors">
                      Event Planner in Shikohabad →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Direct Contact CTA Section */}
      <section className="py-16 bg-[#ff5722] text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Plan Your Perfect Event in Firozabad?</h2>
          <p className="text-lg mb-8 text-white/95 leading-relaxed">
            From glass-themed weddings to grand corporate exhibitions, Eventkro handles everything with absolute care and professionalism. Contact us now for a custom quote.
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
