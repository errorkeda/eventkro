'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaStar, FaChevronDown } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Image from 'next/image';

const faqItems = [
  {
    question: 'What types of wedding themes do you specialize in Agra?',
    answer: 'We specialize in royal Mughal themes, luxury outdoor destination weddings, floral fusion setups, and contemporary minimalist pastels. We customize every mandap and stage design to suit your specific preferences.'
  },
  {
    question: 'Do you manage catering menus for weddings in Agra?',
    answer: 'Yes, catering is a key part of our wedding planning. We coordinate with Agra’s top chefs to offer traditional Mughlai feasts, rich North Indian curries, interactive live counters, and localized Agra petha dessert spreads.'
  },
  {
    question: 'Which wedding venues in Agra do you recommend?',
    answer: 'We recommend venues that offer scenic backdrops, such as Taj View Gardens for close Taj Mahal views, Heritage Mughal Palace for historical royal architecture, and Jaypee Palace or ITC Mughal for high-end luxury requirements.'
  },
  {
    question: 'How far in advance should we hire a wedding planner in Agra?',
    answer: 'We suggest booking our wedding planning services 4 to 6 months in advance. This ensures availability of preferred venues, visual designers, and professional photographers during peak wedding seasons.'
  },
  {
    question: 'What pre-wedding events do you manage in Agra?',
    answer: 'We manage the entire wedding sequence, including Roka / Sagai ring exchanges, colorful Haldi ceremonies, Sangeet dance stages, Mehendi setups, and pre-wedding photoshoots near the Taj Mahal.'
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
    name: 'Jaypee Palace Hotel',
    description: 'A luxurious five-star hotel with sprawling landscaped gardens, water features, and grand banquet halls suitable for elite destination weddings.',
    capacity: '500-1500 guests',
    features: ['Five-star hospitality', 'Sprawling lawns', 'Intricate red sandstone architecture', 'Luxury guest rooms'],
    rating: 4.9,
    image: '/images/venue-convention.jpg'
  }
];

