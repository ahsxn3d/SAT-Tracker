export interface MathFormulaItem {
  label: string;
  formula: string;
  displayMath?: string;
  explanation: string;
  example?: string;
}

export interface MathLessonMethod {
  title: string;
  steps: string[];
}

export interface MathLesson {
  id: string;
  sectionNumber: 1 | 2;
  sectionTitle: string;
  unitNumber?: number;
  unitTitle?: string;
  lessonNumber: number;
  lessonTitle: string;
  badge: string;
  subtitle: string;
  formulas: MathFormulaItem[];
  methods?: MathLessonMethod[];
  theoremsAndRules?: string[];
  trapsAndWarnings?: string[];
  workedExamples?: {
    problem: string;
    solution: string;
  }[];
  conceptsForLogging: string[];
}

export interface MathDifficultyRow {
  id: string;
  domain: string;
  foundationsLevel: string;
  mediumLevel: string;
  advancedLevel: string;
  keyTakeaway: string;
}

export interface MathDesmosCheat {
  id: string;
  title: string;
  tagline: string;
  badge: string;
  scenario: string;
  steps: {
    stepNumber: number;
    action: string;
    command?: string;
    note?: string;
  }[];
  proTip: string;
}

// ==========================================
// SECTION 1: GEOMETRY & TRIGONOMETRY (THE TOUGH CHAPTER)
// ==========================================
export const MATH_GEOMETRY_TRIG_LESSONS: MathLesson[] = [
  {
    id: 'math-sec1-l1-3d-volume-scaling',
    sectionNumber: 1,
    sectionTitle: 'Geometry & Trigonometry',
    lessonNumber: 1,
    lessonTitle: '3D Volume & Dimensional Scaling',
    badge: 'High Frequency',
    subtitle: 'Official 3D solid volume formulas, the cubic scaling law, and non-proportional dimensional multipliers.',
    formulas: [
      {
        label: 'Rectangular Prism',
        formula: 'V = l · w · h',
        displayMath: 'V = l \\cdot w \\cdot h',
        explanation: 'Length times width times height.'
      },
      {
        label: 'Right Cylinder',
        formula: 'V = π r² h',
        displayMath: 'V = \\pi r^2 h',
        explanation: 'Circular base area (πr²) multiplied by height (h).'
      },
      {
        label: 'Right Circular Cone',
        formula: 'V = (1/3) π r² h',
        displayMath: 'V = \\frac{1}{3} \\pi r^2 h',
        explanation: 'Exactly one-third of a cylinder with the same radius and height.'
      },
      {
        label: 'Sphere',
        formula: 'V = (4/3) π r³',
        displayMath: 'V = \\frac{4}{3} \\pi r^3',
        explanation: 'Four-thirds times pi times radius cubed.'
      },
      {
        label: 'Pyramid',
        formula: 'V = (1/3) B h',
        displayMath: 'V = \\frac{1}{3} B h',
        explanation: 'B represents the area of the base polygon (e.g., s² for square base, (1/2)bh for triangular base).'
      },
      {
        label: 'The Dimensional Scaling Law',
        formula: 'Linear k ──► Area k² ──► Volume k³',
        displayMath: '\\text{Linear } k \\longrightarrow \\text{Area } k^2 \\longrightarrow \\text{Volume } k^3',
        explanation: 'When every linear dimension of an object is multiplied by scale factor k, lengths scale by k, surface areas scale by k², and volume scales by k³.'
      }
    ],
    theoremsAndRules: [
      'Linear Dimensions (r, h, l, w, perimeter) scale by k',
      'Surface Area (Base Area, Lateral Area, Total Area) scale by k²',
      'Volume (V) scales by k³',
      'Non-Uniform Scaling Rule: If only some dimensions are multiplied, substitute the new multipliers directly into the volume formula.'
    ],
    workedExamples: [
      {
        problem: 'Example 1: If the radius r of a cylinder is multiplied by 2 (2x) and height h remains unchanged, what happens to the volume?',
        solution: 'V_new = π(2r)²h = π(4r²)h = 4πr²h = 4 · V_original. The volume quadruples (4x).'
      },
      {
        problem: 'Example 2: If the radius is multiplied by 2 and height is multiplied by 3, what happens to the volume?',
        solution: 'V_new = π(2r)²(3h) = π(4r²)(3h) = 12 · πr²h = 12 · V_original. The volume scales by 12x.'
      }
    ],
    trapsAndWarnings: [
      'Assuming volume scales by k instead of k³ when all dimensions are enlarged.',
      'Forgetting that radius is squared in cylinder and cone formulas: a 3x radius multiplier results in a 9x volume multiplier even if height is unchanged.'
    ],
    conceptsForLogging: [
      '3D Volume: Rectangular prism V = lwh',
      '3D Volume: Cylinder V = πr²h',
      '3D Volume: Cone V = (1/3)πr²h',
      '3D Volume: Sphere V = (4/3)πr³',
      '3D Volume: Pyramid V = (1/3)Bh',
      'Dimensional scaling law: k, k², k³',
      'Non-uniform dimensional multipliers'
    ]
  },
  {
    id: 'math-sec1-l2-congruence-similarity-angles',
    sectionNumber: 1,
    sectionTitle: 'Geometry & Trigonometry',
    lessonNumber: 2,
    lessonTitle: 'Congruence, Similarity, and Angle Rules',
    badge: 'Core Geometry',
    subtitle: 'Fundamental angle theorems, transversals, and similar triangle side-ratio proportions.',
    formulas: [
      {
        label: 'Vertical Angles Theorem',
        formula: '∠1 = ∠2',
        displayMath: '\\angle 1 = \\angle 2',
        explanation: 'Opposite angles formed by two intersecting lines are always congruent.'
      },
      {
        label: 'Linear Pair (Straight Line)',
        formula: '∠A + ∠B = 180°',
        displayMath: '\\angle A + \\angle B = 180^\\circ',
        explanation: 'Two adjacent angles on a straight line are supplementary and sum to 180°.'
      },
      {
        label: 'Triangle Angle Sum',
        formula: '∠A + ∠B + ∠C = 180°',
        displayMath: '\\angle A + \\angle B + \\angle C = 180^\\circ',
        explanation: 'The interior angles of any triangle always sum to 180°.'
      },
      {
        label: 'Exterior Angle Theorem',
        formula: '∠Exterior = ∠Interior₁ + ∠Interior₂',
        displayMath: '\\angle \\text{Exterior} = \\angle \\text{Interior}_1 + \\angle \\text{Interior}_2',
        explanation: 'The measure of an exterior angle of a triangle equals the sum of the two remote interior angles.'
      },
      {
        label: 'Similar Triangles Proportion (ΔABC ~ ΔDEF)',
        formula: 'AB / DE = BC / EF = AC / DF',
        displayMath: '\\frac{AB}{DE} = \\frac{BC}{EF} = \\frac{AC}{DF}',
        explanation: 'In similar triangles, all corresponding angles are equal (∠A = ∠D, ∠B = ∠E, ∠C = ∠F) and corresponding sides are proportional.'
      }
    ],
    theoremsAndRules: [
      'Similar Triangles have identical angle measures and strictly proportional side lengths.',
      'If two pairs of corresponding angles are equal, the triangles are automatically similar (AA Similarity).',
      'Parallel lines cut by a transversal create equal Alternate Interior Angles, Corresponding Angles, and Alternate Exterior Angles.'
    ],
    trapsAndWarnings: [
      'Mismatched corresponding sides: Always trace vertices in order (A to B corresponds to D to E, not D to F).',
      'Confusing similar triangles with congruent triangles: Similar triangles have equal angles but scaled sides.'
    ],
    conceptsForLogging: [
      'Angle theorem: Vertical angles ∠1 = ∠2',
      'Angle theorem: Linear pair ∠A + ∠B = 180°',
      'Angle theorem: Triangle interior sum = 180°',
      'Angle theorem: Exterior angle = sum of remote interiors',
      'Similar triangles: Proportional sides AB/DE = BC/EF = AC/DF',
      'AA Similarity criterion'
    ]
  },
  {
    id: 'math-sec1-l3-right-triangles-trig',
    sectionNumber: 1,
    sectionTitle: 'Geometry & Trigonometry',
    lessonNumber: 3,
    lessonTitle: 'Right Triangle Trigonometry & Special Triangles',
    badge: 'Guaranteed 750+ Topic',
    subtitle: 'Pythagorean triples, SOH-CAH-TOA, 30°-60°-90° & 45°-45°-90° ratios, and the Complementary Angle identity.',
    formulas: [
      {
        label: 'Pythagorean Theorem',
        formula: 'a² + b² = c²',
        displayMath: 'a^2 + b^2 = c^2',
        explanation: 'In any right triangle, the sum of squares of the legs equals the square of the hypotenuse (c).'
      },
      {
        label: 'SOH - CAH - TOA Definitions',
        formula: 'sin θ = O / H  |  cos θ = A / H  |  tan θ = O / A',
        displayMath: '\\sin \\theta = \\frac{O}{H}, \\quad \\cos \\theta = \\frac{A}{H}, \\quad \\tan \\theta = \\frac{O}{A}',
        explanation: 'O = Opposite leg, A = Adjacent leg, H = Hypotenuse.'
      },
      {
        label: '30°-60°-90° Special Right Triangle',
        formula: 'x  :  x√3  :  2x',
        displayMath: 'x \\ : \\ x\\sqrt{3} \\ : \\ 2x',
        explanation: 'Short leg = x (opposite 30°), Long leg = x√3 (opposite 60°), Hypotenuse = 2x (opposite 90°).'
      },
      {
        label: '45°-45°-90° Special Right Triangle',
        formula: 'x  :  x  :  x√2',
        displayMath: 'x \\ : \\ x \\ : \\ x\\sqrt{2}',
        explanation: 'Legs = x, x (isosceles right triangle), Hypotenuse = x√2.'
      },
      {
        label: 'The Complementary Angle Theorem',
        formula: 'sin(x°) = cos(90° - x°)  ──►  If sin(A) = cos(B), then A + B = 90°',
        displayMath: '\\sin(A) = \\cos(B) \\implies A + B = 90^\\circ \\quad \\left(\\text{or } \\frac{\\pi}{2} \\text{ rad}\\right)',
        explanation: 'Guaranteed SAT question: The sine of an acute angle equals the cosine of its complement.'
      }
    ],
    theoremsAndRules: [
      'Core Pythagorean Triples to Memorize:',
      '• 3 - 4 - 5  (Multiples: 6-8-10, 9-12-15, 30-40-50)',
      '• 5 - 12 - 13  (Multiples: 10-24-26)',
      '• 8 - 15 - 17',
      '• 7 - 24 - 25',
      'If sin(A) = cos(B), set their angle arguments to sum to 90° immediately.'
    ],
    workedExamples: [
      {
        problem: 'Example Problem: If sin(3x - 10°) = cos(2x + 20°), what is the value of x?',
        solution: 'Apply the Complementary Angle identity: (3x - 10) + (2x + 20) = 90° ──► 5x + 10 = 90° ──► 5x = 80 ──► x = 16.'
      }
    ],
    trapsAndWarnings: [
      'Mixing up the short and long legs of a 30°-60°-90° triangle: The short leg (x) is always opposite the 30° angle, while the long leg (x√3) is opposite 60°.',
      'Forgetting that trigonometric ratios depend strictly on the angle θ, not the absolute triangle size.'
    ],
    conceptsForLogging: [
      'Pythagorean theorem a² + b² = c²',
      'Core triples: 3-4-5, 5-12-13, 8-15-17, 7-24-25',
      'SOH-CAH-TOA definitions',
      '30°-60°-90° triangle: x : x√3 : 2x',
      '45°-45°-90° triangle: x : x : x√2',
      'Complementary angle identity: sin(A) = cos(B) → A + B = 90°',
      'Algebraic complementary equation solving'
    ]
  },
  {
    id: 'math-sec1-l4-circle-theorems',
    sectionNumber: 1,
    sectionTitle: 'Geometry & Trigonometry',
    lessonNumber: 4,
    lessonTitle: 'Circle Theorems (Arcs, Sectors, Angles)',
    badge: 'Master Proportion',
    subtitle: 'The 4-way circle proportion, radian sector formulas, tangent perpendicularity, and inscribed angle rules.',
    formulas: [
      {
        label: 'The Master Circle Proportion (Degrees)',
        formula: '(θ° / 360°) = (s / 2πr) = (A / πr²)',
        displayMath: '\\frac{\\theta^\\circ}{360^\\circ} = \\frac{s}{2\\pi r} = \\frac{A}{\\pi r^2}',
        explanation: 'θ = Central Angle, s = Arc Length, A = Sector Area. Set any two fractions equal to solve for the missing variable.'
      },
      {
        label: 'Arc Length in Radians',
        formula: 's = r · θ',
        displayMath: 's = r \\cdot \\theta',
        explanation: 'Arc length equals radius multiplied by the central angle in radians.'
      },
      {
        label: 'Sector Area in Radians',
        formula: 'A = (1/2) · r² · θ',
        displayMath: 'A = \\frac{1}{2} r^2 \\theta',
        explanation: 'Sector area equals one-half times radius squared times central angle in radians.'
      }
    ],
    theoremsAndRules: [
      '1. Tangent Line ⟂ Radius: A tangent line meets the radius at exactly 90° at the point of tangency.',
      '2. Inscribed Angle Theorem: An inscribed angle with vertex on the circle equals exactly 1/2 of the central angle intercepting the same arc.',
      '3. Semicircle Theorem: Any angle inscribed inside a semicircle (intercepting the diameter) is always a 90° right angle.',
      '4. Radii Triangle: Two radii connected to a chord always form an Isosceles Triangle (r = r), so base angles are equal.'
    ],
    trapsAndWarnings: [
      'Using the radian formulas (s = rθ, A = 1/2 r²θ) with degrees instead of radians.',
      'Assuming an inscribed angle is equal to the central angle: The inscribed angle is always HALF the central angle.'
    ],
    conceptsForLogging: [
      'Four-way circle proportion: θ/360 = s/2πr = A/πr²',
      'Radian arc length: s = rθ',
      'Radian sector area: A = (1/2)r²θ',
      'Circle tangent ⟂ radius at 90°',
      'Inscribed angle = 1/2 central angle',
      'Semicircle inscribed angle = 90°',
      'Radii form isosceles triangle'
    ]
  },
  {
    id: 'math-sec1-l5-circle-equations-completing-square',
    sectionNumber: 1,
    sectionTitle: 'Geometry & Trigonometry',
    lessonNumber: 5,
    lessonTitle: 'Circle Equations in the xy-Plane',
    badge: 'Step-by-Step Blueprint',
    subtitle: 'Standard form circle equations, radius identification, and 4-step completion of squares.',
    formulas: [
      {
        label: 'Standard Form Circle Equation',
        formula: '(x - h)² + (y - k)² = r²',
        displayMath: '(x - h)^2 + (y - k)^2 = r^2',
        explanation: 'Center = (h, k) [Signs flip!], Radius = √r².'
      },
      {
        label: 'Completing the Square Term',
        formula: 'c = (b / 2)²',
        displayMath: 'c = \\left(\\frac{b}{2}\\right)^2',
        explanation: 'Take half of the linear coefficient and square it to create a perfect square trinomial.'
      }
    ],
    methods: [
      {
        title: '4-Step Completing the Square Walkthrough',
        steps: [
          'Target: Convert expanded form x² - 6x + y² + 8y = 24 into standard form.',
          'Step 1 (Group x and y terms): (x² - 6x) + (y² + 8y) = 24',
          'Step 2 (Half middle & square): For x: (-6 / 2)² = (-3)² = 9. For y: (8 / 2)² = (4)² = 16.',
          'Step 3 (Add to BOTH sides): (x² - 6x + 9) + (y² + 8y + 16) = 24 + 9 + 16',
          'Step 4 (Factor into squares): (x - 3)² + (y + 4)² = 49 ──► Center = (3, -4), Radius = √49 = 7.'
        ]
      }
    ],
    theoremsAndRules: [
      'Center Sign Flip: In (x - 3)² + (y + 4)² = 49, the center is (+3, -4), NOT (-3, +4).',
      'Radius is the square root of the constant on the right side: √49 = 7.',
      'Desmos Speed Shortcut: Type the raw expanded equation into Desmos directly to inspect the center and radius visually.'
    ],
    trapsAndWarnings: [
      'Forgetting to add the squared terms to BOTH sides of the equation in Step 3.',
      'Reporting r² as the radius instead of taking the square root.'
    ],
    conceptsForLogging: [
      'Circle equation standard form (x-h)² + (y-k)² = r²',
      'Circle center (h, k) sign flip rule',
      'Completing the square: x² + Ax and y² + By',
      'Adding (b/2)² to both sides',
      'Determining radius r = √r²'
    ]
  },
  {
    id: 'math-sec1-l6-radians-unit-circle',
    sectionNumber: 1,
    sectionTitle: 'Geometry & Trigonometry',
    lessonNumber: 6,
    lessonTitle: 'Radians & The Unit Circle',
    badge: 'Trigonometry Vault',
    subtitle: 'Degree-to-radian conversions, special angle benchmarks, and unit circle coordinates (cos θ, sin θ).',
    formulas: [
      {
        label: 'Degrees to Radians Conversion',
        formula: 'Radians = Degrees × (π / 180°)',
        displayMath: '\\text{Radians} = \\text{Degrees} \\times \\left(\\frac{\\pi}{180^\\circ}\\right)',
        explanation: 'Multiply degrees by π and divide by 180°.'
      },
      {
        label: 'Radians to Degrees Conversion',
        formula: 'Degrees = Radians × (180° / π)',
        displayMath: '\\text{Degrees} = \\text{Radians} \\times \\left(\\frac{180^\\circ}{\\pi}\\right)',
        explanation: 'Multiply radians by 180° and divide by π.'
      },
      {
        label: 'Unit Circle Coordinates (r = 1)',
        formula: 'x = cos θ  |  y = sin θ  |  tan θ = y / x = sin θ / cos θ',
        displayMath: 'x = \\cos \\theta, \\quad y = \\sin \\theta, \\quad \\tan \\theta = \\frac{y}{x} = \\frac{\\sin \\theta}{\\cos \\theta}',
        explanation: 'On the unit circle centered at the origin with radius 1, x-coordinate is cos θ and y-coordinate is sin θ.'
      }
    ],
    theoremsAndRules: [
      'Essential Angle Benchmarks to Memorize:',
      '• 30° = π/6 rad',
      '• 45° = π/4 rad',
      '• 60° = π/3 rad',
      '• 90° = π/2 rad',
      '• 180° = π rad',
      '• 360° = 2π rad',
      'Pythagorean Trig Identity on Unit Circle: sin² θ + cos² θ = 1'
    ],
    trapsAndWarnings: [
      'Multiplying by 180/π instead of π/180 when converting from degrees to radians.',
      'Reversing coordinates: x is ALWAYS cos θ, and y is ALWAYS sin θ.'
    ],
    conceptsForLogging: [
      'Degrees to radians: Degrees × (π/180)',
      'Radians to degrees: Radians × (180/π)',
      'Benchmark angles: π/6, π/4, π/3, π/2, π, 2π',
      'Unit circle coordinates: (cos θ, sin θ)',
      'Tangent quotient: tan θ = sin θ / cos θ',
      'Identity: sin² θ + cos² θ = 1'
    ]
  }
];

