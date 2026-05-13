import { Subject, Unit, GymSession, SubjectId } from '../types';

export const SUBJECTS: Subject[] = [
  {
    id: 'mechanics',
    label: 'Engineering Mechanics',
    shortLabel: 'Mechanics',
    color: 'var(--subject-mechanics)',
    totalUnits: 5,
    icon: 'Cog'
  },
  {
    id: 'physics',
    label: 'Engineering Physics',
    shortLabel: 'Physics',
    color: 'var(--subject-physics)',
    totalUnits: 5,
    icon: 'Atom'
  },
  {
    id: 'm2',
    label: 'Engineering Mathematics II',
    shortLabel: 'M2',
    color: 'var(--subject-m2)',
    totalUnits: 4,
    icon: 'Sigma'
  },
  {
    id: 'bee',
    label: 'Basic Electrical Engineering',
    shortLabel: 'BEE',
    color: 'var(--subject-bee)',
    totalUnits: 5,
    icon: 'Zap'
  },
  {
    id: 'pps',
    label: 'Programming for Problem Solving',
    shortLabel: 'PPS',
    color: 'var(--subject-pps)',
    totalUnits: 5,
    icon: 'Code2'
  }
];

export const UNITS: Unit[] = [
  // MECHANICS
  {
    id: 'mechanics_u1',
    subjectId: 'mechanics',
    unitNumber: 1,
    label: 'Unit 1 — Statics Fundamentals',
    weight: 'light',
    status: 'revision_only',
    isRevisionOnly: true,
    scheduledDate: '2026-05-04',
    topics: [
      { id: 'm1_t1', label: 'Resolution of Forces' },
      { id: 'm1_t2', label: 'Resultant of Concurrent Force System' },
      { id: 'm1_t3', label: 'Resultant of Parallel Force System' },
      { id: 'm1_t4', label: "Varignon's Theorem" },
      { id: 'm1_t5', label: 'Centroid' },
      { id: 'm1_t6', label: 'Moment of Inertia' }
    ]
  },
  {
    id: 'mechanics_u2',
    subjectId: 'mechanics',
    unitNumber: 2,
    label: 'Unit 2 — Equilibrium',
    weight: 'moderate',
    status: 'not_started',
    isRevisionOnly: false,
    scheduledDate: '2026-05-11',
    topics: [
      { id: 'm2_t1', label: 'Equilibrium — Concurrent Force System' },
      { id: 'm2_t2', label: 'Equilibrium — Non-concurrent Force System' },
      { id: 'm2_t3', label: "Lami's Theorem" },
      { id: 'm2_t4', label: 'Beams' }
    ]
  },
  {
    id: 'mechanics_u3',
    subjectId: 'mechanics',
    unitNumber: 3,
    label: 'Unit 3 — Friction & Trusses',
    weight: 'heavy',
    status: 'not_started',
    isRevisionOnly: false,
    scheduledDate: '2026-05-12',
    topics: [
      { id: 'm3_t1', label: 'Friction — Inclined Plane' },
      { id: 'm3_t2', label: 'Friction — Ladder' },
      { id: 'm3_t3', label: 'Belt Friction' },
      { id: 'm3_t4', label: 'Trusses' },
      { id: 'm3_t5', label: 'Zero Force Members' },
      { id: 'm3_t6', label: 'Method of Joints' },
      { id: 'm3_t7', label: 'Method of Sections' }
    ]
  },
  {
    id: 'mechanics_u4',
    subjectId: 'mechanics',
    unitNumber: 4,
    label: 'Unit 4 — Kinematics',
    weight: 'heavy',
    status: 'not_started',
    isRevisionOnly: false,
    scheduledDate: '2026-05-18',
    topics: [
      { id: 'm4_t1', label: 'Rectilinear Motion' },
      { id: 'm4_t2', label: 'Constant Acceleration' },
      { id: 'm4_t3', label: 'Variable Acceleration' },
      { id: 'm4_t4', label: 'Curvilinear Motion' },
      { id: 'm4_t5', label: 'Projectile Motion' },
      { id: 'm4_t6', label: 'Motion in a Curve' }
    ]
  },
  {
    id: 'mechanics_u5',
    subjectId: 'mechanics',
    unitNumber: 5,
    label: 'Unit 5 — Dynamics',
    weight: 'heavy',
    status: 'not_started',
    isRevisionOnly: false,
    scheduledDate: '2026-05-25',
    topics: [
      { id: 'm5_t1', label: "Newton's 2nd Law — Rectilinear & Curvilinear" },
      { id: 'm5_t2', label: 'Work-Energy Principle' },
      { id: 'm5_t3', label: 'Conservation of Energy' },
      { id: 'm5_t4', label: 'Impulse-Momentum Principle' },
      { id: 'm5_t5', label: 'Impact' }
    ]
  },
  // PHYSICS
  {
    id: 'physics_u1',
    subjectId: 'physics',
    unitNumber: 1,
    label: 'Unit 1 — Laser & Optical Fibres',
    weight: 'moderate',
    status: 'not_started',
    isRevisionOnly: false,
    scheduledDate: '2026-05-15',
    topics: [
      { id: 'p1_t1', label: 'Laser — Theory & Definitions' },
      { id: 'p1_t2', label: 'CO₂ Laser — Construction & Working' },
      { id: 'p1_t3', label: 'Holography' },
      { id: 'p1_t4', label: 'Optical Fibres — Theory & Definitions' },
      { id: 'p1_t5', label: 'Fibre Types' },
      { id: 'p1_t6', label: 'Attenuation' },
      { id: 'p1_t7', label: 'Numericals' }
    ]
  },
  {
    id: 'physics_u2',
    subjectId: 'physics',
    unitNumber: 2,
    label: 'Unit 2 — Quantum Mechanics',
    weight: 'heavy',
    status: 'not_started',
    isRevisionOnly: false,
    scheduledDate: '2026-05-21',
    topics: [
      { id: 'p2_t1', label: 'De Broglie Hypothesis' },
      { id: 'p2_t2', label: 'Particle Accelerated by K.E.' },
      { id: 'p2_t3', label: 'Particle Accelerated by Voltage' },
      { id: 'p2_t4', label: 'Properties of Matter Waves' },
      { id: 'p2_t5', label: 'De Broglie Numericals' },
      { id: 'p2_t6', label: 'Schrödinger Equation — Time Independent' },
      { id: 'p2_t7', label: 'Schrödinger Equation — Time Dependent' },
      { id: 'p2_t8', label: 'Energy of Particle in a Rigid Box' },
      { id: 'p2_t9', label: 'Scanning Tunnelling Microscope' },
      { id: 'p2_t10', label: 'Applications of Quantum Computing' }
    ]
  },
  {
    id: 'physics_u3',
    subjectId: 'physics',
    unitNumber: 3,
    label: 'Unit 3 — Wave Optics',
    weight: 'moderate',
    status: 'not_started',
    isRevisionOnly: false,
    scheduledDate: '2026-05-27',
    topics: [
      { id: 'p3_t1', label: 'Interference' },
      { id: 'p3_t2', label: 'Diffraction' },
      { id: 'p3_t3', label: 'Polarization' }
    ]
  },
  {
    id: 'physics_u4',
    subjectId: 'physics',
    unitNumber: 4,
    label: 'Unit 4 — Semiconductors & Ultrasonics',
    weight: 'light',
    status: 'not_started',
    isRevisionOnly: false,
    scheduledDate: '2026-06-01',
    topics: [
      { id: 'p4_t1', label: 'Semiconductors' },
      { id: 'p4_t2', label: 'Ultrasonics' }
    ]
  },
  {
    id: 'physics_u5',
    subjectId: 'physics',
    unitNumber: 5,
    label: 'Unit 5 — Modern Materials',
    weight: 'light',
    status: 'revision_only',
    isRevisionOnly: true,
    scheduledDate: '2026-05-07',
    topics: [
      { id: 'p5_t1', label: 'Nanoparticles' },
      { id: 'p5_t2', label: 'Superconductivity' }
    ]
  },
  // M2
  {
    id: 'm2_u1',
    subjectId: 'm2',
    unitNumber: 1,
    label: 'Unit 1 — Integration Techniques',
    weight: 'heavy',
    status: 'not_started',
    isRevisionOnly: false,
    scheduledDate: '2026-05-13',
    topics: [
      { id: 'ma1_t1', label: 'Reduction Formulae' },
      { id: 'ma1_t2', label: 'Beta Function' },
      { id: 'ma1_t3', label: 'Gamma Function' },
      { id: 'ma1_t4', label: 'Differentiation under Integral Sign (DUIS)' },
      { id: 'ma1_t5', label: 'Error Function' }
    ]
  },
  {
    id: 'm2_u2',
    subjectId: 'm2',
    unitNumber: 2,
    label: 'Unit 2 — Curves & 3D Geometry',
    weight: 'moderate',
    status: 'not_started',
    isRevisionOnly: false,
    scheduledDate: '2026-05-19',
    topics: [
      { id: 'ma2_t1', label: 'Tracing of Curves' },
      { id: 'ma2_t2', label: 'Cartesian, Polar & Parametric Curves' },
      { id: 'ma2_t3', label: 'Rectification of Curves' },
      { id: 'ma2_t4', label: 'Sphere, Cone & Cylinder' }
    ]
  },
  {
    id: 'm2_u4',
    subjectId: 'm2',
    unitNumber: 4,
    label: 'Unit 4 — Differential Equations',
    weight: 'heavy',
    status: 'not_started',
    isRevisionOnly: false,
    scheduledDate: '2026-05-22',
    topics: [
      { id: 'ma4_t1', label: 'Exact Differential Equations' },
      { id: 'ma4_t2', label: 'Equations Reducible to Exact Form' },
      { id: 'ma4_t3', label: 'Linear Differential Equations' },
      { id: 'ma4_t4', label: 'Equations Reducible to Linear Form' },
      { id: 'ma4_t5', label: "Bernoulli's Equation" }
    ]
  },
  {
    id: 'm2_u5',
    subjectId: 'm2',
    unitNumber: 5,
    label: 'Unit 5 — Applications of DEs',
    weight: 'heavy',
    status: 'not_started',
    isRevisionOnly: false,
    scheduledDate: '2026-05-28',
    topics: [
      { id: 'ma5_t1', label: 'Orthogonal Trajectories' },
      { id: 'ma5_t2', label: "Newton's Law of Cooling" },
      { id: 'ma5_t3', label: "Kirchhoff's Law of Electrical Circuits" },
      { id: 'ma5_t4', label: 'Rectilinear Motion' },
      { id: 'ma5_t5', label: 'Simple Harmonic Motion' },
      { id: 'ma5_t6', label: 'Conduction of Heat' }
    ]
  },
  // BEE
  {
    id: 'bee_u1',
    subjectId: 'bee',
    unitNumber: 1,
    label: 'Unit 1 — DC Circuit Analysis',
    weight: 'moderate',
    status: 'not_started',
    isRevisionOnly: false,
    scheduledDate: '2026-05-14',
    topics: [
      { id: 'b1_t1', label: 'Elementary Power System' },
      { id: 'b1_t2', label: 'Series & Parallel Circuits' },
      { id: 'b1_t3', label: 'Star-Delta' },
      { id: 'b1_t4', label: "Kirchhoff's Laws" },
      { id: 'b1_t5', label: 'Superposition Theorem' }
    ]
  },
  {
    id: 'bee_u2',
    subjectId: 'bee',
    unitNumber: 2,
    label: 'Unit 2 — Magnetic Circuits',
    weight: 'moderate',
    status: 'not_started',
    isRevisionOnly: false,
    scheduledDate: '2026-05-20',
    topics: [
      { id: 'b2_t1', label: 'Magnetic Circuits — Definition' },
      { id: 'b2_t2', label: 'Comparison with Electric Circuits' },
      { id: 'b2_t3', label: 'Electromagnetic Induction (EMF)' },
      { id: 'b2_t4', label: 'Self & Mutual Inductance' },
      { id: 'b2_t5', label: 'Coefficient of Coupling' },
      { id: 'b2_t6', label: 'Energy Stored in Magnetic Field' }
    ]
  },
  {
    id: 'bee_u3',
    subjectId: 'bee',
    unitNumber: 3,
    label: 'Unit 3 — Single Phase AC',
    weight: 'moderate',
    status: 'not_started',
    isRevisionOnly: false,
    scheduledDate: '2026-05-26',
    topics: [
      { id: 'b3_t1', label: 'Single Phase AC — Intro' },
      { id: 'b3_t2', label: 'Voltage & Current' },
      { id: 'b3_t3', label: 'Average & RMS Values' },
      { id: 'b3_t4', label: 'Peak Factor & Form Factor' },
      { id: 'b3_t5', label: 'Phase Difference' },
      { id: 'b3_t6', label: 'Pure R, L, C Circuits' }
    ]
  },
  {
    id: 'bee_u4',
    subjectId: 'bee',
    unitNumber: 4,
    label: 'Unit 4 — AC Circuits & 3-Phase',
    weight: 'heavy',
    status: 'not_started',
    isRevisionOnly: false,
    scheduledDate: '2026-05-29',
    topics: [
      { id: 'b4_t1', label: 'Series R-L, R-C, R-L-C Circuits' },
      { id: 'b4_t2', label: 'Impedance & Power Factor' },
      { id: 'b4_t3', label: 'Phasor Diagrams' },
      { id: 'b4_t4', label: 'Active, Reactive & Apparent Power' },
      { id: 'b4_t5', label: '3-Phase AC' },
      { id: 'b4_t6', label: 'Star & Delta Numericals' }
    ]
  },
  {
    id: 'bee_u5',
    subjectId: 'bee',
    unitNumber: 5,
    label: 'Unit 5 — Machines',
    weight: 'moderate',
    status: 'not_started',
    isRevisionOnly: false,
    scheduledDate: '2026-06-02',
    topics: [
      { id: 'b5_t1', label: 'DC Motors' },
      { id: 'b5_t2', label: 'Single Phase Induction Motor' },
      { id: 'b5_t3', label: 'Three Phase Induction Motor' },
      { id: 'b5_t4', label: 'Transformer Theory' },
      { id: 'b5_t5', label: 'Numericals — Turns, Losses, Efficiency' }
    ]
  },
  // PPS
  {
    id: 'pps_u1',
    subjectId: 'pps',
    unitNumber: 1,
    label: 'Unit 1 — Programming Fundamentals',
    weight: 'light',
    status: 'not_started',
    isRevisionOnly: false,
    scheduledDate: '2026-05-16',
    topics: [
      { id: 'pp1_t1', label: 'Programming & Problem Solving' }
    ]
  },
  {
    id: 'pps_u2',
    subjectId: 'pps',
    unitNumber: 2,
    label: 'Unit 2 — Decision Control',
    weight: 'light',
    status: 'not_started',
    isRevisionOnly: false,
    scheduledDate: '2026-05-16',
    topics: [
      { id: 'pp2_t1', label: 'Decision Control Statements' }
    ]
  },
  {
    id: 'pps_u3',
    subjectId: 'pps',
    unitNumber: 3,
    label: 'Unit 3 — Functions & Strings',
    weight: 'light',
    status: 'not_started',
    isRevisionOnly: false,
    scheduledDate: '2026-05-23',
    topics: [
      { id: 'pp3_t1', label: 'Functions & Strings' }
    ]
  },
  {
    id: 'pps_u4',
    subjectId: 'pps',
    unitNumber: 4,
    label: 'Unit 4 — File Handling & Dictionaries',
    weight: 'light',
    status: 'not_started',
    isRevisionOnly: false,
    scheduledDate: '2026-05-30',
    topics: [
      { id: 'pp4_t1', label: 'File Handling & Dictionaries' }
    ]
  },
  {
    id: 'pps_u5',
    subjectId: 'pps',
    unitNumber: 5,
    label: 'Unit 5 — Object Oriented Programming',
    weight: 'moderate',
    status: 'not_started',
    isRevisionOnly: false,
    scheduledDate: '2026-06-03',
    topics: [
      { id: 'pp5_t1', label: 'Object Oriented Programming' }
    ]
  }
];

