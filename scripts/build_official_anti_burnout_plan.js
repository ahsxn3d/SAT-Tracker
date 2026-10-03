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

DAY 8 -- Sat Oct 03  (study 164 min)  <<< UNIT 5 RESTARTS HERE (fresh, lesson 1)
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

DAY 11 -- Tue Oct 06  (study 144 min)
  6:30 PM-6:55 PM  MATH U6.8    Graphs of linear systems and inequalities (25 min)
  6:55 PM-7:20 PM  MATH U7.1    Ratios, rates, and proportions (25 min)
  7:20 PM-7:35 PM  BREAK (15 min)
  7:35 PM-8:00 PM  MATH U7.2    Unit conversion (25 min)
  8:00 PM-8:25 PM  MATH U7.3    Percentages (25 min)
  8:25 PM-8:40 PM  BREAK (15 min)
  8:40 PM-9:02 PM  R&W  U6.2    Text structure and purpose (22 min)
  9:02 PM-9:24 PM  R&W  U6.3    Cross-text connections (22 min)

DAY 12 -- Wed Oct 07  (study 144 min)
  6:30 PM-6:55 PM  MATH U7.4    Center, spread, and shape of distributions (25 min)
  6:55 PM-7:20 PM  MATH U7.5    Data representations (25 min)
  7:20 PM-7:35 PM  BREAK (15 min)
  7:35 PM-8:00 PM  MATH U7.6    Scatterplots (25 min)
  8:00 PM-8:25 PM  MATH U7.7    Linear and exponential growth (25 min)
  8:25 PM-8:40 PM  BREAK (15 min)
  8:40 PM-9:02 PM  R&W  U7.1    Transitions (22 min)
  9:02 PM-9:24 PM  R&W  U7.2    Rhetorical synthesis (22 min)

DAY 13 -- Thu Oct 08  (study 149 min)
  6:30 PM-6:55 PM  MATH U7.8    Probability and relative frequency (25 min)
  6:55 PM-7:20 PM  MATH U7.9    Data inferences (25 min)
  7:20 PM-7:35 PM  BREAK (15 min)
  7:35 PM-8:00 PM  MATH U7.10   Evaluating statistical claims (25 min)
  8:00 PM-8:30 PM  MATH U8.1    Factoring quadratic and polynomial expressions (30 min)
  8:30 PM-8:45 PM  BREAK (15 min)
  8:45 PM-9:07 PM  R&W  U7.3    Form, structure, and sense (22 min)
  9:07 PM-9:29 PM  R&W  U7.4    Boundaries (22 min)

DAY 14 -- Fri Oct 09  (study 140 min)
  6:30 PM-7:00 PM  MATH U8.2    Radicals and rational exponents (30 min)
  7:00 PM-7:30 PM  MATH U8.3    Operations with polynomials (30 min)
  7:30 PM-7:45 PM  BREAK (15 min)
  7:45 PM-8:15 PM  MATH U8.4    Operations with rational expressions (30 min)
  8:15 PM-8:40 PM  R&W  U8.1    Command of textual evidence (25 min)
  8:40 PM-8:55 PM  BREAK (15 min)
  8:55 PM-9:20 PM  R&W  U8.2    Command of quantitative evidence (25 min)

DAY 15 -- Sat Oct 10  (study 140 min)
  6:30 PM-7:00 PM  MATH U8.5    Nonlinear functions (30 min)
  7:00 PM-7:30 PM  MATH U8.6    Isolating quantities (30 min)
  7:30 PM-7:45 PM  BREAK (15 min)
  7:45 PM-8:15 PM  MATH U8.7    Solving quadratic equations (30 min)
  8:15 PM-8:40 PM  R&W  U8.3    Central ideas and details (25 min)
  8:40 PM-8:55 PM  BREAK (15 min)
  8:55 PM-9:20 PM  R&W  U8.4    Inferences (25 min)

DAY 16 -- Sun Oct 11  (study 140 min)
  6:30 PM-7:00 PM  MATH U8.8    Linear and quadratic systems (30 min)
  7:00 PM-7:30 PM  MATH U8.9    Radical, rational, and absolute value equations (30 min)
  7:30 PM-7:45 PM  BREAK (15 min)
  7:45 PM-8:15 PM  MATH U8.10   Quadratic and exponential word problems (30 min)
  8:15 PM-8:40 PM  R&W  U9.1    Words in context (25 min)
  8:40 PM-8:55 PM  BREAK (15 min)
  8:55 PM-9:20 PM  R&W  U9.2    Text structure and purpose (25 min)

