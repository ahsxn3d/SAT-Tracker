const fs = require('fs');
const path = require('path');

const RAW_TABLE = `
1	Mon Sep 14	6:30 PM	6:50 PM	Math	U3.2	Unit conversion	20
1	Mon Sep 14	6:50 PM	7:10 PM	Math	U3.3	Percentages	20
1	Mon Sep 14	7:10 PM	7:30 PM	Math	U3.4	Center, spread, and shape of distributions	20
1	Mon Sep 14	7:30 PM	7:45 PM	BREAK	-	-	15
1	Mon Sep 14	7:45 PM	8:05 PM	Math	U3.5	Data representations	20
2	Tue Sep 15	6:30 PM	6:50 PM	Math	U3.6	Scatterplots	20
2	Tue Sep 15	6:50 PM	7:10 PM	Math	U3.7	Linear and exponential growth	20
2	Tue Sep 15	7:10 PM	7:30 PM	Math	U3.8	Probability and relative frequency	20
2	Tue Sep 15	7:30 PM	7:45 PM	BREAK	-	-	15
2	Tue Sep 15	7:45 PM	8:05 PM	Math	U3.9	Data inferences	20
3	Wed Sep 16	6:30 PM	6:50 PM	Math	U3.10	Evaluating statistical claims	20
3	Wed Sep 16	6:50 PM	7:15 PM	Math	U4.1	Factoring quadratic and polynomial expressions	25
3	Wed Sep 16	7:15 PM	7:30 PM	BREAK	-	-	15
3	Wed Sep 16	7:30 PM	7:55 PM	Math	U4.2	Radicals and rational exponents	25
3	Wed Sep 16	7:55 PM	8:20 PM	Math	U4.3	Operations with polynomials	25
4	Thu Sep 17	6:30 PM	6:55 PM	Math	U4.4	Operations with rational expressions	25
4	Thu Sep 17	6:55 PM	7:20 PM	Math	U4.5	Nonlinear functions	25
4	Thu Sep 17	7:20 PM	7:35 PM	BREAK	-	-	15
4	Thu Sep 17	7:35 PM	8:00 PM	Math	U4.6	Isolating quantities	25
5	Fri Sep 18	6:30 PM	6:55 PM	Math	U4.7	Solving quadratic equations	25
5	Fri Sep 18	6:55 PM	7:20 PM	Math	U4.8	Linear and quadratic systems	25
5	Fri Sep 18	7:20 PM	7:35 PM	BREAK	-	-	15
5	Fri Sep 18	7:35 PM	8:00 PM	Math	U4.9	Radical, rational, and absolute value equations	25
6	Sat Sep 19	6:30 PM	6:55 PM	Math	U4.10	Quadratic and exponential word problems	25
6	Sat Sep 19	6:55 PM	7:20 PM	Math	U4.11	Quadratic graphs	25
6	Sat Sep 19	7:20 PM	7:35 PM	BREAK	-	-	15
6	Sat Sep 19	7:35 PM	8:00 PM	Math	U4.12	Exponential graphs	25
-	Sun Sep 20	-	-	REST DAY	-	-	-
7	Mon Sep 21	6:30 PM	6:55 PM	Math	U4.13	Polynomial and other nonlinear graphs	25
7	Mon Sep 21	6:55 PM	7:25 PM	Math	U5.1	Area and volume	30
7	Mon Sep 21	7:25 PM	7:40 PM	BREAK	-	-	15
7	Mon Sep 21	7:40 PM	8:10 PM	Math	U5.2	Congruence, similarity, and angle relationships	30
8	Tue Sep 22	6:30 PM	7:00 PM	Math	U5.3	Right triangle trigonometry	30
8	Tue Sep 22	7:00 PM	7:30 PM	Math	U5.4	Circle theorems	30
8	Tue Sep 22	7:30 PM	7:45 PM	BREAK	-	-	15
8	Tue Sep 22	7:45 PM	8:15 PM	Math	U5.5	Unit circle trigonometry	30
9	Wed Sep 23	6:30 PM	7:00 PM	Math	U5.6	Circle equations	30
9	Wed Sep 23	7:00 PM	7:25 PM	Math	U6.1	Solving linear equations and inequalities	25
9	Wed Sep 23	7:25 PM	7:40 PM	BREAK	-	-	15
9	Wed Sep 23	7:40 PM	8:05 PM	Math	U6.2	Linear equation word problems	25
-	Thu Sep 24	8:00 AM	10:24 AM	TEST	#1	Full Bluebook Practice Test	144
10	Fri Sep 25	6:30 PM	6:55 PM	Math	U6.3	Linear relationship word problems	25
10	Fri Sep 25	6:55 PM	7:20 PM	Math	U6.4	Graphs of linear equations and functions	25
10	Fri Sep 25	7:20 PM	7:35 PM	BREAK	-	-	15
10	Fri Sep 25	7:35 PM	8:00 PM	Math	U6.5	Solving systems of linear equations	25
10	Fri Sep 25	8:00 PM	8:22 PM	R&W	U5.1	Command of textual evidence	22
10	Fri Sep 25	8:22 PM	8:37 PM	BREAK	-	-	15
10	Fri Sep 25	8:37 PM	8:59 PM	R&W	U5.2	Command of quantitative evidence	22
11	Sat Sep 26	6:30 PM	6:55 PM	Math	U6.6	Systems of linear equations word problems	25
11	Sat Sep 26	6:55 PM	7:20 PM	Math	U6.7	Linear inequality word problems	25
11	Sat Sep 26	7:20 PM	7:35 PM	BREAK	-	-	15
11	Sat Sep 26	7:35 PM	8:00 PM	Math	U6.8	Graphs of linear systems and inequalities	25
11	Sat Sep 26	8:00 PM	8:22 PM	R&W	U5.3	Central ideas and details	22
11	Sat Sep 26	8:22 PM	8:37 PM	BREAK	-	-	15
11	Sat Sep 26	8:37 PM	8:59 PM	R&W	U5.4	Inferences	22
-	Sun Sep 27	-	-	REST DAY	-	-	-
12	Mon Sep 28	6:30 PM	6:55 PM	Math	U7.1	Ratios, rates, and proportions	25
12	Mon Sep 28	6:55 PM	7:20 PM	Math	U7.2	Unit conversion	25
12	Mon Sep 28	7:20 PM	7:35 PM	BREAK	-	-	15
12	Mon Sep 28	7:35 PM	8:00 PM	Math	U7.3	Percentages	25
12	Mon Sep 28	8:00 PM	8:22 PM	R&W	U6.1	Words in context	22
12	Mon Sep 28	8:22 PM	8:37 PM	BREAK	-	-	15
12	Mon Sep 28	8:37 PM	8:59 PM	R&W	U6.2	Text structure and purpose	22
13	Tue Sep 29	6:30 PM	6:55 PM	Math	U7.4	Center, spread, and shape of distributions	25
13	Tue Sep 29	6:55 PM	7:20 PM	Math	U7.5	Data representations	25
13	Tue Sep 29	7:20 PM	7:35 PM	BREAK	-	-	15
13	Tue Sep 29	7:35 PM	8:00 PM	Math	U7.6	Scatterplots	25
13	Tue Sep 29	8:00 PM	8:22 PM	R&W	U6.3	Cross-text connections	22
13	Tue Sep 29	8:22 PM	8:37 PM	BREAK	-	-	15
13	Tue Sep 29	8:37 PM	8:59 PM	R&W	U7.1	Transitions	22
14	Wed Sep 30	6:30 PM	6:55 PM	Math	U7.7	Linear and exponential growth	25
14	Wed Sep 30	6:55 PM	7:20 PM	Math	U7.8	Probability and relative frequency	25
14	Wed Sep 30	7:20 PM	7:35 PM	BREAK	-	-	15
14	Wed Sep 30	7:35 PM	8:00 PM	Math	U7.9	Data inferences	25
14	Wed Sep 30	8:00 PM	8:22 PM	R&W	U7.2	Rhetorical synthesis	22
14	Wed Sep 30	8:22 PM	8:37 PM	BREAK	-	-	15
14	Wed Sep 30	8:37 PM	8:59 PM	R&W	U7.3	Form, structure, and sense	22
15	Thu Oct 01	6:30 PM	6:55 PM	Math	U7.10	Evaluating statistical claims	25
15	Thu Oct 01	6:55 PM	7:25 PM	Math	U8.1	Factoring quadratic and polynomial expressions	30
15	Thu Oct 01	7:25 PM	7:40 PM	BREAK	-	-	15
15	Thu Oct 01	7:40 PM	8:02 PM	R&W	U7.4	Boundaries	22
16	Fri Oct 02	6:30 PM	7:00 PM	Math	U8.2	Radicals and rational exponents	30
16	Fri Oct 02	7:00 PM	7:30 PM	Math	U8.3	Operations with polynomials	30
17	Sat Oct 03	6:30 PM	7:00 PM	Math	U8.4	Operations with rational expressions	30
17	Sat Oct 03	7:00 PM	7:30 PM	Math	U8.5	Nonlinear functions	30
-	Sun Oct 04	-	-	REST DAY	-	-	-
18	Mon Oct 05	6:30 PM	7:00 PM	Math	U8.6	Isolating quantities	30
18	Mon Oct 05	7:00 PM	7:30 PM	Math	U8.7	Solving quadratic equations	30
18	Mon Oct 05	7:30 PM	7:45 PM	BREAK	-	-	15
18	Mon Oct 05	7:45 PM	8:15 PM	Math	U8.8	Linear and quadratic systems	30
19	Tue Oct 06	6:30 PM	7:00 PM	Math	U8.9	Radical, rational, and absolute value equations	30
19	Tue Oct 06	7:00 PM	7:30 PM	Math	U8.10	Quadratic and exponential word problems	30
19	Tue Oct 06	7:30 PM	7:45 PM	BREAK	-	-	15
19	Tue Oct 06	7:45 PM	8:15 PM	Math	U8.11	Quadratic graphs	30
20	Wed Oct 07	6:30 PM	7:00 PM	Math	U8.12	Exponential graphs	30
20	Wed Oct 07	7:00 PM	7:30 PM	Math	U8.13	Polynomial and other nonlinear graphs	30
20	Wed Oct 07	7:30 PM	7:45 PM	BREAK	-	-	15
20	Wed Oct 07	7:45 PM	8:20 PM	Math	U9.1	Area and volume	35
21	Thu Oct 08	6:30 PM	7:05 PM	Math	U9.2	Congruence, similarity, and angle relationships	35
21	Thu Oct 08	7:05 PM	7:40 PM	Math	U9.3	Right triangle trigonometry	35
21	Thu Oct 08	7:40 PM	7:55 PM	BREAK	-	-	15
21	Thu Oct 08	7:55 PM	8:30 PM	Math	U9.4	Circle theorems	35
22	Fri Oct 09	6:30 PM	7:05 PM	Math	U9.5	Unit circle trigonometry	35
22	Fri Oct 09	7:05 PM	7:40 PM	Math	U9.6	Circle equations	35
22	Fri Oct 09	7:40 PM	7:55 PM	BREAK	-	-	15
22	Fri Oct 09	7:55 PM	8:25 PM	Math	U10.1	Solving linear equations and inequalities	30
-	Sat Oct 10	8:00 AM	10:24 AM	TEST	#2	Full Bluebook Practice Test	144
23	Mon Oct 12	6:30 PM	7:00 PM	Math	U10.2	Linear equation word problems	30
23	Mon Oct 12	7:00 PM	7:30 PM	Math	U10.3	Linear relationship word problems	30
23	Mon Oct 12	7:30 PM	7:45 PM	BREAK	-	-	15
23	Mon Oct 12	7:45 PM	8:15 PM	Math	U10.4	Graphs of linear equations and functions	30
23	Mon Oct 12	8:15 PM	8:45 PM	Math	U10.5	Solving systems of linear equations	30
23	Mon Oct 12	8:45 PM	9:00 PM	BREAK	-	-	15
23	Mon Oct 12	9:00 PM	9:25 PM	R&W	U8.1	Command of textual evidence	25
23	Mon Oct 12	9:25 PM	9:50 PM	R&W	U8.2	Command of quantitative evidence	25
24	Tue Oct 13	6:30 PM	7:00 PM	Math	U10.6	Systems of linear equations word problems	30
24	Tue Oct 13	7:00 PM	7:30 PM	Math	U10.7	Linear inequality word problems	30
24	Tue Oct 13	7:30 PM	7:45 PM	BREAK	-	-	15
24	Tue Oct 13	7:45 PM	8:15 PM	Math	U10.8	Graphs of linear systems and inequalities	30
24	Tue Oct 13	8:15 PM	8:45 PM	Math	U11.1	Ratios, rates, and proportions	30
24	Tue Oct 13	8:45 PM	9:00 PM	BREAK	-	-	15
24	Tue Oct 13	9:00 PM	9:25 PM	R&W	U8.3	Central ideas and details	25
24	Tue Oct 13	9:25 PM	9:50 PM	R&W	U8.4	Inferences	25
25	Wed Oct 14	6:30 PM	7:00 PM	Math	U11.2	Unit conversion	30
25	Wed Oct 14	7:00 PM	7:30 PM	Math	U11.3	Percentages	30
25	Wed Oct 14	7:30 PM	7:45 PM	BREAK	-	-	15
25	Wed Oct 14	7:45 PM	8:15 PM	Math	U11.4	Center, spread, and shape of distributions	30
25	Wed Oct 14	8:15 PM	8:45 PM	Math	U11.5	Data representations	30
25	Wed Oct 14	8:45 PM	9:00 PM	BREAK	-	-	15
25	Wed Oct 14	9:00 PM	9:25 PM	R&W	U9.1	Words in context	25
25	Wed Oct 14	9:25 PM	9:50 PM	R&W	U9.2	Text structure and purpose	25
26	Thu Oct 15	6:30 PM	7:00 PM	Math	U11.6	Scatterplots	30
26	Thu Oct 15	7:00 PM	7:30 PM	Math	U11.7	Linear and exponential growth	30
26	Thu Oct 15	7:30 PM	7:45 PM	BREAK	-	-	15
26	Thu Oct 15	7:45 PM	8:15 PM	Math	U11.8	Probability and relative frequency	30
26	Thu Oct 15	8:15 PM	8:45 PM	Math	U11.9	Data inferences	30
26	Thu Oct 15	8:45 PM	9:00 PM	BREAK	-	-	15
26	Thu Oct 15	9:00 PM	9:25 PM	R&W	U9.3	Cross-text connections	25
26	Thu Oct 15	9:25 PM	9:50 PM	R&W	U10.1	Transitions	25
27	Fri Oct 16	6:30 PM	7:00 PM	Math	U11.10	Evaluating statistical claims	30
27	Fri Oct 16	7:00 PM	7:35 PM	Math	U12.1	Factoring quadratic and polynomial expressions	35
27	Fri Oct 16	7:35 PM	7:50 PM	BREAK	-	-	15
27	Fri Oct 16	7:50 PM	8:25 PM	Math	U12.2	Radicals and rational exponents	35
27	Fri Oct 16	8:25 PM	9:00 PM	Math	U12.3	Operations with polynomials	35
27	Fri Oct 16	9:00 PM	9:15 PM	BREAK	-	-	15
27	Fri Oct 16	9:15 PM	9:40 PM	R&W	U10.2	Rhetorical synthesis	25
27	Fri Oct 16	9:40 PM	10:05 PM	R&W	U10.3	Form, structure, and sense	25
28	Sat Oct 17	6:30 PM	7:05 PM	Math	U12.4	Operations with rational expressions	35
28	Sat Oct 17	7:05 PM	7:40 PM	Math	U12.5	Nonlinear functions	35
28	Sat Oct 17	7:40 PM	7:55 PM	BREAK	-	-	15
28	Sat Oct 17	7:55 PM	8:30 PM	Math	U12.6	Isolating quantities	35
28	Sat Oct 17	8:30 PM	9:05 PM	Math	U12.7	Solving quadratic equations	35
28	Sat Oct 17	9:05 PM	9:20 PM	BREAK	-	-	15
28	Sat Oct 17	9:20 PM	9:45 PM	R&W	U10.4	Boundaries	25
-	Sun Oct 18	-	-	REST DAY	-	-	-
29	Mon Oct 19	6:30 PM	7:05 PM	Math	U12.8	Linear and quadratic systems	35
29	Mon Oct 19	7:05 PM	7:40 PM	Math	U12.9	Radical, rational, and absolute value equations	35
29	Mon Oct 19	7:40 PM	7:55 PM	BREAK	-	-	15
29	Mon Oct 19	7:55 PM	8:30 PM	Math	U12.10	Quadratic and exponential word problems	35
29	Mon Oct 19	8:30 PM	9:05 PM	Math	U12.11	Quadratic graphs	35
30	Tue Oct 20	6:30 PM	7:05 PM	Math	U12.12	Exponential graphs	35
30	Tue Oct 20	7:05 PM	7:40 PM	Math	U12.13	Polynomial and other nonlinear graphs	35
30	Tue Oct 20	7:40 PM	7:55 PM	BREAK	-	-	15
30	Tue Oct 20	7:55 PM	8:35 PM	Math	U13.1	Area and volume	40
31	Wed Oct 21	6:30 PM	7:10 PM	Math	U13.2	Congruence, similarity, and angle relationships	40
31	Wed Oct 21	7:10 PM	7:50 PM	Math	U13.3	Right triangle trigonometry	40
31	Wed Oct 21	7:50 PM	8:05 PM	BREAK	-	-	15
31	Wed Oct 21	8:05 PM	8:45 PM	Math	U13.4	Circle theorems	40
32	Thu Oct 22	6:30 PM	7:10 PM	Math	U13.5	Unit circle trigonometry	40
32	Thu Oct 22	7:10 PM	7:50 PM	Math	U13.6	Circle equations	40
-	Fri Oct 23	8:00 AM	10:24 AM	TEST	#3	Full Bluebook Practice Test	144
33	Sat Oct 24	6:30 PM	7:05 PM	R&W	U11.1	Command of evidence	35
33	Sat Oct 24	7:05 PM	7:40 PM	R&W	U11.2	Central ideas and details + inferences	35
-	Sun Oct 25	-	-	REST DAY	-	-	-
34	Mon Oct 26	6:30 PM	7:05 PM	R&W	U11.3	Words in context	35
34	Mon Oct 26	7:05 PM	7:40 PM	R&W	U11.4	Text structure and purpose + cross-text connections	35
35	Tue Oct 27	6:30 PM	7:05 PM	R&W	U11.5	Boundaries + form, structure, and sense	35
35	Tue Oct 27	7:05 PM	7:40 PM	R&W	U11.6	Transitions + rhetorical synthesis	35
36	Wed Oct 28	6:30 PM	6:45 PM	R&W	U12.1	Subject-verb agreement	15
36	Wed Oct 28	6:45 PM	7:00 PM	R&W	U12.2	Pronoun-antecedent agreement	15
37	Thu Oct 29	6:30 PM	6:45 PM	R&W	U12.3	Plurals and possessives	15
37	Thu Oct 29	6:45 PM	7:00 PM	R&W	U12.4	Verb forms	15
38	Fri Oct 30	6:30 PM	6:45 PM	R&W	U12.5	Subject-modifier placement	15
38	Fri Oct 30	6:45 PM	7:00 PM	R&W	U12.6	Linking clauses	15
39	Sat Oct 31	6:30 PM	6:45 PM	R&W	U12.7	Supplements	15
39	Sat Oct 31	6:45 PM	7:00 PM	R&W	U12.8	Punctuation	15
`;

