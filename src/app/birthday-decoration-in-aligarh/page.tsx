import Link from 'next/link';
import Image from 'next/image';
import { FaWhatsapp, FaCalendarAlt, FaCheckCircle, FaGift, FaBirthdayCake, FaStar, FaPhoneAlt } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AligarhBirthdayFaqAccordion, { FaqItem } from './AligarhBirthdayFaqAccordion';

const faqItems: FaqItem[] = [
  {
    question: 'How does pricing work for birthday decoration in Aligarh with Eventkro?',
    answer: 'Eventkro operates on a requirement-based pricing model rather than fixed packages. The cost is determined by your specific preferences: venue type (home, terrace, lawn, or hall), balloon styling scale, backdrop frame choice, lighting, and optional thematic props. After you share your requirements, we discuss the details and provide a transparent, customized quote aligned with your celebration budget.'
  },
  {
    question: 'Which areas do you serve for birthday decorations around Aligarh?',
    answer: 'We coordinate birthday decorations across central Aligarh as well as confirmed nearby areas including Khair, Gabhana, and Jattari. Setup arrangements and timing are scheduled directly at your home or chosen celebration venue in these locations.'
  },
  {
    question: 'Can we book birthday decorations for home setups or private rooms?',
    answer: 'Yes. Many families in Aligarh choose intimate home celebrations in living rooms, drawing halls, or private bedrooms. We arrange space-conscious setups including balloon ring backdrops, cake-table styling, LED fairy lights, and themed foil accents tailored to your available room dimensions.'
  },
  {
    question: 'What themes are available for kids\' birthday parties in Aligarh?',
    answer: 'We discuss a wide range of popular kids\' party themes including Jungle Safari, Superhero, Princess Castle, Space Adventure, Cartoon themes, and pastel color palettes. The exact backdrop elements, character cutouts, and balloon color schemes can be customized based on your preferences and availability.'
  },
  {
    question: 'Can we arrange milestone adult birthdays or surprise party setups?',
    answer: 'Yes. For milestone celebrations such as 1st, 18th, 21st, 25th, or 50th birthdays, we can coordinate sophisticated chrome and pastel balloon arches, sequin shimmer walls, neon age lights, and terrace or lawn cabana setups. Surprise timings can be coordinated based on your party schedule.'
  },
  {
    question: 'How early should we discuss our birthday decoration requirements?',
    answer: 'We recommend contacting us at least 3 to 7 days before your celebration so we can discuss your theme preferences, confirm decorator availability, and finalize setup details. If you have an urgent or shorter-notice celebration, feel free to reach out to check availability.'
  }
];

