'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaStar, FaChevronDown, FaCheckCircle } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const faqItems = [
  {
    question: 'What is a car boot decoration and how is it executed in Mathura?',
    answer: 'A car boot decoration, also known as a car dikki decoration or car trunk decoration, is a creative surprise styling performed inside the rear compartment of your vehicle. Our designers use premium metallic balloons, LED fairy lights, floral vines, printed photos, and personalized cards to create a magical display. Once we finish the setup at your designated location in Mathura or Vrindavan, all you need to do is drive your partner to the spot, ask them to open the trunk, and watch their priceless reaction.'
  },
  {
    question: 'How much in advance do I need to book my surprise car decoration in Mathura?',
    answer: 'We recommend booking at least 2 to 4 days in advance to ensure availability of custom props, theme-specific balloons, and our expert decorators. For urgent or same-day bookings, please contact our helpline directly. While we do our best to accommodate last-minute requests, advanced booking guarantees your preferred slot and complete customization.'
  },
  {
    question: 'Where can you set up the car trunk decoration in Mathura Vrindavan?',
    answer: 'We provide doorstep setup at your home parking, apartment garage, office premises, hotel lawns, or parking areas of restaurants and cafes across Mathura and Vrindavan. Popular spots include Krishna Nagar, Dampier Nagar, Highway Plaza, Chhatikara Road, Raman Reti, and near the Yamuna River ghats. We coordinate timing and setup dynamically to ensure the surprise is complete.'
  },
  {
    question: 'Can you customize the car boot birthday decoration with Brijwasi or spiritual themes?',
    answer: 'Yes, absolutely! We specialize in custom themes. Whether you want a romantic red-and-white theme for a proposal, a vibrant pastel layout for a birthday, a sophisticated black-and-gold setup for an anniversary, or a spiritual Brij-style setup with fresh marigold and jasmine garlands, we adapt the balloons, lights, and banners to match your vision.'
  },
  {
    question: 'Does the car boot decoration damage the car paint or trunk components?',
    answer: 'No, safety is our top priority. We use non-damaging materials, gentle paper tapes, and clips that do not leave any residue, scratches, or damage on your car’s paint, upholstery, or electronic wiring. Our professional team is highly experienced with various vehicle models ranging from hatchbacks and sedans to large SUVs.'
  }
];

const packages = [
  {
    name: 'Basic Surprise Decor',
    price: '₹1,999',
    features: [
      '40-50 Metallic Balloons',
      'Happy Birthday/Anniversary Foil Banner',
      'LED Fairy Lights (1 String)',
      'Basic Ribbon Hangings',
      'On-site Setup (Hatchback/Sedan)'
    ],
    rating: 4.8
  },
  {
    name: 'Premium Romantic setup',
    price: '₹3,499',
    features: [
      '80-100 Chrome & Pastel Balloons',
      'Customized Foil Letters (Name/Age)',
      'High-quality LED Fairy Lights (2 Strings)',
      '8-10 Printed Hanging Photos',
      'Artificial Flower Vines or Fresh Marigolds',
      'Heart-shaped Foil Balloons',
      'On-site Setup (Sedan/SUV)'
    ],
    rating: 4.9
  },
  {
    name: 'Elite Proposal/Anniversary Suite',
    price: '₹4,999',
    features: [
      '120+ Premium Latex & Chrome Balloons',
      'Neon "Marry Me" or "Love" Sign (Rental)',
      'Fresh Rose Petal Path & Heart Arrangement',
      'Customized Theme Banners & Photos',
      'Multiple LED String Lights & Pillar Candles',
      'Surprise Confetti Popper & Chocolates Box',
      'Dedicated Professional Lead Decorator'
    ],
    rating: 5.0
  }
];

