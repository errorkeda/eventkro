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
    question: 'What is the starting price for birthday decoration in Delhi?',
    answer: 'The pricing for birthday decoration in Delhi starts at ₹1,499 for basic home balloon decorations. Our premium ring backdrops and custom kids themes range from ₹3,499 to ₹6,999. Elite custom decorations with sequin walls, neon signs, and organic balloon clouds start from ₹9,999 onwards.'
  },
  {
    question: 'Which birthday decoration themes do you offer for kids in Delhi?',
    answer: 'We offer a wide array of popular kids birthday themes in Delhi including Boss Baby, Cocomelon, Frozen, Jungle/Safari, Unicorn, Butterfly, Spiderman, Avengers, Peppa Pig, and Barbie. Each theme can be customized with specific color balloon arches, table setups, and custom cutouts.'
  },
  {
    question: 'Can you set up birthday decorations in hotel rooms in Delhi Aerocity or Karol Bagh?',
    answer: 'Yes! We arrange surprise hotel room birthday decorations across Delhi NCR. You simply need to confirm with your hotel desk regarding their external decorator policy, and our team will coordinate the timing to set up metallic balloons, rose petals, LED lights, and hanging photos.'
  },
  {
    question: 'Do you provide same day birthday decoration in Delhi?',
    answer: 'Yes, we provide same-day birthday decoration in Delhi for select packages. If you place your reservation before 2:00 PM, our local decorator teams located near Dwarka, Rohini, or Laxmi Nagar can reach your venue and set it up within a few hours.'
  },
  {
    question: 'How long does the setup take?',
    answer: 'A standard home decoration takes around 60 to 90 minutes. High-end thematic backdrops, organic arches, and setups involving metal stands, helium balloons, or backdrop rentals require 2 to 3 hours of installation time.'
  },
  {
    question: 'Are the materials used for home decorations safe for children?',
    answer: 'Absolutely. We use 100% natural, biodegradable latex balloons that are non-toxic. For lighting elements, we utilize low-voltage LED string lights that emit no heat. We also use wall-safe masking tape to protect your home paint.'
  },
  {
    question: 'Do you decorate terrace and open-air spaces for birthday parties?',
    answer: 'Yes, we design cozy terrace birthday setups, including fairy light cabanas, teepee tents, and organic balloon frame arches. We use heavy, weighted stands to secure our backdrops against the wind.'
  },
  {
    question: 'Can I choose a custom color scheme for an adult birthday party?',
    answer: 'Yes, adult birthday decorations usually favor minimalist or glam aesthetics. We offer elegant color palettes like Rose Gold & White, Black & Chrome Gold, Pastel Blue & Silver, and Champagne themes, complemented by custom age neon lights.'
  },
  {
    question: 'Do you cover all localities in West, North, South, and East Delhi?',
    answer: 'Yes, we serve all major areas of Delhi NCR, including Dwarka, Rohini, Janakpuri, Rajouri Garden, Laxmi Nagar, Pitampura, Vasant Kunj, Vasant Vihar, Saket, Greater Kailash, Karol Bagh, Punjabi Bagh, and Mayur Vihar.'
  },
  {
    question: 'Do you charge extra for transportation in Delhi NCR?',
    answer: 'Our packages are inclusive of setup and basic delivery within Delhi municipal limits. A nominal transportation surcharge may apply only for remote areas or distant parts of NCR (Noida, Gurgaon, Ghaziabad).'
  },
  {
    question: 'What rental items are included in premium setups?',
    answer: 'Our premium and elite packages include rentals of metal circular rings, wood panels, sequin shimmer walls, LED neon signs, spotlights, and decorative tables. Our team will return the next day to collect these items.'
  },
  {
    question: 'Can we add a cake table, fresh flowers, or cold pyros to our order?',
    answer: 'Yes, we offer various add-ons such as customized cake table styling, fresh rose or lily floral arrangements, LED marquee numbers, and cold pyro sparklers for the cake-cutting moment.'
  },
  {
    question: 'Do you provide cleanup services after the event?',
    answer: 'We focus on setup and decoration. Disassembly and balloon cleanup services are optional and can be booked for a small additional charge. For rentals, we automatically handle teardown when retrieving the props.'
  },
  {
    question: 'How do I book a birthday decoration in Delhi with Eventkro?',
    answer: 'You can book by submitting our online booking form or via WhatsApp chat. To finalize the date, we collect a small deposit, and the remaining balance is paid to the decorator upon completion of the setup.'
  },
  {
    question: 'What happens in case of cancellation?',
    answer: 'If you notify us at least 48 hours before the event, we can reschedule your booking to any mutually available future date without penalty. For cancellations within 24 hours, the advance deposit is non-refundable.'
  }
];

