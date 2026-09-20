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
    "title": "Week 1: Problem Solving & Advanced Math Foundations",
    "dateRange": "Sep 14 to Sep 20",
    "subtitle": "Math Units 3 & 4 Foundations • Percentages, distributions, quadratic factoring & exponential models.",
    "phase": "foundations",
    "days": [
      {
        "id": "2026-09-14",
        "dateStr": "2026-09-14",
        "dayOfWeek": "Mon",
        "formattedDate": "Mon Sep 14",
        "dayNumber": 1,
        "weekId": "week-1",
        "weekNumber": 1,
        "weekTitle": "Problem Solving & Advanced Math Foundations",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 80,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 95,
        "tasks": [
          {
            "id": "task-2026-09-14-1",
            "label": "[MATH U3.2] Unit conversion",
            "subject": "math",
            "code": "Math U3.2",
            "topic": "Unit conversion",
            "timeSlot": "6:30 PM - 6:50 PM",
            "durationMinutes": 20,
            "completed": false
          },
          {
            "id": "task-2026-09-14-2",
            "label": "[MATH U3.3] Percentages",
            "subject": "math",
            "code": "Math U3.3",
            "topic": "Percentages",
            "timeSlot": "6:50 PM - 7:10 PM",
            "durationMinutes": 20,
            "completed": false
          },
          {
            "id": "task-2026-09-14-3",
            "label": "[MATH U3.4] Center, spread, and shape of distributions",
            "subject": "math",
            "code": "Math U3.4",
            "topic": "Center, spread, and shape of distributions",
            "timeSlot": "7:10 PM - 7:30 PM",
            "durationMinutes": 20,
            "completed": false
          },
          {
            "id": "break-2026-09-14-4",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-09-14-5",
            "label": "[MATH U3.5] Data representations",
            "subject": "math",
            "code": "Math U3.5",
            "topic": "Data representations",
            "timeSlot": "7:45 PM - 8:05 PM",
            "durationMinutes": 20,
            "completed": false
          }
        ],
        "specialInstructions": "Complete assigned Mon study tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-09-15",
        "dateStr": "2026-09-15",
        "dayOfWeek": "Tue",
        "formattedDate": "Tue Sep 15",
        "dayNumber": 2,
        "weekId": "week-1",
        "weekNumber": 1,
        "weekTitle": "Problem Solving & Advanced Math Foundations",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 80,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 95,
        "tasks": [
          {
            "id": "task-2026-09-15-1",
            "label": "[MATH U3.6] Scatterplots",
            "subject": "math",
            "code": "Math U3.6",
            "topic": "Scatterplots",
            "timeSlot": "6:30 PM - 6:50 PM",
            "durationMinutes": 20,
            "completed": false
          },
          {
            "id": "task-2026-09-15-2",
            "label": "[MATH U3.7] Linear and exponential growth",
            "subject": "math",
            "code": "Math U3.7",
            "topic": "Linear and exponential growth",
            "timeSlot": "6:50 PM - 7:10 PM",
            "durationMinutes": 20,
            "completed": false
          },
          {
            "id": "task-2026-09-15-3",
            "label": "[MATH U3.8] Probability and relative frequency",
            "subject": "math",
            "code": "Math U3.8",
            "topic": "Probability and relative frequency",
            "timeSlot": "7:10 PM - 7:30 PM",
            "durationMinutes": 20,
            "completed": false
          },
          {
            "id": "break-2026-09-15-4",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-09-15-5",
            "label": "[MATH U3.9] Data inferences",
            "subject": "math",
            "code": "Math U3.9",
            "topic": "Data inferences",
            "timeSlot": "7:45 PM - 8:05 PM",
            "durationMinutes": 20,
            "completed": false
          }
        ],
        "specialInstructions": "Complete assigned Tue study tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-09-16",
        "dateStr": "2026-09-16",
        "dayOfWeek": "Wed",
        "formattedDate": "Wed Sep 16",
        "dayNumber": 3,
        "weekId": "week-1",
        "weekNumber": 1,
        "weekTitle": "Problem Solving & Advanced Math Foundations",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 95,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 110,
        "tasks": [
          {
            "id": "task-2026-09-16-1",
            "label": "[MATH U3.10] Evaluating statistical claims",
            "subject": "math",
            "code": "Math U3.10",
            "topic": "Evaluating statistical claims",
            "timeSlot": "6:30 PM - 6:50 PM",
            "durationMinutes": 20,
            "completed": false
          },
          {
            "id": "task-2026-09-16-2",
            "label": "[MATH U4.1] Factoring quadratic and polynomial expressions",
            "subject": "math",
            "code": "Math U4.1",
            "topic": "Factoring quadratic and polynomial expressions",
            "timeSlot": "6:50 PM - 7:15 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "break-2026-09-16-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:15 PM - 7:30 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-09-16-4",
            "label": "[MATH U4.2] Radicals and rational exponents",
            "subject": "math",
            "code": "Math U4.2",
            "topic": "Radicals and rational exponents",
            "timeSlot": "7:30 PM - 7:55 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-09-16-5",
            "label": "[MATH U4.3] Operations with polynomials",
            "subject": "math",
            "code": "Math U4.3",
            "topic": "Operations with polynomials",
            "timeSlot": "7:55 PM - 8:20 PM",
            "durationMinutes": 25,
            "completed": false
          }
        ],
        "specialInstructions": "Complete assigned Wed study tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-09-17",
        "dateStr": "2026-09-17",
        "dayOfWeek": "Thu",
        "formattedDate": "Thu Sep 17",
        "dayNumber": 4,
        "weekId": "week-1",
        "weekNumber": 1,
        "weekTitle": "Problem Solving & Advanced Math Foundations",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 75,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 90,
        "tasks": [
          {
            "id": "task-2026-09-17-1",
            "label": "[MATH U4.4] Operations with rational expressions",
            "subject": "math",
            "code": "Math U4.4",
            "topic": "Operations with rational expressions",
            "timeSlot": "6:30 PM - 6:55 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-09-17-2",
            "label": "[MATH U4.5] Nonlinear functions",
            "subject": "math",
            "code": "Math U4.5",
            "topic": "Nonlinear functions",
            "timeSlot": "6:55 PM - 7:20 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "break-2026-09-17-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:20 PM - 7:35 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-09-17-4",
            "label": "[MATH U4.6] Isolating quantities",
            "subject": "math",
            "code": "Math U4.6",
            "topic": "Isolating quantities",
            "timeSlot": "7:35 PM - 8:00 PM",
            "durationMinutes": 25,
            "completed": false
          }
        ],
        "specialInstructions": "Complete assigned Thu study tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-09-18",
        "dateStr": "2026-09-18",
        "dayOfWeek": "Fri",
        "formattedDate": "Fri Sep 18",
        "dayNumber": 5,
        "weekId": "week-1",
        "weekNumber": 1,
        "weekTitle": "Problem Solving & Advanced Math Foundations",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 75,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 90,
        "tasks": [
          {
            "id": "task-2026-09-18-1",
            "label": "[MATH U4.7] Solving quadratic equations",
            "subject": "math",
            "code": "Math U4.7",
            "topic": "Solving quadratic equations",
            "timeSlot": "6:30 PM - 6:55 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-09-18-2",
            "label": "[MATH U4.8] Linear and quadratic systems",
            "subject": "math",
            "code": "Math U4.8",
            "topic": "Linear and quadratic systems",
            "timeSlot": "6:55 PM - 7:20 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "break-2026-09-18-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:20 PM - 7:35 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-09-18-4",
            "label": "[MATH U4.9] Radical, rational, and absolute value equations",
            "subject": "math",
            "code": "Math U4.9",
            "topic": "Radical, rational, and absolute value equations",
            "timeSlot": "7:35 PM - 8:00 PM",
            "durationMinutes": 25,
            "completed": false
          }
        ],
        "specialInstructions": "Complete assigned Fri study tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-09-19",
        "dateStr": "2026-09-19",
        "dayOfWeek": "Sat",
        "formattedDate": "Sat Sep 19",
        "dayNumber": 6,
        "weekId": "week-1",
        "weekNumber": 1,
        "weekTitle": "Problem Solving & Advanced Math Foundations",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 75,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 90,
        "tasks": [
          {
            "id": "task-2026-09-19-1",
            "label": "[MATH U4.10] Quadratic and exponential word problems",
            "subject": "math",
            "code": "Math U4.10",
            "topic": "Quadratic and exponential word problems",
            "timeSlot": "6:30 PM - 6:55 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-09-19-2",
            "label": "[MATH U4.11] Quadratic graphs",
            "subject": "math",
            "code": "Math U4.11",
            "topic": "Quadratic graphs",
            "timeSlot": "6:55 PM - 7:20 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "break-2026-09-19-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:20 PM - 7:35 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-09-19-4",
            "label": "[MATH U4.12] Exponential graphs",
            "subject": "math",
            "code": "Math U4.12",
            "topic": "Exponential graphs",
            "timeSlot": "7:35 PM - 8:00 PM",
            "durationMinutes": 25,
            "completed": false
          }
        ],
        "specialInstructions": "Complete assigned Sat study tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-09-20",
        "dateStr": "2026-09-20",
        "dayOfWeek": "Sun",
        "formattedDate": "Sun Sep 20",
        "weekId": "week-1",
        "weekNumber": 1,
        "weekTitle": "Problem Solving & Advanced Math Foundations",
        "phase": "foundations",
        "isBuffer": true,
        "isTestDay": false,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "tasks": [
          {
            "id": "rest-2026-09-20",
            "label": "Full Rest & Cognitive Recovery • Zero Assigned Study",
            "subject": "buffer",
            "code": "REST",
            "topic": "Cognitive Recovery",
            "completed": false
          }
        ],
        "specialInstructions": "Guaranteed Rest Day: Zero assigned lessons. Allow mental recharge, sleep, and physical recovery."
      }
    ]
  },
  {
    "id": "week-2",
    "title": "Week 2: Foundations Mastery & Test #1 Diagnostic Checkpoint",
    "dateRange": "Sep 21 to Sep 27",
    "subtitle": "Complete Foundations Math (U4-U6), Thu Sep 24 Test #1 Checkpoint, and launch Medium Tier.",
    "phase": "foundations",
    "days": [
      {
        "id": "2026-09-21",
        "dateStr": "2026-09-21",
        "dayOfWeek": "Mon",
        "formattedDate": "Mon Sep 21",
        "dayNumber": 7,
        "weekId": "week-2",
        "weekNumber": 2,
        "weekTitle": "Foundations Mastery & Test #1 Diagnostic Checkpoint",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 85,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 100,
        "tasks": [
          {
            "id": "task-2026-09-21-1",
            "label": "[MATH U4.13] Polynomial and other nonlinear graphs",
            "subject": "math",
            "code": "Math U4.13",
            "topic": "Polynomial and other nonlinear graphs",
            "timeSlot": "6:30 PM - 6:55 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-09-21-2",
            "label": "[MATH U5.1] Area and volume",
            "subject": "math",
            "code": "Math U5.1",
            "topic": "Area and volume",
            "timeSlot": "6:55 PM - 7:25 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "break-2026-09-21-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:25 PM - 7:40 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-09-21-4",
            "label": "[MATH U5.2] Congruence, similarity, and angle relationships",
            "subject": "math",
            "code": "Math U5.2",
            "topic": "Congruence, similarity, and angle relationships",
            "timeSlot": "7:40 PM - 8:10 PM",
            "durationMinutes": 30,
            "completed": false
          }
        ],
        "specialInstructions": "Complete assigned Mon study tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-09-22",
        "dateStr": "2026-09-22",
        "dayOfWeek": "Tue",
        "formattedDate": "Tue Sep 22",
        "dayNumber": 8,
        "weekId": "week-2",
        "weekNumber": 2,
        "weekTitle": "Foundations Mastery & Test #1 Diagnostic Checkpoint",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 90,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 105,
        "tasks": [
          {
            "id": "task-2026-09-22-1",
            "label": "[MATH U5.3] Right triangle trigonometry",
            "subject": "math",
            "code": "Math U5.3",
            "topic": "Right triangle trigonometry",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-09-22-2",
            "label": "[MATH U5.4] Circle theorems",
            "subject": "math",
            "code": "Math U5.4",
            "topic": "Circle theorems",
            "timeSlot": "7:00 PM - 7:30 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "break-2026-09-22-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-09-22-4",
            "label": "[MATH U5.5] Unit circle trigonometry",
            "subject": "math",
            "code": "Math U5.5",
            "topic": "Unit circle trigonometry",
            "timeSlot": "7:45 PM - 8:15 PM",
            "durationMinutes": 30,
            "completed": false
          }
        ],
        "specialInstructions": "Complete assigned Tue study tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-09-23",
        "dateStr": "2026-09-23",
        "dayOfWeek": "Wed",
        "formattedDate": "Wed Sep 23",
        "dayNumber": 9,
        "weekId": "week-2",
        "weekNumber": 2,
        "weekTitle": "Foundations Mastery & Test #1 Diagnostic Checkpoint",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 80,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 95,
        "tasks": [
          {
            "id": "task-2026-09-23-1",
            "label": "[MATH U5.6] Circle equations",
            "subject": "math",
            "code": "Math U5.6",
            "topic": "Circle equations",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-09-23-2",
            "label": "[MATH U6.1] Solving linear equations and inequalities",
            "subject": "math",
            "code": "Math U6.1",
            "topic": "Solving linear equations and inequalities",
            "timeSlot": "7:00 PM - 7:25 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "break-2026-09-23-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:25 PM - 7:40 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-09-23-4",
            "label": "[MATH U6.2] Linear equation word problems",
            "subject": "math",
            "code": "Math U6.2",
            "topic": "Linear equation word problems",
            "timeSlot": "7:40 PM - 8:05 PM",
            "durationMinutes": 25,
            "completed": false
          }
        ],
        "specialInstructions": "Complete assigned Wed study tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-09-24",
        "dateStr": "2026-09-24",
        "dayOfWeek": "Thu",
        "formattedDate": "Thu Sep 24",
        "weekId": "week-2",
        "weekNumber": 2,
        "weekTitle": "Foundations Mastery & Test #1 Diagnostic Checkpoint",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": true,
        "studyTimeMinutes": 144,
        "breakTimeMinutes": 10,
        "totalTimeMinutes": 154,
        "tasks": [
          {
            "id": "bluebook-test-1",
            "label": "Full Bluebook Practice Test #1 (144 min)",
            "subject": "test",
            "code": "TEST #1",
            "topic": "Full Bluebook Practice Test #1",
            "timeSlot": "8:00 AM - 10:24 AM",
            "durationMinutes": 144,
            "completed": false
          }
        ],
        "specialInstructions": "Full-length timed Bluebook practice test under strict testing conditions. Start promptly at 8:00 AM. Log all missed questions immediately into the Error Log."
      },
      {
        "id": "2026-09-25",
        "dateStr": "2026-09-25",
        "dayOfWeek": "Fri",
        "formattedDate": "Fri Sep 25",
        "dayNumber": 10,
        "weekId": "week-2",
        "weekNumber": 2,
        "weekTitle": "Foundations Mastery & Test #1 Diagnostic Checkpoint",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 119,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 149,
        "tasks": [
          {
            "id": "task-2026-09-25-1",
            "label": "[MATH U6.3] Linear relationship word problems",
            "subject": "math",
            "code": "Math U6.3",
            "topic": "Linear relationship word problems",
            "timeSlot": "6:30 PM - 6:55 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-09-25-2",
            "label": "[MATH U6.4] Graphs of linear equations and functions",
            "subject": "math",
            "code": "Math U6.4",
            "topic": "Graphs of linear equations and functions",
            "timeSlot": "6:55 PM - 7:20 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "break-2026-09-25-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:20 PM - 7:35 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-09-25-4",
            "label": "[MATH U6.5] Solving systems of linear equations",
            "subject": "math",
            "code": "Math U6.5",
            "topic": "Solving systems of linear equations",
            "timeSlot": "7:35 PM - 8:00 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-09-25-5",
            "label": "[R&W U5.1] Command of textual evidence",
            "subject": "rw",
            "code": "R&W U5.1",
            "topic": "Command of textual evidence",
            "timeSlot": "8:00 PM - 8:22 PM",
            "durationMinutes": 22,
            "completed": false
          },
          {
            "id": "break-2026-09-25-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "8:22 PM - 8:37 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-09-25-7",
            "label": "[R&W U5.2] Command of quantitative evidence",
            "subject": "rw",
            "code": "R&W U5.2",
            "topic": "Command of quantitative evidence",
            "timeSlot": "8:37 PM - 8:59 PM",
            "durationMinutes": 22,
            "completed": false
          }
        ],
        "specialInstructions": "Complete assigned Fri study tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-09-26",
        "dateStr": "2026-09-26",
        "dayOfWeek": "Sat",
        "formattedDate": "Sat Sep 26",
        "dayNumber": 11,
        "weekId": "week-2",
        "weekNumber": 2,
        "weekTitle": "Foundations Mastery & Test #1 Diagnostic Checkpoint",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 119,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 149,
        "tasks": [
          {
            "id": "task-2026-09-26-1",
            "label": "[MATH U6.6] Systems of linear equations word problems",
            "subject": "math",
            "code": "Math U6.6",
            "topic": "Systems of linear equations word problems",
            "timeSlot": "6:30 PM - 6:55 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-09-26-2",
            "label": "[MATH U6.7] Linear inequality word problems",
            "subject": "math",
            "code": "Math U6.7",
            "topic": "Linear inequality word problems",
            "timeSlot": "6:55 PM - 7:20 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "break-2026-09-26-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:20 PM - 7:35 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-09-26-4",
            "label": "[MATH U6.8] Graphs of linear systems and inequalities",
            "subject": "math",
            "code": "Math U6.8",
            "topic": "Graphs of linear systems and inequalities",
            "timeSlot": "7:35 PM - 8:00 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-09-26-5",
            "label": "[R&W U5.3] Central ideas and details",
            "subject": "rw",
            "code": "R&W U5.3",
            "topic": "Central ideas and details",
            "timeSlot": "8:00 PM - 8:22 PM",
            "durationMinutes": 22,
            "completed": false
          },
          {
            "id": "break-2026-09-26-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "8:22 PM - 8:37 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-09-26-7",
            "label": "[R&W U5.4] Inferences",
            "subject": "rw",
            "code": "R&W U5.4",
            "topic": "Inferences",
            "timeSlot": "8:37 PM - 8:59 PM",
            "durationMinutes": 22,
            "completed": false
          }
        ],
        "specialInstructions": "Complete assigned Sat study tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-09-27",
        "dateStr": "2026-09-27",
        "dayOfWeek": "Sun",
        "formattedDate": "Sun Sep 27",
        "weekId": "week-2",
        "weekNumber": 2,
        "weekTitle": "Foundations Mastery & Test #1 Diagnostic Checkpoint",
        "phase": "foundations",
        "isBuffer": true,
        "isTestDay": false,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "tasks": [
          {
            "id": "rest-2026-09-27",
            "label": "Full Rest & Cognitive Recovery • Zero Assigned Study",
            "subject": "buffer",
            "code": "REST",
            "topic": "Cognitive Recovery",
            "completed": false
          }
        ],
        "specialInstructions": "Guaranteed Rest Day: Zero assigned lessons. Allow mental recharge, sleep, and physical recovery."
      }
    ]
  },
  {
    "id": "week-3",
    "title": "Week 3: Medium Tier Acceleration (Math U7 & U8, R&W U6 & U7)",
    "dateRange": "Sep 28 to Oct 04",
    "subtitle": "Ratios, percent growth, quadratic systems, transitions, boundaries & rhetorical synthesis.",
    "phase": "foundations",
    "days": [
      {
        "id": "2026-09-28",
        "dateStr": "2026-09-28",
        "dayOfWeek": "Mon",
        "formattedDate": "Mon Sep 28",
        "dayNumber": 12,
        "weekId": "week-3",
        "weekNumber": 3,
        "weekTitle": "Medium Tier Acceleration (Math U7 & U8, R&W U6 & U7)",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 119,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 149,
        "tasks": [
          {
            "id": "task-2026-09-28-1",
            "label": "[MATH U7.1] Ratios, rates, and proportions",
            "subject": "math",
            "code": "Math U7.1",
            "topic": "Ratios, rates, and proportions",
            "timeSlot": "6:30 PM - 6:55 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-09-28-2",
            "label": "[MATH U7.2] Unit conversion",
            "subject": "math",
            "code": "Math U7.2",
            "topic": "Unit conversion",
            "timeSlot": "6:55 PM - 7:20 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "break-2026-09-28-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:20 PM - 7:35 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-09-28-4",
            "label": "[MATH U7.3] Percentages",
            "subject": "math",
            "code": "Math U7.3",
            "topic": "Percentages",
            "timeSlot": "7:35 PM - 8:00 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-09-28-5",
            "label": "[R&W U6.1] Words in context",
            "subject": "rw",
            "code": "R&W U6.1",
            "topic": "Words in context",
            "timeSlot": "8:00 PM - 8:22 PM",
            "durationMinutes": 22,
            "completed": false
          },
          {
            "id": "break-2026-09-28-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "8:22 PM - 8:37 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-09-28-7",
            "label": "[R&W U6.2] Text structure and purpose",
            "subject": "rw",
            "code": "R&W U6.2",
            "topic": "Text structure and purpose",
            "timeSlot": "8:37 PM - 8:59 PM",
            "durationMinutes": 22,
            "completed": false
          }
        ],
        "specialInstructions": "Complete assigned Mon study tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-09-29",
        "dateStr": "2026-09-29",
        "dayOfWeek": "Tue",
        "formattedDate": "Tue Sep 29",
        "dayNumber": 13,
        "weekId": "week-3",
        "weekNumber": 3,
        "weekTitle": "Medium Tier Acceleration (Math U7 & U8, R&W U6 & U7)",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 119,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 149,
        "tasks": [
          {
            "id": "task-2026-09-29-1",
            "label": "[MATH U7.4] Center, spread, and shape of distributions",
            "subject": "math",
            "code": "Math U7.4",
            "topic": "Center, spread, and shape of distributions",
            "timeSlot": "6:30 PM - 6:55 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-09-29-2",
            "label": "[MATH U7.5] Data representations",
            "subject": "math",
            "code": "Math U7.5",
            "topic": "Data representations",
            "timeSlot": "6:55 PM - 7:20 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "break-2026-09-29-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:20 PM - 7:35 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-09-29-4",
            "label": "[MATH U7.6] Scatterplots",
            "subject": "math",
            "code": "Math U7.6",
            "topic": "Scatterplots",
            "timeSlot": "7:35 PM - 8:00 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-09-29-5",
            "label": "[R&W U6.3] Cross-text connections",
            "subject": "rw",
            "code": "R&W U6.3",
            "topic": "Cross-text connections",
            "timeSlot": "8:00 PM - 8:22 PM",
            "durationMinutes": 22,
            "completed": false
          },
          {
            "id": "break-2026-09-29-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "8:22 PM - 8:37 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-09-29-7",
            "label": "[R&W U7.1] Transitions",
            "subject": "rw",
            "code": "R&W U7.1",
            "topic": "Transitions",
            "timeSlot": "8:37 PM - 8:59 PM",
            "durationMinutes": 22,
            "completed": false
          }
        ],
        "specialInstructions": "Complete assigned Tue study tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-09-30",
        "dateStr": "2026-09-30",
        "dayOfWeek": "Wed",
        "formattedDate": "Wed Sep 30",
        "dayNumber": 14,
        "weekId": "week-3",
        "weekNumber": 3,
        "weekTitle": "Medium Tier Acceleration (Math U7 & U8, R&W U6 & U7)",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 119,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 149,
        "tasks": [
          {
            "id": "task-2026-09-30-1",
            "label": "[MATH U7.7] Linear and exponential growth",
            "subject": "math",
            "code": "Math U7.7",
            "topic": "Linear and exponential growth",
            "timeSlot": "6:30 PM - 6:55 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-09-30-2",
            "label": "[MATH U7.8] Probability and relative frequency",
            "subject": "math",
            "code": "Math U7.8",
            "topic": "Probability and relative frequency",
            "timeSlot": "6:55 PM - 7:20 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "break-2026-09-30-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:20 PM - 7:35 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-09-30-4",
            "label": "[MATH U7.9] Data inferences",
            "subject": "math",
            "code": "Math U7.9",
            "topic": "Data inferences",
            "timeSlot": "7:35 PM - 8:00 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-09-30-5",
            "label": "[R&W U7.2] Rhetorical synthesis",
            "subject": "rw",
            "code": "R&W U7.2",
            "topic": "Rhetorical synthesis",
            "timeSlot": "8:00 PM - 8:22 PM",
            "durationMinutes": 22,
            "completed": false
          },
          {
            "id": "break-2026-09-30-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "8:22 PM - 8:37 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-09-30-7",
            "label": "[R&W U7.3] Form, structure, and sense",
            "subject": "rw",
            "code": "R&W U7.3",
            "topic": "Form, structure, and sense",
            "timeSlot": "8:37 PM - 8:59 PM",
            "durationMinutes": 22,
            "completed": false
          }
        ],
        "specialInstructions": "Complete assigned Wed study tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-10-01",
        "dateStr": "2026-10-01",
        "dayOfWeek": "Thu",
        "formattedDate": "Thu Oct 01",
        "dayNumber": 15,
        "weekId": "week-3",
        "weekNumber": 3,
        "weekTitle": "Medium Tier Acceleration (Math U7 & U8, R&W U6 & U7)",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 77,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 92,
        "tasks": [
          {
            "id": "task-2026-10-01-1",
            "label": "[MATH U7.10] Evaluating statistical claims",
            "subject": "math",
            "code": "Math U7.10",
            "topic": "Evaluating statistical claims",
            "timeSlot": "6:30 PM - 6:55 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-10-01-2",
            "label": "[MATH U8.1] Factoring quadratic and polynomial expressions",
            "subject": "math",
            "code": "Math U8.1",
            "topic": "Factoring quadratic and polynomial expressions",
            "timeSlot": "6:55 PM - 7:25 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "break-2026-10-01-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:25 PM - 7:40 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-01-4",
            "label": "[R&W U7.4] Boundaries",
            "subject": "rw",
            "code": "R&W U7.4",
            "topic": "Boundaries",
            "timeSlot": "7:40 PM - 8:02 PM",
            "durationMinutes": 22,
            "completed": false
          }
        ],
        "specialInstructions": "Complete assigned Thu study tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-10-02",
        "dateStr": "2026-10-02",
        "dayOfWeek": "Fri",
        "formattedDate": "Fri Oct 02",
        "dayNumber": 16,
        "weekId": "week-3",
        "weekNumber": 3,
        "weekTitle": "Medium Tier Acceleration (Math U7 & U8, R&W U6 & U7)",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 60,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 60,
        "tasks": [
          {
            "id": "task-2026-10-02-1",
            "label": "[MATH U8.2] Radicals and rational exponents",
            "subject": "math",
            "code": "Math U8.2",
            "topic": "Radicals and rational exponents",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-02-2",
            "label": "[MATH U8.3] Operations with polynomials",
            "subject": "math",
            "code": "Math U8.3",
            "topic": "Operations with polynomials",
            "timeSlot": "7:00 PM - 7:30 PM",
            "durationMinutes": 30,
            "completed": false
          }
        ],
        "specialInstructions": "Complete assigned Fri study tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-10-03",
        "dateStr": "2026-10-03",
        "dayOfWeek": "Sat",
        "formattedDate": "Sat Oct 03",
        "dayNumber": 17,
        "weekId": "week-3",
        "weekNumber": 3,
        "weekTitle": "Medium Tier Acceleration (Math U7 & U8, R&W U6 & U7)",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 60,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 60,
        "tasks": [
          {
            "id": "task-2026-10-03-1",
            "label": "[MATH U8.4] Operations with rational expressions",
            "subject": "math",
            "code": "Math U8.4",
            "topic": "Operations with rational expressions",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-03-2",
            "label": "[MATH U8.5] Nonlinear functions",
            "subject": "math",
            "code": "Math U8.5",
            "topic": "Nonlinear functions",
            "timeSlot": "7:00 PM - 7:30 PM",
            "durationMinutes": 30,
            "completed": false
          }
        ],
        "specialInstructions": "Complete assigned Sat study tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-10-04",
        "dateStr": "2026-10-04",
        "dayOfWeek": "Sun",
        "formattedDate": "Sun Oct 04",
        "weekId": "week-3",
        "weekNumber": 3,
        "weekTitle": "Medium Tier Acceleration (Math U7 & U8, R&W U6 & U7)",
        "phase": "foundations",
        "isBuffer": true,
        "isTestDay": false,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "tasks": [
          {
            "id": "rest-2026-10-04",
            "label": "Full Rest & Cognitive Recovery • Zero Assigned Study",
            "subject": "buffer",
            "code": "REST",
            "topic": "Cognitive Recovery",
            "completed": false
          }
        ],
        "specialInstructions": "Guaranteed Rest Day: Zero assigned lessons. Allow mental recharge, sleep, and physical recovery."
      }
    ]
  },
  {
    "id": "week-4",
    "title": "Week 4: Medium Tier Climax & Test #2 Checkpoint",
    "dateRange": "Oct 05 to Oct 11",
    "subtitle": "Finish Medium Math (U8-U10.1) and take Full Bluebook Practice Test #2 on Sat Oct 10.",
    "phase": "bluebook",
    "days": [
      {
        "id": "2026-10-05",
        "dateStr": "2026-10-05",
        "dayOfWeek": "Mon",
        "formattedDate": "Mon Oct 05",
        "dayNumber": 18,
        "weekId": "week-4",
        "weekNumber": 4,
        "weekTitle": "Medium Tier Climax & Test #2 Checkpoint",
        "phase": "bluebook",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 90,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 105,
        "tasks": [
          {
            "id": "task-2026-10-05-1",
            "label": "[MATH U8.6] Isolating quantities",
            "subject": "math",
            "code": "Math U8.6",
            "topic": "Isolating quantities",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-05-2",
            "label": "[MATH U8.7] Solving quadratic equations",
            "subject": "math",
            "code": "Math U8.7",
            "topic": "Solving quadratic equations",
            "timeSlot": "7:00 PM - 7:30 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "break-2026-10-05-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-05-4",
            "label": "[MATH U8.8] Linear and quadratic systems",
            "subject": "math",
            "code": "Math U8.8",
            "topic": "Linear and quadratic systems",
            "timeSlot": "7:45 PM - 8:15 PM",
            "durationMinutes": 30,
            "completed": false
          }
        ],
        "specialInstructions": "Complete assigned Mon study tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-10-06",
        "dateStr": "2026-10-06",
        "dayOfWeek": "Tue",
        "formattedDate": "Tue Oct 06",
        "dayNumber": 19,
        "weekId": "week-4",
        "weekNumber": 4,
        "weekTitle": "Medium Tier Climax & Test #2 Checkpoint",
        "phase": "bluebook",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 90,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 105,
        "tasks": [
          {
            "id": "task-2026-10-06-1",
            "label": "[MATH U8.9] Radical, rational, and absolute value equations",
            "subject": "math",
            "code": "Math U8.9",
            "topic": "Radical, rational, and absolute value equations",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-06-2",
            "label": "[MATH U8.10] Quadratic and exponential word problems",
            "subject": "math",
            "code": "Math U8.10",
            "topic": "Quadratic and exponential word problems",
            "timeSlot": "7:00 PM - 7:30 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "break-2026-10-06-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-06-4",
            "label": "[MATH U8.11] Quadratic graphs",
            "subject": "math",
            "code": "Math U8.11",
            "topic": "Quadratic graphs",
            "timeSlot": "7:45 PM - 8:15 PM",
            "durationMinutes": 30,
            "completed": false
          }
        ],
        "specialInstructions": "Complete assigned Tue study tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-10-07",
        "dateStr": "2026-10-07",
        "dayOfWeek": "Wed",
        "formattedDate": "Wed Oct 07",
        "dayNumber": 20,
        "weekId": "week-4",
        "weekNumber": 4,
        "weekTitle": "Medium Tier Climax & Test #2 Checkpoint",
        "phase": "bluebook",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 95,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 110,
        "tasks": [
          {
            "id": "task-2026-10-07-1",
            "label": "[MATH U8.12] Exponential graphs",
            "subject": "math",
            "code": "Math U8.12",
            "topic": "Exponential graphs",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-07-2",
            "label": "[MATH U8.13] Polynomial and other nonlinear graphs",
            "subject": "math",
            "code": "Math U8.13",
            "topic": "Polynomial and other nonlinear graphs",
            "timeSlot": "7:00 PM - 7:30 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "break-2026-10-07-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-07-4",
            "label": "[MATH U9.1] Area and volume",
            "subject": "math",
            "code": "Math U9.1",
            "topic": "Area and volume",
            "timeSlot": "7:45 PM - 8:20 PM",
            "durationMinutes": 35,
            "completed": false
          }
        ],
        "specialInstructions": "Complete assigned Wed study tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-10-08",
        "dateStr": "2026-10-08",
        "dayOfWeek": "Thu",
        "formattedDate": "Thu Oct 08",
        "dayNumber": 21,
        "weekId": "week-4",
        "weekNumber": 4,
        "weekTitle": "Medium Tier Climax & Test #2 Checkpoint",
        "phase": "bluebook",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 105,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 120,
        "tasks": [
          {
            "id": "task-2026-10-08-1",
            "label": "[MATH U9.2] Congruence, similarity, and angle relationships",
            "subject": "math",
            "code": "Math U9.2",
            "topic": "Congruence, similarity, and angle relationships",
            "timeSlot": "6:30 PM - 7:05 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "task-2026-10-08-2",
            "label": "[MATH U9.3] Right triangle trigonometry",
            "subject": "math",
            "code": "Math U9.3",
            "topic": "Right triangle trigonometry",
            "timeSlot": "7:05 PM - 7:40 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "break-2026-10-08-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:40 PM - 7:55 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-08-4",
            "label": "[MATH U9.4] Circle theorems",
            "subject": "math",
            "code": "Math U9.4",
            "topic": "Circle theorems",
            "timeSlot": "7:55 PM - 8:30 PM",
            "durationMinutes": 35,
            "completed": false
          }
        ],
        "specialInstructions": "Complete assigned Thu study tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-10-09",
        "dateStr": "2026-10-09",
        "dayOfWeek": "Fri",
        "formattedDate": "Fri Oct 09",
        "dayNumber": 22,
        "weekId": "week-4",
        "weekNumber": 4,
        "weekTitle": "Medium Tier Climax & Test #2 Checkpoint",
        "phase": "bluebook",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 100,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 115,
        "tasks": [
          {
            "id": "task-2026-10-09-1",
            "label": "[MATH U9.5] Unit circle trigonometry",
            "subject": "math",
            "code": "Math U9.5",
            "topic": "Unit circle trigonometry",
            "timeSlot": "6:30 PM - 7:05 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "task-2026-10-09-2",
            "label": "[MATH U9.6] Circle equations",
            "subject": "math",
            "code": "Math U9.6",
            "topic": "Circle equations",
            "timeSlot": "7:05 PM - 7:40 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "break-2026-10-09-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:40 PM - 7:55 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-09-4",
            "label": "[MATH U10.1] Solving linear equations and inequalities",
            "subject": "math",
            "code": "Math U10.1",
            "topic": "Solving linear equations and inequalities",
            "timeSlot": "7:55 PM - 8:25 PM",
            "durationMinutes": 30,
            "completed": false
          }
        ],
        "specialInstructions": "Complete assigned Fri study tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-10-10",
        "dateStr": "2026-10-10",
        "dayOfWeek": "Sat",
        "formattedDate": "Sat Oct 10",
        "weekId": "week-4",
        "weekNumber": 4,
        "weekTitle": "Medium Tier Climax & Test #2 Checkpoint",
        "phase": "bluebook",
        "isBuffer": false,
        "isTestDay": true,
        "studyTimeMinutes": 144,
        "breakTimeMinutes": 10,
        "totalTimeMinutes": 154,
        "tasks": [
          {
            "id": "bluebook-test-2",
            "label": "Full Bluebook Practice Test #2 (144 min)",
            "subject": "test",
            "code": "TEST #2",
            "topic": "Full Bluebook Practice Test #2",
            "timeSlot": "8:00 AM - 10:24 AM",
            "durationMinutes": 144,
            "completed": false
          }
        ],
        "specialInstructions": "Full-length timed Bluebook practice test under strict testing conditions. Start promptly at 8:00 AM. Log all missed questions immediately into the Error Log."
      },
      {
        "id": "2026-10-11",
        "dateStr": "2026-10-11",
        "dayOfWeek": "Sun",
        "formattedDate": "Sun Oct 11",
        "weekId": "week-4",
        "weekNumber": 4,
        "weekTitle": "Medium Tier Climax & Test #2 Checkpoint",
        "phase": "bluebook",
        "isBuffer": true,
        "isTestDay": false,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "tasks": [
          {
            "id": "rest-2026-10-11",
            "label": "Full Rest & Cognitive Recovery • Zero Assigned Study",
            "subject": "buffer",
            "code": "REST",
            "topic": "Cognitive Recovery",
            "completed": false
          }
        ],
        "specialInstructions": "Guaranteed Rest Day: Zero assigned lessons. Allow mental recharge, sleep, and physical recovery."
      }
    ]
  },
  {
    "id": "week-5",
    "title": "Week 5: Advanced Tier Math & Medium R&W Climax",
    "dateRange": "Oct 12 to Oct 18",
    "subtitle": "Advanced Math U10–U12 + Medium R&W U8–U10: Systems of equations, polynomial operations & grammar sense.",
    "phase": "bluebook",
    "days": [
      {
        "id": "2026-10-12",
        "dateStr": "2026-10-12",
        "dayOfWeek": "Mon",
        "formattedDate": "Mon Oct 12",
        "dayNumber": 23,
        "weekId": "week-5",
        "weekNumber": 5,
        "weekTitle": "Advanced Tier Math & Medium R&W Climax",
        "phase": "bluebook",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 170,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 200,
        "tasks": [
          {
            "id": "task-2026-10-12-1",
            "label": "[MATH U10.2] Linear equation word problems",
            "subject": "math",
            "code": "Math U10.2",
            "topic": "Linear equation word problems",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-12-2",
            "label": "[MATH U10.3] Linear relationship word problems",
            "subject": "math",
            "code": "Math U10.3",
            "topic": "Linear relationship word problems",
            "timeSlot": "7:00 PM - 7:30 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "break-2026-10-12-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-12-4",
            "label": "[MATH U10.4] Graphs of linear equations and functions",
            "subject": "math",
            "code": "Math U10.4",
            "topic": "Graphs of linear equations and functions",
            "timeSlot": "7:45 PM - 8:15 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-12-5",
            "label": "[MATH U10.5] Solving systems of linear equations",
            "subject": "math",
            "code": "Math U10.5",
            "topic": "Solving systems of linear equations",
            "timeSlot": "8:15 PM - 8:45 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "break-2026-10-12-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "8:45 PM - 9:00 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-12-7",
            "label": "[R&W U8.1] Command of textual evidence",
            "subject": "rw",
            "code": "R&W U8.1",
            "topic": "Command of textual evidence",
            "timeSlot": "9:00 PM - 9:25 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-10-12-8",
            "label": "[R&W U8.2] Command of quantitative evidence",
            "subject": "rw",
            "code": "R&W U8.2",
            "topic": "Command of quantitative evidence",
            "timeSlot": "9:25 PM - 9:50 PM",
            "durationMinutes": 25,
            "completed": false
          }
        ],
        "specialInstructions": "Complete assigned Mon study tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-10-13",
        "dateStr": "2026-10-13",
        "dayOfWeek": "Tue",
        "formattedDate": "Tue Oct 13",
        "dayNumber": 24,
        "weekId": "week-5",
        "weekNumber": 5,
        "weekTitle": "Advanced Tier Math & Medium R&W Climax",
        "phase": "bluebook",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 170,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 200,
        "tasks": [
          {
            "id": "task-2026-10-13-1",
            "label": "[MATH U10.6] Systems of linear equations word problems",
            "subject": "math",
            "code": "Math U10.6",
            "topic": "Systems of linear equations word problems",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-13-2",
            "label": "[MATH U10.7] Linear inequality word problems",
            "subject": "math",
            "code": "Math U10.7",
            "topic": "Linear inequality word problems",
            "timeSlot": "7:00 PM - 7:30 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "break-2026-10-13-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-13-4",
            "label": "[MATH U10.8] Graphs of linear systems and inequalities",
            "subject": "math",
            "code": "Math U10.8",
            "topic": "Graphs of linear systems and inequalities",
            "timeSlot": "7:45 PM - 8:15 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-13-5",
            "label": "[MATH U11.1] Ratios, rates, and proportions",
            "subject": "math",
            "code": "Math U11.1",
            "topic": "Ratios, rates, and proportions",
            "timeSlot": "8:15 PM - 8:45 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "break-2026-10-13-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "8:45 PM - 9:00 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-13-7",
            "label": "[R&W U8.3] Central ideas and details",
            "subject": "rw",
            "code": "R&W U8.3",
            "topic": "Central ideas and details",
            "timeSlot": "9:00 PM - 9:25 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-10-13-8",
            "label": "[R&W U8.4] Inferences",
            "subject": "rw",
            "code": "R&W U8.4",
            "topic": "Inferences",
            "timeSlot": "9:25 PM - 9:50 PM",
            "durationMinutes": 25,
            "completed": false
          }
        ],
        "specialInstructions": "Complete assigned Tue study tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-10-14",
        "dateStr": "2026-10-14",
        "dayOfWeek": "Wed",
        "formattedDate": "Wed Oct 14",
        "dayNumber": 25,
        "weekId": "week-5",
        "weekNumber": 5,
        "weekTitle": "Advanced Tier Math & Medium R&W Climax",
        "phase": "bluebook",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 170,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 200,
        "tasks": [
          {
            "id": "task-2026-10-14-1",
            "label": "[MATH U11.2] Unit conversion",
            "subject": "math",
            "code": "Math U11.2",
            "topic": "Unit conversion",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-14-2",
            "label": "[MATH U11.3] Percentages",
            "subject": "math",
            "code": "Math U11.3",
            "topic": "Percentages",
            "timeSlot": "7:00 PM - 7:30 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "break-2026-10-14-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-14-4",
            "label": "[MATH U11.4] Center, spread, and shape of distributions",
            "subject": "math",
            "code": "Math U11.4",
            "topic": "Center, spread, and shape of distributions",
            "timeSlot": "7:45 PM - 8:15 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-14-5",
            "label": "[MATH U11.5] Data representations",
            "subject": "math",
            "code": "Math U11.5",
            "topic": "Data representations",
            "timeSlot": "8:15 PM - 8:45 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "break-2026-10-14-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "8:45 PM - 9:00 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-14-7",
            "label": "[R&W U9.1] Words in context",
            "subject": "rw",
            "code": "R&W U9.1",
            "topic": "Words in context",
            "timeSlot": "9:00 PM - 9:25 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-10-14-8",
            "label": "[R&W U9.2] Text structure and purpose",
            "subject": "rw",
            "code": "R&W U9.2",
            "topic": "Text structure and purpose",
            "timeSlot": "9:25 PM - 9:50 PM",
            "durationMinutes": 25,
            "completed": false
          }
        ],
        "specialInstructions": "Complete assigned Wed study tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-10-15",
        "dateStr": "2026-10-15",
        "dayOfWeek": "Thu",
        "formattedDate": "Thu Oct 15",
        "dayNumber": 26,
        "weekId": "week-5",
        "weekNumber": 5,
        "weekTitle": "Advanced Tier Math & Medium R&W Climax",
        "phase": "bluebook",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 170,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 200,
        "tasks": [
          {
            "id": "task-2026-10-15-1",
            "label": "[MATH U11.6] Scatterplots",
            "subject": "math",
            "code": "Math U11.6",
            "topic": "Scatterplots",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-15-2",
            "label": "[MATH U11.7] Linear and exponential growth",
            "subject": "math",
            "code": "Math U11.7",
            "topic": "Linear and exponential growth",
            "timeSlot": "7:00 PM - 7:30 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "break-2026-10-15-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-15-4",
            "label": "[MATH U11.8] Probability and relative frequency",
            "subject": "math",
            "code": "Math U11.8",
            "topic": "Probability and relative frequency",
            "timeSlot": "7:45 PM - 8:15 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-15-5",
            "label": "[MATH U11.9] Data inferences",
            "subject": "math",
            "code": "Math U11.9",
            "topic": "Data inferences",
            "timeSlot": "8:15 PM - 8:45 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "break-2026-10-15-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "8:45 PM - 9:00 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-15-7",
            "label": "[R&W U9.3] Cross-text connections",
            "subject": "rw",
            "code": "R&W U9.3",
            "topic": "Cross-text connections",
            "timeSlot": "9:00 PM - 9:25 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-10-15-8",
            "label": "[R&W U10.1] Transitions",
            "subject": "rw",
            "code": "R&W U10.1",
            "topic": "Transitions",
            "timeSlot": "9:25 PM - 9:50 PM",
            "durationMinutes": 25,
            "completed": false
          }
        ],
        "specialInstructions": "Complete assigned Thu study tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-10-16",
        "dateStr": "2026-10-16",
        "dayOfWeek": "Fri",
        "formattedDate": "Fri Oct 16",
        "dayNumber": 27,
        "weekId": "week-5",
        "weekNumber": 5,
        "weekTitle": "Advanced Tier Math & Medium R&W Climax",
        "phase": "bluebook",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 185,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 215,
        "tasks": [
          {
            "id": "task-2026-10-16-1",
            "label": "[MATH U11.10] Evaluating statistical claims",
            "subject": "math",
            "code": "Math U11.10",
            "topic": "Evaluating statistical claims",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-16-2",
            "label": "[MATH U12.1] Factoring quadratic and polynomial expressions",
            "subject": "math",
            "code": "Math U12.1",
            "topic": "Factoring quadratic and polynomial expressions",
            "timeSlot": "7:00 PM - 7:35 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "break-2026-10-16-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:35 PM - 7:50 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-16-4",
            "label": "[MATH U12.2] Radicals and rational exponents",
            "subject": "math",
            "code": "Math U12.2",
            "topic": "Radicals and rational exponents",
            "timeSlot": "7:50 PM - 8:25 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "task-2026-10-16-5",
            "label": "[MATH U12.3] Operations with polynomials",
            "subject": "math",
            "code": "Math U12.3",
            "topic": "Operations with polynomials",
            "timeSlot": "8:25 PM - 9:00 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "break-2026-10-16-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "9:00 PM - 9:15 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-16-7",
            "label": "[R&W U10.2] Rhetorical synthesis",
            "subject": "rw",
            "code": "R&W U10.2",
            "topic": "Rhetorical synthesis",
            "timeSlot": "9:15 PM - 9:40 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-10-16-8",
            "label": "[R&W U10.3] Form, structure, and sense",
            "subject": "rw",
            "code": "R&W U10.3",
            "topic": "Form, structure, and sense",
            "timeSlot": "9:40 PM - 10:05 PM",
            "durationMinutes": 25,
            "completed": false
          }
        ],
        "specialInstructions": "Complete assigned Fri study tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-10-17",
        "dateStr": "2026-10-17",
        "dayOfWeek": "Sat",
        "formattedDate": "Sat Oct 17",
        "dayNumber": 28,
        "weekId": "week-5",
        "weekNumber": 5,
        "weekTitle": "Advanced Tier Math & Medium R&W Climax",
        "phase": "bluebook",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 165,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 195,
        "tasks": [
          {
            "id": "task-2026-10-17-1",
            "label": "[MATH U12.4] Operations with rational expressions",
            "subject": "math",
            "code": "Math U12.4",
            "topic": "Operations with rational expressions",
            "timeSlot": "6:30 PM - 7:05 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "task-2026-10-17-2",
            "label": "[MATH U12.5] Nonlinear functions",
            "subject": "math",
            "code": "Math U12.5",
            "topic": "Nonlinear functions",
            "timeSlot": "7:05 PM - 7:40 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "break-2026-10-17-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:40 PM - 7:55 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-17-4",
            "label": "[MATH U12.6] Isolating quantities",
            "subject": "math",
            "code": "Math U12.6",
            "topic": "Isolating quantities",
            "timeSlot": "7:55 PM - 8:30 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "task-2026-10-17-5",
            "label": "[MATH U12.7] Solving quadratic equations",
            "subject": "math",
            "code": "Math U12.7",
            "topic": "Solving quadratic equations",
            "timeSlot": "8:30 PM - 9:05 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "break-2026-10-17-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "9:05 PM - 9:20 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-17-7",
            "label": "[R&W U10.4] Boundaries",
            "subject": "rw",
            "code": "R&W U10.4",
            "topic": "Boundaries",
            "timeSlot": "9:20 PM - 9:45 PM",
            "durationMinutes": 25,
            "completed": false
          }
        ],
        "specialInstructions": "Complete assigned Sat study tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-10-18",
        "dateStr": "2026-10-18",
        "dayOfWeek": "Sun",
        "formattedDate": "Sun Oct 18",
        "weekId": "week-5",
        "weekNumber": 5,
        "weekTitle": "Advanced Tier Math & Medium R&W Climax",
        "phase": "bluebook",
        "isBuffer": true,
        "isTestDay": false,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "tasks": [
          {
            "id": "rest-2026-10-18",
            "label": "Full Rest & Cognitive Recovery • Zero Assigned Study",
            "subject": "buffer",
            "code": "REST",
            "topic": "Cognitive Recovery",
            "completed": false
          }
        ],
        "specialInstructions": "Guaranteed Rest Day: Zero assigned lessons. Allow mental recharge, sleep, and physical recovery."
      }
    ]
  },
  {
    "id": "week-6",
    "title": "Week 6: All Math Complete, Test #3 Checkpoint & Challenge Unit Launch",
    "dateRange": "Oct 19 to Oct 25",
    "subtitle": "Complete all SAT Math on Thu Oct 22, take Test #3 on Fri Oct 23, and launch high-difficulty Challenge Unit.",
    "phase": "bluebook",
    "days": [
      {
        "id": "2026-10-19",
        "dateStr": "2026-10-19",
        "dayOfWeek": "Mon",
        "formattedDate": "Mon Oct 19",
        "dayNumber": 29,
        "weekId": "week-6",
        "weekNumber": 6,
        "weekTitle": "All Math Complete, Test #3 Checkpoint & Challenge Unit Launch",
        "phase": "bluebook",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 140,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 155,
        "tasks": [
          {
            "id": "task-2026-10-19-1",
            "label": "[MATH U12.8] Linear and quadratic systems",
            "subject": "math",
            "code": "Math U12.8",
            "topic": "Linear and quadratic systems",
            "timeSlot": "6:30 PM - 7:05 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "task-2026-10-19-2",
            "label": "[MATH U12.9] Radical, rational, and absolute value equations",
            "subject": "math",
            "code": "Math U12.9",
            "topic": "Radical, rational, and absolute value equations",
            "timeSlot": "7:05 PM - 7:40 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "break-2026-10-19-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:40 PM - 7:55 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-19-4",
            "label": "[MATH U12.10] Quadratic and exponential word problems",
            "subject": "math",
            "code": "Math U12.10",
            "topic": "Quadratic and exponential word problems",
            "timeSlot": "7:55 PM - 8:30 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "task-2026-10-19-5",
            "label": "[MATH U12.11] Quadratic graphs",
            "subject": "math",
            "code": "Math U12.11",
            "topic": "Quadratic graphs",
            "timeSlot": "8:30 PM - 9:05 PM",
            "durationMinutes": 35,
            "completed": false
          }
        ],
        "specialInstructions": "Complete assigned Mon study tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-10-20",
        "dateStr": "2026-10-20",
        "dayOfWeek": "Tue",
        "formattedDate": "Tue Oct 20",
        "dayNumber": 30,
        "weekId": "week-6",
        "weekNumber": 6,
        "weekTitle": "All Math Complete, Test #3 Checkpoint & Challenge Unit Launch",
        "phase": "bluebook",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 110,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 125,
        "tasks": [
          {
            "id": "task-2026-10-20-1",
            "label": "[MATH U12.12] Exponential graphs",
            "subject": "math",
            "code": "Math U12.12",
            "topic": "Exponential graphs",
            "timeSlot": "6:30 PM - 7:05 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "task-2026-10-20-2",
            "label": "[MATH U12.13] Polynomial and other nonlinear graphs",
            "subject": "math",
            "code": "Math U12.13",
            "topic": "Polynomial and other nonlinear graphs",
            "timeSlot": "7:05 PM - 7:40 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "break-2026-10-20-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:40 PM - 7:55 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-20-4",
            "label": "[MATH U13.1] Area and volume",
            "subject": "math",
            "code": "Math U13.1",
            "topic": "Area and volume",
            "timeSlot": "7:55 PM - 8:35 PM",
            "durationMinutes": 40,
            "completed": false
          }
        ],
        "specialInstructions": "Complete assigned Tue study tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-10-21",
        "dateStr": "2026-10-21",
        "dayOfWeek": "Wed",
        "formattedDate": "Wed Oct 21",
        "dayNumber": 31,
        "weekId": "week-6",
        "weekNumber": 6,
        "weekTitle": "All Math Complete, Test #3 Checkpoint & Challenge Unit Launch",
        "phase": "bluebook",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 120,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 135,
        "tasks": [
          {
            "id": "task-2026-10-21-1",
            "label": "[MATH U13.2] Congruence, similarity, and angle relationships",
            "subject": "math",
            "code": "Math U13.2",
            "topic": "Congruence, similarity, and angle relationships",
            "timeSlot": "6:30 PM - 7:10 PM",
            "durationMinutes": 40,
            "completed": false
          },
          {
            "id": "task-2026-10-21-2",
            "label": "[MATH U13.3] Right triangle trigonometry",
            "subject": "math",
            "code": "Math U13.3",
            "topic": "Right triangle trigonometry",
            "timeSlot": "7:10 PM - 7:50 PM",
            "durationMinutes": 40,
            "completed": false
          },
          {
            "id": "break-2026-10-21-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:50 PM - 8:05 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-21-4",
            "label": "[MATH U13.4] Circle theorems",
            "subject": "math",
            "code": "Math U13.4",
            "topic": "Circle theorems",
            "timeSlot": "8:05 PM - 8:45 PM",
            "durationMinutes": 40,
            "completed": false
          }
        ],
        "specialInstructions": "Complete assigned Wed study tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-10-22",
        "dateStr": "2026-10-22",
        "dayOfWeek": "Thu",
        "formattedDate": "Thu Oct 22",
        "dayNumber": 32,
        "weekId": "week-6",
        "weekNumber": 6,
        "weekTitle": "All Math Complete, Test #3 Checkpoint & Challenge Unit Launch",
        "phase": "bluebook",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 80,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 80,
        "tasks": [
          {
            "id": "task-2026-10-22-1",
            "label": "[MATH U13.5] Unit circle trigonometry",
            "subject": "math",
            "code": "Math U13.5",
            "topic": "Unit circle trigonometry",
            "timeSlot": "6:30 PM - 7:10 PM",
            "durationMinutes": 40,
            "completed": false
          },
          {
            "id": "task-2026-10-22-2",
            "label": "[MATH U13.6] Circle equations",
            "subject": "math",
            "code": "Math U13.6",
            "topic": "Circle equations",
            "timeSlot": "7:10 PM - 7:50 PM",
            "durationMinutes": 40,
            "completed": false
          }
        ],
        "specialInstructions": "Complete assigned Thu study tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-10-23",
        "dateStr": "2026-10-23",
        "dayOfWeek": "Fri",
        "formattedDate": "Fri Oct 23",
        "weekId": "week-6",
        "weekNumber": 6,
        "weekTitle": "All Math Complete, Test #3 Checkpoint & Challenge Unit Launch",
        "phase": "bluebook",
        "isBuffer": false,
        "isTestDay": true,
        "studyTimeMinutes": 144,
        "breakTimeMinutes": 10,
        "totalTimeMinutes": 154,
        "tasks": [
          {
            "id": "bluebook-test-3",
            "label": "Full Bluebook Practice Test #3 (144 min)",
            "subject": "test",
            "code": "TEST #3",
            "topic": "Full Bluebook Practice Test #3",
            "timeSlot": "8:00 AM - 10:24 AM",
            "durationMinutes": 144,
            "completed": false
          }
        ],
        "specialInstructions": "Full-length timed Bluebook practice test under strict testing conditions. Start promptly at 8:00 AM. Log all missed questions immediately into the Error Log."
      },
      {
        "id": "2026-10-24",
        "dateStr": "2026-10-24",
        "dayOfWeek": "Sat",
        "formattedDate": "Sat Oct 24",
        "dayNumber": 33,
        "weekId": "week-6",
        "weekNumber": 6,
        "weekTitle": "All Math Complete, Test #3 Checkpoint & Challenge Unit Launch",
        "phase": "bluebook",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 70,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 70,
        "tasks": [
          {
            "id": "task-2026-10-24-1",
            "label": "[R&W U11.1] Command of evidence",
            "subject": "rw",
            "code": "R&W U11.1",
            "topic": "Command of evidence",
            "timeSlot": "6:30 PM - 7:05 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "task-2026-10-24-2",
            "label": "[R&W U11.2] Central ideas and details + inferences",
            "subject": "rw",
            "code": "R&W U11.2",
            "topic": "Central ideas and details + inferences",
            "timeSlot": "7:05 PM - 7:40 PM",
            "durationMinutes": 35,
            "completed": false
          }
        ],
        "specialInstructions": "Complete assigned Sat study tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-10-25",
        "dateStr": "2026-10-25",
        "dayOfWeek": "Sun",
        "formattedDate": "Sun Oct 25",
        "weekId": "week-6",
        "weekNumber": 6,
        "weekTitle": "All Math Complete, Test #3 Checkpoint & Challenge Unit Launch",
        "phase": "bluebook",
        "isBuffer": true,
        "isTestDay": false,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "tasks": [
          {
            "id": "rest-2026-10-25",
            "label": "Full Rest & Cognitive Recovery • Zero Assigned Study",
            "subject": "buffer",
            "code": "REST",
            "topic": "Cognitive Recovery",
            "completed": false
          }
        ],
        "specialInstructions": "Guaranteed Rest Day: Zero assigned lessons. Allow mental recharge, sleep, and physical recovery."
      }
    ]
  },
  {
    "id": "week-7",
    "title": "Week 7: Challenge Unit Mastery & Grammar Speed Sprint",
    "dateRange": "Oct 26 to Nov 01",
    "subtitle": "Finish high-difficulty Challenge Unit (R&W U11) and complete all R&W Grammar drills (U12) by Sat Oct 31.",
    "phase": "bluebook",
    "days": [
      {
        "id": "2026-10-26",
        "dateStr": "2026-10-26",
        "dayOfWeek": "Mon",
        "formattedDate": "Mon Oct 26",
        "dayNumber": 34,
        "weekId": "week-7",
        "weekNumber": 7,
        "weekTitle": "Challenge Unit Mastery & Grammar Speed Sprint",
        "phase": "bluebook",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 70,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 70,
        "tasks": [
          {
            "id": "task-2026-10-26-1",
            "label": "[R&W U11.3] Words in context",
            "subject": "rw",
            "code": "R&W U11.3",
            "topic": "Words in context",
            "timeSlot": "6:30 PM - 7:05 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "task-2026-10-26-2",
            "label": "[R&W U11.4] Text structure and purpose + cross-text connections",
            "subject": "rw",
            "code": "R&W U11.4",
            "topic": "Text structure and purpose + cross-text connections",
            "timeSlot": "7:05 PM - 7:40 PM",
            "durationMinutes": 35,
            "completed": false
          }
        ],
        "specialInstructions": "Complete assigned Mon study tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-10-27",
        "dateStr": "2026-10-27",
        "dayOfWeek": "Tue",
        "formattedDate": "Tue Oct 27",
        "dayNumber": 35,
        "weekId": "week-7",
        "weekNumber": 7,
        "weekTitle": "Challenge Unit Mastery & Grammar Speed Sprint",
        "phase": "bluebook",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 70,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 70,
        "tasks": [
          {
            "id": "task-2026-10-27-1",
            "label": "[R&W U11.5] Boundaries + form, structure, and sense",
            "subject": "rw",
            "code": "R&W U11.5",
            "topic": "Boundaries + form, structure, and sense",
            "timeSlot": "6:30 PM - 7:05 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "task-2026-10-27-2",
            "label": "[R&W U11.6] Transitions + rhetorical synthesis",
            "subject": "rw",
            "code": "R&W U11.6",
            "topic": "Transitions + rhetorical synthesis",
            "timeSlot": "7:05 PM - 7:40 PM",
            "durationMinutes": 35,
            "completed": false
          }
        ],
        "specialInstructions": "Complete assigned Tue study tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-10-28",
        "dateStr": "2026-10-28",
        "dayOfWeek": "Wed",
        "formattedDate": "Wed Oct 28",
        "dayNumber": 36,
        "weekId": "week-7",
        "weekNumber": 7,
        "weekTitle": "Challenge Unit Mastery & Grammar Speed Sprint",
        "phase": "bluebook",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 30,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 30,
        "tasks": [
          {
            "id": "task-2026-10-28-1",
            "label": "[R&W U12.1] Subject-verb agreement",
            "subject": "rw",
            "code": "R&W U12.1",
            "topic": "Subject-verb agreement",
            "timeSlot": "6:30 PM - 6:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-28-2",
            "label": "[R&W U12.2] Pronoun-antecedent agreement",
            "subject": "rw",
            "code": "R&W U12.2",
            "topic": "Pronoun-antecedent agreement",
            "timeSlot": "6:45 PM - 7:00 PM",
            "durationMinutes": 15,
            "completed": false
          }
        ],
        "specialInstructions": "Complete assigned Wed study tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-10-29",
        "dateStr": "2026-10-29",
        "dayOfWeek": "Thu",
        "formattedDate": "Thu Oct 29",
        "dayNumber": 37,
        "weekId": "week-7",
        "weekNumber": 7,
        "weekTitle": "Challenge Unit Mastery & Grammar Speed Sprint",
        "phase": "bluebook",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 30,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 30,
        "tasks": [
          {
            "id": "task-2026-10-29-1",
            "label": "[R&W U12.3] Plurals and possessives",
            "subject": "rw",
            "code": "R&W U12.3",
            "topic": "Plurals and possessives",
            "timeSlot": "6:30 PM - 6:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-29-2",
            "label": "[R&W U12.4] Verb forms",
            "subject": "rw",
            "code": "R&W U12.4",
            "topic": "Verb forms",
            "timeSlot": "6:45 PM - 7:00 PM",
            "durationMinutes": 15,
            "completed": false
          }
        ],
        "specialInstructions": "Complete assigned Thu study tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-10-30",
        "dateStr": "2026-10-30",
        "dayOfWeek": "Fri",
        "formattedDate": "Fri Oct 30",
        "dayNumber": 38,
        "weekId": "week-7",
        "weekNumber": 7,
        "weekTitle": "Challenge Unit Mastery & Grammar Speed Sprint",
        "phase": "bluebook",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 30,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 30,
        "tasks": [
          {
            "id": "task-2026-10-30-1",
            "label": "[R&W U12.5] Subject-modifier placement",
            "subject": "rw",
            "code": "R&W U12.5",
            "topic": "Subject-modifier placement",
            "timeSlot": "6:30 PM - 6:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-30-2",
            "label": "[R&W U12.6] Linking clauses",
            "subject": "rw",
            "code": "R&W U12.6",
            "topic": "Linking clauses",
            "timeSlot": "6:45 PM - 7:00 PM",
            "durationMinutes": 15,
            "completed": false
          }
        ],
        "specialInstructions": "Complete assigned Fri study tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-10-31",
        "dateStr": "2026-10-31",
        "dayOfWeek": "Sat",
        "formattedDate": "Sat Oct 31",
        "dayNumber": 39,
        "weekId": "week-7",
        "weekNumber": 7,
        "weekTitle": "Challenge Unit Mastery & Grammar Speed Sprint",
        "phase": "bluebook",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 30,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 30,
        "tasks": [
          {
            "id": "task-2026-10-31-1",
            "label": "[R&W U12.7] Supplements",
            "subject": "rw",
            "code": "R&W U12.7",
            "topic": "Supplements",
            "timeSlot": "6:30 PM - 6:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-31-2",
            "label": "[R&W U12.8] Punctuation",
            "subject": "rw",
            "code": "R&W U12.8",
            "topic": "Punctuation",
            "timeSlot": "6:45 PM - 7:00 PM",
            "durationMinutes": 15,
            "completed": false
          }
        ],
        "specialInstructions": "Complete assigned Sat study tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-11-01",
        "dateStr": "2026-11-01",
        "dayOfWeek": "Sun",
        "formattedDate": "Sun Nov 1",
        "weekId": "week-7",
        "weekNumber": 7,
        "weekTitle": "Challenge Unit Mastery & Grammar Speed Sprint",
        "phase": "bluebook",
        "isBuffer": true,
        "isTestDay": false,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "tasks": [
          {
            "id": "rest-2026-11-01",
            "label": "Full Rest & Cognitive Recovery • Zero Assigned Study",
            "subject": "buffer",
            "code": "REST",
            "topic": "Cognitive Recovery",
            "completed": false
          }
        ],
        "specialInstructions": "Guaranteed Rest Day: Zero assigned lessons. Allow mental recharge, sleep, and physical recovery."
      }
    ]
  },
  {
    "id": "week-8",
    "title": "Week 8: Final Exam Week Taper, Packout & Official SAT Exam Day",
    "dateRange": "Nov 02 to Nov 07",
    "subtitle": "Test-day simulation autopsy, device check, bag packout, full rest curfew, and official SAT Exam Day on Sat Nov 7.",
    "phase": "exam",
    "days": [
      {
        "dateStr": "2026-11-02",
        "formattedDate": "Mon Nov 2",
        "dayOfWeek": "Mon",
        "phase": "exam",
        "studyTimeMinutes": 45,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 45,
        "isBuffer": false,
        "isTestDay": false,
        "specialInstructions": "Timing dry run simulation + error log autopsy. Calibrate speed and wake-up routine.",
        "tasks": [
          {
            "id": "w8-d1-1",
            "label": "Error-Log Autopsy & High-Frequency Mistake Review",
            "subject": "review",
            "code": "AUTOPSY",
            "topic": "Mistake Pattern Analysis",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "w8-d1-2",
            "label": "Test-Day Timing Simulation / Dry Run",
            "subject": "review",
            "code": "TIMING RUN",
            "topic": "Timing Dry Run Protocol",
            "timeSlot": "7:00 PM - 7:15 PM",
            "durationMinutes": 15,
            "completed": false
          }
        ],
        "id": "2026-11-02",
        "weekId": "week-8",
        "weekNumber": 8,
        "weekTitle": "Final Exam Week Taper, Packout & Official SAT Exam Day"
      },
      {
        "dateStr": "2026-11-03",
        "formattedDate": "Tue Nov 3",
        "dayOfWeek": "Tue",
        "phase": "exam",
        "studyTimeMinutes": 30,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 30,
        "isBuffer": false,
        "isTestDay": false,
        "specialInstructions": "Light taper: Review cheat codes and formula sheet. No heavy cognitive load.",
        "tasks": [
          {
            "id": "w8-d2-1",
            "label": "Light Taper: Error Notebook & Punctuation Rules Review",
            "subject": "review",
            "code": "TAPER",
            "topic": "Final Rulebook Review",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          }
        ],
        "id": "2026-11-03",
        "weekId": "week-8",
        "weekNumber": 8,
        "weekTitle": "Final Exam Week Taper, Packout & Official SAT Exam Day"
      },
      {
        "dateStr": "2026-11-04",
        "formattedDate": "Wed Nov 4",
        "dayOfWeek": "Wed",
        "phase": "exam",
        "studyTimeMinutes": 20,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 20,
        "isBuffer": false,
        "isTestDay": false,
        "specialInstructions": "Bluebook app check: Ensure exam setup is completed and admission ticket generated.",
        "tasks": [
          {
            "id": "w8-d3-1",
            "label": "Device Check: Bluebook App Update, Battery Health & Ticket Check",
            "subject": "logistics",
            "code": "BLUEBOOK CHECK",
            "topic": "Exam Device Readiness",
            "timeSlot": "6:30 PM - 6:50 PM",
            "durationMinutes": 20,
            "completed": false
          }
        ],
        "id": "2026-11-04",
        "weekId": "week-8",
        "weekNumber": 8,
        "weekTitle": "Final Exam Week Taper, Packout & Official SAT Exam Day"
      },
      {
        "dateStr": "2026-11-05",
        "formattedDate": "Thu Nov 5",
        "dayOfWeek": "Thu",
        "phase": "exam",
        "studyTimeMinutes": 20,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 20,
        "isBuffer": false,
        "isTestDay": false,
        "specialInstructions": "Physical packout: Check off every Rank 1-3 item in your packing checklist.",
        "tasks": [
          {
            "id": "w8-d4-1",
            "label": "Physical Packout Protocol: Original CNIC/Passport, Charger & Gear",
            "subject": "logistics",
            "code": "PACKOUT",
            "topic": "Exam Bag Preparation",
            "timeSlot": "6:30 PM - 6:50 PM",
            "durationMinutes": 20,
            "completed": false
          }
        ],
        "id": "2026-11-05",
        "weekId": "week-8",
        "weekNumber": 8,
        "weekTitle": "Final Exam Week Taper, Packout & Official SAT Exam Day"
      },
      {
        "dateStr": "2026-11-06",
        "formattedDate": "Fri Nov 6",
        "dayOfWeek": "Fri",
        "phase": "exam",
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "isBuffer": true,
        "isTestDay": false,
        "specialInstructions": "FULL REST: Zero studying. Hydrate, eat a solid dinner, and sleep by 10:00 PM.",
        "tasks": [
          {
            "id": "w8-d5-1",
            "label": "FULL REST: No Studying, Mental Recovery & Early Sleep (10:00 PM Curfew)",
            "subject": "buffer",
            "code": "PRE-EXAM REST",
            "topic": "Pre-Exam Mental Recovery",
            "completed": false
          }
        ],
        "id": "2026-11-06",
        "weekId": "week-8",
        "weekNumber": 8,
        "weekTitle": "Final Exam Week Taper, Packout & Official SAT Exam Day"
      },
      {
        "dateStr": "2026-11-07",
        "formattedDate": "Sat Nov 7",
        "dayOfWeek": "Sat",
        "phase": "exam",
        "studyTimeMinutes": 144,
        "breakTimeMinutes": 10,
        "totalTimeMinutes": 154,
        "isBuffer": false,
        "isTestDay": true,
        "specialInstructions": "Sat Nov 7 -- OFFICIAL EXAM DAY: Crescent Model School, Shadman Lahore. Arrive by 7:15 AM sharp (gates lock at 7:45 AM). Stay calm and execute.",
        "tasks": [
          {
            "id": "sat-exam-day",
            "label": "OFFICIAL SAT EXAM: Crescent Model School (7:15 AM Arrival)",
            "subject": "test",
            "code": "EXAM DAY",
            "topic": "Official SAT Examination",
            "timeSlot": "7:15 AM - 12:30 PM",
            "durationMinutes": 144,
            "completed": false
          }
        ],
        "id": "2026-11-07",
        "weekId": "week-8",
        "weekNumber": 8,
        "weekTitle": "Final Exam Week Taper, Packout & Official SAT Exam Day"
      }
    ]
  }
];
