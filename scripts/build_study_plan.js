const fs = require('fs');
const path = require('path');

// ============================================================================
// OFFICIAL UPDATED SAT STUDY PLAN
// Phase 1: Sep 14 - Oct 27 (Days 1 to 30; Sep 22-30 = 9 Buffer Days, Resumes Oct 1)
// Phase 2: Oct 28 - Nov 06 (3 Full Mocks, Autopsies, Drills & Taper)
// Exam Day: Sat Nov 07 (Official SAT at Crescent Model School)
// ============================================================================

const WEEKS_META = [
  {
    id: 'week-1',
    weekNumber: 1,
    title: 'Week 1: Problem Solving & Advanced Math Foundations',
    dateRange: 'Sep 14 to Sep 20',
    subtitle: 'Ratios, unit conversions, percentages, data distributions & quadratic foundations.',
    phase: 'foundations',
    startDate: '2026-09-14',
    endDate: '2026-09-20'
  },
  {
    id: 'week-2',
    weekNumber: 2,
    title: 'Week 2: Math U5 Launch & Recovery Buffer Block',
    dateRange: 'Sep 21 to Sep 27',
    subtitle: 'Day 7 completed, then Sep 22–27 buffer window for full illness recovery.',
    phase: 'foundations',
    startDate: '2026-09-21',
    endDate: '2026-09-27'
  },
  {
    id: 'week-3',
    weekNumber: 3,
    title: 'Week 3: Illness Buffer Recovery & Phase 1 Resume (Oct 01 - Oct 04)',
    dateRange: 'Sep 28 to Oct 04',
    subtitle: 'Sep 28-30 illness recovery; Days 8–10 launch trig, circles, linear systems & distributions.',
    phase: 'foundations',
    startDate: '2026-09-28',
    endDate: '2026-10-04'
  },
  {
    id: 'week-4',
    weekNumber: 4,
    title: 'Week 4: Advanced Quadratics, Functions, Geometry & Reading Skills',
    dateRange: 'Oct 05 to Oct 11',
    subtitle: 'Days 11–16 cover ratios, data inferences, factoring, polynomials & rhetorical skills.',
    phase: 'foundations',
    startDate: '2026-10-05',
    endDate: '2026-10-11'
  },
  {
    id: 'week-5',
    weekNumber: 5,
    title: 'Week 5: Advanced Algebra, Statistics & Grammar Mastery',
    dateRange: 'Oct 12 to Oct 18',
    subtitle: 'Days 17–22 master 3D geometry, circle equations, linear inequalities, percentages & data.',
    phase: 'foundations',
    startDate: '2026-10-12',
    endDate: '2026-10-18'
  },
  {
    id: 'week-6',
    weekNumber: 6,
    title: 'Week 6: Exponential Models, Advanced Quadratics & Grammar Systems',
    dateRange: 'Oct 19 to Oct 25',
    subtitle: 'Days 23–28 cover scatterplots, quadratics, systems, word problems & grammar conventions.',
    phase: 'foundations',
    startDate: '2026-10-19',
    endDate: '2026-10-25'
  },
  {
    id: 'week-7',
    weekNumber: 7,
    title: 'Week 7: Phase 1 Climax (Ends Oct 27) & Phase 2 Launch (Tests #1 & #2)',
    dateRange: 'Oct 26 to Nov 01',
    subtitle: 'Days 29-30 complete all 145 skills by Tue Oct 27. Phase 2 launches Wed Oct 28 with Test #1 & Test #2 on Sat Oct 31.',
    phase: 'bluebook',
    startDate: '2026-10-26',
    endDate: '2026-11-01'
  },
  {
    id: 'week-8',
    weekNumber: 8,
    title: 'Week 8: Test #3 Final Mock, Taper, Packout & Official SAT Exam Day',
    dateRange: 'Nov 02 to Nov 07',
    subtitle: 'Test #3 (Tue Nov 3), light taper, bag packout, full rest & Sat Nov 7 Exam Day.',
    phase: 'exam',
    startDate: '2026-11-02',
    endDate: '2026-11-07'
  }
];

