import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#features', label: 'Features' },
  { href: '#apis', label: 'APIs' },
  { href: '#developer', label: 'Developer' },
];

const PlayIcon = () => (
  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.18 23.76a2 2 0 0 0 2.05-.19l13-7.5-2.83-2.83-12.22 10.52zm16.12-9.93 3.15-1.82a1.5 1.5 0 0 0 0-2.6L19.3 7.59l-3.12 3.12 3.12 3.12zM3.18.24A2 2 0 0 0 2 2v20a2 2 0 0 0 1.18 1.76L15.4 12 3.18.24zm13 11.88-2.83-2.83L3.18.24l13.12 11.88z" />
  </svg>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy/80 backdrop-blur-[20px] border-b border-gold/10 shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNav('#hero'); }}
          className="flex items-center gap-3 group no-underline"
        >
          <img
            src="/logo.png"
            alt="Noor Logo"
            className="w-10 h-10 object-contain drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
          />
          <div>
            <span className="font-amiri text-xl gold-text font-bold">نور</span>
            <span className="ml-2 text-white font-semibold text-lg">Noor</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 list-none">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => { e.preventDefault(); handleNav(href); }}
                className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-medium text-sm tracking-wide relative group no-underline"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Download CTA */}
        <a
          href="https://play.google.com/store/apps/details?id=com.sk_altamash188.noor"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-full font-bold text-navy text-sm no-underline transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 cursor-pointer"
          style={{
            background: 'linear-gradient(135deg, #c9a84c, #f0c060, #c9a84c)',
            backgroundSize: '200% auto',
            boxShadow: '0 4px 20px rgba(201,168,76,0.4)',
          }}
          id="nav-download-btn"
        >
          <PlayIcon />
          Download
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-amber-400 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          id="mobile-menu-btn"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden bg-navy/[0.97] border-b border-gold/15 ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-4 list-none">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => { e.preventDefault(); handleNav(href); }}
                className="text-slate-300 hover:text-amber-400 transition-colors duration-300 font-medium text-base block py-1 no-underline"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://play.google.com/store/apps/details?id=com.sk_altamash188.noor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 mt-2 rounded-full font-bold text-navy text-sm no-underline"
              style={{
                background: 'linear-gradient(135deg, #c9a84c, #f0c060, #c9a84c)',
                boxShadow: '0 4px 20px rgba(201,168,76,0.4)',
              }}
              id="mobile-download-btn"
            >
              Download on Play Store
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
