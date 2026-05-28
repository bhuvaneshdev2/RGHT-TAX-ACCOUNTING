import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <div className="footer-logo">
            <img src="/images/RGHTlogo.png" alt="RGHT Tax & Accounting" style={{ height: '100px', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
          </div>
          <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
            Premium CPA Tax Planning, Compliance & Accounting services for individuals, corporations, and small businesses in Brampton and across Ontario.
          </p>
          <h4 style={{ color: 'var(--color-accent-gold)', textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.05em' }}>Office Hours</h4>
          <p style={{ fontSize: '0.85rem', margin: '4px 0 0 0' }}>Monday – Saturday: 10:00 AM – 7:00 PM</p>
          <p style={{ fontSize: '0.85rem', margin: '2px 0 0 0' }}>Sunday: By Appointment</p>
        </div>

        <div className="footer-col">
          <h3>Services</h3>
          <ul className="footer-links">
            <li><a href="#/personal-tax">Personal Tax Services</a></li>
            <li><a href="#/business-tax">Business Tax Return</a></li>
            <li><a href="#/corporation-tax">Corporation Tax Services</a></li>
            <li><a href="#/ride-service-tax">Ride Service Tax Filing</a></li>
            <li><a href="#/bookkeeping">Bookkeeping Services</a></li>
            <li><a href="#/payroll">Payroll Services</a></li>
            <li><a href="#/business-setup">Business Setup & Corporate Changes</a></li>
            <li><a href="#/insurance-investment">Insurance & Wealth</a></li>
            <li><a href="#/application-services">Application Assistance</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Company</h3>
          <ul className="footer-links">
            <li><a href="#/">Home</a></li>
            <li><a href="#/why-choose-us">Why Choose Us</a></li>
            <li><a href="#/about">About Us</a></li>
            <li><a href="#/contact">Contact Us</a></li>
            <li><a href="#/intake-form">Online Intake Form</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Get In Touch</h3>
          <div className="footer-contact-info">
            <p style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.9rem', margin: 0 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>
                Unit 202D, 50 Sunny Meadow Blvd,<br />
                Brampton, ON L6R 0Y7
              </span>
            </p>
            <p style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', margin: 0 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>Cell: 647-504-6682</span>
            </p>
            <p style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', margin: 0 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>Office: 905-926-8694</span>
            </p>
            <p style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', margin: 0 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <a href="mailto:rght4tax@gmail.com" style={{ color: 'rgba(255,255,255,0.9)' }}>rght4tax@gmail.com</a>
            </p>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>© {currentYear} RGHT Tax & Accounting. All rights reserved. Professional Chartered Professional Accountant Services.</p>
        <div style={{ display: 'flex', gap: '15px' }}>
          <a href="#/privacy" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="#/terms" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
