'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, FormEvent, useEffect } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaStar, FaChevronDown, FaCheckCircle, FaPhoneAlt, FaEnvelope, FaClock, FaTags, FaAward, FaGift } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FaqAccordion from '../../components/FaqAccordion';
import emailjs from 'emailjs-com';

const EMAILJS_SERVICE_ID = 'service_p6p4e5o';
const EMAILJS_TEMPLATE_ID = 'template_4bvfa94';
const EMAILJS_USER_ID = 'W2EbmhEd8-oEx3vNW';

const faqItems = [
  {
    question: 'Can you decorate a hotel room for a surprise proposal in Delhi?',
    answer: 'Yes, we specialize in surprise hotel room proposal decoration in Delhi (including Connaught Place, Karol Bagh, Vasant Kunj, Aerocity, and Noida). Please check with your hotel management regarding outside decorator permissions before booking.'
  },
  {
    question: 'Do you offer home proposal decoration services?',
    answer: 'Our home proposal decorations are designed to transform your bedroom, living room, or terrace into a romantic haven using wall-safe materials, balloons, and LED candles.'
  },
  {
    question: 'What is included in a rooftop proposal decoration?',
    answer: 'We offer breathtaking rooftop proposal decorations featuring cozy canopy setups, fairy lights, floral pathways, and neon "Marry Me" signs for an unforgettable evening under the stars.'
  },
  {
    question: 'Do you provide same-day booking for proposal decoration in Delhi?',
    answer: 'Yes! We offer same-day proposal decoration in Delhi NCR. Simply confirm your booking before 3:00 PM, and our local decorators will ensure a timely setup.'
  },
  {
    question: 'What is the average cost of proposal decoration?',
    answer: 'Our proposal decoration packages start at ₹1,999 for a classic home setup. Luxury setups featuring neon signs, canopies, and fresh flowers range from ₹3,999 to ₹7,999+.'
  },
  {
    question: 'Can you include fresh flowers and rose petals in the setup?',
    answer: 'Yes, we use fresh red rose petals for pathways, bed heart designs, and table flower arrangements to add an elegant and timeless touch to your proposal.'
  },
  {
    question: 'What kind of balloon decoration is used for proposals?',
    answer: 'We use premium metallic chrome, pastel, and foil balloons. Heart-shaped foils and helium-like floating ceiling balloons are highly popular for romantic setups.'
  },
  {
    question: 'Do you offer custom themes for proposal setups?',
    answer: 'We provide fully customized themes. You can choose specific balloon color palettes, custom LED neon signs (e.g., "Marry Me"), and floral arrangements to match your partner\'s preferences.'
  },
  {
    question: 'Is midnight proposal decoration available?',
    answer: 'Yes, we offer midnight surprise proposal decoration. Our decorators can complete the setup late at night, subject to an additional late-night service charge and availability.'
  },
  {
    question: 'Do I need permission from the hotel for the decoration?',
    answer: 'For hotel room setups, you must obtain permission from the hotel management for our decorators to enter. We only require 1-2 hours of access before your arrival.'
  },
  {
    question: 'How does the booking process work?',
    answer: 'You can book easily by filling out our online form or messaging us directly on WhatsApp. We require a small advance token to confirm your slot, with the balance paid after setup.'
  },
  {
    question: 'What is the duration required for the decoration setup?',
    answer: 'A standard room decoration takes about 60-90 minutes. Complex setups with canopies, ring backdrops, and sequin walls may take 2-3 hours of installation time.'
  },
  {
    question: 'What is your cancellation and rescheduling policy?',
    answer: 'Rescheduling is free if requested at least 48 hours in advance. For cancellations within 24 hours of the setup time, the advance token is non-refundable as materials are already prepared.'
  },
  {
    question: 'Can I customize the neon signs and colors?',
    answer: 'Absolutely! You can personalize every element, from the balloon color palette to the "Marry Me" or "Better Together" LED lights and photo string displays.'
  },
  {
    question: 'How far in advance should I book the proposal decoration?',
    answer: 'We recommend booking at least 2-3 days in advance to secure your preferred time slot and ensure availability of premium rental props like sequin walls or customized name boards.'
  }
];

const packages = [
  {
    name: 'Romantic Proposal Package',
    startingPrice: '₹1,999',
    description: 'Perfect for a beautiful surprise proposal at home with elegant balloon decoration, fairy lights, rose petals and candles.',
    setupTime: '60 - 90 Minutes',
    suitableFor: 'Living Rooms, Bedrooms, and Cozy surprise home settings',
    features: [
      '100 Premium Metallic Balloons (Choice of 2 colors)',
      '1 Cardboard "Marry Me" Banner',
      'LED Fairy Lights (1 String, Warm White)',
      'Balloon Bunches on the ceiling & walls with ribbons',
      'Damage-free wall-safe setup by local decorator'
    ],
    rating: 4.8,
    cta: 'Get Free Quote'
  },
  {
    name: 'Hotel Room Proposal Package',
    startingPrice: '₹3,999',
    description: 'Premium hotel room proposal decoration with luxury balloons, "Marry Me" neon sign, rose petals, candles and customized romantic setup.',
    setupTime: '2 Hours',
    suitableFor: 'Drawing Rooms, Hotel Suites, Private Terraces, and Lounge areas',
    features: [
      '200 Pastel & Chrome Balloons (custom color scheme)',
      'Heart-Shaped Frame or Circular Ring Backdrop (Rental)',
      'LED Neon Light sign ("Marry Me")',
      'Fresh Red Rose Petal Heart on the bed or table',
      'Doorstep delivery, setup & teardown included'
    ],
    popular: true,
    rating: 4.9,
    cta: 'Get Free Quote'
  },
  {
    name: 'Luxury Proposal Package',
    startingPrice: '₹7,999',
    description: 'Complete luxury proposal experience including premium decoration, customized theme, LED candles, flower arrangements and unforgettable proposal ambiance.',
    setupTime: '3 Hours',
    suitableFor: 'Grand Banquets, Villa Lawns, Luxury Hotel Suites',
    features: [
      '350+ Luxury Chrome, Pastel & Confetti Balloons',
      'Sequin Shimmer Wall (8x8 ft) or Backdrop Trio Panels (Rental)',
      'Personalized Acrylic Name Board (Client keeps board)',
      'Marquee LED Light Letters ("MARRY ME") (Rental)',
      '2 LED Spotlights & 4 Cold Pyro Sparklers for celebratory moments',
      'On-site senior design coordinator supervision'
    ],
    rating: 5.0,
    cta: 'Get Free Quote'
  }
];

