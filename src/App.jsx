import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './pages/Home';
import PersonalTax from './pages/PersonalTax';
import BusinessTax from './pages/BusinessTax';
import CorporationTax from './pages/CorporationTax';
import RideServiceTax from './pages/RideServiceTax';
import Bookkeeping from './pages/Bookkeeping';
import Payroll from './pages/Payroll';
import BusinessSetup from './pages/BusinessSetup';
import InsuranceInvestment from './pages/InsuranceInvestment';
import ApplicationServices from './pages/ApplicationServices';
import WhyChooseUs from './pages/WhyChooseUs';
import About from './pages/About';
import Contact from './pages/Contact';
import IntakeForm from './pages/IntakeForm';

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#/');

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#/');
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Parse path
  let path = currentHash.replace(/^#/, '');
  if (path === '' || path === '/') {
    path = '/home';
  }

  // Map path to component and current page ID
  let PageComponent = Home;
  let pageId = 'home';

  switch (path) {
    case '/personal-tax':
      PageComponent = PersonalTax;
      pageId = 'personal-tax';
      break;
    case '/business-tax':
      PageComponent = BusinessTax;
      pageId = 'business-tax';
      break;
    case '/corporation-tax':
      PageComponent = CorporationTax;
      pageId = 'corporation-tax';
      break;
    case '/ride-service-tax':
      PageComponent = RideServiceTax;
      pageId = 'ride-service-tax';
      break;
    case '/bookkeeping':
      PageComponent = Bookkeeping;
      pageId = 'bookkeeping';
      break;
    case '/payroll':
      PageComponent = Payroll;
      pageId = 'payroll';
      break;
    case '/business-setup':
      PageComponent = BusinessSetup;
      pageId = 'business-setup';
      break;
    case '/insurance-investment':
      PageComponent = InsuranceInvestment;
      pageId = 'insurance-investment';
      break;
    case '/application-services':
      PageComponent = ApplicationServices;
      pageId = 'application-services';
      break;
    case '/why-choose-us':
      PageComponent = WhyChooseUs;
      pageId = 'why-choose-us';
      break;
    case '/about':
      PageComponent = About;
      pageId = 'about';
      break;
    case '/contact':
      PageComponent = Contact;
      pageId = 'contact';
      break;
    case '/intake-form':
      PageComponent = IntakeForm;
      pageId = 'intake-form';
      break;
    default:
      PageComponent = Home;
      pageId = 'home';
      break;
  }

  return (
    <Layout currentPage={pageId}>
      <PageComponent />
    </Layout>
  );
}

export default App;
