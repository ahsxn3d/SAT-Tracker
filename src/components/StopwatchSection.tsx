'use client';

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  SkipForward, 
  Volume2, 
  VolumeX, 
  Clock, 
  Calculator, 
  BookOpen, 
  Coffee, 
  Check, 
  ShieldCheck, 
  ExternalLink,
  Calendar as CalendarIcon,
  Sparkles
} from 'lucide-react';
import { playChime } from '@/utils/audio';
import { DayPlan, DaySessionTiming, SectionPacingResult } from '@/types';
import { evaluatePacing } from '@/utils/pacing';

type Stage = 'math' | 'break' | 'rw' | 'finished';

interface StopwatchSectionProps {
  allDays: DayPlan[];
  selectedDateStr: string;
  onSelectDateStr?: (dateStr: string) => void;
  onSaveTiming?: (timing: DaySessionTiming) => void;
  existingTiming?: DaySessionTiming;
}

export const StopwatchSection: React.FC<StopwatchSectionProps> = ({
  allDays,
  selectedDateStr,
  onSelectDateStr,
  onSaveTiming,
  existingTiming,
}) => {
  const [currentDateStr, setCurrentDateStr] = useState<string>(selectedDateStr || '2026-09-12');
  const [rwDurationMinutes, setRwDurationMinutes] = useState<number>(35);
  const [currentStage, setCurrentStage] = useState<Stage>('math');
  const [secondsRemaining, setSecondsRemaining] = useState<number>(45 * 60);
  const [stageElapsedSeconds, setStageElapsedSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  // Stage Evaluations
  const [mathResult, setMathResult] = useState<SectionPacingResult | null>(null);
  const [breakResult, setBreakResult] = useState<SectionPacingResult | null>(null);
  const [rwResult, setRwResult] = useState<SectionPacingResult | null>(null);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (selectedDateStr) {
      setCurrentDateStr(selectedDateStr);
    }
  }, [selectedDateStr]);

  const activeDay = useMemo(() => {
    return allDays.find((d) => d.dateStr === currentDateStr) || allDays[0];
  }, [allDays, currentDateStr]);

  // Stage configurations
  const stageDurationMap: Record<Stage, number> = {
    math: 45 * 60,
    break: 10 * 60,
    rw: rwDurationMinutes * 60,
    finished: 0,
  };

  // Timer Tick Interval (Silent countdown - no ticking sound)
  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setSecondsRemaining((prev) => {
          if (prev <= 1) {
            handleStageComplete();
            return 0;
          }
          return prev - 1;
        });

        setStageElapsedSeconds((prev) => prev + 1);
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRunning, currentStage]);

  const handleStageComplete = () => {
    setIsRunning(false);
    if (soundEnabled) {
      if (currentStage === 'math') playChime('break');
      else if (currentStage === 'break') playChime('phase');
      else if (currentStage === 'rw') playChime('done');
      else playChime('phase');
    }

    if (currentStage === 'math') {
      const result = evaluatePacing('math', 45, stageElapsedSeconds);
      setMathResult(result);
      setCurrentStage('break');
      setSecondsRemaining(10 * 60);
      setStageElapsedSeconds(0);
    } else if (currentStage === 'break') {
      const result = evaluatePacing('break', 10, stageElapsedSeconds);
      setBreakResult(result);
      setCurrentStage('rw');
      setSecondsRemaining(rwDurationMinutes * 60);
      setStageElapsedSeconds(0);
    } else if (currentStage === 'rw') {
      const result = evaluatePacing('rw', rwDurationMinutes, stageElapsedSeconds);
      setRwResult(result);
      setCurrentStage('finished');
      setSecondsRemaining(0);
      saveSessionResult(mathResult, breakResult, result);
    }
  };

  const handleSkipStage = () => {
    setIsRunning(false);
    if (currentStage === 'math') {
      const result = evaluatePacing('math', 45, stageElapsedSeconds);
      setMathResult(result);
      setCurrentStage('break');
      setSecondsRemaining(10 * 60);
      setStageElapsedSeconds(0);
    } else if (currentStage === 'break') {
      const result = evaluatePacing('break', 10, stageElapsedSeconds);
      setBreakResult(result);
      setCurrentStage('rw');
      setSecondsRemaining(rwDurationMinutes * 60);
      setStageElapsedSeconds(0);
    } else if (currentStage === 'rw') {
      const result = evaluatePacing('rw', rwDurationMinutes, stageElapsedSeconds);
      setRwResult(result);
      setCurrentStage('finished');
      setSecondsRemaining(0);
      saveSessionResult(mathResult, breakResult, result);
    }
  };

  const saveSessionResult = (
    mRes: SectionPacingResult | null,
    bRes: SectionPacingResult | null,
    rRes: SectionPacingResult | null
  ) => {
    if (!mRes) return;
    const totalMins =
      (mRes.actualMinutes || 0) +
      (bRes?.actualMinutes || 0) +
      (rRes?.actualMinutes || 0);

    const isPerfect =
      mRes.rating === 'perfect' && (!rRes || rRes.rating === 'perfect');
    const isFast =
      mRes.rating === 'too_fast' || (rRes && rRes.rating === 'too_fast');

    const overallRating = isPerfect ? 'perfect' : isFast ? 'too_fast' : 'too_late';

    const timingData: DaySessionTiming = {
      dateStr: currentDateStr,
      dayTitle: activeDay ? activeDay.formattedDate : currentDateStr,
      completedAt: new Date().toISOString(),
      math: mRes,
      breakTime: bRes || undefined,
      rw: rRes || undefined,
      totalSessionMinutes: totalMins,
      overallRating: overallRating as any,
    };

    onSaveTiming?.(timingData);
  };

  const handleResetStage = () => {
    setIsRunning(false);
    setSecondsRemaining(stageDurationMap[currentStage]);
    setStageElapsedSeconds(0);
  };

  const handleResetEntireSession = () => {
    setIsRunning(false);
    setCurrentStage('math');
    setSecondsRemaining(45 * 60);
    setStageElapsedSeconds(0);
    setMathResult(null);
    setBreakResult(null);
    setRwResult(null);
  };

  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  const elapsedMins = Math.floor(stageElapsedSeconds / 60);
  const elapsedSecs = stageElapsedSeconds % 60;
  const formattedElapsed = `${String(elapsedMins).padStart(2, '0')}:${String(elapsedSecs).padStart(2, '0')}`;

  const totalStageSecs = stageDurationMap[currentStage] || 1;
  const stageProgressFraction = Math.min(1, stageElapsedSeconds / totalStageSecs);
  const stagePercentage = Math.round(stageProgressFraction * 100);
  const secondHandAngle = (stageElapsedSeconds % 60) * 6;

  const stageTheme = {
    math: {
      name: 'Phase 1: Math Practice',
      color: 'text-emerald-400',
      ringColor: '#10b981',
      ringGlow: 'drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]',
      icon: Calculator,
      rule: 'Math Section: 45 min target. Maintain ~1.3 min/question. Use Desmos aggressively.',
    },
    break: {
      name: 'Phase 2: Away Break',
      color: 'text-amber-400',
      ringColor: '#f59e0b',
      ringGlow: 'drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]',
      icon: Coffee,
      rule: 'Strict 10 min break. Leave the screen completely. Walk, stretch, and hydrate.',
    },
    rw: {
      name: 'Phase 3: Reading & Writing',
      color: 'text-indigo-400',
      ringColor: '#6366f1',
      ringGlow: 'drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]',
      icon: BookOpen,
      rule: 'RW Section: 35 min target (~1.1 min/question). Front-load Grammar Rules first.',
    },
    finished: {
      name: 'Session Completed!',
      color: 'text-emerald-400',
      ringColor: '#10b981',
      ringGlow: 'drop-shadow-[0_0_12px_rgba(16,185,129,0.7)]',
      icon: Sparkles,
      rule: '90-Minute Cap reached! Shut down your books. Consistency beats burnout.',
    },
  }[currentStage];

  const StageIcon = stageTheme.icon;
  const radius = 135;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (stageProgressFraction * circumference);

  return (
    <motion.section 
      id="section-stopwatch"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="ios-glass-card rounded-3xl p-5 sm:p-7 shadow-grave space-y-5"
    >
      {/* Top Section Header with Controls */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-[#a6c4a1]/60">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-[#264e22] text-[#f2f8f0] font-['JetBrains_Mono'] shadow-xs border border-[#3b6e35]">
            <Clock className="w-3.5 h-3.5 text-amber-300" />
            <span>Anti-Burnout Stopwatch & Pacing Station</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-[#122810] font-['Space_Grotesk'] mt-1">
            Strict 90-Minute Daily Focus Chronograph
          </h2>
        </div>

        {/* Quick Utilities */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Date Selector */}
          <div className="flex items-center gap-1.5 p-1 bg-white/80 border border-[#a6c4a1] rounded-xl shadow-xs">
            <CalendarIcon className="w-3.5 h-3.5 text-[#264e22] ml-1" />
            <select
              value={currentDateStr}
              onChange={(e) => {
                setCurrentDateStr(e.target.value);
                onSelectDateStr?.(e.target.value);
              }}
              className="bg-transparent text-xs font-black text-[#122810] pr-2 py-0.5 focus:outline-none cursor-pointer font-['JetBrains_Mono']"
            >
              {allDays.slice(0, 35).map((d) => (
                <option key={d.dateStr} value={d.dateStr}>
                  {d.formattedDate} {d.isBuffer ? '(Buffer)' : ''}
                </option>
              ))}
            </select>
          </div>

          {/* SAT Desmos Link */}
          <a
            href="https://www.desmos.com/testing/cb-digital-sat/graphing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-black text-[#122810] bg-white/80 hover:bg-white border border-[#a6c4a1] transition shadow-xs cursor-pointer"
            title="Open Official SAT Bluebook Desmos Graphing Calculator"
          >
            <Calculator className="w-3.5 h-3.5 text-emerald-700" />
            <span className="hidden sm:inline">SAT Desmos</span>
            <ExternalLink className="w-3 h-3 text-[#264e22]" />
          </a>

          {/* Chime Sound Toggle */}
          <button
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`p-1.5 rounded-xl border transition cursor-pointer ${
              soundEnabled 
                ? 'bg-indigo-100 border-indigo-300 text-indigo-900' 
                : 'bg-white/80 border-[#a6c4a1] text-slate-400'
            }`}
            title={soundEnabled ? 'Chimes: ON' : 'Chimes: OFF'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-rose-500" />}
          </button>
        </div>
      </div>

      {/* 3 Step Sequence Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Step 1: Math */}
        <div className={`p-3 rounded-2xl border transition-all ${
          currentStage === 'math'
            ? 'bg-emerald-100/90 border-emerald-400 shadow-md ring-2 ring-emerald-500/30'
            : mathResult
            ? 'bg-white/70 border-emerald-300 text-[#122810]'
            : 'bg-white/50 border-[#a6c4a1]/60 text-slate-500'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Calculator className={`w-4 h-4 ${currentStage === 'math' || mathResult ? 'text-emerald-700' : 'text-slate-400'}`} />
              <span className="text-xs font-black uppercase tracking-wider font-['JetBrains_Mono'] text-[#122810]">
                1. Math Drill
              </span>
            </div>
            {mathResult && (
              <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-emerald-200 text-emerald-950 border border-emerald-300">
                <Check className="w-3 h-3" /> {mathResult.actualMinutes}m
              </span>
            )}
          </div>
          <div className="text-[11px] text-[#274624] mt-1 font-medium">
            45 min timed pacing (~1.3m/question)
          </div>
        </div>

        {/* Step 2: Screen-Off Break */}
        <div className={`p-3 rounded-2xl border transition-all ${
          currentStage === 'break'
            ? 'bg-amber-100/90 border-amber-400 shadow-md ring-2 ring-amber-500/30'
            : breakResult
            ? 'bg-white/70 border-amber-300 text-[#122810]'
            : 'bg-white/50 border-[#a6c4a1]/60 text-slate-500'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <Coffee className={`w-4 h-4 ${currentStage === 'break' || breakResult ? 'text-amber-700' : 'text-slate-400'}`} />
              <span className="text-xs font-black uppercase tracking-wider font-['JetBrains_Mono'] text-[#122810]">
                2. Screen-Off Break
              </span>
            </div>
            {breakResult && (
              <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-amber-200 text-amber-950 border border-amber-300">
                <Check className="w-3 h-3" /> {breakResult.actualMinutes}m
              </span>
            )}
          </div>
          <div className="text-[11px] text-[#274624] mt-1 font-medium">
            10 min screen rest (hydrate & stretch)
          </div>
        </div>

        {/* Step 3: Reading & Writing */}
        <div className={`p-3 rounded-2xl border transition-all ${
          currentStage === 'rw'
            ? 'bg-indigo-100/90 border-indigo-400 shadow-md ring-2 ring-indigo-500/30'
            : rwResult
            ? 'bg-white/70 border-indigo-300 text-[#122810]'
            : 'bg-white/50 border-[#a6c4a1]/60 text-slate-500'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <BookOpen className={`w-4 h-4 ${currentStage === 'rw' || rwResult ? 'text-indigo-700' : 'text-slate-400'}`} />
              <span className="text-xs font-black uppercase tracking-wider font-['JetBrains_Mono'] text-[#122810]">
                3. Reading & Writing
              </span>
            </div>
            {rwResult && (
              <span className="inline-flex items-center gap-1 text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-indigo-200 text-indigo-950 border border-indigo-300">
                <Check className="w-3 h-3" /> {rwResult.actualMinutes}m
              </span>
            )}
          </div>
          <div className="text-[11px] text-[#274624] mt-1 font-medium flex items-center justify-between">
            <span>{rwDurationMinutes} min target</span>
            {currentStage === 'rw' && !isRunning && (
              <button
                onClick={() => setRwDurationMinutes(rwDurationMinutes === 35 ? 45 : 35)}
                className="text-[10px] font-bold text-indigo-800 hover:underline cursor-pointer"
              >
                Switch to {rwDurationMinutes === 35 ? '45m' : '35m'}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Giant Chronograph Bezel & Stopwatch Center */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#0d1c0b] text-white shadow-2xl flex flex-col items-center justify-center relative overflow-hidden border-2 border-[#203c1b]">
        {/* Subtle Ambient Glow Behind Clock */}
        <div 
          className="absolute w-72 sm:w-96 h-72 sm:h-96 rounded-full blur-3xl opacity-20 pointer-events-none transition-all duration-700"
          style={{ backgroundColor: stageTheme.ringColor }}
        />

        {/* Stopwatch Bezel */}
        <div className="relative w-[270px] h-[270px] sm:w-[320px] sm:h-[320px] rounded-full bg-[#11230f] border-4 border-[#1c3619] shadow-inner flex items-center justify-center p-4">
          {/* 60 Analog Ticks around perimeter */}
          <div className="absolute inset-0 rounded-full pointer-events-none">
            {Array.from({ length: 60 }).map((_, i) => {
              const isMajor = i % 5 === 0;
              const angle = i * 6;
              return (
                <div
                  key={i}
                  className="absolute top-0 left-1/2 -translate-x-1/2 origin-[50%_135px] sm:origin-[50%_160px]"
                  style={{ transform: `rotate(${angle}deg)` }}
                >
                  <div
                    className={`w-[2px] rounded-full transition-colors ${
                      isMajor ? 'h-3 sm:h-3.5 bg-emerald-400' : 'h-1 sm:h-1.5 bg-emerald-900/60'
                    }`}
                  />
                </div>
              );
            })}
          </div>

          {/* SVG Circular Progress */}
          <svg className="absolute inset-0 w-full h-full transform -rotate-90 pointer-events-none" viewBox="0 0 320 320">
            <circle cx="160" cy="160" r={radius} stroke="#183015" strokeWidth="7" fill="none" />
            {currentStage !== 'finished' && (
              <circle
                cx="160"
                cy="160"
                r={radius}
                stroke={stageTheme.ringColor}
                strokeWidth="7"
                strokeLinecap="round"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                className="transition-all duration-500"
              />
            )}
          </svg>

          {/* Rotating Second Hand */}
          {currentStage !== 'finished' && (
            <div 
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{ transform: `rotate(${secondHandAngle}deg)`, transition: 'transform 0.2s linear' }}
            >
              <div 
                className="w-[2px] h-28 sm:h-32 rounded-full -translate-y-14 sm:-translate-y-16 shadow-sm"
                style={{ backgroundColor: stageTheme.ringColor }}
              />
              <div 
                className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full absolute -translate-y-28 sm:-translate-y-32 border-2 border-slate-950"
                style={{ backgroundColor: stageTheme.ringColor }}
              />
            </div>
          )}

          {/* Center Cap */}
          <div className="absolute w-3.5 h-3.5 rounded-full bg-[#183015] border-2 border-[#2e5d29] z-10 pointer-events-none" />

          {/* Center Information */}
          <div className="relative z-20 flex flex-col items-center justify-center text-center px-4">
            <div 
              className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] sm:text-[11px] font-black uppercase tracking-wider font-['JetBrains_Mono'] mb-0.5 border"
              style={{ 
                backgroundColor: `${stageTheme.ringColor}20`,
                color: stageTheme.ringColor,
                borderColor: `${stageTheme.ringColor}40`
              }}
            >
              <StageIcon className="w-3 h-3" />
              <span>{stageTheme.name}</span>
            </div>

            <div className="text-4xl sm:text-6xl font-black font-['JetBrains_Mono'] tracking-tight text-white drop-shadow-md my-0.5">
              {currentStage === 'finished' ? 'DONE' : formattedTime}
            </div>

            <div className="text-[11px] sm:text-xs font-bold text-slate-300 font-['JetBrains_Mono'] flex items-center gap-2">
              <span>Elapsed: {formattedElapsed}</span>
              <span>•</span>
              <span>{stagePercentage}% Done</span>
            </div>

            <div className="mt-1 flex items-center gap-1.5 text-[10px] font-bold text-emerald-300">
              <span className={`w-2 h-2 rounded-full ${isRunning ? 'bg-emerald-400 animate-pulse' : 'bg-slate-500'}`} />
              <span>{isRunning ? 'Timer Active' : 'Paused (Click Start)'}</span>
            </div>
          </div>
        </div>

        {/* Controls Toolbar */}
        <div className="flex items-center gap-3 mt-6 flex-wrap justify-center">
          <button
            onClick={handleResetStage}
            disabled={stageElapsedSeconds === 0 && !isRunning}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 disabled:opacity-40 border border-white/15 text-xs font-black text-white transition active:scale-95 cursor-pointer"
            title="Reset this stage"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>

          <button
            onClick={() => setIsRunning(!isRunning)}
            className={`inline-flex items-center gap-2 px-8 py-3 rounded-2xl text-xs sm:text-sm font-black transition-all transform active:scale-95 shadow-lg cursor-pointer ${
              isRunning
                ? 'bg-amber-400 hover:bg-amber-300 text-slate-950 ring-2 ring-amber-400/30'
                : 'bg-emerald-400 hover:bg-emerald-300 text-slate-950 ring-2 ring-emerald-400/30'
            }`}
          >
            {isRunning ? (
              <>
                <Pause className="w-4 h-4 fill-slate-950" />
                <span>PAUSE SESSION</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-slate-950" />
                <span>{stageElapsedSeconds > 0 ? 'RESUME SESSION' : 'START 90-MIN SESSION'}</span>
              </>
            )}
          </button>

          {currentStage !== 'finished' ? (
            <button
              onClick={handleSkipStage}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 text-xs font-black text-white transition active:scale-95 cursor-pointer"
              title="Finish current section early"
            >
              <span>Next Phase</span>
              <SkipForward className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              onClick={handleResetEntireSession}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-xs font-black text-white transition active:scale-95 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Start New 90m</span>
            </button>
          )}
        </div>

        {/* Live SAT Rule Sub-banner */}
        <div className="w-full max-w-xl rounded-xl bg-[#142911] border border-[#264e22] p-3 flex items-center gap-3 mt-4 text-left">
          <ShieldCheck className={`w-4 h-4 shrink-0 ${stageTheme.color}`} />
          <div className="space-y-0.5">
            <div className="text-[11px] font-black uppercase tracking-wider text-emerald-200 font-['JetBrains_Mono']">
              Live SAT Protocol: {stageTheme.name}
            </div>
            <div className="text-[11px] text-slate-300 font-medium leading-tight">
              {stageTheme.rule}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
