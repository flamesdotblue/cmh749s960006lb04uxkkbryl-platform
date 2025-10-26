import React from 'react';
import HeroSection from './components/HeroSection';
import ReadinessDashboard from './components/ReadinessDashboard';
import CareerFirewallCard from './components/CareerFirewallCard';
import MarketplacePreview from './components/MarketplacePreview';

function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#502F4C] via-[#70587C] to-[#C88BDB] text-black">
      <HeroSection />

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ReadinessDashboard />
          </div>
          <div className="lg:col-span-1">
            <CareerFirewallCard />
          </div>
        </div>

        <div className="mt-8">
          <MarketplacePreview />
        </div>
      </main>

      <footer className="border-t border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <p className="text-sm text-black/80">© {new Date().getFullYear()} LEADiQ — Career Firewall™</p>
          <div className="text-sm text-black/70">AI for Trustworthy Leadership Growth</div>
        </div>
      </footer>
    </div>
  );
}

export default App;
