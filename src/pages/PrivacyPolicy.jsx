import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IslamicPattern } from '../components/Decorations';

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h2 className="text-xl font-bold text-amber-300 mb-4 flex items-center gap-2">
      <span className="w-1 h-6 rounded-full bg-amber-400 inline-block" />
      {title}
    </h2>
    <div className="text-slate-400 text-sm leading-relaxed space-y-3">{children}</div>
  </div>
);

export default function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'Privacy Policy — Noor (نور)';
  }, []);

  return (
    <div
      className="min-h-screen relative"
      style={{ background: 'radial-gradient(ellipse at top left, #1a3a4a 0%, #0d1b2a 55%, #0a141f 100%)' }}
    >
      <IslamicPattern />

      {/* Top bar */}
      <div
        className="sticky top-0 z-50 backdrop-blur-[20px] border-b border-amber-400/10"
        style={{ background: 'rgba(13,27,42,0.85)' }}
      >
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 text-slate-400 hover:text-amber-400 transition-colors duration-300 no-underline text-sm font-medium group"
          >
            <svg className="w-4 h-4 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
          <div className="w-px h-4 bg-white/10" />
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Noor" className="w-6 h-6 object-contain" />
            <span className="text-white font-semibold text-sm">Noor</span>
            <span className="text-slate-500 text-sm">· Privacy Policy</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/25 text-amber-300 text-xs font-medium mb-6">
            ✦ Last Updated: July 23, 2026 ✦
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Privacy <span className="gold-text">Policy</span>
          </h1>
          <p className="font-amiri text-2xl text-amber-300 mb-6">سياسة الخصوصية</p>
          <div
            className="w-20 h-[3px] mx-auto rounded-sm mb-6"
            style={{ background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)' }}
          />
          <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            This Privacy Policy describes how the <strong className="text-white">Noor (نور)</strong> app
            collects, uses, and protects your information. We are committed to your privacy.
          </p>
        </div>

        {/* Policy card */}
        <div
          className="backdrop-blur-[20px] border border-amber-400/15 rounded-[24px] p-8 lg:p-12"
          style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))' }}
        >

          <Section title="1. App Overview">
            <p>
              <strong className="text-white">Noor (نور)</strong> is a free, open-source Islamic companion app developed
              by <strong className="text-white">Sk Altamash</strong> (GitHub: SkAltmash).
              The app is available for Android via the Google Play Store under the package
              identifier <span className="font-mono text-emerald-400 text-xs bg-black/30 px-2 py-0.5 rounded">com.sk_altamash188.noor</span>.
            </p>
            <p>
              Noor provides Islamic features including Prayer Times, Quran Reader, Qibla Compass,
              Audio Recitation, Duas, and Hijri Calendar — all for free, with no ads.
            </p>
          </Section>

          <Section title="2. Information We Collect">
            <p>Noor collects only the minimum data required to provide its features:</p>
            <div className="space-y-4 mt-2">
              {[
                {
                  icon: '📍',
                  title: 'Location Data (GPS)',
                  desc: 'Used to calculate accurate daily prayer times for your city and to determine your Qibla direction toward the Kaaba. Location is accessed only when the app is in use and is never stored on external servers.',
                  tag: 'Used locally only',
                  tagColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
                },
                {
                  icon: '🌐',
                  title: 'Internet Connectivity Status',
                  desc: 'Noor checks if your device is connected to the internet before attempting to stream Quran audio recitation. This prevents playback errors on offline devices.',
                  tag: 'Read-only check',
                  tagColor: 'text-sky-400 bg-sky-500/10 border-sky-500/30',
                },
                {
                  icon: '⚙️',
                  title: 'User Preferences',
                  desc: 'Your chosen prayer calculation method (e.g., ISNA, MWL, Karachi) and juristic method (Hanafi / Shafi\'i) are stored locally on your device using AsyncStorage. This data never leaves your device.',
                  tag: 'Stored locally',
                  tagColor: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-4 rounded-xl border border-white/5"
                  style={{ background: 'rgba(0,0,0,0.2)' }}
                >
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span className="text-white font-semibold text-sm">{item.title}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full border font-medium ${item.tagColor}`}>
                        {item.tag}
                      </span>
                    </div>
                    <p>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="3. Third-Party APIs Used">
            <p>Noor fetches Islamic content from the following trusted third-party APIs:</p>
            <div className="overflow-x-auto mt-3 rounded-xl border border-white/5">
              <table className="w-full text-xs">
                <thead>
                  <tr style={{ background: 'rgba(201,168,76,0.08)' }}>
                    <th className="text-left text-amber-300 font-semibold px-4 py-3 border-b border-white/5">API</th>
                    <th className="text-left text-amber-300 font-semibold px-4 py-3 border-b border-white/5">Purpose</th>
                    <th className="text-left text-amber-300 font-semibold px-4 py-3 border-b border-white/5 hidden sm:table-cell">Data Sent</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { api: 'Al-Adhan API', purpose: 'Prayer time calculation', data: 'GPS coordinates, calculation method' },
                    { api: 'Al-Quran Cloud', purpose: 'Quran text (Arabic, English, Urdu)', data: 'Ayah/Surah index only' },
                    { api: 'Al-Quran Audio API', purpose: 'Quran audio streaming', data: 'Ayah reference, reciter name' },
                  ].map((row, i) => (
                    <tr key={row.api} style={{ background: i % 2 === 0 ? 'rgba(0,0,0,0.2)' : 'transparent' }}>
                      <td className="px-4 py-3 text-white font-mono">{row.api}</td>
                      <td className="px-4 py-3 text-slate-400">{row.purpose}</td>
                      <td className="px-4 py-3 text-slate-500 hidden sm:table-cell">{row.data}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3">
              These APIs are queried over HTTPS. No personal identifiers (name, email, account) are
              ever transmitted. Only the minimum technical data needed (e.g., GPS coordinates for
              prayer times) is sent.
            </p>
          </Section>

          <Section title="4. Data We Do NOT Collect">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'No account or registration required',
                'No name, email or phone number',
                'No advertising identifiers or tracking',
                'No usage analytics or crash reporting',
                'No data sold to third parties',
                'No data shared with advertisers',
                'No background location tracking',
                'No microphone or camera access',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm">
                  <span className="text-emerald-400 text-base flex-shrink-0">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Section>

          <Section title="5. Permissions Requested">
            <p>The app requests only the following Android permissions:</p>
            <div className="space-y-2 mt-2">
              {[
                { perm: 'ACCESS_FINE_LOCATION / ACCESS_COARSE_LOCATION', reason: 'To fetch GPS coordinates for prayer times and Qibla direction' },
                { perm: 'INTERNET', reason: 'To fetch prayer times, Quran text, and stream audio recitation' },
                { perm: 'ACCESS_NETWORK_STATE', reason: 'To check internet connectivity before attempting audio streaming' },
              ].map((p) => (
                <div
                  key={p.perm}
                  className="p-3 rounded-lg border border-white/5 flex flex-col sm:flex-row sm:items-center gap-2"
                  style={{ background: 'rgba(0,0,0,0.2)' }}
                >
                  <span className="font-mono text-emerald-400 text-xs whitespace-nowrap">{p.perm}</span>
                  <span className="text-slate-500 hidden sm:inline">—</span>
                  <span className="text-xs">{p.reason}</span>
                </div>
              ))}
            </div>
          </Section>

          <Section title="6. Data Storage & Security">
            <p>
              All user preferences (calculation method, madhab selection, city cache) are stored
              exclusively on your device using React Native's <span className="font-mono text-emerald-400 text-xs">AsyncStorage</span>.
              This data is never uploaded to any server and remains fully under your control.
            </p>
            <p>
              Network requests to third-party APIs are made over encrypted HTTPS connections.
              The app does not operate any backend server or database.
            </p>
          </Section>

          <Section title="7. Children's Privacy">
            <p>
              Noor is suitable for all ages and is designed as a family-friendly Islamic app.
              We do not knowingly collect any personal data from children under 13.
              Since no personal data is collected from any user, there is no risk of children's
              data being misused.
            </p>
          </Section>

          <Section title="8. Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Any changes will be reflected
              with an updated "Last Updated" date at the top of this page. Continued use of the
              app after changes constitutes acceptance of the updated policy.
            </p>
          </Section>

          <Section title="9. Contact Us">
            <p>
              If you have any questions about this Privacy Policy or the Noor app, please contact
              the developer:
            </p>
            <div
              className="mt-3 p-4 rounded-xl border border-amber-400/20 inline-flex flex-col gap-2"
              style={{ background: 'rgba(201,168,76,0.05)' }}
            >
              <div className="flex items-center gap-2 text-sm">
                <span className="text-amber-400">👤</span>
                <span className="text-white font-semibold">Sk Altamash</span>
              </div>
              <a
                href="https://github.com/SkAltmash"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-amber-400 transition-colors no-underline"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
                github.com/SkAltmash
              </a>
              <div className="flex items-center gap-2 text-xs text-slate-500 font-mono">
                <span>📦</span>
                <span>com.sk_altamash188.noor</span>
              </div>
            </div>
          </Section>

        </div>

        {/* Footer note */}
        <div className="text-center mt-10 text-slate-600 text-xs">
          <p>© {new Date().getFullYear()} Noor App · Sk Altamash · All rights reserved</p>
          <p className="font-amiri text-amber-300/30 text-base mt-2">اللَّهُ نُورُ السَّمَاوَاتِ وَالْأَرْضِ</p>
        </div>

        {/* Back to home button */}
        <div className="text-center mt-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-bold text-navy cursor-pointer text-base no-underline transition-all duration-[400ms] hover:-translate-y-0.5 hover:scale-[1.03]"
            style={{
              background: 'linear-gradient(135deg, #c9a84c 0%, #f0c060 50%, #c9a84c 100%)',
              boxShadow: '0 4px 20px rgba(201,168,76,0.4)',
            }}
          >
            ← Back to Noor Home
          </Link>
        </div>
      </div>
    </div>
  );
}
