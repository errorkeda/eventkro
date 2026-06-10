'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaStar, FaChevronDown } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';

const faqItems = [
  {
    question: 'What wedding services do you provide in Shikohabad?',
    answer: 'We provide complete end-to-end wedding services in Shikohabad, including custom wedding theme decorations, large-capacity venue sourcing, pure vegetarian catering, and professional ceremony coordination.'
  },
  {
    question: 'Which wedding venues in Shikohabad do you work with?',
    answer: 'We coordinate with the leading banquet halls and marriage lawns in Shikohabad, including Shikohabad Palace, Balaji Marriage Home, and grand lawns located along the national highway (NH-19).'
  },
  {
    question: 'Do you customize catering menus for Shikohabad weddings?',
    answer: 'Yes! We coordinate personalized catering packages featuring traditional sweets (rabri, gulab jamun), rich North Indian curries, interactive chat counters, and regional specialties.'
  },
  {
    question: 'How does Eventkro manage budget-friendly weddings in Shikohabad?',
    answer: 'We offer flexible wedding planning packages (Basic, Premium, and Elite) that optimize vendor costs, floral staging, and venue setup to deliver luxury weddings within your budget.'
  },
  {
    question: 'Can you organize pre-wedding ceremonies like Haldi and Sangeet in Shikohabad?',
    answer: 'Yes! We design custom decoration setups for Haldi (with marigold themes and swings), Sangeet stages (with professional lighting and AV systems), and Mehendi functions.'
  }
];

const venues = [
  {
    name: 'Shikohabad Palace Banquet & Garden',
    description: 'A luxurious indoor banquet hall and outdoor lawn setup offering grand entry options and high-end decor flexibility.',
    capacity: '200-800 guests',
    features: ['Luxury air-conditioned hall', 'Connected marriage lawn', 'Ample guest parking', 'Premium bridal suites'],
    rating: 4.8,
    image: '/images/venue-krishna-hall.jpeg'
  },
  {
    name: 'Balaji Marriage Home',
    description: 'A popular and spacious marriage home in Shikohabad featuring beautiful gardens, large kitchens for caterers, and comfortable rooms.',
    capacity: '300-1000 guests',
    features: ['Spacious green gardens', 'Large in-house kitchen area', 'Budget-friendly packages', 'Central location'],
    rating: 4.6,
    image: '/images/venue-heritage.jpeg'
  },
  {
    name: 'Royal Highway Marriage Lawn (NH-19)',
    description: 'A massive highway-adjacent lawn offering unparalleled accessibility, vast open-air space, and massive stage structural setups.',
    capacity: '500-2000 guests',
    features: ['Massive capacity', 'Direct highway accessibility', 'Secure compound wall', 'Grand wedding setups'],
    rating: 4.7,
    image: '/images/venue-convention.jpg'
  }
];

