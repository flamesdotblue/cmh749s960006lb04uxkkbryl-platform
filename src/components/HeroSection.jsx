import React from 'react';
import Spline from '@splinetool/react-spline';
import { Shield, User as UserIcon, Building2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative h-[62vh] md:h-[72vh] w-full">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/50 to-transparent pointer-events-none" />

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-xl rounded-3xl p-6 md:p-10 shadow-2xl border border-white/40"
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C88BDB]/20 text-[#502F4C] border border-[#C88BDB]/40 mb-3">
                  <Shield className="w-4 h-4" />
                  <span className="text-xs font-medium tracking-wide">Powered by Career Firewall™</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-semibold text-black leading-tight">
                  LEADiQ — Elevate Leadership with AI & Trust
                </h1>
                <p className="mt-3 text-black/80 text-base md:text-lg">
                  Hyper-personalized IDPs, real-time Leadership Readiness, and a secure, auditable Career Firewall.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="#employee" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#C88BDB] to-[#9C7FB7] text-black font-medium shadow hover:shadow-lg transition">
                    <UserIcon className="w-4 h-4" />
                    Employee Dashboard
                  </a>
                  <a href="#admin" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#70587C] text-white font-medium shadow hover:shadow-lg transition">
                    <Building2 className="w-4 h-4" />
                    HR & Admin
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 w-full lg:w-auto">
                <HeroStat label="Ready Leaders" value="128" />
                <HeroStat label="Avg. LRI" value="73%" />
                <HeroStat label="Firewall Integrity" value="98%" accent />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-6 flex items-center gap-2 text-xs text-[#502F4C]"
            >
              <Sparkles className="w-4 h-4" />
              Subtle animations, glass surfaces, and violet gradients deliver a modern, reassuring experience.
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const HeroStat = ({ label, value, accent }) => (
  <motion.div
    initial={{ y: 16, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`rounded-2xl p-4 border text-center shadow-sm ${accent ? 'bg-[#C88BDB]/25 border-[#C88BDB]/50' : 'bg-white/70 border-white/50'}`}
  >
    <div className={`text-2xl font-semibold ${accent ? 'text-[#502F4C]' : 'text-black'}`}>{value}</div>
    <div className="text-xs text-black/70 mt-1">{label}</div>
  </motion.div>
);

export default HeroSection;
