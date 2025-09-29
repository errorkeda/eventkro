'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaStar } from 'react-icons/fa';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const venues = [
  {
    name: 'Krishna Heritage Hall',
    description: 'Traditional venue with spiritual ambiance, perfect for religious ceremonies and cultural events.',
    capacity: '100-400 guests',
    features: ['Temple architecture', 'Riverside location', 'Traditional decor', 'Cultural performance area'],
    rating: 4.9,
    image: '/images/venue-krishna-hall.jpeg'
  },
  {
    name: 'Yamuna Celebration Gardens',
    description: 'Outdoor venue along the Yamuna river, ideal for Holi celebrations and festive gatherings.',
    capacity: '200-1000 guests',
    features: ['Riverside views', 'Open-air spaces', 'Festival facilities', 'Traditional catering'],
    rating: 4.7,
    image: '/images/venue-yamuna-gardens.jpeg'
  },
  {
    name: 'Brij Cultural Center',
    description: 'Modern venue with traditional touches for cultural events, performances and religious gatherings.',
    capacity: '150-600 guests',
    features: ['Performance stage', 'Modern amenities', 'Cultural decor', 'Audio-visual systems'],
    rating: 4.6,
    image: '/images/venue-brij-center.jpg'
  }
];

const events = [
  {
    title: 'Lathmar Holi Celebration',
    description: 'Experience the famous Lathmar Holi with traditional customs, colors, and cultural performances.',
    image: '/images/event-holi.jpeg'
  },
  {
    title: 'Krishna Janmashtami Festival',
    description: 'Celebrate the birth of Lord Krishna with religious ceremonies, bhajans, and cultural programs.',
    image: '/images/event-janmashtami.jpeg'
  },
  {
    title: 'Braj Wedding Experience',
    description: 'Traditional Braj-style wedding with local customs, folk music, and authentic Mathura cuisine.',
    image: '/images/event-braj-wedding.jpg'
  }
];

