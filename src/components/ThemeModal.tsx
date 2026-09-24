'use client';

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Moon, Sun, CloudRain, Sparkles, Palette } from 'lucide-react';
import { useTheme, ThemeMode } from '../context/ThemeContext';
import { useModalScrollLock } from '../hooks/useModalScrollLock';

export const ThemeModal: React.FC = () => {
  const { theme, setTheme, isThemeModalOpen, closeThemeModal } = useTheme();

  // Lock background scroll when modal is open
  useModalScrollLock(isThemeModalOpen);

  if (!isThemeModalOpen) return null;

  const themes: {
    id: ThemeMode;
    name: string;
    description: string;
    tag: string;
    icon: React.ElementType;
    previewBg: string;
    previewCard: string;
    previewAccent: string;
    previewText: string;
    badgeColor: string;
  }[] = [
    {
      id: 'dark',
      name: 'Dark Theme',
      description: 'Deep midnight navy ocean canvas with dark executive slate cards and radiant electric cyan glows (Top reference).',
      tag: 'Top Mode • Midnight Ocean',
      icon: Moon,
      previewBg: 'bg-[#071526]',
      previewCard: 'bg-[#0f223a] border-[#1e3e66]',
      previewAccent: 'bg-[#00d2ff]',
      previewText: 'text-white',
      badgeColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
    },
    {
      id: 'light',
      name: 'Light Theme',
      description: 'Clean glacier white canvas with glossy pure-white cards and bright azure cyan accents (Bottom reference).',
      tag: 'Bottom Mode • Glacier White',
      icon: Sun,
      previewBg: 'bg-[#edf2f7]',
      previewCard: 'bg-white border-[#e2e8f0]',
      previewAccent: 'bg-[#00b4d8]',
      previewText: 'text-slate-900',
      badgeColor: 'bg-sky-500/20 text-sky-300 border-sky-500/40'
    }
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeThemeModal}
          className="fixed inset-0 bg-black/75 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-xl rounded-3xl bg-[#0b1a30] text-white border-2 border-[#1e477a] shadow-2xl overflow-hidden z-10 font-['Plus_Jakarta_Sans']"
        >
          {/* Header */}
          <div className="p-5 sm:p-6 border-b border-[#1e477a] flex items-center justify-between gap-3 bg-[#081426]/90">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#00d2ff] to-[#0284c7] flex items-center justify-center text-slate-950 shadow-md">
                <Palette className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-black text-white font-['Space_Grotesk'] flex items-center gap-2">
                  <span>Color Theme Selector</span>
                  <Sparkles className="w-4 h-4 text-cyan-300" />
                </h3>
                <p className="text-xs text-cyan-100/70 font-medium">
                  Select your visual mode matching the reference design system
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={closeThemeModal}
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Theme Cards List */}
          <div className="p-5 sm:p-6 space-y-3.5 max-h-[70vh] overflow-y-auto">
            {themes.map((t) => {
              const isSelected = theme === t.id;
              const Icon = t.icon;

              return (
                <div
                  key={t.id}
                  onClick={() => setTheme(t.id)}
                  className={`p-4 rounded-2xl border-2 transition-all duration-200 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                    isSelected
                      ? 'bg-[#132a47] border-[#00d2ff] shadow-lg shadow-cyan-950/40 ring-1 ring-[#00d2ff]'
                      : 'bg-[#0f223a]/70 border-[#1e3e66] hover:bg-[#132a47]/50 hover:border-[#2f5d94]'
                  }`}
                >
                  {/* Left: Info */}
                  <div className="flex items-start gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${
                        isSelected
                          ? 'bg-[#00d2ff] text-slate-950 border-cyan-300 shadow-md'
                          : 'bg-white/10 text-cyan-300 border-white/15'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-black text-white text-sm sm:text-base font-['Space_Grotesk']">
                          {t.name}
                        </span>
                        <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded-full border font-['JetBrains_Mono'] ${t.badgeColor}`}>
                          {t.tag}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 font-medium leading-relaxed">
                        {t.description}
                      </p>
                    </div>
                  </div>

                  {/* Right: Visual Swatch Preview & Radio Check */}
                  <div className="flex items-center gap-3 shrink-0 self-end sm:self-center">
                    {/* Mini Swatch */}
                    <div className={`w-20 h-12 rounded-xl p-1.5 flex flex-col justify-between border shadow-inner ${t.previewBg}`}>
                      <div className={`w-full h-4 rounded-md border flex items-center justify-between px-1 ${t.previewCard}`}>
                        <div className={`w-2 h-2 rounded-full ${t.previewAccent}`} />
                        <div className="w-6 h-1 rounded bg-slate-400/40" />
                      </div>
                      <div className="w-8 h-1 rounded bg-slate-400/40" />
                    </div>

                    {/* Check Circle */}
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center border-2 transition ${
                        isSelected
                          ? 'bg-[#00d2ff] border-[#00d2ff] text-slate-950'
                          : 'border-slate-500 bg-transparent'
                      }`}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer */}
          <div className="p-4 sm:p-5 border-t border-[#1e477a] bg-[#081426]/90 flex items-center justify-between text-xs font-mono text-cyan-200/70">
            <span>Theme auto-persists in browser storage</span>
            <button
              type="button"
              onClick={closeThemeModal}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#00d2ff] to-[#0284c7] text-slate-950 font-black text-xs font-['JetBrains_Mono'] cursor-pointer hover:shadow-lg transition active:scale-95"
            >
              Done
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