DAY 17 -- Mon Oct 12  (study 150 min)
  6:30 PM-7:00 PM  MATH U8.11   Quadratic graphs (30 min)
  7:00 PM-7:30 PM  MATH U8.12   Exponential graphs (30 min)
  7:30 PM-7:45 PM  BREAK (15 min)
  7:45 PM-8:15 PM  MATH U8.13   Polynomial and other nonlinear graphs (30 min)
  8:15 PM-8:50 PM  MATH U9.1    Area and volume (35 min)
  8:50 PM-9:05 PM  BREAK (15 min)
  9:05 PM-9:30 PM  R&W  U9.3    Cross-text connections (25 min)

DAY 18 -- Tue Oct 13  (study 155 min)
  6:30 PM-7:05 PM  MATH U9.2    Congruence, similarity, and angle relationships (35 min)
  7:05 PM-7:40 PM  MATH U9.3    Right triangle trigonometry (35 min)
  7:40 PM-7:55 PM  BREAK (15 min)
  7:55 PM-8:30 PM  MATH U9.4    Circle theorems (35 min)
  8:30 PM-8:55 PM  R&W  U10.1   Transitions (25 min)
  8:55 PM-9:10 PM  BREAK (15 min)
  9:10 PM-9:35 PM  R&W  U10.2   Rhetorical synthesis (25 min)

DAY 19 -- Wed Oct 14  (study 150 min)
  6:30 PM-7:05 PM  MATH U9.5    Unit circle trigonometry (35 min)
  7:05 PM-7:40 PM  MATH U9.6    Circle equations (35 min)
  7:40 PM-7:55 PM  BREAK (15 min)
  7:55 PM-8:25 PM  MATH U10.1   Solving linear equations and inequalities (30 min)
  8:25 PM-8:50 PM  R&W  U10.3   Form, structure, and sense (25 min)
  8:50 PM-9:05 PM  BREAK (15 min)
  9:05 PM-9:30 PM  R&W  U10.4   Boundaries (25 min)

DAY 20 -- Thu Oct 15  (study 160 min)
  6:30 PM-7:00 PM  MATH U10.2   Linear equation word problems (30 min)
  7:00 PM-7:30 PM  MATH U10.3   Linear relationship word problems (30 min)
  7:30 PM-7:45 PM  BREAK (15 min)
  7:45 PM-8:15 PM  MATH U10.4   Graphs of linear equations and functions (30 min)
  8:15 PM-8:50 PM  R&W  U11.1   Command of evidence (35 min)
  8:50 PM-9:05 PM  BREAK (15 min)
  9:05 PM-9:40 PM  R&W  U11.2   Central ideas and details + inferences (35 min)

DAY 21 -- Fri Oct 16  (study 160 min)
  6:30 PM-7:00 PM  MATH U10.5   Solving systems of linear equations (30 min)
  7:00 PM-7:30 PM  MATH U10.6   Systems of linear equations word problems (30 min)
  7:30 PM-7:45 PM  BREAK (15 min)
  7:45 PM-8:15 PM  MATH U10.7   Linear inequality word problems (30 min)
  8:15 PM-8:50 PM  R&W  U11.3   Words in context (35 min)
  8:50 PM-9:05 PM  BREAK (15 min)
  9:05 PM-9:40 PM  R&W  U11.4   Text structure and purpose + cross-text connections (35 min)

DAY 22 -- Sat Oct 17  (study 155 min)
  6:30 PM-7:00 PM  MATH U10.8   Graphs of linear systems and inequalities (30 min)
  7:00 PM-7:30 PM  MATH U11.1   Ratios, rates, and proportions (30 min)
  7:30 PM-7:45 PM  BREAK (15 min)
  7:45 PM-8:15 PM  MATH U11.2   Unit conversion (30 min)
  8:15 PM-8:45 PM  MATH U11.3   Percentages (30 min)
  8:45 PM-9:00 PM  BREAK (15 min)
  9:00 PM-9:35 PM  R&W  U11.5   Boundaries + form, structure, and sense (35 min)

