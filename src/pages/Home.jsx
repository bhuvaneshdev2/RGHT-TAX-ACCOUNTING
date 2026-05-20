import React, { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', 'submitting'

  // GOOGLE SHEET SUBMISSION CONFIGURATION:
  // To connect to a Google Sheet:
  // 1. Create a Google Sheet.
  // 2. Open Extensions > Apps Script.
  // 3. Paste the following script:
  //
  // function doPost(e) {
  //   var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  //   var data = JSON.parse(e.postData.contents);
  //   sheet.appendRow([new Date(), data.firstName, data.lastName, data.email, data.phone, data.message]);
  //   return ContentService.createTextOutput(JSON.stringify({status: 'success'})).setMimeType(ContentService.MimeType.JSON);
  // }
  //
  // 4. Deploy as a Web App (set access to "Anyone").
  // 5. Replace the GOOGLE_SCRIPT_URL variable below with your Web App URL.
  
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwhfQR2vYch5aDlpzshZei3Cv2uoDYYzCubQ4HfTKg10vx4uk-ErHMA_XnEVIfaRBmH4g/exec'; // Paste your deployed Web App URL here

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('submitting');

    if (GOOGLE_SCRIPT_URL) {
      try {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors', // Important for cross-origin App Script triggers
          body: JSON.stringify(formData)
        });
        setSubmitStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      } catch (err) {
        console.error('Google Sheet submission error:', err);
        setSubmitStatus('error');
      }
    } else {
      // Fallback behavior if Google Sheet URL is not configured yet
      // Simulate successful submission for presentation
      setTimeout(() => {
        setSubmitStatus('success');
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      }, 1000);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-header">
        <div className="hero-header-overlay" />
        <img src="/images/cpa_hero_advisor.png" alt="RGHT Tax Advisor Banner" className="hero-header-image" />
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="hero-header-content">
            <span style={{ fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-accent-gold)', display: 'block', marginBottom: 'var(--space-xs)' }}>
              Your Trusted Financial Advisors
            </span>
            <h1>CPA firm specializing in Tax Returns, Consulting & Business Accounting</h1>
            <p>
              We simplify your corporate filings, tax compliance, and payroll accounting under one premium strategic framework. Serving Brampton and clients across Canada.
            </p>
            <div className="btn-group">
              <a href="#/contact" className="btn btn-primary btn-pill">
                Book Free Initial Consultation ↗
              </a>
              <a href="#/intake-form" className="btn btn-white btn-pill">
                File Taxes Online ↗
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Who Are We? Section */}
      <section className="info-section" style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ maxWidth: '700px', marginBottom: 'var(--space-lg)' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 700 }}>Who Are We?</h2>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.6', margin: 0 }}>
              At RGHT Tax & Accounting, we are a team of certified professionals committed to providing top-tier tax, compliance, and corporate structuring services. We align our services to keep your finances clear, secure, and fully optimized.
            </p>
          </div>
          
          <div className="who-are-we-grid">
            <div className="who-card">
              <div>
                <div className="who-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                    <line x1="9" y1="22" x2="9" y2="16" />
                    <line x1="15" y1="22" x2="15" y2="16" />
                    <line x1="9" y1="16" x2="15" y2="16" />
                    <path d="M9 6h.01" />
                    <path d="M15 6h.01" />
                    <path d="M9 10h.01" />
                    <path d="M15 10h.01" />
                  </svg>
                </div>
                <h3>Small Business & Individuals</h3>
                <p>Tailored tax filings, deduction optimization, and structure consultation for independent contractors, sole proprietors, and families.</p>
              </div>
              <a href="#/personal-tax" className="who-card-link" style={{ marginTop: '1rem' }}>Read More ↗</a>
            </div>

            <div className="who-card">
              <div>
                <div className="who-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                </div>
                <h3>Several Years of Experience</h3>
                <p>Decades of combined CPA experience dealing with complex CRA tax filings, holding structures, and corporate reconciliations.</p>
              </div>
              <a href="#/about" className="who-card-link" style={{ marginTop: '1rem' }}>Read More ↗</a>
            </div>

            <div className="who-card">
              <div>
                <div className="who-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </div>
                <h3>Importance of Learning & Delivering</h3>
                <p>We stay current with constantly changing Canada Revenue Agency rules to ensure we deliver optimal compliance and strategic advice.</p>
              </div>
              <a href="#/why-choose-us" className="who-card-link" style={{ marginTop: '1rem' }}>Read More ↗</a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="info-section" style={{ backgroundColor: 'var(--color-bg-card)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="testimonials-layout">
            <div>
              <span style={{ fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-accent-green)', display: 'block', marginBottom: 'var(--space-xs)' }}>
                Client Testimonials
              </span>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 700, marginBottom: 'var(--space-md)' }}>Hear What Our Satisfied Clients Say</h2>
              
              <div className="testimonial-cards-column">
                <div className="testimonial-card-bubble">
                  <div className="testimonial-stars">★★★★★</div>
                  <p className="testimonial-text">
                    "RGHT Tax & Accounting made my holding company year-end simple and stress-free. Their corporate structure consultation saved us substantial tax expense. Extremely professional and knowledgeable."
                  </p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">AK</div>
                    <div className="testimonial-author-info">
                      <h4>Mrs. Alice Kelly</h4>
                      <p>Corporate Director, Brampton</p>
                    </div>
                  </div>
                </div>

                <div className="testimonial-card-bubble">
                  <div className="testimonial-stars">★★★★★</div>
                  <p className="testimonial-text">
                    "Highly recommend their sole proprietor tax and bookkeeping services. Their virtual upload system is quick and secure, and they answered every question patiently."
                  </p>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">JD</div>
                    <div className="testimonial-author-info">
                      <h4>Mr. John Doe</h4>
                      <p>Small Business Owner, Mississauga</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="testimonial-photo-wrapper">
                <img src="/images/cpa_satisfied_client.png" alt="Satisfied Client" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="info-section" style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto var(--space-lg) auto' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-accent-green)', display: 'block', marginBottom: 'var(--space-xs)' }}>
              Our Commitment
            </span>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 700 }}>Why Partner with RGHT?</h2>
            <p style={{ margin: 0 }}>
              We pride ourselves on offering reliable, secure, and highly transparent tax solutions that foster financial growth and audit safety.
            </p>
          </div>

          <div className="partner-steps-grid">
            <div className="partner-step-card">
              <div className="partner-step-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="3" width="15" height="13" />
                  <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                  <circle cx="5.5" cy="18.5" r="2.5" />
                  <circle cx="18.5" cy="18.5" r="2.5" />
                </svg>
              </div>
              <h3>Delivery</h3>
              <p>On-time filing delivery, immediate acknowledgments, and automated reminders so you never miss a CRA deadline.</p>
            </div>

            <div className="partner-step-card">
              <div className="partner-step-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                </svg>
              </div>
              <h3>Flow</h3>
              <p>Clean multi-step online secure portals to drag-and-drop your slips, receipts, and T-forms without leaving home.</p>
            </div>

            <div className="partner-step-card">
              <div className="partner-step-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>Transparency</h3>
              <p>No hidden fees. Upfront flat-rate packages, comprehensive engagement letters, and direct breakdown of all tax deductions.</p>
            </div>

            <div className="partner-step-card">
              <div className="partner-step-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <h3>Availability</h3>
              <p>Year-round support. Reach us directly by cell or office lines for immediate, expert compliance answers when you need them.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tailored Solutions Section */}
      <section className="info-section" style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="tailored-solutions-split">
            <div className="tailored-text-block">
              <h2>Tailored Tax Solutions for Your Success</h2>
              <p>
                Whether you're managing complex holding portfolios, filing personal returns, running weekly payroll ledgers, or setting up a new provincial incorporation, our custom-tailored frameworks ensure you keep more of your hard-earned revenue.
              </p>
              <a href="#/intake-form" className="btn btn-accent btn-pill" style={{ alignSelf: 'flex-start' }}>
                Start Your Taxes Online ↗
              </a>
            </div>
            <div className="tailored-image-block">
              <img src="/images/cpa_hands_calculator.png" alt="CPA Calculating Tax Sheets" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="info-section" style={{ backgroundColor: 'var(--color-bg-card)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="services-split-layout">
            <div className="services-dark-block">
              <div>
                <h2>Our Services</h2>
                <p>Strategies to assist you in all tax and accounting matters, from startup compliance to advanced wealth protection planning.</p>
              </div>
              <a href="#/contact" className="btn btn-accent btn-pill" style={{ marginTop: 'var(--space-md)', alignSelf: 'flex-start' }}>
                Talk to an Expert ↗
              </a>
            </div>

            <div className="services-grid-block">
              <div className="service-grid-card">
                <div>
                  <div className="service-grid-card-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>
                  <h3>Tax Preparation</h3>
                  <p>Accurate personal, family, student, senior, and self-employed returns optimized for maximum refund.</p>
                </div>
                <a href="#/personal-tax" className="service-grid-card-link">Read More ↗</a>
              </div>

              <div className="service-grid-card">
                <div>
                  <div className="service-grid-card-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .3 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                      <line x1="9" y1="18" x2="15" y2="18" />
                      <line x1="10" y1="22" x2="14" y2="22" />
                    </svg>
                  </div>
                  <h3>Consultation</h3>
                  <p>Tax planning, restructuring, holdco setups, and legal minimization strategies designed to build wealth.</p>
                </div>
                <a href="#/contact" className="service-grid-card-link">Read More ↗</a>
              </div>

              <div className="service-grid-card">
                <div>
                  <div className="service-grid-card-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="20" x2="18" y2="10" />
                      <line x1="12" y1="20" x2="12" y2="4" />
                      <line x1="6" y1="20" x2="6" y2="14" />
                    </svg>
                  </div>
                  <h3>Accounting & Bookkeeping</h3>
                  <p>Monthly bank reconciliations, accounts ledger sync, QuickBooks support, and ready-to-file income statements.</p>
                </div>
                <a href="#/bookkeeping" className="service-grid-card-link">Read More ↗</a>
              </div>

              <div className="service-grid-card">
                <div>
                  <div className="service-grid-card-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 3v18h18" />
                      <path d="m18.7 8-5.1 5.2-2.8-2.7L7 14.3" />
                    </svg>
                  </div>
                  <h3>Financial Compilations</h3>
                  <p>Professional financial reporting, profit & loss, balance sheets, and shareholder account reporting.</p>
                </div>
                <a href="#/corporation-tax" className="service-grid-card-link">Read More ↗</a>
              </div>

              <div className="service-grid-card">
                <div>
                  <div className="service-grid-card-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <h3>Incorporation</h3>
                  <p>Ontario & Federal business setups, payroll tax registration, GST/HST accounts, and sole prop conversions.</p>
                </div>
                <a href="#/business-setup" className="service-grid-card-link">Read More ↗</a>
              </div>

              <div className="service-grid-card">
                <div>
                  <div className="service-grid-card-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" />
                      <circle cx="7" cy="17" r="2" />
                      <circle cx="17" cy="17" r="2" />
                    </svg>
                  </div>
                  <h3>Ride Service Tax</h3>
                  <p>Compliant taxi, Uber, Lyft, and courier contractor expense schedules with mileage reconciliation.</p>
                </div>
                <a href="#/ride-service-tax" className="service-grid-card-link">Read More ↗</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get in Touch Section */}
      <section className="info-section">
        <div className="container">
          <div className="contact-section-grid">
            <div>
              <span style={{ fontSize: '0.9rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-accent-green)', display: 'block', marginBottom: 'var(--space-xs)' }}>
                Connect With Us
              </span>
              <h2 style={{ fontSize: '2.2rem', fontWeight: 700 }}>Get in Touch</h2>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.6', margin: 0 }}>
                Have questions about your filings, corporate structures, or CRA notices? Send us a message, and our tax specialists will get back to you within 24 hours.
              </p>
            </div>

            <div>
              {submitStatus === 'success' ? (
                <div style={{ backgroundColor: 'var(--color-primary-light)', padding: '2rem', borderRadius: 'var(--radius-md)', textAlign: 'center', border: '1px solid var(--color-accent-gold)' }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 auto var(--space-xs) auto' }}>
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  <h3 style={{ color: 'var(--color-accent-green)', marginBottom: '8px' }}>Thank You!</h3>
                  <p style={{ color: 'var(--color-text-primary)', margin: 0 }}>Your message has been sent successfully. We will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="contact-form-underlined">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" value={formData.firstName} onChange={handleInputChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" value={formData.lastName} onChange={handleInputChange} required />
                  </div>
                  <div className="form-group form-group-full">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" value={formData.email} onChange={handleInputChange} required />
                  </div>
                  <div className="form-group form-group-full">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" value={formData.phone} onChange={handleInputChange} required />
                  </div>
                  <div className="form-group form-group-full">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" rows="4" value={formData.message} onChange={handleInputChange} required />
                  </div>
                  {submitStatus === 'error' && (
                    <div className="form-group-full" style={{ color: 'var(--color-alert)', fontSize: '0.9rem', fontWeight: 600 }}>
                      An error occurred while sending your message. Please try again.
                    </div>
                  )}
                  <div className="form-group-full" style={{ marginTop: 'var(--space-md)' }}>
                    <button type="submit" className="btn btn-primary btn-pill" disabled={submitStatus === 'submitting'}>
                      {submitStatus === 'submitting' ? 'Submitting...' : 'Submit ↗'}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
