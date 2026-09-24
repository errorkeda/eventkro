import Link from 'next/link';
import Image from 'next/image';
import { FaWhatsapp, FaCalendarAlt, FaCheckCircle, FaHeart, FaMusic, FaUtensils, FaUsers } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AligarhWeddingFaqAccordion, { FaqItem } from './AligarhWeddingFaqAccordion';

const faqItems: FaqItem[] = [
  {
    question: 'How does wedding planning pricing work with Eventkro in Aligarh?',
    answer: 'Eventkro operates on a transparent, requirement-based pricing model rather than rigid pre-packaged bundles. Because every wedding differs in ritual duration, guest count, chosen venue layout, decoration scale, sound and lighting setup, and catering requirements, we consult directly with you first. We then prepare a clear, itemized quotation customized specifically to your planned celebration and budget.'
  },
  {
    question: 'Which wedding functions and pre-wedding ceremonies do you manage in Aligarh?',
    answer: 'We manage the complete sequence of wedding celebrations. This includes Roka and engagement setups, vibrant Haldi functions with marigold decor, Mehendi artist coordination and seating, high-energy Sangeet stage and lighting setups, traditional baraat entries, sacred mandap wedding ceremonies, and elegant reception evenings.'
  },
  {
    question: 'Can you plan and decorate weddings at our chosen marriage lawn, hotel, or private property?',
    answer: 'Yes. Eventkro provides comprehensive wedding coordination and decoration at your chosen venue. Whether you have booked an open-air marriage lawn, a banquet hall, a hotel venue, or wish to host the celebrations at your private residence or family property in Aligarh, Khair, Gabhana, or Jattari, our team manages on-site logistics, staging, and styling.'
  },
  {
    question: 'Do you provide wedding planning services in Khair, Gabhana, and Jattari?',
    answer: 'Yes. In addition to central Aligarh, our on-site coordination and logistics network actively covers nearby confirmed towns including Khair, Gabhana, and Jattari. We transport staging, floral decor, lighting rigs, and coordination teams directly to your venue location.'
  },
  {
    question: 'Can we book individual wedding services like only mandap decoration, sound, or catering?',
    answer: 'Yes. While many families in Aligarh prefer complete end-to-end wedding management, Eventkro readily accommodates modular bookings. You can hire us specifically for stage and mandap floral styling, professional sound and stage lighting, Haldi/Mehendi thematic setups, or wedding catering coordination based on your specific requirements.'
  },
  {
    question: 'How early should we discuss our wedding requirements with Eventkro?',
    answer: 'For comprehensive wedding coordination, we recommend reaching out 2 to 4 months in advance. This ensures sufficient time for venue layout visits, personalized theme and mandap designing, tasting and menu curation, and dependable vendor scheduling during peak wedding dates.'
  }
];

