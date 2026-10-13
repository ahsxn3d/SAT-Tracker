import { WeekPlan, PackingItem } from '../types';

export type { PackingItem } from '../types';

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
    "subtitle": "Days 1-6 cover unit conversion, distributions, scatterplots, factoring & polynomial expressions (Completed).",
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
        "specialInstructions": "Day 1 (DONE): Completed historical foundations record (Sep 14 - Sep 21).",
        "tasks": [
          {
            "id": "task-2026-09-14-1",
            "label": "[MATH U3.2] Unit conversion",
            "subject": "math",
            "code": "Math U3.2",
            "topic": "Unit conversion",
            "timeSlot": "6:30 PM - 6:50 PM",
            "durationMinutes": 20,
            "completed": true
          },
          {
            "id": "task-2026-09-14-2",
            "label": "[MATH U3.3] Percentages",
            "subject": "math",
            "code": "Math U3.3",
            "topic": "Percentages",
            "timeSlot": "6:50 PM - 7:10 PM",
            "durationMinutes": 20,
            "completed": true
          },
          {
            "id": "task-2026-09-14-3",
            "label": "[MATH U3.4] Center, spread, and shape of distributions",
            "subject": "math",
            "code": "Math U3.4",
            "topic": "Center, spread, and shape of distributions",
            "timeSlot": "7:10 PM - 7:30 PM",
            "durationMinutes": 20,
            "completed": true
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
            "completed": true
          }
        ]
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
        "specialInstructions": "Day 2 (DONE): Completed historical foundations record (Sep 14 - Sep 21).",
        "tasks": [
          {
            "id": "task-2026-09-15-1",
            "label": "[MATH U3.6] Scatterplots",
            "subject": "math",
            "code": "Math U3.6",
            "topic": "Scatterplots",
            "timeSlot": "6:30 PM - 6:50 PM",
            "durationMinutes": 20,
            "completed": true
          },
          {
            "id": "task-2026-09-15-2",
            "label": "[MATH U3.7] Linear and exponential growth",
            "subject": "math",
            "code": "Math U3.7",
            "topic": "Linear and exponential growth",
            "timeSlot": "6:50 PM - 7:10 PM",
            "durationMinutes": 20,
            "completed": true
          },
          {
            "id": "task-2026-09-15-3",
            "label": "[MATH U3.8] Probability and relative frequency",
            "subject": "math",
            "code": "Math U3.8",
            "topic": "Probability and relative frequency",
            "timeSlot": "7:10 PM - 7:30 PM",
            "durationMinutes": 20,
            "completed": true
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
            "completed": true
          }
        ]
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
        "studyTimeMinutes": 135,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 165,
        "specialInstructions": "Day 3 (DONE): Completed historical foundations record (Sep 14 - Sep 21).",
        "tasks": [
          {
            "id": "task-2026-09-16-1",
            "label": "[MATH U3.10] Evaluating statistical claims",
            "subject": "math",
            "code": "Math U3.10",
            "topic": "Evaluating statistical claims",
            "timeSlot": "6:30 PM - 6:50 PM",
            "durationMinutes": 20,
            "completed": true
          },
          {
            "id": "task-2026-09-16-2",
            "label": "[MATH U4.1] Factoring quadratic and polynomial expressions",
            "subject": "math",
            "code": "Math U4.1",
            "topic": "Factoring quadratic and polynomial expressions",
            "timeSlot": "6:50 PM - 7:15 PM",
            "durationMinutes": 25,
            "completed": true
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
            "completed": true
          },
          {
            "id": "task-2026-09-16-5",
            "label": "[MATH U4.3] Operations with polynomials",
            "subject": "math",
            "code": "Math U4.3",
            "topic": "Operations with polynomials",
            "timeSlot": "7:55 PM - 8:20 PM",
            "durationMinutes": 25,
            "completed": true
          },
          {
            "id": "break-2026-09-16-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "8:20 PM - 8:35 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-09-16-7",
            "label": "[R&W U3.1] Words in context",
            "subject": "rw",
            "code": "R&W U3.1",
            "topic": "Words in context",
            "timeSlot": "8:35 PM - 8:55 PM",
            "durationMinutes": 20,
            "completed": true
          },
          {
            "id": "task-2026-09-16-8",
            "label": "[R&W U3.2] Text structure and purpose",
            "subject": "rw",
            "code": "R&W U3.2",
            "topic": "Text structure and purpose",
            "timeSlot": "8:55 PM - 9:15 PM",
            "durationMinutes": 20,
            "completed": true
          }
        ]
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
        "studyTimeMinutes": 115,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 145,
        "specialInstructions": "Day 4 (DONE): Completed historical foundations record (Sep 14 - Sep 21).",
        "tasks": [
          {
            "id": "task-2026-09-17-1",
            "label": "[MATH U4.4] Operations with rational expressions",
            "subject": "math",
            "code": "Math U4.4",
            "topic": "Operations with rational expressions",
            "timeSlot": "6:30 PM - 6:55 PM",
            "durationMinutes": 25,
            "completed": true
          },
          {
            "id": "task-2026-09-17-2",
            "label": "[MATH U4.5] Nonlinear functions",
            "subject": "math",
            "code": "Math U4.5",
            "topic": "Nonlinear functions",
            "timeSlot": "6:55 PM - 7:20 PM",
            "durationMinutes": 25,
            "completed": true
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
            "completed": true
          },
          {
            "id": "task-2026-09-17-5",
            "label": "[R&W U3.3] Cross-text connections",
            "subject": "rw",
            "code": "R&W U3.3",
            "topic": "Cross-text connections",
            "timeSlot": "8:00 PM - 8:20 PM",
            "durationMinutes": 20,
            "completed": true
          },
          {
            "id": "break-2026-09-17-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "8:20 PM - 8:35 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-09-17-7",
            "label": "[R&W U4.1] Transitions",
            "subject": "rw",
            "code": "R&W U4.1",
            "topic": "Transitions",
            "timeSlot": "8:35 PM - 8:55 PM",
            "durationMinutes": 20,
            "completed": true
          }
        ]
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
        "studyTimeMinutes": 115,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 145,
        "specialInstructions": "Day 5 (DONE): Completed historical foundations record (Sep 14 - Sep 21).",
        "tasks": [
          {
            "id": "task-2026-09-18-1",
            "label": "[MATH U4.7] Solving quadratic equations",
            "subject": "math",
            "code": "Math U4.7",
            "topic": "Solving quadratic equations",
            "timeSlot": "6:30 PM - 6:55 PM",
            "durationMinutes": 25,
            "completed": true
          },
          {
            "id": "task-2026-09-18-2",
            "label": "[MATH U4.8] Linear and quadratic systems",
            "subject": "math",
            "code": "Math U4.8",
            "topic": "Linear and quadratic systems",
            "timeSlot": "6:55 PM - 7:20 PM",
            "durationMinutes": 25,
            "completed": true
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
            "completed": true
          },
          {
            "id": "task-2026-09-18-5",
            "label": "[R&W U4.2] Rhetorical synthesis",
            "subject": "rw",
            "code": "R&W U4.2",
            "topic": "Rhetorical synthesis",
            "timeSlot": "8:00 PM - 8:20 PM",
            "durationMinutes": 20,
            "completed": true
          },
          {
            "id": "break-2026-09-18-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "8:20 PM - 8:35 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-09-18-7",
            "label": "[R&W U4.3] Form, structure, and sense",
            "subject": "rw",
            "code": "R&W U4.3",
            "topic": "Form, structure, and sense",
            "timeSlot": "8:35 PM - 8:55 PM",
            "durationMinutes": 20,
            "completed": true
          }
        ]
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
        "studyTimeMinutes": 117,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 147,
        "specialInstructions": "Day 6 (DONE): Completed historical foundations record (Sep 14 - Sep 21).",
        "tasks": [
          {
            "id": "task-2026-09-19-1",
            "label": "[MATH U4.10] Quadratic and exponential word problems",
            "subject": "math",
            "code": "Math U4.10",
            "topic": "Quadratic and exponential word problems",
            "timeSlot": "6:30 PM - 6:55 PM",
            "durationMinutes": 25,
            "completed": true
          },
          {
            "id": "task-2026-09-19-2",
            "label": "[MATH U4.11] Quadratic graphs",
            "subject": "math",
            "code": "Math U4.11",
            "topic": "Quadratic graphs",
            "timeSlot": "6:55 PM - 7:20 PM",
            "durationMinutes": 25,
            "completed": true
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
            "completed": true
          },
          {
            "id": "task-2026-09-19-5",
            "label": "[R&W U4.4] Boundaries",
            "subject": "rw",
            "code": "R&W U4.4",
            "topic": "Boundaries",
            "timeSlot": "8:00 PM - 8:20 PM",
            "durationMinutes": 20,
            "completed": true
          },
          {
            "id": "break-2026-09-19-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "8:20 PM - 8:35 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-09-19-7",
            "label": "[R&W U5.1] Command of textual evidence",
            "subject": "rw",
            "code": "R&W U5.1",
            "topic": "Command of textual evidence",
            "timeSlot": "8:35 PM - 8:57 PM",
            "durationMinutes": 22,
            "completed": true
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
        "weekTitle": "Problem Solving & Advanced Math Foundations",
        "phase": "foundations",
        "isBuffer": true,
        "isTestDay": false,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "specialInstructions": "Guaranteed Rest Day: Zero assigned lessons. Allow complete mental recharge, sleep, and physical recovery.",
        "tasks": [
          {
            "id": "rest-2026-09-20",
            "label": "Full Rest & Cognitive Recovery • Zero Assigned Study",
            "subject": "buffer",
            "code": "REST",
            "topic": "Cognitive Recovery",
            "completed": false
          }
        ]
      }
    ]
  },
  {
    "id": "week-2",
    "title": "Week 2: Day 7 & Illness Recovery Buffer Window",
    "dateRange": "Sep 21 to Sep 27",
    "subtitle": "Day 7 completed on Sep 21, followed by Sep 22-27 buffer window for illness recovery.",
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
        "weekTitle": "Day 7 & Illness Recovery Buffer Window",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 129,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 159,
        "specialInstructions": "Day 7 (DONE): Completed historical foundations record (Sep 14 - Sep 21).",
        "tasks": [
          {
            "id": "task-2026-09-21-1",
            "label": "[MATH U4.13] Polynomial and other nonlinear graphs",
            "subject": "math",
            "code": "Math U4.13",
            "topic": "Polynomial and other nonlinear graphs",
            "timeSlot": "6:30 PM - 6:55 PM",
            "durationMinutes": 25,
            "completed": true
          },
          {
            "id": "task-2026-09-21-2",
            "label": "[MATH U5.1] Area and volume",
            "subject": "math",
            "code": "Math U5.1",
            "topic": "Area and volume",
            "timeSlot": "6:55 PM - 7:25 PM",
            "durationMinutes": 30,
            "completed": true
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
            "completed": true
          },
          {
            "id": "task-2026-09-21-5",
            "label": "[R&W U5.2] Command of quantitative evidence",
            "subject": "rw",
            "code": "R&W U5.2",
            "topic": "Command of quantitative evidence",
            "timeSlot": "8:10 PM - 8:32 PM",
            "durationMinutes": 22,
            "completed": true
          },
          {
            "id": "break-2026-09-21-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "8:32 PM - 8:47 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-09-21-7",
            "label": "[R&W U5.3] Central ideas and details",
            "subject": "rw",
            "code": "R&W U5.3",
            "topic": "Central ideas and details",
            "timeSlot": "8:47 PM - 9:09 PM",
            "durationMinutes": 22,
            "completed": true
          }
        ]
      },
      {
        "id": "2026-09-22",
        "dateStr": "2026-09-22",
        "dayOfWeek": "Tue",
        "formattedDate": "Tue Sep 22",
        "weekId": "week-2",
        "weekNumber": 2,
        "weekTitle": "Day 7 & Illness Recovery Buffer Window",
        "phase": "foundations",
        "isBuffer": true,
        "isTestDay": false,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "specialInstructions": "Recovery Buffer: 0 study minutes. Rest, hydrate, sleep, and rebuild mental strength.",
        "tasks": [
          {
            "id": "buffer-2026-09-22",
            "label": "Recovery & Mental Rest • Zero Study Load",
            "subject": "buffer",
            "code": "BUFFER",
            "topic": "Recovery & Rest",
            "completed": false
          }
        ]
      },
      {
        "id": "2026-09-23",
        "dateStr": "2026-09-23",
        "dayOfWeek": "Wed",
        "formattedDate": "Wed Sep 23",
        "weekId": "week-2",
        "weekNumber": 2,
        "weekTitle": "Day 7 & Illness Recovery Buffer Window",
        "phase": "foundations",
        "isBuffer": true,
        "isTestDay": false,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "specialInstructions": "Recovery Buffer: 0 study minutes. Rest, hydrate, sleep, and rebuild mental strength.",
        "tasks": [
          {
            "id": "buffer-2026-09-23",
            "label": "Recovery & Mental Rest • Zero Study Load",
            "subject": "buffer",
            "code": "BUFFER",
            "topic": "Recovery & Rest",
            "completed": false
          }
        ]
      },
      {
        "id": "2026-09-24",
        "dateStr": "2026-09-24",
        "dayOfWeek": "Thu",
        "formattedDate": "Thu Sep 24",
        "weekId": "week-2",
        "weekNumber": 2,
        "weekTitle": "Day 7 & Illness Recovery Buffer Window",
        "phase": "foundations",
        "isBuffer": true,
        "isTestDay": false,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "specialInstructions": "Recovery Buffer: 0 study minutes. Rest, hydrate, sleep, and rebuild mental strength.",
        "tasks": [
          {
            "id": "buffer-2026-09-24",
            "label": "Recovery & Mental Rest • Zero Study Load",
            "subject": "buffer",
            "code": "BUFFER",
            "topic": "Recovery & Rest",
            "completed": false
          }
        ]
      },
      {
        "id": "2026-09-25",
        "dateStr": "2026-09-25",
        "dayOfWeek": "Fri",
        "formattedDate": "Fri Sep 25",
        "weekId": "week-2",
        "weekNumber": 2,
        "weekTitle": "Day 7 & Illness Recovery Buffer Window",
        "phase": "foundations",
        "isBuffer": true,
        "isTestDay": false,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "specialInstructions": "Recovery Buffer: 0 study minutes. Rest, hydrate, sleep, and rebuild mental strength.",
        "tasks": [
          {
            "id": "buffer-2026-09-25",
            "label": "Recovery & Mental Rest • Zero Study Load",
            "subject": "buffer",
            "code": "BUFFER",
            "topic": "Recovery & Rest",
            "completed": false
          }
        ]
      },
      {
        "id": "2026-09-26",
        "dateStr": "2026-09-26",
        "dayOfWeek": "Sat",
        "formattedDate": "Sat Sep 26",
        "weekId": "week-2",
        "weekNumber": 2,
        "weekTitle": "Day 7 & Illness Recovery Buffer Window",
        "phase": "foundations",
        "isBuffer": true,
        "isTestDay": false,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "specialInstructions": "Recovery Buffer: 0 study minutes. Rest, hydrate, sleep, and rebuild mental strength.",
        "tasks": [
          {
            "id": "buffer-2026-09-26",
            "label": "Recovery & Mental Rest • Zero Study Load",
            "subject": "buffer",
            "code": "BUFFER",
            "topic": "Recovery & Rest",
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
        "weekTitle": "Day 7 & Illness Recovery Buffer Window",
        "phase": "foundations",
        "isBuffer": true,
        "isTestDay": false,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "specialInstructions": "Recovery Buffer: 0 study minutes. Rest, hydrate, sleep, and rebuild mental strength.",
        "tasks": [
          {
            "id": "buffer-2026-09-27",
            "label": "Recovery & Mental Rest • Zero Study Load",
            "subject": "buffer",
            "code": "BUFFER",
            "topic": "Recovery & Rest",
            "completed": false
          }
        ]
      }
    ]
  },
  {
    "id": "week-3",
    "title": "Week 3: Recovery Buffer Window (Sep 28 - Oct 04)",
    "dateRange": "Sep 28 to Oct 04",
    "subtitle": "Sep 28 to Oct 04 full illness and recovery buffer window.",
    "phase": "foundations",
    "days": [
      {
        "id": "2026-09-28",
        "dateStr": "2026-09-28",
        "dayOfWeek": "Mon",
        "formattedDate": "Mon Sep 28",
        "weekId": "week-3",
        "weekNumber": 3,
        "weekTitle": "Recovery Buffer Window (Sep 28 - Oct 04)",
        "phase": "foundations",
        "isBuffer": true,
        "isTestDay": false,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "specialInstructions": "Recovery Buffer: 0 study minutes. Rest, hydrate, sleep, and rebuild mental strength.",
        "tasks": [
          {
            "id": "buffer-2026-09-28",
            "label": "Recovery & Mental Rest • Zero Study Load",
            "subject": "buffer",
            "code": "BUFFER",
            "topic": "Recovery & Rest",
            "completed": false
          }
        ]
      },
      {
        "id": "2026-09-29",
        "dateStr": "2026-09-29",
        "dayOfWeek": "Tue",
        "formattedDate": "Tue Sep 29",
        "weekId": "week-3",
        "weekNumber": 3,
        "weekTitle": "Recovery Buffer Window (Sep 28 - Oct 04)",
        "phase": "foundations",
        "isBuffer": true,
        "isTestDay": false,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "specialInstructions": "Recovery Buffer: 0 study minutes. Rest, hydrate, sleep, and rebuild mental strength.",
        "tasks": [
          {
            "id": "buffer-2026-09-29",
            "label": "Recovery & Mental Rest • Zero Study Load",
            "subject": "buffer",
            "code": "BUFFER",
            "topic": "Recovery & Rest",
            "completed": false
          }
        ]
      },
      {
        "id": "2026-09-30",
        "dateStr": "2026-09-30",
        "dayOfWeek": "Wed",
        "formattedDate": "Wed Sep 30",
        "weekId": "week-3",
        "weekNumber": 3,
        "weekTitle": "Recovery Buffer Window (Sep 28 - Oct 04)",
        "phase": "foundations",
        "isBuffer": true,
        "isTestDay": false,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "specialInstructions": "Recovery Buffer: 0 study minutes. Rest, hydrate, sleep, and rebuild mental strength.",
        "tasks": [
          {
            "id": "buffer-2026-09-30",
            "label": "Recovery & Mental Rest • Zero Study Load",
            "subject": "buffer",
            "code": "BUFFER",
            "topic": "Recovery & Rest",
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-01",
        "dateStr": "2026-10-01",
        "dayOfWeek": "Thu",
        "formattedDate": "Thu Oct 01",
        "weekId": "week-3",
        "weekNumber": 3,
        "weekTitle": "Recovery Buffer Window (Sep 28 - Oct 04)",
        "phase": "foundations",
        "isBuffer": true,
        "isTestDay": false,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "specialInstructions": "Recovery Buffer: 0 study minutes. Rest, hydrate, sleep, and rebuild mental strength.",
        "tasks": [
          {
            "id": "buffer-2026-10-01",
            "label": "Recovery & Mental Rest • Zero Study Load",
            "subject": "buffer",
            "code": "BUFFER",
            "topic": "Recovery & Rest",
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-02",
        "dateStr": "2026-10-02",
        "dayOfWeek": "Fri",
        "formattedDate": "Fri Oct 02",
        "weekId": "week-3",
        "weekNumber": 3,
        "weekTitle": "Recovery Buffer Window (Sep 28 - Oct 04)",
        "phase": "foundations",
        "isBuffer": true,
        "isTestDay": false,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "specialInstructions": "Recovery Buffer: 0 study minutes. Rest, hydrate, sleep, and rebuild mental strength.",
        "tasks": [
          {
            "id": "buffer-2026-10-02",
            "label": "Recovery & Mental Rest • Zero Study Load",
            "subject": "buffer",
            "code": "BUFFER",
            "topic": "Recovery & Rest",
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-03",
        "dateStr": "2026-10-03",
        "dayOfWeek": "Sat",
        "formattedDate": "Sat Oct 03",
        "weekId": "week-3",
        "weekNumber": 3,
        "weekTitle": "Recovery Buffer Window (Sep 28 - Oct 04)",
        "phase": "foundations",
        "isBuffer": true,
        "isTestDay": false,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "specialInstructions": "Recovery Buffer: 0 study minutes. Rest, hydrate, sleep, and rebuild mental strength.",
        "tasks": [
          {
            "id": "buffer-2026-10-03",
            "label": "Recovery & Mental Rest • Zero Study Load",
            "subject": "buffer",
            "code": "BUFFER",
            "topic": "Recovery & Rest",
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-04",
        "dateStr": "2026-10-04",
        "dayOfWeek": "Sun",
        "formattedDate": "Sun Oct 04",
        "weekId": "week-3",
        "weekNumber": 3,
        "weekTitle": "Recovery Buffer Window (Sep 28 - Oct 04)",
        "phase": "foundations",
        "isBuffer": true,
        "isTestDay": false,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "specialInstructions": "Recovery Buffer: 0 study minutes. Rest, hydrate, sleep, and rebuild mental strength.",
        "tasks": [
          {
            "id": "buffer-2026-10-04",
            "label": "Recovery & Mental Rest • Zero Study Load",
            "subject": "buffer",
            "code": "BUFFER",
            "topic": "Recovery & Rest",
            "completed": false
          }
        ]
      }
    ]
  },
  {
    "id": "week-4",
    "title": "Week 4: Pre-Restart Buffer Window (Oct 05 - Oct 11)",
    "dateRange": "Oct 05 to Oct 11",
    "subtitle": "Oct 05 to Oct 11 buffer and physical rest window before fresh restart.",
    "phase": "foundations",
    "days": [
      {
        "id": "2026-10-05",
        "dateStr": "2026-10-05",
        "dayOfWeek": "Mon",
        "formattedDate": "Mon Oct 05",
        "weekId": "week-4",
        "weekNumber": 4,
        "weekTitle": "Pre-Restart Buffer Window (Oct 05 - Oct 11)",
        "phase": "foundations",
        "isBuffer": true,
        "isTestDay": false,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "specialInstructions": "Recovery Buffer: 0 study minutes. Rest, hydrate, sleep, and rebuild mental strength.",
        "tasks": [
          {
            "id": "buffer-2026-10-05",
            "label": "Recovery & Mental Rest • Zero Study Load",
            "subject": "buffer",
            "code": "BUFFER",
            "topic": "Recovery & Rest",
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-06",
        "dateStr": "2026-10-06",
        "dayOfWeek": "Tue",
        "formattedDate": "Tue Oct 06",
        "weekId": "week-4",
        "weekNumber": 4,
        "weekTitle": "Pre-Restart Buffer Window (Oct 05 - Oct 11)",
        "phase": "foundations",
        "isBuffer": true,
        "isTestDay": false,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "specialInstructions": "Recovery Buffer: 0 study minutes. Rest, hydrate, sleep, and rebuild mental strength.",
        "tasks": [
          {
            "id": "buffer-2026-10-06",
            "label": "Recovery & Mental Rest • Zero Study Load",
            "subject": "buffer",
            "code": "BUFFER",
            "topic": "Recovery & Rest",
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-07",
        "dateStr": "2026-10-07",
        "dayOfWeek": "Wed",
        "formattedDate": "Wed Oct 07",
        "weekId": "week-4",
        "weekNumber": 4,
        "weekTitle": "Pre-Restart Buffer Window (Oct 05 - Oct 11)",
        "phase": "foundations",
        "isBuffer": true,
        "isTestDay": false,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "specialInstructions": "Recovery Buffer: 0 study minutes. Rest, hydrate, sleep, and rebuild mental strength.",
        "tasks": [
          {
            "id": "buffer-2026-10-07",
            "label": "Recovery & Mental Rest • Zero Study Load",
            "subject": "buffer",
            "code": "BUFFER",
            "topic": "Recovery & Rest",
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-08",
        "dateStr": "2026-10-08",
        "dayOfWeek": "Thu",
        "formattedDate": "Thu Oct 08",
        "weekId": "week-4",
        "weekNumber": 4,
        "weekTitle": "Pre-Restart Buffer Window (Oct 05 - Oct 11)",
        "phase": "foundations",
        "isBuffer": true,
        "isTestDay": false,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "specialInstructions": "Recovery Buffer: 0 study minutes. Rest, hydrate, sleep, and rebuild mental strength.",
        "tasks": [
          {
            "id": "buffer-2026-10-08",
            "label": "Recovery & Mental Rest • Zero Study Load",
            "subject": "buffer",
            "code": "BUFFER",
            "topic": "Recovery & Rest",
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-09",
        "dateStr": "2026-10-09",
        "dayOfWeek": "Fri",
        "formattedDate": "Fri Oct 09",
        "weekId": "week-4",
        "weekNumber": 4,
        "weekTitle": "Pre-Restart Buffer Window (Oct 05 - Oct 11)",
        "phase": "foundations",
        "isBuffer": true,
        "isTestDay": false,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "specialInstructions": "Recovery Buffer: 0 study minutes. Rest, hydrate, sleep, and rebuild mental strength.",
        "tasks": [
          {
            "id": "buffer-2026-10-09",
            "label": "Recovery & Mental Rest • Zero Study Load",
            "subject": "buffer",
            "code": "BUFFER",
            "topic": "Recovery & Rest",
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-10",
        "dateStr": "2026-10-10",
        "dayOfWeek": "Sat",
        "formattedDate": "Sat Oct 10",
        "weekId": "week-4",
        "weekNumber": 4,
        "weekTitle": "Pre-Restart Buffer Window (Oct 05 - Oct 11)",
        "phase": "foundations",
        "isBuffer": true,
        "isTestDay": false,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "specialInstructions": "Recovery Buffer: 0 study minutes. Rest, hydrate, sleep, and rebuild mental strength.",
        "tasks": [
          {
            "id": "buffer-2026-10-10",
            "label": "Recovery & Mental Rest • Zero Study Load",
            "subject": "buffer",
            "code": "BUFFER",
            "topic": "Recovery & Rest",
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
        "weekTitle": "Pre-Restart Buffer Window (Oct 05 - Oct 11)",
        "phase": "foundations",
        "isBuffer": true,
        "isTestDay": false,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "specialInstructions": "Recovery Buffer: 0 study minutes. Rest, hydrate, sleep, and rebuild mental strength.",
        "tasks": [
          {
            "id": "buffer-2026-10-11",
            "label": "Recovery & Mental Rest • Zero Study Load",
            "subject": "buffer",
            "code": "BUFFER",
            "topic": "Recovery & Rest",
            "completed": false
          }
        ]
      }
    ]
  },
  {
    "id": "week-5",
    "title": "Week 5: Math Chapter 7 & English Chapter 5 Launch (Oct 12 - Oct 18)",
    "dateRange": "Oct 12 to Oct 18",
    "subtitle": "Oct 12 Buffer, followed by Days 1-6: Chapter 5 Repairs, Math Chapter 7, Unit 8 and R&W Units 5-8.",
    "phase": "foundations",
    "days": [
      {
        "id": "2026-10-12",
        "dateStr": "2026-10-12",
        "dayOfWeek": "Mon",
        "formattedDate": "Mon Oct 12",
        "weekId": "week-5",
        "weekNumber": 5,
        "weekTitle": "Math Chapter 7 & English Chapter 5 Launch (Oct 12 - Oct 18)",
        "phase": "foundations",
        "isBuffer": true,
        "isTestDay": false,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "specialInstructions": "Recovery Buffer: 0 study minutes. Rest, hydrate, sleep, and rebuild mental strength.",
        "tasks": [
          {
            "id": "buffer-2026-10-12",
            "label": "Recovery & Mental Rest • Zero Study Load",
            "subject": "buffer",
            "code": "BUFFER",
            "topic": "Recovery & Rest",
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-13",
        "dateStr": "2026-10-13",
        "dayOfWeek": "Tue",
        "formattedDate": "Tue Oct 13",
        "dayNumber": 1,
        "weekId": "week-5",
        "weekNumber": 5,
        "weekTitle": "Math Chapter 7 & English Chapter 5 Launch (Oct 12 - Oct 18)",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 139,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 169,
        "specialInstructions": "Day 1: Official launch today! Chapter 5 Repair A, Math Chapter 7 (Problem Solving & Data Analysis), and R&W Chapter 5 (Information & Ideas).",
        "tasks": [
          {
            "id": "task-2026-10-13-1",
            "label": "[MATH R5A] CHAPTER 5 REPAIR A: area + volume, congruence + similarity + angles",
            "subject": "math",
            "code": "Math R5A",
            "topic": "CHAPTER 5 REPAIR A: area + volume, congruence + similarity + angles",
            "timeSlot": "6:30 PM - 7:15 PM",
            "durationMinutes": 45,
            "completed": false
          },
          {
            "id": "break-2026-10-13-2",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:15 PM - 7:30 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-13-3",
            "label": "[MATH U7.1] Ratios, rates, and proportions",
            "subject": "math",
            "code": "Math U7.1",
            "topic": "Ratios, rates, and proportions",
            "timeSlot": "7:30 PM - 7:55 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-10-13-4",
            "label": "[MATH U7.2] Unit conversion",
            "subject": "math",
            "code": "Math U7.2",
            "topic": "Unit conversion",
            "timeSlot": "7:55 PM - 8:20 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "break-2026-10-13-5",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "8:20 PM - 8:35 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-13-6",
            "label": "[R&W U5.1] Command of textual evidence",
            "subject": "rw",
            "code": "R&W U5.1",
            "topic": "Command of textual evidence",
            "timeSlot": "8:35 PM - 8:57 PM",
            "durationMinutes": 22,
            "completed": false
          },
          {
            "id": "task-2026-10-13-7",
            "label": "[R&W U5.2] Command of quantitative evidence",
            "subject": "rw",
            "code": "R&W U5.2",
            "topic": "Command of quantitative evidence",
            "timeSlot": "8:57 PM - 9:19 PM",
            "durationMinutes": 22,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-14",
        "dateStr": "2026-10-14",
        "dayOfWeek": "Wed",
        "formattedDate": "Wed Oct 14",
        "dayNumber": 2,
        "weekId": "week-5",
        "weekNumber": 5,
        "weekTitle": "Math Chapter 7 & English Chapter 5 Launch (Oct 12 - Oct 18)",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 192,
        "breakTimeMinutes": 45,
        "totalTimeMinutes": 237,
        "specialInstructions": "Day 2: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals.",
        "tasks": [
          {
            "id": "task-2026-10-14-1",
            "label": "[MATH R5B] CHAPTER 5 REPAIR B: right triangle trig",
            "subject": "math",
            "code": "Math R5B",
            "topic": "CHAPTER 5 REPAIR B: right triangle trig",
            "timeSlot": "6:30 PM - 7:15 PM",
            "durationMinutes": 45,
            "completed": false
          },
          {
            "id": "break-2026-10-14-2",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:15 PM - 7:30 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-14-3",
            "label": "[MATH U7.3] Percentages",
            "subject": "math",
            "code": "Math U7.3",
            "topic": "Percentages",
            "timeSlot": "7:30 PM - 7:55 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-10-14-4",
            "label": "[MATH U7.4] Center, spread, and shape of distributions",
            "subject": "math",
            "code": "Math U7.4",
            "topic": "Center, spread, and shape of distributions",
            "timeSlot": "7:55 PM - 8:20 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "break-2026-10-14-5",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "8:20 PM - 8:35 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-14-6",
            "label": "[MATH U7.5] Data representations",
            "subject": "math",
            "code": "Math U7.5",
            "topic": "Data representations",
            "timeSlot": "8:35 PM - 9:00 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-10-14-7",
            "label": "[MATH U7.6] Scatterplots",
            "subject": "math",
            "code": "Math U7.6",
            "topic": "Scatterplots",
            "timeSlot": "9:00 PM - 9:25 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "break-2026-10-14-8",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "9:25 PM - 9:40 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-14-9",
            "label": "[MATH U7.7] Linear and exponential growth",
            "subject": "math",
            "code": "Math U7.7",
            "topic": "Linear and exponential growth",
            "timeSlot": "9:40 PM - 10:05 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-10-14-10",
            "label": "[R&W U5.3] Central ideas and details",
            "subject": "rw",
            "code": "R&W U5.3",
            "topic": "Central ideas and details",
            "timeSlot": "10:05 PM - 10:27 PM",
            "durationMinutes": 22,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-15",
        "dateStr": "2026-10-15",
        "dayOfWeek": "Thu",
        "formattedDate": "Thu Oct 15",
        "dayNumber": 3,
        "weekId": "week-5",
        "weekNumber": 5,
        "weekTitle": "Math Chapter 7 & English Chapter 5 Launch (Oct 12 - Oct 18)",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 171,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 201,
        "specialInstructions": "Day 3: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals.",
        "tasks": [
          {
            "id": "task-2026-10-15-1",
            "label": "[MATH U7.8] Probability and relative frequency",
            "subject": "math",
            "code": "Math U7.8",
            "topic": "Probability and relative frequency",
            "timeSlot": "6:30 PM - 6:55 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-10-15-2",
            "label": "[MATH U7.9] Data inferences",
            "subject": "math",
            "code": "Math U7.9",
            "topic": "Data inferences",
            "timeSlot": "6:55 PM - 7:20 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "break-2026-10-15-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:20 PM - 7:35 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-15-4",
            "label": "[MATH U7.10] Evaluating statistical claims",
            "subject": "math",
            "code": "Math U7.10",
            "topic": "Evaluating statistical claims",
            "timeSlot": "7:35 PM - 8:00 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-10-15-5",
            "label": "[MATH U8.1] Factoring quadratic and polynomial expressions",
            "subject": "math",
            "code": "Math U8.1",
            "topic": "Factoring quadratic and polynomial expressions",
            "timeSlot": "8:00 PM - 8:30 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "break-2026-10-15-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "8:30 PM - 8:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-15-7",
            "label": "[R&W U5.4] Inferences",
            "subject": "rw",
            "code": "R&W U5.4",
            "topic": "Inferences",
            "timeSlot": "8:45 PM - 9:07 PM",
            "durationMinutes": 22,
            "completed": false
          },
          {
            "id": "task-2026-10-15-8",
            "label": "[R&W U6.1] Words in context",
            "subject": "rw",
            "code": "R&W U6.1",
            "topic": "Words in context",
            "timeSlot": "9:07 PM - 9:29 PM",
            "durationMinutes": 22,
            "completed": false
          },
          {
            "id": "task-2026-10-15-9",
            "label": "[R&W U6.2] Text structure and purpose",
            "subject": "rw",
            "code": "R&W U6.2",
            "topic": "Text structure and purpose",
            "timeSlot": "9:29 PM - 9:51 PM",
            "durationMinutes": 22,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-16",
        "dateStr": "2026-10-16",
        "dayOfWeek": "Fri",
        "formattedDate": "Fri Oct 16",
        "dayNumber": 4,
        "weekId": "week-5",
        "weekNumber": 5,
        "weekTitle": "Math Chapter 7 & English Chapter 5 Launch (Oct 12 - Oct 18)",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 194,
        "breakTimeMinutes": 45,
        "totalTimeMinutes": 239,
        "specialInstructions": "Day 4: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals.",
        "tasks": [
          {
            "id": "task-2026-10-16-1",
            "label": "[MATH U8.2] Radicals and rational exponents",
            "subject": "math",
            "code": "Math U8.2",
            "topic": "Radicals and rational exponents",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-16-2",
            "label": "[MATH U8.3] Operations with polynomials",
            "subject": "math",
            "code": "Math U8.3",
            "topic": "Operations with polynomials",
            "timeSlot": "7:00 PM - 7:30 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "break-2026-10-16-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-16-4",
            "label": "[MATH U8.4] Operations with rational expressions",
            "subject": "math",
            "code": "Math U8.4",
            "topic": "Operations with rational expressions",
            "timeSlot": "7:45 PM - 8:15 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-16-5",
            "label": "[MATH U8.5] Nonlinear functions",
            "subject": "math",
            "code": "Math U8.5",
            "topic": "Nonlinear functions",
            "timeSlot": "8:15 PM - 8:45 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "break-2026-10-16-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "8:45 PM - 9:00 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-16-7",
            "label": "[MATH U8.6] Isolating quantities",
            "subject": "math",
            "code": "Math U8.6",
            "topic": "Isolating quantities",
            "timeSlot": "9:00 PM - 9:30 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-16-8",
            "label": "[R&W U6.3] Cross-text connections",
            "subject": "rw",
            "code": "R&W U6.3",
            "topic": "Cross-text connections",
            "timeSlot": "9:30 PM - 9:52 PM",
            "durationMinutes": 22,
            "completed": false
          },
          {
            "id": "break-2026-10-16-9",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "9:52 PM - 10:07 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-16-10",
            "label": "[R&W U7.1] Transitions",
            "subject": "rw",
            "code": "R&W U7.1",
            "topic": "Transitions",
            "timeSlot": "10:07 PM - 10:29 PM",
            "durationMinutes": 22,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-17",
        "dateStr": "2026-10-17",
        "dayOfWeek": "Sat",
        "formattedDate": "Sat Oct 17",
        "dayNumber": 5,
        "weekId": "week-5",
        "weekNumber": 5,
        "weekTitle": "Math Chapter 7 & English Chapter 5 Launch (Oct 12 - Oct 18)",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 186,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 216,
        "specialInstructions": "Day 5: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals.",
        "tasks": [
          {
            "id": "task-2026-10-17-1",
            "label": "[MATH U8.7] Solving quadratic equations",
            "subject": "math",
            "code": "Math U8.7",
            "topic": "Solving quadratic equations",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-17-2",
            "label": "[MATH U8.8] Linear and quadratic systems",
            "subject": "math",
            "code": "Math U8.8",
            "topic": "Linear and quadratic systems",
            "timeSlot": "7:00 PM - 7:30 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "break-2026-10-17-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-17-4",
            "label": "[MATH U8.9] Radical, rational, and absolute value equations",
            "subject": "math",
            "code": "Math U8.9",
            "topic": "Radical, rational, and absolute value equations",
            "timeSlot": "7:45 PM - 8:15 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-17-5",
            "label": "[MATH U8.10] Quadratic and exponential word problems",
            "subject": "math",
            "code": "Math U8.10",
            "topic": "Quadratic and exponential word problems",
            "timeSlot": "8:15 PM - 8:45 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "break-2026-10-17-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "8:45 PM - 9:00 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-17-7",
            "label": "[R&W U7.2] Rhetorical synthesis",
            "subject": "rw",
            "code": "R&W U7.2",
            "topic": "Rhetorical synthesis",
            "timeSlot": "9:00 PM - 9:22 PM",
            "durationMinutes": 22,
            "completed": false
          },
          {
            "id": "task-2026-10-17-8",
            "label": "[R&W U7.3] Form, structure, and sense",
            "subject": "rw",
            "code": "R&W U7.3",
            "topic": "Form, structure, and sense",
            "timeSlot": "9:22 PM - 9:44 PM",
            "durationMinutes": 22,
            "completed": false
          },
          {
            "id": "task-2026-10-17-9",
            "label": "[R&W U7.4] Boundaries",
            "subject": "rw",
            "code": "R&W U7.4",
            "topic": "Boundaries",
            "timeSlot": "9:44 PM - 10:06 PM",
            "durationMinutes": 22,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-18",
        "dateStr": "2026-10-18",
        "dayOfWeek": "Sun",
        "formattedDate": "Sun Oct 18",
        "dayNumber": 6,
        "weekId": "week-5",
        "weekNumber": 5,
        "weekTitle": "Math Chapter 7 & English Chapter 5 Launch (Oct 12 - Oct 18)",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 200,
        "breakTimeMinutes": 45,
        "totalTimeMinutes": 245,
        "specialInstructions": "Day 6: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals.",
        "tasks": [
          {
            "id": "task-2026-10-18-1",
            "label": "[MATH U8.11] Quadratic graphs",
            "subject": "math",
            "code": "Math U8.11",
            "topic": "Quadratic graphs",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-18-2",
            "label": "[MATH U8.12] Exponential graphs",
            "subject": "math",
            "code": "Math U8.12",
            "topic": "Exponential graphs",
            "timeSlot": "7:00 PM - 7:30 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "break-2026-10-18-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-18-4",
            "label": "[MATH U8.13] Polynomial and other nonlinear graphs",
            "subject": "math",
            "code": "Math U8.13",
            "topic": "Polynomial and other nonlinear graphs",
            "timeSlot": "7:45 PM - 8:15 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-18-5",
            "label": "[MATH U9.1] Area and volume",
            "subject": "math",
            "code": "Math U9.1",
            "topic": "Area and volume",
            "timeSlot": "8:15 PM - 8:50 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "break-2026-10-18-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "8:50 PM - 9:05 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-18-7",
            "label": "[R&W U8.1] Command of textual evidence",
            "subject": "rw",
            "code": "R&W U8.1",
            "topic": "Command of textual evidence",
            "timeSlot": "9:05 PM - 9:30 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-10-18-8",
            "label": "[R&W U8.2] Command of quantitative evidence",
            "subject": "rw",
            "code": "R&W U8.2",
            "topic": "Command of quantitative evidence",
            "timeSlot": "9:30 PM - 9:55 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "break-2026-10-18-9",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "9:55 PM - 10:10 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-18-10",
            "label": "[R&W U8.3] Central ideas and details",
            "subject": "rw",
            "code": "R&W U8.3",
            "topic": "Central ideas and details",
            "timeSlot": "10:10 PM - 10:35 PM",
            "durationMinutes": 25,
            "completed": false
          }
        ]
      }
    ]
  },
  {
    "id": "week-6",
    "title": "Week 6: Advanced Math, Geometry & Rhetorical Synthesis (Oct 19 - Oct 25)",
    "dateRange": "Oct 19 to Oct 25",
    "subtitle": "Days 7-13: Math Units 9-12 and R&W Units 8-12 comprehensive mastery drills.",
    "phase": "foundations",
    "days": [
      {
        "id": "2026-10-19",
        "dateStr": "2026-10-19",
        "dayOfWeek": "Mon",
        "formattedDate": "Mon Oct 19",
        "dayNumber": 7,
        "weekId": "week-6",
        "weekNumber": 6,
        "weekTitle": "Advanced Math, Geometry & Rhetorical Synthesis (Oct 19 - Oct 25)",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 190,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 220,
        "specialInstructions": "Day 7: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals.",
        "tasks": [
          {
            "id": "task-2026-10-19-1",
            "label": "[MATH U9.2] Congruence, similarity, and angle relationships",
            "subject": "math",
            "code": "Math U9.2",
            "topic": "Congruence, similarity, and angle relationships",
            "timeSlot": "6:30 PM - 7:05 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "task-2026-10-19-2",
            "label": "[MATH U9.3] Right triangle trigonometry",
            "subject": "math",
            "code": "Math U9.3",
            "topic": "Right triangle trigonometry",
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
            "label": "[MATH U9.4] Circle theorems",
            "subject": "math",
            "code": "Math U9.4",
            "topic": "Circle theorems",
            "timeSlot": "7:55 PM - 8:30 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "task-2026-10-19-5",
            "label": "[MATH U9.5] Unit circle trigonometry",
            "subject": "math",
            "code": "Math U9.5",
            "topic": "Unit circle trigonometry",
            "timeSlot": "8:30 PM - 9:05 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "break-2026-10-19-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "9:05 PM - 9:20 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-19-7",
            "label": "[R&W U8.4] Inferences",
            "subject": "rw",
            "code": "R&W U8.4",
            "topic": "Inferences",
            "timeSlot": "9:20 PM - 9:45 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-10-19-8",
            "label": "[R&W U9.1] Words in context",
            "subject": "rw",
            "code": "R&W U9.1",
            "topic": "Words in context",
            "timeSlot": "9:45 PM - 10:10 PM",
            "durationMinutes": 25,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-20",
        "dateStr": "2026-10-20",
        "dayOfWeek": "Tue",
        "formattedDate": "Tue Oct 20",
        "dayNumber": 8,
        "weekId": "week-6",
        "weekNumber": 6,
        "weekTitle": "Advanced Math, Geometry & Rhetorical Synthesis (Oct 19 - Oct 25)",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 200,
        "breakTimeMinutes": 45,
        "totalTimeMinutes": 245,
        "specialInstructions": "Day 8: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals.",
        "tasks": [
          {
            "id": "task-2026-10-20-1",
            "label": "[MATH U9.6] Circle equations",
            "subject": "math",
            "code": "Math U9.6",
            "topic": "Circle equations",
            "timeSlot": "6:30 PM - 7:05 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "task-2026-10-20-2",
            "label": "[MATH U10.1] Solving linear equations and inequalities",
            "subject": "math",
            "code": "Math U10.1",
            "topic": "Solving linear equations and inequalities",
            "timeSlot": "7:05 PM - 7:35 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "break-2026-10-20-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:35 PM - 7:50 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-20-4",
            "label": "[MATH U10.2] Linear equation word problems",
            "subject": "math",
            "code": "Math U10.2",
            "topic": "Linear equation word problems",
            "timeSlot": "7:50 PM - 8:20 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-20-5",
            "label": "[MATH U10.3] Linear relationship word problems",
            "subject": "math",
            "code": "Math U10.3",
            "topic": "Linear relationship word problems",
            "timeSlot": "8:20 PM - 8:50 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "break-2026-10-20-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "8:50 PM - 9:05 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-20-7",
            "label": "[R&W U9.2] Text structure and purpose",
            "subject": "rw",
            "code": "R&W U9.2",
            "topic": "Text structure and purpose",
            "timeSlot": "9:05 PM - 9:30 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-10-20-8",
            "label": "[R&W U9.3] Cross-text connections",
            "subject": "rw",
            "code": "R&W U9.3",
            "topic": "Cross-text connections",
            "timeSlot": "9:30 PM - 9:55 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "break-2026-10-20-9",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "9:55 PM - 10:10 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-20-10",
            "label": "[R&W U10.1] Transitions",
            "subject": "rw",
            "code": "R&W U10.1",
            "topic": "Transitions",
            "timeSlot": "10:10 PM - 10:35 PM",
            "durationMinutes": 25,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-21",
        "dateStr": "2026-10-21",
        "dayOfWeek": "Wed",
        "formattedDate": "Wed Oct 21",
        "dayNumber": 9,
        "weekId": "week-6",
        "weekNumber": 6,
        "weekTitle": "Advanced Math, Geometry & Rhetorical Synthesis (Oct 19 - Oct 25)",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 195,
        "breakTimeMinutes": 45,
        "totalTimeMinutes": 240,
        "specialInstructions": "Day 9: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals.",
        "tasks": [
          {
            "id": "task-2026-10-21-1",
            "label": "[MATH U10.4] Graphs of linear equations and functions",
            "subject": "math",
            "code": "Math U10.4",
            "topic": "Graphs of linear equations and functions",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-21-2",
            "label": "[MATH U10.5] Solving systems of linear equations",
            "subject": "math",
            "code": "Math U10.5",
            "topic": "Solving systems of linear equations",
            "timeSlot": "7:00 PM - 7:30 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "break-2026-10-21-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-21-4",
            "label": "[MATH U10.6] Systems of linear equations word problems",
            "subject": "math",
            "code": "Math U10.6",
            "topic": "Systems of linear equations word problems",
            "timeSlot": "7:45 PM - 8:15 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-21-5",
            "label": "[MATH U10.7] Linear inequality word problems",
            "subject": "math",
            "code": "Math U10.7",
            "topic": "Linear inequality word problems",
            "timeSlot": "8:15 PM - 8:45 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "break-2026-10-21-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "8:45 PM - 9:00 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-21-7",
            "label": "[R&W U10.2] Rhetorical synthesis",
            "subject": "rw",
            "code": "R&W U10.2",
            "topic": "Rhetorical synthesis",
            "timeSlot": "9:00 PM - 9:25 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-10-21-8",
            "label": "[R&W U10.3] Form, structure, and sense",
            "subject": "rw",
            "code": "R&W U10.3",
            "topic": "Form, structure, and sense",
            "timeSlot": "9:25 PM - 9:50 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "break-2026-10-21-9",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "9:50 PM - 10:05 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-21-10",
            "label": "[R&W U10.4] Boundaries",
            "subject": "rw",
            "code": "R&W U10.4",
            "topic": "Boundaries",
            "timeSlot": "10:05 PM - 10:30 PM",
            "durationMinutes": 25,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-22",
        "dateStr": "2026-10-22",
        "dayOfWeek": "Thu",
        "formattedDate": "Thu Oct 22",
        "dayNumber": 10,
        "weekId": "week-6",
        "weekNumber": 6,
        "weekTitle": "Advanced Math, Geometry & Rhetorical Synthesis (Oct 19 - Oct 25)",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 190,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 220,
        "specialInstructions": "Day 10: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals.",
        "tasks": [
          {
            "id": "task-2026-10-22-1",
            "label": "[MATH U10.8] Graphs of linear systems and inequalities",
            "subject": "math",
            "code": "Math U10.8",
            "topic": "Graphs of linear systems and inequalities",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-22-2",
            "label": "[MATH U11.1] Ratios, rates, and proportions",
            "subject": "math",
            "code": "Math U11.1",
            "topic": "Ratios, rates, and proportions",
            "timeSlot": "7:00 PM - 7:30 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "break-2026-10-22-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-22-4",
            "label": "[MATH U11.2] Unit conversion",
            "subject": "math",
            "code": "Math U11.2",
            "topic": "Unit conversion",
            "timeSlot": "7:45 PM - 8:15 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-22-5",
            "label": "[MATH U11.3] Percentages",
            "subject": "math",
            "code": "Math U11.3",
            "topic": "Percentages",
            "timeSlot": "8:15 PM - 8:45 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "break-2026-10-22-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "8:45 PM - 9:00 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-22-7",
            "label": "[R&W U11.1] Command of evidence",
            "subject": "rw",
            "code": "R&W U11.1",
            "topic": "Command of evidence",
            "timeSlot": "9:00 PM - 9:35 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "task-2026-10-22-8",
            "label": "[R&W U11.2] Central ideas and details + inferences",
            "subject": "rw",
            "code": "R&W U11.2",
            "topic": "Central ideas and details + inferences",
            "timeSlot": "9:35 PM - 10:10 PM",
            "durationMinutes": 35,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-23",
        "dateStr": "2026-10-23",
        "dayOfWeek": "Fri",
        "formattedDate": "Fri Oct 23",
        "dayNumber": 11,
        "weekId": "week-6",
        "weekNumber": 6,
        "weekTitle": "Advanced Math, Geometry & Rhetorical Synthesis (Oct 19 - Oct 25)",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 190,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 220,
        "specialInstructions": "Day 11: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals.",
        "tasks": [
          {
            "id": "task-2026-10-23-1",
            "label": "[MATH U11.4] Center, spread, and shape of distributions",
            "subject": "math",
            "code": "Math U11.4",
            "topic": "Center, spread, and shape of distributions",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-23-2",
            "label": "[MATH U11.5] Data representations",
            "subject": "math",
            "code": "Math U11.5",
            "topic": "Data representations",
            "timeSlot": "7:00 PM - 7:30 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "break-2026-10-23-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-23-4",
            "label": "[MATH U11.6] Scatterplots",
            "subject": "math",
            "code": "Math U11.6",
            "topic": "Scatterplots",
            "timeSlot": "7:45 PM - 8:15 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-23-5",
            "label": "[MATH U11.7] Linear and exponential growth",
            "subject": "math",
            "code": "Math U11.7",
            "topic": "Linear and exponential growth",
            "timeSlot": "8:15 PM - 8:45 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "break-2026-10-23-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "8:45 PM - 9:00 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-23-7",
            "label": "[R&W U11.3] Words in context",
            "subject": "rw",
            "code": "R&W U11.3",
            "topic": "Words in context",
            "timeSlot": "9:00 PM - 9:35 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "task-2026-10-23-8",
            "label": "[R&W U11.4] Text structure and purpose + cross-text connections",
            "subject": "rw",
            "code": "R&W U11.4",
            "topic": "Text structure and purpose + cross-text connections",
            "timeSlot": "9:35 PM - 10:10 PM",
            "durationMinutes": 35,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-24",
        "dateStr": "2026-10-24",
        "dayOfWeek": "Sat",
        "formattedDate": "Sat Oct 24",
        "dayNumber": 12,
        "weekId": "week-6",
        "weekNumber": 6,
        "weekTitle": "Advanced Math, Geometry & Rhetorical Synthesis (Oct 19 - Oct 25)",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 195,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 225,
        "specialInstructions": "Day 12: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals.",
        "tasks": [
          {
            "id": "task-2026-10-24-1",
            "label": "[MATH U11.8] Probability and relative frequency",
            "subject": "math",
            "code": "Math U11.8",
            "topic": "Probability and relative frequency",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-24-2",
            "label": "[MATH U11.9] Data inferences",
            "subject": "math",
            "code": "Math U11.9",
            "topic": "Data inferences",
            "timeSlot": "7:00 PM - 7:30 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "break-2026-10-24-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-24-4",
            "label": "[MATH U11.10] Evaluating statistical claims",
            "subject": "math",
            "code": "Math U11.10",
            "topic": "Evaluating statistical claims",
            "timeSlot": "7:45 PM - 8:15 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-24-5",
            "label": "[MATH U12.1] Factoring quadratic and polynomial expressions",
            "subject": "math",
            "code": "Math U12.1",
            "topic": "Factoring quadratic and polynomial expressions",
            "timeSlot": "8:15 PM - 8:50 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "break-2026-10-24-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "8:50 PM - 9:05 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-24-7",
            "label": "[MATH U12.2] Radicals and rational exponents",
            "subject": "math",
            "code": "Math U12.2",
            "topic": "Radicals and rational exponents",
            "timeSlot": "9:05 PM - 9:40 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "task-2026-10-24-8",
            "label": "[R&W U11.5] Boundaries + form, structure, and sense",
            "subject": "rw",
            "code": "R&W U11.5",
            "topic": "Boundaries + form, structure, and sense",
            "timeSlot": "9:40 PM - 10:15 PM",
            "durationMinutes": 35,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-25",
        "dateStr": "2026-10-25",
        "dayOfWeek": "Sun",
        "formattedDate": "Sun Oct 25",
        "dayNumber": 13,
        "weekId": "week-6",
        "weekNumber": 6,
        "weekTitle": "Advanced Math, Geometry & Rhetorical Synthesis (Oct 19 - Oct 25)",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 190,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 220,
        "specialInstructions": "Day 13: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals.",
        "tasks": [
          {
            "id": "task-2026-10-25-1",
            "label": "[MATH U12.3] Operations with polynomials",
            "subject": "math",
            "code": "Math U12.3",
            "topic": "Operations with polynomials",
            "timeSlot": "6:30 PM - 7:05 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "task-2026-10-25-2",
            "label": "[MATH U12.4] Operations with rational expressions",
            "subject": "math",
            "code": "Math U12.4",
            "topic": "Operations with rational expressions",
            "timeSlot": "7:05 PM - 7:40 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "break-2026-10-25-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:40 PM - 7:55 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-25-4",
            "label": "[MATH U12.5] Nonlinear functions",
            "subject": "math",
            "code": "Math U12.5",
            "topic": "Nonlinear functions",
            "timeSlot": "7:55 PM - 8:30 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "task-2026-10-25-5",
            "label": "[MATH U12.6] Isolating quantities",
            "subject": "math",
            "code": "Math U12.6",
            "topic": "Isolating quantities",
            "timeSlot": "8:30 PM - 9:05 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "break-2026-10-25-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "9:05 PM - 9:20 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-25-7",
            "label": "[R&W U11.6] Transitions + rhetorical synthesis",
            "subject": "rw",
            "code": "R&W U11.6",
            "topic": "Transitions + rhetorical synthesis",
            "timeSlot": "9:20 PM - 9:55 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "task-2026-10-25-8",
            "label": "[R&W U12.1] Subject-verb agreement",
            "subject": "rw",
            "code": "R&W U12.1",
            "topic": "Subject-verb agreement",
            "timeSlot": "9:55 PM - 10:10 PM",
            "durationMinutes": 15,
            "completed": false
          }
        ]
      }
    ]
  },
  {
    "id": "week-7",
    "title": "Week 7: Phase 1 Climax & Bluebook Arena Launch (Oct 26 - Nov 01)",
    "dateRange": "Oct 26 to Nov 01",
    "subtitle": "Days 14-16 complete Phase 1 by Wed Oct 28; Bluebook Test #1 on Thu Oct 29 and Test #2 on Sat Oct 31.",
    "phase": "bluebook",
    "days": [
      {
        "id": "2026-10-26",
        "dateStr": "2026-10-26",
        "dayOfWeek": "Mon",
        "formattedDate": "Mon Oct 26",
        "dayNumber": 14,
        "weekId": "week-7",
        "weekNumber": 7,
        "weekTitle": "Phase 1 Climax & Bluebook Arena Launch (Oct 26 - Nov 01)",
        "phase": "bluebook",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 185,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 215,
        "specialInstructions": "Day 14: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals.",
        "tasks": [
          {
            "id": "task-2026-10-26-1",
            "label": "[MATH U12.7] Solving quadratic equations",
            "subject": "math",
            "code": "Math U12.7",
            "topic": "Solving quadratic equations",
            "timeSlot": "6:30 PM - 7:05 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "task-2026-10-26-2",
            "label": "[MATH U12.8] Linear and quadratic systems",
            "subject": "math",
            "code": "Math U12.8",
            "topic": "Linear and quadratic systems",
            "timeSlot": "7:05 PM - 7:40 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "break-2026-10-26-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:40 PM - 7:55 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-26-4",
            "label": "[MATH U12.9] Radical, rational, and absolute value equations",
            "subject": "math",
            "code": "Math U12.9",
            "topic": "Radical, rational, and absolute value equations",
            "timeSlot": "7:55 PM - 8:30 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "task-2026-10-26-5",
            "label": "[MATH U12.10] Quadratic and exponential word problems",
            "subject": "math",
            "code": "Math U12.10",
            "topic": "Quadratic and exponential word problems",
            "timeSlot": "8:30 PM - 9:05 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "break-2026-10-26-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "9:05 PM - 9:20 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-26-7",
            "label": "[R&W U12.2] Pronoun-antecedent agreement",
            "subject": "rw",
            "code": "R&W U12.2",
            "topic": "Pronoun-antecedent agreement",
            "timeSlot": "9:20 PM - 9:35 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-26-8",
            "label": "[R&W U12.3] Plurals and possessives",
            "subject": "rw",
            "code": "R&W U12.3",
            "topic": "Plurals and possessives",
            "timeSlot": "9:35 PM - 9:50 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-26-9",
            "label": "[R&W U12.4] Verb forms",
            "subject": "rw",
            "code": "R&W U12.4",
            "topic": "Verb forms",
            "timeSlot": "9:50 PM - 10:05 PM",
            "durationMinutes": 15,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-27",
        "dateStr": "2026-10-27",
        "dayOfWeek": "Tue",
        "formattedDate": "Tue Oct 27",
        "dayNumber": 15,
        "weekId": "week-7",
        "weekNumber": 7,
        "weekTitle": "Phase 1 Climax & Bluebook Arena Launch (Oct 26 - Nov 01)",
        "phase": "bluebook",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 200,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 230,
        "specialInstructions": "Day 15: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals.",
        "tasks": [
          {
            "id": "task-2026-10-27-1",
            "label": "[MATH U12.11] Quadratic graphs",
            "subject": "math",
            "code": "Math U12.11",
            "topic": "Quadratic graphs",
            "timeSlot": "6:30 PM - 7:05 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "task-2026-10-27-2",
            "label": "[MATH U12.12] Exponential graphs",
            "subject": "math",
            "code": "Math U12.12",
            "topic": "Exponential graphs",
            "timeSlot": "7:05 PM - 7:40 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "break-2026-10-27-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:40 PM - 7:55 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-27-4",
            "label": "[MATH U12.13] Polynomial and other nonlinear graphs",
            "subject": "math",
            "code": "Math U12.13",
            "topic": "Polynomial and other nonlinear graphs",
            "timeSlot": "7:55 PM - 8:30 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "task-2026-10-27-5",
            "label": "[MATH U13.1] Area and volume",
            "subject": "math",
            "code": "Math U13.1",
            "topic": "Area and volume",
            "timeSlot": "8:30 PM - 9:10 PM",
            "durationMinutes": 40,
            "completed": false
          },
          {
            "id": "break-2026-10-27-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "9:10 PM - 9:25 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-27-7",
            "label": "[MATH U13.2] Congruence, similarity, and angle relationships",
            "subject": "math",
            "code": "Math U13.2",
            "topic": "Congruence, similarity, and angle relationships",
            "timeSlot": "9:25 PM - 10:05 PM",
            "durationMinutes": 40,
            "completed": false
          },
          {
            "id": "task-2026-10-27-8",
            "label": "[R&W U12.5] Subject-modifier placement",
            "subject": "rw",
            "code": "R&W U12.5",
            "topic": "Subject-modifier placement",
            "timeSlot": "10:05 PM - 10:20 PM",
            "durationMinutes": 15,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-10-28",
        "dateStr": "2026-10-28",
        "dayOfWeek": "Wed",
        "formattedDate": "Wed Oct 28",
        "dayNumber": 16,
        "weekId": "week-7",
        "weekNumber": 7,
        "weekTitle": "Phase 1 Climax & Bluebook Arena Launch (Oct 26 - Nov 01)",
        "phase": "bluebook",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 205,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 235,
        "specialInstructions": "Day 16: Phase 1 Final Milestone! Circle equations & Punctuation conventions. All syllabus skills 100% complete!",
        "tasks": [
          {
            "id": "task-2026-10-28-1",
            "label": "[MATH U13.3] Right triangle trigonometry",
            "subject": "math",
            "code": "Math U13.3",
            "topic": "Right triangle trigonometry",
            "timeSlot": "6:30 PM - 7:10 PM",
            "durationMinutes": 40,
            "completed": false
          },
          {
            "id": "task-2026-10-28-2",
            "label": "[MATH U13.4] Circle theorems",
            "subject": "math",
            "code": "Math U13.4",
            "topic": "Circle theorems",
            "timeSlot": "7:10 PM - 7:50 PM",
            "durationMinutes": 40,
            "completed": false
          },
          {
            "id": "break-2026-10-28-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "7:50 PM - 8:05 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-28-4",
            "label": "[MATH U13.5] Unit circle trigonometry",
            "subject": "math",
            "code": "Math U13.5",
            "topic": "Unit circle trigonometry",
            "timeSlot": "8:05 PM - 8:45 PM",
            "durationMinutes": 40,
            "completed": false
          },
          {
            "id": "task-2026-10-28-5",
            "label": "[MATH U13.6] Circle equations",
            "subject": "math",
            "code": "Math U13.6",
            "topic": "Circle equations",
            "timeSlot": "8:45 PM - 9:25 PM",
            "durationMinutes": 40,
            "completed": false
          },
          {
            "id": "break-2026-10-28-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "code": "BREAK",
            "topic": "Screen-Free Rest & Recharge",
            "timeSlot": "9:25 PM - 9:40 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-28-7",
            "label": "[R&W U12.6] Linking clauses",
            "subject": "rw",
            "code": "R&W U12.6",
            "topic": "Linking clauses",
            "timeSlot": "9:40 PM - 9:55 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-28-8",
            "label": "[R&W U12.7] Supplements",
            "subject": "rw",
            "code": "R&W U12.7",
            "topic": "Supplements",
            "timeSlot": "9:55 PM - 10:10 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-28-9",
            "label": "[R&W U12.8] Punctuation",
            "subject": "rw",
            "code": "R&W U12.8",
            "topic": "Punctuation",
            "timeSlot": "10:10 PM - 10:25 PM",
            "durationMinutes": 15,
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
        "weekTitle": "Phase 1 Climax & Bluebook Arena Launch (Oct 26 - Nov 01)",
        "phase": "bluebook",
        "isBuffer": false,
        "isTestDay": true,
        "studyTimeMinutes": 144,
        "breakTimeMinutes": 10,
        "totalTimeMinutes": 154,
        "specialInstructions": "8:00 AM - 10:24 AM: TEST #1 (Full Bluebook Practice Test under strict timed exam conditions).",
        "tasks": [
          {
            "id": "p2-2026-10-29-mock1",
            "label": "Bluebook Practice Test #1 (Full Official Exam Simulation)",
            "subject": "test",
            "code": "TEST #1",
            "topic": "Official Bluebook Exam #1",
            "timeSlot": "8:00 AM - 10:24 AM",
            "durationMinutes": 144,
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
        "weekTitle": "Phase 1 Climax & Bluebook Arena Launch (Oct 26 - Nov 01)",
        "phase": "bluebook",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 90,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 90,
        "specialInstructions": "6:30 PM - 8:00 PM: Error-log review of Test #1 + targeted drills on weak areas (90 min).",
        "tasks": [
          {
            "id": "p2-2026-10-30-autopsy",
            "label": "Test #1 Mistake Autopsy & Targeted Weak-Area Remediation",
            "subject": "review",
            "code": "AUTOPSY #1",
            "topic": "Mistake Autopsy & Remediation",
            "timeSlot": "6:30 PM - 8:00 PM",
            "durationMinutes": 90,
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
        "weekTitle": "Phase 1 Climax & Bluebook Arena Launch (Oct 26 - Nov 01)",
        "phase": "bluebook",
        "isBuffer": false,
        "isTestDay": true,
        "studyTimeMinutes": 144,
        "breakTimeMinutes": 10,
        "totalTimeMinutes": 154,
        "specialInstructions": "8:00 AM - 10:24 AM: TEST #2 (Full Bluebook Practice Test under strict exam conditions).",
        "tasks": [
          {
            "id": "p2-2026-10-31-mock2",
            "label": "Bluebook Practice Test #2 (Full Official Exam Simulation)",
            "subject": "test",
            "code": "TEST #2",
            "topic": "Official Bluebook Exam #2",
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
        "formattedDate": "Sun Nov 01",
        "weekId": "week-7",
        "weekNumber": 7,
        "weekTitle": "Phase 1 Climax & Bluebook Arena Launch (Oct 26 - Nov 01)",
        "phase": "bluebook",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 60,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 60,
        "specialInstructions": "6:30 PM - 7:30 PM: Error-log review of Test #2 + targeted drills (60 min).",
        "tasks": [
          {
            "id": "p2-2026-11-01-autopsy",
            "label": "Test #2 Mistake Autopsy & Targeted Drill Remediation",
            "subject": "review",
            "code": "AUTOPSY #2",
            "topic": "Mistake Autopsy & Drill Remediation",
            "timeSlot": "6:30 PM - 7:30 PM",
            "durationMinutes": 60,
            "completed": false
          }
        ]
      }
    ]
  },
  {
    "id": "week-8",
    "title": "Week 8: Final Test #3, Logistics Packout & Official SAT Exam Day (Nov 02 - Nov 07)",
    "dateRange": "Nov 02 to Nov 07",
    "subtitle": "Deep review on Mon Nov 02, Test #3 on Tue Nov 03, packout, rest taper & Sat Nov 07 Exam Day.",
    "phase": "exam",
    "days": [
      {
        "id": "2026-11-02",
        "dateStr": "2026-11-02",
        "dayOfWeek": "Mon",
        "formattedDate": "Mon Nov 02",
        "weekId": "week-8",
        "weekNumber": 8,
        "weekTitle": "Final Test #3, Logistics Packout & Official SAT Exam Day (Nov 02 - Nov 07)",
        "phase": "exam",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 60,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 60,
        "specialInstructions": "6:30 PM - 7:30 PM: Deep review: geometry/trig, grammar traps, formula sheet (60 min).",
        "tasks": [
          {
            "id": "p2-2026-11-02-deepreview",
            "label": "Deep Review: Geometry/Trig, Grammar Traps & Formula Sheet",
            "subject": "review",
            "code": "POLISH",
            "topic": "Final Trap Avoidance & Strategy Lock",
            "timeSlot": "6:30 PM - 7:30 PM",
            "durationMinutes": 60,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-11-03",
        "dateStr": "2026-11-03",
        "dayOfWeek": "Tue",
        "formattedDate": "Tue Nov 03",
        "weekId": "week-8",
        "weekNumber": 8,
        "weekTitle": "Final Test #3, Logistics Packout & Official SAT Exam Day (Nov 02 - Nov 07)",
        "phase": "exam",
        "isBuffer": false,
        "isTestDay": true,
        "studyTimeMinutes": 144,
        "breakTimeMinutes": 10,
        "totalTimeMinutes": 154,
        "specialInstructions": "8:00 AM - 10:24 AM: TEST #3 (Final full Bluebook timed mock exam).",
        "tasks": [
          {
            "id": "p2-2026-11-03-mock3",
            "label": "Bluebook Practice Test #3 (Final Timed Dress Rehearsal)",
            "subject": "test",
            "code": "TEST #3",
            "topic": "Final Full Official Mock",
            "timeSlot": "8:00 AM - 10:24 AM",
            "durationMinutes": 144,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-11-04",
        "dateStr": "2026-11-04",
        "dayOfWeek": "Wed",
        "formattedDate": "Wed Nov 04",
        "weekId": "week-8",
        "weekNumber": 8,
        "weekTitle": "Final Test #3, Logistics Packout & Official SAT Exam Day (Nov 02 - Nov 07)",
        "phase": "exam",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 45,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 45,
        "specialInstructions": "6:30 PM - 7:15 PM: Error-log review of Test #3 + simulate exact test-day timing (45 min).",
        "tasks": [
          {
            "id": "p2-2026-11-04-autopsy",
            "label": "Test #3 Final Autopsy + Test-Day Timing Rhythm Simulation",
            "subject": "review",
            "code": "FINAL AUTOPSY",
            "topic": "Final Error Closure & Confidence Lock",
            "timeSlot": "6:30 PM - 7:15 PM",
            "durationMinutes": 45,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-11-05",
        "dateStr": "2026-11-05",
        "dayOfWeek": "Thu",
        "formattedDate": "Thu Nov 05",
        "weekId": "week-8",
        "weekNumber": 8,
        "weekTitle": "Final Test #3, Logistics Packout & Official SAT Exam Day (Nov 02 - Nov 07)",
        "phase": "exam",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 30,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 30,
        "specialInstructions": "6:30 PM - 7:00 PM: Verify Bluebook app/ID/admission ticket + pack your bag (30 min). Zero high-stress academics.",
        "tasks": [
          {
            "id": "p2-2026-11-05-packout",
            "label": "Exam Day Readiness: Bluebook App, Admission Ticket, Original ID & Bag Packout",
            "subject": "logistics",
            "code": "LOGISTICS",
            "topic": "Exam Logistics & Gear Verification",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          }
        ]
      },
      {
        "id": "2026-11-06",
        "dateStr": "2026-11-06",
        "dayOfWeek": "Fri",
        "formattedDate": "Fri Nov 06",
        "weekId": "week-8",
        "weekNumber": 8,
        "weekTitle": "Final Test #3, Logistics Packout & Official SAT Exam Day (Nov 02 - Nov 07)",
        "phase": "exam",
        "isBuffer": true,
        "isTestDay": false,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "specialInstructions": "FULL REST. Zero studying. No screens after 8 PM. Sleep early for tomorrow’s official exam.",
        "tasks": [
          {
            "id": "rest-2026-11-06",
            "label": "Complete Rest Protocol • Sleep Early for Peak Cognitive Acuity",
            "subject": "buffer",
            "code": "REST",
            "topic": "Peak Performance Pre-Exam Taper",
            "completed": false
          }
        ]
      },
      {
        "id": "2026-11-07",
        "dateStr": "2026-11-07",
        "dayOfWeek": "Sat",
        "formattedDate": "Sat Nov 07",
        "weekId": "week-8",
        "weekNumber": 8,
        "weekTitle": "Final Test #3, Logistics Packout & Official SAT Exam Day (Nov 02 - Nov 07)",
        "phase": "exam",
        "isBuffer": false,
        "isTestDay": true,
        "studyTimeMinutes": 144,
        "breakTimeMinutes": 10,
        "totalTimeMinutes": 154,
        "specialInstructions": "OFFICIAL SAT EXAM DAY! Arrive at test center by 7:15 AM. You have prepared relentlessly — execute with absolute focus!",
        "tasks": [
          {
            "id": "official-sat-exam-day",
            "label": "OFFICIAL DIGITAL SAT EXAM DAY • Crescent Model Test Center",
            "subject": "test",
            "code": "EXAM DAY",
            "topic": "Official Digital SAT Administration",
            "timeSlot": "7:15 AM - 12:00 PM",
            "durationMinutes": 144,
            "completed": false
          }
        ]
      }
    ]
  }
];
