import React, { useState } from 'react';
import { useStudyOS } from '../context/StudyOSContext';
import { useProgress } from '../hooks/useProgress';
import { SUBJECTS, UNITS } from '../constants';
import { ChevronDown, ChevronUp, CheckCircle2, Circle, BookOpen, Info } from 'lucide-react';

const SubjectFilterBar: React.FC<{ 
  activeFilter: string; 
  setFilter: (id: string) => void 
}> = ({ activeFilter, setFilter }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8 animate-in fade-in slide-in-from-top-4 duration-page">
      <button
        onClick={() => setFilter('all')}
        className={`px-4 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-widest transition-all border ${
          activeFilter === 'all' 
            ? 'bg-accent-primary text-bg-base border-accent-primary' 
            : 'bg-bg-surface text-text-secondary border-border-default hover:border-border-strong'
        }`}
      >
        All Subjects
      </button>
      {SUBJECTS.map(sub => (
        <button
          key={sub.id}
          onClick={() => setFilter(sub.id)}
          className={`px-4 py-2 rounded-full font-mono text-xs font-bold uppercase tracking-widest transition-all border ${
            activeFilter === sub.id 
              ? 'bg-white text-bg-base border-white' 
              : 'bg-bg-surface text-text-secondary border-border-default hover:border-border-strong'
          }`}
          style={activeFilter === sub.id ? { backgroundColor: sub.color, borderColor: sub.color } : {}}
        >
          {sub.shortLabel}
        </button>
      ))}
    </div>
  );
};

const TopicItem: React.FC<{ 
  unitId: string; 
  topic: { id: string; label: string }; 
  isCompleted: boolean; 
  onToggle: (unitId: string, topicId: string) => void 
}> = ({ unitId, topic, isCompleted, onToggle }) => {
  return (
    <div 
      onClick={() => onToggle(unitId, topic.id)}
      className="flex items-center justify-between p-3 rounded-lg hover:bg-bg-subtle cursor-pointer transition-all group"
    >
      <div className="flex items-center gap-3">
        {isCompleted ? (
          <CheckCircle2 size={18} className="text-status-complete" />
        ) : (
          <Circle size={18} className="text-text-muted group-hover:text-accent-primary transition-colors" />
        )}
        <span className={`text-sm transition-all ${isCompleted ? 'text-text-secondary line-through' : 'text-text-primary'}`}>
          {topic.label}
        </span>
      </div>
      <div className="opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="font-mono text-[10px] text-text-muted uppercase tracking-tighter">Toggle</span>
      </div>
    </div>
  );
};

const UnitAccordion: React.FC<{ 
  unit: typeof UNITS[0]; 
  status: string; 
  onToggleTopic: (unitId: string, topicId: string) => void;
  onSetStatus: (unitId: string, status: any) => void;
}> = ({ unit, status, onToggleTopic, onSetStatus }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="mb-4 rounded-xl border border-border-default overflow-hidden bg-bg-surface transition-all hover:border-border-strong">
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 flex items-center justify-between cursor-pointer hover:bg-bg-subtle transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-mono font-bold text-sm ${
            status === 'completed' ? 'bg-status-complete-bg text-status-complete' : 'bg-bg-elevated text-text-secondary'
          }`}>
            {unit.unitNumber}
          </div>
          <div>
            <h4 className="font-display font-bold text-white">{unit.label}</h4>
            <div className="flex items-center gap-2">
              <span className={`text-[10px] font-mono px-2 py-0.5 rounded uppercase tracking-widest ${
                unit.weight === 'heavy' ? 'bg-red-900/30 text-red-400' : 
                unit.weight === 'moderate' ? 'bg-yellow-900/30 text-yellow-400' : 
                'bg-green-900/30 text-green-400'
              }`}>
                {unit.weight}
              </span>
              <span className="text-[10px] font-mono text-text-muted">Scheduled: {unit.scheduledDate}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex flex-col items-end mr-4">
            <span className={`text-[10px] font-mono uppercase tracking-widest ${
              status === 'completed' ? 'text-status-complete' : 'text-text-muted'
            }`}>
              {status.replace('_', ' ')}
            </span>
          </div>
          {isOpen ? <ChevronUp size={20} className="text-text-secondary" /> : <ChevronDown size={20} className="text-text-secondary" />}
        </div>
      </div>

      {isOpen && (
        <div className="p-4 pt-0 bg-bg-surface border-t border-border-default">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mt-4">
            {unit.topics.map(topic => (
              <TopicItem 
                key={topic.id} 
                unitId={unit.id} 
                topic={topic} 
                isCompleted={false} // To be mapped from state
                onToggle={onToggleTopic}
              />
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-border-default flex justify-between items-center">
            <div className="flex items-center gap-2 text-text-muted">
              <Info size={14} />
              <span className="text-xs font-mono italic">Mark as completed to synchronize unit</span>
            </div>
            <button 
              onClick={() => onSetStatus(unit.id, 'completed')}
              className={`px-4 py-2 rounded-lg font-mono text-xs font-bold uppercase tracking-widest transition-all ${
                status === 'completed' 
                  ? 'bg-status-complete-bg text-status-complete border border-status-complete/30' 
                  : 'bg-accent-primary text-bg-base hover:brightness-110'
              }`}
            >
              {status === 'completed' ? 'Unit Synchronized' : 'Sync Unit'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export const Subjects: React.FC = () => {
  const { state, dispatch } = useStudyOS();
  const [filter, setFilter] = useState('all');

  const handleToggleTopic = (unitId: string, topicId: string) => {
    dispatch({ type: 'TOGGLE_TOPIC', unitId, topicId });
  };

  const handleSetStatus = (unitId: string, status: any) => {
    dispatch({ type: 'SET_UNIT_STATUS', unitId, status });
  };

  const filteredSubjects = filter === 'all' ? SUBJECTS : SUBJECTS.filter(s => s.id === filter);

  return (
    <div className="space-y-8 pb-20 animate-in fade-in duration-page">
      <div className="mb-10">
        <h2 className="font-display text-4xl font-extrabold text-white mb-2">Syllabus <span className="text-accent-primary">Explorer</span></h2>
        <p className="font-mono text-text-secondary text-sm tracking-wide uppercase">Systematic dismantling of course requirements</p>
      </div>

      <SubjectFilterBar activeFilter={filter} setFilter={setFilter} />

      <div className="grid grid-cols-1 gap-12">
        {filteredSubjects.map(sub => {
          const subjectUnits = UNITS.filter(u => u.subjectId === sub.id);
          
          return (
            <div key={sub.id} className="space-y-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-bg-surface border border-border-default" style={{ color: sub.color }}>
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-white">{sub.label}</h3>
                  <p className="font-mono text-xs text-text-muted uppercase tracking-widest">
                    {subjectUnits.length} Core Units Identified
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {subjectUnits.map(unit => (
                  <UnitAccordion 
                    key={unit.id} 
                    unit={unit} 
                    status={state.unitProgress[unit.id]?.status || unit.status} 
                    onToggleTopic={handleToggleTopic}
                    onSetStatus={handleSetStatus}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
    />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