const packages = [
  {
    name: 'Standard Birthday Setup',
    startingPrice: '₹1,499',
    description: 'Perfect for living rooms, bedrooms, and cozy surprise setups.',
    setupTime: '60 - 90 Minutes',
    suitableFor: 'Living Rooms, Bedrooms, and Cozy surprise home settings',
    features: [
      '100-120 Metallic Balloons (Choice of 2 colors)',
      '1 Cardboard "Happy Birthday" Banner',
      'LED Fairy Lights (1 String, Warm White)',
      'Ribbon hangings & balloon bunches on the wall',
      'Damage-free wall-safe setup by local decorator'
    ],
    rating: 4.8,
    cta: 'Get Free Quote'
  },
  {
    name: 'Premium Theme Backdrop',
    startingPrice: '₹3,499',
    description: 'Our most popular design for drawing rooms and hotel setups.',
    setupTime: '2 Hours',
    suitableFor: 'Drawing Rooms, Banquet Halls, Hotel Rooms & Rooftops',
    features: [
      '200 Premium Pastel & Chrome Balloons',
      '7ft Circular Ring Frame or Arch Backdrop (Rental)',
      'LED Neon Sign Board ("Happy Birthday" or similar)',
      'Custom foil characters or age number balloons',
      'Doorstep delivery, setup & teardown included'
    ],
    popular: true,
    rating: 4.9,
    cta: 'Get Free Quote'
  },
  {
    name: 'Elite Grand Celebration VIP',
    startingPrice: '₹9,999',
    description: 'A massive visual feast with organic balloon waves, shimmer grids, and spotlights.',
    setupTime: '3 Hours',
    suitableFor: 'Large Banquets, Villa Lawns, Grand Milestone Celebrations (1st, 18th, 50th)',
    features: [
      '350+ Luxury Chrome, Pastel & Confetti Balloons',
      'Sequin Shimmer Wall (8x8 ft) or Arch Trio (Rental)',
      'Custom Acrylic Name Cutout (Client keeps after event)',
      'Marquee Number LED Lights (2 numbers rental)',
      '2 LED Spotlights & 4 Cold Pyro Sparklers',
      'On-site senior design team coordination'
    ],
    rating: 5.0,
    cta: 'Get Free Quote'
  }
];

