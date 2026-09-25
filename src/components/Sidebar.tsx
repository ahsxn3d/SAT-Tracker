'use client';

import React from 'react';
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
  TrendingUp
} from 'lucide-react';

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
    badgeColor: 'bg-amber-400 text-slate-950 font-black border border-amber-300 shadow-sm',
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
    badgeColor: 'bg-[#6ee7b7] text-emerald-950 font-black border border-emerald-300 shadow-sm',
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
    id: 'schedule',
    label: 'Phase 1: Foundations',
    shortLabel: 'Phase 1',
    href: '/phase-1',
    icon: Target,
    badge: '6 Wks',
    badgeColor: 'bg-[#d8b4fe] text-purple-950 font-black border border-purple-300 shadow-sm',
    category: 'study'
  },
  {
    id: 'phase-2',
    label: 'Phase 2: Bluebook Arena',
    shortLabel: 'Phase 2',
    href: '/phase-2',
    icon: Trophy,
    badge: '14 Days',
    badgeColor: 'bg-[#7dd3fc] text-sky-950 font-black border border-sky-300 shadow-sm',
    category: 'study'
  },
  {
    id: 'cheat-codes',
    label: 'Core Info & Blueprints',
    shortLabel: 'Core Info',
    href: '/core-info',
    icon: BookOpen,
    badge: '37',
    badgeColor: 'bg-[#fcd34d] text-amber-950 font-black border border-amber-300 shadow-sm',
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
  isCollapsed = false,
  onToggleCollapse,
  mobileOpen = false,
  onCloseMobile,
  streakCount = 15
}) => {
  const { data: session } = useSession();


  const handleItemClick = (e: React.MouseEvent, sectionId: string, href: string) => {
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

      {/* STICKY / FIXED SIDEBAR CONTAINER (Permanently pinned on scroll) */}
      <aside
        id="app-sticky-sidebar"
        className={`fixed top-0 left-0 h-screen z-50 transition-all duration-300 ease-in-out flex flex-col justify-between select-none
          border-r-2 border-[#6aa865]/60 shadow-2xl overflow-hidden text-white
          ${isCollapsed ? 'w-[74px]' : 'w-[304px]'}
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* ============================================================== */}
        {/* ARTISTIC MATCHA WAVY STEPPED GRADIENT TEXTURE (TOP-LEFT TO BR) */}
        {/* ============================================================== */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <svg
            viewBox="0 0 300 800"
            preserveAspectRatio="none"
            className="w-full h-full absolute inset-0"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* Soft organic drop shadow between distinct wave layers */}
              <filter id="matchaWaveDrop" x="-10%" y="-10%" width="120%" height="120%">
                <feDropShadow dx="-1" dy="3" stdDeviation="3.5" floodColor="#081a07" floodOpacity="0.28" />
              </filter>
              {/* Velvety atmospheric sheen */}
              <linearGradient id="matchaSheen" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.08" />
                <stop offset="50%" stopColor="#000000" stopOpacity="0.0" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0.14" />
              </linearGradient>
            </defs>

            {/* BASE LAYER (Bottom-Right): Website's soft matcha sage */}
            <rect width="300" height="800" fill="#b1dbab" />

            {/* WAVE LAYER 7: Frothy matcha cream */}
            <path
              d="M-20,-20 L320,-20 L320,705 C255,670 200,720 150,660 C105,605 60,645 25,600 C10,580 -10,595 -20,585 Z"
              fill="#9bc992"
              filter="url(#matchaWaveDrop)"
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="0.75"
            />

            {/* WAVE LAYER 6: Matcha latte */}
            <path
              d="M-20,-20 L320,-20 L320,595 C245,555 195,610 140,545 C90,485 50,530 15,475 C5,455 -10,470 -20,455 Z"
              fill="#82ba75"
              filter="url(#matchaWaveDrop)"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="0.75"
            />

            {/* WAVE LAYER 5: Vibrant fresh brewed matcha */}
            <path
              d="M-20,-20 L320,-20 L320,475 C250,425 185,485 130,415 C80,355 45,400 10,345 C0,325 -10,340 -20,325 Z"
              fill="#6aa35d"
              filter="url(#matchaWaveDrop)"
              stroke="rgba(255,255,255,0.22)"
              strokeWidth="0.75"
            />

            {/* WAVE LAYER 4: Authentic classic green matcha */}
            <path
              d="M-20,-20 L320,-20 L320,355 C240,300 175,350 120,285 C70,225 35,260 5,215 C-5,195 -10,210 -20,195 Z"
              fill="#528e44"
              filter="url(#matchaWaveDrop)"
              stroke="rgba(255,255,255,0.24)"
              strokeWidth="0.75"
            />

            {/* WAVE LAYER 3: Rich ceremonial matcha green */}
            <path
              d="M-20,-20 L320,-20 L320,235 C230,180 160,220 110,160 C65,105 28,140 2,95 C-8,75 -12,90 -20,75 Z"
              fill="#3e7532"
              filter="url(#matchaWaveDrop)"
              stroke="rgba(255,255,255,0.26)"
              strokeWidth="0.75"
            />

            {/* WAVE LAYER 2: Deep shaded forest matcha */}
            <path
              d="M-20,-20 L320,-20 L320,125 C220,80 145,110 95,50 C55,0 20,25 -20,10 Z"
              fill="#2c5c21"
              filter="url(#matchaWaveDrop)"
              stroke="rgba(255,255,255,0.28)"
              strokeWidth="0.75"
            />

            {/* WAVE LAYER 1 (Top-Left): Darkest authentic ceremonial matcha powder */}
            <path
              d="M-20,-20 L210,-20 C160,25 115,10 75,40 C35,65 10,35 -20,60 Z"
              fill="#1d4414"
              filter="url(#matchaWaveDrop)"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="0.75"
            />

            {/* Subtle atmospheric sheen */}
            <rect width="300" height="800" fill="url(#matchaSheen)" pointerEvents="none" />
          </svg>
        </div>

        {/* ============================================================== */}
        {/* TOP SECTION: BRAND HEADER + USER PROFILE CARD                  */}
        {/* ============================================================== */}
        <div className="p-2.5 space-y-2 shrink-0 border-b border-white/15 bg-black/10 backdrop-blur-xs relative z-10">
          {/* 1. Brand Header + Controls */}
          {isCollapsed ? (
            <div className="flex flex-col items-center gap-2">
              {/* Closed Sidebar Toggle Button on Top */}
              <button
                type="button"
                id="sidebar-collapse-toggle-btn"
                onClick={onToggleCollapse}
                className="p-1.5 rounded-xl text-emerald-100 hover:text-white hover:bg-white/20 transition cursor-pointer border border-white/20 backdrop-blur-xs flex items-center justify-center shadow-xs"
                title="Expand Sidebar"
              >
                <PanelLeftOpen className="w-4 h-4 text-emerald-200" />
              </button>

              {/* Logo Tile Under the Closed Sidebar Button */}
              <div
                onClick={() => onSelectSection('all')}
                className="cursor-pointer group transition flex items-center justify-center"
                title="SAT Tracker • Dashboard"
              >
                <div className="relative w-9 h-9 rounded-xl bg-gradient-to-br from-[#1d4414] via-[#2c5c21] to-[#3e7532] border-2 border-[#a4e89e] p-0.5 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                  <img
                    src="/logo.png"
                    alt="SAT Tracker Logo"
                    className="w-full h-full object-cover rounded-lg"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between gap-2">
              <div
                onClick={() => onSelectSection('all')}
                className="flex items-center gap-2.5 cursor-pointer group transition flex-1 min-w-0"
              >
                {/* Logo Tile - Large, Bold & Prominent */}
                <div className="relative w-9.5 h-9.5 shrink-0 rounded-xl bg-gradient-to-br from-[#1d4414] via-[#2c5c21] to-[#3e7532] border-2 border-[#a4e89e] p-0.5 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                  <img
                    src="/logo.png"
                    alt="SAT Tracker Logo"
                    className="w-full h-full object-cover rounded-lg"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>

                {/* Brand Title & Subtitle */}
                <div className="min-w-0 overflow-hidden flex-1 leading-tight">
                  <div className="flex items-center gap-1.5">
                    <h2 className="text-[15.5px] sm:text-base font-black tracking-tight font-['Space_Grotesk'] truncate text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
                      SAT Tracker
                    </h2>
                    <span className="text-[8.5px] font-black uppercase px-1.5 py-0.2 rounded font-['JetBrains_Mono'] bg-amber-400/30 text-amber-200 border border-amber-300/50 shadow-2xs">
                      PRO
                    </span>
                  </div>
                  <div className="text-[10px] font-bold font-mono truncate text-emerald-100 mt-0.5 drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]">
                    Nov 7 Exam &bull; 44d left
                  </div>
                </div>
              </div>

              {/* Collapse / Close Controls */}
              <div className="flex items-center gap-1 shrink-0">
                <button
                  type="button"
                  onClick={onCloseMobile}
                  className="lg:hidden p-1.5 rounded-lg text-emerald-100 hover:text-white hover:bg-white/10"
                  title="Close Sidebar"
                >
                  <X className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  id="sidebar-collapse-toggle-btn"
                  onClick={onToggleCollapse}
                  className="hidden lg:flex p-1.5 rounded-lg text-emerald-100 hover:text-white hover:bg-white/20 transition cursor-pointer border border-white/20 backdrop-blur-xs"
                  title="Collapse to Icons"
                >
                  <PanelLeftClose className="w-4 h-4 text-emerald-200" />
                </button>
              </div>
            </div>
          )}

          {/* 2. User Profile Card / Sign In (Clean, Clear Glassmorphism) */}
          <div
            className={`rounded-xl border transition-all select-none group relative bg-black/20 border-white/15 hover:border-white/30 hover:bg-black/30 backdrop-blur-xs ${
              isCollapsed ? 'p-1.5 flex flex-col items-center gap-1' : 'px-2.5 py-1.5 flex items-center justify-between gap-2'
            }`}
          >
            <Link
              href={session?.user ? '#' : '/login'}
              id="sidebar-user-card-btn"
              className="flex items-center gap-2.5 min-w-0 flex-1 cursor-pointer"
              title={session?.user ? userName : 'Scholar • Click to Sign In'}
            >
              {/* Orange Squircle Avatar with Mint Online Dot */}
              <div className="relative w-7 h-7 sm:w-7.5 sm:h-7.5 shrink-0 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 border border-amber-300/60 flex items-center justify-center text-slate-950 font-black text-xs shadow-xs group-hover:scale-105 transition-transform">
                {session?.user?.image ? (
                  <img
                    src={session.user.image}
                    alt={userName}
                    className="w-full h-full rounded-xl object-cover"
                  />
                ) : (
                  <span>{session?.user ? (userInitials || 'U') : 'S'}</span>
                )}
                <span className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#10b981] border-2 border-[#1d4414]" />
              </div>

              {!isCollapsed && (
                <div className="min-w-0 leading-tight flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-black truncate font-['Plus_Jakarta_Sans'] text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
                      {session?.user ? userName : 'Scholar'}
                    </span>
                    {!session?.user && (
                      <span className="text-[8px] font-black uppercase px-1 py-0.2 rounded font-mono bg-emerald-500/20 text-emerald-200 border border-emerald-400/40">
                        Sign In
                      </span>
                    )}
                  </div>
                  <p className="text-[9.5px] font-medium truncate text-emerald-100/90 drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]">
                    {session?.user ? (session.user.email || 'Keep learning') : 'Keep learning, keep growing'}
                  </p>
                </div>
              )}
            </Link>

            {!isCollapsed ? (
              <div className="flex items-center gap-1 shrink-0">
                <div
                  className="px-2 py-0.5 rounded-lg border text-[11px] font-black font-['JetBrains_Mono'] flex items-center gap-1 shadow-xs bg-amber-400/30 text-amber-200 border-amber-300/50"
                  title={`${streakCount} Days Study Streak`}
                >
                  <span>{streakCount}</span>
                  <Flame className="w-3 h-3 text-amber-300 fill-amber-300" />
                </div>

                {session?.user && (
                  <button
                    type="button"
                    onClick={() => signOut({ callbackUrl: '/' })}
                    className="p-1 rounded-lg text-emerald-100 hover:text-rose-300 hover:bg-rose-500/20 transition cursor-pointer"
                    title="Sign Out"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            ) : (
              <div
                className="w-4 h-4 rounded-full bg-amber-400/20 flex items-center justify-center text-[9px] text-amber-200"
                title={`${streakCount} Day Streak`}
              >
                <Flame className="w-2.5 h-2.5 text-amber-300 fill-amber-300" />
              </div>
            )}
          </div>
        </div>

        {/* ============================================================== */}
        {/* MIDDLE SECTION: MAIN NAVIGATION LINKS (BALANCED, CLEAR & BIG) */}
        {/* ============================================================== */}
        <div className="flex-1 overflow-y-auto px-2 py-1.5 space-y-1 scrollbar-thin scrollbar-thumb-emerald-950/40 pb-2 relative z-10">
          {SIDEBAR_NAV_ITEMS.map((item) => {
            const isActive =
              activeSection === item.id ||
              (item.id === 'all' && activeSection === 'home') ||
              (item.id === 'cheat-codes' && activeSection === 'core-info') ||
              (item.id === 'phase-2' && activeSection === 'bluebook') ||
              (item.id === 'crescent' && (activeSection === 'test-center' || activeSection === 'crescent'));

            const Icon = item.icon;

            return (
              <div key={item.id} className="relative group">
                <Link
                  href={item.href}
                  id={`sidebar-nav-${item.id}-btn`}
                  onClick={(e) => handleItemClick(e, item.id, item.href)}
                  className={`flex items-center gap-2.5 px-3 py-1.5 rounded-xl font-bold transition-all duration-150 cursor-pointer select-none text-[13px] sm:text-[13.5px] relative ${
                    isCollapsed ? 'justify-center px-1.5' : ''
                  } ${
                    isActive
                      ? 'bg-white/28 text-white shadow-xs border border-white/45 backdrop-blur-md'
                      : 'text-white/95 hover:text-white hover:bg-white/18 border border-transparent hover:border-white/20'
                  }`}
                >
                  {/* Left Active Glow Indicator */}
                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-4 rounded-r-full bg-[#c9fccb] shadow-[0_0_8px_rgba(201,252,203,0.8)]" />
                  )}

                  {/* Icon */}
                  <Icon
                    className={`w-4 h-4 shrink-0 transition-transform group-hover:scale-110 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)] ${
                      isActive ? 'text-white' : 'text-emerald-100 group-hover:text-white'
                    }`}
                  />

                  {/* Label (Only when Expanded) */}
                  {!isCollapsed && (
                    <span className="truncate flex-1 font-['Plus_Jakarta_Sans'] font-bold tracking-tight text-[13px] sm:text-[13.5px] drop-shadow-[0_1px_2px_rgba(0,0,0,0.45)]">
                      {item.label}
                    </span>
                  )}

                  {/* Badge (Only when Expanded) */}
                  {!isCollapsed && item.badge && (
                    <span
                      className={`text-[9.5px] sm:text-[10px] font-black px-2 py-0.5 rounded-full font-['JetBrains_Mono'] shrink-0 shadow-xs ${
                        item.badgeColor || 'bg-white text-slate-900 border border-white/50'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>

                {/* Floating Tooltip in Collapsed Mode */}
                {isCollapsed && (
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-3 px-2.5 py-1.5 text-xs font-bold rounded-xl border border-white/25 bg-[#1d4414] text-white shadow-xl z-50 whitespace-nowrap flex items-center gap-1.5 font-['JetBrains_Mono']">
                    <span>{item.shortLabel || item.label}</span>
                    {item.badge && (
                      <span className="text-[9px] px-1 py-0.2 rounded bg-amber-400/25 text-amber-200 border border-amber-300/40">
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
        {/* BOTTOM SECTION: SLIM STATS (ZERO CROP GLASS FOOTER)           */}
        {/* ============================================================== */}
        <div className="p-2 border-t border-white/20 bg-black/15 backdrop-blur-md shrink-0 relative z-10">
          {!isCollapsed && (
            <div className="py-1 px-3 rounded-lg bg-black/25 border border-white/20 text-[10px] text-[#f2fcf1] font-['JetBrains_Mono'] flex items-center justify-between shadow-2xs">
              <span className="font-semibold text-emerald-100 drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">Nov 7 Exam</span>
              <span className="font-bold text-amber-200 drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
                {completedCount}/{totalTasks} ({totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0}%)
              </span>
            </div>
          )}
        </div>
      </aside>
    </>
  );
};
