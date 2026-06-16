'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaStar, FaChevronDown, FaCheckCircle } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const faqItems = [
  {
    question: 'What is a car boot decoration and how is it executed in Agra?',
    answer: 'A car boot decoration, also known as a car dikki decoration or car trunk decoration, is a creative surprise styling performed inside the rear compartment of your vehicle. Our designers use premium metallic balloons, LED fairy lights, floral vines, printed photos, and personalized cards to create a magical display. Once we finish the setup at your designated location in Agra, all you need to do is drive your partner to the spot, ask them to open the trunk, and watch their priceless reaction.'
  },
  {
    question: 'How much in advance do I need to book my surprise car decoration in Agra?',
    answer: 'We recommend booking at least 2 to 4 days in advance to ensure availability of custom props, theme-specific balloons, and our expert decorators. For urgent or same-day bookings, please contact our helpline directly. While we do our best to accommodate last-minute requests, advanced booking guarantees your preferred slot and complete customization.'
  },
  {
    question: 'Where can you set up the car trunk decoration in Agra?',
    answer: 'We provide doorstep setup at your home parking, apartment garage, office premises, hotel lawns, or parking areas of restaurants and cafes across Agra. Popular spots include Fatehabad Road, Sanjay Place, Tajganj, Dayalbagh, and Kamla Nagar. If you plan to propose or surprise someone near the Taj Mahal, we can coordinate the timing and setup at a nearby parking lot.'
  },
  {
    question: 'Can you customize the car boot birthday decoration with specific themes?',
    answer: 'Yes, absolutely! We specialize in custom themes. Whether you want a romantic red-and-white theme for a proposal, a vibrant pastel layout for a birthday, a sophisticated black-and-gold setup for an anniversary, or a cartoon-themed surprise for kids, we adapt the balloons, lights, and banners to match your vision.'
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

export default function AgraCarBootPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="bg-white min-h-screen">
      <Header />

      {/* Hero Banner Section */}
      <section className="relative h-[65vh] flex items-center justify-center text-center text-white overflow-hidden pt-16">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
          style={{ backgroundImage: "url('/images/hero-1.jpeg')" }}
        ></div>
        <div className="container mx-auto px-4 relative z-20 max-w-4xl">
          <span className="bg-[#ff5722] text-white px-4 py-1 rounded-full text-sm font-semibold uppercase tracking-wider mb-3 inline-block">
            Trending Surprises in Agra
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight leading-tight">
            Car Boot Decoration in Agra
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
            Create unforgettable memories with premium car dikki decoration and surprise car trunk balloon setups for birthdays, proposals, and anniversaries in Agra.
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
                  Magical Car Boot Decoration in Agra: The Ultimate Surprise Concept
                </h2>
                <p className="leading-relaxed mb-4">
                  Imagine the excitement of blindfolding your partner, driving them to a scenic location in the city of Agra, and asking them to open the trunk of your car. As they click the latch, the boot swings open to reveal a gorgeous cascade of glowing fairy lights, premium chrome balloons, custom photo memories, and a beautiful message spelling out "Happy Birthday" or "Will You Marry Me". This is the magic of a <strong>car boot decoration in agra</strong>, a trend that has rapidly become the most popular way to surprise loved ones. Also commonly referred to as <strong>car dikki decoration</strong> or <strong>car trunk decoration</strong>, this portable party setup is highly flexible, completely private, and guarantees a stunning response.
                </p>
                <p className="leading-relaxed mb-4">
                  At Eventkro, we believe that life’s milestones deserve grand celebrations, no matter the venue size. With our surprise car decoration packages, we turn the ordinary space of a vehicle's boot into an extraordinary visual canvas. Our professional decorators travel to your doorstep or preferred spot anywhere in Agra, bringing all the materials and executing the layout quickly and cleanly. Whether you drive a compact hatchback, a sleek sedan, or a massive SUV, we create customized designs that leverage the unique curves and dimensions of your car’s trunk. Let us handle the details while you enjoy the look of pure wonder on your partner’s face.
                </p>
                <p className="leading-relaxed">
                  Agra, a city world-renowned for its monuments of love like the Taj Mahal, provides the perfect backdrop for romantic setups. By booking with Eventkro, you are choosing a team that understands local geography, values your privacy, and guarantees high-quality, long-lasting balloons and safe electrical lights. Explore our customized options and give your partner an event they will talk about for years.
                </p>
              </div>

              {/* The Popularity of Surprise Car Decoration */}
              <div className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Why Choose Surprise Car Decoration for Your Next Celebration?
                </h2>
                <p className="leading-relaxed mb-4">
                  Setting up a birthday party in a crowded cafe or a noisy restaurant can sometimes feel impersonal and lacks the element of surprise. A <strong>surprise car decoration</strong>, on the other hand, is uniquely personal. It offers a level of intimacy that standard venues simply cannot replicate. You have complete control over when and where the surprise happens. You can execute it right in your driveway, at a rooftop cafe parking lot, or at a secluded scenic point overlooking the Yamuna River.
                </p>
                <p className="leading-relaxed mb-4">
                  Here are some of the main reasons why Agra residents are choosing car dikki decorations over traditional parties:
                </p>
                <ul className="space-y-3 mb-6 list-disc pl-5">
                  <li><strong>The Unbeatable Surprise Factor:</strong> Your partner will think you are just taking them for a drive. They will have absolutely no clue that a mini-celebration space is waiting for them right in the back of the car.</li>
                  <li><strong>Cost-Effective Elegance:</strong> Renting a banquet hall or booking a premium table can be expensive. A car trunk decoration offers a high-impact visual setup at a fraction of the cost, making it highly accessible.</li>
                  <li><strong>Completely Customizable:</strong> From choosing the exact color palette of the balloons to hanging your favorite travel photos, every element can be personalized to tell your unique love story.</li>
                  <li><strong>Doorstep Setup & Convenience:</strong> You do not need to drive to a shop or carry balloons in your passenger seats. Eventkro’s team comes directly to your location in Agra and sets everything up on the spot.</li>
                  <li><strong>Safe for Your Vehicle:</strong> We use specialized non-marking tapes and clips that hold the decorations securely without causing any damage to your car’s paint, glass, or rubber sealings.</li>
                </ul>
              </div>

              {/* Occasions for Car Trunk Decor */}
              <div id="occasions" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Perfect Occasions for Car Boot Decoration in Agra
                </h2>
                <p className="leading-relaxed mb-6">
                  Our versatile decoration templates can be modified to suit any milestone you are celebrating. No matter the event, our team ensures the layout reflects the mood and significance of the day:
                </p>
                
                <div className="space-y-6">
                  <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">1. Car Boot Birthday Decoration</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      Make your partner or best friend feel like royalty on their special day. A <strong>car boot birthday decoration</strong> is styled with age-foil balloons, happy birthday banners, and metallic colors. We can also set up a small collapsible table inside or just next to the trunk to place a customized birthday cake, complete with sparkler candles to add that extra flare.
                    </p>
                    <p className="text-xs text-gray-500 font-semibold">Recommended Themes: Rose Gold & White, Midnight Black & Gold, Pastel Rainbow.</p>
                  </div>

                  <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">2. Car Boot Anniversary Decoration</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      Celebrate your years of togetherness with a touch of romance. A <strong>car boot anniversary decoration</strong> focuses on warm LED lighting, heart-shaped red foil balloons, rose petal pathways leading to the trunk, and retro-style hanging photographs depicting key moments of your marriage journey. It is a nostalgic and highly emotional experience.
                    </p>
                    <p className="text-xs text-gray-500 font-semibold">Recommended Themes: Deep Crimson Red & Gold, Warm White & Silver, Vintage Floral.</p>
                  </div>

                  <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">3. Car Boot Proposal Decoration</h3>
                    <p className="text-gray-600 text-sm mb-2">
                      Planning to pop the question in Agra? Skip the cliché dining setups and opt for a breathtaking <strong>car boot proposal decoration</strong>. We install glowing "MARRY ME" neon signs, heavy floral arches framing the boot, and an abundance of fairy lights that look spectacular in photographs. Pair this setup with a beautiful ring and the Taj Mahal in the background for a picture-perfect proposal.
                    </p>
                    <p className="text-xs text-gray-500 font-semibold">Recommended Themes: Dreamy White & Gold, Romantic Red Rose, Neon Glow Proposal.</p>
                  </div>

                  <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">4. Baby Welcoming & Baby Showers</h3>
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
                  Key Elements We Use to Style Your Car Dikki
                </h2>
                <p className="leading-relaxed mb-4">
                  A premium car dikki decoration is not just about throwing a few balloons inside. It is a carefully layered design that requires balance, lighting, and personalization. Our visual designers in Agra use a variety of high-grade components to build a full, rich, and visually balanced display:
                </p>
                <ul className="space-y-3 mb-6 list-none pl-0">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#ff5722] mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <strong>High-Quality Balloons:</strong> We avoid cheap, thin balloons that pop easily. We use thick, biodegradable latex balloons, metallic chrome balloons for a reflective shine, and customized foil balloons (letters, hearts, stars) that hold their shape for hours.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#ff5722] mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <strong>Dynamic LED Lighting:</strong> Lights are the soul of a trunk surprise, especially after sunset. We install warm-white LED fairy strings, battery-operated tea light candles, and custom neon light boards that create a warm, inviting glow.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#ff5722] mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <strong>Personalized Photography:</strong> We hang 8 to 15 high-quality prints of your favorite photographs using rustic wooden clips and strings, creating a personalized timeline of your relationship.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#ff5722] mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <strong>Floral Touches:</strong> Adding green leafy vines, artificial flower borders, or fresh red rose petals on the trunk floor and bumper elevates the aesthetic and makes the setup feel premium and fragrant.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#ff5722] mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <strong>Bespoke Signages:</strong> "Happy Birthday", "Happy Anniversary", "Will You Marry Me", or custom name banners are precisely placed in the center of the design to make the theme clear immediately.
                    </div>
                  </li>
                </ul>
              </div>

              {/* Pricing Packages Table */}
              <div id="packages" className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 pb-2 border-b-2 border-gray-100">
                  Affordable Car Boot Decoration Packages in Agra
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  We believe that premium designs should not come with premium price tags. Eventkro offers three transparently priced packages, allowing you to choose the setup that fits your budget and car model:
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

              {/* Local Places in Agra to Plan the Surprise */}
              <div className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Top Local Spots in Agra to Plan Your Car Trunk Surprise
                </h2>
                <p className="leading-relaxed mb-4">
                  Where you execute the surprise is just as important as the decoration itself. Agra offers beautiful local spots that can make your car trunk surprise even more romantic and memorable:
                </p>
                <ul className="space-y-3 mb-6 list-disc pl-5">
                  <li><strong>Taj View Points (Mehtab Bagh Area):</strong> Park your vehicle near the viewpoint around sunset. The Taj Mahal bathed in the orange glow of the setting sun, combined with your lit-up car trunk, creates an unmatched setting for proposals.</li>
                  <li><strong>Fatehabad Road Premium Cafes:</strong> If you are planning a dinner date, coordinate with one of the boutique cafes or hotels along Fatehabad Road. You can park in their lot and set up the surprise, opening the boot right after dinner.</li>
                  <li><strong>Sanjay Place Corporate Parks:</strong> Ideal for quick afternoon surprises or working partner celebrations. We can set up in the parking slots while they are at office.</li>
                  <li><strong>Dayalbagh Residential Gardens:</strong> For a quiet, family-centric surprise, setting up right inside your home driveway in Dayalbagh or Kamla Nagar is convenient and comfortable.</li>
                </ul>
              </div>

              {/* Why Choose Eventkro */}
              <div className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Why Book Your Car Dikki Decoration with Eventkro?
                </h2>
                <p className="leading-relaxed mb-4">
                  Eventkro is not just an online listing; we are Agra’s leading event management agency. We bring the same dedication, professionalism, and creative eye to a small car trunk setup that we apply to grand heritage weddings. When you hire us, you receive:
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
                    <div><strong>Complete Customization:</strong> We adjust details to fit your partner's style. Want a specific theme, neon lights, fresh lilies instead of roses, or a customized banner? We make it happen.</div>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-[#ff5722] mt-1 mr-3 flex-shrink-0" />
                    <div><strong>No Car Damage Guarantee:</strong> Our team is trained to execute decorations safely. We use high-quality painter's tape and specialized hooks that leave no sticky residue or scratches on your vehicle.</div>
                  </li>
                </ul>
                <p className="leading-relaxed">
                  We invite you to check out our other premium services in the region, such as our general <Link href="/event-planner-in-agra">Event Planner in Agra</Link> and our royal <Link href="/wedding-planner-in-agra">Wedding Planner in Agra</Link> pages to see the depth of our event design capabilities.
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Plan the Perfect Surprise in Agra?</h2>
          <p className="text-lg mb-8 text-white/95 leading-relaxed">
            From romantic proposals with a view of the Taj Mahal to birthday surprises in Sanjay Place, Eventkro handles everything with absolute care. Contact us now for a custom package.
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
