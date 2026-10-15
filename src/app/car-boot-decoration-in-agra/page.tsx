'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaChevronDown, FaCheckCircle, FaCar, FaGift, FaHeart, FaLightbulb, FaShieldAlt } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const faqItems = [
  {
    question: 'What is a car boot decoration and how does the surprise work in Agra?',
    answer: 'A car boot decoration—also known as car trunk or car dikki decor—is a tailored celebration setup arranged inside the rear boot of your vehicle. Our decorator arrives at your chosen private location in Agra, styling the trunk with balloons, fairy lights, personalized photos, and thematic banners. You simply park the vehicle, bring the recipient over, and open the trunk latch to reveal the celebration.'
  },
  {
    question: 'How is the price calculated for car boot decoration in Agra?',
    answer: 'Eventkro does not use fixed or rigid package rates. Pricing is custom-quoted based on your specific requirements: the vehicle type and boot dimensions (hatchback, sedan, or SUV), the density of balloon styling, choice of lighting, customized photo prints, neon sign rentals, and specific setup timings.'
  },
  {
    question: 'Where can a car trunk decoration be arranged in Agra?',
    answer: 'Decorations are typically arranged at private residential driveways, apartment parking areas, private farmhouse grounds, or independent parking spaces where you have parking access. We ask clients to ensure the vehicle is parked in an accessible, legal spot where our decorator can safely work.'
  },
  {
    question: 'How much advance notice is required to book a car surprise setup?',
    answer: 'We recommend booking at least 24 to 48 hours in advance so our team can prepare custom photo prints, foil lettering, and coordinate vendor scheduling. However, same-day inquiries in Agra can often be accommodated depending on decorator availability.'
  },
  {
    question: 'Will the decoration materials damage the car paint, glass, or weather seals?',
    answer: 'No. Our decorators use non-marking painter\'s masking tape, soft ribbon ties, and suction cups specifically designed to protect automotive paint, rubber weather strips, and clear coats. No harsh adhesives or abrasive materials are applied to the vehicle.'
  }
];

const setupIdeas = [
  {
    title: 'Birthday Car Boot Surprise Setup',
    icon: <FaGift className="text-2xl text-[#ff5722]" />,
    image: '/images/agra/birthday-car-boot-decoration-agra.webp',
    imageAlt: 'Birthday car boot decoration setup in Agra',
    description: 'A dynamic, celebratory styling created for milestone birthdays, midnight driveway surprises, and family moments.',
    highlights: [
      'Coordinated metallic chrome and pastel latex balloons tailored to boot depth',
      'Milestone age foil numbers and celebratory lettering banner',
      'Battery-operated warm LED string lights woven along the inner boot trim',
      'Hanging photo memory cards with mini wooden clips',
      'Designated stable placement for a cake box and sparkler candle'
    ],
    bestSuited: 'Hatchbacks, compact sedans, and crossovers for partner or family birthday surprises.'
  },
  {
    title: 'Anniversary Car Boot Decoration',
    icon: <FaHeart className="text-2xl text-[#ff5722]" />,
    image: '/images/agra/anniversary-car-boot-decoration-agra.webp',
    imageAlt: 'Anniversary car boot decoration with romantic lights in Agra',
    description: 'An elegant romantic visual design crafted to celebrate relationship milestones, wedding anniversaries, and romantic dates.',
    highlights: [
      'Rich crimson, rose gold, and metallic champagne color harmony',
      'Heart-shaped foil balloons paired with soft cascading satin ribbons',
      'Warm ambient fairy lights and flameless LED pillar candles',
      'Fresh rose petal pathway or faux floral garland framing the trunk lip',
      'Chronological relationship photo timeline suspended across the boot'
    ],
    bestSuited: 'Sedans and mid-size vehicles celebrating marriage and relationship milestones.'
  },
  {
    title: 'Proposal Car Boot Setup',
    icon: <FaLightbulb className="text-2xl text-[#ff5722]" />,
    image: '/images/agra/proposal-car-boot-decoration-agra.webp',
    imageAlt: 'Proposal car boot decoration surprise setup in Agra',
    description: 'An intimate vehicle trunk reveal designed specifically for popping the question in a private, memorable setting.',
    highlights: [
      'Dense organic balloon cluster framing the open trunk lid perimeter',
      'Illuminated rental mini neon sign ("Marry Me" or "Forever Yours")',
      'Layered micro-fairy lights creating a soft evening glow',
      'Velvet ring-box spotlight styling accented with fresh flower petals',
      'Bespoke hanging message cards and personalized keepsake details'
    ],
    bestSuited: 'Private vehicle trunk proposal reveals before or after a private celebration drive.'
  }
];

