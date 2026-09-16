'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Calculator, 
  Search, 
  Sparkles, 
  Copy, 
  Check, 
  Eye, 
  EyeOff, 
  AlertTriangle, 
  Zap, 
  BookOpen, 
  Layers, 
  HelpCircle,
  ChevronDown,
  ChevronUp,
  Filter,
  ArrowRight
} from 'lucide-react';
import { 
  SAT_FORMULAS_DATA, 
  FORMULA_DOMAINS, 
  FormulaDomain, 
  FormulaDifficulty, 
  SATFormulaItem 
} from '../data/satFormulas';

export const FormulasSection: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomain, setSelectedDomain] = useState<FormulaDomain | 'all'>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<FormulaDifficulty | 'all'>('all');
  const [hideFormulasMode, setHideFormulasMode] = useState(false);
  const [revealedFormulaIds, setRevealedFormulaIds] = useState<Record<string, boolean>>({});
  const [expandedExampleIds, setExpandedExampleIds] = useState<Record<string, boolean>>({});
  const [copiedFormulaId, setCopiedFormulaId] = useState<string | null>(null);
  const [showTierModal, setShowTierModal] = useState(false);

  // Filter formulas based on search, domain, and difficulty
  const filteredFormulas = useMemo(() => {
    return SAT_FORMULAS_DATA.filter((item) => {
      // Domain filter
      if (selectedDomain !== 'all' && item.domain !== selectedDomain) return false;

      // Difficulty filter
      if (selectedDifficulty !== 'all' && item.difficulty !== selectedDifficulty) return false;

      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesFormula = item.formula.toLowerCase().includes(query);
        const matchesMeaning = item.meaning.toLowerCase().includes(query);
        const matchesDomain = item.domainTitle.toLowerCase().includes(query);
        const matchesUnits = item.units.toLowerCase().includes(query);
        return matchesName || matchesFormula || matchesMeaning || matchesDomain || matchesUnits;
      }

      return true;
    });
  }, [searchQuery, selectedDomain, selectedDifficulty]);

  // Handle copy to clipboard
  const handleCopyFormula = (id: string, formulaText: string) => {
    navigator.clipboard.writeText(formulaText);
    setCopiedFormulaId(id);
    setTimeout(() => {
      setCopiedFormulaId(null);
    }, 2000);
  };

  const toggleReveal = (id: string) => {
    setRevealedFormulaIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleExample = (id: string) => {
    setExpandedExampleIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Badge styles by difficulty
  const getDifficultyBadge = (diff: FormulaDifficulty) => {
    switch (diff) {
      case 'foundations':
        return {
          label: 'Foundations (Tier 1)',
          pillClass: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          dotClass: 'bg-emerald-400',
          gradientClass: 'from-emerald-950/40 via-[#0d2e1c]/30 to-[#051c10]/20',
          borderHover: 'hover:border-emerald-400/60',
        };
      case 'medium':
        return {
          label: 'Medium (Tier 2)',
          pillClass: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
          dotClass: 'bg-amber-400',
          gradientClass: 'from-amber-950/40 via-[#2e220d]/30 to-[#1c1405]/20',
          borderHover: 'hover:border-amber-400/60',
        };
      case 'advanced':
        return {
          label: 'Advanced (Tier 3)',
          pillClass: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
          dotClass: 'bg-rose-400',
          gradientClass: 'from-rose-950/40 via-[#2e0d16]/30 to-[#1c050a]/20',
          borderHover: 'hover:border-rose-400/60',
        };
    }
  };

  return (
    <div className="space-y-7 text-slate-100">
      {/* HERO BANNER: The Golden Rule of SAT Formulas */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#06243f] via-[#0b3b64] to-[#02446d] border-2 border-sky-400/40 p-6 sm:p-8 shadow-grave backdrop-blur-xl">
        <div className="relative z-10 space-y-4">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs font-black uppercase px-3 py-1 rounded-full bg-sky-400/25 text-sky-200 border border-sky-300/40 font-['JetBrains_Mono']">
              Official SAT Math Master Sheet
            </span>
            <span className="text-xs font-bold text-amber-300 font-['JetBrains_Mono'] flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>Universal Across Foundations &bull; Medium &bull; Advanced</span>
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5">
            <div className="space-y-2 max-w-3xl">
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-luxury flex items-center gap-3">
                <Calculator className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400" />
                <span>The SAT Formula Vault</span>
              </h1>
              <p className="text-sm sm:text-base text-sky-100/90 leading-relaxed font-medium">
                <strong className="text-white font-bold">The Golden Rule:</strong> The formulas do <span className="underline decoration-amber-400 decoration-2 font-bold text-white">not</span> change between easy and hard questions. The slope formula is the exact same formula whether the problem is simple or brutal. What changes is <strong className="text-amber-300">how many steps you need, how variables are disguised, and what traps are set</strong>.
              </p>
            </div>

            <button
              onClick={() => setShowTierModal(!showTierModal)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer whitespace-nowrap self-start lg:self-center"
            >
              <HelpCircle className="w-4 h-4 text-slate-950" />
              <span>{showTierModal ? 'Hide Tier Breakdown' : 'How Tiers Differ Guide'}</span>
            </button>
          </div>

          {/* EXPLANATION ACCORDION: Why Formulas Don't Change, But Problems Do */}
          <AnimatePresence>
            {showTierModal && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden pt-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 p-4 sm:p-5 rounded-2xl bg-[#031526]/80 border border-sky-400/30 text-xs sm:text-sm">
                  {/* Tier 1 */}
                  <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
                      <span className="font-extrabold text-emerald-300 font-['JetBrains_Mono']">
                        Tier 1: Foundations
                      </span>
                    </div>
                    <p className="text-emerald-100/90 text-xs leading-relaxed">
                      <strong>Direct 1-Step Calculation:</strong> Given points (2, 3) and (6, 11), find the slope. Plug straight into the formula. Takes 15 seconds.
                    </p>
                  </div>

                  {/* Tier 2 */}
                  <div className="p-3.5 rounded-xl bg-amber-950/40 border border-amber-500/30 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                      <span className="font-extrabold text-amber-300 font-['JetBrains_Mono']">
                        Tier 2: Medium
                      </span>
                    </div>
                    <p className="text-amber-100/90 text-xs leading-relaxed">
                      <strong>2-Step & Reverse Solving:</strong> Given slope is 2 through (3, k) and (7, 15), solve backwards for k. Or word problems requiring you to identify coordinates first.
                    </p>
                  </div>

                  {/* Tier 3 */}
                  <div className="p-3.5 rounded-xl bg-rose-950/40 border border-rose-500/30 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-400"></span>
                      <span className="font-extrabold text-rose-300 font-['JetBrains_Mono']">
                        Tier 3: Advanced
                      </span>
                    </div>
                    <p className="text-rose-100/90 text-xs leading-relaxed">
                      <strong>Parametric Constants & Traps:</strong> Line is perpendicular to ax + by = c, or "infinite solutions" where ratios must match, or completing the square on a circle.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* FILTER & SEARCH CONTROL BAR */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#07243c]/90 border border-sky-400/30 space-y-4 shadow-sm backdrop-blur-md">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          {/* Live Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-sky-300" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search formulas by name, topic, symbol (e.g. slope, vertex, arc, circle)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#03182b] border border-sky-500/40 text-sm text-white placeholder-sky-300/50 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:border-sky-400 transition"
            />
          </div>

          {/* Flashcard / Recall Mode Toggle */}
          <button
            onClick={() => setHideFormulasMode(!hideFormulasMode)}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer whitespace-nowrap active:scale-95 ${
              hideFormulasMode
                ? 'bg-purple-600 text-white border-purple-400 shadow-md ring-2 ring-purple-400/40'
                : 'bg-[#031c33] text-sky-200 border-sky-400/30 hover:bg-[#052646]'
            }`}
          >
            {hideFormulasMode ? (
              <>
                <EyeOff className="w-4 h-4 text-purple-200" />
                <span>Recall Mode ON (Formulas Hidden)</span>
              </>
            ) : (
              <>
                <Eye className="w-4 h-4 text-sky-300" />
                <span>Test Memory (Hide Formulas)</span>
              </>
            )}
          </button>
        </div>

        {/* Chapter / Domain Tabs */}
        <div className="space-y-2">
          <div className="text-xs font-bold text-sky-200/80 uppercase tracking-wider flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-sky-400" />
            <span>Chapter Filter:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedDomain('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                selectedDomain === 'all'
                  ? 'bg-sky-500 text-white shadow-xs'
                  : 'bg-[#041a2e] text-sky-200 hover:bg-[#082a4a] border border-sky-500/30'
              }`}
            >
              All Chapters ({SAT_FORMULAS_DATA.length})
            </button>
            {FORMULA_DOMAINS.map((dom) => (
              <button
                key={dom.id}
                onClick={() => setSelectedDomain(dom.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                  selectedDomain === dom.id
                    ? 'bg-sky-500 text-white shadow-xs ring-1 ring-sky-300'
                    : 'bg-[#041a2e] text-sky-200 hover:bg-[#082a4a] border border-sky-500/30'
                }`}
              >
                <span>{dom.title}</span>
                <span className="text-[10px] opacity-75 font-mono">({dom.units})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Difficulty Tier Filters */}
        <div className="space-y-2 pt-2 border-t border-sky-500/20">
          <div className="text-xs font-bold text-sky-200/80 uppercase tracking-wider flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-amber-400" />
            <span>Difficulty Tier Filter:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedDifficulty('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                selectedDifficulty === 'all'
                  ? 'bg-slate-200 text-slate-950 font-black'
                  : 'bg-[#041a2e] text-sky-200 hover:bg-[#082a4a] border border-sky-500/30'
              }`}
            >
              All Tiers ({SAT_FORMULAS_DATA.length})
            </button>
            <button
              onClick={() => setSelectedDifficulty('foundations')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                selectedDifficulty === 'foundations'
                  ? 'bg-emerald-600 text-white font-black shadow-xs ring-1 ring-emerald-300'
                  : 'bg-emerald-950/30 text-emerald-300 hover:bg-emerald-900/40 border border-emerald-500/30'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Foundations (Direct)</span>
            </button>
            <button
              onClick={() => setSelectedDifficulty('medium')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                selectedDifficulty === 'medium'
                  ? 'bg-amber-600 text-white font-black shadow-xs ring-1 ring-amber-300'
                  : 'bg-amber-950/30 text-amber-300 hover:bg-amber-900/40 border border-amber-500/30'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span>Medium (2-Step / Reverse)</span>
            </button>
            <button
              onClick={() => setSelectedDifficulty('advanced')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                selectedDifficulty === 'advanced'
                  ? 'bg-rose-600 text-white font-black shadow-xs ring-1 ring-rose-300'
                  : 'bg-rose-950/30 text-rose-300 hover:bg-rose-900/40 border border-rose-500/30'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-rose-400"></span>
              <span>Advanced (Parametric Traps)</span>
            </button>
          </div>
        </div>
      </div>

      {/* FORMULA GRID */}
      {filteredFormulas.length === 0 ? (
        <div className="p-8 text-center rounded-2xl bg-[#041a2e] border border-sky-400/30 space-y-2">
          <Calculator className="w-8 h-8 text-sky-400 mx-auto opacity-60" />
          <p className="text-sm font-bold text-sky-200">No formulas match your search or filter.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedDomain('all');
              setSelectedDifficulty('all');
            }}
            className="text-xs font-bold text-amber-300 hover:underline cursor-pointer"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {filteredFormulas.map((item) => {
            const diffStyle = getDifficultyBadge(item.difficulty);
            const isHidden = hideFormulasMode && !revealedFormulaIds[item.id];
            const isExampleExpanded = !!expandedExampleIds[item.id];
            const isCopied = copiedFormulaId === item.id;

            return (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className={`rounded-2xl border-2 border-sky-500/30 bg-gradient-to-br ${diffStyle.gradientClass} p-5 sm:p-6 shadow-sm hover:shadow-md ${diffStyle.borderHover} transition-all space-y-4 flex flex-col justify-between backdrop-blur-md`}
              >
                <div className="space-y-3.5">
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-sky-400/20 text-sky-200 border border-sky-300/30 font-['JetBrains_Mono']">
                          {item.domainTitle}
                        </span>
                        <span className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full border flex items-center gap-1.5 font-['JetBrains_Mono'] ${diffStyle.pillClass}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${diffStyle.dotClass}`}></span>
                          <span>{diffStyle.label}</span>
                        </span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white font-luxury">
                        {item.name}
                      </h3>
                    </div>

                    <button
                      onClick={() => handleCopyFormula(item.id, item.formula)}
                      title="Copy formula"
                      className="p-2 rounded-xl bg-[#041a2e] hover:bg-[#093259] border border-sky-400/30 text-sky-200 hover:text-white transition active:scale-95 cursor-pointer shrink-0"
                    >
                      {isCopied ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* FORMULA DISPLAY BOX */}
                  <div className="relative overflow-hidden rounded-xl bg-[#021324] border border-sky-400/40 p-4 text-center">
                    {isHidden ? (
                      <div className="py-2 space-y-2">
                        <p className="text-xs font-bold text-purple-300">Formula Hidden (Recall Quiz Mode)</p>
                        <button
                          onClick={() => toggleReveal(item.id)}
                          className="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-xs cursor-pointer transition"
                        >
                          Reveal Formula
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-1.5">
                        <div className="font-['JetBrains_Mono'] text-base sm:text-lg font-black text-amber-300 tracking-wide select-all">
                          {item.formula}
                        </div>
                        <p className="text-[11px] text-sky-200/80 font-medium">
                          {item.meaning}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* WHY DIFFICULTY DIFFERS (THE CORE EXPLANATION) */}
                  <div className="p-3.5 rounded-xl bg-[#04192d]/80 border border-sky-500/25 space-y-2 text-xs">
                    <div className="font-bold text-sky-200 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>How Difficulty Evolves For This Formula:</span>
                    </div>

                    <div className="space-y-1.5 text-[11px] text-slate-300">
                      <div className="flex items-start gap-1.5">
                        <span className="font-bold text-emerald-400 shrink-0 font-['JetBrains_Mono']">[Tier 1]:</span>
                        <span>{item.tierBreakdown.foundations}</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <span className="font-bold text-amber-400 shrink-0 font-['JetBrains_Mono']">[Tier 2]:</span>
                        <span>{item.tierBreakdown.medium}</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <span className="font-bold text-rose-400 shrink-0 font-['JetBrains_Mono']">[Tier 3]:</span>
                        <span>{item.tierBreakdown.advanced}</span>
                      </div>
                    </div>
                  </div>

                  {/* DESMOS SHORTCUT & TRAP WARNING BADGES */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-xl bg-[#06243f] border border-sky-400/30 flex items-start gap-2">
                      <Zap className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-extrabold text-amber-300 text-[10px] uppercase tracking-wider block font-['JetBrains_Mono']">
                          Desmos Hack:
                        </span>
                        <p className="text-[11px] text-sky-100/90 leading-tight mt-0.5">
                          {item.desmosShortcut}
                        </p>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-[#2a0b12]/60 border border-rose-500/30 flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="font-extrabold text-rose-300 text-[10px] uppercase tracking-wider block font-['JetBrains_Mono']">
                          Exam Trap:
                        </span>
                        <p className="text-[11px] text-rose-100/90 leading-tight mt-0.5">
                          {item.trapWarning}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ACCORDION: SAT EXAM QUESTION & EXPLANATION */}
                <div className="pt-3 border-t border-sky-500/20">
                  <button
                    onClick={() => toggleExample(item.id)}
                    className="w-full flex items-center justify-between text-xs font-bold text-sky-300 hover:text-white transition cursor-pointer py-1"
                  >
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-amber-400" />
                      <span>{isExampleExpanded ? 'Hide SAT Practice Problem' : 'View SAT Practice Problem'}</span>
                    </span>
                    {isExampleExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>

                  <AnimatePresence>
                    {isExampleExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden pt-2 space-y-2 text-xs"
                      >
                        <div className="p-3 rounded-xl bg-[#021324] border border-sky-400/30 space-y-1.5">
                          <p className="font-semibold text-slate-200">
                            <strong className="text-amber-300">Question: </strong>
                            {item.satExample.question}
                          </p>
                          <p className="text-emerald-300 font-bold">
                            <strong className="text-emerald-400">Answer: </strong>
                            {item.satExample.answer}
                          </p>
                          <div className="pt-1 border-t border-sky-500/20 text-[11px] text-sky-200">
                            <span className="font-bold text-amber-400">💡 10-Second Pro Tip: </span>
                            {item.satExample.proTip}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      )}
    </div>
  );
};