export default function ShikohabadWeddingPlannerPage() {
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
          style={{ backgroundImage: "url('/images/hero-slide-3.jpg')" }}
        ></div>
        <div className="container mx-auto px-4 relative z-20 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">
            Best Wedding Planner in Shikohabad
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200">
            Designing grand highway lawn weddings, gorgeous floral themes, regional catering menus, and flawless event coordination in Shikohabad.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary text-lg px-8 py-3 rounded-lg shadow-lg">
              Get Free Quote
            </Link>
            <Link href="/event-planner-in-shikohabad" className="btn-secondary text-lg px-8 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white border-white/30">
              Shikohabad General Events
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
                  About Eventkro: Shikohabad’s Dedicated Wedding Planners
                </h2>
                <p className="leading-relaxed mb-4">
                  Welcome to Eventkro, the leading <strong>wedding planner in shikohabad</strong>. We specialize in planning and executing weddings that combine the warmth of traditional family rituals with modern design and flawless logistics. Shikohabad, situated along the major national highway (NH-19) in the Firozabad district, is a key connecting town in the region. Due to its strategic location, many families choose Shikohabad to host grand, large-capacity weddings that are easily accessible to guests traveling from Agra, Firozabad, Mainpuri, and Etawah. A wedding hosted here is a celebration of community, culture, and family values. At Eventkro, we believe that every wedding deserves professional timeline coordination, high-end visual decoration, and warm hospitality.
                </p>
                <p className="leading-relaxed mb-4">
                  Our wedding planning team provides complete coordination, managing all pre-wedding and wedding-day details. We collaborate with the best properties in Shikohabad, sourcing venues that range from spacious marriage lawns with massive lawns to traditional banquet halls. We coordinate with local flower markets, regional caterers, music providers, makeup artists, and wedding photographers. By taking over all timeline management and supplier delivery coordination, we leave you free to participate fully in the sacred ceremonies and enjoy the festivities with your loved ones.
                </p>
                <p className="leading-relaxed">
                  We customize our setups according to your family's preferences. Whether you desire a traditional wedding styled with rich marigold arches and drapes, a modern pastel-themed open-air celebration on a spacious highway lawn, or a budget-friendly family gathering, Eventkro creates a customized package. We work with the top regional chefs to offer authentic local catering and ensure that every element reflects the hospitality of Shikohabad.
                </p>
              </div>

              {/* Event Planning Services Section */}
              <div id="services" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Our Complete Suite of Wedding Planning Services
                </h2>
                <p className="leading-relaxed mb-6">
                  Managing a wedding in Shikohabad requires organizing multiple functions, coordinating transportation for out-of-town guests, and setting up large-scale decors. Eventkro provides comprehensive services to manage every aspect:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Spacious Venue Sourcing</h3>
                    <p className="text-gray-600 text-sm">Securing bookings at the finest marriage lawns, local banquet homes, and highway resorts in Shikohabad.</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Floral & Fabric Draping</h3>
                    <p className="text-gray-600 text-sm">Designing mandaps and entrance arches using beautiful floral drapes, colorful fabric layouts, and traditional lighting.</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Regional Catering Buffets</h3>
                    <p className="text-gray-600 text-sm">Customizing catering packages with traditional North Indian dishes, local sweets like rabri, and live street-food chat counters.</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Pre-Wedding Coordination</h3>
                    <p className="text-gray-600 text-sm">Styling and organizing color-coordinated Haldi functions, Mehendi seating, and high-energy Sangeet audio-visual setups.</p>
                  </div>
                </div>
              </div>

              {/* Wedding Planning (Shikohabad Specific Trends & Decoration) */}
              <div id="wedding-trends" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Shikohabad Wedding Trends & Decoration Styles
                </h2>
                <p className="leading-relaxed mb-4">
                  Wedding decorations in Shikohabad are heavily influenced by the spacious outdoor venues available in the region. The most popular styling is the <strong>Grand Floral Dome Mandap</strong>. Placed in the center of massive highway marriage lawns, the mandap is built using structural arches covered with fresh red roses, white marigolds, and hanging jasmine strings. This setup is illuminated with warm spotlights and fairy-light backdrops, ensuring a spectacular view from a distance and beautiful wedding photographs.
                </p>
                <p className="leading-relaxed mb-4">
                  Another popular design is the <strong>Traditional Marigold Pathway</strong>. Used primarily for day-time Haldi and Mehendi ceremonies, the entrance and guest seating areas are decorated with yellow and orange marigolds, fabric drapes, and traditional wooden swings (jhulas). Low-height wooden stools (chowkis) and brass bowls filled with floating rose petals are placed around to give the venue a warm, traditional feel that aligns with classic Indian customs.
                </p>
                <p className="leading-relaxed mb-4">
                  For Sangeet and Reception stages, couples are adopting a <strong>Folk & Fairy Light theme</strong>. We blend modern LED screen backdrops with traditional fabric drapes. The LED screens play visual animations matching the wedding themes, while the physical stage is decorated with brass elements, hanging lanterns, and extensive fairy light panels. We also install professional lighting rigs to highlight guest entries and stage performances.
                </p>
              </div>

              {/* Birthday Planning Section */}
              <div id="birthday" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Themed Birthday Parties & Custom Balloon Decor
                </h2>
                <p className="leading-relaxed mb-4">
                  In addition to weddings, Eventkro plans themed birthday parties and social gatherings in Shikohabad. We design custom balloon backdrops, arches, and cake tables based on your child's favorite themes. Our team also manages adult milestone birthdays and family anniversaries, designing elegant floral backdrops and balloon styling.
                </p>
                <p className="leading-relaxed">
                  We handle the setup and removal of all decorations, ensuring that the venue is returned in perfect condition. We arrange children's entertainment, including game coordinators and magic shows, to keep your guests engaged.
                </p>
              </div>

              {/* Corporate Events Section */}
              <div id="corporate" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Corporate Event Management in Shikohabad
                </h2>
                <p className="leading-relaxed mb-4">
                  Eventkro provides corporate event planning services in Shikohabad. We coordinate dealer meets, conferences, branch inaugurations, and company celebrations. We manage stages, audio-visual routing (projectors, LED walls, microphones), and corporate high-tea and buffet catering designed to impress your stakeholders.
                </p>
              </div>

              {/* Catering Services Section (Shikohabad Specific) */}
              <div id="catering" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Local Catering Preferences: Traditional North Indian & Sweets Buffets
                </h2>
                <p className="leading-relaxed mb-4">
                  Catering is a central element of any wedding in Shikohabad, with families preferring a rich, traditional layout. The dominant preference is for a **100% Pure Vegetarian North Indian Buffet**, cooked under high hygiene standards by experienced regional culinary teams. Local menus feature rich gravies (like Shahi Paneer and Dal Makhani), crispy stuffed naans, and interactive street-food counters that keep guests engaged throughout the evening.
                </p>
                <p className="leading-relaxed mb-4">
                  Our wedding catering menus in Shikohabad focus on regional specialties:
                </p>
                <ul className="space-y-2 mb-4">
                  <li><strong>Traditional Sweets:</strong> Rich rabri, hot jalebis, warm gulab jamuns, and seasonal halwas (moong dal or gajar halwa).</li>
                  <li><strong>Street Food Stalls:</strong> Crispy bhalla chat, aloo tikki, golgappas, and spicy kachoris with potato curry.</li>
                  <li><strong>North Indian Classics:</strong> Shahi Paneer, Mix Veg, Dal Tadka, and fresh breads baked in on-site clay tandoors.</li>
                  <li><strong>Clean & Hygienic Layouts:</strong> Clean buffet tables, high-quality plates, and professional waitstaff.</li>
                </ul>
                <p className="leading-relaxed">
                  Our coordinators manage the catering schedule dynamically, ensuring that the dinner service is coordinated with the wedding timeline.
                </p>
              </div>

              {/* Decoration Services Section */}
              <div id="decor" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Decoration Services: Floral Drapes & Fairy Light Backdrops
                </h2>
                <p className="leading-relaxed mb-4">
                  The visual layout of a wedding venue establishes the atmosphere for the entire celebration. Eventkro provides customized decoration services in Shikohabad, designing structures that transform standard banquet halls and gardens into beautiful settings. We use fresh local and imported flowers (roses, jasmines, marigolds, orchids) to build mandaps, entry gates, and aisle pathways.
                </p>
                <p className="leading-relaxed">
                  Our decorators also handle lighting setups, including crystal chandeliers, LED spotlighting, pathway lanterns, and fairy light backdrops. Every setup is installed prior to the event start and removed promptly afterward.
                </p>
              </div>

              {/* Why Choose Eventkro Section */}
              <div id="why-choose" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Why Choose Eventkro as Your Wedding Planner in Shikohabad
                </h2>
                <p className="leading-relaxed mb-4">
                  Hiring Eventkro ensures that your wedding is managed by dedicated professionals:
                </p>
                <ul className="space-y-3 mb-6">
                  <li><strong>Highway Lawn Expertise:</strong> Specialized experience in managing large-scale outdoor staging and lighting setups.</li>
                  <li><strong>Budget-Optimized Packages:</strong> Flexible pricing models (Basic, Premium, Elite) that deliver great results within your budget.</li>
                  <li><strong>Delicious Regional Catering:</strong> Hygienic food preparation focusing on North Indian specialties and traditional sweets.</li>
                  <li><strong>Dedicated On-Site Managers:</strong> Dedicated coordinators manage the schedule dynamically, resolving issues and tracking vendors.</li>
                  <li><strong>Smooth Vendor Integration:</strong> Strong relationships with local florist, transport, and equipment suppliers.</li>
                </ul>
              </div>

              {/* Local Venues Section */}
              <div id="venues" className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 pb-2 border-b-2 border-gray-100">
                  Popular Wedding Venues in Shikohabad
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Shikohabad features beautiful local marriage homes and grand highway lawns. We coordinate with these venues to secure your booking:
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
                    Book Wedding Planner
                  </Link>
                  <div className="text-center text-gray-500 text-xs">
                    Or call us: <br/>
                    <strong className="text-gray-800 text-sm font-semibold">+91 7017520811</strong>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Explore Other Cities</h3>
                  <div className="flex flex-col gap-2">
                    <Link href="/wedding-planner-in-agra" className="text-gray-600 hover:text-[#ff5722] text-sm py-2 border-b border-gray-200 transition-colors">
                      Wedding Planner in Agra →
                    </Link>
                    <Link href="/wedding-planner-in-mathura" className="text-gray-600 hover:text-[#ff5722] text-sm py-2 border-b border-gray-200 transition-colors">
                      Wedding Planner in Mathura →
                    </Link>
                    <Link href="/wedding-planner-in-firozabad" className="text-gray-600 hover:text-[#ff5722] text-sm py-2 transition-colors">
                      Wedding Planner in Firozabad →
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Plan Your Perfect Wedding in Shikohabad?</h2>
          <p className="text-lg mb-8 text-white/95 leading-relaxed">
            From spacious marriage gardens to beautiful floral arrangements, Eventkro handles everything with absolute care and traditional warmth. Contact us now for a custom quote.
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
