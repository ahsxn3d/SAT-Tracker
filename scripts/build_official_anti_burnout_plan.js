// scripts/build_official_anti_burnout_plan.js
const fs = require('fs');
const path = require('path');

const RAW_PLAN_TEXT = `
DAY 1 -- Mon Sep 14  (DONE)
  6:30 PM-6:50 PM  MATH U3.2    Unit conversion (20 min)
  6:50 PM-7:10 PM  MATH U3.3    Percentages (20 min)
  7:10 PM-7:30 PM  MATH U3.4    Center, spread, and shape of distributions (20 min)
  7:30 PM-7:45 PM  BREAK (15 min)
  7:45 PM-8:05 PM  MATH U3.5    Data representations (20 min)

DAY 2 -- Tue Sep 15  (DONE)
  6:30 PM-6:50 PM  MATH U3.6    Scatterplots (20 min)
  6:50 PM-7:10 PM  MATH U3.7    Linear and exponential growth (20 min)
  7:10 PM-7:30 PM  MATH U3.8    Probability and relative frequency (20 min)
  7:30 PM-7:45 PM  BREAK (15 min)
  7:45 PM-8:05 PM  MATH U3.9    Data inferences (20 min)

DAY 3 -- Wed Sep 16  (DONE)
  6:30 PM-6:50 PM  MATH U3.10   Evaluating statistical claims (20 min)
  6:50 PM-7:15 PM  MATH U4.1    Factoring quadratic and polynomial expressions (25 min)
  7:15 PM-7:30 PM  BREAK (15 min)
  7:30 PM-7:55 PM  MATH U4.2    Radicals and rational exponents (25 min)
  7:55 PM-8:20 PM  MATH U4.3    Operations with polynomials (25 min)
  8:20 PM-8:35 PM  BREAK (15 min)
  8:35 PM-8:55 PM  R&W  U3.1    Words in context (20 min)
  8:55 PM-9:15 PM  R&W  U3.2    Text structure and purpose (20 min)

DAY 4 -- Thu Sep 17  (DONE)
  6:30 PM-6:55 PM  MATH U4.4    Operations with rational expressions (25 min)
  6:55 PM-7:20 PM  MATH U4.5    Nonlinear functions (25 min)
  7:20 PM-7:35 PM  BREAK (15 min)
  7:35 PM-8:00 PM  MATH U4.6    Isolating quantities (25 min)
  8:00 PM-8:20 PM  R&W  U3.3    Cross-text connections (20 min)
  8:20 PM-8:35 PM  BREAK (15 min)
  8:35 PM-8:55 PM  R&W  U4.1    Transitions (20 min)

DAY 5 -- Fri Sep 18  (DONE)
  6:30 PM-6:55 PM  MATH U4.7    Solving quadratic equations (25 min)
  6:55 PM-7:20 PM  MATH U4.8    Linear and quadratic systems (25 min)
  7:20 PM-7:35 PM  BREAK (15 min)
  7:35 PM-8:00 PM  MATH U4.9    Radical, rational, and absolute value equations (25 min)
  8:00 PM-8:20 PM  R&W  U4.2    Rhetorical synthesis (20 min)
  8:20 PM-8:35 PM  BREAK (15 min)
  8:35 PM-8:55 PM  R&W  U4.3    Form, structure, and sense (20 min)

DAY 6 -- Sat Sep 19  (DONE)
  6:30 PM-6:55 PM  MATH U4.10   Quadratic and exponential word problems (25 min)
  6:55 PM-7:20 PM  MATH U4.11   Quadratic graphs (25 min)
  7:20 PM-7:35 PM  BREAK (15 min)
  7:35 PM-8:00 PM  MATH U4.12   Exponential graphs (25 min)
  8:00 PM-8:20 PM  R&W  U4.4    Boundaries (20 min)
  8:20 PM-8:35 PM  BREAK (15 min)
  8:35 PM-8:57 PM  R&W  U5.1    Command of textual evidence (22 min)

Sun Sep 20 -- REST DAY

DAY 7 -- Mon Sep 21  (DONE)
  6:30 PM-6:55 PM  MATH U4.13   Polynomial and other nonlinear graphs (25 min)
  6:55 PM-7:25 PM  MATH U5.1    Area and volume (30 min)
  7:25 PM-7:40 PM  BREAK (15 min)
  7:40 PM-8:10 PM  MATH U5.2    Congruence, similarity, and angle relationships (30 min)
  8:10 PM-8:32 PM  R&W  U5.2    Command of quantitative evidence (22 min)
  8:32 PM-8:47 PM  BREAK (15 min)
  8:47 PM-9:09 PM  R&W  U5.3    Central ideas and details (22 min)

Tue Sep 22 -- BUFFER DAY
Wed Sep 23 -- BUFFER DAY
Thu Sep 24 -- BUFFER DAY
Fri Sep 25 -- BUFFER DAY
Sat Sep 26 -- BUFFER DAY
Sun Sep 27 -- BUFFER DAY
Mon Sep 28 -- BUFFER DAY
Tue Sep 29 -- BUFFER DAY
Wed Sep 30 -- BUFFER DAY
Thu Oct 01 -- BUFFER DAY
Fri Oct 02 -- BUFFER DAY

DAY 8 -- Sat Oct 03  (study 164 min)  <<< UNIT 5 RESTART PROGRESS
  6:30 PM-7:00 PM  MATH U5.1    Area and volume (30 min)
  7:00 PM-7:30 PM  MATH U5.2    Congruence, similarity, and angle relationships (30 min)
  7:30 PM-7:45 PM  BREAK (15 min)
  7:45 PM-8:15 PM  MATH U5.3    Right triangle trigonometry (30 min)
  8:15 PM-8:45 PM  MATH U5.4    Circle theorems (30 min)
  8:45 PM-9:00 PM  BREAK (15 min)
  9:00 PM-9:22 PM  R&W  U5.1    Command of textual evidence (22 min)
  9:22 PM-9:44 PM  R&W  U5.2    Command of quantitative evidence (22 min)

DAY 9 -- Sun Oct 04  (study 157 min)
  6:30 PM-7:00 PM  MATH U5.5    Unit circle trigonometry (30 min)
  7:00 PM-7:30 PM  MATH U5.6    Circle equations (30 min)
  7:30 PM-7:45 PM  BREAK (15 min)
  7:45 PM-8:10 PM  MATH U6.1    Solving linear equations and inequalities (25 min)
  8:10 PM-8:35 PM  MATH U6.2    Linear equation word problems (25 min)
  8:35 PM-8:50 PM  BREAK (15 min)
  8:50 PM-9:15 PM  MATH U6.3    Linear relationship word problems (25 min)
  9:15 PM-9:37 PM  R&W  U5.3    Central ideas and details (22 min)

DAY 10 -- Mon Oct 05  (study 144 min)
  6:30 PM-6:55 PM  MATH U6.4    Graphs of linear equations and functions (25 min)
  6:55 PM-7:20 PM  MATH U6.5    Solving systems of linear equations (25 min)
  7:20 PM-7:35 PM  BREAK (15 min)
  7:35 PM-8:00 PM  MATH U6.6    Systems of linear equations word problems (25 min)
  8:00 PM-8:25 PM  MATH U6.7    Linear inequality word problems (25 min)
  8:25 PM-8:40 PM  BREAK (15 min)
  8:40 PM-9:02 PM  R&W  U5.4    Inferences (22 min)
  9:02 PM-9:24 PM  R&W  U6.1    Words in context (22 min)

Tue Oct 06 -- Mon Oct 05 CATCHUP
  6:30 PM-6:55 PM  MATH U6.8    Graphs of linear systems and inequalities (25 min)
  6:55 PM-7:15 PM  R&W  U6.2    Text structure and purpose (20 min)
  7:15 PM-7:35 PM  R&W  U6.3    Cross-text connections (20 min)
  7:35 PM-7:55 PM  R&W  U7.1    Transitions (20 min)

Wed Oct 07 -- REVIEW & BUFFER
  6:30 PM-7:00 PM  MATH U6.5    Linear systems review (30 min)
  7:00 PM-7:30 PM  R&W  U7.2    Rhetorical synthesis review (30 min)

Thu Oct 08 -- BUFFER DAY
Fri Oct 09 -- BUFFER DAY
Sat Oct 10 -- BUFFER DAY

DAY 11 -- Sun Oct 11  (study 176 min)  <<< MATH CHAPTER 7 & R&W CHAPTER 5 LAUNCH
  6:30 PM-6:55 PM  MATH U7.1    Ratios, rates, and proportions (25 min)
  6:55 PM-7:20 PM  MATH U7.2    Unit conversion (25 min)
  7:20 PM-7:35 PM  BREAK (15 min)
  7:35 PM-8:00 PM  MATH U7.3    Percentages (25 min)
  8:00 PM-8:25 PM  MATH U7.4    Center, spread, and shape of distributions (25 min)
  8:25 PM-8:50 PM  MATH U7.5    Data representations (25 min)
  8:50 PM-9:05 PM  BREAK (15 min)
  9:05 PM-9:27 PM  R&W  U5.1    Command of textual evidence (22 min)
  9:27 PM-9:49 PM  R&W  U5.2    Command of quantitative evidence (22 min)
  9:49 PM-10:11 PM R&W  U5.3    Central ideas and details (22 min)

DAY 12 -- Mon Oct 12  (study 166 min)
  6:30 PM-6:55 PM  MATH U7.6    Scatterplots (25 min)
  6:55 PM-7:20 PM  MATH U7.7    Linear and exponential growth (25 min)
  7:20 PM-7:35 PM  BREAK (15 min)
  7:35 PM-8:00 PM  MATH U7.8    Probability and relative frequency (25 min)
  8:00 PM-8:25 PM  MATH U7.9    Data inferences (25 min)
  8:25 PM-8:50 PM  MATH U7.10   Evaluating statistical claims (25 min)
  8:50 PM-9:05 PM  BREAK (15 min)
  9:05 PM-9:27 PM  R&W  U5.4    Inferences (22 min)
  9:27 PM-9:49 PM  R&W  U6.1    Words in context (22 min)
  9:49 PM-10:11 PM R&W  U6.2    Text structure and purpose (22 min)

DAY 13 -- Tue Oct 13  (study 166 min)
  6:30 PM-6:55 PM  MATH U8.1    Factoring quadratic and polynomial expressions (25 min)
  6:55 PM-7:20 PM  MATH U8.2    Radicals and rational exponents (25 min)
  7:20 PM-7:35 PM  BREAK (15 min)
  7:35 PM-8:00 PM  MATH U8.3    Operations with polynomials (25 min)
  8:00 PM-8:25 PM  MATH U8.4    Operations with rational expressions (25 min)
  8:25 PM-8:50 PM  MATH U8.5    Nonlinear functions (25 min)
  8:50 PM-9:05 PM  BREAK (15 min)
  9:05 PM-9:27 PM  R&W  U6.3    Cross-text connections (22 min)
  9:27 PM-9:49 PM  R&W  U7.1    Transitions (22 min)
  9:49 PM-10:11 PM R&W  U7.2    Rhetorical synthesis (22 min)

DAY 14 -- Wed Oct 14  (study 169 min)
  6:30 PM-6:55 PM  MATH U8.6    Isolating quantities (25 min)
  6:55 PM-7:20 PM  MATH U8.7    Solving quadratic equations (25 min)
  7:20 PM-7:35 PM  BREAK (15 min)
  7:35 PM-8:00 PM  MATH U8.8    Linear and quadratic systems (25 min)
  8:00 PM-8:25 PM  MATH U8.9    Radical, rational, and absolute value equations (25 min)
  8:25 PM-8:50 PM  MATH U8.10   Quadratic and exponential word problems (25 min)
  8:50 PM-9:05 PM  BREAK (15 min)
  9:05 PM-9:27 PM  R&W  U7.3    Form, structure, and sense (22 min)
  9:27 PM-9:49 PM  R&W  U7.4    Boundaries (22 min)

DAY 15 -- Thu Oct 15  (study 175 min)
  6:30 PM-6:55 PM  MATH U8.11   Quadratic graphs (25 min)
  6:55 PM-7:20 PM  MATH U8.12   Exponential graphs (25 min)
  7:20 PM-7:35 PM  BREAK (15 min)
  7:35 PM-8:00 PM  MATH U8.13   Polynomial and other nonlinear graphs (25 min)
  8:00 PM-8:30 PM  MATH U9.1    Area and volume (30 min)
  8:30 PM-9:00 PM  MATH U9.2    Congruence, similarity, and angle relationships (30 min)
  9:00 PM-9:15 PM  BREAK (15 min)
  9:15 PM-9:40 PM  R&W  U8.1    Command of textual evidence (25 min)
  9:40 PM-10:05 PM R&W  U8.2    Command of quantitative evidence (25 min)

DAY 16 -- Fri Oct 16  (study 170 min)
  6:30 PM-7:00 PM  MATH U9.3    Right triangle trigonometry (30 min)
  7:00 PM-7:30 PM  MATH U9.4    Circle theorems (30 min)
  7:30 PM-7:45 PM  BREAK (15 min)
  7:45 PM-8:15 PM  MATH U9.5    Unit circle trigonometry (30 min)
  8:15 PM-8:45 PM  MATH U9.6    Circle equations (30 min)
  8:45 PM-9:00 PM  BREAK (15 min)
  9:00 PM-9:25 PM  R&W  U8.3    Central ideas and details (25 min)
  9:25 PM-9:50 PM  R&W  U8.4    Inferences (25 min)

DAY 17 -- Sat Oct 17  (study 150 min)
  6:30 PM-6:55 PM  MATH U10.1   Solving linear equations and inequalities (25 min)
  6:55 PM-7:20 PM  MATH U10.2   Linear equation word problems (25 min)
  7:20 PM-7:35 PM  BREAK (15 min)
  7:35 PM-8:00 PM  MATH U10.3   Linear relationship word problems (25 min)
  8:00 PM-8:25 PM  MATH U10.4   Graphs of linear equations and functions (25 min)
  8:25 PM-8:40 PM  BREAK (15 min)
  8:40 PM-9:05 PM  R&W  U9.1    Words in context (25 min)
  9:05 PM-9:30 PM  R&W  U9.2    Text structure and purpose (25 min)

DAY 18 -- Sun Oct 18  (study 150 min)
  6:30 PM-6:55 PM  MATH U10.5   Solving systems of linear equations (25 min)
  6:55 PM-7:20 PM  MATH U10.6   Systems of linear equations word problems (25 min)
  7:20 PM-7:35 PM  BREAK (15 min)
  7:35 PM-8:00 PM  MATH U10.7   Linear inequality word problems (25 min)
  8:00 PM-8:25 PM  MATH U10.8   Graphs of linear systems and inequalities (25 min)
  8:25 PM-8:40 PM  BREAK (15 min)
  8:40 PM-9:05 PM  R&W  U9.3    Cross-text connections (25 min)
  9:05 PM-9:30 PM  R&W  U10.1   Transitions (25 min)

DAY 19 -- Mon Oct 19  (study 175 min)
  6:30 PM-6:55 PM  MATH U11.1   Ratios, rates, and proportions (25 min)
  6:55 PM-7:20 PM  MATH U11.2   Unit conversion (25 min)
  7:20 PM-7:35 PM  BREAK (15 min)
  7:35 PM-8:00 PM  MATH U11.3   Percentages (25 min)
  8:00 PM-8:25 PM  MATH U11.4   Center, spread, and shape of distributions (25 min)
  8:25 PM-8:50 PM  MATH U11.5   Data representations (25 min)
  8:50 PM-9:05 PM  BREAK (15 min)
  9:05 PM-9:30 PM  R&W  U10.2   Rhetorical synthesis (25 min)
  9:30 PM-9:55 PM  R&W  U10.3   Form, structure, and sense (25 min)

DAY 20 -- Tue Oct 20  (study 180 min)
  6:30 PM-6:55 PM  MATH U11.6   Scatterplots (25 min)
  6:55 PM-7:20 PM  MATH U11.7   Linear and exponential growth (25 min)
  7:20 PM-7:35 PM  BREAK (15 min)
  7:35 PM-8:00 PM  MATH U11.8   Probability and relative frequency (25 min)
  8:00 PM-8:25 PM  MATH U11.9   Data inferences (25 min)
  8:25 PM-8:50 PM  MATH U11.10  Evaluating statistical claims (25 min)
  8:50 PM-9:05 PM  BREAK (15 min)
  9:05 PM-9:30 PM  R&W  U10.4   Boundaries (25 min)
  9:30 PM-10:00 PM R&W  U11.1   Command of evidence (30 min)

DAY 21 -- Wed Oct 21  (study 180 min)
  6:30 PM-7:00 PM  MATH U12.1   Factoring quadratic and polynomial expressions (30 min)
  7:00 PM-7:30 PM  MATH U12.2   Radicals and rational exponents (30 min)
  7:30 PM-7:45 PM  BREAK (15 min)
  7:45 PM-8:15 PM  MATH U12.3   Operations with polynomials (30 min)
  8:15 PM-8:45 PM  MATH U12.4   Operations with rational expressions (30 min)
  8:45 PM-9:00 PM  BREAK (15 min)
  9:00 PM-9:30 PM  R&W  U11.2   Central ideas and details + inferences (30 min)
  9:30 PM-10:00 PM R&W  U11.3   Words in context (30 min)

DAY 22 -- Thu Oct 22  (study 180 min)
  6:30 PM-7:00 PM  MATH U12.5   Nonlinear functions (30 min)
  7:00 PM-7:30 PM  MATH U12.6   Isolating quantities (30 min)
  7:30 PM-7:45 PM  BREAK (15 min)
  7:45 PM-8:15 PM  MATH U12.7   Solving quadratic equations (30 min)
  8:15 PM-8:45 PM  MATH U12.8   Linear and quadratic systems (30 min)
  8:45 PM-9:00 PM  BREAK (15 min)
  9:00 PM-9:30 PM  R&W  U11.4   Text structure and purpose + cross-text connections (30 min)
  9:30 PM-10:00 PM R&W  U11.5   Boundaries + form, structure, and sense (30 min)

DAY 23 -- Fri Oct 23  (study 190 min)
  6:30 PM-7:00 PM  MATH U12.9   Radical, rational, and absolute value equations (30 min)
  7:00 PM-7:30 PM  MATH U12.10  Quadratic and exponential word problems (30 min)
  7:30 PM-7:45 PM  BREAK (15 min)
  7:45 PM-8:15 PM  MATH U12.11  Quadratic graphs (30 min)
  8:15 PM-8:45 PM  MATH U12.12  Exponential graphs (30 min)
  8:45 PM-9:15 PM  MATH U12.13  Polynomial and other nonlinear graphs (30 min)
  9:15 PM-9:30 PM  BREAK (15 min)
  9:30 PM-10:00 PM R&W  U11.6   Transitions + rhetorical synthesis (30 min)
  10:00 PM-10:15 PM R&W U12.1   Subject-verb agreement (15 min)
  10:15 PM-10:30 PM R&W U12.2   Pronoun-antecedent agreement (15 min)

DAY 24 -- Sat Oct 24  (study 135 min)
  6:30 PM-7:00 PM  MATH U13.1   Area and volume (30 min)
  7:00 PM-7:30 PM  MATH U13.2   Congruence, similarity, and angle relationships (30 min)
  7:30 PM-7:45 PM  BREAK (15 min)
  7:45 PM-8:15 PM  MATH U13.3   Right triangle trigonometry (30 min)
  8:15 PM-8:30 PM  R&W  U12.3   Plurals and possessives (15 min)
  8:30 PM-8:45 PM  R&W  U12.4   Verb forms (15 min)
  8:45 PM-9:00 PM  R&W  U12.5   Subject-modifier placement (15 min)

DAY 25 -- Sun Oct 25  (study 135 min)  <<< PHASE 1 100% COMPLETE
  6:30 PM-7:00 PM  MATH U13.4   Circle theorems (30 min)
  7:00 PM-7:30 PM  MATH U13.5   Unit circle trigonometry (30 min)
  7:30 PM-7:45 PM  BREAK (15 min)
  7:45 PM-8:15 PM  MATH U13.6   Circle equations (30 min)
  8:15 PM-8:30 PM  R&W  U12.6   Linking clauses (15 min)
  8:30 PM-8:45 PM  R&W  U12.7   Supplements (15 min)
  8:45 PM-9:00 PM  R&W  U12.8   Punctuation (15 min)
`;

