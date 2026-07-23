import React, { useEffect } from 'react';

// Islamic geometric SVG background pattern
const IslamicPattern = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern id="islamic-star" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
        {/* 8-pointed star */}
        <polygon
          points="40,5 47,28 70,20 55,38 75,50 52,52 55,75 40,60 25,75 28,52 5,50 25,38 10,20 33,28"
          fill="none"
          stroke="#c9a84c"
          strokeWidth="0.8"
          opacity="0.6"
        />
        <circle cx="40" cy="40" r="6" fill="none" stroke="#c9a84c" strokeWidth="0.5" opacity="0.4" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#islamic-star)" />
  </svg>
);

// Floating star particles
const StarParticles = () => {
  const stars = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    delay: Math.random() * 4,
    duration: Math.random() * 3 + 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-amber-300"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: 0.4,
            animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
};

// Crescent moon SVG
const CrescentMoon = ({ className = '', size = 200 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="moonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f0c060" stopOpacity="0.9" />
        <stop offset="50%" stopColor="#c9a84c" stopOpacity="0.8" />
        <stop offset="100%" stopColor="#8a6e2f" stopOpacity="0.6" />
      </linearGradient>
      <filter id="moonGlow">
        <feGaussianBlur stdDeviation="4" result="coloredBlur" />
        <feMerge>
          <feMergeNode in="coloredBlur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    {/* Outer circle */}
    <circle cx="90" cy="100" r="70" fill="url(#moonGrad)" filter="url(#moonGlow)" />
    {/* Inner circle to cut crescent */}
    <circle cx="115" cy="90" r="62" fill="#0d1b2a" />
    {/* Stars near crescent */}
    <polygon points="155,50 157,56 163,56 158,60 160,66 155,62 150,66 152,60 147,56 153,56"
      fill="#f0c060" opacity="0.9" />
    <polygon points="170,80 171.5,84.5 176,84.5 172.5,87 174,91.5 170,89 166,91.5 167.5,87 164,84.5 168.5,84.5"
      fill="#f0c060" opacity="0.7" transform="scale(0.7) translate(70, 30)" />
    <circle cx="170" cy="65" r="2" fill="#f0c060" opacity="0.6" />
    <circle cx="160" cy="85" r="1.5" fill="#f0c060" opacity="0.5" />
  </svg>
);

// Large decorative star
const IslamicStar8 = ({ size = 120, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 120 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="starGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#f0c060" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#c9a84c" stopOpacity="0.2" />
      </linearGradient>
    </defs>
    <polygon
      points="60,5 67,40 100,28 80,55 115,60 80,65 100,92 67,80 60,115 53,80 20,92 40,65 5,60 40,55 20,28 53,40"
      fill="none"
      stroke="url(#starGrad)"
      strokeWidth="1.5"
    />
    <polygon
      points="60,20 65,45 88,36 74,55 97,60 74,65 88,84 65,75 60,100 55,75 32,84 46,65 23,60 46,55 32,36 55,45"
      fill="none"
      stroke="#c9a84c"
      strokeWidth="0.8"
      opacity="0.4"
    />
    <circle cx="60" cy="60" r="8" fill="none" stroke="#c9a84c" strokeWidth="1" opacity="0.5" />
    <circle cx="60" cy="60" r="3" fill="#c9a84c" opacity="0.4" />
  </svg>
);

export { IslamicPattern, StarParticles, CrescentMoon, IslamicStar8 };
