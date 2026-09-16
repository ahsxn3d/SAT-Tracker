export type FormulaDifficulty = 'foundations' | 'medium' | 'advanced';

export type FormulaDomain = 'algebra' | 'problem-solving' | 'advanced-math' | 'geometry-trig';

export interface SATFormulaItem {
  id: string;
  name: string;
  domain: FormulaDomain;
  domainTitle: string;
  units: string;
  difficulty: FormulaDifficulty;
  difficultyBadge: 'Foundations' | 'Medium' | 'Advanced';
  difficultyWeight: number; // 1 = Foundations, 2 = Medium, 3 = Advanced
  formula: string;
  displayFormula: string;
  meaning: string;
  whyDifficultyDiffers: string; // Explains: "If the formula doesn't change, what makes this question tier harder?"
  tierBreakdown: {
    foundations: string; // Tier 1: Direct 1-step calculation
    medium: string;      // Tier 2: Disguised variables / 2-step / reverse solving
    advanced: string;    // Tier 3: Parametric constants (k, c), system conditions, multi-concept fusion
  };
  satExample: {
    question: string;
    answer: string;
    proTip: string;
  };
  desmosShortcut: string;
  trapWarning: string;
}

export interface FormulaDomainCategory {
  id: FormulaDomain;
  title: string;
  units: string;
  badgeColor: string;
  summary: string;
  totalFormulas: number;
}

export const FORMULA_DOMAINS: FormulaDomainCategory[] = [
  {
    id: 'algebra',
    title: 'Algebra',
    units: 'Units 2, 6, 10',
    badgeColor: 'from-blue-600 to-sky-700',
    summary: 'Linear equations, slopes, systems, and inequalities across single-step and parametric tiers.',
    totalFormulas: 6,
  },
  {
    id: 'problem-solving',
    title: 'Problem Solving & Data Analysis',
    units: 'Units 3, 7, 11',
    badgeColor: 'from-amber-600 to-yellow-600',
    summary: 'Ratios, percent changes, statistics, probability, and linear vs. exponential rates of growth.',
    totalFormulas: 7,
  },
  {
    id: 'advanced-math',
    title: 'Advanced Math',
    units: 'Units 4, 8, 12',
    badgeColor: 'from-purple-600 to-indigo-700',
    summary: 'Quadratics, parabolas, vertex forms, exponent rules, and polynomial root behavior.',
    totalFormulas: 6,
  },
  {
    id: 'geometry-trig',
    title: 'Geometry & Trigonometry',
    units: 'Units 5, 9, 13',
    badgeColor: 'from-emerald-600 to-teal-700',
    summary: 'Circles, right triangles, 3D volumes, SOH-CAH-TOA, radian arcs, and completing the square.',
    totalFormulas: 9,
  },
];