DAY 23 -- Sun Oct 18  (study 155 min)
  6:30 PM-7:00 PM  MATH U11.4   Center, spread, and shape of distributions (30 min)
  7:00 PM-7:30 PM  MATH U11.5   Data representations (30 min)
  7:30 PM-7:45 PM  BREAK (15 min)
  7:45 PM-8:15 PM  MATH U11.6   Scatterplots (30 min)
  8:15 PM-8:45 PM  MATH U11.7   Linear and exponential growth (30 min)
  8:45 PM-9:00 PM  BREAK (15 min)
  9:00 PM-9:35 PM  R&W  U11.6   Transitions + rhetorical synthesis (35 min)

DAY 24 -- Mon Oct 19  (study 155 min)
  6:30 PM-7:00 PM  MATH U11.8   Probability and relative frequency (30 min)
  7:00 PM-7:30 PM  MATH U11.9   Data inferences (30 min)
  7:30 PM-7:45 PM  BREAK (15 min)
  7:45 PM-8:15 PM  MATH U11.10  Evaluating statistical claims (30 min)
  8:15 PM-8:50 PM  MATH U12.1   Factoring quadratic and polynomial expressions (35 min)
  8:50 PM-9:05 PM  BREAK (15 min)
  9:05 PM-9:20 PM  R&W  U12.1   Subject-verb agreement (15 min)
  9:20 PM-9:35 PM  R&W  U12.2   Pronoun-antecedent agreement (15 min)

DAY 25 -- Tue Oct 20  (study 155 min)
  6:30 PM-7:05 PM  MATH U12.2   Radicals and rational exponents (35 min)
  7:05 PM-7:40 PM  MATH U12.3   Operations with polynomials (35 min)
  7:40 PM-7:55 PM  BREAK (15 min)
  7:55 PM-8:30 PM  MATH U12.4   Operations with rational expressions (35 min)
  8:30 PM-9:05 PM  MATH U12.5   Nonlinear functions (35 min)
  9:05 PM-9:20 PM  BREAK (15 min)
  9:20 PM-9:35 PM  R&W  U12.3   Plurals and possessives (15 min)

DAY 26 -- Wed Oct 21  (study 155 min)
  6:30 PM-7:05 PM  MATH U12.6   Isolating quantities (35 min)
  7:05 PM-7:40 PM  MATH U12.7   Solving quadratic equations (35 min)
  7:40 PM-7:55 PM  BREAK (15 min)
  7:55 PM-8:30 PM  MATH U12.8   Linear and quadratic systems (35 min)
  8:30 PM-9:05 PM  MATH U12.9   Radical, rational, and absolute value equations (35 min)
  9:05 PM-9:20 PM  BREAK (15 min)
  9:20 PM-9:35 PM  R&W  U12.4   Verb forms (15 min)

DAY 27 -- Thu Oct 22  (study 140 min)
  6:30 PM-7:05 PM  MATH U12.10  Quadratic and exponential word problems (35 min)
  7:05 PM-7:40 PM  MATH U12.11  Quadratic graphs (35 min)
  7:40 PM-7:55 PM  BREAK (15 min)
  7:55 PM-8:30 PM  MATH U12.12  Exponential graphs (35 min)
  8:30 PM-9:05 PM  MATH U12.13  Polynomial and other nonlinear graphs (35 min)

DAY 28 -- Fri Oct 23  (study 150 min)
  6:30 PM-7:10 PM  MATH U13.1   Area and volume (40 min)
  7:10 PM-7:50 PM  MATH U13.2   Congruence, similarity, and angle relationships (40 min)
  7:50 PM-8:05 PM  BREAK (15 min)
  8:05 PM-8:45 PM  MATH U13.3   Right triangle trigonometry (40 min)
  8:45 PM-9:00 PM  R&W  U12.5   Subject-modifier placement (15 min)
  9:00 PM-9:15 PM  BREAK (15 min)
  9:15 PM-9:30 PM  R&W  U12.6   Linking clauses (15 min)

