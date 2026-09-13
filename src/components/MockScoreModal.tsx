'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
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
  ArrowRight
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

interface MockScoreModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTestId?: string;
  onOpenErrorLog?: () => void;
  onOpenPacing?: () => void;
}

export const MOCK_TEST_LIST = [
  { id: 'w2-diag-1', name: 'Bluebook Practice Test #1 (Early Diagnostic)', date: 'Sun Sep 20' },
  { id: 'p2-test-2', name: 'Bluebook Practice Test #2 (Phase 2 Timed)', date: 'Mon Oct 19' },
  { id: 'p2-test-3', name: 'Bluebook Practice Test #3 (Phase 2 Timed)', date: 'Mon Oct 26' },
  { id: 'p2-test-4', name: 'Bluebook Practice Test #4 (Final Full Rehearsal)', date: 'Sat Oct 31' },
  { id: 'w9-d1-2', name: 'Test-Day Timing Dry Run Simulation', date: 'Mon Nov 2' },
];

export const MockScoreModal: React.FC<MockScoreModalProps> = ({
  isOpen,
  onClose,
  defaultTestId = 'p2-test-2',
  onOpenErrorLog,
  onOpenPacing
}) => {
  const [selectedTestId, setSelectedTestId] = useState<string>(defaultTestId);
  const [targetTotal, setTargetTotal] = useState<number>(1500);
  const [targetMath, setTargetMath] = useState<number>(780);
  const [targetRW, setTargetRW] = useState<number>(720);
  const [mathScore, setMathScore] = useState<number>(740);
  const [rwScore, setRwScore] = useState<number>(690);
  const [contentMistakes, setContentMistakes] = useState<number>(2);
  const [carelessMistakes, setCarelessMistakes] = useState<number>(3);
  const [timeMistakes, setTimeMistakes] = useState<number>(1);
  const [notes, setNotes] = useState<string>('');
  const [savedSuccess, setSavedSuccess] = useState(false);

  // Load existing test records
  useEffect(() => {
    try {
      const savedStr = localStorage.getItem(STORAGE_KEY);
      if (savedStr) {
        const records: Record<string, MockTestScoreRecord> = JSON.parse(savedStr);
        if (records[selectedTestId]) {
          const rec = records[selectedTestId];
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
  }, [selectedTestId, isOpen]);

  useEffect(() => {
    if (defaultTestId) {
      setSelectedTestId(defaultTestId);
    }
  }, [defaultTestId]);

  if (!isOpen) return null;

  const totalScore = mathScore + rwScore;
  const scoreDelta = totalScore - targetTotal;
  const mathDelta = mathScore - targetMath;
  const rwDelta = rwScore - targetRW;

  const handleSave = () => {
    try {
      const savedStr = localStorage.getItem(STORAGE_KEY);
      const records: Record<string, MockTestScoreRecord> = savedStr ? JSON.parse(savedStr) : {};
      const activeMock = MOCK_TEST_LIST.find((m) => m.id === selectedTestId) || MOCK_TEST_LIST[0];

      records[selectedTestId] = {
        testId: selectedTestId,
        testName: activeMock.name,
        date: activeMock.date,
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
      };

      localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
      setSavedSuccess(true);
      setTimeout(() => setSavedSuccess(false), 2500);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white rounded-3xl border-2 border-slate-200 shadow-2xl w-full max-w-3xl overflow-hidden my-auto"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-[#06243f] via-[#0b3b64] to-[#026aa2] text-white p-5 sm:p-6 flex items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-sky-400/25 text-sky-200 border border-sky-300/40 font-['JetBrains_Mono']">
                  Phase 2 Score Architecture
                </span>
                <span className="text-xs text-amber-300 font-bold font-['JetBrains_Mono']">
                  Target: {targetTotal}+
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold font-luxury tracking-tight flex items-center gap-2">
                <Trophy className="w-6 h-6 text-amber-400" />
                <span>Mock Test Score Target & Gap Calculator</span>
              </h2>
              <p className="text-xs text-sky-100/90 leading-relaxed max-w-xl">
                Enter your Bluebook score report. Instantly dissect your point loss into Content, Careless Traps, or Time Pressure to generate targeted Phase 2 actions.
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition min-h-[40px] min-w-[40px] flex items-center justify-center cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Content */}
          <div className="p-5 sm:p-6 space-y-6 max-h-[75vh] overflow-y-auto">
            {/* 1. Test Selector */}
            <div className="space-y-2">
              <label className="text-xs font-black uppercase text-slate-600 tracking-wider font-['JetBrains_Mono'] block">
                Select Practice Test
              </label>
              <select
                value={selectedTestId}
                onChange={(e) => setSelectedTestId(e.target.value)}
                className="w-full p-3 rounded-xl border-2 border-slate-200 font-bold text-slate-800 text-sm focus:border-sky-500 focus:outline-none bg-slate-50 cursor-pointer"
              >
                {MOCK_TEST_LIST.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name} ({t.date})
                  </option>
                ))}
              </select>
            </div>

            {/* 2. Target vs Actual Score Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Target Scores */}
              <div className="bg-sky-50/70 p-4 rounded-2xl border-2 border-sky-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase text-sky-900 font-['JetBrains_Mono'] flex items-center gap-1.5">
                    <Target className="w-4 h-4 text-sky-600" />
                    Target Scores
                  </span>
                  <span className="text-xs font-bold text-sky-700 font-['JetBrains_Mono']">Goal</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-bold text-slate-600 block mb-1">Target Math (max 800)</label>
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
                      className="w-full p-2.5 rounded-xl border border-sky-300 font-bold text-slate-800 text-center text-base bg-white"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-slate-600 block mb-1">Target R&W (max 800)</label>
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
                      className="w-full p-2.5 rounded-xl border border-sky-300 font-bold text-slate-800 text-center text-base bg-white"
                    />
                  </div>
                </div>

                <div className="text-right text-xs font-black font-['JetBrains_Mono'] text-sky-900">
                  Total Target: <span className="text-sky-700 text-sm font-extrabold">{targetTotal}</span>
                </div>
              </div>

              {/* Actual Scores */}
              <div className="bg-indigo-50/70 p-4 rounded-2xl border-2 border-indigo-200 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase text-indigo-900 font-['JetBrains_Mono'] flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4 text-indigo-600" />
                    Achieved Score
                  </span>
                  <span className="text-xs font-bold text-indigo-700 font-['JetBrains_Mono']">Bluebook Report</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-bold text-slate-600 block mb-1">Actual Math Score</label>
                    <input
                      type="number"
                      min={200}
                      max={800}
                      step={10}
                      value={mathScore}
                      onChange={(e) => setMathScore(parseInt(e.target.value) || 0)}
                      className="w-full p-2.5 rounded-xl border border-indigo-300 font-bold text-slate-800 text-center text-base bg-white"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-bold text-slate-600 block mb-1">Actual R&W Score</label>
                    <input
                      type="number"
                      min={200}
                      max={800}
                      step={10}
                      value={rwScore}
                      onChange={(e) => setRwScore(parseInt(e.target.value) || 0)}
                      className="w-full p-2.5 rounded-xl border border-indigo-300 font-bold text-slate-800 text-center text-base bg-white"
                    />
                  </div>
                </div>

                <div className="text-right text-xs font-black font-['JetBrains_Mono'] text-indigo-900">
                  Total Achieved: <span className="text-indigo-700 text-sm font-extrabold">{totalScore}</span>
                </div>
              </div>
            </div>

            {/* 3. Real-Time Gap Analysis Pill */}
            <div className={`p-4 rounded-2xl border-2 flex flex-col sm:flex-row items-center justify-between gap-4 ${
              scoreDelta >= 0 
                ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                : 'bg-amber-50 border-amber-300 text-amber-950'
            }`}>
              <div className="flex items-center gap-3">
                {scoreDelta >= 0 ? (
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 shrink-0" />
                ) : (
                  <AlertTriangle className="w-8 h-8 text-amber-600 shrink-0" />
                )}
                <div>
                  <h4 className="text-base font-bold font-luxury">
                    {scoreDelta >= 0 ? 'Target Reached or Exceeded!' : `Gap: ${Math.abs(scoreDelta)} Points Below Target`}
                  </h4>
                  <p className="text-xs font-medium">
                    Math Gap: <strong className={mathDelta >= 0 ? 'text-emerald-700' : 'text-amber-700'}>{mathDelta > 0 ? `+${mathDelta}` : mathDelta}</strong> • 
                    R&W Gap: <strong className={rwDelta >= 0 ? 'text-emerald-700' : 'text-amber-700'}>{rwDelta > 0 ? `+${rwDelta}` : rwDelta}</strong>
                  </p>
                </div>
              </div>

              <div className="text-center sm:text-right">
                <span className="text-2xl sm:text-3xl font-black font-['JetBrains_Mono']">
                  {totalScore} <span className="text-sm font-normal text-slate-500">/ {targetTotal}</span>
                </span>
              </div>
            </div>

            {/* 4. Root-Cause Point Loss Autopsy */}
            <div className="bg-slate-50 p-4 sm:p-5 rounded-2xl border-2 border-slate-200 space-y-4">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-slate-700 font-['JetBrains_Mono']">
                  Mistake Autopsy: Where were questions lost?
                </span>
                <p className="text-xs text-slate-500 mt-0.5">
                  Categorize how many questions you missed by root cause to prioritize your Phase 2 drills:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {/* Content Gap */}
                <div className="bg-white p-3.5 rounded-xl border border-rose-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-rose-800">Content Gap</span>
                    <input
                      type="number"
                      min={0}
                      max={20}
                      value={contentMistakes}
                      onChange={(e) => setContentMistakes(parseInt(e.target.value) || 0)}
                      className="w-14 p-1 rounded-lg border border-rose-300 font-bold text-center text-sm"
                    />
                  </div>
                  <p className="text-[11px] text-slate-600 leading-tight">
                    Did not know the formula, circle rule, or grammar concept.
                  </p>
                </div>

                {/* Careless Mistakes */}
                <div className="bg-white p-3.5 rounded-xl border border-amber-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-800">Careless Traps</span>
                    <input
                      type="number"
                      min={0}
                      max={20}
                      value={carelessMistakes}
                      onChange={(e) => setCarelessMistakes(parseInt(e.target.value) || 0)}
                      className="w-14 p-1 rounded-lg border border-amber-300 font-bold text-center text-sm"
                    />
                  </div>
                  <p className="text-[11px] text-slate-600 leading-tight">
                    Misread question, solved for x instead of 2x+1, arithmetic slip.
                  </p>
                </div>

                {/* Time Pressure */}
                <div className="bg-white p-3.5 rounded-xl border border-sky-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-sky-800">Time Pressure</span>
                    <input
                      type="number"
                      min={0}
                      max={20}
                      value={timeMistakes}
                      onChange={(e) => setTimeMistakes(parseInt(e.target.value) || 0)}
                      className="w-14 p-1 rounded-lg border border-sky-300 font-bold text-center text-sm"
                    />
                  </div>
                  <p className="text-[11px] text-slate-600 leading-tight">
                    Ran out of time on Module 2, rushed last 4 questions blindly.
                  </p>
                </div>
              </div>

              {/* Action Prescription */}
              <div className="bg-emerald-50/80 p-3.5 rounded-xl border border-emerald-300 space-y-1.5">
                <span className="text-[11px] font-black uppercase font-['JetBrains_Mono'] text-emerald-800 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                  Prescribed Phase 2 Action
                </span>
                <p className="text-xs text-emerald-950 font-medium leading-relaxed">
                  {contentMistakes >= carelessMistakes && contentMistakes >= timeMistakes ? (
                    <>Focus heavily on <strong>Targeted Khan Drills & Formula Flashcards</strong> on your upcoming drill days to permanently eliminate concept holes.</>
                  ) : carelessMistakes >= timeMistakes ? (
                    <>Your content is strong! The biggest point thief is rushing. On every drill, <strong>underline what the prompt is asking for</strong> before bubbling.</>
                  ) : (
                    <>Pacing is your primary bottleneck. Adopt the <strong>Back-to-Front sequencing for R&W</strong> and the <strong>90-Second Flag Rule for Math</strong> immediately.</>
                  )}
                </p>
              </div>
            </div>

            {/* 5. Qualitative Reflection Notes */}
            <div className="space-y-1.5">
              <label className="text-xs font-black uppercase text-slate-600 tracking-wider font-['JetBrains_Mono'] block">
                Test Notes & Specific Areas to Drill
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="e.g. Missed standard deviation question, choked on circle geometry, need to drill Desmos regressions on Question 16..."
                rows={2}
                className="w-full p-3 rounded-xl border-2 border-slate-200 text-xs sm:text-sm text-slate-800 focus:border-sky-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Footer Actions */}
          <div className="bg-slate-100 p-4 sm:p-5 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              {onOpenErrorLog && (
                <button
                  type="button"
                  onClick={() => { onClose(); onOpenErrorLog(); }}
                  className="px-3 py-2 rounded-xl text-xs font-bold text-rose-800 bg-rose-100 hover:bg-rose-200 transition flex items-center gap-1.5 min-h-[38px] cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Log Specific Mistakes</span>
                </button>
              )}

              {onOpenPacing && (
                <button
                  type="button"
                  onClick={() => { onClose(); onOpenPacing(); }}
                  className="px-3 py-2 rounded-xl text-xs font-bold text-sky-800 bg-sky-100 hover:bg-sky-200 transition flex items-center gap-1.5 min-h-[38px] cursor-pointer"
                >
                  <Clock className="w-3.5 h-3.5" />
                  <span>Review Pacing</span>
                </button>
              )}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-200 transition min-h-[38px] cursor-pointer"
              >
                Close
              </button>

              <button
                type="button"
                onClick={handleSave}
                className="px-5 py-2 rounded-xl text-xs font-black text-white bg-emerald-600 hover:bg-emerald-700 transition flex items-center gap-1.5 min-h-[38px] cursor-pointer shadow-xs"
              >
                <Save className="w-4 h-4" />
                <span>{savedSuccess ? 'Saved to Profile!' : 'Save Score & Gap'}</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
