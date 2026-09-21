import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  SkipForward, 
  Volume2, 
  VolumeX, 
  X, 
  Minimize2, 
  Maximize2, 
  Coffee, 
  BookOpen, 
  Calculator, 
  CheckCircle2,
  Calendar as CalendarIcon,
  Sparkles,
  AlertTriangle,
  Zap,
  Check,
  ArrowRight,
  Info,
  ExternalLink,
  Clock
} from 'lucide-react';
import { playChime } from '../utils/audio';
import { DayPlan, DaySessionTiming, SectionPacingResult, PaceRating } from '../types';
import { evaluatePacing, MATH_PACING_BENCHMARKS } from '../utils/pacing';
import { MatchaSelect } from './MatchaSelect';
import { useModalScrollLock } from '../hooks/useModalScrollLock';

interface SessionTimerProps {
  isOpen: boolean;
  onClose: () => void;
  dayTitle?: string;
  selectedDateStr: string;
  onSelectDateStr?: (dateStr: string) => void;
  allDays: DayPlan[];
  onSaveSessionTiming: (timing: DaySessionTiming) => void;
  existingTiming?: DaySessionTiming;
  onNavigateToCalendar?: () => void;
  isStandalone?: boolean;
}

type Stage = 'math' | 'break' | 'rw' | 'finished';

