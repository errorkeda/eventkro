'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaStar, FaChevronDown } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const faqItems = [
  {
    question: 'Why is Eventkro considered the best event planner in Agra?',
    answer: 'Eventkro stands out as the premier event planner in Agra due to our commitment to quality, attention to detail, and comprehensive service offering. We manage everything from venue selection to theme decoration, gourmet catering, professional photography, and on-site coordination. Our strong local vendor relationships allow us to deliver world-class events near the iconic Taj Mahal without exceeding your budget. Whether you need an elite wedding design, a corporate seminar setup, or a creative birthday decoration, our experienced coordinators ensure a smooth and memorable experience.'
  },
  {
    question: 'What event planning services do you offer in Agra?',
    answer: 'Our range of services in Agra includes full-service wedding planning (from mandap design to floral arrangements), pre-wedding ceremonies (Roka, Sagai, Haldi, Mehendi), themed birthday party planning (balloon arches, backdrop walls, customized props), corporate events (conferences, dealer meets, product launches), high-quality catering (multi-cuisine menus with regional specialties), and expert decoration services (LED lighting, floral setups, structures).'
  },
  {
    question: 'Do you offer customized catering packages in Agra?',
    answer: 'Yes, catering is a major element of our service. We coordinate with the finest caterers in Agra to provide bespoke menus customized to your preferences. From traditional Mughlai and North Indian dishes to modern live counters, street food stalls, and continental desserts, we manage the entire food and beverage setup under strict hygiene and professional service standards.'
  },
  {
    question: 'How far in advance should I book my event in Agra?',
    answer: 'For major events such as grand weddings, engagement ceremonies, and corporate meets, we advise booking at least 3 to 6 months in advance. This ensures we can secure the best venues (like Taj View Gardens or Heritage Palace) and coordinate with preferred decorators and photographers. For smaller events like birthday balloon decorations, baby showers, or intimate gatherings, a notice of 1 to 2 weeks is generally sufficient.'
  },
  {
    question: 'Which areas near Agra do you provide event planning services to?',
    answer: 'In addition to serving all localities in Agra (such as Fatehabad Road, Sanjay Place, Kamla Nagar, Dayalbagh), we cover the entire Agra Mandal region. We routinely manage events in Mathura, Firozabad, Shikohabad, Mainpuri, Tundla, and surrounding towns. You can easily view our localized services via our dedicated city pages like Event Planner in Mathura, Event Planner in Firozabad, and Event Planner in Shikohabad.'
  }
];

const venues = [
  {
    name: 'Taj View Gardens',
    description: 'An elite outdoor lawn offering direct views of the Taj Mahal, providing a magical setting for weddings and premium receptions.',
    capacity: '100-600 guests',
    features: ['Direct Taj view', 'Premium catering setups', 'Luxury bridal suites', 'Valet parking'],
    rating: 4.9,
    image: '/images/venue-heritage.jpeg'
  },
  {
    name: 'Heritage Mughal Palace',
    description: 'A historic venue reflecting royal Mughal architecture, ideal for traditional wedding ceremonies, Tilak functions, and cultural events.',
    capacity: '200-1000 guests',
    features: ['Mughal architecture', 'Intricate carvings', 'Indoor royal halls', 'Spacious green lawns'],
    rating: 4.8,
    image: '/images/venue-krishna-hall.jpeg'
  },
  {
    name: 'Agra Convention Center',
    description: 'A state-of-the-art corporate event venue equipped with high-tech audio-visual routing, spacious conference rooms, and business lounges.',
    capacity: '500-2000 guests',
    features: ['Advanced AV systems', 'Multiple conference layout boards', 'Executive catering', 'Central location'],
    rating: 4.7,
    image: '/images/venue-convention.jpg'
  }
];

