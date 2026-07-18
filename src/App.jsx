import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import MillingProcess from './components/MillingProcess';
import Products from './components/Products';
import ExportMap from './components/ExportMap';
import RiceCalculator from './components/RiceCalculator';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RiceSommelier from './components/RiceSommelier';
import CounterBanner from './components/CounterBanner';
import FeaturesGrid from './components/FeaturesGrid';
import Services from './components/Services';
import Certificates from './components/Certificates';
import AIChatbot from './components/AIChatbot';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false); // Default to Light Mode (Haryana Rice Mill style)
  const [floatingGrains, setFloatingGrains] = useState([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Detect desktop screen width for custom follower cursor
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isDesktop]);

  useEffect(() => {
    if (!isDesktop) return;
    let animationFrameId;
    const render = () => {
      setCursorPos((prev) => {
        const dx = mousePos.x - prev.x;
        const dy = mousePos.y - prev.y;
        return {
          x: prev.x + dx * 0.15,
          y: prev.y + dy * 0.15
        };
      });
      animationFrameId = requestAnimationFrame(render);
    };
    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [mousePos, isDesktop]);

  useEffect(() => {
    // Sync the theme class with index.css HSL configurations
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.remove('light-mode');
    } else {
      root.classList.add('light-mode');
    }
  }, [isDarkMode]);

  // Generate random placement values for global floating background items (grains + images)
  useEffect(() => {
    const items = Array.from({ length: 24 }).map((_, i) => {
      const isImage = i % 4 === 0;
      const src = isImage ? [
        '/images/Rice Mill Image.jpeg',
        '/images/Logo.jpeg',
        '/images/Qwality Process.jpeg',
        '/images/1121 Stream Basmati.jpeg',
        '/images/Sona Mansuri.jpeg'
      ][(i / 4) % 5] : null;

      return {
        id: i,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 15}s`,
        duration: `${20 + Math.random() * 20}s`,
        size: isImage ? `${50 + Math.random() * 40}px` : `${5 + Math.random() * 6}px`,
        transform: `rotate(${Math.random() * 360}deg)`,
        isImage,
        src
      };
    });
    setFloatingGrains(items);
  }, []);

  return (
    <div className="app-layout">
      {/* Global Floating Grains & Images Background */}
      <div className="global-floating-bg">
        {floatingGrains.map((item) => (
          item.isImage ? (
            <div
              key={item.id}
              className="floating-img-item"
              style={{
                left: item.left,
                animationDelay: item.delay,
                animationDuration: item.duration,
                width: item.size,
                height: item.size,
                transform: item.transform
              }}
            >
              <img src={item.src} alt="" />
            </div>
          ) : (
            <span
              key={item.id}
              className="floating-grain"
              style={{
                left: item.left,
                animationDelay: item.delay,
                animationDuration: item.duration,
                width: item.size,
                height: `calc(${item.size} * 2.2)`,
                transform: item.transform
              }}
            />
          )
        ))}
      </div>

      {/* Premium Glass Header */}
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* Main Page Layout Sections (Haryana Rice Mill style sequence) */}
      <main style={{ position: 'relative', zIndex: 2 }}>
        {/* 1. Hero Banner */}
        <Hero />

        {/* 2. Journey, Journey Steps & Milling Process */}
        <MillingProcess />

        {/* 3. About Heritage */}
        <About />

        {/* 4. Video Counters Block */}
        <CounterBanner />

        {/* 5. Features Grid */}
        <FeaturesGrid />

        {/* 6. Product Catalog */}
        <Products />

        {/* 7. Services Section */}
        <Services />

        {/* 8. Certificates List */}
        <Certificates />

        {/* 9. Global Export Map & Pillars */}
        <ExportMap />

        {/* 10. Sommelier Matcher Expert */}
        <RiceSommelier />

        {/* 11. Container Calculator */}
        <RiceCalculator />

        {/* 12. Quote Inquiry Form */}
        <Contact />
      </main>

      {/* Footer Details */}
      <Footer />

      {/* Floating WhatsApp Integration (Bottom-Left corner, Haryana style) */}
      <a
        href="https://wa.me/919876543210?text=Hello%20Veer%20Rice%20Mills,%20I%20am%20interested%20in%20your%20rice%20products."
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float-btn"
      >
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Chat" />
        <span className="whatsapp-tooltip">Chat with us</span>
      </a>

      {/* Floating Call Hotline Button (Bottom-Right corner, Haryana style) */}
      <a
        href="tel:+919876543210"
        className="call-float-btn"
      >
        <span>📞</span>
        <span className="call-tooltip">Call +91 98765 43210</span>
      </a>

      {/* Built-in Veer AI Sales Assistant Chatbot */}
      <AIChatbot />

      {/* Custom Follower Cursor (Trailing Double Circle) */}
      {isDesktop && (
        <>
          <div
            className="custom-cursor-dot"
            style={{
              left: `${mousePos.x}px`,
              top: `${mousePos.y}px`
            }}
          />
          <div
            className="custom-cursor-ring"
            style={{
              left: `${cursorPos.x}px`,
              top: `${cursorPos.y}px`
            }}
          />
        </>
      )}
    </div>
  );
}
