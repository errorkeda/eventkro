import Link from 'next/link';
import Image from 'next/image';
import { FaWhatsapp, FaCheckCircle, FaUsers, FaMusic, FaUtensils, FaBirthdayCake } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import EtahEventFaqAccordion, { FaqItem } from './EtahEventFaqAccordion';

const faqItems: FaqItem[] = [
  {
    question: 'How does event planning pricing work with Eventkro in Etah?',
    answer: 'Eventkro operates on a requirement-based quotation model rather than offering fixed packages. Pricing is estimated based on your celebration type, venue layout, expected guest gathering, decoration preferences, sound and lighting needs, and catering coordination. Following an initial consultation, we share a transparent, customized estimate tailored to your event scope.'
  },
  {
    question: 'Which types of celebrations and family events can you organize in Etah?',
    answer: 'We coordinate a variety of family and social events across Etah. This includes themed birthday parties, balloon decoration setups, Roka and engagement ceremonies, Haldi and Mehndi setups, anniversaries, naming ceremonies, and housewarming functions, as well as devotional gatherings such as Bhajan Sandhyas and Mata ki Chowki.'
  },
  {
    question: 'Can we coordinate devotional programs like Bhajan Sandhya or Mata ki Chowki in Etah?',
    answer: 'Yes. Devotional programs can be organized with dedicated stage setups, floral bhawan styling, acoustic sound systems suited for devotional singing, seating arrangements with floor carpets and mattresses, and coordination for prasad distribution based on your venue requirements.'
  },
  {
    question: 'Do you provide event planning across Jalesar, Aliganj, and Awagarh?',
    answer: 'Yes. In addition to Etah City, our coordination support extends across confirmed regional areas of Etah district including Jalesar, Aliganj, and Awagarh, subject to date scheduling, venue access, and vendor availability.'
  },
  {
    question: 'Can families book individual services such as only balloon decoration or catering coordination?',
    answer: 'Yes. Families can book modular services based on their specific needs. Whether you require standalone balloon decoration for a birthday party, stage lighting and sound coordination for an evening gathering, or dedicated catering management for a social function, services can be selected individually or combined.'
  },
  {
    question: 'How early should we discuss our event requirements with Eventkro?',
    answer: 'We recommend discussing your requirements as early as practical. The ideal planning time depends on the event type, guest count, venue, decoration scope, and services required. Contact Eventkro with your event date and requirements so availability and planning needs can be discussed.'
  }
];

