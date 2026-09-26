import React from 'react';
import {
  Sparkles,
  ArrowRight,
  Palette,
  Clock,
  Play,
  CheckCircle2,
} from 'lucide-react';
import { Lesson, Category, UserStats } from '../types';
import { InstallAppButton } from '../components/InstallAppButton';

interface HomeViewProps {
  lessons: Lesson[];
  stats: UserStats;
  onSelectLesson: (lesson: Lesson) => void;
  onQuickPractice: () => void;
  onSelectCategory: (category: Category) => void;
  onViewAllLessons: () => void;
}

const CATEGORIES: { label: Category; emoji: string }[] = [
  { label: 'Animals', emoji: '🐱' },
  { label: 'Flowers', emoji: '🌸' },
  { label: 'Nature', emoji: '🌿' },
  { label: 'Cute', emoji: '🎀' },
  { label: 'Food', emoji: '🧁' },
  { label: 'Objects', emoji: '🏡' },
  { label: 'Landscapes', emoji: '🏔️' },
];

export const HomeView: React.FC<HomeViewProps> = ({
  lessons,
  stats,
  onSelectLesson,
  onQuickPractice,
  onSelectCategory,
  onViewAllLessons,
}) => {
  const featuredLesson = lessons.find((l) => l.isFeatured) || lessons[0];
  const popularLessons = lessons.filter((l) => l.isPopular);

  // Suggested continue lessons
  const continueLessons = lessons.filter((l) => !stats.lessonsCompleted.includes(l.id)).slice(0, 3);

  return (
    <div className="pb-24 max-w-xl mx-auto px-4 pt-3 space-y-6">
      {/* Greeting Banner */}
      <div>
        <p className="text-xs font-semibold text-sky-600 tracking-wide uppercase">
          Welcome Artist
        </p>
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight text-balance">
          What would you like to draw today?
        </h2>
      </div>

      {/* Large Featured Drawing Lesson Card */}
      {featuredLesson && (
        <div className="relative bg-gradient-to-br from-sky-400 via-blue-500 to-sky-600 rounded-3xl p-5 text-white shadow-lg shadow-sky-200/60 overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute -bottom-8 -right-8 w-44 h-44 bg-white/10 rounded-full blur-2xl pointer-events-none" />

          <div className="flex items-start justify-between relative z-10 mb-3">
            <span className="text-[11px] font-bold tracking-wider uppercase bg-white/20 backdrop-blur-xs px-2.5 py-0.5 rounded-full">
              Featured Tutorial
            </span>
            <div className="flex items-center gap-1.5 text-xs text-sky-100 font-medium">
              <Clock className="w-3.5 h-3.5" />
              <span>{featuredLesson.estimatedTime}</span>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-3 items-center relative z-10">
            <div className="col-span-3 space-y-2">
              <h3 className="text-xl font-black tracking-tight leading-tight">
                {featuredLesson.title}
              </h3>
              <p className="text-xs text-sky-50/90 line-clamp-2 leading-relaxed">
                {featuredLesson.description}
              </p>
              <div className="flex items-center gap-2 text-[11px] text-sky-100 pt-1 font-medium">
                <span>{featuredLesson.steps.length} Easy Steps</span>
                <span aria-hidden="true">·</span>
                <span>{featuredLesson.difficulty}</span>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onSelectLesson(featuredLesson)}
                  className="inline-flex items-center gap-1.5 py-2.5 px-4 rounded-xl bg-white text-sky-700 hover:bg-sky-50 font-bold text-xs shadow-xs transition-transform active:scale-95 cursor-pointer min-h-[44px]"
                >
                  <Play className="w-3.5 h-3.5 fill-sky-700" />
                  <span>Start Lesson</span>
                </button>
              </div>
            </div>

            {/* Featured Thumbnail */}
            <div className="col-span-2 flex justify-center">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-white p-2 border-2 border-white/60 shadow-md">
                <svg
                  viewBox="0 0 300 300"
                  className="w-full h-full"
                  dangerouslySetInnerHTML={{ __html: featuredLesson.thumbnailSvg }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Categories Horizontal Carousel */}
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <h3 className="text-sm font-bold text-slate-900 tracking-tight">Categories</h3>
          <button
            onClick={onViewAllLessons}
            className="text-xs text-sky-600 hover:text-sky-700 font-semibold cursor-pointer"
          >
            See All
          </button>
        </div>

        <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.label}
              onClick={() => onSelectCategory(cat.label)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-white border border-sky-100 shadow-2xs hover:border-sky-300 hover:bg-sky-50/50 transition-all shrink-0 cursor-pointer min-h-[44px]"
            >
              <span className="text-base">{cat.emoji}</span>
              <span className="text-xs font-semibold text-slate-700">{cat.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Quick Practice Card */}
      <div className="bg-white rounded-3xl p-4 border border-sky-100 shadow-2xs flex items-center justify-between">
        <div className="space-y-1 max-w-[70%]">
          <div className="flex items-center gap-1 text-[11px] font-bold text-sky-600 uppercase tracking-wide">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Quick Practice</span>
          </div>
          <h4 className="text-sm font-bold text-slate-900">Blank Sketch Canvas</h4>
          <p className="text-xs text-slate-600">
            Doodle freely with pencils, brushes, and calm sky tones.
          </p>
        </div>
        <button
          onClick={onQuickPractice}
          className="flex items-center justify-center gap-1 px-3.5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold shadow-xs shadow-sky-200 transition-transform active:scale-95 cursor-pointer min-h-[44px]"
        >
          <Palette className="w-4 h-4" />
          <span>Draw</span>
        </button>
      </div>

      {/* PWA Install App Banner */}
      <InstallAppButton variant="card" />

      {/* Popular Lessons Carousel / Cards */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-bold text-slate-900 tracking-tight">Popular Lessons</h3>
          <button
            onClick={onViewAllLessons}
            className="text-xs text-sky-600 hover:text-sky-700 font-semibold cursor-pointer"
          >
            Explore Library
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {popularLessons.slice(0, 4).map((lesson) => {
            const isCompleted = stats.lessonsCompleted.includes(lesson.id);
            return (
              <div
                key={lesson.id}
                onClick={() => onSelectLesson(lesson)}
                className="group bg-white rounded-2xl p-3 border border-sky-100 hover:border-sky-300 shadow-2xs hover:shadow-md transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="w-full aspect-square rounded-xl bg-[#F0F7FF] border border-sky-100/80 p-2 mb-2 flex items-center justify-center relative overflow-hidden group-hover:scale-[1.02] transition-transform">
                    <svg
                      viewBox="0 0 300 300"
                      className="w-full h-full"
                      dangerouslySetInnerHTML={{ __html: lesson.thumbnailSvg }}
                    />
                    {isCompleted && (
                      <div className="absolute top-1.5 right-1.5 p-1 rounded-full bg-emerald-500 text-white shadow-2xs">
                        <CheckCircle2 className="w-3 h-3" />
                      </div>
                    )}
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 line-clamp-1 group-hover:text-sky-600 transition-colors">
                    {lesson.title}
                  </h4>
                </div>

                <div className="flex items-center gap-1.5 text-[11px] text-slate-500 pt-2 font-medium">
                  <span>{lesson.difficulty}</span>
                  <span aria-hidden="true">·</span>
                  <span>{lesson.steps.length} steps</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Continue Drawing Section */}
      {continueLessons.length > 0 && (
        <div>
          <h3 className="text-sm font-bold text-slate-900 tracking-tight mb-2.5">
            Suggested Next Lessons
          </h3>
          <div className="space-y-2">
            {continueLessons.map((les) => (
              <div
                key={les.id}
                onClick={() => onSelectLesson(les)}
                className="flex items-center justify-between p-3 rounded-2xl bg-white border border-sky-100 hover:border-sky-300 shadow-2xs transition-all cursor-pointer min-h-[56px]"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#F0F7FF] border border-sky-100 p-1 shrink-0 flex items-center justify-center">
                    <svg
                      viewBox="0 0 300 300"
                      className="w-full h-full"
                      dangerouslySetInnerHTML={{ __html: les.thumbnailSvg }}
                    />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">{les.title}</h5>
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
                      <span>{les.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{les.estimatedTime}</span>
                    </div>
                  </div>
                </div>

                <div className="p-2 rounded-xl text-sky-600 hover:bg-sky-50">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
