import React, { useState } from 'react';
import { Globe, Plane, ShieldCheck, Ship, Leaf, Target, ZoomIn } from 'lucide-react';

export default function ExportMap() {
  const [activeHub, setActiveHub] = useState(null);

  const hubs = [
    { id: 'dubai', name: 'Dubai (UAE) Hub', region: 'Middle East', rice: '1121 Sella Basmati', transit: '5 Days (Ocean)', coords: { x: 118, y: 88 } },
    { id: 'riyadh', name: 'Riyadh (Saudi Arabia)', region: 'Middle East', rice: 'Golden Sella & Pusa Raw', transit: '7 Days (Ocean)', coords: { x: 110, y: 92 } },
    { id: 'london', name: 'London (UK) Port', region: 'Europe', rice: 'Organic Traditional Basmati', transit: '18 Days (Ocean)', coords: { x: 80, y: 55 } },
    { id: 'newyork', name: 'New York (USA) Hub', region: 'North America', rice: 'Super Long Grain 1121', transit: '24 Days (Ocean)', coords: { x: 42, y: 64 } },
    { id: 'rotterdam', name: 'Rotterdam (Netherlands)', region: 'Europe', rice: 'EU Standard Non-Pesticide Basmati', transit: '16 Days (Ocean)', coords: { x: 85, y: 53 } },
    { id: 'singapore', name: 'Singapore Port', region: 'Asia-Pacific', rice: 'PR11 & Sharbati Steam', transit: '6 Days (Ocean)', coords: { x: 145, y: 114 } },
  ];

  const pillars = [
    {
      title: 'Sustainable growth',
      desc: 'We promote organic agriculture practices, conserving water resources while scaling farming output.',
      icon: <Leaf size={45} color="#13982e" />
    },
    {
      title: 'Brand focus',
      desc: 'Positioning Veer Brand Basmati Rice at the peak of global food chains with consistent specifications.',
      icon: <Target size={45} color="#13982e" />
    },
    {
      title: 'An expanding Footprints',
      desc: 'Venturing into new European and North American retail networks, bringing the finest grains to all.',
      icon: <ZoomIn size={45} color="#13982e" />
    }
  ];

  return (
    <div id="exports" style={{ background: '#ffffff' }}>
      
      {/* Global Footprints section */}
      <section style={{ padding: '6rem 0', background: '#f7f5f2' }}>
        <div className="container">
          
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center', marginBottom: '0.5rem' }}>
              <img src="/images/Logo.jpeg" width="35px" alt="icon" style={{ borderRadius: '50%' }} />
              <span style={{ color: 'var(--primary-color)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Our Global Footprints
              </span>
            </div>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', fontFamily: 'var(--font-heading)', color: 'var(--text-bright)' }}>
              EXPORTING VALUE &amp; QUALITY <br /> TO WIDESPREAD GLOBAL HUBS
            </h2>
          </div>

          <div className="grid-2" style={{ gap: '3rem', alignItems: 'center' }}>
            
            {/* Left Block */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '800', fontFamily: 'var(--font-heading)', color: 'var(--text-bright)', marginBottom: '1rem' }}>
                  Supplying Over 42+ Countries <br /> Across Diverse Continents
                </h3>
                <p style={{ fontSize: '1.05rem', color: '#555555', lineHeight: '1.6' }}>
                  Our logistics partners operate active trade routes directly to Middle East hubs, European central ports, and key retail storage chains in North America.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ background: '#eaf5eb', padding: '12px', borderRadius: '15px' }}>
                    <Globe size={24} color="#13982e" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: 'var(--text-bright)', marginBottom: '0.25rem' }}>Customs Clearance Documentation</h4>
                    <p style={{ fontSize: '0.85rem', color: '#666666', margin: 0 }}>Full documentation package, including Certificate of Origin, Phytosanitary Certificate, and Fumigation treatment reports.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map image overlay */}
            <div style={{ position: 'relative', background: '#eaf4eb', borderRadius: '20px', padding: '1.5rem', border: '1px solid #d4ebd7', overflow: 'hidden' }}>
              <img 
                src="/images/export_map.png" 
                alt="Export Destinations Map" 
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  borderRadius: '10px',
                  objectFit: 'contain'
                }} 
              />
              
              {/* Optional interactive markers */}
              {hubs.map((hub) => (
                <div 
                  key={hub.id}
                  style={{
                    position: 'absolute',
                    left: `${hub.coords.x / 2}%`,
                    top: `${hub.coords.y / 1.5}%`,
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: '#13982e',
                    border: '2px solid #ffffff',
                    cursor: 'pointer',
                    boxShadow: '0 0 10px rgba(19, 152, 46, 0.8)'
                  }}
                  title={`${hub.name} (${hub.rice})`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Key Pillars Section (Haryana style) */}
      <section style={{ padding: '6rem 0', background: '#ffffff', borderBottom: '1px solid #eeeeee' }}>
        <div className="container">
          <div className="grid-3" style={{ gap: '2rem' }}>
            {pillars.map((pillar, idx) => (
              <div 
                key={idx} 
                style={{
                  background: '#f7f5f2',
                  borderRadius: '30px',
                  padding: '2.5rem 1.5rem',
                  textAlign: 'center',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.02)',
                  border: '1px solid rgba(0,0,0,0.03)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1.25rem'
                }}
              >
                <div style={{ width: '80px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#ffffff', borderRadius: '50%', boxShadow: 'var(--shadow-sm)' }}>
                  {pillar.icon}
                </div>
                <h4 style={{ fontSize: '1.25rem', fontWeight: '800', fontFamily: 'var(--font-heading)', color: 'var(--text-bright)', margin: 0 }}>
                  {pillar.title}
                </h4>
                <p style={{ fontSize: '0.9rem', color: '#555555', lineHeight: '1.6', margin: 0 }}>
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
