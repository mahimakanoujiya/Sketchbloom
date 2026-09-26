import React from 'react';
import { Sparkles, Flame } from 'lucide-react';
import { UserStats } from '../types';
import { InstallAppButton } from './InstallAppButton';

interface HeaderProps {
  stats: UserStats;
  onOpenStats?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ stats, onOpenStats }) => {
  return (
    <header className="sticky top-0 z-30 bg-[#F0F7FF]/90 backdrop-blur-md border-b border-sky-100/80 px-4 py-3">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        {/* Brand Zone: Clean wordmark with light-blue emblem */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-sky-400 to-blue-500 flex items-center justify-center text-white shadow-sm shadow-sky-200">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight text-slate-900 leading-none">
              Sketch<span className="text-sky-600">Bloom</span>
            </h1>
            <p className="text-[10px] text-slate-500 font-medium">Learn. Draw. Create.</p>
          </div>
        </div>

        {/* Action Zone: Install App button & Streak pill */}
        <div className="flex items-center gap-2">
          <InstallAppButton variant="header" />

          <button
            onClick={onOpenStats}
            aria-label="View learning streak and stats"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-sky-200/80 shadow-2xs text-xs font-semibold text-slate-700 hover:bg-sky-50 transition-colors cursor-pointer min-h-[36px]"
          >
            <Flame className="w-3.5 h-3.5 text-sky-500 fill-sky-500" />
            <span>{stats.streak} {stats.streak === 1 ? 'day' : 'days'} streak</span>
          </button>
        </div>
      </div>
    </header>
  );
};

