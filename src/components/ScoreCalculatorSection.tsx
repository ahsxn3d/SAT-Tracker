'use client';

import React, { useState, useEffect } from 'react';
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
  Calculator,
  ArrowRight,
  RotateCcw,
  Flame,
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
  contentMistakes: number;
  carelessMistakes: number;
  timeMistakes: number;
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
  const [selectedTestId, setSelectedTestId] = useState<string>(initialTestId);
  const [allSavedRecords, setAllSavedRecords] = useState<Record<string, MockTestScoreRecord>>({});

  // Active form inputs
  const [targetTotal, setTargetTotal] = useState<number>(1500);
  const [targetMath, setTargetMath] = useState<number>(780);
  const [targetRW, setTargetRW] = useState<number>(720);
  const [mathScore, setMathScore] = useState<number>(740);
  const [rwScore, setRwScore] = useState<number>(690);
  const [contentMistakes, setContentMistakes] = useState<number>(2);
  const [carelessMistakes, setCarelessMistakes] = useState<number>(3);
  const [timeMistakes, setTimeMistakes] = useState<number>(1);
  const [notes, setNotes] = useState<string>('');
  const [saveToast, setSaveToast] = useState(false);

  // Load all records on mount
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
          setContentMistakes(rec.contentMistakes || 0);
          setCarelessMistakes(rec.carelessMistakes || 0);
          setTimeMistakes(rec.timeMistakes || 0);
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
      setContentMistakes(rec.contentMistakes || 0);
      setCarelessMistakes(rec.carelessMistakes || 0);
      setTimeMistakes(rec.timeMistakes || 0);
      setNotes(rec.notes || '');
    } else {
      // Defaults
      setMathScore(740);
      setRwScore(690);
      setContentMistakes(2);
      setCarelessMistakes(3);
      setTimeMistakes(1);
      setNotes('');
    }
  };

  const totalScore = mathScore + rwScore;
  const scoreDelta = totalScore - targetTotal;
  const mathDelta = mathScore - targetMath;
  const rwDelta = rwScore - targetRW;

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
          contentMistakes,
          carelessMistakes,
          timeMistakes,
          notes,
          updatedAt: new Date().toISOString()
        }
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedRecords));
      setAllSavedRecords(updatedRecords);
      setSaveToast(true);
      setTimeout(() => setSaveToast(false), 2500);
    } catch (e) {
      console.error('Failed to save mock score', e);
    }
  };

  return (
    <section id="section-score-calculator" className="space-y-6">
      {/* Top Banner */}
      <div className="bg-gradient-to-br from-[#0a233f] via-[#0e355c] to-[#025686] border-2 border-sky-400/40 rounded-3xl p-6 sm:p-8 shadow-grave text-white relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 relative z-10">
          <div className="space-y-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[11px] font-black uppercase px-3 py-1 rounded-full bg-amber-400/25 text-amber-200 border border-amber-300/40 font-['JetBrains_Mono']">
                Dedicated Score Engine
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
              Analyze your Bluebook practice tests in full-page concentration. Input your raw and section scores to see your exact gap against 1500+, classify question loss, and generate targeted Phase 2 actions.
            </p>
          </div>

          {/* Quick Target Summary Card */}
          <div className="bg-slate-950/70 border border-sky-400/40 rounded-2xl p-4 min-w-[220px] space-y-1 shadow-2xs">
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

      {/* 1. Test Selector Tabs */}
      <div className="bg-white/95 p-3 rounded-2xl border-2 border-slate-200 shadow-xs space-y-2">
        <span className="text-[11px] font-black uppercase tracking-wider text-slate-500 font-['JetBrains_Mono'] px-1 block">
          Select Practice Test to Analyze:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
          {MOCK_TESTS_CONFIG.map((t, idx) => {
            const isSelected = selectedTestId === t.id;
            const hasRecord = !!allSavedRecords[t.id];
            const testTotal = allSavedRecords[t.id]?.totalScore;

            return (
              <button
                key={t.id}
                onClick={() => handleSelectTest(t.id)}
                className={`p-3 rounded-xl border-2 text-left transition min-h-[58px] cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-sky-700 text-white border-sky-800 shadow-xs ring-2 ring-sky-400'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-black uppercase font-['JetBrains_Mono'] ${isSelected ? 'text-sky-200' : 'text-slate-500'}`}>
                    Test #{idx + 1}
                  </span>
                  <span className={`text-[10px] font-bold font-['JetBrains_Mono'] ${isSelected ? 'text-amber-300' : 'text-slate-600'}`}>
                    {t.date}
                  </span>
                </div>
                <div className="text-xs font-bold truncate mt-1">
                  {t.name.split('(')[0]}
                </div>
                {hasRecord && (
                  <div className={`text-[10px] font-extrabold font-['JetBrains_Mono'] mt-0.5 ${isSelected ? 'text-emerald-300' : 'text-emerald-700'}`}>
                    Score: {testTotal}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Main Calculator Form Stage */}
      <div className="bg-white rounded-3xl border-2 border-slate-200 shadow-xs p-6 sm:p-8 space-y-7">
        {/* Target vs Actual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Target Score Card */}
          <div className="bg-sky-50/70 p-5 rounded-2xl border-2 border-sky-200 space-y-4">
            <div className="flex items-center justify-between border-b border-sky-200 pb-2.5">
              <span className="text-xs font-black uppercase text-sky-950 font-['JetBrains_Mono'] flex items-center gap-1.5">
                <Target className="w-4 h-4 text-sky-600" />
                Target Score Setup
              </span>
              <span className="text-xs font-bold text-sky-700 font-['JetBrains_Mono']">Goal</span>
            </div>

            <div className="grid grid-cols-2 gap-3.5">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Target Math (Max 800)</label>
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
                  className="w-full p-3 rounded-xl border-2 border-sky-300 font-bold text-slate-900 text-center text-lg bg-white focus:outline-none focus:border-sky-600"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Target R&W (Max 800)</label>
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
                  className="w-full p-3 rounded-xl border-2 border-sky-300 font-bold text-slate-900 text-center text-lg bg-white focus:outline-none focus:border-sky-600"
                />
              </div>
            </div>

            <div className="text-right text-xs font-black font-['JetBrains_Mono'] text-sky-900 pt-1">
              Combined Target Goal: <strong className="text-sky-700 text-base font-extrabold">{targetTotal}</strong>
            </div>
          </div>

          {/* Actual Score Card */}
          <div className="bg-indigo-50/70 p-5 rounded-2xl border-2 border-indigo-200 space-y-4">
            <div className="flex items-center justify-between border-b border-indigo-200 pb-2.5">
              <span className="text-xs font-black uppercase text-indigo-950 font-['JetBrains_Mono'] flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-indigo-600" />
                Actual Bluebook Score
              </span>
              <span className="text-xs font-bold text-indigo-700 font-['JetBrains_Mono']">Score Report</span>
            </div>

            <div className="grid grid-cols-2 gap-3.5">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Actual Math Score</label>
                <input
                  type="number"
                  min={200}
                  max={800}
                  step={10}
                  value={mathScore}
                  onChange={(e) => setMathScore(parseInt(e.target.value) || 0)}
                  className="w-full p-3 rounded-xl border-2 border-indigo-300 font-bold text-slate-900 text-center text-lg bg-white focus:outline-none focus:border-indigo-600"
                />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Actual R&W Score</label>
                <input
                  type="number"
                  min={200}
                  max={800}
                  step={10}
                  value={rwScore}
                  onChange={(e) => setRwScore(parseInt(e.target.value) || 0)}
                  className="w-full p-3 rounded-xl border-2 border-indigo-300 font-bold text-slate-900 text-center text-lg bg-white focus:outline-none focus:border-indigo-600"
                />
              </div>
            </div>

            <div className="text-right text-xs font-black font-['JetBrains_Mono'] text-indigo-900 pt-1">
              Combined Achieved Score: <strong className="text-indigo-700 text-base font-extrabold">{totalScore}</strong>
            </div>
          </div>
        </div>

        {/* 3. Real-Time Score Gap Metrics Banner */}
        <div className={`p-5 rounded-2xl border-2 flex flex-col sm:flex-row items-center justify-between gap-4 ${
          scoreDelta >= 0 
            ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
            : 'bg-amber-50 border-amber-300 text-amber-950'
        }`}>
          <div className="flex items-center gap-3.5">
            {scoreDelta >= 0 ? (
              <CheckCircle2 className="w-9 h-9 text-emerald-600 shrink-0" />
            ) : (
              <AlertTriangle className="w-9 h-9 text-amber-600 shrink-0" />
            )}
            <div>
              <h4 className="text-lg font-bold font-luxury">
                {scoreDelta >= 0 ? 'Goal Reached or Exceeded!' : `Gap: ${Math.abs(scoreDelta)} Points Below Target`}
              </h4>
              <p className="text-xs sm:text-sm font-medium mt-0.5">
                Math Gap: <strong className={mathDelta >= 0 ? 'text-emerald-700' : 'text-amber-700'}>{mathDelta > 0 ? `+${mathDelta}` : mathDelta} pts</strong> • 
                R&W Gap: <strong className={rwDelta >= 0 ? 'text-emerald-700' : 'text-amber-700'}>{rwDelta > 0 ? `+${rwDelta}` : rwDelta} pts</strong>
              </p>
            </div>
          </div>

          <div className="text-center sm:text-right">
            <span className="text-3xl font-black font-['JetBrains_Mono']">
              {totalScore} <span className="text-sm font-normal text-slate-500">/ {targetTotal}</span>
            </span>
          </div>
        </div>

        {/* 4. Question Loss Autopsy (Root Cause Split) */}
        <div className="bg-slate-50 p-5 sm:p-6 rounded-2xl border-2 border-slate-200 space-y-4">
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-slate-700 font-['JetBrains_Mono']">
              Question Loss Autopsy: Root Cause Breakdown
            </span>
            <p className="text-xs text-slate-500 mt-0.5">
              Enter how many questions you missed by category to pinpoint where points were dropped:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {/* Content Gap */}
            <div className="bg-white p-4 rounded-xl border border-rose-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-rose-800">Content Gap</span>
                <input
                  type="number"
                  min={0}
                  max={25}
                  value={contentMistakes}
                  onChange={(e) => setContentMistakes(parseInt(e.target.value) || 0)}
                  className="w-16 p-1.5 rounded-lg border border-rose-300 font-bold text-center text-sm"
                />
              </div>
              <p className="text-[11px] text-slate-600 leading-tight">
                Formulas or grammar concepts you did not know yet.
              </p>
            </div>

            {/* Careless Traps */}
            <div className="bg-white p-4 rounded-xl border border-amber-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-800">Careless Traps</span>
                <input
                  type="number"
                  min={0}
                  max={25}
                  value={carelessMistakes}
                  onChange={(e) => setCarelessMistakes(parseInt(e.target.value) || 0)}
                  className="w-16 p-1.5 rounded-lg border border-amber-300 font-bold text-center text-sm"
                />
              </div>
              <p className="text-[11px] text-slate-600 leading-tight">
                Misread the question, arithmetic slip, answered wrong variable.
              </p>
            </div>

            {/* Time Pressure */}
            <div className="bg-white p-4 rounded-xl border border-sky-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-sky-800">Time Pressure</span>
                <input
                  type="number"
                  min={0}
                  max={25}
                  value={timeMistakes}
                  onChange={(e) => setTimeMistakes(parseInt(e.target.value) || 0)}
                  className="w-16 p-1.5 rounded-lg border border-sky-300 font-bold text-center text-sm"
                />
              </div>
              <p className="text-[11px] text-slate-600 leading-tight">
                Rushed the last 4 questions blindly on Module 2.
              </p>
            </div>
          </div>

          {/* Action Prescription */}
          <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-300 space-y-1.5">
            <span className="text-[11px] font-black uppercase font-['JetBrains_Mono'] text-emerald-800 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              Prescribed Action for Your Next Phase 2 Review
            </span>
            <p className="text-xs sm:text-sm text-emerald-950 font-medium leading-relaxed">
              {contentMistakes >= carelessMistakes && contentMistakes >= timeMistakes ? (
                <>Your primary leak is <strong>Content</strong>. Use your next drill day to redo the specific Khan Academy skills you missed until mastery is 100%.</>
              ) : carelessMistakes >= timeMistakes ? (
                <>Your content understanding is strong! Points are being stolen by <strong>rushing</strong>. On every question, underline the prompt target before selecting your answer.</>
              ) : (
                <><strong>Pacing</strong> on Module 2 is your main bottleneck. Never freeze on a boss question for &gt;90s; flag it, eliminate obvious wrongs, and protect the rest of the test.</>
              )}
            </p>
          </div>
        </div>

        {/* 5. Qualitative Reflection Notes */}
        <div className="space-y-2">
          <label className="text-xs font-black uppercase text-slate-700 tracking-wider font-['JetBrains_Mono'] block">
            Test Reflection & Specific Skills to Review
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="e.g. Struggled with circle geometry on Question 19, punctuation was clean, need to practice Desmos table regressions..."
            rows={3}
            className="w-full p-3.5 rounded-xl border-2 border-slate-200 text-xs sm:text-sm text-slate-800 focus:border-sky-500 focus:outline-none"
          />
        </div>

        {/* 6. Action Buttons Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-slate-200">
          <div>
            {onNavigateToErrorLog && (
              <button
                type="button"
                onClick={onNavigateToErrorLog}
                className="px-4 py-2.5 rounded-xl text-xs font-bold text-rose-800 bg-rose-50 hover:bg-rose-100 border border-rose-300 transition flex items-center gap-1.5 min-h-[44px] cursor-pointer"
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
              className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs sm:text-sm font-black text-white bg-emerald-600 hover:bg-emerald-700 transition flex items-center justify-center gap-2 min-h-[44px] cursor-pointer shadow-xs hover:shadow-md"
            >
              <Save className="w-4 h-4" />
              <span>{saveToast ? '✓ Saved to Profile!' : 'Save Test Score & Gap'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 7. Score Progression History Across All Tests */}
      {Object.keys(allSavedRecords).length > 0 && (
        <div className="bg-slate-900 text-white rounded-3xl p-6 border-2 border-slate-700 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-black uppercase tracking-wider text-sky-400 font-['JetBrains_Mono']">
              Score Progression History
            </span>
            <span className="text-xs text-slate-400 font-['JetBrains_Mono']">
              {Object.keys(allSavedRecords).length} of 5 Mocks Logged
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {MOCK_TESTS_CONFIG.map((t) => {
              const rec = allSavedRecords[t.id];
              if (!rec) return null;
              const d = rec.totalScore - rec.targetTotal;

              return (
                <div key={t.id} className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 space-y-1 font-['JetBrains_Mono']">
                  <div className="text-[11px] text-slate-400 font-bold">{rec.testName.split('(')[0]}</div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-white">{rec.totalScore}</span>
                    <span className={`text-xs font-black px-1.5 py-0.5 rounded ${
                      d >= 0 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-400'
                    }`}>
                      {d >= 0 ? `+${d}` : d} vs Goal
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-400">
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
