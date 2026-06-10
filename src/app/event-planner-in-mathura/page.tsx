'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaStar, FaChevronDown } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const faqItems = [
  {
    question: 'Why is Eventkro the top event planner in Mathura?',
    answer: 'Eventkro has established itself as the top event planner in Mathura by combining modern planning workflows with local Brijwasi culture, traditional customs, and pure vegetarian catering. We have specialized experience setting up spiritual and cultural functions, managing crowd logistics in Vrindavan, and building beautiful riverside decorations. From budget balloon setups to luxurious destination weddings, our planners manage every detail.'
  },
  {
    question: 'What types of cultural events do you organize in Mathura?',
    answer: 'In the birthplace of Lord Krishna, spiritual and religious celebrations are central to local life. We plan and manage traditional Braj-style weddings, Janmashtami cultural programs, temple events, religious pujas, ring ceremonies, and colorful Holi celebrations. We take care of stage setup, sound checkpoints, folk dancers, and traditional visual decor.'
  },
  {
    question: 'Do you offer pure vegetarian catering services in Mathura?',
    answer: 'Yes, absolutely. Understanding the religious and spiritual sensibilities of Mathura and Vrindavan, we provide 100% pure vegetarian and Jain-friendly catering services. We design custom menus featuring traditional Braj delicacies (like kachori-sabzi, Mathura peda, rabri-malpua, and local milk shakes) alongside popular North Indian, South Indian, and Chinese buffets.'
  },
  {
    question: 'Can you set up events along the Yamuna riverside?',
    answer: 'Yes. We have established relationships with popular open-air gardens and banquet properties located along the Yamuna river in Mathura. We design customized riverside stages, floral backdrops, pathway lighting grids, and guest seating areas to create a scenic atmosphere.'
  },
  {
    question: 'Which other cities do you serve in the region?',
    answer: 'We serve all key cities in the Agra Mandal region, including Agra, Firozabad, Shikohabad, Mainpuri, Tundla, and surrounding rural towns. You can easily view our services for other cities on our dedicated pages, such as Event Planner in Agra, Event Planner in Firozabad, and Event Planner in Shikohabad.'
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

export default function MathuraEventPlannerPage() {
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
            Best Event Planner in Mathura
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200">
            Expert traditional weddings, Janmashtami celebrations, Brij-style catering, and colorful balloon decorations across Mathura and Vrindavan.
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
                  About Eventkro: Mathura’s Dedicated Event Management Team
                </h2>
                <p className="leading-relaxed mb-4">
                  Welcome to Eventkro, your trusted local partner for creating beautiful and culturally rich events in the holy land of Mathura. Known as the leading <strong>event planner in mathura</strong>, we take immense pride in organizing occasions that honor the local Brijwasi heritage while delivering modern hospitality standards. The Braj region—encompassing Mathura, Vrindavan, Barsana, and Nandgaon—is unique for its spiritual energy, traditional music, and colorful festivals. We believe that hosting an event in this region requires an event planner who understands these unique elements and can translate them into elegant stage designs, visual themes, and dining experiences.
                </p>
                <p className="leading-relaxed mb-4">
                  Our team brings a wealth of local knowledge, creative expertise, and vendor resources. We design custom decorations combining fresh flowers (such as temple marigolds and jasmine), traditional drapes, and modern lighting systems. We collaborate with the best pure vegetarian catering services, dhol and shehnai players, and professional photographers in Mathura. By handling all logistics, scheduling, and on-site cleanup, we ensure that you can focus entirely on your religious and family rituals without any operational worries.
                </p>
                <p className="leading-relaxed">
                  Whether you are planning a destination wedding along the banks of the Yamuna River, a traditional ring ceremony (Sagai), a vibrant kids birthday party with custom balloon arches, or a community religious gathering, Eventkro guarantees professional execution. Experience the perfect blend of Brijwasi warmth and professional coordination with Eventkro.
                </p>
              </div>

              {/* Event Planning Services Section */}
              <div id="services" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Event Planning Services Customized for Brijwasi Families
                </h2>
                <p className="leading-relaxed mb-6">
                  At Eventkro, we manage the entire event cycle, offering solutions designed for local traditions and budgets. We organize pre-event planning sessions, design customized mood boards, secure premium banquet halls and open lawns, and manage vendor deliveries. Our coordinators are trained to execute events on schedule, ensuring that your ceremony remains structured and organized.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Spiritual & Temple Decor</h3>
                    <p className="text-gray-600 text-sm">Bespoke temple-style setups, marigold entryways, traditional brass setups, and fresh flower decorations for pujas and weddings.</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Pure Vegetarian Catering</h3>
                    <p className="text-gray-600 text-sm"> Brijwasi sweets displays, traditional vegetarian feasts, high-hygiene live food stalls, and international vegetarian options.</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Braj Folk Entertainment</h3>
                    <p className="text-gray-600 text-sm">Arranging local shehnai players, folk dancers (performing Charkula or Raslila), devotional bhajan singers, and live sound controls.</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Creative Balloon Styling</h3>
                    <p className="text-gray-600 text-sm">Designing theme-based balloon backdrops, entrance arches, and bouquets for birthday parties and baby showers.</p>
                  </div>
                </div>
              </div>

              {/* Wedding Planning Section */}
              <div id="wedding" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Traditional Braj-Style Wedding Planning & Coordination
                </h2>
                <p className="leading-relaxed mb-4">
                  Weddings in Mathura are deep spiritual celebrations that follow rich regional customs and symbols. The traditional Brijwasi wedding features local folk music, shehnai playing, and a focus on community hospitality. As Mathura’s leading wedding planner, Eventkro designs weddings that honor these traditions while introducing modern luxuries. We help you choose the best wedding lawns and halls near Vrindavan and along the Yamuna riverside, creating a scenic and memorable setting for your guests.
                </p>
                <p className="leading-relaxed mb-4">
                  We manage all pre-wedding and wedding day rituals:
                </p>
                <ul className="space-y-2 mb-4">
                  <li><strong>Tilak & Sagai:</strong> Traditional ring exchange functions featuring elegant drapes, brass lamp displays, and premium guest hospitality.</li>
                  <li><strong>Vibrant Haldi:</strong> Yellow-themed setups with marigold curtains, traditional seating pots (urlis), and folk songs.</li>
                  <li><strong>Mehendi and Sangeet:</strong> Canopy decorations in pastel colors, stage and sound setups for dance performances, and seating for mehndi artists.</li>
                  <li><strong>Main Wedding Day:</strong> Scenic mandap setups (domes decorated with fresh flowers, lighting pillars), welcome gates, and royal entry structures.</li>
                </ul>
                <p className="leading-relaxed">
                  Our coordinators stay on-site throughout the wedding day, managing timeline transitions from the welcome ceremony to the Var Mala, dining service, and phere. We also coordinate with photographers and videographers to capture every special moment.
                </p>
              </div>

              {/* Birthday Planning Section */}
              <div id="birthday" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Themed Birthday Parties & Custom Balloon Decoration
                </h2>
                <p className="leading-relaxed mb-4">
                  Celebrating your child’s birthday in Mathura is a joyful family event. Eventkro provides creative birthday party planning and balloon decoration services that delight kids and adults alike. We work with you to select a theme (such as cartoon characters, prince/princess themes, or elegant pastel combinations) and design a matching cake table, photo backdrop, and welcome board.
                </p>
                <p className="leading-relaxed mb-4">
                  Our decorators use high-quality latex and foil balloons to build organic balloon arches, photo backdrops, and customized balloon bouquets. In addition to decorations, we arrange entertainment activities such as magic shows, game coordinators, tattoo artists, and photo booths to keep children entertained.
                </p>
                <p className="leading-relaxed">
                  Whether you are planning a 1st birthday, an anniversary milestone, or a family get-together, Eventkro designs a customized package that suits your budget. We handle the entire venue setup and teardown, ensuring a hassle-free experience.
                </p>
              </div>

              {/* Corporate Events Section */}
              <div id="corporate" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Professional Corporate Event & Conference Management
                </h2>
                <p className="leading-relaxed mb-4">
                  As the business and commercial landscape in Mathura expands, local companies and institutions require professional event managers to execute business conferences, dealer meets, store openings, and corporate celebrations. Eventkro provides reliable corporate event planning services that align with your branding requirements and schedules. We handle the setup of stages, podiums, registration desks, and backdrop banners.
                </p>
                <p className="leading-relaxed mb-4">
                  We set up clear sound systems, microphones, projectors, and LED displays to support professional presentations. We also coordinate corporate catering, providing customized lunch packets, high-tea packages, and buffet spreads designed to suit professional standards.
                </p>
                <p className="leading-relaxed">
                  Our local network helps you select the best business hotels and convention spaces in Mathura. Trust Eventkro to manage the scheduling, setup, and logistics of your business meet with absolute precision.
                </p>
              </div>

              {/* Catering Services Section */}
              <div id="catering" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Pure Vegetarian & Brijwasi Catering Services in Mathura
                </h2>
                <p className="leading-relaxed mb-4">
                  Mathura is famous for its culinary heritage, particularly its traditional vegetarian sweets and snacks. Food is a central part of any local celebration. Eventkro partners with the finest pure vegetarian caterers in Mathura to deliver delicious multi-cuisine menus prepared under high hygiene standards. We design custom menus featuring traditional Braj delicacies alongside popular North Indian, South Indian, and Chinese buffets.
                </p>
                <p className="leading-relaxed mb-4">
                  Our vegetarian catering setup includes:
                </p>
                <ul className="space-y-2 mb-4">
                  <li><strong>Brijwasi Sweet Counters:</strong> Mathura peda, rabri-malpua, fresh jalebi, and milk shakes.</li>
                  <li><strong>Live Food Counters:</strong> Interactive stations serving fresh chat, golgappas, tandoori paneer tikka, and hot beverages.</li>
                  <li><strong>Traditional Feasts:</strong> Traditional kachori-sabzi, slow-cooked dal, and tandoori breads.</li>
                  <li><strong>Hygienic Presentation:</strong> Uniformed waitstaff, clean tables, premium plates, and swift service.</li>
                </ul>
                <p className="leading-relaxed">
                  We work closely with you during menu design to accommodate dietary preferences (such as pure vegetarian or Jain food) and guest counts, ensuring an outstanding dining experience.
                </p>
              </div>

              {/* Decoration Services Section */}
              <div id="decor" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Bespoke Decoration: Balloon, Floral, & Lighting Design
                </h2>
                <p className="leading-relaxed mb-4">
                  The visual layout of your venue sets the tone for the entire event. Eventkro provides customized decoration services in Mathura, designing visual layouts that transform banquet halls and gardens into beautiful settings. We blend fresh flowers, traditional drapes, and lighting grids to match your event theme.
                </p>
                <p className="leading-relaxed mb-4">
                  For weddings and religious events, we use fresh local flowers to build beautiful entryways, mandap structures, and stage backdrops. For social parties and birthdays, we design custom balloon arches, backdrop walls, and welcome boards.
                </p>
                <p className="leading-relaxed">
                  Our decorators handle the entire installation and teardown, ensuring that the venue is returned in perfect condition. We ensure that our decorations are secure, clean, and photo-ready.
                </p>
              </div>

              {/* Why Choose Eventkro Section */}
              <div id="why-choose" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Why Choose Eventkro as Your Event Planner in Mathura
                </h2>
                <p className="leading-relaxed mb-4">
                  Choosing Eventkro ensures that your celebration is managed by professionals who understand local traditions:
                </p>
                <ul className="space-y-3 mb-6">
                  <li><strong>Braj Cultural Expertise:</strong> We understand the unique requirements of hosting events in Mathura, Vrindavan, and Barsana.</li>
                  <li><strong>100% Pure Vegetarian Catering:</strong> We design high-quality vegetarian menus that respect local spiritual preferences.</li>
                  <li><strong>Customizable Packages:</strong> We offer flexible options (Basic, Premium, Elite) to suit different budgets and layouts.</li>
                  <li><strong>On-Site Coordination:</strong> Our coordinator stays on-site during the entire event, managing timelines and vendors.</li>
                  <li><strong>Reliability & Transparency:</strong> We offer transparent billing and ensure on-time setup and teardown.</li>
                </ul>
              </div>

              {/* Local Venues Section */}
              <div id="venues" className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 pb-2 border-b-2 border-gray-100">
                  Top Event Venues in Mathura
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We coordinate with top-rated hotels, lawns, and banquet halls in Mathura to secure the ideal venue for your celebration:
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Plan Your Perfect Event in Mathura?</h2>
          <p className="text-lg mb-8 text-white/95 leading-relaxed">
            From traditional weddings near Vrindavan to community Janmashtami festivals, Eventkro handles everything with absolute care and Brijwasi warmth. Contact us now for a custom quote.
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
