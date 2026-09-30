import React from 'react';
import { Award, Shield, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t, lang } = useLanguage();

  return (
    <section id="about" className="py-12 bg-white dark:bg-slate-950 border-b-4 border-[#FF9933]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Gov Style) */}
        <div className="mb-8 border-b-2 border-gray-300 dark:border-slate-700 pb-2 flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#003366] dark:text-blue-100 uppercase tracking-tight" style={{ fontFamily: 'Arial, sans-serif' }}>
            {t.about.title}
          </h2>
          <div className="hidden sm:block h-1 w-24 bg-[#990000]"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Column: Text Content */}
          <div className="space-y-6">
            <p className="text-gray-800 dark:text-gray-200 text-base sm:text-lg leading-relaxed font-medium">
              {t.about.description1}
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base leading-relaxed p-4 bg-gray-50 dark:bg-slate-900 border-l-4 border-[#003366] dark:border-blue-500">
              {t.about.description2}
            </p>
            
            <div className="pt-4">
              <h3 className="text-lg font-bold text-[#990000] dark:text-red-400 uppercase mb-4 border-b border-gray-200 dark:border-slate-700 pb-2">
                {lang === 'hi' ? 'मुख्य विशेषताएं' : 'Core Capabilities'}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  lang === 'hi' ? 'औद्योगिक विद्युतीकरण' : 'Industrial Electrification',
                  lang === 'hi' ? 'सरकारी अनुबंध (PVVNL/UPPCL)' : 'Govt Contracts (PVVNL/UPPCL)',
                  lang === 'hi' ? 'सबस्टेशन स्थापना' : 'Substation Installation',
                  lang === 'hi' ? 'HT/LT लाइन कार्य' : 'HT/LT Line Work',
                  lang === 'hi' ? 'विद्युत सुरक्षा ऑडिट' : 'Electrical Safety Audits',
                  lang === 'hi' ? '24/7 रखरखाव सहायता' : '24/7 Maintenance Support'
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-gray-800 dark:text-gray-200 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#FF9933] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Rigid Stats Table */}
          <div className="bg-gray-100 dark:bg-slate-900 border border-gray-300 dark:border-slate-700 shadow-sm">
            <div className="bg-[#003366] text-white p-3 border-b-4 border-[#FF9933]">
              <h3 className="text-lg font-bold uppercase text-center tracking-wider">
                {lang === 'hi' ? 'कंपनी विवरण' : 'Company Profile'}
              </h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-300 dark:divide-slate-700 border-b border-gray-300 dark:border-slate-700">
              
              <div className="p-6 flex flex-col items-center text-center hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                <div className="bg-[#990000] text-white p-3 mb-3">
                  <Calendar className="w-6 h-6" />
                </div>
                <h4 className="text-xl sm:text-2xl font-black text-[#003366] dark:text-white mb-1">{t.about.stats.years}</h4>
                <p className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase">{t.about.stats.experience}</p>
              </div>
              
              <div className="p-6 flex flex-col items-center text-center hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                <div className="bg-[#990000] text-white p-3 mb-3">
                  <Award className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-black text-[#003366] dark:text-white mb-1">A-CLASS</h4>
                <p className="text-sm font-bold text-gray-600 dark:text-gray-400 uppercase">{t.about.stats.license}</p>
              </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-300 dark:divide-slate-700">
              
              <div className="p-6 flex flex-col items-center text-center hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                <div className="bg-[#990000] text-white p-3 mb-3">
                  <Shield className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-black text-[#003366] dark:text-white mb-1">GSTIN</h4>
                <p className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase">{t.about.stats.gst}</p>
              </div>
              
              <div className="p-6 flex flex-col items-center text-center hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                <div className="bg-[#990000] text-white p-3 mb-3">
                  <MapPin className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-black text-[#003366] dark:text-white mb-1">LONI, UP</h4>
                <p className="text-xs font-bold text-gray-600 dark:text-gray-400 uppercase">{t.about.stats.location}</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
