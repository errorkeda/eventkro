'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaStar, FaChevronDown } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';

const faqItems = [
  {
    question: 'What makes Eventkro the top choice for weddings in Mathura?',
    answer: 'Eventkro specializes in traditional Brijwasi weddings. We integrate spiritual aesthetics, pure vegetarian Braj menus, and local folk elements like Raslila and shehnai, while ensuring professional timeline and venue coordination.'
  },
  {
    question: 'Do you offer pure vegetarian wedding catering in Mathura?',
    answer: 'Yes! We coordinate 100% pure vegetarian and onion-garlic-free (Jain) catering packages. Our setups feature Mathura pedas, rabri-malpua, traditional kachori-sabzi, and multi-cuisine buffets.'
  },
  {
    question: 'What local decoration styles do you use in Mathura Vrindavan?',
    answer: 'We design spiritual temple themes featuring brass lamp setups, marigold arches, fresh lotus arrangements, and traditional swings (jhulas) that honor the Lord Krishna legacy.'
  },
  {
    question: 'Can you coordinate wedding functions along the Yamuna riverside?',
    answer: 'Yes. We work closely with riverside gardens in Mathura to build open-air mandaps and floral walk-paths offering panoramic views of the river ghats.'
  },
  {
    question: 'Do you serve Vrindavan and other surrounding locations?',
    answer: 'Yes, we manage wedding events in Mathura, Vrindavan, Barsana, Gokul, Nandgaon, and all major areas in the Braj region.'
  }
];

const venues = [
  {
    name: 'Krishna Heritage Hall',
    description: 'A traditional indoor venue featuring beautiful Brijwasi architecture and temple-style designs, ideal for religious ceremonies and weddings.',
    capacity: '100-400 guests',
    features: ['Temple architecture', 'Riverside views', 'Spiritual ambiance', 'In-house vegetarian kitchen'],
    rating: 4.9,
    image: '/images/venue-krishna-hall.jpeg'
  },
  {
    name: 'Yamuna Celebration Gardens',
    description: 'A massive open-air outdoor lawn along the Yamuna River, perfect for grand Braj-style weddings and festival celebrations.',
    capacity: '200-1000 guests',
    features: ['Riverside lawn', 'Open-air dining space', 'Valet parking', 'Festival staging facilities'],
    rating: 4.7,
    image: '/images/venue-heritage.jpeg'
  },
  {
    name: 'Brij Cultural Center',
    description: 'A modern, air-conditioned convention hall with a large performance stage, state-of-the-art sound systems, and customizable layouts.',
    capacity: '150-600 guests',
    features: ['Large performance stage', 'AC banquet halls', 'Advanced AV systems', 'Guest rooms'],
    rating: 4.6,
    image: '/images/venue-convention.jpg'
  }
];

