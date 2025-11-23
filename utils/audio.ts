
export const stopNativeAudio = () => {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
};

// --- GLOBAL STATE ---
let activeUtterances: SpeechSynthesisUtterance[] = [];
let isStopped = false;

// Helper to trigger voice loading (async)
const preloadVoices = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.getVoices();
    }
};

// Mobile Safari/Chrome require a direct user interaction to "unlock" the synth.
export const warmupTTS = () => {
    if (typeof window === 'undefined') return;
    
    // 1. Unlock Web Audio API
    unlockAudioContext();

    // 2. Unlock SpeechSynthesis
    if ('speechSynthesis' in window) {
        if (window.speechSynthesis.paused) window.speechSynthesis.resume();
        // Create a silent, tiny utterance to 'grab' the audio focus
        const u = new SpeechSynthesisUtterance(" ");
        u.volume = 0;
        u.rate = 2; // Fast
        window.speechSynthesis.speak(u);
    }
}

export const speak = (text: string, language: string, onEnd: () => void) => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    console.warn('Speech synthesis not supported');
    onEnd();
    return;
  }

  // Explicitly resume synthesis for mobile
  if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
  }
  
  // Reset state
  stopGlobalAudio();
  window.speechSynthesis.cancel();
  activeUtterances = [];
  isStopped = false;

  // --- CHUNKING STRATEGY ---
  // Fix: Changed regex to support Indian Danda (|) and prevent splitting by single words.
  // It matches any sequence of characters that is NOT punctuation, followed by punctuation OR end of string.
  const rawChunks = text.match(/[^.!?|।\n]+(?:[.!?|।\n]+|$)/g);
  
  const chunks = rawChunks 
    ? rawChunks.map(c => c.trim()).filter(c => c.length > 0) 
    : [text]; // If regex fails, speak the whole text as one block

  if (chunks.length === 0) {
      onEnd();
      return;
  }

  // --- SMART VOICE SELECTION ---
  const langMap: Record<string, string> = {
      'en': 'en-US',
      'te': 'te-IN',
      'hi': 'hi-IN',
      'ta': 'ta-IN',
      'kn': 'kn-IN'
  };
  
  const targetLang = langMap[language] || 'en-US';
  
  const voices = window.speechSynthesis.getVoices();
  
  // Prioritize "Google" or "Enhanced" voices for better quality on Android/iOS
  const preferredVoice = 
      voices.find(v => v.lang === targetLang && (v.name.includes("Google") || v.name.includes("Enhanced") || v.name.includes("Premium"))) ||
      voices.find(v => v.lang === targetLang) || 
      voices.find(v => v.lang.startsWith(language));

  let currentIndex = 0;

  const playNextChunk = () => {
      if (isStopped || currentIndex >= chunks.length) {
          activeUtterances = [];
          onEnd();
          return;
      }

      const chunk = chunks[currentIndex];
      const utterance = new SpeechSynthesisUtterance(chunk);
      utterance.lang = targetLang;
      
      if (preferredVoice) {
          utterance.voice = preferredVoice;
      }

      // Tuning for better sound
      utterance.rate = 0.9; // Slightly slower is more intelligible
      utterance.pitch = 1.0; 

      utterance.onend = () => {
          activeUtterances = activeUtterances.filter(u => u !== utterance);
          currentIndex++;
          playNextChunk();
      };

      utterance.onerror = (e) => {
          console.warn('TTS Error:', e);
          activeUtterances = activeUtterances.filter(u => u !== utterance);
          currentIndex++;
          playNextChunk();
      };

      activeUtterances.push(utterance);
      window.speechSynthesis.speak(utterance);
  };

  playNextChunk();
};

// --- Web Audio API (High Quality) ---

let globalAudioContext: AudioContext | null = null;
let globalSource: AudioBufferSourceNode | null = null;

export const audioCache: Record<string, AudioBuffer> = {};

