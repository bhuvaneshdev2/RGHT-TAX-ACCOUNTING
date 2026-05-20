import React from 'react';

export default function WhyChooseUs() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Why Choose RGHT Tax & Accounting?</h1>
          <p>Your Trusted Partner for Tax, Accounting & Business Growth. We help you stay compliant, reduce taxes, and build a solid financial foundation with reliable, year-round support.</p>
        </div>
      </section>

      <section className="py-lg">
        <div className="container">
          <div className="section-title">
            <h2>What Sets Us Apart</h2>
            <p>We combine deep accounting expertise with a dedication to proactive wealth management and customer service.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', gap: 'var(--space-md)', marginBottom: 'var(--space-xl)' }}>
            <div className="who-card">
              <div>
                <div className="who-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /><rect x="2" y="7" width="20" height="14" rx="2" ry="2" /></svg>
                </div>
                <h3 style={{ color: 'var(--color-accent-green)' }}>Experienced Professionals</h3>
                <p>We possess strong hands-on experience in tax, bookkeeping, corporate payroll, and Canadian compliance requirements.</p>
              </div>
            </div>

            <div className="who-card">
              <div>
                <div className="who-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><line x1="9" y1="22" x2="9" y2="16" /><line x1="15" y1="22" x2="15" y2="16" /><line x1="9" y1="16" x2="15" y2="16" /></svg>
                </div>
                <h3 style={{ color: 'var(--color-accent-green)' }}>All-in-One Service Suite</h3>
                <p>No need to hire separate accountants, bookkeepers, and brokers. We manage your tax, books, payroll, insurance, and investments under one unified strategy.</p>
              </div>
            </div>

            <div className="who-card">
              <div>
                <div className="who-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
                </div>
                <h3 style={{ color: 'var(--color-accent-green)' }}>Customized Solutions</h3>
                <p>We develop custom templates, checklists, and plan structures around your specific family budget or corporate operations.</p>
              </div>
            </div>

            <div className="who-card">
              <div>
                <div className="who-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
                </div>
                <h3 style={{ color: 'var(--color-accent-green)' }}>Transparent Pricing</h3>
                <p>No surprises or hidden fees. We provide flat rates based on clear criteria (such as revenue ranges or transaction counts).</p>
              </div>
            </div>

            <div className="who-card">
              <div>
                <div className="who-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                </div>
                <h3 style={{ color: 'var(--color-accent-green)' }}>Modern & Secure Portals</h3>
                <p>Submit receipts and download tax slips safely from anywhere in Canada using our secure, encrypted digital portals.</p>
              </div>
            </div>

            <div className="who-card">
              <div>
                <div className="who-card-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <h3 style={{ color: 'var(--color-accent-green)' }}>Timely & Accurate Filing</h3>
                <p>We strictly adhere to all CRA corporate and personal deadlines, keeping you free from interest, penalties, and audit triggers.</p>
              </div>
            </div>
          </div>

          <div className="my-md text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2>Let RGHT Be Your Financial Partner</h2>
            <p style={{ fontSize: '1.15rem', marginBottom: 'var(--space-md)' }}>From initial registration through daily bookkeeping, tax filings, and estate planning, we are with you every step of the way.</p>
            <div className="btn-group" style={{ justifyContent: 'center' }}>
              <a href="#/contact" className="btn btn-primary">Book Consultation</a>
              <a href="#/intake-form" className="btn btn-secondary">Access Online Form</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
