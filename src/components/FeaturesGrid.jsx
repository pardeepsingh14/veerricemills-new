import React from 'react';
import { Users, ShieldCheck, Heart, Award } from 'lucide-react';

export default function FeaturesGrid() {
  const items = [
    {
      title: '1,500 +',
      label: 'Satisfied Clients',
      icon: <Heart size={30} color="#ffffff" />,
      bg: '/images/Rice Mill Image.jpeg'
    },
    {
      title: '150 +',
      label: 'Professional Employees',
      icon: <Users size={30} color="#ffffff" />,
      bg: '/images/Rice Mill Image.jpeg'
    },
    {
      title: '70 +',
      label: 'Years of Experience',
      icon: <Award size={30} color="#ffffff" />,
      bg: '/images/Rice Mill Image.jpeg'
    },
    {
      title: '3 +',
      label: 'Manufacturing Units',
      icon: <ShieldCheck size={30} color="#ffffff" />,
      bg: '/images/Rice Mill Image.jpeg'
    }
  ];

  return (
    <section className="features-grid-section" style={{ padding: '5rem 0', background: '#ffffff' }}>
      <div className="container">
        <div className="grid-4" style={{ gap: '2rem' }}>
          {items.map((item, idx) => (
            <div 
              key={idx} 
              style={{
                position: 'relative',
                backgroundImage: `url(${item.bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '30px',
                padding: '3rem 2rem',
                color: '#ffffff',
                textAlign: 'center',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                minHeight: '220px',
                justifyContent: 'center'
              }}
            >
              {/* Overlay (Greenish gradient like Haryana Rice Mill) */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, rgba(19, 152, 46, 0.9), rgba(9, 34, 20, 0.95))',
                zIndex: 1
              }} />

              {/* Icon Container */}
              <div style={{ 
                position: 'relative',
                zIndex: 5,
                background: 'rgba(255, 255, 255, 0.15)',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(255, 255, 255, 0.3)'
              }}>
                {item.icon}
              </div>

              {/* Number */}
              <h3 style={{ 
                position: 'relative',
                zIndex: 5,
                fontSize: '2.2rem',
                fontWeight: '900',
                color: '#ffffff',
                fontFamily: 'var(--font-heading)',
                margin: 0
              }}>
                {item.title}
              </h3>

              {/* Label */}
              <span style={{ 
                position: 'relative',
                zIndex: 5,
                fontSize: '1rem',
                fontWeight: '600',
                color: 'rgba(255, 255, 255, 0.85)',
                fontFamily: 'var(--font-body)',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                {item.label}
              </span>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
