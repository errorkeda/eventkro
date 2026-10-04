import Link from 'next/link';
import Image from 'next/image';
import { FaWhatsapp, FaCalendarAlt, FaCheckCircle, FaHeart, FaMusic, FaUtensils, FaUsers, FaClipboardList } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import HathrasWeddingFaqAccordion, { FaqItem } from './HathrasWeddingFaqAccordion';

const faqItems: FaqItem[] = [
  {
    question: 'How does wedding planning pricing work with Eventkro in Hathras?',
    answer: 'Eventkro operates on a requirement-based quotation model rather than offering fixed packages. Because each celebration varies in ceremonial scope, chosen venue setup, guest gathering size, decor preferences, and catering needs, pricing is estimated following a detailed consultation. A custom quote is shared based on your specific event requirements and preferences.'
  },
  {
    question: 'Which wedding and pre-wedding functions can you coordinate in Hathras?',
    answer: 'Coordination support can cover the complete ceremonial schedule based on your needs. This can include Roka and engagement setups, Haldi and Mehendi decor, Sangeet staging and lighting, baraat reception arrangements, mandap decor for wedding rituals, and evening reception setups, depending on venue facilities and vendor availability.'
  },
  {
    question: 'Can you coordinate decorations and services at our chosen marriage lawn, banquet, or home in Hathras?',
    answer: 'Yes. Coordination can be organized at your selected venue. Whether you have booked an open-air marriage lawn along local highways, a banquet hall in town, or plan to host celebrations at a private family home or property in Hathras, Sasni, Sadabad, or Sikandra Rao, setups and vendor arrangements can be planned around the venue layout.'
  },
  {
    question: 'Do you provide wedding coordination across Sasni, Sadabad, and Sikandra Rao?',
    answer: 'Yes. In addition to Hathras city, service coverage can extend to confirmed nearby tehsils including Sasni, Sadabad, and Sikandra Rao, subject to vendor availability and logistical planning for your selected dates.'
  },
  {
    question: 'Can families book individual wedding services such as only mandap decor or catering coordination?',
    answer: 'Yes. While comprehensive ceremony coordination is available, individual service requirements can also be arranged. Families can request specific support such as mandap styling, stage lighting and sound coordination, pre-wedding ceremony decor, or catering management based on event needs.'
  },
  {
    question: 'How early should we start discussing wedding requirements with Eventkro?',
    answer: 'Discussing requirements 2 to 4 months in advance is recommended, particularly for dates during peak wedding seasons. Early discussion allows adequate time for venue layout review, concept discussions, vendor scheduling, and finalized quote confirmation.'
  }
];

