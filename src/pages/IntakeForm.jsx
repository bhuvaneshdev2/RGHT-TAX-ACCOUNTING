import React, { useState, useRef } from 'react';

export default function IntakeForm() {
  const [step, setStep] = useState(1);
  const [files, setFiles] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    preferredLanguage: '',
    email: '',
    phone: '',
    residency: 'canada',
    address: '',
    newcomer: 'no',
    arrivalDate: '',
    newcomer_options: [],
    maritalStatus: 'single',
    numChildren: 0,
    childcare: 'no',
    situations: [],
    communication: 'no_appointment',
    additionalInfo: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      if (name === 'newcomer_options') {
        setFormData(prev => {
          const list = prev.newcomer_options.includes(value)
            ? prev.newcomer_options.filter(x => x !== value)
            : [...prev.newcomer_options, value];
          return { ...prev, newcomer_options: list };
        });
      } else if (name === 'situation') {
        setFormData(prev => {
          const list = prev.situations.includes(value)
            ? prev.situations.filter(x => x !== value)
            : [...prev.situations, value];
          return { ...prev, situations: list };
        });
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleNext = () => {
    // Basic validation for Step 1
    if (step === 1) {
      if (!formData.fullName || !formData.dob || !formData.preferredLanguage || !formData.email || !formData.phone) {
        alert('Please fill out all required fields marked with *');
        return;
      }
    }
    setStep(prev => Math.min(prev + 1, 5));
  };

  const handlePrev = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(prev => [...prev, ...selectedFiles]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFiles = Array.from(e.dataTransfer.files);
      setFiles(prev => [...prev, ...droppedFiles]);
      e.dataTransfer.clearData();
    }
  };

  const removeFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  const [submitStatus, setSubmitStatus] = useState(null); // 'submitting', 'error', null

  // GOOGLE SHEET SUBMISSION CONFIGURATION:
  // Replace the GOOGLE_SCRIPT_URL variable below with your Web App URL.
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwhfQR2vYch5aDlpzshZei3Cv2uoDYYzCubQ4HfTKg10vx4uk-ErHMA_XnEVIfaRBmH4g/exec';

  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64String = reader.result.split(',')[1];
        resolve(base64String);
      };
      reader.onerror = (error) => reject(error);
    });
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('submitting');

    try {
      // Convert all uploaded files to base64 format for Google Drive storage
      const uploadedFilesData = await Promise.all(
        files.map(async (file) => {
          const base64 = await convertFileToBase64(file);
          return {
            name: file.name,
            type: file.type,
            base64: base64
          };
        })
      );

      const submissionPayload = {
        ...formData,
        files: uploadedFilesData,
        formType: 'intake'
      };

      if (GOOGLE_SCRIPT_URL) {
        await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          body: JSON.stringify(submissionPayload)
        });
        setSubmitStatus(null);
        setSubmitted(true);
      } else {
        // Simulate successful submission if Google Sheet URL is not configured yet
        setTimeout(() => {
          setSubmitStatus(null);
          setSubmitted(true);
        }, 1500);
      }
    } catch (err) {
      console.error('Google Sheet submission error:', err);
      setSubmitStatus('error');
    }
  };

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Online Tax Intake & Secure Upload</h1>
          <p>File Your Taxes Safely Online. Provide your personal details, tax circumstances, and upload supporting slips (T4, T2202, receipts) in 5 simple stages.</p>
        </div>
      </section>

      <section className="py-lg">
        <div className="container" style={{ maxWidth: '800px' }}>
          
          {/* Step Indicators */}
          <div className="step-indicator">
            {[1, 2, 3, 4, 5].map((i) => (
              <div 
                key={i} 
                className={`step-dot ${step === i ? 'active' : ''} ${step > i ? 'completed' : ''}`}
                onClick={() => setStep(i)}
                style={{ cursor: 'pointer' }}
              >
                {i}
              </div>
            ))}
          </div>

          {submitted ? (
            <div className="sidebar-card text-center" style={{ backgroundColor: 'var(--color-white)', border: '1px solid var(--color-border)', padding: 'var(--space-md)' }}>
              <div style={{ color: 'var(--color-accent-green)', fontSize: '3rem', marginBottom: '1rem' }}>âœ“</div>
              <h2>Intake Form Submitted Successfully!</h2>
              <p style={{ margin: '1rem 0' }}>Thank you, {formData.fullName}. Your secure tax intake details and {files.length} uploaded files have been received.</p>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>A professional representative from RGHT Tax & Accounting will review your file and reach out to you within 24 hours.</p>
              <button 
                onClick={() => { setSubmitted(false); setStep(1); setFiles([]); }} 
                className="btn btn-primary" 
                style={{ marginTop: 'var(--space-md)' }}
              >
                Submit Another Form
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="sidebar-card" style={{ backgroundColor: 'var(--color-white)', border: '1px solid var(--color-border)', padding: 'var(--space-md)' }}>
              
              {/* STEP 1: Personal Info */}
              {step === 1 && (
                <div className="step-content active">
                  <h3 style={{ marginBottom: 'var(--space-xs)', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>Step 1: Personal & Residency Information</h3>
                  
                  <div className="form-group" style={{ marginTop: 'var(--space-sm)' }}>
                    <label htmlFor="fullName">Full Name *</label>
                    <input 
                      type="text" 
                      id="fullName" 
                      name="fullName" 
                      value={formData.fullName} 
                      onChange={handleChange} 
                      required 
                      style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: '4px' }} 
                      placeholder="First Name / Last Name" 
                    />
                  </div>

                  <div className="form-grid" style={{ marginTop: 'var(--space-sm)' }}>
                    <div className="form-group">
                      <label htmlFor="dob">Date of Birth *</label>
                      <input 
                        type="date" 
                        id="dob" 
                        name="dob" 
                        value={formData.dob} 
                        onChange={handleChange} 
                        required 
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: '4px' }} 
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="preferredLanguage">Preferred Language *</label>
                      <select 
                        id="preferredLanguage" 
                        name="preferredLanguage" 
                        value={formData.preferredLanguage} 
                        onChange={handleChange} 
                        required 
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: '4px' }}
                      >
                        <option value="">-- Select Language --</option>
                        <option value="english">English</option>
                        <option value="tamil">Tamil</option>
                        <option value="punjabi">Punjabi</option>
                        <option value="hindi">Hindi</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-grid" style={{ marginTop: 'var(--space-sm)' }}>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        required 
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: '4px' }} 
                        placeholder="name@example.com" 
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number *</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        required 
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: '4px' }} 
                        placeholder="647-504-6682" 
                      />
                    </div>
                  </div>

                  <div className="form-group" style={{ marginTop: 'var(--space-sm)' }}>
                    <label>Country of Residency *</label>
                    <div style={{ display: 'flex', gap: 'var(--space-md)', marginTop: '0.25rem' }}>
                      <label style={{ fontWeight: 500 }}>
                        <input 
                          type="radio" 
                          name="residency" 
                          value="canada" 
                          checked={formData.residency === 'canada'} 
                          onChange={handleChange} 
                        /> Canada
                      </label>
                      <label style={{ fontWeight: 500 }}>
                        <input 
                          type="radio" 
                          name="residency" 
                          value="other" 
                          checked={formData.residency === 'other'} 
                          onChange={handleChange} 
                        /> Other / Left Canada
                      </label>
                    </div>
                  </div>

                  <div className="form-group" style={{ marginTop: 'var(--space-sm)' }}>
                    <label htmlFor="address">Street Address</label>
                    <input 
                      type="text" 
                      id="address" 
                      name="address" 
                      value={formData.address} 
                      onChange={handleChange} 
                      style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: '4px' }} 
                      placeholder="Street / City / Province / Postal Code / Country" 
                    />
                  </div>

                  <div className="btn-group-step" style={{ justifyContent: 'flex-end' }}>
                    <button type="button" onClick={handleNext} className="btn btn-primary">Next Step <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft:`4px`,verticalAlign:`middle`}}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></button>
                  </div>
                </div>
              )}

              {/* STEP 2: Newcomer & Family */}
              {step === 2 && (
                <div className="step-content active">
                  <h3 style={{ marginBottom: 'var(--space-xs)', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>Step 2: Marital & Family Status</h3>
                  
                  <div className="form-group" style={{ marginTop: 'var(--space-sm)' }}>
                    <label>Did you immigrate to Canada in 2024 or 2025? *</label>
                    <div style={{ display: 'flex', gap: 'var(--space-md)', marginTop: '0.25rem' }}>
                      <label style={{ fontWeight: 500 }}>
                        <input 
                          type="radio" 
                          name="newcomer" 
                          value="no" 
                          checked={formData.newcomer === 'no'} 
                          onChange={handleChange} 
                          required 
                        /> No
                      </label>
                      <label style={{ fontWeight: 500 }}>
                        <input 
                          type="radio" 
                          name="newcomer" 
                          value="yes" 
                          checked={formData.newcomer === 'yes'} 
                          onChange={handleChange} 
                          required 
                        /> Yes
                      </label>
                    </div>
                  </div>

                  <div className="form-grid" style={{ marginTop: 'var(--space-sm)' }}>
                    <div className="form-group">
                      <label htmlFor="arrivalDate">Arrival Date (If Yes)</label>
                      <input 
                        type="date" 
                        id="arrivalDate" 
                        name="arrivalDate" 
                        value={formData.arrivalDate} 
                        onChange={handleChange} 
                        disabled={formData.newcomer !== 'yes'}
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: '4px' }} 
                      />
                    </div>
                    <div className="form-group">
                      <label>Newcomer Credits</label>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginTop: '0.25rem' }}>
                        <label style={{ fontWeight: 500, fontSize: '0.9rem' }}>
                          <input 
                            type="checkbox" 
                            name="newcomer_options" 
                            value="first_return" 
                            checked={formData.newcomer_options.includes('first_return')} 
                            onChange={handleChange} 
                          /> First tax return in Canada
                        </label>
                        <label style={{ fontWeight: 500, fontSize: '0.9rem' }}>
                          <input 
                            type="checkbox" 
                            name="newcomer_options" 
                            value="ccb_gst" 
                            checked={formData.newcomer_options.includes('ccb_gst')} 
                            onChange={handleChange} 
                          /> Apply for CCB / GST/HST credit
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="form-group" style={{ marginTop: 'var(--space-sm)' }}>
                    <label>Marital Status *</label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(130px, 100%), 1fr))', gap: '0.5rem', marginTop: '0.25rem' }}>
                      {['single', 'married', 'separated', 'single_parent'].map(status => (
                        <label key={status} style={{ fontWeight: 500, textTransform: 'capitalize' }}>
                          <input 
                            type="radio" 
                            name="maritalStatus" 
                            value={status} 
                            checked={formData.maritalStatus === status} 
                            onChange={handleChange} 
                            required 
                          /> {status.replace('_', ' ')}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="form-grid" style={{ marginTop: 'var(--space-sm)' }}>
                    <div className="form-group">
                      <label htmlFor="numChildren">Number of Children</label>
                      <input 
                        type="number" 
                        id="numChildren" 
                        name="numChildren" 
                        value={formData.numChildren} 
                        onChange={handleChange} 
                        min="0" 
                        style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: '4px' }} 
                      />
                    </div>
                    <div className="form-group">
                      <label>Do you pay childcare expenses?</label>
                      <div style={{ display: 'flex', gap: 'var(--space-md)', marginTop: '0.5rem' }}>
                        <label style={{ fontWeight: 500 }}>
                          <input 
                            type="radio" 
                            name="childcare" 
                            value="no" 
                            checked={formData.childcare === 'no'} 
                            onChange={handleChange} 
                          /> No
                        </label>
                        <label style={{ fontWeight: 500 }}>
                          <input 
                            type="radio" 
                            name="childcare" 
                            value="yes" 
                            checked={formData.childcare === 'yes'} 
                            onChange={handleChange} 
                          /> Yes
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="btn-group-step" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button type="button" onClick={handlePrev} className="btn btn-secondary">â† Previous</button>
                    <button type="button" onClick={handleNext} className="btn btn-primary">Next Step <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft:`4px`,verticalAlign:`middle`}}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></button>
                  </div>
                </div>
              )}

              {/* STEP 3: Tax Situation Selector */}
              {step === 3 && (
                <div className="step-content active">
                  <h3 style={{ marginBottom: 'var(--space-xs)', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>Step 3: What is Your Tax Situation? *</h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginBottom: 'var(--space-sm)' }}>Select all options that describe your active revenue or entities (Required):</p>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(220px, 100%), 1fr))', gap: 'var(--space-md)' }}>
                    
                    {/* Personal Checkboxes */}
                    <div>
                      <h4 style={{ color: 'var(--color-accent-green)', marginBottom: '0.5rem' }}>Personal Filings</h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {[
                          { val: 'no_income', label: 'No income' },
                          { val: 'single_t4', label: '1 T4 (simple return)' },
                          { val: 'multi_t4', label: 'Multiple T4s' },
                          { val: 'student', label: 'Student (T2202)' },
                          { val: 'senior', label: 'Senior (CPP, OAS, pension)' },
                          { val: 'disability', label: 'Disability credit' },
                          { val: 'prior_personal', label: 'Previous years unfiled' }
                        ].map(item => (
                          <label key={item.val} style={{ fontWeight: 500, fontSize: '0.9rem' }}>
                            <input 
                              type="checkbox" 
                              name="situation" 
                              value={item.val} 
                              checked={formData.situations.includes(item.val)} 
                              onChange={handleChange} 
                            /> {item.label}
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Self-Employed Checkboxes */}
                    <div>
                      <h4 style={{ color: 'var(--color-accent-green)', marginBottom: '0.5rem' }}>Self-Employed / Other</h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {[
                          { val: 'self_employed', label: 'Self-employed / business' },
                          { val: 'ride_share', label: 'Uber / Lyft / Delivery' },
                          { val: 'rental', label: 'Rental income (T776)' },
                          { val: 'investment', label: 'Investments (T5, T3, gains)' },
                          { val: 'assistance', label: 'EI / WSIB / assistance' },
                          { val: 'foreign_income', label: 'Foreign income / assets' }
                        ].map(item => (
                          <label key={item.val} style={{ fontWeight: 500, fontSize: '0.9rem' }}>
                            <input 
                              type="checkbox" 
                              name="situation" 
                              value={item.val} 
                              checked={formData.situations.includes(item.val)} 
                              onChange={handleChange} 
                            /> {item.label}
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Corporate Checkboxes */}
                    <div>
                      <h4 style={{ color: 'var(--color-accent-green)', marginBottom: '0.5rem' }}>Corporate Entities</h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {[
                          { val: 'nil_corp', label: 'Nil corporation (no activity)' },
                          { val: 'active_corp', label: 'Active Corporation (T2)' },
                          { val: 'bookkeeping_t2', label: 'Need Bookkeeping + T2' },
                          { val: 'gst_hst_corp', label: 'GST/HST returns' },
                          { val: 'payroll_corp', label: 'Payroll / T4 / WSIB' },
                          { val: 'dividends_corp', label: 'Dividends / Shareholder loans' },
                          { val: 'holding_corp', label: 'Holding / Investment Corp' }
                        ].map(item => (
                          <label key={item.val} style={{ fontWeight: 500, fontSize: '0.9rem' }}>
                            <input 
                              type="checkbox" 
                              name="situation" 
                              value={item.val} 
                              checked={formData.situations.includes(item.val)} 
                              onChange={handleChange} 
                            /> {item.label}
                          </label>
                        ))}
                      </div>
                    </div>

                  </div>

                  <div className="btn-group-step" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button type="button" onClick={handlePrev} className="btn btn-secondary">â† Previous</button>
                    <button type="button" onClick={handleNext} className="btn btn-primary">Next Step <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft:`4px`,verticalAlign:`middle`}}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></button>
                  </div>
                </div>
              )}

              {/* STEP 4: Documents Upload & Communication */}
              {step === 4 && (
                <div className="step-content active">
                  <h3 style={{ marginBottom: 'var(--space-xs)', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>Step 4: Preferred Communication & Document Upload</h3>
                  
                  <div className="form-group" style={{ marginTop: 'var(--space-sm)' }}>
                    <label>Preferred Communication Method *</label>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '0.25rem' }}>
                      <label style={{ fontWeight: 500 }}>
                        <input 
                          type="radio" 
                          name="communication" 
                          value="no_appointment" 
                          checked={formData.communication === 'no_appointment'} 
                          onChange={handleChange} 
                          required 
                        /> No appointment â€” process tax return and email me
                      </label>
                      <label style={{ fontWeight: 500 }}>
                        <input 
                          type="radio" 
                          name="communication" 
                          value="call_questions" 
                          checked={formData.communication === 'call_questions'} 
                          onChange={handleChange} 
                          required 
                        /> Call me if you have any questions
                      </label>
                      <label style={{ fontWeight: 500 }}>
                        <input 
                          type="radio" 
                          name="communication" 
                          value="booked_appointment" 
                          checked={formData.communication === 'booked_appointment'} 
                          onChange={handleChange} 
                          required 
                        /> I have already booked an appointment
                      </label>
                    </div>
                  </div>

                  <div className="form-group" style={{ marginTop: 'var(--space-md)' }}>
                    <label style={{ display: 'flex', alignItems: 'center' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '6px' }}><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" /></svg>
                      Document Upload (Required) *
                    </label>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>Upload files (PDF, JPG, PNG, Excel) up to 10 MB per file. You may upload multiple slips/statements:</p>
                    
                    <div 
                      className="upload-zone" 
                      onClick={triggerFileInput}
                      onDragOver={handleDragOver}
                      onDrop={handleDrop}
                    >
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-accent-gold)', marginBottom: '0.5rem' }}><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="17 8 12 3 7 8" /><line x1="12" y1="3" x2="12" y2="15" /></svg>
                      <p style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-accent-gold)', marginBottom: '0.25rem' }}>Drag and drop files here, or click to upload</p>
                      <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)' }}>Max file size: 10 MB per file</p>
                      <input 
                        type="file" 
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        multiple 
                        style={{ display: 'none' }} 
                      />
                    </div>
                    
                    {/* Files Selected List */}
                    <div style={{ marginTop: 'var(--space-sm)' }}>
                      {files.length === 0 ? (
                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>No documents added yet.</p>
                      ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                          {files.map((file, idx) => (
                            <div key={idx} className="file-item">
                              <span>ðŸ“ {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)</span>
                              <span className="remove-file" onClick={() => removeFile(idx)}>Remove</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="btn-group-step" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button type="button" onClick={handlePrev} className="btn btn-secondary">â† Previous</button>
                    <button type="button" onClick={handleNext} className="btn btn-primary">Next Step <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{marginLeft:`4px`,verticalAlign:`middle`}}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></button>
                  </div>
                </div>
              )}

              {/* STEP 5: Final review and submit */}
              {step === 5 && (
                <div className="step-content active">
                  <h3 style={{ marginBottom: 'var(--space-xs)', borderBottom: '1px solid var(--color-border)', paddingBottom: '0.5rem' }}>Step 5: Record Keeping & Submit</h3>
                  
                  <div className="my-xs alert-warning" style={{ padding: '0.75rem', borderRadius: '4px', fontSize: '0.95rem', lineHeight: '1.4', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--color-accent-gold)', flexShrink: 0, marginTop: '2px' }}><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
                    <div>
                      <strong>Canada Revenue Agency (CRA) Requirement:</strong><br />
                      You are legally required to keep all original receipts, invoices, statements, and supporting documents for at least <strong>6 years</strong>.
                    </div>
                  </div>

                  <div className="form-group" style={{ marginTop: 'var(--space-md)' }}>
                    <label htmlFor="additionalInfo">Additional Information</label>
                    <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '0.25rem' }}>Include details of CRA letters, marital status changes, property sales, new business ideas, foreign assets, or questions:</p>
                    <textarea 
                      id="additionalInfo" 
                      name="additionalInfo" 
                      rows="6" 
                      value={formData.additionalInfo}
                      onChange={handleChange}
                      style={{ width: '100%', padding: '0.75rem', border: '1px solid var(--color-border)', borderRadius: '4px', fontFamily: 'inherit' }} 
                      placeholder="Type here..."
                    ></textarea>
                  </div>

                  <div className="btn-group-step" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button type="button" onClick={handlePrev} className="btn btn-secondary" disabled={submitStatus === 'submitting'}>â† Previous</button>
                    <button type="submit" className="btn btn-primary" disabled={submitStatus === 'submitting'}>
                      {submitStatus === 'submitting' ? 'Submitting Secure Intake...' : 'Submit Secure Intake Form'}
                    </button>
                  </div>
                  {submitStatus === 'error' && (
                    <div className="alert-danger" style={{ marginTop: '1rem', padding: '0.75rem', borderRadius: '4px', backgroundColor: '#fde8e8', color: '#9b1c1c', border: '1px solid #f8b4b4' }}>
                      An error occurred while submitting. Please try again or contact us directly at info@rght.ca.
                    </div>
                  )}
                </div>
              )}

            </form>
          )}
        </div>
      </section>
    </>
  );
}