// --- IndexedDB ---
const DB_NAME = 'GovindaMitraAudioDB_v11';
const STORE_NAME = 'audio_store';

const openDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') {
        reject('IndexedDB not supported');
        return;
    }
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
};

export const saveAudioToDB = async (key: string, base64: string) => {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, 'readwrite');
    const store = tx.objectStore(STORE_NAME);
    store.put(base64, key);
  } catch (e) {
    console.warn('Failed to save audio to DB', e);
  }
};

export const getAudioFromDB = async (key: string): Promise<string | null> => {
  try {
    const db = await openDB();
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const request = store.get(key);
    return new Promise((resolve) => {
      request.onsuccess = () => resolve(request.result as string || null);
      request.onerror = () => resolve(null);
    });
  } catch (e) {
    return null;
  }
};

export function getGlobalAudioContext(): AudioContext {
  if (!globalAudioContext) {
    // DO NOT force sampleRate. Let the browser decide (fixes mobile playback).
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    globalAudioContext = new AudioContextClass();
  }
  // Ensure we try to wake it up if it was closed/suspended (common on Desktop reload)
  if (globalAudioContext.state === 'closed') {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      globalAudioContext = new AudioContextClass();
  }
  return globalAudioContext;
}

export function unlockAudioContext() {
  const ctx = getGlobalAudioContext();
  
  if (ctx.state === 'suspended') {
    ctx.resume().catch(e => console.error("Ctx resume failed", e));
  }
  
  // Play silent buffer to force unlock on iOS/Android
  try {
    // Match native sample rate if possible, usually 44100 or 48000
    const buffer = ctx.createBuffer(1, 1, ctx.sampleRate || 44100);
    const source = ctx.createBufferSource();
    source.buffer = buffer;
    source.connect(ctx.destination);
    source.start(0);
  } catch (e) {
    // Ignore
  }
}

export function initializeAudioUnlocker() {
    if (typeof window === 'undefined') return;

    preloadVoices();
    if ('speechSynthesis' in window) {
         window.speechSynthesis.onvoiceschanged = () => { /* Load triggers */ };
    }

    const unlock = () => {
        unlockAudioContext();
        warmupTTS(); 
        
        window.removeEventListener('touchstart', unlock);
        window.removeEventListener('click', unlock);
        window.removeEventListener('keydown', unlock);
    };

    window.addEventListener('touchstart', unlock, { passive: true });
    window.addEventListener('click', unlock, { passive: true });
    window.addEventListener('keydown', unlock, { passive: true });
}

export function decode(base64: string): Uint8Array {
  try {
    const cleanBase64 = base64.replace(/[\s\n\r]/g, '');
    const binaryString = atob(cleanBase64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  } catch (e) {
    console.error("Decode failed", e);
    throw e;
  }
}

/**
 * Wraps raw PCM data in a valid WAV header.
 * This ensures compatibility with standard browser decoders on Desktop and Mobile.
 */
function getPcmWavData(
  pcmData: Uint8Array, 
  sampleRate: number, 
  numChannels: number, 
  bitDepth: number
): ArrayBuffer {
  const headerLength = 44;
  const dataLength = pcmData.byteLength;
  const buffer = new ArrayBuffer(headerLength + dataLength);
  const view = new DataView(buffer);

  // RIFF chunk descriptor
  writeString(view, 0, 'RIFF');
  view.setUint32(4, 36 + dataLength, true); // File size - 8
  writeString(view, 8, 'WAVE');

  // fmt sub-chunk
  writeString(view, 12, 'fmt ');
  view.setUint32(16, 16, true); // Subchunk1Size (16 for PCM)
  view.setUint16(20, 1, true); // AudioFormat (1 for PCM)
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * numChannels * (bitDepth / 8), true); // ByteRate
  view.setUint16(32, numChannels * (bitDepth / 8), true); // BlockAlign
  view.setUint16(34, bitDepth, true);

  // data sub-chunk
  writeString(view, 36, 'data');
  view.setUint32(40, dataLength, true);

  // Write PCM samples
  const pcmBytes = new Uint8Array(buffer, headerLength);
  pcmBytes.set(pcmData);

  return buffer;
}