export default function AgraEventPlannerPage() {
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
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
          style={{ backgroundImage: "url('/images/hero-1.jpeg')" }}
        ></div>
        <div className="container mx-auto px-4 relative z-20 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">
            Best Event Planner in Agra
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200">
            Professional wedding planning, stunning balloon decoration, corporate management, and premium catering across the city of the Taj Mahal.
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
                  About Eventkro: Agra’s Premium Event Management Team
                </h2>
                <p className="leading-relaxed mb-4">
                  Welcome to Eventkro, your ultimate partner in crafting unforgettable experiences. Known as the leading <strong>event planner in agra</strong>, we combine local insights with international planning standards to execute events that leave a lasting impression. Our history is rooted in a passion for design, culinary excellence, and logistical precision. We believe that every occasion—whether a grand wedding reception overlooking the Taj Mahal or an intimate milestone birthday party—deserves a dedicated team that coordinates every small details with absolute perfection.
                </p>
                <p className="leading-relaxed mb-4">
                  Our team consists of creative visual decorators who specialize in transforming spaces using fresh flowers, custom lighting structures, and organic balloon designs. We collaborate with the most trusted suppliers, gourmet cooks, professional sound technicians, and wedding photographers in Agra. By keeping our processes organized and transparent, we eliminate the stress commonly associated with planning and executing events. Families, corporate houses, and local organizations choose Eventkro because we promise and deliver reliability, creativity, and elegance in equal measure.
                </p>
                <p className="leading-relaxed">
                  From selecting the perfect venue along Fatehabad Road to managing post-event cleanups, we stay on-site from start to finish. Our commitment to client satisfaction has allowed us to grow from a local decoration company into Agra Mandal’s go-to destination for high-consequence event management. We invite you to experience the Eventkro standard of hospitality and design.
                </p>
              </div>

              {/* Event Planning Services Section */}
              <div id="services" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Comprehensive Event Planning Services in Agra
                </h2>
                <p className="leading-relaxed mb-6">
                  At Eventkro, we offer a comprehensive suite of services designed to handle every phase of your event lifecycle. Our methodology is simple: we listen to your vision, outline a structured budget, create visual mood boards, coordinate with premium vendors, handle logistics, and manage on-site setup and teardown. This comprehensive support structure ensures that your event remains aligned with your expectations while freeing you to enjoy the company of your guests.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Creative Visual Decoration</h3>
                    <p className="text-gray-600 text-sm">Theme-based stage setups, floral entryways, LED displays, and custom balloon installations (including organic arches, walls, and backdrops).</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Logistics & Venue Booking</h3>
                    <p className="text-gray-600 text-sm">Securing premium heritage properties, banquet halls, and outdoor lawns, along with complete timeline management and guest welcoming services.</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Gourmet Catering Coordination</h3>
                    <p className="text-gray-600 text-sm">Designing customizable multi-cuisine menus, coordinating live counters, arranging premium tableware, and managing waitstaff.</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Audio-Visual & Entertainment</h3>
                    <p className="text-gray-600 text-sm">Setting up professional sound checks, coordinate stage lighting, booking local DJs, dancers, dhol artists, and traditional performers.</p>
                  </div>
                </div>
              </div>

              {/* Wedding Planning Section */}
              <div id="wedding" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Elite Wedding Planning & Ceremony Coordination
                </h2>
                <p className="leading-relaxed mb-4">
                  A wedding is more than just a party; it is the beginning of a lifelong journey and a sacred union of families. Planning a wedding in Agra involves organizing multiple pre-wedding, wedding-day, and post-wedding functions, each requiring a distinct theme, design, and atmosphere. As Agra’s premier wedding planner, Eventkro designs weddings that blend rich Mughal heritage with contemporary styling. We cooperate with top-rated hotels, palaces, and lawns to secure locations that offer the most romantic backdrops for your photography.
                </p>
                <p className="leading-relaxed mb-4">
                  We handle the entire planning process for all ceremonies:
                </p>
                <ul className="space-y-2 mb-4">
                  <li><strong>Roka / Sagai:</strong> Traditional ring exchange functions featuring elegant floral arrangements, guest seating setups, and customized welcome signages.</li>
                  <li><strong>Haldi Ceremony:</strong> Vibrant yellow-themed events styled with fresh marigold curtains, traditional swings (jhulas), client seating platforms, and lively dhol music.</li>
                  <li><strong>Mehendi & Sangeet:</strong> Multi-colored canopy decorations, stage setups for dance performances, professional sound routing, and comfortable seating layouts.</li>
                  <li><strong>Main Wedding Day:</strong> Breathtaking mandap setups (royal dome, floral structures, glass pillars), pathway lighting, welcome gates, and royal bride/groom entries.</li>
                </ul>
                <p className="leading-relaxed">
                  Our coordinators manage the wedding timeline dynamically, ensuring that the transition from the welcome ceremony to the Var Mala, dinner service, phere, and bidai proceeds on schedule. We also assist with guest logistics, booking accommodations, and coordinating makeup artists and photographers.
                </p>
              </div>

              {/* Birthday Planning Section */}
              <div id="birthday" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Creative Birthday Party Planning & Themed Balloon Decor
                </h2>
                <p className="leading-relaxed mb-4">
                  Birthdays represent significant milestones, and celebrating them with joy, laughter, and high-impact design is our specialty. At Eventkro, we plan themed birthday parties for children and adults alike. We work with you to choose a theme that reflects your child's favorite characters or a sophisticated adult palette (such as rose gold, neon, or classic black and gold). Our decorators are experts in building custom photo backdrops, cake table layouts, and interactive activity zones.
                </p>
                <p className="leading-relaxed mb-4">
                  Our balloon decoration services include organic balloon arches, wall panels, ceiling grids, and customized balloon bouquets. We use only premium quality latex and foil balloons, ensuring that your decorations stay inflated and fresh throughout the event. In addition to decorations, we arrange entertainment activities such as magic shows, puppet performances, game hosts, tattoo artists, and custom photo booths to keep your guests fully engaged.
                </p>
                <p className="leading-relaxed">
                  Whether you are planning a 1st birthday party, a sweet sixteen, or a golden 50th celebration, Eventkro designs a package that matches your requirements. We prepare the venue before guests arrive and dismantle the decor post-event, leaving you with nothing to worry about.
                </p>
              </div>

              {/* Corporate Events Section */}
              <div id="corporate" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Professional Corporate Event Management in Agra
                </h2>
                <p className="leading-relaxed mb-4">
                  Corporate events demand absolute precision, professional styling, and reliable timeline management. As businesses in Agra grow, they require sophisticated spaces and coordinators to host dealer meets, product launches, branch openings, conferences, and annual award functions. Eventkro provides comprehensive corporate event planning services that align with your brand guidelines and business objectives. We manage the setup of executive stages, podiums, registration desks, and backdrop banners.
                </p>
                <p className="leading-relaxed mb-4">
                  We integrate advanced audio-visual routing to ensure clear communication during presentations and speeches. Our team sets up premium sound systems, microphones, projectors, and LED wall displays. We also handle the catering for corporate gatherings, offering customizable lunch boxes, high-tea packages, and buffet spreads designed to impress your stakeholders.
                </p>
                <p className="leading-relaxed">
                  With our local knowledge of hotels and business centers in Agra (such as Sanjay Place and Fatehabad Road), we help you select the most convenient venue, manage guest registrations, and arrange professional hosts to coordinate the schedule. Trust Eventkro to execute your business event with the highest degree of professionalism.
                </p>
              </div>

              {/* Catering Services Section */}
              <div id="catering" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Bespoke Catering Services in Agra: A Culinary Experience
                </h2>
                <p className="leading-relaxed mb-4">
                  Food is the heart of any Indian celebration, and at Eventkro, we strive to make it a memorable experience. We collaborate with the best catering services in Agra to offer a wide array of cuisines prepared under strict hygiene standards. Whether you are hosting a traditional wedding feast or a corporate lunch, our menus are designed to delight your guests. We offer customizable options across North Indian, traditional Mughlai, South Indian, Chinese, and Continental cuisines.
                </p>
                <p className="leading-relaxed mb-4">
                  Our catering service setup includes:
                </p>
                <ul className="space-y-2 mb-4">
                  <li><strong>Live Food Counters:</strong> Interactive stations serving fresh chat, pasta, golgappas, tandoori starters, and sizzling beverages.</li>
                  <li><strong>Mughlai Specialties:</strong> Authentic biryanis, slow-cooked gravies, paneer tikka, and traditional breads reflecting Agra's heritage.</li>
                  <li><strong>Dessert Spreads:</strong> Local Agra petha displays, hot jalebis with rabri, gulab jamuns, ice creams, and custom cakes.</li>
                  <li><strong>Professional Service:</strong> Uniformed servers, clean presentation tables, premium crockery, and swift hospitality.</li>
                </ul>
                <p className="leading-relaxed">
                  We work closely with you during menu planning to accommodate dietary preferences (such as pure vegetarian or Jain food) and guest counts. Our team ensures that ingredients are fresh and presentations are visually appealing.
                </p>
              </div>

              {/* Decoration Services Section */}
              <div id="decor" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Decoration Services: Balloon, Floral, & Structural Design
                </h2>
                <p className="leading-relaxed mb-4">
                  The visual layout of a venue sets the tone for the entire event. At Eventkro, we take pride in our innovative decoration services in Agra. We design custom themes that transform standard halls and gardens into breathtaking settings. Our designers mix textures, colors, and lighting to match your event's mood. We specialize in both traditional floral setups and modern balloon styling.
                </p>
                <p className="leading-relaxed mb-4">
                  For weddings and rituals, we use fresh local and imported flowers to build arches, mandap domes, and aisle pathways. For birthdays and social parties, we design custom balloon backdrop walls, entrance arches, and table centerpieces. We also provide structural decorations such as carpets, stage platforms, ceiling drapes, and LED lighting grids that enhance the visual appeal of the venue.
                </p>
                <p className="leading-relaxed">
                  Every decoration is installed by our team before the event starts and removed promptly afterward, ensuring that the venue is returned in perfect condition. We ensure that our decorations are secure, clean, and photo-ready.
                </p>
              </div>

              {/* Why Choose Eventkro Section */}
              <div id="why-choose" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Why Choose Eventkro as Your Event Planner in Agra
                </h2>
                <p className="leading-relaxed mb-4">
                  Selecting the right coordinator is key to the success of your event. Eventkro offers a combination of experience, local insight, and professional dedication that sets us apart in the Agra Mandal region:
                </p>
                <ul className="space-y-3 mb-6">
                  <li><strong>Local Expertise:</strong> We understand the unique requirements of hosting events in Agra, including venue logistics, local permissions, and traditional customs.</li>
                  <li><strong>Flexible Packages:</strong> We offer customizable packages (Basic, Premium, and Elite) to fit different budgets and requirements without compromising on quality.</li>
                  <li><strong>Stress-Free Coordination:</strong> Our team handles the entire event workflow, from vendor management and timeline tracking to on-site coordination and post-event cleanup.</li>
                  <li><strong>Uncompromising Quality:</strong> We use high-grade materials, premium balloons, fresh flowers, and follow strict hygiene protocols for our catering services.</li>
                  <li><strong>Customer-Centric Approach:</strong> We keep you updated at every step, offering visual mockups and prompt consultations to ensure your event proceeds as planned.</li>
                </ul>
              </div>

              {/* Local Venues Section */}
              <div id="venues" className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 pb-2 border-b-2 border-gray-100">
                  Top Local Venues in Agra
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Selecting the right venue is the first step toward a successful event. Eventkro coordinates with the finest hotels, lawns, and banquet halls in Agra to find the perfect match for your celebration:
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
                    <Link href="/event-planner-in-mathura" className="text-gray-600 hover:text-[#ff5722] text-sm py-2 border-b border-gray-200 transition-colors">
                      Event Planner in Mathura →
                    </Link>
                    <Link href="/event-planner-in-firozabad" className="text-gray-600 hover:text-[#ff5722] text-sm py-2 border-b border-gray-200 transition-colors">
                      Event Planner in Firozabad →
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Plan Your Perfect Event in Agra?</h2>
          <p className="text-lg mb-8 text-white/95 leading-relaxed">
            From intimate birthday balloon setups along Sanjay Place to grand royal weddings at Taj View Gardens, Eventkro handles everything with absolute perfection. Contact us now for a custom quote.
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
