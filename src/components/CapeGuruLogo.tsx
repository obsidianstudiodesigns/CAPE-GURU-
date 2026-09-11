import React from 'react';
import { logoImg } from '../assets/images';

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
  textVariant = 'dark',
  variant = 'full',
}) => {
  const sizeMap = {
    sm: { imgClass: 'h-8 w-8', text: 'text-lg', subtext: 'text-[9px]' },
    md: { imgClass: 'h-11 w-11', text: 'text-xl', subtext: 'text-[10px]' },
    lg: { imgClass: 'h-14 w-14', text: 'text-2xl', subtext: 'text-xs' },
    xl: { imgClass: 'h-20 w-20', text: 'text-3xl', subtext: 'text-sm' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Official Cape Guru Logo Image (logo.jpg) */}
      <img
        src={logoImg}
        alt="Cape Guru Official Logo"
        className={`${currentSize.imgClass} object-contain rounded-lg shadow-sm shrink-0`}
        referrerPolicy="no-referrer"
      />

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
            className={`font-medium tracking-wider uppercase ${
              textVariant === 'white' ? 'text-slate-400' : 'text-slate-500'
            } ${currentSize.subtext} mt-1`}
          >
            Satellite · Aircon · Appliances
          </span>
        </div>
      )}
    </div>
  );
};