const themes = [
  { name: 'Marry Me Neon Theme', desc: 'Make your big moment shine with a glowing "Marry Me" neon sign, surrounded by premium balloons, soft lighting, and elegant floral accents for a perfect proposal.' },
  { name: 'Romantic Balloon Theme', desc: 'Surprise your partner with a breathtaking romantic balloon setup featuring metallic colors, foil hearts, and floating ceiling balloons to create an intimate and magical atmosphere.' },
  { name: 'Candle Light Proposal Theme', desc: 'Set a deeply romantic mood with an enchanting candle light proposal setup. We arrange LED tea lights, glowing lanterns, and delicate rose petals for an unforgettable evening.' },
  { name: 'Hotel Room Proposal Theme', desc: 'Transform your luxury suite into a romantic paradise. Our hotel room proposal decoration includes customized bed setups, balloon pathways, and elegant lighting for an intimate surprise.' },
  { name: 'Rooftop Proposal Theme', desc: 'Pop the question under the stars with our exclusive rooftop proposal decoration. Features include a cozy canopy, fairy string lights, and breathtaking panoramic views for your special moment.' },
  { name: 'Rose Petal Proposal Theme', desc: 'Create a classic and elegant setting with pathways made of fresh red rose petals, heart-shaped floral arrangements, and soft ambient lighting for a truly timeless proposal.' },
  { name: 'Luxury Romantic Theme', desc: 'Experience the ultimate grandeur with our luxury romantic theme, featuring sequin shimmer walls, bespoke lighting, organic balloon waves, and highly customized decor for an extraordinary proposal.' },
  { name: 'Fairy Light Proposal Theme', desc: 'Add a touch of magic to your special moment with cascading fairy lights, glowing cabanas, and sheer white drapes that create a dreamy and intimate proposal setting.' }
];

const localities = [
  { name: 'South Delhi', desc: 'Luxury proposal decoration and premium romantic setups.' },
  { name: 'North Delhi', desc: 'Beautiful proposal setups and romantic room decorations.' },
  { name: 'East Delhi', desc: 'Customized proposal themes and surprise decorations.' },
  { name: 'West Delhi', desc: 'Elegant candle light proposals and balloon decorations.' },
  { name: 'Central Delhi', desc: 'Premium hotel room decorations and luxury setups.' },
  { name: 'Dwarka', desc: 'Quick home proposal setups and romantic surprises.' },
  { name: 'Janakpuri', desc: 'Cozy proposal decorations and customized themes.' },
  { name: 'Rohini', desc: 'Beautiful rooftop proposals and room setups.' },
  { name: 'Pitampura', desc: 'Surprise proposal decorations and romantic planning.' },
  { name: 'Vasant Kunj', desc: 'Luxury villa and hotel room proposal decorations.' },
  { name: 'Saket', desc: 'Premium romantic setups and customized decor.' },
  { name: 'Lajpat Nagar', desc: 'Fast and beautiful proposal decorations.' },
  { name: 'Karol Bagh', desc: 'Hotel room surprises and elegant proposal setups.' },
  { name: 'Connaught Place', desc: 'Luxury suite decor and premium proposal setups.' },
  { name: 'Rajouri Garden', desc: 'Romantic room decorations and bespoke themes.' }
];
const galleryImages = [
  {
    src: "/images/delhi/proposal/gallery-1.webp",
    alt: "Luxury Hotel Room Proposal Decoration in Delhi"
  },
  {
    src: "/images/delhi/proposal/gallery-2.webp",
    alt: "Romantic Home Proposal Decoration in Delhi"
  },
  {
    src: "/images/delhi/proposal/gallery-3.webp",
    alt: "Luxury Rooftop Proposal Decoration in Delhi"
  },
  {
    src: "/images/delhi/proposal/gallery-4.webp",
    alt: "Premium Candle Light Proposal Decoration in Delhi"
  },
  {
    src: "/images/delhi/proposal/gallery-5.webp",
    alt: "Luxury Marry Me Decoration Setup in Delhi"
  },
  {
    src: "/images/delhi/proposal/gallery-6.webp",
    alt: "Romantic Terrace Proposal Decoration in Delhi"
  }
];

