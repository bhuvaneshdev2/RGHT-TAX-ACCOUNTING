import React from 'react';

export default function InsuranceInvestment() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Insurance, Investment & Tax Planning Services</h1>
          <p>Reduce Taxes. Build Wealth. Protect Your Future. We coordinate tax planning with insurance and investment strategies to build a secure financial path.</p>
        </div>
      </section>

      <section className="py-lg">
        <div className="container two-col-layout">
          <div>
            <div className="content-block">
              <h2>Professional Insurance Solutions</h2>
              <p>At RGHT Tax & Accounting, insurance is more than simple protection — it is a critical component of your overall tax minimization and wealth transfer strategy. We help individuals, families, and business owners choose the correct coverage without pressure or confusion.</p>
              
              <h3>Solutions We Offer:</h3>
              <div className="service-feature-grid">
                <div className="service-feature-card">
                  <h4>Life Insurance</h4>
                  <p>Protect your family's future and support estate tax strategies. Includes Term Life, Whole Life, Universal Life, Joint & Family plans, and Corporate-Owned Policies.</p>
                </div>
                <div className="service-feature-card">
                  <h4>Disability Insurance</h4>
                  <p>Secure a replacement monthly income to cover living expenses if you are injured or unable to work (critical for self-employed professionals).</p>
                </div>
                <div className="service-feature-card">
                  <h4>Critical Illness Insurance</h4>
                  <p>Receive a lump-sum payment upon diagnosis of a major illness to cover paramedical recovery, mortgages, and lifestyle costs.</p>
                </div>
                <div className="service-feature-card">
                  <h4>Health & Dental Plans (PHSP)</h4>
                  <p>Private Health Services Plans that allow business owners to deduct medical and dental expenses fully as a business expense.</p>
                </div>
                <div className="service-feature-card">
                  <h4>Business & Corporate Insurance</h4>
                  <p>Specialized corporate structures including Key Person Insurance, Shareholder Protection agreements, and Buy-Sell Funding.</p>
                </div>
              </div>
            </div>

            <div className="content-block">
              <h2>Investment Services & Registered Plans</h2>
              <p>Investing is about compounding capital, discipline, and absolute tax efficiency. We support and help structure the following registered and non-registered vehicles:</p>
              <div className="service-feature-grid">
                <div className="service-feature-card">
                  <h4>RRSP (Registered Retirement Savings Plan)</h4>
                  <p>Reduce your current year taxable income through contributions while enjoying tax-deferred investment growth.</p>
                </div>
                <div className="service-feature-card">
                  <h4>TFSA (Tax-Free Savings Account)</h4>
                  <p>Build compound growth where all capital gains, dividends, and future withdrawals are 100% tax-free.</p>
                </div>
                <div className="service-feature-card">
                  <h4>RESP (Registered Education Savings Plan)</h4>
                  <p>Save for children's post-secondary education while receiving matching government grants (CESG).</p>
                </div>
                <div className="service-feature-card">
                  <h4>Non-Registered Investments</h4>
                  <p>Strategic portfolio planning focusing on tax-efficient dividends, capital gains exemptions, and interest deferrals.</p>
                </div>
                <div className="service-feature-card">
                  <h4>Corporate Retained Earnings</h4>
                  <p>Move excess corporate cash from your operating company into a holding company to invest in passive portfolios or real estate tax-deferred.</p>
                </div>
              </div>
            </div>

            <div className="content-block">
              <h2>Tax Planning Integration (For Individuals & Corporations)</h2>
              <p>The strongest financial plans combine tax filing, insurance, and investments under one unified structure. We coordinate all three areas for you:</p>
              <div className="form-grid" style={{ marginTop: 'var(--space-sm)' }}>
                <div className="sidebar-card" style={{ backgroundColor: 'var(--color-white)', marginBottom: 0 }}>
                  <h4>Insurance Tax Planning</h4>
                  <p style={{ fontSize: '0.9rem' }}>Structure tax-free death benefits, fund shareholder agreements, plan business successions, and establish deductible health plans.</p>
                </div>
                <div className="sidebar-card" style={{ backgroundColor: 'var(--color-white)', marginBottom: 0 }}>
                  <h4>Investment Tax Planning</h4>
                  <p style={{ fontSize: '0.9rem' }}>Optimize RRSP vs TFSA limits, plan retirement withdrawal order to minimize clawbacks, and structure capital gains deferrals.</p>
                </div>
              </div>
            </div>

            <div className="content-block">
              <h2>For Business Owners & Shareholders</h2>
              <p>We work with Ontario business owners to integrate corporate reserves with family wealth:</p>
              <div className="badge-container">
                <span className="badge-item">Salary vs Dividend Strategy</span>
                <span className="badge-item">Corporate Life Insurance Setup</span>
                <span className="badge-item">Retained Earnings Investing</span>
                <span className="badge-item">Holding Company Passive Income</span>
                <span className="badge-item">Capital Dividend Account (CDA)</span>
                <span className="badge-item">Estate Freezes & Reorganizations</span>
              </div>
            </div>

            <div className="content-block">
              <h2>Our Planning Process</h2>
              <div className="process-timeline">
                {[
                  { step: 1, title: 'Tax Review', desc: 'Detailed audit of historical personal & corporate filings.' },
                  { step: 2, title: 'Risk Audit', desc: 'Identify gaps in insurance, liability, & asset protection.' },
                  { step: 3, title: 'Strategy', desc: 'Draft custom tax-shelter and growth blueprints.' },
                  { step: 4, title: 'Execution', desc: 'Deploy structures, open accounts, and issue policies.' },
                  { step: 5, title: 'Reviews', desc: 'Annual checkpoints to adapt to new CRA tax guidelines.' }
                ].map((item) => (
                  <div key={item.step} className="timeline-step-card">
                    <div className="timeline-number-circle">
                      {item.step}
                    </div>
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
              <h3>Integrated Support</h3>
              <p>Avoid the conflict of having a separate accountant, broker, and advisor. We coordinate all advice under one roof.</p>
              <a href="#/contact" className="btn btn-primary" style={{ width: '100%' }}>Schedule Planning Consultation</a>
            </div>
            <div className="sidebar-card" style={{ backgroundColor: 'var(--color-bg-card)' }}>
              <h3>Who We Support</h3>
              <ul className="pricing-features">
                <li>Individuals and families</li>
                <li>Self-employed professionals</li>
                <li>Corporate shareholders</li>
                <li>Newcomers and new investors</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-lg text-center" style={{ borderTop: '1px solid var(--color-border)', backgroundColor: 'var(--color-bg-card)' }}>
        <div className="container">
          <h2>Ready to Build a Secure Financial Plan?</h2>
          <p style={{ fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto var(--space-md) auto' }}>Coordinate your taxes, investments, and insurance policies for maximum efficiency and growth.</p>
          <div className="btn-group" style={{ justifyContent: 'center' }}>
            <a href="#/contact" className="btn btn-primary">Book Consultation</a>
            <a href="#/intake-form" className="btn btn-secondary">Get Savings Assessment</a>
          </div>
        </div>
      </section>
    </>
  );
}
