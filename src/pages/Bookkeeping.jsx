import React, { useState } from 'react';

export default function Bookkeeping() {
  const [openFaqs, setOpenFaqs] = useState({});

  const toggleFaq = (id) => {
    setOpenFaqs(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const faqs = [
    {
      num: 1,
      q: "What is bookkeeping?",
      a: "Bookkeeping involves recording, organizing, and managing a business’s financial transactions to ensure accurate records for tax filings, financial reporting, and decision-making."
    },
    {
      num: 2,
      q: "Why is bookkeeping important for my business?",
      a: "Bookkeeping helps track income and expenses, ensures compliance with tax regulations, improves cash flow management, and provides insights into your business’s financial health."
    },
    {
      num: 3,
      q: "How do I know if I need a bookkeeper?",
      a: "If you’re struggling to manage your finances, missing deadlines, or unsure about your tax obligations, hiring a bookkeeper can save you time and help avoid costly mistakes."
    },
    {
      num: 4,
      q: "What bookkeeping services do you provide?",
      a: "We offer day-to-day transaction recording, bank and credit card reconciliations, payroll processing, accounts payable/receivable management, financial reporting & analysis, GST/HST filing, budgeting/forecasting, and audit support & tax preparation."
    },
    {
      num: 5,
      q: "Do I need to hire a bookkeeper if I use accounting software?",
      a: "Yes, while accounting software helps automate tasks, a bookkeeper ensures accurate data entry, reconciliations, and compliance, maximizing the software’s potential."
    },
    {
      num: 6,
      q: "How often should bookkeeping be done?",
      a: "This depends on your business size and needs. We recommend monthly bookkeeping for most businesses, but we also offer day to day, quarterly and annual services."
    },
    {
      num: 7,
      q: "What documents do I need to provide for bookkeeping?",
      a: "Common documents include: bank and credit card statements, invoices and receipts, payroll records, tax documents (GST/HST, income tax, etc.), and loan/investment statements."
    },
    {
      num: 8,
      q: "How much does bookkeeping cost?",
      a: "Pricing varies based on the complexity and frequency of services. We offer competitive rates tailored to your business, with options for day to day, monthly, quarterly, or annual plans."
    },
    {
      num: 10,
      q: "Can you help me catch up on overdue bookkeeping?",
      a: "Absolutely! We offer catch-up bookkeeping services to organize your financial records and get your business back on track."
    },
    {
      num: 11,
      q: "Do you provide virtual bookkeeping services?",
      a: "Yes, we offer cloud-based bookkeeping solutions, allowing us to serve clients across Canada and ensure real-time access to your financial data."
    },
    {
      num: 12,
      q: "How do I get started with your bookkeeping services?",
      a: "Contact us for a free consultation. We’ll assess your needs, create a customized plan, and help you transition seamlessly into our services."
    },
    {
      num: 13,
      q: "What is the difference between bookkeeping and accounting?",
      a: "Bookkeeping focuses on recording daily financial transactions, while accounting involves interpreting, analyzing, and summarizing financial data to provide insights and support decision-making."
    },
    {
      num: 14,
      q: "How do you ensure data confidentiality and security?",
      a: "We prioritize client confidentiality by using secure software, encrypted data transfer methods, and adhering to strict privacy policies to protect sensitive financial information."
    },
    {
      num: 15,
      q: "Can I outsource only specific bookkeeping tasks?",
      a: "Yes, our services are customizable. You can choose specific tasks, such as payroll processing, GST/HST filing, or financial reporting, depending on your business needs."
    },
    {
      num: 16,
      q: "Do you offer bookkeeping services for startups?",
      a: "Absolutely! We understand the unique challenges of startups and provide tailored services, including expense tracking, budgeting, and financial planning, to support growth."
    },
    {
      num: 17,
      q: "Do I need to have my books ready for tax preparation?",
      a: "Accurate and updated books simplify tax preparation, reduce errors, and ensure compliance. If your records are incomplete, we can help organize and prepare them for tax season."
    },
    {
      num: 18,
      q: "How can I transition to your bookkeeping service if I already have a bookkeeper?",
      a: "We make the transition seamless by reviewing your current bookkeeping processes, migrating your data, and ensuring minimal disruption to your business operations."
    },
    {
      num: 19,
      q: "Can you help me choose the right bookkeeping software?",
      a: "Yes, we assess your business needs and recommend suitable software, such as QuickBooks for your bookkeeping."
    },
    {
      num: 20,
      q: "What happens if I fall behind on my bookkeeping?",
      a: "We offer catch-up bookkeeping services to bring your records up to date quickly and efficiently, ensuring compliance and accurate financial reporting."
    },
    {
      num: 21,
      q: "Do you provide bookkeeping services for non-profit organizations?",
      a: "Yes, we understand the unique needs of non-profits and can assist with fund tracking, donor reporting, and maintaining compliance with charitable regulations."
    },
    {
      num: 22,
      q: "Can you help with bookkeeping for multiple locations or branches?",
      a: "Yes, we offer solutions for businesses with multiple locations, ensuring centralized reporting and streamlined financial management."
    },
    {
      num: 23,
      q: "How do I prepare for a bookkeeping consultation?",
      a: "Gather relevant documents, such as bank statements, invoices, receipts, and current financial reports, to help us understand your business and its needs."
    },
    {
      num: 24,
      q: "Do you offer budgeting and forecasting as part of bookkeeping?",
      a: "Yes, we can assist with creating budgets and financial forecasts to help you plan for future growth and make informed financial decisions."
    },
    {
      num: 25,
      q: "How often will I receive financial reports?",
      a: "You can choose the frequency—monthly, quarterly, or annually—based on your preferences and business requirements."
    },
    {
      num: 26,
      q: "Can you assist with audits?",
      a: "Yes, we provide audit support by ensuring your financial records are organized, accurate, and ready for review by auditors or tax authorities."
    },
    {
      num: 27,
      q: "What is the turnaround time for your services?",
      a: "Turnaround time depends on the scope of work. We aim to deliver timely and accurate services to meet your deadlines, especially for time-sensitive tasks like tax filing."
    },
    {
      num: 28,
      q: "Are your bookkeeping services tax-deductible?",
      a: "Yes, bookkeeping services are often considered a business expense and may be tax-deductible. Consult your accountant or tax advisor for confirmation."
    },
    {
      num: 29,
      q: "How do you handle GST/HST filings?",
      a: "We ensure timely and accurate GST/HST filings by tracking taxable transactions, calculating owed amounts, and submitting reports to the CRA on your behalf."
    },
    {
      num: 30,
      q: "Can you work with international clients or non-residents?",
      a: "Yes, we have experience with non-residents and international businesses operating in Canada, helping them comply with Canadian bookkeeping and tax regulations."
    }
  ];

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Bookkeeping Services</h1>
          <p>Accurate. Affordable. CRA-Compliant. At RGHT Tax & Accounting, we offer reliable, industry-specific bookkeeping services to keep your business finances organized and stress-free.</p>
        </div>
      </section>

      <section className="py-lg">
        <div className="container two-col-layout">
          <div>
            <div className="content-block">
              <h2>Stay Organized, Save Time, and Maximize Profits</h2>
              <p>Whether you're a startup, growing company, or established organization, having clean, accurate records is vital. We handle your transactions, reconciliations, and ledgers so you can run your business with confidence.</p>
              <p style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-accent-gold)' }}><path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" /><circle cx="12" cy="10" r="3" /></svg>
                <strong>Office Location:</strong> Brampton, Ontario 
                <span style={{ margin: '0 10px', color: 'var(--color-border)' }}>|</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-accent-gold)' }}><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                <strong>Virtual Services:</strong> Available coast-to-coast across Canada.
              </p>
            </div>

            <div className="content-block">
              <h2>Bookkeeping Services We Offer</h2>
              <div className="service-feature-grid">
                <div className="service-feature-card">
                  <h4>Transaction Recording</h4>
                  <p>We record and categorize all business income and expenses—sales, purchases, bills, and payments.</p>
                </div>
                <div className="service-feature-card">
                  <h4>Accounts Payable & Receivable</h4>
                  <p>We track incoming invoices and outgoing payments to manage your cash flow efficiently.</p>
                </div>
                <div className="service-feature-card">
                  <h4>Bank & Credit Card Reconciliation</h4>
                  <p>We match bank and credit card statements with bookkeeping records to ensure everything balances.</p>
                </div>
                <div className="service-feature-card">
                  <h4>Sales Tax (GST/HST/PST) Filing</h4>
                  <p>We track sales taxes collected and paid, prepare tax summaries, and file returns with the CRA.</p>
                </div>
                <div className="service-feature-card">
                  <h4>Financial Reporting</h4>
                  <p>We compile clear monthly or quarterly statements, including Profit & Loss, Balance Sheets, and Cash Flow Statements.</p>
                </div>
                <div className="service-feature-card">
                  <h4>Catch-Up & Cleanup Bookkeeping</h4>
                  <p>Behind on your books? We organize, reconcile, and bring records up to date—whether it's a few months or several years.</p>
                </div>
                <div className="service-feature-card">
                  <h4>Cloud Bookkeeping Setup</h4>
                  <p>We set up or migrate your records to QuickBooks Online, providing training and ongoing digital support.</p>
                </div>
              </div>
            </div>

            <div className="content-block">
              <h2>Bookkeeping Frequency Options</h2>
              <div className="form-grid">
                <div className="sidebar-card" style={{ backgroundColor: 'var(--color-white)', marginBottom: 0 }}>
                  <h4>Monthly Bookkeeping</h4>
                  <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>For active businesses needing monthly financial reports, HST tracking, and consistent CRA compliance oversight.</p>
                </div>
                <div className="sidebar-card" style={{ backgroundColor: 'var(--color-white)', marginBottom: 0 }}>
                  <h4>Quarterly Bookkeeping</h4>
                  <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>Ideal for seasonal or moderate-activity businesses filing quarterly HST returns.</p>
                </div>
                <div className="sidebar-card" style={{ backgroundColor: 'var(--color-white)', marginBottom: 0 }}>
                  <h4>Yearly Bookkeeping</h4>
                  <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>Perfect for sole proprietors and freelancers who only need annual cleanup and tax-ready statements.</p>
                </div>
                <div className="sidebar-card" style={{ backgroundColor: 'var(--color-white)', marginBottom: 0, marginTop: '1rem' }}>
                  <h4>Day-to-Day Bookkeeping</h4>
                  <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>For high-volume operations requiring daily invoicing, receivables management, and real-time cash flow views.</p>
                </div>
              </div>
            </div>

            <div className="content-block">
              <h2>Frequently Asked Questions (FAQs)</h2>
              <div className="accordion">
                {faqs.map(item => {
                  const isOpen = !!openFaqs[item.num];
                  return (
                    <div key={item.num} className={`accordion-item ${isOpen ? 'open' : ''}`}>
                      <button className="accordion-header" onClick={() => toggleFaq(item.num)}>
                        {item.num}. {item.q}
                        <span className="accordion-icon" style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}>▼</span>
                      </button>
                      <div className={`accordion-content ${isOpen ? 'active' : ''}`}>
                        <div className="accordion-content-inner">
                          <p>{item.a}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="sidebar">
            <div className="sidebar-card">
              <h3>Software Support</h3>
              <p>We reconcile records and manage setups in: </p>
              <ul className="pricing-features">
                <li>QuickBooks Online</li>
                <li>QuickBooks Desktop</li>
                <li>Excel / Google Sheets</li>
              </ul>
            </div>
            <div className="sidebar-card" style={{ backgroundColor: 'var(--color-bg-card)' }}>
              <h3>Why Choose RGHT</h3>
              <ul className="pricing-features">
                <li>CRA-Ready records</li>
                <li>6-year records retention</li>
                <li>Seamless tax integration</li>
                <li>Dedicated expert support</li>
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
            <h2>Bookkeeping Pricing Packages</h2>
            <p>Simple and transparent monthly rates based on transaction volumes.</p>
          </div>
          
          <div className="pricing-grid">
            
            {/* Package 1 */}
            <div className="pricing-card">
              <h3>Silver Bookkeeping</h3>
              <p>Ideal for sole proprietors or micro-businesses with low transaction volumes.</p>
              <div className="price-bracket">$150<span>/month</span></div>
              <ul className="pricing-features">
                <li>Up to 100 transactions per month</li>
                <li>Bank & credit card reconciliation</li>
                <li>1 - 2 financial accounts</li>
                <li>Basic expense categorization</li>
                <li>Monthly Profit & Loss reports</li>
                <li>CRA tax-ready records</li>
              </ul>
              <a href="#/intake-form" className="btn btn-secondary">Select Silver</a>
            </div>

            {/* Package 2 */}
            <div className="pricing-card featured">
              <div className="pricing-badge">Popular</div>
              <h3>Gold Bookkeeping</h3>
              <p>For active small businesses requiring HST tracking and complete statements.</p>
              <div className="price-bracket">$300<span>/month</span></div>
              <ul className="pricing-features">
                <li>Up to 250 transactions per month</li>
                <li className="pricing-header-item">Everything in Silver PLUS:</li>
                <li>Reconciliation (3 - 4 accounts)</li>
                <li>GST/HST tracking & calculation</li>
                <li>Monthly Balance Sheet compilation</li>
                <li>Detailed expense reviews</li>
              </ul>
              <a href="#/intake-form" className="btn btn-primary">Select Gold</a>
            </div>

            {/* Package 3 */}
            <div className="pricing-card">
              <h3>Platinum Bookkeeping</h3>
              <p>For established operations with high-volume receipts and payroll.</p>
              <div className="price-bracket">$500<span>/month</span></div>
              <ul className="pricing-features">
                <li>Up to 500 transactions per month</li>
                <li className="pricing-header-item">Everything in Gold PLUS:</li>
                <li>Full ledgers & adjusting entries</li>
                <li>GST/HST filing support</li>
                <li>Basic payroll sync & reporting</li>
                <li>Dedicated account specialist</li>
              </ul>
              <a href="#/intake-form" className="btn btn-secondary">Select Platinum</a>
            </div>

            {/* Package 4 */}
            <div className="pricing-card">
              <h3>Enterprise Bookkeeping</h3>
              <p>Custom setups for large corporations or multi-entity business groups.</p>
              <div className="price-bracket">Starting $700<span>/month</span></div>
              <ul className="pricing-features">
                <li>500+ transactions per month</li>
                <li>Unlimited financial accounts</li>
                <li>Dedicated Priority Accountant</li>
                <li>Full HST + Payroll filings management</li>
                <li>Advanced cash flow forecasting</li>
                <li>Monthly advisory calls</li>
              </ul>
              <a href="#/intake-form" className="btn btn-secondary">Select Enterprise</a>
            </div>

          </div>

          {/* Catch up details */}
          <div className="my-md sidebar-card text-center" style={{ backgroundColor: 'var(--color-bg)', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
            <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '0.5rem' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-accent-gold)' }}><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
              Catch-Up & Cleanup Bookkeeping Services
            </h3>
            <p style={{ fontSize: '1.15rem', color: 'var(--color-accent-gold)', fontWeight: 700, margin: '0.5rem 0' }}>$1.50 - $2.00 per transaction</p>
            <p style={{ maxWidth: '700px', margin: '0 auto' }}>Fallen behind on your receipts or bank statements? We will organize your books, fix errors, reconcile accounts, and bring you up to date to file your corporate or sole-proprietor taxes immediately.</p>
          </div>

          <p className="pricing-note">
            * All prices are subject to applicable HST. Additional transactions beyond package limit will be billed at $1 each. Records must be provided in structured format.
          </p>
        </div>
      </section>
    </>
  );
}
