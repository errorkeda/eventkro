'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaStar, FaChevronDown } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const faqItems = [
  {
    question: 'What is the cost of proposal decoration in Shikohabad?',
    answer: 'The price for proposal decoration in Shikohabad starts from ₹3,999 for romantic room balloon decorations and ranges up to ₹16,999+ for premium outdoor terrace or garden setups.'
  },
  {
    question: 'Do you provide rooftop proposal decoration?',
    answer: 'Yes! We specialize in rooftop proposal decorations in Shikohabad, using structural frameworks, LED neon signs, fairy lights, and glass candle jars to create a safe and spectacular surprise.'
  },
  {
    question: 'Can you arrange same day proposal decoration?',
    answer: 'Yes, same-day bookings are available in Shikohabad. Please call our team early in the morning so we can confirm decorator availability and material logistics.'
  },
  {
    question: 'Do you provide hotel room proposal decoration?',
    answer: 'Yes, we provide romantic surprise room makeovers. We decorate hotel rooms across Shikohabad with rose petals, custom metallic balloons, and custom lighting setups.'
  },
  {
    question: 'Can you customize proposal themes?',
    answer: 'Absolutely! We can customize themes using specific color palettes, custom neon text, fresh flowers, and live guitar players.'
  }
];

export default function ShikohabadProposalPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="bg-white min-h-screen">
      <Header />

      {/* 1. Hero Section */}
      <section className="relative h-[65vh] flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-slide-3.jpeg')" }}
        ></div>
        <div className="container mx-auto px-4 relative z-20 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">
            Proposal Decoration in Shikohabad
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200">
            Plan a perfect surprise marriage proposal. High-quality decorations, cozy room makeovers, and romantic setups in Shikohabad tailored to your story.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary text-lg px-8 py-3 rounded-lg shadow-lg">
              Get Free Quote
            </Link>
            <Link href="/wedding-planner-in-shikohabad" className="btn-secondary text-lg px-8 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white border-white/30">
              Shikohabad Wedding Services
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left/Main Content Column (1500+ Words) */}
            <div className="lg:col-span-2 space-y-12 text-gray-700">
              
              {/* 2. Why Choose Eventkro */}
              <div id="why-choose" className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Why Choose Eventkro for Surprise Proposal Planning in Shikohabad
                </h2>
                <p className="leading-relaxed mb-4">
                  Planning a marriage proposal is an emotional and deeply personal experience. In Shikohabad, a prominent town in the Firozabad district, finding professional planners who can design a modern, elegant, and completely private surprise setup can be difficult. Many local decorators only specialize in large-scale wedding arches, which lack the intimacy and styling required for a romantic proposal. Eventkro bridges this gap by offering premium, custom-designed surprise proposal decorations in Shikohabad.
                </p>
                <p className="leading-relaxed mb-4">
                  A successful proposal depends on surprise, precise timing, and high-quality visuals. Eventkro provides full-service local planning in Shikohabad. We handle all logistics, coordinate setup timings with hotel staff or private property owners, and set up high-grade decorative elements. Whether you are planning a doorstep surprise, a bedroom makeover, or a private terrace setup, we make sure the process is completely stress-free.
                </p>
                <p className="leading-relaxed mb-4">
                  Here is why couples trust Eventkro for proposal decorations in Shikohabad:
                </p>
                <ul className="space-y-3 mb-6 list-disc pl-5">
                  <li><strong>Custom Design Themes:</strong> We customize every setup to match your partner's taste, including bohemian teepee setups, rose petal hearts, and bright neon letters.</li>
                  <li><strong>Complete Secret Coordination:</strong> We work behind the scenes to coordinate setup times with hotel or cafe managers, ensuring the surprise is kept completely secret.</li>
                  <li><strong>Premium Materials Only:</strong> We use helium-grade chrome balloons, sturdy metal backdrops, and safe LED lighting frameworks to ensure the setup looks premium in photos.</li>
                  <li><strong>Affordable & Upfront Pricing:</strong> We offer packages that deliver maximum visual value at competitive rates, with no hidden transportation charges.</li>
                </ul>
              </div>

              {/* 3. Romantic Proposal Decoration Packages */}
              <div id="packages" className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Romantic Proposal Decoration Packages in Shikohabad
                </h2>
                <p className="leading-relaxed mb-6">
                  We offer three customizable proposal packages in Shikohabad, designed to suit different venue structures, spatial capacities, and budgets.
                </p>
                <div className="space-y-6 not-prose">
                  {/* Basic Package */}
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">1. Romantic Room Makeover (Basic)</h3>
                        <p className="text-gray-500 text-sm mt-1">Ideal for indoor hotel room surprises and private home rooms</p>
                      </div>
                      <span className="bg-[#ff5722]/10 text-[#ff5722] text-sm px-3 py-1 rounded-full font-bold">From ₹3,999</span>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-2 pl-4 list-disc">
                      <li>150 Metallic Balloons (custom colors: Red, Silver, Gold, or Pastel Rose)</li>
                      <li>"Will You Marry Me" foil alphabet letters or standard backdrop garland</li>
                      <li>Rose petal heart shape outline on the bed or floor</li>
                      <li>Ceiling balloon cloud with dangling ribbons and couple photos</li>
                      <li>Pathway with safe LED tea-light candles in glass jars</li>
                    </ul>
                  </div>

                  {/* Premium Package */}
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 relative">
                    <span className="absolute -top-3 right-6 bg-red-600 text-white text-xs px-3 py-1 rounded-full font-semibold">Bestseller</span>
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">2. Marquee Light & Circular Arch Setup (Premium)</h3>
                        <p className="text-gray-500 text-sm mt-1">Perfect for private rooftops, lawns, or resort terraces</p>
                      </div>
                      <span className="bg-[#ff5722]/10 text-[#ff5722] text-sm px-3 py-1 rounded-full font-bold">From ₹9,999</span>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-2 pl-4 list-disc">
                      <li>3ft tall LED marquee letters spelling out "MARRY ME"</li>
                      <li>7ft circular metal mesh ring backdrop decorated with premium roses, wisteria, and glass ornaments</li>
                      <li>Red carpet runway flanked by fairy lights and candlelit glass jars</li>
                      <li>2 cold pyro sparkler units to light up right at the proposal moment</li>
                      <li>On-site coordinator to manage setup timings and music</li>
                    </ul>
                  </div>

                  {/* Elite Package */}
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">3. Deluxe Garden Resort Proposal (Elite)</h3>
                        <p className="text-gray-500 text-sm mt-1">Our premium luxury option combining live music, dinner, and heavy decor</p>
                      </div>
                      <span className="bg-[#ff5722]/10 text-[#ff5722] text-sm px-3 py-1 rounded-full font-bold">From ₹16,999</span>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-2 pl-4 list-disc">
                      <li>Private decorated wooden cabana tent setup with flowing white drapes</li>
                      <li>Premium fresh flower backdrop (roses, orchids, and wisteria hangings)</li>
                      <li>Large "WILL YOU MARRY ME" neon signage board mounted on a premium geometric backdrop</li>
                      <li>Private candlelit dining table setup with customized multi-course dinner menu</li>
                      <li>Live acoustic guitar player playing romantic melodies for 30 minutes</li>
                      <li>4 cold pyro firework units and helium-filled balloon clouds</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 4. Rooftop Proposal Setup */}
              <div id="rooftop" className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Rooftop Proposal Setup in Shikohabad
                </h2>
                <p className="leading-relaxed mb-4">
                  Rooftop terraces in Shikohabad offer a beautiful view of the city skyline, especially at night when the city lights up. Setting up a surprise on a rooftop provides an exclusive, intimate space with a dramatic sky view. Our **rooftop proposal decoration** services handle the challenges of outdoor installations, such as securing the backdrops against the wind and optimizing light for low-light photography.
                </p>
                <p className="leading-relaxed mb-4">
                  For a rooftop setup, we recommend utilizing large LED marquee letters, warm bulb strings, and a geometric floral arch. Flanking the walkway with lanterns and flower petals completes the pathway to your new beginning. We coordinate closely with the hotel owners or cafe managers to secure early entry, ensuring the setup is fully complete before you arrive.
                </p>
              </div>

              {/* 5. Candle Light Proposal Setup */}
              <div id="candle-light" className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Candle Light Proposal Setup in Shikohabad
                </h2>
                <p className="leading-relaxed mb-4">
                  Candlelight has an enduring association with romance. The soft, warm glow of flickering candles creates a quiet, intimate atmosphere that helps you express your feelings. Our **candle light proposal setup** in Shikohabad utilizes dozens of high-quality wax candles placed safely inside protective glass cylinders, combined with battery-operated LED tea lights for absolute safety near fabrics.
                </p>
                <p className="leading-relaxed mb-4">
                  We build paths of deep red rose petals leading to a massive illuminated heart outline. Flanked by delicate glass vases and soft spotlighting, the candles illuminate your pathway. We coordinate table placement and seating layouts, ensuring you have the perfect angle to ask the big question.
                </p>
              </div>

              {/* 6. Hotel Room Proposal Decoration */}
              <div id="hotel-room" className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Surprise Hotel Room Proposal Decoration in Shikohabad
                </h2>
                <p className="leading-relaxed mb-4">
                  A **hotel room proposal decoration** is the perfect option if you want to keep the moment private and away from public spaces. Shikohabad has many premium resorts, heritage properties, and modern hotels where room decoration is permitted.
                </p>
                <p className="leading-relaxed mb-4">
                  Our decorators coordinate with the hotel reception or use your room key to gain access while you are out visiting local glass exhibitions or having lunch. Within 90 minutes, we transform the room. We fill the ceiling with chrome helium balloons, place a rose petal heart on the bed, set up a warm "Will You Marry Me" neon sign, and lay out candlelit pathways from the entryway. When you open the door, the visual surprise is immediate and highly emotional.
                </p>
              </div>

              {/* 7. Marriage Proposal Decoration */}
              <div id="marriage-proposal" className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Unique Marriage Proposal Decoration Ideas
                </h2>
                <p className="leading-relaxed mb-4">
                  We believe that your marriage proposal decoration should be as unique as your relationship. That is why we provide custom styling options.
                </p>
                <p className="leading-relaxed mb-4">
                  Some of our popular creative design concepts in Shikohabad include:
                </p>
                <ul className="space-y-2 mb-4 list-disc pl-5">
                  <li><strong>The Cozy Teepee:</strong> A styled wooden teepee tent draped in white lace, decorated with pampas grass, fairy lights, rug overlays, and soft cushions. Perfect for backyard lawns or private terrace spots.</li>
                  <li><strong>The Neon Backdrop:</strong> A circular metal mesh panel decorated with pampas grass and pink/white roses, with a personalized neon sign of your choice.</li>
                  <li><strong>The Memory Walkway:</strong> A path decorated with fairy lights and custom photo stands, showing key moments of your relationship leading up to the proposal.</li>
                </ul>
              </div>

              {/* 8. Surprise Proposal Planning */}
              <div id="surprise-planning" className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  How We Plan Your Surprise Proposal in Shikohabad
                </h2>
                <p className="leading-relaxed mb-4">
                  Eventkro handles the complete planning process to keep the surprise a secret and ensure everything runs smoothly:
                </p>
                <ol className="space-y-3 mb-6 list-decimal pl-5">
                  <li><strong>Consultation:</strong> We discuss your location preference, budget, and design ideas.</li>
                  <li><strong>Site Recce & Booking:</strong> We coordinates with the hotel or rooftop manager to handle bookings and setup permissions.</li>
                  <li><strong>Design Approval:</strong> We share a layout design showing the exact colors, backdrops, and lighting setups.</li>
                  <li><strong>Setup Execution:</strong> Our local team sets up the decor, test the lights, and prepares the space hours before you arrive. We send progress updates via WhatsApp.</li>
                  <li><strong>The Big Moment:</strong> We manage the music, coordinate the photographer, and trigger cold pyros as you propose.</li>
                </ol>
              </div>

              {/* 9. Proposal Decoration Pricing */}
              <div id="pricing-details" className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Proposal Decoration Pricing in Shikohabad
                </h2>
                <p className="leading-relaxed mb-4">
                  We believe in upfront, transparent pricing. Below is a breakdown of our standard rates and popular additions:
                </p>
                <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg overflow-hidden my-6 not-prose">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service / Decor Item</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Estimated Pricing</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200 text-sm">
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Standard Room Surprise Decoration</td>
                      <td className="px-6 py-4">₹3,999 - ₹5,999</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Outdoor Heart Arch & Pathway Setup</td>
                      <td className="px-6 py-4">₹8,999 - ₹10,999</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Premium Marquee "MARRY ME" LED Setup</td>
                      <td className="px-6 py-4">₹10,999 - ₹13,999</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Add-on: Live Acoustic Guitarist (30 mins)</td>
                      <td className="px-6 py-4">₹3,000</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Add-on: Proposal Photographer</td>
                      <td className="px-6 py-4">₹4,000 - ₹6,000</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Add-on: Cold Pyro Sparklers (Set of 4)</td>
                      <td className="px-6 py-4">₹1,500</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 10. Areas We Serve */}
              <div id="areas-served" className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Localities and Areas We Serve in Shikohabad
                </h2>
                <p className="leading-relaxed mb-4">
                  Eventkro provides surprise decoration services across Shikohabad and nearby residential areas. We travel to your chosen hotel, home, or resort.
                </p>
                <p className="leading-relaxed mb-4">
                  Our service coverage area in Shikohabad includes:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 not-prose mb-6 text-sm text-gray-600">
                  <div className="p-3 bg-gray-50 rounded border border-gray-100">✓ Station Road</div>
                  <div className="p-3 bg-gray-50 rounded border border-gray-100">✓ Katra Bazar</div>
                  <div className="p-3 bg-gray-50 rounded border border-gray-100">✓ Bara Bazar</div>
                  <div className="p-3 bg-gray-50 rounded border border-gray-100">✓ Jyoti Road</div>
                  <div className="p-3 bg-gray-50 rounded border border-gray-100">✓ Arainj</div>
                  <div className="p-3 bg-gray-50 rounded border border-gray-100">✓ NH-19 Bypass</div>
                  <div className="p-3 bg-gray-50 rounded border border-gray-100">✓ Adarsh Nagar</div>
                  <div className="p-3 bg-gray-50 rounded border border-gray-100">✓ Balaji Puram</div>
                  <div className="p-3 bg-gray-50 rounded border border-gray-100">✓ Railway Colony</div>
                </div>
                <p className="leading-relaxed">
                  We also serve surrounding towns and villages in the Shikohabad block. Contact us to verify travel coverage for remote spots.
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
                <h4 className="font-bold text-gray-900">Explore More Services in Shikohabad</h4>
                <p>
                  Eventkro offers complete event management. If you are planning other celebrations, explore our <Link href="/event-planner-in-shikohabad" className="text-[#ff5722] hover:underline font-semibold">Event Planner in Shikohabad</Link> page, or plan a traditional ceremony with our <Link href="/wedding-planner-in-shikohabad" className="text-[#ff5722] hover:underline font-semibold">Wedding Planner in Shikohabad</Link> package. For small doorstep surprises, view our <Link href="/car-boot-decoration-in-shikohabad" className="text-[#ff5722] hover:underline font-semibold">Car Boot Decoration in Shikohabad</Link> details. Check out our standard packages on our <Link href="/pricing" className="text-[#ff5722] hover:underline font-semibold">Pricing</Link> page or contact us via the <Link href="/contact" className="text-[#ff5722] hover:underline font-semibold">Contact Us</Link> page.
                </p>
              </div>

            </div>

            {/* Right/Sidebar Sticky Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Book Your Surprise</h3>
                  <p className="text-gray-600 text-sm mb-6">Connect with our design team. We customize setups to fit your space, style, and budget perfectly.</p>
                  <Link href="/contact" className="btn-primary w-full text-center block py-3 rounded-lg shadow-lg font-semibold mb-4">
                    Get Free Quote
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
                    <Link href="/proposal-decoration-in-firozabad" className="text-gray-600 hover:text-[#ff5722] text-sm py-2 border-b border-gray-200 transition-colors">
                      Proposal Decoration in Firozabad →
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Plan the Perfect Proposal in Shikohabad?</h2>
          <p className="text-lg mb-8 text-white/95 leading-relaxed">
            Let's design a custom setup that tells your unique love story in Shikohabad. Contact Eventkro to discuss package customizations.
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
