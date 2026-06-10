'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaStar, FaChevronDown } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const faqItems = [
  {
    question: 'Why is Eventkro the best event planner in Shikohabad?',
    answer: 'Eventkro has established itself as the leading event planner in Shikohabad due to our end-to-end management, innovative theme designs, localized vendor coordination, and premium catering. We serve local families and corporate clients, delivering premium styling (including organic balloon decor and fresh flowers) at highly competitive package pricing. Our coordinators stay on-site during the entire event, ensuring a stress-free experience.'
  },
  {
    question: 'What event planning services do you offer in Shikohabad?',
    answer: 'We provide full wedding planning (stage decor, mandap styling), pre-wedding ceremonies (Roka, Sagai, Haldi, Mehendi), themed birthday party decorations (balloon arches, backdrop walls, table styling), corporate events (dealer meets, business seminars), pure vegetarian and multi-cuisine catering, and professional audio-visual setups.'
  },
  {
    question: 'Do you offer catering services in Shikohabad?',
    answer: 'Yes! Catering is a key part of our service. We design customizable multi-cuisine menus (North Indian, traditional UP recipes, Mughlai, Chinese, and desserts). We operate under high safety and hygiene conditions, providing uniformed waitstaff, clean tables, and premium crockery.'
  },
  {
    question: 'How far in advance should I book my event in Shikohabad?',
    answer: 'For grand weddings, ring ceremonies, or corporate meets, we suggest booking at least 3 to 6 months in advance. This allows us to secure preferred local venues (such as Shikohabad Palace Garden) and schedule the decorators and caterers. For smaller birthday balloon decorations or baby showers, 1 to 2 weeks notice is generally sufficient.'
  },
  {
    question: 'Which nearby locations in the region do you serve?',
    answer: 'Along with Shikohabad, we serve the wider Agra Mandal region. We routinely manage events in Firozabad, Agra, Mathura, Mainpuri, Tundla, and adjacent towns. Explore our adjacent city landing pages: Event Planner in Agra, Event Planner in Mathura, and Event Planner in Firozabad.'
  }
];

const venues = [
  {
    name: 'Shikohabad Palace & Banquet Garden',
    description: 'A massive open lawn combined with a modern indoor banquet hall, ideal for grand weddings, receptions, and community events.',
    capacity: '200-1000 guests',
    features: ['Spacious green lawn', 'In-house catering', 'Bridal suites', 'Valet parking'],
    rating: 4.8,
    image: '/images/venue-heritage.jpeg'
  },
  {
    name: 'Balaji Marriage Home & Party Lawn',
    description: 'A traditional event lawn located near the main temples, perfect for spiritual family rituals, Tilak ceremonies, and weddings.',
    capacity: '100-500 guests',
    features: ['Spacious party lawn', 'Near Balaji temple', 'Spiritual ambiance', 'Custom decorations'],
    rating: 4.7,
    image: '/images/venue-krishna-hall.jpeg'
  },
  {
    name: 'Royal Glass & Event Hall',
    description: 'A modern, air-conditioned event hall designed for premium corporate meets, product launches, and luxury indoor weddings.',
    capacity: '150-700 guests',
    features: ['AC banquet hall', 'Audiovisual systems', 'Corporate meeting layouts', 'Elite dining area'],
    rating: 4.6,
    image: '/images/venue-convention.jpg'
  }
];

