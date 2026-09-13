'use client';

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { motion } from 'motion/react';
import { 
  Trophy, 
  Target, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle2, 
  Clock, 
  Zap, 
  BookOpen, 
  Save, 
  Sparkles, 
  ArrowRight, 
  RotateCcw, 
  Lock, 
  Unlock, 
  ShieldAlert, 
  Award,
  ChevronUp,
  ChevronDown,
  Calendar
} from 'lucide-react';

export interface MockTestScoreRecord {
  testId: string;
  testName: string;
  date: string;
  targetTotal: number;
  targetMath: number;
  targetRW: number;
  mathScore: number;
  rwScore: number;
  totalScore: number;
  contentMistakes?: number;
  carelessMistakes?: number;
  timeMistakes?: number;
  notes?: string;
  updatedAt: string;
}

const STORAGE_KEY = 'anti_burnout_mock_scores_v1';

export const MOCK_TESTS_CONFIG = [
  { id: 'w2-diag-1', name: 'Bluebook Test #1 (Early Diagnostic)', date: 'Sun Sep 20', tag: 'Baseline Diagnostic' },
  { id: 'p2-test-2', name: 'Bluebook Test #2 (Phase 2 Timed)', date: 'Mon Oct 19', tag: 'Phase 2 Kickoff' },
  { id: 'p2-test-3', name: 'Bluebook Test #3 (Phase 2 Timed)', date: 'Mon Oct 26', tag: 'Mid-Phase Benchmark' },
  { id: 'p2-test-4', name: 'Bluebook Test #4 (Final Rehearsal)', date: 'Sat Oct 31', tag: 'Final Full Mock' },
  { id: 'w9-d1-2', name: 'Test-Day Timing Dry Run', date: 'Mon Nov 2', tag: 'Exact Wakeup Dry Run' },
];

/**
 * Custom Number Input Stepper Component
 * Strips away native browser white spinner box and provides
 * smooth, customized micro-arrows matching the web UI
 */
interface ScoreInputStepperProps {
  value: number;
  onChange: (val: number) => void;
  min?: number;
  max?: number;
  step?: number;
  colorScheme?: 'blue' | 'emerald';
  id?: string;
  ariaLabel?: string;
}

const ScoreInputStepper: React.FC<ScoreInputStepperProps> = ({
  value,
  onChange,
  min = 200,
  max = 800,
  step = 10,
  colorScheme = 'blue',
  id,
  ariaLabel
}) => {
  const handleIncrement = () => {
    const current = value > 0 ? value : min;
    onChange(Math.min(max, current + step));
  };

  const handleDecrement = () => {
    const current = value > 0 ? value : min;
    onChange(Math.max(min, current - step));
  };

  const isBlue = colorScheme === 'blue';

  return (
    <div className="relative group flex items-center">
      <input
        id={id}
        aria-label={ariaLabel}
        type="number"
        min={min}
        max={max}
        step={step}
        placeholder="e.g. 740"
        value={value > 0 ? value : ''}
        onChange={(e) => {
          const raw = e.target.value;
          if (raw === '') {
            onChange(0);
          } else {
            const v = parseInt(raw) || 0;
            onChange(v);
          }
        }}
        className={`w-full py-3 pl-4 pr-11 rounded-xl border-2 font-black text-center text-xl transition font-['JetBrains_Mono'] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none placeholder:text-slate-500 placeholder:font-normal ${
          isBlue
            ? 'bg-[#081b2e] text-white border-[#27537b] focus:border-blue-400 focus:ring-2 focus:ring-blue-500/20 shadow-inner'
            : 'bg-[#071f21] text-white border-[#1c5d57] focus:border-emerald-400 focus:ring-2 focus:ring-emerald-500/20 shadow-inner'
        }`}
      />
      
      {/* Custom styled stepper controls */}
      <div className="absolute right-1.5 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center bg-[#0d2740] group-hover:bg-[#133758] rounded-lg border border-[#27537b] shadow-2xs overflow-hidden transition-all duration-150">
        <button
          type="button"
          tabIndex={-1}
          onClick={handleIncrement}
          className="w-7 h-4 flex items-center justify-center text-sky-300 hover:text-white hover:bg-sky-600/40 active:bg-sky-600/60 transition cursor-pointer"
          title="Increase (+10)"
          aria-label="Increase by 10"
        >
          <ChevronUp className="w-3.5 h-3.5 stroke-[3]" />
        </button>
        <div className="w-full h-[1px] bg-[#27537b]" />
        <button
          type="button"
          tabIndex={-1}
          onClick={handleDecrement}
          className="w-7 h-4 flex items-center justify-center text-sky-300 hover:text-white hover:bg-sky-600/40 active:bg-sky-600/60 transition cursor-pointer"
          title="Decrease (-10)"
          aria-label="Decrease by 10"
        >
          <ChevronDown className="w-3.5 h-3.5 stroke-[3]" />
        </button>
      </div>
    </div>
  );
};

