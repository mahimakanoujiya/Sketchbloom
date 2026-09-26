import React from 'react';
import { X, Flame, Award, CheckCircle2, Palette, Clock } from 'lucide-react';
import { UserStats } from '../types';

interface StatsModalProps {
  stats: UserStats;
  onClose: () => void;
}

export const StatsModal: React.FC<StatsModalProps> = ({ stats, onClose }) => {
  const BADGES = [
    {
      id: 'first-drawing',
      title: 'First Stroke',
      desc: 'Create your very first drawing',
      unlocked: stats.drawingsCount > 0,
      icon: Palette,
    },
    {
      id: 'first-lesson',
      title: 'Quick Learner',
      desc: 'Complete your first guided lesson',
      unlocked: stats.lessonsCompleted.length > 0,
      icon: CheckCircle2,
    },
    {
      id: 'streak-master',
      title: 'Art Habit',
      desc: 'Keep a 2+ day drawing streak',
      unlocked: stats.streak >= 2,
      icon: Flame,
    },
    {
      id: 'practice-pro',
      title: 'Doodle Master',
      desc: 'Complete 3 free practice sessions',
      unlocked: stats.practiceSessions >= 3,
      icon: Clock,
    },
    {
      id: 'artist-circle',
      title: 'Artisan',
      desc: 'Complete 5 different drawing lessons',
      unlocked: stats.lessonsCompleted.length >= 5,
      icon: Award,
    },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
      <div className="relative w-full max-w-sm bg-white rounded-3xl p-6 border-2 border-sky-200 shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-sky-100 flex items-center justify-center text-sky-600">
              <Award className="w-4 h-4" />
            </div>
            <h3 className="text-base font-bold text-slate-900">Your Art Journey</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1 rounded-full text-slate-400 hover:text-slate-700 min-h-[36px] min-w-[36px] flex items-center justify-center cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-2 gap-2.5 mb-6">
          <div className="bg-[#F0F7FF] border border-sky-100 rounded-2xl p-3 text-center">
            <span className="text-2xl font-black text-sky-600 tabular-nums">
              {stats.streak}
            </span>
            <p className="text-[11px] font-semibold text-slate-600 mt-0.5">Day Streak</p>
          </div>

          <div className="bg-[#F0F7FF] border border-sky-100 rounded-2xl p-3 text-center">
            <span className="text-2xl font-black text-blue-600 tabular-nums">
              {stats.lessonsCompleted.length}
            </span>
            <p className="text-[11px] font-semibold text-slate-600 mt-0.5">Lessons Done</p>
          </div>

          <div className="bg-[#F0F7FF] border border-sky-100 rounded-2xl p-3 text-center">
            <span className="text-2xl font-black text-cyan-600 tabular-nums">
              {stats.drawingsCount}
            </span>
            <p className="text-[11px] font-semibold text-slate-600 mt-0.5">Saved Art</p>
          </div>

          <div className="bg-[#F0F7FF] border border-sky-100 rounded-2xl p-3 text-center">
            <span className="text-2xl font-black text-indigo-600 tabular-nums">
              {stats.practiceSessions}
            </span>
            <p className="text-[11px] font-semibold text-slate-600 mt-0.5">Free Sessions</p>
          </div>
        </div>

        {/* Achievements / Milestone Badges */}
        <div>
          <h4 className="text-xs font-bold text-slate-800 tracking-tight mb-2.5">
            Milestones & Badges
          </h4>
          <div className="space-y-2">
            {BADGES.map((b) => {
              const Icon = b.icon;
              return (
                <div
                  key={b.id}
                  className={`flex items-center gap-3 p-2.5 rounded-xl border transition-all ${
                    b.unlocked
                      ? 'bg-sky-50/50 border-sky-200/80 text-slate-900'
                      : 'bg-slate-50 border-slate-200/60 opacity-60 text-slate-400'
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                      b.unlocked
                        ? 'bg-sky-500 text-white shadow-xs'
                        : 'bg-slate-200 text-slate-400'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold truncate">{b.title}</span>
                      {b.unlocked && (
                        <span className="text-[10px] text-sky-700 font-semibold bg-sky-100 px-1.5 py-0.2 rounded-full">
                          Unlocked
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500 truncate">{b.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
