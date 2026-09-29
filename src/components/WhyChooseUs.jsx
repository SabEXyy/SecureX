import React from 'react';
import { BadgeCheck, Users, Receipt, TrendingUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function WhyChooseUs() {
  const { t } = useLanguage();

  const icons = [BadgeCheck, Users, Receipt, TrendingUp];

  const features = t.whyUs.items.map((feature, index) => ({
    icon: icons[index],
    title: feature.title,
    description: feature.description,
  }));

  return (
    <section id="why-us" className="py-12 bg-white dark:bg-slate-950 border-b-4 border-[#003366] dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Gov Style) */}
        <div className="mb-8 border-b-2 border-gray-300 dark:border-slate-700 pb-2 flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#003366] dark:text-blue-100 uppercase tracking-tight" style={{ fontFamily: 'Arial, sans-serif' }}>
            {t.whyUs.title}
          </h2>
          <div className="hidden sm:block h-1 w-24 bg-[#FF9933]"></div>
        </div>

        {/* Feature List - Rigid, Table-like Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="bg-gray-50 dark:bg-slate-900 border border-gray-300 dark:border-slate-700 flex flex-col items-center text-center p-6 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors"
              >
                <div className="bg-[#003366] dark:bg-slate-800 p-4 border-2 border-[#FF9933] mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#990000] dark:text-red-400 uppercase mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
