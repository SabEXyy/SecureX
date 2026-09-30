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
                className="inline-flex justify-center items-center gap-2 px-8 py-3 bg-[#25D366] text-white font-extrabold uppercase tracking-wide border-b-4 border-[#1ebe57] hover:bg-[#1ebe57] transition-colors cursor-pointer"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
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
