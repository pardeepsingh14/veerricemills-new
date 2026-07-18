import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, Key, Cpu, ChevronRight, RefreshCw } from 'lucide-react';
import { SYSTEM_PROMPT, INTENTS } from '../data/knowledgeBase';

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [useGemini, setUseGemini] = useState(false);
  const [geminiApiKey, setGeminiApiKey] = useState(localStorage.getItem('gemini_api_key') || '');
  const [showKeyInput, setShowKeyInput] = useState(false);
  
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: `Hello! 👋 Welcome to Veer Rice Mills. I am your Realtime AI Sales Agent. Ask me anything about our Basmati varieties, grain specs, export packaging, or pricing!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  // Save Gemini Key to localStorage
  const handleSaveApiKey = (key) => {
    setGeminiApiKey(key);
    localStorage.setItem('gemini_api_key', key);
    if (key.trim()) {
      setUseGemini(true);
      setShowKeyInput(false);
    }
  };

  // Real-time Response Generator (Gemini API + Local NLP Engine)
  const fetchRealtimeAIResponse = async (userQuery) => {
    const queryLower = userQuery.toLowerCase().trim();

    // 1. If Gemini API Key is available and enabled, call Gemini API in real-time
    if (useGemini && geminiApiKey.trim()) {
      try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [
              {
                role: 'user',
                parts: [{ text: `${SYSTEM_PROMPT}\n\nUser Question: ${userQuery}` }]
              }
            ]
          })
        });

        const data = await response.json();
        if (data.candidates && data.candidates[0]?.content?.parts[0]?.text) {
          return {
            text: data.candidates[0].content.parts[0].text,
            showWhatsAppBtn: true
          };
        }
      } catch (err) {
        console.error("Gemini API Error, falling back to Local AI Engine:", err);
      }
    }

    // 2. Comprehensive Local NLP Engine
    for (const intent of INTENTS) {
      if (intent.keywords.some(kw => queryLower.includes(kw))) {
        return {
          text: intent.response,
          showWhatsAppBtn: ["price", "cost", "rate", "quote", "pricing", "export", "sample", "packaging", "1121", "1509"].some(k => queryLower.includes(k))
        };
      }
    }

    // Dynamic contextual response if query contains generic words
    if (queryLower.includes("hi") || queryLower.includes("hello") || queryLower.includes("hey")) {
      return {
        text: "Hello! 👋 Welcome to Veer Rice Mills. How can I assist your rice business today? Feel free to ask about our 1121 Golden Sella, Steam Basmati, or request a custom export quote.",
        showWhatsAppBtn: false
      };
    }

    return {
      text: `Veer Rice Mills processes and exports premium 1121 Basmati, 1509 Basmati, Golden Sella, and Non-Basmati grades (PR11/PR14).\n\n• **Minimum Export Order:** 1 FCL (~24 Metric Tons)\n• **Packaging Sizes:** 5kg to 50kg in PP / BOPP / Jute / Non-Woven bags.\n\nWould you like to speak directly with our export sales manager on WhatsApp for custom rates?`,
      showWhatsAppBtn: true
    };
  };

  const handleSendMessage = async (textToSend) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: 'user',
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');
    setIsTyping(true);

    const aiReply = await fetchRealtimeAIResponse(text);

    setTimeout(() => {
      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: aiReply.text,
        showWhatsAppBtn: aiReply.showWhatsAppBtn,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 500);
  };

  const openWhatsApp = (customMsg) => {
    const defaultMsg = encodeURIComponent(customMsg || "Hello Veer Rice Mills sales team, I would like to get a price quote and product specs.");
    window.open(`https://wa.me/919876543210?text=${defaultMsg}`, '_blank');
  };

  return (
    <div className="ai-chatbot-root" style={{ position: 'fixed', bottom: '2rem', right: '5.5rem', zIndex: 1000 }}>
      
      {/* Floating AI Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="ai-chat-launcher"
          aria-label="Open Realtime AI Sales Assistant"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'linear-gradient(135deg, #0c2e19 0%, #13982e 100%)',
            color: '#ffffff',
            border: '2px solid #f1c40f',
            padding: '12px 18px',
            borderRadius: '30px',
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.35)',
            cursor: 'pointer',
            fontWeight: '800',
            fontSize: '0.9rem',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}
        >
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <Bot size={22} color="#f1c40f" />
            <span style={{ position: 'absolute', top: '-2px', right: '-4px', width: '8px', height: '8px', background: '#2ecc71', borderRadius: '50%', border: '1.5px solid #0c2e19' }}></span>
          </div>
          <span>Veer AI Agent</span>
          <Sparkles size={14} color="#f1c40f" />
        </button>
      )}

      {/* Floating Chat Window */}
      {isOpen && (
        <div
          className="ai-chat-window animate-slide-up"
          style={{
            position: 'absolute',
            bottom: '0',
            right: '0',
            width: '375px',
            maxHeight: '540px',
            height: '82vh',
            background: '#ffffff',
            borderRadius: '16px',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.4)',
            border: '2px solid #13982e',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
          }}
        >
          {/* Header */}
          <div
            className="ai-chat-header"
            style={{
              background: 'linear-gradient(135deg, #092214 0%, #0c2e19 100%)',
              color: '#ffffff',
              padding: '12px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: '2px solid #f1c40f'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid #f1c40f'
                }}
              >
                <img src="/images/Logo.jpeg" alt="Veer AI Agent" style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover' }} />
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: '900', color: '#ffffff' }}>Veer AI Sales Agent</h4>
                <span style={{ fontSize: '0.72rem', color: '#f1c40f', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: '6px', height: '6px', background: '#2ecc71', borderRadius: '50%' }}></span> {useGemini ? 'Realtime Gemini AI Mode' : 'Realtime Knowledge Engine'}
                </span>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                onClick={() => setShowKeyInput(!showKeyInput)}
                title="Configure Gemini AI Key"
                style={{ background: 'rgba(255,255,255,0.15)', border: 'none', color: '#f1c40f', borderRadius: '50%', width: '28px', height: '28px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <Key size={14} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                style={{ background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer', opacity: 0.8 }}
                aria-label="Close Chat"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Optional Gemini API Key Drawer */}
          {showKeyInput && (
            <div style={{ background: '#092214', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#ffffff' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '0.75rem', color: '#f1c40f', fontWeight: '700' }}>⚡ Realtime Gemini API Key (Optional):</span>
                <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer" style={{ fontSize: '0.7rem', color: '#2ecc71' }}>Get Free Key ↗</a>
              </div>
              <div style={{ display: 'flex', gap: '6px' }}>
                <input
                  type="password"
                  placeholder="Paste Gemini API Key..."
                  value={geminiApiKey}
                  onChange={(e) => setGeminiApiKey(e.target.value)}
                  style={{ flex: 1, padding: '5px 10px', fontSize: '0.75rem', borderRadius: '6px', border: '1px solid #13982e', outline: 'none' }}
                />
                <button
                  onClick={() => handleSaveApiKey(geminiApiKey)}
                  style={{ background: '#f1c40f', color: '#092214', border: 'none', padding: '5px 10px', borderRadius: '6px', fontWeight: '800', fontSize: '0.75rem', cursor: 'pointer' }}
                >
                  Save
                </button>
              </div>
            </div>
          )}

          {/* Messages Scroll Area */}
          <div
            className="ai-messages-container"
            style={{
              flex: 1,
              padding: '14px',
              overflowY: 'auto',
              background: '#f8faf9',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}
          >
            {messages.map((msg) => (
              <div
                key={msg.id}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start'
                }}
              >
                <div
                  style={{
                    maxWidth: '88%',
                    padding: '10px 14px',
                    borderRadius: msg.sender === 'user' ? '16px 16px 2px 16px' : '16px 16px 16px 2px',
                    background: msg.sender === 'user' ? '#13982e' : '#ffffff',
                    color: msg.sender === 'user' ? '#ffffff' : '#1c2833',
                    fontSize: '0.85rem',
                    lineHeight: '1.45',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    border: msg.sender === 'bot' ? '1px solid #e1e8e3' : 'none',
                    whiteSpace: 'pre-wrap'
                  }}
                >
                  {msg.text}
                </div>

                {/* WhatsApp Direct Action Button */}
                {msg.sender === 'bot' && msg.showWhatsAppBtn && (
                  <button
                    onClick={() => openWhatsApp(`Inquiry regarding: ${messages[messages.length - 2]?.text || 'Basmati Rice Wholesale Rates'}`)}
                    style={{
                      marginTop: '6px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: '#25D366',
                      color: '#ffffff',
                      border: 'none',
                      padding: '7px 14px',
                      borderRadius: '12px',
                      fontSize: '0.78rem',
                      fontWeight: '800',
                      cursor: 'pointer',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                      transition: 'transform 0.2s ease'
                    }}
                  >
                    💬 Get Price Quote on WhatsApp <ChevronRight size={14} />
                  </button>
                )}

                <span style={{ fontSize: '0.65rem', color: '#7f8c8d', marginTop: '3px' }}>
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 12px', background: '#ffffff', borderRadius: '12px', width: '75px', border: '1px solid #e1e8e3' }}>
                <span className="dot-typing" style={{ width: '6px', height: '6px', background: '#13982e', borderRadius: '50%', animation: 'pulse 1s infinite' }}></span>
                <span className="dot-typing" style={{ width: '6px', height: '6px', background: '#13982e', borderRadius: '50%', animation: 'pulse 1s infinite 0.2s' }}></span>
                <span className="dot-typing" style={{ width: '6px', height: '6px', background: '#13982e', borderRadius: '50%', animation: 'pulse 1s infinite 0.4s' }}></span>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Action Suggestion Buttons */}
          <div
            className="ai-quick-pills"
            style={{
              padding: '8px 12px',
              background: '#ffffff',
              borderTop: '1px solid #e1e8e3',
              display: 'flex',
              gap: '6px',
              overflowX: 'auto',
              whiteSpace: 'nowrap'
            }}
          >
            <button onClick={() => handleSendMessage("What is the spec for 1121 Golden Sella?")} style={pillStyle}>🌾 1121 Golden Sella</button>
            <button onClick={() => handleSendMessage("What is the spec for 1509 Steam?")} style={pillStyle}>🍚 1509 Steam</button>
            <button onClick={() => handleSendMessage("What is your Minimum Order Quantity?")} style={pillStyle}>📦 MOQ & Packaging</button>
            <button onClick={() => handleSendMessage("Which countries do you export to?")} style={pillStyle}>🚢 Export Info</button>
            <button onClick={() => handleSendMessage("How can I get wholesale prices?")} style={pillStyle}>💰 Wholesale Rates</button>
            <button onClick={() => handleSendMessage("What is your plant address?")} style={pillStyle}>📍 Plant Location</button>
          </div>

          {/* Chat Input Bar */}
          <form
            onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '10px 12px',
              background: '#ffffff',
              borderTop: '1px solid #e1e8e3'
            }}
          >
            <input
              type="text"
              placeholder="Ask about Biryani rice, 1121, prices..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              style={{
                flex: 1,
                border: '1.5px solid #13982e',
                borderRadius: '20px',
                padding: '8px 14px',
                fontSize: '0.85rem',
                outline: 'none'
              }}
            />
            <button
              type="submit"
              style={{
                background: '#13982e',
                color: '#ffffff',
                border: 'none',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                marginLeft: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              aria-label="Send Message"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

const pillStyle = {
  background: '#f0fdf4',
  color: '#13982e',
  border: '1px solid #bbf7d0',
  borderRadius: '14px',
  padding: '5px 12px',
  fontSize: '0.78rem',
  fontWeight: '700',
  cursor: 'pointer',
  whiteSpace: 'nowrap'
};