const MONTH_MAP = {
  Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06',
  Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12'
};

function parseDateFormatted(str) {
  const parts = str.trim().split(/\s+/);
  const m = MONTH_MAP[parts[1]];
  const d = parts[2].padStart(2, '0');
  return `2026-${m}-${d}`;
}

const parsedDays = [];
const lines = RAW_PLAN_TEXT.trim().split('\n');

let currentDay = null;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();
  if (!line || line.startsWith('//') || line.startsWith('###')) continue;

  // Rest day: e.g. "Sun Sep 20 -- REST DAY"
  const restMatch = line.match(/^([A-Za-z]{3}\s+(?:Sep|Oct|Nov)\s+\d+)\s+--\s+REST DAY/i);
  if (restMatch) {
    const formattedDate = restMatch[1];
    const dateStr = parseDateFormatted(formattedDate);
    const dayOfWeek = formattedDate.split(/\s+/)[0];
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
      specialInstructions: 'Guaranteed Rest Day: Zero assigned lessons. Allow complete mental recharge, sleep, and physical recovery.',
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

  // Buffer day: e.g. "Tue Sep 22 -- BUFFER DAY"
  const bufferMatch = line.match(/^([A-Za-z]{3}\s+(?:Sep|Oct|Nov)\s+\d+)\s+--\s+BUFFER DAY/i);
  if (bufferMatch) {
    const formattedDate = bufferMatch[1];
    const dateStr = parseDateFormatted(formattedDate);
    const dayOfWeek = formattedDate.split(/\s+/)[0];
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
      specialInstructions: 'Full Recovery Buffer: 0 study minutes. Rest, hydrate, sleep, and rebuild mental strength.',
      tasks: [
        {
          id: `buffer-${dateStr}`,
          label: 'Recovery & Mental Rest • Zero Study Load',
          subject: 'buffer',
          code: 'BUFFER',
          topic: 'Recovery & Rest',
          completed: false
        }
      ]
    });
    currentDay = null;
    continue;
  }

  // Single review/catchup day: e.g. "Tue Oct 06 -- Mon Oct 05 CATCHUP"
  const specialDayMatch = line.match(/^([A-Za-z]{3}\s+(?:Sep|Oct|Nov)\s+\d+)\s+--\s+(.*)/i);
  if (specialDayMatch && !line.startsWith('DAY')) {
    const formattedDate = specialDayMatch[1];
    const dateStr = parseDateFormatted(formattedDate);
    const dayOfWeek = formattedDate.split(/\s+/)[0];
    const title = specialDayMatch[2].trim();
    currentDay = {
      dateStr,
      formattedDate,
      dayOfWeek,
      dayNumber: undefined,
      isBuffer: false,
      isTestDay: false,
      studyTimeMinutes: 0,
      breakTimeMinutes: 0,
      totalTimeMinutes: 0,
      specialInstructions: title,
      tasks: []
    };
    parsedDays.push(currentDay);
    continue;
  }

  // Day header: e.g. "DAY 8 -- Sat Oct 03 (study 164 min) <<< UNIT 5 RESTART PROGRESS"
  const headerMatch = line.match(/^DAY\s+(\d+)\s*--\s*([A-Za-z]{3}\s+[A-Za-z]{3}\s+\d+)(?:\s*\(([^\)]+)\))?(.*)/i);
  if (headerMatch) {
    const dayNumber = parseInt(headerMatch[1], 10);
    const formattedDate = headerMatch[2].trim();
    const dateStr = parseDateFormatted(formattedDate);
    const dayOfWeek = formattedDate.split(/\s+/)[0];
    const rawNote = headerMatch[4] ? headerMatch[4].replace(/<<<+|>>>+/g, '').trim() : '';

    let instructions = `Day ${dayNumber}: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals.`;
    if (dayNumber >= 1 && dayNumber <= 7) {
      instructions = `Day ${dayNumber} (DONE): Completed historical foundations record (Sep 14 - Sep 21).`;
    } else if (dayNumber === 11) {
      instructions = 'Day 11: Fresh launch today! Math Chapter 7 (Problem Solving & Data Analysis) and R&W Chapter 5 (Information & Ideas).';
    } else if (dayNumber === 25) {
      instructions = 'Day 25: Phase 1 Final Milestone! Complete remaining Circle Equations & Punctuation conventions. 100% of skills mastered!';
    } else if (rawNote) {
      instructions = `Day ${dayNumber}: ${rawNote}`;
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
      specialInstructions: instructions,
      tasks: []
    };
    parsedDays.push(currentDay);
    continue;
  }

  // Task or Break line inside a Day block
  if (currentDay) {
    const breakMatch = line.match(/^(\d{1,2}:\d{2}\s*(?:AM|PM)\s*-\s*\d{1,2}:\d{2}\s*(?:AM|PM))\s+(?:REAL BREAK|BREAK)\s*\((?:.*?)(\d+)\s*min\)/i);
    if (breakMatch) {
      const timeSlot = breakMatch[1].replace(/\s*-\s*/, ' - ').trim();
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

    const taskMatch = line.match(/^(\d{1,2}:\d{2}\s*(?:AM|PM)\s*-\s*\d{1,2}:\d{2}\s*(?:AM|PM))\s+([A-Za-z&]+)\s+(U[\d\.]+)\s+(.*?)\s*\((?:.*?)(\d+)\s*min\)/i);
    if (taskMatch) {
      const timeSlot = taskMatch[1].replace(/\s*-\s*/, ' - ').trim();
      const domainPrefix = taskMatch[2].trim();
      const unitCode = taskMatch[3].trim();
      const topic = taskMatch[4].trim();
      const dur = parseInt(taskMatch[5], 10) || 20;

      const isMath = /MATH/i.test(domainPrefix);
      const subject = isMath ? 'math' : 'rw';
      const cleanCode = isMath ? `Math ${unitCode}` : `R&W ${unitCode}`;

      currentDay.studyTimeMinutes += dur;
      currentDay.tasks.push({
        id: `task-${currentDay.dateStr}-${currentDay.tasks.length + 1}`,
        label: `[${cleanCode.toUpperCase()}] ${topic}`,
        subject,
        code: cleanCode,
        topic,
        timeSlot,
        durationMinutes: dur,
        completed: currentDay.dayNumber >= 1 && currentDay.dayNumber <= 7
      });
      continue;
    }
  }
}

