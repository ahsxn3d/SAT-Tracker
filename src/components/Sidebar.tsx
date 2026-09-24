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

  // Refined lighter matcha green shade: noticeably lighter & greener than pitch-black #0d1e0c,
  // darker than the light matcha canvas #d7e5d2, with an elegant botanical forest tone.
  const sidebarBgClass = 'bg-[#214122]/98 text-white border-r-2 border-[#3a693c] shadow-2xl';

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
          backdrop-blur-xl ${sidebarBgClass}
          ${isCollapsed ? 'w-[74px]' : 'w-64 sm:w-[268px]'}
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* ============================================================== */}
        {/* TOP SECTION: WINDOW CONTROLS + LOGO + USER CARD               */}
        {/* ============================================================== */}
        <div className="p-3 sm:p-4 space-y-3 shrink-0 border-b border-[#325a34]">
          {/* 1. Sidebar Controls (Mobile Close + Collapse Toggle) */}
          <div className={`flex items-center ${isCollapsed ? 'justify-center' : 'justify-end'}`}>
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
                className="hidden lg:flex p-1.5 rounded-lg text-emerald-200/80 hover:text-white hover:bg-white/10 transition cursor-pointer border border-[#3e6a40]"
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
            <div className="relative w-10 h-10 shrink-0 rounded-2xl bg-gradient-to-br from-[#2a552c] via-[#356a38] to-[#1f4021] border-2 border-[#529456] p-1 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <img
                src="/logo.png"
                alt="SAT Tracker Logo"
                className="w-full h-full object-cover rounded-[10px]"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <GraduationCap className="w-5 h-5 text-amber-300 absolute inset-0 m-auto pointer-events-none opacity-0" />
            </div>

            {/* Brand Title & Subtitle (Hidden when Collapsed) */}
            {!isCollapsed && (
              <div className="min-w-0 overflow-hidden flex-1">
                <div className="flex items-center gap-1.5">
                  <h2 className="text-base font-black tracking-tight font-['Space_Grotesk'] leading-tight truncate text-white">
                    SAT Tracker
                  </h2>
                </div>
                <div className="flex items-center gap-1 text-[9px] font-black uppercase tracking-wider font-['JetBrains_Mono']">
                  <span className="text-amber-400">PRO</span>
                  <span className="text-emerald-300">&bull;</span>
                  <span className="text-emerald-300">ANTI-BURNOUT</span>
                </div>
                <div className="text-[10px] font-bold font-mono mt-0.5 truncate text-emerald-200/85">
                  Nov 7 Exam &bull; 44d left
                </div>
              </div>
            )}
          </div>

          {/* 3. User Profile Card / Sign In (Exact Scholar / Sign In UI with squircle avatar and online dot) */}
          <div
            className={`rounded-2xl border transition-all select-none group relative bg-[#173319]/80 border-[#38643a] hover:border-[#529355] hover:bg-[#1d3d1f] ${
              isCollapsed ? 'p-2 flex flex-col items-center gap-1.5' : 'p-2.5 flex items-center justify-between gap-2.5'
            }`}
          >
            {/* Clickable Area: Links to /login if not signed in */}
            <Link
              href={session?.user ? '#' : '/login'}
              id="sidebar-user-card-btn"
              className="flex items-center gap-2.5 min-w-0 flex-1 cursor-pointer"
              title={session?.user ? userName : 'Scholar • Click to Sign In'}
            >
              {/* Orange Squircle Avatar with Emerald Green Online Dot */}
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
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#10b981] border-2 border-[#173319]" />
              </div>

              {/* Title & Motivational Subtitle */}
              {!isCollapsed && (
                <div className="min-w-0 leading-tight flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-black truncate font-['Plus_Jakarta_Sans'] text-white">
                      {session?.user ? userName : 'Scholar'}
                    </span>
                    {!session?.user && (
                      <span className="text-[9px] font-black uppercase px-1.5 py-0.2 rounded font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                        Sign In
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] font-medium truncate mt-0.5 text-emerald-200/80">
                    {session?.user ? (session.user.email || 'Keep learning, keep growing') : 'Keep learning, keep g...'}
                  </p>
                </div>
              )}
            </Link>

            {/* Right Side: Streak Flame Pill (15 🔥) & Sign Out Button */}
            {!isCollapsed ? (
              <div className="flex items-center gap-1.5 shrink-0">
                <div
                  className="px-2.5 py-1 rounded-xl border text-xs font-black font-['JetBrains_Mono'] flex items-center gap-1 shadow-xs bg-amber-400/20 text-amber-300 border-amber-400/40"
                  title={`${streakCount} Days Study Streak`}
                >
                  <span>{streakCount}</span>
                  <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                </div>

                {session?.user && (
                  <button
                    type="button"
                    onClick={() => signOut({ callbackUrl: '/' })}
                    className="p-1 rounded-lg text-emerald-300/70 hover:text-rose-400 hover:bg-rose-500/10 transition cursor-pointer"
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
                      ? 'bg-gradient-to-r from-[#2c592f] to-[#39723d] text-white shadow-md border border-[#5da062]'
                      : 'text-emerald-100/85 hover:text-white hover:bg-[#2b542d] border border-transparent'
                  }`}
                >
                  {/* Left Active Glow Indicator */}
                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 rounded-r-full bg-emerald-400" />
                  )}

                  {/* Icon */}
                  <Icon
                    className={`w-4 h-4 shrink-0 transition-transform group-hover:scale-110 ${
                      isActive ? 'text-emerald-300' : 'text-emerald-300/80 group-hover:text-emerald-200'
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
                        item.badgeColor || 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                </Link>

                {/* Floating Tooltip in Collapsed Mode */}
                {isCollapsed && (
                  <div className="opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-3 px-2.5 py-1.5 text-xs font-bold rounded-xl border border-[#3b663d] bg-[#19361b] text-white shadow-xl z-50 whitespace-nowrap flex items-center gap-1.5 font-['JetBrains_Mono']">
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
        {/* BOTTOM SECTION: 90-MIN TIMER TRIGGER + STATS + COLLAPSE       */}
        {/* ============================================================== */}
        <div className="p-3 border-t border-[#325a34] bg-[#19361b] space-y-2 shrink-0">
          {/* Quick Launch 90-Min Cap Timer Button */}
          {onOpenTimer && (
            <button
              type="button"
              id="sidebar-timer-trigger-btn"
              onClick={onOpenTimer}
              className={`w-full py-2 px-2.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:brightness-105 active:scale-95 text-slate-950 font-black text-xs transition-all shadow-md flex items-center gap-2 cursor-pointer ${
                isCollapsed ? 'justify-center px-1' : 'justify-between'
              }`}
              title="Launch 90-Min Daily Cap Timer"
            >
              <div className="flex items-center gap-2 truncate">
                <Clock className="w-4 h-4 shrink-0 text-slate-950" />
                {!isCollapsed && <span className="truncate font-['JetBrains_Mono'] font-black">90-Min Cap Timer</span>}
              </div>
              {!isCollapsed && <Play className="w-3 h-3 fill-slate-950 shrink-0" />}
            </button>
          )}

          {/* Quick Stats or Footer Meta */}
          {!isCollapsed && (
            <div className="p-2 rounded-xl bg-[#142b15]/80 border border-[#325a34] text-[10px] text-emerald-200/80 font-['JetBrains_Mono'] flex items-center justify-between">
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
              className={`w-full py-1.5 px-2 rounded-xl text-[11px] font-bold text-emerald-200/80 hover:text-white hover:bg-[#284e2a] transition flex items-center gap-2 cursor-pointer border border-[#325a34] ${
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
