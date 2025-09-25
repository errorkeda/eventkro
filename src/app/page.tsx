'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaCalendarCheck, FaChevronLeft, FaChevronRight, FaGift, FaSun, FaLeaf, FaCamera } from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

const heroSlides = [
  {
    id: 1,
    image: '/images/hero-slide-1.svg',
    title: 'Perfect Wedding Planning',
    subtitle: 'Create your dream wedding with our expert planning services',
    cta: 'Plan Your Wedding'
  },
  {
    id: 2,
    image: '/images/hero-slide-2.svg',
    title: 'Corporate Events Excellence',
    subtitle: 'Professional planning for conferences and corporate celebrations',
    cta: 'Book Corporate Event'
  },
  {
    id: 3,
    image: '/images/hero-slide-3.svg',
    title: 'Cultural Celebrations',
    subtitle: 'Thoughtfully planned cultural and religious ceremonies',
    cta: 'Explore Cultural Events'
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <main>
      <Header />

      {/* Hero Carousel Section */}
      <section className="relative h-[80vh] overflow-hidden">
        {/* Slides */}
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-transform duration-1000 ease-in-out ${index === currentSlide ? 'translate-x-0' :
                index < currentSlide ? '-translate-x-full' : 'translate-x-full'
              }`}
          >
            <div className="absolute inset-0 bg-black/50 z-10"></div>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${slide.image}')` }}
            ></div>
            <div className="container mx-auto px-4 relative z-20 h-full flex items-center">
              <div className="text-center text-white max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 animate-fade-in-delay">
                  {slide.subtitle}
                </p>
                <Link href="/contact" className="btn-primary text-lg animate-fade-in-delay-2">
                  {slide.cta}
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
        >
          <FaChevronLeft className="text-xl" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
        >
          <FaChevronRight className="text-xl" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-white' : 'bg-white/50'
                }`}
            />
          ))}
        </div>
      </section>

      {/* Event Cards (updated) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">We offer comprehensive event planning services tailored to your needs</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-12">
            {/* Roka / Engagement Ceremony */}
            <Link href="/contact" className="card text-center hover:-translate-y-2 block cursor-pointer p-6 bg-white rounded-lg shadow-sm">
              <div className="bg-[#ff5722]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCalendarCheck className="text-[#ff5722] text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Roka / Engagement Ceremony</h3>
              <p className="text-gray-600">Plan a beautiful and memorable start to your wedding journey.</p>
            </Link>

            {/* Tilak / Sagai */}
            <Link href="/contact" className="card text-center hover:-translate-y-2 block cursor-pointer p-6 bg-white rounded-lg shadow-sm">
              <div className="bg-[#ffc107]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaGift className="text-[#ffc107] text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Tilak / Sagai</h3>
              <p className="text-gray-600">Celebrate this auspicious pre-wedding ritual with perfect arrangements.</p>
            </Link>

            {/* Haldi Ceremony */}
            <Link href="/contact" className="card text-center hover:-translate-y-2 block cursor-pointer p-6 bg-white rounded-lg shadow-sm">
              <div className="bg-[#e91e63]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaSun className="text-[#e91e63] text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Haldi Ceremony</h3>
              <p className="text-gray-600">Bright and colorful Haldi ceremony setup with traditional vibes.</p>
            </Link>

            {/* Mehendi Ceremony */}
            <Link href="/contact" className="card text-center hover:-translate-y-2 block cursor-pointer p-6 bg-white rounded-lg shadow-sm">
              <div className="bg-[#4caf50]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaLeaf className="text-[#4caf50] text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Mehendi Ceremony</h3>
              <p className="text-gray-600">Traditional Mehendi event with music, décor, and celebrations.</p>
            </Link>

            {/* Pre-Wedding Photoshoot */}
            <Link href="/contact" className="card text-center hover:-translate-y-2 block cursor-pointer p-6 bg-white rounded-lg shadow-sm">
              <div className="bg-[#3f51b5]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaCamera className="text-[#3f51b5] text-3xl" />
              </div>
              <h3 className="text-xl font-bold mb-2">Pre-Wedding Photoshoot</h3>
              <p className="text-gray-600">Capture everlasting memories with our professional photoshoot services.</p>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Packages Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Our Most Popular Party Packages</h2>
          <p className="section-subtitle">
            You can customize everything to suit your needs. This package is just an overview
            of the services we offer to our customers and serves as a demo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Basic Package */}
            <div className="border rounded-xl shadow-sm p-8 text-center hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-blue-600">Basic</h3>
              <p className="text-gray-600 mb-4">Perfect for intimate gatherings</p>
              <p className="text-3xl font-bold mb-2">₹699 <span className="text-lg font-normal">/ person</span></p>
              <p className="text-yellow-500 mb-4">★★★★☆ 4.0/5.0</p>
              <ul className="text-left text-gray-600 mb-6 space-y-2">
                <li>✔ Basic decoration with any two colors balloons only</li>
                <li>✔ Basic Food (including starter, food, beverages)</li>
                <li>✔ Cake (1kg), popper, Knife, candle</li>
                <li>✔ Essential party supplies included</li>
              </ul>
              <Link href="/contact" className="btn-primary block">Get Quote</Link>
              <p className="text-sm text-gray-500 mt-2">Minimum 10 guests</p>
            </div>

            {/* Premium Package */}
            <div className="border-2 border-purple-500 rounded-xl shadow-lg p-8 text-center relative hover:shadow-xl transition">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-500 text-white text-sm px-3 py-1 rounded-full">Most Popular</span>
              <h3 className="text-2xl font-bold text-purple-600">Premium</h3>
              <p className="text-gray-600 mb-4">Most popular choice for celebrations</p>
              <p className="text-3xl font-bold mb-2">₹999 <span className="text-lg font-normal">/ person</span></p>
              <p className="text-yellow-500 mb-4">★★★★★ 5.0/5.0</p>
              <ul className="text-left text-gray-600 mb-6 space-y-2">
                <li>✔ Premium Decoration with balloons, banners, LED etc</li>
                <li>✔ Premium Food (including Starter, Food, beverages, desserts)</li>
                <li>✔ Cake (2 floor), popper, cap, knife, ribbon etc</li>
                <li>✔ Cleaning your party area after party</li>
                <li>✔ DSLR camera only</li>
              </ul>
              <Link href="/contact" className="btn-primary block bg-purple-600 hover:bg-purple-700">Get Quote</Link>
              <p className="text-sm text-gray-500 mt-2">Minimum 20 guests</p>
            </div>

            {/* Elite Package */}
            <div className="border rounded-xl shadow-sm p-8 text-center hover:shadow-lg transition">
              <h3 className="text-2xl font-bold text-pink-600">Elite</h3>
              <p className="text-gray-600 mb-4">Ultimate luxury experience</p>
              <p className="text-3xl font-bold mb-2">₹1499 <span className="text-lg font-normal">/ person</span></p>
              <p className="text-yellow-500 mb-4">★★★★★ 5.0/5.0</p>
              <ul className="text-left text-gray-600 mb-6 space-y-2">
                <li>✔ Elite theme based decoration (customizable also)</li>
                <li>✔ Elite catering services (including starter, food, beverages, desserts)</li>
                <li>✔ Cleaning your party area after party</li>
                <li>✔ Cake (customizable), popper, cap, knife, ribbon etc</li>
                <li>✔ DSLR camera with specialist photographers</li>
              </ul>
              <Link href="/contact" className="btn-primary block bg-pink-600 hover:bg-pink-700">Get Quote</Link>
              <p className="text-sm text-gray-500 mt-2">Minimum 30 guests</p>
            </div>
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="section-subtitle">Don't just take our word for it - hear from our satisfied customers</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Testimonial 1 */}
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-bold">Priya Sharma</h4>
                  <p className="text-sm text-gray-500">Wedding in Agra</p>
                </div>
              </div>
              <div className="text-yellow-400 flex mb-3">
                {'★'.repeat(5)}
              </div>
              <p className="text-gray-600">"They made our wedding day absolutely perfect! Every detail was taken care of, and our guests are still talking about how beautiful everything was."</p>
            </div>

            {/* Testimonial 2 */}
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-bold">Rahul Verma</h4>
                  <p className="text-sm text-gray-500">Corporate Event in Firozabad</p>
                </div>
              </div>
              <div className="text-yellow-400 flex mb-3">
                {'★'.repeat(5)}
              </div>
              <p className="text-gray-600">"Professional team that delivered beyond our expectations. Our company anniversary celebration was flawless and impressed all our stakeholders."</p>
            </div>

            {/* Testimonial 3 */}
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-bold">Meera Agarwal</h4>
                  <p className="text-sm text-gray-500">Holi Festival in Mathura</p>
                </div>
              </div>
              <div className="text-yellow-400 flex mb-3">
                {'★'.repeat(4)}{'☆'.repeat(1)}
              </div>
              <p className="text-gray-600">"They organized an authentic Lathmar Holi experience for our family. The cultural insights and arrangements were exceptional."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Highlights */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Latest from Our Blog</h2>
          <p className="section-subtitle">Tips, guides, and insights for planning your perfect event</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Blog Post 1 */}
            <div className="card overflow-hidden">
              <div className="h-48 relative mb-4">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/blog-wedding.svg')" }}
                ></div>
              </div>
              <div className="p-4">
                <span className="text-sm text-[#ff5722] font-medium">Agra</span>
                <h3 className="text-xl font-bold mb-2">Top 5 Wedding Venues in Agra</h3>
                <p className="text-gray-600 mb-4">Discover the most romantic and elegant wedding venues with Taj Mahal views...</p>
                <Link href="/blog/top-wedding-venues-agra" className="text-[#ff5722] font-medium">
                  Read More →
                </Link>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="card overflow-hidden">
              <div className="h-48 relative mb-4">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/blog-holi.svg')" }}
                ></div>
              </div>
              <div className="p-4">
                <span className="text-sm text-[#ff5722] font-medium">Mathura</span>
                <h3 className="text-xl font-bold mb-2">How to Plan Lathmar Holi in Mathura</h3>
                <p className="text-gray-600 mb-4">A complete guide to experiencing the authentic Lathmar Holi celebration...</p>
                <Link href="/blog/lathmar-holi-mathura" className="text-[#ff5722] font-medium">
                  Read More →
                </Link>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="card overflow-hidden">
              <div className="h-48 relative mb-4">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: "url('/images/blog-corporate.svg')" }}
                ></div>
              </div>
              <div className="p-4">
                <span className="text-sm text-[#ff5722] font-medium">Firozabad</span>
                <h3 className="text-xl font-bold mb-2">Best Caterers in Firozabad</h3>
                <p className="text-gray-600 mb-4">Find the top catering services for your next event in Firozabad...</p>
                <Link href="/blog/best-caterers-firozabad" className="text-[#ff5722] font-medium">
                  Read More →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/blog" className="btn-secondary">
              View All Posts
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
