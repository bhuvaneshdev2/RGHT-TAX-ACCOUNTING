import React from 'react';

export default function PersonalTax() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Personal Tax Services</h1>
          <p>Accurate, Strategic & CRA-Compliant Income Tax Filing. We identify every eligible deduction, credit, and benefit to optimize your personal tax profile.</p>
        </div>
      </section>

      <section className="py-lg">
        <div className="container two-col-layout">
          <div>
            <div className="content-block">
              <h2>Professional Personal Tax Solutions</h2>
              <p>Filing your personal income tax correctly is essential to ensure you receive all eligible credits and benefits while staying fully compliant with Canada Revenue Agency (CRA) regulations. At RGHT Tax & Accounting, we provide professional services tailored to your life situation:</p>
              
              <div className="service-feature-grid">
                <div className="service-feature-card">
                  <h4>Individual Tax Return</h4>
                  <p>For employees, contractors, and individuals with T4 employment income, basic investments, and standard deductions.</p>
                </div>
                <div className="service-feature-card">
                  <h4>Family Tax Return</h4>
                  <p>Optimized tax filing for couples and families, including spousal planning, Canada Child Benefit (CCB) optimization, tuition transfers, and dependant claims.</p>
                </div>
                <div className="service-feature-card">
                  <h4>Student Tax Return</h4>
                  <p>Cost-effective filings covering T2202 tuition reporting, tuition transfer options, scholarships, part-time wages, and tuition carryforward.</p>
                </div>
                <div className="service-feature-card">
                  <h4>Seniors Tax Return</h4>
                  <p>Specialized filings for retirees, including CPP & OAS reporting, pension income splitting, medical expense claims, and disability credits.</p>
                </div>
                <div className="service-feature-card">
                  <h4>Newcomer Tax Services</h4>
                  <p>Welcoming support for new immigrants, including first-time Canadian tax filing, worldwide income reporting, and initial benefit setups.</p>
                </div>
                <div className="service-feature-card">
                  <h4>Self-Employed & Gig Worker Tax</h4>
                  <p>Comprehensive business activity returns (T2125) for freelancers, contractors, and ride-share or delivery drivers (Uber, Lyft, DoorDash).</p>
                </div>
                <div className="service-feature-card">
                  <h4>Rental Property Tax Returns</h4>
                  <p>For landlords and real estate investors. Covers T776 rental income reporting, mortgage interest, property taxes, and capital cost allowance (CCA).</p>
                </div>
              </div>
            </div>

            <div className="content-block">
              <h2>Our Simple Tax Filing Process</h2>
              <p>Filing with us is convenient and transparent. Choose in-person support at our Brampton office or virtual filing from anywhere in Canada:</p>
              <ol className="process-list">
                <li><strong>Consultation:</strong> We review your income profile and determine eligible deductions.</li>
                <li><strong>Document Collection:</strong> Securely submit documents via our online portal or drop them off in-person.</li>
                <li><strong>Tax Preparation:</strong> Our expert preparers calculate taxes and apply optimization checks.</li>
                <li><strong>Review & Approval:</strong> We review the draft return with you before submission.</li>
                <li><strong>E-Filing with CRA:</strong> Secure transmission directly to the CRA using certified EFILE.</li>
                <li><strong>Ongoing Support:</strong> We assist you year-round with CRA letters, questions, or adjustments.</li>
              </ol>
            </div>

            <div className="content-block">
              <h2>Documents You May Need</h2>
              <p>Prepare these slips and records to help us file your taxes accurately. Missing documents? We can help retrieve them from your CRA account:</p>
              <div className="badge-container">
                <span className="badge-item">T4 (Employment Income)</span>
                <span className="badge-item">T4A (Commissions / Other Income)</span>
                <span className="badge-item">T4A(OAS) (Old Age Security benefits)</span>
                <span className="badge-item">T4AP (CPP Pension benefits)</span>
                <span className="badge-item">T4RSP / T4RIF (Retirement withdrawals)</span>
                <span className="badge-item">T4E (Employment Insurance slips)</span>
                <span className="badge-item">T5 / T3 (Investment income slips)</span>
                <span className="badge-item">T2202 (Tuition receipt slip)</span>
                <span className="badge-item">RRSP / FHSA contribution slips</span>
                <span className="badge-item">Medical, childcare, or donation receipts</span>
                <span className="badge-item">Rent or property tax receipts</span>
                <span className="badge-item">Business / rental income logs</span>
                <span className="badge-item">Vehicle expense & mileage logs</span>
              </div>
            </div>

            <div className="content-block">
              <h2>Specialized & Administrative Tax Services</h2>
              <ul className="styled-bullet-list">
                <li><strong>Previous Years Tax Filing:</strong> Catch up on unfiled returns (up to 10 years) and manage voluntary disclosure to reduce penalties.</li>
                <li><strong>Final (Death) Tax Returns:</strong> Compassionate and accurate estate filing, including T1 final and Rights or Things returns.</li>
                <li><strong>Estate & Trust Returns (T3):</strong> Professional setup and annual filing for family trust holdings and estates.</li>
                <li><strong>Tax Adjustments (T1 Adjustment):</strong> Correction of errors or omissions in previously submitted tax returns.</li>
                <li><strong>CRA Audit & Objection Support:</strong> Expert representation and preparation of formal objections or document submissions.</li>
              </ul>
            </div>
          </div>

          <div className="sidebar">
            <div className="sidebar-card">
              <h3>CRA Account Support</h3>
              <p>We can securely retrieve missing T-slips and statements directly from your Canada Revenue Agency account.</p>
              <a href="#/intake-form" className="btn btn-primary" style={{ width: '100%' }}>File My Taxes Now</a>
            </div>
            <div className="sidebar-card" style={{ backgroundColor: 'var(--color-bg-card)' }}>
              <h3>Why Choose RGHT</h3>
              <ul className="pricing-features">
                <li>Maximum refund optimization</li>
                <li>CRA audit protection</li>
                <li>Secure E-Filing</li>
                <li>10-year catch-up expertise</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="pricing-section">
        <div className="container">
          <div className="section-title">
            <h2>Personal Tax Filing Packages</h2>
            <p>Simple. Transparent. Affordable Pricing. Select the service category that fits your profile.</p>
          </div>
          <div className="pricing-grid">
            
            {/* Package 1 */}
            <div className="pricing-card">
              <h3>Basic Starts</h3>
              <p>Designed for simple tax setups with minimal slips.</p>
              <div className="price-bracket">$35 - $45</div>
              <ul className="pricing-features">
                <li className="pricing-sub-item"><span>Seniors / Students:</span> <strong>$35</strong></li>
                <li className="pricing-sub-item"><span>Students (Tuition + T4):</span> <strong>$45</strong></li>
                <li className="pricing-sub-item"><span>Regular Return (Up to 3 T4s):</span> <strong>$45</strong></li>
                <li className="pricing-header-item" style={{ borderTop: 'none', paddingTop: 0, marginTop: 0 }}>Includes:</li>
                <li>Basic deductions & credits</li>
                <li>Secure CRA E-Filing</li>
              </ul>
              <a href="#/intake-form" className="btn btn-secondary">Get Started</a>
            </div>

            {/* Package 2 */}
            <div className="pricing-card featured">
              <div className="pricing-badge">Recommended</div>
              <h3>Standard Return</h3>
              <p>Ideal for individuals with multiple slips, medical claims, or child deductions.</p>
              <div className="price-bracket">$80 - $120</div>
              <ul className="pricing-features">
                <li>Multiple income sources & slips</li>
                <li>RRSP contributions & FHSA</li>
                <li>Medical, childcare, & donation claims</li>
                <li>CCB & benefit optimization</li>
                <li>CRA filing plus tax review</li>
              </ul>
              <a href="#/intake-form" className="btn btn-primary">Get Started</a>
            </div>

            {/* Package 3 */}
            <div className="pricing-card">
              <h3>Advanced Return</h3>
              <p>For individuals with self-employment, rental properties, or investments.</p>
              <div className="price-bracket">$120 - $180</div>
              <ul className="pricing-features">
                <li>Self-Employment income (T2125)</li>
                <li>Rental income reporting (T776)</li>
                <li>Investment income (T3, T5 slips)</li>
                <li>Expense claims & optimization</li>
                <li>Tax planning advice</li>
              </ul>
              <a href="#/intake-form" className="btn btn-secondary">Get Started</a>
            </div>

            {/* Package 4 */}
            <div className="pricing-card">
              <h3>Complex Return</h3>
              <p>For clients with multiple streams, foreign assets, or capital gains.</p>
              <div className="price-bracket">$180 - $300+</div>
              <ul className="pricing-features">
                <li>Multiple business & rental profiles</li>
                <li>Capital gains or investment losses</li>
                <li>Foreign income & assets reporting</li>
                <li>Detailed estate/trust integration</li>
                <li>Audit & review protection</li>
              </ul>
              <a href="#/intake-form" className="btn btn-secondary">Get Quote</a>
            </div>

          </div>

          {/* Specialized List */}
          <div className="my-md sidebar-card" style={{ backgroundColor: 'var(--color-bg)', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
            <h3 className="text-center" style={{ marginBottom: 'var(--space-md)' }}>Specialized Administrative Tax Services</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(250px, 100%), 1fr))', gap: 'var(--space-md)' }}>
              <div>
                <h4>Previous Years catch-up</h4>
                <p><strong>Starting from $80:</strong> File unfiled tax returns from previous years. Support with CRA disclosures and penalty reductions.</p>
              </div>
              <div>
                <h4>Adjustments & Disputes</h4>
                <p><strong>Starting from $50:</strong> T1 Adjustments for missed slips/claims. Notice of Objections and audits support starting at $100.</p>
              </div>
              <div>
                <h4>Estate & T3 Trusts</h4>
                <p><strong>Starting from $200:</strong> Final T1 tax return for deceased individuals. Estate/T3 Trust filings starting at $250.</p>
              </div>
            </div>
          </div>

          <p className="pricing-note">
            * All prices are subject to applicable HST. Additional forms or complex schedules may increase cost. Family discounts are available upon request.
          </p>
        </div>
      </section>
    </>
  );
}
