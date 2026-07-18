import React from 'react';

export default function CounterBanner() {
  return (
    <section className="funfact-section" style={{ position: 'relative', overflow: 'hidden', color: '#ffffff', padding: '6rem 0' }}>
      
      {/* Background Video (Haryana Rice Mill style) */}
      <div className="funfact-bg-video" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1 }}>
        <video autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
          <source src="https://www.haryanaricemill.com/public/front_assets/static/Weofferbg.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(12, 30, 20, 0.85)' }} />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
          
          {/* Left Block */}
          <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src="/images/Logo.jpeg" alt="icon" style={{ width: '36px', height: '36px', borderRadius: '50%' }} />
              <span style={{ color: 'var(--accent-color)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.9rem' }}>
                Why choose us
              </span>
            </div>
            
            <h2 style={{ fontSize: '2.8rem', fontWeight: '800', fontFamily: 'var(--font-heading)', color: '#ffffff', lineHeight: '1.15', margin: 0, display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '4rem', color: 'var(--accent-color)', fontWeight: '900' }}>70+</span> 
              Years of Agricultural Heritage
            </h2>
            
            <p style={{ fontSize: '1.1rem', color: '#e2e8f0', lineHeight: '1.6', margin: 0 }}>
              Bringing the finest rice in the world in every aspect, where quality, cutting edge technology and legacy coexist.
            </p>
            
            <div style={{ marginTop: '1rem' }}>
              <a href="#products" className="btn btn-primary" style={{ padding: '0.85rem 2rem', borderRadius: '50px' }}>
                <span>Our Products</span>
              </a>
            </div>
          </div>

          {/* Right Block */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', textAlign: 'center' }}>
            <div>
              <h3 style={{ fontSize: '2.2rem', fontWeight: '800', fontFamily: 'var(--font-heading)', color: '#ffffff', lineHeight: '1.2', margin: 0 }}>
                We Offer Organic &amp; <br /> Eco-Friendly Milling Services
              </h3>
            </div>

            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
              {/* Logo Card 1 */}
              <div style={{ 
                background: '#ffffff', 
                borderRadius: '30px', 
                width: '180px', 
                height: '180px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                padding: '20px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                border: '3px solid #13982e'
              }}>
                <img src="/images/Logo.jpeg" alt="Veer Rice Mills Logo" style={{ maxWidth: '90%', maxHeight: '90%', borderRadius: '50%', objectFit: 'contain' }} />
              </div>

              {/* Logo Card 2 */}
              <div style={{ 
                background: '#ffffff', 
                borderRadius: '30px', 
                width: '180px', 
                height: '180px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                padding: '20px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                border: '3px solid #13982e'
              }}>
                <img src="/images/Logo.jpeg" alt="Veer Brand Logo" style={{ maxWidth: '90%', maxHeight: '90%', borderRadius: '50%', objectFit: 'contain', filter: 'hue-rotate(45deg)' }} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
