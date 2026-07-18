import React, { useState } from 'react';
import { Layers, Check, Plus, Minus, X, Info } from 'lucide-react';

export default function Products() {
  const [activeTab, setActiveTab] = useState('basmati');
  const [comparedProducts, setComparedProducts] = useState([]);
  const [showCompareModal, setShowCompareModal] = useState(false);

  const products = [
    {
      id: '1121-golden-sella',
      name: '1121 Golden Sella Basmati Rice',
      category: 'basmati',
      length: '8.35 mm',
      elongation: '2.0x',
      moisture: '12.0%',
      broken: '< 1%',
      aroma: 'Subtle & Nutty',
      tag: 'Biryani Special',
      image: '/images/1121 Golden Sella.jpeg',
      desc: 'Parboiled basmati with a gorgeous golden hue. Parboiling locks in nutrients, making it highly durable for catering and heavy biryani preparations.'
    },
    {
      id: '1121-steam',
      name: '1121 Steam Basmati Rice',
      category: 'basmati',
      length: '8.35 mm',
      elongation: '2.2x',
      moisture: '12.5%',
      broken: '< 0.5%',
      aroma: 'Rich & Intense',
      tag: 'Premium Long Grain',
      image: '/images/1121 Stream Basmati.jpeg',
      desc: 'Superb elongation and exquisite fluffiness. Steaming ensures the grain retains its premium basmati texture and yields beautiful separate grains upon cooking.'
    },
    {
      id: '1121-white',
      name: '1121 White Basmati Rice',
      category: 'basmati',
      length: '8.35 mm',
      elongation: '2.0x',
      moisture: '12.0%',
      broken: '< 1%',
      aroma: 'Very High',
      tag: 'Royal Choice',
      image: '/images/1121 White Rice.jpeg',
      desc: 'The classic raw long basmati grain. Delivers unmatched natural fragrance and premium soft texture, perfect for royal cuisines.'
    },
    {
      id: '1121-white-sella',
      name: '1121 White Sella Basmati Rice',
      category: 'basmati',
      length: '8.35 mm',
      elongation: '2.0x',
      moisture: '12.0%',
      broken: '< 1%',
      aroma: 'Delicate',
      tag: 'Popular Export Grade',
      image: '/images/1121 White Sella.jpeg',
      desc: 'Parboiled white sella Basmati. Combines the signature extreme length of 1121 basmati with the structural rigidity of sella processing.'
    },
    {
      id: '1509-golden-sella',
      name: '1509 Golden Sella Basmati Rice',
      category: 'basmati',
      length: '8.2 mm',
      elongation: '1.8x',
      moisture: '12.0%',
      broken: '< 1%',
      aroma: 'Mild',
      tag: 'Caterer Choice',
      image: '/images/1509 Golden Sella.jpeg',
      desc: 'Excellent length 1509 basmati grain parboiled to golden perfection. Cost-effective option for restaurants, hotels, and mass catering.'
    },
    {
      id: '1509-steam',
      name: '1509 Steam Basmati Rice',
      category: 'basmati',
      length: '8.2 mm',
      elongation: '2.0x',
      moisture: '12.5%',
      broken: '< 0.5%',
      aroma: 'High',
      tag: 'Excellent Aroma',
      image: '/images/1509 Stream Basmati Rice.jpeg',
      desc: 'Highly aromatic basmati variety processed with advanced steam technology. Grains cook up light, soft, and separate.'
    },
    {
      id: '1509-white',
      name: '1509 White Basmati Rice',
      category: 'basmati',
      length: '8.2 mm',
      elongation: '1.9x',
      moisture: '12.5%',
      broken: '< 1%',
      aroma: 'Pleasant',
      tag: 'Daily Premium',
      image: '/images/1509 White Rice.jpeg',
      desc: 'Standard raw 1509 white basmati. Gives superior taste and authentic basmati aroma, suitable for premium daily consumption.'
    },
    {
      id: '1509-white-sella',
      name: '1509 White Sella Basmati Rice',
      category: 'basmati',
      length: '8.2 mm',
      elongation: '1.8x',
      moisture: '12.0%',
      broken: '< 1%',
      aroma: 'Delicate',
      tag: 'Wholesale Favorite',
      image: '/images/1509 White Sella.jpeg',
      desc: 'Creamy white parboiled sella rice of 1509 grade. Easy to cook and highly resistant to over-cooking or clumping.'
    },
    {
      id: 'pr14-sella',
      name: 'PR14 Sella Basmati Rice',
      category: 'basmati',
      length: '7.2 mm',
      elongation: '1.7x',
      moisture: '12.5%',
      broken: '< 1%',
      aroma: 'Medium',
      tag: 'Premium Blend Grade',
      image: '/images/PR14 Sella Basmati Rice.jpeg',
      desc: 'Premium quality grain with good elongation. Excellent choice for custom packaging, high nutritional value, and clean taste.'
    },
    {
      id: 'sugandha-sella',
      name: 'Sugandha Sella Rice',
      category: 'basmati',
      length: '7.8 mm',
      elongation: '1.8x',
      moisture: '12.0%',
      broken: '< 1%',
      aroma: 'Pleasant & Sweet',
      tag: 'Fragrant Alternative',
      image: '/images/Sugandha Sella.jpeg',
      desc: 'A highly aromatic Basmati-like variety. Known for its intense fragrance and great cooking texture at a highly competitive export price.'
    },
    {
      id: 'sabarmati-sella',
      name: 'Sabarmati Sella Rice',
      category: 'basmati',
      length: '7.4 mm',
      elongation: '1.7x',
      moisture: '12.0%',
      broken: '< 1%',
      aroma: 'Mild',
      tag: 'Aromatic Value',
      image: '/images/Sabarmati Sella.jpeg',
      desc: 'Traditional aromatic rice processed using parboiled sella method. Delivers good body, sweet taste, and consistent size.'
    },
    {
      id: 'pr11-sella',
      name: 'PR11 Sella Rice',
      category: 'non-basmati',
      length: '6.8 mm',
      elongation: '1.4x',
      moisture: '13.0%',
      broken: '< 5%',
      aroma: 'Mild',
      tag: 'Nutritional Staple',
      image: '/images/PR11 Sella.jpeg',
      desc: 'A premium long-grain non-basmati sella variety. Extremely popular across global markets for daily staple and industrial exports.'
    },
    {
      id: 'rh10-sella',
      name: 'RH10 Sella Rice',
      category: 'non-basmati',
      length: '6.5 mm',
      elongation: '1.4x',
      moisture: '13.0%',
      broken: '< 5%',
      aroma: 'Neutral',
      tag: 'High Demand Staple',
      image: '/images/RH10 Sella.jpeg',
      desc: 'High-quality non-basmati sella rice with excellent uniformity. Easy to digest and durable under typical long-distance transport.'
    },
    {
      id: 'sona-mansuri',
      name: 'Sona Mansuri Rice',
      category: 'non-basmati',
      length: '5.2 mm',
      elongation: '1.3x',
      moisture: '12.5%',
      broken: '< 2%',
      aroma: 'Sweet',
      tag: 'Everyday Comfort',
      image: '/images/Sona Mansuri.jpeg',
      desc: 'Lightweight and aromatic medium-grain rice. Widely consumed in Southern and Central Indian households and popular among diaspora markets.'
    }
  ];

  const filteredProducts = products.filter(p => p.category === activeTab);

  const toggleCompare = (product) => {
    if (comparedProducts.some(p => p.id === product.id)) {
      setComparedProducts(comparedProducts.filter(p => p.id !== product.id));
    } else {
      if (comparedProducts.length >= 3) {
        alert('You can compare a maximum of 3 products at a time.');
        return;
      }
      setComparedProducts([...comparedProducts, product]);
    }
  };

  return (
    <section id="products" className="section-padding products-section" style={{ position: 'relative' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="tag">Our Product Range</span>
          <h2>The Gold Standard Of Grains</h2>
          <p>
            Explore our curated catalog of Basmati and Non-Basmati rice. Every batch undergoes testing before export sealing.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="products-tabs-wrap">
          <button 
            className={`tab-btn ${activeTab === 'basmati' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('basmati')}
          >
            Premium Basmati
          </button>
          <button 
            className={`tab-btn ${activeTab === 'non-basmati' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('non-basmati')}
          >
            Non-Basmati Staple
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid-3 product-grid">
          {filteredProducts.map((product) => {
            const isCompared = comparedProducts.some(p => p.id === product.id);
            return (
              <div className="product-card glass-panel" key={product.id}>
                {/* Visual Thumbnail */}
                <div className="product-thumbnail" style={{ height: '180px', overflow: 'hidden', borderRadius: '12px', marginBottom: '1.25rem', border: '1px solid var(--border-color)' }}>
                  <img src={product.image || "/basmati_grains.png"} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }} className="product-thumb-img" />
                </div>
                <div className="product-header">
                  <span className="product-tag">{product.tag}</span>
                  <h3>{product.name}</h3>
                </div>
                
                <p className="product-desc">{product.desc}</p>
                
                <div className="product-specs">
                  <div className="spec-row">
                    <span>Average Length</span>
                    <strong>{product.length}</strong>
                  </div>
                  <div className="spec-row">
                    <span>Elongation Ratio</span>
                    <strong>{product.elongation}</strong>
                  </div>
                  <div className="spec-row">
                    <span>Moisture Content</span>
                    <strong>{product.moisture}</strong>
                  </div>
                </div>

                <div className="product-actions">
                  <button 
                    onClick={() => toggleCompare(product)} 
                    className={`btn ${isCompared ? 'btn-primary' : 'btn-secondary'}`}
                    style={{ width: '100%', fontSize: '0.85rem', padding: '0.65rem' }}
                  >
                    {isCompared ? <Check size={16} /> : <Plus size={16} />}
                    <span>{isCompared ? 'Added to Compare' : 'Add to Compare'}</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Compare Sheet bar */}
        {comparedProducts.length > 0 && (
          <div className="compare-bar-wrap glass-panel animate-fade-in-up">
            <div className="compare-bar-content">
              <div className="selected-items">
                <span className="compare-title">Compare Grains ({comparedProducts.length}/3):</span>
                {comparedProducts.map(p => (
                  <span key={p.id} className="selected-tag">
                    {p.name}
                    <button onClick={() => toggleCompare(p)}><X size={12} /></button>
                  </span>
                ))}
              </div>
              <div className="compare-actions">
                <button onClick={() => setComparedProducts([])} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', textDecoration: 'underline', fontSize: '0.85rem' }}>
                  Clear All
                </button>
                <button onClick={() => setShowCompareModal(true)} className="btn btn-accent" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>
                  Compare Now
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Comparison Modal Dialog */}
        {showCompareModal && (
          <div className="compare-modal-backdrop" onClick={() => setShowCompareModal(false)}>
            <div className="compare-modal glass-panel animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h3>Grain Comparison Analysis</h3>
                <button onClick={() => setShowCompareModal(false)} className="close-btn"><X size={20} /></button>
              </div>
              
              <div className="modal-content-table">
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1.5rem' }}>
                  <thead>
                    <tr>
                      <th style={{ textAlign: 'left', padding: '1rem', borderBottom: '2px solid var(--border-color)', color: 'var(--text-muted)' }}>Specification</th>
                      {comparedProducts.map(p => (
                        <th key={p.id} style={{ padding: '1rem', borderBottom: '2px solid var(--border-color)', textAlign: 'center', color: 'var(--accent-color)' }}>{p.name}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)', fontWeight: '600' }}>Grain Length</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)', textAlign: 'center' }}>{p.length}</td>
                      ))}
                    </tr>
                    <tr>
                      <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)', fontWeight: '600' }}>Elongation Factor</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)', textAlign: 'center' }}>{p.elongation}</td>
                      ))}
                    </tr>
                    <tr>
                      <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)', fontWeight: '600' }}>Moisture Standard</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)', textAlign: 'center' }}>{p.moisture}</td>
                      ))}
                    </tr>
                    <tr>
                      <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)', fontWeight: '600' }}>Broken Grain Allowance</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)', textAlign: 'center' }}>{p.broken}</td>
                      ))}
                    </tr>
                    <tr>
                      <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)', fontWeight: '600' }}>Aroma Strength</td>
                      {comparedProducts.map(p => (
                        <td key={p.id} style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)', textAlign: 'center' }}>{p.aroma}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>

              <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
                <button onClick={() => setShowCompareModal(false)} className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.85rem' }}>
                  Done
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
