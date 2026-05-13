import React from 'react';
import { User, Bell } from 'lucide-react';

export const Settings: React.FC = () => {
  return (
    <div className="space-y-10 pb-20">
      <div className="mb-10">
        <h2 className="font-display text-4xl font-extrabold text-white mb-2">System <span className="text-accent-primary">Settings</span></h2>
        <p className="font-mono text-text-secondary text-sm tracking-wide uppercase">Configure dashboard preferences & environment</p>
      </div>

      <div className="max-w-2xl space-y-6">
        <div className="p-6 rounded-2xl bg-bg-surface border border-border-default space-y-6">
          <h3 className="font-display text-lg font-bold text-white mb-4 flex items-center gap-2">
            <User size={20} className="text-accent-primary" />
            User Profile
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest">Display Name</label>
              <input type="text" defaultValue="Samaksh" className="w-full p-3 rounded-lg bg-bg-elevated border border-border-default text-white focus:border-accent-primary outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="font-mono text-[10px] text-text-muted uppercase tracking-widest">Timezone</label>
              <input type="text" defaultValue="IST (UTC+5:30)" className="w-full p-3 rounded-lg bg-bg-elevated border border-border-default text-white focus:border-accent-primary outline-none transition-all" />
            </div>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-bg-surface border border-border-default space-y-6">
          <h3 className="font-display text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Bell size={20} className="text-accent-primary" />
            Notifications
          </h3>
          <div className="space-y-4">
            {[
              { label: 'Exam Reminders', desc: 'Alert 48h before exam date' },
              { label: 'Streak Warnings', desc: 'Notify when streak is at risk' },
              { label: 'Unit Deadlines', desc: 'Notify on scheduled date' },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-bg-elevated border border-border-default">
                <div>
                  <p className="text-sm font-medium text-white">{item.label}</p>
                  <p className="text-xs text-text-muted font-mono">{item.desc}</p>
                </div>
                <div className="w-10 h-5 bg-accent-primary rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
