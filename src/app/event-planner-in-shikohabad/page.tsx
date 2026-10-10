'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const faqItems = [
  {
    question: 'What event planning services does Eventkro provide in Shikohabad?',
    answer: 'Eventkro provides structured event management in Shikohabad through end-to-end planning, requirement-based theme designs, localized vendor coordination, and catering management. We assist local families and hosts, delivering custom styling (including balloon decor and fresh flowers) based on event requirements and budget preferences. Our coordinators stay on-site during the event to help ensure smooth execution.'
  },
  {
    question: 'What event planning services do you offer in Shikohabad?',
    answer: 'We provide full wedding planning (stage decor, mandap styling), pre-wedding ceremonies (Roka, Sagai, Haldi, Mehendi), themed birthday party decorations (balloon arches, backdrop walls, table styling), anniversary and family celebrations, pure vegetarian and multi-cuisine catering, and professional lighting and audio setups.'
  },
  {
    question: 'Do you offer catering services in Shikohabad?',
    answer: 'Yes! Catering coordination is a key part of our service. We design customizable multi-cuisine menus (North Indian, traditional UP recipes, Mughlai, Chinese, and desserts). We operate under high safety and hygiene conditions, providing uniformed waitstaff, clean tables, and quality tableware.'
  },
  {
    question: 'How far in advance should I book my event in Shikohabad?',
    answer: 'For grand weddings, ring ceremonies, or large family functions, we suggest booking at least 3 to 6 months in advance. This allows sufficient time to coordinate with chosen local venues and schedule decorators and caterers. For smaller birthday balloon decorations or baby showers, 1 to 2 weeks notice is generally sufficient.'
  },
  {
    question: 'Which nearby locations in the region do you serve?',
    answer: 'Along with Shikohabad, we serve the wider Agra Mandal region. We routinely manage events in Firozabad, Agra, Mathura, Mainpuri, Tundla, and adjacent towns. Explore our adjacent city landing pages: Event Planner in Agra, Event Planner in Mathura, and Event Planner in Firozabad.'
  }
];

