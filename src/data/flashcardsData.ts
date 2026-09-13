export interface Flashcard {
  id: string;
  category: 'math' | 'reading-writing';
  subCategory: string;
  front: {
    title: string;
    prompt: string;
    hint?: string;
  };
  back: {
    formulaOrRule: string;
    explanation: string;
    satExample?: string;
    trapToAvoid?: string;
  };
  highYieldRank: 'S-Tier' | 'A-Tier';
}

export const FLASHCARD_DECK: Flashcard[] = [
  // ==========================================
  // MATH FLASHCARDS (18 High-Yield Cards)
  // ==========================================
  {
    id: 'm-circle-1',
    category: 'math',
    subCategory: 'Geometry & Trig',
    highYieldRank: 'S-Tier',
    front: {
      title: 'Circle Equation Standard Form',
      prompt: 'What is the standard equation of a circle with center (h, k) and radius r?',
      hint: 'Remember the signs of h and k, and what happens to the radius on the right side.',
    },
    back: {
      formulaOrRule: '(x - h)² + (y - k)² = r²',
      explanation: 'Center is at (h, k). Note the minus signs: if the equation has (x + 3)², h is -3.',
      satExample: 'If (x - 2)² + (y + 5)² = 49, Center = (2, -5), Radius = √49 = 7.',
      trapToAvoid: 'The right side is r², NOT r! If the equation equals 36, the radius is 6, not 36.',
    },
  },
  {
    id: 'm-vertex-1',
    category: 'math',
    subCategory: 'Advanced Math',
    highYieldRank: 'S-Tier',
    front: {
      title: 'Parabola Vertex from Standard Form',
      prompt: 'For y = ax² + bx + c, what is the formula for the x-coordinate of the vertex (axis of symmetry)?',
      hint: 'It is the first half of the quadratic formula without the square root.',
    },
    back: {
      formulaOrRule: 'x_vertex = -b / (2a)',
      explanation: 'Once you find x, plug it back into the quadratic equation to get the maximum or minimum y-value.',
      satExample: 'For y = 2x² - 8x + 5: x = -(-8)/(2*2) = 8/4 = 2. Then y = 2(4) - 16 + 5 = -3. Vertex is (2, -3).',
      trapToAvoid: 'Do not forget the negative sign! If b is already negative, -b becomes positive.',
    },
  },
  {
    id: 'm-roots-sum-prod',
    category: 'math',
    subCategory: 'Advanced Math',
    highYieldRank: 'S-Tier',
    front: {
      title: 'Sum & Product of Quadratic Roots (Vieta\'s Formulas)',
      prompt: 'For ax² + bx + c = 0, what are the quick formulas for: 1) Sum of roots? 2) Product of roots?',
      hint: 'You NEVER need to solve the full quadratic equation when SAT asks for the sum or product of solutions!',
    },
    back: {
      formulaOrRule: 'Sum = -b / a  |  Product = c / a',
      explanation: 'Saves 2 minutes on the Digital SAT. Solves the question in 5 seconds without factoring.',
      satExample: 'For 3x² - 12x + 7 = 0, the sum of the solutions is -(-12)/3 = 12/3 = 4.',
      trapToAvoid: 'Sum has a NEGATIVE sign (-b/a). Product is POSITIVE (c/a). Divide both by a!',
    },
  },
  {
    id: 'm-discriminant',
    category: 'math',
    subCategory: 'Advanced Math',
    highYieldRank: 'S-Tier',
    front: {
      title: 'The Discriminant Rule',
      prompt: 'What does Δ = b² - 4ac tell you about the number of real solutions?',
      hint: 'Think about when Δ > 0, Δ = 0, and Δ < 0.',
    },
    back: {
      formulaOrRule: 'Δ > 0: 2 distinct real solutions\nΔ = 0: 1 real solution (tangent/double root)\nΔ < 0: 0 real solutions (no real roots)',
      explanation: 'On the graph, Δ = 0 means the parabola touches the x-axis at exactly one point (tangent).',
      satExample: 'If y = x² + kx + 9 has exactly one solution, b² - 4ac = 0 => k² - 36 = 0 => k = ±6.',
      trapToAvoid: 'If the question asks for "at least one solution", that means Δ ≥ 0 (both > 0 and = 0 count!).',
    },
  },
  {
    id: 'm-exponential',
    category: 'math',
    subCategory: 'Problem Solving & Data',
    highYieldRank: 'S-Tier',
    front: {
      title: 'Exponential Growth and Decay Model',
      prompt: 'What is the general formula for exponential growth/decay with rate r over time t?',
      hint: 'Base is (1 + r) for growth and (1 - r) for decay.',
    },
    back: {
      formulaOrRule: 'y = a · (1 ± r)^t  or  y = a · (1 ± r)^(t/k)',
      explanation: 'a = initial value, r = percent rate as a decimal (5% = 0.05). If it doubles every 3 hours: y = a · (2)^(t/3).',
      satExample: 'A population of 500 decreases by 8% annually: y = 500(1 - 0.08)^t = 500(0.92)^t.',
      trapToAvoid: 'If it says "compounded quarterly" or "every k years", time exponent must be divided by k: t/k.',
    },
  },
  {
    id: 'm-comp-trig',
    category: 'math',
    subCategory: 'Geometry & Trig',
    highYieldRank: 'S-Tier',
    front: {
      title: 'Complementary Angle Trigonometry Theorem',
      prompt: 'What is the relationship between sin(x) and cos(y) in a right triangle?',
      hint: 'Acute angles in a right triangle add up to 90° (or π/2 radians).',
    },
    back: {
      formulaOrRule: 'sin(x) = cos(90° - x)   or   sin(A) = cos(B) when A + B = 90°',
      explanation: 'If sin(x) = cos(y), then x + y = 90° (or π/2 radians).',
      satExample: 'If sin(3x - 10°) = cos(2x + 20°), then (3x - 10) + (2x + 20) = 90 => 5x + 10 = 90 => 5x = 80 => x = 16.',
      trapToAvoid: 'Do not try to solve with inverse trig functions on Desmos; just sum the two angle expressions to 90°!',
    },
  },
  {
    id: 'm-arc-sector',
    category: 'math',
    subCategory: 'Geometry & Trig',
    highYieldRank: 'A-Tier',
    front: {
      title: 'Arc Length & Sector Area Formulas',
      prompt: 'How do you find the arc length and sector area for a central angle θ?',
      hint: 'It is simply the fraction (θ / 360°) times the full circumference (2πr) or full area (πr²). In radians, s = rθ.',
    },
    back: {
      formulaOrRule: 'Arc Length = (θ / 360) · 2πr  [or s = rθ in radians]\nSector Area = (θ / 360) · πr²  [or ½r²θ in radians]',
      explanation: 'A sector is just a pizza slice proportional to the total circle.',
      satExample: 'A circle with r = 6 and central angle 60°: Arc = (60/360) · 12π = (1/6) · 12π = 2π.',
      trapToAvoid: 'Always check whether the angle is given in DEGREES or RADIANS before calculating.',
    },
  },
  {
    id: 'm-similar-triangles',
    category: 'math',
    subCategory: 'Geometry & Trig',
    highYieldRank: 'S-Tier',
    front: {
      title: 'Similar Shapes: Length vs Area vs Volume Ratio',
      prompt: 'If the side length ratio of two similar geometric figures is k (a : b), what is their Area ratio and Volume ratio?',
      hint: 'Area scales quadratically; volume scales cubically.',
    },
    back: {
      formulaOrRule: 'Length Ratio = k\nArea Ratio = k²\nVolume Ratio = k³',
      explanation: 'If Triangle B has sides 3 times larger than Triangle A (ratio 3:1), its area is 3² = 9 times larger!',
      satExample: 'Two similar cylinders have height ratio 2:5. The area ratio of their bases is 4:25, and their volume ratio is 8:125.',
      trapToAvoid: 'College Board loves asking for the area of a scaled triangle and expects students to just multiply by the side ratio instead of squaring it!',
    },
  },
  {
    id: 'm-special-right',
    category: 'math',
    subCategory: 'Geometry & Trig',
    highYieldRank: 'A-Tier',
    front: {
      title: 'Special Right Triangles (30-60-90 and 45-45-90)',
      prompt: 'What are the exact side ratios for: 1) 45-45-90 isosceles right triangle? 2) 30-60-90 right triangle?',
      hint: 'Opposite the 30° is x; opposite the 60° is x√3; hypotenuse is 2x.',
    },
    back: {
      formulaOrRule: '45-45-90:  x : x : x√2\n30-60-90:  x : x√3 : 2x  (short : long : hypotenuse)',
      explanation: 'In 30-60-90, the short leg is ALWAYS opposite the 30° angle, and the hypotenuse is exactly DOUBLE the short leg.',
      satExample: 'If hypotenuse of 30-60-90 is 10, short leg is 5, and long leg is 5√3.',
      trapToAvoid: 'Do not mix up the short leg and long leg when setting up ratios.',
    },
  },
  {
    id: 'm-linear-systems-sol',
    category: 'math',
    subCategory: 'Heart of Algebra',
    highYieldRank: 'S-Tier',
    front: {
      title: 'Linear System: Infinitely Many vs Zero Solutions',
      prompt: 'When two linear equations have: 1) NO solution? 2) INFINITELY many solutions?',
      hint: 'Think about slopes (m) and y-intercepts (b). Parallel vs identical lines.',
    },
    back: {
      formulaOrRule: 'No Solution: Equal Slopes, Different Intercepts (m₁ = m₂, b₁ ≠ b₂)\nInfinitely Many: Equal Slopes, Equal Intercepts (m₁ = m₂, b₁ = b₂ - same line)',
      explanation: 'No solution means parallel lines that never intersect. Infinitely many means identical lines overlapping everywhere.',
      satExample: '2x + 4y = 8 and 4x + 8y = k. Slopes are identical. If k = 16, infinitely many solutions. If k ≠ 16, no solution.',
      trapToAvoid: 'Convert both equations to y = mx + b form or match coefficients directly to compare easily.',
    },
  },
  {
    id: 'm-standard-deviation',
    category: 'math',
    subCategory: 'Problem Solving & Data',
    highYieldRank: 'A-Tier',
    front: {
      title: 'Standard Deviation Concept Rule',
      prompt: 'You NEVER need to calculate standard deviation on the SAT. What does it actually measure?',
      hint: 'It measures the spread/dispersion of data values around the mean.',
    },
    back: {
      formulaOrRule: 'Standard Deviation = Measure of SPREAD / DISPERSION around the mean.',
      explanation: 'More values clustered tightly near the center = LOW standard deviation. Values spread far apart towards the extremes = HIGH standard deviation.',
      satExample: 'Dataset A: [50, 50, 50, 50, 50]. SD = 0.\nDataset B: [10, 30, 50, 70, 90]. SD is much higher.',
      trapToAvoid: 'Adding or subtracting a constant to every data point DOES NOT change standard deviation (the spread stays identical).',
    },
  },
  {
    id: 'm-median-outliers',
    category: 'math',
    subCategory: 'Problem Solving & Data',
    highYieldRank: 'A-Tier',
    front: {
      title: 'Mean vs Median Sensitivity to Outliers',
      prompt: 'When extreme outliers are added to a dataset, which measure changes dramatically and which stays stable?',
      hint: 'One is sensitive to extreme values, the other is robust.',
    },
    back: {
      formulaOrRule: 'MEAN is heavily pulled toward outliers.\nMEDIAN is resistant / stable against outliers.',
      explanation: 'If a billionaire walks into a room of 10 average students, the mean salary jumps into millions, but the median barely moves.',
      satExample: 'A dataset has values 10, 12, 14, 15, 16. If a new value of 200 is added: Mean increases significantly; Median shifts only slightly to the next middle number.',
      trapToAvoid: 'If distribution is right-skewed (long tail to the right), Mean > Median. If left-skewed, Mean < Median.',
    },
  },

  // ==========================================
  // READING & WRITING FLASHCARDS (14 Cards)
  // ==========================================
  {
    id: 'rw-semicolon-period',
    category: 'reading-writing',
    subCategory: 'Standard English Conventions',
    highYieldRank: 'S-Tier',
    front: {
      title: 'Semicolon (;) = Period (.) Equivalence Rule',
      prompt: 'On the Digital SAT, what is the grammatical relationship between a Semicolon (;) and a Period (.)?',
      hint: 'Both have the exact same grammatical power when linking clauses.',
    },
    back: {
      formulaOrRule: 'Independent Clause ; Independent Clause  ===  Independent Clause . Independent Clause',
      explanation: 'A semicolon separates two complete, standalone sentences without a coordinating conjunction (FANBOYS).',
      satExample: 'The experiment produced unexpected results; the researchers decided to replicate it.',
      trapToAvoid: 'If two multiple-choice options are identical except one uses a period and one uses a semicolon, BOTH ARE WRONG! Eliminate both immediately.',
    },
  },
  {
    id: 'rw-colon-dash',
    category: 'reading-writing',
    subCategory: 'Standard English Conventions',
    highYieldRank: 'S-Tier',
    front: {
      title: 'The Single Colon (:) and Single Dash (—) Rule',
      prompt: 'What MUST come BEFORE a single colon or single dash on the SAT?',
      hint: 'It can NEVER follow an incomplete fragment.',
    },
    back: {
      formulaOrRule: '[COMPLETE INDEPENDENT CLAUSE] : [Explanation, List, or Elaboration]',
      explanation: 'Whatever precedes a colon or single dash MUST be a full sentence that could stand alone with a period. What comes after can be a list, single word, phrase, or sentence.',
      satExample: 'CORRECT: "She had only one goal in mind: winning the championship."\nINCORRECT: "Her goals were: winning, resting, and celebrating."',
      trapToAvoid: 'Never put a colon after verbs like "including", "such as", "are", or "consist of".',
    },
  },
  {
    id: 'rw-double-dashes',
    category: 'reading-writing',
    subCategory: 'Standard English Conventions',
    highYieldRank: 'A-Tier',
    front: {
      title: 'Double Dashes / Commas (Non-Essential Appositive)',
      prompt: 'How do paired dashes (— ... —) or paired commas (, ... ,) work in a sentence?',
      hint: 'Test if the sentence makes complete sense when you lift out the middle part.',
    },
    back: {
      formulaOrRule: 'Main Subject, [non-essential extra info], Main Verb...\nMain Subject — [non-essential extra info] — Main Verb...',
      explanation: 'The information between the punctuation marks is parenthetical. Removing it completely leaves a grammatically sound sentence.',
      satExample: 'Dr. Rivera — who recently won the prestigious grant — delivered the keynote speech yesterday.',
      trapToAvoid: 'Never mix and match! You cannot open with a comma and close with a dash (e.g., ", ... —" is always grammatically invalid).',
    },
  },
  {
    id: 'rw-dangling-modifier',
    category: 'reading-writing',
    subCategory: 'Standard English Conventions',
    highYieldRank: 'S-Tier',
    front: {
      title: 'Dangling & Misplaced Modifiers Trap',
      prompt: 'When a sentence opens with an introductory descriptive phrase (modifier), what MUST follow the comma immediately?',
      hint: 'The person or entity performing that action must be the first noun after the comma.',
    },
    back: {
      formulaOrRule: '[Introductory Modifying Phrase], [ACTUAL ACTOR/SUBJECT] + [Verb]...',
      explanation: 'Whoever is described in the opening phrase MUST be the exact subject immediately following the comma.',
      satExample: 'WRONG: "Walking through the forest, the trees towered over Sarah." (The trees were not walking!)\nRIGHT: "Walking through the forest, Sarah looked up at the towering trees."',
      trapToAvoid: 'Watch out for passive voice trick choices where an object or time phrase appears right after the comma.',
    },
  },
  {
    id: 'rw-comma-splice',
    category: 'reading-writing',
    subCategory: 'Standard English Conventions',
    highYieldRank: 'S-Tier',
    front: {
      title: 'Comma Splice Error & How to Fix It',
      prompt: 'What is a "comma splice" and what are the 3 legal ways to fix it on the SAT?',
      hint: 'A comma alone is too weak to glue two complete sentences together.',
    },
    back: {
      formulaOrRule: 'ERROR: Independent Clause , Independent Clause.\n3 FIXES:\n1) Period: [Sentence 1]. [Sentence 2].\n2) Semicolon: [Sentence 1]; [Sentence 2].\n3) Comma + FANBOYS: [Sentence 1], and [Sentence 2].',
      explanation: 'FANBOYS = For, And, Nor, But, Or, Yet, So.',
      satExample: 'WRONG: "The sun set behind the mountains, the temperature dropped quickly."\nRIGHT: "The sun set behind the mountains; the temperature dropped quickly."',
      trapToAvoid: 'Adding transition words like "however" or "therefore" with just commas DOES NOT fix a splice! ("Clause, however, Clause" is still a comma splice).',
    },
  },
  {
    id: 'rw-transitions-taxonomy',
    category: 'reading-writing',
    subCategory: 'Craft and Structure',
    highYieldRank: 'S-Tier',
    front: {
      title: 'Transition Words: 4 Core Categories Strategy',
      prompt: 'What are the 4 main logical relationship categories for SAT Transition questions?',
      hint: 'Categorize the choices before picking! Often 3 choices belong to the same category and cancel out.',
    },
    back: {
      formulaOrRule: '1) Contrast / Concession: However, Nevertheless, Nonetheless, Conversely, On the other hand.\n2) Cause / Effect: Therefore, Thus, Consequently, As a result, Accordingly.\n3) Continuation / Addition: Furthermore, Moreover, In addition, Similarly.\n4) Exemplification / Clarification: For instance, For example, Specifically, That is.',
      explanation: 'Read sentence 1. Read sentence 2. Mentally determine the relationship BEFORE looking at the choices.',
      satExample: 'If sentence 1 proposes a theory and sentence 2 cites data confirming it, the link is CAUSE/CONTINUATION (Thus / Consequently).',
      trapToAvoid: 'If "Furthermore" and "In addition" are both choices, NEITHER can be correct because they function identically.',
    },
  },
  {
    id: 'rw-its-vs-its',
    category: 'reading-writing',
    subCategory: 'Standard English Conventions',
    highYieldRank: 'A-Tier',
    front: {
      title: 'Apostrophe Trap: its vs it\'s vs its\'',
      prompt: 'Explain the difference between "its", "it\'s", and "its\'" on the SAT.',
      hint: 'One of these words does not even exist in the English language!',
    },
    back: {
      formulaOrRule: 'its = POSSESSIVE (belonging to it, e.g. "its color")\nit\'s = CONTRACTION for "it is" or "it has"\nits\' = DOES NOT EXIST. Never choose this option!',
      explanation: 'Pronouns possess with NO apostrophe (his, hers, theirs, its). Test by replacing the word with "it is" in the sentence.',
      satExample: '"The company released it is financial statement" makes no sense, so it must be "its financial statement".',
      trapToAvoid: '"its\'" with the apostrophe after the s is 100% bogus on the SAT. Eliminate immediately.',
    },
  },
  {
    id: 'rw-rhetorical-notes',
    category: 'reading-writing',
    subCategory: 'Information and Ideas',
    highYieldRank: 'S-Tier',
    front: {
      title: 'Rhetorical Synthesis (Bulleted Notes) 20-Second Strategy',
      prompt: 'What is the fastest way to solve the Bulleted Student Notes questions at the end of Module 1/2?',
      hint: 'DO NOT read the bullet points first!',
    },
    back: {
      formulaOrRule: '1) Read the PROMPT at the very bottom first (e.g., "The student wants to emphasize the contrast between...").\n2) Identify the specific objective (contrast, introduce, emphasize similarity).\n3) Check choices to find the ONLY sentence that fulfills that exact objective.',
      explanation: 'All facts in the choices are true. The only question is which choice satisfies the prompt\'s specific goal. Reading all 6 bullet points wastes 45 seconds.',
      satExample: 'If the goal is "emphasize a difference", look for transition words of contrast ("while", "whereas", "unlike", "however") in the options.',
      trapToAvoid: 'Never pick an answer just because it summarizes the notes well if it fails the prompt\'s specific goal (e.g. introducing to a new audience).',
    },
  },
];
