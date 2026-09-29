import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t, lang } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('https://formspree.io/f/xpwrqvkz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', phone: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      }
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t.contact.address,
      details: [t.contact.addressValue],
      subtext: 'Registered Office',
    },
    {
      icon: Phone,
      title: t.contact.phone,
      details: ['+91 88823 50019', '+91 96501 20009'],
      subtext: t.contact.directHelpline,
    },
    {
      icon: Mail,
      title: t.contact.email,
      details: [t.contact.emailValue],
      subtext: t.contact.promptResponse,
    },
    {
      icon: Clock,
      title: t.contact.hours,
      details: [t.contact.hoursValue],
      subtext: t.contact.sundayClosed,
    },
  ];

  return (
    <section id="contact" className="py-12 bg-white dark:bg-slate-950 border-b-4 border-[#FF9933]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Gov Style) */}
        <div className="mb-8 border-b-2 border-gray-300 dark:border-slate-700 pb-2 flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#003366] dark:text-blue-100 uppercase tracking-tight" style={{ fontFamily: 'Arial, sans-serif' }}>
            {t.contact.title}
          </h2>
          <div className="hidden sm:block h-1 w-24 bg-[#990000]"></div>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-gray-700 dark:text-gray-300 text-lg font-medium p-4 bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-700">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Column: Rigid Contact Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div 
                  key={index}
                  className="bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-700 p-5 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3 border-b border-gray-200 dark:border-slate-700 pb-2">
                    <div className="bg-[#003366] p-2">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-[#990000] dark:text-red-400 uppercase text-sm tracking-wider">
                      {info.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-1 text-sm font-semibold text-gray-800 dark:text-gray-200">
                    {info.details.map((detail, idx) => (
                      <p key={idx}>{detail}</p>
                    ))}
                  </div>
                  
                  <p className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase mt-3 pt-2 border-t border-gray-200 dark:border-slate-700">
                    {info.subtext}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Column: Rigid Contact Form */}
          <div className="bg-gray-100 dark:bg-slate-900 border border-gray-300 dark:border-slate-700 shadow-sm">
            <div className="bg-[#003366] p-4 border-b-4 border-[#FF9933]">
              <h3 className="text-xl font-bold text-white uppercase tracking-wider">{t.contact.formTitle}</h3>
              <p className="text-gray-200 text-sm mt-1">
                {t.contact.formSubtitle}
              </p>
            </div>

            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-bold text-[#003366] dark:text-blue-200 uppercase tracking-wide mb-1">
                    {t.contact.name} <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.contact.namePlaceholder}
                    className="w-full px-3 py-2 bg-white dark:bg-slate-950 border border-gray-400 dark:border-slate-600 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-[#003366] focus:ring-1 focus:ring-[#003366] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-[#003366] dark:text-blue-200 uppercase tracking-wide mb-1">
                    {t.contact.phoneNumber} <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder={t.contact.phonePlaceholder}
                    className="w-full px-3 py-2 bg-white dark:bg-slate-950 border border-gray-400 dark:border-slate-600 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-[#003366] focus:ring-1 focus:ring-[#003366] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-[#003366] dark:text-blue-200 uppercase tracking-wide mb-1">
                    {t.contact.email} <span className="text-xs text-gray-500 normal-case ml-1">({t.contact.emailOptional})</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.contact.emailPlaceholder || 'your.email@example.com'}
                    className="w-full px-3 py-2 bg-white dark:bg-slate-950 border border-gray-400 dark:border-slate-600 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-[#003366] focus:ring-1 focus:ring-[#003366] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-[#003366] dark:text-blue-200 uppercase tracking-wide mb-1">
                    {t.contact.message} <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={t.contact.messagePlaceholder}
                    className="w-full px-3 py-2 bg-white dark:bg-slate-950 border border-gray-400 dark:border-slate-600 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-[#003366] focus:ring-1 focus:ring-[#003366] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3 px-6 bg-[#990000] hover:bg-[#7a0000] text-white font-bold uppercase tracking-widest flex items-center justify-center gap-2 border-b-4 border-[#5c0000] transition-colors cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                >
                  <span>{status === 'sending' ? (lang === 'hi' ? 'भेज रहे हैं...' : 'SENDING...') : t.contact.submit}</span>
                  {status !== 'sending' && <Send className="w-4 h-4" />}
                </button>

                {status === 'success' && (
                  <div className="bg-green-100 border border-green-400 text-green-800 p-2 text-sm font-bold text-center mt-2">
                    ✅ {t.contact.thankYou}
                  </div>
                )}
                {status === 'error' && (
                  <div className="bg-red-100 border border-red-400 text-red-800 p-2 text-sm font-bold text-center mt-2">
                    {lang === 'hi' ? '❌ कुछ गड़बड़ हुई। कृपया पुनः प्रयास करें।' : '❌ Something went wrong. Please try again.'}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