export default function MathuraCarBootPage() {
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
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
          style={{ backgroundImage: "url('/images/hero-slide-3.jpg')" }}
        ></div>
        <div className="container mx-auto px-4 relative z-20 max-w-4xl">
          <span className="bg-[#ff5722] text-white px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wider mb-3 inline-block">
            Trending Surprises in Mathura Vrindavan
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">
            Car Boot Decoration in Mathura
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Plan a heart-warming surprise with premium car dikki decoration and surprise car trunk balloon setups for birthdays, proposals, and anniversaries in Mathura.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary text-lg px-8 py-3 rounded-lg shadow-lg">
              Book Surprise Now
            </Link>
            <Link href="/pricing" className="btn-secondary text-lg px-8 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white border-white/30">
              View Pricing
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
              
              {/* Introduction & About Section */}
              <div id="about" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Beautiful Car Boot Decoration in Mathura: The Ultimate Surprise Experience
                </h2>
                <p className="leading-relaxed mb-4">
                  Welcome to the holy land of Mathura, where the spirit of love and devotion is present in every corner. Celebrations in this culturally rich Brijwasi region are deep family moments, and finding a unique way to surprise a loved one is always highly valued. Introducing the magical concept of a <strong>car boot decoration in mathura</strong>. This trendy surprise, often referred to as a <strong>car dikki decoration</strong> or <strong>car trunk decoration</strong>, is a complete party setup created inside the trunk of your vehicle. Imagine your partner’s face when they open the trunk at a scenic spot in Vrindavan or along the Yamuna River, only to find a glowing array of LED string lights, customized photos, fresh flower arrangements, and high-quality chrome balloons. It is the perfect, private way to celebrate a special milestone.
                </p>
                <p className="leading-relaxed mb-4">
                  At Eventkro, we believe that you do not need to book a massive, expensive banquet hall to create a memorable experience. Our surprise car decoration service brings the celebration directly to you. Our professional team travels to your preferred location in Mathura or Vrindavan, handles the complete installation in about 30 to 45 minutes, and ensures the setup is clean, beautiful, and completely secure. We design layouts that fit the dimensions of hatchbacks, sedans, and SUVs perfectly, adjusting the theme, balloon colors, and signages to reflect your specific vision. Let us turn your car into a portable memory maker.
                </p>
                <p className="leading-relaxed">
                  Whether you are planning a romantic proposal under the stars, a midnight birthday surprise for your best friend, or a warm welcome for a newborn baby, our team is equipped to deliver. We combine local insights with professional event coordination standards to guarantee your absolute satisfaction. Book a slot today and experience the Eventkro standard of surprise decorations.
                </p>
              </div>

              {/* The Popularity of Surprise Car Decoration */}
              <div className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Why Surprise Car Decoration is Sweeping Across Mathura & Vrindavan
                </h2>
                <p className="leading-relaxed mb-4">
                  With the commercial growth of Mathura and Vrindavan, families and young couples are looking for modern, intimate, and budget-friendly celebration ideas. A traditional restaurant booking can sometimes feel rushed or lack the personal touch that makes a celebration feel truly special. A <strong>surprise car decoration</strong> solves this by offering a private, portable space that you can set up anywhere, anytime.
                </p>
                <p className="leading-relaxed mb-4">
                  Here is why car boot decoration is the ideal choice for Brijwasi families:
                </p>
                <ul className="space-y-3 mb-6 list-disc pl-5">
                  <li><strong>Unmatched Surprise Factor:</strong> The element of surprise is absolute. Your partner will think you are just taking them out for a regular drive, leaving them completely speechless when they see the decorated trunk.</li>
                  <li><strong>Spiritual & Cultural Customization:</strong> We can combine modern balloon arches with traditional marigolds, jasmine garlands, and spiritual themes that reflect the culture of Lord Krishna's land.</li>
                  <li><strong>Budget-Friendly Planning:</strong> Get a premium visual setup with fairy lights, chrome balloons, and custom photo banners without paying high venue rentals or booking fees.</li>
                  <li><strong>Doorstep Setup:</strong> You do not need to carry a car full of balloons yourself. Our decorators will meet you at your home in Krishna Nagar, a parking area in Vrindavan, or a quiet spot along the river.</li>
                  <li><strong>Safe & Gentle Materials:</strong> We use high-quality, non-marking adhesive tapes and specialized clips that secure the decoration elements without leaving sticky residue or causing scratches.</li>
                </ul>
              </div>

              {/* Occasions for Car Trunk Decor */}
              <div id="occasions" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Perfect Occasions for Car Trunk Decoration in Mathura
                </h2>
                <p className="leading-relaxed mb-6">
                  Our car trunk decoration designs are highly adaptable and can be tailored to suit whatever milestone you are celebrating:
                </p>
                
                <div className="space-y-6">
                  <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">1. Car Boot Birthday Decoration</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      Surprise your partner, sibling, or parent on their birthday. A <strong>car boot birthday decoration</strong> is styled with chrome balloons, foil age letters, and customized birthday banners. We can also set up a compact table next to the trunk to place a customized cake and a gift, creating a personalized birthday zone wherever you park.
                    </p>
                    <p className="text-xs text-gray-500 font-semibold">Recommended Themes: Golden & Black Classic, Rose Gold & Pink, Neon Glow Birthday.</p>
                  </div>

                  <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">2. Car Boot Anniversary Decoration</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      Celebrate years of love and togetherness with a touch of nostalgia. A <strong>car boot anniversary decoration</strong> focuses on red heart balloons, warm LED lighting grids, rose petals, and printed photos depicting key memories of your journey. It is a romantic, highly emotional surprise that honors your history.
                    </p>
                    <p className="text-xs text-gray-500 font-semibold">Recommended Themes: Classic Red & White, Crimson & Gold, Pastel Floral.</p>
                  </div>

                  <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">3. Car Boot Proposal Decoration</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      Pop the question in the most romantic way possible. A <strong>car boot proposal decoration</strong> features glowing "MARRY ME" neon signs, heavy floral borders, fairy lights, and red roses. Combine this setup with a quiet spot in Vrindavan or along the Yamuna River for an unforgettable proposal.
                    </p>
                    <p className="text-xs text-gray-500 font-semibold">Recommended Themes: Dreamy White & Gold, Romantic Red Rose, Neon Glow Proposal.</p>
                  </div>

                  <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">4. Baby Welcoming & Showers</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      Welcome the new mother and baby home in style. Decorating the car trunk that brings them home from the hospital is a beautiful gesture. We use cute baby feet foils, soft pastel balloons, "Welcome Baby" banners, and teddy bear props to make the arrival incredibly warm and joyful.
                    </p>
                    <p className="text-xs text-gray-500 font-semibold">Recommended Themes: Pastel Pink & White, Pastel Blue & Cloud, Mint Green & Yellow.</p>
                  </div>
                </div>
              </div>

              {/* Design Elements & Customization */}
              <div className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Key Design Elements We Use to Style Your Car Dikki
                </h2>
                <p className="leading-relaxed mb-4">
                  A high-impact car dikki decoration is a carefully balanced composition of lighting, balloons, and personal elements. Our decorators in Mathura use premium materials to create a clean, elegant look:
                </p>
                <ul className="space-y-3 mb-6 list-none pl-0">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#ff5722] mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <strong>Premium Latex & Chrome Balloons:</strong> We avoid thin balloons that pop during transport. We use thick, high-shine chrome balloons, metallic foils, and organic pastel balloon arches that stay full and fresh.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#ff5722] mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <strong>Warm LED String Lights:</strong> Lighting is essential for evening and midnight surprises. We use battery-operated fairy lights, LED strip backlights, and glowing neon signboards that look spectacular in photos.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#ff5722] mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <strong>Hanging Photographs:</strong> We print and hang 8 to 15 of your favorite photos using rustic wooden clips and strings, creating a personalized memory lane right in the trunk.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#ff5722] mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <strong>Floral Drapes & Petals:</strong> Adding green vines, artificial floral garlands, or fresh rose petals on the trunk floor and bumper elevates the aesthetic and makes the setup feel premium.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Pricing Packages Table */}
              <div id="packages" className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 pb-2 border-b-2 border-gray-100">
                  Affordable Car Boot Decoration Packages in Mathura
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We believe that premium surprises should be accessible to everyone. Eventkro offers three transparently priced packages, allowing you to choose the setup that fits your budget:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {packages.map((pkg, idx) => (
                    <div key={idx} className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300">
                      <div>
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="text-lg font-bold text-gray-900">{pkg.name}</h3>
                          <span className="text-sm bg-[#ff5722]/10 text-[#ff5722] px-2 py-1 rounded font-semibold">{pkg.rating} ★</span>
                        </div>
                        <div className="text-3xl font-extrabold text-[#ff5722] mb-6">{pkg.price}</div>
                        <ul className="space-y-3 text-sm text-gray-600 mb-8">
                          {pkg.features.map((feat, fidx) => (
                            <li key={fidx} className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-[#ff5722] rounded-full mr-2"></span>
                              {feat}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <Link href="/contact" className="btn-primary text-center py-2.5 rounded-lg text-sm font-semibold w-full block">
                        Book Package
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Local Places in Mathura to Plan the Surprise */}
              <div className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Top Local Spots in Mathura Vrindavan to Plan Your Car Trunk Surprise
                </h2>
                <p className="leading-relaxed mb-4">
                  Where you execute the surprise is just as important as the decoration itself. The Brij region offers beautiful local spots that can make your car trunk surprise even more romantic and memorable:
                </p>
                <ul className="space-y-3 mb-6 list-disc pl-5">
                  <li><strong>Yamuna Riverside Parking:</strong> Park your vehicle near the riverside gardens in Mathura around sunset. The serene river, combined with your lit-up car trunk, creates an unmatched setting for romantic proposals.</li>
                  <li><strong>Vrindavan Chhatikara Road Cafes:</strong> If you are planning a dinner date in Vrindavan, coordinate with one of the premium cafes along Chhatikara Road or Prem Mandir area. You can park in their lot and set up the surprise, opening the boot right after dinner.</li>
                  <li><strong>Krishna Nagar Shopping Areas:</strong> Ideal for quick afternoon surprises or working partner celebrations. We can set up in the parking slots while they are out shopping or at work.</li>
                  <li><strong>Dampier Nagar Driveways:</strong> For a quiet, family-centric surprise, setting up right inside your home driveway in Dampier Nagar or Govardhan Road is convenient and comfortable.</li>
                </ul>
              </div>

              {/* Why Choose Eventkro */}
              <div className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Why Book Your Car Dikki Decoration with Eventkro?
                </h2>
                <p className="leading-relaxed mb-4">
                  Eventkro is Mathura\'s trusted event management team. We bring the same dedication, professionalism, and creative eye to a small car trunk setup that we apply to grand destination weddings. When you hire us, you receive:
                </p>
                <ul className="space-y-3 mb-6 list-none pl-0">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#ff5722] mt-1 mr-3 flex-shrink-0" />
                    <div><strong>Punctual Decorators:</strong> We value your timeline. Our team arrives strictly on time, completing the setup within the agreed 30-45 minutes slot without delays.</div>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#ff5722] mt-1 mr-3 flex-shrink-0" />
                    <div><strong>High Quality Standards:</strong> We do not use thin balloons that burst within minutes. We utilize double-stuffed pastel latex and branded chrome balloons that remain intact for up to 24 hours.</div>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#ff5722] mt-1 mr-3 flex-shrink-0" />
                    <div><strong>Complete Customization:</strong> We adjust details to fit your partner\'s style. Want a specific theme, neon lights, fresh lilies instead of roses, or a customized banner? We make it happen.</div>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#ff5722] mt-1 mr-3 flex-shrink-0" />
                    <div><strong>No Car Damage Guarantee:</strong> Our team is trained to execute decorations safely. We use high-quality painter\'s tape and specialized hooks that leave no sticky residue or scratches on your vehicle.</div>
                  </li>
                </ul>
                <p className="leading-relaxed">
                  We invite you to check out our other premium services in the region, such as our general <Link href="/event-planner-in-mathura">Event Planner in Mathura</Link> and our traditional <Link href="/wedding-planner-in-mathura">Wedding Planner in Mathura</Link> pages to see the depth of our event design capabilities.
                </p>
              </div>

              {/* FAQ Section */}
              <div id="faq" className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 pb-2 border-b-2 border-gray-100">
                  Frequently Asked Questions (Mathura Car Boot Surprise)
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
                  <p className="text-gray-600 text-sm mb-6">Fill out our contact form to schedule your surprise decoration slot. Our team coordinates timing and location details dynamically.</p>
                  <Link href="/contact" className="btn-primary w-full text-center block py-3 rounded-lg shadow-lg font-semibold mb-4">
                    Book Car Surprise
                  </Link>
                  <div className="text-center text-gray-500 text-xs">
                    Or call our helpline directly: <br/>
                    <strong className="text-gray-800 text-sm font-semibold">+91 7017520811</strong>
                  </div>
                </div>

                {/* Internal Linking Box */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Mathura Local Services</h3>
                  <div className="flex flex-col gap-2">
                    <Link href="/event-planner-in-mathura" className="text-gray-600 hover:text-[#ff5722] text-sm py-2 border-b border-gray-200 transition-colors">
                      General Event Planner Mathura →
                    </Link>
                    <Link href="/wedding-planner-in-mathura" className="text-gray-600 hover:text-[#ff5722] text-sm py-2 border-b border-gray-200 transition-colors">
                      Wedding Planner Mathura →
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
                    <Link href="/car-boot-decoration-in-agra" className="text-gray-600 hover:text-[#ff5722] text-sm py-2 border-b border-gray-200 transition-colors">
                      Car Boot Decor Agra →
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Plan the Perfect Surprise in Mathura?</h2>
          <p className="text-lg mb-8 text-white/95 leading-relaxed">
            From romantic proposals with a view of the river to birthday surprises in Vrindavan, Eventkro handles everything with absolute care. Contact us now for a custom package.
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
