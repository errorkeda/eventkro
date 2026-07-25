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
    question: 'What is the starting price for balloon decoration in Delhi?',
    answer: 'The starting price for our premium balloon decoration at home in Delhi is ₹1,499. This includes metallic balloon decoration, customized banners, ribbons, and basic fairy lights. Premium ring setups and luxury arrangements range from ₹2,999 to ₹6,999+.'
  },
  {
    question: 'Do you provide same day balloon decoration in Delhi?',
    answer: 'Yes, we offer same-day surprise balloon decoration in Delhi NCR. If you place your reservation before 3:00 PM, our closest team near Dwarka, Rohini, or Lajpat Nagar will reach your location and complete the setup.'
  },
  {
    question: 'Can you decorate a hotel room for a surprise in Delhi?',
    answer: 'Yes, we specialize in surprise hotel room balloon decoration in Delhi (including Connaught Place, Karol Bagh, Vasant Kunj, Aerocity, and Noida). Please check with the hotel desk beforehand regarding their decorator entry policy.'
  },
  {
    question: 'Is home balloon decoration safe for wall paint?',
    answer: 'Absolutely. Our expert balloon decorators delhi use wall-safe masking tape to mount balloons and fairy lights, ensuring no damage to your paint. We do not use nails or double-sided tape that can peel off plaster.'
  },
  {
    question: 'Do you charge extra for travel to Noida, Gurgaon, or Faridabad?',
    answer: 'Basic setup and delivery are included for all central Delhi areas. A minimal transport charge may apply only for outer locations in Gurgaon, Faridabad, or Greater Noida depending on the package.'
  },
  {
    question: 'Which balloon types are used in your decorations?',
    answer: 'We use premium metallic chrome, pastel, matte, and confetti-filled latex balloons. Combinations of chrome rose gold, champagne gold, silver, and vibrant colors are highly popular for balloon decoration in Delhi.'
  },
  {
    question: 'Can we request specific themes like birthday or anniversary balloon decorations?',
    answer: 'Yes, we offer specialized birthday balloon decoration Delhi and anniversary balloon decoration Delhi. You can request specific colors, themes, and personalized add-ons to suit your occasion.'
  },
  {
    question: 'Can we request fresh flower decorations along with balloons?',
    answer: 'Yes. We can add fresh red rose petal pathways, table flower arrangements, and other floral details to any of our balloon decoration packages as a customizable add-on.'
  },
  {
    question: 'How do I book a balloon setup with Eventkro?',
    answer: 'You can submit the online booking form or message us directly on WhatsApp. We confirm your booking upon receiving a small advance token, and the rest is paid to the decorator after the setup.'
  },
  {
    question: 'What is your cancellation or rescheduling policy?',
    answer: 'Rescheduling is free of charge if requested at least 48 hours in advance. For cancellations made within 24 hours of the slot, the token deposit is non-refundable as materials and decorators are already allocated.'
  },
  {
    question: 'Can I customize the colors and theme of the setup?',
    answer: 'Yes. You can customize the balloon colors, neon light text, backdrop frames (metal ring, sequin wall), and add customized photo hangings.'
  },
  {
    question: 'Do you offer terrace canopy setups with balloons?',
    answer: 'Yes, our terrace decorations are a top choice. We construct a secure canopy frame, weave warm fairy lights, and beautifully integrate organic balloon arrangements.'
  },
  {
    question: 'Do you provide decoration services for large milestone events?',
    answer: 'Yes, we design grand setups for large milestones. These setups feature custom photo grids, numeric marquee lights, and premium organic balloon arches.'
  },
  {
    question: 'How long does it take for the balloon decorators to complete the setup?',
    answer: 'Standard balloon setups take 45 to 60 minutes. High-end canopy tents, circular backdrops, or sequin shimmer walls require about 2 to 3 hours of installation time.'
  },
  {
    question: 'Do you handle the cleanup after the event?',
    answer: 'Dismantling and balloon cleanup are not included in the standard setup package. For packages with rented frames or neon signs, our team returns the next day to pack up and retrieve the props.'
  }
];

