import './Partners.css';

const BASE = 'https://www.greenbeauty.in/images/';

const partners = [
  { name: 'AAI',       logo: `${BASE}AAI_logo_new.jpg` },
  { name: 'Ascent',    logo: `${BASE}ascent.jpg` },
  { name: 'BHEL',      logo: `${BASE}bhel.jpg` },
  { name: 'BMW',       logo: `${BASE}bmw.jpg` },
  { name: 'Dabur',     logo: `${BASE}dabur.jpg` },
  { name: 'Delhi Bar', logo: `${BASE}delhibar.jpg` },
  { name: 'DRDO',      logo: `${BASE}drdo.jpg` },
];

export default function Partners() {
  return (
    <section className="partners">
      <div className="container">
        <p className="partners-label">Trusted by Employees of Leading Organizations</p>
        <div className="partners-track">
          {partners.map((p, i) => (
            <div className="partner-logo" key={i}>
              <img src={p.logo} alt={p.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
