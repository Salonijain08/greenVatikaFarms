import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import FloorPlan from './components/FloorPlan';
import Location from './components/Location';
import Configuration from './components/Configuration';
import Amenities from './components/Amenities';
import Partners from './components/Partners';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Popup from './components/Popup';

export default function App() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupTitle, setPopupTitle] = useState('Enquire Now');

  const openEnquire = () => {
    setPopupTitle('Enquire Now');
    setPopupOpen(true);
  };

  const openSiteVisit = () => {
    setPopupTitle('Schedule a Site Visit');
    setPopupOpen(true);
  };

  return (
    <>
      <Navbar onEnquire={openEnquire} />
      <Hero onEnquire={openEnquire} onSiteVisit={openSiteVisit} />
      <About onEnquire={openEnquire} />
      <Gallery />
      <Amenities onEnquire={openEnquire} />
      <FloorPlan onEnquire={openEnquire} />
      <Location onEnquire={openEnquire} />
      <Configuration onEnquire={openEnquire} />
      <Partners />
      <Clients />
      <Contact />
      <Footer onEnquire={openEnquire} />



      {/* WhatsApp floating button */}
      <img        src="/whatsapp.png"
        alt="Chat on WhatsApp"
        style={{
          position: 'fixed',
          bottom: '24px',
          right: '24px',
          zIndex: 999,
          width: '50px',
          height: '50px',
          cursor: 'pointer',
           transition: 'transform 0.2s',
          
        }}
        onMouseOver={e => e.currentTarget.style.transform = 'scale(1.2)'}
        onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
        onClick={() => window.open('https://api.whatsapp.com/send?phone=919310007449&text=I%20am%20interested%20to%20buy%20farm%20house', '_blank')}
      />
      
      <Popup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
        title={popupTitle}
      />
    </>
  );
}
