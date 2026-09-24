'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { motion, AnimatePresence } from 'motion/react';
import {
  LayoutDashboard,
  CalendarDays,
  Bot,
  Sparkles,
  Target,
  Trophy,
  BookOpen,
  Calculator,
  Lightbulb,
  AlertCircle,
  Percent,
  Luggage,
  MapPin,
  ShieldCheck,
  Clock,
  Play,
  PanelLeftClose,
  PanelLeftOpen,
  ChevronLeft,
  ChevronRight,
  User as UserIcon,
  Flame,
  Crown,
  LogOut,
  LogIn,
  X,
  Menu,
  GraduationCap,
  TrendingUp,
  Palette
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export interface SidebarNavItem {
  id: string;
  label: string;
  shortLabel?: string;
  href: string;
  icon: React.ElementType;
  badge?: string | number;
  badgeColor?: string;
  category?: 'primary' | 'study' | 'tools' | 'info';
}

export const SIDEBAR_NAV_ITEMS: SidebarNavItem[] = [
  {
    id: 'progress',
    label: 'Progress',
    shortLabel: 'Progress',
    href: '/progress',
    icon: TrendingUp,
    badge: 'LIVE',
    badgeColor: 'bg-amber-400/20 text-amber-300 border-amber-400/40',
    category: 'primary'
  },
  {
    id: 'all',
    label: 'Dashboard',
    shortLabel: 'Home',
    href: '/',
    icon: LayoutDashboard,
    category: 'primary'
  },
  {
    id: 'calendar',
    label: 'Calendar & Pacing',
    shortLabel: 'Calendar',
    href: '/calendar',
    icon: CalendarDays,
    category: 'study'
  },
  {
    id: 'ai-copilot',
    label: 'AI Co-Pilot',
    shortLabel: 'AI Copilot',
    href: '/ai-copilot',
    icon: Bot,
    badge: 'NEW',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
    category: 'study'
  },
  {
    id: 'tomorrow',
    label: "Tomorrow's Focus",
    shortLabel: 'Tomorrow',
    href: '/tomorrow',
    icon: Sparkles,
    category: 'study'
  },
  {
    id: 'timer',
    label: '90-Min Cap Timer',
    shortLabel: 'Timer',
    href: '/timer',
    icon: Clock,
    badge: '90m',
    badgeColor: 'bg-amber-400/20 text-amber-300 border-amber-400/40',
    category: 'study'
  },
  {
    id: 'schedule',
    label: 'Phase 1: Foundations',
    shortLabel: 'Phase 1',
    href: '/phase-1',
    icon: Target,
    badge: '6 Wks',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
    category: 'study'
  },
  {
    id: 'phase-2',
    label: 'Phase 2: Bluebook Arena',
    shortLabel: 'Phase 2',
    href: '/phase-2',
    icon: Trophy,
    badge: '18 Days',
    badgeColor: 'bg-sky-500/20 text-sky-300 border-sky-500/40',
    category: 'study'
  },
  {
    id: 'cheat-codes',
    label: 'Core Info & Blueprints',
    shortLabel: 'Core Info',
    href: '/core-info',
    icon: BookOpen,
    badge: '37',
    badgeColor: 'bg-amber-400/20 text-amber-300 border-amber-400/40',
    category: 'info'
  },
  {
    id: 'formulas',
    label: 'SAT Formulas Vault',
    shortLabel: 'Formulas',
    href: '/formulas',
    icon: Calculator,
    category: 'info'
  },
  {
    id: 'error-log',
    label: 'Mistake Autopsy',
    shortLabel: 'Error Log',
    href: '/error-log',
    icon: AlertCircle,
    category: 'tools'
  },
  {
    id: 'score-calculator',
    label: 'Score Calculator',
    shortLabel: 'Calculator',
    href: '/score-calculator',
    icon: Percent,
    category: 'tools'
  },
  {
    id: 'exam-prep',
    label: 'Exam Prep & Packing',
    shortLabel: 'Packing',
    href: '/exam-prep',
    icon: Luggage,
    category: 'tools'
  },
  {
    id: 'crescent',
    label: 'Test Center Logistics',
    shortLabel: 'Test Center',
    href: '/test-center',
    icon: MapPin,
    category: 'info'
  },
  {
    id: 'rules',
    label: 'Anti-Burnout Rules',
    shortLabel: 'Rules',
    href: '/rules',
    icon: ShieldCheck,
    category: 'info'
  }
];

interface SidebarProps {
  activeSection: string;
  onSelectSection: (section: string) => void;
  completedCount?: number;
  totalTasks?: number;
  onOpenTimer?: () => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
  mobileOpen?: boolean;
  onCloseMobile?: () => void;
  streakCount?: number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  onSelectSection,
  completedCount = 0,
  totalTasks = 86,
  onOpenTimer,
  isCollapsed = false,
  onToggleCollapse,
  mobileOpen = false,
  onCloseMobile,
  streakCount = 15
}) => {
  const { data: session } = useSession();
  const { theme, setTheme, openThemeModal } = useTheme();

  const isDark = theme === 'dark';

  // Theme-tailored Sidebar styling matching Reference Image
  const sidebarBgClass = isDark
    ? 'bg-[#071526]/98 text-white border-r-2 border-[#173d67]/80'
    : 'bg-[#ffffff]/98 text-slate-900 border-r-2 border-[#e2e8f0] shadow-xl';

  const handleItemClick = (e: React.MouseEvent, sectionId: string, href: string) => {
    if (sectionId === 'timer' && onOpenTimer) {
      e.preventDefault();
      onOpenTimer();
      if (onCloseMobile) onCloseMobile();
      return;
    }
    e.preventDefault();
    onSelectSection(sectionId);
    if (onCloseMobile) {
      onCloseMobile();
    }
  };

  const userName = session?.user?.name || 'Scholar';
  const userInitials = userName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .substring(0, 2)
    .toUpperCase();

  return (
    <>
      {/* MOBILE BACKDROP OVERLAY */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onCloseMobile}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* STICKY / FIXED SIDEBAR CONTAINER */}
      <aside
        id="app-sticky-sidebar"
        className={`fixed top-0 left-0 h-screen z-50 transition-all duration-300 ease-in-out flex flex-col justify-between select-none
          backdrop-blur-xl shadow-2xl ${sidebarBgClass}
          ${isCollapsed ? 'w-[74px]' : 'w-64 sm:w-[268px]'}
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* ============================================================== */}
        {/* TOP SECTION: WINDOW CONTROLS + LOGO + USER CARD               */}
        {/* ============================================================== */}
        <div className={`p-3 sm:p-4 space-y-3 shrink-0 border-b ${
          isDark ? 'border-[#162f4e]/70' : 'border-[#e2e8f0]'
        }`}>
          {/* 1. macOS Style Colored Window Dots + Collapse Toggle */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 pl-0.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] shadow-xs inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] shadow-xs inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] shadow-xs inline-block" />
            </div>

            {/* Desktop Collapse / Expand Toggle Icon Button */}
            <div className="flex items-center gap-1">
              {/* Mobile Close Button */}
              <button
                type="button"
                onClick={onCloseMobile}
                className="lg:hidden p-1 rounded-lg text-emerald-300 hover:text-white hover:bg-white/10"
                title="Close Sidebar"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Desktop Toggle Button */}
              <button
                type="button"
                id="sidebar-collapse-toggle-btn"
                onClick={onToggleCollapse}
                className="hidden lg:flex p-1.5 rounded-lg text-emerald-200/80 hover:text-white hover:bg-white/10 transition cursor-pointer border border-emerald-500/20"
                title={isCollapsed ? 'Expand Sidebar' : 'Collapse to Icons'}
              >
                {isCollapsed ? (
                  <PanelLeftOpen className="w-4 h-4 text-emerald-300" />
                ) : (
                  <PanelLeftClose className="w-4 h-4 text-emerald-300" />
                )}
              </button>
            </div>
          </div>

          {/* 2. Brand Header (Logo Icon + Text) */}
          <div
            onClick={() => onSelectSection('all')}
            className={`flex items-center gap-3 cursor-pointer group transition ${
              isCollapsed ? 'justify-center' : ''
            }`}
          >
            {/* Logo Tile */}
            <div className="relative w-10 h-10 shrink-0 rounded-2xl bg-gradient-to-br from-[#1b3d18] via-[#245220] to-[#0c1f0a] border-2 border-emerald-500/60 p-1 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <img
                src="/logo.png"
                alt="SAT Tracker Logo"
                className="w-full h-full object-cover rounded-[10px]"
                onError={(e) => {
                  // Fallback icon if logo image not found
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <GraduationCap className="w-5 h-5 text-amber-300 absolute inset-0 m-auto pointer-events-none opacity-0" />
            </div>

            {/* Brand Title & Subtitle (Hidden when Collapsed) */}
            {!isCollapsed && (
              <div className="min-w-0 overflow-hidden flex-1">
                <div className="flex items-center gap-1.5">
                  <h2 className={`text-base font-black tracking-tight font-['Space_Grotesk'] leading-tight truncate ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    SAT Tracker
                  </h2>
                </div>
                <div className="flex items-center gap-1 text-[9px] font-black uppercase tracking-wider font-['JetBrains_Mono']">
                  <span className="text-amber-400">PRO</span>
                  <span>&bull;</span>
                  <span className={isDark ? 'text-[#00d2ff]' : 'text-sky-700'}>ANTI-BURNOUT</span>
                </div>
                <div className={`text-[10px] font-bold font-mono mt-0.5 truncate ${
                  isDark ? 'text-cyan-200/80' : 'text-slate-600'
                }`}>
                  Nov 7 Exam &bull; 44d left
                </div>
              </div>
            )}
          </div>

          {/* 3. User Profile Card / Sign In (Exact match to requested UI) */}
          <div
            className={`rounded-2xl border transition-all select-none group relative ${
              isDark
                ? 'bg-white/[0.04] border-[#1e3e66] hover:border-[#00d2ff]/60 hover:bg-white/[0.07]'
                : 'bg-slate-100/90 border-[#e2e8f0] hover:border-[#00b4d8]/60 hover:bg-slate-200/70'
            } ${
              isCollapsed ? 'p-2 flex flex-col items-center gap-1.5' : 'p-2.5 flex items-center justify-between gap-2.5'
            }`}
          >
            {/* Clickable Area: If signed in, opens theme modal; if not signed in, links to /login */}
            <Link
              href={session?.user ? '#' : '/login'}
              id="sidebar-user-card-btn"
              onClick={(e) => {
                if (session?.user) {
                  e.preventDefault();
                  openThemeModal();
                }
              }}
              className="flex items-center gap-2.5 min-w-0 flex-1 cursor-pointer"
              title={session?.user ? `${userName} • Click to customize theme` : 'Scholar • Click to Sign In'}
            >
              {/* Orange Squircle Avatar with Emerald Green Online Dot (Exact match to user screenshot) */}
              <div className="relative w-9 h-9 shrink-0 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 border border-amber-300/60 flex items-center justify-center text-slate-950 font-black text-sm shadow-xs group-hover:scale-105 transition-transform">
                {session?.user?.image ? (
                  <img
                    src={session.user.image}
                    alt={userName}
                    className="w-full h-full rounded-2xl object-cover"
                  />
                ) : (
                  <span>{session?.user ? (userInitials || 'U') : 'S'}</span>
                )}
                {/* Mint/Emerald Green Online Dot at Bottom Right */}
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#10b981] border-2 border-[#071526]" />
              </div>

              {/* Title & Motivational Subtitle */}
              {!isCollapsed && (
                <div className="min-w-0 leading-tight flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className={`text-xs font-black truncate font-['Plus_Jakarta_Sans'] ${
                      isDark ? 'text-white' : 'text-slate-900'
                    }`}>
                      {session?.user ? userName : 'Scholar'}
                    </span>
                    {!session?.user && (
                      <span className={`text-[9px] font-black uppercase px-1.5 py-0.2 rounded font-mono ${
                        isDark
                          ? 'bg-cyan-500/20 text-[#00d2ff] border border-cyan-500/30'
                          : 'bg-sky-100 text-sky-700 border border-sky-300'
                      }`}>
                        Sign In
                      </span>
                    )}
                  </div>
                  <p className={`text-[10px] font-medium truncate mt-0.5 ${
                    isDark ? 'text-emerald-400/90' : 'text-emerald-700'
                  }`}>
                    {session?.user ? (session.user.email || 'Keep learning, keep growing') : 'Keep learning, keep g...'}
                  </p>
                </div>
              )}
            </Link>

            {/* Right Side: Streak Flame Pill (15 🔥) & Sign Out Button */}
            {!isCollapsed ? (
              <div className="flex items-center gap-1.5 shrink-0">
                <div
                  className={`px-2.5 py-1 rounded-xl border text-xs font-black font-['JetBrains_Mono'] flex items-center gap-1 shadow-xs ${
                    isDark
                      ? 'bg-amber-400/15 text-amber-300 border-amber-400/40'
                      : 'bg-amber-100 text-amber-800 border-amber-300'
                  }`}
                  title={`${streakCount} Days Study Streak`}
                >
                  <span>{streakCount}</span>
                  <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                </div>

                {session?.user && (
                  <button
                    type="button"
                    onClick={() => signOut({ callbackUrl: '/' })}
                    className="p-1 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 transition cursor-pointer"
                    title="Sign Out"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            ) : (
              <div
                className="w-5 h-5 rounded-full bg-amber-400/20 flex items-center justify-center text-[10px] text-amber-300 mt-1"
                title={`${streakCount} Day Streak`}
              >
                <Flame className="w-3 h-3 text-amber-400 fill-amber-400" />
              </div>
            )}
          </div>

          {/* 4. Quick 2-Mode Theme Selector Pill (Dark vs Light) */}
          {!isCollapsed ? (
            <div className={`flex items-center justify-between p-1 rounded-xl border text-xs font-['JetBrains_Mono'] gap-1 ${
              isDark ? 'bg-black/35 border-white/10' : 'bg-slate-100 border-slate-200'
            }`}>
              <button
                type="button"
                onClick={() => setTheme('dark')}
                className={`flex-1 py-1.5 rounded-lg font-bold flex items-center justify-center gap-1.5 transition cursor-pointer ${
                  theme === 'dark'
                    ? 'bg-[#00d2ff] text-slate-950 shadow-md font-black'
                    : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
                }`}
                title="Dark Theme (Top in reference image)"
              >
                <span>🌙</span>
                <span>Dark</span>
              </button>

              <button
                type="button"
                onClick={() => setTheme('light')}
                className={`flex-1 py-1.5 rounded-lg font-bold flex items-center justify-center gap-1.5 transition cursor-pointer ${
                  theme === 'light'
                    ? 'bg-[#0284c7] text-white shadow-md font-black'
                    : isDark ? 'text-slate-400 hover:text-white' : 'text-slate-500 hover:text-slate-900'
                }`}
                title="Light Theme (Bottom in reference image)"
              >
                <span>☀️</span>
                <span>Light</span>
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`w-full py-2 rounded-xl flex items-center justify-center transition cursor-pointer border ${
                isDark
                  ? 'bg-white/10 text-cyan-300 border-white/10 hover:bg-white/20'
                  : 'bg-slate-100 text-slate-800 border-slate-300 hover:bg-slate-200'
              }`}
              title={`Switch Theme: currently ${theme.toUpperCase()} (Click to toggle)`}
            >
              <span>{theme === 'dark' ? '🌙' : '☀️'}</span>
            </button>
          )}
        </div>

        {/* ============================================================== */}
        {/* MIDDLE SECTION: MAIN NAVIGATION LINKS (SCROLLABLE STREAM)      */}
        {/* ============================================================== */}
        <div className="flex-1 overflow-y-auto px-2 py-3 space-y-1 scrollbar-thin scrollbar-thumb-emerald-800/40">
          {SIDEBAR_NAV_ITEMS.map((item) => {
            const isActive =
              activeSection === item.id ||
              (item.id === 'all' && activeSection === 'home') ||
              (item.id === 'cheat-codes' && activeSection === 'core-info') ||
              (item.id === 'phase-2' && activeSection === 'bluebook');

            const Icon = item.icon;

            return (
              <div key={item.id} className="relative group">
                <Link
                  href={item.href}
                  id={`sidebar-nav-${item.id}-btn`}
                  onClick={(e) => handleItemClick(e, item.id, item.href)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl font-bold transition-all duration-150 cursor-pointer select-none text-xs relative ${
                    isCollapsed ? 'justify-center px-2' : ''
                  } ${
                    isActive
                      ? isDark
                        ? 'bg-gradient-to-r from-[#0d2648] to-[#143b6e] text-white shadow-md border border-[#00d2ff]/60'
                        : 'bg-[#0284c7] text-white shadow-md border border-[#00b4d8]/60'
                      : isDark
                      ? 'text-slate-300 hover:text-white hover:bg-white/[0.08] border border-transparent'
                      : 'text-slate-700 hover:text-slate-950 hover:bg-slate-100 border border-transparent'
                  }`}
                >
                  {/* Left Active Glow Indicator */}
                  {isActive && (
                    <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 rounded-r-full ${
                      isDark ? 'bg-[#00d2ff]' : 'bg-[#00b4d8]'
                    }`} />
                  )}

                  {/* Icon */}
                  <Icon
                    className={`w-4 h-4 shrink-0 transition-transform group-hover:scale-110 ${
                      isActive
                        ? isDark ? 'text-[#00d2ff]' : 'text-white'
                        : isDark ? 'text-cyan-300' : 'text-slate-600'
                    }`}
                  />

                  {/* Label (Only when Expanded) */}
                  {!isCollapsed && (
                    <span className="truncate flex-1 font-['Plus_Jakarta_Sans'] font-bold">
                      {item.label}
                    </span>
                  )}

                  {/* Badge (Only when Expanded) */}
                  {!isCollapsed && item.badge && (
                    <span
                      className={`text-[9px] font-black px-1.5 py-0.5 rounded-full border font-['JetBrains_Mono'] shrink-0 ${
                        item.badgeColor || (isDark ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30' : 'bg-blue-500/20 text-blue-300 border-blue-500/30')
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>

                {/* Floating Tooltip in Collapsed Mode */}
                {isCollapsed && (
                  <div className={`opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-3 px-2.5 py-1.5 text-xs font-bold rounded-xl shadow-grave border z-50 whitespace-nowrap flex items-center gap-1.5 font-['JetBrains_Mono'] ${
                    isDark
                      ? 'bg-[#0b1a30] text-white border-cyan-500/50'
                      : 'bg-white text-slate-900 border-slate-300 shadow-xl'
                  }`}>
                    <span>{item.shortLabel || item.label}</span>
                    {item.badge && (
                      <span className="text-[9px] px-1 py-0.2 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">
                        {item.badge}
                      </span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ============================================================== */}
        {/* BOTTOM SECTION: 90-MIN TIMER TRIGGER + AUTH / COLLAPSE        */}
        {/* ============================================================== */}
        <div className={`p-3 border-t space-y-2 shrink-0 ${
          isDark
            ? 'border-[#162f4e]/70 bg-[#06101e]'
            : 'border-[#e2e8f0] bg-[#f8fafc]'
        }`}>
          {/* Quick Launch 90-Min Cap Timer Button */}
          {onOpenTimer && (
            <button
              type="button"
              id="sidebar-timer-trigger-btn"
              onClick={onOpenTimer}
              className={`w-full py-2 px-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs transition-all shadow-md flex items-center gap-2 cursor-pointer active:scale-95 ${
                isCollapsed ? 'justify-center px-1' : 'justify-between'
              }`}
              title="Launch 90-Min Daily Cap Timer"
            >
              <div className="flex items-center gap-2 truncate">
                <Clock className="w-4 h-4 shrink-0 text-slate-950" />
                {!isCollapsed && <span className="truncate font-['JetBrains_Mono']">90-Min Cap Timer</span>}
              </div>
              {!isCollapsed && <Play className="w-3 h-3 fill-slate-950 shrink-0" />}
            </button>
          )}

          {/* Quick Stats or Footer Meta */}
          {!isCollapsed && (
            <div className="p-2 rounded-xl bg-white/[0.04] border border-white/10 text-[10px] text-emerald-200/70 font-['JetBrains_Mono'] flex items-center justify-between">
              <span>Nov 7 Exam</span>
              <span className="font-bold text-amber-300">
                {completedCount}/{totalTasks} ({totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0}%)
              </span>
            </div>
          )}

          {/* Bottom Expand/Collapse Toggle on Desktop */}
          <div className="hidden lg:flex items-center justify-between pt-1">
            <button
              type="button"
              onClick={onToggleCollapse}
              className={`w-full py-1.5 px-2 rounded-xl text-[11px] font-bold text-emerald-200/80 hover:text-white hover:bg-white/10 transition flex items-center gap-2 cursor-pointer border border-emerald-500/20 ${
                isCollapsed ? 'justify-center' : 'justify-between'
              }`}
            >
              <div className="flex items-center gap-1.5">
                {isCollapsed ? (
                  <PanelLeftOpen className="w-4 h-4 text-emerald-300" />
                ) : (
                  <PanelLeftClose className="w-4 h-4 text-emerald-300" />
                )}
                {!isCollapsed && <span>Collapse Sidebar</span>}
              </div>
              {!isCollapsed && <ChevronLeft className="w-3.5 h-3.5 text-emerald-400" />}
            </button>
          </div>
        </div>
      </aside>
    </>
  );
};
