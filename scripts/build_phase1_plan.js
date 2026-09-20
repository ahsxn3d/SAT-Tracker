const fs = require('fs');
const path = require('path');

const RAW_PHASE1_TEXT = `
DAY 1 -- Mon Sep 14
  6:30 PM-6:50 PM  MATH U3.2     Unit conversion (20 min)
  6:50 PM-7:10 PM  MATH U3.3     Percentages (20 min)
  7:10 PM-7:30 PM  MATH U3.4     Center, spread, and shape of distributions (20 min)
  7:30 PM-7:45 PM  BREAK  (15 min)
  7:45 PM-8:05 PM  MATH U3.5     Data representations (20 min)
  8:05 PM-8:25 PM  R&W  U3.1     Words in context (20 min)
  8:25 PM-8:45 PM  R&W  U3.2     Text structure and purpose (20 min)

DAY 2 -- Tue Sep 15
  6:30 PM-6:50 PM  MATH U3.6     Scatterplots (20 min)
  6:50 PM-7:10 PM  MATH U3.7     Linear and exponential growth (20 min)
  7:10 PM-7:30 PM  MATH U3.8     Probability and relative frequency (20 min)
  7:30 PM-7:45 PM  BREAK  (15 min)
  7:45 PM-8:05 PM  MATH U3.9     Data inferences (20 min)
  8:05 PM-8:25 PM  R&W  U3.3     Cross-text connections (20 min)
  8:25 PM-8:45 PM  R&W  U4.1     Transitions (20 min)

DAY 3 -- Wed Sep 16
  6:30 PM-6:50 PM  MATH U3.10    Evaluating statistical claims (20 min)
  6:50 PM-7:15 PM  MATH U4.1     Factoring quadratic and polynomial expressions (25 min)
  7:15 PM-7:30 PM  BREAK  (15 min)
  7:30 PM-7:55 PM  MATH U4.2     Radicals and rational exponents (25 min)
  7:55 PM-8:20 PM  MATH U4.3     Operations with polynomials (25 min)
  8:20 PM-8:35 PM  BREAK  (15 min)
  8:35 PM-8:55 PM  R&W  U4.2     Rhetorical synthesis (20 min)
  8:55 PM-9:15 PM  R&W  U4.3     Form, structure, and sense (20 min)

DAY 4 -- Thu Sep 17
  6:30 PM-6:55 PM  MATH U4.4     Operations with rational expressions (25 min)
  6:55 PM-7:20 PM  MATH U4.5     Nonlinear functions (25 min)
  7:20 PM-7:35 PM  BREAK  (15 min)
  7:35 PM-8:00 PM  MATH U4.6     Isolating quantities (25 min)
  8:00 PM-8:20 PM  R&W  U4.4     Boundaries (20 min)
  8:20 PM-8:35 PM  BREAK  (15 min)
  8:35 PM-8:57 PM  R&W  U5.1     Command of textual evidence (22 min)

DAY 5 -- Fri Sep 18
  6:30 PM-6:55 PM  MATH U4.7     Solving quadratic equations (25 min)
  6:55 PM-7:20 PM  MATH U4.8     Linear and quadratic systems (25 min)
  7:20 PM-7:35 PM  BREAK  (15 min)
  7:35 PM-8:00 PM  MATH U4.9     Radical, rational, and absolute value equations (25 min)
  8:00 PM-8:22 PM  R&W  U5.2     Command of quantitative evidence (22 min)
  8:22 PM-8:37 PM  BREAK  (15 min)
  8:37 PM-8:59 PM  R&W  U5.3     Central ideas and details (22 min)

DAY 6 -- Sat Sep 19
  6:30 PM-6:55 PM  MATH U4.10    Quadratic and exponential word problems (25 min)
  6:55 PM-7:20 PM  MATH U4.11    Quadratic graphs (25 min)
  7:20 PM-7:35 PM  BREAK  (15 min)
  7:35 PM-8:00 PM  MATH U4.12    Exponential graphs (25 min)
  8:00 PM-8:22 PM  R&W  U5.4     Inferences (22 min)
  8:22 PM-8:37 PM  BREAK  (15 min)
  8:37 PM-8:59 PM  R&W  U6.1     Words in context (22 min)

Sun Sep 20 -- REST DAY

DAY 7 -- Mon Sep 21
  6:30 PM-6:55 PM  MATH U4.13    Polynomial and other nonlinear graphs (25 min)
  6:55 PM-7:25 PM  MATH U5.1     Area and volume (30 min)
  7:25 PM-7:40 PM  BREAK  (15 min)
  7:40 PM-8:10 PM  MATH U5.2     Congruence, similarity, and angle relationships (30 min)
  8:10 PM-8:32 PM  R&W  U6.2     Text structure and purpose (22 min)
  8:32 PM-8:47 PM  BREAK  (15 min)
  8:47 PM-9:09 PM  R&W  U6.3     Cross-text connections (22 min)

DAY 8 -- Tue Sep 22
  6:30 PM-7:00 PM  MATH U5.3     Right triangle trigonometry (30 min)
  7:00 PM-7:30 PM  MATH U5.4     Circle theorems (30 min)
  7:30 PM-7:45 PM  BREAK  (15 min)
  7:45 PM-8:15 PM  MATH U5.5     Unit circle trigonometry (30 min)
  8:15 PM-8:37 PM  R&W  U7.1     Transitions (22 min)
  8:37 PM-8:52 PM  BREAK  (15 min)
  8:52 PM-9:14 PM  R&W  U7.2     Rhetorical synthesis (22 min)

DAY 9 -- Wed Sep 23
  6:30 PM-7:00 PM  MATH U5.6     Circle equations (30 min)
  7:00 PM-7:25 PM  MATH U6.1     Solving linear equations and inequalities (25 min)
  7:25 PM-7:40 PM  BREAK  (15 min)
  7:40 PM-8:05 PM  MATH U6.2     Linear equation word problems (25 min)
  8:05 PM-8:27 PM  R&W  U7.3     Form, structure, and sense (22 min)
  8:27 PM-8:42 PM  BREAK  (15 min)
  8:42 PM-9:04 PM  R&W  U7.4     Boundaries (22 min)

DAY 10 -- Thu Sep 24
  6:30 PM-6:55 PM  MATH U6.3     Linear relationship word problems (25 min)
  6:55 PM-7:20 PM  MATH U6.4     Graphs of linear equations and functions (25 min)
  7:20 PM-7:35 PM  BREAK  (15 min)
  7:35 PM-8:00 PM  MATH U6.5     Solving systems of linear equations (25 min)
  8:00 PM-8:25 PM  R&W  U8.1     Command of textual evidence (25 min)
  8:25 PM-8:40 PM  BREAK  (15 min)
  8:40 PM-9:05 PM  R&W  U8.2     Command of quantitative evidence (25 min)

DAY 11 -- Fri Sep 25
  6:30 PM-6:55 PM  MATH U6.6     Systems of linear equations word problems (25 min)
  6:55 PM-7:20 PM  MATH U6.7     Linear inequality word problems (25 min)
  7:20 PM-7:35 PM  BREAK  (15 min)
  7:35 PM-8:00 PM  MATH U6.8     Graphs of linear systems and inequalities (25 min)
  8:00 PM-8:25 PM  R&W  U8.3     Central ideas and details (25 min)
  8:25 PM-8:40 PM  BREAK  (15 min)
  8:40 PM-9:05 PM  R&W  U8.4     Inferences (25 min)

DAY 12 -- Sat Sep 26
  6:30 PM-6:55 PM  MATH U7.1     Ratios, rates, and proportions (25 min)
  6:55 PM-7:20 PM  MATH U7.2     Unit conversion (25 min)
  7:20 PM-7:35 PM  BREAK  (15 min)
  7:35 PM-8:00 PM  MATH U7.3     Percentages (25 min)
  8:00 PM-8:25 PM  R&W  U9.1     Words in context (25 min)
  8:25 PM-8:40 PM  BREAK  (15 min)
  8:40 PM-9:05 PM  R&W  U9.2     Text structure and purpose (25 min)

Sun Sep 27 -- REST DAY

DAY 13 -- Mon Sep 28
  6:30 PM-6:55 PM  MATH U7.4     Center, spread, and shape of distributions (25 min)
  6:55 PM-7:20 PM  MATH U7.5     Data representations (25 min)
  7:20 PM-7:35 PM  BREAK  (15 min)
  7:35 PM-8:00 PM  MATH U7.6     Scatterplots (25 min)
  8:00 PM-8:25 PM  R&W  U9.3     Cross-text connections (25 min)
  8:25 PM-8:40 PM  BREAK  (15 min)
  8:40 PM-9:05 PM  R&W  U10.1    Transitions (25 min)

DAY 14 -- Tue Sep 29
  6:30 PM-6:55 PM  MATH U7.7     Linear and exponential growth (25 min)
  6:55 PM-7:20 PM  MATH U7.8     Probability and relative frequency (25 min)
  7:20 PM-7:35 PM  BREAK  (15 min)
  7:35 PM-8:00 PM  MATH U7.9     Data inferences (25 min)
  8:00 PM-8:25 PM  R&W  U10.2    Rhetorical synthesis (25 min)
  8:25 PM-8:40 PM  BREAK  (15 min)
  8:40 PM-9:05 PM  R&W  U10.3    Form, structure, and sense (25 min)

DAY 15 -- Wed Sep 30
  6:30 PM-6:55 PM  MATH U7.10    Evaluating statistical claims (25 min)
  6:55 PM-7:25 PM  MATH U8.1     Factoring quadratic and polynomial expressions (30 min)
  7:25 PM-7:40 PM  BREAK  (15 min)
  7:40 PM-8:05 PM  R&W  U10.4    Boundaries (25 min)
  8:05 PM-8:40 PM  R&W  U11.1    Command of evidence (35 min)

DAY 16 -- Thu Oct 1
  6:30 PM-7:00 PM  MATH U8.2     Radicals and rational exponents (30 min)
  7:00 PM-7:30 PM  MATH U8.3     Operations with polynomials (30 min)
  7:30 PM-7:45 PM  BREAK  (15 min)
  7:45 PM-8:20 PM  R&W  U11.2    Central ideas and details + inferences (35 min)
  8:20 PM-8:55 PM  R&W  U11.3    Words in context (35 min)

DAY 17 -- Fri Oct 2
  6:30 PM-7:00 PM  MATH U8.4     Operations with rational expressions (30 min)
  7:00 PM-7:30 PM  MATH U8.5     Nonlinear functions (30 min)
  7:30 PM-7:45 PM  BREAK  (15 min)
  7:45 PM-8:20 PM  R&W  U11.4    Text structure and purpose + cross-text connections (35 min)
  8:20 PM-8:55 PM  R&W  U11.5    Boundaries + form, structure, and sense (35 min)

DAY 18 -- Sat Oct 3
  6:30 PM-7:00 PM  MATH U8.6     Isolating quantities (30 min)
  7:00 PM-7:30 PM  MATH U8.7     Solving quadratic equations (30 min)
  7:30 PM-7:45 PM  BREAK  (15 min)
  7:45 PM-8:15 PM  MATH U8.8     Linear and quadratic systems (30 min)
  8:15 PM-8:50 PM  R&W  U11.6    Transitions + rhetorical synthesis (35 min)
  8:50 PM-9:05 PM  BREAK  (15 min)
  9:05 PM-9:20 PM  R&W  U12.1    Subject-verb agreement (15 min)

Sun Oct 4 -- REST DAY

DAY 19 -- Mon Oct 5
  6:30 PM-7:00 PM  MATH U8.9     Radical, rational, and absolute value equations (30 min)
  7:00 PM-7:30 PM  MATH U8.10    Quadratic and exponential word problems (30 min)
  7:30 PM-7:45 PM  BREAK  (15 min)
  7:45 PM-8:15 PM  MATH U8.11    Quadratic graphs (30 min)
  8:15 PM-8:30 PM  R&W  U12.2    Pronoun-antecedent agreement (15 min)
  8:30 PM-8:45 PM  BREAK  (15 min)
  8:45 PM-9:00 PM  R&W  U12.3    Plurals and possessives (15 min)

DAY 20 -- Tue Oct 6
  6:30 PM-7:00 PM  MATH U8.12    Exponential graphs (30 min)
  7:00 PM-7:30 PM  MATH U8.13    Polynomial and other nonlinear graphs (30 min)
  7:30 PM-7:45 PM  BREAK  (15 min)
  7:45 PM-8:20 PM  MATH U9.1     Area and volume (35 min)
  8:20 PM-8:35 PM  R&W  U12.4    Verb forms (15 min)
  8:35 PM-8:50 PM  BREAK  (15 min)
  8:50 PM-9:05 PM  R&W  U12.5    Subject-modifier placement (15 min)

DAY 21 -- Wed Oct 7
  6:30 PM-7:05 PM  MATH U9.2     Congruence, similarity, and angle relationships (35 min)
  7:05 PM-7:40 PM  MATH U9.3     Right triangle trigonometry (35 min)
  7:40 PM-7:55 PM  BREAK  (15 min)
  7:55 PM-8:30 PM  MATH U9.4     Circle theorems (35 min)
  8:30 PM-8:45 PM  R&W  U12.6    Linking clauses (15 min)
  8:45 PM-9:00 PM  BREAK  (15 min)
  9:00 PM-9:15 PM  R&W  U12.7    Supplements (15 min)

DAY 22 -- Thu Oct 8
  6:30 PM-7:05 PM  MATH U9.5     Unit circle trigonometry (35 min)
  7:05 PM-7:40 PM  MATH U9.6     Circle equations (35 min)
  7:40 PM-7:55 PM  BREAK  (15 min)
  7:55 PM-8:25 PM  MATH U10.1    Solving linear equations and inequalities (30 min)
  8:25 PM-8:40 PM  R&W  U12.8    Punctuation (15 min)

DAY 23 -- Fri Oct 9
  6:30 PM-7:00 PM  MATH U10.2    Linear equation word problems (30 min)
  7:00 PM-7:30 PM  MATH U10.3    Linear relationship word problems (30 min)
  7:30 PM-7:45 PM  BREAK  (15 min)
  7:45 PM-8:15 PM  MATH U10.4    Graphs of linear equations and functions (30 min)
  8:15 PM-8:45 PM  MATH U10.5    Solving systems of linear equations (30 min)

DAY 24 -- Sat Oct 10
  6:30 PM-7:00 PM  MATH U10.6    Systems of linear equations word problems (30 min)
  7:00 PM-7:30 PM  MATH U10.7    Linear inequality word problems (30 min)
  7:30 PM-7:45 PM  BREAK  (15 min)
  7:45 PM-8:15 PM  MATH U10.8    Graphs of linear systems and inequalities (30 min)
  8:15 PM-8:45 PM  MATH U11.1    Ratios, rates, and proportions (30 min)

Sun Oct 11 -- REST DAY

DAY 25 -- Mon Oct 12
  6:30 PM-7:00 PM  MATH U11.2    Unit conversion (30 min)
  7:00 PM-7:30 PM  MATH U11.3    Percentages (30 min)
  7:30 PM-7:45 PM  BREAK  (15 min)
  7:45 PM-8:15 PM  MATH U11.4    Center, spread, and shape of distributions (30 min)
  8:15 PM-8:45 PM  MATH U11.5    Data representations (30 min)

DAY 26 -- Tue Oct 13
  6:30 PM-7:00 PM  MATH U11.6    Scatterplots (30 min)
  7:00 PM-7:30 PM  MATH U11.7    Linear and exponential growth (30 min)
  7:30 PM-7:45 PM  BREAK  (15 min)
  7:45 PM-8:15 PM  MATH U11.8    Probability and relative frequency (30 min)
  8:15 PM-8:45 PM  MATH U11.9    Data inferences (30 min)

DAY 27 -- Wed Oct 14
  6:30 PM-7:00 PM  MATH U11.10   Evaluating statistical claims (30 min)
  7:00 PM-7:35 PM  MATH U12.1    Factoring quadratic and polynomial expressions (35 min)
  7:35 PM-7:50 PM  BREAK  (15 min)
  7:50 PM-8:25 PM  MATH U12.2    Radicals and rational exponents (35 min)
  8:25 PM-9:00 PM  MATH U12.3    Operations with polynomials (35 min)

DAY 28 -- Thu Oct 15
  6:30 PM-7:05 PM  MATH U12.4    Operations with rational expressions (35 min)
  7:05 PM-7:40 PM  MATH U12.5    Nonlinear functions (35 min)
  7:40 PM-7:55 PM  BREAK  (15 min)
  7:55 PM-8:30 PM  MATH U12.6    Isolating quantities (35 min)
  8:30 PM-9:05 PM  MATH U12.7    Solving quadratic equations (35 min)

DAY 29 -- Fri Oct 16
  6:30 PM-7:05 PM  MATH U12.8    Linear and quadratic systems (35 min)
  7:05 PM-7:40 PM  MATH U12.9    Radical, rational, and absolute value equations (35 min)
  7:40 PM-7:55 PM  BREAK  (15 min)
  7:55 PM-8:30 PM  MATH U12.10   Quadratic and exponential word problems (35 min)
  8:30 PM-9:05 PM  MATH U12.11   Quadratic graphs (35 min)

DAY 30 -- Sat Oct 17
  6:30 PM-7:05 PM  MATH U12.12   Exponential graphs (35 min)
  7:05 PM-7:40 PM  MATH U12.13   Polynomial and other nonlinear graphs (35 min)
  7:40 PM-7:55 PM  BREAK  (15 min)
  7:55 PM-8:35 PM  MATH U13.1    Area and volume (40 min)

Sun Oct 18 -- REST DAY

DAY 31 -- Mon Oct 19
  6:30 PM-7:10 PM  MATH U13.2    Congruence, similarity, and angle relationships (40 min)
  7:10 PM-7:50 PM  MATH U13.3    Right triangle trigonometry (40 min)
  7:50 PM-8:05 PM  BREAK  (15 min)
  8:05 PM-8:45 PM  MATH U13.4    Circle theorems (40 min)

DAY 32 -- Tue Oct 20
  6:30 PM-7:10 PM  MATH U13.5    Unit circle trigonometry (40 min)
  7:10 PM-7:50 PM  MATH U13.6    Circle equations (40 min)
`;

