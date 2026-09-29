import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t, lang } = useLanguage();

  const quickLinks = [
    { name: t.nav.about, href: '#about' },
    { name: t.nav.services, href: '#services' },
    { name: t.nav.gallery, href: '#gallery' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <footer className="bg-[#002244] text-white pt-10 border-t-8 border-[#FF9933]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-gray-600">
          
          {/* Column 1: Business Details */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Versha Associates Logo" className="w-12 h-12 object-contain bg-white border-2 border-[#FF9933] rounded-full p-0.5" />
              <h3 className="text-xl font-bold tracking-tight uppercase" style={{ fontFamily: 'Arial, sans-serif' }}>
                Versha Associates
              </h3>
            </div>
            <p className="text-sm font-bold text-[#FF9933] uppercase">
              {t.footer.tagline}
            </p>
            <p className="text-sm text-gray-300 leading-relaxed">
              {t.footer.description}
            </p>
            <div className="inline-block px-3 py-1 bg-[#990000] border-l-4 border-white text-xs font-bold text-white uppercase tracking-wider">
              GSTIN: 09AFFPC7695R1ZI
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="md:pl-6 space-y-4">
            <h4 className="text-lg font-bold text-[#FF9933] uppercase border-b-2 border-[#990000] pb-2 inline-block">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white hover:underline transition-colors duration-200 flex items-center gap-2 text-sm font-bold uppercase"
                  >
                    <span className="w-2 h-2 bg-[#FF9933]"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-[#FF9933] uppercase border-b-2 border-[#990000] pb-2 inline-block">
              {t.footer.contactUs}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FF9933] shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">
                  E-287/3, Uttranchal Colony, Gali No-3, Loni, Ghaziabad, UP — 201102
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#FF9933] shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300 font-mono">
                  +91 88823 50019 <br />
                  +91 96501 20009
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
          <p>
            &copy; {new Date().getFullYear()} Versha Associates. {lang === 'hi' ? 'सर्वाधिकार सुरक्षित' : 'All Rights Reserved'}.
          </p>
          <p>
            {lang === 'hi' ? 'लाइसेंस सं:' : 'License No:'} <span className="text-white">GD00001264</span> (UP GOVT)
          </p>
        </div>
      </div>
    </footer>
  );
}