interface ScoreCalculatorSectionProps {
  initialTestId?: string;
  onNavigateToErrorLog?: () => void;
}

export const ScoreCalculatorSection: React.FC<ScoreCalculatorSectionProps> = ({
  initialTestId = 'p2-test-2',
  onNavigateToErrorLog
}) => {
  const { data: session, status } = useSession();
  const [selectedTestId, setSelectedTestId] = useState<string>(initialTestId);
  const [allSavedRecords, setAllSavedRecords] = useState<Record<string, MockTestScoreRecord>>({});

  // Active form inputs (NO DUMMY DEFAULT DATA)
  const [targetTotal, setTargetTotal] = useState<number>(1500);
  const [targetMath, setTargetMath] = useState<number>(780);
  const [targetRW, setTargetRW] = useState<number>(720);
  const [mathScore, setMathScore] = useState<number>(0);
  const [rwScore, setRwScore] = useState<number>(0);
  const [notes, setNotes] = useState<string>('');
  const [saveToast, setSaveToast] = useState(false);
  const [retakeToast, setRetakeToast] = useState(false);

  // Load all records on mount from local storage immediately
  const loadSavedRecords = () => {
    try {
      const savedStr = localStorage.getItem(STORAGE_KEY);
      if (savedStr) {
        const parsed: Record<string, MockTestScoreRecord> = JSON.parse(savedStr);
        setAllSavedRecords(parsed);
        if (parsed[selectedTestId]) {
          const rec = parsed[selectedTestId];
          setTargetTotal(rec.targetTotal || 1500);
          setTargetMath(rec.targetMath || 780);
          setTargetRW(rec.targetRW || 720);
          setMathScore(rec.mathScore || 0);
          setRwScore(rec.rwScore || 0);
          setNotes(rec.notes || '');
        } else {
          setMathScore(0);
          setRwScore(0);
          setNotes('');
        }
      } else {
        setMathScore(0);
        setRwScore(0);
        setNotes('');
      }
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    loadSavedRecords();
  }, [selectedTestId]);

  // Cloud database sync restoration if signed in
  useEffect(() => {
    if (status === 'authenticated') {
      fetch('/api/user/progress')
        .then((res) => (res.ok ? res.json() : null))
        .then((data) => {
          if (data?.mockTestScores && Object.keys(data.mockTestScores).length > 0) {
            setAllSavedRecords((prev) => {
              const merged = { ...data.mockTestScores, ...prev };
              try {
                localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
              } catch {}
              if (merged[selectedTestId]) {
                const rec = merged[selectedTestId];
                setTargetTotal(rec.targetTotal || 1500);
                setTargetMath(rec.targetMath || 780);
                setTargetRW(rec.targetRW || 720);
                setMathScore(rec.mathScore || 0);
                setRwScore(rec.rwScore || 0);
                setNotes(rec.notes || '');
              }
              return merged;
            });
          }
        })
        .catch((err) => console.warn('Mock score cloud sync fetch error:', err));
    }
  }, [status, selectedTestId]);

  // Handle switching tests
  const handleSelectTest = (testId: string) => {
    setSelectedTestId(testId);
    if (allSavedRecords[testId]) {
      const rec = allSavedRecords[testId];
      setTargetTotal(rec.targetTotal || 1500);
      setTargetMath(rec.targetMath || 780);
      setTargetRW(rec.targetRW || 720);
      setMathScore(rec.mathScore || 0);
      setRwScore(rec.rwScore || 0);
      setNotes(rec.notes || '');
    } else {
      // No dummy data!
      setMathScore(0);
      setRwScore(0);
      setNotes('');
    }
  };

  const currentTestIdx = MOCK_TESTS_CONFIG.findIndex((t) => t.id === selectedTestId);
  const currentTest = MOCK_TESTS_CONFIG[currentTestIdx] || MOCK_TESTS_CONFIG[0];
  const nextTest = currentTestIdx < MOCK_TESTS_CONFIG.length - 1 ? MOCK_TESTS_CONFIG[currentTestIdx + 1] : null;

  // Determine unlock status for any test index
  const isTestUnlocked = (idx: number) => {
    if (idx === 0) return true; // Test 1 is always open
    const prevTest = MOCK_TESTS_CONFIG[idx - 1];
    const prevRec = allSavedRecords[prevTest.id];
    if (!prevRec || !prevRec.totalScore) return false;
    return (prevRec.totalScore - prevRec.targetTotal) >= -40; // near goal or passed
  };

  const hasScore = mathScore > 0 && rwScore > 0;
  const totalScore = mathScore + rwScore;
  const scoreDelta = totalScore - targetTotal;
  const mathDelta = mathScore - targetMath;
  const rwDelta = rwScore - targetRW;

  // Progression Evaluation Logic
  const isGoalAchieved = hasScore && scoreDelta >= 0;
  const isNearGoal = hasScore && scoreDelta >= -40 && scoreDelta < 0; // within 40 points
  const isRetakeRequired = hasScore && scoreDelta < -40; // gap too big

  // Retake current test action
  const handleRetakeCurrentTest = () => {
    setMathScore(0);
    setRwScore(0);
    setNotes('');
    setRetakeToast(true);
    setTimeout(() => setRetakeToast(false), 3000);
  };

  // Save handler
  const handleSave = () => {
    try {
      const activeTest = MOCK_TESTS_CONFIG.find((t) => t.id === selectedTestId) || MOCK_TESTS_CONFIG[0];
      const updatedRecords: Record<string, MockTestScoreRecord> = {
        ...allSavedRecords,
        [selectedTestId]: {
          testId: selectedTestId,
          testName: activeTest.name,
          date: activeTest.date,
          targetTotal,
          targetMath,
          targetRW,
          mathScore,
          rwScore,
          totalScore,
          contentMistakes: 0,
          carelessMistakes: 0,
          timeMistakes: 0,
          notes,
          updatedAt: new Date().toISOString()
        }
      };

      // 1. Permanent Local Storage persistence
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedRecords));
      setAllSavedRecords(updatedRecords);

      // 2. Cloud Database sync (Prisma BluebookTestScore table)
      fetch('/api/user/progress', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mockTestScores: updatedRecords,
        }),
      }).catch((err) => console.warn('Mock score cloud sync push error:', err));

      setSaveToast(true);
      setTimeout(() => setSaveToast(false), 2500);
    } catch (e) {
      console.error('Failed to save mock score', e);
    }
  };

  return (
    <section id="section-score-calculator" className="space-y-6">
      {/* Top Banner - Executive Midnight Navy & Gold Palette */}
      <div className="bg-gradient-to-br from-[#0c243c] via-[#113150] to-[#0a1e33] border-2 border-[#2b567d] rounded-3xl p-6 sm:p-8 shadow-grave text-white relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[11px] font-black uppercase px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/35 font-['JetBrains_Mono']">
                Official Bluebook Scoring Engine
              </span>
              <span className="text-[11px] text-sky-200 font-extrabold font-['JetBrains_Mono'] flex items-center gap-1">
                <Target className="w-3.5 h-3.5 text-amber-400" />
                Target 1500+ (1600 Total Points)
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-luxury tracking-tight flex items-center gap-2.5 text-white">
              <Trophy className="w-7 h-7 text-amber-400" />
              <span>Mock Test Score Target & Gap Calculator</span>
            </h2>
            <p className="text-xs sm:text-sm text-sky-100/90 max-w-2xl leading-relaxed font-medium">
              Validate your real Bluebook practice scores against your goal. The exam has 1600 points total with 1500+ as the non-negotiable baseline. If your score doesn't reach your target, the system prompts you to retake Test #{currentTestIdx + 1} until cleared.
            </p>
          </div>

          {/* Quick Target Summary Card */}
          <div className="bg-[#07192b]/90 border border-[#2b567d] rounded-2xl p-4 min-w-[230px] space-y-1 shadow-inner">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-black uppercase font-['JetBrains_Mono'] text-sky-300">
                Score / 1600 Total
              </span>
              <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded bg-amber-400/20 text-amber-300 font-['JetBrains_Mono']">
                {targetTotal}+ Target
              </span>
            </div>
            <div className="text-2xl font-bold text-amber-300 font-['JetBrains_Mono']">
              {hasScore ? totalScore : '--'} <span className="text-sm text-sky-200 font-normal">/ 1600</span>
            </div>
            <div className="text-[11px] font-bold font-['JetBrains_Mono']">
              {hasScore ? (
                <>Gap vs {targetTotal}+: <span className={scoreDelta >= 0 ? 'text-emerald-400' : 'text-rose-400'}>{scoreDelta >= 0 ? `+${scoreDelta}` : scoreDelta} pts</span></>
              ) : (
                <span className="text-slate-400">Score Not Entered Yet</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 1. Test Selector Tabs Bar - Soothing Deep Executive Blue */}
      <div className="bg-[#081d33] p-3.5 rounded-2xl border-2 border-[#20496f] shadow-grave space-y-2.5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 px-1">
          <span className="text-[11px] font-black uppercase tracking-wider text-sky-200 font-['JetBrains_Mono']">
            Select Practice Test Benchmark:
          </span>
          <span className="text-[11px] text-sky-300/80 font-['JetBrains_Mono']">
            Must achieve 1500+ target on previous test to clear sequence
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
          {MOCK_TESTS_CONFIG.map((t, idx) => {
            const isSelected = selectedTestId === t.id;
            const record = allSavedRecords[t.id];
            const hasRecord = !!record && (record.totalScore > 0);
            const testTotal = record?.totalScore;
            const unlocked = isTestUnlocked(idx);

            return (
              <button
                key={t.id}
                onClick={() => handleSelectTest(t.id)}
                className={`p-3 rounded-xl border-2 text-left transition min-h-[58px] cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-400 shadow-md ring-2 ring-blue-400/40'
                    : unlocked
                    ? 'bg-[#0d2a47] text-sky-100 border-[#254d73] hover:bg-[#13375b] hover:border-[#386d99]'
                    : 'bg-[#061626] text-slate-400 border-[#152e46] hover:border-[#20496f]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-black uppercase font-['JetBrains_Mono'] flex items-center gap-1 ${
                    isSelected ? 'text-white' : unlocked ? 'text-sky-200' : 'text-slate-400'
                  }`}>
                    {!unlocked && <Lock className="w-2.5 h-2.5 text-amber-400 shrink-0" />}
                    Test #{idx + 1}
                  </span>
                  <span className={`text-[10px] font-bold font-['JetBrains_Mono'] ${
                    isSelected ? 'text-amber-200' : 'text-amber-300/80'
                  }`}>
                    {t.date}
                  </span>
                </div>
                <div className="text-xs font-bold truncate mt-1">
                  {t.name.split('(')[0]}
                </div>
                {hasRecord ? (
                  <div className={`text-[10px] font-extrabold font-['JetBrains_Mono'] mt-0.5 ${
                    isSelected ? 'text-emerald-200' : 'text-emerald-400'
                  }`}>
                    Score: {testTotal} / 1600
                  </div>
                ) : (
                  <div className="text-[10px] text-slate-400 font-['JetBrains_Mono'] mt-0.5">
                    {unlocked ? 'Score Pending' : `Requires Test #${idx}`}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Main Calculator Form Stage - Deep Executive Navy Canvas */}
      <div className="bg-[#0b243d] rounded-3xl border-2 border-[#2b567d] shadow-grave p-6 sm:p-8 space-y-7 text-white">
        
        {/* Prerequisite Alert if user clicked on a later test before clearing previous */}
        {!isTestUnlocked(currentTestIdx) && (
          <div className="p-4 rounded-2xl bg-[#2d1b08] border-2 border-[#f59e0b]/60 text-amber-200 flex items-center gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0" />
            <div className="text-xs font-['JetBrains_Mono'] leading-relaxed">
              <strong>Sequence Warning:</strong> Test #{currentTestIdx} target has not been met yet!
              You can still input scores here, but the Rulebook recommends giving Test #{currentTestIdx} again before taking this exam.
            </div>
          </div>
        )}

        {/* Target vs Actual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Target Score Card */}
          <div className="bg-[#0f2d4a]/90 p-5 rounded-2xl border-2 border-[#27537b] space-y-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-[#234c70] pb-2.5">
              <span className="text-xs font-black uppercase text-sky-200 font-['JetBrains_Mono'] flex items-center gap-1.5">
                <Target className="w-4 h-4 text-blue-400" />
                Target Score Setup
              </span>
              <span className="text-xs font-bold text-sky-300 font-['JetBrains_Mono']">Goal Baseline</span>
            </div>

            <div className="grid grid-cols-2 gap-3.5">
              <div>
                <label className="text-xs font-bold text-sky-200 block mb-1.5">Target Math (Max 800)</label>
                <ScoreInputStepper
                  id="input-target-math"
                  ariaLabel="Target Math Score"
                  value={targetMath}
                  onChange={(val) => {
                    setTargetMath(val);
                    setTargetTotal(val + targetRW);
                  }}
                  min={200}
                  max={800}
                  step={10}
                  colorScheme="blue"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-sky-200 block mb-1.5">Target R&W (Max 800)</label>
                <ScoreInputStepper
                  id="input-target-rw"
                  ariaLabel="Target Reading and Writing Score"
                  value={targetRW}
                  onChange={(val) => {
                    setTargetRW(val);
                    setTargetTotal(targetMath + val);
                  }}
                  min={200}
                  max={800}
                  step={10}
                  colorScheme="blue"
                />
              </div>
            </div>

            <div className="text-right text-xs font-black font-['JetBrains_Mono'] text-sky-300 pt-1">
              Combined Target Goal: <strong className="text-amber-300 text-xl font-black">{targetTotal} / 1600</strong> <span className="text-xs text-amber-200/80 font-normal">({targetTotal}+ Target)</span>
            </div>
          </div>

          {/* Actual Score Card - Deep Matcha Emerald Undertone */}
          <div className="bg-[#0f3238]/90 p-5 rounded-2xl border-2 border-[#1c5f59] space-y-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-[#18534e] pb-2.5">
              <span className="text-xs font-black uppercase text-emerald-300 font-['JetBrains_Mono'] flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                Actual Bluebook Score
              </span>
              <span className="text-xs font-bold text-emerald-300 font-['JetBrains_Mono']">Score Report</span>
            </div>

            <div className="grid grid-cols-2 gap-3.5">
              <div>
                <label className="text-xs font-bold text-emerald-200 block mb-1.5">Actual Math Score</label>
                <ScoreInputStepper
                  id="input-actual-math"
                  ariaLabel="Actual Math Score"
                  value={mathScore}
                  onChange={(val) => setMathScore(val)}
                  min={200}
                  max={800}
                  step={10}
                  colorScheme="emerald"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-emerald-200 block mb-1.5">Actual R&W Score</label>
                <ScoreInputStepper
                  id="input-actual-rw"
                  ariaLabel="Actual Reading and Writing Score"
                  value={rwScore}
                  onChange={(val) => setRwScore(val)}
                  min={200}
                  max={800}
                  step={10}
                  colorScheme="emerald"
                />
              </div>
            </div>

            <div className="text-right text-xs font-black font-['JetBrains_Mono'] text-emerald-200 pt-1">
              Combined Achieved Score: <strong className="text-emerald-400 text-xl font-black">{hasScore ? `${totalScore} / 1600` : '-- / 1600'}</strong>
            </div>
          </div>
        </div>

        {/* 3. Real-Time Score Gap Metrics Banner */}
        <div className={`p-5 rounded-2xl border-2 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm ${
          !hasScore
            ? 'bg-[#102942] border-[#244c70] text-sky-200'
            : isGoalAchieved 
            ? 'bg-[#063321] border-emerald-400/60 text-emerald-100'
            : isNearGoal
            ? 'bg-[#0c3354] border-sky-400/60 text-sky-100'
            : 'bg-[#381119] border-rose-500/60 text-rose-100'
        }`}>
          <div className="flex items-center gap-3.5">
            {!hasScore ? (
              <Clock className="w-9 h-9 text-sky-400 shrink-0" />
            ) : isGoalAchieved ? (
              <CheckCircle2 className="w-9 h-9 text-emerald-400 shrink-0" />
            ) : isNearGoal ? (
              <Sparkles className="w-9 h-9 text-sky-400 shrink-0" />
            ) : (
              <AlertTriangle className="w-9 h-9 text-rose-400 shrink-0" />
            )}
            <div>
              <h4 className="text-lg font-bold font-luxury">
                {!hasScore
                  ? 'Awaiting Test Scores'
                  : isGoalAchieved 
                  ? 'Goal Reached or Exceeded!' 
                  : isNearGoal
                  ? `Near Goal! Within Striking Range (${Math.abs(scoreDelta)} pts below 1500+)`
                  : `Target Not Met: ${Math.abs(scoreDelta)} Points Below Goal`}
              </h4>
              <p className="text-xs sm:text-sm font-medium mt-0.5">
                {hasScore ? (
                  <>
                    Math Gap: <strong className={mathDelta >= 0 ? 'text-emerald-300' : 'text-amber-300'}>{mathDelta > 0 ? `+${mathDelta}` : mathDelta} pts</strong> &bull; 
                    R&amp;W Gap: <strong className={rwDelta >= 0 ? 'text-emerald-300' : 'text-amber-300'}>{rwDelta > 0 ? `+${rwDelta}` : rwDelta} pts</strong>
                  </>
                ) : (
                  'Type your Math and Reading/Writing scores above to see your point gap against 1500+.'
                )}
              </p>
            </div>
          </div>

          <div className="text-center sm:text-right">
            <span className="text-3xl font-black font-['JetBrains_Mono'] text-white">
              {hasScore ? totalScore : '--'} <span className="text-lg font-bold text-sky-300">/ 1600</span>
            </span>
            <span className="text-[11px] font-black text-amber-300 block font-['JetBrains_Mono'] mt-0.5">
              Goal: {targetTotal}+ (1500+ Bottom Line)
            </span>
          </div>
        </div>

        {/* 4. DYNAMIC TARGET PROGRESSION & RETAKE DECISION ENGINE */}
        {!hasScore ? (
          /* STATE 0: AWAITING INPUT (NO DUMMY DATA) */
          <div className="bg-[#0e2740]/90 p-5 sm:p-6 rounded-2xl border-2 border-[#20496f] space-y-3 text-sky-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/40 flex items-center justify-center shrink-0">
                <Target className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold font-luxury text-white">
                  Ready to Log Bluebook Test #{currentTestIdx + 1}
                </h3>
                <p className="text-xs text-sky-200 font-medium">
                  Enter your raw scores from the Bluebook app above (out of 1600 total points). The Rulebook will calculate your exact gap and determine if you are ready to advance to Test #{currentTestIdx + 2}.
                </p>
              </div>
            </div>
          </div>
        ) : isGoalAchieved ? (
          /* STATE A: GOAL FULLY MET */
          <div className="bg-[#052b1d] p-5 sm:p-6 rounded-2xl border-2 border-emerald-400/70 shadow-grave space-y-4 text-emerald-100">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center shrink-0">
                  <Trophy className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <span className="text-[11px] font-black uppercase font-['JetBrains_Mono'] px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-400/40">
                    Target Cleared &bull; Advancement Approved
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold font-luxury text-white mt-0.5">
                    Goal Achieved! You Are Cleared to Proceed
                  </h3>
                </div>
              </div>
              <div className="text-left sm:text-right font-['JetBrains_Mono']">
                <div className="text-2xl font-black text-emerald-300">+{scoreDelta} pts</div>
                <div className="text-[11px] text-emerald-200/80">above target ({targetTotal}+ / 1600)</div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-medium">
              Sensational execution! Your actual score of <strong>{totalScore} / 1600</strong> meets or exceeds your <strong>{targetTotal}+</strong> goal ({scoreDelta >= 0 ? `+${scoreDelta}` : scoreDelta} points over the 1500+ bottom line). 
              You have conquered this benchmark and are officially qualified to advance to the next official Bluebook exam.
            </p>

            {nextTest ? (
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleSelectTest(nextTest.id)}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs sm:text-sm font-black text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition-all duration-150 flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer font-['JetBrains_Mono']"
                >
                  <Unlock className="w-4 h-4 text-slate-950" />
                  <span>Shift to Bluebook Test #{currentTestIdx + 2} ({nextTest.date}) &rarr;</span>
                </button>
                <span className="text-xs text-emerald-300 font-['JetBrains_Mono']">
                  ✓ Next mock benchmark unlocked
                </span>
              </div>
            ) : (
              <div className="text-xs font-bold text-emerald-300 font-['JetBrains_Mono'] flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-400" />
                <span>All 5 Official Benchmarks Cleared! You are primed for Test Day execution.</span>
              </div>
            )}
          </div>
        ) : isNearGoal ? (
          /* STATE B: NEAR GOAL (STRIKING DISTANCE) */
          <div className="bg-[#0b2f4f] p-5 sm:p-6 rounded-2xl border-2 border-sky-400/70 shadow-grave space-y-4 text-sky-100">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center shrink-0">
                  <Sparkles className="w-6 h-6 text-sky-400" />
                </div>
                <div>
                  <span className="text-[11px] font-black uppercase font-['JetBrains_Mono'] px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/40">
                    Within Striking Range &bull; Gap: {Math.abs(scoreDelta)} pts
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold font-luxury text-white mt-0.5">
                    Near Goal! You Can Shift to Next Test or Retake
                  </h3>
                </div>
              </div>
              <div className="text-left sm:text-right font-['JetBrains_Mono']">
                <div className="text-2xl font-black text-sky-300">{scoreDelta} pts</div>
                <div className="text-[11px] text-sky-200/80">near {targetTotal} target</div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-sky-100/90 leading-relaxed font-medium">
              You scored <strong>{totalScore}</strong>, which is within striking distance of your <strong>{targetTotal}</strong> goal ({Math.abs(scoreDelta)} pts gap). 
              Because you are close to the threshold, you may either give Test #{currentTestIdx + 1} a quick retake to hit the exact target, or shift forward to <strong>Bluebook Test #{currentTestIdx + 2}</strong>.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 flex-wrap">
              {nextTest && (
                <button
                  type="button"
                  onClick={() => handleSelectTest(nextTest.id)}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs sm:text-sm font-black text-slate-950 bg-sky-300 hover:bg-sky-200 transition-all duration-150 flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer font-['JetBrains_Mono']"
                >
                  <ArrowRight className="w-4 h-4 text-slate-950" />
                  <span>Shift to Bluebook Test #{currentTestIdx + 2} &rarr;</span>
                </button>
              )}
              <button
                type="button"
                onClick={handleRetakeCurrentTest}
                className="w-full sm:w-auto px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-sky-200 bg-[#07192b] hover:bg-[#0e2d4d] border-2 border-sky-400/40 transition flex items-center justify-center gap-2 cursor-pointer font-['JetBrains_Mono']"
              >
                <RotateCcw className="w-4 h-4 text-sky-300" />
                <span>Retake Test #{currentTestIdx + 1} to Hit Exact {targetTotal}</span>
              </button>
            </div>
          </div>
        ) : (
          /* STATE C: GOAL NOT MET — RETAKE MANDATORY */
          <div className="bg-[#300e16] p-5 sm:p-6 rounded-2xl border-2 border-rose-500/80 shadow-grave space-y-4 text-rose-100">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-rose-500/20 border border-rose-400/40 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-6 h-6 text-rose-400" />
                </div>
                <div>
                  <span className="text-[11px] font-black uppercase font-['JetBrains_Mono'] px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-400/40">
                    Target Not Met &bull; Retake Required
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold font-luxury text-white mt-0.5">
                    Give Test #{currentTestIdx + 1} Again Before Moving On!
                  </h3>
                </div>
              </div>
              <div className="text-left sm:text-right font-['JetBrains_Mono']">
                <div className="text-2xl font-black text-rose-300">-{Math.abs(scoreDelta)} pts</div>
                <div className="text-[11px] text-rose-200/80">below target ({targetTotal})</div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-rose-100/90 leading-relaxed font-medium">
              Your actual score of <strong>{totalScore}</strong> is <strong>{Math.abs(scoreDelta)} points below</strong> your goal of <strong>{targetTotal}</strong> (Math: {mathScore} / {targetMath}, R&amp;W: {rwScore} / {targetRW}). 
              According to the Anti-Burnout Rulebook, do <strong>NOT</strong> waste the next practice test until you address these leaked points. 
              Review your missed questions in the Error Log, drill the weak concepts on Khan Academy, and <strong>give Test #{currentTestIdx + 1} again and again until you achieve that goal!</strong>
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 flex-wrap">
              <button
                type="button"
                onClick={handleRetakeCurrentTest}
                className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs sm:text-sm font-black text-white bg-rose-600 hover:bg-rose-500 transition-all duration-150 flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer font-['JetBrains_Mono']"
              >
                <RotateCcw className="w-4 h-4 text-white" />
                <span>Give Test #{currentTestIdx + 1} Again (Retake Test)</span>
              </button>

              {onNavigateToErrorLog && (
                <button
                  type="button"
                  onClick={onNavigateToErrorLog}
                  className="w-full sm:w-auto px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-rose-200 bg-[#16070a] hover:bg-[#2c0f16] border-2 border-rose-500/40 transition flex items-center justify-center gap-2 cursor-pointer font-['JetBrains_Mono']"
                >
                  <BookOpen className="w-4 h-4 text-rose-300" />
                  <span>Review Weak Questions in Error Log</span>
                </button>
              )}

              {nextTest && (
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#140609] border border-rose-500/40 text-rose-300/70 text-xs font-['JetBrains_Mono'] cursor-not-allowed">
                  <Lock className="w-3.5 h-3.5 text-rose-400" />
                  <span>Test #{currentTestIdx + 2} Locked (Requires score &ge; {targetTotal - 40})</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Retake feedback toast */}
        {retakeToast && (
          <div className="p-3.5 rounded-xl bg-sky-900/90 border border-sky-400 text-sky-100 text-xs font-['JetBrains_Mono'] flex items-center gap-2">
            <RotateCcw className="w-4 h-4 text-sky-300 animate-spin" />
            <span>Retake initiated! Retest on Bluebook, then input your updated scores above.</span>
          </div>
        )}

        {/* 5. Qualitative Reflection Notes */}
        <div className="space-y-2">
          <label className="text-xs font-black uppercase text-sky-200 tracking-wider font-['JetBrains_Mono'] block">
            Test Reflection & Specific Skills to Review Before Retaking
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="e.g. Struggled with circle geometry on Question 19, punctuation was clean, need to practice Desmos table regressions..."
            rows={3}
            className="w-full p-3.5 rounded-xl border-2 border-[#2b567d] text-xs sm:text-sm text-sky-100 placeholder:text-slate-400 bg-[#07192b] focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 font-sans leading-relaxed"
          />
        </div>

        {/* 6. Action Buttons Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-[#1d4368]">
          <div>
            {onNavigateToErrorLog && (
              <button
                type="button"
                onClick={onNavigateToErrorLog}
                className="px-4 py-2.5 rounded-xl text-xs font-bold text-rose-200 bg-rose-950/70 hover:bg-rose-900/80 border-2 border-rose-500/40 transition flex items-center gap-1.5 min-h-[44px] cursor-pointer shadow-xs active:scale-[0.98]"
              >
                <BookOpen className="w-4 h-4 text-rose-400" />
                <span>Log Questions in Mistake Autopsy</span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleSave}
              className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs sm:text-sm font-black text-slate-950 bg-emerald-400 hover:bg-emerald-300 transition flex items-center justify-center gap-2 min-h-[44px] cursor-pointer shadow-md hover:shadow-lg active:scale-[0.98] border border-emerald-300 font-['JetBrains_Mono']"
            >
              <Save className="w-4 h-4" />
              <span>{saveToast ? '✓ Saved to Profile!' : 'Save Test Score & Gap'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 7. DEDICATED BLUEBOOK PRACTICE TEST SCORES & PERFORMANCE RECORD LIST      */}
      {/* Every test has a heading, and under it the exact numbering!              */}
      {/* ========================================================================= */}
      <div className="bg-[#081d33] rounded-3xl p-6 border-2 border-[#20496f] shadow-grave space-y-5 text-white">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#1d4368] pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-black uppercase px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-400/30 font-['JetBrains_Mono']">
                Complete Exam Log
              </span>
              <span className="text-xs text-amber-300 font-black font-['JetBrains_Mono']">
                5 Scheduled Bluebook Benchmarks
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold font-luxury text-white mt-1">
              Official Bluebook Practice Test Scores & Performance Record
            </h3>
            <p className="text-xs text-sky-200 mt-0.5 font-medium">
              Every practice test benchmark listed with its exact score numbering, target goal, and qualification status.
            </p>
          </div>

          <span className="text-xs text-sky-300 font-['JetBrains_Mono'] bg-[#0b2745] px-3 py-1.5 rounded-xl border border-[#2b567d] shrink-0">
            {Object.values(allSavedRecords).filter((r) => r.totalScore > 0).length} of 5 Logged
          </span>
        </div>

        {/* Stacked Cards for Each Test */}
        <div className="space-y-3.5">
          {MOCK_TESTS_CONFIG.map((test, idx) => {
            const rec = allSavedRecords[test.id];
            const isLogged = !!rec && rec.totalScore > 0;
            const delta = isLogged ? rec.totalScore - rec.targetTotal : 0;
            const isSelected = selectedTestId === test.id;

            return (
              <div 
                key={test.id}
                className={`p-4 sm:p-5 rounded-2xl border-2 transition-all duration-200 ${
                  isSelected 
                    ? 'bg-[#0f2e4d] border-sky-400/80 shadow-md ring-1 ring-sky-400/40' 
                    : 'bg-[#0b243d] border-[#1d4368] hover:border-[#2b567d]'
                }`}
              >
                {/* Heading: Exact Test Title, Numbering & Date */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#183a5c] pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-8 h-8 rounded-lg bg-sky-600/30 border border-sky-400/30 flex items-center justify-center text-xs font-black text-sky-300 font-['JetBrains_Mono'] shrink-0">
                      #{idx + 1}
                    </span>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-white font-luxury flex items-center gap-2">
                        <span>{test.name}</span>
                        {isSelected && (
                          <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-blue-500/30 text-blue-300 border border-blue-400/40 font-['JetBrains_Mono']">
                            Currently Active
                          </span>
                        )}
                      </h4>
                      <span className="text-xs text-amber-300 font-bold font-['JetBrains_Mono'] flex items-center gap-1 mt-0.5">
                        <Calendar className="w-3 h-3 text-amber-400" />
                        {test.date} &bull; {test.tag}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Status Badge */}
                    {isLogged ? (
                      <span className={`text-[11px] font-black px-2.5 py-1 rounded-lg border font-['JetBrains_Mono'] ${
                        delta >= 0 
                          ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40' 
                          : delta >= -40
                          ? 'bg-sky-500/20 text-sky-300 border-sky-500/40'
                          : 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                      }`}>
                        {delta >= 0 ? '✓ Goal Cleared' : delta >= -40 ? '⚡ Striking Distance' : '🚫 Retake Required'}
                      </span>
                    ) : (
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-400 border border-slate-700 font-['JetBrains_Mono']">
                        ⏳ Awaiting Score
                      </span>
                    )}

                    <button
                      type="button"
                      onClick={() => handleSelectTest(test.id)}
                      className="px-3 py-1 rounded-lg text-xs font-bold text-sky-200 bg-[#133758] hover:bg-sky-600 hover:text-white transition cursor-pointer border border-[#2b567d]"
                    >
                      {isSelected ? 'Editing' : 'Load in Form'}
                    </button>
                  </div>
                </div>

                {/* Under the Heading: Exact Numbering Breakdown */}
                <div className="pt-3 grid grid-cols-2 sm:grid-cols-5 gap-2.5 font-['JetBrains_Mono'] text-center sm:text-left">
                  <div className="p-2 rounded-xl bg-[#071b2d] border border-[#1b3d5e]">
                    <span className="text-[10px] text-slate-400 uppercase block">Math Score</span>
                    <span className="text-sm font-black text-white">
                      {isLogged ? `${rec.mathScore} / 800` : '--'}
                    </span>
                  </div>

                  <div className="p-2 rounded-xl bg-[#071b2d] border border-[#1b3d5e]">
                    <span className="text-[10px] text-slate-400 uppercase block">R&amp;W Score</span>
                    <span className="text-sm font-black text-white">
                      {isLogged ? `${rec.rwScore} / 800` : '--'}
                    </span>
                  </div>

                  <div className="p-2 rounded-xl bg-[#071b2d] border border-[#1b3d5e]">
                    <span className="text-[10px] text-slate-400 uppercase block">Total Score</span>
                    <span className="text-base font-black text-amber-300">
                      {isLogged ? `${rec.totalScore} / 1600` : '-- / 1600'}
                    </span>
                  </div>

                  <div className="p-2 rounded-xl bg-[#071b2d] border border-[#1b3d5e]">
                    <span className="text-[10px] text-slate-400 uppercase block">Target Goal</span>
                    <span className="text-sm font-bold text-sky-200">
                      {isLogged ? `${rec.targetTotal}+ / 1600` : `${targetTotal}+ / 1600`}
                    </span>
                  </div>

                  <div className="p-2 rounded-xl bg-[#071b2d] border border-[#1b3d5e] col-span-2 sm:col-span-1">
                    <span className="text-[10px] text-slate-400 uppercase block">Goal Delta</span>
                    <span className={`text-sm font-black ${
                      !isLogged 
                        ? 'text-slate-400' 
                        : delta >= 0 
                        ? 'text-emerald-400' 
                        : 'text-rose-400'
                    }`}>
                      {isLogged ? (delta >= 0 ? `+${delta} pts` : `${delta} pts`) : '--'}
                    </span>
                  </div>
                </div>

                {/* Notes if recorded */}
                {isLogged && rec.notes && (
                  <div className="mt-2.5 text-xs text-sky-100/80 bg-[#061828] p-2.5 rounded-xl border border-[#163654] font-sans">
                    <strong className="text-sky-300 font-semibold font-['JetBrains_Mono']">Notes: </strong> 
                    {rec.notes}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
