import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Header({ isDarkMode, setIsDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'milling', 'products', 'exports', 'calculator', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', target: 'home' },
    { label: 'About us', target: 'about' },
    { label: 'Products', target: 'products' },
    { label: 'Our Brand', target: 'exports' },
    { label: 'Blogs', target: 'milling' },
    { label: 'Contact', target: 'contact' },
  ];

  const handleNavClick = (target) => {
    setIsOpen(false);
    const element = document.getElementById(target);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="header-wrapper">
      {/* Topbar (Haryana Rice Mill style: White Background, Green Icons) */}
      <div className="topbar">
        <div className="container topbar-inner" style={{ maxWidth: '100%', padding: '0 2rem' }}>
          <div className="topbar-left">
            <span className="topbar-info-item">
              <span className="topbar-icon" style={{ color: '#13982e', marginRight: '6px' }}>📍</span> 
              NH-44, GT Road, Near Grain Market, Karnal - 132001, Haryana, India
            </span>
            <span className="topbar-info-item">
              <span className="topbar-icon" style={{ color: '#13982e', marginRight: '6px' }}>✉️</span> 
              info@veerricemills.com
            </span>
          </div>
          <div className="topbar-right" style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
            {/* Custom Multi-Language Selector Widget */}
            <div className="google-translate-container" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: '800', color: '#13982e', textTransform: 'uppercase' }}>🌐 Translate:</span>
              <select
                onChange={(e) => {
                  const langCode = e.target.value;
                  document.cookie = `googtrans=/en/${langCode}; path=/`;
                  document.cookie = `googtrans=/en/${langCode}; path=/; domain=.${window.location.hostname}`;
                  
                  const selectEl = document.querySelector('.goog-te-combo');
                  if (selectEl) {
                    selectEl.value = langCode;
                    selectEl.dispatchEvent(new Event('change'));
                  } else {
                    window.location.reload();
                  }
                }}
                style={{
                  padding: '5px 12px',
                  borderRadius: '20px',
                  border: '2px solid #13982e',
                  background: '#ffffff',
                  color: '#13982e',
                  fontWeight: '800',
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  outline: 'none',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.08)'
                }}
              >
                <option value="en">🇬🇧 English</option>
                <option value="ar">🇸🇦 Arabic (العربية)</option>
                <option value="zh-CN">🇨🇳 Chinese (中文)</option>
                <option value="es">🇪🇸 Spanish (Español)</option>
                <option value="ru">🇷🇺 Russian (Русский)</option>
                <option value="fr">🇫🇷 French (Français)</option>
                <option value="hi">🇮🇳 Hindi (हिन्दी)</option>
                <option value="de">🇩🇪 German (Deutsch)</option>
              </select>
              
              {/* Native Google Translate Hidden Mounting Anchor */}
              <div id="google_translate_element" style={{ display: 'none' }}></div>
            </div>
            
            {/* Social Links */}
            <div className="topbar-socials">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="topbar-social-btn">f</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="topbar-social-btn">📸</a>
            </div>

            {/* Dark Mode Switcher */}
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)} 
              className="theme-toggle-btn-topbar"
              aria-label={isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#13982e', display: 'flex', alignItems: 'center' }}
            >
              {isDarkMode ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          </div>
        </div>
      </div>

      <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
        <div className="nav-container-custom" style={{ display: 'flex', alignItems: 'stretch', justifyContent: 'space-between', height: '90px', padding: 0, width: '100%' }}>
          
          {/* Brand Logo - Tall White Hanging Box (Haryana Rice Mill style) */}
          <div className="logo-box-wrap">
            <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} className="logo-wrap-custom">
              <img src="/images/Logo.jpeg" alt="Veer Rice Mills Logo" className="logo-img-large" />
              <div className="logo-text-custom">
                <span className="logo-title-custom">VEER RICE MILL</span>
                <span className="logo-sub-custom">Basmati Rice Manufacturer, Supplier & Exporter</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation - Inside Green Bar */}
          <nav className="desktop-nav-custom">
            {navItems.map((item) => (
              <a
                key={item.target}
                href={`#${item.target}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.target); }}
                className={`nav-link-custom ${activeSection === item.target ? 'nav-link-custom-active' : ''}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Action Controls & Helpline Black Box */}
          <div className="header-controls-custom">
            {/* Dark green/black Helpline Panel */}
            <div className="header-helpline-custom">
              <div className="helpline-icon-custom-wrap">
                <span className="helpline-phone-icon">📞</span>
              </div>
              <div className="helpline-info">
                <span className="helpline-label">Call us on</span>
                <a href="tel:+919876543210" className="helpline-number">+91 98765 43210</a>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button onClick={() => setIsOpen(!isOpen)} className="mobile-menu-btn-custom" aria-label="Toggle menu">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        {isOpen && (
          <div className="mobile-drawer-custom">
            <nav className="mobile-nav-custom">
              {navItems.map((item) => (
                <a
                  key={item.target}
                  href={`#${item.target}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.target); }}
                  className={`mobile-nav-link-custom ${activeSection === item.target ? 'mobile-nav-link-custom-active' : ''}`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}
