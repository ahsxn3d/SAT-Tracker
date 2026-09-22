'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bot, 
  Send, 
  Sparkles, 
  Plus, 
  Trash2, 
  Calendar, 
  BookOpen, 
  ShieldAlert, 
  CheckCircle2, 
  RefreshCw, 
  Clock, 
  ArrowRight, 
  AlertCircle,
  MessageSquare,
  Zap,
  RotateCcw,
  Check,
  ChevronRight
} from 'lucide-react';
import { AIMode, AIChatMessageItem, AIChatSessionItem, ErrorLogEntry } from '../types';

interface AICopilotSectionProps {
  currentDateStr?: string;
  onTaskShifted?: (taskId: string, targetDate: string) => void;
  onBatchTaskShifted?: (batch: Record<string, string>) => void;
  onErrorLogged?: (error: ErrorLogEntry) => void;
  onNavigateToCalendar?: () => void;
  onNavigateToErrorLog?: () => void;
}

export const CHAPTER_OPTIONS = [
  { id: 'U5', label: 'Unit 5 / Chapter 5: Geometry & Trig (Area, Circles & Angles — 6 lessons)' },
  { id: 'U3', label: 'Unit 3 / Chapter 3: Problem Solving & Data (Ratios & Percentages — 9 lessons)' },
  { id: 'U4', label: 'Unit 4 / Chapter 4: Advanced Math (Quadratics & Parabolas — 13 lessons)' },
  { id: 'U6', label: 'Unit 6 / Chapter 6: Algebra (Linear Equations & Systems — 8 lessons)' },
  { id: 'U7', label: 'Unit 7 / Chapter 7: Problem Solving (Complex Probability & Data — 10 lessons)' },
  { id: 'U8', label: 'Unit 8 / Chapter 8: Advanced Math (Polynomials & Exponents — 13 lessons)' },
  { id: 'U9', label: 'Unit 9 / Chapter 9: Geometry & Trig (Right Triangles & Circles — 6 lessons)' },
  { id: 'U10', label: 'Unit 10 / Chapter 10: Algebra (Advanced Linear Modeling — 8 lessons)' },
  { id: 'U11', label: 'Unit 11 / Chapter 11: Problem Solving (Statistics & Spread — 10 lessons)' },
  { id: 'U12', label: 'Unit 12 / Chapter 12: Advanced Math (Radicals & Rational Equations — 13 lessons)' },
  { id: 'U13', label: 'Unit 13 / Chapter 13: Geometry & Trig (Circle Equations & Radians — 6 lessons)' },
];

export const DESTINATION_OPTIONS = [
  { id: '2026-09-27', label: 'Next Sunday, Sep 27 (Week 2 Buffer Day)' },
  { id: '2026-10-04', label: 'Sunday, Oct 4 (Week 3 Buffer Day)' },
  { id: '2026-10-11', label: 'Final Sunday, Oct 11 (Week 4 Buffer Day)' },
  { id: '2026-09-20', label: 'Sunday, Sep 20 (Week 1 Buffer Day)' },
  { id: 'tomorrow', label: 'Tomorrow' },
  { id: 'day-20', label: 'Day 20 (Fri Oct 2)' },
  { id: 'day-22', label: 'Day 22 (Sun Oct 4)' },
  { id: 'day-25', label: 'Day 25 (Wed Oct 7)' },
];

