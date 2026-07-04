'use client';

import { useState, FormEvent, ChangeEvent } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FaqAccordion from '../../components/FaqAccordion';
import emailjs from 'emailjs-com';
import Link from 'next/link';
import { 
  FaCheck, 
  FaHandshake, 
  FaChartLine, 
  FaCoins, 
  FaStar, 
  FaUserCheck, 
  FaAddressCard,
  FaArrowRight,
  FaArrowDown
} from 'react-icons/fa';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_p6p4e5o';
const EMAILJS_TEMPLATE_ID = 'template_4bvfa94';
const EMAILJS_USER_ID = 'W2EbmhEd8-oEx3vNW';

// FAQ Items
const partnerFaqItems = [
  {
    question: 'How do I become an Eventkro Partner?',
    answer:
      'You can join by filling out the Partner Registration Form on this page. Once submitted, our partner verification team will review your business profile, portfolio, and experience, and contact you within 2-3 business days.',
  },
  {
    question: 'Is there any registration fee?',
    answer:
      'No, there is absolutely zero registration fee to join the Eventkro Partner Network. We want to make it easy for genuine event professionals to partner with us.',
  },
  {
    question: 'Do I have to pay monthly charges?',
    answer:
      'No, Eventkro does not charge any monthly subscription or membership fees. You only pay a commission after a booking is successfully confirmed.',
  },
  {
    question: 'How will I receive customer leads?',
    answer:
      'Once your profile is verified, we will share genuine, high-intent event inquiries from your city directly with you via phone or WhatsApp.',
  },
  {
    question: 'Which cities do you cover?',
    answer:
      'Currently, we operate and provide customer leads in Agra, Mathura, Firozabad, Shikohabad, Mainpuri, and nearby cities in the Agra Mandal region.',
  },
  {
    question: 'Can photographers join?',
    answer:
      'Yes! We welcome professional photographers, videographers, and pre-wedding shoot specialists from Agra, Mathura, Firozabad, and surrounding areas to join our network.',
  },
  {
    question: 'Can caterers join?',
    answer:
      'Absolutely. We are looking for experienced caterers who can provide high-quality food and beverage services for weddings, birthday parties, and corporate events.',
  },
  {
    question: 'How does the commission model work?',
    answer:
      'Our commission model is simple and risk-free: you only pay a pre-agreed percentage of the booking amount after you successfully secure and complete the event booking through our leads.',
  },
];

// Categories
const categories = [
  'Birthday Decorators',
  'Wedding Decorators',
  'Balloon Decorators',
  'Photographers',
  'Videographers',
  'Caterers',
  'DJ',
  'Sound & Light Providers',
  'Tent House',
  'Luxury Cars',
  'Florists',
  'Mehendi Artists',
  'Makeup Artists',
  'Mascot Characters',
  'Corporate Event Companies',
  'Event Planners',
  'Anchor / Emcee',
  'Live Band',
  'Others'
];

// Cities
const cities = [
  'Agra',
  'Mathura',
  'Firozabad',
  'Shikohabad',
  'Mainpuri',
  'Others'
];

// Experience Options
const experienceOptions = [
  'Less than 1 year',
  '1 to 3 years',
  '3 to 5 years',
  'More than 5 years'
];

