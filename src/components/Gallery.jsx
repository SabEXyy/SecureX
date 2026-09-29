import React from 'react';

import { useLanguage } from '../context/LanguageContext';

export default function Gallery() {
  const { t } = useLanguage();

  return (
    <section id="gallery" className="py-12 bg-gray-100 dark:bg-slate-900 border-b-4 border-[#003366] dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Gov Style) */}
        <div className="mb-8 border-b-2 border-gray-300 dark:border-slate-700 pb-2 flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#003366] dark:text-blue-100 uppercase tracking-tight" style={{ fontFamily: 'Arial, sans-serif' }}>
            {t.gallery.title}
          </h2>
          <div className="hidden sm:block h-1 w-24 bg-[#FF9933]"></div>
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 mb-8 font-medium bg-white dark:bg-slate-800 p-3 border-l-4 border-[#990000]">
          {t.gallery.subtitle}
        </p>

        {/* Gallery Grid - Rigid borders */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { id: 1, src: '/images/IMG20260119143855.jpg' },
            { id: 2, src: '/images/IMG_20200708_135343.jpg' },
            { id: 3, src: '/images/IMG-20210620-WA0008.jpg' }
          ].map((item) => (
            <div 
              key={item.id}
              className="bg-white dark:bg-slate-800 border-2 border-gray-300 dark:border-slate-700 p-2 group hover:border-[#003366] dark:hover:border-blue-500 transition-colors cursor-pointer"
            >
              <div className="bg-gray-200 dark:bg-slate-700 aspect-video flex flex-col items-center justify-center relative overflow-hidden">
                <img 
                  src={item.src} 
                  alt={`Project ${item.id}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#003366]/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-bold uppercase tracking-wider border-b-2 border-[#FF9933]">
                    {t.gallery.viewProject}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center bg-white dark:bg-slate-800 p-4 border border-gray-300 dark:border-slate-700">
          <p className="text-gray-600 dark:text-gray-400 font-bold uppercase text-sm">
            {t.gallery.note}
          </p>
        </div>
      </div>
    </section>
  );
}
