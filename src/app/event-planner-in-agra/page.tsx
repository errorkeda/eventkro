'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaStar, FaChevronDown, FaWhatsapp } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const faqItems = [
  {
    question: 'How much does an event planner in Agra cost?',
    answer: 'The cost of hiring an event planner in Agra varies depending on the event type, scale, guest count, and decoration requirements. Eventkro offers flexible and customizable packages tailored to your budget. Contact us for a free consultation and a detailed, personalized quote.'
  },
  {
    question: 'What types of events does Eventkro plan in Agra?',
    answer: 'We plan and manage a wide range of events in Agra, including themed birthday parties, weddings, engagement ceremonies, anniversaries, romantic proposals, baby showers, and corporate events.'
  },
  {
    question: 'Can Eventkro arrange birthday decorations in Agra?',
    answer: 'Yes! We specialize in custom birthday decorations in Agra. Our team sets up premium balloon arches, backdrops, themed lighting, and cake tables at your home, restaurant, banquet hall, or private venue.'
  },
  {
    question: 'Can I book wedding or engagement event planning?',
    answer: 'Absolutely. We offer complete wedding and engagement planning services in Agra, covering floral stage decorations, mandap setup, guest hospitality, catering, and pre-wedding ceremonies like Haldi, Mehendi, and Roka.'
  },
  {
    question: 'How early should I book an event planner?',
    answer: 'For large celebrations like weddings and corporate events, we recommend booking 3 to 6 months in advance. For themed birthdays, surprise proposals, or balloon decorations, booking 1 to 2 weeks ahead is usually sufficient.'
  },
  {
    question: 'Does Eventkro provide decoration and setup services?',
    answer: 'Yes, Eventkro provides full-service decoration and setup in Agra. We design and install custom balloon decor, fresh flower arrangements, lighting structures, and audio-visual equipment, managing everything from setup to post-event cleanup.'
  }
];

const venues = [
  {
    name: 'Taj View Gardens',
    description: 'An elite outdoor lawn offering direct views of the Taj Mahal, providing a magical setting for weddings and premium receptions.',
    capacity: '100-600 guests',
    features: ['Direct Taj view', 'Premium catering setups', 'Luxury bridal suites', 'Valet parking'],
    rating: 4.9,
    image: '/images/venue-heritage.jpeg'
  },
  {
    name: 'Heritage Mughal Palace',
    description: 'A historic venue reflecting royal Mughal architecture, ideal for traditional wedding ceremonies, Tilak functions, and cultural events.',
    capacity: '200-1000 guests',
    features: ['Mughal architecture', 'Intricate carvings', 'Indoor royal halls', 'Spacious green lawns'],
    rating: 4.8,
    image: '/images/venue-krishna-hall.jpeg'
  },
  {
    name: 'Agra Convention Center',
    description: 'A state-of-the-art corporate event venue equipped with high-tech audio-visual routing, spacious conference rooms, and business lounges.',
    capacity: '500-2000 guests',
    features: ['Advanced AV systems', 'Multiple conference layout boards', 'Executive catering', 'Central location'],
    rating: 4.7,
    image: '/images/venue-convention.jpg'
  }
];

