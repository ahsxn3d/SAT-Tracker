'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Check } from 'lucide-react';

export interface MatchaSelectOption {
  value: string | number;
  label: string;
  badge?: string;
  sublabel?: string;
  icon?: React.ReactNode;
}

export interface MatchaSelectProps {
  value: string | number;
  onChange: (value: any) => void;
  options: MatchaSelectOption[];
  icon?: React.ReactNode;
  placeholder?: string;
  className?: string;
  menuClassName?: string;
  variant?: 'matcha' | 'dark' | 'white';
  size?: 'sm' | 'md';
  align?: 'left' | 'right';
  fullWidth?: boolean;
}

export const MatchaSelect: React.FC<MatchaSelectProps> = ({
  value,
  onChange,
  options,
  icon,
  placeholder = 'Select option...',
  className = '',
  menuClassName = '',
  variant = 'matcha',
  size = 'sm',
  align = 'left',
  fullWidth = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => String(opt.value) === String(value));

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const isDark = variant === 'dark';
  const isWhite = variant === 'white';

  const triggerBaseClasses = isDark
    ? 'bg-[#152713] text-[#e8f3e5] border-2 border-[#2d4d28] hover:border-emerald-500 hover:bg-[#1a3318]'
    : isWhite
    ? 'bg-matcha-input text-[#122810] border-2 border-[#a6c4a1] hover:border-emerald-600 hover:bg-matcha-sub backdrop-blur-md'
    : 'bg-matcha-input text-[#122810] border-2 border-[#a6c4a1] hover:border-emerald-600 hover:bg-matcha-sub shadow-xs backdrop-blur-md';

  const sizeClasses = size === 'sm' ? 'px-3 py-2 text-xs' : 'px-3.5 py-2.5 text-xs sm:text-sm';

  return (
    <div
      ref={containerRef}
      className={`relative inline-block text-left ${fullWidth ? 'w-full' : ''}`}
    >
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={`w-full flex items-center justify-between gap-2 rounded-xl font-bold font-['JetBrains_Mono'] transition-all duration-150 shadow-xs cursor-pointer select-none active:scale-[0.99] ${triggerBaseClasses} ${sizeClasses} ${className}`}
      >
        <span className="flex items-center gap-1.5 truncate">
          {icon && <span className="shrink-0">{icon}</span>}
          <span className="truncate">{selectedOption ? selectedOption.label : placeholder}</span>
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 shrink-0 transition-transform duration-200 text-[#264e22] ${
            isDark ? 'text-emerald-400' : 'text-[#264e22]'
          } ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Popover Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className={`absolute z-50 mt-1.5 max-h-72 ${
              fullWidth ? 'w-full min-w-full' : 'w-max min-w-[220px] max-w-[360px]'
            } overflow-y-auto scrollbar-thin rounded-2xl p-1.5 shadow-grave border-2 backdrop-blur-2xl ${
              align === 'right' ? 'right-0' : 'left-0'
            } ${
              isDark
                ? 'bg-[#0f1f0e]/95 border-[#284824] shadow-black/60 text-slate-100'
                : 'bg-matcha-modal border-[#a6c4a1] shadow-grave text-[#122810]'
            } ${menuClassName}`}
            role="listbox"
          >
            {options.map((option) => {
              const isSelected = String(option.value) === String(value);

              return (
                <button
                  key={String(option.value)}
                  type="button"
                  onClick={() => {
                    onChange(option.value);
                    setIsOpen(false);
                  }}
                  role="option"
                  aria-selected={isSelected}
                  className={`w-full flex items-center justify-between gap-2.5 px-3 py-2.5 rounded-xl text-left text-xs font-bold font-['JetBrains_Mono'] transition-all duration-150 cursor-pointer select-none my-0.5 active:scale-[0.99] ${
                    isSelected
                      ? isDark
                        ? 'bg-emerald-600 text-white font-black shadow-xs'
                        : 'bg-[#122810] text-white font-black shadow-xs'
                      : isDark
                      ? 'hover:bg-[#1a3518] text-[#d6ebd1]'
                      : 'hover:bg-matcha-sub text-[#122810]'
                  }`}
                >
                  <span className="flex items-center gap-2 truncate">
                    {option.icon && <span className="shrink-0">{option.icon}</span>}
                    <span className="truncate">{option.label}</span>
                  </span>

                  <span className="flex items-center gap-1.5 shrink-0">
                    {option.badge && (
                      <span
                        className={`text-[9px] font-black uppercase px-2 py-0.5 rounded-md ${
                          isSelected
                            ? 'bg-white/20 text-white'
                            : isDark
                            ? 'bg-amber-400/20 text-amber-300'
                            : 'bg-matcha-sub text-[#122810] border border-[#a6c4a1]'
                        }`}
                      >
                        {option.badge}
                      </span>
                    )}

                    {isSelected && (
                      <Check
                        className={`w-3.5 h-3.5 ${
                          isDark ? 'text-emerald-200' : 'text-emerald-400'
                        }`}
                      />
                    )}
                  </span>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
