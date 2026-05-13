import React from 'react';
import { useStudyOS } from '../context/StudyOSContext';
import { GYM_SCHEDULE } from '../constants';
import { Dumbbell, CheckCircle2, Circle, ChevronRight, Calendar as CalIcon } from 'lucide-react';

const WeeklyGlance: React.FC = () => {
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const today = new Date().toLocaleDateString('en-US', { weekday: 'lowercase' }) as any;

  return (
    <div className="flex gap-2 overflow-x-auto pb-6 mb-10 animate-in fade-in slide-in-from-top-4 duration-page">
      {days.map(day => {
        const session = GYM_SCHEDULE.find(s => s.day === day);
        const isToday = day === today;
        return (
          <div 
            key={day}
            className={`flex-shrink-0 w-32 p-4 rounded-2xl border transition-all cursor-pointer ${
              isToday 
                ? 'bg-accent-primary-muted border-accent-primary text-accent-primary ring-2 ring-accent-primary/20' 
                : 'bg-bg-surface border-border-default text-text-secondary hover:border-border-strong'
            }`}
          >
            <p className="font-mono text-[10px] uppercase tracking-widest mb-2">{day}</p>
            <p className="font-display font-bold text-sm truncate">{session?.label || 'Rest'}</p>
            {isToday && <div className="mt-2 w-1 h-1 bg-accent-primary rounded-full animate-pulse" />}
          </div>
        );
      })}
    </div>
  );
};

const SessionCard: React.FC<{ session: typeof GYM_SCHEDULE[0] }> = ({ session }) => {
  return (
    <div className="p-6 rounded-2xl bg-bg-surface border border-border-default group hover:border-border-strong transition-all animate-in fade-in slide-in-from-bottom-4 duration-page">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-bg-elevated text-accent-primary">
            <Dumbbell size={24} />
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold text-white">{session.label}</h3>
            <p className="font-mono text-xs text-text-muted uppercase tracking-widest">{session.focus.replace('_', ' ')} Focus</p>
          </div>
        </div>
        <div className="px-3 py-1 rounded-full bg-accent-primary-muted text-accent-primary font-mono text-[10px] font-bold uppercase tracking-tighter">
          Active Session
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-border-default">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-bg-elevated border-b border-border-default">
              <th className="p-4 font-mono text-[10px] uppercase tracking-widest text-text-muted">Exercise</th>
              <th className="p-4 font-mono text-[10px] uppercase tracking-widest text-text-muted text-center">Sets</th>
              <th className="p-4 font-mono text-[10px] uppercase tracking-widest text-text-muted text-center">Reps</th>
              <th className="p-4 font-mono text-[10px] uppercase tracking-widest text-text-muted text-right">Status</th>
            </tr>
          </thead>
          <tbody>
            {session.exercises.map((ex, i) => (
              <tr key={i} className="border-b border-border-default last:border-0 hover:bg-bg-subtle transition-colors group/row">
                <td className="p-4 font-medium text-text-primary group-hover/row:text-white transition-colors">{ex.name}</td>
                <td className="p-4 text-center font-mono text-sm text-text-secondary">{ex.sets}</td>
                <td className="p-4 text-center font-mono text-sm text-text-secondary">{ex.reps}</td>
                <td className="p-4 text-right">
                  <button className="p-1 rounded-md hover:bg-bg-elevated text-text-muted hover:text-status-complete transition-colors">
                    <Circle size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const Workout: React.FC = () => {
  const todayStr = new Date().toLocaleDateString('en-US', { weekday: 'lowercase' }) as any;
  const todaySession = GYM_SCHEDULE.find(s => s.day === todayStr);

  return (
    <div className="space-y-10 pb-20">
      <div className="mb-10">
        <h2 className="font-display text-4xl font-extrabold text-white mb-2">Physical <span className="text-accent-primary">Optimization</span></h2>
        <p className="font-mono text-text-secondary text-sm tracking-wide uppercase">Athletic training log & recovery tracking</p>
      </div>

      <WeeklyGlance />

      {todaySession ? (
        <SessionCard session={todaySession} />
      ) : (
        <div className="p-12 rounded-2xl bg-bg-surface border border-border-default border-dashed flex flex-col items-center justify-center text-center space-y-4">
          <div className="p-4 bg-bg-subtle rounded-full text-text-muted">
            <CalIcon size={32} />
          </div>
          <div>
            <p className="font-display text-xl font-bold text-white">Rest & Reset Day</p>
            <p className="font-mono text-sm text-text-secondary">Recovery is part of the training. Hydrate and stretch.</p>
          </div>
        </div>
      )}
    </div>
  );
};
