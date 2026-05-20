import React from 'react';

export default function ApplicationServices() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Application Assistance Services</h1>
          <p>Fast, Accurate & Stress-Free Support. We help you compile records and complete critical government and financial applications correctly to avoid delays.</p>
        </div>
      </section>

      <section className="py-lg">
        <div className="container two-col-layout">
          <div>
            <div className="content-block">
              <h2>Professional Filing Support For Critical Forms</h2>
              <p>Completing government programs, financial assistance applications, or legal documents can be confusing. Minor omissions or spelling errors often lead to months of administrative delays. At RGHT Tax & Accounting, we review your supporting documents and guide you through form submissions to ensure accuracy.</p>
            </div>

            <div className="content-block">
              <h2>Forms & Programs We Assist With</h2>
              
              <div className="service-feature-grid">
                <div className="service-feature-card">
                  <h4>Employment Insurance (EI)</h4>
                  <p>Complete setup and filing support for Regular Benefits, Sickness Benefits, Maternity/Parental Leaves, and Caregiving benefits.</p>
                </div>
                <div className="service-feature-card">
                  <h4>CPP & OAS Retirement Pensions</h4>
                  <p>Form preparation for Canada Pension Plan (Retirement, Disability, Survivor) and Old Age Security (OAS, GIS, Allowance).</p>
                </div>
                <div className="service-feature-card">
                  <h4>Child & Family Benefit Programs</h4>
                  <p>Benefit setup for Canada Child Benefit (CCB), Child Disability Benefits, and Ontario Child Care Subsidy.</p>
                </div>
                <div className="service-feature-card">
                  <h4>Immigration & PR Applications</h4>
                  <p>Guidance for Permanent Resident (PR) Card Renewal, Canadian Citizenship applications, Family Sponsorships, Work/Study Permits, and Visitor Visas.</p>
                </div>
                <div className="service-feature-card">
                  <h4>Student Aid (OSAP)</h4>
                  <p>Detailed preparation for OSAP (Ontario Student Assistance Program), Canada Student Loans, and related bursaries/grants.</p>
                </div>
                <div className="service-feature-card">
                  <h4>Seniors & Disability Benefits</h4>
                  <p>Setup of Disability programs, Home accessibility credits, Ontario Disability Support Program (ODSP), and senior-specific support.</p>
                </div>
                <div className="service-feature-card">
                  <h4>Social Assistance & Legal Forms</h4>
                  <p>Form completion for Ontario Works (OW), OHIP, power of attorney, basic wills, and probate filings.</p>
                </div>
              </div>
            </div>

            <div className="content-block">
              <h2>Why Choose Our Assistance?</h2>
              <ul className="styled-bullet-list">
                <li>Avoid administrative errors and processing delays</li>
                <li>Clear checklists of required supporting documents</li>
                <li>Professional review before submitting to agencies</li>
                <li>Accessible in-person support or virtual secure upload</li>
              </ul>
            </div>
          </div>

          <div className="sidebar">
            <div className="sidebar-card">
              <h3>Service Locations</h3>
              <p style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', marginBottom: '0.5rem' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-accent-gold)', flexShrink: 0, marginTop: '3px' }}><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" /><circle cx="12" cy="10" r="3" /></svg>
                <span><strong>In-Person (By Appointment):</strong><br />Brampton, ON | Scarborough, ON</span>
              </p>
              <p style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', marginBottom: '0.5rem' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-accent-gold)', flexShrink: 0, marginTop: '3px' }}><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                <span><strong>Virtual Services:</strong> Available Canada-wide</span>
              </p>
              <a href="#/contact" className="btn btn-primary" style={{ width: '100%', marginTop: 'var(--space-sm)' }}>Book Appointment</a>
            </div>
            <div className="sidebar-card" style={{ backgroundColor: 'var(--color-bg-card)' }}>
              <h3>Required Documents</h3>
              <p style={{ fontSize: '0.9rem' }}>Document requirements vary. Typically, we will require your SIN, proof of address, tax assessments, and relevant government correspondence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="pricing-section">
        <div className="container">
          <div className="section-title">
            <h2>Application Filing Packages</h2>
            <p>Simple and transparent pricing packages based on the complexity and document requirements of your application.</p>
          </div>
          
          <div className="pricing-grid">
            
            {/* Package 1 */}
            <div className="pricing-card">
              <h3>Basic Application</h3>
              <p>Ideal for simple single-form submissions requiring minimal documentation.</p>
              <div className="price-bracket">$50</div>
              <ul className="pricing-features">
                <li>Simple applications</li>
                <li>Form completion guidance</li>
                <li>Basic document check</li>
                <li>Review before submission</li>
              </ul>
              <a href="#/contact" className="btn btn-secondary">Get Support</a>
            </div>

            {/* Package 2 */}
            <div className="pricing-card featured">
              <div className="pricing-badge">Popular</div>
              <h3>Standard Application</h3>
              <p>For standard government benefits requiring complete schedules and records.</p>
              <div className="price-bracket">$100</div>
              <ul className="pricing-features">
                <li>Complete application preparation</li>
                <li>Supporting document checklist</li>
                <li>Error-free submission checking</li>
                <li>Basic follow-up guidance</li>
              </ul>
              <a href="#/contact" className="btn btn-primary">Get Support</a>
            </div>

            {/* Package 3 */}
            <div className="pricing-card">
              <h3>Advanced Application</h3>
              <p>For complex files with multi-page records and verification requirements.</p>
              <div className="price-bracket">$150 - $250</div>
              <ul className="pricing-features">
                <li>Complex multi-document applications</li>
                <li>Full audit and review checklist</li>
                <li>Step-by-step submission support</li>
                <li>Agency follow-up assistance</li>
              </ul>
              <a href="#/contact" className="btn btn-secondary">Get Support</a>
            </div>

            {/* Package 4 */}
            <div className="pricing-card">
              <h3>Premium / Appeal</h3>
              <p>For multi-stage cases, corrections, or government appeals.</p>
              <div className="price-bracket">$300+</div>
              <ul className="pricing-features">
                <li>Multiple program coordination</li>
                <li>Correction and resubmission cases</li>
                <li>Government agency follow-ups</li>
                <li>Complete case management support</li>
              </ul>
              <a href="#/contact" className="btn btn-secondary">Get Quote</a>
            </div>

          </div>

          <p className="pricing-note">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-accent-gold)', display: 'inline-block', verticalAlign: 'middle', marginRight: '4px' }}><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" /></svg>
            <strong>Optional Add-ons:</strong> Document Organization ($25+) | Status Check & Follow-up ($25+) | Same-Day Priority ($50+) | Form corrections or resubmissions ($50+) | Translation support ($25+)<br />
            * All prices are subject to applicable HST. Government filing or application fees are billed separately.
          </p>
        </div>
      </section>
    </>
  );
}
