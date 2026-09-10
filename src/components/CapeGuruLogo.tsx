import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  textVariant?: 'white' | 'dark' | 'gold';
  variant?: 'full' | 'shieldOnly';
}

export const CapeGuruLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  textVariant = 'white',
  variant = 'full',
}) => {
  const sizeMap = {
    sm: { shield: 32, text: 'text-lg', subtext: 'text-[9px]' },
    md: { shield: 44, text: 'text-xl', subtext: 'text-[10px]' },
    lg: { shield: 58, text: 'text-2xl', subtext: 'text-xs' },
    xl: { shield: 76, text: 'text-3xl', subtext: 'text-sm' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Precision Vector Shield Logo based directly on logo.jpg */}
      <svg
        width={currentSize.shield}
        height={currentSize.shield * 1.1}
        viewBox="0 0 100 115"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 transition-transform duration-300 hover:scale-105 drop-shadow-md"
        aria-label="Cape Guru Logo Crest"
      >
        <defs>
          <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#132E58" />
            <stop offset="60%" stopColor="#0B2040" />
            <stop offset="100%" stopColor="#07142A" />
          </linearGradient>
          <linearGradient id="goldBorder" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FDE047" />
            <stop offset="50%" stopColor="#EAB308" />
            <stop offset="100%" stopColor="#B45309" />
          </linearGradient>
          <filter id="glow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.4" />
          </filter>
        </defs>

        {/* Outer Shield Boundary */}
        <path
          d="M50 3 L92 20 C92 20 95 68 50 110 C5 68 8 20 8 20 L50 3 Z"
          fill="url(#shieldGrad)"
          stroke="url(#goldBorder)"
          strokeWidth="2.5"
          strokeLinejoin="round"
          filter="url(#glow)"
        />

        {/* Quadrant Dividing Cross (White, matching logo.jpg) */}
        {/* Vertical stem */}
        <path
          d="M50 9 L50 100"
          stroke="#FFFFFF"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        {/* Horizontal crossbar */}
        <path
          d="M14 48 L86 48"
          stroke="#FFFFFF"
          strokeWidth="3.2"
          strokeLinecap="round"
        />

        {/* Quadrant 1 (Top Left): Snowflake (Aircon / Climate) */}
        <g transform="translate(30, 29) scale(0.75)">
          {/* Main 6-spoke snowflake */}
          <line x1="0" y1="-14" x2="0" y2="14" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" />
          <line x1="-12" y1="-7" x2="12" y2="7" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" />
          <line x1="-12" y1="7" x2="12" y2="-7" stroke="#FFFFFF" strokeWidth="2.4" strokeLinecap="round" />
          {/* Snowflake V barbs */}
          <path d="M-4 -9 L0 -6 L4 -9" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M-4 9 L0 6 L4 9" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M-9 -3 L-6 0 L-9 3" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M9 -3 L6 0 L9 3" fill="none" stroke="#FFFFFF" strokeWidth="1.8" strokeLinecap="round" />
        </g>

        {/* Quadrant 2 (Top Right): WiFi / Fibre Signal Waves */}
        <g transform="translate(70, 31) scale(0.8)">
          <path
            d="M-13 7 C-13 -3 0 -13 14 -13"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M-8 8 C-8 1 1 -8 11 -8"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M-3 9 C-3 5 4 -2 8 -2"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          <circle cx="2" cy="7" r="2.2" fill="#FFFFFF" />
        </g>

        {/* Quadrant 3 (Bottom Left): Satellite Camera / Lens / Dish Symbol */}
        <g transform="translate(30, 70) scale(0.85)">
          <circle cx="0" cy="0" r="13" stroke="#FFFFFF" strokeWidth="2.6" fill="none" />
          <circle cx="0" cy="0" r="7.5" stroke="#FFFFFF" strokeWidth="2" fill="none" />
          <circle cx="0" cy="0" r="3.2" fill="#FFFFFF" />
          {/* Small orbital notch indicator */}
          <circle cx="4" cy="-4" r="1.4" fill="#67E8F9" />
        </g>

        {/* Quadrant 4 (Bottom Right): Fresh Eco Leaf (Climate & Air Purity) */}
        <g transform="translate(70, 68) scale(0.85)">
          {/* Leaf outline with curved tip */}
          <path
            d="M-10 13 C-10 -2 1 -11 13 -11 C13 4 5 13 -10 13 Z"
            fill="#FFFFFF"
          />
          {/* Leaf center spine cutout */}
          <path
            d="M-8 11 C-1 4 5 -3 11 -9"
            fill="none"
            stroke="#0B2040"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M-2 5 L-5 2"
            fill="none"
            stroke="#0B2040"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path
            d="M3 0 L1 -3"
            fill="none"
            stroke="#0B2040"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </g>
      </svg>

      {/* Brand Text Lockup */}
      {showText && variant === 'full' && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-heading font-black tracking-tight uppercase leading-none ${currentSize.text} ${
                textVariant === 'gold'
                  ? 'text-amber-500'
                  : textVariant === 'white'
                  ? 'text-white'
                  : 'text-slate-900'
              }`}
            >
              CAPE<span className="text-blue-600">GURU</span>
            </span>
          </div>
          <span
            className={`font-medium tracking-wider uppercase text-slate-500 ${currentSize.subtext} mt-1`}
          >
            Satellite · Aircon · Appliances
          </span>
        </div>
      )}
    </div>
  );
};
