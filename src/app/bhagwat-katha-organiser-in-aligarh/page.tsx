import Link from 'next/link';
import Image from 'next/image';
import { FaWhatsapp, FaCalendarAlt, FaCheckCircle, FaOm, FaHandsHelping, FaPhoneAlt } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AligarhKathaFaqAccordion, { FaqItem } from './AligarhKathaFaqAccordion';

const faqItems: FaqItem[] = [
  {
    question: 'How does Eventkro assist with Shrimad Bhagwat Katha coordination in Aligarh?',
    answer: 'Eventkro coordinates the logistical, structural, and vendor setup for Shrimad Bhagwat Katha events. This includes arranging pandal structures, attendee seating, Vyas Peeth stage decoration, distributed vocal sound setups, and prasad or bhandara dining arrangements based on your specific gathering size and venue requirements.'
  },
  {
    question: 'Does Eventkro provide the Kathavachak, priest, or spiritual speakers?',
    answer: 'No. The host family, organizing committee, or trust arranges their chosen Kathavachak, Vyas Ji, or pandit. Eventkro focuses exclusively on the event logistics, venue arrangements, stage styling, sound, and hospitality coordination so your spiritual leadership has a dignified and comfortable platform.'
  },
  {
    question: 'Is every Bhagwat Katha organized for 7 days?',
    answer: 'No. The duration and setup scope depend on the host\'s event plan, schedule and requirements. Pandal, seating, sound and other setup requirements can be discussed according to the planned program duration and vendor availability.'
  },
  {
    question: 'What setup options are available for home, community lawns, or open grounds?',
    answer: 'Depending on your expected gathering and location, we coordinate compact indoor setups for residential living areas or courtyards, as well as shaded pandal structures with carpeted floor seating or chair arrangements for community grounds, private lawns, or Dharamshala premises across Aligarh.'
  },
  {
    question: 'Can Kalash Shobha Yatra or Bhandara arrangements be included?',
    answer: 'Yes, supportive arrangements such as Shobha Yatra floral decor, open vehicle styling, and large-scale prasad or Bhandara kitchen and dining setups can be discussed as optional additions based on your requirements and local vendor availability.'
  },
  {
    question: 'How does the pricing and booking process work for a Katha in Aligarh, Khair, Gabhana, or Jattari?',
    answer: 'We do not offer rigid fixed packages because every Katha varies in duration, guest count, and setup scale. Once you share your dates, venue location, expected gathering, and specific requirements, our team discusses the options and provides a transparent, customized quote.'
  }
];