// Helper: parse formatted date like "Mon Sep 14" to "2026-09-14"
function parseDateFormatted(formattedDate) {
  const parts = formattedDate.trim().split(/\s+/);
  const monthMap = { Sep: '09', Oct: '10', Nov: '11' };
  const month = monthMap[parts[1]];
  const day = parts[2].padStart(2, '0');
  return `2026-${month}-${day}`;
}

const parsedDays = [];
let currentDay = null;

const lines = RAW_PHASE1_TEXT.split('\n');

for (let rawLine of lines) {
  const line = rawLine.trim();
  if (!line) continue;

  // Check for rest day line: e.g. "Sun Sep 20 -- REST DAY", "Sun Sep 27 -- REST DAY"
  const restMatch = line.match(/^Sun\s+(Sep|Oct)\s+(\d+)\s*--\s*REST DAY/i);
  if (restMatch) {
    const formattedDate = `Sun ${restMatch[1]} ${restMatch[2]}`;
    const dateStr = parseDateFormatted(formattedDate);
    const dayOfWeek = 'Sun';
    parsedDays.push({
      dateStr,
      formattedDate,
      dayOfWeek,
      dayNumber: undefined,
      isBuffer: true,
      isTestDay: false,
      studyTimeMinutes: 0,
      breakTimeMinutes: 0,
      totalTimeMinutes: 0,
      specialInstructions: 'Guaranteed Rest Day: Zero assigned lessons. Allow mental recharge, sleep, and physical recovery.',
      tasks: [
        {
          id: `rest-${dateStr}`,
          label: 'Full Rest & Cognitive Recovery • Zero Assigned Study',
          subject: 'buffer',
          code: 'REST',
          topic: 'Cognitive Recovery',
          completed: false
        }
      ]
    });
    currentDay = null;
    continue;
  }

  // Check for day header: e.g. "DAY 1 -- Mon Sep 14"
  const headerMatch = line.match(/^DAY\s+(\d+)\s*--\s*([A-Za-z]{3}\s+[A-Za-z]{3}\s+\d+)/i);
  if (headerMatch) {
    const dayNumber = parseInt(headerMatch[1], 10);
    const formattedDate = headerMatch[2].trim();
    const dateStr = parseDateFormatted(formattedDate);
    const dayOfWeek = formattedDate.split(/\s+/)[0];

    let specialInstructions = `Day ${dayNumber}: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals.`;
    if (dayNumber === 9) {
      specialInstructions = 'FOUNDATIONS FULLY COMPLETE (Math U2-U5 + R&W U2-U4)';
    } else if (dayNumber === 18) {
      specialInstructions = 'CHALLENGE UNIT COMPLETE (R&W Unit 11 mastered!)';
    } else if (dayNumber === 22) {
      specialInstructions = 'ALL READING & WRITING COMPLETE (R&W Units 2-12 finished!)';
    } else if (dayNumber === 32) {
      specialInstructions = 'ALL MATH COMPLETE (Math Units 2-13 finished! 100% curriculum mastered)';
    }

    currentDay = {
      dateStr,
      formattedDate,
      dayOfWeek,
      dayNumber,
      isBuffer: false,
      isTestDay: false,
      studyTimeMinutes: 0,
      breakTimeMinutes: 0,
      totalTimeMinutes: 0,
      specialInstructions,
      tasks: []
    };
    parsedDays.push(currentDay);
    continue;
  }

  // Task line or break line:
  // e.g. "6:30 PM-6:50 PM  MATH U3.2     Unit conversion (20 min)"
  // e.g. "7:30 PM-7:45 PM  BREAK  (15 min)"
  if (currentDay) {
    // Check break
    const breakMatch = line.match(/^(\d{1,2}:\d{2}\s*(?:AM|PM)\s*-\s*\d{1,2}:\d{2}\s*(?:AM|PM))\s+BREAK\s*\((?:.*?)(\d+)\s*min\)/i);
    if (breakMatch) {
      const timeSlot = breakMatch[1].trim().replace(/\s*-\s*/, ' - ');
      const dur = parseInt(breakMatch[2], 10) || 15;
      currentDay.breakTimeMinutes += dur;
      currentDay.tasks.push({
        id: `break-${currentDay.dateStr}-${currentDay.tasks.length + 1}`,
        label: 'Screen-Free Rest & Recharge',
        subject: 'buffer',
        code: 'BREAK',
        topic: 'Screen-Free Rest & Recharge',
        timeSlot,
        durationMinutes: dur,
        completed: false
      });
      continue;
    }

    // Check study task:
    const taskMatch = line.match(/^(\d{1,2}:\d{2}\s*(?:AM|PM)\s*-\s*\d{1,2}:\d{2}\s*(?:AM|PM))\s+((?:MATH|R&W))\s+(U[\d\.]+)\s+(.*?)\s*\((?:.*?)(\d+)\s*min\)/i);
    if (taskMatch) {
      const timeSlot = taskMatch[1].trim().replace(/\s*-\s*/, ' - ');
      const rawSub = taskMatch[2].trim().toUpperCase();
      const unit = taskMatch[3].trim();
      const topic = taskMatch[4].trim();
      const dur = parseInt(taskMatch[5], 10) || 20;

      const isMath = rawSub === 'MATH';
      const subject = isMath ? 'math' : 'rw';
      const cleanCode = isMath ? `Math ${unit}` : `R&W ${unit}`;

      currentDay.studyTimeMinutes += dur;
      currentDay.tasks.push({
        id: `task-${currentDay.dateStr}-${currentDay.tasks.length + 1}`,
        label: `[${cleanCode.toUpperCase()}] ${topic}`,
        subject,
        code: cleanCode,
        topic,
        timeSlot,
        durationMinutes: dur,
        completed: false
      });
      continue;
    }
  }
}

