import Link from 'next/link';
import Image from 'next/image';
import { FaWhatsapp, FaCalendarAlt, FaCheckCircle, FaPhoneAlt } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AligarhFaqAccordion, { FaqItem } from './AligarhFaqAccordion';

const faqItems: FaqItem[] = [
  {
    question: 'How is event planning priced in Aligarh with Eventkro?',
    answer: 'Eventkro does not enforce rigid fixed packages or arbitrary pricing. The cost for event planning in Aligarh is determined entirely by your specific event requirements: type of event, guest count, venue setup, floral and balloon decoration scale, stage lighting, sound systems, and catering preferences. We offer a free initial consultation and prepare a transparent, customized quote aligned with your planned budget.'
  },
  {
    question: 'Can we hire Eventkro for devotional and religious programs in Aligarh?',
    answer: 'Yes. Devotional and spiritual programs are a major specialty for our team in Aligarh. We provide complete setup and coordination for Mata ka Jagrata and Chowki, Khatu Shyam Bhajan Sandhya, multi-day Shrimad Bhagwat Katha, Ramayan and Sundarkand Path, Sai Sandhya, Shiv Vivah, and Krishna Leela. We manage sacred bhawan floral decor, crystal-clear devotional sound, seating, and prasad catering.'
  },
  {
    question: 'Do you provide event management in Khair, Gabhana, and Jattari?',
    answer: 'Yes. In addition to serving central Aligarh, our on-site coordination and logistics network actively covers nearby confirmed areas including Khair, Gabhana, and Jattari. We transport equipment, decoration setups, and coordination teams directly to your chosen venue or home in these towns.'
  },
  {
    question: 'Can we book individual services like only sound, lighting, or decoration?',
    answer: 'Absolutely. While many families and organizations in Aligarh prefer end-to-end event planning, you can also book individual services on demand. Whether you need only professional sound and stage lighting for a musical event, custom balloon decoration for a birthday, or dedicated catering management, we can accommodate your specific scope.'
  },
  {
    question: 'Do you organize college, university, and corporate events in Aligarh?',
    answer: 'Yes. Given Aligarh\'s prominent educational and institutional landscape, we frequently coordinate college festivals, academic seminars, departmental convocations, freshers gatherings, and corporate meets. We set up executive stages, podiums, AV equipment, projection screens, attendee seating, and institutional high-tea or lunch catering.'
  },
  {
    question: 'How early should we discuss our event requirements with Eventkro?',
    answer: 'For large celebrations such as weddings, multi-day Katha programs, or major college festivals, we recommend discussing your requirements 1 to 3 months in advance to ensure preferred scheduling and custom design development. For birthdays, private family celebrations, or single-day bhajan sandhyas, 1 to 2 weeks of advance notice is usually sufficient.'
  }
];

