import React, { useEffect, useState } from 'react';
import { Target, Sparkles, CheckCircle } from 'lucide-react';

const Counter = ({ target, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target, 10);
    if (start === end) return;

    let totalMiliseconds = duration;
    let incrementTime = Math.abs(Math.floor(totalMiliseconds / end));
    if (incrementTime < 10) incrementTime = 10;

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

  return (
    <section id="about" className="section-padding about-section" style={{ background: '#ffffff', padding: '6rem 0' }}>
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'center', gap: '4rem', marginBottom: '5rem' }}>
          
          {/* Left Text Column */}
          <div className="about-text-content" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div className="sec-title" style={{ textAlign: 'left' }}>
              <span className="sec-title__tagline" style={{ display: 'inline-block', color: 'var(--primary-color)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                Your reason to choose us
              </span>
              <h2 className="sec-title__title" style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--text-bright)', textTransform: 'none', fontFamily: 'var(--font-heading)', lineHeight: '1.2' }}>
                A Legacy of 70 Years, Built on Strong Agricultural Foundations!
              </h2>
            </div>
            
            <p style={{ color: '#444444', fontSize: '1.05rem', lineHeight: '1.7', margin: 0 }}>
              Every great journey begins with a vision.

              The story of <strong>Veer Rice Mills</strong> traces its roots back to the 1950s, when our founder, <strong>Late Shri Rattan Singh</strong>, dedicated his life to farming with honesty, hard work, and an unwavering commitment to quality. At a time when agriculture relied mainly on traditional methods, he believed that innovation could transform the future of farming.
            </p>

            <p style={{ color: '#555555', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
              Inspired by this vision, the family established <strong>Veer Rice Mills</strong> in <strong>2017</strong>, carrying forward his values while embracing modern technology. What started as a dream has grown into a trusted rice processing company committed to delivering premium-quality rice to customers across the globe.
            </p>

            <p style={{ color: '#555555', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
              Driven by continuous growth and a commitment to excellence, the company achieved another significant milestone in 2019 with the establishment of <strong>Madhav Foods</strong>, a sister unit of Veer Rice Mills. The launch of Madhav Foods strengthened our manufacturing capabilities, expanded our production capacity, and reinforced our commitment to delivering world-class rice products to customers worldwide.
            </p>

            <p style={{ color: '#555555', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
              Today, Veer Rice Mills combines generations of agricultural knowledge with state-of-the-art milling technology to produce exceptional Basmati and Non-Basmati rice. Every grain is carefully selected, processed, and packaged under strict quality standards to ensure superior aroma, purity, taste, and consistency.
            </p>

            <p style={{ color: '#555555', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
              We specialize in processing a wide range of premium rice varieties for wholesalers, distributors, retailers, supermarkets, hotels, and food service businesses worldwide. Our advanced processing systems, modern infrastructure, and rigorous quality control enable us to meet international standards while preserving the natural excellence of every harvest.
            </p>

            <p style={{ color: '#555555', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
              At Veer Rice Mills, we believe that quality begins in the field and is perfected through technology. Our commitment extends beyond manufacturing—we focus on building long-term partnerships based on trust, transparency, reliability, and customer satisfaction.
            </p>

            <p style={{ color: '#555555', fontSize: '0.95rem', lineHeight: '1.6', margin: 0 }}>
              As we continue to expand into global markets, our mission remains unchanged: to deliver world-class Indian rice while honoring the agricultural heritage that laid our foundation more than seven decades ago.
            </p>

            <p style={{ color: '#222222', fontSize: '0.95rem', lineHeight: '1.6', marginTop: '0.75rem', fontWeight: '700' }}>
              Veer Rice Mills — From the Fields of India to Tables Around the World.
            </p>
            
            <ul style={{ listStyle: 'none', padding: 0, margin: '1rem 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '700', color: 'var(--text-bright)' }}>
                <CheckCircle size={20} color="var(--primary-color)" style={{ flexShrink: 0 }} />
                <span>Delivering rice excellence worldwide</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '700', color: 'var(--text-bright)' }}>
                <CheckCircle size={20} color="var(--primary-color)" style={{ flexShrink: 0 }} />
                <span>Expertise in premium rice production</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontWeight: '700', color: 'var(--text-bright)' }}>
                <CheckCircle size={20} color="var(--primary-color)" style={{ flexShrink: 0 }} />
                <span>Fast and reliable delivery services</span>
              </li>
            </ul>

            <div>
              <a href="#products" className="btn btn-primary" style={{ padding: '0.85rem 2rem', borderRadius: '50px', background: 'var(--primary-color)', color: '#ffffff', border: 'none', cursor: 'pointer', display: 'inline-flex', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: '600' }}>
                <span>Our Products</span>
              </a>
            </div>
          </div>

          {/* Right Overlapping Images Grid Column */}
          <div className="about-image-column" style={{ position: 'relative', height: '480px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '80%', height: '90%', borderRadius: '30px', overflow: 'hidden', border: '5px solid #ffffff', boxShadow: 'var(--shadow-lg)' }}>
              <img src="/images/Rice Mill Image.jpeg" alt="Veer Rice Mills Milling Plant" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            
            <div style={{ position: 'absolute', bottom: '0', right: '0', width: '55%', height: '55%', borderRadius: '24px', overflow: 'hidden', border: '6px solid #ffffff', boxShadow: 'var(--shadow-lg)', zIndex: 5 }}>
              <img src="/images/Rice Mill Image 2.jpeg" alt="Veer Rice Mills Sorting Lines" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>

        {/* Vision & Mission Cards Row */}
        <div className="grid-2" style={{ gap: '2.5rem', marginBottom: '5rem' }}>
          {/* Vision Card */}
          <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: '24px', display: 'flex', gap: '1.5rem', background: '#f7f5f2', border: '1px solid rgba(31,78,61,0.1)' }}>
            <div style={{
              background: 'rgba(197, 154, 95, 0.15)',
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
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', fontFamily: 'var(--font-heading)', color: 'var(--text-bright)', textTransform: 'none', fontWeight: '700' }}>Our Vision</h3>
              <p style={{ color: '#555555', fontSize: '0.95rem', lineHeight: '1.6' }}>
                To become one of the world's most trusted exporters of premium Indian rice by combining traditional agricultural values with advanced processing technology and uncompromising quality.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="glass-panel" style={{ padding: '2.5rem', borderRadius: '24px', display: 'flex', gap: '1.5rem', background: '#f7f5f2', border: '1px solid rgba(31,78,61,0.1)' }}>
            <div style={{
              background: 'rgba(31, 78, 61, 0.1)',
              borderRadius: '12px',
              width: '52px',
              height: '52px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <Sparkles size={28} color="var(--primary-color)" />
            </div>
            <div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', fontFamily: 'var(--font-heading)', color: 'var(--text-bright)', textTransform: 'none', fontWeight: '700' }}>Our Mission</h3>
              <ul style={{ color: '#555555', fontSize: '0.95rem', lineHeight: '1.5', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
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
            <div className="stat-card glass-panel" key={idx} style={{ background: '#ffffff', border: '1px solid rgba(31,78,61,0.1)' }}>
              <h3>
                <Counter target={stat.value} suffix={stat.suffix} />
              </h3>
              <p style={{ color: '#555555' }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
