'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Calculator,
  Search,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  AlertCircle,
  Copy,
  Check,
  ChevronDown,
  ChevronUp,
  ShieldAlert,
  Zap,
  ArrowRight,
  Code,
  Compass,
  Layers,
  Lightbulb,
  TrendingUp,
  PieChart,
  Maximize2,
  Box,
  Flame,
  CheckSquare
} from 'lucide-react';
import {
  MATH_GEOMETRY_TRIG_LESSONS,
  MATH_ALGEBRA_DATA_ADVANCED_UNITS,
  MATH_DIFFICULTY_SCALING_MATRIX,
  MATH_DESMOS_CHEATS,
  MathLesson,
  MathFormulaItem
} from '../data/mathCurriculumUpgrade';
import { StuckConceptRecord } from '../types';

interface MathInfoSectionProps {
  stuckConcepts?: StuckConceptRecord[];
  onLogStruggle?: (lessonTitle: string, conceptName?: string) => void;
  struggleCountByLesson?: Record<string, number>;
}

export const MathInfoSection: React.FC<MathInfoSectionProps> = ({
  stuckConcepts = [],
  onLogStruggle,
  struggleCountByLesson = {}
}) => {
  const [activeSectionView, setActiveSectionView] = useState<'all' | 'sec1-geom' | 'sec2-algebra' | 'sec3-difficulty' | 'sec4-desmos'>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  // Expanded state for lessons
  const [expandedLessons, setExpandedLessons] = useState<Record<string, boolean>>({
    'math-sec1-l1-3d-volume-scaling': true,
    'math-sec1-l2-congruence-similarity-angles': true,
    'math-sec1-l3-right-triangles-trig': true,
    'math-sec1-l4-circle-theorems': true,
    'math-sec1-l5-circle-equations-completing-square': true,
    'math-sec1-l6-radians-unit-circle': true,
    'math-u1-forms-of-lines': true,
    'math-u1-linear-systems-solutions': true,
    'math-u1-linear-inequalities': true,
    'math-u2-percent-change': true,
    'math-u2-statistics-outliers': true,
    'math-u3-three-quadratic-forms': true,
    'math-u3-quadratic-formula-discriminant': true,
    'math-u3-exponent-rules': true,
    'math-u3-exponential-growth-decay': true
  });

  const toggleLesson = (id: string) => {
    setExpandedLessons((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  // Filter Section 1 lessons based on search query
  const filteredSec1Lessons = useMemo(() => {
    if (!searchQuery.trim()) return MATH_GEOMETRY_TRIG_LESSONS;
    const q = searchQuery.toLowerCase();
    return MATH_GEOMETRY_TRIG_LESSONS.filter((l) => {
      const matchTitle = l.lessonTitle.toLowerCase().includes(q) || l.subtitle.toLowerCase().includes(q);
      const matchFormulas = l.formulas.some((f) => f.label.toLowerCase().includes(q) || f.formula.toLowerCase().includes(q) || f.explanation.toLowerCase().includes(q));
      const matchRules = l.theoremsAndRules?.some((r) => r.toLowerCase().includes(q));
      const matchTraps = l.trapsAndWarnings?.some((t) => t.toLowerCase().includes(q));
      const matchConcepts = l.conceptsForLogging.some((c) => c.toLowerCase().includes(q));
      return matchTitle || matchFormulas || matchRules || matchTraps || matchConcepts;
    });
  }, [searchQuery]);

  // Filter Section 2 units & lessons based on search query
  const filteredSec2Units = useMemo(() => {
    return MATH_ALGEBRA_DATA_ADVANCED_UNITS.map((unit) => {
      if (!searchQuery.trim()) return unit;
      const q = searchQuery.toLowerCase();
      const matchingLessons = unit.lessons.filter((l) => {
        const matchTitle = l.lessonTitle.toLowerCase().includes(q) || l.subtitle.toLowerCase().includes(q);
        const matchFormulas = l.formulas.some((f) => f.label.toLowerCase().includes(q) || f.formula.toLowerCase().includes(q) || f.explanation.toLowerCase().includes(q));
        const matchRules = l.theoremsAndRules?.some((r) => r.toLowerCase().includes(q));
        const matchTraps = l.trapsAndWarnings?.some((t) => t.toLowerCase().includes(q));
        const matchConcepts = l.conceptsForLogging.some((c) => c.toLowerCase().includes(q));
        return matchTitle || matchFormulas || matchRules || matchTraps || matchConcepts;
      });
      if (matchingLessons.length === 0) return null;
      return {
        ...unit,
        lessons: matchingLessons
      };
    }).filter(Boolean) as typeof MATH_ALGEBRA_DATA_ADVANCED_UNITS;
  }, [searchQuery]);

  // Filter Desmos cheats based on search query
  const filteredDesmosCheats = useMemo(() => {
    if (!searchQuery.trim()) return MATH_DESMOS_CHEATS;
    const q = searchQuery.toLowerCase();
    return MATH_DESMOS_CHEATS.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.tagline.toLowerCase().includes(q) ||
        c.scenario.toLowerCase().includes(q) ||
        c.proTip.toLowerCase().includes(q) ||
        c.steps.some((s) => s.action.toLowerCase().includes(q) || (s.command && s.command.toLowerCase().includes(q)))
    );
  }, [searchQuery]);

  // Helper to render mathematical formula boxes cleanly
  const renderFormulaCard = (f: MathFormulaItem) => (
    <div
      key={f.label}
      className="p-3.5 rounded-2xl bg-[#0f1f0e]/95 border border-emerald-500/30 space-y-2 shadow-xs hover:border-emerald-400 transition"
    >
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-black uppercase text-emerald-300 font-['JetBrains_Mono']">
          {f.label}
        </span>
        <button
          type="button"
          onClick={() => handleCopy(f.formula)}
          title="Click to copy formula"
          className="p-1 rounded-lg bg-white/10 hover:bg-white/20 text-emerald-300 hover:text-white transition cursor-pointer flex items-center gap-1 text-[10px] font-mono"
        >
          {copiedText === f.formula ? (
            <>
              <Check className="w-3 h-3 text-emerald-400" />
              <span className="text-emerald-400 font-bold">Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3 text-emerald-300" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>

      {/* Styled Mathematical Formula Container */}
      <div className="p-2.5 rounded-xl bg-black/50 border border-emerald-400/20 font-['JetBrains_Mono'] text-sm sm:text-base text-amber-200 font-bold tracking-wide overflow-x-auto shadow-inner flex items-center justify-between">
        <code>{f.formula}</code>
      </div>

      <p className="text-[11px] text-emerald-100/80 leading-relaxed font-medium">
        {f.explanation}
      </p>
    </div>
  );

  return (
    <div className="space-y-7">
      {/* Top Banner & Overview */}
      <div className="p-5 sm:p-6 bg-gradient-to-br from-[#10240e] via-[#163313] to-[#20471b] rounded-3xl border-2 border-[#a6c4a1] shadow-grave text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-3">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-black uppercase px-3 py-1 rounded-full bg-emerald-700/80 text-emerald-100 border border-emerald-500/40 font-['JetBrains_Mono'] flex items-center gap-1.5 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
              <span>SAT Math Comprehensive Master Blueprint</span>
            </span>
            <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 font-['JetBrains_Mono']">
              SECTIONS 1 – 4 FULL BLUEPRINT
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-extrabold text-white font-luxury flex items-center gap-2.5">
            <Calculator className="w-6 h-6 text-emerald-300" />
            <span>Geometry &amp; Trig, Algebra &amp; Advanced Math, Difficulty Matrix &amp; Desmos Cheats</span>
          </h3>

          <p className="text-xs sm:text-sm text-emerald-100/90 max-w-3xl leading-relaxed font-medium">
            Rigorous mathematical definitions, the 3D cubic scaling law, completing the square for circles, complementary angle identities, linear systems condition ratios, discriminant diagnostics, and high-speed Desmos bypass techniques.
          </p>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
            <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
              <div className="text-[10px] uppercase font-bold text-emerald-300 font-['JetBrains_Mono']">Section 1: Geometry</div>
              <div className="text-sm font-black text-white">6 High-Yield Topics</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
              <div className="text-[10px] uppercase font-bold text-emerald-300 font-['JetBrains_Mono']">Section 2: Algebra</div>
              <div className="text-sm font-black text-white">3 Units &bull; 9 Topics</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
              <div className="text-[10px] uppercase font-bold text-amber-300 font-['JetBrains_Mono']">Section 3: Difficulty</div>
              <div className="text-sm font-black text-amber-200">Escalation Graph</div>
            </div>
            <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
              <div className="text-[10px] uppercase font-bold text-cyan-300 font-['JetBrains_Mono']">Section 4: Desmos</div>
              <div className="text-sm font-black text-cyan-200">4 Speed Cheats</div>
            </div>
          </div>
        </div>
      </div>

      {/* 1. SEPARATE PROMINENT SEARCH BAR (PLACED FULLY ABOVE FILTER PILLS) */}
      <div className="relative w-full">
        <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-emerald-800 pointer-events-none" />
        <input
          type="text"
          placeholder="Search SAT Math formulas, theorems, rules, Desmos shortcuts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-11 pr-12 py-3 bg-white/95 border-2 border-[#a6c4a1] rounded-2xl text-xs sm:text-sm text-[#122810] placeholder:text-[#3d5a39]/70 font-medium focus:ring-2 focus:ring-emerald-600 focus:bg-white focus:outline-none transition shadow-sm font-['JetBrains_Mono']"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500 hover:text-black font-mono cursor-pointer bg-slate-100 px-2 py-0.5 rounded-md"
          >
            Clear
          </button>
        )}
      </div>

      {/* 2. DEDICATED FULL-WIDTH NAVIGATION PILLS (FULL SPACE FOR NAMES - ZERO CROPPING) */}
      <div className="flex flex-wrap items-center gap-2 p-3 sm:p-4 bg-matcha-sub/90 backdrop-blur-md rounded-2xl border-2 border-[#a6c4a1] shadow-grave-card w-full">
        <button
          type="button"
          onClick={() => setActiveSectionView('all')}
          className={`px-3.5 py-2 rounded-xl text-xs font-black transition cursor-pointer font-['JetBrains_Mono'] ${
            activeSectionView === 'all'
              ? 'bg-[#1a3717] text-white shadow-xs'
              : 'bg-white/90 text-[#122810] hover:bg-white border border-[#a6c4a1]'
          }`}
        >
          All Math Blueprint
        </button>
        <button
          type="button"
          onClick={() => setActiveSectionView('sec1-geom')}
          className={`px-3.5 py-2 rounded-xl text-xs font-black transition cursor-pointer font-['JetBrains_Mono'] ${
            activeSectionView === 'sec1-geom'
              ? 'bg-[#1a3717] text-white shadow-xs'
              : 'bg-white/90 text-[#122810] hover:bg-white border border-[#a6c4a1]'
          }`}
        >
          📐 Sec 1: Geometry &amp; Trig
        </button>
        <button
          type="button"
          onClick={() => setActiveSectionView('sec2-algebra')}
          className={`px-3.5 py-2 rounded-xl text-xs font-black transition cursor-pointer font-['JetBrains_Mono'] ${
            activeSectionView === 'sec2-algebra'
              ? 'bg-[#1a3717] text-white shadow-xs'
              : 'bg-white/90 text-[#122810] hover:bg-white border border-[#a6c4a1]'
          }`}
        >
          ⚡ Sec 2: Algebra &amp; Data
        </button>
        <button
          type="button"
          onClick={() => setActiveSectionView('sec3-difficulty')}
          className={`px-3.5 py-2 rounded-xl text-xs font-black transition cursor-pointer font-['JetBrains_Mono'] ${
            activeSectionView === 'sec3-difficulty'
              ? 'bg-amber-800 text-white shadow-xs'
              : 'bg-amber-50 text-amber-950 hover:bg-amber-100 border border-amber-300'
          }`}
        >
          📊 Sec 3: Difficulty Graph (Matrix)
        </button>
        <button
          type="button"
          onClick={() => setActiveSectionView('sec4-desmos')}
          className={`px-3.5 py-2 rounded-xl text-xs font-black transition cursor-pointer font-['JetBrains_Mono'] ${
            activeSectionView === 'sec4-desmos'
              ? 'bg-blue-800 text-white shadow-xs'
              : 'bg-blue-50 text-blue-950 hover:bg-blue-100 border border-blue-300'
          }`}
        >
          🚀 Sec 4: Desmos Cheats
        </button>
      </div>

      {/* ========================================================================= */}
      {/* SECTION 3: HOW DIFFICULTIES ESCALATE (THE DIFFICULTY GRAPH & MATRIX)      */}
      {/* ========================================================================= */}
      {(activeSectionView === 'all' || activeSectionView === 'sec3-difficulty') && (
        <div className="p-5 sm:p-6 rounded-3xl bg-white border-2 border-amber-300 shadow-grave space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-amber-200 pb-3">
            <div className="flex items-center gap-2.5">
              <span className="p-2.5 rounded-2xl bg-amber-600 text-white font-black shadow-xs">
                <TrendingUp className="w-5 h-5" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-amber-800 font-['JetBrains_Mono'] block">
                  Adaptive SAT Digital Engine
                </span>
                <h4 className="text-lg sm:text-xl font-black text-[#122810] font-luxury">
                  Section 3: How Difficulties Escalate (Foundations vs. Medium vs. Hard)
                </h4>
              </div>
            </div>
            <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-amber-100 text-amber-950 border border-amber-300 font-['JetBrains_Mono']">
              Module 1 Standard ➔ Hard Module 2 Filter
            </span>
          </div>

          {/* Visual Progression Tier Bar (Visual Graph) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {/* Foundations */}
            <div className="p-4 rounded-2xl bg-emerald-50/80 border-2 border-emerald-300 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-emerald-800 font-['JetBrains_Mono']">
                  Tier 1: Foundations
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-200 text-emerald-900 font-mono font-bold">1-Step</span>
              </div>
              <h5 className="text-sm font-bold text-[#122810]">Direct Formula Execution</h5>
              <p className="text-xs text-[#274624] font-medium leading-relaxed">
                Diagram explicitly provided. Uses clean whole integers with immediate formula plug-ins (e.g., Given radius <em>r = 4</em>, find Area = <em>πr² = 16π</em>).
              </p>
            </div>

            {/* Medium */}
            <div className="p-4 rounded-2xl bg-amber-50/80 border-2 border-amber-300 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-amber-800 font-['JetBrains_Mono']">
                  Tier 2: Medium
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-200 text-amber-900 font-mono font-bold">2-Step Backwards</span>
              </div>
              <h5 className="text-sm font-bold text-[#122810]">Fractions &amp; Inversion</h5>
              <p className="text-xs text-[#274624] font-medium leading-relaxed">
                Problems involving fractions, decimals, or backwards solving (e.g., Given Volume <em>V = 100π</em> and height <em>h = 4</em>, solve backwards for radius <em>r = 5</em>).
              </p>
            </div>

            {/* Hard / Advanced */}
            <div className="p-4 rounded-2xl bg-rose-50/80 border-2 border-rose-300 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase tracking-wider text-rose-800 font-['JetBrains_Mono']">
                  Tier 3: Hard (750+)
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-200 text-rose-900 font-mono font-bold">Multi-Topic Synthesis</span>
              </div>
              <h5 className="text-sm font-bold text-[#122810]">Unknown Constants &amp; No Figures</h5>
              <p className="text-xs text-[#274624] font-medium leading-relaxed">
                Combines 2–3 topics. Replaces numbers with unknown constants (<em>a, b, c, k</em>). No figure provided: requires drawing from scratch or Desmos bypass.
              </p>
            </div>
          </div>

          {/* Scaling Table */}
          <div className="overflow-x-auto rounded-2xl border-2 border-[#a6c4a1] shadow-xs">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="bg-[#122810] text-white font-['JetBrains_Mono']">
                  <th className="p-3.5 font-black uppercase text-[11px] border-r border-emerald-900/60 min-w-[160px]">Math Domain</th>
                  <th className="p-3.5 font-bold text-emerald-300 min-w-[200px] border-r border-emerald-900/60">Foundations Level</th>
                  <th className="p-3.5 font-bold text-amber-300 min-w-[220px] border-r border-emerald-900/60">Medium Level</th>
                  <th className="p-3.5 font-bold text-rose-300 min-w-[240px]">Hard / Advanced Level (750+)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#a6c4a1]/50 bg-white">
                {MATH_DIFFICULTY_SCALING_MATRIX.map((row, idx) => (
                  <tr key={row.id} className={idx % 2 === 0 ? 'bg-white' : 'bg-[#f7fbf6]'}>
                    <td className="p-3.5 font-black text-[#122810] font-luxury border-r border-[#a6c4a1]/40">
                      <div>{row.domain}</div>
                      <div className="text-[10px] text-emerald-700 font-sans mt-0.5 font-bold">
                        💡 {row.keyTakeaway}
                      </div>
                    </td>
                    <td className="p-3.5 text-[#274624] font-medium border-r border-[#a6c4a1]/40 leading-relaxed">
                      {row.foundationsLevel}
                    </td>
                    <td className="p-3.5 text-[#1a3717] font-medium border-r border-[#a6c4a1]/40 leading-relaxed">
                      {row.mediumLevel}
                    </td>
                    <td className="p-3.5 text-[#122810] font-bold leading-relaxed bg-rose-50/40">
                      {row.advancedLevel}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SECTION 4: THE DESMOS SPEED CHEATS                                        */}
      {/* ========================================================================= */}
      {(activeSectionView === 'all' || activeSectionView === 'sec4-desmos') && (
        <div className="p-5 sm:p-6 rounded-3xl bg-white border-2 border-blue-300 shadow-grave space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-blue-200 pb-3">
            <div className="flex items-center gap-2.5">
              <span className="p-2.5 rounded-2xl bg-blue-600 text-white font-black shadow-xs">
                <Zap className="w-5 h-5 text-amber-300 fill-amber-300" />
              </span>
              <div>
                <span className="text-[10px] font-black uppercase tracking-wider text-blue-800 font-['JetBrains_Mono'] block">
                  Built-In Digital SAT Calculator
                </span>
                <h4 className="text-lg sm:text-xl font-black text-[#122810] font-luxury">
                  Section 4: The Desmos Speed Cheats (Bypass Long Algebra)
                </h4>
              </div>
            </div>
            <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-300 font-['JetBrains_Mono']">
              4 Instant Graphing Hacks
            </span>
          </div>

          {/* 4 Desmos Cheat Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredDesmosCheats.map((cheat) => (
              <div
                key={cheat.id}
                className="p-4 rounded-2xl bg-[#f8fbff] border-2 border-blue-200 shadow-xs flex flex-col justify-between space-y-3 hover:border-blue-400 transition"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-md bg-blue-100 text-blue-800 font-['JetBrains_Mono'] border border-blue-300">
                      {cheat.badge}
                    </span>
                    <span className="text-[11px] text-blue-900 font-semibold font-['JetBrains_Mono']">
                      ⚡ Desmos Shortcut
                    </span>
                  </div>

                  <h5 className="text-base font-black text-[#10243e] font-luxury">
                    {cheat.title}
                  </h5>

                  <p className="text-xs text-[#1e3a5f] font-medium leading-relaxed">
                    {cheat.tagline}
                  </p>

                  <div className="p-2.5 rounded-xl bg-blue-100/50 border border-blue-200 text-xs text-[#0d233a] font-medium">
                    <span className="font-bold text-blue-900 block mb-0.5">Scenario / Trigger:</span>
                    {cheat.scenario}
                  </div>

                  {/* Step by Step Commands */}
                  <div className="space-y-2 pt-1">
                    {cheat.steps.map((st) => (
                      <div key={st.stepNumber} className="p-2.5 rounded-xl bg-white border border-blue-200 space-y-1">
                        <div className="text-[11px] font-bold text-[#122810]">
                          <span className="text-blue-600 font-mono mr-1">Step {st.stepNumber}:</span>
                          {st.action}
                        </div>
                        {st.command && (
                          <div className="flex items-center justify-between gap-2 p-2 rounded-lg bg-black/85 text-amber-200 font-mono text-xs">
                            <code>{st.command}</code>
                            <button
                              type="button"
                              onClick={() => handleCopy(st.command!)}
                              className="text-[10px] text-emerald-400 hover:text-white flex items-center gap-1 cursor-pointer font-sans shrink-0"
                            >
                              {copiedText === st.command ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                              <span>{copiedText === st.command ? 'Copied' : 'Copy'}</span>
                            </button>
                          </div>
                        )}
                        {st.note && (
                          <div className="text-[11px] text-[#2c4e6e] whitespace-pre-line leading-relaxed font-sans">
                            {st.note}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-300 text-[11px] text-emerald-950 font-medium">
                  <span className="font-bold text-emerald-900 block">💡 Pro Tip:</span>
                  {cheat.proTip}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SECTION 1: GEOMETRY & TRIGONOMETRY (THE TOUGH CHAPTER)                    */}
      {/* ========================================================================= */}
      {(activeSectionView === 'all' || activeSectionView === 'sec1-geom') && (
        <div className="space-y-4">
          {/* Section 1 Header */}
          <div className="p-4 sm:p-5 bg-gradient-to-r from-[#173815] to-[#255221] text-white rounded-2xl border-2 border-[#a6c4a1] shadow-grave flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-800 text-emerald-200 border border-emerald-600 font-['JetBrains_Mono']">
                  Section 1
                </span>
                <h4 className="text-lg sm:text-xl font-bold font-luxury">
                  Geometry &amp; Trigonometry (The Tough Chapter)
                </h4>
              </div>
              <p className="text-xs text-emerald-100/90 mt-1 font-medium">
                3D solid volumes, the dimensional scaling law, similar triangles, right triangle trigonometry, circle theorems, completing the square, and unit circle coordinates.
              </p>
            </div>
            <span className="text-[11px] font-bold px-3 py-1 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 font-['JetBrains_Mono'] shrink-0">
              6 Core Lessons
            </span>
          </div>

          {/* Section 1 Lessons Accordion Stream */}
          <div className="space-y-4">
            {filteredSec1Lessons.map((lesson) => {
              const isExpanded = expandedLessons[lesson.id] ?? true;
              const struggles = struggleCountByLesson[lesson.lessonTitle.toLowerCase()] || 0;

              return (
                <div
                  key={lesson.id}
                  className="rounded-3xl border-2 border-[#a6c4a1] bg-white shadow-grave-card overflow-hidden transition-all duration-200"
                >
                  {/* Lesson Header Accordion Toggle */}
                  <div
                    onClick={() => toggleLesson(lesson.id)}
                    className="p-4 sm:p-5 bg-[#f8faf7] hover:bg-[#f0f6ef] cursor-pointer transition flex items-center justify-between gap-3 border-b border-[#a6c4a1]/50 select-none"
                  >
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="p-2 rounded-xl bg-[#1a3717] text-white font-mono text-xs font-black shadow-xs">
                        1.{lesson.lessonNumber}
                      </span>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h5 className="text-base sm:text-lg font-black text-[#122810] font-luxury">
                            {lesson.lessonTitle}
                          </h5>
                          <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 font-['JetBrains_Mono']">
                            {lesson.badge}
                          </span>
                          {struggles > 0 && (
                            <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 border border-rose-300 font-['JetBrains_Mono'] flex items-center gap-1">
                              <Flame className="w-3 h-3 text-rose-600 fill-rose-600" />
                              {struggles} logged struggle{struggles !== 1 ? 's' : ''}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-[#2a5025] font-medium mt-0.5">
                          {lesson.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {onLogStruggle && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onLogStruggle(lesson.lessonTitle);
                          }}
                          className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-amber-500/20 text-amber-900 border border-amber-400 hover:bg-amber-500 hover:text-white transition cursor-pointer font-['JetBrains_Mono'] hidden sm:inline-block"
                        >
                          + Log Struggle
                        </button>
                      )}
                      <button
                        type="button"
                        className="p-1.5 rounded-xl bg-white border border-[#a6c4a1] text-[#122810] hover:bg-[#e4ede1]"
                      >
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Lesson Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="p-4 sm:p-6 space-y-5"
                      >
                        {/* Formulas Grid */}
                        <div className="space-y-2">
                          <span className="text-xs font-black uppercase tracking-wider text-[#122810] font-['JetBrains_Mono'] block">
                            Core Formulas &amp; Definitions
                          </span>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            {lesson.formulas.map(renderFormulaCard)}
                          </div>
                        </div>

                        {/* Special Visual Diagrams for Specific Lessons */}
                        {lesson.id === 'math-sec1-l2-congruence-similarity-angles' && (
                          <div className="p-4 rounded-2xl bg-[#0f1f0e] border border-emerald-500/30 text-white space-y-2">
                            <span className="text-xs font-black uppercase text-emerald-300 font-['JetBrains_Mono'] block">
                              Similar Triangles Visual Model (ΔABC ~ ΔDEF)
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono p-3 bg-black/40 rounded-xl border border-white/10">
                              <pre className="text-emerald-200 leading-tight">
{`       A                                  D
      / \\                                / \\
     /   \\                              /   \\
    /     \\                            /     \\
   B───────C                          E───────F`}
                              </pre>
                              <div className="space-y-1 text-xs text-slate-100 font-sans flex flex-col justify-center">
                                <div className="text-emerald-300 font-bold">1. Corresponding Angles Equal:</div>
                                <div>∠A = ∠D, ∠B = ∠E, ∠C = ∠F</div>
                                <div className="text-emerald-300 font-bold mt-1">2. Corresponding Sides Proportional:</div>
                                <div className="text-amber-200 font-mono">AB / DE = BC / EF = AC / DF</div>
                              </div>
                            </div>
                          </div>
                        )}

                        {lesson.id === 'math-sec1-l3-right-triangles-trig' && (
                          <div className="p-4 rounded-2xl bg-[#0f1f0e] border border-emerald-500/30 text-white space-y-2">
                            <span className="text-xs font-black uppercase text-emerald-300 font-['JetBrains_Mono'] block">
                              Special Right Triangles Blueprint
                            </span>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {/* 30-60-90 */}
                              <div className="p-3 rounded-xl bg-black/40 border border-white/10 space-y-2">
                                <span className="text-xs font-black text-amber-300 font-luxury">30°- 60°- 90° Triangle</span>
                                <pre className="text-emerald-200 text-xs font-mono leading-tight">
{`             /|
            / |
     2x    /  |  x   (opposite 30°)
          /   |
         /____|
          x√3 (opposite 60°)`}
                                </pre>
                                <div className="text-xs text-slate-200">
                                  Ratio: <code className="text-amber-200 font-mono font-bold">x : x√3 : 2x</code>
                                </div>
                              </div>

                              {/* 45-45-90 */}
                              <div className="p-3 rounded-xl bg-black/40 border border-white/10 space-y-2">
                                <span className="text-xs font-black text-amber-300 font-luxury">45°- 45°- 90° Triangle</span>
                                <pre className="text-emerald-200 text-xs font-mono leading-tight">
{`             /|
            / |
    x√2    /  |  x   (leg)
          /   |
         /____|
           x  (leg)`}
                                </pre>
                                <div className="text-xs text-slate-200">
                                  Ratio: <code className="text-amber-200 font-mono font-bold">x : x : x√2</code>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Step-by-Step Methods (e.g. Completing the Square) */}
                        {lesson.methods && lesson.methods.length > 0 && (
                          <div className="space-y-2">
                            <span className="text-xs font-black uppercase tracking-wider text-[#122810] font-['JetBrains_Mono'] block">
                              Step-by-Step Methodologies
                            </span>
                            {lesson.methods.map((method) => (
                              <div key={method.title} className="p-4 rounded-2xl bg-[#f0f6ef] border-2 border-[#a6c4a1] space-y-2">
                                <h6 className="text-xs font-black uppercase text-[#122810] font-luxury">
                                  {method.title}
                                </h6>
                                <div className="space-y-1.5">
                                  {method.steps.map((st, i) => (
                                    <div key={i} className="text-xs text-[#1e3c1a] font-medium leading-relaxed flex items-start gap-2">
                                      <span className="font-mono text-emerald-700 font-bold shrink-0">{i + 1}.</span>
                                      <span>{st}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Worked Examples */}
                        {lesson.workedExamples && lesson.workedExamples.length > 0 && (
                          <div className="space-y-2">
                            <span className="text-xs font-black uppercase tracking-wider text-[#122810] font-['JetBrains_Mono'] block">
                              Worked Examples &amp; Proofs
                            </span>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {lesson.workedExamples.map((ex, i) => (
                                <div key={i} className="p-3.5 rounded-2xl bg-amber-50/80 border border-amber-300 space-y-1.5">
                                  <div className="text-xs font-bold text-amber-950 font-luxury">
                                    {ex.problem}
                                  </div>
                                  <div className="p-2.5 rounded-xl bg-white border border-amber-200 text-xs font-mono text-emerald-900 leading-relaxed font-bold">
                                    {ex.solution}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Theorems, Rules & Traps */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                          {/* Theorems & Rules */}
                          {lesson.theoremsAndRules && (
                            <div className="p-3.5 rounded-2xl bg-[#f6faf5] border border-[#a6c4a1] space-y-1.5">
                              <span className="text-xs font-black uppercase text-emerald-800 font-['JetBrains_Mono'] flex items-center gap-1.5">
                                <CheckSquare className="w-3.5 h-3.5 text-emerald-600" />
                                <span>Theorems &amp; Golden Rules</span>
                              </span>
                              <ul className="text-xs text-[#20401b] space-y-1 leading-relaxed font-medium">
                                {lesson.theoremsAndRules.map((rule, idx) => (
                                  <li key={idx} className="flex items-start gap-1.5">
                                    <span className="text-emerald-600 font-bold">&bull;</span>
                                    <span>{rule}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Traps & Warnings */}
                          {lesson.trapsAndWarnings && (
                            <div className="p-3.5 rounded-2xl bg-rose-50/70 border border-rose-300 space-y-1.5">
                              <span className="text-xs font-black uppercase text-rose-800 font-['JetBrains_Mono'] flex items-center gap-1.5">
                                <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                                <span>SAT Traps &amp; Exam Pitfalls</span>
                              </span>
                              <ul className="text-xs text-rose-950 space-y-1 leading-relaxed font-medium">
                                {lesson.trapsAndWarnings.map((trap, idx) => (
                                  <li key={idx} className="flex items-start gap-1.5">
                                    <span className="text-rose-600 font-bold">&bull;</span>
                                    <span>{trap}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* SECTION 2: ALGEBRA, DATA, AND ADVANCED MATH (UNITS 1, 2, 3)               */}
      {/* ========================================================================= */}
      {(activeSectionView === 'all' || activeSectionView === 'sec2-algebra') && (
        <div className="space-y-6">
          {/* Section 2 Header */}
          <div className="p-4 sm:p-5 bg-gradient-to-r from-[#112d18] to-[#1c4727] text-white rounded-2xl border-2 border-[#a6c4a1] shadow-grave flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-800 text-emerald-200 border border-emerald-600 font-['JetBrains_Mono']">
                  Section 2
                </span>
                <h4 className="text-lg sm:text-xl font-bold font-luxury">
                  Algebra, Data &amp; Advanced Math (Units 1, 2, 3)
                </h4>
              </div>
              <p className="text-xs text-emerald-100/90 mt-1 font-medium">
                Linear equations, systems ratio criteria, inequalities, percent multipliers, outlier sensitivity, quadratic forms, the discriminant, exponent laws, and exponential models.
              </p>
            </div>
            <span className="text-[11px] font-bold px-3 py-1 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 font-['JetBrains_Mono'] shrink-0">
              3 Units &bull; 9 Topics
            </span>
          </div>

          {/* Units Stream */}
          {filteredSec2Units.map((unit) => (
            <div key={unit.unitId} className="space-y-3">
              {/* Unit Sub-Banner */}
              <div className="p-3.5 sm:p-4 bg-matcha-sub-dark/70 rounded-2xl border-2 border-[#a6c4a1] flex items-center justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-emerald-800 text-white font-['JetBrains_Mono']">
                      Unit {unit.unitNumber}
                    </span>
                    <h5 className="text-base font-bold text-[#122810] font-luxury">
                      {unit.unitTitle}
                    </h5>
                  </div>
                  <p className="text-xs text-[#2b4c25] mt-0.5 font-medium">
                    {unit.description}
                  </p>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-white border border-[#a6c4a1] text-[#122810] font-mono shrink-0">
                  {unit.lessons.length} Lesson{unit.lessons.length !== 1 ? 's' : ''}
                </span>
              </div>

              {/* Lessons in Unit */}
              <div className="space-y-3">
                {unit.lessons.map((lesson) => {
                  const isExpanded = expandedLessons[lesson.id] ?? true;
                  const struggles = struggleCountByLesson[lesson.lessonTitle.toLowerCase()] || 0;

                  return (
                    <div
                      key={lesson.id}
                      className="rounded-3xl border-2 border-[#a6c4a1] bg-white shadow-grave-card overflow-hidden transition-all duration-200"
                    >
                      {/* Lesson Toggle */}
                      <div
                        onClick={() => toggleLesson(lesson.id)}
                        className="p-4 sm:p-5 bg-[#f8faf7] hover:bg-[#f0f6ef] cursor-pointer transition flex items-center justify-between gap-3 border-b border-[#a6c4a1]/50 select-none"
                      >
                        <div className="flex items-center gap-3 flex-wrap">
                          <span className="p-2 rounded-xl bg-[#1a3717] text-white font-mono text-xs font-black shadow-xs">
                            {unit.unitNumber}.{lesson.lessonNumber}
                          </span>
                          <div>
                            <div className="flex items-center gap-2 flex-wrap">
                              <h6 className="text-base font-black text-[#122810] font-luxury">
                                {lesson.lessonTitle}
                              </h6>
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 font-['JetBrains_Mono']">
                                {lesson.badge}
                              </span>
                              {struggles > 0 && (
                                <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 border border-rose-300 font-['JetBrains_Mono'] flex items-center gap-1">
                                  <Flame className="w-3 h-3 text-rose-600 fill-rose-600" />
                                  {struggles} logged struggle{struggles !== 1 ? 's' : ''}
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-[#2a5025] font-medium mt-0.5">
                              {lesson.subtitle}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          {onLogStruggle && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                onLogStruggle(lesson.lessonTitle);
                              }}
                              className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-amber-500/20 text-amber-900 border border-amber-400 hover:bg-amber-500 hover:text-white transition cursor-pointer font-['JetBrains_Mono'] hidden sm:inline-block"
                            >
                              + Log Struggle
                            </button>
                          )}
                          <button
                            type="button"
                            className="p-1.5 rounded-xl bg-white border border-[#a6c4a1] text-[#122810] hover:bg-[#e4ede1]"
                          >
                            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>

                      {/* Lesson Body */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="p-4 sm:p-6 space-y-4"
                          >
                            {/* Formulas Grid */}
                            <div className="space-y-2">
                              <span className="text-xs font-black uppercase tracking-wider text-[#122810] font-['JetBrains_Mono'] block">
                                Formulas &amp; Core Models
                              </span>
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                {lesson.formulas.map(renderFormulaCard)}
                              </div>
                            </div>

                            {/* Linear Systems Condition Table Special View */}
                            {lesson.id === 'math-u1-linear-systems-solutions' && (
                              <div className="p-4 rounded-2xl bg-[#0f1f0e] border border-emerald-500/30 text-white space-y-2">
                                <span className="text-xs font-black uppercase text-emerald-300 font-['JetBrains_Mono'] block">
                                  Linear Systems Solutions Condition Table
                                </span>
                                <div className="overflow-x-auto rounded-xl border border-white/10">
                                  <table className="w-full text-left text-xs font-mono">
                                    <thead>
                                      <tr className="bg-black/60 text-emerald-300 border-b border-white/15">
                                        <th className="p-2.5">Coefficient Condition</th>
                                        <th className="p-2.5">Geometric Graph</th>
                                        <th className="p-2.5">Solutions</th>
                                      </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/10 bg-black/30">
                                      <tr>
                                        <td className="p-2.5 text-amber-200">a₁/a₂ ≠ b₁/b₂</td>
                                        <td className="p-2.5 text-slate-200 font-sans">Intersecting Lines</td>
                                        <td className="p-2.5 text-emerald-400 font-bold">1 Unique Solution (x, y)</td>
                                      </tr>
                                      <tr>
                                        <td className="p-2.5 text-amber-200">a₁/a₂ = b₁/b₂ (≠ c₁/c₂)</td>
                                        <td className="p-2.5 text-slate-200 font-sans">Parallel Lines</td>
                                        <td className="p-2.5 text-rose-400 font-bold">0 Solutions (No Solution)</td>
                                      </tr>
                                      <tr>
                                        <td className="p-2.5 text-amber-200">a₁/a₂ = b₁/b₂ = c₁/c₂</td>
                                        <td className="p-2.5 text-slate-200 font-sans">Same Exact Line</td>
                                        <td className="p-2.5 text-cyan-300 font-bold">Infinitely Many Solutions</td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            )}

                            {/* Rules & Traps */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                              {lesson.theoremsAndRules && (
                                <div className="p-3.5 rounded-2xl bg-[#f6faf5] border border-[#a6c4a1] space-y-1.5">
                                  <span className="text-xs font-black uppercase text-emerald-800 font-['JetBrains_Mono'] flex items-center gap-1.5">
                                    <CheckSquare className="w-3.5 h-3.5 text-emerald-600" />
                                    <span>Rules &amp; Insights</span>
                                  </span>
                                  <ul className="text-xs text-[#20401b] space-y-1 leading-relaxed font-medium">
                                    {lesson.theoremsAndRules.map((rule, idx) => (
                                      <li key={idx} className="flex items-start gap-1.5">
                                        <span className="text-emerald-600 font-bold">&bull;</span>
                                        <span>{rule}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {lesson.trapsAndWarnings && (
                                <div className="p-3.5 rounded-2xl bg-rose-50/70 border border-rose-300 space-y-1.5">
                                  <span className="text-xs font-black uppercase text-rose-800 font-['JetBrains_Mono'] flex items-center gap-1.5">
                                    <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                                    <span>Traps &amp; Warnings</span>
                                  </span>
                                  <ul className="text-xs text-rose-950 space-y-1 leading-relaxed font-medium">
                                    {lesson.trapsAndWarnings.map((trap, idx) => (
                                      <li key={idx} className="flex items-start gap-1.5">
                                        <span className="text-rose-600 font-bold">&bull;</span>
                                        <span>{trap}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