export default function HathrasWeddingPlannerPage() {
  return (
    <main className="bg-white min-h-screen">
      <Header />

      {/* Hero Banner Section */}
      <section className="relative min-h-[60vh] sm:min-h-[65vh] pt-24 sm:pt-28 pb-12 sm:pb-16 flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <Image
          src="/images/hathras/wedding-planner-in-hathras-hero.webp"
          alt="Representative visual of an illuminated outdoor evening wedding mandap setup on a marriage lawn"
          fill
          priority
          sizes="100vw"
          className="object-cover transition-transform duration-1000 z-0"
        />
        <div className="container mx-auto px-4 relative z-20 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight leading-tight">
            Wedding Planner in Hathras for Customized Wedding Celebrations
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
            Customized wedding coordination, bespoke mandap styling, pre-wedding celebrations, and setup management for families across Hathras, Sasni, Sadabad, and Sikandra Rao.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 rounded-lg shadow-lg font-semibold"
            >
              Request a Custom Quote
            </Link>
            <a
              href="https://wa.me/917017520811?text=Hi%20Eventkro,%20I%20want%20to%20discuss%20wedding%20planning%20in%20Hathras."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white border-none flex items-center justify-center gap-2 shadow-lg font-semibold transition-colors"
            >
              <FaWhatsapp className="text-xl" /> WhatsApp Us
            </a>
            <Link
              href="/services"
              className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold transition-colors"
            >
              Explore Services
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

              {/* Requirement-Based Wedding Coordination (Introduction) */}
              <div id="intro" className="prose max-w-none text-gray-700">
                <p className="text-lg leading-relaxed mb-4 font-medium text-gray-800">
                  Planning a wedding in Hathras is a momentous family occasion that unites relatives and loved ones for multi-day festivities. At Eventkro, we believe every wedding should reflect your family’s traditions, chosen aesthetic, and individual preferences. Rather than promoting rigid packages or predefined bundles, we coordinate wedding requirements on a customized basis—consulting directly with you to understand your celebration scale and preparing a tailored quote aligned with your planned budget.
                </p>
                <p className="leading-relaxed mb-6">
                  From pre-wedding ceremonies like Roka, Haldi, and Mehendi to evening Sangeet programs, sacred mandap rituals, and dinner receptions, wedding logistics require thoughtful planning. Eventkro assists families by coordinating decorators, sound and lighting teams, catering setups, and ceremony timelines so you can focus on welcoming your guests and enjoying each ritual.
                </p>
                <div className="mb-8">
                  <Link
                    href="/contact"
                    className="btn-primary inline-block text-center px-6 py-2.5 rounded-lg shadow-md font-semibold bg-[#ff5722] hover:bg-[#e64a19] text-white"
                  >
                    Discuss Your Wedding Requirements
                  </Link>
                </div>
              </div>

              {/* Ceremony & Setup Coordination (About Section) */}
              <div id="about" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Customized Wedding Planning &amp; Coordination in Hathras
                </h2>
                <p className="leading-relaxed mb-4">
                  Hathras holds a cherished position in western Uttar Pradesh, known for its warm hospitality, cultural depth, and close family ties. Weddings here are vibrant social occasions that bring together multiple generations. Whether you are hosting an expansive gathering on an open marriage lawn, an indoor ceremony in a banquet hall, or intimate family rituals at an ancestral residence, coordination can be tailored around your venue choice.
                </p>
                <p className="leading-relaxed mb-4">
                  Our planning approach emphasizes clear communication, structured schedules, and attentive coordination. We work with independent local service providers and setup teams—helping coordinate floral styling schedules, audio checks for rituals and music, dining setup flow, and operational details so your celebration proceeds smoothly.
                </p>
                <p className="leading-relaxed">
                  Coordination scopes are adaptable. Families may choose comprehensive multi-day management or request assistance for specific celebration milestones. You can explore broader regional event options on our <Link href="/services" className="text-[#ff5722] hover:underline font-semibold">services directory</Link>.
                </p>
              </div>

              {/* Core Wedding Planning Capabilities */}
              <div id="capabilities" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Core Wedding Management &amp; Setup Options
                </h2>
                <p className="leading-relaxed mb-6">
                  Organizing a wedding involves multiple operational elements that must run in harmony. Eventkro offers coordination across key aspects of your wedding, tailored to venue specifications and vendor availability:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-8">
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <FaHeart className="text-[#ff5722] text-xl" />
                      <h3 className="text-xl font-bold text-gray-900">Custom Mandap &amp; Stage Decor</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Customized mandap structures, floral arches, fabric drapery, LED backdrop paneling, and elevated stage seating concepts planned to match your venue dimensions.
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <FaCalendarAlt className="text-[#ff5722] text-xl" />
                      <h3 className="text-xl font-bold text-gray-900">Ceremony &amp; Setup Schedules</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Structured coordination for ritual timings, vendor arrival checkpoints, baraat reception transitions, and dining session coordination to help avoid unnecessary delays.
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <FaUtensils className="text-[#ff5722] text-xl" />
                      <h3 className="text-xl font-bold text-gray-900">Catering &amp; Dining Coordination</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Menu planning assistance and catering coordination based on family preferences, including North Indian cuisine, pure vegetarian dining, live chaat stalls, and dessert arrangements.
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <FaMusic className="text-[#ff5722] text-xl" />
                      <h3 className="text-xl font-bold text-gray-900">Sound &amp; Lighting Coordination</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Microphone and acoustic setups for Vedic chants and mantras, balanced sound equipment for Sangeet dance performances, and ambient lawn illumination based on power availability.
                    </p>
                  </div>
                </div>
              </div>

              {/* Haldi, Mehendi & Sangeet Setup Options */}
              <div id="pre-wedding" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Pre-Wedding Celebrations: Haldi, Mehendi &amp; Sangeet Setups
                </h2>
                <div className="h-64 sm:h-72 relative rounded-xl overflow-hidden mb-6 shadow-sm not-prose">
                  <Image
                    src="/images/hathras/hathras-haldi-mehendi-celebration.webp"
                    alt="Representative visual of a vibrant yellow marigold Haldi ceremony and pre-wedding celebration setup"
                    fill
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover"
                  />
                </div>
                <p className="leading-relaxed mb-4">
                  Pre-wedding rituals set the joyous tone for the days ahead. Eventkro coordinates festive setups customized for family homes, courtyard spaces, or lawn venues:
                </p>
                <div className="space-y-4 not-prose mb-6">
                  <div className="p-5 bg-orange-50/60 rounded-xl border border-orange-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Roka &amp; Sagai Gatherings</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Elegant backdrop panels, floral styling options, personalized name boards, and comfortable seating layouts suited for formal ring ceremonies and family blessings.
                    </p>
                  </div>
                  <div className="p-5 bg-orange-50/60 rounded-xl border border-orange-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Haldi &amp; Tel-Ban Celebrations</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Vibrant yellow and orange marigold decor themes, traditional decorative wooden swings (jhulas), brass urlis with flower petals, and festive seating for close relatives.
                    </p>
                  </div>
                  <div className="p-5 bg-orange-50/60 rounded-xl border border-orange-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Mehendi Functions</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Boho-chic or traditional colorful canopy drapes, low-height bolster seating for mehendi artists and guests, themed photo corners, and pleasant background music setups.
                    </p>
                  </div>
                  <div className="p-5 bg-orange-50/60 rounded-xl border border-orange-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Sangeet &amp; Musical Evenings</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Stage platform setups, dynamic dance lighting, quality audio mixing for family dance performances, and optional Braj-inspired folk music arrangements upon request.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mandap & Wedding Stage Decoration Options */}
              <div id="mandap-decor" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Mandap &amp; Wedding Stage Decoration Options
                </h2>
                <div className="h-64 sm:h-72 relative rounded-xl overflow-hidden mb-6 shadow-sm not-prose">
                  <Image
                    src="/images/hathras/hathras-wedding-mandap-decoration.webp"
                    alt="Representative visual of an ornate floral wedding mandap and stage decor with ambient lighting"
                    fill
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover"
                  />
                </div>
                <p className="leading-relaxed mb-4">
                  The mandap is the spiritual center of Hindu wedding rituals, where the sacred pheras take place in the presence of family elders. We coordinate bespoke mandap styles that harmonize with your venue surroundings:
                </p>
                <ul className="space-y-2 mb-4">
                  <li><strong>Floral Styling:</strong> Floral styling options including marigolds, roses, jasmines, tuberoses, and carnations that can be arranged into pillars, overhead canopies, and backdrop arches based on seasonal availability.</li>
                  <li><strong>Mandap Frameworks:</strong> Traditional four-pillar wooden chhatris, dome-style pavilions, open geometric metal frames, or floral canopy concepts tailored to venue clearances.</li>
                  <li><strong>Illumination &amp; Ritual Layout:</strong> Focused spotlights for the havan area, warm ambient perimeter lighting, orderly seating for family and the pandit, and clean ritual staging.</li>
                  <li><strong>Aisle &amp; Entrance Elements:</strong> Decorative welcome gates, floral entryway runners, pathway lanterns, and personalized signage welcoming wedding guests.</li>
                </ul>
                <p className="leading-relaxed">
                  All decorative installations are coordinated with local decorators and technicians, with setup schedules planned in advance of ceremony start times.
                </p>
              </div>

              {/* Catering & Guest Hospitality Coordination */}
              <div id="catering" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Catering Coordination &amp; Guest Hospitality Options
                </h2>
                <div className="h-64 sm:h-72 relative rounded-xl overflow-hidden mb-6 shadow-sm not-prose">
                  <Image
                    src="/images/hathras/hathras-wedding-catering-hospitality.webp"
                    alt="Representative visual of an organized wedding banquet buffet and guest dining hospitality arrangement"
                    fill
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover"
                  />
                </div>
                <p className="leading-relaxed mb-4">
                  Food and hospitality form the heart of celebratory gatherings in Hathras. Eventkro provides catering coordination where dining concepts and service options can be discussed according to your requirements and vendor availability:
                </p>
                <ul className="space-y-2 mb-4">
                  <li><strong>Vegetarian Menu Options:</strong> North Indian menu selections, seasonal vegetable gravies, rice dishes, dals, and breads can be planned and coordinated with catering teams based on your preferences.</li>
                  <li><strong>Traditional Sweet Options:</strong> Celebratory sweet options—such as warm gulab jamun, jalebi with rabri, or halwas—can be discussed upon request, subject to catering vendor availability.</li>
                  <li><strong>Live Chaat Stall Options:</strong> Street-food stall options such as aloo tikki, golgappe, or papdi chaat can be coordinated for pre-wedding or wedding day dining depending on venue arrangements.</li>
                  <li><strong>Buffet &amp; Service Arrangements:</strong> Buffet counter arrangements, beverage service stations, and dining flow options can be planned according to guest gathering size and venue layout.</li>
                </ul>
                <p className="leading-relaxed">
                  All menu selections, dining formats, and service arrangements are optional and finalized after mutual discussion according to your event specifications.
                </p>
              </div>

              {/* Coordination at Customer's Chosen Venue */}
              <div id="venues" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Coordination at Your Chosen Wedding Venue in Hathras
                </h2>
                <p className="leading-relaxed mb-4">
                  Eventkro does not enforce predefined venue selections. Instead, our team coordinates setups directly at whichever location your family chooses to celebrate across Hathras district:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose mb-6">
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-1">Open Marriage Lawns &amp; Vatikas</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Layout planning for outdoor grounds along major highway corridors, including stage positioning, lawn lighting, pandal weather protection, and generator routing.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-1">Banquet Halls &amp; Community Bhawans</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Indoor stage backdrops, space-efficient mandap dimensions respecting ceiling heights, acoustic sound balancing, and guest seating arrangements.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-1">Private Residences &amp; Havelis</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Home transformations for intimate Haldi, Mehendi, or wedding rituals—utilizing family courtyards, terraces, and gardens with tasteful decorative accents.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-1">Farmhouses &amp; Rural Properties</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Rustic or grand wedding setups at private farm properties, coordinating temporary infrastructure, lighting cables, and dining zones tailored to the ground layout.
                    </p>
                  </div>
                </div>
                <p className="leading-relaxed">
                  Coordination teams review venue layouts and power access points prior to event dates to plan vendor staging and ensure smooth ceremony transitions.
                </p>
              </div>

              {/* Service Areas Coverage */}
              <div id="service-areas" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Wedding Planning Service Coverage Across Hathras District
                </h2>
                <p className="leading-relaxed mb-4">
                  Wedding coordination and decor logistics can be arranged across central <strong>Hathras</strong> and confirmed regional tehsils:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 not-prose mb-6">
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
                    <h4 className="font-bold text-gray-900 text-base mb-1">Hathras City</h4>
                    <p className="text-gray-600 text-xs">Lawns, banquet halls &amp; home wedding setups</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
                    <h4 className="font-bold text-gray-900 text-base mb-1">Sasni</h4>
                    <p className="text-gray-600 text-xs">Mandap decor, pre-wedding rituals &amp; catering</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
                    <h4 className="font-bold text-gray-900 text-base mb-1">Sadabad</h4>
                    <p className="text-gray-600 text-xs">Outdoor marriage lawns &amp; stage illumination</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
                    <h4 className="font-bold text-gray-900 text-base mb-1">Sikandra Rao</h4>
                    <p className="text-gray-600 text-xs">Ceremonial coordination &amp; venue staging</p>
                  </div>
                </div>
                <p className="leading-relaxed">
                  Service dispatch to towns and villages across Hathras district is subject to vendor availability, travel logistics, and event scope confirmed during initial consultations.
                </p>
              </div>

              {/* Custom Quote Workflow */}
              <div id="workflow" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  How Our Wedding Coordination Workflow Works
                </h2>
                <p className="leading-relaxed mb-4">
                  We follow a straightforward, five-step planning workflow to ensure your requirements are understood and executed smoothly:
                </p>
                <div className="space-y-4 not-prose mb-6">
                  <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <span className="w-8 h-8 rounded-full bg-[#ff5722] text-white flex items-center justify-center font-bold text-sm shrink-0">1</span>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base mb-1">Requirements Discussion</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Share your planned wedding dates, chosen venue type, guest gathering size, and decoration or catering preferences with our team.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <span className="w-8 h-8 rounded-full bg-[#ff5722] text-white flex items-center justify-center font-bold text-sm shrink-0">2</span>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base mb-1">Consultation &amp; Scope Review</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        We discuss design concepts, ceremony schedules, sound/lighting specifications, and any optional styling preferences tailored to your venue.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <span className="w-8 h-8 rounded-full bg-[#ff5722] text-white flex items-center justify-center font-bold text-sm shrink-0">3</span>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base mb-1">Customized Quotation</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        We prepare a requirement-based custom quote based on the services, decor scale, and coordination support requested for your celebration.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <span className="w-8 h-8 rounded-full bg-[#ff5722] text-white flex items-center justify-center font-bold text-sm shrink-0">4</span>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base mb-1">Confirmation &amp; Planning</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Upon mutual agreement, dates and service components are locked in, and setup schedules are established with participating vendors.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <span className="w-8 h-8 rounded-full bg-[#ff5722] text-white flex items-center justify-center font-bold text-sm shrink-0">5</span>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base mb-1">Vendor &amp; Setup Coordination</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Our coordination team assists with vendor scheduling, decor setup progress, and event day transitions according to the agreed plan.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Eventkro */}
              <div id="why-choose" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Why Choose Eventkro for Your Hathras Wedding
                </h2>
                <p className="leading-relaxed mb-4">
                  Planning a wedding requires reliable support and clear coordination. Here is what defines Eventkro’s wedding coordination services:
                </p>
                <div className="space-y-4 not-prose mb-6">
                  <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <FaCheckCircle className="text-[#ff5722] text-xl shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-base mb-1">Customized Planning Without Rigid Bundles</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Every decor concept, ceremony schedule, and service scope is planned around your family traditions, preferred venue, and designated budget.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <FaCheckCircle className="text-[#ff5722] text-xl shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-base mb-1">Coordinated Planning Support</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Our team can help coordinate requirements, vendor scheduling, and setup planning according to the confirmed event scope, rather than having you manage disparate vendors alone.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <FaCheckCircle className="text-[#ff5722] text-xl shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-base mb-1">Requirement-Based Quotations</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Pricing is discussed according to selected services, venue layout, and event scope, allowing you to plan with clarity.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <FaCheckCircle className="text-[#ff5722] text-xl shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-base mb-1">Setup &amp; Schedule Coordination</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        For confirmed bookings, our team assists with vendor setup schedules and ceremonial transitions, helping keep celebration days organized.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Frequently Asked Questions */}
              <div id="faq" className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 pb-2 border-b-2 border-gray-100">
                  Frequently Asked Questions
                </h2>
                <HathrasWeddingFaqAccordion items={faqItems} />
              </div>

            </div>

            {/* Right/Sidebar Sticky Column */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">

                {/* Quote Request Box */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Request a Custom Quote</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    Share your wedding dates, guest gathering size, and service preferences. We will discuss your event specifications and prepare a custom quotation.
                  </p>
                  <Link
                    href="/contact"
                    className="btn-primary w-full text-center block py-3 rounded-lg shadow-lg font-semibold mb-4"
                  >
                    Discuss Wedding Requirements
                  </Link>
                  <a
                    href="https://wa.me/917017520811?text=Hi%20Eventkro,%20I%20want%20to%20discuss%20wedding%20planning%20in%20Hathras."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-2.5 rounded-lg bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2 text-sm font-semibold transition-colors mb-4 shadow-sm"
                  >
                    <FaWhatsapp className="text-lg" /> Chat on WhatsApp
                  </a>
                  <div className="text-center text-gray-500 text-xs border-t border-gray-200 pt-4">
                    Or speak with our team: <br />
                    <strong className="text-gray-800 text-sm font-semibold block mt-1">+91 7017520811</strong>
                    <span className="text-gray-600 text-xs block">+91 9869950233</span>
                  </div>
                </div>

                {/* Regional Wedding Cities Box */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Regional Wedding Services</h3>
                  <div className="flex flex-col gap-2">
                    <Link
                      href="/wedding-planner-in-aligarh"
                      className="text-gray-600 hover:text-[#ff5722] text-sm py-2 border-b border-gray-200 transition-colors"
                    >
                      Wedding Planner in Aligarh →
                    </Link>
                    <Link
                      href="/wedding-planner-in-agra"
                      className="text-gray-600 hover:text-[#ff5722] text-sm py-2 border-b border-gray-200 transition-colors"
                    >
                      Wedding Planner in Agra →
                    </Link>
                    <Link
                      href="/wedding-planner-in-mathura"
                      className="text-gray-600 hover:text-[#ff5722] text-sm py-2 border-b border-gray-200 transition-colors"
                    >
                      Wedding Planner in Mathura →
                    </Link>
                    <Link
                      href="/wedding-planner-in-firozabad"
                      className="text-gray-600 hover:text-[#ff5722] text-sm py-2 border-b border-gray-200 transition-colors"
                    >
                      Wedding Planner in Firozabad →
                    </Link>
                    <Link
                      href="/wedding-planner-in-shikohabad"
                      className="text-gray-600 hover:text-[#ff5722] text-sm py-2 transition-colors"
                    >
                      Wedding Planner in Shikohabad →
                    </Link>
                  </div>
                </div>

                {/* Nearby Regional Event Hubs */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Regional Event Planning</h3>
                  <p className="text-gray-600 text-xs mb-4 leading-relaxed">
                    Hosting birthdays, devotional gatherings, or general celebrations in neighboring districts?
                  </p>
                  <Link
                    href="/event-planner-in-aligarh"
                    className="text-[#ff5722] hover:underline text-sm font-semibold block mb-2"
                  >
                    Aligarh Event Planner →
                  </Link>
                  <Link
                    href="/services"
                    className="text-[#ff5722] hover:underline text-sm font-semibold block"
                  >
                    View All Services Directory →
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
            Ready to Discuss Your Wedding Celebrations in Hathras?
          </h2>
          <p className="text-lg mb-8 text-white/95 leading-relaxed">
            From mandap decor and vibrant Haldi-Mehendi celebrations to catering and setup coordination, Eventkro helps you organize your wedding with care and personal attention. Contact us today for a custom quotation.
          </p>
          <Link
            href="/contact"
            className="bg-white text-[#ff5722] hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md inline-block"
          >
            Discuss Your Wedding Requirements
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
