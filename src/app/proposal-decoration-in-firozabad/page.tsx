'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const faqItems = [
  {
    question: 'What is the cost of proposal decoration in Firozabad?',
    answer: 'Proposal decoration pricing in Firozabad is customized based on your setup requirements rather than a rigid fixed package. Pricing depends on your chosen venue (private bedroom, hotel suite, or open terrace), backdrop dimensions, lighting complexity, floral styling, and optional add-ons like live acoustic music or photography. Contact Eventkro with your venue details for a transparent quotation.'
  },
  {
    question: 'Can you set up proposal decoration on a private terrace or rooftop?',
    answer: 'Yes. We design outdoor terrace and rooftop proposal setups across Firozabad. For open-air spaces, we ensure structural stability for backdrop frameworks, secure lighting connections for neon signs and fairy lights, and arrange illumination suitable for evening photography.'
  },
  {
    question: 'How early should we book a surprise proposal in Firozabad?',
    answer: 'We recommend discussing your proposal setup at least 2 to 3 days in advance. This allows time to coordinate venue access, prepare custom floral arrangements, and test specialized lighting elements. Short-notice requests are evaluated based on decorator schedule and material availability.'
  },
  {
    question: 'Can you decorate a hotel room or private dining space?',
    answer: 'Yes, provided the hotel management or restaurant host permits outside event decorators. We coordinate setup access in advance so the room or private dining space is completely decorated before your scheduled arrival.'
  },
  {
    question: 'Can proposal themes and color palettes be customized?',
    answer: 'Absolutely. Every setup can be customized to your preferred color palette (such as classic crimson, blush rose gold, or warm ivory), personalized neon signage, balloon styling, and floral selections.'
  }
];

