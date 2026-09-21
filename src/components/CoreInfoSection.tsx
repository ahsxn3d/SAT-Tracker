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

interface CoreInfoSectionProps {
  stuckConcepts?: StuckConceptRecord[];
  onOpenDesmosModal?: (tab?: 'desmos' | 'rw-grammar' | 'rw-strategies') => void;
  onOpenModal?: (tab?: any) => void;
  initialSubTab?: 'curriculum' | 'formulas' | 'blueprints';
  onToggleResolveStruggle?: (id: string) => void;
  onDeleteStruggle?: (id: string) => void;
}

export const CoreInfoSection: React.FC<CoreInfoSectionProps> = ({
  stuckConcepts = [],
  onOpenDesmosModal,
  onOpenModal,
  initialSubTab = 'curriculum',
  onToggleResolveStruggle,
  onDeleteStruggle,
}) => {
  const openModalHandler = onOpenDesmosModal || onOpenModal;
  const [mainPageTab, setMainPageTab] = useState<'curriculum' | 'formulas' | 'blueprints'>(initialSubTab);
  const [selectedChapterId, setSelectedChapterId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedFormula, setCopiedFormula] = useState<string | null>(null);
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

        {/* Action Button */}
        {onOpenDesmosModal && (
          <button
            onClick={() => onOpenDesmosModal('desmos')}
            className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-black text-white bg-[#264e22] hover:bg-[#1a3717] hover:shadow-md active:scale-[0.98] transition-all duration-150 shadow-xs flex items-center gap-2 min-h-[44px] cursor-pointer shrink-0 self-start lg:self-auto"
          >
            <Zap className="w-4 h-4 text-amber-300 fill-amber-300" />
            <span>Open Desmos & Grammar Studio</span>
          </button>
        )}
      </div>

      {/* Main Sub-Page Switcher Tabs */}
      <div className="flex items-center gap-2 border-b border-[#a6c4a1]/50 pb-2 overflow-x-auto scrollbar-none">
        <button
          onClick={() => setMainPageTab('curriculum')}
          className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-black transition-all duration-150 flex items-center gap-2 min-h-[44px] cursor-pointer active:scale-[0.98] ${
            mainPageTab === 'curriculum'
              ? 'bg-[#1a3717] text-white shadow-sm'
              : 'bg-[#e5f0e1]/70 text-[#122810] hover:bg-[#d7e5d2] border border-[#a6c4a1]'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Page 1: Core Concepts & Lessons</span>
        </button>

        <button
          onClick={() => setMainPageTab('formulas')}
          className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-black transition-all duration-150 flex items-center gap-2 min-h-[44px] cursor-pointer active:scale-[0.98] ${
            mainPageTab === 'formulas'
              ? 'bg-emerald-700 text-white shadow-sm'
              : 'bg-[#e5f0e1]/70 text-[#122810] hover:bg-[#d7e5d2] border border-[#a6c4a1]'
          }`}
        >
          <Calculator className="w-4 h-4" />
          <span>Page 2: Formula Vault (Reference Sheet)</span>
        </button>

        <button
          onClick={() => setMainPageTab('blueprints')}
          className={`px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-black transition-all duration-150 flex items-center gap-2 min-h-[44px] cursor-pointer active:scale-[0.98] ${
            mainPageTab === 'blueprints'
              ? 'bg-amber-600 text-white shadow-sm'
              : 'bg-[#e5f0e1]/70 text-[#122810] hover:bg-[#d7e5d2] border border-[#a6c4a1]'
          }`}
        >
          <Zap className="w-4 h-4" />
          <span>Tactical Blueprints (Desmos & R&W)</span>
        </button>
      </div>

      {/* PAGE 1: CORE CONCEPTS & LESSONS */}
      {mainPageTab === 'curriculum' && (
        <div className="space-y-6">
          {/* Controls: Chapter Selector & Real-Time Search */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-matcha-sub p-3.5 sm:p-4 rounded-2xl border border-[#a6c4a1]/70">
            {/* Chapter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-0.5">
              <button
                onClick={() => setSelectedChapterId('all')}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition cursor-pointer shrink-0 ${
                  selectedChapterId === 'all'
                    ? 'bg-[#1a3717] text-white shadow-xs'
                    : 'bg-white/80 text-slate-800 hover:bg-white border border-[#a6c4a1]/60'
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
                      : 'bg-white/80 text-slate-800 hover:bg-white border border-[#a6c4a1]/60'
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
                className="w-full pl-9 pr-3 py-2 bg-matcha-input border border-[#a6c4a1] rounded-xl text-xs text-slate-900 placeholder:text-slate-500 font-medium focus:ring-2 focus:ring-emerald-600 focus:outline-none"
              />
            </div>
          </div>

          {/* Chapter & Lesson Stream */}
          <div className="space-y-8">
            {filteredChapters.map((ch) => (
              <div key={ch.id} className="space-y-4">
                {/* Chapter Banner */}
                <div className="p-4 bg-[#d2e4cd]/70 rounded-2xl border border-[#a6c4a1] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-emerald-800 text-white font-['JetBrains_Mono']">
                        {ch.badge}
                      </span>
                      <h3 className="text-lg font-bold text-slate-950 font-luxury">
                        {ch.title}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-700 font-medium mt-0.5">
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
                        className="bg-white rounded-2xl border border-[#a6c4a1] shadow-xs overflow-hidden transition-all duration-150"
                      >
                        {/* Lesson Header Accordion Toggle */}
                        <div
                          onClick={() => toggleLesson(lesson.id)}
                          className="p-4 sm:p-5 flex items-start justify-between gap-3 cursor-pointer hover:bg-emerald-50/40 transition"
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
                            <h4 className="text-base font-bold text-slate-950 font-luxury">
                              {lesson.lessonTitle}
                            </h4>
                            {lesson.definition && (
                              <p className="text-xs text-slate-700 font-medium mt-1 leading-relaxed">
                                {lesson.definition}
                              </p>
                            )}
                          </div>

                          <div className="flex items-center gap-1 shrink-0 text-slate-500">
                            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                          </div>
                        </div>

                        {/* Expanded Details */}
                        {isExpanded && (
                          <div className="p-4 sm:p-5 pt-0 border-t border-[#a6c4a1]/40 space-y-4 bg-matcha-sub/30">
                            {/* Formulas Box */}
                            {lesson.formulas.length > 0 && (
                              <div className="space-y-2 pt-2">
                                <span className="text-[11px] font-black uppercase tracking-wider text-slate-800 font-['JetBrains_Mono'] block">
                                  Essential Formulas & Syntax
                                </span>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                  {lesson.formulas.map((f, fIdx) => (
                                    <div
                                      key={fIdx}
                                      className="p-3 bg-white rounded-xl border border-[#a6c4a1] shadow-xs flex flex-col justify-between"
                                    >
                                      <div>
                                        <span className="text-[11px] font-bold text-emerald-900 block mb-1">
                                          {f.label}
                                        </span>
                                        <div className="p-2 bg-slate-900 text-emerald-300 font-mono text-xs rounded-lg font-bold overflow-x-auto flex items-center justify-between">
                                          <span>{f.formula}</span>
                                          <button
                                            type="button"
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              handleCopy(f.formula);
                                            }}
                                            className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white transition shrink-0 ml-2"
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
                                        <p className="text-[11px] text-slate-600 mt-1.5 font-medium leading-normal">
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
                                  <div key={mIdx} className="p-3.5 bg-white rounded-xl border border-[#a6c4a1] shadow-xs space-y-2">
                                    <span className="text-xs font-bold text-indigo-950 flex items-center gap-1.5 font-['JetBrains_Mono']">
                                      <ArrowRight className="w-3.5 h-3.5 text-indigo-600" />
                                      <span>{m.title}</span>
                                    </span>
                                    <div className="space-y-1 pl-1">
                                      {m.steps.map((step, sIdx) => (
                                        <p key={sIdx} className="text-xs text-slate-800 font-medium leading-relaxed">
                                          {step}
                                        </p>
                                      ))}
                                    </div>

                                    {m.reverseSteps && (
                                      <div className="pt-2 border-t border-slate-100">
                                        <span className="text-[11px] font-bold text-amber-900 block mb-1">
                                          Reverse Version (Finding unknown dimension):
                                        </span>
                                        {m.reverseSteps.map((rStep, rIdx) => (
                                          <p key={rIdx} className="text-xs text-slate-700 font-medium leading-relaxed">
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
                              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                                <span className="text-[11px] font-bold text-emerald-950 block mb-1 font-['JetBrains_Mono']">
                                  Example Logic & Dimensional Flow:
                                </span>
                                <pre className="text-xs text-slate-800 font-mono whitespace-pre-wrap leading-relaxed">
                                  {lesson.exampleLogic}
                                </pre>
                              </div>
                            )}

                            {/* Golden Rules */}
                            {lesson.goldenRules && lesson.goldenRules.length > 0 && (
                              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 space-y-1">
                                <span className="text-[11px] font-black uppercase text-amber-950 font-['JetBrains_Mono'] flex items-center gap-1">
                                  <Flame className="w-3.5 h-3.5 text-amber-600" />
                                  <span>Golden Rules & High-Leverage Tips</span>
                                </span>
                                {lesson.goldenRules.map((rule, rIdx) => (
                                  <p key={rIdx} className="text-xs text-amber-900 font-semibold leading-relaxed">
                                    &bull; {rule}
                                  </p>
                                ))}
                              </div>
                            )}

                            {/* Traps & Warnings */}
                            {lesson.trapsAndWarnings && lesson.trapsAndWarnings.length > 0 && (
                              <div className="p-3 bg-rose-50 rounded-xl border border-rose-200 space-y-1">
                                <span className="text-[11px] font-black uppercase text-rose-950 font-['JetBrains_Mono'] flex items-center gap-1">
                                  <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                                  <span>Common SAT Traps & Extraneous Warnings</span>
                                </span>
                                {lesson.trapsAndWarnings.map((trap, tIdx) => (
                                  <p key={tIdx} className="text-xs text-rose-900 font-semibold leading-relaxed">
                                    &bull; {trap}
                                  </p>
                                ))}
                              </div>
                            )}

                            {/* Unit Circle Table */}
                            {lesson.unitCircleTable && (
                              <div className="p-3.5 bg-white rounded-xl border border-[#a6c4a1] shadow-xs space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs font-black uppercase tracking-wider text-slate-900 font-['JetBrains_Mono']">
                                    Full Unit Circle Reference Table (Memorize for SAT)
                                  </span>
                                </div>
                                <div className="overflow-x-auto">
                                  <table className="w-full text-xs text-left border-collapse">
                                    <thead>
                                      <tr className="bg-slate-100 border-b border-slate-300 font-['JetBrains_Mono'] text-slate-800">
                                        <th className="p-2 font-black">Angle θ (Rad)</th>
                                        <th className="p-2 font-black">Degree</th>
                                        <th className="p-2 font-black">cos θ (x)</th>
                                        <th className="p-2 font-black">sin θ (y)</th>
                                        <th className="p-2 font-black">tan θ (y/x)</th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {lesson.unitCircleTable.map((row, rIdx) => (
                                        <tr
                                          key={rIdx}
                                          className={`border-b border-slate-200 font-mono font-medium ${
                                            rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'
                                          }`}
                                        >
                                          <td className="p-2 font-bold text-indigo-700">{row.theta}</td>
                                          <td className="p-2 text-slate-600">{row.deg}</td>
                                          <td className="p-2 font-bold text-slate-900">{row.cos}</td>
                                          <td className="p-2 font-bold text-slate-900">{row.sin}</td>
                                          <td className="p-2 text-slate-800">{row.tan}</td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            )}

                            {/* Concepts For Logging Dropdown Items */}
                            <div className="pt-2 flex items-center justify-between text-[11px] text-slate-600">
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

      {/* PAGE 3: TACTICAL BLUEPRINTS (DESMOS & R&W) */}
      {mainPageTab === 'blueprints' && (
        <div className="space-y-4">
          <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <div>
              <span className="text-xs font-black uppercase text-amber-900 font-['JetBrains_Mono']">
                ⚡ Tactical Blueprints & Shortcuts
              </span>
              <h3 className="text-lg font-bold text-slate-950 font-luxury">
                Desmos Regression & Grammar Traps
              </h3>
              <p className="text-xs text-slate-700 font-medium mt-0.5">
                Master the exact 8 Desmos shortcuts and 6 Reading & Writing grammar blueprints.
              </p>
            </div>
            {onOpenDesmosModal && (
              <button
                onClick={() => onOpenDesmosModal('desmos')}
                className="px-4 py-2 bg-amber-600 text-white rounded-xl text-xs font-black hover:bg-amber-700 transition cursor-pointer self-start sm:self-auto"
              >
                Open Studio Modal
              </button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {CHEAT_CODES.map((item) => (
              <div key={item.id} className="p-4 bg-white rounded-2xl border border-[#a6c4a1] shadow-xs space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-900 font-['JetBrains_Mono']">
                    {item.category.toUpperCase()}
                  </span>
                  <h4 className="text-sm font-bold text-slate-950 font-luxury">{item.title}</h4>
                </div>
                <p className="text-xs text-slate-800 font-semibold">{item.ruleSummary}</p>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">{item.detailedGuidance}</p>
                {item.recommendedSyntax && (
                  <pre className="text-xs p-2 bg-slate-900 text-emerald-300 rounded-lg font-mono overflow-x-auto">
                    {item.recommendedSyntax}
                  </pre>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </motion.section>
  );
};
