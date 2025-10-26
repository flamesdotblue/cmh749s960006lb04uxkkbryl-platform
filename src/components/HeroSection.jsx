import React from 'react';
import Spline from '@splinetool/react-spline';
import { Shield, User as UserIcon, Building2 } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-[60vh] md:h-[70vh] w-full">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/50 to-transparent pointer-events-none" />

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 md:p-10 shadow-2xl border border-white/40">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C88BDB]/20 text-[#502F4C] border border-[#C88BDB]/40 mb-3">
                  <Shield className="w-4 h-4" />
                  <span className="text-xs font-medium tracking-wide">Powered by Career Firewall™</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-semibold text-black leading-tight">
                  LEADiQ — AI-Powered Leadership Development with a Trust Layer
                </h1>
                <p className="mt-3 text-black/80 text-base md:text-lg">
                  Build bias-free, auditable leadership pipelines with hyper-personalized IDPs and a secure Career Firewall.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="#employee" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#C88BDB] text-black font-medium shadow hover:shadow-md transition">
                    <UserIcon className="w-4 h-4" />
                    Employee Dashboard
                  </a>
                  <a href="#admin" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#70587C] text-white font-medium shadow hover:shadow-md transition">
                    <Building2 className="w-4 h-4" />
                    HR & Admin
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 w-full lg:w-auto">
                <StatCard label="Ready Leaders" value="128" />
                <StatCard label="Avg. LRI" value="73%" />
                <StatCard label="Firewall Integrity" value="98%" accent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ label, value, accent }) => (
  <div className={`rounded-xl p-4 border text-center ${accent ? 'bg-[#C88BDB]/20 border-[#C88BDB]/40' : 'bg-white/70 border-white/40'}`}>
    <div className={`text-2xl font-semibold ${accent ? 'text-[#502F4C]' : 'text-black'}`}>{value}</div>
    <div className="text-xs text-black/70 mt-1">{label}</div>
  </div>
);

export default HeroSection;
