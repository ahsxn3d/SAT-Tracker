import { DayPlan } from '../types';

export type DayLoadDifficulty = 'rest' | 'light' | 'standard' | 'intensive' | 'test' | 'exam';

export interface DifficultyConfig {
  type: DayLoadDifficulty;
  label: string;
  shortLabel: string;
  badgeText: string;
  badgeClass: string;
  calendarCellClass: string;
  cardBorderClass: string;
  cardBgClass: string;
  dotColor: string;
  performanceDescription: string;
  description: string;
}

export const DIFFICULTY_CONFIGS: Record<DayLoadDifficulty, DifficultyConfig> = {
  rest: {
    type: 'rest',
    label: 'Rest & Recovery',
    shortLabel: 'Rest',
    badgeText: '🌴 Rest (0 Units)',
    badgeClass: 'bg-emerald-200 text-emerald-950 border-emerald-300 font-black',
    calendarCellClass: 'bg-emerald-50/90 border-emerald-400 text-emerald-950 hover:bg-emerald-100/80 ring-1 ring-emerald-300/60',
    cardBorderClass: 'border-emerald-400',
    cardBgClass: 'bg-emerald-50/70',
    dotColor: 'bg-emerald-500',
    performanceDescription: 'Performance: Rest & Cognitive Recovery • Zero assigned lessons',
    description: 'Zero assigned lessons • Guaranteed mental recovery & emergency buffer',
  },
  light: {
    type: 'light',
    label: 'Light Performance (Low Load)',
    shortLabel: 'Light',
    badgeText: '⚡ Light Load',
    badgeClass: 'bg-sky-100 text-sky-950 border-sky-300 font-black',
    calendarCellClass: 'bg-sky-50/90 border-sky-400 text-sky-950 hover:bg-sky-100/80 ring-1 ring-sky-300/60',
    cardBorderClass: 'border-sky-400',
    cardBgClass: 'bg-sky-50/70',
    dotColor: 'bg-sky-500',
    performanceDescription: 'Performance: Light Effort (20–30m) • Quick targeted review',
    description: 'Reduced cognitive load • Focused drills for easy flow and deep comprehension',
  },
  standard: {
    type: 'standard',
    label: 'Medium Performance (Standard Load)',
    shortLabel: 'Medium',
    badgeText: '🎯 Medium Load',
    badgeClass: 'bg-matcha-sub text-slate-900 border-[#a6c4a1] font-black',
    calendarCellClass: 'bg-matcha-input border-[#a6c4a1]/80 text-slate-900 hover:bg-matcha-sub',
    cardBorderClass: 'border-[#a6c4a1]',
    cardBgClass: 'bg-matcha-input',
    dotColor: 'bg-emerald-600',
    performanceDescription: 'Performance: Medium Effort (90m Window) • Math + Break + RW',
    description: 'Balanced daily load • 45m Math + 10m Break + 35m RW structured focus',
  },
  intensive: {
    type: 'intensive',
    label: 'Hard / Intensive Sprint',
    shortLabel: 'Hard',
    badgeText: '🔥 Hard / Sprint',
    badgeClass: 'bg-amber-100 text-amber-950 border-amber-300 font-black',
    calendarCellClass: 'bg-amber-50/85 border-amber-400 text-amber-950 hover:bg-amber-100/80 ring-1 ring-amber-300/60',
    cardBorderClass: 'border-amber-400',
    cardBgClass: 'bg-amber-50/70',
    dotColor: 'bg-amber-500',
    performanceDescription: 'Performance: High Intensity Sprint (90–120m) • Peak effort',
    description: 'Peak effort sprint • Extended units with strict door-to-door timer adherence',
  },
  test: {
    type: 'test',
    label: 'Mock Test Simulation',
    shortLabel: 'Mock',
    badgeText: '📝 Mock Exam',
    badgeClass: 'bg-indigo-100 text-indigo-950 border-indigo-300 font-black',
    calendarCellClass: 'bg-indigo-50/95 border-indigo-400 text-indigo-950 hover:bg-indigo-100/90 ring-1 ring-indigo-300/60',
    cardBorderClass: 'border-indigo-400',
    cardBgClass: 'bg-indigo-50/80',
    dotColor: 'bg-indigo-600',
    performanceDescription: 'Performance: Full Timed Simulation (134 Mins) • Bluebook Test & Error Log',
    description: 'Full-length Bluebook exam diagnostic simulation under real testing conditions',
  },
  exam: {
    type: 'exam',
    label: 'Official SAT Exam',
    shortLabel: 'Official SAT',
    badgeText: '🏆 Official SAT',
    badgeClass: 'bg-amber-300 text-slate-950 font-black shadow-xs',
    calendarCellClass: 'bg-gradient-to-br from-amber-500 via-rose-500 to-rose-700 text-white border-amber-300 shadow-md ring-2 ring-amber-300/80',
    cardBorderClass: 'border-amber-400',
    cardBgClass: 'bg-gradient-to-br from-amber-500/10 via-rose-500/10 to-rose-700/10',
    dotColor: 'bg-rose-500',
    performanceDescription: 'Performance: Real Exam Day • Crescent Model School Center (7:15 AM Gates Close)',
    description: 'Crescent Model Higher Secondary School • 7:15 AM Paper Day',
  },
};

/**
 * Returns the difficulty and visual configuration for any study day
 */
export function getDayLoadDifficulty(day: DayPlan): DifficultyConfig {
  if (day.dateStr === '2026-11-07') {
    return DIFFICULTY_CONFIGS.exam;
  }

  if (day.isTestDay || day.tasks.some((t) => t.subject === 'test')) {
    return DIFFICULTY_CONFIGS.test;
  }

  if (day.isBuffer || day.tasks.length <= 1) {
    return DIFFICULTY_CONFIGS.rest;
  }

  const count = day.tasks.length;
  
  // Light day: 2 tasks (e.g. single subject or light buffer drill)
  if (count === 2) {
    return DIFFICULTY_CONFIGS.light;
  }

  // Medium day: 3 to 4 tasks (standard balanced day: 2 Math + 1 RW, or 1 Math + 2 RW)
  if (count <= 4) {
    return DIFFICULTY_CONFIGS.standard;
  }

  // Hard day: 5 or more tasks (heavy backlog rollover or intensive drill)
  return DIFFICULTY_CONFIGS.intensive;
}
