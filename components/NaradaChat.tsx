
import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../App';
import { ChatMessage } from '../types';
import { Icon } from '../constants/icons';

const NaradaChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { t, language } = useLanguage();
  const chatPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        id: Date.now().toString(),
        sender: 'narada',
        text: t.narada.greeting
      }]);
    }
  }, [isOpen, t.narada.greeting, messages.length]);

  useEffect(() => {
    chatPanelRef.current?.scrollTo(0, chatPanelRef.current.scrollHeight);
  }, [messages]);

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text,
    };
    setMessages((prev) => [...prev, userMessage]);
    setUserInput('');
    setIsLoading(true);

    try {
      // Call the secure backend API
      const response = await fetch('/api/narada', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text, language })
      });

      // Check for HTML response (Preview/Offline)
      const contentType = response.headers.get("content-type");
      if (!response.ok || !contentType || !contentType.includes("application/json")) {
          throw new Error("API Unavailable or Misconfigured");
      }

      const data = await response.json();
      
      const naradaMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'narada',
        text: data.text || "Om Namo Venkatesaya. I am currently meditating.",
        mapLink: data.mapLink ? data.mapLink : undefined,
      };
      setMessages((prev) => [...prev, naradaMessage]);

    } catch (error) {
      console.error('Error with Chat API:', error);
      
      let fallbackText = 'My apologies, devotee. I am having trouble connecting to the divine realms. Please check your internet connection.';
      
      const errMsg = (error as Error).message;
      if (errMsg.includes("API Unavailable") || errMsg.includes("Misconfigured")) {
         fallbackText = "I am currently in 'Mauna Vratam' (Silence) because the server is unavailable. Please check Vercel settings or internet.";
      }

      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'narada',
        text: fallbackText,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  // Using the vector logo (Icon) exclusively for reliability
  const Avatar = ({ className }: { className: string }) => (
  <img
    src="https://raw.githubusercontent.com/kousik4215/tirupati-images/main/Nrada%20rushi.jpg"
    alt="Narada Avatar"
    className={`${className} object-cover rounded-full`}
  />
);

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className={`fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 flex items-center bg-devotional-gold text-devotional-maroon rounded-full shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out border-2 border-devotional-maroon group pl-1 pr-6 py-1 gap-3`}
          aria-label={t.buttons.askNarada}
        >
          <div className="w-14 h-14 rounded-full border-2 border-devotional-maroon overflow-hidden bg-devotional-cream relative flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
             <Avatar className="w-full h-full" />
          </div>
          <span className={`font-bold font-serif-display text-lg whitespace-nowrap overflow-hidden max-w-[200px] opacity-100`}>
            {t.buttons.askNarada}
          </span>
        </button>
      )}

      {isOpen && (
        <div 
            className="fixed bottom-4 right-4 md:bottom-8 md:right-8 w-[90vw] max-w-sm h-[70vh] max-h-[600px] bg-white rounded-lg shadow-2xl flex flex-col z-50 border-2 border-devotional-maroon animate-fade-in-up"
        >
          <header className="flex items-center p-4 bg-devotional-maroon text-devotional-cream rounded-t-lg">
            <div className="w-10 h-10 rounded-full border-2 border-devotional-cream overflow-hidden mr-3 flex-shrink-0 bg-devotional-gold">
                <Avatar className="w-full h-full" />
            </div>
            <h3 className="font-bold text-lg">{t.narada.header}</h3>
            <button onClick={() => setIsOpen(false)} className="ml-auto text-2xl hover:text-devotional-gold transition-colors">&times;</button>
          </header>
          <div ref={chatPanelRef} className="flex-grow p-4 overflow-y-auto space-y-4 bg-devotional-cream/40">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.sender === 'narada' && (
                   <div className="w-8 h-8 rounded-full border border-devotional-maroon overflow-hidden mr-2 flex-shrink-0 mt-1 bg-devotional-gold">
                      <Avatar className="w-full h-full" />
                   </div>
                )}
                <div className={`max-w-[85%] px-4 py-2 rounded-lg shadow-sm ${msg.sender === 'user' ? 'bg-devotional-maroon text-devotional-cream' : 'bg-white text-devotional-text border border-devotional-gold/20'}`}>
                  <p className="whitespace-pre-wrap text-sm md:text-base">{msg.text}</p>
                  
                  {msg.mapLink && (
                    <a href={msg.mapLink} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-2 text-blue-600 hover:underline bg-gray-50 px-2 py-1 rounded text-xs font-bold border border-gray-200 block w-fit">
                      <Icon name="map" className="w-3 h-3" />
                      View on Map
                    </a>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start items-center">
                <div className="w-8 h-8 rounded-full border border-devotional-maroon overflow-hidden mr-2 flex-shrink-0 bg-devotional-gold">
                   <Avatar className="w-full h-full" />
                </div>
                <div className="max-w-xs px-4 py-2 rounded-lg bg-white text-devotional-text shadow border border-devotional-gold/20 italic text-sm flex items-center gap-2">
                  <span className="w-2 h-2 bg-devotional-gold rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-devotional-gold rounded-full animate-bounce delay-100"></span>
                  <span className="w-2 h-2 bg-devotional-gold rounded-full animate-bounce delay-200"></span>
                </div>
              </div>
            )}
          </div>
          <div className="p-4 border-t border-devotional-maroon/20 bg-white rounded-b-lg">
            <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(userInput); }} className="flex items-center gap-2">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder={t.narada.placeholder}
                className="flex-grow p-2 border border-devotional-maroon/30 rounded-lg focus:ring-2 focus:ring-devotional-gold focus:outline-none bg-gray-50 text-devotional-text placeholder-devotional-text/60"
                disabled={isLoading}
              />
              <button type="submit" className="bg-devotional-maroon text-white p-2 rounded-lg flex-shrink-0 hover:bg-devotional-maroon/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed" disabled={isLoading || !userInput.trim()}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path></svg>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default NaradaChat;
