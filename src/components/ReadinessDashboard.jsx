import React from 'react';
import { BarChart3, Sparkles } from 'lucide-react';

const ReadinessDashboard = () => {
  const readiness = 72; // demo value
  const progress = [
    { label: 'Mentorship Sessions', value: 60 },
    { label: 'Leadership Modules', value: 40 },
    { label: 'Job Rotation', value: 25 },
  ];

  return (
    <section id="employee" className="bg-[#F9F4F5] rounded-2xl border border-black/5 p-6 md:p-8 shadow">
      <div className="flex items-center justify-between">
        <h2 className="text-xl md:text-2xl font-semibold text-black flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-[#70587C]" /> Employee Dashboard
        </h2>
        <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-[#70587C]/10 text-[#502F4C] border border-[#70587C]/30">
          <Sparkles className="w-4 h-4" /> AI Recommendations Enabled
        </span>
      </div>

      <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Gauge value={readiness} />
        </div>
        <div className="lg:col-span-2">
          <RecommendationsPanel />
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {progress.map((p) => (
              <ProgressTile key={p.label} label={p.label} value={p.value} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Gauge = ({ value = 0 }) => {
  const size = 220;
  const stroke = 16;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (value / 100) * circumference;

  return (
    <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm flex flex-col items-center justify-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#E9D7F6"
            strokeWidth={stroke}
            fill="none"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="#C88BDB"
            strokeWidth={stroke}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={`${progress} ${circumference}`}
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-4xl font-semibold text-[#502F4C]">{value}%</div>
            <div className="text-sm text-black/70">Leadership Readiness Index</div>
          </div>
        </div>
      </div>
      <div className="mt-4 text-xs text-black/70">Updated in real-time as you complete trainings and mentorships.</div>
    </div>
  );
};

const RecommendationsPanel = () => {
  const items = [
    {
      title: 'Mentorship: Pair with Senior Manager (People Ops)',
      impact: 'High',
      urgency: 'Immediate',
      tag: 'Mentorship',
    },
    {
      title: 'NPTEL: Organizational Leadership Course',
      impact: 'Medium',
      urgency: 'This week',
      tag: 'Govt Training',
    },
    {
      title: 'Job Rotation: 4-week Project in Strategy',
      impact: 'High',
      urgency: 'Plan',
      tag: 'Rotation',
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-black">AI Recommendations</h3>
        <button className="text-sm px-3 py-1 rounded-lg bg-[#C88BDB]/30 text-[#502F4C] border border-[#C88BDB]/40 hover:bg-[#C88BDB]/40 transition">Refresh</button>
      </div>
      <ul className="space-y-3">
        {items.map((it) => (
          <li key={it.title} className="p-4 rounded-xl border border-black/5 bg-[#F9F4F5]">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-black">{it.title}</div>
                <div className="text-xs text-black/60 mt-1">Impact: {it.impact} · Urgency: {it.urgency}</div>
              </div>
              <span className="text-xs px-2 py-1 rounded-full bg-[#70587C]/10 text-[#502F4C] border border-[#70587C]/30">{it.tag}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ProgressTile = ({ label, value }) => {
  return (
    <div className="bg-white rounded-xl p-4 border border-black/5">
      <div className="text-sm font-medium text-black mb-2">{label}</div>
      <div className="w-full h-2 rounded-full bg-black/10 overflow-hidden">
        <div
          className="h-2 rounded-full bg-gradient-to-r from-[#70587C] to-[#C88BDB]"
          style={{ width: `${value}%` }}
        />
      </div>
      <div className="text-right text-xs text-black/60 mt-1">{value}%</div>
    </div>
  );
};

export default ReadinessDashboard;
