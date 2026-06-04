import './Hero.css';

export default function Hero({ onEnquire, onSiteVisit }) {
  return (
    <section id="home" className="hero">
      <div className="hero-overlay" />

      {/* Floating side CTA */}
      <div className="hero-float-cta">
        <button onClick={onSiteVisit}>
          <span>Schedule a Site Visit</span>
        </button>
        <button onClick={onEnquire}>
          <span>Enquire Now</span>
        </button>
      </div>

      <div className="hero-content">
        <div className="hero-badge">LUXURY FARMHOUSE PLOTS — 900 ACRES</div>
        <h1 className="hero-title">Green Vatika Farms</h1>
        <p className="hero-tagline">The Home of Your Dream in the Lap of Nature</p>
        <div className="hero-price-tag">
          Starting Price: <strong>₹7,500 – ₹10,500</strong> per sq. yard
        </div>
        <div className="hero-highlights">
          <span>✅ Same Day Registry</span>
          <span>✅ Same Day Mutation</span>
          <span>✅ Same Day Possession</span>
        </div>
        <div className="hero-location">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          Opposite Sector 135, Noida–Greater Noida Expressway
        </div>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={onSiteVisit}>
            Schedule a Site Visit
          </button>
          <button className="btn-outline" onClick={onEnquire}>
            Enquire Now
          </button>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <span />
      </div>
    </section>
  );
}
