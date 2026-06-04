import './Clients.css';

const clients = [
  { name: 'Kashyap Motors',         role: 'BMW Dealership' },
  { name: 'Subodh Gupta',           role: 'BHEL' },
  { name: 'S B Gupta',              role: 'CEO, Ascent Builders' },
  { name: 'B K Swain',              role: 'Head-HR, Tata Sons' },
  { name: 'Justice P C Pant',       role: 'Simla High Court' },
  { name: 'R K Sharma',             role: 'Airport Authority of India' },
  { name: 'Ahman Siddiqui',         role: 'Director, Maruti Suzuki' },
  { name: 'Suresh Babu',            role: 'Vice President, Shilpi Cables' },
  { name: 'Dr. Kuldeep Saini',      role: 'IAS, Noida Authority' },
  { name: 'Nitin R Gokarn',         role: 'IAS, Joint Secretary, Govt. of India' },
  { name: 'Adv. Kumar Ranjan',      role: 'Sr. Lawyer, Supreme Court of India' },
  { name: 'Justice G R Sharma',     role: 'Sessions Court, Bihar' },
  { name: 'Yaseen Mirza',           role: 'Mirza Group (Red Tape Shoes)' },
  { name: 'Sanjay Bhalla',          role: 'Surya Light and Solar Panels' },
  { name: 'Col. Joshi',             role: 'Ex. Serviceman' },
  { name: 'Brig. Rana',             role: 'Ex. Serviceman' },
  { name: 'Fateh Bahadur',          role: 'Cabinet Minister, UP Government' },
  { name: 'Veer Bahadur',           role: 'Ex. Chief Minister, Uttar Pradesh' },
  { name: 'Master Capt. Rajiv Minocha', role: 'Merchant Navy' },
  { name: 'Satbir Thakur',          role: 'Ministry of Horticulture' },
  { name: 'Deep Shekhar',           role: 'Ministry of Defence' },
  { name: 'Ajit Kumar',             role: 'NRI' },
];

function initials(name) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
}

export default function Clients() {
  return (
    <section id="clients" className="clients-section">
      <div className="container">
        <p className="about-eyebrow" style={{ color: 'var(--gold)', textAlign: 'center' }}>
          Established in 2007
        </p>
        <h2 className="section-title" style={{ color: '#fff' }}>
          Our Happy Clients
        </h2>
        <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)' }}>
          Trusted by IAS officers, defence personnel, industrialists, lawyers & families across India
        </p>

        <div className="clients-grid">
          {clients.map((c, i) => (
            <div className="client-card" key={i}>
              <div className="client-avatar">{initials(c.name)}</div>
              <div className="client-info">
                <strong>{c.name}</strong>
                <span>{c.role}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="clients-note">
          + 1200 acres of farmhouses successfully sold since 2007
        </p>
      </div>
    </section>
  );
}
