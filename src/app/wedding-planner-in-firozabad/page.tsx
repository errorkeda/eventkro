'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaStar, FaChevronDown } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';

const faqItems = [
  {
    question: 'What wedding decoration styles do you specialize in Firozabad?',
    answer: 'We specialize in Firozabad’s signature glass decor, incorporating custom glass-blown ornaments, exquisite crystal chandeliers, colorful glass bead hangings, and elegant floral installations for mandaps and stages.'
  },
  {
    question: 'Can you manage catering menus for large weddings in Firozabad?',
    answer: 'Yes, we provide full wedding catering services in Firozabad. We design customized menus featuring rich North Indian curries, traditional sweets like rabri-malpua, street-food chats, and multi-cuisine buffet spreads under high hygiene standards.'
  },
  {
    question: 'Which wedding venues in Firozabad do you recommend?',
    answer: 'We recommend and coordinate with leading local venues such as Suhag Nagar Lawn, Glass City Exhibition Hall, and premium hotel banquets along the Agra-Firozabad highway.'
  },
  {
    question: 'How far in advance should we hire a wedding planner in Firozabad?',
    answer: 'We recommend booking Eventkro at least 3 to 5 months before your wedding. This allows enough time for securing the best venues, finalizing custom glass decor concepts, and booking premier culinary teams.'
  },
  {
    question: 'Do you handle pre-wedding and post-wedding functions in Firozabad?',
    answer: 'Yes! We manage the entire wedding sequence, including Roka and Sagai exchanges, colorful Haldi ceremonies, Sangeet dance stages, Mehendi setups, and reception parties.'
  }
];

const venues = [
  {
    name: 'Suhag Nagar Celebration Lawn',
    description: 'A grand open-air lawn situated in the premium residential hub of Suhag Nagar, featuring beautiful pathways and a high-capacity stage.',
    capacity: '300-1200 guests',
    features: ['Spacious green lawn', 'Massive dining area', 'Central city location', 'Bridal dressing rooms'],
    rating: 4.8,
    image: '/images/venue-heritage.jpeg'
  },
  {
    name: 'Glass City Exhibition & Convention Hall',
    description: 'A state-of-the-art air-conditioned convention center with architectural details that celebrate Firozabad’s rich glass history, offering massive indoor space.',
    capacity: '400-1500 guests',
    features: ['Fully air-conditioned', 'Glass-art decor details', 'Valet parking', 'Advanced stage AV routing'],
    rating: 4.7,
    image: '/images/venue-convention.jpg'
  },
  {
    name: 'Diamond Palace Hotel & Banquet',
    description: 'An elegant hotel offering indoor banquets and a connected mini-lawn, ideal for mid-sized luxury weddings and pre-wedding ceremonies.',
    capacity: '150-500 guests',
    features: ['Luxurious guest rooms', 'Indoor AC banquets', 'Premium catering services', 'High-end lighting rigs'],
    rating: 4.6,
    image: '/images/venue-krishna-hall.jpeg'
  }
];