DAY 29 -- Sat Oct 24  (study 150 min)
  6:30 PM-7:10 PM  MATH U13.4   Circle theorems (40 min)
  7:10 PM-7:50 PM  MATH U13.5   Unit circle trigonometry (40 min)
  7:50 PM-8:05 PM  BREAK (15 min)
  8:05 PM-8:45 PM  MATH U13.6   Circle equations (40 min)
  8:45 PM-9:00 PM  R&W  U12.7   Supplements (15 min)
  9:00 PM-9:15 PM  BREAK (15 min)
  9:15 PM-9:30 PM  R&W  U12.8   Punctuation (15 min)
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
  if (!line) continue;

  // Rest day: e.g. "Sun Sep 20 -- REST DAY"
  const restMatch = line.match(/^(Sun\s+(?:Sep|Oct|Nov)\s+\d+)\s+--\s+REST DAY/i);
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
  const bufferMatch = line.match(/^([A-Za-z]{3}\s+(?:Sep|Oct)\s+\d+)\s+--\s+BUFFER DAY/i);
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
      specialInstructions: 'Full Illness Recovery Buffer: 0 study minutes. Rest, hydrate, sleep, and rebuild immune strength.',
      tasks: [
        {
          id: `buffer-${dateStr}`,
          label: 'Illness Recovery & Physical Rest • Zero Study Load',
          subject: 'buffer',
          code: 'BUFFER',
          topic: 'Illness Recovery & Rest',
          completed: false
        }
      ]
    });
    currentDay = null;
    continue;
  }

  // Day header: e.g. "DAY 8 -- Sat Oct 03 (study 164 min) <<< UNIT 5 RESTARTS HERE (fresh, lesson 1)"
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
    } else if (dayNumber === 8) {
      instructions = 'Day 8: Unit 5 restarts fresh today from Lesson 1! Area & volume, similarity/congruence, right triangle trig, circle theorems, and textual/quantitative evidence.';
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
    // Check break: e.g. "7:30 PM-7:45 PM BREAK (15 min)"
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

    // Check study task: e.g. "6:30 PM-6:50 PM MATH U3.2 Unit conversion (20 min)"
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
        completed: currentDay.dayNumber >= 1 && currentDay.dayNumber <= 7 // Days 1 to 7 are completed
      });
      continue;
    }
  }
}

// Calculate total time
for (const d of parsedDays) {
  d.totalTimeMinutes = d.studyTimeMinutes + d.breakTimeMinutes;
}