// Compute total time
for (const d of parsedDays) {
  d.totalTimeMinutes = d.studyTimeMinutes + d.breakTimeMinutes;
}

// Phase 2 Days (Oct 26 to Nov 07)
const phase2Days = [
  {
    dateStr: '2026-10-26',
    formattedDate: 'Mon Oct 26',
    dayOfWeek: 'Mon',
    dayNumber: undefined,
    isBuffer: false,
    isTestDay: true,
    studyTimeMinutes: 144,
    breakTimeMinutes: 10,
    totalTimeMinutes: 154,
    specialInstructions: '8:00 AM - 10:24 AM: TEST #1 (Full Bluebook Practice Test under strict timed exam conditions).',
    tasks: [
      {
        id: 'p2-2026-10-26-mock1',
        label: 'Bluebook Practice Test #1 (Full Official Exam Simulation)',
        subject: 'test',
        code: 'TEST #1',
        topic: 'Official Bluebook Exam #1',
        timeSlot: '8:00 AM - 10:24 AM',
        durationMinutes: 144,
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
    isTestDay: false,
    studyTimeMinutes: 75,
    breakTimeMinutes: 0,
    totalTimeMinutes: 75,
    specialInstructions: 'Error-log review of Test #1 + targeted Math & Desmos drills on missed questions (75 min).',
    tasks: [
      {
        id: 'p2-2026-10-27-autopsy',
        label: 'Test #1 Mistake Autopsy & Desmos Speed Remediation',
        subject: 'review',
        code: 'AUTOPSY #1',
        topic: 'Mistake Autopsy & Remediation',
        timeSlot: '6:30 PM - 7:45 PM',
        durationMinutes: 75,
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
    studyTimeMinutes: 60,
    breakTimeMinutes: 0,
    totalTimeMinutes: 60,
    specialInstructions: 'Targeted R&W drills, punctuation rules & transitions trap review (60 min).',
    tasks: [
      {
        id: 'p2-2026-10-28-rwdrills',
        label: 'Targeted R&W Drills: Boundaries, Transitions & Clause Traps',
        subject: 'rw',
        code: 'R&W DRILL',
        topic: 'Targeted Grammar & Synthesis Drills',
        timeSlot: '6:30 PM - 7:30 PM',
        durationMinutes: 60,
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
    studyTimeMinutes: 45,
    breakTimeMinutes: 0,
    totalTimeMinutes: 45,
    specialInstructions: 'Light targeted practice on remaining weak spots (45 min). Rest early before tomorrow’s Test #2.',
    tasks: [
      {
        id: 'p2-2026-10-29-prep',
        label: 'Confidence Run: High-Yield Formulas & Light Question Tuning',
        subject: 'review',
        code: 'WEAK SPOT',
        topic: 'Pre-Test Weak Spot Tuning',
        timeSlot: '6:30 PM - 7:15 PM',
        durationMinutes: 45,
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
    isTestDay: true,
    studyTimeMinutes: 144,
    breakTimeMinutes: 10,
    totalTimeMinutes: 154,
    specialInstructions: '8:00 AM - 10:24 AM: TEST #2 (Full Bluebook Practice Test under strict exam conditions).',
    tasks: [
      {
        id: 'p2-2026-10-30-mock2',
        label: 'Bluebook Practice Test #2 (Full Official Exam Simulation)',
        subject: 'test',
        code: 'TEST #2',
        topic: 'Official Bluebook Exam #2',
        timeSlot: '8:00 AM - 10:24 AM',
        durationMinutes: 144,
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
    isTestDay: false,
    studyTimeMinutes: 75,
    breakTimeMinutes: 0,
    totalTimeMinutes: 75,
    specialInstructions: 'Error-log review of Test #2 + targeted practice drills on missed concepts (75 min).',
    tasks: [
      {
        id: 'p2-2026-10-31-autopsy',
        label: 'Test #2 Mistake Autopsy & Core Error Categorization',
        subject: 'review',
        code: 'AUTOPSY #2',
        topic: 'Mistake Autopsy & Drill Remediation',
        timeSlot: '6:30 PM - 7:45 PM',
        durationMinutes: 75,
        completed: false
      }
    ]
  },
  {
    dateStr: '2026-11-01',
    formattedDate: 'Sun Nov 01',
    dayOfWeek: 'Sun',
    dayNumber: undefined,
    isBuffer: true,
    isTestDay: false,
    studyTimeMinutes: 0,
    breakTimeMinutes: 0,
    totalTimeMinutes: 0,
    specialInstructions: 'Guaranteed Sunday Rest Day: Zero assigned study. Full mental recovery and relaxation.',
    tasks: [
      {
        id: 'rest-2026-11-01',
        label: 'Complete Cognitive Rest • Zero Study Load',
        subject: 'buffer',
        code: 'REST',
        topic: 'Pre-Taper Sunday Recovery',
        completed: false
      }
    ]
  },
  {
    dateStr: '2026-11-02',
    formattedDate: 'Mon Nov 02',
    dayOfWeek: 'Mon',
    dayNumber: undefined,
    isBuffer: false,
    isTestDay: false,
    studyTimeMinutes: 60,
    breakTimeMinutes: 0,
    totalTimeMinutes: 60,
    specialInstructions: 'Deep review of punctuation & transitions traps + Math cleanup (60 min).',
    tasks: [
      {
        id: 'p2-2026-11-02-deepreview',
        label: 'Grammar Traps & Math Rapid Fire Formulas Final Polish',
        subject: 'review',
        code: 'POLISH',
        topic: 'Final Trap Avoidance & Strategy Lock',
        timeSlot: '6:30 PM - 7:30 PM',
        durationMinutes: 60,
        completed: false
      }
    ]
  },
  {
    dateStr: '2026-11-03',
    formattedDate: 'Tue Nov 03',
    dayOfWeek: 'Tue',
    dayNumber: undefined,
    isBuffer: false,
    isTestDay: true,
    studyTimeMinutes: 144,
    breakTimeMinutes: 10,
    totalTimeMinutes: 154,
    specialInstructions: '8:00 AM - 10:24 AM: TEST #3 (Final full Bluebook timed mock exam).',
    tasks: [
      {
        id: 'p2-2026-11-03-mock3',
        label: 'Bluebook Practice Test #3 (Final Timed Dress Rehearsal)',
        subject: 'test',
        code: 'TEST #3',
        topic: 'Final Full Official Mock',
        timeSlot: '8:00 AM - 10:24 AM',
        durationMinutes: 144,
        completed: false
      }
    ]
  },
  {
    dateStr: '2026-11-04',
    formattedDate: 'Wed Nov 04',
    dayOfWeek: 'Wed',
    dayNumber: undefined,
    isBuffer: false,
    isTestDay: false,
    studyTimeMinutes: 45,
    breakTimeMinutes: 0,
    totalTimeMinutes: 45,
    specialInstructions: 'Error-log review of Test #3 + simulate exact test-day timing (45 min).',
    tasks: [
      {
        id: 'p2-2026-11-04-autopsy',
        label: 'Test #3 Final Autopsy + Test-Day Timing Rhythm Simulation',
        subject: 'review',
        code: 'FINAL AUTOPSY',
        topic: 'Final Error Closure & Confidence Lock',
        timeSlot: '6:30 PM - 7:15 PM',
        durationMinutes: 45,
        completed: false
      }
    ]
  },
  {
    dateStr: '2026-11-05',
    formattedDate: 'Thu Nov 05',
    dayOfWeek: 'Thu',
    dayNumber: undefined,
    isBuffer: false,
    isTestDay: false,
    studyTimeMinutes: 30,
    breakTimeMinutes: 0,
    totalTimeMinutes: 30,
    specialInstructions: 'Verify Bluebook app/ID/admission ticket + pack your bag (30 min). Zero high-stress academics.',
    tasks: [
      {
        id: 'p2-2026-11-05-packout',
        label: 'Exam Day Readiness: Bluebook App, Admission Ticket, Original ID & Bag Packout',
        subject: 'logistics',
        code: 'LOGISTICS',
        topic: 'Exam Logistics & Gear Verification',
        timeSlot: '6:30 PM - 7:00 PM',
        durationMinutes: 30,
        completed: false
      }
    ]
  },
  {
    dateStr: '2026-11-06',
    formattedDate: 'Fri Nov 06',
    dayOfWeek: 'Fri',
    dayNumber: undefined,
    isBuffer: true,
    isTestDay: false,
    studyTimeMinutes: 0,
    breakTimeMinutes: 0,
    totalTimeMinutes: 0,
    specialInstructions: 'FULL REST. Zero studying. No screens after 8 PM. Sleep early for tomorrow’s official exam.',
    tasks: [
      {
        id: 'rest-2026-11-06',
        label: 'Complete Rest Protocol • Sleep Early for Peak Cognitive Acuity',
        subject: 'buffer',
        code: 'REST',
        topic: 'Peak Performance Pre-Exam Taper',
        completed: false
      }
    ]
  },
  {
    dateStr: '2026-11-07',
    formattedDate: 'Sat Nov 07',
    dayOfWeek: 'Sat',
    dayNumber: undefined,
    isBuffer: false,
    isTestDay: true,
    studyTimeMinutes: 144,
    breakTimeMinutes: 10,
    totalTimeMinutes: 154,
    specialInstructions: 'OFFICIAL SAT EXAM DAY! Arrive at test center by 7:15 AM. You have prepared relentlessly — execute with absolute focus!',
    tasks: [
      {
        id: 'official-sat-exam-day',
        label: 'OFFICIAL DIGITAL SAT EXAM DAY • Crescent Model Test Center',
        subject: 'test',
        code: 'EXAM DAY',
        topic: 'Official Digital SAT Administration',
        timeSlot: '7:15 AM - 12:00 PM',
        durationMinutes: 144,
        completed: false
      }
    ]
  }
];

const allDaysCombined = [...parsedDays, ...phase2Days];

const WEEKS_META = [
  {
    id: 'week-1',
    weekNumber: 1,
    title: 'Week 1: Problem Solving & Advanced Math Foundations',
    dateRange: 'Sep 14 to Sep 20',
    subtitle: 'Days 1-6 cover unit conversion, distributions, scatterplots, factoring & polynomial expressions (Completed).',
    phase: 'foundations',
    startDate: '2026-09-14',
    endDate: '2026-09-20'
  },
  {
    id: 'week-2',
    weekNumber: 2,
    title: 'Week 2: Day 7 & Illness Recovery Buffer Window',
    dateRange: 'Sep 21 to Sep 27',
    subtitle: 'Day 7 completed on Sep 21, followed by Sep 22-27 buffer window for illness recovery.',
    phase: 'foundations',
    startDate: '2026-09-21',
    endDate: '2026-09-27'
  },
  {
    id: 'week-3',
    weekNumber: 3,
    title: 'Week 3: Recovery Buffer & Unit 5 Restart Progress',
    dateRange: 'Sep 28 to Oct 04',
    subtitle: 'Sep 28-Oct 02 recovery buffer; Unit 5 restarts on Sat Oct 03 (Day 8) and Sun Oct 04 (Day 9).',
    phase: 'foundations',
    startDate: '2026-09-28',
    endDate: '2026-10-04'
  },
  {
    id: 'week-4',
    weekNumber: 4,
    title: 'Week 4: Unit 6 Pacing, Catchup & Recovery Buffer',
    dateRange: 'Oct 05 to Oct 10',
    subtitle: 'Oct 05 Day 10 session, Oct 06 catchup, Oct 07 review, Oct 08-10 recovery buffer window.',
    phase: 'foundations',
    startDate: '2026-10-05',
    endDate: '2026-10-10'
  },
  {
    id: 'week-5',
    weekNumber: 5,
    title: 'Week 5: Math Chapter 7 Launch & Intensive Front-Load',
    dateRange: 'Oct 11 to Oct 17',
    subtitle: 'Days 11-17 master Math Unit 7, Unit 8, Unit 9 and R&W Units 5-9.',
    phase: 'foundations',
    startDate: '2026-10-11',
    endDate: '2026-10-17'
  },
  {
    id: 'week-6',
    weekNumber: 6,
    title: 'Week 6: Advanced 800 Mastery & Phase 1 Climax',
    dateRange: 'Oct 18 to Oct 25',
    subtitle: 'Days 18-25 complete all remaining Math Units 10-13 and R&W Units 9-12 by Sun Oct 25.',
    phase: 'foundations',
    startDate: '2026-10-18',
    endDate: '2026-10-25'
  },
  {
    id: 'week-7',
    weekNumber: 7,
    title: 'Week 7: Bluebook Arena - Test #1 & Test #2 Simulations',
    dateRange: 'Oct 26 to Nov 01',
    subtitle: 'Full Bluebook Test #1 on Mon Oct 26, error autopsies, and Test #2 on Fri Oct 30.',
    phase: 'bluebook',
    startDate: '2026-10-26',
    endDate: '2026-11-01'
  },
  {
    id: 'week-8',
    weekNumber: 8,
    title: 'Week 8: Final Test #3, Logistics Packout & Official SAT Exam Day',
    dateRange: 'Nov 02 to Nov 07',
    subtitle: 'Test #3 simulation on Tue Nov 03, final autopsy, bag packout, full taper rest & Sat Nov 07 Exam Day.',
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

const packingSnippetPath = path.join(__dirname, 'packing_snippet.txt');
const packingSnippet = fs.readFileSync(packingSnippetPath, 'utf-8');

const outputContent = `import { WeekPlan, PackingItem } from '../types';

export type { PackingItem } from '../types';

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
