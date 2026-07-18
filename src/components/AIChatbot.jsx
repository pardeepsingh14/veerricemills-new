import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, Phone, MessageSquare, ChevronRight } from 'lucide-react';
import { COMPANY_INFO, RICE_VARIETIES, PACKAGING_OPTIONS, FAQS } from '../data/knowledgeBase';

export default function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: `Hello! 👋 Welcome to Veer Rice Mills. I am your AI Sales Assistant. How can I help you today with our premium Basmati & Non-Basmati rice varieties?`,
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

  // Smart Intent & Response Matching Engine
  const generateAIResponse = (userQuery) => {
    const queryLower = userQuery.toLowerCase();

    // Check FAQ keywords first
    for (const faq of FAQS) {
      if (faq.keywords.some(kw => queryLower.includes(kw))) {
        return {
          text: faq.response,
          showWhatsAppBtn: faq.keywords.some(k => ["price", "cost", "quote", "pricing", "minimum", "sample", "export"].includes(k))
        };
      }
    }

    // Check specific rice varieties
    const matchedRice = RICE_VARIETIES.find(r => 
      queryLower.includes(r.name.toLowerCase()) || 
      (queryLower.includes("1121") && r.name.includes("1121")) ||
      (queryLower.includes("1509") && r.name.includes("1509")) ||
      (queryLower.includes("sella") && r.name.includes("Sella")) ||
      (queryLower.includes("steam") && r.name.includes("Steam"))
    );

    if (matchedRice) {
      return {
        text: `🌾 **${matchedRice.name}**\n\n• **Average Grain Length:** ${matchedRice.length}\n• **Moisture Content:** ${matchedRice.moisture}\n• **Best Recommended For:** ${matchedRice.bestFor}\n\n*${matchedRice.description}*`,
        showWhatsAppBtn: true
      };
    }

    // Check location / contact
    if (queryLower.includes("address") || queryLower.includes("location") || queryLower.includes("contact") || queryLower.includes("phone") || queryLower.includes("where")) {
      return {
        text: `📍 **Veer Rice Mills Location & Contact:**\n\n• **Address:** ${COMPANY_INFO.location}\n• **Helpline:** ${COMPANY_INFO.phone}\n• **Email:** ${COMPANY_INFO.email}\n• **Daily Processing Capacity:** ${COMPANY_INFO.millingCapacity}`,
        showWhatsAppBtn: true
      };
    }

    // Default Fallback
    return {
      text: `Thank you for reaching out! Veer Rice Mills specializes in premium 1121 & 1509 Basmati Rice, Golden Sella, Steam Rice, and Non-Basmati export grades. \n\nWould you like to check specific grain specifications or connect with our export sales manager on WhatsApp?`,
      showWhatsAppBtn: true
    };
  };

  const handleSendMessage = (textToSend) => {
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

    // Simulate AI thinking delay
    setTimeout(() => {
      const aiReply = generateAIResponse(text);
      const botMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: aiReply.text,
        showWhatsAppBtn: aiReply.showWhatsAppBtn,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 700);
  };

  const openWhatsApp = (customMsg) => {
    const defaultMsg = encodeURIComponent(customMsg || "Hello Veer Rice Mills team, I would like to get a price quote and product details.");
    window.open(`https://wa.me/919876543210?text=${defaultMsg}`, '_blank');
  };

  return (
    <div className="ai-chatbot-root" style={{ position: 'fixed', bottom: '2rem', right: '5.5rem', zIndex: 1000 }}>
      
      {/* Floating AI Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="ai-chat-launcher"
          aria-label="Open AI Assistant Chat"
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
          <span>Veer AI Bot</span>
          <Sparkles size={14} color="#f1c40f" />
        </button>
      )}

      {/* Floating Chat Window Drawer */}
      {isOpen && (
        <div
          className="ai-chat-window animate-slide-up"
          style={{
            position: 'absolute',
            bottom: '0',
            right: '0',
            width: '360px',
            maxHeight: '520px',
            height: '80vh',
            background: '#ffffff',
            borderRadius: '16px',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.4)',
            border: '2px solid #13982e',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden'
          }}
        >
          {/* Chat Window Header */}
          <div
            className="ai-chat-header"
            style={{
              background: 'linear-gradient(135deg, #092214 0%, #0c2e19 100%)',
              color: '#ffffff',
              padding: '14px 16px',
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
                <img src="/images/Logo.jpeg" alt="Veer Bot" style={{ width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover' }} />
              </div>
              <div>
                <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: '900', color: '#ffffff' }}>Veer AI Sales Assistant</h4>
                <span style={{ fontSize: '0.75rem', color: '#f1c40f', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ width: '6px', height: '6px', background: '#2ecc71', borderRadius: '50%' }}></span> Online | Instant Specs & Quotes
                </span>
              </div>
            </div>
            
            <button
              onClick={() => setIsOpen(false)}
              style={{ background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer', opacity: 0.8 }}
              aria-label="Close Chat"
            >
              <X size={20} />
            </button>
          </div>

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
                    maxWidth: '85%',
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

                {/* Optional WhatsApp Action Button embedded in Bot Reply */}
                {msg.sender === 'bot' && msg.showWhatsAppBtn && (
                  <button
                    onClick={() => openWhatsApp(`Inquiry regarding: ${messages[messages.length - 2]?.text || 'Basmati Rice Quote'}`)}
                    style={{
                      marginTop: '6px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: '#25D366',
                      color: '#ffffff',
                      border: 'none',
                      padding: '6px 12px',
                      borderRadius: '12px',
                      fontSize: '0.75rem',
                      fontWeight: '800',
                      cursor: 'pointer',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
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
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 12px', background: '#ffffff', borderRadius: '12px', width: '70px', border: '1px solid #e1e8e3' }}>
                <span className="dot-typing" style={{ width: '6px', height: '6px', background: '#13982e', borderRadius: '50%', animation: 'pulse 1s infinite' }}></span>
                <span className="dot-typing" style={{ width: '6px', height: '6px', background: '#13982e', borderRadius: '50%', animation: 'pulse 1s infinite 0.2s' }}></span>
                <span className="dot-typing" style={{ width: '6px', height: '6px', background: '#13982e', borderRadius: '50%', animation: 'pulse 1s infinite 0.4s' }}></span>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestion Pills */}
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
            <button onClick={() => handleSendMessage("What is the spec for 1121 Golden Sella?")} style={pillStyle}>🌾 1121 Specs</button>
            <button onClick={() => handleSendMessage("What is your Minimum Order Quantity?")} style={pillStyle}>📦 MOQ & Shipping</button>
            <button onClick={() => handleSendMessage("Which countries do you export to?")} style={pillStyle}>🚢 Export Info</button>
            <button onClick={() => handleSendMessage("What is your plant address?")} style={pillStyle}>📍 Factory Location</button>
          </div>

          {/* Chat Input Field */}
          <form
            onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '8px 10px',
              background: '#ffffff',
              borderTop: '1px solid #e1e8e3'
            }}
          >
            <input
              type="text"
              placeholder="Ask about rice varieties, quotes..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              style={{
                flex: 1,
                border: '1px solid #bdc3c7',
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
                width: '34px',
                height: '34px',
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
  padding: '4px 10px',
  fontSize: '0.75rem',
  fontWeight: '700',
  cursor: 'pointer',
  whiteSpace: 'nowrap'
};
