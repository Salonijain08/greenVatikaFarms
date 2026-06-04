import './About.css';

export default function About({ onEnquire }) {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-col">
            <div className="about-img-wrapper">
              <img
                src="https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=800&q=80"
                alt="Green Vatika Farms nature"
              />
              <div className="about-img-badge">
                <span className="badge-num">900+</span>
                <span className="badge-text">Acres</span>
              </div>
            </div>
          </div>

          <div className="about-text-col">
            <p className="about-eyebrow">Established in 2007 &nbsp;·&nbsp; Welcome To</p>
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              Green Vatika Farms
            </h2>
            <div className="section-title-line" />

            <p className="about-para">
              In today's bustle-filled life, when the busy offices, noisy streets and
              cluttered roads take their toll on you, taking off becomes mandatory.
              Far from the maddening crowd lies a world where you will love to break
              free, relax and also experience adventure in a little way.
            </p>
            <p className="about-para">
              Our Farms welcomes you to a place where having fun is a rule and
              reclining back in the evening under a clear blue sky is a custom.
              Splayed with earthy browns, divine blues and lush greens, spread over
              an expanse of <strong>900 acres</strong>, it is the perfect retreat.
            </p>
            <p className="about-para">
              <strong>Green Vatika Farms</strong> — The home of your dream in the
              lap of Nature. A getaway for holiday makers, for peace seekers, for
              tired nerves, for reflection and rejuvenation.
            </p>

            <div className="about-features">
              <div className="feature-item">
                <span className="feature-icon">🌿</span>
                <span>900 Acres of Lush Greenery</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🏡</span>
                <span>500+ Farmhouses Developed</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📍</span>
                <span>Opp. Sector 135, Noida Expressway</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🛡️</span>
                <span>24×7 Gated & Secured Community</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">📋</span>
                <span>Same Day Registry & Possession</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">⚡</span>
                <span>Government Electricity</span>
              </div>
            </div>

            <button className="btn-primary" onClick={onEnquire}>
              Know More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
