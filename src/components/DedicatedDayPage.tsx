import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Circle, 
  Clock, 
  Coffee, 
  BookOpen, 
  Calculator, 
  Sparkles, 
  ShieldCheck, 
  Play, 
  Pause, 
  RotateCcw, 
  ExternalLink, 
  AlertTriangle, 
  FileText, 
  Save, 
  Check, 
  Trophy,
  Volume2,
  VolumeX,
  Target
} from 'lucide-react';
import { DayPlan, TaskItem, DaySessionTiming, PaceRating } from '../types';

interface DedicatedDayPageProps {
  day: DayPlan;
  completedTaskIds: Record<string, boolean>;
  onToggleTask: (taskId: string) => void;
  sessionTiming?: DaySessionTiming;
  onSaveSessionTiming: (timing: DaySessionTiming) => void;
  onDeleteSessionTiming: (dateStr: string) => void;
  onLaunchTimerModal: (dayTitle: string, dateStr: string) => void;
  notes: string;
  onSaveNotes: (dateStr: string, text: string) => void;
  onBack: () => void;
  onNavigateDay: (targetDateStr: string) => void;
  allDays: DayPlan[];
  onOpenErrorLogModal: (preselectedDate?: string) => void;
  onOpenDesmosModal: () => void;
  onOpenPackingModal: () => void;
}

