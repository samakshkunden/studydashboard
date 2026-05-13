import React, { useState } from 'react';
import { useStudyOS } from '../context/StudyOSContext';
import { EXAM_DAYS } from '../constants';
import { Calendar as CalIcon, ChevronLeft, ChevronRight, Info, AlertCircle } from 'lucide-react';

const CalendarDay: React.FC<{ 
  date: string; 
  dayType: string; 
  isSelected: boolean; 
  onSelect: (date: string) => void;
}> = ({ date, dayType, isSelected, onSelect }) => {
  const colors: any = {
    exam: 'bg-status-exam-bg text-status-exam border-status-exam',
    study: 'bg-bg-surface text-text-primary border-border-default',
    revision: 'bg-status-revision-bg text-status-revision border-status-revision',
    rest: 'bg-bg-subtle text-text-muted border-border-default',
  };

  return (
    <div 
      onClick={() => onSelect(date)}
      className={`aspect-square p-2 border rounded-lg cursor-pointer transition-all flex flex-col justify-between ${
        isSelected ? 'ring-2 ring-accent-primary border-accent-primary bg-bg-elevated' : colors[dayType] || colors.rest
      }`}
    >
      <span className="font-mono text-[10px] uppercase opacity-60">{date.split('-')[2]}</span>
      <div className="w-full h-1 bg-current opacity-30 rounded-full" />
    </div>
  );
};

export const Calendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();

  const getDayType = (date: string) => {
    if (EXAM_DAYS.some(e => e.date === date)) return 'exam';
    return 'study'; // Simplified for prototype
  };

  return (
    <div className="space-y-8 pb-20">
      <div className="mb-10">
        <h2 className="font-display text-4xl font-extrabold text-white mb-2">Temporal <span className="text-accent-primary">Planning</span></h2>
        <p className="font-mono text-text-secondary text-sm tracking-wide uppercase">Examination countdown & study cadence</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 p-6 rounded-2xl bg-bg-surface border border-border-default">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-display text-xl font-bold text-white">
              {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
            </h3>
            <div className="flex gap-2">
              <button 
                onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)))}
                className="p-2 rounded-lg bg-bg-elevated border border-border-default text-text-secondary hover:text-white"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)))}
                className="p-2 rounded-lg bg-bg-elevated border border-border-default text-text-secondary hover:text-white"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
              <div key={d} className="text-center font-mono text-[10px] uppercase text-text-muted mb-2">{d}</div>
            ))}
            {Array.from({ length: firstDayOfMonth }).map((_, i) => <div key={`empty-${i}`} />)}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const date = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, '0')}-${String(i + 1).padStart(2, '0')}`;
              return (
                <CalendarDay 
                  key={date} 
                  date={date} 
                  dayType={getDayType(date)} 
                  isSelected={selectedDate === date} 
                  onSelect={setSelectedDate} 
                />
              );
            })}
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-2xl bg-bg-surface border border-border-default">
            <h4 className="font-display font-bold text-white mb-4 flex items-center gap-2">
              <Info size={18} className="text-accent-primary" />
              Day Detail
            </h4>
            <p className="font-mono text-sm text-text-secondary mb-4">{selectedDate}</p>
            <div className="p-4 rounded-xl bg-bg-elevated border border-border-default space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-xs text-text-muted font-mono">Status</span>
                <span className="text-xs font-bold text-accent-primary uppercase tracking-widest">Operational</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-xs text-text-muted font-mono">Priority</span>
                <span className="text-xs font-bold text-status-exam uppercase tracking-widest">Critical</span>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-status-exam-bg border border-status-exam/30">
            <div className="flex items-center gap-3 mb-4 text-status-exam">
              <AlertCircle size={20} />
              <h4 className="font-display font-bold uppercase tracking-tighter">Exam Alert</h4>
            </div>
            <p className="text-sm text-white/80 mb-4">The next examination is approaching. Ensure all dependent units are synchronized.</p>
            <div className="font-mono text-lg font-bold text-status-exam">T-Minus 12 Days</div>
          </div>
        </div>
      </div>
    </div>
  );
};
