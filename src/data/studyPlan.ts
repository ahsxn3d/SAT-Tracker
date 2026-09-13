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
        "specialInstructions": "Day 1 Kickoff: 140 min study session with exact timed modules. Focus on Math U3.2-3.5 and R&W U3.1-3.3.",
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
            "id": "w1-d1-4",
            "label": "Math U3.5: Center, spread, and shape (20 min)",
            "subject": "math",
            "code": "Math U3.5",
            "topic": "Center, spread, and shape",
            "timeSlot": "7:30 PM - 7:50 PM",
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
            "id": "w1-d1-7",
            "label": "R&W U3.3: Cross-text connections (20 min)",
            "subject": "rw",
            "code": "R&W U3.3",
            "topic": "Cross-text connections",
            "timeSlot": "8:45 PM - 9:05 PM",
            "durationMinutes": 20,
            "completed": false
          }
        ],
        "id": "2026-09-12"
      },
      {
        "dateStr": "2026-09-13",
        "dayOfWeek": "Sun",
        "formattedDate": "Sun Sep 13",
        "weekId": "week-1",
        "weekNumber": 1,
        "weekTitle": "Kickoff & Problem Solving Foundations",
        "phase": "foundations",
        "isBuffer": true,
        "studyTimeMinutes": 0,
        "specialInstructions": "REST DAY: Zero assigned lessons. 100% guilt-free recovery day.",
        "tasks": [
          {
            "id": "w1-d2-1",
            "label": "Buffer Sunday: Zero assigned lessons (Rest & Recharge)",
            "subject": "buffer",
            "topic": "Mental Recovery",
            "completed": false
          }
        ],
        "id": "2026-09-13"
      },
      {
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
        "specialInstructions": "Day 2: 140 min study session. 4 Math units (80 min) + 3 R&W units (60 min).",
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
            "id": "w1-d3-4",
            "label": "Math U3.9: Two-way tables & conditional probability (20 min)",
            "subject": "math",
            "code": "Math U3.9",
            "topic": "Two-way tables",
            "timeSlot": "7:30 PM - 7:50 PM",
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
            "id": "w1-d3-7",
            "label": "R&W U4.3: Command of evidence - Quantitative (20 min)",
            "subject": "rw",
            "code": "R&W U4.3",
            "topic": "Command of evidence (Quantitative)",
            "timeSlot": "8:45 PM - 9:05 PM",
            "durationMinutes": 20,
            "completed": false
          }
        ],
        "id": "2026-09-14"
      },
      {
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
        "specialInstructions": "Day 3: 134 min study session. Math U3.10 & U4.1-4.2 (70 min) + R&W U4.4 & U5.1-5.2 (64 min).",
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
            "id": "w1-d4-3",
            "label": "Math U4.2: Linear equation word problems (25 min)",
            "subject": "math",
            "code": "Math U4.2",
            "topic": "Linear equation word problems",
            "timeSlot": "7:15 PM - 7:40 PM",
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
            "id": "w1-d4-5",
            "label": "R&W U5.1: Boundaries - End-of-sentence & clauses (22 min)",
            "subject": "rw",
            "code": "R&W U5.1",
            "topic": "Sentence boundaries",
            "timeSlot": "8:15 PM - 8:37 PM",
            "durationMinutes": 22,
            "completed": false
          },
          {
            "id": "w1-d4-6",
            "label": "R&W U5.2: Boundaries - Supplementary elements (22 min)",
            "subject": "rw",
            "code": "R&W U5.2",
            "topic": "Supplementary elements",
            "timeSlot": "8:37 PM - 8:59 PM",
            "durationMinutes": 22,
            "completed": false
          }
        ],
        "id": "2026-09-15"
      },
      {
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
        "specialInstructions": "Day 4: 119 min study session. 3 Math units (75 min) + 2 R&W units (44 min).",
        "tasks": [
          {
            "id": "w1-d5-1",
            "label": "Math U4.3: Linear relationship graphs (25 min)",
            "subject": "math",
            "code": "Math U4.3",
            "topic": "Linear relationship graphs",
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
            "id": "w1-d5-3",
            "label": "Math U4.5: Systems of linear equations (25 min)",
            "subject": "math",
            "code": "Math U4.5",
            "topic": "Linear systems",
            "timeSlot": "7:20 PM - 7:45 PM",
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
            "id": "w1-d5-5",
            "label": "R&W U5.4: Verb tense, aspect, & mood (22 min)",
            "subject": "rw",
            "code": "R&W U5.4",
            "topic": "Verb tense & mood",
            "timeSlot": "8:22 PM - 8:44 PM",
            "durationMinutes": 22,
            "completed": false
          }
        ],
        "id": "2026-09-16"
      },
      {
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
        "specialInstructions": "Day 5: 119 min study session. 3 Math units (75 min) + 2 R&W units (44 min).",
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
            "id": "w1-d6-3",
            "label": "Math U4.8: Lines in coordinate plane - Slope & intercepts (25 min)",
            "subject": "math",
            "code": "Math U4.8",
            "topic": "Slope & intercepts",
            "timeSlot": "7:20 PM - 7:45 PM",
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
            "id": "w1-d6-5",
            "label": "R&W U6.2: Pronoun-antecedent agreement & clarity (22 min)",
            "subject": "rw",
            "code": "R&W U6.2",
            "topic": "Pronoun agreement",
            "timeSlot": "8:22 PM - 8:44 PM",
            "durationMinutes": 22,
            "completed": false
          }
        ],
        "id": "2026-09-17"
      },
      {
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
        "specialInstructions": "Day 6: 119 min study session. 3 Math units (75 min) + 2 R&W units (44 min).",
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
            "id": "w1-d7-3",
            "label": "Math U4.11: Function notation & evaluation (25 min)",
            "subject": "math",
            "code": "Math U4.11",
            "topic": "Function notation",
            "timeSlot": "7:20 PM - 7:45 PM",
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
            "id": "w1-d7-5",
            "label": "R&W U7.1: Transitions - Contrast (However, Nevertheless) (22 min)",
            "subject": "rw",
            "code": "R&W U7.1",
            "topic": "Contrast transitions",
            "timeSlot": "8:22 PM - 8:44 PM",
            "durationMinutes": 22,
            "completed": false
          }
        ],
        "id": "2026-09-18"
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
        "specialInstructions": "Day 7: 124 min study session. Math U4.12-4.13 & U5.1 (80 min) + R&W U7.2-7.3 (44 min).",
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
            "id": "w2-d1-3",
            "label": "Math U5.1: Quadratic equations - Factoring & zero-product (30 min)",
            "subject": "math",
            "code": "Math U5.1",
            "topic": "Quadratic factoring",
            "timeSlot": "7:20 PM - 7:50 PM",
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
            "id": "w2-d1-5",
            "label": "R&W U7.3: Transitions - Addition & illustration (22 min)",
            "subject": "rw",
            "code": "R&W U7.3",
            "topic": "Addition transitions",
            "timeSlot": "8:27 PM - 8:49 PM",
            "durationMinutes": 22,
            "completed": false
          }
        ],
        "id": "2026-09-19"
      },
      {
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
        "specialInstructions": "★ EARLY DIAGNOSTIC: Full Bluebook Practice Test #1 (baseline). 8:00 AM - 10:24 AM full morning simulation; strictly zero lessons afterward.",
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
        ],
        "id": "2026-09-20"
      },
      {
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
        "specialInstructions": "Day 8: 137 min study session. 3 Math units (90 min) + 2 R&W units (47 min).",
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
            "id": "w2-d2-3",
            "label": "Math U5.4: Graphing quadratic functions (30 min)",
            "subject": "math",
            "code": "Math U5.4",
            "topic": "Graphing quadratics",
            "timeSlot": "7:30 PM - 8:00 PM",
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
            "id": "w2-d2-5",
            "label": "R&W U8.1: Rhetorical synthesis - Goal-oriented note selection (25 min)",
            "subject": "rw",
            "code": "R&W U8.1",
            "topic": "Rhetorical synthesis",
            "timeSlot": "8:37 PM - 9:02 PM",
            "durationMinutes": 25,
            "completed": false
          }
        ],
        "id": "2026-09-21"
      },
      {
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
        "specialInstructions": "Day 9: 135 min study session. 3 Math units (85 min) + 2 R&W units (50 min).",
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
            "id": "w2-d3-3",
            "label": "Math U6.1: Radicals and rational exponents (25 min)",
            "subject": "math",
            "code": "Math U6.1",
            "topic": "Radicals & exponents",
            "timeSlot": "7:30 PM - 7:55 PM",
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
            "id": "w2-d3-5",
            "label": "R&W U8.3: Rhetorical synthesis - Differences & similarities (25 min)",
            "subject": "rw",
            "code": "R&W U8.3",
            "topic": "Comparative synthesis",
            "timeSlot": "8:35 PM - 9:00 PM",
            "durationMinutes": 25,
            "completed": false
          }
        ],
        "id": "2026-09-22"
      },
      {
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
        "specialInstructions": "Day 10: 125 min study session. 3 Math units (75 min) + 2 R&W units (50 min).",
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
            "id": "w2-d4-3",
            "label": "Math U6.4: Nonlinear functions & graphs (25 min)",
            "subject": "math",
            "code": "Math U6.4",
            "topic": "Nonlinear functions",
            "timeSlot": "7:20 PM - 7:45 PM",
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
            "id": "w2-d4-5",
            "label": "R&W U9.1: Science passages - Graph and data interpretation (25 min)",
            "subject": "rw",
            "code": "R&W U9.1",
            "topic": "Data interpretation",
            "timeSlot": "8:25 PM - 8:50 PM",
            "durationMinutes": 25,
            "completed": false
          }
        ],
        "id": "2026-09-23"
      },
      {
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
        "specialInstructions": "Day 11: 125 min study session. 3 Math units (75 min) + 2 R&W units (50 min).",
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
            "id": "w2-d5-3",
            "label": "Math U6.7: Equivalent exponential expressions (25 min)",
            "subject": "math",
            "code": "Math U6.7",
            "topic": "Equivalent exponential forms",
            "timeSlot": "7:20 PM - 7:45 PM",
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
            "id": "w2-d5-5",
            "label": "R&W U9.3: Literature & historical speeches - Tone & figurative language (25 min)",
            "subject": "rw",
            "code": "R&W U9.3",
            "topic": "Literature tone & style",
            "timeSlot": "8:25 PM - 8:50 PM",
            "durationMinutes": 25,
            "completed": false
          }
        ],
        "id": "2026-09-24"
      },
      {
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
        "specialInstructions": "Day 12: 125 min study session. 3 Math units (75 min) + 2 R&W units (50 min).",
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
            "id": "w2-d6-3",
            "label": "Math U7.2: Unit rates & dimensional analysis (25 min)",
            "subject": "math",
            "code": "Math U7.2",
            "topic": "Dimensional analysis",
            "timeSlot": "7:20 PM - 7:45 PM",
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
            "id": "w2-d6-5",
            "label": "R&W U10.2: Punctuation - Apostrophes possessives vs contractions (25 min)",
            "subject": "rw",
            "code": "R&W U10.2",
            "topic": "Apostrophes",
            "timeSlot": "8:25 PM - 8:50 PM",
            "durationMinutes": 25,
            "completed": false
          }
        ],
        "id": "2026-09-25"
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
        "specialInstructions": "Day 13: 125 min study session. 3 Math units (75 min) + 2 R&W units (50 min).",
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
            "id": "w3-d1-3",
            "label": "Math U7.5: Evaluating statistical claims & study design (25 min)",
            "subject": "math",
            "code": "Math U7.5",
            "topic": "Study design",
            "timeSlot": "7:20 PM - 7:45 PM",
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
            "id": "w3-d1-5",
            "label": "R&W U10.4: Restrictive vs non-restrictive clauses (Which vs That) (25 min)",
            "subject": "rw",
            "code": "R&W U10.4",
            "topic": "Relative clauses",
            "timeSlot": "8:25 PM - 8:50 PM",
            "durationMinutes": 25,
            "completed": false
          }
        ],
        "id": "2026-09-26"
      },
      {
        "dateStr": "2026-09-27",
        "dayOfWeek": "Sun",
        "formattedDate": "Sun Sep 27",
        "weekId": "week-3",
        "weekNumber": 3,
        "weekTitle": "Advanced Problem Solving & Rhetoric Mastery",
        "phase": "foundations",
        "isBuffer": true,
        "studyTimeMinutes": 0,
        "specialInstructions": "REST DAY: Zero assigned lessons. Full cognitive reset and recovery.",
        "tasks": [
          {
            "id": "w3-d2-1",
            "label": "Buffer Sunday: Zero assigned lessons (Rest & Recovery)",
            "subject": "buffer",
            "topic": "Cognitive Reset",
            "completed": false
          }
        ],
        "id": "2026-09-27"
      },
      {
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
        "specialInstructions": "Day 14: 120 min study session. 2 Math units (50 min) + 2 deep R&W units (70 min).",
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
        ],
        "id": "2026-09-28"
      },
      {
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
        "specialInstructions": "Day 15: 120 min study session. 2 Math units (50 min) + 2 deep R&W units (70 min).",
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
        ],
        "id": "2026-09-29"
      },
      {
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
        "specialInstructions": "Day 16: 140 min study session with 10 min break. Math U7.10 & U8.1 (55 min) + R&W U11.5, U11.6 & U12.1 (85 min).",
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
            "id": "w3-d5-5",
            "label": "R&W U12.1: Speed reading & skim timing (15 min)",
            "subject": "rw",
            "code": "R&W U12.1",
            "topic": "Speed skim timing",
            "timeSlot": "9:00 PM - 9:15 PM",
            "durationMinutes": 15,
            "completed": false
          }
        ],
        "id": "2026-09-30"
      },
      {
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
        "specialInstructions": "Day 17: 135 min study session. 3 Math units (90 min) + 3 fast R&W drills (45 min).",
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
            "id": "w3-d6-3",
            "label": "Math U8.4: Systems of nonlinear equations (30 min)",
            "subject": "math",
            "code": "Math U8.4",
            "topic": "Nonlinear systems",
            "timeSlot": "7:30 PM - 8:00 PM",
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
            "id": "w3-d6-5",
            "label": "R&W U12.3: Trap answer diagnosis (15 min)",
            "subject": "rw",
            "code": "R&W U12.3",
            "topic": "Trap answer diagnosis",
            "timeSlot": "8:30 PM - 8:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w3-d6-6",
            "label": "R&W U12.4: Grammar rapid-fire drill (15 min)",
            "subject": "rw",
            "code": "R&W U12.4",
            "topic": "Grammar rapid-fire",
            "timeSlot": "8:45 PM - 9:00 PM",
            "durationMinutes": 15,
            "completed": false
          }
        ],
        "id": "2026-10-01"
      },
      {
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
        "specialInstructions": "Day 18: 135 min study session. 3 Math units (90 min) + 3 fast R&W drills (45 min).",
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
            "id": "w3-d7-3",
            "label": "Math U8.7: Advanced function transformations (30 min)",
            "subject": "math",
            "code": "Math U8.7",
            "topic": "Function transformations",
            "timeSlot": "7:30 PM - 8:00 PM",
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
            "id": "w3-d7-5",
            "label": "R&W U12.6: Main idea vs supporting detail trap detection (15 min)",
            "subject": "rw",
            "code": "R&W U12.6",
            "topic": "Trap detection",
            "timeSlot": "8:30 PM - 8:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w3-d7-6",
            "label": "R&W U12.7: Digital SAT pacing drill - 71s per question (15 min)",
            "subject": "rw",
            "code": "R&W U12.7",
            "topic": "Pacing drill",
            "timeSlot": "8:45 PM - 9:00 PM",
            "durationMinutes": 15,
            "completed": false
          }
        ],
        "id": "2026-10-02"
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
        "specialInstructions": "Day 19: 135 min study session. Math U8.8-8.11 (120 min) + R&W U12.8 (15 min) ✅ ALL R&W COMPLETE TODAY!",
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
            "id": "w4-d1-3",
            "label": "Math U8.10: Desmos table method for unknown constants (30 min)",
            "subject": "math",
            "code": "Math U8.10",
            "topic": "Desmos table method",
            "timeSlot": "7:30 PM - 8:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w4-d1-4",
            "label": "Math U8.11: Geometry theorem synthesis (30 min)",
            "subject": "math",
            "code": "Math U8.11",
            "topic": "Geometry theorem synthesis",
            "timeSlot": "8:10 PM - 8:40 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w4-d1-5",
            "label": "R&W U12.8: READING & WRITING COMPLETE ✅ (15 min)",
            "subject": "rw",
            "code": "R&W U12.8",
            "topic": "All R&W Finished",
            "timeSlot": "8:55 PM - 9:10 PM",
            "durationMinutes": 15,
            "completed": false
          }
        ],
        "id": "2026-10-03"
      },
      {
        "dateStr": "2026-10-04",
        "dayOfWeek": "Sun",
        "formattedDate": "Sun Oct 4",
        "weekId": "week-4",
        "weekNumber": 4,
        "weekTitle": "Advanced Math Synthesis & All R&W Complete",
        "phase": "foundations",
        "isBuffer": true,
        "studyTimeMinutes": 0,
        "specialInstructions": "REST DAY: Zero assigned lessons. Celebrate all R&W content completed!",
        "tasks": [
          {
            "id": "w4-d2-1",
            "label": "Buffer Sunday: Zero assigned lessons (Rest & Recharge)",
            "subject": "buffer",
            "topic": "Recovery",
            "completed": false
          }
        ],
        "id": "2026-10-04"
      },
      {
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
        "specialInstructions": "Day 20: 130 min study session with 10 min break. Math U8.12-8.13 (60 min) + Math U9.1-9.2 (70 min).",
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
            "id": "w4-d3-3",
            "label": "Math U9.1: Hard-tier linear & quadratic synthesis (35 min)",
            "subject": "math",
            "code": "Math U9.1",
            "topic": "Linear & quadratic synthesis",
            "timeSlot": "7:30 PM - 8:05 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "w4-d3-4",
            "label": "Math U9.2: Multi-step algebraic problem solving (35 min)",
            "subject": "math",
            "code": "Math U9.2",
            "topic": "Multi-step algebra",
            "timeSlot": "8:15 PM - 8:50 PM",
            "durationMinutes": 35,
            "completed": false
          }
        ],
        "id": "2026-10-05"
      },
      {
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
        "specialInstructions": "Day 21: 140 min study session with 10 min break. 4 Hard-Tier Math units (35 min each).",
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
            "id": "w4-d4-3",
            "label": "Math U9.5: Hard-tier data analysis & margin of error (35 min)",
            "subject": "math",
            "code": "Math U9.5",
            "topic": "Data analysis hard-tier",
            "timeSlot": "7:50 PM - 8:25 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "w4-d4-4",
            "label": "Math U9.6: Tricky geometry & composite solids (35 min)",
            "subject": "math",
            "code": "Math U9.6",
            "topic": "Composite solids geometry",
            "timeSlot": "8:25 PM - 9:00 PM",
            "durationMinutes": 35,
            "completed": false
          }
        ],
        "id": "2026-10-06"
      },
      {
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
        "specialInstructions": "Day 22: 120 min study session with 10 min break. 4 Math units (30 min each).",
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
            "id": "w4-d5-3",
            "label": "Math U10.3: Rapid factoring & mental math (30 min)",
            "subject": "math",
            "code": "Math U10.3",
            "topic": "Rapid factoring",
            "timeSlot": "7:30 PM - 8:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w4-d5-4",
            "label": "Math U10.4: Grid-in strategy & decimal rules (30 min)",
            "subject": "math",
            "code": "Math U10.4",
            "topic": "Grid-in strategy",
            "timeSlot": "8:10 PM - 8:40 PM",
            "durationMinutes": 30,
            "completed": false
          }
        ],
        "id": "2026-10-07"
      },
      {
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
        "specialInstructions": "Day 23: 120 min study session with 10 min break. 4 Math units (30 min each).",
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
            "id": "w4-d6-3",
            "label": "Math U10.7: Polynomial long division & remainder theorem (30 min)",
            "subject": "math",
            "code": "Math U10.7",
            "topic": "Remainder theorem",
            "timeSlot": "7:30 PM - 8:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w4-d6-4",
            "label": "Math U10.8: Circle theorems & inscribed angles (30 min)",
            "subject": "math",
            "code": "Math U10.8",
            "topic": "Circle theorems",
            "timeSlot": "8:10 PM - 8:40 PM",
            "durationMinutes": 30,
            "completed": false
          }
        ],
        "id": "2026-10-08"
      },
      {
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
        "specialInstructions": "Day 24: 120 min study session with 10 min break. 4 Math units (30 min each).",
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
            "id": "w4-d7-3",
            "label": "Math U11.3: Higher-order polynomial roots (30 min)",
            "subject": "math",
            "code": "Math U11.3",
            "topic": "Polynomial roots",
            "timeSlot": "7:30 PM - 8:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w4-d7-4",
            "label": "Math U11.4: Rational function asymptotes (30 min)",
            "subject": "math",
            "code": "Math U11.4",
            "topic": "Rational asymptotes",
            "timeSlot": "8:10 PM - 8:40 PM",
            "durationMinutes": 30,
            "completed": false
          }
        ],
        "id": "2026-10-09"
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
        "specialInstructions": "Day 25: 120 min study session with 10 min break. 4 Math units (30 min each).",
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
            "id": "w5-d1-3",
            "label": "Math U11.7: Standard deviation & z-score concepts (30 min)",
            "subject": "math",
            "code": "Math U11.7",
            "topic": "Standard deviation",
            "timeSlot": "7:30 PM - 8:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w5-d1-4",
            "label": "Math U11.8: Shaded region & geometric probability (30 min)",
            "subject": "math",
            "code": "Math U11.8",
            "topic": "Geometric probability",
            "timeSlot": "8:10 PM - 8:40 PM",
            "durationMinutes": 30,
            "completed": false
          }
        ],
        "id": "2026-10-10"
      },
      {
        "dateStr": "2026-10-11",
        "dayOfWeek": "Sun",
        "formattedDate": "Sun Oct 11",
        "weekId": "week-5",
        "weekNumber": 5,
        "weekTitle": "Hard Tier Techniques & High-Difficulty Drills",
        "phase": "foundations",
        "isBuffer": true,
        "studyTimeMinutes": 0,
        "specialInstructions": "REST DAY: Zero assigned lessons. Relax, hydrate, and prepare for the final sprint!",
        "tasks": [
          {
            "id": "w5-d2-1",
            "label": "Buffer Sunday: Zero assigned lessons (Rest & Recharge)",
            "subject": "buffer",
            "topic": "Weekly Reset",
            "completed": false
          }
        ],
        "id": "2026-10-11"
      },
      {
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
        "specialInstructions": "Day 26: 130 min study session with 10 min break. Math U11.9-11.10 (60 min) + Math U12.1-12.2 (70 min).",
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
            "id": "w5-d3-3",
            "label": "Math U12.1: Desmos slider tricks for unknown constants (35 min)",
            "subject": "math",
            "code": "Math U12.1",
            "topic": "Desmos sliders",
            "timeSlot": "7:30 PM - 8:05 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "w5-d3-4",
            "label": "Math U12.2: Desmos regression for unknown quadratics (35 min)",
            "subject": "math",
            "code": "Math U12.2",
            "topic": "Desmos regression",
            "timeSlot": "8:15 PM - 8:50 PM",
            "durationMinutes": 35,
            "completed": false
          }
        ],
        "id": "2026-10-12"
      },
      {
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
        "specialInstructions": "Day 27: 140 min study session with 10 min break. 4 Math units (35 min each).",
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
            "id": "w5-d4-3",
            "label": "Math U12.5: Weighted average & mixture problems (35 min)",
            "subject": "math",
            "code": "Math U12.5",
            "topic": "Weighted averages",
            "timeSlot": "7:50 PM - 8:25 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "w5-d4-4",
            "label": "Math U12.6: Speed elimination on multi-step word problems (35 min)",
            "subject": "math",
            "code": "Math U12.6",
            "topic": "Speed elimination",
            "timeSlot": "8:25 PM - 9:00 PM",
            "durationMinutes": 35,
            "completed": false
          }
        ],
        "id": "2026-10-13"
      },
      {
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
        "specialInstructions": "Day 28: 140 min study session with 10 min break. 4 Math units (35 min each).",
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
            "id": "w5-d5-3",
            "label": "Math U12.9: System of 3 variables / elimination hacks (35 min)",
            "subject": "math",
            "code": "Math U12.9",
            "topic": "3-variable systems",
            "timeSlot": "7:50 PM - 8:25 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "w5-d5-4",
            "label": "Math U12.10: Function transformations with horizontal scale (35 min)",
            "subject": "math",
            "code": "Math U12.10",
            "topic": "Horizontal scale transforms",
            "timeSlot": "8:25 PM - 9:00 PM",
            "durationMinutes": 35,
            "completed": false
          }
        ],
        "id": "2026-10-14"
      },
      {
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
        "specialInstructions": "Day 29: 105 min study session with 10 min break. 3 Math units (35 min each).",
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
            "id": "w5-d6-3",
            "label": "Math U12.13: Student-produced response (Grid-in) accuracy (35 min)",
            "subject": "math",
            "code": "Math U12.13",
            "topic": "Grid-in accuracy",
            "timeSlot": "7:50 PM - 8:25 PM",
            "durationMinutes": 35,
            "completed": false
          }
        ],
        "id": "2026-10-15"
      },
      {
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
        "specialInstructions": "Day 30: 120 min study session with 10 min break. 3 Hard-Tier Math units (40 min each).",
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
            "id": "w5-d7-3",
            "label": "Math U13.3: Backsolving with answer choices - PITA (40 min)",
            "subject": "math",
            "code": "Math U13.3",
            "topic": "Backsolving PITA",
            "timeSlot": "8:00 PM - 8:40 PM",
            "durationMinutes": 40,
            "completed": false
          }
        ],
        "id": "2026-10-16"
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
        "specialInstructions": "Day 31: 120 min study session with 10 min break. 3 Math units (40 min each) ✅ ALL MATH COMPLETE TODAY! 🎉",
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
            "id": "w6-d1-3",
            "label": "Math U13.6: MATH CONTENT COMPLETE ✅ (40 min)",
            "subject": "math",
            "code": "Math U13.6",
            "topic": "102 Math Skills Done",
            "timeSlot": "8:00 PM - 8:40 PM",
            "durationMinutes": 40,
            "completed": false
          }
        ],
        "id": "2026-10-17"
      },
      {
        "dateStr": "2026-10-18",
        "dayOfWeek": "Sun",
        "formattedDate": "Sun Oct 18",
        "weekId": "week-6",
        "weekNumber": 6,
        "weekTitle": "Content Mastery Complete",
        "phase": "foundations",
        "isBuffer": true,
        "studyTimeMinutes": 0,
        "specialInstructions": "REST DAY: All Math & R&W Content Complete Celebration! 100% guilt-free rest before transitioning to Phase 2.",
        "tasks": [
          {
            "id": "w6-d2-1",
            "label": "Buffer Sunday: Content Complete Celebration (Rest & Recharge)",
            "subject": "buffer",
            "topic": "Milestone Rest",
            "completed": false
          }
        ],
        "id": "2026-10-18"
      }
    ]
  },
{
    id: 'week-7',
    title: 'Phase 2 Week 1: Bluebook Test #2 & Targeted Drills',
    dateRange: 'Oct 19 to Oct 25',
    subtitle: 'Bluebook Test #2 full simulation, error-log dissection, Khan remediation, and targeted Desmos drills.',
    phase: 'bluebook',
    days: [
      {
        id: '2026-10-19',
        dateStr: '2026-10-19',
        dayOfWeek: 'Mon',
        formattedDate: 'Mon Oct 19',
        weekId: 'week-7',
        weekNumber: 7,
        weekTitle: 'Phase 2: Test #2 & Targeted Drills',
        phase: 'bluebook',
        isBuffer: false,
        isTestDay: true,
        specialInstructions: '🥊 BLUEBOOK TEST #2: Full timed test under real exam conditions. Both sections included, plus the mandatory 10-min break.',
        tasks: [
          { id: 'p2-test-2', label: 'Bluebook Test #2 (full, timed: real conditions, both sections, 10-min break included)', subject: 'test', code: 'MOCK #2', topic: 'Full Timed Test #2', completed: false },
          { id: 'w7-d1-2', label: 'Log initial section scores in Tracker (strictly zero studying after test)', subject: 'review', topic: 'Score Logging', completed: false },
        ],
      },
      {
        id: '2026-10-20',
        dateStr: '2026-10-20',
        dayOfWeek: 'Tue',
        formattedDate: 'Tue Oct 20',
        weekId: 'week-7',
        weekNumber: 7,
        weekTitle: 'Phase 2: Test #2 & Targeted Drills',
        phase: 'bluebook',
        isBuffer: false,
        specialInstructions: '🔍 ERROR-LOG REVIEW: Open your score report, write down every wrong question: which skill, why you got it wrong (careless? didn\'t know the rule? ran out of time?).',
        tasks: [
          { id: 'w7-d2-1', label: 'Error-log review: Write down every wrong question from Test #2 score report', subject: 'review', topic: 'Mistake Dissection', completed: false },
          { id: 'w7-d2-2', label: 'Categorize each error: Careless vs rule unknown vs time exhaustion', subject: 'review', topic: 'Root Cause Diagnosis', completed: false },
        ],
      },
      {
        id: '2026-10-21',
        dateStr: '2026-10-21',
        dayOfWeek: 'Wed',
        formattedDate: 'Wed Oct 21',
        weekId: 'week-7',
        weekNumber: 7,
        weekTitle: 'Phase 2: Test #2 & Targeted Drills',
        phase: 'bluebook',
        isBuffer: false,
        specialInstructions: '📐 TARGETED MATH + DESMOS: Go back to Khan Academy, redo the specific skills you missed. Practice using Desmos for systems/quadratics until it\'s automatic.',
        tasks: [
          { id: 'w7-d3-1', label: 'Targeted Math drills: Redo specific skills missed on Khan Academy', subject: 'drill', topic: 'Khan Math Fix', completed: false },
          { id: 'w7-d3-2', label: 'Desmos speed drills: Systems & quadratics until graphing shortcuts are automatic', subject: 'drill', topic: 'Desmos Speed Drills', completed: false },
        ],
      },
      {
        id: '2026-10-22',
        dateStr: '2026-10-22',
        dayOfWeek: 'Thu',
        formattedDate: 'Thu Oct 22',
        weekId: 'week-7',
        weekNumber: 7,
        weekTitle: 'Phase 2: Test #2 & Targeted Drills',
        phase: 'bluebook',
        isBuffer: false,
        specialInstructions: '📖 TARGETED R&W DRILLS: Redo missed R&W skills on Khan, review the grammar rule behind each punctuation/transition mistake.',
        tasks: [
          { id: 'w7-d4-1', label: 'Targeted R&W drills: Redo missed Reading & Writing skills on Khan Academy', subject: 'drill', topic: 'Khan R&W Fix', completed: false },
          { id: 'w7-d4-2', label: 'Grammar review: Dissect punctuation and transition rules behind each mistake', subject: 'review', topic: 'Grammar Rules Dissection', completed: false },
        ],
      },
      {
        id: '2026-10-23',
        dateStr: '2026-10-23',
        dayOfWeek: 'Fri',
        formattedDate: 'Fri Oct 23',
        weekId: 'week-7',
        weekNumber: 7,
        weekTitle: 'Phase 2: Test #2 & Targeted Drills',
        phase: 'bluebook',
        isBuffer: true,
        specialInstructions: '🌿 LIGHT BUFFER DAY: Catch up if behind, or rest if on track. Your call.',
        tasks: [
          { id: 'w7-d5-1', label: 'Light buffer day: Catch up on any pending drills or take restorative rest', subject: 'buffer', topic: 'Flexible Recovery', completed: false },
        ],
      },
      {
        id: '2026-10-24',
        dateStr: '2026-10-24',
        dayOfWeek: 'Sat',
        formattedDate: 'Sat Oct 24',
        weekId: 'week-7',
        weekNumber: 7,
        weekTitle: 'Phase 2: Test #2 & Targeted Drills',
        phase: 'bluebook',
        isBuffer: false,
        specialInstructions: '🎯 LIGHT TARGETED PRACTICE: Only the weak spots still bothering you, nothing new.',
        tasks: [
          { id: 'w7-d6-1', label: 'Light targeted practice: Polish weak spots still bothering you (nothing new)', subject: 'drill', topic: 'Weak Spot Polish', completed: false },
        ],
      },
      {
        id: '2026-10-25',
        dateStr: '2026-10-25',
        dayOfWeek: 'Sun',
        formattedDate: 'Sun Oct 25',
        weekId: 'week-7',
        weekNumber: 7,
        weekTitle: 'Phase 2: Test #2 & Targeted Drills',
        phase: 'bluebook',
        isBuffer: true,
        specialInstructions: '🛑 REST: Full day off, no exceptions.',
        tasks: [
          { id: 'w7-d7-1', label: 'REST: Full day off, no exceptions (Zero studying, complete cognitive reset)', subject: 'buffer', topic: 'Mandatory Rest', completed: false },
        ],
      },
    ],
  },

  // ==========================================================================
  // WEEK 8: Oct 26 to Nov 1 (Phase 2 Week 2: Tests #3 & #4)
  // ==========================================================================
  {
    id: 'week-8',
    title: 'Phase 2 Week 2: Bluebook Tests #3 & #4',
    dateRange: 'Oct 26 to Nov 1',
    subtitle: 'Bluebook Test #3, error autopsy, targeted repair drills, deep grammar cleanup, Test #4 rehearsal, and rest.',
    phase: 'bluebook',
    days: [
      {
        id: '2026-10-26',
        dateStr: '2026-10-26',
        dayOfWeek: 'Mon',
        formattedDate: 'Mon Oct 26',
        weekId: 'week-8',
        weekNumber: 8,
        weekTitle: 'Phase 2: Tests #3 & #4',
        phase: 'bluebook',
        isBuffer: false,
        isTestDay: true,
        specialInstructions: '🥊 BLUEBOOK TEST #3: Full, timed test under same real conditions as Test #2.',
        tasks: [
          { id: 'p2-test-3', label: 'Bluebook Test #3 (full, timed under real exam conditions)', subject: 'test', code: 'MOCK #3', topic: 'Full Timed Test #3', completed: false },
          { id: 'w8-d1-2', label: 'Log section scores in Tracker (rest afterwards)', subject: 'review', topic: 'Score Logging', completed: false },
        ],
      },
      {
        id: '2026-10-27',
        dateStr: '2026-10-27',
        dayOfWeek: 'Tue',
        formattedDate: 'Tue Oct 27',
        weekId: 'week-8',
        weekNumber: 8,
        weekTitle: 'Phase 2: Tests #3 & #4',
        phase: 'bluebook',
        isBuffer: false,
        specialInstructions: '🔍 ERROR-LOG REVIEW: Same process as after Test #2. Dissect every mistake.',
        tasks: [
          { id: 'w8-d2-1', label: 'Error-log review: Dissect every missed question from Test #3', subject: 'review', topic: 'Test #3 Error Dissection', completed: false },
          { id: 'w8-d2-2', label: 'Update takeaway rules in Error Log to prevent recurring traps', subject: 'review', topic: 'Rule Updating', completed: false },
        ],
      },
      {
        id: '2026-10-28',
        dateStr: '2026-10-28',
        dayOfWeek: 'Wed',
        formattedDate: 'Wed Oct 28',
        weekId: 'week-8',
        weekNumber: 8,
        weekTitle: 'Phase 2: Tests #3 & #4',
        phase: 'bluebook',
        isBuffer: false,
        specialInstructions: '🛠️ TARGETED DRILLS: Fix what Test #3 exposed.',
        tasks: [
          { id: 'w8-d3-1', label: 'Targeted drills: Fix the specific weaknesses Test #3 exposed on Khan', subject: 'drill', topic: 'Exposed Weakness Fix', completed: false },
        ],
      },
      {
        id: '2026-10-29',
        dateStr: '2026-10-29',
        dayOfWeek: 'Thu',
        formattedDate: 'Thu Oct 29',
        weekId: 'week-8',
        weekNumber: 8,
        weekTitle: 'Phase 2: Tests #3 & #4',
        phase: 'bluebook',
        isBuffer: false,
        specialInstructions: '🧠 DEEP REVIEW: Punctuation & transitions + Math cleanup. This is your grammar-rules-cold-memorization day, plus any lingering Math weak spots.',
        tasks: [
          { id: 'w8-d4-1', label: 'Cold Grammar Memorization: Punctuation boundaries & transition logic', subject: 'review', topic: 'Cold Grammar Rules', completed: false },
          { id: 'w8-d4-2', label: 'Math cleanup: Polish any lingering math weak spots and formula recalls', subject: 'drill', topic: 'Math Weak Spot Cleanup', completed: false },
        ],
      },
      {
        id: '2026-10-30',
        dateStr: '2026-10-30',
        dayOfWeek: 'Fri',
        formattedDate: 'Fri Oct 30',
        weekId: 'week-8',
        weekNumber: 8,
        weekTitle: 'Phase 2: Tests #3 & #4',
        phase: 'bluebook',
        isBuffer: true,
        specialInstructions: '🌿 LIGHT BUFFER DAY: Same as before, catch up or rest.',
        tasks: [
          { id: 'w8-d5-1', label: 'Light buffer day: Catch up on lingering items or rest before final rehearsal', subject: 'buffer', topic: 'Flexible Recovery', completed: false },
        ],
      },
      {
        id: '2026-10-31',
        dateStr: '2026-10-31',
        dayOfWeek: 'Sat',
        formattedDate: 'Sat Oct 31',
        weekId: 'week-8',
        weekNumber: 8,
        weekTitle: 'Phase 2: Tests #3 & #4',
        phase: 'bluebook',
        isBuffer: false,
        isTestDay: true,
        specialInstructions: '🥊 BLUEBOOK TEST #4: Final full test, timed. Your last full-length rehearsal!',
        tasks: [
          { id: 'p2-test-4', label: 'Bluebook Test #4 (final full test, timed: last full-length rehearsal)', subject: 'test', code: 'MOCK #4', topic: 'Final Full Rehearsal', completed: false },
          { id: 'w8-d6-2', label: 'Log final practice test score & celebrate completing all 4 mocks', subject: 'review', topic: 'Final Mock Score', completed: false },
        ],
      },
      {
        id: '2026-11-01',
        dateStr: '2026-11-01',
        dayOfWeek: 'Sun',
        formattedDate: 'Sun Nov 1',
        weekId: 'week-8',
        weekNumber: 8,
        weekTitle: 'Phase 2: Tests #3 & #4',
        phase: 'bluebook',
        isBuffer: true,
        specialInstructions: '🛑 REST: Full day off.',
        tasks: [
          { id: 'w8-d7-1', label: 'REST: Full day off (mandatory rest after completing all 4 Bluebook tests)', subject: 'buffer', topic: 'Complete Mental Reset', completed: false },
        ],
      },
    ],
  },

  // ==========================================================================
  // WEEK 9: Nov 2 to Nov 7 (Phase 2 Week 3: Peak Taper & Crescent Model Exam Day)
  // ==========================================================================
  {
    id: 'week-9',
    title: 'Phase 2 Week 3: Peak Taper & Crescent Model Exam',
    dateRange: 'Nov 2 to Nov 7',
    subtitle: 'Test-day timing simulation, error notebook taper, logistics verification, bag packing, full rest, and SAT Exam Day!',
    phase: 'bluebook',
    days: [
      {
        id: '2026-11-02',
        dateStr: '2026-11-02',
        dayOfWeek: 'Mon',
        formattedDate: 'Mon Nov 2',
        weekId: 'week-9',
        weekNumber: 9,
        weekTitle: 'Peak Taper & Exam Day',
        phase: 'bluebook',
        isBuffer: false,
        specialInstructions: '⏰ ERROR-LOG + TIMING DRY RUN: Review Test #4 mistakes, AND do a dry run: wake at your real exam wake-up time, eat what you\'ll eat, do a timed module at the exact hour your real test starts.',
        tasks: [
          { id: 'w9-d1-1', label: 'Review Test #4 mistakes and note final error patterns', subject: 'review', topic: 'Test #4 Review', completed: false },
          { id: 'w9-d1-2', label: 'Test-day timing dry run: Wake at exam time, eat test breakfast, timed module at exact test hour', subject: 'drill', topic: 'Timing Simulation Dry Run', completed: false },
        ],
      },
      {
        id: '2026-11-03',
        dateStr: '2026-11-03',
        dayOfWeek: 'Tue',
        formattedDate: 'Tue Nov 3',
        weekId: 'week-9',
        weekNumber: 9,
        weekTitle: 'Peak Taper & Exam Day',
        phase: 'bluebook',
        isBuffer: false,
        specialInstructions: '📖 LIGHT TAPER: Review error notebook + grammar rules. No new practice, just re-read your own collected mistakes across all 4 tests.',
        tasks: [
          { id: 'w9-d2-1', label: 'Light taper: Re-read your own collected mistakes across all 4 tests (no new practice)', subject: 'review', topic: 'Error Notebook Review', completed: false },
          { id: 'w9-d2-2', label: 'Re-read the 6 cold grammar rules and boundary principles', subject: 'review', topic: 'Grammar Rules Review', completed: false },
        ],
      },
      {
        id: '2026-11-04',
        dateStr: '2026-11-04',
        dayOfWeek: 'Wed',
        formattedDate: 'Wed Nov 4',
        weekId: 'week-9',
        weekNumber: 9,
        weekTitle: 'Peak Taper & Exam Day',
        phase: 'bluebook',
        isBuffer: false,
        specialInstructions: '🪪 LIGHT TAPER: Verify Bluebook app, admission ticket, ID. Logistics check, not academic work.',
        tasks: [
          { id: 'w9-d3-1', label: 'Light taper: Verify Bluebook app is updated and test setup is complete', subject: 'logistics', topic: 'Bluebook App Verification', completed: false },
          { id: 'w9-d3-2', label: 'Confirm College Board admission ticket printed and original Smart CNIC / Passport ready', subject: 'logistics', topic: 'Ticket & ID Check', completed: false },
        ],
      },
      {
        id: '2026-11-05',
        dateStr: '2026-11-05',
        dayOfWeek: 'Thu',
        formattedDate: 'Thu Nov 5',
        weekId: 'week-9',
        weekNumber: 9,
        weekTitle: 'Peak Taper & Exam Day',
        phase: 'bluebook',
        isBuffer: false,
        specialInstructions: '🎒 VERY LIGHT REVIEW + PACK BAG: ID/Smart CNIC, laptop, charger, snack, admission ticket, all physically packed tonight.',
        tasks: [
          { id: 'w9-d4-1', label: 'Very light 15-minute formula scan (zero heavy problem solving)', subject: 'review', topic: 'Formula Scan', completed: false },
          { id: 'w9-d4-2', label: 'Pack bag physically: Original ID/CNIC, laptop, charger, mouse, snack, water, admission ticket', subject: 'logistics', topic: 'Physical Bag Packing', completed: false },
        ],
      },
      {
        id: '2026-11-06',
        dateStr: '2026-11-06',
        dayOfWeek: 'Fri',
        formattedDate: 'Fri Nov 6',
        weekId: 'week-9',
        weekNumber: 9,
        weekTitle: 'Peak Taper & Exam Day',
        phase: 'bluebook',
        isBuffer: true,
        specialInstructions: '🛑 FULL REST: Zero studying. Sleep early. This is non-negotiable.',
        tasks: [
          { id: 'w9-d5-1', label: 'FULL REST: Zero studying today, sleep early (non-negotiable neural consolidation)', subject: 'buffer', topic: 'Mandatory Pre-Exam Rest', completed: false },
          { id: 'w9-d5-2', label: 'In bed before 9:30 PM with alarm set for 6:00 AM', subject: 'logistics', topic: 'Early Sleep Protocol', completed: false },
        ],
      },
      {
        id: '2026-11-07',
        dateStr: '2026-11-07',
        dayOfWeek: 'Sat',
        formattedDate: 'Sat Nov 7',
        weekId: 'week-9',
        weekNumber: 'FINAL',
        weekTitle: 'EXAM DAY',
        phase: 'exam',
        isBuffer: false,
        isTestDay: true,
        specialInstructions: '🎯 EXAM DAY: Go get it 🎯 Official Digital SAT at Crescent Model School. Gates close 7:15–7:45 AM sharp!',
        tasks: [
          { id: 'p2-final-1', label: '🎯 SAT EXAM DAY: Arrive at Crescent Model School before 7:30 AM (Gates close strictly at 7:45 AM)', subject: 'test', code: 'EXAM DAY', topic: 'Official Digital SAT Exam', completed: false },
          { id: 'p2-final-2', label: 'Execute 800-Level Strategy: Desmos graphing, boundary precision, calm pacing', subject: 'test', code: 'EXECUTION', topic: '800-Level Strategy Execution', completed: false },
          { id: 'p2-final-3', label: 'Celebrate completing your 57-day Anti-Burnout Journey! 🎉', subject: 'buffer', topic: 'Victory Celebration', completed: false },
        ],
      },
    ],
  },


];
