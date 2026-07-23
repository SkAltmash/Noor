import React, { useEffect, useRef } from 'react';
import { ExternalLink, Code2, Globe, Volume2, Wifi, MapPin } from 'lucide-react';

const apis = [
  {
    icon: <Globe size={22} className="text-amber-400" />,
    name: 'Al-Adhan API',
    purpose: 'Prayer Times Calculation',
    desc: 'Provides accurate daily prayer times based on GPS coordinates and chosen calculation method.',
    url: 'https://api.aladhan.com/v1/timings',
    displayUrl: 'api.aladhan.com/v1/timings',
    badge: 'REST API',
    badgeColor: 'amber',
    endpoints: ['GET /timings', 'GET /calendar'],
  },
  {
    icon: <Code2 size={22} className="text-emerald-400" />,
    name: 'Al-Quran Cloud',
    purpose: 'Quran Text & Ayah of the Day',
    desc: 'Full Quran in Arabic, English (en.asad) and Urdu (ur.ahmedali) translations. Used for Ayah of the Day.',
    url: 'https://api.alquran.cloud/v1/ayah/1',
    displayUrl: 'api.alquran.cloud/v1/ayah/{id}',
    badge: 'REST API',
    badgeColor: 'emerald',
    endpoints: ['GET /ayah/{id}', 'GET /surah/{id}'],
  },
  {
    icon: <Volume2 size={22} className="text-sky-400" />,
    name: 'Al-Quran Audio API',
    purpose: 'Quran Recitation Streaming',
    desc: 'Streams audio recitation of each Ayah. Default reciter: Sheikh Mishary Al-Afasy (ar.alafasy).',
    url: 'https://api.alquran.cloud/v1/ayah/1/ar.alafasy',
    displayUrl: 'api.alquran.cloud/v1/ayah/{ref}/{reciter}',
    badge: 'Audio Stream',
    badgeColor: 'sky',
    endpoints: ['GET /ayah/{ref}/{reciter}'],
  },
  {
    icon: <MapPin size={22} className="text-purple-400" />,
    name: 'Expo Location',
    purpose: 'GPS & Reverse Geocoding',
    desc: 'Converts GPS coordinates into city name for prayer time localization and Qibla compass.',
    url: 'https://docs.expo.dev/versions/latest/sdk/location/',
    displayUrl: 'Built-in Expo SDK',
    badge: 'Expo SDK',
    badgeColor: 'purple',
    endpoints: ['getCurrentPositionAsync()', 'reverseGeocodeAsync()'],
  },
  {
    icon: <Volume2 size={22} className="text-rose-400" />,
    name: 'Expo AV',
    purpose: 'Audio Playback Engine',
    desc: 'Handles Quran audio playback, sequential recitation, pause/resume and volume control.',
    url: 'https://docs.expo.dev/versions/latest/sdk/av/',
    displayUrl: 'Built-in Expo SDK',
    badge: 'Expo SDK',
    badgeColor: 'rose',
    endpoints: ['Audio.Sound.createAsync()', 'sound.playAsync()'],
  },
  {
    icon: <Wifi size={22} className="text-teal-400" />,
    name: 'Expo Network',
    purpose: 'Internet Connection Check',
    desc: 'Checks internet availability before streaming audio to prevent errors on offline devices.',
    url: 'https://docs.expo.dev/versions/latest/sdk/network/',
    displayUrl: 'Built-in Expo SDK',
    badge: 'Expo SDK',
    badgeColor: 'teal',
    endpoints: ['getNetworkStateAsync()'],
  },
];

const badgeClasses = {
  amber: 'bg-amber-500/10 border-amber-500/30 text-amber-400',
  emerald: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400',
  sky: 'bg-sky-500/10 border-sky-500/30 text-sky-400',
  purple: 'bg-purple-500/10 border-purple-500/30 text-purple-400',
  rose: 'bg-rose-500/10 border-rose-500/30 text-rose-400',
  teal: 'bg-teal-500/10 border-teal-500/30 text-teal-400',
};

