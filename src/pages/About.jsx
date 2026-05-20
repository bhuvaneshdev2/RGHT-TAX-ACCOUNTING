import React from 'react';

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>About RGHT Tax & Accounting</h1>
          <p>Clarity. Compliance. Confidence. Growth. We believe your finances should work for you — not stress you out. Our mission is to protect your assets, secure your filings, and foster long-term wealth.</p>
        </div>
      </section>

      <section className="py-lg">
        <div className="container two-col-layout">
          <div>
            <div className="content-block">
              <h2>Our Mission & Core Philosophy</h2>
              <p>At RGHT Tax & Accounting, our role is simple: bring complete clarity to your numbers, keep you fully compliant with Canada Revenue Agency (CRA) guidelines, and help you build long-term financial growth. We support individuals, families, and businesses across Canada with practical, reliable, and results-driven financial solutions.</p>
              <p>Whether you visit our office in Brampton, Ontario, or work with us virtually from anywhere in Canada, you get dedicated, comprehensive financial representation.</p>
            </div>

            <div className="content-block">
              <h2>What Makes Us Different</h2>
              <p>We do not just handle standard annual paperwork — we coordinate your entire financial foundation under one roof:</p>
              <ul className="checklist">
                <li><strong>Simplify Complexity:</strong> We break down complicated tax laws and calculations into easy-to-understand choices.</li>
                <li><strong>All-In-One Services:</strong> We integrate tax preparation, day-to-day bookkeeping, corporate payroll, insurance protection, and investment coordination.</li>
                <li><strong>Long-Term Value:</strong> We focus on future tax minimization and strategic growth, rather than just filing historical returns.</li>
                <li><strong>Year-Round Support:</strong> We are available 12 months a year to handle CRA letters, address changes, or new business registrations.</li>
              </ul>
            </div>

            <div className="content-block">
              <h2>Our Strategic Approach</h2>
              <p>Every family and business has distinct goals — so we build solutions around you. We take the time to:</p>
              <ol className="process-list">
                <li><strong>Understand:</strong> Deeply review your personal income profile, corporate operations, and risk exposures.</li>
                <li><strong>Identify:</strong> Pinpoint tax-saving deductions, structure options, and wealth growth paths.</li>
                <li><strong>Implement:</strong> Execute filings, setups, and portfolios accurately with the CRA and financial institutions.</li>
                <li><strong>Review:</strong> Schedule periodic checkpoints to adjust strategies as tax codes or business activities change.</li>
              </ol>
            </div>

            <div className="content-block">
              <h2>Who We Proudly Support</h2>
              <div className="form-grid">
                <div className="sidebar-card" style={{ backgroundColor: 'var(--color-white)', marginBottom: 0 }}>
                  <h4>Individuals & Families</h4>
                  <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>Navigating careers, university transfers, retirement transitions, newcomer setups, and estate planning.</p>
                </div>
                <div className="sidebar-card" style={{ backgroundColor: 'var(--color-white)', marginBottom: 0 }}>
                  <h4>Businesses & Corporations</h4>
                  <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>Active sole proprietors, corporate shareholders, holding companies, and contractors across Ontario.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="sidebar">
            <div className="sidebar-card">
              <h3>Core Standards</h3>
              <ul className="pricing-features">
                <li>CRA compliance accuracy</li>
                <li>Strict records retention</li>
                <li>Encrypted cloud portals</li>
                <li>Responsive support loops</li>
              </ul>
            </div>
            <div className="sidebar-card" style={{ backgroundColor: 'var(--color-bg-card)' }}>
              <h3>Our Address</h3>
              <p>📍 Brampton, Ontario<br />📡 Serving Clients Coast-to-Coast</p>
              <a href="#/contact" className="btn btn-primary" style={{ width: '100%', marginTop: 'var(--space-sm)' }}>Contact Our Team</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="pricing-section">
        <div className="container">
          <div className="section-title">
            <h2>Our All-In-One Services Suite</h2>
            <p>Learn how we add value at every stage of your personal or business financial journey.</p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 'var(--space-md)', marginBottom: 'var(--space-lg)' }}>
            <div className="sidebar-card" style={{ backgroundColor: 'var(--color-white)', marginBottom: 0 }}>
              <h4>1. Corporate Setup & Filing</h4>
              <p style={{ fontSize: '0.9rem' }}>Ontario/Federal registrations, Business Numbers, T2 returns, corporate tax adjustments, and structural restructuring updates.</p>
              <a href="#/business-setup" style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-accent-gold)', textDecoration: 'none' }}>Learn More →</a>
            </div>
            <div className="sidebar-card" style={{ backgroundColor: 'var(--color-white)', marginBottom: 0 }}>
              <h4>2. Personal & Gig Taxes</h4>
              <p style={{ fontSize: '0.9rem' }}>Specialized T1 filings for students, seniors, newcomers, rental owners, and Uber/Lyft ride-share and delivery drivers.</p>
              <a href="#/personal-tax" style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-accent-gold)', textDecoration: 'none' }}>Learn More →</a>
            </div>
            <div className="sidebar-card" style={{ backgroundColor: 'var(--color-white)', marginBottom: 0 }}>
              <h4>3. Bookkeeping & Payroll</h4>
              <p style={{ fontSize: '0.9rem' }}>QuickBooks reconciliations, monthly ledger entries, HST tracking, payroll cycles (T4, CPP/EI, ROEs), and ledger cleanups.</p>
              <a href="#/bookkeeping" style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-accent-gold)', textDecoration: 'none' }}>Learn More →</a>
            </div>
            <div className="sidebar-card" style={{ backgroundColor: 'var(--color-white)', marginBottom: 0 }}>
              <h4>4. Insurance & Investment Planning</h4>
              <p style={{ fontSize: '0.9rem' }}>Income protection (disability, life), tax-sheltered wealth (RRSP, TFSA, RESP), and corporate retained earnings strategies.</p>
              <a href="#/insurance-investment" style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-accent-gold)', textDecoration: 'none' }}>Learn More →</a>
            </div>
          </div>

          <div className="text-center">
            <h2>Let's Build Your Financial Future Together</h2>
            <p style={{ maxWidth: '600px', margin: '0.5rem auto var(--space-md) auto' }}>Experience a unified approach to bookkeeping, tax, and insurance with RGHT Tax & Accounting.</p>
            <a href="#/contact" className="btn btn-primary">Book a Free Consultation</a>
          </div>
        </div>
      </section>
    </>
  );
}
