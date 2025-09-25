'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Head from 'next/head';

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Your Website Name</title>
        <meta
          name="description"
          content="Read the Privacy Policy of Your Website Name. Learn how we collect, use, and protect your personal information."
        />
      </Head>

      <Header />

      {/* Hero Section */}
      <section className="bg-[#ff5722] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Your privacy matters to us. Learn how we collect, use, and protect your information.
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <main className="container mx-auto px-4 py-16 space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
          <p>
            We may collect personal information such as your name, email address, and any details you provide through forms on our website.
            We also collect non-personal information like browser type, IP address, and website usage data.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
          <p>
            Information collected is used to provide and improve our services, respond to inquiries, send important updates, and personalize your experience.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Data Protection</h2>
          <p>
            We implement technical and organizational measures to protect your data against unauthorized access, disclosure, or alteration.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Cookies</h2>
          <p>
            Our website uses cookies to enhance browsing experience. You can manage or disable cookies in your browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
          <p>
            We may use third-party services, such as analytics or advertising partners, which collect information according to their privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
          <p>
            You have the right to access, correct, or delete your personal information. You may also unsubscribe from communications at any time.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically. All changes will be posted on this page with the updated date.
          </p>
        </section>

        <p className="text-gray-600 mt-8">Last updated: September 25, 2025</p>
      </main>

      {/* CTA Section */}
      <section className="py-16 bg-[#ff5722] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Have Questions?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Contact us for more information about our privacy practices and policies.
          </p>
          <a
            href="/contact"
            className="bg-white text-[#ff5722] hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md"
          >
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
