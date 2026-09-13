'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Zap, 
  RotateCw, 
  CheckCircle2, 
  AlertTriangle, 
  ChevronLeft, 
  ChevronRight, 
  Shuffle, 
  Sparkles, 
  Filter, 
  HelpCircle, 
  Flame,
  Award,
  BookOpen,
  Calculator,
  RefreshCcw
} from 'lucide-react';
import { FLASHCARD_DECK, Flashcard } from '../data/flashcardsData';

const STORAGE_KEY = 'anti_burnout_flashcards_mastery_v1';

export const FlashcardsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'math' | 'reading-writing'>('all');
  const [onlyNeedsReview, setOnlyNeedsReview] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [mastery, setMastery] = useState<Record<string, 'mastered' | 'review'>>({});

  // Load saved mastery from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setMastery(JSON.parse(saved));
      }
    } catch {
      // ignore
    }
  }, []);

  const saveMastery = (cardId: string, status: 'mastered' | 'review') => {
    const updated = { ...mastery, [cardId]: status };
    setMastery(updated);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // ignore
    }
  };

  const filteredCards = useMemo(() => {
    return FLASHCARD_DECK.filter((card) => {
      if (activeCategory !== 'all' && card.category !== activeCategory) return false;
      if (onlyNeedsReview && mastery[card.id] === 'mastered') return false;
      return true;
    });
  }, [activeCategory, onlyNeedsReview, mastery]);

  // Keep index in bounds
  const currentCard: Flashcard | undefined = filteredCards[currentIndex] || filteredCards[0];

  const handleNext = () => {
    setIsFlipped(false);
    setShowHint(false);
    setCurrentIndex((prev) => (prev + 1) % (filteredCards.length || 1));
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setShowHint(false);
    setCurrentIndex((prev) => (prev - 1 + filteredCards.length) % (filteredCards.length || 1));
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    setShowHint(false);
    if (filteredCards.length > 1) {
      const randomIdx = Math.floor(Math.random() * filteredCards.length);
      setCurrentIndex(randomIdx);
    }
  };

  const masteredCount = useMemo(() => {
    return FLASHCARD_DECK.filter((c) => mastery[c.id] === 'mastered').length;
  }, [mastery]);

  const masteryPercent = Math.round((masteredCount / FLASHCARD_DECK.length) * 100);

  return (
    <div className="space-y-6">
      {/* Top Banner & Mastery Progress */}
      <div className="bg-gradient-to-r from-[#0d2a1b] via-[#103824] to-[#072417] border-2 border-emerald-500/40 rounded-3xl p-5 sm:p-6 shadow-grave text-white relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 relative z-10">
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[11px] font-black uppercase px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/30 font-['JetBrains_Mono']">
                Active Recall Engine
              </span>
              <span className="text-[11px] text-amber-300 font-extrabold font-['JetBrains_Mono'] flex items-center gap-1">
                <Flame className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                Nov 7 Exam Countdown Ready
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-luxury tracking-tight flex items-center gap-2 text-white">
              <Sparkles className="w-6 h-6 text-emerald-400" />
              <span>High-Yield SAT Formula & Grammar Deck</span>
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100/90 max-w-2xl leading-relaxed">
              Active recall beats passive note re-reading by 300%. Test your memory first, tap to reveal the verified SAT rule and trap alert, and mark what needs drill.
            </p>
          </div>

          {/* Mastery Counter Card */}
          <div className="bg-emerald-950/80 border border-emerald-400/40 rounded-2xl p-4 min-w-[200px] flex flex-col justify-between shadow-2xs">
            <div className="flex items-center justify-between text-xs font-black uppercase font-['JetBrains_Mono'] text-emerald-200">
              <span>Deck Mastery</span>
              <span className="text-emerald-400 text-sm">{masteryPercent}%</span>
            </div>
            <div className="w-full h-2.5 bg-emerald-900/80 rounded-full overflow-hidden my-2 border border-emerald-500/30">
              <div 
                className="h-full bg-gradient-to-r from-emerald-400 to-teal-300 transition-all duration-300 rounded-full"
                style={{ width: `${masteryPercent}%` }}
              />
            </div>
            <div className="flex items-center justify-between text-[11px] font-bold text-emerald-300/90 font-['JetBrains_Mono']">
              <span>{masteredCount} Mastered</span>
              <span>{FLASHCARD_DECK.length - masteredCount} To Review</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Navigation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-white/95 p-3.5 rounded-2xl border-2 border-emerald-700/20 shadow-xs">
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => { setActiveCategory('all'); setCurrentIndex(0); setIsFlipped(false); }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition min-h-[36px] cursor-pointer flex items-center gap-1.5 ${
              activeCategory === 'all'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <span>All Cards</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-white/20 font-['JetBrains_Mono']">
              {FLASHCARD_DECK.length}
            </span>
          </button>

          <button
            onClick={() => { setActiveCategory('math'); setCurrentIndex(0); setIsFlipped(false); }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition min-h-[36px] cursor-pointer flex items-center gap-1.5 ${
              activeCategory === 'math'
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100'
            }`}
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>Math (18)</span>
          </button>

          <button
            onClick={() => { setActiveCategory('reading-writing'); setCurrentIndex(0); setIsFlipped(false); }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition min-h-[36px] cursor-pointer flex items-center gap-1.5 ${
              activeCategory === 'reading-writing'
                ? 'bg-indigo-700 text-white shadow-xs'
                : 'bg-indigo-50 text-indigo-800 border border-indigo-200 hover:bg-indigo-100'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Reading & Writing (14)</span>
          </button>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => { setOnlyNeedsReview(!onlyNeedsReview); setCurrentIndex(0); setIsFlipped(false); }}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-black transition min-h-[36px] cursor-pointer flex items-center gap-1.5 border ${
              onlyNeedsReview
                ? 'bg-amber-500 text-slate-950 border-amber-600 shadow-xs'
                : 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
            }`}
          >
            <Filter className="w-3.5 h-3.5" />
            <span>{onlyNeedsReview ? 'Showing: Needs Review' : 'Filter: Needs Review Only'}</span>
          </button>

          <button
            onClick={handleShuffle}
            title="Randomize card"
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition border border-slate-300 min-h-[36px] min-w-[36px] flex items-center justify-center cursor-pointer"
          >
            <Shuffle className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Flashcard Interactive Stage */}
      {filteredCards.length === 0 ? (
        <div className="p-12 text-center bg-emerald-50/70 border-2 border-dashed border-emerald-300 rounded-3xl space-y-3">
          <Award className="w-12 h-12 text-emerald-600 mx-auto" />
          <h3 className="text-xl font-bold text-slate-900 font-luxury">All Selected Cards Mastered!</h3>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            You have marked every card in this view as mastered. Switch filters or click below to review the full deck again.
          </p>
          <button
            onClick={() => setOnlyNeedsReview(false)}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-xs transition"
          >
            Show All Cards
          </button>
        </div>
      ) : currentCard ? (
        <div className="space-y-4">
          {/* Card Indicator Bar */}
          <div className="flex items-center justify-between text-xs font-['JetBrains_Mono'] text-slate-600 px-1">
            <span className="font-bold flex items-center gap-1.5">
              Card {currentIndex + 1} of {filteredCards.length}
              <span className={`px-2 py-0.5 rounded-md text-[10px] font-black ${
                currentCard.highYieldRank === 'S-Tier' 
                  ? 'bg-rose-100 text-rose-800 border border-rose-300' 
                  : 'bg-sky-100 text-sky-800 border border-sky-300'
              }`}>
                {currentCard.highYieldRank} Must-Know
              </span>
            </span>

            <span className="text-[11px] font-semibold text-slate-500">
              Tap card to flip • Spacebar works too
            </span>
          </div>

          {/* Interactive Card with Perspective */}
          <div 
            onClick={() => setIsFlipped(!isFlipped)}
            className="w-full min-h-[360px] sm:min-h-[400px] cursor-pointer select-none rounded-3xl relative transition-all duration-300 hover:shadow-xl"
            style={{ perspective: '1200px' }}
          >
            <div 
              className={`w-full h-full min-h-[360px] sm:min-h-[400px] rounded-3xl p-6 sm:p-8 flex flex-col justify-between border-3 transition-all duration-300 shadow-md ${
                !isFlipped
                  ? currentCard.category === 'math'
                    ? 'bg-gradient-to-br from-[#0c2e1f] via-[#103a27] to-[#072517] text-white border-emerald-400/50 hover:border-emerald-300'
                    : 'bg-gradient-to-br from-[#1b1c3e] via-[#242554] to-[#11122a] text-white border-indigo-400/50 hover:border-indigo-300'
                  : 'bg-white text-slate-900 border-emerald-500/70 shadow-lg'
              }`}
            >
              {/* FRONT OF CARD */}
              {!isFlipped ? (
                <div className="space-y-4 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center justify-between gap-2 border-b border-white/15 pb-3">
                      <span className="text-xs font-black uppercase font-['JetBrains_Mono'] tracking-wider text-emerald-300 flex items-center gap-1.5">
                        {currentCard.category === 'math' ? <Calculator className="w-4 h-4" /> : <BookOpen className="w-4 h-4" />}
                        <span>{currentCard.subCategory}</span>
                      </span>
                      <span className="text-[11px] font-bold text-slate-300 bg-white/10 px-2.5 py-1 rounded-lg font-['JetBrains_Mono']">
                        Question Prompt
                      </span>
                    </div>

                    <div className="mt-6 space-y-3">
                      <h3 className="text-xl sm:text-2xl font-bold font-luxury text-white tracking-tight">
                        {currentCard.front.title}
                      </h3>
                      <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed font-medium">
                        {currentCard.front.prompt}
                      </p>
                    </div>
                  </div>

                  {/* Hint Drawer & Flip Indicator */}
                  <div className="space-y-3 pt-4 border-t border-white/15">
                    {currentCard.front.hint && (
                      <div onClick={(e) => { e.stopPropagation(); setShowHint(!showHint); }}>
                        <button 
                          type="button"
                          className="text-xs font-bold text-amber-300 hover:text-amber-200 flex items-center gap-1 cursor-pointer"
                        >
                          <HelpCircle className="w-3.5 h-3.5" />
                          <span>{showHint ? 'Hide Hint' : 'Need a hint? Click here'}</span>
                        </button>
                        {showHint && (
                          <motion.p 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="mt-1.5 text-xs text-amber-200/90 bg-amber-950/60 p-3 rounded-xl border border-amber-400/30"
                          >
                            💡 {currentCard.front.hint}
                          </motion.p>
                        )}
                      </div>
                    )}

                    <div className="flex items-center justify-between text-xs text-slate-300/80 font-['JetBrains_Mono']">
                      <span className="flex items-center gap-1 text-emerald-300 font-bold">
                        <RotateCw className="w-3.5 h-3.5" /> Click anywhere to reveal answer
                      </span>
                      {mastery[currentCard.id] === 'mastered' ? (
                        <span className="text-emerald-400 font-black flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Previously Mastered
                        </span>
                      ) : mastery[currentCard.id] === 'review' ? (
                        <span className="text-amber-400 font-black flex items-center gap-1">
                          <AlertTriangle className="w-3.5 h-3.5" /> Flagged for Review
                        </span>
                      ) : (
                        <span className="text-slate-400">Unrated</span>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                /* BACK OF CARD (REVEALED ANSWER) */
                <div className="space-y-4 flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between gap-2 border-b border-slate-200 pb-3">
                      <span className="text-xs font-black uppercase font-['JetBrains_Mono'] tracking-wider text-emerald-700 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>{currentCard.front.title} • Verified SAT Rule</span>
                      </span>
                      <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg font-['JetBrains_Mono']">
                        Answer & Trap
                      </span>
                    </div>

                    {/* Formula / Rule Banner */}
                    <div className="bg-slate-900 text-emerald-300 p-4 rounded-2xl border-2 border-emerald-500/50 font-['JetBrains_Mono'] text-sm sm:text-base font-bold shadow-xs whitespace-pre-line leading-relaxed">
                      {currentCard.back.formulaOrRule}
                    </div>

                    {/* Plain English Explanation */}
                    <div className="space-y-1">
                      <h4 className="text-xs font-black uppercase text-slate-500 tracking-wider font-['JetBrains_Mono']">
                        How it Works
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                        {currentCard.back.explanation}
                      </p>
                    </div>

                    {/* SAT Example */}
                    {currentCard.back.satExample && (
                      <div className="bg-emerald-50 p-3.5 rounded-xl border border-emerald-200 text-xs text-emerald-950 font-medium">
                        <strong className="text-emerald-900 font-bold block mb-0.5">Real SAT Example:</strong>
                        <span className="whitespace-pre-line">{currentCard.back.satExample}</span>
                      </div>
                    )}

                    {/* Trap Alert */}
                    {currentCard.back.trapToAvoid && (
                      <div className="bg-rose-50 p-3 rounded-xl border border-rose-200 text-xs text-rose-950 font-medium flex items-start gap-2">
                        <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-rose-900 font-bold block">College Board Trap:</strong>
                          <span>{currentCard.back.trapToAvoid}</span>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="pt-3 border-t border-slate-200 text-right text-xs text-slate-400 font-['JetBrains_Mono']">
                    Click to flip back
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Action Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white p-3.5 rounded-2xl border-2 border-slate-200 shadow-xs">
            {/* Previous & Next */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handlePrev}
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 transition min-h-[44px] cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Prev</span>
              </button>

              <button
                onClick={handleNext}
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 transition min-h-[44px] cursor-pointer"
              >
                <span>Next</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Self-Rating Mastery Buttons */}
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={() => {
                  saveMastery(currentCard.id, 'review');
                  handleNext();
                }}
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-800 border-2 border-rose-300 font-bold text-xs flex items-center justify-center gap-1.5 transition min-h-[44px] cursor-pointer"
              >
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                <span>Needs Review</span>
              </button>

              <button
                onClick={() => {
                  saveMastery(currentCard.id, 'mastered');
                  handleNext();
                }}
                className="flex-1 sm:flex-initial px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition min-h-[44px] cursor-pointer shadow-xs"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Got It! Mastered</span>
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
