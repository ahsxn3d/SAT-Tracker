import { WeekPlan, PackingItem } from '../types';

export const INITIAL_PACKING_LIST: PackingItem[] = [
  // =========================================================================
  // RANK 1: GATEKEEPER ESSENTIALS (LIFE OR DEATH) 🪪🚫
  // =========================================================================
  {
    id: 'rank1-id',
    item: 'Original Physical ID (Passport / Smart CNIC)',
    description: 'Your non-expired Pakistani Passport or Smart CNIC. No color photocopies, no digital photos on your phone, and no school ID cards. The name on the document must match "Muhammad Ahsan Javed" letter for letter.',
    rank: 1,
    rankTitle: 'Rank 1: Gatekeeper Essentials (Life or Death) 🪪🚫',
    category: 'essential',
    required: true,
    packed: false,
  },
  {
    id: 'rank1-laptop',
    item: 'Testing Laptop & Original Power Adapter',
    description: 'Your laptop must boot reliably, hold a charge, and run the latest version of Bluebook. Pack the original power brick and charging cable in your bag.',
    rank: 1,
    rankTitle: 'Rank 1: Gatekeeper Essentials (Life or Death) 🪪🚫',
    category: 'tech',
    required: true,
    packed: false,
  },
  {
    id: 'rank1-ticket',
    item: 'Official Printed Admission Ticket',
    description: 'Generated inside the Bluebook application five days before exam day during Exam Setup. Print a physical paper copy to present at the door.',
    rank: 1,
    rankTitle: 'Rank 1: Gatekeeper Essentials (Life or Death) 🪪🚫',
    category: 'essential',
    required: true,
    packed: false,
  },
  {
    id: 'rank1-arrival',
    item: 'Arriving Before the Gate Locks (7:15 AM Arrival)',
    description: 'College Board enforces a zero-tolerance lockout policy. Doors close strictly around 7:45 AM. Arrive at Crescent Model by 7:15 AM so you can clear the entry line without panic.',
    rank: 1,
    rankTitle: 'Rank 1: Gatekeeper Essentials (Life or Death) 🪪🚫',
    category: 'essential',
    required: true,
    packed: false,
  },

  // =========================================================================
  // RANK 2: CORE SCORE DRIVERS (THE 80/20 RULE) 📚🧠
  // =========================================================================
  {
    id: 'rank2-khan',
    item: 'Daily Khan Academy Reps (90-Minute Cap)',
    description: 'Consistent practice in two focused blocks: 45 minutes of Math, a 10-minute break, and 35 to 45 minutes of Reading and Writing. Active problem solving builds the intuition you need on test day.',
    rank: 2,
    rankTitle: 'Rank 2: Core Score Drivers (The 80/20 Rule) 📚🧠',
    category: 'habit',
    required: true,
    packed: false,
  },
  {
    id: 'rank2-error-log',
    item: 'Mistake Autopsy Notebook (Error Log)',
    description: 'Logging missed questions is where score gains happen. After every quiz or practice test, write down the root cause: did you misread the question, fall for a trap answer, or miss a math formula?',
    rank: 2,
    rankTitle: 'Rank 2: Core Score Drivers (The 80/20 Rule) 📚🧠',
    category: 'habit',
    required: true,
    packed: false,
  },
  {
    id: 'rank2-mocks',
    item: 'Official Full-Length Bluebook Mocks',
    description: 'Third-party PDFs cannot simulate adaptive testing. Taking official timed Bluebook tests trains your stamina for the 2-hour digital exam.',
    rank: 2,
    rankTitle: 'Rank 2: Core Score Drivers (The 80/20 Rule) 📚🧠',
    category: 'habit',
    required: true,
    packed: false,
  },

  // =========================================================================
  // RANK 3: TACTICAL MULTIPLIERS (SPEED & ACCURACY) ⚡💻
  // =========================================================================
  {
    id: 'rank3-desmos',
    item: 'Desmos Graphing Mastery',
    description: 'Learning how to type equations directly into Desmos to find intersections, vertex points, and roots saves minutes of manual scratch work.',
    rank: 3,
    rankTitle: 'Rank 3: Tactical Multipliers (Speed & Accuracy) ⚡💻',
    category: 'tech',
    required: false,
    packed: false,
  },
  {
    id: 'rank3-mouse',
    item: 'External Mouse & Mousepad',
    description: 'Using a laptop trackpad to highlight text and drag graphs on Desmos is slow. A responsive external mouse gives you smoother control during timed modules.',
    rank: 3,
    rankTitle: 'Rank 3: Tactical Multipliers (Speed & Accuracy) ⚡💻',
    category: 'tech',
    required: false,
    packed: false,
  },
  {
    id: 'rank3-pens',
    item: 'Reliable Writing Utensils (2 Pens/Pencils)',
    description: 'Bring two working pens or pencils. The exam center supplies official blank scratch paper, but they do not guarantee pens for test takers.',
    rank: 3,
    rankTitle: 'Rank 3: Tactical Multipliers (Speed & Accuracy) ⚡💻',
    category: 'comfort',
    required: false,
    packed: false,
  },

  // =========================================================================
  // RANK 4: BIOLOGICAL OPTIMIZATION (TEST-DAY FUEL) 🥪🔋
  // =========================================================================
  {
    id: 'rank4-sleep',
    item: 'Sleep Schedule Alignment (10 PM Curfew)',
    description: 'A full night of sleep before test day protects your working memory far more than late-night cramming.',
    rank: 4,
    rankTitle: 'Rank 4: Biological Optimization (Test-Day Fuel) 🥪🔋',
    category: 'comfort',
    required: false,
    packed: false,
  },
  {
    id: 'rank4-fuel',
    item: 'Mid-Exam Fuel (Water Bottle & Dates/Almonds/Banana)',
    description: 'A clear water bottle and a simple snack like dates, almonds, or a banana during the mandatory 10-minute break keeps your focus steady for Math Module 2.',
    rank: 4,
    rankTitle: 'Rank 4: Biological Optimization (Test-Day Fuel) 🥪🔋',
    category: 'comfort',
    required: false,
    packed: false,
  },
  {
    id: 'rank4-clothing',
    item: 'Comfortable Layered Clothing',
    description: 'Testing rooms can be drafty or warm depending on the hall. Wear layers so you can adjust comfortably.',
    rank: 4,
    rankTitle: 'Rank 4: Biological Optimization (Test-Day Fuel) 🥪🔋',
    category: 'comfort',
    required: false,
    packed: false,
  },

  // =========================================================================
  // RANK 5: LOWEST PRIORITY (THINGS STUDENTS WASTE TIME ON) 📉🛋️
  // =========================================================================
  {
    id: 'rank5-books',
    item: 'Avoid Third-Party Paper Prep Books',
    description: "Paper prep books designed for the old paper SAT contain outdated question types and won't teach you digital interface mechanics.",
    rank: 5,
    rankTitle: 'Rank 5: Lowest Priority (Things Students Waste Time On) 📉🛋️',
    category: 'lowest',
    required: false,
    packed: false,
  },
  {
    id: 'rank5-flashcards',
    item: 'Avoid Complex Note Formatting / Heavy Binders',
    description: 'Color-coded flashcards and elaborate binders look neat, but doing practice questions on the screen is what actually raises your score.',
    rank: 5,
    rankTitle: 'Rank 5: Lowest Priority (Things Students Waste Time On) 📉🛋️',
    category: 'lowest',
    required: false,
    packed: false,
  },
  {
    id: 'rank5-localhost',
    item: 'Avoid Over-Tweaking Web Trackers on Localhost 😂',
    description: "Your React app looks great, but don't let perfecting CSS buttons pull time away from your daily Khan Academy reps! 😂",
    rank: 5,
    rankTitle: 'Rank 5: Lowest Priority (Things Students Waste Time On) 📉🛋️',
    category: 'lowest',
    required: false,
    packed: false,
  },
];

/**
 * Intelligent merge helper that guarantees all 16 canonical items from
 * INITIAL_PACKING_LIST (covering all 5 Ranks) are ALWAYS present, while
 * preserving any packed status or custom items the user has saved.
 */
export function mergePackingListWithDefaults(savedList?: PackingItem[] | null): PackingItem[] {
  if (!savedList || !Array.isArray(savedList) || savedList.length === 0) {
    return INITIAL_PACKING_LIST;
  }

  const packedStatusById = new Map<string, boolean>();
  const packedStatusByName = new Map<string, boolean>();
  const customItems: PackingItem[] = [];

  savedList.forEach((item) => {
    if (!item) return;
    if (item.id) {
      packedStatusById.set(item.id, !!item.packed);
    }
    if (item.item) {
      packedStatusByName.set(item.item.trim().toLowerCase(), !!item.packed);
    }

    // Retain user-added custom items that don't collide with canonical IDs
    const isCanonical = INITIAL_PACKING_LIST.some((canonical) => canonical.id === item.id);
    if (!isCanonical && item.id && (item.id.startsWith('custom-') || !item.id.startsWith('pack-'))) {
      customItems.push({
        ...item,
        rank: item.rank || 1,
        packed: !!item.packed,
      });
    }
  });

  // Always output all 16 canonical items with canonical metadata and user packed state
  const mergedCanonical = INITIAL_PACKING_LIST.map((canonical) => {
    let isPacked = false;
    if (packedStatusById.has(canonical.id)) {
      isPacked = packedStatusById.get(canonical.id)!;
    } else if (packedStatusByName.has(canonical.item.trim().toLowerCase())) {
      isPacked = packedStatusByName.get(canonical.item.trim().toLowerCase())!;
    }
    return {
      ...canonical,
      packed: isPacked,
    };
  });

  return [...mergedCanonical, ...customItems];
}

