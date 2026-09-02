import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, MicOff, Send, X, Volume2, VolumeX, Loader2 } from 'lucide-react';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

// Browser Speech API types
declare global {
  interface Window {
    SpeechRecognition: typeof SpeechRecognition;
    webkitSpeechRecognition: typeof SpeechRecognition;
  }
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: 'नमस्ते! 🙏 मैं Anglo Sanskrit Senior Secondary School, Pundri का AI सहायक हूँ। आप school के बारे में कुछ भी पूछ सकते हैं। बोलने के लिए माइक बटन दबाएं।\n\nHello! I am the AI assistant for Anglo Sanskrit Senior Secondary School, Pundri. Ask me anything about our school. Press the mic button to speak!' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  const [transcript, setTranscript] = useState('');

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const synthRef = useRef(window.speechSynthesis);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const speak = useCallback((text: string) => {
    if (!voiceEnabled) return;
    synthRef.current.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    // Use Hindi voice if available, else default
    const voices = synthRef.current.getVoices();
    const hindiVoice = voices.find(v => v.lang.startsWith('hi'));
    if (hindiVoice) utterance.voice = hindiVoice;
    utterance.rate = 0.95;
    utterance.pitch = 1;
    synthRef.current.speak(utterance);
  }, [voiceEnabled]);

  const sendMessage = useCallback(async (text: string) => {
    if (!text.trim() || loading) return;
    const userMsg: Message = { role: 'user', content: text.trim() };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput('');
    setTranscript('');
    setLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || 'https://anglo-wabsite.onrender.com'}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: updated }),
      });
      const data = await res.json();
      const reply = data.message ?? 'Sorry, I could not get a response.';
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
      speak(reply);
    } catch {
      const err = 'Something went wrong. Please try again.';
      setMessages(prev => [...prev, { role: 'assistant', content: err }]);
    } finally {
      setLoading(false);
    }
  }, [messages, loading, speak]);

  const startListening = useCallback(() => {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) {
      alert('Voice input is not supported in this browser. Please use Chrome.');
      return;
    }
    const recognition = new SR();
    recognition.lang = 'hi-IN';
    recognition.interimResults = true;
    recognition.continuous = false;
    recognitionRef.current = recognition;

    recognition.onstart = () => setListening(true);
    recognition.onend = () => {
      setListening(false);
      recognitionRef.current = null;
    };
    recognition.onresult = (e) => {
      let interim = '';
      let final = '';
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const t = e.results[i][0].transcript;
        if (e.results[i].isFinal) final += t;
        else interim += t;
      }
      setTranscript(final || interim);
      if (final) {
        sendMessage(final);
      }
    };
    recognition.onerror = () => setListening(false);
    recognition.start();
  }, [sendMessage]);

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
    setListening(false);
  }, []);

  const toggleVoice = () => {
    if (voiceEnabled) synthRef.current.cancel();
    setVoiceEnabled(v => !v);
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setOpen(o => !o)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-2xl flex items-center justify-center bg-secondary hover:bg-secondary/90 transition-colors"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Open school AI assistant"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }}>
              <X className="w-7 h-7 text-white" />
            </motion.span>
          ) : (
            <motion.span key="bot" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} className="flex flex-col items-center">
              <img src="/chatbot-logo.jpg" alt="Assistant" className="w-12 h-12 rounded-full object-cover ring-2 ring-white/50" />
            </motion.span>
          )}
        </AnimatePresence>
        {/* Pulse ring */}
        {!open && (
          <span className="absolute inset-0 rounded-full animate-ping bg-primary/30 pointer-events-none" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="fixed bottom-28 right-4 sm:right-6 z-50 w-[92vw] sm:w-[380px] max-h-[75vh] flex flex-col rounded-2xl shadow-2xl overflow-hidden border border-border bg-white"
          >
            {/* Header */}
            <div className="bg-secondary px-4 py-3 flex items-center gap-3">
              <img src="/chatbot-logo.jpg" alt="Assistant" className="w-9 h-9 rounded-full object-cover ring-2 ring-white/60 shrink-0" />
              <div className="flex-1 min-w-0">
                <p className="text-white font-bold text-sm leading-tight truncate">Anglo School AI Assistant</p>
                <p className="text-white/60 text-xs">Ask anything about our school</p>
              </div>
              <button onClick={toggleVoice} className="text-white/70 hover:text-white transition-colors p-1" title={voiceEnabled ? 'Mute voice' : 'Unmute voice'}>
                {voiceEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-3 py-4 space-y-3 bg-muted/20">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'assistant' && (
                    <img src="/chatbot-logo.jpg" alt="Assistant" className="w-6 h-6 rounded-full object-cover shrink-0 mr-2 mt-1" />
                  )}
                  <div className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed whitespace-pre-wrap ${
                    msg.role === 'user'
                      ? 'bg-secondary text-white rounded-br-sm'
                      : 'bg-white text-foreground shadow-sm border border-border rounded-bl-sm'
                  }`}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <img src="/chatbot-logo.jpg" alt="Assistant" className="w-6 h-6 rounded-full object-cover shrink-0 mr-2 mt-1" />
                  <div className="bg-white border border-border rounded-2xl rounded-bl-sm px-4 py-3 flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-secondary/50 rounded-full animate-bounce [animation-delay:0ms]" />
                    <span className="w-2 h-2 bg-secondary/50 rounded-full animate-bounce [animation-delay:150ms]" />
                    <span className="w-2 h-2 bg-secondary/50 rounded-full animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Voice transcript preview */}
            {(listening || transcript) && (
              <div className="px-3 py-2 bg-primary/5 border-t border-primary/20">
                <p className="text-xs text-primary font-medium flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  {listening ? 'Listening... ' : ''}{transcript || 'Speak now...'}
                </p>
              </div>
            )}

            {/* Input */}
            <div className="px-3 py-3 border-t border-border bg-white flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendMessage(input)}
                placeholder="Type or press mic to speak..."
                className="flex-1 text-sm bg-muted/40 rounded-full px-4 py-2.5 outline-none focus:ring-2 focus:ring-primary/30 placeholder:text-muted-foreground/60"
                disabled={loading}
              />
              {/* Mic button */}
              <button
                onMouseDown={startListening}
                onMouseUp={stopListening}
                onTouchStart={startListening}
                onTouchEnd={stopListening}
                onClick={listening ? stopListening : startListening}
                className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all ${
                  listening
                    ? 'bg-red-500 text-white shadow-lg shadow-red-200 scale-110'
                    : 'bg-primary/10 text-primary hover:bg-primary/20'
                }`}
                title={listening ? 'Stop listening' : 'Hold to speak'}
                disabled={loading}
              >
                {listening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              </button>
              {/* Send button */}
              <button
                onClick={() => sendMessage(input)}
                disabled={loading || !input.trim()}
                className="w-10 h-10 rounded-full bg-secondary text-white flex items-center justify-center shrink-0 hover:bg-secondary/90 disabled:opacity-40 transition-all"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
