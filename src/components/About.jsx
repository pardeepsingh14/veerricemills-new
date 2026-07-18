import React, { useEffect, useState } from 'react';
import { Award, Leaf, Target, Shield, Cpu, Sparkles, TrendingUp, Handshake, ChevronLeft, ChevronRight } from 'lucide-react';

const Counter = ({ target, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target, 10);
    if (start === end) return;

    let totalMiliseconds = duration;
    let incrementTime = Math.abs(Math.floor(totalMiliseconds / end));
    if (incrementTime < 10) incrementTime = 10; // clamp to 10ms min limit

    const timer = setInterval(() => {
      start += Math.ceil(end / (duration / incrementTime));
      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

export default function About() {
  const stats = [
    { value: '250000', suffix: '+ MT', label: 'Annual Milling Capacity' },
    { value: '42', suffix: '+', label: 'Countries Exported To' },
    { value: '15', suffix: 'k+', label: 'Happy Farmers Network' },
    { value: '99', suffix: '.8%', label: 'Purity Inspection Score' },
  ];

  const slideImages = [
    {
      src: '/images/Rice Mill Image.jpeg',
      title: 'State-of-the-Art Milling Plant',
      desc: 'Our modern processing facility located in the fertile rice heartland.'
    },
    {
      src: '/images/Rice Mill Image 2.jpeg',
      title: 'Advanced Sorting Infrastructure',
      desc: 'High-speed computerized Sortex machinery processing premium grains.'
    },
    {
      src: '/images/Rice Mill Image 3.jpeg',
      title: 'Rigorous Quality Checks',
      desc: 'Strict quality monitoring at every stage of the rice milling process.'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideImages.length) % slideImages.length);
  };

  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="tag">Our Heritage & Legacy</span>
          <h2>A Legacy Rooted in Agriculture, Driven by Innovation</h2>
          <p>
            Veer Rice Mills — From the Fields of India to Tables Around the World.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid-2" style={{ marginBottom: '4rem', alignItems: 'stretch', gap: '3rem' }}>
          <div className="about-text-content" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', lineHeight: '1.3' }}>
              Every great journey begins with a <span className="gradient-accent-text">vision</span>.
            </h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.25rem', fontSize: '1.05rem', lineHeight: '1.7' }}>
              The story of <strong>Veer Rice Mills</strong> traces its roots back to the 1950s, when our founder, <strong>Late Shri Rattan Singh</strong>, dedicated his life to farming with honesty, hard work, and an unwavering commitment to quality. At a time when agriculture relied mainly on traditional methods, he believed that innovation could transform the future of farming.
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.25rem', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Inspired by this vision, the family established Veer Rice Mills in <strong>2017</strong>, carrying forward his values while embracing modern technology. What started as a dream has grown into a trusted rice processing company committed to delivering premium-quality rice to customers across the globe.
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.25rem', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Today, Veer Rice Mills combines generations of agricultural knowledge with state-of-the-art milling technology to produce exceptional Basmati and Non-Basmati rice. Every grain is carefully selected, processed, and packaged under strict quality standards to ensure superior aroma, purity, taste, and consistency.
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: '1.7' }}>
              We specialize in processing a wide range of premium rice varieties for wholesalers, distributors, retailers, supermarkets, hotels, and food service businesses worldwide. Our advanced processing systems, modern infrastructure, and rigorous quality control enable us to meet international standards while preserving the natural excellence of every harvest.
            </p>
          </div>

          {/* Visual Showcase (Interactive Slider) */}
          <div className="about-visual-showcase" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="visual-image-card glass-panel" style={{ padding: '0.75rem', position: 'relative', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              
              {/* Image Container with Slider */}
              <div style={{ position: 'relative', height: '360px', borderRadius: '16px', overflow: 'hidden' }}>
                {slideImages.map((slide, idx) => (
                  <div
                    key={idx}
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      opacity: idx === currentSlide ? 1 : 0,
                      transition: 'opacity 0.8s ease-in-out',
                      zIndex: idx === currentSlide ? 2 : 1
                    }}
                  >
                    <img
                      src={slide.src}
                      alt={slide.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)',
                      padding: '2rem 1.5rem 1rem 1.5rem',
                      color: '#ffffff',
                      zIndex: 3
                    }}>
                      <h4 style={{ color: 'var(--accent-bright)', fontSize: '1.2rem', marginBottom: '0.25rem', fontFamily: 'var(--font-heading)' }}>{slide.title}</h4>
                      <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)' }}>{slide.desc}</p>
                    </div>
                  </div>
                ))}

                {/* Arrow Controls */}
                <button
                  onClick={prevSlide}
                  style={{
                    position: 'absolute',
                    left: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                    background: 'rgba(0,0,0,0.5)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    cursor: 'pointer'
                  }}
                  aria-label="Previous Slide"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextSlide}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    zIndex: 10,
                    background: 'rgba(0,0,0,0.5)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    cursor: 'pointer'
                  }}
                  aria-label="Next Slide"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Dots Indicator */}
                <div style={{
                  position: 'absolute',
                  top: '15px',
                  right: '15px',
                  display: 'flex',
                  gap: '6px',
                  zIndex: 10
                }}>
                  {slideImages.map((_, idx) => (
                    <span
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        backgroundColor: idx === currentSlide ? 'var(--accent-color)' : 'rgba(255,255,255,0.5)',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s'
                      }}
                    />
                  ))}
                </div>
              </div>

              <div style={{ padding: '1.25rem 0.5rem 0.5rem 0.5rem' }}>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                  At Veer Rice Mills, we believe that quality begins in the field and is perfected through technology. Our commitment extends beyond manufacturing—we focus on building long-term partnerships based on trust, transparency, reliability, and customer satisfaction.
                </p>
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                  <div className="feat-item" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
                    <Shield size={16} color="var(--accent-color)" />
                    <span>Strict Quality Standards</span>
                  </div>
                  <div className="feat-item" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
                    <Cpu size={16} color="var(--accent-color)" />
                    <span>State-of-the-art Milling</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision & Mission Cards Row */}
        <div className="grid-2" style={{ gap: '2.5rem', marginBottom: '4rem' }}>
          {/* Vision Card */}
          <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: 'var(--border-radius-lg)', display: 'flex', gap: '1.5rem' }}>
            <div style={{
              background: 'rgba(197, 154, 95, 0.1)',
              borderRadius: '12px',
              width: '52px',
              height: '52px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Target size={28} color="var(--accent-color)" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', fontFamily: 'var(--font-heading)', color: 'var(--text-bright)' }}>Our Vision</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                To become one of the world's most trusted exporters of premium Indian rice by combining traditional agricultural values with advanced processing technology and uncompromising quality.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: 'var(--border-radius-lg)', display: 'flex', gap: '1.5rem' }}>
            <div style={{
              background: 'rgba(30, 58, 39, 0.1)',
              borderRadius: '12px',
              width: '52px',
              height: '52px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Sparkles size={28} color="var(--accent-color)" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', fontFamily: 'var(--font-heading)', color: 'var(--text-bright)' }}>Our Mission</h3>
              <ul style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.5', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                <li>Deliver premium-quality Basmati and Non-Basmati rice that meets international standards.</li>
                <li>Continuously invest in modern milling and quality assurance technologies.</li>
                <li>Build lasting relationships with customers through integrity, consistency, and reliable service.</li>
                <li>Promote sustainable agricultural practices while supporting farming communities.</li>
                <li>Represent the excellence of Indian rice on the global stage.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid-4 stats-grid">
          {stats.map((stat, idx) => (
            <div className="stat-card glass-panel" key={idx}>
              <h3>
                <Counter target={stat.value} suffix={stat.suffix} />
              </h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
