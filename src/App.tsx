'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { motion } from 'motion/react';
import { useSession } from 'next-auth/react';
import { 
  STUDY_PLAN_WEEKS, 
  INITIAL_PACKING_LIST,
  mergePackingListWithDefaults
} from './data/studyPlan';
import { 
  WeekPlan, 
  DayPlan, 
  ErrorLogEntry, 
  PackingItem,
  DaySessionTiming,
  TaskTimingRecord,
  StuckConceptRecord
} from './types';
import { AntiBurnoutHeader } from './components/AntiBurnoutHeader';
import { TomorrowFocusCard } from './components/TomorrowFocusCard';
import { InteractiveCalendar } from './components/InteractiveCalendar';
import { AntiBurnoutRulesSection } from './components/AntiBurnoutRulesSection';
import { DailyTimelineTemplate } from './components/DailyTimelineTemplate';
import { BluebookArenaSection } from './components/BluebookArenaSection';
import { CrescentModelSection } from './components/CrescentModelSection';
import { ErrorLogSection } from './components/ErrorLogSection';
import { DayCard } from './components/DayCard';
import { ErrorLogModal } from './components/ErrorLogModal';
import { PackingModal } from './components/PackingModal';
import { CheatCodesSection } from './components/CheatCodesSection';
import { CoreInfoSection } from './components/CoreInfoSection';
import { StuckConceptModal } from './components/StuckConceptModal';
import { DedicatedDayPage } from './components/DedicatedDayPage';
import { ScrollReveal } from './components/ScrollReveal';
import { ExamPrepSection } from './components/ExamPrepSection';
import { ScoreCalculatorSection } from './components/ScoreCalculatorSection';
import { FormulasSection } from './components/FormulasSection';
import { computeWeeksWithRollover } from './utils/rollover';
import { 
  Calendar, 
  Filter, 
  CheckCircle2, 
  Coffee, 
  Clock, 
  Zap, 
  RotateCcw, 
  ShieldCheck, 
  BookOpen, 
  Sparkles,
  Layers,
  MapPin,
  Trophy,
  Compass,
  Target,
  Luggage,
  Calculator
} from 'lucide-react';

const STORAGE_KEYS = {
  COMPLETED_TASKS: 'anti_burnout_tasks_clean_v3',
  ERROR_LOG: 'anti_burnout_error_log_clean_v3',
  PACKING_LIST: 'anti_burnout_packing_ranked_v4',
  DAY_NOTES: 'anti_burnout_notes_clean_v3',
  SESSION_TIMINGS: 'anti_burnout_session_timings_clean_v3',
  TASK_COMPLETION_DAYS: 'anti_burnout_task_completion_days_v3',
  TASK_TIMINGS: 'anti_burnout_task_timings_clean_v3',
  STUCK_CONCEPTS: 'anti_burnout_stuck_concepts_v1',
};

const DEFAULT_SESSION_TIMINGS: Record<string, DaySessionTiming> = {};

type ActiveSection = 'all' | 'tomorrow' | 'calendar' | 'schedule' | 'bluebook' | 'phase-2' | 'cheat-codes' | 'formulas' | 'error-log' | 'crescent' | 'rules' | 'timer' | 'exam-prep' | 'score-calculator';

interface AppProps {
  initialSection?: ActiveSection;
}

