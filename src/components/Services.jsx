import React from 'react';
import { Plug, Building2, FileText, Factory, Wrench, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();
  const icons = [Plug, Building2, FileText, Factory, Wrench];

  const services = t.services.items.map((item, index) => ({
    icon: icons[index],
    title: item.title,
    description: item.description,
    badge: item.badge,
  }));

  return (
    <section id="services" className="py-12 bg-gray-100 dark:bg-slate-900 border-b-4 border-[#003366] dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Gov Style) */}
        <div className="mb-8 border-b-2 border-gray-300 dark:border-slate-700 pb-2 flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#003366] dark:text-blue-100 uppercase tracking-tight" style={{ fontFamily: 'Arial, sans-serif' }}>
            {t.services.title}
          </h2>
          <div className="hidden sm:block h-1 w-24 bg-[#FF9933]"></div>
        </div>

        {/* Services Grid - Rigid, Table-like */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={index} 
                className="bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-700 border-t-4 border-t-[#003366] dark:border-t-blue-500 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors shadow-sm"
              >
                {/* Card Header */}
                <div className="p-4 border-b border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-900 flex justify-between items-center">
                  <div className="bg-[#990000] text-white p-2 rounded-sm shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FF9933] bg-[#fff8e1] dark:bg-slate-800 dark:text-yellow-400 px-2 py-1 border border-[#ffe082] dark:border-slate-600">
                    {service.badge}
                  </span>
                </div>
                
                {/* Card Body */}
                <div className="p-5">
                  <h3 className="text-lg font-bold text-[#003366] dark:text-white uppercase mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>
                
                {/* Card Footer */}
                <div className="p-4 bg-gray-50 dark:bg-slate-900 border-t border-gray-200 dark:border-slate-700">
                  <a href="#contact" className="inline-flex items-center text-[#990000] dark:text-red-400 font-bold text-sm uppercase hover:underline">
                    {t.nav.getQuote}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
