'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';

const faqItems = [
  {
    question: 'Why is Eventkro considered the best event planner in Firozabad?',
    answer: 'Eventkro stands out in Firozabad by offering high-quality design integration (featuring custom local glass art decoration), professional catering, and dynamic timeline management. We deliver organized events at competitive rates. Our local knowledge of halls and lawns in Firozabad allows us to coordinate logistics, guest services, and cleanups without delays.'
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
    answer: 'Yes, we provide catering coordination in Firozabad. We design customizable vegetarian and non-vegetarian menus (North Indian, traditional Mughlai, South Indian, street food snacks, and desserts). We ensure high food safety, fresh ingredients, clean setups, and professional servers.'
  },
  {
    question: 'What nearby cities do you serve in the region?',
    answer: 'Along with serving all areas in Firozabad (such as Suhag Nagar, Kotla Road, Shikohabad Road), we serve neighboring cities in the Agra Mandal including Agra, Mathura, Shikohabad, Mainpuri, Tundla, and surrounding towns. Explore our adjacent city landing pages: Event Planner in Agra, Event Planner in Mathura, and Event Planner in Shikohabad.'
  }
];

const venueOptions = [
  {
    type: 'Banquet Halls',
    description: 'Indoor air-conditioned halls suitable for engagement ceremonies, corporate meetings, and family celebrations, offering controlled lighting, stage setups, and dining areas depending on the customer\'s chosen venue, event requirements, and availability.',
    features: ['Indoor staging', 'Climate control', 'Dining setups', 'Acoustic support']
  },
  {
    type: 'Marriage Lawns & Open Grounds',
    description: 'Spacious open-air grounds preferred for large wedding receptions, cultural gatherings, and evening events with custom mandap setups and catering layouts depending on the customer\'s chosen venue, event requirements, and availability.',
    features: ['Open-air layouts', 'Large guest areas', 'Custom entryway arches', 'Lawn illumination']
  },
  {
    type: 'Community Venues & Kalyan Mandaps',
    description: 'Local community halls and mandaps suitable for traditional family rituals, community dinners, and budget-conscious functions depending on the customer\'s chosen venue, event requirements, and availability.',
    features: ['Traditional floor seating', 'Basic staging', 'Dining spaces', 'Local accessibility']
  },
  {
    type: 'Hotels & Event Spaces',
    description: 'Hotel event spaces and conference rooms suitable for business meets, dealer conferences, or out-of-town guest functions with lodging support depending on the customer\'s chosen venue, event requirements, and availability.',
    features: ['Audio-visual support', 'Executive seating', 'In-house coordination', 'Guest rooms']
  },
  {
    type: 'Private Homes & Family Properties',
    description: 'Doorstep decor and backyard or rooftop setups for intimate birthday celebrations, haldi ceremonies, or small family gatherings customized to the home layout depending on the customer\'s chosen venue, event requirements, and availability.',
    features: ['Compact backdrops', 'Living room styling', 'Doorstep coordination', 'Flexible layouts']
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
        <Image
          src="/images/firozabad/event-planner-in-firozabad-hero.webp"
          alt="Event planning and celebration stage decoration in Firozabad"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="container mx-auto px-4 relative z-20 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">
            Best Event Planner in Firozabad
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200">
            Wedding planning, creative glass-themed decorations, corporate exhibition management, and catering coordination across the Glass City.
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
                  Welcome to Eventkro, your reliable service for planning and executing celebrations in Firozabad. As an <strong>event planner in firozabad</strong>, we bring an artistic approach, operational rigor, and local vendor connections to every occasion. Firozabad is celebrated globally as the Glass City, producing exquisite glass ornaments, chandeliers, and bangles. We believe that this rich artistic legacy should be reflected in the aesthetics of your events. Our designers specialize in creating custom decorations that merge local glass craft with modern floral styling, creating glowing and elegant environments.
                </p>
                <p className="leading-relaxed mb-4">
                  Our team manages the entire event workflow, from layout conceptualization to vendor coordination, logistics, catering, and on-site cleanup. We coordinate with local catering services, photographers, AV technicians, and decorators in Firozabad. By keeping our processes structured and clear, we help manage the operational steps during planning. Families, business houses, and community organizers work with Eventkro for organized planning, coordination, and reliability.
                </p>
                <p className="leading-relaxed">
                  Whether you are planning a traditional wedding reception in Suhag Nagar, a corporate exhibition at Kotla Road, a colorful birthday party with custom balloon arches, or a private family ceremony, Eventkro works to deliver an organized and memorable celebration. Experience the difference of a professional approach with Eventkro.
                </p>
              </div>

              {/* Event Planning Services Section */}
              <div id="services" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Event Planning Services Customized for Firozabad
                </h2>
                <p className="leading-relaxed mb-6">
                  At Eventkro, we offer a comprehensive range of planning services designed to handle all aspects of your celebration. We design customized mood boards, assist with local lawn and banquet hall options, coordinate multi-cuisine menus, and provide on-site event coordination to ensure that everything runs smoothly.
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
                    <p className="text-gray-600 text-sm">Creating custom balloon arches, backdrop walls, and welcome panels for birthdays and baby showers.</p>
                  </div>
                </div>
              </div>

              {/* Wedding Planning Section */}
              <div id="wedding" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Elegant Wedding Planning & Glass Art Stage Design
                </h2>
                <p className="leading-relaxed mb-4">
                  A wedding is a holy milestone, and celebrating it with beauty, elegance, and traditional honors is our mission. Planning a wedding in Firozabad requires coordinating multiple pre-wedding functions, guest hospitality, decorative setups, and catering menus. As a <Link href="/wedding-planner-in-firozabad" className="text-[#ff5722] hover:underline font-semibold">wedding planner in Firozabad</Link>, Eventkro designs weddings that blend rich cultural traditions with thoughtful designs. We coordinate across available wedding lawns and banquet halls in the area, creating a beautiful environment for your guests.
                </p>
                <p className="leading-relaxed mb-4">
                  From romantic pre-wedding surprises and <Link href="/proposal-decoration-in-firozabad" className="text-[#ff5722] hover:underline font-semibold">Proposal Decoration in Firozabad</Link> to multi-day wedding celebrations, we handle the planning for every milestone:
                </p>
                <ul className="space-y-2 mb-4">
                  <li><strong>Roka & Sagai:</strong> Traditional ring exchange functions featuring elegant drapes, welcome signages, and guest seating layouts.</li>
                  <li><strong>Vibrant Haldi:</strong> Yellow-themed setups decorated with fresh marigolds, traditional swings, and folk music.</li>
                  <li><strong>Mehendi & Sangeet:</strong> Multi-colored canopy decor, stage and sound setups for dance performances, and seating for mehndi artists.</li>
                  <li><strong>Main Wedding Day:</strong> Traditional mandap setups (domes styled with fresh flowers, lighting pillars, crystal hangings), welcome gates, and entry structures.</li>
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
                <div className="relative h-64 sm:h-72 md:h-80 w-full rounded-xl overflow-hidden my-6 not-prose">
                  <Image
                    src="/images/firozabad/birthday-balloon-decoration.webp"
                    alt="Birthday balloon decoration and cake backdrop setup in Firozabad"
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover"
                  />
                </div>
                <p className="leading-relaxed mb-4">
                  Celebrating a milestone birthday or family anniversary calls for customized styling that fits your venue. Eventkro delivers professional birthday party planning and balloon decoration services across Firozabad, tailoring our setups whether you are hosting an intimate home gathering or a large party in a local banquet hall.
                </p>
                <p className="leading-relaxed mb-4">
                  For home celebrations in residential areas such as Suhag Nagar and Kotla Road, we specialize in neat, compact living-room setups: themed cake-cutting backdrops, organic balloon garlands, number foil displays, and customized welcome boards that maximize smaller spaces without clutter. For larger celebrations in party lawns or banquet venues, we construct full-scale balloon arches, photo booth backdrops, LED marquee numbers, and stage styling, coordinating with sound systems and entertainers to keep young guests engaged.
                </p>
                <p className="leading-relaxed">
                  Our balloon decorators use high-grade latex and foil materials to ensure long-lasting inflations that look vibrant throughout the party. From initial concept selection to prompt on-site setup and post-party removal, Eventkro handles every detail so families can focus entirely on celebrating.
                </p>
              </div>

              {/* Corporate Events Section */}
              <div id="corporate" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Corporate Exhibitions & Business Meet Management
                </h2>
                <div className="relative h-64 sm:h-72 md:h-80 w-full rounded-xl overflow-hidden my-6 not-prose">
                  <Image
                    src="/images/firozabad/corporate-event-management.webp"
                    alt="Corporate event stage and conference setup in Firozabad"
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover"
                  />
                </div>
                <p className="leading-relaxed mb-4">
                  Firozabad’s industrial growth requires professional event managers to execute business conferences, dealer meets, store openings, and corporate celebrations. Eventkro provides reliable corporate event planning services that align with your branding guidelines and schedules. We handle the setup of stages, podiums, registration desks, and backdrop banners.
                </p>
                <p className="leading-relaxed mb-4">
                  We set up clear sound systems, microphones, projectors, and LED displays to support professional presentations. We also coordinate corporate catering, providing customized lunch packets, high-tea packages, and buffet spreads designed to suit professional standards.
                </p>
                <p className="leading-relaxed">
                  Our local network helps you select suitable business hotels and meeting spaces in Firozabad. Trust Eventkro to manage the scheduling, setup, and logistics of your business meet with structured coordination.
                </p>
              </div>

              {/* Catering Services Section */}
              <div id="catering" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Gourmet Catering Services: Multi-Cuisine Buffets
                </h2>
                <p className="leading-relaxed mb-4">
                  Food is a central part of any Indian celebration. Eventkro coordinates with local catering teams in Firozabad to deliver multi-cuisine menus prepared under high hygiene standards. We design custom menus featuring traditional North Indian, Awadhi, Mughlai, and Chinese buffets.
                </p>
                <p className="leading-relaxed mb-4">
                  Our catering service setup includes:
                </p>
                <ul className="space-y-2 mb-4">
                  <li><strong>Live Food Counters:</strong> Interactive stations serving fresh chat, golgappas, tandoori starters, and hot beverages.</li>
                  <li><strong>Mughlai & UP Specialties:</strong> Traditional gravies, paneer tikka, and regional sweets (like rabri and milk desserts).</li>
                  <li><strong>Custom Mocktails & Drinks:</strong> Refreshing welcome drinks, shakes, and mocktails.</li>
                  <li><strong>Hygienic Presentation:</strong> Uniformed waitstaff, clean tables, quality tableware, and swift service.</li>
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
                  The visual styling of your venue defines the mood of your celebration. In Firozabad, Eventkro takes direct inspiration from the city’s renowned glass-making legacy, integrating artisanal glass craftsmanship into modern event styling. We craft luminous environments where bespoke glass centerpieces, crystal hangings, and structural lighting grids interact to illuminate banquet halls and open celebration lawns.
                </p>
                <p className="leading-relaxed mb-4">
                  For wedding and reception stages, our decorators blend fresh seasonal florals with suspended glass elements, chandelier accents, and reflective backdrop panels. From grand entryway tunnels with ambient fairy lights to glowing mandap pillars and illuminated table arrangements, every decorative element is positioned to create depth, elegance, and stunning evening photography.
                </p>
                <p className="leading-relaxed">
                  Our on-site decor team manages complete logistics, careful handling of delicate glass fixtures, structural safety rigging, and timely teardown after the event. Whether styling an indoor banquet or a spacious outdoor garden, Eventkro ensures that your celebration stage is secure, polished, and ready before the first guest arrives.
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
                  <li><strong>Clear Planning & Estimates:</strong> We offer clear cost outlines and work toward on-time setup and teardown.</li>
                </ul>
              </div>

              {/* Event Venue Options Section */}
              <div id="venues" className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 pb-2 border-b-2 border-gray-100">
                  Event Venue Options in Firozabad
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Eventkro coordinates decoration, staging, audio-visual support, and catering services across diverse event spaces in Firozabad. Service setups are planned and executed depending on the customer&apos;s chosen venue, event requirements, and availability:
                </p>
                <div className="space-y-6">
                  {venueOptions.map((venue, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{venue.type}</h3>
                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{venue.description}</p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {venue.features.map((f, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-medium">{f}</span>
                        ))}
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
                    <Link href="/event-planner-in-shikohabad" className="text-gray-600 hover:text-[#ff5722] text-sm py-2 border-b border-gray-200 transition-colors">
                      Event Planner in Shikohabad →
                    </Link>
                    <Link href="/event-planner-in-aligarh" className="text-gray-600 hover:text-[#ff5722] text-sm py-2 transition-colors">
                      Event Planner in Aligarh →
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