export default function MathuraWeddingPlannerPage() {
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
            Best Wedding Planner in Mathura
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200">
            Organizing traditional Braj-style weddings, spiritual temple theme mandaps, vrindavan venues, and pure vegetarian catering in the land of Lord Krishna.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary text-lg px-8 py-3 rounded-lg shadow-lg">
              Get Free Quote
            </Link>
            <Link href="/event-planner-in-mathura" className="btn-secondary text-lg px-8 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white border-white/30">
              Mathura General Events
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
                  About Eventkro: Mathura’s Dedicated Wedding Planners
                </h2>
                <p className="leading-relaxed mb-4">
                  Welcome to Eventkro, the leading <strong>wedding planner in mathura</strong>. We specialize in planning and executing weddings that embrace the unique spiritual heritage and cultural warmth of the Braj region. Mathura, Vrindavan, Barsana, and Gokul hold deep spiritual significance for millions of families. A wedding hosted in this sacred land is a beautiful experience that blends traditional rituals, devotional music, and community celebration. At Eventkro, we believe that Brijwasi weddings demand a planner who understands these deep-rooted traditions and can execute them with professional logistics and high-end aesthetics.
                </p>
                <p className="leading-relaxed mb-4">
                  Our wedding planning team provides complete coordination, managing all pre-wedding and wedding-day details. We collaborate with the best properties in Vrindavan and Mathura, sourcing venues that range from riverside gardens along the Yamuna to modern air-conditioned banquet halls. We coordinate with local flower bazaars, traditional shehnai and dhol players, pure vegetarian culinary experts, and wedding photographers. By taking over all timeline management and supplier delivery coordination, we leave you free to participate fully in the sacred ceremonies.
                </p>
                <p className="leading-relaxed">
                  We customize our setups according to your family's preferences. Whether you desire a traditional Vedic wedding styled with fresh lotus flowers and brass oil lamps, a vibrant open-air celebration along the river, or a grand destination wedding in Vrindavan, Eventkro creates a customized package. We maintain strict vegetarian catering standards and ensure that every element reflects the hospitality of Brij.
                </p>
              </div>

              {/* Event Planning Services Section */}
              <div id="services" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Our Full Suite of Wedding Planning Services
                </h2>
                <p className="leading-relaxed mb-6">
                  Managing a traditional wedding in Mathura requires organizing multiple functions, coordinating transportation, and setting up complex decors. Eventkro provides comprehensive services to manage every aspect:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Vrindavan & Mathura Venue Sourcing</h3>
                    <p className="text-gray-600 text-sm">Securing bookings at the finest marriage gardens, hotels, and temple-adjacent banquets in Vrindavan and Mathura.</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Traditional Brijwasi Decor</h3>
                    <p className="text-gray-600 text-sm">Designing mandaps and stages styled with marigolds, lotus flowers, traditional brass oil lamps, and decorated swings (jhulas).</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Pure Vegetarian Catering</h3>
                    <p className="text-gray-600 text-sm">Customizing Brijwasi-style menus under strict hygiene conditions, complete with onion-garlic-free (Jain) options.</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Folk Entertainment Booking</h3>
                    <p className="text-gray-600 text-sm">Booking shehnai players, local bhajan singers, and Brij folk dancers performing traditional Raslila and Charkula dances.</p>
                  </div>
                </div>
              </div>

              {/* Wedding Planning (Mathura Specific Trends & Decoration) */}
              <div id="wedding-trends" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Mathura Wedding Trends & Decoration Styles
                </h2>
                <p className="leading-relaxed mb-4">
                  Wedding decorations in Mathura and Vrindavan are heavily influenced by the spiritual themes of the Brij region. The most popular styling is the <strong>Spiritual Temple Theme</strong>. The mandap is decorated like a temple sanctum, using carved wood elements, brass bell strings, clay oil lamps, and marigold garlands. Fresh lotus flowers and jasmines are placed around the central fire area to create a beautiful, aromatic setting. Large brass lamps and low-height wooden stools (chowkis) for guests add a traditional feel to the wedding.
                </p>
                <p className="leading-relaxed mb-4">
                  Another popular design is the <strong>Traditional Jhula Mandap</strong>. Influenced by the swings used in local temples, the bride and groom seating is designed as an intricately carved wooden swing, decorated with white jasmines and yellow marigolds. This setup is placed against a background of green drapes and white fabric panels. This traditional style is highly sought after for Haldi and Mehendi ceremonies.
                </p>
                <p className="leading-relaxed mb-4">
                  For Sangeet and Reception stages, couples are adopting a <strong>Folk Fusion theme</strong>. We blend modern LED screen backdrops with traditional floral hangings. The LED screens play visual animations matching the Brij themes, while the physical stage is decorated with brass elements and floral arrangements. We also install spotlights to highlight traditional shehnai players and folk dancers during the welcoming of guests.
                </p>
              </div>

              {/* Birthday Planning Section */}
              <div id="birthday" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Themed Birthday Parties & Custom Balloon Decor
                </h2>
                <p className="leading-relaxed mb-4">
                  In addition to weddings, Eventkro plans themed birthday parties and social gatherings in Mathura. We design custom balloon backdrops, arches, and cake tables based on your child's favorite themes. Our team also manages adult milestone birthdays and family anniversaries, designing elegant floral backdrops and balloon styling.
                </p>
                <p className="leading-relaxed">
                  We handle the setup and removal of all decorations, ensuring that the venue is returned in perfect condition. We arrange children's entertainment, including game coordinators and magic shows, to keep your guests engaged.
                </p>
              </div>

              {/* Corporate Events Section */}
              <div id="corporate" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Corporate Event Management in Mathura
                </h2>
                <p className="leading-relaxed mb-4">
                  Eventkro provides corporate event planning services in Mathura. We coordinate dealer meets, conferences, branch inaugurations, and company celebrations. We manage stages, audio-visual routing (projectors, LED walls, microphones), and corporate high-tea and buffet catering designed to impress your stakeholders.
                </p>
              </div>

              {/* Catering Services Section (Mathura Specific) */}
              <div id="catering" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Local Catering Preferences: Pure Vegetarian Brijwasi Buffets
                </h2>
                <p className="leading-relaxed mb-4">
                  Mathura is famous for its milk-based sweets and traditional snack varieties. Catering for local weddings is dominated by <strong>100% Pure Vegetarian Menus</strong>. We partner with the top Brijwasi cooks to prepare traditional foods under strict hygiene standards. We also offer fully customized onion-garlic-free (Jain) catering packages.
                </p>
                <p className="leading-relaxed mb-4">
                  Our Mathura wedding catering menus feature local specialties, including:
                </p>
                <ul className="space-y-2 mb-4">
                  <li><strong>Traditional Braj Sweets:</strong> Mathura pedas, fresh rabri, warm malpua, live jalebi counters, and milk shakes.</li>
                  <li><strong>Traditional Snack Counters:</strong> Crispy kachori-sabzi, aloo tikki chat, golgappas, and fresh tandoori paneer tikka.</li>
                  <li><strong>North Indian Buffet:</strong> Rich curries, slow-cooked lentils, and clay-oven tandoori naans and rotis.</li>
                  <li><strong>Hygienic Presentation:</strong> Clean buffet tables, premium plates, and professional waitstaff.</li>
                </ul>
                <p className="leading-relaxed">
                  Our coordinators manage the catering schedule dynamically, ensuring that the dinner service is coordinated with the wedding timeline.
                </p>
              </div>

              {/* Decoration Services Section */}
              <div id="decor" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Decoration Services: Spiritual Floral & Lighting Design
                </h2>
                <p className="leading-relaxed mb-4">
                  The visual layout of a wedding venue establishes the atmosphere for the entire celebration. Eventkro provides customized decoration services in Mathura, designing structures that transform standard banquet halls and gardens into beautiful settings. We use fresh local and imported flowers (roses, jasmines, marigolds, lotus flowers) to build mandaps, entry gates, and aisle pathways.
                </p>
                <p className="leading-relaxed">
                  Our decorators also handle lighting setups, including spotlights, pathway lanterns, and fairy light backdrops. Every setup is installed prior to the event start and removed promptly afterward.
                </p>
              </div>

              {/* Why Choose Eventkro Section */}
              <div id="why-choose" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Why Choose Eventkro as Your Wedding Planner in Mathura
                </h2>
                <p className="leading-relaxed mb-4">
                  Hiring Eventkro ensures that your wedding is managed by dedicated professionals:
                </p>
                <ul className="space-y-3 mb-6">
                  <li><strong>Braj Cultural Expertise:</strong> Specialized experience managing layouts, logistics, and staging for events in Mathura and Vrindavan.</li>
                  <li><strong>Spiritual Theme Visual Designs:</strong> Custom temple mandaps, wooden swings, and brass oil lamp setups.</li>
                  <li><strong>Pure Vegetarian Catering:</strong> Traditional Brijwasi sweet displays, live counters, and Jain catering packages.</li>
                  <li><strong>On-Site Timeline Management:</strong> Dedicated coordinators manage the schedule dynamically, resolving issues and tracking vendors.</li>
                  <li><strong>Flexible Budgeting:</strong> We offer customizable packages (Basic, Premium, Elite) to suit different layouts and budgets.</li>
                </ul>
              </div>

              {/* Local Venues Section */}
              <div id="venues" className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 pb-2 border-b-2 border-gray-100">
                  Popular Wedding Venues in Mathura Vrindavan
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Mathura and Vrindavan feature beautiful hotels, lawns, and banquet halls. We coordinate with these venues to secure your booking:
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
                    <Link href="/wedding-planner-in-firozabad" className="text-gray-600 hover:text-[#ff5722] text-sm py-2 border-b border-gray-200 transition-colors">
                      Wedding Planner in Firozabad →
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Plan Your Perfect Wedding in Mathura?</h2>
          <p className="text-lg mb-8 text-white/95 leading-relaxed">
            From Vrindavan heritage weddings to riverside mandap ceremonies, Eventkro handles everything with absolute care and Brijwasi warmth. Contact us now for a custom quote.
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
