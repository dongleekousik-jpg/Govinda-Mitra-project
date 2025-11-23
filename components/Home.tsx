// Home.tsx

import React from 'react';
import { useLanguage } from '../App';

const Home: React.FC = () => {
  const { t } = useLanguage();

  // Your GitHub image (working)
  const bannerImage =
    "https://github.com/kousik4215/tirupati-images/blob/main/t2.jpg?raw=1";

  return (
    <div className="flex flex-col items-center w-full text-center space-y-6 py-2 md:py-8 pb-32">

      {/* ===================== HERO / BANNER ===================== */}
      <div className="relative w-full overflow-hidden rounded-xl shadow-2xl border-4 border-devotional-gold/30">

        <img
          src={bannerImage}
          alt="Temple Gopuram"
          loading="lazy"
          className="
            w-full
            h-56
            sm:h-64
            md:h-80
            lg:h-[480px]
            xl:h-[560px]
            object-cover
            object-center
            md:object-top
            transition-transform
            duration-300
          "
        />

        {/* Gradient + Text Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-devotional-maroon/90 via-black/20 to-transparent flex flex-col items-center justify-end pb-6 md:pb-10 px-4">

          <h1 className="text-2xl md:text-5xl font-serif-display text-devotional-gold mb-2 md:mb-4 drop-shadow-[0_4px_4px_rgba(0,0,0,0.9)] tracking-wide font-bold">
            {t.appName}
          </h1>

          <div className="bg-devotional-maroon/80 px-4 md:px-6 py-2 md:py-3 rounded-full backdrop-blur-md border border-devotional-gold/50 shadow-lg transform hover:scale-105 transition-transform duration-300">
            <p className="text-xs md:text-lg font-sans-body text-devotional-cream font-semibold tracking-wide">
              {t.home.tagline1}
            </p>
          </div>
        </div>
      </div>

      {/* ===================== Taglines Box ===================== */}
      <div className="space-y-3 max-w-3xl animate-fade-in mt-2 bg-devotional-cream/70 backdrop-blur-sm p-4 rounded-xl border border-devotional-gold/20 shadow-sm">
        <h2 className="text-xl md:text-3xl font-serif-display text-devotional-maroon font-bold">
          {t.home.tagline2}
        </h2>
        <h3 className="text-base md:text-lg font-sans-body text-devotional-text/80 font-medium italic">
          {t.home.tagline3}
        </h3>
      </div>

      {/* ===================== Intro Paragraph ===================== */}
      <div className="max-w-prose text-sm md:text-base leading-relaxed bg-white/90 p-5 md:p-8 rounded-xl shadow-lg border border-devotional-gold/30 text-devotional-text relative">
        <div className="absolute -top-3 -left-3 w-8 h-8 border-t-4 border-l-4 border-devotional-gold rounded-tl-lg"></div>
        <div className="absolute -bottom-3 -right-3 w-8 h-8 border-b-4 border-r-4 border-devotional-gold rounded-br-lg"></div>

        <p>{t.home.intro}</p>
      </div>
    </div>
  );
};

export default Home;