const packages = [
  {
    name: 'Classic Balloon Setup',
    startingPrice: '₹1,499',
    description: 'Perfect for cozy home celebrations, bedrooms, and simple room decorations.',
    setupTime: '45 - 60 Minutes',
    suitableFor: 'Living Rooms, Bedrooms, and Cozy home settings',
    features: [
      '100 Premium Metallic Balloons (Choice of 2 colors)',
      'Customized Celebration Banner',
      'LED Fairy Lights (1 String, Warm White)',
      'Balloon Bunches on the ceiling & walls with ribbons',
      'Damage-free wall-safe setup by local decorator'
    ],
    rating: 4.8,
    cta: 'Get Free Quote'
  },
  {
    name: 'Premium Theme Setup',
    startingPrice: '₹2,999',
    description: 'Our most popular design for drawing rooms, hotel rooms, and small banquets.',
    setupTime: '2 Hours',
    suitableFor: 'Drawing Rooms, Hotel Suites, Private Terraces, and Lounge areas',
    features: [
      '200 Pastel & Chrome Balloons (custom color scheme)',
      'Heart-Shaped Frame or Circular Ring Backdrop (Rental)',
      'LED Neon Light sign or Custom Name Board',
      'Fresh Floral Accents or Confetti Details',
      'Doorstep delivery, setup & teardown included'
    ],
    popular: true,
    rating: 4.9,
    cta: 'Get Free Quote'
  },
  {
    name: 'Luxury Organic Experience',
    startingPrice: '₹6,999',
    description: 'A massive visual feast with organic balloon waves, shimmer grids, and spotlights.',
    setupTime: '3 Hours',
    suitableFor: 'Grand Banquets, Villa Lawns, Grand Milestone Celebrations',
    features: [
      '350+ Luxury Chrome, Pastel & Confetti Balloons',
      'Sequin Shimmer Wall (8x8 ft) or Backdrop Trio Panels (Rental)',
      'Personalized Acrylic Name Board (Client keeps board)',
      'Marquee Number LED Lights (Rental)',
      '2 LED Spotlights & 4 Cold Pyro Sparklers for cake cutting',
      'On-site senior design coordinator supervision'
    ],
    rating: 5.0,
    cta: 'Get Free Quote'
  }
];

const themes = [
  { name: 'Pastel Dream Theme', desc: 'Soft pastel balloon clouds perfect for elegant gatherings, featuring beautiful arches and modern aesthetics.' },
  { name: 'Rose Gold Glamour Theme', desc: 'Sophisticated rose gold, white, and champagne chrome balloon clouds featuring metallic ring setups and custom neon boards.' },
  { name: 'Classic Chrome Theme', desc: 'Vibrant metallic chrome balloons tailored to your color preference for a bold visual impact and lively atmosphere.' },
  { name: 'Elegant Boho Theme', desc: 'Rustic and natural tones using matte balloons paired with warm fairy lights, wooden frames, and low table setups.' },
  { name: 'Luxury Sequin Splendor', desc: 'Magnificent golden chrome and snow-white organic balloon waves, gold sequin shimmer walls, and illuminated background spotlights.' },
  { name: 'Midnight Surprise Theme', desc: 'Surprise room decorations featuring helium-style balloon bouquets floating on the ceiling, rose petals on the bed, and pathway lights.' }
];

const localities = [
  { name: 'Connaught Place', desc: 'Premium suite decor, corporate event setups, and restaurant surprise arrangements.' },
  { name: 'Dwarka', desc: 'Fast, home-focused balloon styling for modern apartments and private flats.' },
  { name: 'Rohini', desc: 'Quick local decorator teams specialized in drawing rooms and rooftop setups.' },
  { name: 'Janakpuri', desc: 'Cozy living room designs, balloon arches, and milestone family dinners.' },
  { name: 'Karol Bagh', desc: 'Hotel room surprises, commercial gallery balloon displays, and budget celebrations.' },
  { name: 'Vasant Kunj', desc: 'Luxury villa settings, lawn setups, and high-concept custom designer styling.' },
  { name: 'Lajpat Nagar', desc: 'Doorstep room styling, balloon backdrops, and fresh flower pathways.' },
  { name: 'South Delhi', desc: 'Elite styling with premium props, sequin walls, and professional event coordinators.' },
  { name: 'Noida', desc: 'Full-service event planning, high-rise balcony drapes, and surprise setups.' },
  { name: 'Gurgaon', desc: 'Luxury penthouses, corporate events, and modern fairy light cabanas.' },
  { name: 'Faridabad', desc: 'Affordable bedroom balloon decorations, terrace setups, and private family layouts.' },
  { name: 'Ghaziabad', desc: 'Doorstep decor for residential colonies, metallic balloon arches, and budget surprises.' }
];

