import React from 'react';

export default function BusinessTax() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Business Tax Services for Sole Proprietors</h1>
          <p>Smart, Simple & Stress-Free Tax Filing for Your Small Business. We simplify T2125 reporting, expense tracking, and CRA compliance.</p>
        </div>
      </section>

      <section className="py-lg">
        <div className="container two-col-layout">
          <div>
            <div className="content-block">
              <h2>Smart Tax Preparation for Self-Employed Businesses</h2>
              <p>Running a business as a sole proprietor in Canada means your business income and expenses are reported on your personal tax return (T1). While this structure is simple, managing your deductions, tracking receipts, and ensuring CRA compliance can quickly become overwhelming.</p>
              <p>At RGHT Tax & Accounting, we simplify the process — ensuring your taxes are accurate, optimized, and filed on time, while helping you maximize deductions and minimize taxes.</p>
            </div>

            <div className="content-block">
              <h2>Our Small Business Tax Services Include:</h2>
              <div className="service-feature-grid">
                <div className="service-feature-card">
                  <h4>Business Income Reporting</h4>
                  <p>Complete preparation of Form T2125 (Business Activities). We ensure accurate reporting of all business income streams and multiple revenue sources.</p>
                </div>
                <div className="service-feature-card">
                  <h4>Expense Deduction Optimization</h4>
                  <p>We identify every eligible business expense to reduce your net income: rent, utilities, office expenses, equipment, tools, software, vehicle, advertising, subcontractor fees, and home office deductions.</p>
                </div>
                <div className="service-feature-card">
                  <h4>GST/HST Filing Services</h4>
                  <p>We handle registration (required if revenue exceeds $30,000 in a year), calculations, returns filing, and Input Tax Credit (ITC) optimization to retrieve the taxes you paid.</p>
                </div>
                <div className="service-feature-card">
                  <h4>Personal Tax Integration (T1)</h4>
                  <p>We integrate your business income (T2125) with your personal tax return seamlessly to ensure overall tax minimization.</p>
                </div>
                <div className="service-feature-card">
                  <h4>Tax Planning & Strategy</h4>
                  <p>RRSP/TFSA planning, year-round deduction strategies, and guidance on when to incorporate.</p>
                </div>
                <div className="service-feature-card">
                  <h4>Bookkeeping & Record Support</h4>
                  <p>Receipt management advice and CRA-compliant recordkeeping support to keep you audit-ready.</p>
                </div>
                <div className="service-feature-card">
                  <h4>CRA Audit Assistance & Support</h4>
                  <p>If you receive a CRA audit letter, we handle the pre-audit review, document preparation, and direct communication with the auditor.</p>
                </div>
              </div>
            </div>

            <div className="content-block">
              <h2>Important Tax Deadlines</h2>
              <div className="responsive-table">
                <table>
                  <thead>
                    <tr>
                      <th>Deadline Date</th>
                      <th>Obligation / Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>April 30</strong></td>
                      <td>Tax payment due date (interest begins accruing on any taxes owed for the year).</td>
                    </tr>
                    <tr>
                      <td><strong>June 15</strong></td>
                      <td>Filing deadline for self-employed individuals and their spouses.</td>
                    </tr>
                    <tr>
                      <td><strong>Quarterly Installments</strong></td>
                      <td>If required by CRA (typically when net tax owing exceeds $3,000).</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="content-block">
              <h2>Tax Planning with Insurance & Investments</h2>
              <p>At RGHT Tax & Accounting, we go beyond tax filing — we help you build a long-term financial strategy to protect your wealth:</p>
              <div className="form-grid" style={{ marginTop: 'var(--space-sm)' }}>
                <div className="sidebar-card" style={{ backgroundColor: 'var(--color-white)', marginBottom: 0 }}>
                  <h4>Insurance Strategies</h4>
                  <p style={{ fontSize: '0.9rem' }}>Structure tax-deductible health & dental plans (PHSP), tax-efficient life policies for estate transfer, and disability insurance to protect your income.</p>
                </div>
                <div className="sidebar-card" style={{ backgroundColor: 'var(--color-white)', marginBottom: 0 }}>
                  <h4>Tax-Efficient Investments</h4>
                  <p style={{ fontSize: '0.9rem' }}>Leverage RRSP contributions for immediate deductions, tax-free growth in TFSA, and segregated funds for protection and investment growth.</p>
                </div>
              </div>
            </div>

            <div className="content-block">
              <h2>Industries We Serve</h2>
              <div className="badge-container">
                <span className="badge-item">Trades & Construction</span>
                <span className="badge-item">Freelancers & Consultants</span>
                <span className="badge-item">Health & Wellness Professionals</span>
                <span className="badge-item">IT Contractors & Developers</span>
                <span className="badge-item">Ride-Share & Delivery Drivers</span>
                <span className="badge-item">Retail & E-commerce Businesses</span>
              </div>
            </div>

            <div className="content-block">
              <h2>How It Works</h2>
              <div className="process-timeline four-steps">
                {[
                  { step: 1, title: 'Free Consultation', desc: 'Initial discussion of your sole proprietorship\'s financial structure and goals.' },
                  { step: 2, title: 'Strategy Review', desc: 'Pinpointing eligible expense write-offs, home office claims, and tax deductions.' },
                  { step: 3, title: 'Accurate Filing', desc: 'Completing Form T2125 and integrating it seamlessly into your personal return (T1).' },
                  { step: 4, title: 'Annual Review', desc: 'Continuous planning to minimize future taxes and advise on when to incorporate.' }
                ].map(item => (
                  <div key={item.step} className="timeline-step-card">
                    <div className="timeline-number-circle">{item.step}</div>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="sidebar">
            <div className="sidebar-card">
              <h3>Who This Is For</h3>
              <ul className="pricing-features">
                <li>Sole Proprietors</li>
                <li>Freelancers & Consultants</li>
                <li>Self-Employed Professionals</li>
                <li>Small Business Owners</li>
              </ul>
            </div>
            <div className="sidebar-card">
              <h3>HST & Audit Support</h3>
              <ul className="pricing-features">
                <li>HST Registration & setup</li>
                <li>Monthly/Quarterly/Annual filing</li>
                <li>Pre-audit consultations</li>
                <li>CRA Representation</li>
              </ul>
              <a href="#/intake-form" className="btn btn-primary" style={{ width: '100%', marginTop: 'var(--space-sm)' }}>Get Support Now</a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="pricing-section">
        <div className="container">
          <div className="section-title">
            <h2>Sole Proprietor Tax Packages</h2>
            <p>Transparent and affordable tax filing packages based on your annual business sales.</p>
          </div>
          <div className="pricing-grid">
            
            {/* Package 1 */}
            <div className="pricing-card">
              <h3>Starter Business</h3>
              <p>For micro-businesses or hobbies with low sales volume.</p>
              <div className="price-bracket">Starting $60</div>
              <ul className="pricing-features">
                <li>Annual Sales Under $10,000</li>
                <li>T2125 business income entry</li>
                <li>Limited expense claims</li>
                <li>Personal tax return (T1) included</li>
                <li>CRA E-Filing</li>
              </ul>
              <a href="#/intake-form" className="btn btn-secondary">Get Started</a>
            </div>

            {/* Package 2 */}
            <div className="pricing-card">
              <h3>Small Business</h3>
              <p>Ideal for self-employed individuals with steady small revenues.</p>
              <div className="price-bracket">Starting $80</div>
              <ul className="pricing-features">
                <li>Annual Sales: $10,000 - $30,000</li>
                <li>T2125 business reporting</li>
                <li>Basic expense tracking & claims</li>
                <li>Personal + business tax integration</li>
                <li>CRA E-Filing</li>
              </ul>
              <a href="#/intake-form" className="btn btn-secondary">Get Started</a>
            </div>

            {/* Package 3 */}
            <div className="pricing-card featured">
              <div className="pricing-badge">Popular</div>
              <h3>Growing Business</h3>
              <p>Perfect for freelancers or contractors with moderate transactions.</p>
              <div className="price-bracket">$120 - $180</div>
              <ul className="pricing-features">
                <li>Annual Sales: $30,000 - $75,000</li>
                <li>T2125 business reporting</li>
                <li>Deductions & expense optimization</li>
                <li>GST/HST overview & filing checks</li>
                <li>Personal + business integration</li>
              </ul>
              <a href="#/intake-form" className="btn btn-primary">Get Started</a>
            </div>

            {/* Package 4 */}
            <div className="pricing-card">
              <h3>Established Business</h3>
              <p>Comprehensive service for high-activity self-employed professionals.</p>
              <div className="price-bracket">$180 - $300</div>
              <ul className="pricing-features">
                <li>Annual Sales: $75,000 - $150,000</li>
                <li>High transaction volume entries</li>
                <li>Vehicle, travel, & home office logs</li>
                <li>Advanced deductions calculations</li>
                <li>GST/HST support & planning</li>
              </ul>
              <a href="#/intake-form" className="btn btn-secondary">Get Started</a>
            </div>

          </div>

          {/* Administrative Services Bundle */}
          <div className="my-md sidebar-card" style={{ backgroundColor: 'var(--color-bg)', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
            <h3 className="text-center" style={{ marginBottom: 'var(--space-md)' }}>Optional Add-ons & Dedicated Services</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px, 100%), 1fr))', gap: 'var(--space-md)' }}>
              <div>
                <h4>HST Filing Services</h4>
                <p>Keep your sales tax compliant:</p>
                <ul className="pricing-features" style={{ marginTop: '0.5rem' }}>
                  <li className="pricing-sub-item"><span>Annual Filing:</span> <strong>From $80</strong></li>
                  <li className="pricing-sub-item"><span>Quarterly Filing:</span> <strong>From $120</strong></li>
                  <li className="pricing-sub-item"><span>Monthly Filing:</span> <strong>From $150</strong></li>
                </ul>
              </div>
              <div>
                <h4>Audit & Representation</h4>
                <p>Expert support with CRA inquiries:</p>
                <ul className="pricing-features" style={{ marginTop: '0.5rem' }}>
                  <li className="pricing-sub-item"><span>CRA Representation:</span> <strong>From $100</strong></li>
                  <li>Pre-audit consulting & document organization</li>
                </ul>
              </div>
              <div>
                <h4>Tax Planning & Cleanup</h4>
                <p>Optimize your structure:</p>
                <ul className="pricing-features" style={{ marginTop: '0.5rem' }}>
                  <li className="pricing-sub-item"><span>Planning Session:</span> <strong>From $100</strong></li>
                  <li className="pricing-sub-item"><span>Bookkeeping Cleanup:</span> <strong>From $100</strong></li>
                </ul>
              </div>
            </div>
          </div>

          <p className="pricing-note">
            * All prices are subject to applicable HST. Bookkeeping services are billed separately. Bundle discounts are available when combining tax preparation with bookkeeping.
          </p>
        </div>
      </section>
    </>
  );
}
