import React from 'react';
import { Shield, User } from 'lucide-react';
import { signInWithGoogle, signOutUser } from '../firebase/config';

const Header = ({ user }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-white/40 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-lg bg-[#C88BDB]/30 border border-[#C88BDB]/40">
            <Shield className="w-5 h-5 text-[#502F4C]" />
          </div>
          <div className="font-semibold tracking-tight text-black">LEADiQ</div>
          <span className="ml-2 text-xs px-2 py-1 rounded-full bg-[#70587C]/20 text-[#502F4C] border border-[#70587C]/30 hidden md:inline">Career Firewall™</span>
        </div>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <div className="hidden sm:flex flex-col items-end mr-2">
                <span className="text-sm font-medium text-black/90">{user.displayName || 'Employee'}</span>
                <span className="text-xs text-black/60">{user.email || ''}</span>
              </div>
              {user.photoURL ? (
                <img src={user.photoURL} alt="avatar" className="w-8 h-8 rounded-full border border-black/10" />
              ) : (
                <div className="w-8 h-8 rounded-full bg-[#70587C]/20 border border-[#70587C]/40 flex items-center justify-center">
                  <User className="w-4 h-4 text-[#502F4C]" />
                </div>
              )}
              <button onClick={signOutUser} className="text-sm px-3 py-2 rounded-lg bg-white border border-black/10 hover:bg-white/80 transition">Sign out</button>
            </>
          ) : (
            <button onClick={signInWithGoogle} className="text-sm px-4 py-2 rounded-lg bg-[#C88BDB] text-black font-medium shadow hover:shadow-md transition">
              Sign in
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
