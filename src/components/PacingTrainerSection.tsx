'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Clock, 
  Zap, 
  AlertTriangle, 
  CheckCircle2, 
  Flag, 
  ArrowRight, 
  ShieldCheck, 
  Timer, 
  BookOpen, 
  Calculator,
  Compass,
  Sparkles,
  Award
} from 'lucide-react';

export const PacingTrainerSection: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<'math' | 'reading-writing'>('math');
  const [elapsedMinutes, setElapsedMinutes] = useState<number>(10);

  // Math: 35 minutes, 22 questions
  // R&W: 32 minutes, 27 questions
  const totalMinutes = selectedSection === 'math' ? 35 : 32;
  const totalQuestions = selectedSection === 'math' ? 22 : 27;

  // Calculate target question at current elapsed time
  const targetQuestion = selectedSection === 'math'
    ? elapsedMinutes <= 14 
      ? Math.min(12, Math.max(1, Math.round((elapsedMinutes / 14) * 12)))
      : Math.min(22, 12 + Math.round(((elapsedMinutes - 14) / 21) * 10))
    : elapsedMinutes <= 8
      ? Math.min(6, Math.max(1, Math.round((elapsedMinutes / 8) * 6))) // Grammar 18-23
      : elapsedMinutes <= 12
        ? Math.min(10, 6 + Math.round(((elapsedMinutes - 8) / 4) * 4)) // Transitions 24-27
        : Math.min(27, 10 + Math.round(((elapsedMinutes - 12) / 20) * 17)); // Reading & Notes

  const remainingMinutes = Math.max(0, totalMinutes - elapsedMinutes);
  const remainingQuestions = Math.max(0, totalQuestions - targetQuestion);

  return (
    <div className="space-y-6">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-[#0c233c] via-[#103254] to-[#081a2e] border-2 border-sky-400/40 rounded-3xl p-5 sm:p-7 shadow-grave text-white relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 relative z-10">
          <div className="space-y-1.5">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[11px] font-black uppercase px-3 py-1 rounded-full bg-sky-400/25 text-sky-200 border border-sky-300/40 font-['JetBrains_Mono']">
                Digital SAT Pacing Architecture
              </span>
              <span className="text-[11px] text-amber-300 font-extrabold font-['JetBrains_Mono'] flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                Score Protection Protocol
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-luxury tracking-tight flex items-center gap-2.5 text-white">
              <Clock className="w-7 h-7 text-sky-400" />
              <span>Digital SAT Pacing & Sequencing Trainer</span>
            </h2>
            <p className="text-xs sm:text-sm text-sky-100/90 max-w-2xl leading-relaxed">
              Running out of time on Module 2 is the #1 point killer. Master strategic question sequencing, bank 20+ minutes for hard questions, and execute the 90-second Flag & Bail rule.
            </p>
          </div>

          {/* Quick Stat Pill */}
          <div className="bg-sky-950/80 border border-sky-400/40 rounded-2xl p-4 min-w-[210px] space-y-1 shadow-2xs">
            <div className="text-[11px] font-black uppercase font-['JetBrains_Mono'] text-sky-300">
              Golden Rule of Pacing
            </div>
            <div className="text-sm font-bold text-white font-luxury">
              Bank Time Early, Never Freeze Late
            </div>
            <div className="text-[11px] text-amber-300 font-semibold font-['JetBrains_Mono']">
              Flag & Guess if stuck &gt; 90 seconds
            </div>
          </div>
        </div>
      </div>

      {/* Module Strategy Tabs */}
      <div className="flex items-center gap-2 bg-white/95 p-2 rounded-2xl border-2 border-sky-700/20 shadow-xs">
        <button
          onClick={() => { setSelectedSection('math'); setElapsedMinutes(10); }}
          className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-black transition min-h-[44px] cursor-pointer flex items-center justify-center gap-2 ${
            selectedSection === 'math'
              ? 'bg-sky-700 text-white shadow-xs'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          <Calculator className="w-4 h-4" />
          <span>Math Strategy (35 min • 22 questions)</span>
        </button>

        <button
          onClick={() => { setSelectedSection('reading-writing'); setElapsedMinutes(10); }}
          className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-black transition min-h-[44px] cursor-pointer flex items-center justify-center gap-2 ${
            selectedSection === 'reading-writing'
              ? 'bg-indigo-700 text-white shadow-xs'
              : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Reading & Writing Strategy (32 min • 27 questions)</span>
        </button>
      </div>

      {/* STRATEGY 1: MATH PACING BLUEPRINT */}
      {selectedSection === 'math' ? (
        <div className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Zone A: Early Blitz */}
            <div className="bg-emerald-950/20 border-2 border-emerald-500/50 rounded-2xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase px-2.5 py-0.5 rounded-md bg-emerald-100 text-emerald-800 font-['JetBrains_Mono']">
                  Zone A: Questions 1 to 12
                </span>
                <span className="text-xs font-bold text-emerald-700 font-['JetBrains_Mono']">
                  Budget: 12–14 Minutes
                </span>
              </div>
              <h3 className="text-base font-bold text-emerald-950 font-luxury">
                Desmos Blitz & Guaranteed Points
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Linear equations, direct graph intersections, easy quadratics, and percentages. Rely heavily on Desmos table regression (<code className="bg-emerald-100 px-1.5 py-0.5 rounded text-emerald-900 font-mono">y₁ ~ mx₁ + b</code>) to solve in under 45 seconds each.
              </p>
              <div className="text-[11px] font-bold text-emerald-800 bg-emerald-100/70 p-2.5 rounded-xl border border-emerald-300 font-['JetBrains_Mono']">
                🎯 Target pace: 60 seconds per question. Never double-check until the end!
              </div>
            </div>

            {/* Zone B: The Hard Boss Questions */}
            <div className="bg-amber-950/20 border-2 border-amber-500/50 rounded-2xl p-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase px-2.5 py-0.5 rounded-md bg-amber-100 text-amber-900 font-['JetBrains_Mono']">
                  Zone B: Questions 13 to 22
                </span>
                <span className="text-xs font-bold text-amber-800 font-['JetBrains_Mono']">
                  Budget: 21–23 Minutes
                </span>
              </div>
              <h3 className="text-base font-bold text-amber-950 font-luxury">
                Boss Level & SPR (Student Produced Response)
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Complex circle geometry, quadratic constants with discriminant, exponential word models, and grid-in questions. Having 20+ banked minutes means you can solve calmly without panic.
              </p>
              <div className="text-[11px] font-bold text-amber-900 bg-amber-100/70 p-2.5 rounded-xl border border-amber-300 font-['JetBrains_Mono']">
                ⚠️ If Question 18 takes &gt; 90s, mark a smart estimate, flag it, and KEEP MOVING.
              </div>
            </div>
          </div>

          {/* Math Emergency 90-Second Flag Rule */}
          <div className="bg-rose-50 border-2 border-rose-300 rounded-2xl p-4 sm:p-5 flex items-start gap-3.5">
            <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-rose-950 font-luxury">
                The Strict 90-Second "Flag & Bail" Rule
              </h4>
              <p className="text-xs sm:text-sm text-rose-900 leading-relaxed">
                On the Digital SAT, every single question within a module carries the exact same mathematical weight. Spending 4 minutes struggling on Question 19 steals time away from Questions 20, 21, and 22 which might be simple geometry you could solve in 30 seconds. <strong>Never sacrifice 3 solvable questions for 1 trap question.</strong>
              </p>
            </div>
          </div>
        </div>
      ) : (
        /* STRATEGY 2: READING & WRITING BACK-TO-FRONT BLUEPRINT */
        <div className="space-y-5">
          <div className="bg-indigo-50 border-2 border-indigo-200 rounded-2xl p-4 sm:p-5">
            <h3 className="text-base font-bold text-indigo-950 font-luxury flex items-center gap-2">
              <Award className="w-5 h-5 text-indigo-600" />
              <span>The "Back-to-Front" Sequencing Method (Protects 100+ Points)</span>
            </h3>
            <p className="mt-1.5 text-xs sm:text-sm text-indigo-900 leading-relaxed">
              Standard SAT order places dense 19th-century literature and scientific passages at Questions 1–15. When students reach Question 18, their mental energy is drained and they rush through easy grammar questions. <strong>Invert the sequence:</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {/* Stage 1 */}
            <div className="bg-white p-4 rounded-2xl border-2 border-emerald-300 shadow-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-['JetBrains_Mono']">
                  DO FIRST
                </span>
                <span className="text-xs font-bold text-emerald-700 font-['JetBrains_Mono']">Q18–23</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 font-luxury">Grammar & Conventions</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Semicolons, colons, apostrophes, subject-verb agreement. 100% rule-based. Solve each in 30 seconds while fresh.
              </p>
            </div>

            {/* Stage 2 */}
            <div className="bg-white p-4 rounded-2xl border-2 border-sky-300 shadow-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-sky-100 text-sky-800 font-['JetBrains_Mono']">
                  DO SECOND
                </span>
                <span className="text-xs font-bold text-sky-700 font-['JetBrains_Mono']">Q24–27</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 font-luxury">Transitions</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Categorize choices into Contrast vs Cause vs Addition. Eliminate twin answers. Solve each in 35–45 seconds.
              </p>
            </div>

            {/* Stage 3 */}
            <div className="bg-white p-4 rounded-2xl border-2 border-purple-300 shadow-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-purple-100 text-purple-800 font-['JetBrains_Mono']">
                  DO THIRD
                </span>
                <span className="text-xs font-bold text-purple-700 font-['JetBrains_Mono']">Last 3–4 Qs</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 font-luxury">Rhetorical Notes</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Read prompt goal first. Match the choice that fulfills it. Do not read the full bullet points. 30–40 seconds each.
              </p>
            </div>

            {/* Stage 4 */}
            <div className="bg-white p-4 rounded-2xl border-2 border-amber-300 shadow-xs space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-['JetBrains_Mono']">
                  DO LAST
                </span>
                <span className="text-xs font-bold text-amber-700 font-['JetBrains_Mono']">Q1–17</span>
              </div>
              <h4 className="text-sm font-bold text-slate-900 font-luxury">Reading & Paired Texts</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Now you have a comfortable 18+ minutes to dissect scientific graphs, historical texts, and poetry with zero time anxiety!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* INTERACTIVE PACING CLOCK SIMULATOR */}
      <div className="bg-white border-2 border-slate-200 rounded-3xl p-5 sm:p-6 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <span className="text-xs font-black uppercase font-['JetBrains_Mono'] text-sky-700 flex items-center gap-1.5">
              <Timer className="w-4 h-4 text-sky-600" />
              <span>Interactive Real-Time Pacing Simulator</span>
            </span>
            <h3 className="text-lg font-bold text-slate-900 font-luxury mt-0.5">
              Where should you be at any minute mark?
            </h3>
          </div>
          <span className="text-xs font-bold text-slate-500 font-['JetBrains_Mono'] bg-slate-100 px-3 py-1 rounded-xl">
            {selectedSection === 'math' ? 'Math: 35 Min Max' : 'R&W: 32 Min Max'}
          </span>
        </div>

        {/* Time Slider */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-bold font-['JetBrains_Mono'] text-slate-700">
            <span>Elapsed Time: <strong className="text-sky-700 text-base">{elapsedMinutes} minutes</strong></span>
            <span>Time Left: <strong className="text-slate-900 text-base">{remainingMinutes} min</strong></span>
          </div>

          <input
            type="range"
            min={0}
            max={totalMinutes}
            value={elapsedMinutes}
            onChange={(e) => setElapsedMinutes(parseInt(e.target.value))}
            className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
          />

          <div className="flex justify-between text-[10px] text-slate-400 font-['JetBrains_Mono']">
            <span>0m (Start)</span>
            <span>{Math.round(totalMinutes / 2)}m (Halfway)</span>
            <span>{totalMinutes}m (Pencils Down)</span>
          </div>
        </div>

        {/* Live Simulation Output Box */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="bg-sky-50 p-4 rounded-2xl border border-sky-200 space-y-1">
            <span className="text-[11px] font-black uppercase font-['JetBrains_Mono'] text-sky-800">
              Target Question
            </span>
            <div className="text-2xl font-bold font-luxury text-sky-950">
              Question #{targetQuestion}
            </div>
            <p className="text-[11px] text-sky-700 font-medium">
              You should be finishing this question now.
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1">
            <span className="text-[11px] font-black uppercase font-['JetBrains_Mono'] text-slate-600">
              Questions Remaining
            </span>
            <div className="text-2xl font-bold font-luxury text-slate-900">
              {remainingQuestions} Qs
            </div>
            <p className="text-[11px] text-slate-600 font-medium">
              {(remainingQuestions > 0 && remainingMinutes > 0)
                ? `~${Math.round((remainingMinutes * 60) / remainingQuestions)}s per question left`
                : 'Pencils down!'}
            </p>
          </div>

          <div className={`p-4 rounded-2xl border space-y-1 ${
            remainingMinutes <= 3 && remainingQuestions > 2
              ? 'bg-rose-50 border-rose-300 text-rose-950'
              : remainingMinutes >= 15
                ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                : 'bg-amber-50 border-amber-300 text-amber-950'
          }`}>
            <span className="text-[11px] font-black uppercase font-['JetBrains_Mono']">
              Pacing Status
            </span>
            <div className="text-base font-bold font-luxury">
              {remainingMinutes <= 3 && remainingQuestions > 2
                ? '🚨 In Danger Zone'
                : remainingMinutes >= 15
                  ? '✅ Optimal Pace'
                  : '⚡ Normal Focus'}
            </div>
            <p className="text-[11px] font-medium leading-tight">
              {remainingMinutes <= 3 && remainingQuestions > 2
                ? 'Fill every remaining bubble immediately! No penalty for guessing.'
                : remainingMinutes >= 15
                  ? 'Great rhythm. Keep working smoothly.'
                  : 'Maintain steady forward momentum.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
