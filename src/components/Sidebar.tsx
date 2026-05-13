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
    <aside className="w-60 h-screen bg-bg-surface border-r border-border-default flex flex-col p-6 transition-all duration-normal">
      <div className="mb-8">
        <h1 className="font-display text-2xl font-extrabold text-accent-primary tracking-tight">
          StudyOS
        </h1>
        <p className="font-mono text-xs text-text-muted tracking-widest uppercase">
          Sem 2 · May–June 2026
        </p>
      </div>

      <nav className="flex-1 space-y-2">
        {NAV_ITEMS.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-fast font-medium ${
                isActive 
                  ? 'bg-accent-primary-muted text-accent-primary border-l-4 border-accent-primary' 
                  : 'text-text-secondary hover:bg-bg-subtle hover:text-text-primary'
              }`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto space-y-6">
        <div className="p-4 rounded-xl bg-bg-elevated border border-border-default flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-orange-500/10 rounded-lg">
              <Flame size={20} className="text-orange-500" />
            </div>
            <div>
              <p className="text-xs text-text-muted font-mono uppercase tracking-tighter">Streak</p>
              <p className="font-display text-lg font-bold text-white">{state.streak.current} Days</p>
            </div>
          </div>
        </div>

        <Link 
          to="/settings" 
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-text-secondary hover:bg-bg-subtle hover:text-text-primary transition-all duration-fast"
        >
          <Settings2 size={20} />
          <span>Settings</span>
        </Link>
      </div>
    </aside>
  );
};
