import React from 'react';
import { Shield, User } from 'lucide-react';
import { signInWithGoogle, signOutUser } from '../firebase/config';
import { motion } from 'framer-motion';

const Header = ({ user }) => {
  return (
    <header className="sticky top-0 z-40 w-full">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="mt-4 h-16 rounded-2xl border border-white/30 bg-white/30 backdrop-blur-xl shadow-[0_8px_30px_rgb(80,47,76,0.25)] flex items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-[#C88BDB]/40 border border-[#C88BDB]/60 shadow-sm">
              <Shield className="w-5 h-5 text-[#502F4C]" />
            </div>
            <div>
              <div className="font-semibold tracking-tight text-black">LEADiQ</div>
              <div className="text-[11px] text-black/70">Leadership Enhancement & Career Firewall</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {user ? (
              <>
                <div className="hidden md:flex flex-col items-end mr-2">
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
                <button
                  onClick={signOutUser}
                  className="text-sm px-3 py-2 rounded-lg bg-white/80 border border-black/10 hover:bg-white transition shadow"
                >
                  Sign out
                </button>
              </>
            ) : (
              <button
                onClick={signInWithGoogle}
                className="text-sm px-4 py-2 rounded-lg bg-gradient-to-r from-[#C88BDB] to-[#8F6CAB] text-black font-medium shadow hover:shadow-lg transition"
              >
                Sign in
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
