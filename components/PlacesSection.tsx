
import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../App';
import { Place } from '../types';
import { Icon } from '../constants/icons';
import { 
  decode, 
  decodeAudioData, 
  playGlobalAudio, 
  stopGlobalAudio, 
  getGlobalAudioContext, 
  audioCache,
  getAudioFromDB,
  saveAudioToDB,
  speak,
  unlockAudioContext,
  warmupTTS
} from '../utils/audio';

interface PlacesSectionProps {
  title: string;
  places: Place[];
  isSpiritual?: boolean;
}

interface PlaceCardProps {
  place: Place;
  isSpiritual?: boolean;
  isPlaying: boolean;
  isLoading: boolean;
  onToggleAudio: (place: Place) => void;
}

const PlaceCard: React.FC<PlaceCardProps> = ({ place, isSpiritual, isPlaying, isLoading, onToggleAudio }) => {
  const { t } = useLanguage();
  const placeContent = t.places[place.id as keyof typeof t.places];

  const handleViewOnMap = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(place.mapQuery)}`, '_blank');
  };

  const importance = 'importance' in placeContent ? (placeContent as any).importance : null;
  
  return (
    <div className={`bg-white/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden transition-all duration-300 flex flex-col ${isPlaying ? 'ring-4 ring-devotional-gold scale-[1.02]' : 'hover:scale-105 border border-devotional-gold/30'}`}>
      <div className="p-6 flex-grow">
        <div className="flex justify-between items-start mb-2">
             <div className="flex-grow pr-2">
                <h3 className="text-xl font-bold font-serif-display text-devotional-maroon leading-tight">{placeContent.name}</h3>
                <p className="text-xs text-devotional-gold font-bold uppercase tracking-wider mt-1">{placeContent.category}</p>
             </div>
        </div>
        
        <p className="text-devotional-text/90 mt-3 leading-relaxed">{placeContent.description}</p>
        
        {isSpiritual && importance && (
          <div className={`mt-4 p-3 bg-devotional-cream/40 rounded-lg border-l-4 border-devotional-gold/50 transition-all duration-500`}>
             <p className="text-sm italic text-devotional-maroon/90">
                <span className="font-bold not-italic mr-1 text-devotional-maroon">Narada's Insight:</span>
                "{importance}"
             </p>
          </div>
        )}
      </div>
      
      <div className="bg-gray-50/80 p-4 border-t border-gray-100 flex flex-col gap-3">
        {isSpiritual && (
            <button 
                onClick={(e) => {
                    e.stopPropagation();
                    onToggleAudio(place);
                }}
                disabled={isLoading}
                className={`w-full py-3 px-4 rounded-md flex items-center justify-center gap-3 font-bold shadow-sm transition-all duration-300 
                    ${isPlaying 
                        ? 'bg-devotional-maroon text-white hover:bg-red-800 animate-pulse' 
                        : 'bg-green-700 text-white hover:bg-green-800'}
                    ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}
                    `}
            >
                {isLoading ? (
                     <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                     <Icon name={isPlaying ? "stop" : "play"} className="w-6 h-6" />
                )}
                <span>
                    {isLoading 
                        ? 'Loading Audio...' 
                        : (isPlaying ? t.buttons.stopExplanation : t.buttons.listenToExplanation)}
                </span>
            </button>
        )}

        <button 
          onClick={handleViewOnMap}
          className="flex items-center justify-center gap-2 w-full bg-white border border-devotional-maroon/20 text-devotional-maroon px-4 py-2 rounded-md hover:bg-devotional-maroon hover:text-white transition-colors font-medium text-sm"
        >
          <Icon name="map" className="w-4 h-4"/>
          {t.buttons.viewOnMap}
        </button>
      </div>
    </div>
  );
};

const PlacesSection: React.FC<PlacesSectionProps> = ({ title, places, isSpiritual = false }) => {
  const { t, language } = useLanguage();
  const [playingPlaceId, setPlayingPlaceId] = useState<string | null>(null);
  const [loadingPlaceId, setLoadingPlaceId] = useState<string | null>(null);
  
  const isMounted = useRef(true);
  const activeRequestId = useRef<string | null>(null);

  useEffect(() => {
      isMounted.current = true;
      return () => { isMounted.current = false; stopGlobalAudio(); };
  }, []);

  useEffect(() => {
      stopGlobalAudio();
      setPlayingPlaceId(null);
      setLoadingPlaceId(null);
  }, [language]);

  const handleToggleAudio = async (place: Place) => {
      // 1. Immediate Unlock to prevent mobile blocking
      unlockAudioContext();
      warmupTTS(); 
      
      if (playingPlaceId === place.id) {
          stopGlobalAudio();
          setPlayingPlaceId(null);
          return;
      }

      stopGlobalAudio();
      setPlayingPlaceId(null);

      const requestId = `${Date.now()}-${place.id}`;
      activeRequestId.current = requestId;

      const content = t.places[place.id as keyof typeof t.places];
      const name = (content.name || "").trim();
      const description = (content.description || "").trim();
      const importance = 'importance' in content ? ((content as any).importance || "").trim() : "";
      const textToSpeak = `${name}. ${description} ${importance}`.replace(/["']/g, "").trim();
      
      const cacheKey = `${language}-${place.id}`;

      // Check RAM Cache
      if (audioCache[cacheKey]) {
           playGlobalAudio(audioCache[cacheKey], () => {
               if(isMounted.current) setPlayingPlaceId(null);
           });
           setPlayingPlaceId(place.id);
           return;
      }

      setLoadingPlaceId(place.id);
      
      try {
          // Check DB Cache
          const cachedBase64DB = await getAudioFromDB(cacheKey);
          if (activeRequestId.current !== requestId) return;

          if (cachedBase64DB) {
              const ctx = getGlobalAudioContext();
              const audioBuffer = await decodeAudioData(decode(cachedBase64DB), ctx, 24000, 1);
              audioCache[cacheKey] = audioBuffer;
              
              if (isMounted.current) {
                   playGlobalAudio(audioBuffer, () => {
                       if(isMounted.current) setPlayingPlaceId(null);
                   });
                   setPlayingPlaceId(place.id);
                   setLoadingPlaceId(null);
              }
              return;
          }

          if (!textToSpeak) throw new Error("No content");

          // API Call with Retry Logic
          const fetchTTS = async (retries = 1): Promise<any> => {
              try {
                  const response = await fetch('/api/generate-tts', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ text: textToSpeak, language })
                  });
                  const contentType = response.headers.get("content-type");
                  if (!response.ok || !contentType || !contentType.includes("application/json")) {
                      throw new Error("API Error");
                  }
                  return await response.json();
              } catch (e) {
                  if (retries > 0) {
                      console.log("Retrying TTS API...");
                      return fetchTTS(retries - 1);
                  }
                  throw e;
              }
          };

          try {
              const data = await fetchTTS();
              if (!data.base64Audio) throw new Error("No audio");

              saveAudioToDB(cacheKey, data.base64Audio);
              
              if (activeRequestId.current === requestId && isMounted.current) {
                   const ctx = getGlobalAudioContext();
                   const audioBuffer = await decodeAudioData(decode(data.base64Audio), ctx, 24000, 1);
                   audioCache[cacheKey] = audioBuffer;
                   
                   playGlobalAudio(audioBuffer, () => {
                       if(isMounted.current) setPlayingPlaceId(null);
                   });
                   setPlayingPlaceId(place.id);
              }
          } catch (apiError) {
              console.warn("Using Native Fallback", apiError);
              
              if (activeRequestId.current === requestId && isMounted.current) {
                  speak(textToSpeak, language, () => {
                      if(isMounted.current) setPlayingPlaceId(null);
                  });
                  setPlayingPlaceId(place.id);
              }
          }

      } catch (error) {
          console.error("Playback failed", error);
      } finally {
          if (isMounted.current && activeRequestId.current === requestId) {
              setLoadingPlaceId(null);
          }
      }
  };

  return (
    <div className="space-y-8 relative pb-12">
      <h2 className="text-3xl md:text-4xl font-serif-display text-center text-devotional-maroon border-b-2 border-devotional-gold pb-2">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {places.map((place) => (
          <PlaceCard 
            key={place.id} 
            place={place} 
            isSpiritual={isSpiritual} 
            isPlaying={playingPlaceId === place.id}
            isLoading={loadingPlaceId === place.id}
            onToggleAudio={handleToggleAudio}
          />
        ))}
      </div>
    </div>
  );
};

export default PlacesSection;