const themes = [
  { name: 'Boss Baby Theme', desc: 'Sleek black, white, and sky-blue balloon clouds with customized Boss Baby cardboard standees, customized cake table, and tie-and-suit decorations.' },
  { name: 'Cocomelon Theme', desc: 'Vibrant green, yellow, orange, and red balloon arches matching the Cocomelon colors. Ideal for toddler first birthday decorations in Delhi.' },
  { name: 'Frozen Theme', desc: 'Magical blue, white, and silver metallic setup featuring Frozen character foils, hanging snowflake cutouts, and ice-palace backdrops.' },
  { name: 'Jungle / Safari Theme', desc: 'Lush green organic balloon garlands blended with animal foil shapes (lions, giraffes, zebras), jungle vines, and wooden structures.' },
  { name: 'Unicorn Theme', desc: 'Soft pastel pink, purple, yellow, and mint green balloon columns, Unicorn horns, and custom golden name cutouts.' },
  { name: 'Butterfly Theme', desc: 'Aesthetic pink, gold, and white organic setups adorned with 3D paper butterflies, mesh circular frames, and delicate fairy lighting.' },
  { name: 'Spiderman Theme', desc: 'Bold red, blue, and black balloon clouds with spiderweb backdrops, custom Spiderman foils, and building city silhouette standees.' },
  { name: 'Avengers Theme', desc: 'Action-packed superhero setup with primary colored balloons, shield cutouts, character backdrops, and action-pose silhouettes.' },
  { name: 'Peppa Pig Theme', desc: 'Cute pastel pink, yellow, and green setups with mud puddle floor mats, Peppa Pig character props, and cartoon balloon clouds.' },
  { name: 'Barbie Theme', desc: 'Glamorous magenta, bubblegum pink, and white setups complete with Barbie silhouette box props, vanity setups, and glitter backdrops.' },
  { name: 'Rose Gold Glam Theme', desc: 'Luxury adult setup with rose gold chrome, champagne, and white balloons, gold circular hoops, and soft warm neon signboards.' },
  { name: 'Pastel Theme', desc: 'Trendy matte pastel colors blended together, creating a sophisticated and aesthetic organic balloon arch backdrop for all ages.' }
];

const localities = [
  { name: 'Dwarka', desc: 'Doorstep setups for builder floors, high-rises, and kids birthday themes.' },
  { name: 'Rohini', desc: 'Fast local decorators for residential sectors, apartments, and halls.' },
  { name: 'Janakpuri', desc: 'Vibrant drawing room decors, theme backdrops, and kids surprises.' },
  { name: 'Rajouri Garden', desc: 'Cafe birthday party decorations, rooftops, and glam adult setups.' },
  { name: 'Laxmi Nagar', desc: 'Affordable balloon setups, welcoming babies, and budget surprise decors.' },
  { name: 'Pitampura', desc: 'Pastel themes, mesh ring backdrops, and shop opening balloon decor.' },
  { name: 'Vasant Kunj', desc: 'Premium farmhouses, luxury villas, and high-concept designer styling.' },
  { name: 'Vasant Vihar', desc: 'Chic, minimalist balloon garlands and organic ring backdrops.' },
  { name: 'Connaught Place', desc: 'Corporate birthday setups, office surprises, and banquet decorations.' },
  { name: 'Saket', desc: 'Terrace balloon structures, cabanas, and couples birthday styling.' },
  { name: 'Greater Kailash', desc: 'Elite family birthday dinners, luxury backdrops, and balloon boxes.' },
  { name: 'Karol Bagh', desc: 'Hotel room surprises, retail display balloon arches, and budget decors.' },
  { name: 'Punjabi Bagh', desc: 'Grand lawns, marquee number setups, and outdoor birthday styling.' },
  { name: 'Mayur Vihar', desc: 'Cozy home balloon arches, welcoming kids, and anniversary events.' }
];

const galleryImages = [
  { src: '/images/delhi/birthday/gallery-1.webp', alt: 'Boss Baby Inspired Birthday Decoration in Delhi' },
  { src: '/images/delhi/birthday/gallery-2.webp', alt: 'Colorful Kids Birthday Decoration Setup in Delhi' },
  { src: '/images/delhi/birthday/gallery-3.webp', alt: 'Elegant Ice Princess Inspired Birthday Decoration in Delhi' },
  { src: '/images/delhi/birthday/gallery-4.webp', alt: 'Luxury Rose Gold Birthday Decoration at Home in Delhi' },
  { src: '/images/delhi/birthday/gallery-5.webp', alt: 'Premium Hotel Birthday Decoration in Delhi' },
  { src: '/images/delhi/birthday/gallery-6.webp', alt: 'Luxury Terrace Birthday Decoration in Delhi' }
];

