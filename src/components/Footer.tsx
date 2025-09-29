'use client';

import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-red-500 mb-4">Eventkro</h3>
            <p className="text-gray-300 mb-4">
              Creating unforgettable moments with professional event management services across India.
            </p>
            <div className="flex space-x-4">
              {/* <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                <FaFacebook size={20} />
              </a> */}
              {/* <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                <FaTwitter size={20} />
              </a> */}
              <a
                href="https://www.instagram.com/eventkro?igsh=MXE0eHlzNzhrdzVwMw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-red-500 transition-colors"
              >
                <FaInstagram size={20} />
              </a>

              {/* <a href="#" className="text-gray-300 hover:text-red-500 transition-colors">
                <FaLinkedin size={20} />
              </a> */}
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
                <Link href="/contact" className="text-gray-300 hover:text-red-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">Wedding Planning</li>
              <li className="text-gray-300">Corporate Events</li>
              <li className="text-gray-300">Birthday Parties</li>
              <li className="text-gray-300">Cultural Events</li>
              <li className="text-gray-300">Catering Services</li>
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