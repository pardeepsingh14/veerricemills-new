import React from 'react';

export default function Certificates() {
  const certs = [
    { 
      name: 'VEER RICE MILLS - HACCP', 
      file: '2026071550 - veer rice mills - haccp.pdf', 
      desc: 'HACCP Certificate', 
      icon: '✅',
      details: 'Certificate Number: 2026071550\nValid: 15th July 2026 - 14th July 2029'
    },
    { 
      name: 'ISO 22000', 
      file: '3050260715164f - veer rice mills - iso 22000-2018.pdf', 
      desc: 'ISO 22000:2018', 
      icon: '🛡️',
      details: 'Certificate Number: 3050260715164F\nValid: 15th July 2026 - 14th July 2029'
    },
    { 
      name: 'APEDA RCMC', 
      file: 'APEDA RCMC TILL 2028.pdf', 
      desc: 'APEDA RCMC', 
      icon: '🌾',
      details: 'Registration Number: RCMC/APEDA/03314/2023-2024\nValid till: 19/11/2028'
    },
    { 
      name: 'GST', 
      file: 'GST..pdf', 
      desc: 'GST Document', 
      icon: '📄',
      details: 'Registration Number: 06CRRPS9625K2ZS\nIssued: 23/05/2019'
    },
    { 
      name: 'IEC', 
      file: 'IEC 2026.pdf', 
      desc: 'IEC Certificate', 
      icon: '🏷️',
      details: 'IEC Number: CRRPS9625K\nIssued: 20/11/2023'
    },
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
                borderRadius: '24px',
                padding: '2rem',
                textAlign: 'center',
                minWidth: '240px',
                maxWidth: '280px',
                flex: '0 1 calc(33.333% - 1.5rem)',
                boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
                border: '1px solid rgba(31,78,61,0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '1rem',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(19,152,46,0.15)';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <span style={{ fontSize: '3rem' }}>{cert.icon}</span>
              <h4 style={{ fontSize: '1.15rem', fontWeight: '800', color: 'var(--text-bright)', margin: '0.5rem 0', fontFamily: 'var(--font-heading)', lineHeight: '1.2' }}>
                {cert.name}
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--primary-color)', margin: '0.25rem 0', fontWeight: '700' }}>
                {cert.desc}
              </p>
              {cert.details && (
                <p style={{ fontSize: '0.8rem', color: '#666666', margin: '0.75rem 0', whiteSpace: 'pre-line', lineHeight: '1.5', fontWeight: '500' }}>
                  {cert.details}
                </p>
              )}
              {cert.file && (
                <a 
                  href={`/certificates/${encodeURIComponent(cert.file)}`} 
                  target="_blank" 
                  rel="noreferrer" 
                  style={{ 
                    marginTop: '1rem', 
                    color: '#ffffff', 
                    fontSize: '0.9rem', 
                    fontWeight: '600', 
                    textDecoration: 'none', 
                    cursor: 'pointer',
                    background: 'var(--primary-color)',
                    padding: '0.6rem 1.2rem',
                    borderRadius: '25px',
                    display: 'inline-block',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.85'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                >
                  Download PDF
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
