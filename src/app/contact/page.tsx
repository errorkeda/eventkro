'use client';

import { useState, FormEvent } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import emailjs from 'emailjs-com';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_p6p4e5o';
const EMAILJS_TEMPLATE_ID = 'template_4bvfa94';
const EMAILJS_USER_ID = 'W2EbmhEd8-oEx3vNW';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    eventType: '',
    eventDate: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        city: formData.city,
        event_type: formData.eventType,
        event_date: formData.eventDate,
        message: formData.message,
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
        message:
          'Thank you! Your booking request has been sent successfully. We will contact you shortly.',
      });

      setFormData({
        name: '',
        email: '',
        phone: '',
        city: 'Agra',
        eventType: 'Wedding',
        eventDate: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus({
        success: false,
        message:
          'There was an error sending your request. Please try again or contact us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="bg-[#ff5722] py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Event</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Fill out the form below to request a booking for your special event. Our team will get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* ✅ Step By Step Process Section */}
      <section className="bg-gradient-to-r from-[#ff7043] to-[#ff5722] py-16 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Step By Step Process
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-10">
              <div className="flex items-start">
                <div className="bg-white text-[#ff5722] font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Fill Out The Form</h3>
                  <p className="text-white/90">
                    Customers select their desired decoration type and provide event details through an online form.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white text-[#ff5722] font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Executive Call</h3>
                  <p className="text-white/90">
                    Our team contacts customers to gather more information, offer recommendations, and address any queries or concerns.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white text-[#ff5722] font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Decoration</h3>
                  <p className="text-white/90">
                    Our dedicated team creates and sets up the decorations according to the customer's chosen style and preferences.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white text-[#ff5722] font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Customer Satisfaction</h3>
                  <p className="text-white/90">
                    We ensure the customer's approval and happiness by providing a visually appealing and personalized decoration experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center items-center">
              <img
                src="/images/Event-Decoration-Process-Infographic.png"
                alt="Process Illustration"
                className="max-w-md w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6">Event Booking Form</h2>

              {submitStatus && (
                <div
                  className={`p-4 mb-6 rounded-lg ${
                    submitStatus.success
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff5722] focus:border-transparent"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff5722] focus:border-transparent"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff5722] focus:border-transparent"
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label htmlFor="city" className="block text-gray-700 font-medium mb-2">
                      City / Villages *
                    </label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      placeholder="Enter your city"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff5722] focus:border-transparent"
                    />
                  </div>

                  {/* Event Type */}
                  <div>
                    <label htmlFor="eventType" className="block text-gray-700 font-medium mb-2">
                      Event Type *
                    </label>
                    <input
                      type="text"
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      placeholder="Enter event type (e.g., Wedding, Birthday, etc.)"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff5722] focus:border-transparent"
                    />
                  </div>

                  {/* Event Date */}
                  <div>
                    <label htmlFor="eventDate" className="block text-gray-700 font-medium mb-2">
                      Event Date *
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff5722] focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="mt-6">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff5722] focus:border-transparent"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="mt-8">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex justify-center items-center"
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Booking Request'}
                  </button>
                </div>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-[#ff5722]/10 p-3 rounded-full mr-4">
                    <FaPhone className="text-[#ff5722] text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Phone</h3>
                    <p className="text-gray-600">+91 7017520811</p>
                    <p className="text-gray-600">Available 9:00 AM - 8:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#ff5722]/10 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-[#ff5722] text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="text-gray-600">vipabhi123@gmail.com</p>
                    <p className="text-gray-600">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#ff5722]/10 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-[#ff5722] text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Office Address</h3>
                    <p className="text-gray-600">
                      123 Event Street, Agra Mandal Region
                      <br />
                      Uttar Pradesh, India
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="font-bold text-lg mb-4">Service Areas</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-100 p-4 rounded-lg text-center">
                    <h4 className="font-bold">Agra</h4>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg text-center">
                    <h4 className="font-bold">Mathura</h4>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg text-center">
                    <h4 className="font-bold">Firozabad</h4>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg text-center">
                    <h4 className="font-bold">Mainpuri</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto mt-8">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">
                  How far in advance should I book my event?
                </h3>
                <p className="text-gray-600">
                  We recommend booking at least 3-6 months in advance for weddings and large events, and 1-2 months for smaller events to ensure availability.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">
                  Do you provide services outside Agra Mandal region?
                </h3>
                <p className="text-gray-600">
                  While we specialize in Agra, Mathura, Firozabad, and Mainpuri, we can accommodate events in nearby areas for an additional travel fee.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="font-bold text-lg mb-2">What is your cancellation policy?</h3>
                <p className="text-gray-600">
                  Cancellations made 30+ days before the event receive a full refund minus the booking deposit. Cancellations within 30 days are subject to our detailed policy which will be provided in your contract.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