export default function FirozabadWeddingPlannerPage() {
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
          style={{ backgroundImage: "url('/images/hero-2.jpeg')" }}
        ></div>
        <div className="container mx-auto px-4 relative z-20 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">
            Best Wedding Planner in Firozabad
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200">
            Designing glass-art themed weddings, magnificent mandaps, premium regional catering, and flawless timeline execution in the Glass City of India.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary text-lg px-8 py-3 rounded-lg shadow-lg">
              Get Free Quote
            </Link>
            <Link href="/event-planner-in-firozabad" className="btn-secondary text-lg px-8 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white border-white/30">
              Firozabad General Events
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
                  About Eventkro: Firozabad’s Trusted Wedding Organizers
                </h2>
                <p className="leading-relaxed mb-4">
                  Welcome to Eventkro, your premier choice for planning extraordinary weddings in Firozabad. As the leading <strong>wedding planner in firozabad</strong>, we dedicate ourselves to designing events that combine local heritage with professional logistics. Known around the world as the "Glass City of India" or "Suhag Nagari," Firozabad is a city defined by vibrant colors, incredible craftsmanship, and cultural warmth. Weddings in this beautiful city are lively celebrations that deserve a planning partner capable of bringing this heritage to life through modern event design. At Eventkro, we believe a wedding is not just a single-day event; it is a historic family milestone that represents love, trust, and community.
                </p>
                <p className="leading-relaxed mb-4">
                  Our team consists of dedicated wedding decorators, coordination managers, hospitality specialists, and gourmet catering experts. We handle every step of the planning timeline, beginning with initial design consultations and conceptual stage layouts, and continuing through to supplier bookings, guest accommodation management, and on-day execution. By managing all operational elements, we allow you and your family to focus entirely on enjoying the rituals and celebrating with your guests. We coordinate closely with Firozabad’s top suppliers and venue operators to secure the best rates and ensure smooth deliveries.
                </p>
                <p className="leading-relaxed">
                  We customize our wedding packages to fit your family's unique requirements. Whether you want a traditional Vedic wedding set against a backdrop of fresh marigolds and custom-crafted glass lanterns, a grand modern reception with high-end LED setups, or a vibrant Sangeet party, Eventkro brings your vision to life. Our deep connections within the Firozabad region enable us to source unique decorations, organize local folk performances, and coordinate reliable logistics that make your wedding run like clockwork.
                </p>
              </div>

              {/* Event Planning Services Section */}
              <div id="services" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Our Full Range of Wedding Management Services
                </h2>
                <p className="leading-relaxed mb-6">
                  Planning a wedding involves managing multiple vendors and executing a complex schedule of events. Eventkro provides a complete suite of services in Firozabad to keep everything organized and stress-free:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Firozabad Venue Sourcing</h3>
                    <p className="text-gray-600 text-sm">Finding and booking the perfect marriage gardens, hotel banquets, and convention halls along the Firozabad-Agra route.</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Glass Theme Decor & Styling</h3>
                    <p className="text-gray-600 text-sm">Designing mandaps and entryways using custom-blown glass accents, colorful hangings, crystal chandeliers, and local art motifs.</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Gourmet Catering Coordination</h3>
                    <p className="text-gray-600 text-sm">Designing customized catering spreads with rich North Indian dishes, local sweets like malpua-rabri, and live street-food stalls.</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Pre-Wedding Event Styling</h3>
                    <p className="text-gray-600 text-sm">Planning and decorating colorful Haldi backdrops, Mehendi seating, and high-energy Sangeet audio-visual stages.</p>
                  </div>
                </div>
              </div>

              {/* Wedding Planning (Firozabad Specific Glass & Cultural Trends) */}
              <div id="wedding-trends" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Firozabad Wedding Trends & Decoration Styles
                </h2>
                <p className="leading-relaxed mb-4">
                  Wedding decoration in Firozabad has a unique advantage thanks to the city's famous glass heritage. A major trend is the <strong>Glass City Palace Theme</strong>. We use the city’s premium hand-blown glass ornaments, colorful beads, and crystal structures to design the main mandap and stage. Delicate glass spheres containing fresh flower petals and small LED lights are hung from the ceilings to create a magical atmosphere. We combine these glass elements with rich velvet drapes and warm spotlights to turn standard banquet spaces into royal halls.
                </p>
                <p className="leading-relaxed mb-4">
                  Another popular style is the <strong>Contemporary Crystal Fusion</strong>. This design uses white, pastel pink, and lavender fabrics combined with tall glass candelabras, crystal drops, and modern geometric structures. The reflection of spotlights off the crystals creates a beautiful glittering effect that looks stunning in photos. This style is highly popular for Sangeet stages and reception backdrops, giving the venue a clean, upscale look.
                </p>
                <p className="leading-relaxed mb-4">
                  For outdoor events, families are choosing **Eco-Floral Glass pathways**. We line the walk-paths with green plants and hanging glass globes filled with local jasmines and roses. This design is perfect for evening Haldi and Mehendi ceremonies, combining natural greenery with the artistic look of glass to create a warm, welcoming vibe.
                </p>
              </div>

              {/* Birthday Planning Section */}
              <div id="birthday" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Creative Birthday Parties & Balloon Styling
                </h2>
                <p className="leading-relaxed mb-4">
                  In addition to weddings, Eventkro plans themed birthday parties and social gatherings in Firozabad. We design custom balloon backdrops, arches, and cake tables based on your child's favorite themes. Our team also manages adult milestone birthdays and family anniversaries, designing elegant floral backdrops and balloon styling.
                </p>
                <p className="leading-relaxed">
                  We handle the setup and removal of all decorations, ensuring that the venue is returned in perfect condition. We arrange children's entertainment, including game coordinators and magic shows, to keep your guests engaged.
                </p>
              </div>

              {/* Corporate Events Section */}
              <div id="corporate" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Corporate Event Management in Firozabad
                </h2>
                <p className="leading-relaxed mb-4">
                  Eventkro provides corporate event planning services in Firozabad. We coordinate dealer meets, conferences, branch inaugurations, and company celebrations. We manage stages, audio-visual routing (projectors, LED walls, microphones), and corporate high-tea and buffet catering designed to impress your stakeholders.
                </p>
              </div>

              {/* Catering Services Section (Firozabad Specific Cuisines) */}
              <div id="catering" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Local Catering Preferences: Rich Sweets & Multi-Cuisine Buffets
                </h2>
                <p className="leading-relaxed mb-4">
                  Food is a central focus of every Indian wedding, and Firozabad catering is known for its rich flavors and generous sweet displays. The local preference is for a **Rich North Indian and Mughlai Buffet**, featuring slow-cooked lentils, paneer specialties, and fresh tandoori breads baked in on-site clay ovens. Due to Firozabad's close proximity to Agra, rich gravies and royal Mughlai flavors are highly requested by local families.
                </p>
                <p className="leading-relaxed mb-4">
                  Our customized wedding catering menus in Firozabad include local favorites:
                </p>
                <ul className="space-y-2 mb-4">
                  <li><strong>Traditional Sweets:</strong> Hot malpua with rabri, live jalebi counters, warm gulab jamuns, and local milk-pethas.</li>
                  <li><strong>Street Food Stalls:</strong> Chat counters serving aloo tikki, crispy bhallas, golgappas, and spicy kachori-sabzi.</li>
                  <li><strong>Interactive Live Grills:</strong> Paneer tikka, grilled vegetables, and tandoori starters served directly to guest tables.</li>
                  <li><strong>Diverse Buffets:</strong> Custom Chinese and Continental counters alongside traditional North Indian cuisines.</li>
                </ul>
                <p className="leading-relaxed">
                  Our professional waitstaff and clean buffet presentations ensure a premium dining experience for your guests. We maintain high hygiene standards throughout the preparation and serving process.
                </p>
              </div>

              {/* Decoration Services Section */}
              <div id="decor" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Decoration Services: Elegant Glass Motifs & Floral Structures
                </h2>
                <p className="leading-relaxed mb-4">
                  The visual layout of a wedding venue establishes the atmosphere for the entire celebration. Eventkro provides customized decoration services in Firozabad, designing structures that transform standard banquet halls and gardens into beautiful settings. We use fresh local and imported flowers (roses, jasmines, marigolds, orchids) to build mandaps, entry gates, and aisle pathways.
                </p>
                <p className="leading-relaxed">
                  Our decorators also handle lighting setups, including crystal chandeliers, LED spotlighting, pathway lanterns, and fairy light backdrops. Every setup is installed prior to the event start and removed promptly afterward.
                </p>
              </div>

              {/* Why Choose Eventkro Section */}
              <div id="why-choose" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Why Choose Eventkro as Your Firozabad Wedding Planner
                </h2>
                <p className="leading-relaxed mb-4">
                  Hiring Eventkro ensures that your wedding is managed by dedicated professionals:
                </p>
                <ul className="space-y-3 mb-6">
                  <li><strong>Glass Decor Expertise:</strong> Unique skills in designing stage backdrops using Firozabad's premium local glass art and crystals.</li>
                  <li><strong>Custom Visual Themes:</strong> From royal palace setups to contemporary pastel designs, we customize every detail.</li>
                  <li><strong>Gourmet Menu Selections:</strong> Experienced catering teams providing hygienic and tasty buffet presentations.</li>
                  <li><strong>On-Site Timeline Coordination:</strong> Dedicated coordinators manage the schedule dynamically, resolving issues and tracking vendors.</li>
                  <li><strong>Flexible Budgeting:</strong> We offer customizable packages (Basic, Premium, Elite) to suit different layouts and budgets.</li>
                </ul>
              </div>

              {/* Local Venues Section */}
              <div id="venues" className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 pb-2 border-b-2 border-gray-100">
                  Popular Wedding Venues in Firozabad
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Firozabad features spacious lawns and modern banquet facilities. We coordinate with these top venues to secure your booking:
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
                    <Link href="/wedding-planner-in-shikohabad" className="text-gray-600 hover:text-[#ff5722] text-sm py-2 transition-colors">
                      Wedding Planner in Shikohabad →
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Plan Your Dream Wedding in Firozabad?</h2>
          <p className="text-lg mb-8 text-white/95 leading-relaxed">
            From signature glass decorations to royal feasts, Eventkro handles everything with absolute care and professionalism. Contact us now for a custom quote.
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
