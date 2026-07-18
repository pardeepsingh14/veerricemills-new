import React, { useState } from 'react';
import { Cpu, ShieldCheck, Eye, RefreshCw, BarChart2, Award, Heart, Package, ShieldAlert } from 'lucide-react';

export default function MillingProcess() {
  const [activeStep, setActiveStep] = useState(0);

  const journeyCards = [
    {
      title: 'Preserved',
      desc: 'We carefully clean and pack each grain to retain its natural freshness and moisture content.',
      icon: <Award size={36} color="var(--primary-color)" />,
      img: '/images/Rice Mill Image 3.jpeg'
    },
    {
      title: 'Protected',
      desc: "Preserving the grain's rich, authentic taste and natural aroma is our absolute top priority.",
      icon: <ShieldCheck size={36} color="var(--primary-color)" />,
      img: '/images/veer_classic_bag.png'
    },
    {
      title: 'Perfected',
      desc: 'Every single pack delivers a fresh and delicious experience, crafted with care for families.',
      icon: <Heart size={36} color="var(--primary-color)" />,
      img: '/images/Qwality Process.jpeg'
    },
    {
      title: 'Packaging',
      desc: 'In every pack, we add a fresh, high-grade, and tasty experience – delivered with love!',
      icon: <Package size={36} color="var(--primary-color)" />,
      img: '/images/veer_sella_bag.png'
    }
  ];

  const steps = [
    {
      title: 'Cleaning & Destoning',
      machinery: 'Optical Vibratory Separator',
      icon: <RefreshCw size={24} />,
      metricName: 'Foreign Matter Removed',
      metricVal: '99.98%',
      desc: 'Paddy grains pass through pre-cleaners and vibratory destoners. High-speed aspirators extract dust, straw, stones, and weed seeds from the grain flow.'
    },
    {
      title: 'Pneumatic De-husking',
      machinery: 'Pneumatic Rubber Roller Husker',
      icon: <Cpu size={24} />,
      metricName: 'Grain Breakage Rate',
      metricVal: '< 0.5%',
      desc: 'The clean paddy is fed into rubber rollers running at differential speeds. Grains are gently de-shelled. Aspiration separates husk from brown rice.'
    },
    {
      title: 'Multi-stage Polishing',
      machinery: 'Mist Polisher & Bran Whitener',
      icon: <Award size={24} />,
      metricName: 'Shine & Smoothness Rating',
      metricVal: 'Grade A1+',
      desc: 'Brown rice is whitened by abrasive rollers. Water mist polishers then buff the grains, removing the silverskin (bran) to yield glossy white rice with zero residue.'
    },
    {
      title: 'Optical Sortex Camera',
      machinery: 'Buhler Sortex Trichromatic CCD Sorter',
      icon: <Eye size={24} />,
      metricName: 'Color Defect Detection',
      metricVal: '100% Precision',
      desc: 'High-definition optical cameras examine each grain in mid-air. Ultra-fast pneumatic ejector valves shoot air jets to eject chalky, yellowed, or damaged grains.'
    },
    {
      title: 'Grading & Length Sizing',
      machinery: 'Plan Sifter & Rotary Length Grader',
      icon: <BarChart2 size={24} />,
      metricName: 'Average Grain Length Uniformity',
      metricVal: '98.5%',
      desc: 'Grains flow through rotating cylinders with pockets matched to specific lengths. This segregates whole-head rice from broken grains to match export specifications.'
    },
    {
      title: 'Auto Packing & Sealing',
      machinery: 'Weighing & Form-Fill-Seal Packaging Line',
      icon: <ShieldCheck size={24} />,
      metricName: 'Bag Weight Accuracy Limit',
      metricVal: '± 2g Standard',
      desc: 'Final grains are auto-weighed, checked for metal particles, and packed. We offer vacuum/nitrogen-flushed laminated bags to preserve aroma and extend shelf-life.'
    }
  ];

  return (
    <div id="milling" style={{ background: '#f7f5f2' }}>
      
      {/* 1. Sub-Header Title Section (Haryana style) */}
      <section style={{ background: '#ffffff', padding: '3rem 0', borderBottom: '1px solid #eeeeee', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.2rem', fontWeight: '800', color: 'var(--text-bright)', fontFamily: 'var(--font-heading)', margin: 0 }}>
            Rice Manufacturers, Suppliers, Exporters in India
          </h2>
        </div>
      </section>

      {/* 2. The VEER BRAND Rice Story (Our Journey) */}
      <section className="section-padding" style={{ padding: '6rem 0', background: '#f7f5f2' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '2.5rem', marginBottom: '3.5rem', alignItems: 'center' }}>
            <div className="sec-title" style={{ textAlign: 'left', margin: 0 }}>
              <span className="sec-title__tagline" style={{ color: 'var(--primary-color)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1.5px', fontSize: '0.85rem' }}>Our Journey</span>
              <h2 className="sec-title__title" style={{ fontSize: '2.5rem', fontWeight: '800', textTransform: 'none', fontFamily: 'var(--font-heading)', color: 'var(--text-bright)', marginTop: '0.5rem' }}>
                The VEER BRAND Rice Story
              </h2>
            </div>
            <div>
              <p style={{ fontSize: '1.1rem', color: '#444444', lineHeight: '1.6', margin: 0 }}>
                Every grain of VEER BRAND is a reflection of rich taste; and each bite brings a story of flavour, each grain a journey of deliciousness.
              </p>
            </div>
          </div>

          <div className="grid-4" style={{ gap: '2rem' }}>
            {journeyCards.map((card, idx) => (
              <div 
                key={idx} 
                className="journey-card" 
                style={{ 
                  background: '#ffffff', 
                  borderRadius: '30px', 
                  padding: '2.5rem 1.5rem', 
                  textAlign: 'center', 
                  boxShadow: '0 10px 30px rgba(0,0,0,0.04)',
                  transition: 'transform 0.3s ease',
                  border: '1px solid rgba(0,0,0,0.03)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ width: '130px', height: '130px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 1.5rem auto', border: '3px solid #13982e', padding: '5px', background: '#ffffff' }}>
                  <img src={card.img} alt={card.title} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
                </div>
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', color: 'var(--text-bright)', marginBottom: '0.75rem', fontFamily: 'var(--font-heading)' }}>
                  {card.title}
                </h4>
                <p style={{ fontSize: '0.9rem', color: '#666666', lineHeight: '1.5', margin: 0 }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Interactive Milling Process (Virtual Tour) */}
      <section className="section-padding" style={{ padding: '6rem 0', background: '#ffffff' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="tag" style={{ background: 'rgba(19, 152, 46, 0.1)', color: '#13982e' }}>State-of-the-art Technology</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', fontFamily: 'var(--font-heading)' }}>Processing Built For Perfection</h2>
            <p style={{ maxWidth: '650px', margin: '1rem auto 0 auto' }}>
              Our mill uses the latest processing infrastructure. Take a virtual walk through our advanced production lines.
            </p>
          </div>

          <div className="milling-interactive-wrap">
            <div className="milling-timeline">
              {steps.map((step, idx) => (
                <button
                  key={idx}
                  className={`timeline-step-btn ${activeStep === idx ? 'step-active' : ''}`}
                  onClick={() => setActiveStep(idx)}
                >
                  <div className="step-icon-wrap">
                    {step.icon}
                    <span className="step-number">{idx + 1}</span>
                  </div>
                  <span className="step-btn-label">{step.title}</span>
                </button>
              ))}
            </div>

            <div className="milling-details-box glass-panel animate-fade-in-up" key={activeStep} style={{ background: '#f7f5f2', border: '1px solid rgba(0,0,0,0.05)' }}>
              <div className="milling-details-content">
                <span className="detail-machinery" style={{ color: '#13982e', fontWeight: '600' }}>{steps[activeStep].machinery}</span>
                <h3 style={{ fontFamily: 'var(--font-heading)', color: 'var(--text-bright)' }}>
                  Step {activeStep + 1}: {steps[activeStep].title}
                </h3>
                <p className="detail-desc" style={{ color: '#555555' }}>{steps[activeStep].desc}</p>
                
                <div className="detail-metric-card" style={{ background: '#ffffff', border: '1px solid rgba(0,0,0,0.05)' }}>
                  <span className="metric-label" style={{ color: '#666666' }}>{steps[activeStep].metricName}</span>
                  <span className="metric-value" style={{ color: '#13982e' }}>{steps[activeStep].metricVal}</span>
                  <div className="metric-bar">
                    <div className="metric-progress" style={{ width: '100%', background: '#13982e' }} />
                  </div>
                </div>
              </div>

              <div className="milling-details-image">
                <img 
                  src={activeStep === 3 ? '/images/Qwality Process.jpeg' : '/images/Rice Mill Image.jpeg'} 
                  alt={steps[activeStep].title} 
                  style={{ borderRadius: '16px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
