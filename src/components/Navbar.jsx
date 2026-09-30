import React, { useState } from 'react';
import { Phone, Menu, X, Moon, Sun } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, lang, toggleLang } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Font size toggle functionality (modifies root html font-size to scale all rem values)
  const changeFontSize = (scale) => {
    const htmlElement = document.documentElement;
    if (scale === 'decrease') htmlElement.style.fontSize = '14px';
    if (scale === 'normal') htmlElement.style.fontSize = '16px';
    if (scale === 'increase') htmlElement.style.fontSize = '18px';
  };

  return (
    <header className="w-full bg-white dark:bg-slate-900 font-sans shadow-md z-50 sticky top-0 transition-colors">
      {/* Tier 1: Top Utility Bar (Govt Style) */}
      <div className="bg-[#990000] dark:bg-red-950 text-white text-xs sm:text-sm py-1.5 px-4 flex justify-between items-center transition-colors">
        <div className="flex items-center gap-4">
          <span className="font-semibold tracking-wider">{t.nav.govApproved}</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden sm:flex gap-1 pr-2 border-r border-white/30">
            <button onClick={() => changeFontSize('decrease')} className="hover:text-yellow-300 px-1 cursor-pointer">A-</button>
            <button onClick={() => changeFontSize('normal')} className="hover:text-yellow-300 px-1 cursor-pointer">A</button>
            <button onClick={() => changeFontSize('increase')} className="hover:text-yellow-300 px-1 cursor-pointer">A+</button>
          </div>
          
          <button 
            onClick={toggleTheme}
            className="hover:text-yellow-300 px-2 cursor-pointer transition-colors"
            title="Toggle Dark Theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          <button 
            onClick={toggleLang}
            className="bg-[#003366] dark:bg-slate-800 hover:bg-[#002244] dark:hover:bg-slate-700 px-3 py-0.5 border border-white/20 text-white font-bold ml-1 transition-colors cursor-pointer"
          >
            {lang === 'en' ? 'हिन्दी' : 'English'}
          </button>
        </div>
      </div>

      {/* Tier 2: Main Header Logo Area */}
      <div className="px-4 py-4 sm:py-5 max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4 sm:gap-6">
          <img src="/logo.png" alt="Versha Associates Logo" className="w-16 h-16 sm:w-24 sm:h-24 object-contain" />
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#003366] dark:text-blue-100 tracking-tight uppercase transition-colors" style={{ fontFamily: 'Arial, sans-serif' }}>
              {t.hero.title}
            </h1>
            <p className="text-sm sm:text-base font-bold text-[#FF9933] uppercase mt-0.5" style={{ fontFamily: 'Arial, sans-serif' }}>
              {t.hero.subtitle}
            </p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+918882350019"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-gray-100 dark:bg-slate-800 text-[#003366] dark:text-blue-200 font-bold uppercase tracking-wide border border-gray-300 dark:border-slate-700 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all cursor-pointer"
          >
            <Phone className="w-4 h-4" />
            +91 88823 50019
          </a>
          <a
            href="https://wa.me/918882350019?text=Hello%2C%20I%20am%20interested%20in%20your%20electrical%20contracting%20services.%20Please%20share%20more%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] text-white font-bold uppercase tracking-wide border-b-4 border-[#1ebe57] hover:bg-[#1ebe57] hover:border-[#179b46] transition-all cursor-pointer"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>
        </div>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 bg-gray-100 dark:bg-slate-800 border border-gray-300 dark:border-slate-700 text-[#003366] dark:text-blue-200 cursor-pointer transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Tier 3: Primary Navigation Bar */}
      <nav className="bg-[#003366] dark:bg-slate-950 border-t-[3px] border-b-[3px] border-[#FF9933] transition-colors">
        <div className="max-w-7xl mx-auto px-4 hidden md:flex">
          {[
            { name: t.nav.about, href: '#about' },
            { name: t.nav.services, href: '#services' },
            { name: t.nav.gallery, href: '#gallery' },
            { name: t.nav.contact, href: '#contact' },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className="px-6 py-3 text-white font-bold hover:bg-[#FF9933] hover:text-[#003366] transition-colors border-r border-white/20 uppercase text-sm tracking-wider"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>

      {/* Tier 4: Scrolling News Ticker (Marquee) */}
      <div className="bg-[#fffce8] dark:bg-yellow-900/20 border-b border-[#ffe082] dark:border-yellow-700/50 flex items-center shadow-sm h-10 transition-colors">
        <div className="bg-[#990000] dark:bg-red-900 text-white font-bold text-xs sm:text-sm px-4 py-2.5 h-full flex items-center uppercase shrink-0 whitespace-nowrap z-10 shadow-[2px_0_5px_rgba(0,0,0,0.1)] transition-colors">
          {lang === 'hi' ? 'नवीनतम सूचनाएं :' : 'LATEST UPDATES :'}
        </div>
        <div className="overflow-hidden whitespace-nowrap flex-1 px-2 flex items-center h-full">
          {/* Note: React doesn't natively support <marquee> without warnings, but it works perfectly for this aesthetic. */}
          <marquee scrollamount="6" className="text-[#990000] dark:text-red-400 font-bold text-sm tracking-wide pt-1 transition-colors">
            {lang === 'hi' 
              ? '⚡ वर्षा एसोसिएट्स — ए-क्लास इलेक्ट्रिकल ठेकेदार (लाइसेंस: GD00001264) ⚡ PVVNL और UPPCL अनुबंधों के लिए पात्र ⚡ 100% GST अनुपालन (GSTIN: 09AFFPC7695R1ZI)'
              : '⚡ VERSHA ASSOCIATES — A-CLASS ELECTRICAL CONTRACTOR (LICENSE: GD00001264) ⚡ ELIGIBLE FOR PVVNL & UPPCL TENDERS ⚡ 100% GST COMPLIANT (GSTIN: 09AFFPC7695R1ZI)'
            }
          </marquee>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#003366] dark:bg-slate-950 border-b-4 border-[#FF9933] flex flex-col absolute w-full left-0 shadow-xl transition-colors">
          {[
            { name: t.nav.about, href: '#about' },
            { name: t.nav.services, href: '#services' },
            { name: t.nav.gallery, href: '#gallery' },
            { name: t.nav.contact, href: '#contact' },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className="px-4 py-3 text-white font-bold border-b border-white/10 uppercase text-sm"
            >
              {item.name}
            </a>
          ))}
          <div className="p-4 bg-gray-100 dark:bg-slate-900 transition-colors flex flex-col gap-3">
            <a
              href="tel:+918882350019"
              className="flex justify-center items-center gap-2 w-full py-3 bg-white dark:bg-slate-800 text-[#003366] dark:text-blue-200 font-bold uppercase border-b-4 border-gray-300 dark:border-slate-700 shadow-sm"
            >
              <Phone className="w-5 h-5" />
              {t.nav.callUs}
            </a>
            <a
              href="https://wa.me/918882350019?text=Hello"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center gap-2 w-full py-3 bg-[#25D366] text-white font-bold uppercase border-b-4 border-[#1ebe57]"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