export default function ProposalDelhiPage() {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const showNextImage = () => {
    setActiveImageIndex(prev => (prev === null ? null : (prev + 1) % galleryImages.length));
  };

  const showPrevImage = () => {
    setActiveImageIndex(prev => (prev === null ? null : (prev - 1 + galleryImages.length) % galleryImages.length));
  };

  const closeLightbox = () => {
    setActiveImageIndex(null);
  };

  useEffect(() => {
    if (activeImageIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') showNextImage();
      else if (e.key === 'ArrowLeft') showPrevImage();
      else if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: 'Delhi NCR',
    eventType: 'Romantic Proposal Setup',
    eventDate: '',
    message: '',
    locality: 'Dwarka'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        city: `${formData.city} (${formData.locality})`,
        event_type: formData.eventType,
        event_date: formData.eventDate,
        message: formData.message,
        to_email: 'vipabhi12345@gmail.com',
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_USER_ID
      );

      setSubmitStatus({
        success: true,
        message: 'Thank you! Your anniversary decoration request has been successfully submitted. We will contact you shortly.'
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        city: 'Delhi NCR',
        eventType: 'Romantic Proposal Setup',
        eventDate: '',
        message: '',
        locality: 'Dwarka'
      });
    } catch (err) {
      console.error('Error sending request:', err);
      setSubmitStatus({
        success: false,
        message: 'There was an error submitting your request. Please call us directly at +91 7017520811.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('booking-form-section');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="bg-white min-h-screen">
      <Header />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-center items-center text-center text-white overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 z-10" style={{ backgroundColor: 'rgba(0,0,0,0.58)' }}></div>
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
          style={{ backgroundImage: "url('/images/delhi/proposal/hero.webp')" }}
          aria-label="Luxury Proposal Decoration in Delhi"
        ></div>
        <div className="container mx-auto px-4 relative z-20 max-w-4xl">
          <span className="bg-[#ff5722] text-white px-5 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider mb-4 inline-block shadow-md">
            ⭐ 4.9 Customer Rating | 1000+ Romantic Setups | Same Day Available
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">Proposal Decoration in Delhi</h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">Planning to pop the question? Eventkro offers premium, romantic proposal decoration in Delhi to turn your dream moment into reality. From an intimate home proposal setup and luxurious hotel room proposal decoration to a breathtaking rooftop proposal decoration and enchanting candle light proposal decoration, we craft unforgettable experiences. Surprise your partner with our exclusive 'Marry Me' decoration, featuring gorgeous floral paths, neon signs, and premium balloon decoration tailored to your unique love story. With our reliable same-day booking and fully customized themes, you can focus on the ring while we create the perfect romantic ambiance for your big yes.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={scrollToContact}
              className="btn-primary text-lg px-8 py-3.5 rounded-lg shadow-lg font-bold hover:scale-105 transition-transform"
            >
              Book Proposal Decoration
            </button>
            <a
              href="#gallery"
              className="bg-green-600 text-white hover:bg-green-700 text-lg px-8 py-3.5 rounded-lg shadow-lg font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform"
            >
              View Proposal Gallery
            </a>
          </div>
          {/* Hero Features */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-6 border-t border-white/20">
            <div className="flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-white/90">
              <span className="text-green-400">✅</span>
              <span>Same Day Booking</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-white/90">
              <span className="text-green-400">✅</span>
              <span>Hotel Room Decoration</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-white/90">
              <span className="text-green-400">✅</span>
              <span>Home Proposal Setup</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-white/90">
              <span className="text-green-400">✅</span>
              <span>Rooftop Proposal</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-white/90">
              <span className="text-green-400">✅</span>
              <span>Marry Me Decoration</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-white/90">
              <span className="text-green-400">✅</span>
              <span>Candle Light Setup</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-white/90">
              <span className="text-green-400">✅</span>
              <span>Custom Themes</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-white/90">
              <span className="text-green-400">✅</span>
              <span>Premium Balloon Decoration</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-gray-50 border-y border-gray-200 py-6">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <span className="text-2xl">🎈</span>
              <span className="text-sm font-bold text-gray-850">Same Day Decoration</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-2xl">🏠</span>
              <span className="text-sm font-bold text-gray-850">Home & Hotel Setup</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-2xl">❤️</span>
              <span className="text-sm font-bold text-gray-850">Romantic Themes</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-2xl">✨</span>
              <span className="text-sm font-bold text-gray-850">Professional Decorators</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-2xl">🗺️</span>
              <span className="text-sm font-bold text-gray-850">Delhi NCR Coverage</span>
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

              {/* Packages Section */}
              <div id="packages" className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-150">
                  Affordable Proposal Decoration Packages in Delhi NCR
                </h2>
                <p className="leading-relaxed mb-6">
                  Every milestone celebration deserves a breathtaking setup. Eventkro offers premium anniversary decoration packages designed to fit your home, hotel room, or outdoor space. Select one of our popular packages and customize it to suit your aesthetic preferences.
                </p>
                <div className="space-y-6 not-prose">
                  {packages.map((pkg, idx) => (
                    <div key={idx} className={`p-6 rounded-2xl border transition-all duration-300 relative ${pkg.popular ? 'bg-orange-50/30 border-orange-200 shadow-md ring-2 ring-orange-500/10' : 'bg-gray-50 border-gray-150'}`}>
                      {pkg.popular && (
                        <span className="absolute -top-3 right-6 bg-[#ff5722] text-white text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                          Most Popular
                        </span>
                      )}
                      <div className="flex flex-wrap justify-between items-start mb-6">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{pkg.name}</h3>
                          <p className="text-gray-500 text-sm mt-1">{pkg.description}</p>
                        </div>
                        <div className="text-right">
                          <span className="text-xs text-gray-450 block uppercase font-bold text-gray-500">Starting Price</span>
                          <span className="text-3xl font-extrabold text-[#ff5722]">{pkg.startingPrice}</span>
                          <span className="text-xs text-gray-400 block">All Inclusive</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 pt-4 border-t border-gray-200/65">
                        <div>
                          <strong className="text-xs text-gray-450 uppercase tracking-wider block mb-2 font-bold text-gray-500">What's Included</strong>
                          <ul className="space-y-2 text-sm text-gray-600">
                            {pkg.features.map((feat, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-2">
                                <span className="text-green-600 font-bold mt-0.5">✓</span>
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <strong className="text-xs text-gray-450 uppercase tracking-wider block mb-1 font-bold text-gray-500">Setup Time</strong>
                            <p className="text-sm font-semibold text-gray-800 flex items-center gap-1.5">
                              ⏱️ {pkg.setupTime}
                            </p>
                          </div>
                          <div>
                            <strong className="text-xs text-gray-450 uppercase tracking-wider block mb-1 font-bold text-gray-500">Suitable For</strong>
                            <p className="text-sm text-gray-600">{pkg.suitableFor}</p>
                          </div>
                        </div>
                      </div>

                      <button
                        onClick={scrollToContact}
                        className={`w-full py-3 rounded-xl font-bold text-center transition-all ${pkg.popular ? 'bg-[#ff5722] text-white hover:bg-[#e64a19] shadow-md hover:shadow-lg' : 'bg-white border border-[#ff5722] text-[#ff5722] hover:bg-orange-50'}`}
                      >
                        {pkg.cta}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Content Sections (SEO Rich Text) */}
              <div className="prose max-w-none space-y-12">

                {/* 1. Romantic Home Proposal Decoration */}
                <div id="home-decor">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                    Romantic Home Anniversary Decoration
                  </h2>
                  <p className="leading-relaxed">
                    Celebrating your wedding anniversary in the comfort of your home provides an intimate, relaxed, and highly sentimental atmosphere. Our expert decorators design premium, <strong>romantic anniversary decoration delhi</strong> packages that turn your familiar bedroom or living room into a luxurious getaway. Using combinations of metallic chrome balloons, romantic heart foil shapes, hanging photo collections, and warm LED string lights, we build a visually stunning environment.
                  </p>
                  <p className="leading-relaxed">
                    Whether it is your 1st anniversary or your parents\' silver jubilee, home setup has never been this seamless. We focus on layouts that respect your home furniture, utilizing wall-safe masking tape and weighted balloon stands to create professional arches and backdrop frames. You do not have to worry about paint peeling or post-party damage. Let us handle the details while you look forward to a special evening with your partner.
                  </p>
                </div>

                {/* 2. Hotel Room Anniversary Decoration */}
                <div id="hotel-decor">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                    Hotel Room Proposal Decoration in Delhi
                  </h2>
                  <p className="leading-relaxed">
                    Planning a weekend staycation in a luxury hotel across Delhi NCR, such as Connaught Place, Vasant Kunj, Karol Bagh, or Aerocity? You can elevate your stay by arranging a surprise **hotel room proposal decoration delhi** setup. We specialize in working within the constraints of hotel suites, placing helium-style ceiling balloon clusters with dangling ribbons, warm LED tea-light paths, and rose petal beds.
                  </p>
                  <p className="leading-relaxed">
                    We coordinate coordinates directly with the hotel concierge or enter with your room keys to finish the installation. Walking into a professionally decorated hotel suite with rose petals shaped into a heart, romantic lighting, and chrome balloon clouds on the ceiling is the perfect way to begin your milestone getaway. Check with your hotel regarding external decorators, and we will take care of the rest.
                  </p>
                </div>

                {/* 3. Terrace Anniversary Decoration */}
                <div id="terrace-decor">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                    Cozy Terrace Proposal Decoration
                  </h2>
                  <p className="leading-relaxed">
                    Rooftops and open-air terraces offer a magical background for romantic celebrations, especially during pleasant Delhi evenings. We craft cozy terrace anniversary settings complete with wooden teepee canopy tents, flowing white lace drapes, and organic balloon frame highlights. We weave yards of warm fairy string lights through the fabric to create a gorgeous warm glow as the sun sets.
                  </p>
                  <p className="leading-relaxed">
                    For larger terraces, we can install double-ring metal circular arches, sequin walls, and customized name neon signs. To protect the setup against evening wind currents, our professional team uses heavy, weighted sandbag supports on all frames, ensuring everything remains stable and safe for the duration of your party.
                  </p>
                </div>

                {/* 4. Candle Light Decoration */}
                <div id="candle-decor">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-150">
                    Candle Light Anniversary Decoration Delhi
                  </h2>
                  <p className="leading-relaxed">
                    Nothing says romance like the gentle, warm flicker of candlelight. We design customized **candle light proposal decoration delhi** setups that focus heavily on ambient lighting systems. We arrange pathways lined with rose petals and safe, low-voltage LED tea-lights inside elegant frosted glass holders, guiding your partner to the main cake cutting table or outdoor dinner layout.
                  </p>
                  <p className="leading-relaxed">
                    We combine these lights with hanging glass bulbs, backdrop curtain lights, and metallic chrome balloons that softly reflect the golden light. This high-concept styling is ideal for balcony dinners, private home lounges, or terrace suites, creating a luxurious mood that is perfect for professional photography and memory making.
                  </p>
                </div>

                {/* 5. 25th Anniversary Celebration */}
                <div id="25th-anniversary">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                    25th Anniversary Silver Jubilee Proposal Decoration
                  </h2>
                  <p className="leading-relaxed">
                    Reaching a quarter-century of married life is a monumental milestone. Our **25th anniversary proposal decoration delhi** setups are designed with a theme of premium silver jubilee sophistication. We utilize chrome silver balloons, pearl white organic balloon waves, giant numeric marquee lights, and silver metallic ring backdrops.
                  </p>
                  <p className="leading-relaxed">
                    These setups are highly popular for parents\' anniversary celebrations or large family gatherings. We can include custom photo grids hanging from balloon strings that showcase twenty-five years of family memories, custom silver name cutouts, and cake table styling that adds a touch of royalty to the occasion.
                  </p>
                </div>

                {/* 6. 50th Anniversary Celebration */}
                <div id="50th-anniversary">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                    50th Anniversary Golden Jubilee Proposal Decoration
                  </h2>
                  <p className="leading-relaxed">
                    Half a century of love, devotion, and shared experiences deserves the grandest celebration. Our **50th anniversary proposal decoration delhi** packages represent a majestic blend of gold and white aesthetics. We install massive golden chrome balloon arches, shimmering sequin walls that catch the light, and elegant table arrangements.
                  </p>
                  <p className="leading-relaxed">
                    We include spotlighting and large numeric LED lights showing the milestone number 50. Since these events usually bring together multiple generations, we design the layout to be clean, stable, and highly visible, providing a perfect photo backdrop for children, grandchildren, and friends to take pictures with the honored couple.
                  </p>
                </div>

                {/* 7. Luxury Couple Surprise Decoration */}
                <div id="surprise-decor-section">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                    Luxury Couple Surprise Decoration
                  </h2>
                  <p className="leading-relaxed">
                    A surprise layout requires absolute coordination and professional execution. Our design coordinators work with you to plan the ideal timing, ensuring our decorators arrive, set up the entire balloon and canopy layout, and exit before your partner returns.
                  </p>
                  <p className="leading-relaxed">
                    We can customize the theme with a "Happy Anniversary" neon light board, romantic heart-shaped foil balloon bunches on the walls, and custom print cards. We focus on creating a luxurious visual impact that surprises and delights the moment the door is opened.
                  </p>
                </div>

                {/* 8. Same Day Decoration */}
                <div id="same-day">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                    Same Day Proposal Decoration in Delhi
                  </h2>
                  <p className="leading-relaxed">
                    Forgot to plan or had a last-minute change of venue? Eventkro has you covered with our efficient same-day **proposal balloon decoration delhi** services. We maintain active, local decorator networks across Dwarka, Rohini, Laxmi Nagar, and Lajpat Nagar, enabling us to dispatch a team to your home or hotel room quickly.
                  </p>
                  <p className="leading-relaxed">
                    Simply place your reservation before 3:00 PM on the day of the event, choose one of our standardized romantic packages, and our decorators will arrive with all the required balloons, lights, and banners to complete the setup on time.
                  </p>
                </div>

                {/* 9. Customization Options */}
                <div id="custom-options">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                    Custom Proposal Decoration Options
                  </h2>
                  <p className="leading-relaxed">
                    We believe every relationship is unique, and your celebration setup should reflect your personal story. We offer extensive customization choices, allowing you to select custom balloon color combinations (like champagne gold, velvet red, pastel lavender, or chrome silver), customize acrylic name cutouts, and add fresh flower arrangements.
                  </p>
                  <p className="leading-relaxed">
                    You can also integrate cold pyro sparklers for the cake-cutting moment, hire professional cake tables, lease velvet backdrop panels, or request photo string hangings that display your favorite moments together. Contact our design coordinators to bring your custom vision to life.
                  </p>
                </div>

                {/* 10. Why Professional Decoration Matters */}
                <div id="why-professional">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                    Why Professional Decoration Matters
                  </h2>
                  <p className="leading-relaxed">
                    While DIY balloon decoration may seem simple, achieving a high-end, clean, and stable romantic backdrop requires professional skill and the right tools. Standard double-sided tape can peel off your home\'s wall paint, and cheap balloons can pop easily, ruining a surprise.
                  </p>
                  <p className="leading-relaxed">
                    Our professional **proposal decorators delhi** use high-quality, biodegradable chrome latex balloons that stay inflated for days. We employ wall-safe masking tape techniques, and bring heavy metal frames and electric balloon pumps, delivering a stress-free experience so you can enjoy your anniversary.
                  </p>
                </div>

              </div>

              {/* Theme Showcase Section */}
              <div id="themes-list" className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-150">
                  Trending Proposal Themes We Offer in Delhi
                </h2>
                <p className="leading-relaxed mb-6">
                  Select from our list of trending celebration themes designed specifically for romantic and milestone couple events:
                </p>
                <div className="space-y-6 not-prose">
                  {themes.map((theme, tIdx) => (
                    <div key={tIdx} className="p-5 bg-gray-50 border border-gray-100 rounded-2xl">
                      <h4 className="font-bold text-gray-900 text-base flex items-center gap-2">
                        <span className="text-[#ff5722]"><FaGift /></span>
                        {theme.name}
                      </h4>
                      <p className="text-sm text-gray-600 mt-2 leading-relaxed">{theme.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Comparison Table */}
              <div id="pricing" className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-150">
                  Proposal Decoration Pricing Table (Delhi NCR)
                </h2>
                <p className="leading-relaxed mb-4">
                  We believe in clear, upfront pricing. Below is a detailed rate sheet for our standard anniversary packages and customizable add-ons:
                </p>
                <div className="overflow-x-auto not-prose border border-gray-200 rounded-xl">
                  <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 font-bold text-gray-900">Package / Option</th>
                        <th className="px-6 py-3 font-bold text-gray-900">Starting Price</th>
                        <th className="px-6 py-3 font-bold text-gray-900">Ideal For</th>
                        <th className="px-6 py-3 font-bold text-gray-900">Setup Time</th>
                        <th className="px-6 py-3 font-bold text-gray-900">Customization</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 font-bold text-gray-800">Romantic Classic</td>
                        <td className="px-6 py-4 font-bold text-gray-900">₹1,999</td>
                        <td className="px-6 py-4 text-gray-600">Bedrooms, cozy surprises, home settings</td>
                        <td className="px-6 py-4 text-gray-650">60 - 90 Mins</td>
                        <td className="px-6 py-4 text-gray-600">Balloons color choice</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-bold text-gray-800">Premium Couple Setup</td>
                        <td className="px-6 py-4 font-bold text-gray-900">₹3,999</td>
                        <td className="px-6 py-4 text-gray-600">Suites, drawing rooms, terrace surprise</td>
                        <td className="px-6 py-4 text-gray-650">2 Hours</td>
                        <td className="px-6 py-4 text-gray-600">Neon sign text, colors</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-bold text-gray-800">Luxury Experience</td>
                        <td className="px-6 py-4 font-bold text-gray-900">₹7,999</td>
                        <td className="px-6 py-4 text-gray-600">25th/50th milestones, large halls, villas</td>
                        <td className="px-6 py-4 text-gray-650">3 Hours</td>
                        <td className="px-6 py-4 text-gray-600">Shimmer wall, spot lights</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-bold text-gray-800">Fairy Light Canopy</td>
                        <td className="px-6 py-4 font-bold text-gray-900">₹4,499</td>
                        <td className="px-6 py-4 text-gray-600">Rooftops, terraces, cozy lawns</td>
                        <td className="px-6 py-4 text-gray-650">2 Hours</td>
                        <td className="px-6 py-4 text-gray-600">Drape fabric styling</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-bold text-gray-800">Marquee Numbers (Set of 2)</td>
                        <td className="px-6 py-4 font-bold text-gray-900">₹1,200</td>
                        <td className="px-6 py-4 text-gray-600">Milestone numbers (e.g. 25, 50, 10)</td>
                        <td className="px-6 py-4 text-gray-650">30 Mins</td>
                        <td className="px-6 py-4 text-gray-600">Fitted LED lights</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-bold text-gray-800">Fresh Rose Petal Pathway</td>
                        <td className="px-6 py-4 font-bold text-gray-900">₹800</td>
                        <td className="px-6 py-4 text-gray-600">Intimate walks, bedroom paths</td>
                        <td className="px-6 py-4 text-gray-650">20 Mins</td>
                        <td className="px-6 py-4 text-gray-600">Real fresh red petals</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* WHY CHOOSE EVENTKRO (6 Cards Grid) */}
              <div id="why-choose" className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-150">
                  Why Choose Eventkro for Proposal Decoration in Delhi
                </h2>
                <p className="leading-relaxed mb-6">
                  Planning a special day should be joyful, not filled with coordination stress, late decorator arrivals, or damaged home paint. When you book with Eventkro, you get professional styling alongside complete peace of mind:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose mb-6">
                  <div className="p-6 bg-white border border-gray-150 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-3xl mb-3 block">⏱️</span>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Same Day Proposal Decoration</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">Need a last-minute proposal setup? Our team provides fast and reliable same-day proposal decoration across Delhi.</p>
                  </div>
                  <div className="p-6 bg-white border border-gray-150 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-3xl mb-3 block">🎈</span>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Premium Romantic Setups</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">Luxury balloon decoration, fresh flowers, candles, fairy lights and customized "Marry Me" themes designed for unforgettable proposals.</p>
                  </div>
                  <div className="p-6 bg-white border border-gray-150 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-3xl mb-3 block">🧑‍🎨</span>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Experienced Decoration Team</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">Our professional decorators create elegant proposal experiences for hotels, homes, rooftops and private venues.</p>
                  </div>
                  <div className="p-6 bg-white border border-gray-150 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-3xl mb-3 block">💰</span>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Affordable Packages</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">Choose from budget-friendly to luxury proposal decoration packages with transparent pricing and no hidden charges.</p>
                  </div>
                  <div className="p-6 bg-white border border-gray-150 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-3xl mb-3 block">❤️</span>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">100% Customizable</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">Personalize your proposal decoration with colors, flowers, balloons, LED signs and romantic themes.</p>
                  </div>
                  <div className="p-6 bg-white border border-gray-150 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-3xl mb-3 block">📞</span>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">On-Time Service</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">We ensure timely setup so your surprise proposal happens exactly as planned.</p>
                  </div>
                </div>
              </div>

              {/* Localities We Serve in Delhi */}
              <div id="areas-served" className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-150">
                  Proposal Decoration Across Delhi
                </h2>
                <p className="leading-relaxed mb-6">
                  We provide proposal decoration services across all major locations in Delhi with same-day booking availability.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose mb-6">
                  {localities.map((loc, idx) => (
                    <div key={idx} className="p-4 bg-gray-50 border border-gray-100 rounded-xl flex items-start gap-3">
                      <span className="text-[#ff5722] font-extrabold mt-0.5">📍</span>
                      <div>
                        <strong className="text-gray-900 text-sm block">{loc.name}</strong>
                        <p className="text-xs text-gray-500 mt-0.5">{loc.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="leading-relaxed mb-6">
                  Looking for proposal decoration near you? Eventkro offers professional proposal decoration services across Delhi with quick response and customized romantic setups.
                </p>
              </div>

              {/* Gallery Section with Lightbox */}
              <div id="gallery" className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-2 pb-2 border-b-2 border-gray-150">
                  Proposal Decoration Gallery
                </h2>
                <p className="leading-relaxed mb-8 text-gray-650">
                  Premium proposal decoration setups across Delhi NCR. Scroll and click to view detail images.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 not-prose">
                  {galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#ff5722] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 group cursor-zoom-in"
                      aria-label={`Open lightbox for ${img.alt}`}
                    >
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        loading="lazy"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Booking Process Roadmap (4 Steps Grid) */}
              <div id="booking-process" className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-150">
                  Simple Step-by-Step Proposal Decor Booking Process
                </h2>
                <p className="leading-relaxed mb-6">
                  Planning a surprise anniversary layout should not be stressful. eventkro offers a simplified 4-step booking process:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 not-prose mt-8">
                  {/* Step 1 */}
                  <div className="bg-gray-50 border border-gray-150 p-6 rounded-2xl text-center relative group">
                    <div className="w-12 h-12 rounded-full bg-[#ff5722] text-white flex items-center justify-center font-extrabold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform">1</div>
                    <h4 className="font-bold text-gray-900 text-base mb-2">Share Requirement</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">Fill out our booking form or text us on WhatsApp with details regarding your date, theme and budget.</p>
                    <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-3 text-[#ff5722] text-2xl font-bold z-10">→</div>
                    <div className="block md:hidden text-center text-[#ff5722] text-xl font-bold mt-4">↓</div>
                  </div>
                  {/* Step 2 */}
                  <div className="bg-gray-50 border border-gray-150 p-6 rounded-2xl text-center relative group">
                    <div className="w-12 h-12 rounded-full bg-[#ff5722] text-white flex items-center justify-center font-extrabold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform">2</div>
                    <h4 className="font-bold text-gray-900 text-base mb-2">Receive Quote</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">Our designers share recommended catalog items, customize balloon colors, and prepare the quotation.</p>
                    <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-3 text-[#ff5722] text-2xl font-bold z-10">→</div>
                    <div className="block md:hidden text-center text-[#ff5722] text-xl font-bold mt-4">↓</div>
                  </div>
                  {/* Step 3 */}
                  <div className="bg-gray-50 border border-gray-150 p-6 rounded-2xl text-center relative group">
                    <div className="w-12 h-12 rounded-full bg-[#ff5722] text-white flex items-center justify-center font-extrabold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform">3</div>
                    <h4 className="font-bold text-gray-900 text-base mb-2">Confirm Booking</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">Confirm your booking with a small token payment. We block the slot and prepare the decoration materials.</p>
                    <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-3 text-[#ff5722] text-2xl font-bold z-10">→</div>
                    <div className="block md:hidden text-center text-[#ff5722] text-xl font-bold mt-4">↓</div>
                  </div>
                  {/* Step 4 */}
                  <div className="bg-gray-50 border border-gray-150 p-6 rounded-2xl text-center group">
                    <div className="w-12 h-12 rounded-full bg-[#ff5722] text-white flex items-center justify-center font-extrabold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform">4</div>
                    <h4 className="font-bold text-gray-900 text-base mb-2">Celebrate</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">Our decorators reach your venue, perform the setup on-time, and pack up. Pay the remaining balance directly.</p>
                  </div>
                </div>
              </div>

              {/* Call To Action Block */}
              <div className="bg-[#ff5722] text-white p-8 rounded-2xl shadow-md space-y-4 not-prose">
                <h3 className="text-2xl font-bold text-white">Ready to Surprise Your Partner?</h3>
                <p className="text-sm text-white/90 leading-relaxed">
                  Our professional decorators help you design romantic proposal backdrops, canopy setups, and balloon arches anywhere in Delhi NCR.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <button
                    onClick={scrollToContact}
                    className="bg-white text-[#ff5722] hover:bg-gray-100 px-6 py-2.5 rounded-lg font-bold text-sm shadow-sm transition-all"
                  >
                    Get Free Quote
                  </button>
                  <a
                    href="https://wa.me/917017520811"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-lg font-bold text-sm shadow-sm transition-all flex items-center gap-1.5"
                  >
                    WhatsApp Now
                  </a>
                </div>
              </div>

              {/* FAQs Section */}
              <div id="faqs" className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 pb-2 border-b-2 border-gray-150">
                  Frequently Asked Questions (FAQs)
                </h2>
                <FaqAccordion items={faqItems} defaultOpenIndex={0} />
              </div>

              {/* Related Services Links Section */}
              <div className="bg-orange-50/30 p-8 rounded-2xl border border-orange-100/70 text-sm leading-relaxed space-y-4">
                <h4 className="font-bold text-gray-900 text-lg">Explore More Celebration & Design Services</h4>
                <p>
                  Eventkro is your full-service styling partner. Whether you are hosting an anniversary milestone, birthday party, surprise proposal, or baby shower, we tailor our decoration packages. Explore other related services to make your moment special:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[#ff5722] font-semibold">
                  <div>• <Link href="/birthday-decoration-in-delhi" className="hover:underline font-medium text-[#ff5722]">Birthday Decoration in Delhi</Link></div>
                  <div>• <Link href="/balloon-decoration-in-delhi" className="hover:underline font-medium text-[#ff5722]">Balloon Decoration in Delhi</Link></div>
                  <div>• <Link href="/baby-shower-decoration-in-delhi" className="hover:underline font-medium text-[#ff5722]">Baby Shower Decoration in Delhi</Link></div>
                  <div>• <Link href="/room-decoration-in-delhi" className="hover:underline font-medium text-[#ff5722]">Room Decoration in Delhi</Link></div>
                  <div>• <Link href="/contact" className="hover:underline font-medium text-[#ff5722]">Contact Team</Link></div>
                  <div>• <Link href="/pricing" className="hover:underline font-medium text-[#ff5722]">Pricing Guide</Link></div>
                  <div>• <Link href="/gallery" className="hover:underline font-medium text-[#ff5722]">Photo Gallery</Link></div>
                  <div>• <Link href="/partner-with-eventkro" className="hover:underline font-medium text-[#ff5722]">Partner With Eventkro</Link></div>
                </div>
                <p className="text-gray-500 text-xs mt-3">
                  Also available in other cities: Check out our specialized services such as <Link href="/car-boot-decoration-in-agra" className="hover:underline font-medium text-gray-600">Car Boot Decoration in Agra</Link>, <Link href="/proposal-decoration-in-mathura" className="hover:underline font-medium text-gray-600">Proposal Decor in Mathura</Link>, <Link href="/event-planner-in-firozabad" className="hover:underline font-medium text-gray-600">Event Planners in Firozabad</Link>, and <Link href="/wedding-planner-in-shikohabad" className="hover:underline font-medium text-gray-600">Wedding Organizers in Shikohabad</Link>.
                </p>
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

                {/* Booking Contact Form */}
                <div id="booking-form-section" className="bg-white border border-gray-150 rounded-2xl p-6 shadow-md relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Book Your Setup</h3>
                  <p className="text-gray-500 text-xs mb-6">Receive a custom theme design and budget quotation within 24 hours.</p>

                  {submitStatus && (
                    <div className={`p-4 mb-4 rounded-lg text-xs leading-relaxed ${submitStatus.success ? 'bg-green-50 text-green-700 border border-green-150' : 'bg-red-50 text-red-700 border border-red-150'}`}>
                      {submitStatus.message}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold text-gray-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full text-sm px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#ff5722] focus:border-transparent outline-none"
                        placeholder="Your Name"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="phone" className="block text-xs font-bold text-gray-700 mb-1">Phone *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full text-sm px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#ff5722] focus:border-transparent outline-none"
                          placeholder="98xxxxxx"
                        />
                      </div>
                      <div>
                        <label htmlFor="locality" className="block text-xs font-bold text-gray-700 mb-1">Locality *</label>
                        <select
                          id="locality"
                          name="locality"
                          value={formData.locality}
                          onChange={handleInputChange}
                          className="w-full text-sm px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#ff5722] focus:border-transparent outline-none bg-white"
                        >
                          <option value="Connaught Place">Connaught Place</option>
                          <option value="Dwarka">Dwarka</option>
                          <option value="Rohini">Rohini</option>
                          <option value="Janakpuri">Janakpuri</option>
                          <option value="Karol Bagh">Karol Bagh</option>
                          <option value="Vasant Kunj">Vasant Kunj</option>
                          <option value="Lajpat Nagar">Lajpat Nagar</option>
                          <option value="South Delhi">South Delhi</option>
                          <option value="Noida">Noida</option>
                          <option value="Gurgaon">Gurgaon</option>
                          <option value="Faridabad">Faridabad</option>
                          <option value="Ghaziabad">Ghaziabad</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold text-gray-700 mb-1">Email (Optional)</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full text-sm px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#ff5722] focus:border-transparent outline-none"
                        placeholder="name@email.com"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="eventType" className="block text-xs font-bold text-gray-700 mb-1">Occasion</label>
                        <select
                          id="eventType"
                          name="eventType"
                          value={formData.eventType}
                          onChange={handleInputChange}
                          className="w-full text-sm px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#ff5722] focus:border-transparent outline-none bg-white"
                        >
                          <option value="Romantic Proposal Setup">Romantic Setup</option>
                          <option value="Home Anniversary Setup">At Home Setup</option>
                          <option value="Hotel Room Anniversary Setup">Hotel Room Decor</option>
                          <option value="Candle Light Anniversary Setup">Candlelight Decor</option>
                          <option value="25th Anniversary Setup">25th Jubilee</option>
                          <option value="50th Anniversary Setup">50th Jubilee</option>
                          <option value="Other Anniversary Setup">Other Anniversary</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="eventDate" className="block text-xs font-bold text-gray-700 mb-1">Event Date *</label>
                        <input
                          type="date"
                          id="eventDate"
                          name="eventDate"
                          required
                          value={formData.eventDate}
                          onChange={handleInputChange}
                          className="w-full text-sm px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#ff5722] focus:border-transparent outline-none bg-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-bold text-gray-700 mb-1">Theme Details / Message</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full text-sm px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#ff5722] focus:border-transparent outline-none resize-none"
                        placeholder="Mention color preferences, balloon selections, or custom props..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3 bg-[#ff5722] text-white rounded-lg font-bold text-sm hover:bg-[#e64a19] transition-all disabled:opacity-50"
                    >
                      {isSubmitting ? 'Sending Request...' : 'Send Booking Request'}
                    </button>
                  </form>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Direct Contact Banner */}
      <section className="py-16 bg-[#ff5722] text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Ready to Plan the Perfect Anniversary Surprise in Delhi NCR?</h2>
          <p className="text-lg mb-8 text-white/90 leading-relaxed max-w-2xl mx-auto">
            Book our professional local styling team today. Let us design an anniversary setup that wows your partner and leaves beautiful lasting memories.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={scrollToContact}
              className="bg-white text-[#ff5722] hover:bg-gray-100 text-lg px-8 py-3 rounded-lg shadow-md font-bold transition-all"
            >
              Request Free Quote
            </button>
            <a
              href="tel:+917017520811"
              className="bg-gray-900 text-white hover:bg-black text-lg px-8 py-3 rounded-lg shadow-md font-bold transition-all"
            >
              Call Our Team
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex flex-col justify-center items-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
        >
          {/* Close Button */}
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-[#ff5722] p-2 focus:outline-none focus:ring-2 focus:ring-[#ff5722] rounded-full transition-colors text-3xl font-bold z-10"
            aria-label="Close lightbox"
          >
            ✕
          </button>

          {/* Prev Button */}
          <button
            type="button"
            onClick={showPrevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#ff5722] p-3 focus:outline-none focus:ring-2 focus:ring-[#ff5722] rounded-full transition-colors text-3xl md:text-5xl font-bold z-10"
            aria-label="Previous image"
          >
            ‹
          </button>

          {/* Image Display */}
          <div className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center">
            <Image
              src={galleryImages[activeImageIndex].src}
              alt={galleryImages[activeImageIndex].alt}
              width={1200}
              height={900}
              loading="lazy"
              className="object-contain max-h-[80vh] w-auto h-auto rounded-lg"
            />
          </div>

          {/* Image Alt Text / Caption */}
          <div className="text-white text-center mt-4 max-w-2xl px-4 z-10">
            <p className="text-base sm:text-lg font-medium">{galleryImages[activeImageIndex].alt}</p>
            <p className="text-xs sm:text-sm text-gray-400 mt-1">Image {activeImageIndex + 1} of {galleryImages.length}</p>
          </div>

          {/* Next Button */}
          <button
            type="button"
            onClick={showNextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#ff5722] p-3 focus:outline-none focus:ring-2 focus:ring-[#ff5722] rounded-full transition-colors text-3xl md:text-5xl font-bold z-10"
            aria-label="Next image"
          >
            ›
          </button>
        </div>
      )}
    </main>
  );
}
