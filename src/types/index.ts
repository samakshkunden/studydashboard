export type SubjectId = 'mechanics' | 'physics' | 'm2' | 'bee' | 'pps';

export interface Subject {
  id: SubjectId;
  label: string;
  shortLabel: string;
  color: string;
  totalUnits: number;
  icon: string;
}

export type UnitStatus = 'not_started' | 'in_progress' | 'completed' | 'revision_only';
export type UnitWeight = 'heavy' | 'moderate' | 'light';

export interface Topic {
  id: string;
  label: string;
}

export interface Unit {
  id: string;
  subjectId: SubjectId;
  unitNumber: number;
  label: string;
  weight: UnitWeight;
  status: UnitStatus;
  topics: Topic[];
  isRevisionOnly: boolean;
  scheduledDate: string;
  completedDate?: string;
  notes?: string;
}

export type DayType = 'exam' | 'study' | 'revision' | 'rest' | 'active' | 'buffer';

export interface DailySchedule {
  date: string;
  dayType: DayType;
  label: string;
  unitIds: string[];
  isExamDay: boolean;
  examSubject?: SubjectId;
  gym?: GymSession;
  football: boolean;
  notes?: string;
  isSpacedRevision: boolean;
  revisionUnitIds?: string[];
}

export type GymFocus = 'push' | 'pull' | 'legs' | 'push_shoulders' | 'pull_biceps' | 'rest';

export interface Exercise {
  name: string;
  sets: number;
  reps: string;
}

export interface GymSession {
  day: string;
  label: string;
  focus: GymFocus;
  color: string;
  exercises: Exercise[];
}

export interface AppState {
  version: string;
  lastUpdated: string;
  unitProgress: {
    [unitId: string]: {
      status: UnitStatus;
      completedAt?: string;
      revisionCompletedAt?: string;
      topicProgress: {
        [topicId: string]: boolean;
      };
    };
  };
  streak: {
    current: number;
    longest: number;
    lastStudyDate: string;
    history: string[];
  };
  preferences: {
    activeView: 'dashboard' | 'calendar' | 'subjects' | 'analytics' | 'workout';
    expandedUnits: string[];
    activeSubjectFilter: SubjectId | 'all';
    sidebarCollapsed: boolean;
  };
  dailyLog: {
    [date: string]: {
      studyMinutes: number;
      completedUnitIds: string[];
      notes: string;
    };
  };
}
