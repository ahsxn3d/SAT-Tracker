// ==============================================================================
// THE ANTI-BURNOUT SAT RULEBOOK - CORE CURRICULUM KNOWLEDGE BASE
// ==============================================================================
// Synchronized, authoritative reference for all core math chapters and lessons.
// Used by the Core Info section, Calendar struggle logger, and Error Log.
// Exact verbatim content from the user's plan.
// ==============================================================================

export interface CoreCurriculumLesson {
  id: string;
  chapterId: string;
  chapterTitle: string;
  lessonTitle: string;
  satDomain: 'Math' | 'Reading/Writing';
  definition?: string;
  formulas: {
    label: string;
    formula: string;
    explanation?: string;
  }[];
  methods?: {
    title: string;
    steps: string[];
    reverseSteps?: string[];
  }[];
  goldenRules?: string[];
  trapsAndWarnings?: string[];
  exampleLogic?: string;
  unitCircleTable?: {
    theta: string;
    deg: string;
    cos: string;
    sin: string;
    tan: string;
  }[];
  conceptsForLogging: string[]; // Specific items for the struggle/error-log dropdown
}

export interface CoreCurriculumChapter {
  id: string;
  title: string;
  badge: string;
  description: string;
  lessons: CoreCurriculumLesson[];
}

