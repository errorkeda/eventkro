'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaMapMarkerAlt, FaCalendarAlt, FaStar } from 'react-icons/fa';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';

const venues = [
  {
    name: 'Taj View Gardens',
    description: 'Luxury outdoor venue with stunning views of the Taj Mahal, perfect for weddings and corporate events.',
    capacity: '100-500 guests',
    features: ['Taj Mahal view', 'Outdoor & indoor spaces', 'In-house catering', 'Decoration services'],
    rating: 4.8,
    image: '/images/venue-taj-view.jpg'
  },
  {
    name: 'Heritage Palace',
    description: 'Historic venue with Mughal architecture, ideal for cultural events and traditional weddings.',
    capacity: '200-800 guests',
    features: ['Historic building', 'Multiple halls', 'Customizable spaces', 'Valet parking'],
    rating: 4.7,
    image: '/images/venue-heritage.jpeg'
  },
  {
    name: 'Agra Convention Center',
    description: 'Modern event space for large corporate events, conferences, and exhibitions.',
    capacity: '500-2000 guests',
    features: ['State-of-the-art AV', 'Multiple conference rooms', 'Exhibition space', 'Business center'],
    rating: 4.5,
    image: '/images/venue-convention.jpg'
  }
];



const events = [
  {
    title: 'Taj Heritage Tour & Dinner',
    description: 'Combine a guided tour of the Taj Mahal with an elegant dinner event featuring local cuisine and cultural performances.',
    image: '/images/event-heritage.jpg',
  },
  {
    title: 'Corporate Retreat with Taj View',
    description: 'Elevate your corporate events with meeting spaces offering views of the Taj Mahal and team-building activities.',
    image: '/images/event-corporate.jpg',
  },
  // ✅ New Famous Agra Events
  {
    title: 'Taj Mahotsav Celebration',
    description: 'Enjoy a week-long cultural carnival featuring folk dances, craft exhibitions, and local cuisine near the Taj Mahal.',
    image: '/images/event-taj-mahotsav.jpg',
  }
];

export default function AgraPage() {
  const [activeTab, setActiveTab] = useState('overview');
  
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/agra-hero.jpg')" }}
        ></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-20">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Events in Agra</h1>
            <p className="text-xl mb-6">
              Host your special event in the city of the Taj Mahal, with stunning venues and world-class services
            </p>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-[#ff5722] mr-2" />
              <span>Agra, Uttar Pradesh, India</span>
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
              <h2 className="text-3xl font-bold mb-6">About Agra</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <p className="text-gray-600 mb-4">
                    Agra, home to the iconic Taj Mahal, is a city steeped in history and architectural marvels. 
                    Beyond being a tourist destination, Agra offers exceptional venues for events that combine 
                    historical grandeur with modern amenities.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Whether you're planning a dream wedding with the Taj Mahal as your backdrop, a corporate 
                    event in a heritage property, or a cultural celebration that honors the rich Mughal history, 
                    Agra provides a unique setting that few other cities can match.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Our event planning services in Agra specialize in creating memorable experiences that 
                    leverage the city's unique character while ensuring world-class execution and attention to detail.
                  </p>

                  <h3 className="text-2xl font-bold mt-8 mb-4">Why Choose Agra for Your Event</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-[#ff5722] mr-2">✓</span>
                      <span>Iconic backdrops including the Taj Mahal for photography</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#ff5722] mr-2">✓</span>
                      <span>Luxury hotels and heritage properties for accommodation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#ff5722] mr-2">✓</span>
                      <span>Excellent connectivity via road, rail and nearby airports</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#ff5722] mr-2">✓</span>
                      <span>Rich cultural experiences for guests</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#ff5722] mr-2">✓</span>
                      <span>World-class catering with Mughlai specialties</span>
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
                      <p>Weddings, Heritage Tours, Corporate Events</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">Specialties</h4>
                      <p>Taj Mahal view venues, Mughal-themed events</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-700">Local Attractions</h4>
                      <p>Taj Mahal, Agra Fort, Fatehpur Sikri, Mehtab Bagh</p>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Link href="/contact" className="btn-primary w-full text-center">
                      Plan Your Agra Event
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Venues Tab */}
          {activeTab === 'venues' && (
            <div>
              <h2 className="text-3xl font-bold mb-6">Top Venues in Agra</h2>
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
              <h2 className="text-3xl font-bold mb-6">Popular Event Types in Agra</h2>
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
                  Looking for a custom event experience in Agra? Our team can create a tailored event package just for you.
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
          <h2 className="section-title">Client Experiences in Agra</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-bold">Priya & Rahul</h4>
                  <p className="text-sm text-gray-500">Wedding at Taj View Gardens</p>
                </div>
              </div>
              <div className="text-yellow-400 flex mb-3">
                {'★'.repeat(5)}
              </div>
              <p className="text-gray-600">"Our wedding with the Taj Mahal in the background was like a dream come true. The team handled everything perfectly, from decor to catering."</p>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-bold">Tech Innovations Inc.</h4>
                  <p className="text-sm text-gray-500">Corporate Retreat</p>
                </div>
              </div>
              <div className="text-yellow-400 flex mb-3">
                {'★'.repeat(5)}
              </div>
              <p className="text-gray-600">"Our team building retreat in Agra was both productive and culturally enriching. The heritage tour combined with conference facilities was perfect."</p>
            </div>
            
            <div className="card">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-bold">Sharma Family</h4>
                  <p className="text-sm text-gray-500">50th Anniversary Celebration</p>
                </div>
              </div>
              <div className="text-yellow-400 flex mb-3">
                {'★'.repeat(4)}{'☆'.repeat(1)}
              </div>
              <p className="text-gray-600">"We celebrated our parents' 50th anniversary with a beautiful event that honored their journey. The cultural performances were outstanding."</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#ff5722] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Plan Your Agra Event?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Contact us today to start planning your perfect event in the city of the Taj Mahal.
          </p>
          <Link href="/contact" className="bg-white text-[#ff5722] hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md">
            Book Your Agra Event
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}