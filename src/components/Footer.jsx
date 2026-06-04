import './Footer.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Configuration', href: '#configuration' },
  { label: 'Floor Plan', href: '#floorplan' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer({ onEnquire }) {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-top-grid">
          <div className="footer-brand">
            <img src="/gv.png" alt="Green Vatika Farms" className="footer-logo" />
            <p className="footer-tagline">
              The home of your dream in the lap of Nature. 900 acres of lush greenery at Noida–Greater Noida Expressway.
            </p>
            <div className="footer-socials">
              <a href="https://www.facebook.com/GreenVatikaFarms/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" title="Facebook">f</a>
              <a href="https://api.whatsapp.com/send?phone=919310007449&text=I%20am%20interested%20to%20buy%20farm%20house" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" title="WhatsApp">wa</a>
              <a href="https://twitter.com/GreenVatikaFarms" target="_blank" rel="noopener noreferrer" aria-label="Twitter" title="Twitter">tw</a>
              <a href="https://www.youtube.com/channel/UCbiAU1Qi_0cKabbUZSL5aoA" target="_blank" rel="noopener noreferrer" aria-label="YouTube" title="YouTube">yt</a>
            </div>
          </div>

          <div className="footer-links-col">
            <h4>Quick Links</h4>
            <ul>
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-contact-col">
            <h4>Contact Info</h4>
            <p>📍 Opposite Sector 135, Noida–Greater Noida Expressway</p>
            <p style={{fontSize:'0.8rem',marginTop:'-6px',opacity:0.7}}>Adjoined to Faridabad–Noida–Ghaziabad Highway</p>
            <p>📞 +91 93100 07449</p>
            <p>✉️ info@greenvatikafarms.com</p>
            <p>🕐 Mon–Sun: 9 AM – 7 PM</p>
            <button className="btn-gold footer-cta" onClick={onEnquire}>
              Enquire Now
            </button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>
            © 2010–{new Date().getFullYear()} Green Vatika Farms. All rights reserved. | Opposite Sector 135, Noida–Greater Noida Expressway
          </p>
          <p className="disclaimer">
            *Prices are indicative and subject to change. All images are for representational purposes only.
          </p>
        </div>
      </div>
    </footer>
  );
}
