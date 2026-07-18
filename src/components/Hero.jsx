import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      title: "Say Hello To The Premium Quality Rice Range",
      subtitle: "WHERE EACH GRAIN ADDS A TOUCH OF EXCELLENCE TO YOUR DISHES!",
      layoutType: "five-bags"
    },
    {
      id: 1,
      title: "PREMIUM QUALITY BASMATI RICE",
      subtitle: "EXCELLENCE & PURITY IN EVERY GRAIN - TRUSTED WORLDWIDE",
      layoutType: "cooked-rice"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <section id="home" className="hero-slider-section" style={{ position: 'relative', overflow: 'hidden', height: '88vh', background: '#05140b' }}>
      
      {/* Background Video Stream (User's Custom Official Video VeerRiceMills.mp4) */}
      <div className="hero-video-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.95) contrast(1.05)' }}
        >
          <source src="/videos/VeerRiceMills.mp4" type="video/mp4" />
        </video>

        {/* Dark Vignette Overlay for rich text contrast */}
        <div 
          className="hero-video-overlay" 
          style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            background: 'radial-gradient(circle at center, rgba(12, 43, 24, 0.4) 0%, rgba(5, 20, 11, 0.75) 100%)' 
          }} 
        />
      </div>

      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.id}
            className={`hero-slide ${isActive ? 'active-slide' : ''}`}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: isActive ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: isActive ? 5 : 2
            }}
          >
            <div className="container hero-slide-container" style={{ position: 'relative', zIndex: 10, width: '100%', textAlign: 'center', color: '#ffffff', padding: '0 2rem' }}>
              
              {/* Floating Text Section */}
              <div className="slide-text-wrapper animate-floating-text" style={{ marginBottom: '2rem' }}>
                <h1 
                  className="slide-title" 
                  style={{ 
                    fontFamily: 'var(--font-heading)', 
                    fontSize: '3.6rem', 
                    fontWeight: '900', 
                    textTransform: 'uppercase', 
                    letterSpacing: '1px',
                    color: '#ffffff',
                    textShadow: '0 4px 20px rgba(0,0,0,0.9)',
                    lineHeight: '1.2'
                  }}
                >
                  {slide.title}
                </h1>
                <p 
                  className="slide-subtitle" 
                  style={{ 
                    fontFamily: 'var(--font-body)', 
                    fontSize: '1.3rem', 
                    fontWeight: '800', 
                    color: '#f1c40f', 
                    textTransform: 'uppercase', 
                    letterSpacing: '2px', 
                    marginTop: '0.85rem',
                    textShadow: '0 2px 10px rgba(0,0,0,0.9)'
                  }}
                >
                  {slide.subtitle}
                </p>
              </div>

              {/* Layout Content (5 Transparent Branded Veer Rice Bags) */}
              {slide.layoutType === "five-bags" && (
                <div 
                  className="slide-bags-row" 
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'flex-end', 
                    gap: '2rem', 
                    marginTop: '1.5rem',
                    height: '320px' 
                  }}
                >
                  <img src="/images/veer_classic_bag.png" alt="Veer Classic Bag" className="hero-bag-item bag-classic-1" style={{ height: '240px', objectFit: 'contain', filter: 'drop-shadow(0 20px 25px rgba(0,0,0,0.8))' }} />
                  <img src="/images/veer_sella_bag.png" alt="Veer Sella Bag" className="hero-bag-item bag-sella-1" style={{ height: '275px', objectFit: 'contain', filter: 'drop-shadow(0 20px 25px rgba(0,0,0,0.8))' }} />
                  <img src="/images/veer_classic_bag.png" alt="Veer Premium Bag" className="hero-bag-item bag-classic-2" style={{ height: '310px', objectFit: 'contain', filter: 'drop-shadow(0 25px 30px rgba(0,0,0,0.9))' }} />
                  <img src="/images/veer_sella_bag.png" alt="Veer Gold Bag" className="hero-bag-item bag-sella-2" style={{ height: '275px', objectFit: 'contain', filter: 'drop-shadow(0 20px 25px rgba(0,0,0,0.8))' }} />
                  <img src="/images/veer_classic_bag.png" alt="Veer Daily Bag" className="hero-bag-item bag-classic-3" style={{ height: '240px', objectFit: 'contain', filter: 'drop-shadow(0 20px 25px rgba(0,0,0,0.8))' }} />
                </div>
              )}

              {slide.layoutType === "cooked-rice" && (
                <div 
                  className="slide-cooked-row" 
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    gap: '3.5rem', 
                    marginTop: '1.5rem' 
                  }}
                >
                  {/* Left Bag */}
                  <img src="/images/veer_sella_bag.png" alt="Veer Sella Bag" className="hero-bag-item" style={{ height: '290px', objectFit: 'contain', filter: 'drop-shadow(0 20px 25px rgba(0,0,0,0.8))' }} />
                  
                  {/* Central Steaming Bowl */}
                  <div className="cooked-rice-bowl-container" style={{ position: 'relative', width: '250px', height: '250px' }}>
                    <div 
                      className="cooked-rice-circle-frame" 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        borderRadius: '50%', 
                        border: '6px solid #ffffff', 
                        overflow: 'hidden', 
                        boxShadow: '0 15px 40px rgba(0,0,0,0.8)',
                        background: '#ffffff'
                      }}
                    >
                      <img src="/images/Qwality Process.jpeg" alt="Premium Cooked Rice" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  </div>

                  {/* Right Bag */}
                  <img src="/images/veer_classic_bag.png" alt="Veer Classic Bag" className="hero-bag-item" style={{ height: '290px', objectFit: 'contain', filter: 'drop-shadow(0 20px 25px rgba(0,0,0,0.8))' }} />
                </div>
              )}

            </div>
          </div>
        );
      })}

      {/* Slider Nav Arrows */}
      <button 
        onClick={handlePrev} 
        className="hero-arrow-btn prev-arrow" 
        aria-label="Previous Slide"
        style={{ 
          position: 'absolute', 
          left: '2rem', 
          top: '50%', 
          transform: 'translateY(-50%)', 
          background: 'rgba(255, 255, 255, 0.12)', 
          border: '1.5px solid rgba(255, 255, 255, 0.4)', 
          borderRadius: '50%', 
          width: '50px', 
          height: '50px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          color: '#ffffff', 
          cursor: 'pointer', 
          zIndex: 100, 
          transition: 'all 0.3s ease' 
        }}
      >
        <ChevronLeft size={24} />
      </button>

      <button 
        onClick={handleNext} 
        className="hero-arrow-btn next-arrow" 
        aria-label="Next Slide"
        style={{ 
          position: 'absolute', 
          right: '2rem', 
          top: '50%', 
          transform: 'translateY(-50%)', 
          background: 'rgba(255, 255, 255, 0.12)', 
          border: '1.5px solid rgba(255, 255, 255, 0.4)', 
          borderRadius: '50%', 
          width: '50px', 
          height: '50px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          color: '#ffffff', 
          cursor: 'pointer', 
          zIndex: 100, 
          transition: 'all 0.3s ease' 
        }}
      >
        <ChevronRight size={24} />
      </button>

      {/* Dot Indicators */}
      <div 
        className="slider-dots" 
        style={{ 
          position: 'absolute', 
          bottom: '2rem', 
          left: '50%', 
          transform: 'translateX(-50%)', 
          display: 'flex', 
          gap: '0.75rem', 
          zIndex: 100 
        }}
      >
        <button 
          onClick={() => setCurrentSlide(0)} 
          className={`slider-dot ${currentSlide === 0 ? 'dot-active' : ''}`} 
          aria-label="Slide 1 indicator"
          style={{ 
            width: '12px', 
            height: '12px', 
            borderRadius: '50%', 
            background: currentSlide === 0 ? '#f1c40f' : 'rgba(255,255,255,0.4)', 
            border: 'none', 
            cursor: 'pointer', 
            transition: 'background 0.3s ease' 
          }} 
        />
        <button 
          onClick={() => setCurrentSlide(1)} 
          className={`slider-dot ${currentSlide === 1 ? 'dot-active' : ''}`} 
          aria-label="Slide 2 indicator"
          style={{ 
            width: '12px', 
            height: '12px', 
            borderRadius: '50%', 
            background: currentSlide === 1 ? '#f1c40f' : 'rgba(255,255,255,0.4)', 
            border: 'none', 
            cursor: 'pointer', 
            transition: 'background 0.3s ease' 
          }} 
        />
      </div>
    </section>
  );
}