export default function AgraEventPlannerPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <main className="bg-white min-h-screen">
      <Header />

      {/* Hero Banner Section */}
      <section className="relative min-h-[65vh] pt-20 pb-10 flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <Image 
          src="/images/hero-1.jpeg"
          alt="Premium event planner in Agra for weddings and social events"
          fill
          priority
          sizes="100vw"
          className="object-cover transition-transform duration-1000 z-0"
        />
        <div className="container mx-auto px-4 relative z-20 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight leading-tight">
            Event Planner in Agra for Memorable Celebrations & Events
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-200">
            Professional wedding planning, stunning decorations, and corporate event management in Agra Mandal. Let us handle the details while you enjoy your milestone celebrations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 rounded-lg shadow-lg font-semibold">
              Book an Event
            </Link>
            <a 
              href="https://wa.me/917017520811?text=Hi%20Eventkro,%20I%20want%20to%20book%20an%20event%20in%20Agra." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white border-none flex items-center justify-center gap-2 shadow-lg font-semibold transition-colors"
            >
              <FaWhatsapp className="text-xl" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left/Main Content Column (1500+ Words) */}
            <div className="lg:col-span-2 space-y-12">
              
              {/* Introduction Section */}
              <div id="intro" className="prose max-w-none text-gray-700">
                <p className="text-lg leading-relaxed mb-4 font-medium text-gray-800">
                  Are you planning a special celebration in Agra? Whether it’s a grand wedding near the Taj Mahal organized by a professional <Link href="/wedding-planner-in-agra" className="text-[#ff5722] hover:underline font-semibold">wedding planner in Agra</Link>, an intimate theme birthday party, or a professional corporate gathering, Eventkro is here to bring your vision to life. As a premier event planner in Agra, we deliver end-to-end planning, stunning decorations, and seamless coordination so you can relax and enjoy your memorable moments.
                </p>
                <p className="leading-relaxed mb-6">
                  We handle a wide range of private and corporate events, including <strong>birthdays, weddings, engagements, anniversaries, proposals, and corporate meets</strong>. From finding the perfect venue to designing custom setups and coordinating with local suppliers, we ensure premium quality and stress-free execution across all major areas of Agra.
                </p>
                <div className="mb-8">
                  <Link href="/contact" className="btn-primary inline-block text-center px-6 py-2.5 rounded-lg shadow-md font-semibold bg-[#ff5722] hover:bg-[#e64a19] text-white">
                    Book Your Agra Event
                  </Link>
                </div>
              </div>

              {/* About Section */}
              <div id="about" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  About Eventkro: Agra’s Premium Event Management Team
                </h2>
                <p className="leading-relaxed mb-4">
                  Welcome to Eventkro, your ultimate partner in crafting unforgettable experiences. Known as the leading <strong>event planner in agra</strong>, we combine local insights with international planning standards to execute events that leave a lasting impression. Our history is rooted in a passion for design, culinary excellence, and logistical precision. We believe that every occasion—whether a grand wedding reception overlooking the Taj Mahal or an intimate milestone birthday party—deserves a dedicated team that coordinates every small details with absolute perfection.
                </p>
                <p className="leading-relaxed mb-4">
                  Our team consists of creative visual decorators who specialize in transforming spaces using fresh flowers, custom lighting structures, and organic balloon designs. We collaborate with the most trusted suppliers, gourmet cooks, professional sound technicians, and wedding photographers in Agra. By keeping our processes organized and transparent, we eliminate the stress commonly associated with planning and executing events. Families, corporate houses, and local organizations choose Eventkro because we promise and deliver reliability, creativity, and elegance in equal measure.
                </p>
                <p className="leading-relaxed">
                  From selecting the perfect venue along Fatehabad Road to managing post-event cleanups, we stay on-site from start to finish. Our commitment to client satisfaction has allowed us to grow from a local decoration company into Agra Mandal’s go-to destination for high-consequence event management. We invite you to experience the Eventkro standard of hospitality and design.
                </p>
              </div>

              {/* Event Planning Services Section */}
              <div id="services" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Event Planning Services in Agra
                </h2>
                <p className="leading-relaxed mb-6">
                  At Eventkro, we offer a comprehensive suite of services designed to handle every phase of your event lifecycle. Our methodology is simple: we listen to your vision, outline a structured budget, create visual mood boards, coordinate with premium vendors, handle logistics, and manage on-site setup and teardown. This comprehensive support structure ensures that your event remains aligned with your expectations while freeing you to enjoy the company of your guests.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose mb-8">
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Creative Visual Decoration</h3>
                    <p className="text-gray-600 text-sm">Theme-based stage setups, floral entryways, LED displays, and custom balloon installations (including organic arches, walls, and backdrops).</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Logistics & Venue Booking</h3>
                    <p className="text-gray-600 text-sm">Securing premium heritage properties, banquet halls, and outdoor lawns, along with complete timeline management and guest welcoming services.</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Gourmet Catering Coordination</h3>
                    <p className="text-gray-600 text-sm">Designing customizable multi-cuisine menus, coordinating live counters, arranging premium tableware, and managing waitstaff.</p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Audio-Visual & Entertainment</h3>
                    <p className="text-gray-600 text-sm">Setting up professional sound checks, coordinate stage lighting, booking local DJs, dancers, dhol artists, and traditional performers.</p>
                  </div>
                </div>

                {/* VISUAL SERVICE CARDS GRID */}
                <h3 className="text-2xl font-bold text-gray-900 mb-6 not-prose">Our Core Event Categories</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose mb-12">
                  {/* Card 1: Birthday */}
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                    <div>
                      <div className="h-52 relative">
                        <Image
                          src="/images/birthday.jpg"
                          alt="Birthday event planning and balloon decoration in Agra"
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Birthday Event Planning</h4>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          Turn birthday parties into magical celebrations. We offer custom-themed balloon arches, photo backdrop walls, cake table layouts, and child-friendly entertainment setups.
                        </p>
                      </div>
                    </div>
                    <div className="px-6 pb-6">
                      <Link href="/services/birthday-balloon-decoration/agra" className="text-[#ff5722] hover:text-[#e64a19] text-sm font-semibold inline-flex items-center gap-1 group">
                        Explore Birthday Services <span className="transform transition-transform group-hover:translate-x-1">→</span>
                      </Link>
                    </div>
                  </div>

                  {/* Card 2: Wedding */}
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                    <div>
                      <div className="h-52 relative">
                        <Image
                          src="/images/engegment.jpg"
                          alt="Elite wedding and engagement planning in Agra"
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Wedding & Engagement Planning</h4>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          Breathtaking mandaps, royal domes, elegant entry paths, and seamless coordination for Haldi, Mehendi, Roka, and main wedding days reflecting Agra's heritage.
                        </p>
                      </div>
                    </div>
                    <div className="px-6 pb-6">
                      <Link href="/wedding-planner-in-agra" className="text-[#ff5722] hover:text-[#e64a19] text-sm font-semibold inline-flex items-center gap-1 group">
                        Explore Wedding Services <span className="transform transition-transform group-hover:translate-x-1">→</span>
                      </Link>
                    </div>
                  </div>

                  {/* Card 3: Anniversary */}
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                    <div>
                      <div className="h-52 relative">
                        <Image
                          src="/images/anniversary.jpg"
                          alt="Anniversary and proposal decoration services in Agra"
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Anniversary & Proposal Events</h4>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          Celebrate romance with custom surprise decorations, candlelight dinner setups, private proposal decoration, and creative car boot arrangements.
                        </p>
                      </div>
                    </div>
                    <div className="px-6 pb-6">
                      <Link href="/proposal-decoration-in-agra" className="text-[#ff5722] hover:text-[#e64a19] text-sm font-semibold inline-flex items-center gap-1 group">
                        Explore Proposal Services <span className="transform transition-transform group-hover:translate-x-1">→</span>
                      </Link>
                    </div>
                  </div>

                  {/* Card 4: Corporate */}
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                    <div>
                      <div className="h-52 relative">
                        <Image
                          src="/images/corporate.jpg"
                          alt="Professional corporate event management in Agra"
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">Corporate Events</h4>
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                          Execute brand conferences, dealer meets, product launches, and annual awards. We provide state-of-the-art stage audio-visual setups, registration desks, and premium catering.
                        </p>
                      </div>
                    </div>
                    <div className="px-6 pb-6">
                      <Link href="/contact" className="text-[#ff5722] hover:text-[#e64a19] text-sm font-semibold inline-flex items-center gap-1 group">
                        Book Corporate Events <span className="transform transition-transform group-hover:translate-x-1">→</span>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Service Categories Subsections */}
                <div className="space-y-8 mt-8 not-prose">
                  {/* Birthday Planning Section */}
                  <div id="birthday" className="p-6 sm:p-8 bg-gray-50/50 rounded-2xl border border-gray-100/80 hover:border-gray-200 transition-colors duration-300">
                    <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <span className="w-2 h-7 bg-[#ff5722] rounded-full inline-block"></span>
                      Birthday Event Planning Details
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                      Birthdays represent significant milestones, and celebrating them with joy, laughter, and high-impact design is our specialty. At Eventkro, we plan themed birthday parties for children and adults alike. We work with you to choose a theme that reflects your child's favorite characters or a sophisticated adult palette (such as rose gold, neon, or classic black and gold). Our decorators are experts in building custom photo backdrops, cake table layouts, and interactive activity zones.
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                      Our services feature premium <Link href="/services/birthday-balloon-decoration/agra" className="text-[#ff5722] hover:underline font-semibold">birthday decoration in Agra</Link>, including organic balloon arches, wall panels, ceiling grids, and customized balloon bouquets. We use only premium quality latex and foil balloons, ensuring that your decorations stay inflated and fresh throughout the event. In addition to decorations, we arrange entertainment activities such as magic shows, puppet performances, game hosts, tattoo artists, and custom photo booths to keep your guests fully engaged.
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      Whether you are planning a 1st birthday party, a sweet sixteen, or a golden 50th celebration, Eventkro designs a package that matches your requirements. We prepare the venue before guests arrive and dismantle the decor post-event, leaving you with nothing to worry about.
                    </p>
                  </div>

                  {/* Wedding Planning Section */}
                  <div id="wedding" className="p-6 sm:p-8 bg-gray-50/50 rounded-2xl border border-gray-100/80 hover:border-gray-200 transition-colors duration-300">
                    <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <span className="w-2 h-7 bg-[#ff5722] rounded-full inline-block"></span>
                      Wedding & Engagement Planning Details
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                      A wedding is more than just a party; it is the beginning of a lifelong journey and a sacred union of families. Planning a wedding in Agra involves organizing multiple pre-wedding, wedding-day, and post-wedding functions, each requiring a distinct theme, design, and atmosphere. As your dedicated <Link href="/wedding-planner-in-agra" className="text-[#ff5722] hover:underline font-semibold">wedding planner in Agra</Link>, Eventkro designs weddings that blend rich Mughal heritage with contemporary styling. We cooperate with top-rated hotels, palaces, and lawns to secure locations that offer the most romantic backdrops for your photography.
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                      We handle the entire planning process, decoration, and venue coordination for all ceremonies:
                    </p>
                    <ul className="space-y-3 mb-4 list-disc pl-5 text-gray-600 text-sm sm:text-base leading-relaxed">
                      <li><strong>Roka / Sagai:</strong> Traditional ring exchange functions featuring elegant floral arrangements, guest seating setups, and customized welcome signages.</li>
                      <li><strong>Haldi Ceremony:</strong> Vibrant yellow-themed events styled with fresh marigold curtains, traditional swings (jhulas), client seating platforms, and lively dhol music.</li>
                      <li><strong>Mehendi & Sangeet:</strong> Multi-colored canopy decorations, stage setups for dance performances, professional sound routing, and comfortable seating layouts.</li>
                      <li><strong>Main Wedding Day:</strong> Breathtaking mandap setups (royal dome, floral structures, glass pillars), pathway lighting, welcome gates, and royal bride/groom entries.</li>
                    </ul>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      Our coordinators manage the wedding timeline dynamically, ensuring that the transition from the welcome ceremony to the Var Mala, dinner service, phere, and bidai proceeds on schedule. We also assist with guest logistics, booking accommodations, and coordinating makeup artists and photographers.
                    </p>
                  </div>

                  {/* Anniversary & Proposal Section */}
                  <div id="anniversary-proposal" className="p-6 sm:p-8 bg-gray-50/50 rounded-2xl border border-gray-100/80 hover:border-gray-200 transition-colors duration-300">
                    <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <span className="w-2 h-7 bg-[#ff5722] rounded-full inline-block"></span>
                      Anniversary & Proposal Event Details
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                      Celebrating milestones and romance requires a delicate touch and a setting that inspires. Eventkro provides custom decoration and event planning services in Agra for proposals, anniversaries, and romantic surprises. Whether you are looking for an intimate candlelight dinner decoration, an outdoor fairy-light setup, or a grand anniversary party in a banquet hall, we design packages tailored to your romantic theme.
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      Our creative team specializes in surprise setups, including premium <Link href="/proposal-decoration-in-agra" className="text-[#ff5722] hover:underline font-semibold">proposal decoration in Agra</Link> for romantic declarations, and surprise <Link href="/car-boot-decoration-in-agra" className="text-[#ff5722] hover:underline font-semibold">car boot decoration in Agra</Link> for birthdays or anniversaries. We combine premium red and gold latex balloons, custom neon signs, rose petals, led letter board lights, and customized music routing to make the moment truly magical and photo-ready.
                    </p>
                  </div>

                  {/* Corporate Events Section */}
                  <div id="corporate" className="p-6 sm:p-8 bg-gray-50/50 rounded-2xl border border-gray-100/80 hover:border-gray-200 transition-colors duration-300">
                    <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      <span className="w-2 h-7 bg-[#ff5722] rounded-full inline-block"></span>
                      Corporate Event Management Details
                    </h4>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                      Corporate events demand absolute precision, professional styling, and reliable timeline management. As businesses in Agra grow, they require sophisticated spaces and coordinators to host dealer meets, product launches, branch openings, conferences, and annual award functions. Eventkro provides comprehensive corporate event planning services that align with your brand guidelines and business objectives. We manage the setup of executive stages, podiums, registration desks, and backdrop banners.
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4">
                      We integrate advanced audio-visual routing to ensure clear communication during presentations and speeches. Our team sets up premium sound systems, microphones, projectors, and LED wall displays. We also handle the catering for corporate gatherings, offering customizable lunch boxes, high-tea packages, and buffet spreads designed to impress your stakeholders.
                    </p>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      With our local knowledge of hotels and business centers in Agra (such as Sanjay Place and Fatehabad Road), we help you select the most convenient venue, manage guest registrations, and arrange professional hosts to coordinate the schedule. Trust Eventkro to execute your business event with the highest degree of professionalism.
                    </p>
                  </div>
                </div>
              </div>

              {/* Catering Services Section */}
              <div id="catering" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Bespoke Catering Services in Agra: A Culinary Experience
                </h2>
                <p className="leading-relaxed mb-6">
                  Food is the heart of any Indian celebration, and at Eventkro, we strive to make it a memorable experience. We collaborate with the best catering services in Agra to offer a wide array of cuisines prepared under strict hygiene standards. Whether you are hosting a traditional wedding feast or a corporate lunch, our menus are designed to delight your guests. We offer customizable options across North Indian, traditional Mughlai, South Indian, Chinese, and Continental cuisines.
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4 not-prose">Our Catering Highlights</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose mb-6">
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <strong className="text-gray-900 block mb-1 text-base">Live Food Counters</strong>
                    <span className="text-gray-600 text-sm">Interactive stations serving fresh chat, pasta, golgappas, tandoori starters, and sizzling beverages.</span>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <strong className="text-gray-900 block mb-1 text-base">Mughlai Specialties</strong>
                    <span className="text-gray-600 text-sm">Authentic biryanis, slow-cooked gravies, paneer tikka, and traditional breads reflecting Agra's culinary heritage.</span>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <strong className="text-gray-900 block mb-1 text-base">Dessert Spreads</strong>
                    <span className="text-gray-600 text-sm">Local Agra petha displays, hot jalebis with rabri, gulab jamuns, ice creams, and custom cakes.</span>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <strong className="text-gray-900 block mb-1 text-base">Professional Service</strong>
                    <span className="text-gray-600 text-sm">Uniformed servers, clean presentation tables, premium crockery, and swift hospitality.</span>
                  </div>
                </div>
                
                <p className="leading-relaxed">
                  We work closely with you during menu planning to accommodate dietary preferences (such as pure vegetarian or Jain food) and guest counts. Our team ensures that ingredients are fresh and presentations are visually appealing.
                </p>
              </div>

              {/* Decoration Services Section */}
              <div id="decor" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Decoration Services: Balloon, Floral, & Structural Design
                </h2>
                <p className="leading-relaxed mb-4">
                  The visual layout of a venue sets the tone for the entire event. At Eventkro, we take pride in our innovative decoration services in Agra. We design custom themes that transform standard halls and gardens into breathtaking settings. Our designers mix textures, colors, and lighting to match your event's mood. We specialize in both traditional floral setups and modern balloon styling.
                </p>
                <p className="leading-relaxed mb-4">
                  For social events, we offer professional <Link href="/services/balloon-decoration/agra" className="text-[#ff5722] hover:underline font-semibold">balloon decoration in Agra</Link>, designing custom backdrop walls, entrance arches, and table centerpieces. For weddings and rituals, we use fresh local and imported flowers to build arches, mandap domes, and aisle pathways. We also provide structural decorations such as carpets, stage platforms, ceiling drapes, and LED lighting grids that enhance the visual appeal of the venue.
                </p>
                <p className="leading-relaxed">
                  Every decoration is installed by our team before the event starts and removed promptly afterward, ensuring that the venue is returned in perfect condition. We ensure that our decorations are secure, clean, and photo-ready.
                </p>
              </div>

              {/* Why Choose Eventkro Section */}
              <div id="why-choose" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Why Choose Eventkro as Your Event Planner in Agra
                </h2>
                <p className="leading-relaxed mb-4">
                  Selecting the right coordinator is key to the success of your event. Eventkro offers a combination of experience, local insight, and professional dedication that sets us apart in the Agra Mandal region:
                </p>
                <ul className="space-y-3 mb-6">
                  <li><strong>Local Expertise:</strong> We understand the unique requirements of hosting events in Agra, including venue logistics, local permissions, and traditional customs.</li>
                  <li><strong>Flexible Packages:</strong> We offer customizable packages (Basic, Premium, and Elite) to fit different budgets and requirements without compromising on quality.</li>
                  <li><strong>Stress-Free Coordination:</strong> Our team handles the entire event workflow, from vendor management and timeline tracking to on-site coordination and post-event cleanup.</li>
                  <li><strong>Uncompromising Quality:</strong> We use high-grade materials, premium balloons, fresh flowers, and follow strict hygiene protocols for our catering services.</li>
                  <li><strong>Customer-Centric Approach:</strong> We keep you updated at every step, offering visual mockups and prompt consultations to ensure your event proceeds as planned.</li>
                </ul>
              </div>

              {/* Local Venues Section */}
              <div id="venues" className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 pb-2 border-b-2 border-gray-100">
                  Top Local Venues in Agra
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Selecting the right venue is the first step toward a successful event. Eventkro coordinates with the finest hotels, lawns, and banquet halls in Agra to find the perfect match for your celebration. For a complete list of venues and packages, explore our dedicated <Link href="/cities/agra" className="text-[#ff5722] hover:underline font-semibold">Agra city page</Link>.
                </p>
                <div className="space-y-6">
                  {venues.map((venue, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100 p-6 flex flex-col md:flex-row gap-6">
                      <div className="md:w-1/3 h-48 relative rounded-lg overflow-hidden bg-gray-100">
                        <Image
                          src={venue.image}
                          alt={`${venue.name} - Event venue in Agra`}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-2xl font-bold text-gray-900">{venue.name}</h3>
                            <div className="flex items-center bg-[#ff5722]/10 px-3 py-1 rounded-full text-sm font-semibold text-[#ff5722]">
                              <FaStar className="mr-1 text-xs" /> {venue.rating}
                            </div>
                          </div>
                          <p className="text-gray-600 text-sm mb-4 leading-relaxed">{venue.description}</p>
                          <div className="flex items-center text-gray-700 text-sm mb-4">
                            <FaCalendarAlt className="mr-2 text-[#ff5722]" /> Capacity: {venue.capacity}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {venue.features.map((f, idx) => (
                            <span key={idx} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-medium">{f}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ Section */}
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
                          className="w-full flex justify-between items-center px-6 py-4 bg-gray-50 hover:bg-gray-100/60 text-left font-bold text-gray-900 hover:text-[#ff5722] transition-colors"
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
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Request a Free Quote</h3>
                  <p className="text-gray-600 text-sm mb-6">Fill out our form or call us directly. We respond within 24 hours with a customized estimate.</p>
                  <Link href="/contact" className="btn-primary w-full text-center block py-3 rounded-lg shadow-lg font-semibold mb-4">
                    Book Event Planner
                  </Link>
                  <div className="text-center text-gray-500 text-xs">
                    Or call us: <br/>
                    <strong className="text-gray-800 text-sm font-semibold">+91 7017520811</strong>
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Explore Other Cities</h3>
                  <div className="flex flex-col gap-2">
                    <Link href="/event-planner-in-mathura" className="text-gray-600 hover:text-[#ff5722] text-sm py-2 border-b border-gray-200 transition-colors">
                      Event Planner in Mathura →
                    </Link>
                    <Link href="/event-planner-in-firozabad" className="text-gray-600 hover:text-[#ff5722] text-sm py-2 border-b border-gray-200 transition-colors">
                      Event Planner in Firozabad →
                    </Link>
                    <Link href="/event-planner-in-shikohabad" className="text-gray-600 hover:text-[#ff5722] text-sm py-2 transition-colors">
                      Event Planner in Shikohabad →
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Plan Your Perfect Event in Agra?</h2>
          <p className="text-lg mb-8 text-white/95 leading-relaxed">
            From intimate birthday balloon setups along Sanjay Place to grand royal weddings at Taj View Gardens, Eventkro handles everything with absolute perfection. Contact us now for a custom quote.
          </p>
          <Link href="/contact" className="bg-white text-[#ff5722] hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md">
            Plan Your Event with Eventkro
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