// ==========================================
// SECTION 2: ALGEBRA, DATA, AND ADVANCED MATH
// ==========================================
export const MATH_ALGEBRA_DATA_ADVANCED_UNITS: {
  unitId: string;
  unitNumber: number;
  unitTitle: string;
  badge: string;
  description: string;
  lessons: MathLesson[];
}[] = [
  {
    unitId: 'math-sec2-u1-linear',
    unitNumber: 1,
    unitTitle: 'Linear Equations, Graphs & Systems',
    badge: 'Foundation & Systems',
    description: 'Forms of lines, slope rates of change, parallel and perpendicular slopes, linear system solutions condition table, and inequalities.',
    lessons: [
      {
        id: 'math-u1-forms-of-lines',
        sectionNumber: 2,
        sectionTitle: 'Algebra, Data & Advanced Math',
        unitNumber: 1,
        unitTitle: 'Linear Equations, Graphs & Systems',
        lessonNumber: 1,
        lessonTitle: 'Forms of Lines & Slopes',
        badge: 'Core Algebra',
        subtitle: 'Slope-intercept, standard form, rates of change, and parallel/perpendicular slope relationships.',
        formulas: [
          {
            label: 'Slope-Intercept Form',
            formula: 'y = mx + b',
            displayMath: 'y = mx + b',
            explanation: 'm = slope (rate of change), b = y-intercept (initial value at x = 0).'
          },
          {
            label: 'Slope Formula (Rate of Change)',
            formula: 'm = (y₂ - y₁) / (x₂ - x₁) = Δy / Δx',
            displayMath: 'm = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{\\Delta y}{\\Delta x}',
            explanation: 'Vertical change over horizontal change between two points.'
          },
          {
            label: 'Standard Form',
            formula: 'Ax + By = C',
            displayMath: 'Ax + By = C',
            explanation: 'Slope = -A/B, y-intercept = C/B, x-intercept = C/A.'
          },
          {
            label: 'Parallel Lines',
            formula: 'm₁ = m₂',
            displayMath: 'm_1 = m_2',
            explanation: 'Parallel lines have identical slopes and different y-intercepts.'
          },
          {
            label: 'Perpendicular Lines',
            formula: 'm₂ = -1 / m₁  (Opposite Reciprocal)',
            displayMath: 'm_2 = -\\frac{1}{m_1}',
            explanation: 'Slopes multiply to -1 (e.g., 2/3 becomes -3/2).'
          }
        ],
        theoremsAndRules: [
          'Horizontal Line: y = c (Slope = 0)',
          'Vertical Line: x = c (Slope = undefined)',
          'Point-Slope Form: y - y₁ = m(x - x₁)'
        ],
        trapsAndWarnings: [
          'Confusing negative reciprocal with just negative: Perpendicular to 4 is -1/4, not -4.',
          'Subtracting coordinates in reverse order: (y₂ - y₁) / (x₁ - x₂) gives incorrect negative slope.'
        ],
        conceptsForLogging: [
          'Slope-intercept form y = mx + b',
          'Slope calculation m = (y₂-y₁)/(x₂-x₁)',
          'Standard form Ax + By = C: slope -A/B',
          'Parallel lines: m₁ = m₂',
          'Perpendicular lines: m₂ = -1/m₁'
        ]
      },
      {
        id: 'math-u1-linear-systems-solutions',
        sectionNumber: 2,
        sectionTitle: 'Algebra, Data & Advanced Math',
        unitNumber: 1,
        unitTitle: 'Linear Equations, Graphs & Systems',
        lessonNumber: 2,
        lessonTitle: 'Solutions for Linear Systems',
        badge: 'Guaranteed 750+ Topic',
        subtitle: 'The ratio condition table for 1 unique solution, no solution (parallel), and infinitely many solutions.',
        formulas: [
          {
            label: '1 Unique Solution Condition',
            formula: 'a₁ / a₂ ≠ b₁ / b₂',
            displayMath: '\\frac{a_1}{a_2} \\neq \\frac{b_1}{b_2}',
            explanation: 'Different slopes ──► Intersecting lines ──► Exactly 1 (x, y) point of intersection.'
          },
          {
            label: '0 Solutions (No Solution / Parallel)',
            formula: 'a₁ / a₂ = b₁ / b₂ ≠ c₁ / c₂',
            displayMath: '\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\neq \\frac{c_1}{c_2}',
            explanation: 'Same slopes, different y-intercepts ──► Parallel lines ──► Never intersect.'
          },
          {
            label: 'Infinitely Many Solutions',
            formula: 'a₁ / a₂ = b₁ / b₂ = c₁ / c₂',
            displayMath: '\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}',
            explanation: 'Same slopes, same y-intercepts ──► Same exact line ──► Overlap at every point.'
          }
        ],
        methods: [
          {
            title: 'Linear System Conditions Summary',
            steps: [
              'Condition: a₁/a₂ ≠ b₁/b₂ | Graph: Intersecting Lines | Solutions: 1 Unique Solution (x, y)',
              'Condition: a₁/a₂ = b₁/b₂ (≠ c₁/c₂) | Graph: Parallel Lines | Solutions: 0 Solutions (No Solution)',
              'Condition: a₁/a₂ = b₁/b₂ = c₁/c₂ | Graph: Same Exact Line | Solutions: Infinitely Many Solutions'
            ]
          }
        ],
        trapsAndWarnings: [
          'Confusing No Solution with Infinitely Many: No solution requires the constant ratio to be DIFFERENT (≠ c₁/c₂).',
          'Attempting substitution with complex fractions when checking ratio coefficients takes 5 seconds.'
        ],
        conceptsForLogging: [
          'Linear system: 1 unique solution (a₁/a₂ ≠ b₁/b₂)',
          'Linear system: No solution parallel (a₁/a₂ = b₁/b₂ ≠ c₁/c₂)',
          'Linear system: Infinitely many solutions (a₁/a₂ = b₁/b₂ = c₁/c₂)',
          'Desmos slider hack for unknown constant k'
        ]
      },
      {
        id: 'math-u1-linear-inequalities',
        sectionNumber: 2,
        sectionTitle: 'Algebra, Data & Advanced Math',
        unitNumber: 1,
        unitTitle: 'Linear Equations, Graphs & Systems',
        lessonNumber: 3,
        lessonTitle: 'Linear Inequalities & Shading',
        badge: 'Trap Alert',
        subtitle: 'Negative sign flip rule, dashed vs solid boundary lines, and half-plane shading.',
        formulas: [
          {
            label: 'Negative Multiplier / Divisor Sign Flip',
            formula: '-3x ≥ 15  ──►  x ≤ -5',
            displayMath: '-3x \\ge 15 \\implies x \\le -5',
            explanation: 'Multiplying or dividing by a negative number ALWAYS reverses the direction of the inequality sign.'
          }
        ],
        theoremsAndRules: [
          'Boundary Lines: < or > ──► Dashed boundary line (points on line are NOT solutions)',
          'Boundary Lines: ≤ or ≥ ──► Solid boundary line (points on line ARE solutions)',
          'Shading: y > or y ≥ ──► Shade ABOVE the boundary line',
          'Shading: y < or y ≤ ──► Shade BELOW the boundary line',
          'Test Point Check: Test (0, 0) to verify which side of the line satisfies the inequality.'
        ],
        trapsAndWarnings: [
          'Forgetting to flip the inequality sign when dividing both sides by a negative coefficient.',
          'Selecting a point on a dashed boundary line as a valid solution.'
        ],
        conceptsForLogging: [
          'Inequality: flip sign when multiplying/dividing by negative',
          'Boundary lines: dashed (<, >) vs solid (≤, ≥)',
          'Shading: above (y >) vs below (y <)',
          'Testing origin (0, 0) in systems of inequalities'
        ]
      }
    ]
  },
  {
    unitId: 'math-sec2-u2-ratios-stats',
    unitNumber: 2,
    unitTitle: 'Ratios, Percentages, and Statistics',
    badge: 'Data Analysis',
    description: 'Percent change calculations, multiplier shortcuts, mean, median, outlier sensitivity, and standard deviation spread.',
    lessons: [
      {
        id: 'math-u2-percent-change',
        sectionNumber: 2,
        sectionTitle: 'Algebra, Data & Advanced Math',
        unitNumber: 2,
        unitTitle: 'Ratios, Percentages, and Statistics',
        lessonNumber: 1,
        lessonTitle: 'The Percent Change Formula & Multipliers',
        badge: 'High Frequency',
        subtitle: 'Calculating percentage increase and decrease using direct multiplier algebra.',
        formulas: [
          {
            label: 'Percent Change Formula',
            formula: '% Change = (|New - Old| / Old) × 100%',
            displayMath: '\\% \\text{ Change} = \\frac{|\\text{New} - \\text{Old}|}{\\text{Old}} \\times 100\\%',
            explanation: 'Always divide the difference by the ORIGINAL (Old) value, never the new value.'
          },
          {
            label: 'Percentage Multipliers',
            formula: 'Increase: × (1 + r)  |  Decrease: × (1 - r)',
            displayMath: '\\text{Increase: } \\times (1 + r), \\quad \\text{Decrease: } \\times (1 - r)',
            explanation: 'Increase by 15% ──► Multiply by (1 + 0.15) = 1.15. Decrease by 25% ──► Multiply by (1 - 0.25) = 0.75.'
          }
        ],
        theoremsAndRules: [
          'Consecutive Percent Changes: Multiply the factors sequentially. A 20% increase followed by a 20% decrease = (1.20)(0.80) = 0.96 (a net 4% decrease, NOT 0% change!).'
        ],
        trapsAndWarnings: [
          'Dividing by the New value instead of the Old value.',
          'Adding percentages directly for sequential changes instead of multiplying factors.'
        ],
        conceptsForLogging: [
          'Percent change formula: (|New - Old| / Old) × 100%',
          'Percentage multiplier: Increase by r% → (1 + r)',
          'Percentage multiplier: Decrease by r% → (1 - r)',
          'Sequential percentage changes'
        ]
      },
      {
        id: 'math-u2-statistics-outliers',
        sectionNumber: 2,
        sectionTitle: 'Algebra, Data & Advanced Math',
        unitNumber: 2,
        unitTitle: 'Ratios, Percentages, and Statistics',
        lessonNumber: 2,
        lessonTitle: 'Statistics, Outliers & Standard Deviation',
        badge: 'Conceptual Mastery',
        subtitle: 'Mean vs. median outlier resistance, spread, and standard deviation comparisons.',
        formulas: [
          {
            label: 'Mean (Average)',
            formula: 'x̄ = Σx / n = (Sum of all values) / (Number of values)',
            displayMath: '\\bar{x} = \\frac{\\Sigma x}{n} = \\frac{\\text{Sum of all values}}{\\text{Number of values}}',
            explanation: 'Arithmetic average calculated by dividing the sum of elements by count.'
          },
          {
            label: 'Median',
            formula: 'Middle value when ordered from smallest to largest',
            displayMath: '\\text{Median} = \\text{Middle value (or average of two middle values)}',
            explanation: 'For odd n: exact middle item. For even n: average of the two central numbers.'
          },
          {
            label: 'Standard Deviation (σ)',
            formula: 'Measure of spread/dispersion around the mean',
            displayMath: '\\sigma = \\text{Spread of data values around the mean } \\bar{x}',
            explanation: 'High spread from mean ──► High σ. Tightly clustered data ──► Low σ.'
          }
        ],
        theoremsAndRules: [
          'Outlier Impact:',
          '• Mean is heavily pulled toward extreme outliers (high outlier increases mean, low outlier decreases mean).',
          '• Median is resistant and barely shifts when extreme values are added or removed.',
          'Adding a constant c to every data point: Mean and Median increase by c, but Standard Deviation remains UNCHANGED.',
          'Multiplying every data point by c: Mean, Median, and Standard Deviation are all multiplied by |c|.'
        ],
        trapsAndWarnings: [
          'Believing that a wider range always means a higher mean: Range measures spread, not central tendency.',
          'Thinking adding 10 to every test score changes the standard deviation: Spacing between scores remains identical, so σ is unchanged.'
        ],
        conceptsForLogging: [
          'Mean calculation x̄ = Σx / n',
          'Median: middle value in ordered list',
          'Outlier impact: mean is pulled, median is resistant',
          'Standard deviation: measure of clustering vs spread',
          'Transformations: adding constant preserves σ'
        ]
      }
    ]
  },
  {
    unitId: 'math-sec2-u3-quadratics-exponentials',
    unitNumber: 3,
    unitTitle: 'Quadratics, Polynomials, and Exponentials',
    badge: 'Advanced Math',
    description: 'The 3 quadratic forms, the quadratic formula, discriminant root analysis, 6 exponent rules, and exponential growth/decay models.',
    lessons: [
      {
        id: 'math-u3-three-quadratic-forms',
        sectionNumber: 2,
        sectionTitle: 'Algebra, Data & Advanced Math',
        unitNumber: 3,
        unitTitle: 'Quadratics, Polynomials, and Exponentials',
        lessonNumber: 1,
        lessonTitle: 'The Three Quadratic Forms & Vertex',
        badge: 'Core Advanced Math',
        subtitle: 'Standard, vertex, and factored forms, vertex coordinates, and symmetry.',
        formulas: [
          {
            label: 'Standard Form',
            formula: 'y = ax² + bx + c',
            displayMath: 'y = ax^2 + bx + c',
            explanation: 'y-intercept = (0, c). Vertex x-coordinate = -b / (2a).'
          },
          {
            label: 'Vertex Form',
            formula: 'y = a(x - h)² + k',
            displayMath: 'y = a(x - h)^2 + k',
            explanation: 'Vertex = (h, k). If a > 0, k is the MINIMUM. If a < 0, k is the MAXIMUM.'
          },
          {
            label: 'Factored Form',
            formula: 'y = a(x - r₁)(x - r₂)',
            displayMath: 'y = a(x - r_1)(x - r_2)',
            explanation: 'Roots / x-intercepts = (r₁, 0) and (r₂, 0). Axis of symmetry: x = (r₁ + r₂) / 2.'
          }
        ],
        theoremsAndRules: [
          'Parabola opens UP (a > 0) ──► Vertex is the absolute MINIMUM value.',
          'Parabola opens DOWN (a < 0) ──► Vertex is the absolute MAXIMUM value.',
          'Axis of symmetry is always halfway between the two roots: x = (r₁ + r₂) / 2 = -b / (2a).'
        ],
        trapsAndWarnings: [
          'Forgetting that the vertex x-coordinate in standard form requires dividing by 2a: -b / (2a), not just -b / a.',
          'Mixing up maximum vs minimum based on sign of a.'
        ],
        conceptsForLogging: [
          'Quadratic standard form: y = ax² + bx + c',
          'Quadratic vertex x = -b / (2a)',
          'Quadratic vertex form: y = a(x - h)² + k',
          'Quadratic factored form: y = a(x - r₁)(x - r₂)',
          'Parabola symmetry and min/max values'
        ]
      },
      {
        id: 'math-u3-quadratic-formula-discriminant',
        sectionNumber: 2,
        sectionTitle: 'Algebra, Data & Advanced Math',
        unitNumber: 3,
        unitTitle: 'Quadratics, Polynomials, and Exponentials',
        lessonNumber: 2,
        lessonTitle: 'Quadratic Formula & The Discriminant',
        badge: 'High Frequency',
        subtitle: 'Root solving formula and the discriminant (b² - 4ac) number-of-solutions diagnostic.',
        formulas: [
          {
            label: 'Quadratic Formula',
            formula: 'x = (-b ± √(b² - 4ac)) / (2a)',
            displayMath: 'x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}',
            explanation: 'Solves any quadratic equation ax² + bx + c = 0.'
          },
          {
            label: 'Discriminant (D)',
            formula: 'D = b² - 4ac',
            displayMath: 'D = b^2 - 4ac',
            explanation: 'The expression under the radical that reveals the number and nature of real solutions.'
          }
        ],
        theoremsAndRules: [
          'Discriminant Diagnostics:',
          '• D > 0 ──► 2 Distinct Real Solutions (parabola crosses x-axis twice)',
          '• D = 0 ──► 1 Real Solution / Repeated Root (parabola vertex touches x-axis once)',
          '• D < 0 ──► 0 Real Solutions (parabola never touches x-axis, 2 complex roots)',
          'Discriminant in Tangent Problems: When a line and parabola are tangent, set them equal and enforce b² - 4ac = 0.'
        ],
        trapsAndWarnings: [
          'Squaring a negative b-value incorrectly: (-4)² is +16, NOT -16.',
          'Forgetting to set the quadratic equal to 0 before identifying a, b, and c.'
        ],
        conceptsForLogging: [
          'Quadratic formula x = (-b ± √(b²-4ac)) / 2a',
          'Discriminant D = b² - 4ac',
          'D > 0: 2 real solutions',
          'D = 0: 1 real solution (tangency)',
          'D < 0: 0 real solutions'
        ]
      },
      {
        id: 'math-u3-exponent-rules',
        sectionNumber: 2,
        sectionTitle: 'Algebra, Data & Advanced Math',
        unitNumber: 3,
        unitTitle: 'Quadratics, Polynomials, and Exponentials',
        lessonNumber: 3,
        lessonTitle: 'Exponent & Radical Rules',
        badge: 'Foundation Rulebook',
        subtitle: 'The 6 core laws of exponents and rational exponent fraction conversions.',
        formulas: [
          {
            label: 'Product Rule',
            formula: 'xᵃ · xᵇ = xᵃ⁺ᵇ',
            displayMath: 'x^a \\cdot x^b = x^{a+b}',
            explanation: 'When multiplying same bases, add the exponents.'
          },
          {
            label: 'Power to a Power',
            formula: '(xᵃ)ᵇ = xᵃᵇ',
            displayMath: '(x^a)^b = x^{ab}',
            explanation: 'When raising a power to a power, multiply the exponents.'
          },
          {
            label: 'Negative Exponent Rule',
            formula: 'x⁻ᵃ = 1 / xᵃ',
            displayMath: 'x^{-a} = \\frac{1}{x^a}',
            explanation: 'Negative exponents invert base into the denominator.'
          },
          {
            label: 'Quotient Rule',
            formula: 'xᵃ / xᵇ = xᵃ⁻ᵇ',
            displayMath: '\\frac{x^a}{x^b} = x^{a-b}',
            explanation: 'When dividing same bases, subtract exponents.'
          },
          {
            label: 'Rational Exponent (Fractional Power)',
            formula: 'xᵃᐟᵇ = ᵇ√(xᵃ) = (ᵇ√x)ᵃ',
            displayMath: 'x^{a/b} = \\sqrt[b]{x^a} = (\\sqrt[b]{x})^a',
            explanation: 'Numerator = power, Denominator = root.'
          },
          {
            label: 'Zero Power Rule',
            formula: 'x⁰ = 1  (for x ≠ 0)',
            displayMath: 'x^0 = 1',
            explanation: 'Any non-zero base raised to the zero power equals 1.'
          }
        ],
        theoremsAndRules: [
          'Rewriting bases: 4^(2x) = (2²)^(2x) = 2^(4x). Converting to common prime bases is the #1 trick for hard exponential SAT problems.'
        ],
        trapsAndWarnings: [
          'Adding exponents when bases are different: 2³ · 3³ is NOT 6⁶.',
          'Reversing rational exponent fractions: x^(2/3) is cube root of x squared, NOT square root of x cubed.'
        ],
        conceptsForLogging: [
          'Exponent rule: xᵃ · xᵇ = xᵃ⁺ᵇ',
          'Exponent rule: (xᵃ)ᵇ = xᵃᵇ',
          'Exponent rule: x⁻ᵃ = 1/xᵃ',
          'Exponent rule: xᵃ/xᵇ = xᵃ⁻ᵇ',
          'Rational exponent: xᵃᐟᵇ = ᵇ√(xᵃ)',
          'Zero exponent: x⁰ = 1',
          'Common prime base conversion'
        ]
      },
      {
        id: 'math-u3-exponential-growth-decay',
        sectionNumber: 2,
        sectionTitle: 'Algebra, Data & Advanced Math',
        unitNumber: 3,
        unitTitle: 'Quadratics, Polynomials, and Exponentials',
        lessonNumber: 4,
        lessonTitle: 'Exponential Growth & Decay',
        badge: 'Word Problems',
        subtitle: 'Modeling population, interest, doubling periods, and monthly compounding.',
        formulas: [
          {
            label: 'General Exponential Equation',
            formula: 'P(t) = P₀ · (b)ᵗ',
            displayMath: 'P(t) = P_0 \\cdot (b)^t',
            explanation: 'P₀ = initial amount at t = 0, b = growth/decay factor, t = time periods elapsed.'
          },
          {
            label: 'Growth vs. Decay Factors',
            formula: 'Growth: b = 1 + r (b > 1)  |  Decay: b = 1 - r (0 < b < 1)',
            displayMath: '\\text{Growth: } b = 1 + r, \\quad \\text{Decay: } b = 1 - r',
            explanation: 'r is the percent rate expressed as a decimal (e.g., 8% growth ──► b = 1.08).'
          },
          {
            label: 'Doubling Period Rule',
            formula: 'P(d) = P₀ · (2)^(d / k)',
            displayMath: 'P(d) = P_0 \\cdot (2)^{d / k}',
            explanation: 'If a quantity doubles every k days, the exponent is d / k (e.g., doubling every 4 days ──► 2^(d/4)).'
          },
          {
            label: 'Compounding Periodic Interest',
            formula: 'P(t) = P₀ · (1 + r / n)^(nt)',
            displayMath: 'P(t) = P_0 \\cdot \\left(1 + \\frac{r}{n}\\right)^{nt}',
            explanation: 'Compounding monthly (n = 12, t in years) ──► P(t) = P₀ · (1 + r/12)^(12t).'
          }
        ],
        theoremsAndRules: [
          'Initial Value Trick: When t = 0, P(0) = P₀ · b⁰ = P₀. The constant in front of the base is ALWAYS the initial value at t = 0.'
        ],
        trapsAndWarnings: [
          'Using the period multiplier in the exponent incorrectly: If doubling every 5 hours, exponent is h/5, NOT 5h.',
          'Confusing growth rate r with growth factor b: A 12% increase means b = 1.12, not 0.12.'
        ],
        conceptsForLogging: [
          'Exponential model P(t) = P₀(b)ᵗ',
          'Growth factor b = 1 + r',
          'Decay factor b = 1 - r',
          'Doubling time exponent d/k',
          'Periodic compounding (1 + r/n)^(nt)'
        ]
      }
    ]
  }
];

