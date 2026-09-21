'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Calculator, 
  Zap, 
  Search, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  AlertCircle,
  Copy, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink,
  ShieldCheck,
  Flame,
  ArrowRight,
  Info
} from 'lucide-react';
import { CORE_CURRICULUM_CHAPTERS, CoreCurriculumLesson } from '../data/coreCurriculum';
import { CHEAT_CODES } from '../data/cheatCodes';
import { FormulasSection } from './FormulasSection';
import { StuckConceptRecord } from '../types';

export type CoreInfoSubTab = 'important-info' | 'formulas' | 'cheat-codes';

interface CoreInfoSectionProps {
  stuckConcepts?: StuckConceptRecord[];
  initialSubTab?: 'important-info' | 'formulas' | 'cheat-codes' | 'curriculum' | 'blueprints';
  onToggleResolveStruggle?: (id: string) => void;
  onDeleteStruggle?: (id: string) => void;
}

export const CoreInfoSection: React.FC<CoreInfoSectionProps> = ({
  stuckConcepts = [],
  initialSubTab = 'important-info',
  onToggleResolveStruggle,
  onDeleteStruggle,
}) => {
  const normalizeTab = (tab?: string): CoreInfoSubTab => {
    if (tab === 'formulas') return 'formulas';
    if (tab === 'cheat-codes' || tab === 'blueprints') return 'cheat-codes';
    return 'important-info';
  };

  const [mainPageTab, setMainPageTab] = useState<CoreInfoSubTab>(() => normalizeTab(initialSubTab));
  const [selectedChapterId, setSelectedChapterId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedFormula, setCopiedFormula] = useState<string | null>(null);

  // Cheat Codes in-page filter and search state (zero modal popups)
  const [cheatCodeCategory, setCheatCodeCategory] = useState<'all' | 'desmos' | 'rw-grammar' | 'rw-strategies'>('all');
  const [cheatCodeSearch, setCheatCodeSearch] = useState<string>('');
  const [copiedCheatCodeId, setCopiedCheatCodeId] = useState<string | null>(null);

  const filteredCheatCodes = useMemo(() => {
    return CHEAT_CODES.filter((item) => {
      if (cheatCodeCategory !== 'all' && item.category !== cheatCodeCategory) return false;
      if (!cheatCodeSearch.trim()) return true;
      const q = cheatCodeSearch.toLowerCase();
      return (
        item.title.toLowerCase().includes(q) ||
        item.ruleSummary.toLowerCase().includes(q) ||
        item.detailedGuidance.toLowerCase().includes(q) ||
        (item.recommendedSyntax && item.recommendedSyntax.toLowerCase().includes(q)) ||
        (item.exampleSnippet && item.exampleSnippet.toLowerCase().includes(q))
      );
    });
  }, [cheatCodeCategory, cheatCodeSearch]);

  const handleCopyCheatCode = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCheatCodeId(id);
    setTimeout(() => setCopiedCheatCodeId(null), 2000);
  };

  // Sync tab from URL if user visits /core-info?tab=formulas etc.
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlTab = params.get('tab');
      if (urlTab) {
        setMainPageTab(normalizeTab(urlTab));
      }
    }
  }, []);

  const handleSwitchTab = (tab: CoreInfoSubTab) => {
    setMainPageTab(tab);
    if (typeof window !== 'undefined' && window.history) {
      const url = new URL(window.location.href);
      url.searchParams.set('tab', tab);
      window.history.replaceState({}, '', url.toString());
    }
  };

  const [expandedLessons, setExpandedLessons] = useState<Record<string, boolean>>({
    'alg-linear-systems': true,
    'psda-unit-conversion': true,
    'adv-isolating-quantities': true,
    'adv-factoring-identities': true,
    'geom-volume-formulas': true,
    'geom-right-triangle-trig': true,
    'geom-unit-circle': true,
  });

  // Calculate struggle count per lesson
  const struggleCountByLesson = useMemo(() => {
    const map: Record<string, number> = {};
    stuckConcepts.forEach((sc) => {
      const key = sc.lessonTitle.toLowerCase();
      map[key] = (map[key] || 0) + 1;
    });
    return map;
  }, [stuckConcepts]);

  // Filter lessons based on chapter and search query
  const filteredChapters = useMemo(() => {
    return CORE_CURRICULUM_CHAPTERS.map((ch) => {
      if (selectedChapterId !== 'all' && ch.id !== selectedChapterId) {
        return null;
      }

      const matchingLessons = ch.lessons.filter((l) => {
        if (!searchQuery.trim()) return true;
        const q = searchQuery.toLowerCase();
        return (
          l.lessonTitle.toLowerCase().includes(q) ||
          l.chapterTitle.toLowerCase().includes(q) ||
          (l.definition && l.definition.toLowerCase().includes(q)) ||
          l.formulas.some((f) => f.label.toLowerCase().includes(q) || f.formula.toLowerCase().includes(q)) ||
          l.conceptsForLogging.some((c) => c.toLowerCase().includes(q)) ||
          (l.goldenRules && l.goldenRules.some((r) => r.toLowerCase().includes(q)))
        );
      });

      if (matchingLessons.length === 0) return null;

      return {
        ...ch,
        lessons: matchingLessons,
      };
    }).filter(Boolean) as typeof CORE_CURRICULUM_CHAPTERS;
  }, [selectedChapterId, searchQuery]);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedFormula(text);
    setTimeout(() => setCopiedFormula(null), 2000);
  };

  const toggleLesson = (id: string) => {
    setExpandedLessons((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <motion.section
      id="section-core-info"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="ios-glass-card rounded-3xl shadow-grave hover:shadow-grave-hover p-5 sm:p-7 space-y-6 transition-all duration-300"
    >
      {/* Top Banner & Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 border-b border-[#a6c4a1]/50 pb-5">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-black uppercase px-3 py-1 rounded-full bg-emerald-800 text-white shadow-xs font-['JetBrains_Mono'] flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
              <span>Core Information & Blueprints</span>
            </span>
            <span className="text-xs text-emerald-950 font-black font-['JetBrains_Mono'] bg-emerald-100/90 px-2.5 py-0.5 rounded-full border border-emerald-300">
              HIGH PRIORITY &bull; MUST MASTER
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#122810] font-luxury flex items-center gap-2.5">
            <BookOpen className="w-7 h-7 text-emerald-700" />
            <span>Core SAT Curriculum & Blueprints</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#274624] max-w-3xl leading-relaxed font-medium">
            Synchronized, lesson-by-lesson knowledge base covering all essential SAT Math concepts, formulas, dimensional analysis rules, factoring identities, volume reference sheet tips, extraneous radical warnings, and complete unit circle trigonometry.
          </p>
        </div>
      </div>

      {/* Main Sub-Page Switcher Tabs with Smooth Oval Pill Buttons (Zero Outline Clipping) */}
      <div className="flex items-center gap-3 border-b border-[#a6c4a1]/50 pb-4 pt-1.5 px-1.5 overflow-x-auto scrollbar-none">
        {/* 1. Important Info Button - Signature Forest Matcha Green */}
        <button
          type="button"
          onClick={() => handleSwitchTab('important-info')}
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-black transition-all duration-200 cursor-pointer min-h-[44px] shrink-0 active:scale-95 ${
            mainPageTab === 'important-info'
              ? 'bg-[#122810] text-white border-2 border-emerald-500 shadow-md shadow-emerald-950/20'
              : 'bg-[#e5f0e1]/90 text-[#122810] border-2 border-[#a6c4a1] hover:bg-[#d7e5d2] hover:border-emerald-700'
          }`}
        >
          <BookOpen className={`w-4 h-4 ${mainPageTab === 'important-info' ? 'text-emerald-400' : 'text-emerald-800'}`} />
          <span>Important Info</span>
        </button>

        {/* 2. Formulas Button - Bluish / Indigo Theme */}
        <button
          type="button"
          onClick={() => handleSwitchTab('formulas')}
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-black transition-all duration-200 cursor-pointer min-h-[44px] shrink-0 active:scale-95 ${
            mainPageTab === 'formulas'
              ? 'bg-[#1e3a8a] text-white border-2 border-blue-400 shadow-md shadow-blue-950/20'
              : 'bg-blue-50/80 text-blue-950 border-2 border-blue-200 hover:bg-blue-100 hover:border-blue-400'
          }`}
        >
          <Calculator className={`w-4 h-4 ${mainPageTab === 'formulas' ? 'text-cyan-300' : 'text-blue-600'}`} />
          <span>Formulas</span>
        </button>

        {/* 3. Cheat Codes Button - Orangish / Amber / Yellowish Theme */}
        <button
          type="button"
          onClick={() => handleSwitchTab('cheat-codes')}
          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-black transition-all duration-200 cursor-pointer min-h-[44px] shrink-0 active:scale-95 ${
            mainPageTab === 'cheat-codes'
              ? 'bg-[#b45309] text-white border-2 border-amber-300 shadow-md shadow-amber-950/20'
              : 'bg-amber-50/80 text-amber-950 border-2 border-amber-200 hover:bg-amber-100 hover:border-amber-400'
          }`}
        >
          <Zap className={`w-4 h-4 ${mainPageTab === 'cheat-codes' ? 'text-amber-200 fill-amber-300' : 'text-amber-600 fill-amber-500'}`} />
          <span>Cheat Codes</span>
        </button>
      </div>

      {/* SUB-PAGE 1: IMPORTANT INFO (CORE CONCEPTS & LESSONS) */}
      {mainPageTab === 'important-info' && (
        <div className="space-y-6">
          {/* Controls: Chapter Selector & Real-Time Search */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-matcha-sub/90 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border-2 border-[#a6c4a1] shadow-grave-card">
            {/* Chapter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-0.5">
              <button
                onClick={() => setSelectedChapterId('all')}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition cursor-pointer shrink-0 ${
                  selectedChapterId === 'all'
                    ? 'bg-[#1a3717] text-white shadow-xs'
                    : 'bg-matcha-input/80 text-[#122810] hover:bg-matcha-sub border border-[#a6c4a1]'
                }`}
              >
                All Chapters
              </button>
              {CORE_CURRICULUM_CHAPTERS.map((ch) => (
                <button
                  key={ch.id}
                  onClick={() => setSelectedChapterId(ch.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-black transition cursor-pointer shrink-0 ${
                    selectedChapterId === ch.id
                      ? 'bg-[#1a3717] text-white shadow-xs'
                      : 'bg-matcha-input/80 text-[#122810] hover:bg-matcha-sub border border-[#a6c4a1]'
                  }`}
                >
                  {ch.title}
                </button>
              ))}
            </div>

            {/* Real-time search */}
            <div className="relative min-w-[200px] sm:w-64 shrink-0">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                placeholder="Search formulas, rules, lessons..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-matcha-input border border-[#a6c4a1] rounded-xl text-xs text-[#122810] placeholder:text-[#3d5a39] font-medium focus:ring-2 focus:ring-emerald-600 focus:outline-none backdrop-blur-md"
              />
            </div>
          </div>

          {/* Chapter & Lesson Stream */}
          <div className="space-y-8">
            {filteredChapters.map((ch) => (
              <div key={ch.id} className="space-y-4">
                {/* Chapter Banner */}
                <div className="p-4 bg-matcha-sub-dark/70 backdrop-blur-md rounded-2xl border-2 border-[#a6c4a1] shadow-grave-card flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-800 text-white font-['JetBrains_Mono'] shadow-xs">
                        {ch.badge}
                      </span>
                      <h3 className="text-lg font-bold text-[#122810] font-luxury">
                        {ch.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[#274624] font-medium mt-0.5">
                      {ch.description}
                    </p>
                  </div>
                </div>

                {/* Lessons in this Chapter */}
                <div className="grid grid-cols-1 gap-4">
                  {ch.lessons.map((lesson) => {
                    const isExpanded = !!expandedLessons[lesson.id];
                    const strugglesLogged = struggleCountByLesson[lesson.lessonTitle.toLowerCase()] || 0;

                    return (
                      <div
                        key={lesson.id}
                        className="ios-glass-card rounded-2xl border-2 border-[#a6c4a1] shadow-grave-card hover:shadow-grave-card-hover overflow-hidden transition-all duration-200"
                      >
                        {/* Lesson Header Accordion Toggle */}
                        <div
                          onClick={() => toggleLesson(lesson.id)}
                          className="p-4 sm:p-5 flex items-start justify-between gap-3 cursor-pointer hover:bg-matcha-sub/70 transition"
                        >
                          <div>
                            <div className="flex items-center gap-2 flex-wrap mb-1">
                              <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-900 border border-emerald-300 font-['JetBrains_Mono']">
                                {lesson.chapterTitle}
                              </span>
                              {strugglesLogged > 0 && (
                                <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-md bg-rose-100 text-rose-800 border border-rose-300 font-['JetBrains_Mono'] flex items-center gap-1">
                                  <AlertCircle className="w-3 h-3" />
                                  <span>{strugglesLogged} Logged Struggle{strugglesLogged > 1 ? 's' : ''}</span>
                                </span>
                              )}
                            </div>
                            <h4 className="text-base font-bold text-[#122810] font-luxury">
                              {lesson.lessonTitle}
                            </h4>
                            {lesson.definition && (
                              <p className="text-xs text-[#274624] font-medium mt-1 leading-relaxed">
                                {lesson.definition}
                              </p>
                            )}
                          </div>

                          <div className="flex items-center gap-1 shrink-0 text-[#3d5a39]">
                            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                          </div>
                        </div>

                        {/* Expanded Details */}
                        {isExpanded && (
                          <div className="p-4 sm:p-5 pt-0 border-t border-[#a6c4a1]/50 space-y-4 bg-matcha-sub/40 backdrop-blur-md">
                            {/* Formulas Box */}
                            {lesson.formulas.length > 0 && (
                              <div className="space-y-2 pt-2">
                                <span className="text-[11px] font-black uppercase tracking-wider text-[#122810] font-['JetBrains_Mono'] block">
                                  Essential Formulas & Syntax
                                </span>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                  {lesson.formulas.map((f, fIdx) => (
                                    <div
                                      key={fIdx}
                                      className="p-3.5 bg-matcha-sub/90 backdrop-blur-md rounded-xl border border-[#a6c4a1] shadow-grave-card flex flex-col justify-between"
                                    >
                                      <div>
                                        <span className="text-[11px] font-bold text-emerald-950 block mb-1">
                                          {f.label}
                                        </span>
                                        <div className="p-2.5 bg-[#122810]/95 backdrop-blur-md text-emerald-300 font-mono text-xs rounded-lg font-bold border border-emerald-500/30 overflow-x-auto flex items-center justify-between shadow-inner">
                                          <span>{f.formula}</span>
                                          <button
                                            type="button"
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              handleCopy(f.formula);
                                            }}
                                            className="p-1 hover:bg-[#1a3717] rounded text-emerald-400/70 hover:text-white transition shrink-0 ml-2"
                                            title="Copy formula"
                                          >
                                            {copiedFormula === f.formula ? (
                                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                                            ) : (
                                              <Copy className="w-3.5 h-3.5" />
                                            )}
                                          </button>
                                        </div>
                                      </div>
                                      {f.explanation && (
                                        <p className="text-[11px] text-[#274624] mt-1.5 font-medium leading-normal">
                                          {f.explanation}
                                        </p>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Method Steps */}
                            {lesson.methods && lesson.methods.length > 0 && (
                              <div className="space-y-2">
                                {lesson.methods.map((m, mIdx) => (
                                  <div key={mIdx} className="p-4 bg-matcha-sub/90 backdrop-blur-md rounded-xl border border-[#a6c4a1] shadow-grave-card space-y-2">
                                    <span className="text-xs font-bold text-indigo-950 flex items-center gap-1.5 font-['JetBrains_Mono']">
                                      <ArrowRight className="w-3.5 h-3.5 text-indigo-700" />
                                      <span>{m.title}</span>
                                    </span>
                                    <div className="space-y-1 pl-1">
                                      {m.steps.map((step, sIdx) => (
                                        <p key={sIdx} className="text-xs text-[#122810] font-medium leading-relaxed">
                                          {step}
                                        </p>
                                      ))}
                                    </div>

                                    {m.reverseSteps && (
                                      <div className="pt-2 border-t border-[#a6c4a1]/50">
                                        <span className="text-[11px] font-bold text-amber-950 block mb-1 font-['JetBrains_Mono']">
                                          Reverse Version (Finding unknown dimension):
                                        </span>
                                        {m.reverseSteps.map((rStep, rIdx) => (
                                          <p key={rIdx} className="text-xs text-amber-950/90 font-medium leading-relaxed">
                                            {rStep}
                                          </p>
                                        ))}
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Example Logic */}
                            {lesson.exampleLogic && (
                              <div className="p-3.5 bg-matcha-input/90 backdrop-blur-md rounded-xl border-2 border-emerald-600/40 shadow-grave-card">
                                <span className="text-[11px] font-bold text-emerald-950 block mb-1 font-['JetBrains_Mono']">
                                  Example Logic & Dimensional Flow:
                                </span>
                                <pre className="text-xs text-[#122810] font-mono whitespace-pre-wrap leading-relaxed">
                                  {lesson.exampleLogic}
                                </pre>
                              </div>
                            )}

                            {/* Golden Rules */}
                            {lesson.goldenRules && lesson.goldenRules.length > 0 && (
                              <div className="p-3.5 bg-amber-500/10 backdrop-blur-md rounded-xl border border-amber-500/30 shadow-grave-card space-y-1">
                                <span className="text-[11px] font-black uppercase text-amber-950 font-['JetBrains_Mono'] flex items-center gap-1">
                                  <Flame className="w-3.5 h-3.5 text-amber-600" />
                                  <span>Golden Rules & High-Leverage Tips</span>
                                </span>
                                {lesson.goldenRules.map((rule, rIdx) => (
                                  <p key={rIdx} className="text-xs text-amber-950 font-semibold leading-relaxed">
                                    &bull; {rule}
                                  </p>
                                ))}
                              </div>
                            )}

                            {/* Traps & Warnings */}
                            {lesson.trapsAndWarnings && lesson.trapsAndWarnings.length > 0 && (
                              <div className="p-3.5 bg-rose-500/10 backdrop-blur-md rounded-xl border border-rose-500/30 shadow-grave-card space-y-1">
                                <span className="text-[11px] font-black uppercase text-rose-950 font-['JetBrains_Mono'] flex items-center gap-1">
                                  <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                                  <span>Common SAT Traps & Extraneous Warnings</span>
                                </span>
                                {lesson.trapsAndWarnings.map((trap, tIdx) => (
                                  <p key={tIdx} className="text-xs text-rose-950 font-semibold leading-relaxed">
                                    &bull; {trap}
                                  </p>
                                ))}
                              </div>
                            )}

                            {/* Unit Circle Table */}
                            {lesson.unitCircleTable && (
                              <div className="p-4 bg-matcha-sub/90 backdrop-blur-md rounded-xl border-2 border-[#a6c4a1] shadow-grave-card space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs font-black uppercase tracking-wider text-[#122810] font-['JetBrains_Mono']">
                                    Full Unit Circle Reference Table (Memorize for SAT)
                                  </span>
                                </div>
                                <div className="overflow-x-auto rounded-xl border border-[#a6c4a1]/70">
                                  <table className="w-full text-xs text-left border-collapse">
                                    <thead>
                                      <tr className="bg-matcha-sub-dark/90 border-b-2 border-[#a6c4a1] font-['JetBrains_Mono'] text-[#122810]">
                                        <th className="p-2.5 font-black">Angle θ (Rad)</th>
                                        <th className="p-2.5 font-black">Degree</th>
                                        <th className="p-2.5 font-black">cos θ (x)</th>
                                        <th className="p-2.5 font-black">sin θ (y)</th>
                                        <th className="p-2.5 font-black">tan θ (y/x)</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {lesson.unitCircleTable.map((row, rIdx) => (
                                        <tr
                                          key={rIdx}
                                          className={`border-b border-[#a6c4a1]/40 font-mono font-medium transition-colors ${
                                            rIdx % 2 === 0 ? 'bg-matcha-sub/40 hover:bg-matcha-sub/70' : 'bg-matcha-input/50 hover:bg-matcha-sub/70'
                                          }`}
                                        >
                                          <td className="p-2.5 font-bold text-indigo-800">{row.theta}</td>
                                          <td className="p-2.5 text-[#274624]">{row.deg}</td>
                                          <td className="p-2.5 font-bold text-[#122810]">{row.cos}</td>
                                          <td className="p-2.5 font-bold text-[#122810]">{row.sin}</td>
                                          <td className="p-2.5 text-[#122810]">{row.tan}</td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            )}

                            {/* Concepts For Logging Dropdown Items */}
                            <div className="pt-2 flex items-center justify-between text-[11px] text-[#274624]">
                              <span className="font-bold font-['JetBrains_Mono']">
                                {lesson.conceptsForLogging.length} Loggable Sub-Concepts Connected to Calendar
                              </span>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* PAGE 2: FORMULA VAULT */}
      {mainPageTab === 'formulas' && (
        <div className="space-y-4">
          <FormulasSection />
        </div>
      )}

      {/* SUB-PAGE 3: CHEAT CODES (TACTICAL BLUEPRINTS) */}
      {mainPageTab === 'cheat-codes' && (
        <div className="space-y-5">
          {/* Header Banner */}
          <div className="p-4 sm:p-5 bg-amber-500/10 backdrop-blur-md rounded-3xl border-2 border-amber-500/30 shadow-grave-card flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <span className="text-xs font-black uppercase text-amber-950 font-['JetBrains_Mono'] px-2.5 py-0.5 rounded-full bg-amber-200/80 border border-amber-400">
                  ⚡ Bluebook Verified Shortcuts &amp; Tactics
                </span>
                <span className="text-xs font-bold text-amber-900 font-['JetBrains_Mono']">
                  {CHEAT_CODES.length} Tactics Memorized Cold
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#122810] font-luxury">
                Desmos 10× Speed Drills &amp; R&amp;W Blueprints
              </h3>
              <p className="text-xs text-[#274624] font-medium mt-0.5 max-w-2xl">
                Master the exact 8 Desmos regression shortcuts, 6 Reading &amp; Writing punctuation &amp; grammar rules, and 5 passage strategy blueprints. Everything is built directly on this page with zero popups.
              </p>
            </div>
          </div>

          {/* In-Page Filter Pills & Live Search Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-matcha-sub/90 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border-2 border-[#a6c4a1] shadow-grave-card">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-0.5">
              <button
                type="button"
                onClick={() => setCheatCodeCategory('all')}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition cursor-pointer shrink-0 ${
                  cheatCodeCategory === 'all'
                    ? 'bg-[#122810] text-white shadow-xs'
                    : 'bg-matcha-input/80 text-[#122810] hover:bg-matcha-sub border border-[#a6c4a1]'
                }`}
              >
                All Codes ({CHEAT_CODES.length})
              </button>

              <button
                type="button"
                onClick={() => setCheatCodeCategory('desmos')}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition cursor-pointer shrink-0 flex items-center gap-1.5 ${
                  cheatCodeCategory === 'desmos'
                    ? 'bg-indigo-700 text-white shadow-xs'
                    : 'bg-indigo-50/80 text-indigo-900 hover:bg-indigo-100 border border-indigo-300'
                }`}
              >
                <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-300" />
                <span>Desmos Math ({CHEAT_CODES.filter((c) => c.category === 'desmos').length})</span>
              </button>

              <button
                type="button"
                onClick={() => setCheatCodeCategory('rw-grammar')}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition cursor-pointer shrink-0 flex items-center gap-1.5 ${
                  cheatCodeCategory === 'rw-grammar'
                    ? 'bg-amber-700 text-white shadow-xs'
                    : 'bg-amber-50/80 text-amber-950 hover:bg-amber-100 border border-amber-300'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5 text-amber-600" />
                <span>R&amp;W Grammar ({CHEAT_CODES.filter((c) => c.category === 'rw-grammar').length})</span>
              </button>

              <button
                type="button"
                onClick={() => setCheatCodeCategory('rw-strategies')}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition cursor-pointer shrink-0 flex items-center gap-1.5 ${
                  cheatCodeCategory === 'rw-strategies'
                    ? 'bg-emerald-800 text-white shadow-xs'
                    : 'bg-emerald-50/80 text-emerald-950 hover:bg-emerald-100 border border-emerald-300'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>Strategies ({CHEAT_CODES.filter((c) => c.category === 'rw-strategies').length})</span>
              </button>
            </div>

            {/* Real-Time Live Search */}
            <div className="relative min-w-[200px] sm:w-64 shrink-0">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                placeholder="Search shortcuts, syntax, rules..."
                value={cheatCodeSearch}
                onChange={(e) => setCheatCodeSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-matcha-input border border-[#a6c4a1] rounded-xl text-xs text-[#122810] placeholder:text-[#3d5a39] font-medium focus:ring-2 focus:ring-amber-600 focus:outline-none backdrop-blur-md"
              />
            </div>
          </div>

          {/* Cards Grid */}
          {filteredCheatCodes.length === 0 ? (
            <div className="p-8 text-center rounded-2xl bg-matcha-sub/80 border-2 border-dashed border-[#a6c4a1] text-xs font-bold text-[#274624]">
              No cheat codes match "{cheatCodeSearch}". Clear the search to view all {CHEAT_CODES.length} blueprints.
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {filteredCheatCodes.map((item) => (
                <div
                  key={item.id}
                  className="p-5 ios-glass-card rounded-2xl border-2 border-[#a6c4a1] shadow-grave-card hover:shadow-grave-hover transition-all duration-200 space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2.5">
                    {/* Top Row: Category Pill & Title */}
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full border font-['JetBrains_Mono'] ${item.badgeColor}`}>
                          {item.badge}
                        </span>
                      </div>
                    </div>

                    <h4 className="text-base font-bold text-[#122810] font-luxury">
                      {item.title}
                    </h4>

                    {/* Summary Rule */}
                    <p className="text-xs text-[#122810] font-bold bg-matcha-sub/90 p-2.5 rounded-xl border border-[#a6c4a1]/70 leading-relaxed">
                      {item.ruleSummary}
                    </p>

                    {/* Detailed Guidance */}
                    <p className="text-xs text-[#274624] font-medium leading-relaxed">
                      {item.detailedGuidance}
                    </p>

                    {/* Recommended Syntax Block */}
                    {item.recommendedSyntax && (
                      <div className="relative group">
                        <pre className="text-xs p-3 bg-[#122810]/95 backdrop-blur-md text-emerald-300 rounded-xl font-mono border border-emerald-500/30 shadow-inner overflow-x-auto whitespace-pre-wrap leading-relaxed">
                          {item.recommendedSyntax}
                        </pre>
                        <button
                          type="button"
                          onClick={() => handleCopyCheatCode(item.recommendedSyntax!, item.id)}
                          className="absolute right-2 top-2 p-1.5 rounded-lg bg-emerald-800/80 hover:bg-emerald-700 text-emerald-200 transition cursor-pointer flex items-center gap-1 text-[10px] font-['JetBrains_Mono'] font-bold"
                          title="Copy syntax"
                        >
                          {copiedCheatCodeId === item.id ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-300" />
                              <span>Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>Copy</span>
                            </>
                          )}
                        </button>
                      </div>
                    )}

                    {/* Worked Example / Blueprint */}
                    {item.exampleSnippet && (
                      <div className="p-3 rounded-xl bg-matcha-input/90 border-2 border-indigo-200/80 space-y-1">
                        <span className="text-[10px] font-black uppercase tracking-wider text-indigo-950 font-['JetBrains_Mono'] block">
                          Worked Example / Blueprint:
                        </span>
                        <p className="text-xs text-[#122810] font-medium leading-relaxed font-mono whitespace-pre-wrap">
                          {item.exampleSnippet}
                        </p>
                      </div>
                    )}

                    {/* College Board Trap Alert */}
                    {item.trapAlert && (
                      <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-start gap-2">
                        <AlertTriangle className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                        <div className="space-y-0.5">
                          <span className="text-[10px] font-black uppercase tracking-wider text-rose-950 font-['JetBrains_Mono'] block">
                            College Board Trap Alert:
                          </span>
                          <p className="text-xs text-rose-950 font-semibold leading-snug">
                            {item.trapAlert}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </motion.section>
  );
};