export default function ShikohabadEventPlannerPage() {
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
          style={{ backgroundImage: "url('/images/hero-1.jpeg')" }}
        ></div>
        <div className="container mx-auto px-4 relative z-20 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">
            Best Event Planner in Shikohabad
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200">
            Professional wedding planning, customized balloon decoration, business meets, and delicious catering across Shikohabad and surrounding towns.
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
                  About Eventkro: Shikohabad’s Dedicated Event Management Team
                </h2>
                <p className="leading-relaxed mb-4">
                  Welcome to Eventkro, your premier choice for planning and executing high-impact celebrations in Shikohabad. Known as the leading <strong>event planner in shikohabad</strong>, we bring a professional approach, local vendor networks, and creative designs to every occasion. Situated in the Firozabad district, Shikohabad is a rapidly growing city with a strong cultural identity and commercial spirit. We believe that hosting a celebration here should combine Brijwasi warmth with professional event standards. Our coordinators design custom visual themes that transform open lawns and banquet halls into beautiful settings.
                </p>
                <p className="leading-relaxed mb-4">
                  Our team manages the entire event lifecycle, from initial consultation to budget drafting, theme selection, vendor coordination, catering, and on-site setup. We cooperate with the best local properties, decorators, sound technicians, and catering services in Shikohabad. By handling all logistics, scheduling, and on-site coordination, we remove the operational challenges commonly faced during planning. Families and business houses trust Eventkro because we deliver visual excellence, budget control, and reliability.
                </p>
                <p className="leading-relaxed">
                  Whether you are planning a grand wedding at Station Road, a corporate meeting, a colorful birthday party with premium balloon arches, or a private family ceremony, Eventkro guarantees an exceptional experience. Experience the difference of a professional approach with Eventkro.
                </p>
              </div>

              {/* Event Planning Services Section */}
              <div id="services" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Event Planning Services Customized for Shikohabad
                </h2>
                <p className="leading-relaxed mb-6">
                  At Eventkro, we offer a comprehensive range of planning services designed to handle all aspects of your celebration. We design customized mood boards, secure the best local lawns and banquet halls, coordinate multi-cuisine menus, and provide on-site event coordination to ensure that everything runs smoothly.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Bespoke Staging & Decor</h3>
                    <p className="text-gray-600 text-sm">Theme-based decorations combining local glass accents, crystal lighting, fresh flowers, and LED displays for a glowing stage setup.</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Business Meet Staging</h3>
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
                  Elegant Wedding Planning & Stage Design
                </h2>
                <p className="leading-relaxed mb-4">
                  A wedding is a holy milestone, and celebrating it with beauty, elegance, and traditional honors is our mission. Planning a wedding in Shikohabad requires coordinating multiple pre-wedding functions, guest hospitality, decorative setups, and catering menus. As Shikohabad’s leading wedding planner, Eventkro designs weddings that blend rich cultural traditions with luxurious designs. We coordinate with the top wedding lawns and banquet halls, creating a beautiful environment for your guests.
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
                  Corporate Meets & Business Seminar Management
                </h2>
                <p className="leading-relaxed mb-4">
                  Shikohabad’s commercial growth requires professional event managers to execute business conferences, dealer meets, store openings, and corporate celebrations. Eventkro provides reliable corporate event planning services that align with your branding guidelines and schedules. We handle the setup of stages, podiums, registration desks, and backdrop banners.
                </p>
                <p className="leading-relaxed mb-4">
                  We set up clear sound systems, microphones, projectors, and LED displays to support professional presentations. We also coordinate corporate catering, providing customized lunch packets, high-tea packages, and buffet spreads designed to suit professional standards.
                </p>
                <p className="leading-relaxed">
                  Our local network helps you select the best business hotels and convention spaces in Shikohabad. Trust Eventkro to manage the scheduling, setup, and logistics of your business meet with absolute precision.
                </p>
              </div>

              {/* Catering Services Section */}
              <div id="catering" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Gourmet Catering Services: Multi-Cuisine Buffets
                </h2>
                <p className="leading-relaxed mb-4">
                  Food is a central part of any Indian celebration. Eventkro partners with the finest caterers in Shikohabad to deliver delicious multi-cuisine menus prepared under high hygiene standards. We design custom menus featuring traditional North Indian, Awadhi, Mughlai, and Chinese buffets.
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
                  Decoration Services: Balloon, Floral, & Lighting
                </h2>
                <p className="leading-relaxed mb-4">
                  The visual layout of your venue sets the tone for the entire event. Eventkro provides customized decoration services in Shikohabad, designing visual layouts that transform banquet halls and gardens into beautiful settings. We blend fresh flowers, local glass crafts, and lighting grids to match your event theme.
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
                  Why Choose Eventkro as Your Event Planner in Shikohabad
                </h2>
                <p className="leading-relaxed mb-4">
                  Choosing Eventkro ensures that your celebration is managed by professionals:
                </p>
                <ul className="space-y-3 mb-6">
                  <li><strong>Local Vendor Network:</strong> We coordinate with the best local suppliers to ensure timely delivery without extra costs.</li>
                  <li><strong>Flexible Packages:</strong> We offer flexible options (Basic, Premium, Elite) to suit different budgets and layouts.</li>
                  <li><strong>On-Site Coordination:</strong> Our coordinator stays on-site during the entire event, managing timelines and vendors.</li>
                  <li><strong>Reliability & Transparency:</strong> We offer transparent billing and ensure on-time setup and teardown.</li>
                  <li><strong>Customer-Centric Approach:</strong> We keep you updated at every step, offering visual mockups and consultations.</li>
                </ul>
              </div>

              {/* Local Venues Section */}
              <div id="venues" className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 pb-2 border-b-2 border-gray-100">
                  Top Event Venues in Shikohabad
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We coordinate with top-rated hotels, lawns, and banquet halls in Shikohabad to secure the ideal venue for your celebration:
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
                    <Link href="/event-planner-in-firozabad" className="text-gray-600 hover:text-[#ff5722] text-sm py-2 transition-colors">
                      Event Planner in Firozabad →
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Plan Your Perfect Event in Shikohabad?</h2>
          <p className="text-lg mb-8 text-white/95 leading-relaxed">
            From Station Road weddings to grand corporate conferences, Eventkro handles everything with absolute care and professionalism. Contact us now for a custom quote.
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
