import React from 'react';
import { useStudyOS } from '../context/StudyOSContext';
import { useProgress } from '../hooks/useProgress';
import { UNITS, SUBJECTS } from '../constants';
import { CheckCircle2, Circle, Clock, Flame, Trophy, Target } from 'lucide-react';

const HeroGreeting: React.FC = () => {
  const { state } = useStudyOS();
  const now = new Date();
  const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' };
  
  return (
    <div className="mb-10 animate-in fade-in slide-in-from-bottom-4 duration-page">
      <h2 className="font-display text-4xl font-extrabold text-white mb-2">
        Good morning, <span className="text-accent-primary">Samaksh.</span>
      </h2>
      <p className="font-mono text-text-secondary text-sm tracking-wide uppercase">
        {now.toLocaleDateString('en-US', options)} · {now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
      </p>
    </div>
  );
};

const OverallProgressBar: React.FC = () => {
  const { calculateOverallProgress } = useProgress();
  const { completed, total, percentage } = calculateOverallProgress();

  return (
    <div className="mb-10 space-y-3 animate-in fade-in slide-in-from-bottom-6 duration-page">
      <div className="flex justify-between items-end">
        <div>
          <p className="font-mono text-xs text-text-muted uppercase tracking-widest mb-1">Overall System Progress</p>
          <p className="font-display text-xl font-bold text-white">{completed} / {total} Units Synchronized</p>
        </div>
        <p className="font-mono text-2xl font-bold text-accent-primary">{percentage}%</p>
      </div>
      <div className="h-2 w-full bg-bg-subtle rounded-full overflow-hidden border border-border-default">
        <div 
          className="h-full bg-gradient-to-r from-accent-primary to-accent-primary-dim rounded-full transition-all duration-page ease-snappy shadow-[0_0_10px_rgba(94,234,212,0.4)]"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

const TodayTimeline: React.FC = () => {
  const segments = [
    { label: 'Football', time: '6AM–10AM', color: 'bg-status-football', icon: '⚽', width: '20%' },
    { label: 'Study', time: '10AM–6PM', color: 'bg-accent-primary', icon: '📖', width: '50%' },
    { label: 'Gym', time: '6PM–8PM', color: 'bg-status-gym', icon: '🏋️', width: '20%' },
    { label: 'Rest', time: '8PM+', color: 'bg-text-muted', icon: '🌙', width: '10%' },
  ];

  return (
    <div className="mb-10 animate-in fade-in slide-in-from-bottom-8 duration-page">
      <p className="font-mono text-xs text-text-muted uppercase tracking-widest mb-4">Operational Timeline</p>
      <div className="h-14 w-full bg-bg-elevated rounded-2xl border border-border-default p-1 flex overflow-hidden gap-1">
        {segments.map((seg) => (
          <div 
            key={seg.label} 
            style={{ width: seg.width }} 
            className={`${seg.color} rounded-xl flex items-center justify-center gap-2 transition-all hover:brightness-110 cursor-help group relative`}
          >
            <span className="text-lg">{seg.icon}</span>
            <span className="font-mono text-[10px] font-bold text-white/80 uppercase hidden md:block">{seg.label}</span>
            
            {/* Tooltip */}
            <div className="absolute bottom-full mb-2 hidden group-hover:block bg-bg-surface text-white text-[10px] py-1 px-2 rounded border border-border-default whitespace-nowrap z-10">
              {seg.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const QuickStats: React.FC = () => {
  const { state } = useStudyOS();
  const { calculateOverallProgress } = useProgress();
  const { total, completed } = calculateOverallProgress();

  const stats = [
    { label: 'Streak', value: `${state.streak.current}d`, icon: Flame, color: 'text-orange-500' },
    { label: 'Units Left', value: (total - completed).toString(), icon: Target, color: 'text-accent-primary' },
    { label: 'Completion', value: `${Math.round((completed/total)*100)}%`, icon: Trophy, color: 'text-status-complete' },
    { label: 'System Status', value: 'OPTIMAL', icon: CheckCircle2, color: 'text-status-complete' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 animate-in fade-in slide-in-from-bottom-10 duration-page">
      {stats.map((stat) => (
        <div key={stat.label} className="p-4 rounded-xl bg-bg-surface border border-border-default hover:border-border-strong transition-all group">
          <div className="flex items-center gap-3 mb-2">
            <stat.icon size={16} className={`${stat.color} group-hover:scale-110 transition-transform`} />
            <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest">{stat.label}</span>
          </div>
          <p className="font-display text-2xl font-bold text-white">{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

const TodayCard: React.FC = () => {
  const { getUnitStatus } = useProgress();
  const todayStr = new Date().toISOString().split('T')[0];
  const todaysUnits = UNITS.filter(u => u.scheduledDate === todayStr);

  if (todaysUnits.length === 0) {
    return (
      <div className="p-8 rounded-2xl bg-bg-surface border border-border-default border-dashed flex flex-col items-center justify-center text-center space-y-4 mb-10">
        <div className="p-4 bg-bg-subtle rounded-full text-text-muted">
          <Clock size={32} />
        </div>
        <div>
          <p className="font-display text-xl font-bold text-white">No Units Scheduled</p>
          <p className="font-mono text-sm text-text-secondary">All systems clear for today.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-10 space-y-4 animate-in fade-in slide-in-from-bottom-12 duration-page">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-2xl font-bold text-white flex items-center gap-2">
          <div className="w-2 h-6 bg-accent-primary rounded-full" />
          Today's Focus
        </h3>
      </div>
      <div className="grid gap-4">
        {todaysUnits.map(unit => (
          <div key={unit.id} className="p-6 rounded-2xl bg-bg-surface border border-border-default flex items-center justify-between group hover:border-accent-primary/50 transition-all">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-mono font-bold text-lg ${
                getUnitStatus(unit.id) === 'completed' ? 'bg-status-complete-bg text-status-complete' : 'bg-bg-elevated text-text-secondary'
              }`}>
                {unit.unitNumber}
              </div>
              <div>
                <p className="font-display font-bold text-white group-hover:text-accent-primary transition-colors">{unit.label}</p>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-bg-subtle text-text-muted uppercase tracking-widest">{unit.weight}</span>
                  <span className="text-[10px] font-mono text-text-muted">Scheduled: {unit.scheduledDate}</span>
                </div>
              </div>
            </div>
            <button className={`px-4 py-2 rounded-lg font-mono text-xs font-bold uppercase tracking-widest transition-all ${
              getUnitStatus(unit.id) === 'completed' 
                ? 'bg-status-complete-bg text-status-complete border border-status-complete/30' 
                : 'bg-accent-primary text-bg-base hover:brightness-110'
            }`}>
              {getUnitStatus(unit.id) === 'completed' ? 'Completed' : 'Mark Complete'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const SubjectProgressGrid: React.FC = () => {
  const { calculateSubjectProgress } = useProgress();

  return (
    <div className="mb-10 animate-in fade-in slide-in-from-bottom-14 duration-page">
      <h3 className="font-display text-2xl font-bold text-white mb-6 flex items-center gap-2">
        <div className="w-2 h-6 bg-accent-primary rounded-full" />
        Subject Synchronization
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SUBJECTS.map(sub => {
          const { percentage } = calculateSubjectProgress(sub.id);
          return (
            <div key={sub.id} className="p-6 rounded-2xl bg-bg-surface border border-border-default group hover:border-border-strong transition-all">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="font-mono text-[10px] text-text-muted uppercase tracking-widest mb-1">{sub.shortLabel}</p>
                  <p className="font-display font-bold text-white group-hover:text-accent-primary transition-colors">{sub.label}</p>
                </div>
                <div className="w-8 h-8 rounded-lg bg-bg-elevated flex items-center justify-center text-white group-hover:scale-110 transition-transform" style={{ color: 'var(--' + sub.id + ')' }}>
                  {/* Icon placeholder */}
                  <div className="w-4 h-4 bg-current rounded-sm" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest">Completion</span>
                  <span className="font-mono text-xs font-bold text-white">{percentage}%</span>
                </div>
                <div className="h-1.5 w-full bg-bg-subtle rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all duration-page ease-snappy" 
                    style={{ 
                      width: `${percentage}%`, 
                      backgroundColor: `var(--subject-${sub.id})` 
                    }} 
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Dashboard: React.FC = () => {
  return (
    <div className="space-y-4 pb-20">
      <HeroGreeting />
      <OverallProgressBar />
      <TodayTimeline />
      <QuickStats />
      <TodayCard />
      <SubjectProgressGrid />
    </div>
  );
};
