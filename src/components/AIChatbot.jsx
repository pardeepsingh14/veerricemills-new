import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, Key, ChevronRight, RefreshCw, Zap } from 'lucide-react';
import { SYSTEM_PROMPT, INTENTS } from '../data/knowledgeBase';

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [geminiApiKey, setGeminiApiKey] = useState(localStorage.getItem('gemini_api_key') || '');
  const [showKeyInput, setShowKeyInput] = useState(false);
  
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: `Hello! 👋 Welcome to Veer Rice Mills. I am your Realtime AI Sales Agent powered by Live AI Inference. Ask me anything about our 1121 & 1509 Basmati, wholesale prices, export shipping, or grain specs!`,
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

  // Save Gemini Key
  const handleSaveApiKey = (key) => {
    setGeminiApiKey(key);
    localStorage.setItem('gemini_api_key', key);
    if (key.trim()) {
      setShowKeyInput(false);
    }
  };

  // Real-Time LLM Response Generator (Gemini Key -> Free Pollinations LLM -> Intelligent Local NLP)
  const fetchRealtimeAIResponse = async (userQuery) => {
    const queryLower = userQuery.toLowerCase().trim();

    // Strategy 1: User's Custom Gemini API Key (Sub-second response)
    if (geminiApiKey.trim()) {
      try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey.trim()}`, {
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
        console.warn("Gemini API call skipped, trying Free Public LLM Endpoint...", err);
      }
    }

    // Strategy 2: Free Public Realtime LLM Endpoint (Pollinations AI Inference - 0% API Key Needed)
    try {
      const fullPrompt = `${SYSTEM_PROMPT}\n\nCustomer Question: ${userQuery}\nAnswer concisely:`;
      const encodedPrompt = encodeURIComponent(fullPrompt);
      
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 6500); // 6.5s timeout

      const res = await fetch(`https://text.pollinations.ai/${encodedPrompt}`, {
        method: 'GET',
        headers: { 'User-Agent': 'Mozilla/5.0' },
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (res.ok) {
        const textResult = await res.text();
        if (textResult && textResult.length > 15 && !textResult.includes("Error")) {
          return {
            text: textResult.trim(),
            showWhatsAppBtn: true
          };
        }
      }
    } catch (err) {
      console.warn("Free Public LLM timeout/error, using High-Precision Knowledge Engine fallback:", err);
    }

    // Strategy 3: High-Precision Local Knowledge Engine (Instant fallback)
    for (const intent of INTENTS) {
      if (intent.keywords.some(kw => queryLower.includes(kw))) {
        return {
          text: intent.response,
          showWhatsAppBtn: true
        };
      }
    }

    // Generic Greetings & Fallback
    if (queryLower.includes("hi") || queryLower.includes("hello") || queryLower.includes("hey") || queryLower.includes("hlo")) {
      return {
        text: "Hello! 👋 Welcome to Veer Rice Mills (Karnal, Haryana). How can I assist you today? You can ask about our 1121 Golden Sella specs, container export shipping, or wholesale prices.",
        showWhatsAppBtn: false
      };
    }

    return {
      text: `🌾 **Veer Rice Mills - Product Overview:**\n\n• **Flagship Rice:** 1121 Golden Sella (8.35mm+ length), 1121 Steam Basmati, 1509 Sella, & Pusa Basmati.\n• **Minimum Export Order:** 1 FCL (~24-25 Metric Tons).\n• **Packaging:** 5kg, 10kg, 20kg, 25kg, 50kg in PP / BOPP / Jute / Non-Woven bags.\n\nClick the WhatsApp button below to speak directly with our Export Sales Manager!`,
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

    setMessages(prev => [
      ...prev,
      {
        id: Date.now() + 1,
        sender: 'bot',
        text: aiReply.text,
        showWhatsAppBtn: aiReply.showWhatsAppBtn,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    setIsTyping(false);
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
          aria-label="Open Realtime AI Agent"
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
          <span>Realtime AI Bot</span>
          <Zap size={14} color="#f1c40f" />
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
                <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: '900', color: '#ffffff' }}>Veer Realtime AI Agent</h4>
                <span style={{ fontSize: '0.72rem', color: '#f1c40f', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: '6px', height: '6px', background: '#2ecc71', borderRadius: '50%' }}></span> Free Realtime LLM Engine ⚡
                </span>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <button
                onClick={() => setShowKeyInput(!showKeyInput)}
                title="Configure Custom API Key"
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

          {/* Optional Custom Key Drawer */}
          {showKeyInput && (
            <div style={{ background: '#092214', padding: '10px 14px', borderBottom: '1px solid rgba(255,255,255,0.1)', color: '#ffffff' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ fontSize: '0.75rem', color: '#f1c40f', fontWeight: '700' }}>⚡ Custom Gemini API Key (Optional):</span>
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

                {/* WhatsApp Action Button */}
                {msg.sender === 'bot' && msg.showWhatsAppBtn && (
                  <button
                    onClick={() => openWhatsApp(`Inquiry regarding: ${messages[messages.length - 2]?.text || 'Wholesale Rice Quote'}`)}
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
                    💬 Get Wholesale Quote on WhatsApp <ChevronRight size={14} />
                  </button>
                )}

                <span style={{ fontSize: '0.65rem', color: '#7f8c8d', marginTop: '3px' }}>
                  {msg.timestamp}
                </span>
              </div>
            ))}

            {/* Realtime AI Thinking Indicator */}
            {isTyping && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 14px', background: '#ffffff', borderRadius: '14px', width: '180px', border: '1px solid #e1e8e3', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <RefreshCw size={14} className="animate-spin" color="#13982e" />
                <span style={{ fontSize: '0.75rem', fontWeight: '700', color: '#13982e' }}>Realtime AI Thinking...</span>
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
            <button onClick={() => handleSendMessage("What is the grain length of 1121 Golden Sella?")} style={pillStyle}>🌾 1121 Specs</button>
            <button onClick={() => handleSendMessage("Which rice is best for Biryani?")} style={pillStyle}>🍚 Biryani Rice</button>
            <button onClick={() => handleSendMessage("What is your Minimum Order Quantity for export?")} style={pillStyle}>📦 MOQ & Packaging</button>
            <button onClick={() => handleSendMessage("Which countries do you export to?")} style={pillStyle}>🚢 Export Countries</button>
            <button onClick={() => handleSendMessage("What is your factory address?")} style={pillStyle}>📍 Factory Address</button>
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
              placeholder="Ask anything about rice varieties, quotes..."
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