// ==========================================
// SECTION 3: HOW DIFFICULTIES ESCALATE (MATH MATRIX / GRAPH)
// ==========================================
export const MATH_DIFFICULTY_SCALING_MATRIX: MathDifficultyRow[] = [
  {
    id: 'diff-math-overall-architecture',
    domain: 'Overall Problem Architecture',
    foundationsLevel: '1-step direct formula execution. Clean whole numbers. Diagram explicitly provided. (e.g., Given r = 4, find Area = πr²).',
    mediumLevel: '2-step problems with fractions, decimals, unit conversions, or backwards solving. (e.g., Given V = 100π and h = 4, solve backwards for r).',
    advancedLevel: 'Multi-step synthesis combining 2-3 topics. Uses unknown constants (a, b, c, k) instead of real numbers. No figure provided. (e.g., Line y = c is tangent to a circle; find c using discriminants).',
    keyTakeaway: 'Hard questions test algebraic flexibility and concept synthesis, not just arithmetic speed.'
  },
  {
    id: 'diff-math-geometry-trig',
    domain: 'Geometry & 3D Volume',
    foundationsLevel: 'Diagram given. Direct calculation using reference sheet (e.g. find volume of box with l=2, w=3, h=5).',
    mediumLevel: 'Diagram given with missing interior altitude or 30-60-90 ratios. Backwards solving for radius or cylinder height.',
    advancedLevel: 'No figure provided. Multi-solid synthesis (right triangle nested in circular sector, circle tangent to line forming 90° with radius), or completing square for circle.',
    keyTakeaway: 'Always spend 5 seconds sketching figures on scratch paper when no diagram is provided.'
  },
  {
    id: 'diff-math-linear-systems',
    domain: 'Linear Equations & Systems',
    foundationsLevel: 'Solve a single linear equation 3x + 5 = 20 or read slope and y-intercept from a graph.',
    mediumLevel: 'Solve a standard 2x2 system for x or y using substitution or elimination with fractions.',
    advancedLevel: 'System containing unknown constant k. Find k for which the system has NO SOLUTION or INFINITELY MANY SOLUTIONS using slope ratio tests or Desmos sliders.',
    keyTakeaway: 'Equate coefficient ratios a₁/a₂ = b₁/b₂ ≠ c₁/c₂ for zero solutions in 5 seconds flat.'
  },
  {
    id: 'diff-math-quadratics-advanced',
    domain: 'Quadratics & Advanced Math',
    foundationsLevel: 'Factor a simple quadratic like x² - 5x + 6 = 0 with integer roots.',
    mediumLevel: 'Use quadratic formula with radical solutions or find vertex coordinates from standard form x = -b/(2a).',
    advancedLevel: 'Discriminant tangency synthesis (b² - 4ac = 0), matching vertex form parameters with unknown constants, or equivalent exponential base shifts.',
    keyTakeaway: 'Tangency between a line and a curve always means Discriminant D = 0.'
  },
  {
    id: 'diff-math-ratios-data',
    domain: 'Ratios, Percent & Data Analysis',
    foundationsLevel: 'Calculate a single percentage of a number or find mean of 5 whole numbers.',
    mediumLevel: 'Calculate percent change between old and new values or read two-way tables with conditional probabilities.',
    advancedLevel: 'Sequential compound percentage shifts, outlier impact analysis on mean vs median, or analyzing standard deviation changes under linear transformations.',
    keyTakeaway: 'Mean is dragged by outliers; median and standard deviation under constant additions are resistant.'
  }
];