export const SAT_FORMULAS_DATA: SATFormulaItem[] = [
  // =========================================================================
  // CHAPTER 1: ALGEBRA (Units 2, 6, 10)
  // =========================================================================
  {
    id: 'alg-slope',
    name: 'Slope Formula',
    domain: 'algebra',
    domainTitle: 'Algebra (Units 2, 6, 10)',
    units: 'Units 2, 6, 10',
    difficulty: 'foundations',
    difficultyBadge: 'Foundations',
    difficultyWeight: 1,
    formula: 'm = (y₂ - y₁) / (x₂ - x₁)',
    displayFormula: 'm = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{\\text{Rise}}{\\text{Run}}',
    meaning: 'Measures the rate of change or steepness between any two coordinate points on a line.',
    whyDifficultyDiffers: 'In Foundations, two coordinates are explicitly given. In Medium, you solve backwards for a missing coordinate. In Hard, slope is tied to perpendicular slopes (-1/m) or parametric constants k.',
    tierBreakdown: {
      foundations: 'Direct points given e.g. (2, 5) and (6, 13). Calculate m = (13 - 5)/(6 - 2) = 8/4 = 2 in one step.',
      medium: 'Slope is given as -3/4 through (k, 7) and (2, -1). Work backwards: (-1 - 7)/(2 - k) = -3/4 to solve for k.',
      advanced: 'Line l is perpendicular to line k. Equation of line k has constants: ax + by = c. Find the slope of line l in terms of a and b.'
    },
    satExample: {
      question: 'A line passes through (3, 2k) and (7, 10) with slope 1/2. What is the value of k?',
      answer: 'k = 4. Set (10 - 2k)/(7 - 3) = 1/2 → 10 - 2k = 2 → 2k = 8 → k = 4.',
      proTip: 'In Desmos, type the table or type (10 - 2k)/(7 - 3) = 1/2 directly to see the vertical line at k = 4.'
    },
    desmosShortcut: 'Type both points into a Desmos table (x₁, y₁) or type the equation with variable k; Desmos draws a vertical line at the exact answer.',
    trapWarning: 'Subtracting coordinates in reverse order: (y₂ - y₁) / (x₁ - x₂) will give you the opposite sign.'
  },
  {
    id: 'alg-slope-intercept',
    name: 'Slope-Intercept Form',
    domain: 'algebra',
    domainTitle: 'Algebra (Units 2, 6, 10)',
    units: 'Units 2, 6, 10',
    difficulty: 'foundations',
    difficultyBadge: 'Foundations',
    difficultyWeight: 1,
    formula: 'y = mx + b',
    displayFormula: 'y = mx + b \\quad (m = \\text{slope}, \\; b = y\\text{-intercept})',
    meaning: 'Standard representation of a linear function with initial value b at x = 0 and constant rate m.',
    whyDifficultyDiffers: 'In Foundations, m and b are read straight off a graph. In Medium, word problems hide b as a flat fee and m as a per-hour rate. In Hard, you must manipulate standard form Ax + By = C into y = (-A/B)x + (C/B).',
    tierBreakdown: {
      foundations: 'Graph shows line crossing y-axis at (0, 4) rising 3 for every 1 unit right. Equation is y = 3x + 4.',
      medium: 'A plumber charges a $75 consultation fee plus $45 per hour. Model cost C for h hours: C = 45h + 75.',
      advanced: 'Convert 4x - 6y = 15 into slope-intercept form to find the y-intercept: y = (2/3)x - 2.5. Intercept is (0, -2.5).'
    },
    satExample: {
      question: 'In the equation 3x - 5y = 20, what is the slope and the y-intercept of the line?',
      answer: 'Slope m = 3/5, y-intercept = (0, -4). Rewrite as -5y = -3x + 20 → y = (3/5)x - 4.',
      proTip: 'For any Ax + By = C line: Slope is always -A/B, and y-intercept is always C/B.'
    },
    desmosShortcut: 'Type 3x - 5y = 20 into Desmos directly. Click the grey dot on the y-axis to read (0, -4) instantly.',
    trapWarning: 'Forgetting to divide C by B, or confusing the x-intercept with the y-intercept.'
  },
  {
    id: 'alg-point-slope',
    name: 'Point-Slope Form',
    domain: 'algebra',
    domainTitle: 'Algebra (Units 2, 6, 10)',
    units: 'Units 2, 6, 10',
    difficulty: 'medium',
    difficultyBadge: 'Medium',
    difficultyWeight: 2,
    formula: 'y - y₁ = m(x - x₁)',
    displayFormula: 'y - y_1 = m(x - x_1)',
    meaning: 'Fastest way to write the equation of a line when given an arbitrary point (x₁, y₁) and a known slope m.',
    whyDifficultyDiffers: 'In Foundations, you rarely need this because (0, b) is given. In Medium, you are given a non-zero point like (4, -3) and m = 2. In Hard, you must find m from another perpendicular line, plug in (x₁, y₁), and rearrange into standard form Ax + By = C.',
    tierBreakdown: {
      foundations: 'Plug (2, 3) and m = 5: y - 3 = 5(x - 2).',
      medium: 'Line passes through (-3, 5) with slope -2. Write equation: y - 5 = -2(x - (-3)) → y = -2x - 1.',
      advanced: 'Find line perpendicular to 2x + 6y = 9 passing through (5, -2). Perpendicular slope = 3. Equation: y + 2 = 3(x - 5) → 3x - y = 17.'
    },
    satExample: {
      question: 'Which equation represents the line passing through (-4, 6) with slope 3/2?',
      answer: 'y - 6 = 3/2(x + 4) or 3x - 2y = -24.',
      proTip: 'Watch out for double negatives! x - (-4) becomes (x + 4).'
    },
    desmosShortcut: 'Type the given point (-4, 6) and test the 4 multiple choice options in Desmos to see which line passes right through it.',
    trapWarning: 'Flipping x₁ and y₁: writing y - x₁ = m(x - y₁).'
  },
  {
    id: 'alg-systems',
    name: 'Solving Systems (Substitution & Elimination)',
    domain: 'algebra',
    domainTitle: 'Algebra (Units 2, 6, 10)',
    units: 'Units 2, 6, 10',
    difficulty: 'medium',
    difficultyBadge: 'Medium',
    difficultyWeight: 2,
    formula: 'Substitution: y = f(x) → plug into other equation. Elimination: add/subtract to cancel.',
    displayFormula: '\\text{Substitution: } y = ax + b \\implies \\text{Plug in.} \\quad \\text{Elimination: } c_1 E_1 \\pm c_2 E_2',
    meaning: 'Finding the simultaneous coordinate (x, y) where two lines intersect on the Cartesian plane.',
    whyDifficultyDiffers: 'In Foundations, one variable is already isolated (e.g. y = 3x). In Medium, both equations need scaling before elimination. In Hard, the question asks for x + y or 3x - 2y directly instead of individual variables, or has fractional coefficients.',
    tierBreakdown: {
      foundations: 'Given y = 2x and 3x + y = 15. Substitute 2x for y: 3x + 2x = 15 → 5x = 15 → x = 3, y = 6.',
      medium: 'Given 2x + 3y = 12 and 5x - 2y = 11. Multiply Eq 1 by 2 and Eq 2 by 3 to eliminate y: 4x + 6y = 24 and 15x - 6y = 33 → 19x = 57 → x = 3.',
      advanced: 'Given 7x + 3y = 22 and 5x + y = 14. What is the value of 2x + 2y? Do not solve for x and y separately! Subtract Eq 2 from Eq 1 directly: (7x - 5x) + (3y - y) = 22 - 14 → 2x + 2y = 8.'
    },
    satExample: {
      question: 'If 3x + 2y = 18 and 2x + 3y = 12, what is the value of x + y?',
      answer: 'x + y = 6. Add both equations: 5x + 5y = 30 → divide by 5: x + y = 6. Takes 10 seconds!',
      proTip: 'Always check if adding or subtracting the two equations immediately yields the requested combo expression.'
    },
    desmosShortcut: 'Type both equations in Desmos. Click the intersection point to view (x, y) immediately.',
    trapWarning: 'Wasting 3 minutes finding x and y when the problem only asked for a combined expression like x + y.'
  },
  {
    id: 'alg-system-conditions',
    name: 'System Solution Conditions (Infinite / No Solution)',
    domain: 'algebra',
    domainTitle: 'Algebra (Units 2, 6, 10)',
    units: 'Units 2, 6, 10',
    difficulty: 'advanced',
    difficultyBadge: 'Advanced',
    difficultyWeight: 3,
    formula: 'Infinite: m₁ = m₂ & b₁ = b₂ | No Solution: m₁ = m₂ & b₁ ≠ b₂',
    displayFormula: '\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2} \\;(\\infty\\text{ sol}) \\quad \\big| \\quad \\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\ne \\frac{c_1}{c_2} \\;(\\text{No sol})',
    meaning: 'Determining the values of unknown constants (k, p, c) so that two linear equations become parallel or identical.',
    whyDifficultyDiffers: 'This is an exclusive Medium-to-Hard SAT topic. College Board disguises this with constants like ax + 4y = 12 and 3x + 2y = 6. Slopes must match for zero solutions; both slope and y-intercept must match for infinite solutions.',
    tierBreakdown: {
      foundations: 'Identify that parallel lines have the same slope and never intersect.',
      medium: 'If 2x + 5y = 7 and 4x + ky = 14 have infinite solutions, the second equation is exactly 2× the first: k = 10.',
      advanced: 'The system kx - 3y = 4 and 4x - 5y = 7 has no solution. Slopes must be equal: k / 4 = -3 / -5 → k / 4 = 3/5 → k = 12/5.'
    },
    satExample: {
      question: 'For what value of c does the system 2x - 3y = 8 and 6x - cy = 20 have no solution?',
      answer: 'c = 9. Compare ratios: 2/6 = -3/(-c) → 1/3 = 3/c → c = 9. Notice 8/20 ≠ 1/3, confirming no solution.',
      proTip: 'Quick Ratio Trick: a₁/a₂ = b₁/b₂ for parallel lines. Cross-multiply in 5 seconds.'
    },
    desmosShortcut: 'Type both lines into Desmos with a slider for c. Move the slider until the two lines are perfectly parallel or overlapping.',
    trapWarning: 'Forgetting that for "infinite solutions", the constant terms must ALSO match in proportion.'
  },
  {
    id: 'alg-inequalities',
    name: 'Linear Inequalities (Negative Sign Rule)',
    domain: 'algebra',
    domainTitle: 'Algebra (Units 2, 6, 10)',
    units: 'Units 2, 6, 10',
    difficulty: 'foundations',
    difficultyBadge: 'Foundations',
    difficultyWeight: 1,
    formula: 'Flip sign when multiplying or dividing by a negative number.',
    displayFormula: '-ax < b \\implies x > -\\frac{b}{a} \\quad (\\text{FLIP SIGN})',
    meaning: 'The inequality relation reverses its direction whenever both sides are multiplied or divided by a negative quantity.',
    whyDifficultyDiffers: 'In Foundations, single variable -3x ≤ 12. In Medium, compound inequalities 4 < 2 - 3x ≤ 14. In Hard, systems of inequalities where you test which coordinate falls in the shaded region.',
    tierBreakdown: {
      foundations: '-2x > 10 → divide by -2 → x < -5.',
      medium: '-5 ≤ 3 - 2x < 11 → subtract 3 → -8 ≤ -2x < 8 → divide by -2 and flip both signs → 4 ≥ x > -4 → -4 < x ≤ 4.',
      advanced: 'System: y > 2x - 1 and y ≤ -x + 4. Determine if (2, 3) is a solution by checking strict inequality boundary rules.'
    },
    satExample: {
      question: 'Solve for x: -4x + 7 ≤ 27',
      answer: '-4x ≤ 20 → divide by -4 and flip sign → x ≥ -5.',
      proTip: 'In Desmos, typing an inequality shades the entire feasible region automatically!'
    },
    desmosShortcut: 'Type the inequality directly into Desmos (e.g. y > 2x - 1). Dashed line = strict (<, >), solid line = inclusive (≤, ≥).',
    trapWarning: 'Forgetting to flip the sign when dividing by a negative number.'
  },

  // =========================================================================
  // CHAPTER 2: PROBLEM SOLVING & DATA ANALYSIS (Units 3, 7, 11)
  // =========================================================================
  {
    id: 'ps-proportion',
    name: 'Proportions & Unit Rates',
    domain: 'problem-solving',
    domainTitle: 'Problem Solving & Data Analysis (Units 3, 7, 11)',
    units: 'Units 3, 7, 11',
    difficulty: 'foundations',
    difficultyBadge: 'Foundations',
    difficultyWeight: 1,
    formula: 'a / b = c / d → ad = bc',
    displayFormula: '\\frac{a}{b} = \\frac{c}{d} \\implies a \\cdot d = b \\cdot c',
    meaning: 'Equating two ratios to solve for an unknown quantity using cross-multiplication.',
    whyDifficultyDiffers: 'In Foundations, units match (e.g. 3 apples to $5, how many for $20?). In Medium, multi-step unit conversions (e.g. meters/sec to miles/hour). In Hard, proportions with variables in denominators like 4/(x + 2) = 3/(x - 1).',
    tierBreakdown: {
      foundations: '3/8 = x/24 → 8x = 72 → x = 9.',
      medium: 'A car travels 88 feet per second. Convert this speed to miles per hour (1 mile = 5280 ft). 88 ft/sec × (1 mi / 5280 ft) × (3600 sec / 1 hr) = 60 mph.',
      advanced: 'If 3 / (x - 2) = 5 / (2x + 1), cross multiply: 3(2x + 1) = 5(x - 2) → 6x + 3 = 5x - 10 → x = -13.'
    },
    satExample: {
      question: 'A recipe calls for 2.5 cups of flour for every 1.5 cups of sugar. If a baker uses 9 cups of sugar, how many cups of flour are needed?',
      answer: '2.5 / 1.5 = x / 9 → 1.5x = 22.5 → x = 15 cups.',
      proTip: 'Always write the units on top and bottom so they cancel cleanly.'
    },
    desmosShortcut: 'Type the full proportional equation directly into Desmos. It will plot vertical lines at the exact x solutions.',
    trapWarning: 'Inverting one side of the ratio: writing flour/sugar = sugar/flour.'
  },
  {
    id: 'ps-percent-change',
    name: 'Percent Change Formula',
    domain: 'problem-solving',
    domainTitle: 'Problem Solving & Data Analysis (Units 3, 7, 11)',
    units: 'Units 3, 7, 11',
    difficulty: 'medium',
    difficultyBadge: 'Medium',
    difficultyWeight: 2,
    formula: 'Percent Change = (New - Old) / Old × 100%',
    displayFormula: '\\text{Percent Change} = \\frac{\\text{New} - \\text{Old}}{\\text{Old}} \\times 100\\%',
    meaning: 'Calculates the proportional increase or decrease relative to the original baseline starting value.',
    whyDifficultyDiffers: 'In Foundations, Old and New numbers are given. In Medium, consecutive percentage changes (e.g. 20% increase followed by 20% decrease does NOT equal 0%). In Hard, working backwards from the final discounted price to find the original price.',
    tierBreakdown: {
      foundations: 'Price increased from $50 to $65. Change = (65 - 50)/50 = 15/50 = 0.30 = 30% increase.',
      medium: 'An item is marked up 20% then discounted 20%. Multiplier: 1.00 × 1.20 × 0.80 = 0.96 (a 4% net loss, NOT 0%!).',
      advanced: 'After a 35% discount, an item costs $78. What was the original price? Set P × 0.65 = 78 → P = 78 / 0.65 = $120. (Common trap: 78 × 1.35 = $105.30 is DEAD WRONG).'
    },
    satExample: {
      question: 'A store buys a jacket for $80, marks it up by 40%, and then offers a 25% coupon at checkout. What is the final customer price?',
      answer: '$80 × 1.40 × 0.75 = $84.00.',
      proTip: 'Never add/subtract percentages directly! Multiply by the decimal multipliers: (1 + 0.40) and (1 - 0.25).'
    },
    desmosShortcut: 'Type the multiplier chain directly into Desmos: 80 * 1.40 * 0.75 to get 84 in 2 seconds.',
    trapWarning: 'Dividing by the New value instead of the Old (original) value in the denominator.'
  },
  {
    id: 'ps-mean-stats',
    name: 'Mean, Median & Range',
    domain: 'problem-solving',
    domainTitle: 'Problem Solving & Data Analysis (Units 3, 7, 11)',
    units: 'Units 3, 7, 11',
    difficulty: 'foundations',
    difficultyBadge: 'Foundations',
    difficultyWeight: 1,
    formula: 'Mean = Sum / Count | Total Sum = Mean × Count | Range = Max - Min',
    displayFormula: '\\text{Mean} = \\frac{\\sum x}{n} \\iff \\sum x = \\text{Mean} \\times n \\quad | \\quad \\text{Range} = x_{\\max} - x_{\\min}',
    meaning: 'Fundamental measures of central tendency and spread in statistical distributions.',
    whyDifficultyDiffers: 'In Foundations, calculate average of 5 numbers. In Medium, a missing 6th test score required to achieve a target average. In Hard, adding an extreme outlier and determining whether mean or median shifts more.',
    tierBreakdown: {
      foundations: 'Find mean of 10, 20, 30: (10 + 20 + 30)/3 = 20.',
      medium: 'Student has scores 80, 85, 92 on 3 tests. What score on the 4th test yields an average of 90? Target sum = 90 × 4 = 360. Current sum = 257. Score needed = 360 - 257 = 103.',
      advanced: 'A set of 20 salaries has a median of $60,000. If the highest salary is increased by $200,000, what happens to mean and median? The mean increases; the median remains completely unchanged!'
    },
    satExample: {
      question: 'In a group of 5 numbers with mean 12, a new number 30 is added. What is the new mean of the 6 numbers?',
      answer: 'New mean = 15. Original sum = 5 × 12 = 60. New sum = 60 + 30 = 90. New mean = 90 / 6 = 15.',
      proTip: 'The Total Sum trick (Sum = Mean × n) solves 95% of SAT average problems!'
    },
    desmosShortcut: 'Use `mean([10, 20, 30, ...])`, `median([...])`, `stats([...])` in Desmos to calculate instantly.',
    trapWarning: 'Forgetting to order the numbers before finding the median.'
  },
  {
    id: 'ps-probability',
    name: 'Probability & Two-Way Table Conditionals',
    domain: 'problem-solving',
    domainTitle: 'Problem Solving & Data Analysis (Units 3, 7, 11)',
    units: 'Units 3, 7, 11',
    difficulty: 'medium',
    difficultyBadge: 'Medium',
    difficultyWeight: 2,
    formula: 'P(Event) = Favorable / Total | Conditional P(A | B) = Count(A & B) / Count(B)',
    displayFormula: 'P(E) = \\frac{\\text{Favorable Outcomes}}{\\text{Total Outcomes}} \\quad | \\quad P(A \\mid B) = \\frac{\\text{Number in Both } A \\text{ and } B}{\\text{Total in Condition } B}',
    meaning: 'Chance of an event occurring, especially when restricted to a specific subgroup in a two-way frequency table.',
    whyDifficultyDiffers: 'In Foundations, probability out of the grand total. In Medium, conditional probability where the denominator is RESTRICTED to a specific row or column (e.g. "Given that the student is a senior..."). In Hard, interpreting margin of error and confidence in random sampling.',
    tierBreakdown: {
      foundations: 'Bag has 4 red, 6 blue marbles. Probability of red = 4/10 = 2/5.',
      medium: 'Two-way table of 100 students. "If a junior is selected at random, what is the probability they play a sport?" Denominator is ONLY the total juniors (40), NOT all 100 students! P = 25/40 = 5/8.',
      advanced: 'Margin of error questions: Larger sample size always REDUCES margin of error. Results can ONLY be generalized to the population from which the random sample was drawn.'
    },
    satExample: {
      question: 'Of 50 seniors, 30 take AP Math. Of 40 juniors, 20 take AP Math. If a student who takes AP Math is selected at random, what is the probability the student is a junior?',
      answer: '20 / 50 = 2/5 = 0.40. Notice the denominator is the TOTAL AP Math students: 30 + 20 = 50, NOT all 90 students.',
      proTip: 'Underline the words "Given that..." or "If a [group] is chosen". That group is your NEW DENOMINATOR.'
    },
    desmosShortcut: 'Compute simple fraction divisions directly in Desmos and click the fraction toggle icon to get reduced fractions.',
    trapWarning: 'Always using the grand total (bottom-right cell) as the denominator instead of the restricted sub-group.'
  },
  {
    id: 'ps-linear-vs-exp',
    name: 'Linear vs. Exponential Growth',
    domain: 'problem-solving',
    domainTitle: 'Problem Solving & Data Analysis (Units 3, 7, 11)',
    units: 'Units 3, 7, 11',
    difficulty: 'advanced',
    difficultyBadge: 'Advanced',
    difficultyWeight: 3,
    formula: 'Linear: y = a + bx (constant amount) | Exponential: y = a(1 ± r)ˣ (constant percent)',
    displayFormula: '\\text{Linear: } y = a + bx \\quad \\text{vs.} \\quad \\text{Exponential: } y = a(1 \\pm r)^x',
    meaning: 'Differentiating between constant numerical increments (linear) versus constant percentage multipliers (exponential).',
    whyDifficultyDiffers: 'In Foundations, recognize that adding 5 per year is linear and doubling is exponential. In Medium, calculate compound growth after t years. In Hard, fractional exponents where rate applies every k hours or years: y = a(1 + r)^(t/k).',
    tierBreakdown: {
      foundations: 'A plant grows 3 cm each week: Linear (y = 3x + initial). A bacterial colony doubles every week: Exponential (y = a(2)ˣ).',
      medium: 'Population of 5,000 grows by 4% annually. Equation after t years: P(t) = 5000(1.04)ᵗ.',
      advanced: 'A radioactive substance decays by 50% every 14 days. If initial mass is 80 grams, write mass after d days: M(d) = 80(0.50)^(d/14). The exponent is d/14, NOT 14d!'
    },
    satExample: {
      question: 'A bank account starts with $1,200 and earns 3% interest compounded quarterly. Write the equation for balance A after t years.',
      answer: 'A = 1200(1 + 0.03/4)^(4t) = 1200(1.0075)^(4t).',
      proTip: 'Divide the annual rate by compounding frequency n, and multiply the year exponent t by n.'
    },
    desmosShortcut: 'Graph both y = 100 + 20x and y = 100(1.15)ˣ in Desmos to see where the exponential curve overtakes the line.',
    trapWarning: 'Confusing growth factor with growth rate: a 7% increase means multiplier is 1.07, NOT 0.07 or 1.70.'
  },

  // =========================================================================
  // CHAPTER 3: ADVANCED MATH (Units 4, 8, 12)
  // =========================================================================
  {
    id: 'adv-quadratic-formula',
    name: 'Quadratic Formula & Discriminant',
    domain: 'advanced-math',
    domainTitle: 'Advanced Math (Units 4, 8, 12)',
    units: 'Units 4, 8, 12',
    difficulty: 'advanced',
    difficultyBadge: 'Advanced',
    difficultyWeight: 3,
    formula: 'x = [-b ± √(b² - 4ac)] / 2a | Discriminant: Δ = b² - 4ac',
    displayFormula: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} \\quad | \\quad \\Delta = b^2 - 4ac',
    meaning: 'Solves any quadratic equation ax² + bx + c = 0 and determines the number of real solutions via the discriminant.',
    whyDifficultyDiffers: 'In Foundations, basic factoring solves the equation. In Medium, using the quadratic formula with square roots. In Hard, finding the value of constant k for which the quadratic has exactly one solution (set Δ = 0) or no real solutions (set Δ < 0).',
    tierBreakdown: {
      foundations: 'Solve x² - 5x + 6 = 0 by factoring: (x - 2)(x - 3) = 0 → x = 2, 3.',
      medium: 'Solve 2x² - 4x - 3 = 0 using formula: x = [4 ± √(16 - 4(2)(-3))] / 4 = [4 ± √40] / 4 = 1 ± √10 / 2.',
      advanced: 'For what value of k does 3x² - 6x + k = 0 have exactly one real solution? Set b² - 4ac = 0 → (-6)² - 4(3)(k) = 0 → 36 - 12k = 0 → k = 3.'
    },
    satExample: {
      question: 'If 2x² - bx + 8 = 0 has no real solutions, which inequality must be true for b?',
      answer: 'b² - 64 < 0 → -8 < b < 8. Set discriminant < 0: (-b)² - 4(2)(8) < 0 → b² - 64 < 0.',
      proTip: 'One solution means the parabola’s vertex touches the x-axis exactly once (tangent).'
    },
    desmosShortcut: 'Type the equation into Desmos with a slider for k. The x-intercepts are the real roots. If it doesn’t cross the x-axis, Δ < 0.',
    trapWarning: 'Forgetting that -b becomes positive when b is already negative (e.g. -(-6) = +6).'
  },
  {
    id: 'adv-vietas',
    name: "Vieta's Formulas (Sum & Product of Roots)",
    domain: 'advanced-math',
    domainTitle: 'Advanced Math (Units 4, 8, 12)',
    units: 'Units 4, 8, 12',
    difficulty: 'advanced',
    difficultyBadge: 'Advanced',
    difficultyWeight: 3,
    formula: 'Sum of roots = -b / a | Product of roots = c / a',
    displayFormula: 'x_1 + x_2 = -\\frac{b}{a} \\quad | \\quad x_1 \\cdot x_2 = \\frac{c}{a}',
    meaning: 'Direct shortcut to find the sum or product of quadratic roots without solving for x.',
    whyDifficultyDiffers: 'College Board loves asking "What is the sum of the solutions to 3x² - 18x - 5 = 0?". Average students waste 2 minutes using the quadratic formula. Pro students use -b/a to answer in 3 seconds.',
    tierBreakdown: {
      foundations: 'Solve x² - 7x + 12 = 0 → roots 3 and 4 → sum is 7.',
      medium: 'Given 2x² - 10x + 3 = 0, find sum of solutions. Sum = -(-10)/2 = 5.',
      advanced: 'The equation 4x² + kx - 12 = 0 has two roots whose sum is -3. What is the value of k? Set -k / 4 = -3 → k = 12.'
    },
    satExample: {
      question: 'What is the sum of the solutions to 5x² - 35x + 11 = 0?',
      answer: 'Sum = -(-35) / 5 = 7. Exactly 3 seconds calculation!',
      proTip: 'Whenever the SAT asks for the "sum of the solutions", DO NOT solve for the roots. Use -b/a!'
    },
    desmosShortcut: 'Type 5x² - 35x + 11 = 0 into Desmos to see the two root coordinates, but -b/a is much faster by hand.',
    trapWarning: 'Forgetting the negative sign in -b/a (the sum is -b/a, but the product is +c/a).'
  },
  {
    id: 'adv-difference-of-squares',
    name: 'Difference of Squares & Factoring',
    domain: 'advanced-math',
    domainTitle: 'Advanced Math (Units 4, 8, 12)',
    units: 'Units 4, 8, 12',
    difficulty: 'foundations',
    difficultyBadge: 'Foundations',
    difficultyWeight: 1,
    formula: 'a² - b² = (a - b)(a + b)',
    displayFormula: 'a^2 - b^2 = (a - b)(a + b) \\quad | \\quad (a \\pm b)^2 = a^2 \\pm 2ab + b^2',
    meaning: 'Factoring binomial differences of perfect squares and expanding perfect square trinomials.',
    whyDifficultyDiffers: 'In Foundations, basic numbers like x² - 25 = (x - 5)(x + 5). In Medium, fractional or coefficient squares like 4x² - 49y² = (2x - 7y)(2x + 7y). In Hard, higher-order exponents like x⁴ - 81 = (x² - 9)(x² + 9) = (x - 3)(x + 3)(x² + 9).',
    tierBreakdown: {
      foundations: 'x² - 16 = (x - 4)(x + 4).',
      medium: '9x² - 64 = (3x - 8)(3x + 8).',
      advanced: 'Simplify (2x - 3)² - (x + 1)²: Treat as a² - b² where a = (2x - 3) and b = (x + 1) → [(2x-3)-(x+1)][(2x-3)+(x+1)] = (x - 4)(3x - 2).'
    },
    satExample: {
      question: 'If x > 0 and 16x⁴ - 81 = 0, what is the value of x?',
      answer: '(4x² - 9)(4x² + 9) = 0 → 4x² = 9 → x² = 9/4 → x = 3/2.',
      proTip: 'Difference of squares can be applied recursively to 4th power equations!'
    },
    desmosShortcut: 'Graph 16x⁴ - 81 = 0 in Desmos and click the positive x-intercept to see 1.5 (3/2).',
    trapWarning: 'There is NO such thing as "Sum of Squares" in real numbers: a² + b² DOES NOT factor into (a + b)(a + b)!'
  },
  {
    id: 'adv-exponent-rules',
    name: 'Exponent & Radical Rules',
    domain: 'advanced-math',
    domainTitle: 'Advanced Math (Units 4, 8, 12)',
    units: 'Units 4, 8, 12',
    difficulty: 'medium',
    difficultyBadge: 'Medium',
    difficultyWeight: 2,
    formula: 'aᵐ · aⁿ = aᵐ⁺ⁿ | (aᵐ)ⁿ = aᵐⁿ | a⁻ⁿ = 1/aⁿ | a^(m/n) = ⁿ√(aᵐ)',
    displayFormula: 'a^m \\cdot a^n = a^{m+n}, \\quad (a^m)^n = a^{mn}, \\quad a^{-n} = \\frac{1}{a^n}, \\quad a^{\\frac{m}{n}} = \\sqrt[n]{a^m}',
    meaning: 'Laws governing the multiplication, division, and fractional powers of algebraic bases.',
    whyDifficultyDiffers: 'In Foundations, integer powers like 2³ · 2⁴ = 2⁷. In Medium, rational fractional exponents like 16^(3/4) = (⁴√16)³ = 2³ = 8. In Hard, equating bases in exponential equations like 8^(2x) = 16^(x + 3) by converting both to base 2.',
    tierBreakdown: {
      foundations: 'x⁵ · x³ = x⁸ and (x⁴)² = x⁸.',
      medium: 'Evaluate 27^(2/3) = (³√27)² = 3² = 9.',
      advanced: 'Solve for x: (1/3)^(2x - 1) = 27^(x + 4). Express both in base 3: 3^(-(2x - 1)) = 3^(3(x + 4)) → -2x + 1 = 3x + 12 → -5x = 11 → x = -11/5.'
    },
    satExample: {
      question: 'If 2^(3x - 1) = 16^(x - 2), what is the value of x?',
      answer: 'Rewrite 16 as 2⁴: 2^(3x - 1) = 2^(4(x - 2)) → 3x - 1 = 4x - 8 → x = 7.',
      proTip: 'When bases are different (like 2, 4, 8, 16, 27, 81), always convert them to their smallest common base (2 or 3).'
    },
    desmosShortcut: 'Type the equation 2^(3x - 1) = 16^(x - 2) into Desmos and find where the vertical line plots at x = 7.',
    trapWarning: 'Distributing exponents over addition: (a + b)² IS NOT a² + b²!'
  },
  {
    id: 'adv-vertex-parabola',
    name: 'Vertex Form & Vertex Coordinates',
    domain: 'advanced-math',
    domainTitle: 'Advanced Math (Units 4, 8, 12)',
    units: 'Units 4, 8, 12',
    difficulty: 'medium',
    difficultyBadge: 'Medium',
    difficultyWeight: 2,
    formula: 'Vertex Form: y = a(x - h)² + k (vertex (h, k)) | Standard Form: x_v = -b / (2a)',
    displayFormula: 'y = a(x - h)^2 + k \\quad (\\text{Vertex: } (h, k)) \\quad | \\quad x_{\\text{vertex}} = -\\frac{b}{2a}',
    meaning: 'Identifies the maximum (if a < 0) or minimum (if a > 0) turning point of a parabolic quadratic function.',
    whyDifficultyDiffers: 'In Foundations, read vertex directly from y = 3(x - 2)² + 5. In Medium, finding maximum height of a projectile given -16t² + 64t + 10. In Hard, converting standard form into vertex form by completing the square, or recognizing that the vertex x-coordinate is the exact midpoint between the two x-intercepts.',
    tierBreakdown: {
      foundations: 'y = -2(x - 4)² + 9 has vertex at (4, 9) and maximum value 9.',
      medium: 'Find the minimum value of y = x² - 6x + 14. Find x_v = -(-6)/(2·1) = 3. Plug x = 3 into equation: y = 3² - 6(3) + 14 = 9 - 18 + 14 = 5. Minimum is 5.',
      advanced: 'A parabola passes through (2, 0) and (10, 0). Where is the vertex x-coordinate? By symmetry, it is at the exact midpoint: (2 + 10)/2 = 6.'
    },
    satExample: {
      question: 'What is the maximum value of the function f(x) = -2x² + 12x - 11?',
      answer: 'x_v = -12 / (2 × -2) = 3. Maximum value = f(3) = -2(9) + 12(3) - 11 = -18 + 36 - 11 = 7.',
      proTip: 'Notice the question asks for the "maximum value" — that means the y-coordinate (7), not the x-coordinate (3)!'
    },
    desmosShortcut: 'Graph f(x) in Desmos and click the top peak dot. The coordinate (3, 7) appears instantly.',
    trapWarning: 'Sign trap inside vertex form: in y = a(x + 5)² - 2, the vertex is (-5, -2), NOT (+5, -2)!'
  },

  // =========================================================================
  // CHAPTER 4: GEOMETRY & TRIGONOMETRY (Units 5, 9, 13)
  // =========================================================================
  {
    id: 'geo-circle-area-circ',
    name: 'Circle Area & Circumference',
    domain: 'geometry-trig',
    domainTitle: 'Geometry & Trigonometry (Units 5, 9, 13)',
    units: 'Units 5, 9, 13',
    difficulty: 'foundations',
    difficultyBadge: 'Foundations',
    difficultyWeight: 1,
    formula: 'Area = πr² | Circumference = 2πr = πd',
    displayFormula: 'A = \\pi r^2 \\quad | \\quad C = 2\\pi r = \\pi d',
    meaning: 'Core 2D circle dimensions: boundary perimeter length and internal surface area.',
    whyDifficultyDiffers: 'In Foundations, given radius 4, find area 16π. In Medium, given circumference 10π, find area: r = 5 → A = 25π. In Hard, inscribed circles in squares or equilateral triangles where the radius must be derived through geometric properties.',
    tierBreakdown: {
      foundations: 'Radius is 6. Circumference = 2π(6) = 12π. Area = π(6²) = 36π.',
      medium: 'A circular track has area 64π. What is its circumference? πr² = 64π → r = 8 → C = 2π(8) = 16π.',
      advanced: 'A circle is inscribed in a square of area 144. Find area of circle. Square side = 12 → Circle diameter = 12 → radius r = 6 → Area = 36π.'
    },
    satExample: {
      question: 'If the area of a circle is quadrupled (multiplied by 4), by what factor does its circumference increase?',
      answer: 'Factor of 2. Area scales by r²; circumference scales linearly by r. Since r² × 4 → r × 2.',
      proTip: 'Linear measures (radius, perimeter) scale by k; Areas scale by k²; Volumes scale by k³!'
    },
    desmosShortcut: 'Keep π in your expression or use the Desmos π key for exact calculation.',
    trapWarning: 'Using diameter instead of radius in the area formula: Area is πr², NOT πd².'
  },
  {
    id: 'geo-triangle-area',
    name: 'Triangle Area & Angle Sum',
    domain: 'geometry-trig',
    domainTitle: 'Geometry & Trigonometry (Units 5, 9, 13)',
    units: 'Units 5, 9, 13',
    difficulty: 'foundations',
    difficultyBadge: 'Foundations',
    difficultyWeight: 1,
    formula: 'Area = ½ × base × height | Angle Sum = 180°',
    displayFormula: 'A = \\frac{1}{2} b h \\quad | \\quad \\angle A + \\angle B + \\angle C = 180^\\circ',
    meaning: '2D triangular area calculation and the interior angle sum theorem.',
    whyDifficultyDiffers: 'In Foundations, base and height are directly given. In Medium, using Pythagorean theorem to find the height first before computing area. In Hard, exterior angle theorem (exterior angle = sum of two non-adjacent interior angles).',
    tierBreakdown: {
      foundations: 'Base = 10, height = 6. Area = 1/2(10)(6) = 30.',
      medium: 'An isosceles triangle has sides 10, 10, and base 12. Dropping an altitude splits the base into 6 and 6. Use Pythagorean theorem: h² + 6² = 10² → h = 8. Area = 1/2(12)(8) = 48.',
      advanced: 'Exterior Angle Theorem: In triangle ABC, if the exterior angle at C is 130°, and angle A is 45°, angle B is directly 130° - 45° = 85°.'
    },
    satExample: {
      question: 'An equilateral triangle has perimeter 18. What is its area?',
      answer: 'Side = 6. Height in a 30-60-90 triangle is 3√3. Area = 1/2 × 6 × 3√3 = 9√3.',
      proTip: 'Area of any equilateral triangle of side s is: A = (s²√3) / 4.'
    },
    desmosShortcut: 'Type the calculations directly into Desmos to verify exact arithmetic instantly.',
    trapWarning: 'Using a slanted side as the height: height MUST be perpendicular to the base!'
  },
  {
    id: 'geo-3d-volumes',
    name: '3D Volumes (Cylinder, Cone & Sphere)',
    domain: 'geometry-trig',
    domainTitle: 'Geometry & Trigonometry (Units 5, 9, 13)',
    units: 'Units 5, 9, 13',
    difficulty: 'medium',
    difficultyBadge: 'Medium',
    difficultyWeight: 2,
    formula: 'Cylinder: πr²h | Cone: ⅓πr²h | Sphere: 4/3πr³',
    displayFormula: 'V_{\\text{cyl}} = \\pi r^2 h \\quad | \\quad V_{\\text{cone}} = \\frac{1}{3}\\pi r^2 h \\quad | \\quad V_{\\text{sphere}} = \\frac{4}{3}\\pi r^3',
    meaning: 'Volume capacity formulas for standard 3D circular solids (these are also on the Bluebook Reference sheet!).',
    whyDifficultyDiffers: 'In Foundations, plug in radius and height. In Medium, solving for height when volume is given. In Hard, volume ratio scaling problems: if the radius of a cylinder is doubled and height halved, how does volume change?',
    tierBreakdown: {
      foundations: 'Cylinder with r = 3, h = 10: V = π(3²)(10) = 90π.',
      medium: 'A cone has volume 48π and radius 6. Find height: 1/3π(6²)h = 48π → 12h = 48 → h = 4.',
      advanced: 'Cylinder A has radius r and height h. Cylinder B has radius 2r and height h/2. Volume B = π(2r)²(h/2) = π(4r²)(h/2) = 2πr²h. Volume B is exactly 2× Volume A!'
    },
    satExample: {
      question: 'A sphere has a radius of 3. What is its volume in terms of π?',
      answer: 'V = 4/3 π (3³) = 4/3 π (27) = 36π.',
      proTip: 'A cone is exactly ONE-THIRD the volume of a cylinder with the same radius and height!'
    },
    desmosShortcut: 'Type (4/3)*pi*3^3 in Desmos to get 113.097 or divide by pi to get the coefficient 36.',
    trapWarning: 'Misremembering the sphere formula exponent as r² instead of r³ (volume is cubic!).'
  },
  {
    id: 'geo-pythagoras',
    name: 'Pythagorean Theorem & Special Triples',
    domain: 'geometry-trig',
    domainTitle: 'Geometry & Trigonometry (Units 5, 9, 13)',
    units: 'Units 5, 9, 13',
    difficulty: 'foundations',
    difficultyBadge: 'Foundations',
    difficultyWeight: 1,
    formula: 'a² + b² = c² | Common Triples: 3-4-5, 5-12-13, 7-24-25, 8-15-17',
    displayFormula: 'a^2 + b^2 = c^2 \\quad (c = \\text{hypotenuse}) \\quad | \\quad \\text{Triples: 3-4-5, 5-12-13, 8-15-17}',
    meaning: 'Relationship between the legs and hypotenuse of any right-angled triangle.',
    whyDifficultyDiffers: 'In Foundations, given legs 6 and 8, find hypotenuse 10. In Medium, distance between two coordinate points in the xy-plane. In Hard, 3D diagonal of a rectangular prism: d = √(l² + w² + h²).',
    tierBreakdown: {
      foundations: 'Legs are 5 and 12. Hypotenuse = √(25 + 144) = √169 = 13.',
      medium: 'Find distance between (1, 2) and (7, 10). Δx = 6, Δy = 8. Distance = √(6² + 8²) = 10.',
      advanced: 'Find longest diagonal in a box of dimensions 3 × 4 × 12. d = √(3² + 4² + 12²) = √(9 + 16 + 144) = √169 = 13.'
    },
    satExample: {
      question: 'A 25-foot ladder rests against a vertical wall. The base of the ladder is 7 feet from the wall. How high up the wall does it reach?',
      answer: 'h² + 7² = 25² → h = √(625 - 49) = √576 = 24 feet (7-24-25 triple!).',
      proTip: 'Memorize the top 4 SAT triples: (3, 4, 5), (5, 12, 13), (7, 24, 25), (8, 15, 17) and their multiples!'
    },
    desmosShortcut: 'Use `distance((1, 2), (7, 10))` in Desmos to calculate Euclidean distance in 1 second.',
    trapWarning: 'Setting c as a leg instead of the longest side (opposite the 90° angle).'
  },
  {
    id: 'geo-trig-soh-cah-toa',
    name: 'SOH-CAH-TOA & Co-function Identity',
    domain: 'geometry-trig',
    domainTitle: 'Geometry & Trigonometry (Units 5, 9, 13)',
    units: 'Units 5, 9, 13',
    difficulty: 'medium',
    difficultyBadge: 'Medium',
    difficultyWeight: 2,
    formula: 'sin = opp/hyp | cos = adj/hyp | tan = opp/adj | Co-function: sin(x°) = cos(90° - x°)',
    displayFormula: '\\sin\\theta = \\frac{\\text{opp}}{\\text{hyp}}, \\; \\cos\\theta = \\frac{\\text{adj}}{\\text{hyp}}, \\; \\tan\\theta = \\frac{\\text{opp}}{\\text{adj}} \\quad | \\quad \\sin(x^\\circ) = \\cos(90^\\circ - x^\\circ)',
    meaning: 'Trigonometric ratios in right triangles and complementary angle equivalence.',
    whyDifficultyDiffers: 'In Foundations, identify sin(A) = 3/5 directly from triangle. In Medium, the classic SAT Co-Function Identity: if sin(2x + 10) = cos(3x), the two angles MUST add up to 90°! In Hard, trig values in non-right triangles using altitude drops.',
    tierBreakdown: {
      foundations: 'Right triangle with legs 3, 4, hyp 5. Angle opposite 3 has sin = 3/5, cos = 4/5, tan = 3/4.',
      medium: 'If sin(x°) = cos(y°), then x + y = 90°. For example, sin(20°) = cos(70°).',
      advanced: 'In a right triangle, sin(4x - 5)° = cos(2x + 11)°. What is x? Set (4x - 5) + (2x + 11) = 90 → 6x + 6 = 90 → 6x = 84 → x = 14.'
    },
    satExample: {
      question: 'In right triangle ABC with right angle at C, sin(A) = 5/13. What is the value of cos(B)?',
      answer: 'cos(B) = 5/13. Because A and B are complementary acute angles, sin(A) is ALWAYS equal to cos(B)!',
      proTip: 'In any right triangle with acute angles A and B: sin(A) = cos(B) and cos(A) = sin(B). Zero calculation needed!'
    },
    desmosShortcut: 'Make sure Desmos is set to DEGREE mode (click the wrench icon) when checking trigonometric angle values.',
    trapWarning: 'Leaving Desmos in Radians mode when calculating angles given in degrees.'
  },
  {
    id: 'geo-circle-equation',
    name: 'Circle Equation & Completing the Square',
    domain: 'geometry-trig',
    domainTitle: 'Geometry & Trigonometry (Units 5, 9, 13)',
    units: 'Units 5, 9, 13',
    difficulty: 'advanced',
    difficultyBadge: 'Advanced',
    difficultyWeight: 3,
    formula: '(x - h)² + (y - k)² = r² | Center: (h, k) | Radius: r = √(r²)',
    displayFormula: '(x - h)^2 + (y - k)^2 = r^2 \\quad \\big(\\text{Center: } (h, k), \\; \\text{Radius: } r = \\sqrt{r^2}\\big)',
    meaning: 'Standard analytical geometric equation of a circle on the coordinate plane.',
    whyDifficultyDiffers: 'In Foundations, reading center (2, -3) and radius 5 from (x - 2)² + (y + 3)² = 25. In Medium, writing equation from center and one boundary point. In Hard, converting expanded format x² + y² - 6x + 8y - 11 = 0 by completing the square on both x and y.',
    tierBreakdown: {
      foundations: 'Given (x - 3)² + (y + 4)² = 49. Center is (3, -4), radius is √49 = 7.',
      medium: 'Center is (-1, 2) and passes through (2, 6). r² = (2 - (-1))² + (6 - 2)² = 3² + 4² = 25. Equation: (x + 1)² + (y - 2)² = 25.',
      advanced: 'Given x² + y² - 8x + 10y - 7 = 0. Complete squares: (x² - 8x + 16) + (y² + 10y + 25) = 7 + 16 + 25 → (x - 4)² + (y + 5)² = 48. Radius = √48 = 4√3.'
    },
    satExample: {
      question: 'The circle x² + y² + 4x - 6y = 12 has center (h, k) and radius r. What is h + k + r?',
      answer: '(x + 2)² + (y - 3)² = 12 + 4 + 9 = 25. Center (-2, 3), radius 5. Sum = -2 + 3 + 5 = 6.',
      proTip: 'Shortcut for center from x² + y² + Dx + Ey + F = 0: Center is always (-D/2, -E/2)!'
    },
    desmosShortcut: 'Type the expanded equation x² + y² + 4x - 6y = 12 directly into Desmos! It graphs the circle instantly; click the left and right extremities to read diameter and radius.',
    trapWarning: 'Forgetting to take the square root of the right-hand side: if right side is 36, radius is 6, NOT 36!'
  },
  {
    id: 'geo-pythagorean-identity',
    name: 'Pythagorean Identity',
    domain: 'geometry-trig',
    domainTitle: 'Geometry & Trigonometry (Units 5, 9, 13)',
    units: 'Units 5, 9, 13',
    difficulty: 'advanced',
    difficultyBadge: 'Advanced',
    difficultyWeight: 3,
    formula: 'sin²θ + cos²θ = 1',
    displayFormula: '\\sin^2\\theta + \\cos^2\\theta = 1 \\iff \\sin^2\\theta = 1 - \\cos^2\\theta',
    meaning: 'The fundamental trigonometric identity derived from the Pythagorean theorem on the unit circle.',
    whyDifficultyDiffers: 'In Foundations, not tested. In Medium, find cosθ given sinθ in acute angle: cosθ = √(1 - sin²θ). In Hard, simplifying complex algebraic expressions like (1 - sin²θ) / (cosθ) = cosθ, or finding unknown values in trigonometric systems.',
    tierBreakdown: {
      foundations: 'Verify for 30°: sin(30°) = 0.5, cos(30°) = √3/2. (0.5)² + (√3/2)² = 0.25 + 0.75 = 1.',
      medium: 'If θ is an acute angle and sinθ = 3/5, find cosθ. cosθ = √(1 - (3/5)²) = √(16/25) = 4/5.',
      advanced: 'Simplify the expression: (1 - sin²x) / (1 - cos²x). By identity: cos²x / sin²x = cot²x = 1 / tan²x.'
    },
    satExample: {
      question: 'If sin(θ) = 0.6 for an acute angle θ, what is the value of cos²(θ)?',
      answer: 'cos²(θ) = 1 - sin²(θ) = 1 - (0.6)² = 1 - 0.36 = 0.64.',
      proTip: 'Whenever you see 1 - sin²θ or 1 - cos²θ on the SAT, immediately substitute cos²θ or sin²θ.'
    },
    desmosShortcut: 'You can test any angle (like θ = 25°) in Desmos to numerically verify expressions.',
    trapWarning: 'Writing sinθ + cosθ = 1 (the squares are mandatory: sin²θ + cos²θ = 1).'
  },
  {
    id: 'geo-arc-sector',
    name: 'Arc Length & Sector Area (Degrees & Radians)',
    domain: 'geometry-trig',
    domainTitle: 'Geometry & Trigonometry (Units 5, 9, 13)',
    units: 'Units 5, 9, 13',
    difficulty: 'medium',
    difficultyBadge: 'Medium',
    difficultyWeight: 2,
    formula: 'Arc Length: (θ/360) × 2πr | Sector Area: (θ/360) × πr² | In Radians: s = rθ, A = ½r²θ',
    displayFormula: '\\text{Arc} = \\frac{\\theta}{360^\\circ}(2\\pi r) \\quad | \\quad \\text{Sector} = \\frac{\\theta}{360^\\circ}(\\pi r^2) \\quad \\big(\\text{Radians: } s = r\\theta, \\; A = \\frac{1}{2}r^2\\theta\\big)',
    meaning: 'Calculates the fraction of a circle’s perimeter (arc) or fraction of its total area (sector) subtended by central angle θ.',
    whyDifficultyDiffers: 'In Foundations, basic fraction e.g. 90° is 1/4 of the circle. In Medium, angle given in radians like π/3 or 5π/6. In Hard, finding the radius when arc length and central angle in radians are given, or subtracting triangle area to find circular segment area.',
    tierBreakdown: {
      foundations: 'Radius 12, central angle 60°. Fraction = 60/360 = 1/6. Arc length = 1/6(2π · 12) = 4π.',
      medium: 'A sector has central angle π/4 radians and radius 8. Sector area = 1/2(r²)(θ) = 1/2(64)(π/4) = 8π.',
      advanced: 'An arc of length 15π is subtended by a central angle of 100°. What is the circle’s radius? (100/360) × 2πr = 15π → (5/18) × 2r = 15 → (5/9)r = 15 → r = 27.'
    },
    satExample: {
      question: 'A circle has radius 6. An arc of length 4π subtends a central angle of x radians. What is x?',
      answer: 's = rθ → 4π = 6x → x = 4π / 6 = 2π / 3 radians.',
      proTip: 'Converting: Degrees to Radians = multiply by π/180. Radians to Degrees = multiply by 180/π.'
    },
    desmosShortcut: 'In Desmos, typing (60/360)*2*pi*12 gives the exact arc length immediately.',
    trapWarning: 'Using circumference formula 2πr for sector AREA, or using area formula πr² for ARC length.'
  },
  {
    id: 'geo-radians-conversion',
    name: 'Radian & Degree Conversion',
    domain: 'geometry-trig',
    domainTitle: 'Geometry & Trigonometry (Units 5, 9, 13)',
    units: 'Units 5, 9, 13',
    difficulty: 'foundations',
    difficultyBadge: 'Foundations',
    difficultyWeight: 1,
    formula: 'π radians = 180° | Radians = Degrees × (π/180) | Degrees = Radians × (180/π)',
    displayFormula: '\\pi \\text{ rad} = 180^\\circ \\iff 1 \\text{ rad} = \\frac{180^\\circ}{\\pi}, \\quad 1^\\circ = \\frac{\\pi}{180} \\text{ rad}',
    meaning: 'Converting angular measurements between circular radians and standard 360° degrees.',
    whyDifficultyDiffers: 'In Foundations, convert 90° or 180° to radians. In Medium, non-standard angles like 225° = 5π/4. In Hard, trigonometric equations involving both radian central angles and right triangle side ratios.',
    tierBreakdown: {
      foundations: 'Convert 60° to radians: 60 × (π/180) = π/3.',
      medium: 'Convert 7π/6 radians to degrees: (7 × 180) / 6 = 210°.',
      advanced: 'A point rotates 5.5π radians on a unit circle. What are its coordinates? 5.5π = 4π + 1.5π (three-quarter turn) → (0, -1).'
    },
    satExample: {
      question: 'What is the radian measure of an angle that measures 315°?',
      answer: '315 × (π / 180) = 7π / 4 radians.',
      proTip: 'Whenever you see π in an angle, simply substitute 180 for π to get degrees instantly!'
    },
    desmosShortcut: 'Type 315*(pi/180) in Desmos, then divide by pi to see the fraction 7/4 = 7π/4.',
    trapWarning: 'Flipping the conversion factor: multiplying degrees by 180/π instead of π/180.'
  }
];
