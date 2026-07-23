import React from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ApiSection from './components/ApiSection';
import Developer from './components/Developer';
import Footer from './components/Footer';

// App-wide scroll reveal hook
function useScrollReveal() {
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    );

    // Observe any top-level fade elements not handled by component-level observers
    document.querySelectorAll('.fade-up:not(.visible), .fade-in:not(.visible)').forEach((el) =>
      observer.observe(el)
    );

    return () => observer.disconnect();
  }, []);
}

function App() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-navy" style={{ background: '#0d1b2a' }}>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <ApiSection />
        <Developer />
      </main>
      <Footer />
    </div>
  );
}

export default App;