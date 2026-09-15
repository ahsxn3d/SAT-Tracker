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
    "dateRange": "Sep 14 to Sep 20",
    "subtitle": "Ratios, unit conversions, percentages, data distributions, and early diagnostic baseline.",
    "phase": "foundations",
    "days": [
      {
        "id": "2026-09-14",
        "dayNumber": 1,
        "dateStr": "2026-09-14",
        "dayOfWeek": "Mon",
        "formattedDate": "Mon Sep 14",
        "weekId": "week-1",
        "weekNumber": 1,
        "weekTitle": "Kickoff & Problem Solving Foundations",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 120,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 135,
        "specialInstructions": "Day 1: study 120 min + break 15 min = 135 min total.",
        "tasks": [
          {
            "id": "w1-d1-1",
            "label": "[MATH U3.2] Unit conversion (20 min)",
            "subject": "math",
            "code": "Math U3.2",
            "topic": "Unit conversion",
            "timeSlot": "6:30 PM - 6:50 PM",
            "durationMinutes": 20,
            "completed": false
          },
          {
            "id": "w1-d1-2",
            "label": "[MATH U3.3] Percentages (20 min)",
            "subject": "math",
            "code": "Math U3.3",
            "topic": "Percentages",
            "timeSlot": "6:50 PM - 7:10 PM",
            "durationMinutes": 20,
            "completed": false
          },
          {
            "id": "w1-d1-3",
            "label": "[MATH U3.4] Center, spread, and shape of distributions (20 min)",
            "subject": "math",
            "code": "Math U3.4",
            "topic": "Center, spread, and shape of distributions",
            "timeSlot": "7:10 PM - 7:30 PM",
            "durationMinutes": 20,
            "completed": false
          },
          {
            "id": "w1-d1-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w1-d1-4",
            "label": "[MATH U3.5] Data representations (20 min)",
            "subject": "math",
            "code": "Math U3.5",
            "topic": "Data representations",
            "timeSlot": "7:45 PM - 8:05 PM",
            "durationMinutes": 20,
            "completed": false
          },
          {
            "id": "w1-d1-5",
            "label": "[R&W U3.1] Words in context (20 min)",
            "subject": "rw",
            "code": "R&W U3.1",
            "topic": "Words in context",
            "timeSlot": "8:05 PM - 8:25 PM",
            "durationMinutes": 20,
            "completed": false
          },
          {
            "id": "w1-d1-6",
            "label": "[R&W U3.2] Text structure and purpose (20 min)",
            "subject": "rw",
            "code": "R&W U3.2",
            "topic": "Text structure and purpose",
            "timeSlot": "8:25 PM - 8:45 PM",
            "durationMinutes": 20,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-09-15",
        "dayNumber": 2,
        "dateStr": "2026-09-15",
        "dayOfWeek": "Tue",
        "formattedDate": "Tue Sep 15",
        "weekId": "week-1",
        "weekNumber": 1,
        "weekTitle": "Kickoff & Problem Solving Foundations",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 120,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 135,
        "specialInstructions": "Day 2: study 120 min + break 15 min = 135 min total.",
        "tasks": [
          {
            "id": "w1-d2-1",
            "label": "[MATH U3.6] Scatterplots (20 min)",
            "subject": "math",
            "code": "Math U3.6",
            "topic": "Scatterplots",
            "timeSlot": "6:30 PM - 6:50 PM",
            "durationMinutes": 20,
            "completed": false
          },
          {
            "id": "w1-d2-2",
            "label": "[MATH U3.7] Linear and exponential growth (20 min)",
            "subject": "math",
            "code": "Math U3.7",
            "topic": "Linear and exponential growth",
            "timeSlot": "6:50 PM - 7:10 PM",
            "durationMinutes": 20,
            "completed": false
          },
          {
            "id": "w1-d2-3",
            "label": "[MATH U3.8] Probability and relative frequency (20 min)",
            "subject": "math",
            "code": "Math U3.8",
            "topic": "Probability and relative frequency",
            "timeSlot": "7:10 PM - 7:30 PM",
            "durationMinutes": 20,
            "completed": false
          },
          {
            "id": "w1-d2-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w1-d2-4",
            "label": "[MATH U3.9] Data inferences (20 min)",
            "subject": "math",
            "code": "Math U3.9",
            "topic": "Data inferences",
            "timeSlot": "7:45 PM - 8:05 PM",
            "durationMinutes": 20,
            "completed": false
          },
          {
            "id": "w1-d2-5",
            "label": "[R&W U3.3] Cross-text connections (20 min)",
            "subject": "rw",
            "code": "R&W U3.3",
            "topic": "Cross-text connections",
            "timeSlot": "8:05 PM - 8:25 PM",
            "durationMinutes": 20,
            "completed": false
          },
          {
            "id": "w1-d2-6",
            "label": "[R&W U4.1] Transitions (20 min)",
            "subject": "rw",
            "code": "R&W U4.1",
            "topic": "Transitions",
            "timeSlot": "8:25 PM - 8:45 PM",
            "durationMinutes": 20,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-09-16",
        "dayNumber": 3,
        "dateStr": "2026-09-16",
        "dayOfWeek": "Wed",
        "formattedDate": "Wed Sep 16",
        "weekId": "week-1",
        "weekNumber": 1,
        "weekTitle": "Kickoff & Problem Solving Foundations",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 135,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 165,
        "specialInstructions": "Day 3: study 135 min + break 30 min = 165 min total.",
        "tasks": [
          {
            "id": "w1-d3-1",
            "label": "[MATH U3.10] Evaluating statistical claims (20 min)",
            "subject": "math",
            "code": "Math U3.10",
            "topic": "Evaluating statistical claims",
            "timeSlot": "6:30 PM - 6:50 PM",
            "durationMinutes": 20,
            "completed": false
          },
          {
            "id": "w1-d3-2",
            "label": "[MATH U4.1] Factoring quadratic and polynomial expressions (25 min)",
            "subject": "math",
            "code": "Math U4.1",
            "topic": "Factoring quadratic and polynomial expressions",
            "timeSlot": "6:50 PM - 7:15 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w1-d3-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:15 PM - 7:30 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w1-d3-3",
            "label": "[MATH U4.2] Radicals and rational exponents (25 min)",
            "subject": "math",
            "code": "Math U4.2",
            "topic": "Radicals and rational exponents",
            "timeSlot": "7:30 PM - 7:55 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w1-d3-4",
            "label": "[MATH U4.3] Operations with polynomials (25 min)",
            "subject": "math",
            "code": "Math U4.3",
            "topic": "Operations with polynomials",
            "timeSlot": "7:55 PM - 8:20 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w1-d3-b2",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "8:20 PM - 8:35 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w1-d3-5",
            "label": "[R&W U4.2] Rhetorical synthesis (20 min)",
            "subject": "rw",
            "code": "R&W U4.2",
            "topic": "Rhetorical synthesis",
            "timeSlot": "8:35 PM - 8:55 PM",
            "durationMinutes": 20,
            "completed": false
          },
          {
            "id": "w1-d3-6",
            "label": "[R&W U4.3] Form, structure, and sense (20 min)",
            "subject": "rw",
            "code": "R&W U4.3",
            "topic": "Form, structure, and sense",
            "timeSlot": "8:55 PM - 9:15 PM",
            "durationMinutes": 20,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-09-17",
        "dayNumber": 4,
        "dateStr": "2026-09-17",
        "dayOfWeek": "Thu",
        "formattedDate": "Thu Sep 17",
        "weekId": "week-1",
        "weekNumber": 1,
        "weekTitle": "Kickoff & Problem Solving Foundations",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 117,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 147,
        "specialInstructions": "Day 4: study 117 min + break 30 min = 147 min total.",
        "tasks": [
          {
            "id": "w1-d4-1",
            "label": "[MATH U4.4] Operations with rational expressions (25 min)",
            "subject": "math",
            "code": "Math U4.4",
            "topic": "Operations with rational expressions",
            "timeSlot": "6:30 PM - 6:55 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w1-d4-2",
            "label": "[MATH U4.5] Nonlinear functions (25 min)",
            "subject": "math",
            "code": "Math U4.5",
            "topic": "Nonlinear functions",
            "timeSlot": "6:55 PM - 7:20 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w1-d4-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:20 PM - 7:35 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w1-d4-3",
            "label": "[MATH U4.6] Isolating quantities (25 min)",
            "subject": "math",
            "code": "Math U4.6",
            "topic": "Isolating quantities",
            "timeSlot": "7:35 PM - 8:00 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w1-d4-4",
            "label": "[R&W U4.4] Boundaries (20 min)",
            "subject": "rw",
            "code": "R&W U4.4",
            "topic": "Boundaries",
            "timeSlot": "8:00 PM - 8:20 PM",
            "durationMinutes": 20,
            "completed": false
          },
          {
            "id": "w1-d4-b2",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "8:20 PM - 8:35 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w1-d4-5",
            "label": "[R&W U5.1] Command of textual evidence (22 min)",
            "subject": "rw",
            "code": "R&W U5.1",
            "topic": "Command of textual evidence",
            "timeSlot": "8:35 PM - 8:57 PM",
            "durationMinutes": 22,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-09-18",
        "dayNumber": 5,
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
        "specialInstructions": "Day 5: study 119 min + break 30 min = 149 min total.",
        "tasks": [
          {
            "id": "w1-d5-1",
            "label": "[MATH U4.7] Solving quadratic equations (25 min)",
            "subject": "math",
            "code": "Math U4.7",
            "topic": "Solving quadratic equations",
            "timeSlot": "6:30 PM - 6:55 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w1-d5-2",
            "label": "[MATH U4.8] Linear and quadratic systems (25 min)",
            "subject": "math",
            "code": "Math U4.8",
            "topic": "Linear and quadratic systems",
            "timeSlot": "6:55 PM - 7:20 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w1-d5-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:20 PM - 7:35 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w1-d5-3",
            "label": "[MATH U4.9] Radical, rational, and absolute value equations (25 min)",
            "subject": "math",
            "code": "Math U4.9",
            "topic": "Radical, rational, and absolute value equations",
            "timeSlot": "7:35 PM - 8:00 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w1-d5-4",
            "label": "[R&W U5.2] Command of quantitative evidence (22 min)",
            "subject": "rw",
            "code": "R&W U5.2",
            "topic": "Command of quantitative evidence",
            "timeSlot": "8:00 PM - 8:22 PM",
            "durationMinutes": 22,
            "completed": false
          },
          {
            "id": "w1-d5-b2",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "8:22 PM - 8:37 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w1-d5-5",
            "label": "[R&W U5.3] Central ideas and details (22 min)",
            "subject": "rw",
            "code": "R&W U5.3",
            "topic": "Central ideas and details",
            "timeSlot": "8:37 PM - 8:59 PM",
            "durationMinutes": 22,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-09-19",
        "dayNumber": 6,
        "dateStr": "2026-09-19",
        "dayOfWeek": "Sat",
        "formattedDate": "Sat Sep 19",
        "weekId": "week-1",
        "weekNumber": 1,
        "weekTitle": "Kickoff & Problem Solving Foundations",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 119,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 149,
        "specialInstructions": "Day 6: study 119 min + break 30 min = 149 min total.",
        "tasks": [
          {
            "id": "w1-d6-1",
            "label": "[MATH U4.10] Quadratic and exponential word problems (25 min)",
            "subject": "math",
            "code": "Math U4.10",
            "topic": "Quadratic and exponential word problems",
            "timeSlot": "6:30 PM - 6:55 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w1-d6-2",
            "label": "[MATH U4.11] Quadratic graphs (25 min)",
            "subject": "math",
            "code": "Math U4.11",
            "topic": "Quadratic graphs",
            "timeSlot": "6:55 PM - 7:20 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w1-d6-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:20 PM - 7:35 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w1-d6-3",
            "label": "[MATH U4.12] Exponential graphs (25 min)",
            "subject": "math",
            "code": "Math U4.12",
            "topic": "Exponential graphs",
            "timeSlot": "7:35 PM - 8:00 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w1-d6-4",
            "label": "[R&W U5.4] Inferences (22 min)",
            "subject": "rw",
            "code": "R&W U5.4",
            "topic": "Inferences",
            "timeSlot": "8:00 PM - 8:22 PM",
            "durationMinutes": 22,
            "completed": false
          },
          {
            "id": "w1-d6-b2",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "8:22 PM - 8:37 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w1-d6-5",
            "label": "[R&W U6.1] Words in context (22 min)",
            "subject": "rw",
            "code": "R&W U6.1",
            "topic": "Words in context",
            "timeSlot": "8:37 PM - 8:59 PM",
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
        "weekId": "week-1",
        "weekNumber": 1,
        "weekTitle": "Kickoff & Problem Solving Foundations",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": true,
        "studyTimeMinutes": 144,
        "breakTimeMinutes": 10,
        "totalTimeMinutes": 154,
        "specialInstructions": "EARLY DIAGNOSTIC: Full Bluebook Practice Test #1 (8:00 AM - 10:24 AM). Strictly zero Khan Academy lessons today.",
        "tasks": [
          {
            "id": "w2-diag-1",
            "label": "Full Bluebook Practice Test #1 (8:00 AM - 10:24 AM)",
            "subject": "test",
            "code": "DIAG #1",
            "topic": "Full Timed Diagnostic #1",
            "timeSlot": "8:00 AM - 10:24 AM",
            "durationMinutes": 144,
            "completed": false
          },
          {
            "id": "w2-diag-log",
            "label": "Log initial section scores in Tracker (strictly zero studying after test)",
            "subject": "review",
            "code": "SCORES",
            "topic": "Score Logging",
            "completed": false
          }
        ]
      }
    ]
  },
  {
    "id": "week-2",
    "title": "Week 2: Geometry Foundations & Linear Systems",
    "dateRange": "Sep 21 to Sep 27",
    "subtitle": "Coordinate geometry, trigonometry, linear equations, and standard conventions mastery.",
    "phase": "foundations",
    "days": [
      {
        "id": "2026-09-21",
        "dayNumber": 7,
        "dateStr": "2026-09-21",
        "dayOfWeek": "Mon",
        "formattedDate": "Mon Sep 21",
        "weekId": "week-2",
        "weekNumber": 2,
        "weekTitle": "Geometry Foundations & Linear Systems",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 129,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 159,
        "specialInstructions": "Day 7: study 129 min + break 30 min = 159 min total.",
        "tasks": [
          {
            "id": "w2-d1-1",
            "label": "[MATH U4.13] Polynomial and other nonlinear graphs (25 min)",
            "subject": "math",
            "code": "Math U4.13",
            "topic": "Polynomial and other nonlinear graphs",
            "timeSlot": "6:30 PM - 6:55 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w2-d1-2",
            "label": "[MATH U5.1] Area and volume (30 min)",
            "subject": "math",
            "code": "Math U5.1",
            "topic": "Area and volume",
            "timeSlot": "6:55 PM - 7:25 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w2-d1-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:25 PM - 7:40 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w2-d1-3",
            "label": "[MATH U5.2] Congruence, similarity, and angle relationships (30 min)",
            "subject": "math",
            "code": "Math U5.2",
            "topic": "Congruence, similarity, and angle relationships",
            "timeSlot": "7:40 PM - 8:10 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w2-d1-4",
            "label": "[R&W U6.2] Text structure and purpose (22 min)",
            "subject": "rw",
            "code": "R&W U6.2",
            "topic": "Text structure and purpose",
            "timeSlot": "8:10 PM - 8:32 PM",
            "durationMinutes": 22,
            "completed": false
          },
          {
            "id": "w2-d1-b2",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "8:32 PM - 8:47 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w2-d1-5",
            "label": "[R&W U6.3] Cross-text connections (22 min)",
            "subject": "rw",
            "code": "R&W U6.3",
            "topic": "Cross-text connections",
            "timeSlot": "8:47 PM - 9:09 PM",
            "durationMinutes": 22,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-09-22",
        "dayNumber": 8,
        "dateStr": "2026-09-22",
        "dayOfWeek": "Tue",
        "formattedDate": "Tue Sep 22",
        "weekId": "week-2",
        "weekNumber": 2,
        "weekTitle": "Geometry Foundations & Linear Systems",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 134,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 164,
        "specialInstructions": "Day 8: study 134 min + break 30 min = 164 min total.",
        "tasks": [
          {
            "id": "w2-d2-1",
            "label": "[MATH U5.3] Right triangle trigonometry (30 min)",
            "subject": "math",
            "code": "Math U5.3",
            "topic": "Right triangle trigonometry",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w2-d2-2",
            "label": "[MATH U5.4] Circle theorems (30 min)",
            "subject": "math",
            "code": "Math U5.4",
            "topic": "Circle theorems",
            "timeSlot": "7:00 PM - 7:30 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w2-d2-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w2-d2-3",
            "label": "[MATH U5.5] Unit circle trigonometry (30 min)",
            "subject": "math",
            "code": "Math U5.5",
            "topic": "Unit circle trigonometry",
            "timeSlot": "7:45 PM - 8:15 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w2-d2-4",
            "label": "[R&W U7.1] Transitions (22 min)",
            "subject": "rw",
            "code": "R&W U7.1",
            "topic": "Transitions",
            "timeSlot": "8:15 PM - 8:37 PM",
            "durationMinutes": 22,
            "completed": false
          },
          {
            "id": "w2-d2-b2",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "8:37 PM - 8:52 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w2-d2-5",
            "label": "[R&W U7.2] Rhetorical synthesis (22 min)",
            "subject": "rw",
            "code": "R&W U7.2",
            "topic": "Rhetorical synthesis",
            "timeSlot": "8:52 PM - 9:14 PM",
            "durationMinutes": 22,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-09-23",
        "dayNumber": 9,
        "dateStr": "2026-09-23",
        "dayOfWeek": "Wed",
        "formattedDate": "Wed Sep 23",
        "weekId": "week-2",
        "weekNumber": 2,
        "weekTitle": "Geometry Foundations & Linear Systems",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 124,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 154,
        "specialInstructions": "Day 9: study 124 min + break 30 min = 154 min total.",
        "tasks": [
          {
            "id": "w2-d3-1",
            "label": "[MATH U5.6] Circle equations (30 min)",
            "subject": "math",
            "code": "Math U5.6",
            "topic": "Circle equations",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w2-d3-2",
            "label": "[MATH U6.1] Solving linear equations and inequalities (25 min)",
            "subject": "math",
            "code": "Math U6.1",
            "topic": "Solving linear equations and inequalities",
            "timeSlot": "7:00 PM - 7:25 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w2-d3-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:25 PM - 7:40 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w2-d3-3",
            "label": "[MATH U6.2] Linear equation word problems (25 min)",
            "subject": "math",
            "code": "Math U6.2",
            "topic": "Linear equation word problems",
            "timeSlot": "7:40 PM - 8:05 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w2-d3-4",
            "label": "[R&W U7.3] Form, structure, and sense (22 min)",
            "subject": "rw",
            "code": "R&W U7.3",
            "topic": "Form, structure, and sense",
            "timeSlot": "8:05 PM - 8:27 PM",
            "durationMinutes": 22,
            "completed": false
          },
          {
            "id": "w2-d3-b2",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "8:27 PM - 8:42 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w2-d3-5",
            "label": "[R&W U7.4] Boundaries (22 min)",
            "subject": "rw",
            "code": "R&W U7.4",
            "topic": "Boundaries",
            "timeSlot": "8:42 PM - 9:04 PM",
            "durationMinutes": 22,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-09-24",
        "dayNumber": 10,
        "dateStr": "2026-09-24",
        "dayOfWeek": "Thu",
        "formattedDate": "Thu Sep 24",
        "weekId": "week-2",
        "weekNumber": 2,
        "weekTitle": "Geometry Foundations & Linear Systems",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 125,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 155,
        "specialInstructions": "Day 10: study 125 min + break 30 min = 155 min total.",
        "tasks": [
          {
            "id": "w2-d4-1",
            "label": "[MATH U6.3] Linear relationship word problems (25 min)",
            "subject": "math",
            "code": "Math U6.3",
            "topic": "Linear relationship word problems",
            "timeSlot": "6:30 PM - 6:55 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w2-d4-2",
            "label": "[MATH U6.4] Graphs of linear equations and functions (25 min)",
            "subject": "math",
            "code": "Math U6.4",
            "topic": "Graphs of linear equations and functions",
            "timeSlot": "6:55 PM - 7:20 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w2-d4-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:20 PM - 7:35 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w2-d4-3",
            "label": "[MATH U6.5] Solving systems of linear equations (25 min)",
            "subject": "math",
            "code": "Math U6.5",
            "topic": "Solving systems of linear equations",
            "timeSlot": "7:35 PM - 8:00 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w2-d4-4",
            "label": "[R&W U8.1] Command of textual evidence (25 min)",
            "subject": "rw",
            "code": "R&W U8.1",
            "topic": "Command of textual evidence",
            "timeSlot": "8:00 PM - 8:25 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w2-d4-b2",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "8:25 PM - 8:40 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w2-d4-5",
            "label": "[R&W U8.2] Command of quantitative evidence (25 min)",
            "subject": "rw",
            "code": "R&W U8.2",
            "topic": "Command of quantitative evidence",
            "timeSlot": "8:40 PM - 9:05 PM",
            "durationMinutes": 25,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-09-25",
        "dayNumber": 11,
        "dateStr": "2026-09-25",
        "dayOfWeek": "Fri",
        "formattedDate": "Fri Sep 25",
        "weekId": "week-2",
        "weekNumber": 2,
        "weekTitle": "Geometry Foundations & Linear Systems",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 125,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 155,
        "specialInstructions": "Day 11: study 125 min + break 30 min = 155 min total. DONE: INFORMATION & IDEAS FULLY COMPLETE (Foundations + Medium + Advanced)",
        "tasks": [
          {
            "id": "w2-d5-1",
            "label": "[MATH U6.6] Systems of linear equations word problems (25 min)",
            "subject": "math",
            "code": "Math U6.6",
            "topic": "Systems of linear equations word problems",
            "timeSlot": "6:30 PM - 6:55 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w2-d5-2",
            "label": "[MATH U6.7] Linear inequality word problems (25 min)",
            "subject": "math",
            "code": "Math U6.7",
            "topic": "Linear inequality word problems",
            "timeSlot": "6:55 PM - 7:20 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w2-d5-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:20 PM - 7:35 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w2-d5-3",
            "label": "[MATH U6.8] Graphs of linear systems and inequalities (25 min)",
            "subject": "math",
            "code": "Math U6.8",
            "topic": "Graphs of linear systems and inequalities",
            "timeSlot": "7:35 PM - 8:00 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w2-d5-4",
            "label": "[R&W U8.3] Central ideas and details (25 min)",
            "subject": "rw",
            "code": "R&W U8.3",
            "topic": "Central ideas and details",
            "timeSlot": "8:00 PM - 8:25 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w2-d5-b2",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "8:25 PM - 8:40 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w2-d5-5",
            "label": "[R&W U8.4] Inferences (25 min)",
            "subject": "rw",
            "code": "R&W U8.4",
            "topic": "Inferences",
            "timeSlot": "8:40 PM - 9:05 PM",
            "durationMinutes": 25,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-09-26",
        "dayNumber": 12,
        "dateStr": "2026-09-26",
        "dayOfWeek": "Sat",
        "formattedDate": "Sat Sep 26",
        "weekId": "week-2",
        "weekNumber": 2,
        "weekTitle": "Geometry Foundations & Linear Systems",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 125,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 155,
        "specialInstructions": "Day 12: study 125 min + break 30 min = 155 min total.",
        "tasks": [
          {
            "id": "w2-d6-1",
            "label": "[MATH U7.1] Ratios, rates, and proportions (25 min)",
            "subject": "math",
            "code": "Math U7.1",
            "topic": "Ratios, rates, and proportions",
            "timeSlot": "6:30 PM - 6:55 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w2-d6-2",
            "label": "[MATH U7.2] Unit conversion (25 min)",
            "subject": "math",
            "code": "Math U7.2",
            "topic": "Unit conversion",
            "timeSlot": "6:55 PM - 7:20 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w2-d6-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:20 PM - 7:35 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w2-d6-3",
            "label": "[MATH U7.3] Percentages (25 min)",
            "subject": "math",
            "code": "Math U7.3",
            "topic": "Percentages",
            "timeSlot": "7:35 PM - 8:00 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w2-d6-4",
            "label": "[R&W U9.1] Words in context (25 min)",
            "subject": "rw",
            "code": "R&W U9.1",
            "topic": "Words in context",
            "timeSlot": "8:00 PM - 8:25 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w2-d6-b2",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "8:25 PM - 8:40 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w2-d6-5",
            "label": "[R&W U9.2] Text structure and purpose (25 min)",
            "subject": "rw",
            "code": "R&W U9.2",
            "topic": "Text structure and purpose",
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
        "weekId": "week-2",
        "weekNumber": 2,
        "weekTitle": "Geometry Foundations & Linear Systems",
        "phase": "foundations",
        "isBuffer": true,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "specialInstructions": "Sun Sep 27 -- REST DAY. Zero assigned lessons (Rest & Recharge).",
        "tasks": [
          {
            "id": "w2-buf-sun",
            "label": "REST DAY (no studying) -- Rest & Recharge",
            "subject": "buffer",
            "code": "REST",
            "topic": "Rest & Recharge",
            "completed": false
          }
        ]
      }
    ]
  },
  {
    "id": "week-3",
    "title": "Week 3: Advanced Problem Solving & Challenge Drills",
    "dateRange": "Sep 28 to Oct 4",
    "subtitle": "Percentages, challenge-level reading, and grammar mechanics mastery.",
    "phase": "foundations",
    "days": [
      {
        "id": "2026-09-28",
        "dayNumber": 13,
        "dateStr": "2026-09-28",
        "dayOfWeek": "Mon",
        "formattedDate": "Mon Sep 28",
        "weekId": "week-3",
        "weekNumber": 3,
        "weekTitle": "Advanced Problem Solving & Challenge Drills",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 125,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 155,
        "specialInstructions": "Day 13: study 125 min + break 30 min = 155 min total. DONE: CRAFT & STRUCTURE FULLY COMPLETE (Foundations + Medium + Advanced)",
        "tasks": [
          {
            "id": "w3-d1-1",
            "label": "[MATH U7.4] Center, spread, and shape of distributions (25 min)",
            "subject": "math",
            "code": "Math U7.4",
            "topic": "Center, spread, and shape of distributions",
            "timeSlot": "6:30 PM - 6:55 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w3-d1-2",
            "label": "[MATH U7.5] Data representations (25 min)",
            "subject": "math",
            "code": "Math U7.5",
            "topic": "Data representations",
            "timeSlot": "6:55 PM - 7:20 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w3-d1-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:20 PM - 7:35 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w3-d1-3",
            "label": "[MATH U7.6] Scatterplots (25 min)",
            "subject": "math",
            "code": "Math U7.6",
            "topic": "Scatterplots",
            "timeSlot": "7:35 PM - 8:00 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w3-d1-4",
            "label": "[R&W U9.3] Cross-text connections (25 min)",
            "subject": "rw",
            "code": "R&W U9.3",
            "topic": "Cross-text connections",
            "timeSlot": "8:00 PM - 8:25 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w3-d1-b2",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "8:25 PM - 8:40 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w3-d1-5",
            "label": "[R&W U10.1] Transitions (25 min)",
            "subject": "rw",
            "code": "R&W U10.1",
            "topic": "Transitions",
            "timeSlot": "8:40 PM - 9:05 PM",
            "durationMinutes": 25,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-09-29",
        "dayNumber": 14,
        "dateStr": "2026-09-29",
        "dayOfWeek": "Tue",
        "formattedDate": "Tue Sep 29",
        "weekId": "week-3",
        "weekNumber": 3,
        "weekTitle": "Advanced Problem Solving & Challenge Drills",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 125,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 155,
        "specialInstructions": "Day 14: study 125 min + break 30 min = 155 min total.",
        "tasks": [
          {
            "id": "w3-d2-1",
            "label": "[MATH U7.7] Linear and exponential growth (25 min)",
            "subject": "math",
            "code": "Math U7.7",
            "topic": "Linear and exponential growth",
            "timeSlot": "6:30 PM - 6:55 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w3-d2-2",
            "label": "[MATH U7.8] Probability and relative frequency (25 min)",
            "subject": "math",
            "code": "Math U7.8",
            "topic": "Probability and relative frequency",
            "timeSlot": "6:55 PM - 7:20 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w3-d2-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:20 PM - 7:35 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w3-d2-3",
            "label": "[MATH U7.9] Data inferences (25 min)",
            "subject": "math",
            "code": "Math U7.9",
            "topic": "Data inferences",
            "timeSlot": "7:35 PM - 8:00 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w3-d2-4",
            "label": "[R&W U10.2] Rhetorical synthesis (25 min)",
            "subject": "rw",
            "code": "R&W U10.2",
            "topic": "Rhetorical synthesis",
            "timeSlot": "8:00 PM - 8:25 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w3-d2-b2",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "8:25 PM - 8:40 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w3-d2-5",
            "label": "[R&W U10.3] Form, structure, and sense (25 min)",
            "subject": "rw",
            "code": "R&W U10.3",
            "topic": "Form, structure, and sense",
            "timeSlot": "8:40 PM - 9:05 PM",
            "durationMinutes": 25,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-09-30",
        "dayNumber": 15,
        "dateStr": "2026-09-30",
        "dayOfWeek": "Wed",
        "formattedDate": "Wed Sep 30",
        "weekId": "week-3",
        "weekNumber": 3,
        "weekTitle": "Advanced Problem Solving & Challenge Drills",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 115,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 130,
        "specialInstructions": "Day 15: study 115 min + break 15 min = 130 min total. DONE: EXPRESSION & CONVENTIONS FULLY COMPLETE (Foundations + Medium + Advanced)",
        "tasks": [
          {
            "id": "w3-d3-1",
            "label": "[MATH U7.10] Evaluating statistical claims (25 min)",
            "subject": "math",
            "code": "Math U7.10",
            "topic": "Evaluating statistical claims",
            "timeSlot": "6:30 PM - 6:55 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w3-d3-2",
            "label": "[MATH U8.1] Factoring quadratic and polynomial expressions (30 min)",
            "subject": "math",
            "code": "Math U8.1",
            "topic": "Factoring quadratic and polynomial expressions",
            "timeSlot": "6:55 PM - 7:25 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w3-d3-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:25 PM - 7:40 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w3-d3-3",
            "label": "[R&W U10.4] Boundaries (25 min)",
            "subject": "rw",
            "code": "R&W U10.4",
            "topic": "Boundaries",
            "timeSlot": "7:40 PM - 8:05 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "w3-d3-4",
            "label": "[R&W U11.1] Command of evidence (35 min)",
            "subject": "rw",
            "code": "R&W U11.1",
            "topic": "Command of evidence",
            "timeSlot": "8:05 PM - 8:40 PM",
            "durationMinutes": 35,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-01",
        "dayNumber": 16,
        "dateStr": "2026-10-01",
        "dayOfWeek": "Thu",
        "formattedDate": "Thu Oct 1",
        "weekId": "week-3",
        "weekNumber": 3,
        "weekTitle": "Advanced Problem Solving & Challenge Drills",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 130,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 145,
        "specialInstructions": "Day 16: study 130 min + break 15 min = 145 min total.",
        "tasks": [
          {
            "id": "w3-d4-1",
            "label": "[MATH U8.2] Radicals and rational exponents (30 min)",
            "subject": "math",
            "code": "Math U8.2",
            "topic": "Radicals and rational exponents",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w3-d4-2",
            "label": "[MATH U8.3] Operations with polynomials (30 min)",
            "subject": "math",
            "code": "Math U8.3",
            "topic": "Operations with polynomials",
            "timeSlot": "7:00 PM - 7:30 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w3-d4-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w3-d4-3",
            "label": "[R&W U11.2] Central ideas and details + inferences (35 min)",
            "subject": "rw",
            "code": "R&W U11.2",
            "topic": "Central ideas and details + inferences",
            "timeSlot": "7:45 PM - 8:20 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "w3-d4-4",
            "label": "[R&W U11.3] Words in context (35 min)",
            "subject": "rw",
            "code": "R&W U11.3",
            "topic": "Words in context",
            "timeSlot": "8:20 PM - 8:55 PM",
            "durationMinutes": 35,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-02",
        "dayNumber": 17,
        "dateStr": "2026-10-02",
        "dayOfWeek": "Fri",
        "formattedDate": "Fri Oct 2",
        "weekId": "week-3",
        "weekNumber": 3,
        "weekTitle": "Advanced Problem Solving & Challenge Drills",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 130,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 145,
        "specialInstructions": "Day 17: study 130 min + break 15 min = 145 min total.",
        "tasks": [
          {
            "id": "w3-d5-1",
            "label": "[MATH U8.4] Operations with rational expressions (30 min)",
            "subject": "math",
            "code": "Math U8.4",
            "topic": "Operations with rational expressions",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w3-d5-2",
            "label": "[MATH U8.5] Nonlinear functions (30 min)",
            "subject": "math",
            "code": "Math U8.5",
            "topic": "Nonlinear functions",
            "timeSlot": "7:00 PM - 7:30 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w3-d5-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w3-d5-3",
            "label": "[R&W U11.4] Text structure and purpose + cross-text connections (35 min)",
            "subject": "rw",
            "code": "R&W U11.4",
            "topic": "Text structure and purpose + cross-text connections",
            "timeSlot": "7:45 PM - 8:20 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "w3-d5-4",
            "label": "[R&W U11.5] Boundaries + form, structure, and sense (35 min)",
            "subject": "rw",
            "code": "R&W U11.5",
            "topic": "Boundaries + form, structure, and sense",
            "timeSlot": "8:20 PM - 8:55 PM",
            "durationMinutes": 35,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-03",
        "dayNumber": 18,
        "dateStr": "2026-10-03",
        "dayOfWeek": "Sat",
        "formattedDate": "Sat Oct 3",
        "weekId": "week-3",
        "weekNumber": 3,
        "weekTitle": "Advanced Problem Solving & Challenge Drills",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 140,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 170,
        "specialInstructions": "Day 18: study 140 min + break 30 min = 170 min total. DONE: CHALLENGE UNIT COMPLETE",
        "tasks": [
          {
            "id": "w3-d6-1",
            "label": "[MATH U8.6] Isolating quantities (30 min)",
            "subject": "math",
            "code": "Math U8.6",
            "topic": "Isolating quantities",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w3-d6-2",
            "label": "[MATH U8.7] Solving quadratic equations (30 min)",
            "subject": "math",
            "code": "Math U8.7",
            "topic": "Solving quadratic equations",
            "timeSlot": "7:00 PM - 7:30 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w3-d6-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w3-d6-3",
            "label": "[MATH U8.8] Linear and quadratic systems (30 min)",
            "subject": "math",
            "code": "Math U8.8",
            "topic": "Linear and quadratic systems",
            "timeSlot": "7:45 PM - 8:15 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w3-d6-4",
            "label": "[R&W U11.6] Transitions + rhetorical synthesis (35 min)",
            "subject": "rw",
            "code": "R&W U11.6",
            "topic": "Transitions + rhetorical synthesis",
            "timeSlot": "8:15 PM - 8:50 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "w3-d6-b2",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "8:50 PM - 9:05 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w3-d6-5",
            "label": "[R&W U12.1] Subject-verb agreement (15 min)",
            "subject": "rw",
            "code": "R&W U12.1",
            "topic": "Subject-verb agreement",
            "timeSlot": "9:05 PM - 9:20 PM",
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
        "weekId": "week-3",
        "weekNumber": 3,
        "weekTitle": "Advanced Problem Solving & Challenge Drills",
        "phase": "foundations",
        "isBuffer": true,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "specialInstructions": "Sun Oct 4 -- REST DAY. Zero assigned lessons (Rest & Recharge).",
        "tasks": [
          {
            "id": "w3-buf-sun",
            "label": "REST DAY (no studying) -- Rest & Recharge",
            "subject": "buffer",
            "code": "REST",
            "topic": "Rest & Recharge",
            "completed": false
          }
        ]
      }
    ]
  },
  {
    "id": "week-4",
    "title": "Week 4: Advanced Math Synthesis & All R&W Complete",
    "dateRange": "Oct 5 to Oct 11",
    "subtitle": "R&W syllabus fully complete! Advanced algebra, geometry, and high-difficulty drills.",
    "phase": "foundations",
    "days": [
      {
        "id": "2026-10-05",
        "dayNumber": 19,
        "dateStr": "2026-10-05",
        "dayOfWeek": "Mon",
        "formattedDate": "Mon Oct 5",
        "weekId": "week-4",
        "weekNumber": 4,
        "weekTitle": "Advanced Math Synthesis & All R&W Complete",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 120,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 150,
        "specialInstructions": "Day 19: study 120 min + break 30 min = 150 min total.",
        "tasks": [
          {
            "id": "w4-d1-1",
            "label": "[MATH U8.9] Radical, rational, and absolute value equations (30 min)",
            "subject": "math",
            "code": "Math U8.9",
            "topic": "Radical, rational, and absolute value equations",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w4-d1-2",
            "label": "[MATH U8.10] Quadratic and exponential word problems (30 min)",
            "subject": "math",
            "code": "Math U8.10",
            "topic": "Quadratic and exponential word problems",
            "timeSlot": "7:00 PM - 7:30 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w4-d1-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w4-d1-3",
            "label": "[MATH U8.11] Quadratic graphs (30 min)",
            "subject": "math",
            "code": "Math U8.11",
            "topic": "Quadratic graphs",
            "timeSlot": "7:45 PM - 8:15 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w4-d1-4",
            "label": "[R&W U12.2] Pronoun-antecedent agreement (15 min)",
            "subject": "rw",
            "code": "R&W U12.2",
            "topic": "Pronoun-antecedent agreement",
            "timeSlot": "8:15 PM - 8:30 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w4-d1-b2",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "8:30 PM - 8:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w4-d1-5",
            "label": "[R&W U12.3] Plurals and possessives (15 min)",
            "subject": "rw",
            "code": "R&W U12.3",
            "topic": "Plurals and possessives",
            "timeSlot": "8:45 PM - 9:00 PM",
            "durationMinutes": 15,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-06",
        "dayNumber": 20,
        "dateStr": "2026-10-06",
        "dayOfWeek": "Tue",
        "formattedDate": "Tue Oct 6",
        "weekId": "week-4",
        "weekNumber": 4,
        "weekTitle": "Advanced Math Synthesis & All R&W Complete",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 125,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 155,
        "specialInstructions": "Day 20: study 125 min + break 30 min = 155 min total.",
        "tasks": [
          {
            "id": "w4-d2-1",
            "label": "[MATH U8.12] Exponential graphs (30 min)",
            "subject": "math",
            "code": "Math U8.12",
            "topic": "Exponential graphs",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w4-d2-2",
            "label": "[MATH U8.13] Polynomial and other nonlinear graphs (30 min)",
            "subject": "math",
            "code": "Math U8.13",
            "topic": "Polynomial and other nonlinear graphs",
            "timeSlot": "7:00 PM - 7:30 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w4-d2-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w4-d2-3",
            "label": "[MATH U9.1] Area and volume (35 min)",
            "subject": "math",
            "code": "Math U9.1",
            "topic": "Area and volume",
            "timeSlot": "7:45 PM - 8:20 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "w4-d2-4",
            "label": "[R&W U12.4] Verb forms (15 min)",
            "subject": "rw",
            "code": "R&W U12.4",
            "topic": "Verb forms",
            "timeSlot": "8:20 PM - 8:35 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w4-d2-b2",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "8:35 PM - 8:50 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w4-d2-5",
            "label": "[R&W U12.5] Subject-modifier placement (15 min)",
            "subject": "rw",
            "code": "R&W U12.5",
            "topic": "Subject-modifier placement",
            "timeSlot": "8:50 PM - 9:05 PM",
            "durationMinutes": 15,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-07",
        "dayNumber": 21,
        "dateStr": "2026-10-07",
        "dayOfWeek": "Wed",
        "formattedDate": "Wed Oct 7",
        "weekId": "week-4",
        "weekNumber": 4,
        "weekTitle": "Advanced Math Synthesis & All R&W Complete",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 135,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 165,
        "specialInstructions": "Day 21: study 135 min + break 30 min = 165 min total.",
        "tasks": [
          {
            "id": "w4-d3-1",
            "label": "[MATH U9.2] Congruence, similarity, and angle relationships (35 min)",
            "subject": "math",
            "code": "Math U9.2",
            "topic": "Congruence, similarity, and angle relationships",
            "timeSlot": "6:30 PM - 7:05 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "w4-d3-2",
            "label": "[MATH U9.3] Right triangle trigonometry (35 min)",
            "subject": "math",
            "code": "Math U9.3",
            "topic": "Right triangle trigonometry",
            "timeSlot": "7:05 PM - 7:40 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "w4-d3-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:40 PM - 7:55 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w4-d3-3",
            "label": "[MATH U9.4] Circle theorems (35 min)",
            "subject": "math",
            "code": "Math U9.4",
            "topic": "Circle theorems",
            "timeSlot": "7:55 PM - 8:30 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "w4-d3-4",
            "label": "[R&W U12.6] Linking clauses (15 min)",
            "subject": "rw",
            "code": "R&W U12.6",
            "topic": "Linking clauses",
            "timeSlot": "8:30 PM - 8:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w4-d3-b2",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "8:45 PM - 9:00 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w4-d3-5",
            "label": "[R&W U12.7] Supplements (15 min)",
            "subject": "rw",
            "code": "R&W U12.7",
            "topic": "Supplements",
            "timeSlot": "9:00 PM - 9:15 PM",
            "durationMinutes": 15,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-08",
        "dayNumber": 22,
        "dateStr": "2026-10-08",
        "dayOfWeek": "Thu",
        "formattedDate": "Thu Oct 8",
        "weekId": "week-4",
        "weekNumber": 4,
        "weekTitle": "Advanced Math Synthesis & All R&W Complete",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 115,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 130,
        "specialInstructions": "Day 22: study 115 min + break 15 min = 130 min total. DONE: GRAMMAR PRACTICE COMPLETE. DONE: ALL READING & WRITING COMPLETE",
        "tasks": [
          {
            "id": "w4-d4-1",
            "label": "[MATH U9.5] Unit circle trigonometry (35 min)",
            "subject": "math",
            "code": "Math U9.5",
            "topic": "Unit circle trigonometry",
            "timeSlot": "6:30 PM - 7:05 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "w4-d4-2",
            "label": "[MATH U9.6] Circle equations (35 min)",
            "subject": "math",
            "code": "Math U9.6",
            "topic": "Circle equations",
            "timeSlot": "7:05 PM - 7:40 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "w4-d4-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:40 PM - 7:55 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w4-d4-3",
            "label": "[MATH U10.1] Solving linear equations and inequalities (30 min)",
            "subject": "math",
            "code": "Math U10.1",
            "topic": "Solving linear equations and inequalities",
            "timeSlot": "7:55 PM - 8:25 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w4-d4-4",
            "label": "[R&W U12.8] Punctuation (15 min)",
            "subject": "rw",
            "code": "R&W U12.8",
            "topic": "Punctuation",
            "timeSlot": "8:25 PM - 8:40 PM",
            "durationMinutes": 15,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-09",
        "dayNumber": 23,
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
        "specialInstructions": "Day 23: study 120 min + break 15 min = 135 min total.",
        "tasks": [
          {
            "id": "w4-d5-1",
            "label": "[MATH U10.2] Linear equation word problems (30 min)",
            "subject": "math",
            "code": "Math U10.2",
            "topic": "Linear equation word problems",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w4-d5-2",
            "label": "[MATH U10.3] Linear relationship word problems (30 min)",
            "subject": "math",
            "code": "Math U10.3",
            "topic": "Linear relationship word problems",
            "timeSlot": "7:00 PM - 7:30 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w4-d5-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w4-d5-3",
            "label": "[MATH U10.4] Graphs of linear equations and functions (30 min)",
            "subject": "math",
            "code": "Math U10.4",
            "topic": "Graphs of linear equations and functions",
            "timeSlot": "7:45 PM - 8:15 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w4-d5-4",
            "label": "[MATH U10.5] Solving systems of linear equations (30 min)",
            "subject": "math",
            "code": "Math U10.5",
            "topic": "Solving systems of linear equations",
            "timeSlot": "8:15 PM - 8:45 PM",
            "durationMinutes": 30,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-10",
        "dayNumber": 24,
        "dateStr": "2026-10-10",
        "dayOfWeek": "Sat",
        "formattedDate": "Sat Oct 10",
        "weekId": "week-4",
        "weekNumber": 4,
        "weekTitle": "Advanced Math Synthesis & All R&W Complete",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 120,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 135,
        "specialInstructions": "Day 24: study 120 min + break 15 min = 135 min total. DONE: ALGEBRA FULLY COMPLETE (Foundations + Medium + Advanced)",
        "tasks": [
          {
            "id": "w4-d6-1",
            "label": "[MATH U10.6] Systems of linear equations word problems (30 min)",
            "subject": "math",
            "code": "Math U10.6",
            "topic": "Systems of linear equations word problems",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w4-d6-2",
            "label": "[MATH U10.7] Linear inequality word problems (30 min)",
            "subject": "math",
            "code": "Math U10.7",
            "topic": "Linear inequality word problems",
            "timeSlot": "7:00 PM - 7:30 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w4-d6-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w4-d6-3",
            "label": "[MATH U10.8] Graphs of linear systems and inequalities (30 min)",
            "subject": "math",
            "code": "Math U10.8",
            "topic": "Graphs of linear systems and inequalities",
            "timeSlot": "7:45 PM - 8:15 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w4-d6-4",
            "label": "[MATH U11.1] Ratios, rates, and proportions (30 min)",
            "subject": "math",
            "code": "Math U11.1",
            "topic": "Ratios, rates, and proportions",
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
        "weekId": "week-4",
        "weekNumber": 4,
        "weekTitle": "Advanced Math Synthesis & All R&W Complete",
        "phase": "foundations",
        "isBuffer": true,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "specialInstructions": "Sun Oct 11 -- REST DAY. Zero assigned lessons (Rest & Recharge).",
        "tasks": [
          {
            "id": "w4-buf-sun",
            "label": "REST DAY (no studying) -- Rest & Recharge",
            "subject": "buffer",
            "code": "REST",
            "topic": "Rest & Recharge",
            "completed": false
          }
        ]
      }
    ]
  },
  {
    "id": "week-5",
    "title": "Week 5: Hard Tier Techniques & High-Difficulty Drills",
    "dateRange": "Oct 12 to Oct 18",
    "subtitle": "Advanced problem solving, nonlinear modeling, and high-difficulty algebra.",
    "phase": "foundations",
    "days": [
      {
        "id": "2026-10-12",
        "dayNumber": 25,
        "dateStr": "2026-10-12",
        "dayOfWeek": "Mon",
        "formattedDate": "Mon Oct 12",
        "weekId": "week-5",
        "weekNumber": 5,
        "weekTitle": "Hard Tier Techniques & High-Difficulty Drills",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 120,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 135,
        "specialInstructions": "Day 25: study 120 min + break 15 min = 135 min total.",
        "tasks": [
          {
            "id": "w5-d1-1",
            "label": "[MATH U11.2] Unit conversion (30 min)",
            "subject": "math",
            "code": "Math U11.2",
            "topic": "Unit conversion",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w5-d1-2",
            "label": "[MATH U11.3] Percentages (30 min)",
            "subject": "math",
            "code": "Math U11.3",
            "topic": "Percentages",
            "timeSlot": "7:00 PM - 7:30 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w5-d1-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w5-d1-3",
            "label": "[MATH U11.4] Center, spread, and shape of distributions (30 min)",
            "subject": "math",
            "code": "Math U11.4",
            "topic": "Center, spread, and shape of distributions",
            "timeSlot": "7:45 PM - 8:15 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w5-d1-4",
            "label": "[MATH U11.5] Data representations (30 min)",
            "subject": "math",
            "code": "Math U11.5",
            "topic": "Data representations",
            "timeSlot": "8:15 PM - 8:45 PM",
            "durationMinutes": 30,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-13",
        "dayNumber": 26,
        "dateStr": "2026-10-13",
        "dayOfWeek": "Tue",
        "formattedDate": "Tue Oct 13",
        "weekId": "week-5",
        "weekNumber": 5,
        "weekTitle": "Hard Tier Techniques & High-Difficulty Drills",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 120,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 135,
        "specialInstructions": "Day 26: study 120 min + break 15 min = 135 min total.",
        "tasks": [
          {
            "id": "w5-d2-1",
            "label": "[MATH U11.6] Scatterplots (30 min)",
            "subject": "math",
            "code": "Math U11.6",
            "topic": "Scatterplots",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w5-d2-2",
            "label": "[MATH U11.7] Linear and exponential growth (30 min)",
            "subject": "math",
            "code": "Math U11.7",
            "topic": "Linear and exponential growth",
            "timeSlot": "7:00 PM - 7:30 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w5-d2-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w5-d2-3",
            "label": "[MATH U11.8] Probability and relative frequency (30 min)",
            "subject": "math",
            "code": "Math U11.8",
            "topic": "Probability and relative frequency",
            "timeSlot": "7:45 PM - 8:15 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w5-d2-4",
            "label": "[MATH U11.9] Data inferences (30 min)",
            "subject": "math",
            "code": "Math U11.9",
            "topic": "Data inferences",
            "timeSlot": "8:15 PM - 8:45 PM",
            "durationMinutes": 30,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-14",
        "dayNumber": 27,
        "dateStr": "2026-10-14",
        "dayOfWeek": "Wed",
        "formattedDate": "Wed Oct 14",
        "weekId": "week-5",
        "weekNumber": 5,
        "weekTitle": "Hard Tier Techniques & High-Difficulty Drills",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 135,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 150,
        "specialInstructions": "Day 27: study 135 min + break 15 min = 150 min total. DONE: PROBLEM SOLVING & DATA ANALYSIS FULLY COMPLETE (Foundations + Medium + Advanced)",
        "tasks": [
          {
            "id": "w5-d3-1",
            "label": "[MATH U11.10] Evaluating statistical claims (30 min)",
            "subject": "math",
            "code": "Math U11.10",
            "topic": "Evaluating statistical claims",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w5-d3-2",
            "label": "[MATH U12.1] Factoring quadratic and polynomial expressions (35 min)",
            "subject": "math",
            "code": "Math U12.1",
            "topic": "Factoring quadratic and polynomial expressions",
            "timeSlot": "7:00 PM - 7:35 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "w5-d3-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:35 PM - 7:50 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w5-d3-3",
            "label": "[MATH U12.2] Radicals and rational exponents (35 min)",
            "subject": "math",
            "code": "Math U12.2",
            "topic": "Radicals and rational exponents",
            "timeSlot": "7:50 PM - 8:25 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "w5-d3-4",
            "label": "[MATH U12.3] Operations with polynomials (35 min)",
            "subject": "math",
            "code": "Math U12.3",
            "topic": "Operations with polynomials",
            "timeSlot": "8:25 PM - 9:00 PM",
            "durationMinutes": 35,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-15",
        "dayNumber": 28,
        "dateStr": "2026-10-15",
        "dayOfWeek": "Thu",
        "formattedDate": "Thu Oct 15",
        "weekId": "week-5",
        "weekNumber": 5,
        "weekTitle": "Hard Tier Techniques & High-Difficulty Drills",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 140,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 155,
        "specialInstructions": "Day 28: study 140 min + break 15 min = 155 min total.",
        "tasks": [
          {
            "id": "w5-d4-1",
            "label": "[MATH U12.4] Operations with rational expressions (35 min)",
            "subject": "math",
            "code": "Math U12.4",
            "topic": "Operations with rational expressions",
            "timeSlot": "6:30 PM - 7:05 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "w5-d4-2",
            "label": "[MATH U12.5] Nonlinear functions (35 min)",
            "subject": "math",
            "code": "Math U12.5",
            "topic": "Nonlinear functions",
            "timeSlot": "7:05 PM - 7:40 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "w5-d4-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:40 PM - 7:55 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w5-d4-3",
            "label": "[MATH U12.6] Isolating quantities (35 min)",
            "subject": "math",
            "code": "Math U12.6",
            "topic": "Isolating quantities",
            "timeSlot": "7:55 PM - 8:30 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "w5-d4-4",
            "label": "[MATH U12.7] Solving quadratic equations (35 min)",
            "subject": "math",
            "code": "Math U12.7",
            "topic": "Solving quadratic equations",
            "timeSlot": "8:30 PM - 9:05 PM",
            "durationMinutes": 35,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-16",
        "dayNumber": 29,
        "dateStr": "2026-10-16",
        "dayOfWeek": "Fri",
        "formattedDate": "Fri Oct 16",
        "weekId": "week-5",
        "weekNumber": 5,
        "weekTitle": "Hard Tier Techniques & High-Difficulty Drills",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 140,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 155,
        "specialInstructions": "Day 29: study 140 min + break 15 min = 155 min total.",
        "tasks": [
          {
            "id": "w5-d5-1",
            "label": "[MATH U12.8] Linear and quadratic systems (35 min)",
            "subject": "math",
            "code": "Math U12.8",
            "topic": "Linear and quadratic systems",
            "timeSlot": "6:30 PM - 7:05 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "w5-d5-2",
            "label": "[MATH U12.9] Radical, rational, and absolute value equations (35 min)",
            "subject": "math",
            "code": "Math U12.9",
            "topic": "Radical, rational, and absolute value equations",
            "timeSlot": "7:05 PM - 7:40 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "w5-d5-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:40 PM - 7:55 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w5-d5-3",
            "label": "[MATH U12.10] Quadratic and exponential word problems (35 min)",
            "subject": "math",
            "code": "Math U12.10",
            "topic": "Quadratic and exponential word problems",
            "timeSlot": "7:55 PM - 8:30 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "w5-d5-4",
            "label": "[MATH U12.11] Quadratic graphs (35 min)",
            "subject": "math",
            "code": "Math U12.11",
            "topic": "Quadratic graphs",
            "timeSlot": "8:30 PM - 9:05 PM",
            "durationMinutes": 35,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-17",
        "dayNumber": 30,
        "dateStr": "2026-10-17",
        "dayOfWeek": "Sat",
        "formattedDate": "Sat Oct 17",
        "weekId": "week-5",
        "weekNumber": 5,
        "weekTitle": "Hard Tier Techniques & High-Difficulty Drills",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 110,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 125,
        "specialInstructions": "Day 30: study 110 min + break 15 min = 125 min total. DONE: ADVANCED MATH FULLY COMPLETE (Foundations + Medium + Advanced)",
        "tasks": [
          {
            "id": "w5-d6-1",
            "label": "[MATH U12.12] Exponential graphs (35 min)",
            "subject": "math",
            "code": "Math U12.12",
            "topic": "Exponential graphs",
            "timeSlot": "6:30 PM - 7:05 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "w5-d6-2",
            "label": "[MATH U12.13] Polynomial and other nonlinear graphs (35 min)",
            "subject": "math",
            "code": "Math U12.13",
            "topic": "Polynomial and other nonlinear graphs",
            "timeSlot": "7:05 PM - 7:40 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "w5-d6-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:40 PM - 7:55 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w5-d6-3",
            "label": "[MATH U13.1] Area and volume (40 min)",
            "subject": "math",
            "code": "Math U13.1",
            "topic": "Area and volume",
            "timeSlot": "7:55 PM - 8:35 PM",
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
        "weekId": "week-5",
        "weekNumber": 5,
        "weekTitle": "Hard Tier Techniques & High-Difficulty Drills",
        "phase": "foundations",
        "isBuffer": true,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "specialInstructions": "Sun Oct 18 -- REST DAY. Zero assigned lessons (Rest & Recharge).",
        "tasks": [
          {
            "id": "w5-buf-sun",
            "label": "REST DAY (no studying) -- Rest & Recharge",
            "subject": "buffer",
            "code": "REST",
            "topic": "Rest & Recharge",
            "completed": false
          }
        ]
      }
    ]
  },
  {
    "id": "week-6",
    "title": "Week 6: Phase 1 Finale & Test #2 Calibration",
    "dateRange": "Oct 19 to Oct 25",
    "subtitle": "All 145 Phase 1 skills complete! Full Bluebook Test #2 simulation and targeted error remediation.",
    "phase": "bluebook",
    "days": [
      {
        "id": "2026-10-19",
        "dayNumber": 31,
        "dateStr": "2026-10-19",
        "dayOfWeek": "Mon",
        "formattedDate": "Mon Oct 19",
        "weekId": "week-6",
        "weekNumber": 6,
        "weekTitle": "Phase 1 Finale & Test #2 Calibration",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 120,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 135,
        "specialInstructions": "Day 31: study 120 min + break 15 min = 135 min total.",
        "tasks": [
          {
            "id": "w6-d1-1",
            "label": "[MATH U13.2] Congruence, similarity, and angle relationships (40 min)",
            "subject": "math",
            "code": "Math U13.2",
            "topic": "Congruence, similarity, and angle relationships",
            "timeSlot": "6:30 PM - 7:10 PM",
            "durationMinutes": 40,
            "completed": false
          },
          {
            "id": "w6-d1-2",
            "label": "[MATH U13.3] Right triangle trigonometry (40 min)",
            "subject": "math",
            "code": "Math U13.3",
            "topic": "Right triangle trigonometry",
            "timeSlot": "7:10 PM - 7:50 PM",
            "durationMinutes": 40,
            "completed": false
          },
          {
            "id": "w6-d1-b1",
            "label": "REAL BREAK (15 min)",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:50 PM - 8:05 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "w6-d1-3",
            "label": "[MATH U13.4] Circle theorems (40 min)",
            "subject": "math",
            "code": "Math U13.4",
            "topic": "Circle theorems",
            "timeSlot": "8:05 PM - 8:45 PM",
            "durationMinutes": 40,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-20",
        "dayNumber": 32,
        "dateStr": "2026-10-20",
        "dayOfWeek": "Tue",
        "formattedDate": "Tue Oct 20",
        "weekId": "week-6",
        "weekNumber": 6,
        "weekTitle": "Phase 1 Finale & Test #2 Calibration",
        "phase": "foundations",
        "isBuffer": false,
        "studyTimeMinutes": 80,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 80,
        "specialInstructions": "Day 32: study 80 min + break 15 min = 80 min total. DONE: GEOMETRY & TRIGONOMETRY FULLY COMPLETE (Foundations + Medium + Advanced). DONE: ALL MATH COMPLETE 8:00 AM - 10:24 AM: Full Bluebook Practice Test #2 (real conditions, timed). Evening 6:30 PM: Complete final Phase 1 geometry lessons.",
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
            "id": "w6-d2-1",
            "label": "[MATH U13.5] Unit circle trigonometry (40 min)",
            "subject": "math",
            "code": "Math U13.5",
            "topic": "Unit circle trigonometry",
            "timeSlot": "6:30 PM - 7:10 PM",
            "durationMinutes": 40,
            "completed": false
          },
          {
            "id": "w6-d2-2",
            "label": "[MATH U13.6] Circle equations (40 min)",
            "subject": "math",
            "code": "Math U13.6",
            "topic": "Circle equations",
            "timeSlot": "7:10 PM - 7:50 PM",
            "durationMinutes": 40,
            "completed": false
          },
          {
            "id": "w6-d2-scores",
            "label": "Log initial section scores in Tracker (strictly zero studying after test)",
            "subject": "review",
            "code": "SCORES",
            "topic": "Score Logging",
            "completed": false
          }
        ],
        "isTestDay": true
      },
      {
        "id": "2026-10-21",
        "dateStr": "2026-10-21",
        "dayOfWeek": "Wed",
        "formattedDate": "Wed Oct 21",
        "weekId": "week-6",
        "weekNumber": 6,
        "weekTitle": "Phase 1 Finale & Test #2 Calibration",
        "phase": "bluebook",
        "isBuffer": false,
        "studyTimeMinutes": 45,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 45,
        "specialInstructions": "6:30 PM - 7:15 PM: Error-log review of Test #2 (45 min).",
        "tasks": [
          {
            "id": "w6-d3-1",
            "label": "Error-log review of Test #2 (45 min)",
            "subject": "review",
            "code": "AUTOPSY",
            "topic": "Test #2 Error Log",
            "timeSlot": "6:30 PM - 7:15 PM",
            "durationMinutes": 45,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-22",
        "dateStr": "2026-10-22",
        "dayOfWeek": "Thu",
        "formattedDate": "Thu Oct 22",
        "weekId": "week-6",
        "weekNumber": 6,
        "weekTitle": "Phase 1 Finale & Test #2 Calibration",
        "phase": "bluebook",
        "isBuffer": false,
        "studyTimeMinutes": 75,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 75,
        "specialInstructions": "6:30 PM - 7:45 PM: Targeted Math drills + Desmos speed drills (75 min).",
        "tasks": [
          {
            "id": "w6-d4-1",
            "label": "Targeted Math drills based on Test #2 error log (45 min)",
            "subject": "math",
            "code": "DRILL",
            "topic": "Weak-Spot Math Drills",
            "timeSlot": "6:30 PM - 7:15 PM",
            "durationMinutes": 45,
            "completed": false
          },
          {
            "id": "w6-d4-2",
            "label": "Desmos speed drills: Systems, quadratic roots & slider tricks (30 min)",
            "subject": "math",
            "code": "DESMOS",
            "topic": "Desmos Speed Optimization",
            "timeSlot": "7:15 PM - 7:45 PM",
            "durationMinutes": 30,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-23",
        "dateStr": "2026-10-23",
        "dayOfWeek": "Fri",
        "formattedDate": "Fri Oct 23",
        "weekId": "week-6",
        "weekNumber": 6,
        "weekTitle": "Phase 1 Finale & Test #2 Calibration",
        "phase": "bluebook",
        "isBuffer": false,
        "studyTimeMinutes": 60,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 60,
        "specialInstructions": "6:30 PM - 7:30 PM: Targeted R&W drills, punctuation/grammar review (60 min).",
        "tasks": [
          {
            "id": "w6-d5-1",
            "label": "Targeted R&W drills, punctuation/grammar review (60 min)",
            "subject": "rw",
            "code": "RW DRILL",
            "topic": "Grammar & Transition Refinement",
            "timeSlot": "6:30 PM - 7:30 PM",
            "durationMinutes": 60,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-24",
        "dateStr": "2026-10-24",
        "dayOfWeek": "Sat",
        "formattedDate": "Sat Oct 24",
        "weekId": "week-6",
        "weekNumber": 6,
        "weekTitle": "Phase 1 Finale & Test #2 Calibration",
        "phase": "bluebook",
        "isBuffer": false,
        "studyTimeMinutes": 45,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 45,
        "specialInstructions": "6:30 PM - 7:15 PM: Light targeted practice on remaining weak spots (45 min).",
        "tasks": [
          {
            "id": "w6-d6-1",
            "label": "Light targeted practice on remaining weak spots (45 min)",
            "subject": "drill",
            "code": "REVIEW",
            "topic": "Week-Spot Consolidation",
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
        "weekId": "week-6",
        "weekNumber": 6,
        "weekTitle": "Phase 1 Finale & Test #2 Calibration",
        "phase": "bluebook",
        "isBuffer": true,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "specialInstructions": "Sun Oct 25 -- REST DAY. No studying. Full cognitive reset before Test #3 week.",
        "tasks": [
          {
            "id": "w6-buf-sun",
            "label": "Sun Oct 25 -- REST DAY: Zero assigned lessons (Rest & Recharge)",
            "subject": "buffer",
            "code": "REST",
            "topic": "Rest & Recharge",
            "completed": false
          }
        ]
      }
    ]
  },
{
    "id": "week-7",
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
        "weekId": "week-7",
        "weekNumber": 7,
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
        "weekId": "week-7",
        "weekNumber": 7,
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
        "weekId": "week-7",
        "weekNumber": 7,
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
        "weekId": "week-7",
        "weekNumber": 7,
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
        "weekId": "week-7",
        "weekNumber": 7,
        "weekTitle": "Phase 2: Test #3 & Hard-Tier Simulation",
        "phase": "bluebook",
        "isBuffer": true,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "specialInstructions": "Light buffer - catch up or rest, your choice.",
        "tasks": [
          {
            "id": "w8-d5-1",
            "label": "Light buffer - catch up or rest, your choice",
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
        "weekId": "week-7",
        "weekNumber": 7,
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
        "weekId": "week-7",
        "weekNumber": 7,
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
            "label": "Sun Nov 1 -- REST DAY: Full mental rest before exam week taper",
            "subject": "buffer",
            "topic": "Pre-Exam Reset",
            "completed": false
          }
        ]
      }
    ]
  },
  {
    "id": "week-8",
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
        "weekId": "week-8",
        "weekNumber": 8,
        "weekTitle": "Phase 2: Final Taper, Packout & Exam Day",
        "phase": "exam",
        "isBuffer": false,
        "studyTimeMinutes": 45,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 45,
        "specialInstructions": "6:30 PM - 7:15 PM: Error-log review of Test #4 + simulate exact test-day timing (45 min).",
        "tasks": [
          {
            "id": "w9-d1-2",
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
        "weekId": "week-8",
        "weekNumber": 8,
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
        "weekId": "week-8",
        "weekNumber": 8,
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
        "weekId": "week-8",
        "weekNumber": 8,
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
        "weekId": "week-8",
        "weekNumber": 8,
        "weekTitle": "Phase 2: Final Taper, Packout & Exam Day",
        "phase": "exam",
        "isBuffer": true,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "specialInstructions": "FULL REST. No studying. Sleep early.",
        "tasks": [
          {
            "id": "w9-d5-1",
            "label": "FULL REST. No studying. Sleep early.",
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
        "weekId": "week-8",
        "weekNumber": 8,
        "weekTitle": "Phase 2: Final Taper, Packout & Exam Day",
        "phase": "exam",
        "isBuffer": false,
        "isTestDay": true,
        "studyTimeMinutes": 144,
        "breakTimeMinutes": 10,
        "totalTimeMinutes": 154,
        "specialInstructions": "Sat Nov 7 -- EXAM DAY: Follow your official admission ticket reporting time exactly. Crescent Model School, Shadman Lahore.",
        "tasks": [
          {
            "id": "sat-exam-day",
            "label": "Sat Nov 7 -- EXAM DAY: Follow your official admission ticket reporting time exactly",
            "subject": "test",
            "code": "EXAM DAY",
            "topic": "Crescent Model School Official Exam",
            "timeSlot": "Official reporting time",
            "durationMinutes": 144,
            "completed": false
          }
        ]
      }
    ]
  }
];
