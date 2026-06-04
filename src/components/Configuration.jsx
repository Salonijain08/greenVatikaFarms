import './Configuration.css';

const configs = [
  { size: '1008', unit: 'Sq. Yard', highlight: false },
  { size: '2016', unit: 'Sq. Yard', highlight: true },
  { size: '3024', unit: 'Sq. Yard', highlight: false },
  { size: '4032', unit: 'Sq. Yard', highlight: false },
  { size: '5040', unit: 'Sq. Yard', highlight: false },
];

export default function Configuration({ onEnquire }) {
  return (
    <section id="configuration" className="configuration">
      <div className="container">
        <h2 className="section-title">Plot Configuration</h2>
        <p className="section-subtitle">
          Farmhouse plots available starting at <strong style={{color:'var(--gold)'}}>₹7,500 per sq. yard</strong> — choose your preferred size
        </p>

        <div className="config-grid">
          {configs.map((cfg, i) => (
            <div className={`config-card ${cfg.highlight ? 'highlighted' : ''}`} key={i}>
              {cfg.highlight && <div className="popular-badge">Most Popular</div>}
              <div className="config-size">{cfg.size}</div>
              <div className="config-unit">{cfg.unit}</div>
              <div className="config-rate">@ ₹7,500 – ₹10,500/sq.yd</div>
              <div className="config-divider" />
              <ul className="config-features">
                <li>✓ Clear Title Plot</li>
                <li>✓ Gated Community</li>
                <li>✓ All Amenities</li>
              </ul>
              <button className="btn-primary config-btn" onClick={onEnquire}>
                Enquire Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