// Months lookup
const MONTH_MAP = {
  Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06',
  Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12'
};

function parseDateStr(str) {
  // str format: "Mon Sep 14"
  const parts = str.trim().split(/\s+/);
  const month = MONTH_MAP[parts[1]];
  const day = parts[2].padStart(2, '0');
  return `2026-${month}-${day}`;
}

// Parse lines into raw day groups
const lines = RAW_TABLE.trim().split('\n').map(l => l.trim()).filter(l => l.length > 0);

const daysMap = new Map();

for (const line of lines) {
  const parts = line.split('\t');
  if (parts.length < 8) continue;
  
  const dayNumRaw = parts[0].trim();
  const dateFormatted = parts[1].trim(); // "Mon Sep 14"
  const startTime = parts[2].trim();
  const endTime = parts[3].trim();
  const typeOrSubj = parts[4].trim();
  const unitCode = parts[5].trim();
  const topic = parts[6].trim();
  const durationMinutes = parseInt(parts[7].trim(), 10) || 0;

  const dateStr = parseDateStr(dateFormatted);
  if (!daysMap.has(dateStr)) {
    daysMap.set(dateStr, {
      dateStr,
      dateFormatted,
      dayNum: dayNumRaw !== '-' ? parseInt(dayNumRaw, 10) : undefined,
      rows: []
    });
  }

  daysMap.get(dateStr).rows.push({
    startTime,
    endTime,
    typeOrSubj,
    unitCode,
    topic,
    durationMinutes
  });
}

