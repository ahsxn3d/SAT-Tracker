// ==============================================================================
// THE ANTI-BURNOUT SAT RULEBOOK - CORE CURRICULUM KNOWLEDGE BASE
// ==============================================================================
// Synchronized, authoritative reference for all core math chapters and lessons.
// Used by the Core Info section, Calendar struggle logger, and Error Log.
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
        definition: 'A linear relationship connects two variables (x, y) where plotting them produces a perfectly straight line.',
        formulas: [
          {
            label: 'Slope Formula (Must Memorize)',
            formula: 'm = \\frac{\\Delta y}{\\Delta x} = \\frac{y_2 - y_1}{x_2 - x_1}',
            explanation: 'Change in y over change in x. A line is fully defined by EITHER: (a) slope + one point, OR (b) two points.'
          },
          {
            label: 'Slope-Intercept Form',
            formula: 'y = mx + b',
            explanation: 'm = slope (rate of change); b = y-intercept (where the line crosses the y-axis, coordinate (0, b)).'
          }
        ],
        methods: [
          {
            title: 'Solving Systems of Two Linear Equations (3 Methods)',
            steps: [
              '1. Select variables to represent unknown quantities.',
              '2. Using the given info, write a system of two linear equations.',
              '3. Solve using either Substitution (solve one equation for a variable, plug into the other) or Elimination (add/subtract equations to cancel a variable).'
            ]
          }
        ],
        goldenRules: [
          'A line is fully defined by EITHER: (a) slope + one point, OR (b) two points.',
          'Word Problem Translation Tip: SAT word problems scatter information across several sentences. Read for: a starting/fixed value (becomes the constant b), and a rate of change (becomes the coefficient m on the variable).'
        ],
        trapsAndWarnings: [
          'Watch out for negative slopes: if a quantity is decreasing, the coefficient must be negative (-m).',
          'In elimination, make sure variable coefficients are exact opposites before adding equations to avoid sign errors.'
        ],
        conceptsForLogging: [
          'Slope calculation from two points (y2 - y1) / (x2 - x1)',
          'Identifying slope vs y-intercept from word problem',
          'Translating fixed cost (constant) vs per-unit rate (slope)',
          'Substitution method execution',
          'Elimination method execution (matching coefficients)',
          'Infinite solutions vs No solutions in linear systems'
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
        lessonTitle: 'Unit Conversion (Dimensional Analysis)',
        satDomain: 'Math',
        definition: 'Dimensional analysis is the systematic method of multiplying by conversion factors structured as fractions so that unwanted units cancel out, leaving only the target unit.',
        formulas: [
          {
            label: 'Conversion Factor Chain',
            formula: '\\text{Quantity} \\times \\left(\\frac{\\text{Intermediate Unit}}{\\text{Original Unit}}\\right) \\times \\left(\\frac{\\text{Target Unit}}{\\text{Intermediate Unit}}\\right) = \\text{Target Quantity}',
            explanation: 'Arrange fractions so that identical units appear diagonally across numerator and denominator.'
          }
        ],
        methods: [
          {
            title: 'Dimensional Analysis Method',
            steps: [
              '1. Identify your starting unit and your ultimate target unit.',
              '2. Set up conversion factors as fractions where each fraction equals 1 (numerator and denominator are equivalent quantities).',
              '3. Arrange the fractions so the unwanted unit cancels out diagonally, leaving only the unit you want.',
              '4. Multiply across all numerators, multiply across all denominators, and divide to get the final numeric answer.'
            ]
          }
        ],
        goldenRules: [
          'RULE: Always place the unit you are removing on the bottom (denominator) of the next fraction so it cancels diagonally.',
          'Never invert conversion factors without checking whether units cancel out cleanly.'
        ],
        exampleLogic: 'To convert x cubic centimeters into fluid ounces:\nx cm³ × (1 mL / 1 cm³) × (1 fl oz / 29.57 mL)\nNotice: cm³ cancels with cm³, mL cancels with mL, and fl oz remains.',
        trapsAndWarnings: [
          'Square and cubic units: converting square feet to square yards requires squaring the conversion factor (1 yd / 3 ft)² = 1 yd² / 9 ft².',
          'Double check whether the question asks for the rate per minute, per hour, or per day.'
        ],
        conceptsForLogging: [
          'Diagonal unit cancellation setup',
          'Multi-step metric to imperial unit chain',
          'Square and cubic unit conversion factors (e.g. cm³ to mL to fl oz)',
          'Rate conversions (e.g. miles per hour to feet per second)',
          'Numerator vs denominator unit placement'
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
        definition: 'Rearranging multivariable formulas to express one specific variable in terms of all the others.',
        formulas: [
          {
            label: 'Volume Rearrangement Example',
            formula: 'V = \\pi r^2 h \\implies \\frac{V}{\\pi h} = r^2 \\implies r = \\sqrt{\\frac{V}{\\pi h}}',
            explanation: 'Dividing both sides by pi*h first, then taking the square root of both sides.'
          }
        ],
        methods: [
          {
            title: '3-Step Method (Works for ANY formula rearrangement)',
            steps: [
              '1. Write down the original equation.',
              '2. Perform the same operation on both sides to begin isolating the desired quantity.',
              '3. Repeat step 2 until the desired quantity is completely alone on one side.'
            ]
          }
        ],
        goldenRules: [
          'GOLDEN RULE: Whatever you do to one side, you must do to the other side, exactly.',
          'Inverse operations: undo addition with subtraction, multiplication with division, powers with roots, and fractions with reciprocals.'
        ],
        conceptsForLogging: [
          'Isolating a variable under a radical (squaring both sides)',
          'Isolating a variable in a denominator (clearing fractions)',
          'Factoring out the target variable when it appears in multiple terms',
          'Square root vs plus-minus when isolating geometric radius/length'
        ]
      },
      {
        id: 'adv-factoring-identities',
        chapterId: 'advanced-math',
        chapterTitle: 'Advanced Math',
        lessonTitle: 'Factoring & Algebraic Identities (Verbatim from Lesson)',
        satDomain: 'Math',
        definition: 'Standard algebraic identities and the quadratic formula used for instantaneous polynomial factorization without long division.',
        formulas: [
          {
            label: 'Square of Sum',
            formula: 'a^2 + 2ab + b^2 = (a + b)^2',
            explanation: 'Recognize the middle term is twice the product of a and b.'
          },
          {
            label: 'Square of Difference',
            formula: 'a^2 - 2ab + b^2 = (a - b)^2',
            explanation: 'Same as square of sum with negative middle term.'
          },
          {
            label: 'Difference of Squares',
            formula: 'a^2 - b^2 = (a + b)(a - b)',
            explanation: 'No middle term! The fastest factoring shortcut on the entire SAT.'
          },
          {
            label: 'Quadratic Formula (Standard Essential Reference)',
            formula: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
            explanation: 'Discriminant b² - 4ac indicates: > 0 (two real roots), = 0 (one real root), < 0 (no real roots).'
          }
        ],
        goldenRules: [
          'These three patterns are the fastest way to factor without long division: recognize the pattern first before trying to factor manually.',
          'Always look for a Greatest Common Factor (GCF) to pull out before applying identity formulas.'
        ],
        trapsAndWarnings: [
          'TRAP: (a + b)² is NEVER equal to a² + b²! You must never forget the middle term 2ab.',
          'Sum of squares (a² + b²) CANNOT be factored over real numbers.'
        ],
        conceptsForLogging: [
          'Difference of squares recognition: a² - b² = (a+b)(a-b)',
          'Perfect square trinomials: a² ± 2ab + b² = (a ± b)²',
          'Quadratic formula execution and sign errors on -b',
          'Discriminant analysis (b² - 4ac) for number of solutions',
          'Factoring out GCF before factoring quadratics'
        ]
      },
      {
        id: 'adv-rational-expressions',
        chapterId: 'advanced-math',
        chapterTitle: 'Advanced Math',
        lessonTitle: 'Operations with Rational Expressions',
        satDomain: 'Math',
        definition: 'Rational expressions are fractions containing polynomial variables. They follow the exact same arithmetic rules as numerical fractions.',
        formulas: [
          {
            label: 'Multiplication & Division Rules',
            formula: '\\frac{A}{B} \\cdot \\frac{C}{D} = \\frac{AC}{BD}, \\quad \\frac{A}{B} \\div \\frac{C}{D} = \\frac{A}{B} \\cdot \\frac{D}{C} = \\frac{AD}{BC}',
            explanation: 'Multiply numerators and denominators. To divide, multiply by the reciprocal of the second fraction.'
          },
          {
            label: 'Addition & Subtraction Common Denominator',
            formula: '\\frac{A}{B} \\pm \\frac{C}{D} = \\frac{AD \\pm BC}{BD}',
            explanation: 'Create a common denominator before combining numerators.'
          }
        ],
        methods: [
          {
            title: '4 Rules for Rational Expressions',
            steps: [
              '1. Multiply: Multiply numerators together, denominators together, then simplify/cancel common factors.',
              '2. Divide: Flip the second fraction (multiply by reciprocal), then multiply.',
              '3. Add / Subtract: Find a common denominator first, multiply numerators accordingly, then combine over the shared denominator.',
              '4. Simplify: ALWAYS factor first before cancelling. You can only cancel factors (multiplied quantities), never individual terms!'
            ]
          }
        ],
        goldenRules: [
          'CRITICAL RULE: Always factor first before cancelling. You can ONLY cancel factors, NEVER individual added terms.',
          'Example trap: In (x + 2) / (x + 5), you CANNOT cancel the x!'
        ],
        conceptsForLogging: [
          'Cancelling terms instead of factors (invalid cancellation trap)',
          'Finding lowest common denominator (LCD) for rational subtraction',
          'Multiplying by reciprocal in rational division',
          'Factoring numerators and denominators completely before simplification'
        ]
      },
      {
        id: 'adv-radical-absolute-value',
        chapterId: 'advanced-math',
        chapterTitle: 'Advanced Math',
        lessonTitle: 'Radical, Rational & Absolute Value Equations',
        satDomain: 'Math',
        definition: 'Equations involving roots, absolute values, and denominators that carry critical domain restrictions and extraneous solution traps.',
        formulas: [
          {
            label: 'Absolute Value Split Rule',
            formula: '|ax + b| = c \\implies (ax + b = c) \\quad \\text{AND} \\quad (ax + b = -c)',
            explanation: '|x| means distance from zero, always non-negative. An equation like |2x - 1| = 5 produces two distinct linear equations.'
          }
        ],
        goldenRules: [
          'Solve BOTH split equations for absolute value; both results are valid candidates.',
          'If an absolute value equation equals a negative number (e.g. |x - 3| = -4), there are IMMEDIATELY NO SOLUTIONS.'
        ],
        trapsAndWarnings: [
          'CRITICAL WARNING (RADICAL EQUATIONS): When you square both sides to eliminate a square root, you can introduce extraneous solutions (answers that do not actually work in the original equation). Always plug your answer back into the original equation to check it is valid. This is a very common SAT trap!'
        ],
        conceptsForLogging: [
          'Extraneous solutions after squaring both sides of a radical equation',
          'Splitting absolute value into positive and negative cases',
          'Recognizing impossible absolute values (|expression| = negative number)',
          'Checking solutions back in the original radical equation'
        ]
      },
      {
        id: 'adv-exponential-graphs',
        chapterId: 'advanced-math',
        chapterTitle: 'Advanced Math',
        lessonTitle: 'Exponential Graphs',
        satDomain: 'Math',
        definition: 'Graphs of the form f(x) = a·b^x + c characterized by rapid growth or decay and a horizontal asymptote at y = c.',
        formulas: [
          {
            label: 'Standard Exponential Function',
            formula: 'f(x) = a \\cdot b^x + c',
            explanation: 'a = initial scale/vertical stretch; b = base growth/decay factor; c = horizontal asymptote line (y = c).'
          }
        ],
        methods: [
          {
            title: 'Method to Graph Any Exponential Function',
            steps: [
              '1. Evaluate the function at x = -1, 0, and 1 (start with these three canonical points).',
              '2. Use those points to sketch the curve, establishing the y-intercept (at f(0)) and direction of the slope.',
              '3. Extend the curve on both ends: one side approaches a horizontal asymptote (y = c), the other approaches positive or negative infinity.'
            ]
          }
        ],
        goldenRules: [
          'y-intercept is always found by evaluating f(0).',
          'If b > 1: Exponential Growth (y increases as x increases).',
          'If 0 < b < 1: Exponential Decay (y decreases as x increases).',
          'As x decreases (or increases in decay), y approaches but NEVER touches the horizontal asymptote line y = c.'
        ],
        conceptsForLogging: [
          'Finding horizontal asymptote y = c',
          'Evaluating y-intercept at f(0)',
          'Distinguishing growth (b > 1) vs decay (0 < b < 1)',
          'Using 3-point test (x = -1, 0, 1) to identify graph'
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
        lessonTitle: 'Volume Formulas (SAT Reference Sheet Tip)',
        satDomain: 'Math',
        definition: 'Formulas for the 3D volume of standard geometric solids provided directly on the SAT Math reference sheet.',
        formulas: [
          { label: 'Right Rectangular Prism', formula: 'V = lwh', explanation: 'Length × Width × Height' },
          { label: 'Right Circular Cylinder', formula: 'V = \\pi r^2 h', explanation: 'Base area (pi*r^2) × Height' },
          { label: 'Sphere', formula: 'V = \\frac{4}{3}\\pi r^3', explanation: 'Notice radius is cubed!' },
          { label: 'Right Circular Cone', formula: 'V = \\frac{1}{3}\\pi r^2 h', explanation: 'Exactly one-third the volume of a cylinder with same base & height' },
          { label: 'Rectangular Pyramid', formula: 'V = \\frac{1}{3}lwh', explanation: 'Exactly one-third the volume of a rectangular prism' }
        ],
        methods: [
          {
            title: '3-Step Method to Use Volume Formulas',
            steps: [
              '1. Find the volume formula for the solid (look at the College Board reference sheet on screen!).',
              '2. Plug the given dimensions into the formula.',
              '3. Evaluate numerically.'
            ],
            reverseSteps: [
              '1. Find the volume formula for the solid.',
              '2. Plug in the known volume and all known dimensions.',
              '3. Isolate the unknown dimension algebraically (solve for radius, height, or length).'
            ]
          }
        ],
        goldenRules: [
          'CRITICAL SAT-SPECIFIC TIP: You do NOT need to memorize volume formulas for the SAT! At the beginning of each SAT Math section, these 5 volume formulas are provided as reference.',
          'Diameter vs Radius: SAT questions almost always give the diameter to trap students. ALWAYS divide diameter by 2 before plugging in r!'
        ],
        trapsAndWarnings: [
          'Units mismatch: Check if length, width, and height are given in the same units (e.g. inches vs feet) before multiplying.',
          'Cone vs Cylinder: Remember the 1/3 factor on cones and pyramids.'
        ],
        conceptsForLogging: [
          'Diameter given instead of radius (forgetting to divide by 2)',
          'Volume reverse isolation (solving for height or radius given V)',
          'Cylinder (V = pi*r²h) vs Cone (V = 1/3*pi*r²h) formula selection',
          'Sphere volume (4/3*pi*r³) arithmetic and radius cubing'
        ]
      },
      {
        id: 'geom-right-triangle-trig',
        chapterId: 'geometry-trig',
        chapterTitle: 'Geometry & Trigonometry',
        lessonTitle: 'Right Triangle Trigonometry (SOHCAHTOA)',
        satDomain: 'Math',
        definition: 'Ratios of side lengths in a right triangle defined relative to an acute angle theta.',
        formulas: [
          { label: 'Sine (SOH)', formula: '\\sin\\theta = \\frac{\\text{Opposite}}{\\text{Hypotenuse}}' },
          { label: 'Cosine (CAH)', formula: '\\cos\\theta = \\frac{\\text{Adjacent}}{\\text{Hypotenuse}}' },
          { label: 'Tangent (TOA)', formula: '\\tan\\theta = \\frac{\\text{Opposite}}{\\text{Adjacent}}' },
          {
            label: 'Cofunction Identity (Commonly Tested!)',
            formula: '\\sin\\theta = \\cos(90^\\circ - \\theta) \\quad \\text{or} \\quad \\sin x = \\cos y \\iff x + y = 90^\\circ',
            explanation: 'The sine of an angle equals the cosine of its complementary angle. Extremely high-leverage SAT shortcut!'
          }
        ],
        goldenRules: [
          'Mnemonic: SOHCAHTOA — Sine is Opposite/Hypotenuse, Cosine is Adjacent/Hypotenuse, Tangent is Opposite/Adjacent.',
          'Cofunction shortcut: When a question gives sin(x) and asks for cos(90° - x), the answer is identical! When sin(a) = cos(b), then a + b = 90°.'
        ],
        conceptsForLogging: [
          'Cofunction identity: sin(x) = cos(90° - x) and x + y = 90°',
          'SOHCAHTOA ratio setup (opposite vs adjacent identification)',
          'Finding side length using trig ratios',
          'Special right triangles (30-60-90 and 45-45-90) ratios'
        ]
      },
      {
        id: 'geom-unit-circle',
        chapterId: 'geometry-trig',
        chapterTitle: 'Geometry & Trigonometry',
        lessonTitle: 'Unit Circle & Radian Conversion',
        satDomain: 'Math',
        definition: 'A circle of radius 1 centered at the origin (0, 0) used to define trigonometric functions for any angle in radians or degrees.',
        formulas: [
          {
            label: 'Radian-Degree Conversion',
            formula: '\\frac{\\text{radian measure}}{\\pi} = \\frac{\\text{degree measure}}{180^\\circ}',
            explanation: 'To convert degrees to radians: multiply by (pi / 180°). To convert radians to degrees: multiply by (180° / pi).'
          },
          {
            label: 'Coordinate Definitions on Unit Circle',
            formula: 'x = \\cos\\theta, \\quad y = \\sin\\theta, \\quad \\frac{y}{x} = \\tan\\theta',
            explanation: 'Any point (x, y) on the unit circle at angle theta has x = cos(theta) and y = sin(theta).'
          }
        ],
        goldenRules: [
          'Lesson Priority Advisory: "If you already know these, great. If not, consider spending time on the more frequently-tested skills before memorizing trig values" — meaning this table is lower priority than Algebra/Problem Solving content if you are short on time.'
        ],
        unitCircleTable: [
          { theta: '0', deg: '0°', cos: '1', sin: '0', tan: '0' },
          { theta: 'π/6', deg: '30°', cos: '√3/2', sin: '1/2', tan: '√3/3' },
          { theta: 'π/4', deg: '45°', cos: '√2/2', sin: '√2/2', tan: '1' },
          { theta: 'π/3', deg: '60°', cos: '1/2', sin: '√3/2', tan: '√3' },
          { theta: 'π/2', deg: '90°', cos: '0', sin: '1', tan: 'undefined' },
          { theta: '2π/3', deg: '120°', cos: '-1/2', sin: '√3/2', tan: '-√3' },
          { theta: '3π/4', deg: '135°', cos: '-√2/2', sin: '√2/2', tan: '-1' },
          { theta: 'π', deg: '180°', cos: '-1', sin: '0', tan: '0' }
        ],
        conceptsForLogging: [
          'Radian to degree conversion (radians × 180 / pi)',
          'Degree to radian conversion (degrees × pi / 180)',
          'Coordinates on unit circle: (cos θ, sin θ)',
          'Evaluating sin/cos for special angles (pi/6, pi/4, pi/3, pi/2)',
          'Negative values in Quadrant II (cos negative, sin positive)'
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
