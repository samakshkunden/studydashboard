import { AppState } from '../types';

const STORAGE_KEY = 'studyos_v1';

export const INITIAL_STATE: AppState = {
  version: '1.0.0',
  lastUpdated: new Date().toISOString(),
  unitProgress: {},
  streak: {
    current: 0,
    longest: 0,
    lastStudyDate: '',
    history: [],
  },
  preferences: {
    activeView: 'dashboard',
    expandedUnits: [],
    activeSubjectFilter: 'all',
    sidebarCollapsed: false,
  },
  dailyLog: {},
};

export const stateManager = {
  save: (state: AppState) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      ...state,
      lastUpdated: new Date().toISOString(),
    }));
  },
  load: (): AppState => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return INITIAL_STATE;
    try {
      return JSON.parse(saved);
    } catch (e) {
      console.error('Failed to load state from localStorage', e);
      return INITIAL_STATE;
    }
  },
  clear: () => {
    localStorage.removeItem(STORAGE_KEY);
  }
};