function writeString(view: DataView, offset: number, string: string) {
  for (let i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i));
  }
}

/**
 * Manually decodes PCM data if browser native decoding fails.
 * Guarantees playback on stubborn Desktop browsers.
 */
function manualDecodePCM(ctx: AudioContext, pcmData: Uint8Array): AudioBuffer {
    // Gemini sends 24kHz
    const sampleRate = 24000;
    
    // Ensure we have an even number of bytes for 16-bit
    let safeData = pcmData;
    if (pcmData.length % 2 !== 0) {
        safeData = pcmData.slice(0, pcmData.length - 1);
    }
    
    // Create Int16 View (Little Endian by default on most systems)
    const int16 = new Int16Array(safeData.buffer, safeData.byteOffset, safeData.byteLength / 2);
    
    // Convert to Float32 [-1.0, 1.0]
    const float32 = new Float32Array(int16.length);
    for (let i = 0; i < int16.length; i++) {
        float32[i] = int16[i] / 32768.0;
    }
    
    const buffer = ctx.createBuffer(1, float32.length, sampleRate);
    buffer.getChannelData(0).set(float32);
    return buffer;
}

export async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number,
  numChannels: number,
): Promise<AudioBuffer> {
  // STRATEGY 1: Wrap in WAV and use Native Browser Decoder (Best for Mobile & Standard Desktop)
  try {
      // Gemini 2.5 TTS is 24kHz, Mono, 16-bit PCM
      const wavBuffer = getPcmWavData(data, 24000, 1, 16);
      return await ctx.decodeAudioData(wavBuffer);
  } catch (e) {
      console.warn("Native WAV decoding failed, falling back to manual PCM decoding", e);
      // STRATEGY 2: Manual PCM Decoding (Best for Strict Desktop / Decoding Errors)
      return manualDecodePCM(ctx, data);
  }
}

export function playGlobalAudio(buffer: AudioBuffer, onEnded?: () => void) {
  stopGlobalAudio(); 
  const ctx = getGlobalAudioContext();
  
  const play = () => startSource(ctx, buffer, onEnded);

  // Force Resume if suspended (Common on Desktop first click)
  if (ctx.state === 'suspended') {
      ctx.resume().then(play).catch(e => {
          console.error("Failed to resume ctx before play", e);
          play(); 
      });
  } else {
      play();
  }
}

function startSource(ctx: AudioContext, buffer: AudioBuffer, onEnded?: () => void) {
    try {
        const source = ctx.createBufferSource();
        source.buffer = buffer;
        source.connect(ctx.destination);
        source.onended = () => {
            if (onEnded) onEnded();
        };
        source.start(0);
        globalSource = source;
    } catch (e) {
        console.error("Source start failed", e);
        if(onEnded) onEnded();
    }
}

export function stopGlobalAudio() {
  isStopped = true;
  stopNativeAudio();

  if (globalSource) {
    globalSource.onended = null;
    try {
      globalSource.stop();
    } catch (e) { }
    globalSource.disconnect();
    globalSource = null;
  }
}

export function pauseGlobalAudio() {
  if (globalAudioContext && globalAudioContext.state === 'running') {
    globalAudioContext.suspend();
  }
  if (typeof window !== 'undefined' && window.speechSynthesis && window.speechSynthesis.speaking) {
      window.speechSynthesis.pause();
  }
}

export function resumeGlobalAudio() {
  if (globalAudioContext && globalAudioContext.state === 'suspended') {
    globalAudioContext.resume();
  }
  if (typeof window !== 'undefined' && window.speechSynthesis && window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
  }
}