export const SessionTimer: React.FC<SessionTimerProps> = ({ 
  isOpen, 
  onClose, 
  dayTitle,
  selectedDateStr,
  onSelectDateStr,
  allDays,
  onSaveSessionTiming,
  existingTiming,
  onNavigateToCalendar,
  isStandalone = false,
}) => {
  useModalScrollLock(isOpen && !isStandalone);
  const [currentDateStr, setCurrentDateStr] = useState<string>(selectedDateStr || '2026-09-12');
  const [rwDurationMinutes, setRwDurationMinutes] = useState<number>(35);
  const [currentStage, setCurrentStage] = useState<Stage>('math');
  const [secondsRemaining, setSecondsRemaining] = useState<number>(45 * 60);
  const [stageElapsedSeconds, setStageElapsedSeconds] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [tickingSound, setTickingSound] = useState<boolean>(true);
  const [isMinimized, setIsMinimized] = useState<boolean>(false);

  // Section recorded results for current session
  const [mathResult, setMathResult] = useState<SectionPacingResult | null>(null);
  const [breakResult, setBreakResult] = useState<SectionPacingResult | null>(null);
  const [rwResult, setRwResult] = useState<SectionPacingResult | null>(null);

  // Manual minute adjustment for quick-testing or offline recording
  const [customMathMins, setCustomMathMins] = useState<number>(35);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Update currentDateStr if prop changes
  useEffect(() => {
    if (selectedDateStr) {
      setCurrentDateStr(selectedDateStr);
    }
  }, [selectedDateStr]);

  // Current day details
  const currentDayPlan = useMemo(() => {
    return allDays.find((d) => d.dateStr === currentDateStr) || allDays[0];
  }, [allDays, currentDateStr]);

  const activeDayTitle = useMemo(() => {
    if (dayTitle) return dayTitle;
    if (currentDayPlan) return `${currentDayPlan.formattedDate} (${currentDayPlan.weekTitle})`;
    return 'Mon Sep 14 (Day 1 Kickoff)';
  }, [dayTitle, currentDayPlan]);

  const handleOpenPopoutWindow = () => {
    const width = 520;
    const height = 760;
    const left = Math.max(0, (typeof window !== 'undefined' ? window.screen.width - width - 50 : 100));
    const top = 50;
    if (typeof window !== 'undefined') {
      window.open(
        `/timer?date=${currentDateStr}`,
        'AntiBurnoutStopwatch',
        `width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes`
      );
      if (!isStandalone) {
        onClose();
      }
    }
  };

  const getStageTotalSeconds = useCallback((stage: Stage): number => {
    switch (stage) {
      case 'math':
        return 45 * 60; // 45 min
      case 'break':
        return 10 * 60; // 10 min
      case 'rw':
        return rwDurationMinutes * 60; // 35m or 45m
      case 'finished':
        return 0;
    }
  }, [rwDurationMinutes]);

  // Advance stage with evaluation
  const advanceToStage = useCallback((nextStage: Stage, recordedSeconds?: number) => {
    const elapsed = recordedSeconds ?? stageElapsedSeconds;

    if (currentStage === 'math') {
      const finalSecs = elapsed > 0 ? elapsed : 45 * 60;
      const pacing = evaluatePacing('math', finalSecs, 45);
      setMathResult(pacing);
    } else if (currentStage === 'break') {
      const finalSecs = elapsed > 0 ? elapsed : 10 * 60;
      const pacing = evaluatePacing('break', finalSecs, 10);
      setBreakResult(pacing);
    } else if (currentStage === 'rw') {
      const finalSecs = elapsed > 0 ? elapsed : rwDurationMinutes * 60;
      const pacing = evaluatePacing('rw', finalSecs, rwDurationMinutes);
      setRwResult(pacing);
    }

    setCurrentStage(nextStage);
    setStageElapsedSeconds(0);
    const totalSec = getStageTotalSeconds(nextStage);
    setSecondsRemaining(totalSec);
    setIsRunning(false);

    if (soundEnabled) {
      if (nextStage === 'break') {
        playChime('break');
      } else if (nextStage === 'finished') {
        playChime('done');
      } else {
        playChime('phase');
      }
    }
  }, [currentStage, stageElapsedSeconds, rwDurationMinutes, getStageTotalSeconds, soundEnabled]);

  // Tick logic with physical stopwatch sound
  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setStageElapsedSeconds((prev) => prev + 1);
        setSecondsRemaining((prev) => {
          if (prev <= 1) {
            // Stage completed automatically!
            if (currentStage === 'math') {
              advanceToStage('break', 45 * 60);
            } else if (currentStage === 'break') {
              advanceToStage('rw', 10 * 60);
            } else if (currentStage === 'rw') {
              advanceToStage('finished', rwDurationMinutes * 60);
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isRunning, currentStage, advanceToStage, rwDurationMinutes, tickingSound, soundEnabled]);

  // Once finished, save to calendar
  useEffect(() => {
    if (currentStage === 'finished' && mathResult) {
      const breakPacing = breakResult || evaluatePacing('break', 10 * 60, 10);
      const rwPacing = rwResult || evaluatePacing('rw', rwDurationMinutes * 60, rwDurationMinutes);

      const totalMins = mathResult.actualMinutes + breakPacing.actualMinutes + rwPacing.actualMinutes;
      let overallRating: PaceRating = 'perfect';
      if (mathResult.rating === 'too_fast' || rwPacing.rating === 'too_fast') {
        overallRating = 'too_fast';
      } else if (mathResult.rating === 'too_late' || rwPacing.rating === 'too_late') {
        overallRating = 'too_late';
      }

      const timingPayload: DaySessionTiming = {
        dateStr: currentDateStr,
        dayTitle: currentDayPlan ? currentDayPlan.formattedDate : 'Mon Sep 14',
        completedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        math: mathResult,
        breakTime: breakPacing,
        rw: rwPacing,
        totalSessionMinutes: totalMins,
        overallRating,
      };

      onSaveSessionTiming(timingPayload);
    }
  }, [currentStage, mathResult, breakResult, rwResult, currentDateStr, currentDayPlan, rwDurationMinutes, onSaveSessionTiming]);

  const handleReset = () => {
    setIsRunning(false);
    setCurrentStage('math');
    setSecondsRemaining(45 * 60);
    setStageElapsedSeconds(0);
    setMathResult(null);
    setBreakResult(null);
    setRwResult(null);
  };

  const handleCompleteMathWithMinutes = (minutes: number) => {
    const secs = minutes * 60;
    const pacing = evaluatePacing('math', secs, 45);
    setMathResult(pacing);
    advanceToStage('break', secs);
  };

  const handleCompleteBreakWithMinutes = (minutes: number) => {
    const secs = minutes * 60;
    const pacing = evaluatePacing('break', secs, 10);
    setBreakResult(pacing);
    advanceToStage('rw', secs);
  };

  const handleCompleteRwWithMinutes = (minutes: number) => {
    const secs = minutes * 60;
    const pacing = evaluatePacing('rw', secs, rwDurationMinutes);
    setRwResult(pacing);
    advanceToStage('finished', secs);
  };

  const formatTime = (secs: number): string => {
    const mins = Math.floor(secs / 60);
    const rem = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${rem.toString().padStart(2, '0')}`;
  };

  const currentElapsedMinutes = Math.max(1, Math.round(stageElapsedSeconds / 60));
  const currentStageTotal = getStageTotalSeconds(currentStage);
  const progressPercent = currentStageTotal > 0
    ? Math.min(100, Math.max(0, Math.round(((currentStageTotal - secondsRemaining) / currentStageTotal) * 100)))
    : 100;

  // Live assessment of current elapsed time during Math
  const liveMathPacing = useMemo(() => {
    if (currentStage !== 'math') return null;
    const mins = currentElapsedMinutes;
    if (mins < 28) {
      return {
        label: 'Current: Fast Pace (< 28m)',
        color: 'text-rose-600 bg-rose-50 border-rose-200',
        note: 'High risk of rushing through multi-step algebra. Slow down to verify answers!',
      };
    } else if (mins <= 45) {
      return {
        label: 'Current: Fully Perfect Pace (28–45m)',
        color: 'text-emerald-700 bg-emerald-50 border-emerald-300',
        note: 'Optimal speed! Enough time for Desmos graphing and step checks.',
      };
    } else {
      return {
        label: 'Current: Overtime (> 45m)',
        color: 'text-amber-800 bg-amber-50 border-amber-300',
        note: 'Exceeding 45-min cap. Finish up to avoid cognitive fatigue!',
      };
    }
  }, [currentStage, currentElapsedMinutes]);

  if (!isOpen) return null;

  // Minimized Floating Pill
  if (isMinimized) {
    return (
      <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white rounded-2xl shadow-grave hover:shadow-grave-hover border-2 border-slate-700 p-3.5 flex items-center gap-3 animate-fade-in transition-all duration-200">
        <div className="flex items-center gap-2">
          {currentStage === 'math' && <Calculator className="w-4 h-4 text-emerald-400" />}
          {currentStage === 'break' && <Coffee className="w-4 h-4 text-sky-400 animate-pulse" />}
          {currentStage === 'rw' && <BookOpen className="w-4 h-4 text-amber-400" />}
          {currentStage === 'finished' && <CheckCircle2 className="w-4 h-4 text-emerald-400" />}
          <span className="text-xs font-black uppercase tracking-wider text-slate-300 font-['JetBrains_Mono']">
            {currentStage === 'math' ? 'Math (45m)' : currentStage === 'break' ? 'Break (10m)' : currentStage === 'rw' ? 'RW (35m)' : 'Complete!'}
          </span>
        </div>
        <div className="text-lg font-mono font-black text-white">
          {formatTime(secondsRemaining)}
        </div>
        <button
          onClick={() => setIsRunning(!isRunning)}
          className="p-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 hover:scale-105 active:scale-95 text-white cursor-pointer transition-all duration-150"
        >
          {isRunning ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-white" />}
        </button>
        <button
          onClick={() => setIsMinimized(false)}
          className="p-1.5 rounded-lg text-slate-400 hover:text-white cursor-pointer hover:scale-105 active:scale-95 transition-all duration-150"
          title="Expand"
        >
          <Maximize2 className="w-3.5 h-3.5" />
        </button>
      </div>
    );
  }

  return (
    <div 
      className={isStandalone ? "w-full min-h-screen bg-slate-950 text-white flex items-center justify-center p-3 sm:p-4" : "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-150 overflow-y-auto overscroll-contain"}
      data-lenis-prevent={!isStandalone ? "true" : undefined}
    >
      <div 
        className={isStandalone ? "w-full max-w-xl bg-matcha-input text-slate-950 rounded-3xl shadow-2xl border-2 border-slate-700 overflow-hidden flex flex-col my-auto" : "w-full max-w-xl bg-matcha-input text-slate-950 rounded-3xl shadow-grave border-2 border-slate-300 overflow-hidden flex flex-col max-h-[92vh] overflow-y-auto overscroll-contain"}
        data-lenis-prevent={!isStandalone ? "true" : undefined}
      >
        
        {/* Modal Top Header with Day Connection */}
        <div className="bg-slate-900 px-5 sm:px-6 py-4 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3 min-w-0">
            <span className="text-2xl shrink-0">⏱️</span>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-base sm:text-lg font-black text-white font-['Space_Grotesk'] truncate">
                  Anti-Burnout 90-Min Session Timer
                </h3>
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-md bg-indigo-600 text-white font-['JetBrains_Mono']">
                  Calendar Connected
                </span>
              </div>
              
              {/* Date connection selector */}
              <div className="flex items-center gap-1.5 text-xs text-slate-300 mt-1">
                <CalendarIcon className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span className="font-semibold text-amber-300">Timing for:</span>
                <MatchaSelect
                  value={currentDateStr}
                  onChange={(val) => {
                    setCurrentDateStr(val);
                    if (onSelectDateStr) onSelectDateStr(val);
                  }}
                  options={allDays.slice(0, 30).map((d) => ({
                    value: d.dateStr,
                    label: d.formattedDate,
                    badge: d.dateStr === '2026-09-12' ? 'Kickoff' : d.isBuffer ? 'Rest' : undefined,
                  }))}
                  variant="dark"
                  size="sm"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0 ml-2">
            {!isStandalone && (
              <button
                onClick={handleOpenPopoutWindow}
                className="px-2.5 py-1.5 text-amber-300 hover:text-amber-200 bg-amber-950/40 hover:bg-amber-900/50 border border-amber-500/40 rounded-xl transition cursor-pointer flex items-center gap-1.5 text-xs font-black shadow-xs"
                title="Open stopwatch in a dedicated new floating window"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">New Window</span>
              </button>
            )}
            <button
              onClick={() => setTickingSound(!tickingSound)}
              className={`p-2 rounded-lg transition cursor-pointer ${
                tickingSound ? 'text-emerald-400 hover:text-emerald-300 bg-emerald-950/40' : 'text-slate-500 hover:text-slate-400'
              }`}
              title={tickingSound ? 'Mechanical clock ticking: ON' : 'Mechanical clock ticking: OFF'}
            >
              <Clock className="w-4 h-4" />
            </button>
            <button
              onClick={() => setSoundEnabled(!soundEnabled)}
              className="p-2 text-slate-400 hover:text-white rounded-lg transition cursor-pointer"
              title={soundEnabled ? 'Mute chimes' : 'Enable chimes'}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-rose-400" />}
            </button>
            {!isStandalone && (
              <button
                onClick={() => setIsMinimized(true)}
                className="p-2 text-slate-400 hover:text-white rounded-lg transition cursor-pointer"
                title="Minimize to floating pill"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
            )}
            {!isStandalone && (
              <button
                onClick={onClose}
                className="p-2 text-slate-400 hover:text-white rounded-lg transition cursor-pointer"
                title="Close"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* 3 Step Visual Sequence bar */}
        <div className="px-5 sm:px-6 pt-4 pb-3 bg-matcha-sub border-b border-slate-200">
          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            {/* Step 1: Math */}
            <div className={`p-2.5 rounded-2xl transition border-2 ${
              currentStage === 'math' 
                ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-black shadow-xs ring-2 ring-emerald-300/50' 
                : mathResult 
                ? 'bg-emerald-100/50 border-emerald-200 text-emerald-900 font-bold'
                : 'bg-matcha-input border-slate-200 text-slate-500'
            }`}>
              <div className="flex items-center justify-center gap-1">
                <Calculator className="w-3.5 h-3.5 text-emerald-600" />
                <span>1. Math</span>
                {mathResult && <Check className="w-3 h-3 text-emerald-600" />}
              </div>
              <div className="text-[11px] font-mono mt-0.5">
                {mathResult ? `${mathResult.actualMinutes}m taken` : '45 min target'}
              </div>
            </div>

            {/* Step 2: Break */}
            <div className={`p-2.5 rounded-2xl transition border-2 ${
              currentStage === 'break' 
                ? 'bg-sky-50 border-sky-400 text-sky-950 font-black shadow-xs ring-2 ring-sky-300/50' 
                : breakResult 
                ? 'bg-sky-100/50 border-sky-200 text-sky-900 font-bold'
                : 'bg-matcha-input border-slate-200 text-slate-500'
            }`}>
              <div className="flex items-center justify-center gap-1">
                <Coffee className="w-3.5 h-3.5 text-sky-600" />
                <span>2. Away Break</span>
                {breakResult && <Check className="w-3 h-3 text-sky-600" />}
              </div>
              <div className="text-[11px] font-mono mt-0.5">
                {breakResult ? `${breakResult.actualMinutes}m rest` : '10m away'}
              </div>
            </div>

            {/* Step 3: RW */}
            <div className={`p-2.5 rounded-2xl transition border-2 ${
              currentStage === 'rw' 
                ? 'bg-amber-50 border-amber-400 text-amber-950 font-black shadow-xs ring-2 ring-amber-300/50' 
                : rwResult 
                ? 'bg-amber-100/50 border-amber-200 text-amber-900 font-bold'
                : 'bg-matcha-input border-slate-200 text-slate-500'
            }`}>
              <div className="flex items-center justify-center gap-1">
                <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                <span>3. RW Sprint</span>
                {rwResult && <Check className="w-3 h-3 text-amber-600" />}
              </div>
              <div className="text-[11px] font-mono mt-0.5">
                {rwResult ? `${rwResult.actualMinutes}m done` : `${rwDurationMinutes}m target`}
              </div>
            </div>
          </div>
        </div>

        {/* Stage Content */}
        <div className="p-5 sm:p-6 text-center space-y-5">
          
          {/* ============================================================ */}
          {/* FINISHED STAGE: Comprehensive Pacing Diagnostic Report       */}
          {/* ============================================================ */}
          {currentStage === 'finished' && mathResult ? (
            <div className="space-y-5 text-left animate-in fade-in duration-200">
              <div className="text-center space-y-2">
                <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 border-2 border-emerald-300 flex items-center justify-center text-emerald-700 shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-2xl font-black text-slate-950 font-['Space_Grotesk']">
                  Session Completed & Saved to Calendar! 🎯
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 font-medium">
                  Logged for <strong className="text-indigo-900">{currentDayPlan ? currentDayPlan.formattedDate : currentDateStr}</strong> &bull; Stored in calendar autopsy
                </p>
              </div>

              {/* MATH PACING HIGHLIGHT (Matches user prompt exactly) */}
              <div className={`p-4 sm:p-5 rounded-2xl border-2 shadow-sm ${
                mathResult.rating === 'perfect'
                  ? 'bg-emerald-50/80 border-emerald-300'
                  : mathResult.rating === 'too_fast'
                  ? 'bg-rose-50/80 border-rose-300'
                  : 'bg-amber-50/80 border-amber-300'
              }`}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b pb-3 border-slate-200/80">
                  <div className="flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-emerald-700" />
                    <span className="text-sm font-black uppercase font-['JetBrains_Mono'] text-slate-900">
                      Math Pacing Evaluation
                    </span>
                  </div>
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider font-['JetBrains_Mono'] ${
                    mathResult.rating === 'perfect'
                      ? 'bg-emerald-600 text-white'
                      : mathResult.rating === 'too_fast'
                      ? 'bg-rose-600 text-white'
                      : 'bg-amber-600 text-white'
                  }`}>
                    {mathResult.ratingLabel}
                  </span>
                </div>

                <div className="mt-3.5 space-y-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black font-['JetBrains_Mono'] text-slate-950">
                      {mathResult.actualMinutes} mins
                    </span>
                    <span className="text-sm font-bold text-slate-600">
                      taken out of <strong className="text-slate-900">45 mins</strong> allocated
                    </span>
                  </div>

                  {/* 3-Range Visual Scale */}
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[11px] font-black font-['JetBrains_Mono'] text-slate-700">
                      <span>0m (Too Fast)</span>
                      <span className="text-emerald-800">28m – 45m (Fully Perfect Pace)</span>
                      <span>46m+ (Too Late)</span>
                    </div>

                    <div className="relative h-4 rounded-full overflow-hidden flex shadow-inner bg-slate-200">
                      {/* Range 1: Too Fast */}
                      <div className="w-[30%] bg-rose-400 flex items-center justify-center text-[9px] font-black text-white uppercase">
                        Too Fast
                      </div>
                      {/* Range 2: Fully Perfect */}
                      <div className="w-[45%] bg-emerald-500 flex items-center justify-center text-[9px] font-black text-white uppercase tracking-wider">
                        ★ Fully Perfect ★
                      </div>
                      {/* Range 3: Too Late */}
                      <div className="w-[25%] bg-amber-400 flex items-center justify-center text-[9px] font-black text-slate-950 uppercase">
                        Too Late
                      </div>
                    </div>

                    {/* Indicator pin */}
                    <div className="flex items-center justify-between text-[11px] font-bold text-slate-700 px-1 pt-1">
                      <span className="text-rose-700">&bull; &lt; 28m: High calculation error risk</span>
                      <span className="text-emerald-700 font-extrabold">&bull; 28–45m: Perfect test pace</span>
                      <span className="text-amber-800">&bull; &gt; 45m: Time exhaustion trap</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed bg-matcha-sub p-3 rounded-xl border border-[#a6c4a1]/70">
                    {mathResult.ratingDescription}
                  </p>
                </div>
              </div>

              {/* Break & RW Summary Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-3.5 bg-sky-50 rounded-2xl border border-sky-200">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase text-sky-900 font-['JetBrains_Mono'] flex items-center gap-1">
                      <Coffee className="w-3.5 h-3.5" /> 10m Away Break
                    </span>
                    <span className="text-xs font-bold text-sky-800 font-['JetBrains_Mono']">
                      {breakResult ? `${breakResult.actualMinutes}m` : '10m'}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-sky-950 font-medium">
                    Screen-free reset completed. Brain working memory reset successfully.
                  </p>
                </div>

                <div className="p-3.5 bg-amber-50 rounded-2xl border border-amber-200">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase text-amber-900 font-['JetBrains_Mono'] flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5" /> RW Section
                    </span>
                    <span className="text-xs font-bold text-amber-800 font-['JetBrains_Mono']">
                      {rwResult ? `${rwResult.actualMinutes}m / ${rwDurationMinutes}m` : `${rwDurationMinutes}m`}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-amber-950 font-medium">
                    {rwResult?.ratingLabel || 'Fully Perfect Pace'} &bull; Daily study cap honored.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3">
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-bold text-slate-800 bg-matcha-sub hover:bg-matcha-input border border-[#a6c4a1]/70 transition cursor-pointer"
                >
                  Restart Session
                </button>
                {onNavigateToCalendar && (
                  <button
                    onClick={() => {
                      onClose();
                      onNavigateToCalendar();
                    }}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-black text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200 transition cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <CalendarIcon className="w-3.5 h-3.5" />
                    <span>View on Calendar</span>
                  </button>
                )}
                <button
                  onClick={onClose}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-black text-white bg-slate-900 hover:bg-slate-800 transition cursor-pointer"
                >
                  Close & Step Away
                </button>
              </div>
            </div>
          ) : (
            /* ============================================================ */
            /* ACTIVE RUNNING / PAUSED STAGE                               */
            /* ============================================================ */
            <div className="space-y-5">
              
              {/* ============================================================ */}
              {/* LITERAL CLOCK / AUTHENTIC STOPWATCH DIAL (TICKING DOWN)      */}
              {/* ============================================================ */}
              <div className="relative flex flex-col items-center justify-center my-1 select-none">
                
                {/* Stopwatch Hardware: Pushers & Crown on Top */}
                <div className="relative w-full max-w-[280px] sm:max-w-[320px] h-6 flex items-end justify-center pointer-events-none">
                  {/* Left Reset Pusher (at 10 o'clock) */}
                  <div className="absolute left-10 bottom-0 w-6 h-3.5 bg-gradient-to-t from-slate-700 to-slate-500 border border-slate-400 rounded-t-sm rotate-[-28deg] shadow-xs" />
                  {/* Center Crown Stem (at 12 o'clock) */}
                  <div className="w-9 h-4 bg-gradient-to-t from-slate-700 via-slate-500 to-slate-400 border border-slate-600 rounded-t-md shadow-xs flex flex-col items-center justify-center">
                    <div className="w-7 h-0.5 bg-slate-800" />
                  </div>
                  {/* Right Advance Pusher (at 2 o'clock) */}
                  <div className="absolute right-10 bottom-0 w-6 h-3.5 bg-gradient-to-t from-slate-700 to-slate-500 border border-slate-400 rounded-t-sm rotate-[28deg] shadow-xs" />
                </div>

                {/* Main Circular Stopwatch Casing (Clickable to start/pause) */}
                <div 
                  onClick={() => setIsRunning(!isRunning)}
                  role="button"
                  tabIndex={0}
                  className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full p-2.5 bg-gradient-to-b from-slate-600 via-slate-800 to-slate-950 shadow-2xl border-4 border-slate-500 flex items-center justify-center ring-4 ring-slate-950/70 cursor-pointer hover:scale-[1.01] active:scale-[0.98] transition-transform duration-150 group"
                  title={isRunning ? "Click clock face to pause" : "Click clock face to start stopwatch"}
                >
                  
                  {/* Inner Dark Bezel Face */}
                  <div className="w-full h-full rounded-full bg-[#080d1a] border-2 border-slate-700 relative overflow-hidden flex items-center justify-center shadow-inner">
                    
                    {/* Stage Ambient Radial Glow */}
                    <div 
                      className="absolute inset-0 rounded-full pointer-events-none opacity-35 transition-all duration-700"
                      style={{
                        background: `radial-gradient(circle at 50% 50%, ${
                          currentStage === 'math' ? 'rgba(16, 185, 129, 0.45)' : currentStage === 'break' ? 'rgba(56, 189, 248, 0.45)' : 'rgba(245, 158, 11, 0.45)'
                        } 0%, transparent 70%)`
                      }}
                    />

                    {/* SVG Dial with Ticks, Numbers, Progress Track, and Ticking Hand */}
                    <svg className="w-full h-full absolute inset-0 transform" viewBox="0 0 320 320">
                      {/* Outer Background Circular Track */}
                      <circle
                        cx="160"
                        cy="160"
                        r={100}
                        fill="none"
                        stroke="#1e293b"
                        strokeWidth="7"
                      />

                      {/* Glowing Circular Progress Ring (Unwinds as time ticks down) */}
                      <circle
                        cx="160"
                        cy="160"
                        r={100}
                        fill="none"
                        stroke={currentStage === 'math' ? '#10b981' : currentStage === 'break' ? '#38bdf8' : '#f59e0b'}
                        strokeWidth="7"
                        strokeDasharray={2 * Math.PI * 100}
                        strokeDashoffset={(2 * Math.PI * 100) - ((2 * Math.PI * 100) * (100 - progressPercent)) / 100}
                        strokeLinecap="round"
                        transform="rotate(-90 160 160)"
                        className="transition-all duration-300 ease-out"
                        style={{
                          filter: `drop-shadow(0 0 6px ${currentStage === 'math' ? 'rgba(16,185,129,0.7)' : currentStage === 'break' ? 'rgba(56,189,248,0.7)' : 'rgba(245,158,11,0.7)'})`,
                        }}
                      />

                      {/* 60 Tick Marks & Numbers around the dial */}
                      {Array.from({ length: 60 }).map((_, i) => {
                        const angle = i * 6;
                        const isMajor = i % 5 === 0;
                        const r1 = 142;
                        const r2 = isMajor ? 128 : 135;
                        const rad = (angle - 90) * (Math.PI / 180);
                        const x1 = 160 + r1 * Math.cos(rad);
                        const y1 = 160 + r1 * Math.sin(rad);
                        const x2 = 160 + r2 * Math.cos(rad);
                        const y2 = 160 + r2 * Math.sin(rad);
                        
                        const numR = 118;
                        const nx = 160 + numR * Math.cos(rad);
                        const ny = 160 + numR * Math.sin(rad);
                        const numVal = i === 0 ? '60' : String(i).padStart(2, '0');

                        return (
                          <React.Fragment key={i}>
                            <line
                              x1={x1}
                              y1={y1}
                              x2={x2}
                              y2={y2}
                              stroke={isMajor ? '#f1f5f9' : '#475569'}
                              strokeWidth={isMajor ? 2.5 : 1}
                              strokeLinecap="round"
                            />
                            {isMajor && (
                              <text
                                x={nx}
                                y={ny}
                                textAnchor="middle"
                                dominantBaseline="central"
                                fill="#94a3b8"
                                fontSize="9"
                                fontWeight="800"
                                fontFamily="JetBrains Mono, monospace"
                              >
                                {numVal}
                              </text>
                            )}
                          </React.Fragment>
                        );
                      })}

                      {/* Rotating Stopwatch Needle Hand (Ticking every second) */}
                      <g
                        transform={`rotate(${(stageElapsedSeconds % 60) * 6} 160 160)`}
                        style={{
                          transition: isRunning ? 'transform 0.18s cubic-bezier(0.4, 2.08, 0.55, 0.44)' : 'none',
                        }}
                      >
                        {/* Needle Shaft */}
                        <line
                          x1="160"
                          y1="160"
                          x2="160"
                          y2="38"
                          stroke="#f43f5e"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          style={{ filter: 'drop-shadow(0 0 3px rgba(244, 63, 94, 0.9))' }}
                        />
                        {/* Luminous Arrow Tip */}
                        <circle cx="160" cy="40" r="3.5" fill="#f43f5e" />
                        <circle cx="160" cy="40" r="1.5" fill="#ffffff" />
                        {/* Counterbalance Tail */}
                        <line x1="160" y1="160" x2="160" y2="185" stroke="#f43f5e" strokeWidth="3.5" strokeLinecap="round" />
                        <circle cx="160" cy="185" r="4.5" fill="#f43f5e" />
                        {/* Center Pivot Hub */}
                        <circle cx="160" cy="160" r="7" fill="#0f172a" stroke="#f43f5e" strokeWidth="2.5" />
                        <circle cx="160" cy="160" r="2.5" fill="#cbd5e1" />
                      </g>
                    </svg>

                    {/* Center Cockpit Digital LCD HUD Display */}
                    <div className="relative z-10 flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-slate-800 shadow-2xl w-[170px] sm:w-[190px]">
                      {/* Stage Pill */}
                      <span className={`text-[10px] font-black uppercase tracking-wider font-['JetBrains_Mono'] px-2.5 py-0.5 rounded-full mb-1 border ${
                        currentStage === 'math'
                          ? 'bg-emerald-950/80 text-emerald-400 border-emerald-500/40'
                          : currentStage === 'break'
                          ? 'bg-sky-950/80 text-sky-400 border-sky-500/40'
                          : 'bg-amber-950/80 text-amber-400 border-amber-500/40'
                      }`}>
                        {currentStage === 'math' ? 'Math Sprint' : currentStage === 'break' ? 'Away Break' : 'RW Sprint'}
                      </span>

                      {/* Big Digital Countdown Clock Display */}
                      <div className="text-3xl sm:text-4xl font-black font-['JetBrains_Mono'] tracking-tight text-white flex items-center justify-center drop-shadow-md">
                        <span>{formatTime(secondsRemaining)}</span>
                        {isRunning && (
                          <span className="inline-block w-2 h-2 rounded-full ml-1.5 bg-rose-500 animate-ping" />
                        )}
                      </div>

                      {/* Live Elapsed Counter Subtext */}
                      <div className="flex items-center gap-1.5 mt-1 text-[10px] font-extrabold text-slate-400 font-['JetBrains_Mono']">
                        <span>Elapsed: <strong className="text-slate-200">{formatTime(stageElapsedSeconds)}</strong></span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Live Pacing Helper Pill */}
                {liveMathPacing && (
                  <div className={`mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold ${liveMathPacing.color}`}>
                    <Sparkles className="w-3.5 h-3.5 shrink-0" />
                    <span>{liveMathPacing.label}</span>
                  </div>
                )}
              </div>

              {/* ============================================================ */}
              {/* QUICK LOGGING / EARLY FINISH CONTROLS                        */}
              {/* (Allows user to test e.g. 35 mins Math directly!)            */}
              {/* ============================================================ */}
              {currentStage === 'math' && (
                <div className="p-4 rounded-2xl bg-matcha-sub border-2 border-slate-200 text-left space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-slate-800 font-['JetBrains_Mono'] flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-amber-500" />
                      <span>Finished Math Early? Log Exact Time:</span>
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">Updates calendar live</span>
                  </div>

                  {/* Preset Quick Buttons: includes 35m as requested by user */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    <button
                      onClick={() => handleCompleteMathWithMinutes(30)}
                      className="p-2 rounded-xl text-xs font-bold bg-matcha-input hover:bg-emerald-50 hover:border-emerald-300 border border-slate-300 transition text-slate-800 cursor-pointer flex flex-col items-center"
                    >
                      <span className="font-black text-slate-950 font-['JetBrains_Mono']">30 Mins</span>
                      <span className="text-[10px] text-emerald-700 font-bold">Perfect Pace</span>
                    </button>

                    <button
                      onClick={() => handleCompleteMathWithMinutes(35)}
                      className="p-2 rounded-xl text-xs font-bold bg-emerald-100 hover:bg-emerald-200 border-2 border-emerald-400 transition text-emerald-950 shadow-xs cursor-pointer flex flex-col items-center ring-2 ring-emerald-300/60"
                      title="User requested 35 minutes example"
                    >
                      <span className="font-black text-emerald-950 font-['JetBrains_Mono']">35 Mins ⭐</span>
                      <span className="text-[10px] text-emerald-900 font-extrabold">Fully Perfect!</span>
                    </button>

                    <button
                      onClick={() => handleCompleteMathWithMinutes(40)}
                      className="p-2 rounded-xl text-xs font-bold bg-matcha-input hover:bg-emerald-50 hover:border-emerald-300 border border-slate-300 transition text-slate-800 cursor-pointer flex flex-col items-center"
                    >
                      <span className="font-black text-slate-950 font-['JetBrains_Mono']">40 Mins</span>
                      <span className="text-[10px] text-emerald-700 font-bold">Perfect Pace</span>
                    </button>

                    <button
                      onClick={() => handleCompleteMathWithMinutes(22)}
                      className="p-2 rounded-xl text-xs font-bold bg-matcha-input hover:bg-rose-50 hover:border-rose-300 border border-slate-300 transition text-slate-800 cursor-pointer flex flex-col items-center"
                    >
                      <span className="font-black text-slate-950 font-['JetBrains_Mono']">22 Mins</span>
                      <span className="text-[10px] text-rose-700 font-bold">Too Fast Trap</span>
                    </button>
                  </div>

                  {/* Complete at exact current elapsed */}
                  {stageElapsedSeconds > 10 && (
                    <button
                      onClick={() => handleCompleteMathWithMinutes(currentElapsedMinutes)}
                      className="w-full py-2.5 px-3 rounded-xl text-xs font-black text-emerald-950 bg-emerald-200 hover:bg-emerald-300 transition flex items-center justify-center gap-2 cursor-pointer shadow-xs border border-emerald-400"
                    >
                      <Check className="w-4 h-4 text-emerald-800" />
                      <span>Log Current Elapsed Time ({currentElapsedMinutes} mins) & Go to Break</span>
                    </button>
                  )}
                </div>
              )}

              {/* Stage 2 Break Fast Forward */}
              {currentStage === 'break' && (
                <div className="p-4 rounded-2xl bg-sky-50 border-2 border-sky-200 text-left space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-sky-950 font-['JetBrains_Mono']">
                      Break Control (10m Screen-Free)
                    </span>
                    <span className="text-[11px] text-sky-800 font-semibold">Walk away from laptop</span>
                  </div>
                  <button
                    onClick={() => handleCompleteBreakWithMinutes(10)}
                    className="w-full py-2.5 px-3 rounded-xl text-xs font-black text-white bg-sky-700 hover:bg-sky-800 transition flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <span>Completed 10-Min Break &bull; Advance to Reading & Writing</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* Stage 3 RW Fast Forward */}
              {currentStage === 'rw' && (
                <div className="p-4 rounded-2xl bg-amber-50 border-2 border-amber-200 text-left space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-wider text-amber-950 font-['JetBrains_Mono']">
                      RW Sprint Control (35m Target)
                    </span>
                    <span className="text-[11px] text-amber-800 font-semibold">Passage focus</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => handleCompleteRwWithMinutes(30)}
                      className="p-2.5 rounded-xl text-xs font-bold bg-matcha-input border border-amber-300 hover:bg-amber-100 text-amber-950 transition cursor-pointer"
                    >
                      Log 30 Mins (Perfect)
                    </button>
                    <button
                      onClick={() => handleCompleteRwWithMinutes(35)}
                      className="p-2.5 rounded-xl text-xs font-black bg-amber-200 border-2 border-amber-400 hover:bg-amber-300 text-amber-950 transition cursor-pointer"
                    >
                      Log 35 Mins (Full Cap)
                    </button>
                  </div>
                </div>
              )}

              {/* Reading & Writing Length Selector */}
              {currentStage === 'math' && (
                <div className="flex items-center justify-between text-xs text-slate-600 bg-matcha-sub p-2.5 rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-800">RW Sprint Budget:</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setRwDurationMinutes(35)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-black transition cursor-pointer ${
                        rwDurationMinutes === 35 ? 'bg-indigo-600 text-white shadow-xs' : 'bg-matcha-input text-slate-700 hover:bg-[rgba(195,218,190,0.65)] border'
                      }`}
                    >
                      35 Mins (Strict 90m Cap)
                    </button>
                    <button
                      onClick={() => setRwDurationMinutes(45)}
                      className={`px-2.5 py-1 rounded-lg text-xs font-black transition cursor-pointer ${
                        rwDurationMinutes === 45 ? 'bg-indigo-600 text-white shadow-xs' : 'bg-matcha-input text-slate-700 hover:bg-[rgba(195,218,190,0.65)] border'
                      }`}
                    >
                      45 Mins (Extended)
                    </button>
                  </div>
                </div>
              )}

              {/* Main Timer Controls */}
              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleReset}
                  className="p-3 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-[rgba(195,218,190,0.65)] transition cursor-pointer"
                  title="Reset to 45m Math"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>

                <button
                  id="timer-play-pause-btn"
                  onClick={() => setIsRunning(!isRunning)}
                  className={`px-8 py-3.5 rounded-2xl font-black text-white transition-all duration-200 shadow-md flex items-center gap-2 text-base cursor-pointer active:scale-95 ${
                    isRunning
                      ? 'bg-rose-600 hover:bg-rose-700 ring-4 ring-rose-500/40 shadow-rose-500/30'
                      : 'bg-emerald-600 hover:bg-emerald-700 ring-4 ring-emerald-500/40 shadow-emerald-500/30'
                  }`}
                >
                  {isRunning ? (
                    <>
                      <Pause className="w-5 h-5 fill-white" />
                      <span>Stop Clock</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-5 h-5 fill-white" />
                      <span>{secondsRemaining === currentStageTotal ? 'Start Stopwatch' : 'Resume Stopwatch'}</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => {
                    if (currentStage === 'math') advanceToStage('break');
                    else if (currentStage === 'break') advanceToStage('rw');
                    else if (currentStage === 'rw') advanceToStage('finished');
                  }}
                  className="p-3 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-[rgba(195,218,190,0.65)] transition cursor-pointer"
                  title="Skip to next stage"
                >
                  <SkipForward className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Reminder */}
        <div className="bg-matcha-sub px-5 sm:px-6 py-3.5 border-t border-slate-200 text-center">
          <p className="text-[11px] text-slate-600 font-medium">
            🔒 <strong>Calendar Synchronization:</strong> When you complete stages or finish early (e.g. 35 mins math), your exact pace rating is permanently linked to <strong className="text-slate-900">{currentDayPlan ? currentDayPlan.formattedDate : currentDateStr}</strong> in the calendar.
          </p>
        </div>
      </div>
    </div>
  );
};
