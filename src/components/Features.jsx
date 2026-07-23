import React, { useEffect, useRef } from 'react';
import { IslamicPattern } from './Decorations';

const features = [
  {
    emoji: '🕌',
    title: 'Daily Prayer Times',
    arabic: 'أوقات الصلاة',
    desc: 'Fajr, Dhuhr, Asr, Maghrib, Isha, Imsak & Sunrise — accurate times with multiple calculation methods.',
  },
  {
    emoji: '🧭',
    title: 'Qibla Compass',
    arabic: 'القبلة',
    desc: 'Mathematically precise Qibla direction toward the Kaaba (21.4225°N, 39.8262°E) from your location.',
  },
  {
    emoji: '📖',
    title: 'Quran Reader',
    arabic: 'قرآن كريم',
    desc: 'Full Quran with Ayah of the Day in Arabic, English (Asad) and Urdu (Ahmed Ali) translations.',
  },
  {
    emoji: '🎧',
    title: 'Quran Audio Recitation',
    arabic: 'تلاوة القرآن',
    desc: 'Crystal-clear audio recitation by Sheikh Mishary Al-Afasy with sequential playback and streaming.',
  },
  {
    emoji: '🤲',
    title: 'Duas Collection',
    arabic: 'الأدعية',
    desc: 'Comprehensive collection of authentic daily duas and supplications from the Sunnah.',
  },
  {
    emoji: '📅',
    title: 'Hijri Calendar',
    arabic: 'التقويم الهجري',
    desc: 'Full Islamic Hijri calendar with important Islamic dates and months displayed beautifully.',
  },
  {
    emoji: '🌍',
    title: 'Auto Location',
    arabic: 'الموقع التلقائي',
    desc: 'Automatic GPS-based location detection with city name for precise prayer time calculations.',
  },
  {
    emoji: '⚙️',
    title: 'Multiple Madhabs',
    arabic: 'المذاهب الفقهية',
    desc: "Supports Hanafi & Shafi'i schools plus multiple calculation methods (ISNA, MWL, Karachi & more).",
  },
];

const glassCardStyle = {
  background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
};

const featureIconStyle = {
  background: 'linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))',
};

function FeatureCard({ feature, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="fade-up group backdrop-blur-[20px] border border-gold/15 rounded-[20px] transition-all duration-[400ms] hover:border-gold/45 hover:shadow-[0_8px_40px_rgba(201,168,76,0.15)] hover:-translate-y-1 p-6 flex flex-col"
      style={{ ...glassCardStyle, transitionDelay: `${index * 80}ms` }}
    >
      {/* Icon */}
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center text-[1.6rem] border border-gold/20 mb-4 transition-all duration-300 group-hover:border-gold/50 group-hover:shadow-[0_0_20px_rgba(201,168,76,0.2)]"
        style={featureIconStyle}
      >
        {feature.emoji}
      </div>
      <p className="font-amiri text-amber-300 text-sm mb-1">{feature.arabic}</p>
      <h3 className="text-white font-semibold text-lg mb-3">{feature.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed flex-1">{feature.desc}</p>
    </div>
  );
}

export default function Features() {
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      },
      { threshold: 0.2 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="py-[70px] md:py-[100px] relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #0d1b2a 0%, #0f2535 50%, #0d1b2a 100%)' }}
    >
      <IslamicPattern />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="fade-up text-center mb-16">
          <span className="inline-block text-[0.7rem] font-semibold py-0.5 px-2.5 rounded-[20px] bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 tracking-wider uppercase mb-4">
            About the App
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Everything a Muslim needs,{' '}
            <span className="gold-text">in one app</span>
          </h2>
          <p className="font-amiri text-2xl text-amber-300 mb-6">تطبيق إسلامي شامل ومجاني</p>
          <div
            className="w-20 h-[3px] mx-auto rounded-sm mb-6"
            style={{ background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)' }}
          />
          <p className="text-slate-400 max-w-2xl mx-auto text-base leading-relaxed">
            Noor is a free, open-source Islamic companion app for Android, built with love using
            Expo React Native. It brings essential Islamic tools together in a beautiful,
            intuitive interface.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>

        {/* Bottom quote */}
        <div className="mt-16 text-center">
          <div
            className="inline-block bg-white/[0.04] backdrop-blur-[16px] border border-gold/20 rounded-2xl px-8 py-6 max-w-xl mx-auto"
          >
            <p className="font-amiri text-2xl text-amber-300 mb-3">
              اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ
            </p>
            <p className="text-slate-400 text-sm italic">
              "Allah is the Light of the heavens and the earth." — Quran 24:35
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
