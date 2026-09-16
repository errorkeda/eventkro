'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-red-600">
            Eventkro
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-gray-700 hover:text-red-600 transition-colors">
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative group">
              <Link
                href="/services"
                className="text-gray-700 hover:text-red-600 transition-colors inline-flex items-center gap-1 py-2"
              >
                Services
                <FaChevronDown className="text-xs transition-transform duration-200 group-hover:rotate-180" />
              </Link>

              <div className="absolute left-0 top-full hidden group-hover:block group-focus-within:block pt-1 z-50">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-4 w-[420px] grid grid-cols-2 gap-4 text-left">
                  {/* Agra Services */}
                  <div>
                    <p className="text-xs font-bold text-[#ff5722] uppercase tracking-wider mb-2">
                      Agra Services
                    </p>
                    <div className="flex flex-col space-y-2 text-sm">
                      <Link
                        href="/event-planner-in-agra"
                        className="text-gray-700 hover:text-red-600 transition-colors font-medium"
                      >
                        Event Planner in Agra
                      </Link>
                      <Link
                        href="/wedding-planner-in-agra"
                        className="text-gray-700 hover:text-red-600 transition-colors font-medium"
                      >
                        Wedding Planner in Agra
                      </Link>
                      <Link
                        href="/proposal-decoration-in-agra"
                        className="text-gray-700 hover:text-red-600 transition-colors font-medium"
                      >
                        Proposal Decoration in Agra
                      </Link>
                      <Link
                        href="/services"
                        className="text-xs text-[#ff5722] hover:underline pt-1 font-semibold"
                      >
                        All Services →
                      </Link>
                    </div>
                  </div>

                  {/* Delhi NCR */}
                  <div>
                    <p className="text-xs font-bold text-[#ff5722] uppercase tracking-wider mb-2">
                      Delhi NCR
                    </p>
                    <div className="flex flex-col space-y-2 text-sm">
                      <Link
                        href="/balloon-decoration-in-delhi"
                        className="text-gray-700 hover:text-red-600 transition-colors font-medium"
                      >
                        Balloon Decoration in Delhi
                      </Link>
                      <Link
                        href="/birthday-decoration-in-delhi"
                        className="text-gray-700 hover:text-red-600 transition-colors font-medium"
                      >
                        Birthday Decoration in Delhi
                      </Link>
                      <Link
                        href="/anniversary-decoration-in-delhi"
                        className="text-gray-700 hover:text-red-600 transition-colors font-medium"
                      >
                        Anniversary Decoration in Delhi
                      </Link>
                      <Link
                        href="/proposal-decoration-in-delhi"
                        className="text-gray-700 hover:text-red-600 transition-colors font-medium"
                      >
                        Proposal Decoration in Delhi
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link href="/gallery" className="text-gray-700 hover:text-red-600 transition-colors">
              Gallery
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-red-600 transition-colors">
              Blog
            </Link>
            <Link href="/cities" className="text-gray-700 hover:text-red-600 transition-colors">
              Cities
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-red-600 transition-colors">
              Pricing
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-red-600 transition-colors">
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-red-600"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-2">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-red-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Services Accordion */}
              <div>
                <div className="flex justify-between items-center py-2">
                  <Link 
                    href="/services" 
                    className="text-gray-700 hover:text-red-600 transition-colors font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Services
                  </Link>
                  <button
                    type="button"
                    className="text-gray-500 hover:text-red-600 px-3 py-1"
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    aria-label="Toggle services list"
                  >
                    <FaChevronDown
                      className={`text-xs transition-transform duration-200 ${
                        isServicesOpen ? 'rotate-180 text-red-600' : ''
                      }`}
                    />
                  </button>
                </div>

                <div
                  className={`${
                    isServicesOpen ? 'block' : 'hidden'
                  } pl-4 pb-2 space-y-2 border-l-2 border-red-100 ml-1 text-sm`}
                >
                  <p className="text-xs font-bold text-[#ff5722] uppercase tracking-wider pt-1">
                    Agra
                  </p>
                  <Link
                    href="/event-planner-in-agra"
                    className="block text-gray-600 hover:text-red-600 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Event Planner in Agra
                  </Link>
                  <Link
                    href="/wedding-planner-in-agra"
                    className="block text-gray-600 hover:text-red-600 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Wedding Planner in Agra
                  </Link>
                  <Link
                    href="/proposal-decoration-in-agra"
                    className="block text-gray-600 hover:text-red-600 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Proposal Decoration in Agra
                  </Link>

                  <p className="text-xs font-bold text-[#ff5722] uppercase tracking-wider pt-2">
                    Delhi NCR
                  </p>
                  <Link
                    href="/balloon-decoration-in-delhi"
                    className="block text-gray-600 hover:text-red-600 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Balloon Decoration in Delhi
                  </Link>
                  <Link
                    href="/birthday-decoration-in-delhi"
                    className="block text-gray-600 hover:text-red-600 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Birthday Decoration in Delhi
                  </Link>
                  <Link
                    href="/anniversary-decoration-in-delhi"
                    className="block text-gray-600 hover:text-red-600 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Anniversary Decoration in Delhi
                  </Link>
                  <Link
                    href="/proposal-decoration-in-delhi"
                    className="block text-gray-600 hover:text-red-600 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Proposal Decoration in Delhi
                  </Link>
                </div>
              </div>

              <Link 
                href="/gallery" 
                className="text-gray-700 hover:text-red-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Gallery
              </Link>
              <Link 
                href="/blog" 
                className="text-gray-700 hover:text-red-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/cities" 
                className="text-gray-700 hover:text-red-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Cities
              </Link>
              <Link 
                href="/pricing" 
                className="text-gray-700 hover:text-red-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-red-600 transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}