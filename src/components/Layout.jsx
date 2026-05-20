import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ currentPage, children }) {
  return (
    <div className="app-wrapper">
      <Header currentPage={currentPage} />
      <main className="main-content page-transition" key={currentPage}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
