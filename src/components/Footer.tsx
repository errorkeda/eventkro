'use client';

import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-red-500 mb-4">Eventkro</h3>
            <p className="text-gray-300 mb-4">
              Professional event planners in Agra, Mathura, Firozabad &amp; Mainpuri — weddings,
              catering, decoration &amp; corporate events.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/eventkro?igsh=MXE0eHlzNzhrdzVwMw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-red-500 transition-colors"
                aria-label="Eventkro Instagram"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-red-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-red-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/cities" className="text-gray-300 hover:text-red-500 transition-colors">
                  Cities
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-red-500 transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-red-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-red-500 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-red-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/partner-with-eventkro" className="text-gray-300 hover:text-red-500 transition-colors">
                  Partner With Eventkro
                </Link>
              </li>
            </ul>
          </div>

          {/* Featured Services */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Featured Services</h4>
            
            <p className="text-xs font-semibold text-[#ff5722] uppercase tracking-wider mb-2">
              Agra Services
            </p>
            <ul className="space-y-1.5 mb-4 text-sm">
              <li>
                <Link href="/wedding-planner-in-agra" className="text-gray-300 hover:text-red-500 transition-colors">
                  Wedding Planner in Agra
                </Link>
              </li>
              <li>
                <Link href="/event-planner-in-agra" className="text-gray-300 hover:text-red-500 transition-colors">
                  Event Planner in Agra
                </Link>
              </li>
              <li>
                <Link href="/proposal-decoration-in-agra" className="text-gray-300 hover:text-red-500 transition-colors">
                  Proposal Decoration in Agra
                </Link>
              </li>
              <li>
                <Link href="/services/balloon-decoration/agra" className="text-gray-300 hover:text-red-500 transition-colors">
                  Balloon Decoration in Agra
                </Link>
              </li>
              <li>
                <Link href="/services/birthday-balloon-decoration/agra" className="text-gray-300 hover:text-red-500 transition-colors">
                  Birthday Party Decoration
                </Link>
              </li>
            </ul>

            <p className="text-xs font-semibold text-[#ff5722] uppercase tracking-wider mb-2">
              Delhi NCR Decor
            </p>
            <ul className="space-y-1.5 text-sm">
              <li>
                <Link href="/balloon-decoration-in-delhi" className="text-gray-300 hover:text-red-500 transition-colors">
                  Balloon Decoration in Delhi
                </Link>
              </li>
              <li>
                <Link href="/birthday-decoration-in-delhi" className="text-gray-300 hover:text-red-500 transition-colors">
                  Birthday Decoration in Delhi
                </Link>
              </li>
              <li>
                <Link href="/anniversary-decoration-in-delhi" className="text-gray-300 hover:text-red-500 transition-colors">
                  Anniversary Decoration in Delhi
                </Link>
              </li>
              <li>
                <Link href="/proposal-decoration-in-delhi" className="text-gray-300 hover:text-red-500 transition-colors">
                  Proposal Decoration in Delhi
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <FaPhone className="text-red-500 mr-3 mt-1" />
                <div className="flex flex-col">
                  <span className="text-gray-300">+91 7017520811</span>
                  <span className="text-gray-300">+91 9869950233</span>
                </div>
              </div>

              <div className="flex items-center">
                <FaEnvelope className="text-red-500 mr-3" />
                <span className="text-gray-300">vipabhi12345@gmail.com</span>
              </div>
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-red-500 mr-3 mt-1" />
                <span className="text-gray-300">
                  123 Event Street,<br />
                  Agra, Uttar Pradesh<br />
                  India - 283135
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Eventkro. All rights reserved. |
            <Link href="/privacy" className="text-red-500 hover:text-red-400 ml-1">
              Privacy Policy
            </Link> |
            <Link href="/terms" className="text-red-500 hover:text-red-400 ml-1">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}