export default function DelhiBirthdayPage() {
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
    eventType: 'Kids Birthday Decoration',
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
        message: 'Thank you! Your birthday decoration request has been successfully submitted. We will contact you shortly.'
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        city: 'Delhi NCR',
        eventType: 'Kids Birthday Decoration',
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
      <section className="relative min-h-[75vh] flex flex-col justify-center items-center text-center text-white overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
          style={{ backgroundImage: "url('/images/delhi/birthday/hero.webp')" }}
        ></div>
        <div className="container mx-auto px-4 relative z-20 max-w-4xl">
          <span className="bg-[#ff5722] text-white px-5 py-1.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 inline-block shadow-md">
            Delhi NCR Premium Party Decorators
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Birthday Decoration in Delhi
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Transform your party venue with stunning theme decorations. Eventkro provides professional birthday planners, custom backdrops, balloons, and lights across Dwarka, Rohini, Laxmi Nagar, Vasant Kunj, and all Delhi NCR.
          </p>
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
              <span>Same Day Decoration</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-white/90">
              <span className="text-green-400">✅</span>
              <span>Home & Hotel Decoration</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-white/90">
              <span className="text-green-400">✅</span>
              <span>Customized Theme Decoration</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm sm:text-base font-semibold text-white/90">
              <span className="text-green-400">✅</span>
              <span>Available Across Delhi NCR</span>
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
              <span className="text-sm font-bold text-gray-850">Same Day Decoration Available</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-2xl">🏠</span>
              <span className="text-sm font-bold text-gray-850">Home, Hotel & Restaurant Decoration</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-2xl">🎂</span>
              <span className="text-sm font-bold text-gray-850">Customized Birthday Themes</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-2xl">✨</span>
              <span className="text-sm font-bold text-gray-850">Professional Event Decorators</span>
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

              {/* 2. BIRTHDAY DECORATION PACKAGES */}
              <div id="packages" className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-150">
                  Affordable Birthday Decoration Packages in Delhi NCR
                </h2>
                <p className="leading-relaxed mb-6">
                  Every celebration deserves a personalized setup. Eventkro offers three primary birthday decoration packages tailored to suit different venues, spacing, and budgets. Whether you are planning a simple family cake cutting at home or a grand thematic party at a banquet hall, you will find a design that matches.
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

              {/* 3. KIDS BIRTHDAY DECORATIONS */}
              <div id="kids-decor" className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-150">
                  Magical Kids Birthday Decoration in Delhi
                </h2>
                <p className="leading-relaxed mb-4">
                  For a child, their birthday is the most eagerly anticipated day of the year. It represents a day of wonder, sweet treats, and playing with friends. Designing a themed birthday decoration is the best way to turn their imagination into reality. Eventkro specializes in setting up kids birthday themes that instantly transform standard venues into magical domains.
                </p>
                <p className="leading-relaxed mb-4">
                  We don\'t just inflate balloons; we construct elaborate scenes. For toddlers and young children, we focus on safe, rounded shapes, and soft colors, incorporating custom standees of their favorite characters, matching tablecloths, and photo backdrops. We coordinate color schemes with balloons, banners, party caps, and customized name cutouts. From 1st birthday milestones to pre-teen celebrations, our team manages everything from delivery to setup.
                </p>
              </div>

              {/* 4. ADULT BIRTHDAY DECORATIONS */}
              <div id="adult-decor" className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-150">
                  Elegant Adult Birthday Decoration in Delhi
                </h2>
                <p className="leading-relaxed mb-4">
                  Celebrating adult birthdays—whether it is a 21st, 30th, 50th, or 60th milestone—favors sophisticated styling over cartoon themes. Eventkro designs elegant, minimalist, and glamorous layouts tailored for adults. We focus on premium balloon varieties such as metallic chrome, matte black, transparent confetti-filled balloons, and warm LED lighting integrations.
                </p>
                <p className="leading-relaxed mb-4">
                  Popular choices for adult birthdays include rose gold hoop backdrops, organic balloon waves, circular mesh structures, and custom illuminated neon signs. Flanking the cake table with LED spotlighting, floating helium balloon columns, and custom name boards creates an excellent, aesthetic photo booth. Our decorators coordinate with your venue (living room, private terrace, backyard, or restaurant lounge) to ensure the design feels premium and matches the overall party mood.
                </p>
              </div>

              {/* 5. SURPRISE BIRTHDAY DECORATION */}
              <div id="surprise-decor" className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-150">
                  Surprise Birthday Decoration Setup
                </h2>
                <p className="leading-relaxed mb-4">
                  There is nothing more moving than walking into a room and being greeted by an unexpected festive display. Planning a surprise birthday decoration requires coordination, speed, and absolute secrecy. Eventkro provides specialized surprise birthday planners who help you execute the perfect plan without raising any suspicion.
                </p>
                <p className="leading-relaxed mb-4">
                  Whether you want to surprise your spouse, sibling, child, or parent, we arrange everything. For home surprises, our decorators can coordinate to enter while the celebrant is out, completing a beautiful bedroom or drawing-room makeover within 60 to 90 minutes. We can set up a canopy tent, write custom messages on banners, hang custom couple photos from balloon ribbons, and lay down rose petal pathways flanked by safe LED tea lights.
                </p>
              </div>

              {/* 6. HOTEL BIRTHDAY DECORATION */}
              <div id="hotel-decor" className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-150">
                  Surprise Hotel Room Birthday Decoration
                </h2>
                <p className="leading-relaxed mb-4">
                  If you are planning an intimate gateway or celebrating a special day in a premium hotel room (such as hotels in Aerocity, Vasant Kunj, or Connaught Place), we offer specialized hotel room birthday decoration services. We customize the layout to fit the specific space constraints of hotel suites or deluxe rooms.
                </p>
                <p className="leading-relaxed mb-4">
                  Our team coordinates directly with hotel security and staff (or enters utilizing your check-in key). We decorate the space with chrome balloon clouds on the ceiling, rose petal heart outlines on the bed, custom letter foil balloons on the wall, and warm fairy lights. This creates an immediate, breathtaking visual impact the moment you open the door. (Note: We advise checking with the hotel management beforehand regarding their decorator entry policy).
                </p>
              </div>

              {/* 7. TERRACE BIRTHDAY DECORATION */}
              <div id="terrace-decor" className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-150">
                  Cozy Terrace Birthday Decoration in Delhi
                </h2>
                <p className="leading-relaxed mb-4">
                  Terraces and open-air balconies offer a magical atmosphere for night-time birthday parties. Under the open sky, warm lighting and balloons blend to create a cozy, intimate vibe. Our terrace birthday decoration setups are highly popular across Delhi, especially during the pleasant autumn, winter, and spring seasons.
                </p>
                <p className="leading-relaxed mb-4">
                  We specialize in setting up canopy tents draped in white lace fabric, lit with fairy lights, and surrounded by organic balloon clouds. For larger terraces, we install metal circular arches decorated with balloons, neon signs, and artificial foliage. We anchor all structural backdrops with heavy weights to ensure they remain safe and sturdy against wind breezes. Adding floor cushions, low-seating tables, and lanterns completes the bohemian outdoor styling.
                </p>
              </div>

              {/* 8. THEME BIRTHDAY DECORATIONS */}
              <div id="themes-list" className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-150">
                  Popular Theme Birthday Decorations We Offer in Delhi
                </h2>
                <p className="leading-relaxed mb-6">
                  Themes add structure and character to a celebration. At Eventkro, we design and execute a wide array of trending birthday themes for kids and adults. Below is a detailed look at our popular themes:
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

              {/* 9. PRICING TABLE */}
              <div id="pricing" className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-150">
                  Birthday Decoration Pricing Table (Delhi NCR)
                </h2>
                <p className="leading-relaxed mb-4">
                  We believe in upfront, transparent pricing. Below is a summary of standard rates for our core setups alongside popular optional add-on styling services:
                </p>
                <div className="overflow-x-auto not-prose border border-gray-200 rounded-xl">
                  <table className="min-w-full divide-y divide-gray-200 text-sm text-left">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 font-bold text-gray-900">Setup / Customization Option</th>
                        <th className="px-6 py-3 font-bold text-gray-900">Inclusions</th>
                        <th className="px-6 py-3 font-bold text-gray-900">Standard Price</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 font-bold text-gray-800">Standard Birthday Setup</td>
                        <td className="px-6 py-4 text-gray-600">100+ metallic balloons, banner, string lights, wall hangings</td>
                        <td className="px-6 py-4 font-bold text-gray-900">₹1,499</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-bold text-gray-800">Premium Ring Arch Backdrop</td>
                        <td className="px-6 py-4 text-gray-600">200+ pastel balloons, ring frame rental, neon light signboard</td>
                        <td className="px-6 py-4 font-bold text-gray-900">₹3,499</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-bold text-gray-800">Elite VIP Shimmer Wall</td>
                        <td className="px-6 py-4 text-gray-600">350+ luxury balloons, sequin wall rental, marquee numbers, pyros</td>
                        <td className="px-6 py-4 font-bold text-gray-900">₹9,999</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-bold text-gray-800">Fairy Light Canopy Setup</td>
                        <td className="px-6 py-4 text-gray-600">Fabric drapes, canopy frame rental, fairy lights (terrace/room)</td>
                        <td className="px-6 py-4 font-bold text-gray-900">₹4,499</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-bold text-gray-800">Marquee Number Lights (Set of 2)</td>
                        <td className="px-6 py-4 text-gray-600">3ft illuminated LED marquee numbers (e.g., 1st, 18th, 25th)</td>
                        <td className="px-6 py-4 font-bold text-gray-900">₹1,200</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-bold text-gray-800">Cold Pyro Sparklers (Pack of 4)</td>
                        <td className="px-6 py-4 text-gray-600">Safe, electronic stage fireworks triggered on cake cutting</td>
                        <td className="px-6 py-4 font-bold text-gray-900">₹1,000</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-bold text-gray-800">Custom Acrylic Board</td>
                        <td className="px-6 py-4 text-gray-600">Personalized name board for backdrop (Client retains board)</td>
                        <td className="px-6 py-4 font-bold text-gray-900">₹800</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* 10. WHY CHOOSE EVENTKRO */}
              <div id="why-choose" className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-150">
                  Why Choose Eventkro for Birthday Decoration in Delhi
                </h2>
                <p className="leading-relaxed mb-4">
                  Hosting a birthday party should be an occasion of joy, not a stressful coordination struggle with local vendors, delayed timings, and peeling paint. Eventkro is a leading design agency that provides professional event styling. When you choose us for birthday decoration in Delhi, you secure peace of mind alongside a stunning setup.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 not-prose mb-6">
                  <div className="p-6 bg-white border border-gray-150 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-3xl mb-3 block">🧑‍🎨</span>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Professional Decorators</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">Our certified stylists carry years of design expertise, delivering clean, precise installations.</p>
                  </div>
                  <div className="p-6 bg-white border border-gray-150 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-3xl mb-3 block">🎨</span>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Creative Themes</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">Choose from dozens of trending custom themes (Boss Baby, Frozen, Pastel, Spiderman) customized to your venue.</p>
                  </div>
                  <div className="p-6 bg-white border border-gray-150 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-3xl mb-3 block">💰</span>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Affordable Packages</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">High-end balloon backdrops starting at ₹1,499. Transparent pricing with absolutely zero hidden surcharges.</p>
                  </div>
                  <div className="p-6 bg-white border border-gray-150 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-3xl mb-3 block">⏱️</span>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">On-time Setup</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">We respect your schedule. Decorators complete setups at least 1 hour before the party starts, guaranteed.</p>
                  </div>
                  <div className="p-6 bg-white border border-gray-150 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-3xl mb-3 block">🧹</span>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Clean Decoration</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">We utilize damage-free masking tapes to protect wall paints and handle full pickup of rental props smoothly.</p>
                  </div>
                  <div className="p-6 bg-white border border-gray-150 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-3xl mb-3 block">📞</span>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">Dedicated Support</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">Direct communication with your personal event coordinator via phone/WhatsApp throughout your booking.</p>
                  </div>
                </div>
              </div>

              {/* 11. AREAS WE SERVE IN DELHI */}
              <div id="areas-served" className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-150">
                  Localities and Areas We Serve in Delhi NCR
                </h2>
                <p className="leading-relaxed mb-6">
                  We provide doorstep birthday balloon decoration services across all residential zones, commercial streets, and partner hotel properties of Delhi NCR. Our decorators carry the equipment directly to your designated spot:
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

              {/* 12. GALLERY */}
              <div id="gallery" className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-2 pb-2 border-b-2 border-gray-150">
                  Birthday Decoration Gallery
                </h2>
                <p className="leading-relaxed mb-8 text-gray-600">
                  Explore our premium birthday decoration setups designed for homes, hotels, restaurants, terraces and party venues across Delhi NCR.
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

              {/* 13. BOOKING PROCESS */}
              <div id="booking-process" className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-150">
                  Simple Step-by-Step Birthday Decor Booking Process
                </h2>
                <p className="leading-relaxed mb-6">
                  Coordinating decorations should not feel like an extra chore. Our streamlined booking process ensures you can finalize your reservation in 4 simple steps:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 not-prose mt-8">
                  {/* Step 1 */}
                  <div className="bg-gray-50 border border-gray-150 p-6 rounded-2xl text-center relative group">
                    <div className="w-12 h-12 rounded-full bg-[#ff5722] text-white flex items-center justify-center font-extrabold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform">1</div>
                    <h4 className="font-bold text-gray-900 text-base mb-2">Share Your Requirements</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">Fill out our booking form or text us on WhatsApp with your date, locality, and preferred theme/budget.</p>
                    <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-3 text-[#ff5722] text-2xl font-bold z-10">→</div>
                    <div className="block md:hidden text-center text-[#ff5722] text-xl font-bold mt-4">↓</div>
                  </div>
                  {/* Step 2 */}
                  <div className="bg-gray-50 border border-gray-150 p-6 rounded-2xl text-center relative group">
                    <div className="w-12 h-12 rounded-full bg-[#ff5722] text-white flex items-center justify-center font-extrabold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform">2</div>
                    <h4 className="font-bold text-gray-900 text-base mb-2">Receive Design & Quote</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">Our designers share catalog recommendations, balloon color variations, and customize the quote to match your venue.</p>
                    <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-3 text-[#ff5722] text-2xl font-bold z-10">→</div>
                    <div className="block md:hidden text-center text-[#ff5722] text-xl font-bold mt-4">↓</div>
                  </div>
                  {/* Step 3 */}
                  <div className="bg-gray-50 border border-gray-150 p-6 rounded-2xl text-center relative group">
                    <div className="w-12 h-12 rounded-full bg-[#ff5722] text-white flex items-center justify-center font-extrabold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform">3</div>
                    <h4 className="font-bold text-gray-900 text-base mb-2">Confirm Booking</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">Confirm your date slot with a small token payment. We allocate the team, curate materials, and finalize setups.</p>
                    <div className="hidden md:block absolute top-1/2 -translate-y-1/2 -right-3 text-[#ff5722] text-2xl font-bold z-10">→</div>
                    <div className="block md:hidden text-center text-[#ff5722] text-xl font-bold mt-4">↓</div>
                  </div>
                  {/* Step 4 */}
                  <div className="bg-gray-50 border border-gray-150 p-6 rounded-2xl text-center group">
                    <div className="w-12 h-12 rounded-full bg-[#ff5722] text-white flex items-center justify-center font-extrabold text-lg mx-auto mb-4 group-hover:scale-110 transition-transform">4</div>
                    <h4 className="font-bold text-gray-900 text-base mb-2">Enjoy Your Celebration</h4>
                    <p className="text-xs text-gray-500 leading-relaxed">Our decorators reach your venue, execute the setup, clean up, and hand over. Pay the remaining balance directly.</p>
                  </div>
                </div>
              </div>

              {/* Call To Action Block */}
              <div className="bg-[#ff5722] text-white p-8 rounded-2xl shadow-md space-y-4 not-prose">
                <h3 className="text-2xl font-bold text-white">Ready to Plan Your Birthday Celebration?</h3>
                <p className="text-sm text-white/90 leading-relaxed">
                  Our team helps you create beautiful birthday decorations at home, hotels and party venues anywhere in Delhi NCR.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <button
                    onClick={scrollToContact}
                    className="bg-white text-orange-600 hover:bg-gray-100 px-6 py-2.5 rounded-lg font-bold text-sm shadow-sm transition-all"
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

              {/* 14. FAQs (15 FAQs) */}
              <div id="faqs" className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 pb-2 border-b-2 border-gray-150">
                  Frequently Asked Questions (FAQs)
                </h2>
                <FaqAccordion items={faqItems} defaultOpenIndex={0} />
              </div>

              {/* 15. RELATED SERVICES */}
              <div className="bg-orange-50/30 p-8 rounded-2xl border border-orange-100/70 text-sm leading-relaxed space-y-4">
                <h4 className="font-bold text-gray-900 text-lg">Explore More Celebration & Design Services</h4>
                <p>
                  Eventkro is your full-service styling partner. Whether you are hosting a birthday party, surprise proposal, or a romantic celebration, we tailor our decoration elements. Explore other related services to make your moment extra special:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[#ff5722] font-semibold">
                  <div>• <Link href="/balloon-decoration-in-delhi" className="hover:underline font-medium text-[#ff5722]">Balloon Decoration in Delhi</Link></div>
                  <div>• <span className="text-gray-700">Anniversary Decoration in Delhi</span></div>
                  <div>• <span className="text-gray-700">Baby Shower Decoration in Delhi</span></div>
                  <div>• <span className="text-gray-700">Proposal Decoration in Delhi</span></div>
                  <div>• <span className="text-gray-700">Car Boot Decoration in Delhi</span></div>
                  <div>• <Link href="/pricing" className="hover:underline">View General Service Packages</Link></div>
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

                {/* 16. CONTACT FORM */}
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
                          <option value="Dwarka">Dwarka</option>
                          <option value="Rohini">Rohini</option>
                          <option value="Janakpuri">Janakpuri</option>
                          <option value="Rajouri Garden">Rajouri Garden</option>
                          <option value="Laxmi Nagar">Laxmi Nagar</option>
                          <option value="Pitampura">Pitampura</option>
                          <option value="Vasant Kunj">Vasant Kunj</option>
                          <option value="Saket">Saket</option>
                          <option value="Greater Kailash">Greater Kailash</option>
                          <option value="Karol Bagh">Karol Bagh</option>
                          <option value="Punjabi Bagh">Punjabi Bagh</option>
                          <option value="Noida">Noida</option>
                          <option value="Gurgaon">Gurgaon</option>
                          <option value="Other">Other</option>
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
                          <option value="Kids Birthday Decoration">Kids Birthday</option>
                          <option value="Adult Birthday Decoration">Adult Birthday</option>
                          <option value="Surprise Birthday Decoration">Surprise Setup</option>
                          <option value="Hotel Birthday Decoration">Hotel Room Setup</option>
                          <option value="Terrace Birthday Decoration">Terrace Setup</option>
                          <option value="Other Birthday Decoration">Other Event</option>
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
                        placeholder="Mention color preferences, themes, or custom props..."
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
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">Ready to Plan the Perfect Birthday Party in Delhi NCR?</h2>
          <p className="text-lg mb-8 text-white/90 leading-relaxed max-w-2xl mx-auto">
            Book our professional local styling team today. Let\'s design an birthday setup that wows your guests and leaves lasting memories.
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
