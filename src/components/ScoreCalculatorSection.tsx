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
  Award
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
      {/* Top Banner */}
      <div className="bg-gradient-to-br from-[#07213a] via-[#0b3455] to-[#03517c] border-2 border-sky-400/40 rounded-3xl p-6 sm:p-8 shadow-grave text-white relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[11px] font-black uppercase px-3 py-1 rounded-full bg-amber-400/25 text-amber-200 border border-amber-300/40 font-['JetBrains_Mono']">
                Official Progression Engine
              </span>
              <span className="text-[11px] text-sky-200 font-extrabold font-['JetBrains_Mono'] flex items-center gap-1">
                <Target className="w-3.5 h-3.5 text-amber-400" />
                Target 1500+ Architecture
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-luxury tracking-tight flex items-center gap-2.5 text-white">
              <Trophy className="w-7 h-7 text-amber-400" />
              <span>Mock Test Score Target & Gap Calculator</span>
            </h2>
            <p className="text-xs sm:text-sm text-sky-100/90 max-w-2xl leading-relaxed font-medium">
              Validate your Bluebook practice scores against your target. If your score doesn't match your goal, the system instructs you to retake Test #{currentTestIdx + 1} again until mastered before shifting to the next test.
            </p>
          </div>

          {/* Quick Target Summary Card */}
          <div className="bg-[#041321]/85 border border-sky-400/35 rounded-2xl p-4 min-w-[220px] space-y-1 shadow-inner">
            <span className="text-[10px] font-black uppercase font-['JetBrains_Mono'] text-sky-300">
              Active Test Target
            </span>
            <div className="text-2xl font-bold text-amber-300 font-['JetBrains_Mono']">
              {totalScore} <span className="text-xs text-sky-200 font-normal">/ {targetTotal} Goal</span>
            </div>
            <div className="text-[11px] font-bold font-['JetBrains_Mono']">
              Gap: <span className={scoreDelta >= 0 ? 'text-emerald-400' : 'text-amber-400'}>{scoreDelta >= 0 ? `+${scoreDelta}` : scoreDelta} pts</span>
            </div>
          </div>
        </div>
      </div>

      {/* 1. Test Selector Tabs with Strict Prerequisite Indicators */}
      <div className="bg-[#082238]/90 backdrop-blur-md p-3.5 rounded-2xl border-2 border-sky-400/30 shadow-grave space-y-2.5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 px-1">
          <span className="text-[11px] font-black uppercase tracking-wider text-sky-200 font-['JetBrains_Mono']">
            Select Practice Test Benchmark:
          </span>
          <span className="text-[11px] text-sky-300/80 font-['JetBrains_Mono']">
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
                    ? 'bg-gradient-to-br from-sky-600 to-blue-700 text-white border-sky-300 shadow-md ring-2 ring-sky-400/50'
                    : unlocked
                    ? 'bg-[#051624]/80 text-sky-100 border-sky-500/25 hover:bg-[#0b2d49] hover:border-sky-400/40'
                    : 'bg-[#030e18]/80 text-sky-300/50 border-sky-950 hover:border-sky-500/30'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-black uppercase font-['JetBrains_Mono'] flex items-center gap-1 ${
                    isSelected ? 'text-sky-100' : unlocked ? 'text-sky-300/80' : 'text-slate-400'
                  }`}>
                    {!unlocked && <Lock className="w-2.5 h-2.5 text-amber-400 shrink-0" />}
                    Test #{idx + 1}
                  </span>
                  <span className={`text-[10px] font-bold font-['JetBrains_Mono'] ${isSelected ? 'text-amber-300' : 'text-amber-300/80'}`}>
                    {t.date}
                  </span>
                </div>
                <div className="text-xs font-bold truncate mt-1">
                  {t.name.split('(')[0]}
                </div>
                {hasRecord ? (
                  <div className={`text-[10px] font-extrabold font-['JetBrains_Mono'] mt-0.5 ${
                    isSelected ? 'text-emerald-200' : 'text-emerald-300'
                  }`}>
                    Score: {testTotal}
                  </div>
                ) : (
                  <div className="text-[10px] text-sky-300/60 font-['JetBrains_Mono'] mt-0.5">
                    {unlocked ? 'Pending' : `Requires Test #${idx}`}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Main Calculator Form Stage */}
      <div className="bg-gradient-to-b from-[#082136] via-[#092942] to-[#061e31] rounded-3xl border-2 border-sky-400/35 shadow-grave p-6 sm:p-8 space-y-7 text-white backdrop-blur-xl">
        
        {/* Prerequisite Alert if user clicked on a later test before clearing previous */}
        {!isTestUnlocked(currentTestIdx) && (
          <div className="p-4 rounded-2xl bg-amber-950/70 border-2 border-amber-400/50 text-amber-200 flex items-center gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0" />
            <div className="text-xs font-['JetBrains_Mono'] leading-relaxed">
              <strong>Sequence Warning:</strong> Test #{currentTestIdx} target has not been met yet!
              You can still input benchmarks here, but the Rulebook recommends giving Test #{currentTestIdx} again before taking this exam.
            </div>
          </div>
        )}

        {/* Target vs Actual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Target Score Card */}
          <div className="bg-[#051828]/85 p-5 rounded-2xl border-2 border-sky-400/30 space-y-4 shadow-inner">
            <div className="flex items-center justify-between border-b border-sky-400/20 pb-2.5">
              <span className="text-xs font-black uppercase text-sky-200 font-['JetBrains_Mono'] flex items-center gap-1.5">
                <Target className="w-4 h-4 text-sky-400" />
                Target Score Setup
              </span>
              <span className="text-xs font-bold text-sky-300 font-['JetBrains_Mono']">Goal</span>
            </div>

            <div className="grid grid-cols-2 gap-3.5">
              <div>
                <label className="text-xs font-bold text-sky-200/90 block mb-1">Target Math (Max 800)</label>
                <input
                  type="number"
                  min={200}
                  max={800}
                  step={10}
                  value={targetMath}
                  onChange={(e) => {
                    const val = parseInt(e.target.value) || 0;
                    setTargetMath(val);
                    setTargetTotal(val + targetRW);
                  }}
                  className="w-full p-3 rounded-xl border-2 border-sky-400/40 font-bold text-white text-center text-lg bg-[#030f1a] focus:outline-none focus:border-sky-300 focus:ring-2 focus:ring-sky-400/20 font-['JetBrains_Mono'] transition"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-sky-200/90 block mb-1">Target R&W (Max 800)</label>
                <input
                  type="number"
                  min={200}
                  max={800}
                  step={10}
                  value={targetRW}
                  onChange={(e) => {
                    const val = parseInt(e.target.value) || 0;
                    setTargetRW(val);
                    setTargetTotal(targetMath + val);
                  }}
                  className="w-full p-3 rounded-xl border-2 border-sky-400/40 font-bold text-white text-center text-lg bg-[#030f1a] focus:outline-none focus:border-sky-300 focus:ring-2 focus:ring-sky-400/20 font-['JetBrains_Mono'] transition"
                />
              </div>
            </div>

            <div className="text-right text-xs font-black font-['JetBrains_Mono'] text-sky-300 pt-1">
              Combined Target Goal: <strong className="text-amber-300 text-lg font-black">{targetTotal}</strong>
            </div>
          </div>

          {/* Actual Score Card */}
          <div className="bg-[#051e2f]/85 p-5 rounded-2xl border-2 border-emerald-400/30 space-y-4 shadow-inner">
            <div className="flex items-center justify-between border-b border-emerald-400/20 pb-2.5">
              <span className="text-xs font-black uppercase text-emerald-300 font-['JetBrains_Mono'] flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-emerald-400" />
                Actual Bluebook Score
              </span>
              <span className="text-xs font-bold text-emerald-300 font-['JetBrains_Mono']">Score Report</span>
            </div>

            <div className="grid grid-cols-2 gap-3.5">
              <div>
                <label className="text-xs font-bold text-emerald-200/90 block mb-1">Actual Math Score</label>
                <input
                  type="number"
                  min={200}
                  max={800}
                  step={10}
                  value={mathScore}
                  onChange={(e) => setMathScore(parseInt(e.target.value) || 0)}
                  className="w-full p-3 rounded-xl border-2 border-emerald-400/40 font-bold text-white text-center text-lg bg-[#030f1a] focus:outline-none focus:border-emerald-300 focus:ring-2 focus:ring-emerald-400/20 font-['JetBrains_Mono'] transition"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-emerald-200/90 block mb-1">Actual R&W Score</label>
                <input
                  type="number"
                  min={200}
                  max={800}
                  step={10}
                  value={rwScore}
                  onChange={(e) => setRwScore(parseInt(e.target.value) || 0)}
                  className="w-full p-3 rounded-xl border-2 border-emerald-400/40 font-bold text-white text-center text-lg bg-[#030f1a] focus:outline-none focus:border-emerald-300 focus:ring-2 focus:ring-emerald-400/20 font-['JetBrains_Mono'] transition"
                />
              </div>
            </div>

            <div className="text-right text-xs font-black font-['JetBrains_Mono'] text-emerald-200 pt-1">
              Combined Achieved Score: <strong className="text-emerald-400 text-lg font-black">{totalScore}</strong>
            </div>
          </div>
        </div>

        {/* 3. Real-Time Score Gap Metrics Banner */}
        <div className={`p-5 rounded-2xl border-2 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-inner backdrop-blur-sm ${
          isGoalAchieved 
            ? 'bg-emerald-950/80 border-emerald-400/50 text-emerald-100'
            : isNearGoal
            ? 'bg-sky-950/80 border-sky-400/50 text-sky-100'
            : 'bg-rose-950/80 border-rose-500/50 text-rose-100'
        }`}>
          <div className="flex items-center gap-3.5">
            {isGoalAchieved ? (
              <CheckCircle2 className="w-9 h-9 text-emerald-400 shrink-0" />
            ) : isNearGoal ? (
              <Sparkles className="w-9 h-9 text-sky-400 shrink-0" />
            ) : (
              <AlertTriangle className="w-9 h-9 text-rose-400 shrink-0" />
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
                Math Gap: <strong className={mathDelta >= 0 ? 'text-emerald-300' : 'text-amber-300'}>{mathDelta > 0 ? `+${mathDelta}` : mathDelta} pts</strong> • 
                R&W Gap: <strong className={rwDelta >= 0 ? 'text-emerald-300' : 'text-amber-300'}>{rwDelta > 0 ? `+${rwDelta}` : rwDelta} pts</strong>
              </p>
            </div>
          </div>

          <div className="text-center sm:text-right">
            <span className="text-3xl font-black font-['JetBrains_Mono'] text-white">
              {totalScore} <span className="text-sm font-normal text-sky-300/70">/ {targetTotal}</span>
            </span>
          </div>
        </div>

        {/* 4. DYNAMIC TARGET PROGRESSION & RETAKE DECISION ENGINE */}
        {/* Replaces the old question autopsy section completely */}
        {isGoalAchieved ? (
          /* STATE A: GOAL FULLY MET */
          <div className="bg-[#052418]/90 p-5 sm:p-6 rounded-2xl border-2 border-emerald-400/60 shadow-grave space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center shrink-0">
                  <Trophy className="w-6 h-6 text-emerald-400" />
                </div>
                <div>
                  <span className="text-[11px] font-black uppercase font-['JetBrains_Mono'] px-2.5 py-0.5 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/40">
                    Target Cleared • Advancement Approved
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold font-luxury text-white mt-0.5">
                    Goal Achieved! You Are Cleared to Proceed
                  </h3>
                </div>
              </div>
              <div className="text-left sm:text-right font-['JetBrains_Mono']">
                <div className="text-2xl font-black text-emerald-300">+{scoreDelta} pts</div>
                <div className="text-[11px] text-emerald-200/80">above target ({targetTotal})</div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-medium">
              Sensational execution! Your actual score of <strong>{totalScore}</strong> meets or exceeds your <strong>{targetTotal}</strong> goal. 
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
                  <span>Shift to Bluebook Test #{currentTestIdx + 2} ({nextTest.date}) →</span>
                </button>
                <span className="text-xs text-emerald-300/90 font-['JetBrains_Mono']">
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
          <div className="bg-[#082236]/90 p-5 sm:p-6 rounded-2xl border-2 border-sky-400/60 shadow-grave space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center shrink-0">
                  <Sparkles className="w-6 h-6 text-sky-400" />
                </div>
                <div>
                  <span className="text-[11px] font-black uppercase font-['JetBrains_Mono'] px-2.5 py-0.5 rounded-full bg-sky-400/20 text-sky-200 border border-sky-400/40">
                    Within Striking Range • Gap: {Math.abs(scoreDelta)} pts
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
                  <span>Shift to Bluebook Test #{currentTestIdx + 2} →</span>
                </button>
              )}
              <button
                type="button"
                onClick={handleRetakeCurrentTest}
                className="w-full sm:w-auto px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-sky-200 bg-[#061828] hover:bg-[#0c2e4d] border-2 border-sky-400/40 transition flex items-center justify-center gap-2 cursor-pointer font-['JetBrains_Mono']"
              >
                <RotateCcw className="w-4 h-4 text-sky-300" />
                <span>Retake Test #{currentTestIdx + 1} to Hit Exact {targetTotal}</span>
              </button>
            </div>
          </div>
        ) : (
          /* STATE C: GOAL NOT MET — RETAKE MANDATORY */
          <div className="bg-[#240e14]/95 p-5 sm:p-6 rounded-2xl border-2 border-rose-500/70 shadow-grave space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-rose-500/20 border border-rose-400/40 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-6 h-6 text-rose-400" />
                </div>
                <div>
                  <span className="text-[11px] font-black uppercase font-['JetBrains_Mono'] px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-400/40">
                    Target Not Met • Retake Required
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
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-[#140609]/80 border border-rose-500/25 text-rose-300/60 text-xs font-['JetBrains_Mono'] cursor-not-allowed">
                  <Lock className="w-3.5 h-3.5" />
                  <span>Test #{currentTestIdx + 2} Locked (Requires score ≥ {targetTotal - 40})</span>
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
            className="w-full p-3.5 rounded-xl border-2 border-sky-400/30 text-xs sm:text-sm text-sky-100 placeholder:text-sky-300/40 bg-[#04121e] focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/20 font-sans leading-relaxed"
          />
        </div>

        {/* 6. Action Buttons Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-sky-500/25">
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

      {/* 7. Score Progression History Across All Tests */}
      {Object.keys(allSavedRecords).length > 0 && (
        <div className="bg-[#051829]/95 text-white rounded-3xl p-6 border-2 border-sky-500/35 space-y-4 shadow-grave">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-wider text-sky-400 font-['JetBrains_Mono']">
              Score Progression History
            </span>
            <span className="text-xs text-sky-300 font-['JetBrains_Mono']">
              {Object.keys(allSavedRecords).length} of 5 Mocks Logged
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {MOCK_TESTS_CONFIG.map((t) => {
              const rec = allSavedRecords[t.id];
              if (!rec) return null;
              const d = rec.totalScore - rec.targetTotal;

              return (
                <div key={t.id} className="p-3.5 rounded-xl bg-[#082238]/90 border border-sky-400/30 space-y-1 font-['JetBrains_Mono']">
                  <div className="text-[11px] text-sky-300 font-bold">{rec.testName.split('(')[0]}</div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-white">{rec.totalScore}</span>
                    <span className={`text-xs font-black px-1.5 py-0.5 rounded ${
                      d >= 0 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
                    }`}>
                      {d >= 0 ? `+${d}` : d} vs Goal
                    </span>
                  </div>
                  <div className="text-[10px] text-sky-200/80">
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