// Add Sun Oct 11 REST DAY (which wasn't in the raw text table because it was skipped between Sat Oct 10 and Mon Oct 12)
if (!daysMap.has('2026-10-11')) {
  daysMap.set('2026-10-11', {
    dateStr: '2026-10-11',
    dateFormatted: 'Sun Oct 11',
    dayNum: undefined,
    rows: [
      {
        startTime: '-',
        endTime: '-',
        typeOrSubj: 'REST DAY',
        unitCode: '-',
        topic: '-',
        durationMinutes: 0
      }
    ]
  });
}

// Add Sun Nov 01 REST DAY
if (!daysMap.has('2026-11-01')) {
  daysMap.set('2026-11-01', {
    dateStr: '2026-11-01',
    dateFormatted: 'Sun Nov 1',
    dayNum: undefined,
    rows: [
      {
        startTime: '-',
        endTime: '-',
        typeOrSubj: 'REST DAY',
        unitCode: '-',
        topic: '-',
        durationMinutes: 0
      }
    ]
  });
}

// Add Week 8 Days: Mon Nov 2 to Sat Nov 7
const week8DaysData = [
  {
    dateStr: '2026-11-02',
    formattedDate: 'Mon Nov 2',
    dayOfWeek: 'Mon',
    phase: 'exam',
    studyTimeMinutes: 45,
    breakTimeMinutes: 0,
    totalTimeMinutes: 45,
    isBuffer: false,
    isTestDay: false,
    specialInstructions: 'Timing dry run simulation + error log autopsy. Calibrate speed and wake-up routine.',
    tasks: [
      {
        id: 'w8-d1-1',
        label: 'Error-Log Autopsy & High-Frequency Mistake Review',
        subject: 'review',
        code: 'AUTOPSY',
        topic: 'Mistake Pattern Analysis',
        timeSlot: '6:30 PM - 7:00 PM',
        durationMinutes: 30,
        completed: false
      },
      {
        id: 'w8-d1-2',
        label: 'Test-Day Timing Simulation / Dry Run',
        subject: 'review',
        code: 'TIMING RUN',
        topic: 'Timing Dry Run Protocol',
        timeSlot: '7:00 PM - 7:15 PM',
        durationMinutes: 15,
        completed: false
      }
    ]
  },
  {
    dateStr: '2026-11-03',
    formattedDate: 'Tue Nov 3',
    dayOfWeek: 'Tue',
    phase: 'exam',
    studyTimeMinutes: 30,
    breakTimeMinutes: 0,
    totalTimeMinutes: 30,
    isBuffer: false,
    isTestDay: false,
    specialInstructions: 'Light taper: Review cheat codes and formula sheet. No heavy cognitive load.',
    tasks: [
      {
        id: 'w8-d2-1',
        label: 'Light Taper: Error Notebook & Punctuation Rules Review',
        subject: 'review',
        code: 'TAPER',
        topic: 'Final Rulebook Review',
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
    phase: 'exam',
    studyTimeMinutes: 20,
    breakTimeMinutes: 0,
    totalTimeMinutes: 20,
    isBuffer: false,
    isTestDay: false,
    specialInstructions: 'Bluebook app check: Ensure exam setup is completed and admission ticket generated.',
    tasks: [
      {
        id: 'w8-d3-1',
        label: 'Device Check: Bluebook App Update, Battery Health & Ticket Check',
        subject: 'logistics',
        code: 'BLUEBOOK CHECK',
        topic: 'Exam Device Readiness',
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
    phase: 'exam',
    studyTimeMinutes: 20,
    breakTimeMinutes: 0,
    totalTimeMinutes: 20,
    isBuffer: false,
    isTestDay: false,
    specialInstructions: 'Physical packout: Check off every Rank 1-3 item in your packing checklist.',
    tasks: [
      {
        id: 'w8-d4-1',
        label: 'Physical Packout Protocol: Original CNIC/Passport, Charger & Gear',
        subject: 'logistics',
        code: 'PACKOUT',
        topic: 'Exam Bag Preparation',
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
    phase: 'exam',
    studyTimeMinutes: 0,
    breakTimeMinutes: 0,
    totalTimeMinutes: 0,
    isBuffer: true,
    isTestDay: false,
    specialInstructions: 'FULL REST: Zero studying. Hydrate, eat a solid dinner, and sleep by 10:00 PM.',
    tasks: [
      {
        id: 'w8-d5-1',
        label: 'FULL REST: No Studying, Mental Recovery & Early Sleep (10:00 PM Curfew)',
        subject: 'buffer',
        code: 'PRE-EXAM REST',
        topic: 'Pre-Exam Mental Recovery',
        completed: false
      }
    ]
  },
  {
    dateStr: '2026-11-07',
    formattedDate: 'Sat Nov 7',
    dayOfWeek: 'Sat',
    phase: 'exam',
    studyTimeMinutes: 144,
    breakTimeMinutes: 10,
    totalTimeMinutes: 154,
    isBuffer: false,
    isTestDay: true,
    specialInstructions: 'Sat Nov 7 -- OFFICIAL EXAM DAY: Crescent Model School, Shadman Lahore. Arrive by 7:15 AM sharp (gates lock at 7:45 AM). Stay calm and execute.',
    tasks: [
      {
        id: 'sat-exam-day',
        label: 'OFFICIAL SAT EXAM: Crescent Model School (7:15 AM Arrival)',
        subject: 'test',
        code: 'EXAM DAY',
        topic: 'Official SAT Examination',
        timeSlot: '7:15 AM - 12:30 PM',
        durationMinutes: 144,
        completed: false
      }
    ]
  }
];

// Week definitions
const WEEKS_META = [
  {
    id: 'week-1',
    weekNumber: 1,
    title: 'Week 1: Problem Solving & Advanced Math Foundations',
    dateRange: 'Sep 14 to Sep 20',
    subtitle: 'Math Units 3 & 4 Foundations • Percentages, distributions, quadratic factoring & exponential models.',
    phase: 'foundations',
    startDate: '2026-09-14',
    endDate: '2026-09-20'
  },
  {
    id: 'week-2',
    weekNumber: 2,
    title: 'Week 2: Foundations Mastery & Test #1 Diagnostic Checkpoint',
    dateRange: 'Sep 21 to Sep 27',
    subtitle: 'Complete Foundations Math (U4-U6), Thu Sep 24 Test #1 Checkpoint, and launch Medium Tier.',
    phase: 'foundations',
    startDate: '2026-09-21',
    endDate: '2026-09-27'
  },
  {
    id: 'week-3',
    weekNumber: 3,
    title: 'Week 3: Medium Tier Acceleration (Math U7 & U8, R&W U6 & U7)',
    dateRange: 'Sep 28 to Oct 04',
    subtitle: 'Ratios, percent growth, quadratic systems, transitions, boundaries & rhetorical synthesis.',
    phase: 'foundations',
    startDate: '2026-09-28',
    endDate: '2026-10-04'
  },
  {
    id: 'week-4',
    weekNumber: 4,
    title: 'Week 4: Medium Tier Climax & Test #2 Checkpoint',
    dateRange: 'Oct 05 to Oct 11',
    subtitle: 'Finish Medium Math (U8-U10.1) and take Full Bluebook Practice Test #2 on Sat Oct 10.',
    phase: 'bluebook',
    startDate: '2026-10-05',
    endDate: '2026-10-11'
  },
  {
    id: 'week-5',
    weekNumber: 5,
    title: 'Week 5: Advanced Tier Math & Medium R&W Climax',
    dateRange: 'Oct 12 to Oct 18',
    subtitle: 'Advanced Math U10–U12 + Medium R&W U8–U10: Systems of equations, polynomial operations & grammar sense.',
    phase: 'bluebook',
    startDate: '2026-10-12',
    endDate: '2026-10-18'
  },
  {
    id: 'week-6',
    weekNumber: 6,
    title: 'Week 6: All Math Complete, Test #3 Checkpoint & Challenge Unit Launch',
    dateRange: 'Oct 19 to Oct 25',
    subtitle: 'Complete all SAT Math on Thu Oct 22, take Test #3 on Fri Oct 23, and launch high-difficulty Challenge Unit.',
    phase: 'bluebook',
    startDate: '2026-10-19',
    endDate: '2026-10-25'
  },
  {
    id: 'week-7',
    weekNumber: 7,
    title: 'Week 7: Challenge Unit Mastery & Grammar Speed Sprint',
    dateRange: 'Oct 26 to Nov 01',
    subtitle: 'Finish high-difficulty Challenge Unit (R&W U11) and complete all R&W Grammar drills (U12) by Sat Oct 31.',
    phase: 'bluebook',
    startDate: '2026-10-26',
    endDate: '2026-11-01'
  },
  {
    id: 'week-8',
    weekNumber: 8,
    title: 'Week 8: Final Exam Week Taper, Packout & Official SAT Exam Day',
    dateRange: 'Nov 02 to Nov 07',
    subtitle: 'Test-day simulation autopsy, device check, bag packout, full rest curfew, and official SAT Exam Day on Sat Nov 7.',
    phase: 'exam',
    startDate: '2026-11-02',
    endDate: '2026-11-07'
  }
];

function buildDayPlan(rawDay, weekMeta) {
  const parts = rawDay.dateFormatted.split(/\s+/);
  const dayOfWeek = parts[0];
  const formattedDate = rawDay.dateFormatted;
  const isTestDay = rawDay.rows.some(r => r.typeOrSubj === 'TEST');
  const isRestDay = rawDay.rows.some(r => r.typeOrSubj === 'REST DAY');

  let studyTimeMinutes = 0;
  let breakTimeMinutes = 0;
  const tasks = [];

  let taskCounter = 1;
  for (const r of rawDay.rows) {
    if (r.typeOrSubj === 'REST DAY') {
      tasks.push({
        id: `rest-${rawDay.dateStr}`,
        label: 'Full Rest & Cognitive Recovery • Zero Assigned Study',
        subject: 'buffer',
        code: 'REST',
        topic: 'Cognitive Recovery',
        completed: false
      });
      break;
    }

    if (r.typeOrSubj === 'TEST') {
      const testNum = r.unitCode.replace('#', '');
      const testId = `bluebook-test-${testNum}`;
      studyTimeMinutes += r.durationMinutes;
      breakTimeMinutes += 10;
      tasks.push({
        id: testId,
        label: `Full Bluebook Practice Test #${testNum} (${r.durationMinutes} min)`,
        subject: 'test',
        code: `TEST #${testNum}`,
        topic: `Full Bluebook Practice Test #${testNum}`,
        timeSlot: `${r.startTime} - ${r.endTime}`,
        durationMinutes: r.durationMinutes,
        completed: false
      });
      continue;
    }

    if (r.typeOrSubj === 'BREAK') {
      breakTimeMinutes += r.durationMinutes;
      tasks.push({
        id: `break-${rawDay.dateStr}-${taskCounter++}`,
        label: 'Screen-Free Rest & Recharge',
        subject: 'buffer',
        code: 'BREAK',
        topic: 'Screen-Free Rest & Recharge',
        timeSlot: `${r.startTime} - ${r.endTime}`,
        durationMinutes: r.durationMinutes,
        completed: false
      });
      continue;
    }

    // Math or R&W
    studyTimeMinutes += r.durationMinutes;
    const isMath = r.typeOrSubj.toLowerCase().includes('math');
    const subjCode = isMath ? 'Math' : 'R&W';
    const subjectType = isMath ? 'math' : 'rw';
    const code = `${subjCode} ${r.unitCode}`;
    const label = `[${code.toUpperCase()}] ${r.topic}`;
    const taskId = `task-${rawDay.dateStr}-${taskCounter++}`;

    tasks.push({
      id: taskId,
      label,
      subject: subjectType,
      code,
      topic: r.topic,
      timeSlot: `${r.startTime} - ${r.endTime}`,
      durationMinutes: r.durationMinutes,
      completed: false
    });
  }

  const isBuffer = isRestDay;
  const totalTimeMinutes = studyTimeMinutes + breakTimeMinutes;

  let specialInstructions = '';
  if (isTestDay) {
    specialInstructions = `Full-length timed Bluebook practice test under strict testing conditions. Start promptly at ${rawDay.rows[0].startTime}. Log all missed questions immediately into the Error Log.`;
  } else if (isRestDay) {
    specialInstructions = 'Guaranteed Rest Day: Zero assigned lessons. Allow mental recharge, sleep, and physical recovery.';
  } else {
    specialInstructions = `Complete assigned ${dayOfWeek} study tasks with strict timer adherence. Rest during scheduled break intervals.`;
  }

  return {
    id: rawDay.dateStr,
    dateStr: rawDay.dateStr,
    dayOfWeek,
    formattedDate,
    dayNumber: rawDay.dayNum,
    weekId: weekMeta.id,
    weekNumber: weekMeta.weekNumber,
    weekTitle: weekMeta.title.replace(/^Week \d+:\s*/, ''),
    phase: weekMeta.phase,
    isBuffer,
    isTestDay,
    studyTimeMinutes,
    breakTimeMinutes,
    totalTimeMinutes,
    tasks,
    specialInstructions
  };
}

// Assemble all weeks
const studyPlanWeeks = [];

for (const wMeta of WEEKS_META) {
  if (wMeta.id === 'week-8') {
    // Week 8 special days
    const days = week8DaysData.map(d => ({
      ...d,
      id: d.dateStr,
      weekId: wMeta.id,
      weekNumber: wMeta.weekNumber,
      weekTitle: wMeta.title.replace(/^Week \d+:\s*/, '')
    }));
    studyPlanWeeks.push({
      id: wMeta.id,
      title: wMeta.title,
      dateRange: wMeta.dateRange,
      subtitle: wMeta.subtitle,
      phase: wMeta.phase,
      days
    });
    continue;
  }

  // Filter days belonging to this week
  const weekDays = [];
  for (const [dateStr, rawDay] of daysMap.entries()) {
    if (dateStr >= wMeta.startDate && dateStr <= wMeta.endDate) {
      weekDays.push(rawDay);
    }
  }

  // Sort by dateStr ascending
  weekDays.sort((a, b) => a.dateStr.localeCompare(b.dateStr));

  const days = weekDays.map(rd => buildDayPlan(rd, wMeta));

  studyPlanWeeks.push({
    id: wMeta.id,
    title: wMeta.title,
    dateRange: wMeta.dateRange,
    subtitle: wMeta.subtitle,
    phase: wMeta.phase,
    days
  });
}

// Generate the TypeScript export
const studyPlanTsPath = path.join(__dirname, '..', 'src', 'data', 'studyPlan.ts');
const originalContent = fs.readFileSync(studyPlanTsPath, 'utf8');

// Find where `export const STUDY_PLAN_WEEKS: WeekPlan[] = [` begins
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
for (const w of studyPlanWeeks) {
  totalDays += w.days.length;
  console.log(`- ${w.id} (${w.dateRange}): ${w.days.length} days`);
}
console.log(`Total days in schedule: ${totalDays}`);