const AI_MODES: {
  id: AIMode;
  title: string;
  badge: string;
  icon: any;
  colorClass: string;
  activeClass: string;
  description: string;
  quickPrompts: string[];
}[] = [
  {
    id: 'plan_modifier',
    title: 'Plan Modifier',
    badge: 'Schedule Shift Tools',
    icon: Calendar,
    colorClass: 'text-indigo-700 bg-indigo-100 border-indigo-300',
    activeClass: 'bg-indigo-600 text-white shadow-md ring-2 ring-indigo-300',
    description: 'Tell the AI to move lessons or chapters from one day to another (e.g. shift Chapter 5 to Sunday).',
    quickPrompts: [
      'Shift Math Chapter 5 to this Sunday',
      'Move today\'s Reading & Writing lesson to tomorrow',
      'Postpone my geometry review to my next buffer day',
      'Move Day 22 math practice to Sunday, Sept 27'
    ]
  },
  {
    id: 'teacher',
    title: 'SAT Master Teacher',
    badge: '26 Formulas & Desmos',
    icon: BookOpen,
    colorClass: 'text-emerald-800 bg-emerald-100 border-emerald-300',
    activeClass: 'bg-[#1a3717] text-white shadow-md ring-2 ring-[#8ec284]',
    description: 'Ask any SAT Math or Reading/Writing concept question. Uses the 26 formulas & Desmos shortcuts.',
    quickPrompts: [
      'Explain vertex form: y = a(x - h)² + k and how to find axis of symmetry',
      'What is the quickest Desmos trick for systems of linear equations?',
      'How does College Board trap students on circle equations (x - h)² + (y - k)² = r²?',
      'Explain transition word questions on the Digital SAT Reading'
    ]
  },
  {
    id: 'coach',
    title: 'Anti-Burnout Coach',
    badge: '8:30 PM Anchor Defense',
    icon: ShieldAlert,
    colorClass: 'text-amber-900 bg-amber-100 border-amber-300',
    activeClass: 'bg-amber-500 text-slate-950 shadow-md ring-2 ring-amber-300 font-black',
    description: 'Pacing calibration, fatigue management, and keeping you grounded without exhausting yourself.',
    quickPrompts: [
      'I studied for 2 hours and feel exhausted, how do I recover?',
      'How do I protect my 8:30 PM anchor time when school homework piles up?',
      'Give me an anti-panic breathing protocol before starting Bluebook Test #2',
      'I feel guilty taking Sunday buffer days off, why is rest necessary?'
    ]
  },
  {
    id: 'error_worker',
    title: 'Error Log Worker',
    badge: 'Direct Database Logger',
    icon: Zap,
    colorClass: 'text-rose-900 bg-rose-100 border-rose-300',
    activeClass: 'bg-rose-600 text-white shadow-md ring-2 ring-rose-300',
    description: 'Tell the AI about any question you missed. It extracts root causes and saves it to your Error Log.',
    quickPrompts: [
      'Log an error for Bluebook Test 1 Module 2 Q14: missed due to negative sign error, takeaway is use parentheses',
      'Log mistake in Khan drill today: rushed through circle radius and used diameter instead of radius',
      'Log Reading question missed: didn\'t read the final sentence of the transition passage',
      'Log mistake: forgot that standard deviation measures spread around the mean'
    ]
  }
];