export const CORE_CURRICULUM_CHAPTERS: CoreCurriculumChapter[] = [
  // ===========================================================================
  // CHAPTER 1: ALGEBRA
  // ===========================================================================
  {
    id: 'algebra',
    title: 'Algebra',
    badge: 'Linear Relationships & Systems',
    description: 'Foundations of linear equations, rate of change, slope-intercept mechanics, and multi-equation system solving.',
    lessons: [
      {
        id: 'alg-linear-systems',
        chapterId: 'algebra',
        chapterTitle: 'Algebra',
        lessonTitle: 'Linear Relationships & Systems',
        satDomain: 'Math',
        definition: 'A linear relationship connects two variables (x, y) where plotting them makes a straight line.',
        formulas: [
          {
            label: 'Slope formula (memorize this)',
            formula: 'slope (m) = change in y / change in x = (y₂ - y₁) / (x₂ - x₁)',
            explanation: 'A line is fully defined by EITHER: (a) slope + one point, OR (b) two points.'
          },
          {
            label: 'Slope-intercept form',
            formula: 'y = mx + b',
            explanation: 'm = slope; b = y-intercept (where the line crosses the y-axis).'
          }
        ],
        methods: [
          {
            title: 'Solving systems of two linear equations — 3 methods',
            steps: [
              '1. Select variables to represent unknown quantities',
              '2. Using the given info, write a system of two linear equations',
              '3. Solve using either substitution (solve one equation for a variable, plug into the other) or elimination (add/subtract equations to cancel a variable)'
            ]
          }
        ],
        goldenRules: [
          'A line is fully defined by EITHER: (a) slope + one point, OR (b) two points.',
          'Word problem translation tip: SAT word problems scatter information across several sentences. Read for: a starting/fixed value (becomes the constant), and a rate of change (becomes the coefficient on the variable).'
        ],
        trapsAndWarnings: [
          'Watch out for negative slopes: if a quantity is decreasing, the coefficient must be negative (-m).',
          'In elimination, make sure variable coefficients cancel before adding equations to avoid sign errors.'
        ],
        conceptsForLogging: [
          'Slope formula: m = (y₂-y₁)/(x₂-x₁)',
          'Slope-intercept form: y = mx + b',
          'Point-slope form: y - y₁ = m(x - x₁)',
          'Solving systems: substitution or elimination',
          'Inequalities: flip sign when multiplying/dividing by negative',
          'Word problem translation: fixed value vs rate of change'
        ]
      }
    ]
  },

  // ===========================================================================
  // CHAPTER 2: PROBLEM SOLVING & DATA ANALYSIS
  // ===========================================================================
  {
    id: 'data-analysis',
    title: 'Problem Solving & Data Analysis',
    badge: 'Unit Conversion & Dimensional Analysis',
    description: 'Master unit conversions, rates, percentages, and multi-step ratio cancellations without conversion errors.',
    lessons: [
      {
        id: 'psda-unit-conversion',
        chapterId: 'data-analysis',
        chapterTitle: 'Problem Solving & Data Analysis',
        lessonTitle: 'Unit Conversion',
        satDomain: 'Math',
        definition: 'Method (dimensional analysis): Set up conversion factors as fractions so the unwanted unit cancels out, leaving only the unit you want.',
        formulas: [
          {
            label: 'Example logic (dimensional analysis)',
            formula: 'x cubic centimeters × (1 milliliter / 1 cubic centimeter) × (1 fluid ounce / 29.57 milliliters)',
            explanation: 'Multiply by fractions arranged so "cubic centimeters" cancels and "fluid ounces" remains.'
          }
        ],
        methods: [
          {
            title: 'Dimensional Analysis Method',
            steps: [
              '1. Identify your starting unit and target unit.',
              '2. Set up conversion factors as fractions so unwanted units cancel out.',
              '3. Always place the unit you are removing on the bottom of the next fraction so it cancels diagonally.',
              '4. Multiply across numerators and denominators to get the final converted value.'
            ]
          }
        ],
        goldenRules: [
          'Rule: always place the unit you\'re removing on the bottom of the next fraction so it cancels diagonally.',
          'Double check whether the question asks for rate per minute, per hour, or per day.'
        ],
        exampleLogic: 'x cubic centimeters × (1 milliliter / 1 cubic centimeter) × (1 fluid ounce / 29.57 milliliters)\nNotice: cubic centimeters cancels with cubic centimeters, milliliters cancels with milliliters, leaving fluid ounces.',
        trapsAndWarnings: [
          'Square and cubic units: converting square feet to square yards requires squaring the conversion factor (1 yd / 3 ft)² = 1 yd² / 9 ft².',
          'Placing the target unit on the bottom instead of the top.'
        ],
        conceptsForLogging: [
          'Proportion: a/b = c/d → cross multiply: ad = bc',
          'Percent change: (new − old) / old × 100',
          'Mean = sum of values / number of values',
          'Range = max − min',
          'Probability = favorable outcomes / total outcomes',
          'Linear growth: y = a + bx',
          'Exponential growth/decay: y = a(1 + r)ˣ (growth) or y = a(1 − r)ˣ (decay)',
          'Dimensional analysis: diagonal unit cancellation'
        ]
      }
    ]
  },

  // ===========================================================================
  // CHAPTER 3: ADVANCED MATH
  // ===========================================================================
  {
    id: 'advanced-math',
    title: 'Advanced Math',
    badge: 'Isolating, Factoring, Rationals & Exponentials',
    description: 'High-density algebra: quantity isolation, factoring identities, rational expressions, extraneous radical traps, and exponential graphs.',
    lessons: [
      {
        id: 'adv-isolating-quantities',
        chapterId: 'advanced-math',
        chapterTitle: 'Advanced Math',
        lessonTitle: 'Isolating Quantities',
        satDomain: 'Math',
        definition: '3-step method (works for any formula rearrangement):',
        formulas: [
          {
            label: 'Example Rearrangement',
            formula: 'V = πr²h requires dividing both sides by πh first, then taking the square root of both sides to isolate r.',
            explanation: 'Golden rule: whatever you do to one side, you must do to the other side, exactly.'
          }
        ],
        methods: [
          {
            title: '3-step method (works for any formula rearrangement)',
            steps: [
              '1. Write down the original equation',
              '2. Perform the same operation on both sides to begin isolating the desired quantity',
              '3. Repeat step 2 until the desired quantity is alone'
            ]
          }
        ],
        goldenRules: [
          'Golden rule: whatever you do to one side, you must do to the other side, exactly.',
          'Example: isolating r from V = πr²h requires dividing both sides by πh first, then taking the square root of both sides.'
        ],
        conceptsForLogging: [
          'Quadratic formula: x = [−b ± √(b² − 4ac)] / 2a',
          'Difference of squares: a² − b² = (a−b)(a+b)',
          'Exponent rules: aᵐ·aⁿ = aᵐ⁺ⁿ, (aᵐ)ⁿ = aᵐⁿ, a⁻ⁿ = 1/aⁿ, a^(1/n) = ⁿ√a',
          'Vertex form: y = a(x−h)² + k, vertex is (h, k)',
          'Vertex x-coordinate (from standard form): x = −b/2a',
          'Isolating quantity under square root or denominator'
        ]
      },
      {
        id: 'adv-factoring-identities',
        chapterId: 'advanced-math',
        chapterTitle: 'Advanced Math',
        lessonTitle: 'Factoring (Things to Remember, verbatim from the lesson)',
        satDomain: 'Math',
        definition: 'These three patterns are the fastest way to factor without long division, recognize the pattern first before trying to factor manually.',
        formulas: [
          {
            label: 'Square of sum',
            formula: 'a² + 2ab + b² = (a + b)²',
            explanation: 'Recognize the middle term is 2ab.'
          },
          {
            label: 'Square of difference',
            formula: 'a² − 2ab + b² = (a − b)²',
            explanation: 'Recognize the middle term is -2ab.'
          },
          {
            label: 'Difference of squares',
            formula: 'a² − b² = (a + b)(a − b)',
            explanation: 'No middle term.'
          },
          {
            label: 'Quadratic formula (not shown in this video but essential, standard reference)',
            formula: 'x = [−b ± √(b² − 4ac)] / 2a',
            explanation: 'Standard quadratic solution formula.'
          }
        ],
        goldenRules: [
          'These three patterns are the fastest way to factor without long division, recognize the pattern first before trying to factor manually.',
          'Always check for a common factor to pull out before trying to factor.'
        ],
        trapsAndWarnings: [
          '(a + b)² is never equal to a² + b² — the middle term 2ab is mandatory.'
        ],
        conceptsForLogging: [
          'Square of sum: a² + 2ab + b² = (a + b)²',
          'Square of difference: a² − 2ab + b² = (a − b)²',
          'Difference of squares: a² − b² = (a + b)(a − b)',
          'Quadratic formula: x = [−b ± √(b² − 4ac)] / 2a'
        ]
      },
      {
        id: 'adv-rational-expressions',
        chapterId: 'advanced-math',
        chapterTitle: 'Advanced Math',
        lessonTitle: 'Operations with Rational Expressions',
        satDomain: 'Math',
        definition: 'Treat rational expressions (fractions with variables) exactly like numeric fractions:',
        formulas: [
          {
            label: 'Multiplication & Division',
            formula: 'Multiply: multiply numerators together, denominators together | Divide: flip the second fraction (multiply by reciprocal)',
            explanation: 'Always factor first before cancelling, you can only cancel factors, never individual terms.'
          },
          {
            label: 'Addition & Subtraction',
            formula: 'Add/subtract: need a common denominator first, then combine numerators',
            explanation: 'Never cancel individual terms across a plus or minus sign.'
          }
        ],
        methods: [
          {
            title: 'Rules for Rational Expressions',
            steps: [
              'Multiply: multiply numerators together, denominators together, then simplify/cancel common factors',
              'Divide: flip the second fraction (multiply by reciprocal), then multiply',
              'Add/subtract: need a common denominator first, then combine numerators',
              'Always factor first before cancelling, you can only cancel factors, never individual terms'
            ]
          }
        ],
        goldenRules: [
          'Always factor first before cancelling, you can only cancel factors, never individual terms.'
        ],
        conceptsForLogging: [
          'Multiplying rational fractions and cancelling factors',
          'Dividing rational expressions by reciprocal multiplication',
          'Common denominator for adding/subtracting rational expressions',
          'Illegal cancellation of individual terms trap'
        ]
      },
      {
        id: 'adv-radical-absolute-value',
        chapterId: 'advanced-math',
        chapterTitle: 'Advanced Math',
        lessonTitle: 'Radical, Rational & Absolute Value Equations',
        satDomain: 'Math',
        definition: 'Absolute value rule: |x| means distance from zero, always positive. So an equation like |2x−1| = 5 actually represents two separate linear equations: 2x − 1 = 5 AND 2x − 1 = −5. Solve both, both results are valid solutions to the original absolute value equation.',
        formulas: [
          {
            label: 'Absolute Value Split',
            formula: '|2x−1| = 5  →  2x − 1 = 5   AND   2x − 1 = −5',
            explanation: 'Solve both, both results are valid solutions to the original absolute value equation.'
          }
        ],
        goldenRules: [
          'Solve both linear equations for absolute value.',
          'Radical equations (square roots) — critical warning: When you square both sides to eliminate a square root, you can introduce extraneous solutions (answers that don\'t actually work in the original equation). Always plug your answer back into the original equation to check it\'s valid. This is a very common SAT trap.'
        ],
        trapsAndWarnings: [
          'Extraneous solutions: When you square both sides to eliminate a square root, you can introduce extraneous solutions (answers that don\'t actually work in the original equation). Always plug your answer back into the original equation to check it\'s valid. This is a very common SAT trap.'
        ],
        conceptsForLogging: [
          'Absolute value split: 2x - 1 = 5 and 2x - 1 = -5',
          'Radical equations: plugging answers back to eliminate extraneous solutions',
          'Square root introduced extraneous roots trap'
        ]
      },
      {
        id: 'adv-exponential-graphs',
        chapterId: 'advanced-math',
        chapterTitle: 'Advanced Math',
        lessonTitle: 'Exponential Graphs',
        satDomain: 'Math',
        definition: 'Key features to identify from f(x) = a·bˣ + c:',
        formulas: [
          {
            label: 'Exponential Function Form',
            formula: 'f(x) = a·bˣ + c',
            explanation: 'y-intercept: found by evaluating f(0).'
          }
        ],
        methods: [
          {
            title: 'Method to graph any exponential function',
            steps: [
              '1. Evaluate the function at x = −1, 0, and 1 (start with these three points)',
              '2. Use those points to sketch the curve, establishing the y-intercept and direction of the slope',
              '3. Extend the curve on both ends: one side approaches a horizontal asymptote, the other approaches positive or negative infinity'
            ]
          }
        ],
        goldenRules: [
          'y-intercept: found by evaluating f(0)',
          'As x increases, y increases or decreases depending on whether b > 1 (growth) or 0 < b < 1 (decay)',
          'As x decreases, y approaches (but never reaches) the horizontal asymptote'
        ],
        conceptsForLogging: [
          'Exponential function: f(x) = a·bˣ + c',
          'y-intercept evaluation at f(0)',
          'Horizontal asymptote identification',
          'Evaluating x = -1, 0, 1 test points'
        ]
      }
    ]
  },

  // ===========================================================================
  // CHAPTER 4: GEOMETRY & TRIGONOMETRY
  // ===========================================================================
  {
    id: 'geometry-trig',
    title: 'Geometry & Trigonometry',
    badge: 'Volume Formulas, SOHCAHTOA & Unit Circle',
    description: 'Reference sheet volume tricks, right triangle trigonometry shortcuts, cofunction identities, and exact unit circle reference table.',
    lessons: [
      {
        id: 'geom-volume-formulas',
        chapterId: 'geometry-trig',
        chapterTitle: 'Geometry & Trigonometry',
        lessonTitle: 'Volume Formulas',
        satDomain: 'Math',
        definition: 'Critical SAT-specific tip, this is huge and most students don\'t know it: "You do NOT need to memorize volume formulas for the SAT. At the beginning of each SAT Math section, the following volume formulas are provided as reference."',
        formulas: [
          { label: 'Right rectangular prism', formula: 'V = lwh', explanation: 'Provided on SAT reference sheet' },
          { label: 'Right circular cylinder', formula: 'V = πr²h', explanation: 'Provided on SAT reference sheet' },
          { label: 'Sphere', formula: 'V = (4/3)πr³', explanation: 'Provided on SAT reference sheet' },
          { label: 'Right circular cone', formula: 'V = (1/3)πr²h', explanation: 'Provided on SAT reference sheet' },
          { label: 'Rectangular pyramid', formula: 'V = (1/3)lwh', explanation: 'Provided on SAT reference sheet' }
        ],
        methods: [
          {
            title: '3-step method to use them',
            steps: [
              '1. Find the volume formula for the solid (from the reference sheet)',
              '2. Plug the given dimensions into the formula',
              '3. Evaluate'
            ],
            reverseSteps: [
              '1. Find the volume formula',
              '2. Plug in the volume and any known dimensions',
              '3. Isolate the unknown dimension (algebraically solve for it)'
            ]
          }
        ],
        goldenRules: [
          'You do NOT need to memorize volume formulas for the SAT. At the beginning of each SAT Math section, the volume formulas are provided as reference.',
          'Reverse version: Find the volume formula, plug in the volume and known dimensions, isolate the unknown dimension.'
        ],
        trapsAndWarnings: [
          'Diameter vs Radius: Divide diameter by 2 before plugging into r!'
        ],
        conceptsForLogging: [
          'Circle area: πr² | Circumference: 2πr',
          'Triangle area: ½ × base × height',
          'Cylinder volume: πr²h | Cone: ⅓πr²h | Sphere: 4/3πr³',
          'Pythagorean theorem: a² + b² = c²',
          'SOH-CAH-TOA: sin = opp/hyp, cos = adj/hyp, tan = opp/adj',
          'Triangle angle sum: 180°',
          'Circle equation: (x−h)² + (y−k)² = r²',
          'Pythagorean identity: sin²θ + cos²θ = 1',
          'Arc length: (θ/360) × 2πr | Sector area: (θ/360) × πr²'
        ]
      },
      {
        id: 'geom-right-triangle-trig',
        chapterId: 'geometry-trig',
        chapterTitle: 'Geometry & Trigonometry',
        lessonTitle: 'Right Triangle Trig',
        satDomain: 'Math',
        definition: 'Trigonometric ratios in a right triangle defined relative to an acute angle θ.',
        formulas: [
          { label: 'Sine', formula: 'sin θ = opposite / hypotenuse' },
          { label: 'Cosine', formula: 'cos θ = adjacent / hypotenuse' },
          { label: 'Tangent', formula: 'tan θ = opposite / adjacent' },
          {
            label: 'Cofunction identity (commonly tested)',
            formula: 'sin θ = cos(90° − θ)',
            explanation: 'This means sine of an angle equals cosine of its complement, useful shortcut when a question gives you one and asks for the other.'
          }
        ],
        goldenRules: [
          'Mnemonic: SOHCAHTOA — Sine is Opposite/Hypotenuse, Cosine is Adjacent/Hypotenuse, Tangent is Opposite/Adjacent.',
          'Cofunction identity: sin θ = cos(90° − θ) — sine of an angle equals cosine of its complement.'
        ],
        conceptsForLogging: [
          'SOHCAHTOA: sin = opp/hyp, cos = adj/hyp, tan = opp/adj',
          'Cofunction identity: sin θ = cos(90° − θ)',
          'Complementary acute angles: sin(A) = cos(B)'
        ]
      },
      {
        id: 'geom-unit-circle',
        chapterId: 'geometry-trig',
        chapterTitle: 'Geometry & Trigonometry',
        lessonTitle: 'Unit Circle',
        satDomain: 'Math',
        definition: 'Radian-degree conversion and coordinates of points on the unit circle.',
        formulas: [
          {
            label: 'Radian-degree conversion',
            formula: 'radian measure / π = degree measure / 180°',
            explanation: 'Conversion between radians and degrees.'
          },
          {
            label: 'Unit circle coordinates',
            formula: 'x = cos θ, y = sin θ, y / x = tan θ',
            explanation: 'On the unit circle, any point (x, y) at angle θ.'
          }
        ],
        goldenRules: [
          'The lesson\'s own note: "If you already know these, great. If not, consider spending time on the more frequently-tested skills before memorizing trig values" — meaning this table is lower priority than Algebra/Problem Solving content if you\'re short on time.'
        ],
        unitCircleTable: [
          { theta: '0', deg: '0°', cos: '1', sin: '0', tan: '0' },
          { theta: 'π/6', deg: '30°', cos: '√3/2', sin: '1/2', tan: '√3/3' },
          { theta: 'π/4', deg: '45°', cos: '√2/2', sin: '√2/2', tan: '1' },
          { theta: 'π/3', deg: '60°', cos: '1/2', sin: '√3/2', tan: '√3' },
          { theta: 'π/2', deg: '90°', cos: '0', sin: '1', tan: 'undefined' },
          { theta: '2π/3', deg: '120°', cos: '−1/2', sin: '√3/2', tan: '−√3' },
          { theta: '3π/4', deg: '135°', cos: '−√2/2', sin: '√2/2', tan: '−1' },
          { theta: 'π', deg: '180°', cos: '−1', sin: '0', tan: '0' }
        ],
        conceptsForLogging: [
          'Radian-degree conversion: radian measure / π = degree measure / 180°',
          'Unit circle coordinates: x = cos θ, y = sin θ, y / x = tan θ',
          'Special angles trig values: 0, π/6, π/4, π/3, π/2'
        ]
      },
      {
        id: 'geom-medium-to-hard-shift',
        chapterId: 'geometry-trig',
        chapterTitle: 'Geometry & Trigonometry',
        lessonTitle: 'Mastering Geometry & The Medium-to-Hard Shift',
        satDomain: 'Math',
        definition: 'Deconstructing the architectural shift from medium geometry to hard multi-concept synthesis, completing the square for circles, complementary trig identities, scale factor multipliers, and Desmos bypass tactics.',
        formulas: [
          {
            label: 'Equation of a Circle via Completing the Square',
            formula: 'x² + y² + Ax + By + C = 0 ──► (x - h)² + (y - k)² = r²',
            explanation: 'Group x-terms and y-terms, add (A/2)² and (B/2)² to both sides to find center (h, k) and radius r.'
          },
          {
            label: 'Complementary Angle Trigonometric Identity',
            formula: 'sin(x) = cos(90° - x)  or  sin(x) = cos(π/2 - x)',
            explanation: 'Hard SAT questions repeatedly test this in algebraic formats: if sin(3x - 10) = cos(2x + 20), then (3x - 10) + (2x + 20) = 90°.'
          },
          {
            label: 'Scale Factor Area & Volume Multipliers',
            formula: 'Linear ratio a : b ──► Surface Area a² : b² ──► Volume a³ : b³',
            explanation: 'If length doubles (2x), area quadruples (4x), and volume octuples (8x).'
          },
          {
            label: 'Core Four-Way Circle Proportion (The Master Formula)',
            formula: '(Central Angle / 360°) = (Arc Length / 2πr) = (Sector Area / πr²) = (Angle in Radians / 2π)',
            explanation: 'Nearly every circle geometry question on the SAT is solved using this four-way proportion.'
          }
        ],
        methods: [
          {
            title: 'What Changes from Medium to Hard in Geometry?',
            steps: [
              '1. In Medium Questions: You are usually given a diagram and apply a single formula directly (basic 30°-60°-90° or 45°-45°-90° ratios).',
              '2. In Hard Questions: No figure is provided. You must construct the geometric figure yourself using written coordinates and angle constraints.',
              '3. Multi-Concept Synthesis: Combining a circle equation with a tangent line (which forms a 90° angle with the radius), or nesting a right triangle inside a circular sector.',
              '4. Completing the Square: Transforming x² + y² + Ax + By + C = 0 into standard form (x - h)² + (y - k)² = r².',
              '5. Algebraic Complementary Angles: Setting the inside expressions to sum to 90° when sin(A) = cos(B).'
            ]
          },
          {
            title: 'Actionable Rules to Ace Hard SAT Geometry',
            steps: [
              '1. Leverage Built-In Desmos: Type the entire circle equation x² + y² + Ax + By + C = 0 directly into Desmos. It plots instantly. Click the center or find the radius visually without doing completion of squares by hand.',
              '2. Intersecting Lines & Curves in Desmos: Graph lines and circles/parabolas together. Click the gray intersection points to read (x, y) coordinates in seconds.',
              '3. Always Draw and Label: If a question describes an altitude inside an equilateral triangle or a chord in a circle, spend 5 seconds drawing it on scratch paper. Label every length and mark all 90° right angles immediately.'
            ]
          }
        ],
        goldenRules: [
          'Nearly every circle geometry question on the SAT is solved using the four-way proportion: (Central Angle / 360°) = (Arc Length / 2πr) = (Sector Area / πr²) = (Angle in Radians / 2π).',
          'Tangent Line Perpendicularity: A tangent line to a circle always forms a 90° right angle with the radius at the point of contact.',
          'Complementary Angle Shortcut: If sin(expression 1) = cos(expression 2), then (expression 1) + (expression 2) = 90° (or π/2 in radians).',
          'Always spend 5 seconds drawing figures on scratch paper when no diagram is provided.'
        ],
        trapsAndWarnings: [
          'Attempting to solve "no figure provided" hard geometry in your head without a sketch.',
          'Forgetting that linear scale ratio must be squared (a²:b²) for surface area and cubed (a³:b³) for volume.',
          'Wasting 3 minutes completing the square by hand when Desmos can graph the raw circle equation and show center and radius immediately.'
        ],
        conceptsForLogging: [
          'Circle equation: completing the square x² + y² + Ax + By + C = 0',
          'Complementary angles: sin(A) = cos(B) → A + B = 90°',
          'Similar solids scale factors: linear a:b → area a²:b² → volume a³:b³',
          'Four-way circle proportion: θ/360 = Arc/2πr = Sector/πr² = rad/2π',
          'Circle tangent perpendicularity: tangent forms 90° with radius',
          'Desmos circle plotting shortcut for center & radius',
          'Hard geometry: multi-concept synthesis without figure'
        ]
      }
    ]
  }
];

// Helper functions for quick lookup and filtering
export function getAllCoreLessons(): CoreCurriculumLesson[] {
  return CORE_CURRICULUM_CHAPTERS.flatMap((ch) => ch.lessons);
}

export function getAllConceptsForLogging(): { chapter: string; lesson: string; concept: string }[] {
  const result: { chapter: string; lesson: string; concept: string }[] = [];
  for (const ch of CORE_CURRICULUM_CHAPTERS) {
    for (const l of ch.lessons) {
      for (const c of l.conceptsForLogging) {
        result.push({ chapter: ch.title, lesson: l.lessonTitle, concept: c });
      }
    }
  }
  return result;
}
