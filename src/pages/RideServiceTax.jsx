import React from 'react';

export default function RideServiceTax() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Ride Service Tax Filing Services</h1>
          <p>Hassle-Free Tax Filing for Uber, Lyft, SkipTheDishes, DoorDash & Gig Workers. We optimize your vehicle deductions, mileage records, and GST/HST filings.</p>
        </div>
      </section>

      <section className="py-lg">
        <div className="container two-col-layout">
          <div>
            <div className="content-block">
              <h2>Tax Support for Ride-Share & Delivery Drivers</h2>
              <p>Whether you drive full-time or part-time, your ride-service income must be reported correctly to the Canada Revenue Agency (CRA). Unlike standard self-employed businesses with a $30,000 threshold, ride-sharing has mandatory GST/HST registration requirements from dollar one.</p>
              <p>At RGHT Tax & Accounting, we help ride-share and delivery drivers stay compliant, register accounts, maximize deductions, and file with complete confidence.</p>
            </div>

            <div className="content-block">
              <h2>What’s Included in Our Services</h2>
              <div className="service-feature-grid">
                <div className="service-feature-card">
                  <h4>Income Reporting & Personal Tax Filing</h4>
                  <p>We accurately report your self-employment gig earnings and integrate them into your personal tax return (T1) using Form T2125.</p>
                </div>
                <div className="service-feature-card">
                  <h4>GST/HST Registration & Filing</h4>
                  <p>We set up your GST/HST account, calculate sales tax collected, and file quarterly or annual returns while ensuring all Input Tax Credits (ITCs) are claimed.</p>
                </div>
                <div className="service-feature-card">
                  <h4>Expense Tracking & Deduction Support</h4>
                  <p>We audit your records to optimize deductions: fuel, charging, repairs, maintenance, oil changes, insurance, cell phone, internet, platform fees, passenger supplies, and cleaning.</p>
                </div>
                <div className="service-feature-card">
                  <h4>CRA Audit Representation</h4>
                  <p>Ride-share filings are frequently reviewed by the CRA. We manage document preparation, mileage log reconciliations, and direct response communication.</p>
                </div>
              </div>
            </div>

            <div className="content-block">
              <h2>Why HST Filing Matters for Drivers</h2>
              <p>Under CRA rules, ride-service drivers are generally required to register for GST/HST because ride-sharing is categorized as a taxable commercial passenger service. This means you must:</p>
              <ul className="styled-bullet-list">
                <li>Register for a GST/HST account immediately upon starting.</li>
                <li>File regular HST returns (quarterly or annually).</li>
                <li>Keep accurate logs of your business mileage vs. personal driving.</li>
                <li>Claim Input Tax Credits (ITCs) to recover HST paid on business expenses.</li>
              </ul>
            </div>

            <div className="content-block">
              <h2>Our Simple Filing Process</h2>
              <ol className="process-list">
                <li><strong>Consultation:</strong> We review your platform earnings and mileage logs.</li>
                <li><strong>Document Submission:</strong> Send us your monthly/annual tax summaries from Uber, Lyft, etc.</li>
                <li><strong>Expense Review:</strong> We verify receipts for fuel, insurance, maintenance, and phone.</li>
                <li><strong>Accurate Filing:</strong> We e-file your T1 + T2125 return and your GST/HST return securely.</li>
                <li><strong>Post-Filing Advisory:</strong> We help you set up installment reminders and manage CRA letters.</li>
              </ol>
            </div>
          </div>

          <div className="sidebar">
            <div className="sidebar-card">
              <h3>Who We Support</h3>
              <div className="badge-container" style={{ margin: 0 }}>
                <span className="badge-item">Uber & Lyft</span>
                <span className="badge-item">Uber Eats & DoorDash</span>
                <span className="badge-item">SkipTheDishes & Instacart</span>
                <span className="badge-item">Amazon Flex Couriers</span>
                <span className="badge-item">Gig Economy Couriers</span>
              </div>
            </div>
            <div className="sidebar-card" style={{ backgroundColor: 'var(--color-bg-card)' }}>
              <h3>Special Offers</h3>
              <ul className="pricing-features">
                <li>HST registration bundles</li>
                <li>First-time filer discounts</li>
                <li>Referral benefit options</li>
              </ul>
              <a href="#/intake-form" className="btn btn-primary" style={{ width: '100%', marginTop: 'var(--space-sm)' }}>File Drivers Tax Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="pricing-section">
        <div className="container">
          <div className="section-title">
            <h2>Ride Service Filing Packages</h2>
            <p>Simple, transparent pricing tailored to your driving frequency and income bracket.</p>
          </div>
          <div className="pricing-grid">
            
            {/* Package 1 */}
            <div className="pricing-card">
              <h3>Starter Driver</h3>
              <p>Perfect for part-time, weekend, or casual gig delivery partners.</p>
              <div className="price-bracket">Starting $60</div>
              <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>For Revenues Under $20,000</p>
              <ul className="pricing-features">
                <li>T2125 Business Statement</li>
                <li>Basic income reporting</li>
                <li>Limited expense claims</li>
                <li>Personal tax return (T1) included</li>
                <li>Secure CRA E-Filing</li>
              </ul>
              <a href="#/intake-form" className="btn btn-secondary">Get Started</a>
            </div>

            {/* Package 2 */}
            <div className="pricing-card featured">
              <div className="pricing-badge">Popular</div>
              <h3>Standard Driver</h3>
              <p>Designed for regular part-time drivers working multiple platforms.</p>
              <div className="price-bracket">$100 - $150</div>
              <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>For Revenues $20,000 - $50,000</p>
              <ul className="pricing-features">
                <li>Income reporting from multiple apps</li>
                <li>Mileage & vehicle logs calculation</li>
                <li>Expense tracking & claims checks</li>
                <li>T2125 business preparation</li>
                <li>Personal tax return (T1) integration</li>
              </ul>
              <a href="#/intake-form" className="btn btn-primary">Get Started</a>
            </div>

            {/* Package 3 */}
            <div className="pricing-card">
              <h3>Full-Time Driver</h3>
              <p>For dedicated drivers requiring high-volume deduction optimization.</p>
              <div className="price-bracket">$150 - $250</div>
              <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>For Revenues $50,000 - $100,000</p>
              <ul className="pricing-features">
                <li>High-volume transaction entries</li>
                <li>Detailed vehicle, maintenance & fuel claims</li>
                <li>GST/HST account filing reviews</li>
                <li>Advanced tax deduction checking</li>
                <li>Personal + business tax filing</li>
              </ul>
              <a href="#/intake-form" className="btn btn-secondary">Get Started</a>
            </div>

            {/* Package 4 */}
            <div className="pricing-card">
              <h3>Advanced Driver</h3>
              <p>For high-income drivers and complex multiple contractor profiles.</p>
              <div className="price-bracket">$250 - $400+</div>
              <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>For Revenues Over $100,000</p>
              <ul className="pricing-features">
                <li>Complex multi-stream income setup</li>
                <li>Advanced depreciation (CCA) calculations</li>
                <li>GST/HST filing & reconciliation</li>
                <li>CRA audit-ready support & logs check</li>
                <li>Year-round advisory access</li>
              </ul>
              <a href="#/intake-form" className="btn btn-secondary">Get Quote</a>
            </div>

          </div>

          {/* GST/HST Setup & Filing Box */}
          <div className="hst-addon-container">
            <h3 className="text-center" style={{ marginBottom: 'var(--space-md)', color: 'var(--color-accent-green)' }}>GST/HST Account Setup & Filing</h3>
            
            <div className="hst-addon-grid">
              <div className="hst-addon-column">
                <h4>HST Setup & Registration</h4>
                <div className="price-tag">Starting $50</div>
                <p>We register your GST/HST account with the CRA and establish your filing schedule.</p>
              </div>
              
              <div className="hst-addon-column">
                <h4>HST Return Filings</h4>
                <div className="price-tag">Starting $80</div>
                <p>We calculate HST collected and claim ITCs:</p>
                <div className="hst-sub-prices">
                  <div className="hst-sub-price-row">
                    <span>Annual Filing</span>
                    <strong>From $80</strong>
                  </div>
                  <div className="hst-sub-price-row">
                    <span>Quarterly Filing</span>
                    <strong>From $100</strong>
                  </div>
                </div>
              </div>
              
              <div className="hst-addon-column">
                <h4>Audit & Log Reviews</h4>
                <div className="price-tag">Starting $100</div>
                <p>Assistance preparing for CRA mileage audits and logbook verification reviews.</p>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: 'var(--space-md)' }}>
            <h4 style={{ marginBottom: 'var(--space-sm)', color: 'var(--color-text-primary)' }}>Optional Add-on Support</h4>
            <div className="addons-pills-container">
              <div className="addon-pill-item">Mileage Log Setup: <strong>$25+</strong></div>
              <div className="addon-pill-item">Expense Organization: <strong>$50+</strong></div>
              <div className="addon-pill-item">Late Filing / Catch-up: <strong>$100+</strong></div>
              <div className="addon-pill-item">CRA My Account Setup: <strong>$25+</strong></div>
              <div className="addon-pill-item">Urgent Filing: <strong>$30+</strong></div>
            </div>
            <p className="pricing-note" style={{ marginTop: 'var(--space-sm)' }}>
              * All prices are subject to applicable HST. Bookkeeping services billed separately.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