export function DedicatedDayPage({
  day,
  completedTaskIds,
  onToggleTask,
  sessionTiming,
  onSaveSessionTiming,
  onDeleteSessionTiming,
  onLaunchTimerModal,
  notes,
  onSaveNotes,
  onBack,
  onNavigateDay,
  allDays,
  onOpenErrorLogModal,
  onOpenDesmosModal,
  onOpenPackingModal,
}: DedicatedDayPageProps) {
  // Local notes editing state
  const [currentNotes, setCurrentNotes] = useState(notes || '');
  const [notesSavedAlert, setNotesSavedAlert] = useState(false);

  // Synchronize when day changes
  useEffect(() => {
    setCurrentNotes(notes || '');
    setNotesSavedAlert(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [day.dateStr, notes]);

  // Handle ESC key to return to calendar
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onBack();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onBack]);

  // Tasks categorized
  const mathTasks = useMemo(() => day.tasks.filter((t) => t.subject === 'math'), [day.tasks]);
  const rwTasks = useMemo(() => day.tasks.filter((t) => t.subject === 'rw'), [day.tasks]);
  const otherTasks = useMemo(() => day.tasks.filter((t) => t.subject !== 'math' && t.subject !== 'rw'), [day.tasks]);

  const totalTasks = day.tasks.length;
  const completedTasks = day.tasks.filter((t) => completedTaskIds[t.id]).length;
  const isAllComplete = totalTasks > 0 && completedTasks === totalTasks;
  const progressPercent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  // Find previous and next days in the full plan
  const currentIndex = useMemo(() => {
    return allDays.findIndex((d) => d.dateStr === day.dateStr);
  }, [allDays, day.dateStr]);

  const prevDay = currentIndex > 0 ? allDays[currentIndex - 1] : null;
  const nextDay = currentIndex >= 0 && currentIndex < allDays.length - 1 ? allDays[currentIndex + 1] : null;

  const isExamDay = day.dateStr === '2026-11-07';
  const isKickoffDay = day.dateStr === '2026-09-12';

  // Manual pacing calculator quick inputs
  const [manualMathMinutes, setManualMathMinutes] = useState(35);
  const [isManualLogging, setIsManualLogging] = useState(false);

  const handleSaveManualTiming = () => {
    const mins = Math.max(1, Math.min(120, manualMathMinutes));
    let rating: PaceRating = 'perfect';
    let ratingLabel = 'Fully Perfect Pace';
    let ratingDescription = `You finished Math in ${mins}m while having 45m allocated. This specific range (28–45 mins) is fully perfect—allowing deep focus, question verification, and Desmos plotting without rushing or falling behind.`;
    let badgeBg = 'bg-emerald-100';
    let badgeText = 'text-emerald-900';
    let badgeBorder = 'border-emerald-300';

    if (mins < 28) {
      rating = 'too_fast';
      ratingLabel = 'Too Fast (< 28 mins)';
      ratingDescription = `You completed Math in ${mins}m (under 28 mins). This specific range is too fast. Rushing invites sign errors, missed constraints, and skipped Desmos verification. Use your full 45m buffer to double-check!`;
      badgeBg = 'bg-rose-100';
      badgeText = 'text-rose-900';
      badgeBorder = 'border-rose-300';
    } else if (mins > 45) {
      rating = 'too_late';
      ratingLabel = 'Too Late (> 45 mins)';
      ratingDescription = `You took ${mins}m on Math (exceeded the 45m cap). This specific range causes cognitive burnout and test-day time exhaustion. Triage harder questions faster.`;
      badgeBg = 'bg-amber-100';
      badgeText = 'text-amber-900';
      badgeBorder = 'border-amber-300';
    }

    const timingRecord: DaySessionTiming = {
      dateStr: day.dateStr,
      dayTitle: `${day.formattedDate} - ${day.weekTitle}`,
      completedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      math: {
        allocatedMinutes: 45,
        actualMinutes: mins,
        actualSeconds: mins * 60,
        rating,
        ratingLabel,
        ratingDescription,
        badgeBg,
        badgeText,
        badgeBorder,
      },
      breakTime: {
        allocatedMinutes: 10,
        actualMinutes: 10,
        actualSeconds: 600,
        rating: 'perfect',
        ratingLabel: 'Fully Perfect Rest',
        ratingDescription: '10-minute eye relaxation break away from screens.',
        badgeBg: 'bg-emerald-100',
        badgeText: 'text-emerald-900',
        badgeBorder: 'border-emerald-300',
      },
      rw: {
        allocatedMinutes: 35,
        actualMinutes: 35,
        actualSeconds: 2100,
        rating: 'perfect',
        ratingLabel: 'Fully Perfect Pace',
        ratingDescription: 'Reading & Writing section completed on target within 35 mins.',
        badgeBg: 'bg-emerald-100',
        badgeText: 'text-emerald-900',
        badgeBorder: 'border-emerald-300',
      },
      totalSessionMinutes: mins + 10 + 35,
      overallRating: rating,
    };

    onSaveSessionTiming(timingRecord);
    setIsManualLogging(false);
  };

  const handleNotesBlur = () => {
    onSaveNotes(day.dateStr, currentNotes);
    setNotesSavedAlert(true);
    setTimeout(() => setNotesSavedAlert(false), 2500);
  };

  return (
    <div className="min-h-screen bg-[#d7e5d2] text-slate-900 selection:bg-indigo-500 selection:text-white pb-24">
      {/* Top Floating Navigation Bar with Room to Breathe */}
      <header className="sticky top-0 z-30 ios-glass-header transition-all">
        <div className="max-w-[1740px] w-full mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onBack}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-black font-['Space_Grotesk'] text-slate-800 bg-matcha-sub hover:bg-matcha-input border-2 border-[#a6c4a1]/70 shadow-xs hover:scale-105 active:scale-95 transition-all cursor-pointer"
              title="Return to Master Calendar (Esc)"
            >
              <ArrowLeft className="w-4 h-4 text-indigo-600" />
              <span>Back to Calendar</span>
              <kbd className="hidden sm:inline-block ml-1 px-1.5 py-0.5 text-[10px] font-mono bg-matcha-input border border-[#a6c4a1]/60 rounded text-slate-500">
                ESC
              </kbd>
            </button>

            <span className="hidden md:inline-block text-xs font-semibold text-slate-500">
              /
            </span>
            <span className="hidden md:inline-block text-xs font-bold text-slate-700 font-['JetBrains_Mono'] truncate">
              {day.weekTitle}
            </span>
          </div>

          {/* Quick Traverse: Previous & Next Day Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => prevDay && onNavigateDay(prevDay.dateStr)}
              disabled={!prevDay}
              className={`inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold border ${
                prevDay
                  ? 'bg-matcha-input hover:bg-matcha-sub text-slate-800 border-[#a6c4a1]/70 shadow-2xs hover:scale-105 cursor-pointer'
                  : 'bg-matcha-sub/40 text-slate-400 border-[#a6c4a1]/40 cursor-not-allowed opacity-50'
              } transition-all`}
              title={prevDay ? `Go to ${prevDay.formattedDate}` : 'Beginning of schedule'}
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">{prevDay ? prevDay.formattedDate : 'Start'}</span>
              <span className="sm:hidden">Prev</span>
            </button>

            <span className="text-xs font-black font-['JetBrains_Mono'] px-2 py-1 rounded-lg bg-indigo-50 text-indigo-900 border border-indigo-200">
              {day.formattedDate}
            </span>

            <button
              onClick={() => nextDay && onNavigateDay(nextDay.dateStr)}
              disabled={!nextDay}
              className={`inline-flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold border ${
                nextDay
                  ? 'bg-matcha-input hover:bg-matcha-sub text-slate-800 border-[#a6c4a1]/70 shadow-2xs hover:scale-105 cursor-pointer'
                  : 'bg-matcha-sub/40 text-slate-400 border-[#a6c4a1]/40 cursor-not-allowed opacity-50'
              } transition-all`}
              title={nextDay ? `Go to ${nextDay.formattedDate}` : 'End of schedule'}
            >
              <span className="hidden sm:inline">{nextDay ? nextDay.formattedDate : 'End'}</span>
              <span className="sm:hidden">Next</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Spacious Dedicated Content Canvas */}
      <main className="max-w-[1740px] w-full mx-auto px-4 sm:px-8 pt-8 sm:pt-12 space-y-8 sm:space-y-10">
        
        {/* ============================================================ */}
        {/* HERO DAY MISSION HEADER (Room to Breathe & Clear Visuals)    */}
        {/* ============================================================ */}
        <section className={`p-6 sm:p-9 rounded-3xl border-2 shadow-grave transition-all ${
          isExamDay
            ? 'bg-gradient-to-br from-amber-500 via-rose-600 to-slate-900 text-white border-amber-300 ring-4 ring-amber-300/60'
            : day.isBuffer
            ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950'
            : isKickoffDay
            ? 'bg-matcha-input border-indigo-400'
            : 'bg-matcha-input border-slate-300'
        }`}>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider font-['JetBrains_Mono'] shadow-xs ${
                  isExamDay
                    ? 'bg-amber-300 text-slate-950 font-extrabold'
                    : isKickoffDay
                    ? 'bg-indigo-600 text-white'
                    : day.isBuffer
                    ? 'bg-emerald-600 text-white'
                    : 'bg-slate-900 text-white'
                }`}>
                  <Target className="w-3.5 h-3.5" />
                  <span>
                    {isExamDay
                      ? 'D-DAY SAT PAPER EXAM'
                      : isKickoffDay
                      ? 'DAY 1 KICKOFF'
                      : day.isBuffer
                      ? 'BUFFER RECOVERY'
                      : `WEEK ${day.weekNumber} • DAY`}
                  </span>
                </span>

                <span className="text-xs font-['JetBrains_Mono'] font-extrabold uppercase px-2.5 py-1 rounded-full bg-matcha-sub text-slate-800 border border-[#a6c4a1]/70">
                  {day.phase} Phase
                </span>

                <span className={`text-xs font-['JetBrains_Mono'] font-black px-2.5 py-1 rounded-full border ${
                  isAllComplete
                    ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
                    : 'bg-matcha-sub text-slate-700 border border-[#a6c4a1]/60'
                }`}>
                  {progressPercent}% Tasks Completed ({completedTasks}/{totalTasks})
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-['Space_Grotesk'] tracking-tight leading-tight">
                {day.formattedDate}
              </h1>

              <p className="text-sm sm:text-base text-slate-600 font-medium max-w-2xl leading-relaxed">
                {isExamDay
                  ? 'Bring original Smart CNIC / Passport, fully charged device with updated Bluebook app, and admission ticket.'
                  : day.isBuffer
                  ? 'Guaranteed anti-burnout buffer day. Rest, disconnect from screens, and let neural connections consolidate.'
                  : day.specialInstructions ||
                    'Focus deeply for 90 minutes. 45m Math (pacing: 28-45m), 10m restorative rest, and 35m Reading & Writing.'}
              </p>
            </div>

            {/* Launch Timer CTA or Session Autopsy Status */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
              <button
                onClick={() => onLaunchTimerModal(`${day.formattedDate} - ${day.weekTitle}`, day.dateStr)}
                className="px-5 py-3.5 rounded-2xl text-sm font-black font-['Space_Grotesk'] text-white bg-indigo-600 hover:bg-indigo-700 border-2 border-indigo-700 shadow-grave-card hover:shadow-grave-card-hover hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Launch 90-Min Timer</span>
              </button>

              <button
                onClick={() => onOpenErrorLogModal(day.dateStr)}
                className="px-4 py-2.5 rounded-xl text-xs font-black font-['JetBrains_Mono'] text-slate-700 bg-matcha-sub hover:bg-matcha-input border border-[#a6c4a1]/70 shadow-2xs hover:scale-102 transition flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-rose-600" />
                <span>Log Mistake to Error Log</span>
              </button>
            </div>
          </div>

          {/* Progress Bar for this Day */}
          <div className="mt-6 pt-5 border-t border-slate-200/80 space-y-2">
            <div className="flex items-center justify-between text-xs font-black font-['JetBrains_Mono'] text-slate-700">
              <span>Day Progress</span>
              <span>{progressPercent}% Complete</span>
            </div>
            <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden border border-slate-300 shadow-inner">
              <div
                className={`h-full transition-all duration-500 rounded-full ${
                  isAllComplete
                    ? 'bg-emerald-500'
                    : progressPercent > 0
                    ? 'bg-indigo-600'
                    : 'bg-transparent'
                }`}
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 90-MINUTE SESSION TIMING & PACING AUTOPSY STUDIO             */}
        {/* ============================================================ */}
        <section className="bg-matcha-input rounded-3xl border-2 border-slate-300 shadow-grave p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-200 pb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-indigo-100 text-indigo-700 border border-indigo-200 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black font-['Space_Grotesk'] text-slate-900">
                  Daily 2-Hour Routine & Pacing Autopsy
                </h2>
                <p className="text-xs text-slate-600 font-medium">
                  45m Math &bull; 15m Real Break &bull; 40m RW &bull; 10m Real Break &bull; 10m Tracker Log (85m study total)
                </p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-2 flex-wrap">
              {sessionTiming ? (
                <button
                  onClick={() => onDeleteSessionTiming(day.dateStr)}
                  className="text-xs font-bold text-rose-600 hover:text-rose-800 underline px-2 py-1 cursor-pointer"
                >
                  Clear Saved Record
                </button>
              ) : (
                <button
                  onClick={() => setIsManualLogging(!isManualLogging)}
                  className="text-xs font-bold font-['JetBrains_Mono'] px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-300 cursor-pointer"
                >
                  {isManualLogging ? 'Cancel Manual Input' : 'Quick Log Duration'}
                </button>
              )}
            </div>
          </div>

          {/* Quick Manual Timing Logger Drawer */}
          {isManualLogging && !sessionTiming && (
            <div className="p-4 sm:p-5 rounded-2xl bg-indigo-50 border-2 border-indigo-200 space-y-3">
              <div className="text-xs font-black uppercase text-indigo-900 font-['JetBrains_Mono']">
                Record Offline Session Math Time (45 Mins Allocated)
              </div>
              <p className="text-xs text-indigo-800 font-medium">
                Enter how many minutes you actually spent on the Math section today to evaluate your pacing against the 3 ranges:
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min={5}
                    max={90}
                    value={manualMathMinutes}
                    onChange={(e) => setManualMathMinutes(Number(e.target.value))}
                    className="w-24 px-3 py-2 rounded-xl border-2 border-indigo-300 font-['JetBrains_Mono'] font-bold text-center text-slate-900 bg-matcha-input shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <span className="text-xs font-black font-['JetBrains_Mono'] text-slate-700">minutes</span>
                </div>
                <button
                  onClick={handleSaveManualTiming}
                  className="px-4 py-2 rounded-xl text-xs font-black font-['Space_Grotesk'] text-white bg-indigo-600 hover:bg-indigo-700 shadow-xs cursor-pointer"
                >
                  Evaluate Pacing & Save
                </button>
              </div>
            </div>
          )}

          {/* Pacing Diagnostic Card (If Logged) */}
          {sessionTiming ? (
            <div className={`p-5 sm:p-6 rounded-2xl border-2 shadow-sm space-y-5 ${
              sessionTiming.math.rating === 'perfect'
                ? 'bg-emerald-50/80 border-emerald-300'
                : sessionTiming.math.rating === 'too_fast'
                ? 'bg-rose-50/80 border-rose-300'
                : 'bg-amber-50/80 border-amber-300'
            }`}>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-200/80 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black uppercase tracking-wider font-['JetBrains_Mono'] text-slate-800">
                    Math Section Pacing Diagnostic
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 font-semibold">
                    (Logged at {sessionTiming.completedAt})
                  </span>
                </div>

                <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider font-['JetBrains_Mono'] shadow-xs ${
                  sessionTiming.math.rating === 'perfect'
                    ? 'bg-emerald-600 text-white'
                    : sessionTiming.math.rating === 'too_fast'
                    ? 'bg-rose-600 text-white'
                    : 'bg-amber-600 text-white'
                }`}>
                  {sessionTiming.math.ratingLabel}
                </span>
              </div>

              {/* Big Metrics Display */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-2xl bg-matcha-input border border-slate-200 shadow-xs">
                  <div className="text-[10px] font-black uppercase text-slate-500 font-['JetBrains_Mono']">
                    Math Time Taken
                  </div>
                  <div className="text-3xl font-black font-['JetBrains_Mono'] text-slate-900 mt-1">
                    {sessionTiming.math.actualMinutes}m
                  </div>
                  <div className="text-xs font-semibold text-slate-500 mt-0.5">
                    out of 45m allocated
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-matcha-input border border-slate-200 shadow-xs">
                  <div className="text-[10px] font-black uppercase text-slate-500 font-['JetBrains_Mono']">
                    Restorative Break
                  </div>
                  <div className="text-3xl font-black font-['JetBrains_Mono'] text-sky-700 mt-1">
                    {sessionTiming.breakTime ? `${sessionTiming.breakTime.actualMinutes}m` : '10m'}
                  </div>
                  <div className="text-xs font-semibold text-slate-500 mt-0.5">
                    10m eye relaxation cap
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-matcha-input border border-slate-200 shadow-xs">
                  <div className="text-[10px] font-black uppercase text-slate-500 font-['JetBrains_Mono']">
                    Reading & Writing
                  </div>
                  <div className="text-3xl font-black font-['JetBrains_Mono'] text-amber-700 mt-1">
                    {sessionTiming.rw ? `${sessionTiming.rw.actualMinutes}m` : '35m'}
                  </div>
                  <div className="text-xs font-semibold text-slate-500 mt-0.5">
                    35m section cap
                  </div>
                </div>
              </div>

              {/* 3 Explicit Ranges Spectrum Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-black font-['JetBrains_Mono'] text-slate-800">
                  <span className="text-rose-700">Range 1: 0–27m (Too Fast)</span>
                  <span className="text-emerald-800 font-black">Range 2: 28–45m (Fully Perfect)</span>
                  <span className="text-amber-800">Range 3: 46m+ (Too Late)</span>
                </div>

                <div className="relative h-7 rounded-full overflow-hidden flex shadow-inner bg-slate-200 border-2 border-slate-300">
                  <div className="w-[30%] bg-rose-400 flex items-center justify-center text-[9px] font-black text-white uppercase tracking-wider">
                    Too Fast
                  </div>
                  <div className="w-[45%] bg-emerald-500 flex items-center justify-center text-[10px] font-black text-white uppercase tracking-wider shadow-sm">
                    ★ Fully Perfect (28–45m) ★
                  </div>
                  <div className="w-[25%] bg-amber-400 flex items-center justify-center text-[9px] font-black text-slate-950 uppercase tracking-wider">
                    Too Late
                  </div>
                </div>

                {/* Analysis Box */}
                <div className="bg-matcha-input p-4 rounded-2xl border border-slate-200 text-xs text-slate-800 space-y-2.5 leading-relaxed shadow-xs">
                  <div className="font-black text-slate-900 flex items-center gap-2 text-sm">
                    <span className={`w-3 h-3 rounded-full inline-block ${
                      sessionTiming.math.rating === 'perfect'
                        ? 'bg-emerald-500'
                        : sessionTiming.math.rating === 'too_fast'
                        ? 'bg-rose-500'
                        : 'bg-amber-500'
                    }`} />
                    <span>Your Result: {sessionTiming.math.actualMinutes} mins in Math ({sessionTiming.math.ratingLabel})</span>
                  </div>

                  <p className="font-semibold text-slate-700 text-xs sm:text-sm">
                    {sessionTiming.math.ratingDescription}
                  </p>

                  <div className="pt-2 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
                    <div className="p-3 rounded-xl bg-rose-50/80 border border-rose-200">
                      <span className="font-black text-rose-900 font-['JetBrains_Mono'] block">Range 1 (&lt; 28m):</span>
                      <span className="text-rose-950 font-medium">This specific range is <strong>too fast</strong>. Rushing invites sign errors, missed constraints, and skipped Desmos verification.</span>
                    </div>
                    <div className="p-3 rounded-xl bg-emerald-50/80 border border-emerald-300 ring-1 ring-emerald-300">
                      <span className="font-black text-emerald-900 font-['JetBrains_Mono'] block">Range 2 (28–45m):</span>
                      <span className="text-emerald-950 font-medium">This specific range is <strong>fully perfect</strong>. Optimal pace: leaves ample time to verify answers without rushing!</span>
                    </div>
                    <div className="p-3 rounded-xl bg-amber-50/80 border border-amber-200">
                      <span className="font-black text-amber-950 font-['JetBrains_Mono'] block">Range 3 (&gt; 45m):</span>
                      <span className="text-amber-950 font-medium">This specific range is <strong>too late</strong>. Causes cognitive burnout and test-day time exhaustion.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-5 rounded-2xl bg-indigo-50/60 border-2 border-indigo-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm font-black text-indigo-950 font-['Space_Grotesk']">
                  <Clock className="w-4 h-4 text-indigo-600" />
                  <span>No Timing Logged for {day.formattedDate} Yet</span>
                </div>
                <p className="text-xs text-indigo-800 font-medium max-w-xl">
                  Benchmark: Aim for 28–45 minutes on the Math section. Launch the built-in timer or enter your offline duration to generate your pacing autopsy report.
                </p>
              </div>

              <button
                onClick={() => onLaunchTimerModal(`${day.formattedDate} - ${day.weekTitle}`, day.dateStr)}
                className="px-5 py-3 rounded-xl text-xs font-black font-['Space_Grotesk'] text-white bg-indigo-600 hover:bg-indigo-700 shadow-xs hover:scale-105 active:scale-95 transition flex items-center justify-center gap-1.5 shrink-0 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-white" />
                <span>Start 90-Min Timer Now</span>
              </button>
            </div>
          )}
        </section>

        {/* Carried-Over Backlog Banner if uncompleted tasks rolled over */}
        {day.hasCarriedOverTasks && (
          <div className="p-4 sm:p-5 rounded-3xl bg-amber-500/15 border-2 border-amber-400/80 text-amber-950 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-black shrink-0 shadow-xs">
                <RotateCcw className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-sm sm:text-base font-black font-['Space_Grotesk'] text-slate-950">
                    {day.carriedOverCount} Incomplete Task{day.carriedOverCount === 1 ? '' : 's'} Carried Over
                  </h3>
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-amber-200 text-amber-900 border border-amber-400 font-['JetBrains_Mono']">
                    Dynamic Rollover Active
                  </span>
                </div>
                <p className="text-xs text-amber-900 font-medium mt-0.5">
                  These tasks were left uncompleted on previous days. Checking them off here will automatically mark them as completed on both today and their original assigned date!
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* BOTH SUBJECTS & COMPLETE TASKS PROCESS                       */}
        {/* ============================================================ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Math Section (45 Mins Allocation) */}
          <section className="bg-matcha-input rounded-3xl border-2 border-slate-300 shadow-grave p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3.5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-700 border border-indigo-200 flex items-center justify-center shrink-0">
                  <Calculator className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-black font-['Space_Grotesk'] text-slate-900">
                    Math Section
                  </h3>
                  <p className="text-[11px] font-bold text-indigo-700 font-['JetBrains_Mono']">
                    45 Mins Target &bull; Desmos Graphing Ready
                  </p>
                </div>
              </div>

              <button
                onClick={onOpenDesmosModal}
                className="px-2.5 py-1.5 rounded-lg text-[11px] font-bold font-['JetBrains_Mono'] text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 transition cursor-pointer"
                title="View Desmos 800-Level Keyboard Cheatsheet"
              >
                Desmos Guide &rarr;
              </button>
            </div>

            {mathTasks.length > 0 ? (
              <div className="space-y-2.5">
                {mathTasks.map((task) => {
                  const isDone = !!completedTaskIds[task.id];
                  return (
                    <div
                      key={task.id}
                      onClick={() => onToggleTask(task.id)}
                      role="button"
                      tabIndex={0}
                      className={`task-check-card calendar-date-neon-hover p-3.5 rounded-2xl border-2 flex items-start gap-3 cursor-pointer select-none ${
                        isDone
                          ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950'
                          : 'bg-matcha-sub border-[#a6c4a1]/60'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleTask(task.id);
                        }}
                        className="task-check-dot mt-0.5 text-indigo-600 transition shrink-0 cursor-pointer"
                      >
                        {isDone ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                        ) : (
                          <Circle className="w-5 h-5 text-slate-400 hover:text-emerald-600" />
                        )}
                      </button>

                      <div className="space-y-1 min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          {task.code && (
                            <span className="text-[10px] font-black font-['JetBrains_Mono'] px-2 py-0.5 rounded bg-indigo-100 text-indigo-900 border border-indigo-200">
                              {task.code}
                            </span>
                          )}
                          {task.isCarriedOver && (
                            <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-950 border border-amber-300 font-['JetBrains_Mono'] flex items-center gap-1 shadow-xs">
                              <RotateCcw className="w-2.5 h-2.5 text-amber-700" />
                              <span>Rollover from {task.originalFormattedDate}</span>
                            </span>
                          )}
                          <span className={`text-xs font-bold leading-snug ${isDone ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                            {task.label}
                          </span>
                        </div>
                        {task.topic && (
                          <div className="text-[11px] text-slate-500 font-medium">
                            Unit Topic: <span className="font-semibold text-slate-700">{task.topic}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="p-6 rounded-2xl bg-matcha-sub border border-dashed border-slate-200 text-center text-xs text-slate-500 font-medium">
                {day.isBuffer ? 'Buffer Rest Day — No Math assignments assigned!' : 'No Math modules scheduled for today.'}
              </div>
            )}
          </section>

          {/* Reading & Writing Section (35 Mins Allocation) */}
          <section className="bg-matcha-input rounded-3xl border-2 border-slate-300 shadow-grave p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3.5">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 border border-amber-200 flex items-center justify-center shrink-0">
                  <BookOpen className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-lg font-black font-['Space_Grotesk'] text-slate-900">
                    Reading & Writing Section
                  </h3>
                  <p className="text-[11px] font-bold text-amber-700 font-['JetBrains_Mono']">
                    35 Mins Target &bull; Context Clues & Boundaries
                  </p>
                </div>
              </div>
            </div>

            {rwTasks.length > 0 ? (
              <div className="space-y-2.5">
                {rwTasks.map((task) => {
                  const isDone = !!completedTaskIds[task.id];
                  return (
                    <div
                      key={task.id}
                      onClick={() => onToggleTask(task.id)}
                      role="button"
                      tabIndex={0}
                      className={`task-check-card calendar-date-neon-hover p-3.5 rounded-2xl border-2 flex items-start gap-3 cursor-pointer select-none ${
                        isDone
                          ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950'
                          : 'bg-matcha-sub border-[#a6c4a1]/60'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleTask(task.id);
                        }}
                        className="task-check-dot mt-0.5 text-amber-600 transition shrink-0 cursor-pointer"
                      >
                        {isDone ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                        ) : (
                          <Circle className="w-5 h-5 text-slate-400 hover:text-amber-600" />
                        )}
                      </button>

                      <div className="space-y-1 min-w-0 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          {task.code && (
                            <span className="text-[10px] font-black font-['JetBrains_Mono'] px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-200">
                              {task.code}
                            </span>
                          )}
                          {task.isCarriedOver && (
                            <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-950 border border-amber-300 font-['JetBrains_Mono'] flex items-center gap-1 shadow-xs">
                              <RotateCcw className="w-2.5 h-2.5 text-amber-700" />
                              <span>Rollover from {task.originalFormattedDate}</span>
                            </span>
                          )}
                          <span className={`text-xs font-bold leading-snug ${isDone ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                            {task.label}
                          </span>
                        </div>
                        {task.topic && (
                          <div className="text-[11px] text-slate-500 font-medium">
                            Passage Focus: <span className="font-semibold text-slate-700">{task.topic}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="p-6 rounded-2xl bg-matcha-sub border border-dashed border-slate-200 text-center text-xs text-slate-500 font-medium">
                {day.isBuffer ? 'Buffer Rest Day — No Reading & Writing assignments assigned!' : 'No Reading & Writing modules scheduled for today.'}
              </div>
            )}
          </section>
        </div>

        {/* Other / Buffer Tasks (if any) */}
        {otherTasks.length > 0 && (
          <section className="bg-matcha-input rounded-3xl border-2 border-slate-300 shadow-grave p-6 space-y-4">
            <h3 className="text-lg font-black font-['Space_Grotesk'] text-slate-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>General & Rest Activities</span>
            </h3>
            <div className="space-y-2.5">
              {otherTasks.map((task) => {
                const isDone = !!completedTaskIds[task.id];
                return (
                  <div
                    key={task.id}
                    onClick={() => onToggleTask(task.id)}
                    role="button"
                    tabIndex={0}
                    className={`p-3.5 rounded-2xl border-2 transition-all flex items-start gap-3 cursor-pointer select-none ${
                      isDone
                        ? 'bg-emerald-50/70 border-emerald-300 text-emerald-950'
                        : 'bg-matcha-sub hover:bg-[rgba(195,218,190,0.65)] border-slate-200'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleTask(task.id);
                      }}
                      className="mt-0.5 text-emerald-600 shrink-0 cursor-pointer"
                    >
                      {isDone ? (
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 fill-emerald-100" />
                      ) : (
                        <Circle className="w-5 h-5 text-slate-400 hover:text-emerald-600" />
                      )}
                    </button>
                    <div className="space-y-0.5">
                      <span className={`text-xs font-bold ${isDone ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                        {task.label}
                      </span>
                      {task.topic && (
                        <p className="text-[11px] text-slate-500">{task.topic}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* ============================================================ */}
        {/* DAILY NOTES & MISTAKE REFLECTION (Room for Breathing)        */}
        {/* ============================================================ */}
        <section className="bg-matcha-input rounded-3xl border-2 border-slate-300 shadow-grave p-6 sm:p-8 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-indigo-600" />
              <h3 className="text-xl font-black font-['Space_Grotesk'] text-slate-900">
                Daily Reflection & Error Log
              </h3>
            </div>
            {notesSavedAlert && (
              <span className="text-xs font-black font-['JetBrains_Mono'] text-emerald-700 bg-emerald-100 border border-emerald-300 px-2.5 py-0.5 rounded-full flex items-center gap-1 animate-pulse">
                <Check className="w-3 h-3" /> Saved
              </span>
            )}
          </div>

          <p className="text-xs text-slate-600 font-medium">
            Record tricky traps, missed formulas, or vocabulary encountered during this session. Auto-saves when you click away.
          </p>

          <textarea
            value={currentNotes}
            onChange={(e) => setCurrentNotes(e.target.value)}
            onBlur={handleNotesBlur}
            placeholder={`Jot down formulas or mistakes for ${day.formattedDate}... (e.g. Remember to check discriminant b² - 4ac before solving quadratic, Desmos regression syntax y1 ~ mx1 + b)`}
            rows={4}
            className="w-full p-4 rounded-2xl border-2 border-slate-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 text-xs sm:text-sm text-slate-900 font-medium leading-relaxed bg-slate-50/50 shadow-inner focus:outline-none transition"
          />

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => onOpenErrorLogModal(day.dateStr)}
              className="text-xs font-black font-['JetBrains_Mono'] text-indigo-600 hover:text-indigo-800 underline flex items-center gap-1 cursor-pointer"
            >
              <span>+ Add formal question autopsy to Master Error Log</span>
            </button>

            <button
              onClick={handleNotesBlur}
              className="px-4 py-2 rounded-xl text-xs font-black font-['Space_Grotesk'] text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-300 shadow-2xs hover:scale-105 active:scale-95 transition cursor-pointer"
            >
              Save Notes
            </button>
          </div>
        </section>

      </main>
    </div>
  );
}
