'use client';

import React from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const cities = [
  { name: 'Agra', slug: 'agra' },
  { name: 'Mathura', slug: 'mathura' },
  { name: 'Firozabad', slug: 'firozabad' },
  { name: 'Mainpuri', slug: 'mainpuri' },
];

export default function CitiesPage() {
  return (
    <>
      <Header />

      <section className="bg-[#ff5722] py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Cities</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Explore our event services available in different cities.
          </p>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cities.map((city) => (
            <Link
              key={city.slug}
              href={`/cities/${city.slug}`}
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <h2 className="text-2xl font-bold mb-2">{city.name}</h2>
              <p className="text-gray-600">View services and highlights in {city.name}</p>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}
