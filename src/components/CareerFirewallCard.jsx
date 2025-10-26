import React from 'react';
import { Shield, Lock, FileSearch } from 'lucide-react';
import { motion } from 'framer-motion';

const CareerFirewallCard = () => {
  const trustScore = 98;

  return (
    <section id="admin" className="relative rounded-3xl border border-white/40 bg-white/60 backdrop-blur-xl p-6 shadow-[0_12px_40px_rgba(80,47,76,0.18)] overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -right-20 h-64 w-64 rounded-full bg-[#C88BDB]/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-24 h-72 w-72 rounded-full bg-[#70587C]/25 blur-3xl" />

      <div className="relative">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-[#C88BDB]/25 border border-[#C88BDB]/40">
            <Shield className="w-6 h-6 text-[#502F4C]" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-black">Career Firewall Integrity</h3>
            <p className="text-sm text-black/70">Transparent, unbiased, tamper-proof growth decisions.</p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-5 p-5 rounded-2xl bg-white border border-black/5 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <div className="text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#502F4C] to-[#9C7FB7]">
              {trustScore}%
            </div>
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

          <div className="mt-4 flex items-center gap-2">
            <Badge label="Transparent" />
            <Badge label="Unbiased" />
            <Badge label="Immutable" />
          </div>

          <button className="mt-5 w-full text-sm px-3 py-2 rounded-lg bg-gradient-to-r from-[#70587C] to-[#C88BDB] text-white font-medium hover:opacity-95 transition inline-flex items-center justify-center gap-2">
            <FileSearch className="w-4 h-4" /> View Firewall Report
          </button>
        </motion.div>
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
