import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

// Home page sections
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ApiSection from './components/ApiSection';
import Developer from './components/Developer';
import Footer from './components/Footer';

// Pages
import PrivacyPolicy from './pages/PrivacyPolicy';

function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ApiSection />
        <Developer />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;