// Calculate totalTimeMinutes for all parsed days
for (const d of parsedDays) {
  d.totalTimeMinutes = d.studyTimeMinutes + d.breakTimeMinutes;
}

// Phase 2 Days: Oct 21 to Nov 7
const phase2Days = [
  {
    dateStr: '2026-10-21',
    formattedDate: 'Wed Oct 21',
    dayOfWeek: 'Wed',
    dayNumber: undefined,
    isBuffer: false,
    isTestDay: true,
    studyTimeMinutes: 144,
    breakTimeMinutes: 10,
    totalTimeMinutes: 154,
    specialInstructions: 'Full Bluebook Practice Test #2 (real conditions, timed): 8:00 AM - 10:24 AM.',
    tasks: [
      {
        id: 'bluebook-test-2',
        label: 'Full Bluebook Practice Test #2 (real conditions, timed)',
        subject: 'test',
        code: 'TEST #2',
        topic: 'Full Bluebook Practice Test #2 (Real Conditions)',
        timeSlot: '8:00 AM - 10:24 AM',
        durationMinutes: 144,
        completed: false
      }
    ]
  },
  {
    dateStr: '2026-10-22',
    formattedDate: 'Thu Oct 22',
    dayOfWeek: 'Thu',
    dayNumber: undefined,
    isBuffer: false,
    isTestDay: false,
    studyTimeMinutes: 45,
    breakTimeMinutes: 0,
    totalTimeMinutes: 45,
    specialInstructions: 'Error-log review of Test #2 (45 min): Open score report, dissect every wrong question: skill & root-cause autopsy.',
    tasks: [
      {
        id: 'p2-d2-1',
        label: 'Error-log review of Test #2 (45 min)',
        subject: 'review',
        code: 'AUTOPSY',
        topic: 'Test #2 Error Log Dissection',
        timeSlot: '6:30 PM - 7:15 PM',
        durationMinutes: 45,
        completed: false
      }
    ]
  },
  {
    dateStr: '2026-10-23',
    formattedDate: 'Fri Oct 23',
    dayOfWeek: 'Fri',
    dayNumber: undefined,
    isBuffer: false,
    isTestDay: false,
    studyTimeMinutes: 75,
    breakTimeMinutes: 0,
    totalTimeMinutes: 75,
    specialInstructions: 'Targeted Math drills on Test #2 errors (45m) + Desmos speed drills on systems & roots (30m).',
    tasks: [
      {
        id: 'p2-d3-1',
        label: 'Targeted Math drills + Desmos speed drills (75 min)',
        subject: 'drill',
        code: 'MATH DRILL',
        topic: 'Test #2 Error Drills & Desmos Speed Training',
        timeSlot: '6:30 PM - 7:45 PM',
        durationMinutes: 75,
        completed: false
      }
    ]
  },
  {
    dateStr: '2026-10-24',
    formattedDate: 'Sat Oct 24',
    dayOfWeek: 'Sat',
    dayNumber: undefined,
    isBuffer: false,
    isTestDay: false,
    studyTimeMinutes: 60,
    breakTimeMinutes: 0,
    totalTimeMinutes: 60,
    specialInstructions: 'Targeted R&W drills, punctuation/grammar review: Redo missed skills on Khan, review grammar rules.',
    tasks: [
      {
        id: 'p2-d4-1',
        label: 'Targeted R&W drills, punctuation/grammar review (60 min)',
        subject: 'drill',
        code: 'RW DRILL',
        topic: 'Grammar Traps & Reading Drills',
        timeSlot: '6:30 PM - 7:30 PM',
        durationMinutes: 60,
        completed: false
      }
    ]
  },
  {
    dateStr: '2026-10-25',
    formattedDate: 'Sun Oct 25',
    dayOfWeek: 'Sun',
    dayNumber: undefined,
    isBuffer: true,
    isTestDay: false,
    studyTimeMinutes: 0,
    breakTimeMinutes: 0,
    totalTimeMinutes: 0,
    specialInstructions: 'REST DAY: Full day off, no studying. Guaranteed mental reset & recovery.',
    tasks: [
      {
        id: 'rest-2026-10-25',
        label: 'REST DAY: Full day off, no studying. Guaranteed mental reset',
        subject: 'buffer',
        code: 'REST',
        topic: 'Cognitive Recovery',
        completed: false
      }
    ]
  },
  {
    dateStr: '2026-10-26',
    formattedDate: 'Mon Oct 26',
    dayOfWeek: 'Mon',
    dayNumber: undefined,
    isBuffer: false,
    isTestDay: false,
    studyTimeMinutes: 45,
    breakTimeMinutes: 0,
    totalTimeMinutes: 45,
    specialInstructions: 'Light targeted practice on remaining weak spots (45 min): Only weak spots still bothering you, nothing new.',
    tasks: [
      {
        id: 'p2-d6-1',
        label: 'Light targeted practice on remaining weak spots (45 min)',
        subject: 'drill',
        code: 'LIGHT DRILL',
        topic: 'Weak Spot Maintenance',
        timeSlot: '6:30 PM - 7:15 PM',
        durationMinutes: 45,
        completed: false
      }
    ]
  },
  {
    dateStr: '2026-10-27',
    formattedDate: 'Tue Oct 27',
    dayOfWeek: 'Tue',
    dayNumber: undefined,
    isBuffer: false,
    isTestDay: true,
    studyTimeMinutes: 144,
    breakTimeMinutes: 10,
    totalTimeMinutes: 154,
    specialInstructions: 'Full Bluebook Practice Test #3 (real conditions, timed): 8:00 AM - 10:24 AM.',
    tasks: [
      {
        id: 'bluebook-test-3',
        label: 'Full Bluebook Practice Test #3 (real conditions, timed)',
        subject: 'test',
        code: 'TEST #3',
        topic: 'Full Bluebook Practice Test #3 (Real Conditions)',
        timeSlot: '8:00 AM - 10:24 AM',
        durationMinutes: 144,
        completed: false
      }
    ]
  },
  {
    dateStr: '2026-10-28',
    formattedDate: 'Wed Oct 28',
    dayOfWeek: 'Wed',
    dayNumber: undefined,
    isBuffer: false,
    isTestDay: false,
    studyTimeMinutes: 45,
    breakTimeMinutes: 0,
    totalTimeMinutes: 45,
    specialInstructions: 'Error-log review of Test #3 (45 min): Dissect every wrong question and log root-cause rules.',
    tasks: [
      {
        id: 'p2-d8-1',
        label: 'Error-log review of Test #3 (45 min)',
        subject: 'review',
        code: 'AUTOPSY',
        topic: 'Test #3 Error Dissection',
        timeSlot: '6:30 PM - 7:15 PM',
        durationMinutes: 45,
        completed: false
      }
    ]
  },
  {
    dateStr: '2026-10-29',
    formattedDate: 'Thu Oct 29',
    dayOfWeek: 'Thu',
    dayNumber: undefined,
    isBuffer: false,
    isTestDay: false,
    studyTimeMinutes: 60,
    breakTimeMinutes: 0,
    totalTimeMinutes: 60,
    specialInstructions: 'Targeted drills on Test #3 weak areas (60 min): Fix what Test #3 exposed with targeted Khan practice.',
    tasks: [
      {
        id: 'p2-d9-1',
        label: 'Targeted drills on Test #3 weak areas (60 min)',
        subject: 'drill',
        code: 'TARGETED DRILL',
        topic: 'High-Priority Drill Practice',
        timeSlot: '6:30 PM - 7:30 PM',
        durationMinutes: 60,
        completed: false
      }
    ]
  },
  {
    dateStr: '2026-10-30',
    formattedDate: 'Fri Oct 30',
    dayOfWeek: 'Fri',
    dayNumber: undefined,
    isBuffer: false,
    isTestDay: false,
    studyTimeMinutes: 60,
    breakTimeMinutes: 0,
    totalTimeMinutes: 60,
    specialInstructions: 'Deep review, punctuation & transitions traps + Math cleanup (60 min).',
    tasks: [
      {
        id: 'p2-d10-1',
        label: 'Deep review, punctuation & transitions traps + Math cleanup (60 min)',
        subject: 'review',
        code: 'DEEP REVIEW',
        topic: 'Grammar Traps & Math Polish',
        timeSlot: '6:30 PM - 7:30 PM',
        durationMinutes: 60,
        completed: false
      }
    ]
  },
  {
    dateStr: '2026-10-31',
    formattedDate: 'Sat Oct 31',
    dayOfWeek: 'Sat',
    dayNumber: undefined,
    isBuffer: false,
    isTestDay: true,
    studyTimeMinutes: 144,
    breakTimeMinutes: 10,
    totalTimeMinutes: 154,
    specialInstructions: 'Full Bluebook Practice Test #4 (final full test, timed): 8:00 AM - 10:24 AM under real conditions.',
    tasks: [
      {
        id: 'bluebook-test-4',
        label: 'Full Bluebook Practice Test #4 (final full test, timed)',
        subject: 'test',
        code: 'TEST #4',
        topic: 'Final Full Bluebook Practice Test (Real Conditions)',
        timeSlot: '8:00 AM - 10:24 AM',
        durationMinutes: 144,
        completed: false
      }
    ]
  },
  {
    dateStr: '2026-11-01',
    formattedDate: 'Sun Nov 1',
    dayOfWeek: 'Sun',
    dayNumber: undefined,
    isBuffer: true,
    isTestDay: false,
    studyTimeMinutes: 0,
    breakTimeMinutes: 0,
    totalTimeMinutes: 0,
    specialInstructions: 'REST DAY: Full day off, no studying. Guaranteed mental reset.',
    tasks: [
      {
        id: 'rest-2026-11-01',
        label: 'REST DAY: Full day off, no studying',
        subject: 'buffer',
        code: 'REST',
        topic: 'Mental Reset',
        completed: false
      }
    ]
  },
  {
    dateStr: '2026-11-02',
    formattedDate: 'Mon Nov 2',
    dayOfWeek: 'Mon',
    dayNumber: undefined,
    isBuffer: false,
    isTestDay: false,
    studyTimeMinutes: 45,
    breakTimeMinutes: 0,
    totalTimeMinutes: 45,
    specialInstructions: 'Error-log review of Test #4 + simulate exact test-day timing (45 min): Write down every wrong question and why, across both Math and Reading & Writing.',
    tasks: [
      {
        id: 'w8-d1-1',
        label: 'Error-log review of Test #4 + simulate exact test-day timing (45 min)',
        subject: 'review',
        code: 'AUTOPSY',
        topic: 'Test #4 Error-Log Review & Timing Calibration',
        timeSlot: '6:30 PM - 7:15 PM',
        durationMinutes: 45,
        completed: false
      }
    ]
  },
  {
    dateStr: '2026-11-03',
    formattedDate: 'Tue Nov 3',
    dayOfWeek: 'Tue',
    dayNumber: undefined,
    isBuffer: false,
    isTestDay: false,
    studyTimeMinutes: 30,
    breakTimeMinutes: 0,
    totalTimeMinutes: 30,
    specialInstructions: 'Light taper, review error notebook + grammar rules (30 min): No heavy problem sets, gentle reinforcement.',
    tasks: [
      {
        id: 'w8-d2-1',
        label: 'Light taper, review error notebook + grammar rules (30 min)',
        subject: 'review',
        code: 'LIGHT TAPER',
        topic: 'Error Notebook & Grammar Traps Refresh',
        timeSlot: '6:30 PM - 7:00 PM',
        durationMinutes: 30,
        completed: false
      }
    ]
  },
  {
    dateStr: '2026-11-04',
    formattedDate: 'Wed Nov 4',
    dayOfWeek: 'Wed',
    dayNumber: undefined,
    isBuffer: false,
    isTestDay: false,
    studyTimeMinutes: 20,
    breakTimeMinutes: 0,
    totalTimeMinutes: 20,
    specialInstructions: 'Verify Bluebook app, admission ticket, ID (20 min): Ensure device is updated, admission ticket printed, ID ready.',
    tasks: [
      {
        id: 'w8-d3-1',
        label: 'Verify Bluebook app, admission ticket, ID (20 min)',
        subject: 'logistics',
        code: 'LOGISTICS',
        topic: 'Bluebook App Verification & Admission Ticket Check',
        timeSlot: '6:30 PM - 6:50 PM',
        durationMinutes: 20,
        completed: false
      }
    ]
  },
  {
    dateStr: '2026-11-05',
    formattedDate: 'Thu Nov 5',
    dayOfWeek: 'Thu',
    dayNumber: undefined,
    isBuffer: false,
    isTestDay: false,
    studyTimeMinutes: 20,
    breakTimeMinutes: 0,
    totalTimeMinutes: 20,
    specialInstructions: 'Very light review, then pack bag (20 min): Re-read top 5 rules, pack bag with ID/Smart CNIC, charger, snacks, calculator.',
    tasks: [
      {
        id: 'w8-d4-1',
        label: 'Very light review, then pack bag (20 min)',
        subject: 'logistics',
        code: 'BAG PACKOUT',
        topic: 'Formula Checklist & Exam Bag Packing',
        timeSlot: '6:30 PM - 6:50 PM',
        durationMinutes: 20,
        completed: false
      }
    ]
  },
  {
    dateStr: '2026-11-06',
    formattedDate: 'Fri Nov 6',
    dayOfWeek: 'Fri',
    dayNumber: undefined,
    isBuffer: true,
    isTestDay: false,
    studyTimeMinutes: 0,
    breakTimeMinutes: 0,
    totalTimeMinutes: 0,
    specialInstructions: 'FULL REST. No studying. Sleep early. Relax, hydrate, eat well, and sleep early.',
    tasks: [
      {
        id: 'w8-d5-1',
        label: 'FULL REST. No studying. Sleep early',
        subject: 'buffer',
        code: 'REST',
        topic: 'Full Rest & Pre-Exam Sleep Curfew',
        completed: false
      }
    ]
  },
  {
    dateStr: '2026-11-07',
    formattedDate: 'Sat Nov 7',
    dayOfWeek: 'Sat',
    dayNumber: undefined,
    isBuffer: false,
    isTestDay: true,
    studyTimeMinutes: 144,
    breakTimeMinutes: 10,
    totalTimeMinutes: 154,
    specialInstructions: 'Sat Nov 7 -- EXAM DAY: Follow your official admission ticket reporting time exactly. Arrive at Crescent Model School, Shadman Lahore by 7:15 AM sharp (gates lock at 7:45 AM).',
    tasks: [
      {
        id: 'sat-exam-day',
        label: 'EXAM DAY: Follow your official admission ticket reporting time exactly',
        subject: 'test',
        code: 'OFFICIAL SAT',
        topic: 'Official Digital SAT Exam',
        timeSlot: '7:15 AM arrival',
        durationMinutes: 144,
        completed: false
      }
    ]
  }
];

