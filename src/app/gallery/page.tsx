'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { FaSearch, FaFilter } from 'react-icons/fa';

// Gallery data
const galleryItems = [
  {
    id: 1,
    title: 'Royal Wedding at Taj View Gardens',
    city: 'agra',
    eventType: 'wedding',
    image: '/images/gallery-agra-wedding-1.jpg',
    description: 'Elegant wedding setup with Taj Mahal view in the background'
  },
  {
    id: 2,
    title: 'Corporate Conference at Agra Convention Center',
    city: 'agra',
    eventType: 'corporate',
    image: '/images/gallery-agra-corporate-1.jpg',
    description: 'Modern conference setup for 200 executives'
  },
  {
    id: 3,
    title: 'Janmashtami Celebration in Mathura',
    city: 'mathura',
    eventType: 'cultural',
    image: '/images/gallery-mathura-cultural-1.jpg',
    description: 'Traditional Krishna Janmashtami celebration with cultural performances'
  },
  {
    id: 4,
    title: 'Lathmar Holi Festival in Mathura',
    city: 'mathura',
    eventType: 'cultural',
    image: '/images/gallery-mathura-holi-1.jpg',
    description: 'Colorful Holi celebration with traditional customs'
  },
  {
    id: 5,
    title: 'Glass Art Exhibition in Firozabad',
    city: 'firozabad',
    eventType: 'exhibition',
    image: '/images/gallery-firozabad-exhibition-1.jpg',
    description: 'Showcase of traditional and modern glass craftsmanship'
  },
  {
    id: 6,
    title: 'Traditional Wedding with Glass Decor',
    city: 'firozabad',
    eventType: 'wedding',
    image: '/images/gallery-firozabad-wedding-1.jpg',
    description: 'Wedding celebration featuring unique glass art decorations'
  },
  {
    id: 7,
    title: 'Village Fair in Mainpuri',
    city: 'mainpuri',
    eventType: 'cultural',
    image: '/images/gallery-mainpuri-fair-1.jpg',
    description: 'Traditional village fair with local crafts and performances'
  },
  {
    id: 8,
    title: 'Rural Wedding Experience',
    city: 'mainpuri',
    eventType: 'wedding',
    image: '/images/gallery-mainpuri-wedding-1.jpg',
    description: 'Traditional wedding with local customs and village setting'
  },
  {
    id: 9,
    title: 'Birthday Celebration at Heritage Palace',
    city: 'agra',
    eventType: 'birthday',
    image: '/images/gallery-agra-birthday-1.jpg',
    description: 'Luxurious birthday party in historic venue'
  }
];

// Filter options
const cities = [
  { value: 'all', label: 'All Cities' },
  { value: 'agra', label: 'Agra' },
  { value: 'mathura', label: 'Mathura' },
  { value: 'firozabad', label: 'Firozabad' },
  { value: 'mainpuri', label: 'Mainpuri' }
];

const eventTypes = [
  { value: 'all', label: 'All Event Types' },
  { value: 'wedding', label: 'Wedding' },
  { value: 'birthday', label: 'Birthday' },
  { value: 'corporate', label: 'Corporate' },
  { value: 'cultural', label: 'Cultural & Religious' },
  { value: 'exhibition', label: 'Exhibition & Fair' }
];

export default function GalleryPage() {
  const [selectedCity, setSelectedCity] = useState('all');
  const [selectedEventType, setSelectedEventType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState(galleryItems);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Apply filters when any filter changes
  useEffect(() => {
    let filtered = [...galleryItems];
    
    // Filter by city
    if (selectedCity !== 'all') {
      filtered = filtered.filter(item => item.city === selectedCity);
    }
    
    // Filter by event type
    if (selectedEventType !== 'all') {
      filtered = filtered.filter(item => item.eventType === selectedEventType);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        item => 
          item.title.toLowerCase().includes(query) || 
          item.description.toLowerCase().includes(query)
      );
    }
    
    setFilteredItems(filtered);
  }, [selectedCity, selectedEventType, searchQuery]);

  // Handle image click for lightbox
  const openLightbox = (item) => {
    setSelectedImage(item);
    document.body.style.overflow = 'hidden';
  };

  // Close lightbox
  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="relative h-[40vh]">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/gallery-hero.jpg')" }}
        ></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-20">
          <div className="text-white max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Event Gallery</h1>
            <p className="text-xl">
              Browse our collection of successful events across Agra Mandal. Filter by city or event type to find inspiration for your next celebration.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white py-8 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Search Bar */}
            <div className="relative flex-grow max-w-md">
              <input
                type="text"
                placeholder="Search gallery..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff5722]"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>

            {/* Desktop Filters */}
            <div className="hidden md:flex items-center gap-4">
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff5722]"
              >
                {cities.map((city) => (
                  <option key={city.value} value={city.value}>
                    {city.label}
                  </option>
                ))}
              </select>

              <select
                value={selectedEventType}
                onChange={(e) => setSelectedEventType(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff5722]"
              >
                {eventTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Mobile Filter Toggle */}
            <button
              className="md:hidden flex items-center gap-2 px-4 py-2 border rounded-lg"
              onClick={() => setShowFilters(!showFilters)}
            >
              <FaFilter />
              <span>Filters</span>
            </button>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="md:hidden mt-4 flex flex-col gap-4">
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff5722]"
              >
                {cities.map((city) => (
                  <option key={city.value} value={city.value}>
                    {city.label}
                  </option>
                ))}
              </select>

              <select
                value={selectedEventType}
                onChange={(e) => setSelectedEventType(e.target.value)}
                className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff5722]"
              >
                {eventTypes.map((type) => (
                  <option key={type.value} value={type.value}>
                    {type.label}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredItems.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-2xl font-bold text-gray-600">No events found</h3>
              <p className="mt-2 text-gray-500">Try adjusting your filters or search query</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div 
                  key={item.id} 
                  className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-[1.02]"
                  onClick={() => openLightbox(item)}
                >
                  <div className="h-64 relative">
                    <div 
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                    <div className="absolute top-4 right-4 bg-[#ff5722] text-white px-3 py-1 rounded-full text-sm">
                      {cities.find(city => city.value === item.city)?.label}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600 mb-3">{item.description}</p>
                    <div className="flex items-center">
                      <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {eventTypes.find(type => type.value === item.eventType)?.label}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div 
            className="max-w-4xl w-full bg-white rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-[60vh] relative">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${selectedImage.image})` }}
              ></div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-600 mb-4">{selectedImage.description}</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-[#ff5722]/10 text-[#ff5722] px-3 py-1 rounded-full text-sm">
                  {cities.find(city => city.value === selectedImage.city)?.label}
                </span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  {eventTypes.find(type => type.value === selectedImage.eventType)?.label}
                </span>
              </div>
            </div>
            <div className="p-4 bg-gray-50 flex justify-end">
              <button 
                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                onClick={closeLightbox}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-[#ff5722] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Your Own Event?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Contact us today to start planning your perfect event in Agra Mandal.
          </p>
          <a href="/contact" className="bg-white text-[#ff5722] hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md">
            Book Your Event
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}