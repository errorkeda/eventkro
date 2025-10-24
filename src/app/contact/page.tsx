'use client';

import { useState, FormEvent } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
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
      // ✅ Send data to backend API route
      const response = await fetch('/api/send-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          fromEmail: formData.email, // user’s email as "from"
          phone: formData.phone,
          city: formData.city,
          eventType: formData.eventType,
          eventDate: formData.eventDate,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (!result.success) throw new Error(result.message || 'Failed to send');

      setSubmitStatus({
        success: true,
        message:
          '✅ Thank you! Your booking request has been sent successfully. We’ll contact you shortly.',
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        city: '',
        eventType: '',
        eventDate: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus({
        success: false,
        message:
          '❌ There was an error sending your request. Please try again or contact us directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="bg-[#ff5722] py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Book Your Event</h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Fill out the form below to request a booking for your special event.
            Our team will get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Step-by-Step Booking Process
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form Section */}
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
              <h3 className="text-2xl font-bold text-center mb-6">
                Event Booking Form
              </h3>

              {submitStatus && (
                <div
                  className={`p-4 mb-6 rounded-lg text-center ${
                    submitStatus.success
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    label="Full Name *"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <InputField
                    label="Email Address *"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <InputField
                    label="Phone Number *"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <InputField
                    label="City / Village *"
                    name="city"
                    type="text"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                  <InputField
                    label="Event Type *"
                    name="eventType"
                    type="text"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                  />
                  <InputField
                    label="Event Date *"
                    name="eventDate"
                    type="date"
                    value={formData.eventDate}
                    onChange={handleChange}
                    required
                  />
                </div>

                <TextareaField
                  label="Additional Details"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 font-semibold rounded-lg text-white transition ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-[#ff5722] hover:bg-[#e64a19]'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Submit Booking Request'}
                </button>
              </form>
            </div>

            {/* Image Section */}
            <div className="flex justify-center items-center">
              <img
                src="/images/Event-Decoration-Process-Infographic.png"
                alt="Event Planning Process"
                className="w-full max-w-md lg:max-w-full rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Details */}
      <ContactDetails />

      <Footer />
    </main>
  );
}

/* ✅ Reusable Components */
function InputField({
  label,
  name,
  type,
  value,
  onChange,
  required = false,
}: {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-gray-700 font-medium mb-2">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff5722] focus:border-transparent"
      />
    </div>
  );
}

function TextareaField({
  label,
  name,
  value,
  onChange,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-gray-700 font-medium mb-2">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        rows={5}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ff5722] focus:border-transparent"
      />
    </div>
  );
}

/* ✅ Contact Info Section */
function ContactDetails() {
  const contacts = [
    {
      icon: <FaPhone className="text-[#ff5722] text-xl" />,
      title: 'Phone',
      lines: ['+91 7017520811', '+91 9869950233', 'Available 9:00 AM - 8:00 PM'],
    },
    {
      icon: <FaEnvelope className="text-[#ff5722] text-xl" />,
      title: 'Email',
      lines: ['vipabhi12345@gmail.com', 'We respond within 24 hours'],
    },
    {
      icon: <FaMapMarkerAlt className="text-[#ff5722] text-xl" />,
      title: 'Office Address',
      lines: ['123 Event Street, Agra Mandal Region', 'Uttar Pradesh, India'],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Contact Information
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {contacts.map((c, i) => (
            <div key={i} className="flex items-start">
              <div className="bg-[#ff5722]/10 p-3 rounded-full mr-4">{c.icon}</div>
              <div>
                <h3 className="font-bold text-lg">{c.title}</h3>
                {c.lines.map((line, j) => (
                  <p key={j} className="text-gray-600">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
