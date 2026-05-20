import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', 'submitting'

  // GOOGLE SHEET SUBMISSION CONFIGURATION:
  // Replace the GOOGLE_SCRIPT_URL variable below with your Web App URL.
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwhfQR2vYch5aDlpzshZei3Cv2uoDYYzCubQ4HfTKg10vx4uk-ErHMA_XnEVIfaRBmH4g/exec'; 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('submitting');

    if (GOOGLE_SCRIPT_URL) {
      try {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          body: JSON.stringify({ ...formData, formType: 'contact' })
        });
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } catch (err) {
        console.error('Google Sheet submission error:', err);
        setSubmitStatus('error');
      }
    } else {
      // Simulate successful submission if Google Sheet URL is not configured yet
      setTimeout(() => {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      }, 1000);
    }
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Connect with our team in Brampton or start virtually from anywhere in Canada. We are here to bring clarity and compliance to your numbers.</p>
        </div>
      </section>

      <section className="py-lg">
        <div className="container two-col-layout">
          <div>
            <div className="content-block">
              <h2>Get In Touch</h2>
              <p>Have questions about your personal taxes, corporate filings, or bookkeeping setup? Complete the form below, and our team will respond within 1 business day.</p>
              
              <form onSubmit={handleSubmit} className="sidebar-card" style={{ backgroundColor: 'var(--color-white)', border: '1px solid var(--color-border)', padding: 'var(--space-md)', marginTop: 'var(--space-md)' }}>
                <div className="form-group">
                  <label htmlFor="contact-name">Full Name *</label>
                  <input 
                    type="text" 
                    id="contact-name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: '4px' }} 
                  />
                </div>
                <div className="form-group" style={{ marginTop: 'var(--space-sm)' }}>
                  <label htmlFor="contact-email">Email Address *</label>
                  <input 
                    type="email" 
                    id="contact-email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: '4px' }} 
                  />
                </div>
                <div className="form-group" style={{ marginTop: 'var(--space-sm)' }}>
                  <label htmlFor="contact-phone">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="contact-phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    required 
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: '4px' }} 
                  />
                </div>
                <div className="form-group" style={{ marginTop: 'var(--space-sm)' }}>
                  <label htmlFor="contact-service">Service of Interest *</label>
                  <select 
                    id="contact-service" 
                    name="service" 
                    value={formData.service}
                    onChange={handleChange}
                    required 
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: '4px' }}
                  >
                    <option value="">-- Select a Service --</option>
                    <option value="business-setup">Business Setup & Incorporation</option>
                    <option value="personal-tax">Personal Tax Preparation</option>
                    <option value="business-tax">Sole Proprietorship Tax</option>
                    <option value="corporate-tax">Corporate T2 Tax Return</option>
                    <option value="ride-service">Ride Service Tax</option>
                    <option value="bookkeeping">Bookkeeping Services</option>
                    <option value="payroll">Payroll Management</option>
                    <option value="insurance-investment">Insurance & Investments</option>
                    <option value="application-assistance">Application Assistance</option>
                  </select>
                </div>
                <div className="form-group" style={{ marginTop: 'var(--space-sm)' }}>
                  <label htmlFor="contact-message">How can we help? *</label>
                  <textarea 
                    id="contact-message" 
                    name="message" 
                    rows="5" 
                    value={formData.message}
                    onChange={handleChange}
                    required 
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: '4px', fontFamily: 'inherit' }}
                  ></textarea>
                </div>
                <div style={{ marginTop: 'var(--space-md)' }}>
                  <button 
                    type="submit" 
                    className="btn btn-primary" 
                    style={{ width: '100%' }}
                    disabled={submitStatus === 'submitting'}
                  >
                    {submitStatus === 'submitting' ? 'Submitting Message...' : 'Submit Message'}
                  </button>
                </div>
                {submitStatus === 'success' && (
                  <div className="alert-success" style={{ marginTop: '1rem', padding: '0.75rem', borderRadius: '4px' }}>
                    Thank you! Your message has been submitted. A team member will follow up shortly.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="alert-danger" style={{ marginTop: '1rem', padding: '0.75rem', borderRadius: '4px', backgroundColor: '#fde8e8', color: '#9b1c1c', border: '1px solid #f8b4b4' }}>
                    An error occurred while submitting. Please try again or contact us directly at info@rght.ca.
                  </div>
                )}
              </form>
            </div>

            {/* Google Maps Embedded */}
            <div className="content-block" style={{ marginTop: 'var(--space-lg)' }}>
              <h2>Office Location Map</h2>
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
                <iframe 
                  title="RGHT Office Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2883.334185790403!2d-79.72266858450002!3d43.74513877911833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1m3!1d0!2zNDPCsDQ0JzQyLjUiTiA3OcKwNDMnMTMuOCJX!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca" 
                  style={{ position: 'absolute', top: 0, left: 0, width: 100 + '%', height: 100 + '%', border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          <div className="sidebar">
            <div className="sidebar-card">
              <h3>Contact Information</h3>
              <ul className="contact-info-list" style={{ listStyle: 'none', paddingLeft: 0 }}>
                <li className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-accent-gold)' }}><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <div>
                    <strong>Address:</strong><br />
                    RGHT TAX & ACCOUNTING<br />
                    50 Sunny Meadow Blvd,<br />
                    Unit # 202D<br />
                    Brampton, ON L6R 0Y7
                  </div>
                </li>
                <li className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-accent-gold)' }}><rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" /></svg>
                  </div>
                  <div>
                    <strong>Cell Phone:</strong><br />
                    <a href="tel:647-504-6682" style={{ color: 'var(--color-accent-gold)', textDecoration: 'none' }}>647-504-6682</a>
                  </div>
                </li>
                <li className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-accent-gold)' }}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  </div>
                  <div>
                    <strong>Office Phone:</strong><br />
                    <a href="tel:905-926-8694" style={{ color: 'var(--color-accent-gold)', textDecoration: 'none' }}>905-926-8694</a>
                  </div>
                </li>
                <li className="contact-info-item">
                  <div className="contact-info-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-accent-gold)' }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  </div>
                  <div>
                    <strong>Email Address:</strong><br />
                    <a href="mailto:RGHT4TAX@GMAIL.COM" style={{ color: 'var(--color-accent-gold)', textDecoration: 'none' }}>RGHT4TAX@GMAIL.COM</a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="sidebar-card" style={{ backgroundColor: 'var(--color-bg-card)' }}>
              <h3>Office Hours</h3>
              <ul className="hours-list" style={{ fontSize: '0.95rem' }}>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border)', padding: '0.25rem 0' }}>
                  <span>Monday - Friday</span>
                  <strong>9:00 AM - 6:00 PM</strong>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--color-border)', padding: '0.25rem 0' }}>
                  <span>Saturday</span>
                  <strong>10:00 AM - 3:00 PM</strong>
                </li>
                <li style={{ display: 'flex', justifyContent: 'space-between', padding: '0.25rem 0', color: 'var(--color-text-muted)' }}>
                  <span>Sunday</span>
                  <strong>Closed</strong>
                </li>
              </ul>
              <p style={{ fontSize: '0.85rem', marginTop: '0.5rem', textAlign: 'center', fontStyle: 'italic' }}>* Saturday meetings are by appointment only.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
