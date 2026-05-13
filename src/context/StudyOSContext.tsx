import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { AppState } from '../types';
import { INITIAL_STATE, stateManager } from './state-manager';

type StateAction = 
  | { type: 'SET_UNIT_STATUS'; unitId: string; status: AppState['unitProgress'][string]['status'] }
  | { type: 'TOGGLE_TOPIC'; unitId: string; topicId: string }
  | { type: 'UPDATE_PREFERENCE'; key: keyof AppState['preferences']; value: any }
  | { type: 'INCREMENT_STREAK' }
  | { type: 'RESET_STREAK' }
  | { type: 'SET_STATE'; state: AppState };

const stateReducer = (state: AppState, action: StateAction): AppState => {
  switch (action.type) {
    case 'SET_UNIT_STATUS':
      return {
        ...state,
        unitProgress: {
          ...state.unitProgress,
          [action.unitId]: {
            ...state.unitProgress[action.unitId],
            status: action.status,
            completedAt: action.status === 'completed' ? new Date().toISOString() : state.unitProgress[action.unitId]?.completedAt,
          },
        },
      };
    case 'TOGGLE_TOPIC': {
      const unitProg = state.unitProgress[action.unitId] || { status: 'not_started', topicProgress: {} };
      return {
        ...state,
        unitProgress: {
          ...state.unitProgress,
          [action.unitId]: {
            ...unitProg,
            topicProgress: {
              ...unitProg.topicProgress,
              [action.topicId]: !unitProg.topicProgress[action.topicId],
            },
          },
        },
      };
    }
    case 'UPDATE_PREFERENCE':
      return {
        ...state,
        preferences: {
          ...state.preferences,
          [action.key]: action.value,
        },
      };
    case 'INCREMENT_STREAK':
      return {
        ...state,
        streak: {
          ...state.streak,
          current: state.streak.current + 1,
          longest: Math.max(state.streak.longest, state.streak.current + 1),
          lastStudyDate: new Date().toISOString().split('T')[0],
          history: [...state.streak.history, new Date().toISOString().split('T')[0]],
        },
      };
    case 'RESET_STREAK':
      return {
        ...state,
        streak: {
          ...state.streak,
          current: 0,
          lastStudyDate: '',
        },
      };
    case 'SET_STATE':
      return action.state;
    default:
      return state;
  }
};

const StudyOSContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<StateAction>;
} | undefined>(undefined);

export const StudyOSProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(stateReducer, stateManager.load());

  useEffect(() => {
    stateManager.save(state);
  }, [state]);

  return (
    <StudyOSContext.Provider value={{ state, dispatch }}>
      {children}
    </StudyOSContext.Provider>
  );
};

export const useStudyOS = () => {
  const context = useContext(StudyOSContext);
  if (!context) throw new Error('useStudyOS must be used within a StudyOSProvider');
  return context;
};