export default function AgraCarBootPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="bg-white min-h-screen">
      <Header />

      {/* Hero Banner Section */}
      <section className="relative min-h-[65vh] flex flex-col justify-center items-center text-center text-white overflow-hidden pt-28 pb-12">
        <Image
          src="/images/agra/car-boot-decoration-in-agra-hero.webp"
          alt="Car boot decoration with balloons and fairy lights in Agra"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div className="container mx-auto px-4 relative z-20 max-w-4xl">
          <span className="bg-[#ff5722] text-white px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wider mb-3 inline-block">
            Surprise Event Coordination in Agra
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">
            Car Boot Decoration in Agra
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Transform your vehicle's trunk into a private celebration setting with custom balloons, warm LED lighting, and personalized surprise styling across Agra.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary text-lg px-8 py-3 rounded-lg shadow-lg">
              Request Custom Quote
            </Link>
            <a href="#setup-ideas" className="btn-secondary text-lg px-8 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white border-white/30">
              Explore Setup Ideas
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
              
              {/* Introduction & About Section */}
              <div id="about" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Magical Car Boot Decoration in Agra: How the Surprise Concept Works
                </h2>
                <p className="leading-relaxed mb-4">
                  A <strong>car boot decoration in agra</strong>—often searched locally as <strong>car dikki decoration</strong> or <strong>car trunk decoration</strong>—is an innovative celebration format that turns an ordinary vehicle compartment into an intimate celebration reveal. Instead of reserving a commercial party hall or decorated restaurant table, you bring the venue directly with you. When the recipient opens the trunk lid, they are greeted by an artistic arrangement of balloons, warm micro-lights, memorable photographs, and personalized banners.
                </p>
                <p className="leading-relaxed mb-4">
                  Eventkro coordinates doorstep car styling across residential and private parking spaces in Agra. Our local decorators handle every operational detail on-site: carefully inflating color-matched balloons, rigging battery-operated lighting strings, positioning photo strings, and ensuring all decorative materials remain stable throughout the reveal. Whether your car is a compact city hatchback, an executive sedan, or a family SUV, our decoration layouts adapt directly to the vehicle’s specific interior geometry.
                </p>
                <p className="leading-relaxed">
                  Agra residents appreciate this format because it combines complete privacy with the spontaneity of an unexpected reveal. It allows you to celebrate birthdays, wedding anniversaries, or private milestones without being restricted to fixed banquet hours or public dining rooms.
                </p>
              </div>

              {/* The Benefits of Surprise Car Trunk Decor */}
              <div className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Why Choose a Car Dikki Surprise for Your Celebration in Agra?
                </h2>
                <p className="leading-relaxed mb-4">
                  Arranging an intimate celebration inside your vehicle trunk offers distinct advantages over conventional indoor event setups:
                </p>
                <ul className="space-y-3 mb-6 list-disc pl-5">
                  <li><strong>Unmatched Surprise Factor:</strong> Because the vehicle appears completely standard from the outside, the recipient expects an ordinary drive or commute. The celebration only becomes visible the moment you prompt them to pop the trunk.</li>
                  <li><strong>Complete Privacy and Personal Space:</strong> Unlike crowded cafes or public venues, a car trunk surprise gives you and your partner or family an entirely private setting to celebrate your milestone.</li>
                  <li><strong>Customized to Your Story:</strong> Every setup can incorporate specific color palettes, favorite flowers, printed travel memories, and tailored milestone messages rather than generic party props.</li>
                  <li><strong>Doorstep Setup Convenience:</strong> Eventkro's decoration team meets you at your private driveway, garage, or designated parking spot in Agra with all required materials ready for rapid, clean installation.</li>
                  <li><strong>Vehicle-Safe Application:</strong> We use professional non-abrasive mounting techniques, ensuring that your vehicle’s factory paint finish, clear coat, and rubber boot gaskets remain completely unharmed.</li>
                </ul>
              </div>

              {/* Occasions for Car Trunk Decor */}
              <div id="occasions" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Popular Occasions for Car Trunk Decor in Agra
                </h2>
                <p className="leading-relaxed mb-6">
                  Car dikki decorations can be styled to match diverse personal milestones. Depending on the significance of the occasion, our team customizes lighting, color themes, and signage:
                </p>
                
                <div className="space-y-6">
                  <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">1. Birthday Car Trunk Surprises</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      Ideal for midnight surprises outside the home or daytime celebrations. The setup highlights customized birthday banners, vibrant balloon garlands, numerical foils indicating age, and a protected surface for cake cutting.
                    </p>
                    <p className="text-xs text-gray-500 font-semibold">Popular Themes: Rose Gold & Ivory, Sleek Black & Metallic Gold, Pastel Sorbet.</p>
                  </div>

                  <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">2. Wedding Anniversary Celebrations</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      Designed to reflect romance and shared memories. Warm LED fairy lights, red and champagne balloons, and photo cards tracing your relationship timeline create a nostalgic atmosphere right in the boot.
                    </p>
                    <p className="text-xs text-gray-500 font-semibold">Popular Themes: Classic Crimson & Gold, Warm White Elegance, Burgundy & Silver.</p>
                  </div>

                  <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">3. Vehicle Trunk Marriage Proposals</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      For couples who value intimate, low-key moments, a car boot proposal provides an emotional setting without unwanted onlookers. While this concept focuses on a private vehicle trunk surprise, couples seeking broader room makeovers, terrace candlelight cabanas, or illuminated marquee backdrops can view our dedicated <Link href="/proposal-decoration-in-agra" className="text-[#ff5722] hover:underline font-semibold">Proposal Decoration in Agra</Link> setups.
                    </p>
                    <p className="text-xs text-gray-500 font-semibold">Popular Themes: Warm White Fairy Light Canopy, Romantic Rose Garden, Neon Statement Reveal.</p>
                  </div>

                  <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">4. Milestone & Welcome Surprises</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      Welcoming a new baby home from the hospital, celebrating an academic achievement, or surprising a partner after a promotion. Soft pastel tones, celebratory ribbons, and customized congratulatory wording make the moment unforgettable.
                    </p>
                    <p className="text-xs text-gray-500 font-semibold">Popular Themes: Powder Blue & Cloud, Pastel Peach & Cream, Emerald & Champagne.</p>
                  </div>
                </div>
              </div>

              {/* Design Elements & Customization */}
              <div className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Key Elements and Styling Options for Car Boot Setups
                </h2>
                <p className="leading-relaxed mb-4">
                  An impactful car dikki design requires balanced visual layering, secure fastening, and quality materials that hold their structure inside an enclosed vehicle. Key components include:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mb-6">
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex items-start gap-3">
                    <FaCheckCircle className="text-[#ff5722] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">Automotive-Grade Balloons</h4>
                      <p className="text-xs text-gray-600">Thick, high-grade latex and metallic chrome balloons that maintain inflation and luster even in varying outdoor temperatures.</p>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex items-start gap-3">
                    <FaCheckCircle className="text-[#ff5722] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">Battery-Operated Illumination</h4>
                      <p className="text-xs text-gray-600">Low-voltage warm LED strings, micro-fairy lights, and safe flameless tea light candles that require zero external power cables.</p>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex items-start gap-3">
                    <FaCheckCircle className="text-[#ff5722] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">Personalized Photo Memory Lines</h4>
                      <p className="text-xs text-gray-600">High-resolution photographic prints clipped to rustic jute cords or satin ribbons, documenting your most cherished shared memories.</p>
                    </div>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex items-start gap-3">
                    <FaCheckCircle className="text-[#ff5722] mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">Fresh & Faux Botanical Accents</h4>
                      <p className="text-xs text-gray-600">Fresh rose petal borders along the bumper sill or delicate artificial leafy vines framing the upper boot hydraulics.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3 Non-Priced Setup Ideas Section with Semantic Images */}
              <div id="setup-ideas" className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 pb-2 border-b-2 border-gray-100">
                  Creative Setup Ideas for Car Boot Decoration in Agra
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Because every vehicle structure and client vision differs, Eventkro designs customized concepts rather than forcing one-size-fits-all packages. Explore these popular inspiration styles:
                </p>
                <div className="grid grid-cols-1 gap-8">
                  {setupIdeas.map((idea, idx) => (
                    <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                      <div className="h-60 sm:h-72 relative w-full overflow-hidden">
                        <Image
                          src={idea.image}
                          alt={idea.imageAlt}
                          fill
                          sizes="(max-width: 1024px) 100vw, 66vw"
                          className="object-cover object-center"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-4">
                          <div className="p-3 bg-[#ff5722]/10 rounded-xl">
                            {idea.icon}
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{idea.title}</h3>
                            <span className="text-xs text-[#ff5722] font-semibold uppercase tracking-wider">Custom Tailored Concept</span>
                          </div>
                        </div>
                        <p className="text-gray-700 text-sm mb-4 leading-relaxed">{idea.description}</p>
                        <div className="mb-4">
                          <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-2">Key Setup Elements:</h4>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-600">
                            {idea.highlights.map((item, hIdx) => (
                              <li key={hIdx} className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-[#ff5722] rounded-full flex-shrink-0"></span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                          <span className="text-xs text-gray-500 italic">Recommended for: {idea.bestSuited}</span>
                          <Link href="/contact" className="btn-primary text-xs px-4 py-2 rounded-lg text-center font-semibold">
                            Discuss This Setup
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing & Cost Factors Section */}
              <div id="cost-factors" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Car Boot Decoration Cost in Agra
                </h2>
                <p className="leading-relaxed mb-4">
                  At Eventkro, we do not advertise rigid, pre-fixed package pricing because a car trunk decoration is fundamentally a custom, vehicle-specific service. The cost of coordinating your surprise depends on specific aesthetic choices and logistical variables:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mb-6">
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 text-sm mb-1">Vehicle Class & Trunk Dimensions</h4>
                    <p className="text-xs text-gray-600">A compact hatchback trunk requires a tight, dense focal cluster, whereas full-size sedans and SUVs feature broader parcel shelves and taller tailgates requiring greater balloon and lighting volume.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 text-sm mb-1">Occasion & Design Complexity</h4>
                    <p className="text-xs text-gray-600">A casual birthday setup with foil letters requires less assembly time than an elaborate romantic proposal featuring rental neon signs, rose petal pathways, and specialized spotlighting.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 text-sm mb-1">Balloon Grades & Fresh Floral Additions</h4>
                    <p className="text-xs text-gray-600">Your choice between standard latex balloons, double-layered pastels, chrome metallics, custom foil shapes, and fresh seasonal rose petals directly shapes the material cost.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 text-sm mb-1">Lighting & Specialized Signage Props</h4>
                    <p className="text-xs text-gray-600">Incorporating multi-tiered micro-fairy nets, illuminated marquee letter boards, or custom-script rental neon light fixtures influences the equipment setup required.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 text-sm mb-1">Personalized Printing & Keepsakes</h4>
                    <p className="text-xs text-gray-600">High-resolution photo print strings, bespoke couple name banners, and celebratory chocolate boxes add sentimental value and are quoted per client selection.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 text-sm mb-1">Setup Timing & Location Accessibility</h4>
                    <p className="text-xs text-gray-600">Doorstep setup within central Agra residential neighborhoods during standard hours versus late-night midnight surprise slots or outlying private farmhouse travel.</p>
                  </div>
                </div>
                <p className="leading-relaxed mb-4">
                  To get an accurate estimate tailored to your car model and preferred style, simply share your vehicle type and celebration date with our Agra team. We provide a transparent, itemized quotation with zero hidden charges.
                </p>
                <div className="not-prose">
                  <Link href="/contact" className="btn-primary inline-block px-6 py-3 rounded-lg text-sm font-semibold shadow-md">
                    Request an Itemized Quote
                  </Link>
                </div>
              </div>

              {/* Selecting Setup Locations Neutralized Section */}
              <div className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Selecting a Suitable Location for Your Car Trunk Setup in Agra
                </h2>
                <p className="leading-relaxed mb-4">
                  Because a car surprise involves parked vehicle decoration, selecting the right environment ensures a smooth, uninterrupted reveal. We recommend executing car boot surprises in locations where you have clear parking access and permission:
                </p>
                <ul className="space-y-3 mb-6 list-disc pl-5">
                  <li><strong>Private Residential Driveways & Garages:</strong> The most secure and private setting for midnight surprises, birthday reveals, and family celebrations without external foot traffic.</li>
                  <li><strong>Gated Apartment Parking Bays:</strong> Ideal for coordinating with our decorator while your partner remains upstairs, setting up a spontaneous reveal as you head out.</li>
                  <li><strong>Private Farmhouse & Event Venue Grounds:</strong> Perfect when incorporating a car surprise into a broader private dinner or private family event where parking is reserved.</li>
                  <li><strong>Client-Permitted Parking Spaces:</strong> If you plan a surprise during an outing, ensure the vehicle is parked in an authorized, accessible private lot where working around the trunk does not obstruct vehicular movement.</li>
                </ul>
              </div>

              {/* Why Choose Eventkro */}
              <div className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Why Coordinate Your Car Dikki Decor with Eventkro?
                </h2>
                <p className="leading-relaxed mb-4">
                  Eventkro provides reliable, hands-on event and decoration coordination across Agra. We apply the same professional attention to detail to a compact car trunk surprise that we bring to grand celebrations:
                </p>
                <ul className="space-y-3 mb-6 list-none pl-0">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#ff5722] mt-1 mr-3 flex-shrink-0" />
                    <div><strong>Punctual On-Site Execution:</strong> Our decorator arrives promptly at the agreed time slot, completing the entire arrangement smoothly within 35 to 45 minutes.</div>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#ff5722] mt-1 mr-3 flex-shrink-0" />
                    <div><strong>Vehicle-Safe Fastening:</strong> We utilize gentle masking tapes, non-marking suction mounts, and soft ribbons that leave no scratches, adhesive stains, or residue on automotive surfaces.</div>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#ff5722] mt-1 mr-3 flex-shrink-0" />
                    <div><strong>Premium Balloon & Lighting Standards:</strong> We select durable latex and chrome balloons designed to withstand ambient outdoor conditions without deflating prematurely.</div>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#ff5722] mt-1 mr-3 flex-shrink-0" />
                    <div><strong>Tailored Creative Collaboration:</strong> From specific balloon shades to custom printed relationship memories, we adjust the design to match your recipient's taste.</div>
                  </li>
                </ul>
                <p className="leading-relaxed">
                  Looking for broader celebration design services in Agra? Check out our full-scale <Link href="/event-planner-in-agra">Event Planner in Agra</Link> solutions or our specialized <Link href="/wedding-planner-in-agra">Wedding Planner in Agra</Link> coordination.
                </p>
              </div>

              {/* FAQ Section */}
              <div id="faq" className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 pb-2 border-b-2 border-gray-100">
                  Frequently Asked Questions (Agra Car Boot Surprise)
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
                
                {/* Contact/Booking Form Box */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Book a Car Boot Decor</h3>
                  <p className="text-gray-600 text-sm mb-6">Connect with our coordination team to discuss vehicle dimensions, styling preferences, and custom pricing for Agra.</p>
                  <Link href="/contact" className="btn-primary w-full text-center block py-3 rounded-lg shadow-lg font-semibold mb-4">
                    Request Custom Quote
                  </Link>
                  <div className="text-center text-gray-500 text-xs">
                    Or call our coordination desk directly: <br/>
                    <strong className="text-gray-800 text-sm font-semibold">+91 7017520811</strong>
                  </div>
                </div>

                {/* Internal Linking Box */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Agra Local Services</h3>
                  <div className="flex flex-col gap-2">
                    <Link href="/event-planner-in-agra" className="text-gray-600 hover:text-[#ff5722] text-sm py-2 border-b border-gray-200 transition-colors">
                      General Event Planner Agra →
                    </Link>
                    <Link href="/wedding-planner-in-agra" className="text-gray-600 hover:text-[#ff5722] text-sm py-2 border-b border-gray-200 transition-colors">
                      Wedding Planner Agra →
                    </Link>
                    <Link href="/pricing" className="text-gray-600 hover:text-[#ff5722] text-sm py-2 transition-colors">
                      Eventkro Service Pricing →
                    </Link>
                  </div>
                </div>

                {/* Explore Other Cities */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Explore Other Cities</h3>
                  <div className="flex flex-col gap-2">
                    <Link href="/car-boot-decoration-in-mathura" className="text-gray-600 hover:text-[#ff5722] text-sm py-2 border-b border-gray-200 transition-colors">
                      Car Boot Decor Mathura →
                    </Link>
                    <Link href="/car-boot-decoration-in-firozabad" className="text-gray-600 hover:text-[#ff5722] text-sm py-2 border-b border-gray-200 transition-colors">
                      Car Boot Decor Firozabad →
                    </Link>
                    <Link href="/car-boot-decoration-in-shikohabad" className="text-gray-600 hover:text-[#ff5722] text-sm py-2 transition-colors">
                      Car Boot Decor Shikohabad →
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Plan Your Car Boot Surprise in Agra?</h2>
          <p className="text-lg mb-8 text-white/95 leading-relaxed">
            From intimate birthday reveals to romantic anniversary trunk surprises, Eventkro coordinates every detail with care. Get in touch with our team for a tailored quotation.
          </p>
          <Link href="/contact" className="bg-white text-[#ff5722] hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md">
            Get Free Quote
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