const iconBgClasses = {
  amber: 'bg-amber-500/10 border-amber-500/20',
  emerald: 'bg-emerald-500/10 border-emerald-500/20',
  sky: 'bg-sky-500/10 border-sky-500/20',
  purple: 'bg-purple-500/10 border-purple-500/20',
  rose: 'bg-rose-500/10 border-rose-500/20',
  teal: 'bg-teal-500/10 border-teal-500/20',
};

const glassCardStyle = {
  background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))',
};

function ApiCard({ api, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={cardRef}
      className="fade-up group backdrop-blur-[20px] border border-gold/15 rounded-[20px] transition-all duration-[400ms] hover:border-gold/45 hover:shadow-[0_8px_40px_rgba(201,168,76,0.15)] hover:-translate-y-1 p-6 flex flex-col gap-4"
      style={{ ...glassCardStyle, transitionDelay: `${index * 100}ms` }}
      id={`api-card-${index}`}
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className={`w-11 h-11 rounded-xl flex items-center justify-center border ${iconBgClasses[api.badgeColor]}`}>
          {api.icon}
        </div>
        <a
          href={api.url}
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-slate-500 hover:text-amber-400"
          title="Visit API"
        >
          <ExternalLink size={16} />
        </a>
      </div>

      {/* Name & Badge */}
      <div>
        <div className="flex items-center gap-2 mb-1 flex-wrap">
          <h3 className="text-white font-bold text-base">{api.name}</h3>
          <span className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${badgeClasses[api.badgeColor]}`}>
            {api.badge}
          </span>
        </div>
        <p className="text-amber-300/80 text-xs font-medium">{api.purpose}</p>
      </div>

      {/* Description */}
      <p className="text-slate-400 text-sm leading-relaxed flex-1">{api.desc}</p>

      {/* Endpoints */}
      <div className="space-y-1.5">
        {api.endpoints.map((ep) => (
          <div
            key={ep}
            className="text-xs font-mono bg-black/30 text-emerald-400/90 px-3 py-1.5 rounded-lg border border-white/5"
          >
            {ep}
          </div>
        ))}
      </div>

      {/* URL */}
      <a
        href={api.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-slate-500 hover:text-amber-400 transition-colors duration-300 font-mono truncate no-underline"
      >
        {api.displayUrl}
      </a>
    </div>
  );
}

export default function ApiSection() {
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
      id="apis"
      className="py-[70px] md:py-[100px] relative overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at top left, #1a3a4a 0%, #0d1b2a 50%, #0a141f 100%)' }}
    >
      {/* Decorative grid lines */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="fade-up text-center mb-16">
          <span className="inline-block text-[0.7rem] font-semibold py-0.5 px-2.5 rounded-[20px] bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 tracking-wider uppercase mb-4">
            Tech Stack
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            APIs &amp;{' '}
            <span className="gold-text">Technologies</span>
          </h2>
          <div
            className="w-20 h-[3px] mx-auto rounded-sm mb-6"
            style={{ background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)' }}
          />
          <p className="text-slate-400 max-w-xl mx-auto text-base">
            Noor leverages trusted open-source APIs and the Expo SDK to deliver accurate,
            real-time Islamic content.
          </p>
        </div>

        {/* API Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {apis.map((api, i) => (
            <ApiCard key={api.name} api={api} index={i} />
          ))}
        </div>

        {/* Tech stack pills */}
        <div className="mt-16 text-center">
          <p className="text-slate-500 text-sm mb-6 uppercase tracking-widest">Built with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Expo React Native',
              'JavaScript (ES6+)',
              'Expo Router',
              'React Native Reanimated',
              'AsyncStorage',
              'Expo Sensors',
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full text-sm font-medium text-slate-300 border border-gold/20 bg-white/[0.03]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
