'use client';

import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Head from 'next/head';

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms & Conditions | Your Website Name</title>
        <meta
          name="description"
          content="Read the Terms & Conditions of Your Website Name. Learn about the rules and guidelines for using our services."
        />
      </Head>

      <Header />

      {/* Hero Section */}
      <section className="bg-[#ff5722] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Please read these Terms & Conditions carefully before using our website and services.
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <main className="container mx-auto px-4 py-16 space-y-12">

        <section>
          <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
          <p>
            By accessing or using our website and services, you agree to comply with these Terms & Conditions. If you do not agree, please do not use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Use of Services</h2>
          <p>
            You agree to use our services for lawful purposes only and not engage in any activity that may harm our website, users, or business.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">User Responsibilities</h2>
          <p>
            Users are responsible for providing accurate information and maintaining confidentiality of any login credentials or personal accounts.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
          <p>
            All content, designs, logos, and materials on this website are the property of the website owner and protected under intellectual property laws.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
          <p>
            We are not liable for any direct, indirect, or incidental damages arising from your use of our website or services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the content or practices of these external websites.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
          <p>
            We reserve the right to update or modify these Terms & Conditions at any time. All changes will be posted on this page with the updated date.
          </p>
        </section>

        <p className="text-gray-600 mt-8">Last updated: September 25, 2025</p>
      </main>

      {/* CTA Section */}
      <section className="py-16 bg-[#ff5722] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Have Questions?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Contact us for more information regarding our Terms & Conditions.
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