// ==========================================
// SECTION 4: THE DESMOS SPEED CHEATS
// ==========================================
export const MATH_DESMOS_CHEATS: MathDesmosCheat[] = [
  {
    id: 'desmos-cheat-1-single-variable',
    title: 'Solve Any Single-Variable Equation',
    tagline: 'Zero manual algebra & zero extraneous solution errors.',
    badge: 'Cheat #1 • Universal Solver',
    scenario: 'Any complex linear, quadratic, absolute value, or rational equation (e.g., 3(2x - 5) + 4 = 2(x + 7) or √(2x + 6) = x - 1).',
    steps: [
      {
        stepNumber: 1,
        action: 'In Desmos row 1, type the left side of the equation as y = Left Side:',
        command: 'y = 3(2x - 5) + 4'
      },
      {
        stepNumber: 2,
        action: 'In Desmos row 2, type the right side of the equation as y = Right Side:',
        command: 'y = 2(x + 7)'
      },
      {
        stepNumber: 3,
        action: 'Click the gray intersection point on the graph.',
        note: 'The x-coordinate of the intersection point is your exact answer. If there are two intersection points, both are the valid real roots!'
      }
    ],
    proTip: 'This completely eliminates algebraic sign errors, factoring headaches, and false extraneous solutions.'
  },
  {
    id: 'desmos-cheat-2-circle-graphing',
    title: 'Graph Circles Without Completing the Square',
    tagline: 'Find center and radius in 5 seconds without manual algebra.',
    badge: 'Cheat #2 • Geometry Shortcut',
    scenario: 'Circle given in expanded form: x² + y² - 6x + 8y = 24.',
    steps: [
      {
        stepNumber: 1,
        action: 'Type the entire expanded equation directly into Desmos row 1:',
        command: 'x^2 + y^2 - 6x + 8y = 24'
      },
      {
        stepNumber: 2,
        action: 'Desmos plots the complete circle immediately. Click the leftmost edge and rightmost edge of the circle.',
        note: 'For this circle, the left edge is (-4, -4) and the right edge is (10, -4).'
      },
      {
        stepNumber: 3,
        action: 'Calculate the center and radius from the edges:',
        note: '• Midpoint x: (-4 + 10) / 2 = 3 ──► Center = (3, -4)\n• Radius: Distance is 14 units across ──► Radius = 14 / 2 = 7'
      }
    ],
    proTip: 'Desmos natively graphs non-function conic equations. Never waste 3 minutes completing squares by hand!'
  },
  {
    id: 'desmos-cheat-3-regression-slope',
    title: 'Find Slope & Equation Instantly (Regression)',
    tagline: 'Get slope m, y-intercept b, or quadratic coefficients via ~ regression.',
    badge: 'Cheat #3 • Table Regression',
    scenario: 'Given two points (e.g. (-3, 4) and (5, -2)) and asked for the slope or full line equation.',
    steps: [
      {
        stepNumber: 1,
        action: 'Click the + (Add Item) button in the top left of Desmos and choose Table.',
        note: 'A table with columns x₁ and y₁ will appear.'
      },
      {
        stepNumber: 2,
        action: 'Enter the points into the x₁ and y₁ rows:',
        note: 'Row 1: x₁ = -3, y₁ = 4\nRow 2: x₁ = 5, y₁ = -2'
      },
      {
        stepNumber: 3,
        action: 'In the next blank row below the table, type the regression model:',
        command: 'y1 ~ m x1 + b'
      },
      {
        stepNumber: 4,
        action: 'Read the statistics output directly below your equation:',
        note: 'Desmos prints m = -0.75 (-3/4) and b = 1.75 (7/4) instantly!'
      }
    ],
    proTip: 'Works for parabolas too! Type y1 ~ a x1^2 + b x1 + c to fit 3 points onto a quadratic curve.'
  },
  {
    id: 'desmos-cheat-4-slider-hack',
    title: 'The Slider Hack for "No Solution"',
    tagline: 'Visualizing parallel lines and finding unknown constants effortlessly.',
    badge: 'Cheat #4 • Parameter Slider',
    scenario: 'Problem: "For what value of k does the system 2x - 3y = 7 and 6x - ky = 12 have no solution?"',
    steps: [
      {
        stepNumber: 1,
        action: 'Type the first equation into Desmos row 1:',
        command: '2x - 3y = 7'
      },
      {
        stepNumber: 2,
        action: 'Type the second equation with the letter k into row 2:',
        command: '6x - ky = 12'
      },
      {
        stepNumber: 3,
        action: 'Click the blue "add slider: k" prompt that appears below the equation.',
        note: 'A slider bar for k will be created.'
      },
      {
        stepNumber: 4,
        action: 'Drag the slider (or type values) until the two lines become completely parallel.',
        note: 'When k = 9, the lines have identical slopes and never cross! Read k = 9 directly from the slider.'
      }
    ],
    proTip: 'You can also use this for tangency: adjust k until a line and parabola touch at exactly ONE single point.'
  }
];
