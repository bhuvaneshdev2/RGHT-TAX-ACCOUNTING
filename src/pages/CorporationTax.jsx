import React from 'react';

export default function CorporationTax() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Corporation Tax Services</h1>
          <p>Maximize Your Business’s Financial Potential. At RGHT Tax & Accounting, we make the process easy, accurate, and tailored to your business goals.</p>
        </div>
      </section>

      <section className="py-lg">
        <div className="container two-col-layout">
          <div>
            <div className="content-block">
              <h2>Corporate Tax Solutions for Canadian Businesses</h2>
              <p>Filing corporate taxes in Canada isn’t just a legal obligation — it’s a chance to improve your company’s financial health. We handle all filing compliance, compile year-end reports, and design strategies to minimize corporate taxes legally.</p>
            </div>

            <div className="content-block">
              <h2>What’s Included in Our Corporate Services</h2>
              <ul className="styled-bullet-list">
                <li><strong>T2 Corporate Tax Return:</strong> Full preparation and electronic filing of corporate returns.</li>
                <li><strong>Annual Financial Statements:</strong> Compilation of Income Statement (P&L) and Balance Sheet.</li>
                <li><strong>Income & Expense Review:</strong> Ensure all eligible corporate deductions are accurately captured.</li>
                <li><strong>GST/HST Filing:</strong> Monthly, quarterly, or annual filings with Input Tax Credit (ITC) reconciliation.</li>
                <li><strong>Payroll Services:</strong> CRA deductions calculation, T4 slips, ROEs, WSIB filing.</li>
                <li><strong>Dividend & Shareholder Guidance:</strong> Proper treatment of dividends, shareholder loans, and repayments.</li>
                <li><strong>Tax Deductions & Credits:</strong> Claiming the Small Business Deduction (SBD), SR&ED, and other credits.</li>
                <li><strong>CRA Correspondence & Audit Support:</strong> Full representation during CRA reviews and audits.</li>
                <li><strong>Bookkeeping Review:</strong> Review of client books for filing accuracy.</li>
                <li><strong>Year-End Tax Review:</strong> Strategic tax forecasting for the next fiscal year.</li>
              </ul>
            </div>

            <div className="content-block">
              <h2>Key Corporate Deadlines</h2>
              <div className="responsive-table">
                <table>
                  <thead>
                    <tr>
                      <th>Obligation</th>
                      <th>Deadline Tracker</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>T2 Return Filing</strong></td>
                      <td>Must be filed within <strong>6 months</strong> after your fiscal year-end date.</td>
                    </tr>
                    <tr>
                      <td><strong>Tax Payment Due</strong></td>
                      <td>Payment must be made within <strong>2 or 3 months</strong> after fiscal year-end (depending on CCPC status).</td>
                    </tr>
                    <tr>
                      <td><strong>Installments</strong></td>
                      <td>Quarterly due dates (e.g., March 31, June 30, September 30, December 31) if required by CRA.</td>
                    </tr>
                    <tr>
                      <td><strong>GST/HST Filing</strong></td>
                      <td>Annual: return & payment within 3 months of year-end. Monthly/Quarterly: 1 month after period-end.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="content-block">
              <h2>Holding Companies Tax Return Services</h2>
              <p>Managing taxes for a holding company requires specialized passive income structures. We support investment and property holdings:</p>
              <ul className="styled-bullet-list">
                <li><strong>Passive Income Reporting:</strong> Accurate tax filing for interest, rental income, dividends, and capital gains.</li>
                <li><strong>RDTOH Planning:</strong> Utilize Refundable Dividend Tax on Hand mechanisms to recover passive tax.</li>
                <li><strong>Intercorporate Dividends:</strong> Transfer funds between operating companies and holding companies tax-free.</li>
                <li><strong>Asset Protection:</strong> Structure holdings to shield investment capital from active operating liabilities.</li>
              </ul>
            </div>

            <div className="content-block">
              <h2>Corporate Tax Planning & Strategies</h2>
              <p>We work with you to plan and structure your transactions to minimize tax liability:</p>
              <div className="service-feature-grid">
                <div className="service-feature-card">
                  <h4>Salary vs. Dividends</h4>
                  <p>Determine the optimal split to balance personal tax rates, corporate deductions, and RRSP room.</p>
                </div>
                <div className="service-feature-card">
                  <h4>Insurance-Backed Tax Planning</h4>
                  <p>Use corporate-owned life insurance policies to accumulate tax-sheltered wealth and pay out tax-free capital dividends (CDA).</p>
                </div>
                <div className="service-feature-card">
                  <h4>Family Income Splitting</h4>
                  <p>Tax-compliant options for paying salaries or dividends to family members involved in the business.</p>
                </div>
                <div className="service-feature-card">
                  <h4>Business Succession & Exits</h4>
                  <p>Capital gains exemption optimization, estate freezes, and buy-sell agreement structuring.</p>
                </div>
              </div>
            </div>

            <div className="content-block">
              <h2>Industries We Serve</h2>
              <div className="badge-container">
                <span className="badge-item">Transportation & Trucking</span>
                <span className="badge-item">Construction & Skilled Trades</span>
                <span className="badge-item">Retail & E-commerce</span>
                <span className="badge-item">Restaurants & Hospitality</span>
                <span className="badge-item">IT & Tech Startups</span>
                <span className="badge-item">Healthcare & Wellness PC</span>
                <span className="badge-item">Real Estate & Rental Corps</span>
                <span className="badge-item">Holding & Investment Corps</span>
              </div>
            </div>
          </div>

          <div className="sidebar">
            <div className="sidebar-card">
              <h3>Additional Setup</h3>
              <ul className="pricing-features">
                <li>WSIB Setup</li>
                <li>T5 / T5018 Filing</li>
                <li>Holding Company Setup</li>
                <li>Business Number Updates</li>
                <li>CRA My Business Account</li>
              </ul>
              <a href="#/contact" className="btn btn-primary" style={{ width: '100%', marginTop: 'var(--space-sm)' }}>Book Consultation</a>
            </div>
            <div className="sidebar-card" style={{ backgroundColor: 'var(--color-bg-card)' }}>
              <h3>How It Works</h3>
              <ol className="process-list" style={{ paddingLeft: '1.1rem', margin: 'var(--space-sm) 0', gap: '0.5rem' }}>
                <li style={{ fontSize: '0.9rem' }}>Free consultation</li>
                <li style={{ fontSize: '0.9rem' }}>Secure document collection</li>
                <li style={{ fontSize: '0.9rem' }}>Custom tax strategy review</li>
                <li style={{ fontSize: '0.9rem' }}>Accurate filing & CRA setup</li>
                <li style={{ fontSize: '0.9rem' }}>Ongoing year-round support</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="pricing-section">
        <div className="container">
          <div className="section-title">
            <h2>Corporate Tax Packages</h2>
            <p>Choose the package that aligns with your annual revenue. Bookkeeping charges are calculated separately.</p>
          </div>
          
          <div className="pricing-grid">
            
            {/* Silver Package */}
            <div className="pricing-card">
              <h3>Silver Package</h3>
              <p>Ideal for new or low-activity corporations needing basic compliance.</p>
              <div className="price-bracket">$199 - $699<span>/year</span></div>
              <ul className="pricing-features">
                <li>T2 Corporate Tax Return</li>
                <li>Financial Statements (P&L, Balance Sheet)</li>
                <li>Revenue & Expense Review</li>
                <li>CRA Filing Compliance Checks</li>
                <li>Small Business Tax Credit Claims</li>
                <li>GST/HST Filing included</li>
                <li>Basic Payroll (T4, CPP/EI, ROE, WSIB)</li>
                <li className="pricing-header-item">Pricing Structure:</li>
                <li className="pricing-sub-item"><span>Nil Return:</span> <strong>$199</strong></li>
                <li className="pricing-sub-item"><span>Revenue to $25k:</span> <strong>$399</strong></li>
                <li className="pricing-sub-item"><span>Revenue to $50k:</span> <strong>$499</strong></li>
                <li className="pricing-sub-item"><span>Revenue to $75k:</span> <strong>$599</strong></li>
                <li className="pricing-sub-item"><span>Revenue to $100k:</span> <strong>$699</strong></li>
              </ul>
              <a href="#/intake-form" className="btn btn-secondary">Select Silver</a>
            </div>

            {/* Gold Package */}
            <div className="pricing-card featured">
              <div className="pricing-badge">Recommended</div>
              <h3>Gold Package</h3>
              <p>Designed for active, growing businesses requiring intermediate tax planning.</p>
              <div className="price-bracket">$899 - $1299<span>/year</span></div>
              <ul className="pricing-features">
                <li className="pricing-header-item">Everything in Silver PLUS:</li>
                <li>Dividend & Shareholder Tax planning</li>
                <li>Income Splitting for family members</li>
                <li>Intermediate Tax Credits & Deductions</li>
                <li>CRA Correspondence & Audit Support</li>
                <li>Annual Tax Planning Review</li>
                <li className="pricing-header-item">Pricing Structure:</li>
                <li className="pricing-sub-item"><span>Revenue to $200k:</span> <strong>$899</strong></li>
                <li className="pricing-sub-item"><span>Revenue to $300k:</span> <strong>$999</strong></li>
                <li className="pricing-sub-item"><span>Revenue to $400k:</span> <strong>$1199</strong></li>
                <li className="pricing-sub-item"><span>Revenue to $500k:</span> <strong>$1299</strong></li>
              </ul>
              <a href="#/intake-form" className="btn btn-primary">Select Gold</a>
            </div>

            {/* Platinum Package */}
            <div className="pricing-card">
              <h3>Platinum Package</h3>
              <p>Comprehensive compliance and advisory for established operations.</p>
              <div className="price-bracket">Custom Quote</div>
              <ul className="pricing-features">
                <li className="pricing-header-item">Everything in Gold PLUS:</li>
                <li>Full CRA Audit Representation</li>
                <li>Holding Company & Multi-Corp coordination</li>
                <li>CDA planning & Shareholder Loan tracking</li>
                <li>Advanced CCA depreciation optimization</li>
                <li>Investment, Estate, & Succession planning</li>
                <li>Assistance with CRA Installments</li>
                <li>For Revenues Over $500,000/year</li>
              </ul>
              <a href="#/intake-form" className="btn btn-secondary">Get Custom Quote</a>
            </div>

          </div>

          {/* Bookkeeping Charges Box */}
          <div className="my-md sidebar-card" style={{ backgroundColor: 'var(--color-bg)', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
            <h3 className="text-center" style={{ marginBottom: 'var(--space-xs)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-accent-gold)' }}><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>
              Bookkeeping & Record Handling Charges
            </h3>
            <p class="text-center" style={{ fontSize: '0.9rem', marginBottom: 'var(--space-md)' }}>Bookkeeping is not included in the tax filing packages and is billed based on transaction volume:</p>
            <div className="bookkeeping-split">
              <div className="bookkeeping-split-item">
                <h4>Organized Records</h4>
                <p style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-accent-green)' }}>$1.00 <span style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--color-text-muted)' }}>/ transaction</span></p>
                <p style={{ fontSize: '0.85rem' }}>Prepared accounts, clean bank files.</p>
              </div>
              <div className="bookkeeping-split-item">
                <h4>Review / Cleanup Needed</h4>
                <p style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-accent-gold)' }}>$1.50 - $2.00 <span style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--color-text-muted)' }}>/ transaction</span></p>
                <p style={{ fontSize: '0.85rem' }}>Receipt organization, error corrections, reconciliations.</p>
              </div>
            </div>
          </div>

          <p className="pricing-note">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-accent-gold)', display: 'inline-block', verticalAlign: 'middle', marginRight: '4px' }}><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
            <strong>Compliance Standard:</strong> All corporate services align strictly with the Canada Revenue Agency guidelines.<br />
            * All prices are subject to applicable HST. Government filing fees are extra. Final quote provided after consultation.
          </p>
        </div>
      </section>
    </>
  );
}
