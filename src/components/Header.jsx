import React, { useState, useEffect } from 'react';

export default function Header({ currentPage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const services = [
    { id: 'personal-tax', label: 'Personal Tax Services', desc: 'Individual, senior, & student filing' },
    { id: 'business-tax', label: 'Business Tax Return', desc: 'Sole proprietorship & GST/HST' },
    { id: 'corporation-tax', label: 'Corporation Tax', desc: 'Corporate T2 filing & structure' },
    { id: 'ride-service-tax', label: 'Ride Service Tax', desc: 'Uber, Lyft & delivery drivers' },
    { id: 'bookkeeping', label: 'Bookkeeping Services', desc: 'Monthly accounting & audits' },
    { id: 'payroll', label: 'Payroll Services', desc: 'Deductions, ROEs, WSIB & T4s' },
    { id: 'business-setup', label: 'Business Setup', desc: 'Registration & corporate changes' },
    { id: 'insurance-investment', label: 'Insurance & Wealth', desc: 'Life, health, TFSA & RRSPs' },
    { id: 'application-services', label: 'Application Assistance', desc: 'EI, CPP, OAS & child benefits' },
  ];

  return (
    <>
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-container">
          <a href="#/" className="logo-link" onClick={closeMobileMenu}>
            <img
              src="/images/RGHTlogo.png"
              alt="RGHT Tax & Accounting"
              className="header-logo-img"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="nav-menu">
            <a href="#/" className={`nav-link ${currentPage === 'home' ? 'active' : ''}`}>Home</a>
            
            <div className="nav-item-dropdown">
              <span className={`nav-link dropdown-toggle ${services.some(s => s.id === currentPage) ? 'active' : ''}`}>
                Services
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
              <div className="dropdown-menu">
                {services.map(s => (
                  <a key={s.id} href={`#/${s.id}`} className="dropdown-link">
                    <strong>{s.label}</strong>
                    <span>{s.desc}</span>
                  </a>
                ))}
              </div>
            </div>

            <a href="#/why-choose-us" className={`nav-link ${currentPage === 'why-choose-us' ? 'active' : ''}`}>Why Choose Us</a>
            <a href="#/about" className={`nav-link ${currentPage === 'about' ? 'active' : ''}`}>About</a>
            <a href="#/contact" className={`nav-link ${currentPage === 'contact' ? 'active' : ''}`}>Contact</a>
          </nav>

          <div className="header-buttons">
            <a href="#/intake-form" className="btn btn-accent btn-header-cta" style={{ borderRadius: '10rem' }}>
              Online Intake Form
            </a>
            <button className="mobile-nav-toggle" onClick={toggleMobileMenu} aria-label="Toggle navigation">
              {mobileMenuOpen ? (
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && <div className="mobile-nav-backdrop" onClick={closeMobileMenu} />}
      <div className={`mobile-nav-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="#/" className="mobile-link" onClick={closeMobileMenu}>Home</a>
        
        <span className="mobile-dropdown-title">Services</span>
        {services.map(s => (
          <a key={s.id} href={`#/${s.id}`} className="mobile-dropdown-link" onClick={closeMobileMenu}>
            {s.label}
          </a>
        ))}
        
        <span className="mobile-dropdown-title">Company</span>
        <a href="#/why-choose-us" className="mobile-link" onClick={closeMobileMenu}>Why Choose Us</a>
        <a href="#/about" className="mobile-link" onClick={closeMobileMenu}>About</a>
        <a href="#/contact" className="mobile-link" onClick={closeMobileMenu}>Contact</a>
        
        <a href="#/intake-form" className="btn btn-primary" style={{ marginTop: 'auto', borderRadius: '10rem' }} onClick={closeMobileMenu}>
          Online Intake Form
        </a>
      </div>
    </>
  );
}