export default function AligarhWeddingPlannerPage() {
  return (
    <main className="bg-white min-h-screen">
      <Header />

      {/* Hero Banner Section */}
      <section className="relative min-h-[60vh] sm:min-h-[65vh] pt-24 sm:pt-28 pb-12 sm:pb-16 flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <Image
          src="/images/aligarh/wedding-planner-in-aligarh-hero.webp"
          alt="Wedding planner in Aligarh for customized marriage ceremonies and reception coordination"
          fill
          priority
          sizes="100vw"
          className="object-cover transition-transform duration-1000 z-0"
        />
        <div className="container mx-auto px-4 relative z-20 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight leading-tight">
            Wedding Planner in Aligarh for Meaningful Celebrations &amp; Flawless Ceremonies
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
            Personalized wedding planning, bespoke mandap styling, pre-wedding ceremonies, and complete event coordination for families in Aligarh, Khair, Gabhana, and Jattari.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 rounded-lg shadow-lg font-semibold"
            >
              Request a Free Quote
            </Link>
            <a
              href="https://wa.me/917017520811?text=Hi%20Eventkro,%20I%20want%20to%20discuss%20wedding%20planning%20in%20Aligarh."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white border-none flex items-center justify-center gap-2 shadow-lg font-semibold transition-colors"
            >
              <FaWhatsapp className="text-xl" /> WhatsApp Us
            </a>
            <Link
              href="/event-planner-in-aligarh"
              className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold transition-colors"
            >
              Aligarh General Events
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

              {/* Introduction Section */}
              <div id="intro" className="prose max-w-none text-gray-700">
                <p className="text-lg leading-relaxed mb-4 font-medium text-gray-800">
                  Planning a wedding in Aligarh is an extraordinary milestone that brings two families together for multi-day festivities. At Eventkro, we believe every wedding celebration should genuinely reflect your family’s traditions, aesthetic preferences, and personal style. Rather than forcing rigid pre-set packages or arbitrary pricing, we work closely with you from the initial consultation to craft a personalized wedding plan and transparent, itemized quotation aligned with your budget.
                </p>
                <p className="leading-relaxed mb-6">
                  From intimate pre-wedding functions like Roka, Haldi, and Mehendi to high-energy Sangeet evenings, traditional mandap rituals, and grand banquet receptions, our team coordinates every detail. We can assist in coordinating decorators, caterers, sound technicians, lighting crews, and guest hospitality so that you and your loved ones can celebrate without stress.
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

              {/* About Section */}
              <div id="about" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  About Eventkro: Dedicated Wedding Planners for Aligarh Families
                </h2>
                <p className="leading-relaxed mb-4">
                  Welcome to Eventkro, your trusted wedding planning and coordination partner across the Aligarh region. Aligarh is a city of rich cultural heritage and close-knit family values, where weddings are celebrated as joyful, multi-generational gatherings. Whether you are hosting an expansive celebration on an open marriage lawn, an elegant ceremony in a banquet hall, or intimate rituals at your family home, our planners ensure every moment unfolds gracefully.
                </p>
                <p className="leading-relaxed mb-4">
                  Our core approach is rooted in clear communication, dependable logistics, and creative craftsmanship. We coordinate every service provider involved in your wedding—ensuring the floral setup arrives fresh, lighting cues align with ceremony milestones, catering counters open right on schedule, and guest hospitality remains warm and attentive throughout the festivities.
                </p>
                <p className="leading-relaxed">
                  We maintain complete transparency in our planning process. We can conduct venue walkthroughs where needed, listen to your family&apos;s specific ceremonial needs, and tailor our coordination to the scale you desire. With Eventkro helping with coordination, your family can focus on celebrating while operational details are managed.
                </p>
              </div>

              {/* Core Wedding Planning Services Section */}
              <div id="services" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Our Core Wedding Management Capabilities
                </h2>
                <p className="leading-relaxed mb-6">
                  Planning a wedding involves synchronizing multiple vendors, managing ceremony timelines, and keeping guests comfortable across several days. Eventkro provides comprehensive support across every critical pillar of your wedding celebration. You can also explore our broader regional capabilities on our <Link href="/services" className="text-[#ff5722] hover:underline font-semibold">services directory</Link>.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-8">
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <FaHeart className="text-[#ff5722] text-xl" />
                      <h3 className="text-xl font-bold text-gray-900">Custom Mandap &amp; Stage Styling</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Handcrafted mandap architecture, fresh floral canopies, decorative entry arches, LED backdrop walls, and customized seating layouts designed specifically for your venue.
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <FaCalendarAlt className="text-[#ff5722] text-xl" />
                      <h3 className="text-xl font-bold text-gray-900">Ceremony &amp; Timeline Management</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Structured coordination for every pre-wedding and wedding day ritual—guaranteeing smooth transitions between ceremonies, baraat arrivals, and dining sessions.
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <FaUtensils className="text-[#ff5722] text-xl" />
                      <h3 className="text-xl font-bold text-gray-900">Requirement-Based Catering Coordination</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Discussion and coordination of customizable menu options based on your preferences, including North Indian dishes, pure vegetarian dining, live chaat counters, and celebratory sweets.
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <FaMusic className="text-[#ff5722] text-xl" />
                      <h3 className="text-xl font-bold text-gray-900">Professional Sound &amp; Illumination</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Crystal-clear audio setups for rituals and Vedic chanting, powerful sound systems for Sangeet dance performances, ambient lawn lighting, and architectural floodlights.
                    </p>
                  </div>
                </div>
              </div>

              {/* Multi-Day Rituals Section with Haldi/Mehendi Image */}
              <div id="ceremonies" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Complete Pre-Wedding &amp; Wedding Day Ritual Coordination
                </h2>
                <div className="h-64 sm:h-72 relative rounded-xl overflow-hidden mb-6 shadow-sm not-prose">
                  <Image
                    src="/images/aligarh/aligarh-haldi-mehendi-celebration.webp"
                    alt="Vibrant Haldi and Mehendi ritual setup with marigold decor in Aligarh"
                    fill
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover"
                  />
                </div>
                <p className="leading-relaxed mb-4">
                  Indian weddings are a continuous journey of cultural rituals that begin well before the pheras. Eventkro provides end-to-end planning support across the complete ritual calendar:
                </p>
                <div className="space-y-4 not-prose mb-6">
                  <div className="p-5 bg-orange-50/60 rounded-xl border border-orange-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Roka &amp; Engagement Celebrations</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Intimate stage setups, floral backdrop rings, personalized name boards, and ambient family seating for formal ring exchange rituals and initial family introductions.
                    </p>
                  </div>
                  <div className="p-5 bg-orange-50/60 rounded-xl border border-orange-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Haldi &amp; Mehendi Ceremonies</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Cheerful yellow and marigold floral themes, traditional decorative wooden swings (jhulas), brass urlis with flower petals, dedicated comfortable seating for mehendi artists, and upbeat background music setups.
                    </p>
                  </div>
                  <div className="p-5 bg-orange-50/60 rounded-xl border border-orange-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Sangeet &amp; Dance Nights</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      High-impact stage platforms, moving-head dynamic lighting, crystal-clear acoustic sound mixing for family choreography, DJ coordination, and interactive dance floors.
                    </p>
                  </div>
                  <div className="p-5 bg-orange-50/60 rounded-xl border border-orange-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Baraat &amp; Grand Welcomes</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Coordinated baraat processions, traditional dhol and brass band management, floral varmala stage arrangements, and warm guest reception protocols with rosewater sprinkling and garlands.
                    </p>
                  </div>
                  <div className="p-5 bg-orange-50/60 rounded-xl border border-orange-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Sacred Mandap Wedding Ceremony</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Elevated mandap setups adorned with fresh flowers and traditional drapes, sacred havan kund arrangements, organized samagri staging, and dedicated seating for family elders and the pandit.
                    </p>
                  </div>
                  <div className="p-5 bg-orange-50/60 rounded-xl border border-orange-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Grand Reception Evenings</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Sophisticated reception stage backdrops, ambient architectural lighting, formal photo-op spaces, organized guest greeting lines, and multi-course culinary banquets.
                    </p>
                  </div>
                </div>
              </div>

              {/* Mandap & Decoration Section with Mandap Image */}
              <div id="mandap-decor" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Bespoke Mandap Styling &amp; Wedding Decoration
                </h2>
                <div className="h-64 sm:h-72 relative rounded-xl overflow-hidden mb-6 shadow-sm not-prose">
                  <Image
                    src="/images/aligarh/aligarh-wedding-mandap-decoration.webp"
                    alt="Floral mandap decoration and wedding stage styling in Aligarh"
                    fill
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover"
                  />
                </div>
                <p className="leading-relaxed mb-4">
                  The mandap represents the sacred heart of your wedding ceremony, where sacred vows and blessings are exchanged. At Eventkro, we design bespoke mandaps and stage layouts that harmonize beautifully with your chosen venue—whether it is a lush green outdoor marriage lawn, an air-conditioned banquet hall, or a private family courtyard.
                </p>
                <p className="leading-relaxed mb-4">
                  Our decoration offerings include:
                </p>
                <ul className="space-y-2 mb-4">
                  <li><strong>Floral Artistry:</strong> Freshly sourced local and seasonal flowers including marigolds, roses, jasmines, tuberoses, carnations, and orchids crafted into arches, pillars, and cascading ceiling drapes.</li>
                  <li><strong>Structural Mandap Concepts:</strong> Traditional dome pavilions, four-pillar wooden chhatris, contemporary minimalist geometric frames, and floral canopy structures.</li>
                  <li><strong>Illumination &amp; Ambiance:</strong> Warm ambient fairy lights, crystal chandeliers, antique brass hanging lamps, pathway lanterns, and focused stage spotlights that highlight ceremony rituals.</li>
                  <li><strong>Aisle &amp; Entrance Styling:</strong> Grand entrance gates, floral runners, illuminated pathways, and welcome photo backdrops that set an inviting tone for arriving guests.</li>
                </ul>
                <p className="leading-relaxed">
                  Every decorative element is constructed safely prior to ceremony start times and promptly cleared following your celebrations, leaving your venue pristine.
                </p>
              </div>

              {/* Catering & Hospitality Section with Catering Image */}
              <div id="catering-hospitality" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Wedding Catering Coordination &amp; Guest Hospitality
                </h2>
                <div className="h-64 sm:h-72 relative rounded-xl overflow-hidden mb-6 shadow-sm not-prose">
                  <Image
                    src="/images/aligarh/aligarh-wedding-catering-hospitality.webp"
                    alt="Wedding banquet catering buffet and guest hospitality management in Aligarh"
                    fill
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover"
                  />
                </div>
                <p className="leading-relaxed mb-4">
                  Food and hospitality are essential parts of any Indian wedding celebration. Eventkro provides catering coordination services where menu options, dining style, and service levels can be discussed and customized around your family&apos;s preferences and budget.
                </p>
                <p className="leading-relaxed mb-4">
                  Examples of catering options and service styles that can be coordinated upon request include:
                </p>
                <ul className="space-y-2 mb-4">
                  <li><strong>North Indian Buffet Options (Example):</strong> Curated selections such as paneer curries, seasonal vegetable gravies, dal, biryani, and tandoori breads can be arranged based on your preferences.</li>
                  <li><strong>Pure Vegetarian Selections:</strong> Options for dedicated vegetarian menu planning, with dishes coordinated according to your family&apos;s dietary guidelines.</li>
                  <li><strong>Interactive Live Chaat Counters (Optional):</strong> Popular snack counters such as aloo tikki, golgappas, or dahi bhalla can be coordinated for pre-wedding functions if desired.</li>
                  <li><strong>Celebratory Dessert Displays:</strong> Traditional sweet options such as warm jalebi, gulab jamun, halwa, or ice creams can be included as part of your dessert planning.</li>
                  <li><strong>Dining &amp; Hospitality Support:</strong> Support for buffet counter management, beverage distribution, and dining area service can be coordinated based on your requirements.</li>
                </ul>
                <p className="leading-relaxed">
                  All menu choices, food arrangements, and service scopes are finalized after mutual discussion to match the exact requirements of your event.
                </p>
              </div>

              {/* Coordinating at Customer's Chosen Venue Section */}
              <div id="venues" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Coordinating at Your Chosen Marriage Lawn, Banquet, or Private Property
                </h2>
                <p className="leading-relaxed mb-4">
                  Every family has a preferred venue in mind—whether it is a sprawling open-air marriage lawn, a well-appointed hotel banquet hall, a community resort, or a private family farmhouse or residence. Eventkro does not lock you into proprietary venues; instead, our team adapts our decoration, sound, lighting, and catering coordination seamlessly to whatever venue you select across Aligarh and surrounding areas.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose mb-6">
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-1">Open Marriage Lawns &amp; Gardens</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Complete layout management for spacious outdoor grounds—including weatherproofing, pandal installations, lawn lighting, pathway carpeting, and generator routing.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-1">Hotel Banquets &amp; Function Halls</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Space-optimized stage backdrops, mandap structures respecting indoor ceiling heights, acoustic sound balancing, and elegant guest seating arrangements.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-1">Private Residences &amp; Farmhouses</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Customized home transformations for Haldi, Mehendi, and intimate wedding ceremonies, maximizing courtyard and terrace spaces with tasteful decor.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-1">Community Halls &amp; Resorts</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      End-to-end decor styling, electrical safety checks, staging elevation, and seamless dining space management for medium-to-large wedding gatherings.
                    </p>
                  </div>
                </div>
                <p className="leading-relaxed">
                  Our coordinators conduct in-person site inspections prior to the event date to take exact measurements, check power supply logistics, and design an optimal flow of movement for guests and vendors.
                </p>
              </div>

              {/* Service Areas Section */}
              <div id="service-areas" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Wedding Planning in Aligarh, Khair, Gabhana &amp; Jattari
                </h2>
                <p className="leading-relaxed mb-4">
                  Our on-site coordination network and equipment logistics actively cover central <strong>Aligarh</strong> and confirmed nearby regional towns:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 not-prose mb-6">
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
                    <h4 className="font-bold text-gray-900 text-lg mb-1">Khair</h4>
                    <p className="text-gray-600 text-xs">Marriage lawn decor, mandap styling &amp; catering coordination</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
                    <h4 className="font-bold text-gray-900 text-lg mb-1">Gabhana</h4>
                    <p className="text-gray-600 text-xs">Pre-wedding ceremonies, Haldi-Mehendi &amp; banquet management</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
                    <h4 className="font-bold text-gray-900 text-lg mb-1">Jattari</h4>
                    <p className="text-gray-600 text-xs">Traditional wedding setups, sound staging &amp; hospitality</p>
                  </div>
                </div>
                <p className="leading-relaxed mb-4">
                  Whether your wedding is hosted in central Aligarh or in Khair, Gabhana, or Jattari, our dedicated team manages material transport, labor dispatch, and on-time execution directly at your location.
                </p>
                <p className="leading-relaxed">
                  Need event coordination beyond weddings? Visit our dedicated <Link href="/event-planner-in-aligarh" className="text-[#ff5722] hover:underline font-semibold">Aligarh Event Planner</Link> page for birthdays, devotional programs, and institutional celebrations.
                </p>
              </div>

              {/* Why Choose Eventkro Section */}
              <div id="why-choose" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Why Families in Aligarh Trust Eventkro
                </h2>
                <p className="leading-relaxed mb-4">
                  Entrusting your family’s most sacred occasion to a wedding planner requires absolute confidence. Here is why families across Aligarh choose Eventkro:
                </p>
                <div className="space-y-4 not-prose mb-6">
                  <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <FaCheckCircle className="text-[#ff5722] text-xl shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-base mb-1">Customized Planning Without Fixed Templates</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Every stage design, floral composition, and ritual schedule is customized to your preferred venue, family customs, and budget.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <FaCheckCircle className="text-[#ff5722] text-xl shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-base mb-1">Coordinated Point of Contact</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Reduce the hassle of managing separate decorators, sound providers, and lighting technicians by coordinating through a dedicated planning team.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <FaCheckCircle className="text-[#ff5722] text-xl shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-base mb-1">Requirement-Based Quotations</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Pricing is discussed upfront based on the specific services, venue layout, and scale you select, helping you plan clearly without rigid bundle fees.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <FaCheckCircle className="text-[#ff5722] text-xl shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-base mb-1">On-Site Coordination Capabilities</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        For comprehensive bookings, our team can provide on-site coordination during ceremonies to help manage vendor timelines, setup schedules, and ceremony flow.
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
                <AligarhWeddingFaqAccordion items={faqItems} />
              </div>

            </div>

            {/* Right/Sidebar Sticky Column */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">

                {/* Quote Box */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Request a Custom Quote</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    Share your wedding dates, guest count, and service preferences. We provide a transparent estimate within 24 hours.
                  </p>
                  <Link
                    href="/contact"
                    className="btn-primary w-full text-center block py-3 rounded-lg shadow-lg font-semibold mb-4"
                  >
                    Discuss Wedding Requirements
                  </Link>
                  <a
                    href="https://wa.me/917017520811?text=Hi%20Eventkro,%20I%20want%20to%20discuss%20wedding%20planning%20in%20Aligarh."
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

                {/* Same-City Event Planner Link */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Other Events in Aligarh?</h3>
                  <p className="text-gray-600 text-xs mb-4 leading-relaxed">
                    Planning birthdays, devotional jagratas, katha programs, or institutional events in Aligarh?
                  </p>
                  <Link
                    href="/event-planner-in-aligarh"
                    className="text-[#ff5722] hover:underline text-sm font-semibold block"
                  >
                    View Aligarh Event Planner →
                  </Link>
                </div>

                {/* Regional Wedding Cities Box */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Explore Other Cities</h3>
                  <div className="flex flex-col gap-2">
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
            Ready to Plan Your Dream Wedding in Aligarh?
          </h2>
          <p className="text-lg mb-8 text-white/95 leading-relaxed">
            From sacred mandap rituals and lively Sangeet evenings to banquet dinners, Eventkro handles your wedding with absolute dedication, artistry, and care. Contact us today for a customized quotation.
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
