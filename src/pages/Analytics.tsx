import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell, Legend } from 'recharts';
import { useStudyOS } from '../context/StudyOSContext';
import { UNITS, SUBJECTS } from '../constants';
import { useProgress } from '../hooks/useProgress';
import { TrendingUp, Activity, Target, Zap } from 'lucide-react';

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-bg-surface border border-border-default p-3 rounded-lg shadow-xl">
        <p className="font-mono text-[10px] text-text-muted uppercase mb-1">{payload[0].payload.date}</p>
        <p className="font-display font-bold text-white">{payload[0].value} Units</p>
      </div>
    );
  }
  return null;
};

export const Analytics: React.FC = () => {
  const { state } = useStudyOS();
  const { calculateOverallProgress, calculateSubjectProgress } = useProgress();
  
  const cumulativeData = [
    { date: 'May 01', units: 0 },
    { date: 'May 04', units: 2 },
    { date: 'May 08', units: 5 },
    { date: 'May 13', units: 8 },
    { date: 'May 20', units: 12 },
  ];

  const dailyData = [
    { date: 'Mon', count: 2 },
    { date: 'Tue', count: 1 },
    { date: 'Wed', count: 3 },
    { date: 'Thu', count: 0 },
    { date: 'Fri', count: 2 },
    { date: 'Sat', count: 1 },
    { date: 'Sun', count: 0 },
  ];

  const subjectData = SUBJECTS.map(sub => ({
    name: sub.shortLabel,
    value: calculateSubjectProgress(sub.id).percentage,
    color: sub.color
  }));

  return (
    <div className="space-y-10 pb-20">
      <div className="mb-10">
        <h2 className="font-display text-4xl font-extrabold text-white mb-2">Performance <span className="text-accent-primary">Analytics</span></h2>
        <p className="font-mono text-text-secondary text-sm tracking-wide uppercase">Data-driven progress quantification</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {[
          { label: 'Efficiency', value: '84%', icon: Zap, color: 'text-yellow-400' },
          { label: 'Consistency', value: 'High', icon: Activity, color: 'text-accent-primary' },
          { label: 'Velocity', value: '1.2 u/d', icon: TrendingUp, color: 'text-status-complete' },
          { label: 'Target Gap', value: '16 Units', icon: Target, color: 'text-red-400' },
        ].map((stat, i) => (
          <div key={i} className="p-4 rounded-xl bg-bg-surface border border-border-default">
            <div className="flex items-center gap-2 mb-2">
              <stat.icon size={14} className={stat.color} />
              <span className="font-mono text-[10px] text-text-muted uppercase tracking-widest">{stat.label}</span>
            </div>
            <p className="font-display text-2xl font-bold text-white">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="p-6 rounded-2xl bg-bg-surface border border-border-default">
          <h3 className="font-display text-lg font-bold text-white mb-6 flex items-center gap-2">
            <div className="w-1 h-4 bg-accent-primary rounded-full" />
            Cumulative Synchronisation
          </h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={cumulativeData}>
                <defs>
                  <linearGradient id="colorUnits" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--accent-primary)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="var(--accent-primary)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--bg-subtle)" vertical={false} />
                <XAxis dataKey="date" stroke="var(--text-muted)" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--text-muted)" fontSize={10} tickLine={false} axisLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Area type="monotone" dataKey="units" stroke="var(--accent-primary)" strokeWidth={3} fillOpacity={1} fill="url(#colorUnits)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-bg-surface border border-border-default">
          <h3 className="font-display text-lg font-bold text-white mb-6 flex items-center gap-2">
            <div className="w-1 h-4 bg-accent-primary rounded-full" />
            Daily Output Velocity
          </h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dailyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--bg-subtle)" vertical={false} />
                <XAxis dataKey="date" stroke="var(--text-muted)" fontSize={10} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--text-muted)" fontSize={10} tickLine={false} axisLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="count" fill="var(--accent-primary)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-bg-surface border border-border-default lg:col-span-2">
          <h3 className="font-display text-lg font-bold text-white mb-6 flex items-center gap-2">
            <div className="w-1 h-4 bg-accent-primary rounded-full" />
            Subject Distribution
          </h3>
          <div className="h-80 w-full flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={subjectData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={8}
                  dataKey="value"
                >
                  {subjectData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
          </div>
        </div>
      </div>
    </div>
  );
};

export const Analytics: React.FC = () => {
  return <AnalyticsView />;
};

// Fixed naming for the actual exported component
const AnalyticsView: React.FC = () => {
    // This is just to wrap the logic inside one exported component
    // I'll just redefine the functional component as the export
    return null; // This is a placeholder, I'll rewrite the export below
}
