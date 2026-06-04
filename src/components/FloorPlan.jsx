import './FloorPlan.css';

const plans = [
  {
    title: '1008 – 5040 Sq. Yard',
    img: '/sm.jpg',
  },
];

export default function FloorPlan({ onEnquire }) {
  return (
    <section id="floorplan" className="floorplan">
      <div className="container">
        <h2 className="section-title">Site Map</h2>
        <p className="section-subtitle">
          Layout of Green Vatika Farms — your plot, your nature
        </p>

        <div className="floorplan-single">
          <div className="sitemap-img-wrap">
            <img src="/sitemap.jpeg" alt="Green Vatika Farms Site Map" />
          </div>
          <div className="sitemap-info">
            <h3>Site Map — Green Vatika Farms</h3>
            <p>
              Spread across 900 acres, our farmhouse plots are available in sizes of
              1008, 2016, 3024, 4032, and 5040 sq. yards — all facing 25–30 ft wide roads
              with complete infrastructure in place.
            </p>
            <div className="sitemap-tags">
              <span>✓ Clear Title</span>
              <span>✓ Gated Community</span>
              <span>✓ Ready Possession</span>
              <span>✓ Same Day Registry</span>
            </div>
            <button className="btn-primary" style={{marginTop:'20px'}} onClick={onEnquire}>
              Enquire Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
