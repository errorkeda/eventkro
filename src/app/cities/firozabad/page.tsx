'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaStar } from 'react-icons/fa';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const venues = [
  {
    name: 'Glass City Convention Center',
    description: 'Modern venue with glass-themed decor, perfect for exhibitions, craft shows and elegant weddings.',
    capacity: '200-800 guests',
    features: ['Glass art displays', 'Exhibition space', 'Modern amenities', 'Customizable lighting'],
    rating: 4.7,
    image: '/images/venue-glass-convention.jpeg'
  },
  {
    name: 'Heritage Banquet Hall',
    description: 'Traditional venue with modern amenities, ideal for weddings and social gatherings.',
    capacity: '100-500 guests',
    features: ['In-house catering', 'Decoration services', 'Parking space', 'Air conditioning'],
    rating: 4.5,
    image: '/images/venue-krishna-hall.jpeg'
  },
  {
    name: 'Craft Exhibition Center',
    description: 'Specialized venue for craft exhibitions, trade shows, and cultural displays.',
    capacity: '300-1000 guests',
    features: ['Display booths', 'Demonstration areas', 'Visitor facilities', 'Technical support'],
    rating: 4.6,
    image: '/images/venue-brij-center.jpg'
  }
];

const events = [
  {
    title: 'Glass Craft Exhibition',
    description: 'Showcase of traditional and modern glass craftsmanship with live demonstrations and workshops.',
    image: '/images/venue-glass-convention.jpeg'
  },
  {
    title: 'Traditional Wedding with Glass Art',
    description: 'Elegant wedding celebrations featuring unique glass art decorations and traditional ceremonies.',
    image: '/images/venue-krishna-hall.jpeg'
  },
  {
    title: 'Artisan Trade Fair',
    description: 'Exhibition and marketplace for local artisans to showcase and sell their handcrafted products.',
    image: '/images/venue-brij-center.jpg'
  }
];

export default function FirozabadPage() {
  const [activeTab, setActiveTab] = useState('overview');
  
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/firozabad-hero.jpg')" }}
        ></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-20">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Events in Firozabad</h1>
            <p className="text-xl mb-6">
              Host your special events in the Glass City with unique craft-inspired venues
            </p>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-[#ff5722] mr-2" />
              <span>Firozabad, Uttar Pradesh, India</span>
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
              <h2 className="text-3xl font-bold mb-6">About Firozabad</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <p className="text-gray-600 mb-4">
                    Firozabad, known as the "Glass City of India," is famous for its glass bangles and glassware industry. 
                    This unique cultural heritage makes it an excellent location for craft exhibitions, trade fairs, and 
                    weddings with distinctive glass-themed decorations.
                  </p>
                  <p className="text-gray-600 mb-4">
                    The city offers specialized venues that showcase its glass craftsmanship while providing modern 
                    amenities for various events. From traditional weddings to craft exhibitions, Firozabad provides 
                    a distinctive backdrop for your special occasions.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Our event planning services in Firozabad specialize in incorporating the city's unique glass art 
                    into your events while ensuring professional execution and attention to detail.
                  </p>

                  <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Firozabad for Your Event</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-[#ff5722] mr-2">✓</span>
                      <span>Unique glass art decorations and themes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#ff5722] mr-2">✓</span>
                      <span>Specialized venues for craft exhibitions</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#ff5722] mr-2">✓</span>
                      <span>Custom glass souvenirs and gifts for guests</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#ff5722] mr-2">✓</span>
                      <span>Skilled local artisans for live demonstrations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#ff5722] mr-2">✓</span>
                      <span>Excellent connectivity to Agra and other major cities</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-700">Best Season for Events</h4>
                      <p>October to March</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">Popular Event Types</h4>
                      <p>Craft Exhibitions, Weddings, Trade Fairs</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">Specialties</h4>
                      <p>Glass-themed events, Craft exhibitions, Traditional weddings</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">Local Attractions</h4>
                      <p>Glass factories, Handicraft markets, Local temples</p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link href="/contact" className="btn-primary w-full text-center">
                      Plan Your Firozabad Event
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Venues Tab */}
          {activeTab === 'venues' && (
            <div>
              <h2 className="text-3xl font-bold mb-6">Top Venues in Firozabad</h2>
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
              <h2 className="text-3xl font-bold mb-6">Popular Event Types in Firozabad</h2>
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
                  Looking for a custom event with glass art elements in Firozabad? Our team can create a tailored experience just for you.
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
          <h2 className="section-title">Client Experiences in Firozabad</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-bold">Glass Artisans Association</h4>
                  <p className="text-sm text-gray-500">Annual Exhibition</p>
                </div>
              </div>
              <div className="text-yellow-400 flex mb-3">
                {'★'.repeat(5)}
              </div>
              <p className="text-gray-600">"The team helped us organize our annual glass craft exhibition with perfect attention to detail. The venue setup was ideal for our demonstrations."</p>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-bold">Neha & Vikram</h4>
                  <p className="text-sm text-gray-500">Glass-themed Wedding</p>
                </div>
              </div>
              <div className="text-yellow-400 flex mb-3">
                {'★'.repeat(5)}
              </div>
              <p className="text-gray-600">"Our wedding with glass art decorations was absolutely stunning. The custom glass favors for our guests were a huge hit!"</p>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-bold">UP Handicrafts Board</h4>
                  <p className="text-sm text-gray-500">Trade Fair</p>
                </div>
              </div>
              <div className="text-yellow-400 flex mb-3">
                {'★'.repeat(4)}{'☆'.repeat(1)}
              </div>
              <p className="text-gray-600">"The craft exhibition center was perfect for our regional trade fair. The facilities for artisans and visitors were well thought out."</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#ff5722] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Plan Your Firozabad Event?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Contact us today to start planning your perfect event in the Glass City of India.
          </p>
          <Link href="/contact" className="bg-white text-[#ff5722] hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md">
            Book Your Firozabad Event
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}