export default function AligarhEventPlannerPage() {
  return (
    <main className="bg-white min-h-screen">
      <Header />

      {/* Hero Banner Section */}
      <section className="relative min-h-[60vh] sm:min-h-[65vh] pt-24 sm:pt-28 pb-12 sm:pb-16 flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <Image
          src="/images/aligarh/event-planner-in-aligarh-hero.webp"
          alt="Customized event planning and celebration management in Aligarh"
          fill
          priority
          sizes="100vw"
          className="object-cover transition-transform duration-1000 z-0"
        />
        <div className="container mx-auto px-4 relative z-20 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight leading-tight">
            Event Planner in Aligarh for Customized Celebrations &amp; Gatherings
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
            From multi-day weddings and vibrant birthdays to sacred devotional programs, college festivals, and corporate meets across Aligarh, Khair, Gabhana, and Jattari.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 rounded-lg shadow-lg font-semibold"
            >
              Request a Free Quote
            </Link>
            <a
              href="https://wa.me/917017520811?text=Hi%20Eventkro,%20I%20want%20to%20discuss%20an%20event%20in%20Aligarh."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white border-none flex items-center justify-center gap-2 shadow-lg font-semibold transition-colors"
            >
              <FaWhatsapp className="text-xl" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left/Main Content Column */}
            <div className="lg:col-span-2 space-y-12">
              {/* Introduction Section */}
              <div id="intro" className="prose max-w-none text-gray-700">
                <p className="text-lg leading-relaxed mb-4 font-medium text-gray-800">
                  Planning an upcoming celebration or gathering in Aligarh? At Eventkro, we believe every event is fundamentally distinct. Whether you are hosting a grand family wedding, organizing a sacred devotional program, styling a child’s milestone birthday, or coordinating an institutional conference, we provide customized, requirement-based event planning designed to bring your vision to life.
                </p>
                <p className="leading-relaxed mb-6">
                  Instead of pushing generic pre-packaged solutions or arbitrary costs, we consult directly with you on your event type, venue preferences, guest numbers, decoration scale, stage lighting, sound requirements, and catering preferences. We provide end-to-end management so that families, community hosts, and event organizers can focus entirely on enjoying their milestone occasions.
                </p>
                <div className="mb-8">
                  <Link
                    href="/contact"
                    className="btn-primary inline-block text-center px-6 py-2.5 rounded-lg shadow-md font-semibold bg-[#ff5722] hover:bg-[#e64a19] text-white"
                  >
                    Discuss Your Event Requirements
                  </Link>
                </div>
              </div>

              {/* About Section */}
              <div id="about" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  About Eventkro: Aligarh’s Dedicated Event Planning Partner
                </h2>
                <p className="leading-relaxed mb-4">
                  Welcome to Eventkro, your trusted partner for planned celebrations across the Aligarh region. Known historically as the "City of Locks" and celebrated worldwide for its academic institutions such as Aligarh Muslim University (AMU), Aligarh is a city with deep cultural roots, a vibrant social fabric, and multi-generational family celebrations. Events hosted here range from traditional Vedic and Awadhi-style weddings to grand community devotional programs and lively university festivals.
                </p>
                <p className="leading-relaxed mb-4">
                  Our event management team brings structured coordination, creative design sensitivity, and reliable vendor management to your doorstep. We coordinate with decorators, culinary teams, sound engineers, lighting technicians, and transport operators to ensure each phase of your event schedule proceeds without delays or logistical surprises.
                </p>
                <p className="leading-relaxed">
                  We believe in complete transparency. We take the time to understand your expectations, visit your setup location or venue, and design a customized quote that accurately reflects your planned scope. From early concept planning to post-event teardown, Eventkro provides hands-on coordination so you can celebrate with peace of mind.
                </p>
              </div>

              {/* Event Planning Services Section */}
              <div id="services" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Our Core Event Planning &amp; Coordination Capabilities
                </h2>
                <p className="leading-relaxed mb-6">
                  Eventkro offers comprehensive support across the essential pillars of celebration management in Aligarh. Whether you require full end-to-end event execution or targeted assistance for specific elements, explore our full suite of capabilities below. You can also view our wider regional offerings on our dedicated <Link href="/services" className="text-[#ff5722] hover:underline font-semibold">services overview page</Link>.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-8">
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Creative Visual Decoration</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Custom stage setups, fresh floral mandap arches, organic balloon installations, entrance pathways, and ceiling fabric draping tailored to your aesthetic.
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Sound &amp; Lighting</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Acoustic sound systems for devotional bhajans, high-output PA setups for college festivals, stage spot-lighting, ambient mood lights, and LED wall routing.
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Requirement-Based Catering</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Customized multi-cuisine buffets, authentic North Indian specialties, 100% pure vegetarian menus, live chaat stalls, and regional dessert spreads.
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">On-Site Event Coordination</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Dedicated coordination managers on-site throughout your function to direct vendors, oversee setup timings, monitor dining services, and maintain schedules.
                    </p>
                  </div>
                </div>
              </div>

              {/* Wedding Planning Section */}
              <div id="wedding" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Wedding Planning &amp; Coordination in Aligarh
                </h2>
                <div className="h-64 sm:h-72 relative rounded-xl overflow-hidden mb-6 shadow-sm not-prose">
                  <Image
                    src="/images/aligarh/wedding-event-planning-aligarh.webp"
                    alt="Wedding stage decoration and mandap coordination for Aligarh celebrations"
                    fill
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover"
                  />
                </div>
                <p className="leading-relaxed mb-4">
                  Weddings in Aligarh are joyous, multi-day milestones that bring two families together in celebration. Planning these ceremonies requires meticulous vendor coordination, thoughtful layout design, and dependable schedule management. Eventkro coordinates every stage of your wedding journey, accommodating celebrations hosted in open-air marriage gardens, hotel banquet halls, or private residences.
                </p>
                <p className="leading-relaxed mb-4">
                  Our wedding planning services cover the complete ritual sequence:
                </p>
                <ul className="space-y-2 mb-4">
                  <li><strong>Roka &amp; Engagement:</strong> Elegant ring exchange stages with floral accents, tasteful guest seating, and personalized signage.</li>
                  <li><strong>Haldi &amp; Mehendi:</strong> Vibrant yellow and marigold setups, traditional wooden swings (jhulas), seating for mehendi artists, and lively music coordination.</li>
                  <li><strong>Sangeet Nights:</strong> Energetic stage platforms with professional sound mixing, stage lighting rigs, and seating layouts for family dance performances.</li>
                  <li><strong>Main Wedding Day:</strong> Sacred mandap styling (dome structures, fresh floral drapes, lighting accents), grand bride and groom entrance arrangements, and dining coordination.</li>
                  <li><strong>Reception Evenings:</strong> Contemporary stage backdrops, ambient illumination, guest greeting logistics, and multi-course feast management.</li>
                </ul>
                <p className="leading-relaxed">
                  Our on-site team monitors every vendor on the wedding day—from the arrival of fresh flowers to the timely opening of the dinner buffet—allowing you and your family to participate fully in the rituals without distraction.
                </p>
              </div>

              {/* Birthday Planning Section */}
              <div id="birthday" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Birthday Parties &amp; Custom Balloon Decoration
                </h2>
                <div className="h-64 sm:h-72 relative rounded-xl overflow-hidden mb-6 shadow-sm not-prose">
                  <Image
                    src="/images/aligarh/birthday-decoration-aligarh.webp"
                    alt="Themed birthday balloon decoration and celebratory backdrop setup in Aligarh"
                    fill
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover"
                  />
                </div>
                <p className="leading-relaxed mb-4">
                  Whether celebrating your baby’s 1st birthday, a themed party for your child, a milestone 18th or 21st celebration, or a golden 50th jubilee, Eventkro brings creativity and precision to birthday party management across Aligarh.
                </p>
                <p className="leading-relaxed mb-4">
                  We adapt our setups to your chosen venue. For intimate home parties in residential neighborhoods, we design neat, space-conscious setups including themed cake table backdrops, organic balloon garlands, numeric foil displays, and welcoming entry signboards. For larger celebrations hosted in banquet halls or party lawns, we build expansive balloon arches, photo booth backdrops, marquee LED lights, and custom stage platforms.
                </p>
                <p className="leading-relaxed">
                  We use durable, high-grade latex and foil balloons that stay properly inflated throughout your party. To keep young guests engaged, we can also coordinate entertaining activities including magic shows, game coordinators, tattoo artists, and photo booths.
                </p>
              </div>

              {/* Devotional & Religious Events Section */}
              <div id="devotional" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Devotional &amp; Religious Event Management
                </h2>
                <div className="h-64 sm:h-72 relative rounded-xl overflow-hidden mb-6 shadow-sm not-prose">
                  <Image
                    src="/images/aligarh/devotional-event-aligarh.webp"
                    alt="Devotional event stage setup with floral bhawan decor and sacred lighting in Aligarh"
                    fill
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover"
                  />
                </div>
                <p className="leading-relaxed mb-4">
                  Religious and devotional celebrations hold deep significance in Aligarh’s cultural life. Hosting a sacred program requires sincere reverence, respectful aesthetics, and flawless audio-visual support so that devotees can immerse themselves fully in prayer and praise. Eventkro provides dedicated coordination for all major devotional events:
                </p>
                <div className="space-y-4 not-prose mb-6">
                  <div className="p-5 bg-orange-50/60 rounded-xl border border-orange-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Mata ka Jagrata &amp; Chowki</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Elaborate floral bhawan and durbar decoration, akhand jyoti setup, traditional red and gold fabric draping, carpeted devotee seating, and clear sound systems for bhajan troupes.
                    </p>
                  </div>
                  <div className="p-5 bg-orange-50/60 rounded-xl border border-orange-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Khatu Shyam Bhajan Sandhya</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Devotional stage shringar with fresh imported and local flowers, fragrance and petal showers, ambient lighting, and specialized acoustic management for congregational singing.
                    </p>
                  </div>
                  <div className="p-5 bg-orange-50/60 rounded-xl border border-orange-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Shrimad Bhagwat Katha Programs</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Multi-day coordination featuring elevated vyas peeth decoration, weather-protected pandal layouts, distributed speaker lines for clear commentary, and devotee crowd management.
                    </p>
                  </div>
                  <div className="p-5 bg-orange-50/60 rounded-xl border border-orange-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Ramayan &amp; Sundarkand Path</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Serene floor seating layouts with mattresses, white sheets, and bolsters, low-height wooden chowki arrangements for holy scriptures, and warm ambient lighting.
                    </p>
                  </div>
                  <div className="p-5 bg-orange-50/60 rounded-xl border border-orange-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Sai Sandhya, Shiv Vivah &amp; Krishna Leela</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Themed stage props, floral garlands, devotional stage lighting, and coordination for traditional folk performers and musicians presenting divine leelas.
                    </p>
                  </div>
                </div>
                <p className="leading-relaxed">
                  We handle every logistical element respectfully, including stage elevation, sound checkpoints, lighting, and prasad distribution counters, ensuring a peaceful, spiritually uplifting atmosphere.
                </p>
              </div>

              {/* College & University Events Section */}
              <div id="institutional" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  College, University &amp; Institutional Events
                </h2>
                <p className="leading-relaxed mb-4">
                  With prestigious educational institutions, universities, and coaching centers defining much of Aligarh’s identity, student bodies, faculty departments, and youth organizations frequently host large academic and cultural gatherings. Eventkro provides professional event staging and technical support tailored to institutional requirements.
                </p>
                <p className="leading-relaxed mb-4">
                  We manage annual college fests, academic seminars, departmental convocations, freshers welcome ceremonies, and farewell parties. Our capabilities include:
                </p>
                <ul className="space-y-2 mb-4">
                  <li><strong>Stage &amp; Podium Staging:</strong> Robust modular staging with backdrops, podium branding, and formal dais seating.</li>
                  <li><strong>Technical Audio-Visual:</strong> Clear public address systems, cordless microphones, projection screens, and LED display walls for presentations and guest lectures.</li>
                  <li><strong>Audience Seating &amp; Canopies:</strong> Structured seating arrangements for hundreds of attendees, complete with protective canopy or marquee roofing when required.</li>
                  <li><strong>Institutional Catering:</strong> High-tea setups, boxed lunches, and hygienic buffet spreads tailored to institutional budgets and schedules.</li>
                </ul>
              </div>

              {/* Corporate Events Section */}
              <div id="corporate" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Professional Corporate Event Management
                </h2>
                <p className="leading-relaxed mb-4">
                  Aligarh’s growing commercial and manufacturing sectors require reliable event planning for business gatherings. Eventkro assists local businesses, dealerships, and regional enterprises in executing corporate events that reflect brand professionalism.
                </p>
                <p className="leading-relaxed mb-4">
                  We handle the logistical setup for dealer meets, branch inaugurations, corporate award nights, and business conferences. From setting up executive registration desks and branded photo-ops to managing presentation AV and business buffet dining, our team ensures your corporate event runs with punctual precision.
                </p>
              </div>

              {/* Modular Services Section */}
              <div id="modular-services" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Flexible Service Selection: Individual or Combined Booking
                </h2>
                <p className="leading-relaxed mb-4">
                  We recognize that not every event requires full end-to-end management. At Eventkro, clients in Aligarh can discuss individual service modules or bundle multiple services together based entirely on their specific needs:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose mb-6">
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-1">Standalone Decoration</h4>
                    <p className="text-gray-600 text-sm">Book only stage decoration, mandap floral styling, or balloon artistry for your pre-booked venue.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-1">Sound &amp; Stage Lighting</h4>
                    <p className="text-gray-600 text-sm">Hire high-clarity sound systems, microphones, and stage lights for musical, cultural, or religious functions.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-1">Dedicated Catering Coordination</h4>
                    <p className="text-gray-600 text-sm">Coordinate bespoke multi-cuisine or pure vegetarian dining with live counters and professional waitstaff.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-1">Full-Service Management</h4>
                    <p className="text-gray-600 text-sm">Combine all service elements under a single dedicated coordination manager for total peace of mind.</p>
                  </div>
                </div>
                <p className="leading-relaxed">
                  Eventkro helps coordinate different requirements for your event—from decoration, sound, and lighting to catering and event-day arrangements. Tell us what you are planning in Aligarh, Khair, Gabhana, or Jattari, and we can discuss the services you need before preparing a customized quote.
                </p>
              </div>

              {/* Areas We Serve Section */}
              <div id="service-areas" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Areas We Serve: Aligarh &amp; Confirmed Regional Service Towns
                </h2>
                <p className="leading-relaxed mb-4">
                  Our on-site event coordination and logistics infrastructure actively serves clients across <strong>Aligarh</strong> and confirmed nearby regional towns:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 not-prose mb-6">
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
                    <h4 className="font-bold text-gray-900 text-lg mb-1">Khair</h4>
                    <p className="text-gray-600 text-xs">Weddings, home birthdays &amp; devotional setups</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
                    <h4 className="font-bold text-gray-900 text-lg mb-1">Gabhana</h4>
                    <p className="text-gray-600 text-xs">Lawn celebrations, family functions &amp; catering</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
                    <h4 className="font-bold text-gray-900 text-lg mb-1">Jattari</h4>
                    <p className="text-gray-600 text-xs">Religious kathas, jagratas &amp; social gatherings</p>
                  </div>
                </div>
                <p className="leading-relaxed mb-4">
                  Whether your celebration is situated in central Aligarh or in Khair, Gabhana, or Jattari, our team manages transport logistics, equipment delivery, and on-time setup directly at your location.
                </p>
                <p className="leading-relaxed">
                  For clients with family connections across the wider western Uttar Pradesh region, Eventkro also provides established event planning services across our regional network, including <Link href="/event-planner-in-agra" className="text-[#ff5722] hover:underline font-semibold">Agra</Link>, <Link href="/event-planner-in-mathura" className="text-[#ff5722] hover:underline font-semibold">Mathura</Link>, <Link href="/event-planner-in-firozabad" className="text-[#ff5722] hover:underline font-semibold">Firozabad</Link>, and <Link href="/event-planner-in-shikohabad" className="text-[#ff5722] hover:underline font-semibold">Shikohabad</Link>.
                </p>
              </div>

              {/* Why Choose Eventkro Section */}
              <div id="why-choose" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Why Choose Eventkro for Your Aligarh Event
                </h2>
                <p className="leading-relaxed mb-4">
                  Choosing the right event partner ensures your family or organization can enjoy the occasion without operational strain. Here is what defines Eventkro’s service commitment in Aligarh:
                </p>
                <div className="space-y-4 not-prose mb-6">
                  <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <FaCheckCircle className="text-[#ff5722] text-xl shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-base mb-1">Customized Planning Without Rigid Templates</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Every event layout, floral composition, and schedule is tailored to your chosen venue, budget, and family traditions.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <FaCheckCircle className="text-[#ff5722] text-xl shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-base mb-1">Multiple Service Coordination Under One Roof</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Eliminate the hassle of dealing with separate decorators, caterers, sound providers, and lighting technicians through a single accountable coordinator.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <FaCheckCircle className="text-[#ff5722] text-xl shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-base mb-1">Requirement-Based, Transparent Quotation</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        You pay strictly for the services and scale you require. We provide itemized, honest estimates without surprise post-event additions.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <FaCheckCircle className="text-[#ff5722] text-xl shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-base mb-1">Direct Consultation &amp; On-Site Support</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        From your initial phone or WhatsApp discussion to on-site coordination during your event, our coordinators remain accessible and attentive.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div id="faq" className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 pb-2 border-b-2 border-gray-100">
                  Frequently Asked Questions
                </h2>
                <AligarhFaqAccordion items={faqItems} />
              </div>
            </div>

            {/* Right/Sidebar Sticky Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Quote Box */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Request a Custom Quote</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    Share your event date, expected guest count, and service requirements. We provide a transparent estimate within 24 hours.
                  </p>
                  <Link
                    href="/contact"
                    className="btn-primary w-full text-center block py-3 rounded-lg shadow-lg font-semibold mb-4"
                  >
                    Discuss Your Event
                  </Link>
                  <a
                    href="https://wa.me/917017520811?text=Hi%20Eventkro,%20I%20want%20to%20discuss%20an%20event%20in%20Aligarh."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-2.5 rounded-lg bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2 text-sm font-semibold transition-colors mb-4 shadow-sm"
                  >
                    <FaWhatsapp className="text-lg" /> Chat on WhatsApp
                  </a>
                  <div className="text-center text-gray-500 text-xs border-t border-gray-200 pt-4">
                    Or call our team directly: <br />
                    <strong className="text-gray-800 text-sm font-semibold block mt-1">+91 7017520811</strong>
                    <span className="text-gray-600 text-xs block">+91 9869950233</span>
                  </div>
                </div>

                {/* Regional Cities Box */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Explore Regional Cities</h3>
                  <div className="flex flex-col gap-2">
                    <Link
                      href="/event-planner-in-agra"
                      className="text-gray-600 hover:text-[#ff5722] text-sm py-2 border-b border-gray-200 transition-colors"
                    >
                      Event Planner in Agra →
                    </Link>
                    <Link
                      href="/event-planner-in-mathura"
                      className="text-gray-600 hover:text-[#ff5722] text-sm py-2 border-b border-gray-200 transition-colors"
                    >
                      Event Planner in Mathura →
                    </Link>
                    <Link
                      href="/event-planner-in-firozabad"
                      className="text-gray-600 hover:text-[#ff5722] text-sm py-2 border-b border-gray-200 transition-colors"
                    >
                      Event Planner in Firozabad →
                    </Link>
                    <Link
                      href="/event-planner-in-shikohabad"
                      className="text-gray-600 hover:text-[#ff5722] text-sm py-2 transition-colors"
                    >
                      Event Planner in Shikohabad →
                    </Link>
                  </div>
                </div>

                {/* Services Directory Link */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Service Directory</h3>
                  <p className="text-gray-600 text-xs mb-4 leading-relaxed">
                    Explore all decoration styles, event categories, and specialized planning options available through Eventkro.
                  </p>
                  <Link
                    href="/services"
                    className="text-[#ff5722] hover:underline text-sm font-semibold"
                  >
                    View All Services →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Contact CTA Section */}
      <section className="py-16 bg-[#ff5722] text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Plan Your Event in Aligarh?
          </h2>
          <p className="text-lg mb-8 text-white/95 leading-relaxed">
            From grand weddings and heartfelt devotional gatherings to college festivals and family birthdays, Eventkro handles your event with complete dedication and care. Contact us today for a personalized quote.
          </p>
          <Link
            href="/contact"
            className="bg-white text-[#ff5722] hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md inline-block"
          >
            Discuss Your Event with Eventkro
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
