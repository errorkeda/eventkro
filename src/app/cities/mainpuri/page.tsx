'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaStar } from 'react-icons/fa';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const venues = [
  {
    name: 'Rural Heritage Center',
    description: 'Traditional venue with rustic charm, perfect for authentic village-style events and cultural gatherings.',
    capacity: '100-400 guests',
    features: ['Rural setting', 'Traditional decor', 'Open spaces', 'Local cuisine'],
    rating: 4.6,
    image: '/images/venue-rural-center.jpg'
  },
  {
    name: 'Mainpuri Community Hall',
    description: 'Modern venue with traditional touches, suitable for weddings, community gatherings and local celebrations.',
    capacity: '150-600 guests',
    features: ['Air conditioning', 'Catering services', 'Decoration options', 'Parking space'],
    rating: 4.5,
    image: '/images/venue-community-hall.jpg'
  },
  {
    name: 'Village Fair Grounds',
    description: 'Expansive outdoor venue for large gatherings, fairs, and traditional celebrations.',
    capacity: '500-2000 guests',
    features: ['Open grounds', 'Tent facilities', 'Rural ambiance', 'Traditional setup'],
    rating: 4.4,
    image: '/images/venue-fair-grounds.jpg'
  }
];

const events = [
  {
    title: 'Traditional Village Fair',
    description: 'Experience authentic rural culture with local crafts, food, games, and cultural performances.',
    image: '/images/event-village-fair.jpg'
  },
  {
    title: 'Rural Wedding Experience',
    description: 'Traditional wedding with local customs, folk music, and authentic village cuisine.',
    image: '/images/event-rural-wedding.jpg'
  },
  {
    title: 'Cultural Heritage Festival',
    description: 'Celebration of local traditions, folk arts, and cultural performances unique to the region.',
    image: '/images/event-heritage-festival.jpg'
  }
];

export default function MainpuriPage() {
  const [activeTab, setActiveTab] = useState('overview');
  
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/mainpuri-hero.jpg')" }}
        ></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-20">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Events in Mainpuri</h1>
            <p className="text-xl mb-6">
              Experience authentic rural charm with traditional village events and celebrations
            </p>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-[#ff5722] mr-2" />
              <span>Mainpuri, Uttar Pradesh, India</span>
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
              <h2 className="text-3xl font-bold mb-6">About Mainpuri</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <p className="text-gray-600 mb-4">
                    Mainpuri offers a glimpse into authentic rural India with its traditional villages, local 
                    culture, and agricultural landscapes. It's the perfect destination for those seeking to 
                    experience and celebrate the rich cultural heritage of rural Uttar Pradesh.
                  </p>
                  <p className="text-gray-600 mb-4">
                    The district is known for its village fairs, local festivals, and traditional celebrations 
                    that showcase the authentic rural lifestyle and customs of the region. These events provide 
                    a unique opportunity to connect with India's cultural roots.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Our event planning services in Mainpuri specialize in creating authentic rural experiences 
                    while ensuring comfortable amenities and professional execution for your guests.
                  </p>

                  <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Mainpuri for Your Event</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-[#ff5722] mr-2">✓</span>
                      <span>Authentic rural experience with traditional settings</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#ff5722] mr-2">✓</span>
                      <span>Local folk artists and cultural performers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#ff5722] mr-2">✓</span>
                      <span>Traditional cuisine with local specialties</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#ff5722] mr-2">✓</span>
                      <span>Spacious venues for large gatherings and fairs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#ff5722] mr-2">✓</span>
                      <span>Cost-effective options compared to urban locations</span>
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
                      <p>Village Fairs, Rural Weddings, Cultural Festivals</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">Specialties</h4>
                      <p>Traditional rural events, Local cultural experiences</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">Local Attractions</h4>
                      <p>Rural landscapes, Local temples, Traditional villages</p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link href="/contact" className="btn-primary w-full text-center">
                      Plan Your Mainpuri Event
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Venues Tab */}
          {activeTab === 'venues' && (
            <div>
              <h2 className="text-3xl font-bold mb-6">Top Venues in Mainpuri</h2>
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
                          Inquire About This Venue
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
              <h2 className="text-3xl font-bold mb-6">Popular Event Types in Mainpuri</h2>
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
                      <Link href="/contact" className="text-[#ff5722] font-medium">
                        Learn More →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-gray-600 mb-6">
                  Looking for an authentic rural experience in Mainpuri? Our team can create a tailored event just for you.
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
          <h2 className="section-title">Client Experiences in Mainpuri</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-bold">Cultural Heritage Society</h4>
                  <p className="text-sm text-gray-500">Annual Festival</p>
                </div>
              </div>
              <div className="text-yellow-400 flex mb-3">
                {'★'.repeat(5)}
              </div>
              <p className="text-gray-600">"The team helped us organize our annual cultural festival with authentic local performances and traditional setup. It was a huge success."</p>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-bold">Yadav Family</h4>
                  <p className="text-sm text-gray-500">Traditional Wedding</p>
                </div>
              </div>
              <div className="text-yellow-400 flex mb-3">
                {'★'.repeat(4)}{'☆'.repeat(1)}
              </div>
              <p className="text-gray-600">"Our traditional village-style wedding was exactly what we wanted. The rural setting and local customs made it truly special for all our guests."</p>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-bold">Rural Tourism Group</h4>
                  <p className="text-sm text-gray-500">Cultural Tour & Event</p>
                </div>
              </div>
              <div className="text-yellow-400 flex mb-3">
                {'★'.repeat(5)}
              </div>
              <p className="text-gray-600">"The village fair experience arranged for our tour group was authentic and engaging. Our international visitors were thrilled with the cultural immersion."</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#ff5722] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Plan Your Mainpuri Event?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Contact us today to start planning your authentic rural event experience in Mainpuri.
          </p>
          <Link href="/contact" className="bg-white text-[#ff5722] hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md">
            Book Your Mainpuri Event
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}