'use client';

import { useState, FormEvent } from 'react';
import emailjs from 'emailjs-com';

const EMAILJS_SERVICE_ID = 'service_p6p4e5o';
const EMAILJS_TEMPLATE_ID = 'template_4bvfa94';
const EMAILJS_USER_ID = 'W2EbmhEd8-oEx3vNW';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: 'Delhi NCR',
    eventType: 'Kids Birthday Decoration',
    eventDate: '',
    message: '',
    locality: 'Dwarka'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string; } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
        city: `${formData.city} (${formData.locality})`,
        event_type: formData.eventType,
        event_date: formData.eventDate,
        message: formData.message,
        to_email: 'vipabhi12345@gmail.com',
      };

      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_USER_ID);
      setSubmitStatus({ success: true, message: 'Thank you! Your decoration request has been received.' });
      setFormData({ name: '', email: '', phone: '', city: 'Delhi NCR', eventType: 'Kids Birthday Decoration', eventDate: '', message: '', locality: 'Dwarka' });
    } catch (err) {
      console.error('Error sending request:', err);
      setSubmitStatus({ success: false, message: 'Error submitting your request. Please call us directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="booking-form-section" className="bg-white border border-gray-150 rounded-2xl p-6 shadow-md relative">
      <h3 className="text-xl font-bold text-gray-900 mb-2">Book Your Setup</h3>
      <p className="text-gray-500 text-xs mb-6">Receive a custom theme design and budget quotation within 24 hours.</p>

      {submitStatus && (
        <div className={`p-4 mb-4 rounded-lg text-xs leading-relaxed ${submitStatus.success ? 'bg-green-50 text-green-700 border border-green-150' : 'bg-red-50 text-red-700 border border-red-150'}`} role="alert">
          {submitStatus.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-xs font-bold text-gray-700 mb-1">Full Name *</label>
          <input type="text" id="name" name="name" required value={formData.name} onChange={handleInputChange} className="w-full text-sm px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#ff5722] focus:border-transparent outline-none" placeholder="Your Name" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="phone" className="block text-xs font-bold text-gray-700 mb-1">Phone *</label>
            <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleInputChange} className="w-full text-sm px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#ff5722] focus:border-transparent outline-none" placeholder="98xxxxxx" />
          </div>
          <div>
            <label htmlFor="locality" className="block text-xs font-bold text-gray-700 mb-1">Locality *</label>
            <select id="locality" name="locality" value={formData.locality} onChange={handleInputChange} className="w-full text-sm px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#ff5722] focus:border-transparent outline-none bg-white">
              <option value="Dwarka">Dwarka</option>
              <option value="Rohini">Rohini</option>
              <option value="Janakpuri">Janakpuri</option>
              <option value="Saket">Saket</option>
              <option value="Laxmi Nagar">Laxmi Nagar</option>
              <option value="Noida">Noida</option>
              <option value="Gurgaon">Gurgaon</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-bold text-gray-700 mb-1">Email (Optional)</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full text-sm px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#ff5722] focus:border-transparent outline-none" placeholder="name@email.com" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="eventType" className="block text-xs font-bold text-gray-700 mb-1">Occasion</label>
            <select id="eventType" name="eventType" value={formData.eventType} onChange={handleInputChange} className="w-full text-sm px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#ff5722] focus:border-transparent outline-none bg-white">
              <option value="Kids Birthday Decoration">Kids Birthday</option>
              <option value="Adult Birthday Decoration">Adult Birthday</option>
              <option value="Surprise Birthday Decoration">Surprise Setup</option>
              <option value="Hotel Birthday Decoration">Hotel Room Setup</option>
              <option value="Terrace Birthday Decoration">Terrace Setup</option>
              <option value="Other Birthday Decoration">Other Event</option>
            </select>
          </div>
          <div>
            <label htmlFor="eventDate" className="block text-xs font-bold text-gray-700 mb-1">Event Date *</label>
            <input type="date" id="eventDate" name="eventDate" required value={formData.eventDate} onChange={handleInputChange} className="w-full text-sm px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#ff5722] focus:border-transparent outline-none bg-white" />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-xs font-bold text-gray-700 mb-1">Theme Details / Message</label>
          <textarea id="message" name="message" rows={3} value={formData.message} onChange={handleInputChange} className="w-full text-sm px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-[#ff5722] focus:border-transparent outline-none resize-none" placeholder="Mention color preferences, themes, or custom props..." />
        </div>

        <button type="submit" disabled={isSubmitting} className="w-full py-3 bg-[#ff5722] text-white rounded-lg font-bold text-sm hover:bg-[#e64a19] transition-all disabled:opacity-50">
          {isSubmitting ? 'Sending Request...' : 'Get Instant Quote'}
        </button>
      </form>
    </div>
  );
}