// Raw definition of all days
const ALL_DAYS_DATA = [
  // ==========================================
  // WEEK 1 (Sep 14 - Sep 20)
  // ==========================================
  {
    dateStr: '2026-09-14',
    dayOfWeek: 'Mon',
    formattedDate: 'Mon Sep 14',
    dayNumber: 1,
    phase: 'foundations',
    isBuffer: false,
    isTestDay: false,
    specialInstructions: 'Day 1: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals.',
    rawTasks: [
      { timeSlot: '6:30 PM - 6:50 PM', type: 'math', code: 'Math U3.2', topic: 'Unit conversion', duration: 20 },
      { timeSlot: '6:50 PM - 7:10 PM', type: 'math', code: 'Math U3.3', topic: 'Percentages', duration: 20 },
      { timeSlot: '7:10 PM - 7:30 PM', type: 'math', code: 'Math U3.4', topic: 'Center, spread, and shape of distributions', duration: 20 },
      { timeSlot: '7:30 PM - 7:45 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '7:45 PM - 8:05 PM', type: 'math', code: 'Math U3.5', topic: 'Data representations', duration: 20 },
    ]
  },
  {
    dateStr: '2026-09-15',
    dayOfWeek: 'Tue',
    formattedDate: 'Tue Sep 15',
    dayNumber: 2,
    phase: 'foundations',
    isBuffer: false,
    isTestDay: false,
    specialInstructions: 'Day 2: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals.',
    rawTasks: [
      { timeSlot: '6:30 PM - 6:50 PM', type: 'math', code: 'Math U3.6', topic: 'Scatterplots', duration: 20 },
      { timeSlot: '6:50 PM - 7:10 PM', type: 'math', code: 'Math U3.7', topic: 'Linear and exponential growth', duration: 20 },
      { timeSlot: '7:10 PM - 7:30 PM', type: 'math', code: 'Math U3.8', topic: 'Probability and relative frequency', duration: 20 },
      { timeSlot: '7:30 PM - 7:45 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '7:45 PM - 8:05 PM', type: 'math', code: 'Math U3.9', topic: 'Data inferences', duration: 20 },
    ]
  },
  {
    dateStr: '2026-09-16',
    dayOfWeek: 'Wed',
    formattedDate: 'Wed Sep 16',
    dayNumber: 3,
    phase: 'foundations',
    isBuffer: false,
    isTestDay: false,
    specialInstructions: 'Day 3: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals.',
    rawTasks: [
      { timeSlot: '6:30 PM - 6:50 PM', type: 'math', code: 'Math U3.10', topic: 'Evaluating statistical claims', duration: 20 },
      { timeSlot: '6:50 PM - 7:15 PM', type: 'math', code: 'Math U4.1', topic: 'Factoring quadratic and polynomial expressions', duration: 25 },
      { timeSlot: '7:15 PM - 7:30 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '7:30 PM - 7:55 PM', type: 'math', code: 'Math U4.2', topic: 'Radicals and rational exponents', duration: 25 },
      { timeSlot: '7:55 PM - 8:20 PM', type: 'math', code: 'Math U4.3', topic: 'Operations with polynomials', duration: 25 },
      { timeSlot: '8:20 PM - 8:35 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '8:35 PM - 8:55 PM', type: 'rw', code: 'R&W U3.1', topic: 'Words in context', duration: 20 },
      { timeSlot: '8:55 PM - 9:15 PM', type: 'rw', code: 'R&W U3.2', topic: 'Text structure and purpose', duration: 20 },
    ]
  },
  {
    dateStr: '2026-09-17',
    dayOfWeek: 'Thu',
    formattedDate: 'Thu Sep 17',
    dayNumber: 4,
    phase: 'foundations',
    isBuffer: false,
    isTestDay: false,
    specialInstructions: 'Day 4: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals.',
    rawTasks: [
      { timeSlot: '6:30 PM - 6:55 PM', type: 'math', code: 'Math U4.4', topic: 'Operations with rational expressions', duration: 25 },
      { timeSlot: '6:55 PM - 7:20 PM', type: 'math', code: 'Math U4.5', topic: 'Nonlinear functions', duration: 25 },
      { timeSlot: '7:20 PM - 7:35 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '7:35 PM - 8:00 PM', type: 'math', code: 'Math U4.6', topic: 'Isolating quantities', duration: 25 },
      { timeSlot: '8:00 PM - 8:20 PM', type: 'rw', code: 'R&W U3.3', topic: 'Cross-text connections', duration: 20 },
      { timeSlot: '8:20 PM - 8:35 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '8:35 PM - 8:55 PM', type: 'rw', code: 'R&W U4.1', topic: 'Transitions', duration: 20 },
    ]
  },
  {
    dateStr: '2026-09-18',
    dayOfWeek: 'Fri',
    formattedDate: 'Fri Sep 18',
    dayNumber: 5,
    phase: 'foundations',
    isBuffer: false,
    isTestDay: false,
    specialInstructions: 'Day 5: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals.',
    rawTasks: [
      { timeSlot: '6:30 PM - 6:55 PM', type: 'math', code: 'Math U4.7', topic: 'Solving quadratic equations', duration: 25 },
      { timeSlot: '6:55 PM - 7:20 PM', type: 'math', code: 'Math U4.8', topic: 'Linear and quadratic systems', duration: 25 },
      { timeSlot: '7:20 PM - 7:35 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '7:35 PM - 8:00 PM', type: 'math', code: 'Math U4.9', topic: 'Radical, rational, and absolute value equations', duration: 25 },
      { timeSlot: '8:00 PM - 8:20 PM', type: 'rw', code: 'R&W U4.2', topic: 'Rhetorical synthesis', duration: 20 },
      { timeSlot: '8:20 PM - 8:35 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '8:35 PM - 8:55 PM', type: 'rw', code: 'R&W U4.3', topic: 'Form, structure, and sense', duration: 20 },
    ]
  },
  {
    dateStr: '2026-09-19',
    dayOfWeek: 'Sat',
    formattedDate: 'Sat Sep 19',
    dayNumber: 6,
    phase: 'foundations',
    isBuffer: false,
    isTestDay: false,
    specialInstructions: 'Day 6: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals.',
    rawTasks: [
      { timeSlot: '6:30 PM - 6:55 PM', type: 'math', code: 'Math U4.10', topic: 'Quadratic and exponential word problems', duration: 25 },
      { timeSlot: '6:55 PM - 7:20 PM', type: 'math', code: 'Math U4.11', topic: 'Quadratic graphs', duration: 25 },
      { timeSlot: '7:20 PM - 7:35 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '7:35 PM - 8:00 PM', type: 'math', code: 'Math U4.12', topic: 'Exponential graphs', duration: 25 },
      { timeSlot: '8:00 PM - 8:20 PM', type: 'rw', code: 'R&W U4.4', topic: 'Boundaries', duration: 20 },
      { timeSlot: '8:20 PM - 8:35 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '8:35 PM - 8:57 PM', type: 'rw', code: 'R&W U5.1', topic: 'Command of textual evidence', duration: 22 },
    ]
  },
  {
    dateStr: '2026-09-20',
    dayOfWeek: 'Sun',
    formattedDate: 'Sun Sep 20',
    dayNumber: null,
    phase: 'foundations',
    isBuffer: true,
    isTestDay: false,
    specialInstructions: 'Weekly recovery window. Anti-burnout rule #1: Resting on Sundays consolidates the week’s learning and resets mental stamina.',
    rawTasks: [
      { timeSlot: 'All Day', type: 'buffer', code: 'REST', topic: 'Screen-Free Mental Reset (No Studying)', duration: 0 },
    ]
  },

  // ==========================================
  // WEEK 2 (Sep 21 - Sep 27)
  // ==========================================
  {
    dateStr: '2026-09-21',
    dayOfWeek: 'Mon',
    formattedDate: 'Mon Sep 21',
    dayNumber: 7,
    phase: 'foundations',
    isBuffer: false,
    isTestDay: false,
    specialInstructions: 'Day 7: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals.',
    rawTasks: [
      { timeSlot: '6:30 PM - 6:55 PM', type: 'math', code: 'Math U4.13', topic: 'Polynomial and other nonlinear graphs', duration: 25 },
      { timeSlot: '6:55 PM - 7:25 PM', type: 'math', code: 'Math U5.1', topic: 'Area and volume', duration: 30 },
      { timeSlot: '7:25 PM - 7:40 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '7:40 PM - 8:10 PM', type: 'math', code: 'Math U5.2', topic: 'Congruence, similarity, and angle relationships', duration: 30 },
      { timeSlot: '8:10 PM - 8:32 PM', type: 'rw', code: 'R&W U5.2', topic: 'Command of quantitative evidence', duration: 22 },
      { timeSlot: '8:32 PM - 8:47 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '8:47 PM - 9:09 PM', type: 'rw', code: 'R&W U5.3', topic: 'Central ideas and details', duration: 22 },
    ]
  },
  {
    dateStr: '2026-09-22',
    dayOfWeek: 'Tue',
    formattedDate: 'Tue Sep 22',
    dayNumber: null,
    phase: 'foundations',
    isBuffer: true,
    isTestDay: false,
    specialInstructions: 'BUFFER DAY (illness): Zero assigned study. Full rest and recovery. Work redistributed across Oct 1 - Oct 27.',
    rawTasks: [
      { timeSlot: 'All Day', type: 'buffer', code: 'BUFFER', topic: 'Health & Recovery Buffer (No Study)', duration: 0 },
    ]
  },
  {
    dateStr: '2026-09-23',
    dayOfWeek: 'Wed',
    formattedDate: 'Wed Sep 23',
    dayNumber: null,
    phase: 'foundations',
    isBuffer: true,
    isTestDay: false,
    specialInstructions: 'BUFFER DAY (illness): Zero assigned study. Full rest and recovery. Work redistributed across Oct 1 - Oct 27.',
    rawTasks: [
      { timeSlot: 'All Day', type: 'buffer', code: 'BUFFER', topic: 'Health & Recovery Buffer (No Study)', duration: 0 },
    ]
  },
  {
    dateStr: '2026-09-24',
    dayOfWeek: 'Thu',
    formattedDate: 'Thu Sep 24',
    dayNumber: null,
    phase: 'foundations',
    isBuffer: true,
    isTestDay: false,
    specialInstructions: 'BUFFER DAY (illness): Zero assigned study. Full rest and recovery. Work redistributed across Oct 1 - Oct 27.',
    rawTasks: [
      { timeSlot: 'All Day', type: 'buffer', code: 'BUFFER', topic: 'Health & Recovery Buffer (No Study)', duration: 0 },
    ]
  },
  {
    dateStr: '2026-09-25',
    dayOfWeek: 'Fri',
    formattedDate: 'Fri Sep 25',
    dayNumber: null,
    phase: 'foundations',
    isBuffer: true,
    isTestDay: false,
    specialInstructions: 'BUFFER DAY (illness): Zero assigned study. Full rest and recovery. Work redistributed across Oct 1 - Oct 27.',
    rawTasks: [
      { timeSlot: 'All Day', type: 'buffer', code: 'BUFFER', topic: 'Health & Recovery Buffer (No Study)', duration: 0 },
    ]
  },
  {
    dateStr: '2026-09-26',
    dayOfWeek: 'Sat',
    formattedDate: 'Sat Sep 26',
    dayNumber: null,
    phase: 'foundations',
    isBuffer: true,
    isTestDay: false,
    specialInstructions: 'BUFFER DAY (illness): Zero assigned study. Full rest and recovery. Work redistributed across Oct 1 - Oct 27.',
    rawTasks: [
      { timeSlot: 'All Day', type: 'buffer', code: 'BUFFER', topic: 'Health & Recovery Buffer (No Study)', duration: 0 },
    ]
  },
  {
    dateStr: '2026-09-27',
    dayOfWeek: 'Sun',
    formattedDate: 'Sun Sep 27',
    dayNumber: null,
    phase: 'foundations',
    isBuffer: true,
    isTestDay: false,
    specialInstructions: 'Weekly recovery window. Anti-burnout rule #1: Resting on Sundays consolidates the week’s learning and resets mental stamina.',
    rawTasks: [
      { timeSlot: 'All Day', type: 'buffer', code: 'REST', topic: 'Screen-Free Mental Reset (No Studying)', duration: 0 },
    ]
  },

  // ==========================================
  // WEEK 3 (Sep 28 - Oct 04)
  // ==========================================
  {
    dateStr: '2026-09-28',
    dayOfWeek: 'Mon',
    formattedDate: 'Mon Sep 28',
    dayNumber: null,
    phase: 'foundations',
    isBuffer: true,
    isTestDay: false,
    specialInstructions: 'BUFFER DAY (illness): Zero assigned study. Full rest and recovery. Work redistributed across Oct 1 - Oct 27.',
    rawTasks: [
      { timeSlot: 'All Day', type: 'buffer', code: 'BUFFER', topic: 'Health & Recovery Buffer (No Study)', duration: 0 },
    ]
  },
  {
    dateStr: '2026-09-29',
    dayOfWeek: 'Tue',
    formattedDate: 'Tue Sep 29',
    dayNumber: null,
    phase: 'foundations',
    isBuffer: true,
    isTestDay: false,
    specialInstructions: 'BUFFER DAY (illness): Zero assigned study. Full rest and recovery. Work redistributed across Oct 1 - Oct 27.',
    rawTasks: [
      { timeSlot: 'All Day', type: 'buffer', code: 'BUFFER', topic: 'Health & Recovery Buffer (No Study)', duration: 0 },
    ]
  },
  {
    dateStr: '2026-09-30',
    dayOfWeek: 'Wed',
    formattedDate: 'Wed Sep 30',
    dayNumber: null,
    phase: 'foundations',
    isBuffer: true,
    isTestDay: false,
    specialInstructions: 'BUFFER DAY (illness): Zero assigned study. Full rest and recovery. Work redistributed across Oct 1 - Oct 27.',
    rawTasks: [
      { timeSlot: 'All Day', type: 'buffer', code: 'BUFFER', topic: 'Health & Recovery Buffer (No Study)', duration: 0 },
    ]
  },
  {
    dateStr: '2026-10-01',
    dayOfWeek: 'Thu',
    formattedDate: 'Thu Oct 01',
    dayNumber: 8,
    phase: 'foundations',
    isBuffer: false,
    isTestDay: false,
    specialInstructions: 'Day 8: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals.',
    rawTasks: [
      { timeSlot: '6:30 PM - 7:00 PM', type: 'math', code: 'Math U5.3', topic: 'Right triangle trigonometry', duration: 30 },
      { timeSlot: '7:00 PM - 7:30 PM', type: 'math', code: 'Math U5.4', topic: 'Circle theorems', duration: 30 },
      { timeSlot: '7:30 PM - 7:45 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '7:45 PM - 8:15 PM', type: 'math', code: 'Math U5.5', topic: 'Unit circle trigonometry', duration: 30 },
      { timeSlot: '8:15 PM - 8:37 PM', type: 'rw', code: 'R&W U5.4', topic: 'Inferences', duration: 22 },
      { timeSlot: '8:37 PM - 8:52 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '8:52 PM - 9:14 PM', type: 'rw', code: 'R&W U6.1', topic: 'Words in context', duration: 22 },
    ]
  },
  {
    dateStr: '2026-10-02',
    dayOfWeek: 'Fri',
    formattedDate: 'Fri Oct 02',
    dayNumber: 9,
    phase: 'foundations',
    isBuffer: false,
    isTestDay: false,
    specialInstructions: 'Day 9: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals.',
    rawTasks: [
      { timeSlot: '6:30 PM - 7:00 PM', type: 'math', code: 'Math U5.6', topic: 'Circle equations', duration: 30 },
      { timeSlot: '7:00 PM - 7:25 PM', type: 'math', code: 'Math U6.1', topic: 'Solving linear equations and inequalities', duration: 25 },
      { timeSlot: '7:25 PM - 7:40 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '7:40 PM - 8:05 PM', type: 'math', code: 'Math U6.2', topic: 'Linear equation word problems', duration: 25 },
      { timeSlot: '8:05 PM - 8:30 PM', type: 'math', code: 'Math U6.3', topic: 'Linear relationship word problems', duration: 25 },
      { timeSlot: '8:30 PM - 8:45 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '8:45 PM - 9:10 PM', type: 'math', code: 'Math U6.4', topic: 'Graphs of linear equations and functions', duration: 25 },
    ]
  },
  {
    dateStr: '2026-10-03',
    dayOfWeek: 'Sat',
    formattedDate: 'Sat Oct 03',
    dayNumber: 10,
    phase: 'foundations',
    isBuffer: false,
    isTestDay: false,
    specialInstructions: 'Day 10: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals.',
    rawTasks: [
      { timeSlot: '6:30 PM - 6:55 PM', type: 'math', code: 'Math U6.5', topic: 'Solving systems of linear equations', duration: 25 },
      { timeSlot: '6:55 PM - 7:20 PM', type: 'math', code: 'Math U6.6', topic: 'Systems of linear equations word problems', duration: 25 },
      { timeSlot: '7:20 PM - 7:35 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '7:35 PM - 8:00 PM', type: 'math', code: 'Math U6.7', topic: 'Linear inequality word problems', duration: 25 },
      { timeSlot: '8:00 PM - 8:25 PM', type: 'math', code: 'Math U6.8', topic: 'Graphs of linear systems and inequalities', duration: 25 },
      { timeSlot: '8:25 PM - 8:40 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '8:40 PM - 9:02 PM', type: 'rw', code: 'R&W U6.2', topic: 'Text structure and purpose', duration: 22 },
      { timeSlot: '9:02 PM - 9:24 PM', type: 'rw', code: 'R&W U6.3', topic: 'Cross-text connections', duration: 22 },
    ]
  },
  {
    dateStr: '2026-10-04',
    dayOfWeek: 'Sun',
    formattedDate: 'Sun Oct 04',
    dayNumber: null,
    phase: 'foundations',
    isBuffer: true,
    isTestDay: false,
    specialInstructions: 'Weekly recovery window. Anti-burnout rule #1: Resting on Sundays consolidates the week’s learning and resets mental stamina.',
    rawTasks: [
      { timeSlot: 'All Day', type: 'buffer', code: 'REST', topic: 'Screen-Free Mental Reset (No Studying)', duration: 0 },
    ]
  },

  // ==========================================
  // WEEK 4 (Oct 05 - Oct 11)
  // ==========================================
  {
    dateStr: '2026-10-05',
    dayOfWeek: 'Mon',
    formattedDate: 'Mon Oct 05',
    dayNumber: 11,
    phase: 'foundations',
    isBuffer: false,
    isTestDay: false,
    specialInstructions: 'Day 11: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals.',
    rawTasks: [
      { timeSlot: '6:30 PM - 6:55 PM', type: 'math', code: 'Math U7.1', topic: 'Ratios, rates, and proportions', duration: 25 },
      { timeSlot: '6:55 PM - 7:20 PM', type: 'math', code: 'Math U7.2', topic: 'Unit conversion', duration: 25 },
      { timeSlot: '7:20 PM - 7:35 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '7:35 PM - 8:00 PM', type: 'math', code: 'Math U7.3', topic: 'Percentages', duration: 25 },
      { timeSlot: '8:00 PM - 8:25 PM', type: 'math', code: 'Math U7.4', topic: 'Center, spread, and shape of distributions', duration: 25 },
      { timeSlot: '8:25 PM - 8:40 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '8:40 PM - 9:02 PM', type: 'rw', code: 'R&W U7.1', topic: 'Transitions', duration: 22 },
      { timeSlot: '9:02 PM - 9:24 PM', type: 'rw', code: 'R&W U7.2', topic: 'Rhetorical synthesis', duration: 22 },
    ]
  },
  {
    dateStr: '2026-10-06',
    dayOfWeek: 'Tue',
    formattedDate: 'Tue Oct 06',
    dayNumber: 12,
    phase: 'foundations',
    isBuffer: false,
    isTestDay: false,
    specialInstructions: 'Day 12: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals.',
    rawTasks: [
      { timeSlot: '6:30 PM - 6:55 PM', type: 'math', code: 'Math U7.5', topic: 'Data representations', duration: 25 },
      { timeSlot: '6:55 PM - 7:20 PM', type: 'math', code: 'Math U7.6', topic: 'Scatterplots', duration: 25 },
      { timeSlot: '7:20 PM - 7:35 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '7:35 PM - 8:00 PM', type: 'math', code: 'Math U7.7', topic: 'Linear and exponential growth', duration: 25 },
      { timeSlot: '8:00 PM - 8:25 PM', type: 'math', code: 'Math U7.8', topic: 'Probability and relative frequency', duration: 25 },
      { timeSlot: '8:25 PM - 8:40 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '8:40 PM - 9:02 PM', type: 'rw', code: 'R&W U7.3', topic: 'Form, structure, and sense', duration: 22 },
      { timeSlot: '9:02 PM - 9:24 PM', type: 'rw', code: 'R&W U7.4', topic: 'Boundaries', duration: 22 },
    ]
  },
  {
    dateStr: '2026-10-07',
    dayOfWeek: 'Wed',
    formattedDate: 'Wed Oct 07',
    dayNumber: 13,
    phase: 'foundations',
    isBuffer: false,
    isTestDay: false,
    specialInstructions: 'Day 13: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals.',
    rawTasks: [
      { timeSlot: '6:30 PM - 6:55 PM', type: 'math', code: 'Math U7.9', topic: 'Data inferences', duration: 25 },
      { timeSlot: '6:55 PM - 7:20 PM', type: 'math', code: 'Math U7.10', topic: 'Evaluating statistical claims', duration: 25 },
      { timeSlot: '7:20 PM - 7:35 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '7:35 PM - 8:05 PM', type: 'math', code: 'Math U8.1', topic: 'Factoring quadratic and polynomial expressions', duration: 30 },
      { timeSlot: '8:05 PM - 8:35 PM', type: 'math', code: 'Math U8.2', topic: 'Radicals and rational exponents', duration: 30 },
      { timeSlot: '8:35 PM - 8:50 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '8:50 PM - 9:15 PM', type: 'rw', code: 'R&W U8.1', topic: 'Command of textual evidence', duration: 25 },
    ]
  },
  {
    dateStr: '2026-10-08',
    dayOfWeek: 'Thu',
    formattedDate: 'Thu Oct 08',
    dayNumber: 14,
    phase: 'foundations',
    isBuffer: false,
    isTestDay: false,
    specialInstructions: 'Day 14: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals.',
    rawTasks: [
      { timeSlot: '6:30 PM - 7:00 PM', type: 'math', code: 'Math U8.3', topic: 'Operations with polynomials', duration: 30 },
      { timeSlot: '7:00 PM - 7:30 PM', type: 'math', code: 'Math U8.4', topic: 'Operations with rational expressions', duration: 30 },
      { timeSlot: '7:30 PM - 7:45 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '7:45 PM - 8:15 PM', type: 'math', code: 'Math U8.5', topic: 'Nonlinear functions', duration: 30 },
      { timeSlot: '8:15 PM - 8:40 PM', type: 'rw', code: 'R&W U8.2', topic: 'Command of quantitative evidence', duration: 25 },
      { timeSlot: '8:40 PM - 8:55 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '8:55 PM - 9:20 PM', type: 'rw', code: 'R&W U8.3', topic: 'Central ideas and details', duration: 25 },
    ]
  },
  {
    dateStr: '2026-10-09',
    dayOfWeek: 'Fri',
    formattedDate: 'Fri Oct 09',
    dayNumber: 15,
    phase: 'foundations',
    isBuffer: false,
    isTestDay: false,
    specialInstructions: 'Day 15: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals.',
    rawTasks: [
      { timeSlot: '6:30 PM - 7:00 PM', type: 'math', code: 'Math U8.6', topic: 'Isolating quantities', duration: 30 },
      { timeSlot: '7:00 PM - 7:30 PM', type: 'math', code: 'Math U8.7', topic: 'Solving quadratic equations', duration: 30 },
      { timeSlot: '7:30 PM - 7:45 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '7:45 PM - 8:15 PM', type: 'math', code: 'Math U8.8', topic: 'Linear and quadratic systems', duration: 30 },
      { timeSlot: '8:15 PM - 8:45 PM', type: 'math', code: 'Math U8.9', topic: 'Radical, rational, and absolute value equations', duration: 30 },
      { timeSlot: '8:45 PM - 9:00 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '9:00 PM - 9:25 PM', type: 'rw', code: 'R&W U8.4', topic: 'Inferences', duration: 25 },
    ]
  },
  {
    dateStr: '2026-10-10',
    dayOfWeek: 'Sat',
    formattedDate: 'Sat Oct 10',
    dayNumber: 16,
    phase: 'foundations',
    isBuffer: false,
    isTestDay: false,
    specialInstructions: 'Day 16: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals.',
    rawTasks: [
      { timeSlot: '6:30 PM - 7:00 PM', type: 'math', code: 'Math U8.10', topic: 'Quadratic and exponential word problems', duration: 30 },
      { timeSlot: '7:00 PM - 7:30 PM', type: 'math', code: 'Math U8.11', topic: 'Quadratic graphs', duration: 30 },
      { timeSlot: '7:30 PM - 7:45 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '7:45 PM - 8:15 PM', type: 'math', code: 'Math U8.12', topic: 'Exponential graphs', duration: 30 },
      { timeSlot: '8:15 PM - 8:40 PM', type: 'rw', code: 'R&W U9.1', topic: 'Words in context', duration: 25 },
      { timeSlot: '8:40 PM - 8:55 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '8:55 PM - 9:20 PM', type: 'rw', code: 'R&W U9.2', topic: 'Text structure and purpose', duration: 25 },
    ]
  },
  {
    dateStr: '2026-10-11',
    dayOfWeek: 'Sun',
    formattedDate: 'Sun Oct 11',
    dayNumber: null,
    phase: 'foundations',
    isBuffer: true,
    isTestDay: false,
    specialInstructions: 'Weekly recovery window. Anti-burnout rule #1: Resting on Sundays consolidates the week’s learning and resets mental stamina.',
    rawTasks: [
      { timeSlot: 'All Day', type: 'buffer', code: 'REST', topic: 'Screen-Free Mental Reset (No Studying)', duration: 0 },
    ]
  },

  // ==========================================
  // WEEK 5 (Oct 12 - Oct 18)
  // ==========================================
  {
    dateStr: '2026-10-12',
    dayOfWeek: 'Mon',
    formattedDate: 'Mon Oct 12',
    dayNumber: 17,
    phase: 'foundations',
    isBuffer: false,
    isTestDay: false,
    specialInstructions: 'Day 17: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals.',
    rawTasks: [
      { timeSlot: '6:30 PM - 7:00 PM', type: 'math', code: 'Math U8.13', topic: 'Polynomial and other nonlinear graphs', duration: 30 },
      { timeSlot: '7:00 PM - 7:35 PM', type: 'math', code: 'Math U9.1', topic: 'Area and volume', duration: 35 },
      { timeSlot: '7:35 PM - 7:50 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '7:50 PM - 8:25 PM', type: 'math', code: 'Math U9.2', topic: 'Congruence, similarity, and angle relationships', duration: 35 },
      { timeSlot: '8:25 PM - 8:50 PM', type: 'rw', code: 'R&W U9.3', topic: 'Cross-text connections', duration: 25 },
      { timeSlot: '8:50 PM - 9:05 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '9:05 PM - 9:30 PM', type: 'rw', code: 'R&W U10.1', topic: 'Transitions', duration: 25 },
    ]
  },
  {
    dateStr: '2026-10-13',
    dayOfWeek: 'Tue',
    formattedDate: 'Tue Oct 13',
    dayNumber: 18,
    phase: 'foundations',
    isBuffer: false,
    isTestDay: false,
    specialInstructions: 'Day 18: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals.',
    rawTasks: [
      { timeSlot: '6:30 PM - 7:05 PM', type: 'math', code: 'Math U9.3', topic: 'Right triangle trigonometry', duration: 35 },
      { timeSlot: '7:05 PM - 7:40 PM', type: 'math', code: 'Math U9.4', topic: 'Circle theorems', duration: 35 },
      { timeSlot: '7:40 PM - 7:55 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '7:55 PM - 8:30 PM', type: 'math', code: 'Math U9.5', topic: 'Unit circle trigonometry', duration: 35 },
      { timeSlot: '8:30 PM - 8:55 PM', type: 'rw', code: 'R&W U10.2', topic: 'Rhetorical synthesis', duration: 25 },
    ]
  },
  {
    dateStr: '2026-10-14',
    dayOfWeek: 'Wed',
    formattedDate: 'Wed Oct 14',
    dayNumber: 19,
    phase: 'foundations',
    isBuffer: false,
    isTestDay: false,
    specialInstructions: 'Day 19: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals.',
    rawTasks: [
      { timeSlot: '6:30 PM - 7:05 PM', type: 'math', code: 'Math U9.6', topic: 'Circle equations', duration: 35 },
      { timeSlot: '7:05 PM - 7:35 PM', type: 'math', code: 'Math U10.1', topic: 'Solving linear equations and inequalities', duration: 30 },
      { timeSlot: '7:35 PM - 7:50 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '7:50 PM - 8:20 PM', type: 'math', code: 'Math U10.2', topic: 'Linear equation word problems', duration: 30 },
      { timeSlot: '8:20 PM - 8:50 PM', type: 'math', code: 'Math U10.3', topic: 'Linear relationship word problems', duration: 30 },
      { timeSlot: '8:50 PM - 9:05 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '9:05 PM - 9:30 PM', type: 'rw', code: 'R&W U10.3', topic: 'Form, structure, and sense', duration: 25 },
    ]
  },
  {
    dateStr: '2026-10-15',
    dayOfWeek: 'Thu',
    formattedDate: 'Thu Oct 15',
    dayNumber: 20,
    phase: 'foundations',
    isBuffer: false,
    isTestDay: false,
    specialInstructions: 'Day 20: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals.',
    rawTasks: [
      { timeSlot: '6:30 PM - 7:00 PM', type: 'math', code: 'Math U10.4', topic: 'Graphs of linear equations and functions', duration: 30 },
      { timeSlot: '7:00 PM - 7:30 PM', type: 'math', code: 'Math U10.5', topic: 'Solving systems of linear equations', duration: 30 },
      { timeSlot: '7:30 PM - 7:45 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '7:45 PM - 8:15 PM', type: 'math', code: 'Math U10.6', topic: 'Systems of linear equations word problems', duration: 30 },
      { timeSlot: '8:15 PM - 8:40 PM', type: 'rw', code: 'R&W U10.4', topic: 'Boundaries', duration: 25 },
      { timeSlot: '8:40 PM - 8:55 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '8:55 PM - 9:30 PM', type: 'rw', code: 'R&W U11.1', topic: 'Command of evidence', duration: 35 },
    ]
  },
  {
    dateStr: '2026-10-16',
    dayOfWeek: 'Fri',
    formattedDate: 'Fri Oct 16',
    dayNumber: 21,
    phase: 'foundations',
    isBuffer: false,
    isTestDay: false,
    specialInstructions: 'Day 21: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals.',
    rawTasks: [
      { timeSlot: '6:30 PM - 7:00 PM', type: 'math', code: 'Math U10.7', topic: 'Linear inequality word problems', duration: 30 },
      { timeSlot: '7:00 PM - 7:30 PM', type: 'math', code: 'Math U10.8', topic: 'Graphs of linear systems and inequalities', duration: 30 },
      { timeSlot: '7:30 PM - 7:45 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '7:45 PM - 8:15 PM', type: 'math', code: 'Math U11.1', topic: 'Ratios, rates, and proportions', duration: 30 },
      { timeSlot: '8:15 PM - 8:45 PM', type: 'math', code: 'Math U11.2', topic: 'Unit conversion', duration: 30 },
    ]
  },
  {
    dateStr: '2026-10-17',
    dayOfWeek: 'Sat',
    formattedDate: 'Sat Oct 17',
    dayNumber: 22,
    phase: 'foundations',
    isBuffer: false,
    isTestDay: false,
    specialInstructions: 'Day 22: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals.',
    rawTasks: [
      { timeSlot: '6:30 PM - 7:00 PM', type: 'math', code: 'Math U11.3', topic: 'Percentages', duration: 30 },
      { timeSlot: '7:00 PM - 7:30 PM', type: 'math', code: 'Math U11.4', topic: 'Center, spread, and shape of distributions', duration: 30 },
      { timeSlot: '7:30 PM - 7:45 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '7:45 PM - 8:15 PM', type: 'math', code: 'Math U11.5', topic: 'Data representations', duration: 30 },
      { timeSlot: '8:15 PM - 8:50 PM', type: 'rw', code: 'R&W U11.2', topic: 'Central ideas and details + inferences', duration: 35 },
    ]
  },
  {
    dateStr: '2026-10-18',
    dayOfWeek: 'Sun',
    formattedDate: 'Sun Oct 18',
    dayNumber: null,
    phase: 'foundations',
    isBuffer: true,
    isTestDay: false,
    specialInstructions: 'Weekly recovery window. Anti-burnout rule #1: Resting on Sundays consolidates the week’s learning and resets mental stamina.',
    rawTasks: [
      { timeSlot: 'All Day', type: 'buffer', code: 'REST', topic: 'Screen-Free Mental Reset (No Studying)', duration: 0 },
    ]
  },

  // ==========================================
  // WEEK 6 (Oct 19 - Oct 25)
  // ==========================================
  {
    dateStr: '2026-10-19',
    dayOfWeek: 'Mon',
    formattedDate: 'Mon Oct 19',
    dayNumber: 23,
    phase: 'foundations',
    isBuffer: false,
    isTestDay: false,
    specialInstructions: 'Day 23: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals.',
    rawTasks: [
      { timeSlot: '6:30 PM - 7:00 PM', type: 'math', code: 'Math U11.6', topic: 'Scatterplots', duration: 30 },
      { timeSlot: '7:00 PM - 7:30 PM', type: 'math', code: 'Math U11.7', topic: 'Linear and exponential growth', duration: 30 },
      { timeSlot: '7:30 PM - 7:45 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '7:45 PM - 8:15 PM', type: 'math', code: 'Math U11.8', topic: 'Probability and relative frequency', duration: 30 },
      { timeSlot: '8:15 PM - 8:50 PM', type: 'rw', code: 'R&W U11.3', topic: 'Words in context', duration: 35 },
    ]
  },
  {
    dateStr: '2026-10-20',
    dayOfWeek: 'Tue',
    formattedDate: 'Tue Oct 20',
    dayNumber: 24,
    phase: 'foundations',
    isBuffer: false,
    isTestDay: false,
    specialInstructions: 'Day 24: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals.',
    rawTasks: [
      { timeSlot: '6:30 PM - 7:00 PM', type: 'math', code: 'Math U11.9', topic: 'Data inferences', duration: 30 },
      { timeSlot: '7:00 PM - 7:30 PM', type: 'math', code: 'Math U11.10', topic: 'Evaluating statistical claims', duration: 30 },
      { timeSlot: '7:30 PM - 7:45 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '7:45 PM - 8:20 PM', type: 'math', code: 'Math U12.1', topic: 'Factoring quadratic and polynomial expressions', duration: 35 },
      { timeSlot: '8:20 PM - 8:55 PM', type: 'rw', code: 'R&W U11.4', topic: 'Text structure and purpose + cross-text connections', duration: 35 },
    ]
  },
  {
    dateStr: '2026-10-21',
    dayOfWeek: 'Wed',
    formattedDate: 'Wed Oct 21',
    dayNumber: 25,
    phase: 'foundations',
    isBuffer: false,
    isTestDay: false,
    specialInstructions: 'Day 25: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals.',
    rawTasks: [
      { timeSlot: '6:30 PM - 7:05 PM', type: 'math', code: 'Math U12.2', topic: 'Radicals and rational exponents', duration: 35 },
      { timeSlot: '7:05 PM - 7:40 PM', type: 'math', code: 'Math U12.3', topic: 'Operations with polynomials', duration: 35 },
      { timeSlot: '7:40 PM - 7:55 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '7:55 PM - 8:30 PM', type: 'math', code: 'Math U12.4', topic: 'Operations with rational expressions', duration: 35 },
      { timeSlot: '8:30 PM - 9:05 PM', type: 'rw', code: 'R&W U11.5', topic: 'Boundaries + form, structure, and sense', duration: 35 },
    ]
  },
  {
    dateStr: '2026-10-22',
    dayOfWeek: 'Thu',
    formattedDate: 'Thu Oct 22',
    dayNumber: 26,
    phase: 'foundations',
    isBuffer: false,
    isTestDay: false,
    specialInstructions: 'Day 26: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals.',
    rawTasks: [
      { timeSlot: '6:30 PM - 7:05 PM', type: 'math', code: 'Math U12.5', topic: 'Nonlinear functions', duration: 35 },
      { timeSlot: '7:05 PM - 7:40 PM', type: 'math', code: 'Math U12.6', topic: 'Isolating quantities', duration: 35 },
      { timeSlot: '7:40 PM - 7:55 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '7:55 PM - 8:30 PM', type: 'math', code: 'Math U12.7', topic: 'Solving quadratic equations', duration: 35 },
      { timeSlot: '8:30 PM - 9:05 PM', type: 'rw', code: 'R&W U11.6', topic: 'Transitions + rhetorical synthesis', duration: 35 },
    ]
  },
  {
    dateStr: '2026-10-23',
    dayOfWeek: 'Fri',
    formattedDate: 'Fri Oct 23',
    dayNumber: 27,
    phase: 'foundations',
    isBuffer: false,
    isTestDay: false,
    specialInstructions: 'Day 27: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals.',
    rawTasks: [
      { timeSlot: '6:30 PM - 7:05 PM', type: 'math', code: 'Math U12.8', topic: 'Linear and quadratic systems', duration: 35 },
      { timeSlot: '7:05 PM - 7:40 PM', type: 'math', code: 'Math U12.9', topic: 'Radical, rational, and absolute value equations', duration: 35 },
      { timeSlot: '7:40 PM - 7:55 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '7:55 PM - 8:30 PM', type: 'math', code: 'Math U12.10', topic: 'Quadratic and exponential word problems', duration: 35 },
      { timeSlot: '8:30 PM - 8:45 PM', type: 'rw', code: 'R&W U12.1', topic: 'Subject-verb agreement', duration: 15 },
      { timeSlot: '8:45 PM - 9:00 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '9:00 PM - 9:15 PM', type: 'rw', code: 'R&W U12.2', topic: 'Pronoun-antecedent agreement', duration: 15 },
    ]
  },
  {
    dateStr: '2026-10-24',
    dayOfWeek: 'Sat',
    formattedDate: 'Sat Oct 24',
    dayNumber: 28,
    phase: 'foundations',
    isBuffer: false,
    isTestDay: false,
    specialInstructions: 'Day 28: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals.',
    rawTasks: [
      { timeSlot: '6:30 PM - 7:05 PM', type: 'math', code: 'Math U12.11', topic: 'Quadratic graphs', duration: 35 },
      { timeSlot: '7:05 PM - 7:40 PM', type: 'math', code: 'Math U12.12', topic: 'Exponential graphs', duration: 35 },
      { timeSlot: '7:40 PM - 7:55 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '7:55 PM - 8:30 PM', type: 'math', code: 'Math U12.13', topic: 'Polynomial and other nonlinear graphs', duration: 35 },
      { timeSlot: '8:30 PM - 8:45 PM', type: 'rw', code: 'R&W U12.3', topic: 'Plurals and possessives', duration: 15 },
      { timeSlot: '8:45 PM - 9:00 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '9:00 PM - 9:15 PM', type: 'rw', code: 'R&W U12.4', topic: 'Verb forms', duration: 15 },
    ]
  },
  {
    dateStr: '2026-10-25',
    dayOfWeek: 'Sun',
    formattedDate: 'Sun Oct 25',
    dayNumber: null,
    phase: 'foundations',
    isBuffer: true,
    isTestDay: false,
    specialInstructions: 'Weekly recovery window. Anti-burnout rule #1: Resting on Sundays consolidates the week’s learning and resets mental stamina.',
    rawTasks: [
      { timeSlot: 'All Day', type: 'buffer', code: 'REST', topic: 'Screen-Free Mental Reset (No Studying)', duration: 0 },
    ]
  },

  // ==========================================
  // WEEK 7 (Oct 26 - Nov 01)
  // ==========================================
  {
    dateStr: '2026-10-26',
    dayOfWeek: 'Mon',
    formattedDate: 'Mon Oct 26',
    dayNumber: 29,
    phase: 'foundations',
    isBuffer: false,
    isTestDay: false,
    specialInstructions: 'Day 29: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals.',
    rawTasks: [
      { timeSlot: '6:30 PM - 7:10 PM', type: 'math', code: 'Math U13.1', topic: 'Area and volume', duration: 40 },
      { timeSlot: '7:10 PM - 7:50 PM', type: 'math', code: 'Math U13.2', topic: 'Congruence, similarity, and angle relationships', duration: 40 },
      { timeSlot: '7:50 PM - 8:05 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '8:05 PM - 8:45 PM', type: 'math', code: 'Math U13.3', topic: 'Right triangle trigonometry', duration: 40 },
      { timeSlot: '8:45 PM - 9:00 PM', type: 'rw', code: 'R&W U12.5', topic: 'Subject-modifier placement', duration: 15 },
      { timeSlot: '9:00 PM - 9:15 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '9:15 PM - 9:30 PM', type: 'rw', code: 'R&W U12.6', topic: 'Linking clauses', duration: 15 },
    ]
  },
  {
    dateStr: '2026-10-27',
    dayOfWeek: 'Tue',
    formattedDate: 'Tue Oct 27',
    dayNumber: 30,
    phase: 'foundations',
    isBuffer: false,
    isTestDay: false,
    specialInstructions: 'PHASE 1 COMPLETE: All 145 Khan Academy Math & R&W curriculum skills mastered! Tomorrow Phase 2 launches with Test #1.',
    rawTasks: [
      { timeSlot: '6:30 PM - 7:10 PM', type: 'math', code: 'Math U13.4', topic: 'Circle theorems', duration: 40 },
      { timeSlot: '7:10 PM - 7:50 PM', type: 'math', code: 'Math U13.5', topic: 'Unit circle trigonometry', duration: 40 },
      { timeSlot: '7:50 PM - 8:05 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '8:05 PM - 8:45 PM', type: 'math', code: 'Math U13.6', topic: 'Circle equations', duration: 40 },
      { timeSlot: '8:45 PM - 9:00 PM', type: 'rw', code: 'R&W U12.7', topic: 'Supplements', duration: 15 },
      { timeSlot: '9:00 PM - 9:15 PM', type: 'buffer', code: 'BREAK', topic: 'Screen-Free Rest & Recharge', duration: 15 },
      { timeSlot: '9:15 PM - 9:30 PM', type: 'rw', code: 'R&W U12.8', topic: 'Punctuation', duration: 15 },
    ]
  },
  {
    dateStr: '2026-10-28',
    dayOfWeek: 'Wed',
    formattedDate: 'Wed Oct 28',
    dayNumber: null,
    phase: 'bluebook',
    isBuffer: false,
    isTestDay: true,
    specialInstructions: 'TEST #1: Full timed Bluebook Practice Test #1 under strict testing conditions (8:00 AM - 10:24 AM). Phase 2 officially launches!',
    rawTasks: [
      { timeSlot: '8:00 AM - 10:24 AM', type: 'test', code: 'BLUEBOOK TEST 1', topic: 'TEST #1 (full Bluebook Practice Test, real conditions)', duration: 144 },
    ]
  },
  {
    dateStr: '2026-10-29',
    dayOfWeek: 'Thu',
    formattedDate: 'Thu Oct 29',
    dayNumber: null,
    phase: 'bluebook',
    isBuffer: false,
    isTestDay: false,
    specialInstructions: 'Error-log review of Test #1 + Math/Desmos drills on weak areas (75 min). Dissect every mistake in your error notebook.',
    rawTasks: [
      { timeSlot: '6:30 PM - 7:45 PM', type: 'review', code: 'REVIEW', topic: 'Error-log review of Test #1 + Math/Desmos drills on weak areas (75 min)', duration: 75 },
    ]
  },
  {
    dateStr: '2026-10-30',
    dayOfWeek: 'Fri',
    formattedDate: 'Fri Oct 30',
    dayNumber: null,
    phase: 'bluebook',
    isBuffer: false,
    isTestDay: false,
    specialInstructions: 'Targeted R&W drills, punctuation/grammar review (60 min). Focus on transitions and boundary rules.',
    rawTasks: [
      { timeSlot: '6:30 PM - 7:30 PM', type: 'drill', code: 'DRILL', topic: 'Targeted R&W drills, punctuation/grammar review (60 min)', duration: 60 },
    ]
  },
  {
    dateStr: '2026-10-31',
    dayOfWeek: 'Sat',
    formattedDate: 'Sat Oct 31',
    dayNumber: null,
    phase: 'bluebook',
    isBuffer: false,
    isTestDay: true,
    specialInstructions: 'TEST #2: Full timed Bluebook Practice Test #2 under real exam conditions (8:00 AM - 10:24 AM).',
    rawTasks: [
      { timeSlot: '8:00 AM - 10:24 AM', type: 'test', code: 'BLUEBOOK TEST 2', topic: 'TEST #2 (full Bluebook Practice Test)', duration: 144 },
    ]
  },
  {
    dateStr: '2026-11-01',
    dayOfWeek: 'Sun',
    formattedDate: 'Sun Nov 01',
    dayNumber: null,
    phase: 'bluebook',
    isBuffer: true,
    isTestDay: false,
    specialInstructions: 'Weekly recovery window. Full day off, no studying. Guaranteed mental reset before final week.',
    rawTasks: [
      { timeSlot: 'All Day', type: 'buffer', code: 'REST', topic: 'Screen-Free Mental Reset (No Studying)', duration: 0 },
    ]
  },

  // ==========================================
  // WEEK 8 (Nov 02 - Nov 07)
  // ==========================================
  {
    dateStr: '2026-11-02',
    dayOfWeek: 'Mon',
    formattedDate: 'Mon Nov 02',
    dayNumber: null,
    phase: 'bluebook',
    isBuffer: false,
    isTestDay: false,
    specialInstructions: 'Deep review, punctuation & transitions traps + Math cleanup (60 min). Lock in test-day strategy.',
    rawTasks: [
      { timeSlot: '6:30 PM - 7:30 PM', type: 'review', code: 'REVIEW', topic: 'Deep review, punctuation & transitions traps + Math cleanup (60 min)', duration: 60 },
    ]
  },
  {
    dateStr: '2026-11-03',
    dayOfWeek: 'Tue',
    formattedDate: 'Tue Nov 03',
    dayNumber: null,
    phase: 'bluebook',
    isBuffer: false,
    isTestDay: true,
    specialInstructions: 'TEST #3: Final full Bluebook Practice Test under strict timed conditions (8:00 AM - 10:24 AM).',
    rawTasks: [
      { timeSlot: '8:00 AM - 10:24 AM', type: 'test', code: 'BLUEBOOK TEST 3', topic: 'TEST #3 (final full test, timed)', duration: 144 },
    ]
  },
  {
    dateStr: '2026-11-04',
    dayOfWeek: 'Wed',
    formattedDate: 'Wed Nov 04',
    dayNumber: null,
    phase: 'exam',
    isBuffer: false,
    isTestDay: false,
    specialInstructions: 'Error-log review of Test #3 + simulate exact test-day timing (45 min). Dissect every wrong question.',
    rawTasks: [
      { timeSlot: '6:30 PM - 7:15 PM', type: 'review', code: 'REVIEW', topic: 'Error-log review of Test #3 + simulate exact test-day timing (45 min)', duration: 45 },
    ]
  },
  {
    dateStr: '2026-11-05',
    dayOfWeek: 'Thu',
    formattedDate: 'Thu Nov 05',
    dayNumber: null,
    phase: 'exam',
    isBuffer: false,
    isTestDay: false,
    specialInstructions: 'Logistics check: verify Bluebook app setup, printed ticket, and valid physical ID + pack testing bag (30 min).',
    rawTasks: [
      { timeSlot: '6:30 PM - 7:00 PM', type: 'logistics', code: 'LOGISTICS', topic: 'Verify Bluebook app/ID/admission ticket + pack your bag (30 min)', duration: 30 },
    ]
  },
  {
    dateStr: '2026-11-06',
    dayOfWeek: 'Fri',
    formattedDate: 'Fri Nov 06',
    dayNumber: null,
    phase: 'exam',
    isBuffer: true,
    isTestDay: false,
    specialInstructions: 'FULL REST: Zero studying. Eat well, hydrate, relax and sleep early for exam day.',
    rawTasks: [
      { timeSlot: 'All Day', type: 'buffer', code: 'REST', topic: 'Mandatory Full Day Off • Relax & Sleep Early', duration: 0 },
    ]
  },
  {
    dateStr: '2026-11-07',
    dayOfWeek: 'Sat',
    formattedDate: 'Sat Nov 07',
    dayNumber: null,
    phase: 'exam',
    isBuffer: false,
    isTestDay: true,
    specialInstructions: 'Sat Nov 7 -- EXAM DAY: Follow your official admission ticket reporting time exactly. Crescent Model School, Shadman Lahore. Arrive by 7:15 AM sharp (gates lock at 7:45 AM). Stay calm and execute.',
    rawTasks: [
      { timeSlot: '7:15 AM - 12:30 PM', type: 'exam', code: 'EXAM', topic: 'OFFICIAL DIGITAL SAT EXAM DAY: Crescent Model School, Shadman Lahore (Arrive 7:15 AM)', duration: 144 },
    ]
  },
];

// Helper to format task label
function formatTaskLabel(t) {
  if (t.code === 'BREAK' || t.code === 'BUFFER' || t.code === 'REST') {
    return t.topic;
  }
  if (t.type === 'test') {
    return t.topic;
  }
  if (t.code) {
    return `[${t.code.toUpperCase()}] ${t.topic}`;
  }
  return t.topic;
}

// Convert raw days into full DayPlan objects
function processDay(rawDay, weekMeta) {
  let studyTimeMinutes = 0;
  let breakTimeMinutes = 0;

  const tasks = rawDay.rawTasks.map((t, idx) => {
    const isBreak = t.code === 'BREAK' || t.code === 'REST' || t.code === 'BUFFER';
    if (isBreak) {
      breakTimeMinutes += t.duration;
    } else {
      studyTimeMinutes += t.duration;
    }

    let mappedSubject = 'buffer';
    if (t.type === 'math') mappedSubject = 'math';
    else if (t.type === 'rw') mappedSubject = 'rw';
    else if (t.type === 'test') mappedSubject = 'test';
    else if (t.type === 'review') mappedSubject = 'review';
    else if (t.type === 'logistics') mappedSubject = 'logistics';
    else if (t.type === 'exam') mappedSubject = 'test';
    else if (t.type === 'drill') mappedSubject = 'drill';

    let taskId = `task-${rawDay.dateStr}-${idx + 1}`;
    if (rawDay.dateStr === '2026-10-28' && t.type === 'test') taskId = 'bluebook-test-1';
    if (rawDay.dateStr === '2026-10-31' && t.type === 'test') taskId = 'bluebook-test-2';
    if (rawDay.dateStr === '2026-11-03' && t.type === 'test') taskId = 'bluebook-test-3';
    if (rawDay.dateStr === '2026-11-07' && (t.type === 'exam' || t.code === 'EXAM')) taskId = 'sat-exam-day';

    return {
      id: taskId,
      label: formatTaskLabel(t),
      subject: mappedSubject,
      topic: t.topic,
      code: t.code,
      timeSlot: t.timeSlot,
      durationMinutes: t.duration,
      completed: false,
    };
  });

  const totalTimeMinutes = studyTimeMinutes + breakTimeMinutes;

  return {
    id: rawDay.dateStr,
    dateStr: rawDay.dateStr,
    dayOfWeek: rawDay.dayOfWeek,
    formattedDate: rawDay.formattedDate,
    dayNumber: rawDay.dayNumber,
    weekId: weekMeta.id,
    weekNumber: weekMeta.weekNumber,
    weekTitle: weekMeta.title.replace(/^Week \d+:\s*/, ''),
    phase: rawDay.phase || weekMeta.phase,
    isBuffer: rawDay.isBuffer,
    isTestDay: rawDay.isTestDay,
    studyTimeMinutes,
    breakTimeMinutes,
    totalTimeMinutes,
    tasks,
    specialInstructions: rawDay.specialInstructions
  };
}

// Assemble into 8 weeks
const studyPlanWeeks = [];

for (const wMeta of WEEKS_META) {
  const weekDays = ALL_DAYS_DATA
    .filter(d => d.dateStr >= wMeta.startDate && d.dateStr <= wMeta.endDate)
    .sort((a, b) => a.dateStr.localeCompare(b.dateStr))
    .map(d => processDay(d, wMeta));

  studyPlanWeeks.push({
    id: wMeta.id,
    title: wMeta.title,
    dateRange: wMeta.dateRange,
    subtitle: wMeta.subtitle,
    phase: wMeta.phase,
    days: weekDays
  });
}

// Generate the TypeScript export
const studyPlanTsPath = path.join(__dirname, '..', 'src', 'data', 'studyPlan.ts');
const originalContent = fs.readFileSync(studyPlanTsPath, 'utf8');

const exportToken = 'export const STUDY_PLAN_WEEKS: WeekPlan[] = [';
const tokenIndex = originalContent.indexOf(exportToken);
if (tokenIndex === -1) {
  console.error('Could not find export token in studyPlan.ts!');
  process.exit(1);
}

const prefix = originalContent.slice(0, tokenIndex);
const newExport = `export const STUDY_PLAN_WEEKS: WeekPlan[] = ${JSON.stringify(studyPlanWeeks, null, 2)};\n`;

fs.writeFileSync(studyPlanTsPath, prefix + newExport, 'utf8');
console.log(`Successfully generated STUDY_PLAN_WEEKS with ${studyPlanWeeks.length} weeks!`);

let totalDays = 0;
let numberedDays = 0;
let curriculumLessonsCount = 0;

for (const w of studyPlanWeeks) {
  totalDays += w.days.length;
  console.log(`- ${w.id} (${w.dateRange}): ${w.days.length} days`);
  for (const d of w.days) {
    if (d.dayNumber) numberedDays++;
    for (const t of d.tasks) {
      if (t.subject === 'math' || t.subject === 'rw') {
        curriculumLessonsCount++;
      }
    }
  }
}
console.log(`\nTotals:`);
console.log(`- Total Days: ${totalDays}`);
console.log(`- Numbered Study Days (Phase 1): ${numberedDays}`);
console.log(`- Curriculum Lessons (Math & R&W): ${curriculumLessonsCount} (Expect 145)`);