export const GYM_SCHEDULE: GymSession[] = [
  {
    day: 'monday',
    label: 'Push Day',
    focus: 'push',
    color: 'var(--status-gym)',
    exercises: [
      { name: 'Flat DB Press', sets: 4, reps: '10-12' },
      { name: 'Shoulder Press', sets: 3, reps: '10' },
      { name: 'Lateral Raises', sets: 3, reps: '15' },
      { name: 'Tricep Pushdowns', sets: 3, reps: '15' },
      { name: 'Dips (Bodyweight)', sets: 2, reps: 'failure' },
      { name: 'Plank', sets: 1, reps: '1 min' },
      { name: 'Leg Raises', sets: 3, reps: '—' }
    ]
  },
  {
    day: 'tuesday',
    label: 'Pull Day',
    focus: 'pull',
    color: 'var(--status-gym)',
    exercises: [
      { name: 'Pull-ups / Lat Pulldown', sets: 4, reps: '8-12' },
      { name: 'Cable / DB Rows', sets: 3, reps: '10' },
      { name: 'Face Pulls', sets: 3, reps: '15' },
      { name: 'Barbell / Preacher Curls', sets: 3, reps: '12' },
      { name: 'Hammer Curls', sets: 2, reps: '12' },
      { name: 'Bicycle Crunches', sets: 3, reps: '—' },
      { name: 'Hanging Leg Raises', sets: 3, reps: '—' }
    ]
  },
  {
    day: 'wednesday',
    label: 'Leg Day',
    focus: 'legs',
    color: 'var(--status-gym)',
    exercises: [
      { name: 'Goblet / BB Squats', sets: 4, reps: '10' },
      { name: 'Leg Extensions', sets: 3, reps: '12/leg' },
      { name: 'Leg Curls (Machine)', sets: 3, reps: '15' },
      { name: 'Standing Calf Raises', sets: 3, reps: '20' },
      { name: 'Incline Walk (Treadmill)', sets: 1, reps: '15 mins' },
      { name: 'Reverse Crunches', sets: 3, reps: '15' }
    ]
  },
  {
    day: 'thursday',
    label: 'Push — Shoulder Focus',
    focus: 'push_shoulders',
    color: 'var(--status-gym)',
    exercises: [
      { name: 'Arnold Press', sets: 4, reps: '10' },
      { name: 'Lateral Raise Dropset', sets: 4, reps: '15' },
      { name: 'Incline Bench Press', sets: 3, reps: '10' },
      { name: 'Skull Crushers', sets: 3, reps: '12' },
      { name: 'Cable Tricep Extensions', sets: 3, reps: '15' },
      { name: 'Russian Twists', sets: 3, reps: '—' },
      { name: 'Plank', sets: 3, reps: '1 min' }
    ]
  },
  {
    day: 'friday',
    label: 'Pull — Bicep Aesthetics',
    focus: 'pull_biceps',
    color: 'var(--status-gym)',
    exercises: [
      { name: 'Wide Grip Pulldown', sets: 3, reps: '12' },
      { name: 'One-arm DB Rows', sets: 3, reps: '10' },
      { name: 'Seated Cable Rows', sets: 3, reps: '12' },
      { name: 'Concentration Curls', sets: 3, reps: '12' },
      { name: 'Reverse Curls', sets: 3, reps: '12' },
      { name: 'Leg Raises', sets: 3, reps: '—' },
      { name: 'Flutter Kicks', sets: 3, reps: '—' }
    ]
  },
  {
    day: 'saturday',
    label: 'Active Day',
    focus: 'rest',
    color: 'var(--status-football)',
    exercises: [
      { name: 'Football / Sport / Cycling / Long Walk', sets: 1, reps: '—' }
    ]
  },
  {
    day: 'sunday',
    label: 'Rest & Reset',
    focus: 'rest',
    color: 'var(--text-muted)',
    exercises: [
      { name: 'Stretch / Light Yoga', sets: 1, reps: '—' },
      { name: 'Hydrate', sets: 1, reps: '—' }
    ]
  }
];

export const EXAM_DAYS: { date: string; subject: SubjectId; label: string }[] = [
  { date: '2026-05-04', subject: 'mechanics',  label: 'Engineering Mechanics Exam' },
  { date: '2026-05-05', subject: 'm2',         label: 'Mathematics II Exam' },
  { date: '2026-05-06', subject: 'bee',        label: 'Basic Electrical Engineering Exam' },
  { date: '2026-05-07', subject: 'physics',    label: 'Engineering Physics Exam' },
  { date: '2026-05-08', subject: 'pps',        label: 'Programming for Problem Solving Exam' },
];
