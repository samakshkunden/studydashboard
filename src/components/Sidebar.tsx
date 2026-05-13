import React from 'react';
import { LayoutDashboard, CalendarDays, BookOpen, BarChart3, Dumbbell, Settings2, Flame } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useStudyOS } from '../context/StudyOSContext';

const NAV_ITEMS = [
  { label: 'Dashboard', icon: LayoutDashboard, path: '/' },
  { label: 'Calendar', icon: CalendarDays, path: '/calendar' },
  { label: 'Subjects', icon: BookOpen, path: '/subjects' },
  { label: 'Analytics', icon: BarChart3, path: '/analytics' },
  { label: 'Workout', icon: Dumbbell, path: '/workout' },
];

export const Sidebar: React.FC = () => {
  const { state } = useStudyOS();
  const location = useLocation();

  return (
    <aside className="w-64 h-screen bg-bg-surface/70 backdrop-blur-md border-r border-border-default flex flex-col p-6 transition-all duration-normal sticky top-0 z-20">
      <div className="mb-10">
        <h1 className="font-display text-2xl font-extrabold text-white tracking-tight">
          Study<span className="text-accent-primary">OS</span>
        </h1>
        <p className="font-mono text-[10px] text-text-muted tracking-widest uppercase mt-1">
          Sem 2 · May–June 2026
        </p>
      </div>

      <nav className="flex-1 space-y-1.5">
        {NAV_ITEMS.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-fast font-medium ${
                isActive 
                  ? 'bg-accent-primary/10 text-accent-primary' 
                  : 'text-text-secondary hover:bg-bg-subtle hover:text-text-primary'
              }`}
            >
              <item.icon size={18} className={isActive ? 'text-accent-primary' : 'text-text-muted'} />
              <span className="text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto space-y-4">
        <div className="p-4 rounded-xl bg-bg-elevated/50 border border-border-default flex items-center gap-3">
          <div className="p-2 bg-orange-500/10 rounded-lg">
            <Flame size={18} className="text-orange-500" />
          </div>
          <div>
            <p className="text-[10px] text-text-muted font-mono uppercase tracking-tighter">Streak</p>
            <p className="font-display text-base font-bold text-white">{state.streak.current} Days</p>
          </div>
        </div>

        <Link 
          to="/settings" 
          className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-text-secondary hover:bg-bg-subtle hover:text-text-primary transition-all duration-fast text-sm"
        >
          <Settings2 size={18} />
          <span>Settings</span>
        </Link>
      </div>
    </aside>
  );
};