export default function MathuraPage() {
  const [activeTab, setActiveTab] = useState('overview');
  
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/mathura-hero.jpg')" }}
        ></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-20">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Events in Mathura</h1>
            <p className="text-xl mb-6">
              Host your religious and cultural events in the birthplace of Lord Krishna
            </p>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-[#ff5722] mr-2" />
              <span>Mathura, Uttar Pradesh, India</span>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto">
            <button 
              className={`px-6 py-4 font-medium ${activeTab === 'overview' ? 'text-[#ff5722] border-b-2 border-[#ff5722]' : 'text-gray-600'}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button 
              className={`px-6 py-4 font-medium ${activeTab === 'venues' ? 'text-[#ff5722] border-b-2 border-[#ff5722]' : 'text-gray-600'}`}
              onClick={() => setActiveTab('venues')}
            >
              Venues
            </button>
            <button 
              className={`px-6 py-4 font-medium ${activeTab === 'events' ? 'text-[#ff5722] border-b-2 border-[#ff5722]' : 'text-gray-600'}`}
              onClick={() => setActiveTab('events')}
            >
              Event Types
            </button>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div>
              <h2 className="text-3xl font-bold mb-6">About Mathura</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <p className="text-gray-600 mb-4">
                    Mathura, the birthplace of Lord Krishna, is a city steeped in religious significance and cultural heritage. 
                    Known for its vibrant festivals and spiritual atmosphere, Mathura offers unique venues for religious 
                    ceremonies, cultural celebrations, and traditional events.
                  </p>
                  <p className="text-gray-600 mb-4">
                    The city comes alive during festivals like Holi, Janmashtami, and other religious occasions, making it 
                    an ideal location for hosting events that embrace the rich cultural traditions of the Braj region.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Our event planning services in Mathura specialize in creating authentic experiences that honor the 
                    city's spiritual heritage while providing modern amenities and professional execution.
                  </p>

                  <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Mathura for Your Event</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-[#ff5722] mr-2">✓</span>
                      <span>Spiritual atmosphere perfect for religious ceremonies</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#ff5722] mr-2">✓</span>
                      <span>Authentic cultural experiences and performances</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#ff5722] mr-2">✓</span>
                      <span>Traditional venues with modern amenities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#ff5722] mr-2">✓</span>
                      <span>Expert local vendors familiar with traditional customs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#ff5722] mr-2">✓</span>
                      <span>Delicious vegetarian Braj cuisine options</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-700">Best Season for Events</h4>
                      <p>October to March, Festival seasons</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">Popular Event Types</h4>
                      <p>Religious Ceremonies, Holi Celebrations, Cultural Festivals</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">Specialties</h4>
                      <p>Traditional Braj events, Religious ceremonies, Festival celebrations</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">Local Attractions</h4>
                      <p>Krishna Janmabhoomi Temple, Dwarkadhish Temple, Vishram Ghat, Kusum Sarovar</p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link href="/contact" className="btn-primary w-full text-center">
                      Plan Your Mathura Event
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Venues Tab */}
          {activeTab === 'venues' && (
            <div>
              <h2 className="text-3xl font-bold mb-6">Top Venues in Mathura</h2>
              <div className="space-y-12">
                {venues.map((venue, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                      <div className="md:col-span-1 h-64 md:h-auto relative">
                        <div 
                          className="absolute inset-0 bg-cover bg-center"
                          style={{ backgroundImage: `url(${venue.image})` }}
                        ></div>
                      </div>
                      <div className="md:col-span-2 p-6">
                        <div className="flex justify-between items-start">
                          <h3 className="text-2xl font-bold">{venue.name}</h3>
                          <div className="flex items-center bg-[#ff5722]/10 px-3 py-1 rounded-full">
                            <FaStar className="text-[#ff5722] mr-1" />
                            <span className="font-medium">{venue.rating}</span>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 mt-2 mb-4">{venue.description}</p>
                        
                        <div className="flex items-center text-gray-700 mb-4">
                          <FaCalendarAlt className="mr-2" />
                          <span>Capacity: {venue.capacity}</span>
                        </div>
                        
                        <h4 className="font-bold mb-2">Features:</h4>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {venue.features.map((feature, i) => (
                            <span 
                              key={i} 
                              className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                        
                        <Link href="/contact" className="btn-primary inline-block">
                          Inquire
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Events Tab */}
          {activeTab === 'events' && (
            <div>
              <h2 className="text-3xl font-bold mb-6">Popular Event Types in Mathura</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {events.map((event, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="h-48 relative">
                      <div 
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${event.image})` }}
                      ></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                      <p className="text-gray-600 mb-4">{event.description}</p>
                      {/* <Link href="/contact" className="text-[#ff5722] font-medium">
                        Learn More →
                      </Link> */}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-gray-600 mb-6">
                  Looking for a custom religious or cultural event in Mathura? Our team can create a tailored experience just for you.
                </p>
                <Link href="/contact" className="btn-primary">
                  Request Custom Event
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Client Experiences in Mathura</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-bold">Sharma Family</h4>
                  <p className="text-sm text-gray-500">Janmashtami Celebration</p>
                </div>
              </div>
              <div className="text-yellow-400 flex mb-3">
                {'★'.repeat(5)}
              </div>
              <p className="text-gray-600">"Our family Janmashtami celebration was beautifully arranged with all traditional elements. The cultural performances were exceptional."</p>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-bold">Krishna Cultural Society</h4>
                  <p className="text-sm text-gray-500">Annual Festival</p>
                </div>
              </div>
              <div className="text-yellow-400 flex mb-3">
                {'★'.repeat(5)}
              </div>
              <p className="text-gray-600">"The team helped us organize our annual cultural festival with authentic Braj performances and traditional food. Everything was perfect."</p>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-bold">Meera & Arjun</h4>
                  <p className="text-sm text-gray-500">Traditional Wedding</p>
                </div>
              </div>
              <div className="text-yellow-400 flex mb-3">
                {'★'.repeat(4)}{'☆'.repeat(1)}
              </div>
              <p className="text-gray-600">"Our traditional Braj-style wedding was everything we dreamed of. The riverside venue and cultural touches made it truly special."</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#ff5722] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Plan Your Mathura Event?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Contact us today to start planning your perfect religious or cultural event in the birthplace of Lord Krishna.
          </p>
          <Link href="/contact" className="bg-white text-[#ff5722] hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md">
            Book Your Mathura Event
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}