import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import CareersPage from './pages/CareersPage';
import SupportPage from './pages/SupportPage';
import Header from './components/Header';
import Footer from './components/Footer';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import { useToggle } from './hooks/useToggle';
import { useViewportContext } from './hooks/useViewport';

const App = () => {
  const [width] = useViewportContext();
  const [isOpen, handleToggle, handleClose] = useToggle();
  return (
    <>
      <Header
        width={width}
        isOpen={isOpen}
        handleToggle={handleToggle}
        handleClose={handleClose}
      />
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
