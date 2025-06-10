
// src/utils/audioUtils.ts
let audioContext: AudioContext | null = null;

const getAudioContext = (): AudioContext => {
  if (typeof window !== 'undefined' && !audioContext) {
    audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  if (!audioContext) {
    // Fallback or error for environments where AudioContext is not available
    console.warn("AudioContext is not supported in this environment.");
    // A dummy context could be returned to prevent errors, or throw
    // For now, let's assume it will be available in a browser context.
    // If running in Node for tests, this might need a more robust mock.
    return null as any; // Or handle more gracefully
  }
  return audioContext;
};

export const loadSound = async (url: string): Promise<AudioBuffer | null> => {
  try {
    const context = getAudioContext();
    if (!context) return null;

    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch sound: ${response.statusText}`);
    }
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await context.decodeAudioData(arrayBuffer);
    return audioBuffer;
  } catch (error) {
    console.error(`Error loading sound from ${url}:`, error);
    return null;
  }
};

export const playSound = (buffer: AudioBuffer | null) => {
  const context = getAudioContext();
  if (!buffer || !context) return;
  
  try {
    const source = context.createBufferSource();
    source.buffer = buffer;
    source.connect(context.destination);
    source.start(0);
  } catch (error) {
    console.error("Error playing sound:", error);
  }
};
