import { Metadata } from 'next';
import Link from 'next/link';
import { FaPhoneAlt, FaGift, FaHeart, FaUserTie, FaBuilding, FaCloudSun, FaChild, FaPalette, FaCheckCircle, FaStar, FaMapMarkerAlt } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FaqAccordion from '../../components/FaqAccordion';
import ClientGallery from './ClientGallery';
import BookingForm from './BookingForm';

export const metadata: Metadata = {
  title: 'Birthday Decoration in Delhi NCR | Premium Balloon Decorators',
  description: 'Book the best birthday decoration in Delhi. Get same-day balloon decoration at home, hotel room setups, and banquet designs starting at ₹1499. Book now!',
  alternates: {
    canonical: 'https://www.eventkro.com/birthday-decoration-in-delhi',
  },
  openGraph: {
    title: 'Birthday Decoration in Delhi NCR | Premium Balloon Decorators',
    description: 'Book the best birthday decoration in Delhi. Get same-day balloon decoration at home, hotel room setups, and banquet designs starting at ₹1499. Book now!',
    url: 'https://www.eventkro.com/birthday-decoration-in-delhi',
    siteName: 'Eventkro',
    images: [
      {
        url: 'https://www.eventkro.com/images/delhi/birthday/hero.webp',
        width: 1200,
        height: 630,
        alt: 'Birthday Decoration in Delhi',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Birthday Decoration in Delhi NCR | Premium Balloon Decorators',
    description: 'Book the best birthday decoration in Delhi. Get same-day balloon decoration at home, hotel room setups, and banquet designs starting at ₹1499.',
    images: ['https://www.eventkro.com/images/delhi/birthday/hero.webp'],
  },
};

const faqItems = [
  { question: 'What is the starting cost for birthday decoration in Delhi?', answer: 'Our birthday decoration price starts at ₹1,499 for a standard home setup. If you need premium backdrops or ring arches, prices range from ₹3,499. We maintain transparent pricing with no hidden charges for any location in Delhi NCR.' },
  { question: 'Do you provide same day birthday decoration in Delhi?', answer: 'Yes, we provide reliable same-day decoration services. If you book before 2:00 PM, our local teams in West Delhi, South Delhi, and Noida can easily set up your venue by the evening.' },
  { question: 'Which are the best birthday decoration themes for kids?', answer: 'Kids love vibrant setups. Our most requested themes are Boss Baby, Cocomelon, Frozen, Spiderman, and Unicorn. We include character cutouts and colorful balloon arches to match the theme perfectly.' },
  { question: 'Do you offer room decoration in Delhi for a wife or husband\'s birthday?', answer: 'Absolutely. We specialize in romantic birthday room decoration. We use premium metallic balloons, rose petals, foil hearts, and safe LED fairy lights to create a memorable surprise.' },
  { question: 'How much time does a birthday balloon decoration setup take?', answer: 'Most home setups take between 60 to 90 minutes. For larger banquets or complex terrace decorations involving sequin walls or organic arches, please allow 2 to 3 hours.' },
  { question: 'Are there any hidden charges for birthday decoration at home in Delhi?', answer: 'No. The quote we provide includes all materials, balloons, and installation. You only pay what you agree upon. Travel fees only apply to very distant NCR outskirt locations.' },
  { question: 'Do you cover all areas like Dwarka, Rohini, and South Delhi?', answer: 'Yes, our decorators are spread across the city. We cover all major localities including Dwarka, Janakpuri, Rohini, Saket, Laxmi Nagar, as well as North Delhi and Gurgaon.' },
  { question: 'What materials are used for your birthday balloon decoration in Delhi?', answer: 'We prioritize quality and safety. We use premium imported balloons that are biodegradable and non-toxic. We also use special wall-safe masking tape to protect your home\'s paint.' },
  { question: 'Can I customize my birthday decoration package?', answer: 'Yes, every package is fully customizable. You can add LED neon signs, personalized foil age numbers, cold pyro sparklers, or customized cake tables to make the event unique.' },
  { question: 'Is it safe to decorate hotel rooms with balloons and LED lights?', answer: 'Yes, it is entirely safe. We use battery-operated, heat-free LED lights. We frequently decorate hotel rooms across South Delhi and Aerocity, always respecting hotel management guidelines.' },
  { question: 'Do you arrange terrace birthday decorations in Delhi?', answer: 'Yes! Terrace parties are incredibly popular. We create cozy open-air setups featuring fairy light canopies, low-seating arrangements, and secure metal balloon arches.' },
  { question: 'What is included in your premium birthday decoration price in Delhi?', answer: 'Our premium setups typically include a heavy-duty rental metal ring frame, over 200 pastel or chrome balloons, a neon sign, and dedicated onsite coordination.' },
  { question: 'How early should I book a birthday decorator in Delhi NCR?', answer: 'While we accommodate same-day bookings, we recommend securing your slot 2 to 3 days in advance. This ensures your preferred colors and specific themes are in stock.' },
  { question: 'Will the decorators clean up the balloons after the birthday party?', answer: 'Our primary service includes delivery and full installation. While post-party cleanup is generally handled by the venue, we do handle the teardown and retrieval of all rented props (like metal frames).' },
  { question: 'What is your cancellation policy for birthday decoration bookings?', answer: 'We are flexible. You can reschedule your booking without any penalty if you notify us 48 hours in advance. Cancellations made within 24 hours of the event will forfeit the initial deposit.' }
];

const themes = [
  { name: 'Kids Birthday', desc: 'Vibrant themes like Boss Baby, Cocomelon, and Spiderman with custom character cutouts and colorful balloon arches.', icon: <FaChild className="text-[#ff5722] text-xl" /> },
  { name: 'Romantic Birthday', desc: 'Create magical moments with rose gold chrome balloons, heart foils, LED lights, and intimate cabana styling for your partner.', icon: <FaHeart className="text-[#ff5722] text-xl" /> },
  { name: 'Wife Birthday', desc: 'Elegant setups featuring premium pastel balloons, custom acrylic name boards, and beautiful cake table designs.', icon: <FaGift className="text-[#ff5722] text-xl" /> },
  { name: 'Husband Birthday', desc: 'Sophisticated aesthetics using matte black, chrome gold, and silver balloons, complete with whiskey bottle foils.', icon: <FaUserTie className="text-[#ff5722] text-xl" /> },
  { name: 'Hotel Birthday', desc: 'Surprise hotel room makeovers with ceiling helium balloons, rose petal pathways, and bed decorations in Delhi.', icon: <FaBuilding className="text-[#ff5722] text-xl" /> },
  { name: 'Terrace Birthday', desc: 'Cozy open-air celebrations featuring fairy light canopies, organic balloon ring backdrops, and low-seating arrangements.', icon: <FaCloudSun className="text-[#ff5722] text-xl" /> },
  { name: 'Baby First Birthday', desc: 'Soft pastel setups designed safely for toddlers, incorporating ONE marquee lights, baby blocks, and themed props.', icon: <FaStar className="text-[#ff5722] text-xl" /> },
  { name: 'Pastel Theme', desc: 'Trendy and highly aesthetic setups utilizing soft matte pastel color palettes for an Instagrammable organic backdrop.', icon: <FaPalette className="text-[#ff5722] text-xl" /> }
];

const localities = [
  { name: 'Dwarka', desc: 'Fast, same day birthday decoration across all Dwarka sectors, featuring premium home and banquet setups.' },
  { name: 'Janakpuri', desc: 'Top-rated balloon styling in West Delhi for drawing rooms, cafes, and rooftop party venues in Janakpuri.' },
  { name: 'Rohini', desc: 'Reliable decorators in Rohini and North Delhi offering affordable kids themes and customized styling.' },
  { name: 'Saket', desc: 'Luxury event decoration in Saket and South Delhi, specializing in elegant romantic setups and terrace cabanas.' },
  { name: 'Laxmi Nagar', desc: 'Budget-friendly room decoration in Laxmi Nagar with rapid on-time setup by local professionals.' },
  { name: 'Noida', desc: 'Extensive coverage across Noida sectors for grand milestone celebrations and corporate birthday events.' },
  { name: 'Gurgaon', desc: 'Premium event styling in Gurgaon for luxury villas, farmhouse parties, and high-end hotel room surprises.' }
];

const whyTrustUs = [
  { title: 'Experienced Decoration Team', desc: 'Our professional decorators have years of hands-on styling experience.' },
  { title: 'Premium Imported Balloons', desc: 'We only use thick, long-lasting, and vibrant balloons for a richer look.' },
  { title: 'Safe Installation', desc: 'We exclusively use wall-safe tape to ensure your paint stays pristine.' },
  { title: 'Transparent Pricing', desc: 'The price we quote is the price you pay. Absolutely no hidden costs.' },
  { title: 'On-time Setup', desc: 'We value your time and guarantee our team arrives exactly as scheduled.' },
  { title: 'Friendly Support', desc: 'Our team is always available to answer your design questions.' },
  { title: 'High Quality Decoration Materials', desc: 'From heavy-duty frames to bright LED lights, we use only the best.' }
];

const galleryImages = [
  { src: '/images/delhi/birthday/gallery-1.webp', alt: 'Boss Baby Inspired Birthday Decoration in Delhi', title: 'Boss Baby Inspired Birthday Decoration in Delhi' },
  { src: '/images/delhi/birthday/gallery-2.webp', alt: 'Colorful Kids Birthday Decoration Setup in Delhi', title: 'Colorful Kids Birthday Decoration Setup in Delhi' },
  { src: '/images/delhi/birthday/gallery-3.webp', alt: 'Elegant Ice Princess Inspired Birthday Decoration in Delhi', title: 'Elegant Ice Princess Inspired Birthday Decoration in Delhi' },
  { src: '/images/delhi/birthday/gallery-4.webp', alt: 'Luxury Rose Gold Birthday Decoration at Home in Delhi', title: 'Luxury Rose Gold Birthday Decoration at Home in Delhi' },
  { src: '/images/delhi/birthday/gallery-5.webp', alt: 'Premium Hotel Birthday Decoration in Delhi', title: 'Premium Hotel Birthday Decoration in Delhi' },
  { src: '/images/delhi/birthday/gallery-6.webp', alt: 'Luxury Terrace Birthday Decoration in Delhi', title: 'Luxury Terrace Birthday Decoration in Delhi' }
];

export default function DelhiBirthdayPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Eventkro",
    "image": "https://www.eventkro.com/images/logo.png",
    "url": "https://www.eventkro.com/birthday-decoration-in-delhi",
    "telephone": "+917017520811",
    "priceRange": "₹1499 - ₹15000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Delhi NCR",
      "addressLocality": "New Delhi",
      "addressRegion": "DL",
      "postalCode": "110001",
      "addressCountry": "IN"
    },
    "areaServed": [
      "Dwarka", "Rohini", "Janakpuri", "Saket", "Laxmi Nagar", "South Delhi", "Noida", "Gurgaon"
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      
      <main className="bg-white min-h-screen">
        <Header />

        {/* 1. HERO SECTION */}
        <section className="relative min-h-[75vh] flex flex-col justify-center items-center text-center text-white overflow-hidden pt-28 pb-16">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
            style={{ backgroundImage: "url('/images/delhi/birthday/hero.webp')" }}
          ></div>
          <div className="container mx-auto px-4 relative z-20 max-w-5xl">
            <span className="bg-[#ff5722] text-white px-5 py-1.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 inline-block shadow-md">
              Delhi NCR Premium Party Decorators
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
              Birthday Decoration in Delhi
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Transform your celebration with stunning birthday balloon decoration and premium room decoration in Delhi. We offer reliable, same day birthday decoration services across Delhi NCR to make your special moments unforgettable.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#booking-form-section"
                className="btn-primary flex items-center justify-center text-lg px-8 py-3.5 rounded-lg shadow-lg font-bold hover:scale-105 transition-transform bg-[#ff5722] text-white"
              >
                Get Instant Quote
              </a>
              <a
                href="https://wa.me/917017520811"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white hover:bg-green-700 text-lg px-8 py-3.5 rounded-lg shadow-lg font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform"
              >
                WhatsApp Now
              </a>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto pt-6 border-t border-white/20">
              <div className="flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-white/90">
                <span>⭐</span><span>Rated by Happy Customers</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-white/90">
                <span>🎈</span><span>Same Day Decoration</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-white/90">
                <span>💰</span><span>Packages Starting From ₹1499</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-white/90">
                <span>📍</span><span>Available Across Delhi NCR</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-white/90">
                <span>⚡</span><span>24×7 Booking</span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Container */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

              {/* LEFT COLUMN: Main Content */}
              <div className="lg:col-span-2 space-y-16 text-gray-700">

                {/* WHY FAMILIES TRUST EVENTKRO */}
                <div id="why-trust" className="bg-orange-50/50 p-8 rounded-2xl border border-orange-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Families Across Delhi Trust Eventkro</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {whyTrustUs.map((trust, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <FaCheckCircle className="text-green-500 text-lg shrink-0 mt-0.5" />
                        <div>
                          <h3 className="font-bold text-gray-900 text-sm">{trust.title}</h3>
                          <p className="text-xs text-gray-600 mt-1 leading-relaxed">{trust.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* INTRODUCTION WITH INTERNAL LINKS */}
                <div className="prose max-w-none text-gray-700 leading-relaxed text-sm">
                  <p>
                    Planning a birthday party requires attention to detail. Whether you are hosting an intimate gathering in South Delhi or a grand banquet celebration in West Delhi, our expert team provides premium styling solutions tailored to your venue.
                  </p>
                  <ul className="list-disc pl-5 mt-4 space-y-2">
                    <li><strong>Fast Setup:</strong> We respect your schedule with punctual arrivals.</li>
                    <li><strong>Quality Materials:</strong> Our imported balloons ensure a richer, long-lasting look.</li>
                    <li><strong>Custom Designs:</strong> Every setup is uniquely crafted to match your vision.</li>
                  </ul>
                  <p className="mt-4">
                    While we are renowned for birthdays, Eventkro is a full-service event design agency. If you are planning other special occasions, we also offer beautiful <Link href="/anniversary-decoration-in-delhi" className="text-[#ff5722] font-semibold hover:underline">Anniversary Decoration in Delhi</Link>. Want to ask that special question? Our team designs breathtaking <Link href="/proposal-decoration-in-delhi" className="text-[#ff5722] font-semibold hover:underline">Proposal Decoration in Delhi</Link>. For any general party needs, explore our customized <Link href="/balloon-decoration-in-delhi" className="text-[#ff5722] font-semibold hover:underline">Balloon Decoration in Delhi</Link>.
                  </p>
                </div>

                {/* PACKAGES & PRICING */}
                <div id="pricing" className="prose max-w-none">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-150">
                    Birthday Decoration Packages & Prices in Delhi
                  </h2>
                  <p className="leading-relaxed mb-6">
                    We believe in completely transparent pricing. Explore our standard packages or customize your setup. Whether you need a simple birthday decoration at home or a lavish banquet hall design, we have affordable options.
                  </p>
                  
                  <div className="overflow-x-auto not-prose border border-gray-200 rounded-xl mb-4">
                    <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 font-bold text-gray-900">Decoration Package</th>
                          <th className="px-6 py-3 font-bold text-gray-900">Inclusions</th>
                          <th className="px-6 py-3 font-bold text-gray-900 text-right">Starting Price</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        <tr>
                          <td className="px-6 py-4 font-bold text-gray-800">Standard Home Setup</td>
                          <td className="px-6 py-4 text-gray-600">100+ metallic balloons, banner, fairy lights, ribbons</td>
                          <td className="px-6 py-4 font-bold text-gray-900 text-right">₹1,499</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-gray-800">Premium Arch Backdrop</td>
                          <td className="px-6 py-4 text-gray-600">200+ pastel balloons, ring frame (rental), neon sign</td>
                          <td className="px-6 py-4 font-bold text-gray-900 text-right">₹3,499</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-gray-800">Fairy Light Canopy</td>
                          <td className="px-6 py-4 text-gray-600">Cabana drapes, canopy frame (rental), organic balloons</td>
                          <td className="px-6 py-4 font-bold text-gray-900 text-right">₹4,499</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-bold text-gray-800">Elite VIP Setup</td>
                          <td className="px-6 py-4 text-gray-600">350+ luxury balloons, sequin wall, pyros, marquee numbers</td>
                          <td className="px-6 py-4 font-bold text-gray-900 text-right">₹9,999</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-gray-500 italic">
                    * Pricing Disclaimer: The prices listed above represent starting costs for base setups within standard coverage areas. Actual birthday decoration cost in Delhi may vary based on exact location, custom foil additions, specific colors, and peak season demand.
                  </p>
                </div>

                {/* POPULAR THEMES */}
                <div id="themes-list" className="prose max-w-none">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-150">
                    Popular Birthday Decoration Themes
                  </h2>
                  <p className="leading-relaxed mb-6">
                    Make your party unforgettable by selecting a specialized theme. Our expert decorators can easily adapt these designs for living rooms, hotels, or large banquets.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
                    {themes.map((theme, tIdx) => (
                      <div key={tIdx} className="p-5 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-all flex items-start gap-4">
                        <div className="mt-1 p-2 bg-orange-50 rounded-lg shrink-0">
                          {theme.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-base">{theme.name}</h3>
                          <p className="text-sm text-gray-600 mt-1 leading-relaxed">{theme.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* BIRTHDAY DECORATION IDEAS */}
                <div id="ideas" className="prose max-w-none">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-150">
                    Unique Birthday Decoration Ideas
                  </h2>
                  <p className="leading-relaxed mb-6">
                    Stuck on how to celebrate? Here are some trending concepts our clients love when booking a birthday decorator:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 not-prose">
                    <div className="bg-gray-50 p-5 rounded-2xl border border-gray-150">
                      <h3 className="font-bold text-gray-900 text-lg mb-2">Surprise Room Makeover</h3>
                      <p className="text-sm text-gray-600">Perfect for partners. We decorate the bedroom with ceiling balloons, rose petals on the bed, and warm lighting while they are away.</p>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-2xl border border-gray-150">
                      <h3 className="font-bold text-gray-900 text-lg mb-2">Intimate Balcony/Terrace Setup</h3>
                      <p className="text-sm text-gray-600">Utilize your outdoor space with a boho-chic fairy light tent, floor cushions, and organic balloon clouds for a sunset party.</p>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-2xl border border-gray-150">
                      <h3 className="font-bold text-gray-900 text-lg mb-2">Boot Space Car Decoration</h3>
                      <p className="text-sm text-gray-600">A trendy and affordable midnight surprise. We fill your car trunk with balloons, LED lights, and custom photo banners.</p>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-2xl border border-gray-150">
                      <h3 className="font-bold text-gray-900 text-lg mb-2">Grand Banquet Entry</h3>
                      <p className="text-sm text-gray-600">For 1st birthdays or milestone 50th parties, we create massive balloon tunnel entrances and personalized neon sign photobooths.</p>
                    </div>
                  </div>
                </div>

                {/* SERVICE AREAS */}
                <div id="areas-served" className="prose max-w-none">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-150">
                    Service Areas Across Delhi NCR
                  </h2>
                  <p className="leading-relaxed mb-6">
                    We provide seamless doorstep services across major localities with our hyper-local decorator teams.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
                    {localities.map((loc, idx) => (
                      <div key={idx} className="p-4 bg-white border border-gray-200 rounded-xl flex items-start gap-3 shadow-sm hover:border-[#ff5722] transition-colors">
                        <span className="text-[#ff5722] text-lg mt-0.5"><FaMapMarkerAlt /></span>
                        <div>
                          <h3 className="text-gray-900 font-bold text-base">{loc.name}</h3>
                          <p className="text-sm text-gray-600 mt-1">{loc.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* BOOKING PROCESS */}
                <div id="booking-process" className="prose max-w-none">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-150">
                    How Our Booking Process Works
                  </h2>
                  <div className="space-y-4 not-prose mt-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                    {[
                      { title: 'Choose Package', desc: 'Browse our themes and select a package that fits your vision and budget.' },
                      { title: 'Share Location', desc: 'Fill out our form or WhatsApp us your exact location and event date.' },
                      { title: 'Confirm Booking', desc: 'Secure your slot with a small advance deposit online.' },
                      { title: 'Decorator Arrives', desc: 'Our professional team arrives on time and sets up the entire decoration.' },
                      { title: 'Celebrate', desc: 'Pay the balance directly and enjoy your beautiful party setup!' }
                    ].map((step, idx) => (
                      <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#ff5722] text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10">
                          {idx + 1}
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
                          <h3 className="font-bold text-gray-900 text-base">{step.title}</h3>
                          <p className="text-sm text-gray-600 mt-1">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* GALLERY */}
                <div id="gallery" className="prose max-w-none">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2 pb-2 border-b-2 border-gray-150">
                    Birthday Decoration Gallery in Delhi
                  </h2>
                  <p className="leading-relaxed mb-8 text-gray-600">
                    Get inspired by exploring our recent setups for birthday room decoration, elegant hotel surprises, and kids parties across Delhi NCR.
                  </p>
                  <ClientGallery images={galleryImages} />
                </div>

                {/* FAQs */}
                <div id="faqs" className="space-y-6">
                  <h2 className="text-3xl font-bold text-gray-900 pb-2 border-b-2 border-gray-150">
                    Frequently Asked Questions (FAQs)
                  </h2>
                  <FaqAccordion items={faqItems} defaultOpenIndex={0} />
                </div>

                {/* STRONG FINAL CTA */}
                <div className="bg-gradient-to-br from-[#ff5722] to-[#e64a19] text-white p-8 md:p-10 rounded-2xl shadow-xl text-center space-y-6">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">Ready to Plan the Perfect Birthday Party?</h2>
                  <p className="text-lg text-white/90 max-w-2xl mx-auto">
                    Don't settle for ordinary. Secure your date with Eventkro today and let our expert team build a stunning visual experience for your celebration in Delhi.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-2">
                    <a
                      href="#booking-form-section"
                      className="w-full sm:w-auto bg-white text-[#ff5722] hover:bg-gray-50 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex justify-center items-center"
                    >
                      Book Now
                    </a>
                    <a
                      href="https://wa.me/917017520811"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                    >
                      <FaPhoneAlt /> Call Our Decoration Team
                    </a>
                  </div>
                </div>

              </div>

              {/* RIGHT COLUMN: Sidebar and Contact Form */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">

                  {/* Contact CTA */}
                  <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Need Direct Help?</h3>
                    <p className="text-gray-600 text-xs mb-4 leading-relaxed">
                      Have an urgent, custom or large event request? Chat directly with our design lead on WhatsApp or give us a quick call.
                    </p>
                    <a
                      href="tel:+917017520811"
                      className="flex items-center justify-center gap-2 w-full py-2.5 bg-gray-900 text-white rounded-lg hover:bg-black font-semibold text-sm transition-all mb-3 text-center"
                    >
                      <FaPhoneAlt size={14} /> Call: +91 7017520811
                    </a>
                    <a
                      href="https://wa.me/917017520811"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold text-sm transition-all text-center"
                    >
                      WhatsApp Chat →
                    </a>
                  </div>

                  {/* CONTACT FORM COMPONENT */}
                  <BookingForm />

                </div>
              </div>

            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
