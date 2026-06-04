import './Location.css';

const distances = [
  { icon: '🛣️', label: 'Noida–Greater Noida Expressway', dist: '2 KM' },
  { icon: '🛤️', label: 'Mini Expressway (Kalindi to FNG)', dist: '0 KM' },
  { icon: '🚇', label: 'Proposed Metro Station', dist: '2 KM' },
  { icon: '🎓', label: 'Amity University', dist: '6 KM' },
  { icon: '🏥', label: 'Jaypee Hospital', dist: '5 KM' },
  { icon: '🌊', label: 'Kalindi Kund', dist: '15 KM' },
  { icon: '🌉', label: 'D.N.D. Flyover', dist: '18 KM' },
  { icon: '🌉', label: 'Mahamaya Flyover', dist: '14.3 KM' },
];

const highlights = [
  { icon: '🏘️', text: '500+ Farmhouses Already Developed' },
  { icon: '🛡️', text: 'Gated Society with 24×7 Security' },
  { icon: '🛣️', text: 'Developed Blacktop Roads Inside' },
  { icon: '🌿', text: 'Lush Green Community Environment' },
];

export default function Location({ onEnquire }) {
  return (
    <section id="location" className="location">
      <div className="container">
        <h2 className="section-title">Location Advantage</h2>
        <p className="section-subtitle">
          Opposite Sector 135, on Noida–Greater Noida Expressway — Just 4 KM from Kalindi Kunj
        </p>

        <div className="location-grid">
          {/* Map */}
          <div className="location-map-col">
            <div className="map-wrapper">
              <iframe
                title="Green Vatika Farms Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.3!2d77.4065496!3d28.4785270!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI4JzQyLjciTiA3N8KwMjQnMjMuNiJF!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="map-pin-label">
                <span>📍 Opp. Sector 135, Noida–Greater Noida Expressway</span>
              </div>
            </div>

            <div className="loc-highlights-grid">
              {highlights.map((h, i) => (
                <div className="loc-highlight-item" key={i}>
                  <span>{h.icon}</span>
                  <span>{h.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Distance Table */}
          <div className="location-adv-col">
            <h3 className="adv-heading">Key Distances</h3>
            <div className="distance-list">
              {distances.map((d, i) => (
                <div className="distance-row" key={i}>
                  <span className="dist-icon">{d.icon}</span>
                  <span className="dist-label">{d.label}</span>
                  <span className="dist-value">{d.dist}</span>
                </div>
              ))}
            </div>

            <div className="location-address">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="var(--green-primary)">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <div>
                <strong>Green Vatika Farms</strong>
                <p>Opposite Sector 135, Noida–Greater Noida Expressway</p>
                <p style={{fontSize:'0.8rem',marginTop:'4px',color:'#666'}}>
                  Adjoined to Faridabad–Noida–Ghaziabad Highway
                </p>
              </div>
            </div>
            <button className="btn-primary" onClick={onEnquire}>
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
