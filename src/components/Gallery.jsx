import React from 'react';
import { Image as ImageIcon } from 'lucide-react';
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
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div 
              key={item}
              className="bg-white dark:bg-slate-800 border-2 border-gray-300 dark:border-slate-700 p-2 group hover:border-[#003366] dark:hover:border-blue-500 transition-colors cursor-pointer"
            >
              <div className="bg-gray-200 dark:bg-slate-700 aspect-video flex flex-col items-center justify-center relative overflow-hidden">
                <ImageIcon className="w-8 h-8 text-gray-400 dark:text-gray-500 mb-2" />
                <span className="text-gray-500 dark:text-gray-400 font-bold text-sm uppercase">
                  {t.gallery.project} {item}
                </span>
                
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
