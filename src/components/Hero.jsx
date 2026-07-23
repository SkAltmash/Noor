import React from 'react';
import { motion } from 'framer-motion';
import { IslamicPattern, StarParticles, CrescentMoon, IslamicStar8 } from './Decorations';

const PlayIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.18 23.76a2 2 0 0 0 2.05-.19l13-7.5-2.83-2.83-12.22 10.52zm16.12-9.93 3.15-1.82a1.5 1.5 0 0 0 0-2.6L19.3 7.59l-3.12 3.12 3.12 3.12zM3.18.24A2 2 0 0 0 2 2v20a2 2 0 0 0 1.18 1.76L15.4 12 3.18.24zm13 11.88-2.83-2.83L3.18.24l13.12 11.88z" />
  </svg>
);

const GithubIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

// Shared button styles
const btnGoldStyle = {
  background: 'linear-gradient(135deg, #c9a84c 0%, #f0c060 50%, #c9a84c 100%)',
  backgroundSize: '200% auto',
  boxShadow: '0 4px 20px rgba(201,168,76,0.4)',
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at top left, #1a3a4a 0%, #0d1b2a 50%, #0a141f 100%)' }}
    >
      {/* Background layers */}
      <IslamicPattern />
      <StarParticles />

      {/* Radial glow spots */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #c9a84c, transparent 70%)' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-[0.08] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #10b981, transparent 70%)' }}
      />

      {/* Floating crescent moon */}
      <div className="absolute top-16 right-10 lg:right-24 animate-float opacity-70 animate-crescent-glow">
        <CrescentMoon size={160} />
      </div>

      {/* Spinning 8-pointed stars */}
      <div className="absolute bottom-20 left-8 lg:left-16 opacity-30">
        <IslamicStar8 size={100} className="animate-spin-slow" />
      </div>
      <div className="absolute top-32 left-4 lg:left-20 opacity-20">
        <IslamicStar8 size={60} className="animate-spin-slow" style={{ animationDirection: 'reverse' }} />
      </div>

      {/* Main hero content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div
              className="absolute inset-0 rounded-full blur-2xl opacity-40"
              style={{ background: 'radial-gradient(circle, #c9a84c, transparent)' }}
            />
            <img
              src="/logo.png"
              alt="Noor App Logo"
              className="relative w-28 h-28 lg:w-36 lg:h-36 object-contain animate-float drop-shadow-2xl"
              style={{ filter: 'drop-shadow(0 0 30px rgba(201, 168, 76, 0.5))' }}
            />
          </div>
        </motion.div>

        {/* Arabic Bismillah */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="font-amiri text-2xl lg:text-3xl gold-text mb-4"
        >
          بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
        </motion.p>

        {/* App name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="mb-6"
        >
          <h1 className="font-amiri text-7xl lg:text-9xl gold-text font-bold leading-none">
            نور
          </h1>
          <p className="text-white/80 text-xl lg:text-2xl font-light tracking-[0.3em] mt-2">
            N O O R
          </p>
        </motion.div>

        {/* Meaning badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8 bg-gold/[0.12] border border-gold/30"
        >
          <span className="text-amber-300 text-sm font-medium tracking-wider">✦ Meaning: "Light" ✦</span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-slate-300 text-lg lg:text-xl font-light max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Your daily Islamic companion — Prayer times, Quran, Qibla & more.
          <br className="hidden lg:block" />
          <span className="font-amiri text-amber-300 text-lg"> Free & Open Source for Android</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://play.google.com/store/apps/details?id=com.sk_altamash188.noor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-navy cursor-pointer text-base no-underline transition-all duration-[400ms] hover:-translate-y-0.5 hover:scale-[1.03]"
            style={btnGoldStyle}
            id="hero-playstore-btn"
          >
            <PlayIcon />
            Download on Google Play
          </a>
          <a
            href="https://github.com/SkAltmash"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-[13px] rounded-full font-semibold text-gold cursor-pointer text-base no-underline border-2 border-gold/50 bg-transparent transition-all duration-[400ms] hover:border-gold hover:bg-gold/10 hover:shadow-[0_4px_20px_rgba(201,168,76,0.25)] hover:-translate-y-0.5"
            id="hero-github-btn"
          >
            <GithubIcon />
            View on GitHub
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-slate-500 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-amber-400/60 to-transparent" />
          <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
