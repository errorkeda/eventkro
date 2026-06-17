'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaStar, FaChevronDown } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const faqItems = [
  {
    question: 'What is the cost of proposal decoration in Agra?',
    answer: 'The price for proposal decoration in Agra starts from ₹3,999 for standard hotel room balloon decorations and goes up to ₹24,999+ for premium luxury rooftop setups or private candle light dining experiences with views of the Taj Mahal.'
  },
  {
    question: 'Do you provide rooftop proposal decoration?',
    answer: 'Yes, we are specialists in rooftop proposal decorations in Agra. We set up beautiful illuminated heart arches, neon "Will You Marry Me" signage, fairy lights, and red carpet runways on premium partner hotel rooftops or private terraces.'
  },
  {
    question: 'Can you arrange same day proposal decoration?',
    answer: 'Yes! We can coordinate same-day proposal decorations in Agra. However, we advise booking at least 24 to 48 hours in advance to guarantee slots and customization options.'
  },
  {
    question: 'Do you provide hotel room proposal decoration?',
    answer: 'Yes, we provide romantic surprise room makeovers. We decorate hotel rooms across Agra with rose petals, custom balloons (chrome and metallic), candles, and photo hanging setups.'
  },
  {
    question: 'Can you customize proposal themes?',
    answer: 'Absolutely! We can customize everything from color themes (classic red, pastel, rose gold) to custom floral backdrops, cold pyros, live violin players, and personalized text.'
  }
];

