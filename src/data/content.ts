export interface Plan {
  id: 'lean-mass' | 'recomposition' | 'competition-cut';
  name: string;
  price: number;
  cadence: string;
  badge?: string;
  description: string;
  features: string[];
}

export const PLANS: Record<string, Plan> = {
  'lean-mass': {
    id: 'lean-mass',
    name: 'Lean Mass Protocol',
    price: 18.4,
    cadence: '/mo',
    description: 'A slight surplus tuned for people adding first pull-ups and dips without piling on weight.',
    features: [
      '7-day rotating menu',
      'Grocery list included',
      'Protein-forward, budget-aware',
    ],
  },
  recomposition: {
    id: 'recomposition',
    name: 'Recomposition Blueprint',
    price: 24.6,
    cadence: '/mo',
    badge: 'Most chosen',
    description: 'Maintenance calories with a protein target high enough to build skill strength while losing fat.',
    features: [
      '14-day rotating menu',
      'Training-day / rest-day macros',
      'Weekly grocery + prep guide',
    ],
  },
  'competition-cut': {
    id: 'competition-cut',
    name: 'Competition Cut',
    price: 31.9,
    cadence: ' one-time',
    description: 'An 8-week deficit for people peaking strength-to-weight ratio ahead of a specific date.',
    features: [
      '8-week structured taper',
      'Refeed days mapped in',
      'Strength-retention checklist',
    ],
  },
};

export interface Exercise {
  index: string;
  name: string;
  description: string;
  sets: string;
  label: string;
}

export const FOUNDATIONS_EXERCISES: Exercise[] = [
  {
    index: '01',
    name: 'Incline Pike Push-Up',
    description: 'Hands on the floor, hips high, feet elevated on a step. Lower the crown of your head toward your hands.',
    sets: '3 × 8',
    label: 'Sets × Reps',
  },
  {
    index: '02',
    name: 'Scapular Pull-Ups',
    description: 'Dead hang on a bar, elbows straight, pull the shoulder blades down and together without bending the arms.',
    sets: '3 × 6',
    label: 'Sets × Reps',
  },
  {
    index: '03',
    name: 'Tempo Bodyweight Squat',
    description: '4-second descent, 1-second pause at depth, explode up. Knees track over the toes throughout.',
    sets: '3 × 10',
    label: 'Sets × Reps',
  },
  {
    index: '04',
    name: 'Ring Rows (or Table Rows)',
    description: 'Body straight, chest to hands at the top. Adjust foot position to change difficulty — feet closer is harder.',
    sets: '3 × 10',
    label: 'Sets × Reps',
  },
  {
    index: '05',
    name: 'Hollow Body Hold',
    description: 'Lower back pressed flat, ribs down, arms and legs extended. Breathe without letting the back arch off the floor.',
    sets: '3 × 20s',
    label: 'Sets × Time',
  },
  {
    index: '06',
    name: 'Wall-Assisted Handstand Hold',
    description: 'Chest to the wall, stack shoulders over wrists, squeeze the whole body tight. Step down before form breaks.',
    sets: '3 × 15s',
    label: 'Sets × Time',
  },
];

export interface MealRow {
  tag: string;
  name: string;
  kcal: string;
}

export const SAMPLE_DAY_MEALS: MealRow[] = [
  {
    tag: 'Breakfast',
    name: 'Cottage cheese, blueberries, and toasted oats with cinnamon',
    kcal: '510 kcal',
  },
  {
    tag: 'Lunch',
    name: 'Seared chicken thigh, farro, roasted broccolini, tahini drizzle',
    kcal: '640 kcal',
  },
  {
    tag: 'Pre-Training',
    name: 'Rice cakes with honey and a banana',
    kcal: '230 kcal',
  },
  {
    tag: 'Dinner',
    name: 'Baked salmon, roasted potatoes, charred green beans, lemon',
    kcal: '610 kcal',
  },
  {
    tag: 'Evening',
    name: 'Greek yogurt with walnuts and dark chocolate shavings',
    kcal: '190 kcal',
  },
];

export const TESTIMONIALS = [
  {
    body: '"Followed the Skill Ladder for eleven weeks and got my first muscle-up on a park bar, no coach, no gym membership."',
    name: 'Marcus Ihejirika',
    sub: 'Added 4 clean pull-ups in 11 weeks',
    avatar: 'MI',
  },
  {
    body: '"The Recomposition Blueprint stopped me from either bulking blindly or crash-dieting before a shoot. Macros just matched what I was training."',
    name: 'Sofia Bianchi Reyes',
    sub: 'Down 3.8kg over 9 weeks',
    avatar: 'SB',
  },
  {
    body: '"Hollow Body Circuit fixed a lower back that three different gyms couldn\'t. Twenty minutes, no equipment, every morning."',
    name: 'Priya Chandrasekaran',
    sub: 'Training 14 months, injury-free',
    avatar: 'PC',
  },
];
