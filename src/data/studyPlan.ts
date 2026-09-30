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
    "subtitle": "Ratios, unit conversions, percentages, data distributions & quadratic foundations.",
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
            "topic": "Unit conversion",
            "code": "Math U3.2",
            "timeSlot": "6:30 PM - 6:50 PM",
            "durationMinutes": 20,
            "completed": false
          },
          {
            "id": "task-2026-09-14-2",
            "label": "[MATH U3.3] Percentages",
            "subject": "math",
            "topic": "Percentages",
            "code": "Math U3.3",
            "timeSlot": "6:50 PM - 7:10 PM",
            "durationMinutes": 20,
            "completed": false
          },
          {
            "id": "task-2026-09-14-3",
            "label": "[MATH U3.4] Center, spread, and shape of distributions",
            "subject": "math",
            "topic": "Center, spread, and shape of distributions",
            "code": "Math U3.4",
            "timeSlot": "7:10 PM - 7:30 PM",
            "durationMinutes": 20,
            "completed": false
          },
          {
            "id": "task-2026-09-14-4",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-09-14-5",
            "label": "[MATH U3.5] Data representations",
            "subject": "math",
            "topic": "Data representations",
            "code": "Math U3.5",
            "timeSlot": "7:45 PM - 8:05 PM",
            "durationMinutes": 20,
            "completed": false
          }
        ],
        "specialInstructions": "Day 1: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals."
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
            "topic": "Scatterplots",
            "code": "Math U3.6",
            "timeSlot": "6:30 PM - 6:50 PM",
            "durationMinutes": 20,
            "completed": false
          },
          {
            "id": "task-2026-09-15-2",
            "label": "[MATH U3.7] Linear and exponential growth",
            "subject": "math",
            "topic": "Linear and exponential growth",
            "code": "Math U3.7",
            "timeSlot": "6:50 PM - 7:10 PM",
            "durationMinutes": 20,
            "completed": false
          },
          {
            "id": "task-2026-09-15-3",
            "label": "[MATH U3.8] Probability and relative frequency",
            "subject": "math",
            "topic": "Probability and relative frequency",
            "code": "Math U3.8",
            "timeSlot": "7:10 PM - 7:30 PM",
            "durationMinutes": 20,
            "completed": false
          },
          {
            "id": "task-2026-09-15-4",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-09-15-5",
            "label": "[MATH U3.9] Data inferences",
            "subject": "math",
            "topic": "Data inferences",
            "code": "Math U3.9",
            "timeSlot": "7:45 PM - 8:05 PM",
            "durationMinutes": 20,
            "completed": false
          }
        ],
        "specialInstructions": "Day 2: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals."
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
        "tasks": [
          {
            "id": "task-2026-09-16-1",
            "label": "[MATH U3.10] Evaluating statistical claims",
            "subject": "math",
            "topic": "Evaluating statistical claims",
            "code": "Math U3.10",
            "timeSlot": "6:30 PM - 6:50 PM",
            "durationMinutes": 20,
            "completed": false
          },
          {
            "id": "task-2026-09-16-2",
            "label": "[MATH U4.1] Factoring quadratic and polynomial expressions",
            "subject": "math",
            "topic": "Factoring quadratic and polynomial expressions",
            "code": "Math U4.1",
            "timeSlot": "6:50 PM - 7:15 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-09-16-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "7:15 PM - 7:30 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-09-16-4",
            "label": "[MATH U4.2] Radicals and rational exponents",
            "subject": "math",
            "topic": "Radicals and rational exponents",
            "code": "Math U4.2",
            "timeSlot": "7:30 PM - 7:55 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-09-16-5",
            "label": "[MATH U4.3] Operations with polynomials",
            "subject": "math",
            "topic": "Operations with polynomials",
            "code": "Math U4.3",
            "timeSlot": "7:55 PM - 8:20 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-09-16-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "8:20 PM - 8:35 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-09-16-7",
            "label": "[R&W U3.1] Words in context",
            "subject": "rw",
            "topic": "Words in context",
            "code": "R&W U3.1",
            "timeSlot": "8:35 PM - 8:55 PM",
            "durationMinutes": 20,
            "completed": false
          },
          {
            "id": "task-2026-09-16-8",
            "label": "[R&W U3.2] Text structure and purpose",
            "subject": "rw",
            "topic": "Text structure and purpose",
            "code": "R&W U3.2",
            "timeSlot": "8:55 PM - 9:15 PM",
            "durationMinutes": 20,
            "completed": false
          }
        ],
        "specialInstructions": "Day 3: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals."
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
        "tasks": [
          {
            "id": "task-2026-09-17-1",
            "label": "[MATH U4.4] Operations with rational expressions",
            "subject": "math",
            "topic": "Operations with rational expressions",
            "code": "Math U4.4",
            "timeSlot": "6:30 PM - 6:55 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-09-17-2",
            "label": "[MATH U4.5] Nonlinear functions",
            "subject": "math",
            "topic": "Nonlinear functions",
            "code": "Math U4.5",
            "timeSlot": "6:55 PM - 7:20 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-09-17-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "7:20 PM - 7:35 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-09-17-4",
            "label": "[MATH U4.6] Isolating quantities",
            "subject": "math",
            "topic": "Isolating quantities",
            "code": "Math U4.6",
            "timeSlot": "7:35 PM - 8:00 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-09-17-5",
            "label": "[R&W U3.3] Cross-text connections",
            "subject": "rw",
            "topic": "Cross-text connections",
            "code": "R&W U3.3",
            "timeSlot": "8:00 PM - 8:20 PM",
            "durationMinutes": 20,
            "completed": false
          },
          {
            "id": "task-2026-09-17-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "8:20 PM - 8:35 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-09-17-7",
            "label": "[R&W U4.1] Transitions",
            "subject": "rw",
            "topic": "Transitions",
            "code": "R&W U4.1",
            "timeSlot": "8:35 PM - 8:55 PM",
            "durationMinutes": 20,
            "completed": false
          }
        ],
        "specialInstructions": "Day 4: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals."
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
        "tasks": [
          {
            "id": "task-2026-09-18-1",
            "label": "[MATH U4.7] Solving quadratic equations",
            "subject": "math",
            "topic": "Solving quadratic equations",
            "code": "Math U4.7",
            "timeSlot": "6:30 PM - 6:55 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-09-18-2",
            "label": "[MATH U4.8] Linear and quadratic systems",
            "subject": "math",
            "topic": "Linear and quadratic systems",
            "code": "Math U4.8",
            "timeSlot": "6:55 PM - 7:20 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-09-18-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "7:20 PM - 7:35 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-09-18-4",
            "label": "[MATH U4.9] Radical, rational, and absolute value equations",
            "subject": "math",
            "topic": "Radical, rational, and absolute value equations",
            "code": "Math U4.9",
            "timeSlot": "7:35 PM - 8:00 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-09-18-5",
            "label": "[R&W U4.2] Rhetorical synthesis",
            "subject": "rw",
            "topic": "Rhetorical synthesis",
            "code": "R&W U4.2",
            "timeSlot": "8:00 PM - 8:20 PM",
            "durationMinutes": 20,
            "completed": false
          },
          {
            "id": "task-2026-09-18-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "8:20 PM - 8:35 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-09-18-7",
            "label": "[R&W U4.3] Form, structure, and sense",
            "subject": "rw",
            "topic": "Form, structure, and sense",
            "code": "R&W U4.3",
            "timeSlot": "8:35 PM - 8:55 PM",
            "durationMinutes": 20,
            "completed": false
          }
        ],
        "specialInstructions": "Day 5: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals."
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
        "tasks": [
          {
            "id": "task-2026-09-19-1",
            "label": "[MATH U4.10] Quadratic and exponential word problems",
            "subject": "math",
            "topic": "Quadratic and exponential word problems",
            "code": "Math U4.10",
            "timeSlot": "6:30 PM - 6:55 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-09-19-2",
            "label": "[MATH U4.11] Quadratic graphs",
            "subject": "math",
            "topic": "Quadratic graphs",
            "code": "Math U4.11",
            "timeSlot": "6:55 PM - 7:20 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-09-19-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "7:20 PM - 7:35 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-09-19-4",
            "label": "[MATH U4.12] Exponential graphs",
            "subject": "math",
            "topic": "Exponential graphs",
            "code": "Math U4.12",
            "timeSlot": "7:35 PM - 8:00 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-09-19-5",
            "label": "[R&W U4.4] Boundaries",
            "subject": "rw",
            "topic": "Boundaries",
            "code": "R&W U4.4",
            "timeSlot": "8:00 PM - 8:20 PM",
            "durationMinutes": 20,
            "completed": false
          },
          {
            "id": "task-2026-09-19-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "8:20 PM - 8:35 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-09-19-7",
            "label": "[R&W U5.1] Command of textual evidence",
            "subject": "rw",
            "topic": "Command of textual evidence",
            "code": "R&W U5.1",
            "timeSlot": "8:35 PM - 8:57 PM",
            "durationMinutes": 22,
            "completed": false
          }
        ],
        "specialInstructions": "Day 6: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-09-20",
        "dateStr": "2026-09-20",
        "dayOfWeek": "Sun",
        "formattedDate": "Sun Sep 20",
        "dayNumber": null,
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
            "id": "task-2026-09-20-1",
            "label": "Screen-Free Mental Reset (No Studying)",
            "subject": "buffer",
            "topic": "Screen-Free Mental Reset (No Studying)",
            "code": "REST",
            "timeSlot": "All Day",
            "durationMinutes": 0,
            "completed": false
          }
        ],
        "specialInstructions": "Weekly recovery window. Anti-burnout rule #1: Resting on Sundays consolidates the week’s learning and resets mental stamina."
      }
    ]
  },
  {
    "id": "week-2",
    "title": "Week 2: Math U5 Launch & Recovery Buffer Block",
    "dateRange": "Sep 21 to Sep 27",
    "subtitle": "Day 7 completed, then Sep 22–27 buffer window for full illness recovery.",
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
        "weekTitle": "Math U5 Launch & Recovery Buffer Block",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 129,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 159,
        "tasks": [
          {
            "id": "task-2026-09-21-1",
            "label": "[MATH U4.13] Polynomial and other nonlinear graphs",
            "subject": "math",
            "topic": "Polynomial and other nonlinear graphs",
            "code": "Math U4.13",
            "timeSlot": "6:30 PM - 6:55 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-09-21-2",
            "label": "[MATH U5.1] Area and volume",
            "subject": "math",
            "topic": "Area and volume",
            "code": "Math U5.1",
            "timeSlot": "6:55 PM - 7:25 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-09-21-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "7:25 PM - 7:40 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-09-21-4",
            "label": "[MATH U5.2] Congruence, similarity, and angle relationships",
            "subject": "math",
            "topic": "Congruence, similarity, and angle relationships",
            "code": "Math U5.2",
            "timeSlot": "7:40 PM - 8:10 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-09-21-5",
            "label": "[R&W U5.2] Command of quantitative evidence",
            "subject": "rw",
            "topic": "Command of quantitative evidence",
            "code": "R&W U5.2",
            "timeSlot": "8:10 PM - 8:32 PM",
            "durationMinutes": 22,
            "completed": false
          },
          {
            "id": "task-2026-09-21-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "8:32 PM - 8:47 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-09-21-7",
            "label": "[R&W U5.3] Central ideas and details",
            "subject": "rw",
            "topic": "Central ideas and details",
            "code": "R&W U5.3",
            "timeSlot": "8:47 PM - 9:09 PM",
            "durationMinutes": 22,
            "completed": false
          }
        ],
        "specialInstructions": "Day 7: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-09-22",
        "dateStr": "2026-09-22",
        "dayOfWeek": "Tue",
        "formattedDate": "Tue Sep 22",
        "dayNumber": null,
        "weekId": "week-2",
        "weekNumber": 2,
        "weekTitle": "Math U5 Launch & Recovery Buffer Block",
        "phase": "foundations",
        "isBuffer": true,
        "isTestDay": false,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "tasks": [
          {
            "id": "task-2026-09-22-1",
            "label": "Health & Recovery Buffer (No Study)",
            "subject": "buffer",
            "topic": "Health & Recovery Buffer (No Study)",
            "code": "BUFFER",
            "timeSlot": "All Day",
            "durationMinutes": 0,
            "completed": false
          }
        ],
        "specialInstructions": "BUFFER DAY (fever/dizziness): Zero assigned study. Full rest and recovery. Work redistributed across Sep 30 - Oct 25."
      },
      {
        "id": "2026-09-23",
        "dateStr": "2026-09-23",
        "dayOfWeek": "Wed",
        "formattedDate": "Wed Sep 23",
        "dayNumber": null,
        "weekId": "week-2",
        "weekNumber": 2,
        "weekTitle": "Math U5 Launch & Recovery Buffer Block",
        "phase": "foundations",
        "isBuffer": true,
        "isTestDay": false,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "tasks": [
          {
            "id": "task-2026-09-23-1",
            "label": "Health & Recovery Buffer (No Study)",
            "subject": "buffer",
            "topic": "Health & Recovery Buffer (No Study)",
            "code": "BUFFER",
            "timeSlot": "All Day",
            "durationMinutes": 0,
            "completed": false
          }
        ],
        "specialInstructions": "BUFFER DAY (fever/dizziness): Zero assigned study. Full rest and recovery. Work redistributed across Sep 30 - Oct 25."
      },
      {
        "id": "2026-09-24",
        "dateStr": "2026-09-24",
        "dayOfWeek": "Thu",
        "formattedDate": "Thu Sep 24",
        "dayNumber": null,
        "weekId": "week-2",
        "weekNumber": 2,
        "weekTitle": "Math U5 Launch & Recovery Buffer Block",
        "phase": "foundations",
        "isBuffer": true,
        "isTestDay": false,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "tasks": [
          {
            "id": "task-2026-09-24-1",
            "label": "Health & Recovery Buffer (No Study)",
            "subject": "buffer",
            "topic": "Health & Recovery Buffer (No Study)",
            "code": "BUFFER",
            "timeSlot": "All Day",
            "durationMinutes": 0,
            "completed": false
          }
        ],
        "specialInstructions": "BUFFER DAY (fever/dizziness): Zero assigned study. Full rest and recovery. Work redistributed across Sep 30 - Oct 25."
      },
      {
        "id": "2026-09-25",
        "dateStr": "2026-09-25",
        "dayOfWeek": "Fri",
        "formattedDate": "Fri Sep 25",
        "dayNumber": null,
        "weekId": "week-2",
        "weekNumber": 2,
        "weekTitle": "Math U5 Launch & Recovery Buffer Block",
        "phase": "foundations",
        "isBuffer": true,
        "isTestDay": false,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "tasks": [
          {
            "id": "task-2026-09-25-1",
            "label": "Health & Recovery Buffer (No Study)",
            "subject": "buffer",
            "topic": "Health & Recovery Buffer (No Study)",
            "code": "BUFFER",
            "timeSlot": "All Day",
            "durationMinutes": 0,
            "completed": false
          }
        ],
        "specialInstructions": "BUFFER DAY (fever/dizziness): Zero assigned study. Full rest and recovery. Work redistributed across Sep 30 - Oct 25."
      },
      {
        "id": "2026-09-26",
        "dateStr": "2026-09-26",
        "dayOfWeek": "Sat",
        "formattedDate": "Sat Sep 26",
        "dayNumber": null,
        "weekId": "week-2",
        "weekNumber": 2,
        "weekTitle": "Math U5 Launch & Recovery Buffer Block",
        "phase": "foundations",
        "isBuffer": true,
        "isTestDay": false,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "tasks": [
          {
            "id": "task-2026-09-26-1",
            "label": "Health & Recovery Buffer (No Study)",
            "subject": "buffer",
            "topic": "Health & Recovery Buffer (No Study)",
            "code": "BUFFER",
            "timeSlot": "All Day",
            "durationMinutes": 0,
            "completed": false
          }
        ],
        "specialInstructions": "BUFFER DAY (fever/dizziness): Zero assigned study. Full rest and recovery. Work redistributed across Sep 30 - Oct 25."
      },
      {
        "id": "2026-09-27",
        "dateStr": "2026-09-27",
        "dayOfWeek": "Sun",
        "formattedDate": "Sun Sep 27",
        "dayNumber": null,
        "weekId": "week-2",
        "weekNumber": 2,
        "weekTitle": "Math U5 Launch & Recovery Buffer Block",
        "phase": "foundations",
        "isBuffer": true,
        "isTestDay": false,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "tasks": [
          {
            "id": "task-2026-09-27-1",
            "label": "Screen-Free Mental Reset (No Studying)",
            "subject": "buffer",
            "topic": "Screen-Free Mental Reset (No Studying)",
            "code": "REST",
            "timeSlot": "All Day",
            "durationMinutes": 0,
            "completed": false
          }
        ],
        "specialInstructions": "Weekly recovery window. Anti-burnout rule #1: Resting on Sundays consolidates the week’s learning and resets mental stamina."
      }
    ]
  },
  {
    "id": "week-3",
    "title": "Week 3: Final Buffer Days & Phase 1 Resume (Sep 30 - Oct 04)",
    "dateRange": "Sep 28 to Oct 04",
    "subtitle": "Sep 28-29 buffer recovery; Days 8–11 launch trig, circles, linear systems & distributions.",
    "phase": "foundations",
    "days": [
      {
        "id": "2026-09-28",
        "dateStr": "2026-09-28",
        "dayOfWeek": "Mon",
        "formattedDate": "Mon Sep 28",
        "dayNumber": null,
        "weekId": "week-3",
        "weekNumber": 3,
        "weekTitle": "Final Buffer Days & Phase 1 Resume (Sep 30 - Oct 04)",
        "phase": "foundations",
        "isBuffer": true,
        "isTestDay": false,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "tasks": [
          {
            "id": "task-2026-09-28-1",
            "label": "Health & Recovery Buffer (No Study)",
            "subject": "buffer",
            "topic": "Health & Recovery Buffer (No Study)",
            "code": "BUFFER",
            "timeSlot": "All Day",
            "durationMinutes": 0,
            "completed": false
          }
        ],
        "specialInstructions": "BUFFER DAY (fever/dizziness): Zero assigned study. Full rest and recovery. Work redistributed across Sep 30 - Oct 25."
      },
      {
        "id": "2026-09-29",
        "dateStr": "2026-09-29",
        "dayOfWeek": "Tue",
        "formattedDate": "Tue Sep 29",
        "dayNumber": null,
        "weekId": "week-3",
        "weekNumber": 3,
        "weekTitle": "Final Buffer Days & Phase 1 Resume (Sep 30 - Oct 04)",
        "phase": "foundations",
        "isBuffer": true,
        "isTestDay": false,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "tasks": [
          {
            "id": "task-2026-09-29-1",
            "label": "Health & Recovery Buffer (No Study)",
            "subject": "buffer",
            "topic": "Health & Recovery Buffer (No Study)",
            "code": "BUFFER",
            "timeSlot": "All Day",
            "durationMinutes": 0,
            "completed": false
          }
        ],
        "specialInstructions": "BUFFER DAY (fever/dizziness): Zero assigned study. Full rest and recovery. Work redistributed across Sep 30 - Oct 25."
      },
      {
        "id": "2026-09-30",
        "dateStr": "2026-09-30",
        "dayOfWeek": "Wed",
        "formattedDate": "Wed Sep 30",
        "dayNumber": 8,
        "weekId": "week-3",
        "weekNumber": 3,
        "weekTitle": "Final Buffer Days & Phase 1 Resume (Sep 30 - Oct 04)",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 134,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 164,
        "tasks": [
          {
            "id": "task-2026-09-30-1",
            "label": "[MATH U5.3] Right triangle trigonometry",
            "subject": "math",
            "topic": "Right triangle trigonometry",
            "code": "Math U5.3",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-09-30-2",
            "label": "[MATH U5.4] Circle theorems",
            "subject": "math",
            "topic": "Circle theorems",
            "code": "Math U5.4",
            "timeSlot": "7:00 PM - 7:30 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-09-30-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-09-30-4",
            "label": "[MATH U5.5] Unit circle trigonometry",
            "subject": "math",
            "topic": "Unit circle trigonometry",
            "code": "Math U5.5",
            "timeSlot": "7:45 PM - 8:15 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-09-30-5",
            "label": "[R&W U5.4] Inferences",
            "subject": "rw",
            "topic": "Inferences",
            "code": "R&W U5.4",
            "timeSlot": "8:15 PM - 8:37 PM",
            "durationMinutes": 22,
            "completed": false
          },
          {
            "id": "task-2026-09-30-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "8:37 PM - 8:52 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-09-30-7",
            "label": "[R&W U6.1] Words in context",
            "subject": "rw",
            "topic": "Words in context",
            "code": "R&W U6.1",
            "timeSlot": "8:52 PM - 9:14 PM",
            "durationMinutes": 22,
            "completed": false
          }
        ],
        "specialInstructions": "Day 8: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-10-01",
        "dateStr": "2026-10-01",
        "dayOfWeek": "Thu",
        "formattedDate": "Thu Oct 01",
        "dayNumber": 9,
        "weekId": "week-3",
        "weekNumber": 3,
        "weekTitle": "Final Buffer Days & Phase 1 Resume (Sep 30 - Oct 04)",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 127,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 157,
        "tasks": [
          {
            "id": "task-2026-10-01-1",
            "label": "[MATH U5.6] Circle equations",
            "subject": "math",
            "topic": "Circle equations",
            "code": "Math U5.6",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-01-2",
            "label": "[MATH U6.1] Solving linear equations and inequalities",
            "subject": "math",
            "topic": "Solving linear equations and inequalities",
            "code": "Math U6.1",
            "timeSlot": "7:00 PM - 7:25 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-10-01-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "7:25 PM - 7:40 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-01-4",
            "label": "[MATH U6.2] Linear equation word problems",
            "subject": "math",
            "topic": "Linear equation word problems",
            "code": "Math U6.2",
            "timeSlot": "7:40 PM - 8:05 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-10-01-5",
            "label": "[MATH U6.3] Linear relationship word problems",
            "subject": "math",
            "topic": "Linear relationship word problems",
            "code": "Math U6.3",
            "timeSlot": "8:05 PM - 8:30 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-10-01-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "8:30 PM - 8:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-01-7",
            "label": "[R&W U6.2] Text structure and purpose",
            "subject": "rw",
            "topic": "Text structure and purpose",
            "code": "R&W U6.2",
            "timeSlot": "8:45 PM - 9:07 PM",
            "durationMinutes": 22,
            "completed": false
          }
        ],
        "specialInstructions": "Day 9: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-10-02",
        "dateStr": "2026-10-02",
        "dayOfWeek": "Fri",
        "formattedDate": "Fri Oct 02",
        "dayNumber": 10,
        "weekId": "week-3",
        "weekNumber": 3,
        "weekTitle": "Final Buffer Days & Phase 1 Resume (Sep 30 - Oct 04)",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 144,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 174,
        "tasks": [
          {
            "id": "task-2026-10-02-1",
            "label": "[MATH U6.4] Graphs of linear equations and functions",
            "subject": "math",
            "topic": "Graphs of linear equations and functions",
            "code": "Math U6.4",
            "timeSlot": "6:30 PM - 6:55 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-10-02-2",
            "label": "[MATH U6.5] Solving systems of linear equations",
            "subject": "math",
            "topic": "Solving systems of linear equations",
            "code": "Math U6.5",
            "timeSlot": "6:55 PM - 7:20 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-10-02-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "7:20 PM - 7:35 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-02-4",
            "label": "[MATH U6.6] Systems of linear equations word problems",
            "subject": "math",
            "topic": "Systems of linear equations word problems",
            "code": "Math U6.6",
            "timeSlot": "7:35 PM - 8:00 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-10-02-5",
            "label": "[MATH U6.7] Linear inequality word problems",
            "subject": "math",
            "topic": "Linear inequality word problems",
            "code": "Math U6.7",
            "timeSlot": "8:00 PM - 8:25 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-10-02-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "8:25 PM - 8:40 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-02-7",
            "label": "[R&W U6.3] Cross-text connections",
            "subject": "rw",
            "topic": "Cross-text connections",
            "code": "R&W U6.3",
            "timeSlot": "8:40 PM - 9:02 PM",
            "durationMinutes": 22,
            "completed": false
          },
          {
            "id": "task-2026-10-02-8",
            "label": "[R&W U7.1] Transitions",
            "subject": "rw",
            "topic": "Transitions",
            "code": "R&W U7.1",
            "timeSlot": "9:02 PM - 9:24 PM",
            "durationMinutes": 22,
            "completed": false
          }
        ],
        "specialInstructions": "Day 10: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-10-03",
        "dateStr": "2026-10-03",
        "dayOfWeek": "Sat",
        "formattedDate": "Sat Oct 03",
        "dayNumber": 11,
        "weekId": "week-3",
        "weekNumber": 3,
        "weekTitle": "Final Buffer Days & Phase 1 Resume (Sep 30 - Oct 04)",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 144,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 174,
        "tasks": [
          {
            "id": "task-2026-10-03-1",
            "label": "[MATH U6.8] Graphs of linear systems and inequalities",
            "subject": "math",
            "topic": "Graphs of linear systems and inequalities",
            "code": "Math U6.8",
            "timeSlot": "6:30 PM - 6:55 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-10-03-2",
            "label": "[MATH U7.1] Ratios, rates, and proportions",
            "subject": "math",
            "topic": "Ratios, rates, and proportions",
            "code": "Math U7.1",
            "timeSlot": "6:55 PM - 7:20 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-10-03-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "7:20 PM - 7:35 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-03-4",
            "label": "[MATH U7.2] Unit conversion",
            "subject": "math",
            "topic": "Unit conversion",
            "code": "Math U7.2",
            "timeSlot": "7:35 PM - 8:00 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-10-03-5",
            "label": "[MATH U7.3] Percentages",
            "subject": "math",
            "topic": "Percentages",
            "code": "Math U7.3",
            "timeSlot": "8:00 PM - 8:25 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-10-03-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "8:25 PM - 8:40 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-03-7",
            "label": "[R&W U7.2] Rhetorical synthesis",
            "subject": "rw",
            "topic": "Rhetorical synthesis",
            "code": "R&W U7.2",
            "timeSlot": "8:40 PM - 9:02 PM",
            "durationMinutes": 22,
            "completed": false
          },
          {
            "id": "task-2026-10-03-8",
            "label": "[R&W U7.3] Form, structure, and sense",
            "subject": "rw",
            "topic": "Form, structure, and sense",
            "code": "R&W U7.3",
            "timeSlot": "9:02 PM - 9:24 PM",
            "durationMinutes": 22,
            "completed": false
          }
        ],
        "specialInstructions": "Day 11: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-10-04",
        "dateStr": "2026-10-04",
        "dayOfWeek": "Sun",
        "formattedDate": "Sun Oct 04",
        "dayNumber": null,
        "weekId": "week-3",
        "weekNumber": 3,
        "weekTitle": "Final Buffer Days & Phase 1 Resume (Sep 30 - Oct 04)",
        "phase": "foundations",
        "isBuffer": true,
        "isTestDay": false,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "tasks": [
          {
            "id": "task-2026-10-04-1",
            "label": "Screen-Free Mental Reset (No Studying)",
            "subject": "buffer",
            "topic": "Screen-Free Mental Reset (No Studying)",
            "code": "REST",
            "timeSlot": "All Day",
            "durationMinutes": 0,
            "completed": false
          }
        ],
        "specialInstructions": "Weekly recovery window. Anti-burnout rule #1: Resting on Sundays consolidates the week’s learning and resets mental stamina."
      }
    ]
  },
  {
    "id": "week-4",
    "title": "Week 4: Quadratics, Functions, Geometry & Textual Analysis",
    "dateRange": "Oct 05 to Oct 11",
    "subtitle": "Days 12–17 cover factoring, polynomials, exponential models, 3D geometry & rhetoric.",
    "phase": "foundations",
    "days": [
      {
        "id": "2026-10-05",
        "dateStr": "2026-10-05",
        "dayOfWeek": "Mon",
        "formattedDate": "Mon Oct 05",
        "dayNumber": 12,
        "weekId": "week-4",
        "weekNumber": 4,
        "weekTitle": "Quadratics, Functions, Geometry & Textual Analysis",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 147,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 177,
        "tasks": [
          {
            "id": "task-2026-10-05-1",
            "label": "[MATH U7.4] Center, spread, and shape of distributions",
            "subject": "math",
            "topic": "Center, spread, and shape of distributions",
            "code": "Math U7.4",
            "timeSlot": "6:30 PM - 6:55 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-10-05-2",
            "label": "[MATH U7.5] Data representations",
            "subject": "math",
            "topic": "Data representations",
            "code": "Math U7.5",
            "timeSlot": "6:55 PM - 7:20 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-10-05-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "7:20 PM - 7:35 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-05-4",
            "label": "[MATH U7.6] Scatterplots",
            "subject": "math",
            "topic": "Scatterplots",
            "code": "Math U7.6",
            "timeSlot": "7:35 PM - 8:00 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-10-05-5",
            "label": "[MATH U7.7] Linear and exponential growth",
            "subject": "math",
            "topic": "Linear and exponential growth",
            "code": "Math U7.7",
            "timeSlot": "8:00 PM - 8:25 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-10-05-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "8:25 PM - 8:40 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-05-7",
            "label": "[MATH U7.8] Probability and relative frequency",
            "subject": "math",
            "topic": "Probability and relative frequency",
            "code": "Math U7.8",
            "timeSlot": "8:40 PM - 9:05 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-10-05-8",
            "label": "[R&W U7.4] Boundaries",
            "subject": "rw",
            "topic": "Boundaries",
            "code": "R&W U7.4",
            "timeSlot": "9:05 PM - 9:27 PM",
            "durationMinutes": 22,
            "completed": false
          }
        ],
        "specialInstructions": "Day 12: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-10-06",
        "dateStr": "2026-10-06",
        "dayOfWeek": "Tue",
        "formattedDate": "Tue Oct 06",
        "dayNumber": 13,
        "weekId": "week-4",
        "weekNumber": 4,
        "weekTitle": "Quadratics, Functions, Geometry & Textual Analysis",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 135,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 165,
        "tasks": [
          {
            "id": "task-2026-10-06-1",
            "label": "[MATH U7.9] Data inferences",
            "subject": "math",
            "topic": "Data inferences",
            "code": "Math U7.9",
            "timeSlot": "6:30 PM - 6:55 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-10-06-2",
            "label": "[MATH U7.10] Evaluating statistical claims",
            "subject": "math",
            "topic": "Evaluating statistical claims",
            "code": "Math U7.10",
            "timeSlot": "6:55 PM - 7:20 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-10-06-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "7:20 PM - 7:35 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-06-4",
            "label": "[MATH U8.1] Factoring quadratic and polynomial expressions",
            "subject": "math",
            "topic": "Factoring quadratic and polynomial expressions",
            "code": "Math U8.1",
            "timeSlot": "7:35 PM - 8:05 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-06-5",
            "label": "[MATH U8.2] Radicals and rational exponents",
            "subject": "math",
            "topic": "Radicals and rational exponents",
            "code": "Math U8.2",
            "timeSlot": "8:05 PM - 8:35 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-06-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "8:35 PM - 8:50 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-06-7",
            "label": "[R&W U8.1] Command of textual evidence",
            "subject": "rw",
            "topic": "Command of textual evidence",
            "code": "R&W U8.1",
            "timeSlot": "8:50 PM - 9:15 PM",
            "durationMinutes": 25,
            "completed": false
          }
        ],
        "specialInstructions": "Day 13: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-10-07",
        "dateStr": "2026-10-07",
        "dayOfWeek": "Wed",
        "formattedDate": "Wed Oct 07",
        "dayNumber": 14,
        "weekId": "week-4",
        "weekNumber": 4,
        "weekTitle": "Quadratics, Functions, Geometry & Textual Analysis",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 140,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 170,
        "tasks": [
          {
            "id": "task-2026-10-07-1",
            "label": "[MATH U8.3] Operations with polynomials",
            "subject": "math",
            "topic": "Operations with polynomials",
            "code": "Math U8.3",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-07-2",
            "label": "[MATH U8.4] Operations with rational expressions",
            "subject": "math",
            "topic": "Operations with rational expressions",
            "code": "Math U8.4",
            "timeSlot": "7:00 PM - 7:30 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-07-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-07-4",
            "label": "[MATH U8.5] Nonlinear functions",
            "subject": "math",
            "topic": "Nonlinear functions",
            "code": "Math U8.5",
            "timeSlot": "7:45 PM - 8:15 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-07-5",
            "label": "[R&W U8.2] Command of quantitative evidence",
            "subject": "rw",
            "topic": "Command of quantitative evidence",
            "code": "R&W U8.2",
            "timeSlot": "8:15 PM - 8:40 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-10-07-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "8:40 PM - 8:55 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-07-7",
            "label": "[R&W U8.3] Central ideas and details",
            "subject": "rw",
            "topic": "Central ideas and details",
            "code": "R&W U8.3",
            "timeSlot": "8:55 PM - 9:20 PM",
            "durationMinutes": 25,
            "completed": false
          }
        ],
        "specialInstructions": "Day 14: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-10-08",
        "dateStr": "2026-10-08",
        "dayOfWeek": "Thu",
        "formattedDate": "Thu Oct 08",
        "dayNumber": 15,
        "weekId": "week-4",
        "weekNumber": 4,
        "weekTitle": "Quadratics, Functions, Geometry & Textual Analysis",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 145,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 175,
        "tasks": [
          {
            "id": "task-2026-10-08-1",
            "label": "[MATH U8.6] Isolating quantities",
            "subject": "math",
            "topic": "Isolating quantities",
            "code": "Math U8.6",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-08-2",
            "label": "[MATH U8.7] Solving quadratic equations",
            "subject": "math",
            "topic": "Solving quadratic equations",
            "code": "Math U8.7",
            "timeSlot": "7:00 PM - 7:30 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-08-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-08-4",
            "label": "[MATH U8.8] Linear and quadratic systems",
            "subject": "math",
            "topic": "Linear and quadratic systems",
            "code": "Math U8.8",
            "timeSlot": "7:45 PM - 8:15 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-08-5",
            "label": "[MATH U8.9] Radical, rational, and absolute value equations",
            "subject": "math",
            "topic": "Radical, rational, and absolute value equations",
            "code": "Math U8.9",
            "timeSlot": "8:15 PM - 8:45 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-08-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "8:45 PM - 9:00 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-08-7",
            "label": "[R&W U8.4] Inferences",
            "subject": "rw",
            "topic": "Inferences",
            "code": "R&W U8.4",
            "timeSlot": "9:00 PM - 9:25 PM",
            "durationMinutes": 25,
            "completed": false
          }
        ],
        "specialInstructions": "Day 15: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-10-09",
        "dateStr": "2026-10-09",
        "dayOfWeek": "Fri",
        "formattedDate": "Fri Oct 09",
        "dayNumber": 16,
        "weekId": "week-4",
        "weekNumber": 4,
        "weekTitle": "Quadratics, Functions, Geometry & Textual Analysis",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 140,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 170,
        "tasks": [
          {
            "id": "task-2026-10-09-1",
            "label": "[MATH U8.10] Quadratic and exponential word problems",
            "subject": "math",
            "topic": "Quadratic and exponential word problems",
            "code": "Math U8.10",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-09-2",
            "label": "[MATH U8.11] Quadratic graphs",
            "subject": "math",
            "topic": "Quadratic graphs",
            "code": "Math U8.11",
            "timeSlot": "7:00 PM - 7:30 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-09-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-09-4",
            "label": "[MATH U8.12] Exponential graphs",
            "subject": "math",
            "topic": "Exponential graphs",
            "code": "Math U8.12",
            "timeSlot": "7:45 PM - 8:15 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-09-5",
            "label": "[R&W U9.1] Words in context",
            "subject": "rw",
            "topic": "Words in context",
            "code": "R&W U9.1",
            "timeSlot": "8:15 PM - 8:40 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-10-09-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "8:40 PM - 8:55 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-09-7",
            "label": "[R&W U9.2] Text structure and purpose",
            "subject": "rw",
            "topic": "Text structure and purpose",
            "code": "R&W U9.2",
            "timeSlot": "8:55 PM - 9:20 PM",
            "durationMinutes": 25,
            "completed": false
          }
        ],
        "specialInstructions": "Day 16: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-10-10",
        "dateStr": "2026-10-10",
        "dayOfWeek": "Sat",
        "formattedDate": "Sat Oct 10",
        "dayNumber": 17,
        "weekId": "week-4",
        "weekNumber": 4,
        "weekTitle": "Quadratics, Functions, Geometry & Textual Analysis",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 150,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 180,
        "tasks": [
          {
            "id": "task-2026-10-10-1",
            "label": "[MATH U8.13] Polynomial and other nonlinear graphs",
            "subject": "math",
            "topic": "Polynomial and other nonlinear graphs",
            "code": "Math U8.13",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-10-2",
            "label": "[MATH U9.1] Area and volume",
            "subject": "math",
            "topic": "Area and volume",
            "code": "Math U9.1",
            "timeSlot": "7:00 PM - 7:35 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "task-2026-10-10-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "7:35 PM - 7:50 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-10-4",
            "label": "[MATH U9.2] Congruence, similarity, and angle relationships",
            "subject": "math",
            "topic": "Congruence, similarity, and angle relationships",
            "code": "Math U9.2",
            "timeSlot": "7:50 PM - 8:25 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "task-2026-10-10-5",
            "label": "[R&W U9.3] Cross-text connections",
            "subject": "rw",
            "topic": "Cross-text connections",
            "code": "R&W U9.3",
            "timeSlot": "8:25 PM - 8:50 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-10-10-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "8:50 PM - 9:05 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-10-7",
            "label": "[R&W U10.1] Transitions",
            "subject": "rw",
            "topic": "Transitions",
            "code": "R&W U10.1",
            "timeSlot": "9:05 PM - 9:30 PM",
            "durationMinutes": 25,
            "completed": false
          }
        ],
        "specialInstructions": "Day 17: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-10-11",
        "dateStr": "2026-10-11",
        "dayOfWeek": "Sun",
        "formattedDate": "Sun Oct 11",
        "dayNumber": null,
        "weekId": "week-4",
        "weekNumber": 4,
        "weekTitle": "Quadratics, Functions, Geometry & Textual Analysis",
        "phase": "foundations",
        "isBuffer": true,
        "isTestDay": false,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "tasks": [
          {
            "id": "task-2026-10-11-1",
            "label": "Screen-Free Mental Reset (No Studying)",
            "subject": "buffer",
            "topic": "Screen-Free Mental Reset (No Studying)",
            "code": "REST",
            "timeSlot": "All Day",
            "durationMinutes": 0,
            "completed": false
          }
        ],
        "specialInstructions": "Weekly recovery window. Anti-burnout rule #1: Resting on Sundays consolidates the week’s learning and resets mental stamina."
      }
    ]
  },
  {
    "id": "week-5",
    "title": "Week 5: Advanced Algebra, Statistics & Grammar Mastery",
    "dateRange": "Oct 12 to Oct 18",
    "subtitle": "Days 18–23 master circle equations, linear inequalities, percentages & statistical claims.",
    "phase": "foundations",
    "days": [
      {
        "id": "2026-10-12",
        "dateStr": "2026-10-12",
        "dayOfWeek": "Mon",
        "formattedDate": "Mon Oct 12",
        "dayNumber": 18,
        "weekId": "week-5",
        "weekNumber": 5,
        "weekTitle": "Advanced Algebra, Statistics & Grammar Mastery",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 130,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 145,
        "tasks": [
          {
            "id": "task-2026-10-12-1",
            "label": "[MATH U9.3] Right triangle trigonometry",
            "subject": "math",
            "topic": "Right triangle trigonometry",
            "code": "Math U9.3",
            "timeSlot": "6:30 PM - 7:05 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "task-2026-10-12-2",
            "label": "[MATH U9.4] Circle theorems",
            "subject": "math",
            "topic": "Circle theorems",
            "code": "Math U9.4",
            "timeSlot": "7:05 PM - 7:40 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "task-2026-10-12-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "7:40 PM - 7:55 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-12-4",
            "label": "[MATH U9.5] Unit circle trigonometry",
            "subject": "math",
            "topic": "Unit circle trigonometry",
            "code": "Math U9.5",
            "timeSlot": "7:55 PM - 8:30 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "task-2026-10-12-5",
            "label": "[R&W U10.2] Rhetorical synthesis",
            "subject": "rw",
            "topic": "Rhetorical synthesis",
            "code": "R&W U10.2",
            "timeSlot": "8:30 PM - 8:55 PM",
            "durationMinutes": 25,
            "completed": false
          }
        ],
        "specialInstructions": "Day 18: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-10-13",
        "dateStr": "2026-10-13",
        "dayOfWeek": "Tue",
        "formattedDate": "Tue Oct 13",
        "dayNumber": 19,
        "weekId": "week-5",
        "weekNumber": 5,
        "weekTitle": "Advanced Algebra, Statistics & Grammar Mastery",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 150,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 180,
        "tasks": [
          {
            "id": "task-2026-10-13-1",
            "label": "[MATH U9.6] Circle equations",
            "subject": "math",
            "topic": "Circle equations",
            "code": "Math U9.6",
            "timeSlot": "6:30 PM - 7:05 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "task-2026-10-13-2",
            "label": "[MATH U10.1] Solving linear equations and inequalities",
            "subject": "math",
            "topic": "Solving linear equations and inequalities",
            "code": "Math U10.1",
            "timeSlot": "7:05 PM - 7:35 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-13-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "7:35 PM - 7:50 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-13-4",
            "label": "[MATH U10.2] Linear equation word problems",
            "subject": "math",
            "topic": "Linear equation word problems",
            "code": "Math U10.2",
            "timeSlot": "7:50 PM - 8:20 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-13-5",
            "label": "[MATH U10.3] Linear relationship word problems",
            "subject": "math",
            "topic": "Linear relationship word problems",
            "code": "Math U10.3",
            "timeSlot": "8:20 PM - 8:50 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-13-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "8:50 PM - 9:05 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-13-7",
            "label": "[R&W U10.3] Form, structure, and sense",
            "subject": "rw",
            "topic": "Form, structure, and sense",
            "code": "R&W U10.3",
            "timeSlot": "9:05 PM - 9:30 PM",
            "durationMinutes": 25,
            "completed": false
          }
        ],
        "specialInstructions": "Day 19: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-10-14",
        "dateStr": "2026-10-14",
        "dayOfWeek": "Wed",
        "formattedDate": "Wed Oct 14",
        "dayNumber": 20,
        "weekId": "week-5",
        "weekNumber": 5,
        "weekTitle": "Advanced Algebra, Statistics & Grammar Mastery",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 150,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 180,
        "tasks": [
          {
            "id": "task-2026-10-14-1",
            "label": "[MATH U10.4] Graphs of linear equations and functions",
            "subject": "math",
            "topic": "Graphs of linear equations and functions",
            "code": "Math U10.4",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-14-2",
            "label": "[MATH U10.5] Solving systems of linear equations",
            "subject": "math",
            "topic": "Solving systems of linear equations",
            "code": "Math U10.5",
            "timeSlot": "7:00 PM - 7:30 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-14-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-14-4",
            "label": "[MATH U10.6] Systems of linear equations word problems",
            "subject": "math",
            "topic": "Systems of linear equations word problems",
            "code": "Math U10.6",
            "timeSlot": "7:45 PM - 8:15 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-14-5",
            "label": "[R&W U10.4] Boundaries",
            "subject": "rw",
            "topic": "Boundaries",
            "code": "R&W U10.4",
            "timeSlot": "8:15 PM - 8:40 PM",
            "durationMinutes": 25,
            "completed": false
          },
          {
            "id": "task-2026-10-14-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "8:40 PM - 8:55 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-14-7",
            "label": "[R&W U11.1] Command of evidence",
            "subject": "rw",
            "topic": "Command of evidence",
            "code": "R&W U11.1",
            "timeSlot": "8:55 PM - 9:30 PM",
            "durationMinutes": 35,
            "completed": false
          }
        ],
        "specialInstructions": "Day 20: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-10-15",
        "dateStr": "2026-10-15",
        "dayOfWeek": "Thu",
        "formattedDate": "Thu Oct 15",
        "dayNumber": 21,
        "weekId": "week-5",
        "weekNumber": 5,
        "weekTitle": "Advanced Algebra, Statistics & Grammar Mastery",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 125,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 140,
        "tasks": [
          {
            "id": "task-2026-10-15-1",
            "label": "[MATH U10.7] Linear inequality word problems",
            "subject": "math",
            "topic": "Linear inequality word problems",
            "code": "Math U10.7",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-15-2",
            "label": "[MATH U10.8] Graphs of linear systems and inequalities",
            "subject": "math",
            "topic": "Graphs of linear systems and inequalities",
            "code": "Math U10.8",
            "timeSlot": "7:00 PM - 7:30 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-15-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-15-4",
            "label": "[MATH U11.1] Ratios, rates, and proportions",
            "subject": "math",
            "topic": "Ratios, rates, and proportions",
            "code": "Math U11.1",
            "timeSlot": "7:45 PM - 8:15 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-15-5",
            "label": "[R&W U11.2] Central ideas and details + inferences",
            "subject": "rw",
            "topic": "Central ideas and details + inferences",
            "code": "R&W U11.2",
            "timeSlot": "8:15 PM - 8:50 PM",
            "durationMinutes": 35,
            "completed": false
          }
        ],
        "specialInstructions": "Day 21: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-10-16",
        "dateStr": "2026-10-16",
        "dayOfWeek": "Fri",
        "formattedDate": "Fri Oct 16",
        "dayNumber": 22,
        "weekId": "week-5",
        "weekNumber": 5,
        "weekTitle": "Advanced Algebra, Statistics & Grammar Mastery",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 125,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 140,
        "tasks": [
          {
            "id": "task-2026-10-16-1",
            "label": "[MATH U11.2] Unit conversion",
            "subject": "math",
            "topic": "Unit conversion",
            "code": "Math U11.2",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-16-2",
            "label": "[MATH U11.3] Percentages",
            "subject": "math",
            "topic": "Percentages",
            "code": "Math U11.3",
            "timeSlot": "7:00 PM - 7:30 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-16-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-16-4",
            "label": "[MATH U11.4] Center, spread, and shape of distributions",
            "subject": "math",
            "topic": "Center, spread, and shape of distributions",
            "code": "Math U11.4",
            "timeSlot": "7:45 PM - 8:15 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-16-5",
            "label": "[R&W U11.3] Words in context",
            "subject": "rw",
            "topic": "Words in context",
            "code": "R&W U11.3",
            "timeSlot": "8:15 PM - 8:50 PM",
            "durationMinutes": 35,
            "completed": false
          }
        ],
        "specialInstructions": "Day 22: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-10-17",
        "dateStr": "2026-10-17",
        "dayOfWeek": "Sat",
        "formattedDate": "Sat Oct 17",
        "dayNumber": 23,
        "weekId": "week-5",
        "weekNumber": 5,
        "weekTitle": "Advanced Algebra, Statistics & Grammar Mastery",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 120,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 135,
        "tasks": [
          {
            "id": "task-2026-10-17-1",
            "label": "[MATH U11.5] Data representations",
            "subject": "math",
            "topic": "Data representations",
            "code": "Math U11.5",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-17-2",
            "label": "[MATH U11.6] Scatterplots",
            "subject": "math",
            "topic": "Scatterplots",
            "code": "Math U11.6",
            "timeSlot": "7:00 PM - 7:30 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-17-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-17-4",
            "label": "[MATH U11.7] Linear and exponential growth",
            "subject": "math",
            "topic": "Linear and exponential growth",
            "code": "Math U11.7",
            "timeSlot": "7:45 PM - 8:15 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-17-5",
            "label": "[MATH U11.8] Probability and relative frequency",
            "subject": "math",
            "topic": "Probability and relative frequency",
            "code": "Math U11.8",
            "timeSlot": "8:15 PM - 8:45 PM",
            "durationMinutes": 30,
            "completed": false
          }
        ],
        "specialInstructions": "Day 23: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-10-18",
        "dateStr": "2026-10-18",
        "dayOfWeek": "Sun",
        "formattedDate": "Sun Oct 18",
        "dayNumber": null,
        "weekId": "week-5",
        "weekNumber": 5,
        "weekTitle": "Advanced Algebra, Statistics & Grammar Mastery",
        "phase": "foundations",
        "isBuffer": true,
        "isTestDay": false,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "tasks": [
          {
            "id": "task-2026-10-18-1",
            "label": "Screen-Free Mental Reset (No Studying)",
            "subject": "buffer",
            "topic": "Screen-Free Mental Reset (No Studying)",
            "code": "REST",
            "timeSlot": "All Day",
            "durationMinutes": 0,
            "completed": false
          }
        ],
        "specialInstructions": "Weekly recovery window. Anti-burnout rule #1: Resting on Sundays consolidates the week’s learning and resets mental stamina."
      }
    ]
  },
  {
    "id": "week-6",
    "title": "Week 6: Phase 1 Climax (All 145 Skills Complete on Oct 25)",
    "dateRange": "Oct 19 to Oct 25",
    "subtitle": "Days 24–30 finish all 145 skills by Sun Oct 25. Tomorrow Phase 2 launches with Test #1.",
    "phase": "foundations",
    "days": [
      {
        "id": "2026-10-19",
        "dateStr": "2026-10-19",
        "dayOfWeek": "Mon",
        "formattedDate": "Mon Oct 19",
        "dayNumber": 24,
        "weekId": "week-6",
        "weekNumber": 6,
        "weekTitle": "Phase 1 Climax (All 145 Skills Complete on Oct 25)",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 130,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 145,
        "tasks": [
          {
            "id": "task-2026-10-19-1",
            "label": "[MATH U11.9] Data inferences",
            "subject": "math",
            "topic": "Data inferences",
            "code": "Math U11.9",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-19-2",
            "label": "[MATH U11.10] Evaluating statistical claims",
            "subject": "math",
            "topic": "Evaluating statistical claims",
            "code": "Math U11.10",
            "timeSlot": "7:00 PM - 7:30 PM",
            "durationMinutes": 30,
            "completed": false
          },
          {
            "id": "task-2026-10-19-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "7:30 PM - 7:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-19-4",
            "label": "[MATH U12.1] Factoring quadratic and polynomial expressions",
            "subject": "math",
            "topic": "Factoring quadratic and polynomial expressions",
            "code": "Math U12.1",
            "timeSlot": "7:45 PM - 8:20 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "task-2026-10-19-5",
            "label": "[R&W U11.4] Text structure and purpose + cross-text connections",
            "subject": "rw",
            "topic": "Text structure and purpose + cross-text connections",
            "code": "R&W U11.4",
            "timeSlot": "8:20 PM - 8:55 PM",
            "durationMinutes": 35,
            "completed": false
          }
        ],
        "specialInstructions": "Day 24: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-10-20",
        "dateStr": "2026-10-20",
        "dayOfWeek": "Tue",
        "formattedDate": "Tue Oct 20",
        "dayNumber": 25,
        "weekId": "week-6",
        "weekNumber": 6,
        "weekTitle": "Phase 1 Climax (All 145 Skills Complete on Oct 25)",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 140,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 155,
        "tasks": [
          {
            "id": "task-2026-10-20-1",
            "label": "[MATH U12.2] Radicals and rational exponents",
            "subject": "math",
            "topic": "Radicals and rational exponents",
            "code": "Math U12.2",
            "timeSlot": "6:30 PM - 7:05 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "task-2026-10-20-2",
            "label": "[MATH U12.3] Operations with polynomials",
            "subject": "math",
            "topic": "Operations with polynomials",
            "code": "Math U12.3",
            "timeSlot": "7:05 PM - 7:40 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "task-2026-10-20-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "7:40 PM - 7:55 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-20-4",
            "label": "[MATH U12.4] Operations with rational expressions",
            "subject": "math",
            "topic": "Operations with rational expressions",
            "code": "Math U12.4",
            "timeSlot": "7:55 PM - 8:30 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "task-2026-10-20-5",
            "label": "[R&W U11.5] Boundaries + form, structure, and sense",
            "subject": "rw",
            "topic": "Boundaries + form, structure, and sense",
            "code": "R&W U11.5",
            "timeSlot": "8:30 PM - 9:05 PM",
            "durationMinutes": 35,
            "completed": false
          }
        ],
        "specialInstructions": "Day 25: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-10-21",
        "dateStr": "2026-10-21",
        "dayOfWeek": "Wed",
        "formattedDate": "Wed Oct 21",
        "dayNumber": 26,
        "weekId": "week-6",
        "weekNumber": 6,
        "weekTitle": "Phase 1 Climax (All 145 Skills Complete on Oct 25)",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 140,
        "breakTimeMinutes": 15,
        "totalTimeMinutes": 155,
        "tasks": [
          {
            "id": "task-2026-10-21-1",
            "label": "[MATH U12.5] Nonlinear functions",
            "subject": "math",
            "topic": "Nonlinear functions",
            "code": "Math U12.5",
            "timeSlot": "6:30 PM - 7:05 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "task-2026-10-21-2",
            "label": "[MATH U12.6] Isolating quantities",
            "subject": "math",
            "topic": "Isolating quantities",
            "code": "Math U12.6",
            "timeSlot": "7:05 PM - 7:40 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "task-2026-10-21-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "7:40 PM - 7:55 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-21-4",
            "label": "[MATH U12.7] Solving quadratic equations",
            "subject": "math",
            "topic": "Solving quadratic equations",
            "code": "Math U12.7",
            "timeSlot": "7:55 PM - 8:30 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "task-2026-10-21-5",
            "label": "[R&W U11.6] Transitions + rhetorical synthesis",
            "subject": "rw",
            "topic": "Transitions + rhetorical synthesis",
            "code": "R&W U11.6",
            "timeSlot": "8:30 PM - 9:05 PM",
            "durationMinutes": 35,
            "completed": false
          }
        ],
        "specialInstructions": "Day 26: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-10-22",
        "dateStr": "2026-10-22",
        "dayOfWeek": "Thu",
        "formattedDate": "Thu Oct 22",
        "dayNumber": 27,
        "weekId": "week-6",
        "weekNumber": 6,
        "weekTitle": "Phase 1 Climax (All 145 Skills Complete on Oct 25)",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 135,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 165,
        "tasks": [
          {
            "id": "task-2026-10-22-1",
            "label": "[MATH U12.8] Linear and quadratic systems",
            "subject": "math",
            "topic": "Linear and quadratic systems",
            "code": "Math U12.8",
            "timeSlot": "6:30 PM - 7:05 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "task-2026-10-22-2",
            "label": "[MATH U12.9] Radical, rational, and absolute value equations",
            "subject": "math",
            "topic": "Radical, rational, and absolute value equations",
            "code": "Math U12.9",
            "timeSlot": "7:05 PM - 7:40 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "task-2026-10-22-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "7:40 PM - 7:55 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-22-4",
            "label": "[MATH U12.10] Quadratic and exponential word problems",
            "subject": "math",
            "topic": "Quadratic and exponential word problems",
            "code": "Math U12.10",
            "timeSlot": "7:55 PM - 8:30 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "task-2026-10-22-5",
            "label": "[R&W U12.1] Subject-verb agreement",
            "subject": "rw",
            "topic": "Subject-verb agreement",
            "code": "R&W U12.1",
            "timeSlot": "8:30 PM - 8:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-22-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "8:45 PM - 9:00 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-22-7",
            "label": "[R&W U12.2] Pronoun-antecedent agreement",
            "subject": "rw",
            "topic": "Pronoun-antecedent agreement",
            "code": "R&W U12.2",
            "timeSlot": "9:00 PM - 9:15 PM",
            "durationMinutes": 15,
            "completed": false
          }
        ],
        "specialInstructions": "Day 27: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-10-23",
        "dateStr": "2026-10-23",
        "dayOfWeek": "Fri",
        "formattedDate": "Fri Oct 23",
        "dayNumber": 28,
        "weekId": "week-6",
        "weekNumber": 6,
        "weekTitle": "Phase 1 Climax (All 145 Skills Complete on Oct 25)",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 135,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 165,
        "tasks": [
          {
            "id": "task-2026-10-23-1",
            "label": "[MATH U12.11] Quadratic graphs",
            "subject": "math",
            "topic": "Quadratic graphs",
            "code": "Math U12.11",
            "timeSlot": "6:30 PM - 7:05 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "task-2026-10-23-2",
            "label": "[MATH U12.12] Exponential graphs",
            "subject": "math",
            "topic": "Exponential graphs",
            "code": "Math U12.12",
            "timeSlot": "7:05 PM - 7:40 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "task-2026-10-23-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "7:40 PM - 7:55 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-23-4",
            "label": "[MATH U12.13] Polynomial and other nonlinear graphs",
            "subject": "math",
            "topic": "Polynomial and other nonlinear graphs",
            "code": "Math U12.13",
            "timeSlot": "7:55 PM - 8:30 PM",
            "durationMinutes": 35,
            "completed": false
          },
          {
            "id": "task-2026-10-23-5",
            "label": "[R&W U12.3] Plurals and possessives",
            "subject": "rw",
            "topic": "Plurals and possessives",
            "code": "R&W U12.3",
            "timeSlot": "8:30 PM - 8:45 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-23-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "8:45 PM - 9:00 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-23-7",
            "label": "[R&W U12.4] Verb forms",
            "subject": "rw",
            "topic": "Verb forms",
            "code": "R&W U12.4",
            "timeSlot": "9:00 PM - 9:15 PM",
            "durationMinutes": 15,
            "completed": false
          }
        ],
        "specialInstructions": "Day 28: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-10-24",
        "dateStr": "2026-10-24",
        "dayOfWeek": "Sat",
        "formattedDate": "Sat Oct 24",
        "dayNumber": 29,
        "weekId": "week-6",
        "weekNumber": 6,
        "weekTitle": "Phase 1 Climax (All 145 Skills Complete on Oct 25)",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 150,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 180,
        "tasks": [
          {
            "id": "task-2026-10-24-1",
            "label": "[MATH U13.1] Area and volume",
            "subject": "math",
            "topic": "Area and volume",
            "code": "Math U13.1",
            "timeSlot": "6:30 PM - 7:10 PM",
            "durationMinutes": 40,
            "completed": false
          },
          {
            "id": "task-2026-10-24-2",
            "label": "[MATH U13.2] Congruence, similarity, and angle relationships",
            "subject": "math",
            "topic": "Congruence, similarity, and angle relationships",
            "code": "Math U13.2",
            "timeSlot": "7:10 PM - 7:50 PM",
            "durationMinutes": 40,
            "completed": false
          },
          {
            "id": "task-2026-10-24-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "7:50 PM - 8:05 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-24-4",
            "label": "[MATH U13.3] Right triangle trigonometry",
            "subject": "math",
            "topic": "Right triangle trigonometry",
            "code": "Math U13.3",
            "timeSlot": "8:05 PM - 8:45 PM",
            "durationMinutes": 40,
            "completed": false
          },
          {
            "id": "task-2026-10-24-5",
            "label": "[R&W U12.5] Subject-modifier placement",
            "subject": "rw",
            "topic": "Subject-modifier placement",
            "code": "R&W U12.5",
            "timeSlot": "8:45 PM - 9:00 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-24-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "9:00 PM - 9:15 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-24-7",
            "label": "[R&W U12.6] Linking clauses",
            "subject": "rw",
            "topic": "Linking clauses",
            "code": "R&W U12.6",
            "timeSlot": "9:15 PM - 9:30 PM",
            "durationMinutes": 15,
            "completed": false
          }
        ],
        "specialInstructions": "Day 29: Complete assigned tasks with strict timer adherence. Rest during scheduled break intervals."
      },
      {
        "id": "2026-10-25",
        "dateStr": "2026-10-25",
        "dayOfWeek": "Sun",
        "formattedDate": "Sun Oct 25",
        "dayNumber": 30,
        "weekId": "week-6",
        "weekNumber": 6,
        "weekTitle": "Phase 1 Climax (All 145 Skills Complete on Oct 25)",
        "phase": "foundations",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 150,
        "breakTimeMinutes": 30,
        "totalTimeMinutes": 180,
        "tasks": [
          {
            "id": "task-2026-10-25-1",
            "label": "[MATH U13.4] Circle theorems",
            "subject": "math",
            "topic": "Circle theorems",
            "code": "Math U13.4",
            "timeSlot": "6:30 PM - 7:10 PM",
            "durationMinutes": 40,
            "completed": false
          },
          {
            "id": "task-2026-10-25-2",
            "label": "[MATH U13.5] Unit circle trigonometry",
            "subject": "math",
            "topic": "Unit circle trigonometry",
            "code": "Math U13.5",
            "timeSlot": "7:10 PM - 7:50 PM",
            "durationMinutes": 40,
            "completed": false
          },
          {
            "id": "task-2026-10-25-3",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "7:50 PM - 8:05 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-25-4",
            "label": "[MATH U13.6] Circle equations",
            "subject": "math",
            "topic": "Circle equations",
            "code": "Math U13.6",
            "timeSlot": "8:05 PM - 8:45 PM",
            "durationMinutes": 40,
            "completed": false
          },
          {
            "id": "task-2026-10-25-5",
            "label": "[R&W U12.7] Supplements",
            "subject": "rw",
            "topic": "Supplements",
            "code": "R&W U12.7",
            "timeSlot": "8:45 PM - 9:00 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-25-6",
            "label": "Screen-Free Rest & Recharge",
            "subject": "buffer",
            "topic": "Screen-Free Rest & Recharge",
            "code": "BREAK",
            "timeSlot": "9:00 PM - 9:15 PM",
            "durationMinutes": 15,
            "completed": false
          },
          {
            "id": "task-2026-10-25-7",
            "label": "[R&W U12.8] Punctuation",
            "subject": "rw",
            "topic": "Punctuation",
            "code": "R&W U12.8",
            "timeSlot": "9:15 PM - 9:30 PM",
            "durationMinutes": 15,
            "completed": false
          }
        ],
        "specialInstructions": "PHASE 1 COMPLETE: All 145 Khan Academy Math & R&W curriculum skills mastered! Tomorrow Phase 2 launches with Test #1."
      }
    ]
  },
  {
    "id": "week-7",
    "title": "Week 7: Phase 2 Testing Arena (Practice Tests #1 & #2)",
    "dateRange": "Oct 26 to Nov 01",
    "subtitle": "Full timed Bluebook Test #1 (Mon Oct 26) and Test #2 (Fri Oct 30) with autopsies & drills.",
    "phase": "bluebook",
    "days": [
      {
        "id": "2026-10-26",
        "dateStr": "2026-10-26",
        "dayOfWeek": "Mon",
        "formattedDate": "Mon Oct 26",
        "dayNumber": null,
        "weekId": "week-7",
        "weekNumber": 7,
        "weekTitle": "Phase 2 Testing Arena (Practice Tests #1 & #2)",
        "phase": "bluebook",
        "isBuffer": false,
        "isTestDay": true,
        "studyTimeMinutes": 144,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 144,
        "tasks": [
          {
            "id": "bluebook-test-1",
            "label": "TEST #1 (full Bluebook Practice Test, real conditions)",
            "subject": "test",
            "topic": "TEST #1 (full Bluebook Practice Test, real conditions)",
            "code": "BLUEBOOK TEST 1",
            "timeSlot": "8:00 AM - 10:24 AM",
            "durationMinutes": 144,
            "completed": false
          }
        ],
        "specialInstructions": "TEST #1: Full timed Bluebook Practice Test #1 under strict testing conditions (8:00 AM - 10:24 AM). Phase 2 officially launches!"
      },
      {
        "id": "2026-10-27",
        "dateStr": "2026-10-27",
        "dayOfWeek": "Tue",
        "formattedDate": "Tue Oct 27",
        "dayNumber": null,
        "weekId": "week-7",
        "weekNumber": 7,
        "weekTitle": "Phase 2 Testing Arena (Practice Tests #1 & #2)",
        "phase": "bluebook",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 75,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 75,
        "tasks": [
          {
            "id": "task-2026-10-27-1",
            "label": "[REVIEW] Error-log review of Test #1 + Math/Desmos drills on weak areas (75 min)",
            "subject": "review",
            "topic": "Error-log review of Test #1 + Math/Desmos drills on weak areas (75 min)",
            "code": "REVIEW",
            "timeSlot": "6:30 PM - 7:45 PM",
            "durationMinutes": 75,
            "completed": false
          }
        ],
        "specialInstructions": "Error-log review of Test #1 + Math/Desmos drills on weak areas (75 min). Dissect every mistake in your error notebook."
      },
      {
        "id": "2026-10-28",
        "dateStr": "2026-10-28",
        "dayOfWeek": "Wed",
        "formattedDate": "Wed Oct 28",
        "dayNumber": null,
        "weekId": "week-7",
        "weekNumber": 7,
        "weekTitle": "Phase 2 Testing Arena (Practice Tests #1 & #2)",
        "phase": "bluebook",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 60,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 60,
        "tasks": [
          {
            "id": "task-2026-10-28-1",
            "label": "[DRILL] Targeted R&W drills, punctuation/grammar review (60 min)",
            "subject": "drill",
            "topic": "Targeted R&W drills, punctuation/grammar review (60 min)",
            "code": "DRILL",
            "timeSlot": "6:30 PM - 7:30 PM",
            "durationMinutes": 60,
            "completed": false
          }
        ],
        "specialInstructions": "Targeted R&W drills, punctuation/grammar review (60 min). Focus on transitions and boundary rules."
      },
      {
        "id": "2026-10-29",
        "dateStr": "2026-10-29",
        "dayOfWeek": "Thu",
        "formattedDate": "Thu Oct 29",
        "dayNumber": null,
        "weekId": "week-7",
        "weekNumber": 7,
        "weekTitle": "Phase 2 Testing Arena (Practice Tests #1 & #2)",
        "phase": "bluebook",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 45,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 45,
        "tasks": [
          {
            "id": "task-2026-10-29-1",
            "label": "[DRILL] Light targeted practice on remaining weak spots (45 min)",
            "subject": "buffer",
            "topic": "Light targeted practice on remaining weak spots (45 min)",
            "code": "DRILL",
            "timeSlot": "6:30 PM - 7:15 PM",
            "durationMinutes": 45,
            "completed": false
          }
        ],
        "specialInstructions": "Light targeted practice on remaining weak spots (45 min). Review key formulas before Test #2 tomorrow."
      },
      {
        "id": "2026-10-30",
        "dateStr": "2026-10-30",
        "dayOfWeek": "Fri",
        "formattedDate": "Fri Oct 30",
        "dayNumber": null,
        "weekId": "week-7",
        "weekNumber": 7,
        "weekTitle": "Phase 2 Testing Arena (Practice Tests #1 & #2)",
        "phase": "bluebook",
        "isBuffer": false,
        "isTestDay": true,
        "studyTimeMinutes": 144,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 144,
        "tasks": [
          {
            "id": "bluebook-test-2",
            "label": "TEST #2 (full Bluebook Practice Test)",
            "subject": "test",
            "topic": "TEST #2 (full Bluebook Practice Test)",
            "code": "BLUEBOOK TEST 2",
            "timeSlot": "8:00 AM - 10:24 AM",
            "durationMinutes": 144,
            "completed": false
          }
        ],
        "specialInstructions": "TEST #2: Full timed Bluebook Practice Test #2 under real exam conditions (8:00 AM - 10:24 AM)."
      },
      {
        "id": "2026-10-31",
        "dateStr": "2026-10-31",
        "dayOfWeek": "Sat",
        "formattedDate": "Sat Oct 31",
        "dayNumber": null,
        "weekId": "week-7",
        "weekNumber": 7,
        "weekTitle": "Phase 2 Testing Arena (Practice Tests #1 & #2)",
        "phase": "bluebook",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 75,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 75,
        "tasks": [
          {
            "id": "task-2026-10-31-1",
            "label": "[REVIEW] Error-log review of Test #2 + targeted drills (75 min)",
            "subject": "review",
            "topic": "Error-log review of Test #2 + targeted drills (75 min)",
            "code": "REVIEW",
            "timeSlot": "6:30 PM - 7:45 PM",
            "durationMinutes": 75,
            "completed": false
          }
        ],
        "specialInstructions": "Error-log review of Test #2 + targeted drills (75 min). Dissect every question missed."
      },
      {
        "id": "2026-11-01",
        "dateStr": "2026-11-01",
        "dayOfWeek": "Sun",
        "formattedDate": "Sun Nov 01",
        "dayNumber": null,
        "weekId": "week-7",
        "weekNumber": 7,
        "weekTitle": "Phase 2 Testing Arena (Practice Tests #1 & #2)",
        "phase": "bluebook",
        "isBuffer": true,
        "isTestDay": false,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "tasks": [
          {
            "id": "task-2026-11-01-1",
            "label": "Screen-Free Mental Reset (No Studying)",
            "subject": "buffer",
            "topic": "Screen-Free Mental Reset (No Studying)",
            "code": "REST",
            "timeSlot": "All Day",
            "durationMinutes": 0,
            "completed": false
          }
        ],
        "specialInstructions": "Weekly recovery window. Full day off, no studying. Guaranteed mental reset before final week."
      }
    ]
  },
  {
    "id": "week-8",
    "title": "Week 8: Test #3 Final Mock, Taper, Packout & Official SAT Exam Day",
    "dateRange": "Nov 02 to Nov 07",
    "subtitle": "Test #3 (Tue Nov 3), light taper, bag packout, full rest & Sat Nov 7 Exam Day.",
    "phase": "exam",
    "days": [
      {
        "id": "2026-11-02",
        "dateStr": "2026-11-02",
        "dayOfWeek": "Mon",
        "formattedDate": "Mon Nov 02",
        "dayNumber": null,
        "weekId": "week-8",
        "weekNumber": 8,
        "weekTitle": "Test #3 Final Mock, Taper, Packout & Official SAT Exam Day",
        "phase": "bluebook",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 60,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 60,
        "tasks": [
          {
            "id": "task-2026-11-02-1",
            "label": "[REVIEW] Deep review, punctuation & transitions traps + Math cleanup (60 min)",
            "subject": "review",
            "topic": "Deep review, punctuation & transitions traps + Math cleanup (60 min)",
            "code": "REVIEW",
            "timeSlot": "6:30 PM - 7:30 PM",
            "durationMinutes": 60,
            "completed": false
          }
        ],
        "specialInstructions": "Deep review, punctuation & transitions traps + Math cleanup (60 min). Lock in test-day strategy."
      },
      {
        "id": "2026-11-03",
        "dateStr": "2026-11-03",
        "dayOfWeek": "Tue",
        "formattedDate": "Tue Nov 03",
        "dayNumber": null,
        "weekId": "week-8",
        "weekNumber": 8,
        "weekTitle": "Test #3 Final Mock, Taper, Packout & Official SAT Exam Day",
        "phase": "bluebook",
        "isBuffer": false,
        "isTestDay": true,
        "studyTimeMinutes": 144,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 144,
        "tasks": [
          {
            "id": "bluebook-test-3",
            "label": "TEST #3 (final full test, timed)",
            "subject": "test",
            "topic": "TEST #3 (final full test, timed)",
            "code": "BLUEBOOK TEST 3",
            "timeSlot": "8:00 AM - 10:24 AM",
            "durationMinutes": 144,
            "completed": false
          }
        ],
        "specialInstructions": "TEST #3: Final full Bluebook Practice Test under strict timed conditions (8:00 AM - 10:24 AM)."
      },
      {
        "id": "2026-11-04",
        "dateStr": "2026-11-04",
        "dayOfWeek": "Wed",
        "formattedDate": "Wed Nov 04",
        "dayNumber": null,
        "weekId": "week-8",
        "weekNumber": 8,
        "weekTitle": "Test #3 Final Mock, Taper, Packout & Official SAT Exam Day",
        "phase": "exam",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 45,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 45,
        "tasks": [
          {
            "id": "task-2026-11-04-1",
            "label": "[REVIEW] Error-log review of Test #3 + simulate exact test-day timing (45 min)",
            "subject": "review",
            "topic": "Error-log review of Test #3 + simulate exact test-day timing (45 min)",
            "code": "REVIEW",
            "timeSlot": "6:30 PM - 7:15 PM",
            "durationMinutes": 45,
            "completed": false
          }
        ],
        "specialInstructions": "Error-log review of Test #3 + simulate exact test-day timing (45 min). Dissect every wrong question."
      },
      {
        "id": "2026-11-05",
        "dateStr": "2026-11-05",
        "dayOfWeek": "Thu",
        "formattedDate": "Thu Nov 05",
        "dayNumber": null,
        "weekId": "week-8",
        "weekNumber": 8,
        "weekTitle": "Test #3 Final Mock, Taper, Packout & Official SAT Exam Day",
        "phase": "exam",
        "isBuffer": false,
        "isTestDay": false,
        "studyTimeMinutes": 30,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 30,
        "tasks": [
          {
            "id": "task-2026-11-05-1",
            "label": "[LOGISTICS] Verify Bluebook app/ID/admission ticket + pack your bag (30 min)",
            "subject": "logistics",
            "topic": "Verify Bluebook app/ID/admission ticket + pack your bag (30 min)",
            "code": "LOGISTICS",
            "timeSlot": "6:30 PM - 7:00 PM",
            "durationMinutes": 30,
            "completed": false
          }
        ],
        "specialInstructions": "Logistics check: verify Bluebook app setup, printed ticket, and valid physical ID + pack testing bag (30 min)."
      },
      {
        "id": "2026-11-06",
        "dateStr": "2026-11-06",
        "dayOfWeek": "Fri",
        "formattedDate": "Fri Nov 06",
        "dayNumber": null,
        "weekId": "week-8",
        "weekNumber": 8,
        "weekTitle": "Test #3 Final Mock, Taper, Packout & Official SAT Exam Day",
        "phase": "exam",
        "isBuffer": true,
        "isTestDay": false,
        "studyTimeMinutes": 0,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 0,
        "tasks": [
          {
            "id": "task-2026-11-06-1",
            "label": "Mandatory Full Day Off • Relax & Sleep Early",
            "subject": "buffer",
            "topic": "Mandatory Full Day Off • Relax & Sleep Early",
            "code": "REST",
            "timeSlot": "All Day",
            "durationMinutes": 0,
            "completed": false
          }
        ],
        "specialInstructions": "FULL REST: Zero studying. Eat well, hydrate, relax and sleep early for exam day."
      },
      {
        "id": "2026-11-07",
        "dateStr": "2026-11-07",
        "dayOfWeek": "Sat",
        "formattedDate": "Sat Nov 07",
        "dayNumber": null,
        "weekId": "week-8",
        "weekNumber": 8,
        "weekTitle": "Test #3 Final Mock, Taper, Packout & Official SAT Exam Day",
        "phase": "exam",
        "isBuffer": false,
        "isTestDay": true,
        "studyTimeMinutes": 144,
        "breakTimeMinutes": 0,
        "totalTimeMinutes": 144,
        "tasks": [
          {
            "id": "sat-exam-day",
            "label": "[EXAM] OFFICIAL DIGITAL SAT EXAM DAY: Crescent Model School, Shadman Lahore (Arrive 7:15 AM)",
            "subject": "test",
            "topic": "OFFICIAL DIGITAL SAT EXAM DAY: Crescent Model School, Shadman Lahore (Arrive 7:15 AM)",
            "code": "EXAM",
            "timeSlot": "7:15 AM - 12:30 PM",
            "durationMinutes": 144,
            "completed": false
          }
        ],
        "specialInstructions": "Sat Nov 7 -- EXAM DAY: Follow your official admission ticket reporting time exactly. Crescent Model School, Shadman Lahore. Arrive by 7:15 AM sharp (gates lock at 7:45 AM). Stay calm and execute."
      }
    ]
  }
];