export default function AligarhBirthdayPage() {
  return (
    <main className="bg-white min-h-screen">
      <Header />

      {/* Hero Banner Section */}
      <section className="relative min-h-[60vh] sm:min-h-[65vh] pt-24 sm:pt-28 pb-12 sm:pb-16 flex items-center justify-center text-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <Image
          src="/images/aligarh/birthday-decoration-in-aligarh-hero.webp"
          alt="Customized birthday decoration and theme setup in Aligarh"
          fill
          priority
          sizes="100vw"
          className="object-cover transition-transform duration-1000 z-0"
        />
        <div className="container mx-auto px-4 relative z-20 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight leading-tight">
            Birthday Decoration in Aligarh for Customized Celebrations
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-200 leading-relaxed">
            Personalized birthday decor, thematic balloon backdrops, kids party setups, and milestone celebrations for homes, terraces, and venues across Aligarh, Khair, Gabhana, and Jattari.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 rounded-lg shadow-lg font-semibold"
            >
              Request a Free Quote
            </Link>
            <a
              href="https://wa.me/917017520811?text=Hi%20Eventkro,%20I%20want%20to%20discuss%20birthday%20decoration%20in%20Aligarh."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 rounded-lg bg-green-600 hover:bg-green-700 text-white border-none flex items-center justify-center gap-2 shadow-lg font-semibold transition-colors"
            >
              <FaWhatsapp className="text-xl" /> WhatsApp Us
            </a>
            <Link
              href="/event-planner-in-aligarh"
              className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 rounded-lg bg-white/10 hover:bg-white/20 text-white border border-white/30 font-semibold transition-colors"
            >
              Aligarh Event Services
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Left/Main Content Column */}
            <div className="lg:col-span-2 space-y-12">

              {/* Introduction Section */}
              <div id="intro" className="prose max-w-none text-gray-700">
                <p className="text-lg leading-relaxed mb-4 font-medium text-gray-800">
                  Planning a birthday celebration in Aligarh? At Eventkro, we believe every birthday marks a personal milestone that deserves a distinct, memorable atmosphere. Whether you are hosting a joyful 1st birthday at home, crafting an imaginative fantasy world for your growing child, organizing an intimate terrace surprise, or styling a grand milestone celebration in a banquet hall, we provide customized, requirement-based birthday decoration.
                </p>
                <p className="leading-relaxed mb-6">
                  Instead of enforcing rigid pre-set bundles or standardized packages, we begin by listening to what you envision. We discuss your available space, preferred color schemes, backdrop choices, lighting preferences, and overall budget. Through our local coordination network in Aligarh, Khair, Gabhana, and Jattari, we connect your requirements with reliable decorators so your family can focus on celebrating the special day together.
                </p>
                <div className="mb-8">
                  <Link
                    href="/contact"
                    className="btn-primary inline-block text-center px-6 py-2.5 rounded-lg shadow-md font-semibold bg-[#ff5722] hover:bg-[#e64a19] text-white"
                  >
                    Discuss Your Birthday Decor Requirements
                  </Link>
                </div>
              </div>

              {/* Kids Birthday Setups Section */}
              <div id="kids-decor" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Kids' Themed Birthday Party Styling
                </h2>
                <div className="h-64 sm:h-72 relative rounded-xl overflow-hidden mb-6 shadow-sm not-prose">
                  <Image
                    src="/images/aligarh/kids-birthday-decoration-aligarh.webp"
                    alt="Themed balloon decoration and backdrop styling for kids birthday party"
                    fill
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover"
                  />
                </div>
                <p className="leading-relaxed mb-4">
                  For young children, birthdays are moments of unbridled excitement, curiosity, and wonder. Designing an engaging party backdrop brings their imagination into the room and makes photo memories that last a lifetime. We help parents across Aligarh tailor setups around popular childhood themes and color palettes:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose mb-6">
                  <div className="p-4 bg-orange-50/60 rounded-xl border border-orange-100">
                    <h4 className="font-bold text-gray-900 mb-1">Jungle &amp; Safari Adventures</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Lush forest green, chrome gold, and pastel balloon arrangements paired with animal character accents and tropical leaf cutouts.
                    </p>
                  </div>
                  <div className="p-4 bg-orange-50/60 rounded-xl border border-orange-100">
                    <h4 className="font-bold text-gray-900 mb-1">Superhero &amp; Action Themes</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Dynamic primary color balloon clouds, city silhouette backdrops, and action-inspired emblems for energetic young fans.
                    </p>
                  </div>
                  <div className="p-4 bg-orange-50/60 rounded-xl border border-orange-100">
                    <h4 className="font-bold text-gray-900 mb-1">Princess Castle &amp; Fairytale</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Soft pastel pink, lavender, and sparkling silver tones with castle backdrop designs, fairy lighting, and delicate ribbon accents.
                    </p>
                  </div>
                  <div className="p-4 bg-orange-50/60 rounded-xl border border-orange-100">
                    <h4 className="font-bold text-gray-900 mb-1">Space, Cartoon &amp; Pastel Dreams</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Deep celestial navy with star foils, whimsical cartoon color arches, or contemporary matte pastel rainbows for toddler 1st and 2nd birthdays.
                    </p>
                  </div>
                </div>
                <p className="leading-relaxed">
                  Depending on your venue constraints, kid setups can include decorative archways, customized child name cutouts, themed cake plinths, and designated photo spots where guests and children can pose comfortably.
                </p>
              </div>

              {/* Adult and Milestone Birthday Styling */}
              <div id="adult-decor" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Adult &amp; Milestone Birthday Celebrations
                </h2>
                <div className="h-64 sm:h-72 relative rounded-xl overflow-hidden mb-6 shadow-sm not-prose">
                  <Image
                    src="/images/aligarh/adult-birthday-decoration-aligarh.webp"
                    alt="Elegant balloon arch and neon backdrop setup for milestone adult birthday celebration"
                    fill
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover"
                  />
                </div>
                <p className="leading-relaxed mb-4">
                  Celebrating landmark adult birthdays—from 18th and 21st milestones to 30th, 40th, 50th, or 60th jubilees—calls for refined aesthetics rather than character motifs. We coordinate elegant, mature decor setups tailored for living rooms, private terraces, or celebration halls:
                </p>
                <ul className="space-y-2 mb-4">
                  <li><strong>Modern Color Palettes:</strong> Chrome rose gold with matte white, black and champagne gold, navy with silver accents, or muted sage and beige tones.</li>
                  <li><strong>Illuminated Neon Accents:</strong> Warm white or golden neon signs reading &ldquo;Happy Birthday&rdquo; or custom milestone ages that provide a captivating ambient glow.</li>
                  <li><strong>Sequin &amp; Shimmer Walls:</strong> Reflective backdrop panels that catch ambient room light and serve as an eye-catching focal area for toasts and photographs.</li>
                  <li><strong>Organic Balloon Waves:</strong> Multi-sized balloon clusters sweeping gracefully across circular ring frames, arch panels, or cake tables.</li>
                </ul>
                <p className="leading-relaxed">
                  Whether you are planning a surprise gathering for a partner, organizing a family dinner for a parent, or hosting close friends, our team coordinates the styling elements to match the mood you desire.
                </p>
              </div>

              {/* Home & Private Space Decoration */}
              <div id="home-decor" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Home &amp; Private Space Birthday Decoration
                </h2>
                <div className="h-64 sm:h-72 relative rounded-xl overflow-hidden mb-6 shadow-sm not-prose">
                  <Image
                    src="/images/aligarh/home-birthday-decoration-aligarh.webp"
                    alt="Cozy home balloon decoration setup for living room birthday cake cutting"
                    fill
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover"
                  />
                </div>
                <p className="leading-relaxed mb-4">
                  Celebrating at home is a cherished tradition for many families across Aligarh. Intimate living room gatherings allow close relatives and friends to share laughter and celebrate without the formality of commercial venues. We adapt decoration layouts to fit residential spaces smoothly:
                </p>
                <div className="space-y-4 not-prose mb-6">
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-1">Space-Conscious Living Room Layouts</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Backdrop setups designed to preserve room circulation, utilizing free-standing metal frames, doorway balloon garlands, and focused cake-cutting focal points.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-1">Surprise Room Makeovers</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Arranging ceiling balloon clusters with curled ribbons, bedside balloon bouquets, photo bunting, and soft ambient fairy lights coordinated during surprise planning windows.
                    </p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-1">Space-Conscious Decoration Planning</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Local decorators discuss room dimensions and preferred placement with you before setup to ensure backdrops, stands, and balloon arrangements fit comfortably within your available space.
                    </p>
                  </div>
                </div>
              </div>

              {/* Lawn & Celebration Venue Setups */}
              <div id="venue-decor" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Lawn, Terrace &amp; Celebration Venue Decoration
                </h2>
                <p className="leading-relaxed mb-4">
                  For larger family gatherings, outdoor birthday parties, or hall events, decorations need scale and stability to stand out across broader sightlines:
                </p>
                <ul className="space-y-2 mb-4">
                  <li><strong>Terrace &amp; Rooftop Styling:</strong> Cozy canopy tents with sheer drapes, cascading warm fairy lights, floor cushions, and weighted backdrop stands suitable for open-air breezes.</li>
                  <li><strong>Lawn &amp; Garden Setups:</strong> Expansive organic balloon arches, entrance welcome signage, marquee number lights, and garden pathway illumination for evening parties.</li>
                  <li><strong>Banquet &amp; Party Hall Backdrops:</strong> Structured stage styling with customized backdrop boards, balloon garlands, side plinths for cake placement, and integrated warm spotlighting.</li>
                </ul>
                <p className="leading-relaxed">
                  If you have already reserved a venue or party hall in Aligarh, Khair, Gabhana, or Jattari, our coordinators can review the hall dimensions and venue policies with you to design a setup that integrates seamlessly.
                </p>
              </div>

              {/* Props, Thematic Elements & Cake Table */}
              <div id="props-and-styling" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Backdrop Frames, Cake Plinths &amp; Thematic Accents
                </h2>
                <p className="leading-relaxed mb-4">
                  The heart of any birthday setup is the cake-cutting focal point. Depending on the theme and package scope you discuss with us, a variety of backdrop frames and decorative rental props can be arranged through our vendor network:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose mb-6">
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-1">Circular Ring &amp; Arch Frames</h4>
                    <p className="text-gray-600 text-sm">Versatile metal or wooden ring structures that support full or semi-organic balloon arches and floral touches.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-1">Themed Backdrop Panels</h4>
                    <p className="text-gray-600 text-sm">Multi-panel wooden backdrops in pastel or custom colors, suitable for personalized vinyl lettering and acrylic cutouts.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-1">Cylindrical Cake Plinths</h4>
                    <p className="text-gray-600 text-sm">Matching cylindrical cake stands at varying heights to display the cake, cupcakes, and party treats elegantly.</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <h4 className="font-bold text-gray-900 mb-1">LED Marquee Age Numbers</h4>
                    <p className="text-gray-600 text-sm">Illuminated marquee numbers (such as 1, 18, 25, or 50) that add an impressive photographic highlight to the stage.</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 italic">
                  Note: Specific rental props, panel colors, neon signs, and marquee numbers are coordinated based on local vendor availability and your chosen setup requirements.
                </p>
              </div>

              {/* 4-Step Booking Workflow */}
              <div id="booking-process" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Our Simple 4-Step Birthday Booking Process
                </h2>
                <p className="leading-relaxed mb-6">
                  Coordinating your celebration decor should be straightforward and enjoyable. Here is how our requirement-based booking flow works:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 not-prose mb-8">
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 relative">
                    <span className="w-9 h-9 rounded-full bg-[#ff5722] text-white flex items-center justify-center font-bold text-sm mb-3">1</span>
                    <h4 className="font-bold text-gray-900 text-base mb-1">Share Your Requirements</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Reach out via WhatsApp or our contact form with your celebration date, venue type (home, terrace, hall), locality, and any preferred theme or color palette.
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 relative">
                    <span className="w-9 h-9 rounded-full bg-[#ff5722] text-white flex items-center justify-center font-bold text-sm mb-3">2</span>
                    <h4 className="font-bold text-gray-900 text-base mb-1">Discuss Details &amp; Custom Quote</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Our coordination team discusses design options, shares visual references, and provides a clear, customized quotation matching your specific scope and budget.
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 relative">
                    <span className="w-9 h-9 rounded-full bg-[#ff5722] text-white flex items-center justify-center font-bold text-sm mb-3">3</span>
                    <h4 className="font-bold text-gray-900 text-base mb-1">Confirm Your Date Slot</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Once you approve the design and quote, confirm the booking with a token deposit so we can assign local decorators and reserve necessary props for your date.
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-xl border border-gray-100 relative">
                    <span className="w-9 h-9 rounded-full bg-[#ff5722] text-white flex items-center justify-center font-bold text-sm mb-3">4</span>
                    <h4 className="font-bold text-gray-900 text-base mb-1">On-Site Setup &amp; Celebration</h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      The decoration team arrives at your venue at the agreed time, installs the backdrop, coordinates lighting checks, and hands over a finished setup for your celebration.
                    </p>
                  </div>
                </div>
              </div>

              {/* Areas We Serve */}
              <div id="service-areas" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Areas We Serve: Aligarh, Khair, Gabhana &amp; Jattari
                </h2>
                <p className="leading-relaxed mb-4">
                  Eventkro coordinates on-site birthday decoration across central Aligarh as well as confirmed nearby regional towns:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 not-prose mb-6">
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
                    <h4 className="font-bold text-gray-900 text-lg mb-1">Khair</h4>
                    <p className="text-gray-600 text-xs">Home birthday decor, kids themes &amp; outdoor lawn styling</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
                    <h4 className="font-bold text-gray-900 text-lg mb-1">Gabhana</h4>
                    <p className="text-gray-600 text-xs">Milestone celebrations, terrace setups &amp; balloon arches</p>
                  </div>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
                    <h4 className="font-bold text-gray-900 text-lg mb-1">Jattari</h4>
                    <p className="text-gray-600 text-xs">Family celebrations, hall backdrops &amp; surprise party decor</p>
                  </div>
                </div>
                <p className="leading-relaxed mb-4">
                  Whether your celebration is hosted in central Aligarh or in Khair, Gabhana, or Jattari, our local coordination team organizes transport and decorator timing directly to your location.
                </p>
                <p className="leading-relaxed">
                  If you are also organizing larger celebrations such as family weddings or multi-service community events in the city, explore our dedicated <Link href="/event-planner-in-aligarh" className="text-[#ff5722] hover:underline font-semibold">Event Planner in Aligarh</Link> and <Link href="/wedding-planner-in-aligarh" className="text-[#ff5722] hover:underline font-semibold">Wedding Planner in Aligarh</Link> services, or view our wider <Link href="/services" className="text-[#ff5722] hover:underline font-semibold">services overview</Link>.
                </p>
              </div>

              {/* Why Choose Eventkro */}
              <div id="why-choose" className="prose max-w-none text-gray-700">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100">
                  Why Choose Eventkro for Aligarh Birthday Celebrations
                </h2>
                <p className="leading-relaxed mb-4">
                  Choosing Eventkro helps you create a captivating celebration atmosphere without the stress of managing local decor logistics alone:
                </p>
                <div className="space-y-4 not-prose mb-6">
                  <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <FaCheckCircle className="text-[#ff5722] text-xl shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-base mb-1">Requirement-Based Personalization</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        We don&apos;t force rigid packages. Every balloon garland, backdrop, and color palette is tailored to your taste, available space, and budget.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <FaCheckCircle className="text-[#ff5722] text-xl shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-base mb-1">Clear Consultation &amp; Transparent Quotes</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        You know exactly what elements are included before confirming. We discuss your needs openly and provide a customized quote tailored to your scope.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <FaCheckCircle className="text-[#ff5722] text-xl shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-base mb-1">Coordinated Planning Support</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        From the initial inquiry through setup planning, our team can help coordinate questions, requirements, and next steps.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <FaCheckCircle className="text-[#ff5722] text-xl shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-900 text-base mb-1">Adaptable to Diverse Venues</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Whether decorating an apartment drawing room, an open terrace under the stars, or an expansive banquet hall, we adapt the setup structure to suit the venue safely.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div id="faq" className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900 pb-2 border-b-2 border-gray-100">
                  Frequently Asked Questions
                </h2>
                <AligarhBirthdayFaqAccordion items={faqItems} />
              </div>

            </div>

            {/* Right/Sidebar Sticky Form & Links */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">

                {/* Quote Box */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Request a Birthday Quote</h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    Share your celebration date, preferred theme or balloon colors, and venue type. We will discuss your vision and prepare a customized quote.
                  </p>
                  <Link
                    href="/contact"
                    className="btn-primary w-full text-center block py-3 rounded-lg shadow-lg font-semibold mb-4"
                  >
                    Discuss Your Birthday Setup
                  </Link>
                  <a
                    href="https://wa.me/917017520811?text=Hi%20Eventkro,%20I%20want%20to%20discuss%20birthday%20decoration%20in%20Aligarh."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-2.5 rounded-lg bg-green-600 hover:bg-green-700 text-white flex items-center justify-center gap-2 text-sm font-semibold transition-colors mb-4 shadow-sm"
                  >
                    <FaWhatsapp className="text-lg" /> Chat on WhatsApp
                  </a>
                  <div className="text-center text-gray-500 text-xs border-t border-gray-200 pt-4">
                    Or call our coordinators directly: <br />
                    <strong className="text-gray-800 text-sm font-semibold block mt-1">+91 7017520811</strong>
                    <span className="text-gray-600 text-xs block">+91 9869950233</span>
                  </div>
                </div>

                {/* Related Aligarh Services */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Aligarh Event Services</h3>
                  <div className="flex flex-col gap-2">
                    <Link
                      href="/event-planner-in-aligarh"
                      className="text-gray-600 hover:text-[#ff5722] text-sm py-2 border-b border-gray-200 transition-colors"
                    >
                      Event Planner in Aligarh →
                    </Link>
                    <Link
                      href="/wedding-planner-in-aligarh"
                      className="text-gray-600 hover:text-[#ff5722] text-sm py-2 border-b border-gray-200 transition-colors"
                    >
                      Wedding Planner in Aligarh →
                    </Link>
                    <Link
                      href="/services"
                      className="text-gray-600 hover:text-[#ff5722] text-sm py-2 transition-colors"
                    >
                      All Eventkro Services →
                    </Link>
                  </div>
                </div>

                {/* Regional Cities Box */}
                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Explore Regional Cities</h3>
                  <div className="flex flex-col gap-2">
                    <Link
                      href="/event-planner-in-agra"
                      className="text-gray-600 hover:text-[#ff5722] text-sm py-2 border-b border-gray-200 transition-colors"
                    >
                      Event Planner in Agra →
                    </Link>
                    <Link
                      href="/event-planner-in-mathura"
                      className="text-gray-600 hover:text-[#ff5722] text-sm py-2 border-b border-gray-200 transition-colors"
                    >
                      Event Planner in Mathura →
                    </Link>
                    <Link
                      href="/event-planner-in-firozabad"
                      className="text-gray-600 hover:text-[#ff5722] text-sm py-2 border-b border-gray-200 transition-colors"
                    >
                      Event Planner in Firozabad →
                    </Link>
                    <Link
                      href="/event-planner-in-shikohabad"
                      className="text-gray-600 hover:text-[#ff5722] text-sm py-2 transition-colors"
                    >
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
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Plan Your Birthday Celebration in Aligarh?
          </h2>
          <p className="text-lg mb-8 text-white/95 leading-relaxed">
            From playful kids&apos; themes to elegant milestone backdrops, Eventkro helps coordinate birthday decorations tailored to your space and budget across Aligarh, Khair, Gabhana, and Jattari. Contact us today for a custom quote.
          </p>
          <Link
            href="/contact"
            className="bg-white text-[#ff5722] hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md inline-block"
          >
            Discuss Your Birthday Setup with Eventkro
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