// Phase 2 Days: Sun Oct 25 to Sat Nov 07
const phase2Days = [
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
    specialInstructions: 'Guaranteed Rest Day: Phase 1 complete! Mental recharge before entering Bluebook Arena.',
    tasks: [
      {
        id: 'rest-2026-10-25',
        label: 'Full Rest & Mental Recharge • Zero Assigned Study',
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
    isTestDay: true,
    studyTimeMinutes: 144,
    breakTimeMinutes: 10,
    totalTimeMinutes: 154,
    specialInstructions: 'TEST #1 (Full Bluebook Practice Test, real conditions): 8:00 AM - 10:24 AM.',
    tasks: [
      {
        id: 'bluebook-test-1',
        label: 'TEST #1 (Full Bluebook Practice Test, Real Conditions)',
        subject: 'test',
        code: 'TEST #1',
        topic: 'Official Bluebook Practice Test #1 (Timed)',
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
    specialInstructions: 'Error-log review of Test #1 + Math/Desmos drills on weak areas (75 min).',
    tasks: [
      {
        id: 'p2-2026-10-27-review',
        label: 'Error-Log Autopsy of Test #1 + Targeted Weak Area Drills',
        subject: 'review',
        code: 'AUTOPSY',
        topic: 'Test #1 Error Analysis & Root Cause Remediation',
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
    specialInstructions: 'Targeted R&W drills, punctuation/grammar review (60 min).',
    tasks: [
      {
        id: 'p2-2026-10-28-rw',
        label: 'Targeted R&W Drills: Punctuation, Clause Boundaries & Transitions',
        subject: 'drill',
        code: 'R&W DRILL',
        topic: 'Standard English Conventions & Rhetorical Synthesis Drills',
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
    specialInstructions: 'Light targeted practice on remaining weak spots (45 min).',
    tasks: [
      {
        id: 'p2-2026-10-29-light',
        label: 'Light Precision Practice on High-Frequency Question Types',
        subject: 'review',
        code: 'PRECISION',
        topic: 'High-Yield Formula & Grammar Refinement',
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
    specialInstructions: 'TEST #2 (Full Bluebook Practice Test, real conditions): 8:00 AM - 10:24 AM.',
    tasks: [
      {
        id: 'bluebook-test-2',
        label: 'TEST #2 (Full Bluebook Practice Test, Real Conditions)',
        subject: 'test',
        code: 'TEST #2',
        topic: 'Official Bluebook Practice Test #2 (Timed)',
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
    specialInstructions: 'Error-log review of Test #2 + targeted drills (75 min).',
    tasks: [
      {
        id: 'p2-2026-10-31-review',
        label: 'Error-Log Autopsy of Test #2 + Targeted Desmos Speed Drills',
        subject: 'review',
        code: 'AUTOPSY',
        topic: 'Test #2 Error Dissection & Desmos Speed Tuning',
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
    specialInstructions: 'Guaranteed Rest Day: Mandatory mental recharge before final test week.',
    tasks: [
      {
        id: 'rest-2026-11-01',
        label: 'Full Rest & Cognitive Recovery • Zero Assigned Study',
        subject: 'buffer',
        code: 'REST',
        topic: 'Cognitive Recovery',
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
    specialInstructions: 'Deep review, punctuation & transitions traps + Math cleanup (60 min).',
    tasks: [
      {
        id: 'p2-2026-11-02-deep',
        label: 'Deep Review: Punctuation/Transition Traps & Final Math Cleanup',
        subject: 'review',
        code: 'TRAP REVIEW',
        topic: 'SAT Trap Anatomy & Final Formula Polish',
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
    specialInstructions: 'TEST #3 (Final full test, timed): 8:00 AM - 10:24 AM. Complete under strict exam conditions.',
    tasks: [
      {
        id: 'bluebook-test-3',
        label: 'TEST #3 (Final Full Bluebook Practice Test, Timed)',
        subject: 'test',
        code: 'TEST #3',
        topic: 'Final Official Bluebook Mock Simulation',
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

// Define the 8 calendar weeks
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
    subtitle: 'Day 7 completed on Sep 21, followed by Sep 22–27 buffer window for full illness recovery.',
    phase: 'foundations',
    startDate: '2026-09-21',
    endDate: '2026-09-27'
  },
  {
    id: 'week-3',
    weekNumber: 3,
    title: 'Week 3: Recovery Buffer & Fresh Unit 5 Restart (Oct 03 - Oct 04)',
    dateRange: 'Sep 28 to Oct 04',
    subtitle: 'Sep 28-Oct 02 illness recovery; Unit 5 restarts fresh on Sat Oct 03 (Day 8) and Sun Oct 04 (Day 9).',
    phase: 'foundations',
    startDate: '2026-09-28',
    endDate: '2026-10-04'
  },
  {
    id: 'week-4',
    weekNumber: 4,
    title: 'Week 4: Linear Systems, Ratios, Data & Reading Synthesis',
    dateRange: 'Oct 05 to Oct 11',
    subtitle: 'Days 10–16 master linear systems, ratios, scatterplots, quadratics & rhetorical evidence.',
    phase: 'foundations',
    startDate: '2026-10-05',
    endDate: '2026-10-11'
  },
  {
    id: 'week-5',
    weekNumber: 5,
    title: 'Week 5: Advanced Quadratics, Geometry & Conventions',
    dateRange: 'Oct 12 to Oct 18',
    subtitle: 'Days 17–23 cover quadratic equations, circle theorems, linear inequalities & expression conventions.',
    phase: 'foundations',
    startDate: '2026-10-12',
    endDate: '2026-10-18'
  },
  {
    id: 'week-6',
    weekNumber: 6,
    title: 'Week 6: Statistics, Advanced Functions & Grammar Mastery (Phase 1 Climax)',
    dateRange: 'Oct 19 to Oct 25',
    subtitle: 'Days 24–29 complete all remaining Math & R&W skills by Sat Oct 24, followed by Sun Oct 25 rest day.',
    phase: 'foundations',
    startDate: '2026-10-19',
    endDate: '2026-10-25'
  },
  {
    id: 'week-7',
    weekNumber: 7,
    title: 'Week 7: Bluebook Arena — Test #1 & Test #2 Simulations',
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

// Read packing snippet
const packingSnippetPath = path.join(__dirname, 'packing_snippet.txt');
const packingSnippet = fs.readFileSync(packingSnippetPath, 'utf-8');

// Generate the TypeScript file content
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
