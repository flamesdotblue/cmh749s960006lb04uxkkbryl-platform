import React from 'react';
import { Building2, ArrowRight } from 'lucide-react';

const MarketplacePreview = () => {
  const items = [
    {
      title: 'Strategy Sprint — 4 weeks',
      company: 'Acme Corp',
      skills: ['Leadership', 'OKRs'],
      type: 'Project',
      duration: '4w',
    },
    {
      title: 'Mentorship — Product Leadership',
      company: 'Nova Labs',
      skills: ['Stakeholder Mgmt', 'Roadmapping'],
      type: 'Mentorship',
      duration: '8 sessions',
    },
    {
      title: 'Rotation — Ops Excellence',
      company: 'Vertex Ltd',
      skills: ['Lean', 'Cross-Functional'],
      type: 'Rotation',
      duration: '6w',
    },
  ];

  return (
    <section className="bg-white/70 backdrop-blur rounded-2xl border border-white/40 p-6 md:p-8 shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg md:text-xl font-semibold text-black flex items-center gap-2">
          <Building2 className="w-5 h-5 text-[#70587C]" /> Cross-Company Talent Marketplace
        </h3>
        <button className="text-sm px-4 py-2 rounded-lg bg-[#70587C] text-white hover:opacity-90 transition inline-flex items-center gap-2">
          Explore All
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item.title} className="rounded-xl p-4 bg-[#F9F4F5] border border-black/5">
            <div className="font-medium text-black">{item.title}</div>
            <div className="text-sm text-black/70 mt-1">{item.company}</div>
            <div className="flex flex-wrap gap-2 mt-3">
              {item.skills.map((s) => (
                <span key={s} className="text-xs px-2 py-1 rounded-full bg-white border border-black/5 text-[#502F4C]">{s}</span>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between text-xs text-black/70">
              <span>{item.type}</span>
              <span>{item.duration}</span>
            </div>
            <button className="mt-4 w-full text-sm px-3 py-2 rounded-lg bg-[#C88BDB] text-black font-medium hover:opacity-90 transition">
              Request Match
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarketplacePreview;