export default function AgraProposalPage() {
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
          style={{ backgroundImage: "url('/images/hero-1.jpeg')" }}
        ></div>
        <div className="container mx-auto px-4 relative z-20 max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">
            Proposal Decoration in Agra
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200">
            Create a lifetime memory in the city of love. Premium surprise proposal setups, romantic rooftop decors, and candlelit pathways customized for your perfect moment.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary text-lg px-8 py-3 rounded-lg shadow-lg">
              Get Free Quote
            </Link>
            <Link href="/wedding-planner-in-agra" className="btn-secondary text-lg px-8 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white border-white/30">
              Agra Wedding Services
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
                  Why Choose Eventkro for Surprise Proposal Planning in Agra
                </h2>
                <p className="leading-relaxed mb-4">
                  Planning a marriage proposal is one of the most exciting yet nerve-wracking milestones in your life. It is the beginning of a beautiful lifelong commitment, and the setup needs to be absolutely perfect to reflect your unique bond. As the premier surprise proposal planner in Agra, Eventkro understands how to turn your vision into an unforgettable reality. We do not just put up balloons; we design an emotional, atmospheric experience that will make your partner say an enthusiastic "Yes!"
                </p>
                <p className="leading-relaxed mb-4">
                  Agra, famously known as the home of the Taj Mahal—the ultimate monument of eternal love—is the most romantic backdrop in India for a proposal. Deciding to pop the question here is a beautiful choice, but executing it flawlessly requires localized vendor networks, perfect coordination, and meticulous attention to detail. Eventkro provides comprehensive planning, securing private locations with breathtaking views, setting up high-quality decorative elements, and scheduling professional photographers to capture the reaction.
                </p>
                <p className="leading-relaxed mb-4">
                  Here is why couples trust Eventkro for proposal decorations in Agra:
                </p>
                <ul className="space-y-3 mb-6 list-disc pl-5">
                  <li><strong>Custom Design & Themes:</strong> Whether you want a classic red rose candlelit pathway, a bohemian teepee setup with warm fairy lights, or a modern marquee LED sign, we customize every detail.</li>
                  <li><strong>Taj View Partners:</strong> We coordinate with exclusive rooftops, cafes, and heritage hotels on Fatehabad Road that offer unobstructed views of the Taj Mahal for a royal proposal.</li>
                  <li><strong>End-to-End Execution:</strong> From venue booking, structural installation, timeline coordination with your partner, to the final cleaning, we handle everything so you can focus entirely on the moment.</li>
                  <li><strong>Premium Materials Only:</strong> We use high-grade chrome balloons, premium fresh flowers, sturdy wooden arches, and warm LED neon light boxes to ensure the setups look premium in reality and in photos.</li>
                </ul>
              </div>

              {/* 3. Romantic Proposal Decoration Packages */}
              <div id="packages" className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Romantic Proposal Decoration Packages in Agra
                </h2>
                <p className="leading-relaxed mb-6">
                  Every couple is unique, which is why we offer three distinct proposal decoration packages to suit different preferences, venues, and budgets. Each package can be customized further with add-on elements.
                </p>
                <div className="space-y-6 not-prose">
                  {/* Basic Package */}
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">1. Romantic Room Surprise Package (Standard)</h3>
                        <p className="text-gray-500 text-sm mt-1">Ideal for indoor hotel room transformations and private residences</p>
                      </div>
                      <span className="bg-[#ff5722]/10 text-[#ff5722] text-sm px-3 py-1 rounded-full font-bold">From ₹3,999</span>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-2 pl-4 list-disc">
                      <li>150-200 Metallic / Pastel Balloons (Red and White themed)</li>
                      <li>"Will You Marry Me" foil alphabet letters or standard backdrop garland</li>
                      <li>Rose petal pathway on the floor with 20 tea-light candles in safe glass holders</li>
                      <li>Heart-shaped balloon bunch on the bed with personalized photos hanging from ribbons</li>
                      <li>Professional setup and cleaning by our local decorator</li>
                    </ul>
                  </div>

                  {/* Premium Package */}
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-200 relative">
                    <span className="absolute -top-3 right-6 bg-red-600 text-white text-xs px-3 py-1 rounded-full font-semibold">Best Seller</span>
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">2. Marry Me Marquee & Heart Arch Setup (Premium)</h3>
                        <p className="text-gray-500 text-sm mt-1">Perfect for private rooftops, lawns, and spacious terraces</p>
                      </div>
                      <span className="bg-[#ff5722]/10 text-[#ff5722] text-sm px-3 py-1 rounded-full font-bold">From ₹9,999</span>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-2 pl-4 list-disc">
                      <li>Large 3ft LED Marquee letters spelling out "MARRY ME"</li>
                      <li>Beautiful 7ft circular or heart-shaped metallic arch decorated with artificial or fresh roses and foliage</li>
                      <li>Red carpet runway flanked by warm fairy light poles and led candles in glass vases</li>
                      <li>Cold Pyro sparkle setup (2 pieces) to trigger right at the moment of proposal</li>
                      <li>Ambient spotlighting and balloon cloud decor elements</li>
                    </ul>
                  </div>

                  {/* Elite Package */}
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="flex flex-wrap justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">3. Royal Taj-View Dinner Proposal Setup (Elite)</h3>
                        <p className="text-gray-500 text-sm mt-1">Our ultimate luxury experience combining scenery, music, and decorations</p>
                      </div>
                      <span className="bg-[#ff5722]/10 text-[#ff5722] text-sm px-3 py-1 rounded-full font-bold">From ₹19,999</span>
                    </div>
                    <ul className="text-sm text-gray-600 space-y-2 pl-4 list-disc">
                      <li>Exclusive venue booking of a private rooftop section overlooking the Taj Mahal</li>
                      <li>Full premium decoration including fresh rose/orchid arrangements, red carpet, and high-end fairy lighting</li>
                      <li>Large "WILL YOU MARRY ME" neon signage board mounted on a premium geometric backdrop</li>
                      <li>A private, beautifully decorated candlelit dinner table setup with premium cutlery and menu coordination</li>
                      <li>Live Violinist or Guitarist playing your partner's favorite romantic tracks for 30 minutes</li>
                      <li>Cold Pyro fireworks (4 pieces) and a dedicated on-site proposal coordinator</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 4. Rooftop Proposal Setup */}
              <div id="rooftop" className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Rooftop Proposal Setup in Agra
                </h2>
                <p className="leading-relaxed mb-4">
                  Rooftop proposals have a magical, open-air charm that is unmatched. Setting up your surprise on a rooftop allows you to utilize the beautiful skyline of Agra, especially during sunset or night when the city lights up. Our <strong>rooftop proposal decoration</strong> packages are carefully structured to handle wind challenges, capture ambient light, and create a cozy, exclusive space.
                </p>
                <p className="leading-relaxed mb-4">
                  When you book a rooftop proposal setup with Eventkro in Agra, we coordinate with the venue management to secure early entry, set up the heavy metal frameworks safely, and map out the lighting layout. We recommend incorporating large LED marquee letters, warm bulb strings, and a geometric floral arch. Flanking the walkway with lanterns and flower petals completes the pathway to your new beginning.
                </p>
              </div>

              {/* 5. Candle Light Proposal Setup */}
              <div id="candle-light" className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Candle Light Proposal Setup in Agra
                </h2>
                <p className="leading-relaxed mb-4">
                  There is nothing more classic and universally romantic than a candlelit setup. A **candle light proposal setup** sets a calm, intimate, and emotional tone. We design layouts that utilize hundreds of real wax candles in protective glass cylinders, paired with high-quality LED battery-operated tea lights to ensure absolute safety, especially near balloon and drape decors.
                </p>
                <p className="leading-relaxed mb-4">
                  Imagine walking your partner into a dim, quiet room or a private outdoor cabana, where the only source of light is the soft, golden flicker of candles forming a massive heart on the floor. Flanked by deep red rose petals and delicate glass vases, this setup leads directly to a table set for two. We coordinate the placement of candles to maximize the photographic appeal, ensuring that your faces are perfectly illuminated without losing the moody, romantic atmosphere.
                </p>
              </div>

              {/* 6. Hotel Room Proposal Decoration */}
              <div id="hotel-room" className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Surprise Hotel Room Proposal Decoration
                </h2>
                <p className="leading-relaxed mb-4">
                  If you prefer an intimate and private setting away from public eyes, a **hotel room proposal decoration** is the perfect solution. Agra houses some of the most luxurious hotels in India, ranging from luxury 5-star properties like Jaypee Palace and ITC Mughal to boutique heritage stays on Fatehabad Road. 
                </p>
                <p className="leading-relaxed mb-4">
                  Our team coordinates directly with the hotel staff (or utilizes your check-in timing) to enter the room while you are out for a sightseeing tour or a casual lunch. Within 60 to 90 minutes, we completely transform the room. We fill the ceiling with helium-grade balloons with dangling ribbons holding your favorite couple photos, place a rose petal heart outline on the bed, set up a warm "MARRY ME" neon sign on an easel, and create a candlelit walkway leading from the entrance door. When you open the door, the visual impact is immediate and incredibly moving.
                </p>
              </div>

              {/* 7. Marriage Proposal Decoration */}
              <div id="marriage-proposal" className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Creative Marriage Proposal Decoration Ideas
                </h2>
                <p className="leading-relaxed mb-4">
                  A marriage proposal is a declaration of love, and the design should reflect your journey together. At Eventkro, we specialize in high-end **marriage proposal decoration** concepts. We stay updated with global design trends to offer you layouts that go beyond standard decor.
                </p>
                <p className="leading-relaxed mb-4">
                  Some of our popular creative design concepts include:
                </p>
                <ul className="space-y-2 mb-4 list-disc pl-5">
                  <li><strong>The Bohemian Teepee:</strong> A beautifully styled wooden teepee tent draped in white lace, decorated with pampas grass, warm fairy lights, rug overlays, and soft floor cushions. Perfect for garden lawns or sandy banks near the river.</li>
                  <li><strong>The Floral Infinity Ring:</strong> A massive circular arch completely covered in white wisteria, eucalyptus, and pastel roses, representing eternal love.</li>
                  <li><strong>The Memory Lane:</strong> A walkway lined with custom-built photo frames on wooden easels, showcasing your journey from your first date to the present, leading to the proposal spot.</li>
                </ul>
              </div>

              {/* 8. Surprise Proposal Planning */}
              <div id="surprise-planning" className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  The Surprise Proposal Planning Process
                </h2>
                <p className="leading-relaxed mb-4">
                  To ensure that the surprise is kept secret and everything goes smoothly on the day, Eventkro follows a structured, step-by-step planning process:
                </p>
                <ol className="space-y-3 mb-6 list-decimal pl-5">
                  <li><strong>Initial Consultation:</strong> We discuss your vision, preferred locations, budget, and details about your partner's taste (e.g., color choices, music preferences).</li>
                  <li><strong>Venue Sourcing & Selection:</strong> We recommend or coordinate with selected hotels, private rooftops, or gardens in Agra, handling bookings and permissions.</li>
                  <li><strong>Concept Design:</strong> We create a digital mood board detailing the exact layout, colors, signage, and floral arrangements.</li>
                  <li><strong>Day Coordination & Setup:</strong> Our team arrives at the venue hours before the proposal to build the structure, install the lighting, and ensure the pathway is set. We coordinate with you via WhatsApp to keep you updated on progress.</li>
                  <li><strong>The Execution:</strong> We stand by to trigger cold pyros, manage the music playlist, and guide the photographer to their hiding spot as you arrive.</li>
                </ol>
              </div>

              {/* 9. Proposal Decoration Pricing */}
              <div id="pricing-details" className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Proposal Decoration Pricing in Agra
                </h2>
                <p className="leading-relaxed mb-4">
                  We believe in complete transparency, which is why we offer upfront pricing with no hidden charges. Below is a summary of standard charges for decorations and popular add-ons:
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
                      <td className="px-6 py-4 font-medium text-gray-900">Outdoor Heart Arch & Fairy Light Setup</td>
                      <td className="px-6 py-4">₹8,999 - ₹12,999</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Premium Marquee "MARRY ME" LED Setup</td>
                      <td className="px-6 py-4">₹11,999 - ₹15,999</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Add-on: Live Violinist or Guitarist (30 mins)</td>
                      <td className="px-6 py-4">₹3,500</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Add-on: Professional Proposal Photographer</td>
                      <td className="px-6 py-4">₹4,000 - ₹6,000</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-medium text-gray-900">Add-on: Cold Pyro Fireworks (Set of 4)</td>
                      <td className="px-6 py-4">₹1,500</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 10. Areas We Serve */}
              <div id="areas-served" className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Localities and Areas We Serve in Agra
                </h2>
                <p className="leading-relaxed mb-4">
                  Eventkro provides surprise decoration services across all major residential, commercial, and heritage areas of Agra. We transport our decorative materials and floral supplies directly to your doorstep or chosen venue.
                </p>
                <p className="leading-relaxed mb-4">
                  Our service coverage area in Agra includes:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 not-prose mb-6 text-sm text-gray-600">
                  <div className="p-3 bg-gray-50 rounded border border-gray-100">✓ Fatehabad Road</div>
                  <div className="p-3 bg-gray-50 rounded border border-gray-100">✓ Tajganj</div>
                  <div className="p-3 bg-gray-50 rounded border border-gray-100">✓ Sanjay Place</div>
                  <div className="p-3 bg-gray-50 rounded border border-gray-100">✓ Kamla Nagar</div>
                  <div className="p-3 bg-gray-50 rounded border border-gray-100">✓ Dayalbagh</div>
                  <div className="p-3 bg-gray-50 rounded border border-gray-100">✓ Sikandra</div>
                  <div className="p-3 bg-gray-50 rounded border border-gray-100">✓ Shastri Nagar</div>
                  <div className="p-3 bg-gray-50 rounded border border-gray-100">✓ Sastripuram</div>
                  <div className="p-3 bg-gray-50 rounded border border-gray-100">✓ Shahganj</div>
                </div>
                <p className="leading-relaxed">
                  We also cover nearby surrounding locations in the Agra district, including Tundla, Fatehabad town, and Achhnera. (Additional transportation charges may apply for areas located outside municipal limits).
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
                <h4 className="font-bold text-gray-900">Explore More Services in Agra</h4>
                <p>
                  Eventkro is a full-service event design agency. If you are planning subsequent celebrations, check out our general <Link href="/event-planner-in-agra" className="text-[#ff5722] hover:underline font-semibold">Event Planner in Agra</Link> page, or prepare for the big day with our professional <Link href="/wedding-planner-in-agra" className="text-[#ff5722] hover:underline font-semibold">Wedding Planner in Agra</Link> package. For quick, compact surprises, view our specialized <Link href="/car-boot-decoration-in-agra" className="text-[#ff5722] hover:underline font-semibold">Car Boot Decoration in Agra</Link> service. You can also view custom packages on our <Link href="/pricing" className="text-[#ff5722] hover:underline font-semibold">Pricing</Link> page or speak to our designer via the <Link href="/contact" className="text-[#ff5722] hover:underline font-semibold">Contact Us</Link> portal.
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
                    <Link href="/proposal-decoration-in-mathura" className="text-gray-600 hover:text-[#ff5722] text-sm py-2 border-b border-gray-200 transition-colors">
                      Proposal Decoration in Mathura →
                    </Link>
                    <Link href="/proposal-decoration-in-firozabad" className="text-gray-600 hover:text-[#ff5722] text-sm py-2 border-b border-gray-200 transition-colors">
                      Proposal Decoration in Firozabad →
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Plan the Perfect Proposal in Agra?</h2>
          <p className="text-lg mb-8 text-white/95 leading-relaxed">
            Let's design a custom setup that tells your unique love story. From Taj-view rooftops to cozy hotel rooms, Eventkro plans it all with absolute secrecy and care.
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