export const AICopilotSection: React.FC<AICopilotSectionProps> = ({
  currentDateStr = '2026-09-22',
  onTaskShifted,
  onBatchTaskShifted,
  onErrorLogged,
  onNavigateToCalendar,
  onNavigateToErrorLog
}) => {
  const [activeMode, setActiveMode] = useState<AIMode>('plan_modifier');
  const [sessions, setSessions] = useState<AIChatSessionItem[]>([]);
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null);
  const [messages, setMessages] = useState<AIChatMessageItem[]>([]);
  const [inputPrompt, setInputPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  // Upper Dropdown Chapter Shift state (Plan Modifier mode)
  const [selectedChapterUnit, setSelectedChapterUnit] = useState<string>('U5');
  const [selectedDestination, setSelectedDestination] = useState<string>('2026-09-27');

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  // 1. Fetch saved sessions on mount
  useEffect(() => {
    fetch('/api/ai/sessions')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.sessions && data.sessions.length > 0) {
          setSessions(data.sessions);
          // Pick latest session
          const latest = data.sessions[0];
          setCurrentSessionId(latest.id);
          setActiveMode((latest.mode as AIMode) || 'plan_modifier');
          loadSessionMessages(latest.id);
        }
      })
      .catch((err) => console.warn('Could not load AI sessions:', err));
  }, []);

  // 2. Load messages for a session
  const loadSessionMessages = (id: string) => {
    fetch(`/api/ai/sessions/${id}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data?.messages) {
          setMessages(data.messages);
        }
      })
      .catch((err) => console.warn('Could not load session messages:', err));
  };

  // 3. Start a new chat
  const handleNewChat = () => {
    setCurrentSessionId(null);
    setMessages([]);
    setInputPrompt('');
    textareaRef.current?.focus();
  };

  // 4. Delete session
  const handleDeleteSession = async (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    try {
      await fetch(`/api/ai/sessions/${id}`, { method: 'DELETE' });
      setSessions((prev) => prev.filter((s) => s.id !== id));
      if (currentSessionId === id) {
        handleNewChat();
      }
    } catch (err) {
      console.error('Error deleting session:', err);
    }
  };

  // Push full chapter / unit to target destination
  const handlePushChapter = () => {
    const chObj = CHAPTER_OPTIONS.find((c) => c.id === selectedChapterUnit) || CHAPTER_OPTIONS[0];
    const destObj = DESTINATION_OPTIONS.find((d) => d.id === selectedDestination) || DESTINATION_OPTIONS[0];
    const prompt = `Please shift all lessons in ${chObj.label.split('(')[0].trim()} to ${destObj.label.split('(')[0].trim()}`;
    handleSendMessage(prompt);
  };

  // 5. Send message
  const handleSendMessage = async (customPrompt?: string) => {
    const textToSend = customPrompt || inputPrompt;
    if (!textToSend.trim() || loading) return;

    const userMessage: AIChatMessageItem = {
      id: 'msg-' + Date.now(),
      sessionId: currentSessionId || 'temp',
      role: 'user',
      content: textToSend,
      createdAt: new Date().toISOString()
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputPrompt('');
    setLoading(true);

    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: currentSessionId,
          mode: activeMode,
          message: textToSend,
          currentDateStr
        })
      });

      const data = await res.json();

      if (res.ok && data.message) {
        const assistantMessage: AIChatMessageItem = {
          id: 'msg-asst-' + Date.now(),
          sessionId: data.sessionId || currentSessionId || 'temp',
          role: 'assistant',
          content: data.message,
          actionData: data.actionData,
          createdAt: new Date().toISOString()
        };

        setMessages((prev) => [...prev, assistantMessage]);

        // If a new session was created on server
        if (data.sessionId && data.sessionId !== currentSessionId) {
          setCurrentSessionId(data.sessionId);
          setSessions((prev) => [
            {
              id: data.sessionId,
              mode: activeMode,
              title: data.sessionTitle || textToSend.slice(0, 36),
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString()
            },
            ...prev
          ]);
        }

        // Trigger parent state updates for tools
        if (data.actionData) {
          if (data.actionData.action === 'shift_chapter' && onBatchTaskShifted && Array.isArray(data.actionData.tasks)) {
            const batch: Record<string, string> = {};
            for (const t of data.actionData.tasks) {
              batch[t.id] = data.actionData.to;
            }
            onBatchTaskShifted(batch);
          } else if (data.actionData.action === 'shift_lesson' && onTaskShifted) {
            onTaskShifted(data.actionData.taskId, data.actionData.to);
          } else if (data.actionData.action === 'log_error' && onErrorLogged) {
            onErrorLogged(data.actionData.errorLog);
          }
        }
      } else {
        const errMessage: AIChatMessageItem = {
          id: 'msg-err-' + Date.now(),
          sessionId: currentSessionId || 'temp',
          role: 'assistant',
          content: `⚠️ ${data.error || 'Unable to connect with Gemini model. Please check your API key.'}`,
          createdAt: new Date().toISOString()
        };
        setMessages((prev) => [...prev, errMessage]);
      }
    } catch (err: any) {
      const errMessage: AIChatMessageItem = {
        id: 'msg-err-' + Date.now(),
        sessionId: currentSessionId || 'temp',
        role: 'assistant',
        content: `⚠️ Network error: ${err.message || 'Failed to reach AI service.'}`,
        createdAt: new Date().toISOString()
      };
      setMessages((prev) => [...prev, errMessage]);
    } finally {
      setLoading(false);
      textareaRef.current?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const currentModeInfo = AI_MODES.find((m) => m.id === activeMode) || AI_MODES[0];

  return (
    <div className="w-full space-y-5">
      {/* TOP CO-PILOT BANNER */}
      <div className="ios-glass-card rounded-3xl p-5 sm:p-6 border-2 border-[#a6c4a1] shadow-grave-card relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-[#1a3717] text-white flex items-center justify-center shadow-md border border-[#8ec284] shrink-0">
              <Bot className="w-6 h-6 text-emerald-300" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-xl sm:text-2xl font-black text-slate-950 font-luxury tracking-tight">
                  Gemini AI Co-Pilot
                </h2>
                <span className="text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 font-['JetBrains_Mono']">
                  gemini-3.6-flash
                </span>
              </div>
              <p className="text-xs text-slate-700 font-medium">
                Live schedule adjustments, 26-formula SAT tutor, and automated error logging worker.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="px-3.5 py-2 rounded-2xl bg-matcha-input hover:bg-matcha-sub border border-[#a6c4a1] text-slate-900 text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <MessageSquare className="w-4 h-4 text-emerald-700" />
              <span>Saved Chats ({sessions.length})</span>
            </button>
            <button
              onClick={handleNewChat}
              className="px-3.5 py-2 rounded-2xl bg-[#1a3717] hover:bg-[#23481f] text-white text-xs font-black transition flex items-center gap-1.5 cursor-pointer shadow-sm active:scale-95"
            >
              <Plus className="w-4 h-4 text-emerald-300" />
              <span>New Thread</span>
            </button>
          </div>
        </div>

        {/* 4 SPECIALIZED AI MODES SELECTOR PILLS */}
        <div className="pt-4 border-t border-[#a6c4a1]/50 mt-4 space-y-2">
          <div className="text-[11px] font-black text-slate-700 uppercase tracking-wider flex items-center gap-1.5 font-['JetBrains_Mono']">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Select Specialized AI Mode:</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
            {AI_MODES.map((mode) => {
              const Icon = mode.icon;
              const isActive = activeMode === mode.id;

              return (
                <button
                  key={mode.id}
                  onClick={() => setActiveMode(mode.id)}
                  className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between gap-1 active:scale-98 ${
                    isActive
                      ? `${mode.activeClass} border-transparent`
                      : 'bg-white/80 hover:bg-white text-slate-900 border-[#a6c4a1] shadow-xs'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-700'}`} />
                      <span className="text-xs font-black">{mode.title}</span>
                    </div>
                  </div>
                  <span className={`text-[10px] font-bold ${isActive ? 'text-white/90' : 'text-slate-600'}`}>
                    {mode.badge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* INTERACTIVE CHAPTER / UNIT QUICK-SHIFT BAR (PLAN MODIFIER EXCLUSIVE) */}
          <AnimatePresence>
            {activeMode === 'plan_modifier' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.22 }}
                className="pt-4 border-t border-[#a6c4a1]/50 mt-3 space-y-3 overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="flex items-center gap-1.5 text-xs font-black text-indigo-950 font-['JetBrains_Mono']">
                    <Zap className="w-3.5 h-3.5 text-indigo-600 fill-indigo-600" />
                    <span>Chapter / Unit Fast-Shift Control:</span>
                  </div>
                  <span className="text-[11px] font-bold text-slate-600">
                    Batch-shift all lessons of a unit to Sunday or a specific day
                  </span>
                </div>

                <div className="p-3.5 sm:p-4 rounded-2xl bg-indigo-50/90 border-2 border-indigo-300 grid grid-cols-1 md:grid-cols-12 gap-3 items-center shadow-xs">
                  {/* Chapter Dropdown */}
                  <div className="md:col-span-5 space-y-1">
                    <label className="text-[10px] font-black uppercase text-indigo-950 tracking-wider font-['JetBrains_Mono'] flex items-center gap-1">
                      <BookOpen className="w-3 h-3 text-indigo-700" />
                      <span>Select Chapter / Unit:</span>
                    </label>
                    <select
                      value={selectedChapterUnit}
                      onChange={(e) => setSelectedChapterUnit(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-white border-2 border-indigo-300 text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-600 shadow-xs cursor-pointer"
                    >
                      {CHAPTER_OPTIONS.map((opt) => (
                        <option key={opt.id} value={opt.id}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Destination Dropdown */}
                  <div className="md:col-span-4 space-y-1">
                    <label className="text-[10px] font-black uppercase text-indigo-950 tracking-wider font-['JetBrains_Mono'] flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-indigo-700" />
                      <span>Target Destination:</span>
                    </label>
                    <select
                      value={selectedDestination}
                      onChange={(e) => setSelectedDestination(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-white border-2 border-indigo-300 text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-600 shadow-xs cursor-pointer"
                    >
                      {DESTINATION_OPTIONS.map((dest) => (
                        <option key={dest.id} value={dest.id}>
                          {dest.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Push Chapter Button */}
                  <div className="md:col-span-3 pt-2 sm:pt-0 sm:self-end">
                    <button
                      onClick={handlePushChapter}
                      disabled={loading}
                      className="w-full py-2.5 px-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black transition-all shadow-sm active:scale-95 cursor-pointer flex items-center justify-center gap-1.5 disabled:opacity-50"
                    >
                      <Zap className="w-3.5 h-3.5 text-indigo-200 fill-indigo-200" />
                      <span>Push Full Chapter &rarr;</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* MAIN CHAT & SIDEBAR CONTAINER */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
        {/* SIDEBAR: SAVED SESSIONS (DESKTOP & MOBILE COLLAPSIBLE) */}
        {(sidebarOpen || true) && (
          <div className={`lg:col-span-4 ${sidebarOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="ios-glass-card rounded-3xl p-4 border-2 border-[#a6c4a1] space-y-3 shadow-grave-card">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-black uppercase tracking-wider text-slate-800 font-['JetBrains_Mono'] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Chat Threads</span>
                </span>
                <span className="text-[11px] font-bold text-slate-600">
                  {sessions.length} saved
                </span>
              </div>

              {sessions.length === 0 ? (
                <div className="p-6 text-center rounded-2xl bg-matcha-sub/70 border border-dashed border-[#a6c4a1] text-xs text-slate-600 font-medium">
                  No saved conversations yet. Ask the AI your first question!
                </div>
              ) : (
                <div className="space-y-1.5 max-h-[480px] overflow-y-auto pr-1">
                  {sessions.map((s) => {
                    const isSelected = currentSessionId === s.id;
                    const modeObj = AI_MODES.find((m) => m.id === s.mode) || AI_MODES[0];

                    return (
                      <div
                        key={s.id}
                        onClick={() => {
                          setCurrentSessionId(s.id);
                          setActiveMode((s.mode as AIMode) || 'plan_modifier');
                          loadSessionMessages(s.id);
                        }}
                        className={`p-3 rounded-2xl border text-left transition cursor-pointer flex items-center justify-between gap-2 group ${
                          isSelected
                            ? 'bg-[#1a3717] text-white border-[#1a3717] shadow-sm'
                            : 'bg-white/70 hover:bg-white text-slate-800 border-[#a6c4a1]/70'
                        }`}
                      >
                        <div className="truncate space-y-0.5 flex-1 min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className={`text-[9px] font-black uppercase px-2 py-0.2 rounded-full font-['JetBrains_Mono'] ${
                              isSelected ? 'bg-emerald-900 text-emerald-200' : modeObj.colorClass
                            }`}>
                              {modeObj.title}
                            </span>
                          </div>
                          <p className="text-xs font-bold truncate">
                            {s.title}
                          </p>
                        </div>

                        <button
                          onClick={(e) => handleDeleteSession(e, s.id)}
                          title="Delete thread"
                          className={`p-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition hover:bg-rose-500 hover:text-white cursor-pointer ${
                            isSelected ? 'text-white/80' : 'text-slate-400'
                          }`}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        )}

        {/* CHAT MESSAGES WINDOW */}
        <div className={`${sidebarOpen ? 'lg:col-span-8' : 'lg:col-span-8'} w-full space-y-4`}>
          <div className="ios-glass-card rounded-3xl border-2 border-[#a6c4a1] p-4 sm:p-6 shadow-grave-card flex flex-col min-h-[520px] max-h-[640px] justify-between">
            {/* MESSAGES LIST */}
            <div className="overflow-y-auto pr-2 space-y-4 flex-1">
              {messages.length === 0 ? (
                <div className="py-8 px-4 text-center space-y-4 my-auto">
                  <div className="w-16 h-16 rounded-3xl bg-matcha-sub border-2 border-[#a6c4a1] text-emerald-800 flex items-center justify-center mx-auto shadow-xs">
                    <currentModeInfo.icon className="w-8 h-8" />
                  </div>
                  <div className="space-y-1 max-w-md mx-auto">
                    <h3 className="text-lg font-black text-slate-900 font-luxury">
                      {currentModeInfo.title} Ready
                    </h3>
                    <p className="text-xs text-slate-600 font-medium">
                      {currentModeInfo.description}
                    </p>
                  </div>

                  {/* QUICK PROMPTS CHIPS */}
                  <div className="pt-2 space-y-2 max-w-lg mx-auto">
                    <div className="text-[11px] font-black text-slate-600 uppercase tracking-wider font-['JetBrains_Mono']">
                      Suggested Prompts:
                    </div>
                    <div className="flex flex-col gap-2">
                      {currentModeInfo.quickPrompts.map((prompt, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSendMessage(prompt)}
                          className="p-3 rounded-2xl bg-white/90 hover:bg-matcha-sub border border-[#a6c4a1] text-xs font-bold text-slate-800 text-left transition flex items-center justify-between gap-2 cursor-pointer shadow-xs active:scale-98 group"
                        >
                          <span>&ldquo;{prompt}&rdquo;</span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-slate-900 shrink-0" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                messages.map((msg, index) => {
                  const isUser = msg.role === 'user';

                  return (
                    <motion.div
                      key={msg.id || index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      {!isUser && (
                        <div className="w-8 h-8 rounded-2xl bg-[#1a3717] text-white flex items-center justify-center shrink-0 shadow-xs border border-[#8ec284] mt-1">
                          <Bot className="w-4 h-4 text-emerald-300" />
                        </div>
                      )}

                      <div className={`max-w-[85%] sm:max-w-[78%] space-y-2.5 ${isUser ? 'items-end' : 'items-start'}`}>
                        {/* MESSAGE BUBBLE */}
                        <div
                          className={`p-4 rounded-3xl text-xs sm:text-sm leading-relaxed shadow-xs ${
                            isUser
                              ? 'bg-[#1a3717] text-white rounded-tr-none font-medium'
                              : 'bg-white/95 text-slate-900 rounded-tl-none border border-[#a6c4a1] font-medium'
                          }`}
                        >
                          <div className="whitespace-pre-wrap select-text">
                            {msg.content}
                          </div>
                        </div>

                        {/* INTERACTIVE ACTION CARDS (TOOL EXECUTIONS) */}
                        {msg.actionData && (
                          <div className="space-y-2 w-full">
                            {msg.actionData.action === 'shift_chapter' && (
                              <div className="p-3.5 rounded-2xl bg-indigo-50 border-2 border-indigo-400 text-slate-950 space-y-2.5 shadow-xs">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-1.5 text-xs font-black text-indigo-950 font-['JetBrains_Mono']">
                                    <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                                    <span>Full Chapter Shift Executed ({msg.actionData.count} Lessons)</span>
                                  </div>
                                  <span className="text-[10px] font-black uppercase px-2 py-0.5 rounded-full bg-indigo-200 text-indigo-950 font-['JetBrains_Mono']">
                                    Batch Shifted
                                  </span>
                                </div>
                                <div className="text-xs space-y-1">
                                  <div>
                                    <span className="font-bold text-slate-600">Chapter:</span>{' '}
                                    <span className="font-black text-indigo-950">{msg.actionData.unitName}</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <span className="font-bold text-slate-600">Target Date:</span>
                                    <span className="px-2 py-0.5 rounded-lg bg-indigo-200 text-indigo-950 text-[11px] font-black font-mono">
                                      {msg.actionData.to}
                                    </span>
                                  </div>
                                </div>

                                {Array.isArray(msg.actionData.tasks) && msg.actionData.tasks.length > 0 && (
                                  <div className="p-2.5 rounded-xl bg-white/90 border border-indigo-200 space-y-1">
                                    <div className="text-[10px] font-black uppercase text-indigo-900 font-['JetBrains_Mono']">
                                      All Moved Lessons ({msg.actionData.tasks.length}):
                                    </div>
                                    <div className="max-h-28 overflow-y-auto space-y-1 text-[11px] pr-1">
                                      {msg.actionData.tasks.map((t: any, i: number) => (
                                        <div key={i} className="flex items-center justify-between text-slate-800 font-medium">
                                          <span className="truncate">&bull; {t.label}</span>
                                          <span className="text-[10px] text-slate-500 shrink-0 font-mono ml-2">from {t.from}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}

                                {onNavigateToCalendar && (
                                  <button
                                    onClick={onNavigateToCalendar}
                                    className="text-[11px] font-black text-indigo-800 hover:underline flex items-center gap-1 cursor-pointer pt-1"
                                  >
                                    <span>View on Calendar</span>
                                    <ChevronRight className="w-3 h-3" />
                                  </button>
                                )}
                              </div>
                            )}

                            {msg.actionData.action === 'shift_lesson' && (
                              <div className="p-3.5 rounded-2xl bg-emerald-50 border-2 border-emerald-400 text-slate-950 space-y-2 shadow-xs">
                                <div className="flex items-center gap-1.5 text-xs font-black text-emerald-900 font-['JetBrains_Mono']">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                  <span>Task Shift Executed in Database</span>
                                </div>
                                <div className="text-xs space-y-1">
                                  <div>
                                    <span className="font-bold text-slate-600">Lesson:</span>{' '}
                                    <span className="font-black text-slate-950">{msg.actionData.taskLabel}</span>
                                  </div>
                                  <div className="flex items-center gap-2 flex-wrap">
                                    <span className="px-2 py-0.5 rounded-lg bg-slate-200 text-[11px] font-bold">
                                      From: {msg.actionData.from}
                                    </span>
                                    <ArrowRight className="w-3.5 h-3.5 text-emerald-700" />
                                    <span className="px-2 py-0.5 rounded-lg bg-emerald-200 text-emerald-950 text-[11px] font-black">
                                      To: {msg.actionData.to}
                                    </span>
                                  </div>
                                </div>
                                {onNavigateToCalendar && (
                                  <button
                                    onClick={onNavigateToCalendar}
                                    className="text-[11px] font-black text-emerald-800 hover:underline flex items-center gap-1 cursor-pointer pt-1"
                                  >
                                    <span>View on Calendar</span>
                                    <ChevronRight className="w-3 h-3" />
                                  </button>
                                )}
                              </div>
                            )}

                            {msg.actionData.action === 'log_error' && (
                              <div className="p-3.5 rounded-2xl bg-rose-50 border-2 border-rose-300 text-slate-950 space-y-2 shadow-xs">
                                <div className="flex items-center gap-1.5 text-xs font-black text-rose-900 font-['JetBrains_Mono']">
                                  <CheckCircle2 className="w-4 h-4 text-rose-600" />
                                  <span>Recorded into Official Error Log</span>
                                </div>
                                <div className="text-xs space-y-1">
                                  <div className="font-bold text-slate-900">
                                    {msg.actionData.errorLog.testOrSection} &bull; {msg.actionData.errorLog.questionRef}
                                  </div>
                                  <div className="text-slate-700">
                                    <strong>Why Missed:</strong> {msg.actionData.errorLog.whyMissed}
                                  </div>
                                  <div className="text-rose-900 font-mono text-[11px] bg-white p-2 rounded-xl border border-rose-200">
                                    Rule: {msg.actionData.errorLog.takeawayRule}
                                  </div>
                                </div>
                                {onNavigateToErrorLog && (
                                  <button
                                    onClick={onNavigateToErrorLog}
                                    className="text-[11px] font-black text-rose-800 hover:underline flex items-center gap-1 cursor-pointer pt-1"
                                  >
                                    <span>Open Error Log Page</span>
                                    <ChevronRight className="w-3 h-3" />
                                  </button>
                                )}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  );
                })
              )}

              {loading && (
                <div className="flex gap-3 justify-start items-center">
                  <div className="w-8 h-8 rounded-2xl bg-[#1a3717] text-white flex items-center justify-center shrink-0 shadow-xs border border-[#8ec284]">
                    <Bot className="w-4 h-4 text-emerald-300 animate-pulse" />
                  </div>
                  <div className="p-3.5 rounded-2xl bg-white/90 border border-[#a6c4a1] flex items-center gap-2 text-xs font-bold text-slate-700">
                    <RefreshCw className="w-3.5 h-3.5 text-emerald-600 animate-spin" />
                    <span>Gemini is thinking and executing actions...</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* INPUT AREA */}
            <div className="pt-3 border-t border-[#a6c4a1]/50 space-y-2 mt-2">
              <div className="flex items-center justify-between text-[11px] text-slate-600 px-1 font-['JetBrains_Mono']">
                <span className="flex items-center gap-1 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Active Mode: {currentModeInfo.title}</span>
                </span>
                <span>Press Enter to send, Shift+Enter for new line</span>
              </div>

              <div className="relative flex items-end gap-2">
                <textarea
                  ref={textareaRef}
                  value={inputPrompt}
                  onChange={(e) => setInputPrompt(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder={
                    activeMode === 'plan_modifier'
                      ? 'e.g., Shift Math Chapter 5 from today (Day 22) to this Sunday...'
                      : activeMode === 'teacher'
                      ? 'e.g., Explain circle equation (x-h)²+(y-k)²=r² with a hard Bluebook example...'
                      : activeMode === 'coach'
                      ? 'e.g., I have 3 hours of homework tonight, how do I keep my 8:30 PM anchor time?'
                      : 'e.g., Log error for Bluebook Test 1 Q14: missed because I forgot the slope formula...'
                  }
                  rows={2}
                  className="w-full pl-4 pr-12 py-3 rounded-2xl bg-matcha-input border-2 border-[#a6c4a1] text-xs sm:text-sm text-slate-900 placeholder:text-slate-500 font-medium focus:outline-none focus:ring-2 focus:ring-[#1a3717] focus:border-[#1a3717] resize-none transition shadow-xs"
                />

                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputPrompt.trim() || loading}
                  className="absolute right-2.5 bottom-2.5 p-2 rounded-xl bg-[#1a3717] hover:bg-[#254e20] text-white disabled:opacity-40 disabled:hover:bg-[#1a3717] transition active:scale-95 cursor-pointer shadow-xs"
                  title="Send message"
                >
                  <Send className="w-4 h-4 text-emerald-300" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