export default function FirozabadProposalPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="bg-white min-h-screen">
      <Header />

      {/* 1. Hero Section */}
      <section className="relative min-h-[65vh] pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 flex items-center justify-center text-center text-white overflow-hidden">
        <Image
          src="/images/firozabad/proposal-decoration-in-firozabad-hero.webp"
          alt="Proposal decoration with illuminated romantic setup in Firozabad"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="container mx-auto px-4 relative z-20 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">
            Proposal Decoration in Firozabad
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200">
            Plan an unforgettable surprise milestone in Firozabad. Custom room transformations, glowing candlelight pathways, and illuminated backdrops designed around your chosen venue and style.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary text-lg px-8 py-3 rounded-lg shadow-lg">
              Get Custom Quote
            </Link>
            <Link href="/wedding-planner-in-firozabad" className="btn-secondary text-lg px-8 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white border-white/30">
              Firozabad Wedding Services
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left/Main Content Column */}
            <div className="lg:col-span-2 space-y-12 text-gray-700">
              
              {/* 2. Why Choose Eventkro */}
              <div id="why-choose" className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Why Choose Eventkro for Surprise Proposal Planning in Firozabad
                </h2>
                <p className="leading-relaxed mb-4">
                  Popping the question is one of the most personal milestones in a relationship. Firozabad, renowned as the Glass City, has a long-standing association with vibrant color, light, and craftsmanship. At Eventkro, we draw inspiration from this local affinity for light to create romantic atmospheres using warm fairy lights, protected candle arrangements, and illuminated neon statements that make your special moment unforgettable.
                </p>
                <p className="leading-relaxed mb-4">
                  Organizing a surprise proposal demands strict secrecy, punctual setup execution, and thoughtful venue coordination. Whether you are arranging an intimate bedroom transformation at home, booking a private terrace, or planning decor at a local guest suite, our team manages every detail. We liaise directly with your venue host to secure setup access, test all lighting fixtures in advance, and ensure the space is pristine before you arrive.
                </p>
                <p className="leading-relaxed mb-4">
                  Couples choose Eventkro for proposal decorations in Firozabad because of our attention to practical execution:
                </p>
                <ul className="space-y-3 mb-6 list-disc pl-5">
                  <li><strong>Discreet Planning & Confidentiality:</strong> We coordinate all logistics quietly so your partner remains completely unaware of the surprise until the door opens.</li>
                  <li><strong>Warm Illumination & Glass Accents:</strong> We pair LED tea lights inside protective glass cylinders with ambient fairy light canopies and custom neon text to craft glowing photo settings.</li>
                  <li><strong>Venue-Specific Customization:</strong> We tailor our frameworks to fit room dimensions, terrace railing limits, and ceiling heights without damaging property walls or surfaces.</li>
                  <li><strong>Dependable Materials:</strong> We use helium-grade chrome balloons, sturdy metal backdrops, and safety-tested electrical fittings for clean, reliable setups.</li>
                </ul>
              </div>

              {/* 3. Proposal Setup Options */}
              <div id="setup-options" className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Romantic Proposal Setup Options in Firozabad
                </h2>
                <div className="h-64 sm:h-72 md:h-80 relative rounded-xl overflow-hidden mb-6 shadow-sm not-prose">
                  <Image
                    src="/images/firozabad/illuminated-proposal-backdrop-firozabad.webp"
                    alt="Illuminated proposal backdrop and marquee decoration in Firozabad"
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover"
                  />
                </div>
                <p className="leading-relaxed mb-6">
                  Every love story is unique, and we do not believe in forcing fixed packages on personal celebrations. Instead, we offer three versatile setup options that can be tailored to your space, aesthetic preferences, and budget:
                </p>
                <div className="space-y-6 not-prose">
                  {/* Option 1: Intimate Room Surprise */}
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="flex flex-wrap justify-between items-start mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Intimate Room Surprise Setup</h3>
                        <p className="text-gray-500 text-sm mt-1">Recommended for private bedrooms, home spaces, or reserved hotel rooms</p>
                      </div>
                      <span className="bg-[#ff5722]/10 text-[#ff5722] text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider">Custom Setup</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      A cozy, romantic transformation designed for indoor spaces where privacy is your top priority. We focus on impactful focal points that create immediate emotion as you enter.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2 pl-4 list-disc mb-4">
                      <li>Balloon styling using metallic, chrome, or pastel palettes tailored to your theme</li>
                      <li>"Will You Marry Me" foil alphabet letters or customized hanging wall garland</li>
                      <li>Heart-shaped outline on the bed or floor crafted with fresh rose petals</li>
                      <li>Floating ceiling balloon cloud with ribbon strands and personalized couple photos</li>
                      <li>Pathway illuminated with safe battery-operated LED candles inside glass votives</li>
                    </ul>
                    <p className="text-xs text-gray-500 italic">
                      * Final arrangement depends on room dimensions, ceiling height, and surface mounting rules.
                    </p>
                  </div>

                  {/* Option 2: Illuminated Proposal Backdrop & Marquee */}
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="flex flex-wrap justify-between items-start mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Illuminated Proposal Backdrop & Marquee Setup</h3>
                        <p className="text-gray-500 text-sm mt-1">Recommended for private terraces, covered courtyards, or spacious living areas</p>
                      </div>
                      <span className="bg-[#ff5722]/10 text-[#ff5722] text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider">Custom Setup</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      A dramatic, photo-ready setting designed to create a grand impression. Features large freestanding illuminated letters combined with architectural arch frameworks.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2 pl-4 list-disc mb-4">
                      <li>3ft tall illuminated LED marquee letters spelling out "MARRY ME"</li>
                      <li>7ft circular or geometric metallic backdrop styled with fresh foliage, roses, and glass accents</li>
                      <li>Red carpet walkway lined with warm fairy lighting and candlelit glass jars</li>
                      <li>Cold pyro sparkler units to trigger right at the moment you pop the question</li>
                      <li>On-site coordinator to manage lighting timing and background music synchronization</li>
                    </ul>
                    <p className="text-xs text-gray-500 italic">
                      * Requires access to standard electrical power outlets and adequate clearance height.
                    </p>
                  </div>

                  {/* Option 3: Cabana & Candlelight Proposal */}
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-200">
                    <div className="flex flex-wrap justify-between items-start mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">Cabana & Candlelight Proposal Setup</h3>
                        <p className="text-gray-500 text-sm mt-1">Recommended for private rooftops, outdoor lawns, or dining courtyards</p>
                      </div>
                      <span className="bg-[#ff5722]/10 text-[#ff5722] text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider">Custom Setup</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                      An immersive dining and proposal environment pairing open-air cabana drapery with soft candlelight and custom floral installations.
                    </p>
                    <ul className="text-sm text-gray-600 space-y-2 pl-4 list-disc mb-4">
                      <li>Freestanding wooden cabana structure draped in flowing sheer white or champagne fabrics</li>
                      <li>Floral backdrop styling incorporating fresh roses, orchids, and wisteria hangings</li>
                      <li>Custom LED neon signage board mounted on a decorated mesh panel</li>
                      <li>Intimate candlelit dining table arrangement with tailored table runners and glassware</li>
                      <li>Optional live acoustic guitarist to perform your partner's favorite romantic melodies</li>
                    </ul>
                    <p className="text-xs text-gray-500 italic">
                      * Suitable for outdoor spaces with wind shielding and early afternoon setup access.
                    </p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-100 flex flex-col sm:flex-row items-center justify-between gap-4 not-prose">
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Need a custom combination or unique theme?</p>
                    <p className="text-xs text-gray-600 mt-0.5">We customize lighting, colors, and backdrops to your exact venue specifications.</p>
                  </div>
                  <Link href="/contact" className="btn-primary text-sm px-5 py-2.5 rounded-lg whitespace-nowrap shadow">
                    Discuss Your Proposal Setup
                  </Link>
                </div>
              </div>

              {/* 4. Rooftop Proposal Setup */}
              <div id="rooftop" className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Terrace & Rooftop Proposal Setups in Firozabad
                </h2>
                <p className="leading-relaxed mb-4">
                  Open-air terraces in Firozabad provide an open sky backdrop and privacy that makes evening proposals feel truly magical. However, rooftop installations introduce unique technical challenges that require experienced event planning. Wind resistance is paramount: backdrops, floral meshes, and marquee letters must be securely counterweighted to ensure complete stability throughout the evening.
                </p>
                <p className="leading-relaxed mb-4">
                  Lighting placement also requires careful calibration for night setups. We position warm ambient spotlights and bulb strings to illuminate you and your partner clearly without washing out the glowing "MARRY ME" letters or neon signs in photos. Our team coordinates directly with your terrace property host or management to secure early afternoon access, allowing us to finish installation and test all electrical connections well before dusk.
                </p>
              </div>

              {/* 5. Candle Light Proposal Setup */}
              <div id="candle-light" className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Candlelight & Pathway Proposal Setups in Firozabad
                </h2>
                <div className="h-64 sm:h-72 md:h-80 relative rounded-xl overflow-hidden mb-6 shadow-sm not-prose">
                  <Image
                    src="/images/firozabad/cabana-candlelight-proposal-firozabad.webp"
                    alt="Cabana and candlelight proposal decoration setup in Firozabad"
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover"
                  />
                </div>
                <p className="leading-relaxed mb-4">
                  Candlelight creates a timeless atmosphere of intimacy and focus. In our candlelight proposal setups, we place deep emphasis on both aesthetic glow and venue safety. We utilize dozens of pillar wax candles placed inside tall cylindrical glass hurricane shades. These protect the flames from indoor drafts and outdoor breezes while reflecting light with high visual depth.
                </p>
                <p className="leading-relaxed mb-4">
                  Near fabric drapery, carpets, and floral runners, we integrate battery-operated LED tea lights for absolute peace of mind. A lush walkway of fresh rose petals guides your partner toward an illuminated focal point, creating an unforgettable walk toward your proposal moment.
                </p>
              </div>

              {/* 6. Hotel Room & Private Home Room Proposals */}
              <div id="hotel-room" className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Hotel Room & Private Home Room Proposals
                </h2>
                <div className="h-64 sm:h-72 md:h-80 relative rounded-xl overflow-hidden mb-6 shadow-sm not-prose">
                  <Image
                    src="/images/firozabad/room-proposal-decoration-firozabad.webp"
                    alt="Romantic room proposal decoration setup in Firozabad"
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover"
                  />
                </div>
                <p className="leading-relaxed mb-4">
                  An indoor room makeover is an ideal option for couples who value complete privacy away from public spaces. We regularly coordinate proposal decorations in private home bedrooms and living spaces across Firozabad, as well as in booked hotel rooms where outside decorators are permitted.
                </p>
                <p className="leading-relaxed mb-4">
                  When planning a hotel or guest room surprise, we advise guests to confirm outside decorator access policies with the front desk beforehand. Once permission is verified, our decorators coordinate timing to complete the transformation while you are out for dinner or sightseeing. Within 90 to 120 minutes, we prepare balloon canopies, petal arrangements, ambient LED lighting, and illuminated signage, leaving the room ready for an emotional entrance.
                </p>
              </div>

              {/* 7. Creative Proposal Ideas */}
              <div id="marriage-proposal" className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Creative Proposal Decoration Themes & Concepts
                </h2>
                <p className="leading-relaxed mb-4">
                  Personalizing your proposal setup ensures it feels authentic to your journey as a couple. We collaborate with you to develop creative concepts that reflect your shared memories:
                </p>
                <ul className="space-y-3 mb-4 list-disc pl-5">
                  <li><strong>The Memory Gallery Walk:</strong> A pathway featuring framed or ribbon-suspended photographs of your favorite relationship milestones, lit with gentle fairy lights that guide your partner to the proposal arch.</li>
                  <li><strong>Modern Monochromatic & Pastel Palettes:</strong> Beyond traditional red, we style setups in elegant champagne gold, blush rose, lilac pastel, or midnight navy paired with warm white illumination.</li>
                  <li><strong>Custom Neon Statements:</strong> Expressive neon phrases such as "Forever Starts Here", "Better Together", or your custom couple initials mounted on circular metal frames or acrylic boards.</li>
                  <li><strong>Acoustic Music & Photography Coordination:</strong> Pairing your decor reveal with a live acoustic guitarist playing your partner's favorite romantic melody, and a discrete photographer to capture the genuine reaction.</li>
                </ul>
              </div>

              {/* 8. Surprise Proposal Planning Workflow */}
              <div id="surprise-planning" className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  How We Coordinate Your Surprise Proposal
                </h2>
                <p className="leading-relaxed mb-4">
                  Executing a surprise requires seamless communication and strict adherence to timelines. Here is how our coordination process works:
                </p>
                <ol className="space-y-3 mb-6 list-decimal pl-5">
                  <li><strong>Initial Discussion:</strong> We discuss your preferred date, venue format (home, terrace, or hotel), aesthetic vision, and personal preferences.</li>
                  <li><strong>Requirement Scoping & Quotation:</strong> We map out the necessary decor elements, verify dimensions, and provide a clear quotation based on your exact requirements.</li>
                  <li><strong>Venue Access Coordination:</strong> We confirm setup access hours, power outlet locations, and property permissions with your venue contact or hotel desk.</li>
                  <li><strong>On-Site Installation:</strong> Our decorating crew arrives hours early to install backdrops, inflate balloons, test lighting circuits, and arrange fresh florals.</li>
                  <li><strong>The Big Moment:</strong> You arrive at a fully lit, camera-ready setting to ask the question with complete confidence.</li>
                </ol>
              </div>

              {/* 9. Proposal Decoration Cost in Firozabad */}
              <div id="pricing-details" className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Proposal Decoration Cost in Firozabad
                </h2>
                <p className="leading-relaxed mb-4">
                  At Eventkro, we do not believe in rigid fixed packages because every proposal is unique. The cost of proposal decoration in Firozabad depends directly on your chosen venue, setup scale, and specific decorative requirements. Rather than paying for items you do not need, your quotation reflects only what is necessary to bring your vision to life.
                </p>
                <p className="leading-relaxed mb-4">
                  Here are the primary factors that shape the quotation for your setup:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose my-6 text-sm">
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-1">1. Venue Format & Spatial Scale</h4>
                    <p className="text-gray-600 leading-relaxed text-xs">
                      An intimate bedroom makeover requires different quantities and mounting techniques compared to an open-air terrace or large private hall.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-1">2. Backdrop & Structural Elements</h4>
                    <p className="text-gray-600 leading-relaxed text-xs">
                      Selections range from compact wall balloon arches to freestanding 7ft circular metal rings, wooden cabana tents, or geometric panels.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-1">3. Lettering & Signage Choices</h4>
                    <p className="text-gray-600 leading-relaxed text-xs">
                      Options include foil balloon lettering, illuminated 3ft marquee alphabet letters, or custom-fabricated LED neon quote signage.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-1">4. Floral Styling Preferences</h4>
                    <p className="text-gray-600 leading-relaxed text-xs">
                      Choice between fresh seasonal florals (cut roses, orchids, wisteria) and durable botanical silk floral arrangements.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-1">5. Lighting Infrastructure</h4>
                    <p className="text-gray-600 leading-relaxed text-xs">
                      Number of ambient fairy light strands, warm Edison bulb arrays, protective glass candle cylinders, and cold pyro sparkler units.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-1">6. Optional Add-On Services</h4>
                    <p className="text-gray-600 leading-relaxed text-xs">
                      Arranging a live acoustic guitarist for a 30-minute serenade, a proposal photographer, or customized private dining table styling.
                    </p>
                  </div>
                </div>

                <p className="leading-relaxed mb-6">
                  To receive an accurate, transparent quotation, share your preferred date, venue location in Firozabad, and decor vision with our team. We provide a detailed estimate with zero hidden surprises.
                </p>

                <div className="not-prose text-center sm:text-left">
                  <Link href="/contact" className="btn-primary text-base px-6 py-3 rounded-lg shadow font-semibold inline-block">
                    Get Custom Quote
                  </Link>
                </div>
              </div>

              {/* 10. Areas We Serve */}
              <div id="areas-served" className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Localities and Areas We Serve in Firozabad
                </h2>
                <p className="leading-relaxed mb-4">
                  Eventkro delivers proposal decoration services across Firozabad city and adjacent areas in the district. We travel directly to your home, private terrace, or selected hotel location.
                </p>
                <p className="leading-relaxed mb-4">
                  Our coverage areas in Firozabad include:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 not-prose mb-6 text-sm text-gray-600">
                  <div className="p-3 bg-gray-50 rounded border border-gray-100 font-medium">✓ Suhag Nagar</div>
                  <div className="p-3 bg-gray-50 rounded border border-gray-100 font-medium">✓ Kotla Road</div>
                  <div className="p-3 bg-gray-50 rounded border border-gray-100 font-medium">✓ Glass Bazar</div>
                  <div className="p-3 bg-gray-50 rounded border border-gray-100 font-medium">✓ Station Road</div>
                  <div className="p-3 bg-gray-50 rounded border border-gray-100 font-medium">✓ Shikohabad Road</div>
                  <div className="p-3 bg-gray-50 rounded border border-gray-100 font-medium">✓ Tundla</div>
                  <div className="p-3 bg-gray-50 rounded border border-gray-100 font-medium">✓ Jalalpur</div>
                  <div className="p-3 bg-gray-50 rounded border border-gray-100 font-medium">✓ Dakhal</div>
                  <div className="p-3 bg-gray-50 rounded border border-gray-100 font-medium">✓ Asafabad</div>
                </div>
                <p className="leading-relaxed text-sm">
                  We also coordinate decorations for private venues across the wider Firozabad district. Contact us with your location details to confirm setup logistics.
                </p>
              </div>

              {/* 11. Frequently Asked Questions */}
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

              {/* Internal Linking Promotion Section */}
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-100 text-sm leading-relaxed space-y-3">
                <h4 className="font-bold text-gray-900">Explore More Services in Firozabad</h4>
                <p>
                  Eventkro offers complete event management. If you are planning other celebrations, explore our <Link href="/event-planner-in-firozabad" className="text-[#ff5722] hover:underline font-semibold">Event Planner in Firozabad</Link> page, or plan a traditional ceremony with our <Link href="/wedding-planner-in-firozabad" className="text-[#ff5722] hover:underline font-semibold">Wedding Planner in Firozabad</Link> package. For small doorstep surprises, view our <Link href="/car-boot-decoration-in-firozabad" className="text-[#ff5722] hover:underline font-semibold">Car Boot Decoration in Firozabad</Link> details. Check out our standard packages on our <Link href="/pricing" className="text-[#ff5722] hover:underline font-semibold">Pricing</Link> page or contact us via the <Link href="/contact" className="text-[#ff5722] hover:underline font-semibold">Contact Us</Link> page.
                </p>
              </div>

            </div>

            {/* Right/Sidebar Sticky Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Plan Your Surprise</h3>
                  <p className="text-gray-600 text-sm mb-6">Connect with our design team. We tailor proposal decorations to fit your venue, style, and budget perfectly.</p>
                  <Link href="/contact" className="btn-primary w-full text-center block py-3 rounded-lg shadow-lg font-semibold mb-4">
                    Get Custom Quote
                  </Link>
                  <div className="text-center text-gray-500 text-xs">
                    Or call our primary hotline: <br/>
                    <strong className="text-gray-800 text-sm font-semibold">+91 7017520811</strong>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Explore Other Cities</h3>
                  <div className="flex flex-col gap-2">
                    <Link href="/proposal-decoration-in-agra" className="text-gray-600 hover:text-[#ff5722] text-sm py-2 border-b border-gray-200 transition-colors">
                      Proposal Decoration in Agra →
                    </Link>
                    <Link href="/proposal-decoration-in-mathura" className="text-gray-600 hover:text-[#ff5722] text-sm py-2 border-b border-gray-200 transition-colors">
                      Proposal Decoration in Mathura →
                    </Link>
                    <Link href="/proposal-decoration-in-shikohabad" className="text-gray-600 hover:text-[#ff5722] text-sm py-2 transition-colors">
                      Proposal Decoration in Shikohabad →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 12. Direct Contact CTA Section */}
      <section className="py-16 bg-[#ff5722] text-white">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Plan the Perfect Proposal in Firozabad?</h2>
          <p className="text-lg mb-8 text-white/95 leading-relaxed">
            Let's design a custom setup that tells your unique love story in the Glass City. Contact Eventkro to discuss setup ideas, venue permissions, and custom pricing.
          </p>
          <Link href="/contact" className="bg-white text-[#ff5722] hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md">
            Plan Your Surprise Now
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