export default function PartnerPage() {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    phone: '',
    whatsapp: '',
    email: '',
    city: 'Agra',
    category: 'Birthday Decorators',
    experience: '1 to 3 years',
    serviceAreas: '',
    portfolio: '',
    businessDetails: '',
    agreeToContact: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const scrollToForm = () => {
    const element = document.getElementById('registration-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeToContact) {
      setSubmitStatus({
        success: false,
        message: 'You must agree to be contacted by Eventkro to register.',
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Format all partner details into a structured text message
    const formattedMessage = `
Subject: New Partner Registration - Eventkro

Partner Registration Details:
----------------------------------------------
Full Name: ${formData.name}
Company Name: ${formData.companyName || 'N/A'}
Mobile Number: ${formData.phone}
WhatsApp Number: ${formData.whatsapp || 'N/A'}
Email Address: ${formData.email || 'N/A'}
City: ${formData.city}
Category: ${formData.category}
Years of Experience: ${formData.experience}
Service Areas: ${formData.serviceAreas || 'N/A'}
Portfolio / Website / Instagram: ${formData.portfolio || 'N/A'}
Tell Us About Your Business: ${formData.businessDetails || 'N/A'}
Agreement: Agreed to terms & contact consent (Yes)
----------------------------------------------
`;

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email || 'partner@eventkro.in',
        from_phone: formData.phone,
        city: formData.city,
        event_type: formData.category,
        event_date: 'N/A - Partner Registration',
        message: formattedMessage,
        subject: 'New Partner Registration - Eventkro',
        to_email: 'vipabhi123@gmail.com',
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_USER_ID
      );

      setSubmitStatus({
        success: true,
        message: 'Thank you! Your partner registration request has been submitted successfully. Our team will review your details and contact you shortly.',
      });

      // Reset form
      setFormData({
        name: '',
        companyName: '',
        phone: '',
        whatsapp: '',
        email: '',
        city: 'Agra',
        category: 'Birthday Decorators',
        experience: '1 to 3 years',
        serviceAreas: '',
        portfolio: '',
        businessDetails: '',
        agreeToContact: false,
      });
    } catch (error) {
      console.error('Error sending partner registration email:', error);
      setSubmitStatus({
        success: false,
        message: 'There was an error submitting your registration. Please try again or contact us directly at vipabhi12345@gmail.com.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-white min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-[#ff5722] py-24 sm:py-32 text-white overflow-hidden">
        {/* Background Decorative Circles */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight animate-fade-in leading-tight">
            Partner With Eventkro
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed text-white/90 animate-fade-in-delay">
            Grow your event business with genuine event inquiries from Agra, Mathura, Firozabad, Shikohabad and nearby cities.
          </p>
          <div className="animate-fade-in-delay-2">
            <button 
              onClick={scrollToForm}
              className="bg-white text-[#ff5722] hover:bg-gray-100 font-bold text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition duration-300 inline-block"
            >
              Become Our Partner
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Partner With Eventkro?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get more business, build local authority, and establish a long-term partnership with zero upfront risk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[#ff5722]/30 transition-all duration-300 group">
              <div className="bg-[#ff5722]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#ff5722] transition-colors duration-300">
                <FaChartLine className="text-[#ff5722] text-2xl group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Genuine Customer Leads</h3>
              <p className="text-gray-600 leading-relaxed">
                Receive directly verified, high-intent inquiries from local clients searching for services in your area.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[#ff5722]/30 transition-all duration-300 group">
              <div className="bg-[#ff5722]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#ff5722] transition-colors duration-300">
                <FaUserCheck className="text-[#ff5722] text-2xl group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">No Registration Fee</h3>
              <p className="text-gray-600 leading-relaxed">
                Registering and listing your services on our network is completely free of charge. No setup costs.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[#ff5722]/30 transition-all duration-300 group">
              <div className="bg-[#ff5722]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#ff5722] transition-colors duration-300">
                <FaAddressCard className="text-[#ff5722] text-2xl group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">No Monthly Subscription</h3>
              <p className="text-gray-600 leading-relaxed">
                There are absolutely no monthly recurring charges, membership fees, or subscription plans to worry about.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[#ff5722]/30 transition-all duration-300 group">
              <div className="bg-[#ff5722]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#ff5722] transition-colors duration-300">
                <FaCoins className="text-[#ff5722] text-2xl group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Commission After Booking</h3>
              <p className="text-gray-600 leading-relaxed">
                Pay a small pre-agreed percentage only after you secure and successfully complete an event booking.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[#ff5722]/30 transition-all duration-300 group">
              <div className="bg-[#ff5722]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#ff5722] transition-colors duration-300">
                <FaHandshake className="text-[#ff5722] text-2xl group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Long-Term Business Partnership</h3>
              <p className="text-gray-600 leading-relaxed">
                We focus on building strong relationships with selected vendors, providing consistent bookings year-round.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[#ff5722]/30 transition-all duration-300 group">
              <div className="bg-[#ff5722]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#ff5722] transition-colors duration-300">
                <FaStar className="text-[#ff5722] text-2xl group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Grow Your Business With Eventkro</h3>
              <p className="text-gray-600 leading-relaxed">
                Enhance your brand visibility and service bookings in neighboring cities like Agra, Mathura, and Firozabad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Can Join Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Who Can Join the Eventkro Network?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We welcome event professionals from various specialties to offer top-notch experiences to our clients.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <div 
                key={category}
                className="bg-gray-50 border border-gray-100 p-4 rounded-xl flex items-center gap-3 hover:bg-[#ff5722]/5 hover:border-[#ff5722]/20 transition-all duration-300"
              >
                <div className="bg-[#ff5722] text-white rounded-full p-1.5 shrink-0">
                  <FaCheck className="text-xs" />
                </div>
                <span className="font-semibold text-gray-800 text-sm sm:text-base">{category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get started in four simple steps and scale up your event business.
            </p>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:grid grid-cols-4 gap-8 relative mt-12">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative text-center flex flex-col items-center">
              <div className="absolute -top-6 bg-[#ff5722] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow">
                1
              </div>
              <h3 className="font-bold text-gray-900 text-lg mt-4 mb-2">Register With Eventkro</h3>
              <p className="text-gray-600 text-sm">Fill out the quick partner registration form with your business information.</p>
              <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 z-20 text-gray-400">
                <FaArrowRight size={20} />
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative text-center flex flex-col items-center">
              <div className="absolute -top-6 bg-[#ff5722] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow">
                2
              </div>
              <h3 className="font-bold text-gray-900 text-lg mt-4 mb-2">We Verify Your Details</h3>
              <p className="text-gray-600 text-sm">Our partner verification team reviews your portfolio, experience, and profile.</p>
              <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 z-20 text-gray-400">
                <FaArrowRight size={20} />
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative text-center flex flex-col items-center">
              <div className="absolute -top-6 bg-[#ff5722] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow">
                3
              </div>
              <h3 className="font-bold text-gray-900 text-lg mt-4 mb-2">Receive Customer Leads</h3>
              <p className="text-gray-600 text-sm">Start receiving verified, direct leads from event clients in your city.</p>
              <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 z-20 text-gray-400">
                <FaArrowRight size={20} />
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative text-center flex flex-col items-center">
              <div className="absolute -top-6 bg-[#ff5722] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow">
                4
              </div>
              <h3 className="font-bold text-gray-900 text-lg mt-4 mb-2">Complete Events & Grow</h3>
              <p className="text-gray-600 text-sm">Deliver great service, finalize bookings, and build a long-term relation.</p>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden flex flex-col gap-10 mt-12 max-w-md mx-auto">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center relative">
              <div className="bg-[#ff5722] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-base shadow mb-4">
                1
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Register With Eventkro</h3>
              <p className="text-gray-600 text-sm">Fill out the quick partner registration form with your business information.</p>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400">
                <FaArrowDown size={18} />
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center relative">
              <div className="bg-[#ff5722] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-base shadow mb-4">
                2
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">We Verify Your Details</h3>
              <p className="text-gray-600 text-sm">Our partner verification team reviews your portfolio, experience, and profile.</p>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400">
                <FaArrowDown size={18} />
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center relative">
              <div className="bg-[#ff5722] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-base shadow mb-4">
                3
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Receive Customer Leads</h3>
              <p className="text-gray-600 text-sm">Start receiving verified, direct leads from event clients in your city.</p>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400">
                <FaArrowDown size={18} />
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="bg-[#ff5722] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-base shadow mb-4">
                4
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">Complete Events & Grow</h3>
              <p className="text-gray-600 text-sm">Deliver great service, finalize bookings, and build a long-term relation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Registration Form Section */}
      <section id="registration-form" className="py-20 bg-white scroll-mt-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 sm:p-10">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-center text-gray-900">
              Partner Registration Form
            </h2>
            <p className="text-gray-600 text-center mb-4 text-sm sm:text-base leading-relaxed">
              We are currently expanding our trusted vendor network across Agra, Mathura, Firozabad, Shikohabad and nearby cities. If you're passionate about delivering quality event services, we'd love to partner with you.
            </p>
            <p className="text-gray-500 text-center mb-8 text-xs sm:text-sm">
              Submit your registration details to start growing your business with Eventkro.
            </p>

            {submitStatus && (
              <div
                className={`p-4 mb-8 rounded-lg text-sm sm:text-base ${
                  submitStatus.success
                    ? 'bg-green-50 border border-green-200 text-green-800'
                    : 'bg-red-50 border border-red-200 text-red-800'
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2 text-sm">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff5722] focus:border-transparent transition text-sm"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label htmlFor="companyName" className="block text-gray-700 font-semibold mb-2 text-sm">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Enter your brand or business name"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff5722] focus:border-transparent transition text-sm"
                  />
                </div>

                {/* Mobile Number */}
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2 text-sm">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="10-digit mobile number"
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit mobile number"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff5722] focus:border-transparent transition text-sm"
                  />
                </div>

                {/* WhatsApp Number */}
                <div>
                  <label htmlFor="whatsapp" className="block text-gray-700 font-semibold mb-2 text-sm">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="10-digit WhatsApp number"
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit mobile number"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff5722] focus:border-transparent transition text-sm"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 text-sm">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff5722] focus:border-transparent transition text-sm"
                  />
                </div>

                {/* City */}
                <div>
                  <label htmlFor="city" className="block text-gray-700 font-semibold mb-2 text-sm">
                    City *
                  </label>
                  <select
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff5722] focus:border-transparent transition text-sm bg-white"
                  >
                    {cities.map((city) => (
                      <option key={city} value={city}>
                        {city}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Category */}
                <div>
                  <label htmlFor="category" className="block text-gray-700 font-semibold mb-2 text-sm">
                    Category *
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff5722] focus:border-transparent transition text-sm bg-white"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Experience */}
                <div>
                  <label htmlFor="experience" className="block text-gray-700 font-semibold mb-2 text-sm">
                    Years of Experience *
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff5722] focus:border-transparent transition text-sm bg-white"
                  >
                    {experienceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Service Areas */}
              <div>
                <label htmlFor="serviceAreas" className="block text-gray-700 font-semibold mb-2 text-sm">
                  Service Areas
                </label>
                <textarea
                  id="serviceAreas"
                  name="serviceAreas"
                  value={formData.serviceAreas}
                  onChange={handleChange}
                  rows={2}
                  placeholder="E.g., Sanjay Place, Kamla Nagar Agra, Sadar Bazar Agra, Mathura Cantt, Vrindavan, Firozabad City, Shikohabad..."
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff5722] focus:border-transparent transition text-sm"
                ></textarea>
              </div>

              {/* Portfolio Link */}
              <div>
                <label htmlFor="portfolio" className="block text-gray-700 font-semibold mb-2 text-sm">
                  Portfolio / Website / Instagram Link
                </label>
                <textarea
                  id="portfolio"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  rows={2}
                  placeholder="Link to your recent work, website, Instagram page, or Google Drive portfolio"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff5722] focus:border-transparent transition text-sm"
                ></textarea>
              </div>

              {/* Tell Us About Your Business */}
              <div>
                <label htmlFor="businessDetails" className="block text-gray-700 font-semibold mb-2 text-sm">
                  Tell Us About Your Business
                </label>
                <textarea
                  id="businessDetails"
                  name="businessDetails"
                  value={formData.businessDetails}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Describe the services you offer, crew size, specialty decor styles, or details you want us to know..."
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff5722] focus:border-transparent transition text-sm"
                ></textarea>
              </div>

              {/* Checkbox agreement */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="agreeToContact"
                    name="agreeToContact"
                    type="checkbox"
                    checked={formData.agreeToContact}
                    onChange={handleCheckboxChange}
                    required
                    className="h-4 w-4 text-[#ff5722] focus:ring-[#ff5722] border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="agreeToContact" className="font-medium text-gray-700">
                    I agree to be contacted by Eventkro regarding partnership opportunities. *
                  </label>
                </div>
              </div>

              {/* Submit button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary font-bold py-3.5 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition duration-300 text-center flex justify-center items-center gap-2"
                >
                  {isSubmitting ? 'Submitting Registration...' : 'Submit Registration'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Have doubts? Find quick answers about Eventkro partnerships.
            </p>
          </div>
          <FaqAccordion items={partnerFaqItems} defaultOpenIndex={0} />
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-[#ff5722] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready To Grow Your Event Business?
          </h2>
          <p className="text-lg mb-8 text-white/95 leading-relaxed">
            Join the Eventkro Partner Network today and receive genuine event inquiries from your city.
          </p>
          <button 
            onClick={scrollToForm}
            className="bg-white text-[#ff5722] hover:bg-gray-100 font-bold py-3 px-8 rounded-lg shadow-md transition-all duration-300"
          >
            Become Our Partner
          </button>
        </div>
      </section>

      {/* Internal Linking Section */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h3 className="font-semibold text-gray-800 mb-6 text-base uppercase tracking-wider">
            Popular Event Planning Resources
          </h3>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
            <Link href="/services/birthday-balloon-decoration/agra" className="text-gray-600 hover:text-[#ff5722] transition-colors font-medium">
              Birthday Decoration
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/wedding-planner-in-agra" className="text-gray-600 hover:text-[#ff5722] transition-colors font-medium">
              Wedding Planner
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/proposal-decoration-in-agra" className="text-gray-600 hover:text-[#ff5722] transition-colors font-medium">
              Proposal Decoration
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/car-boot-decoration-in-agra" className="text-gray-600 hover:text-[#ff5722] transition-colors font-medium">
              Car Boot Decoration
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/contact" className="text-gray-600 hover:text-[#ff5722] transition-colors font-medium">
              Contact Us
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/" className="text-gray-600 hover:text-[#ff5722] transition-colors font-medium">
              Homepage
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
