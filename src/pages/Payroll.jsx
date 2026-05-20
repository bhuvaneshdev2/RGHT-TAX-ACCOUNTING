import React from 'react';

export default function Payroll() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Payroll Services</h1>
          <p>Accurate, Compliant & Stress-Free Payroll Solutions. We manage employee calculations, CRA remittances, and year-end T4 compliance so you can focus on growth.</p>
        </div>
      </section>

      <section className="py-lg">
        <div className="container two-col-layout">
          <div>
            <div className="content-block">
              <h2>Professional Payroll Support Across Canada</h2>
              <p>Managing payroll can be time-consuming and complex — but it doesn’t have to be. At RGHT Tax & Accounting, we provide reliable payroll services to ensure your employees and contractors are paid correctly and on time, while keeping your business fully compliant with Canada Revenue Agency (CRA) regulations.</p>
              <p>Whether you're a startup or an established business, we simplify payroll so you can avoid penalties, late remittances, and filing errors.</p>
            </div>

            <div className="content-block">
              <h2>Our Payroll Services Include</h2>
              <div className="service-feature-grid">
                <div className="service-feature-card">
                  <h4>Payroll Processing</h4>
                  <p>Accurate calculations for hourly wages, salaries, sales commissions, bonuses, and vacation pay. Includes pay stub generation and direct deposit preparation.</p>
                </div>
                <div className="service-feature-card">
                  <h4>Deductions & Government Remittances</h4>
                  <p>Precise calculation of Canada Pension Plan (CPP), Employment Insurance (EI), and income tax holdbacks. We handle CRA remittance tracking and reporting, alongside WSIB (Ontario) and Employer Health Tax (EHT) calculations.</p>
                </div>
                <div className="service-feature-card">
                  <h4>Employee & Contractor Management</h4>
                  <p>Setup of new employee profiles (TD1 forms, SIN tracking, payroll accounts), tracking vacation balances, and preparing and filing Records of Employment (ROEs) for departing staff.</p>
                </div>
                <div className="service-feature-card">
                  <h4>Year-End & Compliance Support</h4>
                  <p>Preparation of annual T4 and T4A slips, compilation of year-end T4 summaries, and dedicated representation during CRA payroll audits.</p>
                </div>
              </div>
            </div>

            <div className="content-block">
              <h2>Important Payroll Deadlines</h2>
              <div className="responsive-table">
                <table>
                  <thead>
                    <tr>
                      <th>CRA / WSIB Obligation</th>
                      <th>Compliance Deadline</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Monthly CRA Remittance</strong></td>
                      <td>Due by the <strong>15th day</strong> of the following calendar month (e.g. July payroll deductions must be remitted by August 15).</td>
                    </tr>
                    <tr>
                      <td><strong>T4/T4A Slips & Summary</strong></td>
                      <td>Must be filed with the CRA and distributed to employees by <strong>February 28</strong> of the following year.</td>
                    </tr>
                    <tr>
                      <td><strong>WSIB Reconciliations</strong></td>
                      <td>Periodic reporting deadlines based on your specific business schedule (Monthly, Quarterly, or Annually).</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="content-block">
              <h2>Types of Payroll We Support</h2>
              <div className="badge-container">
                <span className="badge-item">Hourly Wage Calculations</span>
                <span className="badge-item">Salaried Employee Payroll</span>
                <span className="badge-item">Commission-Based Processing</span>
                <span className="badge-item">Contractor & Freelancer Payments (T4A)</span>
                <span className="badge-item">Hybrid Structures (Salary + Commissions)</span>
                <span className="badge-item">Piece-Rate Payroll Systems</span>
                <span className="badge-item">Tips & Gratuities Allocation</span>
                <span className="badge-item">Project-Based Wage Processing</span>
              </div>
            </div>

            <div className="content-block">
              <h2>Our Standard Payroll Process</h2>
              <ol className="process-list">
                <li><strong>Setup & Registration:</strong> We open your payroll account with the CRA and establish filing protocols.</li>
                <li><strong>Employee Setup:</strong> We collect employee payment information, SIN, and TD1 forms.</li>
                <li><strong>Regular Runs:</strong> We calculate gross pay, CPP/EI, tax deductions, net pay, and vacation accrue.</li>
                <li><strong>Remittance Filing:</strong> We handle periodic reports and advise on remittance amounts.</li>
                <li><strong>Year-End Reporting:</strong> We issue employee T4 slips and transmit T4 summaries to the CRA.</li>
              </ol>
            </div>
          </div>

          <div className="sidebar">
            <div className="sidebar-card">
              <h3>Who We Serve</h3>
              <ul className="pricing-features">
                <li>Businesses (1–100 employees)</li>
                <li>Startups and growing firms</li>
                <li>Sole proprietors with staff</li>
                <li>Non-profit organizations</li>
                <li>Contractor heavy companies</li>
              </ul>
            </div>
            <div className="sidebar-card" style={{ backgroundColor: 'var(--color-bg-card)' }}>
              <h3>Why Outsource?</h3>
              <ul className="pricing-features">
                <li>Avoid CRA late penalties</li>
                <li>100% accurate CPP/EI tracking</li>
                <li>Secure Direct Deposit files</li>
                <li>Saves hours of admin work</li>
              </ul>
              <a href="#/contact" className="btn btn-primary" style={{ width: '100%', marginTop: 'var(--space-sm)' }}>Book Consultation</a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="pricing-section">
        <div className="container">
          <div className="section-title">
            <h2>Payroll Service Packages</h2>
            <p>Select your pricing tier based on your pay cycle frequency and employee count brackets.</p>
          </div>
          
          <div className="responsive-table" style={{ maxWidth: '900px', margin: '0 auto var(--space-lg) auto' }}>
            <table>
              <thead>
                <tr>
                  <th>Number of Employees</th>
                  <th>Monthly Run (1x / mo)</th>
                  <th>Bi-Weekly Run (2x / mo)</th>
                  <th>Weekly Run (4x / mo)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>1 – 3 Employees</strong></td>
                  <td>$80 / Month</td>
                  <td>$110 / Month</td>
                  <td>$150 / Month</td>
                </tr>
                <tr>
                  <td><strong>4 – 5 Employees</strong></td>
                  <td>$100 / Month</td>
                  <td>$130 / Month</td>
                  <td>$180 / Month</td>
                </tr>
                <tr>
                  <td><strong>6 – 10 Employees</strong></td>
                  <td>$150 / Month</td>
                  <td>$200 / Month</td>
                  <td>$250 / Month</td>
                </tr>
                <tr>
                  <td><strong>11 – 15 Employees</strong></td>
                  <td>$200 / Month</td>
                  <td>$250 / Month</td>
                  <td>$300 / Month</td>
                </tr>
                <tr>
                  <td><strong>16 – 20 Employees</strong></td>
                  <td>$250 / Month</td>
                  <td>$300 / Month</td>
                  <td>$350 / Month</td>
                </tr>
                <tr>
                  <td><strong>21 – 25 Employees</strong></td>
                  <td>$300 / Month</td>
                  <td>$350 / Month</td>
                  <td>$400 / Month</td>
                </tr>
                <tr>
                  <td><strong>26 – 30 Employees</strong></td>
                  <td>$350 / Month</td>
                  <td>$400 / Month</td>
                  <td>$450 / Month</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Enterprise & Add-ons Box */}
          <div className="my-md sidebar-card" style={{ backgroundColor: 'var(--color-bg)', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
            <h3 className="text-center" style={{ marginBottom: 'var(--space-md)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-accent-gold)' }}><rect x="4" y="2" width="16" height="20" rx="2" ry="2" /><line x1="9" y1="22" x2="9" y2="16" /><line x1="15" y1="22" x2="15" y2="16" /><line x1="9" y1="16" x2="15" y2="16" /><path d="M9 6h.01" /><path d="M15 6h.01" /><path d="M9 10h.01" /><path d="M15 10h.01" /></svg>
              Enterprise Payroll (30+ Employees)
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: 'var(--space-md)' }}>
              <div>
                <h4>Enterprise Custom setups</h4>
                <p>For organizations with 30+ employees, we provide custom quotes. Services include dedicated support, multi-location compliance, WSIB tracking, and priority help desk.</p>
              </div>
              <div>
                <h4>Optional Administrative Add-ons</h4>
                <ul className="pricing-features">
                  <li>T4 slips and T4 Summary filing</li>
                  <li>WSIB account setups & remittances</li>
                  <li>CRA payroll account registration</li>
                  <li>Contractor T4A preparation</li>
                </ul>
              </div>
            </div>
          </div>

          <p className="pricing-note">
            * All prices are subject to applicable HST. Bookkeeping integration and payroll cleanup services are billed separately. Final quote determined after consultation.
          </p>
        </div>
      </section>
    </>
  );
}