// Combine all 55 days
const allDaysCombined = [...parsedDays, ...phase2Days];
allDaysCombined.sort((a, b) => a.dateStr.localeCompare(b.dateStr));

// Weeks metadata definitions
const WEEKS_META = [
  {
    id: 'week-1',
    weekNumber: 1,
    title: 'Week 1: Problem Solving & Advanced Math Foundations',
    dateRange: 'Sep 14 to Sep 20',
    subtitle: 'Daily structured Math & Reading & Writing lessons with scheduled Sunday rest.',
    phase: 'foundations',
    startDate: '2026-09-14',
    endDate: '2026-09-20'
  },
  {
    id: 'week-2',
    weekNumber: 2,
    title: 'Week 2: Foundations Mastery & Pure Content Study',
    dateRange: 'Sep 21 to Sep 27',
    subtitle: 'Foundations complete on Wed Sep 23; Pure study across algebra & geometry with Sunday Rest.',
    phase: 'foundations',
    startDate: '2026-09-21',
    endDate: '2026-09-27'
  },
  {
    id: 'week-3',
    weekNumber: 3,
    title: 'Week 3: Medium Tier Acceleration & Synthesis',
    dateRange: 'Sep 28 to Oct 04',
    subtitle: 'Medium Math (U7-U8) + Medium R&W (U8-U11) • High-density multi-step mastery.',
    phase: 'foundations',
    startDate: '2026-09-28',
    endDate: '2026-10-04'
  },
  {
    id: 'week-4',
    weekNumber: 4,
    title: 'Week 4: Challenge Unit Completion & All R&W Complete',
    dateRange: 'Oct 05 to Oct 11',
    subtitle: 'Challenge Unit finished on Oct 3; All Reading & Writing 100% finished on Thu Oct 8!',
    phase: 'foundations',
    startDate: '2026-10-05',
    endDate: '2026-10-11'
  },
  {
    id: 'week-5',
    weekNumber: 5,
    title: 'Week 5: Advanced Math Climax (Units 11 & 12)',
    dateRange: 'Oct 12 to Oct 18',
    subtitle: 'Advanced Math units: Data inferences, polynomial operations & quadratic systems.',
    phase: 'foundations',
    startDate: '2026-10-12',
    endDate: '2026-10-18'
  },
  {
    id: 'week-6',
    weekNumber: 6,
    title: 'Week 6: All Math Complete & Phase 2 Testing Launch',
    dateRange: 'Oct 19 to Oct 25',
    subtitle: 'All Math finished on Tue Oct 20; Full Bluebook Test #2 on Wed Oct 21.',
    phase: 'bluebook',
    startDate: '2026-10-19',
    endDate: '2026-10-25'
  },
  {
    id: 'week-7',
    weekNumber: 7,
    title: 'Week 7: Practice Tests #3 & #4 Simulations',
    dateRange: 'Oct 26 to Nov 01',
    subtitle: 'Full Bluebook Test #3 on Tue Oct 27 and Final Test #4 on Sat Oct 31.',
    phase: 'bluebook',
    startDate: '2026-10-26',
    endDate: '2026-11-01'
  },
  {
    id: 'week-8',
    weekNumber: 8,
    title: 'Week 8: Test #4 Autopsy, Taper Protocol & Official SAT Exam Day',
    dateRange: 'Nov 02 to Nov 07',
    subtitle: 'Test #4 error review, light taper, logistics check, bag packout, full rest & Sat Nov 7 Exam Day.',
    phase: 'exam',
    startDate: '2026-11-02',
    endDate: '2026-11-07'
  }
];

