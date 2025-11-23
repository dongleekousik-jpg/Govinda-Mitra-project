// Header.tsx

import React, { useState } from 'react';
import { useLanguage } from '../App';
import { Language } from '../constants/content';

interface HeaderProps {
  currentPage: string;
  setPage: (page: 'home' | 'important' | 'emergency' | 'spiritual' | 'rules') => void;
}

const languageMap: { [key in Language]: string } = {
  en: 'English',
  te: 'తెలుగు',
  hi: 'हिन्दी',
  ta: 'தமிழ்',
  kn: 'ಕನ್ನಡ'
};

const Header: React.FC<HeaderProps> = ({ currentPage, setPage }) => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { key: 'home', label: t.nav.home },
    { key: 'important', label: t.nav.important },
    { key: 'emergency', label: t.nav.emergency },
    { key: 'spiritual', label: t.nav.spiritual },
    { key: 'rules', label: t.nav.rules },
  ] as const;

  return (
    <header className="bg-devotional-maroon text-devotional-cream shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-serif-display text-devotional-gold">
          {t.appName}
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => setPage(item.key)}
              className={`font-semibold transition-colors duration-300 ${
                currentPage === item.key
                  ? 'text-devotional-gold underline'
                  : 'text-devotional-cream hover:text-devotional-gold'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="relative">
            <select 
              value={language} 
              onChange={(e) => setLanguage(e.target.value as Language)}
              className="bg-devotional-cream text-devotional-maroon font-bold py-1 px-3 rounded-md appearance-none cursor-pointer hover:bg-white transition-colors"
            >
              {Object.entries(languageMap).map(([langCode, langName]) => (
                <option key={langCode} value={langCode}>{langName}</option>
              ))}
            </select>
          </div>
        </nav>
        <div className="md:hidden flex items-center gap-3">
          <select 
            value={language} 
            onChange={(e) => setLanguage(e.target.value as Language)}
            className="bg-devotional-cream text-devotional-maroon font-bold py-1.5 px-2 rounded-md appearance-none text-sm"
          >
            {Object.entries(languageMap).map(([langCode, langName]) => (
              <option key={langCode} value={langCode}>{langName}</option>
            ))}
          </select>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="flex items-center gap-2 bg-devotional-gold text-devotional-maroon px-3 py-1.5 rounded-md font-bold shadow-sm hover:bg-yellow-400 transition-colors active:scale-95"
            aria-label="Toggle Menu"
          >
            <span className="text-sm font-bold tracking-wide">MENU</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-devotional-maroon border-t border-devotional-gold/20 shadow-inner">
          <nav className="flex flex-col items-center p-4 space-y-3">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => { setPage(item.key); setIsMenuOpen(false); }}
                className={`w-full text-center py-3 px-4 rounded-lg font-semibold transition-all duration-300 ${
                  currentPage === item.key 
                    ? 'text-devotional-maroon bg-devotional-gold shadow-md' 
                    : 'text-devotional-cream hover:bg-white/10 border border-transparent'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
