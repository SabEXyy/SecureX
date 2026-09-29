import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Gallery() {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { 
      id: 1, 
      src: '/images/IMG-20210620-WA0008.jpg', // I'll swap this one to first since it matches the user's thumbnail screenshot roughly
      title: '3-Phase Distribution Transformer',
      desc: 'Pole-mounted step-down transformer commonly used in overhead distribution grids.',
      features: [
        { label: 'Conservator Tank', text: 'Manages oil expansion & contraction.' },
        { label: 'Cooling Fins', text: 'Natural oil/air cooling (ONAN).' },
        { label: 'HV & LV Bushings', text: 'Ceramic insulators for 11kV input & 415V/240V output.' },
        { label: 'ABC Cable', text: 'Aerial Bundled Cable for secure overhead power distribution.' }
      ]
    },
    { 
      id: 2, 
      src: '/images/IMG20260119143855.jpg',
      title: 'Electrical Contracting Project',
      desc: 'Site execution and infrastructure setup.',
      features: []
    },
    { 
      id: 3, 
      src: '/images/IMG_20200708_135343.jpg',
      title: 'On-Site Installation',
      desc: 'Professional electrical installation by certified experts.',
      features: []
    }
  ];

  return (
    <section id="gallery" className="py-12 bg-gray-100 dark:bg-slate-900 border-b-4 border-[#003366] dark:border-slate-800 relative">
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
          {projects.map((item) => (
            <div 
              key={item.id}
              onClick={() => setSelectedProject(item)}
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

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setSelectedProject(null)}>
          <div 
            className="bg-white dark:bg-slate-900 border-4 border-[#003366] dark:border-slate-700 max-w-4xl w-full flex flex-col md:flex-row relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-2 right-2 bg-[#990000] text-white p-1 hover:bg-red-700 transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image Side */}
            <div className="w-full md:w-1/2 bg-gray-200 dark:bg-slate-800 border-b-4 md:border-b-0 md:border-r-4 border-[#003366] dark:border-slate-700 flex items-center justify-center">
              <img src={selectedProject.src} alt={selectedProject.title} className="max-h-[300px] md:max-h-[500px] w-full object-cover" />
            </div>

            {/* Content Side */}
            <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-[#003366] dark:text-blue-100 uppercase tracking-tight mb-3 border-b-2 border-[#FF9933] pb-2 inline-block self-start">
                {selectedProject.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6 font-medium">
                {selectedProject.desc}
              </p>

              {selectedProject.features && selectedProject.features.length > 0 && (
                <div className="space-y-3">
                  <h4 className="font-bold text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wider">Key Details:</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feat, idx) => (
                      <li key={idx} className="text-sm text-gray-800 dark:text-gray-200 border-l-2 border-[#FF9933] pl-3">
                        <strong className="text-[#003366] dark:text-blue-200">{feat.label}:</strong> {feat.text}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