const galleryImages = [
  { src: '/images/delhi/anniversary/gallery-1.webp', alt: 'Luxury Balloon Decoration at Home in Delhi' },
  { src: '/images/delhi/anniversary/gallery-2.webp', alt: 'Premium Hotel Room Balloon Decoration Delhi' },
  { src: '/images/delhi/anniversary/gallery-3.webp', alt: 'Luxury Theme Balloon Decoration Delhi' },
  { src: '/images/delhi/anniversary/gallery-4.webp', alt: 'Terrace Balloon Decoration Delhi NCR' },
  { src: '/images/delhi/anniversary/gallery-5.webp', alt: 'Elegant Organic Balloon Decoration Setup Delhi' },
  { src: '/images/delhi/anniversary/gallery-6.webp', alt: 'Grand Milestone Balloon Decoration Delhi' }
];

export default function BalloonDelhiPage() {
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
    eventType: 'Balloon Decoration Setup',
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
        message: 'Thank you! Your balloon decoration request has been successfully submitted. We will contact you shortly.'
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        city: 'Delhi NCR',
        eventType: 'Balloon Decoration Setup',
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
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.58)' }} z-10></div>
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
          style={{ backgroundImage: "url('/images/delhi/anniversary/hero.webp')" }}
        ></div>
        <div className="container mx-auto px-4 relative z-20 max-w-4xl">
          <span className="bg-[#ff5722] text-white px-5 py-1.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 inline-block shadow-md">
            Premium Balloon Decorators in Delhi NCR
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">Balloon Decoration in Delhi NCR</h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">Transform your special events with premium balloon decoration in Delhi NCR. We create elegant balloon arrangements, luxury organic themes, hotel room surprises, terrace setups, and beautiful home decorations with same-day setup across Delhi, Noida, Gurgaon, Faridabad and Ghaziabad.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={scrollToContact}
              className="btn-primary text-lg px-8 py-3.5 rounded-lg shadow-lg font-bold hover:scale-105 transition-transform"
            >
              Get Free Quote
            </button>
            <a
              href="https://wa.me/917017520811"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white hover:bg-green-700 text-lg px-8 py-3.5 rounded-lg shadow-lg font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform"
            >
              Chat on WhatsApp
            </a>
          </div>
          {/* Trust points */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-6 border-t border-white/20">
            <div className="flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-white/90">
              <span className="text-green-400">✅</span>
              <span>Same Day Setup</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-white/90">
              <span className="text-green-400">✅</span>
              <span>Home & Hotel Decor</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-white/90">
              <span className="text-green-400">✅</span>
              <span>Custom Themes</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-white/90">
              <span className="text-green-400">✅</span>
              <span>Delhi NCR Coverage</span>
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
              <span className="text-sm font-bold text-gray-850">Custom Themes</span>
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
                  Affordable Balloon Decoration Packages in Delhi NCR
                </h2>
                <p className="leading-relaxed mb-6">
                  Every celebration deserves a breathtaking setup. Eventkro offers premium balloon decoration packages designed to fit your home, hotel room, or outdoor space. Select one of our popular packages and customize it to suit your aesthetic preferences.
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

                {/* 1. Home Balloon Decoration */}
                <div id="home-decor">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                    Balloon Decoration at Home Delhi
                  </h2>
                  <p className="leading-relaxed">
                    Celebrating your special moments in the comfort of your home provides an intimate, relaxed, and memorable atmosphere. Our expert decorators design premium, <strong>balloon decoration at home delhi</strong> packages that turn your familiar bedroom or living room into a luxurious event space. Using combinations of metallic chrome balloons, foil shapes, hanging photo collections, and warm LED string lights, we build a visually stunning environment.
                  </p>
                  <p className="leading-relaxed">
                    We focus on layouts that respect your home furniture, utilizing wall-safe masking tape and weighted balloon stands to create professional arches and backdrop frames. You do not have to worry about paint peeling or post-party damage. Let us handle the details while you look forward to a special time with your loved ones.
                  </p>
                </div>

                {/* 2. Hotel Room Balloon Decoration */}
                <div id="hotel-decor">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                    Hotel Balloon Decoration Delhi
                  </h2>
                  <p className="leading-relaxed">
                    Planning a weekend staycation in a luxury hotel across Delhi NCR, such as Connaught Place, Vasant Kunj, Karol Bagh, or Aerocity? You can elevate your stay by arranging a surprise **hotel balloon decoration delhi** setup. We specialize in working within the constraints of hotel suites, placing helium-style ceiling balloon clusters with dangling ribbons, warm LED tea-light paths, and rose petal beds.
                  </p>
                  <p className="leading-relaxed">
                    We coordinate coordinates directly with the hotel concierge or enter with your room keys to finish the installation. Walking into a professionally decorated hotel suite with romantic lighting and chrome balloon clouds on the ceiling is the perfect way to begin your getaway. Check with your hotel regarding external decorators, and we will take care of the rest.
                  </p>
                </div>

                {/* 3. Terrace Balloon Decoration */}
                <div id="terrace-decor">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                    Cozy Terrace Balloon Decoration
                  </h2>
                  <p className="leading-relaxed">
                    Rooftops and open-air terraces offer a magical background for celebrations, especially during pleasant Delhi evenings. We craft cozy terrace settings complete with wooden teepee canopy tents, flowing white lace drapes, and organic balloon frame highlights. We weave yards of warm fairy string lights through the fabric to create a gorgeous warm glow as the sun sets.
                  </p>
                  <p className="leading-relaxed">
                    For larger terraces, we can install double-ring metal circular arches, sequin walls, and customized neon signs. To protect the setup against evening wind currents, our professional team uses heavy, weighted sandbag supports on all frames, ensuring everything remains stable and safe for the duration of your party.
                  </p>
                </div>

                {/* 4. Birthday Balloon Decoration Delhi */}
                <div id="birthday-decor">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-150">
                    Birthday Balloon Decoration Delhi
                  </h2>
                  <p className="leading-relaxed">
                    Birthdays are meant to be vibrant, colorful, and joy-filled. We design customized **birthday balloon decoration delhi** setups that focus heavily on theme-based aesthetics. From kids' favorite superhero or princess themes to elegant adult milestone birthday decorations, we arrange gorgeous backdrops complete with personalized banners and age marquee lights.
                  </p>
                  <p className="leading-relaxed">
                    We combine bright, high-quality balloons with foil shapes, hanging glass bulbs, and backdrop curtain lights, creating a captivating mood that is perfect for professional photography and memory making.
                  </p>
                </div>

                {/* 5. Anniversary Balloon Decoration Delhi */}
                <div id="anniversary-decor">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                    Anniversary Balloon Decoration Delhi
                  </h2>
                  <p className="leading-relaxed">
                    Reaching a milestone in your relationship is a monumental moment. Our **anniversary balloon decoration delhi** setups are designed with a theme of premium romantic sophistication. We utilize chrome red, gold, and silver balloons, pearl white organic balloon waves, giant numeric marquee lights, and heart-shaped backdrops.
                  </p>
                  <p className="leading-relaxed">
                    These setups are highly popular for couple surprises or large family gatherings. We can include custom photo grids hanging from balloon strings that showcase years of beautiful memories, custom name cutouts, and elegant table styling that adds a touch of royalty to the occasion.
                  </p>
                </div>

                {/* 6. Same Day Balloon Decoration */}
                <div id="same-day">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                    Same Day Balloon Decoration in Delhi NCR
                  </h2>
                  <p className="leading-relaxed">
                    Forgot to plan or had a last-minute change of venue? Eventkro has you covered with our efficient same-day **balloon decoration delhi ncr** services. We maintain active, local decorator networks across Dwarka, Rohini, Laxmi Nagar, and Lajpat Nagar, enabling us to dispatch a team to your home or hotel room quickly.
                  </p>
                  <p className="leading-relaxed">
                    Simply place your reservation before 3:00 PM on the day of the event, choose one of our standardized packages, and our decorators will arrive with all the required balloons, lights, and banners to complete the setup on time.
                  </p>
                </div>

                {/* 7. Why Professional Balloon Decorators */}
                <div id="why-professional">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">
                    Why Hire Professional Balloon Decorators Delhi
                  </h2>
                  <p className="leading-relaxed">
                    While DIY balloon decoration may seem simple, achieving a high-end, clean, and stable backdrop requires professional skill and the right tools. Standard double-sided tape can peel off your home\'s wall paint, and cheap balloons can pop easily, ruining a surprise.
                  </p>
                  <p className="leading-relaxed">
                    Our professional **balloon decorators delhi** use high-quality, biodegradable chrome latex balloons that stay inflated for days. We employ wall-safe masking tape techniques, and bring heavy metal frames and electric balloon pumps, delivering a stress-free experience so you can enjoy your event.
                  </p>
                </div>

              </div>

              {/* Theme Showcase Section */}
              <div id="themes-list" className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-150">
                  Trending Decoration Themes We Offer in Delhi
                </h2>
                <p className="leading-relaxed mb-6">
                  Select from our list of trending celebration themes designed specifically for beautiful setups:
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
                  Balloon Decoration Pricing Table (Delhi NCR)
                </h2>
                <p className="leading-relaxed mb-4">
                  We believe in clear, upfront pricing. Below is a detailed rate sheet for our standard balloon packages and customizable add-ons:
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
                        <td className="px-6 py-4 font-bold text-gray-800">Classic Balloon Setup</td>
                        <td className="px-6 py-4 font-bold text-gray-900">₹1,499</td>
                        <td className="px-6 py-4 text-gray-600">Bedrooms, cozy surprises, home settings</td>
                        <td className="px-6 py-4 text-gray-650">45 - 60 Mins</td>
                        <td className="px-6 py-4 text-gray-600">Balloons color choice</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-bold text-gray-800">Premium Theme Setup</td>
                        <td className="px-6 py-4 font-bold text-gray-900">₹2,999</td>
                        <td className="px-6 py-4 text-gray-600">Suites, drawing rooms, terrace surprise</td>
                        <td className="px-6 py-4 text-gray-650">2 Hours</td>
                        <td className="px-6 py-4 text-gray-600">Neon sign text, colors</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-bold text-gray-800">Luxury Organic Experience</td>
                        <td className="px-6 py-4 font-bold text-gray-900">₹6,999</td>
                        <td className="px-6 py-4 text-gray-600">Milestones, large halls, villas</td>
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
                        <td className="px-6 py-4 text-gray-600">Milestone numbers</td>
                        <td className="px-6 py-4 text-gray-650">30 Mins</td>
                        <td className="px-6 py-4 text-gray-600">Fitted LED lights</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-bold text-gray-800">Fresh Rose Petal Pathway</td>
                        <td className="px-6 py-4 font-bold text-gray-900">₹800</td>
                        <td className="px-6 py-4 text-gray-600">Intimate walks, beautiful paths</td>
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
                  Why Choose Eventkro for Balloon Decoration in Delhi
                </h2>
                <p className="leading-relaxed mb-6">
                  Planning a special day should be joyful, not filled with coordination stress, late decorator arrivals, or damaged home paint. When you book with Eventkro, you get professional styling alongside complete peace of mind:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose mb-6">
                  <div className="p-6 bg-white border border-gray-150 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-3xl mb-3 block">🧑‍🎨</span>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Professional Decorators</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">Our certified balloon decorators delhi ensure neat, precise balloon installations and frame styling.</p>
                  </div>
                  <div className="p-6 bg-white border border-gray-150 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-3xl mb-3 block">🎈</span>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Premium Materials</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">We use top-grade, non-toxic metallic chrome, pastel, and foil balloons that stay inflated for days.</p>
                  </div>
                  <div className="p-6 bg-white border border-gray-150 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-3xl mb-3 block">❤️</span>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Beautiful Themes</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">Choose from curated collections featuring canopy tents, floral pathways, and elegant neon light boards.</p>
                  </div>
                  <div className="p-6 bg-white border border-gray-150 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-3xl mb-3 block">💰</span>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Affordable Packages</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">Beautiful setups starting from ₹1,499 with upfront pricing and zero surprise hidden travel costs.</p>
                  </div>
                  <div className="p-6 bg-white border border-gray-150 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-3xl mb-3 block">⏱️</span>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Same Day Setup</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">Forgot to book? Fast dispatch teams arrange same-day setups if reserved before 3:00 PM.</p>
                  </div>
                  <div className="p-6 bg-white border border-gray-150 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-3xl mb-3 block">📞</span>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Dedicated Support</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">Direct support line with a dedicated event coordinator via WhatsApp/phone from booking to setup.</p>
                  </div>
                </div>
              </div>

              {/* Localities We Serve in Delhi */}
              <div id="areas-served" className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-150">
                  Localities and Areas We Serve in Delhi NCR
                </h2>
                <p className="leading-relaxed mb-6">
                  Our local teams provide doorstep balloon decoration services across all residential zones, hotel rooms, and event venues in Delhi NCR, Noida, Gurgaon, and Ghaziabad. We carry all required materials directly to your venue:
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
              </div>

              {/* Gallery Section with Lightbox */}
              <div id="gallery" className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-2 pb-2 border-b-2 border-gray-150">
                  Balloon Decoration Gallery
                </h2>
                <p className="leading-relaxed mb-8 text-gray-650">
                  Premium balloon decoration setups across Delhi NCR. Scroll and click to view detail images.
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
                  Simple Step-by-Step Balloon Decor Booking Process
                </h2>
                <p className="leading-relaxed mb-6">
                  Planning a beautiful layout should not be stressful. Eventkro offers a simplified 4-step booking process:
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
                <h3 className="text-2xl font-bold text-white">Ready to Surprise Your Loved Ones?</h3>
                <p className="text-sm text-white/90 leading-relaxed">
                  Our professional decorators help you design beautiful balloon backdrops, canopy setups, and arches anywhere in Delhi NCR.
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
                  <div>• <Link href="/anniversary-decoration-in-delhi" className="hover:underline font-medium text-[#ff5722]">Anniversary Decoration in Delhi</Link></div>
                  <div>• <Link href="/birthday-decoration-in-delhi" className="hover:underline font-medium text-[#ff5722]">Birthday Decoration in Delhi</Link></div>
                  <div>• <span className="text-gray-700">Proposal Decoration in Delhi</span></div>
                  <div>• <span className="text-gray-700">Baby Shower Decoration in Delhi</span></div>
                  <div>• <span className="text-gray-700">Car Boot Decoration</span></div>
                  <div>• <span className="text-gray-700">Welcome Baby Decoration</span></div>
                  <div>• <span className="text-gray-700">Room Decoration</span></div>
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
                          <option value="Balloon Decoration Setup">Balloon Decor</option>
                          <option value="Birthday Balloon Setup">Birthday Decor</option>
                          <option value="Anniversary Balloon Setup">Anniversary Decor</option>
                          <option value="Home Balloon Setup">At Home Setup</option>
                          <option value="Hotel Room Balloon Setup">Hotel Room Decor</option>
                          <option value="Other Balloon Setup">Other Decor</option>
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
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Ready to Plan the Perfect Balloon Decoration in Delhi NCR?</h2>
          <p className="text-lg mb-8 text-white/90 leading-relaxed max-w-2xl mx-auto">
            Book our professional local styling team today. Let us design a beautiful setup that wows your guests and leaves lasting memories.
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
