import React from 'react';
import { Truck, Headset, Shield } from 'lucide-react';

export default function Services() {
  const items = [
    {
      title: 'Fast Delivery',
      desc: 'We deliver premium rice worldwide with quick & reliable delivery and logistics services.',
      icon: <Truck size={32} color="#13982e" />
    },
    {
      title: 'Customer Support',
      desc: 'Provide round-the-clock best customer support to assist you anytime, anywhere around the globe.',
      icon: <Headset size={32} color="#13982e" />
    },
    {
      title: 'Best Technology',
      desc: 'State-of-the-art production and Sortex setup ensuring top-quality rice with precision.',
      icon: <Shield size={32} color="#13982e" />
    }
  ];

  return (
    <section className="services-section" style={{ 
      position: 'relative', 
      padding: '6rem 0',
      backgroundImage: "url('/hero_rice_field.png')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: '#ffffff'
    }}>
      {/* Dark Overlay */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(12, 30, 20, 0.9)', zIndex: 1 }} />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        
        {/* Section Title */}
        <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center', marginBottom: '0.5rem' }}>
            <img src="/images/Logo.jpeg" width="35px" alt="icon" style={{ borderRadius: '50%' }} />
            <span style={{ color: 'var(--accent-color)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
              Our Services
            </span>
          </div>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', fontFamily: 'var(--font-heading)', color: '#ffffff' }}>
            Expert Services Designed To <br /> Simplify Your Work!
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid-3" style={{ gap: '2rem' }}>
          {items.map((item, idx) => (
            <div 
              key={idx} 
              style={{
                background: '#ffffff',
                borderRadius: '30px',
                padding: '2.5rem 2rem',
                color: '#222222',
                transition: 'transform 0.3s ease',
                border: '1px solid rgba(0,0,0,0.05)',
                boxShadow: 'var(--shadow-lg)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '1.4rem', fontWeight: '800', fontFamily: 'var(--font-heading)', color: 'var(--text-bright)', margin: 0 }}>
                  {item.title}
                </h4>
                <div style={{ width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#eaf5eb', borderRadius: '50%' }}>
                  {item.icon}
                </div>
              </div>
              <p style={{ fontSize: '0.95rem', color: '#555555', lineHeight: '1.6', margin: 0 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
