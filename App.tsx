
// App.tsx

import React, { useState, createContext, useContext, useEffect } from 'react';
import { Language, content } from './constants/content';
import Header from './components/Header';
import Home from './components/Home';
import PlacesSection from './components/PlacesSection';
import { importantPlaces, emergencyServices, spiritualPlaces } from './constants/data';
import RulesSection from './components/RulesSection';
import NaradaChat from './components/NaradaChat';
import { initializeAudioUnlocker } from './utils/audio';

type Page = 'home' | 'important' | 'emergency' | 'spiritual' | 'rules';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (typeof content)['en'];
}

export const LanguageContext = createContext<LanguageContextType | null>(null);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const App: React.FC = () => {
  const [page, setPage] = useState<Page>('home');
  const [language, setLanguage] = useState<Language>('en');

  // Initialize Audio Unlocker for Mobile
  useEffect(() => {
    initializeAudioUnlocker();
  }, []);

  const languageContextValue: LanguageContextType = {
    language,
    setLanguage,
    t: content[language],
  };

  const renderPage = () => {
    switch (page) {
      case 'home':
        return <Home />;
      case 'important':
        return <PlacesSection title={content[language].nav.important} places={importantPlaces} />;
      case 'emergency':
        return <PlacesSection title={content[language].nav.emergency} places={emergencyServices} />;
      case 'spiritual':
        return <PlacesSection title={content[language].nav.spiritual} places={spiritualPlaces} isSpiritual={true} />;
      case 'rules':
        return <RulesSection />;
      default:
        return <Home />;
    }
  };

  return (
    <LanguageContext.Provider value={languageContextValue}>
      {/* Fixed Wallpaper Background for Home */}
      {page === 'home' && (
        <div 
          className="fixed inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 248, 225, 0.75), rgba(255, 248, 225, 0.85)), url('https://upload.wikimedia.org/wikipedia/commons/4/4e/Tirumala_090613.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
            backgroundRepeat: 'no-repeat',
          }} 
        />
      )}

      <div 
        className={`min-h-screen font-sans-body text-devotional-text flex flex-col transition-all duration-500 relative z-10 ${page !== 'home' ? 'bg-devotional-cream' : ''}`}
      >
        <Header currentPage={page} setPage={setPage} />
        <main className="flex-grow container mx-auto p-4 md:p-8">
          {renderPage()}
        </main>
        <footer className="bg-devotional-maroon text-devotional-cream text-center p-4 z-20 relative">
          <p>Govinda Mitra — Sada Srivari Seva</p>
        </footer>
        <NaradaChat />
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
