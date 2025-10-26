import React from 'react';
import { Shield, Lock } from 'lucide-react';

const CareerFirewallCard = () => {
  const trustScore = 98;

  return (
    <section id="admin" className="bg-white rounded-2xl border border-black/5 p-6 shadow relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#C88BDB]/30 blur-3xl" />
        <div className="absolute -bottom-24 -left-20 w-72 h-72 rounded-full bg-[#70587C]/30 blur-3xl" />
      </div>
      <div className="relative">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-[#C88BDB]/20 border border-[#C88BDB]/40">
            <Shield className="w-6 h-6 text-[#502F4C]" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black">Career Firewall Integrity</h3>
            <p className="text-sm text-black/70">Transparent, unbiased, tamper-proof growth decisions.</p>
          </div>
        </div>

        <div className="mt-5 p-4 rounded-xl bg-[#F9F4F5] border border-black/5">
          <div className="flex items-center justify-between">
            <div className="text-3xl font-semibold text-[#502F4C]">{trustScore}%</div>
            <span className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">
              <Lock className="w-4 h-4" /> Secure
            </span>
          </div>
          <div className="text-xs text-black/70 mt-1">Career Integrity: High confidence</div>

          <ul className="mt-4 space-y-2 text-sm text-black/80">
            <li>• Transparency log generated for each recommendation</li>
            <li>• Fairness check passed on anonymized attributes</li>
            <li>• Decision record hashed and stored immutably</li>
          </ul>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          <Badge label="Transparent" />
          <Badge label="Unbiased" />
          <Badge label="Immutable" />
        </div>
      </div>
    </section>
  );
};

const Badge = ({ label }) => (
  <div className="text-center text-xs font-medium px-3 py-2 rounded-lg bg-white border border-black/5 shadow-sm text-[#502F4C]">
    {label}
  </div>
);

export default CareerFirewallCard;