export default function EtahEventPlannerPage() {
  return (
    <main className="bg-white min-h-screen">
      <Header />

      {/* Hero Banner Section */}
      <section className="relative min-h-[60vh] sm:min-h-[65vh] pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <Image
          src="/images/etah/event-planner-in-etah-hero.webp"
          alt="Event planning and celebration stage decoration in Etah"
          fill
          priority
          sizes="100vw"
          className="object-cover transition-transform duration-1000 z-0"
        />

        <div className="container mx-auto px-4 relative z-20 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight leading-tight">
            Event Planner in Etah for Family Celebrations &amp; Special Events
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
            Customized event planning, birthday balloon decoration, Roka and pre-wedding celebrations, devotional gatherings, and catering coordination across Etah City, Jalesar, Aliganj, and Awagarh.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 rounded-lg shadow-lg font-semibold"
            >
              Get Custom Quote
            </Link>
            <a
              href="https://wa.me/917017520811?text=Hi%20Eventkro,%20I%20want%20to%20discuss%20an%20event%20in%20Etah."
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
              Plan Your Event
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
                  Planning an upcoming family celebration or special occasion in Etah? At Eventkro, we believe every gathering carries its own significance and personal character. Whether you are hosting a child’s milestone birthday party, an intimate Roka ceremony, a joyous pre-wedding function, or a sacred devotional gathering, we provide customized, requirement-based event planning designed around your preferences.
                </p>
                <p className="leading-relaxed mb-6">
                  Instead of offering fixed packages or arbitrary pricing tiers, we consult directly with you on your celebration goals, venue setup, guest gathering size, visual decoration preferences, sound requirements, and catering preferences. Our coordination team manages the logistics and vendor scheduling so you can focus on enjoying the celebration with your loved ones.
                </p>
                <div className="mb-8">
                  <Link
                    href="/contact"
                    className="btn-primary inline-block text-center px-6 py-2.5 rounded-lg shadow-md font-semibold bg-[#ff5722] hover:bg-[#e64a19] text-white"
                  >
                    Discuss Your Requirements
                  </Link>
                </div>
              </div>

              {/* About Section */}
              <div id="about" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  About Eventkro: Event Planning &amp; Management in Etah
                </h2>
                <p className="leading-relaxed mb-4">
                  Welcome to Eventkro, your dedicated event planning partner across the Etah district. Positioned in western Uttar Pradesh and connected with the rich social and cultural traditions of the region, Etah is known for its warm hospitality, multigenerational families, and vibrant community celebrations. Social gatherings here span intimate terrace birthday parties to lively family ceremonies and devotional gatherings.
                </p>
                <p className="leading-relaxed mb-4">
                  Our event management team brings structured coordination, creative design sensitivity, and reliable vendor management to your occasion. We coordinate with decorators, culinary teams, sound technicians, and lighting providers to ensure each phase of your event schedule proceeds smoothly without operational delays.
                </p>
                <p className="leading-relaxed">
                  We believe in clear communication and transparent planning. We take time to understand your vision, review your chosen setup location or home layout, and share an itemized, custom quote reflecting your specific requirements. You can also explore our regional offerings on our <Link href="/services" className="text-[#ff5722] hover:underline font-semibold">services directory</Link>.
                </p>
              </div>

              {/* Core Event Planning Capabilities */}
              <div id="capabilities" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Core Event Planning &amp; Coordination Capabilities
                </h2>
                <p className="leading-relaxed mb-6">
                  Eventkro provides structured coordination across the essential elements of celebration planning in Etah. Whether you need full end-to-end event management or specific assistance for decor and catering, explore our core capabilities below:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-8">
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <FaBirthdayCake className="text-[#ff5722] text-xl" />
                      <h3 className="text-xl font-bold text-gray-900">Visual Staging &amp; Decoration</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Themed stage backdrops, creative balloon installations, floral photo corners, welcoming entryway arches, and fabric drapery customized for your venue dimensions.
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <FaMusic className="text-[#ff5722] text-xl" />
                      <h3 className="text-xl font-bold text-gray-900">Sound &amp; Lighting Coordination</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Balanced acoustic sound systems for devotional singing and family music, wireless microphones, focused spotlighting, ambient warm illumination, and generator routing.
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <FaUtensils className="text-[#ff5722] text-xl" />
                      <h3 className="text-xl font-bold text-gray-900">Requirement-Based Catering</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Tailored multi-course buffets, authentic North Indian vegetarian menus, celebratory sweet platters, and live snack counters coordinated with experienced culinary teams.
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <FaUsers className="text-[#ff5722] text-xl" />
                      <h3 className="text-xl font-bold text-gray-900">On-Site Event Coordination</h3>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Hands-on coordination managers present during your function to guide vendor setup timings, verify audio checks, coordinate dining flow, and manage timeline milestones.
                    </p>
                  </div>
                </div>
              </div>

              {/* Birthday Parties & Decoration Section */}
              <div id="birthday" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Birthday Parties &amp; Balloon Decoration in Etah
                </h2>

                <div className="h-64 sm:h-72 relative rounded-xl overflow-hidden mb-6 shadow-sm not-prose">
                  <Image
                    src="/images/etah/birthday-balloon-decoration-etah.webp"
                    alt="Birthday balloon decoration and cake backdrop setup in Etah"
                    fill
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover"
                  />
                </div>

                <p className="leading-relaxed mb-4">
                  From a child’s milestone first birthday to lively cartoon themes, teenage celebrations, or golden milestone birthdays for family elders, Eventkro designs joyful and celebratory birthday environments across Etah.
                </p>
                <p className="leading-relaxed mb-4">
                  We adapt our setups to your chosen venue. For intimate home celebrations in residential colonies across Etah City, Jalesar, Aliganj, or Awagarh, we create neat, space-conscious setups including themed cake table backdrops, organic balloon garlands, numeric LED lights, and welcoming name signboards. For gatherings hosted in local banquet halls or party lawns, we design expansive balloon arches, photo booth installations, and themed entrance pathways.
                </p>
                <p className="leading-relaxed">
                  Color palettes and themes can be customized to your preference, including jungle safari, royal prince/princess, cartoon adventures, vintage floral, or elegant metallic styling. Optional celebration coordination such as music setups, game coordinators, and snack counters can be arranged upon discussion.
                </p>
              </div>

              {/* Roka, Engagement & Family Celebrations Section */}
              <div id="family-events" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Roka, Engagement &amp; Family Celebrations in Etah
                </h2>

                <div className="h-64 sm:h-72 relative rounded-xl overflow-hidden mb-6 shadow-sm not-prose">
                  <Image
                    src="/images/etah/roka-engagement-decoration-etah.webp"
                    alt="Roka and engagement ceremony decoration setup in Etah"
                    fill
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover"
                  />
                </div>

                <p className="leading-relaxed mb-4">
                  From formal ring ceremonies to festive family milestones, Eventkro provides thoughtful coordination for Roka, engagement, and family celebration occasions:
                </p>
                <div className="space-y-4 not-prose mb-6">
                  <div className="p-5 bg-orange-50/60 rounded-xl border border-orange-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Roka &amp; Engagement Ceremonies</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Floral backdrop staging, couple seating setups, personalized welcome easels, and ambient sound management for ring exchanges and formal family blessings.
                    </p>
                  </div>
                  <div className="p-5 bg-orange-50/60 rounded-xl border border-orange-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Haldi &amp; Tel-Ban Rituals</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Cheerful yellow and orange marigold styling, traditional wooden swings, brass urlis with flower petals, and festive low-seating arrangements for close family members.
                    </p>
                  </div>
                  <div className="p-5 bg-orange-50/60 rounded-xl border border-orange-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Mehndi Celebrations</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Colorful fabric canopy drapes, comfortable bolster seating for henna artists and guests, themed decorative props, and pleasant background music coordination.
                    </p>
                  </div>
                  <div className="p-5 bg-orange-50/60 rounded-xl border border-orange-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Family Anniversaries &amp; Gatherings</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Silver or golden milestone anniversary backdrops, family photo display corners, dinner buffet coordination, and pleasant acoustic entertainment for reunions.
                    </p>
                  </div>
                </div>
                <p className="leading-relaxed">
                  For families planning multi-day weddings with extensive mandap setups and complete wedding-day management, requirements can be discussed with our team as we prepare dedicated wedding coordination services for the region.
                </p>
              </div>

              {/* Devotional & Religious Programs Section */}
              <div id="devotional" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Devotional &amp; Spiritual Event Management in Etah
                </h2>

                <div className="h-64 sm:h-72 relative rounded-xl overflow-hidden mb-6 shadow-sm not-prose">
                  <Image
                    src="/images/etah/devotional-event-setup-etah.webp"
                    alt="Devotional event stage and bhawan decoration setup in Etah"
                    fill
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover"
                  />
                </div>

                <p className="leading-relaxed mb-4">
                  Spiritual and devotional gatherings are a cherished element of community life across the Etah district. Organizing a sacred function requires respectful aesthetics, organized crowd seating, and acoustic clarity so devotees can participate peacefully. Eventkro provides comprehensive coordination for religious programs:
                </p>
                <div className="space-y-4 not-prose mb-6">
                  <div className="p-5 bg-orange-50/60 rounded-xl border border-orange-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Khatu Shyam Bhajan Sandhya</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Stage shringar with fresh floral drapes and fragrant garlands, akhand jyoti arrangements, ambient devotional lighting, and clear sound systems for bhajan singers and musicians.
                    </p>
                  </div>
                  <div className="p-5 bg-orange-50/60 rounded-xl border border-orange-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Mata ka Jagrata &amp; Chowki</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Floral bhawan and sacred durbar staging, red and gold fabric drapes, carpeted floor seating with white covers and bolsters, and audio checkpoints for night-long praise.
                    </p>
                  </div>
                  <div className="p-5 bg-orange-50/60 rounded-xl border border-orange-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Shrimad Bhagwat Katha Staging</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Elevated Vyas Peeth setup, canopy or pandal layout planning, structured devotee seating rows, clear acoustic speech amplification, and prasad distribution desk coordination.
                    </p>
                  </div>
                  <div className="p-5 bg-orange-50/60 rounded-xl border border-orange-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">Sundarkand &amp; Ramayan Path</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Floor seating arrangements with clean mattresses and cushions, low-height wooden chowki staging for sacred texts, and warm ambient lighting suitable for home or temple halls.
                    </p>
                  </div>
                </div>
                <p className="leading-relaxed">
                  We handle every logistical detail respectfully, including stage elevation, sound checks, lighting, and prasad counters, ensuring a serene and spiritually uplifting atmosphere for all attendees.
                </p>
              </div>

              {/* Event Venues Coordination Section */}
              <div id="venues" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Event Coordination at Your Chosen Venue in Etah
                </h2>
                <p className="leading-relaxed mb-4">
                  Eventkro does not enforce predefined venue selections. Our team coordinates setups directly at whichever location your family chooses to celebrate across the Etah district:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose mb-6">
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-1">Open Lawns &amp; Vatikas</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Outdoor stage positioning, perimeter illumination, lawn seating arrangements, dining counter flow, and power routing along local highway corridors.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-1">Banquet Halls &amp; Community Bhawans</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Space-efficient indoor stage backdrops, ceiling drape styling respecting hall heights, acoustic sound balancing, and guest greeting areas.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-1">Private Residences &amp; Courtyards</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Home transformations for birthdays, Haldi, or path ceremonies—utilizing family courtyards, terraces, and living rooms with tasteful balloon or floral accents.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-1">Farmhouses &amp; Rural Properties</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Outdoor setups on private rural lands, coordinating temporary lighting wiring, canopy coverings, and dedicated food preparation and buffet areas.
                    </p>
                  </div>
                </div>
                <p className="leading-relaxed">
                  Our coordinators review venue dimensions and power points in advance of event dates to plan setup staging and ensure clean, timely transitions.
                </p>
              </div>

              {/* Service Areas Coverage Section */}
              <div id="service-areas" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Event Planning Coverage Across Etah District
                </h2>
                <p className="leading-relaxed mb-4">
                  On-site coordination and decor logistics can be arranged across central <strong>Etah City</strong> and confirmed regional areas:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 not-prose mb-6">
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
                    <h4 className="font-bold text-gray-900 text-base mb-1">Etah City</h4>
                    <p className="text-gray-600 text-xs">Birthdays, Roka, halls &amp; home celebrations</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
                    <h4 className="font-bold text-gray-900 text-base mb-1">Jalesar</h4>
                    <p className="text-gray-600 text-xs">Family rituals, balloon decor &amp; catering</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
                    <h4 className="font-bold text-gray-900 text-base mb-1">Aliganj</h4>
                    <p className="text-gray-600 text-xs">Lawn events, devotional setups &amp; sound</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
                    <h4 className="font-bold text-gray-900 text-base mb-1">Awagarh</h4>
                    <p className="text-gray-600 text-xs">Social functions &amp; ceremonial staging</p>
                  </div>
                </div>
                <p className="leading-relaxed">
                  Service dispatch across Etah district is subject to vendor scheduling, travel logistics, and event scope confirmed during initial consultations.
                </p>
              </div>

              {/* Modular Services Section */}
              <div id="modular-services" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Flexible Service Selection: Individual or Combined Booking
                </h2>
                <p className="leading-relaxed mb-4">
                  Not every event requires complete multi-service coordination. Clients in Etah can discuss individual service modules or combine several services based strictly on their specific requirements:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose mb-6">
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-1">Standalone Decoration</h4>
                    <p className="text-gray-600 text-sm">Book custom balloon styling, photo backdrops, or floral entrance decor for your pre-booked venue or home.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-1">Sound &amp; Stage Lighting</h4>
                    <p className="text-gray-600 text-sm">Coordinate acoustic sound systems, microphones, and stage lights for musical or devotional functions.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-1">Dedicated Catering Coordination</h4>
                    <p className="text-gray-600 text-sm">Organize vegetarian multi-course meals, live food counters, and sweet platters with culinary teams.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-1">Full-Service Event Management</h4>
                    <p className="text-gray-600 text-sm">Combine all decoration, sound, lighting, and catering elements under a dedicated on-site coordinator.</p>
                  </div>
                </div>
                <p className="leading-relaxed">
                  We discuss your event specifications before preparing an itemized, custom quotation so you pay strictly for the services and scale you require.
                </p>
              </div>

              {/* 5-Step Workflow Section */}
              <div id="workflow" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Our 5-Step Event Planning Workflow
                </h2>
                <p className="leading-relaxed mb-4">
                  We follow a straightforward coordination workflow to ensure your celebration requirements are understood and executed smoothly:
                </p>
                <div className="space-y-4 not-prose mb-6">
                  <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <span className="w-8 h-8 rounded-full bg-[#ff5722] text-white flex items-center justify-center font-bold text-sm shrink-0">1</span>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base mb-1">Initial Discussion</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Share your planned event date, venue location, gathering size, and decoration or service preferences with our team.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <span className="w-8 h-8 rounded-full bg-[#ff5722] text-white flex items-center justify-center font-bold text-sm shrink-0">2</span>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base mb-1">Consultation &amp; Scope Review</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        We review layout options, design themes, sound/lighting requirements, and catering specifications tailored to your space.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <span className="w-8 h-8 rounded-full bg-[#ff5722] text-white flex items-center justify-center font-bold text-sm shrink-0">3</span>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base mb-1">Customized Quotation</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        We prepare a requirement-based quote based on the specific decor scale, equipment, and coordination support requested.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <span className="w-8 h-8 rounded-full bg-[#ff5722] text-white flex items-center justify-center font-bold text-sm shrink-0">4</span>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base mb-1">Confirmation &amp; Planning</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Upon mutual agreement, dates and service components are scheduled, and setup timelines are established with participating vendors.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <span className="w-8 h-8 rounded-full bg-[#ff5722] text-white flex items-center justify-center font-bold text-sm shrink-0">5</span>
                    <div>
                      <h4 className="font-bold text-gray-900 text-base mb-1">On-Site Setup Coordination</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Our coordination team assists with vendor arrival, setup progress, audio testing, and event day execution according to plan.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Why Choose Eventkro Section */}
              <div id="why-choose" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Why Choose Eventkro for Your Etah Event
                </h2>
                <p className="leading-relaxed mb-4">
                  Planning an event requires dependable coordination and transparent communication. Here is what defines Eventkro’s event planning service:
                </p>
                <div className="space-y-4 not-prose mb-6">
                  <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <FaCheckCircle className="text-[#ff5722] text-xl shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-base mb-1">Customized Planning Without Rigid Bundles</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Every decor concept, theme layout, and service scope is planned around your family traditions, preferred venue, and designated budget.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <FaCheckCircle className="text-[#ff5722] text-xl shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-base mb-1">Multi-Service Coordination Under One Roof</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Avoid managing separate decorators, sound providers, lighting technicians, and culinary teams by working through a single accountable coordinator.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <FaCheckCircle className="text-[#ff5722] text-xl shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-base mb-1">Requirement-Based Quotations</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Pricing is discussed transparently according to selected services, setup scale, and event scope, allowing you to plan with financial clarity.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <FaCheckCircle className="text-[#ff5722] text-xl shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-base mb-1">On-Site Setup &amp; Timeline Support</h4>
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
                <EtahEventFaqAccordion items={faqItems} />
              </div>

            </div>

            {/* Right/Sidebar Sticky Column */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">

                {/* Quote Request Box */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Get Custom Quote</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    Share your celebration date, expected guest count, and service preferences. We will discuss your event specifications and prepare a custom quotation.
                  </p>
                  <Link
                    href="/contact"
                    className="btn-primary w-full text-center block py-3 rounded-lg shadow-lg font-semibold mb-4"
                  >
                    Discuss Your Requirements
                  </Link>
                  <a
                    href="https://wa.me/917017520811?text=Hi%20Eventkro,%20I%20want%20to%20discuss%20an%20event%20in%20Etah."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-2.5 rounded-lg bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2 text-sm font-semibold transition-colors mb-4 shadow-sm"
                  >
                    <FaWhatsapp className="text-lg" /> WhatsApp Us
                  </a>
                  <div className="text-center text-gray-500 text-xs border-t border-gray-200 pt-4">
                    Or speak with our team: <br />
                    <strong className="text-gray-800 text-sm font-semibold block mt-1">+91 7017520811</strong>
                    <span className="text-gray-600 text-xs block">+91 9869950233</span>
                  </div>
                </div>

                {/* Regional Event Hubs Box */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Regional Event Planners</h3>
                  <div className="flex flex-col gap-2">
                    <Link
                      href="/event-planner-in-aligarh"
                      className="text-gray-600 hover:text-[#ff5722] text-sm py-2 border-b border-gray-200 transition-colors"
                    >
                      Event Planner in Aligarh →
                    </Link>
                    <Link
                      href="/event-planner-in-hathras"
                      className="text-gray-600 hover:text-[#ff5722] text-sm py-2 border-b border-gray-200 transition-colors"
                    >
                      Event Planner in Hathras →
                    </Link>
                    <Link
                      href="/event-planner-in-mathura"
                      className="text-gray-600 hover:text-[#ff5722] text-sm py-2 border-b border-gray-200 transition-colors"
                    >
                      Event Planner in Mathura →
                    </Link>
                    <Link
                      href="/event-planner-in-agra"
                      className="text-gray-600 hover:text-[#ff5722] text-sm py-2 border-b border-gray-200 transition-colors"
                    >
                      Event Planner in Agra →
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

                {/* Services Directory Link Box */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Service Directory</h3>
                  <p className="text-gray-600 text-xs mb-4 leading-relaxed">
                    Explore all decoration styles, celebration categories, and planning options available through Eventkro.
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
            Ready to Plan Your Event in Etah?
          </h2>
          <p className="text-lg mb-8 text-white/95 leading-relaxed">
            From birthday celebrations and devotional gatherings to Roka ceremonies and family gatherings, Eventkro helps you organize your celebration with care and personal attention. Contact us today for a custom quotation.
          </p>
          <Link
            href="/contact"
            className="bg-white text-[#ff5722] hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md inline-block"
          >
            Discuss Your Requirements
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