export default function App({ initialSection = 'all' }: AppProps) {
  const { data: session, status } = useSession();

  // Active Section Navigation
  const [activeSection, setActiveSection] = useState<ActiveSection>(initialSection);

  useEffect(() => {
    if (initialSection) {
      setActiveSection(initialSection);
    }
  }, [initialSection]);

  // SSR-safe state defaults matching server and client initial render
  const [completedTaskIds, setCompletedTaskIds] = useState<Record<string, boolean>>({});
  const [taskCompletionDay, setTaskCompletionDay] = useState<Record<string, string>>({});
  const [errorLogs, setErrorLogs] = useState<ErrorLogEntry[]>([]);
  const [packingList, setPackingList] = useState<PackingItem[]>(() => mergePackingListWithDefaults(INITIAL_PACKING_LIST));
  const [dayNotes, setDayNotes] = useState<Record<string, string>>({});
  const [sessionTimings, setSessionTimings] = useState<Record<string, DaySessionTiming>>(DEFAULT_SESSION_TIMINGS);
  const [taskTimings, setTaskTimings] = useState<Record<string, TaskTimingRecord>>({});
  const [stuckConcepts, setStuckConcepts] = useState<StuckConceptRecord[]>([]);
  const [hasMounted, setHasMounted] = useState<boolean>(false);

  // Load saved data from localStorage after client mounts to avoid hydration mismatch
  useEffect(() => {
    try {
      const savedTasks = localStorage.getItem(STORAGE_KEYS.COMPLETED_TASKS);
      if (savedTasks) setCompletedTaskIds(JSON.parse(savedTasks));

      const savedDays = localStorage.getItem(STORAGE_KEYS.TASK_COMPLETION_DAYS);
      if (savedDays) setTaskCompletionDay(JSON.parse(savedDays));

      const savedLogs = localStorage.getItem(STORAGE_KEYS.ERROR_LOG);
      if (savedLogs) setErrorLogs(JSON.parse(savedLogs));

      const savedPacking = localStorage.getItem(STORAGE_KEYS.PACKING_LIST);
      if (savedPacking) {
        const merged = mergePackingListWithDefaults(JSON.parse(savedPacking));
        setPackingList(merged);
        localStorage.setItem(STORAGE_KEYS.PACKING_LIST, JSON.stringify(merged));
      }

      const savedNotes = localStorage.getItem(STORAGE_KEYS.DAY_NOTES);
      if (savedNotes) setDayNotes(JSON.parse(savedNotes));

      const savedTimings = localStorage.getItem(STORAGE_KEYS.SESSION_TIMINGS);
      if (savedTimings) setSessionTimings(JSON.parse(savedTimings));

      const savedTaskTimings = localStorage.getItem(STORAGE_KEYS.TASK_TIMINGS);
      if (savedTaskTimings) setTaskTimings(JSON.parse(savedTaskTimings));

      const savedStuck = localStorage.getItem(STORAGE_KEYS.STUCK_CONCEPTS);
      if (savedStuck) setStuckConcepts(JSON.parse(savedStuck));
    } catch (e) {
      console.error('Error loading saved progress from localStorage', e);
    }
    setHasMounted(true);
  }, []);

  // Active view filters for Master Schedule (Roadmap)
  const [selectedWeekId, setSelectedWeekId] = useState<string>('week-1');
  const [scheduleFilterType, setScheduleFilterType] = useState<'all' | 'buffers' | 'tests'>('all');

  // Modals state
  const [timerModalOpen, setTimerModalOpen] = useState(false);
  const [activeTimerDayTitle, setActiveTimerDayTitle] = useState<string>('Tomorrow (Mon Sep 14) - Day 1 Session');
  const [selectedTimerDateStr, setSelectedTimerDateStr] = useState<string>('2026-09-14');
  const [errorLogModalOpen, setErrorLogModalOpen] = useState(false);
  const [packingModalOpen, setPackingModalOpen] = useState(false);
  const [stuckModalDay, setStuckModalDay] = useState<DayPlan | null>(null);

  // 1. Fetch user data from DB when signed in
  useEffect(() => {
    if (status === 'authenticated' && session?.user?.email) {
      fetch('/api/user/progress')
        .then((res) => (res.ok ? res.json() : null))
        .then((data) => {
          if (data) {
            if (data.completedTaskIds && Object.keys(data.completedTaskIds).length > 0) {
              setCompletedTaskIds((prev) => ({ ...prev, ...data.completedTaskIds }));
            }
            if (data.taskCompletionDays && Object.keys(data.taskCompletionDays).length > 0) {
              setTaskCompletionDay((prev) => ({ ...prev, ...data.taskCompletionDays }));
            }
            if (data.dayNotes && Object.keys(data.dayNotes).length > 0) {
              setDayNotes((prev) => ({ ...prev, ...data.dayNotes }));
            }
            if (data.errorLogs && data.errorLogs.length > 0) {
              setErrorLogs(data.errorLogs);
            }
            if (data.sessionTimings && Object.keys(data.sessionTimings).length > 0) {
              setSessionTimings((prev) => ({ ...prev, ...data.sessionTimings }));
            }
            if (data.stuckConcepts && data.stuckConcepts.length > 0) {
              setStuckConcepts(data.stuckConcepts);
              localStorage.setItem(STORAGE_KEYS.STUCK_CONCEPTS, JSON.stringify(data.stuckConcepts));
            }
            if (data.packingList && data.packingList.length > 0) {
              const merged = mergePackingListWithDefaults(data.packingList);
              setPackingList(merged);
              localStorage.setItem(STORAGE_KEYS.PACKING_LIST, JSON.stringify(merged));
            }
          }
        })
        .catch((err) => console.warn('Cloud sync load error:', err));
    }
  }, [status, session]);

  // 2. Cloud sync helper
  const syncToCloud = useCallback(
    (tasks: any, notes: any, errors: any, timings: any, packing: any, completionDays: any, stuck?: any) => {
      if (status === 'authenticated' && session?.user?.email) {
        fetch('/api/user/progress', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            completedTaskIds: tasks,
            taskCompletionDays: completionDays,
            dayNotes: notes,
            errorLogs: errors,
            sessionTimings: timings,
            packingList: packing,
            stuckConcepts: stuck || stuckConcepts,
            lastActiveDate: new Date().toISOString().split('T')[0],
          }),
        }).catch((err) => console.warn('Cloud sync push error:', err));
      }
    },
    [status, session, stuckConcepts]
  );

  // Sync with localStorage & trigger cloud sync (only after client has mounted)
  useEffect(() => {
    if (!hasMounted) return;
    try {
      localStorage.setItem(STORAGE_KEYS.COMPLETED_TASKS, JSON.stringify(completedTaskIds));
      syncToCloud(completedTaskIds, dayNotes, errorLogs, sessionTimings, packingList, taskCompletionDay, stuckConcepts);
    } catch (e) {
      console.error('Failed to save tasks', e);
    }
  }, [completedTaskIds, syncToCloud, dayNotes, errorLogs, sessionTimings, packingList, taskCompletionDay, stuckConcepts, hasMounted]);

  useEffect(() => {
    if (!hasMounted) return;
    try {
      localStorage.setItem(STORAGE_KEYS.ERROR_LOG, JSON.stringify(errorLogs));
    } catch (e) {
      console.error('Failed to save error logs', e);
    }
  }, [errorLogs, hasMounted]);

  useEffect(() => {
    if (!hasMounted) return;
    try {
      localStorage.setItem(STORAGE_KEYS.PACKING_LIST, JSON.stringify(packingList));
    } catch (e) {
      console.error('Failed to save packing list', e);
    }
  }, [packingList, hasMounted]);

  useEffect(() => {
    if (!hasMounted) return;
    try {
      localStorage.setItem(STORAGE_KEYS.DAY_NOTES, JSON.stringify(dayNotes));
    } catch (e) {
      console.error('Failed to save day notes', e);
    }
  }, [dayNotes, hasMounted]);

  useEffect(() => {
    if (!hasMounted) return;
    try {
      localStorage.setItem(STORAGE_KEYS.SESSION_TIMINGS, JSON.stringify(sessionTimings));
    } catch (e) {
      console.error('Failed to save session timings', e);
    }
  }, [sessionTimings, hasMounted]);

  useEffect(() => {
    if (!hasMounted) return;
    try {
      localStorage.setItem(STORAGE_KEYS.TASK_COMPLETION_DAYS, JSON.stringify(taskCompletionDay));
    } catch (e) {
      console.error('Failed to save task completion days', e);
    }
  }, [taskCompletionDay, hasMounted]);

  useEffect(() => {
    if (!hasMounted) return;
    try {
      localStorage.setItem(STORAGE_KEYS.STUCK_CONCEPTS, JSON.stringify(stuckConcepts));
    } catch (e) {
      console.error('Failed to save stuck concepts', e);
    }
  }, [stuckConcepts, hasMounted]);

  const currentTrackerDate = useMemo(() => {
    try {
      const now = new Date();
      const y = now.getFullYear();
      const m = String(now.getMonth() + 1).padStart(2, '0');
      const d = String(now.getDate()).padStart(2, '0');
      const formatted = `${y}-${m}-${d}`;
      return formatted >= '2026-09-14' ? formatted : '2026-09-14';
    } catch {
      return '2026-09-14';
    }
  }, []);

  // Merge static STUDY_PLAN_WEEKS with dynamic user completion states & carryover rollover logic
  const weeks: WeekPlan[] = useMemo(() => {
    return computeWeeksWithRollover(
      STUDY_PLAN_WEEKS,
      completedTaskIds,
      taskCompletionDay,
      dayNotes,
      currentTrackerDate
    );
  }, [completedTaskIds, taskCompletionDay, dayNotes, currentTrackerDate]);

  // Flattened all days list
  const allDays = useMemo(() => {
    return weeks.flatMap((w) => w.days);
  }, [weeks]);

  // Global counts
  const totalTasks = useMemo(() => {
    return weeks.reduce((acc, week) => acc + week.days.reduce((dAcc, day) => dAcc + day.tasks.length, 0), 0);
  }, [weeks]);

  const completedCount = useMemo(() => {
    return Object.values(completedTaskIds).filter(Boolean).length;
  }, [completedTaskIds]);

  // Dynamic Tomorrow Calculation:
  // Today's base tracker date: currentTrackerDate (e.g. '2026-09-12').
  // Tomorrow is dynamically currentTrackerDate + 1 day (e.g. '2026-09-13').
  const tomorrowDateStr = useMemo(() => {
    try {
      const [y, m, d] = currentTrackerDate.split('-').map(Number);
      const next = new Date(y, m - 1, d + 1);
      const ny = next.getFullYear();
      const nm = String(next.getMonth() + 1).padStart(2, '0');
      const nd = String(next.getDate()).padStart(2, '0');
      return `${ny}-${nm}-${nd}`;
    } catch {
      return '2026-09-13';
    }
  }, [currentTrackerDate]);

  // Allows user to view exact tomorrow or preview any specific date on the Tomorrow page
  const [selectedTomorrowDateStr, setSelectedTomorrowDateStr] = useState<string | null>(null);

  const tomorrowDay = useMemo(() => {
    const targetDate = selectedTomorrowDateStr || tomorrowDateStr;
    const found = allDays.find((d) => d.dateStr === targetDate);
    return found || allDays.find((d) => d.dateStr === tomorrowDateStr) || allDays[0];
  }, [allDays, selectedTomorrowDateStr, tomorrowDateStr]);

  // Dedicated Day Page Navigation State
  const [dedicatedDayDateStr, setDedicatedDayDateStr] = useState<string | null>(null);

  // Dedicated day plan resolution (including orientation fallback for pre-kickoff September days)
  const dedicatedDay = useMemo(() => {
    if (!dedicatedDayDateStr) return null;
    const found = allDays.find((d) => d.dateStr === dedicatedDayDateStr);
    if (found) return found;
    
    // Graceful orientation day for dates before September 12 kickoff
    return {
      id: dedicatedDayDateStr,
      dateStr: dedicatedDayDateStr,
      dayOfWeek: new Date(dedicatedDayDateStr + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'short' }),
      formattedDate: new Date(dedicatedDayDateStr + 'T00:00:00').toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' }),
      weekId: 'orientation',
      weekNumber: 0,
      weekTitle: 'Pre-Study Orientation & Setup',
      phase: 'foundations' as const,
      isBuffer: true,
      specialInstructions: 'Pre-kickoff preparation phase. Official 57-day schedule commences Saturday, September 12, 2026. Use this time to install Bluebook, acquire an external mouse for Desmos, and ensure test center transit logistics for Crescent Model School are verified.',
      tasks: [
        { id: `prep-${dedicatedDayDateStr}-1`, label: 'Verify Bluebook app is downloaded & updated to latest version', subject: 'logistics' as const, topic: 'Bluebook Setup', completed: false },
        { id: `prep-${dedicatedDayDateStr}-2`, label: 'Connect Khan Academy SAT practice account & review syllabus', subject: 'logistics' as const, topic: 'Khan Academy SAT', completed: false },
        { id: `prep-${dedicatedDayDateStr}-3`, label: 'Check passport / Smart CNIC validity and admission ticket details', subject: 'buffer' as const, topic: 'Exam Logistics', completed: false },
      ],
    };
  }, [dedicatedDayDateStr, allDays]);

  // Handlers
  const handleToggleTask = (dayId: string, taskId: string) => {
    const targetDay = allDays.find((d) => d.id === dayId || d.dateStr === dayId);
    const activeDateStr = targetDay ? targetDay.dateStr : dayId;
    const isCurrentlyDone = !!completedTaskIds[taskId];

    setCompletedTaskIds((prev) => {
      const next = { ...prev };
      if (isCurrentlyDone) {
        delete next[taskId];
      } else {
        next[taskId] = true;
      }
      return next;
    });

    setTaskCompletionDay((prev) => {
      const next = { ...prev };
      if (isCurrentlyDone) {
        delete next[taskId];
      } else {
        next[taskId] = activeDateStr;
      }
      return next;
    });
  };

  const handleSaveNotes = (dayId: string, notes: string) => {
    setDayNotes((prev) => ({
      ...prev,
      [dayId]: notes,
    }));

    // Find date and info for this day to dual-sync into Master Error Log
    const dayObj = allDays.find((d) => d.id === dayId || d.dateStr === dayId);
    const dateStr = dayObj?.dateStr || (dayId.includes('-') ? dayId : new Date().toISOString().split('T')[0]);
    const formattedDate = dayObj?.formattedDate || dateStr;
    const noteErrorId = `note-err-${dayId}`;

    if (notes && notes.trim()) {
      setErrorLogs((prev) => {
        const existingIdx = prev.findIndex((e) => e.id === noteErrorId);
        const updatedEntry: ErrorLogEntry = {
          id: noteErrorId,
          date: dateStr,
          testOrSection: `Calendar Note (${formattedDate})`,
          questionRef: `Daily Reflection / Note`,
          domain: 'Math',
          whyMissed: notes.trim(),
          takeawayRule: `Calendar note from ${formattedDate}: ${notes.trim().slice(0, 100)}${notes.trim().length > 100 ? '...' : ''}`,
          reviewed: false,
          createdAt: existingIdx >= 0 ? prev[existingIdx].createdAt : Date.now(),
        };

        if (existingIdx >= 0) {
          const next = [...prev];
          next[existingIdx] = updatedEntry;
          return next;
        } else {
          return [updatedEntry, ...prev];
        }
      });
    } else {
      // If user cleared the note, remove the auto-synced entry
      setErrorLogs((prev) => prev.filter((e) => e.id !== noteErrorId));
    }
  };

  const handleLaunchTimer = (dayTitle?: string, dateStr?: string, taskId?: string) => {
    if (dateStr) setSelectedTimerDateStr(dateStr);
    if (typeof window !== 'undefined') {
      const query = new URLSearchParams();
      if (dateStr) query.set('date', dateStr);
      if (dayTitle) query.set('title', dayTitle);
      if (taskId) query.set('taskId', taskId);
      const qs = query.toString();
      window.location.href = `/timer${qs ? `?${qs}` : ''}`;
    }
  };

  const handleSaveSessionTiming = (timing: DaySessionTiming) => {
    setSessionTimings((prev) => ({
      ...prev,
      [timing.dateStr]: timing,
    }));
  };

  const handleDeleteSessionTiming = (dateStr: string) => {
    setSessionTimings((prev) => {
      const next = { ...prev };
      delete next[dateStr];
      return next;
    });
  };

  const handleSaveTaskTiming = (taskId: string, seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    const formatted = mins > 0 ? `${mins}m ${secs}s` : `${secs}s`;
    const record: TaskTimingRecord = {
      seconds,
      formatted,
      completedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setTaskTimings((prev) => {
      const next = { ...prev, [taskId]: record };
      try {
        localStorage.setItem(STORAGE_KEYS.TASK_TIMINGS, JSON.stringify(next));
      } catch (e) {
        console.error('Failed to save task timing', e);
      }
      return next;
    });
  };

  const handleAddErrorLog = (entry: Omit<ErrorLogEntry, 'id' | 'createdAt'>) => {
    const newEntry: ErrorLogEntry = {
      ...entry,
      id: `err-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      createdAt: Date.now(),
    };
    setErrorLogs((prev) => [newEntry, ...prev]);
  };

  const handleDeleteErrorLog = (id: string) => {
    setErrorLogs((prev) => prev.filter((e) => e.id !== id));
  };

  const handleToggleReviewedErrorLog = (id: string) => {
    setErrorLogs((prev) =>
      prev.map((e) => (e.id === id ? { ...e, reviewed: !e.reviewed } : e))
    );
  };

  const handleSaveStruggle = (record: Omit<StuckConceptRecord, 'id' | 'createdAt'>, syncToErrorLog: boolean) => {
    const struggleId = `stuck-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`;
    let linkedErrorLogId: string | undefined = undefined;

    if (syncToErrorLog) {
      linkedErrorLogId = `err-struggle-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`;
      const isRW = record.chapter.includes('Reading') || record.chapter.includes('Writing') || record.lessonCode.includes('R&W');
      const newErrorLog: ErrorLogEntry = {
        id: linkedErrorLogId,
        date: record.dateStr || new Date().toISOString().split('T')[0],
        testOrSection: `${record.chapter} - ${record.lessonTitle}`,
        questionRef: `${record.lessonCode}: ${record.conceptFormula}`,
        domain: isRW ? 'Reading/Writing' : 'Math',
        whyMissed: record.notes || `Stuck on concept: ${record.conceptFormula}`,
        takeawayRule: record.takeawayRule || `Master ${record.conceptFormula}. Review core notes in Core Info hub.`,
        reviewed: false,
        createdAt: Date.now(),
      };
      setErrorLogs((prev) => [newErrorLog, ...prev]);
    }

    const newStruggle: StuckConceptRecord = {
      ...record,
      id: struggleId,
      errorLogId: linkedErrorLogId,
      createdAt: Date.now(),
    };

    setStuckConcepts((prev) => [newStruggle, ...prev]);

    // Also append to day's reflection notes if not already present
    if (record.dateStr && record.notes) {
      setDayNotes((prev) => {
        const existing = prev[record.dateStr] || '';
        const struggleBullet = `• Stuck on ${record.conceptFormula}: ${record.notes}`;
        if (!existing.includes(record.conceptFormula)) {
          return {
            ...prev,
            [record.dateStr]: existing ? `${existing}\n${struggleBullet}` : struggleBullet,
          };
        }
        return prev;
      });
    }
  };

  const handleDeleteStruggle = (id: string) => {
    setStuckConcepts((prev) => prev.filter((s) => s.id !== id));
  };

  const handleToggleResolvedStruggle = (id: string) => {
    setStuckConcepts((prev) =>
      prev.map((s) => (s.id === id ? { ...s, resolved: !s.resolved } : s))
    );
  };

  const handleTogglePackingItem = (id: string) => {
    setPackingList((prev) =>
      prev.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item))
    );
  };

  const handleAddPackingItem = (itemText: string, category?: string, rank?: number) => {
    const newItem: PackingItem = {
      id: `custom-${Date.now()}`,
      category: (category as any) || 'custom',
      item: itemText,
      rank: (rank as 1 | 2 | 3 | 4 | 5) || 1,
      required: false,
      packed: false,
    };
    setPackingList((prev) => [...prev, newItem]);
  };

  const handleResetPackingList = () => {
    setPackingList(INITIAL_PACKING_LIST);
    try {
      localStorage.setItem(STORAGE_KEYS.PACKING_LIST, JSON.stringify(INITIAL_PACKING_LIST));
    } catch (e) {
      console.error('Failed to reset packing list', e);
    }
  };

  const handleResetProgress = () => {
    if (window.confirm('Reset all task checkmarks, error logs, timing records, and notes to a clean start?')) {
      setCompletedTaskIds({});
      setErrorLogs([]);
      setDayNotes({});
      setPackingList(INITIAL_PACKING_LIST);
      setSessionTimings(DEFAULT_SESSION_TIMINGS);
      setTaskCompletionDay({});
      localStorage.removeItem(STORAGE_KEYS.COMPLETED_TASKS);
      localStorage.removeItem(STORAGE_KEYS.ERROR_LOG);
      localStorage.removeItem(STORAGE_KEYS.DAY_NOTES);
      localStorage.removeItem(STORAGE_KEYS.PACKING_LIST);
      localStorage.removeItem(STORAGE_KEYS.SESSION_TIMINGS);
      localStorage.removeItem(STORAGE_KEYS.TASK_COMPLETION_DAYS);
    }
  };

  // Phase 1 Foundation weeks (Weeks 1 to 6)
  const foundationWeeks = useMemo(() => {
    return weeks.filter((w) => w.phase === 'foundations');
  }, [weeks]);

  // Filtered schedule weeks based on active week selector and type filters
  const displayedScheduleWeeks = useMemo(() => {
    let list = foundationWeeks;
    if (selectedWeekId !== 'all-foundations') {
      list = list.filter((w) => w.id === selectedWeekId);
    }

    return list
      .map((w) => {
        let days = w.days;
        if (scheduleFilterType === 'buffers') {
          days = days.filter((d) => d.isBuffer);
        } else if (scheduleFilterType === 'tests') {
          days = days.filter((d) => d.isTestDay);
        }
        return {
          ...w,
          days,
        };
      })
      .filter((w) => w.days.length > 0);
  }, [foundationWeeks, selectedWeekId, scheduleFilterType]);

  const handleSelectSection = (section: ActiveSection) => {
    setDedicatedDayDateStr(null);
    setActiveSection(section);
    const hrefMap: Record<ActiveSection, string> = {
      'all': '/',
      'calendar': '/calendar',
      'tomorrow': '/tomorrow',
      'schedule': '/phase-1',
      'bluebook': '/phase-2',
      'phase-2': '/phase-2',
      'cheat-codes': '/core-info',
      'formulas': '/core-info?tab=formulas',
      'error-log': '/error-log',
      'crescent': '/test-center',
      'rules': '/rules',
      'timer': '/timer',
      'exam-prep': '/exam-prep',
      'score-calculator': '/score-calculator',
    };
    const targetHref = hrefMap[section] || '/';
    if (typeof window !== 'undefined' && window.location.pathname !== targetHref) {
      window.history.pushState({}, '', targetHref);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-transparent text-[#122810] flex flex-col font-['Plus_Jakarta_Sans'] antialiased selection:bg-emerald-600 selection:text-white pb-24 relative z-10">
      {/* Top Header with Nov 7 Exam Countdown & Real Tracker Metrics */}
      <AntiBurnoutHeader
        completedCount={completedCount}
        totalTasks={totalTasks}
        examDateStr="Nov 7, 2026"
        onOpenTimer={() => handleLaunchTimer(`${tomorrowDay.formattedDate} - 90-Min Session`, selectedTimerDateStr)}
        onOpenCalendar={() => handleSelectSection('calendar')}
        onOpenPacking={() => handleSelectSection('exam-prep')}
        onOpenCheatCodes={() => handleSelectSection('cheat-codes')}
        activeSection={activeSection}
        onSelectSection={handleSelectSection}
      />

      {/* DEDICATED FULL-PAGE VIEW OR MAIN DASHBOARD */}
      {dedicatedDayDateStr && dedicatedDay ? (
        <DedicatedDayPage
          day={dedicatedDay}
          completedTaskIds={completedTaskIds}
          onToggleTask={(taskId) => handleToggleTask(dedicatedDay.id, taskId)}
          allDays={allDays}
          sessionTiming={sessionTimings[dedicatedDay.dateStr]}
          onSaveSessionTiming={handleSaveSessionTiming}
          onDeleteSessionTiming={handleDeleteSessionTiming}
          onLaunchTimerModal={(dayTitle, dateStr) => handleLaunchTimer(dayTitle, dateStr)}
          notes={dayNotes[dedicatedDay.dateStr] || ''}
          onSaveNotes={handleSaveNotes}
          onBack={() => setDedicatedDayDateStr(null)}
          onNavigateDay={(targetDateStr) => setDedicatedDayDateStr(targetDateStr)}
          onOpenErrorLogModal={(preDate) => {
            setSelectedTimerDateStr(preDate || dedicatedDay.dateStr);
            setErrorLogModalOpen(true);
          }}
          onOpenDesmosModal={() => handleSelectSection('cheat-codes')}
          onOpenPackingModal={() => handleSelectSection('exam-prep')}
          taskTimings={taskTimings}
          onOpenStruggleModal={(d) => setStuckModalDay(d)}
          stuckCount={stuckConcepts.filter((s) => s.dateStr === dedicatedDay.dateStr).length}
        />
      ) : (
        /* Main Container */
        <main className="max-w-[1740px] w-full mx-auto px-3 sm:px-5 lg:px-7 py-5 sm:py-6 space-y-7 flex-1">
        
        {/* DEDICATED STANDALONE PAGE BANNER: Displayed when viewing individual pages */}
        {activeSection !== 'all' && (
          <div className="flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-[#d2e4cd]/80 border-2 border-[#a6c4a1] shadow-xs backdrop-blur-md">
            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={() => handleSelectSection('all')}
                className="text-xs sm:text-sm font-bold text-slate-700 hover:text-slate-950 flex items-center gap-1 cursor-pointer transition"
              >
                <span>Home</span>
                <span>/</span>
              </button>
              <span className="text-xs sm:text-sm font-black text-[#1a3717] capitalize font-['Space_Grotesk']">
                {activeSection === 'calendar' && '📅 Master 57-Day Calendar'}
                {activeSection === 'tomorrow' && `✨ Tomorrow Focus • ${tomorrowDay.formattedDate}`}
                {activeSection === 'schedule' && '🧭 Phase 1: Content Foundations (Weeks 1–6)'}
                {(activeSection === 'phase-2' || activeSection === 'bluebook') && '🏆 Phase 2: Bluebook Arena (18-Day Schedule • Oct 20–Nov 6)'}
                {(activeSection === 'cheat-codes' || activeSection === 'formulas') && '📖 Core Info Vault (Important Info • Formulas • Cheat Codes)'}
                {activeSection === 'error-log' && `📖 Mistake Autopsy & Error Log (${errorLogs.length})`}
                {activeSection === 'crescent' && '📍 Crescent Model Official Exam Center & Test Day Protocols (Nov 7)'}
                {activeSection === 'rules' && '🛡️ The Core Anti-Burnout Rules'}
                {activeSection === 'exam-prep' && '🎒 48h & 24h Pre-Exam Preparation & Device Packout'}
              </span>
            </div>

            <button
              onClick={() => handleSelectSection('all')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-black text-[#1a3717] bg-[#c2d7bd] hover:bg-[#b2cbb0] border border-[#a6c4a1] cursor-pointer transition active:scale-95 shadow-xs whitespace-nowrap"
            >
              <span>← Return to Home (Full Dashboard)</span>
            </button>
          </div>
        )}

        {/* ============================================================ */}
        {/* SECTION: 48H & 24H PRE-EXAM PREPARATION & PACKOUT (Inline)  */}
        {/* ============================================================ */}
        {activeSection === 'exam-prep' && (
          <ScrollReveal id="section-exam-prep">
            <div className="space-y-2">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-black uppercase tracking-wider text-[#183615] font-['JetBrains_Mono'] flex items-center gap-1.5">
                  <Luggage className="w-3.5 h-3.5 text-emerald-700" />
                  <span>T-48h &amp; T-24h Pre-Exam Preparation &amp; Device Packout Protocol</span>
                </span>
                <button
                  onClick={() => handleSelectSection('all')}
                  className="text-xs font-bold text-slate-600 hover:text-slate-950 cursor-pointer"
                >
                  View Full Dashboard &rarr;
                </button>
              </div>
              <ExamPrepSection
                items={packingList}
                onToggleItem={handleTogglePackingItem}
                onAddItem={handleAddPackingItem}
                onDeleteItem={(id) => setPackingList((prev) => prev.filter((item) => item.id !== id))}
                onResetDefault={handleResetPackingList}
              />
            </div>
          </ScrollReveal>
        )}

        {/* ============================================================ */}
        {/* SECTION 1: TOMORROW-SPECIFIC FOCUS (Day 1: Mon Sep 14)       */}
        {/* ============================================================ */}
        {(activeSection === 'all' || activeSection === 'tomorrow') && (
          <ScrollReveal id="section-tomorrow">
            <div className="space-y-2">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-black uppercase tracking-wider text-indigo-700 font-['JetBrains_Mono'] flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                  <span>Section 1 &bull; Tomorrow&apos;s Specific Mission ({tomorrowDay.formattedDate})</span>
                </span>
                {activeSection !== 'all' && (
                  <button
                    onClick={() => setActiveSection('all')}
                    className="text-xs font-bold text-slate-600 hover:text-slate-950"
                  >
                    View Full Dashboard &rarr;
                  </button>
                )}
              </div>
              <TomorrowFocusCard
                tomorrowDay={tomorrowDay}
                completedTaskIds={completedTaskIds}
                onToggleTask={handleToggleTask}
                onLaunchTimer={handleLaunchTimer}
                onOpenDesmos={() => handleSelectSection('cheat-codes')}
                onOpenErrorLog={() => handleSelectSection('error-log')}
                onSaveNotes={handleSaveNotes}
                notes={dayNotes[tomorrowDay.id] || ''}
                onOpenDedicatedDay={(dateStr) => setDedicatedDayDateStr(dateStr)}
                currentTrackerDate={currentTrackerDate}
                tomorrowDateStr={tomorrowDateStr}
                onSelectTomorrowDate={setSelectedTomorrowDateStr}
                allDays={allDays}
              />
            </div>
          </ScrollReveal>
        )}

        {/* ============================================================ */}
        {/* SECTION 2: FULLY FUNCTIONAL CALENDAR WITH NOV 7 EXAM DAY     */}
        {/* ============================================================ */}
        {(activeSection === 'all' || activeSection === 'calendar') && (
          <ScrollReveal id="section-calendar">
            <div className="space-y-2">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-black uppercase tracking-wider text-slate-800 font-['JetBrains_Mono'] flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Section 2 &bull; Interactive Master Calendar & Daily Process Tracker</span>
                </span>
                {activeSection !== 'all' && (
                  <button
                    onClick={() => setActiveSection('all')}
                    className="text-xs font-bold text-slate-600 hover:text-slate-950 cursor-pointer"
                  >
                    View Full Dashboard &rarr;
                  </button>
                )}
              </div>
              <InteractiveCalendar
                allDays={allDays}
                completedTaskIds={completedTaskIds}
                onToggleTask={handleToggleTask}
                onLaunchTimer={handleLaunchTimer}
                onSaveNotes={handleSaveNotes}
                dayNotes={dayNotes}
                sessionTimings={sessionTimings}
                onDeleteSessionTiming={handleDeleteSessionTiming}
                onSelectDay={(dateStr) => setDedicatedDayDateStr(dateStr)}
                taskTimings={taskTimings}
                onOpenStruggleModal={(day) => setStuckModalDay(day)}
                stuckConcepts={stuckConcepts}
              />
            </div>
          </ScrollReveal>
        )}

        {/* ============================================================ */}
        {/* SECTION 3: THE 3 NON-NEGOTIABLE CORE RULES                   */}
        {/* ============================================================ */}
        {(activeSection === 'all' || activeSection === 'rules') && (
          <ScrollReveal id="section-rules">
            <div className="space-y-2">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-black uppercase tracking-wider text-slate-800 font-['JetBrains_Mono'] flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Section 3 &bull; The Anti-Burnout Rulebook</span>
                </span>
                {activeSection !== 'all' && (
                  <button
                    onClick={() => setActiveSection('all')}
                    className="text-xs font-bold text-slate-600 hover:text-slate-950"
                  >
                    View Full Dashboard &rarr;
                  </button>
                )}
              </div>
              <AntiBurnoutRulesSection />
              <DailyTimelineTemplate 
                onLaunchTimer={(title) => handleLaunchTimer(title || `${tomorrowDay.formattedDate} Session`)} 
              />
            </div>
          </ScrollReveal>
        )}

        {/* ============================================================ */}
        {/* SECTION 4: PHASE 1 FOUNDATIONS (Weeks 1 to 6 • Sep 14–Oct 20) */}
        {/* ============================================================ */}
        {(activeSection === 'all' || activeSection === 'schedule') && (
          <ScrollReveal id="section-schedule">
            <div className="space-y-4">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-black uppercase tracking-wider text-slate-800 font-['JetBrains_Mono'] flex items-center gap-1.5">
                  <Compass className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Section 4 &bull; Phase 1: Content Foundations (Weeks 1 to 6)</span>
                </span>
                {activeSection !== 'all' && (
                  <button
                    onClick={() => setActiveSection('all')}
                    className="text-xs font-bold text-slate-600 hover:text-slate-950"
                  >
                    View Full Dashboard &rarr;
                  </button>
                )}
              </div>

              {/* Clean Week-by-Week Selector: Prevents 50+ cards from cluttering */}
              <div className="ios-glass-card rounded-3xl p-5 sm:p-7 shadow-grave hover:shadow-grave-hover space-y-5 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-b border-[#bfd5bb] pb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-[#122810] font-luxury">
                      Weekly Roadmap: Foundations
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-700 font-semibold mt-0.5">
                      Select a week to view its daily tasks, buffer status, and notes.
                    </p>
                  </div>

                  {/* Filter pills */}
                  <div className="flex items-center gap-1.5 bg-[#d2e4cd]/70 p-1 rounded-xl border border-[#a6c4a1] text-xs self-start md:self-auto">
                    <button
                      onClick={() => setScheduleFilterType('all')}
                      className={`px-3 py-1.5 rounded-lg font-black transition-all duration-150 min-h-[38px] cursor-pointer active:scale-[0.98] ${
                        scheduleFilterType === 'all'
                          ? 'bg-[#1a3717] text-white shadow-xs'
                          : 'text-[#122810] hover:bg-[#c2d7bd]'
                      }`}
                    >
                      All Days
                    </button>
                    <button
                      onClick={() => setScheduleFilterType('buffers')}
                      className={`px-3 py-1.5 rounded-lg font-black transition-all duration-150 flex items-center gap-1 min-h-[38px] cursor-pointer active:scale-[0.98] ${
                        scheduleFilterType === 'buffers'
                          ? 'bg-emerald-700 text-white shadow-xs'
                          : 'text-emerald-900 hover:bg-emerald-100/70'
                      }`}
                    >
                      <Coffee className="w-3.5 h-3.5" />
                      <span>Buffer Sundays</span>
                    </button>
                    <button
                      onClick={() => setScheduleFilterType('tests')}
                      className={`px-3 py-1.5 rounded-lg font-black transition-all duration-150 flex items-center gap-1 min-h-[38px] cursor-pointer active:scale-[0.98] ${
                        scheduleFilterType === 'tests'
                          ? 'bg-indigo-700 text-white shadow-xs'
                          : 'text-indigo-900 hover:bg-indigo-100/70'
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5" />
                      <span>Quizzes</span>
                    </button>
                  </div>
                </div>

                {/* Week Tabs: Touch friendly, clear completed indicator */}
                <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1">
                  {foundationWeeks.map((w, idx) => {
                    const weekTasks = w.days.flatMap((d) => d.tasks);
                    const weekCompleted = weekTasks.filter((t) => completedTaskIds[t.id]).length;
                    const weekTotal = weekTasks.length;

                    return (
                      <button
                        key={w.id}
                        onClick={() => setSelectedWeekId(w.id)}
                        className={`px-4 py-2.5 rounded-2xl text-xs font-black shrink-0 transition-all duration-150 border-2 flex items-center gap-2 min-h-[44px] cursor-pointer hover:shadow-xs active:scale-[0.98] ${
                          selectedWeekId === w.id
                            ? 'bg-[#1a3717] text-white border-[#1a3717] shadow-xs'
                            : 'bg-[#e5f0e1]/70 text-[#122810] border-[#a6c4a1] hover:bg-[#d7e5d2]'
                        }`}
                      >
                        <span>Week {idx + 1}</span>
                        <span className={`text-[10px] font-mono font-black px-2 py-0.5 rounded-md ${
                          selectedWeekId === w.id ? 'bg-emerald-950 text-white' : 'bg-matcha-sub text-[#122810] border border-[#a6c4a1]/70'
                        }`}>
                          {weekCompleted}/{weekTotal}
                        </span>
                      </button>
                    );
                  })}

                  <button
                    onClick={() => setSelectedWeekId('all-foundations')}
                    className={`px-4 py-2.5 rounded-2xl text-xs font-black shrink-0 transition-all duration-150 border-2 min-h-[44px] cursor-pointer hover:shadow-xs active:scale-[0.98] ${
                      selectedWeekId === 'all-foundations'
                        ? 'bg-[#1a3717] text-white border-[#1a3717]'
                        : 'bg-[#e5f0e1]/70 text-[#122810] border-[#a6c4a1] hover:bg-[#d7e5d2]'
                    }`}
                  >
                    View All 6 Weeks
                  </button>
                </div>

                {/* Rendered Selected Weeks with Sub-section Animation */}
                <div className="space-y-6 pt-2">
                  {displayedScheduleWeeks.map((week, wIdx) => {
                    const weekTasks = week.days.flatMap((d) => d.tasks);
                    const weekCompleted = weekTasks.filter((t) => completedTaskIds[t.id]).length;
                    const weekTotal = weekTasks.length;

                    const nonBufferDays = week.days.filter((d) => !d.isBuffer);
                    const allPrecedingDone =
                      nonBufferDays.length > 0 &&
                      nonBufferDays.every((d) => d.tasks.every((t) => completedTaskIds[t.id]));

                    return (
                      <ScrollReveal key={week.id} delay={0.05 * (wIdx % 3)}>
                        <div className="space-y-4">
                          {/* Week Header */}
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-4 bg-[#d2e4cd]/60 rounded-2xl border-2 border-[#a6c4a1]">
                            <div>
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="text-xs font-black uppercase px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-900 font-['JetBrains_Mono']">
                                  {week.dateRange}
                                </span>
                                <h4 className="text-base sm:text-lg font-bold text-slate-950 font-luxury">
                                  {week.title}
                                </h4>
                              </div>
                              <p className="text-xs text-slate-700 font-semibold mt-0.5">{week.subtitle}</p>
                            </div>

                            <div className="flex items-center gap-2.5">
                              {allPrecedingDone ? (
                                <span className="text-xs font-black text-emerald-950 bg-emerald-100 px-3 py-1 rounded-xl flex items-center gap-1 border border-emerald-300 font-['JetBrains_Mono']">
                                  <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                                  Sunday Free!
                                </span>
                              ) : (
                                <span className="text-xs font-bold text-slate-700 bg-matcha-input px-3 py-1 rounded-xl border border-slate-300 font-['JetBrains_Mono']">
                                  Buffer Protected
                                </span>
                              )}

                              <span className="text-xs font-black font-['JetBrains_Mono'] text-slate-900 bg-matcha-input px-2.5 py-1 rounded-lg border border-slate-300">
                                {weekCompleted}/{weekTotal} Done
                              </span>
                            </div>
                          </div>

                          {/* Day Cards for this week */}
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                            {week.days.map((day) => (
                              <DayCard
                                key={day.id}
                                day={day}
                                isToday={day.dateStr === currentTrackerDate}
                                isTomorrow={day.dateStr === tomorrowDateStr}
                                onToggleTask={handleToggleTask}
                                onLaunchTimer={handleLaunchTimer}
                                onSaveNotes={handleSaveNotes}
                                allPrecedingDaysCompleted={allPrecedingDone}
                                onOpenStruggleModal={() => setStuckModalDay(day)}
                                strugglesCount={stuckConcepts.filter((s) => s.dateStr === day.dateStr).length}
                              />
                            ))}
                          </div>
                        </div>
                      </ScrollReveal>
                    );
                  })}
                </div>
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* ============================================================ */}
        {/* SECTION 5: PHASE 2 - THE BLUEBOOK ARENA (Oct 20 to Nov 6)    */}
        {/* ============================================================ */}
        {(activeSection === 'all' || activeSection === 'bluebook' || activeSection === 'phase-2') && (
          <ScrollReveal id="section-bluebook">
            <div className="space-y-2">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-black uppercase tracking-wider text-sky-800 font-['JetBrains_Mono'] flex items-center gap-1.5">
                  <Trophy className="w-3.5 h-3.5 text-amber-500" />
                  <span>Section 5 &bull; Phase 2: The Bluebook Arena (18-Day Schedule • Oct 20–Nov 6)</span>
                </span>
                {activeSection !== 'all' && (
                  <button
                    onClick={() => setActiveSection('all')}
                    className="text-xs font-bold text-slate-600 hover:text-slate-950"
                  >
                    View Full Dashboard &rarr;
                  </button>
                )}
              </div>
              <BluebookArenaSection
                weeks={weeks}
                completedTaskIds={completedTaskIds}
                onToggleTask={handleToggleTask}
                onOpenDesmos={() => handleSelectSection('cheat-codes')}
                onOpenErrorLog={() => handleSelectSection('error-log')}
                onLaunchTimer={handleLaunchTimer}
              />
            </div>
          </ScrollReveal>
        )}

        {/* ============================================================ */}
        {/* SECTION 5: CORE INFO VAULT (Important Info • Formulas • Cheat Codes) */}
        {/* ============================================================ */}
        {(activeSection === 'all' || activeSection === 'cheat-codes' || activeSection === 'formulas') && (
          <ScrollReveal id="section-core-info">
            <div className="space-y-2">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-black uppercase tracking-wider text-[#122810] font-['JetBrains_Mono'] flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
                  <span>Section 5 &bull; Core Info Vault (Important Info &bull; Formulas &bull; Cheat Codes)</span>
                </span>
                {activeSection !== 'all' && (
                  <button
                    onClick={() => handleSelectSection('all')}
                    className="text-xs font-bold text-slate-600 hover:text-slate-950 cursor-pointer"
                  >
                    View Full Dashboard &rarr;
                  </button>
                )}
              </div>
              <CoreInfoSection
                stuckConcepts={stuckConcepts}
                initialSubTab={activeSection === 'formulas' ? 'formulas' : 'important-info'}
                onToggleResolveStruggle={handleToggleResolvedStruggle}
                onDeleteStruggle={handleDeleteStruggle}
              />
            </div>
          </ScrollReveal>
        )}

        {/* ============================================================ */}
        {/* SECTION 6: MISTAKE AUTOPSY & ERROR LOG                       */}
        {/* ============================================================ */}
        {(activeSection === 'all' || activeSection === 'error-log') && (
          <ScrollReveal id="section-error-log">
            <div className="space-y-2">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-black uppercase tracking-wider text-slate-800 font-['JetBrains_Mono'] flex items-center gap-1.5">
                  <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
                  <span>Section 6 &bull; Mistake Autopsy & Error Log</span>
                </span>
                {activeSection !== 'all' && (
                  <button
                    onClick={() => setActiveSection('all')}
                    className="text-xs font-bold text-slate-600 hover:text-slate-950"
                  >
                    View Full Dashboard &rarr;
                  </button>
                )}
              </div>
              <ErrorLogSection
                entries={errorLogs}
                onAddEntry={handleAddErrorLog}
                onDeleteEntry={handleDeleteErrorLog}
                onToggleReviewed={handleToggleReviewedErrorLog}
                onOpenModal={() => setErrorLogModalOpen(true)}
              />
            </div>
          </ScrollReveal>
        )}

        {/* ============================================================ */}
        {/* SECTION 7: CRESCENT MODEL EXAM DAY & PROTOCOLS (NOV 7)       */}
        {/* ============================================================ */}
        {(activeSection === 'all' || activeSection === 'crescent') && (
          <ScrollReveal id="section-crescent">
            <div className="space-y-2">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-black uppercase tracking-wider text-rose-800 font-['JetBrains_Mono'] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-rose-600" />
                  <span>Section 7 &bull; Crescent Model Official Paper Exam Day &amp; Protocols (Nov 7)</span>
                </span>
                {activeSection !== 'all' && (
                  <button
                    onClick={() => setActiveSection('all')}
                    className="text-xs font-bold text-slate-600 hover:text-slate-950"
                  >
                    View Full Dashboard &rarr;
                  </button>
                )}
              </div>
              <CrescentModelSection
                items={packingList}
                onToggleItem={handleTogglePackingItem}
                onAddItem={handleAddPackingItem}
              />
            </div>
          </ScrollReveal>
        )}

        {/* ============================================================ */}
        {/* DEDICATED FULL PAGE VIEW: SCORE & GAP CALCULATOR             */}
        {/* ============================================================ */}
        {activeSection === 'score-calculator' && (
          <ScrollReveal id="section-score-calculator-page">
            <div className="space-y-4">
              <div className="flex items-center justify-between px-1">
                <span className="text-xs font-black uppercase tracking-wider text-sky-800 font-['JetBrains_Mono'] flex items-center gap-1.5">
                  <Target className="w-3.5 h-3.5 text-sky-600" />
                  <span>Dedicated Mock Test Score &amp; Gap Calculator</span>
                </span>
                <button
                  onClick={() => handleSelectSection('phase-2')}
                  className="text-xs font-bold text-slate-600 hover:text-slate-950 cursor-pointer"
                >
                  &larr; Back to Phase 2 Schedule
                </button>
              </div>
              <ScoreCalculatorSection onNavigateToErrorLog={() => handleSelectSection('error-log')} />
            </div>
          </ScrollReveal>
        )}

        {/* Bottom Quick Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-700 pt-6 border-t border-slate-300 gap-3">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-extrabold text-slate-900 font-['JetBrains_Mono']">The Anti-Burnout SAT System</span>
            <span>&bull;</span>
            <button
              onClick={() => handleSelectSection('cheat-codes')}
              className="text-indigo-700 hover:underline font-bold cursor-pointer"
            >
              Tactical Cheat Codes (Desmos & R&W)
            </button>
          </div>

          <div>
            <button
              onClick={handleResetProgress}
              className="text-slate-500 hover:text-rose-600 font-bold transition flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Clean Start</span>
            </button>
          </div>
        </div>
      </main>
      )}

      {/* Error Log Mistake Autopsy Modal */}
      <ErrorLogModal
        isOpen={errorLogModalOpen}
        onClose={() => setErrorLogModalOpen(false)}
        entries={errorLogs}
        onAddEntry={handleAddErrorLog}
        onDeleteEntry={handleDeleteErrorLog}
        onToggleReviewed={handleToggleReviewedErrorLog}
      />

      {/* Stuck Concept / Struggle Logger Subsection Modal */}
      <StuckConceptModal
        isOpen={!!stuckModalDay}
        day={stuckModalDay}
        onClose={() => setStuckModalDay(null)}
        onSave={handleSaveStruggle}
        existingStruggles={stuckConcepts.filter((s) => s.dateStr === stuckModalDay?.dateStr)}
      />

      {/* Bag Packing & Crescent Model Protocol Modal */}
      <PackingModal
        isOpen={packingModalOpen}
        onClose={() => setPackingModalOpen(false)}
        items={packingList}
        onToggleItem={handleTogglePackingItem}
        onAddItem={handleAddPackingItem}
      />
    </div>
  );
}