export default function AligarhKathaPage() {
  return (
    <main className="bg-white min-h-screen">
      <Header />

      {/* Hero Banner Section */}
      <section className="relative min-h-[60vh] sm:min-h-[65vh] pt-24 sm:pt-28 pb-12 sm:pb-16 flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <Image
          src="/images/aligarh/bhagwat-katha-in-aligarh-hero.webp"
          alt="Shrimad Bhagwat Katha gathering setup and devotional pandal in Aligarh"
          fill
          priority
          sizes="100vw"
          className="object-cover transition-transform duration-1000 z-0"
        />
        <div className="container mx-auto px-4 relative z-20 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight leading-tight">
            Bhagwat Katha Organiser in Aligarh for Spiritual Gatherings
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
            Thoughtful event coordination, Vyas Peeth stage decoration, pandal setups, vocal sound arrangements, and bhandara catering options for Shrimad Bhagwat Katha gatherings in Aligarh, Khair, Gabhana, and Jattari.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 rounded-lg shadow-lg font-semibold"
            >
              Request a Katha Quote
            </Link>
            <a
              href="https://wa.me/917017520811?text=Hi%20Eventkro,%20I%20want%20to%20discuss%20Bhagwat%20Katha%20organisation%20in%20Aligarh."
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
              Aligarh Event Services
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
                  Hosting a Shrimad Bhagwat Katha is one of the most revered spiritual milestones for a family, temple committee, or residential community. Organising such a multi-day devotional gathering requires thorough logistical planning—from erecting a stable pandal and arranging clear speech acoustics to styling the sacred Vyas Peeth and serving prasad to daily devotees.
                </p>
                <p className="leading-relaxed mb-6">
                  At Eventkro, we provide requirement-based event coordination for Shrimad Bhagwat Katha programs across Aligarh, Khair, Gabhana, and Jattari. Your family or committee invites your chosen Kathavachak, Vyas Ji, or pandit; our team coordinates the physical infrastructure, rental equipment, stage decoration, and vendor workflows. We work on a customized quoting model tailored to your available venue space, expected gathering, program duration, and budget.
                </p>
                <div className="mb-8">
                  <Link
                    href="/contact"
                    className="btn-primary inline-block text-center px-6 py-2.5 rounded-lg shadow-md font-semibold bg-[#ff5722] hover:bg-[#e64a19] text-white"
                  >
                    Discuss Your Katha Requirements
                  </Link>
                </div>
              </div>

              {/* Vyas Peeth & Stage Decoration */}
              <div id="vyas-peeth" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Vyas Peeth &amp; Devotional Stage Decoration Options
                </h2>
                <div className="h-64 sm:h-72 relative rounded-xl overflow-hidden mb-6 shadow-sm not-prose">
                  <Image
                    src="/images/aligarh/vyas-peeth-decoration-aligarh.webp"
                    alt="Vyas Peeth stage decoration setup with traditional floral styling and backdrop"
                    fill
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover"
                  />
                </div>
                <p className="leading-relaxed mb-4">
                  The Vyas Peeth serves as the spiritual heart of the gathering. It must offer elevated sightlines so that all attendees can comfortably see and listen to the discourse, while providing the speaker with an uncluttered, comfortable setting. We discuss stage elements tailored to your venue:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose mb-6">
                  <div className="p-4 bg-orange-50/60 rounded-xl border border-orange-100">
                    <h4 className="font-bold text-gray-900 mb-1">Elevated Dais &amp; Seating</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Sturdy wooden platform staging with traditional mattress, bolsters (gaddi-masand), and neat ceremonial linen for the Vyas Ji.
                    </p>
                  </div>
                  <div className="p-4 bg-orange-50/60 rounded-xl border border-orange-100">
                    <h4 className="font-bold text-gray-900 mb-1">Pooja Mandap &amp; Pothi Sthapana</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Dedicated small chowki for the Shrimad Bhagwat Pothi, brass lamps (diya stands), and pooja samagri placement near the dais.
                    </p>
                  </div>
                  <div className="p-4 bg-orange-50/60 rounded-xl border border-orange-100">
                    <h4 className="font-bold text-gray-900 mb-1">Floral Styling Options</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Marigold, jasmine, and seasonal floral garlands, hanging torans, and backdrop frames selected based on client preference and seasonal availability.
                    </p>
                  </div>
                  <div className="p-4 bg-orange-50/60 rounded-xl border border-orange-100">
                    <h4 className="font-bold text-gray-900 mb-1">Musician &amp; Accompanist Space</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Spacious adjoining stage floor or side dais for harmonium, tabla, dholak, and choir artists with dedicated microphone cabling.
                    </p>
                  </div>
                </div>
                <p className="leading-relaxed">
                  Stage backdrops can feature traditional fabric drapes in auspicious saffron, yellow, and red hues, or custom devotional thematic flex backdrops depending on your family&apos;s preference.
                </p>
              </div>

              {/* Pandal Structures & Seating */}
              <div id="pandal-seating" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Pandal Structures &amp; Attendee Seating Arrangements
                </h2>
                <div className="h-64 sm:h-72 relative rounded-xl overflow-hidden mb-6 shadow-sm not-prose">
                  <Image
                    src="/images/aligarh/katha-pandal-setup-aligarh.webp"
                    alt="Spacious pandal setup with carpeted seating for devotional Katha gathering"
                    fill
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover"
                  />
                </div>
                <p className="leading-relaxed mb-4">
                  Whether hosted on open community grounds, within a colony park, at a local Dharamshala, or inside a private courtyard, pandal, seating and ventilation/setup options can be discussed according to venue, season, requirements and vendor availability:
                </p>
                <ul className="space-y-2 mb-4">
                  <li><strong>Canopy &amp; Pandal Framing:</strong> Fabric pandal framing, sidewalls for shade, and roof draping planned to suit the ground area and expected attendance.</li>
                  <li><strong>Floor Seating with Carpeting:</strong> Clean ground matting beneath carpeting, with optional gaddi or durrie layers for comfortable floor seating.</li>
                  <li><strong>Chairs for Elders:</strong> Dedicated perimeter or rear rows with chairs so senior family members and guests can sit comfortably throughout the sessions.</li>
                  <li><strong>Ventilation Setup Options:</strong> Air circulation and fan setup options can be discussed according to venue conditions, season, and vendor availability.</li>
                </ul>
                <p className="leading-relaxed">
                  During initial discussions, we evaluate the site dimensions, ground layout, access pathways, and shade orientation to recommend a practical setup layout.
                </p>
              </div>

              {/* Audio & Vocal Sound Setup */}
              <div id="sound-setup" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Vocal Sound &amp; Audio Setup Options
                </h2>
                <p className="leading-relaxed mb-4">
                  For devotional gatherings, clear and comfortable sound is essential so attendees can listen to discourses and bhajans without strain. Microphone, speaker and audio setup options can be discussed according to venue size, program requirements and availability:
                </p>
                <div className="space-y-4 not-prose mb-6">
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-1">Vocal &amp; Instrument Microphone Options</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Microphone setup options for the Vyas Peeth and accompanying harmonium or percussion musicians can be planned based on your program needs.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-1">Venue Speaker Placement Options</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Speaker arrangement and placement options can be discussed to support even sound coverage across your seating area according to venue layout.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-1">Dais &amp; Stage Sound Support</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Audio monitoring options for the speaker and accompanists can be coordinated during setup planning to ensure comfortable listening on stage.
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 italic">
                  Note: Microphone, speaker and audio setup options can be discussed according to venue size, program requirements and vendor availability.
                </p>
              </div>

              {/* Daily Occasions & Shobha Yatra Options */}
              <div id="occasions" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Daily Festive Occasions &amp; Procession Coordination Options
                </h2>
                <p className="leading-relaxed mb-4">
                  A Shrimad Bhagwat Katha includes celebrated landmark episodes throughout its schedule. Families often choose to add special decorative accents for these momentous days:
                </p>
                <ul className="space-y-2 mb-4">
                  <li><strong>Shri Krishna Janmotsav:</strong> Special stage backdrop accents, cradle (palna) styling, decorative makhan matki props, and celebratory flower showers.</li>
                  <li><strong>Govardhan Puja:</strong> Dedicated display table or floor rangoli area for the Annakut prasad offerings and decorative mountain motifs.</li>
                  <li><strong>Rukmini Vivah:</strong> Festive mandap additions, ceremonial varmala garlands, and celebratory lighting on stage.</li>
                  <li><strong>Kalash Shobha Yatra Support:</strong> If your committee plans an opening-day Kalash Yatra procession, options such as open vehicle/rath floral styling, brass kalash arrangements, and portable sound support can be discussed based on vendor availability.</li>
                </ul>
                <p className="leading-relaxed">
                  We coordinate closely with your family&apos;s daily schedule so that stage adjustments are arranged seamlessly between morning and evening sessions.
                </p>
              </div>

              {/* Prasad & Bhandara Coordination */}
              <div id="bhandara-catering" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Prasad Distribution &amp; Bhandara Dining Coordination
                </h2>
                <div className="h-64 sm:h-72 relative rounded-xl overflow-hidden mb-6 shadow-sm not-prose">
                  <Image
                    src="/images/aligarh/bhandara-prasad-setup-aligarh.webp"
                    alt="Arranged community dining and Bhandara setup for spiritual event attendees"
                    fill
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover"
                  />
                </div>
                <p className="leading-relaxed mb-4">
                  Serving prasad and hosting the final-day community Bhandara (Mahaprasad) requires organized dining arrangements to ensure dignity, hygiene, and smooth flow:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose mb-6">
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-1">Traditional Pangat Seating</h4>
                    <p className="text-gray-600 text-sm">Long rows of floor mats (pangat strips) with eco-friendly leaf plates (pattal-dona) and volunteer serving corridors.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-1">Buffet Dining Setup</h4>
                    <p className="text-gray-600 text-sm">Covered buffet counters with chafer warmers, clean tablecloths, and orderly guest queuing lines for larger gatherings.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-1">Daily Prasad Distribution</h4>
                    <p className="text-gray-600 text-sm">Neat distribution tables positioned near exit pathways with clean paper bags or pre-portioned prasad containers.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-1">Drinking Water &amp; Waste Points</h4>
                    <p className="text-gray-600 text-sm">Dedicated clean drinking water dispensers and placed waste bins to keep the venue tidy throughout the gathering.</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 italic">
                  Note: Satvik food preparation, halwai team coordination, or external catering services can be planned according to your family&apos;s custom menu requirements.
                </p>
              </div>

              {/* Venues & Locations */}
              <div id="venues" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Home, Community Ground &amp; Dharamshala Setups
                </h2>
                <p className="leading-relaxed mb-4">
                  Bhagwat Katha programs in Aligarh take place across various venue formats, each requiring a specific logistical approach:
                </p>
                <ul className="space-y-2 mb-4">
                  <li><strong>Home &amp; Courtyard Kathas:</strong> Intimate family gatherings hosted in a private courtyard, spacious drawing room, or terrace, utilizing compact dais framing, clean floor durries, and discreet sound systems.</li>
                  <li><strong>Community Grounds &amp; Parks:</strong> Neighborhood or colony programs hosted in open plots or municipal parks, requiring full pandal structure, side curtains, electrical cabling, and attendee pathways.</li>
                  <li><strong>Dharamshalas &amp; Community Halls:</strong> Indoor banquet or dharamshala halls with existing roof shelter, focusing on stage elevation, acoustic tuning, and orderly dining sectioning.</li>
                </ul>
                <p className="leading-relaxed">
                  Our team can inspect the venue layout with you in advance to determine power availability, entrance accessibility, and pandal dimensions.
                </p>
              </div>

              {/* 4-Step Booking Workflow */}
              <div id="booking-process" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Our 4-Step Katha Coordination Process
                </h2>
                <p className="leading-relaxed mb-6">
                  Planning a multi-day spiritual program involves multiple service elements. Here is our straightforward, requirement-based process:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 not-prose mb-8">
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 relative">
                    <span className="w-9 h-9 rounded-full bg-[#ff5722] text-white flex items-center justify-center font-bold text-sm mb-3">1</span>
                    <h4 className="font-bold text-gray-900 text-base mb-1">Share Event Details</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Reach out with your dates, venue location, estimated daily gathering, program duration, and specific requirements for pandal, stage, sound, or catering.
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 relative">
                    <span className="w-9 h-9 rounded-full bg-[#ff5722] text-white flex items-center justify-center font-bold text-sm mb-3">2</span>
                    <h4 className="font-bold text-gray-900 text-base mb-1">Discuss Scope &amp; Custom Quote</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Our coordination team discusses available options, reviews space requirements, and prepares a transparent, itemized quotation tailored to your scope.
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 relative">
                    <span className="w-9 h-9 rounded-full bg-[#ff5722] text-white flex items-center justify-center font-bold text-sm mb-3">3</span>
                    <h4 className="font-bold text-gray-900 text-base mb-1">Confirm Schedule &amp; Vendors</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Once details are finalized, the dates are confirmed with a booking deposit to reserve pandal materials, sound systems, and local setup teams.
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 relative">
                    <span className="w-9 h-9 rounded-full bg-[#ff5722] text-white flex items-center justify-center font-bold text-sm mb-3">4</span>
                    <h4 className="font-bold text-gray-900 text-base mb-1">On-Site Setup &amp; Support</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Setup begins ahead of Day 1. The team installs the pandal, completes stage decor, runs microphone sound checks, and coordinates daily operational needs.
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div id="service-areas" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Service Coverage: Aligarh, Khair, Gabhana &amp; Jattari
                </h2>
                <p className="leading-relaxed mb-4">
                  Eventkro coordinates Shrimad Bhagwat Katha setups across central Aligarh localities as well as key nearby regional areas:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 not-prose mb-6">
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
                    <h4 className="font-bold text-gray-900 text-lg mb-1">Khair</h4>
                    <p className="text-gray-600 text-xs">Pandal setups, home kathas &amp; community ground seating</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
                    <h4 className="font-bold text-gray-900 text-lg mb-1">Gabhana</h4>
                    <p className="text-gray-600 text-xs">Vyas Peeth stage decor, sound systems &amp; bhandara arrangements</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
                    <h4 className="font-bold text-gray-900 text-lg mb-1">Jattari</h4>
                    <p className="text-gray-600 text-xs">Multi-day devotional setups, floral styling &amp; event coordination</p>
                  </div>
                </div>
                <p className="leading-relaxed mb-4">
                  Regardless of your venue location within these regions, we organize transport, vendor schedules, and setup timing directly at your site.
                </p>
                <p className="leading-relaxed">
                  If you are also planning other family celebrations in the city, discover our full suite of local services including our <Link href="/event-planner-in-aligarh" className="text-[#ff5722] hover:underline font-semibold">Event Planner in Aligarh</Link> hub, <Link href="/wedding-planner-in-aligarh" className="text-[#ff5722] hover:underline font-semibold">Wedding Planner in Aligarh</Link>, <Link href="/birthday-decoration-in-aligarh" className="text-[#ff5722] hover:underline font-semibold">Birthday Decoration in Aligarh</Link>, or view all event solutions on our <Link href="/services" className="text-[#ff5722] hover:underline font-semibold">services page</Link>.
                </p>
              </div>

              {/* Why Choose Eventkro */}
              <div id="why-choose" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Why Choose Eventkro for Katha Coordination in Aligarh
                </h2>
                <p className="leading-relaxed mb-4">
                  Coordinating with Eventkro allows your family and committee to participate fully in the spiritual discourse without dealing with separate vendor stresses:
                </p>
                <div className="space-y-4 not-prose mb-6">
                  <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <FaCheckCircle className="text-[#ff5722] text-xl shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-base mb-1">Devotional Respect &amp; Sensitivity</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        We understand the spiritual importance of a Shrimad Bhagwat Katha and ensure stage, seating, and dining areas are prepared with utmost cleanliness and decorum.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <FaCheckCircle className="text-[#ff5722] text-xl shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-base mb-1">Requirement-Based Customization</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        No rigid packages. From small living-room recitations to large outdoor community pandals, every setup element is adapted to your space and gathering size.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <FaCheckCircle className="text-[#ff5722] text-xl shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-base mb-1">Clear Consultation &amp; Transparent Quotes</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        We discuss what is feasible within your venue parameters and budget, offering clear itemized quotations with zero hidden surprises.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <FaCheckCircle className="text-[#ff5722] text-xl shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-base mb-1">Coordinated Planning Support</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        From the initial inquiry through setup planning, our team can help coordinate requirements, vendor scheduling, and next steps.
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
                <AligarhKathaFaqAccordion items={faqItems} />
              </div>

            </div>

            {/* Right/Sidebar Sticky Form & Links */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">

                {/* Quote Box */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Discuss Your Katha Event</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    Share your planned dates, venue type, and estimated attendees. Our team will discuss stage, pandal, and sound options and provide a custom quote.
                  </p>
                  <Link
                    href="/contact"
                    className="btn-primary w-full text-center block py-3 rounded-lg shadow-lg font-semibold mb-4"
                  >
                    Request a Katha Quote
                  </Link>
                  <a
                    href="https://wa.me/917017520811?text=Hi%20Eventkro,%20I%20want%20to%20discuss%20Bhagwat%20Katha%20organisation%20in%20Aligarh."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-2.5 rounded-lg bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2 text-sm font-semibold transition-colors mb-4 shadow-sm"
                  >
                    <FaWhatsapp className="text-lg" /> Chat on WhatsApp
                  </a>
                  <div className="text-center text-gray-500 text-xs border-t border-gray-200 pt-4">
                    Or speak directly with our team: <br />
                    <strong className="text-gray-800 text-sm font-semibold block mt-1">+91 7017520811</strong>
                    <span className="text-gray-600 text-xs block">+91 9869950233</span>
                  </div>
                </div>

                {/* Related Aligarh Services */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Aligarh Event Services</h3>
                  <div className="flex flex-col gap-2">
                    <Link
                      href="/event-planner-in-aligarh"
                      className="text-gray-600 hover:text-[#ff5722] text-sm py-2 border-b border-gray-200 transition-colors"
                    >
                      Event Planner in Aligarh →
                    </Link>
                    <Link
                      href="/wedding-planner-in-aligarh"
                      className="text-gray-600 hover:text-[#ff5722] text-sm py-2 border-b border-gray-200 transition-colors"
                    >
                      Wedding Planner in Aligarh →
                    </Link>
                    <Link
                      href="/birthday-decoration-in-aligarh"
                      className="text-gray-600 hover:text-[#ff5722] text-sm py-2 border-b border-gray-200 transition-colors"
                    >
                      Birthday Decoration in Aligarh →
                    </Link>
                    <Link
                      href="/services"
                      className="text-gray-600 hover:text-[#ff5722] text-sm py-2 transition-colors"
                    >
                      All Eventkro Services →
                    </Link>
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

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Direct Contact CTA Section */}
      <section className="py-16 bg-[#ff5722] text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Planning a Shrimad Bhagwat Katha in Aligarh?
          </h2>
          <p className="text-lg mb-8 text-white/95 leading-relaxed">
            From stage decoration and Vyas Peeth styling to comfortable pandals, sound setups, and prasad dining management across Aligarh, Khair, Gabhana, and Jattari—Eventkro helps coordinate the logistics so your event unfolds with dignity and devotion. Contact us today for a custom quote.
          </p>
          <Link
            href="/contact"
            className="bg-white text-[#ff5722] hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md inline-block"
          >
            Discuss Your Katha Setup with Eventkro
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