export default function AgraWeddingPlannerPage() {
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
            Best Wedding Planner in Agra
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200">
            Designing royal destination weddings, breathtaking mandaps, gourmet Mughlai catering, and flawless ceremony management in the city of love.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary text-lg px-8 py-3 rounded-lg shadow-lg">
              Get Free Quote
            </Link>
            <Link href="/event-planner-in-agra" className="btn-secondary text-lg px-8 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white border-white/30">
              Agra General Events
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
                  About Eventkro: Agra’s Premier Wedding Planners
                </h2>
                <p className="leading-relaxed mb-4">
                  Welcome to Eventkro, your dedicated partner in planning the most spectacular day of your life. As the leading <strong>wedding planner in agra</strong>, we are experts in transforming wedding dreams into realities. Agra, the city of the Taj Mahal, holds a special place in the hearts of couples worldwide. It is a city that symbolizes eternal love, and hosting your wedding here provides a romantic, historical backdrop that few other locations on Earth can match. At Eventkro, we believe that a wedding is not just an event; it is a sacred, once-in-a-lifetime journey that brings two families together. Our mission is to manage every detail of this journey with absolute precision, creativity, and royal hospitality.
                </p>
                <p className="leading-relaxed mb-4">
                  Our team consists of specialized wedding designers, visual decorators, hospitality experts, and logisticians. We coordinate with the finest heritage properties, 5-star hotels, and outdoor lawns in Agra. We manage all aspects of wedding planning—from initial mood boarding and venue layouts to stage lighting, sound setups, makeup artist scheduling, photography coordination, and on-day execution. By taking over all operational challenges, we allow you and your family to enjoy the festivities without any stress.
                </p>
                <p className="leading-relaxed">
                  We understand that every couple has a unique vision. Whether you desire a grand royal wedding that reflects the majesty of Mughal history, an intimate destination wedding with views of the Taj Mahal, or a modern, minimalist celebration, Eventkro designs a package that matches your requirements. We combine local vendor networks with international planning standards to ensure that your wedding is flawless from the guest welcome to the final bidai.
                </p>
              </div>

              {/* Event Planning Services Section */}
              <div id="services" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Our Comprehensive Wedding Management Services
                </h2>
                <p className="leading-relaxed mb-6">
                  Planning a wedding in Agra involves managing multiple ceremonies, coordinating numerous vendors, and maintaining strict timelines. Eventkro provides a complete suite of services that handles every phase of the planning process:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Venue Sourcing & Booking</h3>
                    <p className="text-gray-600 text-sm">Securing premier heritage properties, luxury resorts, and outdoor gardens in Agra at competitive rates, along with layout planning.</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Stage, Mandap & Aisle Styling</h3>
                    <p className="text-gray-600 text-sm">Designing custom mandaps (royal dome designs, fresh floral arches, crystal hangings), entry gates, and LED stage backgrounds.</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Gourmet Wedding Catering</h3>
                    <p className="text-gray-600 text-sm">Coordination of customizable menus featuring traditional Mughlai foods, street food counters, and royal dessert spreads.</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Hospitality & Guest Management</h3>
                    <p className="text-gray-600 text-sm">Arranging hotel bookings, managing airport/station transfers, welcoming guests with traditional music, and coordinate room hampers.</p>
                  </div>
                </div>
              </div>

              {/* Wedding Planning (Unique Trends & Themes) */}
              <div id="wedding-trends" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Agra Wedding Trends & Decoration Styles
                </h2>
                <p className="leading-relaxed mb-4">
                  Wedding decoration in Agra has evolved to reflect a fusion of historic grandeur and modern luxury. The most popular design trend is the <strong>Royal Mughal Theme</strong>. Designers use structures inspired by Mughal arches, decorated with fresh red roses, white jasmines, and marigolds. Heavy crystal chandeliers, brass lamps, and rich red and gold drapes are set up to create a palace-like atmosphere. The mandap is often built as a dome structure, set up on raised platforms to ensure that the rituals are visible to all guests.
                </p>
                <p className="leading-relaxed mb-4">
                  Another popular trend is the <strong>Taj View Destination Wedding</strong>. Couples from across India choose outdoor lawns on Fatehabad Road that offer direct views of the Taj Mahal. For these events, we use a softer color palette—such as white, pastel pink, and mint green—complemented by organic floral arches, minimal glass hangings, and fairy lights. This creates a dreamlike, romantic setting that looks spectacular in wedding photographs.
                </p>
                <p className="leading-relaxed mb-4">
                  For indoor functions like the Sangeet and Reception, <strong>LED Staging & Custom Dance Floors</strong> are highly sought after. We design large LED wall displays that play custom animations, set up moving head lights, and build customized acrylic dance floors. We also organize grand entries for the bride and groom, using sparklers, dry-ice smoke machines, and traditional royal umbrellas (chhatris) to create a dramatic impact.
                </p>
              </div>

              {/* Birthday Planning Section */}
              <div id="birthday" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Themed Birthday Celebrations & Social Event Decor
                </h2>
                <p className="leading-relaxed mb-4">
                  While weddings are our primary focus, our design and coordination team also plans themed birthday parties and social gatherings in Agra. We apply the same level of attention to detail to smaller family celebrations. For children's birthdays, we build custom balloon arches, character cutouts, and cake table backdrops based on their favorite themes.
                </p>
                <p className="leading-relaxed">
                  For milestone adult birthdays and anniversaries, we design elegant setups using rose gold, silver, or neon elements, combined with flower garlands and photo walls. We manage the setup and removal of decorations, leaving you free to enjoy the celebration with your loved ones.
                </p>
              </div>

              {/* Corporate Events Section */}
              <div id="corporate" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Corporate Staging & Event Management in Agra
                </h2>
                <p className="leading-relaxed mb-4">
                  Eventkro also provides corporate event planning services in Agra. We coordinate dealer meets, conferences, product launches, and annual awards. We manage venue setups at premium business hotels, build professional stages, set up backdrop banners, and integrate advanced audio-visual routing (projectors, LED screens, microphones). Our corporate catering packages include customizable high-tea and buffet spreads designed to suit professional standards.
                </p>
              </div>

              {/* Catering Services Section (Agra Specific) */}
              <div id="catering" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Local Catering Preferences: Traditional Mughlai Feasts
                </h2>
                <p className="leading-relaxed mb-4">
                  Food is a vital element of any wedding, and in Agra, the catering is dominated by rich <strong>Mughlai Cuisines</strong>. Our wedding catering services offer an authentic culinary experience that reflects this royal heritage. We coordinate with Agra’s top chefs to prepare traditional slow-cooked gravies (such as Shahi Paneer, Dal Makhani, and Mughlai Kofta), rich biryanis, and assorted tandoori breads (naans, sheermals, and rotis) prepared in on-site clay ovens.
                </p>
                <p className="leading-relaxed mb-4">
                  We also set up **Interactive Live Food Counters** that serve popular street foods of Agra, including:
                </p>
                <ul className="space-y-2 mb-4">
                  <li><strong>Agra Chat Stalls:</strong> Crispy aloo tikki, bhalla chat, golgappas, and kachori-sabzi.</li>
                  <li><strong>Tandoori Starters:</strong> Live grilling of paneer tikka, soy chaap, and tandoori vegetables.</li>
                  <li><strong>Traditional Sweet Counters:</strong> Hot jalebis with rabri, gulab jamuns, moong dal halwa, and custom petha displays.</li>
                </ul>
                <p className="leading-relaxed">
                  We maintain strict hygiene and safety standards, use fresh ingredients, and provide uniformed waitstaff to deliver a premium dining experience for your guests.
                </p>
              </div>

              {/* Decoration Services Section */}
              <div id="decor" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Decoration Services: Fresh Flower & Structural Setup
                </h2>
                <p className="leading-relaxed mb-4">
                  The visual layout of a wedding venue establishes the atmosphere for the entire celebration. Eventkro provides customized decoration services in Agra, designing structures that transform standard banquet halls and gardens into royal settings. We use fresh local and imported flowers (roses, carnations, jasmines, marigolds, orchids) to build mandaps, entry gates, and aisle pathways.
                </p>
                <p className="leading-relaxed">
                  Our decorators also handle lighting setups, including crystal chandeliers, LED spotlighting, pathway lanterns, and fairy light backdrops. Every setup is installed prior to the event start and removed promptly afterward.
                </p>
              </div>

              {/* Why Choose Eventkro Section */}
              <div id="why-choose" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Why Choose Eventkro as Your Wedding Planner in Agra
                </h2>
                <p className="leading-relaxed mb-4">
                  Hiring Eventkro ensures that your wedding is managed by dedicated professionals:
                </p>
                <ul className="space-y-3 mb-6">
                  <li><strong>Destination Wedding Expertise:</strong> Specialized experience managing layouts, logistics, and staging for events near the Taj Mahal.</li>
                  <li><strong>Royal Theme Visual Designs:</strong> Custom dome mandaps, palace drapes, and crystal chandelier setups.</li>
                  <li><strong>Exquisite Mughlai Catering:</strong> Authentic slow-cooked menus, interactive live counters, and high hygiene standards.</li>
                  <li><strong>On-Site Timeline Management:</strong> Dedicated coordinators manage the schedule dynamically, resolving issues and tracking vendors.</li>
                  <li><strong>Flexible Budgeting:</strong> We offer customizable packages (Basic, Premium, Elite) to suit different layouts and budgets.</li>
                </ul>
              </div>

              {/* Local Venues Section */}
              <div id="venues" className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 pb-2 border-b-2 border-gray-100">
                  Popular Wedding Venues in Agra
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Agra features some of the country’s most popular hotels and heritage gardens. We coordinate with these venues to secure your booking:
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
                    <Link href="/wedding-planner-in-mathura" className="text-gray-600 hover:text-[#ff5722] text-sm py-2 border-b border-gray-200 transition-colors">
                      Wedding Planner in Mathura →
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Plan Your Perfect Wedding in Agra?</h2>
          <p className="text-lg mb-8 text-white/95 leading-relaxed">
            From royal Mughal setups to intimate ceremonies near the Taj Mahal, Eventkro handles everything with absolute care and professionalism. Contact us now for a custom quote.
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