const studyPlanWeeks = [];

for (const wMeta of WEEKS_META) {
  const weekDays = allDaysCombined.filter(d => d.dateStr >= wMeta.startDate && d.dateStr <= wMeta.endDate);
  const formattedDays = weekDays.map(d => ({
    id: d.dateStr,
    dateStr: d.dateStr,
    dayOfWeek: d.dayOfWeek,
    formattedDate: d.formattedDate,
    dayNumber: d.dayNumber,
    weekId: wMeta.id,
    weekNumber: wMeta.weekNumber,
    weekTitle: wMeta.title.replace(/^Week \d+:\s*/, ''),
    phase: wMeta.phase,
    isBuffer: d.isBuffer,
    isTestDay: d.isTestDay,
    studyTimeMinutes: d.studyTimeMinutes,
    breakTimeMinutes: d.breakTimeMinutes,
    totalTimeMinutes: d.totalTimeMinutes,
    specialInstructions: d.specialInstructions,
    tasks: d.tasks
  }));

  studyPlanWeeks.push({
    id: wMeta.id,
    title: wMeta.title,
    dateRange: wMeta.dateRange,
    subtitle: wMeta.subtitle,
    phase: wMeta.phase,
    days: formattedDays
  });
}

// Read packing snippet
const packingSnippet = fs.readFileSync(path.join(__dirname, 'packing_snippet.txt'), 'utf-8');

// Generate the TypeScript file content
const outputContent = `import { WeekPlan, PackingItem } from '../types';

${packingSnippet}
export const STUDY_PLAN_WEEKS: WeekPlan[] = ${JSON.stringify(studyPlanWeeks, null, 2)};
`;

const outputPath = path.join(__dirname, '..', 'src', 'data', 'studyPlan.ts');
fs.writeFileSync(outputPath, outputContent, 'utf-8');

console.log('Successfully generated STUDY_PLAN_WEEKS with ' + studyPlanWeeks.length + ' weeks!');
for (const w of studyPlanWeeks) {
  console.log('- ' + w.id + ' (' + w.dateRange + '): ' + w.days.length + ' days');
}
console.log('Total days in schedule: ' + allDaysCombined.length);