const venueOptions = [
  {
    type: 'Banquet Halls',
    description: 'Indoor air-conditioned halls suitable for engagement ceremonies, receptions, and family celebrations, offering controlled lighting, stage setups, and dining areas depending on the customer\'s selected venue, event requirements, and availability.',
    features: ['Indoor staging', 'Climate control', 'Dining setups', 'Acoustic support']
  },
  {
    type: 'Marriage Lawns & Open Grounds',
    description: 'Spacious open-air grounds preferred for large wedding receptions, cultural gatherings, and evening events with custom mandap setups and catering layouts depending on the customer\'s selected venue, event requirements, and availability.',
    features: ['Open-air layouts', 'Large guest areas', 'Custom entryway arches', 'Lawn illumination']
  },
  {
    type: 'Community Venues',
    description: 'Local community halls and public venues suitable for traditional family rituals, community dinners, and budget-conscious functions depending on the customer\'s selected venue, event requirements, and availability.',
    features: ['Traditional floor seating', 'Basic staging', 'Dining spaces', 'Local accessibility']
  },
  {
    type: 'Hotels & Event Spaces',
    description: 'Hotel event spaces and private banquet rooms suitable for intimate gatherings, ring ceremonies, or out-of-town guest functions with lodging support depending on the customer\'s selected venue, event requirements, and availability.',
    features: ['Audio-visual support', 'Comfortable seating', 'In-house coordination', 'Guest rooms']
  },
  {
    type: 'Private Homes & Family Properties',
    description: 'Doorstep decor and backyard or rooftop setups for intimate birthday celebrations, haldi ceremonies, or small family gatherings customized to the home layout depending on the customer\'s selected venue, event requirements, and availability.',
    features: ['Compact backdrops', 'Living room styling', 'Doorstep coordination', 'Flexible layouts']
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
      <section className="relative min-h-[60vh] sm:min-h-[65vh] pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 flex items-center justify-center text-center text-white overflow-hidden">
        <Image
          src="/images/shikohabad/event-planner-in-shikohabad-hero.webp"
          alt="Event planning and celebration stage decoration in Shikohabad"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="container mx-auto px-4 relative z-20 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">
            Event Planner in Shikohabad for Family Celebrations &amp; Pre-Wedding Functions
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200">
            Professional wedding planning, pre-wedding ceremonies, customized balloon decoration, and delicious catering across Shikohabad and surrounding towns.
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
            
            {/* Left/Main Content Column */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* About Section */}
              <div id="about" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  About Eventkro: Event Management in Shikohabad
                </h2>
                <p className="leading-relaxed mb-4">
                  Welcome to Eventkro, providing structured planning and execution support for celebrations in Shikohabad. As an <strong>event planner in shikohabad</strong>, we bring an organized approach, local vendor coordination, and creative designs to every occasion. Situated in the Firozabad district, Shikohabad is a growing city with a strong cultural identity and commercial spirit. We work to combine regional traditions with structured event standards. Our coordinators help plan visual themes suited for open lawns, banquet halls, and private venues based on event requirements.
                </p>
                <p className="leading-relaxed mb-4">
                  Our team assists with the event planning process, from initial consultation and budget outlining to theme selection, vendor coordination, catering management, and on-site setup. We coordinate with local decorators, sound technicians, and catering services across Shikohabad. By assisting with logistics, scheduling, and on-site coordination, we help manage the operational steps of event hosting so families and organizers can focus on their guests.
                </p>
                <p className="leading-relaxed">
                  Whether you are planning a wedding near Station Road, a ring ceremony, a birthday party with balloon arches, or a private family gathering, Eventkro works to deliver an organized and memorable celebration.
                </p>
              </div>

              {/* Event Planning Services Section */}
              <div id="services" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Event Planning Services Customized for Shikohabad
                </h2>
                <p className="leading-relaxed mb-6">
                  At Eventkro, we offer a broad range of planning services designed to support different aspects of your celebration. We prepare customized mood boards, assist with vendor coordination for local lawns and banquet halls, coordinate multi-cuisine menus, and provide on-site coordination based on event requirements and venue availability.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Bespoke Staging & Decor</h3>
                    <p className="text-gray-600 text-sm">Theme-based decorations combining local glass accents, crystal lighting, fresh flowers, and LED displays for a glowing stage setup.</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Pre-Wedding & Ceremony Styling</h3>
                    <p className="text-gray-600 text-sm">Designing dedicated setups for Roka, ring ceremonies, Haldi backdrops, and Mehndi seating arrangements.</p>
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
                  Elegant Wedding Planning & Stage Design
                </h2>
                <p className="leading-relaxed mb-4">
                  A wedding is an important family milestone, and celebrating it with elegance and traditional customs requires careful coordination. Planning a wedding in Shikohabad involves managing pre-wedding functions, guest hospitality, decorative setups, and catering menus. Through our dedicated <Link href="/wedding-planner-in-shikohabad" className="text-[#ff5722] hover:underline font-semibold">Wedding Planner in Shikohabad</Link> services, Eventkro assists families with wedding coordination that blends cultural traditions with contemporary designs. We coordinate with chosen wedding lawns and banquet halls to prepare a welcoming setting for your guests.
                </p>
                <p className="leading-relaxed mb-4">
                  We handle the planning for all wedding rituals:
                </p>
                <ul className="space-y-2 mb-4">
                  <li><strong>Roka & Sagai:</strong> Traditional ring exchange functions featuring elegant drapes, welcome signages, and guest seating layouts.</li>
                  <li><strong>Vibrant Haldi:</strong> Yellow-themed setups decorated with fresh marigolds, traditional swings, and folk music.</li>
                  <li><strong>Mehendi & Sangeet:</strong> Multi-colored canopy decor, stage and sound setups for dance performances, and seating for mehndi artists.</li>
                  <li><strong>Main Wedding Day:</strong> Stage and mandap setups (domes styled with fresh flowers, lighting pillars, crystal hangings), welcome gates, and entryway structures.</li>
                </ul>
                <p className="leading-relaxed">
                  Our coordinators stay on-site during the wedding day, managing the timeline from the welcome ceremony to the Var Mala, dinner service, and final phere. We also coordinate with photographers and videographers to capture every detail.
                </p>
              </div>

              {/* Roka, Engagement, Mehndi & Haldi Celebrations Section */}
              <div id="pre-wedding" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Roka, Engagement, Mehndi & Haldi Celebrations
                </h2>
                <p className="leading-relaxed mb-4">
                  Pre-wedding ceremonies are intimate milestones that bring family and close friends together. In Shikohabad, Eventkro provides requirement-based coordination for Roka ceremonies, ring exchange functions, Haldi celebrations, and Mehndi evenings. Whether hosted at home, a private lawn, or a banquet hall, we help design stage setups, backdrops, and guest seating that match your preferred color palette and family customs.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 not-prose">
                  <div className="rounded-xl overflow-hidden shadow-md border border-gray-100 bg-gray-50 flex flex-col">
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                      <Image
                        src="/images/shikohabad/roka-engagement-decoration-shikohabad.webp"
                        alt="Roka and engagement decoration setup for family celebrations in Shikohabad"
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 text-lg mb-1">Roka & Engagement Setups</h3>
                      <p className="text-gray-600 text-sm">Custom backdrops, floral frames, ring ceremony stages, and comfortable seating layouts tailored to the venue space.</p>
                    </div>
                  </div>
                  <div className="rounded-xl overflow-hidden shadow-md border border-gray-100 bg-gray-50 flex flex-col">
                    <div className="relative aspect-[16/9] w-full overflow-hidden">
                      <Image
                        src="/images/shikohabad/mehndi-haldi-decoration-shikohabad.webp"
                        alt="Mehndi and Haldi decoration setup for family celebrations in Shikohabad"
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 text-lg mb-1">Mehndi & Haldi Decor</h3>
                      <p className="text-gray-600 text-sm">Vibrant marigold themes, low seating with floor cushions, decorative swings, and canopy styling for daytime rituals.</p>
                    </div>
                  </div>
                </div>
                <p className="leading-relaxed mb-4">
                  Our team assists with lighting arrangements, floral backdrops, and functional seating setups so that rituals can proceed smoothly. We coordinate with local decorators, sound providers, and catering teams where needed, ensuring all elements are prepared according to your event schedule.
                </p>
                <p className="leading-relaxed">
                  Because every family function has unique space and budget considerations, setups are planned based on your chosen venue layout, guest count, and specific decor preferences.
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
                <div className="my-6 not-prose rounded-xl overflow-hidden shadow-md border border-gray-100">
                  <div className="relative aspect-[16/9] w-full overflow-hidden">
                    <Image
                      src="/images/shikohabad/birthday-decoration-shikohabad.webp"
                      alt="Birthday balloon decoration and cake backdrop setup in Shikohabad"
                      fill
                      sizes="(max-width: 1024px) 100vw, 750px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <p className="leading-relaxed mb-4">
                  Our decorators use quality latex and foil balloons to build organic balloon arches, photo backdrop walls, and customized balloon bouquets. In addition to decorations, we arrange entertainment activities such as magic shows, game coordinators, tattoo artists, and photo booths to keep children entertained.
                </p>
                <p className="leading-relaxed">
                  Whether you are planning a 1st birthday, an anniversary, or a family get-together, Eventkro tailors decor setups to your preferences and budget. We handle the venue setup and teardown, helping ensure a smooth experience.
                </p>
              </div>

              {/* Catering Services Section */}
              <div id="catering" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Gourmet Catering Services: Multi-Cuisine Buffets
                </h2>
                <p className="leading-relaxed mb-4">
                  Food is an essential part of any Indian celebration. Eventkro coordinates with experienced local caterers in Shikohabad to provide multi-cuisine menus prepared under high hygiene standards. We help plan customized menus featuring traditional North Indian, Awadhi, Mughlai, and popular regional dishes.
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
                  We work closely with you during menu design to accommodate dietary preferences (such as pure vegetarian or Jain food) and guest counts, ensuring an enjoyable dining experience.
                </p>
              </div>

              {/* Decoration Services Section */}
              <div id="decor" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Decoration Services: Balloon, Floral, & Lighting
                </h2>
                <p className="leading-relaxed mb-4">
                  The visual layout of your venue sets the tone for the entire event. Eventkro provides customized decoration services in Shikohabad, designing visual layouts that transform banquet halls and gardens into welcoming settings. We blend fresh flowers, local glass crafts, and lighting grids to match your event theme.
                </p>
                <p className="leading-relaxed mb-4">
                  For weddings and religious events, we use fresh local flowers and crystal hangings to build attractive entryways, mandap structures, and stage backdrops. For social parties and birthdays, we design custom balloon arches, backdrop walls, and welcome boards.
                </p>
                <p className="leading-relaxed">
                  Our decorators handle installation and teardown, ensuring that the venue is returned in good order. We ensure that our decorations are secure, clean, and photo-ready.
                </p>
              </div>

              {/* Why Choose Eventkro Section */}
              <div id="why-choose" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Why Choose Eventkro as Your Event Planner in Shikohabad
                </h2>
                <p className="leading-relaxed mb-4">
                  Choosing Eventkro helps ensure that your celebration is managed with structured coordination:
                </p>
                <ul className="space-y-3 mb-6">
                  <li><strong>Local Vendor Coordination:</strong> We coordinate with established local suppliers to support timely delivery and setup.</li>
                  <li><strong>Requirement-Based Quotations:</strong> Service scope and quotations depend on selected services, venue and setup requirements, and specific event needs.</li>
                  <li><strong>On-Site Coordination:</strong> Our coordinator stays on-site during the event, managing timelines and vendors.</li>
                  <li><strong>Clear Planning & Estimates:</strong> We provide clear cost estimates and work toward on-time setup and teardown.</li>
                  <li><strong>Customer-Centric Approach:</strong> We keep you updated at every step, offering visual mockups and consultations.</li>
                </ul>
              </div>

              {/* Event Venue Options Section */}
              <div id="venues" className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 pb-2 border-b-2 border-gray-100">
                  Event Venue Options in Shikohabad
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Eventkro coordinates decoration, staging, audio-visual support, and catering services across diverse event spaces in Shikohabad. Service setups are planned and executed depending on the customer&apos;s selected venue, event requirements, and availability:
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
                    <Link href="/event-planner-in-firozabad" className="text-gray-600 hover:text-[#ff5722] text-sm py-2 border-b border-gray-200 transition-colors">
                      Event Planner in Firozabad →
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Plan Your Event in Shikohabad?</h2>
          <p className="text-lg mb-8 text-white/95 leading-relaxed">
            From Station Road celebrations to family birthday gatherings, Eventkro assists with planning and coordination. Contact us for a requirement-based quotation.
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
