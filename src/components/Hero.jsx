import React from 'react';
import { Phone, CheckCircle, Award, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t, lang } = useLanguage();

  return (
    <section className="relative bg-[#003366] text-white overflow-hidden border-b-8 border-[#FF9933] pt-8 pb-12 sm:pt-16 sm:pb-20">
      {/* Background Pattern - Grid/Industrial feel */}
      <div 
        className="absolute inset-0 opacity-10" 
        style={{ backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-8 flex flex-col items-start space-y-6">
            
            {/* Official Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[#990000] border-l-4 border-[#FF9933] shadow-md">
              <Award className="w-5 h-5 text-white" />
              <span className="text-white font-bold tracking-wide uppercase text-xs sm:text-sm">
                {lang === 'hi' ? 'उत्तर प्रदेश सरकार द्वारा मान्यता प्राप्त' : 'Recognized by Govt. of Uttar Pradesh'}
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white uppercase leading-tight" style={{ fontFamily: 'Arial, sans-serif' }}>
              {t.hero.title}
            </h2>
            
            <h3 className="text-xl sm:text-2xl font-bold text-[#FF9933] uppercase tracking-wide border-b-2 border-[#FF9933] pb-2 inline-block">
              {t.hero.subtitle}
            </h3>
            
            <p className="text-base sm:text-lg text-gray-200 max-w-2xl font-medium leading-relaxed bg-[#002244]/50 p-4 border-l-4 border-gray-400">
              {t.hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
              <a
                href="https://wa.me/918882350019?text=Hello%2C%20I%20am%20interested%20in%20your%20electrical%20contracting%20services.%20Please%20share%20more%20details."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex justify-center items-center gap-2 px-8 py-3 bg-[#FF9933] text-[#003366] font-extrabold uppercase tracking-wide border-b-4 border-[#cc7a29] hover:bg-[#e68a2e] transition-colors cursor-pointer"
              >
                <Phone className="w-5 h-5" />
                {t.hero.cta1}
              </a>
              <a
                href="#services"
                className="inline-flex justify-center items-center px-8 py-3 bg-white text-[#003366] font-extrabold uppercase tracking-wide border-b-4 border-gray-300 hover:bg-gray-100 transition-colors cursor-pointer"
              >
                {t.hero.cta2}
              </a>
            </div>
          </div>

          {/* Right Column - Official Stats/Info Box */}
          <div className="lg:col-span-4 mt-8 lg:mt-0">
            <div className="bg-white dark:bg-slate-800 border-t-8 border-[#990000] shadow-[0_0_15px_rgba(0,0,0,0.2)]">
              <div className="bg-gray-100 dark:bg-slate-700 border-b border-gray-300 dark:border-slate-600 p-3 text-center">
                <h4 className="font-bold text-[#003366] dark:text-white uppercase text-sm">
                  {lang === 'hi' ? 'महत्वपूर्ण जानकारी' : 'Important Information'}
                </h4>
              </div>
              
              <div className="p-0">
                <ul className="flex flex-col">
                  <li className="flex items-start gap-3 p-4 border-b border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700/50">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white text-sm">{lang === 'hi' ? 'लाइसेंस संख्या' : 'License Number'}</p>
                      <p className="text-[#990000] dark:text-red-400 font-mono font-bold">GD00001264</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 p-4 border-b border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700/50">
                    <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white text-sm">GSTIN</p>
                      <p className="text-[#003366] dark:text-blue-300 font-mono font-bold">09AFFPC7695R1ZI</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3 p-4 border-b border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700/50">
                    <Award className="w-5 h-5 text-[#FF9933] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-gray-900 dark:text-white text-sm">{lang === 'hi' ? 'पंजीकरण' : 'Registration'}</p>
                      <p className="text-gray-700 dark:text-gray-300 text-sm font-semibold">Eligible for PVVNL, UPPCL, GeM</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#003366] p-3 text-center">
                <p className="text-white text-xs font-bold uppercase tracking-wider">
                  {lang === 'hi' ? '2017 से कार्यरत' : 'Operating Since 2017'}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