export const STUDY_PLAN_WEEKS: WeekPlan[] = [
  {
    "id": "week-1",
    "title": "Week 1: Kickoff & Problem Solving Foundations",
    "dateRange": "Sep 12 to Sep 18",
    "subtitle": "Ratios, unit conversions, percentages, data distributions, and reading craft foundations.",
    "phase": "foundations",
    "days": [
      {
        "id": "2026-09-12",
        "dayNumber": 1,
        "dateStr": "2026-09-12",
        "dayOfWeek": "Sat",
        "formattedDate": "Sat Sep 12",
        "weekId": "week-1",
        "weekNumber": 1,
        "weekTitle": "Kickoff & Problem Solving Foundations",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 140,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 170,
        "specialInstructions": "Day 1: study 140m + break 30m = 170m total. Two 15m Real Breaks between study blocks.",
        "tasks": [
          {
            "id": "w1-d1-1",
            "label": "Math U3.2: Unit conversion (20 min)",
            "subject": "math",
            "code": "Math U3.2",
            "topic": "Unit conversion",
            "timeSlot": "6:30 PM - 6:50 PM",
            "durationMinutes": 20,
            "completed": false
          },
          {
            "id": "w1-d1-2",
            "label": "Math U3.3: Percentages (20 min)",
            "subject": "math",
            "code": "Math U3.3",
            "topic": "Percentages",
            "timeSlot": "6:50 PM - 7:10 PM",
            "durationMinutes": 20,
            "completed": false
          },
          {
            "id": "w1-d1-3",
            "label": "Math U3.4: Multipliers & percent change (20 min)",
            "subject": "math",
            "code": "Math U3.4",
            "topic": "Multipliers & percent change",
            "timeSlot": "7:10 PM - 7:30 PM",
            "durationMinutes": 20,
            "completed": false
          },
          {
            "id": "w1-d1-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w1-d1-4",
            "label": "Math U3.5: Center, spread, and shape (20 min)",
            "subject": "math",
            "code": "Math U3.5",
            "topic": "Center, spread, and shape",
            "timeSlot": "7:45 PM - 8:05 PM",
            "durationMinutes": 20,
            "completed": false
          },
          {
            "id": "w1-d1-5",
            "label": "R&W U3.1: Words in context (20 min)",
            "subject": "rw",
            "code": "R&W U3.1",
            "topic": "Words in context",
            "timeSlot": "8:05 PM - 8:25 PM",
            "durationMinutes": 20,
            "completed": false
          },
          {
            "id": "w1-d1-6",
            "label": "R&W U3.2: Text structure and purpose (20 min)",
            "subject": "rw",
            "code": "R&W U3.2",
            "topic": "Text structure and purpose",
            "timeSlot": "8:25 PM - 8:45 PM",
            "durationMinutes": 20,
            "completed": false
          },
          {
            "id": "w1-d1-b2",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Hydrate",
            "timeSlot": "8:45 PM - 9:00 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w1-d1-7",
            "label": "R&W U3.3: Cross-text connections (20 min)",
            "subject": "rw",
            "code": "R&W U3.3",
            "topic": "Cross-text connections",
            "timeSlot": "9:00 PM - 9:20 PM",
            "durationMinutes": 20,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-09-13",
        "dateStr": "2026-09-13",
        "dayOfWeek": "Sun",
        "formattedDate": "Sun Sep 13",
        "weekId": "week-1",
        "weekNumber": 1,
        "weekTitle": "Kickoff & Problem Solving Foundations",
        "phase": "foundations",
        "isBuffer": true,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "specialInstructions": "Sun Sep 13 -- REST DAY. Zero assigned lessons. 100% guilt-free recharge.",
        "tasks": [
          {
            "id": "w1-d2-1",
            "label": "Buffer Sunday: Zero assigned lessons (Rest & Recharge)",
            "subject": "buffer",
            "topic": "Mental Recovery",
            "completed": false
          }
        ]
      },
      {
        "id": "2026-09-14",
        "dayNumber": 2,
        "dateStr": "2026-09-14",
        "dayOfWeek": "Mon",
        "formattedDate": "Mon Sep 14",
        "weekId": "week-1",
        "weekNumber": 1,
        "weekTitle": "Kickoff & Problem Solving Foundations",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 140,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 170,
        "specialInstructions": "Day 2: study 140m + break 30m = 170m total. 4 Math units (80m) + 3 R&W units (60m) + two 15m breaks.",
        "tasks": [
          {
            "id": "w1-d3-1",
            "label": "Math U3.6: Data representations & box plots (20 min)",
            "subject": "math",
            "code": "Math U3.6",
            "topic": "Data representations",
            "timeSlot": "6:30 PM - 6:50 PM",
            "durationMinutes": 20,
            "completed": false
          },
          {
            "id": "w1-d3-2",
            "label": "Math U3.7: Scatterplots & line of best fit (20 min)",
            "subject": "math",
            "code": "Math U3.7",
            "topic": "Scatterplots",
            "timeSlot": "6:50 PM - 7:10 PM",
            "durationMinutes": 20,
            "completed": false
          },
          {
            "id": "w1-d3-3",
            "label": "Math U3.8: Linear vs. exponential growth (20 min)",
            "subject": "math",
            "code": "Math U3.8",
            "topic": "Linear vs. exponential growth",
            "timeSlot": "7:10 PM - 7:30 PM",
            "durationMinutes": 20,
            "completed": false
          },
          {
            "id": "w1-d3-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "topic": "Rest & Stretch",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w1-d3-4",
            "label": "Math U3.9: Two-way tables & conditional probability (20 min)",
            "subject": "math",
            "code": "Math U3.9",
            "topic": "Two-way tables",
            "timeSlot": "7:45 PM - 8:05 PM",
            "durationMinutes": 20,
            "completed": false
          },
          {
            "id": "w1-d3-5",
            "label": "R&W U4.1: Central ideas and details (20 min)",
            "subject": "rw",
            "code": "R&W U4.1",
            "topic": "Central ideas and details",
            "timeSlot": "8:05 PM - 8:25 PM",
            "durationMinutes": 20,
            "completed": false
          },
          {
            "id": "w1-d3-6",
            "label": "R&W U4.2: Command of evidence - Textual (20 min)",
            "subject": "rw",
            "code": "R&W U4.2",
            "topic": "Command of evidence (Textual)",
            "timeSlot": "8:25 PM - 8:45 PM",
            "durationMinutes": 20,
            "completed": false
          },
          {
            "id": "w1-d3-b2",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "topic": "Hydrate & Rest Eyes",
            "timeSlot": "8:45 PM - 9:00 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w1-d3-7",
            "label": "R&W U4.3: Command of evidence - Quantitative (20 min)",
            "subject": "rw",
            "code": "R&W U4.3",
            "topic": "Command of evidence (Quantitative)",
            "timeSlot": "9:00 PM - 9:20 PM",
            "durationMinutes": 20,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-09-15",
        "dayNumber": 3,
        "dateStr": "2026-09-15",
        "dayOfWeek": "Tue",
        "formattedDate": "Tue Sep 15",
        "weekId": "week-1",
        "weekNumber": 1,
        "weekTitle": "Kickoff & Problem Solving Foundations",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 134,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 164,
        "specialInstructions": "Day 3: study 134m + break 30m = 164m total.",
        "tasks": [
          {
            "id": "w1-d4-1",
            "label": "Math U3.10: Probability & sample space (20 min)",
            "subject": "math",
            "code": "Math U3.10",
            "topic": "Probability",
            "timeSlot": "6:30 PM - 6:50 PM",
            "durationMinutes": 20,
            "completed": false
          },
          {
            "id": "w1-d4-2",
            "label": "Math U4.1: Linear equations in 1 variable (25 min)",
            "subject": "math",
            "code": "Math U4.1",
            "topic": "Linear equations",
            "timeSlot": "6:50 PM - 7:15 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w1-d4-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "topic": "Real Break",
            "timeSlot": "7:15 PM - 7:30 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w1-d4-3",
            "label": "Math U4.2: Linear equation word problems (25 min)",
            "subject": "math",
            "code": "Math U4.2",
            "topic": "Linear word problems",
            "timeSlot": "7:30 PM - 7:55 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w1-d4-4",
            "label": "R&W U4.4: Inferences (20 min)",
            "subject": "rw",
            "code": "R&W U4.4",
            "topic": "Inferences",
            "timeSlot": "7:55 PM - 8:15 PM",
            "durationMinutes": 20,
            "completed": false
          },
          {
            "id": "w1-d4-b2",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "topic": "Real Break",
            "timeSlot": "8:15 PM - 8:30 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w1-d4-5",
            "label": "R&W U5.1: Boundaries - End-of-sentence & clauses (22 min)",
            "subject": "rw",
            "code": "R&W U5.1",
            "topic": "Sentence boundaries",
            "timeSlot": "8:30 PM - 8:52 PM",
            "durationMinutes": 22,
            "completed": false
          },
          {
            "id": "w1-d4-6",
            "label": "R&W U5.2: Boundaries - Supplementary elements (22 min)",
            "subject": "rw",
            "code": "R&W U5.2",
            "topic": "Supplementary elements",
            "timeSlot": "8:52 PM - 9:14 PM",
            "durationMinutes": 22,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-09-16",
        "dayNumber": 4,
        "dateStr": "2026-09-16",
        "dayOfWeek": "Wed",
        "formattedDate": "Wed Sep 16",
        "weekId": "week-1",
        "weekNumber": 1,
        "weekTitle": "Kickoff & Problem Solving Foundations",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 119,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 149,
        "specialInstructions": "Day 4: study 119m + break 30m = 149m total.",
        "tasks": [
          {
            "id": "w1-d5-1",
            "label": "Math U4.3: Linear relationship graphs (25 min)",
            "subject": "math",
            "code": "Math U4.3",
            "topic": "Linear graphs",
            "timeSlot": "6:30 PM - 6:55 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w1-d5-2",
            "label": "Math U4.4: Linear inequalities in 1 variable (25 min)",
            "subject": "math",
            "code": "Math U4.4",
            "topic": "Linear inequalities",
            "timeSlot": "6:55 PM - 7:20 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w1-d5-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "topic": "Real Break",
            "timeSlot": "7:20 PM - 7:35 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w1-d5-3",
            "label": "Math U4.5: Systems of linear equations (25 min)",
            "subject": "math",
            "code": "Math U4.5",
            "topic": "Linear systems",
            "timeSlot": "7:35 PM - 8:00 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w1-d5-4",
            "label": "R&W U5.3: Form, structure, and sense - Subject-verb (22 min)",
            "subject": "rw",
            "code": "R&W U5.3",
            "topic": "Subject-verb agreement",
            "timeSlot": "8:00 PM - 8:22 PM",
            "durationMinutes": 22,
            "completed": false
          },
          {
            "id": "w1-d5-b2",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "topic": "Real Break",
            "timeSlot": "8:22 PM - 8:37 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w1-d5-5",
            "label": "R&W U5.4: Verb tense, aspect, & mood (22 min)",
            "subject": "rw",
            "code": "R&W U5.4",
            "topic": "Verb tense & mood",
            "timeSlot": "8:37 PM - 8:59 PM",
            "durationMinutes": 22,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-09-17",
        "dayNumber": 5,
        "dateStr": "2026-09-17",
        "dayOfWeek": "Thu",
        "formattedDate": "Thu Sep 17",
        "weekId": "week-1",
        "weekNumber": 1,
        "weekTitle": "Kickoff & Problem Solving Foundations",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 119,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 149,
        "specialInstructions": "Day 5: study 119m + break 30m = 149m total.",
        "tasks": [
          {
            "id": "w1-d6-1",
            "label": "Math U4.6: Systems of linear inequalities (25 min)",
            "subject": "math",
            "code": "Math U4.6",
            "topic": "Linear inequalities systems",
            "timeSlot": "6:30 PM - 6:55 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w1-d6-2",
            "label": "Math U4.7: Number of solutions to linear systems (25 min)",
            "subject": "math",
            "code": "Math U4.7",
            "topic": "System solutions",
            "timeSlot": "6:55 PM - 7:20 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w1-d6-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "topic": "Real Break",
            "timeSlot": "7:20 PM - 7:35 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w1-d6-3",
            "label": "Math U4.8: Lines in coordinate plane - Slope & intercepts (25 min)",
            "subject": "math",
            "code": "Math U4.8",
            "topic": "Slope & intercepts",
            "timeSlot": "7:35 PM - 8:00 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w1-d6-4",
            "label": "R&W U6.1: Modifier placement & dangling modifiers (22 min)",
            "subject": "rw",
            "code": "R&W U6.1",
            "topic": "Modifiers & placement",
            "timeSlot": "8:00 PM - 8:22 PM",
            "durationMinutes": 22,
            "completed": false
          },
          {
            "id": "w1-d6-b2",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "topic": "Real Break",
            "timeSlot": "8:22 PM - 8:37 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w1-d6-5",
            "label": "R&W U6.2: Pronoun-antecedent agreement & clarity (22 min)",
            "subject": "rw",
            "code": "R&W U6.2",
            "topic": "Pronoun agreement",
            "timeSlot": "8:37 PM - 8:59 PM",
            "durationMinutes": 22,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-09-18",
        "dayNumber": 6,
        "dateStr": "2026-09-18",
        "dayOfWeek": "Fri",
        "formattedDate": "Fri Sep 18",
        "weekId": "week-1",
        "weekNumber": 1,
        "weekTitle": "Kickoff & Problem Solving Foundations",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 119,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 149,
        "specialInstructions": "Day 6: study 119m + break 30m = 149m total.",
        "tasks": [
          {
            "id": "w1-d7-1",
            "label": "Math U4.9: Parallel and perpendicular lines (25 min)",
            "subject": "math",
            "code": "Math U4.9",
            "topic": "Parallel & perpendicular lines",
            "timeSlot": "6:30 PM - 6:55 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w1-d7-2",
            "label": "Math U4.10: Interpreting linear models (25 min)",
            "subject": "math",
            "code": "Math U4.10",
            "topic": "Linear models",
            "timeSlot": "6:55 PM - 7:20 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w1-d7-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "topic": "Real Break",
            "timeSlot": "7:20 PM - 7:35 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w1-d7-3",
            "label": "Math U4.11: Function notation & evaluation (25 min)",
            "subject": "math",
            "code": "Math U4.11",
            "topic": "Function notation",
            "timeSlot": "7:35 PM - 8:00 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w1-d7-4",
            "label": "R&W U6.3: Parallel structure in lists & comparisons (22 min)",
            "subject": "rw",
            "code": "R&W U6.3",
            "topic": "Parallel structure",
            "timeSlot": "8:00 PM - 8:22 PM",
            "durationMinutes": 22,
            "completed": false
          },
          {
            "id": "w1-d7-b2",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "topic": "Real Break",
            "timeSlot": "8:22 PM - 8:37 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w1-d7-5",
            "label": "R&W U7.1: Transitions - Contrast (22 min)",
            "subject": "rw",
            "code": "R&W U7.1",
            "topic": "Contrast transitions",
            "timeSlot": "8:37 PM - 8:59 PM",
            "durationMinutes": 22,
            "completed": false
          }
        ]
      }
    ]
  },
  {
    "id": "week-2",
    "title": "Week 2: Algebra Mastery & Early Diagnostic Baseline",
    "dateRange": "Sep 19 to Sep 25",
    "subtitle": "Sunday Early Diagnostic on Bluebook, quadratics factoring, and algebra medium completion.",
    "phase": "foundations",
    "days": [
      {
        "id": "2026-09-19",
        "dayNumber": 7,
        "dateStr": "2026-09-19",
        "dayOfWeek": "Sat",
        "formattedDate": "Sat Sep 19",
        "weekId": "week-2",
        "weekNumber": 2,
        "weekTitle": "Algebra Mastery & Early Diagnostic Baseline",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 124,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 154,
        "specialInstructions": "Day 7: study 124m + break 30m = 154m total.",
        "tasks": [
          {
            "id": "w2-d1-1",
            "label": "Math U4.12: Linear functions word problems (25 min)",
            "subject": "math",
            "code": "Math U4.12",
            "topic": "Linear function word problems",
            "timeSlot": "6:30 PM - 6:55 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w2-d1-2",
            "label": "Math U4.13: Linear algebra review & quiz (25 min)",
            "subject": "math",
            "code": "Math U4.13",
            "topic": "Linear algebra review",
            "timeSlot": "6:55 PM - 7:20 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w2-d1-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "topic": "Real Break",
            "timeSlot": "7:20 PM - 7:35 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w2-d1-3",
            "label": "Math U5.1: Quadratic equations - Factoring & zero-product (30 min)",
            "subject": "math",
            "code": "Math U5.1",
            "topic": "Quadratic factoring",
            "timeSlot": "7:35 PM - 8:05 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w2-d1-4",
            "label": "R&W U7.2: Transitions - Cause & effect (22 min)",
            "subject": "rw",
            "code": "R&W U7.2",
            "topic": "Cause & effect transitions",
            "timeSlot": "8:05 PM - 8:27 PM",
            "durationMinutes": 22,
            "completed": false
          },
          {
            "id": "w2-d1-b2",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "topic": "Real Break",
            "timeSlot": "8:27 PM - 8:42 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w2-d1-5",
            "label": "R&W U7.3: Transitions - Addition & illustration (22 min)",
            "subject": "rw",
            "code": "R&W U7.3",
            "topic": "Addition transitions",
            "timeSlot": "8:42 PM - 9:04 PM",
            "durationMinutes": 22,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-09-20",
        "dateStr": "2026-09-20",
        "dayOfWeek": "Sun",
        "formattedDate": "Sun Sep 20",
        "weekId": "week-2",
        "weekNumber": 2,
        "weekTitle": "Algebra Mastery & Early Diagnostic Baseline",
        "phase": "bluebook",
        "isBuffer": false,
        "isTestDay": true,
        "studyTimeMinutes": 144,
        "breakTimeMinutes": 10,
        "totalTimeMinutes": 154,
        "specialInstructions": "★ Sun Sep 20 -- EARLY DIAGNOSTIC: 8:00 AM - 10:24 AM Full Bluebook Practice Test #1 (baseline).",
        "tasks": [
          {
            "id": "w2-diag-1",
            "label": "Full Bluebook Practice Test #1 (baseline) (144 min)",
            "subject": "test",
            "code": "MOCK #1",
            "topic": "Full Baseline Bluebook Test",
            "timeSlot": "8:00 AM - 10:24 AM",
            "durationMinutes": 144,
            "completed": false
          },
          {
            "id": "w2-diag-2",
            "label": "Initial Test #1 Mistake Autopsy & Error Log Entry",
            "subject": "review",
            "topic": "Error Analysis",
            "completed": false
          }
        ]
      },
      {
        "id": "2026-09-21",
        "dayNumber": 8,
        "dateStr": "2026-09-21",
        "dayOfWeek": "Mon",
        "formattedDate": "Mon Sep 21",
        "weekId": "week-2",
        "weekNumber": 2,
        "weekTitle": "Algebra Mastery & Early Diagnostic Baseline",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 137,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 167,
        "specialInstructions": "Day 8: study 137m + break 30m = 167m total.",
        "tasks": [
          {
            "id": "w2-d2-1",
            "label": "Math U5.2: Quadratic formula & discriminant (30 min)",
            "subject": "math",
            "code": "Math U5.2",
            "topic": "Quadratic formula & discriminant",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w2-d2-2",
            "label": "Math U5.3: Vertex form & completing the square (30 min)",
            "subject": "math",
            "code": "Math U5.3",
            "topic": "Vertex form",
            "timeSlot": "7:00 PM - 7:30 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w2-d2-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "topic": "Real Break",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w2-d2-3",
            "label": "Math U5.4: Graphing quadratic functions (30 min)",
            "subject": "math",
            "code": "Math U5.4",
            "topic": "Graphing quadratics",
            "timeSlot": "7:45 PM - 8:15 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w2-d2-4",
            "label": "R&W U7.4: Transitions - Sequence & summary (22 min)",
            "subject": "rw",
            "code": "R&W U7.4",
            "topic": "Sequence transitions",
            "timeSlot": "8:15 PM - 8:37 PM",
            "durationMinutes": 22,
            "completed": false
          },
          {
            "id": "w2-d2-b2",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "topic": "Real Break",
            "timeSlot": "8:37 PM - 8:52 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w2-d2-5",
            "label": "R&W U8.1: Rhetorical synthesis - Goal-oriented notes (25 min)",
            "subject": "rw",
            "code": "R&W U8.1",
            "topic": "Rhetorical synthesis",
            "timeSlot": "8:52 PM - 9:17 PM",
            "durationMinutes": 25,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-09-22",
        "dayNumber": 9,
        "dateStr": "2026-09-22",
        "dayOfWeek": "Tue",
        "formattedDate": "Tue Sep 22",
        "weekId": "week-2",
        "weekNumber": 2,
        "weekTitle": "Algebra Mastery & Early Diagnostic Baseline",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 135,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 165,
        "specialInstructions": "Day 9: study 135m + break 30m = 165m total.",
        "tasks": [
          {
            "id": "w2-d3-1",
            "label": "Math U5.5: Interpreting quadratic models in context (30 min)",
            "subject": "math",
            "code": "Math U5.5",
            "topic": "Quadratic models",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w2-d3-2",
            "label": "Math U5.6: Quadratic systems & Desmos intersections (30 min)",
            "subject": "math",
            "code": "Math U5.6",
            "topic": "Quadratic systems & Desmos",
            "timeSlot": "7:00 PM - 7:30 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w2-d3-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "topic": "Real Break",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w2-d3-3",
            "label": "Math U6.1: Radicals and rational exponents (25 min)",
            "subject": "math",
            "code": "Math U6.1",
            "topic": "Radicals & exponents",
            "timeSlot": "7:45 PM - 8:10 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w2-d3-4",
            "label": "R&W U8.2: Rhetorical synthesis - Audience-based synthesis (25 min)",
            "subject": "rw",
            "code": "R&W U8.2",
            "topic": "Audience synthesis",
            "timeSlot": "8:10 PM - 8:35 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w2-d3-b2",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "topic": "Real Break",
            "timeSlot": "8:35 PM - 8:50 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w2-d3-5",
            "label": "R&W U8.3: Rhetorical synthesis - Differences & similarities (25 min)",
            "subject": "rw",
            "code": "R&W U8.3",
            "topic": "Comparative synthesis",
            "timeSlot": "8:50 PM - 9:15 PM",
            "durationMinutes": 25,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-09-23",
        "dayNumber": 10,
        "dateStr": "2026-09-23",
        "dayOfWeek": "Wed",
        "formattedDate": "Wed Sep 23",
        "weekId": "week-2",
        "weekNumber": 2,
        "weekTitle": "Algebra Mastery & Early Diagnostic Baseline",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 125,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 155,
        "specialInstructions": "Day 10: study 125m + break 30m = 155m total.",
        "tasks": [
          {
            "id": "w2-d4-1",
            "label": "Math U6.2: Operations with polynomials (25 min)",
            "subject": "math",
            "code": "Math U6.2",
            "topic": "Polynomial operations",
            "timeSlot": "6:30 PM - 6:55 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w2-d4-2",
            "label": "Math U6.3: Polynomial factors and graphs (25 min)",
            "subject": "math",
            "code": "Math U6.3",
            "topic": "Polynomial graphs",
            "timeSlot": "6:55 PM - 7:20 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w2-d4-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "topic": "Real Break",
            "timeSlot": "7:20 PM - 7:35 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w2-d4-3",
            "label": "Math U6.4: Nonlinear functions & graphs (25 min)",
            "subject": "math",
            "code": "Math U6.4",
            "topic": "Nonlinear functions",
            "timeSlot": "7:35 PM - 8:00 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w2-d4-4",
            "label": "R&W U8.4: Science passages - Hypothesis testing & controls (25 min)",
            "subject": "rw",
            "code": "R&W U8.4",
            "topic": "Science hypothesis testing",
            "timeSlot": "8:00 PM - 8:25 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w2-d4-b2",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "topic": "Real Break",
            "timeSlot": "8:25 PM - 8:40 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w2-d4-5",
            "label": "R&W U9.1: Science passages - Graph and data interpretation (25 min)",
            "subject": "rw",
            "code": "R&W U9.1",
            "topic": "Data interpretation",
            "timeSlot": "8:40 PM - 9:05 PM",
            "durationMinutes": 25,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-09-24",
        "dayNumber": 11,
        "dateStr": "2026-09-24",
        "dayOfWeek": "Thu",
        "formattedDate": "Thu Sep 24",
        "weekId": "week-2",
        "weekNumber": 2,
        "weekTitle": "Algebra Mastery & Early Diagnostic Baseline",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 125,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 155,
        "specialInstructions": "Day 11: study 125m + break 30m = 155m total.",
        "tasks": [
          {
            "id": "w2-d5-1",
            "label": "Math U6.5: Exponential functions & growth/decay (25 min)",
            "subject": "math",
            "code": "Math U6.5",
            "topic": "Exponential growth/decay",
            "timeSlot": "6:30 PM - 6:55 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w2-d5-2",
            "label": "Math U6.6: Exponential models in context (25 min)",
            "subject": "math",
            "code": "Math U6.6",
            "topic": "Exponential models",
            "timeSlot": "6:55 PM - 7:20 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w2-d5-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "topic": "Real Break",
            "timeSlot": "7:20 PM - 7:35 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w2-d5-3",
            "label": "Math U6.7: Equivalent exponential expressions (25 min)",
            "subject": "math",
            "code": "Math U6.7",
            "topic": "Equivalent exponential forms",
            "timeSlot": "7:35 PM - 8:00 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w2-d5-4",
            "label": "R&W U9.2: Social science - Argument structure & counter-claims (25 min)",
            "subject": "rw",
            "code": "R&W U9.2",
            "topic": "Social science arguments",
            "timeSlot": "8:00 PM - 8:25 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w2-d5-b2",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "topic": "Real Break",
            "timeSlot": "8:25 PM - 8:40 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w2-d5-5",
            "label": "R&W U9.3: Literature & historical speeches - Tone (25 min)",
            "subject": "rw",
            "code": "R&W U9.3",
            "topic": "Literature tone & style",
            "timeSlot": "8:40 PM - 9:05 PM",
            "durationMinutes": 25,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-09-25",
        "dayNumber": 12,
        "dateStr": "2026-09-25",
        "dayOfWeek": "Fri",
        "formattedDate": "Fri Sep 25",
        "weekId": "week-2",
        "weekNumber": 2,
        "weekTitle": "Algebra Mastery & Early Diagnostic Baseline",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 125,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 155,
        "specialInstructions": "Day 12: study 125m + break 30m = 155m total.",
        "tasks": [
          {
            "id": "w2-d6-1",
            "label": "Math U6.8: Nonlinear equation word problems (25 min)",
            "subject": "math",
            "code": "Math U6.8",
            "topic": "Nonlinear word problems",
            "timeSlot": "6:30 PM - 6:55 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w2-d6-2",
            "label": "Math U7.1: Ratios, rates, and proportions (25 min)",
            "subject": "math",
            "code": "Math U7.1",
            "topic": "Ratios & rates",
            "timeSlot": "6:55 PM - 7:20 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w2-d6-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "topic": "Real Break",
            "timeSlot": "7:20 PM - 7:35 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w2-d6-3",
            "label": "Math U7.2: Unit rates & dimensional analysis (25 min)",
            "subject": "math",
            "code": "Math U7.2",
            "topic": "Dimensional analysis",
            "timeSlot": "7:35 PM - 8:00 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w2-d6-4",
            "label": "R&W U10.1: Punctuation - Semicolons vs colons vs dashes (25 min)",
            "subject": "rw",
            "code": "R&W U10.1",
            "topic": "Punctuation mastery",
            "timeSlot": "8:00 PM - 8:25 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w2-d6-b2",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "topic": "Real Break",
            "timeSlot": "8:25 PM - 8:40 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w2-d6-5",
            "label": "R&W U10.2: Punctuation - Apostrophes possessives vs contractions (25 min)",
            "subject": "rw",
            "code": "R&W U10.2",
            "topic": "Apostrophes",
            "timeSlot": "8:40 PM - 9:05 PM",
            "durationMinutes": 25,
            "completed": false
          }
        ]
      }
    ]
  },
  {
    "id": "week-3",
    "title": "Week 3: Advanced Problem Solving & Rhetoric Mastery",
    "dateRange": "Sep 26 to Oct 2",
    "subtitle": "Exponential models, geometry essentials, punctuation masterclass, and rhetorical synthesis.",
    "phase": "foundations",
    "days": [
      {
        "id": "2026-09-26",
        "dayNumber": 13,
        "dateStr": "2026-09-26",
        "dayOfWeek": "Sat",
        "formattedDate": "Sat Sep 26",
        "weekId": "week-3",
        "weekNumber": 3,
        "weekTitle": "Advanced Problem Solving & Rhetoric Mastery",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 125,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 155,
        "specialInstructions": "Day 13: study 125m + break 30m = 155m total.",
        "tasks": [
          {
            "id": "w3-d1-1",
            "label": "Math U7.3: Inferences from sample data (25 min)",
            "subject": "math",
            "code": "Math U7.3",
            "topic": "Statistical inferences",
            "timeSlot": "6:30 PM - 6:55 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w3-d1-2",
            "label": "Math U7.4: Margin of error & confidence intervals (25 min)",
            "subject": "math",
            "code": "Math U7.4",
            "topic": "Margin of error",
            "timeSlot": "6:55 PM - 7:20 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w3-d1-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "topic": "Real Break",
            "timeSlot": "7:20 PM - 7:35 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w3-d1-3",
            "label": "Math U7.5: Evaluating statistical claims & study design (25 min)",
            "subject": "math",
            "code": "Math U7.5",
            "topic": "Study design",
            "timeSlot": "7:35 PM - 8:00 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w3-d1-4",
            "label": "R&W U10.3: Comma splices & run-on sentences elimination (25 min)",
            "subject": "rw",
            "code": "R&W U10.3",
            "topic": "Comma splices",
            "timeSlot": "8:00 PM - 8:25 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w3-d1-b2",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "topic": "Real Break",
            "timeSlot": "8:25 PM - 8:40 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w3-d1-5",
            "label": "R&W U10.4: Restrictive vs non-restrictive clauses (Which vs That) (25 min)",
            "subject": "rw",
            "code": "R&W U10.4",
            "topic": "Relative clauses",
            "timeSlot": "8:40 PM - 9:05 PM",
            "durationMinutes": 25,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-09-27",
        "dateStr": "2026-09-27",
        "dayOfWeek": "Sun",
        "formattedDate": "Sun Sep 27",
        "weekId": "week-3",
        "weekNumber": 3,
        "weekTitle": "Advanced Problem Solving & Rhetoric Mastery",
        "phase": "foundations",
        "isBuffer": true,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "specialInstructions": "Sun Sep 27 -- REST DAY. Zero assigned lessons. Full cognitive reset and recovery.",
        "tasks": [
          {
            "id": "w3-d2-1",
            "label": "Buffer Sunday: Zero assigned lessons (Rest & Recovery)",
            "subject": "buffer",
            "topic": "Cognitive Reset",
            "completed": false
          }
        ]
      },
      {
        "id": "2026-09-28",
        "dayNumber": 14,
        "dateStr": "2026-09-28",
        "dayOfWeek": "Mon",
        "formattedDate": "Mon Sep 28",
        "weekId": "week-3",
        "weekNumber": 3,
        "weekTitle": "Advanced Problem Solving & Rhetoric Mastery",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 120,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 135,
        "specialInstructions": "Day 14: study 120m + break 15m = 135m total.",
        "tasks": [
          {
            "id": "w3-d3-1",
            "label": "Math U7.6: Area and volume formulas (25 min)",
            "subject": "math",
            "code": "Math U7.6",
            "topic": "Area and volume formulas",
            "timeSlot": "6:30 PM - 6:55 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w3-d3-2",
            "label": "Math U7.7: Congruence and similarity (25 min)",
            "subject": "math",
            "code": "Math U7.7",
            "topic": "Congruence & similarity",
            "timeSlot": "6:55 PM - 7:20 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w3-d3-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "topic": "Real Break",
            "timeSlot": "7:20 PM - 7:35 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w3-d3-3",
            "label": "R&W U11.1: Tricky pronoun references in complex sentences (35 min)",
            "subject": "rw",
            "code": "R&W U11.1",
            "topic": "Complex pronoun references",
            "timeSlot": "7:35 PM - 8:10 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "w3-d3-4",
            "label": "R&W U11.2: Idiomatic preposition usage on Digital SAT (35 min)",
            "subject": "rw",
            "code": "R&W U11.2",
            "topic": "Idiomatic prepositions",
            "timeSlot": "8:10 PM - 8:45 PM",
            "durationMinutes": 35,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-09-29",
        "dayNumber": 15,
        "dateStr": "2026-09-29",
        "dayOfWeek": "Tue",
        "formattedDate": "Tue Sep 29",
        "weekId": "week-3",
        "weekNumber": 3,
        "weekTitle": "Advanced Problem Solving & Rhetoric Mastery",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 120,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 135,
        "specialInstructions": "Day 15: study 120m + break 15m = 135m total.",
        "tasks": [
          {
            "id": "w3-d4-1",
            "label": "Math U7.8: Right triangle trigonometry - SOH CAH TOA (25 min)",
            "subject": "math",
            "code": "Math U7.8",
            "topic": "Right triangle trigonometry",
            "timeSlot": "6:30 PM - 6:55 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w3-d4-2",
            "label": "Math U7.9: Special right triangles 30-60-90 & 45-45-90 (25 min)",
            "subject": "math",
            "code": "Math U7.9",
            "topic": "Special right triangles",
            "timeSlot": "6:55 PM - 7:20 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w3-d4-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "topic": "Real Break",
            "timeSlot": "7:20 PM - 7:35 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w3-d4-3",
            "label": "R&W U11.3: Illogical comparisons - People vs things (35 min)",
            "subject": "rw",
            "code": "R&W U11.3",
            "topic": "Illogical comparisons",
            "timeSlot": "7:35 PM - 8:10 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "w3-d4-4",
            "label": "R&W U11.4: Dangling participles in introductory phrases (35 min)",
            "subject": "rw",
            "code": "R&W U11.4",
            "topic": "Dangling participles",
            "timeSlot": "8:10 PM - 8:45 PM",
            "durationMinutes": 35,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-09-30",
        "dayNumber": 16,
        "dateStr": "2026-09-30",
        "dayOfWeek": "Wed",
        "formattedDate": "Wed Sep 30",
        "weekId": "week-3",
        "weekNumber": 3,
        "weekTitle": "Advanced Problem Solving & Rhetoric Mastery",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 140,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 170,
        "specialInstructions": "Day 16: study 140m + break 30m = 170m total.",
        "tasks": [
          {
            "id": "w3-d5-1",
            "label": "Math U7.10: Angles, arc lengths, & sector area (25 min)",
            "subject": "math",
            "code": "Math U7.10",
            "topic": "Angles & sectors",
            "timeSlot": "6:30 PM - 6:55 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w3-d5-2",
            "label": "Math U8.1: Circle equations & coordinate geometry (30 min)",
            "subject": "math",
            "code": "Math U8.1",
            "topic": "Circle equations",
            "timeSlot": "6:55 PM - 7:25 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w3-d5-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "topic": "Real Break",
            "timeSlot": "7:25 PM - 7:40 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w3-d5-3",
            "label": "R&W U11.5: Non-essential parenthetical insertions (35 min)",
            "subject": "rw",
            "code": "R&W U11.5",
            "topic": "Parenthetical insertions",
            "timeSlot": "7:40 PM - 8:15 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "w3-d5-4",
            "label": "R&W U11.6: Tricky subject-verb inversion (35 min)",
            "subject": "rw",
            "code": "R&W U11.6",
            "topic": "Subject-verb inversion",
            "timeSlot": "8:15 PM - 8:50 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "w3-d5-b2",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "topic": "Real Break",
            "timeSlot": "8:50 PM - 9:05 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w3-d5-5",
            "label": "R&W U12.1: Speed reading & skim timing (15 min)",
            "subject": "rw",
            "code": "R&W U12.1",
            "topic": "Speed skim timing",
            "timeSlot": "9:05 PM - 9:20 PM",
            "durationMinutes": 15,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-01",
        "dayNumber": 17,
        "dateStr": "2026-10-01",
        "dayOfWeek": "Thu",
        "formattedDate": "Thu Oct 1",
        "weekId": "week-3",
        "weekNumber": 3,
        "weekTitle": "Advanced Problem Solving & Rhetoric Mastery",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 135,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 165,
        "specialInstructions": "Day 17: study 135m + break 30m = 165m total.",
        "tasks": [
          {
            "id": "w3-d6-1",
            "label": "Math U8.2: Complex numbers & imaginary unit i (30 min)",
            "subject": "math",
            "code": "Math U8.2",
            "topic": "Complex numbers",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w3-d6-2",
            "label": "Math U8.3: Rational equations & extraneous solutions (30 min)",
            "subject": "math",
            "code": "Math U8.3",
            "topic": "Rational equations",
            "timeSlot": "7:00 PM - 7:30 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w3-d6-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "topic": "Real Break",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w3-d6-3",
            "label": "Math U8.4: Systems of nonlinear equations (30 min)",
            "subject": "math",
            "code": "Math U8.4",
            "topic": "Nonlinear systems",
            "timeSlot": "7:45 PM - 8:15 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w3-d6-4",
            "label": "R&W U12.2: Elimination strategies on Module 2 hard tier (15 min)",
            "subject": "rw",
            "code": "R&W U12.2",
            "topic": "Module 2 elimination",
            "timeSlot": "8:15 PM - 8:30 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w3-d6-b2",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "topic": "Real Break",
            "timeSlot": "8:30 PM - 8:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w3-d6-5",
            "label": "R&W U12.3: Trap answer diagnosis (15 min)",
            "subject": "rw",
            "code": "R&W U12.3",
            "topic": "Trap answer diagnosis",
            "timeSlot": "8:45 PM - 9:00 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w3-d6-6",
            "label": "R&W U12.4: Grammar rapid-fire drill (15 min)",
            "subject": "rw",
            "code": "R&W U12.4",
            "topic": "Grammar rapid-fire",
            "timeSlot": "9:00 PM - 9:15 PM",
            "durationMinutes": 15,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-02",
        "dayNumber": 18,
        "dateStr": "2026-10-02",
        "dayOfWeek": "Fri",
        "formattedDate": "Fri Oct 2",
        "weekId": "week-3",
        "weekNumber": 3,
        "weekTitle": "Advanced Problem Solving & Rhetoric Mastery",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 135,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 165,
        "specialInstructions": "Day 18: study 135m + break 30m = 165m total.",
        "tasks": [
          {
            "id": "w3-d7-1",
            "label": "Math U8.5: Isolating quantities & manipulating formulas (30 min)",
            "subject": "math",
            "code": "Math U8.5",
            "topic": "Manipulating formulas",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w3-d7-2",
            "label": "Math U8.6: Absolute value equations & inequalities (30 min)",
            "subject": "math",
            "code": "Math U8.6",
            "topic": "Absolute value equations",
            "timeSlot": "7:00 PM - 7:30 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w3-d7-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "topic": "Real Break",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w3-d7-3",
            "label": "Math U8.7: Advanced function transformations (30 min)",
            "subject": "math",
            "code": "Math U8.7",
            "topic": "Function transformations",
            "timeSlot": "7:45 PM - 8:15 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w3-d7-4",
            "label": "R&W U12.5: Rhetorical synthesis 30-second drills (15 min)",
            "subject": "rw",
            "code": "R&W U12.5",
            "topic": "30s synthesis drills",
            "timeSlot": "8:15 PM - 8:30 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w3-d7-b2",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "topic": "Real Break",
            "timeSlot": "8:30 PM - 8:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w3-d7-5",
            "label": "R&W U12.6: Main idea vs supporting detail trap detection (15 min)",
            "subject": "rw",
            "code": "R&W U12.6",
            "topic": "Trap detection",
            "timeSlot": "8:45 PM - 9:00 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w3-d7-6",
            "label": "R&W U12.7: Digital SAT pacing drill - 71s per question (15 min)",
            "subject": "rw",
            "code": "R&W U12.7",
            "topic": "Pacing drill",
            "timeSlot": "9:00 PM - 9:15 PM",
            "durationMinutes": 15,
            "completed": false
          }
        ]
      }
    ]
  },
  {
    "id": "week-4",
    "title": "Week 4: Advanced Math Synthesis & All R&W Complete",
    "dateRange": "Oct 3 to Oct 9",
    "subtitle": "Complete all 43 Reading & Writing skills on Oct 3, followed by intensive high-tier Math drills.",
    "phase": "foundations",
    "days": [
      {
        "id": "2026-10-03",
        "dayNumber": 19,
        "dateStr": "2026-10-03",
        "dayOfWeek": "Sat",
        "formattedDate": "Sat Oct 3",
        "weekId": "week-4",
        "weekNumber": 4,
        "weekTitle": "Advanced Math Synthesis & All R&W Complete",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 135,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 165,
        "specialInstructions": "Day 19: study 135m + break 30m = 165m total. ✅ ALL R&W COMPLETE TODAY!",
        "tasks": [
          {
            "id": "w4-d1-1",
            "label": "Math U8.8: Graphs of polynomial & rational functions (30 min)",
            "subject": "math",
            "code": "Math U8.8",
            "topic": "Polynomial graphs",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w4-d1-2",
            "label": "Math U8.9: Minimum and maximum values (30 min)",
            "subject": "math",
            "code": "Math U8.9",
            "topic": "Min and max values",
            "timeSlot": "7:00 PM - 7:30 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w4-d1-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "topic": "Real Break",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w4-d1-3",
            "label": "Math U8.10: Desmos table method for unknown constants (30 min)",
            "subject": "math",
            "code": "Math U8.10",
            "topic": "Desmos table method",
            "timeSlot": "7:45 PM - 8:15 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w4-d1-4",
            "label": "Math U8.11: Geometry theorem synthesis (30 min)",
            "subject": "math",
            "code": "Math U8.11",
            "topic": "Geometry theorem synthesis",
            "timeSlot": "8:15 PM - 8:45 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w4-d1-b2",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "topic": "Real Break",
            "timeSlot": "8:45 PM - 9:00 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w4-d1-5",
            "label": "R&W U12.8: READING & WRITING COMPLETE ✅ (15 min)",
            "subject": "rw",
            "code": "R&W U12.8",
            "topic": "All R&W Finished",
            "timeSlot": "9:00 PM - 9:15 PM",
            "durationMinutes": 15,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-04",
        "dateStr": "2026-10-04",
        "dayOfWeek": "Sun",
        "formattedDate": "Sun Oct 4",
        "weekId": "week-4",
        "weekNumber": 4,
        "weekTitle": "Advanced Math Synthesis & All R&W Complete",
        "phase": "foundations",
        "isBuffer": true,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "specialInstructions": "Sun Oct 4 -- REST DAY. Celebrate all 43 R&W skills mastered!",
        "tasks": [
          {
            "id": "w4-d2-1",
            "label": "Buffer Sunday: Zero assigned lessons (Rest & Recharge)",
            "subject": "buffer",
            "topic": "Recovery",
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-05",
        "dayNumber": 20,
        "dateStr": "2026-10-05",
        "dayOfWeek": "Mon",
        "formattedDate": "Mon Oct 5",
        "weekId": "week-4",
        "weekNumber": 4,
        "weekTitle": "Advanced Math Synthesis & All R&W Complete",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 130,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 145,
        "specialInstructions": "Day 20: study 130m + break 15m = 145m total.",
        "tasks": [
          {
            "id": "w4-d3-1",
            "label": "Math U8.12: Trigonometric identities & radians (30 min)",
            "subject": "math",
            "code": "Math U8.12",
            "topic": "Trigonometric identities",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w4-d3-2",
            "label": "Math U8.13: Advanced statistics review (30 min)",
            "subject": "math",
            "code": "Math U8.13",
            "topic": "Advanced statistics",
            "timeSlot": "7:00 PM - 7:30 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w4-d3-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "topic": "Real Break",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w4-d3-3",
            "label": "Math U9.1: Hard-tier linear & quadratic synthesis (35 min)",
            "subject": "math",
            "code": "Math U9.1",
            "topic": "Linear & quadratic synthesis",
            "timeSlot": "7:45 PM - 8:20 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "w4-d3-4",
            "label": "Math U9.2: Multi-step algebraic problem solving (35 min)",
            "subject": "math",
            "code": "Math U9.2",
            "topic": "Multi-step algebra",
            "timeSlot": "8:20 PM - 8:55 PM",
            "durationMinutes": 35,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-06",
        "dayNumber": 21,
        "dateStr": "2026-10-06",
        "dayOfWeek": "Tue",
        "formattedDate": "Tue Oct 6",
        "weekId": "week-4",
        "weekNumber": 4,
        "weekTitle": "Advanced Math Synthesis & All R&W Complete",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 140,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 155,
        "specialInstructions": "Day 21: study 140m + break 15m = 155m total.",
        "tasks": [
          {
            "id": "w4-d4-1",
            "label": "Math U9.3: Advanced coordinate geometry & slopes (35 min)",
            "subject": "math",
            "code": "Math U9.3",
            "topic": "Coordinate geometry",
            "timeSlot": "6:30 PM - 7:05 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "w4-d4-2",
            "label": "Math U9.4: Complex exponential modeling (35 min)",
            "subject": "math",
            "code": "Math U9.4",
            "topic": "Exponential modeling",
            "timeSlot": "7:05 PM - 7:40 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "w4-d4-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "topic": "Real Break",
            "timeSlot": "7:40 PM - 7:55 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w4-d4-3",
            "label": "Math U9.5: Hard-tier data analysis & margin of error (35 min)",
            "subject": "math",
            "code": "Math U9.5",
            "topic": "Data analysis hard-tier",
            "timeSlot": "7:55 PM - 8:30 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "w4-d4-4",
            "label": "Math U9.6: Tricky geometry & composite solids (35 min)",
            "subject": "math",
            "code": "Math U9.6",
            "topic": "Composite solids geometry",
            "timeSlot": "8:30 PM - 9:05 PM",
            "durationMinutes": 35,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-07",
        "dayNumber": 22,
        "dateStr": "2026-10-07",
        "dayOfWeek": "Wed",
        "formattedDate": "Wed Oct 7",
        "weekId": "week-4",
        "weekNumber": 4,
        "weekTitle": "Advanced Math Synthesis & All R&W Complete",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 120,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 135,
        "specialInstructions": "Day 22: study 120m + break 15m = 135m total.",
        "tasks": [
          {
            "id": "w4-d5-1",
            "label": "Math U10.1: Desmos regression hacks (30 min)",
            "subject": "math",
            "code": "Math U10.1",
            "topic": "Desmos regression",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w4-d5-2",
            "label": "Math U10.2: Desmos system solving shortcuts (30 min)",
            "subject": "math",
            "code": "Math U10.2",
            "topic": "Desmos systems",
            "timeSlot": "7:00 PM - 7:30 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w4-d5-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "topic": "Real Break",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w4-d5-3",
            "label": "Math U10.3: Rapid factoring & mental math (30 min)",
            "subject": "math",
            "code": "Math U10.3",
            "topic": "Rapid factoring",
            "timeSlot": "7:45 PM - 8:15 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w4-d5-4",
            "label": "Math U10.4: Grid-in strategy & decimal rules (30 min)",
            "subject": "math",
            "code": "Math U10.4",
            "topic": "Grid-in strategy",
            "timeSlot": "8:15 PM - 8:45 PM",
            "durationMinutes": 30,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-08",
        "dayNumber": 23,
        "dateStr": "2026-10-08",
        "dayOfWeek": "Thu",
        "formattedDate": "Thu Oct 8",
        "weekId": "week-4",
        "weekNumber": 4,
        "weekTitle": "Advanced Math Synthesis & All R&W Complete",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 120,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 135,
        "specialInstructions": "Day 23: study 120m + break 15m = 135m total.",
        "tasks": [
          {
            "id": "w4-d6-1",
            "label": "Math U10.5: Function composition & inverses (30 min)",
            "subject": "math",
            "code": "Math U10.5",
            "topic": "Function composition",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w4-d6-2",
            "label": "Math U10.6: Hard-tier quadratics & discriminants (30 min)",
            "subject": "math",
            "code": "Math U10.6",
            "topic": "Hard-tier quadratics",
            "timeSlot": "7:00 PM - 7:30 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w4-d6-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "topic": "Real Break",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w4-d6-3",
            "label": "Math U10.7: Polynomial long division & remainder theorem (30 min)",
            "subject": "math",
            "code": "Math U10.7",
            "topic": "Remainder theorem",
            "timeSlot": "7:45 PM - 8:15 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w4-d6-4",
            "label": "Math U10.8: Circle theorems & inscribed angles (30 min)",
            "subject": "math",
            "code": "Math U10.8",
            "topic": "Circle theorems",
            "timeSlot": "8:15 PM - 8:45 PM",
            "durationMinutes": 30,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-09",
        "dayNumber": 24,
        "dateStr": "2026-10-09",
        "dayOfWeek": "Fri",
        "formattedDate": "Fri Oct 9",
        "weekId": "week-4",
        "weekNumber": 4,
        "weekTitle": "Advanced Math Synthesis & All R&W Complete",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 120,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 135,
        "specialInstructions": "Day 24: study 120m + break 15m = 135m total.",
        "tasks": [
          {
            "id": "w4-d7-1",
            "label": "Math U11.1: Volume & surface area word problems (30 min)",
            "subject": "math",
            "code": "Math U11.1",
            "topic": "Volume & surface area",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w4-d7-2",
            "label": "Math U11.2: Arc radians & unit circle basics (30 min)",
            "subject": "math",
            "code": "Math U11.2",
            "topic": "Arc radians & unit circle",
            "timeSlot": "7:00 PM - 7:30 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w4-d7-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "topic": "Real Break",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w4-d7-3",
            "label": "Math U11.3: Higher-order polynomial roots (30 min)",
            "subject": "math",
            "code": "Math U11.3",
            "topic": "Polynomial roots",
            "timeSlot": "7:45 PM - 8:15 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w4-d7-4",
            "label": "Math U11.4: Rational function asymptotes (30 min)",
            "subject": "math",
            "code": "Math U11.4",
            "topic": "Rational asymptotes",
            "timeSlot": "8:15 PM - 8:45 PM",
            "durationMinutes": 30,
            "completed": false
          }
        ]
      }
    ]
  },
  {
    "id": "week-5",
    "title": "Week 5: Hard Tier Techniques & High-Difficulty Drills",
    "dateRange": "Oct 10 to Oct 16",
    "subtitle": "Advanced geometry, Desmos regression tricks, and hard-tier Module 2 question synthesis.",
    "phase": "foundations",
    "days": [
      {
        "id": "2026-10-10",
        "dayNumber": 25,
        "dateStr": "2026-10-10",
        "dayOfWeek": "Sat",
        "formattedDate": "Sat Oct 10",
        "weekId": "week-5",
        "weekNumber": 5,
        "weekTitle": "Hard Tier Techniques & High-Difficulty Drills",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 120,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 135,
        "specialInstructions": "Day 25: study 120m + break 15m = 135m total.",
        "tasks": [
          {
            "id": "w5-d1-1",
            "label": "Math U11.5: Advanced percent change & multipliers (30 min)",
            "subject": "math",
            "code": "Math U11.5",
            "topic": "Advanced percent change",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w5-d1-2",
            "label": "Math U11.6: Two-way table probability traps (30 min)",
            "subject": "math",
            "code": "Math U11.6",
            "topic": "Two-way table traps",
            "timeSlot": "7:00 PM - 7:30 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w5-d1-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "topic": "Real Break",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w5-d1-3",
            "label": "Math U11.7: Standard deviation & z-score concepts (30 min)",
            "subject": "math",
            "code": "Math U11.7",
            "topic": "Standard deviation",
            "timeSlot": "7:45 PM - 8:15 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w5-d1-4",
            "label": "Math U11.8: Shaded region & geometric probability (30 min)",
            "subject": "math",
            "code": "Math U11.8",
            "topic": "Geometric probability",
            "timeSlot": "8:15 PM - 8:45 PM",
            "durationMinutes": 30,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-11",
        "dateStr": "2026-10-11",
        "dayOfWeek": "Sun",
        "formattedDate": "Sun Oct 11",
        "weekId": "week-5",
        "weekNumber": 5,
        "weekTitle": "Hard Tier Techniques & High-Difficulty Drills",
        "phase": "foundations",
        "isBuffer": true,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "specialInstructions": "Sun Oct 11 -- REST DAY. Zero assigned lessons. Relax and recharge.",
        "tasks": [
          {
            "id": "w5-d2-1",
            "label": "Buffer Sunday: Zero assigned lessons (Rest & Recharge)",
            "subject": "buffer",
            "topic": "Weekly Reset",
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-12",
        "dayNumber": 26,
        "dateStr": "2026-10-12",
        "dayOfWeek": "Mon",
        "formattedDate": "Mon Oct 12",
        "weekId": "week-5",
        "weekNumber": 5,
        "weekTitle": "Hard Tier Techniques & High-Difficulty Drills",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 130,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 145,
        "specialInstructions": "Day 26: study 130m + break 15m = 145m total.",
        "tasks": [
          {
            "id": "w5-d3-1",
            "label": "Math U11.9: Trigonometry in 3D figures (30 min)",
            "subject": "math",
            "code": "Math U11.9",
            "topic": "3D Trigonometry",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w5-d3-2",
            "label": "Math U11.10: Advanced Geometry mastery check (30 min)",
            "subject": "math",
            "code": "Math U11.10",
            "topic": "Geometry mastery check",
            "timeSlot": "7:00 PM - 7:30 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w5-d3-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "topic": "Real Break",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w5-d3-3",
            "label": "Math U12.1: Desmos slider tricks for unknown constants (35 min)",
            "subject": "math",
            "code": "Math U12.1",
            "topic": "Desmos sliders",
            "timeSlot": "7:45 PM - 8:20 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "w5-d3-4",
            "label": "Math U12.2: Desmos regression for unknown quadratics (35 min)",
            "subject": "math",
            "code": "Math U12.2",
            "topic": "Desmos regression",
            "timeSlot": "8:20 PM - 8:55 PM",
            "durationMinutes": 35,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-13",
        "dayNumber": 27,
        "dateStr": "2026-10-13",
        "dayOfWeek": "Tue",
        "formattedDate": "Tue Oct 13",
        "weekId": "week-5",
        "weekNumber": 5,
        "weekTitle": "Hard Tier Techniques & High-Difficulty Drills",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 140,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 155,
        "specialInstructions": "Day 27: study 140m + break 15m = 155m total.",
        "tasks": [
          {
            "id": "w5-d4-1",
            "label": "Math U12.3: Quick vertex finding -b/2a vs Desmos (35 min)",
            "subject": "math",
            "code": "Math U12.3",
            "topic": "Vertex tricks",
            "timeSlot": "6:30 PM - 7:05 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "w5-d4-2",
            "label": "Math U12.4: Tricky percent vs percentage point traps (35 min)",
            "subject": "math",
            "code": "Math U12.4",
            "topic": "Percentage traps",
            "timeSlot": "7:05 PM - 7:40 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "w5-d4-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "topic": "Real Break",
            "timeSlot": "7:40 PM - 7:55 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w5-d4-3",
            "label": "Math U12.5: Weighted average & mixture problems (35 min)",
            "subject": "math",
            "code": "Math U12.5",
            "topic": "Weighted averages",
            "timeSlot": "7:55 PM - 8:30 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "w5-d4-4",
            "label": "Math U12.6: Speed elimination on multi-step word problems (35 min)",
            "subject": "math",
            "code": "Math U12.6",
            "topic": "Speed elimination",
            "timeSlot": "8:30 PM - 9:05 PM",
            "durationMinutes": 35,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-14",
        "dayNumber": 28,
        "dateStr": "2026-10-14",
        "dayOfWeek": "Wed",
        "formattedDate": "Wed Oct 14",
        "weekId": "week-5",
        "weekNumber": 5,
        "weekTitle": "Hard Tier Techniques & High-Difficulty Drills",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 140,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 155,
        "specialInstructions": "Day 28: study 140m + break 15m = 155m total.",
        "tasks": [
          {
            "id": "w5-d5-1",
            "label": "Math U12.7: Rapid factorization of large coefficients (35 min)",
            "subject": "math",
            "code": "Math U12.7",
            "topic": "Rapid factorization",
            "timeSlot": "6:30 PM - 7:05 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "w5-d5-2",
            "label": "Math U12.8: Circle equations with hidden variables (35 min)",
            "subject": "math",
            "code": "Math U12.8",
            "topic": "Hidden circle variables",
            "timeSlot": "7:05 PM - 7:40 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "w5-d5-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "topic": "Real Break",
            "timeSlot": "7:40 PM - 7:55 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w5-d5-3",
            "label": "Math U12.9: System of 3 variables / elimination hacks (35 min)",
            "subject": "math",
            "code": "Math U12.9",
            "topic": "3-variable systems",
            "timeSlot": "7:55 PM - 8:30 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "w5-d5-4",
            "label": "Math U12.10: Function transformations with horizontal scale (35 min)",
            "subject": "math",
            "code": "Math U12.10",
            "topic": "Horizontal scale transforms",
            "timeSlot": "8:30 PM - 9:05 PM",
            "durationMinutes": 35,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-15",
        "dayNumber": 29,
        "dateStr": "2026-10-15",
        "dayOfWeek": "Thu",
        "formattedDate": "Thu Oct 15",
        "weekId": "week-5",
        "weekNumber": 5,
        "weekTitle": "Hard Tier Techniques & High-Difficulty Drills",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 105,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 120,
        "specialInstructions": "Day 29: study 105m + break 15m = 120m total.",
        "tasks": [
          {
            "id": "w5-d6-1",
            "label": "Math U12.11: Advanced exponent manipulation (35 min)",
            "subject": "math",
            "code": "Math U12.11",
            "topic": "Exponent manipulation",
            "timeSlot": "6:30 PM - 7:05 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "w5-d6-2",
            "label": "Math U12.12: Negative exponent & root combination drills (35 min)",
            "subject": "math",
            "code": "Math U12.12",
            "topic": "Roots & exponents",
            "timeSlot": "7:05 PM - 7:40 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "w5-d6-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "topic": "Real Break",
            "timeSlot": "7:40 PM - 7:55 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w5-d6-3",
            "label": "Math U12.13: Student-produced response (Grid-in) accuracy (35 min)",
            "subject": "math",
            "code": "Math U12.13",
            "topic": "Grid-in accuracy",
            "timeSlot": "7:55 PM - 8:30 PM",
            "durationMinutes": 35,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-16",
        "dayNumber": 30,
        "dateStr": "2026-10-16",
        "dayOfWeek": "Fri",
        "formattedDate": "Fri Oct 16",
        "weekId": "week-5",
        "weekNumber": 5,
        "weekTitle": "Hard Tier Techniques & High-Difficulty Drills",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 120,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 135,
        "specialInstructions": "Day 30: study 120m + break 15m = 135m total.",
        "tasks": [
          {
            "id": "w5-d7-1",
            "label": "Math U13.1: Module 2 Hard Tier trap recognition (40 min)",
            "subject": "math",
            "code": "Math U13.1",
            "topic": "Trap recognition",
            "timeSlot": "6:30 PM - 7:10 PM",
            "durationMinutes": 40,
            "completed": false
          },
          {
            "id": "w5-d7-2",
            "label": "Math U13.2: 60-Second pacing check on difficult questions (40 min)",
            "subject": "math",
            "code": "Math U13.2",
            "topic": "60s pacing checks",
            "timeSlot": "7:10 PM - 7:50 PM",
            "durationMinutes": 40,
            "completed": false
          },
          {
            "id": "w5-d7-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "topic": "Real Break",
            "timeSlot": "7:50 PM - 8:05 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w5-d7-3",
            "label": "Math U13.3: Backsolving with answer choices - PITA (40 min)",
            "subject": "math",
            "code": "Math U13.3",
            "topic": "Backsolving PITA",
            "timeSlot": "8:05 PM - 8:45 PM",
            "durationMinutes": 40,
            "completed": false
          }
        ]
      }
    ]
  },
  {
    "id": "week-6",
    "title": "Week 6: Content Mastery Complete",
    "dateRange": "Oct 17 to Oct 18",
    "subtitle": "Complete all 102 Math skills on Oct 17. Celebrate 100% Phase 1 syllabus coverage!",
    "phase": "foundations",
    "days": [
      {
        "id": "2026-10-17",
        "dayNumber": 31,
        "dateStr": "2026-10-17",
        "dayOfWeek": "Sat",
        "formattedDate": "Sat Oct 17",
        "weekId": "week-6",
        "weekNumber": 6,
        "weekTitle": "Content Mastery Complete",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 120,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 135,
        "specialInstructions": "Day 31: study 120m + break 15m = 135m total. ✅ ALL MATH COMPLETE TODAY! 🎉",
        "tasks": [
          {
            "id": "w6-d1-1",
            "label": "Math U13.4: Mental math vs calculator decision tree (40 min)",
            "subject": "math",
            "code": "Math U13.4",
            "topic": "Mental math vs Desmos",
            "timeSlot": "6:30 PM - 7:10 PM",
            "durationMinutes": 40,
            "completed": false
          },
          {
            "id": "w6-d1-2",
            "label": "Math U13.5: Formula sheet speed recall (40 min)",
            "subject": "math",
            "code": "Math U13.5",
            "topic": "Formula sheet recall",
            "timeSlot": "7:10 PM - 7:50 PM",
            "durationMinutes": 40,
            "completed": false
          },
          {
            "id": "w6-d1-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "topic": "Real Break",
            "timeSlot": "7:50 PM - 8:05 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w6-d1-3",
            "label": "Math U13.6: MATH CONTENT COMPLETE ✅ (40 min)",
            "subject": "math",
            "code": "Math U13.6",
            "topic": "102 Math Skills Done",
            "timeSlot": "8:05 PM - 8:45 PM",
            "durationMinutes": 40,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-18",
        "dateStr": "2026-10-18",
        "dayOfWeek": "Sun",
        "formattedDate": "Sun Oct 18",
        "weekId": "week-6",
        "weekNumber": 6,
        "weekTitle": "Content Mastery Complete",
        "phase": "foundations",
        "isBuffer": true,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "specialInstructions": "Sun Oct 18 -- REST DAY. All Content Phase Complete Celebration!",
        "tasks": [
          {
            "id": "w6-d2-1",
            "label": "Buffer Sunday: Content Complete Celebration (Rest & Recharge)",
            "subject": "buffer",
            "topic": "Milestone Rest",
            "completed": false
          }
        ]
      }
    ]
  },
  {
    "id": "week-7",
    "title": "Phase 2 Week 1: Bluebook Test #2 & Targeted Drills",
    "dateRange": "Oct 19 to Oct 25",
    "subtitle": "Bluebook Test #2 full simulation, error-log dissection, Khan remediation, and targeted Desmos drills.",
    "phase": "bluebook",
    "days": [
      {
        "id": "2026-10-19",
        "dateStr": "2026-10-19",
        "dayOfWeek": "Mon",
        "formattedDate": "Mon Oct 19",
        "weekId": "week-7",
        "weekNumber": 7,
        "weekTitle": "Phase 2: Test #2 & Targeted Drills",
        "phase": "bluebook",
        "isBuffer": false,
        "isTestDay": true,
        "studyTimeMinutes": 144,
        "breakTimeMinutes": 10,
        "totalTimeMinutes": 154,
        "specialInstructions": "8:00 AM - 10:24 AM: Full Bluebook Practice Test #2 (real conditions, timed).",
        "tasks": [
          {
            "id": "p2-test-2",
            "label": "Full Bluebook Practice Test #2 (real conditions, timed)",
            "subject": "test",
            "code": "MOCK #2",
            "topic": "Full Timed Test #2",
            "timeSlot": "8:00 AM - 10:24 AM",
            "durationMinutes": 144,
            "completed": false
          },
          {
            "id": "w7-d1-2",
            "label": "Log initial section scores in Tracker (strictly zero studying after test)",
            "subject": "review",
            "topic": "Score Logging",
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-20",
        "dateStr": "2026-10-20",
        "dayOfWeek": "Tue",
        "formattedDate": "Tue Oct 20",
        "weekId": "week-7",
        "weekNumber": 7,
        "weekTitle": "Phase 2: Test #2 & Targeted Drills",
        "phase": "bluebook",
        "isBuffer": false,
        "studyTimeMinutes": 45,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 45,
        "specialInstructions": "6:30 PM - 7:15 PM: Error-log review of Test #2 (45 min).",
        "tasks": [
          {
            "id": "w7-d2-1",
            "label": "Error-log review of Test #2 (45 min)",
            "subject": "review",
            "code": "REVIEW",
            "topic": "Mistake Dissection",
            "timeSlot": "6:30 PM - 7:15 PM",
            "durationMinutes": 45,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-21",
        "dateStr": "2026-10-21",
        "dayOfWeek": "Wed",
        "formattedDate": "Wed Oct 21",
        "weekId": "week-7",
        "weekNumber": 7,
        "weekTitle": "Phase 2: Test #2 & Targeted Drills",
        "phase": "bluebook",
        "isBuffer": false,
        "studyTimeMinutes": 75,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 75,
        "specialInstructions": "6:30 PM - 7:45 PM: Targeted Math drills + Desmos speed drills (75 min).",
        "tasks": [
          {
            "id": "w7-d3-1",
            "label": "Targeted Math drills + Desmos speed drills (75 min)",
            "subject": "drill",
            "code": "DRILL",
            "topic": "Desmos & Math Speed Drills",
            "timeSlot": "6:30 PM - 7:45 PM",
            "durationMinutes": 75,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-22",
        "dateStr": "2026-10-22",
        "dayOfWeek": "Thu",
        "formattedDate": "Thu Oct 22",
        "weekId": "week-7",
        "weekNumber": 7,
        "weekTitle": "Phase 2: Test #2 & Targeted Drills",
        "phase": "bluebook",
        "isBuffer": false,
        "studyTimeMinutes": 60,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 60,
        "specialInstructions": "6:30 PM - 7:30 PM: Targeted R&W drills, punctuation/grammar review (60 min).",
        "tasks": [
          {
            "id": "w7-d4-1",
            "label": "Targeted R&W drills, punctuation/grammar review (60 min)",
            "subject": "drill",
            "code": "DRILL",
            "topic": "Grammar & Punctuation Review",
            "timeSlot": "6:30 PM - 7:30 PM",
            "durationMinutes": 60,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-23",
        "dateStr": "2026-10-23",
        "dayOfWeek": "Fri",
        "formattedDate": "Fri Oct 23",
        "weekId": "week-7",
        "weekNumber": 7,
        "weekTitle": "Phase 2: Test #2 & Targeted Drills",
        "phase": "bluebook",
        "isBuffer": true,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "specialInstructions": "Light buffer - catch up or rest, your choice.",
        "tasks": [
          {
            "id": "w7-d5-1",
            "label": "Light buffer: Catch up on any pending drills or rest, your choice",
            "subject": "buffer",
            "topic": "Flexible Recovery",
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-24",
        "dateStr": "2026-10-24",
        "dayOfWeek": "Sat",
        "formattedDate": "Sat Oct 24",
        "weekId": "week-7",
        "weekNumber": 7,
        "weekTitle": "Phase 2: Test #2 & Targeted Drills",
        "phase": "bluebook",
        "isBuffer": false,
        "studyTimeMinutes": 45,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 45,
        "specialInstructions": "6:30 PM - 7:15 PM: Light targeted practice on remaining weak spots (45 min).",
        "tasks": [
          {
            "id": "w7-d6-1",
            "label": "Light targeted practice on remaining weak spots (45 min)",
            "subject": "drill",
            "code": "DRILL",
            "topic": "Weak Spots Practice",
            "timeSlot": "6:30 PM - 7:15 PM",
            "durationMinutes": 45,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-25",
        "dateStr": "2026-10-25",
        "dayOfWeek": "Sun",
        "formattedDate": "Sun Oct 25",
        "weekId": "week-7",
        "weekNumber": 7,
        "weekTitle": "Phase 2: Test #2 & Targeted Drills",
        "phase": "bluebook",
        "isBuffer": true,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "specialInstructions": "Sun Oct 25 -- REST DAY. Zero assigned lessons.",
        "tasks": [
          {
            "id": "w7-d7-1",
            "label": "Buffer Sunday: Zero assigned lessons (Rest & Recharge)",
            "subject": "buffer",
            "topic": "Weekly Reset",
            "completed": false
          }
        ]
      }
    ]
  },
  {
    "id": "week-8",
    "title": "Phase 2 Week 2: Bluebook Test #3 & Hard-Tier Simulation",
    "dateRange": "Oct 26 to Nov 1",
    "subtitle": "Bluebook Test #3 full simulation, error-log dissection, targeted drills on weak areas.",
    "phase": "bluebook",
    "days": [
      {
        "id": "2026-10-26",
        "dateStr": "2026-10-26",
        "dayOfWeek": "Mon",
        "formattedDate": "Mon Oct 26",
        "weekId": "week-8",
        "weekNumber": 8,
        "weekTitle": "Phase 2: Test #3 & Hard-Tier Simulation",
        "phase": "bluebook",
        "isBuffer": false,
        "isTestDay": true,
        "studyTimeMinutes": 144,
        "breakTimeMinutes": 10,
        "totalTimeMinutes": 154,
        "specialInstructions": "8:00 AM - 10:24 AM: Full Bluebook Practice Test #3 (real conditions, timed).",
        "tasks": [
          {
            "id": "p2-test-3",
            "label": "Full Bluebook Practice Test #3 (real conditions, timed)",
            "subject": "test",
            "code": "MOCK #3",
            "topic": "Full Timed Test #3",
            "timeSlot": "8:00 AM - 10:24 AM",
            "durationMinutes": 144,
            "completed": false
          },
          {
            "id": "w8-d1-2",
            "label": "Log Test #3 scores in Tracker (strictly zero studying after test)",
            "subject": "review",
            "topic": "Score Logging",
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-27",
        "dateStr": "2026-10-27",
        "dayOfWeek": "Tue",
        "formattedDate": "Tue Oct 27",
        "weekId": "week-8",
        "weekNumber": 8,
        "weekTitle": "Phase 2: Test #3 & Hard-Tier Simulation",
        "phase": "bluebook",
        "isBuffer": false,
        "studyTimeMinutes": 45,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 45,
        "specialInstructions": "6:30 PM - 7:15 PM: Error-log review of Test #3 (45 min).",
        "tasks": [
          {
            "id": "w8-d2-1",
            "label": "Error-log review of Test #3 (45 min)",
            "subject": "review",
            "code": "REVIEW",
            "topic": "Mistake Dissection",
            "timeSlot": "6:30 PM - 7:15 PM",
            "durationMinutes": 45,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-28",
        "dateStr": "2026-10-28",
        "dayOfWeek": "Wed",
        "formattedDate": "Wed Oct 28",
        "weekId": "week-8",
        "weekNumber": 8,
        "weekTitle": "Phase 2: Test #3 & Hard-Tier Simulation",
        "phase": "bluebook",
        "isBuffer": false,
        "studyTimeMinutes": 60,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 60,
        "specialInstructions": "6:30 PM - 7:30 PM: Targeted drills on Test #3 weak areas (60 min).",
        "tasks": [
          {
            "id": "w8-d3-1",
            "label": "Targeted drills on Test #3 weak areas (60 min)",
            "subject": "drill",
            "code": "DRILL",
            "topic": "Weak Area Targeted Drills",
            "timeSlot": "6:30 PM - 7:30 PM",
            "durationMinutes": 60,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-29",
        "dateStr": "2026-10-29",
        "dayOfWeek": "Thu",
        "formattedDate": "Thu Oct 29",
        "weekId": "week-8",
        "weekNumber": 8,
        "weekTitle": "Phase 2: Test #3 & Hard-Tier Simulation",
        "phase": "bluebook",
        "isBuffer": false,
        "studyTimeMinutes": 60,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 60,
        "specialInstructions": "6:30 PM - 7:30 PM: Deep review, punctuation & transitions traps + Math cleanup (60 min).",
        "tasks": [
          {
            "id": "w8-d4-1",
            "label": "Deep review: Punctuation & transitions traps + Math cleanup (60 min)",
            "subject": "review",
            "code": "REVIEW",
            "topic": "Traps & Cleanup",
            "timeSlot": "6:30 PM - 7:30 PM",
            "durationMinutes": 60,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-30",
        "dateStr": "2026-10-30",
        "dayOfWeek": "Fri",
        "formattedDate": "Fri Oct 30",
        "weekId": "week-8",
        "weekNumber": 8,
        "weekTitle": "Phase 2: Test #3 & Hard-Tier Simulation",
        "phase": "bluebook",
        "isBuffer": true,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "specialInstructions": "Light buffer - catch up or rest.",
        "tasks": [
          {
            "id": "w8-d5-1",
            "label": "Light buffer: Catch up on any pending items or rest",
            "subject": "buffer",
            "topic": "Recovery",
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-31",
        "dateStr": "2026-10-31",
        "dayOfWeek": "Sat",
        "formattedDate": "Sat Oct 31",
        "weekId": "week-8",
        "weekNumber": 8,
        "weekTitle": "Phase 2: Test #3 & Hard-Tier Simulation",
        "phase": "bluebook",
        "isBuffer": false,
        "isTestDay": true,
        "studyTimeMinutes": 144,
        "breakTimeMinutes": 10,
        "totalTimeMinutes": 154,
        "specialInstructions": "8:00 AM - 10:24 AM: Full Bluebook Practice Test #4 (final full test, timed).",
        "tasks": [
          {
            "id": "p2-test-4",
            "label": "Full Bluebook Practice Test #4 (final full test, timed)",
            "subject": "test",
            "code": "MOCK #4",
            "topic": "Final Full Timed Test #4",
            "timeSlot": "8:00 AM - 10:24 AM",
            "durationMinutes": 144,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-11-01",
        "dateStr": "2026-11-01",
        "dayOfWeek": "Sun",
        "formattedDate": "Sun Nov 1",
        "weekId": "week-8",
        "weekNumber": 8,
        "weekTitle": "Phase 2: Test #3 & Hard-Tier Simulation",
        "phase": "bluebook",
        "isBuffer": true,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "specialInstructions": "Sun Nov 1 -- REST DAY. Full mental rest before exam week taper.",
        "tasks": [
          {
            "id": "w8-d7-1",
            "label": "Buffer Sunday: Zero assigned lessons (Rest & Recharge)",
            "subject": "buffer",
            "topic": "Pre-Exam Reset",
            "completed": false
          }
        ]
      }
    ]
  },
  {
    "id": "week-9",
    "title": "Phase 2 Week 3: Final Taper, Packout & Exam Day",
    "dateRange": "Nov 2 to Nov 7",
    "subtitle": "Gentle cognitive taper, full device verification, Crescent Model protocols, and test day.",
    "phase": "exam",
    "days": [
      {
        "id": "2026-11-02",
        "dateStr": "2026-11-02",
        "dayOfWeek": "Mon",
        "formattedDate": "Mon Nov 2",
        "weekId": "week-9",
        "weekNumber": 9,
        "weekTitle": "Phase 2: Final Taper, Packout & Exam Day",
        "phase": "exam",
        "isBuffer": false,
        "studyTimeMinutes": 45,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 45,
        "specialInstructions": "6:30 PM - 7:15 PM: Error-log review of Test #4 + simulate exact test-day timing (45 min).",
        "tasks": [
          {
            "id": "w9-d1-1",
            "label": "Error-log review of Test #4 + simulate exact test-day timing (45 min)",
            "subject": "review",
            "code": "REVIEW",
            "topic": "Test #4 Review & Timing",
            "timeSlot": "6:30 PM - 7:15 PM",
            "durationMinutes": 45,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-11-03",
        "dateStr": "2026-11-03",
        "dayOfWeek": "Tue",
        "formattedDate": "Tue Nov 3",
        "weekId": "week-9",
        "weekNumber": 9,
        "weekTitle": "Phase 2: Final Taper, Packout & Exam Day",
        "phase": "exam",
        "isBuffer": false,
        "studyTimeMinutes": 30,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 30,
        "specialInstructions": "6:30 PM - 7:00 PM: Light taper, review error notebook + grammar rules (30 min).",
        "tasks": [
          {
            "id": "w9-d2-1",
            "label": "Light taper: Review error notebook + grammar rules (30 min)",
            "subject": "review",
            "code": "TAPER",
            "topic": "Error Notebook & Grammar",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-11-04",
        "dateStr": "2026-11-04",
        "dayOfWeek": "Wed",
        "formattedDate": "Wed Nov 4",
        "weekId": "week-9",
        "weekNumber": 9,
        "weekTitle": "Phase 2: Final Taper, Packout & Exam Day",
        "phase": "exam",
        "isBuffer": false,
        "studyTimeMinutes": 20,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 20,
        "specialInstructions": "6:30 PM - 6:50 PM: Verify Bluebook app, admission ticket, ID (20 min).",
        "tasks": [
          {
            "id": "w9-d3-1",
            "label": "Verify Bluebook app, admission ticket, and physical ID (20 min)",
            "subject": "logistics",
            "code": "LOGISTICS",
            "topic": "App & Ticket Verification",
            "timeSlot": "6:30 PM - 6:50 PM",
            "durationMinutes": 20,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-11-05",
        "dateStr": "2026-11-05",
        "dayOfWeek": "Thu",
        "formattedDate": "Thu Nov 5",
        "weekId": "week-9",
        "weekNumber": 9,
        "weekTitle": "Phase 2: Final Taper, Packout & Exam Day",
        "phase": "exam",
        "isBuffer": false,
        "studyTimeMinutes": 20,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 20,
        "specialInstructions": "6:30 PM - 6:50 PM: Very light review, then pack bag (20 min).",
        "tasks": [
          {
            "id": "w9-d4-1",
            "label": "Very light review, then pack bag with all Rank 1 essentials (20 min)",
            "subject": "logistics",
            "code": "PACKOUT",
            "topic": "Bag Packout Protocol",
            "timeSlot": "6:30 PM - 6:50 PM",
            "durationMinutes": 20,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-11-06",
        "dateStr": "2026-11-06",
        "dayOfWeek": "Fri",
        "formattedDate": "Fri Nov 6",
        "weekId": "week-9",
        "weekNumber": 9,
        "weekTitle": "Phase 2: Final Taper, Packout & Exam Day",
        "phase": "exam",
        "isBuffer": true,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "specialInstructions": "FULL REST. No studying. Sleep early by 10:00 PM curfew.",
        "tasks": [
          {
            "id": "w9-d5-1",
            "label": "FULL REST DAY: No studying, hydrate, early 10:00 PM bedtime curfew",
            "subject": "buffer",
            "topic": "Pre-Exam Sleep Curfew",
            "completed": false
          }
        ]
      },
      {
        "id": "2026-11-07",
        "dateStr": "2026-11-07",
        "dayOfWeek": "Sat",
        "formattedDate": "Sat Nov 7",
        "weekId": "week-9",
        "weekNumber": 9,
        "weekTitle": "Phase 2: Final Taper, Packout & Exam Day",
        "phase": "exam",
        "isBuffer": false,
        "isTestDay": true,
        "studyTimeMinutes": 144,
        "breakTimeMinutes": 10,
        "totalTimeMinutes": 154,
        "specialInstructions": "🎯 OFFICIAL DIGITAL SAT EXAM DAY! Follow your official admission ticket reporting time exactly. Crescent Model School, Shadman Lahore.",
        "tasks": [
          {
            "id": "sat-exam-day",
            "label": "OFFICIAL DIGITAL SAT EXAM: Follow reporting time exactly (Arrive 7:15 AM)",
            "subject": "test",
            "code": "EXAM DAY",
            "topic": "Crescent Model School Official Exam",
            "timeSlot": "7:15 AM - 12:30 PM",
            "durationMinutes": 144,
            "completed": false
          }
        ]
      }
    ]
  }
];
