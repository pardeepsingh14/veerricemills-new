import React from 'react';

export default function Certificates() {
  const certs = [
    { name: 'ISO 22000:2005', desc: 'Food Safety Management', icon: '🛡️' },
    { name: 'ISO 9001:2015', desc: 'Quality Management System', icon: '🏆' },
    { name: 'HACCP Certified', desc: 'Hazard Analysis Critical Control', icon: '✅' },
    { name: 'cGMP Certified', desc: 'Current Good Manufacturing Practice', icon: '⭐' },
    { name: 'APEDA Member', desc: 'Agricultural Export Authority India', icon: '🌾' },
    { name: 'FSSAI Approved', desc: 'Food Safety Standards India', icon: '🥗' },
  ];

  return (
    <section className="companies-section" style={{ padding: '4rem 0', background: '#ffffff', borderBottom: '1px solid #eeeeee' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span style={{ color: 'var(--primary-color)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>
            Our Certifications
          </span>
          <h3 style={{ fontSize: '1.8rem', fontWeight: '800', fontFamily: 'var(--font-heading)', color: 'var(--text-bright)', margin: '0.25rem 0 0 0' }}>
            International Standards &amp; Quality Approvals
          </h3>
        </div>

        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {certs.map((cert, idx) => (
            <div 
              key={idx} 
              style={{
                background: '#f7f5f2',
                borderRadius: '20px',
                padding: '1.5rem 2rem',
                textAlign: 'center',
                minWidth: '220px',
                flex: '1',
                boxShadow: '0 4px 10px rgba(0,0,0,0.02)',
                border: '1px solid rgba(0,0,0,0.04)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <span style={{ fontSize: '2rem' }}>{cert.icon}</span>
              <h4 style={{ fontSize: '1.05rem', fontWeight: '800', color: 'var(--text-bright)', margin: 0, fontFamily: 'var(--font-heading)' }}>
                {cert.name}
              </h4>
              <p style={{ fontSize: '0.8rem', color: '#666666', margin: 0 }}>
                {cert.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
