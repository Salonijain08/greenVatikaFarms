import { useState } from 'react';
import './Popup.css';

function validatePhone(phone) {
  return /^[6-9]\d{9}$/.test(phone);
}

export default function Popup({ isOpen, onClose, title }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((err) => ({ ...err, [name]: '' }));
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      errs.email = 'Valid email is required';
    if (!validatePhone(form.phone))
      errs.phone = 'Enter a valid 10-digit number starting with 6, 7, 8, or 9';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  };

  const handleClose = () => {
    setForm({ name: '', email: '', phone: '' });
    setErrors({});
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="popup-backdrop" onClick={handleClose}>
      <div className="popup-box" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={handleClose}>
          &times;
        </button>

        {submitted ? (
          <div className="popup-success">
            <div className="success-icon">🌿</div>
            <h3>Thank You!</h3>
            <p>
              Our team will reach out to you shortly with details about Green
              Beauty Farms.
            </p>
            <button className="btn-primary" onClick={handleClose}>
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="popup-header">
              <div className="popup-badge">Green Vatika Farms</div>
              <h2>{title || 'Enquire Now'}</h2>
              <p>Fill in your details and our team will get back to you promptly.</p>
            </div>

            <form className="popup-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="popup-name">Full Name *</label>
                <input
                  id="popup-name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="err-msg">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="popup-email">Email Address *</label>
                <input
                  id="popup-email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="err-msg">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="popup-phone">Mobile Number *</label>
                <div className="phone-input-wrap">
                  <span className="country-code">+91</span>
                  <input
                    id="popup-phone"
                    name="phone"
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={form.phone}
                    onChange={handleChange}
                    maxLength={10}
                    className={errors.phone ? 'error' : ''}
                  />
                </div>
                {errors.phone && <span className="err-msg">{errors.phone}</span>}
              </div>

              <button type="submit" className="btn-primary popup-submit">
                Submit Enquiry
              </button>

              <p className="popup-privacy">
                🔒 Your information is safe with us. No spam ever.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
