import { useStudyOS } from '../context/StudyOSContext';
import { UNITS, SUBJECTS } from '../constants';

export const useProgress = () => {
  const { state } = useStudyOS();

  const getUnitStatus = (unitId: string) => {
    return state.unitProgress[unitId]?.status || UNITS.find(u => u.id === unitId)?.status || 'not_started';
  };

  const calculateOverallProgress = () => {
    const totalUnits = UNITS.length;
    const completedUnits = UNITS.filter(u => getUnitStatus(u.id) === 'completed').length;
    return {
      completed: completedUnits,
      total: totalUnits,
      percentage: Math.round((completedUnits / totalUnits) * 100),
    };
  };

  const calculateSubjectProgress = (subjectId: string) => {
    const subjectUnits = UNITS.filter(u => u.subjectId === subjectId);
    const completedUnits = subjectUnits.filter(u => getUnitStatus(u.id) === 'completed').length;
    return {
      completed: completedUnits,
      total: subjectUnits.length,
      percentage: Math.round((completedUnits / subjectUnits.length) * 100),
    };
  };

  return {
    getUnitStatus,
    calculateOverallProgress,
    calculateSubjectProgress,
  };
};
