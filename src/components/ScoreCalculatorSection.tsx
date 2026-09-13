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
  ChevronDown
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
 * Replaces ugly browser native spinners with custom styled arrows
 * that match the main web UI and always appear smoothly on hover
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
    onChange(Math.min(max, (value || min) + step));
  };

  const handleDecrement = () => {
    onChange(Math.max(min, (value || min) - step));
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
        value={value || ''}
        onChange={(e) => {
          const v = parseInt(e.target.value) || 0;
          onChange(v);
        }}
        className={`w-full py-3 pl-4 pr-11 rounded-xl border-2 font-black text-center text-xl transition font-['JetBrains_Mono'] [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none ${
          isBlue
            ? 'bg-white/95 text-[#0d2a45] border-[#9ec4e0] focus:border-[#2563eb] focus:ring-2 focus:ring-blue-300/40 shadow-xs'
            : 'bg-white/95 text-[#0c3325] border-[#97d0ba] focus:border-[#059669] focus:ring-2 focus:ring-emerald-300/40 shadow-xs'
        }`}
      />
      
      {/* Custom styled stepper controls - smooth, elegant micro-arrows */}
      <div className="absolute right-1.5 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center bg-[#edf5fc] group-hover:bg-white rounded-lg border border-[#b8d6ed] shadow-2xs overflow-hidden transition-all duration-150">
        <button
          type="button"
          tabIndex={-1}
          onClick={handleIncrement}
          className="w-7 h-4 flex items-center justify-center text-[#2563eb] hover:bg-[#dbeaf5] active:bg-[#bfdbfe] transition cursor-pointer"
          title="Increase (+10)"
          aria-label="Increase by 10"
        >
          <ChevronUp className="w-3.5 h-3.5 stroke-[3]" />
        </button>
        <div className="w-full h-[1px] bg-[#c8def0]" />
        <button
          type="button"
          tabIndex={-1}
          onClick={handleDecrement}
          className="w-7 h-4 flex items-center justify-center text-[#2563eb] hover:bg-[#dbeaf5] active:bg-[#bfdbfe] transition cursor-pointer"
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

  // Active form inputs
  const [targetTotal, setTargetTotal] = useState<number>(1500);
  const [targetMath, setTargetMath] = useState<number>(780);
  const [targetRW, setTargetRW] = useState<number>(720);
  const [mathScore, setMathScore] = useState<number>(740);
  const [rwScore, setRwScore] = useState<number>(690);
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
          setMathScore(rec.mathScore || 740);
          setRwScore(rec.rwScore || 690);
          setNotes(rec.notes || '');
        }
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
                setMathScore(rec.mathScore || 740);
                setRwScore(rec.rwScore || 690);
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
      setMathScore(rec.mathScore || 740);
      setRwScore(rec.rwScore || 690);
      setNotes(rec.notes || '');
    } else {
      // Defaults
      setMathScore(740);
      setRwScore(690);
      setNotes('');
    }
  };

  const currentTestIdx = MOCK_TESTS_CONFIG.findIndex((t) => t.id === selectedTestId);
  const currentTest = MOCK_TESTS_CONFIG[currentTestIdx] || MOCK_TESTS_CONFIG[0];
  const nextTest = currentTestIdx < MOCK_TESTS_CONFIG.length - 1 ? MOCK_TESTS_CONFIG[currentTestIdx + 1] : null;

  // Determine unlock status for any test index
  const isTestUnlocked = (idx: number) => {
    if (idx === 0) return true; // Test 1 is always unlocked
    const prevTest = MOCK_TESTS_CONFIG[idx - 1];
    const prevRec = allSavedRecords[prevTest.id];
    if (!prevRec) return false;
    return (prevRec.totalScore - prevRec.targetTotal) >= -40; // near goal or passed
  };

  const totalScore = mathScore + rwScore;
  const scoreDelta = totalScore - targetTotal;
  const mathDelta = mathScore - targetMath;
  const rwDelta = rwScore - targetRW;

  // Progression Evaluation Logic
  const isGoalAchieved = scoreDelta >= 0;
  const isNearGoal = scoreDelta >= -40 && scoreDelta < 0; // within 40 points
  const isRetakeRequired = scoreDelta < -40; // gap is too large

  // Retake current test action
  const handleRetakeCurrentTest = () => {
    setMathScore(500);
    setRwScore(500);
    setNotes('');
    setRetakeToast(true);
    setTimeout(() => setRetakeToast(false), 3000);
  };

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
      {/* Top Banner - Smooth Light Ocean / Calming Executive Blue Theme */}
      <div className="bg-gradient-to-br from-[#1d4f7c] via-[#266295] to-[#17436b] border-2 border-[#5a90bb]/50 rounded-3xl p-6 sm:p-8 shadow-grave text-white relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[11px] font-black uppercase px-3 py-1 rounded-full bg-amber-400/25 text-amber-200 border border-amber-300/40 font-['JetBrains_Mono']">
                Official Progression Engine
              </span>
              <span className="text-[11px] text-sky-100 font-extrabold font-['JetBrains_Mono'] flex items-center gap-1">
                <Target className="w-3.5 h-3.5 text-amber-400" />
                Target 1500+ Architecture
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-luxury tracking-tight flex items-center gap-2.5 text-white">
              <Trophy className="w-7 h-7 text-amber-400" />
              <span>Mock Test Score Target & Gap Calculator</span>
            </h2>
            <p className="text-xs sm:text-sm text-sky-100/95 max-w-2xl leading-relaxed font-medium">
              Validate your Bluebook practice scores against your target. If your score doesn't match your goal, the system instructs you to retake Test #{currentTestIdx + 1} again until mastered before shifting to the next test.
            </p>
          </div>

          {/* Quick Target Summary Card */}
          <div className="bg-[#0f3456]/80 border border-[#6ba4cf]/40 rounded-2xl p-4 min-w-[220px] space-y-1 shadow-inner backdrop-blur-sm">
            <span className="text-[10px] font-black uppercase font-['JetBrains_Mono'] text-sky-200">
              Active Test Target
            </span>
            <div className="text-2xl font-bold text-amber-300 font-['JetBrains_Mono']">
              {totalScore} <span className="text-xs text-sky-200 font-normal">/ {targetTotal} Goal</span>
            </div>
            <div className="text-[11px] font-bold font-['JetBrains_Mono']">
              Gap: <span className={scoreDelta >= 0 ? 'text-emerald-300' : 'text-amber-300'}>{scoreDelta >= 0 ? `+${scoreDelta}` : scoreDelta} pts</span>
            </div>
          </div>
        </div>
      </div>

      {/* 1. Test Selector Tabs Bar - Smooth Soft Light Blue Palette */}
      <div className="bg-[#dbeaf5]/90 backdrop-blur-md p-3.5 rounded-2xl border-2 border-[#b0d2e8] shadow-xs space-y-2.5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 px-1">
          <span className="text-[11px] font-black uppercase tracking-wider text-[#18486f] font-['JetBrains_Mono']">
            Select Practice Test Benchmark:
          </span>
          <span className="text-[11px] text-[#296494] font-['JetBrains_Mono']">
            Must hit target on previous test to clear sequence
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
          {MOCK_TESTS_CONFIG.map((t, idx) => {
            const isSelected = selectedTestId === t.id;
            const hasRecord = !!allSavedRecords[t.id];
            const testTotal = allSavedRecords[t.id]?.totalScore;
            const unlocked = isTestUnlocked(idx);

            return (
              <button
                key={t.id}
                onClick={() => handleSelectTest(t.id)}
                className={`p-3 rounded-xl border-2 text-left transition min-h-[58px] cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] text-white border-[#1e40af] shadow-md ring-2 ring-blue-300'
                    : unlocked
                    ? 'bg-white/80 text-[#1b4366] border-[#c2ddf0] hover:bg-white hover:border-[#86bde2] hover:shadow-xs'
                    : 'bg-[#edf4f9]/70 text-[#6487a3] border-[#d4e4f0] hover:border-[#b0d2e8]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-black uppercase font-['JetBrains_Mono'] flex items-center gap-1 ${
                    isSelected ? 'text-white' : unlocked ? 'text-[#1c4d75]' : 'text-[#7a9bb3]'
                  }`}>
                    {!unlocked && <Lock className="w-2.5 h-2.5 text-amber-600 shrink-0" />}
                    Test #{idx + 1}
                  </span>
                  <span className={`text-[10px] font-bold font-['JetBrains_Mono'] ${
                    isSelected ? 'text-amber-200' : 'text-[#386d99]'
                  }`}>
                    {t.date}
                  </span>
                </div>
                <div className="text-xs font-bold truncate mt-1">
                  {t.name.split('(')[0]}
                </div>
                {hasRecord ? (
                  <div className={`text-[10px] font-extrabold font-['JetBrains_Mono'] mt-0.5 ${
                    isSelected ? 'text-emerald-200' : 'text-emerald-700'
                  }`}>
                    Score: {testTotal}
                  </div>
                ) : (
                  <div className="text-[10px] text-[#5582a4] font-['JetBrains_Mono'] mt-0.5">
                    {unlocked ? 'Pending' : `Requires Test #${idx}`}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Main Calculator Form Stage - Soothing Smooth Light Blue Surface */}
      <div className="bg-[#e8f2f9]/95 rounded-3xl border-2 border-[#b5d5eb] shadow-grave p-6 sm:p-8 space-y-7 text-[#0f2d4a] backdrop-blur-xl">
        
        {/* Prerequisite Alert if user clicked on a later test before clearing previous */}
        {!isTestUnlocked(currentTestIdx) && (
          <div className="p-4 rounded-2xl bg-[#fef3c7] border-2 border-[#f59e0b] text-[#92400e] flex items-center gap-3 shadow-xs">
            <ShieldAlert className="w-5 h-5 text-[#d97706] shrink-0" />
            <div className="text-xs font-['JetBrains_Mono'] leading-relaxed">
              <strong>Sequence Warning:</strong> Test #{currentTestIdx} target has not been met yet!
              You can still input benchmarks here, but the Rulebook recommends giving Test #{currentTestIdx} again before taking this exam.
            </div>
          </div>
        )}

        {/* Target vs Actual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Target Score Card - Soft Light Blue */}
          <div className="bg-[#d9ecf8]/85 p-5 rounded-2xl border-2 border-[#a8cee7] space-y-4 shadow-xs">
            <div className="flex items-center justify-between border-b border-[#bad7eb] pb-2.5">
              <span className="text-xs font-black uppercase text-[#12395d] font-['JetBrains_Mono'] flex items-center gap-1.5">
                <Target className="w-4 h-4 text-[#2563eb]" />
                Target Score Setup
              </span>
              <span className="text-xs font-bold text-[#20517d] font-['JetBrains_Mono']">Goal</span>
            </div>

            <div className="grid grid-cols-2 gap-3.5">
              <div>
                <label className="text-xs font-bold text-[#1b456d] block mb-1.5">Target Math (Max 800)</label>
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
                <label className="text-xs font-bold text-[#1b456d] block mb-1.5">Target R&W (Max 800)</label>
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

            <div className="text-right text-xs font-black font-['JetBrains_Mono'] text-[#194368] pt-1">
              Combined Target Goal: <strong className="text-[#1e40af] text-xl font-black">{targetTotal}</strong>
            </div>
          </div>

          {/* Actual Score Card - Soft Calming Light Mint / Emerald */}
          <div className="bg-[#e2f3ec]/85 p-5 rounded-2xl border-2 border-[#a2d8c3] space-y-4 shadow-xs">
            <div className="flex items-center justify-between border-b border-[#b7e2d1] pb-2.5">
              <span className="text-xs font-black uppercase text-[#104230] font-['JetBrains_Mono'] flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-[#059669]" />
                Actual Bluebook Score
              </span>
              <span className="text-xs font-bold text-[#1a5a43] font-['JetBrains_Mono']">Score Report</span>
            </div>

            <div className="grid grid-cols-2 gap-3.5">
              <div>
                <label className="text-xs font-bold text-[#184c39] block mb-1.5">Actual Math Score</label>
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
                <label className="text-xs font-bold text-[#184c39] block mb-1.5">Actual R&W Score</label>
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

            <div className="text-right text-xs font-black font-['JetBrains_Mono'] text-[#104230] pt-1">
              Combined Achieved Score: <strong className="text-[#047857] text-xl font-black">{totalScore}</strong>
            </div>
          </div>
        </div>

        {/* 3. Real-Time Score Gap Metrics Banner - Light Calming Theme */}
        <div className={`p-5 rounded-2xl border-2 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs backdrop-blur-sm ${
          isGoalAchieved 
            ? 'bg-[#def5e9] border-[#76ce9e] text-[#0d4f30]'
            : isNearGoal
            ? 'bg-[#e0f1fb] border-[#8ec7ed] text-[#0e446d]'
            : 'bg-[#fae7eb] border-[#f09aab] text-[#7a182b]'
        }`}>
          <div className="flex items-center gap-3.5">
            {isGoalAchieved ? (
              <CheckCircle2 className="w-9 h-9 text-[#059669] shrink-0" />
            ) : isNearGoal ? (
              <Sparkles className="w-9 h-9 text-[#0284c7] shrink-0" />
            ) : (
              <AlertTriangle className="w-9 h-9 text-[#e11d48] shrink-0" />
            )}
            <div>
              <h4 className="text-lg font-bold font-luxury">
                {isGoalAchieved 
                  ? 'Goal Reached or Exceeded!' 
                  : isNearGoal
                  ? `Near Goal! Within Striking Range (${Math.abs(scoreDelta)} pts below)`
                  : `Target Not Met: ${Math.abs(scoreDelta)} Points Below Goal`}
              </h4>
              <p className="text-xs sm:text-sm font-medium mt-0.5">
                Math Gap: <strong className={mathDelta >= 0 ? 'text-[#047857]' : 'text-[#b45309]'}>{mathDelta > 0 ? `+${mathDelta}` : mathDelta} pts</strong> • 
                R&W Gap: <strong className={rwDelta >= 0 ? 'text-[#047857]' : 'text-[#b45309]'}>{rwDelta > 0 ? `+${rwDelta}` : rwDelta} pts</strong>
              </p>
            </div>
          </div>

          <div className="text-center sm:text-right">
            <span className="text-3xl font-black font-['JetBrains_Mono']">
              {totalScore} <span className="text-sm font-normal text-slate-500">/ {targetTotal}</span>
            </span>
          </div>
        </div>

        {/* 4. DYNAMIC TARGET PROGRESSION & RETAKE DECISION ENGINE - Light Smooth Theme */}
        {isGoalAchieved ? (
          /* STATE A: GOAL FULLY MET */
          <div className="bg-[#e4f7ed] p-5 sm:p-6 rounded-2xl border-2 border-[#6ece99] shadow-xs space-y-4 text-[#0c4a2c]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white/90 border border-[#72ce9b] flex items-center justify-center shrink-0 shadow-2xs">
                  <Trophy className="w-6 h-6 text-[#059669]" />
                </div>
                <div>
                  <span className="text-[11px] font-black uppercase font-['JetBrains_Mono'] px-2.5 py-0.5 rounded-full bg-[#c5eed9] text-[#0b5431] border border-[#7ed3a5]">
                    Target Cleared • Advancement Approved
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold font-luxury text-[#0a4528] mt-0.5">
                    Goal Achieved! You Are Cleared to Proceed
                  </h3>
                </div>
              </div>
              <div className="text-left sm:text-right font-['JetBrains_Mono']">
                <div className="text-2xl font-black text-[#047857]">+{scoreDelta} pts</div>
                <div className="text-[11px] text-[#1b5e3d]">above target ({targetTotal})</div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#145233] leading-relaxed font-medium">
              Sensational execution! Your actual score of <strong>{totalScore}</strong> meets or exceeds your <strong>{targetTotal}</strong> goal. 
              You have conquered this benchmark and are officially qualified to advance to the next official Bluebook exam.
            </p>

            {nextTest ? (
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleSelectTest(nextTest.id)}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs sm:text-sm font-black text-white bg-[#059669] hover:bg-[#047857] transition-all duration-150 flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer font-['JetBrains_Mono']"
                >
                  <Unlock className="w-4 h-4 text-white" />
                  <span>Shift to Bluebook Test #{currentTestIdx + 2} ({nextTest.date}) →</span>
                </button>
                <span className="text-xs text-[#135936] font-['JetBrains_Mono']">
                  ✓ Next mock benchmark unlocked
                </span>
              </div>
            ) : (
              <div className="text-xs font-bold text-[#059669] font-['JetBrains_Mono'] flex items-center gap-1.5">
                <Award className="w-4 h-4 text-[#d97706]" />
                <span>All 5 Official Benchmarks Cleared! You are primed for Test Day execution.</span>
              </div>
            )}
          </div>
        ) : isNearGoal ? (
          /* STATE B: NEAR GOAL (STRIKING DISTANCE) */
          <div className="bg-[#e3f2fb] p-5 sm:p-6 rounded-2xl border-2 border-[#8bc3eb] shadow-xs space-y-4 text-[#0d3f66]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white/90 border border-[#8ec7ed] flex items-center justify-center shrink-0 shadow-2xs">
                  <Sparkles className="w-6 h-6 text-[#0284c7]" />
                </div>
                <div>
                  <span className="text-[11px] font-black uppercase font-['JetBrains_Mono'] px-2.5 py-0.5 rounded-full bg-[#c8e5f7] text-[#0e4875] border border-[#8bc4ec]">
                    Within Striking Range • Gap: {Math.abs(scoreDelta)} pts
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold font-luxury text-[#0e3b5e] mt-0.5">
                    Near Goal! You Can Shift to Next Test or Retake
                  </h3>
                </div>
              </div>
              <div className="text-left sm:text-right font-['JetBrains_Mono']">
                <div className="text-2xl font-black text-[#0284c7]">{scoreDelta} pts</div>
                <div className="text-[11px] text-[#245880]">near {targetTotal} target</div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#194c73] leading-relaxed font-medium">
              You scored <strong>{totalScore}</strong>, which is within striking distance of your <strong>{targetTotal}</strong> goal ({Math.abs(scoreDelta)} pts gap). 
              Because you are close to the threshold, you may either give Test #{currentTestIdx + 1} a quick retake to hit the exact target, or shift forward to <strong>Bluebook Test #{currentTestIdx + 2}</strong>.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 flex-wrap">
              {nextTest && (
                <button
                  type="button"
                  onClick={() => handleSelectTest(nextTest.id)}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs sm:text-sm font-black text-white bg-[#0284c7] hover:bg-[#0369a1] transition-all duration-150 flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer font-['JetBrains_Mono']"
                >
                  <ArrowRight className="w-4 h-4 text-white" />
                  <span>Shift to Bluebook Test #{currentTestIdx + 2} →</span>
                </button>
              )}
              <button
                type="button"
                onClick={handleRetakeCurrentTest}
                className="w-full sm:w-auto px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-[#0d3f66] bg-white hover:bg-[#f0f8fd] border-2 border-[#96c8eb] transition flex items-center justify-center gap-2 cursor-pointer font-['JetBrains_Mono'] shadow-2xs"
              >
                <RotateCcw className="w-4 h-4 text-[#0284c7]" />
                <span>Retake Test #{currentTestIdx + 1} to Hit Exact {targetTotal}</span>
              </button>
            </div>
          </div>
        ) : (
          /* STATE C: GOAL NOT MET — RETAKE MANDATORY */
          <div className="bg-[#fcedf0] p-5 sm:p-6 rounded-2xl border-2 border-[#f294a7] shadow-xs space-y-4 text-[#6e1324]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white/90 border border-[#f49bb0] flex items-center justify-center shrink-0 shadow-2xs">
                  <AlertTriangle className="w-6 h-6 text-[#e11d48]" />
                </div>
                <div>
                  <span className="text-[11px] font-black uppercase font-['JetBrains_Mono'] px-2.5 py-0.5 rounded-full bg-[#fbd4dd] text-[#88172e] border border-[#f49cb1]">
                    Target Not Met • Retake Required
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold font-luxury text-[#6e1324] mt-0.5">
                    Give Test #{currentTestIdx + 1} Again Before Moving On!
                  </h3>
                </div>
              </div>
              <div className="text-left sm:text-right font-['JetBrains_Mono']">
                <div className="text-2xl font-black text-[#be123c]">-{Math.abs(scoreDelta)} pts</div>
                <div className="text-[11px] text-[#862035]">below target ({targetTotal})</div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#7e1c30] leading-relaxed font-medium">
              Your actual score of <strong>{totalScore}</strong> is <strong>{Math.abs(scoreDelta)} points below</strong> your goal of <strong>{targetTotal}</strong> (Math: {mathScore} / {targetMath}, R&amp;W: {rwScore} / {targetRW}). 
              According to the Anti-Burnout Rulebook, do <strong>NOT</strong> waste the next practice test until you address these leaked points. 
              Review your missed questions in the Error Log, drill the weak concepts on Khan Academy, and <strong>give Test #{currentTestIdx + 1} again and again until you achieve that goal!</strong>
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 flex-wrap">
              <button
                type="button"
                onClick={handleRetakeCurrentTest}
                className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs sm:text-sm font-black text-white bg-[#e11d48] hover:bg-[#be123c] transition-all duration-150 flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-[0.98] cursor-pointer font-['JetBrains_Mono']"
              >
                <RotateCcw className="w-4 h-4 text-white" />
                <span>Give Test #{currentTestIdx + 1} Again (Retake Test)</span>
              </button>

              {onNavigateToErrorLog && (
                <button
                  type="button"
                  onClick={onNavigateToErrorLog}
                  className="w-full sm:w-auto px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-[#88172e] bg-white hover:bg-[#fff1f2] border-2 border-[#f49bb0] transition flex items-center justify-center gap-2 cursor-pointer font-['JetBrains_Mono'] shadow-2xs"
                >
                  <BookOpen className="w-4 h-4 text-[#e11d48]" />
                  <span>Review Weak Questions in Error Log</span>
                </button>
              )}

              {nextTest && (
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/90 border border-[#f0a6b5] text-[#912439] text-xs font-['JetBrains_Mono'] cursor-not-allowed shadow-2xs">
                  <Lock className="w-3.5 h-3.5 text-[#e11d48]" />
                  <span>Test #{currentTestIdx + 2} Locked (Requires score ≥ {targetTotal - 40})</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Retake feedback toast */}
        {retakeToast && (
          <div className="p-3.5 rounded-xl bg-[#e0f2fe] border border-[#7dd3fc] text-[#0369a1] text-xs font-['JetBrains_Mono'] flex items-center gap-2 shadow-xs">
            <RotateCcw className="w-4 h-4 text-[#0284c7] animate-spin" />
            <span>Retake initiated! Retest on Bluebook, then input your updated scores above.</span>
          </div>
        )}

        {/* 5. Qualitative Reflection Notes */}
        <div className="space-y-2">
          <label className="text-xs font-black uppercase text-[#143c61] tracking-wider font-['JetBrains_Mono'] block">
            Test Reflection & Specific Skills to Review Before Retaking
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="e.g. Struggled with circle geometry on Question 19, punctuation was clean, need to practice Desmos table regressions..."
            rows={3}
            className="w-full p-3.5 rounded-xl border-2 border-[#b0d2e8] text-xs sm:text-sm text-[#0f2d4a] placeholder:text-[#648aa9] bg-white/90 focus:border-[#2563eb] focus:outline-none focus:ring-2 focus:ring-blue-300/40 font-sans leading-relaxed shadow-xs"
          />
        </div>

        {/* 6. Action Buttons Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-[#bad7eb]">
          <div>
            {onNavigateToErrorLog && (
              <button
                type="button"
                onClick={onNavigateToErrorLog}
                className="px-4 py-2.5 rounded-xl text-xs font-bold text-rose-800 bg-rose-100/90 hover:bg-rose-200/90 border-2 border-rose-300 transition flex items-center gap-1.5 min-h-[44px] cursor-pointer shadow-xs active:scale-[0.98]"
              >
                <BookOpen className="w-4 h-4 text-rose-600" />
                <span>Log Questions in Mistake Autopsy</span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleSave}
              className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs sm:text-sm font-black text-white bg-[#059669] hover:bg-[#047857] transition flex items-center justify-center gap-2 min-h-[44px] cursor-pointer shadow-md hover:shadow-lg active:scale-[0.98] border border-[#047857] font-['JetBrains_Mono']"
            >
              <Save className="w-4 h-4" />
              <span>{saveToast ? '✓ Saved to Profile!' : 'Save Test Score & Gap'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 7. Score Progression History Across All Tests - Soft Light Blue Frame */}
      {Object.keys(allSavedRecords).length > 0 && (
        <div className="bg-[#dbeaf5]/90 rounded-3xl p-6 border-2 border-[#b0d2e8] space-y-4 shadow-xs text-[#0f2d4a]">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-wider text-[#14436b] font-['JetBrains_Mono']">
              Score Progression History
            </span>
            <span className="text-xs text-[#2b6491] font-['JetBrains_Mono']">
              {Object.keys(allSavedRecords).length} of 5 Mocks Logged
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {MOCK_TESTS_CONFIG.map((t) => {
              const rec = allSavedRecords[t.id];
              if (!rec) return null;
              const d = rec.totalScore - rec.targetTotal;

              return (
                <div key={t.id} className="p-3.5 rounded-xl bg-white/90 border-2 border-[#c2ddf0] space-y-1 font-['JetBrains_Mono'] shadow-2xs">
                  <div className="text-[11px] text-[#2c5f88] font-bold">{rec.testName.split('(')[0]}</div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-[#0c2a44]">{rec.totalScore}</span>
                    <span className={`text-xs font-black px-1.5 py-0.5 rounded ${
                      d >= 0 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {d >= 0 ? `+${d}` : d} vs Goal
                    </span>
                  </div>
                  <div className="text-[10px] text-[#4a7a9e]">
                    Math: {rec.mathScore} • R&W: {rec.rwScore}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};
