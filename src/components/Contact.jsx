import { useState } from 'react';
import './Contact.css';

function validatePhone(phone) {
  return /^[6-9]\d{9}$/.test(phone);
}

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((err) => ({ ...err, [name]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = 'Valid email is required';
    if (!validatePhone(form.phone))
      newErrors.phone = 'Enter a valid 10-digit mobile number starting with 6, 7, 8, or 9';
    return newErrors;
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

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <p className="contact-eyebrow">Get in Touch</p>
            <h2 className="section-title" style={{ textAlign: 'left' }}>
              Contact Us
            </h2>
            <div className="section-title-line" style={{ marginBottom: 24 }} />

            <p className="contact-desc">
              Interested in Green Vatika Farms? Our team is ready to assist you
              with all your queries. Fill in the form and we'll get back to you
              shortly.
            </p>

            <div className="contact-detail">
              <span className="contact-detail-icon">📍</span>
              <div>
                <strong>Location</strong>
                <p>Opposite Sector 135, Noida–Greater Noida Expressway</p>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-detail-icon">📞</span>
              <div>
                <strong>Call Us</strong>
                <p>+91 93100 07449</p>
              </div>
            </div>

            <div className="contact-detail">
              <span className="contact-detail-icon">✉️</span>
              <div>
                <strong>Email</strong>
                <p>info@greenvatikafarms.com</p>
              </div>
            </div>
          </div>

          <div className="contact-form-col">
            {submitted ? (
              <div className="thank-you">
                <div className="thank-you-icon">✅</div>
                <h3>Thank You!</h3>
                <p>
                  Our team will contact you shortly regarding Green Vatika
                  Farms.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    id="name"
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
                  <label htmlFor="email">Email Address *</label>
                  <input
                    id="email"
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
                  <label htmlFor="phone">Mobile Number *</label>
                  <div className="phone-input-wrap">
                    <span className="country-code">+91</span>
                    <input
                      id="phone"
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

                <div className="form-group">
                  <label htmlFor="message">Message (Optional)</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your requirements..."
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                  />
                </div>

                <button type="submit" className="btn-primary contact-submit">
                  Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
