import './Amenities.css';

const infrastructure = [
  { icon: '🏡', text: 'Individual Wire-Fencing with Plantation' },
  { icon: '🛣️', text: 'Black Carpet Road from Expressway to Farmhouses' },
  { icon: '🌿', text: 'Roadside Plantation Throughout' },
  { icon: '↔️', text: 'All Farms Facing 25–30 Feet Wide Road' },
  { icon: '💡', text: 'Street Lights on All Roads' },
  { icon: '🌱', text: 'Sprawling Lawns & Open Green Areas' },
  { icon: '💧', text: 'Water Harvesting System' },
  { icon: '⚡', text: 'Government Electricity Connection' },
  { icon: '🌳', text: 'Tree-Lined Sidewalks' },
  { icon: '🛡️', text: '24×7 Security & Maintenance Staff' },
];

const clubAmenities = [
  { icon: '🏊', text: 'Swimming Pool' },
  { icon: '🏛️', text: 'Club House' },
  { icon: '🏏', text: 'Cricket Ground' },
  { icon: '🎉', text: 'Party Lawn' },
  { icon: '🏃', text: 'Jogging Track' },
  { icon: '🌄', text: 'Ready Possession' },
];

export default function Amenities({ onEnquire }) {
  return (
    <section id="amenities" className="amenities">
      <div className="container">
        <h2 className="section-title" style={{ color: '#fff' }}>
          World-Class Amenities
        </h2>
        <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.75)' }}>
          Everything you need for a perfect farmhouse lifestyle — all within the community
        </p>

        <div className="amenities-columns">
          <div className="amenity-group">
            <h3 className="amenity-group-title">🏗️ Infrastructure</h3>
            <ul className="amenity-list">
              {infrastructure.map((item, i) => (
                <li key={i} className="amenity-item">
                  <span className="amenity-icon">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="amenity-group">
            <h3 className="amenity-group-title">🏆 Club & Recreation</h3>
            <ul className="amenity-list">
              {clubAmenities.map((item, i) => (
                <li key={i} className="amenity-item">
                  <span className="amenity-icon">{item.icon}</span>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>

            <div className="amenity-cta-box">
              <p>Experience luxury farmhouse living in the lap of nature.</p>
              <button className="btn-gold" onClick={onEnquire}>
                Book a Site Visit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
