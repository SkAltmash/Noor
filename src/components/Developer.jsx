import React, { useEffect, useRef } from 'react';
import { Package, Code2 } from 'lucide-react';
import { IslamicStar8 } from './Decorations';

const GithubIcon = ({ size = 18, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const PlayIcon = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.18 23.76a2 2 0 0 0 2.05-.19l13-7.5-2.83-2.83-12.22 10.52zm16.12-9.93 3.15-1.82a1.5 1.5 0 0 0 0-2.6L19.3 7.59l-3.12 3.12 3.12 3.12zM3.18.24A2 2 0 0 0 2 2v20a2 2 0 0 0 1.18 1.76L15.4 12 3.18.24zm13 11.88-2.83-2.83L3.18.24l13.12 11.88z" />
  </svg>
);

const stats = [
  { value: 'Free', label: 'Forever Free', icon: '🎁' },
  { value: 'Open', label: 'Open Source', icon: '💻' },
  { value: '7+', label: 'Islamic Features', icon: '🕌' },
  { value: '100%', label: 'Offline Capable', icon: '📴' },
];

const glassCardStyle = {
  background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
};

const btnGoldStyle = {
  background: 'linear-gradient(135deg, #c9a84c 0%, #f0c060 50%, #c9a84c 100%)',
  backgroundSize: '200% auto',
  boxShadow: '0 4px 20px rgba(201,168,76,0.4)',
};

export default function Developer() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    cardsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="developer"
      className="py-[70px] md:py-[100px] relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0d1b2a 0%, #0f2535 50%, #0d1b2a 100%)' }}
    >
      {/* Background stars */}
      <div className="absolute top-10 right-20 opacity-10 pointer-events-none">
        <IslamicStar8 size={150} className="animate-spin-slow" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-10 pointer-events-none">
        <IslamicStar8 size={100} className="animate-spin-slow" style={{ animationDirection: 'reverse' }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Stats row */}
        <div ref={sectionRef} className="fade-up grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="backdrop-blur-[20px] border border-gold/15 rounded-[20px] transition-all duration-[400ms] hover:border-gold/45 hover:shadow-[0_8px_40px_rgba(201,168,76,0.15)] hover:-translate-y-1 p-5 text-center"
              style={{ ...glassCardStyle, transitionDelay: `${i * 80}ms` }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold gold-text mb-1">{stat.value}</div>
              <div className="text-slate-400 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Developer card */}
        <div
          ref={(el) => (cardsRef.current[0] = el)}
          className="fade-up backdrop-blur-[20px] border border-gold/15 rounded-[20px] transition-all duration-[400ms] hover:border-gold/45 hover:shadow-[0_8px_40px_rgba(201,168,76,0.15)] p-8 lg:p-12 text-center"
          style={{ ...glassCardStyle, transitionDelay: '200ms' }}
        >
          {/* Avatar with glow */}
          <div className="relative inline-block mb-6">
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center text-4xl font-bold mx-auto border-2 border-gold/40"
              style={{
                background: 'linear-gradient(135deg, rgba(201,168,76,0.2), rgba(16,185,129,0.1))',
                boxShadow: '0 0 40px rgba(201,168,76,0.2)',
              }}
            >
              🧑‍💻
            </div>
            <div
              className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full border-2 border-navy flex items-center justify-center text-sm"
              style={{ background: '#24292e' }}
            >
              <GithubIcon size={14} className="text-white" />
            </div>
          </div>

          <h2 className="text-3xl font-bold text-white mb-1">Sk Altamash</h2>
          <p className="text-amber-300 font-amiri text-lg mb-1">مطور التطبيق</p>
          <p className="text-slate-400 text-sm mb-6">Independent Android Developer · Expo React Native</p>

          {/* Package ID */}
          <div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl mb-8 font-mono text-sm text-gold border border-gold/15"
            style={{ background: 'rgba(0,0,0,0.3)' }}
          >
            <Package size={14} />
            com.sk_altamash188.noor
          </div>

          {/* Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://github.com/SkAltmash"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-[13px] rounded-full font-semibold text-gold cursor-pointer text-base no-underline border-2 border-gold/50 bg-transparent transition-all duration-[400ms] hover:border-gold hover:bg-gold/10 hover:shadow-[0_4px_20px_rgba(201,168,76,0.25)] hover:-translate-y-0.5"
              id="dev-github-link"
            >
              <GithubIcon size={18} />
              GitHub: SkAltmash
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.sk_altamash188.noor"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-navy cursor-pointer text-base no-underline transition-all duration-[400ms] hover:-translate-y-0.5 hover:scale-[1.03]"
              style={btnGoldStyle}
              id="dev-playstore-link"
            >
              <PlayIcon />
              Google Play Store
            </a>
          </div>
        </div>

        {/* Open source note */}
        <div
          ref={(el) => (cardsRef.current[1] = el)}
          className="fade-up mt-8 bg-white/[0.04] backdrop-blur-[16px] border border-gold/20 rounded-2xl p-6 text-center"
          style={{ transitionDelay: '350ms' }}
        >
          <Code2 className="text-amber-400 mx-auto mb-3" size={28} />
          <h3 className="text-white font-semibold text-lg mb-2">Open Source & Free Forever</h3>
          <p className="text-slate-400 text-sm max-w-lg mx-auto leading-relaxed">
            Noor is completely free to use, with no ads and no subscriptions. The source code is
            open for the community to learn from, contribute to, and build upon. Made with ❤️ for
            the Muslim community.
          </p>
        </div>
      </div>
    </section>
  );
}
